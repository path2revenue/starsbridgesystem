import "./globals.css";

export const metadata = {
  title: "StarsBridgeSystem | Systèmes d'Acquisition Éthiques pour Entrepreneurs",
  description:
    "On crée des systèmes d'acquisition clients éthiques et prédictibles pour entrepreneurs musulmans. Publicité, funnels, VSL, landing pages. Un seul système pour une croissance stable.",
  keywords: "marketing éthique, acquisition clients, funnel, publicité, entrepreneur musulman, landing page, VSL",
  openGraph: {
    title: "StarsBridgeSystem | Marketing Éthique & Acquisition Client",
    description: "Systèmes d'acquisition prédictibles pour entrepreneurs éthiques.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
