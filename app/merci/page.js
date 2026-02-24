import { getConfig } from "@/lib/config";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckCircle, Gift, ExternalLink } from "lucide-react";

export default async function MerciPage() {
    const { config } = await getConfig();
    const { merci } = config;

    if (!merci) return null;

    return (
        <>
            <Navbar config={config} />
            <main className="min-h-screen flex flex-col items-center px-4 py-20"
                style={{ background: "var(--color-bg-primary)" }}>

                {/* Hero Confirmation */}
                <div className="text-center max-w-2xl mx-auto mb-12 animate-[fadeInUp_0.7s_ease-out]">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8"
                        style={{ background: "rgba(34,197,94,0.12)", color: "#22c55e" }}>
                        <CheckCircle className="w-10 h-10" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
                        style={{ color: "var(--color-text-primary)" }}>
                        {merci.headline || "Merci !"}
                        <span className="block mt-2" style={{ color: "var(--color-cta)" }}>
                            {merci.highlightedText || "C'est validé."}
                        </span>
                    </h1>
                    <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                        {merci.subtitle || "Nous avons bien reçu votre demande. Une confirmation vous a été envoyée par email."}
                    </p>
                </div>

                {/* Video – Prochaines étapes */}
                <div className="w-full max-w-2xl mx-auto mb-12 animate-[fadeInUp_0.9s_ease-out]">
                    <div className="rounded-2xl overflow-hidden shadow-xl border"
                        style={{
                            background: "var(--color-bg-surface)",
                            borderColor: "var(--color-border-default)"
                        }}>
                        <div className="px-6 pt-6 pb-3">
                            <p className="text-sm font-semibold uppercase tracking-wider mb-1"
                                style={{ color: "var(--color-cta)" }}>
                                Prochaines étapes
                            </p>
                            <h2 className="text-xl font-bold"
                                style={{ color: "var(--color-text-primary)" }}>
                                Regarde cette vidéo avant ton appel
                            </h2>
                        </div>
                        <div className="px-4 pb-4">
                            <video
                                className="w-full rounded-xl"
                                controls
                                preload="metadata"
                                playsInline
                                style={{ aspectRatio: "16/9", background: "#000" }}
                            >
                                <source src="/merci.mp4" type="video/mp4" />
                                Ton navigateur ne supporte pas la lecture vidéo.
                            </video>
                        </div>
                    </div>
                </div>

                {/* Gift / Bonus Card */}
                {merci.gift && (
                    <div className="w-full max-w-md rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border animate-[fadeInUp_1.1s_ease-out]"
                        style={{
                            background: "var(--color-bg-surface)",
                            borderColor: "var(--color-border-default)"
                        }}>
                        <div className="p-1" style={{ background: "var(--color-cta)" }}></div>
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3"
                                        style={{ background: "var(--color-bg-primary)", color: "var(--color-cta)" }}>
                                        {merci.gift.badge || "Bonus"}
                                    </span>
                                    <h2 className="text-xl font-bold" style={{ color: "var(--color-text-primary)" }}>
                                        {merci.gift.title || "Cadeau de bienvenue"}
                                    </h2>
                                </div>
                                <Gift className="w-6 h-6" style={{ color: "var(--color-cta)" }} />
                            </div>

                            <p className="text-sm mb-8" style={{ color: "var(--color-text-secondary)" }}>
                                {merci.gift.description}
                            </p>

                            <a
                                href={merci.gift.cta?.url || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-2 px-6 py-4 font-bold rounded-xl transition-all duration-300 group"
                                style={{
                                    background: "var(--color-cta)",
                                    color: "var(--color-bg-primary)"
                                }}
                            >
                                {merci.gift.cta?.text || "Accéder maintenant"}
                                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>

                            {merci.gift.footnote && (
                                <p className="text-center text-xs mt-4" style={{ color: "var(--color-text-muted)" }}>
                                    {merci.gift.footnote}
                                </p>
                            )}
                        </div>
                    </div>
                )}

                {/* Back Link */}
                <div className="mt-12">
                    <a
                        href="/"
                        className="text-sm font-medium transition-colors pb-0.5"
                        style={{ color: "var(--color-text-secondary)" }}
                    >
                        ← Retour à l'accueil
                    </a>
                </div>

            </main>
            <Footer config={config} />
        </>
    );
}
