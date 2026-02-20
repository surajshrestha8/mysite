import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/data/site-config";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { Preloader } from "@/components/ui/preloader";
import { CommandPalette } from "@/components/ui/command-palette";
import { ConsoleEasterEgg } from "@/components/ui/console-easter-egg";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.url),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.seo.url }],
  creator: siteConfig.name,
  openGraph: siteConfig.seo.openGraph,
  twitter: siteConfig.seo.twitter,
  alternates: {
    canonical: siteConfig.seo.url,
  },
  icons: {
    icon: "/icon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.fullName,
  jobTitle: siteConfig.title,
  url: siteConfig.seo.url,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location,
  },
  sameAs: [
    siteConfig.social.github,
    siteConfig.social.linkedin,
    siteConfig.social.twitter,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-neutral-900 antialiased selection:bg-indigo-500/30 selection:text-indigo-200 dark:bg-black dark:text-neutral-50`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ScrollToTop />
          <Preloader />
          <CommandPalette />
          <ConsoleEasterEgg />
        </ThemeProvider>
      </body>
    </html>
  );
}
