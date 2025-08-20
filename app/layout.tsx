import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://kylejeffrey.com'),
  title: {
    default: "Kyle Jeffrey",
    template: "%s | Kyle Jeffrey"
  },
  description: "Code, design, and writing by Kyle Jeffrey.",
  keywords: ["Kyle Jeffrey", "software", "design", "writing", "portfolio", "blog"],
  authors: [{ name: "Kyle Jeffrey", url: "https://kylejeffrey.com" }],
  creator: "Kyle Jeffrey",
  category: "technology",

  openGraph: {
    type: "website",
    url: "https://kylejeffrey.com",
    siteName: "Kyle Jeffrey",
    title: "Kyle Jeffrey",
    description: "Code, design, and writing by Kyle Jeffrey.",
    images: [
      {
        url: "/og.jpg", // put your OG image here (1200x630 recommended)
        width: 1200,
        height: 630,
        alt: "Kyle Jeffrey — code, design, and writing"
      }
    ],
    locale: "en_US"
  },

  twitter: {
    card: "summary_large_image",
    title: "Kyle Jeffrey",
    description: "Code, design, and writing by Kyle Jeffrey.",
    images: ["/og.jpg"],
    // creator: "@yourhandle" // add if you have one
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" }
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#0b0b0b" }
    ]
  },

  manifest: "/site.webmanifest",

  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/rss.xml"
    }
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  },

  referrer: "origin-when-cross-origin",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" }
  ],
  colorScheme: "light dark",

  formatDetection: {
    telephone: false,
    address: false,
    email: false
  },

  verification: {
    // Fill these once you set them up:
    // google: "xxxxx",
    // me: ["mailto:you@domain.com", "https://your-mastodon.example/@you"]
  }
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
