/**
 * Image formats a bundler can return metadata for. Mirrors Astro's
 * `ImageInputFormat`, so an {@link ImageAsset} is assignable to Astro's
 * `ImageMetadata` without depending on Astro.
 */
export type ImageFormat =
	| 'apng'
	| 'avif'
	| 'gif'
	| 'jpeg'
	| 'jpg'
	| 'png'
	| 'svg'
	| 'tiff'
	| 'webp';

/** What an image import resolves to in Astro (`ImageMetadata`). */
export interface ImageAsset {
	src: string;
	width: number;
	height: number;
	format: ImageFormat;
}

/** An image loaded with a dynamic `import()`, resolved by the consumer. */
export type LazyImage = Promise<{ default: ImageAsset }>;

/** Raw SVG markup loaded with `import('...svg?raw')`. */
export type LazySvg = Promise<{ default: string }>;

/**
 * A single full-quality PNG. The consumer's image pipeline (Astro's
 * `<Picture>`) derives every format and width from it at build time.
 */
export type Screenshot = LazyImage;

export type TechnologyId =
	| 'css'
	| 'express'
	| 'html'
	| 'javascript'
	| 'nodejs'
	| 'playwright'
	| 'pug'
	| 'react'
	| 'sass'
	| 'shadcn'
	| 'tailwindcss'
	| 'typescript'
	| 'vite'
	| 'webpack'
	| 'ytdlp';

export interface Technology<Id extends TechnologyId = TechnologyId> {
	/** Stable key, matching its entry in `technologies`. */
	id: Id;
	/** Display name. */
	name: string;
	icon: LazySvg;
}
