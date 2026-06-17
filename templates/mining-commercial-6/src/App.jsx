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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        lucide.createIcons();
        
        // Mobile Menu Logic
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            const isClosed = menu.classList.contains('menu-closed');
            
            if (isClosed) {
                menu.classList.remove('menu-closed');
                menu.classList.add('menu-open');
                menuIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
            } else {
                menu.classList.add('menu-closed');
                menu.classList.remove('menu-open');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        }

        btn.addEventListener('click', toggleMenu);

        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (menu.classList.contains('menu-open')) {
                    toggleMenu();
                }
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="qpSlPSWA2bdkUAYztz8z"></div>

</div></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-950/30 rounded-full blur-[120px] -z-10 pointer-events-none opacity-60"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-white text-slate-950 flex items-center justify-center border border-white/10">
<svg aria-hidden="true" className="lucide lucide-gem w-5 h-5" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
</div>
<span className="text-lg text-white font-semibold tracking-tight font-geist">VN Sourcing</span>
</div>

<div className="hidden md:flex items-center">
<div className="px-1 py-1 rounded-full bg-slate-900/50 border border-white/5 flex items-center gap-1">
<a className="px-4 py-1.5 text-sm text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/5 font-geist font-medium" href="#about">About</a>
<a className="px-4 py-1.5 text-sm text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/5 font-geist font-medium" href="#services">Services</a>
<a className="px-4 py-1.5 text-sm text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/5 font-geist font-medium" href="#process">Process</a>
</div>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="shiny-cta group relative flex items-center justify-center gap-2 text-sm font-semibold tracking-tight font-geist rounded-full transition-all" href="#contact">
<style>
        @property --gradient-angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
        @property --gradient-angle-offset { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
        @property --gradient-percent { syntax: "<percentage>"; initial-value: 20%; inherits: false; }
        @property --gradient-shine { syntax: "<color>"; initial-value: #8484ff; inherits: false; }
        .shiny-cta {
            --gradient-angle: 0deg;
            --gradient-angle-offset: 0deg;
            --gradient-percent: 20%;
            --gradient-shine: #8484ff;
            position: relative;
            overflow: hidden;
            color: #ffffff;
            background: linear-gradient(#0f172a, #020617) padding-box, 
                        conic-gradient(from calc(var(--gradient-angle) - var(--gradient-angle-offset)), transparent 0%, #3b82f6 5%, var(--gradient-shine) 15%, #3b82f6 30%, transparent 40%, transparent 100%) border-box;
            border: 1px solid transparent;
            box-shadow: inset 0 0 0 1px #1e293b;
            padding: 0.625rem 1.5rem;
            isolation: isolate;
            animation: border-spin 2.5s linear infinite;
        }
        @keyframes border-spin { to { --gradient-angle: 360deg; } }
        .shiny-cta:hover {
            --gradient-percent: 50%;
            --gradient-angle-offset: 120deg;
            --gradient-shine: #fff;
            box-shadow: inset 0 0 0 1px #3b82f6, 0 0 20px rgba(59, 130, 246, 0.4);
        }
        .shiny-cta:active { transform: translateY(1px); }
        .shiny-cta::before {
            content: '';
            pointer-events: none;
            position: absolute;
            inset: 0;
            z-index: -1;
            background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 1px, transparent 1px);
            background-size: 8px 8px;
            mask-image: radial-gradient(circle at 50% 50%, black 40%, transparent 70%);
            opacity: 0.5;
        }
        .shiny-cta::after {
            content: '';
            pointer-events: none;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: -1;
            width: 100%;
            height: 100%;
            background: linear-gradient(-45deg, transparent, rgba(59, 130, 246, 0.1), transparent);
            mask-image: radial-gradient(circle at center, black 40%, transparent 70%);
            opacity: 0;
            transition: opacity 0.3s;
        }
        .shiny-cta:hover::after { opacity: 1; }
    </style>
<span className="relative z-10">Consultation</span>
</a>
</div>

<button className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" id="mobile-menu-btn">
<svg className="lucide lucide-menu w-6 h-6" fill="none" height="24" id="menu-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
<svg className="lucide lucide-x w-6 h-6 hidden" fill="none" height="24" id="close-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="md:hidden absolute top-20 left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-white/5 menu-closed overflow-hidden" id="mobile-menu">
<div className="flex flex-col p-6 gap-2">
<a className="mobile-link text-lg text-slate-400 hover:text-white py-3 border-b border-white/5 font-geist font-medium transition-colors" href="#about">About</a>
<a className="mobile-link text-lg text-slate-400 hover:text-white py-3 border-b border-white/5 font-geist font-medium transition-colors" href="#services">Services</a>
<a className="mobile-link text-lg text-slate-400 hover:text-white py-3 border-b border-white/5 font-geist font-medium transition-colors" href="#process">Process</a>
<a className="mobile-link mt-4 px-6 py-3 rounded-lg bg-white text-slate-950 text-center text-sm hover:bg-slate-200 transition-all font-semibold tracking-tight font-geist" href="#contact">
                    Consultation
                </a>
</div>
</div>
</nav>

<section className="md:pt-52 md:pb-48 overflow-hidden min-h-[90vh] flex flex-col pt-40 pb-32 relative justify-center">
<div className="flex flex-col text-center max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative items-center">

<div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900 border border-blue-900/30 text-blue-400 text-[11px] font-bold uppercase tracking-widest mb-10 font-geist shadow-lg shadow-blue-900/10 hover:border-blue-800/50 transition-colors cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
                Commercial Partner for Mining
            </div>

<h1 className="md:text-7xl lg:text-8xl leading-[1.05] text-6xl font-semibold text-white tracking-tight font-space-grotesk max-w-6xl mb-8">
    The Commercial Arm <br className="hidden md:block"/>
    Of Modern <span className="bg-clip-text text-transparent bg-gradient-to-t from-slate-400 to-slate-600">Mining.</span>
</h1>

<p className="leading-relaxed md:text-xl text-lg text-slate-400 tracking-normal font-geist max-w-2xl mb-12">
                We act as an extension of your internal team—structuring operations, managing marketing, and driving direct revenue without the overhead of an in-house department.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
<a className="shiny-cta group sm:w-auto w-full flex items-center justify-center gap-2 text-[15px] font-semibold tracking-tight font-geist rounded-full transition-all" href="#services">
<style>
        @property --gradient-angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
        @property --gradient-angle-offset { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
        @property --gradient-percent { syntax: "<percentage>"; initial-value: 20%; inherits: false; }
        @property --gradient-shine { syntax: "<color>"; initial-value: #8484ff; inherits: false; }
        .shiny-cta {
            --gradient-angle: 0deg;
            --gradient-angle-offset: 0deg;
            --gradient-percent: 20%;
            --gradient-shine: #8484ff;
            position: relative;
            overflow: hidden;
            color: #ffffff;
            background: linear-gradient(#0f172a, #020617) padding-box, 
                        conic-gradient(from calc(var(--gradient-angle) - var(--gradient-angle-offset)), transparent 0%, #3b82f6 5%, var(--gradient-shine) 15%, #3b82f6 30%, transparent 40%, transparent 100%) border-box;
            border: 1px solid transparent;
            box-shadow: inset 0 0 0 1px #1e293b;
            padding: 0.75rem 2rem;
            isolation: isolate;
            animation: border-spin 2.5s linear infinite;
        }
        @keyframes border-spin { to { --gradient-angle: 360deg; } }
        .shiny-cta:hover {
            --gradient-percent: 50%;
            --gradient-angle-offset: 120deg;
            --gradient-shine: #fff;
            box-shadow: inset 0 0 0 1px #3b82f6, 0 0 20px rgba(59, 130, 246, 0.4);
        }
        .shiny-cta:active { transform: translateY(1px); }
        .shiny-cta::before {
            content: '';
            pointer-events: none;
            position: absolute;
            inset: 0;
            z-index: -1;
            background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 1px, transparent 1px);
            background-size: 8px 8px;
            mask-image: radial-gradient(circle at 50% 50%, black 40%, transparent 70%);
            opacity: 0.5;
        }
        .shiny-cta::after {
            content: '';
            pointer-events: none;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: -1;
            width: 100%;
            height: 100%;
            background: linear-gradient(-45deg, transparent, rgba(59, 130, 246, 0.1), transparent);
            mask-image: radial-gradient(circle at center, black 40%, transparent 70%);
            opacity: 0;
            transition: opacity 0.3s;
        }
        .shiny-cta:hover::after { opacity: 1; }
    </style>
<span className="relative z-10 flex items-center gap-2">
        Explore Solutions
        <svg aria-hidden="true" className="lucide lucide-arrow-down w-4 h-4 transition-transform group-hover:translate-y-1" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</span>
</a>
<a className="shiny-cta-req relative w-full sm:w-auto h-12 px-8 rounded-full flex items-center justify-center font-medium text-white tracking-tight font-geist text-[15px] shadow-lg shadow-black/50 overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]" href="#contact">
<style>
        @property --gradient-angle-req { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
        @property --gradient-angle-offset-req { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
        @property --gradient-percent-req { syntax: "<percentage>"; initial-value: 20%; inherits: false; }
        @property --gradient-shine-req { syntax: "<color>"; initial-value: #818cf8; inherits: false; }
        
        .shiny-cta-req {
            --gradient-angle-req: 0deg;
            --gradient-angle-offset-req: 0deg;
            --gradient-percent-req: 20%;
            --gradient-shine-req: #818cf8;
            
            background: linear-gradient(#0f172a, #020617) padding-box, 
                        conic-gradient(from calc(var(--gradient-angle-req) - var(--gradient-angle-offset-req)), transparent 0%, #3b82f6 5%, var(--gradient-shine-req) 15%, #3b82f6 30%, transparent 40%, transparent 100%) border-box;
            border: 1px solid transparent;
            box-shadow: inset 0 0 0 1px #1e293b;
            isolation: isolate;
            animation: border-spin-req 2.5s linear infinite;
        }
        
        .shiny-cta-req:hover {
            --gradient-percent-req: 50%;
            --gradient-angle-offset-req: 120deg;
            --gradient-shine-req: #fff;
            box-shadow: inset 0 0 0 1px #60a5fa, 0 0 20px rgba(59, 130, 246, 0.4);
        }

        .shiny-cta-req::before {
            content: '';
            pointer-events: none;
            position: absolute;
            inset: 0;
            z-index: -1;
            background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 1px, transparent 1px);
            background-size: 8px 8px;
            mask-image: radial-gradient(circle at 50% 50%, black 40%, transparent 70%);
            opacity: 0.5;
        }
        
        .shiny-cta-req::after {
            content: '';
            pointer-events: none;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: -1;
            width: 100%;
            height: 100%;
            background: linear-gradient(-45deg, transparent, rgba(59, 130, 246, 0.1), transparent);
            mask-image: radial-gradient(circle at center, black 40%, transparent 70%);
            opacity: 0;
            transition: opacity 0.3s;
        }
        
        .shiny-cta-req:hover::after {
            opacity: 1;
        }

        @keyframes border-spin-req { to { --gradient-angle-req: 360deg; } }
    </style>
<span className="relative z-10 flex items-center gap-2">Request Proposal</span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 relative border-t border-white/5" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">
<div className="">
<h2 className="text-3xl md:text-5xl text-white mb-6 tracking-tight font-space-grotesk font-semibold">
                        Not Just Marketers. <br/>
<span className="text-slate-500">Strategic Partners.</span>
</h2>
<p className="text-xl text-slate-400 mb-6 leading-relaxed tracking-wide font-geist">
                        At VN Sourcing &amp; Consultation, we operate at the intersection of precious metals production and global finance. We understand that a mine's profitability relies on more than just extraction—it relies on the ability to sell effectively.
                    </p>
<p className="text-xl text-slate-400 mb-8 leading-relaxed tracking-wide font-geist">
                        We act as your external sales arm, maintaining strict confidentiality while leveraging deep industry knowledge to position your assets directly in front of qualified institutional buyers.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-lg text-slate-300 tracking-wide font-geist">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 text-blue-500 w-5 h-5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            Strict Confidentiality Protocols
                        </li>
<li className="flex items-center gap-3 text-lg text-slate-300 tracking-wide font-geist">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 text-blue-500 w-5 h-5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            Direct Access to Refineries &amp; Funds
                        </li>
<li className="flex items-center gap-3 text-lg text-slate-300 tracking-wide font-geist">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 text-blue-500 w-5 h-5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            End-to-End Deal Structuring
                        </li>
</ul>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-amber-600/10 blur-[60px] rounded-full"></div>
<div className="relative grid grid-cols-2 gap-4">
<div className="glass-panel p-8 rounded-2xl flex flex-col items-center justify-center text-center h-64 border-t border-white/10">
<svg aria-hidden="true" className="lucide lucide-shield-check w-10 h-10 text-white mb-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<h3 className="text-xl font-medium text-white mb-2 tracking-wide font-geist">Trust</h3>
<p className="text-slate-400 text-sm tracking-wide font-geist">Vetted partnerships only.</p>
</div>
<div className="glass-panel p-8 rounded-2xl flex flex-col items-center justify-center text-center h-64 border-t border-white/10 translate-y-8">
<svg aria-hidden="true" className="lucide lucide-bar-chart-3 w-10 h-10 text-amber-400 mb-4" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<h3 className="text-xl font-medium text-white mb-2 tracking-wide font-geist">Growth</h3>
<p className="text-slate-400 text-sm tracking-wide font-geist">Revenue focused systems.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="md:text-5xl text-3xl font-semibold text-white tracking-tight font-space-grotesk mb-4">Comprehensive Services</h2>
<p className="text-xl text-slate-400 tracking-wide font-geist">Everything a mining operation needs to secure sales.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-blue-500/30 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<svg aria-hidden="true" className="lucide lucide-monitor w-24 h-24 text-blue-500" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
</div>
<div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 border border-blue-500/20 text-blue-400">
<svg aria-hidden="true" className="lucide lucide-layout w-6 h-6" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-wide font-geist">Digital Infrastructure</h3>
<p className="text-slate-400 text-lg leading-relaxed tracking-wide font-geist">High-end, corporate website installation designed specifically to signal trust to international investors and buyers.</p>
</div>

<div className="group glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-amber-500/30 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<svg aria-hidden="true" className="lucide lucide-target w-24 h-24 text-amber-500" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<div className="w-12 h-12 bg-amber-900/30 rounded-lg flex items-center justify-center mb-6 border border-amber-500/20 text-amber-400">
<svg aria-hidden="true" className="lucide lucide-megaphone w-6 h-6" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-wide font-geist">Strategic Positioning</h3>
<p className="text-slate-400 text-lg leading-relaxed tracking-wide font-geist">Targeted digital advertising and brand positioning to elevate your mine's reputation in the global marketplace.</p>
</div>

<div className="group glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-emerald-500/30 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<svg aria-hidden="true" className="lucide lucide-users w-24 h-24 text-emerald-500" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="w-12 h-12 bg-emerald-900/30 rounded-lg flex items-center justify-center mb-6 border border-emerald-500/20 text-emerald-400">
<svg aria-hidden="true" className="lucide lucide-link w-6 h-6" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-wide font-geist">Buyer Acquisition</h3>
<p className="text-slate-400 text-lg leading-relaxed tracking-wide font-geist">Direct connection to our network of verified refineries, sovereign funds, and private institutional buyers.</p>
</div>

<div className="group glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-purple-500/30 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<svg aria-hidden="true" className="lucide lucide-bar-chart w-24 h-24 text-purple-500" data-lucide="bar-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V9"></path><path d="M19 21V3"></path></svg>
</div>
<div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-6 border border-purple-500/20 text-purple-400">
<svg aria-hidden="true" className="lucide lucide-briefcase w-6 h-6" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-wide font-geist">Sales Structuring</h3>
<p className="text-slate-400 text-lg leading-relaxed tracking-wide font-geist">Optimization of sales contracts, logistics coordination, and revenue flow to maximize profit per ounce.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 border-y border-white/5 relative overflow-hidden" id="process">
<div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">
<div className="">
<h2 className="text-3xl md:text-5xl text-white mb-6 tracking-tight font-space-grotesk font-semibold">Our Engagement Model</h2>
<p className="text-xl text-slate-400 mb-8 tracking-wide font-geist">We utilize a systematic four-step approach to transform your sales operations.</p>
<a className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 text-lg tracking-wide font-geist" href="#contact">
                        Start the process <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="space-y-8">

<div className="flex gap-6">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white font-serif font-medium tracking-wide font-geist">1</div>
<div className="w-px h-full bg-slate-800 mt-4"></div>
</div>
<div className="pb-8">
<h3 className="text-xl font-medium text-white mb-2 tracking-wide font-geist">Onboarding &amp; Audit</h3>
<p className="text-lg text-slate-400 tracking-wide font-geist">We assess your current production capacity and existing sales channels to identify gaps.</p>
</div>
</div>

<div className="flex gap-6">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white font-serif font-medium tracking-wide font-geist">2</div>
<div className="w-px h-full bg-slate-800 mt-4"></div>
</div>
<div className="pb-8">
<h3 className="text-xl font-medium text-white mb-2 tracking-wide font-geist">System Installation</h3>
<p className="text-lg text-slate-400 tracking-wide font-geist">Deployment of your new corporate digital assets and marketing infrastructure.</p>
</div>
</div>

<div className="flex gap-6">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white font-serif font-medium tracking-wide font-geist">3</div>
<div className="w-px h-full bg-slate-800 mt-4"></div>
</div>
<div className="pb-8">
<h3 className="text-xl font-medium text-white mb-2 tracking-wide font-geist">Network Connection</h3>
<p className="text-lg text-slate-400 tracking-wide font-geist">We present your products to our pre-qualified buyer list, facilitating initial introductions.</p>
</div>
</div>

<div className="flex gap-6">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-blue-600 border border-blue-500 flex items-center justify-center text-white font-serif font-medium tracking-wide font-geist">4</div>
</div>
<div className="">
<h3 className="text-xl font-medium text-white mb-2 tracking-wide font-geist">Deal Execution</h3>
<p className="text-lg text-slate-400 tracking-wide font-geist">Structuring of long-term off-take agreements and revenue optimization.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="glass-panel rounded-3xl p-8 md:p-16 border border-white/5 relative overflow-hidden">

<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-amber-600/10 blur-[100px] -z-10"></div>
<div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
<div className="px-4">
<div className="text-4xl md:text-5xl text-white mb-2 tracking-tight font-space-grotesk font-semibold">$100M+</div>
<div className="text-lg text-slate-400 tracking-wide font-geist">Potential Market Access</div>
</div>
<div className="px-4 pt-8 md:pt-0">
<div className="text-4xl md:text-5xl text-white mb-2 tracking-tight font-space-grotesk font-semibold">100%</div>
<div className="text-lg text-slate-400 tracking-wide font-geist">Verified Corporate Buyers</div>
</div>
<div className="px-4 pt-8 md:pt-0">
<div className="text-4xl md:text-5xl text-white mb-2 tracking-tight font-space-grotesk font-semibold">24/7</div>
<div className="text-lg text-slate-400 tracking-wide font-geist">Consultation Availability</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="contact">

<div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl text-white mb-4 tracking-tight font-space-grotesk font-semibold">Partner With VN Sourcing</h2>
<p className="text-xl text-slate-400 tracking-wide font-geist">Secure your mine's future with professional sales systems.</p>
</div>
<div className="glass-panel p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-300 ml-1 tracking-wide font-geist">Company Name</label>
<input className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder-slate-600" placeholder="Mining Operation Ltd." type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-300 ml-1 tracking-wide font-geist">Contact Person</label>
<input className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder-slate-600" placeholder="Full Name" type="text"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-300 ml-1 tracking-wide font-geist">Corporate Email</label>
<input className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder-slate-600" placeholder="name@company.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-300 ml-1 tracking-wide font-geist">Primary Mineral</label>
<div className="relative">
<select className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all appearance-none">
<option className="tracking-wide font-geist">Gold</option>
<option className="tracking-wide font-geist">Silver</option>
<option className="tracking-wide font-geist">Platinum Group</option>
<option className="tracking-wide font-geist">Copper</option>
<option className="tracking-wide font-geist">Other</option>
</select>
<svg aria-hidden="true" className="lucide lucide-chevron-down absolute right-4 top-3.5 w-4 h-4 text-slate-500 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-300 ml-1 tracking-wide font-geist">Inquiry Details</label>
<textarea className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder-slate-600 h-32" placeholder="Tell us about your current production and sales goals..."></textarea>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-4 rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all flex items-center justify-center gap-2 mt-4 tracking-wide font-geist" type="button">
                        Submit Inquiry
                    </button>
<p className="text-center text-slate-500 text-sm mt-4 tracking-wide font-geist">Your information is kept strictly confidential.</p>
</form>
</div>

<div className="flex items-center gap-4 py-12">
<div className="h-px bg-white/10 flex-1"></div>
<span className="text-slate-500 font-geist text-sm uppercase tracking-widest font-semibold">Or Schedule Directly</span>
<div className="h-px bg-white/10 flex-1"></div>
</div>
<div className="calendly-inline-widget w-full h-[700px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl" data-processed="true" data-url="https://calendly.com/xvilakazi08/30min?hide_gdpr_banner=1&amp;background_color=0f172a&amp;text_color=cbd5e1&amp;primary_color=3b82f6" style={{position: 'relative', minWidth: '320px', height: '700px'}}><div className="calendly-spinner"><div className="calendly-bounce1"></div><div className="calendly-bounce2"></div><div className="calendly-bounce3"></div></div><iframe className="" frameborder="0" height="100%" src="https://calendly.com/xvilakazi08/30min?embed_domain=&amp;embed_type=Inline&amp;hide_gdpr_banner=1&amp;background_color=0f172a&amp;text_color=cbd5e1&amp;primary_color=3b82f6" title="Select a Date &amp; Time - Calendly" width="100%"></iframe></div>
</div>
</section>

<footer className="bg-slate-950 border-t border-white/5 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-blue-600 to-slate-800 flex items-center justify-center text-white border border-white/10">
<svg aria-hidden="true" className="lucide lucide-gem w-3 h-3 text-white" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
</div>
<span className="font-serif text-white tracking-wide font-geist">VN Sourcing</span>
</div>
<div className="text-slate-500 text-sm tracking-wide font-geist">
                © 2024 VN Sourcing &amp; Consultation. All Rights Reserved.
            </div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
</div>
</footer>


    </>
  );
}
