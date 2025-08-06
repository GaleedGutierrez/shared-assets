import type { OpenSourceProject } from './models/openSource.model.js';

// URLs to publicly hosted assets
const TAILWINDCSS_ICON =
	'https://cdn.jsdelivr.net/gh/GaleedGutierrez/shared-assets@main/src/assets/icons/technologies/tailwindcss/tailwindcss.svg';

export const openSourceProjects: OpenSourceProject[] = [
	{
		id: 0,
		title: 'La velada web oficial',
		description:
			'La Velada V es una competición de boxeo que enfrenta a streamers, creadores de contenido y otras celebridades',
		repository: {
			owner: 'midudev',
			name: 'la-velada-web-oficial',
			url: 'https://github.com/midudev/la-velada-web-oficial',
			language: 'TypeScript',
		},
		myRole: 'contributor',
		startDate: new Date('2024-03-19'),
		technologies: ['TailwindCSS'],
		technologiesIcons: [TAILWINDCSS_ICON],
		contributions: [
			{
				number: 1004,
				title: 'Se agregó una fuente de fallback para reducir el FOUT',
				url: 'https://github.com/midudev/la-velada-web-oficial/pull/1004',
				status: 'merged',
				mergeDate: new Date('2024-03-20'),
				description:
					'Se ha agregado la variable --font-fallback dentro de @theme, incluyendo "Adjusted Arial Fallback", que es una versión ajustada de Arial con size-adjust y ascent-override. Esto permite que la fuente de respaldo mantenga proporciones más similares a Anisette, reduciendo así el Flash of Unstyled Text (FOUT).',
				type: {
					type: 'performance',
					impact: 'minor',
				},
				reviewers: ['midudev'],
			},
		],
		stats: {
			commits: 1,
			pullRequests: 1,
			issuesOpened: 0,
			issuesClosed: 0,
			linesAdded: 14,
			linesRemoved: 1,
			filesChanged: 1,
		},
		impact: [
			'Mejora en la experiencia del usuario al reducir el FOUT',
			'Optimización de la carga de fuentes',
		],
		skills: [
			'Optimización de rendimiento web',
			'Mejora de la experiencia del usuario',
			'Contribución a proyectos de código abierto',
		],
		challenges: [
			'Entender el impacto del FOUT en la experiencia del usuario',
			'Identificar la mejor forma de implementar una fuente de respaldo efectiva',
		],
		solutions: [
			'Implementación de una fuente de respaldo ajustada para reducir el FOUT',
			'Pruebas de rendimiento para asegurar una mejora en la carga de fuentes',
		],
		lessons: [
			'La importancia de las fuentes de respaldo en la experiencia del usuario',
			'Cómo las pequeñas optimizaciones pueden tener un gran impacto en el rendimiento web',
		],
		isActive: false,
		isMaintainer: false,
		isHighlighted: false,
		tags: ['performance', 'user-experience', 'open-source'],
		screenshots: {
			avif: {
				small: 'https://cdn.jsdelivr.net/gh/GaleedGutierrez/shared-assets@main/src/assets/images/screenshot-open-source/avif/small/0-la-velada-del-ano-v.avif',
				medium: 'https://cdn.jsdelivr.net/gh/GaleedGutierrez/shared-assets@main/src/assets/images/screenshot-open-source/avif/medium/0-la-velada-del-ano-v.avif',
				large: 'https://cdn.jsdelivr.net/gh/GaleedGutierrez/shared-assets@main/src/assets/images/screenshot-open-source/avif/large/0-la-velada-del-ano-v.avif',
			},
			webp: {
				small: 'https://cdn.jsdelivr.net/gh/GaleedGutierrez/shared-assets@main/src/assets/images/screenshot-open-source/webp/small/0-la-velada-del-ano-v.webp',
				medium: 'https://cdn.jsdelivr.net/gh/GaleedGutierrez/shared-assets@main/src/assets/images/screenshot-open-source/webp/medium/0-la-velada-del-ano-v.webp',
				large: 'https://cdn.jsdelivr.net/gh/GaleedGutierrez/shared-assets@main/src/assets/images/screenshot-open-source/webp/large/0-la-velada-del-ano-v.webp',
			},
		},
	},
];
