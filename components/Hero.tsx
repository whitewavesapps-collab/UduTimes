import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative w-full h-[618px] flex items-end">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMJiRIonDpqKrt6iuWSkx4l8HHKpUWbxiv6NMxEZdvtsQ2G9vFwYrEK3jSsetnnKSssnB6TdQcSX6bQVsRHsB2Su07VuOyNUjGpFp5q0s-ud7oppXUETcB0W6rw4J3DsNg9SeBFfYNnbuH4H-72BJDBkMObhNoqqygetl0-fyGIXbNUk2M8cJp_SL6S9KwPHQStEltFT9TyIz1Qd9-aFsufVKqWCoJp6xXwl1MY0SCLhtHvDf3WC8DlXlUL5bQPjly_yQBs5o2Ul8"
          alt="Sunset over the Delta State Niger River"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
      </div>
      <div className="relative z-10 p-8 max-w-3xl">
        <div className="mb-4">
          <span className="px-3 py-1 bg-[#735c00] text-white font-[family-name:var(--font-work-sans)] text-[10px] uppercase tracking-widest rounded-full">
            Editorial Exclusive
          </span>
        </div>
        <h2 className="font-[family-name:var(--font-newsreader)] text-4xl md:text-6xl text-white leading-tight font-bold italic mb-4">
          The Deep Delta: Uncovering the Forgotten Waterways of Southern Nigeria.
        </h2>
        <p className="font-[family-name:var(--font-public-sans)] text-slate-200 text-lg max-w-xl mb-6 line-clamp-3">
          A deep-dive investigative report into the shifting ecosystems and the resilient communities living along the historic Escravos River.
        </p>
        <div className="flex items-center gap-4 text-white/80 font-[family-name:var(--font-work-sans)] text-sm">
          <span className="font-bold text-[#ffe088]">By Ejiro Okoro</span>
          <span className="w-1 h-1 rounded-full bg-white/40"></span>
          <span>12 Min Read</span>
        </div>
      </div>
    </section>
  );
}
