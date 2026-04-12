import { Menu, Search } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm dark:shadow-none">
      <div className="flex justify-between items-center px-6 py-4 max-w-screen-2xl mx-auto">
        <button className="text-slate-600 dark:text-slate-400 scale-95 active:duration-150">
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-3xl font-[family-name:var(--font-newsreader)] italic text-[#002869] dark:text-blue-200">
          UduTimes
        </h1>
        <button className="text-slate-600 dark:text-slate-400 scale-95 active:duration-150">
          <Search className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
