import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 60;

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PortfolioDetail({ params }: Props) {
  const resolvedParams = await params;
  const projectId = resolvedParams.id;

  const { data: project, error } = await supabase
    .from("portfolios")
    .select("*")
    .eq("id", projectId)
    .single();

  if (error || !project) {
    notFound();
  }

  /* ── Category color mapping ── */
  const categoryColors: Record<string, { pill: string; glow: string }> = {
    Website:    { pill: "bg-sky-50 text-sky-600 border-sky-100",     glow: "from-sky-100/60 via-transparent to-transparent" },
    "Mobile App":{ pill: "bg-violet-50 text-violet-600 border-violet-100", glow: "from-violet-100/60 via-transparent to-transparent" },
    Backend:    { pill: "bg-emerald-50 text-emerald-700 border-emerald-100", glow: "from-emerald-100/60 via-transparent to-transparent" },
    Dashboard:  { pill: "bg-amber-50 text-amber-600 border-amber-100",  glow: "from-amber-100/60 via-transparent to-transparent" },
    SaaS:       { pill: "bg-rose-50 text-rose-600 border-rose-100",     glow: "from-rose-100/60 via-transparent to-transparent" },
  };
  const cat = categoryColors[project.category] ?? {
    pill: "bg-indigo-50 text-indigo-600 border-indigo-100",
    glow: "from-indigo-100/60 via-transparent to-transparent",
  };

  const hasMedia = project.video_url || (project.images && project.images.length > 0);

  return (
    <>
      {/* ─────────────── Google Font ─────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700;9..40,800;9..40,900&family=DM+Serif+Display:ital@0;1&display=swap');

        /* Page font */
        .pd-root { font-family: 'DM Sans', system-ui, sans-serif; }

        /* Fade-up entrance */
        @keyframes pd-fadeup {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pd-fadeup { animation: pd-fadeup 0.65s cubic-bezier(0.22,1,0.36,1) both; }
        .pd-delay-1 { animation-delay: 0.08s; }
        .pd-delay-2 { animation-delay: 0.16s; }
        .pd-delay-3 { animation-delay: 0.24s; }
        .pd-delay-4 { animation-delay: 0.35s; }
        .pd-delay-5 { animation-delay: 0.46s; }

        /* Image hover zoom */
        .pd-img-wrap img {
          transition: transform 0.7s cubic-bezier(0.22,1,0.36,1);
        }
        .pd-img-wrap:hover img { transform: scale(1.04); }

        /* Tag chip hover */
        .pd-tag {
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .pd-tag:hover {
          background: rgba(99,102,241,0.07);
          color: #4f46e5;
          border-color: rgba(99,102,241,0.2);
        }

        /* CTA button shimmer */
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .pd-cta-btn {
          background-size: 200% auto;
          background-image: linear-gradient(90deg, #4f46e5 0%, #7c3aed 40%, #4f46e5 80%);
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .pd-cta-btn:hover {
          animation: shimmer 1.8s linear infinite;
          box-shadow: 0 8px 32px -6px rgba(99,102,241,0.55);
          transform: translateY(-1px);
        }

        /* Video container */
        .pd-video-wrap video { display: block; }
      `}</style>

      <div className="pd-root min-h-screen bg-[#fafafa] pt-28 pb-32 relative overflow-hidden">

        {/* ── Ambient blobs ── */}
        <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
          <div className="absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full bg-indigo-200/20 blur-[130px]" />
          <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-sky-200/20 blur-[110px]" />
          <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] rounded-full bg-violet-100/20 blur-[120px]" />
          {/* dot grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.022]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pd-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="#6366f1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pd-dots)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 max-w-5xl">

          {/* ── Back link ── */}
          <div className="pd-fadeup mb-12">
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-neutral-500 hover:text-indigo-600 transition-colors duration-200 group"
            >
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Kembali ke Portfolio
            </Link>
          </div>

          {/* ══════════════════════════════════
              HERO HEADER
          ══════════════════════════════════ */}
          <header className="mb-16">
            {/* Category pill */}
            <div className="pd-fadeup pd-delay-1 mb-6">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold tracking-widest uppercase ${cat.pill}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h1
              className="pd-fadeup pd-delay-2 font-black tracking-[-0.035em] text-neutral-950 mb-8 leading-[1.05]"
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              }}
            >
              {project.title}
            </h1>

            {/* Meta row — tags + CTA */}
            <div className="pd-fadeup pd-delay-3 flex flex-wrap items-center gap-3">
              <div className="flex flex-wrap gap-2 flex-1">
                {project.tags?.map((tag: string) => (
                  <span
                    key={tag}
                    className="pd-tag px-3 py-1.5 rounded-full border border-neutral-200 bg-white text-[12px] font-semibold text-neutral-500 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-[13px] font-bold transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-neutral-900/20 group"
                >
                  Kunjungi Proyek
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-px group-hover:-translate-y-px"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10M7 7h10v10" />
                  </svg>
                </a>
              )}
            </div>

            {/* Hairline divider */}
            <div className="pd-fadeup pd-delay-4 mt-10 w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
          </header>

          {/* ══════════════════════════════════
              MEDIA SHOWCASE
          ══════════════════════════════════ */}
          <section className="pd-fadeup pd-delay-4 mb-20 space-y-5">

            {/* Video */}
            {project.video_url && (
              <div className="pd-video-wrap w-full rounded-[28px] overflow-hidden border border-neutral-900/10 bg-neutral-950 shadow-[0_24px_80px_-16px_rgba(0,0,0,0.18)]">
                <video
                  controls
                  className="w-full h-auto max-h-[640px] object-contain"
                  src={project.video_url}
                >
                  Browser Anda tidak mendukung tag video.
                </video>
              </div>
            )}

            {/* Images */}
            {project.images && project.images.length > 0 ? (
              <div
                className={`grid gap-4 ${
                  project.images.length === 1
                    ? "grid-cols-1"
                    : project.images.length === 2
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {project.images.map((imgUrl: string, index: number) => (
                  <div
                    key={index}
                    className={`pd-img-wrap rounded-[22px] overflow-hidden border border-neutral-100 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.08)] relative bg-neutral-50 ${
                      index === 0 && project.images.length >= 3
                        ? "md:col-span-2"
                        : ""
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`Screenshot ${index + 1} — ${project.title}`}
                      className="w-full h-auto object-cover"
                    />
                    {/* Subtle overlay */}
                    <div
                      aria-hidden
                      className="absolute inset-0 rounded-[22px] ring-1 ring-inset ring-black/[0.04] pointer-events-none"
                    />
                  </div>
                ))}
              </div>
            ) : (
              !project.video_url && (
                /* Empty state */
                <div
                  className={`w-full h-[420px] rounded-[28px] border border-dashed border-neutral-200 bg-gradient-to-br ${
                    project.gradient || "from-indigo-50 via-sky-50 to-violet-50"
                  } flex flex-col items-center justify-center gap-4`}
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/60 shadow-sm flex items-center justify-center">
                    <svg className="w-7 h-7 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 18h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v10.5a1.5 1.5 0 0 0 1.5 1.5Z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-neutral-400">Belum ada media yang diunggah</p>
                </div>
              )
            )}
          </section>

          {/* ══════════════════════════════════
              CONTENT — About & Challenge
          ══════════════════════════════════ */}
          <section className="pd-fadeup pd-delay-5 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 lg:gap-16 items-start">

              {/* Left — main description */}
              <div>
                {/* Section label */}
                <div className="inline-flex items-center gap-2 mb-5">
                  <span className="w-1 h-4 rounded-full bg-indigo-500" />
                  <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-indigo-500/80">
                    Tentang Proyek
                  </span>
                </div>

                <h2
                  className="text-3xl md:text-4xl font-black tracking-[-0.03em] text-neutral-950 mb-6 leading-tight"
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                >
                  Gambaran Lengkap
                </h2>

                <p className="text-[15px] leading-[1.85] text-neutral-600 whitespace-pre-wrap">
                  {project.description}
                </p>
              </div>

              {/* Right — quick facts card */}
              <aside className="lg:sticky lg:top-28">
                <div className="rounded-[20px] border border-neutral-100 bg-white p-6 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.07)]">
                  <p className="text-[11px] font-bold tracking-widest uppercase text-neutral-400 mb-4">Detail Proyek</p>

                  <dl className="space-y-4">
                    <div>
                      <dt className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1">Kategori</dt>
                      <dd className="text-sm font-semibold text-neutral-800">{project.category}</dd>
                    </div>

                    {project.tags && project.tags.length > 0 && (
                      <div>
                        <dt className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-2">Teknologi</dt>
                        <dd className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag: string) => (
                            <span key={tag} className="px-2 py-0.5 rounded-md bg-neutral-50 border border-neutral-100 text-[11px] font-medium text-neutral-600">
                              {tag}
                            </span>
                          ))}
                        </dd>
                      </div>
                    )}

                    {project.link && (
                      <div>
                        <dt className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1">Live URL</dt>
                        <dd>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1 transition-colors"
                          >
                            Buka Proyek
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10M7 7h10v10" />
                            </svg>
                          </a>
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>
              </aside>
            </div>
          </section>

          {/* ── Challenge & Solution ── */}
          <section className="mb-24">
            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent mb-16" />

            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-14 items-start">
              {/* Left label */}
              <div className="md:w-48 flex-shrink-0">
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="w-1 h-4 rounded-full bg-violet-500" />
                  <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-violet-500/80">
                    Tantangan
                  </span>
                </div>
                <h3
                  className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-neutral-950 leading-tight"
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                >
                  & Solusi
                </h3>
              </div>

              {/* Right content */}
              <div className="rounded-[20px] border border-neutral-100 bg-white/80 backdrop-blur-sm p-7 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.06)]">
                {/* Accent bar */}
                <div className="w-8 h-1 rounded-full bg-gradient-to-r from-violet-500 to-indigo-400 mb-5" />
                <p className="text-[15px] leading-[1.85] text-neutral-600 whitespace-pre-wrap">
                  {project.challenge_solution ||
                    "Penjelasan mendetail mengenai arsitektur, penyelesaian bug, dan proses rilis akan ditampilkan di sini."}
                </p>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
              CTA SECTION
          ══════════════════════════════════ */}
          <section className="relative">
            {/* Glow behind card */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-[32px] blur-[60px] opacity-30"
              style={{ background: "linear-gradient(135deg, #a5b4fc 0%, #38bdf8 100%)" }}
            />

            <div className="relative rounded-[32px] border border-white/60 bg-white/70 backdrop-blur-xl overflow-hidden shadow-[0_8px_60px_-12px_rgba(99,102,241,0.2)]">
              {/* Inner accent */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(165,180,252,0.18) 0%, transparent 70%)",
                }}
              />
              {/* Noise texture */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
                }}
              />

              <div className="relative px-8 py-14 md:py-20 text-center max-w-xl mx-auto">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-indigo-500/80">
                    Mari Berkolaborasi
                  </span>
                </div>

                <h3
                  className="font-black tracking-[-0.03em] text-neutral-950 mb-4 leading-tight"
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  }}
                >
                  Butuh solusi serupa<br />untuk bisnis Anda?
                </h3>

                <p className="text-[15px] text-neutral-500 leading-relaxed mb-10 max-w-sm mx-auto">
                  Tim kami siap membangun sistem IT yang solid, skalabel, dan
                  berkualitas tinggi — sesuai kebutuhan spesifik bisnis Anda.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="https://wa.me/+6288987163167?text=Halo,%20saya%20tertarik%20konsultasi%20mengenai%20proyek%20IT."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pd-cta-btn inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-white text-[14px] font-bold shadow-md"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Diskusikan Proyek Anda
                  </a>

                  <Link
                    href="/#portfolio"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-neutral-200 bg-white/80 hover:border-neutral-300 text-[13px] font-semibold text-neutral-600 hover:text-neutral-900 transition-all duration-200 shadow-sm"
                  >
                    Lihat Proyek Lain
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}