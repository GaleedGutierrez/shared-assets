import type {
	LazyImage,
	LazySvg,
	Screenshot,
	Technology,
} from './shared.model.js';

export interface ImageCoursePlatform {
	avif?: LazyImage;
	webp?: LazyImage;
	svg?: LazySvg;
}

export interface CoursePlatform {
	name: string;
	platform: string;
	url: string;
	logo: ImageCoursePlatform;
}

export interface PersonalProject {
	id: number;
	title: string;
	technologies: Technology[];
	repository: string;
	url: string;
	screenshot: Screenshot;
	date: Date;
	course: CoursePlatform;
	description: string;
	author: string;
	blogPostUrl: string;
}
