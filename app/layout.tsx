export const metadata = {
  title: "ProprioSécur",
  description: "Solutions immobilières pour propriétaires en difficulté au Québec",
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
