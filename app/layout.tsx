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

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HYN7QWDCE2"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HYN7QWDCE2');
            `,
          }}
        />

        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/vtxj8fo17a";
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "vtxj8fo17a");
            `,
          }}
        />

      </head>

      <body>{children}</body>
    </html>
  );
}
