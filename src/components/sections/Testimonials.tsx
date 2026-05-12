// src/components/sections/Testimonials.tsx

const testimonials = [
  {
    name: "Ade Kurniawan",
    role: "CEO",
    company: "TokoBaju.id",
    photo: "",
    initials: "AK",
    gradientRaw: { from: "#6366f1", to: "#8b5cf6" },
    rating: 5,
    review:
      "Website toko kami jadi jauh lebih profesional. Penjualan online meningkat signifikan sejak launch. Tim sangat responsif dan hasilnya melebihi ekspektasi.",
    highlight: "Penjualan online meningkat signifikan",
    projectType: "E-commerce Website",
    featured: true,
  },
  {
    name: "Luh Putu Ariani",
    role: "Founder",
    company: "ArtiSpa Bali",
    photo: "",
    initials: "LA",
    gradientRaw: { from: "#ec4899", to: "#f43f5e" },
    rating: 5,
    review:
      "Aplikasi booking spa kami sekarang berjalan sangat smooth. Client bisa booking langsung dari HP, dan sistem notifikasi-nya bekerja sempurna.",
    highlight: "berjalan sangat smooth",
    projectType: "Mobile App (Flutter)",
    featured: false,
  },
  {
    name: "Putu Budi Santoso",
    role: "Direktur Operasional",
    company: "CV Dharma Teknik",
    photo: "",
    initials: "PB",
    gradientRaw: { from: "#0ea5e9", to: "#22d3ee" },
    rating: 5,
    review:
      "Dashboard admin yang dibuat sangat membantu monitoring stok dan penjualan harian kami. Proses maintenance-nya cepat dan profesional.",
    highlight: "monitoring stok dan penjualan harian",
    projectType: "Dashboard Admin",
    featured: false,
  },
  {
    name: "Ni Made Devi",
    role: "Co-founder",
    company: "Warung Digital",
    photo: "",
    initials: "MD",
    gradientRaw: { from: "#10b981", to: "#34d399" },
    rating: 5,
    review:
      "Backend system kami sekarang sangat stabil. API terintegrasi sempurna dengan aplikasi mobile. Komunikasi tim sangat lancar, deadline selalu tepat.",
    highlight: "sangat stabil",
    projectType: "Backend System",
    featured: false,
  },
  {
    name: "I Gede Mahendra",
    role: "Pemilik",
    company: "Mahendra Property",
    photo: "",
    initials: "GM",
    gradientRaw: { from: "#f59e0b", to: "#fbbf24" },
    rating: 5,
    review:
      "Website properti kami tampil sangat elegan dan modern. SEO-nya bagus dan sudah mulai dapat leads organik dari Google. Sangat worth it!",
    highlight: "leads organik dari Google",
    projectType: "Company Website",
    featured: false,
  },
  {
    name: "Kadek Ayu Lestari",
    role: "Manager",
    company: "Bali Fresh Market",
    photo: "",
    initials: "KA",
    gradientRaw: { from: "#8b5cf6", to: "#6366f1" },
    rating: 5,
    review:
      "Fitur UI/UX yang didesain sangat intuitif. Customer kami langsung bisa menggunakan aplikasi tanpa perlu panduan. Desainnya modern dan bersih.",
    highlight: "sangat intuitif",
    projectType: "UI/UX Design",
    featured: false,
  },
];

const stats = [
  { value: "20+", label: "Project Selesai" },
  { value: "100%", label: "Client Puas" },
  { value: "< 2 jam", label: "Response Time" },
  { value: "2 thn+", label: "Pengalaman" },
];

/* ── Star icon ──────────────────────────────────────────────── */
const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    width="13" height="13" viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor" strokeWidth={1.5}
    className={filled ? "text-amber-400" : "text-neutral-300"}
  >
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345z"
    />
  </svg>
);

/* ── Verified badge ─────────────────────────────────────────── */
const VerifiedIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="text-indigo-500">
    <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ── Quote icon ─────────────────────────────────────────────── */
const QuoteIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-indigo-100">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
  </svg>
);

export default function Testimonials() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700;9..40,800;9..40,900&display=swap');

        .ts-root { font-family: 'DM Sans', system-ui, sans-serif; }

        @keyframes ts-up {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ts-up { animation: ts-up 0.65s cubic-bezier(0.22,1,0.36,1) both; }
        .ts-d0 { animation-delay: 0.04s; }
        .ts-d1 { animation-delay: 0.10s; }
        .ts-d2 { animation-delay: 0.17s; }
        .ts-d3 { animation-delay: 0.24s; }

        /* Marquee */
        @keyframes ts-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ts-marquee-track {
          display: flex;
          width: max-content;
          animation: ts-marquee 38s linear infinite;
          will-change: transform;
        }
        .ts-marquee-track:hover { animation-play-state: paused; }

        /* Card */
        .ts-card {
          transition:
            transform 0.45s cubic-bezier(0.22,1,0.36,1),
            box-shadow 0.45s cubic-bezier(0.22,1,0.36,1);
          flex-shrink: 0;
        }
        .ts-card:hover { transform: translateY(-6px); }

        .ts-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(150deg, transparent, transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          transition: background 0.4s ease;
          z-index: 5;
        }
        .ts-card:hover::after {
          background: linear-gradient(150deg, rgba(255,255,255,0.5) 0%, rgba(99,102,241,0.12) 100%);
        }

        /* Avatar glow */
        .ts-avatar-glow {
          transition: opacity 0.4s ease;
          opacity: 0;
        }
        .ts-card:hover .ts-avatar-glow { opacity: 1; }

        /* Stat counter item */
        .ts-stat {
          transition: transform 0.3s ease;
        }
        .ts-stat:hover { transform: translateY(-3px); }

        /* Highlight span */
        .ts-highlight {
          background: linear-gradient(135deg, #6366f1 0%, #38bdf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
        }
      `}</style>

      <section id="testimonials" className="ts-root relative py-32 overflow-hidden bg-white">

        {/* ── Ambient background ── */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
          <div className="absolute -top-52 -right-52 w-[700px] h-[700px] rounded-full bg-indigo-100/40 blur-[130px]" />
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-sky-100/35 blur-[110px]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-violet-100/20 blur-[100px]" />
          {/* dot grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="ts-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="#6366f1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ts-dots)"/>
          </svg>
        </div>

        <div className="relative z-10">

          {/* ══ HEADER ══════════════════════════════════════ */}
          <div className="container mx-auto px-6 max-w-6xl mb-16">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">

              {/* Left */}
              <div className="max-w-xl">
                <div className="ts-up ts-d0 inline-flex items-center gap-2 mb-5">
                  {/* <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> */}
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-indigo-500/80">
                    Testimoni Client
                  </span>
                </div>

                <h2
                  className="ts-up ts-d1 font-black tracking-[-0.035em] text-neutral-950 mb-4 leading-[1.05]"
                  style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
                >
                  Mereka Sudah{" "}
                  <span style={{
                    background: "linear-gradient(135deg, #6366f1 0%, #38bdf8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    Merasakannya.
                  </span>
                </h2>

                <p className="ts-up ts-d2 text-[15px] text-neutral-500 leading-relaxed max-w-md">
                  Bukan sekadar klaim — ini adalah suara nyata dari founder, pemilik UMKM,
                  dan tim startup yang telah mempercayakan proyeknya kepada kami.
                </p>
              </div>

              {/* Right — stat pills */}
              <div className="ts-up ts-d2 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4 flex-shrink-0">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="ts-stat flex flex-col items-center justify-center px-5 py-4 rounded-2xl border border-neutral-100 bg-white shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] text-center min-w-[90px]"
                  >
                    <span className="text-[22px] font-black tracking-tight text-neutral-950 leading-none mb-1"
                      style={{
                        background: "linear-gradient(135deg, #6366f1 0%, #38bdf8 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {s.value}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ══ MARQUEE / SCROLL TRACK ══════════════════════ */}
          {/* Fade masks */}
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10"
              style={{ background: "linear-gradient(to right, white 0%, transparent 100%)" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10"
              style={{ background: "linear-gradient(to left, white 0%, transparent 100%)" }}
            />

            {/* Marquee track — duplicated for seamless loop */}
            <div className="overflow-hidden py-4">
              <div className="ts-marquee-track gap-5 px-6">
                {[...testimonials, ...testimonials].map((item, i) => (
                  <TestimonialCard key={i} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Testimonial Card component ─────────────────────────────── */
function TestimonialCard({ item }: { item: typeof testimonials[0] }) {
  /* Highlight the phrase inside the review */
  const renderReview = (text: string, highlight: string) => {
    if (!highlight) return <span>{text}</span>;
    const idx = text.indexOf(highlight);
    if (idx === -1) return <span>{text}</span>;
    return (
      <>
        {text.slice(0, idx)}
        <span className="ts-highlight">{highlight}</span>
        {text.slice(idx + highlight.length)}
      </>
    );
  };

  return (
    <div
      className="ts-card relative flex flex-col rounded-[28px] border border-neutral-100/80 bg-white overflow-hidden"
      style={{
        width: "340px",
        boxShadow: "0 1px 2px rgba(0,0,0,0.03), 0 6px 20px -6px rgba(0,0,0,0.07)",
      }}
    >
      {/* Featured glow accent */}
      {item.featured && (
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none rounded-[28px]"
          style={{
            background: "radial-gradient(ellipse 90% 60% at 50% 0%, rgba(99,102,241,0.05) 0%, transparent 70%)",
          }}
        />
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Top row: avatar + meta + rating */}
        <div className="flex items-start justify-between gap-3 mb-5">
          {/* Avatar */}
          <div className="flex items-center gap-3">
            <div className="relative flex-shrink-0">
              {/* Glow */}
              <div
                className="ts-avatar-glow absolute -inset-2 rounded-[18px] blur-lg"
                style={{ background: `linear-gradient(135deg, ${item.gradientRaw.from}30, ${item.gradientRaw.to}20)` }}
              />
              <div
                className="relative w-11 h-11 rounded-[14px] flex items-center justify-center text-white font-black text-[14px] select-none"
                style={{
                  background: `linear-gradient(145deg, ${item.gradientRaw.from}, ${item.gradientRaw.to})`,
                  boxShadow: `0 6px 20px -6px ${item.gradientRaw.from}55`,
                }}
              >
                {item.photo ? (
                  <img src={item.photo} alt={item.name}
                    className="w-full h-full object-cover rounded-[14px]" />
                ) : (
                  item.initials
                )}
              </div>
            </div>

            {/* Name + company */}
            <div>
              <div className="flex items-center gap-1.5">
                <p className="text-[14px] font-bold text-neutral-900 leading-tight">{item.name}</p>
                <VerifiedIcon />
              </div>
              <p className="text-[11px] text-neutral-400 font-medium leading-tight mt-0.5">
                {item.role} · {item.company}
              </p>
            </div>
          </div>

          {/* Rating stars */}
          <div className="flex items-center gap-0.5 flex-shrink-0 mt-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} filled={i < item.rating} />
            ))}
          </div>
        </div>

        {/* Quote icon */}
        <div className="mb-3">
          <QuoteIcon />
        </div>

        {/* Review text */}
        <p className="text-[13.5px] leading-[1.8] text-neutral-600 flex-1 mb-5">
          {renderReview(item.review, item.highlight)}
        </p>

       
      </div>
    </div>
  );
}