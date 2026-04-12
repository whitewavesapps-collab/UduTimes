import Image from 'next/image';
import { TrendingUp } from 'lucide-react';

export function TrendingBento() {
  return (
    <section className="px-6 py-12 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Trending List */}
        <div className="md:col-span-1 bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="font-[family-name:var(--font-newsreader)] text-xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="text-[#735c00] w-5 h-5" /> Trending Now
          </h3>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <span className="font-[family-name:var(--font-newsreader)] text-3xl font-black text-slate-100 italic">01</span>
              <p className="font-[family-name:var(--font-public-sans)] text-sm font-semibold hover:text-[#002869] cursor-pointer transition-colors">
                The Future of Oil in a Green-Focus World: Delta&apos;s Dilemma.
              </p>
            </li>
            <li className="flex gap-4 border-t border-slate-50 pt-4">
              <span className="font-[family-name:var(--font-newsreader)] text-3xl font-black text-slate-100 italic">02</span>
              <p className="font-[family-name:var(--font-public-sans)] text-sm font-semibold hover:text-[#002869] cursor-pointer transition-colors">
                Education Reform: How Local Schools are Embracing E-Learning.
              </p>
            </li>
            <li className="flex gap-4 border-t border-slate-50 pt-4">
              <span className="font-[family-name:var(--font-newsreader)] text-3xl font-black text-slate-100 italic">03</span>
              <p className="font-[family-name:var(--font-public-sans)] text-sm font-semibold hover:text-[#002869] cursor-pointer transition-colors">
                Port of Warri Witnesses Record Cargo Influx this Quarter.
              </p>
            </li>
          </ul>
        </div>

        {/* Community Reporting Card */}
        <div className="md:col-span-2 relative rounded-2xl overflow-hidden group min-h-[300px]">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwbI2b5T_02K3jWyB7Jh3ynS1wVNsVWft0tgWGU28PbuxAVrTuKwBo13oQlIRADFyUFbWdStWQSY9u_5offBjUMl3Nvt9bFnGQQ54WpKAlHukoOAMc8x-WVxhJnv5iL8y3nr36JLvTPPW0nWP_MQi1b2dOLlNMU_mEAnKaEuWU_WQAfJgYYf8SrHLTOwSIsRnkUxml-GqYLOQioU7pcWumNUAnz-MXjSsC52vXo8Ogor4lNtI9w_hvCngjEAXM-aDMRj8PtseK-ak"
            alt="Community meeting"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#002869]/80 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-700"></div>
          <div className="relative z-10 p-8 h-full flex flex-col justify-between">
            <div>
              <span className="font-[family-name:var(--font-work-sans)] text-xs text-[#ffe088] font-bold uppercase tracking-widest mb-2 block">
                Voice of the People
              </span>
              <h3 className="font-[family-name:var(--font-newsreader)] text-3xl text-white font-bold leading-tight">
                Community Reporting: <br />Stories From Your Street.
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-white/80 font-[family-name:var(--font-public-sans)] max-w-md">
                Our citizens are our reporters. See the latest ground-level updates from Oghara, Sapele, and Ughelli.
              </p>
              <button className="w-fit px-6 py-3 bg-white text-[#002869] font-[family-name:var(--font-work-sans)] font-bold rounded-lg hover:bg-[#dae2ff] transition-colors">
                Browse Community Reports
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
