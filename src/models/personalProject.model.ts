import type {
	ImageCoursePlatform,
	Screenshot,
	Technology,
} from './shared.model.js';

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
