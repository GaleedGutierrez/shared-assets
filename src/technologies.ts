import type { Technology, TechnologyId } from './models/shared.model.js';

/**
 * Single source for technology names and icons. Projects reference these
 * entries, so a name can't drift from its icon.
 *
 * Typed explicitly so the published declarations don't reference the
 * `?raw` asset modules.
 */
export const technologies: { readonly [Id in TechnologyId]: Technology<Id> } = {
	css: {
		id: 'css',
		name: 'CSS',
		icon: import('./assets/icons/technologies/css/css.svg?raw'),
	},
	express: {
		id: 'express',
		name: 'Express',
		icon: import('./assets/icons/technologies/express/express.svg?raw'),
	},
	html: {
		id: 'html',
		name: 'HTML',
		icon: import('./assets/icons/technologies/html/html.svg?raw'),
	},
	javascript: {
		id: 'javascript',
		name: 'JavaScript',
		icon: import(
			'./assets/icons/technologies/javascript/javascript.svg?raw'
		),
	},
	nodejs: {
		id: 'nodejs',
		name: 'Node.js',
		icon: import('./assets/icons/technologies/nodejs/nodejs.svg?raw'),
	},
	playwright: {
		id: 'playwright',
		name: 'Playwright',
		icon: import(
			'./assets/icons/technologies/playwright/playwright.svg?raw'
		),
	},
	pug: {
		id: 'pug',
		name: 'Pug',
		icon: import('./assets/icons/technologies/pug/pug.svg?raw'),
	},
	react: {
		id: 'react',
		name: 'React',
		icon: import('./assets/icons/technologies/react/react.svg?raw'),
	},
	sass: {
		id: 'sass',
		name: 'Sass',
		icon: import('./assets/icons/technologies/sass/sass.svg?raw'),
	},
	shadcn: {
		id: 'shadcn',
		name: 'shadcn/ui',
		icon: import('./assets/icons/technologies/shadcn/shadcn.svg?raw'),
	},
	tailwindcss: {
		id: 'tailwindcss',
		name: 'Tailwind CSS',
		icon: import(
			'./assets/icons/technologies/tailwindcss/tailwindcss.svg?raw'
		),
	},
	typescript: {
		id: 'typescript',
		name: 'TypeScript',
		icon: import(
			'./assets/icons/technologies/typescript/typescript.svg?raw'
		),
	},
	vite: {
		id: 'vite',
		name: 'Vite',
		icon: import('./assets/icons/technologies/vite/vite.svg?raw'),
	},
	webpack: {
		id: 'webpack',
		name: 'Webpack',
		icon: import('./assets/icons/technologies/webpack/webpack.svg?raw'),
	},
	ytdlp: {
		id: 'ytdlp',
		name: 'yt-dlp',
		icon: import('./assets/icons/technologies/extras/yt-dlp.svg?raw'),
	},
};
