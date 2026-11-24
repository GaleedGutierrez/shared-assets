import type { Education } from './models/education.model.js';

/**
 * University and technical school studies, newest first. Dates have month
 * precision (the 1st of the month, at local midnight).
 */
export const education: Education[] = [
	{
		id: 'undec-ciencia-de-datos',
		level: 'university',
		status: 'in-progress',
		title: 'Tecnicatura Universitaria en Ciencia de Datos',
		institution: {
			name: 'Universidad Nacional de Chilecito',
			location: 'Chilecito, La Rioja',
			url: 'https://www.undec.edu.ar/',
			logo: {
				svg: import(
					'./assets/icons/courses-platform/svg/platform/undec.svg?raw'
				),
			},
		},
		startDate: new Date('2026-03-01T03:00:00.000Z'),
	},
	{
		id: 'unju-analista-programador-universitario',
		level: 'university',
		status: 'in-progress',
		title: 'Analista Programador Universitario',
		institution: {
			name: 'Universidad Nacional de Jujuy',
			faculty: 'Facultad de Ingeniería',
			location: 'San Salvador de Jujuy, Jujuy',
			url: 'https://www.unju.edu.ar/',
			logo: {
				svg: import(
					'./assets/icons/courses-platform/svg/platform/unju.svg?raw'
				),
			},
		},
		startDate: new Date('2021-03-01T03:00:00.000Z'),
	},
	{
		id: 'eet-1-escolastico-zegada-electromecanica',
		level: 'technical-school',
		status: 'graduated',
		title: 'Técnico en Equipos e Instalaciones Electromecánicas',
		institution: {
			name: 'Escuela de Educación Técnica N.º 1 "Escolástico Zegada"',
			location: 'San Salvador de Jujuy, Jujuy',
			logo: {
				png: import(
					'./assets/icons/courses-platform/png/platform/eet1-escolastico-zegada.png'
				),
			},
		},
		startDate: new Date('2015-04-01T03:00:00.000Z'),
		endDate: new Date('2019-12-01T03:00:00.000Z'),
		achievements: [
			'Mejor promedio del curso (2019).',
			'Segundo escolta de la Bandera Nacional Argentina.',
			'Olimpiadas de Electromecánica, nivel nacional (2019).',
			'Feria Provincial de Ciencias, Tecnología, Arte y Deportes STEAM (2019).',
		],
	},
	{
		id: 'eet-1-general-savio-informatica',
		level: 'technical-school',
		status: 'unfinished',
		title: 'Técnico Informático',
		institution: {
			name: 'Escuela de Educación Técnica N.º 1 "General Savio"',
			location: 'Palpalá, Jujuy',
			logo: {
				png: import(
					'./assets/icons/courses-platform/png/platform/eet1-gral-savio.png'
				),
			},
		},
		startDate: new Date('2014-03-01T03:00:00.000Z'),
		endDate: new Date('2015-04-01T03:00:00.000Z'),
		description: 'Primer año completo.',
	},
];
