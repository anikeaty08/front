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
'void': '#030303',
'panel': '#080808',
'mint': '#00ffa3',
'mint-dark': '#00b372',
'border': 'rgba(255, 255, 255, 0.08)',
'border-strong': 'rgba(255, 255, 255, 0.15)',
'sub': '#888888'
},
fontFamily: {
'display': ['Inter', 'sans-serif'],
'mono': ['JetBrains Mono', 'monospace'],
'body': ['Inter', 'sans-serif'],
},
backgroundImage: {
'tech-grid': "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
},
letterSpacing: {
'tightest': '-0.04em',
}
}
}
}



{
"@context": "https://schema.org",
"@graph": [
{
"@type": "Organization",
"name": "Aetheris Foundation",
"url": "https://www.aetheris.io",
"logo": "https://www.aetheris.io/logo.png",
"sameAs": [
"https://twitter.com/aetheris",
"https://discord.gg/aetheris",
"https://github.com/aetheris-protocol"
]
},
{
"@type": "SoftwareApplication",
"name": "Aetheris Protocol",
"applicationCategory": "Blockchain",
"operatingSystem": "Decentralized Network",
"description": "A Layer 1 blockchain protocol utilizing DAG consensus for high throughput and low latency.",
"offers": {
"@type": "Offer",
"price": "0",
"priceCurrency": "USD"
}
},
{
"@type": "FAQPage",
"mainEntity": [
{
"@type": "Question",
"name": "How is Aetheris different from Solana?",
"acceptedAnswer": {
"@type": "Answer",
"text": "While Solana focuses on Proof of History, Aetheris utilizes a DAG (Directed Acyclic Graph) structure which allows for parallel block processing, theoretically offering infinite horizontal scalability."
}
},
{
"@type": "Question",
"name": "Is the Mainnet live?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Yes, the Aetheris Mainnet Beta launched in Q4 2025. You can bridge assets now and start deploying smart contracts."
}
},
{
"@type": "Question",
"name": "How do I run a validator node?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Running a node requires 32GB RAM and a 4-core CPU. You must stake a minimum of 50,000 ATH tokens."
}
}
]
}
]
}


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.2/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


        // --- 1. PRELOADER ---
        const preloader = document.getElementById('preloader');
        const loaderBar = document.getElementById('loader-bar');
        
        let width = 0;
        const loadInterval = setInterval(() => {
            width += Math.random() * 15;
            if(width > 100) width = 100;
            loaderBar.style.width = width + '%';
            
            if(width === 100) {
                clearInterval(loadInterval);
                gsap.to(preloader, {
                    yPercent: -100,
                    duration: 1,
                    ease: "power4.inOut",
                    delay: 0.5,
                    onComplete: initSite
                });
            }
        }, 100);

        function initSite() {
            initAnimations();
        }

        // --- 3. ANIMATIONS (GSAP) ---
        function initAnimations() {
            gsap.registerPlugin(ScrollTrigger);

            // Hero Entrance
            gsap.to('.hero-anim', {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out"
            });

            // Section Reveals (Play In / Play Out)
            const reveals = document.querySelectorAll('.reveal');
            reveals.forEach(el => {
                gsap.fromTo(el, 
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 90%",
                            end: "bottom 10%",
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );
            });

            // Token Chart Animation
            const tokenRing = document.querySelector('.token-chart-ring');
            if(tokenRing) {
                gsap.to(tokenRing, {
                    strokeDashoffset: 100, // Draw 2/3rds roughly
                    duration: 2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: '#token',
                        start: "top 70%",
                        toggleActions: "play reverse play reverse"
                    }
                });
            }

            // Token Numbers Count Up
            const tokenStats = document.querySelectorAll('.token-stat-number');
            tokenStats.forEach(stat => {
                const target = parseFloat(stat.getAttribute('data-target'));
                gsap.to(stat, {
                    innerText: target,
                    duration: 2,
                    snap: { innerText: 0.1 },
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: '#token',
                        start: "top 70%",
                        toggleActions: "play reverse play reverse"
                    }
                });
            });
        }

        // --- 4. SMOOTH SCROLL ---
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

    
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
      


<div aria-label="Loading Website" className="preloader" id="preloader" role="status">
<div className="text-center px-6">
<div className="font-display text-3xl md:text-4xl font-semibold mb-2 tracking-tighter">INITIALIZING</div>
<div className="w-48 h-1 bg-gray-800 mx-auto overflow-hidden">
<div className="h-full bg-mint w-0" id="loader-bar"></div>
</div>
<div className="font-mono text-[10px] text-mint mt-2 tracking-widest">ESTABLISHING UPLINK...</div>
</div>
</div>
<div aria-hidden="true" className="fixed inset-0 pointer-events-none z-40 p-4 hidden md:block">
<div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/50"></div>
<div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/50"></div>
<div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/50"></div>
<div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/50"></div>
</div>

<nav aria-label="Main Navigation" className="fixed w-full z-50 top-0 border-b border-border bg-void/90 backdrop-blur-xl">
<div className="flex h-16 max-w-[1920px] mx-auto px-6 md:px-12 items-center justify-between">
<a aria-label="Aetheris Homepage" className="flex items-center gap-2 group shrink-0" href="/home">
<span className="text-lg font-semibold tracking-tight font-display">AETHERIS</span>
</a>
<div className="hidden lg:flex items-center border-x border-border h-full px-8">
<a className="uppercase text-sub hover:text-mint transition-colors text-xs font-semibold tracking-wide pt-2 pr-6 pb-2 pl-6" href="/about">About</a>
<a className="uppercase text-sub hover:text-mint transition-colors text-xs font-semibold tracking-wide pt-2 pr-6 pb-2 pl-6" href="/tokenomics">Tokenomics</a>
<a className="uppercase text-sub hover:text-mint transition-colors text-xs font-semibold tracking-wide pt-2 pr-6 pb-2 pl-6" href="/roadmap">Roadmap</a>
<a className="uppercase text-sub hover:text-mint transition-colors text-xs font-semibold tracking-wide pt-2 pr-6 pb-2 pl-6" href="/staking-dashboard">Staking</a>
<a className="uppercase text-sub hover:text-mint transition-colors text-xs font-semibold tracking-wide pt-2 pr-6 pb-2 pl-6" href="/blog-list">Blog</a>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-mint">
<span className="w-1.5 h-1.5 bg-mint rounded-full animate-pulse"></span>
                    GAS: 4 GWEI
                </div>
<button className="bg-white text-void px-4 md:px-6 py-2 text-xs font-semibold uppercase hover:bg-mint transition-colors whitespace-nowrap">
                    Connect
                </button>
</div>
</div>
</nav>

<header className="relative w-full h-screen min-h-[600px] bg-void overflow-hidden flex flex-col items-center justify-end pb-24 md:pb-32">

<div className="absolute top-0 left-0 w-full h-[65vh] z-0 pointer-events-none">
<div data-us-project="7zydvovZReD8YsoiUwj3" style={{width: '100%', height: '100%'}}></div>

<div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-void via-void/80 to-transparent z-10"></div>
</div>

<div className="relative z-20 flex flex-col items-center w-full max-w-[1920px] px-6 text-center">

<div className="flex flex-col items-center justify-center w-full">

<h1 className="font-display text-4xl md:text-7xl font-semibold text-white tracking-tightest leading-none relative z-20 mix-blend-lighten">
                    INFINITE
                </h1>

<div className="h-2 md:h-4"></div>

<div aria-label="SCALABILITY" className="font-display text-[13vw] leading-[0.85] font-semibold tracking-tighter text-transparent z-10 select-none pointer-events-none text-stroke opacity-90 transition-opacity">
                    SCALABILITY
                </div>
</div>

<p className="max-w-xl text-center text-gray-400 text-sm md:text-lg font-medium leading-relaxed mt-6 mb-8 hero-anim opacity-0 translate-y-4">
                The world's first hybrid DAG-Blockchain architecture. Instant finality, zero-knowledge privacy, and quantum-resistant security.
            </p>

<div className="flex flex-col md:flex-row gap-4 w-full md:w-auto hero-anim opacity-0 translate-y-4">
<button className="group bg-mint text-void px-10 py-3 text-xs font-semibold uppercase tracking-wide hover:bg-white transition-all hover:scale-[1.02] min-w-[180px] text-center shadow-[0_0_20px_rgba(0,255,163,0.3)]">
                    Start Building
                </button>
<button className="group bg-void/50 backdrop-blur-md border border-white/20 text-white px-10 py-3 text-xs font-semibold uppercase tracking-wide hover:bg-white/10 transition-all hover:border-white/40 min-w-[180px] text-center">
                    Read Whitepaper
                </button>
</div>
</div>
</header>
<div aria-hidden="true" className="tech-separator"></div>

<section aria-label="Trusted Partners" className="border-b border-border bg-void">
<div className="max-w-[1920px] mx-auto grid grid-cols-2 md:grid-cols-6 divide-x divide-y md:divide-y-0 divide-border">
<div className="p-6 md:p-10 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100">
<span className="font-display font-semibold text-lg md:text-xl tracking-tight">BINANCE</span>
</div>
<div className="p-6 md:p-10 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100">
<span className="font-display font-semibold text-lg md:text-xl tracking-tight">COINBASE</span>
</div>
<div className="p-6 md:p-10 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100">
<span className="font-display font-semibold text-lg md:text-xl tracking-tight">SEQUOIA</span>
</div>
<div className="p-6 md:p-10 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100">
<span className="font-display font-semibold text-lg md:text-xl tracking-tight">a16z</span>
</div>
<div className="p-6 md:p-10 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100">
<span className="font-display font-semibold text-lg md:text-xl tracking-tight">POLYCHAIN</span>
</div>
<div className="p-6 md:p-10 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100">
<span className="font-display font-semibold text-lg md:text-xl tracking-tight">PANTERA</span>
</div>
</div>
</section>
<div aria-hidden="true" className="tech-separator"></div>

<section aria-label="Protocol Features" className="py-16 md:py-24 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 flex items-end justify-between reveal">
<div className="">
<h2 className="font-display text-3xl md:text-4xl font-semibold mb-2 tracking-tight">Core Architecture</h2>
<p className="text-sub text-sm md:text-base max-w-md">Built on the Trinity Protocol, combining speed, security, and scalability.</p>
</div>
<div className="hidden md:block text-right">
<div className="font-mono text-[10px] text-mint">SYS_ARCH_V2</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
<article className="group border-b md:border-b-0 md:border-r border-border p-6 md:p-8 hover-card bg-panel reveal">
<div className="w-10 h-10 bg-void border border-border flex items-center justify-center mb-6 text-mint">
<iconify-icon height="24" icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="font-display text-xl font-semibold mb-3 tracking-tight">Hyper-Throughput</h3>
<p className="text-sm md:text-base text-sub leading-relaxed mb-4">Parallel transaction processing via DAG structure allowing 150k+ TPS on mainnet.</p>
</article>
<article className="group border-b md:border-b-0 md:border-r border-border p-6 md:p-8 hover-card bg-panel reveal">
<div className="w-10 h-10 bg-void border border-border flex items-center justify-center mb-6 text-mint">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="font-display text-xl font-semibold mb-3 tracking-tight">ZK-Privacy Layer</h3>
<p className="text-sm md:text-base text-sub leading-relaxed mb-4">Native Zero-Knowledge proofs for optional transactional privacy and compliance.</p>
</article>
<article className="group border-b md:border-b-0 border-border p-6 md:p-8 hover-card bg-panel reveal">
<div className="w-10 h-10 bg-void border border-border flex items-center justify-center mb-6 text-mint">
<iconify-icon height="24" icon="solar:global-linear" width="24"></iconify-icon>
</div>
<h3 className="font-display text-xl font-semibold mb-3 tracking-tight">Interoperability</h3>
<p className="text-sm md:text-base text-sub leading-relaxed mb-4">Native bridges to Ethereum, Solana, and Cosmos via the Aetheris Nexus.</p>
</article>
</div>
</div>
</section>
<div aria-hidden="true" className="tech-separator"></div>

<section aria-label="Tokenomics" className="grid grid-cols-1 md:grid-cols-2" id="token">

<div className="bg-panel p-8 md:p-24 border-b md:border-b-0 md:border-r border-border flex flex-col justify-center items-center relative overflow-hidden reveal order-2 md:order-1">
<div className="relative w-56 h-56 md:w-64 md:h-64">
<svg className="w-full h-full -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="45" stroke="#1a1a1a" strokeWidth="8"></circle>

<circle className="token-chart-ring" cx="50" cy="50" fill="none" r="45" stroke="#00ffa3" stroke-dasharray="283" stroke-dashoffset="283" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-3xl md:text-4xl font-semibold text-white">1B</span>
<span className="text-xs text-sub uppercase tracking-wider">Total Supply</span>
</div>
</div>
<div className="mt-8 grid grid-cols-2 gap-8 text-center w-full max-w-sm">
<div className="">
<div className="text-xl md:text-2xl font-semibold text-white">$<span className="token-stat-number" data-target="452">0</span>M</div>
<div className="text-[10px] text-sub uppercase">Market Cap</div>
</div>
<div className="">
<div className="text-xl md:text-2xl font-semibold text-mint"><span className="token-stat-number" data-target="12.5">0</span>%</div>
<div className="text-[10px] text-sub uppercase">Staking APY</div>
</div>
</div>
</div>

<div className="bg-void p-8 md:p-24 flex flex-col justify-center reveal order-1 md:order-2">
<h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 tracking-tight">Token Utility ($ATH)</h3>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-mint font-semibold font-mono shrink-0">1</div>
<div className="">
<h4 className="font-semibold text-white text-lg">Network Fees</h4>
<p className="text-sm md:text-base text-sub">Used to pay for transactions and smart contract execution across the mesh.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-mint font-semibold font-mono shrink-0">2</div>
<div className="">
<h4 className="font-semibold text-white text-lg">Governance</h4>
<p className="text-sm md:text-base text-sub">Vote on protocol upgrades, treasury allocation, and parameter adjustments.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-mint font-semibold font-mono shrink-0">3</div>
<div className="">
<h4 className="font-semibold text-white text-lg">Validator Staking</h4>
<p className="text-sm md:text-base text-sub">Secure the network by delegating to validators and earning yield.</p>
</div>
</div>
</div>
</div>
</section>
<div aria-hidden="true" className="tech-separator"></div>

<section aria-label="Development Roadmap" className="py-16 md:py-24 bg-void" id="roadmap">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 md:gap-16">
<div className="md:w-1/3 reveal">
<div className="inline-block px-3 py-1 border border-border bg-white/5 rounded-full mb-6">
<span className="text-[10px] font-mono text-mint uppercase tracking-widest">Execution Log</span>
</div>
<h2 className="font-display text-3xl md:text-4xl font-semibold mb-4 tracking-tight">Strategic<br/>Roadmap</h2>
<p className="text-sub text-sm md:text-base leading-relaxed mb-8">
                        Aetheris is deployed in sequential phases to ensure network stability and security. We are currently in Phase 2.
                    </p>
</div>
<div className="md:w-2/3 space-y-0 relative border-l border-border ml-2 md:ml-0">
<div className="relative pl-8 md:pl-10 pb-12 reveal group">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-mint rounded-full shadow-[0_0_10px_#00ffa3]"></div>
<div className="border border-border bg-panel/50 p-6 hover:bg-panel transition-colors">
<h3 className="font-semibold text-lg text-white mb-2">Genesis &amp; Foundation</h3>
<p className="text-xs text-sub">Mainnet Alpha, TGE, and Audits completed.</p>
</div>
</div>
<div className="relative pl-8 md:pl-10 pb-12 reveal group">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-white border-2 border-void"></div>
<div className="absolute -left-[9px] top-1 w-4.5 h-4.5 border border-mint rounded-full animate-ping opacity-50"></div>
<div className="border border-mint/30 bg-mint/5 p-6 relative overflow-hidden">
<div className="flex justify-between items-start mb-2 relative z-10">
<span className="font-mono text-xs text-white">PHASE 02 — IN PROGRESS</span>
<span className="text-[9px] bg-mint text-void px-2 py-0.5 font-bold rounded">LIVE</span>
</div>
<h3 className="font-semibold text-lg text-white mb-4 relative z-10">Ecosystem Expansion</h3>
<p className="text-xs text-white/70">Rolling out the Aetheris DEX, Mobile Wallet, and Governance DAO.</p>
</div>
</div>
<div className="relative pl-8 md:pl-10 reveal group">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-panel border border-sub"></div>
<div className="border border-border border-dashed bg-transparent p-6 opacity-60 hover:opacity-100 transition-opacity">
<h3 className="font-semibold text-lg text-gray-400 mb-2">Global Sovereignty</h3>
<p className="text-xs text-sub">Full decentralization of the sequencer and satellite integration.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<div aria-hidden="true" className="tech-separator"></div>

<section aria-label="Global Network Statistics" className="py-16 md:py-24 bg-void" id="network">
<div className="max-w-[1920px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-8 border border-border bg-panel p-2 relative overflow-hidden reveal min-h-[400px] md:min-h-[500px]">

<div className="absolute inset-0 z-0">
<img alt="Decentralized Global Validator Node Server Network" className="w-full h-full object-cover opacity-40 grayscale brightness-75 contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e590790-e144-4deb-9989-37794b67c60e_1600w.webp"/>
</div>

<div className="scan-line z-10 pointer-events-none"></div>

<div className="relative z-20 p-6 md:p-8 flex flex-col justify-between h-full">
<div className="flex justify-between items-start">
<div className="bg-void/80 backdrop-blur-md p-4 border border-border">
<h2 className="font-display text-xl md:text-2xl font-semibold mb-1 text-white tracking-tight">Live Topology</h2>
<p className="text-sub text-[10px] font-mono">STATUS: SYNCHRONIZED</p>
</div>
<div className="flex gap-2">
<div className="w-2 h-2 bg-mint rounded-full animate-pulse"></div>
<div className="font-mono text-[10px] text-mint hidden md:block">UPLINK ACTIVE</div>
</div>
</div>

<div className="absolute top-[30%] left-[20%] w-20 h-20 md:w-32 md:h-32 border border-mint/20 rounded-full flex items-center justify-center animate-pulse">
<div className="w-1 h-1 bg-mint rounded-full"></div>
</div>
<div className="absolute bottom-[20%] right-[30%] w-16 h-16 md:w-24 md:h-24 border border-mint/10 rounded-full flex items-center justify-center animate-pulse delay-700">
<div className="w-1 h-1 bg-mint rounded-full"></div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-6">
<div className="bg-void border border-border p-6 reveal h-full flex flex-col justify-center">
<h3 className="font-semibold text-white mb-6 text-sm uppercase flex items-center gap-2">
<span className="w-2 h-2 bg-mint rounded-sm"></span>
                            Network Health
                        </h3>
<div className="space-y-4">
<div className="flex justify-between items-center p-3 bg-panel border border-border">
<span className="text-xs text-sub">Active Validators</span>
<span className="font-mono text-white font-semibold">4,120</span>
</div>
<div className="flex justify-between items-center p-3 bg-panel border border-border">
<span className="text-xs text-sub">Global Latency</span>
<span className="font-mono text-mint font-semibold">12ms</span>
</div>
<div className="flex justify-between items-center p-3 bg-panel border border-border">
<span className="text-xs text-sub">Total Staked</span>
<span className="font-mono text-white font-semibold">450M ATH</span>
</div>
</div>
<div className="mt-8">
<div className="text-[10px] text-sub mb-2 uppercase">Region Distribution</div>
<div className="flex gap-1 h-2 w-full">
<div className="h-full bg-mint w-[40%]"></div>
<div className="h-full bg-mint/70 w-[30%]"></div>
<div className="h-full bg-mint/40 w-[20%]"></div>
<div className="h-full bg-mint/20 w-[10%]"></div>
</div>
<div className="flex justify-between text-[9px] text-gray-600 mt-1 font-mono">
<span>NA</span>
<span>EU</span>
<span>ASIA</span>
<span>SA</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<div aria-hidden="true" className="tech-separator"></div>

<section aria-label="Infinite Scalability Animation" className="py-24 md:py-32 bg-panel relative overflow-hidden flex flex-col items-center justify-center h-[70vh] md:h-[90vh]">
<div className="absolute inset-0 opacity-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa933a24-d4de-4c67-83f6-b8676b3bab35_1600w.webp)] bg-cover bg-center"></div>
<div className="singularity-wrapper">
<div className="tunnel-ring w-[100px] h-[100px]"></div>
<div className="tunnel-ring w-[200px] h-[200px]"></div>
<div className="tunnel-ring w-[300px] h-[300px]"></div>
<div className="tunnel-ring w-[400px] h-[400px]"></div>
<div className="tunnel-ring w-[500px] h-[500px]"></div>
<div className="tunnel-ring w-[600px] h-[600px]"></div>
<div className="tunnel-ring w-[700px] h-[700px]"></div>
<div className="tunnel-ring w-[800px] h-[800px]"></div>
<div className="tunnel-ring w-[900px] h-[900px]"></div>
<div className="tunnel-ring w-[1000px] h-[1000px]"></div>
<div className="tunnel-ring w-[1200px] h-[1200px]"></div>
</div>
<div className="relative z-10 text-center reveal pointer-events-none px-6">
<span className="text-mint font-mono text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] uppercase bg-black/50 backdrop-blur-md px-4 py-1 rounded-full border border-mint/20">The Singularity</span>
<h2 className="font-display text-4xl md:text-8xl font-bold mt-6 text-white mix-blend-difference tracking-tight">
                INFINITE  SCALE
            </h2>
<p className="text-gray-400 text-sm md:text-base max-w-md mx-auto mt-6 bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-white/5">
                A consensus mechanism that gets faster as the network grows. The more usage, the higher the throughput.
            </p>
</div>
</section>
<div aria-hidden="true" className="tech-separator"></div>

<section aria-label="Mission Statement" className="pt-16 md:pt-24 pb-16 md:pb-24" id="vision">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-16 items-center">
<div className="md:w-1/2 reveal">
<div className="inline-block px-3 py-1 border border-border bg-white/5 rounded-full mb-6">
<span className="text-[10px] font-mono text-mint uppercase tracking-widest">Our Mandate</span>
</div>
<h2 className="font-display text-3xl md:text-4xl font-semibold mb-4 tracking-tight">Prophecy &amp; Purpose</h2>
<p className="text-sub text-sm md:text-base leading-relaxed mb-6">
                        Aetheris was born from a vision of true digital autonomy. We believe in a future where value is exchanged freely, securely, and without intermediaries, empowering individuals and fostering global innovation.
                    </p>
<p className="text-sub text-sm md:text-base leading-relaxed">
                        Our protocol is not merely a technical advancement; it is a foundational layer for a new era of decentralized applications, digital identities, and sovereign economies.
                    </p>
</div>
<div className="md:w-1/2 reveal">

<img alt="Abstract digital neural network and blockchain mesh connectivity" className="w-full h-auto object-cover rounded-xl border border-border shadow-xl grayscale hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa050e23-c777-40ee-aabe-cc76269a2e47_1600w.jpg"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 border border-border p-6 md:p-8 bg-panel reveal">
<div className="space-y-6 text-sub text-sm md:text-base leading-relaxed border-b md:border-b-0 md:border-r border-border pb-8 md:pb-0 md:pr-8">
<p className="">
                        The current internet infrastructure, while transformative, has become centralized and prone to data silos, censorship, and control by a few dominant entities. Our mission is to dismantle these barriers, building a new public good that is resilient, fair, and accessible to all. We are architects of digital freedom.
                    </p>
<ul className="space-y-2 pl-4 border-l border-mint/30">
<li className="flex items-start gap-2 text-white"><span className="text-mint text-lg leading-none">•</span> **Decentralized Foundation:** No single point of failure, truly community-owned.</li>
<li className="flex items-start gap-2 text-white"><span className="text-mint text-lg leading-none">•</span> **Inclusive Access:** Lowering barriers for developers and users globally.</li>
<li className="flex items-start gap-2 text-white"><span className="text-mint text-lg leading-none">•</span> **Innovation Catalyst:** Providing tools for next-gen Web3 applications.</li>
</ul>
</div>
<div className="space-y-6 text-sub text-sm md:text-base leading-relaxed md:pl-8">

<img alt="Quantum computing processor chip for cryptography" className="w-full h-auto object-cover rounded-md border border-border shadow-md grayscale hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/89dadee1-b89d-415a-a6c9-b3d01200c4cd_1600w.jpg"/>
<p className="">
                        Every line of code, every design decision, and every community initiative is guided by this overarching philosophy. We envision a future where Aetheris is not just a platform, but a global operating system for a more equitable and open digital world.
                    </p>
<a className="text-mint text-sm font-semibold uppercase tracking-widest flex items-center gap-2 hover:underline" href="#" rel="noopener">
                        Explore Our Manifesto <span className="text-lg">→</span>
</a>
</div>
</div>
</div>
</section>
<div aria-hidden="true" className="tech-separator"></div>

<section aria-label="Join Community" className="overflow-hidden group pt-24 pb-24 md:pt-32 md:pb-32 relative">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,255,163,0.15),_transparent_70%)] opacity-50"></div>
<div className="opacity-30 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-4xl mx-auto text-center px-6 relative z-10 reveal">
<h2 className="font-display text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-8 text-white">
                Join the  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-mint">Revolution</span>
</h2>
<p className="font-mono text-sm md:text-base text-gray-400 mb-10 max-w-lg mx-auto">
                &gt; Governance is live.
                &gt; Be part of the consensus.
                &gt; Claim your sovereignty.
            </p>
<div className="flex flex-col md:flex-row justify-center gap-4">
<button className="bg-mint text-void px-10 py-4 font-semibold uppercase hover:shadow-[0_0_20px_rgba(0,255,163,0.5)] transition-shadow">
                    Join Discord
                </button>
<button className="bg-transparent border border-white/20 text-white px-10 py-4 font-semibold uppercase hover:bg-white/10 transition-colors">
                    Follow on X
                </button>
</div>
</div>
</section>

<footer className="border-border reveal border-t pt-16 md:pt-20 pb-10">
<div className="max-w-[1920px] mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20">
<div className="col-span-2 md:col-span-1">
<div className="flex gap-2 mb-4 items-center">
<span className="text-lg font-medium text-white font-display">Aetheris</span>
</div>
<p className="text-sub text-xs leading-relaxed max-w-xs">
                    Architecting the invisible layer of trust for the next generation of decentralized applications.
                </p>
</div>
<div className="">
<h5 className="text-white font-medium text-sm mb-4">Ecosystem</h5>
<ul className="space-y-2.5 text-xs text-sub">
<li className=""><a className="hover:text-mint transition-colors" href="#">Block Explorer</a></li>
<li><a className="hover:text-mint transition-colors" href="#">Governance Forum</a></li>
</ul>
</div>
<div className="">
<h5 className="text-white font-medium text-sm mb-4">Developers</h5>
<ul className="space-y-2.5 text-xs text-sub">
<li className=""><a className="hover:text-mint transition-colors" href="#">Documentation</a></li>
<li className=""><a className="hover:text-mint transition-colors" href="#">Github</a></li>
</ul>
</div>
<div className="">
<h5 className="text-white font-medium text-sm mb-4">Social</h5>
<div className="flex gap-4">
<a className="w-8 h-8 flex items-center justify-center text-sub hover:text-white transition-colors bg-surface rounded-full border border-white/5 hover:border-white/20" href="#">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
</svg>
</a>
<a className="w-8 h-8 flex items-center justify-center text-sub hover:text-white transition-colors bg-surface rounded-full border border-white/5 hover:border-white/20" href="#">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
</svg>
</a>
<a className="w-8 h-8 flex items-center justify-center text-sub hover:text-white transition-colors bg-surface rounded-full border border-white/5 hover:border-white/20" href="#">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path>
</svg>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
<p className="text-[10px] text-sub uppercase tracking-wider">© 2024 Aetheris Foundation. All rights reserved.</p>
<div className="flex items-center gap-2 mt-4 md:mt-0">
<div className="w-1.5 h-1.5 rounded-full bg-mint shadow-[0_0_8px_rgba(102,224,163,0.8)] animate-pulse"></div>
<span className="font-mono text-[10px] text-mint uppercase tracking-widest">System Operational</span>
</div>
</div>
</div>
</footer>










    </>
  );
}
