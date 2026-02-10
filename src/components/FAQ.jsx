"use client";

import { useState, useEffect, useRef } from "react";

const faqs = [
    {
        q: "Combien coûte un accompagnement StarsBridgeSystem ?",
        a: "Nos tarifs varient selon la complexité du projet et les services nécessaires. On commence toujours par un appel gratuit de diagnostic pour comprendre ta situation. Ensuite, on te propose un devis transparent, sans frais cachés. On travaille en mode partenariat : notre intérêt, c'est que tu réussisses.",
    },
    {
        q: "En combien de temps je vais voir des résultats ?",
        a: "Ça dépend de ton marché, de ton offre, et de ta situation actuelle. En général, les premiers leads arrivent entre 7 et 21 jours après le lancement des campagnes. Nos meilleurs résultats (comme Immo Éthique avec 8.6K ou l'agence événementielle à 538% de ROI) sont arrivés dans les premières semaines.",
    },
    {
        q: "Est-ce que vous travaillez avec tout le monde ?",
        a: "Non. On sélectionne nos clients avec exigence. On ne prend que des projets où on est convaincus de pouvoir apporter des résultats concrets. Si lors de l'appel de diagnostic on estime ne pas être la bonne solution pour toi, on te le dira honnêtement.",
    },
    {
        q: "Je ne suis pas à l'aise avec la technologie, c'est un problème ?",
        a: "Absolument pas. C'est justement pour ça qu'on existe. On prend en charge 100% de la partie technique : publicités, pages, CRM, automatisations. Toi, tu te concentres sur ce que tu sais faire de mieux, ton métier.",
    },
    {
        q: "Quelle est la différence entre vous et une agence classique ?",
        a: "Les agences classiques te vendent des clics et des impressions. Nous, on construit un système complet, marketing ET commercial, qui te génère des clients réels. On intervient sur tout le parcours : de la publicité au closing en passant par le nurturing. Et on a une obsession pour le ROI, pas pour les vanity metrics.",
    },
    {
        q: "Quels types d'entreprises accompagnez-vous ?",
        a: "On accompagne des entrepreneurs, coachs, formateurs, agences, indépendants et PME qui ont un produit ou service de qualité mais qui manquent de système pour acquérir des clients de façon prévisible. Nos clients viennent de l'immobilier, la formation, la vidéo, l'événementiel, le coaching, et bien d'autres secteurs.",
    },
    {
        q: "L'appel de diagnostic est vraiment gratuit ?",
        a: "Oui, 100% gratuit, sans engagement. C'est un échange sincère de 45 minutes où on analyse ta situation. On te donne de la valeur dès ce premier appel, que tu travailles avec nous ou non.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setVisible(true),
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="faq" className="py-24 px-6 bg-[#0A0E19]">
            <div
                ref={ref}
                className={`max-w-[800px] mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
                <div className="text-center mb-16">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#3B82F6] font-semibold">
                        FAQ
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
                        Questions{" "}
                        <span className="bg-gradient-to-r from-[#60A5FA] to-[#EAB308] bg-clip-text text-transparent">
                            Fréquentes
                        </span>
                    </h2>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="bg-[#111827] border border-[#1E293B] rounded-xl overflow-hidden transition-colors hover:border-[#3B82F6]/30"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer"
                            >
                                <span className="font-semibold text-[#F1F5F9] text-sm md:text-base pr-4">{faq.q}</span>
                                <span
                                    className={`text-[#3B82F6] text-xl shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""
                                        }`}
                                >
                                    +
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="px-6 pb-5 text-sm text-[#94A3B8] leading-relaxed">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
