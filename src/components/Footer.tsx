
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
                <div className="flex items-center gap-3">
                    <SocialLink href="https://github.com/essebaiyayaa" icon={<Github size={14} />} />
                    <SocialLink href="https://linkedin.com/in/essebaiy-aya" icon={<Linkedin size={14} />} />
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

const SocialLink = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 flex items-center justify-center rounded-full bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300"
    >
        {icon}
    </a>
);

export default Footer;
