import type { Metadata } from "next";
import { Newsreader, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aadil Ali Mahar · Portfolio",
  description:
    "Portfolio of Aadil Ali Mahar, computer science graduate from The Islamia University of Bahawalpur, working on data-driven systems for decisions that matter.",
  openGraph: {
    title: "Aadil Ali Mahar · Portfolio",
    description:
      "Computer science graduate working on data-driven systems for decisions that matter: flood-risk prediction, adaptive learning, urban heat, and nutrition tracking.",
    url: "https://aadil-mahar-portfolio-v2.vercel.app",
    siteName: "Aadil Ali Mahar · Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Aadil Ali Mahar · Portfolio",
    description:
      "Computer science graduate working on data-driven systems for decisions that matter.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
