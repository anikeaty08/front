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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Geist', 'sans-serif'],
mono: ['Geist Mono', 'monospace'],
},
colors: {
void: '#050505',
graphene: '#0F0F11',
acid: '#CCFF00',
danger: '#FF2E00',
haze: 'rgba(255, 255, 255, 0.03)',
},
letterSpacing: {
tighter: '-0.05em',
widest: '0.2em',
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
},
animation: {
'spin-slow': 'spin 30s linear infinite',
'spin-reverse': 'spin 20s linear infinite reverse',
'float': 'float 8s ease-in-out infinite',
'marquee': 'marquee 30s linear infinite',
'scan-v': 'scanVertical 4s cubic-bezier(0.4, 0, 0.2, 1) infinite',
'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
'decode': 'decode 0.5s steps(10, end)',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
scanVertical: {
'0%': { top: '-10%', opacity: '0' },
'10%': { opacity: '1' },
'90%': { opacity: '1' },
'100%': { top: '110%', opacity: '0' },
},
pulseGlow: {
'0%, 100%': { boxShadow: '0 0 20px -10px #CCFF00' },
'50%': { boxShadow: '0 0 40px -5px #CCFF00' },
}
}
}
}
}



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
      

<div className="noise-overlay"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-void/80 backdrop-blur-xl">
<div className="flex items-center justify-between h-14 px-6 max-w-[1920px] mx-auto">

<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-acid rounded-full animate-pulse"></div>
<span className="font-mono text-[10px] tracking-widest text-white/50">SYS.ONLINE</span>
</div>
<div className="hidden md:flex font-mono text-[10px] text-white/30 gap-4">
<span>TEMP: 21°C</span>
<span>HUM: 45%</span>
</div>
</div>

<div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 group cursor-pointer">
<iconify-icon className="text-xl text-acid" icon="solar:shield-star-linear"></iconify-icon>
<span className="font-bold text-lg tracking-tighter">AEGIS</span>
</div>

<div className="flex items-center gap-6">
<div className="hidden md:block text-right">
<div className="font-mono text-[10px] text-acid">CART_EMPTY</div>
<div className="h-px w-full bg-acid/30 mt-0.5"></div>
</div>
<button className="w-8 h-8 flex items-center justify-center border border-white/10 hover:border-acid hover:text-acid transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-void perspective-1000">

<div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-20 transform perspective-3d rotate-x-12 scale-150 origin-top"></div>
<div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void z-10"></div>

<div className="absolute z-0 w-[80vh] h-[80vh] rounded-full border border-white/5 opacity-50 flex items-center justify-center animate-spin-slow">
<div className="absolute w-[90%] h-[90%] rounded-full border border-white/5 border-dashed"></div>
<div className="absolute w-full h-full radar-sweep rounded-full blur-3xl opacity-20"></div>
</div>

<div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
<div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/5 rounded-full opacity-20 animate-float delay-100"></div>
<div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-white/5 rounded-full opacity-20 animate-float delay-700"></div>

<div className="absolute top-1/2 left-10 w-4 h-4 border-l border-t border-acid/50"></div>
<div className="absolute top-1/2 right-10 w-4 h-4 border-r border-t border-acid/50"></div>
<div className="absolute bottom-10 left-1/2 w-4 h-4 border-l border-b border-acid/50"></div>
</div>

<div className="relative z-20 flex flex-col items-center justify-center w-full max-w-6xl px-4 text-center">

<div className="flex items-center gap-2 mb-8 animate-float">
<span className="px-2 py-0.5 bg-acid text-black font-mono text-[10px] font-bold uppercase tracking-wider">New Arrival</span>
<span className="font-mono text-[10px] text-acid border border-acid/30 px-2 py-0.5 backdrop-blur-md">MK-IV SERIES</span>
</div>

<h1 className="text-7xl md:text-9xl font-semibold tracking-tighter leading-[0.85] text-white mb-6 select-none mix-blend-screen" data-text="SENTIENCE">
<span className="block glitch-text" data-text="SENTIENCE">SENTIENCE</span>
<span className="block text-white/10" data-text="WOVEN">WOVEN</span>
</h1>

<p className="max-w-xl text-sm md:text-base text-white/60 font-mono leading-relaxed mb-10 mix-blend-difference">
                Biological interface apparel designed for the post-anthropocene. 
                Featuring <span className="text-acid">adaptive thermal regulation</span> and electromagnetic shielding.
            </p>

<div className="flex flex-col md:flex-row items-center gap-4">
<button className="group relative px-8 py-4 bg-white text-black font-mono text-xs font-bold uppercase tracking-widest overflow-hidden">
<div className="absolute inset-0 bg-acid translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
<span className="relative z-10 flex items-center gap-3">
                        Deploy Unit
                        <iconify-icon className="text-lg" icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</button>
<div className="flex items-center gap-4 px-6 py-4 border border-white/10 bg-black/20 backdrop-blur-sm hover:border-white/30 transition-colors cursor-pointer group">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-acid group-hover:text-black transition-colors">
<iconify-icon icon="solar:play-linear"></iconify-icon>
</div>
<div className="text-left">
<div className="font-mono text-[9px] text-white/40 uppercase">System Demo</div>
<div className="font-mono text-xs text-white">Watch Briefing</div>
</div>
</div>
</div>
</div>

<div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 text-[10px] font-mono text-white/20 writing-vertical-lr select-none">
<span>COORDINATES: 35.6895° N, 139.6917° E</span>
<span>ATMOSPHERE: STABLE</span>
<span>THREAT_LEVEL: NEGLIGIBLE</span>
</div>

<div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-acid to-transparent opacity-50"></div>
</section>

<section className="py-24 px-4 bg-graphene relative overflow-hidden">

<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon className="text-[20rem]" icon="solar:cpu-linear"></iconify-icon>
</div>
<div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-4">

<div className="md:col-span-8 relative group tech-border min-h-[500px] overflow-hidden">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605218457336-9275003666f7?q=80&amp;w=2574&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

<div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
<div className="flex items-end justify-between">
<div>
<div className="font-mono text-acid text-xs mb-3 flex items-center gap-2">
<iconify-icon icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon>
                                TOP_SECRET // PROTOTYPE
                            </div>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-4 text-white">SHADOW OPS <br/>SHELL V.9</h2>
<p className="text-white/70 max-w-md font-mono text-xs leading-relaxed border-l-2 border-acid pl-4">
                                Full-spectrum stealth capabilities. The V.9 integrates active camouflage micro-panels with a GORE-TEX® PRO membrane for complete environmental dominance.
                            </p>
</div>

<div className="hidden md:block">
<div className="grid grid-cols-2 gap-4 font-mono text-xs text-white/50">
<div>
<span className="block text-white">12.5k</span>
                                    WATERPROOF
                                </div>
<div>
<span className="block text-white">0.4kg</span>
                                    WEIGHT
                                </div>
<div>
<span className="block text-white">L3</span>
                                    BALLISTIC
                                </div>
<div>
<span className="block text-white">10yr</span>
                                    WARRANTY
                                </div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 flex flex-col gap-4">

<div className="flex-1 tech-border p-8 bg-void relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4">
<iconify-icon className="text-4xl text-white/10 group-hover:text-acid transition-colors" icon="solar:atom-linear"></iconify-icon>
</div>
<div className="mt-auto h-full flex flex-col justify-end">
<h3 className="text-xl font-medium mb-2">Molecular Weave</h3>
<p className="font-mono text-xs text-white/50 mb-4">
                            Dyneema® composite fabrics oriented 0°/90° for maximum tear resistance at 1/15th the weight of steel.
                        </p>
<a className="inline-flex items-center gap-2 text-xs font-mono text-acid uppercase tracking-widest hover:text-white transition-colors" href="#">
                            Analyze Data <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="absolute top-0 left-0 w-full h-1 bg-acid/50 shadow-[0_0_15px_#CCFF00] animate-scan-v opacity-0 group-hover:opacity-100 pointer-events-none"></div>
</div>

<div className="flex-1 tech-border p-8 bg-void relative overflow-hidden group">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity"></div>
<div className="absolute inset-0 bg-gradient-to-r from-void to-transparent"></div>
<div className="relative z-10 h-full flex flex-col justify-end">
<h3 className="text-xl font-medium mb-2">Thermal Signature</h3>
<p className="font-mono text-xs text-white/50">
                            IR-defeating coating reduces heat signature by 45%, making you invisible to standard thermal optics.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen bg-black flex flex-col lg:flex-row border-t border-white/10">

<div className="w-full lg:w-3/5 relative bg-void flex items-center justify-center overflow-hidden group">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-void to-void"></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>

<div className="relative z-10 w-[280px] h-[360px] md:w-[400px] md:h-[500px] bg-graphene tech-border clip-slant flex items-center justify-center animate-pulse-glow">
<img alt="Fabric Texture" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay grayscale contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="relative z-20 text-center">
<iconify-icon className="text-6xl text-acid/80 mb-4" icon="solar:shield-check-linear"></iconify-icon>
<div className="font-mono text-xs text-acid">ARMOR_INTEGRITY: 100%</div>
</div>

<div className="absolute w-full h-1 bg-acid/50 shadow-[0_0_15px_#CCFF00] top-0 animate-scan-v"></div>
</div>

<div className="absolute top-1/4 left-1/4 hidden md:block">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-acid rounded-full"></div>
<div className="px-2 py-1 bg-white/5 backdrop-blur-sm border border-white/10 text-[10px] font-mono">
                        CERAMIC_PLATES
                    </div>
</div>
<div className="w-px h-16 bg-gradient-to-b from-acid to-transparent ml-1"></div>
</div>
<div className="absolute bottom-1/4 right-1/4 hidden md:block text-right">
<div className="w-px h-16 bg-gradient-to-t from-acid to-transparent ml-auto mr-1"></div>
<div className="flex items-center gap-2 justify-end">
<div className="px-2 py-1 bg-white/5 backdrop-blur-sm border border-white/10 text-[10px] font-mono">
                        MAG-LOCK™
                    </div>
<div className="w-2 h-2 bg-acid rounded-full"></div>
</div>
</div>
</div>

<div className="w-full lg:w-2/5 bg-graphene border-l border-white/10 p-8 md:p-12 flex flex-col">
<div className="mb-10">
<div className="font-mono text-[10px] text-acid mb-2 tracking-widest">SYSTEM_CONFIGURATION</div>
<h2 className="text-3xl font-medium tracking-tight">LOADOUT SELECTION</h2>
</div>
<div className="flex-1 space-y-6">

<div className="group relative cursor-pointer">
<div className="p-6 border border-white/10 bg-void hover:border-acid/50 transition-all flex justify-between items-center">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-white/5 flex items-center justify-center text-white/50 group-hover:text-acid group-hover:bg-acid/10 transition-colors">
<iconify-icon className="text-xl" icon="solar:t-shirt-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-bold uppercase tracking-wider">Core Layer</h4>
<p className="text-xs text-white/40 font-mono mt-1">Merino / Carbon blend</p>
</div>
</div>
<iconify-icon className="text-white/30" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="group relative cursor-pointer">
<div className="p-6 border border-acid bg-white/5 transition-all flex justify-between items-center shadow-[0_0_20px_-10px_rgba(204,255,0,0.2)]">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-acid flex items-center justify-center text-black">
<iconify-icon className="text-xl" icon="solar:shield-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-bold uppercase tracking-wider text-acid">Outer Shell</h4>
<p className="text-xs text-white/40 font-mono mt-1">Graphene Hardshell</p>
</div>
</div>
<iconify-icon className="text-acid" icon="solar:check-circle-bold"></iconify-icon>
</div>
</div>

<div className="group relative cursor-pointer">
<div className="p-6 border border-white/10 bg-void hover:border-acid/50 transition-all flex justify-between items-center">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-white/5 flex items-center justify-center text-white/50 group-hover:text-acid group-hover:bg-acid/10 transition-colors">
<iconify-icon className="text-xl" icon="solar:bag-3-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-bold uppercase tracking-wider">Modular Pack</h4>
<p className="text-xs text-white/40 font-mono mt-1">20L Expansion Unit</p>
</div>
</div>
<iconify-icon className="text-white/30" icon="solar:add-circle-linear"></iconify-icon>
</div>
</div>
</div>

<div className="mt-10 pt-8 border-t border-white/10">
<div className="flex justify-between items-end mb-6">
<div>
<div className="font-mono text-[10px] text-white/40 mb-1">ESTIMATED_COST</div>
<div className="text-3xl font-mono font-bold text-white tracking-tighter">$850.00</div>
</div>
<div className="text-right">
<div className="font-mono text-[10px] text-acid mb-1">AVAILABILITY</div>
<div className="text-xs text-white">IN_STOCK [3 UNITS]</div>
</div>
</div>
<button className="w-full py-4 bg-acid text-black font-mono text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2">
                    Proceed to Checkout
                    <iconify-icon icon="solar:card-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<footer className="bg-void border-t border-white/5 pt-20 pb-8 relative">
<div className="max-w-[1920px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-2">
<h3 className="text-4xl font-medium tracking-tighter mb-6">JOIN THE <br/><span className="text-acid">RESISTANCE</span></h3>
<p className="text-white/50 max-w-md mb-8 font-mono text-sm">
                        Receive encrypted transmissions regarding product drops, field tests, and technological breakthroughs.
                    </p>
<form className="flex border-b border-white/20 max-w-sm group focus-within:border-acid transition-colors">
<input className="bg-transparent w-full py-3 outline-none font-mono text-sm placeholder-white/20" placeholder="ENTER_COMMS_ID" type="email"/>
<button className="text-white/50 group-focus-within:text-acid hover:text-white transition-colors" type="button">
<iconify-icon className="text-xl" icon="solar:plain-3-linear"></iconify-icon>
</button>
</form>
</div>
<div>
<h4 className="font-mono text-[10px] text-acid mb-6 uppercase tracking-widest">Directory</h4>
<ul className="space-y-4 font-mono text-xs text-white/60">
<li><a className="hover:text-white hover:translate-x-1 transition-all inline-block" href="#">/// MANIFESTO</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all inline-block" href="#">/// RESEARCH_LABS</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all inline-block" href="#">/// FIELD_REPORTS</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all inline-block" href="#">/// WARRANTY</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-[10px] text-acid mb-6 uppercase tracking-widest">Connect</h4>
<ul className="space-y-4 font-mono text-xs text-white/60">
<li><a className="hover:text-white transition-colors" href="#">INSTAGRAM</a></li>
<li><a className="hover:text-white transition-colors" href="#">TWITTER / X</a></li>
<li><a className="hover:text-white transition-colors" href="#">DISCORD</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="font-mono text-[10px] text-white/30">
                    © 2024 AEGIS LABS. ALL RIGHTS RESERVED.
                </div>
<div className="flex items-center gap-2 font-mono text-[10px] text-white/30">
<span className="w-1.5 h-1.5 bg-acid rounded-full animate-pulse"></span>
                    SERVER: TOKYO_03
                </div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-full pointer-events-none opacity-[0.02] flex items-end justify-center overflow-hidden">
<h1 className="text-[25vw] font-bold leading-none tracking-tighter">AEGIS</h1>
</div>
</footer>

    </>
  );
}
