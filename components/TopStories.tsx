import Image from 'next/image';

const TOP_STORIES = [
  {
    id: 1,
    category: 'Urban Development',
    title: 'Asaba\'s Modern Face: The Sky-High Ambitions of the Delta Capital.',
    description: 'Inside the multi-billion naira infrastructure drive aimed at turning Asaba into West Africa\'s next tech hub.',
    timestamp: '4 Hours Ago',
    tag: 'Politics',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbiUgZ7aRYS0HSGvDd90R8MVPdQnnjcPP5tZPnFobGyjKbqOUsCv53etZjKbjuxsWSbj4y6A3VrwfvLQDmROsmvM81V7J378FJbc2PhLeSMzqr5-HeJwh1EBYJStx7_M6GFYRuP3byE7r6k9MDMEwAT5QJyJslL6jBZri1mce6kUGyzOdoVBhmEntyNm41R_OfvlANHsXdRzEzRNh9JxTpEDzPcCovUSrjwR25IVRA8lB-lGxo1efxBVZZ3NmWAxIFkB4ZLOT_j0c',
    imageAlt: 'Asaba modern urban development',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '.repeat(15), // ~1000 words
    isLarge: true,
  },
  {
    id: 2,
    category: 'Culture',
    title: 'The Weaver of Udu: Preserving 500 Years of Fabric History.',
    timestamp: '2 Hours Ago',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoyUFVfWIr4KkhyfnTNvA3b7skS4N5Y2rtgifjR1bmIQPFC8Uj63bIcDLMN3s_2P2hM4l9485YJvlhHvFvofL2hACwha6CRxUhVlrcf4asN7WwxldWbErYfioUcocFuwZRZJm0w41EOGXojC-DFyPBGnUkPPwBpplofVZDWk6-Q1G7ScvkRSmmb89OKCMDTInqx9Ns9A3uTTwu65hSdtLCXvZGeq3s2UfBxdT6bYjkiht-qqbvkfIV2moV--rfam5cjedv-tzksa8',
    imageAlt: 'Weaver of Udu',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '.repeat(8), // ~550 words
    isLarge: false,
  },
  {
    id: 3,
    category: 'Sports',
    title: 'Warri Wolves Set Sights on Continental Glory in Upcoming League.',
    timestamp: '6 Hours Ago',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeZJw7MiHO_7Ot98seLpWz3mgn4W73RXSoSqoUVa-m9xAmhPhR_4H7sl1165fIl7PM6r9Wx9ZgbLtFVHgUIiEjYEJ66aP_45qoqOOIsCtoPPGbBdl68NTJLSGDXl8ZN97M4pjeP1DpJSuZjrb2JDsI1rpP5D3G60ugUY36U82HTDNap_dYVv6qVKZoA0xS2rzffpabe0DR7w1xjhpOiNKY3TuqewXr4ntLrglGNk4l4pDZjamQAqsdtBfqM1W8258uumUdl-l-LRI',
    imageAlt: 'Warri Wolves stadium',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '.repeat(6), // ~400 words
    isLarge: false,
  },
  {
    id: 4,
    category: 'Economy',
    title: 'Federal Government Announces New Delta Gas Modular Refinery Expansion.',
    timestamp: 'Yesterday',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfdpEqisDTXug8CF8iHiokTsdFlxnfMZqK8xQYwWGWkNTEYQj_O8JKq9iZ5VjM5H_UO4Iqg3gFil6gugHxkiClHTNrTu9s9ZEytEwxvohqIYsypbs6jm0RlJzWy5FHWIT8CYNJcJG8c5j0Jb70PzXE7XIQsa0BZGQhcsQq6Eprxd_3BjQ0EKjeD979ce0eeUSEI-u4lsV863hni1ao7qf4WLZadMeUm5P_4Ve5t1lTVgPiPXKEsMR6PVqtPtm3ZUQb9Y8NIxlosZA',
    imageAlt: 'Oil refinery',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '.repeat(12), // ~800 words
    isLarge: false,
  }
];

function getReadTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  const wordsPerMinute = 200;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function TopStories() {
  const largeStory = TOP_STORIES.find(s => s.isLarge);
  const mediumStories = TOP_STORIES.filter(s => !s.isLarge);

  return (
    <section className="px-6 py-12 bg-[#f3f3f6]">
      <div className="mb-10 flex justify-between items-end max-w-screen-2xl mx-auto">
        <div>
          <h3 className="font-[family-name:var(--font-newsreader)] text-3xl font-bold text-[#002869]">Top Stories</h3>
          <div className="h-1 w-12 bg-[#735c00] mt-2"></div>
        </div>
        <button className="font-[family-name:var(--font-work-sans)] text-sm text-[#0b3d91] font-bold hover:underline">
          View Section
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-2xl mx-auto">
        {/* Large Card */}
        {largeStory && (
          <article className="bg-white p-2 rounded-xl shadow-sm">
            <div className="relative w-full h-64 mb-6">
              <Image
                src={largeStory.imageSrc}
                alt={largeStory.imageAlt}
                fill
                className="object-cover rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="px-4 pb-6">
              <span className="font-[family-name:var(--font-work-sans)] text-xs font-semibold text-[#735c00] uppercase tracking-widest block mb-2">
                {largeStory.category}
              </span>
              <h4 className="font-[family-name:var(--font-newsreader)] text-2xl font-bold leading-snug mb-3 text-[#1a1c1e]">
                {largeStory.title}
              </h4>
              <p className="font-[family-name:var(--font-public-sans)] text-slate-600 mb-4 line-clamp-2">
                {largeStory.description}
              </p>
              <div className="flex items-center gap-3 font-[family-name:var(--font-work-sans)] text-xs text-slate-400">
                <span>{largeStory.tag}</span>
                <span>•</span>
                <span>{largeStory.timestamp} • {getReadTime(largeStory.content)} min read</span>
              </div>
            </div>
          </article>
        )}

        <div className="space-y-8">
          {/* Medium Cards */}
          {mediumStories.map((story) => (
            <article key={story.id} className="flex gap-4 items-start group">
              <div className="w-1/3 flex-shrink-0 relative aspect-square">
                <Image
                  src={story.imageSrc}
                  alt={story.imageAlt}
                  fill
                  className="object-cover rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1">
                <span className="font-[family-name:var(--font-work-sans)] text-[10px] font-bold text-[#0b3d91] uppercase mb-1 block">
                  {story.category}
                </span>
                <h4 className="font-[family-name:var(--font-newsreader)] text-lg font-bold leading-tight text-[#1a1c1e] group-hover:text-[#002869] transition-colors">
                  {story.title}
                </h4>
                <div className="mt-2 text-xs text-slate-400 font-[family-name:var(--font-work-sans)]">
                  {story.timestamp} • {getReadTime(story.content)} min read
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
