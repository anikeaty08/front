import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      
<div className="min-h-screen w-full overflow-x-hidden bg-[#0A0A0A]">

<section className="w-full bg-[#E8860C]">
<div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-black">
<span>📍 Carbondale, CO | Aspen, CO New</span>
</div>
<div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-black">
<a className="transition hover:opacity-80" href="#">(970) 555-0188</a>
<a className="inline-flex items-center gap-1 transition hover:opacity-80" href="#">
<span>Coach Portal</span>
<span>→</span>
</a>
</div>
</div>
</section>

<header className="sticky top-0 z-50 border-b border-[#222222] bg-black/90 backdrop-blur">
<div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
<a className="flex items-center gap-3" href="#">
<div className="relative flex h-10 w-10 items-center justify-center">
<div className="h-0 w-0 border-l-[0.9rem] border-r-[0.9rem] border-b-[1.5rem] border-l-transparent border-r-transparent border-b-[#E8860C]"></div>
</div>
<div className="leading-none">
<div className="text-base font-semibold uppercase tracking-tight text-white" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>
<span className="text-[#E8860C]">E</span><span className="text-white">LITE</span>
<span className="ml-1 text-[#E8860C]">P</span><span className="text-white">ERFORMANCE</span>
<span className="ml-1 text-[#E8860C]">A</span><span className="text-white">CADEMY</span>
</div>
<div className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-[#9A9A9A]">Elite Performance Academy</div>
</div>
</a>
<nav className="hidden items-center gap-8 lg:flex">
<a className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9A9A9A] transition hover:text-white" href="#programs">Programs</a>
<a className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9A9A9A] transition hover:text-white" href="#locations">Locations</a>
<a className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9A9A9A] transition hover:text-white" href="#coaches">Coaches</a>
<a className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9A9A9A] transition hover:text-white" href="#about">About</a>
<a className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9A9A9A] transition hover:text-white" href="#pricing">Pricing</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden rounded-md border border-[#222222] px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white sm:inline-flex lg:hidden">
<iconify-icon height="18" icon="solar:hamburger-menu-linear" style={{color: 'white'}} width="18"></iconify-icon>
</button>
<a className="inline-flex items-center rounded-md bg-[#E8860C] px-4 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-black transition hover:bg-[#F5A623]" href="#">
            Get Started
          </a>
</div>
</div>
</header>

<section className="relative isolate overflow-hidden bg-[#0A0A0A]">
<div className="absolute right-[-10%] top-[-10%] h-[38rem] w-[38rem] rounded-full bg-[#E8860C] opacity-10 blur-3xl"></div>
<div className="absolute bottom-[-10%] left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[#C45A0B] opacity-10 blur-3xl"></div>
<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
<div className="text-[24rem] font-black uppercase leading-none tracking-tight text-transparent opacity-10 [text-stroke:1px_rgba(232,134,12,0.7)]" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>
          EPA
        </div>
</div>
<div className="relative mx-auto flex min-h-[48rem] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#E8860C]/40 bg-[#E8860C]/10 px-4 py-2">
<span className="inline-flex h-2 w-2 rounded-full bg-[#E8860C] shadow-[0_0_1rem_rgba(232,134,12,0.8)]"></span>
<span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8860C]">Multi-Sport Performance Training</span>
</div>
<h1 className="max-w-4xl text-7xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-8xl lg:text-9xl" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>
            Elevate<br/>
            Your<br/>
<span className="text-[#E8860C]">Game.</span>
</h1>
<p className="mt-8 max-w-2xl text-base leading-8 text-[#9A9A9A] sm:text-lg">
            Performance training built for serious athletes in the heart of the Colorado mountains. Soccer. Lacrosse. Strength &amp; Conditioning. Real results.
          </p>
<div className="mt-10 flex flex-col gap-4 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-[#E8860C] px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-black transition hover:bg-[#F5A623]" href="#">
<span>Book a Free Session</span>
<span>→</span>
</a>
<a className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:border-white/40 hover:bg-white/5" href="#programs">
              View Programs
            </a>
</div>
<div className="mt-12 grid max-w-5xl grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur sm:grid-cols-4">
<div className="border-b border-r border-white/10 p-5 sm:border-b-0">
<div className="text-4xl font-black uppercase tracking-tight text-[#E8860C]" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>500+</div>
<div className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-[#666666]">Athletes Trained</div>
</div>
<div className="border-b border-white/10 p-5 sm:border-b-0 sm:border-r">
<div className="text-4xl font-black uppercase tracking-tight text-[#E8860C]" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>6+</div>
<div className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-[#666666]">Years of Excellence</div>
</div>
<div className="border-r border-white/10 p-5">
<div className="text-4xl font-black uppercase tracking-tight text-[#E8860C]" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>2</div>
<div className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-[#666666]">Colorado Locations</div>
</div>
<div className="p-5">
<div className="text-4xl font-black uppercase tracking-tight text-[#E8860C]" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>4.9★</div>
<div className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-[#666666]">Avg. Rating</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#E8860C] py-3">
<div className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.28em] text-black" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>
<div className="inline-block min-w-full animate-[marquee_30s_linear_infinite]">
          DISCIPLINE ✦ TRAIN WITH PURPOSE ✦ ACHIEVE REAL RESULTS ✦ NO SHORTCUTS ✦ SPORT-SPECIFIC TRAINING ✦ COLORADO PROUD ✦ DISCIPLINE ✦ TRAIN WITH PURPOSE ✦ ACHIEVE REAL RESULTS ✦ NO SHORTCUTS ✦
        </div>
</div>
</section>

<section className="bg-[#0A0A0A] py-24" id="programs">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
<div>
<div className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#E8860C]">What We Offer</div>
<h2 className="text-5xl font-black uppercase leading-none tracking-tight text-white sm:text-6xl" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>
              Training<br/>Programs
            </h2>
</div>
<p className="max-w-2xl text-base leading-8 text-[#9A9A9A] lg:ml-auto">
            Coaching-led development for athletes who want more than access. Every program is structured for progression, discipline, and measurable improvement.
          </p>
</div>
<div className="grid gap-6 lg:grid-cols-3">
<article className="group relative flex min-h-[32rem] overflow-hidden rounded-xl border border-[#222222] bg-[#161616] transition duration-300 hover:-translate-y-1 hover:border-[#E8860C]">
<div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,10,0.96),rgba(10,10,10,0.3)),url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&amp;fit=crop&amp;w=1200&amp;q=80')] bg-cover bg-center"></div>
<div className="relative mt-auto p-8">
<div className="text-sm font-bold uppercase tracking-[0.2em] text-[#E8860C]">01</div>
<h3 className="mt-3 text-3xl font-black uppercase leading-none tracking-tight text-white" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>Soccer Training</h3>
<p className="mt-4 text-sm leading-7 text-[#9A9A9A]">Technical development, positional movement, speed, and game-ready performance for serious soccer athletes.</p>
<a className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#E8860C]" href="#">Learn More <span>→</span></a>
</div>
</article>
<article className="group relative flex min-h-[32rem] overflow-hidden rounded-xl border border-[#222222] bg-[#161616] transition duration-300 hover:-translate-y-1 hover:border-[#E8860C]">
<div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,10,0.96),rgba(10,10,10,0.3)),url('https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&amp;fit=crop&amp;w=1200&amp;q=80')] bg-cover bg-center"></div>
<div className="relative mt-auto p-8">
<div className="text-sm font-bold uppercase tracking-[0.2em] text-[#E8860C]">02</div>
<h3 className="mt-3 text-3xl font-black uppercase leading-none tracking-tight text-white" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>Lacrosse Training</h3>
<p className="mt-4 text-sm leading-7 text-[#9A9A9A]">High-level stick work, conditioning, mobility, and explosive power built for the demands of the game.</p>
<a className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#E8860C]" href="#">Learn More <span>→</span></a>
</div>
</article>
<article className="group relative flex min-h-[32rem] overflow-hidden rounded-xl border border-[#222222] bg-[#161616] transition duration-300 hover:-translate-y-1 hover:border-[#E8860C]">
<div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,10,0.96),rgba(10,10,10,0.3)),url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&amp;fit=crop&amp;w=1200&amp;q=80')] bg-cover bg-center"></div>
<div className="relative mt-auto p-8">
<div className="text-sm font-bold uppercase tracking-[0.2em] text-[#E8860C]">03</div>
<h3 className="mt-3 text-3xl font-black uppercase leading-none tracking-tight text-white" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>Strength &amp; Conditioning</h3>
<p className="mt-4 text-sm leading-7 text-[#9A9A9A]">Performance-focused training to improve speed, resilience, strength, and long-term athletic development.</p>
<a className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#E8860C]" href="#">Learn More <span>→</span></a>
</div>
</article>
</div>
<div className="mt-10 flex flex-col gap-6 border-t border-[#1B1B1B] pt-8 lg:flex-row lg:items-center lg:justify-between">
<a className="inline-flex w-fit items-center rounded-md border border-white/20 px-5 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:border-white/40 hover:bg-white/5" href="#">
            View All Programs →
          </a>
<div className="text-sm uppercase tracking-[0.18em] text-[#666666]">
<span className="text-[#9A9A9A]">500+</span> Athletes Trained
            <span className="mx-3 text-[#333333]">|</span>
<span className="text-[#9A9A9A]">6+</span> Years
            <span className="mx-3 text-[#333333]">|</span>
<span className="text-[#9A9A9A]">2</span> Locations
          </div>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-[#111111] py-24" id="locations">
<div className="pointer-events-none absolute bottom-0 right-0 select-none text-[14rem] font-black uppercase leading-none tracking-tight text-white opacity-[0.015]" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>
        Colorado
      </div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-14 max-w-4xl">
<div className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#E8860C]">Our Facilities</div>
<h2 className="text-5xl font-black uppercase leading-none tracking-tight text-white sm:text-6xl" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>
            Two Locations. One Standard.
          </h2>
<p className="mt-6 max-w-3xl text-base leading-8 text-[#9A9A9A]">
            Built for focused athletes in Colorado. Carbondale delivers a full coaching-led flagship experience. Aspen introduces a flexible self-service model for independent training sessions.
          </p>
</div>
<div className="grid gap-6 lg:grid-cols-2">
<article className="overflow-hidden rounded-2xl border border-[#222222] bg-[#161616]">
<div className="relative h-72 bg-[linear-gradient(to_top,rgba(10,10,10,0.85),rgba(10,10,10,0.2)),url('https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&amp;fit=crop&amp;w=1400&amp;q=80')] bg-cover bg-center">
<div className="absolute right-6 top-6 h-28 w-28 rounded-full bg-[#E8860C] opacity-15 blur-3xl"></div>
</div>
<div className="p-8">
<div className="text-xs font-bold uppercase tracking-[0.26em] text-[#E8860C]">Flagship</div>
<h3 className="mt-3 text-4xl font-black uppercase leading-none tracking-tight text-white" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>Carbondale, CO</h3>
<p className="mt-5 text-sm leading-7 text-[#9A9A9A]">
                Our original 5,000 sq ft training facility featuring indoor turf, a dedicated weight area, private coaching, semi-private sessions, group clinics, and elite guest coaches.
              </p>
<div className="mt-6 flex flex-wrap gap-3">
<span className="rounded-full border border-[#333333] bg-[#111111] px-4 py-2 text-xs font-medium text-[#CFCFCF]">Indoor Turf</span>
<span className="rounded-full border border-[#333333] bg-[#111111] px-4 py-2 text-xs font-medium text-[#CFCFCF]">Weight Room</span>
<span className="rounded-full border border-[#333333] bg-[#111111] px-4 py-2 text-xs font-medium text-[#CFCFCF]">Private Training</span>
<span className="rounded-full border border-[#333333] bg-[#111111] px-4 py-2 text-xs font-medium text-[#CFCFCF]">Group Clinics</span>
<span className="rounded-full border border-[#333333] bg-[#111111] px-4 py-2 text-xs font-medium text-[#CFCFCF]">Guest Coaches</span>
</div>
<a className="mt-8 inline-flex items-center rounded-md border border-white/20 px-5 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:border-white/40 hover:bg-white/5" href="#">
                Explore Carbondale →
              </a>
</div>
</article>
<article className="overflow-hidden rounded-2xl border border-[#222222] bg-[#161616]">
<div className="relative h-72 bg-[linear-gradient(to_top,rgba(10,10,10,0.85),rgba(10,10,10,0.2)),url('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&amp;fit=crop&amp;w=1400&amp;q=80')] bg-cover bg-center">
<div className="absolute right-5 top-5 rounded-full bg-[#E8860C] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-black">New</div>
</div>
<div className="p-8">
<div className="text-xs font-bold uppercase tracking-[0.26em] text-[#E8860C]">Self-Service</div>
<h3 className="mt-3 text-4xl font-black uppercase leading-none tracking-tight text-white" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>Aspen, CO</h3>
<p className="mt-5 text-sm leading-7 text-[#9A9A9A]">
                Flexible session-based access for athletes who want premium space on their own schedule. Purchase through the portal, unlock the facility, and train independently.
              </p>
<div className="mt-6 flex flex-wrap gap-3">
<span className="rounded-full border border-[#333333] bg-[#111111] px-4 py-2 text-xs font-medium text-[#CFCFCF]">Self-Service</span>
<span className="rounded-full border border-[#333333] bg-[#111111] px-4 py-2 text-xs font-medium text-[#CFCFCF]">Bay Rentals</span>
<span className="rounded-full border border-[#333333] bg-[#111111] px-4 py-2 text-xs font-medium text-[#CFCFCF]">Field Access</span>
<span className="rounded-full border border-[#333333] bg-[#111111] px-4 py-2 text-xs font-medium text-[#CFCFCF]">Flexible Hours</span>
<span className="rounded-full border border-[#333333] bg-[#111111] px-4 py-2 text-xs font-medium text-[#CFCFCF]">Portal Booking</span>
</div>
<a className="mt-8 inline-flex items-center rounded-md bg-[#E8860C] px-5 py-4 text-xs font-bold uppercase tracking-[0.15em] text-black transition hover:bg-[#F5A623]" href="#">
                Explore Aspen →
              </a>
</div>
</article>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] py-24">
<div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
<div className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#E8860C]">Get Started</div>
<h2 className="text-5xl font-black uppercase leading-none tracking-tight text-white sm:text-6xl" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>
          Your Path to Performance
        </h2>
<div className="relative mt-16 grid gap-12 lg:grid-cols-3">
<div className="hidden lg:block absolute left-[16.5%] right-[16.5%] top-12 h-px bg-gradient-to-r from-[#222222] via-[#E8860C]/50 to-[#222222]"></div>
<div className="relative flex flex-col items-center">
<div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#E8860C]/20 bg-[#E8860C]/5">
<span className="text-5xl font-black uppercase tracking-tight text-[#E8860C]" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>1</span>
</div>
<h3 className="mt-6 text-2xl font-black uppercase tracking-tight text-white" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>Choose Your Program</h3>
<p className="mt-4 max-w-xs text-sm leading-7 text-[#9A9A9A]">Select the training path that fits your sport, goals, and competitive level.</p>
</div>
<div className="relative flex flex-col items-center">
<div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#E8860C]/20 bg-[#E8860C]/5">
<span className="text-5xl font-black uppercase tracking-tight text-[#E8860C]" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>2</span>
</div>
<h3 className="mt-6 text-2xl font-black uppercase tracking-tight text-white" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>Book Through the Portal</h3>
<p className="mt-4 max-w-xs text-sm leading-7 text-[#9A9A9A]">Use the external booking portal to secure your session, package, or access slot.</p>
</div>
<div className="relative flex flex-col items-center">
<div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#E8860C]/20 bg-[#E8860C]/5">
<span className="text-5xl font-black uppercase tracking-tight text-[#E8860C]" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>3</span>
</div>
<h3 className="mt-6 text-2xl font-black uppercase tracking-tight text-white" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>Train. Track. Improve.</h3>
<p className="mt-4 max-w-xs text-sm leading-7 text-[#9A9A9A]">Show up with intent, stay consistent, and build measurable performance over time.</p>
</div>
</div>
<a className="mt-14 inline-flex items-center rounded-md bg-[#E8860C] px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-black transition hover:bg-[#F5A623]" href="#">
          Access the Portal →
        </a>
</div>
</section>

<section className="bg-[#111111] py-24" id="coaches">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
<div>
<div className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#E8860C]">In Your Corner</div>
<h2 className="text-5xl font-black uppercase leading-none tracking-tight text-white sm:text-6xl" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>
              Meet Your Coaches
            </h2>
</div>
<a className="inline-flex w-fit items-center rounded-md border border-white/20 px-5 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:border-white/40 hover:bg-white/5" href="#">
            View All Coaches →
          </a>
</div>
<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
<article className="overflow-hidden rounded-2xl border border-[#222222] bg-[#161616] transition hover:border-[#E8860C]">
<div className="flex h-72 items-center justify-center bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),rgba(10,10,10,0.3))]">
<div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#F5A623] to-[#C45A0B] text-3xl font-black uppercase tracking-tight text-black" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>JM</div>
</div>
<div className="p-6">
<h3 className="text-2xl font-black uppercase tracking-tight text-white" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>Jake Mitchell</h3>
<p className="mt-2 text-sm text-[#9A9A9A]">Head Soccer Coach</p>
</div>
</article>
<article className="overflow-hidden rounded-2xl border border-[#222222] bg-[#161616] transition hover:border-[#E8860C]">
<div className="flex h-72 items-center justify-center bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),rgba(10,10,10,0.3))]">
<div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#F5A623] to-[#C45A0B] text-3xl font-black uppercase tracking-tight text-black" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>SR</div>
</div>
<div className="p-6">
<h3 className="text-2xl font-black uppercase tracking-tight text-white" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>Sarah Reynolds</h3>
<p className="mt-2 text-sm text-[#9A9A9A]">Lacrosse Director</p>
</div>
</article>
<article className="overflow-hidden rounded-2xl border border-[#222222] bg-[#161616] transition hover:border-[#E8860C]">
<div className="flex h-72 items-center justify-center bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),rgba(10,10,10,0.3))]">
<div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#F5A623] to-[#C45A0B] text-3xl font-black uppercase tracking-tight text-black" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>DV</div>
</div>
<div className="p-6">
<h3 className="text-2xl font-black uppercase tracking-tight text-white" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>Derek Vasquez</h3>
<p className="mt-2 text-sm text-[#9A9A9A]">S&amp;C Specialist</p>
</div>
</article>
<article className="overflow-hidden rounded-2xl border border-[#E8860C]/30 bg-[linear-gradient(to_bottom,rgba(232,134,12,0.08),rgba(22,22,22,1))] transition hover:border-[#E8860C]">
<div className="flex h-72 items-center justify-center bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),rgba(10,10,10,0.3))]">
<div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#3A3A3A] to-[#777777]">
<iconify-icon height="32" icon="solar:star-linear" style={{color: '#111111'}} width="32"></iconify-icon>
</div>
</div>
<div className="p-6">
<div className="mb-3 inline-flex rounded-full bg-[#E8860C]/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#E8860C]">Guest Coaches</div>
<h3 className="text-2xl font-black uppercase tracking-tight text-white" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>Visiting Pros</h3>
<p className="mt-2 text-sm text-[#9A9A9A]">Specialized Clinics &amp; Camps</p>
</div>
</article>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] py-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-12">
<div className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#E8860C]">Results Speak</div>
<h2 className="text-5xl font-black uppercase leading-none tracking-tight text-white sm:text-6xl" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>
            Why Athletes Choose EPA
          </h2>
</div>
<div className="grid gap-8 lg:grid-cols-2">
<div className="divide-y divide-[#222222] border-y border-[#222222]">
<div className="py-6">
<div className="flex items-center justify-between">
<h3 className="text-3xl font-black uppercase tracking-tight text-white" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>Sport-Specific Expertise</h3>
<span className="text-[#E8860C]">→</span>
</div>
<p className="mt-3 max-w-xl text-sm leading-7 text-[#9A9A9A]">Programming tailored to the movement patterns, intensity demands, and technical realities of each sport.</p>
</div>
<div className="py-6">
<div className="flex items-center justify-between">
<h3 className="text-3xl font-black uppercase tracking-tight text-white" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>Proven Training Systems</h3>
<span className="text-[#E8860C]">→</span>
</div>
<p className="mt-3 max-w-xl text-sm leading-7 text-[#9A9A9A]">A structured approach to development that prioritizes consistency, progression, and measurable performance gains.</p>
</div>
<div className="py-6">
<div className="flex items-center justify-between">
<h3 className="text-3xl font-black uppercase tracking-tight text-white" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>Community &amp; Culture</h3>
<span className="text-[#E8860C]">→</span>
</div>
<p className="mt-3 max-w-xl text-sm leading-7 text-[#9A9A9A]">Athletes train in a focused environment that values discipline, accountability, and long-term confidence.</p>
</div>
<div className="py-6">
<div className="flex items-center justify-between">
<h3 className="text-3xl font-black uppercase tracking-tight text-white" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>World-Class Facilities</h3>
<span className="text-[#E8860C]">→</span>
</div>
<p className="mt-3 max-w-xl text-sm leading-7 text-[#9A9A9A]">Premium indoor training spaces designed to support technical work, speed, power, and all-around athletic growth.</p>
</div>
</div>
<div className="rounded-2xl border border-[#222222] bg-[#161616] p-8 sm:p-12">
<div className="text-8xl leading-none text-[#E8860C]/20">“</div>
<p className="mt-2 text-2xl italic leading-10 text-white">
              EPA gave our daughter the structure, coaching, and confidence she needed to compete at a much higher level. The standard feels different the moment you walk in.
            </p>
<div className="mt-8">
<div className="text-sm font-bold uppercase tracking-[0.16em] text-white">Megan T.</div>
<div className="mt-2 text-sm text-[#9A9A9A]">Parent of Competitive Soccer Athlete</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#111111] py-24" id="pricing">
<div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
<div className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#E8860C]">Invest in Your Game</div>
<h2 className="text-5xl font-black uppercase leading-none tracking-tight text-white sm:text-6xl" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>
          Flexible Plans for Every Goal
        </h2>
<p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#9A9A9A]">
          Choose a training option that aligns with your schedule, commitment level, and performance goals.
        </p>
<div className="mt-14 grid gap-6 lg:grid-cols-3">
<article className="rounded-2xl border border-[#222222] bg-[#161616] p-8 text-left">
<h3 className="text-3xl font-black uppercase tracking-tight text-white" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>Single Session</h3>
<p className="mt-3 text-sm leading-7 text-[#9A9A9A]">Ideal for first-time athletes or one-off training sessions.</p>
<div className="mt-8 flex items-end gap-2">
<span className="text-6xl font-black uppercase leading-none tracking-tight text-[#E8860C]" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>$75</span>
<span className="pb-2 text-xl text-[#9A9A9A]">/session</span>
</div>
<div className="mt-3 text-sm text-[#666666]">No commitment required</div>
<ul className="mt-8 space-y-4 text-sm text-[#CFCFCF]">
<li className="flex items-start gap-3"><span className="text-[#E8860C]">✓</span><span>Access to EPA coaching standards</span></li>
<li className="flex items-start gap-3"><span className="text-[#E8860C]">✓</span><span>Great for evaluations and trial sessions</span></li>
<li className="flex items-start gap-3"><span className="text-[#E8860C]">✓</span><span>Flexible scheduling through portal</span></li>
</ul>
<a className="mt-10 inline-flex items-center rounded-md border border-white/20 px-5 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:border-white/40 hover:bg-white/5" href="#">
              Book a Session →
            </a>
</article>
<article className="relative rounded-2xl border border-[#E8860C] bg-[#161616] p-8 text-left shadow-[0_0_5rem_rgba(232,134,12,0.12)]">
<div className="absolute inset-0 -z-10 rounded-2xl bg-[#E8860C] opacity-10 blur-3xl"></div>
<div className="mb-4 inline-flex rounded-full bg-[#E8860C] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-black">Most Popular</div>
<h3 className="text-3xl font-black uppercase tracking-tight text-white" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>Training Package</h3>
<p className="mt-3 text-sm leading-7 text-[#9A9A9A]">Built for athletes committed to consistent progress.</p>
<div className="mt-8 flex items-end gap-2">
<span className="text-6xl font-black uppercase leading-none tracking-tight text-[#E8860C]" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>$600</span>
<span className="pb-2 text-xl text-[#9A9A9A]">/10 sessions</span>
</div>
<div className="mt-3 text-sm text-[#E8860C]">Save $150 vs. single sessions</div>
<ul className="mt-8 space-y-4 text-sm text-[#CFCFCF]">
<li className="flex items-start gap-3"><span className="text-[#E8860C]">✓</span><span>Best value for long-term development</span></li>
<li className="flex items-start gap-3"><span className="text-[#E8860C]">✓</span><span>Priority planning around athlete goals</span></li>
<li className="flex items-start gap-3"><span className="text-[#E8860C]">✓</span><span>Ideal for in-season and off-season training</span></li>
<li className="flex items-start gap-3"><span className="text-[#E8860C]">✓</span><span>Supports consistent performance tracking</span></li>
</ul>
<a className="mt-10 inline-flex items-center rounded-md bg-[#E8860C] px-5 py-4 text-xs font-bold uppercase tracking-[0.15em] text-black transition hover:bg-[#F5A623]" href="#">
              Get Started →
            </a>
</article>
<article className="rounded-2xl border border-[#222222] bg-[#161616] p-8 text-left">
<h3 className="text-3xl font-black uppercase tracking-tight text-white" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>Custom / Teams</h3>
<p className="mt-3 text-sm leading-7 text-[#9A9A9A]">For teams, specialty clinics, camps, and performance groups.</p>
<div className="mt-8 flex items-end gap-2">
<span className="text-5xl font-black uppercase leading-none tracking-tight text-[#E8860C]" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>Custom</span>
</div>
<div className="mt-3 text-sm text-[#666666]">Let’s build your plan</div>
<ul className="mt-8 space-y-4 text-sm text-[#CFCFCF]">
<li className="flex items-start gap-3"><span className="text-[#E8860C]">✓</span><span>Team-specific training plans</span></li>
<li className="flex items-start gap-3"><span className="text-[#E8860C]">✓</span><span>Guest coach and clinic options</span></li>
<li className="flex items-start gap-3"><span className="text-[#E8860C]">✓</span><span>Flexible formats and scheduling</span></li>
</ul>
<a className="mt-10 inline-flex items-center rounded-md border border-white/20 px-5 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:border-white/40 hover:bg-white/5" href="#">
              Contact Us →
            </a>
</article>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] py-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
<div>
<div className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#E8860C]">From the Field</div>
<h2 className="text-5xl font-black uppercase leading-none tracking-tight text-white sm:text-6xl" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>
              Training Tips &amp; Insights
            </h2>
</div>
<a className="inline-flex w-fit items-center rounded-md border border-white/20 px-5 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:border-white/40 hover:bg-white/5" href="#">
            All Articles →
          </a>
</div>
<div className="grid gap-6 lg:grid-cols-2">
<article className="overflow-hidden rounded-2xl border border-[#222222] bg-[#161616]">
<div className="h-72 bg-[linear-gradient(to_top,rgba(10,10,10,0.8),rgba(10,10,10,0.2)),url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&amp;fit=crop&amp;w=1400&amp;q=80')] bg-cover bg-center"></div>
<div className="p-8">
<div className="text-xs font-bold uppercase tracking-[0.18em] text-[#E8860C]">● Nutrition</div>
<h3 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight text-white" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>
                The 5 Eating Habits Every Serious Athlete Must Know
              </h3>
<p className="mt-5 text-sm leading-7 text-[#9A9A9A]">
                Simple, performance-driven nutrition habits that improve recovery, focus, and consistency without overcomplicating your routine.
              </p>
<div className="mt-6 flex items-center justify-between text-sm">
<span className="text-[#666666]">Mar 5, 2026</span>
<a className="font-bold uppercase tracking-[0.14em] text-[#E8860C]" href="#">Read Article →</a>
</div>
</div>
</article>
<div className="flex flex-col gap-6">
<article className="flex overflow-hidden rounded-2xl border border-[#222222] bg-[#161616]">
<div className="w-40 shrink-0 bg-[linear-gradient(to_top,rgba(10,10,10,0.8),rgba(10,10,10,0.2)),url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&amp;fit=crop&amp;w=900&amp;q=80')] bg-cover bg-center"></div>
<div className="p-6">
<div className="text-xs font-bold uppercase tracking-[0.18em] text-[#E8860C]">Recovery</div>
<h4 className="mt-3 text-2xl font-black uppercase leading-none tracking-tight text-white" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>Why Rest Days Are Non-Negotiable</h4>
<p className="mt-3 text-sm leading-7 text-[#9A9A9A]">Recovery isn’t optional if performance is the goal.</p>
</div>
</article>
<article className="flex overflow-hidden rounded-2xl border border-[#222222] bg-[#161616]">
<div className="w-40 shrink-0 bg-[linear-gradient(to_top,rgba(10,10,10,0.8),rgba(10,10,10,0.2)),url('https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&amp;fit=crop&amp;w=900&amp;q=80')] bg-cover bg-center"></div>
<div className="p-6">
<div className="text-xs font-bold uppercase tracking-[0.18em] text-[#E8860C]">Mindset</div>
<h4 className="mt-3 text-2xl font-black uppercase leading-none tracking-tight text-white" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>How to Stay Motivated Long-Term</h4>
<p className="mt-3 text-sm leading-7 text-[#9A9A9A]">Build systems that outlast short bursts of motivation.</p>
</div>
</article>
<article className="flex overflow-hidden rounded-2xl border border-[#222222] bg-[#161616]">
<div className="w-40 shrink-0 bg-[linear-gradient(to_top,rgba(10,10,10,0.8),rgba(10,10,10,0.2)),url('https://images.unsplash.com/photo-1518459031867-a89b944bffe4?auto=format&amp;fit=crop&amp;w=900&amp;q=80')] bg-cover bg-center"></div>
<div className="p-6">
<div className="text-xs font-bold uppercase tracking-[0.18em] text-[#E8860C]">Performance</div>
<h4 className="mt-3 text-2xl font-black uppercase leading-none tracking-tight text-white" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>Speed Training Drills for Field Sports</h4>
<p className="mt-3 text-sm leading-7 text-[#9A9A9A]">Practical drills to improve first-step quickness and power.</p>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="relative isolate overflow-hidden bg-[#111111] py-28">
<div className="absolute inset-0 flex items-center justify-center">
<div className="select-none text-center text-[10rem] font-black uppercase leading-none tracking-tight text-white opacity-[0.02]" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>
          Elite Performance
        </div>
</div>
<div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8860C] opacity-[0.08] blur-3xl"></div>
<div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
<div className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#E8860C]">Ready?</div>
<h2 className="text-5xl font-black uppercase leading-none tracking-tight text-white sm:text-6xl lg:text-7xl" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>
          Ready to Train With <span className="text-[#E8860C]">Purpose?</span>
</h2>
<p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#9A9A9A]">
          Step into a training environment built for disciplined athletes, long-term progress, and real performance outcomes.
        </p>
<a className="mt-10 inline-flex items-center rounded-md bg-[#E8860C] px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-black transition hover:bg-[#F5A623]" href="#">
          Start Training →
        </a>
</div>
</section>

<footer className="border-t border-[#222222] bg-[#0A0A0A]">
<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
<div className="grid gap-10 md:grid-cols-2 xl:grid-cols-5">
<div className="xl:col-span-1">
<a className="flex items-center gap-3" href="#">
<div className="relative flex h-10 w-10 items-center justify-center">
<div className="h-0 w-0 border-l-[0.9rem] border-r-[0.9rem] border-b-[1.5rem] border-l-transparent border-r-transparent border-b-[#E8860C]"></div>
</div>
<div className="text-2xl font-black uppercase tracking-tight text-white" style={{fontFamily: '\'Barlow Condensed\', sans-serif'}}>
<span className="text-[#E8860C]">EPA</span>
</div>
</a>
<p className="mt-5 max-w-xs text-sm leading-7 text-[#9A9A9A]">
              Premium multi-sport performance training for athletes in Carbondale and Aspen, Colorado.
            </p>
<div className="mt-6 flex gap-3">
<a className="flex h-10 w-10 items-center justify-center rounded-md border border-[#2A2A2A] text-[#9A9A9A] transition hover:border-[#E8860C] hover:text-[#E8860C]" href="#">
<span className="text-xs font-bold uppercase">IG</span>
</a>
<a className="flex h-10 w-10 items-center justify-center rounded-md border border-[#2A2A2A] text-[#9A9A9A] transition hover:border-[#E8860C] hover:text-[#E8860C]" href="#">
<span className="text-xs font-bold uppercase">YT</span>
</a>
<a className="flex h-10 w-10 items-center justify-center rounded-md border border-[#2A2A2A] text-[#9A9A9A] transition hover:border-[#E8860C] hover:text-[#E8860C]" href="#">
<span className="text-xs font-bold uppercase">TK</span>
</a>
</div>
</div>
<div>
<h3 className="text-xs font-bold uppercase tracking-[0.24em] text-white">Programs</h3>
<ul className="mt-5 space-y-3 text-sm text-[#9A9A9A]">
<li><a className="transition hover:text-white" href="#">Soccer Training</a></li>
<li><a className="transition hover:text-white" href="#">Lacrosse Training</a></li>
<li><a className="transition hover:text-white" href="#">Strength &amp; Conditioning</a></li>
<li><a className="transition hover:text-white" href="#">Specialized Clinics</a></li>
<li><a className="transition hover:text-white" href="#">Packages</a></li>
</ul>
</div>
<div>
<h3 className="text-xs font-bold uppercase tracking-[0.24em] text-white">Locations</h3>
<ul className="mt-5 space-y-3 text-sm text-[#9A9A9A]">
<li><a className="transition hover:text-white" href="#">Carbondale CO</a></li>
<li><a className="transition hover:text-white" href="#">Aspen CO <span className="ml-2 rounded-full bg-[#E8860C]/15 px-2 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#E8860C]">New</span></a></li>
<li><a className="transition hover:text-white" href="#">Group Training Schedule</a></li>
<li><a className="transition hover:text-white" href="#">Facility Photos</a></li>
</ul>
</div>
<div>
<h3 className="text-xs font-bold uppercase tracking-[0.24em] text-white">Company</h3>
<ul className="mt-5 space-y-3 text-sm text-[#9A9A9A]">
<li><a className="transition hover:text-white" href="#">About EPA</a></li>
<li><a className="transition hover:text-white" href="#">Our Coaches</a></li>
<li><a className="transition hover:text-white" href="#">Blog</a></li>
<li><a className="transition hover:text-white" href="#">Contact</a></li>
<li><a className="transition hover:text-white" href="#">Careers</a></li>
</ul>
</div>
<div>
<h3 className="text-xs font-bold uppercase tracking-[0.24em] text-white">Support</h3>
<ul className="mt-5 space-y-3 text-sm text-[#9A9A9A]">
<li><a className="transition hover:text-white" href="#">FAQ</a></li>
<li><a className="transition hover:text-white" href="#">Portal Login</a></li>
<li><a className="transition hover:text-white" href="#">Privacy Policy</a></li>
<li><a className="transition hover:text-white" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="mt-12 flex flex-col gap-4 border-t border-[#222222] pt-6 text-sm text-[#666666] sm:flex-row sm:items-center sm:justify-between">
<div>© 2026 Elite Performance Academy. All rights reserved.</div>
<div>Carbondale, CO | Aspen, CO</div>
</div>
</div>
</footer>
</div>
<style>
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  </style>

    </>
  );
}
