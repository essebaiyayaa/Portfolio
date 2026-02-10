
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background pt-10 md:pt-16 pb-32 md:pb-0">

            <div className="container mx-auto px-6 z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Text Content - Left Side */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left relative z-20"
                >
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-primary font-bold text-2xl md:text-3xl mb-2"
                    >
                        Bonjour! Je suis
                    </motion.h2>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-5xl md:text-7xl font-extrabold mb-4 text-foreground leading-tight"
                    >
                        Aya <span className="text-primary">Essebaiy</span>
                    </motion.h1>

                    <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-400 mb-6 font-light"
                    >
                        Élève Ingénieur en Génie Informatique
                    </motion.h3>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-base md:text-lg text-gray-500 mb-8 max-w-xl leading-relaxed"
                    >
                        Passionnée par l'exploration de nouvelles technologies pour faire progresser ma carrière.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="flex flex-wrap gap-4 mb-4"
                    >
                        <div className="flex gap-2 relative z-50">
                            <ContactButton href="https://github.com/essebaiyayaa" icon={<Github className="w-5 h-5 text-primary" />} label="" />
                            <ContactButton href="https://linkedin.com/in/aya-essebaiy-698a55341" icon={<Linkedin className="w-5 h-5 text-primary" />} label="" />
                            <ContactButton href="mailto:essebaiyaya@gmail.com" icon={<Mail className="w-5 h-5 text-primary" />} label="" />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Profile Image Section - Right Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex justify-center md:justify-center relative z-10"
                >
                    <div className="relative w-72 h-72 md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px]">
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 180, 0],
                            }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-primary/10 rounded-full blur-3xl pointer-events-none"
                        />

                        {/* Animated gradient rings */}
                        <div className="absolute inset-0 rounded-full border-[1.5px] border-primary/20 animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-2 rounded-full border border-dashed border-primary/10 animate-[spin_15s_linear_infinite_reverse]" />

                        {/* Image container with floating effect */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-full h-full p-4"
                        >
                            <div className="w-full h-full rounded-full border-4 border-background p-1 bg-gradient-to-tr from-primary/10 via-background to-primary/5 shadow-2xl relative">
                                <div className="w-full h-full rounded-full overflow-hidden relative z-10">
                                    <img
                                        src="/images/profile.jpg"
                                        alt="Aya Essebaiy"
                                        className="w-full h-full object-cover object-center scale-105"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = "https://ui-avatars.com/api/?name=Aya+Essebaiy&background=0D8ABC&color=fff&size=800";
                                        }}
                                    />
                                    {/* Glass overlay on image */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent mix-blend-overlay" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Functional Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30">
                <a
                    href="#projects"
                    className="flex flex-col items-center gap-1.5 group transition-all duration-300 pointer-events-auto"
                    onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    <span className="text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-[0.2em] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                        Projets
                    </span>
                    <ArrowDown className="w-5 h-5 text-primary animate-bounce transition-colors" />
                </a>
            </div>
        </section>
    );
}

function ContactButton({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-11 h-11 md:w-auto md:h-auto md:px-4 md:py-2 bg-secondary border border-border rounded-full hover:bg-accent active:scale-90 transition-all duration-200 z-50 cursor-pointer pointer-events-auto"
        >
            <span className="flex items-center justify-center pointer-events-none scale-110 md:scale-100">{icon}</span>
            {label && <span className="hidden md:block text-muted-foreground text-xs font-medium pointer-events-none">{label}</span>}
        </a>
    );
}
