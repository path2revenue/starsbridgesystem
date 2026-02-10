"use client";

import { useState, useEffect, useRef } from "react";

function AnimatedCounter({ target, suffix = "", duration = 2000 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const start = performance.now();
                    const animate = (now) => {
                        const progress = Math.min((now - start) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * target));
                        if (progress < 1) requestAnimationFrame(animate);
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target, duration]);

    return (
        <span ref={ref}>
            {count.toLocaleString("fr-FR")}
            {suffix}
        </span>
    );
}

const WA_LINK = "https://wa.me/33761941267?text=" + encodeURIComponent("Bonjour, je viens du site StarsBridgeSystem et j'aimerais en savoir plus sur vos services d'acquisition client.");

export default function Hero() {

    return (
        <section className="relative flex flex-col items-center justify-center overflow-hidden pt-24 pb-10">
            {/* Animated Mesh Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-[meshMove_20s_ease-in-out_infinite]">
                    <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-[#3B82F6]/6 blur-[150px]" />
                    <div className="absolute top-[50%] right-[15%] w-[400px] h-[400px] rounded-full bg-[#2563EB]/5 blur-[120px]" />
                    <div className="absolute bottom-[20%] left-[40%] w-[350px] h-[350px] rounded-full bg-[#EAB308]/4 blur-[100px]" />
                </div>
            </div>

            <div className="relative z-10 max-w-[1100px] mx-auto px-6 w-full">
                {/* ===== TOP: Promise ===== */}
                <div className="text-center mb-6">
                    {/* Eyebrow */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1E293B] bg-[#111827]/80 text-xs text-[#94A3B8] mb-4 animate-[fadeInUp_0.6s_ease-out]">
                        <span className="w-2 h-2 rounded-full bg-[#EAB308] animate-pulse" />
                        +100K€ de CA généré pour nos clients
                    </div>

                    {/* Headline */}
                    <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight mb-3 animate-[fadeInUp_0.8s_ease-out]">
                        On Prend en Charge Ton{" "}
                        <span className="bg-gradient-to-r from-[#60A5FA] via-[#3B82F6] to-[#EAB308] bg-clip-text text-transparent animate-[gradientShift_6s_ease_infinite] bg-[length:200%_auto]">
                            Marketing & Commercial
                        </span>{" "}
                        <span className="text-[#F1F5F9]">Pour Que Tu Signes Plus.</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-base md:text-lg text-[#94A3B8] max-w-[550px] mx-auto leading-relaxed animate-[fadeInUp_1s_ease-out]">
                        Un <span className="text-[#F1F5F9] font-semibold">système complet</span> qui génère des clients <span className="text-[#F1F5F9] font-semibold">de façon prévisible</span>.
                    </p>
                </div>

                {/* ===== CENTER: VSL VIDEO ===== */}
                <div className="relative rounded-2xl overflow-hidden mb-10 animate-[fadeInUp_1.1s_ease-out]">
                    {/* Spinning glow ring */}
                    <div className="absolute -inset-[2px] rounded-2xl bg-[conic-gradient(from_0deg,transparent_60%,#3B82F6_78%,#EAB308_92%,transparent_100%)] animate-[spin_5s_linear_infinite] opacity-50 pointer-events-none" />
                    <div className="absolute inset-[2px] rounded-2xl bg-[#0C111D] pointer-events-none" />

                    <div className="relative rounded-2xl border border-[#1E293B] overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                            src="https://www.youtube.com/embed/tGQbEge5hCc?rel=0&modestbranding=1"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                            allow="fullscreen; picture-in-picture; accelerometer; encrypted-media; gyroscope"
                            allowFullScreen
                            title="Présentation StarsBridgeSystem"
                        />
                    </div>
                </div>

                {/* ===== CTAs ===== */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-[fadeInUp_1.3s_ease-out]">
                    <a
                        href="#rdv"
                        className="group px-8 py-4 bg-[#EAB308] text-[#0C111D] font-bold rounded-xl text-lg hover:bg-[#FACC15] hover:-translate-y-1 transition-all duration-300 shadow-[0_0_0_0_rgba(234,179,8,0.3)] hover:shadow-[0_8px_30px_rgba(234,179,8,0.35)] animate-[pulseGlow_3s_ease-in-out_infinite]"
                    >
                        Réserver Mon Appel avec un Expert
                        <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                    <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 border border-[#334155] text-[#94A3B8] rounded-xl text-lg hover:border-[#60A5FA] hover:text-white transition-all duration-300"
                    >
                        💬 Échanger sur WhatsApp
                    </a>
                </div>

                {/* ===== STATS ===== */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[800px] mx-auto animate-[fadeInUp_1.5s_ease-out]">
                    {[
                        { value: 100, suffix: "K+", label: "CA généré pour nos clients" },
                        { value: 50, suffix: "+", label: "Entreprises accompagnées" },
                        { value: 30, suffix: "+", label: "RDVs en 1 webinaire" },
                        { value: 538, suffix: "%", label: "ROI moyen constaté" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#EAB308] bg-clip-text text-transparent">
                                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-xs text-[#64748B] mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Trust bar */}
                <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-[#64748B]">
                    <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                        Résultats vérifiables sur LinkedIn
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                        Appel 100% gratuit
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                        Zéro engagement
                    </span>
                </div>
            </div>
        </section>
    );
}
