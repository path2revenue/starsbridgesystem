"use client";

import { useState, useEffect, useRef } from "react";

const WA_LINK = "https://wa.me/33761941267?text=" + encodeURIComponent("Bonjour, je viens du site StarsBridgeSystem et j'aimerais réserver un appel pour discuter de mon projet.");

export default function Calendar() {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setVisible(true),
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    // Load GHL form embed script
    useEffect(() => {
        const scriptId = "ghl-form-embed";
        if (document.getElementById(scriptId)) return;
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.type = "text/javascript";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <section id="rdv" className="py-24 px-6">
            <div
                ref={ref}
                className={`max-w-[1200px] mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Copy */}
                    <div>
                        <span className="text-xs uppercase tracking-[0.2em] text-[#3B82F6] font-semibold">
                            Prêt à Passer à l&apos;Action ?
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                            Réserve Ton Appel de{" "}
                            <span className="bg-gradient-to-r from-[#60A5FA] to-[#EAB308] bg-clip-text text-transparent">
                                Candidature
                            </span>
                        </h2>

                        <p className="text-[#94A3B8] leading-relaxed mb-6">
                            Cet appel de 45 minutes avec <span className="text-[#F1F5F9] font-medium">l'un de nos experts</span> est
                            une première étape pour comprendre ta situation
                            et voir si on peut t&apos;aider concrètement.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                "Analyse rapide de ta situation actuelle",
                                "Identification de tes leviers de croissance",
                                "Recommandations concrètes et actionnables",
                                "On te dit honnêtement si on peut t'aider ou pas",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-[#EAB308]/15 border border-[#EAB308]/40 flex items-center justify-center shrink-0 mt-0.5">
                                        <svg className="w-3 h-3 text-[#EAB308]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-sm text-[#E2E8F0]">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-[#111827] border border-[#1E293B] rounded-xl">
                            <div className="text-3xl">💬</div>
                            <div>
                                <p className="text-sm text-[#94A3B8]">Tu préfères discuter directement ?</p>
                                <a
                                    href={WA_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#EAB308] font-semibold hover:text-[#FACC15] transition-colors"
                                >
                                    Échangeons sur WhatsApp →
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right - GHL Calendar Embed */}
                    <div style={{ backgroundColor: '#111827', border: '1px solid #1E293B', borderRadius: 16, padding: 8, minHeight: 750, overflow: 'visible' }}>
                        <iframe
                            src="https://api.leadconnectorhq.com/widget/booking/JcQPg6HogFwOXOlJKoP6"
                            style={{ width: '100%', height: 700, minHeight: 700, border: 'none', borderRadius: 12 }}
                            scrolling="yes"
                            id="JcQPg6HogFwOXOlJKoP6_1770692314490"
                            title="Réserver un appel - StarsBridgeSystem"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
