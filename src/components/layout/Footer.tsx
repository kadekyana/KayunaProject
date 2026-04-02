import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border bg-surface/30 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-tighter mb-2">
              Siap Memulai <span className="text-primary">Proyek?</span>
            </h3>
            <p className="text-foreground/70 text-sm">
              Mari diskusikan ide Anda dan wujudkan bersama.
            </p>
          </div>

          <a 
            href="https://wa.me/+6288987163167?text=Halo,%20saya%20tertarik%20konsultasi%20mengenai%20proyek%20IT." 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-primary text-black font-bold hover:bg-primary-hover transition-colors text-white"
          >
            Mulai Konsultasi Gratis
          </a>
        </div>

        <div className="h-px w-full bg-surface-border mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/50">
          <p>© {currentYear} KayunaProjectId. All rights reserved.</p>
          
          <div className="flex gap-6">
            <a href="https://github.com/kadekyana" target="_blank" className="hover:text-primary transition-colors">GitHub</a>
            {/* <a href="https://linkedin.com/in/usernamelinkedin" target="_blank" className="hover:text-primary transition-colors">LinkedIn</a> */}
            <a href="mailto:kadekyana11@gmail.com" className="hover:text-primary transition-colors">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}