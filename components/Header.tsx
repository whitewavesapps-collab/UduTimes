import { Menu, Search, User } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm dark:shadow-none">
      <div className="grid grid-cols-3 items-center px-6 py-4 max-w-screen-2xl mx-auto">
        <div className="flex justify-start items-center gap-6">
          <button 
            className="md:hidden text-slate-600 dark:text-slate-400 scale-95 active:duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-md p-1"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" aria-hidden="true" />
          </button>
          <nav className="hidden md:flex items-center gap-6 font-[family-name:var(--font-work-sans)] text-sm font-semibold text-slate-600 dark:text-slate-300">
            <Link href="#" className="hover:text-[#002869] dark:hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-sm">Home</Link>
            <Link href="#" className="hover:text-[#002869] dark:hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-sm">Explore</Link>
            <Link href="#" className="hover:text-[#002869] dark:hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-sm">Live</Link>
            <Link href="#" className="hover:text-[#002869] dark:hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-sm">Saved</Link>
          </nav>
        </div>
        <div className="flex justify-center">
          <Link href="/" className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-md p-1 group" aria-label="UduTimes Home">
            <svg viewBox="0 0 40 40" className="w-8 h-8 md:w-9 md:h-9 flex-shrink-0 transition-transform group-hover:scale-105" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="40" height="40" rx="8" className="fill-[#002869] dark:fill-blue-600" />
              <path d="M9 12V22C9 25.866 12.134 29 16 29C19.866 29 23 25.866 23 22V12H20V22C20 24.209 18.209 26 16 26C13.791 26 12 24.209 12 22V12H9Z" fill="white" />
              <path d="M21 12H33V15H28.5V29H25.5V15H21V12Z" fill="#ffe088" />
            </svg>
            <h1 className="text-2xl md:text-3xl font-[family-name:var(--font-newsreader)] italic text-[#002869] dark:text-blue-200 whitespace-nowrap font-bold">
              UduTimes
            </h1>
          </Link>
        </div>
        <div className="flex justify-end items-center gap-4">
          <Link 
            href="#"
            className="hidden md:flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-[#002869] dark:hover:text-blue-400 transition-colors text-sm font-semibold font-[family-name:var(--font-work-sans)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-md p-1"
            aria-label="Profile"
          >
            <User className="w-5 h-5" aria-hidden="true" />
            <span className="hidden lg:inline">Sign In</span>
          </Link>
          <button 
            className="text-slate-600 dark:text-slate-400 scale-95 active:duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-md p-1"
            aria-label="Search"
          >
            <Search className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
