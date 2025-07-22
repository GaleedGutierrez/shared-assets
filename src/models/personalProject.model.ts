export interface ImageCoursePlatform {
	avif: string;
	webp: string;
}

export interface CoursePlatform {
	name: string;
	platform: string;
	url: string;
	image: ImageCoursePlatform;
}

export interface SizesImages {
	small: string;
	medium: string;
	large: string;
}

export interface ImagesProject {
	avif: SizesImages;
	webp: SizesImages;
}

export interface PersonalProject {
	id: number;
	name: string;
	technologies: string[];
	technologiesIcons: string[];
	repository: string;
	url: string;
	screenshots: ImagesProject;
	date: Date;
	course: CoursePlatform;
	description: string;
	author: string;
	blogPostUrl: string;
}
