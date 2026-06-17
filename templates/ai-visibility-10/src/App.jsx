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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


      document.addEventListener('DOMContentLoaded', () => {
        // 1. Scroll Reveal Animations Observer
        const revealOptions = {
          root: null,
          rootMargin: '0px 0px -50px 0px',
          threshold: 0.1
        };
        
        const revealObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              observer.unobserve(entry.target);
            }
          });
        }, revealOptions);

        document.querySelectorAll('.scroll-reveal, .scroll-reveal-scale').forEach(el => {
          revealObserver.observe(el);
        });

        // 2. Custom Dropdown Logic
        const selectWrapper = document.getElementById('custom-dropdown');
        if (selectWrapper) {
          const select = selectWrapper.querySelector('.custom-select');
          const selectedText = selectWrapper.querySelector('#selected-text');
          const hiddenSelect = document.getElementById('industry-select');

          select.addEventListener('click', (e) => {
            e.stopPropagation();
            select.classList.toggle('open');
          });

          document.querySelectorAll('.custom-option').forEach(option => {
            option.addEventListener('click', (e) => {
              e.stopPropagation();
              
              // Update visual text
              selectedText.textContent = option.textContent;
              selectedText.classList.remove('text-neutral-500');
              selectedText.classList.add('text-neutral-200');
              
              // Update hidden select
              hiddenSelect.value = option.getAttribute('data-value');
              
              // Update selected state in custom options
              document.querySelectorAll('.custom-option').forEach(opt => opt.classList.remove('selected'));
              option.classList.add('selected');
              
              select.classList.remove('open');
            });
          });

          document.addEventListener('click', () => {
            select.classList.remove('open');
          });
        }

        // 3. Simple Starfield Animation (to fill the canvas behind the hero)
        const canvas = document.getElementById('webgl-stars');
        if (canvas) {
          const ctx = canvas.getContext('2d');
          let width = canvas.width = window.innerWidth;
          let height = canvas.height = window.innerHeight;
          
          const stars = Array.from({ length: 150 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.5,
            alpha: Math.random(),
            speed: (Math.random() * 0.05) + 0.01
          }));

          function animateStars() {
            ctx.clearRect(0, 0, width, height);
            stars.forEach(star => {
              star.alpha += star.speed;
              if (star.alpha > 1 || star.alpha < 0) star.speed *= -1;
              ctx.beginPath();
              ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(star.alpha)})`;
              ctx.fill();
            });
            requestAnimationFrame(animateStars);
          }
          animateStars();
          
          window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 z-0" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>

</div>
</div>

<div className="fixed inset-0 opacity-[0.04] pointer-events-none z-50 mix-blend-overlay" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E\')'}}></div>

<div className="relative w-full overflow-hidden flex flex-col min-h-[100vh]">

<canvas className="absolute inset-0 z-0 pointer-events-none opacity-60" height="915" id="webgl-stars" width="1440"></canvas>

<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none z-0" id="light1"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none z-0" id="light2"></div>

<div className="flex-1 w-full z-10 relative">

<nav className="sticky top-0 z-50 bg-[#030303]/80 backdrop-blur-sm border-b border-neutral-800/50">
<div className="max-w-[1200px] mx-auto px-4 md:px-6 py-4 md:py-5 flex flex-wrap md:flex-nowrap items-center md:gap-4 lg:gap-8 relative">


<div className="flex items-center gap-2 sm:gap-4 ml-auto md:hidden">
<div className="relative group hidden sm:block">
<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500 animate-neon-pulse"></div>
<a className="relative flex items-center justify-center px-4 py-1.5 bg-[#030303] border border-neutral-800 rounded-full text-xs font-medium text-slate-50 hover:bg-neutral-900 transition-all font-geist" href="#booking">
                  Free AI Check
                </a>
</div>
<button aria-expanded="false" aria-label="Toggle navigation" className="hover:text-white transition-colors flex items-center justify-center p-1 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 rounded-md text-zinc-50" id="mobile-menu-btn" onclick="const menu = document.getElementById('mobile-menu'); const expanded = this.getAttribute('aria-expanded') === 'true'; this.setAttribute('aria-expanded', !expanded); menu.classList.toggle('opacity-0'); menu.classList.toggle('invisible'); menu.classList.toggle('-translate-y-4'); menu.classList.toggle('opacity-100'); menu.classList.toggle('visible'); menu.classList.toggle('translate-y-0');">
<iconify-icon className="md:text-2xl text-2xl" height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon>
</button>
</div><div className="flex-shrink-0 flex md:text-xl md:gap-x-3 text-lg font-semibold text-slate-50 tracking-tight font-geist gap-x-2 gap-y-2 items-center">
<svg className="h-6 w-auto md:h-8" viewbox="0 0 100 100">
<defs>
<lineargradient id="logo-blue" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#2563EB"></stop>
<stop offset="100%" stop-color="#0EA5E9"></stop>
</lineargradient>
<lineargradient id="logo-purple" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#9333EA"></stop>
<stop offset="100%" stop-color="#D946EF"></stop>
</lineargradient>
</defs>
<path className="" d="M50 0 L0 90 L45 75 Z" fill="url(#logo-blue)"></path>
<path className="" d="M50 0 L45 75 L95 100 Z" fill="url(#logo-purple)"></path>
<path className="" d="M50 0 L20 70 L45 75 Z" fill="#1E293B"></path>
</svg>
              Real Return
              <div className="h-6 md:h-7 px-1.5 md:px-2 bg-indigo-500/10 border border-indigo-500/30 rounded-lg flex items-center justify-center">
<span className="text-xs md:text-sm font-semibold tracking-wide text-indigo-500 font-geist">
                  AEO
                </span>
</div>
</div>

<div className="hidden md:flex flex-1 justify-center items-center gap-6 lg:gap-8 text-sm font-normal text-zinc-50">
<a className="hover:text-indigo-300 transition-colors drop-shadow-[0_0_5px_rgba(52,211,153,0)] hover:drop-shadow-[0_0_5px_rgba(52,211,153,0.5)] font-geist" href="#why-aeo">
                Why AEO
              </a>
<a className="hover:text-indigo-300 transition-colors drop-shadow-[0_0_5px_rgba(52,211,153,0)] hover:drop-shadow-[0_0_5px_rgba(52,211,153,0.5)] font-geist" href="#who-its-for">
                Who It's For
              </a>
<a className="hover:text-indigo-300 transition-colors drop-shadow-[0_0_5px_rgba(52,211,153,0)] hover:drop-shadow-[0_0_5px_rgba(52,211,153,0.5)] font-geist" href="#what-we-check">
                What We Check
              </a>
<a className="hover:text-indigo-300 transition-colors drop-shadow-[0_0_5px_rgba(52,211,153,0)] hover:drop-shadow-[0_0_5px_rgba(52,211,153,0.5)] font-geist" href="#pricing">
                Pricing
              </a>
</div>

<div className="hidden md:flex items-center justify-end flex-shrink-0 gap-4 ml-auto whitespace-nowrap">
<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500 animate-neon-pulse"></div>
<a className="relative flex items-center justify-center bg-[#030303] border border-neutral-800 rounded-full px-5 py-2 text-sm font-medium text-slate-50 transition-all hover:bg-neutral-900 font-geist" href="#booking">
                  Get Free AI Check
                </a>
</div>
</div>
</div>

<div className="absolute top-full left-0 w-full bg-[#030303]/95 backdrop-blur-xl border-b border-neutral-800/50 px-6 py-6 flex flex-col gap-6 shadow-2xl transition-all duration-300 opacity-0 -translate-y-4 invisible md:hidden z-40" id="mobile-menu">
<div className="flex flex-col gap-4 text-base font-normal text-zinc-50">
<a className="hover:text-indigo-300 transition-colors font-geist" href="#why-aeo">Why AEO</a>
<a className="hover:text-indigo-300 transition-colors font-geist" href="#who-its-for">Who It's For</a>
<a className="hover:text-indigo-300 transition-colors font-geist" href="#what-we-check">What We Check</a>
<a className="hover:text-indigo-300 transition-colors font-geist" href="#pricing">Pricing</a>
<a className="mt-2 text-indigo-400 font-medium hover:text-indigo-300 transition-colors font-geist" href="#booking">Get Free AI Check →</a>
</div>
</div>
</nav>

<section className="text-center max-w-[1000px] mr-auto ml-auto pt-16 md:pt-24 px-4 sm:px-6 pb-16">
<div className="scroll-reveal inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-neutral-900/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.5)] border border-neutral-700/50 mb-6 md:mb-8 backdrop-blur-md mx-auto is-revealed">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="inline-flex bg-lime-500 w-2 h-2 rounded-full relative shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
</span>
<span className="uppercase text-[10px] sm:text-xs font-light text-slate-50 tracking-wide drop-shadow-[0_0_5px_rgba(16,185,129,0.5)] font-geist">
              THE SEARCH REVOLUTION NOBODY WARNED YOU ABOUT
            </span>
</div>
<h1 className="scroll-reveal delay-100 sm:text-4xl md:text-6xl lg:text-7xl leading-tight md:mb-6 is-revealed text-3xl text-slate-50 tracking-tight mb-4 pt-2 pb-2 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)] font-geist font-semibold">The UK's AEO Agency - Your Customers Are Asking AI. <span className="bg-clip-text font-semibold text-transparent font-geist bg-lime-500">Are You In The Answer?</span></h1>
<p className="scroll-reveal delay-200 leading-relaxed sm:text-lg md:text-xl md:mb-10 sm:px-0 text-base text-gray-50/80 max-w-3xl mr-auto mb-8 ml-auto pr-2 pl-2 is-revealed font-geist font-semibold">Right now, ChatGPT, Perplexity, Claude, and Google's AI Overviews are answering millions of buying-intent queries every single day. The businesses that learned to be cited - rather than found - are pulling ahead. Most businesses have no idea this is happening to them.</p>

<div className="scroll-reveal delay-300 max-w-md mx-auto flex flex-col items-center justify-center gap-4 mb-12 md:mb-16 px-4 sm:px-0 is-revealed">
<div className="relative group w-full">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500 animate-neon-pulse"></div>
<a className="relative flex items-center justify-center w-full bg-[#030303] border border-neutral-800 rounded-full px-6 md:px-8 py-3.5 md:py-4 text-sm md:text-base font-medium text-slate-50 transition-all hover:bg-neutral-900 font-geist" href="#booking">
                Claim Your Free AI Visibility Check →
              </a>
</div>
<p className="text-[10px] sm:text-xs text-lime-400 font-extralight font-geist">30-minute working session. No charge. No obligation.</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left border-t border-neutral-800/60 pt-8 md:pt-10">
<div className="scroll-reveal-scale delay-100 bg-neutral-900/40 p-4 sm:p-5 rounded-2xl border border-neutral-800/50 is-revealed">
<div className="sm:text-3xl md:mb-2 text-2xl text-slate-50 mb-1 font-geist font-semibold">3x</div>
<p className="leading-relaxed text-xs font-light text-zinc-50 font-geist">Faster growth in AI-generated answers vs. traditional search clicks.</p>
</div>
<div className="scroll-reveal-scale delay-200 sm:p-5 bg-neutral-900/40 border-neutral-800/50 border rounded-2xl pt-4 pr-4 pb-4 pl-4 is-revealed">
<div className="sm:text-3xl md:mb-2 text-2xl text-lime-400 mb-1 font-geist font-semibold">300M</div>
<p className="leading-relaxed text-xs font-light text-zinc-50 font-geist">Chat GPT surpassed 300 million weekly users</p>
</div>
<div className="scroll-reveal-scale delay-300 sm:p-5 bg-neutral-900/40 border-neutral-800/50 border rounded-2xl pt-4 pr-4 pb-4 pl-4 is-revealed">
<div className="sm:text-3xl md:mb-2 text-2xl text-slate-50 mb-1 font-geist font-semibold">58%</div>
<p className="leading-relaxed text-xs font-light text-zinc-50 font-geist">Of adults now use Ai chat bots for product &amp; service research. </p>
</div>
<div className="scroll-reveal-scale delay-400 bg-neutral-900/40 p-4 sm:p-5 rounded-2xl border border-neutral-800/50 is-revealed">
<div className="sm:text-3xl md:mb-2 text-2xl text-lime-400 mb-1 font-geist font-semibold">1 Billion</div>
<p className="leading-relaxed text-xs font-light text-zinc-50 font-geist">Google AI Overviews serve 1B queries/month</p>
</div>
</div>
</section>
</div>
</div>

<main className="z-10 w-full relative">


<div className="md:py-24 z-10 bg-black/20 pt-16 pb-16 relative backdrop-blur-sm">

<section className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-16 md:mb-24">
<div className="text-center mb-10 md:mb-16">
<div className="scroll-reveal text-[10px] sm:text-xs uppercase sm:tracking-[0.25em] md:mb-4 text-lime-500/80 tracking-[0.2em] mb-3 font-geist">
              HOW SEARCH HAS CHANGED
            </div>
<h2 className="scroll-reveal delay-100 text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.15] md:leading-[1.1] text-slate-50 font-geist font-semibold">
              The Old Search vs. The New Reality
            </h2>
</div>
<div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-16">

<div className="scroll-reveal-scale delay-100 bg-neutral-900/40 border border-neutral-800/80 p-6 md:p-8 rounded-[2rem] shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)]">
<h3 className="text-xl md:text-2xl mb-4 md:mb-6 flex items-center gap-2 md:gap-3 text-gray-50 font-geist font-semibold">
<iconify-icon className="text-2xl text-neutral-500" height="24" icon="solar:mouse-circle-linear" strokeWidth="1.5" style={{color: 'rgb(115, 115, 115)'}} width="24"></iconify-icon>
                Traditional Search
              </h3>
<ul className="md:space-y-5 md:text-base text-sm space-y-4">
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2 shrink-0"></span>
<span className="font-light leading-relaxed text-zinc-50 font-geist">Customer types query → sees 10 blue links → clicks through to websites</span>
</li>
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2 shrink-0"></span>
<span className="font-light leading-relaxed text-zinc-50 font-geist">You rank page one → get traffic → make the pitch on your site</span>
</li>
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2 shrink-0"></span>
<span className="font-light leading-relaxed text-zinc-50 font-geist">Keywords, backlinks and page speed determined who won</span>
</li>
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2 shrink-0"></span>
<span className="leading-relaxed font-light text-zinc-50 font-geist">The customer did the comparing - you just had to show up</span>
</li>
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2 shrink-0"></span>
<span className="font-light leading-relaxed text-zinc-50 font-geist">Optimising for robots crawling your HTML</span>
</li>
</ul>
</div>

<div className="scroll-reveal-scale delay-200 bg-indigo-950/10 border border-indigo-500/20 p-6 md:p-8 rounded-[2rem] shadow-[inset_0_1px_15px_rgba(16,185,129,0.05),_0_0_30px_rgba(16,185,129,0.05)] relative overflow-hidden">
<div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-indigo-500/10 blur-[60px] md:blur-[80px] rounded-full pointer-events-none"></div>
<h3 className="md:text-2xl md:mb-6 flex items-center gap-2 md:gap-3 z-10 text-xl text-lime-400 mb-4 relative font-geist font-semibold">
<iconify-icon className="text-2xl text-indigo-500" height="24" icon="solar:stars-linear" strokeWidth="1.5" style={{color: 'rgb(115, 115, 115)'}} width="24"></iconify-icon>
                AI-Driven Search
              </h3>
<ul className="space-y-4 md:space-y-5 relative z-10 text-sm md:text-base">
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 shrink-0 bg-lime-400 rounded-full mt-2 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
<span className="font-light leading-relaxed text-gray-50 font-geist">Customer asks question → AI gives direct answer → customer acts on it</span>
</li>
<li className="flex gap-3 gap-x-3 gap-y-3 items-start">
<span className="w-1.5 h-1.5 shrink-0 bg-lime-500 rounded-full mt-2 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
<span className="leading-relaxed font-light text-gray-50 font-geist">AI recommends you specifically → customer arrives pre-sold, pre-qualified</span>
</li>
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 shrink-0 bg-lime-400 rounded-full mt-2 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
<span className="font-light leading-relaxed text-gray-50 font-geist">Authority, structure, citations and expertise signals now decide who wins</span>
</li>
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 shrink-0 bg-lime-400 rounded-full mt-2 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
<span className="leading-relaxed font-light text-gray-50 font-geist">The AI does the comparing - if you're not in its dataset, you're invisible</span>
</li>
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 shrink-0 bg-lime-400 rounded-full mt-2 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
<span className="font-light leading-relaxed text-gray-50 font-geist">Optimising for language models that assess credibility and clarity</span>
</li>
</ul>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
<div className="scroll-reveal-scale delay-100 bg-neutral-900/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-[inset_0_1px_10px_rgba(0,0,0,1)] border border-neutral-800 flex flex-col items-center text-center">
<div className="md:text-5xl md:mb-3 text-4xl text-lime-400 tracking-tight mb-2 font-geist font-semibold">73%</div>
<p className="text-xs md:text-sm font-light text-zinc-50 font-geist">Of AI-recommended businesses see enquiry quality improve</p>
</div>
<div className="scroll-reveal-scale delay-200 bg-neutral-900/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-[inset_0_1px_10px_rgba(0,0,0,1)] border border-neutral-800 flex flex-col items-center text-center">
<div className="text-4xl md:text-5xl tracking-tight mb-2 md:mb-3 text-slate-50 font-geist font-semibold">40%</div>
<p className="text-xs md:text-sm font-light text-zinc-50 font-geist">Reduction in consideration phase for AI-referred buyers</p>
</div>
<div className="scroll-reveal-scale delay-300 bg-neutral-900/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-[inset_0_1px_10px_rgba(0,0,0,1)] border border-neutral-800 flex flex-col items-center text-center">
<div className="md:text-5xl md:mb-3 text-4xl text-lime-400 tracking-tight mb-2 drop-shadow-[0_0_10px_rgba(16,185,129,0.4)] font-geist font-semibold">9 in 10</div>
<p className="text-xs md:text-sm font-light text-zinc-50 font-geist">businesses have never audited their AI visibility</p>
</div>
</div>

<div className="scroll-reveal delay-400 mt-10 md:mt-16 max-w-sm mx-auto flex flex-col items-center justify-center">
<div className="relative group w-full">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500 animate-neon-pulse"></div>
<a className="relative flex items-center justify-center w-full bg-[#030303] border border-neutral-800 rounded-full px-6 py-3.5 text-sm md:text-base font-medium text-slate-50 transition-all hover:bg-neutral-900 font-geist" href="#booking">
                Stop Losing to AI. Get Your Free Check →
              </a>
</div>
</div>
</section>

<section className="py-8 md:py-16 px-4 sm:px-6 max-w-[1200px] mx-auto text-center relative z-10" id="who-its-for">
<div className="scroll-reveal text-[10px] sm:text-xs uppercase sm:tracking-[0.25em] md:mb-4 text-lime-500/80 tracking-[0.2em] mb-3 font-geist">
            WHO THIS IS FOR
          </div>
<h2 className="scroll-reveal delay-100 text-3xl sm:text-4xl md:text-5xl tracking-tight mb-10 md:mb-16 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)] text-slate-50 leading-[1.15] md:leading-[1.1] font-geist font-semibold">
            Your Clients Are Already Asking AI.<br className="hidden md:block"/> The Question Is What It's Telling Them.
          </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 text-left">

<div className="scroll-reveal-scale delay-100 md:p-8 hover:bg-neutral-800/60 transition-colors group bg-neutral-900/40 border-neutral-800 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] backdrop-blur-sm">
<div className="md:w-12 md:h-12 flex md:mb-6 group-hover:border-indigo-500/40 transition-colors bg-indigo-950 w-10 h-10 border-indigo-500/20 border rounded-xl mb-5 shadow-[0_0_15px_rgba(16,185,129,0.1)] items-center justify-center">
<iconify-icon className="text-xl md:text-2xl drop-shadow-[0_0_5px_rgba(52,211,153,0.8)] text-indigo-500" icon="solar:briefcase-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="md:text-2xl text-xl text-blue-400 drop-shadow-[0_0_5px_rgba(245,158,11,0.8)]" height="20" icon="lucide:handshake" strokeWidth="1.5" style={{color: 'rgb(96, 165, 250)'}} width="20"></iconify-icon></div>
<div className="text-[10px] sm:text-xs font-light tracking-widest uppercase mb-1 md:mb-2 text-indigo-500 font-geist">01</div>
<h3 className="text-lg md:text-xl tracking-tight text-neutral-200 mb-2 md:mb-3 group-hover:text-indigo-300 transition-colors font-geist font-semibold">
                Professional Services
              </h3>
<p className="sm:text-sm leading-relaxed text-xs font-light text-zinc-50 font-geist">Accountants, solicitors, consultants, financial advisers, coaches. When someone asks AI "who should I trust with my money/business/future?" - is your name coming up? It can be.</p>
</div>

<div className="scroll-reveal-scale delay-200 bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 md:p-8 hover:bg-neutral-800/60 transition-colors backdrop-blur-sm group shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)]">
<div className="w-10 h-10 md:w-12 md:h-12 bg-blue-950 rounded-xl flex items-center justify-center mb-5 md:mb-6 shadow-[0_0_15px_rgba(245,158,11,0.1)] border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
<iconify-icon className="md:text-2xl text-xl text-blue-400 drop-shadow-[0_0_5px_rgba(245,158,11,0.8)]" height="20" icon="solar:home-2-linear" strokeWidth="1.5" style={{color: 'rgb(96, 165, 250)'}} width="20"></iconify-icon>
</div>
<div className="text-[10px] sm:text-xs text-blue-300 font-light tracking-widest uppercase mb-1 md:mb-2 font-geist">02</div>
<h3 className="text-lg md:text-xl tracking-tight text-neutral-200 mb-2 md:mb-3 group-hover:text-blue-300 transition-colors font-geist font-semibold">
                Trade &amp; Home Services
              </h3>
<p className="sm:text-sm leading-relaxed text-xs font-light text-zinc-50 font-geist">Builders, plumbers, electricians, architects, landscapers. Local AI recommendations are exploding. If you're not visible in them, you're losing work to whoever is - right now, today.</p>
</div>

<div className="scroll-reveal-scale delay-300 bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 md:p-8 hover:bg-neutral-800/60 transition-colors backdrop-blur-sm group shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)]">
<div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-950 rounded-xl flex items-center justify-center mb-5 md:mb-6 shadow-[0_0_15px_rgba(6,182,212,0.1)] border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
<iconify-icon className="text-xl md:text-2xl text-cyan-400 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]" icon="solar:cart-large-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-[10px] sm:text-xs text-cyan-300 font-light tracking-widest uppercase mb-1 md:mb-2 font-geist">03</div>
<h3 className="text-lg md:text-xl tracking-tight text-neutral-200 mb-2 md:mb-3 group-hover:text-cyan-300 transition-colors font-geist font-semibold">
                Specialist Retailers
              </h3>
<p className="text-xs sm:text-sm font-light leading-relaxed text-zinc-50 font-geist">
                When AI answers "what's the best X for Y situation?" with a product recommendation, that brand wins the purchase. Your inventory deserves to be in that answer.
              </p>
</div>

<div className="scroll-reveal-scale delay-100 bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 md:p-8 hover:bg-neutral-800/60 transition-colors backdrop-blur-sm group shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)]">
<div className="w-10 h-10 md:w-12 md:h-12 bg-rose-950 rounded-xl flex items-center justify-center mb-5 md:mb-6 shadow-[0_0_15px_rgba(244,63,94,0.1)] border border-rose-500/20 group-hover:border-rose-500/40 transition-colors">
<iconify-icon className="text-xl md:text-2xl text-rose-400 drop-shadow-[0_0_5px_rgba(244,63,94,0.8)]" icon="solar:heart-pulse-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-[10px] sm:text-xs text-rose-300 font-light tracking-widest uppercase mb-1 md:mb-2 font-geist">04</div>
<h3 className="text-lg md:text-xl tracking-tight text-neutral-200 mb-2 md:mb-3 group-hover:text-rose-300 transition-colors font-geist font-semibold">
                Health &amp; Wellness
              </h3>
<p className="text-xs sm:text-sm font-light leading-relaxed text-zinc-50 font-geist">
                Dentists, physios, nutritionists, therapists, clinics. Patients increasingly pre-qualify their practitioner using AI before booking. Your expertise needs to show up where they're looking.
              </p>
</div>

<div className="scroll-reveal-scale delay-200 bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 md:p-8 hover:bg-neutral-800/60 transition-colors backdrop-blur-sm group shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)]">
<div className="w-10 h-10 md:w-12 md:h-12 bg-violet-950 rounded-xl flex items-center justify-center mb-5 md:mb-6 shadow-[0_0_15px_rgba(139,92,246,0.1)] border border-violet-500/20 group-hover:border-violet-500/40 transition-colors">
<iconify-icon className="text-xl md:text-2xl text-violet-400 drop-shadow-[0_0_5px_rgba(139,92,246,0.8)]" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-[10px] sm:text-xs text-violet-300 font-light tracking-widest uppercase mb-1 md:mb-2 font-geist">05</div>
<h3 className="text-lg md:text-xl tracking-tight text-neutral-200 mb-2 md:mb-3 group-hover:text-violet-300 transition-colors font-geist font-semibold">
                Agencies &amp; Creative Studios
              </h3>
<p className="sm:text-sm leading-relaxed text-xs font-light text-zinc-50 font-geist">Marketing, design, development, video. When a founder asks AI "who should build our new website?" - that recommendation carries enormous weight. Your portfolio needs AI visibility too.</p>
</div>

<div className="scroll-reveal-scale delay-300 bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 md:p-8 hover:bg-neutral-800/60 transition-colors backdrop-blur-sm group shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)]">
<div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-950 rounded-xl flex items-center justify-center mb-5 md:mb-6 shadow-[0_0_15px_rgba(59,130,246,0.1)] border border-indigo-500/20 group-hover:border-indigo-500/40 transition-colors">
<iconify-icon className="text-xl md:text-2xl drop-shadow-[0_0_5px_rgba(59,130,246,0.8)] text-indigo-500" icon="solar:cup-hot-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-[10px] sm:text-xs font-light tracking-widest uppercase mb-1 md:mb-2 text-indigo-500 font-geist">06</div>
<h3 className="text-lg md:text-xl tracking-tight text-neutral-200 mb-2 md:mb-3 group-hover:text-indigo-300 transition-colors font-geist font-semibold">
                Hospitality &amp; Events
              </h3>
<p className="text-xs sm:text-sm font-light leading-relaxed text-zinc-50 font-geist">
                Restaurants, hotels, venues, caterers. "Where should I take a client for dinner?" and "best wedding venue in [area]?" are live AI queries happening right now. Are you in the answer?
              </p>
</div>
</div>

<div className="scroll-reveal delay-400 mt-12 md:mt-16 max-w-sm mx-auto flex flex-col items-center justify-center">
<div className="relative group w-full">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500 animate-neon-pulse"></div>
<a className="relative flex items-center justify-center w-full bg-[#030303] border border-neutral-800 rounded-full px-6 py-3.5 text-sm md:text-base font-medium text-slate-50 transition-all hover:bg-neutral-900 font-geist" href="#booking">
                See Where You Rank in AI Answers →
              </a>
</div>
</div>
</section>
</div>
<div className="w-full h-px relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-800/80 to-transparent"></div>
<div className="absolute left-1/2 -translate-x-1/2 w-48 md:w-64 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent drop-shadow-[0_0_8px_rgba(16,185,129,0.35)]"></div>
</div>

<section className="overflow-hidden md:py-24 z-10 pt-16 pb-16 relative">
<div className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-12 md:mb-16 text-center">
<div className="scroll-reveal text-[10px] uppercase sm:text-xs sm:tracking-[0.25em] md:mb-4 text-lime-500/80 tracking-[0.2em] mb-3 font-geist">
            TRUSTED BY GROWTH-FOCUSED BUSINESSES
          </div>
<h2 className="scroll-reveal delay-100 sm:text-4xl md:text-5xl md:mb-6 leading-[1.15] md:leading-[1.1] text-3xl text-slate-50 tracking-tight mb-4 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)] font-geist font-semibold">Real Businesses. Real Visibility. Real Return.</h2>
<p className="scroll-reveal delay-200 text-base sm:text-lg font-light text-zinc-50 max-w-2xl mx-auto font-geist">
            We've helped these businesses appear in AI-generated answers for their highest-value search queries.
          </p>
</div>

<div className="scroll-reveal delay-300 overflow-hidden md:mb-24 w-full max-w-[1200px] mr-auto mb-16 ml-auto relative">
<div className="flex w-full justify-center items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-500 mix-blend-screen text-gray-50" id="logo-marquee-track">
<div className="flex flex-wrap justify-center md:gap-x-20 gap-x-12 gap-y-10 items-center w-full">
<img alt="Stripe" className="h-8 md:h-12 lg:h-14 w-auto object-contain brightness-0 invert" src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"/>
<img alt="Dolby" className="h-8 md:h-12 lg:h-14 w-auto object-contain invert brightness-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cc3faa04-3141-4534-a2dc-2608dae0852d_320w.png?w=800&amp;q=80"/>
<img alt="Vercel" className="h-8 md:h-12 lg:h-14 w-auto object-contain invert brightness-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/37036c96-19d4-4e01-868d-f636892d974b_1600w.png?w=800&amp;q=80"/>
<img alt="Atlassian" className="h-8 md:h-12 lg:h-14 w-auto object-contain invert brightness-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/94bb0ae0-aaa4-423a-bf28-073a67c3642e_320w.png?w=800&amp;q=80"/>
<img alt="Palantir" className="h-8 md:h-12 lg:h-14 w-auto object-contain bg-center invert brightness-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eba045f7-2a71-45c2-a8e8-cadadde807bd_320w.png?w=800&amp;q=80"/>
</div>
</div>
</div>

<div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
<div className="scroll-reveal-scale delay-100 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 md:p-8 flex flex-col shadow-[inset_0_1px_10px_rgba(0,0,0,1)] relative">
<div className="md:top-8 md:left-8 md:text-5xl text-4xl text-slate-50/20 absolute top-6 left-6 font-geist font-semibold">"</div>
<p className="font-light leading-relaxed mb-6 md:mb-8 mt-4 md:mt-0 relative z-10 text-xs sm:text-sm text-gray-50 font-geist">
              We had no idea ChatGPT wasn't recommending us. Within 8 weeks of working with Real Return, we were appearing in AI answers for every core service we offer.
            </p>
<div className="mt-auto flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center shrink-0">
<iconify-icon className="text-neutral-500" height="16" icon="solar:user-linear" style={{color: 'rgb(115, 115, 115)'}} width="16"></iconify-icon>
</div>
<div className="">
<div className="text-xs sm:text-sm font-medium text-slate-50 font-geist">James C.</div>
<div className="text-[10px] sm:text-xs uppercase text-neutral-500 tracking-wider font-geist">Director, Legal Practice</div>
</div>
</div>
</div>
<div className="scroll-reveal-scale delay-200 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 md:p-8 flex flex-col shadow-[inset_0_1px_10px_rgba(0,0,0,1)] relative">
<div className="md:top-8 md:left-8 md:text-5xl text-4xl text-indigo-500/20 absolute top-6 left-6 font-geist font-semibold">"</div>
<p className="leading-relaxed md:mb-8 md:mt-0 z-10 sm:text-sm text-xs font-light text-gray-50 mt-4 mb-6 relative font-geist">The free check was genuinely eye-opening. They showed us exactly where we were invisible and gave us a clear roadmap.</p>
<div className="mt-auto flex items-center gap-3">
<div className="flex shrink-0 bg-neutral-800 w-10 h-10 border-neutral-700 border rounded-full items-center justify-center overflow-hidden">
<img alt="Man in casual t-shirt" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;w=150&amp;h=150&amp;q=80"/>
</div>
<div className="">
<div className="sm:text-sm text-xs font-medium text-slate-50 font-geist">Daniel C.</div>
<div className="text-[10px] sm:text-xs uppercase text-neutral-500 tracking-wider font-geist">Founder, Artificial Living</div>
</div>
</div>
</div>
<div className="scroll-reveal-scale delay-300 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 md:p-8 flex flex-col shadow-[inset_0_1px_10px_rgba(0,0,0,1)] relative">
<div className="absolute top-6 left-6 md:top-8 md:left-8 text-indigo-500/20 text-4xl md:text-5xl font-geist font-semibold">"</div>
<p className="leading-relaxed md:mb-8 md:mt-0 z-10 sm:text-sm text-xs font-light text-gray-50 mt-4 mb-6 relative font-geist">I'd been spending £3k/month on traditional SEO. Real Return showed me that not a penny of it was helping my AI visibility. We realigned the strategy and visibility has increased majorly.  </p>
<div className="mt-auto flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center shrink-0">
<iconify-icon className="text-neutral-500" icon="solar:user-linear"></iconify-icon>
</div>
<div className="">
<div className="text-xs sm:text-sm font-medium text-slate-50 font-geist">Michael T.</div>
<div className="text-[10px] sm:text-xs uppercase text-neutral-500 tracking-wider font-geist">MD, Financial Services</div>
</div>
</div>
</div>
</div>
</section>
<div className="w-full h-px relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-800/80 to-transparent"></div>
<div className="absolute left-1/2 -translate-x-1/2 w-48 md:w-64 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent drop-shadow-[0_0_8px_rgba(16,185,129,0.35)]"></div>
</div>

<section className="sm:px-6 md:py-24 max-w-[1200px] z-10 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4 relative" id="what-we-check">
<div className="max-w-2xl mx-auto text-center mb-12 md:mb-20">
<div className="scroll-reveal text-[10px] uppercase sm:text-xs sm:tracking-[0.25em] md:mb-4 text-lime-500/80 tracking-[0.2em] mb-3 font-geist">
            THE FREE AI VISIBILITY CHECK
          </div>
<h2 className="scroll-reveal delay-100 sm:text-4xl md:text-5xl leading-tight md:leading-[1.1] text-3xl text-slate-50 tracking-tight font-geist font-semibold">In 30 Minutes, You'll Know Exactly Where You Stand - And What To Do About It</h2>
<p className="scroll-reveal delay-200 md:mt-6 md:text-lg leading-relaxed text-base font-light text-zinc-50 mt-4 mr-auto ml-auto font-geist">We run your business through the major AI engines - ChatGPT, Perplexity, Google AI Overviews, and others - against the specific queries your ideal customers are asking. Then we show you precisely what comes back.</p>
</div>
<div className="relative max-w-4xl mx-auto" id="hardware-pipeline">
<style>
            @keyframes text-slide {
              0% { top: -150px; opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { top: 100%; opacity: 0; }
            }
          </style>

<div className="absolute left-1/2 top-10 bottom-10 w-4 -translate-x-1/2 bg-neutral-900/50 backdrop-blur-sm rounded-full z-0 hidden md:flex flex-col justify-between items-center py-0 border border-neutral-800 shadow-[inset_0_2px_10px_rgba(0,0,0,0.7)]">
<div className="absolute inset-y-0 w-1 bg-neutral-800 rounded-full overflow-hidden z-0">
<div className="absolute -top-32 left-0 w-full h-32 bg-gradient-to-b from-transparent via-indigo-500 to-transparent animate-[text-slide_3s_linear_infinite] shadow-[0_0_15px_rgba(16,185,129,0.8)]"></div>
</div>
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10 -mt-5"><div className="w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] border border-indigo-900"></div></div>
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10"><div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(245,158,11,0.8)] border border-blue-900"></div></div>
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10"><div className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)] border border-cyan-900"></div></div>
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10"><div className="w-3 h-3 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.8)] border border-violet-900"></div></div>
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10"><div className="w-3 h-3 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.8)] border border-rose-900"></div></div>
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10 -mb-5"><div className="w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] border border-indigo-900"></div></div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 mb-10 md:mb-16">
<div className="scroll-reveal delay-100 md:w-1/2 md:pr-16 w-full text-left md:text-right bg-neutral-900/30 md:bg-transparent p-5 md:p-0 rounded-2xl border border-neutral-800 md:border-transparent">
<div className="inline-flex gap-2 text-[10px] uppercase font-light text-slate-50/90 tracking-widest bg-indigo-500/10 border-indigo-500/20 border rounded-full mb-3 px-3 py-1.5 gap-x-2 gap-y-2 items-center font-geist">01. AI Presence Audit</div>
<p className="sm:text-sm leading-relaxed md:ml-auto text-xs font-light text-zinc-50 font-geist">We test 20+ relevant queries across ChatGPT, Perplexity &amp; Google AI Overviews to see exactly how and whether your business appears.</p>
</div>
<div className="md:w-1/2 md:pl-16 hidden md:block"></div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 mb-10 md:mb-16">
<div className="md:w-1/2 md:pr-16 hidden md:block"></div>
<div className="scroll-reveal delay-100 md:w-1/2 md:pl-16 w-full text-left bg-neutral-900/30 md:bg-transparent p-5 md:p-0 rounded-2xl border border-neutral-800 md:border-transparent">
<div className="inline-flex gap-2 text-[10px] uppercase font-light text-slate-50/90 tracking-widest bg-blue-500/10 border-blue-500/20 border rounded-full mb-3 px-3 py-1.5 gap-x-2 gap-y-2 items-center font-geist">02. Competitor Intelligence</div>
<p className="sm:text-sm leading-relaxed text-xs font-light text-zinc-50 font-geist">Who is appearing where you should be? We identify which competitors are winning AI visibility in your category &amp; why</p>
</div>
</div>

<div className="z-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 md:mb-16 mb-10 relative gap-x-4 gap-y-4 items-start">
<div className="scroll-reveal delay-100 md:w-1/2 md:pr-16 w-full text-left md:text-right bg-neutral-900/30 md:bg-transparent p-5 md:p-0 rounded-2xl border border-neutral-800 md:border-transparent">
<div className="inline-flex gap-2 text-[10px] uppercase font-light text-slate-50/90 tracking-widest bg-cyan-500/10 border-cyan-500/20 border rounded-full mb-3 px-3 py-1.5 gap-x-2 gap-y-2 items-center font-geist">03. Content Authority Score</div>
<p className="sm:text-sm leading-relaxed md:ml-auto text-xs font-light text-zinc-50 font-geist">AI engines reward depth and clarity of expertise. We assess how your current content reads to a language model evaluating trustworthiness.</p>
</div>
<div className="md:w-1/2 md:pl-16 hidden md:block"></div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 mb-10 md:mb-16">
<div className="md:w-1/2 md:pr-16 hidden md:block"></div>
<div className="scroll-reveal delay-100 md:w-1/2 md:pl-16 w-full text-left bg-neutral-900/30 md:bg-transparent p-5 md:p-0 rounded-2xl border border-neutral-800 md:border-transparent">
<div className="inline-flex gap-2 text-[10px] uppercase font-light text-slate-50/90 tracking-widest bg-violet-500/10 border-violet-500/20 border rounded-full mb-3 px-3 py-1.5 gap-x-2 gap-y-2 items-center font-geist">04. Structured Data Review</div>
<p className="sm:text-sm leading-relaxed text-xs font-light text-zinc-50 font-geist">Schema markup, entity associations and knowledge graph presence, the invisible architecture that tells AI engines who you are and what you do.</p>
</div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 mb-10 md:mb-16">
<div className="scroll-reveal delay-100 md:w-1/2 md:pr-16 w-full text-left md:text-right bg-neutral-900/30 md:bg-transparent p-5 md:p-0 rounded-2xl border border-neutral-800 md:border-transparent">
<div className="inline-flex gap-2 text-[10px] uppercase font-light text-slate-50/90 tracking-widest bg-rose-500/10 border-rose-500/20 border rounded-full mb-3 px-3 py-1.5 gap-x-2 gap-y-2 items-center font-geist">05. Citation &amp; Mention Analysis</div>
<p className="text-xs sm:text-sm font-light leading-relaxed md:ml-auto text-zinc-50 font-geist">AI builds its understanding of your business from what others say about you. We trace your citation footprint across the sources that matter most.</p>
</div>
<div className="md:w-1/2 md:pl-16 hidden md:block"></div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
<div className="md:w-1/2 md:pr-16 hidden md:block"></div>
<div className="scroll-reveal delay-100 md:w-1/2 md:pl-16 w-full text-left bg-neutral-900/30 md:bg-transparent p-5 md:p-0 rounded-2xl border border-neutral-800 md:border-transparent">
<div className="inline-flex gap-2 text-[10px] uppercase font-light text-slate-50/90 tracking-widest bg-indigo-500/10 border-indigo-500/20 border rounded-full mb-3 px-3 py-1.5 gap-x-2 gap-y-2 items-center font-geist">06. Priority Action Report</div>
<p className="sm:text-sm leading-relaxed text-xs font-light text-zinc-50 font-geist">Not a 40-page PDF nobody reads. A clear, prioritised list of what to fix first with specific actions ranked by impact and difficulty.</p>
</div>
</div>
</div>
<blockquote className="scroll-reveal delay-200 max-w-3xl mx-auto mt-16 md:mt-24 p-5 sm:p-6 md:p-8 bg-neutral-900/30 border border-neutral-800 rounded-2xl text-center shadow-[inset_0_1px_10px_rgba(0,0,0,1)] text-base md:text-lg font-light italic leading-relaxed text-gray-50 font-geist">
          "Most businesses don't know what AI is saying about them. Some are being described inaccurately. Some are invisible. Some are being actively displaced by a competitor who simply learned the new rules first."
        </blockquote>

<div className="scroll-reveal delay-300 mt-10 md:mt-12 max-w-sm mx-auto flex flex-col items-center justify-center">
<div className="relative group w-full">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500 animate-neon-pulse"></div>
<a className="relative flex items-center justify-center w-full bg-[#030303] border border-neutral-800 rounded-full px-6 py-3.5 text-sm md:text-base font-medium text-slate-50 transition-all hover:bg-neutral-900 font-geist" href="#booking">
              Book Your 30-Minute AI Audit →
            </a>
</div>
</div>
</section>

<section className="md:py-32 sm:px-6 z-10 max-w-[1200px] mr-auto ml-auto pt-16 pr-4 pb-16 pl-4 relative" id="booking">
<div className="scroll-reveal-scale bg-neutral-900/50 rounded-3xl md:rounded-[2.5rem] shadow-[inset_0_1px_10px_rgba(0,0,0,1)] flex flex-col lg:flex-row overflow-hidden border border-neutral-800 backdrop-blur-sm relative">

<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-transparent to-[#000000] pointer-events-none"></div>

<div className="sm:p-10 lg:p-16 flex-1 flex flex-col z-10 max-w-xl pt-6 pr-6 pb-6 pl-6 relative justify-center">
<div className="scroll-reveal delay-100 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-3 md:mb-4 text-slate-50/80 font-geist">
              BOOK YOUR FREE SESSION
            </div>
<h2 className="scroll-reveal delay-200 sm:text-4xl md:text-[2.75rem] md:mb-6 leading-[1.15] md:leading-[1.1] text-3xl font-semibold text-slate-50 tracking-tight font-geist mb-4">Find Out What AI Is Saying About Your Business - <span className="font-semibold text-lime-400 font-geist">Before Your Competitor Does</span></h2>
<p className="scroll-reveal delay-300 text-sm md:text-base font-extralight mb-8 md:mb-10 leading-relaxed text-zinc-50 font-geist">
              This is a working session, not a sales call in disguise. You will leave with a real picture of your AI visibility and specific steps to improve it. No charge. No obligation.
            </p>
<ul className="scroll-reveal delay-400 space-y-3 md:space-y-4">
<li className="flex text-xs sm:text-sm font-light text-gray-50 gap-x-3 gap-y-3 items-center font-geist">
<iconify-icon className="text-xl text-indigo-500" icon="solar:clock-circle-linear"></iconify-icon>
                Sessions last 30 minutes
              </li>
<li className="flex items-center gap-3 text-xs sm:text-sm font-light text-gray-50 font-geist">
<iconify-icon className="text-xl text-indigo-500" icon="solar:document-text-linear"></iconify-icon>
                We prepare your audit in advance
              </li>
<li className="flex items-center gap-3 text-xs sm:text-sm font-light text-gray-50 font-geist">
<iconify-icon className="text-xl text-indigo-500" icon="solar:shield-check-linear"></iconify-icon>
                Zero hard-sell, guaranteed
              </li>
<li className="flex items-center gap-3 text-xs sm:text-sm font-light text-gray-50 font-geist">
<iconify-icon className="text-xl text-indigo-500" icon="solar:users-group-two-rounded-linear"></iconify-icon>
                Spots are limited each week
              </li>
</ul>
</div>

<div className="scroll-reveal delay-500 flex-1 lg:border-t-0 lg:border-l p-6 sm:p-10 lg:p-16 bg-black/60 border-neutral-700/30 border-t relative">
<div className="absolute inset-0 pointer-events-none z-20 opacity-20 mix-blend-overlay" style={{background: 'repeating-linear-gradient(0deg, #000, #000 2px, transparent 2px, transparent 4px)'}}></div>
<form action="https://api.crm-system.com/v1/webhooks/leads" className="relative z-30 flex flex-col gap-4 md:gap-5" id="crm-integration-form" method="POST">

<input name="lead_source" type="hidden" value="AI_Visibility_Check_Landing_Page"/>
<input name="lead_status" type="hidden" value="New Lead"/>
<input name="campaign_id" type="hidden" value="ai_audit_promo"/>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
<div className="">
<label className="block text-[10px] md:text-xs font-light mb-1.5 md:mb-2 uppercase tracking-wide text-zinc-50 font-geist" htmlFor="first-name">First Name</label>
<input className="w-full bg-neutral-900/80 border border-neutral-700/50 rounded-xl px-4 py-2.5 md:py-3 text-xs md:text-sm text-neutral-200 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-colors shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]" id="first-name" name="first-name" required="" type="text"/>
</div>
<div className="">
<label className="block text-[10px] md:text-xs font-light mb-1.5 md:mb-2 uppercase tracking-wide text-zinc-50 font-geist" htmlFor="last-name">Last Name</label>
<input className="w-full bg-neutral-900/80 border border-neutral-700/50 rounded-xl px-4 py-2.5 md:py-3 text-xs md:text-sm text-neutral-200 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-colors shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]" id="last-name" name="last-name" required="" type="text"/>
</div>
</div>
<div className="">
<label className="block text-[10px] md:text-xs font-light mb-1.5 md:mb-2 uppercase tracking-wide text-zinc-50 font-geist" htmlFor="email">Email Address</label>
<input className="w-full bg-neutral-900/80 border border-neutral-700/50 rounded-xl px-4 py-2.5 md:py-3 text-xs md:text-sm text-neutral-200 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-colors shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]" id="email" name="email" required="" type="email"/>
</div>
<div className="">
<label className="block text-[10px] md:text-xs font-light mb-1.5 md:mb-2 uppercase tracking-wide text-zinc-50 font-geist" htmlFor="phone">Phone Number</label>
<input className="w-full bg-neutral-900/80 border border-neutral-700/50 rounded-xl px-4 py-2.5 md:py-3 text-xs md:text-sm text-neutral-200 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-colors shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]" id="phone" name="phone" type="tel"/>
</div>
<div className="">
<label className="block text-[10px] md:text-xs font-light mb-1.5 md:mb-2 uppercase tracking-wide text-zinc-50 font-geist" htmlFor="business">Business Name</label>
<input className="w-full bg-neutral-900/80 border border-neutral-700/50 rounded-xl px-4 py-2.5 md:py-3 text-xs md:text-sm text-neutral-200 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-colors shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]" id="business" name="business" required="" type="text"/>
</div>
<div className="">
<label className="block text-[10px] md:text-xs font-light mb-1.5 md:mb-2 uppercase tracking-wide text-zinc-50 font-geist">Industry</label>

<select className="hidden" id="industry-select" name="industry">
<option className="font-geist" value="">Select an industry</option>
<option className="font-geist" value="Professional Services">Professional Services</option>
<option className="font-geist" value="Trade &amp; Home Services">Trade &amp; Home Services</option>
<option className="font-geist" value="Health &amp; Wellness">Health &amp; Wellness</option>
<option className="font-geist" value="Retail &amp; E-commerce">Retail &amp; E-commerce</option>
<option className="font-geist" value="Agency &amp; Creative">Agency &amp; Creative</option>
<option className="font-geist" value="Hospitality &amp; Events">Hospitality &amp; Events</option>
<option className="font-geist" value="Other">Other</option>
</select>

<div className="custom-select-wrapper" id="custom-dropdown">
<div className="custom-select w-full bg-neutral-900/80 border border-neutral-700/50 rounded-xl px-4 py-2.5 md:py-3 text-xs md:text-sm text-neutral-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] flex items-center justify-between">
<span className="text-neutral-500 truncate font-geist" id="selected-text">Select an industry</span>
<iconify-icon className="text-neutral-500 shrink-0 ml-2" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="custom-options text-xs md:text-sm font-light">
<div className="custom-option font-geist" data-value="Professional Services">Professional Services</div>
<div className="custom-option font-geist" data-value="Trade &amp; Home Services">Trade &amp; Home Services</div>
<div className="custom-option font-geist" data-value="Health &amp; Wellness">Health &amp; Wellness</div>
<div className="custom-option font-geist" data-value="Retail &amp; E-commerce">Retail &amp; E-commerce</div>
<div className="custom-option font-geist" data-value="Agency &amp; Creative">Agency &amp; Creative</div>
<div className="custom-option font-geist" data-value="Hospitality &amp; Events">Hospitality &amp; Events</div>
<div className="custom-option font-geist" data-value="Other">Other</div>
</div>
</div>
</div>
<div className="">
<label className="block text-[10px] md:text-xs font-light mb-1.5 md:mb-2 uppercase tracking-wide text-zinc-50 font-geist" htmlFor="website">Website URL</label>
<input className="md:py-3 md:text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-colors placeholder:text-neutral-600 text-xs text-neutral-200 bg-neutral-900/80 w-full border-neutral-700/50 border rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]" id="website" name="website" placeholder="https://" required="" type="url"/>
</div>
<div className="relative group w-full mt-2 md:mt-4">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-500 animate-neon-pulse"></div>
<button className="relative flex items-center justify-center w-full bg-[#030303] border border-neutral-800 rounded-xl px-6 md:px-8 py-3.5 md:py-4 text-sm md:text-base font-medium text-slate-50 transition-all hover:bg-neutral-900 font-geist" type="submit">
                  Book My Free AI Check →
                </button>
</div>
</form>
</div>
</div>
</section><section className="md:py-24 sm:px-6 border-y z-10 bg-black/40 border-neutral-900 pt-16 pr-4 pb-16 pl-4 relative" id="pricing">
<div className="max-w-[1200px] mx-auto text-center">
<div className="scroll-reveal text-[10px] uppercase sm:text-xs sm:tracking-[0.25em] md:mb-4 text-lime-500 tracking-[0.2em] mb-3 font-geist">
            TRANSPARENT PRICING
          </div>
<h2 className="scroll-reveal delay-100 text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4 md:mb-6 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)] text-slate-50 leading-[1.15] md:leading-[1.1] font-geist font-semibold">
            Choose the Level of AI Visibility You Want to Own
          </h2>
<p className="scroll-reveal delay-200 text-base md:text-lg font-light max-w-2xl mx-auto mb-12 md:mb-16 text-zinc-50 font-geist">
            Every engagement starts with a free check. From there, choose the level of support that fits your ambition.
          </p>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left max-w-6xl mx-auto items-center">

<div className="scroll-reveal-scale delay-100 flex flex-col bg-neutral-900/40 h-full border-neutral-800 border rounded-3xl p-6 md:p-8 relative shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)]">
<h3 className="text-lg md:text-xl mb-2 text-slate-50 font-geist font-semibold">AI Visibility Audit</h3>
<div className="text-xs md:text-sm font-light mb-6 h-auto md:h-10 text-zinc-50 font-geist">Best for: Businesses who want to understand their position and act on it themselves</div>
<div className="text-3xl md:text-4xl text-slate-50 tracking-tight mb-6 md:mb-8 font-geist font-semibold">£500</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-xs sm:text-sm font-light text-gray-50 font-geist">
<iconify-icon className="mt-0.5 text-lg shrink-0 text-indigo-500" icon="solar:check-circle-linear"></iconify-icon>
                  Full AI Presence Audit (all major platforms)
                </li>
<li className="flex items-start gap-3 text-xs sm:text-sm font-light text-gray-50 font-geist">
<iconify-icon className="mt-0.5 text-lg shrink-0 text-indigo-500" icon="solar:check-circle-linear"></iconify-icon>
                  Competitor Displacement Analysis
                </li>
<li className="flex items-start gap-3 text-xs sm:text-sm font-light text-gray-50 font-geist">
<iconify-icon className="mt-0.5 text-lg shrink-0 text-indigo-500" icon="solar:check-circle-linear"></iconify-icon>
                  Structured Data &amp; Schema Review
                </li>
<li className="flex items-start gap-3 text-xs sm:text-sm font-light text-gray-50 font-geist">
<iconify-icon className="mt-0.5 text-lg shrink-0 text-indigo-500" icon="solar:check-circle-linear"></iconify-icon>
                  Content Authority Assessment
                </li>
<li className="flex items-start gap-3 text-xs sm:text-sm font-light text-gray-50 font-geist">
<iconify-icon className="mt-0.5 text-lg shrink-0 text-indigo-500" icon="solar:check-circle-linear"></iconify-icon>
                  Priority Action Report (written, specific, actionable)
                </li>
</ul>
<a className="w-full text-center px-6 py-3 bg-neutral-900 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors border border-neutral-800 text-slate-50 hover:border-indigo-500/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] font-geist" href="#booking">
                Start With Free Check
              </a>
</div>

<div className="scroll-reveal-scale delay-200 bg-indigo-950/10 border border-indigo-500/30 rounded-3xl p-6 md:p-8 flex flex-col h-full shadow-[inset_0_1px_15px_rgba(16,185,129,0.05),_0_0_30px_rgba(16,185,129,0.05)] relative transform lg:-translate-y-4 lg:pb-12 mt-6 lg:mt-0">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 text-[10px] uppercase tracking-widest rounded-full backdrop-blur-md font-medium text-indigo-500 whitespace-nowrap font-geist">
                MOST POPULAR
              </div>
<h3 className="md:text-xl text-lg text-lime-400 mb-2 font-geist font-semibold">AEO Accelerator</h3>
<div className="text-xs md:text-sm font-light mb-6 h-auto md:h-10 text-zinc-50 font-geist">Best for: Businesses ready to actively build and own their AI search position</div>
<div className="text-3xl md:text-4xl tracking-tight mb-6 md:mb-8 text-slate-50 font-geist font-semibold">£3,498</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200 font-light font-geist">
<iconify-icon className="mt-0.5 text-lg shrink-0 text-indigo-500" icon="solar:check-circle-linear"></iconify-icon>
                  Everything in Audit
                </li>
<li className="flex items-start gap-3 text-xs sm:text-sm font-light text-gray-50 font-geist">
<iconify-icon className="mt-0.5 text-lg shrink-0 text-indigo-500" icon="solar:check-circle-linear"></iconify-icon>
                  Monthly AI Visibility Monitoring
                </li>
<li className="flex items-start gap-3 text-xs sm:text-sm font-light text-gray-50 font-geist">
<iconify-icon className="mt-0.5 text-lg shrink-0 text-indigo-500" icon="solar:check-circle-linear"></iconify-icon>
                  Content optimisation for AI citation (2 pieces/month)
                </li>
<li className="flex items-start gap-3 text-xs sm:text-sm font-light text-gray-50 font-geist">
<iconify-icon className="mt-0.5 text-lg shrink-0 text-indigo-500" icon="solar:check-circle-linear"></iconify-icon>
                  Schema &amp; structured data implementation
                </li>
<li className="flex items-start gap-3 text-xs sm:text-sm font-light text-gray-50 font-geist">
<iconify-icon className="mt-0.5 text-lg shrink-0 text-indigo-500" icon="solar:check-circle-linear"></iconify-icon>
                  Citation building across high-trust sources
                </li>
</ul>
<div className="relative group w-full mt-auto">
<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500 animate-neon-pulse"></div>
<a className="flex items-center justify-center transition-all hover:bg-neutral-900 text-sm font-medium text-slate-50 font-geist bg-[#030303] w-full border-neutral-800 border rounded-full pt-3 pr-6 pb-3 pl-6 relative" href="#booking">
                  Start With Free Check
                </a>
</div>
</div>

<div className="scroll-reveal-scale delay-300 bg-neutral-900/40 border border-neutral-800 rounded-3xl p-6 md:p-8 flex flex-col h-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] relative">
<h3 className="text-lg md:text-xl mb-2 text-slate-50 font-geist font-semibold">AI Dominance</h3>
<div className="text-xs md:text-sm font-light mb-6 h-auto md:h-10 text-zinc-50 font-geist">Best for: Category leaders who want to own their niche in AI search entirely</div>
<div className="text-3xl md:text-4xl tracking-tight mb-6 md:mb-8 text-slate-50 font-geist font-semibold">£4,895</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200 font-light font-geist">
<iconify-icon className="mt-0.5 text-lg shrink-0 text-indigo-500" icon="solar:check-circle-linear"></iconify-icon>
                  Everything in Accelerator
                </li>
<li className="flex items-start gap-3 text-xs sm:text-sm font-light text-gray-50 font-geist">
<iconify-icon className="mt-0.5 text-lg shrink-0 text-indigo-500" icon="solar:check-circle-linear"></iconify-icon>
                  Full content strategy &amp; production (4 pieces/month)
                </li>
<li className="flex items-start gap-3 text-xs sm:text-sm font-light text-gray-50 font-geist">
<iconify-icon className="mt-0.5 text-lg shrink-0 text-indigo-500" icon="solar:check-circle-linear"></iconify-icon>
                  PR &amp; media placement for AI citation authority
                </li>
<li className="flex items-start gap-3 text-xs sm:text-sm font-light text-gray-50 font-geist">
<iconify-icon className="mt-0.5 text-lg shrink-0 text-indigo-500" icon="solar:check-circle-linear"></iconify-icon>
                  Knowledge graph entity optimisation
                </li>
<li className="flex items-start gap-3 text-xs sm:text-sm font-light text-gray-50 font-geist">
<iconify-icon className="mt-0.5 text-lg shrink-0 text-indigo-500" icon="solar:check-circle-linear"></iconify-icon>
                  Competitor suppression strategy
                </li>
</ul>
<a className="w-full text-center px-6 py-3 bg-neutral-900 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors border border-neutral-800 text-slate-50 hover:border-indigo-500/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] font-geist" href="#booking">
                Start With Free Check
              </a>
</div>
</div>
<p className="scroll-reveal delay-400 text-[10px] sm:text-xs text-neutral-500 font-light mt-8 md:mt-10 px-4 font-geist">
            All engagements begin with a free AI Visibility Check. No minimum contract on Audit. 3-month minimum on retainers.
          </p>
</div>
</section>


<section className="sm:px-6 md:pt-24 max-w-[1200px] z-10 mr-auto ml-auto pt-16 pr-4 pl-4 relative">
<div className="scroll-reveal-scale delay-100 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 overflow-hidden bg-neutral-900/40 border-neutral-800 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] backdrop-blur-sm gap-x-8 gap-y-8 items-center">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none"></div>
<div className="md:w-1/2 relative z-10">
<div className="inline-flex gap-2 text-[10px] sm:text-xs uppercase font-light text-slate-50/90 tracking-widest bg-lime-500/10 border-lime-500/20 border rounded-full mb-5 px-3 py-1.5 items-center font-geist">
<iconify-icon className="text-lime-400 text-sm md:text-base" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
              Altrincham, Cheshire
            </div>
<h2 className="text-3xl sm:text-4xl tracking-tight mb-4 text-slate-50 leading-[1.15] font-geist font-semibold">
              Real People Behind The AI Revolution
            </h2>
<p className="text-xs sm:text-sm md:text-base font-light leading-relaxed text-zinc-50 mb-4 font-geist">
              In a world increasingly run by algorithms and automated bots, we believe the best strategy still requires a human touch. We aren't a faceless agency or an outsourced operation.
            </p>
<p className="text-xs sm:text-sm md:text-base font-light leading-relaxed text-zinc-50 font-geist">
              We're a dedicated, UK-based team working right out of Altrincham, Cheshire. When you partner with us or book a session, you're speaking directly to the specialists who will be auditing your business and building your visibility.
            </p>
</div>
<div className="md:w-1/2 w-full relative z-10">
<div className="aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-800 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative group">
<div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay pointer-events-none"></div>
<img alt="UK Office" className="group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6f9d1422-9640-41f8-9d4d-bb855bd7b421_1600w.jpg?w=800&amp;q=80"/>
</div>
</div>
</div>
</section>

<footer className="md:py-16 z-10 md:mt-24 text-sm bg-[#030303] border-neutral-800/50 border-t mt-16 pt-12 pb-12 relative">
<div className="max-w-[1200px] mx-auto px-4 sm:px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8">

<div className="col-span-2 lg:col-span-2 flex flex-col items-start">
<div className="flex gap-x-2 items-center text-base font-normal text-slate-50 tracking-tight mb-4 font-geist">
<svg className="h-5 w-auto" viewbox="0 0 100 100">
<defs>
<lineargradient id="logo-blue-footer" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#2563EB"></stop>
<stop offset="100%" stop-color="#0EA5E9"></stop>
</lineargradient>
<lineargradient id="logo-purple-footer" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#9333EA"></stop>
<stop offset="100%" stop-color="#D946EF"></stop>
</lineargradient>
</defs>
<path d="M50 0 L0 90 L45 75 Z" fill="url(#logo-blue-footer)"></path>
<path d="M50 0 L45 75 L95 100 Z" fill="url(#logo-purple-footer)"></path>
<path d="M50 0 L20 70 L45 75 Z" fill="#1E293B"></path>
</svg>
                Real Return
              </div>
<p className="text-neutral-500 mb-6 font-light font-geist">The search revolution nobody warned you about.</p>

<div className="flex items-center gap-4 mt-auto">
<a className="text-neutral-500 hover:text-slate-50 transition-colors duration-200 font-geist" href="#">
                  Twitter
                </a>
<a className="text-neutral-500 hover:text-slate-50 transition-colors duration-200 font-geist" href="#">
                  LinkedIn
                </a>
<a className="text-neutral-500 hover:text-slate-50 transition-colors duration-200 font-geist" href="#">
                  GitHub
                </a>
</div>
</div>

<div className="col-span-1 flex flex-col gap-4">
<h4 className="text-sm font-medium text-slate-50 mb-1 font-geist">Services</h4>
<a className="text-sm font-light text-neutral-400 hover:text-slate-50 transition-colors duration-200 font-geist" href="#">AI Presence Audit</a>
<a className="text-sm font-light text-neutral-400 hover:text-slate-50 transition-colors duration-200 font-geist" href="#">AEO Accelerator</a>
<a className="text-sm font-light text-neutral-400 hover:text-slate-50 transition-colors duration-200 font-geist" href="#">AI Dominance</a>
<a className="text-sm font-light text-neutral-400 hover:text-slate-50 transition-colors duration-200 font-geist" href="#">Competitor Intelligence</a>
</div>

<div className="col-span-1 flex flex-col gap-4">
<h4 className="text-sm font-medium text-slate-50 mb-1 font-geist">Resources</h4>
<a className="hover:text-slate-50 transition-colors duration-200 text-sm font-light text-neutral-400 font-geist" href="#">What We Check</a>
<a className="text-sm font-light text-neutral-400 hover:text-slate-50 transition-colors duration-200 font-geist" href="#">Why AEO</a>
<a className="text-sm font-light text-neutral-400 hover:text-slate-50 transition-colors duration-200 font-geist" href="#">Case Studies</a>
<a className="text-sm font-light text-neutral-400 hover:text-slate-50 transition-colors duration-200 font-geist" href="#">Help Center</a>
</div>
</div>

<div className="mt-12 md:mt-16 pt-8 border-t border-neutral-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-neutral-500">
<p className="font-geist">© 2025 Real Return Marketing. All rights reserved.</p>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 font-geist">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                 All systems operational
               </div>
</div>
</div>
</div>
</footer>
</main>



    </>
  );
}
