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
      

<div className="fixed inset-0 z-0 pointer-events-none glow-bg"></div>
<div className="fixed inset-0 z-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

<nav className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-950/70 border-b border-white/[0.05]">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-lg font-semibold tracking-tighter text-zinc-100 flex items-center gap-2" href="#">
<span className="bg-zinc-100 text-zinc-950 px-1.5 py-0.5 rounded-md text-xs tracking-widest font-medium">
              MR
            </span>
            MOERDIKKA
          </a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium">
<a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="#">
              Features
            </a>
<a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="#">
              Rules
            </a>
<a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="#">
              Wiki
            </a>
<a className="text-zinc-400 hover:text-zinc-100 transition-colors flex items-center gap-1" href="#">
              Store
              <iconify-icon className="text-xs" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-white/[0.05] text-xs font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-zinc-300">142 Online</span>
</div>
<button className="hidden md:flex items-center justify-center px-4 py-2 text-sm font-medium text-zinc-950 bg-zinc-100 hover:bg-white rounded-full transition-all active:scale-95">
            Play Now
          </button>
<button className="md:hidden text-zinc-400 hover:text-zinc-100">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="flex-1 relative z-10 flex flex-col">

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
<div className="absolute inset-0 z-[-1]">
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-zinc-950/80 to-zinc-950 z-10"></div>
<img alt="Los Santos Backdrop" className="w-full h-full object-cover opacity-30" src="https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-8">
<iconify-icon icon="solar:rocket-linear"></iconify-icon>
          Season 4 is now live
        </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-zinc-100 max-w-4xl leading-[1.1] mb-6">
          Your story begins in
          <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">
            Los Santos.
          </span>
</h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl font-light leading-relaxed mb-10">
          Immerse yourself in the most authentic roleplay experience. Build your
          empire from the ground up, protect the city, or rule the underground
          in moerdikka RP.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-zinc-950 bg-zinc-100 hover:bg-white rounded-full transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-95">
<iconify-icon className="text-lg" icon="solar:gamepad-linear"></iconify-icon>
            Connect via FiveM
          </button>
<button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-zinc-100 bg-zinc-900/50 hover:bg-zinc-800 border border-white/[0.05] rounded-full transition-all active:scale-95 group">
<iconify-icon className="text-lg text-zinc-400 group-hover:text-zinc-100 transition-colors" icon="solar:chat-round-line-linear"></iconify-icon>
            Join Discord
          </button>
</div>

<div className="mt-12 p-1 rounded-xl bg-zinc-900/30 border border-white/[0.05] inline-flex items-center backdrop-blur-sm">
<div className="px-4 py-2 text-xs font-medium font-mono text-zinc-400 flex items-center gap-2">
<iconify-icon icon="solar:server-linear"></iconify-icon>
            play.moerdikka.com
          </div>
<button className="p-2 rounded-lg bg-zinc-800/50 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-100 transition-colors flex items-center justify-center group" title="Copy IP">
<iconify-icon className="group-active:scale-90 transition-transform" icon="solar:copy-linear"></iconify-icon>
</button>
</div>
</section>

<section className="py-24 px-6 relative border-t border-white/[0.02] bg-zinc-950/50">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-zinc-100 mb-4">
                Crafted for roleplay.
              </h2>
<p className="text-base text-zinc-400 font-light max-w-md">
                Everything you need to create compelling narratives, backed by a
                custom-built, high-performance framework.
              </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/[0.05] hover:border-white/[0.1] hover:bg-zinc-900/60 transition-all duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-2xl bg-zinc-800/50 border border-white/[0.05] flex items-center justify-center mb-6 relative z-10 text-emerald-400">
<iconify-icon className="text-2xl" icon="solar:wad-of-money-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-100 mb-2 relative z-10 tracking-tight">
                Dynamic Economy
              </h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed relative z-10">
                A fully player-driven market where supply, demand, and your
                business acumen determine your wealth.
              </p>
</div>

<div className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/[0.05] hover:border-white/[0.1] hover:bg-zinc-900/60 transition-all duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-2xl bg-zinc-800/50 border border-white/[0.05] flex items-center justify-center mb-6 relative z-10 text-zinc-100">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-100 mb-2 relative z-10 tracking-tight">
                Active Emergency Services
              </h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed relative z-10">
                Join the LSPD, BCSO, or EMS. Fully equipped with custom
                vehicles, MDT systems, and structured progression.
              </p>
</div>

<div className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/[0.05] hover:border-white/[0.1] hover:bg-zinc-900/60 transition-all duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-2xl bg-zinc-800/50 border border-white/[0.05] flex items-center justify-center mb-6 relative z-10 text-zinc-100">
<iconify-icon className="text-2xl" icon="solar:buildings-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-100 mb-2 relative z-10 tracking-tight">
                Custom Enterprises
              </h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed relative z-10">
                Own mechanic shops, restaurants, or clubs. Hire employees,
                manage inventory, and become a city mogul.
              </p>
</div>

<div className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/[0.05] hover:border-white/[0.1] hover:bg-zinc-900/60 transition-all duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-2xl bg-zinc-800/50 border border-white/[0.05] flex items-center justify-center mb-6 relative z-10 text-zinc-100">
<iconify-icon className="text-2xl" icon="solar:mask-happly-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-100 mb-2 relative z-10 tracking-tight">
                Deep Criminal Underworld
              </h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed relative z-10">
                Intricate drug manufacturing, varied heist progressions, and a
                territory system for established gangs.
              </p>
</div>

<div className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/[0.05] hover:border-white/[0.1] hover:bg-zinc-900/60 transition-all duration-300 relative overflow-hidden md:col-span-2 lg:col-span-2">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute right-0 top-0 bottom-0 w-2/3 md:w-1/2 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none hidden sm:block [mask-image:linear-gradient(to_right,transparent,white)]">
<img alt="Performance Optimization" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1552551486-e9e1f57bb810?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex flex-col md:flex-row gap-8 items-start relative z-10 h-full">
<div className="flex-1">
<div className="w-12 h-12 rounded-2xl bg-zinc-800/50 border border-white/[0.05] flex items-center justify-center mb-6 text-zinc-100">
<iconify-icon className="text-2xl" icon="solar:code-scan-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-100 mb-2 tracking-tight">
                    Optimized Performance
                  </h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                    Experience Los Santos with minimal stutter. Our development
                    team constantly refines scripts to ensure 60+ FPS even in
                    crowded areas.
                  </p>

<div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-950/50 border border-white/[0.02] inline-flex">
<span className="text-xs font-medium text-zinc-400">
                      High Detail Mode
                    </span>
<div className="w-8 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/30 relative cursor-pointer">
<div className="absolute top-[1px] right-[1px] w-3 h-3 rounded-full bg-emerald-400"></div>
</div>
<span className="text-xs font-medium text-zinc-100">
                      Enabled
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 relative border-t border-white/[0.02] bg-zinc-950/80">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-zinc-100 mb-4">
                The City Sleeps For No One.
              </h2>
<p className="text-base text-zinc-400 font-light max-w-md">
                Explore our beautifully modded city, featuring custom vehicles,
                exclusive MLOs, and breathtaking visuals.
              </p>
</div>
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors group">
              View full gallery
              <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="rounded-3xl overflow-hidden aspect-video border border-white/[0.05] relative group bg-zinc-900">
<img alt="Custom Vehicles" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1605901309584-818e25960b8f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
<span className="text-zinc-100 font-medium tracking-tight">
                  Custom Imports
                </span>
</div>
</div>
<div className="rounded-3xl overflow-hidden aspect-video border border-white/[0.05] relative group bg-zinc-900">
<img alt="City Views" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1598555848520-22165c49dc74?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
<span className="text-zinc-100 font-medium tracking-tight">
                  Stunning Graphics
                </span>
</div>
</div>
<div className="rounded-3xl overflow-hidden aspect-video border border-white/[0.05] relative group bg-zinc-900 sm:col-span-2 lg:col-span-1">
<img alt="Nightlife" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1555626906-fcf10d6851b4?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
<span className="text-zinc-100 font-medium tracking-tight">
                  Vibrant Nightlife
                </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative flex items-center justify-center text-center overflow-hidden">
<div className="absolute inset-0 z-[-1]">
<div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm z-10"></div>
<img alt="Join Now Backdrop" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-emerald-500/5 [mask-image:radial-gradient(circle_at_center,white,transparent_70%)]"></div>
<div className="relative z-10 max-w-2xl">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-zinc-100 mb-6">
            Ready to cross the border?
          </h2>
<p className="text-base text-zinc-400 font-light mb-10">
            Join thousands of players already building their legacy. Whitelist
            application takes less than 5 minutes.
          </p>
<button className="flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-zinc-950 bg-emerald-400 hover:bg-emerald-300 rounded-full transition-all mx-auto active:scale-95 shadow-[0_0_30px_rgba(52,211,153,0.2)] hover:shadow-[0_0_40px_rgba(52,211,153,0.4)]">
            Apply for Whitelist
            <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</section>
</main>

<footer className="border-t border-white/[0.05] bg-zinc-950 relative z-10">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2 text-zinc-100 font-semibold tracking-tighter text-lg">
<span className="bg-zinc-800 text-zinc-300 px-1.5 py-0.5 rounded-md text-xs tracking-widest font-medium">
            MR
          </span>
          MOERDIKKA
        </div>
<div className="flex flex-wrap items-center justify-center gap-6 text-sm font-light text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#">
            Terms of Service
          </a>
<a className="hover:text-zinc-300 transition-colors" href="#">
            Server Rules
          </a>
<a className="hover:text-zinc-300 transition-colors" href="#">Support</a>
<a className="hover:text-zinc-300 transition-colors" href="#">
            Creator Program
          </a>
</div>
<div className="flex items-center gap-4 text-zinc-500">
<a className="hover:text-zinc-100 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:discord-linear"></iconify-icon>
</a>
<a className="hover:text-zinc-100 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:twitter-linear"></iconify-icon>
</a>
<a className="hover:text-zinc-100 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:videocamera-record-linear"></iconify-icon>
</a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 py-6 border-t border-white/[0.02] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-zinc-600">
<p>© 2023 moerdikka RP. All rights reserved.</p>
<p>Not affiliated with Rockstar Games or Take-Two Interactive.</p>
</div>
</footer>

    </>
  );
}
