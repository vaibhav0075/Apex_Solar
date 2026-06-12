import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Apex Solar Infra Pvt. Ltd. | Intelligent Solar Solutions",
    template: "%s | Apex Solar Infra",
  },
  description:
    "Apex Solar Infra delivers high-performance solar installations for residential, commercial, and industrial projects across India. EPC services, O&M, and solar infrastructure development.",
  keywords: [
    "Solar Panel Installation",
    "Commercial Solar",
    "Industrial Solar",
    "EPC Solar Services",
    "Solar Company India",
    "Apex Solar Infra",
    "Renewable Energy",
    "Rooftop Solar",
  ],
  authors: [{ name: "Apex Solar Infra Pvt. Ltd." }],
  openGraph: {
    title: "Apex Solar Infra Pvt. Ltd. | Intelligent Solar Solutions",
    description:
      "Delivering high-performance solar installations for residential, commercial, and industrial projects across India.",
    url: "https://apexsolarinfra.com",
    siteName: "Apex Solar Infra",
    images: [
      {
        url: "/solar.png",
        width: 1200,
        height: 630,
        alt: "Apex Solar Infra — Intelligent Solar Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/solar.png"],
  },
  icons: {
    icon: "/Logo_Tp.png",
    apple: "/Logo_Tp.png",
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
      <body className="min-h-full">
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
