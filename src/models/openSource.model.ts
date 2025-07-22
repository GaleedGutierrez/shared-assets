export interface RepositoryInfo {
	owner: string; // "microsoft", "facebook", "vuejs"
	name: string; // "vscode", "react", "vue"
	url: string; // URL del repositorio
	language: string; // Lenguaje principal del proyecto
	stars?: number; // Estrellas del repo (opcional)
	forks?: number; // Forks del repo (opcional)
}

export interface ContributionStats {
	commits: number;
	pullRequests: number;
	issuesOpened: number;
	issuesClosed: number;
	linesAdded: number;
	linesRemoved: number;
	filesChanged: number;
}

export interface ContributionType {
	type:
		| 'feature'
		| 'bug-fix'
		| 'documentation'
		| 'testing'
		| 'refactoring'
		| 'performance'
		| 'accessibility'
		| 'security'
		| 'translation'
		| 'maintenance';
	impact: 'minor' | 'moderate' | 'major' | 'critical';
}

export interface PullRequest {
	number: number;
	title: string;
	url: string;
	status: 'merged' | 'closed' | 'open';
	mergeDate?: Date;
	description: string;
	type: ContributionType;
	reviewers?: string[]; // Usernames de los reviewers
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

export interface OpenSourceProject {
	id: number;
	title: string; // Tu descripción del proyecto: "Added Dark Mode Support to VSCode"
	description: string; // Descripción detallada de tu contribución
	repository: RepositoryInfo;
	myRole: string; // "Contributor", "Maintainer", "Core Team Member"

	// Fechas de participación
	startDate: Date;
	endDate?: Date; // Si ya no contribuyes activamente

	// Tecnologías y herramientas
	technologies: string[];
	technologiesIcons: string[];

	// Contribuciones
	contributions: PullRequest[];
	stats: ContributionStats;

	// Impacto y reconocimiento
	impact: string[]; // "Improved accessibility for 10M+ users"
	recognition?: {
		mentions: string[]; // URLs de mentions, blog posts, etc.
		awards?: string[]; // "Contributor of the Month", etc.
		testimonials?: {
			author: string;
			role: string;
			text: string;
		}[];
	};

	// Aprendizajes
	skills: string[]; // Habilidades adquiridas/mejoradas
	challenges: string[];
	solutions: string[];
	lessons: string[];

	// Metadatos
	isActive: boolean; // Si sigues contribuyendo
	isMaintainer: boolean; // Si eres maintainer
	isHighlighted: boolean; // Para destacar contribuciones importantes
	tags: string[]; // "first-contribution", "major-feature", "community-impact"

	// Medios
	screenshots: ImagesProject; // Screenshots de tu contribución
	demoUrl?: string; // Demo de la feature que agregaste
	blogPostUrl?: string; // Tu blog post sobre la contribución
}
