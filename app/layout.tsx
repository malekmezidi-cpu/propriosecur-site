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
      <head>
        {/* Google Maps API pour autocomplétion des adresses */}
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDsu7V4Uk52slzyLNTk0OyWBj2032YrteA&libraries=places"
          async
          defer
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
