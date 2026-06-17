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



        const cursorDot = document.createElement('div');
        const cursorOutline = document.createElement('div');
        cursorDot.className = 'cursor-dot hidden md:block';
        cursorOutline.className = 'cursor-outline hidden md:block';
        document.body.appendChild(cursorDot);
        document.body.appendChild(cursorOutline);

        window.addEventListener("mousemove", function(e) {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Add slight delay to outline for fluid feel
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
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
      

<div className="noise-overlay"></div>

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-neutral-800">
<a className="text-xl font-semibold tracking-tighter uppercase z-50 mix-blend-difference text-white" href="#">recit.</a>
<div className="hidden md:flex gap-12 text-xs font-medium tracking-wide uppercase mix-blend-difference text-white">
<a className="hover:opacity-50 transition-opacity" href="#work">Index</a>
<a className="hover:opacity-50 transition-opacity" href="#about">Collective</a>
<a className="hover:opacity-50 transition-opacity" href="#lab">Laboratory</a>
</div>
<button className="group flex items-center gap-2 mix-blend-difference text-white">
<span className="text-xs uppercase font-medium tracking-wide hidden md:block group-hover:tracking-widest transition-all duration-300">Menu</span>
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</nav>

<header className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">

<div className="absolute inset-0 w-full h-full flex justify-center items-center z-0 opacity-80 pointer-events-none">
<div className="liquid-container w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] relative">
<div className="blob absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-gray-300 to-gray-100 opacity-90 mix-blend-normal"></div>
<div className="blob absolute top-10 -right-10 w-3/4 h-3/4 bg-[#3D3BFF] opacity-80 mix-blend-multiply animation-delay-2000"></div>
<div className="blob absolute -bottom-10 left-10 w-2/3 h-2/3 bg-gray-400 opacity-70 mix-blend-overlay animation-delay-4000"></div>
</div>
</div>

<div className="relative z-10 text-center mix-blend-difference">
<h1 className="text-[18vw] leading-[0.8] font-semibold tracking-tighter text-white select-none">
                recit.
            </h1>
</div>

<div className="absolute bottom-8 left-0 w-full px-6 flex justify-between items-end text-xs font-medium tracking-tight text-[#111] z-20 mix-blend-darken">
<div className="flex flex-col gap-1">
<span className="opacity-50">Coordinates</span>
<span>47.3769° N, 8.5417° E</span>
</div>
<div className="text-right flex flex-col items-end gap-1">
<span className="opacity-50">Scroll to explore</span>
<iconify-icon className="animate-bounce" icon="solar:arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</header>

<div className="w-full border-y border-neutral-300 py-3 overflow-hidden bg-white/50 backdrop-blur-sm z-20 relative">
<div className="marquee-content whitespace-nowrap flex gap-12 items-center">
<span className="text-sm font-medium uppercase tracking-widest text-[#111]">Digital Narratives</span>
<span className="w-2 h-2 rounded-full bg-[#3D3BFF]"></span>
<span className="text-sm font-medium uppercase tracking-widest text-[#111]">Creative Development</span>
<span className="w-2 h-2 rounded-full bg-[#3D3BFF]"></span>
<span className="text-sm font-medium uppercase tracking-widest text-[#111]">WebGL Experiences</span>
<span className="w-2 h-2 rounded-full bg-[#3D3BFF]"></span>
<span className="text-sm font-medium uppercase tracking-widest text-[#111]">UI/UX Engineering</span>
<span className="w-2 h-2 rounded-full bg-[#3D3BFF]"></span>
<span className="text-sm font-medium uppercase tracking-widest text-[#111]">Digital Narratives</span>
<span className="w-2 h-2 rounded-full bg-[#3D3BFF]"></span>
<span className="text-sm font-medium uppercase tracking-widest text-[#111]">Creative Development</span>
<span className="w-2 h-2 rounded-full bg-[#3D3BFF]"></span>
<span className="text-sm font-medium uppercase tracking-widest text-[#111]">WebGL Experiences</span>
<span className="w-2 h-2 rounded-full bg-[#3D3BFF]"></span>
<span className="text-sm font-medium uppercase tracking-widest text-[#111]">UI/UX Engineering</span>
</div>
</div>

<section className="w-full py-32 px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
<div className="lg:col-span-3 flex flex-col justify-between h-full">
<div className="text-xs font-medium uppercase tracking-wide text-neutral-400">
                    (01) — Manifesto
                </div>
<div className="mt-8 lg:mt-0">
<iconify-icon className="text-ultramarine animate-spin-slow" icon="solar:asterisk-circle-linear" style={{animationDuration: '10s'}} width="32"></iconify-icon>
</div>
</div>
<div className="lg:col-span-8 lg:col-start-5">
<h2 className="text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight text-[#111] mb-12">
                    We are a collective of designers &amp; engineers crafting <span className="text-ultramarine italic">fluid</span> digital experiences. We reject the static web in favor of kinetic storytelling.
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm leading-relaxed text-neutral-600">
<p>
                        recit. operates at the intersection of technical precision and artistic expression. Our work is characterized by Swiss typographic rigor distorted by contemporary WebGL interactions.
                    </p>
<p>
                        We don't just build websites; we construct narratives. Every scroll, hover, and click is a chapter in a larger story designed to immerse and convert.
                    </p>
</div>
<div className="mt-12">
<a className="inline-flex items-center gap-2 border-b border-[#111] pb-1 text-sm font-medium uppercase tracking-wide hover:text-ultramarine hover:border-ultramarine transition-colors" href="#">
                        Read full capability statement
                        <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="w-full pb-32 px-6" id="work">
<div className="flex justify-between items-end mb-16 border-b border-neutral-300 pb-4">
<h3 className="text-xs font-medium uppercase tracking-wide text-neutral-400">(02) — Selected Works</h3>
<span className="text-xs font-medium text-[#111]">2023 — 2024</span>
</div>
<div className="flex flex-col">

<div className="project-item group relative border-t border-neutral-300 py-12 cursor-pointer transition-all hover:bg-white">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
<div className="md:col-span-1 text-xs font-medium text-neutral-400 group-hover:text-ultramarine">01</div>
<div className="md:col-span-5 text-3xl md:text-5xl font-medium tracking-tight text-[#111] group-hover:translate-x-4 transition-transform duration-500">
                        Vanguard Arch
                    </div>
<div className="md:col-span-3 text-xs uppercase tracking-wide text-neutral-500 flex gap-2">
<span className="border border-neutral-200 px-2 py-1 rounded-full">Architecture</span>
<span className="border border-neutral-200 px-2 py-1 rounded-full">WebGL</span>
</div>
<div className="md:col-span-3 flex justify-end">
<iconify-icon className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
</div>

<div className="hover-reveal-img absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-1/2 w-64 h-40 bg-gray-200 overflow-hidden z-10 pointer-events-none rounded shadow-2xl rotate-3 mix-blend-multiply hidden lg:block">
<div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-400 flex items-center justify-center text-gray-300">
<iconify-icon icon="solar:gallery-wide-linear" width="48"></iconify-icon>
</div>
</div>
</div>

<div className="project-item group relative border-t border-neutral-300 py-12 cursor-pointer transition-all hover:bg-white">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
<div className="md:col-span-1 text-xs font-medium text-neutral-400 group-hover:text-ultramarine">02</div>
<div className="md:col-span-5 text-3xl md:text-5xl font-medium tracking-tight text-[#111] group-hover:translate-x-4 transition-transform duration-500">
                        Mono Finance
                    </div>
<div className="md:col-span-3 text-xs uppercase tracking-wide text-neutral-500 flex gap-2">
<span className="border border-neutral-200 px-2 py-1 rounded-full">Fintech</span>
<span className="border border-neutral-200 px-2 py-1 rounded-full">App Design</span>
</div>
<div className="md:col-span-3 flex justify-end">
<iconify-icon className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="project-item group relative border-t border-neutral-300 py-12 cursor-pointer transition-all hover:bg-white">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
<div className="md:col-span-1 text-xs font-medium text-neutral-400 group-hover:text-ultramarine">03</div>
<div className="md:col-span-5 text-3xl md:text-5xl font-medium tracking-tight text-[#111] group-hover:translate-x-4 transition-transform duration-500">
                        Aeon Muse
                    </div>
<div className="md:col-span-3 text-xs uppercase tracking-wide text-neutral-500 flex gap-2">
<span className="border border-neutral-200 px-2 py-1 rounded-full">E-Commerce</span>
<span className="border border-neutral-200 px-2 py-1 rounded-full">3D</span>
</div>
<div className="md:col-span-3 flex justify-end">
<iconify-icon className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="project-item group relative border-t border-b border-neutral-300 py-12 cursor-pointer transition-all hover:bg-white">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
<div className="md:col-span-1 text-xs font-medium text-neutral-400 group-hover:text-ultramarine">04</div>
<div className="md:col-span-5 text-3xl md:text-5xl font-medium tracking-tight text-[#111] group-hover:translate-x-4 transition-transform duration-500">
                        Lumina Labs
                    </div>
<div className="md:col-span-3 text-xs uppercase tracking-wide text-neutral-500 flex gap-2">
<span className="border border-neutral-200 px-2 py-1 rounded-full">Medical</span>
<span className="border border-neutral-200 px-2 py-1 rounded-full">Branding</span>
</div>
<div className="md:col-span-3 flex justify-end">
<iconify-icon className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="mt-12 flex justify-center">
<button className="px-8 py-3 rounded-full border border-neutral-300 text-xs font-medium uppercase tracking-wide hover:bg-[#111] hover:text-white hover:border-[#111] transition-all duration-300 flex items-center gap-2">
                View Archive
                <iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
</button>
</div>
</section>

<section className="w-full py-32 bg-white px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="col-span-1">
<div className="text-xs font-medium uppercase tracking-wide text-neutral-400 mb-8">(03) — Services</div>
</div>

<div className="flex flex-col gap-4 border-l border-neutral-200 pl-6 hover:border-ultramarine transition-colors duration-500 group">
<iconify-icon className="text-neutral-400 group-hover:text-ultramarine transition-colors" icon="solar:code-circle-linear" width="32"></iconify-icon>
<h4 className="text-lg font-medium tracking-tight mt-2">Creative Engineering</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                    Custom WebGL, Three.js implementations, and shader development for immersive storytelling.
                </p>
</div>

<div className="flex flex-col gap-4 border-l border-neutral-200 pl-6 hover:border-ultramarine transition-colors duration-500 group">
<iconify-icon className="text-neutral-400 group-hover:text-ultramarine transition-colors" icon="solar:figma-file-linear" width="32"></iconify-icon>
<h4 className="text-lg font-medium tracking-tight mt-2">Interface Design</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                    UI/UX design focused on conversion, usability, and aesthetic purity. Swiss principles.
                </p>
</div>

<div className="flex flex-col gap-4 border-l border-neutral-200 pl-6 hover:border-ultramarine transition-colors duration-500 group">
<iconify-icon className="text-neutral-400 group-hover:text-ultramarine transition-colors" icon="solar:shop-linear" width="32"></iconify-icon>
<h4 className="text-lg font-medium tracking-tight mt-2">E-Commerce</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                    Headless implementations using Shopify, Next.js, and Sanity. Fast, secure, scalable.
                </p>
</div>
</div>
</section>

<footer className="w-full bg-[#0A0A0A] text-[#F4F4F4] pt-32 pb-8 px-6 relative overflow-hidden">

<div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-gradient-to-b from-ultramarine to-transparent blur-3xl pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32 relative z-10">
<div className="lg:col-span-6">
<h2 className="text-6xl md:text-8xl font-medium tracking-tighter leading-none mb-8">
                    Let's start<br/>the <span className="text-ultramarine">narrative.</span>
</h2>
</div>
<div className="lg:col-span-4 lg:col-start-8 flex flex-col justify-between">
<div className="flex flex-col gap-6">
<p className="text-neutral-400 text-sm max-w-sm">
                        Available for select projects in Q4 2023. Reach out to discuss your vision.
                    </p>
<a className="inline-flex items-center gap-2 text-2xl font-medium tracking-tight hover:text-ultramarine transition-colors" href="mailto:hello@recit.studio">
                        hello@recit.studio
                        <iconify-icon icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</a>
</div>
<div className="mt-16 grid grid-cols-2 gap-8">
<div className="flex flex-col gap-2">
<span className="text-xs text-neutral-500 uppercase tracking-wider">Socials</span>
<a className="text-sm hover:text-ultramarine transition-colors" href="#">Twitter / X</a>
<a className="text-sm hover:text-ultramarine transition-colors" href="#">Instagram</a>
<a className="text-sm hover:text-ultramarine transition-colors" href="#">Awwwards</a>
</div>
<div className="flex flex-col gap-2">
<span className="text-xs text-neutral-500 uppercase tracking-wider">Location</span>
<span className="text-sm text-neutral-300">Zurich, CH</span>
<span className="text-sm text-neutral-300">Remote Worldwide</span>
</div>
</div>
</div>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 font-medium tracking-wide uppercase">
<span>© 2023 recit. Collective.</span>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Imprint</a>
</div>
<span className="mt-4 md:mt-0">Design by recit.</span>
</div>
</footer>

<style>
        body:hover {
            cursor: none; 
        }
        .cursor-dot,
        .cursor-outline {
            position: fixed;
            top: 0;
            left: 0;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            z-index: 9999;
            pointer-events: none;
        }
        .cursor-dot {
            width: 8px;
            height: 8px;
            background-color: #3D3BFF;
        }
        .cursor-outline {
            width: 40px;
            height: 40px;
            border: 1px solid rgba(61, 59, 255, 0.5);
            transition: width 0.2s, height 0.2s, background-color 0.2s;
        }
        
        /* Interactive states */
        a:hover ~ .cursor-outline,
        button:hover ~ .cursor-outline,
        .project-item:hover ~ .cursor-outline {
            width: 60px;
            height: 60px;
            background-color: rgba(61, 59, 255, 0.1);
            border-color: transparent;
        }
    </style>



    </>
  );
}
