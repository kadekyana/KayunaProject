// src/components/layout/Navbar.tsx
'use client'; 
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-surface-border bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo/Nama Anda */}
        <Link href="/" className="text-xl font-bold tracking-tighter flex items-center gap-2">
          {/* Logo dengan warna Primary (Biru) dan teks Putih */}
          <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-extrabold text-lg shadow-sm">
            KPI
          </span>
          <span>KayunaProjectId<span className="text-primary">.</span></span>
        </Link>

        {/* Menu Navigasi (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/70">
          <Link href="#services" className="hover:text-primary transition-colors">Layanan</Link>
          <Link href="/#portfolio" className="hover:text-primary transition-colors">Portofolio</Link>
          <Link href="#workflow" className="hover:text-primary transition-colors">Cara Kerja</Link>
        </nav>

        {/* CTA Button Kecil */}
        <div className="hidden md:flex">
          <a 
            href="https://wa.me/+6288987163167?text=Halo,%20saya%20tertarik%20konsultasi%20mengenai%20proyek%20IT." 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-all"
          >
            Hubungi Saya
          </a>
        </div>

        {/* Tombol Menu Mobile */}
        <button className="md:hidden p-2 text-foreground">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

      </div>
    </header>
  );
}