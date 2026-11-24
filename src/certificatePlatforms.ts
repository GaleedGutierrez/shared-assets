import type {
	CertificatePlatform,
	CertificatePlatformId,
} from './models/certificate.model.js';

/**
 * Single source for the platforms that issued a certificate. Certificates
 * reference these entries, so a name can't drift from its logo.
 *
 * Typed explicitly so the published declarations don't reference the asset
 * modules.
 */
export const certificatePlatforms: {
	readonly [Id in CertificatePlatformId]: CertificatePlatform<Id>;
} = {
	alura: {
		id: 'alura',
		name: 'Alura',
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
	codely: {
		id: 'codely',
		name: 'Codely',
		url: 'https://codely.com/',
		logo: {
			avif: import(
				'./assets/icons/courses-platform/avif/platform/codely.avif'
			),
			webp: import(
				'./assets/icons/courses-platform/webp/platform/codely.webp'
			),
		},
	},
	'codigo-facilito': {
		id: 'codigo-facilito',
		name: 'Código Facilito',
		url: 'https://codigofacilito.com/',
		logo: {
			png: import(
				'./assets/icons/courses-platform/png/platform/codigo-facilito.png'
			),
		},
	},
	platzi: {
		id: 'platzi',
		name: 'Platzi',
		url: 'https://platzi.com/',
		logo: {
			svg: import(
				'./assets/icons/courses-platform/svg/platform/platzi.svg?raw'
			),
		},
	},
};
