import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    function downloadPage() {
      try {
        const html = document.documentElement.outerHTML;
        const blob = new Blob([html], { type: 'text/html' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'index.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(a.href);
      } catch (e) {
        window.open(window.location.href, '_blank');
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
      try {
        if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        } else if (typeof lucide !== 'undefined' && typeof lucide.replace === 'function') {
          lucide.replace({ 'stroke-width': 1.5 });
        }
      } catch (err) {
        // ignore
      }

      // Custom cursor logic with snake-style trail
      const ring = document.getElementById('cursor-ring');
      const dot = document.getElementById('cursor-dot');
      if (!ring || !dot) return;

      let rafId;
      let targetX = window.innerWidth / 2, targetY = window.innerHeight / 2;
      let currentX = targetX, currentY = targetY;

      // Snake segments
      const SEGMENTS = 18;
      const segEls = [];
      const segX = new Array(SEGMENTS);
      const segY = new Array(SEGMENTS);
      let sizeBoost = 0;

      const createSegment = (i) => {
        const el = document.createElement('div');
        const z = 40; // under ring/dot (z-50)
        const baseSize = Math.max(4, 12 - i * 0.5);
        const opacity = Math.max(0.15, 0.9 - i * 0.04);
        el.className = 'pointer-events-none fixed top-0 left-0 hidden md:block';
        el.style.cssText = [
          `z-index:${z};`,
          `width:${baseSize}px;`,
          `height:${baseSize}px;`,
          'border-radius:9999px;',
          'transform:translate(-50%,-50%);',
          `background: rgba(94,234,212,${Math.min(0.95, 0.65 + (0.02 * (SEGMENTS - i))) });`,
          `box-shadow: 0 0 0 2px rgba(13,148,136,0.08), 0 0 18px rgba(20,184,166,0.25), inset 0 0 6px rgba(255,255,255,0.06);`,
          `opacity:${opacity};`,
          'transition: opacity .2s;',
          'will-change: left, top;'
        ].join('');
        document.body.appendChild(el);
        return el;
      };

      for (let i = 0; i < SEGMENTS; i++) {
        segEls[i] = createSegment(i);
        segX[i] = targetX;
        segY[i] = targetY;
      }

      const updateSegmentSizes = () => {
        for (let i = 0; i < SEGMENTS; i++) {
          const base = Math.max(4, 12 - i * 0.5);
          const size = base + sizeBoost;
          segEls[i].style.width = size + 'px';
          segEls[i].style.height = size + 'px';
        }
      };

      const setImmediate = (x, y) => {
        ring.style.left = x + 'px';
        ring.style.top = y + 'px';
        dot.style.left = x + 'px';
        dot.style.top = y + 'px';
        for (let i = 0; i < SEGMENTS; i++) {
          segX[i] = x; segY[i] = y;
          segEls[i].style.left = x + 'px';
          segEls[i].style.top  = y + 'px';
        }
      };

      const animate = () => {
        // Lead ring follows smoothly
        currentX += (targetX - currentX) * 0.22;
        currentY += (targetY - currentY) * 0.22;
        ring.style.left = currentX + 'px';
        ring.style.top = currentY + 'px';

        // Dot snaps to target
        dot.style.left = targetX + 'px';
        dot.style.top = targetY + 'px';

        // Snake: head follows target, rest follow the previous segment
        segX[0] += (targetX - segX[0]) * 0.28;
        segY[0] += (targetY - segY[0]) * 0.28;

        for (let i = 1; i < SEGMENTS; i++) {
          segX[i] += (segX[i - 1] - segX[i]) * 0.28;
          segY[i] += (segY[i - 1] - segY[i]) * 0.28;
        }

        for (let i = 0; i < SEGMENTS; i++) {
          segEls[i].style.left = segX[i] + 'px';
          segEls[i].style.top  = segY[i] + 'px';
        }

        rafId = requestAnimationFrame(animate);
      };

      const onMove = (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
      };

      const enlarge = () => {
        ring.style.width = '44px';
        ring.style.height = '44px';
        ring.style.borderColor = 'rgba(94, 234, 212, 1)';
        ring.style.boxShadow = '0 0 0 3px rgba(94,234,212,0.15), 0 0 60px rgba(20,184,166,0.35)';
        sizeBoost = 2;
        updateSegmentSizes();
      };

      const reset = () => {
        ring.style.width = '28px';
        ring.style.height = '28px';
        ring.style.borderColor = 'rgba(45, 212, 191, 0.85)';
        ring.style.boxShadow = '0 0 0 2px rgba(13,148,136,0.15), 0 0 30px rgba(20,184,166,0.25)';
        sizeBoost = 0;
        updateSegmentSizes();
      };

      const hide = () => {
        ring.style.opacity = '0';
        dot.style.opacity = '0';
        for (const el of segEls) el.style.opacity = '0';
      };

      const show = () => {
        ring.style.opacity = '.9';
        dot.style.opacity = '.9';
        for (let i = 0; i < SEGMENTS; i++) {
          const opacity = Math.max(0.15, 0.9 - i * 0.04);
          segEls[i].style.opacity = opacity;
        }
      };

      // Start animation
      setImmediate(window.innerWidth / 2, window.innerHeight / 2);
      show();
      updateSegmentSizes();
      rafId = requestAnimationFrame(animate);
      window.addEventListener('mousemove', onMove, { passive: true });
      window.addEventListener('mouseenter', show);
      window.addEventListener('mouseleave', hide);

      // Hover targets enlarge effect
      const hoverTargets = document.querySelectorAll('a, button, [role="button"], .cursor-glow, .button-hover, .tag-hover, .glow-border, .logo-hover, .hover-lift, .interactive-text');
      hoverTargets.forEach((el) => {
        el.addEventListener('mouseenter', enlarge);
        el.addEventListener('mouseleave', reset);
      });

      // Click feedback
      window.addEventListener('mousedown', () => {
        ring.style.transform = 'translate(-50%, -50%) scale(0.88)';
      });
      window.addEventListener('mouseup', () => {
        ring.style.transform = 'translate(-50%, -50%) scale(1)';
      });

      // Cleanup on page hide
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          cancelAnimationFrame(rafId);
        } else {
          rafId = requestAnimationFrame(animate);
        }
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="ambient-light"></div>
<div className="ambient-light-2"></div>

<div className="pointer-events-none fixed top-0 left-0 z-50 hidden md:block" id="cursor-ring" style={{width: '28px', height: '28px', border: '1.5px solid rgba(45, 212, 191, 0.85)', borderRadius: '9999px', transform: 'translate(-50%, -50%) scale(1)', boxShadow: 'rgba(13, 148, 136, 0.15) 0px 0px 0px 2px, rgba(20, 184, 166, 0.25) 0px 0px 30px', transition: 'width 0.2s, height 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.06s, opacity 0.2s', backdropFilter: 'blur(1px)', opacity: '0.9', left: '1749px', top: '658px'}}></div>
<div className="pointer-events-none fixed top-0 left-0 z-50 hidden md:block" id="cursor-dot" style={{width: '6px', height: '6px', background: 'rgba(94, 234, 212, 0.95)', borderRadius: '9999px', transform: 'translate(-50%, -50%)', transition: 'transform 0.06s, opacity 0.2s', boxShadow: 'rgba(94, 234, 212, 0.6) 0px 0px 10px', opacity: '0.9', left: '1749px', top: '658px'}}></div>

<header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between relative z-10 animate-fade-in">
<div className="flex items-center space-x-4">

<div className="rounded-xl bg-gradient-to-br from-teal-500/90 to-cyan-400/90 p-1.5 glow-teal animate-glow logo-hover cursor-glow">
<div className="rounded-xl bg-[#0b1a28] w-9 h-9 flex items-center justify-center logo-icon">
<svg aria-hidden="true" fill="none" height="20" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20">
<path d="M4 7h16v10H4z"></path>
<path d="M7 7l3-3 3 3"></path>
<path d="M7 14h3"></path>
<path d="M14 14h3"></path>
</svg>
</div>
</div>
<div className="animate-fade-in delay-100 hover-lift cursor-glow">
<div className="text-sm text-slate-300 hover-glow transition-all duration-300">Global Hosting</div>
<div className="text-lg font-semibold tracking-tight text-glow hover-glow interactive-text cursor-pointer transition-all duration-300">Ultra-fast cloud infrastructure</div>
</div>
</div>
<div className="flex items-center space-x-3 animate-fade-in delay-200">
<span className="px-3 py-1 rounded-full text-sm bg-teal-600/20 text-teal-300 border border-teal-500/40 glow-border backdrop-glow hover-float cursor-glow">Renewable energy: 100%</span>
<button className="px-4 py-2 rounded-full bg-teal-600 hover:bg-teal-500 text-white text-sm shadow-lg hover:shadow-xl glow-teal-intense button-hover cursor-pointer" onclick="downloadPage()">
        Download HTML
      </button>
</div>
</header>

<main className="max-w-7xl mx-auto px-6 pb-12 relative z-10">
<section className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">

<article className="relative rounded-3xl overflow-hidden bg-[#0e1a2a] glow-card animate-scale-in cursor-glow">
<div className="card-content">
<div className="card-image-hover">
<img alt="3D data center rendering" className="w-full h-96 object-cover md:h-full" src="https://images.unsplash.com/photo-1658243762592-d3ff6f8a9a29?w=3840&amp;q=80"/>
</div>

<div className="absolute bottom-0 left-0 w-full flex gap-4 backdrop-glow bg-neutral-50/10 pt-5 pr-5 pb-5 pl-5 items-center justify-between floating-stats-hover">
<div className="flex items-center gap-5 animate-float">
<div className="flex items-center space-x-2 bg-teal-600/30 border border-teal-400/50 px-3 py-2 rounded-xl backdrop-glow glow-border hover-lift cursor-glow">
<svg aria-hidden="true" className="text-teal-300 hover-glow transition-all duration-300" fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20">
<path d="M3 3h18v18H3z"></path>
<path d="M7 15h3"></path>
<path d="M8 12h2"></path>
</svg>
<span className="text-sm font-semibold hover-glow transition-all duration-300">Total MV</span>
<span className="text-sm font-semibold ml-1 text-glow hover-glow interactive-text cursor-pointer transition-all duration-300">188.8</span>
</div>
<div className="text-white/80 text-sm tracking-tight hover-lift cursor-glow">
<span className="block hover-glow transition-all duration-300">Total SQFT:</span>
<span className="font-semibold text-glow hover-glow interactive-text cursor-pointer transition-all duration-300">244,000+</span>
</div>
<div className="text-white/80 text-sm tracking-tight hover-lift cursor-glow">
<span className="block hover-glow transition-all duration-300">Rack capacity:</span>
<span className="font-semibold text-glow hover-glow interactive-text cursor-pointer transition-all duration-300">300+</span>
</div>
</div>
<button className="px-5 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-white font-semibold glow-teal-intense button-hover animate-float cursor-pointer" style={{animationDelay: '0.5s'}}>
              Our data center
            </button>
</div>
</div>
</article>

<aside className="rounded-3xl bg-[#142033] p-8 flex flex-col justify-center glow-card animate-scale-in delay-200 bg-gradient-glow hover-bg-shift cursor-glow" style={{background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(6, 182, 212, 0.05), rgba(20, 184, 166, 0.08))'}}>
<div className="card-content">
<div className="inline-flex items-center mb-4 gap-3 animate-fade-in delay-300">
<span className="px-3 py-1 rounded-full border border-slate-500/50 text-slate-200 text-xs glow-border backdrop-glow tag-hover">Performance</span>
<span className="px-3 py-1 rounded-full border border-slate-500/50 text-slate-200 text-xs glow-border backdrop-glow tag-hover">Cloud</span>
</div>
<h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 leading-tight text-glow animate-slide-up delay-400 hover-glow interactive-text cursor-glow transition-all duration-500">
            Unmatched performance
          </h1>
<p className="text-slate-300 leading-relaxed text-sm md:text-base animate-slide-up delay-500 hover-glow cursor-glow transition-all duration-300">
            To provide a fast web hosting experience, we use innovative technologies: HTTP/3, IPv6, and
            lifespeed servers. Premium and business hosting plans also come with unmetered bandwidth, so your
            website's traffic won't be limited.
          </p>
<div className="mt-6 flex flex-wrap gap-3 animate-slide-up delay-600">
<span aria-label="Feature tag" className="px-3 py-2 rounded-full bg-slate-800/60 text-sm glow-border backdrop-glow tag-hover">Offshore</span>
<span aria-label="Feature tag" className="px-3 py-2 rounded-full bg-slate-800/60 text-sm glow-border backdrop-glow tag-hover">Anti DDoS</span>
<span aria-label="Feature tag" className="px-3 py-2 rounded-full bg-slate-800/60 text-sm glow-border backdrop-glow tag-hover">SSD VPS Hosting</span>
</div>
</div>
</aside>
</section>

<section className="grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-8">

<article className="rounded-2xl bg-[#0e1a2a] overflow-hidden glow-card animate-scale-in delay-300 cursor-glow">
<div className="card-content">
<div className="relative h-72 bg-center bg-cover card-image-hover" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1564866657314-0aabc2f9a5a0?auto=format&amp'}}>
<img alt="Security visualization" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1669062897193-f8a4215c2033?w=3840&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0e1a2a]/60 to-transparent hover:from-[#0e1a2a]/40 transition-all duration-500"></div>
</div>
<div className="p-5 bg-gradient-glow">
<div className="flex items-center justify-between animate-fade-in delay-400">
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-slate-800/60 border border-slate-700/50 glow-border backdrop-glow tag-hover">CloudLinux</span>
<span className="text-xs text-slate-300 text-glow hover-glow interactive-text cursor-pointer transition-all duration-300">LVE</span>
</div>
<h3 className="mt-3 text-xl font-semibold tracking-tight text-glow animate-slide-up delay-500 hover-glow interactive-text cursor-glow transition-all duration-300">Total security</h3>
<p className="text-slate-300 text-sm mt-2 animate-slide-up delay-600 hover-glow cursor-glow transition-all duration-300">
              Our primary focus is secure web hosting. We provide a range of services to ensure this, including free SSL and DDoS protection.
            </p>

<div className="mt-4 flex justify-end">
<div className="w-10 h-10 rounded-xl bg-teal-600/20 border border-teal-500/40 flex items-center justify-center glow-border backdrop-glow">
<i className="text-teal-300" data-lucide="shield-check" style={{width: '20px', height: '20px'}}></i>
</div>
</div>
</div>
</div>
</article>

<article className="rounded-2xl bg-[#0e1a2a] overflow-hidden glow-card animate-scale-in delay-400 cursor-glow">
<div className="card-content">
<div className="relative h-72 bg-center bg-cover card-image-hover" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1518779578993-56dfd8f0b3fb?auto=format&amp'}}>
<img alt="WordPress optimization" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1644329770639-1a20809b82a3?w=3840&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0e1a2a]/60 to-transparent hover:from-[#0e1a2a]/40 transition-all duration-500"></div>
</div>
<div className="pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between animate-fade-in delay-500">
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-slate-800/60 border border-slate-700/50 glow-border backdrop-glow tag-hover">WordPress</span>
<span className="text-xs text-slate-300 text-glow hover-glow interactive-text cursor-pointer transition-all duration-300">One-click</span>
</div>
<h3 className="mt-3 text-xl font-semibold tracking-tight text-glow animate-slide-up delay-600 hover-glow interactive-text cursor-glow transition-all duration-300">Optimized for WordPress</h3>
<p className="text-slate-300 text-sm mt-2 animate-slide-up delay-700 hover-glow cursor-glow transition-all duration-300">
              Hosting services designed to make managing your WordPress site a breeze. Shared hosting that feels exclusive.
            </p>

<div className="mt-4 flex justify-end">
<div className="w-10 h-10 rounded-xl bg-teal-600/20 border border-teal-500/40 flex items-center justify-center glow-border backdrop-glow">
<i className="text-teal-300" data-lucide="wand-2" style={{width: '20px', height: '20px'}}></i>
</div>
</div>
</div>
</div>
</article>

<article className="rounded-2xl bg-[#0e1a2a] overflow-hidden glow-card animate-scale-in delay-500 cursor-glow">
<div className="card-content">
<div className="relative h-72 bg-center bg-cover card-image-hover" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&amp'}}>
<img alt="Server control interface" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1737505599162-d9932323a889?w=3840&amp;q=80"/>
<div className="absolute inset-0 hover:from-[#0e1a2a]/40 transition-all duration-500 bg-gradient-to-t from-[#0e1a2a]/60 to-transparent"></div>
</div>
<div className="pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between animate-fade-in delay-600">
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-slate-800/60 border border-slate-700/50 glow-border backdrop-glow tag-hover">SSH</span>
<span className="text-xs text-slate-300 text-glow hover-glow interactive-text cursor-pointer transition-all duration-300">WP-CLI</span>
</div>
<h3 className="mt-3 text-xl font-semibold tracking-tight text-glow animate-slide-up delay-700 hover-glow interactive-text cursor-glow transition-all duration-300">Complete control</h3>
<p className="text-slate-300 text-sm mt-2 animate-slide-up delay-800 hover-glow cursor-glow transition-all duration-300">
              Secure management with SSH access, automated backups, and a powerful CLI for every task.
            </p>

<div className="mt-4 flex justify-end">
<div className="w-10 h-10 rounded-xl bg-teal-600/20 border border-teal-500/40 flex items-center justify-center glow-border backdrop-glow">
<i className="text-teal-300" data-lucide="terminal" style={{width: '20px', height: '20px'}}></i>
</div>
</div>
</div>
</div>
</article>
</section>
</main>

<section className="relative z-10 mt-6">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="h-px bg-white/10"></div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
<article className="rounded-2xl bg-[#0e1a2a] p-6 glow-card hover-lift cursor-glow">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-teal-600/20 border border-teal-500/40 flex items-center justify-center glow-border backdrop-glow">
<i className="text-teal-300" data-lucide="rocket" style={{width: '20px', height: '20px'}}></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-glow">Blazing setup</h3>
</div>
<p className="mt-3 text-sm text-slate-300">
            Deploy in minutes with automated provisioning, optimized defaults, and global edge routing.
          </p>
</article>
<article className="rounded-2xl bg-[#0e1a2a] p-6 glow-card hover-lift cursor-glow">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-teal-600/20 border border-teal-500/40 flex items-center justify-center glow-border backdrop-glow">
<i className="text-teal-300" data-lucide="shield-check" style={{width: '20px', height: '20px'}}></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-glow">Hardened security</h3>
</div>
<p className="mt-3 text-sm text-slate-300">
            Built-in WAF, free SSL, and 24/7 monitoring keep your apps safe without extra plugins.
          </p>
</article>
<article className="rounded-2xl bg-[#0e1a2a] p-6 glow-card hover-lift cursor-glow sm:col-span-2 lg:col-span-1">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-teal-600/20 border border-teal-500/40 flex items-center justify-center glow-border backdrop-glow">
<i className="text-teal-300" data-lucide="globe-2" style={{width: '20px', height: '20px'}}></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-glow">Global footprint</h3>
</div>
<p className="mt-3 text-sm text-slate-300">
            Anycast DNS and multi-region deployments provide low latency for users everywhere.
          </p>
</article>
</div>
<div className="mt-8 rounded-3xl border border-teal-500/40 bg-gradient-to-r from-teal-600/20 to-cyan-500/20 p-6 md:p-8 glow-border backdrop-glow hover-float cursor-glow">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
<div>
<h4 className="text-2xl md:text-3xl font-semibold tracking-tight text-glow">Ready to launch faster?</h4>
<p className="text-slate-300 text-sm md:text-base mt-1">Spin up your project with one click and scale as you grow.</p>
</div>
<div className="flex items-center gap-3">
<button className="px-5 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-white font-semibold glow-teal-intense button-hover cursor-pointer">
              Get started
            </button>
<a className="px-5 py-3 rounded-full border border-slate-600/60 text-slate-200 hover:bg-slate-800/60 font-semibold glow-border button-hover cursor-pointer" href="#">
              View pricing
            </a>
</div>
</div>
</div>
</div>
</section>

<footer className="mt-12 relative z-10">
<div className="max-w-7xl mx-auto px-6 pb-8">
<p className="text-sm text-slate-400 animate-fade-in delay-800 hover-glow cursor-glow transition-all duration-300">
        Design system inspired by premium UI frameworks. Fonts are tuned for clarity and crisp tracking on headings above 20px.
      </p>
</div>
</footer>

<div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '12px', height: '12px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(94, 234, 212, 0.95)', boxShadow: 'rgba(13, 148, 136, 0.08) 0px 0px 0px 2px, rgba(20, 184, 166, 0.25) 0px 0px 18px, rgba(255, 255, 255, 0.06) 0px 0px 6px inset', opacity: '0.9', transition: 'opacity 0.2s', willChange: 'left, top', left: '1749px', top: '658px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '11.5px', height: '11.5px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(94, 234, 212, 0.95)', boxShadow: 'rgba(13, 148, 136, 0.08) 0px 0px 0px 2px, rgba(20, 184, 166, 0.25) 0px 0px 18px, rgba(255, 255, 255, 0.06) 0px 0px 6px inset', opacity: '0.86', transition: 'opacity 0.2s', willChange: 'left, top', left: '1749px', top: '658px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '11px', height: '11px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(94, 234, 212, 0.95)', boxShadow: 'rgba(13, 148, 136, 0.08) 0px 0px 0px 2px, rgba(20, 184, 166, 0.25) 0px 0px 18px, rgba(255, 255, 255, 0.06) 0px 0px 6px inset', opacity: '0.82', transition: 'opacity 0.2s', willChange: 'left, top', left: '1749px', top: '658px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '10.5px', height: '10.5px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(94, 234, 212, 0.95)', boxShadow: 'rgba(13, 148, 136, 0.08) 0px 0px 0px 2px, rgba(20, 184, 166, 0.25) 0px 0px 18px, rgba(255, 255, 255, 0.06) 0px 0px 6px inset', opacity: '0.78', transition: 'opacity 0.2s', willChange: 'left, top', left: '1749px', top: '658px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '10px', height: '10px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(94, 234, 212, 0.93)', boxShadow: 'rgba(13, 148, 136, 0.08) 0px 0px 0px 2px, rgba(20, 184, 166, 0.25) 0px 0px 18px, rgba(255, 255, 255, 0.06) 0px 0px 6px inset', opacity: '0.74', transition: 'opacity 0.2s', willChange: 'left, top', left: '1749px', top: '658px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '9.5px', height: '9.5px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(94, 234, 212, 0.91)', boxShadow: 'rgba(13, 148, 136, 0.08) 0px 0px 0px 2px, rgba(20, 184, 166, 0.25) 0px 0px 18px, rgba(255, 255, 255, 0.06) 0px 0px 6px inset', opacity: '0.7', transition: 'opacity 0.2s', willChange: 'left, top', left: '1749px', top: '658px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '9px', height: '9px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(94, 234, 212, 0.89)', boxShadow: 'rgba(13, 148, 136, 0.08) 0px 0px 0px 2px, rgba(20, 184, 166, 0.25) 0px 0px 18px, rgba(255, 255, 255, 0.06) 0px 0px 6px inset', opacity: '0.66', transition: 'opacity 0.2s', willChange: 'left, top', left: '1749px', top: '658px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '8.5px', height: '8.5px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(94, 234, 212, 0.87)', boxShadow: 'rgba(13, 148, 136, 0.08) 0px 0px 0px 2px, rgba(20, 184, 166, 0.25) 0px 0px 18px, rgba(255, 255, 255, 0.06) 0px 0px 6px inset', opacity: '0.62', transition: 'opacity 0.2s', willChange: 'left, top', left: '1749px', top: '658px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '8px', height: '8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(94, 234, 212, 0.85)', boxShadow: 'rgba(13, 148, 136, 0.08) 0px 0px 0px 2px, rgba(20, 184, 166, 0.25) 0px 0px 18px, rgba(255, 255, 255, 0.06) 0px 0px 6px inset', opacity: '0.58', transition: 'opacity 0.2s', willChange: 'left, top', left: '1749px', top: '658px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '7.5px', height: '7.5px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(94, 234, 212, 0.83)', boxShadow: 'rgba(13, 148, 136, 0.08) 0px 0px 0px 2px, rgba(20, 184, 166, 0.25) 0px 0px 18px, rgba(255, 255, 255, 0.06) 0px 0px 6px inset', opacity: '0.54', transition: 'opacity 0.2s', willChange: 'left, top', left: '1749px', top: '658px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '7px', height: '7px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(94, 234, 212, 0.81)', boxShadow: 'rgba(13, 148, 136, 0.08) 0px 0px 0px 2px, rgba(20, 184, 166, 0.25) 0px 0px 18px, rgba(255, 255, 255, 0.06) 0px 0px 6px inset', opacity: '0.5', transition: 'opacity 0.2s', willChange: 'left, top', left: '1749px', top: '658px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6.5px', height: '6.5px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(94, 234, 212, 0.79)', boxShadow: 'rgba(13, 148, 136, 0.08) 0px 0px 0px 2px, rgba(20, 184, 166, 0.25) 0px 0px 18px, rgba(255, 255, 255, 0.06) 0px 0px 6px inset', opacity: '0.46', transition: 'opacity 0.2s', willChange: 'left, top', left: '1749px', top: '658px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6px', height: '6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(94, 234, 212, 0.77)', boxShadow: 'rgba(13, 148, 136, 0.08) 0px 0px 0px 2px, rgba(20, 184, 166, 0.25) 0px 0px 18px, rgba(255, 255, 255, 0.06) 0px 0px 6px inset', opacity: '0.42', transition: 'opacity 0.2s', willChange: 'left, top', left: '1749px', top: '658px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '5.5px', height: '5.5px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(94, 234, 212, 0.75)', boxShadow: 'rgba(13, 148, 136, 0.08) 0px 0px 0px 2px, rgba(20, 184, 166, 0.25) 0px 0px 18px, rgba(255, 255, 255, 0.06) 0px 0px 6px inset', opacity: '0.38', transition: 'opacity 0.2s', willChange: 'left, top', left: '1749px', top: '658px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '5px', height: '5px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(94, 234, 212, 0.73)', boxShadow: 'rgba(13, 148, 136, 0.08) 0px 0px 0px 2px, rgba(20, 184, 166, 0.25) 0px 0px 18px, rgba(255, 255, 255, 0.06) 0px 0px 6px inset', opacity: '0.34', transition: 'opacity 0.2s', willChange: 'left, top', left: '1749px', top: '658px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '4.5px', height: '4.5px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(94, 234, 212, 0.71)', boxShadow: 'rgba(13, 148, 136, 0.08) 0px 0px 0px 2px, rgba(20, 184, 166, 0.25) 0px 0px 18px, rgba(255, 255, 255, 0.06) 0px 0px 6px inset', opacity: '0.3', transition: 'opacity 0.2s', willChange: 'left, top', left: '1749px', top: '658px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '4px', height: '4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(94, 234, 212, 0.69)', boxShadow: 'rgba(13, 148, 136, 0.08) 0px 0px 0px 2px, rgba(20, 184, 166, 0.25) 0px 0px 18px, rgba(255, 255, 255, 0.06) 0px 0px 6px inset', opacity: '0.26', transition: 'opacity 0.2s', willChange: 'left, top', left: '1749px', top: '658px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '4px', height: '4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(94, 234, 212, 0.67)', boxShadow: 'rgba(13, 148, 136, 0.08) 0px 0px 0px 2px, rgba(20, 184, 166, 0.25) 0px 0px 18px, rgba(255, 255, 255, 0.06) 0px 0px 6px inset', opacity: '0.22', transition: 'opacity 0.2s', willChange: 'left, top', left: '1749px', top: '658px'}}></div>
    </>
  );
}
