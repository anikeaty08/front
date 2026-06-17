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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/95 backdrop-blur-sm border-b border-white/10">
<div className="flex items-center justify-between h-16 px-6 md:px-8">

<div className="flex items-center gap-4">
<a className="group flex items-center gap-2" href="#">
<iconify-icon className="text-white group-hover:text-acid transition-colors" icon="solar:infinity-linear" width="32"></iconify-icon>
<span className="font-heading font-bold text-2xl tracking-tighter uppercase leading-none mt-1">SECTOR<span className="text-acid">.</span>ZERO</span>
</a>
<div className="hidden md:block w-px h-6 bg-white/20 mx-2"></div>
<div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Systems Nominal
                </div>
</div>

<nav className="hidden md:flex items-center gap-10">
<a className="font-heading font-semibold text-lg uppercase tracking-wide hover:text-acid transition-colors" href="#">Vision</a>
<a className="font-heading font-semibold text-lg uppercase tracking-wide hover:text-acid transition-colors" href="#">Technology</a>
<a className="font-heading font-semibold text-lg uppercase tracking-wide hover:text-acid transition-colors" href="#">Operatives</a>
<a className="font-heading font-semibold text-lg uppercase tracking-wide text-acid" href="#">Updates</a>
</nav>

<div className="flex items-center gap-6">
<button className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-wider hover:text-acid transition-colors">
<iconify-icon icon="solar:user-circle-linear" width="18"></iconify-icon>
<span>Login</span>
</button>
<a className="bg-white text-black px-6 py-2 font-heading font-bold text-lg uppercase tracking-wide hover:bg-acid transition-colors flex items-center gap-2" href="#">
<span>Pre-Order</span>
</a>
</div>
</div>
</header>
<main className="flex-grow pt-16">

<section className="relative h-[85vh] flex items-center border-b border-white/10 overflow-hidden">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=2940&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>

<div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
<div className="relative w-full max-w-screen-2xl mx-auto px-6 md:px-12 z-10 flex flex-col justify-end h-full pb-20">
<div className="flex flex-col items-start">
<div className="flex items-center gap-3 mb-6">
<div className="bg-acid text-black px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-widest">Incoming Transmission</div>
<div className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">Code: 882-X</div>
</div>
<h1 className="font-heading font-bold text-7xl md:text-[9rem] leading-[0.85] tracking-tighter uppercase text-white mb-8 mix-blend-overlay">
                        Silence<br/>The<br/><span className="text-transparent stroke-text" style={{WebkitTextStroke: '2px white'}}>Noise</span>
</h1>
<div className="flex flex-col md:flex-row md:items-end justify-between w-full border-t border-white/20 pt-8">
<p className="text-lg md:text-xl text-zinc-300 max-w-xl font-medium leading-snug">
                            We are not just survivors. We are architects of the new silence. Join the extraction protocol before the sector collapses.
                        </p>
<div className="mt-8 md:mt-0 flex gap-4">
<button className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-acid hover:text-black hover:border-acid transition-all">
<iconify-icon icon="solar:play-linear" width="24"></iconify-icon>
</button>
<button className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-acid hover:text-black hover:border-acid transition-all">
<iconify-icon icon="solar:arrow-right-down-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#CCFF00] text-black py-24 md:py-32 overflow-hidden relative">
<div className="absolute top-0 left-0 w-full h-px bg-black/10"></div>
<div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-4 flex flex-col justify-between">
<div className="flex items-center gap-2 mb-8">
<iconify-icon icon="solar:flag-bold" width="24"></iconify-icon>
<span className="font-mono text-xs font-bold uppercase tracking-widest">Our Mission</span>
</div>
<div className="hidden lg:block">

<div className="relative w-full h-64 mb-4 border-2 border-black overflow-hidden group">
<img alt="Mission" className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
</div>
<p className="font-mono text-xs uppercase tracking-wide leading-relaxed border-t border-black/20 pt-4">
                                // Target: 2045<br/>
                                // Population: 0<br/>
                                // Status: Compromised
                            </p>
</div>
</div>
<div className="lg:col-span-8">
<h2 className="font-heading font-black text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.85] tracking-tighter mb-8">
                            We don't <br/>just survive.<br/>We take <br/>it back.
                        </h2>
<p className="font-medium text-xl md:text-2xl leading-tight max-w-2xl border-l-4 border-black pl-6">
                            Sector Zero is a PVP extraction shooter where your breath is the only clock that matters. The colony is lost, but the resources remain. 
                        </p>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-5 pointer-events-none select-none">
<div className="whitespace-nowrap animate-marquee flex gap-8">
<span className="font-heading font-black text-[12rem] leading-none uppercase">Secure The Asset // Leave No Trace //</span>
<span className="font-heading font-black text-[12rem] leading-none uppercase">Secure The Asset // Leave No Trace //</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-b border-white/10 bg-[#080808]">
<div className="max-w-screen-2xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 border-b border-white/10 pb-8">
<h2 className="font-heading font-bold text-5xl md:text-7xl uppercase tracking-tighter text-white">
                        Tactical<br/>Overview
                    </h2>
<div className="mt-6 md:mt-0 flex items-center gap-4 text-zinc-500 font-mono text-xs uppercase">
<span>Read_Speed: 40ms</span>
<span>//</span>
<span>Data_Size: 24TB</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">

<div className="bg-[#080808] p-8 md:p-12 group hover:bg-[#0C0C0C] transition-colors relative">
<div className="absolute top-8 right-8 text-zinc-700 font-heading font-bold text-6xl opacity-20 group-hover:opacity-40 transition-opacity">01</div>
<div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center mb-12 text-acid group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:target-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading font-bold text-3xl uppercase tracking-wide text-white mb-4">You Are The Hunter</h3>
<p className="text-zinc-400 leading-relaxed text-sm mb-8">
                            Every shadow contains a threat. Use advanced environmental scanners to track heat signatures and heartbeats. Silence is your primary weapon.
                        </p>
<ul className="space-y-2 border-t border-white/10 pt-6">
<li className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase">
<iconify-icon className="text-acid" icon="solar:check-read-linear"></iconify-icon>
                                Adaptive Camouflage
                            </li>
<li className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase">
<iconify-icon className="text-acid" icon="solar:check-read-linear"></iconify-icon>
                                Silent Takedowns
                            </li>
</ul>
</div>

<div className="bg-[#080808] p-8 md:p-12 group hover:bg-[#0C0C0C] transition-colors relative">
<div className="absolute top-8 right-8 text-zinc-700 font-heading font-bold text-6xl opacity-20 group-hover:opacity-40 transition-opacity">02</div>
<div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center mb-12 text-acid group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-warning-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading font-bold text-3xl uppercase tracking-wide text-white mb-4">Or The Hunted</h3>
<p className="text-zinc-400 leading-relaxed text-sm mb-8">
                            The colony AI has gone rogue. Automated defense systems and other runners want what you have. Extraction is never guaranteed.
                        </p>
<ul className="space-y-2 border-t border-white/10 pt-6">
<li className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase">
<iconify-icon className="text-acid" icon="solar:check-read-linear"></iconify-icon>
                                AI Swarm Tactics
                            </li>
<li className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase">
<iconify-icon className="text-acid" icon="solar:check-read-linear"></iconify-icon>
                                Dynamic Rivalry
                            </li>
</ul>
</div>

<div className="bg-[#080808] p-8 md:p-12 group hover:bg-[#0C0C0C] transition-colors relative">
<div className="absolute top-8 right-8 text-zinc-700 font-heading font-bold text-6xl opacity-20 group-hover:opacity-40 transition-opacity">03</div>
<div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center mb-12 text-acid group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading font-bold text-3xl uppercase tracking-wide text-white mb-4">Secure The Payload</h3>
<p className="text-zinc-400 leading-relaxed text-sm mb-8">
                            Artifacts are heavy and degrade over time. Manage your oxygen, inventory weight, and stamina to reach the exfil point.
                        </p>
<ul className="space-y-2 border-t border-white/10 pt-6">
<li className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase">
<iconify-icon className="text-acid" icon="solar:check-read-linear"></iconify-icon>
                                Weight Physics
                            </li>
<li className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase">
<iconify-icon className="text-acid" icon="solar:check-read-linear"></iconify-icon>
                                Oxygen Management
                            </li>
</ul>
</div>
</div>
</div>
</section>

<div className="border-b border-white/10 bg-[#0A0A0A] sticky top-16 z-40">
<div className="max-w-screen-2xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row md:items-center justify-between">

<div className="flex overflow-x-auto no-scrollbar gap-8">
<button className="py-5 font-heading text-lg font-bold uppercase tracking-wide text-acid border-b-2 border-acid">Transmission Log</button>
<button className="py-5 font-heading text-lg font-bold uppercase tracking-wide text-zinc-500 hover:text-white transition-colors border-b-2 border-transparent">Dev Diary</button>
<button className="py-5 font-heading text-lg font-bold uppercase tracking-wide text-zinc-500 hover:text-white transition-colors border-b-2 border-transparent">Lore Archives</button>
</div>

<div className="flex items-center border-t md:border-t-0 md:border-l border-white/10 h-full">
<div className="relative group h-full">
<input className="w-full md:w-64 bg-transparent border-none text-xs font-mono text-white placeholder-zinc-600 focus:ring-0 px-6 py-5 uppercase outline-none h-full" placeholder="SEARCH DATABASE..." type="text"/>
<div className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-acid">
<iconify-icon icon="solar:minimalistic-magnifer-linear" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="max-w-screen-2xl mx-auto px-6 md:px-12 py-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group relative flex flex-col h-full bg-[#0C0C0C] border border-white/5 hover:border-acid/50 transition-colors">
<div className="aspect-[16/9] overflow-hidden relative">
<div className="absolute inset-0 bg-acid/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

<img alt="Weapon Schematics" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-0 left-0 bg-black/90 text-white text-[10px] font-mono px-3 py-1 uppercase tracking-widest border-r border-b border-white/20 z-20">
                            Dev_Log // 092
                        </div>
</div>
<div className="p-6 md:p-8 flex flex-col flex-grow">
<div className="flex items-center gap-3 mb-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
<span>2023.10.24</span>
<span className="text-acid">//</span>
<span>System.Admin</span>
</div>
<h3 className="font-heading font-bold text-3xl uppercase leading-none text-zinc-100 mb-4 group-hover:text-acid transition-colors">
                            Weapon Telemetry Analysis
                        </h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-8 flex-grow">
                            Adjusting recoil patterns based on community feedback. The new ballistics model introduces variable spread...
                        </p>
<a className="inline-flex items-center justify-between w-full p-3 border border-zinc-800 bg-black/20 hover:bg-acid hover:text-black hover:border-acid transition-all group/btn" href="#">
<span className="text-xs font-bold uppercase tracking-wider">Access Data</span>
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</article>

<article className="group relative flex flex-col h-full bg-[#0C0C0C] border border-white/5 hover:border-acid/50 transition-colors">
<div className="aspect-[16/9] overflow-hidden relative">
<div className="absolute inset-0 bg-acid/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

<img alt="Colony Artifact" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-0 left-0 bg-black/90 text-white text-[10px] font-mono px-3 py-1 uppercase tracking-widest border-r border-b border-white/20 z-20">
                            Lore_Db // 04A
                        </div>
</div>
<div className="p-6 md:p-8 flex flex-col flex-grow">
<div className="flex items-center gap-3 mb-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
<span>2023.10.22</span>
<span className="text-acid">//</span>
<span>Archivist</span>
</div>
<h3 className="font-heading font-bold text-3xl uppercase leading-none text-zinc-100 mb-4 group-hover:text-acid transition-colors">
                            Artifacts of The Colony
                        </h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-8 flex-grow">
                            Recovered data drives suggest a secondary purpose for the Tau Ceti outpost. Encrypted fragments reveal...
                        </p>
<a className="inline-flex items-center justify-between w-full p-3 border border-zinc-800 bg-black/20 hover:bg-acid hover:text-black hover:border-acid transition-all group/btn" href="#">
<span className="text-xs font-bold uppercase tracking-wider">Access Data</span>
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</article>

<article className="group relative flex flex-col h-full bg-[#0C0C0C] border border-white/5 hover:border-acid/50 transition-colors">
<div className="aspect-[16/9] overflow-hidden relative bg-[#111] flex items-center justify-center border-b border-white/5">

<img alt="System Interface" className="absolute inset-0 object-cover w-full h-full grayscale opacity-40 group-hover:opacity-60 transition-opacity" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<iconify-icon className="relative z-10 text-white group-hover:text-acid transition-colors drop-shadow-lg" icon="solar:code-square-linear" width="64"></iconify-icon>
<div className="absolute top-0 left-0 bg-black/90 text-white text-[10px] font-mono px-3 py-1 uppercase tracking-widest border-r border-b border-white/20 z-20">
                            Patch // 1.0.4
                        </div>
</div>
<div className="p-6 md:p-8 flex flex-col flex-grow">
<div className="flex items-center gap-3 mb-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
<span>2023.10.15</span>
<span className="text-acid">//</span>
<span>Engineering</span>
</div>
<h3 className="font-heading font-bold text-3xl uppercase leading-none text-zinc-100 mb-4 group-hover:text-acid transition-colors">
                            Hotfix: Audio Occlusion
                        </h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-8 flex-grow">
                            Addressing the spatial audio issues near the reactor core. Footsteps now correctly occlude through blast doors.
                        </p>
<a className="inline-flex items-center justify-between w-full p-3 border border-zinc-800 bg-black/20 hover:bg-acid hover:text-black hover:border-acid transition-all group/btn" href="#">
<span className="text-xs font-bold uppercase tracking-wider">Access Data</span>
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</article>
</div>
</section>

<footer className="border-t border-white/10 bg-[#0A0A0A]">
<div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-16">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24">
<div className="col-span-1 md:col-span-1">
<iconify-icon className="text-acid mb-6" icon="solar:infinity-linear" width="48"></iconify-icon>
<h4 className="font-heading font-bold text-2xl uppercase tracking-tight text-white mb-2">Sector Zero</h4>
<p className="text-xs text-zinc-500 mb-6 font-mono">
                            UESC TRANSMISSION NODE<br/>
                            SECURE CHANNEL: #9942
                        </p>
</div>
<div>
<ul className="space-y-4 font-heading font-bold text-xl uppercase tracking-wide">
<li><a className="text-white hover:text-acid transition-colors" href="#">The Game</a></li>
<li><a className="text-white hover:text-acid transition-colors" href="#">Media</a></li>
<li><a className="text-white hover:text-acid transition-colors" href="#">News</a></li>
<li><a className="text-white hover:text-acid transition-colors" href="#">Store</a></li>
</ul>
</div>
<div>
<ul className="space-y-4 font-heading font-bold text-xl uppercase tracking-wide">
<li><a className="text-zinc-500 hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-zinc-500 hover:text-white transition-colors" href="#">Support</a></li>
<li><a className="text-zinc-500 hover:text-white transition-colors" href="#">Press Kit</a></li>
</ul>
</div>
<div className="col-span-1">
<p className="text-xs font-bold uppercase tracking-widest text-white mb-4">Stay Informed</p>
<div className="flex">
<input className="bg-zinc-900 border-none text-white text-xs px-4 py-3 w-full focus:ring-1 focus:ring-acid font-mono" placeholder="EMAIL ADDRESS" type="email"/>
<button className="bg-acid text-black px-4 hover:bg-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="flex gap-4 mt-8">
<a className="text-zinc-500 hover:text-white" href="#"><iconify-icon icon="solar:brand-x-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white" href="#"><iconify-icon icon="solar:brand-discord-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white" href="#"><iconify-icon icon="solar:brand-youtube-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
<div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">
                        © 2024 Sector Zero Interactive.
                    </p>
<div className="flex gap-6 text-[10px] text-zinc-600 font-mono uppercase tracking-widest">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="#">Cookies</a>
</div>
</div>
</div>
</footer>
</main>

    </>
  );
}
