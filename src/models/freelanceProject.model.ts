export interface ClientInfo {
	// Datos públicos y generalizados
	industry: string; // "E-commerce", "Healthcare", "Education"
	companySize:
		| 'entrepreneur'
		| 'startup'
		| 'enterprise'
		| 'non-profit'
		| 'government'
		| 'other';
	location?: string; // Solo país/región general
	projectType: 'new-build' | 'redesign' | 'maintenance' | 'migration';
}

export interface ProjectScope {
	type:
		| 'web-development'
		| 'mobile-app'
		| 'design'
		| 'consulting'
		| 'maintenance'
		| 'other';
	teamSize: number;
	myRole: string; // "Full-stack Developer", "Frontend Lead", etc.
	complexity: 'simple' | 'medium' | 'complex' | 'enterprise';
}

export interface ProjectBudget {
	range:
		| 'under-1k'
		| '1k-5k'
		| '5k-10k'
		| '10k-25k'
		| '25k+'
		| 'confidential';
	currency: string;
	paymentType: 'fixed-price' | 'hourly' | 'monthly-retainer';
}

export interface ProjectResults {
	metrics: string[]; // "Improved page load time by 60%"
	businessImpact: string[];
	technicalAchievements: string[];
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

export interface FreelanceProject {
	id: number;
	title: string; // Título genérico: "E-commerce Platform for Fashion Retailer"
	description: string; // Descripción sin nombres específicos
	client: ClientInfo; // Info generalizada
	scope: ProjectScope;
	budget: ProjectBudget;
	technologies: string[];
	technologiesIcons: string[];
	screenshots: ImagesProject; // Screenshots anonimizados o mockups
	startDate: Date;
	endDate?: Date; // Opcional para proyectos en curso
	status: 'completed' | 'in-progress' | 'on-hold';

	// Resultados y aprendizajes (sin datos sensibles)
	results?: ProjectResults;
	challenges: string[];
	solutions: string[];
	lessons: string[];

	// Solo para casos públicos
	demoUrl?: string; // Solo si hay versión demo pública
	caseStudyUrl?: string; // Link a case study anonimizado

	// Metadatos
	isHighlighted: boolean; // Para marcar proyectos destacados
	tags: string[]; // "responsive", "real-time", "API-integration"

	isPrivate?: boolean; // Indica si el proyecto es privado
}
