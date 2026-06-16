import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('copyright').textContent = `\u00A9 ${new Date().getFullYear()} Meridian. All rights reserved.`;
  const isDesktop = window.matchMedia('(min-width:769px)').matches;

  // ─── LENIS SMOOTH SCROLL ───
  function initLenis() {
    if (typeof Lenis === 'undefined') { setTimeout(initLenis, 50); return; }
    const lenis = new Lenis({ duration: 1.2, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smooth: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', () => { if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.update(); });
  }
  initLenis();

  // ─── SCROLL PROGRESS BAR ───
  const progressBar = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (window.scrollY / h * 100) + '%';
  }, { passive: true });

  // ─── MAGNETIC BUTTONS (desktop) ───
  if (isDesktop) {
    document.querySelectorAll('.magnetic').forEach(el => {
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.3;
        const y = (e.clientY - r.top - r.height / 2) * 0.3;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }

  // ─── RIPPLE CLICK EFFECT ───
  document.querySelectorAll('.ripple').forEach(el => {
    el.addEventListener('click', function(e) {
      const circle = document.createElement('span');
      circle.classList.add('ripple-circle');
      const r = this.getBoundingClientRect();
      const size = Math.max(r.width, r.height);
      circle.style.width = circle.style.height = size + 'px';
      circle.style.left = (e.clientX - r.left - size / 2) + 'px';
      circle.style.top = (e.clientY - r.top - size / 2) + 'px';
      this.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    });
  });

  // ─── CAROUSEL ───
  document.querySelectorAll('.carousel-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const t = document.getElementById(btn.dataset.target);
      if (t) t.scrollBy({ left: parseInt(btn.dataset.dir) * 400, behavior: 'smooth' });
    });
  });

  // ─── TABS ───
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById('tab-' + btn.dataset.tab);
      panel.classList.add('active');
      if (typeof gsap !== 'undefined') gsap.from(panel.querySelectorAll('li'), { opacity: 0, x: -12, stagger: 0.06, duration: 0.4, delay: 0.15 });
    });
  });

  // ─── COPY ───
  document.querySelectorAll('.copy-btn').forEach(b => { b.addEventListener('click', function() { this.textContent = 'Copied!'; setTimeout(() => this.textContent = 'Copy', 2000); }); });

  // ─── WAIT FOR GSAP ───
  function waitForGsap(cb) {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') { cb(); return; }
    setTimeout(() => waitForGsap(cb), 50);
  }

  waitForGsap(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Splitting.js headline
    if (typeof Splitting !== 'undefined') {
      Splitting();
      gsap.fromTo('.hero h1 [data-splitting] .char', { opacity: 0, y: 30, rotateX: -60 }, { opacity: 1, y: 0, rotateX: 0, stagger: 0.025, duration: 0.7, delay: 0.3, ease: 'back.out(1.2)' });
    }
    gsap.fromTo('.flip-words', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.8, ease: 'power2.out' });

    // Typed.js — CTA terminal (bottom section only)
    if (typeof Typed !== 'undefined') {
      const ctaLines = document.querySelectorAll('.cta-terminal .terminal-line[data-typed]');
      if (ctaLines.length) {
        const originals = []; ctaLines.forEach(l => { originals.push(l.innerHTML); l.innerHTML = ''; });
        const output = document.querySelector('.cta-terminal .terminal-output');
        function typeSeq(i) {
          if (i >= originals.length) { if (output) output.classList.add('typed-done'); return; }
          new Typed(ctaLines[i], { strings: [originals[i]], typeSpeed: 22, showCursor: false, contentType: 'html', onComplete: () => typeSeq(i + 1) });
        }
        setTimeout(() => typeSeq(0), 500);
      }
    }

    // Hero subtitle + CTA fade in
    gsap.fromTo('.hero .subtitle', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 1 });
    gsap.fromTo('.hero-ctas', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 1.2 });
    gsap.fromTo('.hero-app-wrap', { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, delay: 1.5, ease: 'power3.out' });

    // Clip-path text reveals on scroll
    document.querySelectorAll('.text-reveal').forEach(el => {
      ScrollTrigger.create({ trigger: el, start: 'top 80%', once: true, onEnter: () => el.classList.add('revealed') });
    });

    // General reveals
    gsap.set('.reveal', { opacity: 0, y: 30 });
    document.querySelectorAll('.reveal').forEach(el => {
      gsap.to(el, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 85%', once: true } });
    });

    // Bento stagger
    gsap.set('.bento-card', { opacity: 0, y: 50 });
    gsap.to('.bento-card', { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.bento-grid', start: 'top 80%', once: true } });

    // Bento widget animations — trigger .animated class with stagger
    document.querySelectorAll('.bento-card').forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card, start: 'top 80%', once: true,
        onEnter: () => { setTimeout(() => card.classList.add('animated'), 200 + i * 100); }
      });
    });
    // Add --ni custom property for node stagger
    document.querySelectorAll('.widget-nodes .node').forEach((n, i) => n.style.setProperty('--ni', i));

    // Testimonials stagger
    gsap.set('.testi-card', { opacity: 0, y: 40 });
    gsap.to('.testi-card', { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.testi-grid', start: 'top 80%', once: true } });

    // Comparison rows
    gsap.set('.compare-table tbody tr', { opacity: 0, x: -30 });
    gsap.to('.compare-table tbody tr', { x: 0, opacity: 1, duration: 0.5, stagger: 0.07, ease: 'power2.out', scrollTrigger: { trigger: '.compare-table', start: 'top 80%', once: true } });

    // Desktop parallax
    if (isDesktop) {
      document.querySelectorAll('.section-head h2').forEach(h => {
        gsap.to(h, { y: -25, ease: 'none', scrollTrigger: { trigger: h, start: 'top 90%', end: 'top 20%', scrub: 1.5 } });
      });
      // Parallax on images
      document.querySelectorAll('.tab-panel-visual img').forEach(img => {
        gsap.to(img, { y: -30, ease: 'none', scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: 1 } });
      });
      // Sticky scroll — activate features on scroll
      document.querySelector('.sticky-section')?.classList.add('js-sticky');
      document.querySelectorAll('.sticky-feature').forEach(feat => {
        ScrollTrigger.create({
          trigger: feat, start: 'top 60%', end: 'bottom 40%',
          onEnter: () => feat.classList.add('active'),
          onLeave: () => feat.classList.remove('active'),
          onEnterBack: () => feat.classList.add('active'),
          onLeaveBack: () => feat.classList.remove('active')
        });
      });
    }

    // Counter animations
    document.querySelectorAll('[data-count]').forEach(el => {
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const isDecimal = target % 1 !== 0;
      const proxy = { val: 0 };
      gsap.to(proxy, {
        val: target, duration: 2.5, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        onUpdate() { el.textContent = (isDecimal ? proxy.val.toFixed(target < 1 ? 1 : 2) : Math.round(proxy.val)) + suffix; }
      });
    });
  });

  // ─── SPOTLIGHT ───
  if (isDesktop) {
    document.querySelectorAll('.spotlight-container').forEach(container => {
      const cards = container.querySelectorAll('.bento-card, .c-card, .testi-card');
      container.addEventListener('mousemove', e => {
        cards.forEach(card => {
          const r = card.getBoundingClientRect();
          card.style.setProperty('--mouse-x', (e.clientX - r.left) + 'px');
          card.style.setProperty('--mouse-y', (e.clientY - r.top) + 'px');
          card.style.setProperty('--glow-opacity', '1');
        });
      });
      container.addEventListener('mouseleave', () => { cards.forEach(c => c.style.setProperty('--glow-opacity', '0')); });
    });

    // Vanilla Tilt
    function initTilt() {
      if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('.c-card'), { max: 5, speed: 400, glare: true, 'max-glare': 0.05 });
      } else setTimeout(initTilt, 100);
    }
    initTilt();
  }

  // ─── CANVAS CONSTELLATION ───
  if (isDesktop) {
    const canvas = document.getElementById('constellation');
    const ctx = canvas.getContext('2d');
    let w, h, particles = [];
    function initConst() {
      const hero = canvas.parentElement;
      w = canvas.width = hero.clientWidth;
      h = canvas.height = hero.clientHeight;
      particles = [];
      for (let i = 0; i < 60; i++) {
        particles.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35 });
      }
    }
    requestAnimationFrame(() => requestAnimationFrame(initConst));
    window.addEventListener('resize', initConst);
    function draw() {
      if (!w || !h) { requestAnimationFrame(draw); return; }
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(6,182,212,0.3)'; ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) { ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.strokeStyle = `rgba(6,182,212,${0.1 * (1 - dist / 140)})`; ctx.stroke(); }
        }
      }
      requestAnimationFrame(draw);
    }
    draw();
  }

  // ─── AMBIENT WIDGET ANIMATIONS ───
  // Bar chart: continuously shift bar heights like live data
  const barsEl = document.querySelector('.widget-bars');
  if (barsEl) {
    const bars = barsEl.querySelectorAll('.bar');
    const baseHeights = Array.from(bars).map(b => parseInt(b.style.height));
    setInterval(() => {
      bars.forEach((bar, i) => {
        const shift = (Math.random() - 0.5) * 25;
        const h = Math.max(15, Math.min(98, baseHeights[i] + shift));
        baseHeights[i] = h;
        bar.style.height = h + '%';
      });
    }, 2000);
  }

  // Log stream: cycle log lines with new entries
  const logEl = document.querySelector('.widget-log');
  if (logEl) {
    const methods = ['GET','POST','PUT','DELETE','PATCH'];
    const paths = ['/api/v2/users','/api/v2/events','/api/v2/config','/api/v2/routes','/api/v2/auth','/api/v2/metrics'];
    const sts = [{c:'200',cl:'var(--accent)'},{c:'201',cl:'var(--accent)'},{c:'204',cl:'var(--accent)'},{c:'429',cl:'#F59E0B'},{c:'500',cl:'#EF4444'}];
    setInterval(() => {
      const lines = logEl.querySelectorAll('div');
      if (lines.length >= 4) {
        lines[0].style.opacity = '0';
        lines[0].style.transform = 'translateY(-8px)';
        setTimeout(() => {
          lines[0].remove();
          const d = document.createElement('div');
          const now = new Date();
          const ts = `${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}:${now.getSeconds().toString().padStart(2,'0')}`;
          const m = methods[Math.floor(Math.random()*methods.length)];
          const p = paths[Math.floor(Math.random()*paths.length)];
          const s = sts[Math.floor(Math.random()*sts.length)];
          const lat = (Math.random()*3).toFixed(1);
          d.innerHTML = `<span class="ts">${ts}</span><span class="method">${m}</span> ${p} <span style="color:${s.cl}">${s.c}</span> ${lat}ms`;
          d.style.opacity = '0'; d.style.transform = 'translateY(4px)';
          logEl.appendChild(d);
          requestAnimationFrame(() => { d.style.opacity = '1'; d.style.transform = 'none'; });
        }, 300);
      }
    }, 2200);
  }

  // Node grid: randomly toggle active nodes
  const nodeGrid = document.querySelector('.widget-nodes');
  if (nodeGrid) {
    const nodes = nodeGrid.querySelectorAll('.node');
    setInterval(() => {
      const idx = Math.floor(Math.random() * nodes.length);
      const n = nodes[idx];
      if (!n.classList.contains('warn')) {
        n.classList.toggle('active');
      }
    }, 700);
  }

  // Auth values: randomly fluctuate
  const authVals = document.querySelectorAll('.bento-card:nth-child(2) .widget-row .val');
  if (authVals.length) {
    const bases = [12.4, 8.1, 247];
    setInterval(() => {
      authVals.forEach((v, i) => {
        if (v.classList.contains('warn')) {
          const n = Math.max(200, Math.min(350, bases[i] + Math.floor((Math.random()-0.5)*40)));
          bases[i] = n; v.textContent = n;
        } else {
          const shift = (Math.random()-0.5)*2;
          bases[i] = Math.max(1, bases[i] + shift);
          v.textContent = bases[i].toFixed(1) + 'K/s';
        }
      });
    }, 1800);
  }

  // Throughput header value fluctuation
  const throughputEl = document.querySelector('.bento-card:nth-child(1) .widget-header span:last-child');
  if (throughputEl) {
    setInterval(() => {
      const v = (2 + Math.random() * 0.3).toFixed(2);
      throughputEl.textContent = v + ' TB/s';
    }, 3000);
  }

  // Dashboard stat values: subtle fluctuation
  const dashStats = document.querySelectorAll('.ui-dash .stat-card .v');
  if (dashStats.length >= 4) {
    setInterval(() => {
      dashStats[0].textContent = (2.0 + Math.random()*0.3).toFixed(1) + 'B';
      dashStats[1].textContent = (0.3 + Math.random()*0.2).toFixed(1) + 'ms';
      dashStats[2].textContent = (99.98 + Math.random()*0.02).toFixed(2) + '%';
      const nodes = 210 + Math.floor(Math.random()*6);
      dashStats[3].textContent = nodes;
    }, 2500);
  }

  // Edge map status bar: fluctuate metrics
  const edgeTexts = document.querySelectorAll('.ui-map svg text');
  if (edgeTexts.length) {
    const latencyEl = Array.from(edgeTexts).find(t => t.textContent.includes('avg latency'));
    const throughEl = Array.from(edgeTexts).find(t => t.textContent.includes('throughput'));
    if (latencyEl && throughEl) {
      setInterval(() => {
        latencyEl.textContent = 'avg latency: ' + (2.8 + Math.random()*1).toFixed(1) + 'ms';
        throughEl.textContent = 'throughput: ' + (2 + Math.random()*0.3).toFixed(2) + ' TB/s';
      }, 3000);
    }
  }

  // Threat feed: cycle lines in security dashboard
  const feedEl = document.querySelector('.threat-feed');
  if (feedEl) {
    const threats = [
      {tag:'block',text:'SQL injection attempt'},{tag:'block',text:'Brute force /api/auth'},
      {tag:'warn',text:'10K+ req/min throttled'},{tag:'block',text:'XSS payload in header'},
      {tag:'allow',text:'mTLS verified request'},{tag:'block',text:'Invalid JWT signature'},
      {tag:'warn',text:'Port scan detected'},{tag:'allow',text:'OAuth2 token refresh'},
      {tag:'block',text:'Path traversal blocked'},{tag:'block',text:'SSRF attempt detected'},
      {tag:'warn',text:'Rate limit near threshold'},{tag:'allow',text:'API key validated'},
      {tag:'block',text:'Bot signature matched'},{tag:'block',text:'Credential stuffing'}
    ];
    const ips = ['203.0.113.','198.51.100.','192.0.2.','10.0.','172.16.','internal'];
    setInterval(() => {
      const lines = feedEl.querySelectorAll('.feed-line');
      if (lines.length >= 7) {
        lines[0].style.opacity = '0'; lines[0].style.transform = 'translateX(-10px)';
        lines[0].style.transition = 'opacity 0.3s, transform 0.3s';
        setTimeout(() => {
          lines[0].remove();
          const d = document.createElement('div'); d.className = 'feed-line';
          const t = threats[Math.floor(Math.random()*threats.length)];
          const ip = t.tag === 'allow' ? 'internal' : ips[Math.floor(Math.random()*4)] + Math.floor(Math.random()*255);
          d.innerHTML = `<span class="tag ${t.tag}">${t.tag === 'block' ? 'BLOCK' : t.tag === 'warn' ? 'RATE' : 'PASS'}</span> ${t.text} <span class="ip">${ip}</span>`;
          d.style.opacity = '0'; d.style.transform = 'translateX(10px)';
          d.style.transition = 'opacity 0.3s, transform 0.3s';
          feedEl.appendChild(d);
          requestAnimationFrame(() => { d.style.opacity = '1'; d.style.transform = 'none'; });
        }, 300);
      }
    }, 1800);
  }

  // Hero app panel — cycle log entries
  const heroLog = document.querySelector('.app-panel .panel-log');
  if (heroLog) {
    const methods = ['GET','POST','PUT','DELETE'];
    const paths = ['/api/users','/api/auth','/api/config','/api/events','/api/pay','/api/search','/api/hooks'];
    const statuses = [{c:'200',cl:'s2'},{c:'201',cl:'s2'},{c:'200',cl:'s2'},{c:'429',cl:'s4'},{c:'200',cl:'s2'}];
    setInterval(() => {
      const entries = heroLog.querySelectorAll('.log-entry');
      if (entries.length >= 6) {
        entries[0].style.opacity = '0';
        entries[0].style.transition = 'opacity 0.2s';
        setTimeout(() => {
          entries[0].remove();
          const e = document.createElement('div'); e.className = 'log-entry';
          const now = new Date();
          const ts = `${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}:${now.getSeconds().toString().padStart(2,'0')}`;
          const m = methods[Math.floor(Math.random()*methods.length)];
          const p = paths[Math.floor(Math.random()*paths.length)];
          const s = statuses[Math.floor(Math.random()*statuses.length)];
          e.innerHTML = `<span class="log-time">${ts}</span><span class="log-method">${m}</span>${p}<span class="log-status ${s.cl}">${s.c}</span>`;
          e.style.opacity = '0';
          heroLog.appendChild(e);
          requestAnimationFrame(() => { e.style.transition = 'opacity 0.3s'; e.style.opacity = '1'; });
        }, 200);
      }
    }, 1800);
  }
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="scroll-progress" id="scrollProgress"></div>

<nav className="nav">
<div className="nav-inner">
<a className="nav-logo" href="#">
Meridian
    </a>
<div className="nav-links">
<a href="#">Product</a>
<a href="#">Pricing</a>
<a href="#">Docs</a>
<a href="#">Blog</a>
<a href="#">Changelog</a>
<a className="nav-cta" href="#">Sign up free</a>
</div>
<div className="hamburger" onclick="this.classList.toggle('open');document.getElementById('mm').classList.toggle('open')">
<span></span><span></span><span></span>
</div>
</div>
</nav>
<div className="mobile-menu" id="mm">
<a href="#" onclick="document.getElementById('mm').classList.remove('open');document.querySelector('.hamburger').classList.remove('open')">Product</a>
<a href="#" onclick="document.getElementById('mm').classList.remove('open');document.querySelector('.hamburger').classList.remove('open')">Pricing</a>
<a href="#" onclick="document.getElementById('mm').classList.remove('open');document.querySelector('.hamburger').classList.remove('open')">Docs</a>
<a href="#" onclick="document.getElementById('mm').classList.remove('open');document.querySelector('.hamburger').classList.remove('open')">Blog</a>
<a href="#" onclick="document.getElementById('mm').classList.remove('open');document.querySelector('.hamburger').classList.remove('open')">Changelog</a>
<a className="nav-cta" href="#" style={{marginTop: '16px'}}>Sign up free</a>
</div>

<section className="hero">
<div className="hero-aurora">
<div className="blob blob-1"></div>
<div className="blob blob-2"></div>
<div className="blob blob-3"></div>
</div>
<div className="hero-morph"></div>
<canvas className="hero-canvas" id="constellation"></canvas>

<div className="meteors">
<div className="meteor" style={{top: '-5%', right: '15%', animationDuration: '4s', animationDelay: '0.5s'}}></div>
<div className="meteor" style={{top: '-8%', right: '35%', animationDuration: '5s', animationDelay: '3s'}}></div>
<div className="meteor" style={{top: '-3%', right: '55%', animationDuration: '4.5s', animationDelay: '6s'}}></div>
<div className="meteor" style={{top: '-10%', right: '25%', animationDuration: '5.5s', animationDelay: '9s'}}></div>
<div className="meteor" style={{top: '-6%', right: '70%', animationDuration: '4s', animationDelay: '12s'}}></div>
<div className="meteor" style={{top: '-4%', right: '45%', animationDuration: '4.8s', animationDelay: '15s'}}></div>
</div>
<div className="hero-content">
<h1><span data-splitting="">One gateway to</span><br/>
<span className="flip-words">
<span>rule them all</span>
<span>ship faster</span>
<span>scale globally</span>
<span>sleep better</span>
<span>rule them all</span>
</span>
</h1>
<p className="subtitle">Route, secure, and observe every API call across your stack. Replace fragmented tooling with a single unified gateway — sub-millisecond latency at any scale.</p>
<div className="hero-ctas">
<a className="cta-primary ripple" href="#">Get started free <svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></a>
<a className="cta-glass ripple" href="#"><svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Watch demo</a>
</div>
</div>
</section>

<div className="hero-app-wrap">
<div className="hero-app">
<div className="app-chrome">
<div className="dots"><span></span><span></span><span></span></div>
<div className="url-bar"><span className="lock">🔒</span> app.meridian.dev/dashboard/routes</div>
<div className="chrome-actions">
<span><svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path></svg></span>
<span><svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg></span>
</div>
</div>
<div className="app-layout">

<div className="app-sidebar">
<div className="sb-item active"><svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="7" width="7" x="3" y="3"></rect><rect height="7" width="7" x="14" y="3"></rect><rect height="7" width="7" x="14" y="14"></rect><rect height="7" width="7" x="3" y="14"></rect></svg></div>
<div className="sb-item"><svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div>
<div className="sb-item"><svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
<div className="sb-item"><svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22 6 12 13 2 6"></polyline></svg></div>
<div className="sb-sep"></div>
<div className="sb-item"><svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></div>
</div>

<div className="app-main">
<div className="main-header">
<div className="breadcrumb">Dashboard <span style={{opacity: '0.3'}}>›</span> Routes <span style={{opacity: '0.3'}}>›</span> <span className="active">Production</span></div>
</div>
<div className="main-stats">
<div className="ms"><div className="ms-val">2.1B</div><div className="ms-lbl">Requests today</div><div className="ms-change">↑ 12.4%</div></div>
<div className="ms"><div className="ms-val">0.4ms</div><div className="ms-lbl">p99 Latency</div><div className="ms-change">↓ 8.2%</div></div>
<div className="ms"><div className="ms-val">99.99%</div><div className="ms-lbl">Success rate</div><div className="ms-change">↑ 0.01%</div></div>
<div className="ms"><div className="ms-val">213</div><div className="ms-lbl">Active nodes</div><div className="ms-change">↑ 3</div></div>
</div>
<table className="route-table">
<thead><tr><th>Route</th><th>Method</th><th>Upstream</th><th>p99</th><th>Req/s</th><th>Status</th></tr></thead>
<tbody>
<tr><td className="path">/api/v2/users</td><td><span className="method get">GET</span></td><td>users-svc</td><td className="latency">0.8ms</td><td className="rps">3,241</td><td><span className="status-dot ok"></span>Healthy</td></tr>
<tr><td className="path">/api/v2/auth/token</td><td><span className="method post">POST</span></td><td>auth-svc</td><td className="latency">1.2ms</td><td className="rps">1,847</td><td><span className="status-dot ok"></span>Healthy</td></tr>
<tr><td className="path">/api/v2/payments</td><td><span className="method post">POST</span></td><td>pay-svc</td><td className="latency">2.1ms</td><td className="rps">892</td><td><span className="status-dot ok"></span>Healthy</td></tr>
<tr><td className="path">/api/v2/events</td><td><span className="method post">POST</span></td><td>events-svc</td><td className="latency">0.4ms</td><td className="rps">8,412</td><td><span className="status-dot ok"></span>Healthy</td></tr>
<tr><td className="path">/api/v2/config</td><td><span className="method get">GET</span></td><td>config-svc</td><td className="latency">0.3ms</td><td className="rps">524</td><td><span className="status-dot ok"></span>Healthy</td></tr>
<tr><td className="path">/api/v2/webhooks</td><td><span className="method put">PUT</span></td><td>webhook-svc</td><td className="latency">1.8ms</td><td className="rps">167</td><td><span className="status-dot warn"></span>Degraded</td></tr>
<tr><td className="path">/api/v2/search</td><td><span className="method get">GET</span></td><td>search-svc</td><td className="latency">3.4ms</td><td className="rps">2,103</td><td><span className="status-dot ok"></span>Healthy</td></tr>
</tbody>
</table>
</div>

<div className="app-panel">
<div className="panel-title">Traffic Overview</div>
<div className="panel-sub">Last 60 minutes</div>
<div className="mini-chart">
<svg preserveaspectratio="none" viewbox="0 0 240 60">
<defs><lineargradient id="mcg" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="rgba(6,182,212,0.2)"></stop><stop offset="100%" stop-color="rgba(6,182,212,0)"></stop></lineargradient></defs>
<path d="M0,50 C20,45 40,30 60,35 C80,40 100,20 120,25 C140,30 160,15 180,18 C200,21 220,10 240,8 L240,60 L0,60Z" fill="url(#mcg)"></path>
<path d="M0,50 C20,45 40,30 60,35 C80,40 100,20 120,25 C140,30 160,15 180,18 C200,21 220,10 240,8" fill="none" stroke="var(--accent)" strokeWidth="1.5"></path>
</svg>
</div>
<div className="panel-metrics">
<div className="pm"><span className="pm-lbl">Error rate</span><span className="pm-val green">0.02%</span></div>
<div className="pm"><span className="pm-lbl">Active conns</span><span className="pm-val">14,281</span></div>
<div className="pm"><span className="pm-lbl">Cache hit</span><span className="pm-val green">94.2%</span></div>
<div className="pm"><span className="pm-lbl">Bandwidth</span><span className="pm-val">2.16 TB/s</span></div>
<div className="pm"><span className="pm-lbl">Throttled</span><span className="pm-val warn">23</span></div>
</div>
<div className="panel-log">
<div className="panel-log-title">Live requests</div>
<div className="log-entry"><span className="log-time">14:02:41</span><span className="log-method">GET</span>/api/users<span className="log-status s2">200</span></div>
<div className="log-entry"><span className="log-time">14:02:41</span><span className="log-method">POST</span>/api/auth<span className="log-status s2">201</span></div>
<div className="log-entry"><span className="log-time">14:02:42</span><span className="log-method">GET</span>/api/config<span className="log-status s2">200</span></div>
<div className="log-entry"><span className="log-time">14:02:42</span><span className="log-method">PUT</span>/api/hooks<span className="log-status s4">429</span></div>
<div className="log-entry"><span className="log-time">14:02:43</span><span className="log-method">GET</span>/api/events<span className="log-status s2">200</span></div>
<div className="log-entry"><span className="log-time">14:02:43</span><span className="log-method">POST</span>/api/pay<span className="log-status s2">201</span></div>
</div>
</div>
</div>
<div className="app-statusbar">
<span className="status-live">All systems operational</span>
<span className="sep"></span>
<span>213 nodes connected</span>
<span className="sep"></span>
<span>Last sync: 2s ago</span>
<span style={{marginLeft: 'auto'}}>v3.2.1</span>
</div>
</div>
</div>

<section className="logo-bar">
<div className="logo-bar-label">Trusted by engineering teams at</div>
<div className="logo-wrap">
<div className="logo-track">
<span>Stripe</span><span>Vercel</span><span>Shopify</span><span>Datadog</span><span>Cloudflare</span><span>Linear</span><span>Notion</span><span>Figma</span><span>GitLab</span><span>Supabase</span><span>PlanetScale</span><span>Railway</span>
<span>Stripe</span><span>Vercel</span><span>Shopify</span><span>Datadog</span><span>Cloudflare</span><span>Linear</span><span>Notion</span><span>Figma</span><span>GitLab</span><span>Supabase</span><span>PlanetScale</span><span>Railway</span>
</div>
</div>
</section>

<section className="bento dot-bg">
<div className="section-glow"></div>
<div className="wrap">
<div className="section-head reveal">
<div className="eyebrow">Why Meridian</div>
<h2 className="text-reveal">Everything your APIs need.<br/><span className="grad">Nothing they don't.</span></h2>
<p>Replace your patchwork of proxies, WAFs, and rate limiters with one unified control plane.</p>
</div>
<div className="bento-grid spotlight-container">

<div className="bento-card reveal">
<h3>Sub-Millisecond Routing</h3>
<p>Content-based routing, weighted load balancing, and canary deployments — all at the edge.</p>
<div className="card-widget">
<div className="card-widget-inner">
<div className="widget-header"><span className="live">Live View</span><span>2.16 TB/s</span></div>
<div className="widget-bars">
<div className="bar" style={{height: '35%'}}></div><div className="bar" style={{height: '55%'}}></div><div className="bar" style={{height: '45%'}}></div>
<div className="bar" style={{height: '70%'}}></div><div className="bar" style={{height: '60%'}}></div><div className="bar" style={{height: '80%'}}></div>
<div className="bar" style={{height: '50%'}}></div><div className="bar" style={{height: '90%'}}></div><div className="bar" style={{height: '75%'}}></div>
<div className="bar" style={{height: '65%'}}></div><div className="bar" style={{height: '85%'}}></div><div className="bar" style={{height: '40%'}}></div>
<div className="bar" style={{height: '60%'}}></div><div className="bar" style={{height: '95%'}}></div><div className="bar" style={{height: '70%'}}></div>
</div>
</div>
</div>
</div>

<div className="bento-card reveal">
<h3>Zero Trust Auth</h3>
<p>OAuth 2.0, JWT, mTLS, and bot protection baked into every request path.</p>
<div className="card-widget">
<div className="card-widget-inner">
<div className="widget-header"><span className="live">Shield Active</span><span>94% CONF</span></div>
<div className="widget-row"><span className="label">JWT Validated</span><span className="val">12.4K/s</span></div>
<div className="widget-row"><span className="label">mTLS Handshakes</span><span className="val">8.1K/s</span></div>
<div className="widget-row"><span className="label">Bot Score &gt; 0.9</span><span className="val warn">247</span></div>
<div className="widget-alert threat">Spike in unauthorized access — 3 IPs blocked</div>
</div>
</div>
</div>

<div className="bento-card reveal">
<h3>99.99% SLA</h3>
<p>Global edge deployment with automatic failover and zero-downtime upgrades.</p>
<div className="card-widget">
<div className="card-widget-inner">
<div className="widget-header"><span className="live">All Systems</span><span>Operational</span></div>
<div className="widget-row"><span className="label">US-East</span><span className="val">99.99%</span></div>
<div className="widget-progress"><div className="fill" style={{width: '99.9%'}}></div></div>
<div className="widget-row"><span className="label">EU-West</span><span className="val">100%</span></div>
<div className="widget-progress"><div className="fill" style={{width: '100%'}}></div></div>
<div className="widget-row"><span className="label">AP-South</span><span className="val warn">99.97%</span></div>
<div className="widget-progress"><div className="fill warn" style={{width: '99.9%'}}></div></div>
</div>
</div>
</div>

<div className="bento-card reveal">
<h3>150+ Plugins</h3>
<p>Extend with JS, Go, or Rust. Transform requests, inject headers, shape responses.</p>
<div className="card-widget">
<div className="card-widget-inner">
<div className="widget-header"><span>Registry</span><span>153 available</span></div>
<div className="widget-plugin"><span className="pill">RS</span><span className="label" style={{flex: '1', color: 'var(--text-muted)'}}>rate-limiter</span><span style={{color: 'var(--text-dim)', fontSize: '0.6rem'}}>42K installs</span></div>
<div className="widget-plugin"><span className="pill">JS</span><span className="label" style={{flex: '1', color: 'var(--text-muted)'}}>cors-handler</span><span style={{color: 'var(--text-dim)', fontSize: '0.6rem'}}>38K installs</span></div>
<div className="widget-plugin"><span className="pill">GO</span><span className="label" style={{flex: '1', color: 'var(--text-muted)'}}>jwt-validator</span><span style={{color: 'var(--text-dim)', fontSize: '0.6rem'}}>31K installs</span></div>
<div className="widget-plugin"><span className="pill">RS</span><span className="label" style={{flex: '1', color: 'var(--text-muted)'}}>cache-layer</span><span style={{color: 'var(--text-dim)', fontSize: '0.6rem'}}>27K installs</span></div>
</div>
</div>
</div>

<div className="bento-card reveal">
<h3>Real-Time Observability</h3>
<p>Every request logged and traced. Live dashboards, distributed tracing, anomaly alerts.</p>
<div className="card-widget">
<div className="card-widget-inner">
<div className="widget-header"><span className="live">Stream</span><span>1.2M req/min</span></div>
<div className="widget-log">
<div><span className="ts">14:02:41</span><span className="method">GET</span> /api/v2/users <span style={{color: 'var(--accent)'}}>200</span> 0.8ms</div>
<div><span className="ts">14:02:41</span><span className="method">POST</span> /api/v2/events <span style={{color: 'var(--accent)'}}>201</span> 1.2ms</div>
<div><span className="ts">14:02:42</span><span className="method">GET</span> /api/v2/config <span style={{color: 'var(--accent)'}}>200</span> 0.3ms</div>
<div><span className="ts">14:02:42</span><span className="method">PUT</span> /api/v2/routes <span style={{color: '#F59E0B'}}>429</span> 0.1ms</div>
</div>
</div>
</div>
</div>

<div className="bento-card reveal">
<h3>Global Edge Network</h3>
<p>Deploy to 200+ edge locations. Sub-10ms response for every user, everywhere.</p>
<div className="card-widget">
<div className="card-widget-inner">
<div className="widget-header"><span className="live">Edge Nodes</span><span>213 active</span></div>
<div className="widget-nodes">
<div className="node active"></div><div className="node active"></div><div className="node"></div><div className="node active"></div><div className="node active"></div><div className="node"></div><div className="node active"></div><div className="node active"></div>
<div className="node active"></div><div className="node"></div><div className="node active"></div><div className="node active"></div><div className="node warn"></div><div className="node active"></div><div className="node active"></div><div className="node"></div>
<div className="node"></div><div className="node active"></div><div className="node active"></div><div className="node active"></div><div className="node active"></div><div className="node"></div><div className="node active"></div><div className="node active"></div>
<div className="node active"></div><div className="node active"></div><div className="node"></div><div className="node active"></div><div className="node active"></div><div className="node active"></div><div className="node"></div><div className="node active"></div>
</div>
<div className="widget-row" style={{marginTop: '8px'}}><span className="label">Avg latency</span><span className="val">3.2ms</span></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="showcase dot-bg">
<div className="section-glow"></div>
<div className="showcase-head">
<div className="section-head reveal">
<div className="eyebrow">Product</div>
<h2 className="text-reveal">See Meridian <span className="grad">in action</span></h2>
<p>From config-as-code to real-time dashboards — a visual tour of the platform.</p>
</div>
<div className="carousel-nav reveal">
<button className="carousel-btn magnetic" data-dir="-1" data-target="showcase-track"><svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M19 12H5M12 19l-7-7 7-7"></path></svg></button>
<button className="carousel-btn magnetic" data-dir="1" data-target="showcase-track"><svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></button>
</div>
</div>
<div className="carousel-wrap">
<div className="carousel-track spotlight-container" id="showcase-track">

<div className="c-card wide">
<div className="product-ui">
<div className="ui-bar"><div className="dots"><span></span><span></span><span></span></div><span className="tab active">Overview</span><span className="tab">Latency</span><span className="tab">Errors</span></div>
<div className="ui-body ui-dash">
<div className="sidebar"><i className="active"></i><i></i><i></i><i></i><i></i></div>
<div className="main">
<div className="stat-row">
<div className="stat-card"><div className="v">2.1B</div><div className="l">Requests today</div></div>
<div className="stat-card"><div className="v">0.4ms</div><div className="l">p99 Latency</div></div>
<div className="stat-card"><div className="v">99.99%</div><div className="l">Success rate</div></div>
<div className="stat-card"><div className="v">213</div><div className="l">Edge nodes</div></div>
</div>
<div className="chart-box">
<svg preserveaspectratio="none" viewbox="0 0 560 120">
<defs>
<lineargradient id="cg1" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="rgba(6,182,212,0.3)"></stop><stop offset="100%" stop-color="rgba(6,182,212,0)"></stop></lineargradient>
</defs>

<line stroke="rgba(6,182,212,0.05)" strokeWidth="0.5" x1="0" x2="560" y1="30" y2="30"></line>
<line stroke="rgba(6,182,212,0.05)" strokeWidth="0.5" x1="0" x2="560" y1="60" y2="60"></line>
<line stroke="rgba(6,182,212,0.05)" strokeWidth="0.5" x1="0" x2="560" y1="90" y2="90"></line>

<path className="chart-area-draw" d="M0,95 C40,90 80,70 120,65 C160,60 200,45 240,50 C280,55 320,35 360,30 C400,25 440,40 480,35 C520,30 550,25 560,20 L560,120 L0,120Z" fill="url(#cg1)"></path>

<path className="chart-line-draw" d="M0,95 C40,90 80,70 120,65 C160,60 200,45 240,50 C280,55 320,35 360,30 C400,25 440,40 480,35 C520,30 550,25 560,20" fill="none" stroke="var(--accent)" strokeWidth="1.5"></path>

<path d="M0,110 C40,108 80,105 120,107 C160,109 200,106 240,108 C280,110 320,107 360,105 C400,108 440,106 480,109 C520,107 550,108 560,106" fill="none" stroke="rgba(245,158,11,0.4)" stroke-dasharray="3 2" strokeWidth="1"></path>

<circle cx="120" cy="65" fill="var(--accent)" r="2.5"></circle>
<circle cx="360" cy="30" fill="var(--accent)" r="2.5"></circle>
<circle cx="480" cy="35" fill="var(--accent)" r="2.5"></circle>
</svg>
<div className="chart-label"><span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>Now</span></div>
</div>
</div>
</div>
</div>
<div className="overlay"><h3>Live Analytics Dashboard</h3><p>Real-time request volume, latency percentiles, error rates, and geo distribution.</p></div>
</div>

<div className="c-card narrow">
<div className="product-ui">
<div className="ui-bar"><div className="dots"><span></span><span></span><span></span></div><span className="tab active">gateway.yml</span><span className="tab">routes.yml</span></div>
<div className="ui-body ui-code">
<div className="gutter"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span></div>
<div className="lines">
<div><span className="c"># Meridian Gateway Config</span></div>
<div><span className="k">version</span><span className="p">:</span> <span className="s">"3.1"</span></div>
<div><span className="k">gateway</span><span className="p">:</span></div>
<div>  <span className="k">name</span><span className="p">:</span> <span className="s">"production"</span></div>
<div>  <span className="k">edge</span><span className="p">:</span> <span className="b">true</span></div>
<div>  <span className="k">regions</span><span className="p">:</span> <span className="s">"global"</span></div>
<div></div>
<div><span className="k">routes</span><span className="p">:</span></div>
<div>  - <span className="k">path</span><span className="p">:</span> <span className="s">"/api/v2/*"</span></div>
<div>    <span className="k">upstream</span><span className="p">:</span> <span className="s">"core-api"</span></div>
<div>    <span className="k">timeout</span><span className="p">:</span> <span className="n">3000</span></div>
<div>    <span className="k">retries</span><span className="p">:</span> <span className="n">3</span></div>
<div>    <span className="k">plugins</span><span className="p">:</span></div>
<div>      - <span className="s">rate-limiter</span></div>
<div>      - <span className="s">jwt-validator</span></div>
<div>      - <span className="s">cors-handler</span></div>
<div></div>
<div><span className="k">security</span><span className="p">:</span></div>
<div>  <span className="k">mtls</span><span className="p">:</span> <span className="b">true</span></div>
<div>  <span className="k">bot_protection</span><span className="p">:</span> <span className="s">"aggressive"</span></div>
<div>  <span className="k">rate_limit</span><span className="p">:</span> <span className="n">10000</span><span className="cursor"></span></div>
</div>
</div>
</div>
<div className="overlay"><h3>Config as Code</h3><p>Define routes, policies, and transforms in YAML with git-native workflows.</p></div>
</div>

<div className="c-card wide">
<div className="product-ui">
<div className="ui-bar"><div className="dots"><span></span><span></span><span></span></div><span className="tab active">Edge Network</span><span className="tab">Traffic</span></div>
<div className="ui-body ui-map">
<div className="grid-bg"></div>
<svg preserveaspectratio="xMidYMid meet" viewbox="0 0 620 300">

<line className="edge-line" x1="150" x2="300" y1="100" y2="120"></line>
<line className="edge-line" x1="300" x2="420" y1="120" y2="85"></line>
<line className="edge-line" x1="300" x2="350" y1="120" y2="170"></line>
<line className="edge-line" x1="420" x2="500" y1="85" y2="130"></line>
<line className="edge-line" x1="150" x2="180" y1="100" y2="200"></line>
<line className="edge-line" x1="300" x2="420" y1="120" y2="180"></line>
<line className="edge-line" x1="500" x2="530" y1="130" y2="200"></line>
<line className="edge-line" x1="350" x2="420" y1="170" y2="180"></line>

<circle className="edge-pulse" cx="120" cy="90" fill="var(--accent)" style={{animationDelay: '0s'}}></circle>
<circle className="edge-ring" cx="120" cy="90" fill="none" stroke="var(--accent)" strokeWidth="0.5"></circle>
<circle className="edge-active" cx="150" cy="100" r="3"></circle>
<circle className="edge-active" cx="140" cy="120" opacity="0.5" r="2"></circle>
<circle className="edge-active" cx="170" cy="85" opacity="0.5" r="2"></circle>

<circle className="edge-pulse" cx="180" cy="200" fill="var(--accent)" style={{animationDelay: '0.5s'}}></circle>
<circle className="edge-active" cx="190" cy="220" opacity="0.4" r="2"></circle>

<circle className="edge-pulse" cx="300" cy="90" fill="var(--accent)" style={{animationDelay: '0.3s'}}></circle>
<circle className="edge-ring" cx="300" cy="90" fill="none" stroke="var(--accent)" strokeWidth="0.5" style={{animationDelay: '0.3s'}}></circle>
<circle className="edge-active" cx="300" cy="120" r="3"></circle>
<circle className="edge-active" cx="280" cy="105" opacity="0.5" r="2"></circle>
<circle className="edge-active" cx="320" cy="110" opacity="0.5" r="2"></circle>
<circle className="edge-active" cx="350" cy="170" r="3"></circle>

<circle className="edge-pulse" cx="420" cy="85" fill="var(--accent)" style={{animationDelay: '0.7s'}}></circle>
<circle className="edge-ring" cx="420" cy="85" fill="none" stroke="var(--accent)" strokeWidth="0.5" style={{animationDelay: '0.7s'}}></circle>
<circle className="edge-active" cx="450" cy="100" opacity="0.5" r="2"></circle>
<circle className="edge-active" cx="420" cy="180" r="3"></circle>

<circle className="edge-pulse" cx="500" cy="130" fill="var(--accent)" style={{animationDelay: '1s'}}></circle>
<circle className="edge-active" cx="530" cy="200" r="3"></circle>
<circle className="edge-active" cx="550" cy="180" opacity="0.5" r="2"></circle>

<text fill="var(--text-dim)" fontFamily="Inter,sans-serif" fontSize="7" x="120" y="78">US-East</text>
<text fill="var(--text-dim)" fontFamily="Inter,sans-serif" fontSize="7" x="280" y="78">EU-West</text>
<text fill="var(--text-dim)" fontFamily="Inter,sans-serif" fontSize="7" x="400" y="73">AP-East</text>
<text fill="var(--text-dim)" fontFamily="Inter,sans-serif" fontSize="7" x="490" y="118">AP-South</text>
<text fill="var(--text-dim)" fontFamily="Inter,sans-serif" fontSize="7" x="170" y="190">SA</text>

<rect fill="rgba(16,17,27,0.6)" height="28" rx="4" stroke="rgba(6,182,212,0.06)" strokeWidth="0.5" width="580" x="20" y="260"></rect>
<text fill="var(--accent)" fontFamily="SF Mono,Fira Code,monospace" fontSize="7" font-weight="500" x="32" y="278">● 213 nodes active</text>
<text fill="var(--text-dim)" fontFamily="SF Mono,Fira Code,monospace" fontSize="7" x="170" y="278">avg latency: 3.2ms</text>
<text fill="var(--text-dim)" fontFamily="SF Mono,Fira Code,monospace" fontSize="7" x="340" y="278">throughput: 2.16 TB/s</text>
<text fill="#10B981" fontFamily="SF Mono,Fira Code,monospace" fontSize="7" x="500" y="278">all systems nominal</text>
</svg>
</div>
</div>
<div className="overlay"><h3>Edge Deployment</h3><p>Deploy gateways to 200+ edge locations for sub-10ms response times globally.</p></div>
</div>

<div className="c-card narrow">
<div className="product-ui">
<div className="ui-bar"><div className="dots"><span></span><span></span><span></span></div><span className="tab active">Security</span></div>
<div className="ui-body ui-sec">
<div className="score-area">
<svg viewbox="0 0 80 80">
<circle cx="40" cy="40" fill="none" r="34" stroke="rgba(6,182,212,0.1)" strokeWidth="4"></circle>
<circle cx="40" cy="40" fill="none" r="34" stroke="var(--accent)" stroke-dasharray="198 16" strokeLinecap="round" strokeWidth="4" transform="rotate(-90 40 40)"></circle>
<text fill="var(--accent)" fontFamily="Inter,sans-serif" fontSize="14" font-weight="700" text-anchor="middle" x="40" y="37">96</text>
<text fill="var(--text-dim)" fontFamily="Inter,sans-serif" fontSize="5" letter-spacing="0.1em" text-anchor="middle" text-transform="uppercase" x="40" y="48">SECURITY SCORE</text>
</svg>
</div>
<div className="items">
<div className="item"><span className="d ok"></span>mTLS Enforcement<span className="st ok">PASS</span></div>
<div className="item"><span className="d ok"></span>JWT Validation<span className="st ok">PASS</span></div>
<div className="item"><span className="d ok"></span>Rate Limiting<span className="st ok">ACTIVE</span></div>
<div className="item"><span className="d ok"></span>Bot Protection<span className="st ok">PASS</span></div>
<div className="item"><span className="d wn"></span>DDoS Shield<span className="st wn">ALERT</span></div>
<div className="item"><span className="d ok"></span>CORS Policy<span className="st ok">PASS</span></div>
<div className="item"><span className="d ok"></span>IP Allowlist<span className="st ok">PASS</span></div>
<div className="item"><span className="d ok"></span>SOC 2 Compliance<span className="st ok">VALID</span></div>
</div>
</div>
</div>
<div className="overlay"><h3>Security Controls</h3><p>mTLS, OAuth, JWT validation, rate limiting — configured in seconds.</p></div>
</div>

<div className="c-card wide">
<div className="product-ui">
<div className="ui-bar"><div className="dots"><span></span><span></span><span></span></div><span className="tab active">Mesh</span><span className="tab">Services</span><span className="tab">Traffic</span></div>
<div className="ui-body ui-mesh">
<svg preserveaspectratio="xMidYMid meet" viewbox="0 0 620 300">

<line className="mesh-line" x1="130" x2="270" y1="80" y2="150"></line>
<line className="mesh-line" x1="130" x2="270" y1="200" y2="150"></line>
<line className="mesh-line" x1="350" x2="490" y1="150" y2="70"></line>
<line className="mesh-line" x1="350" x2="490" y1="150" y2="150"></line>
<line className="mesh-line" x1="350" x2="490" y1="150" y2="230"></line>

<circle className="mesh-dot mesh-dot-pulse" cx="200" cy="115" style={{animationDelay: '0.2s'}}></circle>
<circle className="mesh-dot mesh-dot-pulse" cx="200" cy="175" style={{animationDelay: '0.6s'}}></circle>
<circle className="mesh-dot mesh-dot-pulse" cx="420" cy="110" style={{animationDelay: '0.4s'}}></circle>
<circle className="mesh-dot mesh-dot-pulse" cx="420" cy="150" style={{animationDelay: '0.8s'}}></circle>
<circle className="mesh-dot mesh-dot-pulse" cx="420" cy="190" style={{animationDelay: '1.0s'}}></circle>

<rect className="mesh-box" height="50" width="90" x="40" y="55"></rect>
<text className="mesh-lbl" x="85" y="78"><tspan fill="var(--text-dim)" fontSize="6">☁</tspan> AWS</text>
<text className="mesh-metric" x="85" y="95">12 services</text>

<rect className="mesh-box" height="50" width="90" x="40" y="175"></rect>
<text className="mesh-lbl" x="85" y="198"><tspan fill="var(--text-dim)" fontSize="6">☁</tspan> GCP</text>
<text className="mesh-metric" x="85" y="215">8 services</text>

<rect className="mesh-hub" height="60" rx="10" width="120" x="250" y="120"></rect>
<text className="mesh-hub-lbl" x="310" y="147">MERIDIAN</text>
<text className="mesh-metric" fill="var(--accent)" x="310" y="162">unified control</text>

<rect className="mesh-box" height="50" width="110" x="460" y="45"></rect>
<text className="mesh-lbl" x="515" y="67">Users API</text>
<text className="mesh-metric" x="515" y="83">3.2K rps · 0.8ms</text>
<rect className="mesh-box" height="50" width="110" x="460" y="125"></rect>
<text className="mesh-lbl" x="515" y="147">Payments</text>
<text className="mesh-metric" x="515" y="163">1.1K rps · 2.1ms</text>
<rect className="mesh-box" height="50" width="110" x="460" y="205"></rect>
<text className="mesh-lbl" x="515" y="227">Analytics</text>
<text className="mesh-metric" x="515" y="243">8.4K rps · 0.4ms</text>

<text fill="var(--accent)" fontSize="8" opacity="0.5" x="195" y="108">→</text>
<text fill="var(--accent)" fontSize="8" opacity="0.5" x="195" y="182">→</text>
<text fill="var(--accent)" fontSize="8" opacity="0.5" x="415" y="103">→</text>
<text fill="var(--accent)" fontSize="8" opacity="0.5" x="415" y="153">→</text>
<text fill="var(--accent)" fontSize="8" opacity="0.5" x="415" y="198">→</text>
</svg>
</div>
</div>
<div className="overlay"><h3>Multi-Cloud Mesh</h3><p>Unified management across AWS, GCP, Azure, and on-prem.</p></div>
</div>
</div>
</div>
</section>

<section className="compare">
<div className="section-glow"></div>
<div className="wrap">
<div className="section-head reveal">
<div className="eyebrow">Comparison</div>
<h2 className="text-reveal">Meridian vs. <span className="grad">the rest</span></h2>
<p>Stop paying per-request premiums. Get everything you need in one gateway.</p>
</div>
<div className="compare-table reveal">
<table>
<thead><tr><th>Feature</th><th style={{color: 'var(--accent)'}}>Meridian</th><th>Kong</th><th>AWS API GW</th><th>Apigee</th></tr></thead>
<tbody>
<tr><td>p99 Latency</td><td className="highlight">0.4ms</td><td className="dim">8ms</td><td className="dim">29ms</td><td className="dim">15ms</td></tr>
<tr><td>Edge Locations</td><td className="highlight">200+</td><td className="dim">Self-hosted</td><td className="dim">22 regions</td><td className="dim">5 regions</td></tr>
<tr><td>Config as Code</td><td><span className="check">✓</span> YAML + GitOps</td><td><span className="check">✓</span> decK</td><td><span className="cross">✕</span> CloudFormation</td><td><span className="cross">✕</span> UI only</td></tr>
<tr><td>Built-in Analytics</td><td><span className="check">✓</span> Full traces</td><td><span className="cross">✕</span> Plugin</td><td><span className="cross">✕</span> CloudWatch</td><td><span className="check">✓</span> Limited</td></tr>
<tr><td>Custom Plugins</td><td className="highlight">JS, Go, Rust</td><td>Lua</td><td className="dim">Lambda only</td><td className="dim">Java</td></tr>
<tr><td>Multi-Cloud</td><td><span className="check">✓</span> Native</td><td><span className="check">✓</span> Manual</td><td><span className="cross">✕</span></td><td><span className="check">✓</span> Hybrid</td></tr>
<tr><td>Free Tier</td><td className="highlight">10M req/mo</td><td className="dim">OSS only</td><td className="dim">1M req/mo</td><td className="dim">Trial only</td></tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="sticky-section dot-bg">
<div className="section-glow"></div>
<div className="sticky-inner">

<div className="sticky-visual">
<div className="sticky-ui">
<div className="ui-bar"><div className="dots"><span></span><span></span><span></span></div><span className="tab active">Security</span><span className="tab">Compliance</span><span className="tab">Threats</span></div>
<div className="ui-body sec-dash">
<div className="shield-area">
<div className="shield-ring">
<svg viewbox="0 0 100 100">
<circle className="ring-bg" cx="50" cy="50" r="45"></circle>
<circle className="ring-fg" cx="50" cy="50" r="45"></circle>
</svg>
<div className="shield-icon"><svg fill="none" height="32" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="32"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg></div>
</div>
<div className="shield-label">All systems protected</div>
</div>
<div className="threat-feed">
<div className="threat-feed-title"><span className="live-dot"></span> Live Threat Feed</div>
<div className="feed-line"><span className="tag block">BLOCK</span> SQL injection attempt <span className="ip">203.0.113.42</span></div>
<div className="feed-line"><span className="tag block">BLOCK</span> Brute force /api/auth <span className="ip">198.51.100.7</span></div>
<div className="feed-line"><span className="tag warn">RATE</span> 10K+ req/min throttled <span className="ip">192.0.2.15</span></div>
<div className="feed-line"><span className="tag allow">PASS</span> mTLS verified request <span className="ip">internal</span></div>
<div className="feed-line"><span className="tag block">BLOCK</span> Invalid JWT signature <span className="ip">203.0.113.99</span></div>
<div className="feed-line"><span className="tag allow">PASS</span> OAuth2 token refresh <span className="ip">internal</span></div>
<div className="feed-line"><span className="tag warn">SCAN</span> Port scan detected <span className="ip">198.51.100.23</span></div>
</div>
<div className="compliance-row">
<div className="compliance-badge"><svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> SOC 2</div>
<div className="compliance-badge"><svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> HIPAA</div>
<div className="compliance-badge"><svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> GDPR</div>
<div className="compliance-badge"><svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> PCI DSS</div>
<div className="compliance-badge"><svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> ISO 27001</div>
</div>
</div>
</div>
</div>

<div className="sticky-text">
<div className="sticky-text-inner">
<div className="sticky-feature" data-sticky-idx="0">
<div className="feat-icon"><svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div>
<div className="eyebrow">Zero Trust</div>
<h3>End-to-End mTLS</h3>
<p>Automatic certificate rotation and pinning across all services. Zero trust from edge to origin — every connection encrypted, every identity verified.</p>
<div className="feat-stat"><svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> 100% encrypted connections</div>
</div>
<div className="sticky-feature" data-sticky-idx="1">
<div className="feat-icon"><svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
<div className="eyebrow">Authentication</div>
<h3>OAuth 2.0 + JWT at the Edge</h3>
<p>Validate tokens before they reach your services. Block bad actors at the perimeter — sub-millisecond auth that never touches your application code.</p>
<div className="feat-stat"><svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg> 0.2ms avg validation time</div>
</div>
<div className="sticky-feature" data-sticky-idx="2">
<div className="feat-icon"><svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></div>
<div className="eyebrow">Geo-Fencing</div>
<h3>Geo-Based Policies</h3>
<p>Block, route, or rate-limit based on country, ASN, or IP range. Data residency enforcement and compliance built into the infrastructure layer.</p>
<div className="feat-stat"><svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> 195 countries supported</div>
</div>
<div className="sticky-feature" data-sticky-idx="3">
<div className="feat-icon"><svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg></div>
<div className="eyebrow">Protection</div>
<h3>DDoS Shield &amp; Rate Limiting</h3>
<p>Automatic DDoS mitigation at the edge. Configurable rate limits per endpoint, per client, per API key — with intelligent burst handling.</p>
<div className="feat-stat"><svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> 2.4M threats blocked / month</div>
</div>
<div className="sticky-feature" data-sticky-idx="4">
<div className="feat-icon"><svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"></path><circle cx="12" cy="12" r="3"></circle></svg></div>
<div className="eyebrow">Intelligence</div>
<h3>Bot Detection &amp; WAF</h3>
<p>ML-powered bot detection that distinguishes real users from automated scrapers. WAF rules auto-update with zero-day vulnerability feeds in real-time.</p>
<div className="feat-stat"><svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> 99.7% bot detection accuracy</div>
</div>
<div className="sticky-feature" data-sticky-idx="5">
<div className="feat-icon"><svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path><circle cx="12" cy="16" r="1"></circle></svg></div>
<div className="eyebrow">Governance</div>
<h3>API Key Management</h3>
<p>Centralized key issuance, rotation, and revocation. Scoped permissions, usage analytics per key, and automatic rotation on compromise detection.</p>
<div className="feat-stat"><svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Auto-rotate on breach detection</div>
</div>
</div>
</div>
</div>
</section>

<section className="metrics">
<div className="metrics-wrap">
<div className="metrics-track">
<div className="metric-item"><span className="val">2B+</span><span className="label">Requests / day</span><span className="dot"></span></div>
<div className="metric-item"><span className="val">200+</span><span className="label">Edge locations</span><span className="dot"></span></div>
<div className="metric-item"><span className="val">0.4ms</span><span className="label">p99 Latency</span><span className="dot"></span></div>
<div className="metric-item"><span className="val">99.99%</span><span className="label">Uptime SLA</span><span className="dot"></span></div>
<div className="metric-item"><span className="val">83%</span><span className="label">Cost reduction</span><span className="dot"></span></div>
<div className="metric-item"><span className="val">150+</span><span className="label">Plugins</span><span className="dot"></span></div>
<div className="metric-item"><span className="val">2B+</span><span className="label">Requests / day</span><span className="dot"></span></div>
<div className="metric-item"><span className="val">200+</span><span className="label">Edge locations</span><span className="dot"></span></div>
<div className="metric-item"><span className="val">0.4ms</span><span className="label">p99 Latency</span><span className="dot"></span></div>
<div className="metric-item"><span className="val">99.99%</span><span className="label">Uptime SLA</span><span className="dot"></span></div>
<div className="metric-item"><span className="val">83%</span><span className="label">Cost reduction</span><span className="dot"></span></div>
<div className="metric-item"><span className="val">150+</span><span className="label">Plugins</span><span className="dot"></span></div>
</div>
</div>
</section>

<section className="tabs-section dot-bg">
<div className="section-glow"></div>
<div className="wrap">
<div className="section-head reveal">
<div className="eyebrow">Platform</div>
<h2 className="text-reveal">Built for every <span className="shimmer-text">workflow</span></h2>
<p>Whether you're deploying microservices or managing a monolith, Meridian adapts.</p>
</div>
<div className="tab-buttons reveal">
<button className="tab-btn active" data-tab="routing">Routing</button>
<button className="tab-btn" data-tab="plugins">Plugins</button>
<button className="tab-btn" data-tab="multicloud">Multi-Cloud</button>
</div>
<div className="tab-panels">
<div className="tab-panel active" id="tab-routing">
<div className="tab-panel-text reveal"><h3>Intelligent Routing Engine</h3><p>Content-based routing, load balancing, canary deployments, and circuit breaking — all configured in YAML or our visual editor.</p>
<ul><li><svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Path, header, and body-based routing</li><li><svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Weighted round-robin with auto failover</li><li><svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Canary deployments with real-time rollback</li><li><svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Circuit breaking with configurable thresholds</li></ul>
</div>
<div className="tab-panel-visual reveal">
<div className="product-ui">
<div className="ui-bar"><div className="dots"><span></span><span></span><span></span></div><span className="tab active">Routes</span><span className="tab">Rules</span></div>
<div className="ui-body ui-flow">
<svg preserveaspectratio="xMidYMid meet" viewbox="0 0 440 280">
<defs><marker id="arrowhead" markerheight="4" markerwidth="6" orient="auto" refx="6" refy="2"><polygon fill="rgba(6,182,212,0.3)" points="0 0, 6 2, 0 4"></polygon></marker><marker id="arrowhead-active" markerheight="4" markerwidth="6" orient="auto" refx="6" refy="2"><polygon fill="var(--accent)" points="0 0, 6 2, 0 4"></polygon></marker></defs>

<rect className="flow-box" height="40" width="80" x="10" y="110"></rect><text className="flow-lbl" x="50" y="132">Requests</text><text className="flow-sub" x="50" y="144">12.4K/s</text>

<rect className="flow-box-accent" height="80" width="120" x="150" y="90"></rect><text className="flow-lbl" fill="var(--accent)" fontSize="10" font-weight="600" x="210" y="120">MERIDIAN</text><text className="flow-sub" x="210" y="135">routing engine</text><text className="flow-sub" x="210" y="148">0.4ms p99</text>

<line className="flow-arrow-active" x1="90" x2="148" y1="130" y2="130"></line>

<rect className="flow-box" height="36" width="100" x="330" y="30"></rect><text className="flow-lbl" x="380" y="48">Users API</text><text className="flow-sub" x="380" y="58">path: /api/users/*</text>
<rect className="flow-box" height="36" width="100" x="330" y="85"></rect><text className="flow-lbl" x="380" y="103">Auth Service</text><text className="flow-sub" x="380" y="113">path: /api/auth/*</text>
<rect className="flow-box" height="36" width="100" x="330" y="140"></rect><text className="flow-lbl" x="380" y="158">Payments</text><text className="flow-sub" x="380" y="168">path: /api/pay/*</text>
<rect className="flow-box" height="36" width="100" x="330" y="195"></rect><text className="flow-lbl" x="380" y="213">Analytics</text><text className="flow-sub" x="380" y="223">path: /api/events/*</text>

<line className="flow-arrow" x1="270" x2="328" y1="110" y2="48"></line><line className="flow-arrow-active" x1="270" x2="328" y1="120" y2="103"></line>
<line className="flow-arrow" x1="270" x2="328" y1="140" y2="158"></line><line className="flow-arrow" x1="270" x2="328" y1="150" y2="213"></line>

<rect className="flow-box" height="55" rx="4" width="110" x="155" y="200"></rect><text className="flow-sub" fill="var(--text-muted)" x="210" y="215">Active Rules</text>
<text className="flow-sub" x="210" y="228">canary: v2 → 15%</text><text className="flow-sub" x="210" y="240">circuit-break: 5xx &gt; 5%</text><text className="flow-sub" x="210" y="252">failover: us-east → eu</text>
</svg>
</div>
</div>
</div>
</div>
<div className="tab-panel" id="tab-plugins">
<div className="tab-panel-text"><h3>Extensible Plugin System</h3><p>Write edge functions in JavaScript, Go, or Rust with under 10ms cold start. Browse 150+ community plugins or build your own.</p>
<ul><li><svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Request/response transforms</li><li><svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Declarative policy engine (CORS, caching)</li><li><svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> One-click plugin registry deployment</li><li><svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Hot-reload without gateway restart</li></ul>
</div>
<div className="tab-panel-visual">
<div className="product-ui">
<div className="ui-bar"><div className="dots"><span></span><span></span><span></span></div><span className="tab active">Registry</span><span className="tab">Installed</span></div>
<div className="ui-body ui-plugins">
<div className="plugin-grid">
<div className="p-card"><div className="p-name"><span className="p-pill">RS</span> rate-limiter</div><div className="p-desc">Token bucket and sliding window rate limiting per IP, key, or header.</div><div className="p-meta"><span className="dl">42K installs</span><span>v3.2.1</span></div></div>
<div className="p-card"><div className="p-name"><span className="p-pill">JS</span> cors-handler</div><div className="p-desc">Configurable CORS headers with wildcard and credentials support.</div><div className="p-meta"><span className="dl">38K installs</span><span>v2.1.0</span></div></div>
<div className="p-card"><div className="p-name"><span className="p-pill">GO</span> jwt-validator</div><div className="p-desc">RFC 7519 JWT validation with JWKS rotation and claim assertions.</div><div className="p-meta"><span className="dl">31K installs</span><span>v4.0.3</span></div></div>
<div className="p-card"><div className="p-name"><span className="p-pill">RS</span> cache-layer</div><div className="p-desc">Edge caching with stale-while-revalidate and cache tags for purge.</div><div className="p-meta"><span className="dl">27K installs</span><span>v2.8.0</span></div></div>
<div className="p-card"><div className="p-name"><span className="p-pill">JS</span> body-transform</div><div className="p-desc">JSONPath transforms on request/response bodies. GraphQL support.</div><div className="p-meta"><span className="dl">19K installs</span><span>v1.5.2</span></div></div>
<div className="p-card"><div className="p-name"><span className="p-pill">GO</span> circuit-breaker</div><div className="p-desc">Configurable thresholds with half-open recovery and metrics export.</div><div className="p-meta"><span className="dl">15K installs</span><span>v3.1.0</span></div></div>
</div>
</div>
</div>
</div>
</div>
<div className="tab-panel" id="tab-multicloud">
<div className="tab-panel-text"><h3>True Multi-Cloud</h3><p>One configuration for every cloud. Deploy Meridian across AWS, GCP, Azure, and bare metal with unified management.</p>
<ul><li><svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Unified control plane with GitOps sync</li><li><svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Hybrid mesh: connect on-prem + cloud</li><li><svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Data residency + compliance controls</li><li><svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> SOC 2 and HIPAA built in</li></ul>
</div>
<div className="tab-panel-visual">
<div className="product-ui">
<div className="ui-bar"><div className="dots"><span></span><span></span><span></span></div><span className="tab active">Deployments</span><span className="tab">Config</span></div>
<div className="ui-body ui-deploy">
<svg preserveaspectratio="xMidYMid meet" viewbox="0 0 440 280">

<rect className="deploy-active" height="50" width="120" x="160" y="20"></rect><text className="deploy-lbl" fill="var(--accent)" font-weight="600" x="220" y="42">Meridian Control</text><text className="deploy-stat" x="220" y="56">unified config · GitOps sync</text>

<line className="deploy-line" x1="180" x2="70" y1="70" y2="110"></line><line className="deploy-line" x1="220" x2="220" y1="70" y2="110"></line>
<line className="deploy-line" x1="260" x2="370" y1="70" y2="110"></line>

<rect className="deploy-box" height="70" width="100" x="20" y="110"></rect><text className="deploy-lbl" x="70" y="132">AWS</text>
<text className="deploy-stat" x="70" y="145">us-east-1, eu-west-1</text><text className="deploy-stat" x="70" y="157">6 gateways · 12 routes</text>
<text className="deploy-check" x="70" y="172">✓ synced 4s ago</text>

<rect className="deploy-box" height="70" width="100" x="170" y="110"></rect><text className="deploy-lbl" x="220" y="132">GCP</text>
<text className="deploy-stat" x="220" y="145">us-central1, asia-east1</text><text className="deploy-stat" x="220" y="157">4 gateways · 8 routes</text>
<text className="deploy-check" x="220" y="172">✓ synced 2s ago</text>

<rect className="deploy-box" height="70" width="100" x="320" y="110"></rect><text className="deploy-lbl" x="370" y="132">Azure</text>
<text className="deploy-stat" x="370" y="145">westeurope, eastus</text><text className="deploy-stat" x="370" y="157">3 gateways · 6 routes</text>
<text className="deploy-check" x="370" y="172">✓ synced 8s ago</text>

<line className="deploy-line" x1="220" x2="220" y1="180" y2="210"></line>
<rect className="deploy-box" height="50" width="150" x="145" y="210"></rect><text className="deploy-lbl" x="220" y="232">On-Premises</text>
<text className="deploy-stat" x="220" y="245">bare metal · k8s cluster</text><text className="deploy-check" x="220" y="258">✓ hybrid mesh active</text>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="testimonial dot-bg">
<div className="section-glow"></div>
<div className="wrap">
<div className="section-head reveal" style={{textAlign: 'center'}}>
<div className="eyebrow" style={{textAlign: 'center'}}>What engineers say</div>
<h2 className="text-reveal" style={{textAlign: 'center'}}>Trusted by the <span className="shimmer-text">best teams</span></h2>
</div>
<div className="testi-grid spotlight-container">
<div className="testi-card reveal">
<blockquote>"We migrated from Kong to Meridian in a weekend. Our p99 latency dropped from 45ms to 2ms. The config-as-code approach made it trivial to replicate across environments."</blockquote>
<div className="testi-author"><img alt="Daniel Okonkwo" loading="lazy" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;q=80"/><div><div className="name">Daniel Okonkwo</div><div className="role">VP of Platform, Datadog</div></div></div>
</div>
<div className="testi-card featured reveal">
<blockquote>"Meridian replaced three separate tools in our stack — API gateway, rate limiter, and observability layer. It's the single best infrastructure decision we've made this year."</blockquote>
<div className="testi-author"><img alt="Ines Moreno" loading="lazy" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&amp;q=80"/><div><div className="name">Ines Moreno</div><div className="role">Principal SRE, Shopify</div></div></div>
</div>
<div className="testi-card reveal">
<blockquote>"The plugin system is incredible. We wrote a custom auth middleware in Rust that runs at the edge with sub-millisecond overhead. Nothing else comes close."</blockquote>
<div className="testi-author"><img alt="Kai Nakamura" loading="lazy" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&amp;q=80"/><div><div className="name">Kai Nakamura</div><div className="role">CTO, Railway</div></div></div>
</div>
</div>
</div>
</section>

<section className="cta-section">
<div className="cta-mesh"></div>
<div className="eyebrow reveal" style={{textAlign: 'center', position: 'relative', zIndex: '2'}}>Get Started</div>
<h2 className="reveal text-reveal">Deploy in <span className="shimmer-text">30 seconds</span></h2>
<p className="reveal">One command. Global edge. Zero config files to write.</p>
<div className="cta-email reveal">
<input aria-label="Email address" placeholder="you@company.com" type="email"/>
<button className="ripple" type="button">Start free</button>
</div>
<div className="cta-terminal reveal">
<div className="terminal-dots"><span></span><span></span><span></span></div>
<button className="copy-btn" onclick="navigator.clipboard.writeText('curl -sSL https://get.meridian.dev | sh')">Copy</button>
<div className="terminal-line"><span className="cmd">$</span> curl <span className="flag">-sSL</span> <span className="url">https://get.meridian.dev</span> | sh</div>
</div>
<div className="cta-links reveal">
<a className="primary" href="#">Read the docs</a>
<a href="#">View on GitHub</a>
<a href="#">Book a demo</a>
</div>
</section>

<footer>
<div className="footer-inner">
<div className="footer-brand">
<div className="nav-logo" style={{marginBottom: '4px'}}>
Meridian
      </div>
<p>The unified API gateway for modern engineering teams.</p>
</div>
<div className="footer-col"><h4>Product</h4><a href="#">Routing</a><a href="#">Security</a><a href="#">Analytics</a><a href="#">Plugins</a><a href="#">Multi-cloud</a></div>
<div className="footer-col"><h4>Developers</h4><a href="#">Documentation</a><a href="#">API Reference</a><a href="#">SDKs</a><a href="#">CLI</a><a href="#">Status</a></div>
<div className="footer-col"><h4>Company</h4><a href="#">About</a><a href="#">Blog</a><a href="#">Careers</a><a href="#">Press</a><a href="#">Contact</a></div>
<div className="footer-col"><h4>Legal</h4><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Security</a><a href="#">GDPR</a><a href="#">SOC 2</a></div>
</div>
<div className="footer-bottom"><span id="copyright"></span><span>Built with care for developer experience.</span></div>
</footer>









    </>
  );
}
