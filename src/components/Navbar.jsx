"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { href: "#services", label: "Services" },
        { href: "#resultats", label: "Résultats" },
        { href: "#temoignages", label: "Témoignages" },
        { href: "#processus", label: "Processus" },
        { href: "#faq", label: "FAQ" },
    ];

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        setMobileOpen(false);
        document.body.style.overflow = "";
        const el = document.querySelector(href);
        if (el) {
            const offset = 80;
            const top = el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    const toggleMobile = () => {
        setMobileOpen(!mobileOpen);
        document.body.style.overflow = mobileOpen ? "" : "hidden";
    };

    return (
        <>
            <nav
                className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-[#0C111D]/90 backdrop-blur-xl border-b border-[#1E293B] py-3"
                    : "bg-[#0C111D] py-4"
                    }`}
            >
                <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
                    <a href="#" className="flex items-center gap-2">
                        <img src="/starsbridgesystem.png" alt="StarsBridgesSystem" className="h-8 w-auto" />
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className="text-sm text-[#94A3B8] hover:text-white transition-colors relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3B82F6] transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                        <a
                            href="#rdv"
                            onClick={(e) => handleLinkClick(e, "#rdv")}
                            className="ml-4 px-5 py-2 bg-[#EAB308] text-[#0C111D] text-sm font-semibold rounded-full hover:bg-[#FACC15] transition-all duration-300 cursor-pointer"
                        >
                            Réserver un Appel
                        </a>
                    </div>

                    {/* Hamburger */}
                    <button
                        className="md:hidden flex flex-col gap-[5px] p-2"
                        onClick={toggleMobile}
                        aria-label="Menu"
                    >
                        <span
                            className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""
                                }`}
                        />
                        <span
                            className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
                                }`}
                        />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-40 bg-[#0C111D]/97 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                {links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className="text-2xl font-medium text-[#94A3B8] hover:text-white transition-colors"
                    >
                        {link.label}
                    </a>
                ))}
                <a
                    href="#rdv"
                    onClick={(e) => handleLinkClick(e, "#rdv")}
                    className="mt-4 px-8 py-3 bg-[#EAB308] text-[#0C111D] font-bold rounded-full text-lg hover:bg-[#FACC15] transition-all cursor-pointer"
                >
                    Réserver un Appel
                </a>
            </div>
        </>
    );
}
