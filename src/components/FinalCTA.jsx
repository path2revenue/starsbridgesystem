"use client";

const WA_LINK = "https://wa.me/33761941267?text=" + encodeURIComponent("Bonjour, je viens du site StarsBridgeSystem. J'aimerais passer à l'action et discuter de mon projet.");

export default function FinalCTA() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#3B82F6]/6 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#EAB308]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-[800px] mx-auto text-center">
                <span className="text-xs uppercase tracking-[0.2em] text-[#3B82F6] font-semibold">
                    Tu veux des résultats ?
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
                    On Est à{" "}
                    <span className="bg-gradient-to-r from-[#60A5FA] to-[#EAB308] bg-clip-text text-transparent">
                        Une Décision
                    </span>
                    <br />
                    de Tout Faire Changer
                </h2>

                <p className="text-lg text-[#94A3B8] mb-10 max-w-[600px] mx-auto leading-relaxed">
                    Chaque jour qui passe sans système, ce sont des clients que tu ne rencontres pas.
                    On prend en charge ton marketing et ton commercial. Tu te concentres sur ton expertise.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <a
                        href="#rdv"
                        className="inline-flex items-center gap-2 px-10 py-5 bg-[#EAB308] text-[#0C111D] font-bold rounded-xl text-lg hover:bg-[#FACC15] hover:-translate-y-1 transition-all duration-300 shadow-[0_0_0_0_rgba(234,179,8,0.3)] hover:shadow-[0_8px_30px_rgba(234,179,8,0.35)] animate-[pulseGlow_3s_ease-in-out_infinite]"
                    >
                        Réserver Mon Appel avec un Expert
                        <span>→</span>
                    </a>
                    <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-5 border border-[#334155] text-[#94A3B8] rounded-xl text-lg hover:border-[#60A5FA] hover:text-white transition-all duration-300"
                    >
                        💬 WhatsApp
                    </a>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#64748B]">
                    <span>✅ Appel 100% gratuit</span>
                    <span>✅ Zéro engagement</span>
                    <span>✅ Réponse sous 24h</span>
                </div>
            </div>
        </section>
    );
}
