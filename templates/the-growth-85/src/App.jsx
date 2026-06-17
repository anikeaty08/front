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
      

<div className="hidden" style={{display: 'none', maxHeight: '0', overflow: 'hidden', opacity: '0', visibility: 'hidden'}}>
      Research-backed study and productivity techniques to level up faster.
    </div>
<div className="min-h-screen">
<div className="mx-auto max-w-[680px] px-6 py-8 sm:py-10">

<div className="relative rounded-2xl border border-slate-200 bg-white shadow-xl ring-1 ring-slate-100">

<div className="h-1.5 w-full rounded-t-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500"></div>

<header className="flex items-center justify-between px-6 sm:px-8 pt-6 pb-4">
<div className="flex items-center gap-3">

<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 ring-1 ring-slate-200">
<span className="text-sm font-semibold tracking-tight text-slate-900">TGB</span>
</div>
<div className="hidden sm:block">
<p className="text-sm text-slate-700">The Growth Blueprint</p>
<p className="text-xs text-slate-500">Research-backed learning tools</p>
</div>
</div>
<a className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-violet-500/40" href="#">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18l6-6-6-6"></path>
</svg>
              View in browser
            </a>
</header>

<section className="px-6 sm:px-8 pt-2">
<h1 className="text-[28px] sm:text-[32px] tracking-tight font-semibold text-slate-900">
              The Growth Blueprint
            </h1>
<p className="mt-2 text-[15px] leading-6 text-slate-700">
              Hey [First Name],
            </p>
<p className="mt-2 text-[15px] leading-7 text-slate-700">
              The path to professional growth is often paved with good intentions but lacks clear strategies. We've gathered some of the most effective, research-backed study and productivity techniques to help you absorb more knowledge and level up your career faster.
            </p>
<div className="mt-6">
<a className="inline-flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-sm font-medium text-white shadow-sm ring-1 ring-inset ring-slate-200 hover:bg-violet-500 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 focus:ring-offset-white" href="#">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4h16v16H4z"></path>
<path d="M8 8h8M8 12h8M8 16h8"></path>
</svg>
                EXPLORE OUR FREE RESOURCE LIBRARY
              </a>
</div>
</section>

<div className="mx-6 sm:mx-8 my-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

<section className="px-6 sm:px-8">
<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
<div className="order-2 sm:order-1">
<h2 className="text-[20px] sm:text-[22px] tracking-tight font-semibold text-slate-900">
                  Master Active Recall in 15 Minutes
                </h2>
<p className="mt-2 text-[14.5px] leading-7 text-slate-700">
                  Stop passively highlighting your notes! Active Recall is a powerful technique where you actively force your brain to retrieve information. It’s proven to build stronger memory pathways. Spend just 15 minutes testing yourself today to see the difference.
                </p>
<div className="mt-4">
<a className="inline-flex items-center gap-2 rounded-md border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700 hover:bg-violet-100 hover:text-violet-800 hover:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-500/50" href="#">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 19.5V4.5A2.5 2.5 0 0 1 6.5 2H18"></path>
<path d="M8 2v4h8"></path>
<path d="M8 10h8M8 14h5"></path>
</svg>
                    Read the Full Guide
                  </a>
</div>
</div>
<div className="order-1 sm:order-2">
<a className="group block overflow-hidden rounded-xl border border-slate-200 bg-white ring-1 ring-slate-200 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500/60" href="#">
<img alt="Students studying: Active Recall" className="h-52 w-full object-cover transition duration-300 group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</a>
<p className="mt-2 text-xs text-slate-500">Image Placeholder: Students studying or a diagram of memory</p>
</div>
</div>
</section>

<div className="mx-6 sm:mx-8 my-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

<section className="px-6 sm:px-8">
<h2 className="text-[20px] sm:text-[22px] tracking-tight font-semibold text-slate-900">
              Slash Your Study Time by 20%
            </h2>
<p className="mt-2 text-[14.5px] leading-7 text-slate-700">
              Are long study sessions wasting your time? The Pomodoro Technique breaks work into focused 25-minute intervals. Take a quick break, then jump back in. This simple rhythm maximizes concentration and prevents mental fatigue.
            </p>
<div className="mt-4 flex flex-wrap items-center gap-3">

<span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-600/20 bg-emerald-50 px-2.5 py-1 text-xs text-emerald-700">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 9v4l3 3"></path>
<circle cx="12" cy="13" r="8"></circle>
<path d="M9 2h6"></path>
</svg>
                25:00 focus sprints
              </span>
<span className="inline-flex items-center gap-1.5 rounded-md border border-sky-600/20 bg-sky-50 px-2.5 py-1 text-xs text-sky-700">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6h18M3 12h18M3 18h18"></path>
</svg>
                Built-in breaks
              </span>
</div>
<div className="mt-5">
<a className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm ring-1 ring-inset ring-slate-200 hover:bg-emerald-500 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 focus:ring-offset-white" href="#">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M10 8l6 4-6 4V8z"></path>
</svg>
                Start Your Timer
              </a>
</div>
</section>

<div className="mx-6 sm:mx-8 my-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

<section className="px-6 sm:px-8">
<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
<div>
<a className="group block overflow-hidden rounded-xl border border-slate-200 bg-white ring-1 ring-slate-200 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500/60" href="#">
<img alt="Abstract network graphic" className="h-52 w-full object-cover transition duration-300 group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</a>
<p className="mt-2 text-xs text-slate-500">Image Placeholder: Abstract network graphic</p>
</div>
<div className="flex flex-col">
<h2 className="text-[20px] sm:text-[22px] tracking-tight font-semibold text-slate-900">
                  Connect with the Growth Hub Community
                </h2>
<p className="mt-2 text-[14.5px] leading-7 text-slate-700">
                  Join over 50,000 professionals, students, and lifelong learners. Share your favorite study hacks, ask career questions, and network with experts from various industries through our exclusive members-only forum.
                </p>
<div className="mt-4">
<a className="inline-flex items-center gap-2 rounded-md border border-fuchsia-200 bg-fuchsia-50 px-4 py-2 text-sm font-medium text-fuchsia-700 hover:bg-fuchsia-100 hover:text-fuchsia-800 hover:border-fuchsia-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" href="#">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6l9 6 9-6"></path>
<path d="M21 10l-9 6-9-6"></path>
<path d="M3 14l9 6 9-6"></path>
</svg>
                    Join Our Discussion Forum
                  </a>
</div>
</div>
</div>
</section>

<div className="mx-6 sm:mx-8 my-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

<section className="px-6 sm:px-8">
<h3 className="text-[18px] tracking-tight font-semibold text-slate-900">More Essential Reading</h3>
<div className="mt-4 flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 ring-1 ring-slate-200">
<img alt="Remote Work Toolkit" className="h-16 w-16 flex-none rounded-md object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<p className="text-sm font-medium text-slate-800">
<span className="text-slate-900">The Remote Work Toolkit:</span> 5 Apps to Organize Your Professional Life
                </p>
<p className="mt-1 text-[13.5px] leading-6 text-slate-700">
                  From project management to seamless communication, here are the essential apps you need to succeed in a virtual office.
                </p>
<a className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-violet-700 hover:text-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-500/40 rounded" href="#">
<svg className="h-4 w-4 -ml-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18l6-6-6-6"></path>
</svg>
                  Read More
                </a>
</div>
</div>
</section>

<div className="mx-6 sm:mx-8 my-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

<section className="px-6 sm:px-8 pb-8">
<h3 className="text-[18px] tracking-tight font-semibold text-slate-900">App Downloads &amp; Footer</h3>
<p className="mt-2 text-[14.5px] leading-7 text-slate-700">
              Get the companion app for seamless note-taking and lesson tracking on any device.
            </p>
<div className="mt-4 flex flex-wrap items-center gap-3">

<a className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-violet-500/40" href="#">
<svg className="h-5 w-5 text-slate-800" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.365 1.43a4.4 4.4 0 0 1-1.08 3.22 3.78 3.78 0 0 1-2.96 1.38 4.14 4.14 0 0 1 1.08-3.17A4.3 4.3 0 0 1 16.365 1.43Z"></path>
<path d="M20.34 17.26c-.38.88-.83 1.69-1.35 2.43-.71 1.02-1.28 1.72-1.73 2.08-.67.63-1.38.96-2.12 1a3.8 3.8 0 0 1-1.6-.36c-.49-.22-.94-.36-1.36-.36-.45 0-.92.12-1.41.36-.5.23-.95.35-1.36.36-.73.03-1.46-.3-2.19-1-.47-.4-1.06-1.12-1.79-2.16C2.9 15.9 2.42 13.3 3.3 11.4c.56-1.2 1.44-1.93 2.63-2.2.55-.12 1.23-.1 2.04.05.48.1 1.04.28 1.67.54.64.27 1.08.43 1.31.48.5.1 1.01-.03 1.55-.4.4-.28.88-.49 1.45-.62.61-.15 1.19-.18 1.73-.08 1.28.22 2.25.83 2.9 1.84-1.14.69-1.71 1.66-1.71 2.93 0 1.11.42 2.03 1.27 2.75.38.33.81.59 1.3.77Z"></path>
</svg>
<span>App Store</span>
</a>

<a className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-violet-500/40" href="#">
<svg className="h-5 w-5 text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 20V4a1 1 0 0 1 1.53-.85l12.5 7.5a1 1 0 0 1 0 1.7l-12.5 7.5A1 1 0 0 1 3 20Z"></path>
<path d="M14 14l5 5"></path>
<path d="M14 10l5-5"></path>
</svg>
<span>Google Play</span>
</a>

<a className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-violet-500/40" href="#">
<svg className="h-5 w-5 text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="3"></rect>
<path d="M8 21h8M12 17v4"></path>
</svg>
<span>Desktop App</span>
</a>
</div>
</section>

<footer className="px-6 sm:px-8 pb-8">
<div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-6"></div>
<div className="flex flex-wrap items-center justify-between gap-4">

<div className="flex items-center gap-2">
<a aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-violet-500/40" href="#">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-violet-500/40" href="#">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 5.8a8.37 8.37 0 0 1-2.36.65 4.12 4.12 0 0 0 1.8-2.27 8.25 8.25 0 0 1-2.62 1 4.13 4.13 0 0 0-7.16 2.82c0 .32.04.63.1.93A11.7 11.7 0 0 1 3 4.9a4.13 4.13 0 0 0 1.28 5.5 4.07 4.07 0 0 1-1.86-.51v.05a4.14 4.14 0 0 0 3.31 4.05c-.45.12-.94.18-1.44.07a4.13 4.13 0 0 0 3.86 2.88A8.3 8.3 0 0 1 2 19.6a11.73 11.73 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.69 0-.18 0-.36-.01-.54A8.36 8.36 0 0 0 22 5.8Z"></path>
</svg>
</a>
<a aria-label="Facebook" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-violet-500/40" href="#">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</a>
</div>

<div className="text-xs leading-6 text-slate-500">
                123 Learning Ave, San Jose, CA 95131 • Copyright © 2025 The Growth Blueprint. All rights reserved. •
                <a className="text-violet-700 hover:text-violet-800 underline underline-offset-2" href="#">Unsubscribe</a>
</div>
</div>
</footer>
</div>

<div className="py-6"></div>
</div>
</div>

    </>
  );
}
