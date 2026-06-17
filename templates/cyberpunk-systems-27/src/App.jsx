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
      
<div className="relative w-full min-h-screen flex flex-col">

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-noise opacity-30"></div>
<div className="absolute inset-0 scanlines opacity-20"></div>

<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/20 blur-[120px] rounded-full"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full"></div>
</div>

<header className="relative z-10 pt-16 pb-12 px-6 md:px-12 max-w-[1600px] mx-auto w-full">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-red-900/30 pb-6">
<div>
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-red-600 text-2xl" icon="solar:programming-linear"></iconify-icon>
<span className="font-rajdhani font-bold tracking-[0.2em] text-red-600 text-xs uppercase">System Interface V.99</span>
</div>
<h1 className="font-orbitron font-black text-5xl md:text-7xl uppercase tracking-tighter leading-[0.85] text-white">
                        Service<br/>
<span className="text-red-600">Protocols</span>
</h1>
</div>
<div className="flex flex-col items-end text-right">
<p className="font-rajdhani text-neutral-400 max-w-sm text-sm md:text-base leading-relaxed">
                        Deploying next-gen architecture for digital supremacy. Select a module to initialize development sequence.
                    </p>
</div>
</div>
</header>

<main className="relative z-10 px-6 md:px-12 pb-20 max-w-[1600px] mx-auto w-full">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 md:gap-x-8">

<div className="group relative w-full">

<div className="relative transform -skew-x-12 bg-neutral-900/50 border border-neutral-800 transition-all duration-300 ease-out hover:bg-red-600 hover:border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:-translate-y-2 overflow-hidden h-[380px]">

<div className="transform skew-x-12 w-[140%] -ml-[20%] h-full relative">

<div className="absolute inset-0 z-0">
<img alt="AI" className="w-full h-full object-cover opacity-60 mix-blend-luminosity transition-all duration-500 group-hover:mix-blend-normal group-hover:opacity-30 group-hover:scale-110" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:from-red-900/90 group-hover:via-red-800/50"></div>
</div>

<div className="relative z-10 h-full flex flex-col justify-end p-8">
<div className="mb-auto flex justify-between items-start">
<span className="font-orbitron text-4xl font-bold text-neutral-700 group-hover:text-white/20 transition-colors">01</span>
<iconify-icon className="text-red-500 group-hover:text-white transition-colors" icon="solar:brain-linear" width="32"></iconify-icon>
</div>
<h3 className="font-orbitron font-bold text-2xl uppercase tracking-tight text-white mb-2 group-hover:text-black">AI / ML Dev</h3>
<p className="font-rajdhani font-medium text-neutral-400 text-sm leading-snug group-hover:text-black/80 transition-colors">
                                    Neural networks and predictive models designed to automate complex decision trees.
                                </p>
</div>
</div>

<div className="absolute bottom-0 right-0 w-12 h-1 bg-red-600 group-hover:bg-black transition-colors"></div>
</div>
</div>

<div className="group relative w-full">
<div className="relative transform -skew-x-12 bg-neutral-900/50 border border-neutral-800 transition-all duration-300 ease-out hover:bg-red-600 hover:border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:-translate-y-2 overflow-hidden h-[380px]">
<div className="transform skew-x-12 w-[140%] -ml-[20%] h-full relative">
<div className="absolute inset-0 z-0">
<img alt="VR" className="w-full h-full object-cover opacity-60 mix-blend-luminosity transition-all duration-500 group-hover:mix-blend-normal group-hover:opacity-30 group-hover:scale-110" src="https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:from-red-900/90 group-hover:via-red-800/50"></div>
</div>
<div className="relative z-10 h-full flex flex-col justify-end p-8">
<div className="mb-auto flex justify-between items-start">
<span className="font-orbitron text-4xl font-bold text-neutral-700 group-hover:text-white/20 transition-colors">02</span>
<iconify-icon className="text-red-500 group-hover:text-white transition-colors" icon="solar:glasses-linear" width="32"></iconify-icon>
</div>
<h3 className="font-orbitron font-bold text-2xl uppercase tracking-tight text-white mb-2 group-hover:text-black">Spatial Comp.</h3>
<p className="font-rajdhani font-medium text-neutral-400 text-sm leading-snug group-hover:text-black/80 transition-colors">
                                    Immersive AR/VR environments blurring the line between physical and digital reality.
                                </p>
</div>
</div>
<div className="absolute bottom-0 right-0 w-12 h-1 bg-red-600 group-hover:bg-black transition-colors"></div>
</div>
</div>

<div className="group relative w-full">
<div className="relative transform -skew-x-12 bg-neutral-900/50 border border-neutral-800 transition-all duration-300 ease-out hover:bg-red-600 hover:border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:-translate-y-2 overflow-hidden h-[380px]">
<div className="transform skew-x-12 w-[140%] -ml-[20%] h-full relative">
<div className="absolute inset-0 z-0">
<img alt="Game" className="w-full h-full object-cover opacity-60 mix-blend-luminosity transition-all duration-500 group-hover:mix-blend-normal group-hover:opacity-30 group-hover:scale-110" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:from-red-900/90 group-hover:via-red-800/50"></div>
</div>
<div className="relative z-10 h-full flex flex-col justify-end p-8">
<div className="mb-auto flex justify-between items-start">
<span className="font-orbitron text-4xl font-bold text-neutral-700 group-hover:text-white/20 transition-colors">03</span>
<iconify-icon className="text-red-500 group-hover:text-white transition-colors" icon="solar:gamepad-linear" width="32"></iconify-icon>
</div>
<h3 className="font-orbitron font-bold text-2xl uppercase tracking-tight text-white mb-2 group-hover:text-black">Game Engine</h3>
<p className="font-rajdhani font-medium text-neutral-400 text-sm leading-snug group-hover:text-black/80 transition-colors">
                                    High-fidelity interactive experiences built on Unreal and Unity architectures.
                                </p>
</div>
</div>
<div className="absolute bottom-0 right-0 w-12 h-1 bg-red-600 group-hover:bg-black transition-colors"></div>
</div>
</div>

<div className="group relative w-full">
<div className="relative transform -skew-x-12 bg-neutral-900/50 border border-neutral-800 transition-all duration-300 ease-out hover:bg-red-600 hover:border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:-translate-y-2 overflow-hidden h-[380px]">
<div className="transform skew-x-12 w-[140%] -ml-[20%] h-full relative">
<div className="absolute inset-0 z-0">
<img alt="Mobile" className="w-full h-full object-cover opacity-60 mix-blend-luminosity transition-all duration-500 group-hover:mix-blend-normal group-hover:opacity-30 group-hover:scale-110" src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:from-red-900/90 group-hover:via-red-800/50"></div>
</div>
<div className="relative z-10 h-full flex flex-col justify-end p-8">
<div className="mb-auto flex justify-between items-start">
<span className="font-orbitron text-4xl font-bold text-neutral-700 group-hover:text-white/20 transition-colors">04</span>
<iconify-icon className="text-red-500 group-hover:text-white transition-colors" icon="solar:smartphone-linear" width="32"></iconify-icon>
</div>
<h3 className="font-orbitron font-bold text-2xl uppercase tracking-tight text-white mb-2 group-hover:text-black">Mobile Native</h3>
<p className="font-rajdhani font-medium text-neutral-400 text-sm leading-snug group-hover:text-black/80 transition-colors">
                                    Performance-critical iOS and Android applications with encrypted data layers.
                                </p>
</div>
</div>
<div className="absolute bottom-0 right-0 w-12 h-1 bg-red-600 group-hover:bg-black transition-colors"></div>
</div>
</div>

<div className="group relative w-full">
<div className="relative transform -skew-x-12 bg-neutral-900/50 border border-neutral-800 transition-all duration-300 ease-out hover:bg-red-600 hover:border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:-translate-y-2 overflow-hidden h-[380px]">
<div className="transform skew-x-12 w-[140%] -ml-[20%] h-full relative">
<div className="absolute inset-0 z-0">
<img alt="Art" className="w-full h-full object-cover opacity-60 mix-blend-luminosity transition-all duration-500 group-hover:mix-blend-normal group-hover:opacity-30 group-hover:scale-110" src="https://images.unsplash.com/photo-1617396900799-f4ad2d495b99?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:from-red-900/90 group-hover:via-red-800/50"></div>
</div>
<div className="relative z-10 h-full flex flex-col justify-end p-8">
<div className="mb-auto flex justify-between items-start">
<span className="font-orbitron text-4xl font-bold text-neutral-700 group-hover:text-white/20 transition-colors">05</span>
<iconify-icon className="text-red-500 group-hover:text-white transition-colors" icon="solar:palette-linear" width="32"></iconify-icon>
</div>
<h3 className="font-orbitron font-bold text-2xl uppercase tracking-tight text-white mb-2 group-hover:text-black">2D / 3D Asset</h3>
<p className="font-rajdhani font-medium text-neutral-400 text-sm leading-snug group-hover:text-black/80 transition-colors">
                                    Industrial design and artistic rendering for next-generation visual fidelity.
                                </p>
</div>
</div>
<div className="absolute bottom-0 right-0 w-12 h-1 bg-red-600 group-hover:bg-black transition-colors"></div>
</div>
</div>

<div className="group relative w-full">
<div className="relative transform -skew-x-12 bg-neutral-900/50 border border-neutral-800 transition-all duration-300 ease-out hover:bg-red-600 hover:border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:-translate-y-2 overflow-hidden h-[380px]">
<div className="transform skew-x-12 w-[140%] -ml-[20%] h-full relative">
<div className="absolute inset-0 z-0">
<img alt="IT" className="w-full h-full object-cover opacity-60 mix-blend-luminosity transition-all duration-500 group-hover:mix-blend-normal group-hover:opacity-30 group-hover:scale-110" src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:from-red-900/90 group-hover:via-red-800/50"></div>
</div>
<div className="relative z-10 h-full flex flex-col justify-end p-8">
<div className="mb-auto flex justify-between items-start">
<span className="font-orbitron text-4xl font-bold text-neutral-700 group-hover:text-white/20 transition-colors">06</span>
<iconify-icon className="text-red-500 group-hover:text-white transition-colors" icon="solar:server-square-linear" width="32"></iconify-icon>
</div>
<h3 className="font-orbitron font-bold text-2xl uppercase tracking-tight text-white mb-2 group-hover:text-black">IT Strategy</h3>
<p className="font-rajdhani font-medium text-neutral-400 text-sm leading-snug group-hover:text-black/80 transition-colors">
                                    Scalable infrastructure planning and server-side optimization for enterprise.
                                </p>
</div>
</div>
<div className="absolute bottom-0 right-0 w-12 h-1 bg-red-600 group-hover:bg-black transition-colors"></div>
</div>
</div>

<div className="group relative w-full">
<div className="relative transform -skew-x-12 bg-neutral-900/50 border border-neutral-800 transition-all duration-300 ease-out hover:bg-red-600 hover:border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:-translate-y-2 overflow-hidden h-[380px]">
<div className="transform skew-x-12 w-[140%] -ml-[20%] h-full relative">
<div className="absolute inset-0 z-0">
<img alt="UIUX" className="w-full h-full object-cover opacity-60 mix-blend-luminosity transition-all duration-500 group-hover:mix-blend-normal group-hover:opacity-30 group-hover:scale-110" src="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:from-red-900/90 group-hover:via-red-800/50"></div>
</div>
<div className="relative z-10 h-full flex flex-col justify-end p-8">
<div className="mb-auto flex justify-between items-start">
<span className="font-orbitron text-4xl font-bold text-neutral-700 group-hover:text-white/20 transition-colors">07</span>
<iconify-icon className="text-red-500 group-hover:text-white transition-colors" icon="solar:ruler-pen-linear" width="32"></iconify-icon>
</div>
<h3 className="font-orbitron font-bold text-2xl uppercase tracking-tight text-white mb-2 group-hover:text-black">UI / UX Design</h3>
<p className="font-rajdhani font-medium text-neutral-400 text-sm leading-snug group-hover:text-black/80 transition-colors">
                                    Human-machine interfaces designed for rapid data consumption and control.
                                </p>
</div>
</div>
<div className="absolute bottom-0 right-0 w-12 h-1 bg-red-600 group-hover:bg-black transition-colors"></div>
</div>
</div>

<div className="group relative w-full">
<div className="relative transform -skew-x-12 bg-neutral-900/50 border border-neutral-800 transition-all duration-300 ease-out hover:bg-red-600 hover:border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:-translate-y-2 overflow-hidden h-[380px]">
<div className="transform skew-x-12 w-[140%] -ml-[20%] h-full relative">
<div className="absolute inset-0 z-0">
<img alt="Security" className="w-full h-full object-cover opacity-60 mix-blend-luminosity transition-all duration-500 group-hover:mix-blend-normal group-hover:opacity-30 group-hover:scale-110" src="https://images.unsplash.com/photo-1558494949-efc025708dc7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:from-red-900/90 group-hover:via-red-800/50"></div>
</div>
<div className="relative z-10 h-full flex flex-col justify-end p-8">
<div className="mb-auto flex justify-between items-start">
<span className="font-orbitron text-4xl font-bold text-neutral-700 group-hover:text-white/20 transition-colors">08</span>
<iconify-icon className="text-red-500 group-hover:text-white transition-colors" icon="solar:shield-check-linear" width="32"></iconify-icon>
</div>
<h3 className="font-orbitron font-bold text-2xl uppercase tracking-tight text-white mb-2 group-hover:text-black">Cyber Security</h3>
<p className="font-rajdhani font-medium text-neutral-400 text-sm leading-snug group-hover:text-black/80 transition-colors">
                                    Hardened protocols and defensive countermeasures against intrusion.
                                </p>
</div>
</div>
<div className="absolute bottom-0 right-0 w-12 h-1 bg-red-600 group-hover:bg-black transition-colors"></div>
</div>
</div>
</div>
</main>

<footer className="fixed bottom-0 left-0 w-full z-20 pointer-events-none px-6 py-4 flex justify-between items-end">
<div className="flex items-center gap-4">
<div className="w-2 h-2 bg-red-600 animate-ping"></div>
<span className="font-rajdhani font-semibold text-xs text-red-600 tracking-widest uppercase bg-black/50 px-2 py-1 backdrop-blur-sm border border-red-900/30">System Online</span>
</div>
</footer>
</div>

    </>
  );
}
