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



tailwind.config = { theme: { extend: { colors: { primary: '#ffffff', secondary: '#94a3b8', accent: '#0EA5E9', 'dark-bg': '#050505', 'panel-bg': '#0A0A0A' }, fontFamily: { sans: ['Geist', 'sans-serif'], mono: ['JetBrains Mono', 'monospace'] } } } }



            function setLifecycleStep(n){document.querySelectorAll(".step-btn").forEach(t=>{const e=t.dataset.step==n;t.classList.toggle("bg-white/10",e),t.classList.toggle("border-accent/20",e),t.classList.toggle("shadow-sm",e),t.classList.toggle("border-transparent",!e);const c=t.querySelector("span:first-child");c.classList.toggle("bg-accent",e),c.classList.toggle("text-white",e),c.classList.toggle("bg-white/10",!e),c.classList.toggle("text-gray-500",!e);const txt=t.querySelector("span:nth-child(2)");txt.classList.toggle("text-white",e),txt.classList.toggle("text-secondary",!e)}),document.querySelectorAll(".step-content").forEach(t=>{const e="step-content-"+n===t.id;t.classList.toggle("opacity-100",e),t.classList.toggle("translate-x-0",e),t.classList.toggle("opacity-0",!e),t.classList.toggle("translate-x-8",!e),t.classList.toggle("pointer-events-none",!e)})}
          


      // View Switcher Logic
      function switchView(viewName) {
        const homeView = document.getElementById('view-home');
        const certView = document.getElementById('view-certified');
        
        // Simple fade out/in effect
        if(viewName === 'certified') {
           gsap.to(window, {scrollTo: 0, duration: 0.5});
           homeView.style.opacity = '0';
           setTimeout(() => {
              homeView.classList.add('hidden-view');
              certView.classList.remove('hidden-view');
              certView.style.opacity = '0';
              gsap.to(certView, {opacity: 1, duration: 0.5});
              ScrollTrigger.refresh();
           }, 500);
        } else {
           gsap.to(window, {scrollTo: 0, duration: 0.5});
           certView.style.opacity = '0';
           setTimeout(() => {
              certView.classList.add('hidden-view');
              homeView.classList.remove('hidden-view');
              homeView.style.opacity = '0';
              gsap.to(homeView, {opacity: 1, duration: 0.5});
              ScrollTrigger.refresh();
           }, 500);
        }
      }

      // Initialize Icons
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Initialize Lenis Scrolling
      const lenis = new Lenis({
          duration: 0.7, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical', smoothWheel: true, touchMultiplier: 2,
      });
      function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
      requestAnimationFrame(raf);

      // GSAP Animations
      gsap.registerPlugin(ScrollTrigger);

      // Loader Sequence
      const loaderTimeline = gsap.timeline();
      loaderTimeline.to("#loader-progress", {
          width: "100%", duration: 1.2, ease: "power2.inOut",
          onUpdate: function() { document.getElementById("loader-text").innerText = Math.round(this.progress() * 100) + "%"; }
      })
      .to("#loader", { yPercent: -100, duration: 0.6, ease: "power4.inOut", delay: 0.1 })
      
      // Hero Reveal
      .to(".hero-glow", { opacity: 1, duration: 1.5, ease: "power2.out" }, "-=0.5")
      .to(".hero-char", {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          stagger: 0.1,
          ease: "power3.out"
      }, "-=1.0")
      .to(".hero-fade-in", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out"
      }, "-=0.8");

      // Scroll Reveals
      document.querySelectorAll("section:not(:first-child)").forEach(section => {
          gsap.from(section.querySelectorAll("h2, h3, p, .project-card, li"), {
              scrollTrigger: { trigger: section, start: "top 85%", toggleActions: "play none none reverse" },
              y: 30, opacity: 0, duration: 0.6, stagger: 0.05, ease: "power2.out"
          });
      });

      // Cursor Logic
      if (window.matchMedia("(pointer: fine)").matches) {
          const cursorDot = document.querySelector('.cursor-dot');
          const cursorCircle = document.querySelector('.cursor-circle');
          let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

          document.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; gsap.to(cursorDot, { x: mouseX, y: mouseY, duration: 0 }); });
          gsap.ticker.add(() => {
              cursorX += (mouseX - cursorX) * 0.2; cursorY += (mouseY - cursorY) * 0.2;
              cursorCircle.style.left = cursorX + 'px'; cursorCircle.style.top = cursorY + 'px';
          });
          document.querySelectorAll('a, button, .magnetic-btn').forEach(el => {
              el.addEventListener('mouseenter', () => document.body.classList.add('hover-active'));
              el.addEventListener('mouseleave', () => document.body.classList.remove('hover-active'));
          });
      }

      // Magnetic Buttons
      document.querySelectorAll('.magnetic-btn').forEach(btn => {
          btn.addEventListener('mousemove', (e) => {
              const rect = btn.getBoundingClientRect();
              gsap.to(btn, { x: (e.clientX - rect.left - rect.width / 2) * 0.2, y: (e.clientY - rect.top - rect.height / 2) * 0.2, duration: 0.2 });
          });
          btn.addEventListener('mouseleave', () => gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" }));
      });

      // Canvas
      const canvas = document.getElementById('hero-canvas');
      const ctx = canvas.getContext('2d');
      let width, height, particles = [];
      function resizeCanvas() { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; }
      window.addEventListener('resize', resizeCanvas); resizeCanvas();
      class Particle {
          constructor() { this.x = Math.random() * width; this.y = Math.random() * height; this.vx = (Math.random() - 0.5) * 0.2; this.vy = (Math.random() - 0.5) * 0.2; this.size = Math.random() * 1.5; }
          update() { this.x += this.vx; this.y += this.vy; if(this.x < 0) this.x = width; if(this.x > width) this.x = 0; if(this.y < 0) this.y = height; if(this.y > height) this.y = 0; }
          draw() { ctx.fillStyle = '#0EA5E9'; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI*2); ctx.fill(); }
      }
      for(let i=0; i<50; i++) particles.push(new Particle());
      function animateCanvas() {
          ctx.clearRect(0,0,width,height); ctx.strokeStyle = 'rgba(14, 165, 233, 0.1)'; ctx.lineWidth = 1;
          for(let i=0; i<particles.length; i++) {
              for(let j=i; j<particles.length; j++) {
                  const d = Math.sqrt((particles[i].x-particles[j].x)**2 + (particles[i].y-particles[j].y)**2);
                  if(d<120) { ctx.beginPath(); ctx.moveTo(particles[i].x,particles[i].y); ctx.lineTo(particles[j].x,particles[j].y); ctx.stroke(); }
              }
              particles[i].update(); particles[i].draw();
          }
          requestAnimationFrame(animateCanvas);
      }
      animateCanvas();

      // AI Terminal
      const aiInput = document.getElementById('ai-input');
      const termOut = document.getElementById('terminal-output');
      async function handleCommand(cmd) {
          termOut.innerHTML += `<div><span class="text-white">➜</span> <span class="text-gray-300">${cmd}</span></div>`;
          const loadId = 'l-'+Date.now(); termOut.innerHTML += `<div id="${loadId}" class="text-gray-500 italic text-xs">Querying database...</div>`;
          termOut.scrollTop = termOut.scrollHeight; await new Promise(r => setTimeout(r, 600)); document.getElementById(loadId).remove();
          let resp = "Access Denied. Please contact admin.";
          const lCmd = cmd.toLowerCase();
          if(lCmd.includes('focused')||lCmd.includes('what')) resp = "Certified homes align with national NARR standards, prioritizing resident safety, accountability, and ethical operation.";
          else if(lCmd.includes('certif')||lCmd.includes('how')) resp = "Process: 1. Confirm Eligibility 2. Submit Application 3. Standards Review 4. Site Review.";
          else if(lCmd.includes('difference')||lCmd.includes('treatment')) resp = "Treatment provides clinical care (therapy/meds). Certified Homes provide a supportive living environment to sustain recovery.";
          termOut.innerHTML += `<div class="text-gray-200 border-l-2 border-accent pl-3 py-1">${resp}</div>`; termOut.scrollTop = termOut.scrollHeight;
      }
      aiInput.addEventListener('keydown', e => { if(e.key==='Enter'&&aiInput.value.trim()) { handleCommand(aiInput.value); aiInput.value=''; } });
      document.querySelectorAll('.quick-prompt').forEach(b => b.addEventListener('click', () => handleCommand(b.innerText.replace(/"/g,""))));
    
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

<div className="loader" id="loader">
<div className="flex flex-col items-center gap-4">
<div className="font-mono text-6xl md:text-8xl font-bold tracking-tighter" id="loader-text">
          100%
        </div>
<div className="w-32 h-[1px] bg-gray-800 relative overflow-hidden">
<div className="absolute inset-0 bg-accent w-0" id="loader-progress"></div>
</div>
<div className="font-mono text-xs text-gray-500 uppercase tracking-widest mt-2">Initializing System</div>
</div>
</div>

<div className="cursor-dot"></div>
<div className="cursor-circle"></div>

<nav className="fixed top-0 left-0 w-full px-4 md:px-6 py-5 flex justify-between items-center z-50 mix-blend-difference text-white pointer-events-none">
<a className="uppercase hover:text-accent transition-colors pointer-events-auto text-sm font-semibold tracking-widest font-mono flex items-center gap-2" href="#" onclick="switchView('home'); return false;">
<div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
        RAM
      </a>
<div className="flex items-center gap-4 md:gap-10 pointer-events-auto">
<div className="hidden md:flex bg-white/5 border-white/10 border rounded-full pt-2 pr-6 pb-2 pl-6 backdrop-blur-md gap-x-8 gap-y-8">
<button className="font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors text-gray-400 hover:text-white bg-transparent border-none cursor-pointer" onclick="switchView('home');">
            System
          </button>
<button className="font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors text-gray-400 hover:text-white bg-transparent border-none cursor-pointer" onclick="switchView('certified');">
            Get Certified
          </button>
<a className="font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors text-gray-400 hover:text-white" href="#data">
            Insight
          </a>
</div>
<a className="bg-white text-black px-5 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-colors duration-200 magnetic-btn shadow-lg" href="https://directory.behavehealth.com/mtrecoverydirectory" target="_blank">
          Recovery Navigator
        </a>
</div>
</nav>

<main className="relative" id="main-container">

<div className="view-section" id="view-home">

<section className="min-h-screen flex flex-col md:px-6 md:pt-0 overflow-hidden pt-20 pr-4 pl-4 relative items-center justify-center">

<canvas className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none" height="1024" id="hero-canvas" width="1440"></canvas>

<div className="hero-glow animate-pulse-slow"></div>
<div className="flex flex-col text-center w-full max-w-[1800px] z-10 mr-auto ml-auto relative items-center">

<div className="mb-8 md:mb-12 flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-sm opacity-0 hero-fade-in">
<div className="flex gap-1 h-3 items-center">
<span className="w-1 h-full bg-accent rounded-full animate-[pulse_1s_ease-in-out_infinite]"></span>
<span className="w-1 h-2/3 bg-accent rounded-full animate-[pulse_1.2s_ease-in-out_infinite]"></span>
<span className="w-1 h-full bg-accent rounded-full animate-[pulse_0.8s_ease-in-out_infinite]"></span>
</div>
<span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-gray-300 font-medium">
                Certified Network Active
              </span>
</div>

<h1 className="text-[13vw] md:text-[10vw] leading-[0.85] text-white uppercase flex flex-col items-center font-bold tracking-tighter select-none z-20 relative mix-blend-normal">
<div className="overflow-hidden">
<span className="hero-char text-gray-500">
                  Recovery
                </span>
</div>
<div className="overflow-hidden">
<span className="hero-char">
                  Access Montana
                </span>
</div>
</h1>

<div className="mt-8 md:mt-12 max-w-xl mx-auto opacity-0 hero-fade-in">
<p className="text-secondary leading-relaxed text-balance text-lg md:text-xl font-medium max-w-2xl mt-8 tracking-tight">
                The central nervous system for Montana’s recovery infrastructure. 
                Certifying housing, coordinating centers, and standardizing peer support statewide.
              </p>
</div>

<div className="mt-10 md:mt-14 flex gap-4 opacity-0 hero-fade-in">
<a className="px-8 py-4 bg-white text-black rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all duration-300 magnetic-btn" href="https://directory.behavehealth.com/mtrecoverydirectory" target="_blank">
                Recovery Navigator
              </a>
<button className="px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:bg-white/10 hover:border-white/30 transition-all duration-300 magnetic-btn text-gray-300" onclick="switchView('certified')">
                Get Certified
              </button>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 hero-fade-in animate-bounce">
<svg className="w-5 h-5 text-secondary/50" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="m19 12-7 7-7-7"></path>
</svg>
</div>
</section>

<div className="py-6 md:py-8 bg-black text-white overflow-hidden border-y border-white/10 select-none relative z-20">
<div className="marquee-track font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-gray-400">
<span className="mx-4 md:mx-8">Certified Homes</span>
<span className="text-accent">•</span>
<span className="mx-4 md:mx-8">Recovery Community Centers (RCCs)</span>
<span className="text-accent">•</span>
<span className="mx-4 md:mx-8">Peer Support</span>
<span className="text-accent">•</span>
<span className="mx-4 md:mx-8">Reentry Pathways</span>
<span className="text-accent">•</span>
<span className="mx-4 md:mx-8">Workforce Dev</span>
<span className="text-accent">•</span>
<span className="mx-4 md:mx-8">Training &amp; Technical Assistance</span>
<span className="text-accent">•</span>
<span className="mx-4 md:mx-8">Data &amp; Outcomes</span>
<span className="text-accent">•</span>
</div>
</div>

<section className="py-20 px-4 md:px-6 max-w-[1800px] mx-auto" id="standards">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

<div className="p-8 md:p-14 bg-panel-bg text-white border border-white/10 rounded-2xl hover:border-accent/50 hover:shadow-[0_0_50px_rgba(14,165,233,0.1)] transition-all duration-500 group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute -right-20 -top-20 w-64 h-64 bg-accent/10 blur-[100px] rounded-full group-hover:bg-accent/20 transition-all duration-500"></div>
<div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300 relative z-10 shadow-lg border border-white/10">
<svg fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 relative z-10 group-hover:text-accent transition-colors">
                Certified Homes
              </h3>
<div className="space-y-4 text-gray-400 relative z-10 text-lg leading-relaxed group-hover:text-gray-200 transition-colors">
<p>
                  National standards ensure homes are recovery-focused—aligned with best practices, supportive of residents, and operated with ethics and accountability.
                </p>
</div>
</div>

<div className="p-8 md:p-14 bg-panel-bg text-white border border-white/10 rounded-2xl hover:border-blue-500/50 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] transition-all duration-500 group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full group-hover:bg-blue-500/20 transition-all duration-500"></div>
<div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 relative z-10 shadow-lg border border-white/10">
<svg fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M2 12h20"></path>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
</svg>
</div>
<h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 relative z-10 group-hover:text-blue-400 transition-colors">
                Recovery Community Centers (RCCs)
              </h3>
<div className="space-y-4 text-gray-400 relative z-10 text-lg leading-relaxed group-hover:text-gray-200 transition-colors">
<p>
                  Certification, training, and technical assistance for Montana’s Recovery Community Centers—helping communities make recovery visible and accessible.
                </p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[#080808] border-t border-white/5" id="architecture">
<div className="max-w-[1800px] mx-auto px-4 md:px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter uppercase mb-6 text-white">
                How RAM Strengthens the System
              </h2>
<p className="text-secondary max-w-3xl mx-auto text-lg">
                From safety checks to policy impact. Here is how we build a reliable, accountable safety net for the entire state.
              </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-4 flex flex-col gap-2">
<button className="step-btn active group flex items-center gap-4 p-4 rounded-lg bg-white/10 border border-accent/20 shadow-sm transition-all" data-step="1" onclick="setLifecycleStep(1)">
<span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-mono text-xs font-bold">
                    01
                  </span>
<span className="text-left font-semibold tracking-tight text-white group-hover:text-accent transition-colors">
                    Certification
                  </span>
</button>
<button className="step-btn group flex items-center gap-4 p-4 rounded-lg border border-transparent hover:bg-white/5 hover:border-white/10 transition-all" data-step="2" onclick="setLifecycleStep(2)">
<span className="w-8 h-8 rounded-full bg-white/10 text-gray-500 flex items-center justify-center font-mono text-xs font-bold group-hover:bg-accent group-hover:text-white transition-colors">
                    02
                  </span>
<span className="text-left font-semibold tracking-tight text-secondary group-hover:text-white transition-colors">
                    Training
                  </span>
</button>
<button className="step-btn group flex items-center gap-4 p-4 rounded-lg border border-transparent hover:bg-white/5 hover:border-white/10 transition-all" data-step="3" onclick="setLifecycleStep(3)">
<span className="w-8 h-8 rounded-full bg-white/10 text-gray-500 flex items-center justify-center font-mono text-xs font-bold group-hover:bg-accent group-hover:text-white transition-colors">
                    03
                  </span>
<span className="text-left font-semibold tracking-tight text-secondary group-hover:text-white transition-colors">
                    Deployment
                  </span>
</button>
<button className="step-btn group flex items-center gap-4 p-4 rounded-lg border border-transparent hover:bg-white/5 hover:border-white/10 transition-all" data-step="4" onclick="setLifecycleStep(4)">
<span className="w-8 h-8 rounded-full bg-white/10 text-gray-500 flex items-center justify-center font-mono text-xs font-bold group-hover:bg-accent group-hover:text-white transition-colors">
                    04
                  </span>
<span className="text-left font-semibold tracking-tight text-secondary group-hover:text-white transition-colors">
                    Outcomes Data
                  </span>
</button>
<button className="step-btn group flex items-center gap-4 p-4 rounded-lg border border-transparent hover:bg-white/5 hover:border-white/10 transition-all" data-step="5" onclick="setLifecycleStep(5)">
<span className="w-8 h-8 rounded-full bg-white/10 text-gray-500 flex items-center justify-center font-mono text-xs font-bold group-hover:bg-accent group-hover:text-white transition-colors">
                    05
                  </span>
<span className="text-left font-semibold tracking-tight text-secondary group-hover:text-white transition-colors">
                    Policy &amp; Funding
                  </span>
</button>
</div>

<div className="lg:col-span-8 bg-panel-bg border border-white/10 rounded-2xl p-8 md:p-12 min-h-[600px] relative overflow-hidden">

<div className="step-content absolute inset-0 p-8 md:p-12 transition-all duration-500 opacity-100 translate-x-0" id="step-content-1">
<div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h3 className="text-3xl font-bold mb-4 text-white">Trust &amp; Quality Control</h3>
<div className="space-y-4 text-secondary text-lg leading-relaxed mb-8">
<p>
<strong>Objective:</strong> Ensure every recovery bed in Montana is safe and supportive.
                    </p>
<p>
                      RAM acts as the authorizing body for the state. We verify that homes meet national safety standards (NARR). This protects residents from exploitation and gives funders confidence that their resources are used effectively.
                    </p>
</div>
<div className="flex flex-wrap gap-3">
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono uppercase text-gray-300">
                      Compliance
                    </span>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono uppercase text-gray-300">
                      Site Review
                    </span>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono uppercase text-gray-300">
                      Safety Protocols
                    </span>
</div>
</div>

<div className="step-content absolute inset-0 p-8 md:p-12 transition-all duration-500 opacity-0 translate-x-8 pointer-events-none" id="step-content-2">
<div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<h3 className="text-3xl font-bold mb-4 text-white">Professional Workforce</h3>
<div className="space-y-4 text-secondary text-lg leading-relaxed mb-8">
<p>
<strong>Objective:</strong> Turn lived experience into a certified career path.
                    </p>
<p>
                      We oversee the credentialing of Peer Support Specialists. By training individuals in ethics, trauma-informed care, and crisis intervention, we create a skilled workforce capable of working alongside clinical professionals.
                    </p>
</div>
<div className="flex flex-wrap gap-3">
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono uppercase text-gray-300">
                      Credentialing
                    </span>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono uppercase text-gray-300">
                      Job Creation
                    </span>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono uppercase text-gray-300">
                      Ethics
                    </span>
</div>
</div>

<div className="step-content absolute inset-0 p-8 md:p-12 transition-all duration-500 opacity-0 translate-x-8 pointer-events-none" id="step-content-3">
<div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="map-pin"></i>
</div>
<h3 className="text-3xl font-bold mb-4 text-white">Community Access</h3>
<div className="space-y-4 text-secondary text-lg leading-relaxed mb-8">
<p>
<strong>Objective:</strong> Provide immediate access to support in local communities.
                    </p>
<p>
                      We help launch and sustain Recovery Community Centers (RCCs). These act as "one-stop shops" for employment help, housing navigation, and peer support, reducing the burden on emergency services.
                    </p>
</div>
<div className="flex flex-wrap gap-3">
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono uppercase text-gray-300">
                      Local Centers
                    </span>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono uppercase text-gray-300">
                      Tech Assistance
                    </span>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono uppercase text-gray-300">
                      Accessibility
                    </span>
</div>
</div>

<div className="step-content absolute inset-0 p-8 md:p-12 transition-all duration-500 opacity-0 translate-x-8 pointer-events-none" id="step-content-4">
<div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-full flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-3xl font-bold mb-4 text-white">Proving Results</h3>
<div className="space-y-4 text-secondary text-lg leading-relaxed mb-8">
<p>
<strong>Objective:</strong> Validate the return on investment for recovery services.
                    </p>
<p>
                      We aggregate data on housing retention, employment rates, and recidivism. This allows the state to see exactly what is working, identify gaps in real-time, and allocate funding where it has the highest impact.
                    </p>
</div>
<div className="flex flex-wrap gap-3">
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono uppercase text-gray-300">
                      Retention Metrics
                    </span>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono uppercase text-gray-300">
                      Gap Analysis
                    </span>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono uppercase text-gray-300">
                      ROI
                    </span>
</div>
</div>

<div className="step-content absolute inset-0 p-8 md:p-12 transition-all duration-500 opacity-0 translate-x-8 pointer-events-none" id="step-content-5">
<div className="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-full flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="scale"></i>
</div>
<h3 className="text-3xl font-bold mb-4 text-white">Sustainable Funding</h3>
<div className="space-y-4 text-secondary text-lg leading-relaxed mb-8">
<p>
<strong>Objective:</strong> Secure long-term resources for the recovery ecosystem.
                    </p>
<p>
                      By standardizing the industry and proving outcomes, we give lawmakers the confidence to invest. We translate operational success into legislative action that supports public health and safety.
                    </p>
</div>
<div className="flex flex-wrap gap-3">
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono uppercase text-gray-300">
                      Legislative Action
                    </span>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono uppercase text-gray-300">
                      Systemic Change
                    </span>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="bg-[#020202] text-gray-300 py-20 md:py-32 px-4 md:px-6 relative overflow-hidden border-y border-white/5" id="data">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50"></div>
<div className="max-w-[1000px] mx-auto relative z-10">
<div className="text-center mb-10 md:mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
<span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
<span className="font-mono text-[10px] uppercase tracking-widest text-white">
                  RAM Protocol V2.1
                </span>
</div>
<h2 className="text-3xl md:text-6xl font-semibold tracking-tighter text-white mb-4">
                Real-Time System Insight
              </h2>
<p className="text-gray-400 max-w-lg mx-auto font-light text-sm md:text-lg">
                Explore recovery housing and certification questions with clear, plain-language answers—grounded in RAM standards and the certified provider network.
              </p>
</div>
<div className="w-full bg-[#050505] border border-white/10 rounded-lg shadow-2xl overflow-hidden flex flex-col">
<div className="bg-[#0A0A0A] px-4 py-3 flex items-center gap-4 border-b border-white/5 shrink-0">
<div className="flex gap-1.5 md:gap-2">
<div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="flex-1 text-center font-mono text-[10px] md:text-xs text-gray-600">
                  ram-node-alpha — secure — 80x24
                </div>
</div>
<div className="p-4 md:p-6 font-mono text-xs md:text-base h-[350px] md:h-[400px] flex flex-col bg-black/80 backdrop-blur-sm">
<div className="space-y-3 md:space-y-4 mb-2 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent" id="terminal-output">
<div className="text-accent/90">
<span className="text-white">➜</span>
                    ~ System Initialized. Try: "What makes a home recovery-focused?"
                  </div>
</div>
<div className="flex items-center gap-2 md:gap-3 pt-3 border-t border-white/10 shrink-0">
<span className="text-white">➜</span>
<span className="text-accent">~</span>
<input autocomplete="off" className="bg-transparent border-none outline-none text-white w-full placeholder-gray-800 focus:placeholder-gray-600" id="ai-input" placeholder="Enter command..." spellcheck="false" type="text"/>
</div>
</div>
</div>
<p className="text-center text-[10px] text-gray-600 uppercase tracking-widest mt-4">
              General information only—this is not clinical advice. If you need immediate help, call 988.
            </p>
<div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-6 md:mt-8">
<button className="quick-prompt px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded text-[10px] md:text-xs font-mono text-gray-400 transition-colors">
                "What makes a home recovery-focused?"
              </button>
<button className="quick-prompt px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded text-[10px] md:text-xs font-mono text-gray-400 transition-colors">
                "How do I get certified?"
              </button>
<button className="quick-prompt px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded text-[10px] md:text-xs font-mono text-gray-400 transition-colors">
                "What's the difference between a certified home and treatment?"
              </button>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[#050505]" id="network">
<div className="max-w-[1800px] mx-auto px-4 md:px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter uppercase mb-4 text-white">
                  Certified Provider Network
                </h2>
<p className="text-secondary">Drag to explore RAM’s certified recovery service providers across Montana.</p>
</div>
</div>
<div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">

<div className="snap-center shrink-0 w-[85vw] md:w-[600px] lg:w-[700px] group bg-panel-bg rounded-[2rem] overflow-hidden border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
<div className="aspect-[16/10] overflow-hidden bg-gray-900 relative">
<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 z-10"></div>
<img alt="Housing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 z-20">
<span className="px-3 py-1 bg-accent/20 border border-accent/40 text-accent rounded-full text-[10px] font-mono uppercase tracking-widest backdrop-blur-md">
                       Certified Homes
                     </span>
</div>
</div>
<div className="p-6 md:p-8">
<h3 className="text-2xl md:text-3xl font-semibold mb-3 text-white">
                    Certified Homes
                  </h3>
<p className="text-secondary text-sm md:text-base leading-relaxed mb-6">
                    National standards ensure homes are recovery-focused—aligned with best practices, supportive of residents, and operated with ethics and accountability.
                  </p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 border border-white/10 rounded-full text-[10px] font-mono uppercase text-gray-400">
                      Inspected
                    </span>
<span className="px-2 py-1 border border-white/10 rounded-full text-[10px] font-mono uppercase text-gray-400">
                      Verified
                    </span>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[600px] lg:w-[700px] group bg-panel-bg rounded-[2rem] overflow-hidden border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
<div className="aspect-[16/10] overflow-hidden bg-gray-900 relative">
<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 z-10"></div>
<img alt="Community Center" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 z-20">
<span className="px-3 py-1 bg-green-500/20 border border-green-500/40 text-green-400 rounded-full text-[10px] font-mono uppercase tracking-widest backdrop-blur-md">
                       RCCs
                     </span>
</div>
</div>
<div className="p-6 md:p-8">
<h3 className="text-2xl md:text-3xl font-semibold mb-3 text-white">
                    Recovery Community Centers (RCCs)
                  </h3>
<p className="text-secondary text-sm md:text-base leading-relaxed mb-6">
                    Certification, training, and technical assistance for Montana’s Recovery Community Centers—helping communities make recovery visible and accessible.
                  </p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 border border-white/10 rounded-full text-[10px] font-mono uppercase text-gray-400">
                      Resource Mapping
                    </span>
<span className="px-2 py-1 border border-white/10 rounded-full text-[10px] font-mono uppercase text-gray-400">
                      Support
                    </span>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[600px] lg:w-[700px] group bg-white/5 rounded-[2rem] overflow-hidden border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex items-center justify-center">
<div className="text-center p-12">
<h3 className="text-xl font-semibold mb-2 text-white">Recovery Navigator</h3>
<p className="text-secondary mb-6 text-sm max-w-sm mx-auto">
                    View and search Montana’s certified recovery services in real time—housing, peer support, and community resources in one place.
                  </p>
<a className="inline-block px-6 py-2 bg-white text-black rounded-full font-mono text-xs uppercase tracking-widest hover:bg-accent hover:text-white transition-colors" href="https://directory.behavehealth.com/mtrecoverydirectory" target="_blank">
                    Recovery Navigator
                  </a>
</div>
</div>
</div>
</div>
</section>

<section className="px-4 md:px-6 py-20 md:py-32 bg-[#050505] text-white" id="about">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div className="relative">
<div className="lg:sticky lg:top-32">
<div className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/10 font-mono text-[10px] text-accent uppercase tracking-widest mb-6">
                  Strategic Framework
                </div>
<h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6 leading-none">
                  Building the
                  <br/>
                  Foundation
                </h2>
<p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-lg">
                  Recovery requires more than just willpower; it requires a system. 
                  We are building the infrastructure—from standards to data—that makes long-term recovery possible for everyone in Montana.
                </p>

<div className="mb-12">
<h3 className="font-bold text-2xl mb-6 flex items-center gap-3">
<span className="w-8 h-1 bg-accent"></span>
                    Key Initiatives
                  </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="group p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all duration-300 cursor-pointer h-full">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-blue-900 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<h4 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                        Justice &amp; Recovery
                      </h4>
<p className="text-xs text-gray-400 leading-relaxed">
                        Reducing recidivism by connecting justice-involved individuals directly to certified housing.
                      </p>
</div>
<div className="group p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all duration-300 cursor-pointer h-full">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-green-800 flex items-center justify-center shrink-0 shadow-lg">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
<path d="M3 6h18"></path>
<path d="M16 10a4 4 0 0 1-8 0"></path>
</svg>
</div>
<div>
<h4 className="font-bold text-lg mb-1 group-hover:text-teal-400 transition-colors">
                            Employment
                          </h4>
<p className="text-xs text-gray-400 leading-relaxed">
                            Creating sustainable career paths and recovery-ready workplaces across the state.
                          </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-12 lg:space-y-16 pt-4 lg:pl-16 lg:border-l border-white/10">
<div className="mb-10">
<h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-6">
                  We Build Infrastructure
                </h3>
<p className="text-gray-400 text-lg leading-relaxed">
                  We do not provide clinical treatment. We build the roads, bridges, and utilities 
                  that treatment providers and individuals rely on to navigate the recovery landscape.
                </p>
</div>
<div className="grid grid-cols-1 gap-8">
<div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
<i className="w-6 h-6" data-lucide="check-circle-2"></i>
</div>
<h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                      Proven Models
                    </h4>
</div>
<p className="text-gray-400 leading-relaxed">
                    Our standards are derived from national best practices. We implement frameworks proven to reduce costs and sustain recovery capital.
                  </p>
</div>
<div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
<i className="w-6 h-6" data-lucide="network"></i>
</div>
<h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      Unified Care
                    </h4>
</div>
<p className="text-gray-400 leading-relaxed">
                    We dismantle silos. By connecting the DOC, DPHHS, and local non-profits, we create a seamless system that is easier to navigate.
                  </p>
</div>
<div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
<i className="w-6 h-6" data-lucide="globe-2"></i>
</div>
<h4 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                      Access Everywhere
                    </h4>
</div>
<p className="text-gray-400 leading-relaxed">
                    From urban centers to rural outposts, our certification standards ensure equitable access to quality support across 147,000 square miles.
                  </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[#0A0A0A] border-y border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 mb-8">
<span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
<span className="font-mono text-xs font-bold uppercase tracking-widest">
                    Our Role
                  </span>
</div>
<h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-[1.1] text-white">
                  We Build and Connect
                  <br/>
                  Recovery Systems
                </h2>
<p className="text-xl text-secondary leading-relaxed mb-8">
                  RAM focuses on building recovery-oriented systems so when someone steps toward recovery, there is a certified home, a trained peer, and a supportive community waiting.
                </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium text-gray-300 text-lg">
                      Authorizing Body for State Funding
                    </span>
</li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium text-gray-300 text-lg">
                      Centralized Data &amp; Outcomes
                    </span>
</li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium text-gray-300 text-lg">
                      Unified Quality Standards
                    </span>
</li>
</ul>
<button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white hover:shadow-xl transition-all duration-300 group" onclick="switchView('certified')">
                  Partner With RAM
                  <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<div className="relative">
<div className="aspect-square rounded-full bg-gradient-to-tr from-gray-800 to-gray-900 border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden relative">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-30 grayscale mix-blend-overlay"></div>
<div className="relative z-10 text-center p-10">
<span className="block text-5xl md:text-7xl font-bold tracking-tighter mb-2 text-white">
                      500<span className="text-accent">+</span>
</span>
<span className="font-mono text-sm uppercase tracking-widest text-secondary">
                      Certified Recovery Beds
                    </span>
</div>
</div>
<div className="absolute -bottom-8 -left-8 bg-black p-6 rounded-2xl shadow-xl border border-white/10 max-w-[240px]">
<div className="flex -space-x-3 mb-3">
<div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-black overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&amp;w=100&amp;h=100"/>
</div>
<div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-black overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&amp;w=100&amp;h=100"/>
</div>
<div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-black overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&amp;w=100&amp;h=100"/>
</div>
</div>
<p className="text-xs font-semibold text-gray-300 leading-snug">
                    "RAM standards transformed our housing facility into a safe harbor."
                  </p>
</div>
</div>
</div>
</div>
</section>
</div>


<div className="view-section hidden-view" id="view-certified">
<section className="min-h-[50vh] flex flex-col pt-32 pb-20 md:px-6 relative items-center justify-center bg-black">

<div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.1),transparent_70%)] pointer-events-none"></div>
<div className="text-center max-w-4xl mx-auto px-4 z-10">
<h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8">Get Certified</h1>
<p className="text-xl md:text-2xl text-secondary leading-relaxed max-w-2xl mx-auto mb-10">
                 Certification verifies that recovery homes and recovery community centers are truly recovery-focused—operated with ethics, accountability, and support that helps people sustain recovery.
               </p>
<div className="flex flex-wrap justify-center gap-4">
<button className="px-8 py-4 bg-accent text-white rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent/80 transition-all shadow-lg magnetic-btn">
                   Start Certification
                 </button>
<button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all magnetic-btn">
                   Certification Requirements
                 </button>
</div>
</div>
</section>
<section className="py-20 px-4 md:px-6 max-w-[1400px] mx-auto">
<h2 className="text-3xl font-bold mb-12 text-center text-white">What We Certify</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="p-10 border border-white/10 rounded-2xl bg-panel-bg hover:border-accent/30 transition-all">
<div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent mb-6"><i className="w-6 h-6" data-lucide="home"></i></div>
<h3 className="text-2xl font-bold text-white mb-4">Certified Homes</h3>
<p className="text-gray-400 text-lg">Recovery-focused housing certified to national standards and operated with ethics and accountability.</p>
</div>
<div className="p-10 border border-white/10 rounded-2xl bg-panel-bg hover:border-accent/30 transition-all">
<div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-6"><i className="w-6 h-6" data-lucide="users"></i></div>
<h3 className="text-2xl font-bold text-white mb-4">Recovery Community Centers (RCCs)</h3>
<p className="text-gray-400 text-lg">Certified centers with training and technical assistance to make recovery visible and accessible in communities.</p>
</div>
</div>
</section>
<section className="py-20 bg-[#0A0A0A] border-y border-white/5">
<div className="max-w-[1400px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-8">Why Certification Matters</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-accent shrink-0 mt-1" data-lucide="check-circle"></i>
<span className="text-lg text-gray-300">Builds trust with residents, families, and referral partners</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-accent shrink-0 mt-1" data-lucide="check-circle"></i>
<span className="text-lg text-gray-300">Aligns operations with clear recovery-focused standards</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-accent shrink-0 mt-1" data-lucide="check-circle"></i>
<span className="text-lg text-gray-300">Strengthens community confidence through ethics and accountability</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-accent shrink-0 mt-1" data-lucide="check-circle"></i>
<span className="text-lg text-gray-300">Supports consistency across Montana’s recovery system</span>
</li>
</ul>
</div>
<div className="bg-white/5 p-8 rounded-2xl border border-white/10">
<h3 className="text-xl font-bold text-white mb-4">Support for Providers</h3>
<p className="text-gray-400 text-lg leading-relaxed">
                  RAM provides certification guidance, training, and technical assistance—so providers can meet standards without guesswork.
                </p>
</div>
</div>
</section>
<section className="py-20 px-4 md:px-6 max-w-[1000px] mx-auto">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-16 text-center">The Certification Path</h2>
<div className="space-y-8 relative before:absolute before:left-4 md:before:left-1/2 before:top-0 before:bottom-0 before:w-[1px] before:bg-white/10">
<div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 gap-12 items-center group">
<div className="md:text-right md:pr-12">
<h4 className="text-xl font-bold text-white mb-2">1. Confirm Eligibility</h4>
</div>
<div className="absolute left-0 md:left-1/2 -translate-x-1.5 md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-[#050505]"></div>
<div className="md:pl-12">
<p className="text-gray-400 text-sm">Review prerequisites for your facility type.</p>
</div>
</div>
<div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 gap-12 items-center group">
<div className="md:text-right md:pr-12 md:order-2">
<h4 className="text-xl font-bold text-white mb-2">2. Submit Application</h4>
</div>
<div className="absolute left-0 md:left-1/2 -translate-x-1.5 md:-translate-x-1/2 w-4 h-4 bg-gray-700 rounded-full border-4 border-[#050505] group-hover:bg-accent transition-colors"></div>
<div className="md:pl-12 md:order-1 md:text-right">
<p className="text-gray-400 text-sm">Complete the digital intake form.</p>
</div>
</div>
<div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 gap-12 items-center group">
<div className="md:text-right md:pr-12">
<h4 className="text-xl font-bold text-white mb-2">3. Provide Required Documents</h4>
</div>
<div className="absolute left-0 md:left-1/2 -translate-x-1.5 md:-translate-x-1/2 w-4 h-4 bg-gray-700 rounded-full border-4 border-[#050505] group-hover:bg-accent transition-colors"></div>
<div className="md:pl-12">
<p className="text-gray-400 text-sm">Policies, procedures, and safety records.</p>
</div>
</div>
<div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 gap-12 items-center group">
<div className="md:text-right md:pr-12 md:order-2">
<h4 className="text-xl font-bold text-white mb-2">4. Standards Review</h4>
</div>
<div className="absolute left-0 md:left-1/2 -translate-x-1.5 md:-translate-x-1/2 w-4 h-4 bg-gray-700 rounded-full border-4 border-[#050505] group-hover:bg-accent transition-colors"></div>
<div className="md:pl-12 md:order-1 md:text-right">
<p className="text-gray-400 text-sm">RAM evaluates alignment with national standards.</p>
</div>
</div>
<div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 gap-12 items-center group">
<div className="md:text-right md:pr-12">
<h4 className="text-xl font-bold text-white mb-2">5. Site Review</h4>
</div>
<div className="absolute left-0 md:left-1/2 -translate-x-1.5 md:-translate-x-1/2 w-4 h-4 bg-gray-700 rounded-full border-4 border-[#050505] group-hover:bg-accent transition-colors"></div>
<div className="md:pl-12">
<p className="text-gray-400 text-sm">On-site verification of environment and safety.</p>
</div>
</div>
<div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 gap-12 items-center group">
<div className="md:text-right md:pr-12 md:order-2">
<h4 className="text-xl font-bold text-white mb-2">6. Decision &amp; Certification</h4>
</div>
<div className="absolute left-0 md:left-1/2 -translate-x-1.5 md:-translate-x-1/2 w-4 h-4 bg-gray-700 rounded-full border-4 border-[#050505] group-hover:bg-accent transition-colors"></div>
<div className="md:pl-12 md:order-1 md:text-right">
<p className="text-gray-400 text-sm">Issuance of official certification status.</p>
</div>
</div>
<div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 gap-12 items-center group">
<div className="md:text-right md:pr-12">
<h4 className="text-xl font-bold text-white mb-2">7. Ongoing Quality &amp; Renewal</h4>
</div>
<div className="absolute left-0 md:left-1/2 -translate-x-1.5 md:-translate-x-1/2 w-4 h-4 bg-gray-700 rounded-full border-4 border-[#050505] group-hover:bg-accent transition-colors"></div>
<div className="md:pl-12">
<p className="text-gray-400 text-sm">Annual review and continuous improvement.</p>
</div>
</div>
</div>
</section>
<section className="py-20 text-center">
<h2 className="text-4xl font-bold text-white mb-8">Ready to Get Certified?</h2>
<div className="flex flex-col md:flex-row justify-center gap-6 items-center">
<button className="px-8 py-4 bg-accent text-white rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent/80 transition-all shadow-lg magnetic-btn">
                   Start Certification
               </button>
<a className="px-8 py-4 bg-white text-black rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-all magnetic-btn" href="mailto:connect@recoverymt.org">
                   Contact RAM
               </a>
</div>
<p className="mt-6 text-gray-500 font-mono text-xs">Questions? Email connect@recoverymt.org</p>
</section>
</div>

</main>

<section className="px-4 md:px-6 py-20 md:py-32 bg-[#050505] text-white border-t border-white/10" id="contact">
<div className="max-w-[1400px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
<div className="flex flex-col justify-between">
<div className="mb-16">
<p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-accent mb-6">
                Initialize Partnership
              </p>
<h2 className="text-5xl md:text-8xl font-semibold tracking-tighter uppercase leading-[0.9] mb-8">
                Strengthen
                <br/>
                The Grid.
              </h2>
<p className="text-gray-400 text-lg md:text-xl max-w-md">
                Whether you are a housing provider seeking accreditation or a policymaker needing data, 
                connect with the central office.
              </p>
</div>
<div className="space-y-8">
<a className="inline-flex items-center gap-4 text-2xl md:text-4xl font-light tracking-tight hover:text-accent transition-colors group" href="mailto:connect@recoverymt.org">
<span className="border-b border-white/20 group-hover:border-accent pb-2">
                  connect@recoverymt.org
                </span>
<svg className="group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</a>
<div className="flex gap-4">
<button className="px-6 py-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all font-mono text-xs uppercase tracking-widest" onclick="switchView('certified')">
                  Apply for Certification
                </button>
<a className="px-6 py-3 bg-accent text-white rounded-full hover:bg-accent/80 transition-all font-mono text-xs uppercase tracking-widest" href="https://directory.behavehealth.com/mtrecoverydirectory" target="_blank">
                  Recovery Navigator
                </a>
</div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-2 gap-10 md:gap-x-20 md:gap-y-16 pt-10 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-16">
<div>
<h4 className="font-mono text-xs uppercase text-gray-500 tracking-widest mb-6">
                Protocols
              </h4>
<ul className="space-y-4">
<li className="text-lg md:text-xl text-gray-300 hover:text-white cursor-pointer">
                  Housing (MORT)
                </li>
<li className="text-lg md:text-xl text-gray-300 hover:text-white cursor-pointer">
                  Peer 101 Training
                </li>
<li className="text-lg md:text-xl text-gray-300 hover:text-white cursor-pointer">
                  RCC Development
                </li>
<li className="text-lg md:text-xl text-gray-300 hover:text-white cursor-pointer">
                  Data Submission
                </li>
</ul>
</div>
<div>
<h4 className="font-mono text-xs uppercase text-gray-500 tracking-widest mb-6">
                Organization
              </h4>
<ul className="space-y-4">
<li className="text-lg md:text-xl text-gray-300 hover:text-white cursor-pointer">
                  Board of Directors
                </li>
<li className="text-lg md:text-xl text-gray-300 hover:text-white cursor-pointer">
                  Partners
                  <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full ml-2">
                    DPHHS
                  </span>
</li>
<li className="text-lg md:text-xl text-gray-300 hover:text-white cursor-pointer">
                  Financials
                </li>
<li className="text-lg md:text-xl text-gray-300 hover:text-white cursor-pointer">
                  Bylaws
                </li>
</ul>
</div>
<div>
<h4 className="font-mono text-xs uppercase text-gray-500 tracking-widest mb-6">
                Connect
              </h4>
<ul className="space-y-4">
<li className="text-lg md:text-xl text-gray-300 hover:text-white cursor-pointer">
                  Newsletter
                </li>
<li className="text-lg md:text-xl text-gray-300 hover:text-white cursor-pointer">
                  Events Calendar
                </li>
<li className="text-lg md:text-xl text-gray-300 hover:text-white cursor-pointer">
                  Facebook
                </li>
<li className="text-lg md:text-xl text-gray-300 hover:text-white cursor-pointer">
                  LinkedIn
                </li>
</ul>
</div>
<div>
<h4 className="font-mono text-xs uppercase text-gray-500 tracking-widest mb-6">
                HQ
              </h4>
<address className="not-italic text-lg md:text-xl text-gray-300 space-y-2">
<p>Missoula, MT</p>
<p>United States</p>
<p>(406) 555-1111</p>
</address>
</div>
</div>
</div>
<div className="mt-20 md:mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">
            © 2025 Recovery Access Montana. 501(c)(3).
          </p>
<div className="flex items-center gap-6">
<a className="text-gray-500 hover:text-white text-xs font-mono uppercase" href="https://directory.behavehealth.com/mtrecoverydirectory" target="_blank">Recovery Navigator</a>
<button className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors" onclick="lenis.scrollTo(0)">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m18 15-6-6-6 6"></path>
</svg>
</button>
</div>
</div>
</div>
</section>
<footer className="bg-black py-6 text-center border-t border-white/5">
</footer>


    </>
  );
}
