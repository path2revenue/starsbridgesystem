"use client";

import { useState, useEffect, useRef } from "react";

const painPoints = [
    {
        icon: "📇",
        title: "Tu distribues des cartes de visite en espérant un miracle",
        description:
            "Tu comptes sur le bouche-à-oreille, les salons et les recommandations. Certains mois tu signes, d'autres non. Ton CA est imprévisible et tu n'as aucun contrôle sur ton flux de clients.",
        stat: "0 système = 0 prédictibilité",
    },
    {
        icon: "💸",
        title: "Tu dépenses en pub sans comprendre ce qui fonctionne",
        description:
            "Tu as peut-être essayé Facebook Ads, un site à 30-40€/mois, ou même une agence qui t'a promis la lune. Résultat : de l'argent investi sans retour concret, et une méfiance envers le marketing digital.",
        stat: "Budget perdu sans stratégie",
    },
    {
        icon: "🏋️",
        title: "Tu te bats seul, sans équipe ni système",
        description:
            "Tu gères tout : la prospection, les appels, le suivi, la livraison. Tu es expert dans ton domaine, mais tu n'as ni le temps ni l'expertise pour construire une machine d'acquisition qui tourne sans toi.",
        stat: "Tout repose sur tes épaules",
    },
];

export default function PainPoints() {
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
            { threshold: 0.3 }
        );
        refs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-24 px-6">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-16">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#EF4444] font-semibold">
                        Le Problème
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
                        Tu Te Reconnais Dans{" "}
                        <span className="text-[#EF4444]">Cette Situation</span> ?
                    </h2>
                    <p className="text-[#94A3B8] max-w-[600px] mx-auto">
                        La majorité des entrepreneurs bloquent sur les mêmes obstacles.
                        Et ce n&apos;est pas un manque de compétence. C&apos;est un manque de système.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {painPoints.map((pain, i) => (
                        <div
                            key={i}
                            ref={(el) => (refs.current[i] = el)}
                            className={`relative bg-[#111827] border border-[#1E293B] rounded-2xl p-8 hover:border-[#EF4444]/30 transition-all duration-600 group ${visibleCards.includes(i)
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                                }`}
                            style={{ transitionDelay: `${i * 200}ms` }}
                        >
                            <div className="text-4xl mb-4">{pain.icon}</div>
                            <h3 className="text-lg font-bold text-[#F1F5F9] mb-3 leading-snug">{pain.title}</h3>
                            <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">{pain.description}</p>
                            <div className="inline-block px-3 py-1 bg-[#EF4444]/10 border border-[#EF4444]/20 rounded-full text-xs text-[#EF4444] font-medium">
                                {pain.stat}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
