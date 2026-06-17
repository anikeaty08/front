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



      // Copy to Clipboard Functionality
      function copyToClipboard(button) {
          const walletAddress = "gqkew7ryqqknlmwo6uwq1x2pd7byqsc8fzz9akogmuv2";
          const textElement = document.getElementById('wallet-text');
          const originalText = walletAddress;
          const originalIcon = button.querySelector('.iconify').getAttribute('data-icon');

          navigator.clipboard.writeText(walletAddress).then(() => {
              textElement.innerText = "$BITCOINWHALE CA COPIED TO CLIPBOARD";
              textElement.classList.add('text-cyan-400');
              textElement.classList.remove('font-mono');
              textElement.classList.add('font-bold');

              setTimeout(() => {
                  textElement.innerText = originalText;
                  textElement.classList.remove('text-cyan-400');
                  textElement.classList.add('font-mono');
                  textElement.classList.remove('font-bold');
              }, 2000);
          });
      }

      // Generate 30 Images for Content Depo
      const grid = document.getElementById('image-grid');
      for (let i = 1; i <= 30; i++) {
          const wrapper = document.createElement('div');
          wrapper.className = "group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal";
          wrapper.style.transitionDelay = `${(i % 4) * 50}ms`; // Stagger effect

          wrapper.innerHTML = `
              <img src="Photos/${i}.png" alt="Community Content ${i}"
                   class="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
                   onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+${i}'">

              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="Photos/${i}.png" download class="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50">
                      <span class="iconify" data-icon="lucide:download" data-stroke-width="2"></span>
                      Download Image
                  </a>
              </div>
              <div class="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  ${i}.png
              </div>
          `;
          grid.appendChild(wrapper);
      }

      // Scroll Reveal Observer
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

      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/10 rounded-full blur-[120px]"></div>
<div className="absolute inset-0 grid-bg opacity-30"></div>
</div>

<div className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6">
<div className="max-w-6xl mx-auto rounded-full border border-white/10" style={{background: 'rgba(10, 10, 12, 0.6)', backdropFilter: 'blur(16px) saturate(120%)', boxShadow: '0 10px 30px rgba(0,0,0,0.25)'}}>
<div className="flex items-center justify-between px-6 py-3">

<div className="flex items-center">
<span className="text-sm sm:text-base font-semibold text-white tracking-tight">
              $BITCOINWHALE
            </span>
</div>

<ul className="hidden md:flex items-center gap-1 text-xs font-medium text-white/60 absolute left-1/2 transform -translate-x-1/2">
<li className="">
<a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5" href="#flywheel">
                Flywheel
              </a>
</li>
<li>
<a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5" href="#content">
                Content Depo
              </a>
</li>
</ul>

<div className="flex items-center gap-3">
<a className="group flex items-center justify-center p-2 rounded-full hover:bg-white/10 border border-white/5 transition-all" href="https://dexscreener.com/solana/gqkew7ryqqknlmwo6uwq1x2pd7byqsc8fzz9akogmuv2" target="_blank" title="DexScreener">
<svg aria-hidden="true" className="iconify text-white/70 group-hover:text-white w-5 h-5 iconify--lucide" data-icon="lucide:bar-chart-2" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 21v-6m7 6V3m7 18V9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<a className="group flex items-center justify-center p-2 rounded-full hover:bg-white/10 border border-white/5 transition-all" href="https://x.com/i/communities/2004607901826986165" target="_blank" title="X Community">
<svg aria-hidden="true" className="iconify text-white/70 group-hover:text-white w-5 h-5 iconify--lucide" data-icon="lucide:twitter" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>
</div>
</div>

<section className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-6 overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 z-10 w-full max-w-7xl mr-auto ml-auto gap-x-16 gap-y-16 items-center">

<div className="order-2 lg:order-1">
<div className="reveal active">
<h1 -family:="" className="md:text-6xl lg:text-7xl leading-tight flex flex-row items-baseline gap-3 flex-wrap text-4xl font-semibold tracking-tight max-w-md mb-10" inter,="" sans-serif;"="">
<span className="" style={{background: 'linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4)', backgroundSize: '200% 100%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'gradient-move 3s linear infinite'}}>BITCOIN WHALE</span><span className="text-white">MEME</span>
<style>
@keyframes gradient-move {
0% { background-position: 0% 50%; }
100% { background-position: 200% 50%; }
}
</style>
</h1>

<a className="no-underline inline-block" href="https://dexscreener.com/solana/gqkew7ryqqknlmwo6uwq1x2pd7byqsc8fzz9akogmuv2" target="_blank">
<button className="button relative group" type="button">
<div className="points_wrapper">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner flex items-center gap-2">
                  Buy on Solana
                  <svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:arrow-right" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
<style>
                  .button {
                  cursor: pointer; position: relative; display: inline-flex; align-items: center; justify-content: center;
                  overflow: hidden; transition: all 0.25s ease;
                  background: radial-gradient(65.28% 65.28% at 50% 100%, rgba(6, 182, 212, 0.4) 0%, rgba(6, 182, 212, 0) 100%), linear-gradient(0deg, #1e3a8a, #172554);
                  border-radius: 0.75rem; border: none; outline: none; padding: 12px 24px; min-height: 52px; min-width: 160px;
                  }
                  .button::before { content: ""; position: absolute; inset: 1px; background: linear-gradient(177.95deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%); border-radius: calc(0.75rem - 1px); z-index: 0; transition: all 0.5s ease-in-out; }
                  .button::after { content: ""; position: absolute; inset: 2px; background: inherit; border-radius: calc(0.75rem - 2px); z-index: 0; }
                  .button:active { transform: scale(0.98); }
                  .points_wrapper { overflow: hidden; width: 100%; height: 100%; pointer-events: none; position: absolute; z-index: 1; }
                  .points_wrapper .point { bottom: -10px; position: absolute; animation: floating-points infinite ease-in-out; pointer-events: none; width: 2px; height: 2px; background-color: #fff; border-radius: 9999px; }
                  @keyframes floating-points { 0% { transform: translateY(0); } 85% { opacity: 0; } 100% { transform: translateY(-55px); opacity: 0; } }
                  .points_wrapper .point:nth-child(1) { left: 10%; opacity: 1; animation-duration: 2.35s; animation-delay: 0.2s; }
                  .points_wrapper .point:nth-child(2) { left: 30%; opacity: 0.7; animation-duration: 2.5s; animation-delay: 0.5s; }
                  .points_wrapper .point:nth-child(3) { left: 25%; opacity: 0.8; animation-duration: 2.2s; animation-delay: 0.1s; }
                  .points_wrapper .point:nth-child(4) { left: 44%; opacity: 0.6; animation-duration: 2.05s; }
                  .points_wrapper .point:nth-child(5) { left: 50%; opacity: 1; animation-duration: 1.9s; }
                  .points_wrapper .point:nth-child(6) { left: 75%; opacity: 0.5; animation-duration: 1.5s; animation-delay: 1.5s; }
                  .inner { z-index: 2; position: relative; color: white; font-size: 15px; font-weight: 600; letter-spacing: -0.01em; }
                </style>
</button>
</a>
</div>
</div>

<div className="order-1 lg:order-2 flex lg:justify-end reveal delay-200 active justify-center">
<div className="relative w-full max-w-lg mx-auto">
<div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm shadow-2xl">
<video className="w-full" controls="" playsinline="" poster="assets/poster.jpg" preload="metadata" style={{aspectRatio: '16 / 9', transform: 'scale(1.35)', transformOrigin: 'center center'}}>
<source src="assets/demo.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
</div>
<div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl -z-10"></div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 relative z-10">
<div className="max-w-3xl mx-auto text-center reveal">
<h3 className="text-sm font-semibold text-cyan-400 mb-6 tracking-widest uppercase opacity-80">
          Contract Address
        </h3>
<div className="flex justify-center">

<button className="inline-flex transition overflow-hidden group text-xs sm:text-sm text-white/90 rounded-full pt-4 pr-8 pb-4 pl-8 relative gap-x-3 items-center" onclick="copyToClipboard(this)" style={{'--x': '50%', '--y': '50%', background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.02) 100%)', border: '1px solid rgba(255, 255, 255, 0.15)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(20px)', transformStyle: 'preserve-3d', transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)'}}>
<div className="absolute inset-0 rounded-full" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)', pointerEvents: 'none', zIndex: '1'}}></div>
<div className="light-sweep absolute inset-0 rounded-full" style={{background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)', transform: 'translate(-150%, 150%) rotate(45deg)', pointerEvents: 'none', filter: 'blur(6px)', width: '200%', height: '200%', top: '-50%', left: '-50%', zIndex: '4', transition: 'transform 0.6s'}}></div>
<svg aria-hidden="true" className="iconify text-[18px] relative z-10 text-cyan-300 iconify--lucide" data-icon="lucide:copy" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect>
<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
</g>
</svg>
<span className="z-10 relative font-mono tracking-tight text-white/80 group-hover:text-white transition-colors" id="wallet-text">
              gqkew7ryqqknlmwo6uwq1x2pd7byqsc8fzz9akogmuv2
            </span>
<style>
              button:hover .light-sweep { transform: translate(150%, -150%) rotate(45deg) !important; }
              button:active { transform: scale(0.98) !important; }
            </style>
</button>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="flywheel">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-20 reveal">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">$BITCOINWHALE Flywheel</h2>
<p className="text-neutral-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">Utilizing PumpSwap AMM Creator Fees and Pumpfun v2 frameworks, 25% of all creator fees buy back &amp; burn $BITCOINWHALE, and the remaining 75% buy back $BITCOINWHALE.</p>
</div>

<div className="relative h-[500px] md:h-[600px] w-full border border-white/5 rounded-3xl bg-white/[0.02] backdrop-blur-sm flex items-center justify-center overflow-hidden reveal delay-100">

<div className="absolute inset-0" style={{background: 'radial-gradient(circle at center, rgba(6,182,212,0.1) 0%, transparent 50%)', animation: 'pulse-glow 4s ease-in-out infinite'}}></div>

<div className="absolute w-[480px] h-[480px] md:w-[550px] md:h-[550px] rounded-full border border-dashed border-cyan-500/20" style={{animation: 'spin-slow 25s linear infinite'}}></div>

<div className="absolute w-[420px] h-[420px] md:w-[480px] md:h-[480px] rounded-full border border-white/10" style={{animation: 'spin-slow 35s linear infinite reverse'}}></div>

<div className="absolute w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full border border-cyan-500/10" style={{animation: 'spin-slow 20s linear infinite'}}></div>

<svg className="absolute inset-0 w-full h-full" style={{animation: 'spin-slow 40s linear infinite'}} viewbox="0 0 600 600">
<defs>
<lineargradient id="flowGradient" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#06b6d4" stop-opacity="0.6"></stop>
<stop offset="50%" stop-color="#3b82f6" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#06b6d4" stop-opacity="0.6"></stop>
</lineargradient>
</defs>
<circle cx="300" cy="300" fill="none" r="200" stroke="url(#flowGradient)" stroke-dasharray="20 10" strokeWidth="1" style={{animation: 'dash-flow 8s linear infinite'}}></circle>
<circle cx="300" cy="300" fill="none" r="160" stroke="url(#flowGradient)" stroke-dasharray="15 15" strokeWidth="1" style={{animation: 'dash-flow 6s linear infinite reverse'}}></circle>
</svg>

<div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer">
<div className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-500/50">
<span className="text-xs font-medium text-cyan-300">$BITCOINWHALE Volume</span>
</div>
<div className="flex flex-col items-center">
<svg className="w-4 h-4 text-cyan-400 animate-bounce" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg className="w-4 h-4 text-cyan-400/60 animate-bounce" fill="none" stroke="currentColor" style={{animationDelay: '0.1s'}} viewbox="0 0 24 24"><path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>

<div className="absolute top-24 md:top-28 left-1/2 transform -translate-x-1/2 group cursor-pointer">
<div className="relative">
<div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-b from-blue-500/20 to-cyan-900/20 border border-blue-500/40 flex flex-col items-center justify-center backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-blue-500/60 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]">
<svg className="w-6 h-6 md:w-7 md:h-7 text-blue-400 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span className="text-[10px] md:text-xs text-blue-200 uppercase tracking-wider font-medium">Creator</span>
<span className="text-[10px] md:text-xs text-blue-200 uppercase tracking-wider font-medium">Fees</span>
</div>
<div className="absolute inset-0 border border-blue-500/20 rounded-full animate-ping opacity-30"></div>
</div>
</div>

<svg className="absolute w-full h-full" style={{pointerEvents: 'none'}} viewbox="0 0 600 600">

<path d="M300 200 Q200 280 180 350" fill="none" stroke="url(#flowGradient)" stroke-dasharray="8 4" strokeWidth="2" style={{animation: 'dash-flow 2s linear infinite'}}></path>

<path d="M300 200 Q400 280 420 350" fill="none" stroke="url(#flowGradient)" stroke-dasharray="8 4" strokeWidth="2" style={{animation: 'dash-flow 2s linear infinite'}}></path>
</svg>

<div className="relative z-10 flex flex-col items-center gap-6 md:gap-8">

<div className="flex items-center gap-8 md:gap-16 mt-16 md:mt-20">

<div className="relative group cursor-pointer">
<div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-b from-red-500/15 to-red-900/15 border border-red-500/40 flex flex-col items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(239,68,68,0.1)] transition-all duration-500 group-hover:scale-110 group-hover:border-red-500/60 group-hover:shadow-[0_0_60px_rgba(239,68,68,0.25)]">
<svg className="w-8 h-8 md:w-10 md:h-10 text-red-400 mb-2 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span className="text-2xl md:text-3xl font-bold text-white tracking-tight">25%</span>
<span className="text-[10px] md:text-xs text-red-200 uppercase tracking-widest mt-1">Buy &amp; Burn</span>
</div>
<div className="absolute inset-0 border border-red-500/20 rounded-full animate-ping opacity-20"></div>

<div className="absolute w-2 h-2 bg-red-400 rounded-full" style={{animation: 'orbit-25 4s linear infinite', boxShadow: '0 0 10px rgba(239,68,68,0.8)'}}></div>
</div>

<div className="relative flex items-center justify-center">
<div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-dashed border-cyan-500/40 flex items-center justify-center" style={{animation: 'spin-slow 8s linear infinite'}}>
<svg className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-xl"></div>
</div>

<div className="relative group cursor-pointer">
<div className="w-44 h-44 md:w-52 md:h-52 rounded-full bg-gradient-to-b from-cyan-500/15 to-blue-900/15 border border-cyan-500/40 flex flex-col items-center justify-center backdrop-blur-md shadow-[0_0_40px_rgba(6,182,212,0.1)] transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-500/60 group-hover:shadow-[0_0_80px_rgba(6,182,212,0.3)]">
<svg className="w-10 h-10 md:w-12 md:h-12 text-cyan-400 mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" style={{transition: 'transform 0.5s'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span className="text-3xl md:text-4xl font-bold text-white tracking-tight">75%</span>
<span className="text-[10px] md:text-xs text-cyan-200 uppercase tracking-widest mt-1 text-center">Buyback</span>
</div>
<div className="absolute inset-0 border border-cyan-500/20 rounded-full animate-ping opacity-20" style={{animationDelay: '0.5s'}}></div>

<div className="absolute w-3 h-3 bg-cyan-400 rounded-full" style={{animation: 'orbit-75 5s linear infinite', boxShadow: '0 0 15px rgba(6,182,212,0.8)'}}></div>
<div className="absolute w-2 h-2 bg-blue-400 rounded-full" style={{animation: 'orbit-75 5s linear infinite reverse', animationDelay: '2.5s', boxShadow: '0 0 10px rgba(59,130,246,0.8)'}}></div>
</div>
</div>
</div>

<div className="absolute top-1/4 left-1/6 w-2 h-2 bg-cyan-400/60 rounded-full blur-[1px]" style={{animation: 'float-particle 6s ease-in-out infinite'}}></div>
<div className="absolute bottom-1/3 right-1/6 w-3 h-3 bg-blue-400/40 rounded-full blur-[2px]" style={{animation: 'float-particle 8s ease-in-out infinite reverse'}}></div>
<div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-red-400/50 rounded-full" style={{animation: 'float-particle 5s ease-in-out infinite', animationDelay: '1s'}}></div>
<div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-cyan-300/50 rounded-full" style={{animation: 'float-particle 7s ease-in-out infinite', animationDelay: '2s'}}></div>
<style>
    @keyframes pulse-glow {
      0%, 100% { opacity: 0.3; transform: scale(1); }
      50% { opacity: 0.6; transform: scale(1.1); }
    }
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes dash-flow {
      from { stroke-dashoffset: 0; }
      to { stroke-dashoffset: -60; }
    }
    @keyframes orbit-25 {
      from { transform: rotate(0deg) translateX(90px) rotate(0deg); }
      to { transform: rotate(360deg) translateX(90px) rotate(-360deg); }
    }
    @keyframes orbit-75 {
      from { transform: rotate(0deg) translateX(115px) rotate(0deg); }
      to { transform: rotate(360deg) translateX(115px) rotate(-360deg); }
    }
    @keyframes float-particle {
      0%, 100% { transform: translateY(0) translateX(0); opacity: 0.4; }
      25% { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
      50% { transform: translateY(-10px) translateX(-5px); opacity: 0.5; }
      75% { transform: translateY(-25px) translateX(15px); opacity: 0.7; }
    }
  </style>
</div>
</div>
</section>

<section className="py-20 px-6 pb-32" id="content">
<div className="max-w-7xl mx-auto">
<div className="mb-16 border-l-2 border-cyan-500 pl-6 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">
            Content Depo
          </h2>
<p className="text-neutral-400 text-sm md:text-base max-w-2xl leading-relaxed">
            $BITCOINWHALE Community Content: Share across socials, bullpost your
            bags and become the whale you always dreamed to be.
          </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" id="image-grid">

<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+1'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+1"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/1.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              1.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+2'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+2"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/2.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              2.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 3" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+3'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+3"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/3.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              3.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 4" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+4'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+4"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/4.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              4.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 5" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+5'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+5"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/5.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              5.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 6" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+6'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+6"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/6.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              6.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 7" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+7'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+7"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/7.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              7.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 8" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+8'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+8"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/8.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              8.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 9" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+9'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+9"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/9.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              9.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 10" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+10'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+10"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/10.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              10.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 11" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+11'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+11"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/11.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              11.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 12" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+12'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+12"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/12.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              12.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 13" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+13'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+13"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/13.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              13.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 14" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+14'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+14"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/14.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              14.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 15" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+15'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+15"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/15.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              15.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 16" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+16'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+16"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/16.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              16.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 17" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+17'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+17"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/17.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              17.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 18" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+18'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+18"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/18.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              18.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 19" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+19'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+19"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/19.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              19.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 20" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+20'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+20"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/20.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              20.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 21" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+21'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+21"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/21.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              21.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 22" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+22'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+22"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/22.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              22.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 23" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+23'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+23"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/23.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              23.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 24" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+24'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+24"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/24.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              24.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 25" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+25'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+25"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/25.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              25.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 26" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+26'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+26"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/26.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              26.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 27" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+27'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+27"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/27.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              27.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 28" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+28'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+28"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/28.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              28.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 29" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+29'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+29"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/29.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              29.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 30" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+30'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+30"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/30.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              30.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+1'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+1"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/1.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              1.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+2'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+2"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/2.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              2.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 3" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+3'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+3"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/3.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              3.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 4" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+4'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+4"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/4.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              4.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 5" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+5'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+5"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/5.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              5.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 6" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+6'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+6"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/6.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              6.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 7" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+7'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+7"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/7.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              7.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 8" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+8'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+8"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/8.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              8.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 9" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+9'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+9"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/9.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              9.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 10" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+10'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+10"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/10.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              10.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 11" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+11'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+11"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/11.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              11.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 12" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+12'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+12"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/12.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              12.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 13" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+13'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+13"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/13.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              13.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 14" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+14'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+14"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/14.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              14.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 15" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+15'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+15"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/15.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              15.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 16" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+16'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+16"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/16.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              16.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 17" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+17'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+17"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/17.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              17.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 18" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+18'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+18"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/18.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              18.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 19" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+19'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+19"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/19.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              19.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 20" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+20'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+20"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/20.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              20.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 21" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+21'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+21"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/21.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              21.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 22" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+22'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+22"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/22.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              22.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 23" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+23'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+23"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/23.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              23.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 24" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+24'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+24"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/24.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              24.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 25" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+25'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+25"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/25.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              25.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 26" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+26'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+26"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/26.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              26.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 27" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+27'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+27"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/27.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              27.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 28" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+28'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+28"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/28.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              28.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 29" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+29'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+29"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/29.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              29.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 30" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+30'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+30"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/30.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              30.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+1'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+1"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/1.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              1.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+2'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+2"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/2.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              2.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 3" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+3'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+3"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/3.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              3.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 4" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+4'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+4"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/4.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              4.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 5" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+5'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+5"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/5.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              5.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 6" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+6'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+6"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/6.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              6.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 7" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+7'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+7"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/7.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              7.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 8" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+8'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+8"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/8.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              8.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 9" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+9'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+9"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/9.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              9.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 10" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+10'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+10"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/10.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              10.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 11" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+11'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+11"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/11.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              11.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 12" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+12'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+12"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/12.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              12.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 13" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+13'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+13"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/13.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              13.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 14" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+14'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+14"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/14.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              14.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 15" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+15'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+15"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/15.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              15.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 16" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+16'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+16"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/16.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              16.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 17" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+17'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+17"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/17.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              17.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 18" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+18'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+18"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/18.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              18.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 19" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+19'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+19"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/19.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              19.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 20" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+20'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+20"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/20.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              20.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 21" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+21'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+21"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/21.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              21.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 22" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+22'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+22"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/22.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              22.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 23" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+23'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+23"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/23.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              23.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 24" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+24'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+24"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/24.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              24.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 25" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+25'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+25"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/25.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              25.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 26" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+26'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+26"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/26.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              26.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 27" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+27'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+27"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/27.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              27.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 28" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+28'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+28"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/28.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              28.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 29" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+29'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+29"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/29.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              29.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 30" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+30'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+30"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/30.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              30.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+1'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+1"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/1.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              1.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+2'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+2"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/2.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              2.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 3" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+3'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+3"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/3.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              3.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 4" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+4'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+4"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/4.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              4.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 5" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+5'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+5"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/5.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              5.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 6" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+6'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+6"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/6.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              6.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 7" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+7'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+7"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/7.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              7.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 8" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+8'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+8"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/8.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              8.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 9" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+9'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+9"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/9.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              9.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 10" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+10'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+10"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/10.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              10.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 11" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+11'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+11"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/11.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              11.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 12" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+12'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+12"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/12.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              12.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 13" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+13'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+13"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/13.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              13.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 14" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+14'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+14"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/14.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              14.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 15" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+15'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+15"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/15.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              15.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 16" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+16'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+16"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/16.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              16.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 17" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+17'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+17"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/17.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              17.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 18" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+18'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+18"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/18.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              18.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 19" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+19'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+19"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/19.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              19.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 20" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+20'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+20"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/20.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              20.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 21" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+21'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+21"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/21.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              21.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 22" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+22'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+22"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/22.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              22.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 23" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+23'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+23"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/23.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              23.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 24" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+24'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+24"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/24.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              24.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 25" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+25'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+25"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/25.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              25.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 26" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+26'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+26"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/26.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              26.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 27" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+27'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+27"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/27.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              27.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 28" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+28'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+28"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/28.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              28.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 29" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+29'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+29"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/29.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              29.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 30" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+30'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+30"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/30.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              30.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+1'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+1"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/1.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              1.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+2'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+2"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/2.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              2.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 3" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+3'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+3"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/3.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              3.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 4" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+4'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+4"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/4.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              4.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 5" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+5'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+5"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/5.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              5.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 6" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+6'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+6"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/6.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              6.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 7" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+7'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+7"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/7.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              7.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 8" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+8'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+8"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/8.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              8.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 9" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+9'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+9"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/9.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              9.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 10" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+10'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+10"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/10.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              10.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 11" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+11'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+11"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/11.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              11.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 12" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+12'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+12"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/12.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              12.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 13" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+13'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+13"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/13.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              13.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 14" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+14'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+14"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/14.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              14.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 15" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+15'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+15"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/15.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              15.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 16" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+16'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+16"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/16.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              16.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 17" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+17'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+17"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/17.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              17.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 18" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+18'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+18"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/18.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              18.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 19" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+19'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+19"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/19.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              19.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 20" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+20'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+20"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/20.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              20.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 21" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+21'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+21"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/21.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              21.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 22" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+22'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+22"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/22.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              22.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 23" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+23'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+23"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/23.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              23.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 24" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+24'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+24"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/24.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              24.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 25" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+25'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+25"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/25.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              25.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 26" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+26'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+26"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/26.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              26.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 27" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+27'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+27"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/27.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              27.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 28" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+28'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+28"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/28.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              28.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 29" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+29'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+29"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/29.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              29.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 30" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+30'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+30"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/30.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
                Download Image
              </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              30.png
            </div>
</div>
<div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+1'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+1"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/1.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  1.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+2'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+2"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/2.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  2.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 3" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+3'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+3"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/3.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  3.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 4" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+4'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+4"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/4.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  4.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 5" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+5'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+5"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/5.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  5.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 6" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+6'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+6"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/6.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  6.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 7" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+7'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+7"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/7.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  7.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 8" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+8'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+8"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/8.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  8.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 9" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+9'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+9"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/9.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  9.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 10" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+10'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+10"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/10.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  10.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 11" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+11'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+11"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/11.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  11.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 12" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+12'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+12"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/12.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  12.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 13" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+13'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+13"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/13.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  13.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 14" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+14'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+14"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/14.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  14.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 15" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+15'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+15"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/15.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  15.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 16" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+16'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+16"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/16.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  16.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 17" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+17'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+17"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/17.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  17.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 18" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+18'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+18"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/18.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  18.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 19" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+19'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+19"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/19.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  19.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 20" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+20'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+20"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/20.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  20.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 21" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+21'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+21"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/21.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  21.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 22" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+22'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+22"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/22.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  22.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 23" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+23'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+23"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/23.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  23.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 24" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+24'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+24"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/24.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  24.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 25" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+25'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+25"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/25.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  25.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 26" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+26'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+26"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/26.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  26.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 27" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+27'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+27"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/27.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  27.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 28" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+28'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+28"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/28.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  28.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 29" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+29'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+29"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/29.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  29.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 30" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+30'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+30"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/30.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  30.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+1'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+1"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/1.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  1.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+2'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+2"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/2.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  2.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 3" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+3'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+3"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/3.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  3.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 4" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+4'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+4"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/4.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  4.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 5" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+5'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+5"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/5.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  5.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 6" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+6'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+6"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/6.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  6.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 7" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+7'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+7"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/7.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  7.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 8" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+8'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+8"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/8.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  8.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 9" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+9'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+9"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/9.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  9.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 10" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+10'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+10"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/10.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  10.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 11" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+11'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+11"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/11.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  11.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 12" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+12'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+12"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/12.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  12.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 13" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+13'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+13"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/13.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  13.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 14" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+14'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+14"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/14.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  14.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 15" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+15'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+15"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/15.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  15.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 16" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+16'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+16"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/16.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  16.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 17" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+17'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+17"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/17.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  17.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 18" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+18'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+18"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/18.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  18.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 19" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+19'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+19"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/19.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  19.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 20" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+20'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+20"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/20.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  20.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 21" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+21'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+21"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/21.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  21.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 22" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+22'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+22"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/22.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  22.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 23" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+23'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+23"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/23.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  23.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 24" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+24'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+24"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/24.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  24.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 25" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+25'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+25"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/25.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  25.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 26" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+26'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+26"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/26.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  26.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 27" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+27'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+27"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/27.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  27.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 28" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+28'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+28"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/28.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  28.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 29" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+29'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+29"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/29.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  29.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 30" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+30'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+30"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/30.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  30.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+1'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+1"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/1.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  1.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+2'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+2"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/2.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  2.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 3" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+3'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+3"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/3.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  3.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 4" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+4'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+4"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/4.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  4.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 5" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+5'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+5"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/5.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  5.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 6" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+6'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+6"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/6.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  6.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 7" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+7'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+7"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/7.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  7.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 8" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+8'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+8"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/8.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  8.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 9" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+9'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+9"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/9.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  9.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 10" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+10'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+10"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/10.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  10.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 11" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+11'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+11"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/11.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  11.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 12" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+12'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+12"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/12.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  12.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 13" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+13'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+13"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/13.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  13.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 14" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+14'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+14"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/14.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  14.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 15" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+15'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+15"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/15.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  15.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 16" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+16'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+16"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/16.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  16.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 17" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+17'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+17"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/17.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  17.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 18" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+18'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+18"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/18.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  18.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 19" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+19'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+19"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/19.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  19.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 20" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+20'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+20"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/20.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  20.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 21" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+21'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+21"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/21.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  21.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 22" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+22'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+22"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/22.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  22.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 23" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+23'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+23"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/23.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  23.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 24" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+24'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+24"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/24.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  24.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 25" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+25'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+25"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/25.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  25.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 26" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+26'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+26"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/26.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  26.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 27" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+27'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+27"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/27.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  27.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 28" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+28'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+28"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/28.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  28.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 29" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+29'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+29"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/29.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  29.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 30" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+30'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+30"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/30.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  30.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+1'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+1"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/1.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  1.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+2'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+2"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/2.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  2.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 3" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+3'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+3"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/3.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  3.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 4" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+4'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+4"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/4.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  4.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 5" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+5'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+5"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/5.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  5.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 6" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+6'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+6"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/6.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  6.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 7" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+7'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+7"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/7.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  7.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 8" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+8'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+8"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/8.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  8.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 9" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+9'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+9"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/9.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  9.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 10" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+10'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+10"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/10.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  10.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 11" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+11'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+11"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/11.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  11.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 12" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+12'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+12"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/12.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  12.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 13" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+13'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+13"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/13.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  13.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 14" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+14'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+14"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/14.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  14.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 15" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+15'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+15"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/15.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  15.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 16" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+16'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+16"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/16.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  16.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 17" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+17'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+17"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/17.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  17.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 18" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+18'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+18"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/18.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  18.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 19" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+19'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+19"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/19.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  19.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 20" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+20'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+20"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/20.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  20.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 21" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+21'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+21"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/21.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  21.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 22" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+22'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+22"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/22.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  22.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 23" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+23'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+23"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/23.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  23.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 24" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+24'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+24"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/24.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  24.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 25" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+25'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+25"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/25.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  25.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 26" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+26'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+26"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/26.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  26.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 27" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+27'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+27"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/27.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  27.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 28" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+28'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+28"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/28.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  28.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 29" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+29'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+29"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/29.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  29.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 30" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+30'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+30"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/30.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  30.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+1'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+1"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/1.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  1.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+2'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+2"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/2.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  2.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 3" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+3'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+3"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/3.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  3.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 4" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+4'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+4"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/4.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  4.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 5" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+5'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+5"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/5.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  5.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 6" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+6'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+6"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/6.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  6.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 7" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+7'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+7"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/7.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  7.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 8" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+8'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+8"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/8.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  8.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 9" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+9'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+9"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/9.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  9.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 10" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+10'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+10"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/10.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  10.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 11" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+11'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+11"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/11.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  11.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 12" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+12'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+12"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/12.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  12.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 13" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+13'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+13"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/13.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  13.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 14" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+14'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+14"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/14.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  14.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 15" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+15'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+15"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/15.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  15.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 16" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+16'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+16"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/16.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  16.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 17" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+17'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+17"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/17.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  17.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 18" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+18'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+18"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/18.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  18.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 19" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+19'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+19"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/19.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  19.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 20" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+20'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+20"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/20.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  20.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 21" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+21'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+21"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/21.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  21.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 22" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+22'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+22"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/22.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  22.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 23" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+23'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+23"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/23.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  23.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 24" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+24'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+24"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/24.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  24.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 25" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+25'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+25"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/25.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  25.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 26" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+26'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+26"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/26.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  26.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Community Content 27" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+27'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+27"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/27.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  27.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '0ms'}}>
<img alt="Community Content 28" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+28'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+28"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/28.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  28.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '50ms'}}>
<img alt="Community Content 29" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+29'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+29"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/29.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  29.png
              </div>
</div><div className="group relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<img alt="Community Content 30" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" onerror="this.src='https://placehold.co/400x400/1a1a1a/FFF?text=IMG+30'" src="https://placehold.co/400x400/1a1a1a/FFF?text=IMG+30"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-cyan-50" download="" href="Photos/30.png">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                      Download Image
                  </a>
</div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 rounded backdrop-blur-sm text-[10px] text-white/60 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  30.png
              </div>
</div></div>
</div>
</section>

<footer className="border-t border-white/5 bg-neutral-900/50 backdrop-blur-sm py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<span className="text-lg font-bold tracking-tight text-white">
          $BITCOINWHALE
        </span>
<div className="text-xs text-neutral-500">
          © 2024 BitcoinWhale. All rights reserved.
        </div>
</div>
</footer>



    </>
  );
}
