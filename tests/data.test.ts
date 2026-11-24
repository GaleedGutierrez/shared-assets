/* eslint-disable security/detect-non-literal-fs-filename -- reads this repo's own src/ */
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

import { describe, expect, it } from 'vitest';

import { freelanceProjects } from '../src/freelanceProjects.js';
import type {
	LazyImage,
	ResponsiveImages,
	SizedImages,
} from '../src/models/shared.model.js';
import { openSourceProjects } from '../src/openSourceProjects.js';
import { personalProjects } from '../src/personalProjects.js';
import { technologies } from '../src/technologies.js';

const SRC = path.resolve(import.meta.dirname, '../src');

const collections = [
	['personalProjects', personalProjects],
	['freelanceProjects', freelanceProjects],
	['openSourceProjects', openSourceProjects],
] as const;

interface ScreenshotSlot {
	slot: string;
	url: string;
}

/**
 * In Vitest an image import resolves to its URL, not to Astro's metadata, so
 * the URL tells which file landed in each slot.
 * @param image - Lazy image from the data.
 * @returns The resolved file URL.
 */
const resolveUrl = async (image: LazyImage): Promise<string> => {
	const { default: asset } = await image;

	return asset as unknown as string;
};

const resolveSlots = (
	screenshots: ResponsiveImages,
): Promise<ScreenshotSlot[]> =>
	Promise.all(
		(Object.entries(screenshots) as [string, SizedImages][]).flatMap(
			([format, sizes]) =>
				Object.entries(sizes).map(async ([size, image]) => ({
					slot: `${format}/${size}`,
					url: await resolveUrl(image),
				})),
		),
	);

const urlsOf = (project: object): string[] =>
	Object.entries(project).flatMap(([key, value]) =>
		/url$/i.test(key) && typeof value === 'string' ? [value] : [],
	);

describe.each(collections)('%s', (_, projects) => {
	it('has unique ids', () => {
		const ids = projects.map((project) => project.id);

		expect(new Set(ids).size).toBe(ids.length);
	});

	it('puts every screenshot variant in its own slot, named after the id', async () => {
		const results = await Promise.all(
			projects.map(async (project) => ({
				id: project.id,
				slots: await resolveSlots(project.screenshots),
			})),
		);

		for (const { id, slots } of results) {
			expect(slots, `id ${id}`).toHaveLength(6);

			for (const { slot, url } of slots) {
				const extension = slot.split('/')[0] ?? '';

				expect(url, `id ${id} ${slot}`).toContain(`/${slot}/${id}-`);
				expect(path.extname(url), `id ${id} ${slot}`).toBe(
					`.${extension}`,
				);
			}
		}
	});

	it('only uses https links', () => {
		for (const project of projects) {
			for (const url of urlsOf(project)) {
				expect(url, `id ${project.id}`).toMatch(/^https:\/\//);
			}
		}
	});

	it('lists each technology once', () => {
		for (const project of projects) {
			const ids = project.technologies.map((technology) => technology.id);

			expect(new Set(ids).size, `id ${project.id}`).toBe(ids.length);
		}
	});
});

describe('technologies', () => {
	it('keys each entry by its own id', () => {
		for (const [key, technology] of Object.entries(technologies)) {
			expect(technology.id).toBe(key);
		}
	});

	it('loads every icon as SVG markup', async () => {
		const icons = await Promise.all(
			Object.values(technologies).map(async (technology) => {
				const { default: svg } = await technology.icon;

				return { id: technology.id, svg };
			}),
		);

		for (const { id, svg } of icons) {
			expect(svg, `icon ${id}`).toContain('<svg');
		}
	});
});

describe('assets', () => {
	// Exported by path through `./assets/*`, not referenced by any entry.
	const EXPORTED_BY_PATH = ['assets/favicon/', 'assets/images/me/'];

	// Unused files from before; delete them and empty this list.
	const KNOWN_UNUSED = new Set([
		'assets/icons/courses-platform/avif/courses/curso-de-programacion-orientada-a-objetos-en-javascript.avif',
		'assets/icons/courses-platform/webp/courses/curso-de-programacion-orientada-a-objetos-en-javascript.webp',
		'assets/icons/technologies/api/icon-api-small.webp',
		'assets/icons/technologies/api/icons-api-small.webp',
		'assets/icons/technologies/css/icons-css3-small.webp',
		'assets/icons/technologies/html/icon-html-small.webp',
		'assets/icons/technologies/javascript/icons-javascript-small.webp',
		'assets/icons/technologies/playwright/playwright.webp',
		'assets/icons/technologies/pug/pug-icon.webp',
		'assets/icons/technologies/sass/icons-sass-small.webp',
		'assets/icons/technologies/typescript/icons-typescript-small.webp',
		'assets/icons/technologies/vite/vitejs.webp',
		'assets/icons/technologies/webpack/icons-webpack-extra-small.webp',
		'assets/icons/technologies/webpack/icons-webpack-large.webp',
		'assets/icons/technologies/webpack/icons-webpack-medium.webp',
		'assets/icons/technologies/webpack/icons-webpack-small.webp',
	]);

	const referenced = new Set(
		readdirSync(SRC)
			.filter((file) => file.endsWith('.ts'))
			.flatMap((file) => [
				...readFileSync(path.join(SRC, file), 'utf8').matchAll(
					/'\.\/(assets\/[^'?]+)(?:\?raw)?'/g,
				),
			])
			.map(([, assetPath]) => assetPath),
	);

	const files = readdirSync(path.join(SRC, 'assets'), {
		recursive: true,
		withFileTypes: true,
	})
		.filter((entry) => entry.isFile())
		.map((entry) =>
			path
				.relative(SRC, path.join(entry.parentPath, entry.name))
				.replaceAll('\\', '/'),
		);

	it('has no unused files', () => {
		const unused = files.filter(
			(file) =>
				!referenced.has(file) &&
				!KNOWN_UNUSED.has(file) &&
				!EXPORTED_BY_PATH.some((directory) =>
					file.startsWith(directory),
				),
		);

		expect(unused).toStrictEqual([]);
	});

	it('keeps the known-unused list current', () => {
		const stale = [...KNOWN_UNUSED].filter(
			(file) => !files.includes(file) || referenced.has(file),
		);

		expect(stale).toStrictEqual([]);
	});
});
