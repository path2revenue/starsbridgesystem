"use client";

import { useState, useEffect, useRef } from "react";

const steps = [
    {
        number: "01",
        title: "Appel de Diagnostic",
        description: "On analyse ta situation actuelle, ton offre, ton marché et tes objectifs. Si on peut t'aider, on te présente un plan d'action clair.",
        detail: "45 min · Gratuit · Sans engagement",
    },
    {
        number: "02",
        title: "Stratégie Sur-Mesure",
        description: "On conçoit ton système d'acquisition de A à Z : tunnels, publicités, scripts commerciaux, séquences email. Le tout adapté à ton marché.",
        detail: "Plan détaillé livré sous 7 jours",
    },
    {
        number: "03",
        title: "Design, Développement & Création",
        description: "On construit les landing pages, les VSLs, les séquences email, le CRM. Tout est livré prêt à l'emploi, avec ta validation à chaque étape.",
        detail: "Livraison complète en 2-4 semaines",
    },
    {
        number: "04",
        title: "Lancement & Optimisation Continue",
        description: "On lance les campagnes, on suit les métriques, on optimise en continu. Tu reçois un tableau de bord clair pour suivre tes résultats en temps réel.",
        detail: "Suivi hebdomadaire garanti",
    },
];

export default function Process() {
    const [visibleSteps, setVisibleSteps] = useState([]);
    const refs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const idx = refs.current.indexOf(entry.target);
                        if (idx !== -1) setVisibleSteps((prev) => [...new Set([...prev, idx])]);
                    }
                });
            },
            { threshold: 0.3 }
        );
        refs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="processus" className="py-24 px-6 bg-[#0A0E19]">
            <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-16">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#3B82F6] font-semibold">
                        Notre Processus
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
                        Comment Ça{" "}
                        <span className="bg-gradient-to-r from-[#60A5FA] to-[#EAB308] bg-clip-text text-transparent">
                            Fonctionne
                        </span>
                    </h2>
                    <p className="text-[#94A3B8] max-w-[500px] mx-auto">
                        Un processus simple, transparent, et orienté résultats.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#3B82F6]/50 via-[#3B82F6]/20 to-transparent" />

                    <div className="space-y-12">
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                ref={(el) => (refs.current[i] = el)}
                                className={`flex gap-6 md:gap-8 transition-all duration-600 ${visibleSteps.includes(i)
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 -translate-x-4"
                                    }`}
                                style={{ transitionDelay: `${i * 200}ms` }}
                            >
                                {/* Number circle */}
                                <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#111827] border-2 border-[#3B82F6]/40 flex items-center justify-center shrink-0">
                                    <span className="text-sm md:text-base font-bold text-[#60A5FA]">{step.number}</span>
                                </div>

                                {/* Content */}
                                <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6 flex-1 hover:border-[#3B82F6]/30 transition-colors">
                                    <h3 className="text-lg font-bold text-[#F1F5F9] mb-2">{step.title}</h3>
                                    <p className="text-sm text-[#94A3B8] leading-relaxed mb-3">{step.description}</p>
                                    <span className="text-xs text-[#EAB308] font-medium">{step.detail}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
