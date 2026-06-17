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



lucide.createIcons({attrs:{strokeWidth:1.5}});

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
      

<header className="w-full px-6 md:px-10 py-6 flex items-center justify-between">
<span className="font-semibold tracking-tight text-xl md:text-2xl">Echo</span>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="hover:text-sky-600 transition" href="#features">Features</a>
<a className="hover:text-sky-600 transition" href="#how-it-works">How It Works</a>
<a className="px-4 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700 transition" href="#cta">Start Journaling</a>
</nav>
<button aria-label="Open menu" className="md:hidden p-2 rounded-md hover:bg-neutral-100 transition">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="menu"></i>
</button>
</header>

<section className="relative isolate overflow-hidden px-6 md:px-10 pt-10 md:pt-20 pb-24 flex flex-col items-center text-center">
<h1 className="text-[40px] md:text-6xl tracking-tight leading-tight font-['Caveat'] text-neutral-900" style={{animation: 'fadeInUp .8s ease-out forwards'}}>Let Your Thoughts Echo</h1>
<p className="mt-6 max-w-xl text-lg md:text-xl text-neutral-600" style={{animation: 'fadeInUp .8s .15s ease-out forwards'}}>Echo turns your daily voice notes into gentle insights, helping you trace emotional patterns &amp; celebrate every reflection.</p>
<button className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-700 text-white transition shadow-sm" id="cta" style={{animation: 'fadeInUp .8s .3s ease-out forwards'}}>
<i className="w-5 h-5 stroke-[1.5]" data-lucide="mic"></i>
    Start Journaling
  </button>

<div aria-hidden="true" className="absolute -z-10 inset-x-0 top-0 h-[480px] opacity-70 blur-2xl" style={{background: 'radial-gradient(120% 90% at 50% -20%,#93c5fd 0%,#f9a8d4 45%,transparent 70%)', animation: 'blurIn 1.5s ease-out forwards'}}></div>

<img alt="Calm journaling illustration" className="absolute right-[-10%] bottom-[-8%] w-[320px] md:w-[440px] object-cover rounded-3xl shadow-lg ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&amp;fit=crop&amp;w=1100&amp;q=80" style={{animation: 'fadeIn .8s 0.6s ease-out forwards'}}/>
</section>

<div className="mx-6 md:mx-10 h-px bg-neutral-100"></div>

<section className="px-6 md:px-10 py-20 flex flex-col items-center" id="features">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Gentle Guidance, Powerful Insights</h2>
<div className="mt-12 grid gap-10 md:grid-cols-3 w-full max-w-6xl">

<div className="flex flex-col items-start gap-4" style={{animation: 'fadeInUp .9s .1s ease-out forwards'}}>
<div className="p-3 rounded-md bg-sky-50 text-sky-600">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="mic"></i>
</div>
<h3 className="text-lg font-medium">Voice-First Journaling</h3>
<p className="text-neutral-600 text-sm leading-relaxed">Speak freely and let Echo transcribe, tag emotions, and organize your day.</p>
</div>

<div className="flex flex-col items-start gap-4" style={{animation: 'fadeInUp .9s .2s ease-out forwards'}}>
<div className="p-3 rounded-md bg-rose-50 text-rose-600">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="activity"></i>
</div>
<h3 className="text-lg font-medium">Emotional Trends</h3>
<p className="text-neutral-600 text-sm leading-relaxed">Spot patterns across weeks and months to better understand your mood.</p>
</div>

<div className="flex flex-col items-start gap-4" style={{animation: 'fadeInUp .9s .3s ease-out forwards'}}>
<div className="p-3 rounded-md bg-emerald-50 text-emerald-600">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="star"></i>
</div>
<h3 className="text-lg font-medium">Gentle Reminders</h3>
<p className="text-neutral-600 text-sm leading-relaxed">Soft nudges keep you consistent without overwhelming notifications.</p>
</div>
</div>
</section>

<div className="mx-6 md:mx-10 h-px bg-neutral-100"></div>

<section className="px-6 md:px-10 py-20 max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center" id="how-it-works">
<div className="flex-1" style={{animation: 'fadeInUp .9s .15s ease-out forwards'}}>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">A Flow As Simple As Speaking</h2>
<ol className="mt-6 space-y-6 list-decimal list-inside text-neutral-700">
<li><span className="font-medium">Record </span>your thoughts anytime, anywhere.</li>
<li><span className="font-medium">Reflect </span>on AI-generated summaries &amp; emotional tags.</li>
<li><span className="font-medium">Grow </span>with weekly insights and guided questions.</li>
</ol>
<button className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-700 text-white transition shadow-sm">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="mic"></i>
      Start Journaling
    </button>
</div>
<div className="flex-1 relative" style={{animation: 'fadeInUp .9s .25s ease-out forwards'}}>
<img alt="Voice note screenshot" className="rounded-3xl shadow-lg ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
</section>

<section className="relative isolate overflow-hidden py-20" id="cta">
<div className="absolute inset-0 -z-10 opacity-80" style={{background: 'radial-gradient(140% 100% at 50% 100%,#93c5fd 0%,#f9a8d4 60%,transparent 80%)'}}></div>
<div className="px-6 md:px-10 max-w-4xl mx-auto text-center text-neutral-900">
<h2 className="text-4xl md:text-5xl font-['Caveat'] tracking-tight" style={{animation: 'fadeInUp .8s ease-out forwards'}}>Ready to start your journey?</h2>
<p className="mt-4 text-lg text-neutral-700" style={{animation: 'fadeInUp .8s .1s ease-out forwards'}}>It only takes a voice note to begin.</p>
<button className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white transition shadow" style={{animation: 'fadeInUp .8s .2s ease-out forwards'}}>
<i className="w-5 h-5 stroke-[1.5] text-white" data-lucide="mic"></i>
      Start Journaling
    </button>
</div>
</section>

<footer className="px-6 md:px-10 py-12 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
<span>© 2024 Echo</span>
<div className="flex items-center gap-6 mt-4 md:mt-0">
<a className="hover:text-neutral-800 transition" href="#">Privacy</a>
<a className="hover:text-neutral-800 transition" href="#">Terms</a>
<a className="hover:text-neutral-800 transition" href="#">Contact</a>
</div>
</footer>


    </>
  );
}
