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
    .from('portfolios')
    .select('*')
    .eq('id', projectId)
    .single();

  if (error || !project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <Link href="/#portfolio" className="inline-flex items-center gap-2 text-primary hover:text-primary-hover mb-8 transition-colors font-medium">
          <span>←</span> Kembali ke Beranda
        </Link>

        <div className="mb-10">
          <span className="text-sm font-bold tracking-wider text-primary uppercase mb-4 block">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground mb-6">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {project.tags?.map((tag: string) => (
                <span key={tag} className="px-3 py-1.5 rounded-lg bg-surface border border-surface-border text-sm font-medium text-foreground/70">
                  {tag}
                </span>
              ))}
            </div>

  
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary/10 text-primary font-bold hover:bg-primary hover:text-white transition-all border border-primary/20"
              >
                Kunjungi Proyek 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <div className="mb-16 space-y-6">

          {project.video_url && (
            <div className="w-full rounded-3xl overflow-hidden border border-surface-border bg-black shadow-lg">
              <video 
                controls 
                className="w-full h-auto max-h-[600px] object-contain"
                src={project.video_url}
              >
                Browser Anda tidak mendukung tag video.
              </video>
            </div>
          )}


          {project.images && project.images.length > 0 ? (
            <div className={`grid gap-6 ${project.images.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
              {project.images.map((imgUrl: string, index: number) => (
                <div key={index} className="rounded-3xl overflow-hidden border border-surface-border shadow-sm">
        
                  <img 
                    src={imgUrl} 
                    alt={`Screenshot ${index + 1}`} 
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          ) : (
            !project.video_url && (
              <div className={`w-full h-[400px] md:h-[500px] rounded-3xl bg-gradient-to-br ${project.gradient || 'from-surface-border to-background'} border border-surface-border flex items-center justify-center`}>
                <span className="text-foreground/30 font-medium">Belum ada media yang diunggah</span>
              </div>
            )
          )}
        </div>

        <div className="max-w-none text-foreground/80 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Tentang Proyek Ini</h2>
            <p className="text-lg leading-relaxed whitespace-pre-wrap">
              {project.description}
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Tantangan & Solusi</h3>
            <p className="text-lg leading-relaxed whitespace-pre-wrap">
      
               {project.challenge_solution || "Penjelasan mendetail mengenai arsitektur, penyelesaian bug, dan proses rilis akan ditampilkan di sini."}
            </p>
          </div>
        </div>

        <div className="mt-20 p-10 rounded-3xl bg-surface border border-surface-border text-center shadow-sm">
          <h3 className="text-3xl font-extrabold mb-4 text-foreground">Butuh aplikasi serupa?</h3>
          <p className="text-foreground/70 mb-8 max-w-lg mx-auto">
            Mari diskusikan ide Anda dan buat sistem IT yang solid dengan teknologi terbaik.
          </p>
          <a 
            href="https://wa.me/+6288987163167?text=Halo,%20saya%20tertarik%20konsultasi%20mengenai%20proyek%20IT." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-10 py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary-hover transition-colors shadow-lg shadow-primary/30"
          >
            Diskusikan Proyek Anda Sekarang
          </a>
        </div>

      </div>
    </div>
  );
}