
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Projets", href: "#projects" },
        { name: "Compétences", href: "#skills" },
        { name: "Parcours", href: "#experience" },
        { name: "Parascolaire", href: "#extracurricular" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-2" : "bg-transparent py-4"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="/" className="text-lg font-bold text-foreground tracking-tighter">
                    Portfolio<span className="text-primary">.</span>
                </a>
                {/* Desktop Menu - Aligned Right */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary transition-colors text-xs font-semibold uppercase tracking-wider"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-background border-b border-white/10 py-4 md:hidden">
                        <div className="flex flex-col items-center gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-muted-foreground hover:text-primary transition-colors font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
