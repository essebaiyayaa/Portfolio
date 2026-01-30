
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, categories } from '../data/projects';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredProjects = selectedCategory === 'all'
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <section id="projects" className="py-16 bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
                        Mes <span className="text-primary">Projets</span>
                    </h2>
                    <p className="text-muted-foreground text-sm">
                        Découvrez certains de mes derniers projets.
                    </p>
                </motion.div>

                {/* Filters */}
                <div className="flex justify-center flex-wrap gap-2 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${selectedCategory === category.id
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-secondary text-muted-foreground hover:text-foreground border border-border'
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Card className="h-full bg-card border-border overflow-hidden group hover:border-primary/20 transition-all duration-300 rounded-lg shadow-sm hover:shadow-md">
                                    <div className="relative h-32 overflow-hidden">
                                        {/* Category Badge */}
                                        <div className="absolute top-2 left-2 z-10">
                                            <Badge className="bg-background/80 backdrop-blur-md text-primary border-primary/20 hover:bg-background px-2 py-0 text-[10px]">
                                                {categories.find(c => c.id === project.category)?.label}
                                            </Badge>
                                        </div>

                                        <img
                                            src={`/images/${project.image}`}
                                            alt={project.title}
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = '/placeholder.svg';
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-80" />
                                    </div>

                                    <CardContent className="p-4">
                                        <h3 className="text-sm font-bold text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-muted-foreground text-[10px] mb-3 line-clamp-2 min-h-[2.5em]">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-1 mb-3">
                                            {project.technologies.map((tech) => (
                                                <span key={tech} className="px-1.5 py-0.5 rounded text-[9px] bg-secondary text-muted-foreground border border-border">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="pt-2 border-t border-border relative z-50">
                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1.5 text-[10px] font-medium text-primary hover:text-foreground active:scale-95 transition-all duration-300 w-fit py-1 cursor-pointer"
                                                >
                                                    <Github className="w-3 h-3" />
                                                    Code Source
                                                    <ExternalLink className="w-3 h-3 ml-0.5" />
                                                </a>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
