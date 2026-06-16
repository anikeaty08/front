import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



// Dynamic year
document.getElementById('footerYear').textContent = new Date().getFullYear();

// Nav scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 40);
}, { passive: true });

// Mobile toggle
const navToggle = document.getElementById('navToggle');
const navEl = document.getElementById('nav');
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('is-active');
  navEl.classList.toggle('is-open');
  const expanded = navToggle.classList.contains('is-active');
  navToggle.setAttribute('aria-expanded', expanded);
});

// Intersection Observer — reveal
const revealEls = document.querySelectorAll('.reveal, .reveal-scale, .stagger-up');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => observer.observe(el));

// Sign-in button visibility on desktop
const signInBtn = document.getElementById('navSignIn');
if (signInBtn && window.innerWidth >= 768) signInBtn.style.display = 'inline-flex';

// Count-up animation for metrics
const countEls = document.querySelectorAll('[data-count-to]');
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseFloat(el.dataset.countTo);
      const suffix = el.dataset.countSuffix || '';
      const prefix = el.dataset.countPrefix || '';
      const decimals = parseInt(el.dataset.countDecimals) || 0;
      const useComma = el.dataset.countComma === 'true';
      const duration = 2000;
      const start = performance.now();

      function animate(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        let current = eased * target;

        if (decimals > 0) {
          current = current.toFixed(decimals);
        } else {
          current = Math.round(current);
        }

        let display = String(current);
        if (useComma) {
          display = Number(current).toLocaleString('en-US');
        }
        el.textContent = prefix + display + suffix;

        if (progress < 1) requestAnimationFrame(animate);
      }
      requestAnimationFrame(animate);
      countObserver.unobserve(el);
    }
  });
}, { threshold: 0.3 });
countEls.forEach(el => countObserver.observe(el));

// Copy command in CTA terminal
const copyBtn = document.querySelector('.cta-terminal__copy');
if (copyBtn) {
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('npx create-zenith-app my-project').then(() => {
      const icon = copyBtn.querySelector('iconify-icon');
      icon.setAttribute('icon', 'lucide:check');
      setTimeout(() => icon.setAttribute('icon', 'lucide:copy'), 2000);
    });
  });
}

// ===== LIVE MONITOR — Radial Throughput Viz =====
(function() {
  const canvas = document.getElementById('monitorCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const tickCount = 100;
  const cx = 130, cy = 130, baseR = 95, baseTick = 3;
  const rpsEl = document.getElementById('metricRps');
  const latEl = document.getElementById('metricLatency');
  let rps = 2400;

  function draw() {
    ctx.clearRect(0, 0, 260, 260);
    const t = Date.now() * 0.002;

    for (let i = 0; i < tickCount; i++) {
      const angle = (i / tickCount) * Math.PI * 2;
      // Throughput-driven noise — organic, not random
      let noise = Math.sin(i * 0.18 + t) * Math.cos(i * 0.09 - t * 1.5) * 20;
      noise += Math.sin(i * 0.4 + t * 2.2) * 6;
      const len = baseTick + Math.max(0, noise);

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(0, -baseR);
      ctx.lineTo(0, -baseR - len);
      ctx.strokeStyle = 'rgba(14,165,233,0.55)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();
    }

    // Update metrics
    rps += (Math.random() - 0.5) * 60;
    rps = Math.max(2100, Math.min(2900, rps));
    if (rpsEl) rpsEl.textContent = (rps / 1000).toFixed(1) + 'K';
    if (latEl) latEl.textContent = (2.8 + Math.random() * 0.8).toFixed(1) + 'ms';

    requestAnimationFrame(draw);
  }
  draw();
})();



!function(){var u=window.UnicornStudio;if(u&&u.init){u.init()}else{var d=document,s=d.createElement("script");s.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.3/dist/unicornStudio.umd.js";s.onload=function(){window.UnicornStudio&&window.UnicornStudio.init()};(d.head||d.body).appendChild(s)}}();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<a className="skip-link" href="#main">Skip to content</a>

<nav className="nav" id="nav">
<div className="container">
<div className="nav__inner">
<a className="nav__logo" href="/home">Zenith</a>
<div aria-label="Main navigation" className="nav__links" id="navLinks" role="navigation">
<a className="" href="/features">Features</a>
<a className="" href="/platform">Platform</a>
<a className="" href="/pricing">Pricing</a>
<a className="" href="/docs">Docs</a>
<a className="" href="/changelog">Changelog</a>
</div>
<div className="nav__actions">
<a className="btn btn-ghost" href="/login" id="navSignIn" style={{display: 'inline-flex'}}>Sign in</a>
<a className="btn btn-primary" href="/login">Get Started</a>
</div>
<button aria-expanded="false" aria-label="Toggle menu" className="nav__toggle" id="navToggle">
<span></span><span></span><span></span>
</button>
</div>
</div>
</nav>
<main>

<section className="hero" id="hero">
<div className="hero__bg">
<div aria-label="Animated 3D background" data-us-dpi="1.5" data-us-fps="60" data-us-lazyload="true" data-us-production="true" data-us-project="lmSXlfVhWVrbN3qzElFu" data-us-scale="1" role="img" style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}}></div>
</div>
<div className="hero__mask"></div>
<div className="hero__top reveal is-visible">
<div className="hero__badge">
<span className="hero__badge-dot"></span>
      Now in Public Beta
    </div>
<h1 className="hero__title">
      The future of<br/><strong>cloud intelligence</strong>
</h1>
</div>
<div className="hero__bottom reveal is-visible">
<p className="hero__desc">
      Build, deploy, and scale AI applications with unmatched speed and reliability.
    </p>
<div className="hero__actions">
<a className="btn btn-primary" href="#">
<span className="btn-shimmer"></span>
        Start Building Free
        <iconify-icon icon="lucide:arrow-right"></iconify-icon>
</a>
<a className="btn btn-ghost" href="#">
<iconify-icon icon="lucide:play"></iconify-icon>
        Watch Demo
      </a>
</div>
</div>
<div className="hero__scroll-hint">
<span></span>
</div>
</section>

<section className="trust-bar">
<div className="container">
<div className="trust-bar__inner stagger-up">
<div className="trust-bar__item reveal-child"><iconify-icon icon="lucide:layers"></iconify-icon> Stratum</div>
<div className="trust-bar__item reveal-child"><iconify-icon icon="lucide:box"></iconify-icon> Cuboid</div>
<div className="trust-bar__item reveal-child"><iconify-icon icon="lucide:zap"></iconify-icon> Voltex</div>
<div className="trust-bar__item reveal-child"><iconify-icon icon="lucide:terminal"></iconify-icon> Synaptic</div>
<div className="trust-bar__item reveal-child"><iconify-icon icon="lucide:database"></iconify-icon> DataForge</div>
<div className="trust-bar__item reveal-child"><iconify-icon icon="lucide:shield"></iconify-icon> Aegis AI</div>
<div className="trust-bar__item reveal-child"><iconify-icon icon="lucide:globe"></iconify-icon> Meridian</div>
<div className="trust-bar__item reveal-child"><iconify-icon icon="lucide:cpu"></iconify-icon> NeuralOps</div>
</div>
</div>
</section>

<section className="pipeline">
<div className="container">
<div className="section-header section-header--center reveal">
<div className="section-label">How it works</div>
<h2 className="section-title">From idea to production<br/><span className="text-gradient">in three steps</span></h2>
</div>
<div className="pipeline__flow stagger-up">
<div className="pipeline__line"></div>
<div className="pipeline__step reveal-child">
<div className="pipeline__tag">Ingest</div>
<div className="pipeline__node"><iconify-icon icon="lucide:upload"></iconify-icon></div>
<h3 className="pipeline__step-title">Connect your data</h3>
<p className="pipeline__step-desc">Plug in any data source. Automatic schema detection and validation.</p>
</div>
<div className="pipeline__step reveal-child">
<div className="pipeline__tag">Train</div>
<div className="pipeline__node"><iconify-icon icon="lucide:brain"></iconify-icon></div>
<h3 className="pipeline__step-title">Train &amp; optimize</h3>
<p className="pipeline__step-desc">Fine-tune foundation models or train from scratch. Hyperparameters tune automatically.</p>
</div>
<div className="pipeline__step reveal-child">
<div className="pipeline__tag">Deploy</div>
<div className="pipeline__node"><iconify-icon icon="lucide:rocket"></iconify-icon></div>
<h3 className="pipeline__step-title">Deploy globally</h3>
<p className="pipeline__step-desc">One-click deployment to any region. Scaling, versioning, and rollback built in.</p>
</div>
</div>
<div className="pipeline__integrations stagger-up" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)'}}>
<span style={{fontSize: '0.68rem', color: 'var(--text-3)', fontFamily: '\'JetBrains Mono\',monospace', letterSpacing: '0.08em', textTransform: 'uppercase'}}>Integrates with</span>
<div style={{display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap'}}>
<span className="reveal-child" style={{display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.76rem', color: 'var(--text-3)', opacity: '0.6'}}><iconify-icon icon="lucide:github"></iconify-icon> GitHub</span>
<span className="reveal-child" style={{display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.76rem', color: 'var(--text-3)', opacity: '0.6'}}><iconify-icon icon="lucide:gitlab"></iconify-icon> GitLab</span>
<span className="reveal-child" style={{display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.76rem', color: 'var(--text-3)', opacity: '0.6'}}><iconify-icon icon="lucide:cloud"></iconify-icon> AWS</span>
<span className="reveal-child" style={{display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.76rem', color: 'var(--text-3)', opacity: '0.6'}}><iconify-icon icon="lucide:cloud"></iconify-icon> GCP</span>
<span className="reveal-child" style={{display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.76rem', color: 'var(--text-3)', opacity: '0.6'}}><iconify-icon icon="lucide:database"></iconify-icon> Snowflake</span>
<span className="reveal-child" style={{display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.76rem', color: 'var(--text-3)', opacity: '0.6'}}><iconify-icon icon="lucide:box"></iconify-icon> Docker</span>
<span className="reveal-child" style={{display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.76rem', color: 'var(--text-3)', opacity: '0.6'}}><iconify-icon icon="lucide:hexagon"></iconify-icon> K8s</span>
</div>
</div>
</div>
</section>

<section className="numbers">
<div className="container">
<div className="section-header section-header--center reveal">
<div className="section-label">Performance</div>
<h2 className="section-title"><span className="text-gradient">Numbers that speak</span></h2>
</div>
<div className="numbers__list stagger-up">
<div className="numbers__row reveal-child">
<div className="numbers__value text-gradient" data-count-decimals="2" data-count-suffix="%" data-count-to="99.99">0%</div>
<div className="numbers__meta">
<div className="numbers__label">Uptime guarantee</div>
<div className="numbers__detail">Backed by enterprise SLA with financial credits</div>
</div>
</div>
<div className="numbers__row reveal-child">
<div className="numbers__value text-gradient" data-count-prefix="&lt;" data-count-suffix="ms" data-count-to="4">0ms</div>
<div className="numbers__meta">
<div className="numbers__label">P99 response latency</div>
<div className="numbers__detail">Edge-optimized inference across 300+ locations</div>
</div>
</div>
<div className="numbers__row reveal-child">
<div className="numbers__value text-gradient" data-count-suffix="B+" data-count-to="50">0B+</div>
<div className="numbers__meta">
<div className="numbers__label">Daily inferences served</div>
<div className="numbers__detail">Scaling from prototype to planet-scale production</div>
</div>
</div>
<div className="numbers__row reveal-child">
<div className="numbers__value text-gradient" data-count-comma="true" data-count-suffix="+" data-count-to="2400">0+</div>
<div className="numbers__meta">
<div className="numbers__label">Enterprise customers</div>
<div className="numbers__detail">From startups to Fortune 500 companies worldwide</div>
</div>
</div>
</div>
</div>
</section>

<section className="monitor">
<div className="container">
<div className="monitor__layout">
<div className="monitor__text reveal">
<div className="section-label">Observability</div>
<h2 className="section-title">Real-time inference<br/><span className="text-gradient">monitoring</span></h2>
<p className="section-desc">Every request, every model, every region. Live telemetry streaming at the speed of inference.</p>
<div className="monitor__features">
<div className="monitor__feat reveal-child">
<div className="monitor__feat-icon"><iconify-icon icon="lucide:activity"></iconify-icon></div>
<div className="monitor__feat-text">
<div className="monitor__feat-name">Live latency tracking</div>
<div className="monitor__feat-desc">P50/P95/P99 latency histograms updated every 100ms across all endpoints.</div>
</div>
</div>
<div className="monitor__feat reveal-child">
<div className="monitor__feat-icon"><iconify-icon icon="lucide:radio"></iconify-icon></div>
<div className="monitor__feat-text">
<div className="monitor__feat-name">Anomaly detection</div>
<div className="monitor__feat-desc">ML-powered alerts on drift, throughput drops, and error spikes before they impact users.</div>
</div>
</div>
<div className="monitor__feat reveal-child">
<div className="monitor__feat-icon"><iconify-icon icon="lucide:layers"></iconify-icon></div>
<div className="monitor__feat-text">
<div className="monitor__feat-name">Model versioning</div>
<div className="monitor__feat-desc">A/B test models in production. Canary deploys with automatic rollback on regression.</div>
</div>
</div>
</div>
</div>
<div className="monitor__widget reveal-scale" id="monitorWidget">
<div className="monitor__widget-header">
<span className="monitor__widget-label">INF — 01</span>
<span className="monitor__widget-status">
<span className="monitor__widget-dot"></span>
            STREAMING
          </span>
</div>

<div className="monitor__viz">
<div className="monitor__radial">
<div className="monitor__radial-track"></div>
<canvas className="monitor__radial-canvas" height="260" id="monitorCanvas" width="260"></canvas>
<div className="monitor__pulse"></div>
<div className="monitor__center">
<div className="monitor__center-val" id="metricRps">2.4K</div>
<div className="monitor__center-label">req/s</div>
</div>
</div>
</div>

<div className="monitor__widget-footer">
<div className="monitor__metrics">
<div className="monitor__metric">
<div className="monitor__metric-val" id="metricLatency">3.1ms</div>
<div className="monitor__metric-label">P99</div>
</div>
<div className="monitor__metric">
<div className="monitor__metric-val">99.99%</div>
<div className="monitor__metric-label">Uptime</div>
</div>
<div className="monitor__metric">
<div className="monitor__metric-val">312</div>
<div className="monitor__metric-label">Nodes</div>
</div>
</div>
<div className="monitor__model-row">
<span className="monitor__model-dot monitor__model-dot--active"></span>
<span className="monitor__model-name">llama-3.2-70b</span>
<span className="monitor__model-sep">·</span>
<span className="monitor__model-name">12 regions</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="cta-section">
<div className="cta-section__glow"></div>
<div className="container">
<div className="cta-section__content reveal">
<h2 className="cta-section__title">Ready to build the<br/><span className="text-gradient">future of intelligence?</span></h2>
<p className="cta-section__desc">Get started in seconds. No credit card required.</p>
<div className="cta-terminal">
<div className="cta-terminal__bar"><span></span><span></span><span></span></div>
<div className="cta-terminal__body">
<span><span className="t-prompt">$</span> npx create-zenith-app my-project<span className="t-cursor"></span></span>
<button aria-label="Copy command" className="cta-terminal__copy">
<iconify-icon icon="lucide:copy" width="14"></iconify-icon>
</button>
</div>
</div>
<div className="cta-section__actions">
<a className="btn btn-primary" href="#">
          Start Building Free
          <iconify-icon icon="lucide:arrow-right"></iconify-icon>
</a>
<a className="btn btn-ghost" href="contact.html">Talk to an Expert</a>
</div>
<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginTop: '32px'}}>
<span style={{display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.72rem', color: 'var(--text-3)'}}><iconify-icon icon="lucide:credit-card" style={{color: 'var(--text-3)'}}></iconify-icon> No credit card required</span>
<span style={{display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.72rem', color: 'var(--text-3)'}}><iconify-icon icon="lucide:clock" style={{color: 'var(--text-3)'}}></iconify-icon> Deploy in under 60s</span>
<span style={{display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.72rem', color: 'var(--text-3)'}}><iconify-icon icon="lucide:shield-check" style={{color: 'var(--text-3)'}}></iconify-icon> SOC 2 compliant</span>
<span style={{display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.72rem', color: 'var(--text-3)'}}><iconify-icon icon="lucide:headphones" style={{color: 'var(--text-3)'}}></iconify-icon> 24/7 support</span>
</div>
</div>
</div>
</section>
</main>

<footer className="footer">
<div className="container">
<div className="footer__grid">
<div className="footer__brand">
<div className="footer__brand-logo nav__logo">Zenith</div>
<p className="footer__brand-desc">The unified AI cloud platform. Build, deploy, and scale intelligence at any scale.</p>
</div>
<div className="footer__col">
<div className="footer__col-title">Product</div>
<ul>
<li><a href="features.html">Features</a></li>
<li><a href="platform.html">Platform</a></li>
<li><a href="pricing.html">Pricing</a></li>
<li><a href="changelog.html">Changelog</a></li>
<li><a href="#">Roadmap</a></li>
<li><a href="#">Status</a></li>
</ul>
</div>
<div className="footer__col">
<div className="footer__col-title">Resources</div>
<ul>
<li><a href="docs.html">Documentation</a></li>
<li><a href="#">API Reference</a></li>
<li><a href="#">Guides</a></li>
<li><a href="blog.html">Blog</a></li>
<li><a href="#">Community</a></li>
</ul>
</div>
<div className="footer__col">
<div className="footer__col-title">Company</div>
<ul>
<li><a href="about.html">About</a></li>
<li><a href="#">Careers</a></li>
<li><a href="contact.html">Contact</a></li>
<li><a href="#">Privacy</a></li>
<li><a href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="footer__bottom">
<span>© <span id="footerYear">2026</span> Zenith Technologies, Inc. All rights reserved.</span>
<div className="footer__social">
<a aria-label="GitHub" href="#"><iconify-icon icon="lucide:github"></iconify-icon></a>
<a aria-label="Twitter" href="#"><iconify-icon icon="lucide:twitter"></iconify-icon></a>
<a aria-label="LinkedIn" href="#"><iconify-icon icon="lucide:linkedin"></iconify-icon></a>
<a aria-label="Discord" href="#"><iconify-icon icon="lucide:message-circle"></iconify-icon></a>
</div>
</div>
</div>
</footer>





    </>
  );
}
