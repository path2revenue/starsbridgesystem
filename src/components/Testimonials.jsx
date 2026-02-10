"use client";

import { useState, useRef, useEffect } from "react";

const testimonials = [
    {
        stars: 5,
        quote:
            "Ahmed Biaggini est un profil rare, à la croisée de la stratégie et du commercial de haut niveau, capable de closer des offres haut de gamme avec facilité. Des offres à 5 chiffres dans des structures de haut niveau. Je recommande son travail et son sérieux. Il démontre une performance constante, mesurable et durable.",
        name: "Mohamed Ali",
        role: "Sales Influence",
        color: "linear-gradient(135deg,#3B82F6,#60A5FA)",
    },
    {
        stars: 5,
        quote:
            "Ahmed et moi avons collaboré pour un client en commun et nous avons eu des résultats incroyables. Ahmed a toujours fait preuve de professionnalisme, de rapidité et d'efficacité, ce qui nous a valu de dépasser les 100K de chiffre d'affaires pour notre client commun en quelques mois.",
        name: "Bryan Wallace",
        role: "Fondateur, Agence Take Care",
        color: "linear-gradient(135deg,#EAB308,#F59E0B)",
    },
    {
        stars: 5,
        quote:
            "Grâce aux compétences d'Ahmed et son savoir-faire, j'ai observé une augmentation de 50 clients potentiels pour mon activité culturelle et musicale en l'espace d'un mois. Ses stratégies de vente novatrices m'ont permis d'accéder à une clientèle diversifiée et d'optimiser la conversion.",
        name: "Hanaria Messeleka",
        role: "Coordinatrice commerciale & marketing",
        color: "linear-gradient(135deg,#10B981,#059669)",
    },
    {
        stars: 5,
        quote:
            "Je suis ravi de recommander Ahmed, un professionnel de la vente exceptionnel. Il se distingue non seulement par sa maîtrise des techniques de vente mais aussi par son engagement sincère à comprendre les besoins des clients. Son impact sur notre croissance commerciale a été indéniable.",
        name: "Khalid Khamdani",
        role: "Fondateur, Easyloc Immobilier Formation",
        color: "linear-gradient(135deg,#8B5CF6,#6366F1)",
    },
    {
        stars: 5,
        quote:
            "Un élément exceptionnel par son dynamisme, l'énergie qu'il dégage, sa volonté d'apprendre sans cesse et l'envie de tester de nouvelles idées. Il fait toujours le maximum pour atteindre ses objectifs, et il le fait avec brio. Ravi de l'avoir à nos côtés !",
        name: "François Pujabe",
        role: "Cofondateur, ComptaStar",
        color: "linear-gradient(135deg,#EC4899,#8B5CF6)",
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const touchStartX = useRef(0);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goTo = (i) => {
        setCurrent(i);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 15000);
    };

    const next = () => goTo((current + 1) % testimonials.length);
    const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);

    return (
        <section id="temoignages" className="py-24 px-6">
            <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#3B82F6] font-semibold">
                        Témoignages
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
                        Ce Que Nos{" "}
                        <span className="bg-gradient-to-r from-[#60A5FA] to-[#EAB308] bg-clip-text text-transparent">
                            Partenaires
                        </span>{" "}
                        Disent de Nous
                    </h2>
                </div>

                {/* Carousel wrapper with external arrows */}
                <div className="flex items-center gap-3 md:gap-5">
                    {/* Left arrow - OUTSIDE card */}
                    <button
                        onClick={prev}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1A2035] border border-[#1E293B] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#3B82F6] transition-all shrink-0"
                        aria-label="Précédent"
                    >
                        ‹
                    </button>

                    {/* Card */}
                    <div
                        className="relative bg-[#111827] border border-[#1E293B] rounded-2xl p-8 md:p-12 min-h-[280px] flex-1 transition-all duration-500"
                        onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
                        onTouchEnd={(e) => {
                            const delta = touchStartX.current - e.changedTouches[0].clientX;
                            if (Math.abs(delta) > 50) delta > 0 ? next() : prev();
                        }}
                    >
                        {/* Stars */}
                        <div className="flex gap-1 mb-6">
                            {Array.from({ length: testimonials[current].stars }, (_, i) => (
                                <span key={i} className="text-[#EAB308] text-lg">★</span>
                            ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-lg md:text-xl text-[#E2E8F0] leading-relaxed mb-8 min-h-[100px]">
                            &ldquo;{testimonials[current].quote}&rdquo;
                        </blockquote>

                        {/* Author */}
                        <div className="flex items-center gap-4">
                            <div
                                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                                style={{ background: testimonials[current].color }}
                            >
                                {testimonials[current].name
                                    .split(" ")
                                    .map((w) => w[0])
                                    .join("")}
                            </div>
                            <div>
                                <div className="font-semibold text-[#F1F5F9]">{testimonials[current].name}</div>
                                <div className="text-sm text-[#64748B]">{testimonials[current].role}</div>
                            </div>
                        </div>
                    </div>

                    {/* Right arrow - OUTSIDE card */}
                    <button
                        onClick={next}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1A2035] border border-[#1E293B] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#3B82F6] transition-all shrink-0"
                        aria-label="Suivant"
                    >
                        ›
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-6">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${current === i ? "w-6 bg-[#3B82F6]" : "bg-[#334155]"
                                }`}
                            aria-label={`Témoignage ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
