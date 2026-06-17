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
  


              document.addEventListener("DOMContentLoaded", () => {
                const container = document.getElementById('dashboard-grid');
                const counters = document.querySelectorAll('[data-counter-target]');
                const LOOP_DURATION = 6000;
                let counterInterval;

                const runCounterAnimation = () => {
                  counters.forEach(counter => {
                    const target = +counter.getAttribute('data-counter-target');
                    const prefix = counter.getAttribute('data-counter-prefix') || '';
                    const suffix = counter.getAttribute('data-counter-suffix') || '';

                    let count = 0;
                    const duration = 1500;
                    const increment = target / (duration / 20);

                    counter.innerText = prefix + '0' + suffix;

                    const timer = setInterval(() => {
                      count += increment;
                      if (count >= target) {
                        count = target;
                        clearInterval(timer);
                      }
                      counter.innerText = prefix + Math.ceil(count) + suffix;
                    }, 20);
                  });
                };

                const observer = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      container.classList.add('in-view');
                      runCounterAnimation();
                      if (!counterInterval) {
                        counterInterval = setInterval(() => {
                          if (container.classList.contains('in-view')) {
                             runCounterAnimation();
                          }
                        }, LOOP_DURATION);
                      }
                    } else {
                       container.classList.remove('in-view');
                    }
                  });
                }, { threshold: 0.2 });

                observer.observe(container);
              });
            


              (function() {
                const testimonials = [
                  {
                    quote: "I finally feel in control of my crypto. Dryp is hands down the best wallet experience on Solana.",
                    name: "Michelle Lim",
                    role: "NFT Artist",
                    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop"
                  },
                  {
                    quote: "Staking is so easy. I love that I can do everything inside one app without connecting to five different sites.",
                    name: "David Chen",
                    role: "DeFi User",
                    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop"
                  },
                  {
                    quote: "The design is stunning. It doesn't feel like a finance app, it feels like the future.",
                    name: "Alex Rivera",
                    role: "Designer",
                    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                  }
                ];

                let currentIndex = 0;
                const imgEl = document.getElementById('testimonial-img');
                const quoteEl = document.getElementById('testimonial-quote');
                const nameEl = document.getElementById('testimonial-name');
                const roleEl = document.getElementById('testimonial-role');

                function update(index) {
                  const t = testimonials[index];
                  if(imgEl && quoteEl && nameEl && roleEl) {
                      imgEl.style.opacity = '0';
                      quoteEl.style.opacity = '0';

                      setTimeout(() => {
                          imgEl.src = t.img;
                          quoteEl.innerText = '"' + t.quote + '"';
                          nameEl.innerText = t.name;
                          roleEl.innerText = t.role;

                          imgEl.style.opacity = '1';
                          quoteEl.style.opacity = '1';
                      }, 300);
                  }
                }

                window.nextTestimonial = function() {
                  currentIndex = (currentIndex + 1) % testimonials.length;
                  update(currentIndex);
                };

                window.prevTestimonial = function() {
                  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
                  update(currentIndex);
                };
              })();
            


      document.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.animationPlayState = 'running';
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        document.querySelectorAll('.scroll-item').forEach(el => observer.observe(el));
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
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>

</div></div>

<div className="fixed inset-0 z-0 pointer-events-none" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[120px] opacity-40" style={{}}></div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-soft-light" style={{}}></div>
</div>

<nav className="flex z-50 w-full pt-6 pr-4 pl-4 fixed top-0 left-0 right-0 items-center justify-center">
<div className="flex scroll-item scroll-fade-up bg-black/90 w-full max-w-5xl border-white/10 border rounded-full pt-2 pr-2 pb-2 pl-6 relative shadow-2xl backdrop-blur-md items-center justify-between" style={{animationPlayState: 'running'}}>

<a className="inline-flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-oswald font-bold text-lg">D</div>
<span className="font-oswald text-xl font-medium tracking-tight text-white">Dryp</span>
</a>

<div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
<a className="text-[14px] font-medium text-white hover:text-gray-300 transition-colors font-sans tracking-wide" href="#" style={{}}>
            Features
          </a>
<a className="text-[14px] font-medium text-white hover:text-gray-300 transition-colors font-sans tracking-wide" href="#" style={{}}>
            Security
          </a>
<a className="text-[14px] font-medium text-white hover:text-gray-300 transition-colors font-sans tracking-wide" href="#" style={{}}>
            Support
          </a>
<a className="text-[14px] font-medium text-white hover:text-gray-300 transition-colors font-sans tracking-wide" href="#" style={{}}>
            FAQs
          </a>
</div>

<div className="flex items-center gap-4">

<button className="md:hidden p-2 text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>

<a className="hidden md:block bg-white text-black hover:bg-gray-200 transition-colors px-6 py-2.5 rounded-full text-sm font-semibold tracking-tight font-sans" href="#" style={{}}>
            Download App
          </a>
</div>
</div>
</nav>

<main className="flex flex-col z-10 pt-40 pr-6 pl-6 relative gap-x-3 gap-y-x-3 items-center justify-center">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 hover:bg-white/10 transition-colors cursor-pointer group scroll-item scroll-fade-up" style={{animationPlayState: 'running'}}>
<span className="bg-purple-500/20 text-purple-400 rounded px-1.5 py-0.5 text-[10px] font-medium tracking-wide font-sans" style={{}}>
          BETA
        </span>
<span className="text-xs text-gray-300 font-medium group-hover:text-white transition-colors pr-1 font-sans" style={{}}>
          Dryp Mobile is live
        </span>
<iconify-icon className="text-gray-500 group-hover:text-white transition-colors" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>

<h1 className="md:text-7xl leading-[1.1] scroll-item scroll-blur-in delay-100 text-5xl font-light tracking-tight font-oswald text-center max-w-4xl mr-auto ml-auto" style={{animationPlayState: 'running'}}>Ditch the card. Keep the rewards.
</h1>

<p className="leading-relaxed scroll-item scroll-fade-up delay-200 text-xl font-light text-gray-400 font-sans text-center max-w-2xl mt-8 mr-auto ml-auto" style={{animationPlayState: 'running'}}>Stop Paying the "Card Tax" on Your Own Money. Subheadline: Traditional cards take a cut of every transaction. Dryp slashes fees by 80% and automates your accounting, putting thousands back into your bottom line.</p>

<div className="flex flex-col sm:flex-row gap-4 scroll-item scroll-fade-up delay-300 mt-10 gap-x-4 gap-y-4 items-center" style={{animationPlayState: 'running'}}>
<button className="sm:w-auto hover:bg-purple-500/10 hover:border-purple-400 hover:shadow-[0_0_35px_rgba(168,85,247,0.6),inset_0_0_20px_rgba(168,85,247,0.4)] hover:scale-[1.02] transition-all duration-300 flex group text-base font-medium text-white bg-black/60 w-full border-purple-500 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-[0_0_20px_rgba(168,85,247,0.5),inset_0_0_10px_rgba(168,85,247,0.2)] gap-x-2 gap-y-2 items-center justify-center">Join waitlist </button>
</div>

<div className="flex scroll-item scroll-blur-in delay-500 w-full h-[750px] max-w-5xl mt-32 mr-auto ml-auto relative items-center justify-center" style={{animationPlayState: 'running'}}>

<div className="absolute left-0 lg:left-12 top-20 z-20 hidden md:flex items-center gap-3 p-2.5 pr-4 bg-[#111] border border-white/10 rounded-lg shadow-2xl animate-[bounce_6s_infinite]">
<div className="w-8 h-8 rounded bg-green-900/30 flex items-center justify-center border border-green-500/20">
<iconify-icon className="text-green-400" height="16" icon="solar:wallet-money-linear" width="16"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-400 font-sans" style={{}}>
            + 14.5 SOL Received
          </span>
</div>

<div className="absolute left-4 lg:-left-4 top-64 z-10 hidden md:flex items-center gap-3 p-2.5 pr-4 bg-[#111] border border-white/10 rounded-lg shadow-2xl animate-[pulse_5s_infinite]">
<div className="w-8 h-8 rounded bg-red-900/30 flex items-center justify-center border border-red-500/20">
<iconify-icon className="text-red-400" height="16" icon="solar:plain-linear" width="16"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-400 font-sans" style={{}}>
            - 250 USDC Sent
          </span>
</div>

<div className="absolute left-8 lg:left-0 bottom-48 z-20 hidden md:flex items-center gap-3 p-2.5 pr-4 bg-[#111] border border-white/10 rounded-lg shadow-2xl animate-[bounce_8s_infinite]">
<div className="w-8 h-8 rounded bg-purple-900/30 flex items-center justify-center border border-purple-500/20">
<iconify-icon className="text-purple-400" height="16" icon="solar:gallery-linear" width="16"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-400 font-sans" style={{}}>
            New NFT Minted
          </span>
</div>

<div className="absolute right-0 lg:right-24 top-10 z-20 hidden md:flex items-center gap-3 p-2.5 pr-4 bg-[#111] border border-white/10 rounded-lg shadow-2xl animate-[bounce_7s_infinite]">
<div className="w-8 h-8 rounded bg-teal-900/30 flex items-center justify-center border border-teal-500/20">
<iconify-icon className="text-teal-400" height="16" icon="solar:refresh-circle-linear" width="16"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-400 font-sans" style={{}}>
            Swapped SOL to USDC
          </span>
</div>

<div className="absolute right-4 lg:right-0 top-48 z-10 hidden md:flex items-center gap-3 p-2.5 pr-4 bg-[#111] border border-white/10 rounded-lg shadow-2xl animate-[pulse_4s_infinite]">
<div className="w-8 h-8 rounded bg-pink-900/30 flex items-center justify-center border border-pink-500/20">
<iconify-icon className="text-pink-400" height="16" icon="solar:graph-up-linear" width="16"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-400 font-sans" style={{}}>
            + 6.5% Staking APY
          </span>
</div>

<div className="absolute right-8 lg:-right-4 bottom-32 z-10 hidden md:flex items-center gap-3 p-2.5 pr-4 bg-[#111] border border-white/10 rounded-lg shadow-2xl animate-[pulse_6s_infinite]">
<div className="w-8 h-8 rounded bg-blue-900/30 flex items-center justify-center border border-blue-500/20">
<iconify-icon className="text-blue-400" height="16" icon="solar:pie-chart-2-linear" width="16"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-400 font-sans" style={{}}>
            + 12.5% Portfolio
          </span>
</div>

<div className="border-[8px] border-[#222] overflow-hidden flex flex-col min-h-[820px] bg-[#050505] w-full max-w-[380px] max-h-[720px] ring-white/10 ring-1 rounded-[3rem] mr-auto ml-auto relative shadow-2xl">

<div className="h-12 w-full flex justify-between items-end px-8 pb-2 z-20 bg-[#050505]">
<span className="text-[13px] font-semibold text-white tracking-widest font-sans">
              9:41
            </span>
<div className="flex gap-1.5 items-center">
<iconify-icon className="text-white" height="16" icon="solar:signal-linear" width="16"></iconify-icon>
<iconify-icon className="text-white" height="16" icon="solar:wi-fi-linear" width="16"></iconify-icon>
<div className="w-6 h-3 rounded-[4px] border border-white/30 relative ml-0.5 p-0.5">
<div className="h-full bg-white rounded-[2px] w-full"></div>
</div>
</div>
</div>

<div className="px-6 pt-2 pb-4 flex items-center justify-between z-10 bg-[#050505]">
<h1 className="text-2xl text-white font-oswald font-light tracking-tight">
              Wallet
            </h1>
<div className="flex items-center gap-4">
<button className="text-white hover:text-gray-300 transition-colors">
<iconify-icon height="22" icon="solar:bell-linear" width="22"></iconify-icon>
</button>
<button className="w-9 h-9 rounded-full bg-[#27272A] flex items-center justify-center text-white hover:bg-[#3F3F46] transition-colors">
<iconify-icon height="20" icon="solar:qr-code-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar px-5 pb-[120px]">

<div className="overflow-visible border-white/[0.08] bg-[#101018] border rounded-[2rem] mb-6 pt-5 pr-5 pb-5 pl-5 relative shadow-2xl">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 rounded-[2rem] pointer-events-none"></div>
<div className="flex justify-between items-start mb-8 relative z-10">
<div className="">
<h2 className="text-3xl font-light text-white tracking-tight font-oswald">
                    $24,592.00
                  </h2>
<p className="text-[13px] text-green-400 mt-1 font-medium font-sans flex items-center gap-1">
<iconify-icon height="12" icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
                    +$1,240.50 (5.2%)
                  </p>
</div>
</div>

<div className="relative h-48 w-full">
<svg className="overflow-visible w-[282px] h-[192px]" data-icon-replaced="true" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '282px', height: '192px'}} viewbox="0 0 300 100">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#a855f7" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#a855f7" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,80 C50,80 50,40 100,60 C150,80 150,20 200,40 C250,60 250,10 300,30 V100 H0 Z" fill="url(#chartGradient)"></path>
<path d="M0,80 C50,80 50,40 100,60 C150,80 150,20 200,40 C250,60 250,10 300,30" fill="none" stroke="#a855f7" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="border-white/[0.08] bg-[#101018] border rounded-[2rem] pt-5 pr-5 pb-5 pl-5 relative">
<div className="flex justify-between items-center mb-6">
<h2 className="text-lg font-semibold text-white tracking-tight font-sans">
                  Assets
                </h2>
</div>
<div className="space-y-6">

<div className="flex gap-4 items-center group cursor-pointer">
<div className="w-10 h-10 rounded-full overflow-hidden bg-[#1E1E22] shrink-0 flex items-center justify-center border border-white/10">
<div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-[10px] font-bold">S</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center">
<h3 className="text-sm font-medium text-white font-sans">Solana</h3>
<span className="text-sm font-medium text-white font-sans">$14,250.00</span>
</div>
<div className="flex justify-between items-center">
<p className="text-xs text-gray-500 font-sans">145 SOL</p>
<span className="text-xs text-green-400 font-sans">+6.2%</span>
</div>
</div>
</div>

<div className="flex gap-4 items-center group cursor-pointer">
<div className="w-10 h-10 rounded-full overflow-hidden bg-[#1E1E22] shrink-0 flex items-center justify-center border border-white/10">
<div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-bold">$</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center">
<h3 className="text-sm font-medium text-white font-sans">USDC</h3>
<span className="text-sm font-medium text-white font-sans">$8,240.00</span>
</div>
<div className="flex justify-between items-center">
<p className="text-xs text-gray-500 font-sans">8,240 USDC</p>
<span className="text-xs text-gray-400 font-sans">0.0%</span>
</div>
</div>
</div>

<div className="flex gap-4 items-center group cursor-pointer">
<div className="w-10 h-10 rounded-full overflow-hidden bg-[#1E1E22] shrink-0 flex items-center justify-center border border-white/10">
<div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-[10px] font-bold">₿</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center">
<h3 className="text-sm font-medium text-white font-sans">Bitcoin</h3>
<span className="text-sm font-medium text-white font-sans">$2,102.00</span>
</div>
<div className="flex justify-between items-center">
<p className="text-xs text-gray-500 font-sans">0.05 BTC</p>
<span className="text-xs text-red-400 font-sans">-1.2%</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full h-[90px] z-30 px-4">
<div className="absolute inset-x-0 bottom-0 h-[80px] bg-[#12121A]/95 backdrop-blur-2xl border-t border-white/[0.08] rounded-t-[2.5rem]"></div>
<div className="relative h-full flex items-end justify-between px-6 pb-5">
<button className="flex flex-col items-center gap-1.5 text-white w-16 group mb-1">
<iconify-icon className="group-hover:scale-110 transition-transform" height="24" icon="solar:wallet-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium font-sans">Wallet</span>
</button>
<button className="flex flex-col items-center gap-1.5 text-gray-500 hover:text-white transition-colors w-16 group mb-1">
<iconify-icon className="group-hover:scale-110 transition-transform" height="24" icon="solar:gallery-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium font-sans">NFTs</span>
</button>
<div className="relative -top-5 flex flex-col items-center justify-center w-16 group cursor-pointer z-50">
<div className="w-[3.5rem] h-[3.5rem] rounded-full bg-gradient-to-tr from-[#a855f7] to-[#ec4899] flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.5)] border-[5px] border-[#050505] group-hover:scale-105 transition-transform duration-300 ring-1 ring-white/10">
<iconify-icon className="text-white" height="24" icon="solar:transfer-horizontal-linear" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-semibold text-white mt-2 drop-shadow-md font-sans">
                  Swap
                </span>
</div>
<button className="flex flex-col items-center gap-1.5 text-gray-500 hover:text-white transition-colors w-16 group mb-1">
<iconify-icon className="group-hover:scale-110 transition-transform" height="24" icon="solar:graph-new-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium font-sans">Activity</span>
</button>
<button className="flex flex-col items-center gap-1.5 text-gray-500 hover:text-white transition-colors w-16 group mb-1">
<iconify-icon className="group-hover:scale-110 transition-transform" height="24" icon="solar:settings-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium font-sans">Settings</span>
</button>
</div>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-40 hover:bg-white/40 transition-colors"></div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-0 pointer-events-none"></div>
</div>

<section className="z-10 w-full max-w-7xl mt-32 mr-auto mb-24 ml-auto pr-0 pl-0 relative space-y-20">

<div className="flex flex-col bg-[#0A0A0C] border-[#ffffff]/10 border rounded-3xl mt-24 mb-24 pt-8 pr-8 pb-16 pl-8 gap-x-16 gap-y-16" style={{}}>

<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 w-full">
<div className="flex flex-col gap-6 max-w-3xl">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center scroll-item scroll-fade-up" style={{animationPlayState: 'running'}}>
<span className="flex items-center justify-center w-7 h-7 rounded-lg bg-purple-500/10 text-[11px] font-mono font-medium text-purple-400 border border-purple-500/20 shadow-[0_0_10px_rgba(168,85,247,0.2)] font-sans" style={{}}>
                  01
                </span>
<span className="text-sm font-medium tracking-widest uppercase text-gray-500 font-sans" style={{}}>
                  Features
                </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] font-oswald font-light tracking-tight scroll-item scroll-fade-up delay-100" style={{animationPlayState: 'running'}}>
                Secure by
                <span className="text-gray-600 font-oswald font-light tracking-tight" style={{}}>
                  Design
                </span>
</h2>
<p className="leading-relaxed text-lg font-light text-gray-400 max-w-xl scroll-item scroll-fade-up delay-200" style={{animationPlayState: 'running'}}>
                Your keys, your crypto. Dryp is non-custodial, meaning you have full control over your private keys and assets.
              </p>
</div>
<button className="group flex items-center gap-2 pl-6 pr-5 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-all duration-200 font-sans whitespace-nowrap scroll-item scroll-fade-up delay-300" style={{animationPlayState: 'running'}}>
<span className="font-sans" style={{}}>Read Security Audit</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[400px] gap-6 gap-x-6 gap-y-6" id="dashboard-grid">

<div className="relative h-[400px] rounded-[2rem] bg-[#0A0A0C] border border-white/10 p-8 overflow-hidden flex flex-col justify-between group hover:border-white/[0.15] transition-colors scroll-item scroll-fade-up delay-100" style={{animationPlayState: 'running'}}>

<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C]"></div>
<div className="pointer-events-none absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="relative z-10">
<h3 className="text-4xl font-light text-white tracking-tight font-oswald">
                  Self-Custody
                </h3>
<p className="mt-2 text-lg font-light leading-relaxed text-gray-400">
                  Your keys are encrypted on your device. Only you can access your funds.
                </p>
</div>

<div className="relative z-10 h-32 w-full flex items-center justify-center">
<iconify-icon className="text-purple-500 opacity-80" height="80" icon="solar:shield-check-linear" width="80"></iconify-icon>
</div>
</div>

<div className="relative rounded-[2rem] bg-[#0A0A0C] border border-white/10 p-8 overflow-hidden flex flex-col h-[400px] md:h-[400px] lg:h-[824px] lg:row-span-2 group hover:border-white/[0.15] transition-colors scroll-item scroll-fade-up delay-200" style={{animationPlayState: 'running'}}>

<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C]"></div>
<div className="pointer-events-none absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle, black 40%, transparent 100%)', WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 100%)'}}></div>

<div className="relative z-10">
<h3 className="text-4xl font-light text-white tracking-tight font-oswald">
                  Built for Solana
                </h3>
<p className="mt-2 text-lg font-light leading-relaxed text-gray-400 max-w-[26rem]">
                  Experience lightning fast transactions and near-zero fees. Optimized specifically for the Solana blockchain ecosystem.
                </p>
</div>

<div className="relative z-10 flex-1 flex items-center justify-center pt-6">
<div className="relative w-64 h-64 flex items-center justify-center">
<div className="absolute inset-0 border-2 border-purple-500/20 rounded-full animate-[spin-slow_10s_linear_infinite]"></div>
<div className="absolute inset-4 border-2 border-blue-500/20 rounded-full animate-[spin-slow_15s_linear_infinite_reverse]"></div>
<div className="absolute inset-8 border-2 border-green-500/20 rounded-full animate-[spin-slow_8s_linear_infinite]"></div>
<iconify-icon className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" height="80" icon="solar:bolt-linear" width="80"></iconify-icon>
</div>
</div>
</div>

<div className="relative h-[400px] rounded-[2rem] bg-[#0A0A0C] border border-white/10 p-8 overflow-hidden flex flex-col group hover:border-white/[0.15] transition-colors scroll-item scroll-fade-up delay-300" style={{animationPlayState: 'running'}}>

<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C]"></div>
<div className="pointer-events-none absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle, black 40%, transparent 100%)', WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 100%)'}}></div>
<div className="relative z-10">
<h3 className="text-4xl font-light text-white tracking-tight font-oswald">
                  Stake &amp; Earn
                </h3>
<p className="mt-2 text-lg font-light leading-relaxed text-gray-400">
                  Earn rewards by staking your SOL directly within the app.
                </p>
</div>
<div className="relative z-10 flex-1 flex items-center justify-center">

<div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center shadow-[0_12px_30px_-10px_rgba(16,185,129,0.4)] animate-scale relative z-10">
<span className="text-4xl text-white font-oswald font-light tracking-tight flex items-baseline">
<span data-counter-suffix="%" data-counter-target="7">0%</span>
<span className="text-lg ml-1">APY</span>
</span>
</div>
</div>
</div>

<div className="relative h-[400px] rounded-[2rem] bg-[#0A0A0C] border border-white/10 p-8 overflow-hidden flex flex-col justify-end group hover:border-white/[0.15] transition-colors scroll-item scroll-fade-up delay-500" style={{animationPlayState: 'running'}}>

<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C]"></div>
<div className="pointer-events-none absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle, black 40%, transparent 100%)', WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 100%)'}}></div>
<div className="absolute inset-0 flex items-center justify-center -translate-y-10 z-10 opacity-30">
<div className="grid grid-cols-2 gap-2 transform rotate-12 scale-110">
<div className="w-20 h-20 bg-white/10 rounded-lg"></div>
<div className="w-20 h-20 bg-white/10 rounded-lg"></div>
<div className="w-20 h-20 bg-white/10 rounded-lg"></div>
<div className="w-20 h-20 bg-white/10 rounded-lg"></div>
</div>
</div>
<div className="relative z-10">
<h3 className="text-4xl font-light text-white tracking-tight font-oswald">
                  NFT Gallery
                </h3>
<p className="mt-2 text-lg font-light leading-relaxed text-gray-400">
                  Showcase your digital collectibles in a beautiful interface.
                </p>
</div>
</div>

<div className="relative h-[400px] rounded-[2rem] bg-[#0A0A0C] border border-white/10 p-8 overflow-hidden flex flex-col justify-end group hover:border-white/[0.15] transition-colors">

<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C]"></div>
<div className="pointer-events-none absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle, black 40%, transparent 100%)', WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 100%)'}}></div>
<div className="relative z-10 mb-10 flex flex-col gap-6 items-center justify-center h-full pb-20">
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center text-xl font-bold font-oswald">SOL</div>
<iconify-icon className="text-gray-500" height="24" icon="solar:arrow-right-linear" width="24"></iconify-icon>
<div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center text-xl font-bold font-oswald">USDC</div>
</div>
</div>
<div className="relative z-10">
<h3 className="text-4xl font-light text-white tracking-tight font-oswald">
                  Instant Swaps
                </h3>
<p className="mt-2 text-lg font-light leading-relaxed text-gray-400">
                  Trade instantly with the best rates across the Solana ecosystem.
                </p>
</div>
</div>

</div>
</div>

<div className="flex flex-col bg-[#0A0A0C] border-[#ffffff]/10 border rounded-3xl mt-24 mb-24 pt-8 pr-8 pb-16 pl-8 gap-x-16 gap-y-16">

<div className="flex flex-col overflow-hidden lg:flex-row lg:gap-24 lg:pt-0 lg:pb-0 mt-12 mb-0 pt-10 pr-10 pb-10 pl-10 relative gap-x-16 gap-y-16 items-center justify-between">


<div className="z-10 shrink-0 lg:mx-0 w-full max-w-[340px] mr-auto ml-auto relative">

<div className="relative w-full aspect-[9/19] bg-[#050505] rounded-[3rem] border-[8px] border-[#1a1a1a] overflow-hidden flex flex-col shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent"></div>

<div className="p-6 flex flex-col h-full">
<div className="h-8 w-1/3 bg-white/10 rounded-full mb-8"></div>
<div className="space-y-4">
<div className="h-24 w-full bg-white/5 rounded-2xl border border-white/5 p-4 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-purple-500/20"></div>
<div className="flex-1">
<div className="h-4 w-2/3 bg-white/10 rounded mb-2"></div>
<div className="h-3 w-1/3 bg-white/5 rounded"></div>
</div>
</div>
<div className="h-24 w-full bg-white/5 rounded-2xl border border-white/5 p-4 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-blue-500/20"></div>
<div className="flex-1">
<div className="h-4 w-2/3 bg-white/10 rounded mb-2"></div>
<div className="h-3 w-1/3 bg-white/5 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-end w-full gap-x-8 gap-y-8 justify-between">
<div className="flex flex-col gap-6 max-w-3xl">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center scroll-item scroll-fade-up" style={{animationPlayState: 'running'}}>
<span className="flex items-center justify-center text-[11px] font-medium text-purple-400 font-mono bg-purple-500/10 w-7 h-7 border-purple-500/20 border rounded-lg shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                    02
                  </span>
<span className="uppercase text-sm font-medium text-gray-500 tracking-widest font-sans" style={{}}>
                    Visualization
                  </span>
</div>
<h2 className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl text-white font-oswald font-light tracking-tight scroll-item scroll-fade-up delay-100" style={{animationPlayState: 'running'}}>
                  Beautifully
                  <span className="text-gray-600 font-oswald font-light tracking-tight" style={{}}>
                    Designed.
                  </span>
</h2>
<p className="leading-relaxed text-lg font-light text-gray-400 text-left mt-2 scroll-item scroll-fade-up delay-200" style={{animationPlayState: 'running'}}>
                   Track your portfolio performance in real-time with clear charts and instant notifications. Crypto has never looked this good.
                </p>
</div>
<button className="group flex items-center gap-2 pl-6 pr-5 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-all duration-200 font-sans whitespace-nowrap">
<span className="font-sans" style={{}}>See Gallery</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="flex flex-col bg-[#0A0A0C] border-[#ffffff]/10 border rounded-3xl mt-24 mb-24 pt-8 pr-8 pb-16 pl-8 gap-x-16 gap-y-16" style={{}}>

<div className="flex flex-col md:flex-row md:items-end gap-8 w-full gap-x-8 gap-y-8 justify-between">
<div className="flex flex-col gap-6 max-w-3xl">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center scroll-item scroll-fade-up" style={{animationPlayState: 'running'}}>
<span className="flex items-center justify-center text-[11px] font-medium text-purple-400 font-mono bg-purple-500/10 w-7 h-7 border-purple-500/20 border rounded-lg shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                  03
                </span>
<span className="uppercase text-sm font-medium text-gray-500 tracking-widest font-sans">
                  Community
                </span>
</div>
<h2 className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl text-white font-oswald font-light tracking-tight scroll-item scroll-fade-up delay-100" style={{animationPlayState: 'running'}}>
                Loved by
                <span className="text-gray-600 font-oswald font-light tracking-tight">
                  users.
                </span>
</h2>
<p className="text-lg text-gray-400 font-light max-w-xl leading-relaxed font-sans scroll-item scroll-fade-up delay-200" style={{animationPlayState: 'running'}}>
                Join thousands of users who have switched to Dryp for a better Solana experience.
              </p>
</div>
</div>

<div className="overflow-hidden flex flex-col md:p-16 lg:flex-row lg:gap-20 lg:pt-4 lg:pb-4 lg:pl-4 lg:pr-8 bg-[#0A0A0C] w-full max-w-6xl border-white/10 border rounded-3xl mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 relative shadow-2xl gap-x-12 gap-y-12 items-center scroll-item scroll-blur-in delay-300" style={{animationPlayState: 'running'}}>

<div className="pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C] absolute top-0 right-0 bottom-0 left-0 z-0"></div>
<div className="z-0 opacity-20 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="lg:w-[55%] flex min-h-[420px] md:min-h-[520px] w-full relative items-center justify-center z-10">
<div className="z-10 md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] group cursor-pointer overflow-hidden bg-white/5 w-80 h-80 border-0 rounded-[2.5rem] pt-1 pr-1 pb-1 pl-1 relative shadow-2xl">
<img alt="User Profile" className="transform transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover rounded-[2.2rem]" id="testimonial-img" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="lg:w-1/2 flex flex-col z-10 w-full relative">
<div className="mb-6 text-purple-500">
<iconify-icon height="50" icon="solar:quote-up-linear" width="50"></iconify-icon>
</div>
<blockquote className="leading-tight transition-opacity duration-300 md:text-5xl text-2xl font-light text-white font-oswald mb-8" id="testimonial-quote">
                "I finally feel in control of my crypto. Dryp is hands down the best wallet experience on Solana."
              </blockquote>
<div className="flex flex-row items-center justify-between gap-4 border-t border-white/10 pt-8">
<div className="">
<h4 className="leading-none text-xl font-semibold text-white" id="testimonial-name">
                    Michelle Lim
                  </h4>
<p className="text-sm md:text-base text-gray-500 mt-2 font-light" id="testimonial-role">
                    NFT Artist
                  </p>
</div>
<div className="flex items-center gap-3">
<button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-purple-600 transition-all duration-300" onclick="window.prevTestimonial()">
<iconify-icon height="20" icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-purple-600 transition-all duration-300" onclick="window.nextTestimonial()">
<iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

</div>
</div>

<div className="flex flex-col bg-[#0A0A0C] border-[#ffffff]/10 border rounded-3xl mt-24 mb-24 pt-8 pr-8 pb-16 pl-8 gap-x-16 gap-y-16">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 w-full">
<div className="flex flex-col gap-6 max-w-3xl">
<div className="flex gap-3 items-center scroll-item scroll-fade-up" style={{animationPlayState: 'running'}}>
<span className="flex items-center justify-center text-[11px] font-medium text-purple-400 font-mono bg-purple-500/10 w-7 h-7 border-purple-500/20 border rounded-lg shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                  04
                </span>
<span className="uppercase text-sm font-medium text-gray-500 tracking-widest font-sans">
                  GET STARTED
                </span>
</div>
<h2 className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl text-white font-oswald font-light tracking-tight scroll-item scroll-fade-up delay-100" style={{animationPlayState: 'running'}}>
                Start your journey
                <span className="text-gray-600 font-oswald font-light tracking-tight">
                  today.
                </span>
</h2>
</div>
</div>

<section className="flex flex-col overflow-hidden pt-0 pr-0 pb-0 pl-0 relative gap-x-12 gap-y-12 items-center justify-center">
<div className="overflow-hidden z-10 group bg-[#0A0A0C] w-full max-w-6xl border-white/10 border rounded-[3rem] relative shadow-2xl gap-x-12 gap-y-12">

<div className="pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C] absolute top-0 right-0 bottom-0 left-0 gap-x-12 gap-y-12"></div>

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle, black 40%, transparent 100%)'}}></div>
<div className="grid grid-cols-1 md:grid-cols-2 md:p-16 min-h-[450px] pt-10 pr-10 pb-10 pl-10 relative gap-x-12 gap-y-12">

<div className="flex flex-col gap-8 h-full gap-x-12 gap-y-12 items-start justify-between">

<div className="flex items-center gap-4">
<iconify-icon className="text-purple-400" height="28" icon="solar:rocket-linear" width="28"></iconify-icon>
<span className="text-3xl font-light text-white tracking-tight font-oswald">
                      Dryp Mobile
                    </span>
</div>

<div className="mt-auto gap-x-12 gap-y-12">
<div className="flex items-baseline gap-3 mb-2">
<span className="text-9xl font-light text-white tracking-tight font-oswald">
                        Free
                      </span>
</div>
<p className="text-gray-400 text-lg font-light font-sans" style={{}}>
                      Available on iOS and Android
                    </p>
</div>
</div>

<div className="flex flex-col justify-between h-full gap-10">

<ul className="space-y-6 pt-2">
<li className="flex items-center gap-4 text-white text-xl font-light font-sans" style={{}}>
<iconify-icon className="text-green-400" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
                      Secure Self-Custody
                    </li>
<li className="flex items-center gap-4 text-white text-xl font-light font-sans" style={{}}>
<iconify-icon className="text-green-400" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
                      Staking &amp; Swapping
                    </li>
<li className="flex items-center gap-4 text-white text-xl font-light font-sans" style={{}}>
<iconify-icon className="text-green-400" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
                      NFT Support
                    </li>
<li className="flex items-center gap-4 text-white text-xl font-light font-sans" style={{}}>
<iconify-icon className="text-green-400" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
                      24/7 Support
                    </li>
</ul>

<div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-end mt-auto pt-4">
<button className="sm:w-auto hover:bg-white hover:text-black transition-all duration-300 flex group text-base font-medium text-white bg-white/10 w-full border-white/20 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 gap-x-2 gap-y-2 items-center justify-center">
<iconify-icon height="20" icon="solar:apple-linear" width="20"></iconify-icon>
                        iOS
                     </button>
<button className="sm:w-auto hover:bg-white hover:text-black transition-all duration-300 flex group text-base font-medium text-white bg-white/10 w-full border-white/20 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 gap-x-2 gap-y-2 items-center justify-center">
<iconify-icon height="20" icon="solar:android-linear" width="20"></iconify-icon>
                       Android
                    </button>
</div>
</div>
</div>
</div>
</section>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-[#050505] relative z-10 pt-20 pb-10">
<div className="w-full max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
<div className="max-w-sm scroll-item scroll-fade-up" style={{animationPlayState: 'running'}}>
<a className="inline-flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-oswald font-bold text-lg">D</div>
<span className="font-oswald text-xl font-medium tracking-tight text-white">Dryp</span>
</a>
<p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans" style={{}}>
              Dryp is the friendly, secure, and powerful wallet for the Solana ecosystem.
            </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="brandico:twitter-bird" width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="brandico:discord" width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="brandico:github" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full font-sans">
<div className="scroll-item scroll-fade-up delay-100" style={{animationPlayState: 'running'}}>
<h4 className="text-white font-medium mb-4 font-sans" style={{}}>
                Product
              </h4>
<ul className="space-y-3 text-sm text-gray-400">
<li>
<a className="hover:text-purple-400 transition-colors font-sans" href="#" style={{}}>
                    Features
                  </a>
</li>
<li>
<a className="hover:text-purple-400 transition-colors font-sans" href="#" style={{}}>
                    Security
                  </a>
</li>
<li>
<a className="hover:text-purple-400 transition-colors font-sans" href="#" style={{}}>
                    Download
                  </a>
</li>
</ul>
</div>
<div className="scroll-item scroll-fade-up delay-200" style={{animationPlayState: 'running'}}>
<h4 className="text-white font-medium mb-4 font-sans" style={{}}>
                Resources
              </h4>
<ul className="space-y-3 text-sm text-gray-400">
<li>
<a className="hover:text-purple-400 transition-colors font-sans" href="#" style={{}}>
                    Support
                  </a>
</li>
<li>
<a className="hover:text-purple-400 transition-colors font-sans" href="#" style={{}}>
                    Knowledge Base
                  </a>
</li>
<li>
<a className="hover:text-purple-400 transition-colors font-sans" href="#" style={{}}>
                    Community
                  </a>
</li>
</ul>
</div>
<div className="scroll-item scroll-fade-up delay-300" style={{animationPlayState: 'running'}}>
<h4 className="text-white font-medium mb-4 font-sans" style={{}}>
                Company
              </h4>
<ul className="space-y-3 text-sm text-gray-400">
<li>
<a className="hover:text-purple-400 transition-colors font-sans" href="#" style={{}}>
                    About
                  </a>
</li>
<li className="">
<a className="hover:text-purple-400 transition-colors font-sans" href="#" style={{}}>
                    Careers
                  </a>
</li>
<li>
<a className="hover:text-purple-400 transition-colors font-sans" href="#" style={{}}>
                    Contact
                  </a>
</li>
</ul>
</div>
<div className="scroll-item scroll-fade-up delay-500" style={{animationPlayState: 'running'}}>
<h4 className="text-white font-medium mb-4 font-sans" style={{}}>
                Legal
              </h4>
<ul className="space-y-3 text-sm text-gray-400">
<li>
<a className="hover:text-purple-400 transition-colors font-sans" href="#" style={{}}>
                    Privacy Policy
                  </a>
</li>
<li>
<a className="hover:text-purple-400 transition-colors font-sans" href="#" style={{}}>
                    Terms of Service
                  </a>
</li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-500 font-sans" style={{}}>
            © 2024 Dryp Wallet. All rights reserved.
          </p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs text-gray-400 font-sans" style={{}}>
              Solana Mainnet: Operational
            </span>
</div>
</div>
</div>
</footer>


    </>
  );
}
