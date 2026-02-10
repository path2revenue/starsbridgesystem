"use client";

import { useState, useEffect, useRef } from "react";

const videos = [
    {
        name: "Immo Éthique Formation",
        role: "Formation immobilière",
        videoId: "8FSJQjU9j-I",
        summary: "8.6K encaissés, 90 présents, +30 RDVs qualifiés en un seul webinaire.",
        highlight: "8.6K encaissés",
    },
    {
        name: "MVDProduction",
        role: "Vidéaste professionnel",
        videoId: "SPCEnm_h1ZM",
        summary: "De petits contrats à plus de 15K générés grâce à un système d'acquisition complet.",
        highlight: "+15K générés",
    },
    {
        name: "Hana Events",
        role: "Système commercial & marketing",
        videoId: "S8qzw3fKiZw",
        summary: "188€ investis en publicité, 1200€ de CA. Système marketing et commercial mis en place.",
        highlight: "ROI 538%",
    },
    {
        name: "HighLevel Mentorat",
        role: "Coaching haut de gamme",
        videoId: "-juqTMLVlhs",
        summary: "Accompagnement marketing et commercial pour un programme de mentorat haut de gamme.",
        highlight: "100K+ CA",
    },
];

export default function VideoTestimonials() {
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
        <section className="py-24 px-6 bg-[#0A0E19]">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-16">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#3B82F6] font-semibold">
                        Témoignages Vidéo
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
                        Les Résultats de{" "}
                        <span className="bg-gradient-to-r from-[#60A5FA] to-[#EAB308] bg-clip-text text-transparent">
                            Nos Clients
                        </span>{" "}
                        en Vidéo
                    </h2>
                    <p className="text-[#94A3B8] max-w-[600px] mx-auto">
                        Des témoignages authentiques. Des résultats vérifiables sur la page LinkedIn d&apos;Ahmed.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {videos.map((vid, i) => (
                        <div
                            key={i}
                            ref={(el) => (refs.current[i] = el)}
                            className={`group bg-[#111827] border border-[#1E293B] rounded-2xl overflow-hidden hover:border-[#3B82F6]/40 transition-all duration-500 ${visibleCards.includes(i)
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                                }`}
                            style={{ transitionDelay: `${i * 150}ms` }}
                        >
                            {/* YouTube Embed - inline styles for guaranteed rendering */}
                            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                                <iframe
                                    src={`https://www.youtube.com/embed/${vid.videoId}?rel=0&modestbranding=1`}
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                                    allow="fullscreen; picture-in-picture; accelerometer; encrypted-media; gyroscope"
                                    allowFullScreen
                                    title={vid.name}
                                />
                            </div>

                            {/* Info */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <div>
                                        <h3 className="font-bold text-[#F1F5F9]">{vid.name}</h3>
                                        <p className="text-xs text-[#3B82F6]">{vid.role}</p>
                                    </div>
                                    <span className="px-2 py-0.5 bg-[#EAB308]/15 border border-[#EAB308]/40 rounded text-xs text-[#EAB308] font-semibold">
                                        {vid.highlight}
                                    </span>
                                </div>
                                <p className="text-sm text-[#94A3B8] leading-relaxed">{vid.summary}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
