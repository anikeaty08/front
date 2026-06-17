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
      

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-zinc-200/50 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

<header className="sticky top-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-xl border-b border-zinc-200/50">
<nav className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
<a className="font-medium tracking-tighter text-lg text-zinc-900" href="/">SCOTUS</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#episodes">Episodes</a>
<a className="hover:text-zinc-900 transition-colors" href="#hosts">Hosts</a>
<a className="hover:text-zinc-900 transition-colors" href="#about">About</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex h-9 items-center justify-center px-4 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors" href="#subscribe">
                    Subscribe
                </a>
<button className="md:hidden text-zinc-500 hover:text-zinc-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>
</header>
<main className="flex-grow">

<section className="mx-auto max-w-5xl px-6 pt-32 pb-24 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200/80 text-xs font-medium text-zinc-600 mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-500"></span>
</span>
                Latest episode available now
            </div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-zinc-900 mb-6 max-w-3xl mx-auto leading-[1.1]">
                Demystifying the<br/>Supreme Court.
            </h1>
<p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                In-depth analysis of the highest court in the land, its rulings, the legal precedents, and the justices who shape American law. New episodes every Thursday.
            </p>
<div className="flex flex-wrap items-center justify-center gap-6 text-zinc-400" id="subscribe">
<a className="hover:text-zinc-900 transition-colors flex items-center gap-2 text-sm font-medium" href="#">
<iconify-icon icon="solar:headphones-round-linear" strokeWidth="1.5" width="20"></iconify-icon> Apple Podcasts
                </a>
<a className="hover:text-zinc-900 transition-colors flex items-center gap-2 text-sm font-medium" href="#">
<iconify-icon icon="solar:music-library-2-linear" strokeWidth="1.5" width="20"></iconify-icon> Spotify
                </a>
<a className="hover:text-zinc-900 transition-colors flex items-center gap-2 text-sm font-medium" href="#">
<iconify-icon icon="solar:rss-linear" strokeWidth="1.5" width="20"></iconify-icon> RSS Feed
                </a>
</div>
</section>

<section className="mx-auto max-w-4xl px-6 pb-24" id="episodes">
<div className="group relative bg-white border border-zinc-200/80 rounded-[2rem] p-6 md:p-10 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
<button className="shrink-0 w-16 h-16 rounded-full bg-zinc-900 text-white flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-md">
<iconify-icon className="ml-1" icon="solar:play-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
<div className="flex-1">
<div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs font-medium text-zinc-500 mb-3">
<span className="text-zinc-900 bg-zinc-100 px-2 py-0.5 rounded-md">Episode 142</span>
<span className="w-1 h-1 rounded-full bg-zinc-300 hidden md:block"></span>
<span>October 26, 2023</span>
<span className="w-1 h-1 rounded-full bg-zinc-300 hidden md:block"></span>
<span className="flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="14"></iconify-icon> 45 min
                            </span>
</div>
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-3 group-hover:text-zinc-600 transition-colors">
                            The Chevron Deference Debate
                        </h2>
<p className="text-zinc-500 leading-relaxed text-sm">
                            We break down the recent oral arguments in Loper Bright Enterprises v. Raimondo, a case that could upend decades of administrative law and fundamentally shift power away from federal agencies back to the judiciary.
                        </p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-4xl px-6 pb-32">
<div className="flex items-center justify-between mb-8 border-b border-zinc-200/80 pb-4">
<h3 className="text-lg font-medium tracking-tight text-zinc-900">All Episodes</h3>
<span className="text-sm font-medium text-zinc-500">9 Episodes</span>
</div>
<div className="flex flex-col">

<article className="group relative flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 py-6 border-b border-zinc-200/50 last:border-0 hover:bg-zinc-100/50 -mx-6 px-6 transition-colors rounded-2xl">
<div className="text-xs font-medium text-zinc-400 shrink-0 md:w-32 pt-1">Oct 19, 2023</div>
<div className="flex-1 pr-8">
<h4 className="text-base font-medium text-zinc-900 mb-2">The Second Amendment and Domestic Violence</h4>
<p className="text-sm text-zinc-500 leading-relaxed line-clamp-2">Analyzing United States v. Rahimi and the historical analogues test established in Bruen, exploring how it applies to modern gun regulations.</p>
</div>
<button className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex shrink-0 w-10 h-10 rounded-full border border-zinc-200 bg-white items-center justify-center text-zinc-400 opacity-0 group-hover:opacity-100 group-hover:border-zinc-300 group-hover:text-zinc-900 transition-all duration-200 shadow-sm">
<iconify-icon className="ml-0.5" icon="solar:play-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</article>

<article className="group relative flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 py-6 border-b border-zinc-200/50 last:border-0 hover:bg-zinc-100/50 -mx-6 px-6 transition-colors rounded-2xl">
<div className="text-xs font-medium text-zinc-400 shrink-0 md:w-32 pt-1">Oct 12, 2023</div>
<div className="flex-1 pr-8">
<h4 className="text-base font-medium text-zinc-900 mb-2">Shadow Docket Explained</h4>
<p className="text-sm text-zinc-500 leading-relaxed line-clamp-2">A deep dive into emergency orders, how the court uses them, and why they have become so controversial in recent terms.</p>
</div>
<button className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex shrink-0 w-10 h-10 rounded-full border border-zinc-200 bg-white items-center justify-center text-zinc-400 opacity-0 group-hover:opacity-100 group-hover:border-zinc-300 group-hover:text-zinc-900 transition-all duration-200 shadow-sm">
<iconify-icon className="ml-0.5" icon="solar:play-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</article>

<article className="group relative flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 py-6 border-b border-zinc-200/50 last:border-0 hover:bg-zinc-100/50 -mx-6 px-6 transition-colors rounded-2xl">
<div className="text-xs font-medium text-zinc-400 shrink-0 md:w-32 pt-1">Oct 5, 2023</div>
<div className="flex-1 pr-8">
<h4 className="text-base font-medium text-zinc-900 mb-2">Previewing the October Term</h4>
<p className="text-sm text-zinc-500 leading-relaxed line-clamp-2">What to expect from the new term, key cases on the docket, and potential shifts in jurisprudential philosophy among the justices.</p>
</div>
<button className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex shrink-0 w-10 h-10 rounded-full border border-zinc-200 bg-white items-center justify-center text-zinc-400 opacity-0 group-hover:opacity-100 group-hover:border-zinc-300 group-hover:text-zinc-900 transition-all duration-200 shadow-sm">
<iconify-icon className="ml-0.5" icon="solar:play-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</article>

<article className="group relative flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 py-6 border-b border-zinc-200/50 last:border-0 hover:bg-zinc-100/50 -mx-6 px-6 transition-colors rounded-2xl">
<div className="text-xs font-medium text-zinc-400 shrink-0 md:w-32 pt-1">Sep 28, 2023</div>
<div className="flex-1 pr-8">
<h4 className="text-base font-medium text-zinc-900 mb-2">State Legislatures and Election Law</h4>
<p className="text-sm text-zinc-500 leading-relaxed line-clamp-2">Revisiting Moore v. Harper and the Independent State Legislature Theory. How the rejection of this theory impacts the 2024 elections and state court oversight.</p>
</div>
<button className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex shrink-0 w-10 h-10 rounded-full border border-zinc-200 bg-white items-center justify-center text-zinc-400 opacity-0 group-hover:opacity-100 group-hover:border-zinc-300 group-hover:text-zinc-900 transition-all duration-200 shadow-sm">
<iconify-icon className="ml-0.5" icon="solar:play-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</article>

<article className="group relative flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 py-6 border-b border-zinc-200/50 last:border-0 hover:bg-zinc-100/50 -mx-6 px-6 transition-colors rounded-2xl">
<div className="text-xs font-medium text-zinc-400 shrink-0 md:w-32 pt-1">Sep 21, 2023</div>
<div className="flex-1 pr-8">
<h4 className="text-base font-medium text-zinc-900 mb-2">Affirmative Action Aftermath</h4>
<p className="text-sm text-zinc-500 leading-relaxed line-clamp-2">Breaking down the practical implications of SFFA v. Harvard. We speak with university admissions counselors about how they are redesigning their criteria.</p>
</div>
<button className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex shrink-0 w-10 h-10 rounded-full border border-zinc-200 bg-white items-center justify-center text-zinc-400 opacity-0 group-hover:opacity-100 group-hover:border-zinc-300 group-hover:text-zinc-900 transition-all duration-200 shadow-sm">
<iconify-icon className="ml-0.5" icon="solar:play-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</article>

<article className="group relative flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 py-6 border-b border-zinc-200/50 last:border-0 hover:bg-zinc-100/50 -mx-6 px-6 transition-colors rounded-2xl">
<div className="text-xs font-medium text-zinc-400 shrink-0 md:w-32 pt-1">Sep 14, 2023</div>
<div className="flex-1 pr-8">
<h4 className="text-base font-medium text-zinc-900 mb-2">First Amendment and Free Speech</h4>
<p className="text-sm text-zinc-500 leading-relaxed line-clamp-2">The intersection of public accommodation laws and free speech as defined by the 303 Creative decision, and its ripple effects across the country.</p>
</div>
<button className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex shrink-0 w-10 h-10 rounded-full border border-zinc-200 bg-white items-center justify-center text-zinc-400 opacity-0 group-hover:opacity-100 group-hover:border-zinc-300 group-hover:text-zinc-900 transition-all duration-200 shadow-sm">
<iconify-icon className="ml-0.5" icon="solar:play-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</article>

<article className="group relative flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 py-6 border-b border-zinc-200/50 last:border-0 hover:bg-zinc-100/50 -mx-6 px-6 transition-colors rounded-2xl">
<div className="text-xs font-medium text-zinc-400 shrink-0 md:w-32 pt-1">Sep 7, 2023</div>
<div className="flex-1 pr-8">
<h4 className="text-base font-medium text-zinc-900 mb-2">The Student Loan Forgiveness Ruling</h4>
<p className="text-sm text-zinc-500 leading-relaxed line-clamp-2">A comprehensive breakdown of Biden v. Nebraska, the Major Questions Doctrine, and how the executive branch limits were tested.</p>
</div>
<button className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex shrink-0 w-10 h-10 rounded-full border border-zinc-200 bg-white items-center justify-center text-zinc-400 opacity-0 group-hover:opacity-100 group-hover:border-zinc-300 group-hover:text-zinc-900 transition-all duration-200 shadow-sm">
<iconify-icon className="ml-0.5" icon="solar:play-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</article>

<article className="group relative flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 py-6 border-b border-zinc-200/50 last:border-0 hover:bg-zinc-100/50 -mx-6 px-6 transition-colors rounded-2xl">
<div className="text-xs font-medium text-zinc-400 shrink-0 md:w-32 pt-1">Aug 31, 2023</div>
<div className="flex-1 pr-8">
<h4 className="text-base font-medium text-zinc-900 mb-2">The History of the Court's Recess</h4>
<p className="text-sm text-zinc-500 leading-relaxed line-clamp-2">Why does the Supreme Court take such a long summer break? We look back at the historical traditions and the practical reasons for the judicial recess.</p>
</div>
<button className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex shrink-0 w-10 h-10 rounded-full border border-zinc-200 bg-white items-center justify-center text-zinc-400 opacity-0 group-hover:opacity-100 group-hover:border-zinc-300 group-hover:text-zinc-900 transition-all duration-200 shadow-sm">
<iconify-icon className="ml-0.5" icon="solar:play-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</article>

<article className="group relative flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 py-6 border-b border-zinc-200/50 last:border-0 hover:bg-zinc-100/50 -mx-6 px-6 transition-colors rounded-2xl">
<div className="text-xs font-medium text-zinc-400 shrink-0 md:w-32 pt-1">Aug 24, 2023</div>
<div className="flex-1 pr-8">
<h4 className="text-base font-medium text-zinc-900 mb-2">Ethics, Disclosures, and the Court</h4>
<p className="text-sm text-zinc-500 leading-relaxed line-clamp-2">Discussing the ongoing debates around judicial ethics reform, financial disclosures, and public trust in the institution's legitimacy.</p>
</div>
<button className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex shrink-0 w-10 h-10 rounded-full border border-zinc-200 bg-white items-center justify-center text-zinc-400 opacity-0 group-hover:opacity-100 group-hover:border-zinc-300 group-hover:text-zinc-900 transition-all duration-200 shadow-sm">
<iconify-icon className="ml-0.5" icon="solar:play-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</article>
</div>
</section>
</main>

<footer className="border-t border-zinc-200/80 bg-[#FAFAFA] mt-auto">
<div className="mx-auto max-w-5xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="font-medium tracking-tighter text-zinc-900">SCOTUS</span>
<span className="text-zinc-300">|</span>
<span className="text-xs text-zinc-500">© 2023 SCOTUS Podcast. All rights reserved.</span>
</div>
<div className="flex items-center gap-6 text-sm text-zinc-500 font-medium">
<a className="hover:text-zinc-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Contact</a>
</div>
</div>
</footer>

    </>
  );
}
