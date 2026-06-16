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
    navigator.clipboard.writeText('npm install @lightningads/sdk').then(() => {
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
  }, []);

  return (
    <>
      
<a className="skip-link" href="#capabilities">Skip to content</a>

<nav className="nav" id="nav">
<div className="container">
<div className="nav__inner">
<a className="nav__logo" href="#">Lightning Ads</a>
<div aria-label="Main navigation" className="nav__links" id="navLinks" role="navigation">
<a href="#capabilities">Features</a>
<a href="#platform">API Panel</a>
<a href="#pricing">Pricing</a>
<a href="#">Docs</a>
</div>
<div className="nav__actions">
<a className="btn btn-ghost" href="#" id="navSignIn" style={{display: 'none'}}>Login</a>
<a className="btn btn-primary" href="#">Open Panel</a>
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
      API v2.0 Now Live
    </div>
<h1 className="hero__title">
      Instant Google Ads<br/><strong>agency accounts</strong>
</h1>
</div>
<div className="hero__bottom reveal is-visible">
<p className="hero__desc">
      Rent premium Google Ads agency accounts and manage them instantly via our unified API panel. Scale your ad spend without limits.
    </p>
<div className="hero__actions">
<a className="btn btn-primary" href="#">
<span className="btn-shimmer"></span>
        Create Account Free
        <iconify-icon icon="lucide:arrow-right"></iconify-icon>
</a>
<a className="btn btn-ghost" href="#">
<iconify-icon icon="lucide:terminal"></iconify-icon>
        Read API Docs
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
<div className="trust-bar__item reveal-child"><iconify-icon icon="lucide:badge-check"></iconify-icon> Premium Agency</div>
<div className="trust-bar__item reveal-child"><iconify-icon icon="lucide:code-2"></iconify-icon> API Driven</div>
<div className="trust-bar__item reveal-child"><iconify-icon icon="lucide:infinity"></iconify-icon> Zero Limits</div>
<div className="trust-bar__item reveal-child"><iconify-icon icon="lucide:zap"></iconify-icon> Instant Provision</div>
<div className="trust-bar__item reveal-child"><iconify-icon icon="lucide:bitcoin"></iconify-icon> Crypto Top-up</div>
<div className="trust-bar__item reveal-child"><iconify-icon icon="lucide:shield-check"></iconify-icon> Auto-Appeals</div>
<div className="trust-bar__item reveal-child"><iconify-icon icon="lucide:globe"></iconify-icon> High Trust</div>
<div className="trust-bar__item reveal-child"><iconify-icon icon="lucide:lock"></iconify-icon> Whitelisted</div>
</div>
</div>
</section>

<section className="capabilities" id="capabilities">
<div className="container">
<div className="section-header section-header--center reveal">
<div className="section-label">Panel Features</div>
<h2 className="section-title">Everything you need to<br/><span className="text-gradient">scale campaigns</span></h2>
<p className="section-desc">From instant provisioning to automated billing, Lightning Ads handles the infrastructure so your media buyers can focus on ROAS.</p>
</div>
<div className="capabilities__layout reveal">
<div className="capabilities__tabs" role="tablist">
<div aria-selected="true" className="cap-tab is-active" data-panel="cap-accounts" role="tab">
<div className="cap-tab__icon"><iconify-icon icon="lucide:badge-check"></iconify-icon></div>
<span className="cap-tab__text">Agency Accounts</span>
</div>
<div aria-selected="false" className="cap-tab" data-panel="cap-api" role="tab">
<div className="cap-tab__icon"><iconify-icon icon="lucide:terminal"></iconify-icon></div>
<span className="cap-tab__text">API Automation</span>
</div>
<div aria-selected="false" className="cap-tab" data-panel="cap-billing" role="tab">
<div className="cap-tab__icon"><iconify-icon icon="lucide:credit-card"></iconify-icon></div>
<span className="cap-tab__text">Unified Billing</span>
</div>
<div aria-selected="false" className="cap-tab" data-panel="cap-proxies" role="tab">
<div className="cap-tab__icon"><iconify-icon icon="lucide:globe"></iconify-icon></div>
<span className="cap-tab__text">Global Proxies</span>
</div>
<div aria-selected="false" className="cap-tab" data-panel="cap-security" role="tab">
<div className="cap-tab__icon"><iconify-icon icon="lucide:shield-check"></iconify-icon></div>
<span className="cap-tab__text">Account Protection</span>
</div>
</div>
<div className="capabilities__panels">

<div className="cap-panel is-active" id="cap-accounts">
<h3 className="cap-panel__title">Premium Agency Accounts</h3>
<p className="cap-panel__desc">Rent high-trust, whitelisted Google Ads accounts built for high spend. Avoid random suspensions and scale without daily budget caps.</p>
<div className="cap-panel__visual">
<div className="cap-tiles">
<div className="cap-tile">
<div className="cap-tile__val">$4.2M</div>
<div className="cap-tile__lbl">Ad Spend</div>
</div>
<div className="cap-tile">
<div className="cap-tile__val">3.2x</div>
<div className="cap-tile__lbl">Avg ROAS</div>
</div>
<div className="cap-tile">
<div className="cap-tile__val">0</div>
<div className="cap-tile__lbl">Bans</div>
</div>
</div>
</div>
</div>

<div className="cap-panel" id="cap-api">
<h3 className="cap-panel__title">API Automation</h3>
<p className="cap-panel__desc">Generate accounts, allocate budgets, and pull reporting programmatically. Built for agencies managing hundreds of campaigns.</p>
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

<div className="cap-panel" id="cap-billing">
<h3 className="cap-panel__title">Unified Billing</h3>
<p className="cap-panel__desc">Top up your master wallet via wire or crypto, and allocate funds across unlimited sub-accounts instantly via our panel or API.</p>
<div className="cap-panel__visual">
<div className="cap-code"><span className="kw">request</span>:
  <span className="kw">action</span>: <span className="str">"provision_account"</span>
<span className="kw">platform</span>: <span className="str">"google_ads"</span>
<span className="kw">parameters</span>:
    <span className="kw">timezone</span>: <span className="str">"America/New_York"</span>
<span className="kw">currency</span>: <span className="str">"USD"</span>
<span className="kw">initial_budget</span>: <span className="num">5000</span>
<span className="kw">proxy_region</span>: <span className="str">"US"</span></div>
</div>
</div>

<div className="cap-panel" id="cap-proxies">
<h3 className="cap-panel__title">High-Trust Proxies</h3>
<p className="cap-panel__desc">Every account is bound to a dedicated residential proxy and anti-detect environment, ensuring maximum trust score with Google.</p>
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
<h3 className="cap-panel__title">Account Protection</h3>
<p className="cap-panel__desc">Proprietary warming processes, automated policy appeals, and instant account replacement if an unjustified suspension occurs.</p>
<div className="cap-panel__visual">
<div className="cap-shield">
<div className="cap-shield__row">
<iconify-icon icon="lucide:shield-check"></iconify-icon>
                Google Partner Status
                <span className="cap-shield__status">Active</span>
</div>
<div className="cap-shield__row">
<iconify-icon icon="lucide:credit-card"></iconify-icon>
                Vetted Billing Profiles
                <span className="cap-shield__status">Verified</span>
</div>
<div className="cap-shield__row">
<iconify-icon icon="lucide:gavel"></iconify-icon>
                Automated Appeals
                <span className="cap-shield__status">Enabled</span>
</div>
<div className="cap-shield__row">
<iconify-icon icon="lucide:key"></iconify-icon>
                Proxy Isolation
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
<div className="section-label">API Automation</div>
<h2 className="section-title">Provision accounts<br/><span className="text-gradient">in seconds</span></h2>
<p className="section-desc">One API request to generate a fully warmed, high-trust Google Ads account ready for immediate spend.</p>
</div>
<div className="platform__terminal reveal-scale">
<div className="platform__terminal-bar">
<div className="platform__terminal-dots"><span></span><span></span><span></span></div>
<div className="platform__terminal-title">lightning — create</div>
<div style={{width: '36px'}}></div>
</div>
<div className="platform__terminal-body">
<div><span className="t-prompt">$</span> <span className="t-cmd">lightning create-account</span> <span className="t-flag">--platform</span> google <span className="t-flag">--budget</span> 10000</div>
<div> </div>
<div className="t-line"><span><span className="t-dim">  ●</span> Validating agency allocation</span><span className="t-time"><span className="t-success">✓</span> 0.3s</span></div>
<div className="t-line"><span><span className="t-dim">  ●</span> Assigning high-trust proxy</span><span className="t-time"><span className="t-success">✓</span> 1.2s</span></div>
<div className="t-line"><span><span className="t-dim">  ●</span> Linking verified billing profile</span><span className="t-time"><span className="t-success">✓</span> 0.8s</span></div>
<div className="t-line"><span><span className="t-dim">  ●</span> Generating Google Ads CID</span><span className="t-time"><span className="t-success">✓</span> 0.1s</span></div>
<div> </div>
<div><span className="t-success">  ✓ Account created in 2.4s</span></div>
<div><span className="t-dim">  →</span> CID: <span className="t-url">842-192-4412</span></div>
<div><span className="t-dim">  →</span> Dashboard: <span className="t-url">https://app.lightningads.com/acc/842</span><span className="t-cursor"></span></div>
</div>
</div>
<div className="platform__features stagger-up">
<div className="platform__feat reveal-child" style={{textAlign: 'center', padding: '16px 8px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)'}}>
<iconify-icon icon="lucide:zap" style={{fontSize: '1.1rem', color: 'var(--blue-light)', marginBottom: '6px', display: 'block'}}></iconify-icon>
<div style={{fontSize: '0.72rem', fontWeight: '400', marginBottom: '2px'}}>Auto-provision</div>
<div style={{fontSize: '0.65rem', color: 'var(--text-3)'}}>Instant Access</div>
</div>
<div className="platform__feat reveal-child" style={{textAlign: 'center', padding: '16px 8px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)'}}>
<iconify-icon icon="lucide:banknote" style={{fontSize: '1.1rem', color: 'var(--blue-light)', marginBottom: '6px', display: 'block'}}></iconify-icon>
<div style={{fontSize: '0.72rem', fontWeight: '400', marginBottom: '2px'}}>Instant Top-ups</div>
<div style={{fontSize: '0.65rem', color: 'var(--text-3)'}}>Zero delays</div>
</div>
<div className="platform__feat reveal-child" style={{textAlign: 'center', padding: '16px 8px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)'}}>
<iconify-icon icon="lucide:activity" style={{fontSize: '1.1rem', color: 'var(--blue-light)', marginBottom: '6px', display: 'block'}}></iconify-icon>
<div style={{fontSize: '0.72rem', fontWeight: '400', marginBottom: '2px'}}>Live Tracking</div>
<div style={{fontSize: '0.65rem', color: 'var(--text-3)'}}>Real-time spend</div>
</div>
<div className="platform__feat reveal-child" style={{textAlign: 'center', padding: '16px 8px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)'}}>
<iconify-icon icon="lucide:rotate-ccw" style={{fontSize: '1.1rem', color: 'var(--blue-light)', marginBottom: '6px', display: 'block'}}></iconify-icon>
<div style={{fontSize: '0.72rem', fontWeight: '400', marginBottom: '2px'}}>One-click Appeals</div>
<div style={{fontSize: '0.65rem', color: 'var(--text-3)'}}>Automated</div>
</div>
</div>
</div>
</section>

<section className="pipeline">
<div className="container">
<div className="section-header section-header--center reveal">
<div className="section-label">How it works</div>
<h2 className="section-title">From zero to scale<br/><span className="text-gradient">in three steps</span></h2>
</div>
<div className="pipeline__flow stagger-up">
<div className="pipeline__line"></div>
<div className="pipeline__step reveal-child">
<div className="pipeline__tag">Step 1</div>
<div className="pipeline__node"><iconify-icon icon="lucide:wallet"></iconify-icon></div>
<h3 className="pipeline__step-title">Fund Wallet</h3>
<p className="pipeline__step-desc">Deposit funds securely via Crypto (USDT/USDC) or Bank Wire transfer.</p>
</div>
<div className="pipeline__step reveal-child">
<div className="pipeline__tag">Step 2</div>
<div className="pipeline__node"><iconify-icon icon="lucide:badge-plus"></iconify-icon></div>
<h3 className="pipeline__step-title">Generate Account</h3>
<p className="pipeline__step-desc">Create premium Google Ads profiles instantly through the panel or API.</p>
</div>
<div className="pipeline__step reveal-child">
<div className="pipeline__tag">Step 3</div>
<div className="pipeline__node"><iconify-icon icon="lucide:rocket"></iconify-icon></div>
<h3 className="pipeline__step-title">Launch &amp; Scale</h3>
<p className="pipeline__step-desc">Launch campaigns with high trust scores and no daily spending limits.</p>
</div>
</div>
</div>
</section>

<section className="numbers">
<div className="container">
<div className="section-header section-header--center reveal">
<div className="section-label">Performance</div>
<h2 className="section-title"><span className="text-gradient">Built for high volume</span></h2>
</div>
<div className="numbers__list stagger-up">
<div className="numbers__row reveal-child">
<div className="numbers__value text-gradient" data-count-suffix="%" data-count-to="100">0%</div>
<div className="numbers__meta">
<div className="numbers__label">Account Replacement</div>
<div className="numbers__detail">Guaranteed replacement for unjustified policy bans</div>
</div>
</div>
<div className="numbers__row reveal-child">
<div className="numbers__value text-gradient" data-count-prefix="&lt;" data-count-suffix="s" data-count-to="2">0s</div>
<div className="numbers__meta">
<div className="numbers__label">Provisioning Time</div>
<div className="numbers__detail">Instant account creation via our automated panel API</div>
</div>
</div>
<div className="numbers__row reveal-child">
<div className="numbers__value text-gradient" data-count-prefix="$" data-count-suffix="M+" data-count-to="50">0M+</div>
<div className="numbers__meta">
<div className="numbers__label">Monthly Spend Processed</div>
<div className="numbers__detail">Trusted by high-volume agencies and media buyers</div>
</div>
</div>
<div className="numbers__row reveal-child">
<div className="numbers__value text-gradient" data-count-comma="true" data-count-suffix="+" data-count-to="2000">0+</div>
<div className="numbers__meta">
<div className="numbers__label">Active Media Buyers</div>
<div className="numbers__detail">Scaling campaigns securely worldwide</div>
</div>
</div>
</div>
</div>
</section>

<section className="social-proof">
<div className="container-sm">
<div className="section-header section-header--center reveal">
<div className="section-label">Wall of love</div>
<h2 className="section-title">Trusted by media buyers <span className="text-gradient">scaling to 7-figures</span></h2>
</div>
</div>
<div className="social-proof__tracks">

<div className="social-proof__track-wrap">
<div className="social-proof__track social-proof__track--right">
<div className="love-card">
<p className="love-card__quote">"Lightning Ads completely solved our Google ban wave issues. The accounts are bulletproof and the API saves us hours."</p>
<div className="love-card__author">
<img alt="Marcus Chen" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">Marcus Chen</div><div className="love-card__role">Owner, E-com Brands</div></div>
</div>
</div>
<div className="love-card">
<p className="love-card__quote">"Being able to provision an aged agency account with a $10k budget in 2 seconds is an absolute game-changer."</p>
<div className="love-card__author">
<img alt="Priya Sharma" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">Priya Sharma</div><div className="love-card__role">Senior Media Buyer</div></div>
</div>
</div>
<div className="love-card">
<p className="love-card__quote">"Finally, a panel that lets me scale my dropshipping ads without random circumvention suspensions."</p>
<div className="love-card__author">
<img alt="Alex Rivera" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">Alex Rivera</div><div className="love-card__role">Performance Marketer</div></div>
</div>
</div>
<div className="love-card">
<p className="love-card__quote">"Their API integration saved my agency 20 hours a week in account setups and budget allocations."</p>
<div className="love-card__author">
<img alt="Elena Volkov" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">Elena Volkov</div><div className="love-card__role">Agency Director</div></div>
</div>
</div>

<div className="love-card">
<p className="love-card__quote">"Lightning Ads completely solved our Google ban wave issues. The accounts are bulletproof and the API saves us hours."</p>
<div className="love-card__author">
<img alt="Marcus Chen" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">Marcus Chen</div><div className="love-card__role">Owner, E-com Brands</div></div>
</div>
</div>
<div className="love-card">
<p className="love-card__quote">"Being able to provision an aged agency account with a $10k budget in 2 seconds is an absolute game-changer."</p>
<div className="love-card__author">
<img alt="Priya Sharma" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">Priya Sharma</div><div className="love-card__role">Senior Media Buyer</div></div>
</div>
</div>
<div className="love-card">
<p className="love-card__quote">"Finally, a panel that lets me scale my dropshipping ads without random circumvention suspensions."</p>
<div className="love-card__author">
<img alt="Alex Rivera" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">Alex Rivera</div><div className="love-card__role">Performance Marketer</div></div>
</div>
</div>
<div className="love-card">
<p className="love-card__quote">"Their API integration saved my agency 20 hours a week in account setups and budget allocations."</p>
<div className="love-card__author">
<img alt="Elena Volkov" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">Elena Volkov</div><div className="love-card__role">Agency Director</div></div>
</div>
</div>
</div>
</div>

<div className="social-proof__track-wrap">
<div className="social-proof__track social-proof__track--left">
<div className="love-card">
<p className="love-card__quote">"The only platform where 'no spend limits' actually means no spend limits. Scaled from $1k to $50k/day effortlessly."</p>
<div className="love-card__author">
<img alt="James Okafor" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">James Okafor</div><div className="love-card__role">Affiliate Marketer</div></div>
</div>
</div>
<div className="love-card">
<p className="love-card__quote">"Crypto top-ups hit my account instantly. I don't have to wait around for wire transfers to clear over the weekend."</p>
<div className="love-card__author">
<img alt="Sarah Kim" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">Sarah Kim</div><div className="love-card__role">Dropshipping CEO</div></div>
</div>
</div>
<div className="love-card">
<p className="love-card__quote">"We migrated 40 client accounts to their white-label panel. The client dashboard experience is 10/10."</p>
<div className="love-card__author">
<img alt="David Park" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">David Park</div><div className="love-card__role">Ad Agency Founder</div></div>
</div>
</div>
<div className="love-card">
<p className="love-card__quote">"Having auto-appeals built into the panel ensures our campaigns never stop running. Truly essential service."</p>
<div className="love-card__author">
<img alt="Tom Wright" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">Tom Wright</div><div className="love-card__role">Head of Acquisition</div></div>
</div>
</div>

<div className="love-card">
<p className="love-card__quote">"The only platform where 'no spend limits' actually means no spend limits. Scaled from $1k to $50k/day effortlessly."</p>
<div className="love-card__author">
<img alt="James Okafor" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">James Okafor</div><div className="love-card__role">Affiliate Marketer</div></div>
</div>
</div>
<div className="love-card">
<p className="love-card__quote">"Crypto top-ups hit my account instantly. I don't have to wait around for wire transfers to clear over the weekend."</p>
<div className="love-card__author">
<img alt="Sarah Kim" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">Sarah Kim</div><div className="love-card__role">Dropshipping CEO</div></div>
</div>
</div>
<div className="love-card">
<p className="love-card__quote">"We migrated 40 client accounts to their white-label panel. The client dashboard experience is 10/10."</p>
<div className="love-card__author">
<img alt="David Park" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">David Park</div><div className="love-card__role">Ad Agency Founder</div></div>
</div>
</div>
<div className="love-card">
<p className="love-card__quote">"Having auto-appeals built into the panel ensures our campaigns never stop running. Truly essential service."</p>
<div className="love-card__author">
<img alt="Tom Wright" className="love-card__avatar" loading="lazy" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&amp;h=64&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div><div className="love-card__name">Tom Wright</div><div className="love-card__role">Head of Acquisition</div></div>
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
<h2 className="section-title">Transparent fees, <span className="text-gradient">no surprises</span></h2>
<p className="section-desc">Rent premium agency accounts with flat percentage fees on your ad spend.</p>
</div>
<div className="pricing__duo stagger-up">
<div className="pricing-card reveal-child">
<div className="pricing-card__name">Pay As You Go</div>
<div className="pricing-card__desc">For solo media buyers and small teams.</div>
<div className="pricing-card__price">
<span className="pricing-card__amount">5%</span>
<span className="pricing-card__period">/ fee on spend</span>
</div>
<div className="pricing-card__features">
<div className="pricing-card__feature"><iconify-icon icon="lucide:check"></iconify-icon> Up to 5 Google Ads Accounts</div>
<div className="pricing-card__feature"><iconify-icon icon="lucide:check"></iconify-icon> Instant Crypto Top-ups</div>
<div className="pricing-card__feature"><iconify-icon icon="lucide:check"></iconify-icon> Basic Panel Access</div>
<div className="pricing-card__feature"><iconify-icon icon="lucide:check"></iconify-icon> High-Trust Proxy Included</div>
<div className="pricing-card__feature"><iconify-icon icon="lucide:check"></iconify-icon> Free Account Replacement</div>
</div>
<a className="btn btn-ghost" href="#">Create Free Account</a>
</div>
<div className="pricing-card pricing-card--glow reveal-child">
<div className="pricing-card__badge">Most popular</div>
<div className="pricing-card__name">Agency Tier</div>
<div className="pricing-card__desc">For high-volume teams and advertising agencies.</div>
<div className="pricing-card__price">
<span className="pricing-card__amount">$499</span>
<span className="pricing-card__period">/ mo + 2% fee</span>
</div>
<div className="pricing-card__features">
<div className="pricing-card__feature"><iconify-icon icon="lucide:check"></iconify-icon> Unlimited Agency Accounts</div>
<div className="pricing-card__feature"><iconify-icon icon="lucide:check"></iconify-icon> Full API Access &amp; Automation</div>
<div className="pricing-card__feature"><iconify-icon icon="lucide:check"></iconify-icon> Priority Automated Appeals</div>
<div className="pricing-card__feature"><iconify-icon icon="lucide:check"></iconify-icon> Unlimited Team Members</div>
<div className="pricing-card__feature"><iconify-icon icon="lucide:check"></iconify-icon> Whitelabel Client Dashboards</div>
<div className="pricing-card__feature"><iconify-icon icon="lucide:check"></iconify-icon> Dedicated Account Manager</div>
</div>
<a className="btn btn-primary" href="#">Start Agency Trial</a>
</div>
</div>
<div className="pricing__enterprise reveal">
<div className="pricing__enterprise-info">
<div className="pricing__enterprise-icon"><iconify-icon icon="lucide:server"></iconify-icon></div>
<div className="pricing__enterprise-text">
<div className="pricing__enterprise-name">Enterprise Panel License</div>
<div className="pricing__enterprise-desc">Want to start your own account rental business? License our entire API panel and infrastructure.</div>
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
<h2 className="cta-section__title">Ready to scale your<br/><span className="text-gradient">ad spend instantly?</span></h2>
<p className="cta-section__desc">Join thousands of media buyers running profitable campaigns on our premium agency accounts.</p>
<div className="cta-terminal">
<div className="cta-terminal__bar"><span></span><span></span><span></span></div>
<div className="cta-terminal__body">
<span><span className="t-prompt">$</span> npm install @lightningads/sdk<span className="t-cursor"></span></span>
<button aria-label="Copy command" className="cta-terminal__copy">
<iconify-icon icon="lucide:copy" width="14"></iconify-icon>
</button>
</div>
</div>
<div className="cta-section__actions">
<a className="btn btn-primary" href="#">
          Open Agency Panel
          <iconify-icon icon="lucide:arrow-right"></iconify-icon>
</a>
<a className="btn btn-ghost" href="#">Talk to Support</a>
</div>
<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginTop: '32px'}}>
<span style={{display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.72rem', color: 'var(--text-3)'}}><iconify-icon icon="lucide:zap" style={{color: 'var(--text-3)'}}></iconify-icon> Instant provisioning</span>
<span style={{display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.72rem', color: 'var(--text-3)'}}><iconify-icon icon="lucide:clock" style={{color: 'var(--text-3)'}}></iconify-icon> Zero spending limits</span>
<span style={{display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.72rem', color: 'var(--text-3)'}}><iconify-icon icon="lucide:shield-check" style={{color: 'var(--text-3)'}}></iconify-icon> Free account replacement</span>
</div>
</div>
</div>
</section>
</main>

<footer className="footer">
<div className="container">
<div className="footer__grid">
<div className="footer__brand">
<div className="footer__brand-logo nav__logo">Lightning Ads</div>
<p className="footer__brand-desc">The ultimate API-driven panel for renting premium Google Ads agency accounts.</p>
</div>
<div className="footer__col">
<div className="footer__col-title">Product</div>
<ul>
<li><a href="#">Agency Panel</a></li>
<li><a href="#">API Reference</a></li>
<li><a href="#">Pricing</a></li>
<li><a href="#">Proxies</a></li>
</ul>
</div>
<div className="footer__col">
<div className="footer__col-title">Resources</div>
<ul>
<li><a href="#">Documentation</a></li>
<li><a href="#">Ban Appeal Guide</a></li>
<li><a href="#">Media Buying Blog</a></li>
<li><a href="#">Discord Community</a></li>
</ul>
</div>
<div className="footer__col">
<div className="footer__col-title">Company</div>
<ul>
<li><a href="#">About Us</a></li>
<li><a href="#">Contact Support</a></li>
<li><a href="#">Privacy Policy</a></li>
<li><a href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="footer__bottom">
<span>© <span id="footerYear"></span> Lightning Ads. All rights reserved.</span>
<div className="footer__social">
<a aria-label="Twitter" href="#"><iconify-icon icon="lucide:twitter"></iconify-icon></a>
<a aria-label="Discord" href="#"><iconify-icon icon="lucide:message-circle"></iconify-icon></a>
<a aria-label="Telegram" href="#"><iconify-icon icon="lucide:send"></iconify-icon></a>
</div>
</div>
</div>
</footer>





    </>
  );
}
