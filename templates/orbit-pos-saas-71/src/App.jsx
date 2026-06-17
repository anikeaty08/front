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
            
            // 1. Scroll Reveal Logic (Intersection Observer)
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-text, .reveal-scale').forEach(el => {
                observer.observe(el);
            });

            // 2. Custom Cursor Logic
            const cursor = document.getElementById('cursor');
            const hoverTriggers = document.querySelectorAll('.hover-trigger');

            document.addEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            });

            hoverTriggers.forEach(trigger => {
                trigger.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
                trigger.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
            });

            // 3. Pricing Toggle Logic
            const pricingToggle = document.getElementById('pricing-toggle');
            const prices = document.querySelectorAll('.pricing-amount');
            
            // Store original prices
            const originalPrices = ["$49", "$129"];
            const yearlyPrices = ["$39", "$103"]; 

            pricingToggle.addEventListener('change', (e) => {
                if(e.target.checked) {
                    prices[0].innerHTML = yearlyPrices[0] + '<span class="text-lg text-zinc-500 font-normal tracking-normal">/mo</span>';
                    prices[1].innerHTML = yearlyPrices[1] + '<span class="text-lg text-zinc-500 font-normal tracking-normal">/mo</span>';
                } else {
                    prices[0].innerHTML = originalPrices[0] + '<span class="text-lg text-zinc-500 font-normal tracking-normal">/mo</span>';
                    prices[1].innerHTML = originalPrices[1] + '<span class="text-lg text-zinc-500 font-normal tracking-normal">/mo</span>';
                }
            });

            // 4. Parallax/Tilt Effect for Hero Card
            const heroCard = document.querySelector('.glass-card');
            if(heroCard) {
                document.addEventListener('mousemove', (e) => {
                    const x = (window.innerWidth / 2 - e.clientX) / 80;
                    const y = (window.innerHeight / 2 - e.clientY) / 80;
                    
                    const heroVisual = document.querySelector('.reveal-scale');
                    if(heroVisual && heroVisual.classList.contains('active')) {
                        heroVisual.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) translateY(0)`;
                    }
                });
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
      

<div className="splash">
<div className="flex flex-col items-center gap-6">
<iconify-icon className="text-lime-400 text-4xl animate-pulse" icon="solar:infinity-bold"></iconify-icon>
<div className="splash-line"></div>
</div>
</div>

<div className="fixed inset-0 bg-grid pointer-events-none z-0 opacity-40"></div>
<div className="grain"></div>
<div className="hidden md:block" id="cursor"></div>

<nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 bg-[#020402]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="flex items-center gap-2 hover-trigger" href="#">
<div className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_10px_#bef264]"></div>
<span className="text-lg tracking-tight font-semibold text-white">ORBIT</span>
</a>
<div className="hidden md:flex gap-10 text-xs font-medium tracking-wide text-zinc-400">
<a className="hover:text-lime-300 transition-colors hover-trigger" href="#features">Ecosystem</a>
<a className="hover:text-lime-300 transition-colors hover-trigger" href="#pricing">Access</a>
<a className="hover:text-lime-300 transition-colors hover-trigger" href="#testimony">Stories</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors hover-trigger hidden sm:block" href="#">Log In</a>
<button className="text-xs font-semibold text-[#020402] bg-lime-400 px-5 py-2.5 rounded-full hover:bg-lime-300 transition-colors hover-trigger shadow-[0_0_15px_rgba(190,242,100,0.3)]">
                    Get Started
                </button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] lime-glow pointer-events-none animate-pulse duration-[5000ms]"></div>
<div className="relative z-10 text-center max-w-6xl mx-auto px-6 flex flex-col items-center">
<div className="reveal-text delay-700 mb-8 inline-flex items-center gap-2 border border-lime-500/20 bg-lime-900/10 px-4 py-1.5 rounded-full backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-[ping_1.5s_infinite]"></span>
<span className="text-[10px] tracking-[0.2em] font-bold uppercase text-lime-300">System Online</span>
</div>
<h1 className="reveal-text delay-500 text-5xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-white leading-[0.95] mb-8">
                Retail <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-lime-200 to-emerald-200">Intelligence,</span><br/>
<span className="text-zinc-600 font-medium">Reimagined.</span>
</h1>
<p className="reveal-text delay-300 text-base md:text-lg text-zinc-400 font-light max-w-xl mx-auto mb-12 leading-relaxed tracking-wide">
                The operating system for modern commerce. Transform raw transaction data into predictive revenue streams with zero latency.
            </p>
<div className="reveal-text delay-100 flex flex-col md:flex-row gap-5 w-full justify-center">
<button className="hover-trigger group relative px-8 py-4 bg-white text-black text-sm font-semibold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
<span className="relative z-10 flex items-center gap-2">
                        Start Simulation
                        <iconify-icon className="-rotate-45 group-hover:rotate-0 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
<div className="absolute inset-0 bg-lime-300 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
</button>
<button className="hover-trigger px-8 py-4 glass-card text-white text-sm font-medium rounded-full hover:bg-white/5 transition-colors flex items-center gap-2 group border-white/10">
<iconify-icon className="text-lg text-lime-400" icon="solar:play-circle-linear"></iconify-icon>
<span>Watch Keynote</span>
</button>
</div>

<div className="reveal-scale delay-100 mt-24 relative w-full max-w-5xl aspect-[16/8] glass-card rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 group">
<div className="absolute inset-0 bg-gradient-to-tr from-[#020402] via-transparent to-[#020402]/80 z-10 pointer-events-none"></div>

<div className="absolute top-0 left-0 w-full h-full p-6 md:p-10 grid grid-cols-12 gap-6 opacity-80 transition-opacity duration-500 group-hover:opacity-100">

<div className="col-span-1 hidden md:flex flex-col gap-6 items-center border-r border-white/5 pr-6">
<div className="w-8 h-8 rounded-lg bg-lime-400/20 border border-lime-400/50 flex items-center justify-center text-lime-400"><iconify-icon icon="solar:home-linear"></iconify-icon></div>
<div className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center text-zinc-500 hover:text-white transition-colors"><iconify-icon icon="solar:graph-linear"></iconify-icon></div>
<div className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center text-zinc-500 hover:text-white transition-colors"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon></div>
<div className="mt-auto w-8 h-8 rounded-full bg-zinc-800 border border-white/10"></div>
</div>

<div className="col-span-12 md:col-span-11 flex flex-col gap-6">
<div className="flex justify-between items-end pb-4 border-b border-white/5">
<div>
<div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Total Revenue</div>
<div className="text-3xl font-medium text-white tracking-tight">$124,592<span className="text-lime-400 text-lg">.00</span></div>
</div>
<div className="flex gap-2">
<div className="px-3 py-1 rounded bg-lime-900/20 border border-lime-500/20 text-lime-400 text-xs flex items-center gap-1">
<iconify-icon icon="solar:trending-up-linear"></iconify-icon> +12.4%
                                </div>
</div>
</div>
<div className="grid grid-cols-3 gap-6 h-full">

<div className="col-span-2 bg-white/[0.02] rounded-xl border border-white/5 relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-2/3 flex items-end justify-between px-4 pb-4 gap-2">
<div className="w-full bg-gradient-to-t from-lime-500/20 to-transparent rounded-t-sm h-[40%] transition-all duration-1000 group-hover:h-[60%]"></div>
<div className="w-full bg-gradient-to-t from-lime-500/20 to-transparent rounded-t-sm h-[70%] transition-all duration-1000 group-hover:h-[50%]"></div>
<div className="w-full bg-gradient-to-t from-lime-500/20 to-transparent rounded-t-sm h-[50%] transition-all duration-1000 group-hover:h-[80%]"></div>
<div className="w-full bg-gradient-to-t from-lime-500/40 to-transparent rounded-t-sm h-[85%] border-t border-lime-400/30 shadow-[0_0_15px_rgba(190,242,100,0.1)]"></div>
<div className="w-full bg-gradient-to-t from-lime-500/20 to-transparent rounded-t-sm h-[60%]"></div>
</div>
</div>

<div className="col-span-1 flex flex-col gap-4">
<div className="h-1/2 bg-white/[0.02] rounded-xl border border-white/5 p-4 relative overflow-hidden">
<div className="absolute top-4 right-4 text-lime-400"><iconify-icon icon="solar:bolt-linear"></iconify-icon></div>
<div className="text-xs text-zinc-500">Speed</div>
<div className="mt-2 text-xl text-white">45ms</div>
</div>
<div className="h-1/2 bg-gradient-to-br from-lime-900/20 to-emerald-900/10 rounded-xl border border-lime-500/20 p-4 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="w-2 h-2 bg-lime-400 rounded-full animate-ping absolute top-4 right-4"></div>
<span className="text-sm font-medium text-lime-200">Live Sync</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-[#010201] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#020402] via-transparent to-[#020402] z-10 pointer-events-none"></div>
<div className="marquee-container overflow-hidden whitespace-nowrap relative">
<div className="marquee-content inline-flex gap-24 items-center">
<span className="text-xl font-semibold tracking-tighter text-zinc-700 hover:text-lime-400 transition-colors cursor-none">VERTEX</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-700 hover:text-lime-400 transition-colors cursor-none">NOVA LABS</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-700 hover:text-lime-400 transition-colors cursor-none">HYPERION</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-700 hover:text-lime-400 transition-colors cursor-none">SYNTH</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-700 hover:text-lime-400 transition-colors cursor-none">OBLIVION</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-700 hover:text-lime-400 transition-colors cursor-none">CYBERDYNE</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-700 hover:text-lime-400 transition-colors cursor-none">MASSIVE</span>

<span className="text-xl font-semibold tracking-tighter text-zinc-700 hover:text-lime-400 transition-colors cursor-none">VERTEX</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-700 hover:text-lime-400 transition-colors cursor-none">NOVA LABS</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-700 hover:text-lime-400 transition-colors cursor-none">HYPERION</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-700 hover:text-lime-400 transition-colors cursor-none">SYNTH</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-700 hover:text-lime-400 transition-colors cursor-none">OBLIVION</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-700 hover:text-lime-400 transition-colors cursor-none">CYBERDYNE</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-700 hover:text-lime-400 transition-colors cursor-none">MASSIVE</span>
</div>
</div>
</section>

<section className="relative py-32 px-6" id="features">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-24">
<div className="max-w-2xl">
<span className="reveal-text block text-lime-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 pl-1">Capabilities v2.0</span>
<h2 className="reveal-text text-4xl md:text-6xl font-medium tracking-tighter text-white">
                        Hardware meets <br/> <span className="text-zinc-700">Hyper-Intelligence.</span>
</h2>
</div>
<p className="reveal-text hidden md:block text-zinc-500 max-w-xs text-sm text-right leading-relaxed">
                    Designed for high-velocity environments where every millisecond translates to revenue.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 h-auto">

<div className="reveal-scale hover-trigger col-span-1 md:col-span-6 lg:col-span-8 glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden group min-h-[450px] flex flex-col justify-between border-t border-white/10">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-lime-900/10 z-0"></div>
<div className="relative z-10 flex justify-between items-start">
<div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
<iconify-icon className="text-lime-400 text-3xl" icon="solar:graph-new-up-linear"></iconify-icon>
</div>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-zinc-700"></span>
<span className="w-2 h-2 rounded-full bg-zinc-700"></span>
<span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse"></span>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105 pointer-events-none">
<svg className="w-full h-full text-lime-500/40 fill-none stroke-current stroke-[1]" viewbox="0 0 400 200">
<path className="path-animate" d="M0,150 Q50,150 100,100 T200,80 T300,120 T400,50"></path>
<defs>
<lineargradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: 'rgba(190,242,100,0)', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: 'rgba(190,242,100,0.5)', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="relative z-10">
<h3 className="text-3xl font-medium text-white mb-3 tracking-tight group-hover:text-lime-100 transition-colors">Predictive Inventory Flow</h3>
<p className="text-zinc-400 font-light max-w-md leading-relaxed">Our neural engine analyzes purchase patterns to suggest restocking before you even know you're running low. Precision forecasting.</p>
</div>
</div>

<div className="reveal-scale hover-trigger col-span-1 md:col-span-6 lg:col-span-4 glass-card rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-between border-t border-white/10">
<div className="absolute top-0 right-0 w-48 h-48 bg-lime-500/10 blur-[80px] rounded-full group-hover:bg-lime-500/20 transition-all duration-700"></div>
<div className="flex-1 flex items-center justify-center py-8">
<div className="w-full relative flex justify-center">

<svg className="w-40 h-40 -rotate-90" viewbox="0 0 120 120">
<circle cx="60" cy="60" fill="none" r="54" stroke="#27272a" strokeWidth="1"></circle>
<circle className="transition-all duration-[2000ms] ease-out group-hover:stroke-dashoffset-40 drop-shadow-[0_0_8px_rgba(190,242,100,0.4)]" cx="60" cy="60" fill="none" r="54" stroke="#bef264" stroke-dasharray="339" stroke-dashoffset="100" strokeWidth="2"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-4xl font-semibold text-white tracking-tighter">92<span className="text-lg text-zinc-500">%</span></span>
<span className="text-[10px] uppercase tracking-widest text-lime-400 mt-1">Retention</span>
</div>
</div>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Customer Loyalty</h3>
<p className="text-zinc-500 text-sm font-light">Embedded tracking in every transaction.</p>
</div>
</div>

<div className="reveal-scale hover-trigger col-span-1 md:col-span-6 glass-card rounded-3xl p-8 flex flex-col justify-between group min-h-[320px] border-t border-white/10 aurora-gradient">
<div className="w-full flex-1 flex items-center justify-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
<div className="w-1.5 h-8 bg-lime-400/50 rounded-full animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="w-1.5 h-12 bg-lime-400 rounded-full animate-[pulse_1.2s_ease-in-out_infinite] shadow-[0_0_10px_#bef264]"></div>
<div className="w-1.5 h-6 bg-lime-400/50 rounded-full animate-[pulse_0.8s_ease-in-out_infinite]"></div>
<div className="w-1.5 h-10 bg-lime-400/80 rounded-full animate-[pulse_1.5s_ease-in-out_infinite]"></div>
<div className="w-1.5 h-5 bg-lime-400/30 rounded-full animate-[pulse_0.9s_ease-in-out_infinite]"></div>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Silent Sync</h3>
<p className="text-zinc-400 font-light text-sm">Updates happen in the background. No downtime, ever.</p>
</div>
</div>

<div className="reveal-scale hover-trigger col-span-1 md:col-span-6 glass-card rounded-3xl p-8 flex flex-col justify-between group min-h-[320px] border-t border-white/10">
<div className="flex gap-3 mb-6 items-center h-full">
<div className="w-12 h-12 rounded-full border border-white/10 bg-zinc-900 flex items-center justify-center z-30 transition-transform duration-300 group-hover:-translate-x-2">
<span className="text-xs font-medium text-white">JD</span>
</div>
<div className="w-12 h-12 rounded-full border border-white/10 bg-zinc-900 flex items-center justify-center -ml-6 z-20 transition-transform duration-300 group-hover:-translate-x-1">
<span className="text-xs font-medium text-white">AR</span>
</div>
<div className="w-12 h-12 rounded-full border border-lime-500/50 bg-lime-900/20 flex items-center justify-center -ml-6 z-10 shadow-[0_0_15px_rgba(190,242,100,0.2)]">
<iconify-icon className="text-lime-400" icon="solar:add-linear"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Team Orchestration</h3>
<p className="text-zinc-400 font-light text-sm">Granular permissions with biometric authentication support.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-y border-white/5 bg-[#010201] relative" id="testimony">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-lime-900/10 via-transparent to-transparent opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="reveal-text text-3xl font-medium tracking-tight text-white mb-16 text-center">Voices from the Floor</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="reveal-scale glass-card p-10 rounded-2xl border border-white/5 hover:border-lime-500/30 transition-colors group">
<div className="mb-8 text-lime-400 flex gap-1">
<iconify-icon className="text-sm shadow-[0_0_10px_rgba(190,242,100,0.4)]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-lg font-light text-zinc-300 mb-8 leading-relaxed group-hover:text-white transition-colors">"It doesn't feel like software. It feels like we hired a CMO who works 24/7. The automated campaigns are frighteningly accurate."</p>
<div className="flex items-center gap-4 border-t border-white/5 pt-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-lime-900 to-emerald-900 border border-white/10"></div>
<div>
<div className="text-sm font-semibold text-white">Elena R.</div>
<div className="text-xs text-zinc-500">Director at LuxeRetail</div>
</div>
</div>
</div>

<div className="reveal-scale glass-card p-10 rounded-2xl border border-white/5 hover:border-lime-500/30 transition-colors md:translate-y-12 bg-white/[0.03]">
<div className="mb-8 text-lime-400 flex gap-1">
<iconify-icon className="text-sm shadow-[0_0_10px_rgba(190,242,100,0.4)]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-lg font-light text-zinc-300 mb-8 leading-relaxed group-hover:text-white transition-colors">"We cut our checkout times by 40% and increased upsells by 15% in the first month. The interface is pure elegance."</p>
<div className="flex items-center gap-4 border-t border-white/5 pt-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-lime-900 to-emerald-900 border border-white/10"></div>
<div>
<div className="text-sm font-semibold text-white">Marcus T.</div>
<div className="text-xs text-zinc-500">Founder, Coffee Lab</div>
</div>
</div>
</div>

<div className="reveal-scale glass-card p-10 rounded-2xl border border-white/5 hover:border-lime-500/30 transition-colors group">
<div className="mb-8 text-lime-400 flex gap-1">
<iconify-icon className="text-sm shadow-[0_0_10px_rgba(190,242,100,0.4)]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-lg font-light text-zinc-300 mb-8 leading-relaxed group-hover:text-white transition-colors">"Finally, a POS that understands the aesthetics of high-end retail. No clunky gray boxes. Just smooth, dark glass."</p>
<div className="flex items-center gap-4 border-t border-white/5 pt-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-lime-900 to-emerald-900 border border-white/10"></div>
<div>
<div className="text-sm font-semibold text-white">Sarah Jenkins</div>
<div className="text-xs text-zinc-500">Owner, Noir Boutique</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="pricing">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-5xl mx-auto relative z-10">
<div className="text-center mb-20">
<h2 className="reveal-text text-4xl font-medium tracking-tight text-white mb-6">Choose your velocity</h2>
<div className="reveal-text flex items-center justify-center gap-4">
<span className="text-sm text-zinc-400 font-medium">Monthly</span>
<label className="relative inline-flex items-center cursor-none hover-trigger">
<input className="sr-only peer toggle-checkbox" id="pricing-toggle" type="checkbox"/>
<div className="w-14 h-7 bg-zinc-800 peer-focus:outline-none rounded-full peer toggle-label peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all transition-colors duration-300"></div>
</label>
<span className="text-sm text-white font-medium">Yearly <span className="text-lime-400 text-xs ml-1 bg-lime-900/30 px-2 py-0.5 rounded-full border border-lime-500/20">-20%</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

<div className="reveal-scale glass-card rounded-3xl p-10 border border-white/5 flex flex-col hover:border-white/20 transition-all duration-300 group hover:-translate-y-2">
<div className="mb-8">
<h3 className="text-xl font-semibold text-white mb-2">Base</h3>
<p className="text-zinc-500 text-sm h-10 font-light">Essential tools for independent retailers.</p>
</div>
<div className="text-6xl font-medium text-white mb-8 tracking-tighter pricing-amount">$49<span className="text-lg text-zinc-500 font-normal tracking-normal">/mo</span></div>
<ul className="space-y-5 mb-12 flex-1">
<li className="flex items-center gap-3 text-sm text-zinc-300 font-light">
<iconify-icon className="text-zinc-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Single Terminal
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300 font-light">
<iconify-icon className="text-zinc-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Basic Analytics
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300 font-light">
<iconify-icon className="text-zinc-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> 5 Staff Accounts
                        </li>
</ul>
<button className="w-full py-4 rounded-xl border border-white/10 text-white text-sm font-semibold hover:bg-white hover:text-black transition-all hover-trigger tracking-wide">
                        Select Base
                    </button>
</div>

<div className="reveal-scale glass-card rounded-3xl p-10 border border-lime-500/30 bg-gradient-to-b from-lime-900/5 to-transparent flex flex-col relative overflow-hidden group hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(190,242,100,0.05)] transition-all duration-300">
<div className="absolute top-0 right-0 px-5 py-2 bg-lime-400 text-[10px] font-bold uppercase tracking-widest text-[#020402] rounded-bl-2xl">Recommended</div>
<div className="mb-8">
<h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                            Orbit Pro 
                            <iconify-icon className="text-lime-400" icon="solar:crown-minimalistic-bold"></iconify-icon>
</h3>
<p className="text-zinc-400 text-sm h-10 font-light">Advanced intelligence for scaling brands.</p>
</div>
<div className="text-6xl font-medium text-white mb-8 tracking-tighter pricing-amount">$129<span className="text-lg text-zinc-500 font-normal tracking-normal">/mo</span></div>
<ul className="space-y-5 mb-12 flex-1">
<li className="flex items-center gap-3 text-sm text-white font-medium">
<iconify-icon className="text-lime-400 text-lg shadow-[0_0_10px_rgba(190,242,100,0.5)] rounded-full" icon="solar:check-circle-bold"></iconify-icon> Unlimited Terminals
                        </li>
<li className="flex items-center gap-3 text-sm text-white font-medium">
<iconify-icon className="text-lime-400 text-lg shadow-[0_0_10px_rgba(190,242,100,0.5)] rounded-full" icon="solar:check-circle-bold"></iconify-icon> AI Inventory Prediction
                        </li>
<li className="flex items-center gap-3 text-sm text-white font-medium">
<iconify-icon className="text-lime-400 text-lg shadow-[0_0_10px_rgba(190,242,100,0.5)] rounded-full" icon="solar:check-circle-bold"></iconify-icon> Automated Marketing Suite
                        </li>
<li className="flex items-center gap-3 text-sm text-white font-medium">
<iconify-icon className="text-lime-400 text-lg shadow-[0_0_10px_rgba(190,242,100,0.5)] rounded-full" icon="solar:check-circle-bold"></iconify-icon> 24/7 Priority Concierge
                        </li>
</ul>
<button className="w-full py-4 rounded-xl bg-lime-400 text-[#020402] text-sm font-bold hover:bg-lime-300 transition-all hover-trigger shadow-[0_0_20px_rgba(190,242,100,0.2)] tracking-wide">
                        Initialize Pro
                    </button>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-3xl mx-auto border-t border-white/5">
<h2 className="reveal-text text-2xl font-medium tracking-tight text-white mb-12">System Inquiries</h2>
<div className="space-y-4">

<details className="reveal-text group glass-card rounded-xl border border-white/5 open:bg-white/[0.03] transition-all duration-300">
<summary className="flex cursor-none items-center justify-between p-6 list-none hover-trigger">
<span className="text-sm font-medium text-zinc-200 group-hover:text-lime-400 transition-colors">Is hardware included in the subscription?</span>
<span className="transition group-open:rotate-45 text-zinc-500 group-hover:text-white">
<iconify-icon className="text-xl" icon="solar:add-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 font-light leading-relaxed border-t border-white/5 pt-4 mt-2">
                    Our software runs on iPad Pros and custom Android terminals. We offer a curated hardware kit, or you can bring your own device.
                </div>
</details>

<details className="reveal-text group glass-card rounded-xl border border-white/5 open:bg-white/[0.03] transition-all duration-300">
<summary className="flex cursor-none items-center justify-between p-6 list-none hover-trigger">
<span className="text-sm font-medium text-zinc-200 group-hover:text-lime-400 transition-colors">How does the offline mode work?</span>
<span className="transition group-open:rotate-45 text-zinc-500 group-hover:text-white">
<iconify-icon className="text-xl" icon="solar:add-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 font-light leading-relaxed border-t border-white/5 pt-4 mt-2">
                    Orbit stores data locally in an encrypted vault. Once connectivity is restored, it syncs seamlessly with the cloud without data loss.
                </div>
</details>

<details className="reveal-text group glass-card rounded-xl border border-white/5 open:bg-white/[0.03] transition-all duration-300">
<summary className="flex cursor-none items-center justify-between p-6 list-none hover-trigger">
<span className="text-sm font-medium text-zinc-200 group-hover:text-lime-400 transition-colors">Can I migrate data from Square or Shopify?</span>
<span className="transition group-open:rotate-45 text-zinc-500 group-hover:text-white">
<iconify-icon className="text-xl" icon="solar:add-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 font-light leading-relaxed border-t border-white/5 pt-4 mt-2">
                    Yes. Our "White Glove" concierge service handles 100% of the migration for Pro plan members.
                </div>
</details>
</div>
</section>

<footer className="pt-32 pb-12 border-t border-white/5 bg-[#010101] px-6 relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-lime-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-2">
<a className="text-3xl font-semibold tracking-tighter text-white mb-6 block" href="#">ORBIT</a>
<p className="text-zinc-500 text-sm font-light max-w-xs leading-relaxed">
                        Defining the future of transaction architecture. <br/>
                        Designed in Tokyo, Code in San Francisco.
                    </p>
</div>
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 text-lime-400">Platform</h4>
<ul className="space-y-4 text-sm font-medium text-zinc-400">
<li><a className="hover:text-white transition-colors hover-trigger" href="#">Intelligence</a></li>
<li><a className="hover:text-white transition-colors hover-trigger" href="#">Hardware</a></li>
<li><a className="hover:text-white transition-colors hover-trigger flex items-center gap-2" href="#">API Status <span className="w-2 h-2 rounded-full bg-lime-500"></span></a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 text-lime-400">Legal</h4>
<ul className="space-y-4 text-sm font-medium text-zinc-400">
<li><a className="hover:text-white transition-colors hover-trigger" href="#">Privacy Protocol</a></li>
<li><a className="hover:text-white transition-colors hover-trigger" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
<p className="text-xs text-zinc-600 font-medium">© 2024 Orbit Systems Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="text-zinc-500 hover:text-lime-400 transition-colors hover-trigger" href="#"><iconify-icon className="text-lg" icon="solar:brand-x-linear"></iconify-icon></a>
<a className="text-zinc-500 hover:text-lime-400 transition-colors hover-trigger" href="#"><iconify-icon className="text-lg" icon="solar:brand-instagram-linear"></iconify-icon></a>
<a className="text-zinc-500 hover:text-lime-400 transition-colors hover-trigger" href="#"><iconify-icon className="text-lg" icon="solar:brand-github-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
