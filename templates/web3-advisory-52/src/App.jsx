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



        document.addEventListener('DOMContentLoaded', () => {
            const hero = document.getElementById('hero');
            
            hero.addEventListener('mousemove', (e) => {
                const rect = hero.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                hero.style.setProperty('--x', `${x}px`);
                hero.style.setProperty('--y', `${y}px`);
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl transition-all duration-700 delay-500" style={{animation: 'immersiveEnter 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards', opacity: '0', transform: 'translateY(-10px)'}}>
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity flex items-center gap-2" href="#">
<span className="w-2 h-2 rounded-sm bg-[#38bdf8]"></span>
                BRIDGE LABS
            </a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#about">Approach</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#who-we-help">Ecosystem</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:flex group items-center gap-2 px-5 py-2 text-xs font-semibold tracking-wide border border-white/10 rounded-full hover:bg-white/5 transition-all hover:border-[#38bdf8]/30 text-white" href="#contact">
                Partner With Us
                <svg aria-hidden="true" className="iconify group-hover:translate-x-0.5 transition-transform iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>

<button className="md:hidden text-white">
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-icon="lucide:menu" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<section className="min-h-screen flex overflow-hidden group pt-20 relative items-center justify-center" id="hero" style={{'--x': '399px', '--y': '126px'}}>

<div className="absolute inset-0 bg-grid z-0 pointer-events-none opacity-30"></div>

<div className="hero-spotlight absolute inset-0 pointer-events-none transition-opacity duration-300"></div>
<div className="hero-grid-highlight absolute inset-0 pointer-events-none"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#38bdf8] rounded-full opacity-[0.03] blur-[120px] pointer-events-none"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center pointer-events-none">
<div className="flex stagger-in delay-0 pointer-events-auto justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]"></span>
<span className="text-xs font-medium text-slate-300 tracking-wide">Enterprise Grade Web3 Infrastructure</span>
</div>
</div>
<h1 className="pointer-events-auto text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[1.1] mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
<span className="block stagger-in delay-100 lg:bg-clip-text lg:text-transparent bg-gradient-to-br from-[#ffffff] to-white/50">Bridging Web2</span>
<span className="block stagger-in delay-200 lg:bg-clip-text lg:text-transparent bg-gradient-to-br from-[#ffffff] to-white/50">and <span className="text-white italic font-serif">Web3.</span></span>
</h1>
<div className="stagger-in delay-300">
<p className="pointer-events-auto text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    We help real companies tokenize proven businesses and enable experienced Web2 operators to succeed in Web3. Structure, compliance, and strategy first.
                </p>
</div>
<div className="pointer-events-auto flex flex-col md:flex-row items-center justify-center gap-4 stagger-in delay-400">
<a className="w-full md:w-auto px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-slate-200 transition-colors flex items-center justify-center gap-2" href="#contact">
                    Start the Transition
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-full md:w-auto px-8 py-4 border border-white/20 text-white text-sm font-semibold rounded-full hover:bg-white/5 transition-colors flex items-center justify-center gap-2" href="#about">
                    How it Works
                </a>
</div>
</div>
</section>

<div className="w-full border-y border-white/5 bg-[#020617] py-8 relative overflow-hidden stagger-in delay-400">
<div className="max-w-7xl mx-auto px-6 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex justify-between items-center gap-8 flex-wrap md:flex-nowrap">
<span className="text-lg font-semibold tracking-widest text-white/80">ETHEREUM</span>
<span className="text-lg font-semibold tracking-widest text-white/80">POLYGON</span>
<span className="text-lg font-semibold tracking-widest text-white/80">CHAINLINK</span>
<span className="text-lg font-semibold tracking-widest text-white/80">ARBITRUM</span>
<span className="text-lg font-semibold tracking-widest text-white/80">BASE</span>
</div>
</div>
</div>

<section className="py-32 relative" id="about">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-8 text-white">
                        Tokenize what works. <br/>
<span className="text-slate-500">Not just ideas.</span>
</h2>
<div className="space-y-6 text-slate-400 text-base leading-relaxed">
<p>
                            Bridge Labs helps traditional companies and professionals move into Web3 with structure and execution. We focus on tokenising real businesses and translating Web2 expertise into Web3-native systems.
                        </p>
<p>
                            We don't tokenize speculation. We create asset-backed, compliant, and revenue-generating models that align incentives between companies, contributors, and token holders.
                        </p>
</div>
<div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
<div>
<span className="block text-4xl font-semibold text-[#38bdf8] tracking-tight mb-1">$500M+</span>
<span className="text-xs text-slate-500 uppercase tracking-widest">Assets Tokenized</span>
</div>
<div className="">
<span className="block text-4xl font-semibold text-[#38bdf8] tracking-tight mb-1">100%</span>
<span className="text-xs text-slate-500 uppercase tracking-widest">Regulatory Compliant</span>
</div>
</div>
</div>

<div className="relative h-[500px] w-full bg-slate-900/50 rounded-2xl overflow-hidden border border-white/10 group">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-ad7117a3943b?q=80&amp;w=2532&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="flex items-center gap-3 mb-4">
<span className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10">
<svg aria-hidden="true" className="iconify text-[#38bdf8] iconify--lucide" data-icon="lucide:blocks" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 15c-3 0-5.99-.6-5.99-3c0-2.4 2.99-3 5.99-3c2.47 0 4.14.39 5.09 1c.64.42 1 1.05 1 2c0 .95-.36 1.58-1 2c-.95.61-2.62 1-5.09 1m-5.99 3c-3 0-5.99-.6-5.99-3c0-2.4 2.99-3 5.99-3c2.47 0 4.14.39 5.09 1c.64.42 1 1.05 1 2c0 .95-.36 1.58-1 2c-.95.61-2.62 1-5.09 1M7 9C4.53 9 2.86 8.61 1.91 8C1.27 7.58.91 6.95.91 6c0-.95.36-1.58 1-2C2.86 3.39 4.53 3 7 3c3 0 5.99.6 5.99 3c0 2.4-2.99 3-5.99 3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
<div className="h-px flex-1 bg-white/10"></div>
</div>
<p className="text-sm text-slate-300 font-mono">
<span className="text-[#38bdf8]">function</span> transition(asset) {<br/>
                              <span className="text-purple-400">return</span> tokenize(asset, "compliant");<br/>
                            }
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-950/30 relative border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-20">
<div>
<span className="text-[#38bdf8] font-mono text-xs uppercase tracking-widest mb-4 block">Our Expertise</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white">Three Pillars <br/>of Transition</h2>
</div>
<p className="text-slate-400 text-sm max-w-sm mt-6 md:mt-0">
                    Connecting real-world expertise with on-chain infrastructure through a disciplined, three-pronged approach.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group glow-card p-8 rounded-2xl bg-[#0b101e] border border-white/5 relative overflow-hidden h-96 flex flex-col justify-between">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#38bdf8] blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity"></div>
<div className="">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#38bdf8]/50 transition-colors">
<svg aria-hidden="true" className="iconify w-6 h-6 text-white group-hover:text-[#38bdf8] iconify--lucide" data-icon="lucide:compass" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="m16.24 7.76l-2.12 6.36l-6.36 2.12l2.12-6.36z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white">Web2 → Web3 Advisory</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                            Strategic guidance for Web2 companies entering the space. We handle governance design, technical architecture, and go-to-market strategy for decentralized protocols.
                        </p>
</div>
</div>

<div className="group glow-card p-8 rounded-2xl bg-[#0b101e] border border-white/5 relative overflow-hidden h-96 flex flex-col justify-between">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#38bdf8] blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity"></div>
<div>
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#38bdf8]/50 transition-colors">
<svg aria-hidden="true" className="iconify w-6 h-6 text-white group-hover:text-[#38bdf8] iconify--lucide" data-icon="lucide:coins" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" fill="none" r="6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18M7 6h1v4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="m16.71 13.88l.7.71l-2.82 2.82l-.71-.71z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white">Asset Tokenisation</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                            Unlock liquidity for equity, revenue, or physical assets. We build compliant, asset-backed token structures that integrate seamlessly with DeFi infrastructure.
                        </p>
</div>
</div>

<div className="group glow-card p-8 rounded-2xl bg-[#0b101e] border border-white/5 relative overflow-hidden h-96 flex flex-col justify-between">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#38bdf8] blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity"></div>
<div>
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#38bdf8]/50 transition-colors">
<svg aria-hidden="true" className="iconify w-6 h-6 text-white group-hover:text-[#38bdf8] iconify--lucide" data-icon="lucide:users" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><circle cx="9" cy="7" fill="none" r="4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white">Operator Matching</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                            We match vetted Web2 executives and operators with high-potential Web3 projects, ensuring projects have the leadership required to scale.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="pt-32 pb-32" id="who-we-help">
<div className="md:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-20">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Who It's For</h2>
<div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent"></div>
</div>
<div className="space-y-12">

<div className="group relative w-full rounded-2xl overflow-hidden border border-white/10 bg-[#0b101e] hover:border-[#38bdf8]/30 transition-all duration-500">
<div className="grid grid-cols-1 md:grid-cols-2">
<div className="p-12 flex flex-col justify-center">
<h3 className="text-2xl font-medium text-white mb-4">For Companies</h3>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-slate-400 text-sm">
<svg aria-hidden="true" className="iconify text-[#38bdf8] mt-0.5 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Web2 businesses exploring tokenisation models
                                </li>
<li className="flex items-start gap-3 text-slate-400 text-sm">
<svg aria-hidden="true" className="iconify text-[#38bdf8] mt-0.5 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Companies with significant revenue, assets, or IP
                                </li>
<li className="flex items-start gap-3 text-slate-400 text-sm">
<svg aria-hidden="true" className="iconify text-[#38bdf8] mt-0.5 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Founders seeking compliant, long-term Web3 strategy
                                </li>
</ul>
<a className="text-[#38bdf8] text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all" href="#">
                                Tokenize your business <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="h-64 md:h-auto bg-slate-900 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#38bdf8]/20 to-transparent"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
</div>
</div>
</div>

<div className="group relative w-full rounded-2xl overflow-hidden border border-white/10 bg-[#0b101e] hover:border-[#38bdf8]/30 transition-all duration-500">
<div className="grid grid-cols-1 md:grid-cols-2">
<div className="order-2 md:order-1 h-64 md:h-auto bg-slate-900 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-bl from-[#38bdf8]/20 to-transparent"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=2632&amp;auto=format&amp;fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
</div>
<div className="order-1 md:order-2 p-12 flex flex-col justify-center">
<h3 className="text-2xl font-medium text-white mb-4">For Advisors &amp; Operators</h3>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-slate-400 text-sm">
<svg aria-hidden="true" className="iconify text-[#38bdf8] mt-0.5 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                   Web2 executives looking to enter Web3
                               </li>
<li className="flex items-start gap-3 text-slate-400 text-sm">
<svg aria-hidden="true" className="iconify text-[#38bdf8] mt-0.5 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                   Professionals wanting aligned incentives &amp; equity
                               </li>
<li className="flex items-start gap-3 text-slate-400 text-sm">
<svg aria-hidden="true" className="iconify text-[#38bdf8] mt-0.5 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                   Operators seeking real impact, not hype
                               </li>
</ul>
<a className="text-[#38bdf8] text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all" href="#">
                               Join our network <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] border-y border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center">
<h3 className="text-3xl font-semibold tracking-tighter text-white mb-12">Why Bridge Labs?</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
<div className="p-6 border border-white/5 bg-white/5 rounded-xl">
<h4 className="text-white font-medium mb-2">Structure First</h4>
<p className="text-slate-400 text-sm">We build for real businesses, not temporary narratives. Sustainable growth over short-term pumps.</p>
</div>
<div className="p-6 border border-white/5 bg-white/5 rounded-xl">
<h4 className="text-white font-medium mb-2">Proven Experience</h4>
<p className="text-slate-400 text-sm">Our team brings decades of Web2 operational excellence combined with deep Web3 native execution.</p>
</div>
<div className="p-6 border border-white/5 bg-white/5 rounded-xl">
<h4 className="text-white font-medium mb-2">Long-term Alignment</h4>
<p className="text-slate-400 text-sm">We structure deals where incentives are aligned between founders, operators, and the community.</p>
</div>
<div className="p-6 border border-white/5 bg-white/5 rounded-xl">
<h4 className="text-white font-medium mb-2">Compliance Ready</h4>
<p className="text-slate-400 text-sm">Navigating the regulatory landscape is our priority. We ensure your transition is safe and compliant.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#38bdf8]/5 pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
                Ready to make the leap?
            </h2>
<p className="text-slate-400 text-lg mb-12">
                Bridge your business to Web3 with the right partners.
            </p>
<a className="inline-flex items-center justify-center px-10 py-5 bg-[#38bdf8] text-black text-base font-semibold rounded-full hover:bg-[#7dd3fc] hover:-translate-y-1 transition-all duration-300" href="#">
                Get Started
            </a>
</div>
</section>

<footer className="border-t border-white/10 bg-[#020617] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
<div>
<a className="text-2xl font-semibold tracking-tight text-white mb-6 flex items-center gap-2" href="#">
<span className="w-2 h-2 rounded-sm bg-[#38bdf8]"></span>
                        BRIDGE LABS
                    </a>
<p className="text-slate-500 text-sm max-w-xs">
                        The bridge between traditional business and the decentralized future.
                    </p>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-white font-medium text-sm mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-[#38bdf8] transition-colors" href="#">About</a></li>
<li><a className="hover:text-[#38bdf8] transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-[#38bdf8] transition-colors" href="#who-we-help">For Companies</a></li>
<li><a className="hover:text-[#38bdf8] transition-colors" href="#who-we-help">For Advisors</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Connect</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-[#38bdf8] transition-colors" href="#">Twitter / X</a></li>
<li><a className="hover:text-[#38bdf8] transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-[#38bdf8] transition-colors" href="#">Telegram</a></li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
<p>© 2024 Bridge Labs. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
