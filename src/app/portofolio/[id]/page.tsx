// src/app/portofolio/[id]/page.tsx
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { notFound } from "next/navigation";

// Opsional: Revalidate data setiap 60 detik
export const revalidate = 60;

// PERUBAHAN DI SINI: Tipe params sekarang adalah Promise
type Props = {
  params: Promise<{ id: string }>;
};

export default async function PortfolioDetail({ params }: Props) {
  // PERUBAHAN DI SINI: Kita harus 'await' params sebelum mengambil .id
  const resolvedParams = await params;
  const projectId = resolvedParams.id;

  // 2. Mengambil SATU data spesifik dari Supabase berdasarkan ID
  const { data: project, error } = await supabase
    .from('portfolios')
    .select('*')
    .eq('id', projectId) // Ambil yang ID-nya cocok
    .single(); // Pastikan hanya ambil satu baris

  // 3. Jika data tidak ditemukan atau error, arahkan ke halaman 404
  if (error || !project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Tombol Kembali */}
        <Link href="/#portfolio" className="inline-flex items-center gap-2 text-primary hover:text-primary-hover mb-8 transition-colors">
          <span>←</span> Kembali ke Beranda
        </Link>

        {/* Header Proyek */}
        <div className="mb-12">
          <span className="text-sm font-bold tracking-wider text-primary uppercase mb-4 block">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground mb-6">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1.5 rounded-lg bg-surface border border-surface-border text-sm font-medium text-foreground/80">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Area Gambar (Hero Image) */}
        <div className={`w-full h-[400px] md:h-[500px] rounded-3xl bg-gradient-to-br ${project.gradient} border border-surface-border mb-12 flex items-center justify-center`}>
           <span className="text-foreground/30 font-medium">Gambar Representasi Proyek</span>
        </div>

        {/* Konten/Deskripsi Detail */}
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Tentang Proyek Ini</h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            {project.description}
          </p>

          <h3 className="text-xl font-bold mb-3 text-foreground">Tantangan & Solusi</h3>
          <p className="text-foreground/70 leading-relaxed">
             Di sini nanti Anda bisa menambahkan kolom baru di database Supabase Anda untuk menceritakan secara detail bagaimana Anda membangun aplikasi ini.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-16 p-8 rounded-3xl bg-surface border border-surface-border text-center">
          <h3 className="text-2xl font-bold mb-4">Butuh aplikasi serupa?</h3>
          <a href="https://wa.me/+6288987163167?text=Halo,%20saya%20tertarik%20konsultasi%20mengenai%20proyek%20IT." target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 rounded-xl bg-primary text-black font-bold hover:bg-primary-hover transition-colors text-white">
            Diskusikan Proyek Anda
          </a>
        </div>

      </div>
    </div>
  );
}