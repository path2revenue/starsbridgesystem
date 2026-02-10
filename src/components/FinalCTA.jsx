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
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg> WhatsApp
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
