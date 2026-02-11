import { motion } from "framer-motion";

interface Activity {
    id: number;
    title: string;
    organization: string;
    role: string;
    date: string;
    description: string;
    image: string;
}

const activities: Activity[] = [
    {
        id: 1,
        title: "Hackathon 2026",
        organization: "Club InfoTech",
        role: "Membre du comité d'organisation",
        date: "2026",
        description: "Membre de la cellule contact du Hackathon 2026.",
        image: "infotech.jpg"
    },
    {
        id: 101,
        title: "Conférence IT 2025",
        organization: "Club InfoTech",
        role: "Membre du comité d'organisation",
        date: "2025",
        description: "Organisation de la conférence annuelle et gestion des contacts avec les experts et invités.",
        image: "infotech.jpg"
    },
    {
        id: 2,
        title: "Membre Actif",
        organization: "Club InfoTech",
        role: "Membre Actif",
        date: "2025 - Présent",
        description: "Participation active aux workshops et hackathons, contribution aux projets open-source du club Infotech.",
        image: "infotech.jpg"
    },
    {
        id: 3,
        title: "Forum des Entreprises 2025",
        organization: "ENSA Tétouan",
        role: "Membre du comité d'organisation",
        date: "2025 - 2026",
        description: "Organisation du Forum des Entreprises et gestion des contacts avec les entreprises participantes.",
        image: "forum.png"
    },
    {
        id: 4,
        title: "AFI",
        organization: "Association Futurs Ingénieurs",
        role: "Membre Actif",
        date: "2023 - 2024",
        description: "Organisation de l’initiative sociale ‘Nftrou Jmi3’ et participation à des actions humanitaires avec l’Association Futurs Ingénieurs.",
        image: "afi.jpg"
    },
    {
        id: 5,
        title: "4ème édition du projet Farhat Yatim",
        organization: "Club Masjid",
        role: "Membre du comité d'organisation",
        date: "2023 - 2024",
        description: "Organisation du projet social 'Farhat Yatim' et coordination logistique de l'événement.",
        image: "masjid.jpg"
    }
];

export default function Extracurricular() {
    return (
        <section id="extracurricular" className="py-16 bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
                        Activités <span className="text-primary">Parascolaires</span>
                    </h2>
                    <p className="text-muted-foreground text-sm">
                        Mon engagement associatif et mes responsabilités.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={activity.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card border border-border rounded-xl p-4 flex flex-col sm:flex-row gap-4 hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md h-full group"
                        >
                            {/* Logo Section */}
                            <div className="shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-secondary p-1.5 flex items-center justify-center border border-border group-hover:border-primary/20 transition-colors">
                                    <img
                                        src={`/images/${activity.image}`}
                                        alt={activity.organization}
                                        className="w-full h-full object-contain"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            target.parentElement!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary/40"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>';
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col flex-1">
                                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                                    <h3 className="font-bold text-base text-foreground leading-tight">
                                        {activity.title}
                                    </h3>
                                    {activity.title !== activity.organization && (
                                        <span className="px-1.5 py-0.5 rounded-md bg-secondary text-[9px] font-semibold text-primary border border-primary/10 uppercase tracking-wide">
                                            {activity.organization}
                                        </span>
                                    )}
                                </div>
                                <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase mb-2 text-opacity-80">
                                    {activity.role}
                                </span>
                                <p className="text-xs text-muted-foreground leading-relaxed mt-auto">
                                    {activity.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
