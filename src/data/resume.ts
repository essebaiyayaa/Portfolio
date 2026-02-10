
import { Briefcase, GraduationCap, Code, Database, Globe, Wrench, Layers, Terminal, Users, Brain, Heart, MessageSquare, Sparkles, LucideIcon } from "lucide-react";

export interface Skill {
    category: string;
    icon: LucideIcon;
    items: string[];
}

export interface SoftSkill {
    name: string;
    description: string;
    icon: LucideIcon;
}

export interface ExperienceItem {
    date: string;
    title: string;
    place: string;
    description: string;
    tags: string[];
    companyUrl?: string;
    videoUrl?: string;
}

export interface ExperienceSection {
    type: string;
    title: string;
    icon: LucideIcon;
    items: ExperienceItem[];
}

export const skills: Skill[] = [
    {
        category: "Langages",
        icon: Code,
        items: ["Java", "C", "C#", "PHP", "JavaScript"]
    },
    {
        category: "Frameworks & Librairies",
        icon: Layers,
        items: ["Laravel", "Livewire", "ASP.NET", "Tailwind CSS", "Bootstrap"]
    },
    {
        category: "Bases de données",
        icon: Database,
        items: ["MySQL", "SQL Server", "Oracle", "PL/SQL"]
    },
    {
        category: "Développement Web",
        icon: Globe,
        items: ["HTML", "CSS"]
    },
    {
        category: "Systèmes d'exploitation",
        icon: Terminal,
        items: ["Linux", "Windows"]
    },
    {
        category: "Outils & Méthodologies",
        icon: Wrench,
        items: ["Git/Github", "Agile (Scrum)", "Jira", "Trello"]
    }
];

export const softSkills: SoftSkill[] = [
    {
        name: "Gestion de projet",
        description: "Organiser et piloter efficacement les tâches et équipes.",
        icon: Terminal
    },
    {
        name: "Travail d’équipe",
        description: "Collaborer et contribuer à des projets communs avec efficacité.",
        icon: Users
    },
    {
        name: "Communication",
        description: "Exprimer clairement idées et solutions à tous les niveaux.",
        icon: MessageSquare
    },
    {
        name: "Pensée analytique",
        description: "Résoudre les problèmes avec logique et créativité.",
        icon: Brain
    },
    {
        name: "Autonomie",
        description: "Prendre des initiatives et travailler de manière indépendante.",
        icon: Heart
    },
    {
        name: "Curiosité",
        description: "Explorer de nouvelles technologies et apprendre continuellement.",
        icon: Sparkles
    },
];

export const experience: ExperienceSection[] = [
    {
        type: "experience",
        title: "Expérience",
        icon: Briefcase,
        items: [
            {
                date: "Juillet 2025 - Août 2025",
                title: "Stagiaire Développement Web Full-Stack",
                place: "NajahHost - Tétouan",
                description: "Conception et développement d’une application web pour connecter patients et cabinets médicaux (espaces patient, propriétaire de cabinet et admin avec gestion des profils, avis et recherche avancée).",
                tags: ["Laravel", "Tailwind CSS", "MySQL"],
                companyUrl: "https://www.naja7host.com/",
                videoUrl: "https://www.linkedin.com/posts/aya-essebaiy-698a55341_laravel-laravel12-webdevelopment-activity-7375625298643595264-CXsw?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFXDQpQBjQNnknR4NCVF5odCdyUABFQ_ikM"
            }
        ]
    },
    {
        type: "education",
        title: "Formation",
        icon: GraduationCap,
        items: [
            {
                date: "2022 - Présent",
                title: "Diplôme d'Ingénieur d'État en Génie Informatique",
                place: "ENSA Tétouan, Maroc",
                description: "",
                tags: []
            },
            {
                date: "2022",
                title: "Baccalauréat Sciences Physiques",
                place: "Lycée Ibn Khaldoun, Fnideq, Maroc",
                description: "",
                tags: []
            }
        ]
    }
];
