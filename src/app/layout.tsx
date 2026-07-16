import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://evenow.example.com'),
  title: {
    default: "Evenow | Premium Event Orchestration & Vendor Marketplace",
    template: "%s | Evenow",
  },
  description: "The ultimate orchestration platform for high-end event planners and hosts. Discover premium venues and world-class vendors in one curated space.",
  keywords: ["event planning", "luxury events", "wedding planner", "premium venues", "event vendors", "party planning", "celebration orchestration", "catering", "event photography", "event decoration"],
  authors: [{ name: "Evenow" }],
  openGraph: {
    title: "Evenow | Premium Event Orchestration & Vendor Marketplace",
    description: "The ultimate orchestration platform for high-end event planners and hosts. Discover premium venues and world-class vendors in one curated space.",
    url: 'https://evenow.example.com',
    siteName: 'Evenow',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Evenow | Premium Event Orchestration",
    description: "Discover premium venues and world-class vendors in one curated space.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${inter.variable} bg-background text-on-background font-body-md antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
