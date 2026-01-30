
import { Briefcase, GraduationCap, Code, Database, Globe, Wrench } from "lucide-react";

export const skills = [
    {
        category: "Langages de programmation",
        icon: Code,
        items: ["Java", "C", "C#", "PHP", "JavaScript"]
    },
    {
        category: "Frameworks & Web",
        icon: Globe,
        items: ["Laravel", "Livewire", "ASP.NET", "Tailwind CSS", "Bootstrap"]
    },
    {
        category: "Bases de données",
        icon: Database,
        items: ["MySQL", "SQL Server", "Oracle"]
    },
    {
        category: "Outils & DevOps",
        icon: Wrench,
        items: ["Git/Github", "Docker", "Linux", "Jira", "Trello"]
    }
];

export const experience = [
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
                tags: ["Laravel", "Tailwind CSS", "MySQL"]
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
