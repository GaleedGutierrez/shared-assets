import type { ImageCoursePlatform } from './shared.model.js';

export interface Institution {
	name: string;
	/** Faculty or school inside the institution, when there is one. */
	faculty?: string;
	/** City and province, for example `Palpalá, Jujuy`. */
	location: string;
	url?: string;
	logo?: ImageCoursePlatform;
}

/**
 * Level of the studies:
 * - `university`: a university degree, including university technical degrees.
 * - `technical-school`: a secondary technical school.
 */
export type EducationLevel = 'technical-school' | 'university';

/**
 * - `in-progress`: still studying; there is no `endDate`.
 * - `graduated`: finished and got the degree.
 * - `unfinished`: left before finishing.
 */
export type EducationStatus = 'graduated' | 'in-progress' | 'unfinished';

export interface Education {
	/** Unique key, a slug of the institution and degree. */
	id: string;
	level: EducationLevel;
	status: EducationStatus;
	/** Name of the degree, as the institution writes it. */
	title: string;
	institution: Institution;
	/** Month precision: the day is always the 1st, at local midnight. */
	startDate: Date;
	/** Month precision. Missing while `status` is `in-progress`. */
	endDate?: Date;
	description?: string;
	/** Awards and distinctions, one per item. */
	achievements?: string[];
}
