
import { motion } from "framer-motion";
import { softSkills } from "../data/resume";

export default function SoftSkills() {
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
                        Compétences <span className="text-primary">comportementales</span>
                    </h2>
                    <p className="text-muted-foreground text-sm">Mes qualités humaines et relationnelles.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                    {softSkills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-card border border-border rounded-xl p-5 flex items-start gap-4 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md group"
                        >
                            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors mt-1">
                                <skill.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="font-bold text-foreground text-[13px] uppercase tracking-wider mb-1">
                                    {skill.name}
                                </span>
                                <p className="text-muted-foreground text-xs leading-relaxed">
                                    {skill.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
