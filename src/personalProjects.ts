import CSS_ICON from '@icons/technologies/css/css.svg';
import HTML_ICON from '@icons/technologies/html/html.svg';
import JAVASCRIPT_ICON from '@icons/technologies/javascript/javascript.svg';
import PLAYWRIGHT_ICON from '@icons/technologies/playwright/playwright.svg';
import PUG_ICON from '@icons/technologies/pug/pug.svg';
import SASS_ICON from '@icons/technologies/sass/sass.svg';
import TYPESCRIPT_ICON from '@icons/technologies/typescript/typescript.svg';
import VITE_ICON from '@icons/technologies/vite/vite.svg';
import WEBPACK_ICON from '@icons/technologies/webpack/webpack.svg';

import type { PersonalProject } from './models/personalProject.model';

export const personalProjects: PersonalProject[] = [
	{
		id: 28,
		name: 'To Do App con React',
		technologies: ['React', 'TypeScript', 'CSS', 'Vite', 'Playwright'],
		technologiesIcons: [
			TYPESCRIPT_ICON,
			CSS_ICON,
			PLAYWRIGHT_ICON,
			VITE_ICON,
		],
		repository: 'https://github.com/GaleedGutierrez/Curso-de-React-js-2023',
		url: 'https://galeedgutierrez.com/Curso-de-React-js-2023/#all',
		screenshots: {
			avif: {
				small: '@images/screenshot-projects/avif/small/28-to-do-app-con-react.avif',
				medium: '@images/screenshot-projects/avif/medium/28-to-do-app-con-react.avif',
				large: '@images/screenshot-projects/avif/large/28-to-do-app-con-react.avif',
			},
			webp: {
				small: '@images/screenshot-projects/webp/small/28-to-do-app-con-react.webp',
				medium: '@images/screenshot-projects/webp/medium/28-to-do-app-con-react.webp',
				large: '@images/screenshot-projects/webp/large/28-to-do-app-con-react.webp',
			},
		},
		date: new Date('2024-07-16T03:00:00.000Z'),
		course: {
			name: 'Curso de React.js',
			platform: 'Platzi',
			url: 'https://platzi.com/cursos/react/que-necesitas-para-aprender-reactjs/',
			image: {
				avif: '@icons/courses-platform/avif/courses/curso-de-react.js-2023.avif',
				webp: '@icons/courses-platform/webp/courses/curso-de-react.js-2023.webp',
			},
		},
		description:
			'Aplicación web de gestión de tareas, incluye registro y filtrado de tareas, interfaz amigable y gestión de estado con Hooks y Context',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/28/to-do-app-react/',
	},
	{
		id: 27,
		name: 'My Day App - JS',
		technologies: ['JavaScript', 'HTML', 'CSS', 'Webpack'],
		technologiesIcons: [JAVASCRIPT_ICON, HTML_ICON, CSS_ICON, WEBPACK_ICON],
		repository:
			'https://github.com/GaleedGutierrez/laboratorio-mydayapp-js',
		url: 'https://galeedgutierrez.com/laboratorio-mydayapp-js/',
		screenshots: {
			avif: {
				small: '@images/screenshot-projects/avif/small/27-mydayapp-js.avif',
				medium: '@images/screenshot-projects/avif/medium/27-mydayapp-js.avif',
				large: '@images/screenshot-projects/avif/large/27-mydayapp-js.avif',
			},
			webp: {
				small: '@images/screenshot-projects/webp/small/27-mydayapp-js.webp',
				medium: '@images/screenshot-projects/webp/medium/27-mydayapp-js.webp',
				large: '@images/screenshot-projects/webp/large/27-mydayapp-js.webp',
			},
		},
		date: new Date('2024-01-02T03:00:00.000Z'),
		course: {
			name: 'Prueba Técnica: Desarrollo Frontend con JavaScript',
			platform: 'Platzi',
			url: 'https://platzi.com/cursos/laboratorio-javascript-prueba/',
			image: {
				avif: '@icons/courses-platform/avif/courses/laboratorio-profesional-javascript-prueba-tecnica.avif',
				webp: '@icons/courses-platform/webp/courses/laboratorio-profesional-javascript-prueba-tecnica.webp',
			},
		},
		description:
			'Creación de funcionalidades de una Todo List, permitiendo la persistencia de la misma. <span aria-hidden="true" tabindex="-1">📄</span>',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/27/my-day-app-js/',
	},
	{
		id: 26,
		name: 'Helvetica Neue',
		technologies: ['SASS', 'HTML', 'Webpack'],
		technologiesIcons: [SASS_ICON, HTML_ICON, WEBPACK_ICON],
		repository:
			'https://github.com/GaleedGutierrez/Curso-CSS-Grid-a-fondo-Codely-2021',
		url: 'https://galeedgutierrez.com/Curso-CSS-Grid-a-fondo-Codely-2021/',
		screenshots: {
			avif: {
				small: '@images/screenshot-projects/avif/small/26-helvetica-neue-css-gird-codely.avif',
				medium: '@images/screenshot-projects/avif/medium/26-helvetica-neue-css-gird-codely.avif',
				large: '@images/screenshot-projects/avif/large/26-helvetica-neue-css-gird-codely.avif',
			},
			webp: {
				small: '@images/screenshot-projects/webp/small/26-helvetica-neue-css-gird-codely.webp',
				medium: '@images/screenshot-projects/webp/medium/26-helvetica-neue-css-gird-codely.webp',
				large: '@images/screenshot-projects/webp/large/26-helvetica-neue-css-gird-codely.webp',
			},
		},
		date: new Date('2023-09-25T03:00:00.000Z'),
		course: {
			name: 'CSS Grid a fondo',
			platform: 'Codely',
			url: 'https://pro.codely.com/library/css-grid-a-fondo-126731/307888/path/',
			image: {
				avif: '@icons/courses-platform/avif/platform/codely.avif',
				webp: '@icons/courses-platform/webp/platform/codely.webp',
			},
		},
		description:
			'Creación de un póster elegante utilizando CSS Grid, destacando la versatilidad y fama de la fuente Helvetica Neue, un ícono en el mundo del diseño. <span aria-hidden="true" tabindex="-1">🖌️</span>',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/26/helvetica-neue/',
	},
	{
		id: 25,
		name: 'Apeperia',
		technologies: ['TypeScript', 'SASS', 'HTML', 'Webpack'],
		technologiesIcons: [
			TYPESCRIPT_ICON,
			SASS_ICON,
			HTML_ICON,
			WEBPACK_ICON,
		],
		repository:
			'https://github.com/GaleedGutierrez/Curso-de-Layouts-Responsivos-Trabajando-con-layouts-mobile-Alura-G5-2023',
		url: 'https://galeedgutierrez.com/Curso-de-Layouts-Responsivos-Trabajando-con-layouts-mobile-Alura-G5-2023/',
		screenshots: {
			avif: {
				small: '@images/screenshot-projects/avif/small/25-apeperia-alura.avif',
				medium: '@images/screenshot-projects/avif/medium/25-apeperia-alura.avif',
				large: '@images/screenshot-projects/avif/large/25-apeperia-alura.avif',
			},
			webp: {
				small: '@images/screenshot-projects/webp/small/25-apeperia-alura.webp',
				medium: '@images/screenshot-projects/webp/medium/25-apeperia-alura.webp',
				large: '@images/screenshot-projects/webp/large/25-apeperia-alura.webp',
			},
		},
		date: new Date('2023-08-14T03:00:00.000Z'),
		course: {
			name: 'Curso de Layouts Responsivos: Trabajando con layouts mobile',
			platform: 'Alura',
			url: 'https://app.aluracursos.com/course/layouts-responsivos-layouts-mobile',
			image: {
				avif: '@icons/courses-platform/avif/platform/alura.avif',
				webp: '@icons/courses-platform/webp/platform/alura.webp',
			},
		},
		description:
			'Landing Page de Apeperia <span aria-hidden="true" tabindex="-1">🚀</span>, una empresa emergente que innova la forma de comprar y crear aplicaciones móviles y web.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/25/apeperia/',
	},
	{
		id: 24,
		name: 'Mi portafolio - Juliana Gómez',
		technologies: ['TypeScript', 'SASS', 'HTML', 'Webpack'],
		technologiesIcons: [
			TYPESCRIPT_ICON,
			SASS_ICON,
			HTML_ICON,
			WEBPACK_ICON,
		],
		repository:
			'https://github.com/GaleedGutierrez/Curso-de-Accesibilidad-Web-2019',
		url: 'https://galeedgutierrez.com/Curso-de-Accesibilidad-Web-2019/',
		screenshots: {
			avif: {
				small: '@images/screenshot-projects/avif/small/24-mi-portafolio-juliana-gomez.avif',
				medium: '@images/screenshot-projects/avif/medium/24-mi-portafolio-juliana-gomez.avif',
				large: '@images/screenshot-projects/avif/large/24-mi-portafolio-juliana-gomez.avif',
			},
			webp: {
				small: '@images/screenshot-projects/webp/small/24-mi-portafolio-juliana-gomez.webp',
				medium: '@images/screenshot-projects/webp/medium/24-mi-portafolio-juliana-gomez.webp',
				large: '@images/screenshot-projects/webp/large/24-mi-portafolio-juliana-gomez.webp',
			},
		},
		date: new Date('2023-08-04T03:00:00.000Z'),
		course: {
			name: 'Curso de Accesibilidad Web',
			platform: 'Platzi',
			url: 'https://platzi.com/cursos/accesibilidad-web/',
			image: {
				avif: '@icons/courses-platform/avif/courses/curso-de-accesibilidad-web-2019.avif',
				webp: '@icons/courses-platform/webp/courses/curso-de-accesibilidad-web-2019.webp',
			},
		},
		description:
			'En este proyecto <span aria-hidden="true" tabindex="-1">🚀</span> se mejoró el portafolio de Juliana Gómez, pasando de una web con casi nula accesibilidad a una web con una buena accesibilidad. <span aria-hidden="true" tabindex="-1">🌐</span>',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/24/mi-portafolio-juliana-gomez/',
	},
	{
		id: 23,
		name: 'LEGO',
		technologies: ['TypeScript', 'SASS', 'HTML', 'ViteJS'],
		technologiesIcons: [TYPESCRIPT_ICON, SASS_ICON, HTML_ICON, VITE_ICON],
		repository:
			'https://github.com/GaleedGutierrez/Curso-Practico-de-Maquetacion-y-Animaciones-con-CSS-2021',
		url: 'https://galeedgutierrez.com/Curso-Practico-de-Maquetacion-y-Animaciones-con-CSS-2021/dist/',
		screenshots: {
			avif: {
				small: '@images/screenshot-projects/avif/small/23-lego.avif',
				medium: '@images/screenshot-projects/avif/medium/23-lego.avif',
				large: '@images/screenshot-projects/avif/large/23-lego.avif',
			},
			webp: {
				small: '@images/screenshot-projects/webp/small/23-lego.webp',
				medium: '@images/screenshot-projects/webp/medium/23-lego.webp',
				large: '@images/screenshot-projects/webp/large/23-lego.webp',
			},
		},
		date: new Date('2023-04-22T03:00:00.000Z'),
		course: {
			name: 'Curso Practico de Maquetacion y Animaciones con CSS',
			platform: 'Platzi',
			url: 'https://platzi.com/cursos/animaciones-css-practico/',
			image: {
				avif: '@icons/courses-platform/avif/courses/curso-practico-de-maquetacion-y-animaciones-con-css.avif',
				webp: '@icons/courses-platform/webp/courses/curso-practico-de-maquetacion-y-animaciones-con-css.webp',
			},
		},
		description:
			'En este proyecto <span aria-hidden="true" tabindex="-1">🚀</span>, cree una página web con temática de LEGO, utilizando diferentes técnicas de animación para darle vida y dinamismo al sitio. <span aria-hidden="true" tabindex="-1">🎨</span>',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/23/lego/',
	},
	{
		id: 22,
		name: '100tifi.co',
		technologies: ['TypeScript', 'SASS', 'HTML', 'ViteJS'],
		technologiesIcons: [TYPESCRIPT_ICON, SASS_ICON, HTML_ICON, VITE_ICON],
		repository:
			'https://github.com/GaleedGutierrez/Curso-de-Single-Page-Application-con-JavaScript-Vanilla-2021',
		url: 'https://galeedgutierrez.com/Curso-de-Single-Page-Application-con-JavaScript-Vanilla-2021/dist/public/index.html',
		screenshots: {
			avif: {
				small: '@images/screenshot-projects/avif/small/22-100rifi.co.avif',
				medium: '@images/screenshot-projects/avif/medium/22-100rifi.co.avif',
				large: '@images/screenshot-projects/avif/large/22-100rifi.co.avif',
			},
			webp: {
				small: '@images/screenshot-projects/webp/small/22-100rifi.co.webp',
				medium: '@images/screenshot-projects/webp/medium/22-100rifi.co.webp',
				large: '@images/screenshot-projects/webp/large/22-100rifi.co.webp',
			},
		},
		date: new Date('2023-04-12T03:00:00.000Z'),
		course: {
			name: 'Curso de Single Page Application con JavaScript Vanilla 2021',
			platform: 'Platzi',
			url: 'https://platzi.com/cursos/spa-javascript/',
			image: {
				avif: '@icons/courses-platform/avif/courses/curso-de-single-page-application-con-javaScript-vanilla-2021.avif',
				webp: '@icons/courses-platform/webp/courses/curso-de-single-page-application-con-javaScript-vanilla-2021.webp',
			},
		},
		description:
			'Web <span aria-hidden="true" tabindex="-1">🌐</span> que usa API de rickandmortyapi.com para ver detalles de personajes de “Rick y Morty” <span aria-hidden="true" tabindex="-1">🧪</span>.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/22/rick-and-morty-api/',
	},
	{
		id: 21,
		name: 'Encriptador de texto',
		technologies: ['TypeScript', 'SASS', 'HTML', 'ViteJS'],
		technologiesIcons: [TYPESCRIPT_ICON, SASS_ICON, HTML_ICON, VITE_ICON],
		repository:
			'https://github.com/GaleedGutierrez/Encriptador-de-texto-Alura-Challenges-ONE-2023',
		url: 'https://galeedgutierrez.com/Encriptador-de-texto-Alura-Challenges-ONE-2023/dist/',
		screenshots: {
			avif: {
				small: '@images/screenshot-projects/avif/small/21-encriptador-de-texto-alura-challenges-one.avif',
				medium: '@images/screenshot-projects/avif/medium/21-encriptador-de-texto-alura-challenges-one.avif',
				large: '@images/screenshot-projects/avif/large/21-encriptador-de-texto-alura-challenges-one.avif',
			},
			webp: {
				small: '@images/screenshot-projects/webp/small/21-encriptador-de-texto-alura-challenges-one.webp',
				medium: '@images/screenshot-projects/webp/medium/21-encriptador-de-texto-alura-challenges-one.webp',
				large: '@images/screenshot-projects/webp/large/21-encriptador-de-texto-alura-challenges-one.webp',
			},
		},
		date: new Date('2023-04-01T03:00:00.000Z'),
		course: {
			name: 'Challenge ONE: Principiante en programación',
			platform: 'Alura',
			url: 'https://www.aluracursos.com/',
			image: {
				avif: '@icons/courses-platform/avif/platform/alura.avif',
				webp: '@icons/courses-platform/webp/platform/alura.webp',
			},
		},
		description:
			'Encriptación y desencriptación de texto <span aria-hidden="true" tabindex="-1">📋</span> con un algoritmo de sustitución de vocales <span aria-hidden="true" tabindex="-1">🔡</span>.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/21/encriptador-de-texto/',
	},
	{
		id: 20,
		name: 'Link in bio',
		technologies: ['TypeScript', 'SASS', 'HTML', 'Webpack'],
		technologiesIcons: [
			TYPESCRIPT_ICON,
			SASS_ICON,
			HTML_ICON,
			WEBPACK_ICON,
		],
		repository:
			'https://github.com/GaleedGutierrez/Curso-de-Introduccion-a-Empaquetadores-Web/tree/main/webpack',
		url: 'https://galeedgutierrez.com/Curso-de-Introduccion-a-Empaquetadores-Web/webpack/dist/index.html',
		screenshots: {
			avif: {
				small: '@images/screenshot-projects/avif/small/20-my-link-in-bio.avif',
				medium: '@images/screenshot-projects/avif/medium/20-my-link-in-bio.avif',
				large: '@images/screenshot-projects/avif/large/20-my-link-in-bio.avif',
			},
			webp: {
				small: '@images/screenshot-projects/webp/small/20-my-link-in-bio.webp',
				medium: '@images/screenshot-projects/webp/medium/20-my-link-in-bio.webp',
				large: '@images/screenshot-projects/webp/large/20-my-link-in-bio.webp',
			},
		},
		date: new Date('2023-03-11T03:00:00.000Z'),
		course: {
			name: 'Curso de Introducción a Empaquetadores Web',
			platform: 'Platzi',
			url: 'https://platzi.com/cursos/empaquetadores/',
			image: {
				avif: '@icons/courses-platform/avif/courses/curso-de-introduccion-a-empaquetadores-web.avif',
				webp: '@icons/courses-platform/webp/courses/curso-de-introduccion-a-empaquetadores-web.webp',
			},
		},
		description:
			'Es un ejemplo de un link in bio <span aria-hidden="true" tabindex="-1">🔗</span>, que dirige a una página con varios enlaces de redes sociales <span aria-hidden="true" tabindex="-1">📱</span> y otros sitios de interés <span aria-hidden="true" tabindex="-1">💡</span>.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/20/link-in-bio/',
	},
	{
		id: 19,
		name: 'Platzi Movies',
		technologies: ['TypeScript', 'SASS', 'PUG'],
		technologiesIcons: [TYPESCRIPT_ICON, SASS_ICON, PUG_ICON],
		repository:
			'https://github.com/GaleedGutierrez/Curso-Profesional-de-Consumo-de-API-REST-con-JavaScript-2022',
		url: 'https://galeedgutierrez.com/Curso-Profesional-de-Consumo-de-API-REST-con-JavaScript-2022/html/#home',
		screenshots: {
			avif: {
				small: '@images/screenshot-projects/avif/small/19-platzi-movies-2022.avif',
				medium: '@images/screenshot-projects/avif/medium/19-platzi-movies-2022.avif',
				large: '@images/screenshot-projects/avif/large/19-platzi-movies-2022.avif',
			},
			webp: {
				small: '@images/screenshot-projects/webp/small/19-platzi-movies-2022.webp',
				medium: '@images/screenshot-projects/webp/medium/19-platzi-movies-2022.webp',
				large: '@images/screenshot-projects/webp/large/19-platzi-movies-2022.webp',
			},
		},
		date: new Date('2023-01-01T03:00:00.000Z'),
		course: {
			name: 'Curso de API REST con Javascript: Performance y Usabilidad',
			platform: 'Platzi',
			url: 'https://platzi.com/cursos/api-profesional/',
			image: {
				avif: '@icons/courses-platform/avif/courses/curso-profesional-consumo-api-rest-con-javascript-performance-y-usabilidad-2022.avif',
				webp: '@icons/courses-platform/webp/courses/curso-profesional-consumo-api-rest-con-javascript-performance-y-usabilidad-2022.webp',
			},
		},
		description:
			'Descubre y disfruta de las mejores películas <span aria-hidden="true" tabindex="-1">🎥</span> con esta web que te permite buscar por nombre o categoría y ver las más populares <span aria-hidden="true" tabindex="-1">🚀</span> usando la API de The Movie DB <span aria-hidden="true" tabindex="-1">🍿</span>.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/19/platzi-movies/',
	},
	{
		id: 18,
		name: 'Platziv - Juego Online',
		technologies: [
			'PUG',
			'SASS',
			'TypeScript',
			'HTML',
			'CSS',
			'JavaScript',
		],
		technologiesIcons: [
			PUG_ICON,
			SASS_ICON,
			TYPESCRIPT_ICON,
			HTML_ICON,
			CSS_ICON,
			JAVASCRIPT_ICON,
		],
		repository:
			'https://github.com/GaleedGutierrez/Taller-Practico-de-JavaScript-Crea-tu-Primer-Videojuego-2022',
		url: 'https://galeedgutierrez.com/Taller-Practico-de-JavaScript-Crea-tu-Primer-Videojuego-2022/html/index.html',
		screenshots: {
			avif: {
				small: '@images/screenshot-projects/avif/small/18-platziv-juego-online.avif',
				medium: '@images/screenshot-projects/avif/medium/18-platziv-juego-online.avif',
				large: '@images/screenshot-projects/avif/large/18-platziv-juego-online.avif',
			},
			webp: {
				small: '@images/screenshot-projects/webp/small/18-platziv-juego-online.webp',
				medium: '@images/screenshot-projects/webp/medium/18-platziv-juego-online.webp',
				large: '@images/screenshot-projects/webp/large/18-platziv-juego-online.webp',
			},
		},
		date: new Date('2022-11-09T03:00:00.000Z'),
		course: {
			name: 'Taller Práctico de JavaScript: ¡Crea tu Primer Videojuego!',
			platform: 'Platzi',
			url: 'https://platzi.com/cursos/javascript-practico-videojuegos/',
			image: {
				avif: '@icons/courses-platform/avif/courses/Taller-Practico-de-JavaScript-Crea-tu-Primer-Videojuego.avif',
				webp: '@icons/courses-platform/webp/courses/Taller-Practico-de-JavaScript-Crea-tu-Primer-Videojuego.webp',
			},
		},
		description:
			'El juego trata de un programador <span aria-hidden="true" tabindex="-1">👨‍💻</span> que tiene que llegar a su meta <span aria-hidden="true" tabindex="-1">✅</span> evitando los diferentes bugs <span aria-hidden="true" tabindex="-1">👾</span> que puede tener en el camino.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/18/platziv-juego-online/',
	},
	{
		id: 17,
		name: 'Michi App',
		technologies: [
			'PUG',
			'SASS',
			'TypeScript',
			'HTML',
			'CSS',
			'JavaScript',
		],
		technologiesIcons: [
			PUG_ICON,
			SASS_ICON,
			TYPESCRIPT_ICON,
			HTML_ICON,
			CSS_ICON,
			JAVASCRIPT_ICON,
		],
		repository:
			'https://github.com/GaleedGutierrez/Curso-de-Consumo-de-API-REST-con-JavaScript',
		url: 'https://galeedgutierrez.com/Curso-de-Consumo-de-API-REST-con-JavaScript/html/',
		screenshots: {
			avif: {
				small: '@images/screenshot-projects/avif/small/17-michis-app.avif',
				medium: '@images/screenshot-projects/avif/medium/17-michis-app.avif',
				large: '@images/screenshot-projects/avif/large/17-michis-app.avif',
			},
			webp: {
				small: '@images/screenshot-projects/webp/small/17-michis-app.webp',
				medium: '@images/screenshot-projects/webp/medium/17-michis-app.webp',
				large: '@images/screenshot-projects/webp/large/17-michis-app.webp',
			},
		},
		date: new Date('2022-05-01T03:00:00.000Z'),
		course: {
			name: 'Curso de Consumo de API REST con JavaScript',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/2985-api/48425-que-es-una-api-rest/',
			image: {
				avif: '@icons/courses-platform/avif/courses/curso-de-consumo-de-api-rest-con-javaScript.avif',
				webp: '@icons/courses-platform/webp/courses/curso-de-consumo-de-api-rest-con-javaScript.webp',
			},
		},
		description:
			'Una página que consume una API REST de gatitos, se pueden agregar y eliminar gatitos en favoritos.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/17/michi-app/',
	},
	{
		id: 16,
		name: 'Figura Geométricas',
		technologies: ['PUG', 'SASS', 'HTML', 'CSS', 'JavaScript'],
		technologiesIcons: [
			PUG_ICON,
			SASS_ICON,
			HTML_ICON,
			CSS_ICON,
			JAVASCRIPT_ICON,
		],
		repository:
			'https://github.com/GaleedGutierrez/Curso-de-Programacion-Orientada-a-Objetos-en-JavaScript/tree/main/TallerN1',
		url: 'https://galeedgutierrez.com/Curso-de-Programacion-Orientada-a-Objetos-en-JavaScript/TallerN1/html/',
		screenshots: {
			avif: {
				small: '@images/screenshot-projects/avif/small/16-curso-practico-de-javascript.avif',
				medium: '@images/screenshot-projects/avif/medium/16-curso-practico-de-javascript.avif',
				large: '@images/screenshot-projects/avif/large/16-curso-practico-de-javascript.avif',
			},
			webp: {
				small: '@images/screenshot-projects/webp/small/16-curso-practico-de-javascript.webp',
				medium: '@images/screenshot-projects/webp/medium/16-curso-practico-de-javascript.webp',
				large: '@images/screenshot-projects/webp/large/16-curso-practico-de-javascript.webp',
			},
		},
		date: new Date('2022-02-01T03:00:00.000Z'),
		course: {
			name: 'Curso de Programación Orientada a Objetos en JavaScript',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/2332-javascript-poo/38616-javascript-orientado-a-objetos-basado-en-prototipo/',
			image: {
				avif: '@icons/courses-platform/avif/courses/curso-practico-de-javascript.avif',
				webp: '@icons/courses-platform/webp/courses/curso-practico-de-javascript.webp',
			},
		},
		description:
			'Página para poder calcular el perímetro y área de una figura geométrica.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/16/figura-geometricas/',
	},
	{
		id: 15,
		name: 'Tienda Online',
		technologies: ['PUG', 'SASS', 'HTML', 'CSS', 'JavaScript'],
		technologiesIcons: [
			PUG_ICON,
			SASS_ICON,
			HTML_ICON,
			CSS_ICON,
			JAVASCRIPT_ICON,
		],
		repository:
			'https://github.com/GaleedGutierrez/Curso-Practico-de-JavaScript/tree/main/TallerN2',
		url: 'https://galeedgutierrez.com/Curso-Practico-de-JavaScript/TallerN2/html/',
		screenshots: {
			avif: {
				small: '@images/screenshot-projects/avif/small/15-curso-practico-de-javascript-02.avif',
				medium: '@images/screenshot-projects/avif/medium/15-curso-practico-de-javascript-02.avif',
				large: '@images/screenshot-projects/avif/large/15-curso-practico-de-javascript-02.avif',
			},
			webp: {
				small: '@images/screenshot-projects/webp/small/15-curso-practico-de-javascript-02.webp',
				medium: '@images/screenshot-projects/webp/medium/15-curso-practico-de-javascript-02.webp',
				large: '@images/screenshot-projects/webp/large/15-curso-practico-de-javascript-02.webp',
			},
		},
		date: new Date('2021-12-01T03:00:00.000Z'),
		course: {
			name: 'Curso Practico de JavaScript',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/2327-javascript-practico/38654-cual-es-tu-sueno-con-javascript/',
			image: {
				avif: '@icons/courses-platform/avif/courses/curso-practico-de-javascript.avif',
				webp: '@icons/courses-platform/webp/courses/curso-practico-de-javascript.webp',
			},
		},
		description:
			'Página calculadora del total a pagar después de aplicar un cupón de descuento.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/15/tienda-online/',
	},
	{
		id: 14,
		name: 'Animationland',
		technologies: ['PUG', 'SASS', 'HTML', 'CSS'],
		technologiesIcons: [PUG_ICON, SASS_ICON, HTML_ICON, CSS_ICON],
		repository:
			'https://github.com/GaleedGutierrez/Curso-de-Animaciones-con-CSS',
		url: 'https://galeedgutierrez.com/Curso-de-Animaciones-con-CSS/html/',
		screenshots: {
			avif: {
				small: '@images/screenshot-projects/avif/small/14-curso-de-animaciones-con-css.avif',
				medium: '@images/screenshot-projects/avif/medium/14-curso-de-animaciones-con-css.avif',
				large: '@images/screenshot-projects/avif/large/14-curso-de-animaciones-con-css.avif',
			},
			webp: {
				small: '@images/screenshot-projects/webp/small/14-curso-de-animaciones-con-css.webp',
				medium: '@images/screenshot-projects/webp/medium/14-curso-de-animaciones-con-css.webp',
				large: '@images/screenshot-projects/webp/large/14-curso-de-animaciones-con-css.webp',
			},
		},
		date: new Date('2021-12-01T03:00:00.000Z'),
		course: {
			name: 'Curso de Animaciones con CSS',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/2337-animaciones-css/37995-sabes-mas-de-animaciones-de-lo-que-crees/',
			image: {
				avif: '@icons/courses-platform/avif/courses/Curso-de-Animaciones-con-CSS.avif',
				webp: '@icons/courses-platform/webp/courses/Curso-de-Animaciones-con-CSS.webp',
			},
		},
		description: 'Una pequeña animación con el perrito de Cheems.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/14/animationland/',
	},
	{
		id: 13,
		name: 'Check the best food',
		technologies: ['HTML', 'CSS'],
		technologiesIcons: [HTML_ICON, CSS_ICON],
		repository:
			'https://github.com/GaleedGutierrez/Curso-de-CSS-Grid-Basico',
		url: 'https://galeedgutierrez.com/Curso-de-CSS-Grid-Basico/Proyecto/',
		screenshots: {
			avif: {
				small: '@images/screenshot-projects/avif/small/13-check-the-best-food.avif',
				medium: '@images/screenshot-projects/avif/medium/13-check-the-best-food.avif',
				large: '@images/screenshot-projects/avif/large/13-check-the-best-food.avif',
			},
			webp: {
				small: '@images/screenshot-projects/webp/small/13-check-the-best-food.webp',
				medium: '@images/screenshot-projects/webp/medium/13-check-the-best-food.webp',
				large: '@images/screenshot-projects/webp/large/13-check-the-best-food.webp',
			},
		},
		date: new Date('2021-11-01T03:00:00.000Z'),
		course: {
			name: 'Curso de CSS Grid Básico',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/2474-css-grid/42182-que-es-css-grid-layout/',
			image: {
				avif: '@icons/courses-platform/avif/courses/curso-css-grid-basico.avif',
				webp: '@icons/courses-platform/webp/courses/curso-css-grid-basico.webp',
			},
		},
		description: 'Maquetación de una página para un restaurante.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/13/check-the-best-food/',
	},
	{
		id: 12,
		name: 'Batabit',
		technologies: ['PUG', 'SASS', 'HTML', 'CSS'],
		technologiesIcons: [PUG_ICON, SASS_ICON, HTML_ICON, CSS_ICON],
		repository:
			'https://github.com/GaleedGutierrez/Curso-de-Responsive-Design-Maquetacion-Mobile-First',
		url: 'https://galeedgutierrez.com/Curso-de-Responsive-Design-Maquetacion-Mobile-First/html/',
		screenshots: {
			avif: {
				small: '@images/screenshot-projects/avif/small/12-batabit.avif',
				medium: '@images/screenshot-projects/avif/medium/12-batabit.avif',
				large: '@images/screenshot-projects/avif/large/12-batabit.avif',
			},
			webp: {
				small: '@images/screenshot-projects/webp/small/12-batabit.webp',
				medium: '@images/screenshot-projects/webp/medium/12-batabit.webp',
				large: '@images/screenshot-projects/webp/large/12-batabit.webp',
			},
		},
		date: new Date('2021-11-01T03:00:00.000Z'),
		course: {
			name: 'Curso de Responsive Design: Maquetación Mobile First',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/2030-mobile-first/33326-introduccion-al-curso/',
			image: {
				avif: '@icons/courses-platform/avif/courses/Curso-de-Responsive-Design-Maquetación-Mobile-First.avif',
				webp: '@icons/courses-platform/webp/courses/Curso-de-Responsive-Design-Maquetación-Mobile-First.webp',
			},
		},
		description:
			'Maquetación de una página para ver la cotización de criptomonedas.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/12/batabit/',
	},
	{
		id: 11,
		name: 'Yard Sale',
		technologies: ['PUG', 'SASS', 'HTML', 'CSS'],
		technologiesIcons: [PUG_ICON, SASS_ICON, HTML_ICON, CSS_ICON],
		repository:
			'https://github.com/GaleedGutierrez/Curso-Practico-de-Frontend-Developer',
		url: 'https://galeedgutierrez.com/Curso-Practico-de-Frontend-Developer/html/homepage.html',
		screenshots: {
			avif: {
				small: '@images/screenshot-projects/avif/small/11-curso-practico-de-frontend-developer.avif',
				medium: '@images/screenshot-projects/avif/medium/11-curso-practico-de-frontend-developer.avif',
				large: '@images/screenshot-projects/avif/large/11-curso-practico-de-frontend-developer.avif',
			},
			webp: {
				small: '@images/screenshot-projects/webp/small/11-curso-practico-de-frontend-developer.webp',
				medium: '@images/screenshot-projects/webp/medium/11-curso-practico-de-frontend-developer.webp',
				large: '@images/screenshot-projects/webp/large/11-curso-practico-de-frontend-developer.webp',
			},
		},
		date: new Date('2021-10-01T03:00:00.000Z'),
		course: {
			name: 'Curso de Frontend Developer',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/2477-frontend-developer-practico/41501-ya-tomaste-el-curso-de-frontend-developer/',
			image: {
				avif: '@icons/courses-platform/avif/courses/curso-de-frontend-developer.avif',
				webp: '@icons/courses-platform/webp/courses/curso-de-frontend-developer.webp',
			},
		},
		description: 'Maquetación de una tienda online.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/11/yard-sale/',
	},
	{
		id: 10,
		name: 'Steam Burger',
		technologies: ['PUG', 'SASS', 'HTML', 'CSS'],
		technologiesIcons: [PUG_ICON, SASS_ICON, HTML_ICON, CSS_ICON],
		repository:
			'https://github.com/GaleedGutierrez/Curso-de-Disenio-para-Programadores',
		url: 'https://galeedgutierrez.com/Curso-de-Disenio-para-Programadores/html/',
		screenshots: {
			avif: {
				small: '@images/screenshot-projects/avif/small/10-steam.avif',
				medium: '@images/screenshot-projects/avif/medium/10-steam.avif',
				large: '@images/screenshot-projects/avif/large/10-steam.avif',
			},
			webp: {
				small: '@images/screenshot-projects/webp/small/10-steam.webp',
				medium: '@images/screenshot-projects/webp/medium/10-steam.webp',
				large: '@images/screenshot-projects/webp/large/10-steam.webp',
			},
		},
		date: new Date('2021-09-01T03:00:00.000Z'),
		course: {
			name: 'Curso de Diseño para Developers',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/1906-diseno-programadores/28549-bienvenida/',
			image: {
				avif: '@icons/courses-platform/avif/courses/curso-de-diseno-para-programadores.avif',
				webp: '@icons/courses-platform/webp/courses/curso-de-diseno-para-programadores.webp',
			},
		},
		description: 'Página web para un restaurante.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/10/steam-burger/',
	},
	{
		id: 9,
		name: 'Platzi Video',
		technologies: ['PUG', 'SASS', 'HTML', 'CSS'],
		technologiesIcons: [PUG_ICON, SASS_ICON, HTML_ICON, CSS_ICON],
		repository:
			'https://github.com/GaleedGutierrez/Curso-de-Frontend-Developer-2019',
		url: 'https://galeedgutierrez.com/Curso-de-Frontend-Developer-2019/platzi-video/html/homepage.html',
		screenshots: {
			avif: {
				small: '@images/screenshot-projects/avif/small/9-platzi-video-curso-frontend-developer-2019.avif',
				medium: '@images/screenshot-projects/avif/medium/9-platzi-video-curso-frontend-developer-2019.avif',
				large: '@images/screenshot-projects/avif/large/9-platzi-video-curso-frontend-developer-2019.avif',
			},
			webp: {
				small: '@images/screenshot-projects/webp/small/9-platzi-video-curso-frontend-developer-2019.webp',
				medium: '@images/screenshot-projects/webp/medium/9-platzi-video-curso-frontend-developer-2019.webp',
				large: '@images/screenshot-projects/webp/large/9-platzi-video-curso-frontend-developer-2019.webp',
			},
		},
		date: new Date('2021-09-01T03:00:00.000Z'),
		course: {
			name: 'Curso de Frontend Developer 2019',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/1640-frontend-developer-2019/21874-presentacion-y-bienvenida-al-curso-de-frontend-dev/',
			image: {
				avif: '@icons/courses-platform/avif/courses/curso-de-frontend-developer-2019.avif',
				webp: '@icons/courses-platform/webp/courses/curso-de-frontend-developer-2019.webp',
			},
		},
		description:
			'Maquetación del home, login, registro y page not found de Platzi Video.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/9/platzi-video/',
	},
	{
		id: 8,
		name: 'Wikipedia Clone',
		technologies: ['HTML', 'CSS'],
		technologiesIcons: [HTML_ICON, CSS_ICON],
		repository:
			'https://github.com/GaleedGutierrez/Curso-practico-de-HTML-y-CSS/tree/main/WikipediaClone',
		url: 'https://galeedgutierrez.com/Curso-practico-de-HTML-y-CSS/WikipediaClone/',
		screenshots: {
			avif: {
				small: '@images/screenshot-projects/avif/small/8-wikipedia-clone.avif',
				medium: '@images/screenshot-projects/avif/medium/8-wikipedia-clone.avif',
				large: '@images/screenshot-projects/avif/large/8-wikipedia-clone.avif',
			},
			webp: {
				small: '@images/screenshot-projects/webp/small/8-wikipedia-clone.webp',
				medium: '@images/screenshot-projects/webp/medium/8-wikipedia-clone.webp',
				large: '@images/screenshot-projects/webp/large/8-wikipedia-clone.webp',
			},
		},
		date: new Date('2021-09-01T03:00:00.000Z'),
		course: {
			name: 'Curso Práctico de HTML y CSS',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/1758-html-practico/29888-platzicodingchallenge-platzicodingchallenge/',
			image: {
				avif: '@icons/courses-platform/avif/courses/curso-practico-de-html-y-css.avif',
				webp: '@icons/courses-platform/webp/courses/curso-practico-de-html-y-css.webp',
			},
		},
		description: 'Un clone del home de Wikipedia.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/8/wikipedia-clone/',
	},
	{
		id: 7,
		name: 'Google Clone',
		technologies: ['HTML', 'CSS'],
		technologiesIcons: [HTML_ICON, CSS_ICON],
		repository:
			'https://github.com/GaleedGutierrez/Curso-practico-de-HTML-y-CSS/tree/main/my-Google-clone',
		url: 'https://galeedgutierrez.com/Curso-practico-de-HTML-y-CSS/my-Google-clone/',
		screenshots: {
			avif: {
				small: '@images/screenshot-projects/avif/small/7-google-clone.avif',
				medium: '@images/screenshot-projects/avif/medium/7-google-clone.avif',
				large: '@images/screenshot-projects/avif/large/7-google-clone.avif',
			},
			webp: {
				small: '@images/screenshot-projects/webp/small/7-google-clone.webp',
				medium: '@images/screenshot-projects/webp/medium/7-google-clone.webp',
				large: '@images/screenshot-projects/webp/large/7-google-clone.webp',
			},
		},
		date: new Date('2021-09-01T03:00:00.000Z'),
		course: {
			name: 'Curso Práctico de HTML y CSS',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/1758-html-practico/29888-platzicodingchallenge-platzicodingchallenge/',
			image: {
				avif: '@icons/courses-platform/avif/courses/curso-practico-de-html-y-css.avif',
				webp: '@icons/courses-platform/webp/courses/curso-practico-de-html-y-css.webp',
			},
		},
		description: 'Un clone de la clásica página de búsqueda de Google.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/7/google-clone/',
	},
	{
		id: 6,
		name: 'Villa Platzi',
		technologies: ['HTML', 'JavaScript'],
		technologiesIcons: [HTML_ICON, JAVASCRIPT_ICON],
		repository: 'https://github.com/GaleedGutierrez/Villa-Platzi',
		url: 'https://galeedgutierrez.com/Villa-Platzi/',
		screenshots: {
			avif: {
				small: '@images/screenshot-projects/avif/small/6-villa-platzi.avif',
				medium: '@images/screenshot-projects/avif/medium/6-villa-platzi.avif',
				large: '@images/screenshot-projects/avif/large/6-villa-platzi.avif',
			},
			webp: {
				small: '@images/screenshot-projects/webp/small/6-villa-platzi.webp',
				medium: '@images/screenshot-projects/webp/medium/6-villa-platzi.webp',
				large: '@images/screenshot-projects/webp/large/6-villa-platzi.webp',
			},
		},
		date: new Date('2021-01-01T03:00:00.000Z'),
		course: {
			name: 'Curso Gratis de Programación Básica',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/1050-programacion-basica/5103-mi-primera-linea-de-codigo/',
			image: {
				avif: '@icons/courses-platform/avif/courses/curso-gratis-de-programacion-basica.avif',
				webp: '@icons/courses-platform/webp/courses/curso-gratis-de-programacion-basica.webp',
			},
		},
		description: 'Una pequeña granja en donde puedes mover a un cerdo.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/6/villa-platzi/',
	},
	{
		id: 5,
		name: 'Generador de figuras geométricas',
		technologies: ['HTML', 'JavaScript'],
		technologiesIcons: [HTML_ICON, JAVASCRIPT_ICON],
		repository:
			'https://github.com/GaleedGutierrez/Proyecto-generador-de-figuras',
		url: 'https://galeedgutierrez.com/Proyecto-generador-de-figuras/',
		screenshots: {
			avif: {
				small: '@images/screenshot-projects/avif/small/5-proyecto-generador-de-figuras.avif',
				medium: '@images/screenshot-projects/avif/medium/5-proyecto-generador-de-figuras.avif',
				large: '@images/screenshot-projects/avif/large/5-proyecto-generador-de-figuras.avif',
			},
			webp: {
				small: '@images/screenshot-projects/webp/small/5-proyecto-generador-de-figuras.webp',
				medium: '@images/screenshot-projects/webp/medium/5-proyecto-generador-de-figuras.webp',
				large: '@images/screenshot-projects/webp/large/5-proyecto-generador-de-figuras.webp',
			},
		},
		date: new Date('2021-01-01T03:00:00.000Z'),
		course: {
			name: 'Curso Gratis de Programación Básica',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/1050-programacion-basica/5103-mi-primera-linea-de-codigo/',
			image: {
				avif: '@icons/courses-platform/avif/courses/curso-gratis-de-programacion-basica.avif',
				webp: '@icons/courses-platform/webp/courses/curso-gratis-de-programacion-basica.webp',
			},
		},
		description: 'Generador de figuras geométricas.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/5/generador-de-figuras-geometricas/',
	},
	{
		id: 4,
		name: 'Mi Blog',
		technologies: ['PUG', 'SASS', 'HTML', 'CSS'],
		technologiesIcons: [PUG_ICON, SASS_ICON, HTML_ICON, CSS_ICON],
		repository:
			'https://github.com/GaleedGutierrez/galeedgutierrez.github.io',
		url: 'https://galeedgutierrez.com/Curso-Practico-de-Maquetacion-en-CSS/html/',
		screenshots: {
			avif: {
				small: '@images/screenshot-projects/avif/small/4-mi-blog.avif',
				medium: '@images/screenshot-projects/avif/medium/4-mi-blog.avif',
				large: '@images/screenshot-projects/avif/large/4-mi-blog.avif',
			},
			webp: {
				small: '@images/screenshot-projects/webp/small/4-mi-blog.webp',
				medium: '@images/screenshot-projects/webp/medium/4-mi-blog.webp',
				large: '@images/screenshot-projects/webp/large/4-mi-blog.webp',
			},
		},
		date: new Date('2020-07-01T03:00:00.000Z'),
		course: {
			name: 'Curso Práctico de Maquetación en CSS',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/1744-practico-css/24710-lo-que-aprenderas-sobre-maquetacion-en-css/',
			image: {
				avif: '@icons/courses-platform/avif/courses/curso-practico-de-maquetacion-en-css.avif',
				webp: '@icons/courses-platform/webp/courses/curso-practico-de-maquetacion-en-css.webp',
			},
		},
		description: 'Maquetación de un blog personal.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/4/my-blog/',
	},
	{
		id: 3,
		name: 'Platzi-Video',
		technologies: ['HTML', 'CSS'],
		technologiesIcons: [HTML_ICON, CSS_ICON],
		repository: 'https://github.com/GaleedGutierrez/Platzi-Video',
		url: 'https://galeedgutierrez.com/Platzi-Video/',
		screenshots: {
			avif: {
				small: '@images/screenshot-projects/avif/small/3-platzi-video.avif',
				medium: '@images/screenshot-projects/avif/medium/3-platzi-video.avif',
				large: '@images/screenshot-projects/avif/large/3-platzi-video.avif',
			},
			webp: {
				small: '@images/screenshot-projects/webp/small/3-platzi-video.webp',
				medium: '@images/screenshot-projects/webp/medium/3-platzi-video.webp',
				large: '@images/screenshot-projects/webp/large/3-platzi-video.webp',
			},
		},
		date: new Date('2020-05-01T03:00:00.000Z'),
		course: {
			name: 'Curso de CSS Grid Layout 2017',
			platform: 'Platzi',
			url: 'https://platzi.com/r/galeedgutierrez',
			image: {
				avif: '@icons/courses-platform/avif/courses/curso-de-css-grid-layout-2017.avif',
				webp: '@icons/courses-platform/webp/courses/curso-de-css-grid-layout-2017.webp',
			},
		},
		description: 'Maquetación de una web reproductora de videos.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/3/platzi-video/',
	},
	{
		id: 2,
		name: 'Movie.es',
		technologies: ['HTML', 'CSS'],
		technologiesIcons: [HTML_ICON, CSS_ICON],
		repository: 'https://github.com/GaleedGutierrez/Movi.es',
		url: 'https://galeedgutierrez.com/Movi.es/',
		screenshots: {
			avif: {
				small: '@images/screenshot-projects/avif/small/2-movie.es.avif',
				medium: '@images/screenshot-projects/avif/medium/2-movie.es.avif',
				large: '@images/screenshot-projects/avif/large/2-movie.es.avif',
			},
			webp: {
				small: '@images/screenshot-projects/webp/small/2-movie.es.webp',
				medium: '@images/screenshot-projects/webp/medium/2-movie.es.webp',
				large: '@images/screenshot-projects/webp/large/2-movie.es.webp',
			},
		},
		date: new Date('2020-05-01T03:00:00.000Z'),
		course: {
			name: 'Curso de CSS Grid Layout 2017',
			platform: 'Platzi',
			url: 'https://platzi.com/r/galeedgutierrez',
			image: {
				avif: '@icons/courses-platform/avif/courses/curso-de-css-grid-layout-2017.avif',
				webp: '@icons/courses-platform/webp/courses/curso-de-css-grid-layout-2017.webp',
			},
		},
		description: 'Maquetación de una página de películas y series.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/2/movie-es/',
	},
	{
		id: 1,
		name: 'Portfolio Leonidas Esteban',
		technologies: ['HTML', 'CSS'],
		technologiesIcons: [HTML_ICON, CSS_ICON],
		repository:
			'https://github.com/GaleedGutierrez/Portafolio-LeonidasEsteban',
		url: 'https://galeedgutierrez.com/Portafolio-LeonidasEsteban/',
		screenshots: {
			avif: {
				small: '@images/screenshot-projects/avif/small/1-portfolio-leonidas-esteban.avif',
				medium: '@images/screenshot-projects/avif/medium/1-portfolio-leonidas-esteban.avif',
				large: '@images/screenshot-projects/avif/large/1-portfolio-leonidas-esteban.avif',
			},
			webp: {
				small: '@images/screenshot-projects/webp/small/1-portfolio-leonidas-esteban.webp',
				medium: '@images/screenshot-projects/webp/medium/1-portfolio-leonidas-esteban.webp',
				large: '@images/screenshot-projects/webp/large/1-portfolio-leonidas-esteban.webp',
			},
		},
		date: new Date('2020-02-01T03:00:00.000Z'),
		course: {
			name: 'Curso de Responsive Design',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/1362-responsive-design/13534-bienvenidos-al-curso-de-responsive-design/',
			image: {
				avif: '@icons/courses-platform/avif/courses/curso-de-responsive-design-leonidas-esteban.avif',
				webp: '@icons/courses-platform/webp/courses/curso-de-responsive-design-leonidas-esteban.webp',
			},
		},
		description:
			'Página web para presentar los proyectos de Leonidas Esteban.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/1/portfolio-leonidas-esteban/',
	},
	{
		id: 0,
		name: 'Brand',
		technologies: ['HTML', 'CSS'],
		technologiesIcons: [HTML_ICON, CSS_ICON],
		repository: 'https://github.com/GaleedGutierrez/Brand-Platzi',
		url: 'https://galeedgutierrez.com/Brand-Platzi/',
		screenshots: {
			avif: {
				small: '@images/screenshot-projects/avif/small/0-brand.avif',
				medium: '@images/screenshot-projects/avif/medium/0-brand.avif',
				large: '@images/screenshot-projects/avif/large/0-brand.avif',
			},
			webp: {
				small: '@images/screenshot-projects/webp/small/0-brand.webp',
				medium: '@images/screenshot-projects/webp/medium/0-brand.webp',
				large: '@images/screenshot-projects/webp/large/0-brand.webp',
			},
		},
		date: new Date('2020-01-01T03:00:00.000Z'),
		course: {
			name: 'Curso de HTML y CSS 2019',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/1492-html-css-2019/16971-introduccion-al-curso-profesional-de-desarrollo-we/',
			image: {
				avif: '@icons/courses-platform/avif/courses/curso-de-html-y-css-2019.avif',
				webp: '@icons/courses-platform/webp/courses/curso-de-html-y-css-2019.webp',
			},
		},
		description:
			'Mi primer proyecto web, es una tienda de gatitos muy simple que usa PayPal para procesar los pagos.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/0/brand/',
	},
];
