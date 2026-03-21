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
        id: 0,
        title: "Hackathon Water4Future 2026",
        organization: "Water4Future Montpellier",
        role: "Semi-finalist & Water Talent Prize",
        date: "2026",
        description: "Participation in the Hackathon Water4Future 2026 in Montpellier. Reached the semi-finals and won the Water Talent Prize.",
        image: "water4future.png"
    },
    {
        id: 1,
        title: "Hackathon 2026",
        organization: "Club InfoTech",
        role: "Organizing Committee Member",
        date: "2026",
        description: "Member of the contact team for Hackathon 2026.",
        image: "infotech.jpg"
    },
    {
        id: 101,
        title: "IT Conference 2025",
        organization: "Club InfoTech",
        role: "Organizing Committee Member",
        date: "2025",
        description: "Organization of the annual conference and management of contacts with experts and guests.",
        image: "infotech.jpg"
    },
    {
        id: 2,
        title: "Active Member",
        organization: "Club InfoTech",
        role: "Active Member",
        date: "2025 - Present",
        description: "Active participation in workshops and hackathons, contribution to the Infotech club's open-source projects.",
        image: "infotech.jpg"
    },
    {
        id: 3,
        title: "Career Fair 2025",
        organization: "ENSA Tétouan",
        role: "Organizing Committee Member",
        date: "2025 - 2026",
        description: "Organization of the Career Fair and management of contacts with participating companies.",
        image: "forum.png"
    },
    {
        id: 4,
        title: "AFI",
        organization: "Association Futurs Ingénieurs",
        role: "Active Member",
        date: "2023 - 2024",
        description: "Organization of the social initiative 'Nftrou Jmi3' and participation in humanitarian actions with the Futurs Ingénieurs Association.",
        image: "afi.jpg"
    },
    {
        id: 5,
        title: "4th Edition of the Farhat Yatim Project",
        organization: "Club Masjid",
        role: "Organizing Committee Member",
        date: "2023 - 2024",
        description: "Organization of the social project 'Farhat Yatim' and logistical coordination of the event.",
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
                        Extracurricular <span className="text-primary">Activities</span>
                    </h2>
                    <p className="text-muted-foreground text-sm">
                        My community involvement and responsibilities.
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
                            className={`bg-card border border-border rounded-xl p-4 flex flex-col sm:flex-row gap-4 hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md h-full group ${
                                activities.length % 2 !== 0 && index === activities.length - 1
                                    ? "md:col-span-2 md:w-[calc(50%-12px)] mx-auto w-full"
                                    : ""
                            }`}
                        >
                            {/* Logo Section */}
                            <div className="shrink-0">
                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white flex items-center justify-center border border-border/60 shadow-sm group-hover:shadow group-hover:border-primary/30 transition-all p-1.5 overflow-hidden">
                                    <img
                                        src={`/images/${activity.image}`}
                                        alt={activity.organization}
                                        className="w-full h-full object-contain scale-105"
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
