
export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    category: "web" | "desktop" | "devops" | "game";
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
}

export const categories = [
    { id: "all", label: "Tous" },
    { id: "web", label: "Web" },
    { id: "desktop", label: "Desktop" },
    { id: "game", label: "Jeux" },
    { id: "devops", label: "DevOps" },
];

export const projects: Project[] = [
    {
        id: "helpora",
        title: "Plateforme de Services Helpora",
        description: "Application web connectant intervenants et clients pour des services de garde d'animaux, babysitting et soutien scolaire.",
        image: "helpora.jpg",
        category: "web",
        technologies: ["Laravel", "Livewire", "Tailwind CSS", "MySQL"],
        githubUrl: "https://github.com/jih7ne/service-platform",
    },
    {
        id: "pharmacy-mgmt",
        title: "Système de Gestion de Pharmacie",
        description: "Gestion complète des médicaments, stocks, clients et fournisseurs pour pharmacies.",
        image: "pharmacy.jpg",
        category: "desktop",
        technologies: ["C#", "Windows Forms", "SQL Server"],
        githubUrl: "https://github.com/essebaiyayaa/pharmacy-management-system",
    },
    {
        id: "ecommerce",
        title: "Application E-commerce",
        description: "Plateforme E-commerce : gestion des produits, commandes et utilisateurs.",
        image: "ecommerce.jpg",
        category: "web",
        technologies: ["ASP.NET", "Bootstrap", "SQL Server"],
        githubUrl: "https://github.com/amosnyirenda123/EcommerceAppCSharp",
    },
    {
        id: "football-reservation",
        title: "Réservation de Terrains",
        description: "Gestion des réservations, tournois et créneaux horaires pour terrains de foot.",
        image: "football.jpg",
        category: "web",
        technologies: ["PHP", "MySQL", "HTML", "Javascript"],
        githubUrl: "https://github.com/essebaiyayaa/reservation-terrains",
    },
    {
        id: "club-events",
        title: "Gestionnaire d'Événements de Club",
        description: "Plateforme de gestion d'événements pour clubs d'écoles d'ingénieurs avec inscription des participants et suivi.",
        image: "club-events.jpg",
        category: "web",
        technologies: ["PHP", "MySQL", "HTML", "Bootstrap"],
        githubUrl: "https://github.com/essebaiyayaa/club-events-manager",
    },
    {
        id: "scolarite",
        title: "Service Scolarité",
        description: "Gestion numérique des demandes de documents académiques et des réclamations.",
        image: "scolarite.jpg",
        category: "web",
        technologies: ["PHP", "MySQL", "HTML", "React", "Tailwind CSS"],
        githubUrl: "https://github.com/tafraouti-sanae01/PLATEFORME_GESTION_SERVICES_ETUDIANTS",
    },
    {
        id: "petitions",
        title: "Plateforme de Pétitions",
        description: "Projet PHP & MySQL permettant aux utilisateurs de créer, signer et gérer des pétitions en ligne avec mise en avant.",
        image: "petition.jpg",
        category: "web",
        technologies: ["PHP", "MySQL", "HTML", "Bootstrap"],
        githubUrl: "https://github.com/essebaiyayaa/Platefrome-Petitions",
    },
    {
        id: "cabinet-listing",
        title: "Portail d'Annuaire de Cabinets Médicaux",
        description: "Annuaire web connectant patients et cabinets médicaux avec profils professionnels.",
        image: "cabinet.jpg",
        category: "web",
        technologies: ["Laravel", "Tailwind CSS", "MySQL", "Javascript"],
        githubUrl: "https://github.com/essebaiyayaa/cabinet-listing-platform",
    },
    {
        id: "shooter-game",
        title: "Jeu de Tir Solo vs Multi",
        description: "Jeu de tir 2D avec interface graphique Swing offrant des expériences solo et multijoueur en temps réel via sockets.",
        image: "shooter-game.jpg",
        category: "game",
        technologies: ["Java", "Swing", "Sockets", "Threads", "MySQL"],
        githubUrl: "https://github.com/essebaiyayaa/Solo-Vs-Multi-Shooter-Game",
    },
    {
        id: "afcon-2025",
        title: "Portail Officiel de la CAN Maroc 2025",
        description: "Portail web officiel de la Coupe d'Afrique des Nations 2025 au Maroc avec interface moderne et responsive.",
        image: "afcon.jpg",
        category: "web",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        githubUrl: "https://github.com/iSOx64/projet_web25",
    },
    {
        id: "docker-dev",
        title: "Environnement Développement Docker",
        description: "Environnement de développement standardisé avec Docker pour le full-stack.",
        image: "docker.jpg",
        category: "devops",
        technologies: ["Docker", "Docker Compose", "Apache", "PHP", "MySQL"],
        githubUrl: "https://github.com/essebaiyayaa/Web-Development-Environment-with-Docker",
    },
    {
        id: "db-manager",
        title: "API de Gestion de Base de Données",
        description: "API Java pour la gestion unifiée d'accès à différents SGBD (MySQL, SQL Server).",
        image: "database-api.jpg",
        category: "web",
        technologies: ["Java", "MySQL", "SQL Server"],
        githubUrl: "https://github.com/essebaiyayaa/DB-API-JAVA",
    },
    {
        id: "student-mgmt",
        title: "Système de Gestion des Étudiants",
        description: "Système de gestion des étudiants avec fonctionnalités CRUD complètes pour la gestion académique.",
        image: "student-system.jpg",
        category: "desktop",
        technologies: ["C", "Data Structures"],
        githubUrl: "https://github.com/essebaiyayaa/Student-Management-System",
    }
];
