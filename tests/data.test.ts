/* eslint-disable security/detect-non-literal-fs-filename -- reads this repo's own src/ */
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

import { describe, expect, it } from 'vitest';

import { certificatePlatforms } from '../src/certificatePlatforms.js';
import { certificates } from '../src/certificates.js';
import { education } from '../src/education.js';
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

describe('certificates', () => {
	it('has unique ids', () => {
		const ids = certificates.map((certificate) => certificate.id);

		expect(new Set(ids).size).toBe(ids.length);
	});

	it('lists the newest first', () => {
		const times = certificates.map((certificate) =>
			certificate.date.getTime(),
		);

		expect(times).toStrictEqual(times.toSorted((a, b) => b - a));
	});

	it('prefixes each id with its platform', () => {
		for (const certificate of certificates) {
			expect(
				certificate.id.startsWith(`${certificate.platform.id}-`),
				`id ${certificate.id}`,
			).toBe(true);
		}
	});

	it('names each diploma as a JPEG after its year', async () => {
		const results = await Promise.all(
			certificates.map(async ({ id, date, diploma }) => ({
				id,
				year: date.getUTCFullYear(),
				file: path.basename(await resolveUrl(diploma)),
			})),
		);

		for (const { id, year, file } of results) {
			expect(path.extname(file), `id ${id}`).toBe('.jpg');
			expect(file.startsWith(`${year}-`), `id ${id}: ${file}`).toBe(true);
		}
	});

	it('names each badge like its diploma', async () => {
		const results = await Promise.all(
			certificates
				.filter((certificate) => certificate.badge !== undefined)
				.map(async ({ id, diploma, badge }) => ({
					id,
					diploma: path.parse(await resolveUrl(diploma)).name,
					badge: path.parse(await resolveUrl(badge as LazyImage))
						.name,
				})),
		);

		for (const { id, diploma, badge } of results) {
			expect(badge, `id ${id}`).toBe(diploma);
		}
	});

	it('has a UUID credential id on every platform but Codely', () => {
		const uuid =
			/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/;
		// Codely diplomas have no code.
		const wrong = certificates
			.filter(({ platform, credentialId }) =>
				platform.id === 'codely'
					? credentialId !== undefined
					: !uuid.test(credentialId ?? ''),
			)
			.map(({ id }) => id);

		expect(wrong).toStrictEqual([]);
	});

	it('only uses https links', () => {
		for (const certificate of certificates) {
			for (const url of [
				certificate.url,
				certificate.platform.url,
			].filter(Boolean)) {
				expect(url, `id ${certificate.id}`).toMatch(/^https:\/\//);
			}
		}
	});
});

describe('education', () => {
	it('has unique ids', () => {
		const ids = education.map((entry) => entry.id);

		expect(new Set(ids).size).toBe(ids.length);
	});

	it('lists the newest first', () => {
		const times = education.map((entry) => entry.startDate.getTime());

		expect(times).toStrictEqual(times.toSorted((a, b) => b - a));
	});

	it('has an end date unless it is in progress, after its start', () => {
		const wrong = education
			.filter(({ status, startDate, endDate }) =>
				status === 'in-progress'
					? endDate !== undefined
					: endDate === undefined || endDate <= startDate,
			)
			.map(({ id }) => id);

		expect(wrong).toStrictEqual([]);
	});

	it('only uses https links', () => {
		for (const { id, institution } of education) {
			expect(institution.url ?? 'https://', `id ${id}`).toMatch(
				/^https:\/\//,
			);
		}
	});
});

describe('certificatePlatforms', () => {
	it('keys each entry by its own id', () => {
		for (const [key, platform] of Object.entries(certificatePlatforms)) {
			expect(platform.id).toBe(key);
		}
	});

	it('has a logo for each platform', () => {
		for (const platform of Object.values(certificatePlatforms)) {
			expect(
				Object.keys(platform.logo),
				`platform ${platform.id}`,
			).not.toHaveLength(0);
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
