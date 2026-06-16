import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



// CURSOR
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
document.querySelectorAll('a,button,.bike-card,.deal-card,.tech-card').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('expand'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('expand'));
});

// NAV SCROLL
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// REVEAL ON SCROLL
const observer = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), e.target.dataset.delay || 0);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.dataset.delay = (i % 4) * 100;
  observer.observe(el);
});

// COUNTER ANIMATION
function animateCount(el, target, duration = 1500) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start = Math.min(start + step, target);
    el.textContent = Math.floor(start);
    if (start >= target) clearInterval(timer);
  }, 16);
}

// ACCORDION
function toggleAcc(btn) {
  const item = btn.closest('.acc-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.acc-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// FILTER TABS
function filterTab(el, cat) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

// TIMELINE
const timelineData = [0, 1, 2, 3, 4, 5];
function setTimeline(node, index) {
  document.querySelectorAll('.t-node').forEach(n => n.classList.remove('active'));
  node.classList.add('active');
  document.querySelectorAll('.timeline-detail').forEach(d => {
    d.classList.remove('active');
    if (parseInt(d.dataset.index) === index) d.classList.add('active');
  });
}

// TECH CARDS
function setTech(card) {
  document.querySelectorAll('.tech-card').forEach(c => c.classList.remove('active'));
  card.classList.add('active');
}

// PARTICLES
const particleContainer = document.getElementById('particles');
for (let i = 0; i < 20; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.cssText = `
    left: ${Math.random() * 100}%;
    animation-duration: ${8 + Math.random() * 12}s;
    animation-delay: ${-Math.random() * 10}s;
    opacity: ${0.1 + Math.random() * 0.3};
    width: ${1 + Math.random() * 2}px;
    height: ${1 + Math.random() * 2}px;
  `;
  particleContainer.appendChild(p);
}

// COLOR DOTS
document.querySelectorAll('.color-dot').forEach(dot => {
  dot.addEventListener('click', function() {
    this.closest('.color-dots').querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
    this.classList.add('active');
  });
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="cursor" id="cursor"></div>

<nav id="navbar">
<a className="nav-logo" href="#">
<div className="logo-s"></div>
<span className="logo-text">SUZUKI</span>
</a>
<ul className="nav-links">
<li><a href="#bikes">Bikes</a></li>
<li><a href="#service">Service</a></li>
<li><a href="#deals">Offers</a></li>
<li><a href="#motogp">MotoGP</a></li>
<li><a href="#">Dealer Locator</a></li>
<li><a href="#news">News</a></li>
</ul>
<a className="nav-cta" href="#final-cta">Explore Bikes</a>
</nav>

<section id="hero">
<div className="hero-bg"></div>
<div className="hero-overlay"></div>
<div className="hero-content">
<div className="section-label hero-label">SUZUKI GIXXER 250 — MotoGP EDITION · 2026</div>
<h1 className="hero-h1">
<span className="line1">THIS ISN'T JUST A BIKE.</span>
<span className="line2">THIS IS WHO YOU ARE.</span>
</h1>
<p className="hero-sub">250cc · Fuel Injected · Oil Cooled · MotoGP-Inspired</p>
<div className="hero-ctas">
<a className="btn-primary" href="#bikes">Explore Gixxer 250 →</a>
<a className="btn-ghost" href="#engine">
<span className="play-icon"></span>
        Watch the Film
      </a>
</div>
</div>
<div className="hero-stats">
<div className="hero-stat">
<div className="hero-stat-num">250<span>cc</span></div>
<div className="hero-stat-label">Engine Displacement</div>
</div>
<div className="hero-stat">
<div className="hero-stat-num">ABS</div>
<div className="hero-stat-label">Dual-Channel</div>
</div>
<div className="hero-stat">
<div className="hero-stat-num">104<span>yrs</span></div>
<div className="hero-stat-label">Japanese Engineering</div>
</div>
<div className="hero-stat">
<div className="hero-stat-num">FI</div>
<div className="hero-stat-label">Fuel Injection</div>
</div>
</div>
<div className="scroll-hint">
<div className="scroll-line"></div>
<span>Scroll</span>
</div>
<div className="hero-ticker">
<div className="ticker-track" id="tickerTrack">
<span className="ticker-item">250CC</span><span className="ticker-dot">●</span>
<span className="ticker-item">FUEL INJECTION</span><span className="ticker-dot">●</span>
<span className="ticker-item">DUAL-CHANNEL ABS</span><span className="ticker-dot">●</span>
<span className="ticker-item">SUZUKI OIL COOLING SYSTEM</span><span className="ticker-dot">●</span>
<span className="ticker-item">6-SPEED GEARBOX</span><span className="ticker-dot">●</span>
<span className="ticker-item">MotoGP DNA</span><span className="ticker-dot">●</span>
<span className="ticker-item">JOAN MIR — 2020 WORLD CHAMPION</span><span className="ticker-dot">●</span>
<span className="ticker-item">RANCON AUTHORIZED · HOTLINE 16638</span><span className="ticker-dot">●</span>
<span className="ticker-item">250CC</span><span className="ticker-dot">●</span>
<span className="ticker-item">FUEL INJECTION</span><span className="ticker-dot">●</span>
<span className="ticker-item">DUAL-CHANNEL ABS</span><span className="ticker-dot">●</span>
<span className="ticker-item">SUZUKI OIL COOLING SYSTEM</span><span className="ticker-dot">●</span>
<span className="ticker-item">6-SPEED GEARBOX</span><span className="ticker-dot">●</span>
<span className="ticker-item">MotoGP DNA</span><span className="ticker-dot">●</span>
<span className="ticker-item">JOAN MIR — 2020 WORLD CHAMPION</span><span className="ticker-dot">●</span>
<span className="ticker-item">RANCON AUTHORIZED · HOTLINE 16638</span><span className="ticker-dot">●</span>
</div>
</div>
</section>

<section id="difference">
<div className="diff-grid">
<div className="diff-left reveal">
<div className="section-label">THE SUZUKI DIFFERENCE</div>
<h2 className="section-h2">Not Every Bike Has <span className="red">104 Years</span> Behind It.</h2>
<p className="section-sub">On 15th March 1920, Michio Suzuki founded a company in Hamamatsu, Japan. One hundred and four years later, that same obsession with precision powers every Suzuki on Bangladesh's roads.</p>
<div className="diff-rider"></div>
</div>
<div className="diff-right">
<div className="pillar-card reveal">
<div className="pillar-num">01 / 04</div>
<div className="pillar-title">MotoGP Racing DNA</div>
<div className="pillar-sub">Proven at 300km/h. Engineered for your roads.</div>
<p className="pillar-body">In 2020, Joan Mir and Team Suzuki Ecstar claimed the MotoGP World Championship. Every aerodynamic insight, every fuel mapping advancement, every millisecond of chassis refinement from that campaign lives inside the Gixxer 250 you ride today.</p>
</div>
<div className="pillar-card reveal">
<div className="pillar-num">02 / 04</div>
<div className="pillar-title">Japanese Precision Engineering</div>
<div className="pillar-sub">Hamamatsu-born. Bangladesh-proven.</div>
<p className="pillar-body">Suzuki's engineers treat zero-defect as a minimum standard, not a goal. The Gixxer 250's SOCS oil cooling system, precision-mapped FI, and diamond-frame geometry are all products of this uncompromising philosophy.</p>
</div>
<div className="pillar-card reveal">
<div className="pillar-num">03 / 04</div>
<div className="pillar-title">Technology That Sets the Standard</div>
<div className="pillar-sub">Dual-Channel ABS. FI. SOCS. Standard.</div>
<p className="pillar-body">While others treat these as premium upgrades, Suzuki includes dual-channel ABS, fuel injection, and the Suzuki Oil Cooling System as standard. Because serious riders shouldn't pay extra for what every bike should have.</p>
</div>
<div className="pillar-card reveal">
<div className="pillar-num">04 / 04</div>
<div className="pillar-title">Rancon Motor Bikes — Bangladesh's Partner</div>
<div className="pillar-sub">Local commitment. Global standards.</div>
<p className="pillar-body">Distributed exclusively by Rancon Motor Bikes Ltd., Suzuki Bangladesh's network of authorized dealers, FI-certified service centers, and genuine parts availability ensures your Suzuki ownership experience matches the machine itself.</p>
</div>
</div>
</div>
</section>

<section id="bikes">
<div className="container">
<div className="d-flex-between">
<div className="reveal">
<div className="section-label">THE SUZUKI RANGE</div>
<h2 className="section-h2">Every Rider Has a Machine.<br/><span className="red">Find Yours.</span></h2>
</div>
<a className="btn-ghost reveal" href="#" style={{height: 'fit-content'}}>View All Bikes →</a>
</div>
<div className="filter-tabs reveal">
<button className="tab active" onclick="filterTab(this,'all')">All Bikes</button>
<button className="tab" onclick="filterTab(this,'sports')">Sports</button>
<button className="tab" onclick="filterTab(this,'performance')">Performance Sports</button>
<button className="tab" onclick="filterTab(this,'commuter')">Commuter</button>
<button className="tab" onclick="filterTab(this,'scooter')">Scooter</button>
</div>

<div className="hero-bike-card reveal">
<div className="hero-bike-img">
<img alt="Rider on Gixxer 250" src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=900&amp;q=80"/>
<div className="badge">NEW LAUNCH · MotoGP EDITION</div>
</div>
<div className="hero-bike-info">
<div className="bike-model">GIXXER 250</div>
<p className="bike-tagline">The naked truth about performance.</p>
<div className="spec-pills">
<span className="spec-pill">250cc</span>
<span className="spec-pill">SOCS</span>
<span className="spec-pill">FI</span>
<span className="spec-pill">Dual ABS</span>
<span className="spec-pill">6-Speed</span>
<span className="spec-pill">LED</span>
</div>
<div className="bike-price-label">Starting from</div>
<div className="bike-price">BDT 379,950</div>
<div className="color-dots">
<div className="color-dot active" style={{background: '#1a1a1a', borderColor: '#555'}} title="Matt Black"></div>
<div className="color-dot" style={{background: '#1A3278'}} title="Matt Blue"></div>
<div className="color-dot" style={{background: '#E2231A'}} title="MotoGP Edition"></div>
<div className="color-dot" style={{background: '#C8FF00'}} title="Nitro Neon"></div>
</div>
<a className="btn-primary" href="#">Explore the Gixxer 250 →</a>
</div>
</div>

<div className="bike-grid mt-80">
<div className="bike-card reveal">
<div className="bike-card-img">
<img alt="Gixxer SF 250" src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&amp;q=80"/>
<img alt="Rider on Gixxer SF 250" className="rider-img" src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&amp;q=80"/>
</div>
<div className="bike-card-body">
<div className="bike-card-name">GIXXER SF 250</div>
<div className="bike-card-price">From BDT 429,950 · 5 Colors</div>
<a className="bike-card-link" href="#">Explore Bike</a>
</div>
</div>
<div className="bike-card reveal">
<div className="bike-card-img">
<img alt="GSX-R150" src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&amp;q=80"/>
<img alt="Rider on GSX-R150" className="rider-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="bike-card-body">
<div className="bike-card-name">GSX-R150</div>
<div className="bike-card-price">From BDT 524,950 · 2 Colors</div>
<a className="bike-card-link" href="#">Explore Bike</a>
</div>
</div>
<div className="bike-card reveal">
<div className="bike-card-img">
<img alt="Gixxer SF" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&amp;q=80"/>
<img alt="Rider" className="rider-img" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&amp;q=80"/>
</div>
<div className="bike-card-body">
<div className="bike-card-name">GIXXER SF</div>
<div className="bike-card-price">From BDT 329,950 · 3 Colors</div>
<a className="bike-card-link" href="#">Explore Bike</a>
</div>
</div>
<div className="bike-card reveal">
<div className="bike-card-img">
<img alt="Gixxer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="Rider" className="rider-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="bike-card-body">
<div className="bike-card-name">GIXXER</div>
<div className="bike-card-price">From BDT 229,950 · 3 Colors</div>
<a className="bike-card-link" href="#">Explore Bike</a>
</div>
</div>
<div className="bike-card reveal">
<div className="bike-card-img">
<img alt="GSX 125" src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&amp;q=80"/>
<img alt="Rider" className="rider-img" src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&amp;q=80"/>
</div>
<div className="bike-card-body">
<div className="bike-card-name">GSX 125</div>
<div className="bike-card-price">From BDT 141,950 · 3 Colors</div>
<a className="bike-card-link" href="#">Explore Bike</a>
</div>
</div>
<div className="bike-card reveal">
<div className="bike-card-img">
<img alt="Hayate EP" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Rider" className="rider-img" src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&amp;q=80"/>
</div>
<div className="bike-card-body">
<div className="bike-card-name">HAYATE EP</div>
<div className="bike-card-price">From BDT 118,000 · 4 Colors</div>
<a className="bike-card-link" href="#">Explore Bike</a>
</div>
</div>
</div>
</div>
</section>

<section id="technology">
<div className="tech-bg"></div>
<div className="tech-scan"></div>
<div className="container">
<div className="reveal" style={{textAlign: 'center'}}>
<div className="section-label" style={{justifyContent: 'center'}}>SUZUKI TECHNOLOGY</div>
<h2 className="section-h2" style={{fontSize: 'clamp(48px,6vw,88px)'}}>The Science Behind<br/><span className="red">Every Second.</span></h2>
<p className="section-sub" style={{margin: '0 auto 0'}}>Every system on a Suzuki exists for one reason — to make you a better, faster, safer rider.</p>
</div>
<div className="tech-cards">
<div className="tech-card active reveal" onclick="setTech(this)">
<span className="tech-num">01</span>
<div className="tech-acronym">FI</div>
<div className="tech-name">Fuel Injection</div>
<p className="tech-desc">Delivers the precise air-fuel mix at every RPM. Instant throttle response. Cold starts to open highway — always on demand.</p>
</div>
<div className="tech-card reveal" onclick="setTech(this)">
<span className="tech-num">02</span>
<div className="tech-acronym">SOCS</div>
<div className="tech-name">Suzuki Oil Cooling System</div>
<p className="tech-desc">Superior thermal management under sustained high performance. Lighter than liquid cooling. More effective than air cooling.</p>
</div>
<div className="tech-card reveal" onclick="setTech(this)">
<span className="tech-num">03</span>
<div className="tech-acronym">ABS</div>
<div className="tech-name">Dual-Channel ABS</div>
<p className="tech-desc">Independent front and rear wheel braking management. Prevents lock-up. Keeps you in control when it matters most.</p>
</div>
<div className="tech-card reveal" onclick="setTech(this)">
<span className="tech-num">04</span>
<div className="tech-acronym">6-SPD</div>
<div className="tech-name">6-Speed Gearbox</div>
<p className="tech-desc">The right ratio for every situation — city traffic, open highway, or pushing hard through a corner. Smooth. Precise. Zero slop.</p>
</div>
<div className="tech-card reveal" onclick="setTech(this)">
<span className="tech-num">05</span>
<div className="tech-acronym">LED</div>
<div className="tech-name">Full LED + Digital Cluster</div>
<p className="tech-desc">Complete LED headlamp and tail lamp system. Fully digital instrument cluster. See everything. Be seen by everyone.</p>
</div>
</div>
</div>
</section>

<section id="engine">
<div className="container">
<div className="engine-grid">
<div className="engine-visual reveal">
<div className="engine-img-wrap">
<img alt="Suzuki Engine" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&amp;q=80"/>
<div className="engine-ring"></div>
</div>
<div className="engine-stats-grid">
<div className="e-stat"><div className="e-stat-val">250</div><div className="e-stat-key">CC</div></div>
<div className="e-stat"><div className="e-stat-val">FI</div><div className="e-stat-key">Injected</div></div>
<div className="e-stat"><div className="e-stat-val">SOCS</div><div className="e-stat-key">Oil Cooled</div></div>
<div className="e-stat"><div className="e-stat-val">6</div><div className="e-stat-key">Speed</div></div>
</div>
</div>
<div className="engine-right reveal">
<div className="section-label">THE HEART OF A SUZUKI</div>
<h2 className="section-h2">250cc.<br/><span className="red">Zero</span> Compromise.</h2>
<p className="engine-desc">The Gixxer 250's SOCS engine performs at the same level on lap one of your morning commute as it does on kilometre 200 of a weekend run. This engine doesn't just produce power. It produces confidence.</p>
<div className="engine-features">
<div className="engine-feature">
<div className="ef-icon">FI</div>
<div><div className="ef-title">Fuel Injection System</div><div className="ef-val">Optimal power delivery and fuel efficiency at every RPM</div></div>
</div>
<div className="engine-feature">
<div className="ef-icon">SOCS</div>
<div><div className="ef-title">Oil Cooling System</div><div className="ef-val">Consistent performance even under high stress conditions</div></div>
</div>
<div className="engine-feature">
<div className="ef-icon">ABS</div>
<div><div className="ef-title">Dual-Channel ABS</div><div className="ef-val">Safety and stability under all road conditions</div></div>
</div>
<div className="engine-feature">
<div className="ef-icon">LED</div>
<div><div className="ef-title">Full LED System</div><div className="ef-val">LED headlamps, tail lamps &amp; digital instrument cluster</div></div>
</div>
</div>
<a className="btn-primary" href="#" style={{marginTop: '40px'}}>Full Specifications →</a>
</div>
</div>
</div>
</section>

<section id="motogp">
<div className="motogp-bg"></div>
<div className="particles" id="particles"></div>
<div className="container">
<div className="motogp-head reveal">
<div className="section-label" style={{justifyContent: 'center'}}>MotoGP LEGACY</div>
<h2 className="section-h2">
        Champions
        <span className="line2" style={{display: 'block'}}>Built This Bike.</span>
</h2>
<div className="gold-rule"></div>
<p className="section-sub" style={{margin: '0 auto', textAlign: 'center'}}>Since 1920, Suzuki has engineered machines that win at the world's highest level. Every championship lesson shapes the bike in front of you.</p>
</div>
<div className="timeline reveal">
<div className="timeline-line"></div>
<div className="timeline-nodes">
<div className="t-node" onclick="setTimeline(this,0)">
<div className="t-dot"></div>
<div className="t-year">1920</div>
<div className="t-event">Suzuki Founded</div>
</div>
<div className="t-node" onclick="setTimeline(this,1)">
<div className="t-dot"></div>
<div className="t-year">1976</div>
<div className="t-event">500cc World Title</div>
</div>
<div className="t-node active" onclick="setTimeline(this,2)">
<div className="t-dot"></div>
<div className="t-year">2018</div>
<div className="t-event">Alex Rins Podium</div>
</div>
<div className="t-node" onclick="setTimeline(this,3)">
<div className="t-dot"></div>
<div className="t-year">2020</div>
<div className="t-event">World Champion</div>
</div>
<div className="t-node" onclick="setTimeline(this,4)">
<div className="t-dot"></div>
<div className="t-year">2020</div>
<div className="t-event">100th Anniversary</div>
</div>
<div className="t-node" onclick="setTimeline(this,5)">
<div className="t-dot"></div>
<div className="t-year">2024</div>
<div className="t-event">Gixxer 250 BD</div>
</div>
</div>
<div id="timelineDetails">
<div className="timeline-detail" data-index="0">
<div className="td-year">1920</div>
<div className="td-title">The Origin of Everything</div>
<p className="td-body">On 15th March 1920, Michio Suzuki founded the Suzuki Loom Manufacturing Co. in Hamamatsu, Japan. The founder's philosophy — "focusing on customers" — has driven every product and every engineering decision since that day.</p>
</div>
<div className="timeline-detail" data-index="1">
<div className="td-year">1976</div>
<div className="td-title">Barry Sheene — World Champion</div>
<p className="td-body">Barry Sheene claimed the 500cc World Championship riding a Suzuki RG500. It was the beginning of Suzuki's Grand Prix dominance — and the engineering lessons from that championship run echo in every Suzuki produced today.</p>
</div>
<div className="timeline-detail active" data-index="2">
<div className="td-year">2018</div>
<div className="td-title">Alex Rins — Japanese GP Podium</div>
<p className="td-body">At Twin Ring Motegi, before 55,000 passionate fans, Alex Rins fought his way to 3rd place for Team Suzuki Ecstar. "We did a great race," Rins said after. "It's fun to fight with the other riders." That fighting spirit defines every Suzuki.</p>
</div>
<div className="timeline-detail" data-index="3">
<div className="td-year">2020</div>
<div className="td-title">Joan Mir — MotoGP World Champion</div>
<p className="td-body">Joan Mir and Team Suzuki Ecstar claimed the 2020 MotoGP World Championship — the pinnacle of motorcycle racing. The aerodynamic and engineering principles that won that title are directly coded into the DNA of the Gixxer 250.</p>
</div>
<div className="timeline-detail" data-index="4">
<div className="td-year">2020</div>
<div className="td-title">Suzuki Celebrates 100 Years</div>
<p className="td-body">A century of engineering excellence. Suzuki Motor Corporation celebrated its 100th anniversary — reaffirming its commitment to customers and innovation. To mark the occasion in Bangladesh, a limited-edition 100th Anniversary Gixxer SF was released.</p>
</div>
<div className="timeline-detail" data-index="5">
<div className="td-year">2024</div>
<div className="td-title">Gixxer 250 Arrives in Bangladesh</div>
<p className="td-body">On December 1st, 2024, at Aloki, Tejgaon, Dhaka — Suzuki Bangladesh officially unveiled the Gixxer 250 and Gixxer SF 250. With brand ambassador Siam Ahmed present, Bangladesh's most powerful 250cc sports bikes entered the market.</p>
</div>
</div>
</div>
<div className="motogp-stats reveal">
<div className="mg-stat">
<div className="mg-stat-val">104</div>
<div className="mg-stat-label">Years of Engineering Excellence</div>
</div>
<div className="mg-stat">
<div className="mg-stat-val"><span className="red">2020</span></div>
<div className="mg-stat-label">MotoGP World Championship — Joan Mir</div>
</div>
<div className="mg-stat">
<div className="mg-stat-val">50<span className="red">+</span></div>
<div className="mg-stat-label">Years of Grand Prix Racing</div>
</div>
</div>
</div>
</section>

<section id="deals">
<div className="container">
<div className="d-flex-between reveal">
<div>
<div className="section-label">LIMITED TIME OFFERS</div>
<h2 className="section-h2">The Ride You Want.<br/><span className="red">At a Price That Respects You.</span></h2>
</div>
</div>
<div className="deals-grid">
<div className="deal-card reveal">
<div className="deal-banner">Special Price — Limited Stock</div>
<div className="deal-img-wrap">
<img alt="Gixxer" src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500&amp;q=80"/>
</div>
<div className="deal-body">
<div className="deal-name">GIXXER</div>
<div className="deal-was">MRP BDT 237,950</div>
<div className="deal-price">BDT 229,950</div>
<div className="deal-save">SAVE BDT 8,000</div>
<div className="deal-avail"><span className="blink-dot"></span>3 Colors Available</div>
<a className="deal-btn" href="#">Claim This Deal →</a>
</div>
</div>
<div className="deal-card reveal">
<div className="deal-banner">Special Price — 7 Colors</div>
<div className="deal-img-wrap">
<img alt="Gixxer Monotone" src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=500&amp;q=80"/>
</div>
<div className="deal-body">
<div className="deal-name">GIXXER MONOTONE</div>
<div className="deal-was">MRP BDT 205,950</div>
<div className="deal-price">BDT 199,950</div>
<div className="deal-save">SAVE BDT 6,000</div>
<div className="deal-avail"><span className="blink-dot"></span>7 Colors Available</div>
<a className="deal-btn" href="#">Claim This Deal →</a>
</div>
</div>
<div className="deal-card reveal">
<div className="deal-banner">Special Price — Classic Series</div>
<div className="deal-img-wrap">
<img alt="Gixxer Classic Matt" src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=500&amp;q=80"/>
</div>
<div className="deal-body">
<div className="deal-name">GIXXER CLASSIC MATT</div>
<div className="deal-was">MRP BDT 208,950</div>
<div className="deal-price">BDT 202,950</div>
<div className="deal-save">SAVE BDT 6,000</div>
<div className="deal-avail"><span className="blink-dot"></span>2 Colors · Limited Availability</div>
<a className="deal-btn" href="#">Claim This Deal →</a>
</div>
</div>
</div>
<p style={{textAlign: 'center', fontSize: '12px', color: 'var(--dim)', marginTop: '24px', letterSpacing: '.05em'}}>All prices are MRP. Final pricing confirmed at authorized Suzuki dealers. Offer valid while stocks last. EMI available via partner banks — visit <a href="https://dhp.suzuki.com.bd" style={{color: 'var(--red)'}}>dhp.suzuki.com.bd</a></p>
</div>
</section>

<section id="safety">
<div className="container">
<div className="safety-grid">
<div className="safety-img reveal">
<div className="safety-img-inner">
<img alt="Rider in safety gear" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="safety-tag">RIDE WITH CONFIDENCE</div>
</div>
</div>
<div className="reveal">
<div className="section-label">RIDER SAFETY</div>
<h2 className="section-h2">Fast Enough to Thrill.<br/><span className="red">Safe Enough</span> to Trust.</h2>
<p className="section-sub">At Suzuki, safety isn't an afterthought. Every feature is engineered — because the most exciting rides are the ones you come home from.</p>
<div className="safety-pillars">
<div className="safety-pillar">
<div className="sp-icon">ABS</div>
<div><div className="sp-title">Dual-Channel ABS — Standard</div><div className="sp-desc">Not optional. Not an upgrade. Every Gixxer 250 ships with dual-channel ABS — preventing wheel lock-up in emergency braking so you stop where you intend to.</div></div>
<div className="sp-arrow">→</div>
</div>
<div className="safety-pillar">
<div className="sp-icon">LED</div>
<div><div className="sp-title">Full LED Lighting System</div><div className="sp-desc">See more. Be seen more. Complete LED headlamp and tail lamp coverage — maximum visibility at dawn, dusk, rain, and deep night.</div></div>
<div className="sp-arrow">→</div>
</div>
<div className="safety-pillar">
<div className="sp-icon">FI</div>
<div><div className="sp-title">FI-Certified Service Centers</div><div className="sp-desc">Every Rancon authorized service center is equipped with FI cleaners and trained technicians. A well-maintained Suzuki is a safe Suzuki.</div></div>
<div className="sp-arrow">→</div>
</div>
<div className="safety-pillar">
<div className="sp-icon">ERG</div>
<div><div className="sp-title">Ergonomic Design</div><div className="sp-desc">Lightweight chassis designed for agility and stability. A balanced bike gives you control in traffic and confidence on open roads.</div></div>
<div className="sp-arrow">→</div>
</div>
</div>
<div className="safety-bottom">
<p>WEAR YOUR HELMET. WEAR YOUR GEAR. RIDE A SUZUKI.</p>
</div>
</div>
</div>
</div>
</section>

<section id="stories">
<div className="container">
<div className="stories-head reveal">
<div className="section-label">RIDERS LIKE YOU</div>
<h2 className="section-h2">The Road Means Something<br/>Different to Every Rider. <span className="red">Here's What It Means to Ours.</span></h2>
</div>
<div className="story-main reveal">
<div className="story-img">
<img alt="Rider Rafiq" src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=900&amp;q=80"/>
</div>
<div className="story-body">
<div className="story-loc">📍 Dhaka</div>
<div className="story-name">Rafiq Ahmed, 34</div>
<div className="story-bike">GIXXER 250 · Matt Blue</div>
<div className="story-quote">
<p>"I've been riding for 11 years across four different bikes. When the Gixxer 250 launched on December 1st, 2024, I was in the crowd at Aloki. I test-rode it the next morning. I bought it the day after. Eleven years in — this is the first bike that feels like it was built specifically for me."</p>
</div>
</div>
</div>
<div className="stories-grid">
<div className="story-small reveal">
<div className="story-loc">📍 Chittagong</div>
<div className="story-name">Tanvir Hossain, 29</div>
<div className="story-bike">GIXXER SF 250 · Nitro Neon Edition</div>
<div className="story-quote" style={{marginTop: '16px'}}>
<p style={{fontSize: '15px', lineHeight: '1.75', color: 'var(--muted)', fontStyle: 'italic'}}>"Every Friday after Jummah, I point the SF 250 toward Cox's Bazar and just go. No plan. No itinerary. The SOCS engine doesn't care how far you push it. That's what I bought it for — that's freedom."</p>
</div>
</div>
<div className="story-small reveal">
<div className="story-loc">📍 Sylhet</div>
<div className="story-name">Nusrat Jahan, 27</div>
<div className="story-bike">GSX 125 → Gixxer 250</div>
<div className="story-quote" style={{marginTop: '16px'}}>
<p style={{fontSize: '15px', lineHeight: '1.75', color: 'var(--muted)', fontStyle: 'italic'}}>"Started on the GSX 125. Two years later I walked into the showroom for the Gixxer 250. The upgrade wasn't just in the engine. It was in how I felt about myself as a rider. Suzuki grew with me."</p>
</div>
</div>
</div>
<div className="story-cta-wrap reveal">
<a className="btn-ghost" href="#">Share Your Suzuki Story →</a>
</div>
</div>
</section>

<section id="service">
<div className="container">
<div className="service-grid">
<div className="service-img reveal">
<img alt="Suzuki Service" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&amp;q=80"/>
</div>
<div className="reveal">
<div className="section-label">SUZUKI SERVICE</div>
<h2 className="section-h2">Your Ride Doesn't Stop.<br/><span className="red">Neither Do We.</span></h2>
<p className="section-sub">Rancon Motor Bikes Ltd. has built Bangladesh's most capable motorcycle service network to ensure your Suzuki performs like new — every kilometre, every year.</p>
<div className="service-badges">
<div className="svc-badge"><div className="svc-check">✓</div><div className="svc-badge-label">FI Certified Centers</div></div>
<div className="svc-badge"><div className="svc-check">✓</div><div className="svc-badge-label">Genuine Suzuki Parts</div></div>
<div className="svc-badge"><div className="svc-check">✓</div><div className="svc-badge-label">Ecstar Engine Oil</div></div>
<div className="svc-badge"><div className="svc-check">✓</div><div className="svc-badge-label">Trained Technicians</div></div>
</div>
<div className="accordion">
<div className="acc-item open">
<button className="acc-toggle" onclick="toggleAcc(this)">
<span className="acc-title">FI-Certified Service Centers</span>
<span className="acc-icon">+</span>
</button>
<div className="acc-body"><p>Every authorized Suzuki service center is equipped with dedicated FI cleaners and staffed by Suzuki-trained technicians. Whether your bike has 500km or 50,000km — it gets the same standard of care.</p></div>
</div>
<div className="acc-item">
<button className="acc-toggle" onclick="toggleAcc(this)">
<span className="acc-title">Suzuki Genuine Parts</span>
<span className="acc-icon">+</span>
</button>
<div className="acc-body"><p>Don't compromise your machine. Suzuki Bangladesh stocks and distributes genuine Suzuki components through every authorized dealer — priced fairly and available nationally.</p></div>
</div>
<div className="acc-item">
<button className="acc-toggle" onclick="toggleAcc(this)">
<span className="acc-title">Ecstar Engine Oil</span>
<span className="acc-icon">+</span>
</button>
<div className="acc-body"><p>Suzuki's own engine oil formula — developed alongside the MotoGP program for superior thermal protection and engine longevity. Available at every authorized Suzuki dealer.</p></div>
</div>
<div className="acc-item">
<button className="acc-toggle" onclick="toggleAcc(this)">
<span className="acc-title">Service Packages</span>
<span className="acc-icon">+</span>
</button>
<div className="acc-body"><p>Structured, transparent service packages designed to protect your investment and give you predictable costs. No surprise bills. No guesswork.</p></div>
</div>
</div>
<div className="service-ctas" style={{marginTop: '40px'}}>
<a className="btn-primary" href="https://suzuki.com.bd/services">Choose Your Service Package →</a>
<a className="btn-ghost" href="https://suzuki.com.bd/dealer">Find Nearest Dealer →</a>
</div>
</div>
</div>
</div>
</section>

<section id="news">
<div className="container">
<div className="d-flex-between reveal">
<div>
<div className="section-label">FROM THE SUZUKI WORLD</div>
<h2 className="section-h2">Stay in the <span className="red">Fast Lane.</span></h2>
</div>
<a className="btn-ghost" href="https://suzuki.com.bd/news" style={{height: 'fit-content'}}>View All News →</a>
</div>
<div className="news-featured reveal">
<div className="news-feat-img">
<img alt="Gixxer 250 Launch" src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1200&amp;q=80"/>
</div>
<div className="news-feat-body">
<span className="news-cat">Latest · Launch</span>
<div className="news-date">December 2, 2024</div>
<div className="news-title">Suzuki Bangladesh Unveils MotoGP-Inspired Gixxer 250 &amp; Gixxer SF 250</div>
<p className="news-excerpt">Bangladesh's fastest 250cc bikes officially launched at Aloki, Tejgaon, Dhaka — with brand ambassador Siam Ahmed and top Rancon leadership present. The Gixxer 250 Series sets a new standard in performance and design.</p>
<a className="news-link" href="https://suzuki.com.bd/news/suzuki-bangladesh-unveils-motogp-inspired-fastest-250cc-bikes-the-suzuki-gixxer-250-and-gixxer-sf-250-qx80cbtw">Read More →</a>
</div>
</div>
<div className="news-grid">
<div className="news-card reveal">
<div className="news-card-img">
<img alt="Joan Mir" src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&amp;q=80"/>
</div>
<div className="news-card-body">
<span className="news-cat">MotoGP</span>
<div className="news-date" style={{marginTop: '12px'}}>November 18, 2020</div>
<div className="news-title" style={{fontSize: '22px', marginBottom: '12px'}}>Joan Mir Becomes 2020 MotoGP World Champion</div>
<a className="news-link" href="https://suzuki.com.bd/news/joan-mir-becomes-2020-motogp-world-champion-23j0110e4h">Read More →</a>
</div>
</div>
<div className="news-card reveal">
<div className="news-card-img">
<img alt="Face of Suzuki" src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&amp;q=80"/>
</div>
<div className="news-card-body">
<span className="news-cat">Brand</span>
<div className="news-date" style={{marginTop: '12px'}}>March 1, 2024</div>
<div className="news-title" style={{fontSize: '22px', marginBottom: '12px'}}>Siam Ahmed — The Face of Suzuki Bangladesh</div>
<a className="news-link" href="https://suzuki.com.bd/news/introducing-the-face-of-suzuki-fhkdb3g4h">Read More →</a>
</div>
</div>
<div className="news-card reveal">
<div className="news-card-img">
<img alt="Suzuki Gixxer Fi Disc" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="news-card-body">
<span className="news-cat">Launch</span>
<div className="news-date" style={{marginTop: '12px'}}>March 30, 2024</div>
<div className="news-title" style={{fontSize: '22px', marginBottom: '12px'}}>New Suzuki Gixxer Fi Disc Series Launched in Bangladesh</div>
<a className="news-link" href="https://suzuki.com.bd/news/suzuki-bangladesh-has-launched-new-suzuki-gixxer-fi-disc-series-fggdi15em">Read More →</a>
</div>
</div>
</div>
</div>
</section>

<section id="final-cta">
<div className="cta-bg"></div>
<div className="cta-vignette"></div>
<div className="cta-content reveal">
<div className="section-label" style={{justifyContent: 'center'}}>YOUR NEXT RIDE</div>
<h2 className="cta-h">Your Next Ride<br/><span className="red">Is Waiting.</span></h2>
<p className="cta-sub">Don't just read about it.<br/>Sit on it. Feel it. Own it.</p>
<div className="cta-btns">
<a className="btn-primary" href="https://suzuki.com.bd/test-ride" style={{fontSize: '15px', padding: '18px 48px'}}>Book a Free Test Ride →</a>
<a className="btn-ghost" href="https://suzuki.com.bd/dealer">Find a Dealer Near You →</a>
<div className="cta-hotline">📞 Hotline: <a href="tel:16638">16638</a></div>
</div>
</div>
</section>

<footer>
<div className="container">
<div className="footer-main">
<div className="footer-brand">
<a className="nav-logo" href="#" style={{marginBottom: '20px', display: 'flex'}}>
<div className="logo-s"></div>
<span className="logo-text">SUZUKI</span>
</a>
<p className="footer-tagline">Founded in Japan, 1920. Proven in MotoGP. Distributed exclusively by Rancon Motor Bikes Ltd. — available at your nearest authorized dealer across Bangladesh.</p>
<div className="footer-hotline">HOTLINE: <span>16638</span></div>
</div>
<div className="footer-col">
<h4>Suzuki</h4>
<ul>
<li><a href="https://suzuki.com.bd/about">About</a></li>
<li><a href="https://suzuki.com.bd/bikes">All Bikes</a></li>
<li><a href="https://suzuki.com.bd/services">Services</a></li>
<li><a href="https://suzuki.com.bd/dealer">Dealer Locator</a></li>
<li><a href="https://suzuki.com.bd/offers">Offers</a></li>
<li><a href="https://suzuki.com.bd/contact">Contact</a></li>
</ul>
</div>
<div className="footer-col">
<h4>Shop</h4>
<ul>
<li><a href="https://suzuki.com.bd/accessories">Accessories</a></li>
<li><a href="https://suzuki.com.bd/engine-oil">Ecstar Engine Oil</a></li>
<li><a href="https://suzuki.com.bd/genuine-parts">Genuine Parts</a></li>
<li><a href="https://dhp.suzuki.com.bd">Finance / EMI</a></li>
</ul>
</div>
<div className="footer-col">
<h4>Policy</h4>
<ul>
<li><a href="https://suzuki.com.bd/warranty-policy">Warranty Policy</a></li>
<li><a href="https://suzuki.com.bd/service-policy">Service Policy</a></li>
<li><a href="https://suzuki.com.bd/privacy-policy">Privacy Policy</a></li>
<li><a href="https://suzuki.com.bd/terms-condition">Terms &amp; Conditions</a></li>
<li><a href="https://suzuki.com.bd/sales-and-refunds">Sales &amp; Refunds</a></li>
</ul>
</div>
</div>
<div className="footer-bottom">
<div className="footer-copy">© 2023–2026 RANCON MOTOR BIKES LTD. · suzuki.com.bd</div>
<div className="social-row">
<a className="soc-btn" href="#" title="Facebook">f</a>
<a className="soc-btn" href="#" title="Instagram">in</a>
<a className="soc-btn" href="#" title="YouTube">▶</a>
<a className="soc-btn" href="#" title="TikTok">tt</a>
</div>
<div className="rancon-badge">Distributed by Rancon Motor Bikes Ltd.</div>
</div>
</div>
</footer>


    </>
  );
}
