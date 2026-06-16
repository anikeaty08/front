import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      const mobileToggle = document.getElementById("mobileToggle");
      const mobileMenu = document.getElementById("mobileMenu");
      const iconMenu = document.getElementById("iconMenu");
      const iconX = document.getElementById("iconX");
      const backdrop = document.getElementById("backdrop");
      const pillarIds = ["pillar1", "pillar2", "pillar3", "pillar4", "pillar5", "pillar6"];

      function toggleMobileMenu() {
        if (!mobileMenu) return;
        const isOpen = mobileMenu.style.maxHeight && mobileMenu.style.maxHeight !== "0px";
        if (isOpen) {
          mobileMenu.style.maxHeight = "0px";
          iconMenu.classList.remove("hidden");
          iconX.classList.add("hidden");
        } else {
          mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
          iconMenu.classList.add("hidden");
          iconX.classList.remove("hidden");
        }
      }

      if (mobileToggle) {
        mobileToggle.addEventListener("click", toggleMobileMenu);
      }

      function openPillar(id) {
        if (!backdrop) return;
        backdrop.classList.remove("pointer-events-none", "opacity-0");
        backdrop.classList.add("opacity-100");
        pillarIds.forEach((pid) => {
          const el = document.getElementById(pid);
          if (!el) return;
          if (pid === id) {
            el.classList.remove("hidden");
          } else {
            el.classList.add("hidden");
          }
        });
      }

      function closePillars() {
        if (!backdrop) return;
        backdrop.classList.add("pointer-events-none", "opacity-0");
        backdrop.classList.remove("opacity-100");
        pillarIds.forEach((pid) => {
          const el = document.getElementById(pid);
          if (el) el.classList.add("hidden");
        });
      }

      if (backdrop) {
        backdrop.addEventListener("click", closePillars);
      }

      const yearEl = document.getElementById("year");
      if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
      }

      window.openPillar = openPillar;
      window.closePillars = closePillars;
      window.toggleMobileMenu = toggleMobileMenu;
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen flex flex-col bg-black">

<div className="fixed inset-0 bg-black/60 opacity-0 pointer-events-none transition-opacity duration-200 z-30" id="backdrop"></div>

<header className="fixed top-0 inset-x-0 z-40 border-b border-white/5 bg-black/70 backdrop-blur-sm">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

<div className="flex items-center space-x-2">
<div className="h-8 w-8 flex items-center justify-center border border-amber-500/60 rounded-sm text-xs tracking-[0.18em] font-[Cinzel] font-medium text-amber-400">
              AR
            </div>
<div className="flex flex-col leading-tight">
<span className="text-sm sm:text-base font-[Cinzel] tracking-[0.22em]">
                AGOGE
              </span>
<span className="text-[11px] uppercase tracking-[0.26em] text-zinc-400">
                RETREATS
              </span>
</div>
</div>

<nav className="hidden md:flex items-center space-x-8 text-sm">
<button className="text-zinc-300 hover:text-white transition-colors" onclick="document.getElementById('what').scrollIntoView({behavior:'smooth'})">
              About
            </button>
<button className="text-zinc-300 hover:text-white transition-colors" onclick="document.getElementById('pillars').scrollIntoView({behavior:'smooth'})">
              Pillars
            </button>
<button className="text-zinc-300 hover:text-white transition-colors" onclick="document.getElementById('testimonials').scrollIntoView({behavior:'smooth'})">
              Stories
            </button>
<button className="text-zinc-300 hover:text-white transition-colors" onclick="document.getElementById('faq').scrollIntoView({behavior:'smooth'})">
              FAQ
            </button>
<div className="h-6 w-px bg-zinc-700"></div>

<a aria-label="Instagram" className="text-zinc-400 hover:text-white transition-colors" href="#">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a aria-label="YouTube" className="text-zinc-400 hover:text-white transition-colors" href="#">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58Z"></path>
<path d="m10 15 5-3-5-3v6z"></path>
</svg>
</a>

<button className="ml-4 inline-flex items-center rounded-full border border-amber-500/70 bg-amber-500/10 px-4 py-2 text-xs font-medium tracking-[0.16em] uppercase text-amber-300 hover:bg-amber-500/20 hover:border-amber-400 transition-colors" onclick="document.getElementById('apply').scrollIntoView({behavior:'smooth'})">
              Join the Brotherhood
            </button>
</nav>

<button aria-label="Open navigation" className="md:hidden inline-flex items-center justify-center rounded-md border border-zinc-700 bg-zinc-900/70 p-2 text-zinc-200 hover:border-amber-500 hover:text-white transition-colors" id="mobileToggle">
<svg className="h-5 w-5" fill="none" id="iconMenu" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="3" x2="21" y1="6" y2="6"></line>
<line x1="3" x2="21" y1="12" y2="12"></line>
<line x1="3" x2="21" y1="18" y2="18"></line>
</svg>
<svg className="h-5 w-5 hidden" fill="none" id="iconX" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>
</div>

<div className="md:hidden max-h-0 overflow-hidden border-t border-white/5 bg-black/95 backdrop-blur-sm transition-all duration-200" id="mobileMenu">
<div className="px-4 pb-4 pt-2 space-y-3 text-sm">
<button className="block w-full text-left text-zinc-300 hover:text-white py-1" onclick="document.getElementById('what').scrollIntoView({behavior:'smooth'});toggleMobileMenu()">
              About
            </button>
<button className="block w-full text-left text-zinc-300 hover:text-white py-1" onclick="document.getElementById('pillars').scrollIntoView({behavior:'smooth'});toggleMobileMenu()">
              Pillars
            </button>
<button className="block w-full text-left text-zinc-300 hover:text-white py-1" onclick="document.getElementById('testimonials').scrollIntoView({behavior:'smooth'});toggleMobileMenu()">
              Stories
            </button>
<button className="block w-full text-left text-zinc-300 hover:text-white py-1" onclick="document.getElementById('faq').scrollIntoView({behavior:'smooth'});toggleMobileMenu()">
              FAQ
            </button>
<div className="pt-2 border-t border-zinc-800 flex items-center justify-between">
<div className="flex space-x-4">
<a aria-label="Instagram" className="text-zinc-400 hover:text-white transition-colors" href="#">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a aria-label="YouTube" className="text-zinc-400 hover:text-white transition-colors" href="#">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58Z"></path>
<path d="m10 15 5-3-5-3v6z"></path>
</svg>
</a>
</div>
<button className="inline-flex items-center rounded-full border border-amber-500/70 bg-amber-500/10 px-3 py-1.5 text-[11px] font-medium tracking-[0.16em] uppercase text-amber-300 hover:bg-amber-500/20 hover:border-amber-400 transition-colors" onclick="document.getElementById('apply').scrollIntoView({behavior:'smooth'});toggleMobileMenu()">
                Join the Brotherhood
              </button>
</div>
</div>
</div>
</header>

<main className="flex-1">

<section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">

<div className="absolute inset-0">
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&amp;fit=crop&amp;w=1600&amp;q=80">

<source src="" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
</div>

<div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 flex flex-col items-center text-center">
<p className="mb-4 text-xs sm:text-sm uppercase tracking-[0.28em] text-amber-400/80 font-[Cinzel]">
              MASCULINE TRANSFORMATION RETREATS
            </p>
<h1 className="font-[Cinzel] text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] font-semibold tracking-tight text-white">
              RETURN TO YOUR ROOTS
            </h1>
<p className="mt-5 max-w-2xl text-sm sm:text-base md:text-lg text-zinc-300">
              You weren't meant to live like this. Reclaim the strength, clarity,
              and brotherhood your ancestors knew.
            </p>

<div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
<button className="inline-flex items-center justify-center rounded-full border border-amber-500/80 bg-amber-500/20 px-8 py-3 text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-amber-200 shadow-[0_0_0_1px_rgba(0,0,0,0.8)] hover:bg-amber-500/30 hover:border-amber-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all" onclick="document.getElementById('apply').scrollIntoView({behavior:'smooth'})">
                Join the Brotherhood
              </button>
<button className="inline-flex items-center justify-center rounded-full border border-zinc-600/80 bg-black/40 px-7 py-3 text-xs sm:text-sm font-medium tracking-[0.16em] uppercase text-zinc-200 hover:text-white hover:border-amber-400 hover:bg-zinc-900/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all" onclick="document.getElementById('why').scrollIntoView({behavior:'smooth'})">
                See What's Missing
              </button>
</div>

<div className="mt-8 max-w-xl text-[13px] text-zinc-400">
<p>
                3–5 day, men-only immersive retreats in the wilderness. Small
                groups. All-inclusive. Built for high-performing men who refuse
                modern weakness.
              </p>
</div>
</div>

<div className="absolute bottom-6 inset-x-0 flex justify-center">
<button className="group inline-flex flex-col items-center text-[11px] uppercase tracking-[0.26em] text-zinc-500 hover:text-zinc-300 transition-colors" onclick="document.getElementById('why').scrollIntoView({behavior:'smooth'})">
              Scroll
              <span className="mt-2 h-8 w-px bg-gradient-to-b from-zinc-600 to-transparent group-hover:from-amber-500 group-hover:to-transparent transition-colors"></span>
</button>
</div>
</section>

<section className="relative border-t border-white/5 bg-gradient-to-b from-black via-[#020304] to-black" id="why">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
<div className="max-w-3xl">
<p className="text-xs uppercase tracking-[0.26em] text-amber-400/80 font-[Cinzel] mb-3">
                Chapter I
              </p>
<h2 className="font-[Cinzel] text-3xl sm:text-4xl md:text-[2.5rem] font-semibold tracking-tight mb-4">
                The Modern Disconnection
              </h2>
<p className="text-sm sm:text-base text-zinc-300 max-w-xl">
                You're not broken. You're out of alignment. The system numbed
                you, softened you, separated you from what you are.
              </p>
</div>
<div className="mt-10 grid gap-6 sm:gap-7 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

<article className="relative flex flex-col rounded-xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/80 to-black/80 p-5 sm:p-6 hover:border-amber-500/70 hover:bg-zinc-900/80 transition-colors">
<div className="absolute inset-0 pointer-events-none rounded-xl bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.04),_transparent_55%)]"></div>
<h3 className="font-[Cinzel] text-lg font-medium tracking-tight text-white">
                  Disconnection from Body
                </h3>
<p className="mt-3 text-sm text-zinc-300">
                  You're trapped in meetings, staring at screens, drowning in
                  fluorescent lights. Your body is failing you – low testosterone,
                  poor sleep, brain fog.
                </p>
</article>

<article className="relative flex flex-col rounded-xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/80 to-black/80 p-5 sm:p-6 hover:border-amber-500/70 hover:bg-zinc-900/80 transition-colors">
<div className="absolute inset-0 pointer-events-none rounded-xl bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.04),_transparent_55%)]"></div>
<h3 className="font-[Cinzel] text-lg font-medium tracking-tight text-white">
                  Disconnection from Purpose
                </h3>
<p className="mt-3 text-sm text-zinc-300">
                  You've achieved success but feel hollow. Misalignment. Drifting
                  through life doing things you don't believe in. Something ancient
                  is missing.
                </p>
</article>

<article className="relative flex flex-col rounded-xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/80 to-black/80 p-5 sm:p-6 hover:border-amber-500/70 hover:bg-zinc-900/80 transition-colors">
<div className="absolute inset-0 pointer-events-none rounded-xl bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.04),_transparent_55%)]"></div>
<h3 className="font-[Cinzel] text-lg font-medium tracking-tight text-white">
                  Disconnection from Brotherhood
                </h3>
<p className="mt-3 text-sm text-zinc-300">
                  Loneliness. Even successful men lack real connection. Shallow
                  relationships. You've never had conversations that truly matter
                  with other men.
                </p>
</article>

<article className="relative flex flex-col rounded-xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/80 to-black/80 p-5 sm:p-6 hover:border-amber-500/70 hover:bg-zinc-900/80 transition-colors">
<div className="absolute inset-0 pointer-events-none rounded-xl bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.04),_transparent_55%)]"></div>
<h3 className="font-[Cinzel] text-lg font-medium tracking-tight text-white">
                  Disconnection from Source
                </h3>
<p className="mt-3 text-sm text-zinc-300">
                  You don't know where your food comes from. You're separated from
                  nature, ancestry, the way humans lived for millennia. Blockages
                  everywhere.
                </p>
</article>
</div>
</div>
</section>

<section className="relative border-t border-white/5 bg-gradient-to-b from-black via-[#050806] to-black" id="what">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
<div className="grid grid-cols-1 lg:grid-cols2 gap-12 items-center lg:items-start">
<div>
<p className="text-xs tracking-[0.26em] text-amber-400/80 font-[Cinzel] mb-3">
                  Chapter II
                </p>
<h2 className="font-[Cinzel] text-3xl sm:text-4xl md:text-[2.5rem] font-semibold tracking-tight mb-4">
                  What Is Agoge?
                </h2>
<p className="text-sm sm:text-base text-zinc-300">
                  Agoge Retreats are 3–5 day immersive experiences for men seeking
                  breakthrough. Set in wilderness locations, these are not wellness
                  vacations – they are masculine reclamation.
                </p>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
                  We keep groups small – usually 8–12 men. You arrive and everything
                  is handled: luxury housing, chef-prepared ancestral meals, and
                  transport from the airport. Your only job is to show up ready to
                  work.
                </p>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
                  We combine elite physical training, ancient practices, and deep
                  brotherhood. Cold exposure. Breathwork. Strength. Fire circles.
                  Purpose workshops. You will be challenged, supported, and
                  changed.
                </p>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
                  Investment starts at <span className="text-amber-300">$2,500</span> per
                  retreat. Men only. Limited spots.
                </p>
</div>

<div className="relative">
<div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-amber-500/20 via-emerald-500/10 to-transparent opacity-40 blur-2xl"></div>
<div className="relative space-y-4">
<div className="overflow-hidden rounded-3xl border border-zinc-700/90 bg-zinc-900/60">
<img alt="Men training outdoors" className="w-full h-52 sm:h-64 object-cover" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="overflow-hidden rounded-2xl border border-zinc-700/80 bg-zinc-900/60">
<img alt="Fire circle brotherhood" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="overflow-hidden rounded-2xl border border-zinc-700/80 bg-zinc-900/60">
<img alt="Wilderness landscape" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
<p className="text-[12px] text-zinc-500">
                    Footage and stills from past trainings and retreats. Future
                    events will bring even more cinematic documentation.
                  </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/5 bg-gradient-to-b from-black via-[#050709] to-black" id="pillars">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
<div className="flex flex-col md:flex-row md:items-end md:justify-between">
<div className="max-w-3xl">
<p className="text-xs uppercase tracking-[0.26em] text-amber-400/80 font-[Cinzel] mb-3">
                  Chapter III
                </p>
<h2 className="font-[Cinzel] text-3xl sm:text-4xl md:text-[2.5rem] font-semibold tracking-tight mb-4">
                  The Six Pillars
                </h2>
<p className="text-sm sm:text-base text-zinc-300 max-w-xl">
                  This is how we rebuild you – body, mind, spirit, and brotherhood.
                  Each pillar stands on its own. Together, they form a new way of
                  living.
                </p>
</div>
</div>

<div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

<button className="group relative overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-950/60 hover:border-amber-500/80 transition-all text-left" onclick="openPillar('pillar1')">
<div className="relative h-44">
<img alt="Physical training outdoors" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
<div>
<p className="text-[11px] uppercase tracking-[0.24em] text-amber-300/90 font-[Cinzel]">
                        Pillar I
                      </p>
<h3 className="mt-1 font-[Cinzel] text-xl font-medium tracking-tight text-white">
                        Physical Training
                      </h3>
</div>
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-amber-500/60 bg-black/60 text-amber-300 group-hover:bg-amber-500/20 transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="12" x2="12" y1="8" y2="12"></line>
<line x1="12" x2="12" y1="16" y2="16"></line>
</svg>
</span>
</div>
</div>
<p className="px-4 py-4 text-sm text-zinc-300">
                  Not for aesthetics. For capability – strength, endurance, and
                  primal movement in the elements.
                </p>
</button>

<button className="group relative overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-950/60 hover:border-amber-500/80 transition-all text-left" onclick="openPillar('pillar2')">
<div className="relative h-44">
<img alt="Cold exposure" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
<div>
<p className="text-[11px] uppercase tracking-[0.24em] text-amber-300/90 font-[Cinzel]">
                        Pillar II
                      </p>
<h3 className="mt-1 font-[Cinzel] text-xl font-medium tracking-tight text-white">
                        Cold Exposure
                      </h3>
</div>
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-amber-500/60 bg-black/60 text-amber-300 group-hover:bg-amber-500/20 transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="12" x2="12" y1="8" y2="12"></line>
<line x1="12" x2="12" y1="16" y2="16"></line>
</svg>
</span>
</div>
</div>
<p className="px-4 py-4 text-sm text-zinc-300">
                  Ice rewires your nervous system. Three minutes in the cold teaches
                  you more than a year of comfort.
                </p>
</button>

<button className="group relative overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-950/60 hover:border-amber-500/80 transition-all text-left" onclick="openPillar('pillar3')">
<div className="relative h-44">
<img alt="Breathwork" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
<div>
<p className="text-[11px] uppercase tracking-[0.24em] text-amber-300/90 font-[Cinzel]">
                        Pillar III
                      </p>
<h3 className="mt-1 font-[Cinzel] text-xl font-medium tracking-tight text-white">
                        Breathwork
                      </h3>
</div>
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-amber-500/60 bg-black/60 text-amber-300 group-hover:bg-amber-500/20 transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="12" x2="12" y1="8" y2="12"></line>
<line x1="12" x2="12" y1="16" y2="16"></line>
</svg>
</span>
</div>
</div>
<p className="px-4 py-4 text-sm text-zinc-300">
                  Ancient techniques to unlock trapped energy, clear blockages, and
                  access altered states – tools you take home.
                </p>
</button>

<button className="group relative overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-950/60 hover:border-amber-500/80 transition-all text-left" onclick="openPillar('pillar4')">
<div className="relative h-44">
<img alt="Brotherhood circles" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
<div>
<p className="text-[11px] uppercase tracking-[0.24em] text-amber-300/90 font-[Cinzel]">
                        Pillar IV
                      </p>
<h3 className="mt-1 font-[Cinzel] text-xl font-medium tracking-tight text-white">
                        Brotherhood Circles
                      </h3>
</div>
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-amber-500/60 bg-black/60 text-amber-300 group-hover:bg-amber-500/20 transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="12" x2="12" y1="8" y2="12"></line>
<line x1="12" x2="12" y1="16" y2="16"></line>
</svg>
</span>
</div>
</div>
<p className="px-4 py-4 text-sm text-zinc-300">
                  Real conversation. Guided circles where men speak the truth
                  they've never voiced – and are met with respect.
                </p>
</button>

<button className="group relative overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-950/60 hover:border-amber-500/80 transition-all text-left" onclick="openPillar('pillar5')">
<div className="relative h-44">
<img alt="Nature immersion" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
<div>
<p className="text-[11px] uppercase tracking-[0.24em] text-amber-300/90 font-[Cinzel]">
                        Pillar V
                      </p>
<h3 className="mt-1 font-[Cinzel] text-xl font-medium tracking-tight text-white">
                        Nature Immersion
                      </h3>
</div>
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-amber-500/60 bg-black/60 text-amber-300 group-hover:bg-amber-500/20 transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="12" x2="12" y1="8" y2="12"></line>
<line x1="12" x2="12" y1="16" y2="16"></line>
</svg>
</span>
</div>
</div>
<p className="px-4 py-4 text-sm text-zinc-300">
                  Out of the city, off the grid. Forest, stone, water, fire. Your
                  nervous system remembers how to breathe.
                </p>
</button>

<button className="group relative overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-950/60 hover:border-amber-500/80 transition-all text-left" onclick="openPillar('pillar6')">
<div className="relative h-44">
<img alt="Ancestral meals" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
<div>
<p className="text-[11px] uppercase tracking-[0.24em] text-amber-300/90 font-[Cinzel]">
                        Pillar VI
                      </p>
<h3 className="mt-1 font-[Cinzel] text-xl font-medium tracking-tight text-white">
                        Ancestral Meals
                      </h3>
</div>
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-amber-500/60 bg-black/60 text-amber-300 group-hover:bg-amber-500/20 transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="12" x2="12" y1="8" y2="12"></line>
<line x1="12" x2="12" y1="16" y2="16"></line>
</svg>
</span>
</div>
</div>
<p className="px-4 py-4 text-sm text-zinc-300">
                  Food as medicine. Grass-fed meat, ancestral fats, organic
                  ingredients – fuel for the work, not a distraction from it.
                </p>
</button>
</div>
</div>

<div className="pointer-events-none fixed inset-0 z-40 flex items-center justify-center" id="pillarModals">


<div className="hidden max-w-xl w-full mx-4 rounded-3xl border border-zinc-700 bg-zinc-950/95 backdrop-blur-xl shadow-2xl" id="pillar1">
<div className="overflow-hidden rounded-t-3xl">
<img alt="Physical training" className="w-full h-52 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="p-6 sm:p-7">
<div className="flex items-start justify-between">
<div>
<p className="text-[11px] uppercase tracking-[0.24em] text-amber-300/90 font-[Cinzel]">
                      Pillar I
                    </p>
<h3 className="mt-1 font-[Cinzel] text-2xl font-semibold tracking-tight text-white">
                      Physical Training
                    </h3>
</div>
<button className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 hover:border-amber-500 hover:text-white transition-colors" onclick="closePillars()">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
                  The body is the temple. We train with purpose – not for
                  aesthetics but for capability. Strength, endurance, primal
                  movement, under the sky and on the earth. You remember what it
                  feels like to be an animal again, not a desk ornament.
                </p>
<p className="mt-3 text-sm text-zinc-400">
                  Sessions are tailored to your current level. You don't need to be
                  an athlete to come. You do need to be willing to work.
                </p>
</div>
</div>

<div className="hidden max-w-xl w-full mx-4 rounded-3xl border border-zinc-700 bg-zinc-950/95 backdrop-blur-xl shadow-2xl" id="pillar2">
<div className="overflow-hidden rounded-t-3xl">
<img alt="Cold exposure" className="w-full h-52 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-6 sm:p-7">
<div className="flex items-start justify-between">
<div>
<p className="text-[11px] uppercase tracking-[0.24em] text-amber-300/90 font-[Cinzel]">
                      Pillar II
                    </p>
<h3 className="mt-1 font-[Cinzel] text-2xl font-semibold tracking-tight text-white">
                      Cold Exposure
                    </h3>
</div>
<button className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 hover:border-amber-500 hover:text-white transition-colors" onclick="closePillars()">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
                  The ancients knew what we forgot. Ice rewrites the nervous
                  system. You learn to meet chaos with stillness, pain with
                  presence. Three minutes in the cold exposes the stories you hide
                  behind – and gives you a chance to write new ones.
                </p>
<p className="mt-3 text-sm text-zinc-400">
                  We guide you through safe, progressive exposure. By the time you
                  leave, the cold is no longer an enemy. It's a teacher.
                </p>
</div>
</div>

<div className="hidden max-w-xl w-full mx-4 rounded-3xl border border-zinc-700 bg-zinc-950/95 backdrop-blur-xl shadow-2xl" id="pillar3">
<div className="overflow-hidden rounded-t-3xl">
<img alt="Breathwork" className="w-full h-52 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-6 sm:p-7">
<div className="flex items-start justify-between">
<div>
<p className="text-[11px] uppercase tracking-[0.24em] text-amber-300/90 font-[Cinzel]">
                      Pillar III
                    </p>
<h3 className="mt-1 font-[Cinzel] text-2xl font-semibold tracking-tight text-white">
                      Breathwork
                    </h3>
</div>
<button className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 hover:border-amber-500 hover:text-white transition-colors" onclick="closePillars()">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
                  Breath is the most basic technology you carry. We use ancient and
                  modern methods to unlock trapped emotion, clear mental fog, and
                  access non-ordinary states of consciousness – without substances.
                </p>
<p className="mt-3 text-sm text-zinc-400">
                  You leave with a daily breath practice that keeps you grounded in
                  the city the way you felt in the mountains.
                </p>
</div>
</div>

<div className="hidden max-w-xl w-full mx-4 rounded-3xl border border-zinc-700 bg-zinc-950/95 backdrop-blur-xl shadow-2xl" id="pillar4">
<div className="overflow-hidden rounded-t-3xl">
<img alt="Brotherhood" className="w-full h-52 object-cover" src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="p-6 sm:p-7">
<div className="flex items-start justify-between">
<div>
<p className="text-[11px] uppercase tracking-[0.24em] text-amber-300/90 font-[Cinzel]">
                      Pillar IV
                    </p>
<h3 className="mt-1 font-[Cinzel] text-2xl font-semibold tracking-tight text-white">
                      Brotherhood Circles
                    </h3>
</div>
<button className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 hover:border-amber-500 hover:text-white transition-colors" onclick="closePillars()">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
                  No small talk. No posturing. Just men telling the truth about
                  where they are, what they fear, and what they want – held by other
                  men who refuse to look away.
                </p>
<p className="mt-3 text-sm text-zinc-400">
                  Many men say these fire circles are the first time they've ever
                  felt fully seen by other men. It changes how you relate forever.
                </p>
</div>
</div>

<div className="hidden max-w-xl w-full mx-4 rounded-3xl border border-zinc-700 bg-zinc-950/95 backdrop-blur-xl shadow-2xl" id="pillar5">
<div className="overflow-hidden rounded-t-3xl">
<img alt="Nature immersion" className="w-full h-52 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="p-6 sm:p-7">
<div className="flex items-start justify-between">
<div>
<p className="text-[11px] uppercase tracking-[0.24em] text-amber-300/90 font-[Cinzel]">
                      Pillar V
                    </p>
<h3 className="mt-1 font-[Cinzel] text-2xl font-semibold tracking-tight text-white">
                      Nature Immersion
                    </h3>
</div>
<button className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 hover:border-amber-500 hover:text-white transition-colors" onclick="closePillars()">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
                  Days spent in forests, by rivers, under open sky. Hiking, grounding
                  on earth, moving with the land instead of against it. Your nervous
                  system decompresses in ways no supplement can replicate.
                </p>
<p className="mt-3 text-sm text-zinc-400">
                  We use nature as both a mirror and a mentor. The mountains don't
                  care about your ego. They respond only to your presence.
                </p>
</div>
</div>

<div className="hidden max-w-xl w-full mx-4 rounded-3xl border border-zinc-700 bg-zinc-950/95 backdrop-blur-xl shadow-2xl" id="pillar6">
<div className="overflow-hidden rounded-t-3xl">
<img alt="Ancestral meals" className="w-full h-52 object-cover" src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="p-6 sm:p-7">
<div className="flex items-start justify-between">
<div>
<p className="text-[11px] uppercase tracking-[0.24em] text-amber-300/90 font-[Cinzel]">
                      Pillar VI
                    </p>
<h3 className="mt-1 font-[Cinzel] text-2xl font-semibold tracking-tight text-white">
                      Ancestral Meals
                    </h3>
</div>
<button className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 hover:border-amber-500 hover:text-white transition-colors" onclick="closePillars()">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
                  Food is signal. We serve chef-prepared, locally sourced, organic
                  meals – grass-fed meat, seasonal produce, ancestral fats. No seed
                  oils, no junk, no crash.
                </p>
<p className="mt-3 text-sm text-zinc-400">
                  Around the table, we teach practical nutrition and lifestyle
                  protocols so you can keep your hormones and energy high long after
                  you leave.
                </p>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/5 bg-gradient-to-b from-black via-[#050405] to-black" id="testimonials">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
<div className="flex flex-col md:flex-row md:items-end md:justify-between">
<div className="max-w-3xl">
<p className="text-xs uppercase tracking-[0.26em] text-amber-400/80 font-[Cinzel] mb-3">
                  Chapter IV
                </p>
<h2 className="font-[Cinzel] text-3xl sm:text-4xl md:text-[2.5rem] font-semibold tracking-tight mb-4">
                  Breakthrough Stories
                </h2>
<p className="text-sm sm:text-base text-zinc-300 max-w-xl">
                  Real men. Real lives shifted. No hype – just what happens when you
                  step away from the noise and into the fire.
                </p>
</div>
</div>
<div className="mt-10 grid gap-8 lg:grid-cols-2">

<article className="relative rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 sm:p-6 flex flex-col">
<div className="relative overflow-hidden rounded-xl">
<img alt="Testimonial Austin" className="w-full h-52 object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<button className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-colors">
<span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/80 bg-black/80 text-amber-300 hover:bg-amber-500/20 transition-colors">
<svg className="w-7 h-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="9 18 15 12 9 6 9 18"></polygon>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</span>
</button>
</div>
<div className="mt-5 flex-1">
<p className="text-sm sm:text-base text-zinc-200">
                    "I make six figures, have success by every measure, but I was
                    lost. Three days in the mountains with these men gave me the
                    clarity I've been searching for. I know my next move now."
                  </p>
<p className="mt-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Austin · 41 · Entrepreneur
                  </p>
</div>
</article>

<div className="space-y-6">
<article className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 sm:p-6">
<p className="text-sm sm:text-base text-zinc-200">
                    "I've never had conversations like this. In 10 years of business
                    networking, I've never connected with men at this level. I didn't
                    realize how lonely I was until I wasn't anymore."
                  </p>
<p className="mt-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Dalton · 34 · Executive
                  </p>
</article>
<article className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 sm:p-6">
<p className="text-sm sm:text-base text-zinc-200">
                    "I came in burnt out, numb, and angry for reasons I couldn't
                    name. I left with a vision, a plan, and a group of brothers who
                    won't let me hide from it."
                  </p>
<p className="mt-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Josh · 29 · Agency Owner
                  </p>
</article>
<article className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 sm:p-6">
<p className="text-sm sm:text-base text-zinc-200">
                    "This isn't a spa retreat. It's a rite of passage. I came back
                    to my family as a different man – clearer, calmer, and more
                    convicted."
                  </p>
<p className="mt-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Anonymous · 37 · Father &amp; Operator
                  </p>
</article>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/5 bg-gradient-to-b from-black via-[#060708] to-black" id="founder">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
<div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-12 lg:gap-16 items-center">

<div>
<p className="text-xs uppercase tracking-[0.26em] text-amber-400/80 font-[Cinzel] mb-3">
                  Chapter V
                </p>
<h2 className="font-[Cinzel] text-3xl sm:text-4xl md:text-[2.5rem] font-semibold tracking-tight mb-4">
                  Meet Matthew
                </h2>
<p className="text-sm sm:text-base text-zinc-300">
                  I've been a visionary since I was ten. I've always seen what's
                  possible – not just for myself, but for the men around me. Agoge
                  isn't a side project. It's the manifestation of a lifelong calling
                  to build something that matters.
                </p>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
                  I've walked every side of this story. Athlete. Personal trainer in
                  the gym grind. Corporate sales – the burnout, the fluorescent
                  lights, the soul-crushing quota. I escaped the matrix, built an
                  online business while traveling, and still felt the pull toward
                  something deeper.
                </p>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
                  Alone in the wilderness of Estonia, on my own retreat, the vision
                  became a mission. I found my breakthrough. Now I build them for
                  other men.
                </p>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
                  I'm not here to run events. I'm here to build an army of sovereign
                  men who refuse modern weakness and remember who they are. If
                  reading this stirs something in you – that's the call. Answer it.
                </p>
</div>

<div className="relative">
<div className="absolute -inset-1 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.22),_transparent_55%)] opacity-50"></div>
<div className="relative rounded-3xl border border-zinc-800 bg-zinc-950/70 overflow-hidden">
<img alt="Matthew leading training" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="border-t border-zinc-800 bg-black/80 px-6 py-5 flex items-center justify-between">
<div>
<p className="text-[11px] uppercase tracking-[0.26em] text-amber-300 font-[Cinzel]">
                        The Guide
                      </p>
<p className="mt-1 text-sm text-zinc-300">
                        Strength coach, retreat builder, brother among brothers.
                      </p>
</div>

<div className="h-12 w-12 flex items-center justify-center rounded-full border border-amber-500/70 bg-black/60">
<div className="h-7 w-7 border border-amber-400/80 flex items-center justify-center">
<div className="h-4 w-0.5 bg-amber-400"></div>
</div>
</div>
</div>
</div>
<p className="mt-3 text-[12px] text-zinc-500">
                  Warrior imagery throughout the site honors Crusader, Norse, and
                  Roman lineages – not as cosplay, but as remembrance.
                </p>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/5 bg-gradient-to-b from-black via-[#050607] to-black" id="values">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
<div className="max-w-3xl">
<p className="text-xs uppercase tracking-[0.26em] text-amber-400/80 font-[Cinzel] mb-3">
                Chapter VI
              </p>
<h2 className="font-[Cinzel] text-3xl sm:text-4xl md:text-[2.5rem] font-semibold tracking-tight mb-4">
                The Code
              </h2>
<p className="text-sm sm:text-base text-zinc-300 max-w-xl">
                This is more than a weekend away. When you step into Agoge, you
                step under a code. These values shape how we train, speak, and live.
              </p>
</div>
<div className="mt-10 grid gap-6 md:grid-cols-2">

<article className="relative rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 sm:p-6">
<div className="absolute inset-0 rounded-2xl pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.06),_transparent_55%)]"></div>
<h3 className="font-[Cinzel] text-xl font-medium tracking-tight text-white">
                  Honor
                </h3>
<p className="mt-3 text-sm text-zinc-300">
                  We keep our word. We tell the truth. We move through training,
                  conflict, and brotherhood with integrity – to ourselves and each
                  other.
                </p>
</article>

<article className="relative rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 sm:p-6">
<div className="absolute inset-0 rounded-2xl pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.06),_transparent_55%)]"></div>
<h3 className="font-[Cinzel] text-xl font-medium tracking-tight text-white">
                  Discipline
                </h3>
<p className="mt-3 text-sm text-zinc-300">
                  Transformation costs something. We embrace early mornings,
                  difficult reps, uncomfortable conversations. Discipline is how we
                  earn freedom.
                </p>
</article>

<article className="relative rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 sm:p-6">
<div className="absolute inset-0 rounded-2xl pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.06),_transparent_55%)]"></div>
<h3 className="font-[Cinzel] text-xl font-medium tracking-tight text-white">
                  Brotherhood
                </h3>
<p className="mt-3 text-sm text-zinc-300">
                  No man does this alone. We sharpen each other, call each other
                  forward, and refuse to let a brother shrink back into comfort.
                </p>
</article>

<article className="relative rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 sm:p-6">
<div className="absolute inset-0 rounded-2xl pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.06),_transparent_55%)]"></div>
<h3 className="font-[Cinzel] text-xl font-medium tracking-tight text-white">
                  Sovereignty
                </h3>
<p className="mt-3 text-sm text-zinc-300">
                  We refuse to be ruled by systems that weaken us – mentally,
                  physically, financially, spiritually. We become self-governing men
                  who can be trusted.
                </p>
</article>

<article className="relative rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 sm:p-6 md:col-span-2">
<div className="absolute inset-0 rounded-2xl pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.06),_transparent_55%)]"></div>
<h3 className="font-[Cinzel] text-xl font-medium tracking-tight text-white">
                  Remembrance
                </h3>
<p className="mt-3 text-sm text-zinc-300">
                  We look backward to move forward. Our ancestors knew things we've
                  forgotten about strength, ritual, and responsibility. We bring
                  those truths into a modern frame – building families, businesses,
                  and bodies that can carry weight.
                </p>
</article>
</div>
</div>
</section>

<section className="relative border-t border-white/5 bg-[#f5f1e3] text-zinc-900" id="faq">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 divide-y divide-zinc-300/70">
<div className="pb-10 md:pb-12">
<p className="text-xs uppercase tracking-[0.26em] text-amber-800 font-[Cinzel] mb-3">
                Chapter VII
              </p>
<h2 className="font-[Cinzel] text-3xl sm:text-4xl md:text-[2.5rem] font-semibold tracking-tight mb-4">
                Questions Men Ask
              </h2>
<p className="text-sm sm:text-base text-zinc-700 max-w-xl">
                Straight answers. No fluff. If it's not covered here, you'll get the
                details on a call.
              </p>
</div>
<div className="pt-8 space-y-4">

<details className="group rounded-xl bg-white/80 border border-zinc-300 px-4 sm:px-5 py-4">
<summary className="flex cursor-pointer items-center justify-between text-sm sm:text-base text-zinc-900">
<span className="font-medium">What's included in the retreat price?</span>
<span className="ml-4 flex h-7 w-7 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 group-open:border-amber-700 group-open:text-amber-800 transition-colors">
<svg className="w-3.5 h-3.5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</span>
</summary>
<div className="mt-3 text-sm text-zinc-700">
<p>
                    Your investment covers lodging, all meals, ground transport from
                    the designated airport, training sessions, guided breathwork and
                    cold exposure, workshops, and all program materials. The only
                    thing you handle is your flight and any personal gear you choose
                    to bring.
                  </p>
</div>
</details>
<details className="group rounded-xl bg-white/80 border border-zinc-300 px-4 sm:px-5 py-4">
<summary className="flex cursor-pointer items-center justify-between text-sm sm:text-base text-zinc-900">
<span className="font-medium">Do I need to be in great shape?</span>
<span className="ml-4 flex h-7 w-7 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 group-open:border-amber-700 group-open:text-amber-800 transition-colors">
<svg className="w-3.5 h-3.5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</span>
</summary>
<div className="mt-3 text-sm text-zinc-700">
<p>
                    You don't need to be a pro athlete. You do need to be medically
                    cleared for physical activity and willing to push yourself. We
                    scale training to your current capacity and watch you closely.
                    If you're significantly deconditioned, we'll discuss preparation
                    steps before you attend.
                  </p>
</div>
</details>
<details className="group rounded-xl bg-white/80 border border-zinc-300 px-4 sm:px-5 py-4">
<summary className="flex cursor-pointer items-center justify-between text-sm sm:text-base text-zinc-900">
<span className="font-medium">Why is this men-only?</span>
<span className="ml-4 flex h-7 w-7 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 group-open:border-amber-700 group-open:text-amber-800 transition-colors">
<svg className="w-3.5 h-3.5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</span>
</summary>
<div className="mt-3 text-sm text-zinc-700">
<p>
                    Men need spaces where they can drop the performance,
                    competition-for-status, and validation seeking that often comes
                    up around women. This is one of those spaces. Women deserve
                    their own containers. This one is for men only, by design.
                  </p>
</div>
</details>
<details className="group rounded-xl bg-white/80 border border-zinc-300 px-4 sm:px-5 py-4">
<summary className="flex cursor-pointer items-center justify-between text-sm sm:text-base text-zinc-900">
<span className="font-medium">Is this religious or tied to one belief system?</span>
<span className="ml-4 flex h-7 w-7 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 group-open:border-amber-700 group-open:text-amber-800 transition-colors">
<svg className="w-3.5 h-3.5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</span>
</summary>
<div className="mt-3 text-sm text-zinc-700">
<p>
                    We honor God and the reality that there is more to life than
                    matter and metrics. We draw from Christian, stoic, and ancestral
                    perspectives – but we don't push dogma. Men of different faith
                    backgrounds attend, united by a desire for truth, not ideology.
                  </p>
</div>
</details>
<details className="group rounded-xl bg-white/80 border border-zinc-300 px-4 sm:px-5 py-4">
<summary className="flex cursor-pointer items-center justify-between text-sm sm:text-base text-zinc-900">
<span className="font-medium">How long are the retreats and how often do they run?</span>
<span className="ml-4 flex h-7 w-7 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 group-open:border-amber-700 group-open:text-amber-800 transition-colors">
<svg className="w-3.5 h-3.5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</span>
</summary>
<div className="mt-3 text-sm text-zinc-700">
<p>
                    Most retreats run 3–5 days, depending on location and season. We
                    don't run them every weekend. We choose dates intentionally and
                    prioritize quality over volume. When you join the waitlist,
                    you'll get first notice when new dates open.
                  </p>
</div>
</details>
<details className="group rounded-xl bg-white/80 border border-zinc-300 px-4 sm:px-5 py-4">
<summary className="flex cursor-pointer items-center justify-between text-sm sm:text-base text-zinc-900">
<span className="font-medium">What happens after the retreat?</span>
<span className="ml-4 flex h-7 w-7 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 group-open:border-amber-700 group-open:text-amber-800 transition-colors">
<svg className="w-3.5 h-3.5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</span>
</summary>
<div className="mt-3 text-sm text-zinc-700">
<p>
                    A retreat is a catalyst, not the whole journey. You'll leave
                    with clear commitments, tools, and a brotherhood you can stay
                    connected with. As Agoge grows, alumni-only calls, gatherings,
                    and resources will be added.
                  </p>
</div>
</details>
</div>
</div>
</section>

<section className="relative border-t border-white/5 bg-gradient-to-b from-black via-[#060405] to-black" id="apply">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
<div className="text-center">
<p className="text-xs uppercase tracking-[0.26em] text-amber-400/80 font-[Cinzel] mb-3">
                Chapter VIII
              </p>
<h2 className="font-[Cinzel] text-3xl sm:text-4xl md:text-[2.5rem] font-semibold tracking-tight mb-4">
                Ready to Return?
              </h2>
<p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto">
                This isn't a checkout page. It's a doorway. Share your details and
                you'll receive retreat information, dates, and next steps. No spam.
                No pressure. Just a clear path.
              </p>
</div>

<form className="mt-10 max-w-xl mx-auto rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6 sm:p-7 space-y-5">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex flex-col text-left">
<label className="text-xs uppercase tracking-[0.18em] text-zinc-400 mb-2" htmlFor="name">Name</label>
<input className="w-full rounded-lg border border-zinc-700 bg-black/60 px-3 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/80 focus:border-amber-500 transition-all" id="name" placeholder="First &amp; last name" required="" type="text"/>
</div>
<div className="flex flex-col text-left">
<label className="text-xs uppercase tracking-[0.18em] text-zinc-400 mb-2" htmlFor="email">Email</label>
<input className="w-full rounded-lg border border-zinc-700 bg-black/60 px-3 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/80 focus:border-amber-500 transition-all" id="email" placeholder="you@example.com" required="" type="email"/>
</div>
</div>
<div className="flex flex-col text-left">
<label className="text-xs uppercase tracking-[0.18em] text-zinc-400 mb-2" htmlFor="context">What are you seeking?</label>
<textarea className="w-full rounded-lg border border-zinc-700 bg-black/60 px-3 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/80 focus:border-amber-500 transition-all" id="context" placeholder="Optional. A sentence or two about where you are and what you want to shift." rows="3"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center rounded-full border border-amber-500/80 bg-amber-500/20 px-5 py-3 text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-amber-200 hover:bg-amber-500/30 hover:border-amber-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all" type="submit">
                Join the Waitlist
              </button>
<p className="text-[11px] text-zinc-500 text-left">
                You'll receive an email when new retreat dates open. Matthew reviews
                every application personally.
              </p>
</form>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-black">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
<div className="flex items-center space-x-2">
<div className="h-7 w-7 flex items-center justify-center border border-amber-500/60 rounded-sm text-[10px] tracking-[0.18em] font-[Cinzel] text-amber-400">
              AR
            </div>
<span className="tracking-[0.22em] uppercase">
              Agoge Retreats © <span id="year"></span>
</span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-zinc-300 transition-colors" href="#hero">Back to top</a>
<div className="h-3 w-px bg-zinc-700"></div>
<a className="hover:text-zinc-300 transition-colors" href="#">Instagram</a>
<a className="hover:text-zinc-300 transition-colors" href="#">YouTube</a>
</div>
</div>
</footer>
</div>



    </>
  );
}
