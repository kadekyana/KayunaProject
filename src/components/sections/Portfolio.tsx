import { supabase } from "@/lib/supabase";
import Link from 'next/link';

export const revalidate = 60;

export default async function Portfolio() {
  const { data: portfolios, error } = await supabase
    .from('portfolios')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Error fetching portfolios:", error.message);
    return (
      <div className="py-24 text-center text-red-400/80 font-medium">
        Gagal memuat data portofolio.
      </div>
    );
  }

  return (
    <section
      id="portfolio"
      className="relative py-32 overflow-hidden bg-[#fafafa]"
      style={{ fontFamily: "'DM Sans', 'Geist', 'Inter', system-ui, sans-serif" }}
    >
      {/* ── Ambient background blobs ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Top-left large glow */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-200/30 blur-[120px]" />
        {/* Bottom-right glow */}
        <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] rounded-full bg-sky-200/25 blur-[100px]" />
        {/* Center faint gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-indigo-100/20 blur-[140px]" />

        {/* Subtle dot grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.025]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#6366f1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl">

        {/* ── Section header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-5">
              {/* <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> */}
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-indigo-500/80 leading-none">
                Karya Terbaik
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black tracking-[-0.03em] leading-[1.05] text-neutral-950">
              Bukti Nyata,
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">Bukan Janji.</span>
                {/* Underline accent */}
                <span
                  aria-hidden
                  className="absolute left-0 -bottom-1 w-full h-[5px] rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #818cf8 0%, #38bdf8 100%)',
                    opacity: 0.35,
                  }}
                />
              </span>
            </h2>
          </div>

          <div className="lg:max-w-sm">
            <p className="text-[15px] leading-relaxed text-neutral-500 mb-6">
              Proyek pilihan yang pernah dikerjakan — dari aplikasi mobile hingga
              infrastruktur backend yang tangguh. Setiap detail dibuat dengan presisi.
            </p>
            <Link
              href="/portofolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-800 hover:text-indigo-600 transition-colors duration-200 group"
            >
              Lihat semua proyek
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ── Empty state ── */}
        {(!portfolios || portfolios.length === 0) && (
          <div className="flex flex-col items-center justify-center py-24 rounded-3xl border border-dashed border-neutral-200 bg-white/50">
            <div className="w-14 h-14 rounded-2xl bg-neutral-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-neutral-400">Belum ada portofolio yang ditambahkan.</p>
          </div>
        )}

        {/* ── Portfolio grid ── */}
        {portfolios && portfolios.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolios.map((item, index) => (
              <PortfolioCard key={item.id} item={item} index={index} />
            ))}
          </div>
        )}

        {/* ── Bottom CTA strip ── */}
        {portfolios && portfolios.length > 0 && (
          <div className="mt-16 flex justify-center">
            <Link
              href="/portofolio"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-neutral-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/50 text-sm font-semibold text-neutral-700 hover:text-indigo-700 transition-all duration-300 shadow-sm hover:shadow-indigo-100/80"
            >
              Eksplorasi semua proyek
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>

      {/* ── Inline styles for animations (no extra deps) ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900&display=swap');

        .portfolio-card {
          transform: translateY(0px);
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1),
                      border-color 0.3s ease;
        }
        .portfolio-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px -12px rgba(0,0,0,0.10), 0 0 0 1px rgba(99,102,241,0.08);
        }

        .portfolio-card-img img {
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .portfolio-card:hover .portfolio-card-img img {
          transform: scale(1.06);
        }

        .portfolio-card .cta-arrow {
          transition: transform 0.2s ease, opacity 0.2s ease;
          opacity: 0;
          transform: translateX(-4px);
        }
        .portfolio-card:hover .cta-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .portfolio-card .card-glow {
          transition: opacity 0.4s ease;
          opacity: 0;
        }
        .portfolio-card:hover .card-glow {
          opacity: 1;
        }

        .tag-chip {
          transition: background 0.2s, color 0.2s;
        }
        .portfolio-card:hover .tag-chip {
          background: rgba(99,102,241,0.07);
          color: #4f46e5;
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   PortfolioCard — extracted as a server component sub-component
   (works in Next.js App Router; no client directive needed for
   CSS-only hover effects)
───────────────────────────────────────────────────────────────── */
function PortfolioCard({ item, index }: { item: any; index: number }) {
  /* Category color mapping */
  const categoryColors: Record<string, { bg: string; text: string; dot: string }> = {
    'Website': { bg: 'bg-sky-50', text: 'text-sky-600', dot: 'bg-sky-400' },
    'Mobile App': { bg: 'bg-violet-50', text: 'text-violet-600', dot: 'bg-violet-400' },
    'Backend': { bg: 'bg-emerald-50', text: 'text-emerald-700', dot: 'bg-emerald-400' },
    'Dashboard': { bg: 'bg-amber-50', text: 'text-amber-600', dot: 'bg-amber-400' },
    'SaaS': { bg: 'bg-rose-50', text: 'text-rose-600', dot: 'bg-rose-400' },
  };

  const catStyle = categoryColors[item.category] ?? {
    bg: 'bg-indigo-50',
    text: 'text-indigo-600',
    dot: 'bg-indigo-400',
  };

  /* Fallback gradient per index */
  const fallbackGradients = [
    'from-indigo-100 via-violet-50 to-sky-100',
    'from-sky-100 via-cyan-50 to-teal-100',
    'from-rose-100 via-pink-50 to-orange-100',
    'from-amber-100 via-yellow-50 to-lime-100',
    'from-emerald-100 via-teal-50 to-cyan-100',
    'from-violet-100 via-purple-50 to-indigo-100',
  ];
  const fallback = fallbackGradients[index % fallbackGradients.length];

  const paddedIndex = String(index + 1).padStart(2, '0');

  return (
    <Link
      href={`/portofolio/${item.id}`}
      className="portfolio-card group flex flex-col rounded-3xl border border-neutral-100 bg-white overflow-hidden"
      style={{
        boxShadow: '0 1px 3px 0 rgba(0,0,0,0.04), 0 4px 16px -2px rgba(0,0,0,0.05)',
      }}
    >
      {/* ── Glow overlay (hidden, shown on hover via CSS) ── */}
      <div
        aria-hidden
        className="card-glow pointer-events-none absolute inset-0 rounded-3xl z-10"
        style={{
          boxShadow: 'inset 0 0 0 1px rgba(99,102,241,0.15)',
        }}
      />

      {/* ── Image area ── */}
      <div
        className={`portfolio-card-img relative h-56 w-full overflow-hidden bg-gradient-to-br ${item.gradient || fallback}`}
      >
        {item.images && item.images.length > 0 ? (
          <>
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0) 50%)',
              }}
            />
          </>
        ) : (
          /* Premium empty image state */
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/40 backdrop-blur-sm flex items-center justify-center shadow-sm">
              <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 18h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v10.5a1.5 1.5 0 0 0 1.5 1.5Z" />
              </svg>
            </div>
            <span className="text-xs font-medium text-neutral-400/80">{item.title}</span>
          </div>
        )}

        {/* Project number — top left */}
        <span
          className="absolute top-4 left-4 text-[11px] font-bold tracking-widest text-white/70 tabular-nums"
          style={{ letterSpacing: '0.15em' }}
        >
          {paddedIndex}
        </span>

        {/* Featured badge — first card */}
        {index === 0 && (
          <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-[10px] font-semibold text-white tracking-wide">
            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
            Featured
          </span>
        )}
      </div>

      {/* ── Content area ── */}
      <div className="p-6 flex-1 flex flex-col">

        {/* Category badge */}
        <span
          className={`inline-flex items-center gap-1.5 w-fit px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide ${catStyle.bg} ${catStyle.text} mb-4`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${catStyle.dot}`} />
          {item.category}
        </span>

        {/* Title */}
        <h3 className="text-[17px] font-bold leading-snug tracking-[-0.02em] text-neutral-900 mb-2.5 group-hover:text-indigo-600 transition-colors duration-200">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-[13px] leading-relaxed text-neutral-500 mb-5 flex-1 line-clamp-2">
          {item.description}
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-neutral-100 mb-5" />

        {/* Tags + CTA row */}
        <div className="flex items-end justify-between gap-3">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {item.tags?.slice(0, 3).map((tag: string) => (
              <span
                key={tag}
                className="tag-chip px-2.5 py-1 rounded-lg bg-neutral-50 border border-neutral-100 text-[11px] font-medium text-neutral-500"
              >
                {tag}
              </span>
            ))}
            {item.tags?.length > 3 && (
              <span className="tag-chip px-2.5 py-1 rounded-lg bg-neutral-50 border border-neutral-100 text-[11px] font-medium text-neutral-400">
                +{item.tags.length - 3}
              </span>
            )}
          </div>

          {/* CTA */}
          <span className="flex-shrink-0 inline-flex items-center gap-1 text-[12px] font-semibold text-indigo-500 group-hover:text-indigo-600">
            View Project
            <svg
              className="cta-arrow w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}