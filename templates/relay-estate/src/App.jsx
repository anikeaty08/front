import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const isOpen = item.classList.contains('is-open');

      document.querySelectorAll('.faq-item').forEach((faq) => {
        faq.classList.remove('is-open');
      });

      if (!isOpen) {
        item.classList.add('is-open');
      }
    });
  });



  const auditImage = document.getElementById('audit-parallax-img');
  const auditSection = document.querySelector('.audit-section');

  function updateAuditParallax() {
    if (!auditImage || !auditSection) return;

    const rect = auditSection.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
    const clamped = Math.max(0, Math.min(1, progress));

    const translateY = (clamped - 0.5) * 120;

    auditImage.style.transform = `translate3d(0, ${translateY}px, 0) scale(1.12)`;
  }

  window.addEventListener('scroll', updateAuditParallax, { passive: true });
  window.addEventListener('resize', updateAuditParallax);
  updateAuditParallax();



    lucide.createIcons();

    const nav = document.getElementById('navbar');
    const heroBg = document.getElementById('hero-bg-img');

    window.addEventListener('scroll', () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 12);

      if (heroBg && window.scrollY < window.innerHeight) {
        heroBg.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.hero-section .reveal-item').forEach((el) => observer.observe(el));
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="site-nav" id="navbar">
<div className="nav-shell">
<div className="nav-left">
<a className="nav-link" href="#solutions">Solutions</a>
<a className="nav-link" href="#workflows">Workflows</a>
<a className="nav-link" href="#process">Process</a>
<a className="nav-link" href="#results">Results</a>
</div>
<a aria-label="RelayEstate AI home" className="brand-lockup" href="#hero">
<span className="brand-mark">
<i className="w-4 h-4" data-lucide="git-branch"></i>
</span>
<span className="brand-name">RelayEstate</span>
</a>
<div className="nav-right">
<a className="nav-link" href="#faq">FAQ</a>
<a className="nav-cta" href="#audit">
          Find My Lead Gaps
          <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<button aria-label="Open menu" className="mobile-menu-btn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="hero-section section-slant-bottom" id="hero">
<div className="hero-bg-layer">
<img alt="Luxury modern home exterior at dusk" id="hero-bg-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b88b71ee-6e8c-4230-b004-094bc0a9f86f_3840w.jpg"/>
</div>
<div className="hero-content-wrap">
<div className="hero-topline reveal-item delay-200">
<div className="hero-topline-left">
<span>// AI response systems for real estate teams</span>
<small>Lead intake · routing · scheduling · CRM follow-up</small>
</div>
<div className="hero-topline-right">
<span>Operating system layer</span>
<small>Response target: under 60 seconds</small>
</div>
</div>
<div className="hero-bottom">
<h1 className="hero-title reveal-item delay-100">
          Turn every inquiry into a faster next step.
        </h1>
<div className="hero-side reveal-item delay-300">
<p className="hero-text">
            Automate lead response, qualification, routing, scheduling, and CRM updates so your team can move every
            inquiry forward before momentum fades.
          </p>
<a className="btn btn-primary hero-cta" href="#audit">
            Map My Lead Flow
            <i className="w-4 h-4" data-lucide="arrow-right-up"></i>
</a>
<div className="hero-chip-row">
<span className="hero-chip">
<i className="w-3 h-3" data-lucide="message-square"></i>
            Instant reply
          </span>
<span className="hero-chip">
<i className="w-3 h-3" data-lucide="calendar-check"></i>
            Booked call
          </span>
<span className="hero-chip">
<i className="w-3 h-3" data-lucide="database-zap"></i>
            CRM sync
          </span>
</div>
</div>
</div>
</div>
</section>

<section className="diagnostic-section section-slant-top" id="pain">
<div className="diagnostic-shell">
<div className="diagnostic-header">
<div className="section-eyebrow dark">
<span className="eyebrow-dot"></span>
          Pipeline leakage
        </div>
<h2 className="section-title dark">
          Where real estate teams lose momentum after the lead comes in.
        </h2>
<p className="section-text dark">
          Most teams already have leads coming from websites, portals, referrals, and calls. The real problem is what
          happens in the minutes and hours after that first inquiry.
        </p>
</div>
<div className="diagnostic-track">
<div aria-hidden="true" className="diagnostic-rail">
<div className="diagnostic-rail-glow"></div>
</div>

<div className="diagnostic-step">
<div className="diagnostic-copy">
<div className="diagnostic-badge">Inquiry intake</div>
<h3>The lead arrives, but the response window is short.</h3>
<p>
              A website form, portal lead, missed call, or referral handoff creates intent. If the first response is
              slow, momentum starts fading immediately.
            </p>
</div>
<div aria-hidden="true" className="diagnostic-node"></div>
<div className="diagnostic-card-wrap">
<div className="diagnostic-card">
<div className="diagnostic-card-top">
<div className="diagnostic-card-icon">
<i className="w-5 h-5" data-lucide="inbox"></i>
</div>
<strong>Lead sources stack up fast</strong>
</div>
<ul className="diagnostic-list">
<li>Website forms arrive without instant acknowledgment</li>
<li>Portal leads compete with other active tasks</li>
<li>Missed calls rarely get a structured text-back</li>
</ul>
</div>
</div>
</div>

<div className="diagnostic-step reverse">
<div className="diagnostic-copy">
<div className="diagnostic-badge">Response delay</div>
<h3>Follow-up becomes inconsistent when timing depends on memory.</h3>
<p>
              Once the first few minutes pass, the quality of follow-up often depends on who is available, who
              remembered, and what else is happening that day.
            </p>
</div>
<div aria-hidden="true" className="diagnostic-node"></div>
<div className="diagnostic-card-wrap">
<div className="diagnostic-card">
<div className="diagnostic-card-top">
<div className="diagnostic-card-icon">
<i className="w-5 h-5" data-lucide="timer"></i>
</div>
<strong>Response discipline breaks under load</strong>
</div>
<ul className="diagnostic-list">
<li>After-hours inquiries wait too long</li>
<li>Busy showing days weaken response consistency</li>
<li>No shared standard for first-touch timing</li>
</ul>
</div>
</div>
</div>

<div className="diagnostic-step">
<div className="diagnostic-copy">
<div className="diagnostic-badge">Qualification gaps</div>
<h3>Critical context is often missing after the first contact.</h3>
<p>
              Timeline, intent, urgency, price range, and location fit are not always captured clearly, which weakens
              both routing and follow-up quality.
            </p>
</div>
<div aria-hidden="true" className="diagnostic-node"></div>
<div className="diagnostic-card-wrap">
<div className="diagnostic-card">
<div className="diagnostic-card-top">
<div className="diagnostic-card-icon">
<i className="w-5 h-5" data-lucide="messages-square"></i>
</div>
<strong>Conversations start without structure</strong>
</div>
<ul className="diagnostic-list">
<li>Buyer vs seller intent stays unclear</li>
<li>Urgency and move timeline get missed</li>
<li>Follow-up lacks usable context for the next step</li>
</ul>
</div>
</div>
</div>

<div className="diagnostic-step reverse">
<div className="diagnostic-copy">
<div className="diagnostic-badge">Manual handoff</div>
<h3>Routing, scheduling, and CRM updates happen too late.</h3>
<p>
              Once the lead needs a handoff, gaps between inboxes, calendars, and agents create friction. Good leads
              stall in the transition.
            </p>
</div>
<div aria-hidden="true" className="diagnostic-node"></div>
<div className="diagnostic-card-wrap">
<div className="diagnostic-card">
<div className="diagnostic-card-top">
<div className="diagnostic-card-icon">
<i className="w-5 h-5" data-lucide="route"></i>
</div>
<strong>Momentum gets lost between systems</strong>
</div>
<ul className="diagnostic-list">
<li>Qualified leads are routed manually</li>
<li>Booking links and reminders are not triggered fast enough</li>
<li>CRM notes, tags, and status changes stay incomplete</li>
</ul>
</div>
</div>
</div>
<div className="diagnostic-footer">
<span>Inquiry → Delay → Missing context → Manual handoff → Cold lead</span>
</div>
</div>
</div>
</section>

<section className="automate-section grain-overlay section-slant-both" id="solutions">
<div className="automate-shell content-layer">
<div className="automate-header-grid">
<div className="automate-header-copy">
<div className="section-eyebrow">
<span className="eyebrow-dot"></span>
            Solution architecture
          </div>
<h2 className="section-title light">
            Four systems that keep every inquiry moving.
          </h2>
</div>
<div className="automate-side-copy">
<p>
            RelayEstate connects response, qualification, routing, and CRM continuity into one structured workflow so
            your team can move faster without losing context.
          </p>
</div>
</div>
<div className="automate-stage">
<div className="automate-engine-shell">
<div className="automate-engine-top-glow"></div>
<div className="automate-engine-windowbar">
<span></span>
<span></span>
<span></span>
</div>
<div className="automate-engine-header">
<div className="automate-engine-title-row">
<h3>Lead orchestration layer</h3>
<div className="automate-engine-stats">
<span><i className="w-4 h-4" data-lucide="message-square"></i> Instant reply</span>
<span><i className="w-4 h-4" data-lucide="check-circle-2"></i> Qualified + tagged</span>
<span><i className="w-4 h-4" data-lucide="clock-3"></i> Response target: under 60s</span>
</div>
</div>
</div>
<div className="automate-engine-grid">
<div className="automate-engine-cell">
<div className="automate-engine-col-label">Inquiry intake</div>
<div className="automate-engine-flow-card">
<div className="automate-engine-flow-top">
<span>New inquiry</span>
<span>08:42</span>
</div>
<strong>Website buyer lead captured</strong>
<small>Downtown Montreal · 3-bed · ready within 60 days</small>
</div>
</div>
<div className="automate-engine-cell">
<div className="automate-engine-col-label">Response layer</div>
<div className="automate-engine-flow-card">
<div className="automate-engine-flow-top">
<span>Instant text</span>
<span>08:43</span>
</div>
<strong>First-touch reply sent automatically</strong>
<small>Introduces next step and opens qualification flow</small>
</div>
</div>
<div className="automate-engine-cell">
<div className="automate-engine-col-label">Qualification</div>
<div className="automate-engine-flow-card blue">
<div className="automate-engine-flow-top">
<span>Intent tagged</span>
<span>08:45</span>
</div>
<strong>Timeline, urgency, and fit captured</strong>
<small>Buyer intent confirmed with budget and neighborhood match</small>
</div>
</div>
<div className="automate-engine-cell">
<div className="automate-engine-col-label">Routing + continuity</div>
<div className="automate-engine-flow-card">
<div className="automate-engine-flow-top">
<span>Next step booked</span>
<span>08:47</span>
</div>
<strong>Lead routed, meeting booked, CRM synced</strong>
<small>Assigned to the right agent with summary, tags, and task creation</small>
</div>
</div>
<div className="automate-engine-fade"></div>
</div>
</div>
<div className="automate-support-grid">
<article className="automate-support-card">
<div className="automate-support-icon">
<i className="w-5 h-5" data-lucide="radio-receiver"></i>
</div>
<h4>Respond instantly</h4>
<p>
              Reply to website forms, portal leads, and missed calls without waiting on manual first-touch coverage.
            </p>
</article>
<article className="automate-support-card">
<div className="automate-support-icon">
<i className="w-5 h-5" data-lucide="messages-square"></i>
</div>
<h4>Qualify with structure</h4>
<p>
              Capture intent, urgency, budget, and location fit so follow-up starts with usable context instead of
              guesswork.
            </p>
</article>
<article className="automate-support-card">
<div className="automate-support-icon">
<i className="w-5 h-5" data-lucide="database-zap"></i>
</div>
<h4>Keep continuity intact</h4>
<p>
              Route the lead, trigger the next action, and push notes, tags, reminders, and status changes into the CRM.
            </p>
</article>
</div>
</div>
</div>
</section>

<section className="impact-section" id="results">
<div className="impact-shell">
<div className="impact-grid">
<div className="impact-copy">
<div className="section-eyebrow dark">
<span className="eyebrow-dot"></span>
            Operational impact
          </div>
<h2 className="section-title dark">
            What shifts when response becomes structured.
          </h2>
<p className="section-text dark">
            RelayEstate does not just speed up follow-up. It improves how your team responds, qualifies, routes, and
            maintains continuity after every inquiry.
          </p>
<div className="impact-list">
<div className="impact-list-head">
<span>Operational area</span>
<span>Impact</span>
</div>
<div className="impact-list-item">
<div className="impact-list-item-main">
<strong>First-touch coverage</strong>
<span>Website, portal, and missed-call response stays active beyond agent availability.</span>
</div>
<div className="impact-list-item-metric">Faster response</div>
</div>
<div className="impact-list-item">
<div className="impact-list-item-main">
<strong>Qualification consistency</strong>
<span>Every conversation starts with clearer intent, urgency, timeline, and fit signals.</span>
</div>
<div className="impact-list-item-metric">Cleaner context</div>
</div>
<div className="impact-list-item">
<div className="impact-list-item-main">
<strong>Handoff reliability</strong>
<span>Routing, reminders, and meeting transitions happen with less manual chasing.</span>
</div>
<div className="impact-list-item-metric">Fewer dropped steps</div>
</div>
<div className="impact-list-item">
<div className="impact-list-item-main">
<strong>CRM continuity</strong>
<span>Summaries, tags, next actions, and lead status stay more current across the team.</span>
</div>
<div className="impact-list-item-metric">Better pipeline hygiene</div>
</div>
</div>
</div>
<div className="impact-card">
<div className="impact-card-media">
<img alt="Featured lead operations workflow" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/159f2747-a817-4c4c-b3c6-3cb76fd687fd_1600w.jpg"/>
<div className="impact-card-media-content">
<span className="impact-card-badge">Featured workflow snapshot</span>
<h3>Lead flow recovered</h3>
</div>
</div>
<div className="impact-card-body">
<h4>From inquiry to booked next step with less friction.</h4>
<p>
              A structured workflow helps the team respond faster, capture usable context earlier, and move qualified
              leads into the right next action without losing momentum between tools.
            </p>
<div className="impact-metrics">
<div className="impact-metric-row">
<div className="impact-metric-left">
<div className="impact-metric-icon">
<i className="w-5 h-5" data-lucide="clock-3"></i>
</div>
<div className="impact-metric-copy">
<strong>Response target</strong>
<span>First-touch speed</span>
</div>
</div>
<div className="impact-metric-value">&lt; 60s</div>
</div>
<div className="impact-metric-row">
<div className="impact-metric-left">
<div className="impact-metric-icon">
<i className="w-5 h-5" data-lucide="calendar-check-2"></i>
</div>
<div className="impact-metric-copy">
<strong>Booked next step</strong>
<span>Scheduling continuity</span>
</div>
</div>
<div className="impact-metric-value">1 flow</div>
</div>
<div className="impact-metric-row">
<div className="impact-metric-left">
<div className="impact-metric-icon">
<i className="w-5 h-5" data-lucide="database-zap"></i>
</div>
<div className="impact-metric-copy">
<strong>CRM updated</strong>
<span>Notes, tags, and routing</span>
</div>
</div>
<div className="impact-metric-value">Synced</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="workflow-section" id="workflows">
<div className="workflow-inner">
<div className="workflow-left">
<div className="workflow-left-top">
<span className="workflow-kicker">Workflow scenarios</span>
<h2 className="workflow-title">
          Built for the lead moments that need speed and follow-through.
        </h2>
<div className="workflow-scenario-list">
<div className="workflow-point">
<span className="workflow-point-dot"></span>
<div className="workflow-point-copy">
<strong>New inquiry capture</strong>
<p>Instantly respond to website and portal leads before momentum fades.</p>
</div>
</div>
<div className="workflow-point">
<span className="workflow-point-dot"></span>
<div className="workflow-point-copy">
<strong>Missed-call recovery</strong>
<p>Turn missed calls into structured text-back follow-up instead of dead ends.</p>
</div>
</div>
<div className="workflow-point">
<span className="workflow-point-dot"></span>
<div className="workflow-point-copy">
<strong>After-hours coverage</strong>
<p>Keep evenings and weekends active with guided next steps and qualification.</p>
</div>
</div>
</div>
</div>
<div className="workflow-left-bottom">
<strong>Move every lead closer to the next action.</strong>
<p>
          RelayEstate helps teams keep response, routing, reminders, and handoff continuity working across the lead moments where manual follow-up usually breaks.
        </p>
<a className="workflow-button" href="#results">
          Explore workflow examples
          <span className="workflow-button-dot"></span>
</a>
</div>
</div>
<div className="workflow-right">
<article className="workflow-card workflow-card-wide">
<img alt="New inquiry workflow" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/18afa835-2089-4735-a843-41e6dead8283_1600w.jpg"/>
<span className="workflow-card-chip">
<i className="w-4 h-4" data-lucide="message-square"></i>
</span>
<span className="workflow-card-tag">Website</span>
<div className="workflow-card-label">First response in motion</div>
</article>
<article className="workflow-card workflow-card-tall">
<img alt="Missed call recovery workflow" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/363c853e-1ed3-4fd6-b9bf-692f68f58f0b_1600w.jpg?w=800&amp;q=80"/>
<span className="workflow-card-chip">
<i className="w-4 h-4" data-lucide="phone-missed"></i>
</span>
<span className="workflow-card-tag">Inbound</span>
<div className="workflow-card-label">Missed-call recovery</div>
</article>
<article className="workflow-card workflow-card-tall">
<img alt="After-hours workflow" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f5b115de-1738-4c7b-b50d-5a214d631dd1_1600w.jpg?w=800&amp;q=80"/>
<span className="workflow-card-chip">
<i className="w-4 h-4" data-lucide="moon-star"></i>
</span>
<span className="workflow-card-tag">After hours</span>
<div className="workflow-card-label">Coverage that stays active</div>
</article>
</div>
</div>
</section>

<section className="process-section" id="process">
<div className="process-shell">
<div className="process-header">
<div className="section-eyebrow dark">
<span className="eyebrow-dot"></span>
        Implementation + proof
      </div>
<h2 className="section-title dark">
        How RelayEstate gets deployed without disrupting your team.
      </h2>
<p className="section-text dark">
        We start by mapping your existing lead flow, then install the response, qualification, and routing logic where it creates the fastest operational lift.
      </p>
</div>
<div className="process-panel">

<article className="process-card process-story" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/867d0995-3ba9-4162-ab74-3d309156d96e_1600w.jpg\')'}}>
<div className="process-story-content">
<div className="process-story-top">
<p>Our process</p>
<p>Mapped &amp; operationalized</p>
</div>
<div className="process-story-bottom">
<h3>
              Lead flow with
              <span>continuity</span>
</h3>
<div className="process-dots-row">
<span></span>
<span></span>
<span></span>
</div>
<div className="process-story-meta">
<span>Audit → deploy → refine</span>
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</article>

<article className="process-card process-center-card">
<div className="process-card-inner">
<h4>Implementation clarity:</h4>
<div className="process-center-lead">
<span className="accent">4-step</span> rollout,
            faster activation
          </div>
<div className="process-subtitle">How RelayEstate gets installed:</div>
<div className="process-bullets">
<div><span></span> Audit your current intake sources and handoffs</div>
<div><span></span> Map response, qualification, and routing rules</div>
<div><span></span> Launch the first automation layer quickly</div>
<div><span></span> Refine from real lead behavior and team feedback</div>
</div>
<div className="process-quote">
<div className="process-stars">
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
</div>
<p>
              “RelayEstate helped us tighten response time, clean up handoffs, and finally give every lead a more consistent next step.”
            </p>
<div className="process-person">
<img alt="Client avatar" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71d7ad40-af9f-4af2-baa2-8d7eb0382908_320w.webp"/>
<div>
<strong>James Wilson</strong>
<span>Team Lead, Growth Realty Group</span>
</div>
</div>
</div>
</div>
</article>

<div className="grid grid-rows-2 gap-6">
<article className="process-card">
<div className="process-card-inner process-guarantee">
<div className="process-ring">
<div className="process-ring-icon">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
</div>
<div className="process-guarantee-copy">
<h4>Workflow confidence</h4>
<p>
                Built to improve response coverage, handoff clarity, and lead continuity without disrupting the way your team already works.
              </p>
</div>
</div>
</article>
<article className="process-card">
<div className="process-card-inner process-stats">
<div className="process-stats-top">
<div>
<div className="process-stat-number">4 steps</div>
<div className="process-stat-copy">Audit to rollout</div>
</div>
<div>
<div className="process-stat-number">48h</div>
<div className="process-stat-copy">Initial system map</div>
</div>
</div>
<div className="process-capabilities">
<div className="process-capability">
<span>Lead intake</span>
<span>Mapped</span>
</div>
<div className="process-capability">
<span>Routing logic</span>
<span>Configured</span>
</div>
<div className="process-capability">
<span>CRM continuity</span>
<span>Structured</span>
</div>
</div>
<div className="process-cert">
<i className="w-4 h-4" data-lucide="check"></i>
              Built around your real lead flow
            </div>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="faq-section" id="faq">
<div className="faq-shell">
<div className="faq-header">
<div className="section-eyebrow">
<span className="eyebrow-dot"></span>
        FAQ
      </div>
<h2 className="section-title light">
        What teams usually ask before they tighten the workflow.
      </h2>
<p className="section-text light">
        RelayEstate is designed to fit into the response, routing, and follow-up systems you already use, while removing the gaps that cause lead momentum to fade.
      </p>
</div>
<div className="faq-layout">
<aside className="faq-side-card">
<div className="faq-side-kicker">
<span className="faq-side-kicker-dot"></span>
          Common objections
        </div>
<h3>
          Built to reduce friction, not add another layer of it.
        </h3>
<p>
          Most teams are not missing leads because they lack tools. They lose momentum because response, qualification, routing, and handoff do not stay connected under real conditions.
        </p>
<div className="faq-side-points">
<div className="faq-side-point">
<div className="faq-side-point-icon">
<i className="w-4 h-4" data-lucide="plug-zap"></i>
</div>
<div>Designed to work alongside your CRM, calendars, and lead sources.</div>
</div>
<div className="faq-side-point">
<div className="faq-side-point-icon">
<i className="w-4 h-4" data-lucide="timer-reset"></i>
</div>
<div>Built for fast response windows, after-hours continuity, and cleaner handoff.</div>
</div>
<div className="faq-side-point">
<div className="faq-side-point-icon">
<i className="w-4 h-4" data-lucide="route"></i>
</div>
<div>Structured to move qualified inquiries into the right next step without losing context.</div>
</div>
</div>
</aside>
<div className="faq-list">
<div className="faq-item is-open">
<button className="faq-question" type="button">
<span>Does RelayEstate replace our CRM?</span>
<span className="faq-icon">
<i className="w-4 h-4" data-lucide="plus"></i>
</span>
</button>
<div className="faq-answer">
<div className="faq-answer-inner">
<div className="faq-answer-content">
<p>
                  No. RelayEstate is built to strengthen the response and routing layer around your existing system. It helps capture context earlier, trigger the right next step faster, and keep lead continuity cleaner before and during the CRM handoff.
                </p>
</div>
</div>
</div>
</div>
<div className="faq-item">
<button className="faq-question" type="button">
<span>Can it handle after-hours or weekend inquiries?</span>
<span className="faq-icon">
<i className="w-4 h-4" data-lucide="plus"></i>
</span>
</button>
<div className="faq-answer">
<div className="faq-answer-inner">
<div className="faq-answer-content">
<p>
                  Yes. One of the biggest gaps for most teams is the delay that happens when inquiry timing falls outside normal operating hours. RelayEstate is designed to keep first-touch response active and route the lead into a structured follow-up path without waiting for manual availability.
                </p>
</div>
</div>
</div>
</div>
<div className="faq-item">
<button className="faq-question" type="button">
<span>How custom can the routing and qualification logic be?</span>
<span className="faq-icon">
<i className="w-4 h-4" data-lucide="plus"></i>
</span>
</button>
<div className="faq-answer">
<div className="faq-answer-inner">
<div className="faq-answer-content">
<p>
                  Qualification logic can be adapted around the factors your team actually uses to move leads forward, including intent, timeline, urgency, market, price range, and team structure. The goal is not generic automation. It is cleaner operational fit.
                </p>
</div>
</div>
</div>
</div>
<div className="faq-item">
<button className="faq-question" type="button">
<span>What kinds of lead sources can fit into the workflow?</span>
<span className="faq-icon">
<i className="w-4 h-4" data-lucide="plus"></i>
</span>
</button>
<div className="faq-answer">
<div className="faq-answer-inner">
<div className="faq-answer-content">
<p>
                  Website forms, portal inquiries, missed calls, referrals, and other inbound entry points can all be structured into the same continuity layer, so your team is not relying on fragmented response habits across different channels.
                </p>
</div>
</div>
</div>
</div>
<div className="faq-item">
<button className="faq-question" type="button">
<span>How long does setup usually take?</span>
<span className="faq-icon">
<i className="w-4 h-4" data-lucide="plus"></i>
</span>
</button>
<div className="faq-answer">
<div className="faq-answer-inner">
<div className="faq-answer-content">
<p>
                  Setup depends on how many sources, routing conditions, and handoff rules need to be mapped. In most cases, the first step is not full implementation. It is identifying where lead momentum is actually being lost and designing the workflow around those gaps.
                </p>
</div>
</div>
</div>
</div>
<div className="faq-item">
<button className="faq-question" type="button">
<span>Will this feel too automated for a high-trust client experience?</span>
<span className="faq-icon">
<i className="w-4 h-4" data-lucide="plus"></i>
</span>
</button>
<div className="faq-answer">
<div className="faq-answer-inner">
<div className="faq-answer-content">
<p>
                  It should feel more responsive, not more robotic. The point is to make sure no inquiry waits in silence, no context gets lost early, and no qualified lead stalls before the next human step is ready to happen.
                </p>
</div>
</div>
</div>
</div>
<div className="faq-footer-note">
          Routing clarity · faster response · cleaner handoff
        </div>
</div>
</div>
</div>
</section>

<section className="audit-section" id="audit">
<div className="audit-shell">
<div className="audit-stage">
<div className="audit-media">
<img alt="Luxury modern real estate exterior at dusk" id="audit-parallax-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/42b483d1-26b5-4f11-b4a0-a5307a34acf1_3840w.jpg"/>
</div>
<div className="audit-content">
<div className="audit-bottom">
<div className="audit-copy">
<div className="audit-eyebrow">
<span className="audit-eyebrow-dot"></span>
              Final step
            </div>
<h2 className="audit-title">
              See where your lead flow is quietly breaking.
            </h2>
<p className="audit-text">
              RelayEstate helps you identify the exact places where response timing, qualification, routing, and handoff lose momentum, then rebuild the path into a faster and more connected next step.
            </p>
<div className="audit-actions">
<a className="audit-btn-primary" href="#contact">
                Find My Lead Gaps
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="audit-btn-secondary" href="#solutions">
                Review The System
                <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
<div className="audit-side-card">
<div className="audit-side-head">
<strong>What the audit looks for</strong>
<span className="audit-side-badge">Audit scope</span>
</div>
<div className="audit-side-list">
<div className="audit-side-row">
<div className="audit-side-icon">
<i className="w-4 h-4" data-lucide="message-square-warning"></i>
</div>
<div className="audit-side-copy">
<strong>Response lag</strong>
<span>Where first-touch timing breaks and intent starts cooling.</span>
</div>
</div>
<div className="audit-side-row">
<div className="audit-side-icon">
<i className="w-4 h-4" data-lucide="messages-square"></i>
</div>
<div className="audit-side-copy">
<strong>Missing context</strong>
<span>Where qualification details are not captured early enough to route cleanly.</span>
</div>
</div>
<div className="audit-side-row">
<div className="audit-side-icon">
<i className="w-4 h-4" data-lucide="route"></i>
</div>
<div className="audit-side-copy">
<strong>Broken handoff</strong>
<span>Where routing, scheduling, or CRM continuity weakens the next step.</span>
</div>
</div>
</div>
<div className="audit-stats-row">
<div className="audit-stat">
<strong>&lt; 60s</strong>
<span>target response</span>
</div>
<div className="audit-stat">
<strong>1 flow</strong>
<span>connected path</span>
</div>
<div className="audit-stat">
<strong>0 gaps</strong>
<span>handoff goal</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="site-footer">
<div className="site-footer-shell">
<div className="site-footer-top">
<div className="site-footer-brand">
<a aria-label="RelayEstate home" className="brand-lockup" href="#hero">
<span className="brand-mark">
<i className="w-4 h-4" data-lucide="git-branch"></i>
</span>
<span className="brand-name">RelayEstate</span>
</a>
<p>
          Real estate lead automation designed to tighten response, qualification, routing, scheduling, and CRM continuity without losing momentum between the first inquiry and the next step.
        </p>
</div>
<div className="site-footer-links">
<div className="site-footer-col">
<span>Navigation</span>
<a href="#solutions">Solutions</a>
<a href="#workflows">Workflows</a>
<a href="#process">Process</a>
<a href="#results">Results</a>
</div>
<div className="site-footer-col">
<span>Explore</span>
<a href="#faq">FAQ</a>
<a href="#audit">Lead Audit</a>
<a href="#hero">Back to Top</a>
</div>
<div className="site-footer-col">
<span>Contact</span>
<a href="#audit">Find My Lead Gaps</a>
<a href="mailto:hello@relayestate.ai">hello@relayestate.ai</a>
<a href="tel:+10000000000">+1 (000) 000-0000</a>
</div>
</div>
</div>
<div className="site-footer-bottom">
<p>© 2026 RelayEstate. All rights reserved.</p>
<div className="site-footer-bottom-links">
<a href="/">Privacy</a>
<a href="/">Terms</a>
<a href="/">Cookies</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
