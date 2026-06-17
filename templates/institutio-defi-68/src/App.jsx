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
black: '#050505',
white: '#FFFFFF',
ui: {
text: '#EDEDED',
secondary: '#A1A1AA',
muted: '#52525B',
border: 'rgba(255, 255, 255, 0.1)',
glass: 'rgba(20, 20, 22, 0.6)',
glassHover: 'rgba(30, 30, 35, 0.8)',
accent: '#EAB308'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
serif: ['Newsreader', 'serif'],
},
fontSize: {
'hero': ['88px', { lineHeight: '1', letterSpacing: '-0.04em' }],
'section': ['56px', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
'card': ['24px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
'body-lg': ['20px', { lineHeight: '1.6' }],
'body': ['16px', { lineHeight: '1.6' }],
'nav': ['11px', { lineHeight: '1', letterSpacing: '0.05em' }],
},
spacing: {
'section-lg': '180px',
'section-md': '140px',
},
maxWidth: {
'content': '1280px',
'text': '560px'
},
animation: {
'spin-slow': 'spin 60s linear infinite',
'float': 'float 6s ease-in-out infinite',
}
}
}
}



        // Iconify
        lucide.createIcons({
            attrs: {
                strokeWidth: 1.25
            }
        });

        // Accordion Logic
        function toggleAccordion(btn) {
            const content = btn.nextElementSibling;
            const isExpanded = btn.getAttribute('aria-expanded') === 'true';
            const iconVertical = btn.querySelector('.accordion-vertical');
            
            // Close all others
            document.querySelectorAll('.accordion-btn').forEach(b => {
                b.setAttribute('aria-expanded', 'false');
                b.nextElementSibling.classList.remove('open');
                const v = b.querySelector('.accordion-vertical');
                if(v) v.style.transform = 'translate(-50%) rotate(0deg)';
            });

            // Toggle current
            if (!isExpanded) {
                btn.setAttribute('aria-expanded', 'true');
                content.classList.add('open');
                if(iconVertical) iconVertical.style.transform = 'translate(-50%) rotate(90deg)';
            }
        }

        // HLS Video Loader
        document.addEventListener('DOMContentLoaded', () => {
            const videos = document.querySelectorAll('.hls-video');
            
            videos.forEach(video => {
                const src = video.getAttribute('data-src');
                if (Hls.isSupported()) {
                    const hls = new Hls({
                        capLevelToPlayerSize: true,
                        autoStartLoad: false
                    });
                    
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                hls.loadSource(src);
                                hls.attachMedia(video);
                                hls.startLoad();
                                video.play().catch(() => {});
                                observer.unobserve(video);
                            }
                        });
                    }, { rootMargin: '200px' });
                    
                    observer.observe(video);
                } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                    video.src = src;
                }
            });

            // Scroll Reveal Observer
            const revealElements = document.querySelectorAll('.reveal-on-scroll');
            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Animate only once
                    }
                });
            }, {
                root: null,
                threshold: 0.15, // Trigger when 15% visible
                rootMargin: '0px 0px -50px 0px' // Offset slightly
            });

            revealElements.forEach(el => revealObserver.observe(el));
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
      

<nav className="fixed top-0 w-full z-50 py-6 bg-black/80 backdrop-blur-sm transition-all duration-300">
<div className="max-w-content mx-auto flex items-start justify-between px-6 xl:px-0">

<a className="flex flex-col group leading-none" href="#">
<span className="text-white font-bold text-xl tracking-tighter">DAMM</span>
<span className="text-[10px] text-ui-muted font-mono uppercase tracking-[0.25em] group-hover:text-white transition-colors pt-1">Capital</span>
</a>

<div className="hidden md:flex items-center gap-10">
<a className="text-nav font-medium text-ui-secondary hover:text-white transition-colors uppercase tracking-widest" href="#funds">Funds</a>
<a className="text-nav font-medium text-ui-secondary hover:text-white transition-colors uppercase tracking-widest" href="#daas">DaaS</a>
<a className="text-nav font-medium text-ui-secondary hover:text-white transition-colors uppercase tracking-widest" href="#about">About Us</a>
<a className="text-nav font-medium text-ui-secondary hover:text-white transition-colors uppercase tracking-widest" href="#contact">Contact</a>
</div>

<a className="text-nav font-medium text-ui-secondary hover:text-white transition-colors uppercase tracking-widest pt-1" href="#">
                Launch App
            </a>
</div>
</nav>

<section className="min-h-[850px] flex overflow-hidden bg-black w-full h-screen pt-20 relative items-center">

<div className="absolute inset-0 z-0 pointer-events-none opacity-100">

<svg className="absolute w-full h-full" preserveaspectratio="xMidYMid slice" viewbox="0 0 1440 900">

<path d="M 400 450 Q 800 350 1100 650" fill="none" stroke="rgba(255,255,255,0.15)" stroke-dasharray="4 6" strokeWidth="1"></path>

<line stroke="rgba(255,255,255,0.1)" strokeWidth="1" x1="1000" x2="1300" y1="700" y2="850"></line>
</svg>

<div className="absolute right-[-10%] top-[20%] w-[800px] h-[800px] opacity-40 animate-spin-slow">
<svg className="w-full h-full" viewbox="0 0 500 500">
<defs>
<radialgradient cx="50%" cy="50%" fx="50%" fy="50%" id="grad1" r="50%">
<stop offset="0%" style={{stopColor: 'rgb(255,255,255)', stopOpacity: '0'}}></stop>
<stop offset="100%" style={{stopColor: 'rgb(255,255,255)', stopOpacity: '0.3'}}></stop>
</radialgradient>
</defs>
<g fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5">
<ellipse cx="250" cy="250" rx="100" ry="220" transform="rotate(0 250 250)"></ellipse>
<ellipse cx="250" cy="250" rx="100" ry="220" transform="rotate(15 250 250)"></ellipse>
<ellipse cx="250" cy="250" rx="100" ry="220" transform="rotate(30 250 250)"></ellipse>
<ellipse cx="250" cy="250" rx="100" ry="220" transform="rotate(45 250 250)"></ellipse>
<ellipse cx="250" cy="250" rx="100" ry="220" transform="rotate(60 250 250)"></ellipse>
<ellipse cx="250" cy="250" rx="100" ry="220" transform="rotate(75 250 250)"></ellipse>
<ellipse cx="250" cy="250" rx="100" ry="220" transform="rotate(90 250 250)"></ellipse>
<ellipse cx="250" cy="250" rx="100" ry="220" transform="rotate(105 250 250)"></ellipse>
<ellipse cx="250" cy="250" rx="100" ry="220" transform="rotate(120 250 250)"></ellipse>
<ellipse cx="250" cy="250" rx="100" ry="220" transform="rotate(135 250 250)"></ellipse>
<ellipse cx="250" cy="250" rx="100" ry="220" transform="rotate(150 250 250)"></ellipse>
<ellipse cx="250" cy="250" rx="100" ry="220" transform="rotate(165 250 250)"></ellipse>
</g>
<circle cx="250" cy="250" fill="none" r="180" stroke="rgba(255,255,255,0.1)" stroke-dasharray="2 4"></circle>
</svg>
</div>

<div className="absolute top-[38%] left-[55%] animate-[float_8s_ease-in-out_infinite] z-10">
<div className="relative w-20 h-20 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm">
<span className="math-font text-white text-xl">S = 2πR</span>
<div className="absolute w-[1px] h-8 bg-white/30 -top-8 left-1/2 -rotate-12"></div>
</div>
</div>

<div className="absolute top-[52%] left-[78%] w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 opacity-0 animate-[fadeIn_1.5s_ease-out_0.5s_forwards] z-0 mix-blend-screen pointer-events-none">

<img alt="3D Metallic Knot" className="w-full h-full object-contain grayscale-[0.5] contrast-125 animate-[float_10s_ease-in-out_infinite_reverse]" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute bottom-[25%] left-[65%] animate-[float_9s_ease-in-out_infinite_reverse] z-10">
<span className="math-font text-white text-4xl opacity-90">x · y = k</span>
</div>

<div className="absolute bottom-12 right-12 w-64 h-32 opacity-60">
<svg className="w-full h-full stroke-white fill-none" strokeWidth="1" viewbox="0 0 200 100">
<path d="M 0 90 Q 50 90 80 50 Q 100 10 120 50 Q 150 90 200 90" stroke-opacity="0.5"></path>
<line stroke-opacity="0.3" x1="0" x2="200" y1="90" y2="90"></line>
<line stroke-dasharray="2 2" stroke-opacity="0.3" x1="100" x2="100" y1="90" y2="10"></line>
</svg>
<svg className="lucide lucide-star absolute -bottom-2 -right-2 w-8 h-8 text-ui-muted stroke-[1]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.25" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>

<div className="max-w-content xl:px-0 grid grid-cols-1 lg:grid-cols-12 w-full z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="col-span-12 lg:col-span-7 flex flex-col justify-center">

<div className="flex items-center gap-4 mb-10">
<span className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]"></span>
<span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ui-secondary">Playing Long Term Financial Games</span>
</div>

<h1 className="text-6xl md:text-[84px] font-medium text-white leading-[1] tracking-tighter mb-10">
                    Advancing
                    Institutional Grade
                    Access To On-
                    Chain Finance
                </h1>

<p className="text-body-lg text-ui-secondary max-w-[600px] mb-16 font-light">
                    We transform on-chain complexity into risk-aware execution and long-term financial outcomes through rigorous financial and technological modeling.
                </p>

<div className="">
<a className="group relative inline-flex items-center justify-between pl-6 pr-4 h-[52px] border border-white/20 hover:border-white/50 transition-all bg-transparent w-auto min-w-[200px]" href="#funds">
<span className="text-[12px] font-mono font-medium text-white tracking-[0.15em] uppercase">Explore Funds</span>
<svg className="lucide lucide-arrow-right w-4 h-4 text-white group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.25" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="relative w-full py-section-lg bg-black z-10" id="funds">
<div className="max-w-content mx-auto px-6 xl:px-0">

<div className="mb-24 border-b border-ui-border pb-8 flex flex-col md:flex-row justify-between items-end gap-8">
<div className="">
<h2 className="text-section font-medium text-white tracking-tighter mb-4" style={{}}>Tokenized Funds</h2>
<p className="text-body-lg text-ui-muted max-w-text">
                        Systematic, non-custodial yield generation via algorithmic execution.
                    </p>
</div>
<div className="font-mono text-ui-muted text-xs tracking-widest uppercase mb-2">01 — Funds</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="reveal-on-scroll group relative h-[520px] bg-ui-glass border border-ui-border hover:border-white/20 transition-all duration-500 overflow-hidden">
<div className="video-bg-container">
<video className="hls-video grayscale opacity-40 group-hover:opacity-60 transition-opacity" data-src="https://customer-cbeadsgr09pnsezs.cloudflarestream.com/df176a2fb2ea2b64bd21ae1c10d3af6a/manifest/video.m3u8" loop="" muted="" playsinline="" src="blob:https://www.aura.build/7f680b9f-402e-459b-b89a-d8fdcdd06639"></video>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
</div>
<div className="relative h-full flex flex-col justify-between p-8 z-10">
<div className="flex justify-between items-start">
<span className="font-mono text-[10px] text-white/40 tracking-widest">USD NEUTRAL</span>
<svg className="lucide lucide-circle-dollar-sign w-5 h-5 text-white/80 stroke-1" data-lucide="circle-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.25" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
</div>
<div className="">
<h3 className="text-card font-medium text-white mb-3">DAMMstable</h3>
<p className="text-body text-ui-secondary font-light">
                                Market-neutral strategies optimized for stablecoin yield with minimized volatility.
                            </p>
</div>
</div>
</div>

<div className="reveal-on-scroll delay-[100ms] group relative h-[520px] bg-ui-glass border border-ui-border hover:border-white/20 transition-all duration-500 overflow-hidden">
<div className="video-bg-container">
<video className="hls-video grayscale opacity-40 group-hover:opacity-60 transition-opacity" data-src="https://customer-cbeadsgr09pnsezs.cloudflarestream.com/12a9780eeb1ea015801a5f55cf2e9d3d/manifest/video.m3u8" loop="" muted="" playsinline="" src="blob:https://www.aura.build/1fb21690-537f-44df-9e01-e2fbd335ec85"></video>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
</div>
<div className="relative h-full flex flex-col justify-between p-8 z-10">
<div className="flex justify-between items-start">
<span className="text-[10px] text-white/40 tracking-widest font-mono" style={{}}>ETH NEUTRAL</span>
<svg className="lucide lucide-layers w-5 h-5 text-white/80 stroke-1" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.25" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<div className="">
<h3 className="text-card font-medium text-white mb-3">DAMMeth</h3>
<p className="text-body text-ui-secondary font-light">
                                Yield generation strategies engineered specifically for long-term ETH accumulation.
                            </p>
</div>
</div>
</div>

<div className="reveal-on-scroll delay-[200ms] group relative h-[520px] bg-ui-glass border border-ui-border hover:border-white/20 transition-all duration-500 overflow-hidden">
<div className="video-bg-container">
<video className="hls-video grayscale opacity-40 group-hover:opacity-60 transition-opacity" data-src="https://customer-cbeadsgr09pnsezs.cloudflarestream.com/964cb3eddff1a67e3772aac9a7aceea2/manifest/video.m3u8" loop="" muted="" playsinline="" src="blob:https://www.aura.build/b1a204f1-4764-4dca-a847-843056439c49"></video>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
</div>
<div className="flex flex-col h-full z-10 pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="flex justify-between items-start">
<span className="text-[10px] text-white/40 tracking-widest font-mono" style={{}}>BTC NEUTRAL</span>
<svg className="lucide lucide-bitcoin w-5 h-5 text-white/80 stroke-1" data-lucide="bitcoin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.25" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"></path></svg>
</div>
<div className="">
<h3 className="text-card font-medium text-white mb-3">DAMMbtc</h3>
<p className="text-body text-ui-secondary font-light" style={{}}>Focused on BTC capital conservation with dividends flow.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full py-section-md bg-black border-t border-ui-border/50" id="daas">
<div className="max-w-content mx-auto px-6 xl:px-0">
<div className="flex flex-col w-full gap-8">

<div className="flex flex-col lg:flex-row justify-between items-end gap-12 pb-4 border-b border-ui-border/50">
<div className="w-full lg:w-1/2">
<div className="inline-flex items-center justify-center px-3 py-1 mb-6 rounded border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-sm">
<span className="text-[10px] font-mono uppercase tracking-widest text-yellow-500">DAAS</span>
</div>
<h2 className="text-section font-medium text-white tracking-tighter leading-[0.95]">
                DeFi as a <span className="text-ui-muted">Service.</span>
</h2>
</div>
<div className="w-full lg:w-1/2">
<p className="text-body-lg text-ui-secondary font-light mb-6">
                Finance and technology are complex on their own. <span className="text-white font-medium">DeFi combines both.</span>
</p>
<p className="text-body text-ui-muted font-light leading-relaxed">
                DAMM acts as the DeFi execution arm for institutions and crypto-native teams, enabling reliable on-chain operations without compromising control.
            </p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="group relative h-[420px] bg-white/[0.02] border border-ui-border hover:border-white/20 transition-all duration-300 flex flex-col justify-between p-8 overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none"></div>

<div className="relative flex-1 flex items-center justify-center">
<div className="flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
<div className="w-1 h-8 bg-yellow-500/40 rounded-full animate-pulse"></div>
<div className="w-1 h-12 bg-yellow-500/60 rounded-full animate-pulse delay-75"></div>
<div className="w-1 h-16 bg-yellow-500 rounded-full animate-pulse delay-150"></div>
<div className="w-1 h-10 bg-yellow-500/60 rounded-full animate-pulse delay-75"></div>
<div className="w-1 h-6 bg-yellow-500/40 rounded-full animate-pulse"></div>
</div>
</div>

<div className="relative z-10 pt-8 border-t border-ui-border/30">
<div className="flex justify-between items-center mb-6 text-ui-muted">
<span className="text-xs font-mono tracking-widest">01</span>
<svg className="lucide lucide-zap w-5 h-5 stroke-[1.5] text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.25" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-2xl font-medium text-white mb-3 tracking-tight">DeFi Execution</h3>
<p className="text-body text-ui-secondary font-light leading-relaxed">
                    We help institutions and protocols integrate and develop onchain financial products in a more efficient way while reducing costs.
                </p>
</div>
</div>

<div className="group relative h-[420px] bg-white/[0.02] border border-ui-border hover:border-white/20 transition-all duration-300 flex flex-col justify-between p-8 overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none"></div>

<div className="relative flex-1 flex items-center justify-center">
<div className="relative opacity-60 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110">
<div className="w-24 h-24 border border-ui-border rounded-lg flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform duration-500 bg-black/40 backdrop-blur-sm">
<div className="w-1.5 h-1.5 bg-yellow-500 rounded-full shadow-[0_0_12px_rgba(234,179,8,0.8)]"></div>
</div>
<svg className="lucide lucide-layout-grid absolute -bottom-4 -right-4 w-10 h-10 text-ui-muted opacity-50 stroke-[1]" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.25" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</div>
</div>

<div className="relative z-10 pt-8 border-t border-ui-border/30">
<div className="flex justify-between items-center mb-6 text-ui-muted">
<span className="text-xs font-mono tracking-widest">02</span>
<svg className="lucide lucide-layout-dashboard w-5 h-5 stroke-[1.5] text-white" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.25" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</div>
<h3 className="text-2xl font-medium text-white mb-3 tracking-tight">Treasury Management &amp; PoL</h3>
<p className="text-body text-ui-secondary font-light leading-relaxed">
                    Treasury management, liquidity strategy design, and Protocol-Owned Liquidity (POL), optimizing financial and operational efficiency.
                </p>
</div>
</div>
</div>

<div className="w-full bg-yellow-500 p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center gap-8 relative overflow-hidden group hover:bg-yellow-400 transition-colors duration-300">

<div className="relative w-16 h-16 border border-black/10 rounded-full flex items-center justify-center flex-shrink-0 bg-black/5">
<div className="w-1.5 h-1.5 bg-black rounded-full mb-2"></div>
<div className="absolute bottom-5 w-6 h-[1px] bg-black/30"></div>
</div>

<div className="flex-1 max-w-4xl">
<h3 className="text-2xl font-medium text-black mb-3 tracking-tight">Self-Custodial by Design</h3>
<p className="text-body text-black/80 font-normal leading-relaxed max-w-2xl">
                All strategies are executed in a self-custodial manner. Clients retain full ownership and control of assets at all times, reducing reliance on DAMM.
            </p>
</div>

<div className="absolute top-8 right-8">
<svg className="lucide lucide-shield-check w-6 h-6 text-black stroke-[1.5] opacity-80 group-hover:scale-110 transition-transform duration-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.25" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>
</div>
</div>
</section>


<footer className="bg-black py-20 border-t border-ui-border/50">
<div className="max-w-content mx-auto px-6 xl:px-0 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-4">
<span className="text-white font-bold tracking-tight">DAMM</span>
<span className="text-[10px] text-ui-muted font-mono uppercase tracking-widest">© 2024</span>
</div>
<div className="flex gap-12">
<a className="text-[11px] font-mono text-ui-muted hover:text-white transition-colors tracking-widest uppercase" href="#">Privacy</a>
<a className="text-[11px] font-mono text-ui-muted hover:text-white transition-colors tracking-widest uppercase" href="#">Terms</a>
<a className="text-[11px] font-mono text-ui-muted hover:text-white transition-colors tracking-widest uppercase" href="#">Risk Disclosure</a>
</div>

<div className="flex gap-4">
<a className="text-ui-muted hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.25" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-ui-muted hover:text-white transition-colors" href="#"><svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.25" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</footer>



    </>
  );
}
