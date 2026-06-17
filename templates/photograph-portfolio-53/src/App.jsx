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
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
mono: ['JetBrains Mono', 'monospace'],
},
animation: {
'fade-in': 'fadeIn 1s ease-out',
'noise': 'noise 0.2s infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
noise: {
'0%, 100%': { transform: 'translate(0, 0)' },
'10%': { transform: 'translate(-1%, -1%)' },
'20%': { transform: 'translate(-2%, 1%)' },
'30%': { transform: 'translate(1%, -2%)' },
'40%': { transform: 'translate(-1%, 2%)' },
'50%': { transform: 'translate(-2%, -1%)' },
'60%': { transform: 'translate(2%, 1%)' },
'70%': { transform: 'translate(1%, 2%)' },
'80%': { transform: 'translate(-1%, -1%)' },
'90%': { transform: 'translate(2%, -2%)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Smooth Scroll
      if (typeof Lenis !== 'undefined') {
          const lenis = new Lenis({duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smooth: true});
          function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
          requestAnimationFrame(raf);
      }

      // Intersection Observer for Reveals
      const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('active'); } });
      }, { threshold: 0.1 });
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

      // Global Clocks Logic
      function updateClocks() {
          const opt = { hour: '2-digit', minute:'2-digit', hour12: false };
          const ny = document.getElementById('time-ny');
          const ams = document.getElementById('time-ams');
          const cmn = document.getElementById('time-cmn');
          if (ny) ny.innerText = new Intl.DateTimeFormat('en-US', {...opt, timeZone: 'America/New_York'}).format(new Date());
          if (ams) ams.innerText = new Intl.DateTimeFormat('en-US', {...opt, timeZone: 'Europe/Amsterdam'}).format(new Date());
          if (cmn) cmn.innerText = new Intl.DateTimeFormat('en-US', {...opt, timeZone: 'Africa/Casablanca'}).format(new Date());
      }
      setInterval(updateClocks, 60000); updateClocks();

      // Cinematic Preloader
      window.addEventListener('load', () => {
          let pct = 0;
          const loader = document.getElementById('loader-text');
          const preloader = document.getElementById('preloader');
          const interval = setInterval(() => {
              pct += Math.floor(Math.random() * 20) + 10;
              if (pct >= 100) {
                  pct = 100;
                  clearInterval(interval);
                  if (preloader) {
                      preloader.style.opacity = '0';
                      setTimeout(() => preloader.remove(), 1000);
                  }
              }
              if (loader) loader.innerText = pct + '%';
          }, 80);
      });

      // Advanced Cursor & Mouse Glow
      const cursor = document.getElementById('lens-cursor');
      const cursorIcon = document.getElementById('cursor-icon');
      const glow = document.getElementById('mouse-glow');

      document.addEventListener('mousemove', (e) => {
          if (cursor) {
              cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
          }
          if (glow) {
              glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
          }
      });

      document.querySelectorAll('.hover-lens').forEach(el => {
          el.addEventListener('mouseenter', () => {
              if (cursor) {
                  cursor.classList.add('w-24', 'h-24', 'bg-white/10', 'backdrop-blur-sm');
                  cursor.classList.remove('w-4', 'h-4', 'mix-blend-difference');
              }
              if (cursorIcon) cursorIcon.classList.remove('opacity-0');
          });
          el.addEventListener('mouseleave', () => {
              if (cursor) {
                  cursor.classList.remove('w-24', 'h-24', 'bg-white/10', 'backdrop-blur-sm');
                  cursor.classList.add('w-4', 'h-4', 'mix-blend-difference');
              }
              if (cursorIcon) cursorIcon.classList.add('opacity-0');
          });
      });

      // Hero Container Morph & Parallax on Scroll
      const heroContent = document.getElementById('hero-content');
      const parallaxText = document.getElementById('parallax-text');

      window.addEventListener('scroll', () => {
          const scroll = window.scrollY;
          // Scale down hero slightly on scroll
          if (heroContent && scroll < 1000) {
              heroContent.style.transform = `scale(${Math.max(0.85, 1 - scroll/2500)}) translateY(${scroll * 0.2}px)`;
              heroContent.style.opacity = Math.max(0, 1 - scroll/600);
          }
          // Parallax horizontal text
          if (parallaxText) {
              parallaxText.style.transform = `translateX(${-scroll * 0.15}px) translateY(-1rem)`;
          }
      });

      // Easter Egg: Shutter sound on Print Screen
      document.addEventListener('keyup', (e) => {
          if (e.key === 'PrintScreen') {
              const flash = document.createElement('div');
              flash.className = 'fixed inset-0 bg-white z-[99999] pointer-events-none transition-opacity duration-500 opacity-100';
              document.body.appendChild(flash);
              requestAnimationFrame(() => {
                  flash.style.opacity = '0';
                  setTimeout(() => flash.remove(), 500);
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
      

<div className="fixed inset-0 z-[1000] bg-[#050505] flex flex-col items-center justify-center transition-opacity duration-1000" id="preloader">
<div className="text-white text-xs font-mono uppercase tracking-widest mb-4">
      Initializing Narrative
    </div>
<div className="text-6xl font-serif chromatic-text text-white" id="loader-text">
      0%
    </div>
</div>

<div className="noise-bg animate-noise"></div>
<div className="fixed top-0 left-0 w-[800px] h-[800px] rounded-full pointer-events-none z-0 transition-[width,height] duration-300 ease-out" id="mouse-glow">
</div>

<div className="fixed top-0 left-0 w-4 h-4 rounded-full border border-white/40 pointer-events-none z-[9999] mix-blend-difference transition-[width,height,background-color,border-color,backdrop-filter] duration-300 ease-out flex items-center justify-center opacity-80" id="lens-cursor">
<iconify-icon className="text-white opacity-0 transition-opacity duration-300 w-full text-center text-xs" icon="solar:maximize-linear" id="cursor-icon"></iconify-icon>
</div>
<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-[#050505]/30 backdrop-blur-2xl border-b border-white/5">
<div className="max-w-[90rem] mx-auto px-6 h-24 flex items-center justify-between">
<a className="text-white font-medium tracking-tight text-2xl hover:text-zinc-300 transition-colors z-50" href="#">
        ANASS TAHRI
        <span className="text-zinc-600">.</span>
</a>
<div className="hidden md:flex items-center gap-12 text-sm font-normal text-zinc-400 uppercase tracking-widest">
<a className="hover:text-white transition-colors hover:tracking-wide duration-300" href="#work">
          Selected Work
        </a>
<a className="hover:text-white transition-colors hover:tracking-wide duration-300" href="#gallery">
          Vault
        </a>
<a className="hover:text-white transition-colors hover:tracking-wide duration-300" href="#process">
          Process
        </a>
<a className="hover:text-white transition-colors hover:tracking-wide duration-300" href="#packages">
          Investment
        </a>
</div>
<a className="hidden md:flex group items-center gap-3 bg-white text-zinc-950 px-6 py-3 rounded-full text-xs font-medium tracking-widest hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95" href="#contact">
<span>START PROJECT</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<button className="md:hidden text-white p-2" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
<div className="hidden md:hidden absolute top-20 left-0 w-full bg-[#050505] border-b border-white/5 p-8 space-y-6 animate-fade-in" id="mobile-menu">
<a className="block text-lg font-normal text-zinc-400 hover:text-white" href="#work">
        Selected Work
      </a>
<a className="block text-lg font-normal text-zinc-400 hover:text-white" href="#process">
        Process
      </a>
<a className="block text-lg font-normal text-zinc-400 hover:text-white" href="#packages">
        Investment
      </a>
<a className="block text-lg font-normal text-zinc-400 hover:text-white" href="#contact">
        Contact
      </a>
</div>
</nav>
<section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden perspective-1000">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/10 via-[#050505]/0 to-transparent pointer-events-none blur-3xl">
</div>
<div className="max-w-4xl text-center space-y-10 relative z-10 transition-transform duration-500 will-change-transform" id="hero-content">
<div className="flex flex-col items-center gap-6">
<div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-xs font-normal text-zinc-300 tracking-widest uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
          Now booking for Q4
        </div>
<div className="reveal delay-100 flex gap-6 text-xs text-zinc-500 font-mono uppercase tracking-widest">
<div>
            NYC
            <span className="text-zinc-300" id="time-ny"></span>
</div>
<div>
            AMS
            <span className="text-zinc-300" id="time-ams"></span>
</div>
<div>
            CMN
            <span className="text-zinc-300" id="time-cmn"></span>
</div>
</div>
</div>
<h1 className="reveal delay-200 text-6xl sm:text-8xl lg:text-9xl font-serif italic chromatic-text tracking-tighter text-white leading-[0.9]">
        The Cinematic Edge
        <br/>
<span className="text-zinc-600 not-italic font-normal">
            for Your Digital
          </span>
<span className="not-italic font-normal">Presence.</span>
</h1>
<p className="reveal delay-300 text-xl sm:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed font-thin">
        I am the visual strategist who transforms ambitious concepts into
        high-converting video and photo assets. Focused on ROI and aesthetic
        dominance in the global market.
      </p>
<div className="reveal delay-400 flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
<a className="group w-full sm:w-auto px-8 py-4 bg-white text-zinc-950 rounded-full text-xs font-medium tracking-widest hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95" href="#work">
          VIEW PROJECTS
          <iconify-icon className="group-hover:rotate-45 transition-transform duration-300" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 border border-white/10 text-white rounded-full text-xs font-medium tracking-widest hover:bg-white/5 transition-all hover:border-white/20" href="#contact">
          GET IN TOUCH
        </a>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce pointer-events-none">
<span className="text-xs uppercase tracking-widest text-zinc-500">
          Scroll
        </span>
<iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</section>

<div className="w-full border-y border-white/5 bg-zinc-900/5 overflow-hidden py-10 relative flex items-center">
<div className="absolute whitespace-nowrap text-[20vw] font-serif italic text-white/5 pointer-events-none select-none tracking-tighter leading-none -translate-y-6" id="parallax-text">
      ARCHIVE ARCHIVE ARCHIVE
    </div>
<div className="max-w-[90rem] mx-auto px-6 flex items-center justify-between opacity-40 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0 relative z-10 w-full">
<span className="text-base md:text-lg font-medium text-white tracking-widest uppercase">
          Real Estate
        </span>
<span className="text-base md:text-lg font-medium text-white tracking-widest uppercase hidden md:block">
          Hospitality
        </span>
<span className="text-base md:text-lg font-medium text-white tracking-widest uppercase">
          Corporate
        </span>
<span className="text-base md:text-lg font-medium text-white tracking-widest uppercase hidden md:block">
          E-Commerce
        </span>
<span className="text-base md:text-lg font-medium text-white tracking-widest uppercase">
          Personal Brand
        </span>
</div>
</div>
<section className="py-40 relative z-10" id="work">
<div className="max-w-[90rem] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 reveal">
<div>
<h2 className="text-5xl sm:text-7xl font-serif italic chromatic-text text-white tracking-tighter mb-4">
            Selected Works
          </h2>
<p className="text-zinc-500 max-w-xl text-xl font-thin">
            A curation of high-impact visual narratives driven by strategy.
          </p>
</div>
<a className="hidden md:flex items-center gap-2 text-white hover:text-zinc-300 transition-colors pb-1 border-b border-white/20 hover:border-white text-sm uppercase tracking-widest" href="#contact">
<span>View All</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
<a className="group cursor-none reveal hover-lens" data-tilt="" data-tilt-max="3" data-tilt-perspective="1000" data-tilt-speed="400" href="#">
<div className="aspect-[16/10] bg-zinc-900 rounded-xl overflow-hidden relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
<img alt="Luxury Real Estate" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2653&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 insta-overlay flex items-end justify-between p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
<span className="text-xs font-mono">2.4K</span>
</span>
<span className="flex items-center gap-1.5">
<iconify-icon icon="solar:chat-line-linear"></iconify-icon>
<span className="text-xs font-mono">189</span>
</span>
</div>
<iconify-icon icon="solar:camera-minimalistic-linear" width="20"></iconify-icon>
</div>
</div>
<div className="mt-6">
<h3 className="text-lg text-white font-serif italic tracking-tight mb-1">
              Luxury Real Estate
            </h3>
<div className="flex items-center justify-between text-xs text-zinc-500 font-mono mt-3">
<span>Strategy: Lead Gen</span>
<span className="text-emerald-500">+42% Conversion</span>
</div>
</div>
</a>
<a className="group cursor-none reveal delay-100 hover-lens" data-tilt="" data-tilt-max="3" data-tilt-perspective="1000" data-tilt-speed="400" href="#">
<div className="aspect-[16/10] bg-zinc-900 rounded-xl overflow-hidden relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
<img alt="Corporate Identity" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 insta-overlay flex items-end justify-between p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
<span className="text-xs font-mono">3.1K</span>
</span>
<span className="flex items-center gap-1.5">
<iconify-icon icon="solar:chat-line-linear"></iconify-icon>
<span className="text-xs font-mono">98</span>
</span>
</div>
<iconify-icon icon="solar:camera-minimalistic-linear" width="20"></iconify-icon>
</div>
</div>
<div className="mt-6">
<h3 className="text-lg text-white font-serif italic tracking-tight mb-1">
              Logistics Brand Film
            </h3>
<div className="flex items-center justify-between text-xs text-zinc-500 font-mono mt-3">
<span>Strategy: Identity</span>
<span className="text-emerald-500">1.2M Reach</span>
</div>
</div>
</a>
<a className="group cursor-none reveal delay-200 hover-lens" data-tilt="" data-tilt-max="3" data-tilt-perspective="1000" data-tilt-speed="400" href="#">
<div className="aspect-[16/10] bg-zinc-900 rounded-xl overflow-hidden relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
<img alt="Product Lifestyle" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 insta-overlay flex items-end justify-between p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
<span className="text-xs font-mono">1.5K</span>
</span>
<span className="flex items-center gap-1.5">
<iconify-icon icon="solar:chat-line-linear"></iconify-icon>
<span className="text-xs font-mono">42</span>
</span>
</div>
<iconify-icon icon="solar:camera-minimalistic-linear" width="20"></iconify-icon>
</div>
</div>
<div className="mt-6">
<h3 className="text-lg text-white font-serif italic tracking-tight mb-1">
              Product Lifestyle
            </h3>
<div className="flex items-center justify-between text-xs text-zinc-500 font-mono mt-3">
<span>Strategy: E-comm</span>
<span className="text-emerald-500">3x ROAS</span>
</div>
</div>
</a>
</div>

<div className="mt-40 p-16 border border-white/5 bg-[#050505] rounded-[2rem] reveal relative overflow-hidden group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] hover-lens">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 items-center">
<div>
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-4">
              Case Study Anatomy
            </h3>
<h4 className="text-3xl font-serif italic text-white mb-6">
              The Psychology of Light
            </h4>
<div className="font-mono text-xs text-zinc-400 space-y-4 p-6 bg-zinc-950/50 rounded-xl border border-white/5">
<p>&gt; [STRATEGY PILLAR]</p>
<p className="text-zinc-500">
                Objective: Elevate perceived brand value to command
                high-ticket pricing.
              </p>
<p className="text-zinc-500">
                Execution: Employed aggressive 3:1 contrast ratios. Deepened
                the shadows to obscure imperfections, drawing the viewer's eye
                strictly to the product highlights.
              </p>
<div className="flex items-end gap-2 mt-4 pt-4 border-t border-white/5">
<div className="w-1 bg-emerald-500 h-2 group-hover:h-8 transition-all duration-1000"></div>
<div className="w-1 bg-emerald-500 h-4 group-hover:h-12 transition-all duration-1000 delay-100"></div>
<div className="w-1 bg-emerald-500 h-6 group-hover:h-20 transition-all duration-1000 delay-200"></div>
<span className="ml-2 text-emerald-500">
                    &gt; ROI: +210% Engagement
                  </span>
</div>
</div>
</div>
<div className="flex flex-col items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-700">
<p className="text-xs font-mono text-zinc-600 mb-6 uppercase tracking-widest text-center">
              Set Light Map [Top Down]
            </p>
<svg className="w-48 h-48 drop-shadow-2xl" viewbox="0 0 200 200">

<rect fill="#3f3f46" height="15" rx="2" width="20" x="90" y="160"></rect>
<polygon fill="#a1a1aa" points="100,160 95,150 105,150"></polygon>

<circle className="animate-pulse" cx="100" cy="100" fill="#ffffff" r="10"></circle>

<circle cx="40" cy="60" fill="#fbbf24" r="8"></circle>
<line stroke="#fbbf24" stroke-dasharray="2,2" strokeWidth="1" x1="46" x2="92" y1="66" y2="92"></line>

<circle cx="160" cy="80" fill="#60a5fa" r="6"></circle>
<line stroke="#60a5fa" stroke-dasharray="2,2" strokeWidth="1" x1="154" x2="108" y1="84" y2="96"></line>

<circle cx="120" cy="30" fill="#f87171" r="6"></circle>
<line stroke="#f87171" stroke-dasharray="2,2" strokeWidth="1" x1="116" x2="104" y1="36" y2="90"></line>
</svg>
</div>
</div>
</div>
</div>
</section>
<section className="py-40 relative z-10 border-t border-white/5 bg-[#050505]" id="gallery">
<div className="max-w-[90rem] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal">
<div>
<h2 className="text-5xl sm:text-7xl font-serif italic chromatic-text text-white tracking-tighter mb-4">
            The Vault
          </h2>
<p className="text-zinc-500 max-w-2xl text-xl font-thin">
            An extensive collection of visual assets, scaling across various
            industries and formats. Combining motion and stills for complete
            ecosystem dominance.
          </p>
</div>
<a className="hidden md:flex items-center gap-2 text-white hover:text-zinc-300 transition-colors pb-1 border-b border-white/20 hover:border-white text-sm uppercase tracking-widest mt-8 md:mt-0" href="#contact">
<span>Unlock Full Archive</span>
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[250px] md:auto-rows-[450px]">
<div className="group cursor-none reveal hover-lens col-span-2 row-span-2 relative rounded-[2rem] overflow-hidden bg-zinc-900 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]">
<img alt="Gallery Image" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
</div>
<div className="absolute bottom-10 left-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="text-sm font-mono uppercase tracking-widest mb-2">
              01 // Automotive
            </div>
<h3 className="text-4xl font-serif italic">Porsche Campaign</h3>
</div>
</div>
<div className="group cursor-none reveal delay-100 hover-lens relative rounded-[2rem] overflow-hidden bg-zinc-900 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]">
<img alt="Gallery Image" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
</div>
<div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="text-xs font-mono uppercase tracking-widest mb-2">
              02 // Fashion
            </div>
<h3 className="text-2xl font-serif italic">Editorial Fall</h3>
</div>
</div>
<div className="group cursor-none reveal delay-200 hover-lens relative rounded-[2rem] overflow-hidden bg-zinc-900 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]">
<img alt="Gallery Image" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out" src="https://images.unsplash.com/photo-1611095973763-414019e72400?q=80&amp;w=2671&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
</div>
<div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="text-xs font-mono uppercase tracking-widest mb-2">
              03 // Portrait
            </div>
<h3 className="text-2xl font-serif italic">Executive Identity</h3>
</div>
</div>
<div className="group cursor-none reveal hover-lens col-span-2 relative rounded-[2rem] overflow-hidden bg-zinc-900 flex items-center justify-center shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]">
<img alt="Video Thumbnail" className="w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-105 transition-all duration-1000 ease-out absolute inset-0" src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&amp;w=2671&amp;auto=format&amp;fit=crop"/>
<iconify-icon className="text-white/80 text-7xl relative z-10 group-hover:scale-110 group-hover:text-white transition-all duration-500 drop-shadow-2xl" icon="solar:play-circle-linear"></iconify-icon>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
</div>
<div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="text-xs font-mono uppercase tracking-widest mb-2">
              04 // Brand Film
            </div>
<h3 className="text-2xl font-serif italic">Tech Innovations '24</h3>
</div>
</div>
</div>
</div>
</section>
<section className="py-40 border-t border-white/5 bg-zinc-950/30" id="why-me">
<div className="max-w-[90rem] mx-auto px-6">
<div className="text-center mb-20 reveal">
<h2 className="text-5xl sm:text-7xl font-serif italic chromatic-text text-white tracking-tighter mb-6">
          Beyond just a videographer.
        </h2>
<p className="text-xl text-zinc-400 max-w-3xl mx-auto font-thin">
          I partner with brands to create assets that don't just look
          good—they work.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="group p-8 rounded-2xl border border-white/5 bg-[#050505] hover:border-white/10 transition-all hover:-translate-y-1 duration-500 reveal shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
<div className="w-12 h-12 rounded-xl bg-zinc-900/50 flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-3 tracking-tight">
            ROI Focused
          </h3>
<p className="text-sm leading-relaxed text-zinc-500 font-thin group-hover:text-zinc-400 transition-colors">
            We start with the goal: Sales? Leads? Awareness? Then we reverse
            engineer the visuals to achieve it.
          </p>
</div>
<div className="group p-8 rounded-2xl border border-white/5 bg-[#050505] hover:border-white/10 transition-all hover:-translate-y-1 duration-500 reveal delay-100 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
<div className="w-12 h-12 rounded-xl bg-zinc-900/50 flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon icon="solar:global-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-3 tracking-tight">
            Cross-Cultural Mastery
          </h3>
<p className="text-sm leading-relaxed text-zinc-500 font-thin group-hover:text-zinc-400 transition-colors">
            Fluent in the visual languages of global markets, ensuring your
            message resonates locally and internationally.
          </p>
</div>
<div className="group p-8 rounded-2xl border border-white/5 bg-[#050505] hover:border-white/10 transition-all hover:-translate-y-1 duration-500 reveal delay-200 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
<div className="w-12 h-12 rounded-xl bg-zinc-900/50 flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon icon="solar:stars-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-3 tracking-tight">
            Cinema Grade
          </h3>
<p className="text-sm leading-relaxed text-zinc-500 font-thin group-hover:text-zinc-400 transition-colors">
            Using top-tier gear and precision post-production to give your
            brand that premium, high-ticket feel.
          </p>
</div>
</div>
</div>
</section>
<section className="py-40 border-t border-white/5 bg-[#050505]" id="packages">
<div className="max-w-[90rem] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-24 reveal">
<h2 className="text-5xl sm:text-7xl font-serif italic chromatic-text text-white tracking-tighter">
          Investment Options
        </h2>
<p className="text-zinc-500 text-sm font-mono uppercase tracking-widest mt-6 md:mt-0">
          Retainer-Based Partnerships
        </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
<div className="p-10 rounded-[2rem] border border-white/5 bg-zinc-900/10 hover:bg-zinc-800/20 transition-all reveal shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] flex flex-col">
<h3 className="text-2xl font-medium text-white mb-2">
            Social Foundation
          </h3>
<div className="text-5xl font-serif italic text-white mb-1">
            €1,200
            <span className="text-lg text-zinc-500 font-sans not-italic">
                /mo
              </span>
</div>
<p className="text-sm text-zinc-500 uppercase tracking-widest mb-10 mt-3">
            Consistent Presence
          </p>
<ul className="space-y-6 mb-12 flex-grow">
<li className="flex items-center gap-4 text-base text-zinc-400 font-thin">
<iconify-icon className="text-white text-xl" icon="solar:videocamera-linear"></iconify-icon>
              4 Short-form Videos
            </li>
<li className="flex items-center gap-4 text-base text-zinc-400 font-thin">
<iconify-icon className="text-white text-xl" icon="solar:clapperboard-edit-linear"></iconify-icon>
              1 Half-Day Shoot
            </li>
<li className="flex items-center gap-4 text-base text-zinc-400 font-thin">
<iconify-icon className="text-white text-xl" icon="solar:shield-check-linear"></iconify-icon>
              Standard Color Grading
            </li>
</ul>
<a className="block w-full py-5 rounded-xl border border-white/10 text-center text-sm font-medium uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all mt-auto" href="#contact">
            Select
          </a>
</div>
<div className="p-12 rounded-[2rem] border border-white/10 bg-zinc-900/40 relative overflow-hidden group hover:bg-zinc-800/40 transition-all reveal delay-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] scale-[1.02] flex flex-col">
<div className="absolute top-0 right-0 p-8">
<span className="px-4 py-2 bg-white text-black text-[10px] font-medium uppercase tracking-widest rounded-full">
                Most Popular
              </span>
</div>
<h3 className="text-2xl font-medium text-white mb-2">
            The Hybrid Vault
          </h3>
<div className="text-5xl font-serif italic text-white mb-1">
            €2,800
            <span className="text-lg text-zinc-500 font-sans not-italic">
                /mo
              </span>
</div>
<p className="text-sm text-zinc-500 uppercase tracking-widest mb-10 mt-3">
            Omnichannel Dominance
          </p>
<ul className="space-y-6 mb-12 flex-grow">
<li className="flex items-center gap-4 text-base text-white font-thin">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:camera-linear"></iconify-icon>
              8 High-End Short-form Videos
            </li>
<li className="flex items-center gap-4 text-base text-white font-thin">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:gallery-linear"></iconify-icon>
              30 Retouched Photo Assets
            </li>
<li className="flex items-center gap-4 text-base text-white font-thin">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:calendar-linear"></iconify-icon>
              2 Full-Day Shoots
            </li>
<li className="flex items-center gap-4 text-base text-white font-thin">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:case-linear"></iconify-icon>
              Dedicated Strategy Session
            </li>
</ul>
<a className="block w-full py-5 rounded-xl bg-white text-center text-sm font-medium uppercase tracking-widest text-black hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] mt-auto" href="#contact">
            Select
          </a>
</div>
<div className="p-10 rounded-[2rem] border border-white/5 bg-zinc-900/10 hover:bg-zinc-800/20 transition-all reveal delay-200 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] flex flex-col">
<h3 className="text-2xl font-medium text-white mb-2">
            Campaign &amp; Editorial
          </h3>
<div className="text-5xl font-serif italic text-white mb-1">
            From €5k
          </div>
<p className="text-sm text-zinc-500 uppercase tracking-widest mb-10 mt-3">
            Bespoke Productions
          </p>
<ul className="space-y-6 mb-12 flex-grow">
<li className="flex items-center gap-4 text-base text-zinc-400 font-thin">
<iconify-icon className="text-white text-xl" icon="solar:aperture-linear"></iconify-icon>
              Full Creative Direction
            </li>
<li className="flex items-center gap-4 text-base text-zinc-400 font-thin">
<iconify-icon className="text-white text-xl" icon="solar:video-frame-linear"></iconify-icon>
              Long-form Brand Films
            </li>
<li className="flex items-center gap-4 text-base text-zinc-400 font-thin">
<iconify-icon className="text-white text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
              Full Crew Sourcing
            </li>
</ul>
<a className="block w-full py-5 rounded-xl border border-white/10 text-center text-sm font-medium uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all mt-auto" href="#contact">
            Select
          </a>
</div>
</div>
</div>
</section>
<section className="py-40 border-t border-white/5 bg-[#050505] relative z-20" id="contact">
<div className="max-w-[90rem] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
<div className="reveal">
<h2 className="text-5xl sm:text-7xl font-serif italic text-white tracking-tighter mb-8">
            Ready to construct
            <span className="not-italic font-sans font-medium text-zinc-600">
                your legacy?
              </span>
</h2>
<p className="text-zinc-400 text-xl font-thin mb-12 max-w-xl leading-relaxed">
            The time to invest in premium visuals is now. Let's engineer
            assets that dominate your sector.
          </p>
<div className="space-y-8">
<a className="flex items-center gap-6 group hover-lens" href="mailto:tahrianass65@gmail.com">
<div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 text-white">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-zinc-500 uppercase tracking-widest mb-1 font-mono">
                  Email
                </div>
<div className="text-white text-sm font-medium tracking-wide">
                  tahrianass65@gmail.com
                </div>
</div>
</a>
<a className="flex items-center gap-6 group hover-lens" href="tel:+212684324300">
<div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 text-white">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-zinc-500 uppercase tracking-widest mb-1 font-mono">
                  Phone
                </div>
<div className="text-white text-sm font-medium tracking-wide">
                  +212 684324300
                </div>
</div>
</a>
</div>
</div>
<div className="reveal delay-100 relative">

<div className="absolute inset-0 bg-white/5 blur-2xl rounded-3xl pointer-events-none"></div>
<form className="space-y-6 bg-zinc-900/20 p-8 sm:p-10 rounded-3xl border border-white/5 relative z-10 backdrop-blur-md" onsubmit="event.preventDefault(); alert('Sequence Initiated. We will be in touch.');">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
                    Name
                  </label>
<input className="w-full bg-[#050505]/50 border border-white/10 rounded-xl px-4 py-4 text-white text-sm focus:outline-none focus:border-white/50 transition-colors placeholder:text-zinc-700 font-thin" placeholder="Your name" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
                    Email
                  </label>
<input className="w-full bg-[#050505]/50 border border-white/10 rounded-xl px-4 py-4 text-white text-sm focus:outline-none focus:border-white/50 transition-colors placeholder:text-zinc-700 font-thin" placeholder="john@company.com" type="email"/>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
                  Project Stage
                </label>
<div className="relative">
<select className="w-full bg-[#050505]/50 border border-white/10 rounded-xl px-4 py-4 text-white text-sm focus:outline-none focus:border-white/50 transition-colors appearance-none font-thin cursor-pointer">
<option disabled="" hidden="" selected="" value="">
                      Is this a new brand or a transformation?
                    </option>
<option className="bg-zinc-900 text-white">
                      New Brand Launch
                    </option>
<option className="bg-zinc-900 text-white">
                      Brand Transformation / Scale
                    </option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
                  12-Month Revenue Goal
                </label>
<div className="relative">
<select className="w-full bg-[#050505]/50 border border-white/10 rounded-xl px-4 py-4 text-white text-sm focus:outline-none focus:border-white/50 transition-colors appearance-none font-thin cursor-pointer">
<option disabled="" hidden="" selected="" value="">
                      Qualify your project scope
                    </option>
<option className="bg-zinc-900 text-white">&lt; €100k</option>
<option className="bg-zinc-900 text-white">
                      €100k - €500k
                    </option>
<option className="bg-zinc-900 text-white">€500k+</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
                  Brief / Moodboard
                </label>
<div className="w-full bg-[#050505]/50 border border-white/10 rounded-xl px-4 py-3 focus-within:border-white/50 transition-colors flex items-center">
<input className="w-full text-zinc-500 text-sm font-thin cursor-pointer focus:outline-none" id="file-upload" type="file"/>
</div>
</div>
<button className="w-full bg-white text-[#050505] font-medium py-4 rounded-xl hover:bg-zinc-200 transition-colors uppercase tracking-widest text-xs mt-4" type="submit">
                Initiate Sequence
              </button>
</form>
</div>
</div>
</div>
</section>
<footer className="py-12 border-t border-white/5 text-center bg-[#050505] flex flex-col items-center gap-4 relative z-20">
<p className="text-xs text-zinc-600 font-mono">
      © 2024 Anass Tahri. All rights reserved.
    </p>

<a className="text-xs text-zinc-700 hover:text-zinc-300 transition-colors flex items-center justify-center gap-2 uppercase tracking-widest group" href="/vault">
<iconify-icon className="group-hover:text-emerald-500 transition-colors" icon="solar:lock-password-linear"></iconify-icon>
      Classified Vault (NDA)
    </a>
</footer>


    </>
  );
}
