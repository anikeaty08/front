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
      

<nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-sm font-medium tracking-tight uppercase text-white hover:text-zinc-300 transition-colors" href="#">
                Flow Impact Studio
            </a>
<a className="text-xs font-medium text-zinc-500 hover:text-white transition-colors" href="#contact">
                Contact
            </a>
</div>
</nav>

<header className="relative w-full h-screen min-h-[800px] flex items-center overflow-hidden bg-black">

<div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">

<div className="absolute inset-0 bg-black">

<div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/4"></div>

<div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-orange-900/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
</div>

<div className="absolute top-1/2 left-1/2 w-[200vw] h-[600px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">

<div className="absolute right-[50%] w-[50vw] h-[300px] origin-right rotate-[15deg] animate-[shimmer_8s_infinite_ease-in-out]">
<div className="absolute inset-0 cosmic-ray-blue opacity-60"></div>
</div>
<div className="absolute right-[50%] w-[50vw] h-[200px] origin-right -rotate-[10deg] animate-[shimmer_7s_infinite_ease-in-out_1s]">
<div className="absolute inset-0 cosmic-ray-orange opacity-40"></div>
</div>
<div className="absolute right-[48%] w-[60vw] h-[100px] origin-right rotate-[5deg] blur-3xl">
<div className="absolute inset-0 bg-cyan-500/20"></div>
</div>

<div className="absolute left-[50%] w-[50vw] h-[300px] origin-left -rotate-[15deg] animate-[shimmer_8s_infinite_ease-in-out_0.5s]">
<div className="absolute inset-0 cosmic-ray-orange opacity-80"></div>
</div>
<div className="absolute left-[50%] w-[50vw] h-[150px] origin-left rotate-[5deg] animate-[shimmer_6s_infinite_ease-in-out_2s]">
<div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-transparent blur-[50px] mix-blend-screen opacity-70"></div>
</div>
<div className="absolute left-[48%] w-[60vw] h-[80px] origin-left -rotate-[8deg] blur-3xl">
<div className="absolute inset-0 bg-amber-500/30"></div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-screen">

<div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(255,100,0,0.3),transparent_40%,rgba(0,100,255,0.2),transparent_60%)] animate-[spin-slow_20s_linear_infinite] blur-3xl"></div>
<div className="absolute inset-10 rounded-full bg-[conic-gradient(from_180deg,transparent,rgba(255,160,0,0.4),transparent_30%)] animate-[spin-reverse-slow_25s_linear_infinite] blur-2xl"></div>
</div>

<div className="absolute top-1/2 left-1/2 w-48 h-48 md:w-64 md:h-64 bg-black rounded-full -translate-x-1/2 -translate-y-1/2 z-10 orb-shadow">

<div className="absolute inset-0 rounded-full ring-1 ring-white/10"></div>

<div className="absolute -right-4 top-1/2 w-8 h-32 -translate-y-1/2 bg-orange-500/40 blur-[20px] rounded-full"></div>

<div className="absolute -left-4 top-1/2 w-8 h-32 -translate-y-1/2 bg-blue-500/30 blur-[20px] rounded-full"></div>
</div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150"></div>

<div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/60 z-20"></div>
</div>

<div className="relative z-30 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
<div className="hidden lg:block">

</div>
<div className="flex flex-col justify-center items-start lg:pl-12 pt-32 lg:pt-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-950/30 backdrop-blur-sm mb-8 shadow-[0_0_15px_rgba(255,100,0,0.1)]">
<div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"></div>
<span className="text-[10px] font-medium uppercase tracking-widest text-orange-200/80">System Active</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tighter leading-[1.1] mb-8 drop-shadow-2xl">
                    Structure for people<br/>in motion.
                </h1>
<p className="text-lg text-zinc-400 font-normal leading-relaxed max-w-md mb-10 drop-shadow-lg">
                    We design and launch simple systems for events, venues and creators — so things work without chaos.
                </p>
<div className="flex items-center gap-6">
<a className="group inline-flex items-center gap-2 px-6 py-3.5 bg-white text-black text-sm font-medium rounded hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]" href="#contact">
                        Start a conversation
                        <span className="iconify group-hover:translate-x-0.5 transition-transform" data-height="16" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 relative bg-black z-20">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
<div className="md:col-span-4 sticky top-24 h-fit">
<h2 className="text-xs font-medium text-zinc-600 uppercase tracking-widest mb-4">Services</h2>
<p className="text-2xl font-medium tracking-tight leading-tight text-white">
                    Calm in the<br/>backend.
                </p>
<p className="mt-4 text-sm text-zinc-500 max-w-xs">
                    We replace makeshift spreadsheets and frantic emails with systems that quietly work.
                </p>
</div>
<div className="md:col-span-8 grid grid-cols-1 gap-px bg-zinc-900 border border-zinc-900 rounded-lg overflow-hidden">

<div className="bg-black p-10 group hover:bg-zinc-950 transition-colors duration-500 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-orange-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
<div className="flex items-start justify-between mb-6">
<span className="iconify text-zinc-600 group-hover:text-white transition-colors" data-height="24" data-icon="lucide:layout" data-width="24"></span>
<span className="text-xs font-mono text-zinc-700">01</span>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-3">Event &amp; Venue Pages</h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-md">
                        Digital homes for physical spaces. Fast, dark-mode optimized, and focused purely on getting the visitor to the destination.
                    </p>
</div>

<div className="bg-black p-10 group hover:bg-zinc-950 transition-colors duration-500 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-orange-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
<div className="flex items-start justify-between mb-6">
<span className="iconify text-zinc-600 group-hover:text-white transition-colors" data-height="24" data-icon="lucide:ticket" data-width="24"></span>
<span className="text-xs font-mono text-zinc-700">02</span>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-3">Registration Systems</h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-md">
                        Frictionless ticketing and booking flows. We strip away the unnecessary fields and respect the user's time.
                    </p>
</div>

<div className="bg-black p-10 group hover:bg-zinc-950 transition-colors duration-500 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-orange-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
<div className="flex items-start justify-between mb-6">
<span className="iconify text-zinc-600 group-hover:text-white transition-colors" data-height="24" data-icon="lucide:layers" data-width="24"></span>
<span className="text-xs font-mono text-zinc-700">03</span>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-3">Operational Workflows</h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-md">
                        Automating the repetitive backend tasks—confirmations, reminders, and data syncing—so your team can focus on the floor.
                    </p>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-zinc-950/30 relative z-20">
<div className="max-w-7xl mx-auto px-6 py-32">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white mb-6">
                        Complexity reduced<br/>to the essential.
                    </h2>
</div>
<div>
<p className="text-zinc-500 leading-relaxed text-lg font-light">
                        Most problems in events and venues aren't creative problems; they are structural ones. We build the grid so you can paint the picture.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto relative z-20 bg-black">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
<h2 className="text-xs font-medium text-zinc-600 uppercase tracking-widest">Collaborators</h2>
<div className="h-px flex-grow mx-8 bg-zinc-900 hidden md:block"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group border-t border-white/10 pt-8 hover:border-white/30 transition-colors duration-500">
<span className="block mb-4 text-zinc-700 group-hover:text-orange-400 transition-colors">
<span className="iconify" data-height="20" data-icon="lucide:map-pin" data-width="20"></span>
</span>
<h3 className="text-base font-medium text-white mb-2">Venues &amp; Spaces</h3>
<p className="text-sm text-zinc-500">
                    Clubs, galleries, and retreat centers needing clear booking engines.
                </p>
</div>
<div className="group border-t border-white/10 pt-8 hover:border-white/30 transition-colors duration-500">
<span className="block mb-4 text-zinc-700 group-hover:text-orange-400 transition-colors">
<span className="iconify" data-height="20" data-icon="lucide:calendar" data-width="20"></span>
</span>
<h3 className="text-base font-medium text-white mb-2">Event Producers</h3>
<p className="text-sm text-zinc-500">
                    Organizers who need the backend to be as seamless as the show.
                </p>
</div>
<div className="group border-t border-white/10 pt-8 hover:border-white/30 transition-colors duration-500">
<span className="block mb-4 text-zinc-700 group-hover:text-orange-400 transition-colors">
<span className="iconify" data-height="20" data-icon="lucide:user" data-width="20"></span>
</span>
<h3 className="text-base font-medium text-white mb-2">Independent Creators</h3>
<p className="text-sm text-zinc-500">
                    Individuals launching pop-ups without a technical team.
                </p>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 bg-gradient-to-b from-black to-zinc-950 relative z-20" id="contact">
<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 blur-[100px] rounded-full"></div>
</div>
<div className="max-w-2xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-8 text-white">
                Ready to stabilize?
            </h2>
<p className="text-zinc-500 text-lg mb-12 font-light">
                If you are ready to move from improvisation to systems, let's have a conversation.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-black text-sm font-medium rounded hover:bg-zinc-200 transition-all" href="mailto:hello@flowimpact.studio">
                    Start a conversation
                </a>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 px-6 bg-black relative z-20">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-xs font-medium tracking-widest uppercase text-zinc-500">Flow Impact Studio</span>
</div>
<div className="flex gap-8">
<a className="text-xs text-zinc-600 hover:text-white transition-colors" href="#">Method</a>
<a className="text-xs text-zinc-600 hover:text-white transition-colors" href="#">Services</a>
<a className="text-xs text-zinc-600 hover:text-white transition-colors" href="mailto:hello@flowimpact.studio">Contact</a>
</div>
<div className="text-xs text-zinc-800">
                © 2024. System active.
            </div>
</div>
</footer>

    </>
  );
}
