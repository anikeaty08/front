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



(function(){
  'use strict';

  // ─── Theme ───
  const html = document.documentElement;
  const btn = document.getElementById('themeBtn');
  let dark = true;

  function setTheme(d){
    dark = d;
    html.dataset.theme = d ? 'dark' : 'light';
    btn.setAttribute('aria-pressed', d ? 'false' : 'true');
    try{ localStorage.setItem('claw-theme', d ? 'dark' : 'light'); }catch(e){}
  }

  try{
    const s = localStorage.getItem('claw-theme');
    if(s) setTheme(s==='dark');
    else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) setTheme(false);
  }catch(e){}

  btn.addEventListener('click', ()=> setTheme(!dark));

  // ─── Scroll reveal ───
  const revEls = document.querySelectorAll('.rev');
  if('IntersectionObserver' in window){
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); }
      });
    },{threshold:.1,rootMargin:'0px 0px -40px 0px'});
    revEls.forEach(el=>obs.observe(el));
  } else {
    revEls.forEach(el=>el.classList.add('in'));
  }

  // ─── Counter animation (hero) ───
  function counter(el, target, suffix, dur){
    const start = performance.now();
    const tick = now => {
      const p = Math.min((now-start)/dur, 1);
      const e = 1-Math.pow(1-p,3);
      el.textContent = (target < 10 ? (e*target).toFixed(0) : Math.round(e*target));
      if(p<1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  const h1 = document.getElementById('heroCount1');
  const h2 = document.getElementById('heroCount2');
  const h3 = document.getElementById('heroCount3');
  const h4 = document.getElementById('heroCount4');
  if(h1) counter(h1, 45, 'm', 1200);
  if(h2) counter(h2, 48, 'h', 1400);
  if(h3) counter(h3, 24, '/7', 1000);
  if(h4) counter(h4, 100, '%', 1600);

  // ─── Accordion ───
  document.querySelectorAll('[data-acc]').forEach(item=>{
    const head = item.querySelector('.accordion-head');
    head.addEventListener('click', ()=> toggleAcc(item));
    head.addEventListener('keydown', e=>{
      if(e.key==='Enter'||e.key===' '){ e.preventDefault(); toggleAcc(item); }
    });
  });

  function toggleAcc(item){
    const isOpen = item.classList.contains('open');
    // close all
    document.querySelectorAll('[data-acc].open').forEach(el=>{
      el.classList.remove('open');
      el.querySelector('.accordion-head').setAttribute('aria-expanded','false');
    });
    if(!isOpen){
      item.classList.add('open');
      item.querySelector('.accordion-head').setAttribute('aria-expanded','true');
    }
  }

  // ─── FAQ ───
  document.querySelectorAll('[data-faq]').forEach(item=>{
    const q = item.querySelector('.faq-q');
    q.addEventListener('click', ()=> toggleFaq(item));
    q.addEventListener('keydown', e=>{
      if(e.key==='Enter'||e.key===' '){ e.preventDefault(); toggleFaq(item); }
    });
  });

  function toggleFaq(item){
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('[data-faq].open').forEach(el=>{
      el.classList.remove('open');
      el.querySelector('.faq-q').setAttribute('aria-expanded','false');
    });
    if(!isOpen){
      item.classList.add('open');
      item.querySelector('.faq-q').setAttribute('aria-expanded','true');
    }
  }

  // ─── Step TOC scroll tracking + progress pill ───
  const stepEls = document.querySelectorAll('[data-step]');
  const tocItems = document.querySelectorAll('.toc-item');
  const ppSteps = [
    document.getElementById('pp1'),
    document.getElementById('pp2'),
    document.getElementById('pp3'),
    document.getElementById('pp4'),
  ];
  const ppLabel = document.getElementById('ppLabel');
  const pill = document.getElementById('progressPill');

  let currentStep = 0;
  let pillVisible = false;

  function updateStep(n){
    if(n===currentStep) return;
    currentStep = n;

    // TOC
    tocItems.forEach((t,i)=>{
      t.classList.toggle('active', parseInt(t.dataset.step)===n);
    });

    // pill
    ppSteps.forEach((p,i)=>{
      p.classList.remove('active','done');
      if(i+1 < n) p.classList.add('done');
      else if(i+1===n) p.classList.add('active');
    });
    if(ppLabel) {
      ppLabel.innerHTML = `Step <span>${n}</span> of 4`;
    }
  }

  if('IntersectionObserver' in window){
    const stepObs = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          updateStep(parseInt(e.target.dataset.step));
          if(!pillVisible){
            pill.classList.add('show');
            pillVisible = true;
          }
        }
      });
    },{threshold:.4,rootMargin:'-80px 0px -30% 0px'});
    stepEls.forEach(el=>stepObs.observe(el));
  }

  // ─── Smooth scroll for jump links ───
  document.querySelectorAll('a[href^="#"], .jump-link[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const target = document.querySelector(a.getAttribute('href'));
      if(target){
        e.preventDefault();
        const offset = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({top: offset, behavior:'smooth'});
      }
    });
  });

  window.scrollToStep = function(n){
    const el = document.getElementById('step-'+n);
    if(el){
      const offset = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({top: offset, behavior:'smooth'});
    }
  };

  // ─── Animated checklist on scroll into view ───
  const checklistItems = document.querySelectorAll('.cl-item');
  const clObs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        // ripple through active/done on first view
        clObs.unobserve(e.target);
      }
    });
  },{threshold:.5});
  checklistItems.forEach(el=>clObs.observe(el));

  // ─── Live deploy log animation ───
  const logLines = document.querySelectorAll('.log-line');
  const logObs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        logLines.forEach((l,i)=>{
          l.style.opacity='0';
          setTimeout(()=>{ l.style.opacity='1'; l.style.transition='opacity .4s'; }, i*600);
        });
        logObs.unobserve(e.target);
      }
    });
  },{threshold:.8});
  if(logLines.length) logObs.observe(logLines[0].closest('.deploy-log'));

  // ─── Mini bar animation on scroll ───
  document.querySelectorAll('.mini-bar').forEach(bar=>{
    const target = bar.style.width;
    bar.style.width = '0';
    const barObs = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          setTimeout(()=>{ bar.style.width = target; bar.style.transition='width 1s ease'; }, 200);
          barObs.unobserve(bar);
        }
      });
    },{threshold:.8});
    barObs.observe(bar);
  });

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
      
<div aria-hidden="true" className="bg-grid"></div>

<nav aria-label="Main navigation" role="navigation">
<div className="nav-inner">
<a aria-label="OpenClaw home" className="logo" href="openclaw-homepage.html">
<svg aria-hidden="true" className="logo-icon" fill="none" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
<rect fill="#FF5C1A" height="32" rx="7" width="32"></rect>
<path d="M16 5L16 13" stroke="white" strokeLinecap="round" strokeWidth="2.2"></path>
<path d="M16 13L12 19M16 13L20 19" stroke="white" strokeLinecap="round" strokeWidth="2.2"></path>
<path d="M10.5 19L12 25M12 19L10.5 25" stroke="white" strokeLinecap="round" strokeWidth="1.9"></path>
<path d="M18.5 19L20 25M20 19L18.5 25" stroke="white" strokeLinecap="round" strokeWidth="1.9"></path>
<rect fill="white" height="3" opacity="0.35" rx="1.5" width="14" x="9" y="3"></rect>
</svg>
<span className="logo-text">Open<span>Claw</span></span>
</a>
<ul className="nav-links" role="list">
<li><a aria-current="page" className="active" href="openclaw-how-it-works.html">How It Works</a></li>
<li><a href="openclaw-homepage.html#tasks">Use Cases</a></li>
<li><a href="openclaw-homepage.html#pricing">Pricing</a></li>
<li><a href="openclaw-homepage.html#proof">Reviews</a></li>
<li><a href="openclaw-dashboard.html">Dashboard</a></li>
</ul>
<div className="nav-right">
<button aria-label="Toggle light/dark mode" aria-pressed="false" className="theme-btn" id="themeBtn"></button>
<a className="btn-nav" href="openclaw-homepage.html#cta">Start Free Trial</a>
</div>
</div>
</nav>

<section aria-label="Page introduction" className="hero">
<svg aria-hidden="true" className="hero-bg-claw" fill="none" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<path d="M100 10 L100 90" stroke="white" strokeLinecap="round" strokeWidth="8"></path>
<path d="M100 90 L60 140 M100 90 L140 140" stroke="white" strokeLinecap="round" strokeWidth="8"></path>
<path d="M44 140 L52 190 M52 140 L44 190" stroke="white" strokeLinecap="round" strokeWidth="6"></path>
<path d="M140 140 L148 190 M148 140 L140 190" stroke="white" strokeLinecap="round" strokeWidth="6"></path>
<rect fill="white" height="16" opacity="0.6" rx="8" width="140" x="30" y="2"></rect>
</svg>
<div aria-hidden="true" className="hero-orb hero-orb-1"></div>
<div aria-hidden="true" className="hero-orb hero-orb-2"></div>
<div className="hero-content">
<div aria-label="Breadcrumb navigation" className="breadcrumb">
<a href="openclaw-homepage.html">Home</a>
<span aria-hidden="true" className="breadcrumb-sep">/</span>
<span aria-current="page">How It Works</span>
</div>
<div className="hero-eyebrow" role="note">
<span aria-hidden="true" className="eyebrow-dot"></span>
      No technical knowledge required
    </div>
<h1 className="hero-h1">
      One call. 48 hours.<br/>
<em>Fully live.</em>
</h1>
<p className="hero-sub">
      We do the setup, the configuration, and the ongoing management. You do a 45-minute call, then step back. Here's exactly what happens between "yes" and "your agent just answered its first question."
    </p>
<div aria-label="Jump to step" className="jump-links" role="list">
<a className="jump-link" href="#step-1" role="listitem">
<span aria-hidden="true" className="jl-num">1</span> Intake Call
      </a>
<a className="jump-link" href="#step-2" role="listitem">
<span aria-hidden="true" className="jl-num">2</span> We Build It
      </a>
<a className="jump-link" href="#step-3" role="listitem">
<span aria-hidden="true" className="jl-num">3</span> Go Live
      </a>
<a className="jump-link" href="#step-4" role="listitem">
<span aria-hidden="true" className="jl-num">4</span> Ongoing Management
      </a>
</div>
<div aria-label="Key metrics" className="time-row">
<div className="time-item">
<div className="time-val"><span id="heroCount1">0</span><span>m</span></div>
<div className="time-lbl">onboarding call</div>
</div>
<div className="time-item">
<div className="time-val"><span id="heroCount2">0</span><span>h</span></div>
<div className="time-lbl">to go live</div>
</div>
<div className="time-item">
<div className="time-val"><span id="heroCount3">0</span><span>/7</span></div>
<div className="time-lbl">always on</div>
</div>
<div className="time-item">
<div className="time-val"><span id="heroCount4">0</span><span>%</span></div>
<div className="time-lbl">no code needed</div>
</div>
</div>
</div>
</section>

<section aria-labelledby="steps-heading" className="process-section" id="steps">
<div className="wrap">
<div className="section-eyebrow">The process</div>
<h2 className="section-h rev" id="steps-heading">What actually happens</h2>
<p className="section-sub rev rev-d1">No black boxes. No mystery. Here's every step from your first call to a fully managed, 24/7 AI agent running your support and reception.</p>
<div className="process-layout" style={{marginTop: '52px'}}>

<nav aria-label="Step navigation" className="process-toc">
<div className="toc-item active" data-step="1" onclick="scrollToStep(1)">
<div className="toc-num">1</div> Intake Call
        </div>
<div className="toc-item" data-step="2" onclick="scrollToStep(2)">
<div className="toc-num">2</div> Build &amp; Configure
        </div>
<div className="toc-item" data-step="3" onclick="scrollToStep(3)">
<div className="toc-num">3</div> Deploy Live
        </div>
<div className="toc-item" data-step="4" onclick="scrollToStep(4)">
<div className="toc-num">4</div> Managed Weekly
        </div>
</nav>
<div className="process-steps">

<div className="step-block rev" data-step="1" id="step-1">
<div className="step-copy">
<div className="step-top">
<div aria-hidden="true" className="step-num">01</div>
<div className="step-phase">Day 1 — Your one task</div>
<h3 className="step-title">A 45-minute call. That's all we need from you.</h3>
</div>
<p className="step-desc">
              You don't fill out forms. You don't write documentation. You don't build anything. You get on a call with your OpenClaw setup specialist and we extract everything — your FAQs, your cancellation policy, your tone of voice, your escalation rules, your edge cases. We take the notes. We ask the questions. You just talk.
            </p>
<div className="step-tags">
<span className="tag orange">45-min session</span>
<span className="tag green">No homework required</span>
<span className="tag">Recorded for accuracy</span>
</div>
<div className="step-detail-list" role="list">
<div className="sdl-item" role="listitem">
<div aria-hidden="true" className="sdl-icon">🗓️</div>
                We pull your hours, booking logic, and calendar rules
              </div>
<div className="sdl-item" role="listitem">
<div aria-hidden="true" className="sdl-icon">📋</div>
                Your top 50 questions get captured verbatim, in your language
              </div>
<div className="sdl-item" role="listitem">
<div aria-hidden="true" className="sdl-icon">⚡</div>
                Escalation triggers defined — what the agent handles vs. what goes human
              </div>
<div className="sdl-item" role="listitem">
<div aria-hidden="true" className="sdl-icon">🎨</div>
                Tone calibration — professional, warm, direct, or exactly how you talk
              </div>
</div>
</div>

<div className="step-visual rev rev-d2">
<div className="vis-header">
<div aria-hidden="true" className="vis-dots">
<div className="vis-dot"></div><div className="vis-dot"></div><div className="vis-dot"></div>
</div>
<div className="vis-title">Intake Session — Summit Dental</div>
</div>
<div className="vis-body vis-onboarding">
<div className="call-banner">
<div aria-hidden="true" className="call-avatar">OC</div>
<div className="call-info">
<div className="call-name">OpenClaw Setup Call</div>
<div className="call-status">● Recording &amp; transcribing</div>
</div>
<div aria-label="Call timer" className="call-timer">24:17</div>
</div>
<div aria-label="Intake checklist" className="checklist" role="list">
<div className="cl-item done" role="listitem">
<div aria-hidden="true" className="cl-check">✓</div>
                  Business hours + holiday schedule
                </div>
<div className="cl-item done" role="listitem">
<div aria-hidden="true" className="cl-check">✓</div>
                  Top 50 customer questions mapped
                </div>
<div className="cl-item done" role="listitem">
<div aria-hidden="true" className="cl-check">✓</div>
                  Cancellation &amp; refund policy
                </div>
<div className="cl-item active" role="listitem">
<div aria-hidden="true" className="cl-check"></div>
                  Escalation thresholds &amp; routing
                </div>
<div className="cl-item" role="listitem">
<div aria-hidden="true" className="cl-check"></div>
                  Tone &amp; voice calibration
                </div>
<div className="cl-item" role="listitem">
<div aria-hidden="true" className="cl-check"></div>
                  Integration requirements
                </div>
</div>
</div>
</div>
</div>

<div className="step-block flip rev" data-step="2" id="step-2">
<div className="step-copy">
<div className="step-top">
<div aria-hidden="true" className="step-num">02</div>
<div className="step-phase">Day 1–2 — Our job now</div>
<h3 className="step-title">We build your knowledge base and configure every rule.</h3>
</div>
<p className="step-desc">
              Our setup team takes the call recording, extracts every fact, builds your agent's knowledge base, and configures the logic layer — escalation rules, booking workflows, response tone, hours handling. We test it against 200+ edge cases before you ever see it.
            </p>
<div className="step-tags">
<span className="tag orange">You do nothing</span>
<span className="tag">200+ test scenarios</span>
<span className="tag green">Quality-gated delivery</span>
</div>
<div className="step-detail-list" role="list">
<div className="sdl-item" role="listitem">
<div aria-hidden="true" className="sdl-icon">🧠</div>
                Knowledge base built from your call transcript — no paraphrasing, your words
              </div>
<div className="sdl-item" role="listitem">
<div aria-hidden="true" className="sdl-icon">⚙️</div>
                Logic rules configured: booking windows, waitlists, seasonal changes
              </div>
<div className="sdl-item" role="listitem">
<div aria-hidden="true" className="sdl-icon">🔗</div>
                Integrations connected: calendar, CRM, email, SMS provider
              </div>
<div className="sdl-item" role="listitem">
<div aria-hidden="true" className="sdl-icon">🧪</div>
                Internal QA pass: we try to break it before your customers do
              </div>
</div>
</div>

<div className="step-visual rev rev-d2">
<div className="vis-header">
<div aria-hidden="true" className="vis-dots">
<div className="vis-dot"></div><div className="vis-dot"></div><div className="vis-dot"></div>
</div>
<div className="vis-title">Agent Configuration Panel</div>
</div>
<div className="vis-body">
<div aria-label="Agent configuration settings" className="config-list" role="list">
<div className="cfg-item" role="listitem">
<span className="cfg-label">Business hours enforcement</span>
<div aria-label="Enabled" className="cfg-toggle" title="Enabled"></div>
</div>
<div className="cfg-item" role="listitem">
<span className="cfg-label">After-hours auto-reply</span>
<div aria-label="Enabled" className="cfg-toggle" title="Enabled"></div>
</div>
<div className="cfg-item" role="listitem">
<span className="cfg-label">Escalation threshold</span>
<span className="cfg-val">$200 disputes</span>
</div>
<div className="cfg-item" role="listitem">
<span className="cfg-label">Booking lead time</span>
<span className="cfg-val">24h minimum</span>
</div>
<div className="cfg-item" role="listitem">
<span className="cfg-label">Tone profile</span>
<span className="cfg-val">Warm · Professional</span>
</div>
<div className="cfg-item" role="listitem">
<span className="cfg-label">Calendar sync</span>
<div aria-label="Enabled" className="cfg-toggle" title="Enabled"></div>
</div>
<div className="cfg-item" role="listitem">
<span className="cfg-label">Insurance verification</span>
<div aria-label="Disabled" className="cfg-toggle off" title="Disabled"></div>
</div>
</div>
</div>
</div>
</div>

<div className="step-block rev" data-step="3" id="step-3">
<div className="step-copy">
<div className="step-top">
<div aria-hidden="true" className="step-num">03</div>
<div className="step-phase">Hour 48 — Go time</div>
<h3 className="step-title">We deploy across every channel. You get a 5-minute walkthrough.</h3>
</div>
<p className="step-desc">
              Once QA passes, we push your agent live across every channel you signed up for — website chat widget, SMS line, email inbox, scheduling tool. We install the chat widget on your site, route your SMS number, and configure the email routing rules. All you get is a short walkthrough video and a "you're live" Slack message.
            </p>
<div className="step-tags">
<span className="tag orange">Zero downtime deploy</span>
<span className="tag">Live on all channels at once</span>
<span className="tag green">You approve before it's public</span>
</div>
<div className="step-detail-list" role="list">
<div className="sdl-item" role="listitem">
<div aria-hidden="true" className="sdl-icon">💬</div>
                Chat widget installed on your website — one line of JS, we handle it
              </div>
<div className="sdl-item" role="listitem">
<div aria-hidden="true" className="sdl-icon">📱</div>
                SMS routing configured — your existing number or a new one
              </div>
<div className="sdl-item" role="listitem">
<div aria-hidden="true" className="sdl-icon">📧</div>
                Email triage live — your inbox stays yours, agent handles the noise
              </div>
<div className="sdl-item" role="listitem">
<div aria-hidden="true" className="sdl-icon">🎯</div>
                Staging preview sent to you for approval before full public launch
              </div>
</div>
</div>

<div className="step-visual rev rev-d2">
<div className="vis-header">
<div aria-hidden="true" className="vis-dots">
<div className="vis-dot"></div><div className="vis-dot"></div><div className="vis-dot"></div>
</div>
<div className="vis-title">Deployment Console</div>
</div>
<div className="vis-body">
<div aria-label="Channel deployment status" className="deploy-grid" role="list">
<div className="deploy-card live" role="listitem">
<div aria-hidden="true" className="dc-icon">💬</div>
<div className="dc-name">Web Chat</div>
<div className="dc-status live">live</div>
</div>
<div className="deploy-card live" role="listitem">
<div aria-hidden="true" className="dc-icon">📱</div>
<div className="dc-name">SMS</div>
<div className="dc-status live">live</div>
</div>
<div className="deploy-card deploying" role="listitem">
<div aria-hidden="true" className="dc-icon">📧</div>
<div className="dc-name">Email</div>
<div className="dc-status deploying">deploying</div>
</div>
<div className="deploy-card" role="listitem">
<div aria-hidden="true" className="dc-icon">🗓️</div>
<div className="dc-name">Calendar</div>
<div className="dc-status queued">queued</div>
</div>
</div>
<div aria-label="Deployment log" className="deploy-log" role="log">
<div className="log-line ok">
<span className="log-ts">09:14</span>
<span>✓ Chat widget deployed to summitdental.com</span>
</div>
<div className="log-line ok">
<span className="log-ts">09:15</span>
<span>✓ SMS +1 555-203-8847 routing active</span>
</div>
<div className="log-line act">
<span className="log-ts">09:16</span>
<span>→ Configuring email triage rules<span aria-hidden="true" className="cursor"></span></span>
</div>
</div>
</div>
</div>
</div>

<div className="step-block flip rev" data-step="4" id="step-4">
<div className="step-copy">
<div className="step-top">
<div aria-hidden="true" className="step-num">04</div>
<div className="step-phase">Every week forever</div>
<h3 className="step-title">We watch it, tune it, and report back. You forget it exists.</h3>
</div>
<p className="step-desc">
              This is the part other tools skip entirely. Your agent doesn't stay static — we review every unanswered query, tune the responses, update your knowledge base when your services change, and flag edge cases that need human attention. You get a clean weekly digest. Nothing more unless you want it.
            </p>
<div className="step-tags">
<span className="tag orange">Weekly tuning sessions</span>
<span className="tag green">Proactive knowledge updates</span>
<span className="tag">Human escalation monitoring</span>
</div>
<div className="step-detail-list" role="list">
<div className="sdl-item" role="listitem">
<div aria-hidden="true" className="sdl-icon">📊</div>
                Weekly digest delivered every Monday — resolution rate, top queries, new bookings
              </div>
<div className="sdl-item" role="listitem">
<div aria-hidden="true" className="sdl-icon">🔧</div>
                We fix failed responses proactively — before they frustrate another customer
              </div>
<div className="sdl-item" role="listitem">
<div aria-hidden="true" className="sdl-icon">📝</div>
                Knowledge base kept current — price changes, new services, seasonal updates
              </div>
<div className="sdl-item" role="listitem">
<div aria-hidden="true" className="sdl-icon">🚨</div>
                Escalation patterns flagged — when something needs a policy conversation
              </div>
</div>
</div>

<div className="step-visual rev rev-d2">
<div className="vis-header">
<div aria-hidden="true" className="vis-dots">
<div className="vis-dot"></div><div className="vis-dot"></div><div className="vis-dot"></div>
</div>
<div className="vis-title">Weekly Digest — Week 12</div>
</div>
<div className="vis-body">
<div className="digest-header">
<div className="digest-label">Summit Dental Care</div>
<div className="digest-week">Mar 3 – Mar 9</div>
</div>
<div aria-label="Weekly stats" className="digest-stat-row" role="list">
<div className="ds" role="listitem">
<div className="ds-val">1,084</div>
<div className="ds-lbl">conversations</div>
<div aria-label="Up 9% week over week" className="ds-delta up">↑ 9% WoW</div>
</div>
<div className="ds" role="listitem">
<div className="ds-val">96.1%</div>
<div className="ds-lbl">resolved by AI</div>
<div aria-label="Up 1.9% week over week" className="ds-delta up">↑ 1.9% WoW</div>
</div>
<div className="ds" role="listitem">
<div className="ds-val">51</div>
<div className="ds-lbl">bookings made</div>
<div aria-label="Up 13 from last week" className="ds-delta up">↑ +13 WoW</div>
</div>
<div className="ds" role="listitem">
<div className="ds-val">0</div>
<div className="ds-lbl">escalations</div>
<div aria-label="Down 2 from last week" className="ds-delta up">↓ –2 WoW</div>
</div>
</div>
<div aria-label="Weekly insight" className="insight-card" role="note">
<div aria-hidden="true" className="insight-icon">💡</div>
<div className="insight-text">
<strong>New pattern detected:</strong> 23 questions about Invisalign pricing this week — we've added a dedicated FAQ entry and a booking prompt. Expect increased consultations next week.
                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section aria-labelledby="timeline-heading" className="timeline-section">
<div className="wrap">
<div className="section-eyebrow">The timeline</div>
<h2 className="section-h rev" id="timeline-heading">From "yes" to live in 48 hours</h2>
<p className="section-sub rev rev-d1">Most of our clients have their agent live before the week is out. Here's what that looks like, hour by hour.</p>
<div aria-label="Deployment timeline" className="timeline-track" role="list">
<div className="tl-node rev" role="listitem">
<div aria-hidden="true" className="tl-dot">📞</div>
<div className="tl-time">Hour 0</div>
<div className="tl-title">Intake Call</div>
<div className="tl-desc">45 minutes. You talk, we listen, we document everything your agent needs to know.</div>
</div>
<div className="tl-node rev rev-d1" role="listitem">
<div aria-hidden="true" className="tl-dot">⚙️</div>
<div className="tl-time">Hours 1–36</div>
<div className="tl-title">Build &amp; QA</div>
<div className="tl-desc">Our team configures your agent, builds the knowledge base, and runs 200+ test scenarios.</div>
</div>
<div className="tl-node rev rev-d2" role="listitem">
<div aria-hidden="true" className="tl-dot">👁️</div>
<div className="tl-time">Hour 36</div>
<div className="tl-title">Staging Preview</div>
<div className="tl-desc">You get a private link to test your agent before it goes live. Approve or request changes.</div>
</div>
<div className="tl-node rev rev-d3" role="listitem">
<div aria-hidden="true" className="tl-dot">🚀</div>
<div className="tl-time">Hour 48</div>
<div className="tl-title">Go Live</div>
<div className="tl-desc">All channels activated simultaneously. Your agent starts handling real conversations.</div>
</div>
<div className="tl-node rev rev-d4" role="listitem">
<div aria-hidden="true" className="tl-dot">📊</div>
<div className="tl-time">Day 7</div>
<div className="tl-title">First Digest</div>
<div className="tl-desc">Your first weekly performance report lands in your inbox. First tune-up already done.</div>
</div>
<div className="tl-node rev rev-d5" role="listitem">
<div aria-hidden="true" className="tl-dot">∞</div>
<div className="tl-time">Ongoing</div>
<div className="tl-title">Managed Forever</div>
<div className="tl-desc">Weekly tuning, proactive updates, escalation monitoring. Your agent gets smarter every week.</div>
</div>
</div>
</div>
</section>

<section aria-labelledby="handles-heading" className="handles-section">
<div className="wrap">
<div className="section-eyebrow">Capabilities</div>
<h2 className="section-h rev" id="handles-heading">What your agent handles from day one</h2>
<p className="section-sub rev rev-d1">Every OpenClaw agent ships with these capabilities pre-configured. No add-ons. No plugins. No extra cost.</p>
<div className="handles-grid">
<div className="accordion-item rev" data-acc="">
<div aria-controls="acc-1-body" aria-expanded="false" className="accordion-head" role="button" tabindex="0">
<div aria-hidden="true" className="acc-icon">📞</div>
<div className="acc-title">Booking &amp; Scheduling</div>
<svg aria-hidden="true" className="acc-chevron" fill="none" height="16" viewbox="0 0 16 16" width="16">
<path d="M4 6l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="accordion-body" id="acc-1-body" role="region">
<div className="acc-content">
<p>Checks real-time availability against your connected calendar, books appointments, sends confirmations, handles reschedules, and fires reminder messages at intervals you define. Works without a human in the loop at any point.</p>
<div aria-label="Example queries handled" className="acc-examples" role="list">
<div className="acc-ex" role="listitem">Can I book a cleaning for next Tuesday afternoon?</div>
<div className="acc-ex" role="listitem">I need to move my 3pm appointment — what's available Friday?</div>
<div className="acc-ex" role="listitem">Is Dr. Chen available this week for a new patient consult?</div>
</div>
</div>
</div>
</div>
<div className="accordion-item rev rev-d1" data-acc="">
<div aria-controls="acc-2-body" aria-expanded="false" className="accordion-head" role="button" tabindex="0">
<div aria-hidden="true" className="acc-icon blue">💬</div>
<div className="acc-title">FAQ &amp; Live Support</div>
<svg aria-hidden="true" className="acc-chevron" fill="none" height="16" viewbox="0 0 16 16" width="16">
<path d="M4 6l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="accordion-body" id="acc-2-body" role="region">
<div className="acc-content">
<p>Answers your 50+ most common questions instantly, in your voice. When something falls outside the knowledge base, it escalates with full context attached — your team never starts cold.</p>
<div aria-label="Example queries handled" className="acc-examples" role="list">
<div className="acc-ex" role="listitem">Do you accept Blue Cross insurance?</div>
<div className="acc-ex" role="listitem">What's your cancellation policy?</div>
<div className="acc-ex" role="listitem">How much does a crown cost without insurance?</div>
</div>
</div>
</div>
</div>
<div className="accordion-item rev rev-d2" data-acc="">
<div aria-controls="acc-3-body" aria-expanded="false" className="accordion-head" role="button" tabindex="0">
<div aria-hidden="true" className="acc-icon green">🧾</div>
<div className="acc-title">New Client Onboarding</div>
<svg aria-hidden="true" className="acc-chevron" fill="none" height="16" viewbox="0 0 16 16" width="16">
<path d="M4 6l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="accordion-body" id="acc-3-body" role="region">
<div className="acc-content">
<p>Guides new clients through your intake process automatically. Sends the right forms, answers first-week questions, delivers your welcome materials, and confirms everything is in place before their first appointment.</p>
<div aria-label="Example queries handled" className="acc-examples" role="list">
<div className="acc-ex" role="listitem">I just booked — what do I need to bring to my first visit?</div>
<div className="acc-ex" role="listitem">Where do I send my X-rays from my previous dentist?</div>
<div className="acc-ex" role="listitem">Can I fill out the new patient forms online?</div>
</div>
</div>
</div>
</div>
<div className="accordion-item rev rev-d1" data-acc="">
<div aria-controls="acc-4-body" aria-expanded="false" className="accordion-head" role="button" tabindex="0">
<div aria-hidden="true" className="acc-icon warn">📧</div>
<div className="acc-title">Email Triage &amp; Auto-Reply</div>
<svg aria-hidden="true" className="acc-chevron" fill="none" height="16" viewbox="0 0 16 16" width="16">
<path d="M4 6l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="accordion-body" id="acc-4-body" role="region">
<div className="acc-content">
<p>Sorts, categorizes, and responds to routine emails automatically. Urgent items get flagged and routed to the right person. Everything else is handled — your inbox goes from a source of dread to a clean priority queue.</p>
<div aria-label="Example queries handled" className="acc-examples" role="list">
<div className="acc-ex" role="listitem">Hey do you have any Tuesday openings next week?</div>
<div className="acc-ex" role="listitem">I need to cancel my appointment tomorrow morning</div>
<div className="acc-ex" role="listitem">Can you send me a copy of my last invoice?</div>
</div>
</div>
</div>
</div>
<div className="accordion-item rev rev-d3" data-acc="">
<div aria-controls="acc-5-body" aria-expanded="false" className="accordion-head" role="button" tabindex="0">
<div aria-hidden="true" className="acc-icon">🔔</div>
<div className="acc-title">Reminders &amp; Follow-ups</div>
<svg aria-hidden="true" className="acc-chevron" fill="none" height="16" viewbox="0 0 16 16" width="16">
<path d="M4 6l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="accordion-body" id="acc-5-body" role="region">
<div className="acc-content">
<p>Automated appointment reminders via SMS and email at the intervals you set. Post-visit follow-ups. Review request campaigns to satisfied clients. The repetitive touchpoints your team dreads — fully automated.</p>
<div aria-label="Example automated messages" className="acc-examples" role="list">
<div className="acc-ex" role="listitem">Reminder: your cleaning is tomorrow at 2pm — reply C to confirm</div>
<div className="acc-ex" role="listitem">Hi Sarah! How did your visit go? We'd love a quick Google review.</div>
<div className="acc-ex" role="listitem">It's been 6 months — time to schedule your next cleaning?</div>
</div>
</div>
</div>
</div>
<div className="accordion-item rev rev-d2" data-acc="">
<div aria-controls="acc-6-body" aria-expanded="false" className="accordion-head" role="button" tabindex="0">
<div aria-hidden="true" className="acc-icon blue">⚡</div>
<div className="acc-title">Escalation &amp; Handoff</div>
<svg aria-hidden="true" className="acc-chevron" fill="none" height="16" viewbox="0 0 16 16" width="16">
<path d="M4 6l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="accordion-body" id="acc-6-body" role="region">
<div className="acc-content">
<p>When something genuinely needs a human, your agent escalates — but with full context already attached. The transcript, the issue, the customer history. Your team never asks "what did they say?" again.</p>
<div aria-label="Example escalation scenarios" className="acc-examples" role="list">
<div className="acc-ex" role="listitem">Billing dispute over $200 → routed to office manager with full thread</div>
<div className="acc-ex" role="listitem">Medical emergency keywords → immediate escalation to on-call staff</div>
<div className="acc-ex" role="listitem">3rd unanswered question in session → flagged for human review</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section aria-labelledby="faq-heading" className="faq-section">
<div className="wrap">
<div className="section-eyebrow">Common questions</div>
<h2 className="section-h rev" id="faq-heading">Still wondering?</h2>
<p className="section-sub rev rev-d1">The questions people ask before they stop second-guessing and just start the trial.</p>
<div className="faq-cols">
<div>
<div className="faq-item rev" data-faq="">
<div aria-controls="faq-1-body" aria-expanded="false" className="faq-q" role="button" tabindex="0">
<span>What if my business is complicated? We have a lot of edge cases.</span>
<svg aria-hidden="true" className="faq-chevron" fill="none" viewbox="0 0 16 16"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<div className="faq-body" id="faq-1-body" role="region">
<p>Good. The more complex your business, the more our managed approach pays off versus a DIY tool. We handle complicated escalation logic, multi-location rules, service-specific policies, and seasonal variations. Complex businesses are our sweet spot — not our edge case.</p>
</div>
</div>
<div className="faq-item rev rev-d1" data-faq="">
<div aria-controls="faq-2-body" aria-expanded="false" className="faq-q" role="button" tabindex="0">
<span>What happens when the agent gets something wrong?</span>
<svg aria-hidden="true" className="faq-chevron" fill="none" viewbox="0 0 16 16"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<div className="faq-body" id="faq-2-body" role="region">
<p>We catch it before your customer does, most of the time. Our weekly review looks at every conversation that didn't resolve cleanly, and we fix the underlying knowledge gap or rule that caused it. You can also flag anything directly through your dashboard and we'll address it same-day.</p>
</div>
</div>
<div className="faq-item rev rev-d2" data-faq="">
<div aria-controls="faq-3-body" aria-expanded="false" className="faq-q" role="button" tabindex="0">
<span>How does my agent get updated when my prices or services change?</span>
<svg aria-hidden="true" className="faq-chevron" fill="none" viewbox="0 0 16 16"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<div className="faq-body" id="faq-3-body" role="region">
<p>Just message us or use the knowledge base editor in your dashboard. We push the update within a few hours. For Growth and Scale plans, we proactively monitor your website and flag when something looks out of date — so you don't even have to remember to tell us.</p>
</div>
</div>
<div className="faq-item rev rev-d3" data-faq="">
<div aria-controls="faq-4-body" aria-expanded="false" className="faq-q" role="button" tabindex="0">
<span>Will it sound robotic to my customers?</span>
<svg aria-hidden="true" className="faq-chevron" fill="none" viewbox="0 0 16 16"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<div className="faq-body" id="faq-4-body" role="region">
<p>No — and we've worked hard to make that the case. During your intake call, we calibrate your agent's tone to match how you actually communicate. It can be warm and casual, professional and direct, or anything in between. Most clients tell us customers can't tell the difference.</p>
</div>
</div>
</div>
<div>
<div className="faq-item rev" data-faq="">
<div aria-controls="faq-5-body" aria-expanded="false" className="faq-q" role="button" tabindex="0">
<span>What integrations do you support?</span>
<svg aria-hidden="true" className="faq-chevron" fill="none" viewbox="0 0 16 16"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<div className="faq-body" id="faq-5-body" role="region">
<p>Google Calendar, Acuity, Calendly, Mindbody, and most major scheduling tools. For CRM: HubSpot, Salesforce, and most small-business CRMs via Zapier. SMS: Twilio, your existing business number via call forwarding. Email: Gmail, Outlook, Fastmail. If you're on something unusual, ask — we've probably handled it.</p>
</div>
</div>
<div className="faq-item rev rev-d1" data-faq="">
<div aria-controls="faq-6-body" aria-expanded="false" className="faq-q" role="button" tabindex="0">
<span>Can I cancel any time?</span>
<svg aria-hidden="true" className="faq-chevron" fill="none" viewbox="0 0 16 16"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<div className="faq-body" id="faq-6-body" role="region">
<p>Yes. Month-to-month, no long-term contracts. Cancel with 7 days' notice and we'll offboard cleanly — including exporting your full knowledge base so you keep everything we built. We'd rather earn your business every month than lock you in.</p>
</div>
</div>
<div className="faq-item rev rev-d2" data-faq="">
<div aria-controls="faq-7-body" aria-expanded="false" className="faq-q" role="button" tabindex="0">
<span>What does "managed" actually mean in practice?</span>
<svg aria-hidden="true" className="faq-chevron" fill="none" viewbox="0 0 16 16"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<div className="faq-body" id="faq-7-body" role="region">
<p>It means a real person on our team reviews your agent's performance every week, makes tuning changes, updates the knowledge base when needed, and monitors for patterns that suggest a policy change is needed. On Growth plans, this is included. You don't have to log in to your dashboard unless you want to. Most of our clients check it occasionally for fun, not out of necessity.</p>
</div>
</div>
<div className="faq-item rev rev-d3" data-faq="">
<div aria-controls="faq-8-body" aria-expanded="false" className="faq-q" role="button" tabindex="0">
<span>Is my business data secure?</span>
<svg aria-hidden="true" className="faq-chevron" fill="none" viewbox="0 0 16 16"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<div className="faq-body" id="faq-8-body" role="region">
<p>Yes. All data is encrypted in transit and at rest. We don't train AI models on your customer data. We're SOC 2 Type II compliant, HIPAA-ready for healthcare clients, and can sign a BAA on request. Customer conversations are stored for 90 days by default, configurable to your requirements.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section aria-labelledby="cta-heading" className="cta-section">
<div className="wrap">
<div className="cta-box rev">
<div className="section-eyebrow" style={{justifyContent: 'center'}}>Ready to start</div>
<h2 className="section-h" id="cta-heading">Your intake call is<br/>45 minutes away.</h2>
<p className="section-sub">Book it now. We handle everything else. Your agent could be live by the end of this week — handling calls, answering questions, and booking appointments while you sleep.</p>
<div className="cta-row">
<a className="btn-primary" href="openclaw-homepage.html#cta">
          Book My Intake Call
          <svg aria-hidden="true" fill="none" height="14" viewbox="0 0 14 14" width="14"><path d="M7 1l6 6-6 6M13 7H1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="btn-outline" href="openclaw-homepage.html#pricing">
          View Pricing
        </a>
</div>
<p className="cta-note">14-day free trial · No credit card · Setup call included · Cancel any time</p>
</div>
</div>
</section>

<footer>
<div className="footer-row">
<p>© 2025 OpenClaw Inc. — AI agents, fully managed.</p>
<nav aria-label="Footer links" className="footer-links">
<a href="openclaw-homepage.html">Home</a>
<a href="openclaw-how-it-works.html">How It Works</a>
<a href="openclaw-dashboard.html">Dashboard</a>
<a href="openclaw-homepage.html#pricing">Pricing</a>
</nav>
</div>
</footer>

<div aria-label="Page progress" aria-live="polite" className="progress-pill" id="progressPill" role="status">
<div aria-hidden="true" className="pp-steps">
<div className="pp-step" id="pp1"></div>
<div className="pp-step" id="pp2"></div>
<div className="pp-step" id="pp3"></div>
<div className="pp-step" id="pp4"></div>
</div>
<span className="pp-label" id="ppLabel">Step <span>1</span> of 4</span>
</div>


    </>
  );
}
