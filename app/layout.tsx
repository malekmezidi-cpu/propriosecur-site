import "./globals.css";

export const metadata = {
  title: "Préavis 60 jours Montréal | Vente rapide maison | ProprioSécur",
  description:
    "ProprioSécur accompagne les propriétaires en difficulté au Québec : préavis 60 jours, vente rapide de propriété, prêt privé immobilier et solutions confidentielles.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
