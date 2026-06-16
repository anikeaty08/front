import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



          document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('#faq [data-accordion-item]').forEach(item => {
              const open = item.hasAttribute('data-open');
              const btn = item.querySelector('[data-accordion="faq"]');
              const a = item.querySelector('[data-qa="a"]');
              const plus = item.querySelector('[data-icon="plus"]');
              const minus = item.querySelector('[data-icon="minus"]');
              btn.setAttribute('aria-expanded', open ? 'true' : 'false');
              a.classList.toggle('hidden', !open);
              plus.classList.toggle('hidden', open);
              minus.classList.toggle('hidden', !open);
            });

            document.querySelectorAll('#faq [data-accordion="faq"]').forEach(btn => {
              btn.addEventListener('click', () => {
                const item = btn.closest('[data-accordion-item]');
                const content = item.querySelector('[data-qa="a"]');
                const plus = item.querySelector('[data-icon="plus"]');
                const minus = item.querySelector('[data-icon="minus"]');
                const expanded = btn.getAttribute('aria-expanded') === 'true';
                btn.setAttribute('aria-expanded', String(!expanded));
                content.classList.toggle('hidden');
                plus.classList.toggle('hidden');
                minus.classList.toggle('hidden');
                if (window.lucide && typeof lucide.createIcons === 'function') { lucide.createIcons(); }
              });
            });

            if (window.lucide && typeof lucide.createIcons === 'function') { lucide.createIcons(); }
          });
        


      // Render icons
      window.lucide && lucide.createIcons({ attrs: { "stroke-width": 1.5 } });

      // Mobile menu toggle
      const menuBtn = document.getElementById('menuBtn');
      const mobileNav = document.getElementById('mobileNav');
      if (menuBtn && mobileNav) {
        let open = false;
        menuBtn.addEventListener('click', () => {
          open = !open;
          mobileNav.classList.toggle('hidden', !open);
          menuBtn.innerHTML = open
            ? '<i data-lucide="x" class="h-5 w-5 text-white/90"></i>'
            : '<i data-lucide="menu" class="h-5 w-5 text-white/90"></i>';
          lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="relative">
<div className="absolute inset-0">
<img alt="Dawn over distant mountains" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7aa3f483-3978-4416-8322-fa9964864dcb_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#0A1517]/70 via-[#0A1517]/20 to-[#0A1517]"></div>
</div>
<nav className="relative z-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#0D2C31]/70 ring-1 ring-[#3E8593]/30 backdrop-blur">
<svg className="lucide lucide-compass h-4 w-4 text-white/90" data-lucide="compass" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</span>
<span className="uppercase text-lg font-semibold tracking-tighter">NomadIQ</span>
</a>

<div className="hidden md:flex items-center gap-2">
<a className="px-3 py-1.5 rounded-full bg-[#0D2C31]/70 ring-1 ring-[#3E8593]/30 text-sm font-medium text-white/90 hover:bg-[#0D2C31]/90 hover:ring-[#3E8593]/50 transition" href="#">Discover</a>
<a className="px-3 py-1.5 rounded-full bg-[#0D2C31]/50 ring-1 ring-[#3E8593]/30 text-sm font-medium text-white/70 hover:text-white/90 hover:bg-[#0D2C31]/80 hover:ring-[#3E8593]/50 transition" href="#">Toolkit</a>
<a className="px-3 py-1.5 rounded-full bg-[#0D2C31]/50 ring-1 ring-[#3E8593]/30 text-sm font-medium text-white/70 hover:text-white/90 hover:bg-[#0D2C31]/80 hover:ring-[#3E8593]/50 transition" href="#">Journal</a>
<a className="px-3 py-1.5 rounded-full bg-[#0D2C31]/50 ring-1 ring-[#3E8593]/30 text-sm font-medium text-white/70 hover:text-white/90 hover:bg-[#0D2C31]/80 hover:ring-[#3E8593]/50 transition" href="#">Library</a>
</div>

<div className="hidden md:flex items-center gap-3">
<a className="text-sm font-medium text-white/80 hover:text-white transition" href="#">Sign in</a>
<a className="inline-flex items-center gap-2 rounded-full bg-[#D8FF80] text-[#0A1517] px-4 py-2 text-sm font-semibold hover:bg-[#D8FF80]/90 ring-1 ring-[#054956]/20 hover:ring-[#054956]/30 transition" href="#">
                Get started
              </a>
</div>

<button aria-label="Open menu" className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#0D2C31]/70 ring-1 ring-[#3E8593]/30 hover:bg-[#0D2C31]/90 hover:ring-[#3E8593]/50 transition" id="menuBtn">
<i className="h-5 w-5 text-white/90" data-lucide="menu"></i>
</button>
</div>

<div className="md:hidden hidden border-t border-white/10 mt-2 pt-2 pb-3" id="mobileNav">
<div className="grid gap-2">
<a className="px-3 py-2 rounded-lg bg-[#0D2C31]/70 ring-1 ring-[#3E8593]/30 text-sm font-medium text-white/90" href="#">Discover</a>
<a className="px-3 py-2 rounded-lg bg-[#0D2C31]/50 ring-1 ring-[#3E8593]/30 text-sm font-medium text-white/80" href="#">Toolkit</a>
<a className="px-3 py-2 rounded-lg bg-[#0D2C31]/50 ring-1 ring-[#3E8593]/30 text-sm font-medium text-white/80" href="#">Journal</a>
<a className="px-3 py-2 rounded-lg bg-[#0D2C31]/50 ring-1 ring-[#3E8593]/30 text-sm font-medium text-white/80" href="#">Library</a>
<div className="flex items-center justify-between gap-2 pt-2">
<a className="text-sm font-medium text-white/80" href="#">Sign in</a>
<a className="inline-flex items-center gap-2 rounded-full bg-[#D8FF80] text-[#0A1517] px-4 py-2 text-sm font-semibold hover:bg-[#D8FF80]/90 ring-1 ring-[#054956]/20 hover:ring-[#054956]/30 transition" href="#">
<i className="h-4 w-4" data-lucide="sparkles"></i>
                  Get started
                </a>
</div>
</div>
</div>
</div>
</nav>

<section className="relative z-10">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-28 pb-20 lg:pb-36 text-center">
<div className="inline-flex items-center gap-2 rounded-full bg-[#0D2C31]/70 px-3 py-1 ring-1 ring-[#3E8593]/30 backdrop-blur">
<i className="h-4 w-4 text-[#D8FF80]" data-lucide="route"></i>
<span className="text-xs font-medium text-white/80">Adaptive trip planning</span>
</div>
<h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl text-white font-light tracking-tighter">Go anywhere, effortlessly.</h1>
<p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-white/80">
            NomadIQ learns your rhythm—pace, mood, curiosity—to craft routes that feel natural. Every journey is personal, seamless, and unmistakably yours.
          </p>
<div className="flex gap-3 mt-10 items-center justify-center">
<a className="inline-flex items-center gap-2 rounded-full bg-[#D8FF80] text-[#0A1517] px-5 py-3 text-sm sm:text-base font-semibold hover:bg-[#D8FF80]/90 ring-1 ring-[#054956]/20 hover:ring-[#054956]/30 transition" href="#">
              Plan my trip
            </a>
<a className="inline-flex items-center gap-2 sm:text-base hover:bg-[#0D2C31]/80 ring-1 ring-[#3E8593]/30 hover:ring-[#3E8593]/50 transition text-sm font-medium text-white bg-[#0D2C31]/60 rounded-full py-3 px-5 backdrop-blur" href="#">
              See how it works
            </a>
</div>
<div className="mt-6 flex items-center justify-center gap-2 text-xs text-white/70">
<i className="h-3.5 w-3.5" data-lucide="lock"></i>
<span className="uppercase tracking-wider">Private by design</span>
</div>
</div>
</section>
</header>

<section className="relative z-10 -mt-12 pb-24">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
<div className="rounded-2xl bg-[#0D2C31] ring-1 ring-[#3E8593]/30 p-4 backdrop-blur">
<div className="flex gap-3 items-start">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#054956]/40 ring-1 ring-[#3E8593]/40">
<i className="h-4 w-4 text-[#D8FF80]" data-lucide="sparkles"></i>
</span>
<div>
<p className="text-sm font-semibold tracking-tight">AI routecraft</p>
<p className="text-xs text-white/70">Smart suggestions that match your vibe.</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-[#0D2C31] ring-1 ring-[#3E8593]/30 p-4 backdrop-blur">
<div className="flex gap-3 items-start">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#054956]/40 ring-1 ring-[#3E8593]/40">
<i className="h-4 w-4 text-[#D8FF80]" data-lucide="clock"></i>
</span>
<div>
<p className="text-sm font-semibold tracking-tight">Real‑time timing</p>
<p className="text-xs text-white/70">Shifts with weather and crowds.</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-[#0D2C31] ring-1 ring-[#3E8593]/30 p-4 backdrop-blur">
<div className="flex gap-3 items-start">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#054956]/40 ring-1 ring-[#3E8593]/40">
<i className="h-4 w-4 text-[#D8FF80]" data-lucide="wallet"></i>
</span>
<div>
<p className="text-sm font-semibold tracking-tight">Budget aware</p>
<p className="text-xs text-white/70">Optimize for value without the guesswork.</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-[#0D2C31] ring-1 ring-[#3E8593]/30 p-4 backdrop-blur">
<div className="flex gap-3 items-start">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#054956]/40 ring-1 ring-[#3E8593]/40">
<i className="h-4 w-4 text-[#D8FF80]" data-lucide="shield-check"></i>
</span>
<div>
<p className="text-sm font-semibold tracking-tight">Privacy first</p>
<p className="text-xs text-white/70">Your trip data stays with you.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:p-8 bg-[#0D2C31] ring-1 ring-[#3E8593]/30 backdrop-blur rounded-3xl mx-4 sm:mx-8 p-6">
<div className="flex items-center gap-2 text-sm text-white/80">
<i className="h-4 w-4 text-[#D8FF80]" data-lucide="route"></i>
<span>Your Journey</span>
</div>
<div className="mt-2">
<h2 className="text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] font-medium text-white tracking-tighter">The path unfolds.</h2>
<p className="mt-1 text-sm sm:text-base text-white/70">Every adventure begins with a single step forward</p>
</div>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

<article className="flex flex-col min-h-[420px] bg-[#0A1517]/60 ring-1 ring-[#3E8593]/30 rounded-2xl p-5 justify-between">
<div className="space-y-5">
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-full bg-[#054956]/40 ring-1 ring-[#3E8593]/40 flex items-center justify-center">
<i className="h-5 w-5 text-[#D8FF80]" data-lucide="compass"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-white tracking-tight">01. Discover</h3>
<p className="text-xs text-white/60 uppercase tracking-wider">Exploration Phase</p>
</div>
</div>
<p className="text-sm text-white/80">Tell us your vibe and let NomadIQ understand what makes you tick. Every journey starts with knowing yourself.</p>
<div className="flex items-center gap-2 text-white/70">
<i className="h-4 w-4" data-lucide="clock"></i>
<span className="text-xs">2-3 minutes</span>
</div>
</div>
<div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-[#D8FF80]/70 rounded-full" style={{width: '25%'}}></div>
</div>
</article>

<article className="flex flex-col min-h-[420px] bg-[#0A1517]/60 ring-1 ring-[#3E8593]/30 rounded-2xl p-5 justify-between">
<div className="space-y-5">
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-full bg-[#054956]/40 ring-1 ring-[#3E8593]/40 flex items-center justify-center">
<i className="h-5 w-5 text-[#D8FF80]" data-lucide="sparkles"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-white tracking-tight">02. Plan</h3>
<p className="text-xs text-white/60 uppercase tracking-wider">AI Crafting</p>
</div>
</div>
<p className="text-sm text-white/80">Watch as your perfect itinerary takes shape. Our AI weaves together places, timing, and experiences that match your rhythm.</p>
<div className="flex items-center gap-2">
<div className="flex -space-x-1">
<div className="h-6 w-6 rounded-full bg-[#054956]/40 ring-2 ring-[#0D2C31] flex items-center justify-center">
<i className="h-3 w-3 text-white/80" data-lucide="map-pin"></i>
</div>
<div className="h-6 w-6 rounded-full bg-[#054956]/40 ring-2 ring-[#0D2C31] flex items-center justify-center">
<i className="h-3 w-3 text-white/80" data-lucide="calendar"></i>
</div>
<div className="h-6 w-6 rounded-full bg-[#054956]/40 ring-2 ring-[#0D2C31] flex items-center justify-center">
<i className="h-3 w-3 text-white/80" data-lucide="heart"></i>
</div>
</div>
<span className="text-xs text-white/70">Personalized suggestions</span>
</div>
</div>
<div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-[#D8FF80]/70 rounded-full" style={{width: '50%'}}></div>
</div>
</article>

<article className="flex flex-col min-h-[420px] bg-[#0A1517]/60 ring-1 ring-[#3E8593]/30 rounded-2xl p-5 justify-between">
<div className="space-y-5">
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-full bg-[#054956]/40 ring-1 ring-[#3E8593]/40 flex items-center justify-center">
<i className="h-5 w-5 text-[#D8FF80]" data-lucide="camera"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-white tracking-tight">03. Experience</h3>
<p className="text-xs text-white/60 uppercase tracking-wider">Live the Journey</p>
</div>
</div>
<p className="text-sm text-white/80">Your adventure unfolds naturally. Real-time adjustments keep you flowing with the rhythm of discovery.</p>
<div className="space-y-2">
<div className="flex items-center gap-2 text-white/70">
<div className="h-2 w-2 rounded-full bg-[#D8FF80]"></div>
<span className="text-xs">Real-time updates</span>
</div>
<div className="flex items-center gap-2 text-white/70">
<div className="h-2 w-2 rounded-full bg-[#3E8593]"></div>
<span className="text-xs">Adaptive routing</span>
</div>
<div className="flex items-center gap-2 text-white/70">
<div className="h-2 w-2 rounded-full bg-[#054956]"></div>
<span className="text-xs">Seamless flow</span>
</div>
</div>
</div>
<div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-[#D8FF80]/70 rounded-full" style={{width: '75%'}}></div>
</div>
</article>

<article className="flex flex-col min-h-[420px] bg-[#0A1517]/60 ring-1 ring-[#3E8593]/30 rounded-2xl p-5 justify-between">
<div className="space-y-5">
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-full bg-[#054956]/40 ring-1 ring-[#3E8593]/40 flex items-center justify-center">
<i className="h-5 w-5 text-[#D8FF80]" data-lucide="book-open"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-white tracking-tight">04. Reflect</h3>
<p className="text-xs text-white/60 uppercase tracking-wider">Journey's End</p>
</div>
</div>
<p className="text-sm text-white/80">Capture memories and insights. Your experiences help NomadIQ learn and make every future journey even better.</p>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D2C31] ring-1 ring-[#3E8593]/40">
<i className="h-3.5 w-3.5 text-[#D8FF80]" data-lucide="star"></i>
<span className="text-xs text-white/80">Smart learning</span>
</div>
</div>
<div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-[#D8FF80]/70 rounded-full" style={{width: '100%'}}></div>
</div>
</article>
</div>
<div className="mt-8 text-center">
<button className="inline-flex items-center gap-2 rounded-full bg-[#D8FF80] text-[#0A1517] px-6 py-3 text-sm font-semibold hover:bg-[#D8FF80]/90 ring-1 ring-[#054956]/20 hover:ring-[#054956]/30 transition">
<i className="h-4 w-4" data-lucide="play"></i>
          Begin your journey
        </button>
<p className="mt-2 text-xs text-white/70">Start exploring in under 60 seconds</p>
</div>
</section>

<section className="max-w-7xl sm:px-6 sm:mt-20 mx-auto mb-24 px-4" id="faq">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-[#3E8593]/30 bg-[#0D2C31] backdrop-blur">
<div className="relative p-6 sm:p-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

<div className="md:col-span-5">
<h2 className="text-[56px] sm:text-[80px] leading-none font-semibold text-white tracking-tighter">Questions.</h2>
<p className="mt-3 text-sm sm:text-base text-white/80">
                Find answers to common questions about NomadIQ, our adaptive trip planning, and how we can help craft your perfect journey.
              </p>
<a className="mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium tracking-tight text-white/90 bg-[#054956]/50 hover:bg-[#054956]/70 ring-1 ring-[#3E8593]/40 backdrop-blur" href="#contact">
<span>Get in touch</span>
<i className="w-4 h-4" data-lucide="message-circle"></i>
</a>
</div>

<div className="md:col-span-7">
<div className="space-y-3">

<div className="rounded-2xl ring-1 ring-[#3E8593]/30 bg-[#0A1517]/60 backdrop-blur" data-accordion-item="" data-open="true">
<button aria-expanded="true" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white">How does NomadIQ learn my travel preferences?</span>
<span className="shrink-0">
<i className="w-5 h-5 text-white/70 hidden" data-icon="plus" data-lucide="plus"></i>
<i className="w-5 h-5 text-white/70" data-icon="minus" data-lucide="minus"></i>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/80" data-qa="a">
                    NomadIQ analyzes your pace, interests, and past choices to understand your travel rhythm. It starts with a brief onboarding questionnaire, then refines suggestions based on your feedback and interactions. The more you use it, the better it gets at matching your vibe.
                  </div>
</div>

<div className="rounded-2xl ring-1 ring-[#3E8593]/30 bg-[#0A1517]/60 backdrop-blur" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white">Can I use NomadIQ for group trips?</span>
<span className="shrink-0">
<i className="w-5 h-5 text-white/70" data-icon="plus" data-lucide="plus"></i>
<i className="w-5 h-5 text-white/70 hidden" data-icon="minus" data-lucide="minus"></i>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/80 hidden" data-qa="a">
                    Absolutely. NomadIQ can balance different group preferences and find activities that work for everyone. You can share planning responsibilities, vote on options, and create itineraries that keep the whole group happy without the usual coordination headaches.
                  </div>
</div>

<div className="rounded-2xl ring-1 ring-[#3E8593]/30 bg-[#0A1517]/60 backdrop-blur" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white">What happens if my plans change during travel?</span>
<span className="shrink-0">
<i className="w-5 h-5 text-white/70" data-icon="plus" data-lucide="plus"></i>
<i className="w-5 h-5 text-white/70 hidden" data-icon="minus" data-lucide="minus"></i>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/80 hidden" data-qa="a">
                    That's where NomadIQ shines. It adapts in real-time to weather changes, crowds, closures, or simply if you're feeling spontaneous. Tap "replan" and it'll instantly suggest alternatives that fit your current mood and location. Flexibility is built into every suggestion.
                  </div>
</div>

<div className="rounded-2xl ring-1 ring-[#3E8593]/30 bg-[#0A1517]/60 backdrop-blur" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white">Does NomadIQ work offline?</span>
<span className="shrink-0">
<i className="w-5 h-5 text-white/70" data-icon="plus" data-lucide="plus"></i>
<i className="w-5 h-5 text-white/70 hidden" data-icon="minus" data-lucide="minus"></i>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/80 hidden" data-qa="a">
                    Core features work offline once your trip is downloaded. You'll have access to your itinerary, maps, saved places, and emergency contacts. Real-time updates and new suggestions require connection, but you won't be stranded without your plans.
                  </div>
</div>

<div className="rounded-2xl ring-1 ring-[#3E8593]/30 bg-[#0A1517]/60 backdrop-blur" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white">How does budget optimization work?</span>
<span className="shrink-0">
<i className="w-5 h-5 text-white/70" data-icon="plus" data-lucide="plus"></i>
<i className="w-5 h-5 text-white/70 hidden" data-icon="minus" data-lucide="minus"></i>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/80 hidden" data-qa="a">
                    Set your budget range and NomadIQ finds the sweet spots—great experiences that won't break the bank. It tracks pricing patterns, suggests optimal timing for bookings, and balances splurges with savings so you get maximum value from every trip dollar.
                  </div>
</div>

<div className="rounded-2xl ring-1 ring-[#3E8593]/30 bg-[#0A1517]/60 backdrop-blur" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white">What makes NomadIQ different from other trip planners?</span>
<span className="shrink-0">
<i className="w-5 h-5 text-white/70" data-icon="plus" data-lucide="plus"></i>
<i className="w-5 h-5 text-white/70 hidden" data-icon="minus" data-lucide="minus"></i>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/80 hidden" data-qa="a">
                    Most planners give you lists and leave you to figure it out. NomadIQ understands your personal travel rhythm and creates experiences that feel natural to you. It's adaptive, intuitive, and privacy-focused—your data never leaves your device unless you choose to share it.
                  </div>
</div>
</div>
</div>
</div>
</div>

</div></section>


<section className="w-full mx-auto mb-8" id="contact">
<div className="max-w-7xl sm:px-6 lg:px-8 mx-auto px-4">
<div className="relative overflow-hidden ring-1 ring-[#3E8593]/30 bg-[#0D2C31] rounded-3xl backdrop-blur">

<div className="relative z-10 p-8 md:p-12 lg:p-16">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-5">
<div className="rounded-2xl bg-white/95 backdrop-blur ring-1 ring-black/10 shadow-lg p-6">
<div className="flex items-center justify-between">
<div>
<p className="text-[11px] text-neutral-500 uppercase tracking-wider">NomadIQ Support</p>
<h3 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">Have a question?</h3>
</div>
<div className="h-9 w-9 rounded-lg bg-[#0A1517] text-white flex items-center justify-center">
<i className="h-4 w-4" data-lucide="message-square"></i>
</div>
</div>
<form action="#" className="mt-6 space-y-4" method="POST">
<div>
<label className="block text-xs text-neutral-600" htmlFor="ct-name">Your name<span className="text-neutral-400"> *</span></label>
<input className="mt-1 w-full pl-3 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-[#0A1517] outline-none bg-white placeholder:text-neutral-400" id="ct-name" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs text-neutral-600" htmlFor="ct-email">Email<span className="text-neutral-400"> *</span></label>
<div className="relative mt-1">
<i className="h-4 w-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="mail"></i>
<input className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-[#0A1517] outline-none bg-white placeholder:text-neutral-400" id="ct-email" name="email" placeholder="you@example.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-xs text-neutral-600" htmlFor="ct-msg">Message</label>
<textarea className="mt-1 w-full resize-y pl-3 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-[#0A1517] outline-none bg-white placeholder:text-neutral-400" id="ct-msg" name="message" placeholder="How can we help?" rows="4"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center rounded-xl bg-[#0A1517] text-white px-4 py-3 text-sm font-semibold hover:bg-black/80 transition-colors" type="submit">
                      Send message
                      <i className="h-4 w-4 ml-2" data-lucide="arrow-right"></i>
</button>
<p className="text-[11px] text-neutral-500">By submitting, you agree to our Terms and Privacy Policy.</p>
</form>
</div>
</div>

<div className="lg:col-span-7">
<h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] font-semibold text-white tracking-tight">Let's talk.</h2>
<p className="text-base sm:text-lg max-w-2xl text-white/80 mt-4">
                  Tell us about your travel needs—support, partnerships, or bulk bookings. We reply within one business day.
                </p>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-[#054956]/50 ring-1 ring-[#3E8593]/40 flex items-center justify-center text-white/90">
<i className="h-4 w-4" data-lucide="clock-3"></i>
</div>
<div>
<p className="text-white font-semibold text-sm">Quick response</p>
<p className="text-white/70 text-xs">Most messages receive a reply in under 24h.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-[#054956]/50 ring-1 ring-[#3E8593]/40 flex items-center justify-center text-white/90">
<i className="h-4 w-4" data-lucide="route"></i>
</div>
<div>
<p className="text-white font-semibold text-sm">Clear next steps</p>
<p className="text-white/70 text-xs">We'll follow up with a concise plan and timeline.</p>
</div>
</div>
</div>

<div className="mt-8">
<div className="inline-flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur ring-1 ring-black/10 shadow-lg p-3">
<img alt="Team lead" className="h-12 w-12 rounded-xl object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/09f960eb-611f-430b-86b4-1d5a280d6eb8_800w.jpg"/>
<div className="min-w-0">
<p className="text-[11px] text-neutral-500 leading-none uppercase tracking-wider">Team Lead</p>
<p className="text-neutral-900 font-semibold tracking-tight truncate">Ava Kim</p>
</div>
<a className="ml-1 inline-flex items-center gap-2 rounded-xl bg-[#0A1517] text-white px-3 py-2 text-xs font-semibold hover:bg-black/80 transition-colors" href="mailto:hello@nomadiq.com">
                      Ask directly
                      <i className="h-3.5 w-3.5" data-lucide="message-circle"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="max-w-7xl mx-auto px-6 pb-12">
<div className="p-12 lg:p-16 border border-[#3E8593]/30 rounded-3xl bg-[#0D2C31]/60 backdrop-blur-2xl">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
<div className="lg:col-span-1">
<div className="flex items-center mb-6">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#054956]/50 ring-1 ring-[#3E8593]/40 backdrop-blur">
<i className="h-4 w-4 text-white/90" data-lucide="compass"></i>
</span>
<span className="ml-2 uppercase text-lg font-semibold tracking-tighter text-white">NomadIQ</span>
</div>
<p className="text-sm text-white/70 leading-relaxed mb-8">
              Adaptive trip planning that learns your travel rhythm. Go anywhere, effortlessly, with journeys crafted just for you.
            </p>
<div className="flex items-center gap-4">
<a aria-label="X" className="w-10 h-10 rounded-xl flex items-center justify-center border border-[#3E8593]/30 hover:border-[#3E8593]/60 transition-all hover:bg-[#054956]/30 bg-white/[0.03]" href="#">
<i className="h-4 w-4" data-lucide="twitter"></i>
</a>
<a aria-label="LinkedIn" className="w-10 h-10 rounded-xl flex items-center justify-center border border-[#3E8593]/30 hover:border-[#3E8593]/60 transition-all hover:bg-[#054956]/30 bg-white/[0.03]" href="#">
<i className="h-4 w-4" data-lucide="linkedin"></i>
</a>
<a aria-label="Instagram" className="w-10 h-10 rounded-xl flex items-center justify-center border border-[#3E8593]/30 hover:border-[#3E8593]/60 transition-all hover:bg-[#054956]/30 bg-white/[0.03]" href="#">
<i className="h-4 w-4" data-lucide="instagram"></i>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide">Discover</h4>
<ul className="space-y-4">
<li><a className="text-sm text-white/70 hover:text-white transition-colors" href="#">AI Trip Planning</a></li>
<li><a className="text-sm text-white/70 hover:text-white transition-colors" href="#">Smart Routing</a></li>
<li><a className="text-sm text-white/70 hover:text-white transition-colors" href="#">Budget Optimization</a></li>
<li><a className="text-sm text-white/70 hover:text-white transition-colors" href="#">Real-time Updates</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide">Toolkit</h4>
<ul className="space-y-4">
<li><a className="text-sm text-white/70 hover:text-white transition-colors" href="#">Trip Builder</a></li>
<li><a className="text-sm text-white/70 hover:text-white transition-colors" href="#">Travel Journal</a></li>
<li><a className="text-sm text-white/70 hover:text-white transition-colors" href="#">Offline Maps</a></li>
<li><a className="text-sm text-white/70 hover:text-white transition-colors" href="#">Group Planning</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide">Support</h4>
<ul className="space-y-4">
<li><a className="text-sm text-white/70 hover:text-white transition-colors" href="#">Help Center</a></li>
<li><a className="text-sm text-white/70 hover:text-white transition-colors" href="#">Contact Us</a></li>
<li><a className="text-sm text-white/70 hover:text-white transition-colors" href="#">Community</a></li>
<li><a className="text-sm text-white/70 hover:text-white transition-colors" href="#">Travel Resources</a></li>
</ul>
</div>
</div>
<div className="border-t border-[#3E8593]/30 pt-12 mb-12">
<div className="max-w-2xl mx-auto text-center">
<h4 className="text-lg font-medium text-white mb-4 tracking-tight">Stay in the flow</h4>
<p className="text-sm text-white/70 mb-6">Get travel insights, new features, and destination inspiration delivered to your inbox.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<input className="flex-1 max-w-md px-4 py-3 rounded-xl text-sm text-white placeholder-white/50 border border-[#3E8593]/30 focus:border-[#3E8593]/60 focus:outline-none transition-all bg-[#0A1517]/60" placeholder="Enter your email address" type="email"/>
<button className="px-8 py-3 rounded-xl text-sm font-medium text-[#0A1517] bg-[#D8FF80] hover:bg-[#D8FF80]/90 ring-1 ring-[#054956]/20 hover:ring-[#054956]/30 transition-all">
                Subscribe
              </button>
</div>
</div>
</div>
<div className="pt-2 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-wrap items-center gap-6 text-xs text-white/60">
<span>© 2024 NomadIQ. All rights reserved.</span>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
<div className="flex items-center gap-4 text-xs text-white/70">
<span className="flex items-center gap-2">
<i className="h-3.5 w-3.5" data-lucide="lock"></i>
              Private by design
            </span>
<span className="flex items-center gap-2">
<i className="h-3.5 w-3.5 text-[#D8FF80]" data-lucide="shield-check"></i>
              100% Adaptive
            </span>
</div>
</div>
</div>
</footer>



    </>
  );
}
