import { Home, Compass, Radio, Bookmark, User } from 'lucide-react';
import Link from 'next/link';

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-[0_-4px_12px_rgba(0,0,0,0.05)] border-t border-slate-100 dark:border-slate-800 pb-safe pt-2 flex justify-around items-center h-20 md:hidden">
      <Link className="flex flex-col items-center text-[#002869] dark:text-blue-400 font-bold active:bg-slate-50 dark:active:bg-slate-800 p-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869]" href="/">
        <Home className="w-6 h-6 fill-current" aria-hidden="true" />
        <span className="font-[family-name:var(--font-work-sans)] text-[10px] uppercase tracking-wider mt-1">Home</span>
      </Link>
      <Link className="flex flex-col items-center text-slate-500 dark:text-slate-400 active:bg-slate-50 dark:active:bg-slate-800 p-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869]" href="#">
        <Compass className="w-6 h-6" aria-hidden="true" />
        <span className="font-[family-name:var(--font-work-sans)] text-[10px] uppercase tracking-wider mt-1">Explore</span>
      </Link>
      <Link className="flex flex-col items-center text-slate-500 dark:text-slate-400 active:bg-slate-50 dark:active:bg-slate-800 p-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869]" href="#">
        <div className="relative">
          <Radio className="w-6 h-6" aria-hidden="true" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-[#ba1a1a] rounded-full border-2 border-white"></span>
        </div>
        <span className="font-[family-name:var(--font-work-sans)] text-[10px] uppercase tracking-wider mt-1">Live</span>
      </Link>
      <Link className="flex flex-col items-center text-slate-500 dark:text-slate-400 active:bg-slate-50 dark:active:bg-slate-800 p-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869]" href="#">
        <Bookmark className="w-6 h-6" aria-hidden="true" />
        <span className="font-[family-name:var(--font-work-sans)] text-[10px] uppercase tracking-wider mt-1">Saved</span>
      </Link>
      <Link className="flex flex-col items-center text-slate-500 dark:text-slate-400 active:bg-slate-50 dark:active:bg-slate-800 p-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869]" href="#">
        <User className="w-6 h-6" aria-hidden="true" />
        <span className="font-[family-name:var(--font-work-sans)] text-[10px] uppercase tracking-wider mt-1">Profile</span>
      </Link>
    </nav>
  );
}
