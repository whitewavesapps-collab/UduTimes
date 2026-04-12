import { Home, Compass, Radio, Bookmark, User } from 'lucide-react';

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-[0_-4px_12px_rgba(0,0,0,0.05)] border-t border-slate-100 dark:border-slate-800 pb-safe pt-2 flex justify-around items-center h-20 md:hidden">
      <a className="flex flex-col items-center text-[#002869] dark:text-blue-400 font-bold active:bg-slate-50 dark:active:bg-slate-800 p-2 rounded-lg" href="#">
        <Home className="w-6 h-6 fill-current" />
        <span className="font-[family-name:var(--font-work-sans)] text-[10px] uppercase tracking-wider mt-1">Home</span>
      </a>
      <a className="flex flex-col items-center text-slate-400 dark:text-slate-500 active:bg-slate-50 dark:active:bg-slate-800 p-2 rounded-lg" href="#">
        <Compass className="w-6 h-6" />
        <span className="font-[family-name:var(--font-work-sans)] text-[10px] uppercase tracking-wider mt-1">Explore</span>
      </a>
      <a className="flex flex-col items-center text-slate-400 dark:text-slate-500 active:bg-slate-50 dark:active:bg-slate-800 p-2 rounded-lg" href="#">
        <div className="relative">
          <Radio className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-[#ba1a1a] rounded-full border-2 border-white"></span>
        </div>
        <span className="font-[family-name:var(--font-work-sans)] text-[10px] uppercase tracking-wider mt-1">Live</span>
      </a>
      <a className="flex flex-col items-center text-slate-400 dark:text-slate-500 active:bg-slate-50 dark:active:bg-slate-800 p-2 rounded-lg" href="#">
        <Bookmark className="w-6 h-6" />
        <span className="font-[family-name:var(--font-work-sans)] text-[10px] uppercase tracking-wider mt-1">Saved</span>
      </a>
      <a className="flex flex-col items-center text-slate-400 dark:text-slate-500 active:bg-slate-50 dark:active:bg-slate-800 p-2 rounded-lg" href="#">
        <User className="w-6 h-6" />
        <span className="font-[family-name:var(--font-work-sans)] text-[10px] uppercase tracking-wider mt-1">Profile</span>
      </a>
    </nav>
  );
}
