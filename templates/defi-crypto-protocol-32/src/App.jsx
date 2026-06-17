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
'obsidian': '#050505',
'charcoal': '#0F1115',
'acid': '#CCFF00',
'silver': '#E1E1E1',
'glass': 'rgba(255, 255, 255, 0.05)'
},
fontFamily: {
'sans': ['Space Grotesk', 'sans-serif'],
'display': ['Syncopate', 'sans-serif'],
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)",
},
dropShadow: {
'neon': '0 0 5px rgba(204, 255, 0, 0.5)',
'hard': '4px 4px 0px rgba(0, 0, 0, 1)',
}
}
}
}



            !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.3/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


        // 1. Initialize Smooth Scroll (Lenis)
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        // 2. Immediate Entry Animation (No Loader)
        const tlEntry = gsap.timeline();
        tlEntry.from(".hero-title", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            delay: 0.2
        })
        .from(".hero-desc", {
            opacity: 0,
            y: 20,
            duration: 1
        }, "-=0.6")
        .from(".hero-cta", {
            scale: 0.8,
            opacity: 0,
            duration: 0.5
        }, "-=0.6");

        // 3. Scroll Animations
        gsap.registerPlugin(ScrollTrigger);

        // Metrics Count Up
        gsap.utils.toArray('.counter').forEach(counter => {
            const target = parseFloat(counter.getAttribute('data-target'));
            const isDecimal = target < 1; 
            
            gsap.to(counter, {
                innerText: target,
                duration: 2,
                snap: { innerText: isDecimal ? 0.001 : 1 }, 
                scrollTrigger: {
                    trigger: counter,
                    start: "top 85%",
                }
            });
        });

        // Tokenomics Big Text Animation
        gsap.fromTo("#big-text", 
            { xPercent: 25 }, 
            {
                xPercent: -25,
                ease: "none",
                scrollTrigger: {
                    trigger: "#big-text",
                    start: "top bottom", 
                    end: "bottom top",   
                    scrub: 1
                }
            }
        );

        // Ecosystem Items Stagger
        gsap.utils.toArray('.ecosystem-item').forEach((item, i) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top 90%",
                },
                opacity: 0,
                x: -50,
                duration: 0.8,
                delay: i * 0.1
            });
        });

        // Marquee Animation
        gsap.to(".marquee-content", {
            xPercent: -50,
            repeat: -1,
            duration: 20,
            ease: "linear"
        });

        // 4. ROADMAP LOGIC (SYNCED IMAGES + ACTIVE TEXT)
        const phases = document.querySelectorAll('.roadmap-phase');
        const images = document.querySelectorAll('.roadmap-img');

        phases.forEach((phase, index) => {
            ScrollTrigger.create({
                trigger: phase,
                start: "top center",
                end: "bottom center",
                onEnter: () => updateRoadmap(index),
                onEnterBack: () => updateRoadmap(index)
            });
        });

        function updateRoadmap(index) {
            // Update Images
            images.forEach(img => img.classList.remove('active'));
            if(images[index]) {
                images[index].classList.add('active');
            }

            // Update Phase Styles (Text & Dot)
            phases.forEach(p => p.classList.remove('active-phase'));
            if(phases[index]) {
                phases[index].classList.add('active-phase');
            }
        }
        
        // Initialize first state
        updateRoadmap(0);

        // 5. Hacker Text Effect
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        document.querySelectorAll(".link-hover, .scramble-text").forEach(element => {
            element.addEventListener("mouseover", event => {
                let iteration = 0;
                const originalText = event.target.innerText;
                const datasetValue = event.target.dataset.value || originalText; 

                let interval = setInterval(() => {
                    event.target.innerText = datasetValue
                        .split("")
                        .map((letter, index) => {
                            if(index < iteration) {
                                return datasetValue[index];
                            }
                            return letters[Math.floor(Math.random() * 26)]
                        })
                        .join("");
                    
                    if(iteration >= datasetValue.length){ 
                        clearInterval(interval);
                    }
                    
                    iteration += 1 / 3;
                }, 30);
            });
        });

        // 6. Mobile Menu Logic
        const menuBtn = document.getElementById('menu-btn');
        const closeMenuBtn = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuLinks = document.querySelectorAll('.menu-link');

        function toggleMenu() {
            mobileMenu.classList.toggle('open');
            document.body.classList.toggle('overflow-hidden'); // Prevent scrolling when menu is open
        }

        menuBtn.addEventListener('click', toggleMenu);
        closeMenuBtn.addEventListener('click', toggleMenu);
        
        menuLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
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
      

<div className="noise"></div>

<nav className="fixed top-0 w-full z-50 px-6 py-4 backdrop-blur-md bg-obsidian/60 border-b border-white/5 transition-all duration-300">
<div className="flex justify-between items-center max-w-7xl mx-auto">
<a className="text-2xl font-display font-bold tracking-widest text-white group relative z-50" href="#">
                VANTAGE<span className="text-acid group-hover:animate-pulse">.</span>
</a>

<div className="hidden md:flex gap-12 font-sans text-sm uppercase tracking-widest relative z-50">
<a className="text-gray-400 hover:text-acid transition-colors link-hover" data-value="Protocol" href="#features">Protocol</a>
<a className="text-gray-400 hover:text-acid transition-colors link-hover" data-value="Ecosystem" href="#ecosystem">Ecosystem</a>
<a className="text-gray-400 hover:text-acid transition-colors link-hover" data-value="Roadmap" href="#roadmap">Roadmap</a>
</div>
<div className="flex items-center gap-4 relative z-50">
<button className="hidden md:block px-6 py-2 border border-white/20 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-full group overflow-hidden relative">
<span className="relative z-10 group-hover:text-black transition-colors">Launch App</span>
<div className="absolute inset-0 bg-acid translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</button>

<button className="md:hidden text-white focus:outline-none" id="menu-btn">
<svg className="w-8 h-8" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</nav>

<div className="mobile-menu fixed inset-0 z-40 bg-obsidian flex flex-col justify-center items-center text-center md:hidden" id="mobile-menu">
<div className="flex flex-col gap-8 font-display text-2xl font-bold uppercase">
<a className="text-white hover:text-acid transition-colors menu-link" href="#features">Protocol</a>
<a className="text-white hover:text-acid transition-colors menu-link" href="#ecosystem">Ecosystem</a>
<a className="text-white hover:text-acid transition-colors menu-link" href="#roadmap">Roadmap</a>
</div>
<button className="absolute top-6 right-6 text-white p-2" id="close-menu">
<svg className="w-8 h-8" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">

<div className="absolute inset-0 z-0">
<div data-us-project="G2OBjVkMrg8juHghbIqJ" style={{width: '100%', height: '100%'}}></div>
</div>


<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-acid rounded-full blur-[150px] opacity-5 pointer-events-none z-1"></div>
<div className="container w-full mx-auto px-6 relative z-10 text-center pointer-events-none overflow-hidden">
<div className="overflow-hidden mb-8">

<p className="hero-reveal text-acid font-mono text-xs md:text-sm tracking-[0.3em] uppercase inline-block border px-3 py-2 rounded border-acid/20 bg-black/80 backdrop-blur-md pointer-events-auto shadow-lg">
                    The Velocity Protocol
                </p>
</div>
<div className="relative pointer-events-auto max-w-6xl mx-auto">


<h1 className="hero-title text-6xl md:text-8xl lg:text-9xl font-sans font-bold uppercase leading-[0.9] tracking-tighter mb-8 drop-shadow-2xl">
<span className="block title-gradient text-transparent bg-clip-text">Institutional</span>
<span className="block title-gradient text-transparent bg-clip-text">Liquidity Layer</span>
</h1>
</div>
<div className="flex flex-col justify-center items-center gap-8 mt-8 max-w-2xl mx-auto pointer-events-auto">

<div className="p-6 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-center shadow-2xl">
<p className="hero-desc text-gray-300 font-sans text-lg md:text-xl leading-relaxed">
                        VANTAGE bridges the gap between traditional finance and DeFi.
                        
                        <span className="text-white">Zero slippage. Micro-second finality. Infinite scale.</span>
</p>
</div>
<div className="hero-cta relative group mt-4">
<div className="absolute -inset-1 bg-gradient-to-r from-acid to-white rounded-sm blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

<button className="relative bg-obsidian border border-white/20 text-white px-10 py-5 font-display font-bold uppercase tracking-wide hover:bg-acid hover:text-black transition-all duration-300 rounded-sm shadow-lg text-sm md:text-base">
                        Start Trading
                    </button>
</div>
</div>
</div>
</section>

<div className="w-full bg-acid py-3 overflow-hidden whitespace-nowrap border-y border-black z-20 relative transform -rotate-1 scale-105 origin-left shadow-lg">
<div className="marquee-content inline-block text-obsidian font-bold font-mono text-lg tracking-tight">
            BTC/USD $94,231 ▲ • ETH/USD $4,821 ▲ • VTG/USD $12.45 ▲▲ • SOL/USD $188 ▲ • LIQUIDITY $4.2B • 24H VOL $890M • VTG/USD $12.45 ▲▲ • BTC/USD $94,231 ▲ •
        </div>
</div>

<section className="py-16 bg-charcoal border-b border-white/5">
<div className="container mx-auto px-6">
<p className="text-xs font-mono text-gray-500 uppercase tracking-widest text-center mb-10">Trusted by Validators</p>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center items-center">
<h3 className="text-xl md:text-2xl font-display font-bold text-gray-600 hover:text-white transition-colors duration-300 cursor-default">SEQUOIA</h3>
<h3 className="text-xl md:text-2xl font-display font-bold text-gray-600 hover:text-white transition-colors duration-300 cursor-default">PANTERA</h3>
<h3 className="text-xl md:text-2xl font-display font-bold text-gray-600 hover:text-white transition-colors duration-300 cursor-default">BINANCE</h3>
<h3 className="text-xl md:text-2xl font-display font-bold text-gray-600 hover:text-white transition-colors duration-300 cursor-default">COINBASE</h3>
<h3 className="text-xl md:text-2xl font-display font-bold text-gray-600 hover:text-white transition-colors duration-300 cursor-default">A16Z</h3>
<h3 className="text-xl md:text-2xl font-display font-bold text-gray-600 hover:text-white transition-colors duration-300 cursor-default">POLYCHAIN</h3>
</div>
</div>
</section>

<section className="py-32 bg-obsidian relative">
<div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-acid/5 to-transparent"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-10">

<div className="stat-card group cursor-default">
<h3 className="text-gray-500 font-mono text-sm mb-2">Total Value Locked</h3>
<div className="text-5xl md:text-7xl font-display font-bold text-white group-hover:text-acid transition-colors duration-300 counter" data-target="4.2">0</div>
<span className="text-xl text-acid font-bold">B+</span>
<div className="h-[1px] w-full bg-white/20 mt-4 overflow-hidden">
<div className="h-full w-0 group-hover:w-full bg-acid transition-all duration-1000 ease-out"></div>
</div>
</div>

<div className="stat-card group cursor-default">
<h3 className="text-gray-500 font-mono text-sm mb-2">Transactions / Sec</h3>
<div className="text-5xl md:text-7xl font-display font-bold text-white group-hover:text-acid transition-colors duration-300 counter" data-target="120">0</div>
<span className="text-xl text-acid font-bold">K</span>
<div className="h-[1px] w-full bg-white/20 mt-4 overflow-hidden">
<div className="h-full w-0 group-hover:w-full bg-acid transition-all duration-1000 ease-out"></div>
</div>
</div>

<div className="stat-card group cursor-default">
<h3 className="text-gray-500 font-mono text-sm mb-2">Avg. Cost</h3>

<div className="text-5xl md:text-7xl font-display font-bold text-white group-hover:text-acid transition-colors duration-300 counter" data-target="0.03">0</div>

<span className="text-xl text-acid font-bold">$</span>
<div className="h-[1px] w-full bg-white/20 mt-4 overflow-hidden">
<div className="h-full w-0 group-hover:w-full bg-acid transition-all duration-1000 ease-out"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-charcoal relative" id="features">
<div className="container mx-auto px-6 mb-20">
<h2 className="text-4xl md:text-6xl font-display uppercase font-bold">Protocol <span className="text-acid">Architecture</span></h2>
</div>
<div className="container mx-auto px-6 pb-40">

<div className="stacking-card bg-obsidian border border-white/10 p-10 md:p-16 rounded-3xl mb-12 transform origin-top transition-transform duration-500 neon-hover">
<div className="flex flex-col md:flex-row justify-between gap-10">
<div className="md:w-1/2">
<span className="text-acid font-mono text-xl mb-4 block">01</span>
<h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Atomic Settlement</h3>
<p className="text-gray-400 text-lg leading-relaxed">
                            Peer-to-peer exchange across different blockchains without intermediaries. Utilizing Hashed TimeLock Contracts (HTLC) for absolute security.
                        </p>
<button className="mt-8 text-white border-b border-acid pb-1 hover:text-acid transition-colors">Read Whitepaper</button>
</div>
<div className="md:w-1/2 h-64 md:h-80 rounded-xl relative overflow-hidden card-image-container">
<img alt="Blockchain" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17ccd163-d602-4899-bb48-384b86aacf6d_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent opacity-80"></div>
<div className="absolute bottom-4 left-4 p-2 bg-black/50 backdrop-blur rounded text-xs font-mono border border-white/20">HTLC ENCRYPTED</div>
</div>
</div>
</div>

<div className="stacking-card bg-[#0A0C10] border border-white/10 p-10 md:p-16 rounded-3xl mb-12 transform origin-top transition-transform duration-500 neon-hover">
<div className="flex flex-col md:flex-row justify-between gap-10">
<div className="md:w-1/2">
<span className="text-acid font-mono text-xl mb-4 block">02</span>
<h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Dark Pool Liquidity</h3>
<p className="text-gray-400 text-lg leading-relaxed">
                            Institutional grade privacy for large volume trades. Orders are matched within a zero-knowledge environment, preventing front-running.
                        </p>
</div>
<div className="md:w-1/2 h-64 md:h-80 rounded-xl relative overflow-hidden card-image-container">
<img alt="Dark Pool" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a1a86b7c-a011-43f0-966c-544a0e5f53e9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/40"></div>
<div className="absolute bottom-4 left-4 p-2 bg-black/50 backdrop-blur rounded text-xs font-mono border border-white/20">ZK-SNARKS PROOF</div>
</div>
</div>
</div>

<div className="stacking-card bg-[#111318] border border-white/10 p-10 md:p-16 rounded-3xl transform origin-top transition-transform duration-500 neon-hover">
<div className="flex flex-col md:flex-row justify-between gap-10">
<div className="md:w-1/2">
<span className="text-acid font-mono text-xl mb-4 block">03</span>
<h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Yield Aggregation</h3>
<p className="text-gray-400 text-lg leading-relaxed">
                            AI-driven routing logic scans 14 chains simultaneously to find the highest yield for idle assets, automatically rebalancing every block.
                        </p>
</div>
<div className="md:w-1/2 h-64 md:h-80 rounded-xl relative overflow-hidden card-image-container">
<img alt="Data Analytics" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4a711e45-c2d2-4f0e-9414-408c91c4f7da_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 p-2 bg-black/50 backdrop-blur rounded text-xs font-mono border border-white/20">AI ROUTING ACTIVE</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-obsidian">
<div className="container mx-auto px-6 max-w-4xl">
<h2 className="text-3xl font-display mb-12 text-center">Technical Specifications</h2>
<div className="space-y-4">

<div className="group border border-white/10 p-6 rounded-lg hover:bg-white/5 transition-all cursor-pointer overflow-hidden">
<div className="flex justify-between items-center">
<h4 className="text-xl font-bold font-mono text-acid">Consensus Mechanism</h4>
<span className="text-2xl transform group-hover:rotate-45 transition-transform duration-300">+</span>
</div>
<div className="h-0 group-hover:h-24 transition-all duration-500 ease-in-out overflow-hidden">
<p className="pt-4 text-gray-400">Proof-of-History combined with Tower BFT to achieve sub-400ms finality times while maintaining decentralization across 5,000+ nodes.</p>
</div>
</div>

<div className="group border border-white/10 p-6 rounded-lg hover:bg-white/5 transition-all cursor-pointer overflow-hidden">
<div className="flex justify-between items-center">
<h4 className="text-xl font-bold font-mono text-acid">Virtual Machine (VVM)</h4>
<span className="text-2xl transform group-hover:rotate-45 transition-transform duration-300">+</span>
</div>
<div className="h-0 group-hover:h-24 transition-all duration-500 ease-in-out overflow-hidden">
<p className="pt-4 text-gray-400">Fully compatible with EVM but optimized for parallel processing. Execute thousands of smart contracts simultaneously.</p>
</div>
</div>

<div className="group border border-white/10 p-6 rounded-lg hover:bg-white/5 transition-all cursor-pointer overflow-hidden">
<div className="flex justify-between items-center">
<h4 className="text-xl font-bold font-mono text-acid">Token Standard</h4>
<span className="text-2xl transform group-hover:rotate-45 transition-transform duration-300">+</span>
</div>
<div className="h-0 group-hover:h-24 transition-all duration-500 ease-in-out overflow-hidden">
<p className="pt-4 text-gray-400">VRC-20 standards include native metadata compression and gas-less transfer capabilities for authorized wallets.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 relative overflow-hidden flex items-center justify-center bg-charcoal">
<div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
<h2 className="text-[18vw] font-display font-bold text-transparent select-none leading-none tracking-tighter whitespace-nowrap" id="big-text" style={{WebkitTextStroke: '2px rgba(255, 255, 255, 0.1)'}}>
               TOKENOMICS
           </h2>
</div>

<div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[600px] z-20 parallax-card perspective-1000 group">
<div className="absolute inset-0 bg-acid blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
<img alt="Token" className="w-full h-full object-cover rounded-lg shadow-2xl brightness-75 contrast-125 grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 border border-acid/20 rounded-lg"></div>

<div className="absolute -right-10 top-20 bg-black/80 backdrop-blur border border-white/10 p-4 rounded text-xs font-mono">
<div className="text-gray-400">Current APY</div>
<div className="text-acid text-xl">14.2%</div>
</div>
<div className="absolute -left-10 bottom-20 bg-black/80 backdrop-blur border border-white/10 p-4 rounded text-xs font-mono">
<div className="text-gray-400">Burn Rate</div>
<div className="text-white text-xl">2.1% / Yr</div>
</div>
</div>
</section>

<section className="py-20 bg-obsidian" id="ecosystem">
<div className="container mx-auto px-6">
<div className="flex flex-col gap-0">

<div className="ecosystem-item border-t border-white/10 py-12 flex flex-col md:flex-row justify-between items-start md:items-center group hover:bg-white/5 transition-colors duration-300 px-4 cursor-pointer">
<span className="text-acid font-mono mb-2 md:mb-0">01</span>
<h3 className="text-4xl font-display font-bold text-gray-500 group-hover:text-white transition-colors scramble-text" data-value="Staking V2">Staking V2</h3>
<p className="hidden md:block text-gray-500 w-1/3 text-right group-hover:text-acid">Up to 45% APY locked</p>
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-acid group-hover:border-acid transition-all transform group-hover:-rotate-45">
<svg className="w-4 h-4 text-white group-hover:text-black" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>

<div className="ecosystem-item border-t border-white/10 py-12 flex flex-col md:flex-row justify-between items-start md:items-center group hover:bg-white/5 transition-colors duration-300 px-4 cursor-pointer">
<span className="text-acid font-mono mb-2 md:mb-0">02</span>
<h3 className="text-4xl font-display font-bold text-gray-500 group-hover:text-white transition-colors scramble-text" data-value="Governance">Governance</h3>
<p className="hidden md:block text-gray-500 w-1/3 text-right group-hover:text-acid">DAO Voting Power</p>
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-acid group-hover:border-acid transition-all transform group-hover:-rotate-45">
<svg className="w-4 h-4 text-white group-hover:text-black" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>

<div className="ecosystem-item border-t border-b border-white/10 py-12 flex flex-col md:flex-row justify-between items-start md:items-center group hover:bg-white/5 transition-colors duration-300 px-4 cursor-pointer">
<span className="text-acid font-mono mb-2 md:mb-0">03</span>
<h3 className="text-4xl font-display font-bold text-gray-500 group-hover:text-white transition-colors scramble-text" data-value="The Bridge">The Bridge</h3>
<p className="hidden md:block text-gray-500 w-1/3 text-right group-hover:text-acid">Cross-chain Interop</p>
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-acid group-hover:border-acid transition-all transform group-hover:-rotate-45">
<svg className="w-4 h-4 text-white group-hover:text-black" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-charcoal" id="roadmap">
<div className="container mx-auto px-6">
<h2 className="text-5xl font-display font-bold mb-24 text-center">Trajectory</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-20 relative">

<div className="relative border-l border-white/10 ml-4 md:ml-10">

<div className="mb-40 pl-10 relative roadmap-phase" data-index="0">
<div className="phase-dot absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full"></div>
<span className="phase-label font-mono text-sm block">PHASE 01</span>
<h4 className="phase-title text-4xl font-bold mt-2">Mainnet Launch</h4>
<p className="text-gray-400 mt-4 text-lg leading-relaxed">
                            Deployment of the Genesis block. Initial validator onboarding ensuring a decentralized distribution of power from day one. TGE happens concurrently.
                        </p>
</div>

<div className="mb-40 pl-10 relative roadmap-phase" data-index="1">
<div className="phase-dot absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full"></div>
<span className="phase-label font-mono text-sm block">PHASE 02</span>
<h4 className="phase-title text-4xl font-bold mt-2">Vantage SDK</h4>
<p className="text-gray-400 mt-4 text-lg leading-relaxed">
                            Complete developer suite for building dApps. Includes Rust and Solidity compiler support, API endpoints, and a comprehensive documentation library.
                        </p>
</div>

<div className="mb-40 pl-10 relative roadmap-phase" data-index="2">
<div className="phase-dot absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full"></div>
<span className="phase-label font-mono text-sm block">PHASE 03</span>
<h4 className="phase-title text-4xl font-bold mt-2">Global Settlement</h4>
<p className="text-gray-400 mt-4 text-lg leading-relaxed">
                            Integration with traditional financial institutions (TradFi). Bridges to SWIFT and SEPA enabling instant fiat on/off ramps directly on-chain.
                        </p>
</div>
</div>

<div className="hidden md:block">
<div className="sticky top-32 h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">

<img alt="Mainnet" className="roadmap-img active absolute inset-0 w-full h-full object-cover" id="img-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/622eee03-933e-4849-bec1-9c79c8a93107_1600w.webp"/>
<div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

<img alt="SDK" className="roadmap-img absolute inset-0 w-full h-full object-cover" id="img-1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9f2ed82e-900a-4e17-843f-6340215c86a0_1600w.jpg"/>

<img alt="Global" className="roadmap-img absolute inset-0 w-full h-full object-cover" id="img-2" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-5 right-5 bg-black/60 backdrop-blur px-4 py-2 border border-white/10 rounded">
<span className="text-acid font-mono text-xs">VISUALIZATION // LIVE</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 bg-acid relative overflow-hidden flex flex-col items-center justify-center text-center">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
<div className="relative z-10">
<h2 className="text-black font-display text-[8vw] leading-none font-bold tracking-tighter hover:skew-x-2 transition-transform duration-300 cursor-pointer">
                JOIN THEVANGUARD
            </h2>
<div className="mt-10 flex gap-4 justify-center">
<button className="bg-black text-white px-10 py-4 font-bold text-xl hover:scale-110 transition-transform">DISCORD</button>
<button className="border-2 border-black text-black px-10 py-4 font-bold text-xl hover:bg-black hover:text-white transition-colors">TWITTER</button>
</div>
</div>
</section>

<footer className="bg-obsidian pt-20 pb-10 border-t border-white/10">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-2">
<h2 className="text-4xl font-display font-bold mb-6 text-white">VANTAGE.</h2>
<p className="max-w-md text-gray-400">Pioneering the future of decentralized finance with speed, security, and institutional-grade architecture.</p>
<div className="mt-8 flex gap-4">
<input className="bg-white/5 border border-white/10 px-4 py-3 w-64 focus:border-acid outline-none text-white transition-colors" placeholder="Enter your email" type="email"/>
<button className="bg-white text-black px-6 font-bold hover:bg-acid transition-colors">JOIN</button>
</div>
</div>
<div>
<h4 className="font-bold mb-4 uppercase text-sm tracking-widest text-white">Platform</h4>
<ul className="space-y-2 text-gray-400 text-sm">
<li className="hover:text-acid cursor-pointer transition-colors">Markets</li>
<li className="hover:text-acid cursor-pointer transition-colors">Exchange</li>
<li className="hover:text-acid cursor-pointer transition-colors">Earn</li>
<li className="hover:text-acid cursor-pointer transition-colors">Wallet</li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4 uppercase text-sm tracking-widest text-white">Social</h4>
<ul className="space-y-2 text-gray-400 text-sm">
<li className="hover:text-acid cursor-pointer transition-colors">Twitter / X</li>
<li className="hover:text-acid cursor-pointer transition-colors">Discord</li>
<li className="hover:text-acid cursor-pointer transition-colors">Telegram</li>
<li className="hover:text-acid cursor-pointer transition-colors">Medium</li>
</ul>
</div>
</div>
<div className="flex justify-between items-center border-t border-white/5 pt-8 text-xs text-gray-600">
<p>© 2024 VANTAGE PROTOCOL.</p>
<div className="flex gap-4">
<span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
<span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
</div>
</div>
</div>
</footer>






    </>
  );
}
