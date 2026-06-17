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
gray: {
850: '#1f2937',
950: '#0a0a0a',
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        lucide.createIcons();

        const themeToggleBtn = document.getElementById('theme-toggle');
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        themeToggleBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        });

        const modal = document.getElementById('waitlist-modal');
        const backdrop = document.getElementById('modal-backdrop');
        const panel = document.getElementById('modal-panel');

        function toggleModal() {
            if (modal.classList.contains('hidden')) {
                modal.classList.remove('hidden');
                setTimeout(() => {
                    backdrop.classList.remove('opacity-0');
                    panel.classList.remove('scale-95', 'opacity-0');
                    panel.classList.add('scale-100', 'opacity-100');
                }, 10);
            } else {
                backdrop.classList.add('opacity-0');
                panel.classList.remove('scale-100', 'opacity-100');
                panel.classList.add('scale-95', 'opacity-0');
                setTimeout(() => {
                    modal.classList.add('hidden');
                }, 300);
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
      

<nav className="fixed top-0 w-full z-50 glass h-16 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg flex items-center justify-center">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path d="M4 4h16l-6 8 6 8H4l6-8-6-8z"></path>
</svg>
</div>
<span className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">7K Mobile</span>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-500 transition-colors" id="theme-toggle">
<i className="w-4 h-4 hidden dark:block" data-lucide="sun"></i>
<i className="w-4 h-4 block dark:hidden" data-lucide="moon"></i>
</button>
<button className="hidden sm:flex h-8 items-center px-4 text-xs font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition-all shadow-sm" onclick="toggleModal()">
                    Waitlist
                </button>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

<div className="flex flex-col items-start max-w-xl relative z-10 animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-xs font-medium text-gray-600 dark:text-gray-300 tracking-wide uppercase">Sui Network Beta</span>
</div>
<h1 className="text-5xl sm:text-7xl font-semibold tracking-tighter leading-[1.05] mb-8 text-gray-900 dark:text-white">
                        Finance for the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">next generation.</span>
</h1>
<p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10 max-w-md font-normal">
                        Experience the first non-custodial exchange platform built for speed. Swap, earn, and manage assets with zero friction.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5" onclick="toggleModal()">
                            Get Early Access
                            <i className="w-4 h-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</button>
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
<i className="w-4 h-4 text-gray-400" data-lucide="play-circle"></i>
                            Watch Demo
                        </button>
</div>
<div className="mt-12 flex items-center gap-4 text-xs text-gray-500 dark:text-gray-500">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white dark:border-gray-900"></div>
<div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white dark:border-gray-900"></div>
<div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white dark:border-gray-900"></div>
</div>
<p>Trusted by 5.9M+ users</p>
</div>
</div>

<div className="relative flex justify-center lg:justify-end items-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>

<div className="animate-float relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-blue-500/20 dark:bg-blue-500/10 blur-[80px] -z-10 rounded-full"></div>

<div className="relative w-[320px] h-[650px] bg-black rounded-[48px] iphone-frame border-[6px] border-gray-800 dark:border-black overflow-hidden select-none">

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-32 bg-black rounded-b-2xl z-20"></div>

<div className="w-full h-full bg-[#f8f9fa] dark:bg-[#1a1a1a] flex flex-col relative overflow-hidden font-sans">

<div className="px-6 pt-3 pb-2 flex justify-between items-center text-[10px] font-semibold text-gray-900 dark:text-white z-10">
<span>9:41</span>
<div className="flex items-center gap-1.5">
<i className="w-3 h-3" data-lucide="signal"></i>
<i className="w-3 h-3" data-lucide="wifi"></i>
<div className="w-5 h-2.5 rounded-[2px] border border-current relative">
<div className="absolute inset-0.5 bg-current w-3/4"></div>
</div>
</div>
</div>

<div className="px-5 pt-2 pb-4 flex justify-between items-center">
<span className="text-sm font-medium text-gray-900 dark:text-white">Your Wallet</span>
<div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
<button className="p-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full"><i className="w-5 h-5" data-lucide="scan-line"></i></button>
<button className="p-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full"><i className="w-5 h-5" data-lucide="menu"></i></button>
</div>
</div>

<div className="flex-1 overflow-y-auto hide-scrollbar px-5 pb-24">

<div className="bg-white dark:bg-[#222] p-4 rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-100 dark:border-white/5 mb-6">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-300 to-purple-400 p-0.5">
<img alt="avatar" className="w-full h-full rounded-full bg-white dark:bg-black" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
<div>
<div className="flex items-center gap-1">
<h3 className="text-xs font-semibold text-gray-900 dark:text-white">7K User 0001</h3>
<i className="w-3 h-3 text-gray-400" data-lucide="chevron-down"></i>
</div>
<p className="text-[10px] text-gray-400 font-mono">0x432a...3412</p>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-2">
<button className="flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-black text-[10px] font-medium">
<i className="w-3 h-3" data-lucide="edit-2"></i> Edit
                                            </button>
<button className="flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 text-[10px] font-medium border border-transparent dark:border-white/10">
<i className="w-3 h-3" data-lucide="compass"></i> Explorer
                                            </button>
<button className="flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 text-[10px] font-medium border border-transparent dark:border-white/10">
<i className="w-3 h-3" data-lucide="copy"></i> Copy
                                            </button>
</div>
</div>

<div className="mb-6">
<div className="flex items-center gap-2 mb-1">
<span className="text-[10px] text-gray-500 uppercase tracking-wide">Total Balance</span>
<span className="text-[10px] text-green-500 bg-green-50 dark:bg-green-900/20 px-1.5 py-0.5 rounded font-medium flex items-center gap-0.5">
<i className="w-2.5 h-2.5" data-lucide="arrow-up-right"></i> 43%
                                            </span>
</div>
<div className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                                            $9,321.<span className="text-gray-400 text-2xl">32</span>
</div>
</div>

<div className="space-y-3">
<p className="text-[10px] font-medium text-gray-500 mb-2">Assets</p>

<div className="flex items-center justify-between p-3 bg-white dark:bg-[#222] rounded-xl border border-gray-100 dark:border-white/5 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">

<div className="w-4 h-4 rounded-full bg-gradient-to-tr from-purple-500 to-green-400"></div>
</div>
<div>
<p className="text-xs font-semibold text-gray-900 dark:text-white">Solana</p>
<p className="text-[10px] text-gray-400">31.21 SOL</p>
</div>
</div>
<div className="text-right">
<p className="text-xs font-medium text-gray-900 dark:text-white">$15,43<span className="text-gray-400">.31</span></p>
<p className="text-[10px] text-green-500">+1.56%</p>
</div>
</div>

<div className="flex items-center justify-between p-3 bg-white dark:bg-[#222] rounded-xl border border-gray-100 dark:border-white/5 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
<i className="w-4 h-4 fill-current" data-lucide="droplet"></i>
</div>
<div>
<p className="text-xs font-semibold text-gray-900 dark:text-white">SUI</p>
<p className="text-[10px] text-gray-400">3,531.21 SUI</p>
</div>
</div>
<div className="text-right">
<p className="text-xs font-medium text-gray-900 dark:text-white">$5,643<span className="text-gray-400">.21</span></p>
<p className="text-[10px] text-green-500">+4.56%</p>
</div>
</div>

<div className="flex items-center justify-between p-3 bg-white dark:bg-[#222] rounded-xl border border-gray-100 dark:border-white/5 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
<span className="font-bold text-[10px]">₿</span>
</div>
<div>
<p className="text-xs font-semibold text-gray-900 dark:text-white">Bitcoin</p>
<p className="text-[10px] text-gray-400">0.42 BTC</p>
</div>
</div>
<div className="text-right">
<p className="text-xs font-medium text-gray-900 dark:text-white">$28,123<span className="text-gray-400">.00</span></p>
<p className="text-[10px] text-red-500">-0.23%</p>
</div>
</div>

<button className="w-full py-2 mt-2 text-[10px] font-medium text-gray-500 bg-gray-100 dark:bg-white/5 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
                                            View All Assets
                                        </button>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-[#1a1a1a] dark:bg-white text-gray-400 dark:text-gray-600 rounded-[2rem] p-1.5 flex justify-between items-center shadow-2xl z-20">
<button className="w-10 h-10 rounded-full bg-white dark:bg-black text-black dark:text-white flex items-center justify-center shadow-md">
<i className="w-5 h-5" data-lucide="home"></i>
</button>
<button className="w-10 h-10 flex items-center justify-center hover:text-white dark:hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="pie-chart"></i>
</button>
<button className="w-10 h-10 flex items-center justify-center hover:text-white dark:hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="arrow-left-right"></i>
</button>
<button className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>

<div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-300 dark:bg-gray-700 rounded-full z-30"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 bg-gray-50 dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-white/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Built differently.</h2>
<p className="text-lg text-gray-500 dark:text-gray-400">
                    Engineered for power users who demand precision, speed, and complete control over their assets.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-xl hover:border-gray-300 dark:hover:border-white/10 transition-all duration-300 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-blue-900/10">
<div className="w-10 h-10 mb-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Sui Speed</h3>
<p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        Built on the Sui tech stack for sub-second finality and maximum throughput.
                    </p>
</div>

<div className="group p-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-xl hover:border-gray-300 dark:hover:border-white/10 transition-all duration-300 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-blue-900/10">
<div className="w-10 h-10 mb-4 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>
<h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">DeFi Suite</h3>
<p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        Swap, LP, Staking, Lending, Margin, and Perps all in one interface.
                    </p>
</div>

<div className="group p-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-xl hover:border-gray-300 dark:hover:border-white/10 transition-all duration-300 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-blue-900/10">
<div className="w-10 h-10 mb-4 rounded-lg bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Non-Custodial</h3>
<p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        Retain full custody of your assets with our secure distributed signing (MPC).
                    </p>
</div>

<div className="group p-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-xl hover:border-gray-300 dark:hover:border-white/10 transition-all duration-300 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-blue-900/10">
<div className="w-10 h-10 mb-4 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="fingerprint"></i>
</div>
<h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">zkLogin</h3>
<p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        Onboard instantly with Google or Apple. No seed phrases required.
                    </p>
</div>

<div className="group p-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-xl hover:border-gray-300 dark:hover:border-white/10 transition-all duration-300 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-blue-900/10">
<div className="w-10 h-10 mb-4 rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="smartphone"></i>
</div>
<h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Native Mobile</h3>
<p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        A truly native experience. Smooth animations, haptic feedback, and gestures.
                    </p>
</div>

<div className="group p-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-xl hover:border-gray-300 dark:hover:border-white/10 transition-all duration-300 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-blue-900/10">
<div className="w-10 h-10 mb-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="globe"></i>
</div>
<h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Universal</h3>
<p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        Access liquidity from everywhere. One wallet for the entire internet capital market.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white dark:bg-black border-t border-gray-200 dark:border-white/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100 dark:divide-white/5">
<div className="px-4">
<p className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">$17B+</p>
<p className="text-xs font-medium text-gray-500 mt-1">Volume Processed</p>
</div>
<div className="px-4">
<p className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">5.9M</p>
<p className="text-xs font-medium text-gray-500 mt-1">Wallets Created</p>
</div>
<div className="px-4">
<p className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">0.4s</p>
<p className="text-xs font-medium text-gray-500 mt-1">Latency</p>
</div>
<div className="px-4">
<p className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">#1</p>
<p className="text-xs font-medium text-gray-500 mt-1">DEX on Sui</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-gray-50 dark:bg-[#0a0a0a] -z-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tighter text-gray-900 dark:text-white mb-6">Ready to upgrade?</h2>
<p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-xl mx-auto">
                Join thousands of users who have already switched to the fastest way to trade on mobile.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-8 py-4 text-base font-medium text-white bg-blue-600 rounded-full hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5" onclick="toggleModal()">
                    Join the Waitlist
                </button>
</div>
</div>
</section>

<footer className="py-12 bg-white dark:bg-black border-t border-gray-200 dark:border-white/10">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-black rounded-md flex items-center justify-center">
<svg className="w-3.5 h-3.5" fill="currentColor" viewbox="0 0 24 24">
<path d="M4 4h16l-6 8 6 8H4l6-8-6-8z"></path>
</svg>
</div>
<span className="text-sm font-medium text-gray-900 dark:text-white">7K Mobile</span>
</div>
<div className="flex gap-8 text-sm text-gray-500 dark:text-gray-400">
<a className="hover:text-gray-900 dark:hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-gray-900 dark:hover:text-white transition-colors" href="#">Discord</a>
<a className="hover:text-gray-900 dark:hover:text-white transition-colors" href="#">Github</a>
</div>
<p className="text-sm text-gray-400">© 2024 7K Labs.</p>
</div>
</div>
</footer>

<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-[60] hidden" id="waitlist-modal" role="dialog">
<div className="fixed inset-0 bg-gray-900/20 dark:bg-black/80 backdrop-blur-sm transition-opacity opacity-0" id="modal-backdrop"></div>
<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
<div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
<div className="relative transform overflow-hidden rounded-2xl bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-md scale-95 opacity-0" id="modal-panel">
<div className="absolute right-4 top-4">
<button className="rounded-md p-1 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-400 hover:text-gray-500 transition-colors" onclick="toggleModal()" type="button">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="p-8">
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="sparkles"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Get Early Access</h3>
<p className="text-sm text-gray-500 dark:text-gray-400 mb-8 max-w-[260px]">
                                Be among the first to experience the future of mobile DeFi. Limited spots available.
                            </p>
<form className="w-full space-y-3" onsubmit="event.preventDefault(); alert('You are on the list!'); toggleModal();">
<input className="block w-full rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 py-2.5 px-4 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm" placeholder="name@example.com" required="" type="email"/>
<button className="w-full py-2.5 bg-gray-900 dark:bg-white text-white dark:text-black font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all text-sm shadow-lg hover:shadow-xl" type="submit">
                                    Join Waitlist
                                </button>
</form>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
