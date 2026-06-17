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
      

<div className="fixed inset-0 -z-10">

<div className="absolute inset-0 opacity-[0.18]" style={{backgroundImage: 'radial-gradient(1px 1px at 20px 20px, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<div className="absolute inset-0" style={{background: 'radial-gradient(1200px 600px at 50% -10%, rgba(99,102,241,0.18), transparent 55%), radial-gradient(800px 500px at 90% 10%, rgba(168,85,247,0.14), transparent 50%), radial-gradient(700px 500px at 10% 20%, rgba(56,189,248,0.12), transparent 50%)'}}></div>

<div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-indigo-500/10 blur-3xl rounded-full"></div>
</div>

<header className="sticky top-0 z-50">
<div className="mx-auto max-w-7xl px-4 max-[375px]:px-3">
<div className="mt-4 max-[375px]:mt-2 rounded-xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl">
<div className="flex items-center justify-between px-4 py-3">

<a className="inline-flex items-center gap-2 group" href="#">
<div className="h-8 w-8 grid place-items-center rounded-md bg-gradient-to-b from-zinc-800 to-zinc-900 border border-white/10 shadow-inner">
<span className="text-[13px] font-semibold tracking-tight">GF</span>
</div>
<span className="text-zinc-100 font-semibold tracking-tight">Ghost Frequency</span>
</a>

<nav className="hidden md:flex items-center gap-7 text-sm">
<a className="text-zinc-300 hover:text-white transition-colors" href="#">Home</a>
<a className="text-zinc-300 hover:text-white transition-colors" href="#">Articles</a>
<a className="text-zinc-300 hover:text-white transition-colors" href="#">Tags</a>
<a className="text-zinc-300 hover:text-white transition-colors" href="#">About</a>
</nav>

<div className="flex items-center gap-2">
<button className="hidden sm:flex items-center gap-2 rounded-lg border border-white/10 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-300 hover:text-white hover:border-white/20 transition-colors">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="">Search</span>
</button>
<a className="inline-flex items-center gap-2 rounded-lg bg-indigo-500/20 text-indigo-200 px-3 py-2 text-sm border border-indigo-400/20 hover:bg-indigo-500/30 hover:border-indigo-400/30 transition-colors max-[375px]:px-2 max-[375px]:py-1.5 max-[375px]:text-xs" href="#">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="font-medium">Subscribe</span>
</a>
<button aria-controls="gf-mobile-menu" aria-expanded="false" aria-label="Open menu" className="md:hidden inline-flex hover:border-white/20 hover:bg-white/5 transition-colors w-9 h-9 border-white/10 border rounded-lg items-center justify-center" data-element-id="aura-emgduwwghpo552gy" data-element-locator="html &gt; body:nth-of-type(1) &gt; header:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; button:nth-of-type(2)" data-state="closed" onclick="(function(){try{const btn=this,doc=document;const setIcon=(name)=&gt;{btn.innerHTML=name==='x'?`&lt;svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' data-lucide='x' className='lucide lucide-x w-[20px] h-[20px]' style={{width: '20px', height: '20px', color: 'rgb(228,228,231)'}}&gt;&lt;path d='M18 6 6 18'&gt;&lt;/path&gt;&lt;path d='M6 6l12 12'&gt;&lt;/path&gt;&lt;/svg&gt;`:`&lt;svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' data-lucide='menu' className='lucide lucide-menu w-[20px] h-[20px]' style={{width: '20px', height: '20px', color: 'rgb(228,228,231)'}}&gt;&lt;path d='M4 5h16'&gt;&lt;/path&gt;&lt;path d='M4 12h'&gt;&lt;/path&gt;&lt;path d='M4 19h16'&gt;&lt;/path&gt;&lt;/svg&gt;`};const close=()=&gt;{const ov=doc.getElementById('gf-mobile-menu');if(ov)ov.remove();btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-label','Open menu');btn.dataset.state='closed';setIcon('menu');if(btn._gf_keydown){doc.removeEventListener('keydown',btn._gf_keydown);btn._gf_keydown=null;}};const isOpen=btn.getAttribute('aria-expanded')==='true';if(isOpen){close();return;}let overlay=doc.getElementById('gf-mobile-menu');if(!overlay){overlay=doc.createElement('div');overlay.id='gf-mobile-menu';overlay.className='fixed inset-0 z-50 bg-zinc-950/60 backdrop-blur-xl';overlay.innerHTML=`&lt;div className='absolute top-0 left-0 right-0 px-4 pt-3 max-[375px]:px-3'&gt;&lt;div className='rounded-xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl p-4 max-[375px]:p-3'&gt;&lt;nav className='flex flex-col gap-1 text-base max-[375px]:text-sm'&gt;&lt;a href='#' className='px-3 py-2 max-[375px]:px-2.5 max-[375px]:py-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 transition-colors'&gt;Home&lt;/a&gt;&lt;a href='#' className='px-3 py-2 max-[375px]:px-2.5 max-[375px]:py-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 transition-colors'&gt;Articles&lt;/a&gt;&lt;a href='#' className='px-3 py-2 max-[375px]:px-2.5 max-[375px]:py-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 transition-colors'&gt;Tags&lt;/a&gt;&lt;a href='#' className='px-3 py-2 max-[375px]:px-2.5 max-[375px]:py-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 transition-colors'&gt;About&lt;/a&gt;&lt;/nav&gt;&lt;div className='mt-3 grid grid-cols-2 gap-2'&gt;&lt;button type='button' className='inline-flex items-center gap-2 rounded-lg border border-white/10 bg-zinc-900/50 px-3 py-2 text-sm max-[375px]:px-2.5 max-[375px]:py-1.5 max-[375px]:text-xs text-zinc-300 hover:text-white hover:border-white/20 transition-colors'&gt;&lt;svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' data-lucide='search' className='lucide lucide-search w-4 h-4'&gt;&lt;path d='m21 21-4.34-4.34'&gt;&lt;/path&gt;&lt;circle cx='11' cy='11' r='8'&gt;&lt;/circle&gt;&lt;/svg&gt;Search&lt;/button&gt;&lt;a href='#' className='inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-500/20 text-indigo-200 px-3 py-2 text-sm max-[375px]:px-2.5 max-[375px]:py-1.5 max-[375px]:text-xs border border-indigo-400/20 hover:bg-indigo-500/30 hover:border-indigo-400/30 transition-colors'&gt;&lt;svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='.5' strokeLinecap='round' strokeLinejoin='round' data-lucide='mail' className='lucide lucide-mail w-4 h-4'&gt;&lt;path d='m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7'&gt;&lt;/path&gt;&lt;rect x='2' y='4' width='20' height='16' rx='2'&gt;&lt;/rect&gt;&lt;/svg&gt;Subscribe&lt;/a&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;`;overlay.addEventListener('click',e=&gt;{if(e.target===overlay)close();});doc.body.appendChild(overlay);if(window.lucide&amp;&amp;lucide.createIcons){lucide.createIcons({attrs:{'stroke-width':1.5}});} }btn.setAttribute('aria-expanded','true');btn.setAttribute('aria-label','Close menu');btn.dataset.state='open';setIcon('x');btn._gf_keydown=(e)=&gt;{if(e.key==='Escape')close();};doc.addEventListener('keydown',btn._gf_keydown);}catch(err){}}).call(this)" title="Menu" type="button">
<svg className="lucide lucide-menu w-[20px] h-[20px]" data-element-id="aura-emgduwv9moxlve93" data-element-locator="html &gt; body:nth-of-type() &gt; header:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; button:nth-of-type(2) &gt; svg:nth-of-type(1)" data-icon-replaced="true" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(228, 228, 231)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>

<div className="border-t border-white/10 px-4 py-2.5">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-md bg-emerald-400/10 border border-emerald-400/20 px-2 py-1 text-[11px] text-emerald-300">
<svg className="lucide lucide-sparkles w-3.5 h-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                  New
                </span>
<p className="text-sm max-[375px]:text-xs text-zinc-300">Issue #57 — Ghosts in the Machine is live.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-1 text-sm text-indigo-300 hover:text-indigo-200 transition-colors" href="#">
                Read now
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</header>

<section className="relative mx-auto max-w-7xl px-4 max-[375px]:px-3 pt-14 md:pt-20 max-[375px]:pt-10">
<div className="grid lg:grid-cols-12 gap-8 items-end">
<div className="lg:col-span-7">
<h1 className="text-4xl md:text-6xl lg:text-7xl max-[375px]:text-3xl font-semibold tracking-tight text-white">
            Signals from the future of design, code, and culture.
          </h1>
<p className="mt-5 text-base md:text-lg max-[375px]:text-[15px] text-zinc-400 max-w-2xl">
            A ghostly journal exploring interfaces, systems, and stories—crafted for the curious. Updated weekly.
          </p>

<div className="mt-8 flex flex-col gap-4">
<div className="relative">
<svg className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 max-[375px]:w-4 max-[375px]:h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full rounded-xl bg-zinc-900/60 border border-white/10 px-11 py-3.5 max-[375px]:px-10 max-[375px]:py-3 text-sm text-zinc-200 placeholder-zinc-500 outline-none focus:border-indigo-400/40 focus:ring-4 focus:ring-indigo-500/10 transition" placeholder="Search articles, topics, or authors" type="text"/>
</div>
<div className="flex items-center gap-2 overflow-x-auto pb-1">
<span className="text-xs text-zinc-500 min-w-max">Trending:</span>
<button className="min-w-max rounded-full border border-white/10 bg-white/5 px-3 py-1.5 max-[375px]:px-2.5 text-xs text-zinc-300 hover:border-white/20 hover:text-white transition">AI</button>
<button className="min-w-max rounded-full border border-white/10 bg-white/5 px-3 py-1.5 max-[375px]:px-2.5 text-xs text-zinc-300 hover:border-white/20 hover:text-white transition">Design Systems</button>
<button className="min-w-max rounded-full border border-white/10 bg-white/5 px-3 py-1.5 max-[375px]:px-2.5 text-xs text-zinc-300 hover:border-white/20 hover:text-white transition">WebGL</button>
<button className="min-w-max rounded-full border border-white/10 bg-white/5 px-3 py-1.5 max-[375px]:px-2.5 text-xs text-zinc-300 hover:border-white/20 hover:text-white transition">Performance</button>
<button className="min-w-max rounded-full border border-white/10 bg-white/5 px-3 py-1.5 max-[375px]:px-2.5 text-xs text-zinc-300 hover:border-white/20 hover:text-white transition">Product</button>
</div>
<div className="flex flex-wrap gap-3 pt-1">
<a className="inline-flex items-center gap-2 rounded-lg bg-indigo-500/15 px-4 py-2 max-[375px]:px-3 max-[375px]:py-1.5 text-sm max-[375px]:text-xs text-indigo-200 border border-indigo-400/20 hover:bg-indigo-500/25 hover:border-indigo-400/30 transition" href="#">
                Start Reading
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 max-[375px]:px-3 max-[375px]:py-1.5 text-sm max-[375px]:text-xs text-zinc-200 border border-white/10 hover:bg-white/10 hover:border-white/20 transition" href="#">
<svg className="lucide lucide-rss w-4 h-4" data-lucide="rss" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
                Follow via RSS
              </a>
</div>
</div>
</div>

<div className="lg:col-span-5">
<a className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 hover:border-white/20 transition" href="#">
<div className="absolute inset-0 pointer-events-none" style={{background: 'linear-gradient(180deg, rgba(15,15,20,0.0) 0%, rgba(15,15,20,0.25) 60%, rgba(15,15,20,0.6) 100%)'}}></div>
<img alt="Feature image" className="md:h-80 group-hover:scale-[1.02] transition duration-500 w-full h-64 max-[375px]:h-56 object-cover" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; a:nth-of-type(1) &gt; img:nth-of-type(1)" data-element-src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=1920&amp;auto=format&amp;fit=crop" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 p-5">
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex items-center gap-1 rounded-md bg-fuchsia-400/10 border border-fuchsia-400/20 px-2 py-1 text-[11px] text-fuchsia-300">Feature</span>
<span className="text-[11px] text-zinc-400">12 min read</span>
</div>
<h3 className="text-xl md:text-2xl max-[375px]:text-lg font-semibold tracking-tight text-white">Haunting the Interface: Designing for the Unseen</h3>
<p className="mt-2 text-sm text-zinc-400 line-clamp-2">We explore liminal UI states, latency ghosts, and how to make invisible systems feel trustworthy and alive.</p>
<div className="mt-4 flex items-center gap-3">
<img alt="Author" className="h-7 w-7 rounded-full ring-2 ring-white/10" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div className="text-xs text-zinc-400">By <span className="text-zinc-200">Nova Hale</span> • Oct 2</div>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 max-[375px]:px-3 mt-14">
<div className="grid lg:grid-cols-3 gap-6">

<a className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 hover:border-white/20 transition" href="#">
<div className="relative">
<img alt="Post" className="h-56 max-[375px]:h-44 w-full object-cover group-hover:scale-[1.02] transition duration-500" src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-md bg-cyan-400/10 border border-cyan-400/20 px-2 py-1 text-[11px] text-cyan-300">AI</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight text-white">Latency as a Feature: The Art of Productive Pauses</h3>
<p className="mt-2 text-sm text-zinc-400 line-clamp-2">How micro-delays can teach, tease, and tame complex systems—without frustrating users.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Author" className="h-7 w-7 rounded-full ring-2 ring-white/10" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<span className="text-xs text-zinc-400">By Arin • 8 min read</span>
</div>
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-zinc-400 group-hover:text-zinc-200 transition" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>

<a className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 hover:border-white/20 transition" href="#">
<div className="relative">
<img alt="Post" className="h-56 max-[375px]:h-44 w-full object-cover group-hover:scale-[1.02] transition duration-500" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-md bg-violet-400/10 border border-violet-400/20 px-2 py-1 text-[11px] text-violet-300">Design</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight text-white">Invisible Constraints: Why Limits Make Better Experiences</h3>
<p className="mt-2 text-sm text-zinc-400 line-clamp-2">Constraint-driven creation fosters clarity and confidence for both makers and users.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Author" className="h-7 w-7 rounded-full ring-2 ring-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<span className="text-xs text-zinc-400">By Jun • 6 min read</span>
</div>
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-zinc-400 group-hover:text-zinc-200 transition" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>

<a className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 hover:border-white/20 transition" href="#">
<div className="relative">
<img alt="Post" className="h-56 max-[375px]:h-44 w-full object-cover group-hover:scale-[1.02] transition duration-500" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-md bg-rose-400/10 border border-rose-400/20 px-2 py-1 text-[11px] text-rose-300">Culture</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight text-white">Lore in the Loop: Storytelling for Machine Interfaces</h3>
<p className="mt-2 text-sm text-zinc-400 line-clamp-2">Brains love narratives; your system has one whether you write it or not.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Author" className="h-7 w-7 rounded-full ring-2 ring-white/10" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<span className="text-xs text-zinc-400">By Sol • 9 min read</span>
</div>
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-zinc-400 group-hover:text-zinc-200 transition" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 max-[375px]:px-3 mt-14">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl md:text-3xl max-[375px]:text-xl font-semibold tracking-tight text-white">Latest</h2>
<p className="text-sm max-[375px]:text-[13px] text-zinc-400 mt-1">Fresh drops from the archive.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition" href="#">
          View all
          <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
<div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 hover:border-white/20 transition" href="#">
<div className="relative">
<img alt="Post" className="h-44 max-[375px]:h-40 w-full object-cover group-hover:scale-[1.02] transition duration-500" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-md bg-amber-400/10 border border-amber-400/20 px-2 py-1 text-[11px] text-amber-300">Performance</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="text-[17px] font-semibold tracking-tight text-white">The Cost of Pretty: Rethinking Motion on the Web</h3>
<p className="mt-2 text-sm text-zinc-400 line-clamp-2">Delight meets discipline—balancing animation with attention and accessibility.</p>
<div className="mt-4 flex items-center gap-3">
<img alt="Author" className="h-7 w-7 rounded-full ring-2 ring-white/10" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<span className="text-xs text-zinc-400">By Arin • 7 min read</span>
</div>
</div>
</a>
<a className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 hover:border-white/20 transition" href="#">
<div className="relative">
<img alt="Post" className="h-44 max-[375px]:h-40 w-full object-cover group-hover:scale-[1.02] transition duration-500" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-md bg-sky-400/10 border border-sky-400/20 px-2 py-1 text-[11px] text-sky-300">WebGL</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="text-[17px] font-semibold tracking-tight text-white">Ghosted Particles: Depth Without the Drag</h3>
<p className="mt-2 text-sm text-zinc-400 line-clamp-2">A practical approach to tasteful 3D that respects battery and bandwidth.</p>
<div className="mt-4 flex items-center gap-3">
<img alt="Author" className="h-7 w-7 rounded-full ring-2 ring-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<span className="text-xs text-zinc-400">By Jun • 5 min read</span>
</div>
</div>
</a>
<a className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 hover:border-white/20 transition" href="#">
<div className="relative">
<img alt="Post" className="h-44 max-[375px]:h-40 w-full object-cover group-hover:scale-[1.02] transition duration-500" src="https://images.unsplash.com/photo-1534854638093-bada1813ca19?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-md bg-emerald-400/10 border border-emerald-400/20 px-2 py-1 text-[11px] text-emerald-300">Product</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="text-[17px] font-semibold tracking-tight text-white">Friction for Good: Crafting Meaningful Onboarding</h3>
<p className="mt-2 text-sm text-zinc-400 line-clamp-2">Onboarding as an invitation, not a funnel—design the ritual, not the rush.</p>
<div className="mt-4 flex items-center gap-3">
<img alt="Author" className="h-7 w-7 rounded-full ring-2 ring-white/10" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<span className="text-xs text-zinc-400">By Sol • 10 min read</span>
</div>
</div>
</a>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 max-[375px]:px-3 mt-16">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/70 to-zinc-900/40 p-6 md:p-8 max-[375px]:p-5">
<div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-fuchsia-500/10 blur-3xl"></div>
<div className="absolute -left-10 -bottom-16 w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl"></div>
<div className="relative">
<div className="flex items-center gap-2">
<svg className="lucide lucide-ghost w-5 h-5 text-indigo-300" data-lucide="ghost" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"></path></svg>
<span className="text-sm text-indigo-200">Join 18,000+ readers</span>
</div>
<h3 className="mt-2 text-2xl md:text-3xl max-[375px]:text-xl font-semibold tracking-tight text-white">Get the weekly ghost—straight to your inbox.</h3>
<p className="mt-2 text-sm max-[375px]:text-[13px] text-zinc-400">No spam. Just thoughtful pieces, tools, and experiments.</p>
<form className="mt-5 grid sm:grid-cols-[1fr_auto] gap-3" onsubmit="event.preventDefault()">
<div className="relative">
<svg className="lucide lucide-at-sign w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="at-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<input className="w-full rounded-xl bg-zinc-950/60 border border-white/10 px-10 py-3 max-[375px]:px-9 max-[375px]:py-2.5 text-sm text-zinc-200 placeholder-zinc-500 outline-none focus:border-indigo-400/40 focus:ring-4 focus:ring-indigo-500/10 transition" placeholder="you@domain.com" required="" type="email"/>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500/20 text-indigo-200 px-5 py-3 max-[375px]:px-4 max-[375px]:py-2.5 text-sm max-[375px]:text-xs border border-indigo-400/20 hover:bg-indigo-500/30 hover:border-indigo-400/30 transition" type="submit">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
              Subscribe
            </button>
</form>
<p className="mt-2 text-xs text-zinc-500">By subscribing, you agree to our <a className="underline decoration-dotted hover:text-zinc-300" href="#">privacy policy</a>.</p>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 max-[375px]:px-3 mt-16">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl md:text-3xl max-[375px]:text-xl font-semibold tracking-tight text-white">Topics</h2>
<p className="text-sm max-[375px]:text-[13px] text-zinc-400 mt-1">Browse the archives by theme.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition" href="#">
          Explore tags
          <svg className="lucide lucide-chevrons-right w-4 h-4" data-lucide="chevrons-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 17 5-5-5-5"></path><path d="m13 17 5-5-5-5"></path></svg>
</a>
</div>
<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

<a className="group flex items-center justify-between rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 max-[375px]:px-3 max-[375px]:py-2.5 hover:border-white/20 transition" href="#">
<div className="flex items-center gap-3">
<svg className="lucide lucide-circuit-board w-5 h-5 text-cyan-300" data-lucide="circuit-board" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M11 9h4a2 2 0 0 0 2-2V3"></path><circle cx="9" cy="9" r="2"></circle><path d="M7 21v-4a2 2 0 0 1 2-2h4"></path><circle cx="15" cy="15" r="2"></circle></svg>
<div>
<div className="text-sm font-medium text-white">Systems</div>
<div className="text-xs text-zinc-400">137 posts</div>
</div>
</div>
<svg className="lucide lucide-arrow-right w-4 h-4 text-zinc-400 group-hover:text-zinc-200 transition" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="group flex items-center justify-between rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 max-[375px]:px-3 max-[375px]:py-2.5 hover:border-white/20 transition" href="#">
<div className="flex items-center gap-3">
<svg className="lucide lucide-beaker w-5 h-5 text-emerald-300" data-lucide="beaker" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 3h15"></path><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"></path><path d="M6 14h12"></path></svg>
<div>
<div className="text-sm font-medium text-white">Experiments</div>
<div className="text-xs text-zinc-400">89 posts</div>
</div>
</div>
<svg className="lucide lucide-arrow-right w-4 h-4 text-zinc-400 group-hover:text-zinc-200 transition" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="group flex items-center justify-between rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 max-[375px]:px-3 max-[375px]:py-2.5 hover:border-white/20 transition" href="#">
<div className="flex items-center gap-3">
<svg className="lucide lucide-palette w-5 h-5 text-violet-300" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
<div>
<div className="text-sm font-medium text-white">Design</div>
<div className="text-xs text-zinc-400">203 posts</div>
</div>
</div>
<svg className="lucide lucide-arrow-right w-4 h-4 text-zinc-400 group-hover:text-zinc-200 transition" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="group flex items-center justify-between rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 max-[375px]:px-3 max-[375px]:py-2.5 hover:border-white/20 transition" href="#">
<div className="flex items-center gap-3">
<svg className="lucide lucide-cpu w-5 h-5 text-amber-300" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<div>
<div className="text-sm font-medium text-white">Engineering</div>
<div className="text-xs text-zinc-400">156 posts</div>
</div>
</div>
</a></div></section>
    </>
  );
}
