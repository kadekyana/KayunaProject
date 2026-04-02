// src/components/sections/Hero.tsx

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-surface-border">
      {/* Efek Latar Belakang - Grid Terang yang Halus */}
      <div className="absolute inset-0 z-0 h-full w-full bg-background bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      {/* Sinar Gradien Biru di Pojok untuk mempermanis */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 h-[400px] w-[600px] rounded-full bg-primary/5 blur-[100px]"></div>

      <div className="container relative z-10 mx-auto px-6 py-24 text-center">
        {/* Lencana Kecil */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary shadow-sm mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Rilis Cepat ke Google Play Store
        </div>

        {/* Headline Utama */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-foreground mb-8">
          Ubah Ide <span className="text-primary">Aplikasi Anda</span> <br />
          Menjadi Kenyataan <span className="relative inline-block">Cepat <span className="absolute bottom-1 left-0 w-full h-2 bg-primary/20 rounded"></span></span>.
        </h1>

        <p className="max-w-3xl mx-auto text-xl text-foreground/70 leading-relaxed mb-12">
          Jasa *development* profesional untuk **Mobile (Flutter)** dan **Web (Next.js)**. Mulai dari ide mentah, perbaikan *bug* kilat, hingga rilis langsung ke **Google Play Console** milik saya.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/+6288987163167?text=Halo,%20saya%20tertarik%20konsultasi%20mengenai%20proyek%20IT."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-primary px-10 text-lg font-bold text-white transition-all hover:bg-primary-hover hover:-translate-y-1 shadow-lg shadow-primary/30"
          >
            Konsultasikan Proyek (Gratis)
            <span className="font-sans text-xl">📱</span>
          </a>
          
          <a
            href="#portfolio"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-surface-border bg-white px-10 text-lg font-medium text-foreground transition hover:border-primary/30 hover:bg-surface hover:-translate-y-1 shadow-sm"
          >
            Lihat Hasil Kerja
          </a>
        </div>
      </div>
    </section>
  );
}