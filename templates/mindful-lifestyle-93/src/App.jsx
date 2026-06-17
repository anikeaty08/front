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
      

<div className="sr-only">Lifestyle &amp; Inspiration — A weekly dose of mindfulness and motivation.</div>

<div className="min-h-screen md:py-12 w-full pt-8 pb-8">
<div className="mx-auto w-full max-w-2xl rounded-2xl bg-white shadow-sm ring-1 ring-black/5 overflow-hidden" style={{}}>

<header className="px-6 md:px-8 pt-6 pb-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-slate-900 ring-1 ring-black/10 flex items-center justify-center" style={{}}>
<span className="text-[10px] font-semibold tracking-tight text-white">SS</span>
</div>
<div>
<h1 className="text-xl md:text-2xl tracking-tight font-semibold text-slate-900" style={{}}>Solace Studio</h1>
<p className="text-sm text-slate-500 leading-tight" style={{}}>A mindful approach to modern living.</p>
</div>
</div>
<span className="inline-flex items-center gap-2 text-xs text-slate-500" style={{}}>
<svg className="lucide lucide-leaf w-4 h-4" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
              Weekly
            </span>
</div>
</header>

<section className="relative">
<div className="aspect-[16/9] w-full overflow-hidden">
<img alt="Calm lifestyle portrait" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-6 md:px-8 py-6">
<p className="text-xs uppercase tracking-widest text-slate-500" style={{}}>Lifestyle &amp; Inspiration</p>
<h2 className="mt-1 text-2xl md:text-3xl tracking-tight font-semibold text-slate-900" style={{}}>
              A weekly dose of mindfulness and motivation.
            </h2>

<div className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 ring-1 ring-slate-200" style={{}}>
<span className="text-xs text-slate-600" style={{}}>Subject</span>
<span className="text-xs font-medium text-slate-900" style={{}}>This Week: Your Guide to a Simpler Life</span>
</div>
</div>
</section>

<main className="px-6 md:px-8 py-6 md:py-8">
<h3 className="text-xl md:text-2xl tracking-tight font-semibold text-slate-900" style={{}}>Start Small: A 10-Minute Morning Reset</h3>
<p className="mt-3 text-[15px] leading-7 text-slate-700" style={{}}>
            A short, inspiring story or tip to kick off the week, focusing on a single, actionable idea like decluttering your
            mind, finding your purpose, or building a new habit.
          </p>
<div className="mt-5">
<a className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300" href="[Article Link]" style={{}}>
              Read Now
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</main>

<div className="h-px w-full bg-slate-100" style={{}}></div>

<section className="px-6 md:px-8 py-6 md:py-8">
<h4 className="text-lg md:text-xl tracking-tight font-semibold text-slate-900" style={{}}>What Else We're Loving</h4>
<div className="mt-5 grid gap-5 md:grid-cols-3">

<article className="group rounded-xl ring-1 ring-slate-200 hover:ring-slate-300 transition" style={{}}>
<div className="overflow-hidden rounded-t-xl">
<img alt="Podcast cover" className="h-28 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center gap-2 text-slate-600 text-sm" style={{}}>
<svg className="lucide lucide-mic w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(82, 82, 82)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
                  Podcast Recommendation
                </div>
<p className="mt-2 text-[15px] leading-6 text-slate-700" style={{}}>
                  A brief description of an inspiring podcast episode.
                </p>
<a className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-slate-900" href="[Podcast Link]" style={{}}>
                  Listen
                  <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</article>

<article className="group rounded-xl ring-1 ring-slate-200 hover:ring-slate-300 transition" style={{}}>
<div className="overflow-hidden rounded-t-xl">
<img alt="Book cover" className="h-28 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center gap-2 text-slate-600 text-sm" style={{}}>
<svg className="lucide lucide-book-open w-4 h-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
                  Book of the Week
                </div>
<p className="mt-2 text-[15px] leading-6 text-slate-700" style={{}}>
                  A short summary and link to a book about personal growth or wellness.
                </p>
<a className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-slate-900" href="[Book Link]" style={{}}>
                  Read
                  <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</article>

<article className="group rounded-xl ring-1 ring-slate-200 hover:ring-slate-300 transition" style={{}}>
<div className="overflow-hidden rounded-t-xl">
<img alt="Calm nature" className="h-28 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center gap-2 text-slate-600 text-sm" style={{}}>
<svg className="lucide lucide-bookmark-check w-4 h-4" data-lucide="bookmark-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"></path><path d="m9 10 2 2 4-4"></path></svg>
                  One Simple Tip
                </div>
<p className="mt-2 text-[15px] leading-6 text-slate-700" style={{}}>
                  Take a 5-minute digital detox each morning.
                </p>
<a className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-slate-900" href="[Tip Link]" style={{}}>
                  Try it
                  <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</article>
</div>
</section>

<section className="px-6 md:px-8 pb-8">
<div className="grid grid-cols-3 gap-3">
<div className="rounded-lg overflow-hidden">
<img alt="Minimal render" className="h-24 w-full object-cover" src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-lg overflow-hidden">
<img alt="Soft mountainscape" className="h-24 w-full object-cover" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-lg overflow-hidden">
<img alt="Minimal still life" className="h-24 w-full object-cover" src="https://images.unsplash.com/photo-1525026198548-4baa812f1183?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<footer className="bg-slate-50 px-6 md:px-8 py-8 border-t border-slate-200" style={{}}>
<h5 className="text-lg tracking-tight font-semibold text-slate-900" style={{}}>Solace Studio</h5>
<p className="mt-1 text-[15px] text-slate-700" style={{}}>Find more peace and purpose at <a className="underline decoration-slate-300 underline-offset-4 hover:text-slate-900" href="[Your Website]" style={{}}>[Your Website]</a>.</p>
<div className="mt-4 flex items-center gap-4">
<a className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-slate-200 hover:ring-slate-300" href="[Facebook Link]" style={{}}>
<svg className="lucide lucide-facebook w-5 h-5 text-neutral-700" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
<span className="sr-only">Facebook</span>
</a>
<a className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-slate-200 hover:ring-slate-300" href="[Instagram Link]" style={{}}>
<svg className="lucide lucide-instagram w-5 h-5 text-neutral-700" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<span className="sr-only">Instagram</span>
</a>
</div>
<p className="mt-6 text-xs text-slate-500" style={{}}>
            Copyright © <span id="year">2025</span> Solace Studio. All rights reserved.
          </p>
<p className="mt-2 text-xs text-slate-400" style={{}}>
            You’re receiving this email because you opted in at our website. If you prefer not to receive updates, you can
            <a className="underline decoration-slate-300 underline-offset-4" href="[Unsubscribe Link]" style={{}}>unsubscribe</a> at any time.
          </p>
</footer>
</div>

<div className="mx-auto mt-6 flex w-full max-w-2xl items-center justify-between px-2 md:px-0">
<div className="text-2xl tracking-tight font-semibold text-slate-900" style={{}}>Solace Studio</div>
<img alt="Small preview" className="h-10 w-10 rounded-lg object-cover" src="https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>

    </>
  );
}
