'use client';

// src/components/layout/Navbar.tsx
// Dependencies: nil — pure TailwindCSS + vanilla React hooks
// Optional: npm install framer-motion  (see commented variants below)

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const NAV_LINKS = [
  { label: 'Layanan', href: '#services' },
  { label: 'Portofolio', href: '#portfolio' },
  { label: 'Testimoni', href: '#testimonials' },
  { label: 'Kontak', href: '#contact' },
];

const WA_LINK =
  'https://wa.me/+6288987163167?text=Halo,%20saya%20tertarik%20konsultasi%20mengenai%20proyek%20IT.';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);

  // Scroll detection — makes navbar more solid after 20px scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [menuOpen]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* ─── FIXED WRAPPER ─────────────────────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
        {/* ─── FLOATING PILL CONTAINER ───────────────────────────────── */}
        <header
          ref={menuRef}
          role="banner"
          className={[
            'w-full max-w-5xl rounded-2xl transition-all duration-300 ease-out',
            scrolled
              ? 'bg-white/88 backdrop-blur-xl shadow-[0_2px_24px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)] border border-slate-200/70'
              : 'bg-white/60 backdrop-blur-md shadow-[0_1px_12px_rgba(0,0,0,0.04)] border border-slate-200/50',
          ].join(' ')}
          style={{ WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'blur(12px)' }}
        >
          <div className="flex h-[62px] items-center justify-between px-5">

            {/* ── LOGO ─────────────────────────────────────────────── */}
            <Link
              href="/"
              className="group flex items-center focus-visible:outline-none"
              aria-label="Wan A Project — Halaman Utama"
            >
              <div className="relative">
                
                {/* Soft glow background */}
                <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <Image
                  src="/logo/nav3.png"
                  alt="Wan A Project Logo"
                  width={180}
                  height={42}
                  priority
                  className="
                    relative
                    h-8
                    md:h-10
                    w-auto
                    object-contain
                    select-none
                    transition-all
                    duration-300
                    ease-out
                    group-hover:scale-[1.02]
                    group-hover:-translate-y-[1px]
                  "
                  draggable={false}
                />
              </div>
            </Link>

            {/* ── DESKTOP NAV ──────────────────────────────────────── */}
            <nav
              className="hidden md:flex items-center gap-1"
              aria-label="Navigasi utama"
            >
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setActiveLink(href)}
                  className={[
                    'relative px-3.5 py-2 text-[13.5px] font-medium rounded-lg transition-all duration-200',
                    activeLink === href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50',
                  ].join(' ')}
                >
                  {label}
                  {/* Active underline dot */}
                  {activeLink === href && (
                    <span
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[3px] w-[3px] rounded-full bg-blue-500"
                      aria-hidden="true"
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* ── DESKTOP CTA ──────────────────────────────────────── */}
            <div className="hidden md:flex items-center gap-3">
              
              {/* Primary CTA */}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  'group relative inline-flex items-center gap-1.5 overflow-hidden',
                  'rounded-full px-5 py-2.5 text-[13px] font-semibold text-white',
                  'transition-all duration-200 hover:-translate-y-[1px]',
                ].join(' ')}
                style={{
                  background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
                  boxShadow:
                    '0 0 0 1px rgba(59,130,246,0.4), 0 3px 10px rgba(59,130,246,0.30)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    '0 0 0 1px rgba(59,130,246,0.55), 0 6px 18px rgba(59,130,246,0.38)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    '0 0 0 1px rgba(59,130,246,0.4), 0 3px 10px rgba(59,130,246,0.30)';
                }}
              >
                {/* Hover shine */}
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.16) 50%, transparent 65%)',
                  }}
                  aria-hidden="true"
                />
                {/* WhatsApp icon */}
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Konsultasi Gratis
              </a>
            </div>

            {/* ── MOBILE HAMBURGER ─────────────────────────────────── */}
            <button
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 transition-colors duration-150"
              aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="sr-only">{menuOpen ? 'Tutup menu' : 'Buka menu'}</span>
              {menuOpen ? (
                /* X icon */
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                /* Hamburger icon */
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>

          {/* ── MOBILE MENU (accordion, inline with floating card) ─── */}
          <div
            className={[
              'md:hidden overflow-hidden transition-all duration-300 ease-out',
              menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0',
            ].join(' ')}
            aria-hidden={!menuOpen}
          >
            <div className="px-4 pb-4 pt-1">
              {/* Divider */}
              <div className="mb-3 h-px bg-slate-100" />

              {/* Nav links */}
              <nav className="flex flex-col gap-0.5" aria-label="Navigasi mobile">
                {NAV_LINKS.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => { setActiveLink(href); setMenuOpen(false); }}
                    className={[
                      'flex items-center justify-between rounded-xl px-4 py-3 text-[14px] font-medium transition-colors duration-150',
                      activeLink === href
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900',
                    ].join(' ')}
                  >
                    {label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl py-3.5 text-[14px] font-semibold text-white"
                  style={{
                    background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
                    boxShadow: '0 2px 12px rgba(59,130,246,0.30)',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Konsultasi Gratis via WhatsApp
                </a>

                <a
                  href="#portfolio"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl py-3.5 text-[14px] font-medium text-slate-700"
                  style={{
                    background: 'rgba(248,250,252,0.9)',
                    border: '1px solid rgba(226,232,240,0.8)',
                  }}
                >
                  Lihat Portfolio
                </a>
              </div>

              {/* Mini footer inside mobile menu */}
              <p className="mt-4 text-center text-[11px] text-slate-400">
                Next.js · Flutter · TypeScript · Dart
              </p>
            </div>
          </div>
        </header>
      </div>

      {/* ─── MOBILE MENU BACKDROP ──────────────────────────────────── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ background: 'rgba(15,23,42,0.12)', backdropFilter: 'blur(2px)' }}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}