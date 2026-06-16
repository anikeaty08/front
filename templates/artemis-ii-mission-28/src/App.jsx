import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Crew image fallbacks — ensures a portrait always shows
    const crewFallbacks = {
      'Victor Glover': [
        'https://images-assets.nasa.gov/image/jsc2023e042039/jsc2023e042039~orig.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/2/27/Victor_Glover_official_portrait.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Victor_J_Glover_portrait.jpg/800px-Victor_J_Glover_portrait.jpg',
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop'
      ]
    };

    document.querySelectorAll('.crew-img-wrap img').forEach(img => {
      const name = img.alt;
      if (!crewFallbacks[name]) return;
      const urls = crewFallbacks[name];
      let idx = 0;
      function tryNext() {
        if (idx >= urls.length) return;
        img.src = urls[idx++];
      }
      img.onerror = tryNext;
      // Test if current src already loaded
      if (!img.complete || img.naturalHeight === 0) tryNext();
    });

    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on('scroll', (e) => {
      ScrollTrigger.update();
      document.getElementById('scrollProgress').style.transform = `scaleX(${e.progress})`;
    });
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);

    // Nav scroll state
    window.addEventListener('scroll', () => {
      document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 40);
    });

    // Hero letter animation
    const title = document.getElementById('heroTitle');
    const textContent = title.textContent;
    title.innerHTML = textContent.split('').map(c => `<span class="hero__char">${c === ' ' ? '&nbsp;' : c}</span>`).join('');
    gsap.fromTo('.hero__char', { y: 80, rotateX: 40, opacity: 0 }, { y: 0, rotateX: 0, opacity: 1, duration: 0.8, stagger: 0.04, ease: 'expo.out' });
    gsap.fromTo('.hero__tag, .hero__sub, .hero__actions', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.2, delay: 0.3 });

    // Flywheel scroll interaction
    const wheel = document.getElementById('flywheel');
    const nodes = document.querySelectorAll('.node-content');
    const cards = document.querySelectorAll('.day-card');
    wheel.style.setProperty('--wheel-rot', '0deg');
    if (nodes[0]) nodes[0].classList.add('active');

    cards.forEach((card, idx) => {
      ScrollTrigger.create({
        trigger: card,
        start: 'top 55%',
        end: 'bottom 45%',
        onToggle: self => {
          if (self.isActive) {
            const angle = idx * 30;
            wheel.style.setProperty('--wheel-rot', `-${angle}deg`);
            cards.forEach(c => c.classList.remove('active-day'));
            card.classList.add('active-day');
            nodes.forEach((n, i) => {
              i === idx ? n.classList.add('active') : n.classList.remove('active');
            });
          }
        }
      });
    });

    document.getElementById('backToTop').addEventListener('click', () => lenis.scrollTo(0, { duration: 1.5 }));
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        lenis.scrollTo(this.getAttribute('href'), { offset: -60, duration: 1.2 });
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="scroll-progress" id="scrollProgress"></div>
<div className="grain"></div>
<nav className="nav" id="nav">
<a className="nav__logo" href="#">ARTEMIS<span>.</span></a>
<div className="nav__links">
<a href="#crew">The Crew</a>
<a href="#timeline">Timeline</a>
</div>
<a className="nav__cta" href="#timeline">
      Explore Sequence
      <iconify-icon height="16" icon="solar:rocket-linear" width="16"></iconify-icon>
</a>
</nav>

<section className="hero section relative overflow-hidden" id="hero">
<div className="hero__bg"></div>
<div className="hero__overlay"></div>
<div className="hero__content">
<div className="hero__tag flex items-center gap-2">
<img alt="NASA Logo" className="h-4 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"/>
        NASA Mission
      </div>
<h1 className="hero__title" id="heroTitle">Artemis II</h1>
<p className="hero__sub">Experience the historic 10-day mission that will take four astronauts farther into space than any humans before them.</p>
<div className="hero__actions">
<a className="hero__btn hero__btn--primary" href="#crew">
          Meet the Crew
          <iconify-icon height="18" icon="solar:arrow-down-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="section relative z-10 w-full bg-[#000000]" id="crew">
<div className="container mx-auto px-4 md:px-6">
<div className="flex flex-col items-center text-center mb-16 md:mb-24">
<div className="section-tag">Artemis Generation</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">The Crew of Artemis II</h2>
<p className="text-[#8892B0] max-w-2xl text-sm md:text-base leading-relaxed">Four exceptional individuals chosen to chart a new course for humanity, returning to the lunar vicinity for the first time in over 50 years to test the foundational deep space human exploration capabilities.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

<div className="crew-card">
<div className="crew-img-wrap">
<img alt="Reid Wiseman" onerror="this.src='https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=800&amp;auto=format&amp;fit=crop'" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Reid_Wiseman_official_portrait.jpg/800px-Reid_Wiseman_official_portrait.jpg"/>
<span className="crew-flag">🇺🇸</span>
</div>
<div className="crew-body">
<div className="crew-role">
<iconify-icon icon="solar:star-fall-minimalistic-2-linear" width="14"></iconify-icon>
              Commander
            </div>
<div className="crew-name">Reid Wiseman</div>
<p className="crew-bio">NASA astronaut and decorated naval aviator. Previously served aboard the ISS during Expedition 40/41, logging 165 days in space.</p>
<div className="crew-stats">
<div className="crew-stat"><span className="crew-stat-val">165d</span><span className="crew-stat-lbl">In Space</span></div>
<div className="crew-stat"><span className="crew-stat-val">2</span><span className="crew-stat-lbl">Missions</span></div>
<div className="crew-stat"><span className="crew-stat-val">USN</span><span className="crew-stat-lbl">Service</span></div>
</div>
</div>
</div>

<div className="crew-card">
<div className="crew-img-wrap">
<img alt="Victor Glover" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=800&amp;auto=format&amp;fit=crop'" src="https://images-assets.nasa.gov/image/jsc2023e042039/jsc2023e042039~orig.jpg"/>
<span className="crew-flag">🇺🇸</span>
</div>
<div className="crew-body">
<div className="crew-role">
<iconify-icon icon="solar:ruler-pen-linear" width="14"></iconify-icon>
              Pilot
            </div>
<div className="crew-name">Victor Glover</div>
<p className="crew-bio">NASA astronaut and former naval test pilot. Piloted SpaceX Crew Dragon on Crew-1, the first operational crewed mission to the ISS.</p>
<div className="crew-stats">
<div className="crew-stat"><span className="crew-stat-val">168d</span><span className="crew-stat-lbl">In Space</span></div>
<div className="crew-stat"><span className="crew-stat-val">1</span><span className="crew-stat-lbl">EVAs</span></div>
<div className="crew-stat"><span className="crew-stat-val">USN</span><span className="crew-stat-lbl">Service</span></div>
</div>
</div>
</div>

<div className="crew-card">
<div className="crew-img-wrap">
<img alt="Christina Koch" onerror="this.src='https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&amp;w=800&amp;auto=format&amp;fit=crop'" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Christina_Koch_official_NASA_portrait.jpg/800px-Christina_Koch_official_NASA_portrait.jpg"/>
<span className="crew-flag">🇺🇸</span>
</div>
<div className="crew-body">
<div className="crew-role">
<iconify-icon icon="solar:test-tube-minimalistic-linear" width="14"></iconify-icon>
              Mission Specialist
            </div>
<div className="crew-name">Christina Koch</div>
<p className="crew-bio">Holds the record for the longest single spaceflight by a woman (328 days). Participated in the first all-female spacewalk with Jessica Meir.</p>
<div className="crew-stats">
<div className="crew-stat"><span className="crew-stat-val">328d</span><span className="crew-stat-lbl">Record</span></div>
<div className="crew-stat"><span className="crew-stat-val">6</span><span className="crew-stat-lbl">EVAs</span></div>
<div className="crew-stat"><span className="crew-stat-val">NASA</span><span className="crew-stat-lbl">Agency</span></div>
</div>
</div>
</div>

<div className="crew-card">
<div className="crew-img-wrap">
<img alt="Jeremy Hansen" onerror="this.src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=800&amp;auto=format&amp;fit=crop'" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Jeremy_Hansen_official_portrait.jpg/800px-Jeremy_Hansen_official_portrait.jpg"/>
<span className="crew-flag">🇨🇦</span>
</div>
<div className="crew-body">
<div className="crew-role">
<iconify-icon icon="solar:planet-2-linear" width="14"></iconify-icon>
              Mission Specialist
            </div>
<div className="crew-name">Jeremy Hansen</div>
<p className="crew-bio">Canadian Space Agency astronaut and former CF-18 fighter pilot. Artemis II will be his first spaceflight, making him the first non-American on a lunar mission.</p>
<div className="crew-stats">
<div className="crew-stat"><span className="crew-stat-val">1st</span><span className="crew-stat-lbl">Flight</span></div>
<div className="crew-stat"><span className="crew-stat-val">CF-18</span><span className="crew-stat-lbl">Pilot</span></div>
<div className="crew-stat"><span className="crew-stat-val">CSA</span><span className="crew-stat-lbl">Agency</span></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="section relative z-10 w-full border-t border-white/5" id="timeline">

<div style={{position: 'absolute', inset: '0', zIndex: '0', background: 'url(\'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?q=80&amp', opacity: '0.07', pointerEvents: 'none'}}></div>
<div className="timeline-wrapper" style={{position: 'relative', zIndex: '1'}}>
<div className="flywheel-col">

<div className="flywheel-sat-bg"></div>

<div className="flywheel-sat-overlay"></div>
<div className="flywheel-bg"></div>
<div className="satellite-field">
<div className="glow-pulse-ring"></div>
<div className="ring-satellites" style={{width: '480px', height: '480px', left: '50%', top: '50%', transform: 'translate(-50%,-50%)'}}></div>
<div className="ring-satellites" style={{width: '560px', height: '560px', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', border: '1px dotted rgba(30,144,255,0.15)'}}></div>
<div className="orbiting-sat" style={{top: '50%', left: '50%', transformOrigin: 'center', animationDuration: '18s', width: '6px', height: '6px', background: '#1E90FF', boxShadow: '0 0 6px #1E90FF'}}></div>
<div className="orbiting-sat" style={{top: '50%', left: '50%', transformOrigin: 'center', animationDuration: '24s', animationDelay: '-4s', width: '10px', height: '10px', background: '#00aaff', filter: 'blur(0.5px)'}}></div>
<div className="star-particle" style={{top: '15%', left: '25%', width: '2px', height: '2px', animationDuration: '6s'}}></div>
<div className="star-particle" style={{top: '75%', left: '15%', width: '1px', height: '1px', animationDuration: '9s'}}></div>
</div>
<div className="relative w-[480px] h-[480px] rounded-full flex items-center justify-center" id="flywheel">

<div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-gray-800 to-black border-2 border-[#1E90FF] shadow-[0_0_18px_rgba(30,144,255,0.4)] flex items-center justify-center z-10 backdrop-blur-sm">
<iconify-icon className="text-3xl text-[#1E90FF]" icon="solar:moon-linear"></iconify-icon>
</div>

<div className="node-wrapper absolute left-1/2 top-1/2" style={{-Deg: '0deg'}}><div className="node-content" data-day-index="0"><span className="node-icon">🚀</span><span className="node-number">01</span></div></div>
<div className="node-wrapper absolute left-1/2 top-1/2" style={{-Deg: '30deg'}}><div className="node-content" data-day-index="1"><span className="node-icon">📈</span><span className="node-number">02</span></div></div>
<div className="node-wrapper absolute left-1/2 top-1/2" style={{-Deg: '60deg'}}><div className="node-content" data-day-index="2"><span className="node-icon">🛸</span><span className="node-number">03</span></div></div>
<div className="node-wrapper absolute left-1/2 top-1/2" style={{-Deg: '90deg'}}><div className="node-content" data-day-index="3"><span className="node-icon">⚡</span><span className="node-number">04</span></div></div>
<div className="node-wrapper absolute left-1/2 top-1/2" style={{-Deg: '120deg'}}><div className="node-content" data-day-index="4"><span className="node-icon">🌌</span><span className="node-number">05</span></div></div>
<div className="node-wrapper absolute left-1/2 top-1/2" style={{-Deg: '150deg'}}><div className="node-content" data-day-index="5"><span className="node-icon">🛰️</span><span className="node-number">06</span></div></div>
<div className="node-wrapper absolute left-1/2 top-1/2" style={{-Deg: '180deg'}}><div className="node-content" data-day-index="6"><span className="node-icon">🌕</span><span className="node-number">07</span></div></div>
<div className="node-wrapper absolute left-1/2 top-1/2" style={{-Deg: '210deg'}}><div className="node-content" data-day-index="7"><span className="node-icon">🔄</span><span className="node-number">08</span></div></div>
<div className="node-wrapper absolute left-1/2 top-1/2" style={{-Deg: '240deg'}}><div className="node-content" data-day-index="8"><span className="node-icon">📡</span><span className="node-number">09</span></div></div>
<div className="node-wrapper absolute left-1/2 top-1/2" style={{-Deg: '270deg'}}><div className="node-content" data-day-index="9"><span className="node-icon">🤝</span><span className="node-number">10</span></div></div>
<div className="node-wrapper absolute left-1/2 top-1/2" style={{-Deg: '300deg'}}><div className="node-content" data-day-index="10"><span className="node-icon">🔥</span><span className="node-number">11</span></div></div>
<div className="node-wrapper absolute left-1/2 top-1/2" style={{-Deg: '330deg'}}><div className="node-content" data-day-index="11"><span className="node-icon">🌊</span><span className="node-number">12</span></div></div>
</div>
<div className="absolute right-[2%] top-1/2 -translate-y-1/2 flex items-center gap-3 z-20 pointer-events-none">
<span className="indicator-text text-[#1E90FF] text-[10px] uppercase tracking-widest font-medium">ACTIVE NODE</span>
<div className="w-12 md:w-20 h-[1px] bg-[#1E90FF] shadow-[0_0_6px_#1E90FF]"></div>
</div>
</div>

<div className="content-col" id="timeline-content">
<div className="day-card" data-day="0"><div className="text-[#1E90FF] text-xs font-semibold tracking-[0.2em] uppercase mb-4"><iconify-icon icon="solar:rocket-linear" width="16"></iconify-icon> Phase 1 · Launch</div><h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-5">Liftoff &amp; Ascent</h3><p className="text-[#8892B0] leading-relaxed">SLS liftoff from Kennedy Space Center. Solid rocket booster separation, core stage main engine cutoff, and insertion into initial parking orbit.</p></div>
<div className="day-card" data-day="1"><div className="text-[#1E90FF] text-xs font-semibold tracking-[0.2em] uppercase mb-4"><iconify-icon icon="solar:graph-up-linear" width="16"></iconify-icon> Phase 2 · Perigee Raise</div><h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-5">Perigee Raise Maneuver</h3><p className="text-[#8892B0] leading-relaxed">ICPS (Interim Cryogenic Propulsion Stage) fires to raise perigee to a stable high Earth orbit. Orion separates from ICPS after disposal burn.</p></div>
<div className="day-card" data-day="2"><div className="text-[#1E90FF] text-xs font-semibold tracking-[0.2em] uppercase mb-4"><iconify-icon icon="solar:planet-3-linear" width="16"></iconify-icon> Phase 3 · ICPS Disposal</div><h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-5">ICPS Disposal Burn</h3><p className="text-[#8892B0] leading-relaxed">The upper stage performs a disposal maneuver to avoid debris, then separates from Orion, which continues on its own power.</p></div>
<div className="day-card" data-day="3"><div className="text-[#1E90FF] text-xs font-semibold tracking-[0.2em] uppercase mb-4"><iconify-icon icon="solar:flash-linear" width="16"></iconify-icon> Phase 4 · Trans-Lunar Injection</div><h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-5">TLI Burn</h3><p className="text-[#8892B0] leading-relaxed">Orion's main engine (European Service Module) fires to break Earth orbit and set a free‑return trajectory toward the Moon.</p></div>
<div className="day-card" data-day="4"><div className="text-[#1E90FF] text-xs font-semibold tracking-[0.2em] uppercase mb-4"><iconify-icon icon="solar:radar-linear" width="16"></iconify-icon> Phase 5 · Outbound Transit (Part 1)</div><h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-5">Cruise to Lunar Sphere</h3><p className="text-[#8892B0] leading-relaxed">First half of the 4‑day outbound cruise. Crew checks life support, performs navigation, and passes through Van Allen belts.</p></div>
<div className="day-card" data-day="5"><div className="text-[#1E90FF] text-xs font-semibold tracking-[0.2em] uppercase mb-4"><iconify-icon icon="solar:earth-linear" width="16"></iconify-icon> Phase 6 · Outbound Transit (Part 2)</div><h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-5">Approaching the Moon</h3><p className="text-[#8892B0] leading-relaxed">Final outbound leg. Orion enters the Moon's gravitational influence. Systems calibrated for lunar flyby.</p></div>
<div className="day-card" data-day="6"><div className="text-[#1E90FF] text-xs font-semibold tracking-[0.2em] uppercase mb-4"><iconify-icon icon="solar:camera-minimalistic-linear" width="16"></iconify-icon> Phase 7 · Historic Lunar Flyby</div><h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-5">Lunar Far Side Passage</h3><p className="text-[#8892B0] leading-relaxed">Orion flies ~4,000 miles above lunar surface. Crew experiences communications blackout, captures Earthrise, sets new human distance record.</p></div>
<div className="day-card" data-day="7"><div className="text-[#1E90FF] text-xs font-semibold tracking-[0.2em] uppercase mb-4"><iconify-icon icon="solar:repeat-linear" width="16"></iconify-icon> Phase 8 · Return Trajectory (RTC-1)</div><h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-5">Slingshot &amp; Correction Burn</h3><p className="text-[#8892B0] leading-relaxed">Moon's gravity slings Orion back. First return trajectory correction burn (RTC‑1) refines path toward Earth.</p></div>
<div className="day-card" data-day="8"><div className="text-[#1E90FF] text-xs font-semibold tracking-[0.2em] uppercase mb-4"><iconify-icon icon="solar:transfer-horizontal-linear" width="16"></iconify-icon> Phase 9 · Coast to Earth</div><h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-5">Deep Space Coast</h3><p className="text-[#8892B0] leading-relaxed">Multiple days of return cruise. Crew performs maintenance, science, and prepares for reentry.</p></div>
<div className="day-card" data-day="9"><div className="text-[#1E90FF] text-xs font-semibold tracking-[0.2em] uppercase mb-4"><iconify-icon icon="solar:hand-shake-linear" width="16"></iconify-icon> Phase 10 · Proximity Ops Demo</div><h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-5">Prox Ops &amp; Manual Handling</h3><p className="text-[#8892B0] leading-relaxed">Orion demonstrates proximity operations and manual handling quality assessment, proving crew can control spacecraft near other vehicles.</p></div>
<div className="day-card" data-day="10"><div className="text-[#1E90FF] text-xs font-semibold tracking-[0.2em] uppercase mb-4"><iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon> Phase 11 · Entry Interface (EI)</div><h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-5">Atmospheric Reentry</h3><p className="text-[#8892B0] leading-relaxed">Orion hits Earth's atmosphere at 25,000 mph. Heat shield withstands 3,000°F. Skip reentry reduces G‑forces.</p></div>
<div className="day-card" data-day="11"><div className="text-[#1E90FF] text-xs font-semibold tracking-[0.2em] uppercase mb-4"><iconify-icon icon="solar:waterdrops-linear" width="16"></iconify-icon> Phase 12 · Splashdown &amp; Recovery</div><h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-5">Pacific Splashdown</h3><p className="text-[#8892B0] leading-relaxed">Parachutes deploy. Capsule splashes down off San Diego. Navy recovery team extracts astronauts. Mission complete.</p></div>
</div>
</div>
</section>
<footer className="footer">
<div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="text-lg font-semibold tracking-widest uppercase text-white">Artemis II</span>
<p className="text-xs text-[#8892B0] mt-1 uppercase tracking-wider">Humanity's Return to the Moon</p>
</div>
<button className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium text-[#1E90FF] hover:text-white transition-colors duration-300" id="backToTop">
        Back To Top
        <iconify-icon icon="solar:arrow-up-linear" width="16"></iconify-icon>
</button>
</div>
</footer>






    </>
  );
}
