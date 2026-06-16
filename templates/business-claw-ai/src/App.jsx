import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



(function() {
  'use strict';

  // ─── Theme Toggle ───
  const html = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const label = document.getElementById('theme-label');
  let isDark = true;

  function setTheme(dark) {
    isDark = dark;
    html.dataset.theme = dark ? 'dark' : 'light';
    toggle.setAttribute('aria-pressed', dark ? 'false' : 'true');
    if (label) label.textContent = dark ? 'dark' : 'light';
    try { localStorage.setItem('claw-theme', dark ? 'dark' : 'light'); } catch(e){}
  }

  // Restore preference
  try {
    const saved = localStorage.getItem('claw-theme');
    if (saved) { setTheme(saved === 'dark'); }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) { setTheme(false); }
  } catch(e){}

  toggle.addEventListener('click', () => setTheme(!isDark));

  // ─── Scroll Reveal ───
  const reveals = document.querySelectorAll('.reveal');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('visible'));
  }

  // ─── Nav scroll shadow ───
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 20 ? '0 4px 24px rgba(0,0,0,0.15)' : 'none';
  }, { passive: true });

  // ─── Demo bubble toggle ───
  const demoBtn = document.getElementById('demoBubbleBtn');
  const demoChat = document.getElementById('demoChat');
  let chatOpen = false;

  // Show bubble after 4 seconds
  setTimeout(() => {
    demoChat.classList.add('visible');
    chatOpen = true;
    demoBtn.setAttribute('aria-expanded', 'true');
  }, 4000);

  demoBtn.addEventListener('click', () => {
    chatOpen = !chatOpen;
    demoChat.classList.toggle('visible', chatOpen);
    demoBtn.setAttribute('aria-expanded', chatOpen ? 'true' : 'false');
    demoBtn.textContent = chatOpen ? '✕' : '🦾';
  });

  // ─── Mouse glow on task cards ───
  document.querySelectorAll('.task-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
      const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
      card.style.setProperty('--mouse-x', x + '%');
      card.style.setProperty('--mouse-y', y + '%');
    });
  });

  // ─── Smooth anchor scroll ───
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ─── Hero stats counter animation ───
  function animateCount(el, target, suffix, duration) {
    const start = performance.now();
    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.innerHTML = current + (suffix || '') + (el.dataset.post || '');
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }

  // Trigger counters when hero is in view
  const statValues = document.querySelectorAll('.stat-value');
  const counters = [
    { el: statValues[0], target: 94, suffix: '', post: '<span>%</span>' },
    { el: statValues[1], target: 48, suffix: '', post: '<span>h</span>' },
    { el: statValues[2], target: 24, suffix: '', post: '<span>/7</span>' },
    { el: statValues[3], target: 0, suffix: '', post: '' },
  ];

  if (statValues.length) {
    let counted = false;
    const statsObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !counted) {
          counted = true;
          counters.forEach(c => {
            if (c.el) {
              c.el.dataset.post = c.post;
              animateCount(c.el, c.target, c.suffix, 1200);
            }
          });
        }
      });
    }, { threshold: 0.5 });
    statsObserver.observe(document.querySelector('.hero-stats'));
  }

})();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div aria-hidden="true" className="grid-bg"></div>

<nav aria-label="Main navigation" role="navigation">
<div className="nav-inner">
<a aria-label="OpenClaw home" className="logo" href="#">
<div className="logo-icon">
<svg aria-hidden="true" fill="none" viewbox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
<rect fill="#FF5C1A" height="36" rx="8" width="36"></rect>
<path d="M18 6 L18 14" stroke="white" strokeLinecap="round" strokeWidth="2.5"></path>
<path d="M18 14 L14 20 M18 14 L22 20" stroke="white" strokeLinecap="round" strokeWidth="2.5"></path>
<path d="M12 20 L14 26 M14 20 L12 26" stroke="white" strokeLinecap="round" strokeWidth="2"></path>
<path d="M20 20 L22 26 M22 20 L20 26" stroke="white" strokeLinecap="round" strokeWidth="2"></path>
<rect fill="white" height="3" opacity="0.4" rx="1.5" width="16" x="10" y="4"></rect>
</svg>
</div>
<span className="logo-text">Business<span>Claw</span></span>
</a>
<ul className="nav-links" role="list">
<li><a href="#how">How It Works</a></li>
<li><a href="#tasks">Tasks</a></li>
<li><a href="#pricing">Pricing</a></li>
<li><a href="#proof">Reviews</a></li>
</ul>
<div className="nav-actions">
<span aria-hidden="true" className="theme-label" id="theme-label">dark</span>
<button aria-label="Toggle light/dark mode" aria-pressed="false" className="theme-toggle" id="themeToggle"></button>
<a className="btn-nav" href="#cta">Get Started</a>
</div>
</div>
</nav>

<section aria-label="Hero section" className="hero">
<div aria-hidden="true" className="hero-glow"></div>
<div aria-hidden="true" className="hero-glow-2"></div>
<div className="hero-content">
<div className="hero-badge" role="status">
<span aria-hidden="true" className="badge-dot"></span>
      AI agents live in under 48 hours
    </div>
<h1 className="hero-headline">
      Your AI front desk.<br/>
<span className="highlight">Clawed in.</span> Ready to work.
    </h1>
<p className="hero-sub">
      BusinessClaw sets up, configures, and fully manages AI agents that answer calls, handle support tickets, book appointments, and onboard clients — so your team stops drowning in the same 12 questions every day.
    </p>
<div className="hero-ctas">
<a className="btn-primary" href="#cta">
<svg aria-hidden="true" fill="none" height="16" viewbox="0 0 16 16" width="16">
<path d="M8 1L15 8L8 15M15 8H1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
        Start Free Trial
      </a>
<a className="btn-secondary" href="#how">
        See how it works
      </a>
</div>

<div aria-hidden="true" className="hero-visual">
<div className="claw-machine">
<svg aria-label="Animated claw machine" fill="none" role="img" viewbox="0 0 380 240" xmlns="http://www.w3.org/2000/svg">

<rect fill="rgba(255,92,26,0.06)" height="200" rx="12" stroke="rgba(255,92,26,0.2)" strokeWidth="1.5" width="340" x="20" y="30"></rect>

<rect fill="rgba(255,92,26,0.15)" height="8" rx="4" width="300" x="40" y="40"></rect>

<g className="claw-arm">

<line opacity="0.7" stroke="#FF5C1A" stroke-dasharray="4 3" strokeWidth="2" x1="190" x2="190" y1="48" y2="110"></line>

<rect fill="#FF5C1A" height="14" rx="4" width="24" x="178" y="108"></rect>

<g className="claw-grab">
<path d="M182 122 L175 148 L170 155" stroke="#FF5C1A" strokeLinecap="round" strokeWidth="3"></path>
<path d="M190 122 L190 150 L190 158" stroke="#FF5C1A" strokeLinecap="round" strokeWidth="3"></path>
<path d="M198 122 L205 148 L210 155" stroke="#FF5C1A" strokeLinecap="round" strokeWidth="3"></path>
</g>
</g>

<g opacity="0.8">

<rect fill="rgba(0,229,255,0.1)" height="26" rx="13" stroke="rgba(0,229,255,0.2)" strokeWidth="1" width="90" x="44" y="90"></rect>
<text fill="#00E5FF" fontFamily="DM Mono, monospace" fontSize="9" text-anchor="middle" x="89" y="107">📞 Book Appt</text>

<rect fill="rgba(45,255,158,0.1)" height="26" rx="13" stroke="rgba(45,255,158,0.2)" strokeWidth="1" width="88" x="250" y="80"></rect>
<text fill="#2DFF9E" fontFamily="DM Mono, monospace" fontSize="9" text-anchor="middle" x="294" y="97">💬 Live Chat</text>

<rect fill="rgba(255,92,26,0.12)" height="26" rx="13" stroke="rgba(255,92,26,0.25)" strokeWidth="1" width="88" x="50" y="170"></rect>
<text fill="#FF5C1A" fontFamily="DM Mono, monospace" fontSize="9" text-anchor="middle" x="94" y="187">📧 Follow-up</text>

<rect fill="rgba(255,200,50,0.1)" height="26" rx="13" stroke="rgba(255,200,50,0.2)" strokeWidth="1" width="96" x="244" y="165"></rect>
<text fill="#FFC832" fontFamily="DM Mono, monospace" fontSize="9" text-anchor="middle" x="292" y="182">🗓️ Scheduling</text>

<rect fill="rgba(255,92,26,0.08)" height="26" rx="13" stroke="rgba(255,92,26,0.15)" strokeWidth="1" width="90" x="145" y="155"></rect>
<text fill="#FF8C5A" fontFamily="DM Mono, monospace" fontSize="9" text-anchor="middle" x="190" y="172">📋 Onboarding</text>
</g>

<text fill="rgba(255,92,26,0.5)" fontFamily="Syne, sans-serif" fontSize="9" font-weight="800" letter-spacing="3" text-anchor="middle" x="190" y="228">BUSINESSCLAW v2.0</text>
</svg>
</div>
</div>
<div className="hero-stats">
<div className="stat-item">
<span className="stat-value">94<span>%</span></span>
<span className="stat-label">Query resolution rate</span>
</div>
<div className="stat-item">
<span className="stat-value">48<span>h</span></span>
<span className="stat-label">Avg. go-live time</span>
</div>
<div className="stat-item">
<span className="stat-value">24<span>/7</span></span>
<span className="stat-label">Always on, never tired</span>
</div>
<div className="stat-item">
<span className="stat-value">$0</span>
<span className="stat-label">In hiring costs</span>
</div>
</div>
</div>
<div aria-hidden="true" className="scroll-indicator">
<span>scroll</span>
<div className="scroll-arrow"></div>
</div>
</section>

<div aria-hidden="true" className="pain-ticker">
<div className="ticker-track">
<span className="ticker-item bad">"What are your hours?"</span>
<span className="ticker-item bad">"Can I reschedule my appointment?"</span>
<span className="ticker-item bad">"Do you offer refunds?"</span>
<span className="ticker-item bad">"How do I get started?"</span>
<span className="ticker-item bad">"I never heard back from your team"</span>
<span className="ticker-item bad">"Can I speak to someone right now?"</span>
<span className="ticker-item bad">"What's included in the package?"</span>
<span className="ticker-item bad">"I need to change my booking"</span>
<span className="ticker-item bad">"Is this the right number?"</span>
<span className="ticker-item bad">"What are your hours?"</span>
<span className="ticker-item bad">"Can I reschedule my appointment?"</span>
<span className="ticker-item bad">"Do you offer refunds?"</span>
<span className="ticker-item bad">"How do I get started?"</span>
<span className="ticker-item bad">"I never heard back from your team"</span>
<span className="ticker-item bad">"Can I speak to someone right now?"</span>
<span className="ticker-item bad">"What's included in the package?"</span>
<span className="ticker-item bad">"I need to change my booking"</span>
<span className="ticker-item bad">"Is this the right number?"</span>
</div>
</div>

<section aria-labelledby="pain-heading" className="pain-section">
<div className="section-inner">
<div className="section-label">The problem</div>
<h2 className="section-title reveal" id="pain-heading">
      Your team is talented.<br/>
      They shouldn't be doing this.
    </h2>
<p className="section-subtitle reveal reveal-delay-1">Every hour your best people spend answering the same 12 questions is an hour they're not doing the work you hired them for. That's a leak — and it's getting worse as you grow.</p>
<div className="pain-grid">
<div className="pain-card reveal reveal-delay-1">
<div className="pain-emoji">📵</div>
<div className="pain-title">Calls after hours hit voicemail</div>
<div className="pain-desc">Potential clients don't leave messages anymore. They just call your competitor instead. Every missed call is a lost relationship.</div>
</div>
<div className="pain-card reveal reveal-delay-2">
<div className="pain-emoji">🔁</div>
<div className="pain-title">The same questions, every single day</div>
<div className="pain-desc">"What time do you open?" "How do I cancel?" Your team knows the answers by heart — but they still have to stop and type them.</div>
</div>
<div className="pain-card reveal reveal-delay-3">
<div className="pain-emoji">📋</div>
<div className="pain-title">Onboarding drops the ball</div>
<div className="pain-desc">New clients fall through cracks between the sale and the service. The gap between "yes" and "started" is where churn begins.</div>
</div>
<div className="pain-card reveal reveal-delay-1">
<div className="pain-emoji">🗓️</div>
<div className="pain-title">Scheduling is a full-time job</div>
<div className="pain-desc">Back-and-forth emails. Cancellations on short notice. Double bookings. You're not a calendar assistant — but someone has to be.</div>
</div>
<div className="pain-card reveal reveal-delay-2">
<div className="pain-emoji">💸</div>
<div className="pain-title">Hiring doesn't scale</div>
<div className="pain-desc">A receptionist costs $45K/year. A support rep costs more. And they still can't work nights, weekends, or during lunch.</div>
</div>
<div className="pain-card reveal reveal-delay-3">
<div className="pain-emoji">🔥</div>
<div className="pain-title">Your best people are burning out</div>
<div className="pain-desc">Repetitive tasks drain motivation faster than anything. The people who stay longest hate the work they're doing. That's not sustainable.</div>
</div>
</div>
</div>
</section>

<section aria-labelledby="how-heading" className="how-section" id="how">
<div className="section-inner">
<div className="section-label">How it works</div>
<h2 className="section-title reveal" id="how-heading">Three grabs. Infinite reach.</h2>
<p className="section-subtitle reveal reveal-delay-1">We don't hand you a tool and wish you luck. We set everything up, configure your agent for your specific business, then manage it as your needs change.</p>
<div className="steps-container">

<div className="step reveal">
<div className="step-content">
<div className="step-number">01</div>
<div className="step-label">Intake &amp; Configuration</div>
<h3 className="step-title">We learn your business in one session</h3>
<p className="step-desc">You do a 45-minute call with our setup team. We extract your FAQs, booking logic, tone of voice, escalation rules, and edge cases. No forms. No homework. We do the heavy lifting.</p>
<div className="step-tags">
<span className="tag">✓ 45-min onboarding</span>
<span className="tag">✓ No technical skills needed</span>
<span className="tag">✓ Custom knowledge base</span>
</div>
</div>
<div className="step-visual">
<div className="agent-preview">
<div className="chat-header">
<div className="chat-avatar">🤖</div>
<div>
<div className="chat-name">Claw — Setup Agent</div>
<div className="chat-status">● Configuring your business profile...</div>
</div>
</div>
<div className="chat-messages">
<div className="chat-msg bot" style={{animationDelay: '0.1s'}}>Hi! I just pulled your FAQs and pricing page. Can you confirm your cancellation window?</div>
<div className="chat-msg user" style={{animationDelay: '0.4s'}}>24 hours for full refund, 12 hours for 50%.</div>
<div className="chat-msg bot" style={{animationDelay: '0.7s'}}>✓ Saved. Setting escalation to call your manager line for disputes over $200. Sound good?</div>
</div>
</div>
</div>
</div>

<div className="step reverse reveal">
<div className="step-content">
<div className="step-number">02</div>
<div className="step-label">Deploy</div>
<h3 className="step-title">Live in 48 hours. On every channel.</h3>
<p className="step-desc">We deploy your configured agent across your website chat, SMS line, email inbox, and scheduling tool. No code on your end. We handle the integrations, the testing, and the go-live.</p>
<div className="step-tags">
<span className="tag">✓ Website chat widget</span>
<span className="tag">✓ SMS + email</span>
<span className="tag">✓ Calendar integrations</span>
</div>
</div>
<div className="step-visual hidden-mobile">
<div style={{width: '100%', fontFamily: '\'DM Mono\',monospace', fontSize: '0.72rem', color: 'var(--text-secondary)'}}>
<div style={{color: 'var(--text-muted)', marginBottom: '12px'}}># Deployment log — 2025-02-19</div>
<div style={{marginBottom: '6px'}}><span style={{color: 'var(--success)'}}>✓</span> Website chat widget: <span style={{color: 'var(--success)'}}>LIVE</span></div>
<div style={{marginBottom: '6px'}}><span style={{color: 'var(--success)'}}>✓</span> SMS routing: <span style={{color: 'var(--success)'}}>LIVE</span></div>
<div style={{marginBottom: '6px'}}><span style={{color: 'var(--success)'}}>✓</span> Email triage: <span style={{color: 'var(--success)'}}>LIVE</span></div>
<div style={{marginBottom: '6px'}}><span style={{color: 'var(--success)'}}>✓</span> Calendar sync: <span style={{color: 'var(--success)'}}>LIVE</span></div>
<div style={{marginBottom: '12px'}}><span style={{color: 'var(--success)'}}>✓</span> Escalation rules: <span style={{color: 'var(--success)'}}>LIVE</span></div>
<div className="typing-animation">All systems operational_</div>
</div>
</div>
</div>

<div className="step reveal">
<div className="step-content">
<div className="step-number">03</div>
<div className="step-label">Managed Continuously</div>
<h3 className="step-title">We watch it. You forget it exists.</h3>
<p className="step-desc">Your agent gets smarter every week. We review unanswered queries, tune responses, update your knowledge base when your offerings change, and flag anything that needs a human. You get a weekly digest — nothing more unless you want it.</p>
<div className="step-tags">
<span className="tag">✓ Weekly performance reports</span>
<span className="tag">✓ Continuous tuning</span>
<span className="tag">✓ Human escalation routing</span>
</div>
</div>
<div className="step-visual">
<div style={{width: '100%', fontFamily: '\'DM Mono\',monospace', fontSize: '0.75rem'}}>
<div style={{color: 'var(--text-muted)', marginBottom: '14px', fontSize: '0.7rem'}}>WEEKLY DIGEST — Week 7</div>
<div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '8px'}}>
<span style={{color: 'var(--text-secondary)'}}>Conversations handled</span>
<span style={{color: 'var(--success)', fontWeight: '500'}}>847</span>
</div>
<div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '8px'}}>
<span style={{color: 'var(--text-secondary)'}}>Resolved without human</span>
<span style={{color: 'var(--success)', fontWeight: '500'}}>94.2%</span>
</div>
<div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '8px'}}>
<span style={{color: 'var(--text-secondary)'}}>New bookings captured</span>
<span style={{color: 'var(--claw)', fontWeight: '500'}}>38</span>
</div>
<div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '16px'}}>
<span style={{color: 'var(--text-secondary)'}}>Avg. response time</span>
<span style={{color: 'var(--electric)', fontWeight: '500'}}>1.3s</span>
</div>
<div style={{background: 'rgba(45,255,158,0.08)', border: '1px solid rgba(45,255,158,0.15)', borderRadius: '8px', padding: '10px', fontSize: '0.7rem', color: 'var(--success)'}}>
              ↑ +12% resolution rate vs. last week
            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section aria-labelledby="tasks-heading" className="tasks-section" id="tasks">
<div className="section-inner">
<div className="tasks-header">
<div>
<div className="section-label">Use cases</div>
<h2 className="section-title reveal" id="tasks-heading">What your agent handles</h2>
<p className="section-subtitle reveal reveal-delay-1">Built specifically for the tasks that eat support and reception teams alive.</p>
</div>
</div>
<div className="tasks-grid">
<div className="task-card featured reveal">
<div className="task-icon">📞</div>
<div className="task-name">Inbound Booking &amp; Scheduling</div>
<div className="task-desc">Your agent handles appointment requests 24/7, checks availability against your real calendar, sends confirmations, and manages reschedules — without a human in the loop. Integrates with Calendly, Acuity, Google Calendar, and more.</div>
</div>
<div className="task-card featured reveal reveal-delay-1">
<div className="task-icon">💬</div>
<div className="task-name">Live Chat &amp; FAQ Resolution</div>
<div className="task-desc">Answers your 50 most common questions instantly. Escalates anything complex to a real person with full context already attached — so your team doesn't start from scratch every time.</div>
</div>
<div className="task-card reveal reveal-delay-1">
<div className="task-icon">📧</div>
<div className="task-name">Email Triage &amp; Auto-Reply</div>
<div className="task-desc">Sorts, prioritizes, and responds to routine emails. Your inbox stops being a panic zone.</div>
</div>
<div className="task-card reveal reveal-delay-2">
<div className="task-icon">🧾</div>
<div className="task-name">New Client Onboarding</div>
<div className="task-desc">Guides new clients through your intake forms, sends the right docs, answers first-week questions automatically.</div>
</div>
<div className="task-card reveal reveal-delay-1">
<div className="task-icon">🔔</div>
<div className="task-name">Appointment Reminders</div>
<div className="task-desc">Automated SMS and email reminders. Drastic reduction in no-shows without anyone lifting a finger.</div>
</div>
<div className="task-card reveal reveal-delay-2">
<div className="task-icon">💳</div>
<div className="task-name">Payment &amp; Invoice FAQs</div>
<div className="task-desc">Handles "where's my invoice?", refund policies, and billing questions before they hit your team.</div>
</div>
<div className="task-card reveal reveal-delay-3">
<div className="task-icon">⭐</div>
<div className="task-name">Review Request Campaigns</div>
<div className="task-desc">Automatically reaches out post-service to satisfied clients. More Google reviews, less manual chasing.</div>
</div>
<div className="task-card reveal reveal-delay-3">
<div className="task-icon">🔁</div>
<div className="task-name">Lead Capture &amp; Qualification</div>
<div className="task-desc">Turns website visitors into qualified leads before they bounce — then routes the hot ones directly to your sales team.</div>
</div>
</div>
</div>
</section>

<section aria-labelledby="pricing-heading" className="pricing-section" id="pricing">
<div className="section-inner">
<div style={{textAlign: 'center', maxWidth: '580px', margin: '0 auto 0'}}>
<div className="section-label" style={{justifyContent: 'center'}}>Pricing</div>
<h2 className="section-title reveal" id="pricing-heading">Less than one bad hire.<br/>Way more reliable.</h2>
<p className="section-subtitle reveal reveal-delay-1" style={{margin: '0 auto'}}>No contracts. No IT team needed. Upgrade, downgrade, or cancel anytime. Most clients pay for themselves inside 30 days.</p>
</div>
<div className="pricing-grid">

<div className="plan reveal">
<div className="plan-name">Starter</div>
<div className="plan-price"><sup>$</sup>149</div>
<div className="plan-period">per month</div>
<div className="plan-desc">Perfect for solo operators and micro teams that want to stop answering the same questions manually.</div>
<ul className="plan-features">
<li>1 AI agent (your choice of channel)</li>
<li>Up to 500 conversations/mo</li>
<li>FAQ &amp; scheduling support</li>
<li>Weekly performance email</li>
<li>Email onboarding support</li>
<li className="dim">Multi-channel deployment</li>
<li className="dim">Priority managed updates</li>
</ul>
<a className="btn-plan btn-plan-outline" href="#cta">Get Started</a>
</div>

<div className="plan popular reveal reveal-delay-1">
<div className="plan-badge">Most Popular</div>
<div className="plan-name">Growth</div>
<div className="plan-price"><sup>$</sup>349</div>
<div className="plan-period">per month</div>
<div className="plan-desc">The full BusinessClaw stack for growing businesses with real support and reception volume.</div>
<ul className="plan-features">
<li>3 AI agents (web + SMS + email)</li>
<li>Unlimited conversations</li>
<li>Full task suite (booking, onboarding, triage)</li>
<li>CRM + calendar integrations</li>
<li>Weekly call + tuning sessions</li>
<li>Human escalation routing</li>
<li className="dim">White-label agent branding</li>
</ul>
<a className="btn-plan btn-plan-filled" href="#cta">Start Free Trial</a>
</div>

<div className="plan reveal reveal-delay-2">
<div className="plan-name">Scale</div>
<div className="plan-price"><sup>$</sup>799</div>
<div className="plan-period">per month</div>
<div className="plan-desc">For businesses with multi-location or high-volume needs that require custom logic and white-glove management.</div>
<ul className="plan-features">
<li>Unlimited agents &amp; channels</li>
<li>Custom integrations built for you</li>
<li>Dedicated account manager</li>
<li>White-label agent branding</li>
<li>SLA-backed response guarantees</li>
<li>Priority feature access</li>
<li>Monthly strategy sessions</li>
</ul>
<a className="btn-plan btn-plan-outline" href="#cta">Contact Sales</a>
</div>
</div>
<p className="reveal" style={{textAlign: 'center', marginTop: '24px', fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: '\'DM Mono\',monospace'}}>All plans include 14-day free trial · No credit card required · Cancel anytime</p>
</div>
</section>

<section aria-labelledby="proof-heading" className="proof-section" id="proof">
<div className="section-inner">
<div className="section-label">Reviews</div>
<h2 className="section-title reveal" id="proof-heading">Small teams. Big results.</h2>
<div className="testimonials-grid">
<div className="testimonial reveal">
<div className="quote-mark">"</div>
<p className="testimonial-text">We were losing 8-10 calls a week to voicemail after hours. Within two weeks of launching our BusinessClaw agent, we captured 23 new bookings that would have been missed entirely. It paid for a full year in month one.</p>
<div className="testimonial-author">
<div className="author-avatar">🦷</div>
<div>
<div className="author-name">Sarah K.</div>
<div className="author-role">Owner · Summit Dental Care</div>
</div>
</div>
</div>
<div className="testimonial reveal reveal-delay-1">
<div className="quote-mark">"</div>
<p className="testimonial-text">My front desk was spending 3 hours a day on appointment reminders and rescheduling. That's completely gone now. She still works here — she's just doing actual work instead of playing phone tag.</p>
<div className="testimonial-author">
<div className="author-avatar">💆</div>
<div>
<div className="author-name">Marcus T.</div>
<div className="author-role">Director · Restore Wellness Clinic</div>
</div>
</div>
</div>
<div className="testimonial reveal reveal-delay-2">
<div className="quote-mark">"</div>
<p className="testimonial-text">Setup took one call. They literally handled everything. I just told them how my business works, and 48 hours later my agent was live on my website and answering questions better than I could myself. I was skeptical. I'm not anymore.</p>
<div className="testimonial-author">
<div className="author-avatar">⚖️</div>
<div>
<div className="author-name">Priya N.</div>
<div className="author-role">Principal · NorthStar Legal Group</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section aria-labelledby="cta-heading" className="cta-section" id="cta">
<div className="section-inner">
<div className="cta-box reveal">
<div className="section-label" style={{justifyContent: 'center'}}>Ready?</div>
<h2 className="section-title" id="cta-heading">Deploy your AI agent<br/>this week.</h2>
<p className="section-subtitle">No IT team. No long contracts. Just one call and your agent is live in 48 hours. Start free — no card required.</p>
<div className="cta-form">
<input aria-label="Your work email address" className="input-email" placeholder="you@yourbusiness.com" type="email"/>
<a className="btn-primary" href="#">
          Grab My Free Trial
          <svg aria-hidden="true" fill="none" height="14" viewbox="0 0 14 14" width="14">
<path d="M7 1L13 7L7 13M13 7H1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
<p className="cta-note">14 days free · Setup call included · No contracts · Cancel anytime</p>
</div>
</div>
</section>

<footer aria-label="Site footer">
<div className="footer-inner">
<div className="footer-grid">
<div className="footer-brand">
<a aria-label="OpenClaw home" className="logo" href="#">
<div className="logo-icon" style={{width: '28px', height: '28px'}}>
<svg aria-hidden="true" fill="none" viewbox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
<rect fill="#FF5C1A" height="36" rx="8" width="36"></rect>
<path d="M18 6 L18 14" stroke="white" strokeLinecap="round" strokeWidth="2.5"></path>
<path d="M18 14 L14 20 M18 14 L22 20" stroke="white" strokeLinecap="round" strokeWidth="2.5"></path>
<path d="M12 20 L14 26 M14 20 L12 26" stroke="white" strokeLinecap="round" strokeWidth="2"></path>
<path d="M20 20 L22 26 M22 20 L20 26" stroke="white" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
<span className="logo-text">Business<span>Claw</span></span>
</a>
<p>AI agents for small business support and reception — set up, configured, and managed for you.</p>
</div>
<div className="footer-col">
<h4>Product</h4>
<ul>
<li><a href="#how">How It Works</a></li>
<li><a href="#tasks">Use Cases</a></li>
<li><a href="#pricing">Pricing</a></li>
<li><a href="#">Integrations</a></li>
<li><a href="#">Changelog</a></li>
</ul>
</div>
<div className="footer-col">
<h4>Company</h4>
<ul>
<li><a href="#">About</a></li>
<li><a href="#">Blog</a></li>
<li><a href="#">Careers</a></li>
<li><a href="#">Press</a></li>
</ul>
</div>
<div className="footer-col">
<h4>Support</h4>
<ul>
<li><a href="#">Help Center</a></li>
<li><a href="#">Contact Us</a></li>
<li><a href="#">Privacy Policy</a></li>
<li><a href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="footer-bottom">
<p>© 2026 BusinessClaw Inc. Built for small business.</p>
<p>Made with ❤️ and a whole lot of claws</p>
</div>
</div>
</footer>

<div aria-label="Demo agent preview" className="demo-bubble" role="complementary">
<div className="demo-chat" id="demoChat">
<div className="demo-chat-msg">
<strong>👋 Claw here!</strong><br/>
      I handle bookings, answer FAQs, and never call in sick. Want to see me in action for your business?
    </div>
<div aria-label="Agent is typing" className="demo-typing">
<div className="typing-dot"></div>
<div className="typing-dot"></div>
<div className="typing-dot"></div>
</div>
</div>
<button aria-expanded="false" aria-label="Open demo agent chat" className="demo-trigger" id="demoBubbleBtn">🦾</button>
</div>



    </>
  );
}
