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
      

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-violet-600/20 blur-[120px] mix-blend-screen"></div>
<div className="absolute top-[30%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-emerald-600/10 blur-[120px] mix-blend-screen"></div>
<div className="absolute bottom-[-10%] left-[30%] w-[60vw] h-[60vw] rounded-full bg-blue-600/10 blur-[120px] mix-blend-screen"></div>
</div>

<nav className="relative z-10 border-b border-zinc-900/50 bg-zinc-950/80 backdrop-blur-md sticky top-0">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter text-zinc-100" href="#">CNFRNC</a>
<div className="flex items-center gap-6">
<a className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors hidden md:block" href="#speakers">Speakers</a>
<a className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors hidden md:block" href="#rsvp">Registration</a>
<a className="text-sm font-medium bg-zinc-100 text-zinc-950 px-4 py-2 rounded-md hover:bg-white transition-colors" href="#rsvp">
                    RSVP Now
                </a>
</div>
</div>
</nav>
<main className="relative z-10 flex-grow">

<section className="max-w-6xl mx-auto px-6 pt-24 pb-8 md:pt-32 md:pb-16 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/10 mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.15)]">
<span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
<span className="text-xs font-medium text-violet-200">Live Virtual Summit • Oct 24, 2024</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500 max-w-4xl leading-tight">
                The future of product creation.
            </h1>
<p className="mt-6 text-base md:text-lg text-zinc-400 max-w-2xl font-light">
                Join industry leaders for an exclusive half-day virtual event exploring the intersection of design, engineering, and artificial intelligence.
            </p>

<div className="mt-12 border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-xl rounded-2xl p-6 md:p-8 inline-block shadow-2xl shadow-violet-900/10 relative z-20">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-6 text-center">Event begins in</p>
<div className="flex items-center gap-4 md:gap-8 justify-center">
<div className="flex flex-col items-center min-w-[4rem]">
<span className="text-4xl md:text-5xl font-medium tracking-tighter font-mono text-zinc-100" id="days">14</span>
<span className="text-xs text-zinc-500 mt-2">Days</span>
</div>
<span className="text-2xl text-zinc-700 pb-5">:</span>
<div className="flex flex-col items-center min-w-[4rem]">
<span className="text-4xl md:text-5xl font-medium tracking-tighter font-mono text-zinc-100" id="hours">08</span>
<span className="text-xs text-zinc-500 mt-2">Hours</span>
</div>
<span className="text-2xl text-zinc-700 pb-5">:</span>
<div className="flex flex-col items-center min-w-[4rem]">
<span className="text-4xl md:text-5xl font-medium tracking-tighter font-mono text-zinc-100" id="minutes">45</span>
<span className="text-xs text-zinc-500 mt-2">Mins</span>
</div>
<span className="text-2xl text-zinc-700 pb-5 hidden md:block">:</span>
<div className="flex flex-col items-center min-w-[4rem] hidden md:flex">
<span className="text-4xl md:text-5xl font-medium tracking-tighter font-mono text-violet-400" id="seconds">00</span>
<span className="text-xs text-zinc-500 mt-2">Secs</span>
</div>
</div>
</div>

<div className="mt-[-4rem] relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden border border-zinc-800/50 shadow-2xl z-10">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10 pointer-events-none"></div>
<img alt="Abstract rendering of product creation" className="w-full h-48 md:h-80 object-cover opacity-90" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-16 md:py-24" id="rsvp">
<div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl group shadow-2xl shadow-blue-900/10">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 opacity-100 transition-opacity duration-700"></div>
<div className="relative p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">

<div className="flex-1 space-y-6">

<div className="w-full aspect-[16/9] rounded-xl overflow-hidden border border-zinc-800/80 relative shadow-lg">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent z-10 mix-blend-overlay"></div>
<img alt="Digital Playbook Visual" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-zinc-950/80 backdrop-blur-md border border-zinc-800 px-3 py-1.5 rounded-lg">
<iconify-icon className="text-blue-400" height="16" icon="solar:book-bookmark-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-medium text-zinc-200">2024 Playbook Included</span>
</div>
</div>
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-3">Claim your spot.</h2>
<p className="text-sm text-zinc-400 leading-relaxed mb-4">
                                Register today to secure your attendance and instantly receive our exclusive <span className="text-zinc-200 font-medium">2024 Product Engineering Playbook</span> straight to your inbox.
                            </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-zinc-400">
<div className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mt-0.5 shrink-0">
<iconify-icon className="text-blue-400" height="12" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
                                    Full access to all keynote sessions and panels.
                                </li>
<li className="flex items-start gap-3 text-sm text-zinc-400">
<div className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mt-0.5 shrink-0">
<iconify-icon className="text-blue-400" height="12" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
                                    40+ pages of actionable frameworks (PDF).
                                </li>
</ul>
</div>
</div>

<div className="w-full md:w-[400px] bg-zinc-950 border border-zinc-800 rounded-2xl p-6 md:p-8 shadow-xl relative z-10">
<form className="space-y-4" onsubmit="event.preventDefault(); document.getElementById('success-state').classList.remove('hidden'); this.classList.add('hidden');">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-zinc-400" htmlFor="name">Full Name</label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all placeholder:text-zinc-600" id="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-zinc-400" htmlFor="email">Work Email</label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all placeholder:text-zinc-600" id="email" placeholder="jane@company.com" required="" type="email"/>
</div>
<label className="flex items-start gap-3 pt-2 cursor-pointer group">
</label></form></div></div></div></section></main>
    </>
  );
}
