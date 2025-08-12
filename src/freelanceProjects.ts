// URLs to publicly hosted assets
import type { FreelanceProject } from './models/freelanceProject.model';

const CSS_ICON = import('./assets/icons/technologies/css/css.svg?raw');
const EXPRESS_ICON = import(
	'./assets/icons/technologies/express/express.svg?raw'
);
const YTDLP_ICON = import('./assets/icons/technologies/extras/yt-dlp.svg?raw');
const NODEJS_ICON = import('./assets/icons/technologies/nodejs/nodejs.svg?raw');
const PLAYWRIGHT_ICON = import(
	'./assets/icons/technologies/playwright/playwright.svg?raw'
);
const REACT_ICON = import('./assets/icons/technologies/react/react.svg?raw');
const TYPESCRIPT_ICON = import(
	'./assets/icons/technologies/typescript/typescript.svg?raw'
);
const VITE_ICON = import('./assets/icons/technologies/vite/vite.svg?raw');

export const freelanceProjects: FreelanceProject[] = [
	{
		id: 0,
		title: 'YouTube Downloader',
		description:
			'Aplicación web para descargar videos y audio de YouTube en diferentes calidades.',
		client: {
			industry: 'Música y Entretenimiento',
			companySize: 'entrepreneur',
			location: 'Jujuy, Argentina',
			projectType: 'new-build',
		},
		scope: {
			type: 'web-development',
			teamSize: 1,
			myRole: 'Full-stack Developer',
			complexity: 'medium',
		},
		budget: {
			range: 'under-1k',
			currency: 'USD',
			paymentType: 'fixed-price',
		},
		technologies: [
			'React',
			'Nodejs',
			'Express',
			'TypeScript',
			'CSS',
			'ytdlp',
			'Playwright',
			'Vite',
		],
		technologiesIcons: [
			REACT_ICON,
			NODEJS_ICON,
			EXPRESS_ICON,
			TYPESCRIPT_ICON,
			CSS_ICON,
			YTDLP_ICON,
			PLAYWRIGHT_ICON,
			VITE_ICON,
		],
		screenshots: {
			avif: {
				small: import(
					'./assets/images/screenshot-freelance-projects/avif/small/0-youtube-downloader.avif'
				),
				medium: import(
					'./assets/images/screenshot-freelance-projects/avif/medium/0-youtube-downloader.avif'
				),
				large: import(
					'./assets/images/screenshot-freelance-projects/avif/large/0-youtube-downloader.avif'
				),
			},
			webp: {
				small: import(
					'./assets/images/screenshot-freelance-projects/webp/small/0-youtube-downloader.webp'
				),
				medium: import(
					'./assets/images/screenshot-freelance-projects/webp/medium/0-youtube-downloader.webp'
				),
				large: import(
					'./assets/images/screenshot-freelance-projects/webp/large/0-youtube-downloader.webp'
				),
			},
		},
		startDate: new Date('2025-02-24'),
		endDate: new Date('2024-09-06'),
		status: 'completed',
		results: {
			metrics: ['Interfaz intuitiva y fácil de usar'],
			businessImpact: ['Aumento en la productividad'],
			technicalAchievements: [
				'Implementación de un sistema de descarga eficiente',
			],
		},
		challenges: ['Implementación de youtube-dl'],
		solutions: ['Ver documentación de youtube-dl'],
		lessons: ['La importancia de las pruebas E2E'],
		isPrivate: true,
		demoUrl:
			'El proyecto no tiene demo, es un proyecto privado que funciona en local.',
		caseStudyUrl: '',
		isHighlighted: false,
		tags: ['Downloader', 'YouTube'],
	},
];
