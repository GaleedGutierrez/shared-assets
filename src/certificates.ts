import { certificatePlatforms } from './certificatePlatforms.js';
import type { Certificate } from './models/certificate.model.js';

/**
 * Every approved course, learning path and program, newest first. The files
 * live in `assets/images/certificates/<platform>/`.
 */
export const certificates: Certificate[] = [
	{
		id: 'platzi-2225',
		kind: 'course',
		title: 'Curso de Redes Informáticas de Internet',
		platform: certificatePlatforms.platzi,
		date: new Date('2026-07-09T23:43:40.531Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2026-2225-redes.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2026-2225-redes.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2225-course/diploma/detalle/',
		credentialId: 'ccfbc54e-e5f3-4758-b8b5-35390fe36eba',
	},
	{
		id: 'platzi-2884',
		kind: 'course',
		title: 'Curso de Lenguaje y Notación Matemática',
		platform: certificatePlatforms.platzi,
		date: new Date('2026-05-18T14:04:35.479Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2026-2884-notacion-matematica.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2026-2884-notacion-matematica.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2884-course/diploma/detalle/',
		credentialId: '62f68693-313d-4150-bd3d-ff5b0c358af1',
	},
	{
		id: 'platzi-12050',
		kind: 'course',
		title: 'Curso de Álgebra y Funciones',
		platform: certificatePlatforms.platzi,
		date: new Date('2026-04-29T04:43:00.163Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2026-12050-algebra.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2026-12050-algebra.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/12050-course/diploma/detalle/',
		credentialId: '3dfde47b-11a1-4d0d-985f-cff5a50798c6',
	},
	{
		id: 'platzi-11944',
		kind: 'course',
		title: 'Curso de Inglés Básico A1: Verbo To Be',
		platform: certificatePlatforms.platzi,
		date: new Date('2026-04-01T21:33:59.858Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2026-11944-verbo-tobe.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2026-11944-verbo-tobe.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/11944-course/diploma/detalle/',
		credentialId: '1160e838-cbbc-4634-acbf-089690091c56',
	},
	{
		id: 'platzi-12164',
		kind: 'course',
		title: 'Curso de Fundamentos de Matemáticas',
		platform: certificatePlatforms.platzi,
		date: new Date('2026-03-20T01:12:54.398Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2026-12164-fundamentos-matematicas.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2026-12164-fundamentos-matematicas.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/12164-course/diploma/detalle/',
		credentialId: '472a7313-86e4-4205-8f15-3b2d90083178',
	},
	{
		id: 'platzi-11997',
		kind: 'course',
		title: 'Curso de Fundamentos de Ingeniería de Software',
		platform: certificatePlatforms.platzi,
		date: new Date('2025-12-26T22:32:43.028Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2025-11997-ingenieria.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2025-11997-ingenieria.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/11997-course/diploma/detalle/',
		credentialId: '12cbec22-c4a4-42e5-b134-22aeae760d0e',
	},
	{
		id: 'platzi-2793',
		kind: 'course',
		title: 'Curso Básico de Computadores e Informática',
		platform: certificatePlatforms.platzi,
		date: new Date('2025-09-08T00:12:10.346Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2025-2793-computacion-basica.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2025-2793-computacion-basica.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2793-course/diploma/detalle/',
		credentialId: 'dd0f9daa-161b-44bf-8693-3d47c551ba3a',
	},
	{
		id: 'platzi-1631',
		kind: 'course',
		title: 'Curso de Introducción a Java',
		platform: certificatePlatforms.platzi,
		date: new Date('2025-08-24T07:09:37.920Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2025-1631-java-basico.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2025-1631-java-basico.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1631-course/diploma/detalle/',
		credentialId: '1055d0ed-3471-4c1a-9864-203472e9b12a',
	},
	{
		id: 'platzi-12028',
		kind: 'course',
		title: 'Curso de N8N',
		platform: certificatePlatforms.platzi,
		date: new Date('2025-05-31T02:28:34.434Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2025-12028-n8n-2025.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2025-12028-n8n-2025.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/12028-course/diploma/detalle/',
		credentialId: '54c95774-42a3-4947-bd51-3d6ed031b0f3',
	},
	{
		id: 'platzi-6207',
		kind: 'course',
		title: 'Curso de Creación de Páginas Web con Astro',
		platform: certificatePlatforms.platzi,
		date: new Date('2025-03-18T04:30:10.257Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2025-6207-astro.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2025-6207-astro.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/6207-course/diploma/detalle/',
		credentialId: '4dbd2c74-e04a-4b93-b584-71ffef42c479',
	},
	{
		id: 'platzi-7395',
		kind: 'course',
		title: 'Curso de React.js',
		platform: certificatePlatforms.platzi,
		date: new Date('2025-02-23T01:47:50.455Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2025-7395-react.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2025-7395-react.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/7395-course/diploma/detalle/',
		credentialId: '2234d971-50f0-4ac8-ad45-548a8845df8e',
	},
	{
		id: 'platzi-10629',
		kind: 'course',
		title: 'Curso de Inglés Básico A1 para Principiantes',
		platform: certificatePlatforms.platzi,
		date: new Date('2024-10-22T00:19:18.963Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2024-10629-ingles-a1-principiantes.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2024-10629-ingles-a1-principiantes.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/10629-course/diploma/detalle/',
		credentialId: 'f1be4893-6378-4608-9752-525cb50dec81',
	},
	{
		id: 'codigo-facilito-conceptos-fundamentales-de-react-bootcamp-de-react-generacion-3',
		kind: 'course',
		title: 'Conceptos fundamentales de React - Bootcamp de React, Generación 3',
		platform: certificatePlatforms['codigo-facilito'],
		date: new Date('2024-09-23T03:00:00.000Z'),
		diploma: import(
			'./assets/images/certificates/codigo-facilito/diplomas/2024-conceptos-fundamentales-de-react-bootcamp-de-react-generacion-3.jpg'
		),
		credentialId: '7383eb76-5c90-4b83-ada5-67a75e3e4d6c',
	},
	{
		id: 'codigo-facilito-introduccion-a-programacion-funcional-bootcamp-de-react-generacion-3',
		kind: 'course',
		title: 'Introducción a Programación Funcional - Bootcamp de React, Generación 3',
		platform: certificatePlatforms['codigo-facilito'],
		date: new Date('2024-09-18T03:00:00.000Z'),
		diploma: import(
			'./assets/images/certificates/codigo-facilito/diplomas/2024-introduccion-a-programacion-funcional-bootcamp-de-react-generacion-3.jpg'
		),
		credentialId: 'ceff8782-c545-41c4-894a-d6df212ab7bb',
	},
	{
		id: 'codigo-facilito-javascript-esenciales-bootcamp-de-react-generacion-3',
		kind: 'course',
		title: 'Javascript Esenciales - Bootcamp de React, Generación 3',
		platform: certificatePlatforms['codigo-facilito'],
		date: new Date('2024-09-11T03:00:00.000Z'),
		diploma: import(
			'./assets/images/certificates/codigo-facilito/diplomas/2024-javascript-esenciales-bootcamp-de-react-generacion-3.jpg'
		),
		credentialId: 'f300ebc9-7dc4-4352-bf66-1d3f218c0493',
	},
	{
		id: 'codigo-facilito-panorama-general-de-react-bootcamp-de-react-generacion-3',
		kind: 'course',
		title: 'Panorama General de React - Bootcamp de React, Generación 3',
		platform: certificatePlatforms['codigo-facilito'],
		date: new Date('2024-09-10T03:00:00.000Z'),
		diploma: import(
			'./assets/images/certificates/codigo-facilito/diplomas/2024-panorama-general-de-react-bootcamp-de-react-generacion-3.jpg'
		),
		credentialId: 'ed9dfa53-efbc-4f3c-b1b0-606ff741547e',
	},
	{
		id: 'platzi-2395',
		kind: 'course',
		title: 'Curso de Inglés Básico A1: Fechas, Horas y Expresiones Simples',
		platform: certificatePlatforms.platzi,
		date: new Date('2024-06-17T02:13:05.219Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2024-2395-fechas-horas-expresiones-simples.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2024-2395-fechas-horas-expresiones-simples.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2395-course/diploma/detalle/',
		credentialId: '3e7449cf-98c4-47dc-9d0b-5c8bc8228650',
	},
	{
		id: 'codely-garantiza-la-calidad-de-codigo-en-javascript-y-typescript-con-eslint',
		kind: 'course',
		title: 'Garantiza la calidad de código en JavaScript y TypeScript con ESLint',
		platform: certificatePlatforms.codely,
		date: new Date('2024-06-13T03:00:00.000Z'),
		diploma: import(
			'./assets/images/certificates/codely/diplomas/2024-garantiza-la-calidad-de-codigo-en-javascript-y-typescript-con-eslint.jpg'
		),
	},
	{
		id: 'platzi-4623',
		kind: 'course',
		title: 'Audiocurso de Frameworks y Arquitecturas Frontend: Casos de Estudio',
		platform: certificatePlatforms.platzi,
		date: new Date('2024-05-15T06:26:12.814Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2024-4623-arquitectura-frontend.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2024-4623-arquitectura-frontend.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/4623-course/diploma/detalle/',
		credentialId: '13ad5282-e045-4243-aa21-bc6042f894d3',
	},
	{
		id: 'platzi-2239',
		kind: 'course',
		title: 'Curso de Frameworks y Librerías de JavaScript',
		platform: certificatePlatforms.platzi,
		date: new Date('2024-05-13T22:46:04.039Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2024-2239-frameworks-javascript.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2024-2239-frameworks-javascript.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2239-course/diploma/detalle/',
		credentialId: 'd24761df-d920-4142-9e6b-1ba54ec56dae',
	},
	{
		id: 'platzi-5679',
		kind: 'course',
		title: 'Curso de Automatización de Test con Playwright',
		platform: certificatePlatforms.platzi,
		date: new Date('2024-04-04T16:34:07.099Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2024-5679-playwright.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2024-5679-playwright.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/5679-course/diploma/detalle/',
		credentialId: '9007c289-47f2-4fb7-8df0-f3f9a0f5c4cf',
	},
	{
		id: 'platzi-1421',
		kind: 'course',
		title: 'Curso de Fundamentos de Pruebas de Software',
		platform: certificatePlatforms.platzi,
		date: new Date('2024-04-01T01:03:11.471Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2024-1421-pruebas-software.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2024-1421-pruebas-software.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1421-course/diploma/detalle/',
		credentialId: '574800f1-6816-426a-a7d3-4c846353eafe',
	},
	{
		id: 'platzi-2706',
		kind: 'course',
		title: 'Curso Avanzado de Automatización de Pruebas con Puppeteer',
		platform: certificatePlatforms.platzi,
		date: new Date('2024-03-20T22:26:17.945Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2024-2706-puppeteer-avanzado.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2024-2706-puppeteer-avanzado.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2706-course/diploma/detalle/',
		credentialId: '22ed4c6f-891d-49d9-b1d7-2487e98f449e',
	},
	{
		id: 'platzi-2703',
		kind: 'course',
		title: 'Curso de Automatización de Pruebas con Puppeteer',
		platform: certificatePlatforms.platzi,
		date: new Date('2024-03-11T22:47:01.452Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2024-2703-puppeteer.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2024-2703-puppeteer.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2703-course/diploma/detalle/',
		credentialId: 'dbbbb06d-9a10-4ba2-b56d-4284106fef6e',
	},
	{
		id: 'platzi-3075',
		kind: 'course',
		title: 'Curso de Automatización de Pruebas UI con Cypress',
		platform: certificatePlatforms.platzi,
		date: new Date('2024-03-09T00:42:00.146Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2024-3075-cypress-ui.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2024-3075-cypress-ui.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/3075-course/diploma/detalle/',
		credentialId: 'fd52cdfe-4005-4dc1-84c7-a712754c4478',
	},
	{
		id: 'platzi-2620',
		kind: 'course',
		title: 'Curso de Introducción a la Automatización de Pruebas',
		platform: certificatePlatforms.platzi,
		date: new Date('2024-02-28T19:57:42.353Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2024-2620-automatizacion-pruebas.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2024-2620-automatizacion-pruebas.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2620-course/diploma/detalle/',
		credentialId: 'a37e13bf-54bd-4340-8b54-4ed5aecec1f2',
	},
	{
		id: 'platzi-2920',
		kind: 'course',
		title: 'Curso de Introducción al Testing con JavaScript',
		platform: certificatePlatforms.platzi,
		date: new Date('2024-02-28T02:39:08.333Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2024-2920-javascript-testing.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2024-2920-javascript-testing.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2920-course/diploma/detalle/',
		credentialId: 'd23a5063-44a0-4102-8bf5-6292425a72a3',
	},
	{
		id: 'platzi-3996',
		kind: 'course',
		title: 'Curso de Inglés Práctico sobre Elementos de Trabajo',
		platform: certificatePlatforms.platzi,
		date: new Date('2024-02-08T22:19:39.716Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2024-3996-taller-elementos-trabajo.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2024-3996-taller-elementos-trabajo.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/3996-course/diploma/detalle/',
		credentialId: '183f46a9-2d07-4812-8a0c-f6f233b74040',
	},
	{
		id: 'platzi-8618',
		kind: 'course',
		title: 'Curso de Introducción a Platzi 🇺🇸',
		platform: certificatePlatforms.platzi,
		date: new Date('2024-02-04T00:49:39.916Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2024-8618-introduccion-platzi-usa.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2024-8618-introduccion-platzi-usa.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/8618-course/diploma/detalle/',
		credentialId: 'c5b46ba2-719b-43b2-9518-e15eb3b8e59b',
	},
	{
		id: 'platzi-8616',
		kind: 'course',
		title: 'Introduction to Platzi',
		platform: certificatePlatforms.platzi,
		date: new Date('2024-02-04T00:47:11.778Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2024-8616-introduction-platzi.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2024-8616-introduction-platzi.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/8616-course/diploma/detalle/',
		credentialId: '53d60369-6007-4268-bb03-ee5891510718',
	},
	{
		id: 'platzi-3575',
		kind: 'course',
		title: 'Prueba Técnica: E-commerce Profesional con JavaScript',
		platform: certificatePlatforms.platzi,
		date: new Date('2024-01-11T02:01:36.730Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2024-3575-laboratorio-js-fakestore.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2024-3575-laboratorio-js-fakestore.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/3575-course/diploma/detalle/',
		credentialId: '9d9ada4d-7c11-4190-8bca-a784c97a38bc',
	},
	{
		id: 'platzi-path-7041',
		kind: 'learning-path',
		title: 'JavaScript para Frontend',
		platform: certificatePlatforms.platzi,
		date: new Date('2024-01-10T19:54:48.738Z'),
		diploma: import(
			'./assets/images/certificates/platzi/paths/diplomas/2024-7041-web-javascript.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/paths/badges/2024-7041-web-javascript.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/ruta/7041-ruta/diploma/detalle/',
		credentialId: '55ef6905-62be-46a3-b2e7-53d300fe5339',
	},
	{
		id: 'platzi-4048',
		kind: 'course',
		title: 'Prueba Técnica: Desarrollo Frontend con JavaScript',
		platform: certificatePlatforms.platzi,
		date: new Date('2024-01-02T20:35:42.906Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2024-4048-laboratorio-javascript-prueba.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2024-4048-laboratorio-javascript-prueba.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/4048-course/diploma/detalle/',
		credentialId: '6f61a1cc-86b5-4362-96e5-31e4b33bcdab',
	},
	{
		id: 'codely-javascript-moderno-buenas-practicas-para-empezar-y-refactorizar-aplicaciones',
		kind: 'course',
		title: 'JavaScript moderno: Buenas prácticas para empezar y refactorizar aplicaciones',
		platform: certificatePlatforms.codely,
		date: new Date('2023-12-11T03:00:00.000Z'),
		diploma: import(
			'./assets/images/certificates/codely/diplomas/2023-javascript-moderno-buenas-practicas-para-empezar-y-refactorizar-aplicaciones.jpg'
		),
	},
	{
		id: 'platzi-8617',
		kind: 'course',
		title: 'Curso de JavaScript Desde Cero',
		platform: certificatePlatforms.platzi,
		date: new Date('2023-12-01T22:47:15.804Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2023-8617-javascript-fundamentos.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2023-8617-javascript-fundamentos.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/8617-course/diploma/detalle/',
		credentialId: 'a2db35a5-1841-4baa-b344-b831816b2a04',
	},
	{
		id: 'platzi-2517',
		kind: 'course',
		title: 'Curso de Complejidad Algorítmica con JavaScript',
		platform: certificatePlatforms.platzi,
		date: new Date('2023-11-28T22:20:42.830Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2023-2517-complejidad-js.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2023-2517-complejidad-js.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2517-course/diploma/detalle/',
		credentialId: 'f9b8bfa7-c978-4131-9722-8ab9edb367c2',
	},
	{
		id: 'platzi-2156',
		kind: 'course',
		title: 'Curso de Estructuras de Datos con JavaScript',
		platform: certificatePlatforms.platzi,
		date: new Date('2023-11-11T18:35:54.995Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2023-2156-estructuras-datos.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2023-2156-estructuras-datos.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2156-course/diploma/detalle/',
		credentialId: '9fa9d3b9-c4dc-4d61-9f57-59597ce0a57a',
	},
	{
		id: 'platzi-2199',
		kind: 'course',
		title: 'Curso de JavaScript: Web Components',
		platform: certificatePlatforms.platzi,
		date: new Date('2023-10-13T15:45:21.632Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2023-2199-web-components-javascript.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2023-2199-web-components-javascript.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2199-course/diploma/detalle/',
		credentialId: '194ef08f-2c1e-4e88-815e-92eb2d979d1a',
	},
	{
		id: 'platzi-6240',
		kind: 'course',
		title: 'Curso de Clean Code y Buenas Prácticas con JavaScript',
		platform: certificatePlatforms.platzi,
		date: new Date('2023-10-05T04:26:42.986Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2023-6240-javascript-clean-code.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2023-6240-javascript-clean-code.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/6240-course/diploma/detalle/',
		credentialId: '6ab1843b-b6f0-45c8-9a68-db04f3c9a1f9',
	},
	{
		id: 'alura-one-frontend',
		kind: 'program',
		title: 'Oracle Next Education: Front-end',
		platform: certificatePlatforms.alura,
		date: new Date('2023-09-30T03:00:00.000Z'),
		diploma: import(
			'./assets/images/certificates/alura/diplomas/2023-one-frontend.jpg'
		),
		url: 'https://app.aluracursos.com/program/certificate/a49d0c7e-99f2-4945-963c-059370cbd799',
		credentialId: 'a49d0c7e-99f2-4945-963c-059370cbd799',
	},
	{
		id: 'codely-css-grid-a-fondo',
		kind: 'course',
		title: 'CSS Grid a fondo',
		platform: certificatePlatforms.codely,
		date: new Date('2023-09-27T03:00:00.000Z'),
		diploma: import(
			'./assets/images/certificates/codely/diplomas/2023-css-grid-a-fondo.jpg'
		),
	},
	{
		id: 'codely-css-flex-a-fondo',
		kind: 'course',
		title: 'CSS Flex a fondo',
		platform: certificatePlatforms.codely,
		date: new Date('2023-09-18T03:00:00.000Z'),
		diploma: import(
			'./assets/images/certificates/codely/diplomas/2023-css-flex-a-fondo.jpg'
		),
	},
	{
		id: 'codely-buenas-practicas-con-css-colores',
		kind: 'course',
		title: 'Buenas prácticas con CSS: Colores',
		platform: certificatePlatforms.codely,
		date: new Date('2023-09-13T03:00:00.000Z'),
		diploma: import(
			'./assets/images/certificates/codely/diplomas/2023-buenas-practicas-con-css-colores.jpg'
		),
	},
	{
		id: 'codely-buenas-practicas-con-css-layouts',
		kind: 'course',
		title: 'Buenas prácticas con CSS: Layouts',
		platform: certificatePlatforms.codely,
		date: new Date('2023-09-12T03:00:00.000Z'),
		diploma: import(
			'./assets/images/certificates/codely/diplomas/2023-buenas-practicas-con-css-layouts.jpg'
		),
	},
	{
		id: 'codely-buenas-practicas-con-css-selectores',
		kind: 'course',
		title: 'Buenas prácticas con CSS: Selectores',
		platform: certificatePlatforms.codely,
		date: new Date('2023-09-09T03:00:00.000Z'),
		diploma: import(
			'./assets/images/certificates/codely/diplomas/2023-buenas-practicas-con-css-selectores.jpg'
		),
	},
	{
		id: 'platzi-1802',
		kind: 'course',
		title: 'Curso de Accesibilidad Web',
		platform: certificatePlatforms.platzi,
		date: new Date('2023-08-02T19:15:10.585Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2023-1802-accesibilidad-web.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2023-1802-accesibilidad-web.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1802-course/diploma/detalle/',
		credentialId: 'c65a2b9b-8424-480c-878f-43d115aa20a5',
	},
	{
		id: 'platzi-3240',
		kind: 'course',
		title: 'Audiocurso de Accesibilidad Web: Casos de Estudio',
		platform: certificatePlatforms.platzi,
		date: new Date('2023-07-17T06:32:24.006Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2023-3240-accesibilidad-casos-estudio.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2023-3240-accesibilidad-casos-estudio.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/3240-course/diploma/detalle/',
		credentialId: '9d7c0d24-743e-4ea5-b136-b3309064646a',
	},
	{
		id: 'codely-web-performance',
		kind: 'course',
		title: 'Web Performance',
		platform: certificatePlatforms.codely,
		date: new Date('2023-07-15T03:00:00.000Z'),
		diploma: import(
			'./assets/images/certificates/codely/diplomas/2023-web-performance.jpg'
		),
	},
	{
		id: 'platzi-1973',
		kind: 'course',
		title: 'Curso de Optimización Web',
		platform: certificatePlatforms.platzi,
		date: new Date('2023-06-04T05:53:15.540Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2023-1973-web-performance.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2023-1973-web-performance.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1973-course/diploma/detalle/',
		credentialId: '34c573ea-444b-4bce-b7e7-977f955d3627',
	},
	{
		id: 'codigo-facilito-curso-de-programacion-orientada-a-objetos',
		kind: 'course',
		title: 'Curso de Programación Orientada a Objetos',
		platform: certificatePlatforms['codigo-facilito'],
		date: new Date('2023-05-18T03:00:00.000Z'),
		diploma: import(
			'./assets/images/certificates/codigo-facilito/diplomas/2023-curso-de-programacion-orientada-a-objetos.jpg'
		),
		credentialId: 'b2b98404-ad95-494c-a187-0e0f1ddc98bf',
	},
	{
		id: 'platzi-2193',
		kind: 'course',
		title: 'Curso de Manipulación del DOM',
		platform: certificatePlatforms.platzi,
		date: new Date('2023-05-16T18:43:41.844Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2023-2193-dom.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2023-2193-dom.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2193-course/diploma/detalle/',
		credentialId: 'd4b46271-79ca-44cf-8d25-d95097980eee',
	},
	{
		id: 'platzi-1867',
		kind: 'course',
		title: 'Curso de Debugging con Chrome DevTools',
		platform: certificatePlatforms.platzi,
		date: new Date('2023-05-11T03:45:45.761Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2023-1867-devtools.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2023-1867-devtools.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1867-course/diploma/detalle/',
		credentialId: '5f2c728d-00dd-432d-abff-af3e7bb626e8',
	},
	{
		id: 'platzi-2338',
		kind: 'course',
		title: 'Curso Práctico de Maquetación y Animaciones con CSS',
		platform: certificatePlatforms.platzi,
		date: new Date('2023-05-02T05:30:12.906Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2023-2338-animaciones-css-practico.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2023-2338-animaciones-css-practico.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2338-course/diploma/detalle/',
		credentialId: '5907f0e8-5d9f-40f1-8b4b-e22e2eb63073',
	},
	{
		id: 'platzi-1787',
		kind: 'course',
		title: 'Curso de Single Page Application con JavaScript Vanilla',
		platform: certificatePlatforms.platzi,
		date: new Date('2023-04-22T04:04:52.446Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2023-1787-spa-javascript.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2023-1787-spa-javascript.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1787-course/diploma/detalle/',
		credentialId: 'f6ee6431-e843-413a-9ca1-82ef6fa26ea1',
	},
	{
		id: 'codigo-facilito-curso-de-herramientas-y-conceptos-frontend',
		kind: 'course',
		title: 'Curso de Herramientas y conceptos Frontend',
		platform: certificatePlatforms['codigo-facilito'],
		date: new Date('2023-04-22T03:00:00.000Z'),
		diploma: import(
			'./assets/images/certificates/codigo-facilito/diplomas/2023-curso-de-herramientas-y-conceptos-frontend.jpg'
		),
		credentialId: '8573db08-07f0-4e92-9f12-9cefb29ed7dd',
	},
	{
		id: 'platzi-6636',
		kind: 'course',
		title: '30 días de JavaScript',
		platform: certificatePlatforms.platzi,
		date: new Date('2023-04-18T00:17:32.982Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2023-6636-javascript-30-dias.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2023-6636-javascript-30-dias.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/6636-course/diploma/detalle/',
		credentialId: '214db252-4f4a-4d4e-a585-ae500ff54dc7',
	},
	{
		id: 'platzi-3216',
		kind: 'course',
		title: 'Curso de Vite.js',
		platform: certificatePlatforms.platzi,
		date: new Date('2023-04-11T18:39:39.039Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2023-3216-vitejs.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2023-3216-vitejs.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/3216-course/diploma/detalle/',
		credentialId: 'caaf30d6-aef7-46b9-aca2-028c430c30ee',
	},
	{
		id: 'platzi-2242',
		kind: 'course',
		title: 'Curso de Webpack',
		platform: certificatePlatforms.platzi,
		date: new Date('2023-04-05T05:47:01.674Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2023-2242-webpack.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2023-2242-webpack.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2242-course/diploma/detalle/',
		credentialId: '7768af94-00ff-4272-9bff-4492a473e8b7',
	},
	{
		id: 'platzi-5943',
		kind: 'course',
		title: 'Taller de Secretos Ocultos de JavaScript: Protección de Clases y Objetos',
		platform: certificatePlatforms.platzi,
		date: new Date('2023-03-21T10:52:27.635Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2023-5943-secretos-javascript.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2023-5943-secretos-javascript.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/5943-course/diploma/detalle/',
		credentialId: '37a6cdbc-ecb5-4413-be96-e2fad502d998',
	},
	{
		id: 'platzi-3576',
		kind: 'course',
		title: 'Curso de Introducción a Empaquetadores Web',
		platform: certificatePlatforms.platzi,
		date: new Date('2023-03-17T21:10:27.828Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2023-3576-empaquetadores.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2023-3576-empaquetadores.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/3576-course/diploma/detalle/',
		credentialId: '42265b43-e900-4be2-96c4-b7cd604cd4c1',
	},
	{
		id: 'codely-terminal-100-productiva-con-zsh',
		kind: 'course',
		title: 'Terminal 100% productiva con Zsh',
		platform: certificatePlatforms.codely,
		date: new Date('2023-03-13T03:00:00.000Z'),
		diploma: import(
			'./assets/images/certificates/codely/diplomas/2023-terminal-100-productiva-con-zsh.jpg'
		),
	},
	{
		id: 'platzi-3578',
		kind: 'course',
		title: 'Curso de NPM: Gestión de Paquetes y Dependencias en JavaScript',
		platform: certificatePlatforms.platzi,
		date: new Date('2023-03-11T18:18:25.987Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2023-3578-npm.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2023-3578-npm.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/3578-course/diploma/detalle/',
		credentialId: '80d2e107-4514-47c4-ad0d-b211db6592dd',
	},
	{
		id: 'platzi-2942',
		kind: 'course',
		title: 'Curso de API REST con Javascript: Performance y Usabilidad',
		platform: certificatePlatforms.platzi,
		date: new Date('2023-03-10T05:51:36.098Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2023-2942-api-profesional.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2023-2942-api-profesional.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2942-course/diploma/detalle/',
		credentialId: '49908ea3-889b-4d43-b202-0cda8f9716cb',
	},
	{
		id: 'platzi-3093',
		kind: 'course',
		title: 'Curso de Inglés Básico para Principiantes - (2022)',
		platform: certificatePlatforms.platzi,
		date: new Date('2023-01-21T03:10:00.026Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2023-3093-ingles-basico-principiantes.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2023-3093-ingles-basico-principiantes.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/3093-course/diploma/detalle/',
		credentialId: '32c1d6f7-557b-4f4f-bb13-a2bb1e483360',
	},
	{
		id: 'platzi-path-7040',
		kind: 'learning-path',
		title: 'HTML y CSS desde cero',
		platform: certificatePlatforms.platzi,
		date: new Date('2022-12-30T15:02:23.506Z'),
		diploma: import(
			'./assets/images/certificates/platzi/paths/diplomas/2022-7040-web-frontend.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/paths/badges/2022-7040-web-frontend.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/ruta/7040-ruta/diploma/detalle/',
		credentialId: 'd6221571-dcdb-46e1-8f04-a93a9f3a7a3c',
	},
	{
		id: 'platzi-2581',
		kind: 'course',
		title: 'Curso para Entender tus Emociones Básicas',
		platform: certificatePlatforms.platzi,
		date: new Date('2022-12-28T20:58:16.559Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2022-2581-emociones-basicas.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2022-2581-emociones-basicas.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2581-course/diploma/detalle/',
		credentialId: '9a52cbf3-dc48-4027-ad89-111473a2d8ba',
	},
	{
		id: 'platzi-2986',
		kind: 'course',
		title: 'Curso de API REST con Javascript: Ejemplos con APIs reales',
		platform: certificatePlatforms.platzi,
		date: new Date('2022-12-27T18:18:50.407Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2022-2986-api-practico.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2022-2986-api-practico.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2986-course/diploma/detalle/',
		credentialId: 'c9ed462f-48f0-4c41-ab91-352999069b30',
	},
	{
		id: 'platzi-3504',
		kind: 'course',
		title: 'Curso de ECMAScript: Historia y Versiones de JavaScript',
		platform: certificatePlatforms.platzi,
		date: new Date('2022-12-05T03:38:01.246Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2022-3504-ecmascript-6.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2022-3504-ecmascript-6.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/3504-course/diploma/detalle/',
		credentialId: 'a0456676-2c98-45d8-ba0f-1d8a13829457',
	},
	{
		id: 'platzi-3573',
		kind: 'course',
		title: 'Taller Práctico de JavaScript: ¡Crea tu Primer Videojuego!',
		platform: certificatePlatforms.platzi,
		date: new Date('2022-11-09T06:29:25.144Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2022-3573-javascript-practico-videojuegos.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2022-3573-javascript-practico-videojuegos.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/3573-course/diploma/detalle/',
		credentialId: '7ecb5e89-a749-4874-852d-ef1592bed164',
	},
	{
		id: 'platzi-3435',
		kind: 'course',
		title: 'Taller Práctico de JavaScript: Matemáticas y Estadística Básica',
		platform: certificatePlatforms.platzi,
		date: new Date('2022-10-25T00:12:23.371Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2022-3435-javascript-practico-matematicas.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2022-3435-javascript-practico-matematicas.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/3435-course/diploma/detalle/',
		credentialId: '0102188b-96b0-42e1-a42a-b65919b1ce7d',
	},
	{
		id: 'platzi-1937',
		kind: 'course',
		title: 'Curso Básico de Python',
		platform: certificatePlatforms.platzi,
		date: new Date('2022-10-20T16:41:30.582Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2022-1937-python-basico.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2022-1937-python-basico.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1937-course/diploma/detalle/',
		credentialId: 'fe65face-5e2a-4c6f-860f-c00f022fc9df',
	},
	{
		id: 'platzi-3271',
		kind: 'course',
		title: 'Curso Práctico de JavaScript',
		platform: certificatePlatforms.platzi,
		date: new Date('2022-10-17T04:29:54.977Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2022-3271-javascript-practico.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2022-3271-javascript-practico.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/3271-course/diploma/detalle/',
		credentialId: 'c60d5bb1-085f-4e8c-97b4-743e320c695a',
	},
	{
		id: 'platzi-3175',
		kind: 'course',
		title: 'Curso de Asincronismo con JavaScript 2022',
		platform: certificatePlatforms.platzi,
		date: new Date('2022-08-12T10:59:18.054Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2022-3175-asincronismo-js.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2022-3175-asincronismo-js.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/3175-course/diploma/detalle/',
		credentialId: 'b888d52f-9bff-44c4-9fd6-260ba08a450b',
	},
	{
		id: 'platzi-3602',
		kind: 'course',
		title: 'Diploma del #PlatziChallenge: Crea tu Portafolio como Web Developer Profesional',
		platform: certificatePlatforms.platzi,
		date: new Date('2022-08-12T02:43:23.137Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2022-3602-portafolio-web-diploma.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2022-3602-portafolio-web-diploma.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/3602-course/diploma/detalle/',
		credentialId: '6451cb41-3cd5-4eec-ab78-9defc33907a2',
	},
	{
		id: 'platzi-3213',
		kind: 'course',
		title: 'Curso de Closures y Scope en JavaScript',
		platform: certificatePlatforms.platzi,
		date: new Date('2022-07-10T16:25:06.049Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2022-3213-javascript-closures-scope.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2022-3213-javascript-closures-scope.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/3213-course/diploma/detalle/',
		credentialId: 'bf2134ed-7ded-4416-bd1b-85e311f34523',
	},
	{
		id: 'platzi-2985',
		kind: 'course',
		title: 'Curso de API REST con Javascript: Fundamentos',
		platform: certificatePlatforms.platzi,
		date: new Date('2022-06-29T20:49:46.420Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2022-2985-api.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2022-2985-api.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2985-course/diploma/detalle/',
		credentialId: 'ce4eb552-e2e0-4613-98f2-57a540932c0a',
	},
	{
		id: 'platzi-2393',
		kind: 'course',
		title: 'Curso de Inglés Básico A1: Presente Simple y Vocabulario Común (2021)',
		platform: certificatePlatforms.platzi,
		date: new Date('2022-05-31T19:19:40.979Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2022-2393-presente-simple-vocabulario-comun-2021.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2022-2393-presente-simple-vocabulario-comun-2021.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2393-course/diploma/detalle/',
		credentialId: 'd2028dae-9f39-489c-8935-6338ebf96cf8',
	},
	{
		id: 'platzi-2880',
		kind: 'course',
		title: 'Curso de TypeScript: Programación Orientada a Objetos y Asincronismo',
		platform: certificatePlatforms.platzi,
		date: new Date('2022-05-02T04:10:15.217Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2022-2880-typescript-poo.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2022-2880-typescript-poo.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2880-course/diploma/detalle/',
		credentialId: '59e18baf-b87e-4ae1-806b-7f54b1998358',
	},
	{
		id: 'platzi-2879',
		kind: 'course',
		title: 'Curso de TypeScript: Tipos Avanzados y Funciones',
		platform: certificatePlatforms.platzi,
		date: new Date('2022-04-22T02:07:14.631Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2022-2879-typescript-tipos-avanzados.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2022-2879-typescript-tipos-avanzados.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2879-course/diploma/detalle/',
		credentialId: '95acf04a-970f-441b-aa95-a186bd5dba0b',
	},
	{
		id: 'platzi-2878',
		kind: 'course',
		title: 'Curso de TypeScript',
		platform: certificatePlatforms.platzi,
		date: new Date('2022-04-18T05:50:11.823Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2022-2878-typescript-22.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2022-2878-typescript-22.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2878-course/diploma/detalle/',
		credentialId: '1088573d-01d6-478c-938e-d47749281872',
	},
	{
		id: 'platzi-1869',
		kind: 'course',
		title: 'Curso de TypeScript 3',
		platform: certificatePlatforms.platzi,
		date: new Date('2022-04-12T01:01:02.382Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2022-1869-typescript-2020.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2022-1869-typescript-2020.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1869-course/diploma/detalle/',
		credentialId: 'fd3082c8-0591-4301-8da0-46d985b7bc27',
	},
	{
		id: 'platzi-2633',
		kind: 'course',
		title: 'Curso Gratis de Estrategias para Aprender Inglés en Línea',
		platform: certificatePlatforms.platzi,
		date: new Date('2022-04-11T09:41:59.476Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2022-2633-estrategias-ingles-2022.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2022-2633-estrategias-ingles-2022.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2633-course/diploma/detalle/',
		credentialId: '434dc623-bff6-45bf-9030-4983477db966',
	},
	{
		id: 'platzi-1642',
		kind: 'course',
		title: 'Curso Profesional de JavaScript',
		platform: certificatePlatforms.platzi,
		date: new Date('2022-04-03T14:44:23.041Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2022-1642-javascript-profesional.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2022-1642-javascript-profesional.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1642-course/diploma/detalle/',
		credentialId: '3e5f24ac-71ad-4efb-b976-130c78a66995',
	},
	{
		id: 'platzi-2940',
		kind: 'course',
		title: 'Diploma del #PlatziChallenge: Crea tu Primera Página web 2022',
		platform: certificatePlatforms.platzi,
		date: new Date('2022-03-24T00:33:07.176Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2022-2940-primera-pagina-web-2022-diploma.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2022-2940-primera-pagina-web-2022-diploma.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2940-course/diploma/detalle/',
		credentialId: 'be17627d-1f5f-4849-9ec4-83ce88350ed4',
	},
	{
		id: 'platzi-1763',
		kind: 'course',
		title: 'Curso de Gestión de Dependencias y Paquetes con NPM',
		platform: certificatePlatforms.platzi,
		date: new Date('2022-03-18T19:09:27.164Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2022-1763-npm-js.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2022-1763-npm-js.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1763-course/diploma/detalle/',
		credentialId: '7d1f517f-3d9e-4f9f-898a-7c860bb9fe37',
	},
	{
		id: 'platzi-1789',
		kind: 'course',
		title: 'Curso de Asincronismo con JavaScript 2019',
		platform: certificatePlatforms.platzi,
		date: new Date('2022-03-16T01:05:22.693Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2022-1789-asincronismo-js-old.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2022-1789-asincronismo-js-old.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1789-course/diploma/detalle/',
		credentialId: '9e366a1f-8c60-420d-b012-e3a51e66e2f9',
	},
	{
		id: 'platzi-1798',
		kind: 'course',
		title: 'Curso de JavaScript Engine (V8) y el Navegador',
		platform: certificatePlatforms.platzi,
		date: new Date('2022-03-13T21:49:30.444Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2022-1798-javascript-navegador.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2022-1798-javascript-navegador.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1798-course/diploma/detalle/',
		credentialId: 'af2468a1-ffe8-4602-9ffd-8ba9fb45e5aa',
	},
	{
		id: 'platzi-2461',
		kind: 'course',
		title: 'Curso de Manipulación de Arrays en JavaScript',
		platform: certificatePlatforms.platzi,
		date: new Date('2022-03-03T04:54:49.813Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2022-2461-arrays.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2022-2461-arrays.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2461-course/diploma/detalle/',
		credentialId: 'e818d4e2-ad8a-451f-b8e8-138f3b5c9cc2',
	},
	{
		id: 'platzi-1815',
		kind: 'course',
		title: 'Curso de ECMAScript 6+',
		platform: certificatePlatforms.platzi,
		date: new Date('2022-02-19T06:46:20.852Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2022-1815-ecmascript.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2022-1815-ecmascript.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1815-course/diploma/detalle/',
		credentialId: '80b8d932-9dc7-4ee6-809f-cda763e3b5a8',
	},
	{
		id: 'platzi-2419',
		kind: 'course',
		title: 'Curso Intermedio de Programación Orientada a Objetos en JavaScript',
		platform: certificatePlatforms.platzi,
		date: new Date('2022-02-13T21:43:29.641Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2022-2419-javascript-poo-intermedio.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2022-2419-javascript-poo-intermedio.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2419-course/diploma/detalle/',
		credentialId: 'f7aa7b77-1733-4e4e-8105-62437f71e8b9',
	},
	{
		id: 'platzi-2332',
		kind: 'course',
		title: 'Curso Básico de Programación Orientada a Objetos con JavaScript',
		platform: certificatePlatforms.platzi,
		date: new Date('2022-02-02T22:15:36.068Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2022-2332-javascript-poo.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2022-2332-javascript-poo.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2332-course/diploma/detalle/',
		credentialId: '2a0f61ca-3ff2-43dc-b697-d009d78dd513',
	},
	{
		id: 'platzi-1474',
		kind: 'course',
		title: 'Curso de Programación Orientada a Objetos: POO',
		platform: certificatePlatforms.platzi,
		date: new Date('2022-01-29T20:35:18.651Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2022-1474-oop.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2022-1474-oop.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1474-course/diploma/detalle/',
		credentialId: '46b911a0-8425-41f9-9759-01cfabd3b383',
	},
	{
		id: 'platzi-1807',
		kind: 'course',
		title: 'Curso de Closures y Scope en JavaScript 2020',
		platform: certificatePlatforms.platzi,
		date: new Date('2021-12-28T22:34:09.436Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2021-1807-scope.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2021-1807-scope.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1807-course/diploma/detalle/',
		credentialId: 'e9c84e6b-cc93-4bca-bb14-31232d4e2cae',
	},
	{
		id: 'platzi-2327',
		kind: 'course',
		title: 'Curso Práctico de JavaScript',
		platform: certificatePlatforms.platzi,
		date: new Date('2021-12-26T23:17:09.164Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2021-2327-javascript-practico-2021.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2021-2327-javascript-practico-2021.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2327-course/diploma/detalle/',
		credentialId: '14114326-82a0-4287-a30e-c4aa035e3fe3',
	},
	{
		id: 'platzi-2337',
		kind: 'course',
		title: 'Curso de Animaciones con CSS',
		platform: certificatePlatforms.platzi,
		date: new Date('2021-12-07T03:53:06.746Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2021-2337-animaciones-css.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2021-2337-animaciones-css.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2337-course/diploma/detalle/',
		credentialId: '3474b7b3-55dc-4329-8d75-827315e7196f',
	},
	{
		id: 'platzi-2336',
		kind: 'course',
		title: 'Curso de Transformaciones y Transiciones en CSS',
		platform: certificatePlatforms.platzi,
		date: new Date('2021-11-30T17:16:33.301Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2021-2336-transformaciones-transiciones-css.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2021-2336-transformaciones-transiciones-css.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2336-course/diploma/detalle/',
		credentialId: '01e48abd-3750-45b9-a616-2bce85a2900f',
	},
	{
		id: 'platzi-2474',
		kind: 'course',
		title: 'Curso de CSS Grid Básico',
		platform: certificatePlatforms.platzi,
		date: new Date('2021-11-06T22:09:52.816Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2021-2474-css-grid.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2021-2474-css-grid.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2474-course/diploma/detalle/',
		credentialId: 'a29e2c5f-e648-4980-81be-aba2709a1b46',
	},
	{
		id: 'platzi-2549',
		kind: 'course',
		title: 'Platzi CONF 2021',
		platform: certificatePlatforms.platzi,
		date: new Date('2021-11-05T12:22:24.490Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2021-2549-platziconf2021.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2021-2549-platziconf2021.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2549-course/diploma/detalle/',
		credentialId: '424cfdf9-439c-4489-bd99-033f6d7c571b',
	},
	{
		id: 'platzi-2229',
		kind: 'course',
		title: 'Curso de Diseño Web con CSS Grid y Flexbox',
		platform: certificatePlatforms.platzi,
		date: new Date('2021-10-31T21:55:28.932Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2021-2229-flexbox-css-grid.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2021-2229-flexbox-css-grid.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2229-course/diploma/detalle/',
		credentialId: '80351dd8-d967-4e4d-87a7-036862263d9b',
	},
	{
		id: 'platzi-2222',
		kind: 'course',
		title: 'Curso Profesional de CSS Grid Layout',
		platform: certificatePlatforms.platzi,
		date: new Date('2021-10-22T03:24:26.473Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2021-2222-css-grid-layout.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2021-2222-css-grid-layout.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2222-course/diploma/detalle/',
		credentialId: 'ec348dec-2616-41f2-99c5-b848b1f30def',
	},
	{
		id: 'platzi-2477',
		kind: 'course',
		title: 'Curso Práctico de Frontend Developer',
		platform: certificatePlatforms.platzi,
		date: new Date('2021-10-13T22:51:19.844Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2021-2477-frontend-developer-practico.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2021-2477-frontend-developer-practico.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2477-course/diploma/detalle/',
		credentialId: '8f098c59-6308-449c-ac78-cd84c0c002e8',
	},
	{
		id: 'platzi-2467',
		kind: 'course',
		title: 'Curso de Frontend Developer',
		platform: certificatePlatforms.platzi,
		date: new Date('2021-10-03T23:00:17.372Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2021-2467-frontend-developer.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2021-2467-frontend-developer.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2467-course/diploma/detalle/',
		credentialId: '37561220-5630-4f6d-8639-a7d6734be5d3',
	},
	{
		id: 'platzi-1420',
		kind: 'course',
		title: 'Curso de Sistemas de Diseño Efectivos',
		platform: certificatePlatforms.platzi,
		date: new Date('2021-09-30T14:49:16.895Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2021-1420-sistemas-diseno.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2021-1420-sistemas-diseno.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1420-course/diploma/detalle/',
		credentialId: '5376a7d7-2d80-4141-af02-cbf2e4a2a951',
	},
	{
		id: 'platzi-1906',
		kind: 'course',
		title: 'Curso de Diseño para Developers',
		platform: certificatePlatforms.platzi,
		date: new Date('2021-09-24T00:40:47.965Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2021-1906-diseno-programadores.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2021-1906-diseno-programadores.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1906-course/diploma/detalle/',
		credentialId: '9979c1bd-e70a-4a22-85f9-e4f2afedc383',
	},
	{
		id: 'platzi-1665',
		kind: 'course',
		title: 'Curso de Preprocesadores CSS',
		platform: certificatePlatforms.platzi,
		date: new Date('2021-09-13T20:19:09.992Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2021-1665-preprocesadores.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2021-1665-preprocesadores.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1665-course/diploma/detalle/',
		credentialId: '2befca04-dad9-43a4-8f39-be3196234f30',
	},
	{
		id: 'platzi-2030',
		kind: 'course',
		title: 'Curso de Responsive Design: Maquetación Mobile First',
		platform: certificatePlatforms.platzi,
		date: new Date('2021-09-05T01:50:50.027Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2021-2030-mobile-first-2020.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2021-2030-mobile-first-2020.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2030-course/diploma/detalle/',
		credentialId: '9ad5f3d1-a78d-4533-afd6-622ac3bc757e',
	},
	{
		id: 'platzi-2292',
		kind: 'course',
		title: 'Curso de Introducción a la Terminal y Línea de Comandos',
		platform: certificatePlatforms.platzi,
		date: new Date('2021-08-06T14:17:44.847Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2021-2292-terminal-21.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2021-2292-terminal-21.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2292-course/diploma/detalle/',
		credentialId: '80795314-74a3-4d72-bc9b-d6bfb586c5ab',
	},
	{
		id: 'platzi-2157',
		kind: 'course',
		title: 'Curso de Flujo de Desarrollo Moderno CodeStream',
		platform: certificatePlatforms.platzi,
		date: new Date('2021-07-30T00:04:46.489Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2021-2157-desarrollo-moderno-codestream.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2021-2157-desarrollo-moderno-codestream.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2157-course/diploma/detalle/',
		credentialId: '778a3a4e-0a46-496d-a141-2aa40425c788',
	},
	{
		id: 'platzi-1098',
		kind: 'course',
		title: 'Fundamentos de Ingeniería de Software',
		platform: certificatePlatforms.platzi,
		date: new Date('2021-07-24T16:06:32.097Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2021-1098-ingenieria2017.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2021-1098-ingenieria2017.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1098-course/diploma/detalle/',
		credentialId: '743f4aaa-de5a-47e7-bc30-af2bd1acae0d',
	},
	{
		id: 'platzi-1358',
		kind: 'course',
		title: 'Curso de Inglés Básico: Fundamentos 2018',
		platform: certificatePlatforms.platzi,
		date: new Date('2021-07-16T17:42:49.170Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2021-1358-ingles-basico-2018.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2021-1358-ingles-basico-2018.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1358-course/diploma/detalle/',
		credentialId: '82a5d1f5-0c48-4e81-b685-b923bb0adf2b',
	},
	{
		id: 'platzi-2053',
		kind: 'course',
		title: 'Curso de Introducción a la Web: Historia y Funcionamiento de Internet',
		platform: certificatePlatforms.platzi,
		date: new Date('2021-06-22T22:11:50.997Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2021-2053-intro-historia-internet.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2021-2053-intro-historia-internet.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2053-course/diploma/detalle/',
		credentialId: '451c4459-2a54-4288-88cd-b5749785ab48',
	},
	{
		id: 'platzi-2218',
		kind: 'course',
		title: 'Curso Básico de Algoritmos y Pensamiento Lógico',
		platform: certificatePlatforms.platzi,
		date: new Date('2021-06-14T21:47:55.502Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2021-2218-pensamiento-logico-2020.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2021-2218-pensamiento-logico-2020.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2218-course/diploma/detalle/',
		credentialId: '1b8b3db8-1584-41b5-9b68-4c49d13873ec',
	},
	{
		id: 'platzi-1557',
		kind: 'course',
		title: 'Curso Profesional de Git y GitHub',
		platform: certificatePlatforms.platzi,
		date: new Date('2021-05-25T22:34:22.493Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2021-1557-git-github.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2021-1557-git-github.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1557-course/diploma/detalle/',
		credentialId: 'db48c312-3dd8-4eb3-950e-6ee375723b9e',
	},
	{
		id: 'platzi-2005',
		kind: 'course',
		title: 'Curso de Inglés Práctico para Descripciones Personales (2020=',
		platform: certificatePlatforms.platzi,
		date: new Date('2021-04-30T04:09:53.025Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2021-2005-taller-descripciones-personales.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2021-2005-taller-descripciones-personales.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2005-course/diploma/detalle/',
		credentialId: 'd37048e5-1c87-4b27-9416-e66fa0e3c774',
	},
	{
		id: 'platzi-2008',
		kind: 'course',
		title: 'Curso Definitivo de HTML y CSS',
		platform: certificatePlatforms.platzi,
		date: new Date('2021-04-06T19:57:36.342Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2021-2008-html-css-2020.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2021-2008-html-css-2020.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2008-course/diploma/detalle/',
		credentialId: 'ea88eab8-89a4-402d-a470-9e25cf8006df',
	},
	{
		id: 'platzi-1339',
		kind: 'course',
		title: 'Fundamentos de JavaScript 2018',
		platform: certificatePlatforms.platzi,
		date: new Date('2021-03-10T19:05:17.826Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2021-1339-fundamentos-javascript-2018.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2021-1339-fundamentos-javascript-2018.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1339-course/diploma/detalle/',
		credentialId: '8b161680-e7ec-4f85-be2f-652d6cf5802e',
	},
	{
		id: 'platzi-1814',
		kind: 'course',
		title: 'Curso Básico de JavaScript',
		platform: certificatePlatforms.platzi,
		date: new Date('2021-02-24T17:50:58.218Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2021-1814-basico-javascript.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2021-1814-basico-javascript.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1814-course/diploma/detalle/',
		credentialId: 'cb8d43b6-d1f1-44b9-b2a4-f3c0773ffec6',
	},
	{
		id: 'platzi-2042',
		kind: 'course',
		title: 'Curso de Prework: Configuración de Entorno de Desarrollo en Windows',
		platform: certificatePlatforms.platzi,
		date: new Date('2021-02-15T17:56:58.101Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2021-2042-prework-windows.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2021-2042-prework-windows.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/2042-course/diploma/detalle/',
		credentialId: 'e444c6d8-cfb2-4130-89f1-3e6207783c65',
	},
	{
		id: 'platzi-1640',
		kind: 'course',
		title: 'Curso de Frontend Developer 2019',
		platform: certificatePlatforms.platzi,
		date: new Date('2021-02-11T12:11:46.768Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2021-1640-frontend-developer-2019.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2021-1640-frontend-developer-2019.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1640-course/diploma/detalle/',
		credentialId: '055f5058-72f9-4ad0-a428-2cc2587d56a7',
	},
	{
		id: 'platzi-1050',
		kind: 'course',
		title: 'Curso Básico de Programación',
		platform: certificatePlatforms.platzi,
		date: new Date('2021-02-04T00:22:26.434Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2021-1050-basico-programacion.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2021-1050-basico-programacion.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1050-course/diploma/detalle/',
		credentialId: '2ab39988-ff12-4d87-ae63-970325aa80ec',
	},
	{
		id: 'platzi-1945',
		kind: 'course',
		title: 'Curso de Inglés Básico A1: Conversaciones Cortas y Habituales (2020)',
		platform: certificatePlatforms.platzi,
		date: new Date('2020-11-14T02:18:08.186Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2020-1945-ingles-principiantes-2020.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2020-1945-ingles-principiantes-2020.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1945-course/diploma/detalle/',
		credentialId: '7c03389f-870d-4c03-b44f-421d8fdab228',
	},
	{
		id: 'platzi-1944',
		kind: 'course',
		title: 'Curso de Estrategias para Aprender Inglés Online 2020',
		platform: certificatePlatforms.platzi,
		date: new Date('2020-11-06T23:27:01.442Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2020-1944-estrategias-ingles-2020.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2020-1944-estrategias-ingles-2020.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1944-course/diploma/detalle/',
		credentialId: '26d2745c-9f1f-4d5f-b3b5-8ed993d9ccf1',
	},
	{
		id: 'platzi-1267',
		kind: 'course',
		title: 'Curso de Cálculo para Análisis de Datos',
		platform: certificatePlatforms.platzi,
		date: new Date('2020-10-26T16:20:59.501Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2020-1267-calculo-datos.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2020-1267-calculo-datos.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1267-course/diploma/detalle/',
		credentialId: 'faa8fd14-93bd-4cf6-ac49-0bb58d8e1a7b',
	},
	{
		id: 'platzi-1608',
		kind: 'course',
		title: 'Curso de Estrategias para Aprender en Línea Efectivamente 2019',
		platform: certificatePlatforms.platzi,
		date: new Date('2020-08-15T00:01:16.413Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2020-1608-aprender-2019.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2020-1608-aprender-2019.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1608-course/diploma/detalle/',
		credentialId: '5719f245-dd55-4972-851c-6a22ce143c00',
	},
	{
		id: 'platzi-1650',
		kind: 'course',
		title: 'Curso de Prework: Buenas Prácticas y Entorno de Desarrollo en macOS 2019',
		platform: certificatePlatforms.platzi,
		date: new Date('2020-06-30T00:13:10.839Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2020-1650-prework-2019.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2020-1650-prework-2019.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1650-course/diploma/detalle/',
		credentialId: 'a03df677-3852-46a7-83bd-f93c9d9c83db',
	},
	{
		id: 'platzi-1748',
		kind: 'course',
		title: 'Curso de Introducción a la Terminal y Línea de Comandos 2019',
		platform: certificatePlatforms.platzi,
		date: new Date('2020-06-26T17:18:48.407Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2020-1748-terminal-2019.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2020-1748-terminal-2019.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1748-course/diploma/detalle/',
		credentialId: 'cc3a2f58-7ac4-46cc-8a60-34edaac67eef',
	},
	{
		id: 'platzi-1744',
		kind: 'course',
		title: 'Curso Práctico de Maquetación en CSS',
		platform: certificatePlatforms.platzi,
		date: new Date('2020-06-06T20:44:58.716Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2020-1744-practico-css.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2020-1744-practico-css.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1744-course/diploma/detalle/',
		credentialId: 'fd723b95-a62e-461d-be85-778d49c43367',
	},
	{
		id: 'platzi-1227',
		kind: 'course',
		title: 'Cómo Conseguir Trabajo en Programación',
		platform: certificatePlatforms.platzi,
		date: new Date('2020-05-23T22:25:33.400Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2020-1227-developer.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2020-1227-developer.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1227-course/diploma/detalle/',
		credentialId: 'af724a4a-12f0-48a1-844e-ba122aafe4f7',
	},
	{
		id: 'platzi-1229',
		kind: 'course',
		title: 'Curso de CSS Grid Layout 2017',
		platform: certificatePlatforms.platzi,
		date: new Date('2020-05-05T12:41:12.214Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2020-1229-css-grid-layout-2017.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2020-1229-css-grid-layout-2017.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1229-course/diploma/detalle/',
		credentialId: '6d890ad7-e498-4b79-9be3-9f1df144a283',
	},
	{
		id: 'platzi-1444',
		kind: 'course',
		title: 'Curso de Pensamiento Lógico 2018',
		platform: certificatePlatforms.platzi,
		date: new Date('2020-04-05T16:05:12.872Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2020-1444-pensamiento-logico-2018.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2020-1444-pensamiento-logico-2018.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1444-course/diploma/detalle/',
		credentialId: '5ff2c501-be06-45d2-9b56-de1718823f2b',
	},
	{
		id: 'platzi-1362',
		kind: 'course',
		title: 'Curso de Responsive Design',
		platform: certificatePlatforms.platzi,
		date: new Date('2020-03-22T13:44:00.983Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2020-1362-responsive-design.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2020-1362-responsive-design.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1362-course/diploma/detalle/',
		credentialId: 'af68cc24-4362-43e5-a8c7-ecb00f88b475',
	},
	{
		id: 'platzi-1758',
		kind: 'course',
		title: 'Curso Práctico de HTML y CSS',
		platform: certificatePlatforms.platzi,
		date: new Date('2020-02-27T04:54:11.059Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2020-1758-html-practico.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2020-1758-html-practico.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1758-course/diploma/detalle/',
		credentialId: '94097ac2-eee7-4802-8346-ccfcc5752693',
	},
	{
		id: 'platzi-1350',
		kind: 'course',
		title: 'Curso de Desarrollo Web Online',
		platform: certificatePlatforms.platzi,
		date: new Date('2020-02-14T05:08:53.849Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2020-1350-html5-css3.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2020-1350-html5-css3.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1350-course/diploma/detalle/',
		credentialId: '4391398f-bc98-4d6a-9892-4a5d288e8cd4',
	},
	{
		id: 'platzi-1449',
		kind: 'course',
		title: 'Curso de Álgebra',
		platform: certificatePlatforms.platzi,
		date: new Date('2020-02-03T21:59:18.929Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2020-1449-algebra-2018.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2020-1449-algebra-2018.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1449-course/diploma/detalle/',
		credentialId: 'c60370dd-79e1-4161-a7ed-8e1a342afea4',
	},
	{
		id: 'platzi-1492',
		kind: 'course',
		title: 'Curso de HTML y CSS 2019',
		platform: certificatePlatforms.platzi,
		date: new Date('2020-01-24T15:36:50.193Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2020-1492-html-css-2019.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2020-1492-html-css-2019.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1492-course/diploma/detalle/',
		credentialId: 'b249857d-2bde-4f99-af8b-9beaa783946d',
	},
	{
		id: 'platzi-1220',
		kind: 'course',
		title: 'Curso Gratis de Marca Personal 2018',
		platform: certificatePlatforms.platzi,
		date: new Date('2019-12-28T13:31:18.962Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2019-1220-marca-personal-2018.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2019-1220-marca-personal-2018.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1220-course/diploma/detalle/',
		credentialId: 'f05c8e54-d6aa-4782-a793-0168ff4907ec',
	},
	{
		id: 'platzi-1393',
		kind: 'course',
		title: 'Curso de Fundamentos de Matemáticas',
		platform: certificatePlatforms.platzi,
		date: new Date('2019-12-26T04:16:55.718Z'),
		diploma: import(
			'./assets/images/certificates/platzi/diplomas/2019-1393-fundamentos-matematicas-2018.jpg'
		),
		badge: import(
			'./assets/images/certificates/platzi/badges/2019-1393-fundamentos-matematicas-2018.png'
		),
		url: 'https://platzi.com/p/galeedgutierrez/curso/1393-course/diploma/detalle/',
		credentialId: 'ebbdbf27-0b29-423c-89a3-26f97991f619',
	},
];
