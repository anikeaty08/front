import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');


!function(){var s=document.createElement("script");s.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.3/dist/unicornStudio.umd.js";s.onload=function(){window.UnicornStudio&&window.UnicornStudio.init()};document.head.appendChild(s)}();


(function() {
  'use strict';

  // Fallback garantido: caso a renderização trave ou a IntersectionObserver falhe, revelamos os elementos.
  setTimeout(() => {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-child, .stagger-up').forEach(el => el.classList.add('visible'));
    document.querySelectorAll('.bento-card, .dashboard-mock').forEach(el => el.classList.add('animated'));
  }, 1200);

  // Ano atual
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Lenis Smooth Scroll encapsulado com segurança
  try {
    if (typeof Lenis !== 'undefined') {
      const lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  } catch(e) { console.warn('Lenis scroll error:', e); }

  // Menu
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
  }

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      if (hamburger) hamburger.classList.remove('active');
      if (mobileMenu) mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Intersections para animar a entrada
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal, .reveal-left, .stagger-up').forEach(el => revealObserver.observe(el));

  // Intersections para animar widgets internos
  const widgetObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        widgetObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  document.querySelectorAll('.bento-card, .dashboard-mock').forEach(card => widgetObserver.observe(card));

  // Node Grid (Garante que se JavaScript falhar, existirá o HTML puro)
  const nodeGrid = document.getElementById('node-grid');
  if (nodeGrid && nodeGrid.children.length === 0) {
    const activeIndices = [2,5,7,9,10,14,15,17,19,21,23];
    for (let i = 0; i < 24; i++) {
      const dot = document.createElement('div');
      dot.className = 'node-dot' + (activeIndices.includes(i) ? ' active' : '');
      dot.style.animationDelay = (i * 0.04) + 's';
      nodeGrid.appendChild(dot);
    }
  } else if (nodeGrid) {
    // Se já foi preenchido pelo HTML fallback, apenas aplica o delay visual dinamicamente
    Array.from(nodeGrid.children).forEach((dot, i) => {
        dot.style.animationDelay = (i * 0.04) + 's';
    });
  }

})();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="nav" id="nav">
<div className="nav-inner">
<a className="nav-logo" href="#" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d9ef4fda-2c15-498e-a6c0-e4c2064a8226_320w.png\')'}}></a>
<div className="nav-links">
<a href="#features">The Flywheel</a>
<a href="#platform">Solutions</a>
<a href="#pricing">Compliance</a>
<a href="#docs">About</a>
<button className="nav-cta">Calculate Leakage</button>
</div>
<button aria-label="Menu" className="hamburger" id="hamburger">
<span></span><span></span><span></span>
</button>
</div>
</nav>
<div className="mobile-menu" id="mobile-menu">
<a className="mobile-link" href="#features">The Flywheel</a>
<a className="mobile-link" href="#platform">Solutions</a>
<a className="mobile-link" href="#pricing">Compliance</a>
<a className="mobile-link" href="#docs">About</a>
<button className="nav-cta">Calculate Leakage</button>
</div>

<section className="hero" id="hero">
<div className="hero-bg">
<div data-us-dpi="1" data-us-fps="30" data-us-lazyload="true" data-us-production="true" data-us-project="WL20Cho3hr5Ge8Pk2QUl" data-us-scale="0.75" style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}}></div>
</div>
<div className="hero-content">
<div className="reveal visible">
<div className="hero-badge">
<span className="hero-badge-dot"></span>
        Now in Public Beta
      </div>
<h1 className="hero-title">Human Intelligence at <strong className="text-gradient">Machine Scale</strong></h1>
</div>
<div className="hero-bottom reveal visible">
<p className="hero-desc">Most sales teams only work 8 hours a day. We cover the other 16. Our infrastructure integrates seamlessly with your CRM to ensure every inquiry is met with an instant, human-like response.</p>
<div className="hero-actions">
<button className="btn-conic" onclick="window.location.hash='pricing'">FREE Diagnosis</button>
<button className="btn-ghost">What Sellum does?</button>
</div>
</div>
</div>
</section>

<section className="bento-section" id="features">
<div className="container">
<div className="bento-header reveal">
<div className="eyebrow" style={{justifyContent: 'center'}}>Features</div>
<h2 className="section-title">From Linear Funnels to Exponential Flywheels</h2>
<p className="section-desc">Why traditional lead management is failing your growth. Linear funnels lose energy at every stage. Leads drop out, data is lost, and the cycle starts from zero every month.</p>
</div>
<div className="bento-grid stagger-up">

<div className="bento-card w2 reveal-child">
<h3>The Conversational Flywheel™</h3>
<p>Revenue isn't a linear path. It's a momentum-driven engine.</p>
<div className="widget-bars">
<div className="bar" style={{-H: '0.35'}}></div>
<div className="bar" style={{-H: '0.55'}}></div>
<div className="bar" style={{-H: '0.8'}}></div>
<div className="bar" style={{-H: '0.45'}}></div>
<div className="bar" style={{-H: '0.92'}}></div>
<div className="bar" style={{-H: '0.65'}}></div>
<div className="bar" style={{-H: '0.75'}}></div>
<div className="bar" style={{-H: '0.5'}}></div>
</div>
</div>
<div className="bento-card w2 reveal-child">
<h3>Nurture: Compounding Long-Term LTV</h3>
<p>Full request tracing with structured logs and latency breakdown.</p>
<div className="widget-logs">
<div className="log-line"><span className="log-time">12:04:21</span><span className="log-method get">GET</span><span className="log-msg">/v1/models — 200 2ms</span></div>
<div className="log-line"><span className="log-time">12:04:22</span><span className="log-method post">POST</span><span className="log-msg">/v1/completions — 200 48ms</span></div>
<div className="log-line"><span className="log-time">12:04:23</span><span className="log-method post">POST</span><span className="log-msg">/v1/embeddings — 200 12ms</span></div>
<div className="log-line"><span className="log-time">12:04:24</span><span className="log-method put">PUT</span><span className="log-msg">/v1/models/cfg — 200 5ms</span></div>
</div>
</div>

<div className="bento-card reveal-child">
<h3>Qualify: Real-time Intent Diagnosis</h3>
<p>Filter the noise. Focus on the signal.</p>
<div className="widget-status">
<div className="status-row"><span className="label">intent-accuracy</span><span className="value green">98.2%</span></div>
<div className="status-row"><span className="label">bant-completion</span><span className="value green">94.7%</span></div>
<div className="status-row"><span className="label">sql-confidence</span><span className="value yellow">87.1%</span></div>
</div>
</div>
<div className="bento-card reveal-child">
<h3>Sell: Persuasion through Empathy</h3>
<p>High-conversion scripts meet human-like intelligence.</p>
<div className="widget-progress">
<div className="progress-item">
<div className="progress-label"><span>Context Retention</span><span>78%</span></div>
<div className="progress-track"><div className="progress-fill" style={{-W: '78%'}}></div></div>
</div>
<div className="progress-item">
<div className="progress-label"><span>Sentiment Alignment</span><span>92%</span></div>
<div className="progress-track"><div className="progress-fill" style={{-W: '92%'}}></div></div>
</div>
</div>
</div>
<div className="bento-card reveal-child">
<h3>Book: Closing the Gap</h3>
<p>From "I'm interested" to "See you then" in under 60 seconds.</p>
<div className="widget-nodes" id="node-grid">

<div className="node-dot" style={{animationDelay: '0s'}}></div><div className="node-dot" style={{animationDelay: '0.04s'}}></div><div className="node-dot active" style={{animationDelay: '0.08s'}}></div>
<div className="node-dot" style={{animationDelay: '0.12s'}}></div><div className="node-dot" style={{animationDelay: '0.16s'}}></div><div className="node-dot active" style={{animationDelay: '0.2s'}}></div>
<div className="node-dot" style={{animationDelay: '0.24s'}}></div><div className="node-dot active" style={{animationDelay: '0.28s'}}></div><div className="node-dot" style={{animationDelay: '0.32s'}}></div>
<div className="node-dot active" style={{animationDelay: '0.36s'}}></div><div className="node-dot active" style={{animationDelay: '0.4s'}}></div><div className="node-dot" style={{animationDelay: '0.44s'}}></div>
<div className="node-dot" style={{animationDelay: '0.48s'}}></div><div className="node-dot" style={{animationDelay: '0.52s'}}></div><div className="node-dot active" style={{animationDelay: '0.56s'}}></div>
<div className="node-dot active" style={{animationDelay: '0.6s'}}></div><div className="node-dot" style={{animationDelay: '0.64s'}}></div><div className="node-dot active" style={{animationDelay: '0.68s'}}></div>
<div className="node-dot" style={{animationDelay: '0.72s'}}></div><div className="node-dot active" style={{animationDelay: '0.76s'}}></div><div className="node-dot" style={{animationDelay: '0.8s'}}></div>
<div className="node-dot active" style={{animationDelay: '0.84s'}}></div><div className="node-dot" style={{animationDelay: '0.88s'}}></div><div className="node-dot active" style={{animationDelay: '0.92s'}}></div>
</div>
</div>
<div className="bento-card reveal-child">
<h3>Recover: No Lead Left Behind</h3>
<p>Rescuing the "Lost 30%" of your pipeline.</p>
<div className="widget-metrics">
<div className="mini-metric">
<div className="metric-value">+18%</div>
<div className="metric-label">PIPELINE</div>
</div>
<div className="mini-metric">
<div className="metric-value">100%</div>
<div className="metric-label">FOLLOW UP</div>
</div>
<div className="mini-metric">
<div className="metric-value">22%</div>
<div className="metric-label">WIN-BACK</div>
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
<span>Prisma Labs</span><span>Voltaire</span><span>StackLayer</span><span>NeuralPath</span><span>Orion AI</span><span>CipherGuard</span><span>DataForge</span><span>LaunchKit</span><span>Axiom</span>
<span>Prisma Labs</span><span>Voltaire</span><span>StackLayer</span><span>NeuralPath</span><span>Orion AI</span><span>CipherGuard</span><span>DataForge</span><span>LaunchKit</span><span>Axiom</span>
</div>
</div>
</section>

<section className="showcase-section" id="platform">
<div className="container">
<div className="showcase-grid">
<div className="reveal">
<div className="eyebrow">MARKET SPECIFICITY</div>
<h2 className="section-title">Solutions Designed for Industry Leaders</h2>
<p className="section-desc">We don't do generic templates. Every Sellum agent is trained on the exact nuances, objections, and workflows of your industry to maximize conversion and stop revenue leakage.</p>
<div className="showcase-features">
<div className="showcase-feature">
<div className="showcase-feature-icon"><iconify-icon icon="lucide:git-branch"></iconify-icon></div>
<div>
<h4>Clinics &amp; Aesthetics</h4>
<p>Manage late-night bookings and automate confirmations to reduce no-shows by up to 60%.</p>
</div>
</div>
<div className="showcase-feature">
<div className="showcase-feature-icon"><iconify-icon icon="lucide:shield-check"></iconify-icon></div>
<div>
<h4>Real Estate</h4>
<p>Turn portal noise into qualified appointments. Respond in 5 seconds and hand over "Hot Leads".</p>
</div>
</div>
</div>
</div>
<div className="dashboard-mock reveal">
<div className="dashboard-header">
<span className="dashboard-dot red"></span>
<span className="dashboard-dot yellow"></span>
<span className="dashboard-dot green"></span>
<span className="dashboard-header-title">sellum-engine — vertical_deployments</span>
</div>
<div className="dashboard-body">
<table className="dashboard-table">
<thead>
<tr>
<th>VERTICAL_AGENT</th>
<th>CORE_PROTOCOL</th>
<th>RESPONSE_TIME</th>
</tr>
</thead>
<tbody>
<tr>
<td>clinics-booking-v2</td>
<td><span className="status-badge running">Running</span></td>
<td>2.1s</td>
</tr>
<tr>
<td>realestate-sdr</td>
<td><span className="status-badge running">Running</span></td>
<td>3.4s</td>
</tr>
<tr>
<td>ecom-cart-recovery</td>
<td><span className="status-badge pending">Active Rescue</span></td>
<td>instant</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="showcase-grid left-mock" style={{marginTop: '120px'}}>
<div className="dashboard-mock reveal-left">
<div className="dashboard-header">
<span className="dashboard-dot red"></span>
<span className="dashboard-dot yellow"></span>
<span className="dashboard-dot green"></span>
<span className="dashboard-header-title">sellum-voice — live_call</span>
</div>
<div className="dashboard-body">
<div className="widget-progress">
<div className="progress-item">
<div className="progress-label"><span>Speech-to-Text Latency</span><span>120ms</span></div>
<div className="progress-track"><div className="progress-fill" style={{-W: '12%'}}></div></div>
</div>
<div className="progress-item">
<div className="progress-label"><span>LLM Inference</span><span>340ms</span></div>
<div className="progress-track"><div className="progress-fill" style={{-W: '34%'}}></div></div>
</div>
<div className="progress-item">
<div className="progress-label"><span>Text-to-Speech Output</span><span>210ms</span></div>
<div className="progress-track"><div className="progress-fill" style={{-W: '21%'}}></div></div>
</div>
</div>
<div className="widget-logs" style={{marginTop: '24px'}}>
<div className="log-line"><span className="log-time">00:01</span><span className="log-method get" style={{background: 'rgba(52,211,153,0.15)', color: '#34d399'}}>LEAD</span><span className="log-msg">"Yeah, I'm looking to book a session..."</span></div>
<div className="log-line"><span className="log-time">00:01</span><span className="log-method post" style={{background: 'rgba(245,158,11,0.15)', color: 'var(--accent2)'}}>AI</span><span className="log-msg">"Perfect. Are you available this Tuesday?"</span></div>
</div>
</div>
</div>
<div className="reveal">
<div className="eyebrow">VOICE INTELLIGENCE</div>
<h2 className="section-title">Human-like Voice. Zero Latency.</h2>
<p className="section-desc">Our voice models are trained to pause, breathe, and interrupt naturally. Stop using robotic IVRs and start conversing with your prospects as if you were on the floor.</p>
<div className="showcase-features">
<div className="showcase-feature">
<div className="showcase-feature-icon"><iconify-icon icon="lucide:mic"></iconify-icon></div>
<div>
<h4>Sub-800ms Response Time</h4>
<p>The golden threshold for human conversation. No awkward pauses or stepping on the user's words.</p>
</div>
</div>
<div className="showcase-feature">
<div className="showcase-feature-icon"><iconify-icon icon="lucide:brain"></iconify-icon></div>
<div>
<h4>Dynamic Interruption</h4>
<p>If the lead interrupts, the AI stops talking immediately and listens, adjusting its context in real-time.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="how-section" id="docs">
<div className="container">
<div className="how-header reveal">
<div className="eyebrow" style={{justifyContent: 'center'}}>THE TRUST FACTOR</div>
<h2 className="section-title">Don't risk your business on amateur AI</h2>
<p className="section-desc">The internet is flooded with "gurus" connecting APIs with zero legal knowledge. Sellum builds with institutional armor.</p>
</div>
<div className="how-steps stagger-up">
<div className="how-step reveal-child">
<div className="step-node">
<span className="step-num">1</span>
<iconify-icon icon="lucide:plug"></iconify-icon>
</div>
<h3>EU AI Act (Art. 50)</h3>
<p>Every Sellum agent is built with mandatory transparency protocols to ensure strict compliance.</p>
</div>
<div className="how-step reveal-child">
<div className="step-node">
<span className="step-num">2</span>
<iconify-icon icon="lucide:rocket"></iconify-icon>
</div>
<h3>GDPR Data Sovereignty</h3>
<p>We guarantee EU-based processing, automated consent flows, and strict data retention policies.</p>
</div>
<div className="how-step reveal-child">
<div className="step-node">
<span className="step-num">3</span>
<iconify-icon icon="lucide:maximize"></iconify-icon>
</div>
<h3>External DPO Auditing</h3>
<p>Our infrastructure is legally audited by independent Data Protection Officers.</p>
</div>
</div>
</div>
</section>

<section className="testimonials-section">
<div className="container">
<div className="testimonials-header reveal">
<div className="eyebrow" style={{justifyContent: 'center'}}>THE COST OF AMATEUR AI</div>
<h2 className="section-title">When cheap automation becomes a liability</h2>
<p className="section-desc">Don't let a poorly implemented chatbot destroy your brand's reputation.</p>
</div>
<div className="testimonial-featured reveal">
<div className="testimonial-quote">A major airline deployed a standard chatbot that hallucinated a fake refund policy to a customer. The court ruled the airline was legally responsible for the AI's promises.</div>
<div className="testimonial-author">
<div className="testimonial-avatar">CRT</div>
<div>
<div className="testimonial-name">Civil Resolution Tribunal</div>
<div className="testimonial-role">Aviation Industry Legal Precedent</div>
</div>
</div>
</div>
</div>
</section>

<section className="pricing-section" id="pricing">
<div className="container">
<div className="pricing-header reveal">
<div className="eyebrow" style={{justifyContent: 'center'}}>Investment</div>
<h2 className="section-title">Funded by your recovered revenue.</h2>
<p className="section-desc">No hidden fees. Every plan includes a 6-to-8 week Dedicated Onboarding.</p>
</div>
<div className="pricing-grid stagger-up">
<div className="pricing-card reveal-child">
<div className="pricing-name">Sellum Chat</div>
<div className="pricing-price">€800<span>/mo</span></div>
<div className="pricing-desc">+ €3,500 Dedicated Onboarding. For digital-first businesses.</div>
<div className="pricing-features">
<div className="pricing-feature">✓ 300 AI conversations / month</div>
<div className="pricing-feature">✓ WhatsApp &amp; Instagram</div>
<div className="pricing-feature">✓ GoHighLevel CRM included</div>
</div>
<button className="pricing-btn">Book Diagnosis</button>
</div>
<div className="pricing-card featured reveal-child">
<div className="pricing-badge">RECOMMENDED BUNDLE</div>
<div className="pricing-name">Voice + Chat</div>
<div className="pricing-price">€1,800<span>/mo</span></div>
<div className="pricing-desc">+ €9,000 Dedicated Onboarding. The complete Conversational Flywheel.</div>
<div className="pricing-features">
<div className="pricing-feature">✓ Everything in Sellum Chat</div>
<div className="pricing-feature">✓ Real-time AI Voice Agent</div>
<div className="pricing-feature">✓ Instant Calendar Booking</div>
<div className="pricing-feature">✓ Active Pipeline Recovery</div>
</div>
<button className="pricing-btn">Calculate ROI</button>
</div>
<div className="pricing-card reveal-child">
<div className="pricing-name">Bundle Pro</div>
<div className="pricing-price">€2,800<span>/mo</span></div>
<div className="pricing-desc">+ €10,000 Dedicated Onboarding. For high-volume operations.</div>
<div className="pricing-features">
<div className="pricing-feature">✓ Everything in the Bundle</div>
<div className="pricing-feature">✓ Custom Dashboards</div>
<div className="pricing-feature">✓ Priority 4-hour SLA Support</div>
</div>
<button className="pricing-btn">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="cta-section">
<div className="cta-content reveal">
<div className="eyebrow" style={{justifyContent: 'center'}}>YOUR NEXT STEP</div>
<h2 className="cta-title">Ready to activate your <span className="text-gradient">Flywheel</span>?</h2>
<p className="cta-desc">Start with a clinical diagnosis of your current pipeline.</p>
<div className="cta-terminal">
<span className="prompt">$</span>
<span className="cmd">run pipeline-scan --detect-leakage</span>
<button className="copy-btn">Analyze</button>
</div>
<div className="cta-actions">
<button className="btn-conic" onclick="window.location.hash='pricing'">Start My Diagnosis</button>
</div>
</div>
</section>

<footer className="footer">
<div className="container">
<div className="footer-grid">
<div className="footer-brand">
<a className="nav-logo" href="#" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d9ef4fda-2c15-498e-a6c0-e4c2064a8226_800w.png\')'}}></a>
<p>Human intelligence at machine scale. We build AI voice and chat agents that close the 16-hour blind spot.</p>
</div>
<div className="footer-col">
<h4>SOLUTIONS</h4>
<a href="#">The Flywheel</a>
<a href="#">Clinics &amp; Aesthetics</a>
</div>
<div className="footer-col">
<h4>Resources</h4>
<a href="#">Documentation</a>
<a href="#">Implementation Guide</a>
</div>
<div className="footer-col">
<h4>Company</h4>
<a href="#">Contact Sales</a>
<a href="#">Legal &amp; DPO</a>
</div>
</div>
<div className="footer-bottom">
<span>© <span id="year">2026</span> Sellum. All rights reserved.</span>
<div className="footer-bottom-links">
<a href="#">Privacy</a>
<a href="#">Terms</a>
</div>
</div>
</div>
</footer>






    </>
  );
}
