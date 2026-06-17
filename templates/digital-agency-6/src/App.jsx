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
colors: {
accent: '#F9D312', // Maintaining the referenced template's brutalist yellow
dark: '#050505',
'dark-gray': '#111111',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
letterSpacing: {
tightest: '-.075em',
tighter: '-.05em',
}
}
}
}



        // Grid Generation Logic
        const gridContainer = document.getElementById('grid-overlay');
        // Mobile needs fewer squares to save performance and look better
        const isMobile = window.innerWidth < 768;
        const totalSquares = 100; // 10x10 grid

        for (let i = 0; i < totalSquares; i++) {
            const square = document.createElement('div');
            // Brutalist styling: Accent color background blocks the view initially
            // Border is subtle to create the grid lines
            square.className = 'reveal-tile bg-accent w-full h-full border border-dark/10 cursor-crosshair relative';
            
            // Add a small '+' icon to random squares for "technical" feel
            if (Math.random() > 0.9) {
                const plus = document.createElement('span');
                plus.innerText = '+';
                plus.className = 'absolute bottom-1 right-1 text-[8px] text-dark/30 font-mono pointer-events-none';
                square.appendChild(plus);
            }

            // Interaction: Mouseover triggers fade out
            square.addEventListener('mouseover', function() {
                this.classList.add('faded');
                
                // Chain reaction: fade out neighbor occasionally
                setTimeout(() => {
                    const next = this.nextElementSibling;
                    if(next && Math.random() > 0.7) next.classList.add('faded');
                }, 50);
            });

            // Touch support
            square.addEventListener('touchstart', function() {
                this.classList.add('faded');
            }, {passive: true});

            gridContainer.appendChild(square);
        }

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
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
      

<nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-dark/90 backdrop-blur-sm mix-blend-difference">
<div className="flex justify-between items-center h-16 px-4 md:px-8 max-w-[1920px] mx-auto">
<div className="flex items-center gap-2 group cursor-pointer">
<span className="iconify text-accent group-hover:rotate-180 transition-transform duration-500" data-icon="lucide:mountain-snow" data-strokeWidth="1.5" data-width="24"></span>
<div className="font-display tracking-widest text-sm font-semibold uppercase text-white">Yeti<span className="text-accent">Growth</span></div>
</div>
<div className="hidden md:flex gap-10 text-xs font-mono tracking-[0.2em]">
<a className="hover:text-white transition-colors uppercase relative group" href="#services">
                    Services
                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors uppercase relative group" href="#about">
                    Agency
                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors uppercase relative group" href="#contact">
                    Start Project
                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full"></span>
</a>
</div>

<button className="md:hidden text-white">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<header className="relative w-full h-screen overflow-hidden flex items-center justify-center border-b border-white/10">

<div className="absolute inset-0 z-0 flex flex-col justify-center px-4 md:px-12 bg-arch-grid">
<div className="max-w-[1920px] mx-auto w-full h-full flex flex-col justify-between py-24 md:py-32">
<div className="flex justify-between items-start w-full opacity-60">
<span className="font-mono text-xs uppercase tracking-widest text-white">Est. 2025</span>
<span className="font-mono text-xs uppercase tracking-widest text-white text-right">Kathmandu<br/>Nepal</span>
</div>
<div className="relative z-10">
<h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9] text-white font-medium uppercase mix-blend-overlay">
                        Digital<br/>
                        Elevation<br/>
<span className="text-accent opacity-100">Partners.</span>
</h1>
<div className="mt-8 flex flex-col md:flex-row gap-8 md:items-end justify-between border-t border-white/10 pt-8">
<p className="font-mono text-sm max-w-md text-neutral-400 font-light leading-relaxed">
                            We are the Sherpas for your brand's digital journey. Providing strategic web development, SEO, and growth marketing for businesses across Nepal.
                        </p>
<a className="group flex items-center gap-4 border border-accent/30 px-6 py-3 hover:bg-accent hover:text-black transition-all duration-300" href="#contact">
<span className="font-mono text-xs tracking-widest uppercase">Start Your Climb</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 z-20 w-full h-full cursor-crosshair" id="grid-overlay">

</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce">
<span className="iconify text-accent" data-icon="lucide:chevrons-down" data-width="24"></span>
</div>
</header>

<main className="w-full mx-auto max-w-[1920px] border-x border-white/10 bg-dark">

<section className="relative" id="services">

<div className="w-full border-b border-white/10 p-4 md:px-8 flex items-center justify-between sticky top-16 bg-dark z-40 backdrop-blur-md">
<div className="flex items-center gap-3">
<span className="iconify text-accent" data-icon="lucide:layout-grid" data-width="18"></span>
<h2 className="font-mono text-xs tracking-[0.25em] uppercase text-white">Our Capabilities</h2>
</div>
<span className="font-mono text-xs text-neutral-500 hidden md:block">FULL SERVICE DIGITAL</span>
</div>
<div className="flex flex-col">

<article className="group relative border-b border-white/10 hover:bg-dark-gray transition-colors duration-300 cursor-pointer">
<div className="block p-6 md:p-16 flex flex-col md:flex-row justify-between items-baseline gap-6">
<div className="w-full md:w-2/3">
<div className="flex items-center gap-4 mb-4">
<span className="font-mono text-xs text-accent">01</span>
<span className="h-px w-12 bg-white/20"></span>
<span className="font-mono text-xs text-neutral-500 uppercase">Core Infrastructure</span>
</div>
<h3 className="font-display text-4xl md:text-6xl text-white font-normal tracking-tight group-hover:text-accent transition-colors duration-300">
                                Web Development
                            </h3>
<p className="mt-6 text-neutral-400 font-light max-w-lg leading-relaxed text-sm md:text-base">
                                High-performance websites tailored for the Nepalese market. From custom React applications to robust WordPress solutions that load fast on local networks.
                            </p>
<div className="flex flex-wrap gap-2 mt-6 opacity-60">
<span className="border border-white/20 px-2 py-1 text-[10px] font-mono uppercase text-white">Next.js</span>
<span className="border border-white/20 px-2 py-1 text-[10px] font-mono uppercase text-white">WordPress</span>
<span className="border border-white/20 px-2 py-1 text-[10px] font-mono uppercase text-white">Headless CMS</span>
</div>
</div>
<div className="md:text-right w-full md:w-1/3 flex justify-end items-start h-full">
<span className="iconify opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-accent" data-icon="lucide:code-2" data-strokeWidth="1" data-width="48"></span>
</div>
</div>
</article>

<article className="group relative border-b border-white/10 hover:bg-dark-gray transition-colors duration-300 cursor-pointer">
<div className="block p-6 md:p-16 flex flex-col md:flex-row justify-between items-baseline gap-6">
<div className="w-full md:w-2/3">
<div className="flex items-center gap-4 mb-4">
<span className="font-mono text-xs text-accent">02</span>
<span className="h-px w-12 bg-white/20"></span>
<span className="font-mono text-xs text-neutral-500 uppercase">Visibility</span>
</div>
<h3 className="font-display text-4xl md:text-6xl text-white font-normal tracking-tight group-hover:text-accent transition-colors duration-300">
                                SEO &amp; Marketing
                            </h3>
<p className="mt-6 text-neutral-400 font-light max-w-lg leading-relaxed text-sm md:text-base">
                                Data-driven strategies to dominate search results in Nepal and abroad. We handle Google Ads, Social Media campaigns, and organic growth optimization.
                            </p>
<div className="flex flex-wrap gap-2 mt-6 opacity-60">
<span className="border border-white/20 px-2 py-1 text-[10px] font-mono uppercase text-white">Technical SEO</span>
<span className="border border-white/20 px-2 py-1 text-[10px] font-mono uppercase text-white">Content Strategy</span>
<span className="border border-white/20 px-2 py-1 text-[10px] font-mono uppercase text-white">Analytics</span>
</div>
</div>
<div className="md:text-right w-full md:w-1/3 flex justify-end items-start h-full">
<span className="iconify opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-accent" data-icon="lucide:bar-chart-2" data-strokeWidth="1" data-width="48"></span>
</div>
</div>
</article>

<article className="group relative border-b border-white/10 hover:bg-dark-gray transition-colors duration-300 cursor-pointer">
<div className="block p-6 md:p-16 flex flex-col md:flex-row justify-between items-baseline gap-6">
<div className="w-full md:w-2/3">
<div className="flex items-center gap-4 mb-4">
<span className="font-mono text-xs text-accent">03</span>
<span className="h-px w-12 bg-white/20"></span>
<span className="font-mono text-xs text-neutral-500 uppercase">Visual Language</span>
</div>
<h3 className="font-display text-4xl md:text-6xl text-white font-normal tracking-tight group-hover:text-accent transition-colors duration-300">
                                Brand Identity
                            </h3>
<p className="mt-6 text-neutral-400 font-light max-w-lg leading-relaxed text-sm md:text-base">
                                Creating memorable visual systems that resonate with local culture while maintaining global standards. Logo design, UI/UX, and complete brand guidelines.
                            </p>
<div className="flex flex-wrap gap-2 mt-6 opacity-60">
<span className="border border-white/20 px-2 py-1 text-[10px] font-mono uppercase text-white">Figma</span>
<span className="border border-white/20 px-2 py-1 text-[10px] font-mono uppercase text-white">UI Design</span>
<span className="border border-white/20 px-2 py-1 text-[10px] font-mono uppercase text-white">Rebranding</span>
</div>
</div>
<div className="md:text-right w-full md:w-1/3 flex justify-end items-start h-full">
<span className="iconify opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-accent" data-icon="lucide:pen-tool" data-strokeWidth="1" data-width="48"></span>
</div>
</div>
</article>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 w-full border-b border-white/10" id="about">

<div className="border-r border-white/10 p-6 md:p-12 flex flex-col justify-between">
<div>
<h4 className="font-mono text-xs tracking-widest text-accent mb-8 uppercase flex items-center gap-2">
<span className="iconify" data-icon="lucide:flag" data-width="14"></span>
                        Our Mission
                    </h4>
<p className="font-sans text-xl md:text-2xl text-white leading-relaxed font-light mb-12">
                        Nepal is rising digitally. We exist to bridge the gap between traditional business values and modern digital necessity. We build scalable, robust systems that help Nepalese businesses compete globally.
                    </p>
</div>
<div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
<div>
<span className="block text-4xl font-display text-accent mb-1">50+</span>
<span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Projects Delivered</span>
</div>
<div>
<span className="block text-4xl font-display text-accent mb-1">24/7</span>
<span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Local Support</span>
</div>
</div>
</div>

<div className="p-6 md:p-12 bg-arch-grid">
<h4 className="font-mono text-xs tracking-widest text-accent mb-8 uppercase flex items-center gap-2">
<span className="iconify" data-icon="lucide:cpu" data-width="14"></span>
                    Digital Arsenal
                </h4>
<div className="grid grid-cols-2 gap-4">

<div className="border border-white/10 p-4 hover:border-accent transition-colors group">
<span className="iconify text-neutral-500 group-hover:text-accent mb-3" data-icon="lucide:layers" data-width="24"></span>
<h5 className="text-white font-mono text-xs uppercase">Full Stack</h5>
<p className="text-neutral-500 text-[10px] mt-1">MERN / JAMStack</p>
</div>

<div className="border border-white/10 p-4 hover:border-accent transition-colors group">
<span className="iconify text-neutral-500 group-hover:text-accent mb-3" data-icon="lucide:shopping-bag" data-width="24"></span>
<h5 className="text-white font-mono text-xs uppercase">Commerce</h5>
<p className="text-neutral-500 text-[10px] mt-1">Shopify / Woo</p>
</div>

<div className="border border-white/10 p-4 hover:border-accent transition-colors group">
<span className="iconify text-neutral-500 group-hover:text-accent mb-3" data-icon="lucide:search" data-width="24"></span>
<h5 className="text-white font-mono text-xs uppercase">Growth</h5>
<p className="text-neutral-500 text-[10px] mt-1">SEO / SEM</p>
</div>

<div className="border border-white/10 p-4 hover:border-accent transition-colors group">
<span className="iconify text-neutral-500 group-hover:text-accent mb-3" data-icon="lucide:smartphone" data-width="24"></span>
<h5 className="text-white font-mono text-xs uppercase">Mobile</h5>
<p className="text-neutral-500 text-[10px] mt-1">React Native / iOS</p>
</div>
</div>
</div>
</section>

<footer className="bg-accent text-dark p-6 md:p-16" id="contact">
<div className="flex flex-col md:flex-row justify-between gap-12">
<div className="w-full md:w-1/2">
<h2 className="font-display text-5xl md:text-7xl tracking-tighter uppercase mb-6 leading-none">
                        Ready to<br/>Scale Up?
                    </h2>
<p className="font-sans text-lg font-medium max-w-md mb-8">
                        Let's discuss how we can transform your digital presence. Based in Kathmandu, serving the world.
                    </p>
<a className="inline-flex items-center gap-3 border-b-2 border-dark pb-1 text-2xl font-mono hover:pl-4 transition-all duration-300" href="mailto:hello@yetigrowth.np">
                        hello@yetigrowth.np
                        <span className="iconify" data-icon="lucide:arrow-up-right" data-width="24"></span>
</a>
</div>
<div className="w-full md:w-1/3 flex flex-col justify-between">

<form className="space-y-4 mb-12">
<div className="relative">
<input className="w-full bg-transparent border-b border-dark/30 py-3 text-sm font-mono uppercase placeholder-dark/50 focus:outline-none focus:border-dark transition-colors" placeholder="NAME" type="text"/>
</div>
<div className="relative">
<input className="w-full bg-transparent border-b border-dark/30 py-3 text-sm font-mono uppercase placeholder-dark/50 focus:outline-none focus:border-dark transition-colors" placeholder="EMAIL" type="email"/>
</div>
<div className="relative pt-4">
<button className="w-full border border-dark py-4 text-xs font-mono uppercase tracking-widest hover:bg-dark hover:text-accent transition-colors flex justify-between px-4 items-center" type="button">
<span>Send Request</span>
<span className="iconify" data-icon="lucide:send" data-width="16"></span>
</button>
</div>
</form>
<div className="flex gap-6">
<a className="p-2 border border-dark/20 hover:bg-dark hover:text-accent transition-colors rounded-full" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="20"></span>
</a>
<a className="p-2 border border-dark/20 hover:bg-dark hover:text-accent transition-colors rounded-full" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="20"></span>
</a>
<a className="p-2 border border-dark/20 hover:bg-dark hover:text-accent transition-colors rounded-full" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="20"></span>
</a>
</div>
</div>
</div>
<div className="border-t border-dark/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono uppercase tracking-widest opacity-60">
<span>© 2025 YetiGrowth Agency.</span>
<span className="mt-2 md:mt-0">Designed in Nepal</span>
</div>
</footer>
</main>


    </>
  );
}
