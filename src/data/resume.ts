
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
        category: "Programming Languages",
        icon: Code,
        items: ["Java", "C", "C#", "PHP", "JavaScript"]
    },
    {
        category: "Frameworks & Librairies",
        icon: Layers,
        items: ["Laravel", "Livewire", "ASP.NET", "Tailwind CSS", "Bootstrap"]
    },
    {
        category: "Databases",
        icon: Database,
        items: ["MySQL", "SQL Server", "Oracle", "PL/SQL"]
    },
    {
        category: "Web Development",
        icon: Globe,
        items: ["HTML", "CSS"]
    },
    {
        category: "Operating Systems",
        icon: Terminal,
        items: ["Linux", "Windows"]
    },
    {
        category: "Tools & Methodologies",
        icon: Wrench,
        items: ["Git/Github", "Agile (Scrum)", "Jira", "Trello"]
    }
];

export const softSkills: SoftSkill[] = [
    {
        name: "Project Management",
        description: "Effectively organize and manage tasks and teams.",
        icon: Terminal
    },
    {
        name: "Teamwork",
        description: "Collaborate and contribute to common projects efficiently.",
        icon: Users
    },
    {
        name: "Communication",
        description: "Clearly express ideas and solutions at all levels.",
        icon: MessageSquare
    },
    {
        name: "Analytical Thinking",
        description: "Solve problems with logic and creativity.",
        icon: Brain
    },
    {
        name: "Autonomy",
        description: "Take initiative and work independently.",
        icon: Heart
    },
    {
        name: "Curiosity",
        description: "Explore new technologies and learn continuously.",
        icon: Sparkles
    },
];

export const experience: ExperienceSection[] = [
    {
        type: "experience",
        title: "Experience",
        icon: Briefcase,
        items: [
            {
                date: "July 2025 - August 2025",
                title: "Full-Stack Web Development Intern",
                place: "NajahHost - Tétouan",
                description: "Design and development of a web application to connect patients and medical clinics (patient, clinic owner, and admin portals with profile management, reviews, and advanced search).",
                tags: ["Laravel", "Tailwind CSS", "MySQL"],
                companyUrl: "https://www.naja7host.com/",
                videoUrl: "https://www.linkedin.com/posts/aya-essebaiy-698a55341_laravel-laravel12-webdevelopment-activity-7375625298643595264-CXsw?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFXDQpQBjQNnknR4NCVF5odCdyUABFQ_ikM"
            }
        ]
    },
    {
        type: "education",
        title: "Education",
        icon: GraduationCap,
        items: [
            {
                date: "2022 - Present",
                title: "State Engineering Degree in Computer Engineering",
                place: "ENSA Tétouan, Morocco",
                description: "",
                tags: []
            },
            {
                date: "2022",
                title: "High School Diploma in Physical Sciences",
                place: "Ibn Khaldoun High School, Fnideq, Morocco",
                description: "",
                tags: []
            }
        ]
    }
];
