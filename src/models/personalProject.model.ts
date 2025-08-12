export interface ImageCoursePlatform {
	avif?: Promise<{ default: string }>;
	webp?: Promise<{ default: string }>;
	svg?: Promise<{ default: string }>;
}

export interface CoursePlatform {
	name: string;
	platform: string;
	url: string;
	logo: ImageCoursePlatform;
}

export interface SizesImages {
	small: Promise<{ default: string }>;
	medium: Promise<{ default: string }>;
	large: Promise<{ default: string }>;
}

export interface ImagesProject {
	avif: SizesImages;
	webp: SizesImages;
}

export interface PersonalProject {
	id: number;
	title: string;
	technologies: string[];
	technologiesIcons: Promise<{ default: string }>[];
	repository: string;
	url: string;
	screenshots: ImagesProject;
	date: Date;
	course: CoursePlatform;
	description: string;
	author: string;
	blogPostUrl: string;
}
