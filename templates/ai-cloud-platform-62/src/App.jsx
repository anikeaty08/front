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
if (window.innerWidth >= 768) signInBtn.style.display = 'inline-flex';

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

// Capability tab switching
const capTabs = document.querySelectorAll('.cap-tab');
const capPanels = document.querySelectorAll('.cap-panel');
capTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    capTabs.forEach(t => { t.classList.remove('is-active'); t.setAttribute('aria-selected', 'false'); });
    capPanels.forEach(p => p.classList.remove('is-active'));
    tab.classList.add('is-active');
    tab.setAttribute('aria-selected', 'true');
    const panel = document.getElementById(tab.dataset.panel);
    if (panel) panel.classList.add('is-active');
  });
});

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



!function(){var u=window.UnicornStudio;if(u&&u.init){u.init()}else{var d=document,s=d.createElement("script");s.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.3/dist/unicornStudio.umd.js";s.onload=function(){window.UnicornStudio&&window.UnicornStudio.init()};(d.head||d.body).appendChild(s)}}();

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
      
<a className="skip-link" href="#capabilities">Skip to content</a>

<nav className="nav" id="nav">
<div className="container">
<div className="nav__inner">
<a className="nav__logo" href="#">Zenith</a>
<div aria-label="Main navigation" className="nav__links" id="navLinks" role="navigation">
<a href="#capabilities">Features</a>
<a href="#platform">Platform</a>
<a href="#pricing">Pricing</a>
<a href="#">Docs</a>
<a href="#">Changelog</a>
</div>
<div className="nav__actions">
<a className="btn btn-ghost" href="#" id="navSignIn" style={{display: 'none'}}>Sign in</a>
<a className="btn btn-primary" href="#">Get Started</a>
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

<section className="capabilities" id="capabilities">
<div className="container">
<div className="section-header section-header--center reveal">
<div className="section-label">Capabilities</div>
<h2 className="section-title">Everything you need to<br/><span className="text-gradient">ship intelligence</span></h2>
<p className="section-desc">From training to production, Zenith handles the complexity so your team can focus on building what matters.</p>
</div>
<div className="capabilities__layout reveal">
<div className="capabilities__tabs" role="tablist">
<div aria-selected="true" className="cap-tab is-active" data-panel="cap-compute" role="tab">
<div className="cap-tab__icon"><iconify-icon icon="lucide:cpu"></iconify-icon></div>
<span className="cap-tab__text">Neural Compute</span>
</div>
<div aria-selected="false" className="cap-tab" data-panel="cap-inference" role="tab">
<div className="cap-tab__icon"><iconify-icon icon="lucide:zap"></iconify-icon></div>
<span className="cap-tab__text">Real-time Inference</span>
</div>
<div aria-selected="false" className="cap-tab" data-panel="cap-pipelines" role="tab">
<div className="cap-tab__icon"><iconify-icon icon="lucide:git-merge"></iconify-icon></div>
<span className="cap-tab__text">Unified Pipelines</span>
</div>
<div aria-selected="false" className="cap-tab" data-panel="cap-edge" role="tab">
<div className="cap-tab__icon"><iconify-icon icon="lucide:globe"></iconify-icon></div>
<span className="cap-tab__text">Edge Intelligence</span>
</div>
<div aria-selected="false" className="cap-tab" data-panel="cap-security" role="tab">
<div className="cap-tab__icon"><iconify-icon icon="lucide:shield-check"></iconify-icon></div>
<span className="cap-tab__text">Enterprise Security</span>
</div>
</div>
<div className="capabilities__panels">

<div className="cap-panel is-active" id="cap-compute">
<h3 className="cap-panel__title">Neural Compute Engine</h3>
<p className="cap-panel__desc">GPU clusters that automatically adapt to your workload. Scale from a single inference to millions without changing a line of code.</p>
<div className="cap-panel__visual">
<div className="cap-tiles">
<div className="cap-tile">
<div className="cap-tile__val">94.2%</div>
<div className="cap-tile__lbl">GPU Util</div>
</div>
<div className="cap-tile">
<div className="cap-tile__val">12.4K</div>
<div className="cap-tile__lbl">Req/sec</div>
</div>
<div className="cap-tile">
<div className="cap-tile__val">-47%</div>
<div className="cap-tile__lbl">Cost</div>
</div>
</div>
</div>
</div>

<div className="cap-panel" id="cap-inference">
<h3 className="cap-panel__title">Real-time Inference</h3>
<p className="cap-panel__desc">Sub-millisecond model serving at global scale. Automatic optimization and caching for blazing-fast responses.</p>
<div className="cap-panel__visual">
<div className="cap-bars">
<div className="cap-bar" style={{height: '25%'}}></div>
<div className="cap-bar" style={{height: '40%'}}></div>
<div className="cap-bar" style={{height: '15%'}}></div>
<div className="cap-bar" style={{height: '60%'}}></div>
<div className="cap-bar" style={{height: '35%'}}></div>
<div className="cap-bar" style={{height: '90%'}}></div>
<div className="cap-bar" style={{height: '45%'}}></div>
<div className="cap-bar" style={{height: '95%'}}></div>
<div className="cap-bar" style={{height: '50%'}}></div>
<div className="cap-bar" style={{height: '20%'}}></div>
</div>
</div>
</div>

<div className="cap-panel" id="cap-pipelines">
<h3 className="cap-panel__title">Unified Pipelines</h3>
<p className="cap-panel__desc">End-to-end workflows from data ingestion to production deployment. Version everything, rollback anything.</p>
<div className="cap-panel__visual">
<div className="cap-code"><span className="kw">pipeline</span>:
  <span className="kw">name</span>: <span className="str">"prod-inference"</span>
<span className="kw">stages</span>:
    - <span className="kw">validate</span>: { <span className="kw">schema</span>: <span className="str">"v2"</span> }
    - <span className="kw">transform</span>: { <span className="kw">gpu</span>: <span className="num">true</span> }
    - <span className="kw">deploy</span>:
        <span className="kw">regions</span>: [<span className="str">"us-east"</span>, <span className="str">"eu-west"</span>]
        <span className="kw">replicas</span>: <span className="num">12</span>
<span className="kw">auto_scale</span>: <span className="num">true</span></div>
</div>
</div>

<div className="cap-panel" id="cap-edge">
<h3 className="cap-panel__title">Edge Intelligence</h3>
<p className="cap-panel__desc">Deploy models to 300+ edge locations worldwide. Ultra-low latency inference at the network edge.</p>
<div className="cap-panel__visual">
<div className="cap-map">
<div className="cap-map__dot" style={{top: '20%', left: '18%'}}></div>
<div className="cap-map__dot" style={{top: '35%', left: '32%'}}></div>
<div className="cap-map__dot" style={{top: '25%', left: '48%'}}></div>
<div className="cap-map__dot" style={{top: '30%', left: '55%'}}></div>
<div className="cap-map__dot" style={{top: '50%', left: '72%'}}></div>
<div className="cap-map__dot" style={{top: '40%', left: '85%'}}></div>
<div className="cap-map__dot" style={{top: '65%', left: '60%'}}></div>
</div>
</div>
</div>

<div className="cap-panel" id="cap-security">
<h3 className="cap-panel__title">Enterprise Security</h3>
<p className="cap-panel__desc">SOC 2 Type II, HIPAA, and GDPR compliant. Zero-trust architecture with end-to-end encryption.</p>
<div className="cap-panel__visual">
<div className="cap-shield">
<div className="cap-shield__row">
<iconify-icon icon="lucide:shield-check"></iconify-icon>
                SOC 2 Type II
                <span className="cap-shield__status">Certified</span>
</div>
<div className="cap-shield__row">
<iconify-icon icon="lucide:lock"></iconify-icon>
                256-bit AES Encryption
                <span className="cap-shield__status">Active</span>
</div>
<div className="cap-shield__row">
<iconify-icon icon="lucide:eye"></iconify-icon>
                Audit Logging
                <span className="cap-shield__status">Enabled</span>
</div>
<div className="cap-shield__row">
<iconify-icon icon="lucide:key"></iconify-icon>
                Zero-trust Access
                <span className="cap-shield__status">Enforced</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="platform" id="platform">
<div className="container">
<div className="section-header section-header--center reveal">
<div className="section-label">Deploy</div>
<h2 className="section-title">Ship to production<br/><span className="text-gradient">in seconds</span></h2>
<p className="section-desc">One command to go from model to globally-distributed endpoint. Zero infrastructure to manage.</p>
</div>
<div className="platform__terminal reveal-scale">
<div className="platform__terminal-bar">
<div className="platform__terminal-dots"><span></span><span></span><span></span></div>
<div className="platform__terminal-title">zenith — deploy</div>
<div style={{width: '36px'}}></div>
</div>
<div className="platform__terminal-body">
<div><span className="t-prompt">$</span> <span className="t-cmd">zenith deploy</span> <span className="t-flag">--model</span> llama-3.2 <span className="t-flag">--region</span> us-east-1</div>
<div> </div>
<div className="t-line"><span><span className="t-dim">  ●</span> Validating model config</span><span className="t-time"><span className="t-success">✓</span> 0.3s</span></div>
<div className="t-line"><span><span className="t-dim">  ●</span> Building inference container</span><span className="t-time"><span className="t-success">✓</span> 4.2s</span></div>
<div className="t-line"><span><span className="t-dim">  ●</span> Deploying to 12 edge locations</span><span className="t-time"><span className="t-success">✓</span> 1.8s</span></div>
<div className="t-line"><span><span className="t-dim">  ●</span> Running health checks</span><span className="t-time"><span className="t-success">✓</span> 0.5s</span></div>
<div className="t-line"><span><span className="t-dim">  ●</span> Configuring auto-scaling</span><span className="t-time"><span className="t-success">✓</span> 0.2s</span></div>
<div> </div>
<div><span className="t-success">  ✓ Deployment complete in 6.9s</span></div>
<div><span className="t-dim">  →</span> <span className="t-url">https://api.zenith.dev/v1/llama-3.2</span></div>
<div><span className="t-dim">  →</span> <span className="t-url">https://app.zenith.dev/d/d-7f3a</span><span className="t-cursor"></span></div>
</div>
</div>
<div className="platform__features stagger-up">
<div className="platform__feat reveal-child" style={{textAlign: 'center', padding: '16px 8px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border)'}}>
<iconify-icon icon="lucide:container" style={{fontSize: '1.1rem', color: 'var(--blue-light)', marginBottom: '6px', display: 'block'}}></iconify-icon>
<div style={{fontSize: '0.72rem', fontWeight: '400', marginBottom: '2px'}}>Auto-containerize</div>
<div style={{fontSize: '0.65rem', color: 'var(--text-3)'}}>Zero config</div>
</div>
<div className="platform__feat reveal-child" style={{textAlign: 'center', padding: '16px 8px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border)'}}>
<iconify-icon icon="lucide:git-branch" style={{fontSize: '1.1rem', color: 'var(--blue-light)', marginBottom: '6px', display: 'block'}}></iconify-icon>
<div style={{fontSize: '0.72rem', fontWeight: '400', marginBottom: '2px'}}>Branch deploys</div>
<div style={{fontSize: '0.65rem', color: 'var(--text-3)'}}>Preview URLs</div>
</div>
<div className="platform__feat reveal-child" style={{textAlign: 'center', padding: '16px 8px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border)'}}>
<iconify-icon icon="lucide:activity" style={{fontSize: '1.1rem', color: 'var(--blue-light)', marginBottom: '6px', display: 'block'}}></iconify-icon>
<div style={{fontSize: '0.72rem', fontWeight: '400', marginBottom: '2px'}}>Live metrics</div>
<div style={{fontSize: '0.65rem', color: 'var(--text-3)'}}>Real-time</div>
</div>
<div className="platform__feat reveal-child" style={{textAlign: 'center', padding: '16px 8px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border)'}}>
<iconify-icon icon="lucide:rotate-ccw" style={{fontSize: '1.1rem', color: 'var(--blue-light)', marginBottom: '6px', display: 'block'}}></iconify-icon>
<div style={{fontSize: '0.72rem', fontWeight: '400', marginBottom: '2px'}}>Instant rollback</div>
<div style={{fontSize: '0.65rem', color: 'var(--text-3)'}}>One click</div>
</div>
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
<span style={{fontSize: '0.68rem', color: 'var(--text-3)', fontFamily: '\'JetBrains Mono\', monospace', letterSpacing: '0.08em', textTransform: 'uppercase'}}>Integrates with</span>
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

<section className="social-proof">
<div className="container-sm">
<div className="section-header section-header--center reveal">
<div className="section-label">Wall of love</div>
<h2 className="section-title">Trusted by teams <span className="text-gradient">shipping at scale</span></h2>
</div>
</div>
<div className="social-proof__tracks">

<div className="social-proof__track-wrap">
<div className="social-proof__track social-proof__track--right">
<div className="love-card">
<p className="love-card__quote">"Zenith cut our deployment pipeline from 3 weeks to 15 minutes. The speed is unreal."</p>
<div className="love-card__author">
<img alt="Marcus Chen" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">Marcus Chen</div><div className="love-card__role">VP Engineering, Voltex</div></div>
</div>
</div>
<div className="love-card">
<p className="love-card__quote">"Full-stack ML monitoring set up in a single afternoon. The observability tools are phenomenal."</p>
<div className="love-card__author">
<img alt="Priya Sharma" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">Priya Sharma</div><div className="love-card__role">ML Lead, DataForge</div></div>
</div>
</div>
<div className="love-card">
<p className="love-card__quote">"Our team shipped 3x faster after switching to Zenith. The developer experience is unmatched."</p>
<div className="love-card__author">
<img alt="Alex Rivera" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">Alex Rivera</div><div className="love-card__role">Staff Engineer, Synaptic</div></div>
</div>
</div>
<div className="love-card">
<p className="love-card__quote">"Won every latency and reliability benchmark we tested. We evaluated every major platform."</p>
<div className="love-card__author">
<img alt="Elena Volkov" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">Elena Volkov</div><div className="love-card__role">ML Director, NeuralOps</div></div>
</div>
</div>

<div className="love-card">
<p className="love-card__quote">"Zenith cut our deployment pipeline from 3 weeks to 15 minutes. The speed is unreal."</p>
<div className="love-card__author">
<img alt="Marcus Chen" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">Marcus Chen</div><div className="love-card__role">VP Engineering, Voltex</div></div>
</div>
</div>
<div className="love-card">
<p className="love-card__quote">"Full-stack ML monitoring set up in a single afternoon. The observability tools are phenomenal."</p>
<div className="love-card__author">
<img alt="Priya Sharma" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">Priya Sharma</div><div className="love-card__role">ML Lead, DataForge</div></div>
</div>
</div>
<div className="love-card">
<p className="love-card__quote">"Our team shipped 3x faster after switching to Zenith. The developer experience is unmatched."</p>
<div className="love-card__author">
<img alt="Alex Rivera" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">Alex Rivera</div><div className="love-card__role">Staff Engineer, Synaptic</div></div>
</div>
</div>
<div className="love-card">
<p className="love-card__quote">"Won every latency and reliability benchmark we tested. We evaluated every major platform."</p>
<div className="love-card__author">
<img alt="Elena Volkov" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">Elena Volkov</div><div className="love-card__role">ML Director, NeuralOps</div></div>
</div>
</div>
</div>
</div>

<div className="social-proof__track-wrap">
<div className="social-proof__track social-proof__track--left">
<div className="love-card">
<p className="love-card__quote">"The only AI platform that handled our scale without us having to rearchitect anything."</p>
<div className="love-card__author">
<img alt="James Okafor" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">James Okafor</div><div className="love-card__role">CTO, Aegis AI</div></div>
</div>
</div>
<div className="love-card">
<p className="love-card__quote">"Auto-scaling saved us six figures in compute costs last quarter. ROI was immediate."</p>
<div className="love-card__author">
<img alt="Sarah Kim" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">Sarah Kim</div><div className="love-card__role">Head of AI, Cuboid</div></div>
</div>
</div>
<div className="love-card">
<p className="love-card__quote">"SOC 2 compliance out of the box was a game-changer for our enterprise deals."</p>
<div className="love-card__author">
<img alt="David Park" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">David Park</div><div className="love-card__role">CISO, Meridian</div></div>
</div>
</div>
<div className="love-card">
<p className="love-card__quote">"From prototype to production in hours, not months. It's genuinely transformative."</p>
<div className="love-card__author">
<img alt="Tom Wright" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">Tom Wright</div><div className="love-card__role">Founder, Stratum</div></div>
</div>
</div>

<div className="love-card">
<p className="love-card__quote">"The only AI platform that handled our scale without us having to rearchitect anything."</p>
<div className="love-card__author">
<img alt="James Okafor" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">James Okafor</div><div className="love-card__role">CTO, Aegis AI</div></div>
</div>
</div>
<div className="love-card">
<p className="love-card__quote">"Auto-scaling saved us six figures in compute costs last quarter. ROI was immediate."</p>
<div className="love-card__author">
<img alt="Sarah Kim" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">Sarah Kim</div><div className="love-card__role">Head of AI, Cuboid</div></div>
</div>
</div>
<div className="love-card">
<p className="love-card__quote">"SOC 2 compliance out of the box was a game-changer for our enterprise deals."</p>
<div className="love-card__author">
<img alt="David Park" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">David Park</div><div className="love-card__role">CISO, Meridian</div></div>
</div>
</div>
<div className="love-card">
<p className="love-card__quote">"From prototype to production in hours, not months. It's genuinely transformative."</p>
<div className="love-card__author">
<img alt="Tom Wright" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">Tom Wright</div><div className="love-card__role">Founder, Stratum</div></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pricing" id="pricing">
<div className="container">
<div className="section-header section-header--center reveal">
<div className="section-label">Pricing</div>
<h2 className="section-title">Start free, <span className="text-gradient">scale when ready</span></h2>
<p className="section-desc">No hidden fees. No surprise invoices. Just the compute you need.</p>
</div>
<div className="pricing__duo stagger-up">
<div className="pricing-card reveal-child">
<div className="pricing-card__name">Starter</div>
<div className="pricing-card__desc">For individuals and small experiments.</div>
<div className="pricing-card__price">
<span className="pricing-card__amount">$0</span>
<span className="pricing-card__period">/ month</span>
</div>
<div className="pricing-card__features">
<div className="pricing-card__feature"><iconify-icon icon="lucide:check"></iconify-icon> 10K inferences / month</div>
<div className="pricing-card__feature"><iconify-icon icon="lucide:check"></iconify-icon> 2 model deployments</div>
<div className="pricing-card__feature"><iconify-icon icon="lucide:check"></iconify-icon> Community support</div>
<div className="pricing-card__feature"><iconify-icon icon="lucide:check"></iconify-icon> Basic observability</div>
<div className="pricing-card__feature"><iconify-icon icon="lucide:check"></iconify-icon> 1 team member</div>
</div>
<a className="btn btn-ghost" href="#">Get Started</a>
</div>
<div className="pricing-card pricing-card--glow reveal-child">
<div className="pricing-card__badge">Most popular</div>
<div className="pricing-card__name">Pro</div>
<div className="pricing-card__desc">For teams shipping AI to production.</div>
<div className="pricing-card__price">
<span className="pricing-card__amount">$99</span>
<span className="pricing-card__period">/ month</span>
</div>
<div className="pricing-card__features">
<div className="pricing-card__feature"><iconify-icon icon="lucide:check"></iconify-icon> 1M inferences / month</div>
<div className="pricing-card__feature"><iconify-icon icon="lucide:check"></iconify-icon> Unlimited deployments</div>
<div className="pricing-card__feature"><iconify-icon icon="lucide:check"></iconify-icon> Priority support</div>
<div className="pricing-card__feature"><iconify-icon icon="lucide:check"></iconify-icon> Advanced observability</div>
<div className="pricing-card__feature"><iconify-icon icon="lucide:check"></iconify-icon> 10 team members</div>
<div className="pricing-card__feature"><iconify-icon icon="lucide:check"></iconify-icon> Auto-scaling</div>
<div className="pricing-card__feature"><iconify-icon icon="lucide:check"></iconify-icon> Custom domains</div>
</div>
<a className="btn btn-primary" href="#">Start Free Trial</a>
</div>
</div>
<div className="pricing__enterprise reveal">
<div className="pricing__enterprise-info">
<div className="pricing__enterprise-icon"><iconify-icon icon="lucide:building-2"></iconify-icon></div>
<div className="pricing__enterprise-text">
<div className="pricing__enterprise-name">Enterprise</div>
<div className="pricing__enterprise-desc">Dedicated infrastructure, SSO, RBAC, custom SLAs, and 24/7 premium support.</div>
</div>
</div>
<a className="btn btn-ghost" href="#">Contact Sales</a>
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
<a className="btn btn-ghost" href="#">Talk to an Expert</a>
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
<li><a href="#">Features</a></li>
<li><a href="#">Pricing</a></li>
<li><a href="#">Changelog</a></li>
<li><a href="#">Roadmap</a></li>
<li><a href="#">Status</a></li>
</ul>
</div>
<div className="footer__col">
<div className="footer__col-title">Resources</div>
<ul>
<li><a href="#">Documentation</a></li>
<li><a href="#">API Reference</a></li>
<li><a href="#">Guides</a></li>
<li><a href="#">Blog</a></li>
<li><a href="#">Community</a></li>
</ul>
</div>
<div className="footer__col">
<div className="footer__col-title">Company</div>
<ul>
<li><a href="#">About</a></li>
<li><a href="#">Careers</a></li>
<li><a href="#">Contact</a></li>
<li><a href="#">Privacy</a></li>
<li><a href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="footer__bottom">
<span>© <span id="footerYear"></span> Zenith Technologies, Inc. All rights reserved.</span>
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
