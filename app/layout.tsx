import "./globals.css";
import Script from "next/script";

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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HYN7QWDCE2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HYN7QWDCE2');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
