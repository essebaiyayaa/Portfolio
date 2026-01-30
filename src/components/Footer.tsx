
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-secondary py-6 border-t border-border">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Left: Identity */}
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold text-foreground">
                        Aya <span className="text-primary">Essebaiy</span>
                    </h3>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
                        Élève Ingénieur en Génie Informatique
                    </p>
                </div>

                {/* Center: Social Icons */}
                <div className="flex items-center gap-3 relative z-50">
                    <SocialLink href="https://github.com/essebaiyayaa" icon={<Github size={14} />} />
                    <SocialLink href="https://linkedin.com/in/aya-essebaiy-698a55341" icon={<Linkedin size={14} />} />
                    <SocialLink href="mailto:essebaiyaya@gmail.com" icon={<Mail size={14} />} />
                </div>

                {/* Right: Copyright */}
                <div className="text-[10px] text-muted-foreground">
                    Fait avec passion &bull; Aya Essebaiy
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, icon }: { href: string, icon: React.ReactNode }) => {
    const handleClick = () => {
        window.open(href, '_blank', 'noopener,noreferrer');
    };

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
                e.preventDefault();
                handleClick();
            }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300 cursor-pointer z-50"
        >
            {icon}
        </motion.a>
    );
};

export default Footer;
