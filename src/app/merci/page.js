"use client";

import { useEffect, useState } from "react";

const WA_GROUP = "https://chat.whatsapp.com/FR3BPnD863B8CBa519N1bA";

export default function MerciPage() {
    const [showGift, setShowGift] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowGift(true), 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <main
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "80px 24px 40px",
                backgroundColor: "#0C111D",
                color: "#F1F5F9",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Background glow */}
            <div
                style={{
                    position: "absolute",
                    top: "10%",
                    left: "20%",
                    width: 500,
                    height: 500,
                    borderRadius: "50%",
                    background: "rgba(59, 130, 246, 0.06)",
                    filter: "blur(150px)",
                    pointerEvents: "none",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: "20%",
                    right: "15%",
                    width: 400,
                    height: 400,
                    borderRadius: "50%",
                    background: "rgba(234, 179, 8, 0.05)",
                    filter: "blur(120px)",
                    pointerEvents: "none",
                }}
            />

            <div style={{ position: "relative", zIndex: 10, maxWidth: 650, width: "100%", textAlign: "center" }}>
                {/* Success checkmark */}
                <div style={{ marginBottom: 32 }}>
                    <div
                        style={{
                            width: 80,
                            height: 80,
                            margin: "0 auto 24px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(16, 185, 129, 0.15)",
                            border: "2px solid rgba(16, 185, 129, 0.5)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="#10B981" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, marginBottom: 16, lineHeight: 1.1 }}>
                        Ton Appel Est{" "}
                        <span
                            style={{
                                background: "linear-gradient(to right, #10B981, #3B82F6)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Confirmé !
                        </span>
                    </h1>
                    <p style={{ fontSize: 18, color: "#94A3B8", lineHeight: 1.6, maxWidth: 500, margin: "0 auto" }}>
                        On a hâte d&apos;échanger avec toi. Tu vas recevoir un email de confirmation avec tous les détails.
                    </p>
                </div>

                {/* Divider */}
                <div
                    style={{
                        width: 64,
                        height: 1,
                        background: "linear-gradient(to right, transparent, #334155, transparent)",
                        margin: "32px auto",
                    }}
                />

                {/* Gift card */}
                <div
                    style={{
                        opacity: showGift ? 1 : 0,
                        transform: showGift ? "translateY(0)" : "translateY(24px)",
                        transition: "all 0.7s ease-out",
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "#111827",
                            border: "1px solid #1E293B",
                            borderRadius: 16,
                            padding: "40px 32px",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        {/* Gold shimmer */}
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                width: 128,
                                height: 128,
                                background: "rgba(234, 179, 8, 0.05)",
                                filter: "blur(60px)",
                                borderRadius: "50%",
                                pointerEvents: "none",
                            }}
                        />

                        {/* Gift badge */}
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                padding: "4px 12px",
                                borderRadius: 999,
                                backgroundColor: "rgba(234, 179, 8, 0.1)",
                                border: "1px solid rgba(234, 179, 8, 0.3)",
                                fontSize: 12,
                                color: "#EAB308",
                                fontWeight: 600,
                                marginBottom: 20,
                            }}
                        >
                            🎁 Cadeau Exclusif
                        </div>

                        <h2 style={{ fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 700, color: "#F1F5F9", marginBottom: 12 }}>
                            Rejoins le Réseau d&apos;Affaires StarsBridgesSystem
                        </h2>
                        <p style={{ fontSize: 15, color: "#94A3B8", lineHeight: 1.6, marginBottom: 28, maxWidth: 450, margin: "0 auto 28px" }}>
                            Un groupe privé WhatsApp pour entrepreneurs ambitieux. Partage d&apos;opportunités, conseils stratégiques et networking de qualité.
                        </p>

                        {/* Benefits */}
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "center",
                                gap: 16,
                                marginBottom: 28,
                            }}
                        >
                            {[
                                { icon: "🤝", label: "Networking qualifié" },
                                { icon: "💡", label: "Conseils exclusifs" },
                                { icon: "🚀", label: "Opportunités business" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 6,
                                        fontSize: 14,
                                        color: "#E2E8F0",
                                    }}
                                >
                                    <span>{item.icon}</span>
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* WhatsApp CTA */}
                        <a
                            href={WA_GROUP}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 12,
                                padding: "16px 32px",
                                backgroundColor: "#25D366",
                                color: "#ffffff",
                                fontWeight: 700,
                                borderRadius: 12,
                                fontSize: 17,
                                textDecoration: "none",
                                transition: "all 0.3s",
                            }}
                        >
                            <svg width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Rejoindre le Groupe Maintenant
                        </a>

                        <p style={{ fontSize: 12, color: "#64748B", marginTop: 16 }}>
                            100% gratuit. Accès réservé aux entrepreneurs sérieux.
                        </p>
                    </div>
                </div>

                {/* Back link */}
                <a
                    href="/"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        fontSize: 14,
                        color: "#64748B",
                        textDecoration: "none",
                        marginTop: 32,
                        transition: "color 0.3s",
                    }}
                >
                    ← Retour au site
                </a>
            </div>
        </main>
    );
}
