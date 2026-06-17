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
      

<aside className="w-full md:w-64 bg-neutral-950 border-b md:border-b-0 md:border-r border-neutral-900 flex-shrink-0 flex flex-col h-auto md:h-screen z-20 relative">
<div className="flex md:justify-start gap-4 pt-6 pr-6 pb-6 pl-6 gap-x-4 gap-y-4 items-center justify-between">
<span className="text-white font-semibold tracking-tighter text-lg uppercase font-sans">Aether</span>
<div className="md:hidden flex items-center gap-2">
<span className="text-xs uppercase tracking-widest text-neutral-500 font-sans">Live View</span>
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
</div>
</div>
<nav className="flex-1 hidden md:flex flex-col overflow-y-auto pr-4 pl-4 gap-x-1 gap-y-1">
<div className="text-xs uppercase tracking-widest text-neutral-600 font-medium px-2 py-4 mt-4 font-sans">Database</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-neutral-900 text-neutral-200" href="#">
<iconify-icon icon="solar:cpu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium font-sans">Mechanism</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-neutral-900/50 transition-colors" href="#">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-sans">Shipwreck</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-neutral-900/50 transition-colors" href="#">
<iconify-icon icon="solar:history-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-sans">Timeline</span>
</a>
</nav>
<div className="p-6 border-t border-neutral-900 hidden md:block">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-neutral-500 font-sans">Hologram Overlay</span>

<div className="relative inline-flex h-4 w-7 cursor-pointer items-center rounded-full bg-neutral-700 transition-colors">
<span className="inline-block h-3 w-3 translate-x-3.5 transform rounded-full bg-white transition-transform"></span>
</div>
</div>
<p className="text-xs text-neutral-600 font-sans">Toggle structural wireframe.</p>
</div>
</aside>

<main className="flex-1 overflow-y-auto scroll-smooth h-screen relative">

<div className="absolute top-0 left-0 w-full h-[60vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-neutral-950 to-neutral-950 pointer-events-none"></div>
<div className="md:py-24 z-10 max-w-4xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 relative">

<header className="mb-16">
<div className="flex items-center gap-3 mb-6">
<span className="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-500/90 text-xs font-medium uppercase tracking-widest border border-indigo-500/20 font-sans">Artifact #89-A</span>
<span className="text-xs text-neutral-500 flex items-center gap-1 font-sans"><iconify-icon icon="solar:map-linear"></iconify-icon> Aegean Sea</span>
</div>
<h1 className="md:text-5xl text-4xl text-white tracking-tight mb-4 font-normal font-merriweather">The Antikythera Mechanism</h1>
<p className="text-lg text-neutral-400 font-light max-w-2xl leading-relaxed font-sans">
                    An ancient Greek analog computer retrieved from the abyss. It tracked the heavens with terrifying precision, rewriting the entire history of human technology.
                </p>
</header>

<section className="mb-16 relative">
<div className="absolute -left-4 top-0 w-1 h-full bg-neutral-800 rounded-full">
<div className="w-full h-1/3 bg-indigo-500/50 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
</div>
<h2 className="text-xl text-white tracking-tight flex items-center gap-2 mb-4 font-normal font-merriweather">
<iconify-icon className="text-indigo-500/80" icon="solar:moon-fog-linear"></iconify-icon> Inspecting the Object
                </h2>
<div className="space-y-4 text-neutral-300 leading-relaxed font-light text-base bg-neutral-900/30 p-6 rounded-2xl border border-neutral-800/50 backdrop-blur-sm">
<p className="font-sans">As you rotate the virtual model, the encrusted seabed falls away, revealing a complex web of corroded bronze gears. Zooming in on the back plate, microscopic Greek characters emerge from the shadows—it's a user manual etched into the metal.</p>
<p className="font-sans">You manipulate the crank. Suddenly, the internal mechanisms align. Built over 2,000 years ago, this device didn't just tell time; it calculated eclipses, planetary orbits, and the lunar cycle. It is a ghost from a timeline of technology that was suddenly erased, sleeping in a sunken Roman ship until sponge divers stumbled upon it in the dark.</p>
</div>
</section>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

<div className="hover:border-neutral-700 transition-colors bg-neutral-900/50 border-neutral-800/80 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<h3 className="text-lg text-white font-semibold tracking-tight flex items-center gap-2 mb-4 font-sans">
<iconify-icon className="text-neutral-500" icon="solar:eye-scan-linear"></iconify-icon> Unsolved Secrets
                    </h3>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-600 mt-1 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-sm font-light font-sans"><strong className="text-neutral-200 font-medium font-sans">The Creator:</strong> Was it built by Archimedes, or Hipparchus? The exact genius remains a ghost.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-600 mt-1 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-sm font-light font-sans"><strong className="text-neutral-200 font-medium font-sans">The Missing Century:</strong> Why did this level of gear technology vanish completely for over a thousand years?</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-600 mt-1 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-sm font-light font-sans"><strong className="text-neutral-200 font-medium font-sans">Deep Sea Siblings:</strong> If this was on a cargo ship, are there identical devices still buried under the Mediterranean sand?</span>
</li>
</ul>
</div>

<div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/80 hover:border-neutral-700 transition-colors">
<h3 className="text-lg text-white font-semibold tracking-tight flex items-center gap-2 mb-4 font-sans">
<iconify-icon className="text-neutral-500" icon="solar:bolt-linear"></iconify-icon> Impossible Facts
                    </h3>
<ul className="space-y-4 text-sm font-light">
<li className="border-b border-neutral-800 pb-3 font-sans">
<span className="block text-neutral-200 font-medium mb-1 font-sans">Decades of Foresight</span>
                            It could predict the exact color and time of a lunar eclipse decades before it happened.
                        </li>
<li className="border-b border-neutral-800 pb-3 font-sans">
<span className="block text-neutral-200 font-medium mb-1 font-sans">The Olympic Dial</span>
                            Among cosmic calculations, a small sub-dial specifically tracked the four-year cycle of the ancient Olympic Games.
                        </li>
<li className="font-sans">
<span className="block text-neutral-200 font-medium mb-1 font-sans">Prime Engineering</span>
                            It uses a gear with exactly 127 teeth (a prime number) to map the moon's elliptical orbit—a mathematical marvel.
                        </li>
</ul>
</div>
</div>

<section className="mb-16">
<h2 className="text-xl text-white tracking-tight flex items-center gap-2 mb-8 font-normal font-merriweather">
<iconify-icon className="text-neutral-500" icon="solar:history-2-linear"></iconify-icon> Data Logs
                </h2>
<div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-neutral-800 before:to-transparent">
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-700 bg-neutral-900 text-neutral-400 group-hover:text-indigo-500 group-hover:border-indigo-500/50 transition-colors shadow-[0_0_0_4px_#09090b] md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shrink-0">
<iconify-icon icon="solar:hammer-linear"></iconify-icon>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-neutral-800 bg-neutral-900/30 backdrop-blur-sm">
<div className="flex items-center justify-between mb-1">
<span className="font-medium text-neutral-200 text-sm font-sans">150–100 BC</span>
</div>
<p className="text-sm font-light text-neutral-500 font-sans">Constructed in the ancient Greek world, likely on the island of Rhodes.</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-700 bg-neutral-900 text-neutral-400 group-hover:text-indigo-500 group-hover:border-indigo-500/50 transition-colors shadow-[0_0_0_4px_#09090b] md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shrink-0">
<iconify-icon icon="solar:waterdrops-linear"></iconify-icon>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-neutral-800 bg-neutral-900/30 backdrop-blur-sm">
<div className="flex items-center justify-between mb-1">
<span className="font-medium text-neutral-200 text-sm font-sans">60 BC</span>
</div>
<p className="text-sm font-light text-neutral-500 font-sans">A massive Roman grain ship sinks in a violent storm off Antikythera, taking the mechanism to the deep.</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-700 bg-neutral-900 text-neutral-400 group-hover:text-indigo-500 group-hover:border-indigo-500/50 transition-colors shadow-[0_0_0_4px_#09090b] md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shrink-0">
<iconify-icon icon="solar:user-rounded-linear"></iconify-icon>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-neutral-800 bg-neutral-900/30 backdrop-blur-sm">
<div className="flex items-center justify-between mb-1">
<span className="font-medium text-neutral-200 text-sm font-sans">1901 AD</span>
</div>
<p className="text-sm font-light text-neutral-500 font-sans">Sponge divers discover the wreckage, pulling up a calcified lump that splits open to reveal gears.</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-700 bg-neutral-900 text-neutral-400 group-hover:text-indigo-500 group-hover:border-indigo-500/50 transition-colors shadow-[0_0_0_4px_#09090b] md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shrink-0">
<iconify-icon icon="solar:scanner-linear"></iconify-icon>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-neutral-800 bg-neutral-900/30 backdrop-blur-sm">
<div className="flex items-center justify-between mb-1">
<span className="font-medium text-neutral-200 text-sm font-sans">2006 AD</span>
</div>
<p className="text-sm font-light text-neutral-500 font-sans">Advanced 3D X-ray tomography peers inside the rock, finally decoding its astronomical functions.</p>
</div>
</div>
</div>
</section>

<section className="mb-16">
<h2 className="text-xl text-white tracking-tight flex items-center gap-2 mb-4 font-normal font-merriweather">
<iconify-icon className="text-neutral-500" icon="solar:clapperboard-play-linear"></iconify-icon> Media Asset Log
                </h2>
<div className="bg-black/50 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl relative group">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10 pointer-events-none"></div>
<div className="p-8 relative z-20 flex flex-col justify-end h-full min-h-[240px]">
<div className="absolute top-4 right-4 flex items-center gap-2 text-xs text-neutral-500 bg-neutral-900/80 px-2 py-1 rounded backdrop-blur-md border border-neutral-800 font-sans">
<iconify-icon icon="solar:timer-linear"></iconify-icon> 00:30
                        </div>
<div className="space-y-4">
<div className="flex gap-4">
<span className="text-xs uppercase tracking-widest text-neutral-500 font-medium w-16 shrink-0 mt-1 font-sans">Hook</span>
<p className="text-sm text-neutral-200 italic font-sans">"Look at this lump of rock. What if I told you you're staring at a 2,000-year-old computer?"</p>
</div>
<div className="flex gap-4 border-t border-neutral-800/50 pt-4">
<span className="text-xs uppercase tracking-widest text-neutral-500 font-medium w-16 shrink-0 mt-1 font-sans">Reveal</span>
<p className="text-sm text-neutral-300 font-light font-sans">"Found in a Roman shipwreck, the Antikythera Mechanism uses 37 microscopic bronze gears to map the cosmos. By all accounts of history... it shouldn't exist."</p>
</div>
<div className="flex gap-4 border-t border-neutral-800/50 pt-4">
<span className="text-xs uppercase tracking-widest text-indigo-500/80 font-medium w-16 shrink-0 mt-1 font-sans">Drop</span>
<p className="text-sm text-white font-medium font-sans">"But if the ancients possessed this level of technology... what else did they build that we haven't found yet?"</p>
</div>
</div>
</div>
</div>
</section>

<section className="">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl text-white tracking-tight flex items-center gap-2 font-normal font-merriweather">
<iconify-icon className="text-neutral-500" icon="solar:radar-linear"></iconify-icon> Cross-Referenced Anomalies
                    </h2>
</div>
<div className="flex flex-col md:flex-row gap-4">
<a className="flex-1 p-4 rounded-xl bg-neutral-900/30 border border-neutral-800 hover:bg-neutral-900 transition-all group" href="#">
<div className="flex items-center justify-between mb-2">
<h4 className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors font-sans">The Baghdad Battery</h4>
<iconify-icon className="group-hover:text-neutral-300 transition-colors text-neutral-600" height="16" icon="solar:arrow-right-up-linear" style={{color: 'rgb(212, 212, 212)'}} width="16"></iconify-icon>
</div>
<p className="text-xs text-neutral-500 font-light font-sans">Terracotta pots from 250 BC containing copper and iron. An ancient power source?</p>
</a>
<a className="flex-1 p-4 rounded-xl bg-neutral-900/30 border border-neutral-800 hover:bg-neutral-900 transition-all group" href="#">
<div className="flex items-center justify-between mb-2">
<h4 className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors font-sans">Voynich Manuscript</h4>
<iconify-icon className="text-neutral-600 group-hover:text-neutral-300 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<p className="text-xs font-light text-neutral-500 font-sans">An illustrated codex hand-written in an unknown writing system from the 15th century.</p>
</a>
</div>
</section>
<footer className="mt-24 pt-8 border-t border-neutral-900 text-center text-xs text-neutral-600 font-light font-sans">
                END OF RECORD. AWAITING NEXT INPUT.
            </footer>
</div>
</main>

    </>
  );
}
