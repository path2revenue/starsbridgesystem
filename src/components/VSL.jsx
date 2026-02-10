"use client";

import { useState, useRef, useEffect } from "react";

export default function VSL() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setVisible(true),
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="vsl"
            ref={sectionRef}
            className={`py-20 px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
            <div className="max-w-[900px] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#6366F1] font-semibold">
                        Présentation
                    </span>
                    <h2 className="text-2xl md:text-4xl font-bold mt-3 mb-3">
                        Comprends Notre{" "}
                        <span className="bg-gradient-to-r from-[#818CF8] to-[#10B981] bg-clip-text text-transparent">
                            Approche
                        </span>{" "}
                        en Quelques Minutes
                    </h2>
                    <p className="text-[#A3A3A3] max-w-[550px] mx-auto text-sm md:text-base">
                        Regarde cette vidéo pour comprendre comment on accompagne nos clients et pourquoi nos systèmes fonctionnent.
                    </p>
                </div>

                {/* Video Container */}
                <div className="relative rounded-2xl overflow-hidden border border-[#1E1E1E] bg-[#111111] shadow-[0_0_80px_-20px_rgba(99,102,241,0.15)]">
                    {/* Spinning border beam effect */}
                    <div className="absolute -inset-[1px] rounded-2xl bg-[conic-gradient(from_0deg,transparent_70%,#6366F1_85%,transparent_100%)] animate-[spin_4s_linear_infinite] opacity-40 pointer-events-none" />
                    <div className="absolute inset-[1px] rounded-2xl bg-[#111111] pointer-events-none" />

                    {/* Video area */}
                    <div className="relative aspect-video bg-[#0A0A0A] flex items-center justify-center">
                        {!isPlaying ? (
                            <>
                                {/* Thumbnail overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A]/80" />

                                {/* Play button */}
                                <button
                                    onClick={() => setIsPlaying(true)}
                                    className="relative z-10 group cursor-pointer"
                                    aria-label="Lancer la vidéo"
                                >
                                    <div className="w-24 h-24 rounded-full bg-[#6366F1]/20 backdrop-blur-sm flex items-center justify-center border-2 border-[#6366F1]/50 group-hover:bg-[#6366F1]/30 group-hover:border-[#6366F1] group-hover:scale-110 transition-all duration-300">
                                        <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                    <div className="absolute -inset-4 rounded-full animate-ping bg-[#6366F1]/10 pointer-events-none" />
                                </button>

                                {/* Duration badge */}
                                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-lg text-xs text-white flex items-center gap-1.5">
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Regarder la présentation
                                </div>

                                {/* Label */}
                                <div className="absolute top-4 left-4 px-3 py-1 bg-[#6366F1]/20 border border-[#6366F1]/40 rounded-lg text-xs text-[#818CF8] font-semibold">
                                    🎥 VSL StarsBridgeSystem
                                </div>
                            </>
                        ) : (
                            /* 
                                REPLACE src WITH YOUR ACTUAL VIDEO EMBED URL:
                                - YouTube: https://www.youtube.com/embed/VIDEO_ID?autoplay=1
                                - Vimeo: https://player.vimeo.com/video/VIDEO_ID?autoplay=1
                                - Wistia: https://fast.wistia.net/embed/iframe/VIDEO_ID?autoPlay=true
                            */
                            <iframe
                                src="about:blank"
                                className="absolute inset-0 w-full h-full"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                title="Présentation StarsBridgeSystem"
                            />
                        )}
                    </div>
                </div>

                {/* Trust signal under video */}
                <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-[#737373]">
                    <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                        100% transparence
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                        Résultats vérifiables
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                        Aucun engagement
                    </span>
                </div>
            </div>
        </section>
    );
}
