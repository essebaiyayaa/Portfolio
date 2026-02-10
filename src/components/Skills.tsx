
import { motion } from "framer-motion";
import { skills } from "../data/resume";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
    return (
        <section id="skills" className="py-16 bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
                        Compétences <span className="text-primary">Techniques</span>
                    </h2>
                    <p className="text-muted-foreground text-sm">Technologies et outils que je maîtrise.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md group"
                        >
                            <div className="flex items-center gap-2.5 mb-3">
                                <div className="p-1.5 bg-secondary rounded-md border border-border group-hover:border-primary/30 transition-colors">
                                    <skill.icon className="w-4 h-4 text-primary" />
                                </div>
                                <h3 className="text-foreground font-bold text-xs uppercase tracking-tight">
                                    {skill.category}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                                {skill.items.map((item) => (
                                    <Badge
                                        key={item}
                                        variant="secondary"
                                        className="bg-secondary/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground border border-border px-2 py-0.5 text-[9px] font-medium transition-all duration-300"
                                    >
                                        {item}
                                    </Badge>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
