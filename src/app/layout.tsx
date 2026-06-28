import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://harone-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Harone Ait Ouakli — Technicien Systèmes & Réseaux",
  description:
    "Portfolio de Harone Ait Ouakli, étudiant en BTS SIO option SISR à l'IPSSI. À la recherche d'une alternance en systèmes, réseaux et administration. Projets : infrastructure VLAN (Labo GSB), vidéosurveillance IP, câblage et configuration réseau.",
  keywords: [
    "BTS SIO",
    "SISR",
    "alternance",
    "technicien réseaux",
    "administration système",
    "Cisco Packet Tracer",
    "VLAN",
    "réseau",
    "Harone Ait Ouakli",
    "Pontault-Combault",
  ],
  authors: [{ name: "Harone Ait Ouakli" }],
  openGraph: {
    title: "Harone Ait Ouakli — Technicien Systèmes & Réseaux",
    description:
      "Étudiant BTS SIO option SISR en recherche d'alternance. Réseaux, systèmes et sécurité.",
    url: siteUrl,
    siteName: "Portfolio — Harone Ait Ouakli",
    locale: "fr_FR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
