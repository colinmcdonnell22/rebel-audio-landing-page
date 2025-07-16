import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rebel Audio - Social Podcasting Platform",
  description: "Transform your podcast episodes into viral social content automatically. The social podcasting platform that turns your voice into viral content. Join the waitlist for early access.",
  keywords: [
    "podcast",
    "social media",
    "content creation",
    "podcasting platform",
    "social podcasting",
    "viral content",
    "AI podcast tools",
    "podcast automation",
    "social audio",
    "podcast clips",
    "content distribution",
    "podcast analytics"
  ],
  authors: [{ name: "Rebel Audio" }],
  creator: "Rebel Audio",
  publisher: "Rebel Audio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rebelaudio.com",
    title: "Rebel Audio - Social Podcasting Platform",
    description: "Transform your podcast episodes into viral social content automatically. Join the waitlist for early access.",
    siteName: "Rebel Audio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Rebel Audio - Social Audio, Simplified",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rebel Audio - Social Podcasting Platform",
    description: "Transform your podcast episodes into viral social content automatically. Join the waitlist for early access.",
    images: ["/logo.png"],
    creator: "@rebelaudio",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
