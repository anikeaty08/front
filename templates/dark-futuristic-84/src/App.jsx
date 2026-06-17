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
theme: {
extend: {
colors: {
crimson: {
DEFAULT: '#FF0f0f',
dim: 'rgba(255, 15, 15, 0.1)',
glow: 'rgba(255, 15, 15, 0.5)'
},
venom: {
black: '#020202',
dark: '#080808',
gray: '#121212',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Orbitron', 'sans-serif'],
},
backgroundImage: {
'hero-gradient': 'radial-gradient(circle at 30% 50%, rgba(255,15,15,0.15) 0%, rgba(2,2,2,0) 60%)',
'glass': 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
'red-fade': 'linear-gradient(to right, #FF0f0f, transparent)',
}
}
}
}

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
      

<nav className="fixed top-0 w-full z-50 glass-card border-b border-crimson/10 bg-black/80">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="font-display font-bold text-2xl tracking-tighter text-white flex items-center gap-1 hover:text-crimson transition-colors duration-300" href="#">
<span className="text-crimson">C</span>ARNAGE
            </a>
<div className="hidden md:flex gap-8 text-xs tracking-widest uppercase font-medium text-neutral-400">
<a className="hover:text-crimson hover:shadow-[0_0_10px_rgba(255,15,15,0.5)] transition-all duration-300" href="#about">Host</a>
<a className="hover:text-crimson hover:shadow-[0_0_10px_rgba(255,15,15,0.5)] transition-all duration-300" href="#powers">Chaos</a>
<a className="hover:text-crimson hover:shadow-[0_0_10px_rgba(255,15,15,0.5)] transition-all duration-300" href="#gallery">Gallery</a>
</div>
<button className="md:hidden text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<a className="hidden md:flex items-center gap-2 px-6 py-2 border border-crimson/20 rounded-full text-xs font-semibold text-white hover:bg-crimson hover:border-crimson hover:text-black hover:shadow-[0_0_20px_rgba(255,15,15,0.6)] transition-all duration-300 bg-crimson/5" href="#cta">
                UNLEASH
                <iconify-icon icon="solar:flame-linear" width="16"></iconify-icon>
</a>
</div>
</nav>

<section className="relative h-screen w-full flex items-center overflow-hidden hero-bg">

<div className="absolute inset-0 bg-venom-black/70 red-vignette z-10"></div>

<div className="absolute inset-0 bg-gradient-to-r from-venom-black via-venom-black/80 to-transparent z-10"></div>
<div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-venom-black to-transparent z-10"></div>

<div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-crimson/20 blur-[120px] rounded-full z-10 pointer-events-none animate-pulse-red"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-crimson/10 blur-[150px] rounded-full z-10 pointer-events-none"></div>

<div className="absolute inset-0 z-10 opacity-40 pointer-events-none">
<div className="absolute top-1/3 left-1/4 w-1 h-1 bg-crimson rounded-full animate-float blur-[1px]"></div>
<div className="absolute top-2/3 left-1/2 w-2 h-2 bg-white rounded-full animate-float opacity-50 blur-[2px]" style={{animationDelay: '1.5s'}}></div>
<div className="absolute bottom-1/4 left-10 w-1 h-1 bg-crimson rounded-full animate-float opacity-80" style={{animationDelay: '0.5s'}}></div>
</div>

<div className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-10">
<div className="max-w-3xl">
<div className="mb-6 flex items-center gap-4">
<span className="w-12 h-[2px] bg-gradient-to-r from-crimson to-transparent"></span>
<span className="text-crimson font-mono text-xs tracking-[0.3em] uppercase drop-shadow-[0_0_10px_rgba(255,15,15,0.8)]">
                        Subject: Cletus Kasady
                    </span>
</div>
<h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter leading-[0.85] mb-8 drop-shadow-xl">
                    LET THERE <br/>
                    BE <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson via-red-500 to-white animate-pulse-red">CARNAGE</span>.
                </h1>
<p className="max-w-lg text-sm md:text-base text-neutral-400 font-light leading-relaxed mb-10 border-l-2 border-crimson/30 pl-6">
                    Chaos is not a pit. Chaos is a ladder. Bond with the red symbiote and embrace absolute destruction. 
                    Order is overrated.
                </p>
<div className="flex flex-col sm:flex-row gap-5 items-start">
<button className="group relative px-8 py-4 bg-crimson text-black font-display font-bold tracking-widest text-xs uppercase skew-x-[-10deg] hover:skew-x-0 transition-transform duration-300">
<span className="relative z-10 flex items-center gap-2 skew-x-[10deg] group-hover:skew-x-0 transition-transform">
                            Enter The Chaos
                            <iconify-icon icon="solar:danger-circle-linear" width="18"></iconify-icon>
</span>
<div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
<div className="absolute -inset-1 bg-crimson blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-300 -z-10"></div>
</button>
<button className="px-8 py-4 bg-transparent border border-white/10 text-white font-display font-medium tracking-widest text-xs uppercase skew-x-[-10deg] hover:skew-x-0 hover:border-crimson hover:text-crimson transition-all duration-300 backdrop-blur-sm">
<span className="block skew-x-[10deg] group-hover:skew-x-0">View Origins</span>
</button>
</div>
</div>
</div>

<div className="absolute bottom-10 right-10 z-20 flex flex-col items-center gap-4">
<div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-crimson to-transparent"></div>
<span className="text-[10px] uppercase tracking-widest text-crimson rotate-90 origin-center translate-y-4">Scroll</span>
</div>
</section>

<section className="relative py-24 md:py-32 bg-venom-black overflow-hidden" id="about">

<div className="absolute top-20 right-0 w-[400px] h-[800px] bg-gradient-to-b from-crimson/10 to-transparent blur-[100px] pointer-events-none transform rotate-12"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div className="space-y-10 order-2 lg:order-1">
<div className="inline-flex items-center gap-3 text-crimson text-xs font-bold tracking-widest uppercase">
<iconify-icon icon="solar:bomb-minimalistic-linear" width="16"></iconify-icon>
                    Maximum Carnage
                </div>
<h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-none">
                    PAINT THE TOWN <br/> <span className="text-crimson text-stroke-sm">RED</span>
</h2>
<div className="space-y-6 text-neutral-400 font-light text-sm md:text-base leading-relaxed">
<p>
                        The offspring of Venom, bonded to the psychotic serial killer Cletus Kasady. Together, they form a bond stronger than any other symbiote—a perfect fusion of bloodlust and alien power.
                    </p>
<p>
                        Where Venom has a code, Carnage has none. The suit doesn't just cover him; it lives in his bloodstream. It creates weapons from his very essence. It is pure, unadulterated chaos given form.
                    </p>
</div>
<div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5">
<div>
<h4 className="font-display text-3xl text-crimson">99%</h4>
<span className="text-[10px] text-neutral-500 uppercase tracking-widest">Bond Rate</span>
</div>
<div>
<h4 className="font-display text-3xl text-white">RED</h4>
<span className="text-[10px] text-neutral-500 uppercase tracking-widest">Class</span>
</div>
<div>
<h4 className="font-display text-3xl text-neutral-400">∞</h4>
<span className="text-[10px] text-neutral-500 uppercase tracking-widest">Threat Level</span>
</div>
</div>
</div>

<div className="relative order-1 lg:order-2 group perspective-1000">
<div className="relative z-10 overflow-hidden transform group-hover:rotate-y-6 transition-transform duration-700 ease-out border border-crimson/20 shadow-[0_0_50px_rgba(255,15,15,0.15)]">
<img alt="Red Symbiote" className="w-full h-[600px] object-cover filter contrast-125 hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-black via-crimson/10 to-transparent mix-blend-overlay"></div>

<div className="absolute top-6 right-6">
<iconify-icon className="text-crimson animate-pulse" icon="solar:record-circle-linear" width="24"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 w-full bg-black/80 backdrop-blur-md p-6 border-t border-crimson/30 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
<div className="text-xs font-mono text-crimson mb-1">WARNING: UNSTABLE</div>
<div className="text-white font-display text-lg">Symbiote Structure: Liquid</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-venom-dark relative overflow-hidden" id="powers">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,15,15,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,15,15,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex justify-between items-end mb-16">
<div>
<span className="text-crimson text-xs font-bold tracking-widest uppercase mb-2 block">Arsenal</span>
<h2 className="font-display text-3xl md:text-5xl font-medium text-white tracking-tight">CHAOTIC TRAITS</h2>
</div>
<div className="hidden md:block w-1/3 h-[1px] bg-gradient-to-l from-crimson/50 to-transparent"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative p-8 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 hover:border-crimson/50 rounded-none transition-all duration-300 hover:-translate-y-2">
<div className="absolute inset-0 bg-crimson/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="w-12 h-12 flex items-center justify-center text-white mb-6 bg-crimson shadow-[0_0_15px_rgba(255,15,15,0.4)] group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:sword-linear" width="24"></iconify-icon>
</div>
<h3 className="font-display text-lg text-white mb-3 tracking-wide group-hover:text-crimson transition-colors">Weapon Manifestation</h3>
<p className="text-xs text-neutral-400 font-light leading-relaxed">Unlike Venom, Carnage can solidify parts of his body into axes, spikes, and blades instantly.</p>
</div>

<div className="group relative p-8 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 hover:border-crimson/50 rounded-none transition-all duration-300 hover:-translate-y-2">
<div className="absolute inset-0 bg-crimson/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="w-12 h-12 flex items-center justify-center text-white mb-6 bg-venom-gray border border-crimson/30 group-hover:bg-crimson group-hover:border-crimson transition-colors">
<iconify-icon icon="solar:wifi-router-linear" width="24"></iconify-icon>
</div>
<h3 className="font-display text-lg text-white mb-3 tracking-wide group-hover:text-crimson transition-colors">360° Awareness</h3>
<p className="text-xs text-neutral-400 font-light leading-relaxed">The symbiote acts as a sensory web, detecting threats from every angle simultaneously.</p>
</div>

<div className="group relative p-8 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 hover:border-crimson/50 rounded-none transition-all duration-300 hover:-translate-y-2">
<div className="absolute inset-0 bg-crimson/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="w-12 h-12 flex items-center justify-center text-white mb-6 bg-venom-gray border border-crimson/30 group-hover:bg-crimson group-hover:border-crimson transition-colors">
<iconify-icon icon="solar:infinity-linear" width="24"></iconify-icon>
</div>
<h3 className="font-display text-lg text-white mb-3 tracking-wide group-hover:text-crimson transition-colors">Undetectable</h3>
<p className="text-xs text-neutral-400 font-light leading-relaxed">Carnage is undetectable by Spider-Sense, making him the ultimate predator for spider-heroes.</p>
</div>

<div className="group relative p-8 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 hover:border-crimson/50 rounded-none transition-all duration-300 hover:-translate-y-2">
<div className="absolute inset-0 bg-crimson/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="w-12 h-12 flex items-center justify-center text-white mb-6 bg-venom-gray border border-crimson/30 group-hover:bg-crimson group-hover:border-crimson transition-colors">
<iconify-icon icon="solar:ghost-linear" width="24"></iconify-icon>
</div>
<h3 className="font-display text-lg text-white mb-3 tracking-wide group-hover:text-crimson transition-colors">Blood Bond</h3>
<p className="text-xs text-neutral-400 font-light leading-relaxed">Bonded to Cletus's bloodstream, they cannot be separated by conventional sonic methods.</p>
</div>
</div>
</div>
</section>

<section className="py-0 bg-black border-t border-crimson/10" id="gallery">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-auto">
<div className="group relative h-[400px] overflow-hidden border-r border-b border-white/5">
<img alt="Carnage Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-crimson/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply"></div>
<div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
<p className="font-display text-white text-xl uppercase tracking-tighter">Bloodlust</p>
</div>
</div>
<div className="group relative h-[400px] overflow-hidden border-r border-b border-white/5">
<img alt="Carnage Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1550100136-e074f0145835?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-crimson/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply"></div>
<div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
<p className="font-display text-white text-xl uppercase tracking-tighter">Nightmare</p>
</div>
</div>
<div className="group relative h-[400px] overflow-hidden border-r border-b border-white/5">
<img alt="Carnage Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1597423244036-ef5020e8d2f5?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-crimson/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply"></div>
<div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
<p className="font-display text-white text-xl uppercase tracking-tighter">Insanity</p>
</div>
</div>
<div className="group relative h-[400px] overflow-hidden border-b border-white/5">
<img alt="Carnage Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1496337589254-7e19d01cbc44?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-crimson/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply"></div>
<div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
<p className="font-display text-white text-xl uppercase tracking-tighter">Rage</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-venom-black" id="evolution">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-display text-3xl md:text-4xl font-medium text-white tracking-tight mb-16 text-left">
<span className="text-crimson">///</span> SYMBIOSIS STAGES
            </h2>
<div className="relative mt-20">

<div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-crimson to-transparent -translate-y-1/2 z-0 shadow-[0_0_20px_rgba(255,15,15,0.8)]"></div>
<div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">

<div className="group flex flex-col items-center text-center lg:transform lg:translate-y-8">
<div className="w-16 h-16 rounded-full bg-black border border-white/20 flex items-center justify-center text-neutral-500 group-hover:border-crimson group-hover:text-crimson group-hover:shadow-[0_0_25px_rgba(255,15,15,0.6)] transition-all duration-300 mb-4 z-10">
<iconify-icon icon="solar:test-tube-linear" width="24"></iconify-icon>
</div>
<h4 className="font-display text-sm text-white mb-2 group-hover:text-crimson transition-colors">Origins</h4>
<p className="text-[10px] text-neutral-500 uppercase tracking-wider">Cell Block C</p>
</div>

<div className="group flex flex-col items-center text-center lg:transform lg:-translate-y-8">
<div className="w-16 h-16 rounded-full bg-black border border-white/20 flex items-center justify-center text-neutral-500 group-hover:border-crimson group-hover:text-crimson group-hover:shadow-[0_0_25px_rgba(255,15,15,0.6)] transition-all duration-300 mb-4 z-10">
<iconify-icon icon="solar:drop-linear" width="24"></iconify-icon>
</div>
<h4 className="font-display text-sm text-white mb-2 group-hover:text-crimson transition-colors">Infection</h4>
<p className="text-[10px] text-neutral-500 uppercase tracking-wider">Blood Mix</p>
</div>

<div className="group flex flex-col items-center text-center lg:transform lg:translate-y-8">
<div className="w-16 h-16 rounded-full bg-black border border-white/20 flex items-center justify-center text-neutral-500 group-hover:border-crimson group-hover:text-crimson group-hover:shadow-[0_0_25px_rgba(255,15,15,0.6)] transition-all duration-300 mb-4 z-10">
<iconify-icon icon="solar:mask-happly-linear" width="24"></iconify-icon>
</div>
<h4 className="font-display text-sm text-white mb-2 group-hover:text-crimson transition-colors">Awakening</h4>
<p className="text-[10px] text-neutral-500 uppercase tracking-wider">First Kill</p>
</div>

<div className="group flex flex-col items-center text-center lg:transform lg:-translate-y-8">
<div className="w-16 h-16 rounded-full bg-black border border-white/20 flex items-center justify-center text-neutral-500 group-hover:border-crimson group-hover:text-crimson group-hover:shadow-[0_0_25px_rgba(255,15,15,0.6)] transition-all duration-300 mb-4 z-10">
<iconify-icon icon="solar:fire-linear" width="24"></iconify-icon>
</div>
<h4 className="font-display text-sm text-white mb-2 group-hover:text-crimson transition-colors">Rampage</h4>
<p className="text-[10px] text-neutral-500 uppercase tracking-wider">City Chaos</p>
</div>

<div className="group flex flex-col items-center text-center lg:transform lg:translate-y-8">
<div className="w-16 h-16 rounded-full bg-black border border-white/20 flex items-center justify-center text-neutral-500 group-hover:border-crimson group-hover:text-crimson group-hover:shadow-[0_0_25px_rgba(255,15,15,0.6)] transition-all duration-300 mb-4 z-10">
<iconify-icon icon="solar:crown-linear" width="24"></iconify-icon>
</div>
<h4 className="font-display text-sm text-white mb-2 group-hover:text-crimson transition-colors">Absolute</h4>
<p className="text-[10px] text-neutral-500 uppercase tracking-wider">Maximum Carnage</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 flex items-center justify-center overflow-hidden" id="cta">

<div className="absolute inset-0 bg-venom-dark"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-crimson/10 to-transparent"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-crimson/5 rounded-full blur-[120px] animate-pulse-red"></div>
<div className="relative z-10 text-center max-w-2xl px-6">
<h2 className="font-display text-4xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-none">
                PAINT IT <span className="text-crimson">RED</span>
</h2>
<p className="text-neutral-400 font-light text-sm md:text-lg mb-12 leading-relaxed max-w-lg mx-auto">
                Sanity is a prison. Break free and join the hive. The revolution begins with a single drop of blood.
            </p>
<button className="px-12 py-5 bg-gradient-to-r from-crimson to-red-600 text-white font-display font-bold text-sm tracking-widest uppercase skew-x-[-10deg] hover:skew-x-0 shadow-[0_0_40px_rgba(255,15,15,0.5)] hover:shadow-[0_0_60px_rgba(255,15,15,0.7)] transition-all duration-500">
<span className="inline-block skew-x-[10deg] hover:skew-x-0 transition-transform">Start The Carnage</span>
</button>
</div>
</section>

<footer className="bg-black border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

<div className="col-span-1 md:col-span-2">
<a className="font-display font-bold text-2xl tracking-tighter text-white mb-6 block group" href="#">
<span className="text-crimson group-hover:text-white transition-colors">C</span>ARNAGE
                    </a>
<p className="text-neutral-500 text-xs leading-relaxed max-w-xs font-light">
                        Warning: This site contains classified information regarding the Klyntar offspring designated as 'Carnage'. Viewer discretion is advised.
                    </p>
</div>

<div>
<h4 className="text-white font-display text-sm mb-6 flex items-center gap-2">
<span className="w-2 h-2 bg-crimson rounded-full"></span> DIRECTORY
                    </h4>
<ul className="space-y-4 text-xs text-neutral-500 font-light uppercase tracking-wider">
<li><a className="hover:text-crimson transition-colors" href="#">Ravencroft</a></li>
<li><a className="hover:text-crimson transition-colors" href="#">Host Profile</a></li>
<li><a className="hover:text-crimson transition-colors" href="#">Victims</a></li>
<li><a className="hover:text-crimson transition-colors" href="#">Sightings</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-display text-sm mb-6 flex items-center gap-2">
<span className="w-2 h-2 bg-crimson rounded-full"></span> NETWORK
                    </h4>
<div className="flex gap-4">
<a className="w-10 h-10 border border-white/10 rounded flex items-center justify-center text-neutral-400 hover:border-crimson hover:text-crimson hover:bg-crimson/5 transition-all duration-300" href="#">
<iconify-icon icon="solar:earth-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 border border-white/10 rounded flex items-center justify-center text-neutral-400 hover:border-crimson hover:text-crimson hover:bg-crimson/5 transition-all duration-300" href="#">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-neutral-600 uppercase tracking-wider">
                    © 2026 Ravencroft Institute. Eyes Only.
                </p>
<div className="flex gap-6 text-[10px] text-neutral-600 uppercase tracking-wider">
<a className="hover:text-crimson transition-colors" href="#">Privacy</a>
<a className="hover:text-crimson transition-colors" href="#">Security</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
