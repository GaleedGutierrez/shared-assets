import type { FreelanceProject } from './models/freelanceProject.model.js';
import { technologies } from './technologies.js';

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
			technologies.react,
			technologies.nodejs,
			technologies.express,
			technologies.typescript,
			technologies.css,
			technologies.ytdlp,
			technologies.playwright,
			technologies.vite,
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
		isHighlighted: false,
		tags: ['Downloader', 'YouTube'],
	},
];
