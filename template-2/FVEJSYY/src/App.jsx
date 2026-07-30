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
      
    lucide.createIcons();

    // Mobile menu toggle
    document.getElementById('mobileMenuBtn').addEventListener('click', () => {
      const menu = document.getElementById('mobileMenu');
      menu.classList.toggle('hidden');
    });

    // Chart.js
    const ctx = document.getElementById('memberChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Már', 'Ápr', 'Máj', 'Jún'],
        datasets: [{
          label: 'Tagok száma',
          data: [320, 390, 450, 520, 610, 740],
          borderColor: '#6366f1',
          backgroundColor: 'rgba(99,102,241,0.1)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#9ca3af' } },
          x: { grid: { display: false }, ticks: { color: '#9ca3af' } }
        }
      }
    });
  
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10 blur-sm"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/glowingplanetparticles-nhVHji30IRoa5HBGe8yeDiTs" width="100%"></iframe></div>

<header className="sticky top-0 z-50 backdrop-blur bg-[#0f1117]/80 border-b border-white/10">
<div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
<a className="text-lg font-semibold tracking-tight font-geist" href="#" style={{}}>VK</a>
<nav className="hidden lg:flex space-x-10 text-sm font-medium">
<a className="transition hover:text-blue-400 font-geist" href="#about" style={{}}>Rólunk</a>
<a className="transition hover:text-blue-400 font-geist" href="#membership" style={{}}>Klubtagság</a>
<a className="transition hover:text-blue-400 font-geist" href="#events" style={{}}>Események</a>
<a className="transition hover:text-blue-400 font-geist" href="#resources" style={{}}>Tudásbázis</a>
<a className="transition hover:text-blue-400 font-geist" href="#success" style={{}}>Sikerek</a>
<a className="transition hover:text-blue-400 font-geist" href="#contact" style={{}}>Kapcsolat</a>
</nav>
<div className="flex items-center space-x-4">
<button className="hidden sm:block px-4 py-2 rounded-md border transition text-sm border-white/20 hover:border-blue-400 hover:text-blue-400 font-geist" style={{}}>Belépés</button>
<button className="px-4 py-2 rounded-md hover:bg-blue-500 transition text-sm font-medium bg-blue-600 font-geist" style={{}}>Regisztráció</button>
<button className="lg:hidden" id="mobileMenuBtn">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>

<div className="lg:hidden hidden px-6 pt-4 pb-6 space-y-4 text-sm font-medium" id="mobileMenu">
<a className="block hover:text-blue-400 font-geist" href="#about" style={{}}>Rólunk</a>
<a className="block hover:text-blue-400 font-geist" href="#membership" style={{}}>Klubtagság</a>
<a className="block hover:text-blue-400 font-geist" href="#events" style={{}}>Események</a>
<a className="block hover:text-blue-400 font-geist" href="#resources" style={{}}>Tudásbázis</a>
<a className="block hover:text-blue-400 font-geist" href="#success" style={{}}>Sikerek</a>
<a className="block hover:text-blue-400 font-geist" href="#contact" style={{}}>Kapcsolat</a>
</div>
</header>

<section className="relative isolate overflow-hidden">
<div className="max-w-7xl text-center mr-auto ml-auto pt-24 pr-6 pb-32 pl-6">
<h1 className="text-4xl md:text-6xl tracking-tight font-geist font-semibold" style={{}}>A leggyorsabb út<br className="hidden md:block" /> <span className="text-blue-500 font-geist font-semibold" style={{}}>vállalkozásod következő szintjére</span></h1>
<p className="mt-6 max-w-xl mx-auto text-lg text-white/70 font-geist" style={{}}>Exkluzív közösség, gyakorlati tudás és személyre szabott támogatás kis- és nagyvállalatoknak.</p>
<div className="mt-8 flex justify-center gap-4">
<button className="px-6 py-3 hover:bg-blue-500 rounded-md font-medium transition bg-blue-600 font-geist" style={{}}>Csatlakozz most</button>
<button className="px-6 py-3 border rounded-md font-medium transition border-white/20 hover:border-blue-400 hover:text-blue-400 font-geist" style={{}}>Kérj infót</button>
</div>

<div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
<a className="group border rounded-xl p-6 flex items-start space-x-4 transition bg-white/5 hover:bg-white/10 border-white/10" href="#">
<svg className="lucide lucide-briefcase w-8 h-8 stroke-[1.5] text-indigo-400" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<div>
<h3 className="text-xl font-semibold tracking-tight font-geist" style={{}}>Kisvállalkozásoknak</h3>
<p className="mt-1 text-sm text-white/70 font-geist">Gyorsan bevethető, költséghatékony megoldások.</p>
</div>
</a>
<a className="group border rounded-xl p-6 flex items-start space-x-4 transition bg-white/5 hover:bg-white/10 border-white/10" href="#">
<svg className="lucide lucide-building-2 w-8 h-8 stroke-[1.5] text-indigo-400" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
<div>
<h3 className="text-xl font-semibold tracking-tight font-geist" style={{}}>Nagyvállalatoknak</h3>
<p className="mt-1 text-sm text-white/70 font-geist">Személyre szabott VIP támogatás, dedikált tanácsadóval.</p>
</div>
</a>
</div>
</div>
</section>

<div className="border-t border-white/10"></div>

<section className="mx-auto max-w-7xl px-6 py-24" id="about">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl tracking-tight font-geist font-semibold" style={{}}>Rólunk</h2>
<p className="mt-6 leading-7 text-white/70 font-geist">Egy olyan közösséget építünk, ahol a tudásmegosztás, a hálózatépítés és az inspiráció találkozik, hogy tagjaink akár 10× gyorsabban érjék el üzleti céljaikat.</p>
<ul className="mt-8 space-y-4">
<li className="flex items-start space-x-3">
<svg className="lucide lucide-users w-6 h-6 stroke-[1.5] text-indigo-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="font-geist">Bővülő, több mint <strong className="font-medium font-geist" style={{}}>800</strong> fős tagság.</span>
</li>
<li className="flex items-start space-x-3">
<svg className="lucide lucide-rocket w-6 h-6 stroke-[1.5] text-indigo-400" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
<span className="font-geist">Havi <strong className="font-medium font-geist" style={{}}>5+</strong> élő esemény és workshop.</span>
</li>
<li className="flex items-start space-x-3">
<svg className="lucide lucide-library w-6 h-6 stroke-[1.5] text-indigo-400" data-lucide="library" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6 4 14"></path><path d="M12 6v14"></path><path d="M8 8v12"></path><path d="M4 4v16"></path></svg>
<span className="font-geist">Folyamatosan bővülő tudásbázis.</span>
</li>
</ul>
</div>
<div className="relative">
<img alt="team" className="rounded-xl object-cover w-full h-80 lg:h-96 shadow-lg" src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80" />
</div>
</div>
</section>

<div className="border-t border-white/10"></div>

<section className="mx-auto max-w-7xl px-6 py-24" id="membership">
<h2 className="text-3xl tracking-tight text-center font-geist font-semibold" style={{}}>Klubtagsági előnyök</h2>
<p className="mt-4 max-w-2xl mx-auto text-center text-white/70 font-geist">Átlátható, rugalmas csomagok különböző vállalati méretre szabva.</p>
<div className="mt-16 grid gap-10 md:grid-cols-2">

<div className="border rounded-2xl p-8 transition border-white/10 bg-white/5 hover:bg-white/10">
<h3 className="text-xl font-semibold tracking-tight flex items-center font-geist" style={{}}><svg className="lucide lucide-briefcase w-6 h-6 mr-2 stroke-[1.5] text-indigo-400" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg> Kisvállalati csomag</h3>
<p className="mt-4 text-sm text-white/70 font-geist">Azonnal bevethető eszközök és közösségi támogatás havi áron.</p>
<ul className="mt-6 space-y-3 text-sm">
<li className="flex items-start font-geist"><svg className="lucide lucide-check w-4 h-4 mr-2 stroke-[1.5] text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Heti online mastermind</li>
<li className="flex items-start font-geist"><svg className="lucide lucide-check w-4 h-4 mr-2 stroke-[1.5] text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Egyéni konzultáció havonta</li>
<li className="flex items-start font-geist"><svg className="lucide lucide-check w-4 h-4 mr-2 stroke-[1.5] text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Zárt tudásbázis elérés</li>
</ul>
<div className="mt-8 flex items-baseline">
<span className="text-3xl tracking-tight font-geist font-semibold" style={{}}>19.000</span>
<span className="ml-2 text-white/70 font-geist">Ft / hó</span>
</div>
<button className="mt-8 w-full py-3 rounded-md hover:bg-blue-500 transition font-medium bg-blue-600 font-geist" style={{}}>Előfizetek</button>
</div>

<div className="border border-blue-500/60 rounded-2xl p-8 ring-1 ring-inset ring-blue-500/20 relative bg-blue-600/10" style={{}}>
<span className="absolute -top-4 right-4 px-3 py-1 rounded-full bg-blue-500 text-xs font-medium font-geist" style={{}}>Legnépszerűbb</span>
<h3 className="text-xl font-semibold tracking-tight flex items-center font-geist" style={{}}><svg className="lucide lucide-building-2 w-6 h-6 mr-2 stroke-[1.5] text-indigo-400" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>Nagyvállalati VIP</h3>
<p className="mt-4 text-sm text-white/70 font-geist">Premier hozzáférés eseményekhez, dedikált tanácsadó, exkluzív tartalmak.</p>
<ul className="mt-6 space-y-3 text-sm">
<li className="flex items-start font-geist"><svg className="lucide lucide-check w-4 h-4 mr-2 stroke-[1.5] text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Dedicated account manager</li>
<li className="flex items-start font-geist"><svg className="lucide lucide-check w-4 h-4 mr-2 stroke-[1.5] text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Személyre szabott tréningek</li>
<li className="flex items-start font-geist"><svg className="lucide lucide-check w-4 h-4 mr-2 stroke-[1.5] text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Prioritásos esemény-belépő</li>
</ul>
<div className="mt-8 flex items-baseline">
<span className="text-3xl tracking-tight font-geist font-semibold" style={{}}>Kérj ajánlatot</span>
</div>
<button className="mt-8 w-full py-3 rounded-md hover:bg-blue-500 transition font-medium bg-blue-600 font-geist" style={{}}>Kapcsolatfelvétel</button>
</div>
</div>
</section>

<section className="mx-auto max-w-5xl px-6 pb-24">
<div className="border rounded-2xl p-8 bg-white/5 border-white/10">
<h2 className="text-2xl tracking-tight flex items-center font-geist font-semibold" style={{}}><svg className="lucide lucide-bar-chart-3 w-6 h-6 mr-2 stroke-[1.5] text-indigo-400" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg> Tagság növekedése</h2>
<p className="mt-2 text-sm text-white/70 font-geist">Hogyan bővült közösségünk az elmúlt 6 hónapban.</p>
<div className="mt-6">
<div>
<canvas height="364" id="memberChart" style={{display: `block`, boxSizing: `border-box`, height: `364px`, width: `910px`}} width="910"></canvas>
</div>
</div>
</div>
</section>

<div className="border-t border-white/10"></div>

<section className="mx-auto max-w-7xl px-6 py-24" id="events">
<div className="flex items-center justify-between">
<h2 className="text-3xl tracking-tight font-geist font-semibold" style={{}}>Közelgő események</h2>
<a className="text-sm transition hover:text-blue-400 font-geist" href="#" style={{}}>Összes esemény →</a>
</div>
<div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

<article className="border rounded-xl overflow-hidden hover:shadow-lg transition duration-300 border-white/10 bg-white/5 hover:bg-white/10">
<img alt="event" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80" />
<div className="p-6">
<span className="text-xs uppercase font-medium text-blue-400 font-geist" style={{}}>Budapest · Workshop</span>
<h3 className="mt-2 text-lg font-semibold tracking-tight font-geist" style={{}}>AI-vezérelt marketing kampányok</h3>
<p className="mt-2 text-sm text-white/70 font-geist">Tanuld meg, hogyan tudod az automatizációt beépíteni a mindennapi marketingbe.</p>
<button className="mt-4 inline-flex items-center text-sm hover:underline text-blue-400 font-geist" style={{}}>Regisztrálok</button>
</div>
</article>

<article className="border rounded-xl overflow-hidden hover:shadow-lg transition duration-300 border-white/10 bg-white/5 hover:bg-white/10">
<img alt="event" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="p-6">
<span className="text-xs uppercase font-medium text-blue-400 font-geist" style={{}}>Online · Mastermind</span>
<h3 className="mt-2 text-lg font-semibold tracking-tight font-geist" style={{}}>Scaling SaaS termékek</h3>
<p className="mt-2 text-sm text-white/70 font-geist">Gyakorlati tapasztalatok 0-ról 10k-ig.</p>
<button className="mt-4 inline-flex items-center text-sm hover:underline text-blue-400 font-geist" style={{}}>Regisztrálok</button>
</div>
</article>

<article className="border rounded-xl overflow-hidden hover:shadow-lg transition duration-300 border-white/10 bg-white/5 hover:bg-white/10">
<img alt="event" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" />
<div className="p-6">
<span className="text-xs uppercase font-medium text-blue-400 font-geist" style={{}}>Debrecen · Meetup</span>
<h3 className="mt-2 text-lg font-semibold tracking-tight font-geist" style={{}}>HR trendek 2024-ben</h3>
<p className="mt-2 text-sm text-white/70 font-geist">Új toborzási stratégiák és employer branding.</p>
<button className="mt-4 inline-flex items-center text-sm hover:underline text-blue-400 font-geist" style={{}}>Regisztrálok</button>
</div>
</article>
</div>
</section>

<div className="border-t border-white/10"></div>

<section className="mx-auto max-w-7xl px-6 py-24" id="resources">
<h2 className="text-3xl tracking-tight text-center font-geist font-semibold" style={{}}>Legfrissebb cikkek</h2>
<p className="mt-4 max-w-2xl mx-auto text-center text-white/70 font-geist">Ingyenes tudásanyagok, esettanulmányok.</p>
<div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

<article className="group">
<a className="block rounded-xl overflow-hidden border border-white/10" href="#">
<img alt="blog" className="h-48 w-full object-cover group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div className="p-6">
<span className="text-xs uppercase font-medium text-blue-400 font-geist" style={{}}>Esettanulmány</span>
<h3 className="mt-2 text-lg font-semibold tracking-tight group-hover:text-blue-400 transition font-geist" style={{}}>Hogyan növelte meg a BrightTech 300-al a leadjeit?</h3>
<p className="mt-2 text-sm line-clamp-3 text-white/70 font-geist">Naprakész tartalommarketing-stratégia és automatizált funnel…</p>
</div>
</a>
</article>

<article className="group">
<a className="block rounded-xl overflow-hidden border border-white/10" href="#">
<img alt="blog" className="h-48 w-full object-cover group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<div className="p-6">
<span className="text-xs uppercase font-medium text-blue-400 font-geist" style={{}}>Interjú</span>
<h3 className="mt-2 text-lg font-semibold tracking-tight group-hover:text-blue-400 transition font-geist" style={{}}>A Z-generációs vezető, aki megreformálta a logisztikát</h3>
<p className="mt-2 text-sm line-clamp-3 text-white/70 font-geist">Megkérdeztük Gábort, hogyan építette fel…</p>
</div>
</a>
</article>

<article className="group">
<a className="block rounded-xl overflow-hidden border border-white/10" href="#">
<img alt="blog" className="h-48 w-full object-cover group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" />
<div className="p-6">
<span className="text-xs uppercase font-medium text-blue-400 font-geist" style={{}}>Videó</span>
<h3 className="mt-2 text-lg font-semibold tracking-tight group-hover:text-blue-400 transition font-geist" style={{}}>5 perc alatt AI-alapú forecast</h3>
<p className="mt-2 text-sm line-clamp-3 text-white/70 font-geist">Bemutatjuk a legújabb no-code eszközt…</p>
</div>
</a>
</article>
</div>
</section>

<div className="border-t border-white/10"></div>

<section className="mx-auto max-w-7xl px-6 py-24" id="success">
<h2 className="text-3xl tracking-tight text-center font-geist font-semibold" style={{}}>Sikertörténetek</h2>
<p className="mt-4 max-w-2xl mx-auto text-center text-white/70 font-geist">Tagjaink mondták</p>
<div className="mt-16 grid gap-10 md:grid-cols-2">

<blockquote className="border-l-4 border-blue-500 pl-6" style={{}}>
<p className="text-lg font-medium tracking-tight font-geist" style={{}}>„A klub mentorprogramjának köszönhetően 6 hónap alatt megdupláztuk a bevételeinket.”</p>
<footer className="mt-4 flex items-center space-x-4">
<img alt="avatar" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=64&q=80" />
<div>
<span className="font-medium font-geist" style={{}}>Farkas Júlia</span>
<span className="block text-xs text-white/60 font-geist">CEO, GreenLab</span>
</div>
</footer>
</blockquote>

<blockquote className="border-l-4 border-blue-500 pl-6" style={{}}>
<p className="text-lg font-medium tracking-tight font-geist" style={{}}>„Nemcsak tudást, hanem értékes partnerkapcsolatokat is szereztünk.”</p>
<footer className="mt-4 flex items-center space-x-4">
<img alt="avatar" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&q=80" />
<div>
<span className="font-medium font-geist" style={{}}>Kovács Marcell</span>
<span className="block text-xs text-white/60 font-geist">CTO, BigData Co.</span>
</div>
</footer>
</blockquote>
</div>
</section>

<div className="border-t border-white/10"></div>

<section className="mx-auto max-w-5xl px-6 py-24" id="contact">
<div className="grid md:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl tracking-tight font-geist font-semibold" style={{}}>Kapcsolatfelvétel</h2>
<p className="mt-4 text-white/70 font-geist">Töltsd ki az alábbi űrlapot, és 24 órán belül visszajelzünk.</p>
<form className="mt-8 space-y-6">
<div>
<label className="block text-sm font-medium mb-1 font-geist">Név</label>
<input className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/5 border-white/10" placeholder="Teljes neved" style={{}} type="text" />
</div>
<div>
<label className="block text-sm font-medium mb-1 font-geist">Email</label>
<input className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/5 border-white/10" placeholder="céges email" style={{}} type="email" />
</div>
<div>
<label className="block text-sm font-medium mb-1 font-geist">Üzenet</label>
<textarea className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/5 border-white/10" placeholder="Miben segíthetünk?" rows="4" style={{}}></textarea>
</div>
<button className="w-full py-3 rounded-md hover:bg-blue-500 transition font-medium bg-blue-600 font-geist" style={{}} type="submit">Elküldöm</button>
</form>
</div>

<div>
<h2 className="text-3xl tracking-tight font-geist font-semibold" style={{}}>Gyakori kérdések</h2>
<div className="mt-6 space-y-6">
<details className="border rounded-md p-4 bg-white/5 border-white/10">
<summary className="cursor-pointer font-medium text-sm font-geist">Milyen hosszú a tagsági időszak?</summary>
<p className="mt-2 text-sm text-white/70 font-geist">Havi előfizetésről van szó, bármikor lemondható.</p>
</details>
<details className="border rounded-md p-4 bg-white/5 border-white/10">
<summary className="cursor-pointer font-medium text-sm font-geist">Hogyan érhetem el az exkluzív tartalmakat?</summary>
<p className="mt-2 text-sm text-white/70 font-geist">Belépés után a profilodban automatikusan megjelenik a Tudásbázis menüpont.</p>
</details>
<details className="border rounded-md p-4 bg-white/5 border-white/10">
<summary className="cursor-pointer font-medium text-sm font-geist">Cégenként vagy személyenként kell fizetni?</summary>
<p className="mt-2 text-sm text-white/70 font-geist">A tagság cégenként értendő, egy előfizetéssel több munkatárs is csatlakozhat.</p>
</details>
</div>
</div>
</div>
</section>

<footer className="border-t py-10 border-white/10">
<div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
<span className="text-sm text-white/60 font-geist">© 2024 Vállalkozói Klub. Minden jog fenntartva.</span>
<div className="flex space-x-6 text-white/60">
<a className="transition hover:text-blue-400" href="#" style={{}}><svg className="lucide lucide-linkedin w-5 h-5 stroke-[1.5]" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="transition hover:text-blue-400" href="#" style={{}}><svg className="lucide lucide-twitter w-5 h-5 stroke-[1.5]" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="transition hover:text-blue-400" href="#" style={{}}><svg className="lucide lucide-facebook w-5 h-5 stroke-[1.5]" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
</div>
</div>
</footer>



    </>
  );
}
