import { Header } from '@/components/Header';
import { Ticker } from '@/components/Ticker';
import { Hero } from '@/components/Hero';
import { TopStories } from '@/components/TopStories';
import { TrendingBento } from '@/components/TrendingBento';
import { LatestNews } from '@/components/LatestNews';
import { Footer } from '@/components/Footer';
import { BottomNav } from '@/components/BottomNav';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20 pb-24">
        <Ticker />
        <Hero />
        <TopStories />
        <TrendingBento />
        <LatestNews />
        <Footer />
      </main>
      <BottomNav />
    </>
  );
}
