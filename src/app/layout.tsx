import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Apex Solar Infra Pvt Ltd | Premier Solar Panel Installation & Energy Solutions",
  description:
    "Apex Solar Infra Pvt Ltd provides professional solar panel installation, maintenance, and rooftop solar solutions for homes & businesses. Powering India with clean, sustainable energy.",
  keywords: [
    "Solar Panel Installation",
    "Best Solar Company India",
    "Solar Rooftop Installation",
    "Solar Panel Price",
    "Apex Solar Infra",
    "Renewable Energy Solutions",
    "Solar Subsidy India",
    "Solar Installer Haryana",
    "Solar Panel Installation Haryana",
  ],
  authors: [{ name: "Apex Solar Infra Pvt Ltd" }],
  openGraph: {
    title: "Apex Solar Infra Pvt Ltd | Leading Solar Installer",
    description: "Expert solar panel installation and maintenance services. Powering homes and businesses with clean energy across India.",
    url: "https://apexsolarinfra.com",
    siteName: "Apex Solar",
    images: [
      {
        url: "/solar-installation-hero.png",
        width: 1200,
        height: 630,
        alt: "Apex Solar Installation",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Solar Infra Pvt Ltd | Solar Energy Solutions",
    description: "Professional solar panel installation services across India.",
    images: ["/solar-installation-hero.png"],
  },
  icons: {
    icon: [
      { url: "/solar.png", sizes: "any", type: "image/png" },
    ],
    apple: "/solar.png",
  },
  metadataBase: new URL("https://apexsolarinfra.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Apex Solar Infra Pvt Ltd",
              "image": "https://apexsolarinfra.com/Logo_Tp.png",
              "@id": "https://apexsolarinfra.com",
              "url": "https://apexsolarinfra.com",
              "telephone": "+917988449943",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "India",
                "addressLocality": "Multiple Locations",
                "addressRegion": "India",
                "postalCode": "",
                "addressCountry": "IN"
              },
              "areaServed": [
                {
                  "@type": "State",
                  "name": "Haryana"
                },
                {
                  "@type": "Country",
                  "name": "India"
                }
              ],
              "description": "Expert solar panel installation, rooftop solar solutions, and maintenance services for homes and businesses across India.",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              }
            })
          }}
        />
      </head>
      <body className="min-h-full">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
