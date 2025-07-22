import CSS_ICON from '@icons/technologies/css/css.svg';
import EXPRESS_ICON from '@icons/technologies/express/express.svg';
import YTDLP_ICON from '@icons/technologies/extras/yt-dlp.svg';
import NODEJS_ICON from '@icons/technologies/nodejs/nodejs.svg';
import PLAYWRIGHT_ICON from '@icons/technologies/playwright/playwright.svg';
import REACT_ICON from '@icons/technologies/react/react.svg';
import TYPESCRIPT_ICON from '@icons/technologies/typescript/typescript.svg';
import VITE_ICON from '@icons/technologies/vite/vite.svg';

import type { FreelanceProject } from './models/freelanceProject.model';

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
				small: '@images/screenshot-freelance-projects/avif/small/0-youtube-downloader.avif',
				medium: '@images/screenshot-freelance-projects/avif/medium/0-youtube-downloader.avif',
				large: '@images/screenshot-freelance-projects/avif/large/0-youtube-downloader.avif',
			},
			webp: {
				small: '@images/screenshot-freelance-projects/webp/small/0-youtube-downloader.webp',
				medium: '@images/screenshot-freelance-projects/webp/medium/0-youtube-downloader.webp',
				large: '@images/screenshot-freelance-projects/webp/large/0-youtube-downloader.webp',
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
