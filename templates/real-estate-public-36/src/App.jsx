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
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
brand: {
bg: '#05010D', // Ultra dark purple/black
surface: '#0F0518',
primary: '#7C3AED', // Violet 600
accent: '#C084FC', // Purple 400
glow: '#A855F7',
border: '#2E1065',
}
},
backgroundImage: {
'cyber-gradient': 'linear-gradient(to right, #4c1d95, #d946ef)',
'void-gradient': 'radial-gradient(circle at center, #2e1065 0%, #05010D 70%)',
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        lucide.createIcons();
    
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
      

<div className="fixed inset-0 z-[-1] bg-[url('https://images.unsplash.com/photo-1536566482680-fca31930a0bd?q=80&amp;w=2500&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-10 mix-blend-color-dodge pointer-events-none"></div>
<div className="fixed inset-0 z-[-1] bg-void-gradient opacity-90 pointer-events-none"></div>

<div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(124, 58, 237, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 58, 237, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle at center, black, transparent 80%)'}}>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#05010D]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-3 cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-brand-primary/20 border border-brand-primary/50 flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.3)]">
<img alt="Logo" className="w-6 h-6 invert opacity-90" src="https://cdn-icons-png.flaticon.com/512/3233/3233515.png"/>
</div>
</div>

<div className="hidden md:flex items-center gap-10">
<a className="text-xs font-medium tracking-widest text-white/60 hover:text-white hover:text-glow-sm transition-all uppercase" href="#">Home</a>
<a className="text-xs font-medium tracking-widest text-brand-accent text-glow-sm transition-all uppercase" href="#">Public Sale</a>
<a className="text-xs font-medium tracking-widest text-white/60 hover:text-white hover:text-glow-sm transition-all uppercase" href="#">Staking</a>
<a className="text-xs font-medium tracking-widest text-white/60 hover:text-white hover:text-glow-sm transition-all uppercase" href="#">Docs</a>
</div>

<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-4">
<a className="text-white/40 hover:text-brand-accent transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-white/40 hover:text-brand-accent transition-colors" href="#"><i className="w-4 h-4" data-lucide="message-circle"></i></a>
</div>
<button className="bg-transparent border border-brand-primary text-brand-accent px-6 py-2 rounded text-xs font-semibold tracking-wide hover:bg-brand-primary/10 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all uppercase">
                    Connect Wallet
                </button>
</div>
</div>
</nav>
<main className="min-h-screen pt-24 pb-20 relative overflow-hidden">

<div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center relative z-10">

<div className="mb-4 animate-float">
<span className="text-brand-accent font-mono text-sm tracking-[0.2em] uppercase text-glow-sm">$TRYAGAIN TOKEN</span>
</div>

<h1 className="text-6xl md:text-8xl font-display font-semibold text-center tracking-tighter mb-8 text-white relative">
                PUBLIC SALE
                <div className="absolute -inset-1 blur-2xl bg-brand-primary/20 rounded-full z-[-1]"></div>
</h1>

<button className="group flex items-center gap-3 px-6 py-2.5 border border-white/10 rounded-full bg-white/5 hover:bg-white/10 hover:border-brand-accent/50 transition-all mb-16 backdrop-blur-sm">
<div className="w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-3 h-3 text-white fill-white ml-0.5" data-lucide="play"></i>
</div>
<span className="text-sm text-white/70 group-hover:text-white">Watch Trailer</span>
</button>

<div className="w-full max-w-5xl relative">

<div className="absolute -top-8 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent"></div>
<div className="absolute -top-8 left-[10%] w-px h-8 bg-brand-primary/30"></div>
<div className="absolute -top-8 right-[10%] w-px h-8 bg-brand-primary/30"></div>

<div className="cyber-border bg-[#130623] p-[1px] relative group">

<div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-fuchsia-500 to-brand-primary opacity-50"></div>

<div className="cyber-border bg-[#0B0214] relative p-8 md:p-10">

<div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

<div className="flex items-center gap-4 flex-1">
<div className="w-12 h-12 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(20,184,166,0.2)]">
<img alt="USDT" className="w-6 h-6" src="https://cryptologos.cc/logos/tether-usdt-logo.png?v=026"/>
</div>
<div>
<div className="text-white/40 text-xs font-mono uppercase tracking-wider mb-1">Price per $TRY</div>
<div className="text-2xl font-display font-medium text-white">0.08 USDT</div>
</div>
</div>

<div className="hidden md:block w-px h-12 bg-white/10"></div>

<div className="flex items-center gap-4 flex-1">
<div className="w-12 h-12 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.2)]">
<i className="w-5 h-5 text-brand-accent" data-lucide="gem"></i>
</div>
<div>
<div className="text-white/40 text-xs font-mono uppercase tracking-wider mb-1">Max Alloc Per User</div>
<div className="text-2xl font-display font-medium text-white">$25,000</div>
</div>
</div>

<button className="w-full md:w-auto bg-white text-black hover:bg-brand-accent hover:text-white px-8 py-4 rounded font-semibold transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] whitespace-nowrap cyber-border-inverse">
                                Connect Wallet
                            </button>
</div>

<div className="mt-10 mb-2">
<div className="flex justify-between text-xs text-white/50 mb-2 font-mono">
<span>RAISED: $4,250,900</span>
<span>TARGET: $5,000,000</span>
</div>
<div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full w-[85%] bg-gradient-to-r from-brand-primary to-fuchsia-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] relative">
<div className="absolute inset-0 bg-white/20 animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-12 left-[20%] w-px h-12 bg-gradient-to-b from-brand-primary/30 to-transparent"></div>
<div className="absolute -bottom-12 right-[20%] w-px h-12 bg-gradient-to-b from-brand-primary/30 to-transparent"></div>
<div className="absolute -bottom-12 left-[20%] right-[20%] h-px bg-brand-primary/30 top-full mt-12 flex justify-between items-center">
<div className="w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(168,85,247,1)]"></div>
<div className="w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(168,85,247,1)]"></div>
</div>
</div>

<div className="mt-24 text-center">
<h3 className="font-mono text-sm tracking-[0.3em] text-white/50 uppercase mb-8">Sale Period Ends In</h3>
<div className="flex items-center justify-center gap-4 md:gap-8">

<div className="flex flex-col items-center">
<div className="w-20 h-24 md:w-24 md:h-32 bg-[#130623] border border-white/10 rounded flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="text-4xl md:text-6xl font-display font-medium text-white">04</span>
</div>
<span className="text-[10px] md:text-xs text-white/30 mt-3 font-mono uppercase tracking-widest">Days</span>
</div>
<span className="text-2xl md:text-4xl text-white/20 -mt-8">:</span>

<div className="flex flex-col items-center">
<div className="w-20 h-24 md:w-24 md:h-32 bg-[#130623] border border-white/10 rounded flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="text-4xl md:text-6xl font-display font-medium text-white">12</span>
</div>
<span className="text-[10px] md:text-xs text-white/30 mt-3 font-mono uppercase tracking-widest">Hours</span>
</div>
<span className="text-2xl md:text-4xl text-white/20 -mt-8">:</span>

<div className="flex flex-col items-center">
<div className="w-20 h-24 md:w-24 md:h-32 bg-[#130623] border border-white/10 rounded flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="text-4xl md:text-6xl font-display font-medium text-white">45</span>
</div>
<span className="text-[10px] md:text-xs text-white/30 mt-3 font-mono uppercase tracking-widest">Mins</span>
</div>
<span className="text-2xl md:text-4xl text-white/20 -mt-8 hidden md:block">:</span>

<div className="hidden md:flex flex-col items-center">
<div className="w-20 h-24 md:w-24 md:h-32 bg-[#130623] border border-white/10 rounded flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="text-4xl md:text-6xl font-display font-medium text-brand-accent">22</span>
</div>
<span className="text-[10px] md:text-xs text-white/30 mt-3 font-mono uppercase tracking-widest">Secs</span>
</div>
</div>
</div>

<div className="mt-24 w-full max-w-6xl">
<div className="flex items-center gap-4 mb-6">
<div className="h-px bg-white/10 flex-1"></div>
<span className="text-xs font-mono text-white/40 uppercase tracking-widest">Backed Assets Portfolio</span>
<div className="h-px bg-white/10 flex-1"></div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

<div className="group relative aspect-video md:aspect-square overflow-hidden rounded border border-white/10 hover:border-brand-accent/50 transition-colors bg-[#0B0214]">
<img alt="Asset 1" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black to-transparent">
<div className="text-xs font-mono text-white/80">Singapore HQ</div>
<div className="text-[10px] text-brand-accent">12.4% APY</div>
</div>
</div>

<div className="group relative aspect-video md:aspect-square overflow-hidden rounded border border-white/10 hover:border-brand-accent/50 transition-colors bg-[#0B0214]">
<img alt="Asset 2" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black to-transparent">
<div className="text-xs font-mono text-white/80">Dubai Marina</div>
<div className="text-[10px] text-brand-accent">9.8% APY</div>
</div>
</div>

<div className="group relative aspect-video md:aspect-square overflow-hidden rounded border border-white/10 hover:border-brand-accent/50 transition-colors bg-[#0B0214]">
<img alt="Asset 3" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black to-transparent">
<div className="text-xs font-mono text-white/80">Stockholm Log</div>
<div className="text-[10px] text-brand-accent">14.2% APY</div>
</div>
</div>

<div className="group relative aspect-video md:aspect-square overflow-hidden rounded border border-white/10 hover:border-brand-accent/50 transition-colors bg-[#0B0214]">
<img alt="Asset 4" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black to-transparent">
<div className="text-xs font-mono text-white/80">NY Penthouse</div>
<div className="text-[10px] text-brand-accent">10.5% APY</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/5 bg-[#020105] py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xs text-white/30 font-mono">
                © 2024 TRYAGAIN PROTOCOL.
            </div>
<div className="flex gap-6">
<a className="text-xs text-white/40 hover:text-white transition-colors" href="#">PRIVACY</a>
<a className="text-xs text-white/40 hover:text-white transition-colors" href="#">TERMS</a>
<a className="text-xs text-white/40 hover:text-white transition-colors" href="#">AUDIT</a>
</div>
<div className="flex gap-4">
<i className="w-4 h-4 text-white/30 hover:text-white cursor-pointer transition-colors" data-lucide="twitter"></i>
<i className="w-4 h-4 text-white/30 hover:text-white cursor-pointer transition-colors" data-lucide="github"></i>
<i className="w-4 h-4 text-white/30 hover:text-white cursor-pointer transition-colors" data-lucide="disc"></i>
</div>
</div>
</footer>


    </>
  );
}
