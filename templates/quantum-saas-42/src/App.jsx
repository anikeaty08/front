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



// ── Scroll reveal ──
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
revealEls.forEach(el => revealObs.observe(el));

// ── Navbar scroll ──
window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

// ── Mobile nav ──
document.getElementById('mobileToggle').addEventListener('click', () => document.getElementById('mobileNav').classList.add('active'));
document.getElementById('mobileClose').addEventListener('click', () => document.getElementById('mobileNav').classList.remove('active'));
document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', () => document.getElementById('mobileNav').classList.remove('active')));

// ── Cursor glow + flashlight ──
const glow = document.getElementById('cursorGlow');
const flashEl = document.getElementById('flashlight');
document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
    flashEl.style.setProperty('--fx', e.clientX + 'px');
    flashEl.style.setProperty('--fy', e.clientY + 'px');
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

// ── Bento card mouse tracking ──
document.querySelectorAll('.bento-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
        card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
    });
});

// ── Counter animation ──
const counters = document.querySelectorAll('.counter');
const cObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const c = entry.target;
            const target = +c.dataset.target;
            const start = performance.now();
            const dur = 2000;
            const anim = (now) => {
                const p = Math.min((now - start) / dur, 1);
                const eased = 1 - Math.pow(1 - p, 3);
                c.textContent = Math.round(target * eased);
                if (p < 1) requestAnimationFrame(anim);
            };
            requestAnimationFrame(anim);
            cObs.unobserve(c);
        }
    });
}, { threshold: 0.5 });
counters.forEach(c => cObs.observe(c));

// ── Smooth scroll ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
        e.preventDefault();
        const t = document.querySelector(this.getAttribute('href'));
        if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
      

<div className="unicorn-bg">
<iframe loading="lazy" src="https://www.unicorn.studio/embed/ydWk9Q3VwRy9OfYIrExC" title="Azure Wave Background"></iframe>
</div>
<div className="bg-noise"></div>
<div className="flashlight" id="flashlight"></div>
<div className="cursor-glow" id="cursorGlow"></div>

<svg height="0" style={{position: 'absolute'}} width="0">
<defs>
<lineargradient id="ringGrad" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#8B6CF6', stopOpacity: '0.4'}}></stop>
<stop offset="100%" style={{stopColor: '#06B6D4', stopOpacity: '0.1'}}></stop>
</lineargradient>
</defs>
</svg>

<nav className="navbar" id="navbar">
<div className="container">
<a className="logo" href="#">
            Velox
        </a>
<ul className="nav-links">
<li><a href="#features">Features</a></li>
<li><a href="#how">How it works</a></li>
<li><a href="#pricing">Pricing</a></li>
<li><a href="#testimonials">Reviews</a></li>
<li><a className="nav-cta" href="#cta">Get Started <i className="fa-solid fa-arrow-right" style={{fontSize: '0.7rem', marginLeft: '0.25rem'}}></i></a></li>
</ul>
<button aria-label="Menu" className="mobile-toggle" id="mobileToggle"><i className="fa-solid fa-bars"></i></button>
</div>
</nav>

<div className="mobile-nav" id="mobileNav">
<button aria-label="Close" className="mobile-nav-close" id="mobileClose"><i className="fa-solid fa-xmark"></i></button>
<a className="mobile-link" href="#features">Features</a>
<a className="mobile-link" href="#how">How it works</a>
<a className="mobile-link" href="#pricing">Pricing</a>
<a className="mobile-link" href="#testimonials">Reviews</a>
<a className="mobile-link" href="#cta">Get Started</a>
</div>

<section className="hero">
<div className="container">
<div className="hero-grid">
<div className="reveal">
<div className="hero-badge">
<div className="hero-badge-dot"></div>
                    Now processing $2B+ monthly
                </div>
<h1>Lending<br/>infrastructure<br/>that <span className="gradient-text">scales</span></h1>
<p className="hero-desc">Underwrite, originate, and service loans with an API-first platform built for modern lenders. From application to repayment, in one unified system.</p>
<div className="hero-actions">
<a className="btn-primary" href="#cta">Start Building <i className="fa-solid fa-arrow-right"></i></a>
<a className="btn-ghost" href="#how"><i className="fa-solid fa-play" style={{fontSize: '0.8rem'}}></i> Watch Demo</a>
</div>
<div className="hero-meta">
<div className="hero-meta-item"><i className="fa-solid fa-shield-halved"></i> SOC 2 Certified</div>
<div className="hero-meta-item"><i className="fa-solid fa-clock"></i> 2.4s Avg Decision</div>
<div className="hero-meta-item"><i className="fa-solid fa-server"></i> 99.99% Uptime</div>
</div>
</div>
<div className="hero-visual reveal stagger-2">
<div className="hero-dashboard">

<div className="hero-dash-card">
<div className="hero-dash-header">
<span className="hero-dash-label">Loan Volume</span>
<span className="hero-dash-badge green">Live</span>
</div>
<div className="hero-dash-value">$48.2M</div>
<div className="hero-dash-sub"><span className="up"><i className="fa-solid fa-arrow-up" style={{fontSize: '0.5rem'}}></i> 12.4%</span> vs last month</div>
<div className="hero-sparkline">
<div className="hero-sparkline-bar" style={{height: '30%'}}></div>
<div className="hero-sparkline-bar" style={{height: '45%'}}></div>
<div className="hero-sparkline-bar" style={{height: '35%'}}></div>
<div className="hero-sparkline-bar" style={{height: '60%'}}></div>
<div className="hero-sparkline-bar" style={{height: '50%'}}></div>
<div className="hero-sparkline-bar" style={{height: '72%'}}></div>
<div className="hero-sparkline-bar" style={{height: '65%'}}></div>
<div className="hero-sparkline-bar" style={{height: '85%'}}></div>
<div className="hero-sparkline-bar" style={{height: '78%'}}></div>
<div className="hero-sparkline-bar" style={{height: '95%'}}></div>
</div>
</div>
<div className="hero-dash-card">
<div className="hero-dash-header">
<span className="hero-dash-label">Approval Rate</span>
<span className="hero-dash-badge purple">ML v3.2</span>
</div>
<div className="hero-dash-value">94.7%</div>
<div className="hero-dash-sub"><span className="up"><i className="fa-solid fa-arrow-up" style={{fontSize: '0.5rem'}}></i> 3.1%</span> with AI scoring</div>
<div className="hero-progress">
<div className="hero-progress-row"><span>Auto</span><div className="hero-progress-track"><div className="hero-progress-fill g1" style={{width: '87%'}}></div></div><span className="hero-progress-pct">87%</span></div>
<div className="hero-progress-row"><span>Review</span><div className="hero-progress-track"><div className="hero-progress-fill g2" style={{width: '11%'}}></div></div><span className="hero-progress-pct">11%</span></div>
<div className="hero-progress-row"><span>Declined</span><div className="hero-progress-track"><div className="hero-progress-fill g3" style={{width: '5%'}}></div></div><span className="hero-progress-pct">5%</span></div>
</div>
</div>

<div className="hero-dash-card hero-dash-wide">
<div className="hero-dash-header">
<span className="hero-dash-label">API Integration</span>
<span className="hero-dash-badge green">200 OK</span>
</div>
<div className="hero-code">
<span className="cmt">// Create underwriting decision</span><br/>
<span className="kw">const</span> decision = <span className="kw">await</span> velox.<span className="fn">underwrite</span>({<br/>
                              applicant_id: <span className="str">"app_8kX2m"</span>,<br/>
                              loan_amount: <span className="num">125000</span>,<br/>
                              model: <span className="str">"risk-v3.2"</span><br/>
                            }); <span className="cmt">// → 2.4s avg response</span>
</div>
</div>

<div className="hero-dash-card">
<div className="hero-dash-header">
<span className="hero-dash-label">Activity</span>
</div>
<div className="hero-feed">
<div className="hero-feed-item"><div className="hero-feed-dot green"></div> Loan #4821 approved <span className="hero-feed-time">2s ago</span></div>
<div className="hero-feed-item"><div className="hero-feed-dot purple"></div> Risk model retrained <span className="hero-feed-time">14m ago</span></div>
<div className="hero-feed-item"><div className="hero-feed-dot amber"></div> Manual review #4819 <span className="hero-feed-time">28m ago</span></div>
<div className="hero-feed-item"><div className="hero-feed-dot green"></div> Batch #302 processed <span className="hero-feed-time">1h ago</span></div>
<div className="hero-feed-item"><div className="hero-feed-dot rose"></div> Webhook retry sent <span className="hero-feed-time">2h ago</span></div>
</div>
</div>
<div className="hero-dash-card">
<div className="hero-dash-header">
<span className="hero-dash-label">Risk Distribution</span>
<span className="hero-dash-badge amber">Today</span>
</div>
<div className="hero-sparkline" style={{height: '22px'}}>
<div className="hero-sparkline-bar" style={{height: '90%', background: 'var(--emerald)', opacity: '0.6'}}></div>
<div className="hero-sparkline-bar" style={{height: '85%', background: 'var(--emerald)', opacity: '0.5'}}></div>
<div className="hero-sparkline-bar" style={{height: '70%', background: 'var(--emerald)', opacity: '0.5'}}></div>
<div className="hero-sparkline-bar" style={{height: '55%', background: 'var(--primary-light)', opacity: '0.5'}}></div>
<div className="hero-sparkline-bar" style={{height: '40%', background: 'var(--primary-light)', opacity: '0.5'}}></div>
<div className="hero-sparkline-bar" style={{height: '25%', background: 'var(--accent-warm)', opacity: '0.5'}}></div>
<div className="hero-sparkline-bar" style={{height: '12%', background: 'var(--rose)', opacity: '0.5'}}></div>
<div className="hero-sparkline-bar" style={{height: '5%', background: 'var(--rose)', opacity: '0.4'}}></div>
</div>
<div className="hero-dash-sub" style={{marginTop: '0.4rem', justifyContent: 'space-between'}}><span style={{color: 'var(--emerald)'}}>Low risk</span><span style={{color: 'var(--rose)'}}>High risk</span></div>
<div style={{display: 'flex', gap: '0.5rem', marginTop: '0.5rem'}}>
<div style={{flex: '1', textAlign: 'center', padding: '0.3rem', borderRadius: '6px', background: 'rgba(0,0,0,0.2)'}}>
<div style={{fontSize: '0.85rem', fontWeight: '200', color: 'var(--white)'}}>682</div>
<div style={{fontSize: '0.5rem', color: 'var(--gray-700)', textTransform: 'uppercase', letterSpacing: '1px'}}>Avg FICO</div>
</div>
<div style={{flex: '1', textAlign: 'center', padding: '0.3rem', borderRadius: '6px', background: 'rgba(0,0,0,0.2)'}}>
<div style={{fontSize: '0.85rem', fontWeight: '200', color: 'var(--white)'}}>0.3%</div>
<div style={{fontSize: '0.5rem', color: 'var(--gray-700)', textTransform: 'uppercase', letterSpacing: '1px'}}>Default</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="marquee-section">
<div className="marquee-wrapper">
<div className="marquee-track">
<span className="marquee-item"><i className="fa-solid fa-shield-halved"></i> SOC 2 Type II</span>
<span className="marquee-sep">•</span>
<span className="marquee-item"><i className="fa-solid fa-bolt"></i> 2.4s Avg Decision</span>
<span className="marquee-sep">•</span>
<span className="marquee-item"><i className="fa-solid fa-server"></i> 99.99% Uptime SLA</span>
<span className="marquee-sep">•</span>
<span className="marquee-item"><i className="fa-solid fa-lock"></i> Bank-grade Encryption</span>
<span className="marquee-sep">•</span>
<span className="marquee-item"><i className="fa-solid fa-globe"></i> GDPR Compliant</span>
<span className="marquee-sep">•</span>
<span className="marquee-item"><i className="fa-solid fa-code"></i> API-First Platform</span>
<span className="marquee-sep">•</span>
<span className="marquee-item"><i className="fa-solid fa-chart-line"></i> $9B+ Loans Processed</span>
<span className="marquee-sep">•</span>
<span className="marquee-item"><i className="fa-solid fa-users"></i> 340+ Lender Partners</span>
<span className="marquee-sep">•</span>
<span className="marquee-item"><i className="fa-solid fa-shield-halved"></i> SOC 2 Type II</span>
<span className="marquee-sep">•</span>
<span className="marquee-item"><i className="fa-solid fa-bolt"></i> 2.4s Avg Decision</span>
<span className="marquee-sep">•</span>
<span className="marquee-item"><i className="fa-solid fa-server"></i> 99.99% Uptime SLA</span>
<span className="marquee-sep">•</span>
<span className="marquee-item"><i className="fa-solid fa-lock"></i> Bank-grade Encryption</span>
<span className="marquee-sep">•</span>
<span className="marquee-item"><i className="fa-solid fa-globe"></i> GDPR Compliant</span>
<span className="marquee-sep">•</span>
<span className="marquee-item"><i className="fa-solid fa-code"></i> API-First Platform</span>
<span className="marquee-sep">•</span>
<span className="marquee-item"><i className="fa-solid fa-chart-line"></i> $9B+ Loans Processed</span>
<span className="marquee-sep">•</span>
<span className="marquee-item"><i className="fa-solid fa-users"></i> 340+ Lender Partners</span>
</div>
</div>
</section>

<section className="section" id="features" style={{overflow: 'hidden'}}>
<div className="container">
<div className="reveal" style={{textAlign: 'center'}}>
<div className="section-label"><i className="fa-solid fa-grid-2"></i> Platform Capabilities</div>
<h2 className="section-title">Everything you need to<br/>lend <span className="gradient-text">intelligently</span></h2>
<p className="section-subtitle" style={{margin: '0 auto'}}>A modular, composable platform that adapts to your lending vertical—consumer, SMB, mortgage, or embedded finance.</p>
</div>
<div className="bento-grid">

<div className="bento-card bento-span-8 reveal stagger-1">
<div className="bento-icon blue"><i className="fa-solid fa-brain"></i></div>
<div className="bento-title">AI-Powered Underwriting</div>
<div className="bento-desc">Proprietary ML models analyze 1,500+ data points in real time. Reduce default rates by 40% while approving 25% more applications through intelligent risk scoring.</div>
<div className="bento-visual">
<img alt="Data patterns" loading="lazy" src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&amp;q=80"/>
</div>
<svg className="bento-rings" viewbox="0 0 200 200"><circle cx="100" cy="100" r="60"></circle><circle cx="100" cy="100" r="80"></circle><circle cx="100" cy="100" r="95"></circle></svg>
</div>

<div className="bento-card bento-span-4 reveal stagger-2">
<div className="bento-icon cyan"><i className="fa-solid fa-plug"></i></div>
<div className="bento-title">API-First Architecture</div>
<div className="bento-desc">RESTful APIs with 99.99% uptime SLA. Integrate in days, not months.</div>
<div className="mini-chart">
<div className="mini-chart-bar" style={{height: '30%'}}></div>
<div className="mini-chart-bar" style={{height: '55%'}}></div>
<div className="mini-chart-bar" style={{height: '40%'}}></div>
<div className="mini-chart-bar" style={{height: '70%'}}></div>
<div className="mini-chart-bar" style={{height: '55%'}}></div>
<div className="mini-chart-bar" style={{height: '85%'}}></div>
<div className="mini-chart-bar" style={{height: '72%'}}></div>
<div className="mini-chart-bar" style={{height: '95%'}}></div>
</div>
</div>

<div className="bento-card bento-span-5 reveal stagger-1">
<div className="bento-icon violet"><i className="fa-solid fa-code"></i></div>
<div className="bento-title">Developer Experience</div>
<div className="bento-desc">Ship faster with our SDK, webhooks, and sandbox.</div>
<div className="bento-code">
<span className="cmt">// Create a loan application</span><br/>
<span className="kw">const</span> app = <span className="kw">await</span> velox.<span className="fn">applications</span>.<span className="fn">create</span>({<br/>
                      amount: <span className="str">50000</span>,<br/>
                      term: <span className="str">36</span>,<br/>
                      type: <span className="str">"business"</span><br/>
                    });<br/>
<span className="cmt">// Decision in ~2.4s</span>
</div>
</div>

<div className="bento-card bento-span-7 reveal stagger-2">
<div className="bento-icon amber"><i className="fa-solid fa-file-contract"></i></div>
<div className="bento-title">Smart Contracts &amp; Compliance</div>
<div className="bento-desc">Auto-generate compliant loan documents with dynamic terms. State-by-state regulatory compliance built in. TILA, ECOA, HMDA, and fair lending checks run automatically on every decision.</div>
<div className="bento-visual">
<img alt="Screen interface" loading="lazy" src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&amp;q=80"/>
</div>
</div>

<div className="bento-card bento-span-4 reveal stagger-1">
<div className="bento-icon emerald"><i className="fa-solid fa-arrows-spin"></i></div>
<div className="bento-title">Loan Lifecycle Engine</div>
<div className="bento-desc">Automated servicing from disbursement through payoff. Payment processing, escrow, and collections unified.</div>
</div>

<div className="bento-card bento-span-4 reveal stagger-2">
<div className="bento-icon rose"><i className="fa-solid fa-chart-column"></i></div>
<div className="bento-title">Portfolio Analytics</div>
<div className="bento-desc">Real-time dashboards with predictive insights. Monitor delinquency trends before they become problems.</div>
</div>

<div className="bento-card bento-span-4 reveal stagger-3">
<div className="bento-icon violet"><i className="fa-solid fa-lock"></i></div>
<div className="bento-title">Enterprise Security</div>
<div className="bento-desc">SOC 2 Type II, bank-grade AES-256 encryption, SSO, RBAC, and complete audit trails for every action.</div>
</div>
</div>
</div>
</section>

<section className="section how-section" id="how" style={{overflow: 'hidden'}}>
<div className="container">
<div className="reveal" style={{textAlign: 'center'}}>
<div className="section-label"><i className="fa-solid fa-route"></i> How It Works</div>
<h2 className="section-title">Go live in <span className="gradient-text">three steps</span></h2>
<p className="section-subtitle" style={{margin: '0 auto'}}>From integration to your first disbursement, we streamline every touchpoint so you can focus on growth.</p>
</div>
<div className="steps-container">
<div className="steps-line"></div>
<div className="step-row reveal-left">
<div className="step-content">
<div className="step-title">Connect your systems</div>
<div className="step-desc">Plug into your existing CRM, banking core, or origination platform with our pre-built connectors and comprehensive SDK.</div>
</div>
<div className="step-number-col"><div className="step-number">01</div></div>
<div className="step-visual">
<div className="step-visual-card">
<div className="step-visual-icon g1"><i className="fa-solid fa-code-branch"></i></div>
<div className="step-visual-bars">
<div className="step-bar"><div className="step-bar-fill reveal-child g1" style={{'--fill': '90%'}}></div></div>
<div className="step-bar"><div className="step-bar-fill reveal-child g1" style={{'--fill': '75%'}}></div></div>
<div className="step-bar"><div className="step-bar-fill reveal-child g1" style={{'--fill': '95%'}}></div></div>
</div>
</div>
</div>
</div>
<div className="step-row reveal-right">
<div className="step-content">
<div className="step-title">Configure your rules</div>
<div className="step-desc">Define credit policies, risk thresholds, and product parameters through our visual rule builder. No code required.</div>
</div>
<div className="step-number-col"><div className="step-number">02</div></div>
<div className="step-visual">
<div className="step-visual-card">
<div className="step-visual-icon g2"><i className="fa-solid fa-sliders"></i></div>
<div className="step-visual-bars">
<div className="step-bar"><div className="step-bar-fill reveal-child g2" style={{'--fill': '60%'}}></div></div>
<div className="step-bar"><div className="step-bar-fill reveal-child g2" style={{'--fill': '85%'}}></div></div>
<div className="step-bar"><div className="step-bar-fill reveal-child g2" style={{'--fill': '70%'}}></div></div>
</div>
</div>
</div>
</div>
<div className="step-row reveal-left">
<div className="step-content">
<div className="step-title">Launch and scale</div>
<div className="step-desc">Start processing applications immediately. Our infrastructure auto-scales to handle any volume—from 10 to 10 million loans.</div>
</div>
<div className="step-number-col"><div className="step-number">03</div></div>
<div className="step-visual">
<div className="step-visual-card">
<div className="step-visual-icon g3"><i className="fa-solid fa-rocket"></i></div>
<div className="step-visual-bars">
<div className="step-bar"><div className="step-bar-fill reveal-child g3" style={{'--fill': '100%'}}></div></div>
<div className="step-bar"><div className="step-bar-fill reveal-child g3" style={{'--fill': '88%'}}></div></div>
<div className="step-bar"><div className="step-bar-fill reveal-child g3" style={{'--fill': '95%'}}></div></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="stats-section">
<div className="container">
<div className="stats-inner reveal-scale">
<div className="stats-grid">
<div className="stat-block reveal stagger-1">
<div className="stat-icon g1"><i className="fa-solid fa-dollar-sign"></i></div>
<div className="stat-value"><span className="counter" data-target="24">0</span><span className="stat-unit gradient-text">B+</span></div>
<div className="stat-label">Loans Processed</div>
</div>
<div className="stat-block reveal stagger-2">
<div className="stat-icon g2"><i className="fa-solid fa-handshake"></i></div>
<div className="stat-value"><span className="counter" data-target="340">0</span><span className="stat-unit gradient-text">+</span></div>
<div className="stat-label">Lender Partners</div>
</div>
<div className="stat-block reveal stagger-3">
<div className="stat-icon g3"><i className="fa-solid fa-server"></i></div>
<div className="stat-value"><span className="counter" data-target="99">0</span><span className="stat-unit gradient-text">.99%</span></div>
<div className="stat-label">Platform Uptime</div>
</div>
<div className="stat-block reveal stagger-4">
<div className="stat-icon g1"><i className="fa-solid fa-gauge-high"></i></div>
<div className="stat-value"><span className="counter" data-target="2">0</span><span className="stat-unit gradient-text">.4s</span></div>
<div className="stat-label">Avg Decision Time</div>
</div>
</div>
</div>
</div>
</section>

<section className="section" id="pricing">
<div className="container">
<div className="reveal" style={{textAlign: 'center'}}>
<div className="section-label"><i className="fa-solid fa-tag"></i> Pricing</div>
<h2 className="section-title">Transparent, <span className="gradient-text">usage-based</span> pricing</h2>
<p className="section-subtitle" style={{margin: '0 auto'}}>Start free, scale without surprises. Pay only for what you use with no hidden fees or long-term contracts.</p>
</div>
<div className="pricing-grid">
<div className="price-card reveal stagger-1">
<div className="price-name">Starter</div>
<div className="price-amount"><span>$</span>0</div>
<div className="price-period">Free forever, up to 100 loans/mo</div>
<div className="price-divider"></div>
<ul className="price-features">
<li><i className="fa-solid fa-check"></i> Basic underwriting API</li>
<li><i className="fa-solid fa-check"></i> 3 credit data sources</li>
<li><i className="fa-solid fa-check"></i> Standard document generation</li>
<li><i className="fa-solid fa-check"></i> Email support</li>
<li><i className="fa-solid fa-check"></i> Sandbox environment</li>
</ul>
<a className="price-btn price-btn-outline" href="#">Start Free</a>
</div>
<div className="price-card featured reveal stagger-2">
<div className="price-popular">Most Popular</div>
<div className="price-name">Growth</div>
<div className="price-amount"><span>$</span>499</div>
<div className="price-period">per month + $0.50 per loan</div>
<div className="price-divider"></div>
<ul className="price-features">
<li><i className="fa-solid fa-check"></i> Advanced ML underwriting</li>
<li><i className="fa-solid fa-check"></i> 12 credit data sources</li>
<li><i className="fa-solid fa-check"></i> Custom decision rules</li>
<li><i className="fa-solid fa-check"></i> Portfolio analytics dashboard</li>
<li><i className="fa-solid fa-check"></i> Priority support + SLA</li>
<li><i className="fa-solid fa-check"></i> Compliance monitoring</li>
</ul>
<a className="price-btn price-btn-solid" href="#">Start 14-Day Trial</a>
</div>
<div className="price-card reveal stagger-3">
<div className="price-name">Enterprise</div>
<div className="price-amount">Custom</div>
<div className="price-period">Tailored to your volume</div>
<div className="price-divider"></div>
<ul className="price-features">
<li><i className="fa-solid fa-check"></i> Dedicated ML training</li>
<li><i className="fa-solid fa-check"></i> Unlimited data sources</li>
<li><i className="fa-solid fa-check"></i> White-label solution</li>
<li><i className="fa-solid fa-check"></i> On-premise deployment</li>
<li><i className="fa-solid fa-check"></i> Custom SLA + 24/7 support</li>
</ul>
<a className="price-btn price-btn-outline" href="#">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="section" id="testimonials">
<div className="container">
<div className="reveal" style={{textAlign: 'center'}}>
<div className="section-label"><i className="fa-solid fa-quote-left"></i> Testimonials</div>
<h2 className="section-title">Trusted by <span className="gradient-text">lending leaders</span></h2>
<p className="section-subtitle" style={{margin: '0 auto'}}>See how innovative lenders are transforming their operations with Velox.</p>
</div>
<div className="testimonials-grid">
<div className="testimonial-card reveal stagger-1">
<div className="testimonial-quote"><i className="fa-solid fa-quote-left"></i></div>
<div className="testimonial-stars">
<i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
</div>
<p className="testimonial-text">"Velox cut our loan processing time from 5 days to under 3 minutes. Our conversion rate doubled in the first quarter after integration."</p>
<div className="testimonial-author">
<img alt="Marcus Chen" className="testimonial-avatar" loading="lazy" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&amp;h=80&amp;fit=crop&amp;crop=face"/>
<div>
<div className="testimonial-name">Marcus Chen</div>
<div className="testimonial-role">CTO, NovaCrest Bank</div>
</div>
</div>
</div>
<div className="testimonial-card reveal stagger-2">
<div className="testimonial-quote"><i className="fa-solid fa-quote-left"></i></div>
<div className="testimonial-stars">
<i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
</div>
<p className="testimonial-text">"The AI underwriting engine is remarkably accurate. We reduced defaults by 38% while increasing our approval rates. The ROI was visible within weeks."</p>
<div className="testimonial-author">
<img alt="Sarah Okonjo" className="testimonial-avatar" loading="lazy" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&amp;h=80&amp;fit=crop&amp;crop=face"/>
<div>
<div className="testimonial-name">Sarah Okonjo</div>
<div className="testimonial-role">VP Risk, Meridian Capital</div>
</div>
</div>
</div>
<div className="testimonial-card reveal stagger-3">
<div className="testimonial-quote"><i className="fa-solid fa-quote-left"></i></div>
<div className="testimonial-stars">
<i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
</div>
<p className="testimonial-text">"We evaluated six platforms. Velox was the only one that could handle our multi-state compliance requirements out of the box. Implementation took just 11 days."</p>
<div className="testimonial-author">
<img alt="David Park" className="testimonial-avatar" loading="lazy" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&amp;h=80&amp;fit=crop&amp;crop=face"/>
<div>
<div className="testimonial-name">David Park</div>
<div className="testimonial-role">CEO, FinBridge</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="cta-section" id="cta">
<div className="container">
<div className="cta-card reveal-scale">
<div className="cta-deco-line cta-deco-line-1"></div>
<div className="cta-deco-line cta-deco-line-2"></div>
<div className="cta-content">
<h2 className="cta-title">Ready to modernize your<br/><span className="gradient-text">lending stack</span>?</h2>
<p className="cta-desc">Join 340+ lenders processing $24B+ in loans through Velox. Get started in minutes with our free tier.</p>
<div className="cta-actions">
<a className="btn-primary" href="#">Start Building Free <i className="fa-solid fa-arrow-right"></i></a>
<a className="btn-ghost" href="#"><i className="fa-solid fa-calendar" style={{fontSize: '0.85rem'}}></i> Book a Demo</a>
</div>
<div className="cta-trust">
<span><i className="fa-solid fa-lock"></i> SOC 2 Type II</span>
<span><i className="fa-solid fa-shield-halved"></i> Bank-grade encryption</span>
<span><i className="fa-solid fa-file-shield"></i> GDPR compliant</span>
<span><i className="fa-solid fa-credit-card"></i> PCI DSS</span>
</div>
</div>
</div>
</div>
</section>

<footer className="footer">
<div className="container">
<div className="footer-grid">
<div className="footer-brand">
<a className="logo" href="#">
                    Velox
                </a>
<p>Intelligent lending infrastructure for modern financial institutions. API-first, AI-powered, compliance-ready.</p>
</div>
<div>
<div className="footer-heading">Product</div>
<ul className="footer-links">
<li><a href="#">Underwriting API</a></li>
<li><a href="#">Loan Servicing</a></li>
<li><a href="#">Analytics</a></li>
<li><a href="#">Compliance</a></li>
<li><a href="#">Changelog</a></li>
</ul>
</div>
<div>
<div className="footer-heading">Company</div>
<ul className="footer-links">
<li><a href="#">About</a></li>
<li><a href="#">Careers</a></li>
<li><a href="#">Blog</a></li>
<li><a href="#">Press</a></li>
<li><a href="#">Contact</a></li>
</ul>
</div>
<div>
<div className="footer-heading">Resources</div>
<ul className="footer-links">
<li><a href="#">Documentation</a></li>
<li><a href="#">API Reference</a></li>
<li><a href="#">Status Page</a></li>
<li><a href="#">Security</a></li>
<li><a href="#">Partners</a></li>
</ul>
</div>
</div>
<div className="footer-bottom">
<span>2026 Velox, Inc. All rights reserved.</span>
<div className="footer-socials">
<a aria-label="Twitter" href="#"><i className="fa-brands fa-x-twitter"></i></a>
<a aria-label="LinkedIn" href="#"><i className="fa-brands fa-linkedin-in"></i></a>
<a aria-label="GitHub" href="#"><i className="fa-brands fa-github"></i></a>
<a aria-label="Discord" href="#"><i className="fa-brands fa-discord"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
