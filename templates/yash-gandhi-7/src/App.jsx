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



      // Render icons with thinner strokes
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Year
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
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_-10%,rgba(99,102,241,0.20),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(40%_35%_at_10%_10%,rgba(34,197,94,0.10),transparent_60%)]"></div>
</div>

<header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500/80 to-emerald-400/80 ring-1 ring-white/20 shadow-sm"></div>
<span className="text-slate-100 text-base sm:text-lg font-semibold tracking-tight">
            Yash Gandhi
          </span>
</a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-slate-300 hover:text-slate-100 transition" href="#projects">
            Work
          </a>
<a className="text-sm text-slate-300 hover:text-slate-100 transition" href="#experience">
            Experience
          </a>
<a className="text-sm text-slate-300 hover:text-slate-100 transition" href="#contact">
            Contact
          </a>
</nav>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium text-slate-100 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition" href="#contact">
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="hidden sm:inline">Say hello</span>
</a>
</div>
</div>
</header>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
<svg className="lucide lucide-sparkles h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
            Open to commissions &amp; festivals
          </div>
<h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-100">
            Filmmaker &amp; Performer
          </h1>
<p className="mt-4 text-base sm:text-lg text-slate-300">
            I craft narrative and movement-driven stories for film, stage, and
            commercial work—focused on feeling, rhythm, and honest performances.
          </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-slate-900 bg-slate-100 hover:bg-white transition ring-1 ring-white/10" href="#projects">
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-slate-100 bg-white/5 hover:bg-white/10 transition ring-1 ring-white/10" href="https://www.instagram.com/gandhihsay/" target="_blank">
<svg className="lucide lucide-instagram h-4 w-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              Instagram
              <svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="mt-8 flex items-center gap-6 text-sm text-slate-300">
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-globe-2 h-4 w-4" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
              Available worldwide
            </div>
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
              7+ years performing/directing
            </div>
</div>
</div>
<div className="lg:col-span-5">
<div className="relative">
<div className="absolute -inset-2 rounded-xl bg-gradient-to-tr from-indigo-500/20 via-transparent to-emerald-400/20 blur-xl"></div>
<div className="relative rounded-xl ring-1 ring-white/10 bg-white/5 p-4 sm:p-6">
<div className="grid grid-cols-2 gap-3 sm:gap-4">
<div className="rounded-lg ring-1 ring-white/10 bg-slate-900/40 p-3">
<div className="flex items-center gap-2 text-slate-300 text-xs">
<svg className="lucide lucide-clapperboard h-3.5 w-3.5" data-lucide="clapperboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path><path d="m6.2 5.3 3.1 3.9"></path><path d="m12.4 3.4 3.1 4"></path><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path></svg>
                    Direction
                  </div>
<div className="mt-2 text-slate-100 font-semibold tracking-tight">
                    Story &amp; Blocking
                  </div>
<div className="text-xs text-slate-400">
                    Performance-led scenes
                  </div>
</div>
<div className="rounded-lg ring-1 ring-white/10 bg-slate-900/40 p-3">
<div className="flex items-center gap-2 text-slate-300 text-xs">
<svg className="lucide lucide-person-standing h-3.5 w-3.5" data-lucide="person-standing" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="5" r="1"></circle><path d="m9 20 3-6 3 6"></path><path d="m6 8 6 2 6-2"></path><path d="M12 10v4"></path></svg>
                    Performance
                  </div>
<div className="mt-2 text-slate-100 font-semibold tracking-tight">
                    Movement &amp; Voice
                  </div>
<div className="text-xs text-slate-400">
                    Stage &amp; on-camera
                  </div>
</div>
<div className="rounded-lg ring-1 ring-white/10 bg-slate-900/40 p-3">
<div className="flex items-center gap-2 text-slate-300 text-xs">
<svg className="lucide lucide-camera h-3.5 w-3.5" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
                    Production
                  </div>
<div className="mt-2 text-slate-100 font-semibold tracking-tight">
                    Indie &amp; Commercial
                  </div>
<div className="text-xs text-slate-400" style={{}}>Stunning visuals</div>
</div>
<div className="rounded-lg ring-1 ring-white/10 bg-slate-900/40 p-3">
<div className="flex items-center gap-2 text-slate-300 text-xs">
<svg className="lucide lucide-scissors h-3.5 w-3.5" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
                    Editing
                  </div>
<div className="mt-2 text-slate-100 font-semibold tracking-tight">
                    Rhythm &amp; Sound
                  </div>
<div className="text-xs text-slate-400">Pacing, sound design</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="my-12 sm:my-16 border-t border-white/10"></div>
</div>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="projects">
<div className="flex items-end justify-between">
<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-100">
          Selected work
        </h2>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-slate-300 hover:text-slate-100 transition" href="#">
          See all work
          <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-x-4 gap-y-4">
<article className="group hover:bg-white/10 transition flex flex-col bg-white/5 ring-white/10 ring-1 rounded-xl px-5 py-5">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-xs text-slate-300">
<svg className="lucide lucide-scissors h-4 w-4" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
              Editor
            </div>
<div className="flex items-center gap-2">
<a aria-label="Watch on YouTube" className="p-1.5 rounded-md hover:bg-white/10 transition" href="https://www.youtube.com/watch?v=aa5FfDFsvNA" target="_blank">
<svg className="lucide lucide-play-circle h-4 w-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</a>
<a aria-label="Visit" className="p-1.5 rounded-md hover:bg-white/10 transition" href="https://www.youtube.com/watch?v=aa5FfDFsvNA" target="_blank">
<svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-100">
            YouTube Video
          </h3>
<p className="mt-2 text-sm text-slate-300 flex-1">Role: Editor</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md text-xs text-slate-200 bg-slate-900/40 ring-1 ring-white/10">
              Editor
            </span>
<span className="px-2.5 py-1 rounded-md text-xs text-slate-200 bg-slate-900/40 ring-1 ring-white/10">
              YouTube
            </span>
</div>
</article>
<article className="group rounded-xl ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition p-5 flex flex-col">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-xs text-slate-300">
<svg className="lucide lucide-mic h-4 w-4" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
              On-set Sound Recordist
            </div>
<div className="flex items-center gap-2">
<a aria-label="Watch on YouTube" className="p-1.5 rounded-md hover:bg-white/10 transition" href="https://www.youtube.com/watch?v=sinXUimjl7Y&amp;t=1s" target="_blank">
<svg className="lucide lucide-play-circle h-4 w-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</a>
<a aria-label="Visit" className="p-1.5 rounded-md hover:bg-white/10 transition" href="https://www.youtube.com/watch?v=sinXUimjl7Y&amp;t=1s" target="_blank">
<svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-100">
            YouTube Video
          </h3>
<p className="mt-2 text-sm text-slate-300 flex-1">
            Role: On-set Sound Recordist
          </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md text-xs text-slate-200 bg-slate-900/40 ring-1 ring-white/10">
              Sound
            </span>
<span className="px-2.5 py-1 rounded-md text-xs text-slate-200 bg-slate-900/40 ring-1 ring-white/10">
              YouTube
            </span>
</div>
</article>
<article className="group rounded-xl ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition p-5 flex flex-col">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-xs text-slate-300">
<svg className="lucide lucide-clipboard h-4 w-4" data-lucide="clipboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path></svg>
              Production assistant
            </div>
<div className="flex items-center gap-2">
<a aria-label="Watch on Facebook" className="p-1.5 rounded-md hover:bg-white/10 transition" href="https://www.facebook.com/watch/?v=270037696970062" target="_blank">
<svg className="lucide lucide-play-circle h-4 w-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</a>
<a aria-label="Visit" className="p-1.5 rounded-md hover:bg-white/10 transition" href="https://www.facebook.com/watch/?v=270037696970062" target="_blank">
<svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-100">
            Facebook Watch
          </h3>
<p className="mt-2 text-sm text-slate-300 flex-1">
            Role: Production assistant
          </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md text-xs text-slate-200 bg-slate-900/40 ring-1 ring-white/10">
              Production
            </span>
<span className="px-2.5 py-1 rounded-md text-xs text-slate-200 bg-slate-900/40 ring-1 ring-white/10">
              Facebook
            </span>
</div>
</article>
<article className="group hover:bg-white/10 transition flex flex-col bg-white/5 ring-white/10 ring-1 rounded-xl pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between">
<div className="inline-flex gap-2 text-xs text-slate-300 gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-clapperboard h-4 w-4" data-lucide="clapperboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path><path d="m6.2 5.3 3.1 3.9"></path><path d="m12.4 3.4 3.1 4"></path><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path></svg>
              Director/Editor
            </div>
<div className="flex items-center gap-2">
<a aria-label="Watch on YouTube" className="p-1.5 rounded-md hover:bg-white/10 transition" href="https://youtu.be/d6GTY4qo9WI" target="_blank">
<svg className="lucide lucide-play-circle h-4 w-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</a>
<a aria-label="Visit" className="p-1.5 rounded-md hover:bg-white/10 transition" href="https://youtu.be/d6GTY4qo9WI" target="_blank">
<svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-100">
            YouTube Video
          </h3>
<p className="mt-2 text-sm text-slate-300 flex-1">
            Role: Director/Editor
          </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md text-xs text-slate-200 bg-slate-900/40 ring-1 ring-white/10">
              Direction
            </span>
<span className="px-2.5 py-1 rounded-md text-xs text-slate-200 bg-slate-900/40 ring-1 ring-white/10">
              Editing
            </span>
<span className="px-2.5 py-1 rounded-md text-xs text-slate-200 bg-slate-900/40 ring-1 ring-white/10">
              YouTube
            </span>
</div>
</article>
<article className="group rounded-xl ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition p-5 flex flex-col">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-xs text-slate-300">
<svg className="lucide lucide-person-standing h-4 w-4" data-lucide="person-standing" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="5" r="1"></circle><path d="m9 20 3-6 3 6"></path><path d="m6 8 6 2 6-2"></path><path d="M12 10v4"></path></svg>
              Actor
            </div>
<div className="flex items-center gap-2">
<a aria-label="Watch on YouTube" className="p-1.5 rounded-md hover:bg-white/10 transition" href="https://youtu.be/s5ah3eVctkg" target="_blank">
<svg className="lucide lucide-play-circle h-4 w-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</a>
<a aria-label="Visit" className="p-1.5 rounded-md hover:bg-white/10 transition" href="https://youtu.be/s5ah3eVctkg" target="_blank">
<svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-100">
            YouTube Video
          </h3>
<p className="mt-2 text-sm text-slate-300 flex-1">Role: Actor</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md text-xs text-slate-200 bg-slate-900/40 ring-1 ring-white/10">
              Acting
            </span>
<span className="px-2.5 py-1 rounded-md text-xs text-slate-200 bg-slate-900/40 ring-1 ring-white/10">
              YouTube
            </span>
</div>
</article>
<article className="group rounded-xl ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition p-5 flex flex-col">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-xs text-slate-300">
<svg className="lucide lucide-palette h-4 w-4" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
              Art Assistant
            </div>
<div className="flex items-center gap-2">
<a aria-label="Watch on Facebook" className="p-1.5 rounded-md hover:bg-white/10 transition" href="https://www.facebook.com/watch/?v=351097395458860" target="_blank">
<svg className="lucide lucide-play-circle h-4 w-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</a>
<a aria-label="Visit" className="p-1.5 rounded-md hover:bg-white/10 transition" href="https://www.facebook.com/watch/?v=351097395458860" target="_blank">
<svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-100">
            Facebook Watch
          </h3>
<p className="mt-2 text-sm text-slate-300 flex-1">Role: Art Assistant</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md text-xs text-slate-200 bg-slate-900/40 ring-1 ring-white/10">
              Art
            </span>
<span className="px-2.5 py-1 rounded-md text-xs text-slate-200 bg-slate-900/40 ring-1 ring-white/10">
              Facebook
            </span>
</div>
</article>
<article className="group rounded-xl ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition p-5 flex flex-col">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-xs text-slate-300">
<svg className="lucide lucide-person-standing h-4 w-4" data-lucide="person-standing" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="5" r="1"></circle><path d="m9 20 3-6 3 6"></path><path d="m6 8 6 2 6-2"></path><path d="M12 10v4"></path></svg>
              Actor
            </div>
<div className="flex items-center gap-2">
<a aria-label="Watch on YouTube" className="p-1.5 rounded-md hover:bg-white/10 transition" href="https://youtu.be/OkTJIs1LgiY" target="_blank">
<svg className="lucide lucide-play-circle h-4 w-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</a>
<a aria-label="Visit" className="p-1.5 rounded-md hover:bg-white/10 transition" href="https://youtu.be/OkTJIs1LgiY" target="_blank">
<svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-100">
            YouTube Video
          </h3>
<p className="mt-2 text-sm text-slate-300 flex-1">Role: Actor</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md text-xs text-slate-200 bg-slate-900/40 ring-1 ring-white/10">
              Acting
            </span>
<span className="px-2.5 py-1 rounded-md text-xs text-slate-200 bg-slate-900/40 ring-1 ring-white/10">
              YouTube
            </span>
</div>
</article>
<article className="group rounded-xl ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition p-5 flex flex-col">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-xs text-slate-300">
<svg className="lucide lucide-person-standing h-4 w-4" data-lucide="person-standing" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="5" r="1"></circle><path d="m9 20 3-6 3 6"></path><path d="m6 8 6 2 6-2"></path><path d="M12 10v4"></path></svg>
              Actor
            </div>
<div className="flex items-center gap-2">
<a aria-label="Watch on YouTube" className="p-1.5 rounded-md hover:bg-white/10 transition" href="https://youtu.be/t2TV7L9Pr_A" target="_blank">
<svg className="lucide lucide-play-circle h-4 w-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</a>
<a aria-label="Visit" className="p-1.5 rounded-md hover:bg-white/10 transition" href="https://youtu.be/t2TV7L9Pr_A" target="_blank">
<svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-100">
            YouTube Video
          </h3>
<p className="mt-2 text-sm text-slate-300 flex-1">Role: Actor</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md text-xs text-slate-200 bg-slate-900/40 ring-1 ring-white/10">
              Acting
            </span>
<span className="px-2.5 py-1 rounded-md text-xs text-slate-200 bg-slate-900/40 ring-1 ring-white/10">
              YouTube
            </span>
</div>
</article>
<article className="group rounded-xl ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition p-5 flex flex-col">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-xs text-slate-300">
<svg className="lucide lucide-clapperboard h-4 w-4" data-lucide="clapperboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path><path d="m6.2 5.3 3.1 3.9"></path><path d="m12.4 3.4 3.1 4"></path><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path></svg>
              Director/Editor
            </div>
<div className="flex items-center gap-2">
<a aria-label="Watch on YouTube" className="p-1.5 rounded-md hover:bg-white/10 transition" href="https://youtu.be/RWmzcALrLmY" target="_blank">
<svg className="lucide lucide-play-circle h-4 w-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</a>
<a aria-label="Visit" className="p-1.5 rounded-md hover:bg-white/10 transition" href="https://youtu.be/RWmzcALrLmY" target="_blank">
<svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-100">
            YouTube Video
          </h3>
<p className="mt-2 text-sm text-slate-300 flex-1">
            Role: Director/Editor
          </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md text-xs text-slate-200 bg-slate-900/40 ring-1 ring-white/10">
              Direction
            </span>
<span className="px-2.5 py-1 rounded-md text-xs text-slate-200 bg-slate-900/40 ring-1 ring-white/10">
              Editing
            </span>
<span className="px-2.5 py-1 rounded-md text-xs text-slate-200 bg-slate-900/40 ring-1 ring-white/10">
              YouTube
            </span>
</div>
</article>
<article className="group rounded-xl ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition p-5 flex flex-col">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-xs text-slate-300">
<svg className="lucide lucide-scissors h-4 w-4" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
              Editor
            </div>
<div className="flex items-center gap-2">
<a aria-label="Watch on YouTube" className="p-1.5 rounded-md hover:bg-white/10 transition" href="https://youtu.be/IkSBMUNX-so" target="_blank">
<svg className="lucide lucide-play-circle h-4 w-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</a>
<a aria-label="Visit" className="p-1.5 rounded-md hover:bg-white/10 transition" href="https://youtu.be/IkSBMUNX-so" target="_blank">
<svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-100">
            YouTube Video
          </h3>
<p className="mt-2 text-sm text-slate-300 flex-1">Role: Editor</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md text-xs text-slate-200 bg-slate-900/40 ring-1 ring-white/10">
              Editor
            </span>
<span className="px-2.5 py-1 rounded-md text-xs text-slate-200 bg-slate-900/40 ring-1 ring-white/10">
              YouTube
            </span>
</div>
</article>
<article className="group hover:bg-white/10 transition flex flex-col bg-white/5 ring-white/10 ring-1 rounded-xl pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-xs text-slate-300">
<svg className="lucide lucide-mic h-4 w-4" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
              On-set Sound Recordist/Boom Op
            </div>
<div className="flex items-center gap-2">
<a aria-label="Watch on YouTube" className="p-1.5 rounded-md hover:bg-white/10 transition" href="https://youtu.be/2HdrCBTjuUk" target="_blank">
<svg className="lucide lucide-play-circle h-4 w-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</a>
<a aria-label="Visit" className="p-1.5 rounded-md hover:bg-white/10 transition" href="https://youtu.be/2HdrCBTjuUk" target="_blank">
<svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-100">
            YouTube Video
          </h3>
<p className="mt-2 text-sm text-slate-300 flex-1">
            Role: On-set Sound Recordist/Boom Op
          </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md text-xs text-slate-200 bg-slate-900/40 ring-1 ring-white/10">
              Sound
            </span>
<span className="px-2.5 py-1 rounded-md text-xs text-slate-200 bg-slate-900/40 ring-1 ring-white/10">
              YouTube
            </span>
</div>
</article>
<article className="group hover:bg-white/10 transition flex flex-col cursor-pointer bg-white/5 ring-white/10 ring-1 rounded-xl pt-5 pr-5 pb-5 pl-5" onclick="window.location.href='https://www.youtube.com/watch?v=kLVBcugmt-4'" role="button">
<div className="flex items-center justify-between">
<div className="inline-flex gap-2 text-xs text-slate-300 gap-x-2 gap-y-2 items-center" style={{}}>Assistant Director<svg className="lucide lucide-clapperboard h-4 w-4" data-lucide="clapperboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path><path d="m6.2 5.3 3.1 3.9"></path><path d="m12.4 3.4 3.1 4"></path><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path></svg></div>
<div className="flex items-center gap-2">
<a aria-label="Watch on YouTube" className="p-1.5 rounded-md hover:bg-white/10 transition" href="https://youtu.be/d6GTY4qo9WI" target="_blank">
<svg className="lucide lucide-play-circle h-4 w-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</a>
<a aria-label="Visit" className="p-1.5 rounded-md hover:bg-white/10 transition" href="https://youtu.be/d6GTY4qo9WI" target="_blank">
<svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
<h3 className="text-lg font-semibold text-slate-100 tracking-tight mt-3">
            YouTube Video
          </h3>
<p className="flex-1 text-sm text-slate-300 mt-2" style={{}}>Role: 1st Assistant Director</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md text-xs text-slate-200 bg-slate-900/40 ring-1 ring-white/10">
              Direction
            </span>
<span className="text-xs text-slate-200 bg-slate-900/40 ring-white/10 ring-1 rounded-md pt-1 pr-2.5 pb-1 pl-2.5">Production</span>
<span className="px-2.5 py-1 rounded-md text-xs text-slate-200 bg-slate-900/40 ring-1 ring-white/10">
              YouTube
            </span>
</div>
</article></div>
</section>

<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="my-12 sm:my-16 border-t border-white/10"></div>
</div>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="experience">
<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-100">
        Experience
      </h2>
<div className="mt-6 grid gap-4 sm:gap-6 md:grid-cols-2">
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-5">
<div className="flex items-start justify-between">
<div>
<div className="inline-flex items-center gap-2 text-slate-200 font-medium">
<svg className="lucide lucide-clapperboard h-4 w-4" data-lucide="clapperboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path><path d="m6.2 5.3 3.1 3.9"></path><path d="m12.4 3.4 3.1 4"></path><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path></svg>
                Director / Editor
              </div>
<div className="text-sm text-slate-400 mt-0.5">
                Freelance • Film &amp; Commercial
              </div>
</div>
<div className="text-xs text-slate-400">2021 — Present</div>
</div>
<ul className="mt-3 space-y-2 text-sm text-slate-300">
<li className="flex gap-2">
<span className="text-slate-500">—</span>
              Led narrative shorts from script to final color; selections at
              regional festivals.
            </li>
<li className="flex gap-2">
<span className="text-slate-500">—</span>
              Directed performance-led spots for arts organizations and brands.
            </li>
<li className="flex gap-2">
<span className="text-slate-500">—</span>
              Built nimble crews and lightweight workflows for fast turnarounds.
            </li>
</ul>
</div>
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-5">
<div className="flex items-start justify-between">
<div>
<div className="inline-flex items-center gap-2 text-slate-200 font-medium">
<svg className="lucide lucide-person-standing h-4 w-4" data-lucide="person-standing" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="5" r="1"></circle><path d="m9 20 3-6 3 6"></path><path d="m6 8 6 2 6-2"></path><path d="M12 10v4"></path></svg>
                Performer
              </div>
<div className="text-sm text-slate-400 mt-0.5">
                Stage Collective • Ensemble
              </div>
</div>
<div className="text-xs text-slate-400">2017 — 2021</div>
</div>
<ul className="mt-3 space-y-2 text-sm text-slate-300">
<li className="flex gap-2">
<span className="text-slate-500">—</span>
              Originated roles in devised theatre blending movement and text.
            </li>
<li className="flex gap-2">
<span className="text-slate-500">—</span>
              Toured small venues with post-show workshops and talkbacks.
            </li>
<li className="flex gap-2">
<span className="text-slate-500">—</span>
              Collaborated closely with directors on blocking and beats.
            </li>
</ul>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="my-12 sm:my-16 border-t border-white/10"></div>
</div>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24" id="contact">
<div className="rounded-2xl ring-1 ring-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 sm:p-8">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-100">
              Let’s create something memorable
            </h3>
<p className="mt-2 text-sm text-slate-300">
              Share your project, timeline, and scope. I typically respond
              within 24 hours.
            </p>
</div>
<div className="flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-slate-900 bg-slate-100 hover:bg-white transition ring-1 ring-white/10" href="mailto:alex@example.com">
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
              Email me
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-slate-100 bg-white/5 hover:bg-white/10 transition ring-1 ring-white/10" href="https://vimeo.com/" target="_blank">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
              Watch reel
              <svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<p className="text-xs text-slate-400">
          ©
          <span id="year">2025</span>
          Yash Gandhi. All rights reserved.
        </p>
<div className="flex items-center gap-3">
<a aria-label="Instagram" className="p-1.5 rounded-md hover:bg-white/10 transition" href="https://instagram.com/" target="_blank">
<svg className="lucide lucide-instagram h-4 w-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="YouTube" className="p-1.5 rounded-md hover:bg-white/10 transition" href="https://youtube.com/" target="_blank">
<svg className="lucide lucide-youtube h-4 w-4" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
<a aria-label="X" className="p-1.5 rounded-md hover:bg-white/10 transition" href="https://twitter.com/" target="_blank">
<svg className="lucide lucide-twitter h-4 w-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>
</div>
</footer>


    </>
  );
}
