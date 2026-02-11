"use client";

import { useState, useEffect, useRef } from "react";

const WA_LINK = "https://wa.me/33761941267?text=" + encodeURIComponent("Bonjour, je viens du site StarsBridgesSystem et j'aimerais réserver un appel pour discuter de mon projet.");

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
                            <div className="text-3xl text-[#25D366]"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg></div>
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
                            title="Réserver un appel - StarsBridgesSystem"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
