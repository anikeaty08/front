import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import Menu from './Menu';
import Philosophy from './Philosophy';
import Gallery from './Gallery';
import Reservations from './Reservations';

const TESTIMONIALS = [
  {
    quote: "\"The absolute peak of seafood artistry. Under the gold light, each course felt like a precious ocean talisman uncovered. An unmatched experience in dark luxury gastronomy.\"",
    author: "Lord Alistair Sterling",
    title: "Connoisseur Review 2024"
  },
  {
    quote: "\"An unparalleled dive into oceanic flavors. The attention to detail is nothing short of miraculous. Truly a sanctuary for epicureans.\"",
    author: "Eleanor Vance",
    title: "Gastronomy Today"
  },
  {
    quote: "\"Each plate is a masterclass in modern seafood preparation. The atmosphere elevates the dining experience to sheer poetry.\"",
    author: "Marcus Thorne",
    title: "The Culinary Standard"
  }
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative min-h-screen w-full flex items-center justify-center pt-24 overflow-hidden bg-bgPrimary" id="hero">
        <div className="ambient-glow w-[500px] h-[500px] top-[20%] right-[10%] bg-goldSecondary/10"></div>
        <div className="ambient-glow w-[400px] h-[400px] bottom-[10%] left-[5%] bg-[#78350f]/10"></div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary via-transparent to-bgPrimary/80 pointer-events-none z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-bgPrimary via-transparent to-transparent pointer-events-none z-10"></div>

        <div className="absolute inset-0 w-full h-full z-0 opacity-85 lg:opacity-100 overflow-hidden">
          <video src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/8bd0314a-9525-4a13-996e-2c37cbd9e514/1779678842660-589ad283-7901-4385-af29-aedcbe6e68c9.mp4" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b410888-a2e7-4260-ac4a-8179b07b8bc0_3840w.png" autoPlay muted playsInline loop className="absolute inset-0 w-full h-full object-cover object-[72%_50%] scale-105 filter brightness-[0.42] lg:brightness-[0.62] contrast-[1.05]"></video>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,#050505_31%,rgba(5,5,5,0.88)_43%,rgba(5,5,5,0.45)_58%,rgba(5,5,5,0.16)_74%,rgba(5,5,5,0.08)_100%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_50%,rgba(216,169,79,0.08)_0%,rgba(5,5,5,0.18)_42%,rgba(5,5,5,0.78)_100%)] pointer-events-none"></div>
        </div>

        <div className="relative z-20 max-w-[1400px] w-full mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-8">
            <div className="flex items-center gap-4 py-1">
              <div className="w-12 h-[1px] bg-goldPrimary"></div>
              <span className="text-[10px] tracking-[0.3em] text-goldPrimary uppercase font-semibold">Ocean. Craft. Elegance.</span>
            </div>
            <h1 className="font-serif text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[0.95] tracking-tight uppercase reveal-on-scroll">
              <span className="text-textPrimary font-light block">Extraordinary</span>
              <span className="text-goldPrimary italic font-normal block mt-2">By Nature</span>
            </h1>
            <div className="flex items-center gap-3 w-40 my-1">
              <div className="w-full h-[1px] bg-borderGold/40"></div>
              <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 fill-goldPrimary flex-shrink-0">
                <polygon points="5,0 7,3 10,5 7,7 5,10 3,7 0,5 3,3"></polygon>
              </svg>
              <div className="w-full h-[1px] bg-borderGold/40"></div>
            </div>
            <p className="text-textSecondary font-light text-sm md:text-base leading-relaxed max-w-[540px]">
              Nereo celebrates the finest seafood, sourced from pristine global waters and elevated through thoughtful culinary craftsmanship and artful presentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <Link to="/reservations" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E4B760] to-[#B9852E] text-bgPrimary font-bold text-[11px] tracking-[0.2em] uppercase px-8 py-4 border border-[rgba(255,255,255,0.1)] hover:brightness-110 shadow-lg shadow-[#000000e6] transition-all duration-300">
                <iconify-icon icon="solar:calendar-linear" width="16"></iconify-icon> Reserve A Table
              </Link>
              <Link to="/menu" className="inline-flex items-center justify-center gap-2 border border-borderGold/50 backdrop-blur-md bg-white/5 text-textPrimary font-medium text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-goldPrimary hover:text-bgPrimary transition-all duration-300">
                <iconify-icon icon="solar:book-2-linear" width="16"></iconify-icon> View Menu
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-borderGold/20 w-full max-w-[580px]">
              {[
                { icon: "solar:leaf-linear", text: "Sustainable Sourcing" },
                { icon: "solar:medal-ribbon-linear", text: "Culinary Excellence", border: true },
                { icon: "solar:glass-water-linear", text: "Curated Experiences", border: true }
              ].map((badge, i) => (
                <div key={i} className={`flex items-center gap-3 ${badge.border ? 'border-l border-borderGold/20 pl-4' : ''}`}>
                  <iconify-icon icon={badge.icon} width="20" className="text-goldPrimary flex-shrink-0"></iconify-icon>
                  <span className="text-[9px] font-medium tracking-widest text-textSecondary uppercase leading-tight">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6 justify-center items-end relative z-20 mt-12 lg:mt-0">
            <div className="glass-card w-full max-w-[340px] p-6 rounded-[20px] reveal-on-scroll">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-3xl font-light text-textPrimary tracking-wider">4.9 / 5</h3>
                  <div className="flex gap-1 mt-1 text-goldPrimary">
                    {[...Array(5)].map((_, i) => <iconify-icon key={i} icon="solar:star-bold" width="14"></iconify-icon>)}
                  </div>
                  <p className="text-[10px] text-textMuted tracking-widest mt-2 uppercase">Exceptional Dining</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-borderGold/30 flex items-center justify-center bg-goldPrimary/5">
                  <iconify-icon icon="solar:medal-ribbon-linear" width="20" className="text-goldPrimary"></iconify-icon>
                </div>
              </div>
            </div>
            <div className="glass-card w-full max-w-[340px] p-6 rounded-[20px] reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-goldPrimary font-semibold tracking-[0.2em] uppercase">Open Today</span>
                  <h3 className="font-serif text-xl font-light text-textPrimary tracking-wide mt-1">5:00 PM – 11:30 PM</h3>
                  <p className="text-[9px] text-textMuted tracking-wider uppercase mt-1">Valet Parking Available</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-borderGold/30 flex items-center justify-center bg-goldPrimary/5">
                  <iconify-icon icon="solar:clock-circle-linear" width="20" className="text-goldPrimary"></iconify-icon>
                </div>
              </div>
            </div>
            <div className="glass-card w-full max-w-[340px] p-6 rounded-[20px] reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-borderGold/30 flex items-center justify-center bg-goldPrimary/5 mt-1 flex-shrink-0">
                  <iconify-icon icon="solar:chef-hat-linear" width="20" className="text-goldPrimary"></iconify-icon>
                </div>
                <div>
                  <span className="text-[9px] text-goldPrimary font-semibold tracking-[0.2em] uppercase">Chef Recommendation</span>
                  <h4 className="font-serif text-lg font-light text-textPrimary mt-1">Wild Lobster Tail</h4>
                  <p className="text-xs text-textSecondary font-light mt-1 leading-relaxed">Seared to perfection with truffle beurre blanc & pristine oscietra caviar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:py-28 border-borderGold/10 overflow-hidden border-t pt-20 pb-20 relative">
        <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-16 text-center space-y-12">
          <span className="text-[9px] text-goldPrimary font-medium tracking-[0.3em] uppercase block reveal-on-scroll">Acclaimed By Authorities</span>
          
          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-24 opacity-40 grayscale contrast-125 reveal-on-scroll">
            {['MICHELIN GUIDE', 'THE NEW YORK TIMES', 'FORBES TRAVEL', 'RELAIS & CHATEAUX'].map(brand => (
              <span key={brand} className="font-serif text-lg tracking-[0.2em] text-textPrimary">{brand}</span>
            ))}
          </div>

          <div className="max-w-3xl mx-auto pt-10 reveal-on-scroll">
            <div className="flex justify-center text-goldPrimary mb-6">
              <iconify-icon icon="solar:chat-round-line-linear" width="40" className="opacity-30"></iconify-icon>
            </div>
            <div className="relative w-full h-[280px] md:h-[200px] flex items-center justify-center mt-2">
              {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className={`absolute inset-0 w-full transition-opacity duration-1000 ease-in-out flex flex-col justify-start ${idx === activeTestimonial ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                  <p className="font-serif text-2xl md:text-3xl text-textPrimary font-light italic leading-relaxed tracking-tight">{t.quote}</p>
                  <div className="mt-6">
                    <span className="text-[10px] tracking-widest text-goldPrimary font-semibold uppercase block">{t.author}</span>
                    <span className="text-[9px] text-textMuted uppercase mt-1 block">{t.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-bgPrimary relative border-t border-borderGold/10">
        <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="reveal-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-goldPrimary"></div>
              <span className="text-[10px] tracking-[0.25em] text-goldPrimary uppercase">The Experience Details</span>
            </div>
            <h2 className="font-serif text-4xl leading-tight mb-6">Unveiling The<br/><span className="italic text-goldPrimary">Nereo Journey</span></h2>
            <p className="text-textSecondary font-light leading-relaxed text-sm mb-6">
              To dine at Nereo is to step into a meticulously curated environment designed to captivate all the senses. Every element, from the ambient candlelight casting soft glows on golden cutlery to the gentle hum of our coastal acoustics, is tailored for perfection.
            </p>
            <p className="text-textMuted font-light leading-relaxed text-sm">
              We invite our guests to embrace the rhythm of the ocean and the unparalleled dedication of our service artisans.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 reveal-on-scroll">
            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/02cf60ad-d7d1-4bac-b30e-5852d4ba78dc_800w.jpg" alt="Restaurant Interior" className="w-full h-full object-cover rounded-xl border border-borderGold/20 aspect-square" />
            <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80" alt="Cocktail Experience" className="w-full h-full object-cover rounded-xl border border-borderGold/20 aspect-square mt-8" />
          </div>
        </div>
      </section>

      {/* Appended Sub-Pages for Single-Page Experience */}
      <About />
      <Menu />
      <Philosophy />
      <Gallery />
      <Reservations />
    </>
  );
}