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



    lucide.createIcons({ attrs: { "stroke-width": 1.5 } });

    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    menuBtn?.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    document.getElementById('year').textContent = new Date().getFullYear();
  
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
      

<header className="relative">
<div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
<div className="flex pt-4 pb-4 items-center justify-between">
<a className="group inline-flex items-center gap-3" href="#">
<span className="grid h-10 w-10 place-items-center rounded-xl bg-[#070707] text-white">
<span className="text-sm font-medium tracking-tight">MNM</span>
</span>
<span className="leading-tight">
<span className="block text-sm font-medium tracking-tight">Musée national des mines</span>
<span className="block text-xs font-medium text-[#070707]/60">Rumelange • mnm.lu</span>
</span>
</a>
<nav className="hidden items-center gap-7 lg:flex">
<a className="text-sm font-medium text-[#070707]/70 hover:text-[#070707]" href="#visit">Visit</a>
<a className="text-sm font-medium text-[#070707]/70 hover:text-[#070707]" href="#tours">Guided tours</a>
<a className="text-sm font-medium text-[#070707]/70 hover:text-[#070707]" href="#exhibits">Exhibits</a>
<a className="text-sm font-medium text-[#070707]/70 hover:text-[#070707]" href="#stories">Stories</a>
<a className="text-sm font-medium text-[#070707]/70 hover:text-[#070707]" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-[#070707]/15 bg-white px-4 py-2.5 text-sm font-medium text-[#070707] hover:border-[#070707]/25" href="#tickets">
<span>Tickets</span>
<span aria-hidden="true" className="inline-flex">
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</span>
</a>
<button aria-label="Open menu" className="inline-flex items-center justify-center rounded-xl border border-[#070707]/15 bg-white p-2.5 text-[#070707] hover:border-[#070707]/25 lg:hidden" id="menuBtn">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</div>
</div>
</div>

<div className="hidden border-t border-[#070707]/10 bg-white" id="mobileMenu">
<div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
<div className="flex flex-col gap-2 py-4">
<a className="rounded-xl px-3 py-2.5 text-sm font-medium text-[#070707]/80 hover:bg-[#9DB2BD]/20 hover:text-[#070707]" href="#visit">Visit</a>
<a className="rounded-xl px-3 py-2.5 text-sm font-medium text-[#070707]/80 hover:bg-[#9DB2BD]/20 hover:text-[#070707]" href="#tours">Guided tours</a>
<a className="rounded-xl px-3 py-2.5 text-sm font-medium text-[#070707]/80 hover:bg-[#9DB2BD]/20 hover:text-[#070707]" href="#exhibits">Exhibits</a>
<a className="rounded-xl px-3 py-2.5 text-sm font-medium text-[#070707]/80 hover:bg-[#9DB2BD]/20 hover:text-[#070707]" href="#stories">Stories</a>
<a className="rounded-xl px-3 py-2.5 text-sm font-medium text-[#070707]/80 hover:bg-[#9DB2BD]/20 hover:text-[#070707]" href="#contact">Contact</a>
<a className="mt-2 inline-flex items-center justify-between rounded-xl bg-[#070707] px-4 py-3 text-sm font-medium text-white" href="#tickets">
<span>Get tickets</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0">
<div className="h-full w-full bg-[#070707]"></div>
<div className="bg-gradient-to-b from-[#070707]/30 via-[#070707]/55 to-[#070707]/85 absolute top-0 right-0 bottom-0 left-0">
</div>
<img alt="Underground mine tunnel" className="h-full w-full object-cover opacity-65" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
<div className="flex items-center justify-between pt-6 text-white/80">
<div className="flex items-center gap-3 text-xs font-medium">
<span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur">
<i className="h-3.5 w-3.5" data-lucide="clock-3"></i>
<span className="">Today • Open 10:00–18:00</span>
</span>
<span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur">
<i className="h-3.5 w-3.5" data-lucide="thermometer"></i>
<span className="">Mine level ~ 12°C</span>
</span>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-xs font-medium text-white/80 hover:text-white" href="#contact">
<span>Contact us</span>
<i className="h-3.5 w-3.5" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="grid grid-cols-1 items-end gap-10 pb-14 pt-14 sm:pb-20 sm:pt-20 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-24">
<div className="lg:col-span-7">
<p className="text-sm font-medium text-white/80">
            Rumelange, Luxembourg
          </p>
<h1 className="mt-4 text-5xl font-medium tracking-tight text-white sm:text-6xl lg:text-7xl">
            Descend into the mining past.
          </h1>
<p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-white/80">
            Explore underground galleries, machines, and stories that shaped a region. A museum experience built around heritage, craft, and the people of the mines.
          </p>
<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B01116] px-5 py-3 text-sm font-medium text-white shadow-sm shadow-[#B01116]/25 hover:brightness-110" href="#tickets">
<i className="h-4 w-4" data-lucide="ticket"></i>
<span>Book tickets</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10" href="#tours">
<i className="h-4 w-4" data-lucide="map"></i>
<span>See guided tours</span>
</a>
</div>
<div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
<div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur">
<div className="flex items-center gap-2 text-white">
<i className="h-4 w-4" data-lucide="scan"></i>
<p className="text-sm font-medium">Immersive route</p>
</div>
<p className="mt-2 text-sm font-medium leading-relaxed text-white/75">
                Underground walk-through with curated highlights.
              </p>
</div>
<div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur">
<div className="flex items-center gap-2 text-white">
<i className="h-4 w-4" data-lucide="users"></i>
<p className="text-sm font-medium">For groups</p>
</div>
<p className="mt-2 text-sm font-medium leading-relaxed text-white/75">
                School, company, and family tours with guides.
              </p>
</div>
<div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur">
<div className="flex items-center gap-2 text-white">
<i className="h-4 w-4" data-lucide="train-front"></i>
<p className="text-sm font-medium">Easy access</p>
</div>
<p className="mt-2 text-sm font-medium leading-relaxed text-white/75">
                Clear directions, parking, and onsite facilities.
              </p>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="rounded-3xl border border-white/15 bg-white/5 p-5 backdrop-blur">
<div className="flex items-start justify-between gap-4">
<div className="">
<p className="text-xs font-medium text-white/70">Next departure</p>
<p className="mt-1 text-lg font-medium tracking-tight text-white">Guided mine tour</p>
</div>
<span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80">
                Limited spots
              </span>
</div>
<div className="mt-5 grid grid-cols-2 gap-3">
<div className="rounded-2xl border border-white/15 bg-white/5 p-4">
<p className="text-xs font-medium text-white/70">Duration</p>
<p className="mt-1 text-base font-medium text-white">~ 90 min</p>
</div>
<div className="rounded-2xl border border-white/15 bg-white/5 p-4">
<p className="text-xs font-medium text-white/70">Language</p>
<p className="mt-1 text-base font-medium text-white">FR • DE • EN</p>
</div>
<div className="rounded-2xl border border-white/15 bg-white/5 p-4">
<p className="text-xs font-medium text-white/70">Meeting point</p>
<p className="mt-1 text-base font-medium text-white">Museum entrance</p>
</div>
<div className="rounded-2xl border border-white/15 bg-white/5 p-4">
<p className="text-xs font-medium text-white/70">Recommended</p>
<p className="mt-1 text-base font-medium text-white">Warm layers</p>
</div>
</div>
<div className="mt-5 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-[#070707] hover:bg-white/90" href="#tickets">
<i className="h-4 w-4" data-lucide="calendar"></i>
<span>Choose a time</span>
</a>
<a className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 bg-transparent px-4 py-3 text-sm font-medium text-white hover:bg-white/10" href="#visit">
<i className="h-4 w-4" data-lucide="info"></i>
<span>Visitor info</span>
</a>
</div>
<p className="mt-4 text-sm font-medium leading-relaxed text-white/70">
              Some underground sections may be narrow and humid. Accessibility varies by route—check details before booking.
            </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-[#070707]/10 bg-white" id="visit">
<div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
<div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
<div className="lg:col-span-5">
<p className="text-sm font-medium text-[#070707]/60">Plan your visit</p>
<h2 className="mt-3 text-3xl font-medium tracking-tight text-[#070707] sm:text-4xl">
            Everything you need, clearly.
          </h2>
<p className="mt-4 max-w-xl text-lg font-medium leading-relaxed text-[#070707]/70">
            Opening hours, tickets, group visits, and how to reach the museum—designed for quick decisions and smooth arrival.
          </p>
<div className="mt-8 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#070707] px-5 py-3 text-sm font-medium text-white hover:bg-[#070707]/95" href="#tickets">
<i className="h-4 w-4" data-lucide="credit-card"></i>
<span>Tickets &amp; pricing</span>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#070707]/15 bg-white px-5 py-3 text-sm font-medium text-[#070707] hover:border-[#070707]/25" href="#contact">
<i className="h-4 w-4" data-lucide="mail"></i>
<span>Ask a question</span>
</a>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
<div className="rounded-3xl border border-[#070707]/10 bg-white p-5">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#9DB2BD]/25 text-[#070707]">
<i className="h-5 w-5" data-lucide="clock"></i>
</span>
<p className="text-base font-medium tracking-tight">Hours</p>
</div>
<span className="text-xs font-medium text-[#070707]/60">Seasonal</span>
</div>
<p className="mt-4 text-lg font-medium leading-relaxed text-[#070707]/70">
                Typical schedule: 10:00–18:00. Confirm special closures before traveling.
              </p>
<a className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#B01116] hover:brightness-110" href="#">
<span>View full calendar</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="rounded-3xl border border-[#070707]/10 bg-white p-5">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#9DB2BD]/25 text-[#070707]">
<i className="h-5 w-5" data-lucide="map-pin"></i>
</span>
<p className="text-base font-medium tracking-tight">Getting here</p>
</div>
<span className="text-xs font-medium text-[#070707]/60">Rumelange</span>
</div>
<p className="mt-4 text-lg font-medium leading-relaxed text-[#070707]/70">
                Arrive by car or public transport—follow signs to museum parking and entrance.
              </p>
<a className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#B01116] hover:brightness-110" href="#">
<span>Directions</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="rounded-3xl border border-[#070707]/10 bg-white p-5">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#9DB2BD]/25 text-[#070707]">
<i className="h-5 w-5" data-lucide="shield"></i>
</span>
<p className="text-base font-medium tracking-tight">Safety</p>
</div>
<span className="text-xs font-medium text-[#070707]/60">Underground</span>
</div>
<p className="mt-4 text-lg font-medium leading-relaxed text-[#070707]/70">
                Helmet-ready routes, guided groups, and clear rules to keep visits comfortable.
              </p>
<a className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#B01116] hover:brightness-110" href="#">
<span>Visitor guidelines</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="rounded-3xl border border-[#070707]/10 bg-white p-5">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#9DB2BD]/25 text-[#070707]">
<i className="h-5 w-5" data-lucide="users-2"></i>
</span>
<p className="text-base font-medium tracking-tight">Groups</p>
</div>
<span className="text-xs font-medium text-[#070707]/60">Schools • Teams</span>
</div>
<p className="mt-4 text-lg font-medium leading-relaxed text-[#070707]/70">
                Reserve guided slots for classes and groups with tailored storytelling and pacing.
              </p>
<a className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#B01116] hover:brightness-110" href="#">
<span>Group requests</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-[#070707]/10 bg-white" id="tours">
<div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
<div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
<div className="lg:col-span-5">
<p className="text-sm font-medium text-[#070707]/60">Tours &amp; programs</p>
<h2 className="mt-3 text-3xl font-medium tracking-tight text-[#070707] sm:text-4xl">
            Guided routes for every pace.
          </h2>
<p className="mt-4 max-w-xl text-lg font-medium leading-relaxed text-[#070707]/70">
            Choose a focused visit, an in-depth underground experience, or a family-friendly route with hands-on context.
          </p>
<div className="mt-8 space-y-3">
<div className="rounded-2xl border border-[#070707]/10 bg-white p-4">
<div className="flex items-start justify-between gap-4">
<div className="flex items-start gap-3">
<span className="mt-0.5 grid h-9 w-9 place-items-center rounded-2xl bg-[#9DB2BD]/25">
<i className="h-4.5 w-4.5" data-lucide="sparkles"></i>
</span>
<div>
<p className="text-base font-medium tracking-tight">Highlights tour</p>
<p className="mt-1 text-sm font-medium leading-relaxed text-[#070707]/70">
                      A fast, story-rich overview of the museum and key machinery.
                    </p>
</div>
</div>
<span className="text-xs font-medium text-[#070707]/60">~ 45 min</span>
</div>
</div>
<div className="rounded-2xl border border-[#070707]/10 bg-white p-4">
<div className="flex items-start justify-between gap-4">
<div className="flex items-start gap-3">
<span className="mt-0.5 grid h-9 w-9 place-items-center rounded-2xl bg-[#9DB2BD]/25">
<i className="h-4.5 w-4.5" data-lucide="pickaxe"></i>
</span>
<div>
<p className="text-base font-medium tracking-tight">Underground experience</p>
<p className="mt-1 text-sm font-medium leading-relaxed text-[#070707]/70">
                      Deeper descent into galleries with guided explanations and context.
                    </p>
</div>
</div>
<span className="text-xs font-medium text-[#070707]/60">~ 90 min</span>
</div>
</div>
<div className="rounded-2xl border border-[#070707]/10 bg-white p-4">
<div className="flex items-start justify-between gap-4">
<div className="flex items-start gap-3">
<span className="mt-0.5 grid h-9 w-9 place-items-center rounded-2xl bg-[#9DB2BD]/25">
<i className="h-4.5 w-4.5" data-lucide="backpack"></i>
</span>
<div>
<p className="text-base font-medium tracking-tight">School program</p>
<p className="mt-1 text-sm font-medium leading-relaxed text-[#070707]/70">
                      Age-adapted learning, industry history, and interactive moments.
                    </p>
</div>
</div>
<span className="text-xs font-medium text-[#070707]/60">By request</span>
</div>
</div>
</div>
<div className="mt-8">
<a className="inline-flex items-center gap-2 rounded-xl bg-[#B01116] px-5 py-3 text-sm font-medium text-white hover:brightness-110" href="#tickets">
<span>Reserve a tour</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="lg:col-span-7">
<div className="relative overflow-hidden rounded-3xl border border-[#070707]/10 bg-[#070707]">
<div className="absolute inset-0 bg-gradient-to-tr from-[#070707] via-[#070707]/70 to-transparent"></div>
<img alt="Mining tools and industrial heritage" className="h-full min-h-[20rem] w-full object-cover opacity-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 flex items-end">
<div className="w-full p-6 sm:p-8">
<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div>
<p className="text-xs font-medium text-white/70">Featured</p>
<p className="mt-2 text-3xl font-medium tracking-tight text-white sm:text-4xl">
                      Heritage in motion.
                    </p>
<p className="mt-3 max-w-xl text-lg font-medium leading-relaxed text-white/75">
                      From extraction to everyday life—discover how mining shaped communities and landscapes.
                    </p>
</div>
<a className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white" href="#exhibits">
<span>Explore exhibits</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
<div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur">
<p className="text-xs font-medium text-white/70">Themes</p>
<p className="mt-1 text-base font-medium text-white">Work &amp; life</p>
</div>
<div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur">
<p className="text-xs font-medium text-white/70">Objects</p>
<p className="mt-1 text-base font-medium text-white">Tools, wagons</p>
</div>
<div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur">
<p className="text-xs font-medium text-white/70">Stories</p>
<p className="mt-1 text-base font-medium text-white">Local voices</p>
</div>
</div>
</div>
</div>
</div>
<div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
<div className="rounded-3xl border border-[#070707]/10 bg-white p-5">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-[#070707]" data-lucide="camera"></i>
<p className="text-sm font-medium text-[#070707]">Photo-friendly zones</p>
</div>
<p className="mt-3 text-lg font-medium leading-relaxed text-[#070707]/70">
                Capture highlights above ground and selected areas on guided routes.
              </p>
</div>
<div className="rounded-3xl border border-[#070707]/10 bg-white p-5">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-[#070707]" data-lucide="badge-check"></i>
<p className="text-sm font-medium text-[#070707]">Expert guides</p>
</div>
<p className="mt-3 text-lg font-medium leading-relaxed text-[#070707]/70">
                Clear explanations, local context, and time for questions.
              </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-[#070707]/10 bg-white" id="exhibits">
<div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
<div>
<p className="text-sm font-medium text-[#070707]/60">Exhibits</p>
<h2 className="mt-3 text-3xl font-medium tracking-tight text-[#070707] sm:text-4xl">
            Machines, maps, and memory.
          </h2>
<p className="mt-4 max-w-2xl text-lg font-medium leading-relaxed text-[#070707]/70">
            A mix of preserved equipment, interpretive displays, and archival material that connects industry to everyday life.
          </p>
</div>
<a className="inline-flex items-center gap-2 rounded-xl border border-[#070707]/15 bg-white px-4 py-2.5 text-sm font-medium text-[#070707] hover:border-[#070707]/25" href="#stories">
<span>Read stories</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
<article className="group overflow-hidden rounded-3xl border border-[#070707]/10 bg-white">
<div className="relative">
<img alt="Industrial control panel" className="h-56 w-full object-cover sm:h-64" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#070707]/60 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs font-medium text-white/70">Permanent</p>
<h3 className="mt-2 text-xl font-medium tracking-tight text-white">Industrial systems</h3>
</div>
</div>
<div className="p-5">
<p className="text-lg font-medium leading-relaxed text-[#070707]/70">
              Understand the mechanisms that kept operations running—signals, controls, and workflow.
            </p>
<a className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#B01116]" href="#">
<span>Explore</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</article>
<article className="group overflow-hidden rounded-3xl border border-[#070707]/10 bg-white">
<div className="relative">
<img alt="Archive documents" className="h-56 w-full object-cover sm:h-64" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#070707]/60 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs font-medium text-white/70">Archive</p>
<h3 className="mt-2 text-xl font-medium tracking-tight text-white">Maps &amp; records</h3>
</div>
</div>
<div className="p-5">
<p className="text-lg font-medium leading-relaxed text-[#070707]/70">
              Trace the evolution of sites and communities through plans, photos, and documents.
            </p>
<a className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#B01116]" href="#">
<span>Explore</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</article>
<article className="group overflow-hidden rounded-3xl border border-[#070707]/10 bg-white">
<div className="relative">
<img alt="Mining helmet and lamp" className="h-56 w-full object-cover sm:h-64" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#070707]/60 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs font-medium text-white/70">Objects</p>
<h3 className="mt-2 text-xl font-medium tracking-tight text-white">Tools &amp; gear</h3>
</div>
</div>
<div className="p-5">
<p className="text-lg font-medium leading-relaxed text-[#070707]/70">
              Everyday equipment, safety gear, and the material culture of underground work.
            </p>
<a className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#B01116]" href="#">
<span>Explore</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</article>
</div>
</div>
</section>

<section className="border-t border-[#070707]/10 bg-[#070707]">
<div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
<div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
<div className="lg:col-span-7">
<h2 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Dive into the past —
            <span className="text-white/60">with clarity.</span>
</h2>
<p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-white/75">
            A museum experience that balances atmosphere with guidance: strong visuals, precise information, and an easy path from discovery to booking.
          </p>
<div className="mt-8 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-[#070707] hover:bg-white/90" href="#tickets">
<i className="h-4 w-4" data-lucide="ticket"></i>
<span>Book now</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10" href="#contact">
<i className="h-4 w-4" data-lucide="phone"></i>
<span>Call the museum</span>
</a>
</div>
<div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
<div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur">
<p className="text-xs font-medium text-white/70">Focus</p>
<p className="mt-1 text-base font-medium text-white">Industry heritage</p>
</div>
<div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur">
<p className="text-xs font-medium text-white/70">Tone</p>
<p className="mt-1 text-base font-medium text-white">Human stories</p>
</div>
<div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur">
<p className="text-xs font-medium text-white/70">Format</p>
<p className="mt-1 text-base font-medium text-white">Guided descent</p>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur">
<div className="flex items-center justify-between gap-4">
<div>
<p className="text-xs font-medium text-white/70">Featured card</p>
<p className="mt-2 text-2xl font-medium tracking-tight text-white">MNM Essentials</p>
</div>
<span className="inline-flex items-center rounded-full bg-[#B01116] px-3 py-1.5 text-xs font-medium text-white">
                2026
              </span>
</div>
<div className="mt-5 rounded-2xl bg-white p-5 text-[#070707]">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-xs font-medium text-[#070707]/60">What you’ll see</p>
<p className="mt-1 text-lg font-medium tracking-tight">Key underground scenes</p>
</div>
<i className="h-5 w-5 text-[#070707]/70" data-lucide="layers"></i>
</div>
<p className="mt-3 text-lg font-medium leading-relaxed text-[#070707]/70">
                A compact route with machinery, safety gear, and context for first-time visitors.
              </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="rounded-full border border-[#070707]/10 bg-[#9DB2BD]/20 px-3 py-1.5 text-xs font-medium text-[#070707]/70">Beginner-friendly</span>
<span className="rounded-full border border-[#070707]/10 bg-[#9DB2BD]/20 px-3 py-1.5 text-xs font-medium text-[#070707]/70">Guided</span>
<span className="rounded-full border border-[#070707]/10 bg-[#9DB2BD]/20 px-3 py-1.5 text-xs font-medium text-[#070707]/70">90 minutes</span>
</div>
<a className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#070707] px-4 py-3 text-sm font-medium text-white hover:bg-[#070707]/95" href="#tickets">
<span>Reserve</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
<p className="mt-4 text-sm font-medium leading-relaxed text-white/70">
              Tip: Underground temperatures can feel cooler—bring a light layer.
            </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-[#070707]/10 bg-white" id="stories">
<div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
<div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
<div className="lg:col-span-5">
<p className="text-sm font-medium text-[#070707]/60">Stories</p>
<h2 className="mt-3 text-3xl font-medium tracking-tight text-[#070707] sm:text-4xl">
            Voices, objects, context.
          </h2>
<p className="mt-4 max-w-xl text-lg font-medium leading-relaxed text-[#070707]/70">
            Read short pieces that connect artifacts to people: work routines, family life, and how the region evolved.
          </p>
<a className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#B01116] hover:brightness-110" href="#">
<span>Browse all stories</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
<div className="mt-10 rounded-3xl border border-[#070707]/10 bg-white p-6">
<div className="flex items-center gap-3">
<span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#9DB2BD]/25">
<i className="h-5 w-5" data-lucide="quote"></i>
</span>
<p className="text-sm font-medium text-[#070707]/70">From the archive</p>
</div>
<p className="mt-4 text-lg font-medium leading-relaxed text-[#070707]/80">
              “The mine wasn’t only a workplace—it was a rhythm that shaped streets, homes, and generations.”
            </p>
<p className="mt-4 text-xs font-medium text-[#070707]/50">— Oral histories collection</p>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
<article className="rounded-3xl border border-[#070707]/10 bg-white p-5">
<div className="flex items-start justify-between gap-4">
<div className="flex items-start gap-3">
<span className="mt-0.5 grid h-9 w-9 place-items-center rounded-2xl bg-[#9DB2BD]/25">
<i className="h-4.5 w-4.5" data-lucide="newspaper"></i>
</span>
<div>
<p className="text-xs font-medium text-[#070707]/60">News</p>
<h3 className="mt-2 text-xl font-medium tracking-tight text-[#070707]">A new guided route</h3>
</div>
</div>
<span className="text-xs font-medium text-[#070707]/50">Updated</span>
</div>
<p className="mt-4 text-lg font-medium leading-relaxed text-[#070707]/70">
                A refined underground itinerary focused on daily work and safety evolution.
              </p>
<a className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#B01116]" href="#">
<span>Read article</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</article>
<article className="rounded-3xl border border-[#070707]/10 bg-white p-5">
<div className="flex items-start justify-between gap-4">
<div className="flex items-start gap-3">
<span className="mt-0.5 grid h-9 w-9 place-items-center rounded-2xl bg-[#9DB2BD]/25">
<i className="h-4.5 w-4.5" data-lucide="mic"></i>
</span>
<div>
<p className="text-xs font-medium text-[#070707]/60">Interview</p>
<h3 className="mt-2 text-xl font-medium tracking-tight text-[#070707]">Local memories</h3>
</div>
</div>
<span className="text-xs font-medium text-[#070707]/50">6 min</span>
</div>
<p className="mt-4 text-lg font-medium leading-relaxed text-[#070707]/70">
                Short perspectives on how mining shaped identity in the region.
              </p>
<a className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#B01116]" href="#">
<span>Read article</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</article>
<article className="rounded-3xl border border-[#070707]/10 bg-white p-5 sm:col-span-2">
<div className="flex items-start justify-between gap-4">
<div className="flex items-start gap-3">
<span className="mt-0.5 grid h-9 w-9 place-items-center rounded-2xl bg-[#9DB2BD]/25">
<i className="h-4.5 w-4.5" data-lucide="image"></i>
</span>
<div>
<p className="text-xs font-medium text-[#070707]/60">Collection</p>
<h3 className="mt-2 text-xl font-medium tracking-tight text-[#070707]">Featured objects</h3>
</div>
</div>
<span className="text-xs font-medium text-[#070707]/50">Curated</span>
</div>
<div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
<div className="overflow-hidden rounded-2xl border border-[#070707]/10">
<img alt="Lamp" className="h-32 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="p-3">
<p className="text-sm font-medium text-[#070707]">Lamp &amp; light</p>
<p className="mt-1 text-xs font-medium text-[#070707]/60">Safety and navigation</p>
</div>
</div>
<div className="overflow-hidden rounded-2xl border border-[#070707]/10">
<img alt="Gloves" className="h-32 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="p-3">
<p className="text-sm font-medium text-[#070707]">Wear &amp; tear</p>
<p className="mt-1 text-xs font-medium text-[#070707]/60">Daily work realities</p>
</div>
</div>
<div className="overflow-hidden rounded-2xl border border-[#070707]/10">
<img alt="Metal parts" className="h-32 w-full object-cover" src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="p-3">
<p className="text-sm font-medium text-[#070707]">Mechanics</p>
<p className="mt-1 text-xs font-medium text-[#070707]/60">Systems and tools</p>
</div>
</div>
</div>
<a className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#B01116]" href="#">
<span>Open collection</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</article>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-[#070707]/10 bg-white" id="tickets">
<div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
<div className="overflow-hidden rounded-3xl border border-[#070707]/10 bg-gradient-to-br from-[#9DB2BD]/25 via-white to-white">
<div className="grid grid-cols-1 gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:items-center lg:gap-10">
<div className="lg:col-span-7">
<p className="text-sm font-medium text-[#070707]/60">Tickets</p>
<h2 className="mt-3 text-3xl font-medium tracking-tight text-[#070707] sm:text-4xl">
              Book your visit in minutes.
            </h2>
<p className="mt-4 max-w-2xl text-lg font-medium leading-relaxed text-[#070707]/70">
              Choose a date and route, then confirm. For groups and schools, request a tailored slot.
            </p>
<div className="mt-8 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B01116] px-5 py-3 text-sm font-medium text-white hover:brightness-110" href="#">
<i className="h-4 w-4" data-lucide="shopping-bag"></i>
<span>Buy tickets</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#070707]/15 bg-white px-5 py-3 text-sm font-medium text-[#070707] hover:border-[#070707]/25" href="#contact">
<i className="h-4 w-4" data-lucide="users"></i>
<span>Group booking</span>
</a>
</div>
</div>
<div className="lg:col-span-5">
<div className="rounded-3xl border border-[#070707]/10 bg-white p-6">
<div className="flex items-center justify-between">
<p className="text-base font-medium tracking-tight">Quick info</p>
<span className="inline-flex items-center rounded-full bg-[#9DB2BD]/25 px-3 py-1.5 text-xs font-medium text-[#070707]/70">
                  Onsite + online
                </span>
</div>
<div className="mt-5 space-y-4">
<div className="flex items-start gap-3">
<span className="mt-0.5 grid h-9 w-9 place-items-center rounded-2xl bg-[#9DB2BD]/25">
<i className="h-4.5 w-4.5" data-lucide="badge-info"></i>
</span>
<div>
<p className="text-sm font-medium text-[#070707]">Recommended arrival</p>
<p className="mt-1 text-lg font-medium leading-relaxed text-[#070707]/70">
                      10–15 minutes before tour time.
                    </p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="mt-0.5 grid h-9 w-9 place-items-center rounded-2xl bg-[#9DB2BD]/25">
<i className="h-4.5 w-4.5" data-lucide="shirt"></i>
</span>
<div>
<p className="text-sm font-medium text-[#070707]">What to wear</p>
<p className="mt-1 text-lg font-medium leading-relaxed text-[#070707]/70">
                      Closed shoes and a light jacket.
                    </p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="mt-0.5 grid h-9 w-9 place-items-center rounded-2xl bg-[#9DB2BD]/25">
<i className="h-4.5 w-4.5" data-lucide="languages"></i>
</span>
<div>
<p className="text-sm font-medium text-[#070707]">Languages</p>
<p className="mt-1 text-lg font-medium leading-relaxed text-[#070707]/70">
                      Tours available in FR, DE, and EN (schedule varies).
                    </p>
</div>
</div>
</div>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#070707] px-4 py-3 text-sm font-medium text-white hover:bg-[#070707]/95" href="#contact">
<span>Check accessibility &amp; details</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-[#070707]/10 bg-white" id="contact">
<div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
<div className="lg:col-span-4">
<div className="flex items-center gap-3">
<span className="grid h-10 w-10 place-items-center rounded-xl bg-[#070707] text-white">
<span className="text-sm font-medium tracking-tight">MNM</span>
</span>
<div>
<p className="text-sm font-medium tracking-tight">Musée national des mines</p>
<p className="text-xs font-medium text-[#070707]/60">Rumelange, Luxembourg</p>
</div>
</div>
<p className="mt-4 max-w-md text-lg font-medium leading-relaxed text-[#070707]/70">
            Underground heritage, curated for modern visitors—clear info, guided depth, and stories that stay with you.
          </p>
<div className="mt-6 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-xl border border-[#070707]/15 bg-white px-4 py-2.5 text-sm font-medium text-[#070707] hover:border-[#070707]/25" href="#">
<i className="h-4 w-4" data-lucide="mail"></i>
<span>info@mnm.lu</span>
</a>
<a className="inline-flex items-center gap-2 rounded-xl border border-[#070707]/15 bg-white px-4 py-2.5 text-sm font-medium text-[#070707] hover:border-[#070707]/25" href="#">
<i className="h-4 w-4" data-lucide="phone"></i>
<span>+352 …</span>
</a>
</div>
</div>
<div className="lg:col-span-8">
<div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
<div className="space-y-3">
<p className="text-xs font-medium text-[#070707]/50">Visit</p>
<a className="block text-sm font-medium text-[#070707]/70 hover:text-[#070707]" href="#visit">Hours</a>
<a className="block text-sm font-medium text-[#070707]/70 hover:text-[#070707]" href="#tickets">Tickets</a>
<a className="block text-sm font-medium text-[#070707]/70 hover:text-[#070707]" href="#">Directions</a>
<a className="block text-sm font-medium text-[#070707]/70 hover:text-[#070707]" href="#">Accessibility</a>
</div>
<div className="space-y-3">
<p className="text-xs font-medium text-[#070707]/50">Tours</p>
<a className="block text-sm font-medium text-[#070707]/70 hover:text-[#070707]" href="#tours">Guided tours</a>
<a className="block text-sm font-medium text-[#070707]/70 hover:text-[#070707]" href="#">Group visits</a>
<a className="block text-sm font-medium text-[#070707]/70 hover:text-[#070707]" href="#">Schools</a>
<a className="block text-sm font-medium text-[#070707]/70 hover:text-[#070707]" href="#">Private tours</a>
</div>
<div className="space-y-3">
<p className="text-xs font-medium text-[#070707]/50">Museum</p>
<a className="block text-sm font-medium text-[#070707]/70 hover:text-[#070707]" href="#exhibits">Exhibits</a>
<a className="block text-sm font-medium text-[#070707]/70 hover:text-[#070707]" href="#stories">Stories</a>
<a className="block text-sm font-medium text-[#070707]/70 hover:text-[#070707]" href="#">Collection</a>
<a className="block text-sm font-medium text-[#070707]/70 hover:text-[#070707]" href="#">Press</a>
</div>
<div className="space-y-3">
<p className="text-xs font-medium text-[#070707]/50">Social</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#070707]/70 hover:text-[#070707]" href="#">
<i className="h-4 w-4" data-lucide="instagram"></i><span>Instagram</span>
</a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#070707]/70 hover:text-[#070707]" href="#">
<i className="h-4 w-4" data-lucide="facebook"></i><span>Facebook</span>
</a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#070707]/70 hover:text-[#070707]" href="#">
<i className="h-4 w-4" data-lucide="youtube"></i><span>YouTube</span>
</a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#070707]/70 hover:text-[#070707]" href="#">
<i className="h-4 w-4" data-lucide="globe"></i><span>mnm.lu</span>
</a>
</div>
</div>
<div className="mt-10 flex flex-col gap-4 border-t border-[#070707]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
<p className="text-xs font-medium text-[#070707]/50">
              © <span id="year">2026</span> Musée national des mines Rumelange. All rights reserved.
            </p>
<a className="inline-flex items-center gap-2 text-xs font-medium text-[#070707]/60 hover:text-[#070707]" href="#top">
<span>Back to top</span>
<i className="h-4 w-4" data-lucide="arrow-up"></i>
</a>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
