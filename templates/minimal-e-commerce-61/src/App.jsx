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
colors: {
sand: {
50: '#F7F5F2',
100: '#F0ECE6',
200: '#E3DDD4',
300: '#D1C9BB'
},
ink: {
900: '#0B1020',
800: '#141824',
600: '#3B4253'
},
accent: {
500: '#8C7CFF',
400: '#A299FF'
},
slateNeutral: {
400: '#9BA0AA'
}
},
fontFamily: {
sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
serif: ['DM Serif Display', 'serif'],
},
backgroundImage: {
'grain': "radial-gradient(circle at top left, rgba(255,255,255,0.5), transparent 55%), radial-gradient(circle at bottom right, rgba(0,0,0,0.18), transparent 60%)"
}
}
}
}



    lucide.createIcons();

    // Intersection Observer
    document.addEventListener('DOMContentLoaded', () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
            }
          });
        },
        { root: null, rootMargin: '0px', threshold: 0.12 }
      );
      document.querySelectorAll('.reveal-element').forEach(el => observer.observe(el));
    });

    // Navbar shadow handler
    window.addEventListener('scroll', () => {
      const nav = document.getElementById('navbar');
      if (!nav) return;
      if (window.scrollY > 40) {
        nav.classList.add('shadow-sm', 'border-ink-900/5', 'bg-sand-50/95');
      } else {
        nav.classList.remove('shadow-sm', 'border-ink-900/5', 'bg-sand-50/95');
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
      

<div className="border-b border-ink-900/5 bg-sand-50/90 backdrop-blur-sm pt-2 pb-2 pr-6 pl-6">
<div className="max-w-6xl mx-auto flex items-center justify-between text-xs tracking-wide uppercase">
<span className="text-slateNeutral-400">New collection: Horizon Series</span>
<div className="flex items-center gap-4 text-slateNeutral-400">
<span>Worldwide shipping</span>
<span>Support: hello@cloksy.co</span>
</div>
</div>
</div>

<nav className="sticky top-0 z-40 border-b border-transparent bg-sand-50/80 backdrop-blur-md transition-all duration-300 pt-4 pb-4 pr-6 pl-6" id="navbar">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-6">

<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full border border-ink-900/20 flex items-center justify-center relative overflow-hidden">
<div className="w-[0.08rem] h-[60%] bg-ink-900 rounded-full origin-bottom rotate-12"></div>
<div className="absolute inset-0 border border-ink-900/10 rounded-full"></div>
</div>
<span className="font-serif text-xl tracking-tight leading-none">Cloksy</span>
</div>

<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-ink-900/70">
<a className="hover:text-ink-900 transition-colors" href="#collection">Collection</a>
<a className="hover:text-ink-900 transition-colors" href="#philosophy">Philosophy</a>
<a className="hover:text-ink-900 transition-colors" href="#craft">Craft</a>
<a className="hover:text-ink-900 transition-colors" href="#stories">Stories</a>
</div>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-1 text-xs text-ink-900/70 hover:text-ink-900 transition-colors">
<span>Sign in</span>
</button>
<button className="inline-flex items-center gap-2 rounded-full border border-ink-900/80 bg-ink-900 text-sand-50 text-xs font-medium tracking-wide pl-4 pr-4 pt-2 pb-2 hover:bg-accent-500 hover:border-accent-500 transition-all">
<span className="">Shop clocks</span>
<svg className="lucide lucide-arrow-right w-3 h-3 stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</nav>

<header className="pt-16 pb-24 pr-6 pl-6 relative overflow-hidden">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_minmax(0,1fr)] gap-12 items-center">

<div className="reveal-element in-view">
<div className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-sand-100/80 pr-3 pl-1 pt-1 pb-1 mb-5">
<div className="w-5 h-5 rounded-full border border-ink-900/20 flex items-center justify-center">
<div className="w-[0.07rem] h-[55%] bg-ink-900 rounded-full origin-bottom rotate-[22deg]"></div>
</div>
<span className="text-[0.65rem] uppercase tracking-[0.2em] text-slateNeutral-400">Minimal clocks for considered spaces</span>
</div>
<h1 className="md:text-5xl lg:text-6xl leading-tight text-4xl tracking-tight font-serif mb-4">
          Designed to make<br/>
          every second <span className="italic text-accent-500">look good.</span>
</h1>
<p className="text-sm md:text-base text-ink-900/70 leading-relaxed max-w-lg mb-8">
          Cloksy is where functionality meets aesthetics. Explore a curated collection of wall and table clocks designed to complement modern interiors — sleek lines, soothing tones, and timeless craftsmanship that redefine how you experience time.
        </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 text-sand-50 text-xs font-medium tracking-wide pl-6 pr-6 pt-3 pb-3 hover:bg-accent-500 transition-colors">
            Browse collection
            <svg className="lucide lucide-arrow-right w-3 h-3 stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-ink-900/70 hover:text-ink-900 transition-colors">
<span>View Horizon Series</span>
<div className="flex -space-x-1">
<div className="w-5 h-5 rounded-full border border-sand-50 bg-[radial-gradient(circle_at_30%_20%,#F7F5F2, #D1C9BB)]"></div>
<div className="w-5 h-5 rounded-full border border-sand-50 bg-[radial-gradient(circle_at_30%_20%,#F7F5F2,#B1BACB)]"></div>
</div>
</button>
</div>
<div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-ink-900/60">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-sand-100 border border-ink-900/10 flex items-center justify-center">
<svg className="lucide lucide-clock-3 w-3 h-3 stroke-[1.5]" data-lucide="clock-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6h4"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="leading-snug">
<p className="font-medium text-ink-900 text-xs">Silent sweep</p>
<p className="">No ticking — only quiet.</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-sand-100 border border-ink-900/10 flex items-center justify-center">
<svg className="lucide lucide-sparkles w-3 h-3 stroke-[1.5]" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="leading-snug">
<p className="font-medium text-ink-900 text-xs">Refined finishes</p>
<p className="">Brushed metal, soft matte, oak.</p>
</div>
</div>
</div>

<div className="mt-10 grid grid-cols-2 gap-4 max-w-md">
<div className="rounded-2xl overflow-hidden bg-sand-100">
<img alt="Minimal wall clock close-up" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="rounded-2xl overflow-hidden bg-sand-100">
<img alt="Wall clock styled above sideboard" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="reveal-element delay-200 in-view relative">
<div className="relative aspect-[4/5] max-w-sm lg:max-w-none lg:ml-auto rounded-[2rem] bg-ink-900 text-sand-50 overflow-hidden">

<div className="absolute inset-0 bg-grain mix-blend-soft-light opacity-70 pointer-events-none"></div>

<div className="absolute inset-0">
<img alt="Large navy wall clock with walnut frame in a modern living room" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3"/>
<div className="absolute inset-0 bg-ink-900/25"></div>
</div>

<div className="absolute inset-0 flex flex-col justify-between pt-4 pb-4 pr-4 pl-4">

<div className="flex flex-wrap justify-end gap-2">
<div className="rounded-full bg-ink-900/80 border border-sand-50/10 pl-3 pr-3 pt-1 pb-1 flex items-center gap-2 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-accent-500"></span>
<span className="text-[0.65rem] uppercase tracking-[0.2em] text-sand-50/80">Horizon 02 · Grande Wall</span>
</div>
<div className="rounded-full bg-ink-900/70 border border-sand-50/10 pl-3 pr-3 pt-1 pb-1 flex items-center gap-2 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-sand-50"></span>
<span className="text-[0.65rem] uppercase tracking-[0.2em] text-sand-50/80">Horizon 01 · Table</span>
</div>
</div>

<div className="flex flex-col gap-3 items-start max-w-xs">

<div className="rounded-2xl bg-ink-900/85 border border-sand-50/10 backdrop-blur-sm pl-4 pr-4 pt-3 pb-3 w-full">
<div className="flex items-center justify-between gap-4 mb-1">
<div className="flex flex-col">
<span className="text-[0.65rem] uppercase tracking-[0.2em] text-sand-50/60">Grande wall · 36"</span>
<span className="text-sm">Navy dial, walnut rim, Roman indices.</span>
</div>
<span className="text-xs font-medium text-sand-50/85">$320</span>
</div>
<div className="flex items-center justify-between text-[0.65rem] text-sand-50/70 mt-1">
<span className="uppercase tracking-[0.2em]">Living rooms</span>
<span className="uppercase tracking-[0.2em]">Silent sweep</span>
</div>
</div>

<div className="rounded-2xl bg-ink-900/80 border border-sand-50/10 backdrop-blur-sm pl-4 pr-4 pt-3 pb-3 w-[88%]">
<div className="flex items-center justify-between gap-4 mb-1">
<div className="flex flex-col">
<span className="text-[0.65rem] uppercase tracking-[0.2em] text-sand-50/60">Table companion · 9"</span>
<span className="text-sm">Angled stand, ivory face, brass hands.</span>
</div>
<span className="text-xs font-medium text-sand-50/85">$210</span>
</div>
<div className="flex items-center justify-between text-[0.65rem] text-sand-50/70 mt-1">
<span className="uppercase tracking-[0.2em]">Sideboard</span>
<span className="uppercase tracking-[0.2em]">Battery 2 yrs</span>
</div>
</div>

<div className="rounded-2xl bg-ink-900/75 border border-sand-50/10 backdrop-blur-sm pl-4 pr-4 pt-2 pb-2 w-[78%]">
<div className="flex items-center justify-between gap-3">
<div className="flex flex-col">
<span className="text-[0.65rem] uppercase tracking-[0.2em] text-sand-50/60">Compact · 12"</span>
<span className="text-xs text-sand-50/80">Hallway &amp; entry.</span>
</div>
<span className="text-xs font-medium text-sand-50/85">$160</span>
</div>
</div>
</div>

<div className="flex items-center justify-between gap-3">
<div className="flex flex-col text-[0.65rem] text-sand-50/70">
<span className="uppercase tracking-[0.2em]">Real interiors</span>
<span className="text-xs text-sand-50/85">Shot in natural light, styled with walnut &amp; navy finishes.</span>
</div>
<button className="hidden sm:inline-flex items-center justify-center rounded-full bg-sand-50 text-ink-900 text-[0.7rem] font-medium tracking-wide pl-4 pr-4 pt-2 pb-2 hover:bg-accent-400 hover:text-ink-900 transition-colors">
          View all Horizon clocks
        </button>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="pt-10 pb-20 pr-6 pl-6" id="collection">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-12 reveal-element">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-1">A curated rhythm</h2>
<p className="font-serif text-2xl md:text-3xl italic text-accent-500">for every room</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<article className="reveal-element delay-100 bg-sand-100/80 rounded-3xl pt-8 pb-8 pr-7 pl-7 hover:bg-sand-100 transition-colors cursor-pointer group flex flex-col justify-between">
<div className="flex flex-col items-center text-center gap-5">
<div className="w-14 h-14 rounded-full bg-ink-900/90 flex items-center justify-center relative overflow-hidden">
<div className="w-[0.09rem] h-[52%] bg-sand-50 origin-bottom rounded-full rotate-[30deg]"></div>
<div className="absolute inset-2 rounded-full border border-sand-50/15"></div>
</div>
<div className="w-full rounded-2xl overflow-hidden bg-sand-50">
<img alt="Modern wall clock on neutral wall" className="w-full h-32 object-cover" src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h3 className="font-serif text-lg mb-1">Wall clocks</h3>
<p className="text-xs uppercase tracking-[0.22em] text-slateNeutral-400">Statement, quietly</p>
</div>
<p className="text-sm text-ink-900/70 leading-relaxed">
              Large, clean faces designed to anchor living rooms, galleries, and calm workspaces.
            </p>
</div>
<div className="mt-6 flex items-center justify-between">
<span className="text-[0.7rem] uppercase tracking-[0.2em] text-slateNeutral-400">Dia. 30–60cm</span>
<span className="inline-flex items-center gap-2 text-xs text-ink-900/80">
              Explore
              <svg className="lucide lucide-arrow-up-right w-3 h-3 stroke-[1.5] group-hover:translate-x-[0.08rem] group-hover:-translate-y-[0.08rem] transition-transform" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</div>
</article>

<article className="reveal-element delay-200 bg-sand-100/80 rounded-3xl pt-8 pb-8 pr-7 pl-7 hover:bg-sand-100 transition-colors cursor-pointer group flex flex-col justify-between">
<div className="flex flex-col items-center text-center gap-5">
<div className="w-14 h-10 rounded-[9999px] bg-ink-900/90 flex items-center justify-center relative overflow-hidden">
<div className="w-[0.09rem] h-[68%] bg-sand-50 origin-bottom rounded-full rotate-[65deg]"></div>
<div className="absolute inset-1 rounded-full border border-sand-50/12"></div>
</div>
<div className="w-full rounded-2xl overflow-hidden bg-sand-50">
<img alt="Minimal table clock on desk" className="w-full h-32 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div>
<h3 className="font-serif text-lg mb-1">Table clocks</h3>
<p className="text-xs uppercase tracking-[0.22em] text-slateNeutral-400">Designed to sit still</p>
</div>
<p className="text-sm text-ink-900/70 leading-relaxed">
              Compact forms for shelves, bedside tables, and desks where detail matters.
            </p>
</div>
<div className="mt-6 flex items-center justify-between">
<span className="text-[0.7rem] uppercase tracking-[0.2em] text-slateNeutral-400">Weighted bases</span>
<span className="inline-flex items-center gap-2 text-xs text-ink-900/80">
              Explore
              <svg className="lucide lucide-arrow-up-right w-3 h-3 stroke-[1.5] group-hover:translate-x-[0.08rem] group-hover:-translate-y-[0.08rem] transition-transform" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</div>
</article>

<article className="reveal-element delay-300 bg-sand-100/80 rounded-3xl pt-8 pb-8 pr-7 pl-7 hover:bg-sand-100 transition-colors cursor-pointer group flex flex-col justify-between">
<div className="flex flex-col items-center text-center gap-5">
<div className="relative w-14 h-14 rounded-full border border-dashed border-ink-900/25 flex items-center justify-center">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent-400 to-ink-900/90 relative overflow-hidden">
<div className="absolute inset-[22%] rounded-full border border-sand-50/20"></div>
<div className="w-[0.09rem] h-[60%] bg-sand-50 origin-bottom rounded-full rotate-[45deg] mx-auto mt-[22%]"></div>
</div>
</div>
<div className="w-full rounded-2xl overflow-hidden bg-sand-50">
<img alt="Limited edition clock with brass accents" className="w-full h-32 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div>
<h3 className="font-serif text-lg mb-1">Limited editions</h3>
<p className="text-xs uppercase tracking-[0.22em] text-slateNeutral-400">Time, numbered</p>
</div>
<p className="text-sm text-ink-900/70 leading-relaxed">
              Small-batch collaborations with designers &amp; artisans, individually stamped and numbered.
            </p>
</div>
<div className="mt-6 flex items-center justify-between">
<span className="text-[0.7rem] uppercase tracking-[0.2em] text-slateNeutral-400">Run of 150</span>
<span className="inline-flex items-center gap-2 text-xs text-ink-900/80">
              Explore
              <svg className="lucide lucide-arrow-up-right w-3 h-3 stroke-[1.5] group-hover:translate-x-[0.08rem] group-hover:-translate-y-[0.08rem] transition-transform" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</div>
</article>
</div>
<p className="text-center text-sm text-ink-900/60 mt-10 max-w-lg mx-auto reveal-element delay-400">
        Each Cloksy piece is designed to disappear into your space while staying impossible to ignore. Choose from muted palettes, soft silhouettes, and materials that age with grace.
      </p>
</div>
</section>

<section className="pt-20 pb-24 pr-6 pl-6 bg-sand-100/70" id="philosophy">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-12 reveal-element">
<span className="text-xs uppercase tracking-[0.25em] text-slateNeutral-400 mb-2 block">Design philosophy</span>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-1">Time as a quiet object</h2>
<p className="font-serif text-2xl md:text-3xl italic text-accent-500">not a loud reminder</p>
</div>
<div className="flex flex-wrap justify-center gap-10 mb-16 reveal-element delay-100">
<div className="text-center">
<div className="flex items-center justify-center gap-2 font-serif text-2xl text-ink-900">
<svg className="lucide lucide-waves w-4 h-4 stroke-[1.5]" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
<span>0 dB</span>
</div>
<span className="text-xs uppercase tracking-[0.22em] text-slateNeutral-400 mt-1 block">Audible ticking</span>
</div>
<div className="text-center">
<div className="flex items-center justify-center gap-2 font-serif text-2xl text-ink-900">
<svg className="lucide lucide-shield-check w-4 h-4 stroke-[1.5]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span>10 yrs</span>
</div>
<span className="text-xs uppercase tracking-[0.22em] text-slateNeutral-400 mt-1 block">Movement warranty</span>
</div>
<div className="text-center">
<div className="flex items-center justify-center gap-2 font-serif text-2xl text-ink-900">
<svg className="lucide lucide-globe-2 w-4 h-4 stroke-[1.5]" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span>32</span>
</div>
<span className="text-xs uppercase tracking-[0.22em] text-slateNeutral-400 mt-1 block">Countries shipped</span>
</div>
</div>

<div className="max-w-5xl mx-auto relative reveal-element delay-200">
<div className="rounded-[1.75rem] overflow-hidden aspect-[16/9] md:aspect-[21/9] bg-ink-900">
<img alt="Minimal wall clock in modern interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1484591974057-265bb767ef71?q=80&amp;w=1800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-sand-50 rounded-2xl shadow-xl border border-ink-900/5 max-w-md w-[90%] pt-6 pb-6 pr-7 pl-7">
<p className="font-serif text-lg italic leading-relaxed mb-4">
            “We design clocks you notice only when you need them — and love every time you do.”
          </p>
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-ink-900 flex items-center justify-center text-sand-50 text-xs font-medium tracking-[0.22em]">
              C
            </div>
<div className="text-xs leading-snug">
<p className="font-medium text-ink-900">Noah Vermeer</p>
<p className="text-slateNeutral-400 uppercase tracking-[0.2em]">Founder, Cloksy</p>
</div>
</div>
</div>
</div>
<div className="h-16"></div>
</div>
</section>

<section className="pt-20 pb-24 pr-6 pl-6" id="craft">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-14 reveal-element">
<div>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-1">Materials that age</h2>
<p className="font-serif text-2xl md:text-3xl italic text-accent-500">as gracefully as time</p>
</div>
<div className="max-w-sm text-right md:text-right">
<p className="text-sm text-ink-900/70 mb-4">
            Each Cloksy piece is built with carefully sourced materials and long-life movements, so you can set the time once — and trust it.
          </p>
<button className="inline-flex items-center gap-2 rounded-xl bg-sand-100 text-xs font-semibold uppercase tracking-[0.2em] pt-2 pb-2 pr-4 pl-4 text-ink-900/80 hover:bg-sand-200 transition-colors">
            View full specs
            <svg className="lucide lucide-arrow-right w-3 h-3 stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-14">

<div className="reveal-element delay-100 space-y-4">
<div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slateNeutral-400">
<svg className="lucide lucide-circle-dashed w-3 h-3 stroke-[1.5]" data-lucide="circle-dashed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.1 2.182a10 10 0 0 1 3.8 0"></path><path d="M13.9 21.818a10 10 0 0 1-3.8 0"></path><path d="M17.609 3.721a10 10 0 0 1 2.69 2.7"></path><path d="M2.182 13.9a10 10 0 0 1 0-3.8"></path><path d="M20.279 17.609a10 10 0 0 1-2.7 2.69"></path><path d="M21.818 10.1a10 10 0 0 1 0 3.8"></path><path d="M3.721 6.391a10 10 0 0 1 2.7-2.69"></path><path d="M6.391 20.279a10 10 0 0 1-2.69-2.7"></path></svg>
<span>Core construction</span>
</div>
<ul className="space-y-4">
<li className="flex items-baseline justify-between border-b border-ink-900/10 pb-2">
<div>
<p className="font-serif text-base">Solid oak &amp; ash</p>
<p className="text-sm text-ink-900/60 mt-1">Sustainably sourced timbers with a matte oil finish for a soft touch.</p>
</div>
<span className="text-xs uppercase tracking-[0.2em] text-slateNeutral-400 ml-4 whitespace-nowrap">FSC-certified</span>
</li>
<li className="flex items-baseline justify-between border-b border-ink-900/10 pb-2">
<div>
<p className="font-serif text-base">Mineral &amp; opal glass</p>
<p className="text-sm text-ink-900/60 mt-1">Low-reflection, subtly domed glass that diffuses light.</p>
</div>
<span className="text-xs uppercase tracking-[0.2em] text-slateNeutral-400 ml-4 whitespace-nowrap">Scratch resistant</span>
</li>
<li className="flex items-baseline justify-between border-b border-ink-900/10 pb-2">
<div>
<p className="font-serif text-base">Steel &amp; aluminum</p>
<p className="text-sm text-ink-900/60 mt-1">Brushed anodized finishes that resist fingerprints and patina gently.</p>
</div>
<span className="text-xs uppercase tracking-[0.2em] text-slateNeutral-400 ml-4 whitespace-nowrap">Lead-free</span>
</li>
</ul>

<div className="mt-4 rounded-2xl overflow-hidden bg-sand-100">
<img alt="Close-up of clock with wooden frame" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="reveal-element delay-200 space-y-4">
<div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slateNeutral-400">
<svg className="lucide lucide-cpu w-3 h-3 stroke-[1.5]" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span>Movement &amp; details</span>
</div>
<ul className="space-y-4">
<li className="flex items-baseline justify-between border-b border-ink-900/10 pb-2">
<div>
<p className="font-serif text-base">Silent sweep movement</p>
<p className="text-sm text-ink-900/60 mt-1">Japanese quartz mechanisms tuned for accuracy and absolute quiet.</p>
</div>
<span className="text-xs uppercase tracking-[0.2em] text-slateNeutral-400 ml-4 whitespace-nowrap">10-year warranty</span>
</li>
<li className="flex items-baseline justify-between border-b border-ink-900/10 pb-2">
<div>
<p className="font-serif text-base">Balanced hands</p>
<p className="text-sm text-ink-900/60 mt-1">Featherlight arms engineered to glide without flutter.</p>
</div>
<span className="text-xs uppercase tracking-[0.2em] text-slateNeutral-400 ml-4 whitespace-nowrap">Hand-assembled</span>
</li>
<li className="flex items-baseline justify-between border-b border-ink-900/10 pb-2">
<div>
<p className="font-serif text-base">Easy mounting</p>
<p className="text-sm text-ink-900/60 mt-1">Flush backplates, hidden hardware, and weighted bases for stability.</p>
</div>
<span className="text-xs uppercase tracking-[0.2em] text-slateNeutral-400 ml-4 whitespace-nowrap">Tool-free</span>
</li>
</ul>

<div className="mt-4 rounded-2xl overflow-hidden bg-sand-100">
<img alt="Detail of clock hands and dial" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1529753253655-470be9a42781?q=80&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="pt-20 pb-24 pr-6 pl-6 bg-sand-100/70" id="stories">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-14 reveal-element">
<div className="flex justify-center gap-3 mb-4 text-accent-500">
<svg className="lucide lucide-message-circle w-6 h-6 stroke-[1.5]" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<svg className="lucide lucide-home w-6 h-6 stroke-[1.5] -mt-1" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<svg className="lucide lucide-sparkles w-6 h-6 stroke-[1.5] rotate-6" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight">
          How Cloksy lives in
          <span className="italic text-accent-500 block md:inline">real spaces</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="flex flex-col gap-6 reveal-element delay-100">
<div className="bg-sand-50 rounded-3xl pt-7 pb-7 pr-8 pl-8">
<svg className="lucide lucide-quote w-6 h-6 stroke-[1.5] text-accent-500/30 mb-3 rotate-180" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-lg mb-3">
              “Our living room finally feels finished. The clock doesn’t shout for attention — it just quietly holds the room together.”
            </p>
<p className="text-xs uppercase tracking-[0.2em] text-slateNeutral-400">Mira &amp; Jonas, Copenhagen</p>
</div>
<div className="h-60 rounded-3xl overflow-hidden">
<img alt="Minimal living room with wall clock" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="flex flex-col gap-6 reveal-element delay-200">
<div className="bg-sand-50 rounded-3xl pt-7 pb-7 pr-8 pl-8">
<svg className="lucide lucide-quote w-6 h-6 stroke-[1.5] text-accent-500/30 mb-3 rotate-180" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-lg mb-3">
              “I needed a clock for my studio that wouldn’t break the flow. Cloksy feels more like a design object than a tool.”
            </p>
<p className="text-xs uppercase tracking-[0.2em] text-slateNeutral-400">Hailey, Interior designer</p>
</div>
<div className="h-60 rounded-3xl overflow-hidden">
<img alt="Work space with minimal desk clock" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
<div className="text-center mt-10 reveal-element delay-300">
<button className="inline-flex items-center gap-2 rounded-xl bg-sand-50 text-xs font-semibold uppercase tracking-[0.2em] pl-5 pr-5 pt-2 pb-2 text-ink-900/80 hover:bg-sand-200 transition-colors">
          View more homes
        </button>
</div>
</div>
</section>

<section className="relative pt-20 pb-24 pr-6 pl-6">
<div className="max-w-6xl mx-auto relative overflow-hidden rounded-[2rem] bg-ink-900 text-sand-50 group">
<div className="absolute inset-0 pointer-events-none opacity-70 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(140,124,255,0.4),transparent_55%)]"></div>
<div className="relative pt-14 pb-12 pr-7 pl-7 md:pt-14 md:pb-14 md:pr-16 md:pl-16 grid grid-cols-1 md:grid-cols-[1fr_minmax(0,0.95fr)] gap-12 items-center">
<div className="reveal-element">
<span className="text-[0.7rem] uppercase tracking-[0.3em] text-sand-50/70 mb-4 block">Horizon Series</span>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-3">
            A new way to see the
            <span className="italic">passing hours</span>
</h2>
<p className="text-sm md:text-base text-sand-50/85 max-w-md mb-7">
            Softly curved profiles, diffused numerals, and a floating dial that casts a halo on your wall. Available in wall and table formats with coordinated finishes.
          </p>
<div className="flex flex-wrap items-center gap-5">
<button className="inline-flex items-center justify-center rounded-full bg-sand-50 text-ink-900 text-xs font-medium tracking-wide pl-6 pr-6 pt-3 pb-3 hover:bg-accent-400 hover:text-ink-900 transition-colors">
              Pre-order Horizon 02
            </button>
<div className="flex flex-col text-xs text-sand-50/80">
<span>Shipping starts in</span>
<span className="font-serif text-lg">Late January</span>
</div>
</div>
</div>
<div className="reveal-element delay-150">
<div className="relative aspect-[4/3] md:aspect-[4/3] rounded-[1.6rem] bg-sand-50/5 border border-sand-50/15 overflow-hidden">

<div className="absolute inset-0 flex items-center justify-around">

<div className="relative w-[42%] aspect-square rounded-full bg-sand-50/95 shadow-lg shadow-ink-900/50 flex items-center justify-center">
<div className="absolute inset-[14%] rounded-full border border-ink-900/10"></div>
<div className="absolute inset-[30%] rounded-full border border-ink-900/6"></div>
<div className="w-1 h-1 rounded-full bg-ink-900"></div>
<div className="absolute w-[0.09rem] h-[38%] bg-ink-900 origin-bottom rounded-full rotate-[55deg]"></div>
<div className="absolute w-[0.06rem] h-[28%] bg-ink-900/80 origin-bottom rounded-full -rotate-[80deg]"></div>
<div className="absolute w-[0.04rem] h-[44%] bg-accent-500 origin-bottom rounded-full rotate-[130deg] opacity-80"></div>
</div>

<div className="relative w-[34%] aspect-[4/5] rounded-[1.8rem] bg-sand-100 shadow-lg shadow-ink-900/40 flex flex-col items-center justify-center">
<div className="w-[74%] aspect-square rounded-full bg-sand-50 flex items-center justify-center border border-ink-900/10 relative overflow-hidden">
<div className="absolute inset-[18%] rounded-full border border-ink-900/8"></div>
<div className="w-1 h-1 rounded-full bg-ink-900"></div>
<div className="absolute w-[0.08rem] h-[38%] bg-ink-900 origin-bottom rounded-full rotate-[40deg]"></div>
<div className="absolute w-[0.05rem] h-[30%] bg-ink-900/80 origin-bottom rounded-full -rotate-[75deg]"></div>
</div>
<div className="mt-3 text-[0.7rem] uppercase tracking-[0.22em] text-ink-900/55">
                  Table 01 · Cloud
                </div>
</div>
</div>

<div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-[0.7rem] text-sand-50/80">
<span className="uppercase tracking-[0.2em] flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-accent-500"></span>
                Horizon 02 · Wall
              </span>
<span className="uppercase tracking-[0.2em] text-sand-50/60">3 finishes · limited</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-10 pb-24 pr-6 pl-6" id="contact">
<div className="max-w-6xl mx-auto">
<div className="max-w-xl mx-auto text-center mb-12 reveal-element">
<div className="flex justify-center gap-5 mb-4 text-accent-500/80">
<svg className="lucide lucide-mail w-6 h-6 stroke-[1.5] -rotate-6" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<svg className="lucide lucide-clock w-7 h-7 stroke-[1.5]" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<svg className="lucide lucide-sparkles w-6 h-6 stroke-[1.5] rotate-6" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-1">Stay in sync with</h2>
<p className="font-serif text-2xl md:text-3xl italic text-accent-500">limited drops &amp; editions</p>
</div>
<div className="max-w-xl mx-auto bg-sand-100/80 rounded-3xl pt-8 pb-8 pr-8 pl-8 reveal-element delay-100">
<h3 className="font-serif text-lg mb-4">Join the Cloksy list</h3>
<p className="text-sm text-ink-900/70 mb-6">
          Be first to know about new releases, restocks, and studio stories — no noisy inboxes, just considered updates.
        </p>
<form className="space-y-4">
<div>
<label className="block text-xs uppercase tracking-[0.2em] text-slateNeutral-400 mb-1">Email</label>
<input className="w-full bg-sand-50 border border-transparent focus:border-accent-500 focus:ring-0 rounded-xl pt-3 pb-3 pr-4 pl-4 text-sm text-ink-900/80 outline-none transition-all" placeholder="you@studio.com" type="email"/>
</div>
<div>
<label className="block text-xs uppercase tracking-[0.2em] text-slateNeutral-400 mb-1">What are you designing?</label>
<input className="w-full bg-sand-50 border border-transparent focus:border-accent-500 focus:ring-0 rounded-xl pt-3 pb-3 pr-4 pl-4 text-sm text-ink-900/80 outline-none transition-all" placeholder="Home, studio, retail space…" type="text"/>
</div>
<button className="w-full inline-flex items-center justify-center rounded-full bg-ink-900 text-sand-50 text-xs font-medium tracking-[0.16em] uppercase pt-3 pb-3 hover:bg-accent-500 transition-colors" type="button">
            Notify me
          </button>
</form>
<p className="mt-4 text-xs text-ink-900/60">
          We send a few emails a season. No sharing, no spam — just time well spent.
        </p>
</div>

<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
<div className="bg-sand-100/70 rounded-2xl pt-4 pb-4 pr-4 pl-4 flex items-center justify-between reveal-element delay-100 border border-ink-900/5">
<div>
<h4 className="font-serif text-base">Trade &amp; projects</h4>
<p className="text-[0.7rem] uppercase tracking-[0.2em] text-slateNeutral-400 mt-1">Specs &amp; sourcing</p>
</div>
<svg className="lucide lucide-briefcase w-4 h-4 stroke-[1.5] text-ink-900/35" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<div className="bg-sand-100/70 rounded-2xl pt-4 pb-4 pr-4 pl-4 flex items-center justify-between reveal-element delay-200 border border-ink-900/5">
<div>
<h4 className="font-serif text-base">Support</h4>
<p className="text-[0.7rem] uppercase tracking-[0.2em] text-slateNeutral-400 mt-1">Order &amp; warranty</p>
</div>
<svg className="lucide lucide-life-buoy w-4 h-4 stroke-[1.5] text-ink-900/35" data-lucide="life-buoy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path><circle cx="12" cy="12" r="4"></circle></svg>
</div>
<div className="bg-sand-100/70 rounded-2xl pt-4 pb-4 pr-4 pl-4 flex items-center justify-between reveal-element delay-300 border border-ink-900/5">
<div>
<h4 className="font-serif text-base">Showroom</h4>
<p className="text-[0.7rem] uppercase tracking-[0.2em] text-slateNeutral-400 mt-1">By appointment</p>
</div>
<svg className="lucide lucide-map-pin w-4 h-4 stroke-[1.5] text-ink-900/35" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
</div>
</div>
</section>

<footer className="bg-ink-900 text-sand-50 pt-14 pb-10 pr-6 pl-6">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="md:col-span-2">
<div className="flex items-center gap-2 mb-5">
<div className="w-7 h-7 rounded-full border border-sand-50/20 flex items-center justify-center relative overflow-hidden">
<div className="w-[0.08rem] h-[58%] bg-sand-50 rounded-full origin-bottom rotate-[18deg]"></div>
<div className="absolute inset-0 border border-sand-50/10 rounded-full"></div>
</div>
<span className="font-serif text-xl tracking-tight leading-none">Cloksy</span>
</div>
<p className="text-xs text-sand-50/70 max-w-xs leading-relaxed mb-5">
            Minimal clocks, crafted to sit quietly in the background — until you need a beautiful way to check the time.
          </p>
<div className="text-xs text-sand-50/60 space-y-1">
<p>Studio visits: Berlin &amp; Amsterdam</p>
<p>Questions: hello@cloksy.co</p>
</div>
</div>
<div>
<h4 className="text-sm font-medium mb-4">Explore</h4>
<ul className="space-y-2 text-sm text-sand-50/70">
<li><a className="hover:text-sand-50 transition-colors" href="#collection">Collection</a></li>
<li><a className="hover:text-sand-50 transition-colors" href="#philosophy">Philosophy</a></li>
<li><a className="hover:text-sand-50 transition-colors" href="#craft">Craft</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium mb-4">Connect</h4>
<ul className="space-y-2 text-sm text-sand-50/70">
<li><a className="hover:text-sand-50 transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-sand-50 transition-colors" href="#">Pinterest</a></li>
<li><a className="hover:text-sand-50 transition-colors" href="#">Journal</a></li>
</ul>
</div>
</div>
<div className="border-t border-sand-50/10 mt-10 pt-5 flex flex-col md:flex-row items-center justify-between gap-4 text-[0.7rem] text-sand-50/50">
<p>© 2024 Cloksy. All rights reserved.</p>
<p>Designed for interiors where every detail counts.</p>
</div>
</div>
</footer>


    </>
  );
}
