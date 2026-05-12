'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/navigation';
import { useTransition } from 'react';

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (nextLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-full border border-slate-200/50 backdrop-blur-sm">
      {['id', 'en'].map((l) => (
        <button
          key={l}
          onClick={() => handleLocaleChange(l)}
          disabled={isPending}
          className={`px-3 py-1 text-[11px] font-bold rounded-full transition-all duration-300 ${
            locale === l 
              ? 'bg-white text-blue-600 shadow-sm' 
              : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}