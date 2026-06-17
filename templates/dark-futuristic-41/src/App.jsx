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
      

<div className="video-background-container fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://www.youtube.com/watch?v=1LtJqC_Ey9M"></video></div>

<header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/95 backdrop-blur-sm border-b border-white/10">
<div className="flex md:px-8 h-16 pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-4">
<a className="group flex items-center gap-2" href="#">
<iconify-icon className="text-white group-hover:text-acid transition-colors" icon="solar:ghost-linear" width="24"></iconify-icon>
<span className="uppercase leading-none text-2xl font-bold tracking-tighter font-heading mt-1">FOil <span className="text-acid">.</span> Wrap</span>
</a>
<div className="hidden md:block w-px h-6 bg-white/20 mx-2"></div>
<div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
<span className="w-2 h-2 bg-acid rounded-full animate-pulse"></span>
            Systems Online
          </div>
</div>
<nav className="hidden md:flex items-center gap-10">
<a className="uppercase hover:text-acid transition-colors text-lg font-semibold tracking-wide font-heading" href="#">Galerie</a>
<a className="uppercase hover:text-acid transition-colors text-lg font-semibold tracking-wide font-heading" href="#">O nás</a>
<a className="uppercase hover:text-acid transition-colors text-lg font-semibold tracking-wide font-heading" href="#">Kontakt</a>
</nav>
<div className="flex items-center gap-6">
<button className="md:hidden text-white hover:text-acid">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<a className="hidden md:flex uppercase hover:bg-acid transition-colors items-center gap-2 text-base font-bold text-black tracking-wide font-heading bg-white pt-1.5 pr-4 pb-1.5 pl-4" href="#">Objednat polep</a>
</div>
</div>
</header>

<main className="flex-grow pt-16">

<section className="relative h-[85vh] flex items-center border-b border-white/10 overflow-hidden">

<div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity bg-[url(default)]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
<div className="md:px-12 flex flex-col w-full h-full max-w-screen-2xl z-10 mr-auto ml-auto pr-6 pb-20 pl-6 relative justify-end">
<div className="flex flex-col items-start">
<div className="flex items-center gap-3 mb-6">
</div>
<h1 className="md:text-[9rem] leading-[0.85] uppercase text-7xl font-bold text-white tracking-tighter font-heading mix-blend-overlay mb-8">Polepy <br/> <span className="stroke-text text-transparent" style={{WebkitTextStroke: '2px white'}}>Vozu Praha</span></h1>
<div className="flex flex-col md:flex-row md:items-end justify-between w-full border-t border-white/20 pt-8">
<p className="md:text-xl leading-snug text-lg font-medium text-zinc-300 max-w-xl">Přijď třeba jen s myšlenkou.
O zbytek se postaráme my.</p>
<div className="mt-8 md:mt-0 flex gap-4">
<button className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-acid hover:text-black hover:border-acid transition-all">
<iconify-icon icon="solar:arrow-right-down-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-black pt-24 pb-24 relative">
<div className="absolute top-0 left-0 w-full h-px bg-black/10"></div>
<div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-4 flex flex-col justify-between">
<div className="flex items-center gap-2 mb-8">
<iconify-icon icon="solar:flag-bold" width="24"></iconify-icon>
<span className="font-mono text-xs font-bold uppercase tracking-widest">
                  Mission Protocol
                </span>
</div>
<p className="font-mono text-xs uppercase tracking-wide leading-relaxed border-t border-black/20 pt-4">
                // User: Yuki Takahashi
                <br/>
                // Status: Available
                <br/>
                // Location: Tokyo, JP
              </p>
</div>
<div className="lg:col-span-8">
<h2 className="font-heading font-black text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.85] tracking-tighter mb-8">
                Code is
                <br/>
                not enough.
                <br/>
                Design is
                <br/>
                Vital.
              </h2>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-5 pointer-events-none select-none">
<div className="whitespace-nowrap animate-marquee flex gap-8">
<span className="font-heading font-black text-[12rem] leading-none uppercase">
              Develop // Deploy // Destroy //
            </span>
<span className="font-heading font-black text-[12rem] leading-none uppercase">
              Develop // Deploy // Destroy //
            </span>
</div>
</div>
</section>

<section className="py-24 border-b border-white/10 bg-[#080808]">
<div className="max-w-screen-2xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
<h2 className="font-heading font-bold text-5xl md:text-7xl uppercase tracking-tighter text-white">
              System
              <br/>
              Architecture
            </h2>
<div className="flex items-center gap-4 text-zinc-500 font-mono text-xs uppercase">
<span>Stack_Load: 100%</span>
<span>//</span>
<span>Optimized</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">

<div className="bg-[#080808] p-12 group hover:bg-[#0C0C0C] transition-colors relative">
<div className="absolute top-8 right-8 text-zinc-700 font-heading font-bold text-6xl opacity-20 group-hover:opacity-40 transition-opacity">
                01
              </div>
<div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center mb-12 text-acid group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading font-bold text-3xl uppercase tracking-wide text-white mb-4">
                Interface
              </h3>
<p className="text-zinc-400 leading-relaxed text-sm mb-8">
                Building responsive, high-performance user interfaces with
                modern frameworks. Every interaction is calculated.
              </p>
<ul className="space-y-2 border-t border-white/10 pt-6">
<li className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase">
<iconify-icon className="text-acid" icon="solar:check-read-linear"></iconify-icon>
                  React / Vue
                </li>
<li className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase">
<iconify-icon className="text-acid" icon="solar:check-read-linear"></iconify-icon>
                  Tailwind CSS
                </li>
</ul>
</div>

<div className="bg-[#080808] p-12 group hover:bg-[#0C0C0C] transition-colors relative">
<div className="absolute top-8 right-8 text-zinc-700 font-heading font-bold text-6xl opacity-20 group-hover:opacity-40 transition-opacity">
                02
              </div>
<div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center mb-12 text-acid group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:server-square-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading font-bold text-3xl uppercase tracking-wide text-white mb-4">
                Infrastructure
              </h3>
<p className="text-zinc-400 leading-relaxed text-sm mb-8">
                Robust backend systems designed for scale. Security and
                efficiency are paramount in the core loop.
              </p>
<ul className="space-y-2 border-t border-white/10 pt-6">
<li className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase">
<iconify-icon className="text-acid" icon="solar:check-read-linear"></iconify-icon>
                  Node / Python
                </li>
<li className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase">
<iconify-icon className="text-acid" icon="solar:check-read-linear"></iconify-icon>
                  PostgreSQL
                </li>
</ul>
</div>

<div className="bg-[#080808] p-12 group hover:bg-[#0C0C0C] transition-colors relative">
<div className="absolute top-8 right-8 text-zinc-700 font-heading font-bold text-6xl opacity-20 group-hover:opacity-40 transition-opacity">
                03
              </div>
<div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center mb-12 text-acid group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:pallete-2-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading font-bold text-3xl uppercase tracking-wide text-white mb-4">
                Visuals
              </h3>
<p className="text-zinc-400 leading-relaxed text-sm mb-8">
                Aesthetic intelligence applied to digital products. Creating
                visual languages that speak without words.
              </p>
<ul className="space-y-2 border-t border-white/10 pt-6">
<li className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase">
<iconify-icon className="text-acid" icon="solar:check-read-linear"></iconify-icon>
                  Figma / Motion
                </li>
<li className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase">
<iconify-icon className="text-acid" icon="solar:check-read-linear"></iconify-icon>
                  Blender 3D
                </li>
</ul>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-[#0A0A0A]">
<div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-16">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1">
<iconify-icon className="text-acid mb-6" icon="solar:ghost-linear" width="48"></iconify-icon>
<h4 className="font-heading font-bold text-2xl uppercase tracking-tight text-white mb-2">
              NEX Portfolio
            </h4>
<p className="text-xs text-zinc-500 mb-6 font-mono">
              YUKI TAKAHASHI
              <br/>
              TOKYO, JP // EST. 2024
            </p>
</div>
<div className="">
<ul className="space-y-4 font-heading font-bold text-xl uppercase tracking-wide">
<li className="">
<a className="text-white hover:text-acid transition-colors" href="#">
                  Projects
                </a>
</li>
<li className="">
<a className="text-white hover:text-acid transition-colors" href="#">
                  Journal
                </a>
</li>
</ul>
</div>
<div>
<ul className="space-y-4 font-heading font-bold text-xl uppercase tracking-wide">
<li>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
                  GitHub
                </a>
</li>
<li>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
                  LinkedIn
                </a>
</li>
</ul>
</div>
<div className="col-span-1">
<p className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Initialize Uplink
            </p>
<div className="flex">
<input className="bg-zinc-900 border-none text-white text-xs px-4 py-3 w-full focus:ring-1 focus:ring-acid font-mono outline-none" placeholder="EMAIL ADDRESS" type="email"/>
<button className="bg-acid text-black px-4 hover:bg-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">
            © 2024 NEX. All Systems Nominal.
          </p>
<div className="flex gap-6 text-[10px] text-zinc-600 font-mono uppercase tracking-widest">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
