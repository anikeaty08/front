import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    !function(){
      if(!window.UnicornStudio){
        window.UnicornStudio={isInitialized:!1};
        var i=document.createElement("script");
        i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
        i.onload=function(){
          window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)
        };
        (document.head || document.body).appendChild(i)
      }
    }();
  


  (function () {
    if (!window.UnicornStudio) {
      var s = document.createElement("script");
      s.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
      s.async = true;
      s.onload = function () {
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
          UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      (document.head || document.body).appendChild(s);
    } else if (!window.UnicornStudio.isInitialized) {
      UnicornStudio.init();
      window.UnicornStudio.isInitialized = true;
    }
  })();



  // Simple scroll-trigger for .animate-on-scroll
  const onScroll = () => {
    const els = document.querySelectorAll('.animate-on-scroll');
    const vh = window.innerHeight || document.documentElement.clientHeight;
    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < vh * 0.85) {
        el.classList.add('animate');
      }
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('load', () => {
    onScroll();
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="58" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 58%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 58%, transparent)'}}>
<div className="absolute inset-0" data-us-project="VaqT3bxlc2sugR8faApF"></div>

</div>
<div className="unicorn-stack fixed unicorn-mask top-0 right-0 bottom-0 left-0">
<div className="absolute inset-0" data-us-project="VaqT3bxlc2sugR8faApF"></div>
</div>

<header className="sticky z-30 top-0 [animation:fadeSlideIn_0.8s_ease-out_0s_both]">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="supports-[backdrop-filter]:bg-black/30 border-white/10 border rounded-2xl mt-4 backdrop-blur">
<div className="flex sm:pl-3 sm:pr-3 bg-[#000000] border-[#ffffff]/10 border rounded-2xl pt-3 pr-3 pb-3 pl-3 items-center justify-between">
<div className="flex items-center gap-3">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[50px] h-[30px] bg-[url(https://cdn.midjourney.com/ff6f82bf-d54f-4853-a2a4-321ec87a6422/0_0.png?w=800&amp;q=80)] bg-cover rounded invert" href="#home"></a>
<span className="hidden sm:inline text-sm font-medium text-white tracking-tight">Hydral</span>
</div>
<nav className="hidden md:flex items-center gap-7 text-sm text-slate-300">
<a className="hover:text-white transition-colors" href="#home">Home</a>
<a className="hover:text-white transition-colors" href="#why-hydral">Why Hydral</a>
<a className="hover:text-white transition-colors" href="#how-it-works">How It Works</a>
<a className="hover:text-white transition-colors" href="#use-cases">Use Cases</a>
<a className="hover:text-white transition-colors" href="#pricing-page">Pricing</a>
<a className="hover:text-white transition-colors" href="#chains-partners">For Chains &amp; Partners</a>
<a className="hover:text-white transition-colors" href="#docs">Docs</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
</nav>
<div className="flex gap-3 items-center justify-center">
<a className="inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:text-white hover:border-indigo-400/40 hover:bg-gradient-to-br hover:from-indigo-500/30 hover:to-blue-500/20 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] text-xs sm:text-sm font-medium text-white/90 bg-gradient-to-br from-white/5 via-white/10 to-white/5 rounded-md ring-0 pt-2 pr-4 pb-2 pl-4 shadow-[0_0_15px_rgba(59,130,246,0.15)]" href="#start-building" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '6px'}}>
            Start Building
            <svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</header>
<section className="[animation:fadeSlideIn_0.8s_ease-out_0.2s_both] relative" id="home">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="sm:px-6 sm:pt-24 sm:pb-28 lg:pr-8 lg:pt-40 lg:pl-8 lg:pb-0 max-w-7xl mt-4 mr-auto ml-auto pt-16 pr-8 pb-20 pl-8">
<div className="pointer-events-none select-none relative">
<span className="float-cursor -top-12 sm:-top-16 float-chip-1 -translate-x-1/2 absolute left-[55%] -translate-y-8">
<span className="block whitespace-nowrap text-xs font-medium text-black bg-white ring-black/5 ring-1 rounded-lg pt-1.5 px-3 pb-1.5 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
            Self-healing routing
          </span>
<span className="block mx-auto w-2 h-2 bg-white rotate-45 -mt-1 rounded-sm"></span>
</span>
<span className="float-cursor hidden md:block float-chip-2 absolute top-12 right-[2%] translate-x-8 translate-y-12">
<span className="block whitespace-nowrap text-xs font-medium text-black bg-white ring-black/5 ring-1 rounded-lg pt-1.5 px-3 pb-1.5 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
            Multi-origin data
          </span>
<span className="block mx-auto w-2 h-2 bg-white rotate-45 -mt-1 rounded-sm"></span>
</span>
<span className="float-cursor absolute left-[10%] bottom-6 hidden sm:block float-chip-3">
<span className="block whitespace-nowrap text-xs font-medium text-black bg-white ring-black/5 ring-1 rounded-lg pt-1.5 px-3 pb-1.5 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
            Machine-native payments
          </span>
<span className="block mx-auto w-2 h-2 bg-white rotate-45 -mt-1 rounded-sm"></span>
</span>
</div>
<div className="text-center">
<h1 className="sm:text-6xl md:text-7xl text-4xl font-semibold text-white tracking-tight max-w-5xl mr-auto ml-auto">
<span className="text-white/95">When Clouds Go Down,</span>
<span className="inline-block relative">
<span className="absolute -inset-1 rounded-md blur-2xl bg-blue-500/30"></span>
<span className="relative">
<span className="z-10 relative">
<span className="inline-block relative">
<span className="-inset-1 [--fx-filter:blur(20px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)] bg-gradient-to-br from-white/0 via-white/10 to-white/0 rounded-md ring-blue-400/70 ring-2 absolute"></span>
<span className="px-2">Your Protocol</span>
</span>
</span>
</span>
</span>
<span className="text-white/95">Shouldn’t.</span>
</h1>
<p className="leading-relaxed text-lg text-slate-300 max-w-2xl mt-6 mx-auto">
          Hydral is the outage-proof data layer for Web3 – a multi-chain, self-healing backbone for data, memory, and machine-native payments. So your dApps and agents stay online, even when CDNs and clouds don’t.
        </p>
<div className="flex flex-col sm:flex-row gap-4 mt-10 gap-x-4 gap-y-4 items-center justify-center">
<a className="btn-wrapper" href="#start-building" style={{-DotSize: '8px', -LineWeight: '1px', -LineDistance: '0.8rem 1rem', -AnimationSpeed: '0.35s', -DotColor: '#fffa', -LineColor: '#fffa', -GridColor: '#fff3', position: 'relative', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: 'auto', height: 'auto', padding: 'var(--line-distance)', backgroundColor: 'rgba(0, 0, 0, 0)', userSelect: 'none'}}>
<style>
              .btn-wrapper::after {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: inherit;
                pointer-events: none;
                background-color: #0000;
                background-image: repeating-linear-gradient(45deg, var(--grid-color) 0 1px, transparent 2px 5px);
                opacity: 0;
                z-index: -1;
              }
              .btn-wrapper:has(.btn:hover)::after {
                animation: opacity-anim calc(var(--animation-speed) * 4) ease-in-out forwards;
              }
              @keyframes opacity-anim {
                80% { opacity: 0; }
                100% { opacity: 1; }
              }
              .btn-wrapper .btn {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0.8rem 1.25rem;
                background-color: #fff0;
                border: 1px solid var(--grid-color);
                color: #fffd;
                font-family: "Inter", sans-serif;
                letter-spacing: -0.01em;
                font-size: 1rem;
                font-weight: 600;
                text-transform: capitalize;
                border-radius: 6px;
                cursor: pointer;
                transition: transform .2s ease-in-out, letter-spacing .2s ease-in-out;
              }
              .btn-wrapper .btn:hover {
                background-color: #25358b;
                color: #fff;
                transform: scale(1.05);
                letter-spacing: .06em;
              }
              .btn-wrapper .btn:active {
                background-color: #25358b;
                transform: scale(.98);
                letter-spacing: .02em;
              }
              .btn-wrapper .btn-svg {
                margin-left: .5rem;
                height: 24px;
                stroke-width: 1;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke: #fff4;
                fill: #fff2;
                transition: all .2s ease-in-out;
              }
              .btn-wrapper .btn:hover .btn-svg {
                stroke: #fffa;
                fill: #fff3;
              }
              .btn-wrapper .dot {
                position: absolute;
                width: var(--dot-size);
                aspect-ratio: 1;
                border-radius: 2px;
                background-color: var(--dot-color);
                transition: all .3s ease-in-out;
                opacity: 0;
              }
              .btn-wrapper:has(.btn:hover) .dot.top.left {
                top: 50%;
                left: 20%;
                animation: move-top-left var(--animation-speed) ease-in-out forwards;
              }
              @keyframes move-top-left {
                90% { opacity: .6; }
                100% {
                  top: calc(var(--dot-size) * -0.5);
                  left: calc(var(--dot-size) * -0.5);
                  opacity: 1;
                }
              }
              .btn-wrapper:has(.btn:hover) .dot.top.right {
                top: 50%;
                right: 20%;
                animation: move-top-right var(--animation-speed) ease-in-out forwards;
                animation-delay: calc(var(--animation-speed)*.6);
              }
              @keyframes move-top-right {
                80% { opacity: .6; }
                100% {
                  top: calc(var(--dot-size) * -0.5);
                  right: calc(var(--dot-size) * -0.5);
                  opacity: 1;
                }
              }
              .btn-wrapper:has(.btn:hover) .dot.bottom.right {
                bottom: 50%;
                right: 20%;
                animation: move-bottom-right var(--animation-speed) ease-in-out forwards;
                animation-delay: calc(var(--animation-speed)*1.2);
              }
              @keyframes move-bottom-right {
                80% { opacity: .6; }
                100% {
                  bottom: calc(var(--dot-size) * -0.5);
                  right: calc(var(--dot-size) * -0.5);
                  opacity: 1;
                }
              }
              .btn-wrapper:has(.btn:hover) .dot.bottom.left {
                bottom: 50%;
                left: 20%;
                animation: move-bottom-left var(--animation-speed) ease-in-out forwards;
                animation-delay: calc(var(--animation-speed)*1.8);
              }
              @keyframes move-bottom-left {
                80% { opacity: .6; }
                100% {
                  bottom: calc(var(--dot-size) * -0.5);
                  left: calc(var(--dot-size) * -0.5);
                  opacity: 1;
                }
              }
              .btn-wrapper .line {
                position: absolute;
                transition: all .3s ease-in-out;
              }
              .btn-wrapper .line.horizontal {
                height: var(--line-weight);
                width: 100%;
                background-image: repeating-linear-gradient(90deg, #0000 0 calc(var(--line-weight)*2), var(--line-color) calc(var(--line-weight)*2) calc(var(--line-weight)*4));
              }
              .btn-wrapper .line.top {
                top: calc(var(--line-weight)*-0.5);
                transform-origin: top left;
                transform: rotate(5deg) scaleX(0);
              }
              .btn-wrapper:has(.btn:hover) .line.top {
                animation: draw-top var(--animation-speed) ease-in-out forwards;
                animation-delay: calc(var(--animation-speed)*.8);
              }
              @keyframes draw-top {
                100% { transform: rotate(0deg) scaleX(1); }
              }
              .btn-wrapper .line.bottom {
                bottom: calc(var(--line-weight)*-0.5);
                transform-origin: bottom right;
                transform: rotate(5deg) scaleX(0);
              }
              .btn-wrapper:has(.btn:hover) .line.bottom {
                animation: draw-bottom var(--animation-speed) ease-in-out forwards;
                animation-delay: calc(var(--animation-speed)*2);
              }
              @keyframes draw-bottom {
                100% { transform: rotate(0deg) scaleX(1); }
              }
              .btn-wrapper .line.vertical {
                width: var(--line-weight);
                height: 100%;
                background-image: repeating-linear-gradient(0deg, #0000 0 calc(var(--line-weight)*2), var(--line-color) calc(var(--line-weight)*2) calc(var(--line-weight)*4));
              }
              .btn-wrapper .line.left {
                left: calc(var(--line-weight)*-0.5);
                transform-origin: bottom left;
                transform: rotate(0deg) scaleY(0);
              }
              .btn-wrapper:has(.btn:hover) .line.left {
                animation: draw-left var(--animation-speed) ease-in-out forwards;
                animation-delay: calc(var(--animation-speed)*2.4);
              }
              @keyframes draw-left {
                100% { transform: rotate(0deg) scaleY(1); }
              }
              .btn-wrapper .line.right {
                right: calc(var(--line-weight)*-0.5);
                transform-origin: top right;
                transform: rotate(5deg) scaleY(0);
              }
              .btn-wrapper:has(.btn:hover) .line.right {
                animation: draw-right var(--animation-speed) ease-in-out forwards;
                animation-delay: calc(var(--animation-speed)*1.4);
              }
              @keyframes draw-right {
                100% { transform: rotate(0deg) scaleY(1); }
              }
            </style>
<div className="line horizontal top"></div>
<div className="line vertical right"></div>
<div className="line horizontal bottom"></div>
<div className="line vertical left"></div>
<div className="dot top left"></div>
<div className="dot top right"></div>
<div className="dot bottom right"></div>
<div className="dot bottom left"></div>
<button className="btn bg-[#ffffff] text-neutral-900">
<span className="btn-text">Start Building</span>
<svg className="btn-svg" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.6744 11.4075L15.7691 17.1233C15.7072 17.309 15.5586 17.4529 15.3709 17.5087L3.69348 20.9803C3.22819 21.1186 2.79978 20.676 2.95328 20.2155L6.74467 8.84131C6.79981 8.67588 6.92419 8.54263 7.08543 8.47624L12.472 6.25822C12.696 6.166 12.9535 6.21749 13.1248 6.38876L17.5294 10.7935C17.6901 10.9542 17.7463 11.1919 17.6744 11.4075Z"></path>
<path d="M3.2959 20.6016L9.65986 14.2376"></path>
<path d="M17.7917 11.0557L20.6202 8.22724C21.4012 7.44619 21.4012 6.17986 20.6202 5.39881L18.4989 3.27749C17.7178 2.49645 16.4515 2.49645 15.6704 3.27749L12.842 6.10592"></path>
<path d="M11.7814 12.1163C11.1956 11.5305 10.2458 11.5305 9.66004 12.1163C9.07426 12.7021 9.07426 13.6519 9.66004 14.2376C10.2458 14.8234 11.1956 14.8234 11.7814 14.2376C12.3671 13.6519 12.3671 12.7021 11.7814 12.1163Z"></path>
</svg>
</button>
</a>
<a className="inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:text-white hover:border-indigo-400/40 hover:bg-gradient-to-br hover:from-indigo-500/30 hover:to-blue-500/20 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] text-base font-medium text-white/90 bg-gradient-to-br from-white/5 via-white/10 to-white/5 rounded-md ring-0 pt-3 pr-5 pb-3 pl-5 shadow-[0_0_15px_rgba(59,130,246,0.15)]" href="#talk-team" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '6px'}}>
            Talk to the Team
            <svg className="w-5 h-5 stroke-[1.5]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="6 3 20 12 6 21 6 3" strokeLinecap="round" strokeLinejoin="round"></polygon>
</svg>
</a>
</div>
<p className="mt-6 text-sm text-slate-400 max-w-3xl mx-auto">
          Multi-origin data. Self-healing routing. Permanent memory. Machine payments.
          Hydral turns outages into just another routing signal.
        </p>
<div className="overflow-hidden w-full border-white/10 border rounded-2xl mt-24 mb-24 relative shadow-2xl backdrop-blur-xl">
<div className="flex border-white/10 border-b pt-2 pr-3 pb-2 pl-3 items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-red-500/80"></span>
<span className="h-3 w-3 rounded-full bg-yellow-400/80"></span>
<span className="h-3 w-3 rounded-full bg-green-500/80"></span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-400">
<span>Hydral · Never go dark again.</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12">
<aside className="hidden md:block md:col-span-3 bg-black/30 border-white/10 border-r pt-3 pr-3 pb-3 pl-3">
<div className="mb-3 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-slate-300 font-sans">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="3.29 7 12 12 20.71 7"></polyline>
<line x1="12" x2="12" y1="22" y2="12"></line>
</svg>
                  Hydral Routes
                </div>
<button className="rounded-md border border-white/10 bg-white/5 p-1 text-slate-300 hover:bg-white/10">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</button>
</div>
<div className="flex flex-col text-slate-300 h-[520px] space-y-4">
<div className="flex gap-1 mb-3">
<button className="px-2 py-1 text-xs bg-white text-neutral-900 rounded font-sans font-medium">
                    Active
                  </button>
<button className="px-2 py-1 text-xs bg-white/5 text-slate-400 hover:bg-white/10 rounded font-sans">
                    Draft
                  </button>
<button className="px-2 py-1 text-xs bg-white/5 text-slate-400 hover:bg-white/10 rounded font-sans">
                    Archive
                  </button>
</div>
<div className="bg-white/5 rounded-lg p-2 flex-1">
<div className="text-xs text-slate-400 mb-2 font-sans">
                    Critical Paths
                  </div>
<ul className="space-y-1 text-xs">
<li className="flex items-center gap-2 rounded-md bg-white/10 px-2 py-1 font-sans">
<svg className="h-3.5 w-3.5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
                      Solana + Arweave ingest
                      <div className="ml-auto flex items-center gap-1">
<span className="text-[9px] text-white/70">
                          Healthy
                        </span>
</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5 font-sans">
<svg className="h-3.5 w-3.5 text-cyan-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
<path d="M9 18h6"></path>
<path d="M10 22h4"></path>
</svg>
                      Global cache mesh
                      <div className="ml-auto flex items-center gap-1">
<span className="text-[9px] text-white/60">
                          Online
                        </span>
</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5 font-sans">
<svg className="h-3.5 w-3.5 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
                      Multi-origin storage
                      <div className="ml-auto flex items-center gap-1">
<span className="text-[9px] text-white/60">
                          Ready
                        </span>
</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5 font-sans">
<svg className="h-3.5 w-3.5 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
                      Semantic compression
                      <div className="ml-auto flex items-center gap-1">
<span className="text-[9px] text-white/60">Active</span>
</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5 font-sans opacity-60">
<svg className="h-3.5 w-3.5 text-slate-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="9" rx="1" width="7" x="3" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="3"></rect>
<rect height="9" rx="1" width="7" x="14" y="12"></rect>
<rect height="5" rx="1" width="7" x="3" y="16"></rect>
</svg>
                      Single-region fallback
                      <div className="ml-auto">
<span className="text-xs text-slate-500 font-sans">
                          Avoided
                        </span>
</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5 font-sans">
<svg className="h-3.5 w-3.5 text-red-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
<line x1="12" x2="12" y1="9" y2="13"></line>
<line x1="12" x2="12.01" y1="17" y2="17"></line>
</svg>
                      CDN / RPC outage
                      <div className="ml-auto flex items-center gap-1">
<span className="text-[9px] text-orange-400">
                          Routed around
                        </span>
</div>
</li>
</ul>
</div>
<div className="bg-white/5 rounded-lg p-2 mt-3">
<div className="mb-1 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="12" x2="12" y1="20" y2="10"></line>
<line x1="18" x2="18" y1="20" y2="4"></line>
<line x1="6" x2="6" y1="20" y2="16"></line>
</svg>
<span className="text-xs font-medium font-sans">
                        Uptime &amp; latency
                      </span>
</div>
<div className="flex gap-1">
<button className="p-1 rounded border border-white/10 bg-white/5 hover:bg-white/10">
<svg className="w-3 h-3 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</button>
</div>
</div>
<div className="space-y-1">
<div className="flex items-center gap-2 text-xs hover:bg-white/5 p-1 rounded">
<div className="w-3 h-2 rounded-sm bg-white"></div>
<span className="text-slate-300 font-sans text-[10px]">
                        Global read latency
                      </span>
<div className="ml-auto text-[10px] text-white/70">
                        &lt;120ms
                      </div>
</div>
<div className="flex items-center gap-2 text-xs hover:bg-white/5 p-1 rounded">
<div className="w-4 h-2 bg-white/80 rounded-sm"></div>
<span className="text-slate-300 font-sans text-[10px]">
                        Query success rate
                      </span>
<div className="ml-auto text-[10px] text-white/70">
                        99.99%
                      </div>
</div>
<div className="flex items-center gap-2 text-xs hover:bg-white/5 p-1 rounded">
<div className="w-5 h-2 bg-white/60 rounded-sm"></div>
<span className="text-slate-300 font-sans text-[10px]">
                        Origins per object
                      </span>
<div className="ml-auto text-[10px] text-white/60">
                        3.2 avg
                      </div>
</div>
<div className="flex items-center gap-2 text-xs hover:bg-white/5 p-1 rounded">
<div className="w-3 h-2 bg-cyan-400 rounded-sm"></div>
<span className="text-slate-300 font-sans text-[10px]">
                        Cache hit ratio
                      </span>
<div className="ml-auto text-[10px] text-cyan-400">
                        87%
                      </div>
</div>
<div className="flex items-center gap-2 text-xs hover:bg-white/5 p-1 rounded">
<div className="w-4 h-2 bg-orange-400 rounded-sm"></div>
<span className="text-slate-300 font-sans text-[10px]">
                        Active outage signals
                      </span>
<div className="ml-auto text-[10px] text-slate-400">
                        4 (routed)
                      </div>
</div>
</div>
</div>
</div>
</aside>
<main className="md:col-span-6 bg-black/20 relative">
<div className="flex gap-2 text-xs text-slate-300 border-white/10 border-b pt-2 pr-3 pb-2 pl-3 gap-x-2 gap-y-2 items-center">
<span className="font-sans">hydral.route.ts</span>
<div className="text-slate-500">•</div>
<span className="font-sans text-slate-400">Live, multi-origin</span>
<div className="ml-auto flex items-center gap-1">
<div className="text-xs text-slate-400 font-sans">
                    Last failover: 3s ago
                  </div>
<div className="h-4 w-px bg-white/10 mx-2"></div>
<button className="rounded-md border border-white/10 bg-white/5 p-1 hover:bg-white/10">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
<path d="M21 3v5h-5"></path>
</svg>
</button>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-2 bg-black/10 border-white/10 border-b pt-2 pr-3 pb-2 pl-3 gap-x-2 gap-y-2 items-center justify-between">
<div className="flex items-center gap-2 w-full sm:w-auto">
<button className="p-1 rounded border border-white/10 bg-white text-neutral-900 hover:bg-zinc-100">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 11 12 14 22 4"></polyline>
<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
</svg>
</button>
<button className="p-1 rounded border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</button>
<div className="h-4 w-px bg-white/10"></div>
<div className="flex items-center gap-1 flex-1">
<span className="text-xs text-slate-400 font-sans">Profile:</span>
<button className="inline-flex items-center justify-center px-2 py-1 rounded border border-white/10 bg-white/5 text-xs text-slate-300 hover:bg-white/10 font-sans whitespace-nowrap">
                      outage-proof
                    </button>
<button className="sm:hidden p-1 rounded border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 ml-auto">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="px-2 py-1 rounded border border-white/10 bg-white/5 text-xs text-slate-300 hover:bg-white/10 font-sans">
                    Data
                  </button>
<button className="px-2 py-1 rounded border border-white/10 bg-white/5 text-xs text-slate-400 hover:bg-white/10 font-sans">
                    Memory
                  </button>
<button className="px-2 py-1 rounded border border-white/10 bg-white/5 text-xs text-slate-400 hover:bg-white/10 font-sans">
                    Payments
                  </button>
</div>
</div>
<div className="sm:p-6 pt-4 pr-4 pb-4 pl-4">
<div className="overflow-hidden min-h-[400px] grid grid-rows-[auto,1fr,auto,auto] sm:min-h-[450px] border-0 rounded-none ring-0 pt-0 pr-0 pb-0 pl-0 gap-x-4 gap-y-4">
<div className="grid grid-cols-2 gap-3">
<div className="xl:bg-black/10 bg-black/40 border-white/10 border rounded-xl px-4 py-4 backdrop-blur">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-400 font-sans">
                          Active chains &amp; backends
                        </span>
</div>
<div className="flex items-center gap-2 text-xs text-white/80 font-sans">
<span className="px-2 py-1 rounded-full bg-white/10">Solana</span>
<span className="px-2 py-1 rounded-full bg-white/10">Arweave</span>
<span className="px-2 py-1 rounded-full bg-white/10">IPFS</span>
</div>
<div className="text-xs mt-2 font-sans text-white/70">
                        Region, provider, or chain fails – Hydral just routes around it.
                      </div>
</div>
<div className="xl:bg-black/10 bg-black/40 border-white/10 border rounded-xl px-4 py-4 backdrop-blur">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-400 font-sans">
                          Last outage event
                        </span>
</div>
<div className="text-2xl font-medium text-white font-sans">
                        117ms
                      </div>
<div className="text-xs mt-1 font-sans text-white/70">
                        CDN failure detected • queries rerouted
                      </div>
</div>
</div>
<div className="min-h-0 xl:bg-black/10 bg-black/40 border-white/10 border rounded-xl px-4 py-4 backdrop-blur">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-medium text-white font-sans">
                        Hydral route logic
                      </h3>
<span className="text-xs text-slate-400 font-sans">
                        TypeScript
                      </span>
</div>
<div className="relative bg-black/60 rounded-lg p-4 font-mono text-sm text-white/90 overflow-auto" style={{maxHeight: '250px'}}>
<pre className="whitespace-pre-wrap">// never go dark routing
const hydral = Hydral.open({ profile: "outage-proof" });

hydral.route({
  query: "orderbook:SOL/USDC",
  origins: ["solana", "arweave", "ipfs", "filecoin"],
  hint: "sub120ms"
}).onFailure((signal) =&gt; {
  // CDN, RPC or region degradation
  return hydral.reroute({ avoid: signal.provider });
});</pre>
</div>
<div className="flex justify-between mt-3 text-[10px] text-slate-500 font-sans">
<span>Multi-origin · health-aware</span>
<span className="text-white/60">No single vendor dependency</span>
</div>
</div>
<div className="xl:bg-black/10 bg-black/40 border-white/10 border rounded-xl px-4 py-4 backdrop-blur">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-medium text-white font-sans flex items-center gap-2">
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
                        Hydral AI assistant
                      </h3>
<span className="text-xs text-slate-400 font-sans">
                        Ask about outages
                      </span>
</div>
<div className="relative">
<textarea className="w-full bg-black/60 border border-white/10 rounded-lg p-3 font-sans text-sm text-white/90 placeholder-slate-500 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 resize-none" placeholder="Ask Hydral how it will keep your dApp online during a CDN or cloud outage..." rows="3"></textarea>
<button className="absolute bottom-3 right-3 p-2 rounded-lg bg-white text-neutral-900 hover:bg-zinc-100 transition">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="16" xmlns="http://www.w3.org/2000/svg">
<line x1="22" x2="11" y1="2" y2="13"></line>
<polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
</svg>
</button>
</div>
<div className="flex items-center gap-2 mt-3 text-xs text-slate-500 font-sans">
<svg className="w-3 h-3" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
<span className="text-white/60">Explain routes, storage tiers, and x402 settlement.</span>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
<button className="xl:bg-black/10 text-center bg-white/10 border-white/10 border rounded-lg pt-2 pr-2 pb-2 pl-2 backdrop-blur hover:bg-white/20 transition">
<div className="text-sm font-medium text-white font-sans">
                        Run Query
                      </div>
<div className="text-[10px] text-slate-400 font-sans">
                        Live routing
                      </div>
</button>
<button className="xl:bg-black/10 text-center bg-black/40 border-white/10 border rounded-lg pt-2 pr-2 pb-2 pl-2 backdrop-blur hover:bg-white/10 transition">
<div className="text-sm font-medium text-white font-sans">
                        Simulate Outage
                      </div>
<div className="text-[10px] text-slate-400 font-sans">
                        Failover test
                      </div>
</button>
<button className="xl:bg-black/10 text-center bg-black/40 border-white/10 border rounded-lg pt-2 pr-2 pb-2 pl-2 backdrop-blur hover:bg-white/10 transition">
<div className="text-sm font-medium text-white font-sans">
                        View Memory
                      </div>
<div className="text-[10px] text-slate-400 font-sans">
                        Hot / warm / cold
                      </div>
</button>
<button className="xl:bg-black/10 text-center bg-black/40 border-white/10 border rounded-lg pt-2 pr-2 pb-2 pl-2 backdrop-blur hover:bg-white/10 transition">
<div className="text-sm font-medium text-white font-sans">
                        Payments
                      </div>
<div className="text-[10px] text-slate-400 font-sans">
                        x402 + fiat
                      </div>
</button>
</div>
</div>
</div>
</main>
<aside className="hidden md:block md:col-span-3 bg-black/30 border-white/10 border-l pt-3 pr-3 pb-3 pl-3">
<div className="mb-3 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-slate-300 font-sans">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
                  Hydral config
                </div>
<div className="flex gap-1">
<button className="rounded-md border border-white/10 bg-white/5 p-1 text-slate-300 hover:bg-white/10">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
</div>
</div>
<div className="space-y-3 h-[480px] overflow-y-auto">
<div className="bg-white/5 rounded-lg p-3">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-300 font-sans">
                      Core angle
                    </span>
<span className="text-xs text-white font-sans">
                      “Never go dark again.”
                    </span>
</div>
<div className="text-[10px] text-slate-500 space-y-1 font-sans">
<div className="flex justify-between">
<span>Data:</span>
<span className="text-white/70">Multi-origin</span>
</div>
<div className="flex justify-between">
<span>Memory:</span>
<span className="text-white/70">Permanent tiers</span>
</div>
<div className="flex justify-between">
<span>Payments:</span>
<span className="text-white/70">x402 + fiat</span>
</div>
</div>
</div>
<div className="bg-white/5 rounded-lg p-3 space-y-3">
<div className="mb-2 text-xs">
<span className="text-slate-300 font-sans">
                      Input parameters
                    </span>
</div>
<div className="space-y-2 text-[10px]">
<div>
<div className="text-slate-400 mb-1 font-sans">
                        dApp / service name
                      </div>
<input className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-slate-300 font-sans" type="text" value="exchange-core"/>
</div>
<div>
<div className="text-slate-400 mb-1 font-sans">
                        Critical region
                      </div>
<select className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-slate-300 font-sans">
<option>multi-region</option>
<option>us-east-1</option>
<option>eu-west-1</option>
</select>
</div>
<div>
<div className="text-slate-400 mb-1 font-sans">
                        Min replicas
                      </div>
<input className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-slate-300 font-sans" type="number" value="3"/>
</div>
</div>
</div>
<div className="bg-white/5 rounded-lg p-3 space-y-3">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-slate-300 font-sans">Outage handling</span>
<button className="text-[10px] text-white/70 hover:text-white font-sans">
                      Configure
                    </button>
</div>
<div className="space-y-2 text-[10px]">
<div className="flex justify-between">
<span className="text-slate-400 font-sans">
                        Health-based routing:
                      </span>
<span className="text-white/70 font-sans">
                        Enabled
                      </span>
</div>
<div className="flex justify-between">
<span className="text-slate-400 font-sans">
                        Predictive pre-cache:
                      </span>
<span className="text-white/70 font-sans">
                        On
                      </span>
</div>
<div className="flex justify-between">
<span className="text-slate-400 font-sans">
                        Blast radius:
                      </span>
<span className="text-white/70 font-sans">
                        Limited by design
                      </span>
</div>
</div>
</div>
<div className="bg-white/5 rounded-lg p-3 space-y-3">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-slate-300 font-sans">
                      Settlement
                    </span>
<span className="rounded-md px-2 py-0.5 text-[10px] font-sans bg-white/10 text-white/70">
                      x402 + fiat
                    </span>
</div>
<div className="space-y-2 text-[11px]">
<div className="flex items-center gap-2 p-2 rounded border bg-white/10 border-white/20">
<svg className="w-3 h-3 flex-shrink-0 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-slate-300 font-sans text-[10px]">
                        Pay-per-query and pay-per-GB
                      </span>
</div>
<div className="flex items-center gap-2 p-2 bg-white/10 rounded border border-white/20">
<svg className="w-3 h-3 text-white flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="12" x2="12" y1="8" y2="12"></line>
<line x1="12" x2="12.01" y1="16" y2="16"></line>
</svg>
<span className="text-slate-300 font-sans text-[10px]">
                        Revenue shared with data providers &amp; nodes
                      </span>
</div>
</div>
</div>
<div className="bg-white/5 rounded-lg p-3 space-y-2">
<div className="mb-2 text-xs">
<span className="text-slate-300 font-sans">
                      Quick toggles
                    </span>
</div>
<div className="space-y-2 text-[10px]">
<div className="flex items-center justify-between">
<span className="text-slate-400 font-sans">
                        Prefer sub-120ms latency
                      </span>
<button className="w-8 h-4 bg-white rounded-full relative">
<div className="w-3 h-3 bg-neutral-900 rounded-full absolute right-0.5 top-0.5 transition-transform"></div>
</button>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-400 font-sans">
                        Aggressive replication
                      </span>
<button className="w-8 h-4 bg-white/10 rounded-full relative">
<div className="w-3 h-3 bg-white rounded-full absolute left-0.5 top-0.5 transition-transform"></div>
</button>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-400 font-sans">
                        Outage alerts to Slack
                      </span>
<button className="w-8 h-4 bg-white rounded-full relative">
<div className="w-3 h-3 bg-neutral-900 rounded-full absolute right-0.5 top-0.5 transition-transform"></div>
</button>
</div>
</div>
</div>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 hover:bg-zinc-100 text-xs font-medium text-neutral-900 bg-white rounded pt-2 pr-3 pb-2 pl-3" id="start-building">
                  Start Building
                </button>
<button className="px-3 py-2 bg-white/5 text-slate-300 rounded text-xs font-medium border border-white/10 hover:bg-white/10 font-sans" id="talk-team">
                  Talk to the team
                </button>
</div>
</aside>
</div>
</div>
</div>
<div className="pointer-events-none absolute inset-x-0 -z-0 top-24 flex justify-center">
<div className="h-72 w-[80%] max-w-4xl rounded-full bg-gradient-to-b from-indigo-500/20 to-transparent blur-3xl"></div>
</div>
</div>
</div>
</section>
<section className="z-10 sm:px-6 lg:px-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mr-auto ml-auto pt-20 pr-4 pb-16 pl-4 relative" id="why-hydral">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-neutral-950 backdrop-blur">
<div className="pointer-events-none absolute -left-24 -top-24 h-72 w-full bg-blue-500/20 blur-3xl"></div>
<div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-full bg-indigo-500/20 blur-3xl"></div>
<div className="relative px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-20">
<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          Why Hydral
        </h2>
<p className="mt-4 text-base sm:text-lg text-slate-300">
          Outages, vendor lock-in, and single-region architectures aren’t edge cases anymore—they’re normal. Hydral is built
          for the version of the internet where any link in the chain can fail at any time.
        </p>
</div>
<div className="mt-10 grid gap-6 lg:grid-cols-3">

<div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-indigo-400/60 hover:bg-white/10">
<div className="flex items-center justify-between gap-4">
<h3 className="text-lg font-medium text-white">
              Multi-origin data
            </h3>
<span className="inline-flex items-center rounded-full bg-emerald-400/10 px-2 py-0.5 text-[11px] font-medium text-emerald-300">
              No single vendor
            </span>
</div>
<p className="mt-3 text-sm text-slate-300">
            Hydral ingests from chains, L2s, storage networks, and your own infra—then turns them into a single,
            health-aware data plane that can route around failures in real time.
          </p>
<dl className="mt-4 space-y-2 text-xs text-slate-300">
<div className="flex items-center justify-between">
<dt className="flex items-center gap-1">
<span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Active sources
              </dt>
<dd className="text-white/80">Solana • Arweave • IPFS • Filecoin</dd>
</div>
<div className="flex items-center justify-between">
<dt className="flex items-center gap-1">
<span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                Built-in health signals
              </dt>
<dd className="text-white/80">RPC, CDN, region, chain</dd>
</div>
</dl>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-indigo-400/60 hover:bg-white/10">
<div className="flex items-center justify-between gap-4">
<h3 className="text-lg font-medium text-white">
              Permanent memory
            </h3>
<span className="inline-flex items-center rounded-full bg-sky-400/10 px-2 py-0.5 text-[11px] font-medium text-sky-300">
              Hot → cold
            </span>
</div>
<p className="mt-3 text-sm text-slate-300">
            Snapshots, traces, embeddings, and order flow—Hydral keeps it all in a tiered memory system that can be
            queried like a database and settled like a network.
          </p>
<dl className="mt-4 space-y-2 text-xs text-slate-300">
<div className="flex items-center justify-between">
<dt className="flex items-center gap-1">
<span className="inline-block h-1.5 w-1.5 rounded-full bg-white"></span>
                Hot memory
              </dt>
<dd className="text-white/80">&lt; 50ms reads, cache-backed</dd>
</div>
<div className="flex items-center justify-between">
<dt className="flex items-center gap-1">
<span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                Warm / cold
              </dt>
<dd className="text-white/80">Durable, multi-network</dd>
</div>
</dl>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-indigo-400/60 hover:bg-white/10">
<div className="flex items-center justify-between gap-4">
<h3 className="text-lg font-medium text-white">
              Machine-native payments
            </h3>
<span className="inline-flex items-center rounded-full bg-fuchsia-400/10 px-2 py-0.5 text-[11px] font-medium text-fuchsia-300">
              x402 + fiat
            </span>
</div>
<p className="mt-3 text-sm text-slate-300">
            Usage-based, programmatic settlement across chains and currencies, wired directly into your data layer—so
            agents can read, write, and pay without human in the loop.
          </p>
<dl className="mt-4 space-y-2 text-xs text-slate-300">
<div className="flex items-center justify-between">
<dt className="flex items-center gap-1">
<span className="inline-block h-1.5 w-1.5 rounded-full bg-fuchsia-400"></span>
                Pricing primitives
              </dt>
<dd className="text-white/80">per query • per GB • per write</dd>
</div>
<div className="flex items-center justify-between">
<dt className="flex items-center gap-1">
<span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                Revenue share
              </dt>
<dd className="text-white/80">nodes &amp; data providers</dd>
</div>
</dl>
</div>
</div>
<div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.2fr),minmax(0,1.1fr)]">

<div className="rounded-2xl border border-white/10 bg-black/30 p-5 sm:p-6">
<div className="flex items-center justify-between gap-4">
<div>
<h3 className="text-sm font-medium text-white">
                When the internet breaks, Hydral keeps routing.
              </h3>
<p className="mt-2 text-xs sm:text-sm text-slate-300">
                Real-time signals from RPCs, CDNs, regions, and chains feed a routing engine that treats degradation as just
                another metric—not a catastrophe.
              </p>
</div>
<span className="hidden sm:inline-flex items-center rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
              99.99%+ observed
            </span>
</div>
<ol className="mt-5 space-y-3 text-xs sm:text-[13px] text-slate-200">
<li className="flex items-start gap-3 rounded-lg bg-white/5 p-3">
<span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-[11px] text-emerald-200">
                01
              </span>
<div className="space-y-1">
<p className="font-medium text-white">
                  Hydral detects signal degradation
                </p>
<p className="text-slate-300">
                  Latency and error spikes from a CDN, RPC provider, or region are treated as a routing signal—no manual
                  dashboards or pager duty required.
                </p>
</div>
</li>
<li className="flex items-start gap-3 rounded-lg bg-white/5/80 p-3">
<span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-400/20 text-[11px] text-indigo-200">
                02
              </span>
<div className="space-y-1">
<p className="font-medium text-white">
                  Queries instantly re-route
                </p>
<p className="text-slate-300">
                  Hydral fans out across the healthiest available origins within your policy—other chains, storage networks,
                  or your own infra—without changing your application code.
                </p>
</div>
</li>
<li className="flex items-start gap-3 rounded-lg bg-white/5/60 p-3">
<span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-400/20 text-[11px] text-sky-200">
                03
              </span>
<div className="space-y-1">
<p className="font-medium text-white">
                  Memory &amp; payments stay consistent
                </p>
<p className="text-slate-300">
                  Hydral’s memory fabric and settlement layer ensure reads, writes, and payments resolve cleanly across
                  replicas—even as routes shift underneath.
                </p>
</div>
</li>
</ol>
</div>

<div className="grid h-full gap-4 sm:grid-cols-2">
<div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-black/40 p-5">
<div>
<p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Designed for failures
              </p>
<p className="mt-2 text-sm text-slate-200">
                Hydral assumes RPCs, regions, and providers will fail and designs for graceful degradation—not heroics.
              </p>
</div>
<dl className="mt-4 space-y-2 text-xs text-slate-300">
<div className="flex items-center justify-between">
<dt>Simultaneous provider loss</dt>
<dd className="text-white/90">Tolerant by policy</dd>
</div>
<div className="flex items-center justify-between">
<dt>Single-region failure</dt>
<dd className="text-emerald-300">Routed around</dd>
</div>
<div className="flex items-center justify-between">
<dt>Blast radius</dt>
<dd className="text-white/80">Constrained by design</dd>
</div>
</dl>
</div>
<div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-black/40 p-5">
<div>
<p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Built for agents &amp; dApps
              </p>
<p className="mt-2 text-sm text-slate-200">
                One API to read, write, and pay—whether you’re building an exchange, an agent swarm, or a data-intensive
                protocol.
              </p>
</div>
<ul className="mt-4 space-y-2 text-xs text-slate-300">
<li className="flex items-center gap-2">
<span className="inline-block h-1.5 w-1.5 rounded-full bg-white"></span>
                Exchange &amp; trading systems
              </li>
<li className="flex items-center gap-2">
<span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-300"></span>
                Agentic infrastructure &amp; AI
              </li>
<li className="flex items-center gap-2">
<span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-300"></span>
                Indexers, explorers &amp; data APIs
              </li>
</ul>
</div>
</div>
</div>
<div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
<p className="text-xs text-slate-400">
          Hydral is not another RPC, CDN, or single-network indexer. It’s the outage-proof fabric that sits underneath all of them.
        </p>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-100 hover:border-indigo-400/60 hover:bg-indigo-500/20 transition" href="#how-it-works">
          See how it works
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</section>
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 sm:pt-10 lg:pt-16 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll" id="how-it-works">
<div className="flex flex-col gap-8 lg:flex-row lg:items-start">
<div className="max-w-xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
        How Hydral works
      </h2>
<p className="mt-4 text-base sm:text-lg text-slate-300">
        Under the hood, Hydral is a distributed router for data, memory, and settlement. You talk to one API; Hydral
        orchestrates the rest.
      </p>
<ul className="mt-6 space-y-3 text-sm text-slate-300">
<li className="flex gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Clients send reads / writes / payments to the Hydral edge.</span>
</li>
<li className="flex gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
<span>Hydral evaluates health, latency, and policy, then selects the best path.</span>
</li>
<li className="flex gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400"></span>
<span>Results are cached, persisted to durable memory, and settled across providers.</span>
</li>
</ul>
</div>
<div className="flex-1">
<div className="rounded-3xl border border-white/10 bg-neutral-950/80 p-4 sm:p-6 lg:p-7 shadow-[0_0_40px_rgba(15,23,42,0.9)]">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90"></span>
<span>Hydral flow</span>
</div>
<span className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-200">
            Read → route → persist → settle
          </span>
</div>
<div className="grid gap-4 sm:grid-cols-4 text-xs text-slate-200">
<div className="rounded-2xl border border-white/10 bg-black/40 p-3 flex flex-col gap-2">
<div className="flex items-center justify-between gap-2">
<span className="font-medium text-white">Client</span>
<span className="text-[10px] text-slate-400">SDK / HTTP</span>
</div>
<p className="text-[11px] text-slate-300">
              Your dApp, agent swarm, or backend hits a single endpoint.
            </p>
<code className="mt-1 rounded bg-black/50 px-2 py-1 text-[10px] text-sky-300">
              hydral.fetch(...)
            </code>
</div>
<div className="rounded-2xl border border-white/10 bg-black/40 p-3 flex flex-col gap-2">
<div className="flex items-center justify-between gap-2">
<span className="font-medium text-white">Router</span>
<span className="text-[10px] text-slate-400">Policy</span>
</div>
<p className="text-[11px] text-slate-300">
              Evaluates health, latency, and your SLOs to pick a route.
            </p>
<code className="mt-1 rounded bg-black/50 px-2 py-1 text-[10px] text-sky-300">
              profile: "outage-proof"
            </code>
</div>
<div className="rounded-2xl border border-white/10 bg-black/40 p-3 flex flex-col gap-2">
<div className="flex items-center justify-between gap-2">
<span className="font-medium text-white">Memory</span>
<span className="text-[10px] text-slate-400">Hot / warm</span>
</div>
<p className="text-[11px] text-slate-300">
              Results land in a tiered memory fabric with recall.
            </p>
<code className="mt-1 rounded bg-black/50 px-2 py-1 text-[10px] text-sky-300">
              hydral.memory.put()
            </code>
</div>
<div className="rounded-2xl border border-white/10 bg-black/40 p-3 flex flex-col gap-2">
<div className="flex items-center justify-between gap-2">
<span className="font-medium text-white">Settlement</span>
<span className="text-[10px] text-slate-400">x402</span>
</div>
<p className="text-[11px] text-slate-300">
              Usage is tracked and settled to providers and nodes.
            </p>
<code className="mt-1 rounded bg-black/50 px-2 py-1 text-[10px] text-sky-300">
              hydral.pay(...)
            </code>
</div>
</div>
<div className="mt-5 rounded-2xl border border-white/10 bg-black/60 p-4 text-[11px] font-mono text-slate-100 overflow-auto">
<pre className="whitespace-pre overflow-x-auto"><code>// one client call, outage-proof by default
const client = new HydralClient({ apiKey: process.env.HYDRAL_KEY });

const result = await client.fetch({
  query: "user:positions",
  profile: "outage-proof",
  memory: { tier: "hot", ttl: "5s" },
  settle: { mode: "x402", maxPerQueryUsd: 0.0005 }
});</code></pre>
<div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
<span>Hydral picks routes, handles failover, and persists memory.</span>
<span className="text-white/70">You just call <code className="font-mono">fetch</code>.</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16 sm:pt-6 lg:pt-10 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll" id="use-cases">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
        What can you build on Hydral?
      </h2>
<p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl">
        From high-frequency trading to agent swarms and explorers, Hydral gives you an outage-proof data and memory layer
        without forcing you into a single network or vendor.
      </p>
</div>
</div>
<div className="mt-8 grid gap-5 md:grid-cols-3">

<article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/80 p-5 backdrop-blur transition hover:border-indigo-400/60 hover:bg-neutral-900/90">
<div className="flex items-center justify-between gap-3">
<h3 className="text-base font-medium text-white">
          Trading &amp; market infra
        </h3>
<span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[11px] font-medium text-emerald-300">
          Low-latency
        </span>
</div>
<p className="mt-2 text-xs sm:text-sm text-slate-300">
        Route order books, price feeds, and positions across chains with built-in failover and sub-120ms read paths.
      </p>
<ul className="mt-4 space-y-1.5 text-[11px] text-slate-300">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-white"></span>
          Consolidated order routing across RPC/CDN providers
        </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-300"></span>
          Persistent per-user and per-strategy memory
        </li>
</ul>
</article>

<article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/80 p-5 backdrop-blur transition hover:border-indigo-400/60 hover:bg-neutral-900/90">
<div className="flex items-center justify-between gap-3">
<h3 className="text-base font-medium text-white">
          Agent infrastructure
        </h3>
<span className="rounded-full bg-sky-400/10 px-2 py-0.5 text-[11px] font-medium text-sky-300">
          Machine-native
        </span>
</div>
<p className="mt-2 text-xs sm:text-sm text-slate-300">
        Give agents durable memory, multi-chain observability, and programmatic settlement in a single integration.
      </p>
<ul className="mt-4 space-y-1.5 text-[11px] text-slate-300">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-300"></span>
          Long-horizon memory across hot / warm / cold tiers
        </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
          x402-native access to data and infra
        </li>
</ul>
</article>

<article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/80 p-5 backdrop-blur transition hover:border-indigo-400/60 hover:bg-neutral-900/90">
<div className="flex items-center justify-between gap-3">
<h3 className="text-base font-medium text-white">
          Indexers &amp; explorers
        </h3>
<span className="rounded-full bg-fuchsia-400/10 px-2 py-0.5 text-[11px] font-medium text-fuchsia-300">
          Multi-chain
        </span>
</div>
<p className="mt-2 text-xs sm:text-sm text-slate-300">
        Build rich, cross-network views without binding yourself to a single RPC or region—or rewriting when vendors fail.
      </p>
<ul className="mt-4 space-y-1.5 text-[11px] text-slate-300">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-white"></span>
          Query across chains and storage networks via one API
        </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-300"></span>
          Built-in caching, replay, and archive access
        </li>
</ul>
</article>
</div>
</section>
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16 sm:pt-6 lg:pt-10 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll" id="pricing-page">
<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
        Pricing that matches reality
      </h2>
<p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl">
        Start free, then scale by queries, GBs, and memory. No lock-in, no surprise egress bills—just usage-based pricing
        aligned with how modern protocols actually run.
      </p>
</div>
</div>
<div className="mt-8 grid gap-6 md:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)]">

<div className="grid gap-4 sm:grid-cols-2">
<div className="flex flex-col rounded-2xl border border-white/10 bg-neutral-950/80 p-5 backdrop-blur">
<h3 className="text-base font-medium text-white">
          Builder
        </h3>
<p className="mt-2 text-xs sm:text-sm text-slate-300">
          For teams experimenting, prototyping, or running early-stage dApps and agents.
        </p>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-2xl font-semibold text-white">$0</span>
<span className="text-[11px] text-slate-400">/ month</span>
</div>
<ul className="mt-3 space-y-1.5 text-[11px] text-slate-300">
<li>• Generous free quota of reads / writes</li>
<li>• Shared, multi-origin data plane</li>
<li>• Hot memory tier included</li>
<li>• Community support</li>
</ul>
<button className="mt-4 inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-xs font-medium text-neutral-900 hover:bg-zinc-100">
          Start free
        </button>
</div>
<div className="relative flex flex-col rounded-2xl border border-indigo-400/70 bg-gradient-to-br from-indigo-500/10 via-neutral-950/90 to-sky-500/10 p-5 backdrop-blur shadow-[0_0_40px_rgba(79,70,229,0.4)]">
<div className="absolute right-4 top-4 rounded-full bg-indigo-500/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
          Recommended
        </div>
<h3 className="text-base font-medium text-white">
          Production
        </h3>
<p className="mt-2 text-xs sm:text-sm text-slate-100">
          For teams running user-facing, revenue-generating workloads that can’t go dark.
        </p>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-2xl font-semibold text-white">Usage-based</span>
</div>
<ul className="mt-3 space-y-1.5 text-[11px] text-slate-100">
<li>• Per-query and per-GB pricing</li>
<li>• Dedicated routing &amp; multi-region replicas</li>
<li>• Hot / warm / cold memory tiers</li>
<li>• x402 + fiat settlement</li>
<li>• SLO-backed support</li>
</ul>
<button className="mt-4 inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-xs font-medium text-neutral-900 hover:bg-zinc-100">
          Talk to sales
        </button>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-neutral-950/80 p-5 backdrop-blur">
<h3 className="text-sm font-medium text-white">
        How metering works
      </h3>
<p className="mt-2 text-xs sm:text-sm text-slate-300">
        Hydral tracks what you actually use—reads, writes, bytes, and memory duration—then settles across currencies and
        providers via x402 or fiat.
      </p>
<dl className="mt-4 space-y-2 text-[11px] text-slate-200">
<div className="flex items-center justify-between">
<dt>Reads</dt>
<dd className="text-slate-300">per 1k successful queries</dd>
</div>
<div className="flex items-center justify-between">
<dt>Writes</dt>
<dd className="text-slate-300">per 1k mutations / events</dd>
</div>
<div className="flex items-center justify-between">
<dt>Storage</dt>
<dd className="text-slate-300">per GB, per month, by tier</dd>
</div>
<div className="flex items-center justify-between">
<dt>Bandwidth</dt>
<dd className="text-slate-300">per GB egress</dd>
</div>
</dl>
<p className="mt-4 text-[11px] text-slate-400">
        Need dedicated capacity, custom SLOs, or on-prem / VPC deployment? Hydral offers tailored plans for exchanges,
        L2s, and infra providers.
      </p>
</div>
</div>
</section>
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16 sm:pt-6 lg:pt-10 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll" id="chains-partners">
<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
        For chains, L2s &amp; infra partners
      </h2>
<p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl">
        Hydral is an economic router as much as a technical one. Plug your network or service into Hydral and get both
        traffic and revenue from every query we serve.
      </p>
</div>
<a className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-slate-100 hover:border-indigo-400/60 hover:bg-indigo-500/20 transition" href="#talk-team">
      Partner with Hydral
    </a>
</div>
<div className="mt-8 grid gap-6 md:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-neutral-950/80 p-5 backdrop-blur">
<h3 className="text-sm font-medium text-white">
        Chains &amp; L2s
      </h3>
<p className="mt-2 text-xs sm:text-sm text-slate-300">
        Make your network a first-class origin for reads, writes, and memory. Hydral drives traffic while keeping your
        infra resilient.
      </p>
<ul className="mt-3 space-y-1.5 text-[11px] text-slate-300">
<li>• Integrate once; reach all Hydral clients</li>
<li>• Share in x402-based revenue</li>
<li>• Surface your own health &amp; latency signals</li>
</ul>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-950/80 p-5 backdrop-blur">
<h3 className="text-sm font-medium text-white">
        RPCs, CDNs &amp; infra providers
      </h3>
<p className="mt-2 text-xs sm:text-sm text-slate-300">
        Become an origin in the Hydral routing mesh and receive metered traffic with transparent health scoring.
      </p>
<ul className="mt-3 space-y-1.5 text-[11px] text-slate-300">
<li>• Traffic aligned with your SLOs &amp; regions</li>
<li>• Dynamic routing based on real performance</li>
<li>• Revenue share for successful queries</li>
</ul>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-950/80 p-5 backdrop-blur">
<h3 className="text-sm font-medium text-white">
        Data &amp; model providers
      </h3>
<p className="mt-2 text-xs sm:text-sm text-slate-300">
        Expose datasets, features, or models as Hydral-readable origins with built-in metering, auth, and payout rails.
      </p>
<ul className="mt-3 space-y-1.5 text-[11px] text-slate-300">
<li>• Onboard as an origin with fine-grained policies</li>
<li>• Earn when agents and dApps query your data</li>
<li>• Optional private routing for select partners</li>
</ul>
</div>
</div>
</section>
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16 sm:pt-6 lg:pt-10 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll" id="docs">
<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
        Documentation &amp; SDKs
      </h2>
<p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl">
        Hydral is designed to drop into your stack with minimal friction. Start with a simple client, then grow into
        custom routing policies, memory tiers, and payment flows.
      </p>
</div>
<a className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-slate-100 hover:border-indigo-400/60 hover:bg-indigo-500/20 transition" href="#">
      Open full docs
    </a>
</div>
<div className="mt-8 grid gap-6 md:grid-cols-2">
<div className="rounded-2xl border border-white/10 bg-neutral-950/80 p-5 backdrop-blur">
<h3 className="text-sm font-medium text-white">
        Quickstart
      </h3>
<p className="mt-2 text-xs sm:text-sm text-slate-300">
        Install the client, create a route, and run your first outage-proof query in under 5 minutes.
      </p>
<div className="mt-4 rounded-xl border border-white/10 bg-black/60 p-4 text-[11px] font-mono text-slate-100 overflow-auto">
<pre className="whitespace-pre overflow-x-auto"><code># install
npm install @hydral/client

# usage
import { HydralClient } from "@hydral/client";

const hydral = new HydralClient({ apiKey: process.env.HYDRAL_KEY });

const book = await hydral.fetch({
  query: "orderbook:SOL/USDC",
  profile: "outage-proof"
});</code></pre>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-950/80 p-5 backdrop-blur">
<h3 className="text-sm font-medium text-white">
        SDKs &amp; runtimes
      </h3>
<p className="mt-2 text-xs sm:text-sm text-slate-300">
        Hydral works in modern runtimes and languages out of the box, with more on the way.
      </p>
<ul className="mt-4 grid gap-3 text-[11px] text-slate-200 sm:grid-cols-2">
<li className="rounded-lg border border-white/10 bg-black/40 p-3">
<p className="font-medium text-white">TypeScript / Node</p>
<p className="mt-1 text-[11px] text-slate-300">First-class support for Node &amp; edge runtimes.</p>
</li>
<li className="rounded-lg border border-white/10 bg-black/40 p-3">
<p className="font-medium text-white">Rust (beta)</p>
<p className="mt-1 text-[11px] text-slate-300">For high-performance indexers and services.</p>
</li>
<li className="rounded-lg border border-white/10 bg-black/40 p-3">
<p className="font-medium text-white">Python (beta)</p>
<p className="mt-1 text-[11px] text-slate-300">Ideal for agents, research, and ML workflows.</p>
</li>
<li className="rounded-lg border border-white/10 bg-black/40 p-3">
<p className="font-medium text-white">More coming</p>
<p className="mt-1 text-[11px] text-slate-300">Reach out if you need another runtime.</p>
</li>
</ul>
</div>
</div>
</section>
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16 sm:pt-6 lg:pt-12 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll" id="about">
<div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)] items-start">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
        About Hydral
      </h2>
<p className="mt-3 text-sm sm:text-base text-slate-300">
        Hydral was born out of a simple observation: the stack we use to build “decentralized” systems still has
        centralized failure modes. We’re fixing that.
      </p>
<p className="mt-3 text-sm sm:text-base text-slate-300">
        Our team has built exchanges, infra providers, and protocols that have collectively handled billions in volume
        and billions of requests. We know what it’s like to watch a perfectly functional system go dark because a
        provider, region, or CDN fails.
      </p>
<p className="mt-3 text-sm sm:text-base text-slate-300">
        Hydral is our response: an outage-proof backbone for data, memory, and machine-native payments that treats the
        messy, failure-prone internet as a given—not an exception.
      </p>
</div>
<div className="rounded-3xl border border-white/10 bg-neutral-950/80 p-5 sm:p-6 backdrop-blur">
<h3 className="text-sm font-medium text-white">
        Talk to the team
      </h3>
<p className="mt-2 text-xs sm:text-sm text-slate-300">
        Whether you’re running an exchange, an L2, an agent platform, or critical infra, we’d love to understand your
        reliability requirements and see how Hydral can help.
      </p>
<form className="mt-4 space-y-3" id="talk-team">
<div>
<label className="block text-[11px] font-medium text-slate-300 mb-1" htmlFor="company">
            Company / project
          </label>
<input className="w-full rounded-md border border-white/15 bg-black/60 px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400" id="company" placeholder="Your project or org name" type="text"/>
</div>
<div className="grid gap-3 sm:grid-cols-2">
<div>
<label className="block text-[11px] font-medium text-slate-300 mb-1" htmlFor="email">
              Work email
            </label>
<input className="w-full rounded-md border border-white/15 bg-black/60 px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400" id="email" placeholder="you@company.com" type="email"/>
</div>
<div>
<label className="block text-[11px] font-medium text-slate-300 mb-1" htmlFor="role">
              Role
            </label>
<input className="w-full rounded-md border border-white/15 bg-black/60 px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400" id="role" placeholder="Founder, infra lead, etc." type="text"/>
</div>
</div>
<div>
<label className="block text-[11px] font-medium text-slate-300 mb-1" htmlFor="context">
            What are you building &amp; what can’t go down?
          </label>
<textarea className="w-full rounded-md border border-white/15 bg-black/60 px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400" id="context" placeholder="Share a bit about your stack, current providers, and worst-case outage scenarios." rows="4"></textarea>
</div>
<button className="inline-flex w-full items-center justify-center rounded-md bg-white px-3 py-2.5 text-xs font-medium text-neutral-900 hover:bg-zinc-100" type="submit">
          Submit
        </button>
<p className="text-[10px] text-slate-500">
          We’ll get back to you quickly—especially if you’re already running user-facing, high-uptime workloads.
        </p>
</form>
</div>
</div>
</section>
<footer className="border-t border-white/10 bg-black/80">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-400">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded bg-white/5 text-[11px] font-semibold text-white">
        H
      </span>
<span>Hydral · Never go dark again.</span>
</div>
<div className="flex flex-wrap items-center gap-4">
<a className="hover:text-slate-200" href="#docs">Docs</a>
<a className="hover:text-slate-200" href="#pricing-page">Pricing</a>
<a className="hover:text-slate-200" href="#talk-team">Contact</a>
<span className="hidden sm:inline text-slate-600">•</span>
<span>© <span id="year"></span> Hydral. All rights reserved.</span>
</div>
</div>
</footer>


    </>
  );
}
