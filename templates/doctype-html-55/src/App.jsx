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



document.querySelectorAll('.faq-q').forEach(q=>{
  q.addEventListener('click',()=>{
    const item=q.parentElement;
    const isOpen=item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
    if(!isOpen) item.classList.add('open');
  });
});
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)';}});
},{threshold:0.1,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.pain-card,.result-card,.cs-featured,.cs-small,.feature-card,.segment-card,.testimonial-card,.simple-step').forEach(el=>{
  el.style.opacity='0';el.style.transform='translateY(24px)';
  el.style.transition='opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
  obs.observe(el);
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
      

<nav className="nav">
<div className="nav-inner">
<div className="nav-logo"><span className="dot"></span> Map Pack Attack™</div>
<button className="nav-cta" onclick="document.getElementById('book-call').scrollIntoView({behavior:'smooth'})">Book Free Strategy Call →</button>
</div>
</nav>

<section className="hero">
<div className="container hero-content">
<div className="section-label">Rank Top 3 In 90 Days</div>
<h1>We Get Your Business Ranked In Google’s <span className="highlight">Top 3 Map Pack</span> In 90 Days</h1>
<p className="hero-sub">Discover the “Map Pack Attack™” system to flood your business with local traffic, inbound calls, and qualified leads.</p>
<div className="hero-value">
<iconify-icon icon="solar:gift-linear"></iconify-icon>
<span>Claim your free <strong>Strategy Session</strong> (Valued at $1,500)</span>
</div>
<div>
<button className="cta-btn" onclick="document.getElementById('book-call').scrollIntoView({behavior:'smooth'})">
        Book My Free Strategy Session
        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="hero-trust-row">
<p>Trusted by local businesses featured in</p>
<div className="logo-strip">
<img alt="Forbes" src="https://storage.googleapis.com/msgsndr/Tp2GUtId23hBhunAlIrY/media/68c8dc3f9c016a5c9826aca0.png"/>
<img alt="Inc" src="https://storage.googleapis.com/msgsndr/Tp2GUtId23hBhunAlIrY/media/68c8dc3e9c9a6d4cfc9e4c47.png"/>
<img alt="Entrepreneur" src="https://storage.googleapis.com/msgsndr/Tp2GUtId23hBhunAlIrY/media/68c8dc3c440460c1c48f5c8d.png"/>
<img alt="Yahoo" src="https://storage.googleapis.com/msgsndr/Tp2GUtId23hBhunAlIrY/media/68c8dc3a44046036938f5c65.png"/>
<img alt="Business Insider" src="https://storage.googleapis.com/msgsndr/Tp2GUtId23hBhunAlIrY/media/68c8dc38440460ff4c8f5c43.png"/>
</div>
</div>
</div>
</section>

<section className="section-gray">
<div className="container">
<div className="text-center">
<h2 className="section-title">Proof, Not Promises</h2>
<p className="section-subtitle mx-auto">See the real numbers we're generating for local businesses right now.</p>
</div>
<div className="results-grid">
<div className="result-card">
<div className="metric">327%</div>
<div className="metric-label">Calls Increase</div>
<div className="metric-desc">Plumbing company. First 60 days. From 18 to 77 calls/mo.</div>
</div>
<div className="result-card">
<div className="metric">#1</div>
<div className="metric-label">Map Pack Rank</div>
<div className="metric-desc">Personal injury attorney. 47 days. From page 3 to position 1.</div>
</div>
<div className="result-card">
<div className="metric">$214K</div>
<div className="metric-label">New Revenue</div>
<div className="metric-desc">HVAC company. 90 days. Added $214k in trackable revenue.</div>
</div>
<div className="result-card">
<div className="metric">4.2x</div>
<div className="metric-label">ROI Average</div>
<div className="metric-desc">Average return of $4.20 for every $1 invested across clients.</div>
</div>
</div>
</div>
</section>

<section className="section-white">
<div className="container">
<div className="text-center">
<h2 className="section-title">Why Your <span className="highlight">Local Marketing</span> Isn’t Working</h2>
<p className="section-subtitle mx-auto">Most business owners are making these same 4 mistakes.</p>
</div>
<div className="pain-grid">
<div className="pain-card">
<div className="pain-icon"><iconify-icon icon="solar:danger-circle-linear"></iconify-icon></div>
<h4>Invisible on Maps</h4>
<p>Your competitor is ranking #1. You’re buried on page 2. Every day, customers search for your service and call them.</p>
</div>
<div className="pain-card">
<div className="pain-icon"><iconify-icon icon="solar:graph-down-linear"></iconify-icon></div>
<h4>Wasted Agency Fees</h4>
<p>You paid for “awareness” and fancy dashboards, but the phone didn't ring. You need leads, not impressions.</p>
</div>
<div className="pain-card">
<div className="pain-icon"><iconify-icon icon="solar:user-cross-linear"></iconify-icon></div>
<h4>Neglected Profile</h4>
<p>Inconsistent info, few reviews, and no posts. Google sees a ghost town and rewards your active competitors instead.</p>
</div>
<div className="pain-card">
<div className="pain-icon"><iconify-icon icon="solar:wad-of-money-linear"></iconify-icon></div>
<h4>Gambling on Ads</h4>
<p>You rely on Paid Ads, but costs are rising. The second you stop paying, the leads stop instantly.</p>
</div>
</div>
</div>
</section>

<section className="section-gray">
<div className="container">
<div className="text-center">
<h2 className="section-title">The <span className="highlight">Map Pack Attack™</span> Strategy</h2>
</div>
<div className="story-content">
<div className="imagine-box">
<h4>The key isn't "SEO". It's Relevance.</h4>
<p style={{fontSize: '16px', marginBottom: '16px'}}>We discovered that ranking in the Map Pack requires a specific attack on 3 specific signals: <strong>Relevance, Distance, and Prominence.</strong></p>
<ul className="imagine-list">
<li><iconify-icon icon="solar:check-circle-linear"></iconify-icon> A clear plan to add 30–50+ inbound leads per month</li>
<li><iconify-icon icon="solar:check-circle-linear"></iconify-icon> A team of experts executing manually for you</li>
<li><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Reaching top 3 positions 3x faster than standard SEO</li>
</ul>
</div>
<div className="text-center">
<button className="cta-btn" onclick="document.getElementById('book-call').scrollIntoView({behavior:'smooth'})">See How It Works <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
</div>
</section>

<section className="section-white">
<div className="container">
<div className="text-center">
<h2 className="section-title">Recent <span className="highlight">Client Wins</span></h2>
<p className="section-subtitle mx-auto">Real businesses dominating their local markets.</p>
</div>
<div className="cs-featured-grid">
<div className="cs-featured">
<div className="cs-graphic"><img alt="Case Study 1" src="https://storage.googleapis.com/msgsndr/ybbZgmGJTpNCdjLzIzKR/media/69912515c08665a6b0ff16f8.svg" style={{opacity: '0.9'}}/></div>
<div className="cs-body">
<div className="cs-header">Jewelmasters</div>
<div className="cs-meta">Fine Jewelry • 4 Months</div>
<div className="cs-metrics">
<div className="cs-metric"><span className="cs-label">Website Clicks</span><span className="cs-val">1,033</span></div>
<div className="cs-metric"><span className="cs-label">Phone Calls</span><span className="cs-val">566</span></div>
</div>
</div>
</div>
<div className="cs-featured">
<div className="cs-graphic"><img alt="Case Study 2" src="https://storage.googleapis.com/msgsndr/ybbZgmGJTpNCdjLzIzKR/media/69912515899b886aa0b3cf6a.svg" style={{opacity: '0.9'}}/></div>
<div className="cs-body">
<div className="cs-header">Velocity HDO</div>
<div className="cs-meta">Fitness Center • 26 Days</div>
<div className="cs-metrics">
<div className="cs-metric"><span className="cs-label">Top 3 Rankings</span><span className="cs-val">+213%</span></div>
<div className="cs-metric"><span className="cs-label">Visibility Growth</span><span className="cs-val">+24%</span></div>
</div>
</div>
</div>
</div>
<div className="cs-small-grid">
<div className="cs-small">
<div className="cs-header">Custom Truck Concepts</div>
<div className="cs-meta">Auto Dealer</div>
<div className="cs-metric"><span className="cs-label">Website Clicks</span><span className="cs-val">1,275</span></div>
<div className="cs-metric"><span className="cs-label">Phone Calls</span><span className="cs-val">234</span></div>
</div>
<div className="cs-small">
<div className="cs-header">Heldenfels</div>
<div className="cs-meta">Construction</div>
<div className="cs-metric"><span className="cs-label">Total Conversions</span><span className="cs-val">558</span></div>
<div className="cs-metric"><span className="cs-label">Click Increase</span><span className="cs-val">219%</span></div>
</div>
<div className="cs-small">
<div className="cs-header">Bend Soap</div>
<div className="cs-meta">E-commerce</div>
<div className="cs-metric"><span className="cs-label">New Top 3 Rankings</span><span className="cs-val">129</span></div>
<div className="cs-metric"><span className="cs-label">Traffic Increase</span><span className="cs-val">10%</span></div>
</div>
</div>
</div>
</section>

<section className="section-gray">
<div className="container">
<div className="text-center">
<h2 className="section-title">A Full-Service <span className="highlight">Ranking System</span></h2>
<p className="section-subtitle mx-auto">We handle everything. You just answer the phone.</p>
</div>
<div className="features-grid">
<div className="feature-card">
<div className="feature-icon"><iconify-icon icon="solar:shop-linear"></iconify-icon></div>
<h4>GBP Optimization</h4>
<p>Full audit and rebuild of every field, category, and photo.</p>
</div>
<div className="feature-card">
<div className="feature-icon"><iconify-icon icon="solar:magnifer-linear"></iconify-icon></div>
<h4>Keyword Strategy</h4>
<p>Targeting the exact terms your customers are typing.</p>
</div>
<div className="feature-card">
<div className="feature-icon"><iconify-icon icon="solar:checklist-minimalistic-linear"></iconify-icon></div>
<h4>Citation Cleanup</h4>
<p>Correcting your business data across 80+ directories.</p>
</div>
<div className="feature-card">
<div className="feature-icon"><iconify-icon icon="solar:star-linear"></iconify-icon></div>
<h4>Review Gen</h4>
<p>Automated systems to turn customers into 5-star reviews.</p>
</div>
<div className="feature-card">
<div className="feature-icon"><iconify-icon icon="solar:pen-new-square-linear"></iconify-icon></div>
<h4>Weekly Posts</h4>
<p>Fresh content published to your profile every week.</p>
</div>
<div className="feature-card">
<div className="feature-icon"><iconify-icon icon="solar:chart-square-linear"></iconify-icon></div>
<h4>Reporting</h4>
<p>Transparent reports on rankings and call volume.</p>
</div>
</div>
</div>
</section>

<section className="section-white">
<div className="container">
<div className="text-center">
<h2 className="section-title">Who We Help</h2>
</div>
<div className="segment-grid" style={{marginTop: '48px'}}>
<div className="segment-card">
<h3>Home Services</h3>
<p className="segment-desc">Plumbers, HVAC, Roofers, Landscapers.</p>
<ul>
<li><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Get booked out weeks in advance</li>
<li><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Stop depending on paid ads</li>
</ul>
</div>
<div className="segment-card">
<h3>Professional Services</h3>
<p className="segment-desc">Lawyers, Dentists, Chiros, Accountants.</p>
<ul>
<li><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Attract higher-value clients</li>
<li><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Build a trusted 5-star reputation</li>
</ul>
</div>
</div>
</div>
</section>

<section className="section-gray">
<div className="container">
<div className="text-center">
<h2 className="section-title">Client <span className="highlight">Feedback</span></h2>
</div>
<div className="testimonial-grid" style={{marginTop: '48px'}}>
<div className="testimonial-card">
<div className="t-stars"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<p>“Since Fuel Results took over, we are getting leads almost every day. I recommend them to any business that wants a website that brings in new customers!”</p>
<div>
<div className="t-author">Tona Keeton</div>
<div className="t-biz">Magnolia Insulation</div>
</div>
</div>
<div className="testimonial-card">
<div className="t-stars"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<p>“Within 7 days of launching, we started getting consistent, qualified leads daily. The landing page achieved a 55% opt-in rate.”</p>
<div>
<div className="t-author">Josh Hammons</div>
<div className="t-biz">Southern Surgery Bariatrics</div>
</div>
</div>
</div>
</div>
</section>

<section className="section-white">
<div className="container">
<div className="text-center">
<h2 className="section-title">Get Started In <span className="highlight">3 Steps</span></h2>
</div>
<div className="simple-steps" style={{marginTop: '56px'}}>
<div className="simple-step">
<div className="step-badge">1</div>
<h4>Book Your Call</h4>
<p>Pick a time for your free strategy session.</p>
</div>
<div className="simple-step">
<div className="step-badge">2</div>
<h4>Get Your Plan</h4>
<p>We'll audit your profile and show you the roadmap.</p>
</div>
<div className="simple-step">
<div className="step-badge">3</div>
<h4>We Execute</h4>
<p>Sit back while we build your rankings and leads.</p>
</div>
</div>
</div>
</section>

<section className="section-gray">
<div className="container">
<div className="guarantee-box">
<div className="shield"><iconify-icon icon="solar:shield-check-linear"></iconify-icon></div>
<h3>Top 3 Rankings In 90 Days Or <span className="highlight">You Don’t Pay</span></h3>
<p>If we don’t get your business ranked in the top 3 Map Pack positions for your target keywords within 90 days, we’ll refund every penny. No questions asked.</p>
</div>
</div>
</section>

<section className="section-white" id="book-call">
<div className="container">
<div className="text-center">
<span className="section-label">Limited Availability</span>
<h2 className="section-title">Claim Your Free <span className="highlight">Strategy Session</span></h2>
<p className="section-subtitle mx-auto">Valued at $1,500. Yours free today.</p>
</div>
<div className="offer-stack">
<div className="offer-item">
<div className="offer-check"><iconify-icon icon="solar:check-circle-bold"></iconify-icon></div>
<div className="offer-text"><strong>Map Pack Audit</strong> — See exactly where you rank today.</div>
</div>
<div className="offer-item">
<div className="offer-check"><iconify-icon icon="solar:check-circle-bold"></iconify-icon></div>
<div className="offer-text"><strong>Competitor Analysis</strong> — Spy on your top competitors.</div>
</div>
<div className="offer-item">
<div className="offer-check"><iconify-icon icon="solar:check-circle-bold"></iconify-icon></div>
<div className="offer-text"><strong>90-Day Roadmap</strong> — A step-by-step plan for your business.</div>
</div>
<div className="offer-item">
<div className="offer-check"><iconify-icon icon="solar:check-circle-bold"></iconify-icon></div>
<div className="offer-text"><strong>Revenue Projection</strong> — Calculate your potential ROI.</div>
</div>
<div className="text-center" style={{marginTop: '40px'}}>
<button className="cta-btn" style={{width: '100%', maxWidth: '400px'}}>Book Strategy Session Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
</div>
</section>

<section className="section-gray">
<div className="container">
<div className="text-center">
<h2 className="section-title">FAQ</h2>
</div>
<div className="faq-list" style={{marginTop: '40px'}}>
<div className="faq-item">
<div className="faq-q"><span>What makes this different from regular SEO?</span> <iconify-icon className="icon" icon="solar:add-circle-linear"></iconify-icon></div>
<div className="faq-a"><div className="faq-a-inner">Regular SEO focuses on your website. Map Pack Attack focuses specifically on the 3 signals Google Maps uses: Relevance, Distance, and Prominence. It's faster and more effective for local leads.</div></div>
</div>
<div className="faq-item">
<div className="faq-q"><span>How long does it take?</span> <iconify-icon className="icon" icon="solar:add-circle-linear"></iconify-icon></div>
<div className="faq-a"><div className="faq-a-inner">We typically see movement in 3-4 weeks and top 3 rankings within 60-90 days.</div></div>
</div>
<div className="faq-item">
<div className="faq-q"><span>Is there a contract?</span> <iconify-icon className="icon" icon="solar:add-circle-linear"></iconify-icon></div>
<div className="faq-a"><div className="faq-a-inner">No. We work month-to-month. We have to earn your business every 30 days.</div></div>
</div>
</div>
</div>
</section>

<section className="urgency-section">
<div className="container">
<h2 className="section-title" style={{marginBottom: '24px'}}>Stop Losing Customers To Competitors</h2>
<p className="section-subtitle mx-auto" style={{marginBottom: '32px'}}>Get the roadmap to dominate your local market today.</p>
<button className="cta-btn" onclick="document.getElementById('book-call').scrollIntoView({behavior:'smooth'})">Get My Free Audit <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</section>

<footer>
<div className="container">
<p>© 2026 Map Pack Attack™. All Rights Reserved.</p>
<div style={{marginTop: '12px'}}>
<a href="#">Privacy</a>
<a href="#">Terms</a>
<a href="#">Contact</a>
</div>
</div>
</footer>


    </>
  );
}
