import Image from 'next/image';
import Link from 'next/link';

const LATEST_NEWS = [
  {
    id: 1,
    category: 'Politics',
    title: 'State Assembly passes new environmental protection bill for Delta wetlands.',
    timestamp: '15 mins ago',
    imageSrc: 'https://picsum.photos/seed/wetlands/200/200',
    imageAlt: 'Delta wetlands',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '.repeat(10), // ~690 words
    author: {
      name: 'Ovie Efe',
      avatar: 'https://picsum.photos/seed/ovie/40/40',
      bio: 'Senior Political Correspondent covering Delta State.'
    }
  },
  {
    id: 2,
    category: 'Business',
    title: 'Agro-processing hub in Benin-Warri corridor receives major foreign investment.',
    timestamp: '42 mins ago',
    imageSrc: 'https://picsum.photos/seed/agro/200/200',
    imageAlt: 'Agro-processing hub',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '.repeat(18), // ~1240 words
    author: {
      name: 'Ngozi Okoro',
      avatar: 'https://picsum.photos/seed/ngozi/40/40',
      bio: 'Business & Economy Editor with a focus on West African markets.'
    }
  },
  {
    id: 3,
    category: 'Local News',
    title: 'Effurun Market renovation enters final phase; traders expected back by November.',
    timestamp: '1 hour ago',
    imageSrc: 'https://picsum.photos/seed/market/200/200',
    imageAlt: 'Effurun Market',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '.repeat(5), // ~190 words
    author: {
      name: 'Tega Akpobome',
      avatar: 'https://picsum.photos/seed/tega/40/40',
      bio: 'Local News Reporter dedicated to community stories in Warri and environs.'
    }
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
        <p className="font-[family-name:var(--font-work-sans)] text-sm text-slate-500 mt-1">Updated every 5 minutes</p>
      </div>
      <div className="space-y-6">
        {LATEST_NEWS.map((article) => (
          <article key={article.id} className="flex gap-6 items-center py-4 border-b border-slate-100 group">
            <div className="relative w-32 h-32 sm:w-40 sm:h-32 flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src={article.imageSrc}
                alt={article.imageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
              <div className="flex-1 flex flex-col justify-between h-32">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0b3d91]"></span>
                  <span className="font-[family-name:var(--font-work-sans)] text-[10px] font-bold text-slate-500 uppercase">{article.category}</span>
                </div>
                <Link href="/article" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-sm">
                  <h4 className="font-[family-name:var(--font-public-sans)] font-bold text-base leading-tight text-[#1a1c1e] hover:text-[#002869] transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                </Link>
                <div className="text-xs text-slate-500 font-[family-name:var(--font-work-sans)] mt-1">
                  {article.timestamp} • {getReadTime(article.content)} min read
                </div>
              </div>
              <div className="flex items-center gap-3 mt-auto pt-3 border-t border-slate-50">
                <Image src={article.author.avatar} alt={article.author.name} width={24} height={24} className="rounded-full" />
                <div>
                  <p className="text-xs font-bold text-slate-700 font-[family-name:var(--font-public-sans)]">{article.author.name}</p>
                  <p className="text-[10px] text-slate-500 font-[family-name:var(--font-work-sans)] line-clamp-1">{article.author.bio}</p>
                </div>
              </div>
            </div>
          </article>
        ))}

        {/* Infinite Scroll Indicator */}
        <div className="pt-8 flex flex-col items-center justify-center gap-4 text-slate-500">
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
