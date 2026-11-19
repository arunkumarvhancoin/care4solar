import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#15532E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://care4solar.com"),
  title: {
    template: "%s | Care4Solar",
    default: "Care4Solar — Powering Solar. Protecting Performance.",
  },
  description:
    "Engineering-driven solar solutions, rooftop installations, operations and maintenance, and system performance care for residential, apartment, and commercial infrastructure.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Care4Solar — Solar Solutions & Asset Performance Care",
    description:
      "Solar solutions, technical expertise, and ongoing care to help your solar infrastructure perform reliably.",
    siteName: "Care4Solar",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Care4Solar — Powering Solar. Protecting Performance.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Care4Solar — Powering Solar. Protecting Performance.",
    description:
      "Engineering-driven solar solutions, rooftop installations, operations and maintenance, and system performance care.",
    images: ["/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} font-sans antialiased`}
    >
      <body className="flex flex-col bg-[#F7F7F3] text-[#202720]">
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
