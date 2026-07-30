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
      
    // Initialize icons
    lucide.createIcons({ attrs: { "stroke-width": 1.5 } });

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Scroll Reveal
    const revealNodes = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('opacity-100','translate-y-0');
          e.target.classList.remove('opacity-0','translate-y-6');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealNodes.forEach((el, idx) => {
      el.classList.add('opacity-0','translate-y-6','transition','duration-700','ease-out');
      el.style.transitionDelay = `${Math.min(idx * 80, 400)}ms`;
      io.observe(el);
    });

    // Background Canvas: particle grid flow with parallax
    const bg = document.getElementById('bg-canvas');
    const bctx = bg.getContext('2d');
    let bw, bh, time = 0, mouse = { x: 0, y: 0 };
    function resizeBG() { bw = bg.width = window.innerWidth * devicePixelRatio; bh = bg.height = window.innerHeight * devicePixelRatio; bctx.scale(devicePixelRatio, devicePixelRatio); }
    resizeBG();
    window.addEventListener('resize', resizeBG);
    window.addEventListener('mousemove', (e)=> { mouse.x = e.clientX; mouse.y = e.clientY; });

    function drawBG() {
      const w = window.innerWidth, h = window.innerHeight;
      bctx.clearRect(0,0,w,h);
      const cols = Math.ceil(w / 60), rows = Math.ceil(h / 60);
      const t = time * 0.002;
      const parX = (mouse.x / w - 0.5) * 8;
      const parY = (mouse.y / h - 0.5) * 8;

      bctx.lineWidth = 1;
      for (let y=0; y<=rows; y++) {
        for (let x=0; x<=cols; x++) {
          const px = x * 60 + Math.sin(t + x*0.3 + y*0.2) * 6 + parX;
          const py = y * 60 + Math.cos(t + x*0.25 + y*0.35) * 6 + parY;
          const nx = px + Math.sin(t + x)*2;
          const ny = py + Math.cos(t + y)*2;

          // Point
          bctx.fillStyle = 'rgba(255,255,255,0.08)';
          bctx.fillRect(px, py, 1.2, 1.2);

          // Line to flow
          bctx.strokeStyle = 'rgba(255,255,255,0.05)';
          bctx.beginPath();
          bctx.moveTo(px, py);
          bctx.lineTo(nx, ny);
          bctx.stroke();

          // Occasional neon link
          if ((x+y) % 7 === 0) {
            bctx.strokeStyle = 'rgba(255,255,255,0.06)';
            bctx.beginPath();
            bctx.moveTo(px, py);
            bctx.lineTo(px + Math.cos(t + y)*14, py + Math.sin(t + x)*14);
            bctx.stroke();
          }
        }
      }
      time++;
      requestAnimationFrame(drawBG);
    }
    drawBG();

    // Hero Visual Canvas (subtle graph paths)
    const heroCanvas = document.getElementById('hero-canvas');
    const hctx = heroCanvas.getContext('2d');
    function sizeHero() {
      const rect = heroCanvas.getBoundingClientRect();
      heroCanvas.width = rect.width * devicePixelRatio;
      heroCanvas.height = rect.height * devicePixelRatio;
      hctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);
    }
    sizeHero();
    window.addEventListener('resize', sizeHero);

    let t2 = 0;
    function drawHero() {
      const rect = heroCanvas.getBoundingClientRect();
      const w = rect.width, h = rect.height;
      hctx.clearRect(0,0,w,h);

      const cx = w/2 + (mouse.x - window.innerWidth/2)*0.02;
      const cy = h/2 + (mouse.y - window.innerHeight/2)*0.02;

      // Nodes
      const nodes = [];
      const count = 18;
      for (let i=0;i<count;i++){
        const r = 110 + 40*Math.sin(t2*0.02 + i);
        const a = (Math.PI*2/count)*i + t2*0.002;
        nodes.push({ x: cx + Math.cos(a)*r, y: cy + Math.sin(a)*r });
      }

      // Connections
      hctx.lineWidth = 1;
      for (let i=0;i<count;i++){
        const p = nodes[i];
        for (let j=i+1;j<count;j++){
          if ((j-i) % 5 === 0) {
            const q = nodes[j];
            hctx.strokeStyle = 'rgba(255,255,255,0.10)';
            hctx.beginPath();
            hctx.moveTo(p.x, p.y);
            hctx.lineTo(q.x, q.y);
            hctx.stroke();
          }
        }
      }

      // Node dots
      nodes.forEach((p, idx) => {
        hctx.fillStyle = idx%3===0 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.6)';
        hctx.beginPath();
        hctx.arc(p.x, p.y, idx%3===0 ? 2.2 : 1.4, 0, Math.PI*2);
        hctx.fill();
      });

      t2++;
      requestAnimationFrame(drawHero);
    }
    drawHero();

    // Cursor Trail
    const cursorLayer = document.getElementById('cursor-layer');
    const trailCount = 16;
    const dots = [];
    for (let i=0; i<trailCount; i++) {
      const dot = document.createElement('div');
      dot.className = 'absolute rounded-full pointer-events-none';
      dot.style.width = dot.style.height = `${Math.max(2, 10 - i*0.5)}px`;
      dot.style.background = 'rgba(255,255,255,0.9)';
      dot.style.filter = `blur(${Math.max(0, 6 - i*0.3)}px)`;
      dot.style.opacity = `${Math.max(0.15, 1 - i*0.08)}`;
      cursorLayer.appendChild(dot);
      dots.push({ el: dot, x: window.innerWidth/2, y: window.innerHeight/2 });
    }
    let mx = window.innerWidth/2, my = window.innerHeight/2;
    window.addEventListener('mousemove', (e)=>{ mx = e.clientX; my = e.clientY; });
    function animateCursor() {
      let prevX = mx, prevY = my;
      dots.forEach((d, i) => {
        d.x += (prevX - d.x) * (0.25 - i*0.01);
        d.y += (prevY - d.y) * (0.25 - i*0.01);
        d.el.style.transform = `translate(${d.x}px, ${d.y}px) translate(-50%, -50%)`;
        prevX = d.x; prevY = d.y;
      });
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Testimonials Slider
    const slides = Array.from(document.querySelectorAll('.testimonial-slide'));
    const dotsNav = Array.from(document.querySelectorAll('.dot'));
    let current = 0, sliderTimer;

    function goTo(index) {
      slides.forEach((s, i) => {
        if (i === index) {
          s.style.position = 'relative';
          s.classList.remove('opacity-0','-translate-x-6','translate-x-6');
          s.classList.add('opacity-100','translate-x-0');
        } else {
          s.style.position = 'absolute';
          s.classList.remove('opacity-100','translate-x-0');
          s.classList.add('opacity-0', i < index ? '-translate-x-6' : 'translate-x-6');
        }
      });
      dotsNav.forEach((d, i) => {
        if (i === index) { d.className = 'dot h-1.5 w-6 rounded-full bg-white/80 transition-all duration-300 shadow-[0_0_0_0px_rgba(255,255,255,0.3)] hover:shadow-[0_0_0_4px_rgba(255,255,255,0.12)]'; }
        else { d.className = 'dot h-1.5 w-1.5 rounded-full bg-white/30 transition-all duration-300 shadow-[0_0_0_0px_rgba(255,255,255,0.3)] hover:shadow-[0_0_0_4px_rgba(255,255,255,0.12)]'; }
      });
      current = index;
      resetTimer();
    }

    function next() { goTo((current + 1) % slides.length); }
    function prev() { goTo((current - 1 + slides.length) % slides.length); }
    function resetTimer() {
      clearInterval(sliderTimer);
      sliderTimer = setInterval(next, 5000);
    }

    document.getElementById('nextTestimonial')?.addEventListener('click', next);
    document.getElementById('prevTestimonial')?.addEventListener('click', prev);
    dotsNav.forEach((d) => d.addEventListener('click', () => goTo(+d.dataset.index)));
    goTo(0);

    // Parallax on testimonial container
    const caseSection = document.getElementById('cases');
    window.addEventListener('scroll', () => {
      const r = caseSection.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (window.innerHeight - r.top) / (window.innerHeight + r.height)));
      slides.forEach((s, i) => {
        s.style.transform += ` translateY(${(i - current) * 2}px)`;
      });
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
      

<canvas className="fixed inset-0 -z-20" id="bg-canvas"></canvas>

<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)] opacity-50"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_60%)] mix-blend-screen"></div>
</div>

<div className="pointer-events-none fixed inset-0 -z-0" id="cursor-layer"></div>

<header className="fixed top-0 left-0 right-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/20">
<div className="max-w-4xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-center h-16">

<div className="flex items-center gap-8">

<a className="flex items-center gap-2 group" href="#">
<div className="h-5 w-5 grid place-items-center rounded bg-white text-black text-xs font-semibold tracking-tight">NX</div>
<span className="text-sm font-medium tracking-tight group-hover:opacity-80 transition-opacity">Nexis</span>
</a>

<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="text-white/60 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-white/60 hover:text-white transition-colors" href="#cases">Cases</a>
<a className="text-white/60 hover:text-white transition-colors" href="#pricing">Pricing</a>
</nav>

<a className="inline-flex items-center gap-2 rounded-md bg-white text-black text-sm font-medium px-3 py-1.5 transition-all duration-300 shadow-[0_0_0_0px_rgba(255,255,255,0.3)] hover:shadow-[0_0_0_8px_rgba(255,255,255,0.15)] hover:scale-[1.02]" href="#cta">
            Get demo
          </a>
</div>
</div>
</div>
</header>

<section className="relative min-h-screen flex items-center pt-24 md:pt-32">

<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute -top-24 -left-24 h-[40rem] w-[40rem] rounded-full bg-white/5 blur-3xl opacity-20 animate-pulse"></div>
<div className="absolute -bottom-24 -right-32 h-[50rem] w-[50rem] rounded-full bg-white/5 blur-3xl opacity-10 animate-pulse"></div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

<div className="lg:col-span-7 space-y-6" data-reveal="">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
<i className="w-3.5 h-3.5" data-lucide="cpu"></i>
            Enterprise workflow engine
          </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
            Orchestrate your team's work with precision.
          </h1>
<p className="text-base md:text-lg text-white/70 max-w-2xl">
            Nexis unifies planning, automation, and analytics so B2B teams can scale operations, cut cycle time, and ship with absolute clarity.
          </p>
<div className="flex flex-col sm:flex-row gap-3 pt-2">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-black text-sm font-medium px-5 py-3 transition-all duration-300 shadow-[0_0_0_0px_rgba(255,255,255,0.3)] hover:shadow-[0_0_0_12px_rgba(255,255,255,0.18)] hover:scale-[1.02]" href="#cta">
<i className="w-4 h-4" data-lucide="arrow-right"></i> Request enterprise demo
            </a>
<a className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-all duration-300 shadow-[0_0_0_0px_rgba(255,255,255,0.2)] hover:shadow-[0_0_0_6px_rgba(255,255,255,0.08)]" href="#features">
<i className="w-4 h-4" data-lucide="play-circle"></i> See how it works
            </a>
</div>

<div className="flex items-center gap-6 pt-6 text-white/50">
<div className="flex -space-x-2">
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-black object-cover" src="https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&w=200&auto=format&fit=crop" />
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-black object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-black object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&auto=format&fit=crop" />
</div>
<span className="text-xs">Trusted by operations teams at 1,200+ companies</span>
</div>
</div>

<div className="lg:col-span-5" data-reveal="">
<div className="relative aspect-[4/3] rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">

<div className="absolute inset-0">
<canvas className="w-full h-full" id="hero-canvas"></canvas>
</div>
<div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
<div className="flex items-center gap-3 text-white/80 text-xs">
<i className="w-4 h-4" data-lucide="activity"></i>
                Live system topology • 3D pathfinding
              </div>
</div>
</div>
<p className="text-xs text-white/50 mt-3">Realtime rendering of task DAGs, SLAs, and dependencies.</p>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="h-px w-full bg-white/10"></div>
</div>

<section className="relative py-20 md:py-28" id="features">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-2xl" data-reveal="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Everything your team needs to move faster</h2>
<p className="text-white/70 mt-3">Automate handoffs, eliminate silos, and gain total visibility across initiatives.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

<div className="group relative rounded-xl border border-white/10 bg-white/5 hover:bg-white/[0.07] backdrop-blur-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_20px_60px_-20px_rgba(255,255,255,0.08)]" data-reveal="">
<div className="h-10 w-10 grid place-items-center rounded-md bg-white/10 text-white/90">
<i className="w-5 h-5" data-lucide="workflow"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Automated Workflows</h3>
<p className="mt-2 text-sm text-white/70">Define modular playbooks, trigger via APIs, and enforce SLAs with guardrails.</p>
<div className="mt-5 flex items-center gap-2 text-xs text-white/60">
<i className="w-4 h-4" data-lucide="shield"></i> SOC 2, SSO, SAML
          </div>
</div>

<div className="group relative rounded-xl border border-white/10 bg-white/5 hover:bg-white/[0.07] backdrop-blur-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_20px_60px_-20px_rgba(255,255,255,0.08)]" data-reveal="">
<div className="h-10 w-10 grid place-items-center rounded-md bg-white/10 text-white/90">
<i className="w-5 h-5" data-lucide="bar-chart-3"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Unified Analytics</h3>
<p className="mt-2 text-sm text-white/70">Track time-to-close, utilization, and throughput with granular cohorting.</p>
<div className="mt-5 flex items-center gap-2 text-xs text-white/60">
<i className="w-4 h-4" data-lucide="clock"></i> Realtime metrics, alerts
          </div>
</div>

<div className="group relative rounded-xl border border-white/10 bg-white/5 hover:bg-white/[0.07] backdrop-blur-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_20px_60px_-20px_rgba(255,255,255,0.08)]" data-reveal="">
<div className="h-10 w-10 grid place-items-center rounded-md bg-white/10 text-white/90">
<i className="w-5 h-5" data-lucide="lock-keyhole"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Enterprise Control</h3>
<p className="mt-2 text-sm text-white/70">Role-based access, audit trails, and policy engine for scale and compliance.</p>
<div className="mt-5 flex items-center gap-2 text-xs text-white/60">
<i className="w-4 h-4" data-lucide="key-round"></i> Fine-grained permissions
          </div>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="h-px w-full bg-white/10"></div>
</div>

<section className="relative py-20 md:py-28" id="cases">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div className="max-w-2xl" data-reveal="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Proven outcomes, measurable impact</h2>
<p className="text-white/70 mt-3">See how teams reduced time-to-resolution and increased throughput with Nexis.</p>
</div>
<div className="hidden md:flex items-center gap-2" data-reveal="">
<button className="h-9 w-9 grid place-items-center rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 shadow-[0_0_0_0px_rgba(255,255,255,0.2)] hover:shadow-[0_0_0_6px_rgba(255,255,255,0.10)]" id="prevTestimonial">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
<button className="h-9 w-9 grid place-items-center rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 shadow-[0_0_0_0px_rgba(255,255,255,0.2)] hover:shadow-[0_0_0_6px_rgba(255,255,255,0.10)]" id="nextTestimonial">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>

<div className="relative mt-10">
<div className="relative overflow-hidden" id="testimonialTrack">
<div className="min-h-[240px]">

<div className="space-y-6">
<article className="testimonial-slide opacity-100 translate-x-0 transition-all duration-700 ease-out" data-index="0">
<div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 overflow-hidden">
<div className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl opacity-20"></div>
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div className="flex items-center gap-4">
<img alt="" className="h-12 w-12 rounded-full object-cover ring-2 ring-black" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=200&auto=format&fit=crop" />
<div>
<p className="text-sm font-medium">Ava Chen</p>
<p className="text-xs text-white/60">Director of Ops, HelixLabs</p>
</div>
</div>
<div className="text-xs text-white/60 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="trending-up"></i> 43% faster cycle time
                    </div>
</div>
<p className="mt-5 text-white/80">
                    "Nexis became our operating fabric. We cut handoffs by 32% and finally see bottlenecks in real time."
                  </p>
</div>
</article>
<article className="testimonial-slide opacity-0 -translate-x-6 transition-all duration-700 ease-out absolute inset-0" data-index="1">
<div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 overflow-hidden">
<div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl opacity-20"></div>
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div className="flex items-center gap-4">
<img alt="" className="h-12 w-12 rounded-full object-cover ring-2 ring-black" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop" />
<div>
<p className="text-sm font-medium">Marcus Lee</p>
<p className="text-xs text-white/60">Head of Delivery, NorthGrid</p>
</div>
</div>
<div className="text-xs text-white/60 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="target"></i> 99.95% on-time delivery
                    </div>
</div>
<p className="mt-5 text-white/80">
                    "From planning to execution, the guardrails keep teams aligned. Our SLA adherence never looked better."
                  </p>
</div>
</article>
<article className="testimonial-slide opacity-0 translate-x-6 transition-all duration-700 ease-out absolute inset-0" data-index="2">
<div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 overflow-hidden">
<div className="absolute -top-16 -right-10 h-64 w-64 rounded-full bg-white/10 blur-3xl opacity-20"></div>
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div className="flex items-center gap-4">
<img alt="" className="h-12 w-12 rounded-full object-cover ring-2 ring-black" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" />
<div>
<p className="text-sm font-medium">Sofia Park</p>
<p className="text-xs text-white/60">COO, Meridian</p>
</div>
</div>
<div className="text-xs text-white/60 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="cpu"></i> 3x automation coverage
                    </div>
</div>
<p className="mt-5 text-white/80">
                    "We automated our runbooks in days. The policy engine ensures compliance without slowing us down."
                  </p>
</div>
</article>
</div>
</div>

<div className="flex items-center gap-2 mt-6 justify-center">
<button className="dot h-1.5 w-6 rounded-full bg-white/80 transition-all duration-300 shadow-[0_0_0_0px_rgba(255,255,255,0.3)] hover:shadow-[0_0_0_4px_rgba(255,255,255,0.12)]" data-index="0"></button>
<button className="dot h-1.5 w-1.5 rounded-full bg-white/30 transition-all duration-300 shadow-[0_0_0_0px_rgba(255,255,255,0.3)] hover:shadow-[0_0_0_4px_rgba(255,255,255,0.12)]" data-index="1"></button>
<button className="dot h-1.5 w-1.5 rounded-full bg-white/30 transition-all duration-300 shadow-[0_0_0_0px_rgba(255,255,255,0.3)] hover:shadow-[0_0_0_4px_rgba(255,255,255,0.12)]" data-index="2"></button>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 md:py-28" id="cta">
<div className="absolute inset-0 -z-10 overflow-hidden">
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[46rem] w-[46rem] rounded-full bg-white/5 blur-3xl opacity-20 animate-pulse"></div>
<div className="absolute inset-0 grid place-items-center pointer-events-none">
<div className="h-[22rem] w-[22rem] rounded-full border border-white/10 animate-spin slow [animation-duration:20s]"></div>
</div>
</div>
<div className="max-w-3xl mx-auto px-6 lg:px-8 text-center" data-reveal="">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight">Ready to modernize your operating rhythm?</h3>
<p className="text-white/70 mt-3">Book a tailored demo for your team. We'll map your workflows and show immediate wins.</p>
<div className="mt-6 flex items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-white text-black text-sm font-medium px-6 py-3 transition-all duration-300 shadow-[0_0_0_0px_rgba(255,255,255,0.3)] hover:shadow-[0_0_0_16px_rgba(255,255,255,0.15)] hover:scale-[1.02]" href="#">
<i className="w-4 h-4" data-lucide="calendar"></i> Schedule demo
        </a>
<a className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/0 text-white text-sm font-medium px-6 py-3 transition-all duration-300 shadow-[0_0_0_0px_rgba(255,255,255,0.2)] hover:shadow-[0_0_0_12px_rgba(255,255,255,0.10)] hover:border-white/30 hover:bg-white/[0.04]" href="#">
<i className="w-4 h-4" data-lucide="file-text"></i> Download brief
        </a>
</div>
</div>
</section>

<footer className="border-t border-white/10 py-10">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="h-6 w-6 grid place-items-center rounded-sm bg-white text-black text-xs font-semibold tracking-tight">NX</div>
<span className="text-sm font-medium tracking-tight">Nexis</span>
</div>
<nav className="grid grid-cols-2 sm:flex gap-4 sm:gap-6 text-sm">
<a className="text-white/70 hover:text-white hover:underline underline-offset-8 decoration-white/40 transition-all duration-300 shadow-[0_0_0_0px_rgba(255,255,255,0.2)] hover:shadow-[0_0_0_4px_rgba(255,255,255,0.06)]" href="#">Docs</a>
<a className="text-white/70 hover:text-white hover:underline underline-offset-8 decoration-white/40 transition-all duration-300 shadow-[0_0_0_0px_rgba(255,255,255,0.2)] hover:shadow-[0_0_0_4px_rgba(255,255,255,0.06)]" href="#">Security</a>
<a className="text-white/70 hover:text-white hover:underline underline-offset-8 decoration-white/40 transition-all duration-300 shadow-[0_0_0_0px_rgba(255,255,255,0.2)] hover:shadow-[0_0_0_4px_rgba(255,255,255,0.06)]" href="#">Status</a>
<a className="text-white/70 hover:text-white hover:underline underline-offset-8 decoration-white/40 transition-all duration-300 shadow-[0_0_0_0px_rgba(255,255,255,0.2)] hover:shadow-[0_0_0_4px_rgba(255,255,255,0.06)]" href="#">Careers</a>
<a className="text-white/70 hover:text-white hover:underline underline-offset-8 decoration-white/40 transition-all duration-300 shadow-[0_0_0_0px_rgba(255,255,255,0.2)] hover:shadow-[0_0_0_4px_rgba(255,255,255,0.06)]" href="#">Contact</a>
</nav>
<p className="text-xs text-white/50">© <span id="year"></span> Nexis, Inc. All rights reserved.</p>
</div>
</div>
</footer>




    </>
  );
}
