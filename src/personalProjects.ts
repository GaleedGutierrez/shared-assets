import type { PersonalProject } from './models/personalProject.model.js';
import { technologies } from './technologies.js';

export const personalProjects: PersonalProject[] = [
	{
		id: 29,
		title: 'Shop.co',
		technologies: [
			technologies.react,
			technologies.typescript,
			technologies.tailwindcss,
			technologies.shadcn,
			technologies.vite,
			technologies.playwright,
		],
		repository:
			'https://github.com/GaleedGutierrez/pv_tp_integrador_grupo13_TS',
		url: 'https://galeedgutierrez.com/pv_tp_integrador_grupo13_TS/',
		screenshot: import(
			'./assets/images/screenshot-projects/29-shop.co.png'
		),
		date: new Date('2025-07-05T03:00:00.000Z'),
		course: {
			name: 'Facultad de Ingeniería',
			platform: 'Universidad Nacional de Jujuy',
			url: 'https://www.unju.edu.ar/',
			logo: {
				svg: import(
					'./assets/icons/courses-platform/svg/platform/unju.svg?raw'
				),
			},
		},
		description:
			'Proyecto integrador de la carrera de Analista Programador Universitario, desarrollado con React y TypeScript. Incluye funcionalidades de autenticación y gestión de productos.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/29/shop-co/',
	},
	{
		id: 28,
		title: 'To Do App con React',
		technologies: [
			technologies.react,
			technologies.typescript,
			technologies.css,
			technologies.vite,
			technologies.playwright,
		],
		repository: 'https://github.com/GaleedGutierrez/Curso-de-React-js-2023',
		url: 'https://galeedgutierrez.com/Curso-de-React-js-2023/#all',
		screenshot: import(
			'./assets/images/screenshot-projects/28-to-do-app-con-react.png'
		),
		date: new Date('2024-07-16T03:00:00.000Z'),
		course: {
			name: 'Curso de React.js',
			platform: 'Platzi',
			url: 'https://platzi.com/cursos/react/que-necesitas-para-aprender-reactjs/',
			logo: {
				avif: import(
					'./assets/icons/courses-platform/avif/courses/curso-de-react.js-2023.avif'
				),
				webp: import(
					'./assets/icons/courses-platform/webp/courses/curso-de-react.js-2023.webp'
				),
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
		title: 'My Day App - JS',
		technologies: [
			technologies.javascript,
			technologies.html,
			technologies.css,
			technologies.webpack,
		],
		repository:
			'https://github.com/GaleedGutierrez/laboratorio-mydayapp-js',
		url: 'https://galeedgutierrez.com/laboratorio-mydayapp-js/',
		screenshot: import(
			'./assets/images/screenshot-projects/27-mydayapp-js.png'
		),
		date: new Date('2024-01-02T03:00:00.000Z'),
		course: {
			name: 'Prueba Técnica: Desarrollo Frontend con JavaScript',
			platform: 'Platzi',
			url: 'https://platzi.com/cursos/laboratorio-javascript-prueba/',
			logo: {
				avif: import(
					'./assets/icons/courses-platform/avif/courses/laboratorio-profesional-javascript-prueba-tecnica.avif'
				),
				webp: import(
					'./assets/icons/courses-platform/webp/courses/laboratorio-profesional-javascript-prueba-tecnica.webp'
				),
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
		title: 'Helvetica Neue',
		technologies: [
			technologies.sass,
			technologies.html,
			technologies.webpack,
		],
		repository:
			'https://github.com/GaleedGutierrez/Curso-CSS-Grid-a-fondo-Codely-2021',
		url: 'https://galeedgutierrez.com/Curso-CSS-Grid-a-fondo-Codely-2021/',
		screenshot: import(
			'./assets/images/screenshot-projects/26-helvetica-neue-css-gird-codely.png'
		),
		date: new Date('2023-09-25T03:00:00.000Z'),
		course: {
			name: 'CSS Grid a fondo',
			platform: 'Codely',
			url: 'https://pro.codely.com/library/css-grid-a-fondo-126731/307888/path/',
			logo: {
				avif: import(
					'./assets/icons/courses-platform/avif/platform/codely.avif'
				),
				webp: import(
					'./assets/icons/courses-platform/webp/platform/codely.webp'
				),
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
		title: 'Apeperia',
		technologies: [
			technologies.typescript,
			technologies.sass,
			technologies.html,
			technologies.webpack,
		],
		repository:
			'https://github.com/GaleedGutierrez/Curso-de-Layouts-Responsivos-Trabajando-con-layouts-mobile-Alura-G5-2023',
		url: 'https://galeedgutierrez.com/Curso-de-Layouts-Responsivos-Trabajando-con-layouts-mobile-Alura-G5-2023/',
		screenshot: import(
			'./assets/images/screenshot-projects/25-apeperia-alura.png'
		),
		date: new Date('2023-08-14T03:00:00.000Z'),
		course: {
			name: 'Curso de Layouts Responsivos: Trabajando con layouts mobile',
			platform: 'Alura',
			url: 'https://app.aluracursos.com/course/layouts-responsivos-layouts-mobile',
			logo: {
				avif: import(
					'./assets/icons/courses-platform/avif/platform/alura.avif'
				),
				webp: import(
					'./assets/icons/courses-platform/webp/platform/alura.webp'
				),
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
		title: 'Mi portafolio - Juliana Gómez',
		technologies: [
			technologies.typescript,
			technologies.sass,
			technologies.html,
			technologies.webpack,
		],
		repository:
			'https://github.com/GaleedGutierrez/Curso-de-Accesibilidad-Web-2019',
		url: 'https://galeedgutierrez.com/Curso-de-Accesibilidad-Web-2019/',
		screenshot: import(
			'./assets/images/screenshot-projects/24-mi-portafolio-juliana-gomez.png'
		),
		date: new Date('2023-08-04T03:00:00.000Z'),
		course: {
			name: 'Curso de Accesibilidad Web',
			platform: 'Platzi',
			url: 'https://platzi.com/cursos/accesibilidad-web/',
			logo: {
				avif: import(
					'./assets/icons/courses-platform/avif/courses/curso-de-accesibilidad-web-2019.avif'
				),
				webp: import(
					'./assets/icons/courses-platform/webp/courses/curso-de-accesibilidad-web-2019.webp'
				),
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
		title: 'LEGO',
		technologies: [
			technologies.typescript,
			technologies.sass,
			technologies.html,
			technologies.vite,
		],
		repository:
			'https://github.com/GaleedGutierrez/Curso-Practico-de-Maquetacion-y-Animaciones-con-CSS-2021',
		url: 'https://galeedgutierrez.com/Curso-Practico-de-Maquetacion-y-Animaciones-con-CSS-2021/dist/',
		screenshot: import('./assets/images/screenshot-projects/23-lego.png'),
		date: new Date('2023-04-22T03:00:00.000Z'),
		course: {
			name: 'Curso Practico de Maquetacion y Animaciones con CSS',
			platform: 'Platzi',
			url: 'https://platzi.com/cursos/animaciones-css-practico/',
			logo: {
				avif: import(
					'./assets/icons/courses-platform/avif/courses/curso-practico-de-maquetacion-y-animaciones-con-css.avif'
				),
				webp: import(
					'./assets/icons/courses-platform/webp/courses/curso-practico-de-maquetacion-y-animaciones-con-css.webp'
				),
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
		title: '100tifi.co',
		technologies: [
			technologies.typescript,
			technologies.sass,
			technologies.html,
			technologies.vite,
		],
		repository:
			'https://github.com/GaleedGutierrez/Curso-de-Single-Page-Application-con-JavaScript-Vanilla-2021',
		url: 'https://galeedgutierrez.com/Curso-de-Single-Page-Application-con-JavaScript-Vanilla-2021/dist/public/index.html',
		screenshot: import(
			'./assets/images/screenshot-projects/22-100rifi.co.png'
		),
		date: new Date('2023-04-12T03:00:00.000Z'),
		course: {
			name: 'Curso de Single Page Application con JavaScript Vanilla 2021',
			platform: 'Platzi',
			url: 'https://platzi.com/cursos/spa-javascript/',
			logo: {
				avif: import(
					'./assets/icons/courses-platform/avif/courses/curso-de-single-page-application-con-javaScript-vanilla-2021.avif'
				),
				webp: import(
					'./assets/icons/courses-platform/webp/courses/curso-de-single-page-application-con-javaScript-vanilla-2021.webp'
				),
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
		title: 'Encriptador de texto',
		technologies: [
			technologies.typescript,
			technologies.sass,
			technologies.html,
			technologies.vite,
		],
		repository:
			'https://github.com/GaleedGutierrez/Encriptador-de-texto-Alura-Challenges-ONE-2023',
		url: 'https://galeedgutierrez.com/Encriptador-de-texto-Alura-Challenges-ONE-2023/dist/',
		screenshot: import(
			'./assets/images/screenshot-projects/21-encriptador-de-texto-alura-challenges-one.png'
		),
		date: new Date('2023-04-01T03:00:00.000Z'),
		course: {
			name: 'Challenge ONE: Principiante en programación',
			platform: 'Alura',
			url: 'https://www.aluracursos.com/',
			logo: {
				avif: import(
					'./assets/icons/courses-platform/avif/platform/alura.avif'
				),
				webp: import(
					'./assets/icons/courses-platform/webp/platform/alura.webp'
				),
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
		title: 'Link in bio',
		technologies: [
			technologies.typescript,
			technologies.sass,
			technologies.html,
			technologies.webpack,
		],
		repository:
			'https://github.com/GaleedGutierrez/Curso-de-Introduccion-a-Empaquetadores-Web/tree/main/webpack',
		url: 'https://galeedgutierrez.com/Curso-de-Introduccion-a-Empaquetadores-Web/webpack/dist/index.html',
		screenshot: import(
			'./assets/images/screenshot-projects/20-my-link-in-bio.png'
		),
		date: new Date('2023-03-11T03:00:00.000Z'),
		course: {
			name: 'Curso de Introducción a Empaquetadores Web',
			platform: 'Platzi',
			url: 'https://platzi.com/cursos/empaquetadores/',
			logo: {
				avif: import(
					'./assets/icons/courses-platform/avif/courses/curso-de-introduccion-a-empaquetadores-web.avif'
				),
				webp: import(
					'./assets/icons/courses-platform/webp/courses/curso-de-introduccion-a-empaquetadores-web.webp'
				),
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
		title: 'Platzi Movies',
		technologies: [
			technologies.typescript,
			technologies.sass,
			technologies.pug,
		],
		repository:
			'https://github.com/GaleedGutierrez/Curso-Profesional-de-Consumo-de-API-REST-con-JavaScript-2022',
		url: 'https://galeedgutierrez.com/Curso-Profesional-de-Consumo-de-API-REST-con-JavaScript-2022/html/#home',
		screenshot: import(
			'./assets/images/screenshot-projects/19-platzi-movies-2022.png'
		),
		date: new Date('2023-01-01T03:00:00.000Z'),
		course: {
			name: 'Curso de API REST con Javascript: Performance y Usabilidad',
			platform: 'Platzi',
			url: 'https://platzi.com/cursos/api-profesional/',
			logo: {
				avif: import(
					'./assets/icons/courses-platform/avif/courses/curso-profesional-consumo-api-rest-con-javascript-performance-y-usabilidad-2022.avif'
				),
				webp: import(
					'./assets/icons/courses-platform/webp/courses/curso-profesional-consumo-api-rest-con-javascript-performance-y-usabilidad-2022.webp'
				),
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
		title: 'Platziv - Juego Online',
		technologies: [
			technologies.pug,
			technologies.sass,
			technologies.typescript,
			technologies.html,
			technologies.css,
			technologies.javascript,
		],
		repository:
			'https://github.com/GaleedGutierrez/Taller-Practico-de-JavaScript-Crea-tu-Primer-Videojuego-2022',
		url: 'https://galeedgutierrez.com/Taller-Practico-de-JavaScript-Crea-tu-Primer-Videojuego-2022/html/index.html',
		screenshot: import(
			'./assets/images/screenshot-projects/18-platziv-juego-online.png'
		),
		date: new Date('2022-11-09T03:00:00.000Z'),
		course: {
			name: 'Taller Práctico de JavaScript: ¡Crea tu Primer Videojuego!',
			platform: 'Platzi',
			url: 'https://platzi.com/cursos/javascript-practico-videojuegos/',
			logo: {
				avif: import(
					'./assets/icons/courses-platform/avif/courses/Taller-Practico-de-JavaScript-Crea-tu-Primer-Videojuego.avif'
				),
				webp: import(
					'./assets/icons/courses-platform/webp/courses/Taller-Practico-de-JavaScript-Crea-tu-Primer-Videojuego.webp'
				),
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
		title: 'Michi App',
		technologies: [
			technologies.pug,
			technologies.sass,
			technologies.typescript,
			technologies.html,
			technologies.css,
			technologies.javascript,
		],
		repository:
			'https://github.com/GaleedGutierrez/Curso-de-Consumo-de-API-REST-con-JavaScript',
		url: 'https://galeedgutierrez.com/Curso-de-Consumo-de-API-REST-con-JavaScript/html/',
		screenshot: import(
			'./assets/images/screenshot-projects/17-michis-app.png'
		),
		date: new Date('2022-05-01T03:00:00.000Z'),
		course: {
			name: 'Curso de Consumo de API REST con JavaScript',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/2985-api/48425-que-es-una-api-rest/',
			logo: {
				avif: import(
					'./assets/icons/courses-platform/avif/courses/curso-de-consumo-de-api-rest-con-javaScript.avif'
				),
				webp: import(
					'./assets/icons/courses-platform/webp/courses/curso-de-consumo-de-api-rest-con-javaScript.webp'
				),
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
		title: 'Figura Geométricas',
		technologies: [
			technologies.pug,
			technologies.sass,
			technologies.html,
			technologies.css,
			technologies.javascript,
		],
		repository:
			'https://github.com/GaleedGutierrez/Curso-de-Programacion-Orientada-a-Objetos-en-JavaScript/tree/main/TallerN1',
		url: 'https://galeedgutierrez.com/Curso-de-Programacion-Orientada-a-Objetos-en-JavaScript/TallerN1/html/',
		screenshot: import(
			'./assets/images/screenshot-projects/16-curso-practico-de-javascript.png'
		),
		date: new Date('2022-02-01T03:00:00.000Z'),
		course: {
			name: 'Curso de Programación Orientada a Objetos en JavaScript',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/2332-javascript-poo/38616-javascript-orientado-a-objetos-basado-en-prototipo/',
			logo: {
				avif: import(
					'./assets/icons/courses-platform/avif/courses/curso-practico-de-javascript.avif'
				),
				webp: import(
					'./assets/icons/courses-platform/webp/courses/curso-practico-de-javascript.webp'
				),
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
		title: 'Tienda Online',
		technologies: [
			technologies.pug,
			technologies.sass,
			technologies.html,
			technologies.css,
			technologies.javascript,
		],
		repository:
			'https://github.com/GaleedGutierrez/Curso-Practico-de-JavaScript/tree/main/TallerN2',
		url: 'https://galeedgutierrez.com/Curso-Practico-de-JavaScript/TallerN2/html/',
		screenshot: import(
			'./assets/images/screenshot-projects/15-curso-practico-de-javascript-02.png'
		),
		date: new Date('2021-12-01T03:00:00.000Z'),
		course: {
			name: 'Curso Practico de JavaScript',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/2327-javascript-practico/38654-cual-es-tu-sueno-con-javascript/',
			logo: {
				avif: import(
					'./assets/icons/courses-platform/avif/courses/curso-practico-de-javascript.avif'
				),
				webp: import(
					'./assets/icons/courses-platform/webp/courses/curso-practico-de-javascript.webp'
				),
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
		title: 'Animationland',
		technologies: [
			technologies.pug,
			technologies.sass,
			technologies.html,
			technologies.css,
		],
		repository:
			'https://github.com/GaleedGutierrez/Curso-de-Animaciones-con-CSS',
		url: 'https://galeedgutierrez.com/Curso-de-Animaciones-con-CSS/html/',
		screenshot: import(
			'./assets/images/screenshot-projects/14-curso-de-animaciones-con-css.png'
		),
		date: new Date('2021-12-01T03:00:00.000Z'),
		course: {
			name: 'Curso de Animaciones con CSS',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/2337-animaciones-css/37995-sabes-mas-de-animaciones-de-lo-que-crees/',
			logo: {
				avif: import(
					'./assets/icons/courses-platform/avif/courses/Curso-de-Animaciones-con-CSS.avif'
				),
				webp: import(
					'./assets/icons/courses-platform/webp/courses/Curso-de-Animaciones-con-CSS.webp'
				),
			},
		},
		description: 'Una pequeña animación con el perrito de Cheems.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/14/animationland/',
	},
	{
		id: 13,
		title: 'Check the best food',
		technologies: [technologies.html, technologies.css],
		repository:
			'https://github.com/GaleedGutierrez/Curso-de-CSS-Grid-Basico',
		url: 'https://galeedgutierrez.com/Curso-de-CSS-Grid-Basico/Proyecto/',
		screenshot: import(
			'./assets/images/screenshot-projects/13-check-the-best-food.png'
		),
		date: new Date('2021-11-01T03:00:00.000Z'),
		course: {
			name: 'Curso de CSS Grid Básico',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/2474-css-grid/42182-que-es-css-grid-layout/',
			logo: {
				avif: import(
					'./assets/icons/courses-platform/avif/courses/curso-css-grid-basico.avif'
				),
				webp: import(
					'./assets/icons/courses-platform/webp/courses/curso-css-grid-basico.webp'
				),
			},
		},
		description: 'Maquetación de una página para un restaurante.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/13/check-the-best-food/',
	},
	{
		id: 12,
		title: 'Batabit',
		technologies: [
			technologies.pug,
			technologies.sass,
			technologies.html,
			technologies.css,
		],
		repository:
			'https://github.com/GaleedGutierrez/Curso-de-Responsive-Design-Maquetacion-Mobile-First',
		url: 'https://galeedgutierrez.com/Curso-de-Responsive-Design-Maquetacion-Mobile-First/html/',
		screenshot: import(
			'./assets/images/screenshot-projects/12-batabit.png'
		),
		date: new Date('2021-11-01T03:00:00.000Z'),
		course: {
			name: 'Curso de Responsive Design: Maquetación Mobile First',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/2030-mobile-first/33326-introduccion-al-curso/',
			logo: {
				avif: import(
					'./assets/icons/courses-platform/avif/courses/Curso-de-Responsive-Design-Maquetación-Mobile-First.avif'
				),
				webp: import(
					'./assets/icons/courses-platform/webp/courses/Curso-de-Responsive-Design-Maquetación-Mobile-First.webp'
				),
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
		title: 'Yard Sale',
		technologies: [
			technologies.pug,
			technologies.sass,
			technologies.html,
			technologies.css,
		],
		repository:
			'https://github.com/GaleedGutierrez/Curso-Practico-de-Frontend-Developer',
		url: 'https://galeedgutierrez.com/Curso-Practico-de-Frontend-Developer/html/homepage.html',
		screenshot: import(
			'./assets/images/screenshot-projects/11-curso-practico-de-frontend-developer.png'
		),
		date: new Date('2021-10-01T03:00:00.000Z'),
		course: {
			name: 'Curso de Frontend Developer',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/2477-frontend-developer-practico/41501-ya-tomaste-el-curso-de-frontend-developer/',
			logo: {
				avif: import(
					'./assets/icons/courses-platform/avif/courses/curso-de-frontend-developer.avif'
				),
				webp: import(
					'./assets/icons/courses-platform/webp/courses/curso-de-frontend-developer.webp'
				),
			},
		},
		description: 'Maquetación de una tienda online.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/11/yard-sale/',
	},
	{
		id: 10,
		title: 'Steam Burger',
		technologies: [
			technologies.pug,
			technologies.sass,
			technologies.html,
			technologies.css,
		],
		repository:
			'https://github.com/GaleedGutierrez/Curso-de-Disenio-para-Programadores',
		url: 'https://galeedgutierrez.com/Curso-de-Disenio-para-Programadores/html/',
		screenshot: import('./assets/images/screenshot-projects/10-steam.png'),
		date: new Date('2021-09-01T03:00:00.000Z'),
		course: {
			name: 'Curso de Diseño para Developers',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/1906-diseno-programadores/28549-bienvenida/',
			logo: {
				avif: import(
					'./assets/icons/courses-platform/avif/courses/curso-de-diseno-para-programadores.avif'
				),
				webp: import(
					'./assets/icons/courses-platform/webp/courses/curso-de-diseno-para-programadores.webp'
				),
			},
		},
		description: 'Página web para un restaurante.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/10/steam-burger/',
	},
	{
		id: 9,
		title: 'Platzi Video',
		technologies: [
			technologies.pug,
			technologies.sass,
			technologies.html,
			technologies.css,
		],
		repository:
			'https://github.com/GaleedGutierrez/Curso-de-Frontend-Developer-2019',
		url: 'https://galeedgutierrez.com/Curso-de-Frontend-Developer-2019/platzi-video/html/homepage.html',
		screenshot: import(
			'./assets/images/screenshot-projects/9-platzi-video-curso-frontend-developer-2019.png'
		),
		date: new Date('2021-09-01T03:00:00.000Z'),
		course: {
			name: 'Curso de Frontend Developer 2019',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/1640-frontend-developer-2019/21874-presentacion-y-bienvenida-al-curso-de-frontend-dev/',
			logo: {
				avif: import(
					'./assets/icons/courses-platform/avif/courses/curso-de-frontend-developer-2019.avif'
				),
				webp: import(
					'./assets/icons/courses-platform/webp/courses/curso-de-frontend-developer-2019.webp'
				),
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
		title: 'Wikipedia Clone',
		technologies: [technologies.html, technologies.css],
		repository:
			'https://github.com/GaleedGutierrez/Curso-practico-de-HTML-y-CSS/tree/main/WikipediaClone',
		url: 'https://galeedgutierrez.com/Curso-practico-de-HTML-y-CSS/WikipediaClone/',
		screenshot: import(
			'./assets/images/screenshot-projects/8-wikipedia-clone.png'
		),
		date: new Date('2021-09-01T03:00:00.000Z'),
		course: {
			name: 'Curso Práctico de HTML y CSS',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/1758-html-practico/29888-platzicodingchallenge-platzicodingchallenge/',
			logo: {
				avif: import(
					'./assets/icons/courses-platform/avif/courses/curso-practico-de-html-y-css.avif'
				),
				webp: import(
					'./assets/icons/courses-platform/webp/courses/curso-practico-de-html-y-css.webp'
				),
			},
		},
		description: 'Un clone del home de Wikipedia.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/8/wikipedia-clone/',
	},
	{
		id: 7,
		title: 'Google Clone',
		technologies: [technologies.html, technologies.css],
		repository:
			'https://github.com/GaleedGutierrez/Curso-practico-de-HTML-y-CSS/tree/main/my-Google-clone',
		url: 'https://galeedgutierrez.com/Curso-practico-de-HTML-y-CSS/my-Google-clone/',
		screenshot: import(
			'./assets/images/screenshot-projects/7-google-clone.png'
		),
		date: new Date('2021-09-01T03:00:00.000Z'),
		course: {
			name: 'Curso Práctico de HTML y CSS',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/1758-html-practico/29888-platzicodingchallenge-platzicodingchallenge/',
			logo: {
				avif: import(
					'./assets/icons/courses-platform/avif/courses/curso-practico-de-html-y-css.avif'
				),
				webp: import(
					'./assets/icons/courses-platform/webp/courses/curso-practico-de-html-y-css.webp'
				),
			},
		},
		description: 'Un clone de la clásica página de búsqueda de Google.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/7/google-clone/',
	},
	{
		id: 6,
		title: 'Villa Platzi',
		technologies: [technologies.html, technologies.javascript],
		repository: 'https://github.com/GaleedGutierrez/Villa-Platzi',
		url: 'https://galeedgutierrez.com/Villa-Platzi/',
		screenshot: import(
			'./assets/images/screenshot-projects/6-villa-platzi.png'
		),
		date: new Date('2021-01-01T03:00:00.000Z'),
		course: {
			name: 'Curso Gratis de Programación Básica',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/1050-programacion-basica/5103-mi-primera-linea-de-codigo/',
			logo: {
				avif: import(
					'./assets/icons/courses-platform/avif/courses/curso-gratis-de-programacion-basica.avif'
				),
				webp: import(
					'./assets/icons/courses-platform/webp/courses/curso-gratis-de-programacion-basica.webp'
				),
			},
		},
		description: 'Una pequeña granja en donde puedes mover a un cerdo.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/6/villa-platzi/',
	},
	{
		id: 5,
		title: 'Generador de figuras geométricas',
		technologies: [technologies.html, technologies.javascript],
		repository:
			'https://github.com/GaleedGutierrez/Proyecto-generador-de-figuras',
		url: 'https://galeedgutierrez.com/Proyecto-generador-de-figuras/',
		screenshot: import(
			'./assets/images/screenshot-projects/5-proyecto-generador-de-figuras.png'
		),
		date: new Date('2021-01-01T03:00:00.000Z'),
		course: {
			name: 'Curso Gratis de Programación Básica',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/1050-programacion-basica/5103-mi-primera-linea-de-codigo/',
			logo: {
				avif: import(
					'./assets/icons/courses-platform/avif/courses/curso-gratis-de-programacion-basica.avif'
				),
				webp: import(
					'./assets/icons/courses-platform/webp/courses/curso-gratis-de-programacion-basica.webp'
				),
			},
		},
		description: 'Generador de figuras geométricas.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/5/generador-de-figuras-geometricas/',
	},
	{
		id: 4,
		title: 'Mi Blog',
		technologies: [
			technologies.pug,
			technologies.sass,
			technologies.html,
			technologies.css,
		],
		repository:
			'https://github.com/GaleedGutierrez/galeedgutierrez.github.io',
		url: 'https://galeedgutierrez.com/Curso-Practico-de-Maquetacion-en-CSS/html/',
		screenshot: import('./assets/images/screenshot-projects/4-mi-blog.png'),
		date: new Date('2020-07-01T03:00:00.000Z'),
		course: {
			name: 'Curso Práctico de Maquetación en CSS',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/1744-practico-css/24710-lo-que-aprenderas-sobre-maquetacion-en-css/',
			logo: {
				avif: import(
					'./assets/icons/courses-platform/avif/courses/curso-practico-de-maquetacion-en-css.avif'
				),
				webp: import(
					'./assets/icons/courses-platform/webp/courses/curso-practico-de-maquetacion-en-css.webp'
				),
			},
		},
		description: 'Maquetación de un blog personal.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/4/my-blog/',
	},
	{
		id: 3,
		title: 'Platzi-Video',
		technologies: [technologies.html, technologies.css],
		repository: 'https://github.com/GaleedGutierrez/Platzi-Video',
		url: 'https://galeedgutierrez.com/Platzi-Video/',
		screenshot: import(
			'./assets/images/screenshot-projects/3-platzi-video.png'
		),
		date: new Date('2020-05-01T03:00:00.000Z'),
		course: {
			name: 'Curso de CSS Grid Layout 2017',
			platform: 'Platzi',
			url: 'https://platzi.com/r/galeedgutierrez',
			logo: {
				avif: import(
					'./assets/icons/courses-platform/avif/courses/curso-de-css-grid-layout-2017.avif'
				),
				webp: import(
					'./assets/icons/courses-platform/webp/courses/curso-de-css-grid-layout-2017.webp'
				),
			},
		},
		description: 'Maquetación de una web reproductora de videos.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/3/platzi-video/',
	},
	{
		id: 2,
		title: 'Movie.es',
		technologies: [technologies.html, technologies.css],
		repository: 'https://github.com/GaleedGutierrez/Movi.es',
		url: 'https://galeedgutierrez.com/Movi.es/',
		screenshot: import(
			'./assets/images/screenshot-projects/2-movie.es.png'
		),
		date: new Date('2020-05-01T03:00:00.000Z'),
		course: {
			name: 'Curso de CSS Grid Layout 2017',
			platform: 'Platzi',
			url: 'https://platzi.com/r/galeedgutierrez',
			logo: {
				avif: import(
					'./assets/icons/courses-platform/avif/courses/curso-de-css-grid-layout-2017.avif'
				),
				webp: import(
					'./assets/icons/courses-platform/webp/courses/curso-de-css-grid-layout-2017.webp'
				),
			},
		},
		description: 'Maquetación de una página de películas y series.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/2/movie-es/',
	},
	{
		id: 1,
		title: 'Portfolio Leonidas Esteban',
		technologies: [technologies.html, technologies.css],
		repository:
			'https://github.com/GaleedGutierrez/Portafolio-LeonidasEsteban',
		url: 'https://galeedgutierrez.com/Portafolio-LeonidasEsteban/',
		screenshot: import(
			'./assets/images/screenshot-projects/1-portfolio-leonidas-esteban.png'
		),
		date: new Date('2020-02-01T03:00:00.000Z'),
		course: {
			name: 'Curso de Responsive Design',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/1362-responsive-design/13534-bienvenidos-al-curso-de-responsive-design/',
			logo: {
				avif: import(
					'./assets/icons/courses-platform/avif/courses/curso-de-responsive-design-leonidas-esteban.avif'
				),
				webp: import(
					'./assets/icons/courses-platform/webp/courses/curso-de-responsive-design-leonidas-esteban.webp'
				),
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
		title: 'Brand',
		technologies: [technologies.html, technologies.css],
		repository: 'https://github.com/GaleedGutierrez/Brand-Platzi',
		url: 'https://galeedgutierrez.com/Brand-Platzi/',
		screenshot: import('./assets/images/screenshot-projects/0-brand.png'),
		date: new Date('2020-01-01T03:00:00.000Z'),
		course: {
			name: 'Curso de HTML y CSS 2019',
			platform: 'Platzi',
			url: 'https://platzi.com/clases/1492-html-css-2019/16971-introduccion-al-curso-profesional-de-desarrollo-we/',
			logo: {
				avif: import(
					'./assets/icons/courses-platform/avif/courses/curso-de-html-y-css-2019.avif'
				),
				webp: import(
					'./assets/icons/courses-platform/webp/courses/curso-de-html-y-css-2019.webp'
				),
			},
		},
		description:
			'Mi primer proyecto web, es una tienda de gatitos muy simple que usa PayPal para procesar los pagos.',
		author: 'Galeed Gutierrez',
		blogPostUrl:
			'https://galeedgutierrez.com/blog/personal-projects/0/brand/',
	},
];
