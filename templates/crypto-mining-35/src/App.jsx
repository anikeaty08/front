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
brand: {
DEFAULT: '#FFD700', // Gold
dark: '#E6C200',
dim: 'rgba(255, 215, 0, 0.1)',
},
dark: {
950: '#020202',
900: '#050505',
850: '#080808',
800: '#0a0a0a',
700: '#121212',
border: 'rgba(255,255,255,0.08)' // Subtle border
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
animation: {
'marquee': 'marquee 25s linear infinite',
'float': 'float 6s ease-in-out infinite',
'text-pulse': 'textPulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
textPulse: {
'0%, 100%': {
color: '#FFD700', // Brand Gold
textShadow: '0 0 20px rgba(255, 215, 0, 0.3)'
},
'50%': {
color: '#FFFBE6', // Brighter White-Gold
textShadow: '0 0 35px rgba(255, 215, 0, 0.6)'
}
}
}
}
}
}



            !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


        // Initialize Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5,
                'class': "lucide"
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="GE8mpmmCRgK6XBF57jgF"></div>

</div>

<nav className="fixed top-0 w-full z-50 border-b border-dark-border bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-medium tracking-tight uppercase flex items-center gap-2 text-white" href="#">
<div className="w-2.5 h-2.5 bg-brand rounded-full shadow-[0_0_15px_#FFD700]"></div>
                Aura Flow
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#compare">Comparison</a>
<a className="hover:text-white transition-colors" href="#mining">Mining</a>
<a className="hover:text-white transition-colors" href="#platform">Platform</a>
<a className="hover:text-white transition-colors" href="#roadmap">Roadmap</a>
</div>
<a className="hidden md:flex items-center gap-2 border border-white/10 bg-white/5 text-white px-5 py-2 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 rounded-sm" href="#contact">
                Connect Wallet
            </a>
<button className="md:hidden text-white">
<svg className="w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden border-dark-border border-b pt-32 pb-20 relative bg-transparent">
<style>
            @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); filter: blur(4px); }
            to { opacity: 1; transform: translateY(0); filter: blur(0); }
            }
        </style>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 gap-x-12 gap-y-12 items-end justify-between">
<div className="max-w-4xl">

<div className="inline-flex items-center gap-2 px-3 py-1.5 border border-brand/20 rounded-full bg-brand/5 text-brand text-xs font-mono mb-8 uppercase tracking-wider" style={{opacity: '0', animation: 'fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
</span>
<span>Mining Operations Live</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1] text-white mb-8" style={{opacity: '0', animation: 'fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards', animationDelay: '0.1s'}}>
                        Learn How <span className="animate-text-pulse">TEXITcoin</span> <br/>
<span className="text-gray-500">compares to Bitcoin.</span>
</h1>

<p className="text-lg md:text-xl text-gray-400 max-w-3xl font-light leading-relaxed" style={{opacity: '0', animation: 'fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards', animationDelay: '0.2s'}}>
                        TEXITcoin is building one of the world’s largest privately owned crypto mines, funded through crowdfunding and powered by a global decentralized platform. All mining is done in Texas with transparency.
                    </p>
</div>

<div className="w-full md:w-auto flex flex-col gap-4" style={{opacity: '0', animation: 'fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards', animationDelay: '0.3s'}}>
<button className="w-full md:w-64 flex items-center justify-center bg-brand text-black px-6 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(255,215,0,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                        Get Started
                    </button>
<button className="w-full md:w-64 flex items-center justify-center gap-2 border border-white/20 text-white px-6 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
<svg className="w-5 h-5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
                        Watch Video
                    </button>
</div>
</div>
</div>
</header>

<div className="border-b border-dark-border bg-transparent backdrop-blur-sm overflow-hidden py-8">
<div className="flex whitespace-nowrap overflow-hidden">
<div className="flex animate-marquee items-center gap-20 px-6">
<span className="text-4xl font-medium uppercase tracking-tight text-stroke opacity-60">Transparency</span>
<div className="w-2.5 h-2.5 bg-brand rounded-full"></div>
<span className="text-4xl font-medium uppercase tracking-tight text-stroke opacity-60">Decentralized</span>
<div className="w-2.5 h-2.5 bg-brand rounded-full"></div>
<span className="text-4xl font-medium uppercase tracking-tight text-stroke opacity-60">Texas Mining</span>
<div className="w-2.5 h-2.5 bg-brand rounded-full"></div>
<span className="text-4xl font-medium uppercase tracking-tight text-stroke opacity-60">Crowdfunding</span>
<div className="w-2.5 h-2.5 bg-brand rounded-full"></div>
</div>
<div aria-hidden="true" className="flex animate-marquee items-center gap-20 px-6">
<span className="text-4xl font-medium uppercase tracking-tight text-stroke opacity-60">Transparency</span>
<div className="w-2.5 h-2.5 bg-brand rounded-full"></div>
<span className="text-4xl font-medium uppercase tracking-tight text-stroke opacity-60">Decentralized</span>
<div className="w-2.5 h-2.5 bg-brand rounded-full"></div>
<span className="text-4xl font-medium uppercase tracking-tight text-stroke opacity-60">Texas Mining</span>
<div className="w-2.5 h-2.5 bg-brand rounded-full"></div>
<span className="text-4xl font-medium uppercase tracking-tight text-stroke opacity-60">Crowdfunding</span>
<div className="w-2.5 h-2.5 bg-brand rounded-full"></div>
</div>
</div>
</div>

<section className="py-24 border-b border-dark-border bg-transparent relative z-10" id="compare">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-sm font-mono text-brand mb-4">/// NETWORK STATISTICS</h2>
<h3 className="text-3xl md:text-5xl font-medium tracking-tight uppercase text-white">Proven Performance.</h3>
</div>
<p className="text-gray-400 max-w-lg text-lg leading-relaxed text-right md:text-left">
                    Real-time mining data and hashrate comparison directly from our Texas facilities.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 perspective-container">

<div className="rotate-card group relative glass-panel rounded-lg overflow-hidden h-[500px]">

<div className="absolute inset-0 bg-gradient-to-tr from-brand/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

<div className="absolute top-0 inset-x-0 h-14 border-b border-white/5 flex items-center px-6 justify-between z-20">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
</div>
<div className="text-xs text-gray-500 font-mono">
                            LIVE_FEED_TX_01
                        </div>
</div>

<div className="pt-20 h-full p-8 flex flex-col gap-6">

<div className="grid grid-cols-2 gap-4">
<div className="p-6 rounded border border-white/5 bg-black/40">
<div className="text-xs text-gray-400 uppercase mb-2">Current Hashrate</div>
<div className="text-3xl text-white font-mono">450 <span className="text-base text-brand">EH/s</span></div>
</div>
<div className="p-6 rounded border border-white/5 bg-black/40">
<div className="text-xs text-gray-400 uppercase mb-2">Active Miners</div>
<div className="text-3xl text-white font-mono">12,405 <span className="text-base text-green-500">●</span></div>
</div>
</div>

<div className="flex-1 rounded border border-white/5 bg-black/20 p-6 relative overflow-hidden flex items-end gap-1">

<div className="w-full bg-brand/20 h-[30%] rounded-sm"></div>
<div className="w-full bg-brand/30 h-[50%] rounded-sm"></div>
<div className="w-full bg-brand/40 h-[45%] rounded-sm"></div>
<div className="w-full bg-brand/50 h-[70%] rounded-sm"></div>
<div className="w-full bg-brand/60 h-[60%] rounded-sm"></div>
<div className="w-full bg-brand/70 h-[85%] rounded-sm"></div>
<div className="w-full bg-brand/80 h-[95%] rounded-sm"></div>
<div className="w-full bg-brand h-[80%] rounded-sm relative shadow-[0_0_15px_#FFD700]"></div>
</div>
</div>
<div className="absolute bottom-6 left-8 z-30">
<h4 className="text-xl font-semibold text-white">TEXIT Output vs Market</h4>
</div>
</div>

<div className="flex flex-col gap-8">

<div className="rotate-card group relative glass-panel rounded-lg overflow-hidden h-60">
<div className="p-8 h-full flex flex-col justify-center relative">
<div className="text-sm font-mono text-brand mb-3">ENERGY EFFICIENCY</div>
<div className="text-5xl font-mono text-white mb-4">98.5%</div>
<div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
<div className="h-full bg-brand w-[98.5%]"></div>
</div>
<p className="text-sm text-gray-400 mt-5">Renewable energy mix utilized in Texas facility.</p>
</div>
</div>

<div className="rotate-card group relative glass-panel rounded-lg overflow-hidden h-60">
<div className="p-8 h-full grid grid-cols-2 gap-6 items-center">
<div>
<div className="text-sm font-mono text-gray-500 mb-2">TOKEN PRICE</div>
<div className="text-4xl text-white font-medium">$0.0421</div>
<div className="text-sm text-green-500 mt-2">+12.4% (24h)</div>
</div>
<div className="h-24 w-full relative">
<svg className="w-full h-full text-brand" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 35 Q 20 38 40 20 T 100 5" fill="none" stroke="currentColor" strokeWidth="2"></path>
<path d="M0 35 Q 20 38 40 20 T 100 5 V 40 H 0 Z" fill="url(#gradient)" opacity="0.2"></path>
<defs>
<lineargradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#FFD700', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#FFD700', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-dark-border bg-transparent relative z-10" id="mining">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-sm font-mono text-brand mb-4">/// THE INFRASTRUCTURE</h2>
<h3 className="text-3xl md:text-5xl font-medium tracking-tight uppercase text-white">Industrial Scale.<br/>Decentralized Power.</h3>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

<div className="md:col-span-2 glass-panel p-10 relative overflow-hidden group hover:border-brand/30 transition-colors duration-500">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-12 h-12 flex items-center justify-center border border-white/10 mb-8 bg-black/50 text-brand rounded-sm">
<span className="font-mono text-sm">01</span>
</div>
<div>
<h4 className="text-2xl font-medium tracking-tight mb-4 text-white">Texas-Based Facilities</h4>
<p className="text-gray-400 text-base max-w-xl leading-relaxed">Located in the energy capital of the world. Our sites utilize flared gas and renewable wind energy, ensuring low operational costs and high sustainability.</p>
</div>
</div>
</div>

<div className="glass-panel p-10 relative overflow-hidden group hover:border-brand/30 transition-colors duration-500">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-12 h-12 flex items-center justify-center border border-white/10 mb-8 bg-black/50 text-brand rounded-sm">
<span className="font-mono text-sm">02</span>
</div>
<div>
<h4 className="text-2xl font-medium tracking-tight mb-4 text-white">Privately Owned</h4>
<p className="text-gray-400 text-base leading-relaxed">No massive corporate overhead. Community funded and community driven.</p>
</div>
</div>
</div>

<div className="glass-panel p-10 relative overflow-hidden group hover:border-brand/30 transition-colors duration-500">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-12 h-12 flex items-center justify-center border border-white/10 mb-8 bg-black/50 text-brand rounded-sm">
<span className="font-mono text-sm">03</span>
</div>
<div>
<h4 className="text-2xl font-medium tracking-tight mb-4 text-white">Transparent Ledger</h4>
<p className="text-gray-400 text-base leading-relaxed">Every hash and every block reward is verifiable on-chain in real-time.</p>
</div>
</div>
</div>

<div className="md:col-span-2 bg-brand/90 backdrop-blur text-black p-10 relative overflow-hidden group">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-12 h-12 flex items-center justify-center border border-black/10 mb-8 bg-black text-brand rounded-sm">
<span className="font-mono text-sm">04</span>
</div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="max-w-lg">
<h4 className="text-2xl font-medium tracking-tight mb-4">Crowdfunded Model</h4>
<p className="text-black/70 text-base font-medium leading-relaxed">Democratizing access to industrial mining. Join thousands of holders powering the next generation of decentralized finance.</p>
</div>
<svg className="w-14 h-14 opacity-80" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-dark-border bg-transparent relative z-10" id="roadmap">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-sm font-mono text-brand mb-4">/// EXECUTION ROADMAP</h2>
<h3 className="text-3xl md:text-5xl font-medium tracking-tight uppercase text-white">Strategic Growth.</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-l border-white/10">

<div className="border-b border-r border-white/10 p-10 hover:bg-white/5 transition-colors group backdrop-blur-sm">
<span className="text-xs font-mono text-gray-500 mb-8 block group-hover:text-brand">PHASE_01</span>
<h4 className="text-xl font-medium uppercase mb-4 text-white">Acquisition</h4>
<p className="text-sm text-gray-400 leading-relaxed">Securing land rights and energy contracts in West Texas. Foundation laid.</p>
</div>

<div className="border-b border-r border-white/10 p-10 hover:bg-white/5 transition-colors group backdrop-blur-sm">
<span className="text-xs font-mono text-gray-500 mb-8 block group-hover:text-brand">PHASE_02</span>
<h4 className="text-xl font-medium uppercase mb-4 text-white">Deployment</h4>
<p className="text-sm text-gray-400 leading-relaxed">Installation of 50MW immersion-cooled mining containers. Grid connection active.</p>
</div>

<div className="border-b border-r border-white/10 p-10 hover:bg-white/5 transition-colors group backdrop-blur-sm">
<span className="text-xs font-mono text-gray-500 mb-8 block group-hover:text-brand">PHASE_03</span>
<h4 className="text-xl font-medium uppercase mb-4 text-white">Expansion</h4>
<p className="text-sm text-gray-400 leading-relaxed">Crowdfunding round opens. Scaling hashrate to compete with major pools.</p>
</div>

<div className="border-b border-r border-white/10 p-10 bg-brand/10 relative overflow-hidden backdrop-blur-sm border-brand/20">
<div className="absolute inset-0 bg-brand/5"></div>
<span className="text-xs font-mono text-brand mb-8 block">PHASE_04</span>
<h4 className="text-xl font-medium uppercase mb-4 text-white">Ecosystem</h4>
<p className="text-sm text-gray-400 mb-6 leading-relaxed">Launch of DeFi platform and staking rewards for TEXITcoin holders.</p>
<div className="h-1 w-full bg-white/10 overflow-hidden">
<div className="h-full bg-brand w-2/3 animate-pulse"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-dark-border bg-transparent relative z-10">
<div className="max-w-4xl mx-auto px-6">
<div className="mb-12 text-center">
<h2 className="text-3xl font-medium tracking-tight uppercase text-white">Common Questions</h2>
</div>
<div className="space-y-4">
<details className="group glass-panel open:border-brand/30 transition-colors rounded-sm">
<summary className="flex cursor-pointer items-center justify-between p-8 font-medium text-white hover:text-brand transition-colors text-base">
<span className="uppercase tracking-wide">How does TEXITcoin differ from Bitcoin?</span>
<span className="transition group-open:rotate-180">
<svg className="w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="group-open:animate-fadeIn mt-0 px-8 pb-8 text-gray-400 text-base leading-relaxed">
                        While Bitcoin is the asset, TEXITcoin represents the infrastructure. We are an asset-backed project where the value is derived from tangible mining operations and real estate in Texas.
                    </div>
</details>
<details className="group glass-panel open:border-brand/30 transition-colors rounded-sm">
<summary className="flex cursor-pointer items-center justify-between p-8 font-medium text-white hover:text-brand transition-colors text-base">
<span className="uppercase tracking-wide">Is the mining sustainable?</span>
<span className="transition group-open:rotate-180">
<svg className="w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="group-open:animate-fadeIn mt-0 px-8 pb-8 text-gray-400 text-base leading-relaxed">
                        Absolutely. We utilize stranded gas that would otherwise be flared, reducing methane emissions, alongside wind energy contracts prevalent in the Texas grid.
                    </div>
</details>
<details className="group glass-panel open:border-brand/30 transition-colors rounded-sm">
<summary className="flex cursor-pointer items-center justify-between p-8 font-medium text-white hover:text-brand transition-colors text-base">
<span className="uppercase tracking-wide">How do I participate?</span>
<span className="transition group-open:rotate-180">
<svg className="w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="group-open:animate-fadeIn mt-0 px-8 pb-8 text-gray-400 text-base leading-relaxed">
                        You can acquire TEXITcoin through our official crowdfunding portal or decentralized exchanges. Click "Get Started" to connect your wallet.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-transparent pt-24 pb-12 relative z-10 border-t border-white/10" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
<div className="max-w-xl">
<h2 className="text-5xl md:text-7xl font-medium tracking-tight uppercase mb-8 leading-[0.9] text-white">
                        Join the<br/><span className="text-brand">Revolution.</span>
</h2>
<p className="text-gray-400 mb-8 text-base">Be part of the largest decentralized mining operation in North America.</p>
<a className="inline-flex items-center gap-2 border-b border-brand text-xl text-white hover:text-brand transition-colors pb-1" href="mailto:invest@texitcoin.io">
                        invest@texitcoin.io
                        <svg className="w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-2 gap-16 text-sm text-gray-400">
<div className="flex flex-col gap-5">
<span className="text-white font-semibold uppercase tracking-wide">Socials</span>
<a className="hover:text-brand transition-colors" href="#">Twitter / X</a>
<a className="hover:text-brand transition-colors" href="#">Discord</a>
<a className="hover:text-brand transition-colors" href="#">Telegram</a>
</div>
<div className="flex flex-col gap-5">
<span className="text-white font-semibold uppercase tracking-wide">Legal</span>
<a className="hover:text-brand transition-colors" href="#">Whitepaper</a>
<a className="hover:text-brand transition-colors" href="#">Privacy</a>
<a className="hover:text-brand transition-colors" href="#">Terms</a>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-mono uppercase">
<div>© 2024 Aura Flow / TEXITcoin. All rights reserved.</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-brand rounded-full animate-pulse"></div>
                    Systems Operational
                </div>
</div>

<div className="mt-12 select-none pointer-events-none">
<h1 className="text-[14vw] leading-none font-bold text-white text-center tracking-tighter opacity-[0.03]">AURA FLOW</h1>
</div>
</div>
</footer>


    </>
  );
}
