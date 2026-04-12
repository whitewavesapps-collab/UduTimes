import Image from 'next/image';

const LATEST_NEWS = [
  {
    id: 1,
    category: 'Politics',
    title: 'State Assembly passes new environmental protection bill for Delta wetlands.',
    timestamp: '15 mins ago',
    imageSrc: 'https://picsum.photos/seed/wetlands/200/200',
    imageAlt: 'Delta wetlands',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '.repeat(10), // ~690 words
  },
  {
    id: 2,
    category: 'Business',
    title: 'Agro-processing hub in Benin-Warri corridor receives major foreign investment.',
    timestamp: '42 mins ago',
    imageSrc: 'https://picsum.photos/seed/agro/200/200',
    imageAlt: 'Agro-processing hub',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '.repeat(18), // ~1240 words
  },
  {
    id: 3,
    category: 'Local News',
    title: 'Effurun Market renovation enters final phase; traders expected back by November.',
    timestamp: '1 hour ago',
    imageSrc: 'https://picsum.photos/seed/market/200/200',
    imageAlt: 'Effurun Market',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '.repeat(5), // ~190 words
  }
];

function getReadTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  const wordsPerMinute = 200;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function LatestNews() {
  return (
    <section className="px-6 py-12 max-w-screen-2xl mx-auto">
      <div className="mb-8">
        <h3 className="font-[family-name:var(--font-newsreader)] text-3xl font-bold text-[#1a1c1e]">Latest News</h3>
        <p className="font-[family-name:var(--font-work-sans)] text-sm text-slate-400 mt-1">Updated every 5 minutes</p>
      </div>
      <div className="space-y-6">
        {LATEST_NEWS.map((article) => (
          <article key={article.id} className="flex gap-6 items-center py-4 border-b border-slate-100 group">
            <div className="relative w-24 h-24 sm:w-32 sm:h-24 flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src={article.imageSrc}
                alt={article.imageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0b3d91]"></span>
                <span className="font-[family-name:var(--font-work-sans)] text-[10px] font-bold text-slate-500 uppercase">{article.category}</span>
              </div>
              <h4 className="font-[family-name:var(--font-public-sans)] font-bold text-lg text-[#1a1c1e] hover:text-[#002869] cursor-pointer">
                {article.title}
              </h4>
              <div className="mt-2 text-xs text-slate-400 font-[family-name:var(--font-work-sans)]">
                {article.timestamp} • {getReadTime(article.content)} min read
              </div>
            </div>
          </article>
        ))}

        {/* Infinite Scroll Indicator */}
        <div className="pt-8 flex flex-col items-center justify-center gap-4 text-slate-300">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#0b3d91]/20"></div>
            <div className="w-2 h-2 rounded-full bg-[#0b3d91]/40"></div>
            <div className="w-2 h-2 rounded-full bg-[#0b3d91]/60"></div>
          </div>
          <span className="font-[family-name:var(--font-work-sans)] text-[10px] font-bold uppercase tracking-[0.2em]">
            Loading more stories
          </span>
        </div>
      </div>
    </section>
  );
}
