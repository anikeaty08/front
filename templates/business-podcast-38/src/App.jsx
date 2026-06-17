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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'ui-sans-serif', 'system-ui'],
display: ['Bebas Neue', 'Inter', 'ui-sans-serif', 'system-ui']
}
}
}
}



      // Icons
      lucide.createIcons();

      // Mobile nav toggle
      const menuBtn = document.getElementById('menuBtn');
      const mobileNav = document.getElementById('mobileNav');
      if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => {
          mobileNav.classList.toggle('hidden');
        });
      }
    
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
      

<header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="inline-flex items-center gap-2" href="#">
<span className="inline-flex items-center gap-1">
<span className="font-display text-2xl leading-none tracking-tight text-white">BURN RATE</span>
<span className="font-display text-2xl leading-none tracking-tight text-orange-500">+</span>
<span className="font-display text-2xl leading-none tracking-tight text-orange-500">BULL$HIT</span>
</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-white/80 hover:text-white transition" href="#home">Home</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition" href="#about">About</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition" href="#subscribe">Subscribe</a>
</nav>

<button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-orange-500" id="menuBtn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-white/10" id="mobileNav">
<nav className="px-4 py-3 space-y-2">
<a className="block px-3 py-2 rounded-md text-sm font-medium text-white/80 hover:text-white hover:bg-white/10" href="#home">Home</a>
<a className="block px-3 py-2 rounded-md text-sm font-medium text-white/80 hover:text-white hover:bg-white/10" href="#about">About</a>
<a className="block px-3 py-2 rounded-md text-sm font-medium text-white/80 hover:text-white hover:bg-white/10" href="#subscribe">Subscribe</a>
</nav>
</div>
</header>
<main id="home">

<section className="relative overflow-hidden">
<div className="absolute inset-0 -z-10 opacity-90" style={{backgroundImage: 'radial-gradient(1200px 600px at 70% 0%, rgba(255,115,57,0.18), rgba(0,0,0,0)), radial-gradient(900px 500px at 0% 100%, rgba(255,115,57,0.12), rgba(0,0,0,0))'}}></div>
<div className="absolute inset-0 -z-10 opacity-[0.08]" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1549632891-a0bea6d35b47?q=80&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end pt-10 md:pt-16">

<div className="order-2 lg:order-1">
<div className="aspect-[4/5] rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Portrait" className="h-full w-full object-cover grayscale contrast-125" src="https://images.unsplash.com/photo-1590086782792-42dd2350140d?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="order-1 lg:order-2 text-center lg:pb-8">
<h1 className="font-display text-[14vw] leading-[0.8] md:text-[8rem] lg:text-[9rem] tracking-tight">
<span className="block text-white">BURN RATE</span>
<span className="block text-orange-500">+ BULL$HIT</span>
</h1>
<p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl mx-auto">Unfiltered insights into business &amp; finance.</p>
<div className="mt-6 flex flex-wrap justify-center gap-3">
<span className="px-4 py-2 rounded-md border border-orange-500/40 text-orange-400 text-sm font-semibold/6 bg-orange-500/10">Startups</span>
<span className="px-4 py-2 rounded-md border border-orange-500/40 text-orange-400 text-sm font-semibold/6 bg-orange-500/10">Capital</span>
<span className="px-4 py-2 rounded-md border border-orange-500/40 text-orange-400 text-sm font-semibold/6 bg-orange-500/10">Real Talk</span>
</div>
<div className="mt-6 flex flex-wrap justify-center gap-4">
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-orange-600 text-white text-sm font-semibold shadow-sm hover:bg-orange-500 transition" href="#episodes">
<i className="w-4 h-4" data-lucide="play"></i>
                  Listen Now
                </a>
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-orange-500/50 text-orange-400 text-sm font-semibold hover:bg-orange-500/10 transition" href="#subscribe">
<i className="w-4 h-4" data-lucide="rss"></i>
                  Subscribe
                </a>
</div>
</div>

<div className="order-3">
<div className="aspect-[4/5] rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Portrait" className="h-full w-full object-cover grayscale contrast-125" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white text-black" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
<div className="text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">NO BS. JUST BUSINESS.</h2>
<p className="mt-4 text-base md:text-lg text-black/70 max-w-3xl mx-auto">
              Cut through the noise with raw, unfiltered discussions about what really drives business success.
              We tackle the hard truths about burn rates, market realities, and the bull$hit that holds companies back.
            </p>
</div>
<div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
<div className="text-center px-4">
<div className="mx-auto h-11 w-11 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
<i className="w-6 h-6" data-lucide="trending-up"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Market Insights</h3>
<p className="mt-2 text-sm text-black/70">Real analysis of market trends and startup realities.</p>
</div>
<div className="text-center px-4">
<div className="mx-auto h-11 w-11 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
<i className="w-6 h-6" data-lucide="dollar-sign"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Financial Truth</h3>
<p className="mt-2 text-sm text-black/70">Honest discussions about funding, burn rates, and survival.</p>
</div>
<div className="text-center px-4">
<div className="mx-auto h-11 w-11 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
<i className="w-6 h-6" data-lucide="bar-chart-3"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Growth Strategies</h3>
<p className="mt-2 text-sm text-black/70">Proven tactics that actually work in the real world.</p>
</div>
</div>
</div>
</section>

<section className="bg-black" id="episodes">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
<div className="text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Latest Episodes</h2>
</div>
<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

<article className="rounded-xl border border-orange-500/40 bg-zinc-900/60 p-4 hover:border-orange-500 transition">
<div className="rounded-lg overflow-hidden ring-1 ring-white/10">
<img alt="Episode cover" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold bg-orange-500/15 text-orange-400 ring-1 ring-orange-500/30">EP 047</span>
<h3 className="mt-3 text-xl font-semibold tracking-tight">The Unicorn Delusion</h3>
<p className="mt-2 text-sm text-white/70">Why chasing unicorn status is killing your startup. We break down the real numbers behind “billion-dollar” valuations.</p>
<div className="mt-4 flex items-center gap-3">
<a className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300" href="#">
<i className="w-4 h-4" data-lucide="play-circle"></i> Play
                  </a>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white" href="#">
<i className="w-4 h-4" data-lucide="share-2"></i> Share
                  </a>
</div>
</div>
</article>

<article className="rounded-xl border border-orange-500/40 bg-zinc-900/60 p-4 hover:border-orange-500 transition">
<div className="rounded-lg overflow-hidden ring-1 ring-white/10">
<img alt="Episode cover" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold bg-orange-500/15 text-orange-400 ring-1 ring-orange-500/30">EP 046</span>
<h3 className="mt-3 text-xl font-semibold tracking-tight">Venture Capital Vultures</h3>
<p className="mt-2 text-sm text-white/70">The dark side of funding that nobody talks about. How to spot predatory terms and protect your equity.</p>
<div className="mt-4 flex items-center gap-3">
<a className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300" href="#">
<i className="w-4 h-4" data-lucide="play-circle"></i> Play
                  </a>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white" href="#">
<i className="w-4 h-4" data-lucide="share-2"></i> Share
                  </a>
</div>
</div>
</article>

<article className="rounded-xl border border-orange-500/40 bg-zinc-900/60 p-4 hover:border-orange-500 transition">
<div className="rounded-lg overflow-hidden ring-1 ring-white/10">
<img alt="Episode cover" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1529336953121-a98b8b1a7a8a?q=80&amp;w=2067&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold bg-orange-500/15 text-orange-400 ring-1 ring-orange-500/30">EP 045</span>
<h3 className="mt-3 text-xl font-semibold tracking-tight">Growth Hacking Is Dead</h3>
<p className="mt-2 text-sm text-white/70">Stop falling for myths. We reveal what actually drives sustainable growth in 2025.</p>
<div className="mt-4 flex items-center gap-3">
<a className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300" href="#">
<i className="w-4 h-4" data-lucide="play-circle"></i> Play
                  </a>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white" href="#">
<i className="w-4 h-4" data-lucide="share-2"></i> Share
                  </a>
</div>
</div>
</article>
</div>
<div className="mt-10 flex justify-center">
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-orange-500/50 text-orange-400 text-sm font-semibold hover:bg-orange-500/10 transition" href="#">
<i className="w-4 h-4" data-lucide="list-video"></i>
              View All Episodes
            </a>
</div>
</div>
</section>

<section className="bg-white text-black" id="subscribe">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
<div className="text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Subscribe &amp; Stay Unfiltered</h2>
<p className="mt-4 text-base md:text-lg text-black/70 max-w-3xl mx-auto">
              Get notified when new episodes drop. No spam — just raw business insights delivered straight to your feed.
            </p>
</div>
<div className="mt-10 flex flex-wrap items-center justify-center gap-4">
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-orange-600 text-white text-sm font-semibold shadow-sm hover:bg-orange-500 transition" href="#">
<i className="w-4 h-4" data-lucide="radio"></i>
              Spotify Podcasts
            </a>
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-orange-600 text-white text-sm font-semibold shadow-sm hover:bg-orange-500 transition" href="#">
<i className="w-4 h-4" data-lucide="apple"></i>
              Apple Podcasts
            </a>
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-orange-600 text-white text-sm font-semibold shadow-sm hover:bg-orange-500 transition" href="#">
<i className="w-4 h-4" data-lucide="rss"></i>
              Google Podcasts
            </a>
</div>
</div>
</section>
</main>

<footer className="bg-black">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="flex flex-col items-center text-center">
<div className="font-display text-5xl md:text-6xl tracking-tight">
<span className="text-orange-500">BURN RATE</span>
<span className="text-orange-500 block">+ BULL$HIT</span>
</div>
<div className="mt-6 flex items-center gap-5 text-white/80">
<a aria-label="Instagram" className="hover:text-white" href="#">
<i className="w-6 h-6" data-lucide="instagram"></i>
</a>
<a aria-label="LinkedIn" className="hover:text-white" href="#">
<i className="w-6 h-6" data-lucide="linkedin"></i>
</a>
<a aria-label="Twitter" className="hover:text-white" href="#">
<i className="w-6 h-6" data-lucide="twitter"></i>
</a>
<a aria-label="YouTube" className="hover:text-white" href="#">
<i className="w-6 h-6" data-lucide="youtube"></i>
</a>
</div>
<p className="mt-6 text-sm text-white/60">Unfiltered business insights for the bold and the brave.</p>
<p className="mt-2 text-xs text-white/40">© 2025 Burnrate + Bull$hit. All rights reserved.</p>
</div>
</div>
</footer>




    </>
  );
}
