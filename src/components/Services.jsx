"use client";

import { useState, useEffect, useRef } from "react";

const services = [
    // Row 1: 1 + 1 + 1 = 3
    {
        icon: "🌱",
        title: "Acquisition Sans Publicité",
        description: "Stratégies organiques (LinkedIn, contenu, partenariats, referrals) qui génèrent des clients sans dépenser un centime en pub.",
        badge: "0€ de pub requis",
        span: "",
    },
    {
        icon: "🎯",
        title: "Publicité Ciblée & Éthique",
        description: "Campagnes Facebook, Instagram et Google Ads pensées pour convertir sans manipuler. On cible les bonnes personnes avec le bon message.",
        span: "",
    },
    {
        icon: "🖥️",
        title: "Landing Pages Premium",
        description: "Des pages de vente à fort taux de conversion, designées pour inspirer confiance et pousser à l'action.",
        span: "",
    },
    // Row 2: 2 + 1 = 3
    {
        icon: "🎬",
        title: "VSL & Contenu Vidéo",
        description: "Scripts, production et montage de vidéos de vente qui éduquent ton audience et élèvent leur niveau de conscience avant l'appel.",
        span: "md:col-span-2",
    },
    {
        icon: "⚙️",
        title: "Automatisation CRM",
        description: "On met en place ton CRM, tes pipelines et tes automatisations pour que chaque lead soit suivi sans effort.",
        span: "",
    },
    // Row 3: 1 + 2 = 3
    {
        icon: "📧",
        title: "Séquences Email & Nurturing",
        description: "Séquences automatisées qui convertissent les prospects froids en clients convaincus, naturellement.",
        span: "",
    },
    {
        icon: "📞",
        title: "Stratégie Commerciale & Closing",
        description: "Closing, scripts d'appel, structuration de l'offre. On t'accompagne de la prospection à la signature.",
        badge: "100K+ CA généré",
        span: "md:col-span-2",
    },
];

export default function Services() {
    const [visibleCards, setVisibleCards] = useState([]);
    const refs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const idx = refs.current.indexOf(entry.target);
                        if (idx !== -1) setVisibleCards((prev) => [...new Set([...prev, idx])]);
                    }
                });
            },
            { threshold: 0.2 }
        );
        refs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="services" className="py-24 px-6 bg-[#0A0E19]">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-16">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#3B82F6] font-semibold">
                        Nos Services
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
                        Un Système{" "}
                        <span className="bg-gradient-to-r from-[#60A5FA] to-[#EAB308] bg-clip-text text-transparent">
                            Complet
                        </span>{" "}
                        à Ton Service
                    </h2>
                    <p className="text-[#94A3B8] max-w-[600px] mx-auto">
                        Marketing, commercial, automatisation. On prend en charge chaque maillon de la chaîne pour que tu te concentres sur ton expertise.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            ref={(el) => (refs.current[i] = el)}
                            className={`relative bg-[#111827] border border-[#1E293B] rounded-2xl p-8 hover:border-[#3B82F6]/40 transition-all duration-500 group ${service.span
                                } ${visibleCards.includes(i)
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                                }`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                            <h3 className="text-lg font-bold text-[#F1F5F9] mb-2">{service.title}</h3>
                            <p className="text-sm text-[#94A3B8] leading-relaxed">{service.description}</p>
                            {service.badge && (
                                <div className="mt-4 inline-block px-3 py-1 bg-[#EAB308]/10 border border-[#EAB308]/30 rounded-full text-xs text-[#EAB308] font-semibold">
                                    {service.badge}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
