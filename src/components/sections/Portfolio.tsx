// src/components/sections/Portfolio.tsx
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
      <div className="py-24 text-center text-red-500">
        Gagal memuat data portofolio.
      </div>
    );
  }

  return (
    <section id="portfolio" className="py-24 border-t border-surface-border bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Karya Terbaik</h2>
            <p className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground">Bukti Nyata, <br/>Bukan Sekadar Janji.</p>
          </div>
          <p className="text-foreground/70 max-w-md">
            Beberapa proyek pilihan yang pernah saya kerjakan. Dari aplikasi *mobile* hingga infrastruktur *backend* yang tangguh.
          </p>
        </div>

        {(!portfolios || portfolios.length === 0) && (
          <div className="text-center py-12 text-foreground/50 border border-dashed border-surface-border rounded-2xl">
            Belum ada portofolio yang ditambahkan.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios?.map((item) => (
            // PERUBAHAN DI SINI: Link adalah pembungkus luar, tanpa div double
            <Link 
              href={`/portofolio/${item.id}`} 
              key={item.id}
              className="group flex flex-col rounded-3xl border border-surface-border bg-surface overflow-hidden transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-surface-border/80"
            >
              <div className={`h-56 w-full bg-gradient-to-br ${item.gradient} flex items-center justify-center border-b border-surface-border`}>
                 <span className="text-foreground/30 font-medium">Proyek: {item.title}</span>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-xs font-bold text-primary mb-2 tracking-wider uppercase">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tags.map((tag: string) => (
                    <span 
                      key={tag} 
                      className="px-2.5 py-1 rounded-md bg-background border border-surface-border text-xs font-medium text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}