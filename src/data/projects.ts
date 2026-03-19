
export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    category: "web" | "desktop" | "devops" | "game" | "api";
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
}

export const categories = [
    { id: "all", label: "All" },
    { id: "web", label: "Web" },
    { id: "desktop", label: "Desktop" },
    { id: "game", label: "Games" },
    { id: "devops", label: "DevOps" },
    { id: "api", label: "API" },
];

export const projects: Project[] = [
    {
        id: "helpora",
        title: "Helpora Services Platform",
        description: "Web application connecting service providers and clients for pet sitting, babysitting, and tutoring services.",
        image: "helpora.jpg",
        category: "web",
        technologies: ["Laravel", "Livewire", "Tailwind CSS", "MySQL"],
        githubUrl: "https://github.com/jih7ne/service-platform",
    },
    {
        id: "pharmacy-mgmt",
        title: "Pharmacy Management System",
        description: "Complete management of medicines, stock, clients, and suppliers for pharmacies.",
        image: "pharmacy.jpg",
        category: "desktop",
        technologies: ["C#", "Windows Forms", "SQL Server"],
        githubUrl: "https://github.com/essebaiyayaa/pharmacy-management-system",
    },
    {
        id: "ecommerce",
        title: "Multi-Cooperative E-commerce",
        description: "Complete management of cooperatives, products, orders, and users.",
        image: "ecommerce.jpg",
        category: "web",
        technologies: ["ASP.NET", "Bootstrap", "SQL Server"],
        githubUrl: "https://github.com/amosnyirenda123/EcommerceAppCSharp",
    },
    {
        id: "football-reservation",
        title: "Pitch Reservation",
        description: "Management of reservations, tournaments, and time slots for football pitches.",
        image: "football.jpg",
        category: "web",
        technologies: ["PHP", "MySQL", "HTML", "Javascript"],
        githubUrl: "https://github.com/essebaiyayaa/reservation-terrains",
    },
    {
        id: "club-events",
        title: "Club Events Manager",
        description: "Event management platform for engineering school clubs with participant registration and tracking.",
        image: "club-events.jpg",
        category: "web",
        technologies: ["PHP", "MySQL", "HTML", "Bootstrap"],
        githubUrl: "https://github.com/essebaiyayaa/club-events-manager",
    },
    {
        id: "scolarite",
        title: "Student Services",
        description: "Digital management of academic document requests and complaints.",
        image: "scolarite.jpg",
        category: "web",
        technologies: ["PHP", "MySQL", "HTML", "React", "Tailwind CSS"],
        githubUrl: "https://github.com/tafraouti-sanae01/PLATEFORME_GESTION_SERVICES_ETUDIANTS",
    },
    {
        id: "petitions",
        title: "Petitions Platform",
        description: "PHP & MySQL project allowing users to create, sign, and manage online petitions with highlights.",
        image: "petition.jpg",
        category: "web",
        technologies: ["PHP", "MySQL", "HTML", "Bootstrap"],
        githubUrl: "https://github.com/essebaiyayaa/Platefrome-Petitions",
    },
    {
        id: "cabinet-listing",
        title: "Medical Clinics Directory Portal",
        description: "Web directory connecting patients and medical clinics with professional profiles.",
        image: "cabinet.jpg",
        category: "web",
        technologies: ["Laravel", "Tailwind CSS", "MySQL", "Javascript"],
        githubUrl: "https://github.com/essebaiyayaa/cabinet-listing-platform",
    },
    {
        id: "shooter-game",
        title: "Solo vs Multi Shooter Game",
        description: "2D shooter game with Swing GUI offering single-player and real-time multiplayer experiences via sockets.",
        image: "shooter-game.jpg",
        category: "game",
        technologies: ["Java", "Swing", "Sockets", "Threads", "MySQL"],
        githubUrl: "https://github.com/essebaiyayaa/Solo-Vs-Multi-Shooter-Game",
    },
    {
        id: "afcon-2025",
        title: "AFCON Morocco 2025 Official Portal",
        description: "Official web portal for the 2025 Africa Cup of Nations in Morocco with a modern and responsive interface.",
        image: "afcon.jpg",
        category: "web",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        githubUrl: "https://github.com/iSOx64/projet_web25",
    },
    {
        id: "docker-dev",
        title: "Docker Development Environment",
        description: "Standardized development environment with Docker for full-stack.",
        image: "docker.jpg",
        category: "devops",
        technologies: ["Docker", "Docker Compose", "Apache", "PHP", "MySQL"],
        githubUrl: "https://github.com/essebaiyayaa/Web-Development-Environment-with-Docker",
    },
    {
        id: "db-manager",
        title: "Database Management API",
        description: "Java API for unified access management to different DBMS (MySQL, SQL Server).",
        image: "database-api.jpg",
        category: "api",
        technologies: ["Java", "MySQL", "SQL Server"],
        githubUrl: "https://github.com/essebaiyayaa/DB-API-JAVA",
    },
    {
        id: "student-mgmt",
        title: "Student Management System",
        description: "Student management system with full CRUD functionality for academic management.",
        image: "student-system.jpg",
        category: "desktop",
        technologies: ["C", "Data Structures"],
        githubUrl: "https://github.com/essebaiyayaa/Student-Management-System",
    }
];
