// src/components/sections/Team.tsx
"use client";

import Image from "next/image";

const team = [
  {
    name: "Kadek Dwi Gitayana",
    role: "Flutter & Mobile Developer",
    // motto: "Kode yang baik adalah kode yang berbicara sendiri.",
    education: "S1 Pendidikan Teknik Informatika – Universitas Pendidikan Ganesha",
    photo: "",  
    initials: "DW",
    gradient: "from-blue-500 to-cyan-400",
    gradientRaw: { from: "#3b82f6", to: "#22d3ee" },
    skills: ["Flutter", "Dart", "Firebase", "REST API"],
    socialWa: "https://wa.me/+6281234567890",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Kadek Widiadnyana",
    role: "Full-Stack Web Developer",
    // motto: "Performa bukan fitur, itu fondasi.",
    education: "S1 Ilmu Komputer – Universitas Pendidikan Ganesha",
    photo: "/team/widi2.jpeg",
    initials: "KW",
    gradient: "from-violet-500 to-purple-400",
    gradientRaw: { from: "#8b5cf6", to: "#c084fc" },
    skills: ["Next.js", "React", "Node.js", "Python"],
    socialWa: "https://wa.me/+6281234567891",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Kadek Desak Yuniari",
    role: "Project Manager",
    // motto: "Desain bukan hanya tampilan — itu bagaimana rasanya.",
    education: "S1 Pendidikan Guru Sekolah Dasar – Universitas Pendidikan Ganesha",
    photo: "",
    initials: "CD",
    gradient: "from-pink-500 to-rose-400",
    gradientRaw: { from: "#ec4899", to: "#fb7185" },
    skills: ["Planning", "Communication", "User Research"],
    socialWa: "https://wa.me/+6281234567892",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
  },
];

/* ── SVG Icons (unchanged) ──────────────────────────────────── */
const IconGithub = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
  </svg>
);
const IconLinkedin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
  </svg>
);
const IconWhatsapp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
  </svg>
);
const IconGradCap = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"/>
    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.5z"/>
  </svg>
);
/* ─────────────────────────────────────────────────────────── */

export default function Team() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700;9..40,800;9..40,900&display=swap');

        .tm2-root { font-family: 'DM Sans', system-ui, sans-serif; }

        @keyframes tm2-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tm2-up { animation: tm2-up 0.7s cubic-bezier(0.22,1,0.36,1) both; }
        .tm2-d0 { animation-delay: 0.05s; }
        .tm2-d1 { animation-delay: 0.12s; }
        .tm2-d2 { animation-delay: 0.20s; }
        .tm2-d5 { animation-delay: 0.44s; }

        .tm2-card {
          transition:
            transform 0.5s cubic-bezier(0.22,1,0.36,1),
            box-shadow 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .tm2-card:hover { transform: translateY(-8px); }

        .tm2-photo-inner {
          transition: transform 0.8s cubic-bezier(0.22,1,0.36,1);
        }
        .tm2-card:hover .tm2-photo-inner { transform: scale(1.06); }

        .tm2-photo-glow {
          transition: opacity 0.5s ease;
          opacity: 0;
        }
        .tm2-card:hover .tm2-photo-glow { opacity: 1; }

        .tm2-card-ambient {
          transition: opacity 0.5s ease;
          opacity: 0;
          pointer-events: none;
        }
        .tm2-card:hover .tm2-card-ambient { opacity: 1; }

        .tm2-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(160deg, transparent, transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          transition: background 0.5s ease;
          z-index: 10;
        }
        .tm2-card:hover::after {
          background: linear-gradient(160deg, rgba(255,255,255,0.55) 0%, rgba(99,102,241,0.12) 60%, rgba(139,92,246,0.08) 100%);
        }

        .tm2-chip {
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .tm2-chip:hover {
          background: rgba(99,102,241,0.07);
          color: #4f46e5;
          border-color: rgba(99,102,241,0.2);
        }

        .tm2-social {
          transition: background 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .tm2-social:hover { transform: translateY(-2px); }
        .tm2-social-wa:hover { background: #f0fdf4; color: #16a34a; border-color: #86efac; box-shadow: 0 4px 14px -4px #4ade8050; }
        .tm2-social-gh:hover { background: #fafafa; color: #09090b; border-color: #d4d4d8; box-shadow: 0 4px 14px -4px #71717a40; }
        .tm2-social-li:hover { background: #eff6ff; color: #1d4ed8; border-color: #93c5fd; box-shadow: 0 4px 14px -4px #3b82f650; }

        @keyframes tm2-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .tm2-cta {
          background-image: linear-gradient(90deg, #0f172a 0%, #1e293b 40%, #0f172a 80%);
          background-size: 200% auto;
          transition: box-shadow 0.3s ease, transform 0.25s ease;
        }
        .tm2-cta:hover {
          animation: tm2-shimmer 1.8s linear infinite;
          box-shadow: 0 10px 30px -8px rgba(15,23,42,0.4);
          transform: translateY(-1px);
        }
      `}</style>

      <section id="team" className="tm2-root relative py-32 overflow-hidden bg-[#f9f9fb]">

        {/* ── Background atmosphere ── */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
          <div className="absolute -top-56 -left-48 w-[700px] h-[700px] rounded-full bg-indigo-200/20 blur-[140px]" />
          <div className="absolute -bottom-32 -right-40 w-[600px] h-[600px] rounded-full bg-violet-200/18 blur-[120px]" />
          <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-sky-200/15 blur-[100px]" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.018]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="tm2-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="#6366f1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tm2-dots)"/>
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-6 max-w-6xl">

          {/* ══ HEADER ═══════════════════════════════════════ */}
          <div className="text-center mb-20">
            <div className="tm2-up tm2-d0 inline-flex items-center gap-2 mb-5">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-indigo-500/80">Tim Kami</span>
            </div>

            <h2
              className="tm2-up tm2-d1 font-black tracking-[-0.035em] text-neutral-950 mb-5 leading-[1.06]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)" }}
            >
              Orang-orang Di{" "}
              <span style={{
                background: "linear-gradient(135deg, #6366f1 0%, #38bdf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Balik Layar
              </span>
            </h2>

            <p className="tm2-up tm2-d2 text-[15px] text-neutral-500 max-w-md mx-auto leading-relaxed">
              Tim developer muda berdedikasi membangun produk digital berkualitas
              tinggi dengan presisi dan standar yang tidak pernah dikompromikan.
            </p>

            <div
              className="tm2-up tm2-d2 mt-10 mx-auto w-16 h-px rounded-full"
              style={{ background: "linear-gradient(90deg, transparent, #cbd5e1, transparent)" }}
            />
          </div>

          {/* ══ TEAM GRID ════════════════════════════════════ */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {team.map((member, index) => (
              <article
                key={index}
                className="tm2-card tm2-up group relative flex flex-col rounded-[32px] bg-white border border-neutral-100/80 overflow-hidden"
                style={{
                  animationDelay: `${0.1 + index * 0.12}s`,
                  boxShadow: "0 1px 2px rgba(0,0,0,0.03), 0 6px 24px -6px rgba(0,0,0,0.07)",
                }}
              >
                {/* Ambient glow behind card */}
                <div
                  className="tm2-card-ambient absolute -inset-6 rounded-[48px] blur-3xl -z-10"
                  style={{ background: `radial-gradient(ellipse, ${member.gradientRaw.from}18, transparent 70%)` }}
                />

                {/* ── PHOTO ─────────────────────────────────── */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "3/4", maxHeight: "380px" }}>

                  {member.photo ? (
                    /* Real photo */
                    <div className="tm2-photo-inner absolute inset-0">
                      <Image
                        src={member.photo}
                        alt={`Foto ${member.name}`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  ) : (
                    /* Premium initials fallback */
                    <div
                      className="tm2-photo-inner absolute inset-0 flex items-center justify-center"
                      style={{
                        background: `linear-gradient(160deg, ${member.gradientRaw.from}1a 0%, ${member.gradientRaw.to}10 100%)`,
                      }}
                    >
                      {/* Decorative rings */}
                      <div className="absolute w-52 h-52 rounded-full border opacity-[0.07]"
                        style={{ borderColor: member.gradientRaw.from }} />
                      <div className="absolute w-72 h-72 rounded-full border opacity-[0.04]"
                        style={{ borderColor: member.gradientRaw.from }} />
                      {/* Initials card */}
                      <div
                        className="relative z-10 w-32 h-32 rounded-[28px] flex items-center justify-center"
                        style={{
                          background: `linear-gradient(145deg, ${member.gradientRaw.from}, ${member.gradientRaw.to})`,
                          boxShadow: `0 24px 64px -12px ${member.gradientRaw.from}55`,
                        }}
                      >
                        <span
                          className="text-white select-none font-black"
                          style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", letterSpacing: "-0.04em" }}
                        >
                          {member.initials}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Bottom gradient fade — blends photo into card body */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.55) 25%, rgba(255,255,255,0) 55%)",
                    }}
                  />

                  {/* Hover color glow */}
                  <div
                    className="tm2-photo-glow absolute inset-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse 80% 40% at 50% 100%, ${member.gradientRaw.from}20, transparent 70%)`,
                    }}
                  />

                  {/* Index number */}
                  <span
                    className="absolute top-4 left-4 text-[11px] font-bold tabular-nums tracking-[0.18em] text-neutral-400/50"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Role badge — glassmorphism */}
                  <div className="absolute top-4 right-4">
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/75 backdrop-blur-md border border-white/50 shadow-sm"
                      style={{ color: member.gradientRaw.from }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: member.gradientRaw.from }} />
                      {member.role.split(" ").slice(-1)[0]}
                    </span>
                  </div>
                </div>

                {/* ── CONTENT ──────────────────────────────── */}
                <div className="flex flex-col flex-1 px-6 pt-4 pb-6">

                  {/* Name */}
                  <h3 className="text-[18px] font-black tracking-[-0.025em] text-neutral-950 leading-tight mb-1">
                    {member.name}
                  </h3>

                  {/* Full role */}
                  <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-4">
                    {member.role}
                  </p>


                  {/* Education */}
                  <div className="flex items-start gap-2 mb-5">
                    <span className="text-neutral-400 mt-[2px] shrink-0"><IconGradCap /></span>
                    <p className="text-[11.5px] text-neutral-400 leading-snug">{member.education}</p>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="tm2-chip px-2.5 py-[5px] rounded-full border border-neutral-200 bg-neutral-50 text-[11px] font-semibold text-neutral-500 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex-1" />

                  {/* Divider */}
                  <div className="w-full h-px bg-neutral-100 mb-5" />

                  {/* Social */}
                  <div className="flex items-center gap-2">
                    <a href={member.socialWa} target="_blank" rel="noopener noreferrer" title="WhatsApp"
                      className="tm2-social tm2-social-wa flex h-8 w-8 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-500">
                      <IconWhatsapp />
                    </a>
                    <a href={member.github} target="_blank" rel="noopener noreferrer" title="GitHub"
                      className="tm2-social tm2-social-gh flex h-8 w-8 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-500">
                      <IconGithub />
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn"
                      className="tm2-social tm2-social-li flex h-8 w-8 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-500">
                      <IconLinkedin />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* ══ CTA ══════════════════════════════════════════ */}
          <div className="tm2-up tm2-d5 mt-20 flex flex-col sm:flex-row items-center justify-center gap-4">
            <p className="text-[14px] text-neutral-500">Tertarik bergabung bersama tim kami?</p>
            <a
              href="https://wa.me/+6288987163167"
              target="_blank" rel="noopener noreferrer"
              className="tm2-cta inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-[13px] font-bold"
            >
              Bergabung Bersama Kami
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}