import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zahra Ali - Web Developer and Designer",
  description: "A self-taught web and app developer dedicated to building meaningful digital experiences. I translate complex user needs into functional, high-performance products that bridge the gap between human intuition and technical logic.",
  keywords: [
    "Zahra Ali",
    "Web Developer and Designer",
    "UI/UX Designer",
    "Frontend Developer",
    "Web Designer",
    "Portfolio",
  ],
  authors: [{ name: "Zahra Ali" }],
  creator: "Zahra Ali",
  publisher: "Zahra Ali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "",
    title: "Zahra Ali - Web Developer and Designer",
    description: "A self-taught web and app developer dedicated to building meaningful digital experiences.",
    siteName: "Zahra Ali Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zahra Ali - Web Developer and Designer",
    description: "A self-taught web and app developer dedicated to building meaningful digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
