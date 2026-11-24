import type { ImageCoursePlatform, LazyImage } from './shared.model.js';

export type CertificatePlatformId =
	| 'alura'
	| 'codely'
	| 'codigo-facilito'
	| 'platzi';

export interface CertificatePlatform<
	Id extends CertificatePlatformId = CertificatePlatformId,
> {
	/** Stable key, matching its entry in `certificatePlatforms`. */
	id: Id;
	/** Display name. */
	name: string;
	url: string;
	logo: ImageCoursePlatform;
}

/**
 * What the certificate is for:
 * - `course`: a single course, workshop or challenge.
 * - `learning-path`: a Platzi route, a set of courses.
 * - `program`: a full training program, such as Alura's ONE.
 */
export type CertificateKind = 'course' | 'learning-path' | 'program';

export interface Certificate {
	/**
	 * Unique key, `<platform>-<key>`. The key is the platform's own ID when it
	 * has one (Platzi), or the slug of the file name.
	 */
	id: string;
	kind: CertificateKind;
	/** Name of the course, route or program, as the platform writes it. */
	title: string;
	platform: CertificatePlatform;
	/** When it was approved. The diploma file name starts with its year. */
	date: Date;
	/** The diploma as an image. */
	diploma: LazyImage;
	/** Badge of the course or route (Platzi only). */
	badge?: LazyImage;
	/** Public page that shows the diploma (Platzi and Alura). */
	url?: string;
	/**
	 * Verification code of the diploma, a UUID: the "Código" printed on Platzi
	 * and Código Facilito diplomas, and the ID in Alura's certificate URL.
	 * Codely's diplomas have none.
	 */
	credentialId?: string;
}
