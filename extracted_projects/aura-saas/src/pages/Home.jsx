import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Reveal } from '../components/Reveal';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const PANEL_BORDER = 'border-white/[0.10]';
const PANEL_RING = 'ring-1 ring-inset ring-white/[0.05]';

const MediaCard = ({ src, type = 'image', aspect = 'aspect-square', poster = '' }) => {
  return (
    <div className={cn(`w-full rounded-xl border ${PANEL_BORDER} ${PANEL_RING} overflow-hidden relative bg-framer-panel hover:scale-[1.02] transition-transform duration-500`, aspect)}>
      {type === 'image' ? (
        <img src={src} alt="Showcase" className="w-full h-full object-cover object-top block" loading="lazy" />
      ) : (
        <div className="w-full h-full relative">
          <img src={poster} alt="Poster" className="absolute inset-0 w-full h-full object-cover z-0" />
          <video
            src={src}
            poster={poster}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-10 bg-transparent"
          />
        </div>
      )}
    </div>
  );
};

export default function Home() {
  return (
    <main className="">
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 max-w-4xl">Create a professional website, free.</h1>
          <p className="text-xl text-framer-muted max-w-2xl mb-16">No code website builder loved by designers. Enjoy full design freedom, powerful CMS, and built-in SEO.</p>
          
          <div className="w-full overflow-hidden py-12 relative">
            <style>{`
              @keyframes logosMarqueeRightToLeft {
                0% { transform: translate3d(0, 0, 0); }
                100% { transform: translate3d(-50%, 0, 0); }
              }
              .logos-marquee-track { animation: logosMarqueeRightToLeft 26s linear infinite; will-change: transform; }
              .logos-marquee-track:hover { animation-play-state: paused; }
            `}</style>
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 md:w-36 bg-gradient-to-r from-black via-black/90 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 md:w-36 bg-gradient-to-l from-black via-black/90 to-transparent" />
            <div className="logos-marquee-track flex w-max items-center gap-16 md:gap-20 whitespace-nowrap pr-16">
              {Array.from({length: 2}).map((_, i) => ['vercel', 'linear', 'loom', 'raycast', 'arc', 'framer', 'stripe', 'github'].map((logo, idx) => (
                <div key={`${i}-${idx}`} className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full hover:bg-white/5 transition-colors">
                  <iconify-icon icon={`simple-icons:${logo}`} class="text-[34px] md:text-[38px] text-white/30 hover:text-white/55 transition-colors duration-300"></iconify-icon>
                </div>
              )))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-[1600px] mx-auto">
        <style>{`
          @keyframes bentoUp { 0% { transform: translateY(0); } 100% { transform: translateY(calc(-50% - 12px)); } }
          @keyframes bentoDown { 0% { transform: translateY(calc(-50% - 12px)); } 100% { transform: translateY(0); } }
          .bento-marquee-up { animation: bentoUp 30s linear infinite; will-change: transform; }
          .bento-marquee-down { animation: bentoDown 32s linear infinite; will-change: transform; }
          .bento-marquee-up:hover, .bento-marquee-down:hover { animation-play-state: paused; }
        `}</style>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start" style={{ maskImage: 'linear-gradient(transparent 0%, black 12%, black 88%, transparent 100%)' }}>
          <div className="relative h-[1400px] overflow-hidden">
            <div className="flex flex-col gap-6 bento-marquee-up">
              <MediaCard src="https://framerusercontent.com/images/W1Q88PlQfYXaGug9EBkmai9By4.jpg?width=720&height=960" aspect="aspect-[3/4]" />
              <MediaCard src="https://framerusercontent.com/images/gmhdX4XPuJvQqId9jDmFHb7cFE.jpg?width=720&height=780" aspect="aspect-[0.92]" />
              <MediaCard type="video" src="https://framerusercontent.com/assets/m8Z1Zg8JHiuWfp5GqAGZylPuYCQ.mp4" poster="https://framerusercontent.com/images/4pTVxnxo0Bvii8xP7hCmmozqx7s.jpg?width=720&height=840" aspect="aspect-[0.85]" />
              <MediaCard src="https://framerusercontent.com/images/W1Q88PlQfYXaGug9EBkmai9By4.jpg?width=720&height=960" aspect="aspect-[3/4]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}