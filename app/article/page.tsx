import { Share2, Copy, Bookmark, ThumbsUp, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BottomNav } from '@/components/BottomNav';
import { ScrollToTop } from '@/components/ScrollToTop';

export default function ArticlePage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <article className="mt-4">
          {/* Tag */}
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ffe088]/30 text-[#735c00] text-xs font-bold uppercase tracking-widest font-[family-name:var(--font-work-sans)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#735c00]"></span>
              Exclusive
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-newsreader)] font-bold text-[#002869] dark:text-blue-200 leading-tight mb-8">
            The Blue Economy: How Delta State is Reclaiming its Coastal Heritage
          </h1>

          {/* Author & Meta */}
          <div className="flex items-center justify-between border-y border-slate-200 dark:border-slate-800 py-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
                <Image src="https://picsum.photos/seed/author1/100/100" alt="Emeka Okoro" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <p className="font-[family-name:var(--font-public-sans)] font-bold text-[#1a1c1e] dark:text-slate-200 text-sm">By Emeka Okoro</p>
                <p className="font-[family-name:var(--font-work-sans)] text-slate-500 dark:text-slate-400 text-xs">Chief Editorial Correspondent</p>
              </div>
            </div>
            <div className="text-right font-[family-name:var(--font-work-sans)] text-slate-500 dark:text-slate-400 text-xs">
              <p>Oct 24, 2023</p>
              <p>8 min read</p>
            </div>
          </div>

          {/* Featured Image */}
          <figure className="mb-10">
            <div className="w-full aspect-[4/3] md:aspect-[16/9] bg-[#1a202c] relative rounded-xl overflow-hidden">
              <Image src="https://picsum.photos/seed/delta/1200/800" alt="Delta State Coastal Heritage" fill className="object-cover opacity-60 mix-blend-overlay" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[#ffe088] font-[family-name:var(--font-newsreader)] text-xl md:text-2xl tracking-widest uppercase text-center px-4 leading-relaxed">
                  Feature Editorial<br />Safe Work
                </span>
              </div>
            </div>
            <figcaption className="mt-3 text-xs text-slate-500 dark:text-slate-400 font-[family-name:var(--font-work-sans)] italic text-center">
              Traditional vessels docked along the Warri riverbank. Photography by Sarah Adeniyi for UduTimes.
            </figcaption>
          </figure>

          {/* Article Body */}
          <div className="prose prose-lg dark:prose-invert prose-blue max-w-none font-[family-name:var(--font-public-sans)] text-slate-700 dark:text-slate-300 leading-relaxed">
            <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-[#002869] dark:first-letter:text-blue-400 first-letter:mr-3 first-letter:float-left first-letter:font-[family-name:var(--font-newsreader)]">
              In the heart of the Niger Delta, a quiet revolution is taking place. Beyond the industrial silhouettes of oil rigs, a new vision for economic sovereignty is emerging—one that looks back to the water, not for what lies beneath its bed, but for the life it sustains on its surface.
            </p>
            <p className="mt-6">
              The &quot;Blue Economy&quot; initiative, recently championed by regional leaders, seeks to modernize traditional aquaculture and maritime trade. For generations, the labyrinthine waterways of Delta State have been the lifeblood of local communities, yet they remained largely peripheral to the national economic narrative dominated by crude exports.
            </p>

            <blockquote className="my-10 pl-6 border-l-4 border-[#735c00] bg-[#ffe088]/10 dark:bg-[#735c00]/10 py-6 pr-6 rounded-r-xl">
              <p className="text-2xl font-[family-name:var(--font-newsreader)] italic text-[#002869] dark:text-blue-300 mb-4 leading-snug">
                &quot;Our water is our history, but it is also our future. We are learning to speak the language of the tides again.&quot;
              </p>
              <footer className="font-[family-name:var(--font-work-sans)] text-sm font-bold text-[#735c00] dark:text-[#ffe088] uppercase tracking-wider">
                — Chief Ovie Bakare, Maritime Guild
              </footer>
            </blockquote>

            <p className="mt-6">
              Infrastructure projects are now underway to dredge historical channels, allowing for larger commercial vessels to reach inland ports. This move is expected to reduce logistics costs for local farmers and artisans by nearly 40% over the next five years.
            </p>

            {/* Callout Box */}
            <div className="my-10 bg-[#002869] rounded-xl p-8 text-white shadow-lg">
              <h3 className="text-2xl font-[family-name:var(--font-newsreader)] text-white mb-6">The Delta Impact</h3>
              <ul className="space-y-5 list-none pl-0 m-0">
                <li className="flex items-start gap-3 m-0">
                  <CheckCircle2 className="w-6 h-6 text-[#ffe088] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="font-[family-name:var(--font-public-sans)] text-blue-50 leading-snug">Revitalization of 14 historical trade routes connecting riverine communities.</span>
                </li>
                <li className="flex items-start gap-3 m-0">
                  <CheckCircle2 className="w-6 h-6 text-[#ffe088] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="font-[family-name:var(--font-public-sans)] text-blue-50 leading-snug">Creation of 15,000 new jobs in sustainable aquaculture and marine tech.</span>
                </li>
                <li className="flex items-start gap-3 m-0">
                  <CheckCircle2 className="w-6 h-6 text-[#ffe088] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="font-[family-name:var(--font-public-sans)] text-blue-50 leading-snug">Implementation of plastic-free zones in critical mangrove ecosystems.</span>
                </li>
              </ul>
            </div>

            <p className="mt-6">
              Critics remain cautious, pointing to the environmental legacy of the past fifty years. However, the Sovereign Chronicler finds that the current momentum is driven not by external corporations, but by a domestic coalition of tech-entrepreneurs and traditional rulers.
            </p>
          </div>

          {/* Tags & Share */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-xs font-bold font-[family-name:var(--font-work-sans)]">Economy</span>
              <span className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-xs font-bold font-[family-name:var(--font-work-sans)]">Environment</span>
              <span className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-xs font-bold font-[family-name:var(--font-work-sans)]">Delta State</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-[family-name:var(--font-work-sans)] text-sm font-bold text-slate-700 dark:text-slate-300">Share this story:</span>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[#002869] dark:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869]" aria-label="Share">
                  <Share2 className="w-4 h-4" aria-hidden="true" />
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[#002869] dark:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869]" aria-label="Copy Link">
                  <Copy className="w-4 h-4" aria-hidden="true" />
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[#002869] dark:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869]" aria-label="Bookmark">
                  <Bookmark className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </article>
      </main>

      {/* Related Stories */}
      <section className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-[family-name:var(--font-newsreader)] font-bold text-[#002869] dark:text-blue-300 mb-8">Related Stories</h2>
          <div className="grid gap-4">
            <Link href="/article" className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869]">
              <div className="w-24 h-24 rounded-lg bg-slate-200 dark:bg-slate-700 flex-shrink-0 relative overflow-hidden">
                <Image src="https://picsum.photos/seed/weaver/200/200" alt="The Weaver's Guild" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-public-sans)] font-bold text-lg text-[#1a1c1e] dark:text-slate-100 mb-2 line-clamp-2">The Weaver&apos;s Guild: Preserving Delta Fabrics</h3>
                <p className="font-[family-name:var(--font-work-sans)] text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Culture • 5m read</p>
              </div>
            </Link>
            <Link href="/article" className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869]">
              <div className="w-24 h-24 rounded-lg bg-slate-200 dark:bg-slate-700 flex-shrink-0 relative overflow-hidden">
                <Image src="https://picsum.photos/seed/techhub/200/200" alt="Asaba's New Tech Hub" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-public-sans)] font-bold text-lg text-[#1a1c1e] dark:text-slate-100 mb-2 line-clamp-2">Asaba&apos;s New Tech Hub: What to Expect</h3>
                <p className="font-[family-name:var(--font-work-sans)] text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Innovation • 4m read</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Comments */}
      <section className="bg-white dark:bg-slate-950 py-16 pb-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
            <h2 className="text-3xl font-[family-name:var(--font-newsreader)] font-bold text-[#002869] dark:text-blue-300">Conversation (12)</h2>
            <button className="font-[family-name:var(--font-work-sans)] text-sm font-bold text-[#735c00] dark:text-[#ffe088] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#735c00] rounded-sm px-1">Add Comment</button>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#dae2ff] text-[#002869] flex items-center justify-center font-bold font-[family-name:var(--font-work-sans)] flex-shrink-0">
                BA
              </div>
              <div>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-[family-name:var(--font-public-sans)] font-bold text-[#1a1c1e] dark:text-slate-200">Blessing Akpan</span>
                  <span className="font-[family-name:var(--font-work-sans)] text-xs text-slate-500 dark:text-slate-400">2 hours ago</span>
                </div>
                <p className="font-[family-name:var(--font-public-sans)] text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3">
                  This is a much-needed perspective on our regional potential. The focus on sustainable aquaculture could really change the game for youth employment in our riverine areas.
                </p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1.5 text-slate-500 hover:text-[#002869] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-sm px-1">
                    <ThumbsUp className="w-4 h-4" aria-hidden="true" />
                    <span className="text-xs font-bold font-[family-name:var(--font-work-sans)]">24</span>
                  </button>
                  <button className="text-xs font-bold font-[family-name:var(--font-work-sans)] text-slate-500 hover:text-[#002869] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-sm px-1">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
      <ScrollToTop />
    </>
  );
}
