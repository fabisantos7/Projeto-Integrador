import type { Metadata } from "next";
import { Inter, Playfair_Display, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BiblioQR — Sistema de Check-in Rápido para Biblioteca SENAI",
  description:
    "Presença confirmada em menos de 5 segundos via QR Code. Zero filas, zero atrito. Projeto Integrador DEV 2026 — SENAI Morvan Figueiredo.",
  keywords: [
    "SENAI",
    "Projeto Integrador",
    "DEV 2026",
    "QR Code",
    "check-in",
    "biblioteca",
    "JavaScript",
    "JSON",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "BiblioQR — Check-in da Biblioteca SENAI em menos de 5 segundos",
    description:
      "Presença confirmada em menos de 5 segundos via QR Code. Zero filas, zero atrito.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${plexMono.variable} antialiased bg-background font-sans text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
