/* eslint-disable security/detect-non-literal-fs-filename -- reads this repo's own src/ */
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

import { describe, expect, it } from 'vitest';

import { freelanceProjects } from '../src/freelanceProjects.js';
import type { LazyImage } from '../src/models/shared.model.js';
import { openSourceProjects } from '../src/openSourceProjects.js';
import { personalProjects } from '../src/personalProjects.js';
import { technologies } from '../src/technologies.js';

const ROOT = path.resolve(import.meta.dirname, '..');
const SRC = path.join(ROOT, 'src');
/**
 * Narrowest source width that still covers the largest width a consumer asks
 * for (galeed.link renders tiles up to 960px) with room for 1280px layouts.
 */
const MIN_SCREENSHOT_WIDTH = 1280;

const collections = [
	['personalProjects', personalProjects],
	['freelanceProjects', freelanceProjects],
	['openSourceProjects', openSourceProjects],
] as const;

/**
 * In Vitest an image import resolves to its URL, not to Astro's metadata, so
 * the URL tells which file the entry points at.
 * @param image - Lazy image from the data.
 * @returns The resolved file URL, relative to the repo root.
 */
const resolveUrl = async (image: LazyImage): Promise<string> => {
	const { default: asset } = await image;

	return asset as unknown as string;
};

/**
 * Reads the pixel size from a PNG header (IHDR chunk), without decoding.
 * @param file - Absolute path to a PNG file.
 * @returns Width and height in pixels.
 */
const pngSize = (file: string): { width: number; height: number } => {
	const header = readFileSync(file).subarray(0, 24);

	return { width: header.readUInt32BE(16), height: header.readUInt32BE(20) };
};

const urlsOf = (project: object): string[] =>
	Object.entries(project).flatMap(([key, value]) =>
		/url$/i.test(key) && typeof value === 'string' ? [value] : [],
	);

describe.each(collections)('%s', (_, projects) => {
	it('has unique ids', () => {
		const ids = projects.map((project) => project.id);

		expect(new Set(ids).size).toBe(ids.length);
	});

	it('points each entry at one PNG screenshot named after its id', async () => {
		const results = await Promise.all(
			projects.map(async (project) => ({
				id: project.id,
				url: await resolveUrl(project.screenshot),
			})),
		);

		for (const { id, url } of results) {
			const file = path.basename(url);

			expect(file.startsWith(`${id}-`), `id ${id}: ${file}`).toBe(true);
			expect(path.extname(file), `id ${id}: ${file}`).toBe('.png');

			const { width } = pngSize(path.join(ROOT, url));

			expect(width, `id ${id} width`).toBeGreaterThanOrEqual(
				MIN_SCREENSHOT_WIDTH,
			);
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
	const EXPORTED_BY_PATH = [
		'assets/favicon/',
		'assets/images/me/',
		'assets/images/certificates/',
	];

	// Unused files: delete them, or reference them from the data, and empty
	// this list. The platform logos are waiting for the certificates data.
	const KNOWN_UNUSED = new Set([
		'assets/icons/courses-platform/png/platform/codigo-facilito.png',
		'assets/icons/courses-platform/svg/platform/platzi.svg',
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
