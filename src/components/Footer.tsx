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
                        Computer Engineering Student
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
                    Made with passion &bull; Aya Essebaiy
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, icon }: { href: string, icon: React.ReactNode }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 md:w-8 md:h-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full hover:bg-blue-50 hover:border-blue-200 dark:hover:bg-blue-900/30 transition-all duration-300 z-50 cursor-pointer pointer-events-auto group shadow-sm"
        >
            <span className="flex items-center justify-center pointer-events-none text-blue-600 dark:text-blue-500 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </span>
        </a>
    );
};

export default Footer;
