export interface CoursePlatform {
	name: string;
	platform: string;
	url: string;
	image: string;
}

export interface ImagesProject {
	small: string;
	medium: string;
	large: string;
}

export interface PersonalProject {
	id: number;
	name: string;
	technologies: string[];
	technologiesIcons: string[];
	repository: string;
	url: string;
	images: ImagesProject;
	date: Date;
	course: CoursePlatform;
	description: string;
	author: string;
	urlBlog: string;
}
