import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


      // Initialize Smooth Scroll
      const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: 'vertical',
          gestureDirection: 'vertical',
          smooth: true,
          mouseMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
      });

      function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      // GSAP Setup
      gsap.registerPlugin(ScrollTrigger);

      // 1. Shutter Animation on Load
      window.addEventListener('load', () => {
          setTimeout(() => {
              document.body.classList.add('loaded');
          }, 200);
      });

      // 2. Custom Cursor Logic
      const cursor = document.querySelector('.cursor-dot');
      const hoverTriggers = document.querySelectorAll('.hover-trigger');

      document.addEventListener('mousemove', (e) => {
          gsap.to(cursor, {
              x: e.clientX,
              y: e.clientY,
              duration: 0.1,
              ease: "power2.out"
          });
      });

      hoverTriggers.forEach(el => {
          el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
          el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
      });

      // 3. Grid Drawing
      const gridCells = document.querySelectorAll('.grid-cell');
      gridCells.forEach(cell => {
          ScrollTrigger.create({
              trigger: cell,
              start: "top 80%",
              onEnter: () => cell.classList.add('active')
          });
      });

      // 4. Marquee Scroll
      gsap.to(".marquee-content", {
          xPercent: -20,
          ease: "none",
          scrollTrigger: {
              trigger: ".marquee-container",
              scrub: 1
          }
      });

      // 5. Text Highlight Manifesto
      const manifesto = document.getElementById('manifesto');
      const words = manifesto.innerText.split(" ");
      manifesto.innerHTML = "";
      words.forEach(word => {
          const span = document.createElement("span");
          span.innerText = word + " ";
          span.style.opacity = "0.2";
          span.style.transition = "opacity 0.2s";
          manifesto.appendChild(span);
      });

      const spans = manifesto.querySelectorAll("span");
      gsap.to(spans, {
          opacity: 1,
          color: "#000000",
          stagger: 0.1,
          scrollTrigger: {
              trigger: "#manifesto",
              start: "top 75%",
              end: "bottom 45%",
              scrub: 1
          }
      });

      // 6. Horizontal Scroll Process
      let processSection = document.querySelector(".process-wrapper");
      let processContainer = document.querySelector(".process-container");

      gsap.to(processContainer, {
          x: () => -(processContainer.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
              trigger: processSection,
              pin: true,
              scrub: 1,
              end: () => "+=" + processContainer.scrollWidth
          }
      });

      // 7. Image Trail
      const teamItems = document.querySelectorAll('.team-item');
      const trailWrapper = document.querySelector('.trail-img-wrapper');
      const trailImg = document.querySelector('.trail-img');

      document.addEventListener('mousemove', (e) => {
          gsap.to(trailWrapper, {
              x: e.clientX,
              y: e.clientY,
              duration: 0.4,
              ease: "power1.out"
          });
      });

      teamItems.forEach(item => {
          item.addEventListener('mouseenter', () => {
              const imgUrl = item.getAttribute('data-img');
              trailImg.src = imgUrl;
              gsap.to(trailWrapper, { opacity: 1, scale: 1, duration: 0.3 });
          });
          item.addEventListener('mouseleave', () => {
              gsap.to(trailWrapper, { opacity: 0, scale: 0.8, duration: 0.3 });
          });
      });

      // 8. Zoom Mask Effect
      gsap.to(".zoom-circle", {
  scale: 500,
  borderRadius: "0%",
  scrollTrigger: {
    trigger: ".zoom-wrapper",
    start: "top top",
    end: "bottom bottom",
    scrub: 1
  }
});

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bKN5upvoulAmWvInmHza"></div>

</div>
</div>
<div className="cursor-dot" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(834px, 7px)'}}></div>
<div className="noise"></div>


<nav className="fixed top-0 left-0 w-full z-40">
<div className="max-w-6xl mx-auto px-6 pt-6">

<div className="rounded-2xl border border-white/10 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.75)] px-6 py-3 flex items-center justify-between">

<span className="text-lg font-semibold tracking-tight">PULSE</span>

<div className="hidden md:flex gap-10 text-sm font-mono uppercase tracking-wider">
<a className="hover:opacity-80" href="#modules">Modules</a>
<a className="hover:opacity-80" href="#output">Output</a>
<a className="hover:opacity-80" href="#system">System</a>
</div>

<div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider">
<span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
<span>Online</span>
</div>
</div>
</div>
</nav>

<section className="min-h-screen flex flex-col md:px-12 border-neutral-900 border-b pt-20 pr-6 pl-6 relative justify-center">
<div className="max-w-7xl mx-auto w-full z-10">
<div className="mb-12 overflow-hidden">
<p className="text-xs font-mono text-neutral-500 uppercase tracking-widest shutter-wrapper">
<span className="shutter-text">Digital Architecture V2.0</span>
</p>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[0.9] text-white uppercase mb-16">
<span className="shutter-wrapper">
<span className="shutter-text">Engineering</span>
</span>
<span className="shutter-wrapper">
<span className="shutter-text text-neutral-600">The Future</span>
</span>
<span className="shutter-wrapper">
<span className="shutter-text">Of Design</span>
</span>
</h1>
<div className="flex flex-col md:flex-row justify-between items-end border-t border-neutral-800 pt-8 w-full">
<div className="max-w-md text-sm text-neutral-400 leading-relaxed mb-8 md:mb-0 shutter-wrapper delay-500">
<span className="shutter-text">
              Pulse is a design operating system for brands seeking dominance.
              We build high-velocity digital experiences that convert attention
              into currency.
            </span>
</div>
<a className="group flex items-center gap-4 hover-trigger" href="#contact">
<div className="w-12 h-12 border border-neutral-700 rounded-full flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
<svg className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M7 17L17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</div>
<span className="text-xs font-mono uppercase tracking-widest group-hover:translate-x-2 transition-transform">
              Initialize Project
            </span>
</a>
</div>
</div>

<div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_80%_20%,_rgba(120,119,198,0.3),rgba(255,255,255,0))] pointer-events-none"></div>
</section>

<div className="py-12 bg-neutral-900 overflow-hidden whitespace-nowrap border-b border-neutral-800 marquee-container">
<div className="inline-flex items-center gap-12 marquee-content" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>
<span className="text-8xl font-semibold text-neutral-800 tracking-tighter heading-font uppercase">
          Strategy
        </span>
<span className="text-8xl font-semibold text-neutral-200 tracking-tighter heading-font uppercase">
          Development
        </span>
<span className="text-8xl font-semibold text-neutral-800 tracking-tighter heading-font uppercase">
          Interface
        </span>
<span className="text-8xl font-semibold text-neutral-200 tracking-tighter heading-font uppercase">
          Identity
        </span>
<span className="text-8xl font-semibold text-neutral-800 tracking-tighter heading-font uppercase">
          Strategy
        </span>
<span className="text-8xl font-semibold text-neutral-200 tracking-tighter heading-font uppercase">
          Development
        </span>
</div>
</div>

<section className="py-32 px-6 md:px-12 bg-[#050505]" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between mb-20 items-end">
<h2 className="text-4xl md:text-5xl font-medium heading-font tracking-tight">
            System Modules
          </h2>
<p className="text-sm font-mono text-neutral-500 uppercase mt-4 md:mt-0">
            [ 01 - 06 ]
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 border-l border-neutral-800">

<div className="grid-cell p-10 border-r border-b border-neutral-800 hover:bg-neutral-900/30 transition-colors group hover-trigger">
<div className="mb-24 flex justify-between">
<svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<rect height="16" rx="2" width="16" x="4" y="4"></rect>
<path d="M12 4v16"></path>
<path d="M4 12h16"></path>
</svg>
<span className="text-xs font-mono text-neutral-600">01</span>
</div>
<h3 className="text-xl font-medium text-white mb-4">
              Interface Design
            </h3>
<p className="text-sm text-neutral-500 leading-relaxed">
              Pixel-perfect UI constructed with atomic design principles for
              maximum scalability.
            </p>
</div>

<div className="grid-cell p-10 border-r border-b border-neutral-800 hover:bg-neutral-900/30 transition-colors group hover-trigger">
<div className="mb-24 flex justify-between">
<svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="m18 16 4-4-4-4"></path>
<path d="m6 8-4 4 4 4"></path>
<path d="m14.5 4-5 16"></path>
</svg>
<span className="text-xs font-mono text-neutral-600">02</span>
</div>
<h3 className="text-xl font-medium text-white mb-4">Full-Stack Dev</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
              Robust architectures using Next.js and WebGL. Performance as a
              feature, not an afterthought.
            </p>
</div>

<div className="grid-cell p-10 border-r border-b border-neutral-800 hover:bg-neutral-900/30 transition-colors group hover-trigger">
<div className="mb-24 flex justify-between">
<svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="m16 12-4-4-4 4"></path>
<path d="M12 16V8"></path>
</svg>
<span className="text-xs font-mono text-neutral-600">03</span>
</div>
<h3 className="text-xl font-medium text-white mb-4">Growth Strategy</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
              Data-driven campaigns integrated directly into the product
              lifecycle.
            </p>
</div>
<div className="grid-cell p-10 border-r border-b border-neutral-800 hover:bg-neutral-900/30 transition-colors group hover-trigger">
<div className="mb-24 flex justify-between">
<svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
</svg>
<span className="text-xs font-mono text-neutral-600">04</span>
</div>
<h3 className="text-xl font-medium text-white mb-4">
              Immersive Motion
            </h3>
<p className="text-sm text-neutral-500 leading-relaxed">
              Cinema-grade motion design that guides user attention and enhances
              narrative flow.
            </p>
</div>
<div className="grid-cell p-10 border-r border-b border-neutral-800 hover:bg-neutral-900/30 transition-colors group hover-trigger">
<div className="mb-24 flex justify-between">
<svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
<line x1="12" x2="12" y1="22.08" y2="12"></line>
</svg>
<span className="text-xs font-mono text-neutral-600">05</span>
</div>
<h3 className="text-xl font-medium text-white mb-4">Brand Systems</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
              Cohesive visual identities built to adapt seamlessly across all
              digital and physical mediums.
            </p>
</div>
<div className="grid-cell p-10 border-r border-b border-neutral-800 hover:bg-neutral-900/30 transition-colors group hover-trigger">
<div className="mb-24 flex justify-between">
<svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
<path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
</svg>
<span className="text-xs font-mono text-neutral-600">06</span>
</div>
<h3 className="text-xl font-medium text-white mb-4">
              Cloud Infrastructure
            </h3>
<p className="text-sm text-neutral-500 leading-relaxed">
              Scalable backend solutions ensuring 99.9% uptime and
              lightning-fast global delivery.
            </p>
</div>
</div>
</div>
</section>

<section className="py-40 px-6 bg-white text-black flex items-center justify-center">
<div className="max-w-4xl mx-auto text-center">
<p className="text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight heading-font text-neutral-300" id="manifesto"><span style={{opacity: '0.2', transition: 'opacity 0.2s', color: 'rgb(212, 212, 212)'}}>We </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>believe </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>that </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>code </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>is </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>the </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>new </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>concrete. </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>In </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>a </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>world </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>of </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>infinite </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>noise, </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>clarity </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>is </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>the </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>only </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>currency </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>that </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>matters. </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>We </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>strip </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>away </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>the </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>non-essential </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>to </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>reveal </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>the </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>core </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>truth </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>of </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>your </span><span style={{opacity: '0.2', transition: 'opacity 0.2s'}}>brand. </span></p>
</div>
</section>

<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1508px', height: '6862px', padding: '0px 0px 6048px'}}>
<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1508px', height: '6862px', padding: '0px 0px 6048px'}}>
<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1508px', height: '6862px', padding: '0px 0px 6048px'}}><section className="process-wrapper overflow-hidden bg-[#050505] h-screen relative border-t border-neutral-900" id="process" style={{translate: 'none', rotate: 'none', scale: 'none', inset: '0px auto auto 0px', margin: '0px', maxWidth: '1508px', width: '1508px', maxHeight: '814px', height: '814px', padding: '0px', transform: 'translate(0px, 0px)'}}>
<div className="process-container flex h-full w-[400vw]" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>

<div className="w-screen h-full grid grid-cols-1 lg:grid-cols-2 border-r border-neutral-800 relative bg-[#050505]">
<div className="flex flex-col justify-center px-12 md:px-24 relative z-10 pointer-events-none">
<div className="absolute top-12 left-12 text-xs font-mono text-neutral-500">
                  PHASE_01
                </div>
<h3 className="text-6xl md:text-8xl font-semibold text-neutral-800 mb-6 heading-font">
                  Audit
                </h3>
<p className="text-2xl text-white max-w-xl font-light">
                  Complete deconstruction of existing digital assets and market
                  positioning.
                </p>
</div>
<div className="hidden lg:flex items-center justify-center relative border-l border-neutral-800/50 overflow-hidden">
<div className="relative p-12 border border-neutral-800/50 rounded-xl bg-neutral-900/20">
<div className="grid grid-cols-4 gap-6 opacity-30">
<div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
<div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
<div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
<div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
<div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
<div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
<div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
<div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
<div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
<div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
<div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
<div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
<div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
<div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
<div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
<div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent animate-scan border-b border-green-500/30"></div>
</div>
</div>
</div>

<div className="w-screen h-full grid grid-cols-1 lg:grid-cols-2 border-r border-neutral-800 relative bg-[#050505]">
<div className="flex flex-col justify-center px-12 md:px-24 relative z-10 pointer-events-none">
<div className="absolute top-12 left-12 text-xs font-mono text-neutral-500">
                  PHASE_02
                </div>
<h3 className="text-6xl md:text-8xl font-semibold text-neutral-800 mb-6 heading-font">
                  Build
                </h3>
<p className="text-2xl text-white max-w-xl font-light">
                  Rapid prototyping followed by rigorous development cycles.
                </p>
</div>
<div className="hidden lg:flex items-center justify-center relative border-l border-neutral-800/50 overflow-hidden">
<div className="relative w-80 h-80 flex items-center justify-center">
<div className="absolute inset-0 border border-neutral-800 rounded-lg animate-[spin_12s_linear_infinite]"></div>
<div className="absolute inset-10 border border-neutral-700 rounded-lg animate-[spin_8s_linear_infinite_reverse]"></div>
<div className="absolute inset-20 border border-neutral-600 rounded-lg animate-[spin_15s_linear_infinite]"></div>
<div className="w-20 h-20 bg-neutral-800 border border-neutral-500 rounded flex items-center justify-center z-10">
<div className="w-3 h-3 bg-white rounded-sm animate-pulse"></div>
</div>
</div>
</div>
</div>

<div className="w-screen h-full grid grid-cols-1 lg:grid-cols-2 border-r border-neutral-800 relative bg-[#050505]">
<div className="flex flex-col justify-center px-12 md:px-24 relative z-10 pointer-events-none">
<div className="absolute top-12 left-12 text-xs font-mono text-neutral-500">
                  PHASE_03
                </div>
<h3 className="text-6xl md:text-8xl font-semibold text-neutral-800 mb-6 heading-font">
                  Deploy
                </h3>
<p className="text-2xl text-white max-w-xl font-light">
                  Global CDN propagation and performance monitoring.
                </p>
</div>
<div className="hidden lg:flex items-center justify-center relative border-l border-neutral-800/50 overflow-hidden">
<div className="relative flex items-center gap-6">
<div className="w-12 h-12 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-neutral-500 rounded-full"></div>
</div>
<div className="w-24 h-px bg-neutral-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent w-1/2 animate-data-flow"></div>
</div>
<div className="w-20 h-20 rounded-full border border-white/20 bg-neutral-900 flex items-center justify-center relative shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]">
<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
<path d="m2 12 20 0"></path>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
</svg>
</div>
<div className="w-24 h-px bg-neutral-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent w-1/2 animate-data-flow" style={{animationDelay: '.5s'}}></div>
</div>
<div className="w-12 h-12 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-neutral-500 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="w-screen h-full flex items-center justify-center relative bg-white text-black">
<div className="text-center">
<h3 className="text-8xl md:text-9xl font-semibold tracking-tighter mb-8 heading-font">
                  Ready?
                </h3>
<button className="px-8 py-4 bg-black text-white rounded-full text-sm font-mono uppercase tracking-widest hover:scale-105 transition-transform hover-trigger">
                  Start Project
                </button>
</div>
</div>
</div>
</section></div>
</div>
</div>

<section className="py-32 px-6 md:px-12 bg-[#050505] border-t border-neutral-900" id="work">
<div className="max-w-7xl mx-auto mb-24">
<h2 className="text-4xl md:text-5xl font-medium heading-font tracking-tight">
          Selected Output
        </h2>
</div>
<div className="max-w-5xl mx-auto relative space-y-32">

<div className="sticky top-24 work-card group hover-trigger">
<div className="bg-[#111] border border-neutral-800 rounded-2xl overflow-hidden aspect-video relative">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/564dc5fb-0d4e-42cb-9136-c3b630185122_1600w.webp"/>
<div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/90 to-transparent">
<div className="flex justify-between items-end">
<div>
<h3 className="text-3xl font-medium text-white mb-2 heading-font">
                    Lumina Finance
                  </h3>
<p className="text-sm font-mono text-neutral-400">
                    Web App / Branding
                  </p>
</div>
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M7 17L17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</div>
</div>
</div>
</div>
</div>

<div className="sticky top-32 work-card group hover-trigger">
<div className="bg-[#111] border border-neutral-800 rounded-2xl overflow-hidden aspect-video relative shadow-2xl shadow-black">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4ca1e73a-69c6-49d2-b4d2-339c3a121dda_1600w.webp"/>
<div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/90 to-transparent">
<div className="flex justify-between items-end">
<div>
<h3 className="text-3xl font-medium text-white mb-2 heading-font">
                    Aeon Motors
                  </h3>
<p className="text-sm font-mono text-neutral-400">
                    3D Configurator / Strategy
                  </p>
</div>
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M7 17L17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</div>
</div>
</div>
</div>
</div>

<div className="sticky top-40 work-card group hover-trigger">
<div className="bg-[#111] border border-neutral-800 rounded-2xl overflow-hidden aspect-video relative shadow-2xl shadow-black">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e30f978-cdd5-4cd8-848c-065e559a7fcc_1600w.webp"/>
<div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/90 to-transparent">
<div className="flex justify-between items-end">
<div>
<h3 className="text-3xl font-medium text-white mb-2 heading-font">
                    Vortex AI
                  </h3>
<p className="text-sm font-mono text-neutral-400">
                    Product Interface
                  </p>
</div>
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M7 17L17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[#050505]">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between mb-20 items-end">
<h2 className="text-4xl md:text-5xl font-medium heading-font tracking-tight">
            The Architects
          </h2>
<p className="text-sm font-mono text-neutral-500 uppercase mt-4 md:mt-0">
            [ Global Team ]
          </p>
</div>
<div className="flex flex-col border-t border-neutral-800">
<div className="team-item py-12 border-b border-neutral-800 flex justify-between items-center group cursor-pointer hover-trigger" data-img="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5180d964-2425-4134-8220-c1528af09124_3840w.jpg">
<h3 className="text-4xl md:text-6xl font-medium text-neutral-500 group-hover:text-white group-hover:translate-x-4 transition-all duration-300 heading-font">
              Marcus Vance
            </h3>
<span className="text-xs font-mono uppercase text-neutral-600 group-hover:text-neutral-400">
              Technical Director
            </span>
</div>
<div className="team-item py-12 border-b border-neutral-800 flex justify-between items-center group cursor-pointer hover-trigger" data-img="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c62627bc-d916-4071-90de-5b3aa885cbf0_3840w.jpg">
<h3 className="text-4xl md:text-6xl font-medium text-neutral-500 group-hover:text-white group-hover:translate-x-4 transition-all duration-300 heading-font">
              Elena Ko
            </h3>
<span className="text-xs font-mono uppercase text-neutral-600 group-hover:text-neutral-400">
              Design Lead
            </span>
</div>
<div className="team-item py-12 border-b border-neutral-800 flex justify-between items-center group cursor-pointer hover-trigger" data-img="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77213b25-2516-4437-b2f5-766f7928b1d0_3840w.jpg">
<h3 className="text-4xl md:text-6xl font-medium text-neutral-500 group-hover:text-white group-hover:translate-x-4 transition-all duration-300 heading-font">
              David Chen
            </h3>
<span className="text-xs font-mono uppercase text-neutral-600 group-hover:text-neutral-400">
              Strategy
            </span>
</div>
</div>
</div>
</section>

<section className="zoom-wrapper h-[220vh] relative bg-[#050505]">
<div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

<div className="zoom-circle w-1 h-1 rounded-full overflow-hidden relative z-10" style={{transform: 'translate(0px, 0px)', translate: 'none', rotate: 'none', scale: 'none', borderRadius: '249975%'}}>

<img alt="Pulse OS Footer Visual" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/abe6309a-283e-40d6-9cb0-b1ccf86a9f2b_3840w.jpg"/>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/10 text-center">
<h2 className="text-[12vw] font-bold leading-none text-[#1a1a1a] hover:text-white transition-colors duration-500 cursor-pointer hover-trigger">
            PULSEBOARD
        </h2>
<div className="flex justify-between max-w-7xl mx-auto mt-12 text-xs font-mono text-neutral-500">
<div>© 2025</div>
<div>SCROLL TO TOP</div>
</div>
</footer>

<div className="trail-img-wrapper" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(834px, 7px) scale(0.8, 0.8)'}}>
<img alt="" className="trail-img" src=""/>
</div>



    </>
  );
}
