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



tailwind.config = { theme: { extend: { colors: { primary: '#0f0f0f', secondary: '#555555', accent: '#EB3A14', 'off-white': '#FAFAFA' }, fontFamily: { sans: ['Geist', 'sans-serif'], mono: ['JetBrains Mono', 'monospace'] } } } }



        lucide.createIcons();
      


        function setLifecycleStep(n){document.querySelectorAll(".step-btn").forEach(t=>{const e=t.dataset.step==n;t.classList.toggle("bg-white",e),t.classList.toggle("border-accent/20",e),t.classList.toggle("shadow-sm",e),t.classList.toggle("border-transparent",!e);const c=t.querySelector("span:first-child");c.classList.toggle("bg-accent",e),c.classList.toggle("text-white",e),c.classList.toggle("bg-gray-200",!e),c.classList.toggle("text-gray-500",!e)}),document.querySelectorAll(".step-content").forEach(t=>{const e="step-content-"+n===t.id;t.classList.toggle("opacity-100",e),t.classList.toggle("translate-x-0",e),t.classList.toggle("opacity-0",!e),t.classList.toggle("translate-x-8",!e),t.classList.toggle("pointer-events-none",!e)})}
      


        function toggleAccordion(btn) {
          const item = btn.closest('.accordion-item');
          const isActive = item.classList.contains('active');
          // Close all
          document.querySelectorAll('.accordion-item').forEach(el => el.classList.remove('active'));
          // Toggle current
          if(!isActive) item.classList.add('active');
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
          width: "100%", duration: 1.0, ease: "power2.inOut",
          onUpdate: function() { document.getElementById("loader-text").innerText = Math.round(this.progress() * 100) + "%"; }
      })
      .to("#loader", { yPercent: -100, duration: 0.6, ease: "power4.inOut", delay: 0.1 })
      .to(".hero-fade-in", {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out"
      }, "-=0.5");

      // Scroll Reveals
      document.querySelectorAll("section:not(:first-child)").forEach(section => {
          gsap.from(section.querySelectorAll("h2, h3, p, .accordion-item, li, .prose, .quick-prompt"), {
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
          document.querySelectorAll('a, button').forEach(el => {
              el.addEventListener('mouseenter', () => document.body.classList.add('hover-active'));
              el.addEventListener('mouseleave', () => document.body.classList.remove('hover-active'));
          });
      }

      // Canvas
      const canvas = document.getElementById('hero-canvas');
      const ctx = canvas.getContext('2d');
      let width, height, particles = [];
      function resizeCanvas() { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; }
      window.addEventListener('resize', resizeCanvas); resizeCanvas();
      class Particle {
          constructor() { this.x = Math.random() * width; this.y = Math.random() * height; this.vx = (Math.random() - 0.5) * 0.3; this.vy = (Math.random() - 0.5) * 0.3; this.size = Math.random() * 1.5; }
          update() { this.x += this.vx; this.y += this.vy; if(this.x < 0) this.x = width; if(this.x > width) this.x = 0; if(this.y < 0) this.y = height; if(this.y > height) this.y = 0; }
          draw() { ctx.fillStyle = '#cccccc'; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI*2); ctx.fill(); }
      }
      for(let i=0; i<30; i++) particles.push(new Particle());
      function animateCanvas() {
          ctx.clearRect(0,0,width,height); ctx.strokeStyle = 'rgba(0,0,0,0.04)'; ctx.lineWidth = 1;
          for(let i=0; i<particles.length; i++) {
              for(let j=i; j<particles.length; j++) {
                  const d = Math.sqrt((particles[i].x-particles[j].x)**2 + (particles[i].y-particles[j].y)**2);
                  if(d<100) { ctx.beginPath(); ctx.moveTo(particles[i].x,particles[i].y); ctx.lineTo(particles[j].x,particles[j].y); ctx.stroke(); }
              }
              particles[i].update(); particles[i].draw();
          }
          requestAnimationFrame(animateCanvas);
      }
      animateCanvas();

      // AI Article Context
      const aiInput = document.getElementById('ai-input');
      const termOut = document.getElementById('terminal-output');
      async function handleCommand(cmd) {
          termOut.innerHTML += `<div><span class="text-blue-400">➜</span> <span class="text-gray-300">${cmd}</span></div>`;
          const loadId = 'l-'+Date.now(); termOut.innerHTML += `<div id="${loadId}" class="text-gray-500 italic text-xs">Scanning VijuIT knowledge base...</div>`;
          termOut.scrollTop = termOut.scrollHeight; await new Promise(r => setTimeout(r, 800)); document.getElementById(loadId).remove();

          let resp = "I didn't find that in the context.";
          const lCmd = cmd.toLowerCase();
          if(lCmd.includes('db')||lCmd.includes('database')||lCmd.includes('limit')) resp = "VijuIT implemented a PgBouncer connection pool and HTTP-based queries to reduce connection overhead by 90%.";
          else if(lCmd.includes('action')||lCmd.includes('server')) resp = "Server Actions allowed us to co-locate mutation logic, reducing boilerplate by 30%.";
          else if(lCmd.includes('suspense')||lCmd.includes('stream')) resp = "Suspense boundaries were used to stream heavy data grids while rendering the navigation shell instantly.";
          else if(lCmd.includes('stack')) resp = "Current Stack: Next.js 14, Rust (Turbopack), Redis Cluster, Vercel Edge, Tailwind v4.";

          termOut.innerHTML += `<div class="text-gray-200 border-l-2 border-accent pl-3 py-1 mb-2">${resp}</div>`; termOut.scrollTop = termOut.scrollHeight;
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
          0%
        </div>
<div className="w-32 h-[1px] bg-gray-800 relative overflow-hidden">
<div className="absolute inset-0 bg-accent w-0" id="loader-progress"></div>
</div>
</div>
</div>

<div className="cursor-dot"></div>
<div className="cursor-circle"></div>

<nav className="fixed top-0 left-0 w-full px-4 md:px-6 py-5 flex justify-between items-center z-50 mix-blend-difference text-white pointer-events-none">
<a className="uppercase hover:text-accent transition-colors pointer-events-auto text-sm font-semibold tracking-widest font-mono flex items-center gap-2" href="#">
        VijuIT
        <span className="opacity-50">/Blog</span>
<span className="inline-flex h-2 w-2 rounded-full bg-green-500 ml-2 animate-pulse"></span>
</a>
<div className="flex items-center gap-4 md:gap-10 pointer-events-auto">
<div className="hidden md:flex bg-white/10 border-white/10 border rounded-full pt-2 pr-6 pb-2 pl-6 backdrop-blur-md gap-x-8 gap-y-8">
<a className="font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors" href="#">
            Latest
          </a>
<a className="font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors" href="#">
            Engineering
          </a>
<a className="font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors" href="#">
            Careers
          </a>
</div>
<a className="bg-white text-black px-5 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-colors duration-200 magnetic-btn shadow-lg" href="#subscribe">
          Subscribe
        </a>
</div>
</nav>

<section className="min-h-[90vh] flex flex-col md:px-6 md:pt-0 overflow-hidden pt-20 pr-4 pl-4 relative items-center justify-center">

<canvas className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" id="hero-canvas"></canvas>
<div className="hero-glow animate-pulse-slow"></div>
<div className="flex flex-col text-center w-full max-w-4xl z-10 mr-auto ml-auto relative items-center">

<div className="mb-8 flex items-center gap-4 opacity-0 hero-fade-in">
<span className="px-3 py-1 rounded-full border border-black/10 bg-white/50 backdrop-blur-md font-mono text-[10px] md:text-xs uppercase tracking-widest">
            Case Study
          </span>
<span className="font-mono text-xs text-secondary uppercase tracking-widest">
            Feb 28, 2025 • Core Infrastructure
          </span>
</div>

<h1 className="text-[12vw] md:text-[8vw] leading-[0.9] text-primary uppercase flex flex-col items-center tracking-tighter mix-blend-darken select-none z-20 relative text-balance font-semibold">
          The Architecture
          <span className="text-secondary/30">of Speed</span>
</h1>

<div className="mt-8 md:mt-12 max-w-2xl mx-auto opacity-0 hero-fade-in">
<p className="text-secondary leading-relaxed text-balance text-lg md:text-2xl font-medium tracking-tight">
            How VijuIT rebuilt the core engine to achieve sub-100ms hydration
            times, shifting from complex client-side states to a radical island
            architecture.
          </p>
</div>

<div className="mt-10 flex items-center gap-3 opacity-0 hero-fade-in">
<div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold tracking-tighter text-xs border border-white shadow-sm">
            VI
          </div>
<div className="text-left">
<div className="text-xs font-bold uppercase tracking-widest">
              VijuIT Engineering
            </div>
<div className="text-[10px] font-mono text-secondary">
              Frontend Infrastructure Team
            </div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 hero-fade-in animate-bounce">
<i className="w-5 h-5 text-secondary/50" data-lucide="arrow-down"></i>
</div>
</section>

<div className="py-6 md:py-8 bg-primary text-white overflow-hidden border-y border-white/10 select-none">
<div className="marquee-track font-mono text-xs md:text-sm uppercase tracking-[0.3em]">
<span className="mx-4 md:mx-8">System Status: Operational</span>
<span className="text-green-500">•</span>
<span className="mx-4 md:mx-8">Next.js 14</span>
<span className="text-accent">•</span>
<span className="mx-4 md:mx-8">Rust</span>
<span className="text-accent">•</span>
<span className="mx-4 md:mx-8">Turbopack</span>
<span className="text-accent">•</span>
<span className="mx-4 md:mx-8">Redis Cluster</span>
<span className="text-accent">•</span>
<span className="mx-4 md:mx-8">Vercel Edge</span>
<span className="text-accent">•</span>
<span className="mx-4 md:mx-8">Postgres</span>
<span className="text-accent">•</span>
<span className="mx-4 md:mx-8">Latency: 12ms</span>
<span className="text-green-500">•</span>
</div>
</div>

<section className="py-20 px-4 md:px-6 max-w-[1400px] mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-accent font-mono text-xs uppercase tracking-widest mb-2 block">
          Executive Summary
        </span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-primary">
          Hypothesis vs Reality
        </h2>
<p className="text-secondary mt-4 text-lg">
          A quick overview of our expectations versus the actual production
          metrics.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

<div className="p-8 md:p-14 bg-[#0a0a0a] text-white border border-white/10 rounded-2xl hover:border-accent/50 hover:shadow-[0_0_50px_rgba(235,58,20,0.15)] transition-all duration-500 group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute -right-20 -top-20 w-64 h-64 bg-accent/20 blur-[100px] rounded-full group-hover:bg-accent/30 transition-all duration-500"></div>
<div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300 relative z-10 shadow-lg border border-white/10">
<i className="w-6 h-6" data-lucide="flask-conical"></i>
</div>
<h3 className="text-2xl md:text-3xl tracking-tight mb-4 relative z-10 group-hover:text-accent transition-colors font-semibold">
            The Hypothesis
          </h3>
<div className="space-y-4 text-gray-400 relative z-10 text-lg leading-relaxed group-hover:text-gray-200 transition-colors">
<p>
              VijuIT's platform handles millions of concurrent connections. We
              hypothesized that moving 80% of component logic to the server
              would eliminate "spinner fatigue" and reduce client bundle sizes
              significantly.
            </p>
</div>
</div>

<div className="p-8 md:p-14 bg-[#0a0a0a] text-white border border-white/10 rounded-2xl hover:border-blue-500/50 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] transition-all duration-500 group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full group-hover:bg-blue-500/30 transition-all duration-500"></div>
<div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 relative z-10 shadow-lg border border-white/10">
<i className="w-6 h-6" data-lucide="cpu"></i>
</div>
<h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 relative z-10 group-hover:text-blue-400 transition-colors">
            The Reality
          </h3>
<div className="space-y-4 text-gray-400 relative z-10 text-lg leading-relaxed group-hover:text-gray-200 transition-colors">
<p>
              The transition wasn't just faster; it was transformative for our
              enterprise clients. First Contentful Paint dropped by 45%, though
              we had to engineer custom connection pooling to handle the
              edge-to-database bottleneck.
            </p>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-24 px-4 md:px-6 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 relative" id="main-content">

<aside className="hidden lg:block w-48 shrink-0 relative">
<div className="sticky top-32">
<div className="mb-10">
<span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-4 block">
              Contents
            </span>
<ul className="space-y-3 text-sm font-medium text-secondary">
<li>
<a className="hover:text-accent transition-colors block text-primary" href="#context" onclick="lenis.scrollTo('#context')">
                  01. The Context
                </a>
</li>
<li>
<a className="hover:text-accent transition-colors block" href="#bottleneck" onclick="lenis.scrollTo('#bottleneck')">
                  02. The Bottleneck
                </a>
</li>
<li>
<a className="hover:text-accent transition-colors block" href="#solution" onclick="lenis.scrollTo('#solution')">
                  03. The Solution
                </a>
</li>
</ul>
</div>
<div>
<span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-4 block">
              Share
            </span>
<div className="flex gap-4 text-secondary">
<button className="hover:text-accent transition-colors">
<i className="w-4 h-4" data-lucide="twitter"></i>
</button>
<button className="hover:text-accent transition-colors">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</button>
</div>
</div>
</div>
</aside>

<article className="max-w-3xl w-full">
<p className="text-xl md:text-2xl font-medium leading-relaxed text-primary mb-12 text-balance">
          When we started rebuilding the VijuIT core engine, we knew that
          traditional SPAs (Single Page Applications) were hitting a ceiling.
          The "loading spinner" had become a symbol of bloated JavaScript
          bundles, and our enterprise metrics demanded a change.
        </p>
<div className="space-y-6 text-lg text-secondary leading-relaxed">
<h2 className="text-3xl font-semibold tracking-tight text-primary mt-16 mb-6" id="context">
            01. The Context
          </h2>
<p>
            In the early days of VijuIT, client-side rendering was the gold
            standard. We pushed everything to the browser—routing, data
            fetching, state management. It worked well for small dashboards, but
            as our enterprise clients scaled to gigabytes of data, the browser
            main thread started to choke.
          </p>
<p>
            We observed
            <strong>Total Blocking Time (TBT)</strong>
            spikes of over 400ms on mid-range devices. This wasn't just a
            technical metric; it was a UX failure. Users were staring at blank
            screens while megabytes of JSON were parsed.
          </p>
<blockquote className="my-12 pl-6 border-l-2 border-accent not-italic">
<p className="text-xl font-medium text-primary">
              "The fastest network request is the one you never make. We
              realized we were treating the browser as a database, and it was
              time to stop."
            </p>
</blockquote>
<h2 className="text-3xl font-semibold tracking-tight text-primary mt-16 mb-6" id="bottleneck">
            02. The Bottleneck
          </h2>
<p>
            Our profiling revealed two main culprits:
            <strong>Waterfall requests</strong>
            and
            <strong>Hydration mismatch</strong>
            . Components would mount, fetch data, render children, which would
            then fetch more data. This sequential chain created a sluggish
            experience even on fast networks.
          </p>
<div className="my-8 bg-white border border-black/5 rounded-xl p-6 shadow-sm">
<div className="flex items-center gap-4 mb-4 border-b border-black/5 pb-4">
<i className="text-accent w-5 h-5" data-lucide="alert-triangle"></i>
<span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
                Legacy Performance Audit
              </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
<div>
<div className="text-gray-400 mb-1">Bundle Size</div>
<div className="text-lg font-bold text-primary">
                  450KB
                  <span className="text-red-500 text-[10px]">(+120%)</span>
</div>
</div>
<div>
<div className="text-gray-400 mb-1">Round Trips</div>
<div className="text-lg font-bold text-primary">6 Serial</div>
</div>
<div>
<div className="text-gray-400 mb-1">Memory</div>
<div className="text-lg font-bold text-primary">~300MB</div>
</div>
</div>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-primary mt-16 mb-6" id="solution">
            03. The Solution
          </h2>
<p>
            We decided to invert control. Instead of the client asking for data,
            the server sends the HTML
            <em>with</em>
            the data already baked in. We adopted React Server Components (RSC)
            to keep heavy dependencies on the server.
          </p>
<p>
            This wasn't a drop-in replacement. We had to rethink our
            authentication flow and how we handled real-time updates. We
            utilized
            <code className="font-mono text-sm bg-black/5 px-1 py-0.5 rounded text-primary">
              WebSockets
            </code>
            for live data, keeping the initial payload purely static HTML.
          </p>
</div>
</article>

</section>
<section className="py-20 md:py-32 bg-[#F5F5F5] border-t border-black/5" id="details">
<div className="max-w-[1400px] mx-auto px-4 md:px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter uppercase mb-6">
            Implementation Breakdown
          </h2>
<p className="text-secondary max-w-2xl mx-auto text-lg">
            A step-by-step look at how the VijuIT team executed the migration,
            from the database layer up to the final pixel polish.
          </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-4 flex flex-col gap-2">
<button className="step-btn active group flex items-center gap-4 p-4 rounded-lg bg-white border border-accent/20 shadow-sm transition-all" data-step="1" onclick="setLifecycleStep(1)">
<span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-mono text-xs font-bold">
                01
              </span>
<span className="text-left font-semibold tracking-tight group-hover:text-accent transition-colors">
                Database Proxying
              </span>
</button>
<button className="step-btn group flex items-center gap-4 p-4 rounded-lg border border-transparent hover:bg-white hover:border-black/5 transition-all" data-step="2" onclick="setLifecycleStep(2)">
<span className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-mono text-xs font-bold group-hover:bg-accent group-hover:text-white transition-colors">
                02
              </span>
<span className="text-left font-semibold tracking-tight text-secondary group-hover:text-primary transition-colors">
                Server Actions
              </span>
</button>
<button className="step-btn group flex items-center gap-4 p-4 rounded-lg border border-transparent hover:bg-white hover:border-black/5 transition-all" data-step="3" onclick="setLifecycleStep(3)">
<span className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-mono text-xs font-bold group-hover:bg-accent group-hover:text-white transition-colors">
                03
              </span>
<span className="text-left font-semibold tracking-tight text-secondary group-hover:text-primary transition-colors">
                Suspense Boundaries
              </span>
</button>
</div>

<div className="lg:col-span-8 bg-white border border-black/5 rounded-2xl p-8 md:p-12 min-h-[400px] relative overflow-hidden">

<div className="step-content absolute inset-0 p-8 md:p-12 transition-all duration-500 opacity-100 translate-x-0" id="step-content-1">
<div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="database"></i>
</div>
<h3 className="text-3xl font-bold mb-4">
                Solving the Connection Limit
              </h3>
<article className="prose prose-lg text-secondary">
<p>
                  Serverless functions are stateless, meaning every request
                  opens a new database connection. We quickly hit the max
                  connection limit of Postgres. To solve this, we implemented a
                  connection pooler (PgBouncer) and utilized HTTP-based queries
                  for lighter read operations.
                </p>
<div className="bg-gray-100 p-4 rounded-lg font-mono text-xs text-gray-700 my-4 border border-black/5">
                  // config/database.ts
                  <br/>
                  const pool = new Pool({
                  <br/>
                    connectionString: process.env.DATABASE_URL,
                  <br/>
                    max: 20, // Limit active connections
                  <br/>
                    idleTimeoutMillis: 30000
                  <br/>
                  });
                </div>
</article>
</div>

<div className="step-content absolute inset-0 p-8 md:p-12 transition-all duration-500 opacity-0 translate-x-8 pointer-events-none" id="step-content-2">
<div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="server"></i>
</div>
<h3 className="text-3xl font-bold mb-4">
                Mutations via Server Actions
              </h3>
<article className="prose prose-lg text-secondary">
<p>
                  Instead of creating API endpoints for every form submission,
                  we moved to React Server Actions. This allowed us to co-locate
                  the mutation logic with the UI component.
                </p>
<p>
                  The result was a drastic reduction in boilerplate code. No
                  more `useEffect` for data fetching or manual state management
                  for simple CRUD operations.
                </p>
</article>
</div>

<div className="step-content absolute inset-0 p-8 md:p-12 transition-all duration-500 opacity-0 translate-x-8 pointer-events-none" id="step-content-3">
<div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="layout"></i>
</div>
<h3 className="text-3xl font-bold mb-4">Strategic Streaming</h3>
<article className="prose prose-lg text-secondary">
<p>
                  We wrapped critical UI parts in Suspense boundaries. The
                  navigation and shell load instantly (static), while the heavy
                  data grids stream in parallel.
                </p>
<p>
                  This creates the perception of instant loading. The user can
                  interact with the menu while the dashboard data is still being
                  fetched from the database.
                </p>
</article>
</div>
</div>
</div>
</div>

</section>

<section className="py-20 md:py-32 bg-white">
<div className="max-w-[1000px] mx-auto px-4 md:px-6">
<div className="mb-16">
<div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest mb-4">
<i className="w-4 h-4" data-lucide="layers"></i>
            System Design
          </div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter uppercase mb-4">
            Under the Hood
          </h2>
<p className="text-secondary max-w-xl">
            A technical deep dive into the specific components and protocols
            that power the VijuIT platform. Click to expand.
          </p>
</div>
<div className="border-t border-black/5">

<div className="accordion-item group border-b border-black/5">
<button className="w-full py-8 flex justify-between items-center text-left hover:bg-gray-50/50 transition-colors px-2" onclick="toggleAccordion(this)">
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
<span className="font-mono text-xs text-gray-400 w-8">01</span>
<span className="text-xl md:text-2xl font-semibold tracking-tight text-primary">
                  Server Components &amp; Hydration
                </span>
</div>
<div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-gray-400 accordion-icon">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>
</button>
<div className="accordion-content">
<div className="pb-8 px-2 md:pl-16 grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="text-secondary leading-relaxed">
<p className="mb-4">
                    We bypass the traditional API layer. By importing backend
                    logic directly into React components, we eliminate network
                    waterfalls and serialization overhead.
                  </p>
<p className="text-sm">
                    This reduces the Time to Interactive (TTI) by serving
                    non-interactive HTML immediately while hydrating interactive
                    islands (buttons, forms) in the background.
                  </p>
</div>
<div className="bg-[#111] rounded-xl p-6 border border-white/10 font-mono text-[10px] md:text-xs text-gray-300 shadow-2xl overflow-x-auto">
<pre><span className="text-purple-400">async</span> <span className="text-blue-400">function</span> <span className="text-yellow-300">Dashboard</span>() {
  <span className="text-gray-500">// Direct DB access in component</span>
  <span className="text-purple-400">const</span> data = <span className="text-purple-400">await</span> db.<span className="text-blue-300">query</span>(
    <span className="text-green-400">'SELECT * FROM analytics LIMIT 100'</span>
  );

  <span className="text-purple-400">return</span> (
    &lt;<span className="text-red-400">Suspense</span> fallback={&lt;<span className="text-red-400">Skeleton</span> /&gt;}&gt;
      &lt;<span className="text-red-400">Chart</span> data={data} /&gt;
    &lt;/<span className="text-red-400">Suspense</span>&gt;
  );
}</pre>
</div>
</div>
</div>
</div>

<div className="accordion-item group border-b border-black/5">
<button className="w-full py-8 flex justify-between items-center text-left hover:bg-gray-50/50 transition-colors px-2" onclick="toggleAccordion(this)">
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
<span className="font-mono text-xs text-gray-400 w-8">02</span>
<span className="text-xl md:text-2xl font-semibold tracking-tight text-primary">
                  Edge Caching Strategy
                </span>
</div>
<div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-gray-400 accordion-icon">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>
</button>
<div className="accordion-content">
<div className="pb-8 px-2 md:pl-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<div className="text-secondary leading-relaxed">
<p className="mb-4">
                    We utilize a `stale-while-revalidate` strategy deployed to
                    global edge nodes. Static content is cached at the edge,
                    while dynamic data is fetched asynchronously.
                  </p>
<ul className="list-disc pl-4 space-y-2 text-sm text-gray-500 mt-4">
<li>TTL (Time to Live): 60 seconds for dashboard data.</li>
<li>
                      SWR: Serves stale data instantly, updates in background.
                    </li>
<li>
                      Geo-routing: Requests hit the nearest Vercel Edge region.
                    </li>
</ul>
</div>

<div className="bg-off-white border border-black/5 rounded-xl p-6 flex flex-col items-center justify-center gap-4 py-10 select-none">
<div className="flex items-center gap-2">
<div className="w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">
                      USER
                    </div>
<div className="w-8 h-[2px] bg-gray-300 relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-gray-300 rounded-full"></div>
</div>
<div className="w-16 h-16 rounded-full bg-accent text-white flex flex-col items-center justify-center text-[10px] font-bold shadow-lg shadow-accent/20 z-10">
                      EDGE
                      <span className="font-normal opacity-70">Cache</span>
</div>
<div className="w-8 h-[2px] bg-gray-300 relative"></div>
<div className="w-12 h-12 rounded-lg bg-black text-white flex items-center justify-center text-xs font-bold">
                      ORIGIN
                    </div>
</div>
<div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mt-2">
                    Request Flow
                  </div>
</div>
</div>
</div>
</div>

<div className="accordion-item group border-b border-black/5">
<button className="w-full py-8 flex justify-between items-center text-left hover:bg-gray-50/50 transition-colors px-2" onclick="toggleAccordion(this)">
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
<span className="font-mono text-xs text-gray-400 w-8">03</span>
<span className="text-xl md:text-2xl font-semibold tracking-tight text-primary">
                  OpenTelemetry Tracing
                </span>
</div>
<div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-gray-400 accordion-icon">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>
</button>
<div className="accordion-content">
<div className="pb-8 px-2 md:pl-16 grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="text-secondary leading-relaxed">
<p className="mb-4">
                    Visibility is key for an IT firm. We instrumented the entire
                    stack with OpenTelemetry. Every database query, external API
                    call, and render pass is traced.
                  </p>
<p className="text-sm">
                    This allows our DevOps team to identify bottlenecks in
                    specific regions or specific query patterns instantly.
                  </p>
</div>
<div className="bg-[#111] rounded-xl p-4 border border-white/10 font-mono text-[10px] text-gray-300 shadow-2xl flex flex-col gap-2">
<div className="flex justify-between border-b border-white/10 pb-2">
<span>trace_id: 8a3c...</span>
<span className="text-green-400">200 OK</span>
</div>
<div className="pl-0 text-blue-300">GET /api/v1/projects</div>
<div className="pl-4 text-gray-500">
                    └─ middleware
                    <span className="text-gray-600">2ms</span>
</div>
<div className="pl-4 text-gray-500">
                    └─ db.query
                    <span className="text-accent">45ms</span>
</div>
<div className="pl-8 text-gray-600">└─ SELECT id, name...</div>
<div className="pl-4 text-gray-500">
                    └─ render
                    <span className="text-gray-600">12ms</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="bg-[#050505] text-gray-300 py-20 md:py-32 px-4 md:px-6 relative overflow-hidden" id="ai">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20"></div>
<div className="max-w-[1000px] mx-auto relative z-10">
<div className="text-center mb-10 md:mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
<span className="font-mono text-[10px] uppercase tracking-widest text-white">
              VijuIT Assistant
            </span>
</div>
<h2 className="text-3xl md:text-6xl font-semibold tracking-tighter text-white mb-4">
            Ask about our stack
          </h2>
<p className="text-gray-400 max-w-md mx-auto font-light text-sm md:text-lg">
            Interact with our documentation bot to learn more about the VijuIT
            engineering standards and benchmarks.
          </p>
</div>
<div className="w-full bg-[#0F0F0F] border border-white/10 rounded-lg shadow-2xl overflow-hidden flex flex-col">
<div className="bg-[#151515] px-4 py-3 flex items-center gap-4 border-b border-white/5 shrink-0">
<div className="flex gap-1.5 md:gap-2">
<div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="flex-1 text-center font-mono text-[10px] md:text-xs text-gray-500">
              vijuit-bot — context: engineering-blog — 80x24
            </div>
</div>
<div className="p-4 md:p-6 font-mono text-xs md:text-base h-[300px] md:h-[350px] flex flex-col bg-black/50 backdrop-blur-sm">
<div className="space-y-3 md:space-y-4 mb-2 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent" id="terminal-output">
<div className="text-green-400/90">
<span className="text-accent">➜</span>
                ~ Context loaded. VijuIT Engineering Standards v4.2.
              </div>
</div>
<div className="flex items-center gap-2 md:gap-3 pt-3 border-t border-white/10 shrink-0">
<span className="text-accent">➜</span>
<span className="text-blue-400">~</span>
<input autocomplete="off" className="bg-transparent border-none outline-none text-white w-full placeholder-gray-700 focus:placeholder-gray-600" id="ai-input" placeholder="Ask about the tech stack..." type="text"/>
</div>
</div>
</div>
<div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-6 md:mt-8">
<button className="quick-prompt px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded text-[10px] md:text-xs font-mono text-gray-400 transition-colors">
            "Explain the DB issue"
          </button>
<button className="quick-prompt px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded text-[10px] md:text-xs font-mono text-gray-400 transition-colors">
            "What are Server Actions?"
          </button>
</div>
</div>
</section>

<section className="px-4 md:px-6 py-20 md:py-32 bg-[#050505] text-white" id="benchmarks">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div className="relative">
<div className="lg:sticky lg:top-32">
<div className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/10 font-mono text-[10px] text-accent uppercase tracking-widest mb-6">
              The Results
            </div>
<h2 className="text-4xl md:text-6xl tracking-tighter uppercase mb-6 leading-none font-semibold">
              Performance
              <br/>
              Metrics
            </h2>
<p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-lg">
              The shift to server-side rendering wasn't just about developer
              experience. The metrics proved that moving logic closer to the
              data source drastically improves end-user perception of speed.
            </p>
<div className="border-t border-white/10 pt-8">
<h4 className="font-bold text-white mb-4">VijuIT Benchmark Report</h4>
<ul className="space-y-4 text-gray-400">
<li className="flex items-center gap-3">
<i className="text-accent w-4 h-4" data-lucide="check"></i>
                  Server Actions reduced client bundles by 30%.
                </li>
<li className="flex items-center gap-3">
<i className="text-accent w-4 h-4" data-lucide="check"></i>
                  Postgres Connection pooling prevented timeout errors.
                </li>
<li className="flex items-center gap-3">
<i className="text-accent w-4 h-4" data-lucide="check"></i>
                  Core Web Vitals moved to all green.
                </li>
</ul>
</div>
</div>
</div>

<div className="space-y-8 pt-4 lg:pl-16 lg:border-l border-white/10">

<div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
<div className="flex justify-between items-end mb-4">
<span className="text-gray-400 font-mono text-xs uppercase">
                First Input Delay (FID)
              </span>
<span className="text-green-400 font-bold">-80%</span>
</div>
<div className="h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
<div className="h-full bg-green-500 w-[20%]"></div>
</div>
<div className="flex justify-between text-xs text-gray-500 font-mono">
<span>New Stack: 12ms</span>
<span>Old Stack: 110ms</span>
</div>
</div>

<div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
<div className="flex justify-between items-end mb-4">
<span className="text-gray-400 font-mono text-xs uppercase">
                Largest Contentful Paint
              </span>
<span className="text-green-400 font-bold">1.2s</span>
</div>
<div className="h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
<div className="h-full bg-blue-500 w-[60%]"></div>
</div>
<p className="text-sm text-gray-400">
              Achieved by streaming critical CSS and structural HTML before data
              is ready.
            </p>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
<div className="text-4xl font-bold text-white mb-2">
                99.9
                <span className="text-sm text-gray-500">%</span>
</div>
<div className="text-xs font-mono text-gray-400 uppercase">
                SLA Uptime
              </div>
</div>
<div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
<div className="text-4xl font-bold text-white mb-2">
                0.4
                <span className="text-sm text-gray-500">s</span>
</div>
<div className="text-xs font-mono text-gray-400 uppercase">TTFB</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[#FAFAFA] border-y border-black/5 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50 pointer-events-none"></div>
<div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 mb-8">
<span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
<span className="font-mono text-xs font-bold uppercase tracking-widest">
                The Verdict
              </span>
</div>
<h2 className="text-4xl md:text-5xl tracking-tighter mb-6 leading-[1.1] font-semibold">
              Complexity is the price of performance.
            </h2>
<p className="text-lg text-secondary leading-relaxed mb-8">
              Moving to this new architecture wasn't easy. It required a mental
              shift from "client-first" to "server-first." However, for our
              enterprise clients where milliseconds translate to revenue, this
              complexity is an investment that pays dividends.
            </p>
<p className="text-lg text-secondary leading-relaxed mb-8">
              If you are interested in how VijuIT builds scalable systems,
              explore our open source contributions or contact our solutions
              team.
            </p>
</div>
<div className="relative flex justify-center">

<div className="bg-white p-8 rounded-2xl shadow-xl border border-black/5 max-w-md rotate-2 hover:rotate-0 transition-transform duration-300">
<i className="text-accent w-8 h-8 mb-4" data-lucide="quote"></i>
<h3 className="text-xl font-bold text-primary mb-4">
                "The future of the web is hybrid. We are finally blurring the
                line between the backend and the frontend to deliver native-like
                experiences."
              </h3>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-xs">
                  VI
                </div>
<div>
<div className="text-sm font-bold">VijuIT Engineering</div>
<div className="text-xs text-gray-500">
                    Core Infrastructure Team
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-4 md:px-6 py-20 bg-[#050505] text-white border-t border-white/10" id="subscribe">
<div className="max-w-[1400px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-bold tracking-tight mb-4">
              Stay in the loop
            </h2>
<p className="text-gray-400 mb-8">
              Receive the latest engineering insights from VijuIT. No spam, just
              code.
            </p>
<form className="flex gap-4 max-w-md">
<input className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 w-full text-white focus:outline-none focus:border-accent transition-colors" placeholder="email@address.com" type="email"/>
<button className="bg-accent text-white px-6 py-3 rounded-lg font-bold hover:bg-accent/80 transition-colors">
                Join
              </button>
</form>
</div>
<div className="grid grid-cols-2 gap-8">
<div>
<h4 className="font-mono text-xs uppercase text-gray-500 tracking-widest mb-6">
                Explore
              </h4>
<ul className="space-y-3 text-sm text-gray-300">
<li><a className="hover:text-white" href="#">Engineering</a></li>
<li><a className="hover:text-white" href="#">Design</a></li>
<li><a className="hover:text-white" href="#">Case Studies</a></li>
<li><a className="hover:text-white" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-xs uppercase text-gray-500 tracking-widest mb-6">
                Connect
              </h4>
<ul className="space-y-3 text-sm text-gray-300">
<li><a className="hover:text-white" href="#">Twitter / X</a></li>
<li><a className="hover:text-white" href="#">GitHub</a></li>
<li><a className="hover:text-white" href="#">LinkedIn</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-20 pt-8 border-t border-white/10 flex justify-between items-center">
<p className="text-gray-600 text-xs">
            © 2025 VijuIT. All rights reserved.
          </p>
<button className="text-gray-400 hover:text-white text-sm" onclick="lenis.scrollTo(0)">
            Back to Top
          </button>
</div>
</div>
</section>


    </>
  );
}
