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



        // Smooth Time Update
        function updateTime() {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
            document.getElementById('time').textContent = timeString;
        }
        setInterval(updateTime, 1000);
        updateTime();

        // Hero Parallax & Reveal Logic
        const heroWrapper = document.getElementById('hero-wrapper');
        const textTop = document.getElementById('text-top');
        const textBottom = document.getElementById('text-bottom');
        const heroReveal = document.getElementById('hero-reveal');
        const scrollIndicator = document.getElementById('scroll-indicator');

        // Linear interpolation helper
        const lerp = (start, end, factor) => start + (end - start) * factor;

        let scrollY = 0;
        
        window.addEventListener('scroll', () => {
            scrollY = window.scrollY;
            
            // Interaction height logic
            const windowHeight = window.innerHeight;
            // The scrollable area before we want the animation to be "complete"
            const triggerHeight = windowHeight * 1; 
            
            // Calculate progress (0 to 1)
            let progress = Math.min(scrollY / triggerHeight, 1);
            
            // Split Text Animation
            // Move top text up, bottom text down
            const moveDistance = 150; // Percentage
            
            if (textTop && textBottom) {
                textTop.style.transform = `translateY(-${progress * 60}vh)`;
                textBottom.style.transform = `translateY(${progress * 60}vh)`;
                
                // Fade out the split text as they move away
                const opacity = Math.max(0, 1 - (progress * 1.5));
                textTop.style.opacity = opacity;
                textBottom.style.opacity = opacity;
            }

            // Reveal Center Text
            // Starts appearing after 20% scroll
            if (heroReveal) {
                if (progress > 0.1) {
                    const revealProgress = (progress - 0.1) / 0.9; // Normalize 0-1 for the remaining scroll
                    heroReveal.style.opacity = Math.min(revealProgress * 2, 1); // Fade in faster
                    heroReveal.style.filter = `blur(${Math.max(0, 20 - (revealProgress * 20))}px)`;
                    heroReveal.style.transform = `scale(${lerp(0.8, 1, revealProgress)})`;
                } else {
                    heroReveal.style.opacity = 0;
                }
            }

            // Hide scroll indicator immediately
            if (scrollIndicator) {
                scrollIndicator.style.opacity = Math.max(0, 1 - progress * 5);
            }
        }, { passive: true });

    
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
      

<div className="noise-bg"></div>

<nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference text-zinc-300">
<a className="text-xs font-mono tracking-widest uppercase opacity-80 hover:opacity-100 transition-opacity" href="#">
            XEN © 2024
        </a>
<div className="flex items-center gap-6">
<a className="group flex items-center gap-2 text-xs font-mono tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity" href="#work">
<span className="w-1 h-1 bg-zinc-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Index
            </a>
<a className="group flex items-center gap-2 text-xs font-mono tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity" href="#about">
<span className="w-1 h-1 bg-zinc-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Profile
            </a>
<a className="group flex items-center gap-2 text-xs font-mono tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity" href="mailto:hello@xen.dev">
<span className="w-1 h-1 bg-zinc-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Contact
            </a>
</div>
</nav>


<div className="relative w-full h-[220vh]" id="hero-wrapper">

<div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center z-10 bg-[#030303]">

<div className="absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none z-0 scale-90 blur-lg transition-all duration-75 ease-linear" id="hero-reveal">
<div className="text-center">
<h1 className="font-display text-8xl md:text-9xl font-semibold tracking-tighter text-white leading-none mix-blend-overlay">
                        XEN
                    </h1>
<p className="font-mono text-xs md:text-sm text-zinc-500 tracking-[0.2em] mt-4 uppercase">
                        Full Stack Architect
                    </p>
</div>
</div>

<div className="relative z-20 flex flex-col items-center justify-center pointer-events-none">
<h2 className="font-display text-6xl md:text-9xl font-medium tracking-tighter text-zinc-100 leading-none transition-transform duration-75 ease-linear will-change-transform" id="text-top">
                    DIGITAL
                </h2>
<h2 className="font-display text-6xl md:text-9xl font-medium tracking-tighter text-zinc-100 leading-none transition-transform duration-75 ease-linear will-change-transform opacity-90" id="text-bottom">
                    REALITY
                </h2>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 transition-opacity duration-500" id="scroll-indicator">
<span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
<span className="iconify text-zinc-400 animate-bounce" data-height="16" data-icon="lucide:arrow-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>

<main className="relative z-30 bg-[#030303] pb-24">

<section className="max-w-screen-xl mx-auto px-6 py-24 md:py-32 border-t border-zinc-900">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-4">
<span className="block text-xs font-mono text-zinc-500 tracking-widest uppercase mb-4">The Methodology</span>
<h3 className="font-display text-3xl font-medium tracking-tight text-white leading-tight">
                        Crafting silence in a <br/>
                        noisy digital era.
                    </h3>
</div>
<div className="md:col-span-8 flex flex-col gap-8">
<p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl">
                        I build interfaces that feel inevitable. By merging rigorous engineering with avant-garde aesthetics, I create web experiences that are not just functional, but emotional. My work exists at the intersection of precision code and fluid motion.
                    </p>
<div className="flex flex-wrap gap-4 mt-4">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/30 text-xs font-mono text-zinc-400">
<span className="iconify" data-icon="lucide:box" style={{strokeWidth: '1.5'}}></span> Three.js
                        </div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/30 text-xs font-mono text-zinc-400">
<span className="iconify" data-icon="lucide:zap" style={{strokeWidth: '1.5'}}></span> Next.js
                        </div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/30 text-xs font-mono text-zinc-400">
<span className="iconify" data-icon="lucide:layers" style={{strokeWidth: '1.5'}}></span> WebGL
                        </div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/30 text-xs font-mono text-zinc-400">
<span className="iconify" data-icon="lucide:cpu" style={{strokeWidth: '1.5'}}></span> TypeScript
                        </div>
</div>
</div>
</div>
</section>

<section className="px-6 pb-32" id="work">
<div className="max-w-screen-xl mx-auto">
<div className="flex items-end justify-between mb-16 border-b border-zinc-900 pb-6">
<h2 className="font-display text-4xl md:text-6xl font-medium tracking-tighter text-white">Selected Works</h2>
<span className="hidden md:block text-xs font-mono text-zinc-600 tracking-widest uppercase">2021 — 2024</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">

<article className="group relative cursor-pointer">
<div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-zinc-900 mb-6">

<div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

<div className="w-full h-full bg-zinc-800 group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center relative">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-900 to-black opacity-50"></div>
<span className="iconify text-zinc-700 w-24 h-24 opacity-20" data-icon="lucide:aperture" style={{strokeWidth: '1'}}></span>
</div>

<div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black">
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl font-display font-medium text-zinc-100 mb-1 group-hover:text-white transition-colors">Vesper Finance</h3>
<p className="text-sm text-zinc-500 font-mono">DeFi Protocol / Interface Design</p>
</div>
<div className="flex gap-2 mt-1">
<span className="px-2 py-1 border border-zinc-800 text-[10px] uppercase tracking-wider text-zinc-400 rounded">React</span>
<span className="px-2 py-1 border border-zinc-800 text-[10px] uppercase tracking-wider text-zinc-400 rounded">Solidity</span>
</div>
</div>
</article>

<article className="group relative cursor-pointer md:mt-24">
<div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-zinc-900 mb-6">
<div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="w-full h-full bg-zinc-800 group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center relative">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-zinc-900 to-black opacity-60"></div>
<span className="iconify text-zinc-700 w-24 h-24 opacity-20" data-icon="lucide:activity" style={{strokeWidth: '1'}}></span>
</div>
<div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black">
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl font-display font-medium text-zinc-100 mb-1 group-hover:text-white transition-colors">Chronos OS</h3>
<p className="text-sm text-zinc-500 font-mono">System Architecture / WebGL</p>
</div>
<div className="flex gap-2 mt-1">
<span className="px-2 py-1 border border-zinc-800 text-[10px] uppercase tracking-wider text-zinc-400 rounded">Three.js</span>
<span className="px-2 py-1 border border-zinc-800 text-[10px] uppercase tracking-wider text-zinc-400 rounded">Rust</span>
</div>
</div>
</article>

<article className="group relative cursor-pointer">
<div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-zinc-900 mb-6">
<div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="w-full h-full bg-zinc-800 group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center relative">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-900/20 via-zinc-900 to-black opacity-60"></div>
<span className="iconify text-zinc-700 w-24 h-24 opacity-20" data-icon="lucide:box-select" style={{strokeWidth: '1'}}></span>
</div>
<div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black">
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl font-display font-medium text-zinc-100 mb-1 group-hover:text-white transition-colors">Aether Labs</h3>
<p className="text-sm text-zinc-500 font-mono">Brand Identity / E-commerce</p>
</div>
<div className="flex gap-2 mt-1">
<span className="px-2 py-1 border border-zinc-800 text-[10px] uppercase tracking-wider text-zinc-400 rounded">Next.js</span>
<span className="px-2 py-1 border border-zinc-800 text-[10px] uppercase tracking-wider text-zinc-400 rounded">Stripe</span>
</div>
</div>
</article>

<article className="group relative cursor-pointer md:mt-24">
<div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-zinc-900 mb-6">
<div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="w-full h-full bg-zinc-800 group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center relative">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-black opacity-60"></div>
<span className="iconify text-zinc-700 w-24 h-24 opacity-20" data-icon="lucide:code-2" style={{strokeWidth: '1'}}></span>
</div>
<div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black">
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl font-display font-medium text-zinc-100 mb-1 group-hover:text-white transition-colors">Mono UI</h3>
<p className="text-sm text-zinc-500 font-mono">Open Source Component Library</p>
</div>
<div className="flex gap-2 mt-1">
<span className="px-2 py-1 border border-zinc-800 text-[10px] uppercase tracking-wider text-zinc-400 rounded">Vue</span>
<span className="px-2 py-1 border border-zinc-800 text-[10px] uppercase tracking-wider text-zinc-400 rounded">Tailwind</span>
</div>
</div>
</article>
</div>
</div>
</section>

<footer className="border-t border-zinc-900 bg-[#030303]">
<div className="max-w-screen-xl mx-auto px-6 py-16">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<h4 className="font-display text-2xl font-medium tracking-tight text-white">Let's build the unknown.</h4>
<p className="text-zinc-500 mt-2 text-sm font-light">Open for select opportunities in 2024.</p>
</div>
<div className="flex gap-8">
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Twitter_X</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">GitHub</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Read.cv</a>
</div>
</div>
<div className="mt-16 flex justify-between items-end">
<span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">Xen — Digital Craftsman</span>
<span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">Local Time: <span id="time">00:00</span> UTC</span>
</div>
</div>
</footer>
</main>


    </>
  );
}
