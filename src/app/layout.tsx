import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Jasa IT & App Development Profesional",
  description: "Solusi cepat untuk pembuatan aplikasi mobile, web, dan perbaikan bug.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} font-sans flex flex-col min-h-screen pt-20`}>
        {/* pt-20 ditambahkan agar konten tidak tertutup Navbar yang fixed */}
        
        <Navbar />
        
        <main className="flex-1">
          {children}
        </main>
        
        <Footer />
        
      </body>
    </html>
  );
}