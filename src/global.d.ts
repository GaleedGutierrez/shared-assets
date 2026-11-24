// Asset module types used only to compile this package. They are not
// published: consumers get their types from the models, and their own bundler
// (Astro) declares these modules. The shapes match `ImageAsset` in
// models/shared.model.ts.

declare module '*.avif' {
	const image: { src: string; width: number; height: number; format: 'avif' };

	export default image;
}

declare module '*.webp' {
	const image: { src: string; width: number; height: number; format: 'webp' };

	export default image;
}

declare module '*.svg?raw' {
	const content: string;

	export default content;
}
