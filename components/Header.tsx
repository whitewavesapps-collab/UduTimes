import { Menu, Search, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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
          <Link href="/" className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-md p-1 group" aria-label="Times of Udu Home">
            <Image 
              src="/logo.jpg" 
              alt="Times of Udu Logo" 
              width={180} 
              height={60} 
              className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              priority
            />
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
