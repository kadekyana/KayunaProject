const services = [
  {
    icon: "📱", // Ganti dengan SVG Ikon Flutter nanti
    title: "Mobile App Development",
    description: "Pembuatan aplikasi *cross-platform* yang cepat dan cantik menggunakan Flutter.",
    tags: ["Flutter", "Dart", "UX/UI Design"],
  },
  {
    icon: "💻", // Ganti dengan SVG Ikon Next.js
    title: "Web App Development",
    description: "Website modern, SEO-friendly, dan berperforman tinggi dengan Next.js & React.",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    icon: "🚀", // Ganti dengan SVG Ikon Play Store
    title: "Jasa Rilis Play Store",
    description: "Rilis aplikasi Anda ke Google Play Store menggunakan konsol developer saya. Proses cepat & aman.",
    tags: ["Play Console", "APK/AAB Signing", "Publishing"],
  },
  {
    icon: "🛠️", // Ganti dengan SVG Ikon Bug Fix
    title: "Express Bug Fixing",
    description: "Perbaikan *error* atau penambahan fitur cepat pada proyek Flutter/Golang yang sudah ada.",
    tags: ["Debug", "API Integration", "Refactoring"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Layanan Kami</h2>
          <p className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground">Solusi IT Lengkap Untuk Anda</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative rounded-3xl border border-surface-border bg-surface p-10 transition-all hover:border-primary/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Glow Efek saat Hover di Pojok */}
              <div className="absolute top-0 right-0 h-24 w-24 bg-primary/10 rounded-full blur-2xl opacity-0 transition-opacity group-hover:opacity-100"></div>

              <div className="flex items-start gap-6 relative z-10">
                {/* Ikon Lingkaran */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-surface-border bg-background/50 text-4xl text-primary shadow-inner">
                  {service.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-foreground/80 mb-5 leading-relaxed">{service.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2.5">
                    {service.tags.map((tag) => (
                      <span key={tag} className="inline-block rounded-full border border-surface-border bg-background px-3 py-1 text-xs font-medium text-foreground/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}