
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden bg-background pt-28 pb-24 md:pt-16 md:pb-0">
            {/* Subtle Dot Grid Pattern */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"></div>

            <div className="container mx-auto px-6 z-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-12 md:gap-8 items-center relative">
                {/* Text Content - Left Side */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left relative z-20 flex flex-col items-center md:items-start"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-border/50 bg-secondary/30 text-xs md:text-sm font-medium text-muted-foreground mb-6 shadow-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse shadow-[0_0_8px_rgba(37,99,235,0.8)]"></span>
                        available for internship · 2026
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-5xl sm:text-6xl md:text-[4.5rem] lg:text-[5.5rem] font-signature mb-6 text-foreground leading-tight"
                    >
                        Aya <span className="text-blue-600">Essebaiy</span>
                    </motion.h1>

                    <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-400 mb-6 font-light"
                    >
                        Computer Engineering Student – 4th Year, ENSA Tétouan
                    </motion.h3>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-base md:text-lg text-gray-500 mb-8 max-w-xl leading-relaxed"
                    >
                        Curious and motivated, I am seeking a final-year internship to learn, tackle challenges, and contribute to technical projects.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-4 mb-4 w-full"
                    >
                        <div className="flex gap-2.5 relative z-50">
                            <ContactButton href="https://github.com/essebaiyayaa" icon={<Github className="w-5 h-5" />} label="" />
                            <ContactButton href="https://linkedin.com/in/aya-essebaiy-698a55341" icon={<Linkedin className="w-5 h-5" />} label="" />
                            <ContactButton href="mailto:essebaiyaya@gmail.com" icon={<Mail className="w-5 h-5" />} label="" />
                        </div>
                        <a 
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-lg shadow-blue-500/25 transition-all duration-300 active:scale-95 z-50 pointer-events-auto"
                        >
                            View Projects
                        </a>
                    </motion.div>
                </motion.div>

                {/* Profile Image Section - Right Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex justify-center md:justify-center relative z-10"
                >
                    <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px]">
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
                        Projects
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
            className="flex items-center justify-center w-[54px] h-[40px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full hover:bg-blue-50 hover:border-blue-200 dark:hover:bg-blue-900/30 transition-all duration-300 z-50 cursor-pointer pointer-events-auto group shadow-sm"
            aria-label={label}
        >
            <span className="flex items-center justify-center pointer-events-none text-blue-600 dark:text-blue-500 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </span>
        </a>
    );
}
