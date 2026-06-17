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
salai: {
bg: '#0B0F19',
surface: '#131826',
'surface-light': '#1E2538',
gold: '#D4AF37',
'gold-dim': '#997B26',
'gold-light': '#F2D06B',
cyber: '#00FFC8',
'text-primary': '#EAEAEA',
'text-secondary': '#8892B0',
}
},
fontFamily: {
cinzel: ['"Cinzel Decorative"', 'serif'],
inter: ['"Inter"', 'sans-serif'],
},
boxShadow: {
'glow-gold': '0 0 20px rgba(212, 175, 55, 0.15)',
'glow-cyber': '0 0 20px rgba(0, 255, 200, 0.15)',
'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
'inner-light': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spin-slow': 'spin 12s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
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
      

<div className="noise-overlay"></div>

<div className="fixed top-0 right-0 w-[800px] h-[800px] bg-salai-surface-light rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/3 pointer-events-none z-0"></div>
<div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-salai-gold-dim rounded-full blur-[150px] opacity-10 translate-y-1/3 -translate-x-1/4 pointer-events-none z-0"></div>

<div className="relative z-10 flex flex-col min-h-screen">

<header className="sticky top-0 z-40 w-full border-b border-salai-gold-dim/10 bg-salai-bg/70 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-4 group cursor-pointer">
<div className="relative w-8 h-8 flex items-center justify-center transition-transform duration-500 group-hover:rotate-180">
<div className="absolute inset-0 border border-salai-gold rotate-45 bg-salai-surface/50"></div>
<span className="relative font-cinzel text-salai-gold font-bold text-lg">S</span>
</div>
<div className="flex flex-col">
<span className="font-cinzel text-lg tracking-tight text-salai-text-primary leading-none">Salai</span>
<span className="font-inter text-[10px] tracking-widest uppercase text-salai-text-secondary">Apprentice</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="text-salai-text-secondary hover:text-salai-gold transition-colors duration-300 text-sm font-medium" href="#">Codex</a>
<a className="text-salai-text-secondary hover:text-salai-gold transition-colors duration-300 text-sm font-medium" href="#">Creations</a>
<a className="text-salai-text-secondary hover:text-salai-gold transition-colors duration-300 text-sm font-medium" href="#">Alchemy</a>
</nav>

<div className="flex items-center gap-6">
<button className="text-salai-text-secondary hover:text-salai-cyber transition-colors">
<svg className="lucide lucide-bell w-5 h-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
<div className="flex items-center gap-3 pl-6 border-l border-salai-surface-light">
<div className="text-right hidden sm:block">
<p className="text-xs font-cinzel text-salai-gold">Master</p>
<p className="text-xs text-salai-text-secondary font-inter">Architect</p>
</div>
<div className="w-8 h-8 rounded-full border border-salai-gold/50 bg-salai-surface p-0.5 cursor-pointer hover:border-salai-cyber transition-colors duration-300">
<div className="w-full h-full rounded-full bg-gradient-to-tr from-salai-surface to-salai-surface-light flex items-center justify-center">
<span className="font-cinzel text-xs text-salai-text-primary">L</span>
</div>
</div>
</div>
</div>
</div>
</header>

<main className="flex-grow flex flex-col lg:py-20 w-full max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 relative items-center justify-center">

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-radial from-salai-gold/10 to-transparent blur-[80px] rounded-full animate-pulse-slow pointer-events-none"></div>

<section className="text-center max-w-3xl z-10 mr-auto mb-16 ml-auto relative">
<h1 className="md:text-7xl text-salai-text-primary leading-tight text-5xl font-semibold tracking-tight font-cinzel mb-6">
                    Design Beyond <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-salai-gold via-salai-gold-light to-salai-cyber">Imagination</span>
</h1>
</section>

<section className="w-full max-w-4xl animate-float" style={{animationDelay: '1s'}}>

<div className="glass-panel rounded-2xl p-1 shadow-glass transition-all duration-500 hover:shadow-glow-gold hover:scale-[1.005]">

<div className="bg-salai-bg/40 rounded-xl border border-white/5 p-8 md:p-12 relative overflow-hidden">

<div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-salai-gold/40"></div>
<div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-salai-gold/40"></div>
<div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-salai-gold/40"></div>
<div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-salai-gold/40"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="space-y-8">
<div className="">
<h3 className="font-cinzel text-xl text-salai-text-primary mb-1">Project Parameters</h3>
<p className="text-xs text-salai-text-secondary font-inter">Define the constraints of your creation.</p>
</div>

<div className="group relative">
<label className="block text-xs font-inter text-salai-gold mb-2 uppercase tracking-wide">Project Name</label>
<div className="relative">
<input className="w-full bg-transparent border-b border-salai-surface-light py-2 text-salai-text-primary font-inter text-sm focus:outline-none focus:border-salai-cyber transition-colors duration-300 placeholder-salai-text-secondary/30" placeholder="Vitruvian Protocol..." type="text"/>
<svg className="lucide lucide-edit-3 absolute right-0 top-2 w-4 h-4 text-salai-text-secondary/50 group-focus-within:text-salai-cyber transition-colors" data-lucide="edit-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 21h8"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg>
</div>
</div>

<div className="group relative">
<label className="block text-xs font-inter text-salai-gold mb-2 uppercase tracking-wide">Dimension</label>
<div className="flex items-center gap-4">
<input className="w-20 bg-transparent border-b border-salai-surface-light py-2 text-salai-text-primary font-inter text-sm focus:outline-none focus:border-salai-cyber transition-colors duration-300" type="text" value="1.618"/>
<span className="text-salai-text-secondary text-xs">φ (Phi)</span>
</div>
</div>

<div className="flex items-center justify-between pt-2">
<span className="text-salai-text-secondary text-sm font-inter">Enable Neural Sync</span>
<label className="relative inline-flex items-center cursor-pointer group">
<input className="sr-only peer" type="checkbox"/>
<div className="border-salai-surface-light peer-focus:outline-none peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-salai-text-secondary after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-salai-surface-light peer-checked:after:bg-salai-cyber peer-checked:border-salai-cyber/50 shadow-inner-light w-11 h-6 border rounded-full"></div>
</label>
</div>
</div>

<div className="flex flex-col justify-between space-y-8">

<div className="flex-1 border border-dashed border-salai-gold-dim/30 rounded-lg bg-salai-surface/20 flex flex-col items-center justify-center p-6 text-center cursor-pointer hover:bg-salai-surface/40 hover:border-salai-gold/50 transition-all duration-300 group relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-salai-cyber/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
<div className="w-12 h-12 rounded-full bg-salai-surface border border-salai-surface-light flex items-center justify-center mb-4 shadow-glass group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-upload-cloud w-5 h-5 text-salai-gold group-hover:text-salai-cyber transition-colors" data-lucide="upload-cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8"></path><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17 4-4 4 4"></path></svg>
</div>
<h4 className="font-cinzel text-sm text-salai-text-primary mb-1">Upload Reference</h4>
<p className="text-xs text-salai-text-secondary">Drag parchment or sketch file here</p>
</div>

<button className="relative w-full overflow-hidden group rounded-sm">
<div className="absolute inset-0 bg-gradient-to-r from-salai-gold-dim to-salai-gold transition-all duration-300 group-hover:brightness-110"></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] mix-blend-overlay"></div>
<div className="relative px-6 py-4 flex items-center justify-center gap-3">
<span className="font-cinzel font-bold text-salai-bg tracking-widest uppercase text-sm">Initiate Process</span>
<svg className="lucide lucide-arrow-right w-4 h-4 text-salai-bg group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>

<div className="absolute -inset-1 bg-salai-gold blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
</button>
</div>
</div>
</div>
</div>

<div className="mt-6 flex items-center justify-between px-2">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-salai-cyber animate-pulse"></div>
<span className="text-[10px] font-inter uppercase tracking-widest text-salai-cyber/80">Neural Engine Active</span>
</div>
<div className="text-[10px] font-inter text-salai-text-secondary">
                        Latency: <span className="text-salai-text-primary">12ms</span>
</div>
</div>
</section>
</main>
</div>



    </>
  );
}
