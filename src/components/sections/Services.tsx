'use client';

// src/components/sections/Services.tsx
// No extra dependencies — pure React + TailwindCSS
// Font: add to globals.css → @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap')

import { useRef, useState } from 'react';

/* ─── ICONS (inline SVG, no dependency) ──────────────────────────── */
const IconMobile = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="3" />
    <circle cx="12" cy="17.5" r=".75" fill="currentColor" stroke="none" />
    <line x1="9" y1="6" x2="15" y2="6" />
  </svg>
);
const IconWeb = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="15" rx="2" />
    <path d="M8 21h8M12 18v3" />
    <path d="M6 8h.01M9 8h.01M12 8h6" opacity=".5" />
    <path d="M6 11.5h12" opacity=".35" />
    <path d="M6 14h8" opacity=".35" />
  </svg>
);
const IconStore = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);
const IconBug = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2l1.5 1.5" /><path d="M14.5 3.5L16 2" />
    <path d="M9 7.5A3 3 0 0 1 15 7.5V13a3 3 0 0 1-6 0V7.5z" />
    <path d="M6.5 9H4a1 1 0 0 0-1 1v1a5 5 0 0 0 4 4.9" />
    <path d="M17.5 9H20a1 1 0 0 1 1 1v1a5 5 0 0 1-4 4.9" />
    <path d="M9 17.5C9 19.4 10.3 21 12 21s3-1.6 3-3.5" />
    <line x1="12" y1="13" x2="12" y2="17.5" />
  </svg>
);
const IconArrow = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

/* ─── DATA ────────────────────────────────────────────────────────── */
type Service = {
  num: string;
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
  tags: string[];
  badge?: string;
  accentColor: string;        // tailwind bg class for icon bg
  accentText: string;         // tailwind text class for icon
  accentGlow: string;         // inline rgba for hover glow
  featured?: boolean;
};

const SERVICES: Service[] = [
  {
    num: '01',
    icon: IconMobile,
    title: 'Mobile App Development',
    description:
      'Aplikasi cross-platform yang cepat, cantik, dan native-feel menggunakan Flutter. Dari UI pixel-perfect hingga integrasi API yang mulus.',
    tags: ['Flutter', 'Dart', 'UX/UI Design', 'REST API'],
    badge: 'Most Popular',
    accentColor: 'bg-blue-50',
    accentText: 'text-blue-600',
    accentGlow: 'rgba(59,130,246,0.12)',
    featured: true,
  },
  {
    num: '02',
    icon: IconWeb,
    title: 'Web App Development',
    description:
      'Website modern, SEO-friendly, dan berperforma tinggi. Dibangun dengan Next.js App Router dan Tailwind CSS untuk pengalaman terbaik.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    accentColor: 'bg-slate-50',
    accentText: 'text-slate-700',
    accentGlow: 'rgba(100,116,139,0.10)',
  },
  {
    num: '03',
    icon: IconStore,
    title: 'Jasa Rilis Play Store',
    description:
      'Rilis aplikasi ke Google Play Store menggunakan developer account kami. Proses aman, cepat, dan terdokumentasi dengan baik.',
    tags: ['Play Console', 'APK/AAB Signing', 'Publishing', 'App Review'],
    accentColor: 'bg-emerald-50',
    accentText: 'text-emerald-600',
    accentGlow: 'rgba(16,185,129,0.10)',
  },
  {
    num: '04',
    icon: IconBug,
    title: 'Express Bug Fixing',
    description:
      'Perbaikan error atau penambahan fitur kilat pada proyek Flutter atau Next.js yang sudah berjalan. Diagnosis cepat, solusi tepat.',
    tags: ['Debug', 'Refactoring', 'API Integration', 'Performance'],
    badge: 'Fast Delivery',
    accentColor: 'bg-amber-50',
    accentText: 'text-amber-600',
    accentGlow: 'rgba(245,158,11,0.10)',
  },
];

/* ─── CARD ────────────────────────────────────────────────────────── */
function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className={[
        'group relative rounded-3xl border bg-white p-8 overflow-hidden',
        'transition-all duration-300 ease-out cursor-default',
        hovered
          ? '-translate-y-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.08)]'
          : 'shadow-[0_2px_12px_rgba(0,0,0,0.04)]',
        service.featured
          ? 'border-blue-200/70'
          : 'border-slate-200/70',
      ].join(' ')}
      style={{
        animationDelay: `${index * 80}ms`,
      }}
    >
      {/* Mouse-follow spotlight */}
      {hovered && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, ${service.accentGlow}, transparent 70%)`,
          }}
        />
      )}

      {/* Featured glow top border */}
      {service.featured && (
        <div
          className="absolute top-0 left-6 right-6 h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)',
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {/* Top row: number + badge */}
        <div className="flex items-center justify-between mb-6">
          <span
            className="font-mono text-[11px] font-semibold tracking-widest text-slate-400"
            aria-hidden="true"
          >
            {service.num}
          </span>
          {service.badge && (
            <span
              className={[
                'inline-flex items-center rounded-full px-2.5 py-0.5 text-[10.5px] font-semibold tracking-wide',
                service.featured
                  ? 'bg-blue-50 text-blue-600 border border-blue-100'
                  : 'bg-amber-50 text-amber-600 border border-amber-100',
              ].join(' ')}
            >
              {service.badge}
            </span>
          )}
        </div>

        {/* Icon */}
        <div
          className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${service.accentColor} ${service.accentText} border border-white/80 shadow-sm`}
          style={{ boxShadow: `0 0 0 1px ${service.accentGlow.replace('0.12','0.2').replace('0.10','0.18')}` }}
        >
          <service.icon className="h-[22px] w-[22px]" />
        </div>

        {/* Title */}
        <h3 className="mb-3 text-[20px] font-bold leading-snug tracking-tight text-slate-900">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mb-6 text-[14px] leading-relaxed text-slate-500">
          {service.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-slate-50 border border-slate-200/80 px-3 py-1 text-[11px] font-medium text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA link */}
        <a
          href="#contact"
          className={[
            'inline-flex items-center gap-1.5 text-[13px] font-semibold transition-all duration-200',
            service.featured ? 'text-blue-600 hover:text-blue-700' : 'text-slate-500 hover:text-slate-800',
          ].join(' ')}
        >
          Pelajari lebih lanjut
          <IconArrow
            className={[
              'h-3.5 w-3.5 transition-transform duration-200',
              hovered ? 'translate-x-1' : '',
            ].join(' ')}
          />
        </a>
      </div>
    </div>
  );
}

/* ─── SECTION ─────────────────────────────────────────────────────── */
export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 60%)' }}
      aria-labelledby="services-heading"
    >
      {/* Decorative blobs */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full opacity-40"
        style={{
          background:
            'radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -left-32 h-[350px] w-[350px] rounded-full"
        style={{
          background:
            'radial-gradient(ellipse, rgba(16,185,129,0.05) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        aria-hidden="true"
      />

      {/* Noise texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px',
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-4 py-1.5">
            {/* <span className="h-1.5 w-1.5 rounded-full bg-blue-500" aria-hidden="true" /> */}
            <span className="text-[11.5px] font-semibold uppercase tracking-widest text-blue-600">
              Layanan
            </span>
          </div>

          <h2
            id="services-heading"
            className="mx-auto max-w-2xl text-[2.4rem] font-black leading-[1.08] tracking-[-0.035em] text-slate-900 md:text-[3.2rem]"
          >
            Solusi Digital{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Lengkap
            </span>{' '}
            untuk Bisnis Anda
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-slate-500">
            Dari konsep hingga produk siap rilis — semua dikerjakan dengan standar
            engineering modern dan desain yang bersih.
          </p>
        </div>

        {/* Bento grid: 2 col desktop, 1 col mobile */}
        <div className="grid gap-5 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.num} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          className="mt-14 flex flex-col items-center justify-between gap-5 rounded-3xl border border-slate-200/70 bg-white/70 px-8 py-6 backdrop-blur-sm sm:flex-row"
          style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
        >
          <div>
            <p className="text-[15px] font-bold text-slate-900">
              Tidak yakin layanan mana yang tepat?
            </p>
            <p className="mt-0.5 text-[13px] text-slate-500">
              Konsultasikan kebutuhan Anda, gratis dan tanpa komitmen.
            </p>
          </div>
          <a
            href="https://wa.me/+6288987163167?text=Halo,%20saya%20tertarik%20konsultasi%20mengenai%20proyek%20IT."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-[13.5px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
              boxShadow:
                '0 0 0 1px rgba(59,130,246,0.35), 0 3px 12px rgba(59,130,246,0.28)',
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </section>
  );
}