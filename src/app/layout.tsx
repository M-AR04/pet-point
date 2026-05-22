import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pet Point | Premium Pet Store, Supplies & Care in Amman, Jordan",
  description: "Experience premium pet care at Pet Point on Amer bin Malek Street, Amman. Explore high-quality pet food, custom aquariums, premium accessories, toys, and grooming products. Open daily until 11 PM.",
  keywords: [
    "Pet Point",
    "Pet Store Amman",
    "Pet Supplies Jordan",
    "Premium Dog Accessories Amman",
    "Premium Cat Food Jordan",
    "Aquarium Supplies Amman",
    "Pet Shop Amer bin Malek Street",
    "Luxury Pet Care Jordan"
  ],
  authors: [{ name: "Pet Point Amman" }],
  openGraph: {
    title: "Pet Point | Premium Pet Store & Care in Amman, Jordan",
    description: "Amman's luxury destination for premium pet supplies, custom aquariums, accessories, and pet wellness. Visit our storefront on Amer bin Malek Street.",
    url: "https://petpoint.jo",
    siteName: "Pet Point",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Point | Premium Pet Store & Care in Amman",
    description: "Amman's luxury destination for premium pet supplies, custom aquariums, and accessories.",
  },
  alternates: {
    canonical: "https://petpoint.jo",
  },
};

export const viewport: Viewport = {
  themeColor: "#8CB73D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF9F5] text-[#111111] font-sans selection:bg-[#8CB73D] selection:text-white">
        {children}
      </body>
    </html>
  );
}
