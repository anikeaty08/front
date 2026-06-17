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



        // 1. Text Clip Slide Down Animation
        const heroText = "Synthesize Reality";
        const titleContainer = document.getElementById('hero-title');
        const words = heroText.split(' ');
        let charDelay = 0;

        words.forEach(word => {
            const wordDiv = document.createElement('div');
            wordDiv.className = 'flex';
            word.split('').forEach(char => {
                const charWrapper = document.createElement('span');
                charWrapper.className = 'inline-flex overflow-hidden';
                
                const charInner = document.createElement('span');
                charInner.textContent = char;
                charInner.className = 'inline-block opacity-0';
                
                charWrapper.appendChild(charInner);
                wordDiv.appendChild(charWrapper);

                // Native Web Animations API
                charInner.animate([
                    { transform: 'translateY(-100%)', opacity: 0 },
                    { transform: 'translateY(0)', opacity: 1 }
                ], {
                    duration: 700,
                    delay: charDelay * 45,
                    fill: 'forwards',
                    easing: 'cubic-bezier(0.22, 1, 0.36, 1)'
                });
                
                charDelay++;
            });
            titleContainer.appendChild(wordDiv);
        });

        // 2. Marquee Infinite Loop
        const marqueeInner = document.getElementById('marquee-inner');
        marqueeInner.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-50%)' }
        ], {
            duration: 35000,
            iterations: Infinity,
            easing: 'linear'
        });

        // 3. Suble Flashlight Hover Effect
        const cards = document.querySelectorAll('.flash-card');
        const featuresSection = document.getElementById('features');

        featuresSection.addEventListener('mousemove', (e) => {
            for (const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            }
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
      

<div className="fixed inset-0 z-0 pointer-events-none flex justify-around opacity-5">
<div className="h-full w-px bg-white"></div>
<div className="h-full w-px bg-white hidden sm:block"></div>
<div className="h-full w-px bg-white hidden md:block"></div>
<div className="h-full w-px bg-white hidden lg:block"></div>
<div className="h-full w-px bg-white hidden xl:block"></div>
</div>

<nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-zinc-950/70 backdrop-blur-xl">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
<a className="flex items-center gap-2 text-zinc-100 transition-opacity hover:opacity-80" href="#">
<iconify-icon className="text-xl" icon="solar:infinity-linear"></iconify-icon>
<span className="text-lg font-medium tracking-tighter">AEXOS</span>
</a>
<div className="hidden items-center gap-8 md:flex">
<a className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100" href="#">Platform</a>
<a className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100" href="#">Solutions</a>
<a className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100" href="#">Developers</a>
</div>
<button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-px text-sm font-medium text-white shadow-sm shadow-zinc-950">
<span className="absolute inset-[-1000%] animate-spin opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{background: 'conic-gradient(from 90deg at 50% 50%, #18181b 0%, #fafafa 50%, #18181b 100%)', animationDuration: '3s'}}></span>
<span className="relative flex h-9 items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 backdrop-blur-3xl transition-colors duration-300 group-hover:bg-zinc-900/90">
                    Deploy Now
                    <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
</div>
</nav>

<section className="flex min-h-screen flex-col md:px-12 text-center z-10 pt-32 pr-6 pl-6 relative items-center justify-center">

<div className="mb-8 flex items-center justify-center gap-3 rounded-full border border-white/5 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
<div className="relative flex h-2.5 w-2.5 items-center justify-center">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
</div>
<span className="text-xs font-medium tracking-tight text-zinc-300">System nodes fully operational</span>
</div>

<h1 className="mb-6 flex flex-wrap justify-center gap-x-3 gap-y-2 text-5xl font-semibold tracking-tight text-zinc-50 md:text-7xl lg:text-8xl" id="hero-title">

<div className="flex"><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">S</span></span><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">y</span></span><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">n</span></span><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">t</span></span><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">h</span></span><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">e</span></span><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">s</span></span><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">i</span></span><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">z</span></span><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">e</span></span></div><div className="flex"><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">R</span></span><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">e</span></span><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">a</span></span><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">l</span></span><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">i</span></span><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">t</span></span><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">y</span></span></div><div className="flex"><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">S</span></span><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">y</span></span><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">n</span></span><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">t</span></span><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">h</span></span><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">e</span></span><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">s</span></span><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">i</span></span><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">z</span></span><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">e</span></span></div><div className="flex"><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">R</span></span><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">e</span></span><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">a</span></span><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">l</span></span><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">i</span></span><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">t</span></span><span className="inline-flex overflow-hidden"><span className="inline-block opacity-0">y</span></span></div></h1>
<p className="mx-auto mb-10 max-w-2xl text-base font-medium text-zinc-400 md:text-lg">
            High-performance parallel processing network designed for the next era of computational demands. Scale seamlessly with zero latency overhead.
        </p>
<div className="flex flex-col gap-4 sm:flex-row">
<button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-px text-sm font-medium text-white shadow-sm shadow-zinc-950">
<span className="absolute inset-[-1000%] animate-spin opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{background: 'conic-gradient(from 90deg at 50% 50%, #18181b 0%, #fafafa 50%, #18181b 100%)', animationDuration: '3s'}}></span>
<span className="relative flex h-11 items-center justify-center gap-2 rounded-full bg-zinc-50 px-8 text-zinc-950 backdrop-blur-3xl transition-colors duration-300 group-hover:bg-zinc-200">
                    Start Building
                    <iconify-icon className="text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon>
</span>
</button>
<button className="flex h-11 items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-8 text-sm font-medium text-zinc-100 transition-colors hover:bg-white/5">
<iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon>
                Read Docs
            </button>
</div>
</section>

<section className="relative z-10 w-full border-y border-white/5 bg-zinc-950 py-12">
<div className="mx-auto mb-8 max-w-7xl px-6 text-center md:px-12">
<p className="text-sm font-medium text-zinc-500">Powering infrastructure for industry leaders</p>
</div>
<div className="relative flex w-full overflow-hidden" style={{WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="flex w-max items-center gap-24 pr-24 opacity-50" id="marquee-inner">

<div className="flex items-center gap-24">
<iconify-icon className="text-zinc-400" height="64" icon="simple-icons:spacex" width="64"></iconify-icon>
<iconify-icon className="text-zinc-400" height="64" icon="simple-icons:nasa" width="64"></iconify-icon>
<iconify-icon className="text-zinc-400" height="64" icon="simple-icons:uber" width="64"></iconify-icon>
<iconify-icon className="text-zinc-400" height="64" icon="simple-icons:visa" width="64"></iconify-icon>
<iconify-icon className="text-zinc-400" height="64" icon="simple-icons:grab" width="64"></iconify-icon>
<iconify-icon className="text-zinc-400" height="64" icon="simple-icons:bose" width="64"></iconify-icon>
<iconify-icon className="text-zinc-400" height="64" icon="simple-icons:discover" width="64"></iconify-icon>
<iconify-icon className="text-zinc-400" height="64" icon="simple-icons:dji" width="64"></iconify-icon>
<iconify-icon className="text-zinc-400" height="64" icon="simple-icons:nikon" width="64"></iconify-icon>
<iconify-icon className="text-zinc-400" height="64" icon="simple-icons:craftsman" width="64"></iconify-icon>
<iconify-icon className="text-zinc-400" height="64" icon="simple-icons:sony" width="64"></iconify-icon>
</div>

<div className="flex items-center gap-24">
<iconify-icon className="text-zinc-400" height="64" icon="simple-icons:spacex" width="64"></iconify-icon>
<iconify-icon className="text-zinc-400" height="64" icon="simple-icons:nasa" width="64"></iconify-icon>
<iconify-icon className="text-zinc-400" height="64" icon="simple-icons:uber" width="64"></iconify-icon>
<iconify-icon className="text-zinc-400" height="64" icon="simple-icons:visa" width="64"></iconify-icon>
<iconify-icon className="text-zinc-400" height="64" icon="simple-icons:grab" width="64"></iconify-icon>
<iconify-icon className="text-zinc-400" height="64" icon="simple-icons:bose" width="64"></iconify-icon>
<iconify-icon className="text-zinc-400" height="64" icon="simple-icons:discover" width="64"></iconify-icon>
<iconify-icon className="text-zinc-400" height="64" icon="simple-icons:dji" width="64"></iconify-icon>
<iconify-icon className="text-zinc-400" height="64" icon="simple-icons:nikon" width="64"></iconify-icon>
<iconify-icon className="text-zinc-400" height="64" icon="simple-icons:craftsman" width="64"></iconify-icon>
<iconify-icon className="text-zinc-400" height="64" icon="simple-icons:sony" width="64"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32">
<div className="mx-auto max-w-7xl px-6 md:px-12">
<div className="mb-20 flex flex-col items-start md:items-center md:text-center">
<h2 className="mb-4 text-3xl font-medium tracking-tight text-zinc-100 md:text-5xl">Architected for Scale</h2>
<p className="max-w-2xl text-base text-zinc-400">Deploy resilient systems with native geographic redundancy and intelligent load distribution algorithms.</p>
</div>
<div className="grid gap-6 md:grid-cols-3" id="features">

<div className="flash-card group relative overflow-hidden rounded-2xl bg-zinc-900 p-px" style={{'--mouse-x': '0px', '--mouse-y': '0px'}}>

<div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{background: 'radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.25), transparent 40%)'}}></div>

<div className="relative flex h-full flex-col overflow-hidden rounded-[15px] bg-zinc-950 p-8">

<div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{background: 'radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)'}}></div>
<div className="absolute right-8 top-8 text-xs font-medium text-zinc-600">01</div>
<iconify-icon className="mb-6 text-4xl text-zinc-200" icon="solar:shield-check-bold-duotone"></iconify-icon>
<h3 className="mb-3 text-xl font-medium tracking-tight text-zinc-100">Zero-Trust Security</h3>
<p className="text-sm leading-relaxed text-zinc-400">Cryptographic primitives ensure complete state isolation. Your data remains completely opaque to external vectors.</p>
</div>
</div>

<div className="flash-card group relative overflow-hidden rounded-2xl bg-zinc-900 p-px" style={{'--mouse-x': '0px', '--mouse-y': '0px'}}>
<div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{background: 'radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.25), transparent 40%)'}}></div>
<div className="relative flex h-full flex-col overflow-hidden rounded-[15px] bg-zinc-950 p-8">
<div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{background: 'radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)'}}></div>
<div className="absolute right-8 top-8 text-xs font-medium text-zinc-600">02</div>
<iconify-icon className="mb-6 text-4xl text-zinc-200" icon="solar:cpu-bolt-bold-duotone"></iconify-icon>
<h3 className="mb-3 text-xl font-medium tracking-tight text-zinc-100">Neural Sync</h3>
<p className="text-sm leading-relaxed text-zinc-400">Proprietary conflict resolution enables millisecond synchronization across global edge environments.</p>
</div>
</div>

<div className="flash-card group relative overflow-hidden rounded-2xl bg-zinc-900 p-px" style={{'--mouse-x': '0px', '--mouse-y': '0px'}}>
<div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{background: 'radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.25), transparent 40%)'}}></div>
<div className="relative flex h-full flex-col overflow-hidden rounded-[15px] bg-zinc-950 p-8">
<div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{background: 'radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)'}}></div>
<div className="absolute right-8 top-8 text-xs font-medium text-zinc-600">03</div>
<iconify-icon className="mb-6 text-4xl text-zinc-200" icon="solar:database-bold-duotone"></iconify-icon>
<h3 className="mb-3 text-xl font-medium tracking-tight text-zinc-100">Infinite Topology</h3>
<p className="text-sm leading-relaxed text-zinc-400">Dynamic resource allocation expands capacity precisely when traffic spikes occur, reducing idle spend.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 border-t border-white/5 py-32">
<div className="mx-auto max-w-7xl px-6 md:px-12">
<div className="mb-20 flex flex-col items-center text-center">
<h2 className="mb-4 text-3xl font-medium tracking-tight text-zinc-100 md:text-5xl">Voices of Innovation</h2>
<p className="max-w-xl text-base text-zinc-400">Trusted by the engineers defining the boundaries of modern infrastructure.</p>
</div>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

<div className="flex flex-col justify-between rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm">
<p className="mb-8 text-sm leading-relaxed text-zinc-300">"Migrating to AEXOS dropped our 95th percentile latency by an order of magnitude. The global neural sync feature completely eliminated our data collision issues."</p>
<div className="flex items-center gap-4">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop&amp;q=80"/>
<div>
<p className="text-sm font-medium text-zinc-100">Julian Hayes</p>
<p className="text-xs text-zinc-500">Lead Architect, Nexus</p>
</div>
</div>
</div>

<div className="flex flex-col justify-between rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm">
<p className="mb-8 text-sm leading-relaxed text-zinc-300">"The zero-trust security architecture was the deciding factor. We can now guarantee absolute data isolation for our enterprise clients without sacrificing performance."</p>
<div className="flex items-center gap-4">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop&amp;q=80"/>
<div>
<p className="text-sm font-medium text-zinc-100">Sarah Chen</p>
<p className="text-xs text-zinc-500">VP Engineering, Cipher</p>
</div>
</div>
</div>

<div className="flex flex-col justify-between rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm md:col-span-2 lg:col-span-1">
<p className="mb-8 text-sm leading-relaxed text-zinc-300">"Infinite topology scaling means we no longer worry about Black Friday traffic spikes. The infrastructure practically manages itself."</p>
<div className="flex items-center gap-4">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop&amp;q=80"/>
<div>
<p className="text-sm font-medium text-zinc-100">Elena Rostova</p>
<p className="text-xs text-zinc-500">CTO, Meridian</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/5 py-12">
<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row md:px-12">
<div className="flex items-center gap-2 text-zinc-400">
<iconify-icon className="text-xl" icon="solar:infinity-linear"></iconify-icon>
<span className="text-sm font-medium tracking-tighter">AEXOS © 2024</span>
</div>
<div className="flex items-center gap-6">
<a className="text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-300" href="#">Privacy Policy</a>
<a className="text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-300" href="#">Terms of Service</a>
<a className="text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-300" href="#">Status</a>
</div>
</div>
</footer>



    </>
  );
}
