
import { motion } from "framer-motion";
import { experience } from "../data/resume";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
    return (
        <section id="experience" className="py-16 bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
                        Parcours <span className="text-primary">& Formation</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experience.map((section, idx) => (
                        <div key={section.type}>
                            <motion.div
                                initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-2 mb-6"
                            >
                                <div className="p-2 bg-secondary rounded border border-border">
                                    <section.icon className="w-4 h-4 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground">{section.title}</h3>
                            </motion.div>

                            <div className="space-y-6 pl-3 border-l border-border ml-3">
                                {section.items.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative pl-6"
                                    >
                                        {/* Timeline dot */}
                                        <div className="absolute top-1.5 -left-[17px] w-2 h-2 rounded-full bg-primary ring-2 ring-background" />

                                        <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md">
                                            <span className="text-primary text-xs font-medium mb-1 block">{item.date}</span>
                                            <h4 className="text-sm font-bold text-foreground mb-0.5">{item.title}</h4>
                                            <p className="text-muted-foreground text-xs mb-3">{item.place}</p>

                                            {item.description && (
                                                <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                                                    {item.description}
                                                </p>
                                            )}

                                            {item.tags.length > 0 && (
                                                <div className="flex flex-wrap gap-2">
                                                    {item.tags.map(tag => (
                                                        <Badge key={tag} variant="outline" className="border-border text-muted-foreground text-xs">
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
