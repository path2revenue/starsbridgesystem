/** ============================================================
 *  SITE CONFIG — Single Source of Truth
 *  ============================================================
 *  Fill out every section below. This file drives the ENTIRE site.
 *  No code changes needed — just edit this config and deploy.
 *  ============================================================ */

const WA_NUMBER = "33761941267";
const WA_MESSAGE = (ctx) =>
    `Bonjour, je viens du site ${ctx} et j'aimerais en savoir plus.`;

export const siteConfig = {
    /* ─────────────────── META & SEO ─────────────────── */
    meta: {
        title: "StarsBridgeSystem | Systèmes d'Acquisition Éthiques pour Entrepreneurs",
        description:
            "On crée des systèmes d'acquisition clients fondés sur la bonne intention (niyah) et l'éthique. Résultats prévisibles, conscience tranquille.",
        keywords:
            "marketing éthique, acquisition clients, funnel, publicité, entrepreneur musulman, landing page, VSL",
        ogTitle: "StarsBridgeSystem | Marketing Éthique & Acquisition Client",
        ogDescription: "Systèmes d'acquisition éthiques pour entrepreneurs qui veulent scaler avec baraka.",
        ogImage: null, // URL to OG image (1200x630)
        lang: "fr",
        favicon: "⚡", // Emoji or path to .ico/.png
    },

    /* ─────────────────── DESIGN ─────────────────── */
    design: {
        palette: "trust", // trust | vibrant | luxury | healthcare | creative | dark
        style: "linear", // linear | glassmorphism | aurora | bento | minimal
        layout: "centered", // centered | editorial | minimal
        fontHeading: "Inter",
        fontBody: "Inter",
        fontWeights: "300;400;500;600;700;800",
        borderRadius: "16px",
    },

    /* ─────────────────── GLOBAL LINKS ─────────────────── */
    links: {
        whatsapp: "https://chat.whatsapp.com/Dvas6Xq5dqGKxQ6eT6YTRC?mode=gi_t",
        booking: "#rdv",
        bookingEmbed:
            "https://api.leadconnectorhq.com/widget/booking/XG1mYu9n2KDuvgZV2boA",
        bookingEmbedType: "ghl", // ghl | calendly | iframe
    },

    /* ─────────────────── NAVBAR ─────────────────── */
    navbar: {
        logo: { text: "StarsBridgeSystem", emoji: "⚡" },
        links: [
            { label: "Services", href: "#services" },
            { label: "Résultats", href: "#resultats" },
            { label: "Témoignages", href: "#temoignages" },
            { label: "FAQ", href: "#faq" },
        ],
        cta: { text: "Réserver un Appel", href: "#rdv" },
    },

    /* ─────────────────── HERO ─────────────────── */
    hero: {
        eyebrow: { text: "+100K€ de CA généré pour nos clients", dot: true },
        headline: "On Prend en Charge Ton",
        highlightedText: "Marketing & Commercial",
        headlineEnd: "Pour Que Tu Signes Plus.",
        subheadline:
            "Ton système d'acquisition éthique, construit avec la bonne intention.",
        vslUrl: "https://www.youtube.com/embed/tGQbEge5hCc?rel=0&modestbranding=1",
        vslTitle: "Présentation StarsBridgeSystem",
        ctas: [
            {
                text: "Réserver Mon Appel avec un Expert",
                href: "#rdv",
                style: "primary", // primary | secondary
                arrow: true,
            },
            {
                text: "📊 Étude de cas : 0 → +20K en 30 jours",
                href: "__whatsapp__", // replaced at runtime with links.whatsapp
                style: "secondary",
                icon: "whatsapp",
            },
        ],
        stats: [
            { value: 100, suffix: "K+", label: "CA généré pour nos clients" },
            { value: 50, suffix: "+", label: "Entreprises accompagnées" },
            { value: 30, suffix: "+", label: "RDVs en 1 webinaire" },
            { value: 538, suffix: "%", label: "ROI moyen constaté" },
        ],
        trustBadges: [
            "Résultats vérifiables sur LinkedIn",
            "Appel 100% gratuit",
            "Zéro engagement",
        ],
    },

    /* ─────────────────── SOCIAL PROOF ─────────────────── */
    socialProof: {
        items: [
            "⚡ +100K€ de CA généré",
            "🎯 50+ entreprises accompagnées",
            "📈 538% ROI moyen",
            "🤝 Partenaire de confiance",
            "🏆 Résultats mesurables",
        ],
    },

    /* ─────────────────── PAIN POINTS ─────────────────── */
    painPoints: {
        eyebrow: "Le Problème",
        headline: "Tu Te Reconnais Dans",
        highlightedText: "Cette Situation",
        highlightColor: "danger", // danger = red accent
        subtitle:
            "Tu as la niyah. La compétence aussi. Ce qui te manque, c'est un système qui transforme cette intention en résultats concrets.",
        items: [
            {
                icon: "📇",
                title: "Tu distribues des cartes de visite en espérant un miracle",
                description:
                    "Tu comptes sur le bouche-à-oreille et tu espères que la baraka fera le reste. Certains mois tu signes, d'autres non. La niyah est là, mais sans système, le CA reste imprévisible.",
                stat: "0 système = 0 prédictibilité",
            },
            {
                icon: "💸",
                title: "Tu dépenses en pub sans comprendre ce qui fonctionne",
                description:
                    "Tu as peut-être essayé Facebook Ads, un site à 30-40€/mois, ou même une agence. Résultat : de l'argent investi sans retour, et l'impression que le marketing éthique ne peut pas fonctionner.",
                stat: "Budget perdu sans stratégie",
            },
            {
                icon: "🏋️",
                title: "Tu te bats seul, sans équipe ni système",
                description:
                    "Tu gères tout : la prospection, les appels, le suivi, la livraison. Cette surcharge t'empêche de te concentrer sur ce qui apporte vraiment la baraka, ton expertise et ta valeur ajoutée.",
                stat: "Tout repose sur tes épaules",
            },
        ],
    },

    /* ─────────────────── RESULTS ─────────────────── */
    results: {
        eyebrow: "Résultats Concrets",
        headline: "Ce Qu'on a Fait Pour",
        highlightedText: "D'autres Entrepreneurs",
        items: [
            {
                metric: "+96K€",
                label: "MentorClass",
                description: "D'offres créées — passé de 0 à +100K€/mois",
                badge: "Formation",
            },
            {
                metric: "8.6K€",
                label: "Immo Éthique",
                description: "Chiffre d'affaires généré en publicité immobilière éthique",
                badge: "Immobilier",
            },
            {
                metric: "538%",
                label: "ROI Agence Événementielle",
                description: "Retour sur investissement pour une agence événementielle",
                badge: "Événementiel",
            },
            {
                metric: "30+",
                label: "RDVs en 1 Webinaire",
                description: "Rendez-vous qualifiés générés en un seul webinaire live",
                badge: "Webinaire",
            },
            {
                metric: "100K+",
                label: "CA Cumulé Clients",
                description: "Chiffre d'affaires généré pour l'ensemble de nos clients",
                badge: "Global",
            },
        ],
    },

    /* ─────────────────── VIDEO TESTIMONIALS ─────────────────── */
    videoTestimonials: {
        eyebrow: "Ils Témoignent",
        headline: "Nos Clients en",
        highlightedText: "Vidéo",
        videos: [
            {
                url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                title: "Témoignage Client 1",
                caption: "Comment on a doublé son CA en 3 mois",
            },
            {
                url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                title: "Témoignage Client 2",
                caption: "De 0 à 30 RDVs qualifiés/mois",
            },
        ],
    },

    /* ─────────────────── SERVICES ─────────────────── */
    services: {
        eyebrow: "Nos Services",
        headline: "Un Système",
        highlightedText: "Complet",
        headlineEnd: "à Ton Service",
        subtitle:
            "Chaque brique est pensée pour scaler ton business sans compromettre tes valeurs. La niyah guide chaque décision.",
        items: [
            {
                icon: "🌱",
                title: "Acquisition Sans Publicité",
                description:
                    "Stratégies basées sur la valeur réelle (LinkedIn, contenu, partenariats). On attire les bons clients par la sincérité, pas la manipulation.",
                badge: "0€ de pub requis",
            },
            {
                icon: "🎯",
                title: "Publicité Ciblée & Éthique",
                description:
                    "Campagnes publicitaires honnêtes : pas de fausses promesses, pas de clickbait. On montre ce que tu fais vraiment, et ça convertit.",
            },
            {
                icon: "🖥️",
                title: "Landing Pages Premium",
                description:
                    "Des pages claires, honnêtes et professionnelles. Le visiteur ressent ta sincérité dès la première seconde.",
            },
            {
                icon: "🎬",
                title: "VSL & Contenu Vidéo",
                description:
                    "Des vidéos de vente qui éduquent et apportent de la valeur, pas de la manipulation émotionnelle.",
                span: 2, // spans 2 columns on desktop
            },
            {
                icon: "⚙️",
                title: "Automatisation CRM",
                description:
                    "CRM, pipelines et relances automatisées. L'efficacité au service de la relation humaine, pas à sa place.",
            },
            {
                icon: "📧",
                title: "Séquences Email & Nurturing",
                description:
                    "Des séquences qui apportent de la valeur à chaque message. Le prospect se sent accompagné, pas harcelé.",
            },
            {
                icon: "📞",
                title: "Stratégie Commerciale & Closing",
                description:
                    "Scripts d'appel basés sur l'écoute et la sincérité. On ne ferme que les deals où on peut réellement aider.",
                badge: "100K+ CA généré",
                span: 2,
            },
        ],
    },

    /* ─────────────────── PROCESS ─────────────────── */
    process: {
        eyebrow: "Notre Méthode",
        headline: "Comment On",
        highlightedText: "Travaille",
        steps: [
            {
                number: "01",
                title: "Appel Diagnostic",
                description:
                    "On commence par comprendre ta vision, tes valeurs et ta niyah. Pourquoi tu fais ce que tu fais ? C'est la fondation de tout le système.",
            },
            {
                number: "02",
                title: "Stratégie Sur Mesure",
                description:
                    "On conçoit un plan d'action aligné avec ton éthique : canaux, messages, séquences, tout est pensé pour que tu puisses scaler sans compromis.",
            },
            {
                number: "03",
                title: "Déploiement & Optimisation",
                description:
                    "On lance avec tawakkul et on mesure avec rigueur. Les données guident les optimisations, la niyah guide la direction.",
            },
            {
                number: "04",
                title: "Scale & Croissance",
                description:
                    "Une fois le système validé, on accélère. Plus de clients, plus d'impact, même éthique. La baraka se multiplie quand le fondement est sain.",
            },
        ],
    },

    /* ─────────────────── HONESTY ─────────────────── */
    honesty: {
        eyebrow: "Notre Philosophie",
        headline: "On Préfère la",
        highlightedText: "Transparence",
        paragraphs: [
            "On ne travaille pas avec tout le monde. Et on refuse les projets où notre niyah ne serait pas alignée. Si on ne peut pas t'aider avec sincérité, on préfère te le dire.",
            "Notre conviction : la baraka vient quand le travail est fait avec la bonne intention. Chaque système qu'on construit repose sur l'honnêteté, la transparence et le respect de tes valeurs.",
            "Tu n'es pas un numéro de facture. Tu es un partenaire. Ta réussite est notre sadaqa jariya.",
        ],
        signature: null, // can be { name: "Ahmed", role: "Fondateur" }
    },

    /* ─────────────────── CALENDAR ─────────────────── */
    calendar: {
        eyebrow: "Prêt à Passer à l'Action ?",
        headline: "Réserve Ton Appel de",
        highlightedText: "Candidature",
        subtitle:
            "45 minutes pour comprendre ta vision, ta niyah et identifier comment on peut t'aider à scaler éthiquement.",
        benefits: [
            "Analyse rapide de ta situation actuelle",
            "Identification de tes leviers de croissance",
            "Recommandations concrètes et actionnables",
            "On te dit honnêtement si on peut t'aider ou pas",
        ],
        whatsappMention: "Je veux recevoir une étude de cas 0 à 20K gratuitement",
        whatsappCopy: "Découvre comment on a aidé un entrepreneur à passer de 0 à +20K en 30 jours.",
        whatsappLabel: "Rejoindre le groupe WhatsApp pour voir l'étude de cas",
    },

    /* ─────────────────── TESTIMONIALS ─────────────────── */
    testimonials: {
        eyebrow: "Témoignages",
        headline: "Ce Que Nos",
        highlightedText: "Partenaires",
        headlineEnd: "Disent de Nous",
        items: [
            {
                stars: 5,
                quote:
                    "Ahmed Biaggini est un profil rare, à la croisée de la stratégie et du commercial de haut niveau. Je recommande son travail et son sérieux.",
                name: "Mohamed Ali",
                role: "Sales Influence",
                color: "linear-gradient(135deg,#3B82F6,#60A5FA)",
            },
            {
                stars: 5,
                quote:
                    "Nous avons eu des résultats incroyables. Ahmed a toujours fait preuve de professionnalisme, ce qui nous a valu de dépasser les 100K de CA.",
                name: "Bryan Wallace",
                role: "Fondateur, Agence Take Care",
                color: "linear-gradient(135deg,#EAB308,#F59E0B)",
            },
            {
                stars: 5,
                quote:
                    "J'ai observé une augmentation de 50 clients potentiels en l'espace d'un mois. Ses stratégies de vente novatrices m'ont permis d'accéder à une clientèle diversifiée.",
                name: "Hanaria Messeleka",
                role: "Coordinatrice commerciale & marketing",
                color: "linear-gradient(135deg,#10B981,#059669)",
            },
            {
                stars: 5,
                quote:
                    "Un professionnel de la vente exceptionnel. Son impact sur notre croissance commerciale a été indéniable.",
                name: "Khalid Khamdani",
                role: "Fondateur, Easyloc Immobilier Formation",
                color: "linear-gradient(135deg,#8B5CF6,#6366F1)",
            },
            {
                stars: 5,
                quote:
                    "Un élément exceptionnel par son dynamisme et l'envie de tester de nouvelles idées. Il fait toujours le maximum pour atteindre ses objectifs.",
                name: "François Pujabe",
                role: "Cofondateur, ComptaStar",
                color: "linear-gradient(135deg,#EC4899,#8B5CF6)",
            },
        ],
    },

    /* ─────────────────── FAQ ─────────────────── */
    faq: {
        eyebrow: "FAQ",
        headline: "Questions",
        highlightedText: "Fréquentes",
        items: [
            {
                q: "Combien coûte un accompagnement ?",
                a: "Nos tarifs varient selon la complexité. On commence toujours par un appel gratuit. Ensuite, devis transparent, sans frais cachés. On ne vend jamais quelque chose dont tu n'as pas besoin.",
            },
            {
                q: "En combien de temps je vais voir des résultats ?",
                a: "Les premiers leads arrivent entre 7 et 21 jours. Mais les résultats durables viennent quand le système est construit sur de bonnes fondations.",
            },
            {
                q: "Est-ce que vous travaillez avec tout le monde ?",
                a: "Non. On ne prend que les projets où on est convaincus de pouvoir apporter de la valeur réelle. Si notre niyah n'est pas alignée, on passe.",
            },
            {
                q: "Je ne suis pas à l'aise avec la technologie ?",
                a: "Absolument pas un problème. On prend en charge 100% de la partie technique.",
            },
            {
                q: "Quelle est la différence avec une agence classique ?",
                a: "Une agence vend des clics. Nous, on construit un système complet guidé par la niyah, pas juste du chiffre, mais de la baraka dans chaque partenariat.",
            },
            {
                q: "L'appel de diagnostic est vraiment gratuit ?",
                a: "Oui, 100% gratuit, sans engagement. Un échange sincère de 45 minutes.",
            },
        ],
    },

    /* ─────────────────── FINAL CTA ─────────────────── */
    finalCTA: {
        eyebrow: "Tu veux des résultats ?",
        headline: "On Est à",
        highlightedText: "Une Décision",
        headlineEnd: "de Tout Faire Changer",
        subtitle:
            "Chaque jour sans système, c'est de la baraka qui ne se manifeste pas. Passe à l'action avec la bonne intention.",
        ctas: [
            {
                text: "Réserver Mon Appel avec un Expert",
                href: "#rdv",
                style: "primary",
                arrow: true,
            },
            {
                text: "📊 Étude de cas : 0 → +20K en 30j",
                href: "__whatsapp__",
                style: "secondary",
                icon: "whatsapp",
            },
        ],
        badges: ["✅ Appel 100% gratuit", "✅ Zéro engagement", "✅ Réponse sous 24h"],
    },

    /* ─────────────────── FOOTER ─────────────────── */
    footer: {
        brand: "StarsBridgeSystem",
        tagline: "Systèmes d'acquisition bénis pour entrepreneurs sincères.",
        links: [
            { label: "Services", href: "#services" },
            { label: "Résultats", href: "#resultats" },
            { label: "Témoignages", href: "#temoignages" },
            { label: "FAQ", href: "#faq" },
            { label: "Mentions légales", href: "/mentions-legales" },
        ],
        socials: [
            // { platform: "linkedin", url: "https://..." },
            // { platform: "instagram", url: "https://..." },
            // { platform: "youtube", url: "https://..." },
        ],
        legal: "© 2025 StarsBridgeSystem. Tous droits réservés.",
    },

    /* ─────────────────── MERCI PAGE ─────────────────── */
    merci: {
        headline: "Ton Appel Est",
        highlightedText: "Confirmé !",
        subtitle:
            "On a hâte d'échanger avec toi. Bismillah, c'est une belle étape.",
        gift: {
            badge: "🎁 Cadeau Exclusif",
            title: "Rejoins le Réseau d'Affaires StarsBridgeSystem",
            description:
                "Un groupe WhatsApp pour entrepreneurs qui veulent scaler avec niyah et baraka. Entraide sincère, opportunités et rappels mutuels.",
            benefits: [
                { icon: "🤝", label: "Networking qualifié" },
                { icon: "💡", label: "Conseils exclusifs" },
                { icon: "🚀", label: "Opportunités business" },
            ],
            cta: {
                text: "Rejoindre le Groupe Maintenant",
                url: "https://chat.whatsapp.com/FR3BPnD863B8CBa519N1bA",
                icon: "whatsapp",
            },
            footnote: "100% gratuit. Accès réservé aux entrepreneurs sérieux.",
        },
        backLink: { text: "← Retour au site", url: "/" },
    },

    /* ─────────────────── SECTIONS ORDER ─────────────────── */
    // Controls which sections appear and in what order on the landing page.
    // Remove or reorder items to customize the page.
    sections: [
        "hero",
        "socialProof",
        "painPoints",
        "results",
        "videoTestimonials",
        "services",
        "process",
        "honesty",
        "calendar",
        "testimonials",
        "faq",
        "finalCTA",
    ],
};
