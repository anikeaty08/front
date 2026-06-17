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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-sm font-semibold tracking-tighter text-white uppercase flex items-center gap-2 hover:opacity-80 transition-opacity" href="#">
<span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></span>
                Mere Stellar
            </a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#leadership">Leadership</a>
<a className="hover:text-white transition-colors" href="#yoga">Wellbeing</a>
<a className="hover:text-white transition-colors" href="#music">Music</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#contact">
                Book Now
                <svg aria-hidden="true" className="iconify iconify--lucide" data-height="14" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>

<button className="md:hidden text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:menu" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<section className="min-h-screen flex hero-gradient pt-16 relative items-center justify-center">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center z-10 fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-wider text-neutral-300 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Artist &amp; Visionary
            </div>
<h1 className="md:text-7xl lg:text-8xl leading-none glow-text text-5xl font-semibold text-white tracking-tighter mb-6">
                Soft power.<br/>Clear vision.
            </h1>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-t border-white/5" id="leadership">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-2xl">
<h2 className="md:text-4xl text-3xl font-semibold text-white mb-4" style={{}}>Leadership of the new era</h2>
<p className="text-lg text-neutral-400">Soft, clear, and rooted. Milja is a leader, musician, kundalini yoga teacher, and an articulate speaker drawing from mindfulness and creativity.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl hover:border-white/20 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:mic-2" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m11 7.601l-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"></path><path d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2s-2.775-3.369-1.5-4.5"></path><circle cx="16" cy="7" r="5"></circle></g></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3" style={{}}>Creative Economy Specialist</h3>
<p className="leading-relaxed text-sm text-neutral-400 mb-6">
                        Expertise in creative economy and intuitive leadership. Representing the startup voice and FIBAN (Europe's largest angel investor network) in the Creative Economy Advisory Board.
                    </p>
<div className="text-xs text-neutral-500 font-mono border-white/5 border-t mt-auto pt-4">PR, Marketing &amp; Funding expert in the startup sector and film industry.</div>
</div>

<div className="glass-card p-8 rounded-2xl hover:border-white/20 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:message-square" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3" style={{}}>Speaker &amp; Host</h3>
<p className="leading-relaxed text-sm text-neutral-400 mb-6">
                        Journalistic approach centered on genuine business conversations. Bringing out the stories behind products and the humanity within business.
                    </p>
<div className="text-xs text-neutral-500 font-mono border-white/5 border-t mt-auto pt-4">Experience: Suomi Areena, Investor 2024 and 2025, FiBAN investors &amp; startup events,  Founder of 'Tarinaklubi Open Mic'.</div>
</div>

<div className="glass-card p-8 rounded-2xl hover:border-white/20 transition-colors group" id="yoga">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:sparkles" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Intuition, Yoga &amp; Leadership</h3>
<p className="leading-relaxed text-sm text-neutral-400 mb-6">
                        Graduating Kundalini Yoga Teacher (2025). Bringing mindfulness skills to new age leadership and workplace wellbeing.
                    </p>
<div className="text-xs text-neutral-500 font-mono mt-auto pt-4 border-t border-white/5">
                        Tailored relaxation sessions for teams (min. 4 people).
                    </div>
</div>
</div>
</div>
</section>

<section className="md:py-32 border-white/5 border-t pt-24 pb-24 relative" id="music">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 items-start">

<div className="space-y-8">
<div className="grid grid-cols-2 gap-4">
</div>
</div>

<div className="flex flex-col justify-center h-full space-y-10">
<div className="">
<h2 className="md:text-4xl text-3xl font-semibold text-white mb-6">The Artist</h2>
<p className="leading-relaxed text-neutral-400 mb-6">An independent artist sharing deep soul stories and emotions through sound and intuitive painting, rooted in experimental pop and soul expression. </p>
</div>
<div className="space-y-6">
<div className="border-l border-white/10 pl-6">
<h3 className="text-lg font-medium text-white mb-2">Known For</h3>
<p className="text-sm text-neutral-500">Mere Stellar (solo), Milja Inkeri (solo), Antti Kokkomäki &amp; Tammikuun Lapset, Kailo. Features with Raide4, Painikerho, Planeetta 9, The Other.</p>
</div>
<div className="border-l border-white/10 pl-6">
<h3 className="text-lg font-medium text-white mb-2">Origins</h3>
<p className="text-sm text-neutral-500">Idols 2007 Semifinalist (Top 24, MTV3) and over 2 million YouTube views (2006-2008).</p>
</div>
</div>
<div className="flex gap-4 pt-4">
<button className="flex items-center gap-2 text-sm text-white hover:text-indigo-400 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:headphones" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Listen on Spotify
                        </button>
<button className="flex items-center gap-2 text-sm text-white hover:text-indigo-400 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:youtube" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15l5-3l-5-3z"></path></g></svg>
                            Watch Videos
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24 relative" id="contact">
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-white mb-4">Connect</h2>
<p className="text-neutral-400">Speaker requests, coaching, or creative collaborations.</p>
</div>
<form className="space-y-8 backdrop-blur-sm bg-white/0 p-2 md:p-8 rounded-2xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="group">
<label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 group-focus-within:text-white transition-colors">Name</label>
<input className="input-reset" placeholder="Your name" type="text"/>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 group-focus-within:text-white transition-colors">Email</label>
<input className="input-reset" placeholder="Your email" type="email"/>
</div>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 group-focus-within:text-white transition-colors">Topic</label>
<div className="relative">
<select className="input-reset appearance-none bg-transparent cursor-pointer">
<option className="bg-neutral-900">Speaking Request</option>
<option className="bg-neutral-900">Event Hosting</option>
<option className="bg-neutral-900">Yoga / Mindfulness</option>
<option className="bg-neutral-900">Music / PR</option>
<option className="bg-neutral-900">Other</option>
</select>
<svg aria-hidden="true" className="iconify absolute right-0 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none iconify--lucide" data-height="16" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 group-focus-within:text-white transition-colors">Message</label>
<textarea className="input-reset resize-none" placeholder="How can we work together?" rows="4"></textarea>
</div>
<div className="pt-4 flex items-center justify-between">
<button className="hover:bg-neutral-200 transition-colors flex gap-2 text-sm font-medium text-black bg-white rounded-full pt-3 pr-8 pb-3 pl-8 gap-x-2 gap-y-2 items-center" type="button">
                        Send Message
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:arrow-up-right" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</form>
</div>
</section>

<footer className="border-t border-white/10 py-12 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm font-semibold tracking-tighter text-white uppercase flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-neutral-700"></span>
                Mere Stellar
            </div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:instagram" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:linkedin" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path className="" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:youtube" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15l5-3l-5-3z"></path></g></svg>
</a>
</div>
<div className="text-xs text-neutral-600">© 2026 Mere Stellar. All rights reserved.</div>
</div>
</footer>

    </>
  );
}
