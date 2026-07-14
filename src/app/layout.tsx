import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FloatingElements from "@/components/ui/FloatingElements";
import Logo from "@/components/ui/Logo";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Indus Modulars | Smart Modular, Seamless Spaces | Luxury Interior Design",
  description: "We transform ordinary spaces into timeless interiors crafted around your lifestyle. Award-winning luxury modular kitchens, wardrobes, and living space designs.",
  keywords: ["luxury interior design", "modular kitchen", "smart wardrobes", "premium home interiors", "Indus Modulars"],
  authors: [{ name: "Indus Modulars" }],
  openGraph: {
    title: "Indus Modulars | Smart Modular, Seamless Spaces | Luxury Interior Design",
    description: "Premium modular kitchens, custom wardrobes, and high-end living spaces designed for modern luxury.",
    url: "https://indusmodulars.com",
    siteName: "Indus Modulars",
    locale: "en_US",
    type: "website",
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
      className={`${playfair.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-warm-ivory text-charcoal-black font-sans selection:bg-gold selection:text-charcoal-black relative">
        {/* Subtle Brand Watermark Background (Fixed, centered, 5% opacity, 1px blur) */}
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-[0.05]">
          <Logo className="w-[60vw] max-w-[850px] aspect-square filter blur-[1px]" />
        </div>
        
        <Navbar />
        <main className="flex-grow relative z-10">
          {children}
        </main>
        <Footer />
        <FloatingElements />
      </body>
    </html>
  );
}
