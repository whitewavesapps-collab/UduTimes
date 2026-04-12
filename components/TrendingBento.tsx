import Image from 'next/image';
import { TrendingUp } from 'lucide-react';

const TRENDING_NOW = [
  {
    id: 1,
    title: "The Future of Oil in a Green-Focus World: Delta's Dilemma.",
    timestamp: '1 Hour Ago',
    imageSrc: 'https://picsum.photos/seed/oil/100/100',
    imageAlt: 'Oil rig',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '.repeat(8), // ~550 words
  },
  {
    id: 2,
    title: 'Education Reform: How Local Schools are Embracing E-Learning.',
    timestamp: '3 Hours Ago',
    imageSrc: 'https://picsum.photos/seed/education/100/100',
    imageAlt: 'Education',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '.repeat(5), // ~340 words
  },
  {
    id: 3,
    title: 'Port of Warri Witnesses Record Cargo Influx this Quarter.',
    timestamp: '5 Hours Ago',
    imageSrc: 'https://picsum.photos/seed/port/100/100',
    imageAlt: 'Port of Warri',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '.repeat(12), // ~820 words
  }
];

function getReadTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  const wordsPerMinute = 200;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function TrendingBento() {
  return (
    <section className="px-6 py-12 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Trending List */}
        <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="font-[family-name:var(--font-newsreader)] text-xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="text-[#735c00] w-5 h-5" /> Trending Now
          </h3>
          <ul className="space-y-6">
            {TRENDING_NOW.map((item, index) => (
              <li key={item.id} className={`flex gap-4 ${index !== 0 ? 'border-t border-slate-50 pt-4' : ''} group`}>
                <div className="flex-1 flex gap-3">
                  <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-col justify-between h-16">
                    <p className="font-[family-name:var(--font-public-sans)] text-sm font-semibold hover:text-[#002869] cursor-pointer transition-colors line-clamp-2">
                      {item.title}
                    </p>
                    <div className="text-[10px] text-slate-400 font-[family-name:var(--font-work-sans)] mt-1">
                      {item.timestamp} • {getReadTime(item.content)} min read
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Community Reporting Card */}
        <div className="md:col-span-3 relative rounded-2xl overflow-hidden group min-h-[300px]">
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
