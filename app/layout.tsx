import type {Metadata} from 'next';
import { Newsreader, Public_Sans, Work_Sans } from 'next/font/google';
import './globals.css'; // Global styles

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  style: ['normal', 'italic'],
});

const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-public-sans',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
});

export const metadata: Metadata = {
  title: 'UduTimes | The Sovereign Chronicler',
  description: 'Delta State\'s premier digital chronicle.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${newsreader.variable} ${publicSans.variable} ${workSans.variable}`}>
      <body className="bg-[#f9f9fc] text-[#1a1c1e] font-[family-name:var(--font-public-sans)] min-h-screen selection:bg-[#ffe088] selection:text-[#241a00] pb-safe" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
