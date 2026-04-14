import { BarChart2, Share2, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 w-full mt-12 py-12 px-6 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <span className="text-2xl font-[family-name:var(--font-newsreader)] text-[#002869] mb-4 block">UduTimes</span>
          <p className="font-[family-name:var(--font-public-sans)] text-slate-500 text-sm leading-relaxed mb-6">
            Delta State&apos;s premier digital chronicle. Delivering truth, authority, and regional insight since 1998.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Analytics" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-md p-1">
              <BarChart2 className="text-[#0b3d91] w-6 h-6" aria-hidden="true" />
            </a>
            <a href="#" aria-label="Share" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-md p-1">
              <Share2 className="text-[#0b3d91] w-6 h-6" aria-hidden="true" />
            </a>
            <a href="#" aria-label="Contact via Email" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-md p-1">
              <Mail className="text-[#0b3d91] w-6 h-6" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div>
          <h5 className="font-[family-name:var(--font-work-sans)] font-bold text-[#002869] mb-4 uppercase text-xs tracking-widest">
            Navigation
          </h5>
          <div className="grid grid-cols-2 gap-y-2">
            <a className="text-slate-600 hover:text-[#002869] text-sm font-[family-name:var(--font-work-sans)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-sm" href="#">About Us</a>
            <a className="text-slate-600 hover:text-[#002869] text-sm font-[family-name:var(--font-work-sans)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-sm" href="#">Contact</a>
            <a className="text-slate-600 hover:text-[#002869] text-sm font-[family-name:var(--font-work-sans)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-sm" href="#">Privacy Policy</a>
            <a className="text-slate-600 hover:text-[#002869] text-sm font-[family-name:var(--font-work-sans)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-sm" href="#">Advertise</a>
            <a className="text-slate-600 hover:text-[#002869] text-sm font-[family-name:var(--font-work-sans)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-sm" href="#">Terms of Service</a>
          </div>
        </div>
        <div>
          <h5 className="font-[family-name:var(--font-work-sans)] font-bold text-[#002869] mb-4 uppercase text-xs tracking-widest">
            Newsletter
          </h5>
          <p className="text-slate-500 text-sm font-[family-name:var(--font-public-sans)] mb-4">
            The Morning Briefing. Direct to your inbox.
          </p>
          <div className="flex">
            <input
              className="bg-white border border-slate-300 focus:ring-2 focus:ring-[#002869] text-sm px-4 py-2 w-full rounded-l-lg outline-none"
              placeholder="Email address"
              type="email"
              aria-label="Email address for newsletter"
            />
            <button className="bg-[#002869] text-white px-4 py-2 rounded-r-lg font-[family-name:var(--font-work-sans)] text-xs font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#002869]">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-200/50">
        <p className="text-slate-500 text-xs font-[family-name:var(--font-work-sans)] text-center">
          © 2024 UduTimes Media Group. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
