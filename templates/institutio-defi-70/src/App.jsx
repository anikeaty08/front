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
},
colors: {
brand: {
50: '#f0f7ff',
100: '#e0effe',
200: '#b9dffe',
300: '#7cc2fd',
400: '#36a4fa',
500: '#0c87eb',
600: '#0069d0', // Logo Blue Base
700: '#0054a8',
800: '#00478a',
900: '#063b71',
950: '#04254b',
},
zinc: {
850: '#1f1f22',
900: '#18181b',
925: '#121214',
950: '#09090b',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'grid-pattern': "linear-gradient(to right, #1f1f22 1px, transparent 1px), linear-gradient(to bottom, #1f1f22 1px, transparent 1px)",
},
animation: {
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'blob': 'blob 10s infinite',
'spin-slow': 'spin 12s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
}
}
}
}
}



        // Mouse Move Parallax Logic
        document.addEventListener('mousemove', (e) => {
            const visual = document.getElementById('hero-visual');
            if (visual) {
                const x = (window.innerWidth - e.pageX * 2) / 100;
                const y = (window.innerHeight - e.pageY * 2) / 100;
                // Subtle rotation based on mouse position
                visual.children[0].style.transform = `rotateX(${10 + y}deg) rotateY(${-10 + x}deg)`;
            }

            // Spotlight Logic for cards
            const cards = document.querySelectorAll('.spotlight-card');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">

<div className="relative w-8 h-8 flex items-center justify-center">
<svg className="w-7 h-7 text-brand-600 fill-current" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM12 4.5L19.5 8.5V15.5L12 19.5L4.5 15.5V8.5L12 4.5Z" opacity="0.5"></path>
<path d="M12 7L7 9.5V14.5L12 17L17 14.5V12H12V14.5L9.5 13.25V10.75L12 9.5L14.5 10.75V9.5L12 7Z"></path>
</svg>

<div className="absolute inset-0 bg-brand-500 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
</div>
<span className="text-sm font-semibold tracking-tight text-white group-hover:text-brand-100 transition-colors">GROWMAX</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
<a className="hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300" href="#products">Products</a>
<a className="hover:text-white transition-colors duration-200" href="#how-it-works">How it Works</a>
<a className="hover:text-white transition-colors duration-200" href="#security">Security</a>
<a className="hover:text-white transition-colors duration-200" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#contact">Contact</a>
<button className="relative overflow-hidden group bg-white text-black text-xs font-semibold px-4 py-2 rounded-lg hover:bg-brand-50 transition-colors">
<span className="relative z-10">Launch App</span>
<div className="absolute inset-0 bg-gradient-to-r from-brand-300/0 via-brand-300/30 to-brand-300/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out"></div>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden border-b border-white/5 bg-[#020204]">

<div className="absolute inset-0 bg-[size:40px_40px] bg-grid-pattern opacity-[0.07] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

<div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-600/20 rounded-full blur-[120px] animate-blob mix-blend-screen"></div>
<div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">

<div className="text-center lg:text-left space-y-8 max-w-2xl mx-auto lg:mx-0">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-500/20 bg-brand-900/10 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
<span className="text-[10px] font-semibold tracking-wide uppercase text-brand-200">V2 Protocol Live</span>
</div>
<h1 className="text-5xl sm:text-7xl font-medium tracking-tight text-white leading-[1.05]">
                    Unlock the full <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-600">potential of DeFi.</span>
</h1>
<p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Institutional-grade liquidity pools for earning high-yield APR and borrowing against crypto assets with zero slippage.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<button className="w-full sm:w-auto h-12 px-8 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-medium transition-all shadow-[0_0_20px_-5px_rgba(0,105,208,0.5)] hover:shadow-[0_0_30px_-5px_rgba(0,105,208,0.6)] flex items-center justify-center gap-2 group">
                        Start Earning
                        <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="w-full sm:w-auto h-12 px-8 rounded-lg border border-white/10 text-zinc-300 font-medium hover:bg-white/5 hover:text-white transition-all backdrop-blur-sm">
                        Read Whitepaper
                    </button>
</div>

<div className="pt-6 flex items-center justify-center lg:justify-start gap-4 text-xs text-zinc-500 font-medium">
<div className="flex items-center gap-2">
<span className="iconify text-brand-500" data-icon="lucide:shield-check" data-width="16"></span>
<span>Audited by CertiK</span>
</div>
<div className="w-1 h-1 rounded-full bg-zinc-800"></div>
<div className="flex items-center gap-2">
<span className="iconify text-brand-500" data-icon="lucide:users" data-width="16"></span>
<span>125k+ Active Users</span>
</div>
</div>
</div>

<div className="hidden lg:flex justify-end perspective-container" id="hero-visual">
<div className="relative w-[500px] h-[500px] preserve-3d transition-transform duration-100 ease-out" style={{transform: 'rotateX(10deg) rotateY(-10deg)'}}>

<div className="absolute inset-0 bg-brand-600/20 blur-[100px] rounded-full translate-z-[-50px]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 glass-card rounded-2xl p-6 flex flex-col justify-between border-t border-white/20 transform translate-z-[0px]">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-full bg-brand-600/20 flex items-center justify-center">
<span className="iconify text-brand-400" data-icon="lucide:gem" data-width="20"></span>
</div>
<span className="text-xs text-zinc-500 font-mono">ETH-USDT</span>
</div>
<div className="space-y-2">
<div className="h-24 w-full bg-gradient-to-t from-brand-600/20 to-transparent rounded-lg relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-500 shadow-[0_0_10px_#0069d0]"></div>

<svg className="absolute bottom-0 left-0 w-full h-full" preserveaspectratio="none">
<path d="M0 80 Q 50 70 100 40 T 200 60 T 320 10" fill="none" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="2"></path>
</svg>
</div>
<div className="flex justify-between items-end">
<div>
<p className="text-[10px] text-zinc-500 uppercase tracking-wider">Total Value Locked</p>
<p className="text-2xl font-semibold text-white tracking-tight">$842.5M</p>
</div>
<div className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-xs font-semibold">+12.4%</div>
</div>
</div>
</div>

<div className="absolute top-[20%] right-[10%] w-64 h-32 glass-card rounded-xl p-5 border-l border-white/20 transform translate-z-[40px] animate-float">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-xs font-bold text-black">B</div>
<div>
<p className="text-xs text-white font-medium">Bitcoin Reserve</p>
<p className="text-[10px] text-zinc-500">Collateralized</p>
</div>
</div>
<div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
<div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-full w-[75%]"></div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-zinc-400">
<span>75% LTV Used</span>
<span className="text-white">Safe</span>
</div>
</div>

<div className="absolute bottom-[20%] left-[-10%] w-16 h-16 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center transform translate-z-[60px] animate-float-delayed shadow-xl">
<span className="iconify text-brand-400" data-icon="lucide:shield" data-width="24"></span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full border-t border-white/5 bg-white/[0.01] backdrop-blur-[2px]">
<div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-3 divide-x divide-white/5">
<div className="px-4 text-center md:text-left">
<p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Current APY</p>
<p className="text-xl md:text-3xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">18.42%</p>
</div>
<div className="px-4 text-center md:text-left">
<p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Total Liquidity</p>
<p className="text-xl md:text-3xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">$2.4B+</p>
</div>
<div className="px-4 text-center md:text-left">
<p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Protocol Uptime</p>
<p className="text-xl md:text-3xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">99.99%</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950 relative" id="products">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-900 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Core Products</h2>
<p className="text-zinc-500 max-w-lg mx-auto">Seamlessly integrated financial primitives for the modern institutional investor.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="spotlight-card group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 hover:to-white/10 transition-colors">
<div className="absolute inset-0 bg-zinc-925 rounded-[15px] m-[1px]"></div>
<div className="relative z-10 p-10 h-full flex flex-col">
<div className="w-14 h-14 rounded-xl bg-brand-900/20 border border-brand-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-brand-400" data-icon="lucide:layers" data-width="28"></span>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-2 group-hover:text-brand-300 transition-colors">Yield Earn</h3>
<p className="text-zinc-400 mb-8 font-light text-sm leading-relaxed">Passive income generation through automated market making strategies and lending pools.</p>
<div className="space-y-4 mb-8 flex-grow">
<div className="flex items-center gap-3 text-sm text-zinc-300">
<div className="w-5 h-5 rounded-full bg-brand-500/10 flex items-center justify-center"><span className="iconify text-brand-500" data-icon="lucide:check" data-width="12"></span></div>
<span>Algorithmic rate optimization</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<div className="w-5 h-5 rounded-full bg-brand-500/10 flex items-center justify-center"><span className="iconify text-brand-500" data-icon="lucide:check" data-width="12"></span></div>
<span>Principal protection vaults</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<div className="w-5 h-5 rounded-full bg-brand-500/10 flex items-center justify-center"><span className="iconify text-brand-500" data-icon="lucide:check" data-width="12"></span></div>
<span>Auto-compounding rewards</span>
</div>
</div>
<a className="inline-flex items-center text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors mt-auto" href="#">
                            Explore Pools <span className="iconify ml-1 group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>

<div className="spotlight-card group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 hover:to-white/10 transition-colors">
<div className="absolute inset-0 bg-zinc-925 rounded-[15px] m-[1px]"></div>
<div className="relative z-10 p-10 h-full flex flex-col">
<div className="w-14 h-14 rounded-xl bg-purple-900/20 border border-purple-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-purple-400" data-icon="lucide:zap" data-width="28"></span>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-2 group-hover:text-purple-300 transition-colors">Instant Credit</h3>
<p className="text-zinc-400 mb-8 font-light text-sm leading-relaxed">Borrow stablecoins instantly against your blue-chip crypto assets without selling.</p>
<div className="space-y-4 mb-8 flex-grow">
<div className="flex items-center gap-3 text-sm text-zinc-300">
<div className="w-5 h-5 rounded-full bg-purple-500/10 flex items-center justify-center"><span className="iconify text-purple-400" data-icon="lucide:check" data-width="12"></span></div>
<span>0% interest promotional rates</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<div className="w-5 h-5 rounded-full bg-purple-500/10 flex items-center justify-center"><span className="iconify text-purple-400" data-icon="lucide:check" data-width="12"></span></div>
<span>Flexible repayment schedules</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<div className="w-5 h-5 rounded-full bg-purple-500/10 flex items-center justify-center"><span className="iconify text-purple-400" data-icon="lucide:check" data-width="12"></span></div>
<span>Cross-chain collateral support</span>
</div>
</div>
<a className="inline-flex items-center text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors mt-auto" href="#">
                            Get Liquidity <span className="iconify ml-1 group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#020204] relative overflow-hidden" id="how-it-works">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center mb-24">
<span className="text-xs font-semibold text-brand-500 uppercase tracking-widest mb-2 block">The Ecosystem</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">How Capital Flows</h2>
</div>
<div className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">

<div className="group flex flex-col items-center text-center max-w-xs relative z-10">
<div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 shadow-2xl shadow-brand-900/20 group-hover:-translate-y-2 transition-transform duration-500">
<span className="iconify text-brand-400" data-icon="lucide:wallet-2" data-width="32"></span>
</div>
<h4 className="text-white text-lg font-medium mb-2">Providers</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Users deposit assets into isolated smart contract vaults.</p>
</div>

<div className="hidden md:block flex-1 h-[2px] bg-zinc-800 relative overflow-hidden rounded-full">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-500 to-transparent w-1/2 animate-[shimmer_2s_infinite] translate-x-[-100%]"></div>
</div>

<div className="relative w-40 h-40 flex items-center justify-center">
<div className="absolute inset-0 bg-brand-600/20 blur-3xl animate-pulse-slow"></div>
<div className="relative w-full h-full rounded-full border border-white/10 bg-zinc-900/80 backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_50px_-10px_rgba(0,105,208,0.3)]">
<span className="iconify text-white mb-2 animate-spin-slow" data-icon="lucide:hexagon" data-width="40"></span>
<span className="text-xs font-bold tracking-widest text-brand-400">CORE</span>
</div>
</div>

<div className="hidden md:block flex-1 h-[2px] bg-zinc-800 relative overflow-hidden rounded-full">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-500 to-transparent w-1/2 animate-[shimmer_2s_infinite] translate-x-[-100%]" style={{animationDelay: '1s'}}></div>
</div>

<div className="group flex flex-col items-center text-center max-w-xs relative z-10">
<div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 shadow-2xl shadow-brand-900/20 group-hover:-translate-y-2 transition-transform duration-500">
<span className="iconify text-white" data-icon="lucide:landmark" data-width="32"></span>
</div>
<h4 className="text-white text-lg font-medium mb-2">Borrowers</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Institutions access deep liquidity with over-collateralization.</p>
</div>
</div>
</div>
<style>
            @keyframes shimmer {
                100% { transform: translateX(200%); }
            }
        </style>
</section>

<section className="py-32 bg-zinc-950 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="space-y-4 border-l border-white/10 pl-6 hover:border-brand-500 transition-colors duration-300">
<span className="iconify text-zinc-400" data-icon="lucide:scale" data-width="24"></span>
<h3 className="text-white font-medium text-lg">Defined Parameters</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">Immutable smart contracts ensure rates and fees are transparent and predictable.</p>
</div>

<div className="space-y-4 border-l border-white/10 pl-6 hover:border-brand-500 transition-colors duration-300">
<span className="iconify text-zinc-400" data-icon="lucide:lock" data-width="24"></span>
<h3 className="text-white font-medium text-lg">Non-Custodial</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">You retain ownership of your keys. We never hold your assets directly.</p>
</div>

<div className="space-y-4 border-l border-white/10 pl-6 hover:border-brand-500 transition-colors duration-300">
<span className="iconify text-zinc-400" data-icon="lucide:activity" data-width="24"></span>
<h3 className="text-white font-medium text-lg">Real-Time Data</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">Millisecond updates via subgraphs for precise portfolio tracking.</p>
</div>

<div className="space-y-4 border-l border-white/10 pl-6 hover:border-brand-500 transition-colors duration-300">
<span className="iconify text-zinc-400" data-icon="lucide:smartphone" data-width="24"></span>
<h3 className="text-white font-medium text-lg">Mobile Optimized</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">Manage your positions on the go with our fully responsive dApp.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-[#020204]" id="security">
<div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-900/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Security First Architecture</h2>
<p className="text-zinc-500 mb-16 max-w-2xl mx-auto">We prioritize fund safety above all else, utilizing multi-sig wallets and timelock controllers.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">

<div className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 backdrop-blur-sm">
<div className="mb-6 inline-flex p-3 rounded-lg bg-brand-900/20 text-brand-400">
<span className="iconify" data-icon="lucide:file-code" data-width="20"></span>
</div>
<h4 className="font-medium text-white mb-2 text-lg">Formal Verification</h4>
<p className="text-xs text-zinc-500 font-light leading-relaxed">Mathematical proofs of contract logic correctness covering all critical paths.</p>
</div>

<div className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 backdrop-blur-sm">
<div className="mb-6 inline-flex p-3 rounded-lg bg-brand-900/20 text-brand-400">
<span className="iconify" data-icon="lucide:bug" data-width="20"></span>
</div>
<h4 className="font-medium text-white mb-2 text-lg">$2M Bug Bounty</h4>
<p className="text-xs text-zinc-500 font-light leading-relaxed">Active program on Immunefi incentivizing white-hat disclosure of vulnerabilities.</p>
</div>

<div className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 backdrop-blur-sm">
<div className="mb-6 inline-flex p-3 rounded-lg bg-brand-900/20 text-brand-400">
<span className="iconify" data-icon="lucide:eye" data-width="20"></span>
</div>
<h4 className="font-medium text-white mb-2 text-lg">On-Chain Monitoring</h4>
<p className="text-xs text-zinc-500 font-light leading-relaxed">24/7 automated threat detection system that pauses contracts on anomaly.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-t border-white/5" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight mb-12">Frequently Asked Questions</h2>
<div className="space-y-2">

<div className="group rounded-lg border border-transparent hover:border-white/5 hover:bg-white/[0.02] transition-colors p-4">
<details className="group/detail">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">How is the yield sustainable?</span>
<span className="transition-transform duration-300 group-open/detail:rotate-180 text-zinc-500">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<p className="text-sm text-zinc-500 mt-4 font-light leading-relaxed pr-8">
                            Yield comes directly from the interest borrowers pay to access liquidity. There is no inflationary token printing mechanism; the protocol simply facilitates the transfer of value between lenders and borrowers.
                        </p>
</details>
</div>

<div className="group rounded-lg border border-transparent hover:border-white/5 hover:bg-white/[0.02] transition-colors p-4">
<details className="group/detail">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">What assets are supported?</span>
<span className="transition-transform duration-300 group-open/detail:rotate-180 text-zinc-500">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<p className="text-sm text-zinc-500 mt-4 font-light leading-relaxed pr-8">
                            Currently, we support USDT, USDC, and DAI for earning yield. For borrowing collateral, we accept BTC, ETH, SOL, and over 20+ other blue-chip assets.
                        </p>
</details>
</div>

<div className="group rounded-lg border border-transparent hover:border-white/5 hover:bg-white/[0.02] transition-colors p-4">
<details className="group/detail">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">Is there a lock-up period?</span>
<span className="transition-transform duration-300 group-open/detail:rotate-180 text-zinc-500">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<p className="text-sm text-zinc-500 mt-4 font-light leading-relaxed pr-8">
                            No. Our liquidity pools are designed for flexibility. You can deposit and withdraw your funds at any time, subject to available pool liquidity.
                        </p>
</details>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-[#020204]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
<div className="flex items-center gap-2">
<span className="iconify text-brand-600" data-icon="lucide:hexagon" data-width="20"></span>
<span className="text-sm font-semibold tracking-tight text-white">GROWMAX</span>
</div>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors text-zinc-400" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="14"></span>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors text-zinc-400" href="#">
<span className="iconify" data-icon="lucide:github" data-width="14"></span>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors text-zinc-400" href="#">
<span className="iconify" data-icon="lucide:disc" data-width="14"></span>
</a>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/5 pt-8">
<span className="text-xs text-zinc-600">© 2024 Growmax Protocol. All rights reserved.</span>
<div className="flex gap-6 text-xs text-zinc-600">
<a className="hover:text-zinc-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Cookie Policy</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
