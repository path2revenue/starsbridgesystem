"use client";

export default function SocialProof() {
    const clients = [
        "Immo Éthique Formation",
        "MVDProduction",
        "ComptaStar",
        "Easyloc Immobilier",
        "Sales Influence",
        "Agence Take Care",
    ];

    return (
        <section className="py-10 overflow-hidden border-y border-[#1E293B] bg-[#0C111D]/50">
            <div className="relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0C111D] to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0C111D] to-transparent z-10" />

                {/* Marquee */}
                <div className="flex animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused]">
                    {[...clients, ...clients].map((client, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 mx-10 text-lg font-semibold text-[#334155] hover:text-[#60A5FA] transition-colors duration-300 whitespace-nowrap cursor-default select-none"
                        >
                            {client}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
