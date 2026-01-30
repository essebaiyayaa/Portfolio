
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-shadow duration-300 shadow-sm hover:shadow-md"
                        >
                            <h3 className="text-primary font-semibold mb-4 text-sm flex items-center gap-2">
                                {skill.category}
                            </h3>
                            <div className="flex flex-wrap gap-1.5">
                                {skill.items.map((item) => (
                                    <Badge
                                        key={item}
                                        variant="secondary"
                                        className="bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground border border-border px-2.5 py-0.5 text-[10px] font-medium"
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
