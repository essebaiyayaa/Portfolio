
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
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Journey", href: "#experience" },
        { name: "Extracurricular", href: "#extracurricular" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md border-b border-slate-100 py-3" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="/" className="text-xl font-bold text-slate-900 tracking-tighter">
                    Portfolio<span className="text-[#2563eb]">.</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link, index) => (
                        <div key={link.name} className="flex items-center gap-6">
                            <a
                                href={link.href}
                                className="text-slate-500 hover:text-[#2563eb] transition-colors text-[10px] font-bold uppercase tracking-[0.2em]"
                            >
                                {link.name}
                            </a>
                            {index !== navLinks.length - 1 && (
                                <span className="text-slate-200 text-[10px] font-bold">·</span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-900"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 py-6 md:hidden shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
                        <div className="flex flex-col items-center gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-500 hover:text-[#2563eb] transition-colors text-[10px] font-bold uppercase tracking-[0.2em]"
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
