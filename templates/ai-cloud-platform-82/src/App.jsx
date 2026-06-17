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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');


!function(){var s=document.createElement("script");s.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.3/dist/unicornStudio.umd.js";s.onload=function(){window.UnicornStudio&&window.UnicornStudio.init()};document.head.appendChild(s)}();


(function() {
  'use strict';

  // ============================================
  // INIT
  // ============================================
  document.getElementById('year').textContent = new Date().getFullYear();

  // ============================================
  // LENIS SMOOTH SCROLL (standalone rAF loop — no GSAP)
  // ============================================
  const lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1,
    touchMultiplier: 2,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // ============================================
  // NAV
  // ============================================
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // ============================================
  // INTERSECTION OBSERVER REVEALS (Aura.build compatible)
  // ============================================
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .stagger-up').forEach(el => {
    revealObserver.observe(el);
  });

  // ============================================
  // BENTO WIDGET ANIMATIONS (IntersectionObserver)
  // ============================================
  const widgetObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        widgetObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.bento-card').forEach(card => widgetObserver.observe(card));

  // ============================================
  // NODE GRID GENERATION
  // ============================================
  const nodeGrid = document.getElementById('node-grid');
  if (nodeGrid) {
    const activeIndices = [2,5,7,9,10,14,15,17,19,21,23];
    for (let i = 0; i < 24; i++) {
      const dot = document.createElement('div');
      dot.className = 'node-dot' + (activeIndices.includes(i) ? ' active' : '');
      dot.style.animationDelay = (i * 0.04) + 's';
      nodeGrid.appendChild(dot);
    }
  }

  // ============================================
  // METRICS COUNTER ANIMATION (pure IO + rAF — no GSAP)
  // ============================================
  function animateCount(el, target, prefix, suffix, decimals, duration) {
    const start = performance.now();
    function tick(now) {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3); // power3.out
      const v = target * ease;
      if (target >= 1000) {
        el.textContent = prefix + Math.floor(v).toLocaleString() + suffix;
      } else {
        el.textContent = prefix + v.toFixed(decimals) + suffix;
      }
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        counterObserver.unobserve(el);
        const target = parseFloat(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        const decimals = parseInt(el.dataset.decimals) || 0;
        animateCount(el, target, prefix, suffix, decimals, 2000);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.metric-number[data-target]').forEach(el => {
    counterObserver.observe(el);
  });

  // Mini metric counters inside bento
  const miniCounterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        miniCounterObserver.unobserve(el);
        const target = parseFloat(el.dataset.count);
        setTimeout(() => {
          const start = performance.now();
          function tick(now) {
            const t = Math.min((now - start) / 1500, 1);
            const ease = 1 - Math.pow(1 - t, 3);
            const v = target * ease;
            if (target < 10) {
              el.textContent = '$' + v.toFixed(1);
            } else if (target >= 100) {
              el.textContent = Math.floor(v).toLocaleString();
            } else {
              el.textContent = Math.floor(v) + '%';
            }
            if (t < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }, 300);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.mini-metric .metric-value[data-count]').forEach(el => {
    miniCounterObserver.observe(el);
  });

  // ============================================
  // HOW IT WORKS — LINE REVEAL (Aura compatible)
  // ============================================
  const howSteps = document.querySelector('.how-steps');
  if (howSteps) {
    const howObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('line-visible');
          howObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    howObserver.observe(howSteps);
  }

  // ============================================
  // SCROLL INDICATOR FADE ON SCROLL
  // ============================================
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    window.addEventListener('scroll', () => {
      scrollIndicator.style.opacity = Math.max(0, 1 - window.scrollY / 300);
    });
  }

})();

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
      

<nav className="nav" id="nav">
<div className="nav-inner">
<a className="nav-logo" href="#">Nova</a>
<div className="nav-links">
<a href="#features">Features</a>
<a href="#platform">Platform</a>
<a href="#pricing">Pricing</a>
<a href="#docs">Docs</a>
<button className="nav-cta">Get Started</button>
</div>
<button aria-label="Menu" className="hamburger" id="hamburger">
<span></span><span></span><span></span>
</button>
</div>
</nav>
<div className="mobile-menu" id="mobile-menu">
<a className="mobile-link" href="#features">Features</a>
<a className="mobile-link" href="#platform">Platform</a>
<a className="mobile-link" href="#pricing">Pricing</a>
<a className="mobile-link" href="#docs">Docs</a>
<button className="nav-cta">Get Started</button>
</div>

<section className="hero" id="hero">
<div className="hero-bg">
<div data-us-dpi="1" data-us-fps="30" data-us-lazyload="true" data-us-production="true" data-us-project="WL20Cho3hr5Ge8Pk2QUl" data-us-scale="0.75" style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}}></div>
</div>
<div className="hero-content">
<div className="reveal">
<div className="hero-badge">
<span className="hero-badge-dot"></span>
        Now in Public Beta
      </div>
<h1 className="hero-title">Infrastructure that <strong className="text-gradient">thinks</strong></h1>
</div>
<div className="hero-bottom reveal">
<p className="hero-desc">Deploy, monitor, and scale AI workloads with intelligent infrastructure that adapts to your models, optimizes resources, and accelerates inference — automatically.</p>
<div className="hero-actions">
<button className="btn-conic" onclick="window.location.hash='pricing'">
<span className="shimmer"></span>
          Start Building Free
        </button>
<button className="btn-ghost">
<iconify-icon icon="lucide:play" width="14"></iconify-icon>
          Watch Demo
        </button>
</div>
</div>
</div>
</section>

<section className="bento-section" id="features">
<div className="section-glow"></div>
<div className="container">
<div className="bento-header reveal">
<div className="eyebrow">Features</div>
<h2 className="section-title">Everything you need</h2>
<p className="section-desc">A complete platform for deploying and managing AI workloads at any scale, with the tools your team actually wants to use.</p>
</div>
<div className="bento-grid stagger-up">

<div className="bento-card w2 reveal-child">
<h3>Real-time Analytics</h3>
<p>Monitor inference throughput, latency percentiles, and token usage across all deployed models.</p>
<div className="widget-bars">
<div className="bar" style={{'--h': '0.35', height: '100%'}}></div>
<div className="bar" style={{'--h': '0.55', height: '100%'}}></div>
<div className="bar" style={{'--h': '0.8', height: '100%'}}></div>
<div className="bar" style={{'--h': '0.45', height: '100%'}}></div>
<div className="bar" style={{'--h': '0.92', height: '100%'}}></div>
<div className="bar" style={{'--h': '0.65', height: '100%'}}></div>
<div className="bar" style={{'--h': '0.75', height: '100%'}}></div>
<div className="bar" style={{'--h': '0.5', height: '100%'}}></div>
</div>
</div>
<div className="bento-card w2 reveal-child">
<h3>Request Logging</h3>
<p>Full request tracing with structured logs, latency breakdown, and cost attribution.</p>
<div className="widget-logs">
<div className="log-line"><span className="log-time">12:04:21</span><span className="log-method get">GET</span><span className="log-msg">/v1/models — 200 2ms</span></div>
<div className="log-line"><span className="log-time">12:04:22</span><span className="log-method post">POST</span><span className="log-msg">/v1/completions — 200 48ms</span></div>
<div className="log-line"><span className="log-time">12:04:23</span><span className="log-method post">POST</span><span className="log-msg">/v1/embeddings — 200 12ms</span></div>
<div className="log-line"><span className="log-time">12:04:24</span><span className="log-method put">PUT</span><span className="log-msg">/v1/models/cfg — 200 5ms</span></div>
<div className="log-line"><span className="log-time">12:04:25</span><span className="log-method get">GET</span><span className="log-msg">/v1/health — 200 1ms</span></div>
<div className="log-line"><span className="log-time">12:04:26</span><span className="log-method del">DEL</span><span className="log-msg">/v1/cache/stale — 204 3ms</span></div>
</div>
</div>

<div className="bento-card reveal-child">
<h3>Health Monitoring</h3>
<p>Track GPU utilization and model health with instant alerting.</p>
<div className="widget-status">
<div className="status-row"><span className="label">gpu-cluster-01</span><span className="value green">98.2%</span></div>
<div className="status-row"><span className="label">gpu-cluster-02</span><span className="value green">94.7%</span></div>
<div className="status-row"><span className="label">inference-pool</span><span className="value yellow">87.1%</span></div>
<div className="status-row"><span className="label">model-cache</span><span className="value green">99.9%</span></div>
</div>
</div>
<div className="bento-card reveal-child">
<h3>Resource Optimization</h3>
<p>Right-size GPU allocations to minimize cost automatically.</p>
<div className="widget-progress">
<div className="progress-item">
<div className="progress-label"><span>GPU Memory</span><span>78%</span></div>
<div className="progress-track"><div className="progress-fill" style={{'--w': '78%'}}></div></div>
</div>
<div className="progress-item">
<div className="progress-label"><span>Compute</span><span>92%</span></div>
<div className="progress-track"><div className="progress-fill" style={{'--w': '92%'}}></div></div>
</div>
<div className="progress-item">
<div className="progress-label"><span>Bandwidth</span><span>45%</span></div>
<div className="progress-track"><div className="progress-fill" style={{'--w': '45%'}}></div></div>
</div>
</div>
</div>
<div className="bento-card reveal-child">
<h3>Cluster Topology</h3>
<p>Visualize node status and allocation in real time.</p>
<div className="widget-nodes" id="node-grid"></div>
</div>
<div className="bento-card reveal-child">
<h3>Cost Intelligence</h3>
<p>Granular cost breakdown per model with budget alerts.</p>
<div className="widget-metrics">
<div className="mini-metric">
<div className="metric-value" data-count="2.4">0</div>
<div className="metric-label">Cost/1K</div>
</div>
<div className="mini-metric">
<div className="metric-value" data-count="847">0</div>
<div className="metric-label">RPS</div>
</div>
<div className="mini-metric">
<div className="metric-value" data-count="34">0</div>
<div className="metric-label">% Saved</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="logo-bar">
<div className="logo-bar-label">Trusted by engineering teams worldwide</div>
<div className="logo-bar-wrap">
<div className="logo-track">
<span>Prisma Labs</span><span>Voltaire</span><span>StackLayer</span><span>NeuralPath</span><span>Orion AI</span><span>CipherGuard</span><span>DataForge</span><span>LaunchKit</span><span>Axiom</span><span>Cortex</span><span>Stratum</span><span>Cuboid</span>
<span>Prisma Labs</span><span>Voltaire</span><span>StackLayer</span><span>NeuralPath</span><span>Orion AI</span><span>CipherGuard</span><span>DataForge</span><span>LaunchKit</span><span>Axiom</span><span>Cortex</span><span>Stratum</span><span>Cuboid</span>
</div>
</div>
</section>

<section className="showcase-section" id="platform">
<div className="section-glow"></div>
<div className="container">
<div className="showcase-grid">
<div className="reveal">
<div className="eyebrow">Platform</div>
<h2 className="section-title">Control everything<br/>from one dashboard</h2>
<p className="section-desc">A unified control plane for your entire AI infrastructure. Deploy models, manage endpoints, and monitor performance — all without leaving your terminal.</p>
<div className="showcase-features">
<div className="showcase-feature">
<div className="showcase-feature-icon"><iconify-icon icon="lucide:git-branch"></iconify-icon></div>
<div>
<h4>Git-native Deployments</h4>
<p>Push to deploy. Every model version tracked, every rollback instant. Integrates with your existing CI/CD.</p>
</div>
</div>
<div className="showcase-feature">
<div className="showcase-feature-icon"><iconify-icon icon="lucide:shield-check"></iconify-icon></div>
<div>
<h4>Zero-trust Security</h4>
<p>mTLS everywhere, encrypted at rest and in transit. SOC 2 Type II certified with audit logging.</p>
</div>
</div>
<div className="showcase-feature">
<div className="showcase-feature-icon"><iconify-icon icon="lucide:workflow"></iconify-icon></div>
<div>
<h4>Auto-scaling Policies</h4>
<p>Define scaling rules based on queue depth, latency, or custom metrics. Scale to zero when idle.</p>
</div>
</div>
</div>
</div>
<div className="dashboard-mock reveal">
<div className="dashboard-header">
<span className="dashboard-dot red"></span>
<span className="dashboard-dot yellow"></span>
<span className="dashboard-dot green"></span>
<span className="dashboard-header-title">nova-dashboard — deployments</span>
</div>
<div className="dashboard-body">
<table className="dashboard-table">
<thead>
<tr>
<th>Model</th>
<th>Status</th>
<th>Latency</th>
<th>Load</th>
</tr>
</thead>
<tbody>
<tr>
<td>gpt-4-turbo</td>
<td><span className="status-badge running">Running</span></td>
<td>42ms</td>
<td>
<div className="mini-bars">
<div className="mb" style={{height: '8px'}}></div>
<div className="mb" style={{height: '14px'}}></div>
<div className="mb" style={{height: '18px'}}></div>
<div className="mb" style={{height: '12px'}}></div>
<div className="mb" style={{height: '16px'}}></div>
</div>
</td>
</tr>
<tr>
<td>llama-3-70b</td>
<td><span className="status-badge running">Running</span></td>
<td>28ms</td>
<td>
<div className="mini-bars">
<div className="mb" style={{height: '12px'}}></div>
<div className="mb" style={{height: '16px'}}></div>
<div className="mb" style={{height: '10px'}}></div>
<div className="mb" style={{height: '18px'}}></div>
<div className="mb" style={{height: '14px'}}></div>
</div>
</td>
</tr>
<tr>
<td>mixtral-8x7b</td>
<td><span className="status-badge pending">Scaling</span></td>
<td>—</td>
<td>
<div className="mini-bars">
<div className="mb" style={{height: '4px'}}></div>
<div className="mb" style={{height: '6px'}}></div>
<div className="mb" style={{height: '8px'}}></div>
<div className="mb" style={{height: '4px'}}></div>
<div className="mb" style={{height: '10px'}}></div>
</div>
</td>
</tr>
<tr>
<td>embed-v3</td>
<td><span className="status-badge running">Running</span></td>
<td>3ms</td>
<td>
<div className="mini-bars">
<div className="mb" style={{height: '18px'}}></div>
<div className="mb" style={{height: '16px'}}></div>
<div className="mb" style={{height: '20px'}}></div>
<div className="mb" style={{height: '14px'}}></div>
<div className="mb" style={{height: '18px'}}></div>
</div>
</td>
</tr>
<tr>
<td>whisper-large</td>
<td><span className="status-badge stopped">Idle</span></td>
<td>—</td>
<td>
<div className="mini-bars">
<div className="mb" style={{height: '2px'}}></div>
<div className="mb" style={{height: '2px'}}></div>
<div className="mb" style={{height: '2px'}}></div>
<div className="mb" style={{height: '2px'}}></div>
<div className="mb" style={{height: '2px'}}></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</section>

<section className="how-section" id="docs">
<div className="container">
<div className="how-header reveal">
<div className="eyebrow">How it works</div>
<h2 className="section-title">Three steps to production</h2>
<p className="section-desc">From your first line of code to serving millions of requests. No infrastructure expertise required.</p>
</div>
<div className="how-steps stagger-up">
<div className="how-step reveal-child">
<div className="step-node">
<span className="step-num">1</span>
<iconify-icon icon="lucide:plug"></iconify-icon>
</div>
<h3>Connect</h3>
<p>Link your model registry, cloud accounts, and existing tools in minutes. We support every major provider.</p>
</div>
<div className="how-step reveal-child">
<div className="step-node">
<span className="step-num">2</span>
<iconify-icon icon="lucide:rocket"></iconify-icon>
</div>
<h3>Deploy</h3>
<p>Push a model to production with a single command. We handle GPU allocation, load balancing, and failover.</p>
</div>
<div className="how-step reveal-child">
<div className="step-node">
<span className="step-num">3</span>
<iconify-icon icon="lucide:maximize"></iconify-icon>
</div>
<h3>Scale</h3>
<p>Auto-scale from zero to thousands of GPUs based on demand. Pay only for the compute you consume.</p>
</div>
</div>
</div>
</section>

<section className="metrics-section">
<div className="container">
<div className="metrics-grid">
<div className="metric-item reveal">
<div className="metric-number" data-decimals="2" data-suffix="%" data-target="99.99">0%</div>
<div className="metric-label">Uptime SLA</div>
</div>
<div className="metric-item reveal">
<div className="metric-number" data-decimals="0" data-prefix="&lt;" data-suffix="ms" data-target="3">&lt;3ms</div>
<div className="metric-label">p50 Latency</div>
</div>
<div className="metric-item reveal">
<div className="metric-number" data-decimals="0" data-suffix="B+" data-target="10">0</div>
<div className="metric-label">Inferences Served</div>
</div>
<div className="metric-item reveal">
<div className="metric-number" data-decimals="0" data-suffix="+" data-target="2400">0</div>
<div className="metric-label">Customers</div>
</div>
</div>
</div>
</section>

<section className="testimonials-section">
<div className="section-glow"></div>
<div className="container">
<div className="testimonials-header reveal">
<div className="eyebrow">Testimonials</div>
<h2 className="section-title">Loved by engineers</h2>
<p className="section-desc">Teams building the next generation of AI products trust Nova to power their infrastructure.</p>
</div>
<div className="testimonial-featured reveal">
<div className="testimonial-quote">
        Nova cut our inference costs by 40% while halving our deployment time. The auto-scaling is genuinely intelligent — it predicted our traffic spikes before they happened. This is what AI infrastructure should feel like.
      </div>
<div className="testimonial-author">
<div className="testimonial-avatar">SK</div>
<div>
<div className="testimonial-name">Sarah Kim</div>
<div className="testimonial-role">VP Engineering, Prisma Labs</div>
</div>
</div>
</div>
<div className="testimonials-grid stagger-up">
<div className="testimonial-card reveal-child">
<div className="testimonial-quote">
          We went from spending 3 days on deployment to 3 minutes. The git-native workflow fits perfectly into how our team already works.
        </div>
<div className="testimonial-author">
<div className="testimonial-avatar">MR</div>
<div>
<div className="testimonial-name">Marcus Rivera</div>
<div className="testimonial-role">CTO, NeuralPath</div>
</div>
</div>
</div>
<div className="testimonial-card reveal-child">
<div className="testimonial-quote">
          The observability is unmatched. We can trace any inference request end-to-end, see the cost, and debug issues in seconds.
        </div>
<div className="testimonial-author">
<div className="testimonial-avatar">AJ</div>
<div>
<div className="testimonial-name">Anika Johal</div>
<div className="testimonial-role">ML Engineer, Orion AI</div>
</div>
</div>
</div>
<div className="testimonial-card reveal-child">
<div className="testimonial-quote">
          Scale-to-zero alone saves us thousands per month. Nova handles our bursty workloads without any manual intervention.
        </div>
<div className="testimonial-author">
<div className="testimonial-avatar">DL</div>
<div>
<div className="testimonial-name">Daniel Lee</div>
<div className="testimonial-role">Head of Infra, DataForge</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pricing-section" id="pricing">
<div className="container">
<div className="pricing-header reveal">
<div className="eyebrow">Pricing</div>
<h2 className="section-title">Simple, transparent pricing</h2>
<p className="section-desc">Start free, scale as you grow. No hidden fees, no surprise bills. Cancel anytime.</p>
</div>
<div className="pricing-grid stagger-up">

<div className="pricing-card reveal-child">
<div className="pricing-name">Starter</div>
<div className="pricing-price">$0 <span>/ month</span></div>
<div className="pricing-desc">Perfect for experimentation and small projects. No credit card required.</div>
<div className="pricing-features">
<div className="pricing-feature"><iconify-icon icon="lucide:check"></iconify-icon> 3 model deployments</div>
<div className="pricing-feature"><iconify-icon icon="lucide:check"></iconify-icon> 100K inferences/month</div>
<div className="pricing-feature"><iconify-icon icon="lucide:check"></iconify-icon> Community support</div>
<div className="pricing-feature"><iconify-icon icon="lucide:check"></iconify-icon> Basic analytics</div>
<div className="pricing-feature"><iconify-icon icon="lucide:check"></iconify-icon> 7-day log retention</div>
</div>
<button className="pricing-btn">Get Started Free</button>
</div>

<div className="pricing-card featured reveal-child">
<div className="pricing-badge">Most Popular</div>
<div className="pricing-name">Pro</div>
<div className="pricing-price">$79 <span>/ month</span></div>
<div className="pricing-desc">For growing teams shipping AI products to production. Everything in Starter, plus:</div>
<div className="pricing-features">
<div className="pricing-feature"><iconify-icon icon="lucide:check"></iconify-icon> Unlimited deployments</div>
<div className="pricing-feature"><iconify-icon icon="lucide:check"></iconify-icon> 10M inferences/month</div>
<div className="pricing-feature"><iconify-icon icon="lucide:check"></iconify-icon> Priority support</div>
<div className="pricing-feature"><iconify-icon icon="lucide:check"></iconify-icon> Advanced analytics &amp; alerting</div>
<div className="pricing-feature"><iconify-icon icon="lucide:check"></iconify-icon> Auto-scaling policies</div>
<div className="pricing-feature"><iconify-icon icon="lucide:check"></iconify-icon> 90-day log retention</div>
<div className="pricing-feature"><iconify-icon icon="lucide:check"></iconify-icon> SSO &amp; team management</div>
</div>
<button className="pricing-btn">Start Pro Trial</button>
</div>

<div className="pricing-card reveal-child">
<div className="pricing-name">Enterprise</div>
<div className="pricing-price">Custom</div>
<div className="pricing-desc">For organizations with complex compliance and scale requirements. Everything in Pro, plus:</div>
<div className="pricing-features">
<div className="pricing-feature"><iconify-icon icon="lucide:check"></iconify-icon> Unlimited everything</div>
<div className="pricing-feature"><iconify-icon icon="lucide:check"></iconify-icon> Dedicated infrastructure</div>
<div className="pricing-feature"><iconify-icon icon="lucide:check"></iconify-icon> 24/7 SLA support</div>
<div className="pricing-feature"><iconify-icon icon="lucide:check"></iconify-icon> Custom integrations</div>
<div className="pricing-feature"><iconify-icon icon="lucide:check"></iconify-icon> SOC 2 &amp; HIPAA compliance</div>
<div className="pricing-feature"><iconify-icon icon="lucide:check"></iconify-icon> Dedicated account manager</div>
</div>
<button className="pricing-btn">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="cta-section">
<div className="section-glow"></div>
<div className="cta-content reveal">
<div className="eyebrow" style={{justifyContent: 'center'}}>Get Started</div>
<h2 className="cta-title">Ready to deploy <span className="text-gradient">intelligence</span>?</h2>
<p className="cta-desc">Get from zero to production in under five minutes. One command is all it takes.</p>
<div className="cta-terminal">
<span className="prompt">$</span>
<span className="cmd">npx create-nova-app</span>
<button className="copy-btn" onclick="navigator.clipboard.writeText('npx create-nova-app')">Copy</button>
</div>
<div className="cta-actions">
<button className="btn-conic" onclick="window.location.hash='pricing'">
<span className="shimmer"></span>
        Start Building Free
      </button>
<button className="btn-ghost">
<iconify-icon icon="lucide:calendar" width="14"></iconify-icon>
        Book a Demo
      </button>
</div>
<div className="trust-badges">
<div className="trust-badge"><iconify-icon icon="lucide:credit-card"></iconify-icon> No credit card required</div>
<div className="trust-badge"><iconify-icon icon="lucide:shield-check"></iconify-icon> SOC 2 Certified</div>
<div className="trust-badge"><iconify-icon icon="lucide:headphones"></iconify-icon> 24/7 Support</div>
</div>
</div>
</section>

<footer className="footer">
<div className="container">
<div className="footer-grid">
<div className="footer-brand">
<a className="nav-logo" href="#">Nova</a>
<p>AI infrastructure that adapts to your workloads. Deploy, monitor, and scale with confidence.</p>
<div className="footer-social">
<a aria-label="GitHub" href="#"><iconify-icon icon="lucide:github"></iconify-icon></a>
<a aria-label="Twitter" href="#"><iconify-icon icon="lucide:twitter"></iconify-icon></a>
<a aria-label="LinkedIn" href="#"><iconify-icon icon="lucide:linkedin"></iconify-icon></a>
<a aria-label="Discord" href="#"><iconify-icon icon="lucide:message-circle"></iconify-icon></a>
</div>
</div>
<div className="footer-col">
<h4>Product</h4>
<a href="#">Features</a>
<a href="#">Pricing</a>
<a href="#">Changelog</a>
<a href="#">Integrations</a>
<a href="#">API Reference</a>
</div>
<div className="footer-col">
<h4>Resources</h4>
<a href="#">Documentation</a>
<a href="#">Tutorials</a>
<a href="#">Blog</a>
<a href="#">Community</a>
<a href="#">Status Page</a>
</div>
<div className="footer-col">
<h4>Company</h4>
<a href="#">About</a>
<a href="#">Careers</a>
<a href="#">Contact</a>
<a href="#">Security</a>
<a href="#">Legal</a>
</div>
</div>
<div className="footer-bottom">
<span>© <span id="year"></span> Nova. All rights reserved.</span>
<div className="footer-bottom-links">
<a href="#">Privacy</a>
<a href="#">Terms</a>
<a href="#">Cookies</a>
</div>
</div>
</div>
</footer>






    </>
  );
}
