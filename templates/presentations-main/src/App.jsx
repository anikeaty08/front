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



        // --- Smooth Scroll Setup (Lenis) - Simplified Configuration ---
        const lenis = new Lenis({
            smoothWheel: true,
            lerp: 0.08
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        // --- Highly Optimized Canvas Background Logic ---
        const canvas = document.getElementById('dots-canvas');
        const ctx = canvas.getContext('2d');
        
        // We use an offscreen canvas to draw the heavy grid once
        const offscreen = document.createElement('canvas');
        const offCtx = offscreen.getContext('2d');
        
        let mouseX = -1000;
        let mouseY = -1000;

        function resizeCanvas() {
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
            offscreen.width = canvas.width;
            offscreen.height = canvas.height;
            drawBaseGrid();
        }

        // Draw the massive grid of dots only when the window resizes
        function drawBaseGrid() {
            const space = 32;
            const radius = 1.5;
            const rows = Math.ceil(offscreen.height / space);
            const cols = Math.ceil(offscreen.width / space);

            offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
            offCtx.fillStyle = 'rgba(0, 85, 255, 0.15)'; 

            offCtx.beginPath();
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const x = c * space + space / 2;
                    const y = r * space + space / 2;
                    // Rect is dramatically faster than Arc for rendering
                    offCtx.rect(x - radius, y - radius, radius * 2, radius * 2);
                }
            }
            offCtx.fill();
        }

        window.addEventListener('resize', resizeCanvas);
        
        // Track mouse relative to the canvas
        window.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        });

        // Fast animation loop uses compositing to highlight dots
        function animateDots() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // 1. Draw the pre-rendered grid (super fast)
            ctx.drawImage(offscreen, 0, 0);

            // 2. Apply the hover gradient using source-atop
            if (mouseX > -200 && mouseY > -200) {
                const maxDist = 350;
                
                // Only draws on top of existing pixels (the dots)
                ctx.globalCompositeOperation = 'source-atop'; 
                
                const grad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, maxDist);
                grad.addColorStop(0, 'rgba(0, 85, 255, 0.8)');
                grad.addColorStop(1, 'rgba(0, 85, 255, 0)');
                
                ctx.fillStyle = grad;
                ctx.fillRect(mouseX - maxDist, mouseY - maxDist, maxDist * 2, maxDist * 2);
                
                ctx.globalCompositeOperation = 'source-over'; // reset
            }
            
            requestAnimationFrame(animateDots);
        }
        
        // Initialize Canvas
        resizeCanvas();
        animateDots();

        // --- Horizontal Scroll Portfolio Logic ---
        const portfolioSection = document.querySelector('#portfolio');
        const track = document.querySelector('#carousel-track');
        const progressBar = document.querySelector('#progress-bar');
        
        let currentScroll = 0;
        let targetScroll = 0;
        let currentProgress = 0;
        let targetProgress = 0;

        const ease = 0.08; 

        function animatePortfolio() {
            currentScroll += (targetScroll - currentScroll) * ease;
            currentProgress += (targetProgress - currentProgress) * ease;
            track.style.transform = `translateX(${currentScroll}px)`;
            progressBar.style.width = `${currentProgress * 100}%`;

            requestAnimationFrame(animatePortfolio);
        }

        function handleScroll() {
            const rect = portfolioSection.getBoundingClientRect();
            const trackWidth = track.scrollWidth;
            const windowWidth = window.innerWidth;
            const scrollableHeight = portfolioSection.offsetHeight - windowHeight;
            const scrolled = -rect.top;
            
            if (rect.top <= 0 && rect.bottom >= 0) {
                const percentage = Math.min(Math.max(scrolled / scrollableHeight, 0), 1);
                targetScroll = -(trackWidth - windowWidth) * percentage;
                targetProgress = percentage;
            }
        }
        
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        
        animatePortfolio();
    
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
      

<nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 md:py-8 mix-blend-difference text-white pointer-events-auto">
<a className="text-base font-normal cursor-pointer hover:opacity-70 transition-opacity" href="#" onclick="lenis.scrollTo('#hero')">
            elevatestudio
        </a>
<div className="flex gap-8 text-sm font-light">
<button className="hover:opacity-60 transition-opacity cursor-pointer hidden md:block" onclick="lenis.scrollTo('#services')">services</button>
<button className="hover:opacity-60 transition-opacity cursor-pointer hidden md:block" onclick="lenis.scrollTo('#process')">process</button>
<button className="hover:opacity-60 transition-opacity cursor-pointer" onclick="lenis.scrollTo('#portfolio')">portfolio</button>
<button className="hover:opacity-60 transition-opacity cursor-pointer" onclick="lenis.scrollTo('#cta')">contact</button>
</div>
</nav>

<header className="h-screen flex flex-col w-full px-6 md:px-12 relative overflow-hidden" id="hero">

<canvas className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none" id="dots-canvas"></canvas>
<div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-neutral-200 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/4 -z-20 opacity-30 pointer-events-none"></div>

<div className="flex-grow flex flex-col justify-end items-end w-full pb-12 z-10 pointer-events-auto">
<div className="w-full flex flex-col items-end text-right">
<div className="reveal-text w-full">
<h1 className="text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] font-normal text-neutral-900 mb-8 text-right tracking-tight">
                        presentations<br/>that win.
                    </h1>
</div>
<div className="reveal-text delay-100 flex flex-col items-end max-w-2xl">
<p className="text-lg md:text-xl font-light leading-relaxed text-neutral-500 mb-12 text-right">
                        we combine strategic storytelling with refined visual design to create presentations that persuade, not just inform.
                    </p>
<button className="group inline-flex items-center gap-2 text-sm font-normal border-b border-neutral-300 pb-1 transition-colors hover:border-[#0055FF] hover:text-[#0055FF] cursor-pointer" onclick="lenis.scrollTo('#portfolio')">
                        view portfolio
                        <iconify-icon className="group-hover:translate-y-0.5 transition-transform text-[#0055FF]" icon="solar:arrow-down-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="w-full py-8 flex justify-between items-center reveal-text delay-200 border-t border-neutral-200/50">
<div className="flex gap-12">
<div className="hidden md:block">
<span className="text-xs font-normal flex items-center gap-2 text-neutral-500">
<span className="w-2 h-2 bg-[#0055FF] rounded-full animate-pulse"></span>
                        accepting new clients
                    </span>
</div>
</div>
<div className="text-xs text-neutral-400 font-normal">
                scroll to explore
            </div>
</div>
</header>

<section className="py-32 bg-white relative z-10 border-t border-neutral-100 overflow-hidden" id="services">
<div className="w-full px-6 md:px-12 mx-auto max-w-7xl">
<div className="text-sm text-[#0055FF] mb-16 flex items-center gap-3 font-normal">
<span className="w-1.5 h-1.5 bg-[#0055FF] rounded-full"></span>
                our expertise
            </div>
<div className="flex flex-col border-t border-neutral-200">

<div className="group border-b border-neutral-200 py-10 md:py-16 flex items-center justify-between cursor-pointer hover:bg-[#fafafa] transition-colors px-4 md:px-8 -mx-4 md:-mx-8">
<h3 className="text-4xl md:text-5xl lg:text-7xl font-normal text-neutral-900 tracking-tight group-hover:translate-x-6 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                        investor pitch decks
                    </h3>
<div className="opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] text-[#0055FF]">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>

<div className="group border-b border-neutral-200 py-10 md:py-16 flex items-center justify-between cursor-pointer hover:bg-[#fafafa] transition-colors px-4 md:px-8 -mx-4 md:-mx-8">
<h3 className="text-4xl md:text-5xl lg:text-7xl font-normal text-neutral-900 tracking-tight group-hover:translate-x-6 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                        series a–c fundraising
                    </h3>
<div className="opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] text-[#0055FF]">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>

<div className="group border-b border-neutral-200 py-10 md:py-16 flex items-center justify-between cursor-pointer hover:bg-[#fafafa] transition-colors px-4 md:px-8 -mx-4 md:-mx-8">
<h3 className="text-4xl md:text-5xl lg:text-7xl font-normal text-neutral-900 tracking-tight group-hover:translate-x-6 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                        sales presentations
                    </h3>
<div className="opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] text-[#0055FF]">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>

<div className="group border-b border-neutral-200 py-10 md:py-16 flex items-center justify-between cursor-pointer hover:bg-[#fafafa] transition-colors px-4 md:px-8 -mx-4 md:-mx-8">
<h3 className="text-4xl md:text-5xl lg:text-7xl font-normal text-neutral-900 tracking-tight group-hover:translate-x-6 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                        board reports
                    </h3>
<div className="opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] text-[#0055FF]">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>

<div className="group border-b border-neutral-200 py-10 md:py-16 flex items-center justify-between cursor-pointer hover:bg-[#fafafa] transition-colors px-4 md:px-8 -mx-4 md:-mx-8">
<h3 className="text-4xl md:text-5xl lg:text-7xl font-normal text-neutral-900 tracking-tight group-hover:translate-x-6 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                        keynote &amp; conference
                    </h3>
<div className="opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] text-[#0055FF]">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>

<div className="group py-10 md:py-16 flex items-center justify-between cursor-pointer hover:bg-[#fafafa] transition-colors px-4 md:px-8 -mx-4 md:-mx-8">
<h3 className="text-4xl md:text-5xl lg:text-7xl font-normal text-neutral-900 tracking-tight group-hover:translate-x-6 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                        product launches
                    </h3>
<div className="opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] text-[#0055FF]">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-white border-t border-neutral-100 relative z-10" id="process">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl md:text-5xl font-normal text-neutral-900 mb-20 tracking-tight">strategy first. design second.</h2>
<div className="flex flex-col md:flex-row gap-12 md:gap-8 relative">

<div className="hidden md:block absolute top-[11px] left-0 w-full h-[1px] bg-[#0055FF]/20"></div>

<div className="flex-1 relative">
<div className="w-2 h-2 rounded-full bg-[#0055FF] absolute top-[8px] left-0 hidden md:block ring-4 ring-white"></div>
<span className="text-xs font-normal text-neutral-400 mb-2 block md:mt-8">step 1</span>
<h3 className="text-xl font-normal text-neutral-900 mb-3 tracking-tight">narrative architecture</h3>
<p className="text-base text-neutral-500 leading-relaxed font-light">we structure your story around clarity, tension, and proof.</p>
</div>

<div className="flex-1 relative">
<div className="w-2 h-2 rounded-full bg-[#0055FF] absolute top-[8px] left-0 hidden md:block ring-4 ring-white"></div>
<span className="text-xs font-normal text-neutral-400 mb-2 block md:mt-8">step 2</span>
<h3 className="text-xl font-normal text-neutral-900 mb-3 tracking-tight">slide system design</h3>
<p className="text-base text-neutral-500 leading-relaxed font-light">typography, layout, iconography, and visual hierarchy.</p>
</div>

<div className="flex-1 relative">
<div className="w-2 h-2 rounded-full bg-[#0055FF] absolute top-[8px] left-0 hidden md:block ring-4 ring-white"></div>
<span className="text-xs font-normal text-neutral-400 mb-2 block md:mt-8">step 3</span>
<h3 className="text-xl font-normal text-neutral-900 mb-3 tracking-tight">data visualization</h3>
<p className="text-base text-neutral-500 leading-relaxed font-light">charts that clarify, not clutter.</p>
</div>

<div className="flex-1 relative">
<div className="w-2 h-2 rounded-full bg-[#0055FF] absolute top-[8px] left-0 hidden md:block ring-4 ring-white"></div>
<span className="text-xs font-normal text-neutral-400 mb-2 block md:mt-8">step 4</span>
<h3 className="text-xl font-normal text-neutral-900 mb-3 tracking-tight">final polish</h3>
<p className="text-base text-neutral-500 leading-relaxed font-light">animation guidance, speaker notes, delivery coaching.</p>
</div>
</div>
</div>
</section>

<section className="relative h-[300vh] bg-[#fafafa] z-0 border-t border-neutral-100" id="portfolio">
<div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center bg-[#fafafa]">
<div className="absolute top-0 left-0 w-full px-6 md:px-12 pt-24 flex justify-between items-start z-10 pointer-events-none">
<h2 className="text-3xl font-normal text-neutral-900 tracking-tight">portfolio showcase</h2>
<span className="text-xs font-normal text-neutral-400">01 — 04</span>
</div>
<div className="flex items-center gap-8 md:gap-16 pl-6 md:pl-12 w-max will-change-transform mt-12" id="carousel-track">

<article className="group relative w-[85vw] md:w-[1150px] shrink-0 cursor-pointer">
<div className="w-full h-[60vh] md:h-[800px] max-h-[70vh] overflow-hidden rounded-xl bg-neutral-100 relative border border-neutral-200/60 shadow-sm">
<img alt="Fintech Series A" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h3 className="text-2xl font-normal text-neutral-900 tracking-tight">fintech series a</h3>
<p className="text-sm font-light text-neutral-400 mt-1">investor pitch deck</p>
</div>
<div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
</article>

<article className="group relative w-[85vw] md:w-[1150px] shrink-0 cursor-pointer">
<div className="w-full h-[60vh] md:h-[800px] max-h-[70vh] overflow-hidden rounded-xl bg-neutral-100 relative border border-neutral-200/60 shadow-sm">
<img alt="Healthcare Investor Deck" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h3 className="text-2xl font-normal text-neutral-900 tracking-tight">healthcare investor deck</h3>
<p className="text-sm font-light text-neutral-400 mt-1">fundraising</p>
</div>
<div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
</article>

<article className="group relative w-[85vw] md:w-[1150px] shrink-0 cursor-pointer">
<div className="w-full h-[60vh] md:h-[800px] max-h-[70vh] overflow-hidden rounded-xl bg-neutral-100 relative border border-neutral-200/60 shadow-sm">
<img alt="AI Product Launch" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h3 className="text-2xl font-normal text-neutral-900 tracking-tight">ai product launch</h3>
<p className="text-sm font-light text-neutral-400 mt-1">conference slides</p>
</div>
<div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
</article>

<article className="group relative w-[85vw] md:w-[1150px] shrink-0 cursor-pointer pr-12 md:pr-24">
<div className="w-full h-[60vh] md:h-[800px] max-h-[70vh] overflow-hidden rounded-xl bg-neutral-100 relative border border-neutral-200/60 shadow-sm">
<img alt="Enterprise SaaS Board Deck" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h3 className="text-2xl font-normal text-neutral-900 tracking-tight">enterprise saas board deck</h3>
<p className="text-sm font-light text-neutral-400 mt-1">board reports</p>
</div>
<div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
</article>
</div>

<div className="absolute bottom-12 left-6 md:left-12 w-32 h-[1px] bg-neutral-200 overflow-hidden">
<div className="h-full bg-[#0055FF] w-0" id="progress-bar"></div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-white relative z-10 border-t border-neutral-100">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl md:text-5xl font-normal text-neutral-900 mb-8 tracking-tight">design changes outcomes.</h2>
<p className="text-xl font-light text-neutral-500 mb-10 leading-relaxed tracking-tight">
                    investors decide in minutes.<br/>
                    clients decide in seconds.
                </p>
<p className="text-base font-light text-neutral-600 mb-6">a clear, structured, visually disciplined presentation increases:</p>
<ul className="space-y-4 text-neutral-800 text-base font-normal">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#0055FF]" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon> investor confidence
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#0055FF]" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon> audience retention
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#0055FF]" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon> perceived valuation
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#0055FF]" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon> close rates
                    </li>
</ul>
</div>

<div className="bg-[#fafafa] p-12 md:p-16 rounded-3xl border border-neutral-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex items-center justify-center text-center">
<p className="text-2xl md:text-3xl font-normal text-neutral-900 leading-snug tracking-tight">
<span className="text-[#0055FF] block text-6xl md:text-7xl mb-6 font-normal tracking-tight">83%</span>
                    of investors say clarity of narrative impacts funding decisions more than visuals alone.
                </p>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-white relative z-10 border-t border-neutral-100">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl font-normal text-neutral-900 mb-16 text-center tracking-tight">pricing snapshot</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-10 rounded-2xl border border-neutral-200 shadow-sm flex flex-col">
<h3 className="text-2xl font-normal text-neutral-900 mb-2 tracking-tight">pitch deck</h3>
<p className="text-neutral-500 font-light text-sm mb-8">starting at $4,500</p>
<ul className="text-sm font-light text-neutral-600 space-y-4 mb-10 flex-grow">
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon> full narrative restructure
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon> 15–20 high-fidelity slides
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon> data visualization
                        </li>
</ul>
</div>

<div className="bg-white p-10 rounded-2xl border border-[#0055FF] shadow-[0_8px_30px_rgba(0,85,255,0.08)] flex flex-col relative scale-100 md:scale-105 z-10">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0055FF] text-white text-xs px-4 py-1 rounded-full font-normal">most popular</div>
<h3 className="text-2xl font-normal text-neutral-900 mb-2 tracking-tight">enterprise sales deck</h3>
<p className="text-[#0055FF] text-sm font-normal mb-8">starting at $6,000</p>
<ul className="text-sm font-light text-neutral-600 space-y-4 mb-10 flex-grow">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#0055FF] mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon> modular slide library
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#0055FF] mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon> storyboard &amp; messaging matrix
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#0055FF] mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon> advanced animations
                        </li>
</ul>
</div>

<div className="bg-white p-10 rounded-2xl border border-neutral-200 shadow-sm flex flex-col">
<h3 className="text-2xl font-normal text-neutral-900 mb-2 tracking-tight">ongoing partner</h3>
<p className="text-neutral-500 font-light text-sm mb-8">custom retainer</p>
<ul className="text-sm font-light text-neutral-600 space-y-4 mb-10 flex-grow">
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon> dedicated design hours
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon> rapid slide turnarounds
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon> team templates &amp; governance
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[#fafafa] relative z-10 border-t border-neutral-100">
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl font-normal text-neutral-900 mb-12 tracking-tight">frequently asked questions</h2>
<div className="space-y-8">
<div className="border-b border-neutral-200 pb-8">
<h4 className="text-lg font-normal text-neutral-900 mb-3 tracking-tight">how long does it take?</h4>
<p className="text-base font-light text-neutral-500">typically 5–10 business days depending on scope and complexity.</p>
</div>
<div className="border-b border-neutral-200 pb-8">
<h4 className="text-lg font-normal text-neutral-900 mb-3 tracking-tight">do you rewrite content?</h4>
<p className="text-base font-light text-neutral-500">yes. we refine narrative structure and messaging to ensure clarity and impact.</p>
</div>
<div className="border-b border-neutral-200 pb-8">
<h4 className="text-lg font-normal text-neutral-900 mb-3 tracking-tight">do you work with agencies or vcs?</h4>
<p className="text-base font-light text-neutral-500">yes. we frequently collaborate with venture funds and corporate teams as an extended resource.</p>
</div>
</div>
</div>
</section>

<footer className="relative z-20 bg-[#0B1221] text-white overflow-hidden py-32 px-6 md:px-12 text-center" id="cta">
<div className="max-w-4xl mx-auto relative z-10">
<h2 className="text-5xl md:text-6xl lg:text-7xl font-normal mb-8 tracking-tight">
                ready to elevate<br/>your next presentation?
            </h2>
<p className="text-lg md:text-xl text-slate-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                let’s design a deck that commands attention and earns trust.
            </p>
<button className="bg-[#0055FF] text-white px-8 py-4 rounded-full text-sm font-normal hover:bg-blue-600 transition-colors inline-flex items-center gap-2 group shadow-lg shadow-[#0055FF]/20">
                book strategy call
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>

<div className="mt-32 pt-8 border-t border-slate-800 text-xs font-normal text-slate-500 flex justify-between items-center max-w-7xl mx-auto">
<span>© elevatestudio</span>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">linkedin</a>
<a className="hover:text-white transition-colors" href="#">twitter</a>
</div>
</div>
</footer>



    </>
  );
}
