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

  document.getElementById('year').textContent = new Date().getFullYear();

  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('opacity-100','translate-y-0');
    });
  }, { threshold: 0.2 });

  reveals.forEach(card => {
    card.classList.add('opacity-0','translate-y-4','transition','duration-500','ease-out');
    observer.observe(card);
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
      
<a className="absolute left-4 top-4 z-50 px-3 py-2 rounded-md bg-indigo-600 text-white text-sm sr-only focus:not-sr-only" href="#main">Skip to main content</a>

<header className="pt-28 pb-20 px-6">
<div className="max-w-3xl mx-auto text-center space-y-6">
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Product Webinars</h1>
<p className="text-lg text-neutral-600">Live deep-dives and an ever-growing on-demand library for busy builders.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white transition focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
<i className="w-5 h-5" data-lucide="play-circle"></i>Browse library
      </button>
<button className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-neutral-100 hover:bg-neutral-200 text-sm transition">
<i className="w-4 h-4" data-lucide="calendar"></i>Upcoming sessions
      </button>
</div>
</div>
</header>

<section className="max-w-5xl mx-auto px-6 -mt-10" id="main">
<form className="bg-white/90 backdrop-blur rounded-xl ring-1 ring-neutral-200 shadow-sm px-6 py-5 flex flex-col sm:flex-row gap-4">
<label className="relative flex-1">
<span className="sr-only">Search webinars</span>
<input className="peer w-full rounded-md bg-neutral-50 border border-neutral-200 py-3 pl-11 pr-4 text-sm placeholder-neutral-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition" placeholder="Search webinars…" type="search"/>
<i className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none peer-focus:text-indigo-500" data-lucide="search"></i>
</label>
<label className="relative">
<span className="sr-only">Category</span>
<select className="appearance-none bg-neutral-50 border border-neutral-200 pr-10 pl-4 py-3 rounded-md text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition">
<option value="">All topics</option>
<option>Email Security</option>
<option>Automation</option>
<option>AI</option>
</select>
<i className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" data-lucide="chevron-down"></i>
</label>
</form>
</section>

<section className="max-w-5xl mx-auto px-6 mt-20 space-y-8">
<header className="flex items-baseline justify-between">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Live webinars</h2>
<span className="inline-flex items-center gap-2 text-sm font-medium text-rose-600">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600"></span>
</span>
      Happening soon
    </span>
</header>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<article className="reveal flex flex-col rounded-lg ring-1 ring-neutral-200 hover:ring-indigo-300 transition shadow-sm hover:shadow-md">
<div className="p-5 space-y-3 flex-1">
<h3 className="text-base font-medium">Zero-Trust Mail Gateways</h3>
<p className="text-sm text-neutral-600">Today · 4 PM CET</p>
<p className="text-sm text-neutral-600 line-clamp-3">Architecting mail flow for breach containment and visibility.</p>
</div>
<button className="m-5 py-2.5 rounded-md bg-rose-600 hover:bg-rose-500 text-white text-sm flex items-center justify-center gap-1 transition">
<i className="w-4 h-4" data-lucide="video"></i>Join now
      </button>
</article>
<article className="reveal flex flex-col rounded-lg ring-1 ring-neutral-200 hover:ring-indigo-300 transition shadow-sm hover:shadow-md delay-75">
<div className="p-5 space-y-3 flex-1">
<h3 className="text-base font-medium">End-to-End Encryption 101</h3>
<p className="text-sm text-neutral-600">Tomorrow · 11 AM CET</p>
<p className="text-sm text-neutral-600 line-clamp-3">A fast-paced demo with live key rotation and deep Q&amp;A.</p>
</div>
<button className="m-5 py-2.5 rounded-md bg-rose-600 hover:bg-rose-500 text-white text-sm flex items-center justify-center gap-1 transition">
<i className="w-4 h-4" data-lucide="clock"></i>Reserve
      </button>
</article>
<article className="reveal flex flex-col rounded-lg ring-1 ring-neutral-200 hover:ring-indigo-300 transition shadow-sm hover:shadow-md delay-100">
<div className="p-5 space-y-3 flex-1">
<h3 className="text-base font-medium">AI-Driven Phishing Detection</h3>
<p className="text-sm text-neutral-600">Friday · 2 PM CET</p>
<p className="text-sm text-neutral-600 line-clamp-3">Behind the scenes of our transformer model and real-world catch rates.</p>
</div>
<button className="m-5 py-2.5 rounded-md bg-neutral-100 hover:bg-neutral-200 text-sm flex items-center justify-center gap-1 transition">
<i className="w-4 h-4" data-lucide="zap"></i>Join waitlist
      </button>
</article>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mt-24 space-y-8">
<header className="flex items-baseline justify-between">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight">On-demand</h2>
<a className="text-sm font-medium text-indigo-600 hover:text-indigo-500 inline-flex items-center gap-1" href="#">
      All sessions<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</header>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<article className="reveal overflow-hidden rounded-lg ring-1 ring-neutral-200 hover:ring-indigo-300 transition shadow-sm hover:shadow-md">
<img alt="" className="w-full h-36 object-cover" src="https://images.unsplash.com/photo-1521790797524-b2497295b8e9?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="p-5 space-y-2">
<h3 className="text-base font-medium leading-snug">Securing SMTP Relays at Scale</h3>
<p className="text-sm text-neutral-600">45 min · Intermediate</p>
<button className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-500">
<i className="w-4 h-4" data-lucide="play"></i>Watch
        </button>
</div>
</article>
<article className="reveal overflow-hidden rounded-lg ring-1 ring-neutral-200 hover:ring-indigo-300 transition shadow-sm hover:shadow-md delay-75">
<img alt="" className="w-full h-36 object-cover" src="https://images.unsplash.com/photo-1607746882042-944635dfe79e?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="p-5 space-y-2">
<h3 className="text-base font-medium leading-snug">Migrating from SPF/DKIM to BIMI</h3>
<p className="text-sm text-neutral-600">30 min · Beginner</p>
<button className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-500">
<i className="w-4 h-4" data-lucide="play"></i>Watch
        </button>
</div>
</article>
<article className="reveal overflow-hidden rounded-lg ring-1 ring-neutral-200 hover:ring-indigo-300 transition shadow-sm hover:shadow-md delay-100">
<img alt="" className="w-full h-36 object-cover" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="p-5 space-y-2">
<h3 className="text-base font-medium leading-snug">Parsing Mail Headers with Python</h3>
<p className="text-sm text-neutral-600">60 min · Advanced</p>
<button className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-500">
<i className="w-4 h-4" data-lucide="play"></i>Watch
        </button>
</div>
</article>
</div>
</section>

<footer className="border-t border-neutral-200 mt-24 py-10 text-center text-sm text-neutral-500">
  © <span id="year"></span> Company
</footer>



    </>
  );
}
