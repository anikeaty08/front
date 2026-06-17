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
          const engCards = document.querySelectorAll('.eng-card');
          let engAnimated = false;
          function checkEng() {
            const grid = document.getElementById('engagement-grid');
            if (!grid) return;
            const rect = grid.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.88 && !engAnimated) {
              engAnimated = true;
              engCards.forEach(function(card) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              });
            }
          }
          window.addEventListener('scroll', checkEng, { passive: true });
          checkEng();
        })();
      


      (function(){
        const prizeCards = document.querySelectorAll('.prize-card');
        const perkCards = document.querySelectorAll('.perk-card');
        let prizeAnimated = false;
        let perkAnimated = false;
        function checkPrizes() {
          const section = document.getElementById('prizes-section');
          if (!section) return;
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.8 && !prizeAnimated) {
            prizeAnimated = true;
            prizeCards.forEach(card => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            });
          }
          const perksGrid = document.getElementById('perks-grid');
          if (perksGrid) {
            const perksRect = perksGrid.getBoundingClientRect();
            if (perksRect.top < window.innerHeight * 0.85 && !perkAnimated) {
              perkAnimated = true;
              perkCards.forEach(card => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              });
            }
          }
        }
        window.addEventListener('scroll', checkPrizes, { passive: true });
        checkPrizes();
      })();
    


      (function(){
        const funnelSteps = document.querySelectorAll('.funnel-step');
        const funnelConnectors = document.querySelectorAll('.funnel-connector');
        let funnelAnimated = false;
        function checkFunnel() {
          const container = document.getElementById('funnel-container');
          if (!container) return;
          const rect = container.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.85 && !funnelAnimated) {
            funnelAnimated = true;
            funnelSteps.forEach((step, i) => {
              setTimeout(() => {
                step.style.opacity = '1';
                step.style.transform = 'translateY(0)';
              }, i * 180);
            });
            funnelConnectors.forEach((conn, i) => {
              setTimeout(() => {
                conn.style.opacity = '1';
              }, i * 180 + 100);
            });
          }
        }
        window.addEventListener('scroll', checkFunnel, { passive: true });
        checkFunnel();
      })();
    


      const cursor = document.getElementById('cursor');
      const ring = document.getElementById('cursorRing');
      document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        setTimeout(() => {
          ring.style.left = e.clientX + 'px';
          ring.style.top = e.clientY + 'px';
        }, 80);
      });
      document.querySelectorAll('a, button, .glory-dot').forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursor.style.width = '20px'; cursor.style.height = '20px';
          ring.style.width = '56px'; ring.style.height = '56px';
        });
        el.addEventListener('mouseleave', () => {
          cursor.style.width = '12px'; cursor.style.height = '12px';
          ring.style.width = '36px'; ring.style.height = '36px';
        });
      });

      const particlesContainer = document.getElementById('particles');
      for (let i = 0; i < 40; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.width = p.style.height = (Math.random() * 2 + 1) + 'px';
        p.style.animationDuration = (Math.random() * 15 + 10) + 's';
        p.style.animationDelay = (Math.random() * 15) + 's';
        p.style.opacity = Math.random() * 0.6;
        particlesContainer.appendChild(p);
      }

      function updateCountdown() {
        const target = new Date('2026-09-01T00:00:00Z');
        const now = new Date();
        let diff = target - now;
        if (diff < 0) diff = 0;
        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff % 86400000) / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        document.getElementById('cd-days').textContent = String(d).padStart(3, '0');
        document.getElementById('cd-hours').textContent = String(h).padStart(2, '0');
        document.getElementById('cd-mins').textContent = String(m).padStart(2, '0');
        document.getElementById('cd-secs').textContent = String(s).padStart(2, '0');
      }
      updateCountdown();
      setInterval(updateCountdown, 1000);

      (function () {
        const section = document.getElementById('glory-section');
        const track = document.getElementById('glory-track');
        const stage = document.getElementById('glory-stage');
        const header = document.getElementById('glory-header');
        const cards = Array.from(document.querySelectorAll('.glory-card'));
        const TOTAL = cards.length;
        const SEGMENTS = TOTAL + 1;
        let currentStep = -1;

        const dotsWrap = document.createElement('div');
        dotsWrap.className = 'glory-dots';
        cards.forEach((_, i) => {
          const d = document.createElement('div');
          d.className = 'glory-dot';
          d.addEventListener('click', () => scrollToStep(i));
          dotsWrap.appendChild(d);
        });
        document.querySelector('.glory-sticky').appendChild(dotsWrap);
        const dots = Array.from(dotsWrap.querySelectorAll('.glory-dot'));

        function scrollToStep(index) {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          const trackH = track.offsetHeight;
          const segH = trackH / SEGMENTS;
          const targetScroll = sectionTop + segH * (index + 1.1);
          window.scrollTo({ top: targetScroll, behavior: 'smooth' });
        }

        function showStep(newStep) {
          if (newStep === currentStep) return;
          const prevStep = currentStep;
          currentStep = newStep;
          if (newStep === -1) {
            header.classList.remove('hidden');
            stage.classList.remove('active');
            dots.forEach(d => d.classList.remove('active'));
          } else {
            header.classList.add('hidden');
            stage.classList.add('active');
            dots.forEach((d, i) => d.classList.toggle('active', i === newStep));
          }
          cards.forEach((card, i) => {
            card.classList.remove('active', 'exit-up');
            if (i === newStep) {
              setTimeout(() => card.classList.add('active'), prevStep >= 0 ? 60 : 0);
            } else if (prevStep >= 0 && i === prevStep) {
              card.classList.add('exit-up');
            }
          });
        }

        function onScroll() {
          const sectionTop = section.getBoundingClientRect().top;
          const sectionH = section.offsetHeight;
          const vh = window.innerHeight;
          if (sectionTop > vh || sectionTop < -sectionH) return;
          const scrolled = -sectionTop;
          const trackH = track.offsetHeight;
          const segH = trackH / SEGMENTS;
          const seg = Math.floor(scrolled / segH);
          if (seg <= 0) {
            showStep(-1);
          } else {
            const stepIndex = Math.min(seg - 1, TOTAL - 1);
            showStep(stepIndex);
          }
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
      })();
    


        (function(){const cards=document.querySelectorAll('.conduct-card');let animated=false;function check(){const grid=document.getElementById('conduct-grid');if(!grid)return;const rect=grid.getBoundingClientRect();if(rect.top<window.innerHeight*0.88&&!animated){animated=true;cards.forEach(function(c){c.style.opacity='1';c.style.transform='translateY(0)';});}}window.addEventListener('scroll',check,{passive:true});check();})();
      


        function toggleFaq(btn){var item=btn.closest('.faq-item');var body=item.querySelector('.faq-body');var chevron=btn.querySelector('.faq-chevron');var isOpen=body.style.maxHeight&&body.style.maxHeight!=='0px';document.querySelectorAll('.faq-item').forEach(function(el){el.querySelector('.faq-body').style.maxHeight='0px';el.querySelector('.faq-chevron').style.transform='rotate(0deg)';el.style.borderColor='rgba(1,215,253,0.12)';el.style.background='rgba(1,215,253,0.02)';});if(!isOpen){body.style.maxHeight=body.scrollHeight+'px';chevron.style.transform='rotate(180deg)';item.style.borderColor='rgba(1,215,253,0.35)';item.style.background='rgba(1,215,253,0.04)';}}
      
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
      
<div className="mobile-menu" id="mobileMenu">
<button className="mobile-menu-close" onclick="document.getElementById('mobileMenu').classList.remove('open')">
<svg fill="none" height="18" viewbox="0 0 18 18" width="18">
<path d="M14 4L4 14M4 4l10 10" stroke="rgba(1,215,253,0.8)" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</button>
<a href="#" onclick="document.getElementById('mobileMenu').classList.remove('open')">
        Home
      </a>
<a href="#" onclick="document.getElementById('mobileMenu').classList.remove('open')">
        About
      </a>
<a href="#glory-section" onclick="document.getElementById('mobileMenu').classList.remove('open')">
        How It Works
      </a>
<a href="#prizes-section" onclick="document.getElementById('mobileMenu').classList.remove('open')">
        Prizes
      </a>
<a href="#conduct-section" onclick="document.getElementById('mobileMenu').classList.remove('open')">
        Rules
      </a>
<a className="btn-primary" href="#" onclick="document.getElementById('mobileMenu').classList.remove('open')" style={{marginTop: '8px', fontSize: '12px', padding: '15px 32px', clipPath: 'polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)'}}>
        ⚔️ JOIN THE BATTLE
      </a>
</div>
<div className="cursor" id="cursor"></div>
<div className="cursor-ring" id="cursorRing"></div>
<div className="grid-bg"></div>
<div className="particles" id="particles"></div>
<header>
<div className="logo">
        PTWC
        <span>// WORLD CUP 2026</span>
</div>
<nav style={{display: 'flex', alignItems: 'center', gap: '0'}}>
<a href="#" onmouseenter="this.style.color='var(--neon)'" onmouseleave="this.style.color='rgba(255,255,255,0.55)'" style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '11px', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', textDecoration: 'none', padding: '8px 16px', transition: 'color 0.2s'}}>
          Home
        </a>
<a href="#" onmouseenter="this.style.color='var(--neon)'" onmouseleave="this.style.color='rgba(255,255,255,0.55)'" style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '11px', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', textDecoration: 'none', padding: '8px 16px', transition: 'color 0.2s'}}>
          About
        </a>
<a href="#glory-section" onmouseenter="this.style.color='var(--neon)'" onmouseleave="this.style.color='rgba(255,255,255,0.55)'" style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '11px', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', textDecoration: 'none', padding: '8px 16px', transition: 'color 0.2s'}}>
          How It Works
        </a>
<a href="#prizes-section" onmouseenter="this.style.color='var(--neon)'" onmouseleave="this.style.color='rgba(255,255,255,0.55)'" style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '11px', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', textDecoration: 'none', padding: '8px 16px', transition: 'color 0.2s'}}>
          Prizes
        </a>
<a href="#conduct-section" onmouseenter="this.style.color='var(--neon)'" onmouseleave="this.style.color='rgba(255,255,255,0.55)'" style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '11px', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', textDecoration: 'none', padding: '8px 16px', marginRight: '20px', transition: 'color 0.2s'}}>
          Rules
        </a>
<a className="btn-primary" href="#" style={{fontSize: '11px', padding: '13px 24px', clipPath: 'polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)', gap: '8px'}}>
<span className="flag" style={{fontSize: '13px'}}>⚔️</span>
          JOIN THE BATTLE
        </a>
</nav>
<button className="mobile-nav-toggle" onclick="document.getElementById('mobileMenu').classList.toggle('open')" style={{background: 'none', border: '1px solid rgba(1,215,253,0.25)', padding: '8px 10px', display: 'none', flexDirection: 'column', gap: '5px', cursor: 'pointer'}}>
<span style={{display: 'block', width: '20px', height: '1.5px', background: 'var(--neon)'}}></span>
<span style={{display: 'block', width: '20px', height: '1.5px', background: 'var(--neon)'}}></span>
<span style={{display: 'block', width: '14px', height: '1.5px', background: 'var(--neon)', marginLeft: '6px'}}></span>
</button>
</header>
<section className="hero">
<div className="hero-inner">
<div className="hero-left">
<div className="sponsor-tag">
<span>Organized &amp; Sponsored by</span>
<strong>HOLA PRIME</strong>
</div>
<div className="hero-eyebrow">
            The World's First Global Prop Tournament
          </div>
<div className="hero-main-logo">
<div className="logo-placeholder">
<div className="logo-sub">PROP TRADING</div>
<div className="logo-big">WORLD CUP</div>
<div className="logo-year">2026</div>
</div>
</div>
<div className="hero-sub">
<p>The world's first global prop trading tournament.</p>
<div className="highlight-line">
<div className="dot"></div>
<span>1 MILLION TRADERS</span>
<div className="dot"></div>
<span>48 COUNTRIES</span>
<div className="dot"></div>
<span>1 CHAMPION</span>
</div>
</div>
<div className="countdown-section">
<div className="countdown-label">// Tournament Begins In</div>
<div className="countdown" id="countdown">
<div className="countdown-unit">
<div className="countdown-num" id="cd-days">000</div>
<div className="countdown-lbl">Days</div>
</div>
<div className="countdown-sep">:</div>
<div className="countdown-unit">
<div className="countdown-num" id="cd-hours">00</div>
<div className="countdown-lbl">Hours</div>
</div>
<div className="countdown-sep">:</div>
<div className="countdown-unit">
<div className="countdown-num" id="cd-mins">00</div>
<div className="countdown-lbl">Mins</div>
</div>
<div className="countdown-sep">:</div>
<div className="countdown-unit">
<div className="countdown-num" id="cd-secs">00</div>
<div className="countdown-lbl">Secs</div>
</div>
</div>
</div>
<div className="btn-row">
<a className="btn-primary" href="#">
<span className="flag">🚩</span>
              CLAIM YOUR FLAG
              <span className="btn-price">$10 ENTRY</span>
</a>
<a className="btn-secondary" href="#">
<span className="play-icon"></span>
              WATCH TRAILER
            </a>
</div>
<div className="stats-bar">
<div className="stat-item">
<div className="stat-value">
<span>$1M</span>
                +
              </div>
<div className="stat-label">Prize Pool</div>
</div>
<div className="stat-item">
<div className="stat-value"><span>48</span></div>
<div className="stat-label">Countries</div>
</div>
<div className="stat-item">
<div className="stat-value">
<span>1M</span>
                +
              </div>
<div className="stat-label">Signups</div>
</div>
<div className="stat-item">
<div className="stat-value"><span>9</span></div>
<div className="stat-label">Weeks</div>
</div>
</div>
</div>
</div>
</section>
<section className="path-section">
<div className="path-inner">
<div className="section-header">
<div className="section-eyebrow">
<span className="eyebrow-line"></span>
<span>Select Your Division</span>
<span className="eyebrow-line"></span>
</div>
<h2 className="section-title">
            CHOOSE YOUR
            <span className="accent">PATH</span>
</h2>
<p className="section-sub">
            Whether you're just starting or a seasoned pro, the World Cup is
            your stage.
          </p>
</div>
<div className="path-cards">
<div className="path-card path-card--beginner">
<div className="card-tag">Option 1</div>
<div className="card-header">
<div className="card-icon">
<svg fill="none" height="28" viewbox="0 0 28 28" width="28">
<circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1.5"></circle>
<path d="M9 14l3.5 3.5L19 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<div className="card-level">BEGINNERS</div>
<div className="card-tagline">
                  Your First Trade. Your Country's Pride.
                </div>
</div>
</div>
<p className="card-desc">
              Imagine The FIFA World Cup — but for trading. Think of it like a
              massive online competition — like a video game tournament, but
              instead of playing games, people are trading virtual money in
              financial markets.
            </p>
<ul className="card-features">
<li>
<span className="feat-dot"></span>
                No real money is at risk. 100% simulated.
              </li>
<li>
<span className="feat-dot"></span>
                Get a virtual
                <strong>$50,000</strong>
                account to trade.
              </li>
<li>
<span className="feat-dot"></span>
                Represent your country's flag.
              </li>
<li>
<span className="feat-dot"></span>
                Fantasy Football meets the stock market.
              </li>
</ul>
<div className="card-platforms">
<span className="platforms-label">Platforms</span>
<span className="platforms-value platforms-na">Coming Soon</span>
</div>
<a className="card-btn card-btn--beginner" href="#">
              START YOUR JOURNEY
              <svg fill="none" height="16" viewbox="0 0 16 16" width="16">
<path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</a>
</div>
<div className="path-divider">
<div className="divider-line"></div>
<div className="divider-badge">VS</div>
<div className="divider-line"></div>
</div>
<div className="path-card path-card--elite">
<div className="card-tag card-tag--elite">Option 2</div>
<div className="card-header">
<div className="card-icon card-icon--elite">
<svg fill="none" height="28" viewbox="0 0 28 28" width="28">
<polygon points="14,3 17.5,10.5 26,11.5 20,17 21.5,25.5 14,21.5 6.5,25.5 8,17 2,11.5 10.5,10.5" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></polygon>
</svg>
</div>
<div>
<div className="card-level card-level--elite">ELITE TRADERS</div>
<div className="card-tagline">9 Weeks. One Champion.</div>
</div>
</div>
<p className="card-desc">
              A 9-week simulated trading tournament with strict risk parameters
              and a minimum consistency rule — built for traders who are ready
              to prove themselves on a global stage.
            </p>
<div className="elite-specs">
<div className="spec-item">
<div className="spec-label">Account Size</div>
<div className="spec-value">
                  $50K
                  <span>Virtual</span>
</div>
</div>
<div className="spec-item">
<div className="spec-label">Daily Drawdown</div>
<div className="spec-value">
                  3%
                  <span>Limit</span>
</div>
</div>
<div className="spec-item">
<div className="spec-label">Max Drawdown</div>
<div className="spec-value">
                  6%
                  <span>Limit</span>
</div>
</div>
<div className="spec-item">
<div className="spec-label">Min Trades/Round</div>
<div className="spec-value">
                  3
                  <span>Required</span>
</div>
</div>
</div>
<div className="card-platforms">
<span className="platforms-label">Platforms</span>
<div className="platform-pills">
<span className="platform-pill">MatchTrader</span>
<span className="platform-pill">DXTrade</span>
</div>
</div>
<a className="card-btn card-btn--elite" href="#">
              PROVE YOUR EDGE
              <svg fill="none" height="16" viewbox="0 0 16 16" width="16">
<path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</a>
</div>
</div>
</div>
</section>
<section id="glory-section" style={{position: 'relative', zIndex: '5'}}>
<div style={{position: 'relative', zIndex: '5', padding: '100px var(--px) 120px', overflow: 'hidden'}}>
<div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '1px', background: 'linear-gradient(90deg,transparent 0%,rgba(1,215,253,0.3) 30%,rgba(1,215,253,0.3) 70%,transparent 100%)'}}></div>
<div className="section-header" style={{marginBottom: '72px'}}>
<div className="section-eyebrow">
<span className="eyebrow-line"></span>
<span>The Journey</span>
<span className="eyebrow-line"></span>
</div>
<h2 className="section-title">
            THE ROAD TO
            <span className="accent">GLORY</span>
</h2>
<p className="section-sub">
            Your Journey From Sign-Up To World Champion. It's simpler than you
            think.
          </p>
</div>
<div style={{maxWidth: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px'}}>

<div className="glory-steps-top" style={{display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px'}}>

<div className="glory-card-inner" style={{border: '1px solid rgba(1,215,253,0.14)', background: 'rgba(2,6,16,0.85)', backdropFilter: 'blur(12px)', padding: '32px 28px 36px', display: 'flex', flexDirection: 'column', gap: '16px', clipPath: 'polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px))'}}>
<div className="step-meta">
<div className="step-num-badge">01</div>
<div className="step-progress-track">
<div className="step-progress-fill" style={{width: '20%'}}></div>
</div>
<div className="step-counter">1 / 5</div>
</div>
<div className="step-tag">Step 1</div>
<h3 className="step-title" style={{fontSize: 'clamp(16px,1.8vw,22px)'}}>
                REGISTER &amp; CLAIM FLAG
              </h3>
<p className="step-desc" style={{fontSize: '15px', lineHeight: '1.65'}}>
                Pay a $10 entry fee, complete basic identity verification (KYC),
                and select the country you'll represent.
              </p>
<div className="step-detail">
<div className="step-detail-label">// KEY DETAIL</div>
<p className="step-detail-text">
                  Valid ID, email &amp; $10. Registration open
                  <strong>May 1–30, 2026</strong>
                  .
                </p>
</div>
</div>

<div className="glory-card-inner" style={{border: '1px solid rgba(1,215,253,0.14)', background: 'rgba(2,6,16,0.85)', backdropFilter: 'blur(12px)', padding: '32px 28px 36px', display: 'flex', flexDirection: 'column', gap: '16px', clipPath: 'polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px))'}}>
<div className="step-meta">
<div className="step-num-badge">02</div>
<div className="step-progress-track">
<div className="step-progress-fill" style={{width: '40%'}}></div>
</div>
<div className="step-counter">2 / 5</div>
</div>
<div className="step-tag">Step 2</div>
<h3 className="step-title" style={{fontSize: 'clamp(16px,1.8vw,22px)'}}>
                RECEIVE YOUR ACCOUNT
              </h3>
<p className="step-desc" style={{fontSize: '15px', lineHeight: '1.65'}}>
                Once registered, you'll get a virtual trading account with
                $50,000 in simulated funds.
              </p>
<div className="step-detail">
<div className="step-detail-label">// KEY DETAIL</div>
<p className="step-detail-text">
<strong>Platform:</strong>
                  MatchTrader or DXtrade. Credentials via email.
                </p>
</div>
</div>

<div className="glory-card-inner" style={{border: '1px solid rgba(1,215,253,0.14)', background: 'rgba(2,6,16,0.85)', backdropFilter: 'blur(12px)', padding: '32px 28px 36px', display: 'flex', flexDirection: 'column', gap: '16px', clipPath: 'polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px))'}}>
<div className="step-meta">
<div className="step-num-badge">03</div>
<div className="step-progress-track">
<div className="step-progress-fill" style={{width: '60%'}}></div>
</div>
<div className="step-counter">3 / 5</div>
</div>
<div className="step-tag">Step 3</div>
<h3 className="step-title" style={{fontSize: 'clamp(16px,1.8vw,22px)'}}>
                COMPETE IN QUALIFIERS
              </h3>
<p className="step-desc" style={{fontSize: '15px', lineHeight: '1.65'}}>
                For 2 weeks (June 1–14), ALL registered traders trade
                simultaneously. The #1 trader from each of the 48 qualifying
                countries advances.
              </p>
<div className="step-detail">
<div className="step-detail-label">// KEY DETAIL</div>
<p className="step-detail-text">
                  Min 3 trades, active for 2+ days. No single trade &gt;50% of
                  total profit.
                </p>
</div>
</div>

<div className="glory-card-inner" style={{border: '1px solid rgba(1,215,253,0.14)', background: 'rgba(2,6,16,0.85)', backdropFilter: 'blur(12px)', padding: '32px 28px 36px', display: 'flex', flexDirection: 'column', gap: '16px', clipPath: 'polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px))'}}>
<div className="step-meta">
<div className="step-num-badge">04</div>
<div className="step-progress-track">
<div className="step-progress-fill" style={{width: '80%'}}></div>
</div>
<div className="step-counter">4 / 5</div>
</div>
<div className="step-tag">Step 4</div>
<h3 className="step-title" style={{fontSize: 'clamp(16px,1.8vw,22px)'}}>
                KNOCKOUT BRACKET
              </h3>
<p className="step-desc" style={{fontSize: '15px', lineHeight: '1.65'}}>
                The top 48 national champions enter a 1v1 bracket tournament.
                Each round, two traders compete head-to-head over 3–5 days.
              </p>
<div className="step-detail">
<div className="step-detail-label">// KEY DETAIL</div>
<p className="step-detail-text">
                  Opponent's trades are
                  <strong>HIDDEN</strong>
                  until the round ends. Anti-cheat monitors everything.
                </p>
</div>
</div>
</div>

<div className="glory-bottom-row" style={{display: 'grid', gridTemplateColumns: '65fr 35fr', gap: '20px', alignItems: 'stretch'}}>

<div className="glory-card-inner" style={{border: '1px solid rgba(255,196,0,0.22)', background: 'rgba(6,4,0,0.88)', backdropFilter: 'blur(12px)', padding: '40px 44px 44px', display: 'flex', flexDirection: 'column', gap: '18px', clipPath: 'polygon(0 0,calc(100% - 24px) 0,100% 24px,100% 100%,24px 100%,0 calc(100% - 24px))'}}>
<div className="step-meta">
<div className="step-num-badge step-num-badge--gold">05</div>
<div className="step-progress-track">
<div className="step-progress-fill step-progress-fill--gold" style={{width: '100%'}}></div>
</div>
<div className="step-counter">5 / 5</div>
</div>
<div className="step-tag step-tag--gold">Grand Final</div>
<h3 className="step-title step-title--gold">THE GRAND FINAL</h3>
<p className="step-desc" style={{fontSize: '16px', lineHeight: '1.7'}}>
                The last 2 standing fly to Dubai for a LIVE offline event. Trade
                on stage with giant screens showing live P&amp;L and heart rate.
                Broadcast live on
                <strong style={{color: '#fff'}}>YouTube and Twitch</strong>
                . Millions watch. One walks away as the World Champion.
              </p>
<div className="step-detail step-detail--gold">
<div className="step-detail-label">// KEY DETAIL</div>
<p className="step-detail-text">
                  Broadcast live on
                  <strong>YouTube and Twitch</strong>
                  . Millions watch. One walks away as the
                  <strong>World Champion</strong>
                  .
                </p>
</div>
<div className="final-badges">
<span className="final-badge">🏆 $1M+ PRIZE</span>
<span className="final-badge">📍 DUBAI</span>
<span className="final-badge">🔴 LIVE BROADCAST</span>
</div>
</div>

<div style={{border: '1px solid rgba(255,196,0,0.18)', background: 'rgba(6,4,0,0.7)', clipPath: 'polygon(0 0,calc(100% - 24px) 0,100% 24px,100% 100%,24px 100%,0 calc(100% - 24px))', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', position: 'relative', overflow: 'hidden', minHeight: '280px'}}>
<div style={{position: 'absolute', inset: '0', background: 'repeating-linear-gradient(45deg,transparent,transparent 12px,rgba(255,196,0,0.015) 12px,rgba(255,196,0,0.015) 24px)'}}></div>
<div style={{position: 'absolute', inset: '0', background: 'radial-gradient(ellipse at 50% 50%,rgba(255,196,0,0.06),transparent 70%)'}}></div>
<div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(255,196,0,0.4),transparent)'}}></div>
<div style={{position: 'absolute', top: '0', right: '0', width: '0', height: '0', borderTop: '24px solid rgba(255,196,0,0.25)', borderLeft: '24px solid transparent', zIndex: '2'}}></div>
<div style={{position: 'relative', zIndex: '1', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px'}}>
<svg fill="none" height="52" stroke="rgba(255,196,0,0.3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="52" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<circle cx="8.5" cy="8.5" r="1.5"></circle>
<polyline points="21 15 16 10 5 21"></polyline>
</svg>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '9px', letterSpacing: '0.4em', color: 'rgba(255,196,0,0.4)', textTransform: 'uppercase'}}>
                  Grand Final
                </div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(255,196,0,0.25)', textTransform: 'uppercase'}}>
                  Event Photo
                </div>
</div>
</div>
</div>
<style>
            @media (max-width: 1100px) {
            #glory-section .glory-steps-top { grid-template-columns: repeat(2,1fr) !important; }
            }
            @media (max-width: 900px) {
            #glory-section .glory-steps-top { grid-template-columns: 1fr !important; }
            #glory-section .glory-bottom-row { grid-template-columns: 1fr !important; }
            }
          </style>
</div>
</div>
</section>
<section className="funnel-section" id="funnel-section">
<div style={{position: 'relative', zIndex: '5', padding: '100px var(--px) 120px', overflow: 'hidden'}}>
<div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '1px', background: 'linear-gradient(90deg,transparent 0%,rgba(1,215,253,0.3) 30%,rgba(1,215,253,0.3) 70%,transparent 100%)'}}></div>
<div className="section-header" style={{marginBottom: '80px'}}>
<div className="section-eyebrow">
<span className="eyebrow-line"></span>
<span>The Numbers Don't Lie</span>
<span className="eyebrow-line"></span>
</div>
<h2 className="section-title">
            THE SURVIVAL
            <span className="accent">FUNNEL</span>
</h2>
<p className="section-sub">
            From 1 Million To 1 Champion. Only the strongest survive.
          </p>
</div>
<div id="funnel-container" style={{position: 'relative', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', gap: '0'}}>
<div className="funnel-step" data-funnel="0" style={{opacity: '0', transform: 'translateY(30px)', transition: 'opacity 0.6s ease, transform 0.6s ease', flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
<div style={{position: 'relative', width: '100%', padding: '20px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'}}>
<div onmouseenter="this.style.borderColor='rgba(1,215,253,0.4)';this.style.background='rgba(1,215,253,0.07)'" onmouseleave="this.style.borderColor='rgba(1,215,253,0.18)';this.style.background='rgba(1,215,253,0.04)'" style={{width: '100%', height: '260px', background: 'rgba(1, 215, 253, 0.04)', border: '1px solid rgba(1,215,253,0.18)', padding: '20px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', textAlign: 'center', transition: 'border-color 0.3s, background 0.3s', cursor: 'default'}}>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '10px', letterSpacing: '0.4em', color: 'rgba(1,215,253,0.45)', textTransform: 'uppercase'}}>
                  Registration
                </div>
<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2px', maxWidth: '160px', margin: '4px auto'}}>
<svg fill="rgba(1,215,253,0.35)" height="10" stroke="none" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.35)" height="10" stroke="none" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.35)" height="10" stroke="none" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.35)" height="10" stroke="none" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.35)" height="10" stroke="none" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.3)" height="10" stroke="none" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.3)" height="10" stroke="none" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.3)" height="10" stroke="none" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.3)" height="10" stroke="none" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.3)" height="10" stroke="none" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.25)" height="10" stroke="none" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.25)" height="10" stroke="none" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.25)" height="10" stroke="none" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.25)" height="10" stroke="none" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.25)" height="10" stroke="none" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.2)" height="10" stroke="none" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.2)" height="10" stroke="none" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.2)" height="10" stroke="none" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.2)" height="10" stroke="none" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.2)" height="10" stroke="none" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.15)" height="10" stroke="none" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.15)" height="10" stroke="none" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.15)" height="10" stroke="none" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.15)" height="10" stroke="none" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.15)" height="10" stroke="none" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: '700', color: '#fff', lineHeight: '1'}}>
<span style={{color: 'var(--neon)', textShadow: '0 0 15px rgba(1,215,253,0.5)'}}>
                    1,000,000
                  </span>
                  +
                </div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(1,215,253,0.4)', textTransform: 'uppercase'}}>
                  Traders
                </div>
<div style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '13px', fontWeight: '400', color: 'rgba(255,255,255,0.4)', marginTop: '4px'}}>
                  Global open registration
                </div>
</div>
</div>
</div>
<div className="funnel-connector" style={{display: 'flex', alignItems: 'center', position: 'relative', width: '40px', flexShrink: '0', opacity: '0', transition: 'opacity 0.4s ease 0.1s', marginBottom: '130px'}}>
<div style={{height: '1px', width: '100%', background: 'linear-gradient(90deg,rgba(1,215,253,0.25),rgba(1,215,253,0.1))'}}></div>
<svg fill="none" height="10" style={{position: 'absolute', right: '-4px', top: '50%', transform: 'translateY(-50%)'}} viewbox="0 0 8 10" width="8">
<path d="M8 5L0 0v10l8-5z" fill="rgba(1,215,253,0.3)"></path>
</svg>
</div>
<div className="funnel-step" data-funnel="1" style={{opacity: '0', transform: 'translateY(30px)', transition: 'opacity 0.6s ease, transform 0.6s ease', flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
<div style={{position: 'relative', width: '100%', padding: '20px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'}}>
<div onmouseenter="this.style.borderColor='rgba(1,215,253,0.4)';this.style.background='rgba(1,215,253,0.07)'" onmouseleave="this.style.borderColor='rgba(1,215,253,0.16)';this.style.background='rgba(1,215,253,0.04)'" style={{width: '100%', height: '260px', background: 'rgba(1, 215, 253, 0.04)', border: '1px solid rgba(1,215,253,0.16)', padding: '20px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', textAlign: 'center', transition: 'border-color 0.3s, background 0.3s', cursor: 'default'}}>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '10px', letterSpacing: '0.4em', color: 'rgba(1,215,253,0.45)', textTransform: 'uppercase'}}>
                  Qualifiers
                </div>
<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3px', maxWidth: '140px', margin: '6px auto'}}>
<svg fill="rgba(1,215,253,0.35)" height="11" stroke="none" viewbox="0 0 24 24" width="11" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.35)" height="11" stroke="none" viewbox="0 0 24 24" width="11" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.35)" height="11" stroke="none" viewbox="0 0 24 24" width="11" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.35)" height="11" stroke="none" viewbox="0 0 24 24" width="11" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.35)" height="11" stroke="none" viewbox="0 0 24 24" width="11" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.3)" height="11" stroke="none" viewbox="0 0 24 24" width="11" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.3)" height="11" stroke="none" viewbox="0 0 24 24" width="11" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.3)" height="11" stroke="none" viewbox="0 0 24 24" width="11" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.25)" height="11" stroke="none" viewbox="0 0 24 24" width="11" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.25)" height="11" stroke="none" viewbox="0 0 24 24" width="11" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.25)" height="11" stroke="none" viewbox="0 0 24 24" width="11" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.25)" height="11" stroke="none" viewbox="0 0 24 24" width="11" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: '700', color: '#fff', lineHeight: '1'}}>
<span style={{color: 'var(--neon)', textShadow: '0 0 15px rgba(1,215,253,0.5)'}}>
                    48
                  </span>
</div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(1,215,253,0.4)', textTransform: 'uppercase'}}>
                  Traders
                </div>
<div style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '13px', fontWeight: '400', color: 'rgba(255,255,255,0.4)', marginTop: '4px'}}>
                  Top 1 per country
                </div>
</div>
</div>
</div>
<div className="funnel-connector" style={{display: 'flex', alignItems: 'center', position: 'relative', width: '40px', flexShrink: '0', opacity: '0', transition: 'opacity 0.4s ease 0.15s', marginBottom: '130px'}}>
<div style={{height: '1px', width: '100%', background: 'linear-gradient(90deg,rgba(1,215,253,0.25),rgba(1,215,253,0.1))'}}></div>
<svg fill="none" height="10" style={{position: 'absolute', right: '-4px', top: '50%', transform: 'translateY(-50%)'}} viewbox="0 0 8 10" width="8">
<path d="M8 5L0 0v10l8-5z" fill="rgba(1,215,253,0.3)"></path>
</svg>
</div>
<div className="funnel-step" data-funnel="2" style={{opacity: '0', transform: 'translateY(30px)', transition: 'opacity 0.6s ease, transform 0.6s ease', flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
<div style={{position: 'relative', width: '100%', padding: '20px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'}}>
<div onmouseenter="this.style.borderColor='rgba(1,215,253,0.4)';this.style.background='rgba(1,215,253,0.07)'" onmouseleave="this.style.borderColor='rgba(1,215,253,0.14)';this.style.background='rgba(1,215,253,0.04)'" style={{width: '100%', height: '260px', background: 'rgba(1, 215, 253, 0.04)', border: '1px solid rgba(1,215,253,0.14)', padding: '20px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', textAlign: 'center', transition: 'border-color 0.3s, background 0.3s', cursor: 'default'}}>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '10px', letterSpacing: '0.4em', color: 'rgba(1,215,253,0.45)', textTransform: 'uppercase'}}>
                  Round of 48
                </div>
<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3px', maxWidth: '100px', margin: '8px auto'}}>
<svg fill="rgba(1,215,253,0.4)" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.4)" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.35)" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.35)" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.3)" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.3)" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: '700', color: '#fff', lineHeight: '1'}}>
<span style={{color: 'var(--neon)', textShadow: '0 0 15px rgba(1,215,253,0.5)'}}>
                    24
                  </span>
</div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(1,215,253,0.4)', textTransform: 'uppercase'}}>
                  Traders
                </div>
<div style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '13px', fontWeight: '400', color: 'rgba(255,255,255,0.4)', marginTop: '4px'}}>
                  1v1 bracket matches
                </div>
</div>
</div>
</div>
<div className="funnel-connector" style={{display: 'flex', alignItems: 'center', position: 'relative', width: '40px', flexShrink: '0', opacity: '0', transition: 'opacity 0.4s ease 0.2s', marginBottom: '130px'}}>
<div style={{height: '1px', width: '100%', background: 'linear-gradient(90deg,rgba(1,215,253,0.25),rgba(1,215,253,0.1))'}}></div>
<svg fill="none" height="10" style={{position: 'absolute', right: '-4px', top: '50%', transform: 'translateY(-50%)'}} viewbox="0 0 8 10" width="8">
<path d="M8 5L0 0v10l8-5z" fill="rgba(1,215,253,0.3)"></path>
</svg>
</div>
<div className="funnel-step" data-funnel="3" style={{opacity: '0', transform: 'translateY(30px)', transition: 'opacity 0.6s ease, transform 0.6s ease', flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
<div style={{position: 'relative', width: '100%', padding: '20px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'}}>
<div onmouseenter="this.style.borderColor='rgba(1,215,253,0.4)';this.style.background='rgba(1,215,253,0.07)'" onmouseleave="this.style.borderColor='rgba(1,215,253,0.14)';this.style.background='rgba(1,215,253,0.04)'" style={{width: '100%', height: '260px', background: 'rgba(1, 215, 253, 0.04)', border: '1px solid rgba(1,215,253,0.14)', padding: '20px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', textAlign: 'center', transition: 'border-color 0.3s, background 0.3s', cursor: 'default'}}>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '10px', letterSpacing: '0.4em', color: 'rgba(1,215,253,0.45)', textTransform: 'uppercase'}}>
                  Round of 24
                </div>
<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4px', maxWidth: '80px', margin: '8px auto'}}>
<svg fill="rgba(1,215,253,0.4)" height="13" stroke="none" viewbox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.4)" height="13" stroke="none" viewbox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.35)" height="13" stroke="none" viewbox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: '700', color: '#fff', lineHeight: '1'}}>
<span style={{color: 'var(--neon)', textShadow: '0 0 15px rgba(1,215,253,0.5)'}}>
                    12
                  </span>
</div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(1,215,253,0.4)', textTransform: 'uppercase'}}>
                  Traders
                </div>
<div style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '13px', fontWeight: '400', color: 'rgba(255,255,255,0.4)', marginTop: '4px'}}>
                  Weekly elimination
                </div>
</div>
</div>
</div>
<div className="funnel-connector" style={{display: 'flex', alignItems: 'center', position: 'relative', width: '40px', flexShrink: '0', opacity: '0', transition: 'opacity 0.4s ease 0.25s', marginBottom: '130px'}}>
<div style={{height: '1px', width: '100%', background: 'linear-gradient(90deg,rgba(1,215,253,0.25),rgba(1,215,253,0.1))'}}></div>
<svg fill="none" height="10" style={{position: 'absolute', right: '-4px', top: '50%', transform: 'translateY(-50%)'}} viewbox="0 0 8 10" width="8">
<path d="M8 5L0 0v10l8-5z" fill="rgba(1,215,253,0.3)"></path>
</svg>
</div>
<div className="funnel-step" data-funnel="4" style={{opacity: '0', transform: 'translateY(30px)', transition: 'opacity 0.6s ease, transform 0.6s ease', flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
<div style={{position: 'relative', width: '100%', padding: '20px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'}}>
<div onmouseenter="this.style.borderColor='rgba(1,215,253,0.45)';this.style.background='rgba(1,215,253,0.08)'" onmouseleave="this.style.borderColor='rgba(1,215,253,0.16)';this.style.background='rgba(1,215,253,0.05)'" style={{width: '100%', height: '260px', background: 'rgba(1, 215, 253, 0.05)', border: '1px solid rgba(1,215,253,0.16)', padding: '20px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', textAlign: 'center', transition: 'border-color 0.3s, background 0.3s', cursor: 'default'}}>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '10px', letterSpacing: '0.4em', color: 'rgba(1,215,253,0.45)', textTransform: 'uppercase'}}>
                  Quarter-Finals
                </div>
<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '5px', margin: '10px auto'}}>
<svg fill="rgba(1,215,253,0.45)" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.45)" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.4)" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(1,215,253,0.4)" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: '700', color: '#fff', lineHeight: '1'}}>
<span style={{color: 'var(--neon)', textShadow: '0 0 15px rgba(1,215,253,0.5)'}}>
                    4
                  </span>
</div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(1,215,253,0.4)', textTransform: 'uppercase'}}>
                  Traders
                </div>
<div style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '13px', fontWeight: '400', color: 'rgba(255,255,255,0.4)', marginTop: '4px'}}>
                  Best of the best
                </div>
</div>
</div>
</div>
<div className="funnel-connector" style={{display: 'flex', alignItems: 'center', position: 'relative', width: '40px', flexShrink: '0', opacity: '0', transition: 'opacity 0.4s ease 0.3s', marginBottom: '130px'}}>
<div style={{height: '1px', width: '100%', background: 'linear-gradient(90deg,rgba(1,215,253,0.25),rgba(255,196,0,0.15))'}}></div>
<svg fill="none" height="10" style={{position: 'absolute', right: '-4px', top: '50%', transform: 'translateY(-50%)'}} viewbox="0 0 8 10" width="8">
<path d="M8 5L0 0v10l8-5z" fill="rgba(255,196,0,0.35)"></path>
</svg>
</div>
<div className="funnel-step" data-funnel="5" style={{opacity: '0', transform: 'translateY(30px)', transition: 'opacity 0.6s ease, transform 0.6s ease', flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
<div style={{position: 'relative', width: '100%', padding: '20px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'}}>
<div onmouseenter="this.style.borderColor='rgba(255,196,0,0.45)';this.style.background='rgba(255,196,0,0.06)'" onmouseleave="this.style.borderColor='rgba(255,196,0,0.2)';this.style.background='rgba(255,196,0,0.03)'" style={{width: '100%', height: '260px', background: 'rgba(255, 196, 0, 0.03)', border: '1px solid rgba(255,196,0,0.2)', padding: '20px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', textAlign: 'center', transition: 'border-color 0.3s, background 0.3s', cursor: 'default'}}>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '10px', letterSpacing: '0.4em', color: 'rgba(255,196,0,0.6)', textTransform: 'uppercase'}}>
                  Semi-Finals
                </div>
<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', margin: '10px auto'}}>
<svg fill="rgba(255,196,0,0.5)" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle></svg><svg fill="rgba(255,196,0,0.5)" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: '700', color: '#ffc400', lineHeight: '1', textShadow: '0 0 15px rgba(255,196,0,0.5)'}}>
                  2
                </div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(255,196,0,0.5)', textTransform: 'uppercase'}}>
                  Traders
                </div>
<div style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '13px', fontWeight: '400', color: 'rgba(255,255,255,0.4)', marginTop: '4px'}}>
                  Two finalists emerge
                </div>
</div>
</div>
</div>
<div className="funnel-connector" style={{display: 'flex', alignItems: 'center', position: 'relative', width: '40px', flexShrink: '0', opacity: '0', transition: 'opacity 0.4s ease 0.35s', marginBottom: '130px'}}>
<div style={{height: '1px', width: '100%', background: 'linear-gradient(90deg,rgba(255,196,0,0.25),rgba(255,196,0,0.15))'}}></div>
<svg fill="none" height="10" style={{position: 'absolute', right: '-4px', top: '50%', transform: 'translateY(-50%)'}} viewbox="0 0 8 10" width="8">
<path d="M8 5L0 0v10l8-5z" fill="rgba(255,196,0,0.45)"></path>
</svg>
</div>
<div className="funnel-step" data-funnel="6" style={{opacity: '0', transform: 'translateY(30px)', transition: 'opacity 0.6s ease, transform 0.6s ease', flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
<div style={{position: 'relative', width: '100%', padding: '20px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'}}>
<div onmouseenter="this.style.borderColor='rgba(255,196,0,0.6)';this.style.background='rgba(255,196,0,0.1)';this.style.boxShadow='0 0 40px rgba(255,196,0,0.15)'" onmouseleave="this.style.borderColor='rgba(255,196,0,0.35)';this.style.background='rgba(255,196,0,0.06)';this.style.boxShadow='none'" style={{width: '100%', height: '260px', background: 'rgba(255, 196, 0, 0.06)', border: '1px solid rgba(255,196,0,0.35)', padding: '20px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', textAlign: 'center', transition: 'border-color 0.3s, background 0.3s, box-shadow 0.3s', cursor: 'default'}}>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '10px', letterSpacing: '0.4em', color: 'rgba(255,196,0,0.7)', textTransform: 'uppercase'}}>
                  Grand Final
                </div>
<div style={{display: 'flex', justifyContent: 'center', margin: '8px auto'}}>
<svg fill="rgba(255,196,0,0.6)" height="28" stroke="none" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: '700', color: '#ffc400', lineHeight: '1', textShadow: '0 0 15px rgba(255,196,0,0.5)'}}>
                  1
                </div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(255,196,0,0.5)', textTransform: 'uppercase'}}>
                  Trader
                </div>
<div style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '13px', fontWeight: '400', color: 'rgba(255,255,255,0.4)', marginTop: '4px'}}>
                  🏆 World Champion
                </div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="prizes-section" id="prizes-section">
<div style={{position: 'relative', zIndex: '5', padding: '100px var(--px) 80px', overflow: 'hidden'}}>
<div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '1px', background: 'linear-gradient(90deg,transparent 0%,rgba(255,196,0,0.4) 30%,rgba(255,196,0,0.4) 70%,transparent 100%)'}}></div>

<div style={{position: 'absolute', top: '-200px', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '800px', background: 'radial-gradient(ellipse,rgba(255,196,0,0.06) 0%,rgba(1,215,253,0.03) 40%,transparent 70%)', pointerEvents: 'none'}}></div>
<div className="section-header" style={{marginBottom: '80px'}}>
<div className="section-eyebrow">
<span className="eyebrow-line" style={{background: 'linear-gradient(90deg,transparent,rgba(255,196,0,0.5))'}}></span>
<span style={{color: 'rgba(255,196,0,0.6)'}}>The Spoils Of War</span>
<span className="eyebrow-line" style={{background: 'linear-gradient(90deg, transparent, rgba(255, 196, 0, 0.5))', transform: 'scaleX(-1)'}}></span>
</div>
<h2 className="section-title" style={{letterSpacing: '0.05em'}}>
            LIFE-CHANGING
            <span style={{color: '#ffc400', textShadow: '0 0 30px rgba(255, 196, 0, 0.4), 0 0 80px rgba(255,196,0,0.15)'}}>
              REWARDS
            </span>
</h2>
<p className="section-sub">
            For The World's Elite. Real Cash. Real Capital.
          </p>
</div>

<div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '20px', maxWidth: '1000px', margin: '0 auto 100px', flexWrap: 'wrap'}}>

<div className="prize-card" style={{flex: '1', minWidth: '260px', maxWidth: '300px', order: '1', opacity: '0', transform: 'translateY(40px)', transition: 'opacity 0.7s ease, transform 0.7s ease'}}>
<div onmouseenter="this.style.borderColor='rgba(1,215,253,0.45)';this.style.boxShadow='0 0 40px rgba(1,215,253,0.12)'" onmouseleave="this.style.borderColor='rgba(1,215,253,0.2)';this.style.boxShadow='none'" style={{position: 'relative', border: '1px solid rgba(1,215,253,0.2)', background: 'linear-gradient(180deg,rgba(1,215,253,0.06) 0%,rgba(1,215,253,0.01) 100%)', clipPath: 'polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,16px 100%,0 calc(100% - 16px))', padding: '0', overflow: 'hidden', transition: 'border-color 0.3s, box-shadow 0.3s'}}>

<div style={{background: 'linear-gradient(135deg, rgba(1, 215, 253, 0.12), rgba(1, 215, 253, 0.04))', padding: '16px 24px 12px', borderBottom: '1px solid rgba(1,215,253,0.1)', textAlign: 'center'}}>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '10px', letterSpacing: '0.4em', color: 'rgba(1,215,253,0.5)', textTransform: 'uppercase', marginBottom: '4px'}}>
                  3rd Place
                </div>
<div style={{fontSize: '36px', lineHeight: '1', marginBottom: '6px'}}>
                  🥉
                </div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: '15px', fontWeight: '700', color: 'var(--neon)', letterSpacing: '0.08em', textTransform: 'uppercase'}}>
                  2nd Runner Up
                </div>
</div>

<div style={{width: '100%', aspectRatio: '4/3', background: 'linear-gradient(135deg, rgba(1, 215, 253, 0.04), rgba(2, 6, 16, 0.9))', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid rgba(1,215,253,0.08)', position: 'relative', overflow: 'hidden'}}>
<div style={{position: 'absolute', inset: '0', background: 'repeating-linear-gradient(45deg,transparent,transparent 10px,rgba(1,215,253,0.02) 10px,rgba(1,215,253,0.02) 20px)'}}></div>
<div style={{textAlign: 'center', position: 'relative', zIndex: '1'}}>
<svg fill="none" height="48" stroke="rgba(1,215,253,0.25)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<circle cx="8.5" cy="8.5" r="1.5"></circle>
<polyline points="21 15 16 10 5 21"></polyline>
</svg>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(1,215,253,0.25)', textTransform: 'uppercase', marginTop: '8px'}}>
                    Prize Photo
                  </div>
</div>
</div>

<div style={{padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 16px', background: 'rgba(1, 215, 253, 0.04)', border: '1px solid rgba(1,215,253,0.1)'}}>
<div style={{width: '8px', height: '8px', background: 'var(--neon)', boxShadow: '0 0 12px var(--neon)', borderRadius: '1px', flexShrink: '0'}}></div>
<div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: 'clamp(20px,2.5vw,26px)', fontWeight: '700', color: '#fff', lineHeight: '1'}}>
<span style={{color: 'var(--neon)', textShadow: '0 0 20px rgba(1,215,253,0.5)'}}>
                        $5,000
                      </span>
</div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(1,215,253,0.45)', textTransform: 'uppercase', marginTop: '2px'}}>
                      Cash Prize
                    </div>
</div>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 16px', background: 'rgba(1, 215, 253, 0.04)', border: '1px solid rgba(1,215,253,0.1)'}}>
<div style={{width: '8px', height: '8px', background: 'var(--neon)', boxShadow: '0 0 12px var(--neon)', borderRadius: '1px', flexShrink: '0'}}></div>
<div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: 'clamp(18px,2vw,22px)', fontWeight: '700', color: '#fff', lineHeight: '1'}}>
<span style={{color: 'var(--neon)', textShadow: '0 0 20px rgba(1,215,253,0.5)'}}>
                        $50K
                      </span>
</div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(1,215,253,0.45)', textTransform: 'uppercase', marginTop: '2px'}}>
                      Funded Trading Account
                    </div>
</div>
</div>
</div>
</div>
</div>

<div className="prize-card" style={{flex: '1', minWidth: '280px', maxWidth: '340px', order: '2', opacity: '0', transform: 'translateY(40px)', transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s'}}>
<div onmouseenter="this.style.borderColor='rgba(255,196,0,0.6)';this.style.boxShadow='0 0 80px rgba(255,196,0,0.2),0 0 160px rgba(255,196,0,0.06)'" onmouseleave="this.style.borderColor='rgba(255,196,0,0.35)';this.style.boxShadow='0 0 60px rgba(255,196,0,0.08),0 0 120px rgba(255,196,0,0.03)'" style={{position: 'relative', border: '1px solid rgba(255, 196, 0, 0.35)', background: 'linear-gradient(180deg, rgba(255, 196, 0, 0.08) 0%, rgba(255, 196, 0, 0.01) 100%)', clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))', padding: '0', overflow: 'hidden', transition: 'border-color 0.3s, box-shadow 0.3s', boxShadow: '0 0 60px rgba(255, 196, 0, 0.08), 0 0 120px rgba(255,196,0,0.03)'}}>

<div style={{position: 'absolute', top: '0', right: '0', width: '0', height: '0', borderTop: '20px solid rgba(255,196,0,0.3)', borderLeft: '20px solid transparent', zIndex: '2'}}></div>

<div style={{position: 'absolute', top: '-1px', left: '0', right: '0', height: '2px', background: 'linear-gradient(90deg,transparent,rgba(255,196,0,0.6),transparent)', animation: 'shimmer 3s ease-in-out infinite'}}></div>

<div style={{background: 'linear-gradient(135deg, rgba(255, 196, 0, 0.15), rgba(255, 196, 0, 0.04))', padding: '20px 24px 16px', borderBottom: '1px solid rgba(255,196,0,0.15)', textAlign: 'center', position: 'relative'}}>
<div style={{position: 'absolute', inset: '0', background: 'radial-gradient(ellipse at 50% 0%,rgba(255,196,0,0.1),transparent 70%)', pointerEvents: 'none'}}></div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '10px', letterSpacing: '0.5em', color: 'rgba(255,196,0,0.7)', textTransform: 'uppercase', marginBottom: '6px', position: 'relative'}}>
                  World Champion
                </div>
<div style={{fontSize: '48px', lineHeight: '1', marginBottom: '8px', filter: 'drop-shadow(0 0 20px rgba(255,196,0,0.4))', position: 'relative'}}>
                  🏆
                </div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: '18px', fontWeight: '800', color: '#ffc400', letterSpacing: '0.1em', textTransform: 'uppercase', textShadow: '0 0 30px rgba(255,196,0,0.5)', position: 'relative'}}>
                  THE GOLDEN BULL
                </div>
</div>

<div style={{width: '100%', aspectRatio: '4/3', background: 'linear-gradient(135deg, rgba(255, 196, 0, 0.04), rgba(2, 6, 16, 0.9))', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid rgba(255,196,0,0.1)', position: 'relative', overflow: 'hidden'}}>
<div style={{position: 'absolute', inset: '0', background: 'repeating-linear-gradient(45deg,transparent,transparent 10px,rgba(255,196,0,0.015) 10px,rgba(255,196,0,0.015) 20px)'}}></div>
<div style={{position: 'absolute', inset: '0', background: 'radial-gradient(ellipse at 50% 50%,rgba(255,196,0,0.06),transparent 70%)'}}></div>
<div style={{textAlign: 'center', position: 'relative', zIndex: '1'}}>
<svg fill="none" height="56" stroke="rgba(255,196,0,0.3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="56" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<circle cx="8.5" cy="8.5" r="1.5"></circle>
<polyline points="21 15 16 10 5 21"></polyline>
</svg>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(255,196,0,0.3)', textTransform: 'uppercase', marginTop: '8px'}}>
                    Prize Photo
                  </div>
</div>
</div>

<div style={{padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '14px'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '16px 18px', background: 'rgba(255, 196, 0, 0.06)', border: '1px solid rgba(255,196,0,0.18)'}}>
<div style={{width: '10px', height: '10px', background: '#ffc400', boxShadow: '0 0 16px rgba(255,196,0,0.6)', borderRadius: '1px', flexShrink: '0'}}></div>
<div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '700', color: '#ffc400', lineHeight: '1', textShadow: '0 0 25px rgba(255,196,0,0.5)'}}>
                      $25,000
                    </div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(255,196,0,0.6)', textTransform: 'uppercase', marginTop: '3px'}}>
                      Cash Prize
                    </div>
</div>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '16px 18px', background: 'rgba(255, 196, 0, 0.06)', border: '1px solid rgba(255,196,0,0.18)'}}>
<div style={{width: '10px', height: '10px', background: '#ffc400', boxShadow: '0 0 16px rgba(255,196,0,0.6)', borderRadius: '1px', flexShrink: '0'}}></div>
<div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: 'clamp(22px, 2.5vw, 28px)', fontWeight: '700', color: '#ffc400', lineHeight: '1', textShadow: '0 0 25px rgba(255,196,0,0.5)'}}>
                      $250K
                    </div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(255,196,0,0.6)', textTransform: 'uppercase', marginTop: '3px'}}>
                      Funded Trading Account
                    </div>
</div>
</div>
</div>
</div>
</div>

<div className="prize-card" style={{flex: '1', minWidth: '260px', maxWidth: '300px', order: '3', opacity: '0', transform: 'translateY(40px)', transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s'}}>
<div onmouseenter="this.style.borderColor='rgba(192,192,192,0.45)';this.style.boxShadow='0 0 40px rgba(192,192,192,0.1)'" onmouseleave="this.style.borderColor='rgba(192,192,192,0.2)';this.style.boxShadow='none'" style={{position: 'relative', border: '1px solid rgba(192,192,192,0.2)', background: 'linear-gradient(180deg,rgba(192,192,192,0.06) 0%,rgba(192,192,192,0.01) 100%)', clipPath: 'polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,16px 100%,0 calc(100% - 16px))', padding: '0', overflow: 'hidden', transition: 'border-color 0.3s, box-shadow 0.3s'}}>

<div style={{background: 'linear-gradient(135deg, rgba(192, 192, 192, 0.1), rgba(192, 192, 192, 0.03))', padding: '16px 24px 12px', borderBottom: '1px solid rgba(192,192,192,0.1)', textAlign: 'center'}}>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '10px', letterSpacing: '0.4em', color: 'rgba(192,192,192,0.6)', textTransform: 'uppercase', marginBottom: '4px'}}>
                  2nd Place
                </div>
<div style={{fontSize: '36px', lineHeight: '1', marginBottom: '6px'}}>
                  🥈
                </div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: '15px', fontWeight: '700', color: 'rgba(192,192,192,0.9)', letterSpacing: '0.08em', textTransform: 'uppercase'}}>
                  1st Runner Up
                </div>
</div>

<div style={{width: '100%', aspectRatio: '4/3', background: 'linear-gradient(135deg, rgba(192, 192, 192, 0.03), rgba(2, 6, 16, 0.9))', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid rgba(192,192,192,0.08)', position: 'relative', overflow: 'hidden'}}>
<div style={{position: 'absolute', inset: '0', background: 'repeating-linear-gradient(45deg,transparent,transparent 10px,rgba(192,192,192,0.015) 10px,rgba(192,192,192,0.015) 20px)'}}></div>
<div style={{textAlign: 'center', position: 'relative', zIndex: '1'}}>
<svg fill="none" height="48" stroke="rgba(192,192,192,0.25)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<circle cx="8.5" cy="8.5" r="1.5"></circle>
<polyline points="21 15 16 10 5 21"></polyline>
</svg>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(192,192,192,0.25)', textTransform: 'uppercase', marginTop: '8px'}}>
                    Prize Photo
                  </div>
</div>
</div>

<div style={{padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 16px', background: 'rgba(192, 192, 192, 0.04)', border: '1px solid rgba(192,192,192,0.12)'}}>
<div style={{width: '8px', height: '8px', background: 'rgba(192, 192, 192, 0.8)', boxShadow: '0 0 12px rgba(192,192,192,0.4)', borderRadius: '1px', flexShrink: '0'}}></div>
<div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: 'clamp(20px,2.5vw,26px)', fontWeight: '700', color: '#fff', lineHeight: '1'}}>
<span style={{color: 'rgba(192, 192, 192, 0.9)', textShadow: '0 0 20px rgba(192,192,192,0.4)'}}>
                        $10,000
                      </span>
</div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(192,192,192,0.5)', textTransform: 'uppercase', marginTop: '2px'}}>
                      Cash Prize
                    </div>
</div>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 16px', background: 'rgba(192, 192, 192, 0.04)', border: '1px solid rgba(192,192,192,0.12)'}}>
<div style={{width: '8px', height: '8px', background: 'rgba(192, 192, 192, 0.8)', boxShadow: '0 0 12px rgba(192,192,192,0.4)', borderRadius: '1px', flexShrink: '0'}}></div>
<div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: 'clamp(18px,2vw,22px)', fontWeight: '700', color: '#fff', lineHeight: '1'}}>
<span style={{color: 'rgba(192, 192, 192, 0.9)', textShadow: '0 0 20px rgba(192,192,192,0.4)'}}>
                        $100K
                      </span>
</div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(192,192,192,0.5)', textTransform: 'uppercase', marginTop: '2px'}}>
                      Funded Trading Account
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>

<div style={{maxWidth: '900px', margin: '0 auto 80px'}}>
<div style={{textAlign: 'center', marginBottom: '40px'}}>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '11px', letterSpacing: '0.5em', color: 'rgba(1,215,253,0.5)', textTransform: 'uppercase', marginBottom: '12px'}}>
              // Additional Rewards
            </div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: 'clamp(22px,3vw,32px)', fontWeight: '800', color: '#fff', letterSpacing: '0.05em', textTransform: 'uppercase'}}>
              ELITE
              <span style={{color: 'var(--neon)', textShadow: '0 0 20px rgba(1,215,253,0.4)'}}>
                PERKS
              </span>
</div>
</div>
<div id="perks-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px'}}>

<div className="perk-card" onmouseenter="this.style.borderColor='rgba(1,215,253,0.3)';this.style.background='rgba(1,215,253,0.05)'" onmouseleave="this.style.borderColor='rgba(1,215,253,0.12)';this.style.background='rgba(1,215,253,0.02)'" style={{opacity: '0', transform: 'translateY(20px)', transition: 'opacity 0.5s ease,transform 0.5s ease', border: '1px solid rgba(1,215,253,0.12)', background: 'rgba(1,215,253,0.02)', padding: '28px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '12px', clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))', transition: 'opacity 0.5s ease, transform 0.5s ease, border-color 0.3s, background 0.3s'}}>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '10px', letterSpacing: '0.35em', color: 'rgba(1,215,253,0.5)', textTransform: 'uppercase'}}>
                11th - 25th Place
              </div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: '16px', fontWeight: '700', color: 'var(--neon)', letterSpacing: '0.05em', textShadow: '0 0 15px rgba(1,215,253,0.4)', textTransform: 'uppercase'}}>
                Free Funded Accounts
              </div>
<div style={{width: '40px', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(1,215,253,0.3),transparent)'}}></div>
<svg fill="none" height="28" stroke="rgba(1,215,253,0.4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
</div>

<div className="perk-card" onmouseenter="this.style.borderColor='rgba(1,215,253,0.3)';this.style.background='rgba(1,215,253,0.05)'" onmouseleave="this.style.borderColor='rgba(1,215,253,0.12)';this.style.background='rgba(1,215,253,0.02)'" style={{opacity: '0', transform: 'translateY(20px)', transition: 'opacity 0.5s ease 0.1s,transform 0.5s ease 0.1s', border: '1px solid rgba(1,215,253,0.12)', background: 'rgba(1,215,253,0.02)', padding: '28px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '12px', clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))', transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s, border-color 0.3s, background 0.3s'}}>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '10px', letterSpacing: '0.35em', color: 'rgba(1,215,253,0.5)', textTransform: 'uppercase'}}>
                26th - 48th Place
              </div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: '16px', fontWeight: '700', color: 'var(--neon)', letterSpacing: '0.05em', textShadow: '0 0 15px rgba(1,215,253,0.4)', textTransform: 'uppercase'}}>
                50% Discount Vouchers
              </div>
<div style={{width: '40px', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(1,215,253,0.3),transparent)'}}></div>
<svg fill="none" height="28" stroke="rgba(1,215,253,0.4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
<path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
<path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
</svg>
</div>

<div className="perk-card" onmouseenter="this.style.borderColor='rgba(1,215,253,0.3)';this.style.background='rgba(1,215,253,0.05)'" onmouseleave="this.style.borderColor='rgba(1,215,253,0.12)';this.style.background='rgba(1,215,253,0.02)'" style={{opacity: '0', transform: 'translateY(20px)', transition: 'opacity 0.5s ease 0.2s,transform 0.5s ease 0.2s', border: '1px solid rgba(1,215,253,0.12)', background: 'rgba(1,215,253,0.02)', padding: '28px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '12px', clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))', transition: 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s, border-color 0.3s, background 0.3s'}}>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '10px', letterSpacing: '0.35em', color: 'rgba(1,215,253,0.5)', textTransform: 'uppercase'}}>
                Top 48 Finalists
              </div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: '16px', fontWeight: '700', color: 'var(--neon)', letterSpacing: '0.05em', textShadow: '0 0 15px rgba(1,215,253,0.4)', textTransform: 'uppercase'}}>
                Official Physical Jersey
              </div>
<div style={{width: '40px', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(1,215,253,0.3),transparent)'}}></div>
<svg fill="none" height="28" stroke="rgba(1,215,253,0.4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M20.38 3.46 16 2 12 5 8 2 3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23Z"></path>
</svg>
</div>
</div>
</div>

<div style={{maxWidth: '760px', margin: '0 auto'}}>
<div id="funded-explainer" style={{border: '1px solid rgba(1,215,253,0.15)', background: 'linear-gradient(135deg,rgba(1,215,253,0.04),rgba(1,215,253,0.01))', clipPath: 'polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px))', padding: '36px 40px', position: 'relative', overflow: 'hidden'}}>
<div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(1,215,253,0.4),transparent)', opacity: '0.6'}}></div>
<div style={{position: 'absolute', top: '0', right: '0', width: '0', height: '0', borderTop: '20px solid rgba(1,215,253,0.15)', borderLeft: '20px solid transparent'}}></div>
<div style={{display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap'}}>
<div style={{flexShrink: '0', width: '48px', height: '48px', border: '1px solid rgba(1,215,253,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(1,215,253,0.05)', clipPath: 'polygon(6px 0%,100% 0%,100% calc(100% - 6px),calc(100% - 6px) 100%,0% 100%,0% 6px)'}}>
<svg fill="none" height="24" stroke="rgba(1,215,253,0.7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
<line x1="12" x2="12.01" y1="17" y2="17"></line>
</svg>
</div>
<div style={{flex: '1', minWidth: '240px'}}>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: '14px', fontWeight: '700', color: 'var(--neon)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px'}}>
                  What Is A "Funded Account"?
                </div>
<p style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '1.7', color: 'rgba(255,255,255,0.6)', margin: '0'}}>
<strong style={{color: '#fff'}}>Hola Prime</strong>
                  provides the capital. You trade it. You keep up to
                  <strong style={{color: 'var(--neon)'}}>90% of the profits</strong>
                  . We cover
                  <strong style={{color: '#fff'}}>100% of the losses</strong>
                  . It's the ultimate professional trading career jumpstart —
                  trade big money without risking a cent of your own.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section id="theater-section" style={{position: 'relative', zIndex: '5'}}>
<div style={{position: 'relative', zIndex: '5', padding: '100px var(--px) 120px', overflow: 'hidden'}}>
<div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '1px', background: 'linear-gradient(90deg,transparent 0%,rgba(255,196,0,0.4) 30%,rgba(255,196,0,0.4) 70%,transparent 100%)'}}></div>
<div style={{position: 'absolute', top: '-200px', left: '50%', transform: 'translateX(-50%)', width: '1000px', height: '700px', background: 'radial-gradient(ellipse,rgba(255,196,0,0.05) 0%,rgba(1,215,253,0.03) 40%,transparent 70%)', pointerEvents: 'none'}}></div>

<div className="section-header" style={{marginBottom: '80px'}}>
<div className="section-eyebrow">
<span className="eyebrow-line" style={{background: 'linear-gradient(90deg,transparent,rgba(255,196,0,0.5))'}}></span>
<span style={{color: 'rgba(255,196,0,0.6)'}}>
              The Pinnacle Of Trading
            </span>
<span className="eyebrow-line" style={{background: 'linear-gradient(90deg, transparent, rgba(255, 196, 0, 0.5))', transform: 'scaleX(-1)'}}></span>
</div>
<h2 className="section-title" style={{letterSpacing: '0.05em'}}>
            THE TRADING
            <span style={{color: '#ffc400', textShadow: '0 0 30px rgba(255, 196, 0, 0.4), 0 0 80px rgba(255,196,0,0.15)'}}>
              THEATER
            </span>
</h2>
<p className="section-sub">
            Live in Dubai. The final two traders face off in a custom-built
            arena.
            <br/>
<span style={{color: 'rgba(255,255,255,0.35)'}}>
              High stakes. High pressure. Global audience.
            </span>
</p>
</div>

<div style={{display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '1100px', margin: '0 auto'}}>

<div style={{position: 'relative', border: '1px solid rgba(255,196,0,0.25)', background: 'linear-gradient(160deg,rgba(255,196,0,0.05) 0%,rgba(2,6,16,0.95) 60%)', clipPath: 'polygon(0 0,calc(100% - 28px) 0,100% 28px,100% 100%,28px 100%,0 calc(100% - 28px))', overflow: 'hidden', width: '100%'}}>

<div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '2px', background: 'linear-gradient(90deg,transparent,rgba(255,196,0,0.7),transparent)', animation: 'shimmer 3s ease-in-out infinite'}}></div>

<div style={{position: 'absolute', top: '0', right: '0', width: '0', height: '0', borderTop: '28px solid rgba(255,196,0,0.35)', borderLeft: '28px solid transparent', zIndex: '2'}}></div>

<div style={{position: 'absolute', inset: '0', backgroundImage: 'linear-gradient(rgba(255,196,0,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,196,0,0.025) 1px,transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div style={{position: 'absolute', inset: '0', background: 'radial-gradient(ellipse 70% 60% at 50% 40%,rgba(255,196,0,0.07) 0%,transparent 70%)', pointerEvents: 'none'}}></div>

<div style={{position: 'relative', zIndex: '2', padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,196,0,0.1)'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
<div style={{width: '8px', height: '8px', background: '#ff4444', borderRadius: '50%', boxShadow: '0 0 10px rgba(255,68,68,0.8)', animation: 'pulse 1.5s ease-in-out infinite'}}></div>
<span style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '10px', letterSpacing: '0.4em', color: 'rgba(255,68,68,0.9)', textTransform: 'uppercase'}}>
                  Live Broadcast
                </span>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '10px', letterSpacing: '0.25em', color: 'rgba(255,196,0,0.6)'}}>
                  📍 DUBAI 2026
                </div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(1,215,253,0.5)'}}>
                  YOUTUBE · TWITCH
                </div>
</div>
</div>

<div style={{position: 'relative', zIndex: '2', width: '100%', aspectRatio: '16/9', background: 'rgba(0,0,0,0.55)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px'}}>

<div style={{position: 'absolute', inset: '0', background: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.08) 3px,rgba(0,0,0,0.08) 4px)', pointerEvents: 'none'}}></div>

<div style={{position: 'absolute', top: '16px', left: '16px', width: '28px', height: '28px', borderTop: '2px solid rgba(255, 196, 0, 0.5)', borderLeft: '2px solid rgba(255,196,0,0.5)'}}></div>
<div style={{position: 'absolute', top: '16px', right: '16px', width: '28px', height: '28px', borderTop: '2px solid rgba(255, 196, 0, 0.5)', borderRight: '2px solid rgba(255,196,0,0.5)'}}></div>
<div style={{position: 'absolute', bottom: '16px', left: '16px', width: '28px', height: '28px', borderBottom: '2px solid rgba(255, 196, 0, 0.5)', borderLeft: '2px solid rgba(255,196,0,0.5)'}}></div>
<div style={{position: 'absolute', bottom: '16px', right: '16px', width: '28px', height: '28px', borderBottom: '2px solid rgba(255, 196, 0, 0.5)', borderRight: '2px solid rgba(255,196,0,0.5)'}}></div>

<div style={{position: 'relative', zIndex: '1', width: '72px', height: '72px', border: '2px solid rgba(255, 196, 0, 0.4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255, 196, 0, 0.06)', boxShadow: '0 0 40px rgba(255,196,0,0.15)'}}>
<div style={{width: '0', height: '0', borderTop: '14px solid transparent', borderBottom: '14px solid transparent', borderLeft: '22px solid rgba(255,196,0,0.7)', marginLeft: '5px'}}></div>
</div>
<div style={{position: 'relative', zIndex: '1', textAlign: 'center'}}>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: 'clamp(13px, 2vw, 18px)', fontWeight: '700', color: 'rgba(255,196,0,0.6)', letterSpacing: '0.2em', textTransform: 'uppercase'}}>
                  Stream Coming Soon
                </div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '11px', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.25)', marginTop: '8px', textTransform: 'uppercase'}}>
                  Grand Final · August 2026 · Dubai
                </div>
</div>
</div>

<div style={{position: 'relative', zIndex: '2', padding: '16px 32px', borderTop: '1px solid rgba(255, 196, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(0,0,0,0.3)'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '8px', letterSpacing: '0.2em', color: 'rgba(1,215,253,0.5)'}}>
                  TRADER 1
                </div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: '16px', fontWeight: '700', color: '#00ff9d', textShadow: '0 0 10px rgba(0,255,157,0.5)'}}>
                  +12.4%
                </div>
</div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: '12px', fontWeight: '700', color: 'rgba(255,196,0,0.5)', letterSpacing: '0.2em'}}>
                VS
              </div>
<div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: '16px', fontWeight: '700', color: '#ff4466', textShadow: '0 0 10px rgba(255,68,102,0.5)'}}>
                  +8.7%
                </div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '8px', letterSpacing: '0.2em', color: 'rgba(1,215,253,0.5)'}}>
                  TRADER 2
                </div>
</div>
</div>
</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px'}}>

<div className="theater-feat" onmouseenter="this.style.borderColor='rgba(255,196,0,0.35)';this.style.background='rgba(255,196,0,0.05)'" onmouseleave="this.style.borderColor='rgba(255,196,0,0.14)';this.style.background='rgba(255,196,0,0.02)'" style={{border: '1px solid rgba(255,196,0,0.14)', background: 'rgba(255,196,0,0.02)', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '14px', clipPath: 'polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,0 100%)', transition: 'border-color 0.3s, background 0.3s'}}>
<div style={{width: '44px', height: '44px', border: '1px solid rgba(255,196,0,0.25)', background: 'rgba(255,196,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(6px 0%,100% 0%,100% calc(100% - 6px),calc(100% - 6px) 100%,0% 100%,0% 6px)', flexShrink: '0'}}>
<svg fill="none" height="20" stroke="rgba(255,196,0,0.8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="3"></rect>
<polyline points="8 21 12 17 16 21"></polyline>
<path d="M2 10h20"></path>
</svg>
</div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: '12px', fontWeight: '700', color: '#ffc400', letterSpacing: '0.1em', textTransform: 'uppercase', lineHeight: '1.2'}}>
                Live P&amp;L On LED Screens
              </div>
<p style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '14px', fontWeight: '400', lineHeight: '1.6', color: 'rgba(255,255,255,0.5)', margin: '0'}}>
                Every tick, every trade, visible to thousands in the arena and
                millions online.
              </p>
</div>

<div className="theater-feat" onmouseenter="this.style.borderColor='rgba(255,196,0,0.35)';this.style.background='rgba(255,196,0,0.05)'" onmouseleave="this.style.borderColor='rgba(255,196,0,0.14)';this.style.background='rgba(255,196,0,0.02)'" style={{border: '1px solid rgba(255,196,0,0.14)', background: 'rgba(255,196,0,0.02)', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '14px', clipPath: 'polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,0 100%)', transition: 'border-color 0.3s, background 0.3s'}}>
<div style={{width: '44px', height: '44px', border: '1px solid rgba(255,196,0,0.25)', background: 'rgba(255,196,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(6px 0%,100% 0%,100% calc(100% - 6px),calc(100% - 6px) 100%,0% 100%,0% 6px)', flexShrink: '0'}}>
<svg fill="none" height="20" stroke="rgba(255,196,0,0.8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
</svg>
</div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: '12px', fontWeight: '700', color: '#ffc400', letterSpacing: '0.1em', textTransform: 'uppercase', lineHeight: '1.2'}}>
                Biometric Monitoring
              </div>
<p style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '14px', fontWeight: '400', lineHeight: '1.6', color: 'rgba(255,255,255,0.5)', margin: '0'}}>
                Heart rate and stress levels via WHOOP wearables displayed live
                on screen.
              </p>
</div>

<div className="theater-feat" onmouseenter="this.style.borderColor='rgba(255,196,0,0.35)';this.style.background='rgba(255,196,0,0.05)'" onmouseleave="this.style.borderColor='rgba(255,196,0,0.14)';this.style.background='rgba(255,196,0,0.02)'" style={{border: '1px solid rgba(255,196,0,0.14)', background: 'rgba(255,196,0,0.02)', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '14px', clipPath: 'polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,0 100%)', transition: 'border-color 0.3s, background 0.3s'}}>
<div style={{width: '44px', height: '44px', border: '1px solid rgba(255,196,0,0.25)', background: 'rgba(255,196,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(6px 0%,100% 0%,100% calc(100% - 6px),calc(100% - 6px) 100%,0% 100%,0% 6px)', flexShrink: '0'}}>
<svg fill="none" height="20" stroke="rgba(255,196,0,0.8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: '12px', fontWeight: '700', color: '#ffc400', letterSpacing: '0.1em', textTransform: 'uppercase', lineHeight: '1.2'}}>
                Pro Commentary Team
              </div>
<p style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '14px', fontWeight: '400', lineHeight: '1.6', color: 'rgba(255,255,255,0.5)', margin: '0'}}>
                Expert analysis from top trading veterans and esports
                shoutcasters.
              </p>
</div>

<div className="theater-feat" onmouseenter="this.style.borderColor='rgba(255,196,0,0.35)';this.style.background='rgba(255,196,0,0.05)'" onmouseleave="this.style.borderColor='rgba(255,196,0,0.14)';this.style.background='rgba(255,196,0,0.02)'" style={{border: '1px solid rgba(255,196,0,0.14)', background: 'rgba(255,196,0,0.02)', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '14px', clipPath: 'polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,0 100%)', transition: 'border-color 0.3s, background 0.3s'}}>
<div style={{width: '44px', height: '44px', border: '1px solid rgba(255,196,0,0.25)', background: 'rgba(255,196,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(6px 0%,100% 0%,100% calc(100% - 6px),calc(100% - 6px) 100%,0% 100%,0% 6px)', flexShrink: '0'}}>
<svg fill="none" height="20" stroke="rgba(255,196,0,0.8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" width="20" x="2" y="2"></rect>
<path d="M8 6h.01M12 6h.01M16 6h.01M8 12h.01M12 12h.01M16 12h.01M8 18h.01M12 18h.01M16 18h.01"></path>
</svg>
</div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: '12px', fontWeight: '700', color: '#ffc400', letterSpacing: '0.1em', textTransform: 'uppercase', lineHeight: '1.2'}}>
                Zero-Latency Setup
              </div>
<p style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '14px', fontWeight: '400', lineHeight: '1.6', color: 'rgba(255,255,255,0.5)', margin: '0'}}>
                Dual-ISP fiber, UPS backup, and institutional-grade hardware.
              </p>
</div>
</div>
</div>
</div>
<style>
        @media (max-width: 900px) {
          #theater-section [style*='grid-template-columns:repeat(4,1fr)'] { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 540px) {
          #theater-section [style*='grid-template-columns:repeat(4,1fr)'] { grid-template-columns: 1fr !important; }
        }
      </style>
</section>
<section className="engagement-section" id="engagement-section">
<div style={{position: 'relative', zIndex: '5', padding: '100px var(--px) 120px', overflow: 'hidden'}}>
<div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '1px', background: 'linear-gradient(90deg,transparent 0%,rgba(1,215,253,0.3) 30%,rgba(1,215,253,0.3) 70%,transparent 100%)'}}></div>
<div style={{position: 'absolute', top: '-200px', left: '50%', transform: 'translateX(-50%)', width: '900px', height: '700px', background: 'radial-gradient(ellipse,rgba(1,215,253,0.05) 0%,transparent 70%)', pointerEvents: 'none'}}></div>
<div className="section-header" style={{marginBottom: '80px'}}>
<div className="section-eyebrow">
<span className="eyebrow-line"></span>
<span>More Than Just Trading</span>
<span className="eyebrow-line"></span>
</div>
<h2 className="section-title" style={{letterSpacing: '0.05em'}}>
            ENGAGEMENT
            <span className="accent">MECHANICS</span>
</h2>
<p className="section-sub">A High-Stakes Entertainment Experience.</p>
</div>
<div id="engagement-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'rgba(1, 215, 253, 0.06)', border: '1px solid rgba(1,215,253,0.1)'}}>

<div className="eng-card" onmouseenter="this.style.background='rgba(1,215,253,0.04)'" onmouseleave="this.style.background='var(--bg2)'" style={{opacity: '0', transform: 'translateY(24px)', transition: 'opacity 0.55s ease, transform 0.55s ease', background: 'var(--bg2)', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', overflow: 'hidden'}}>
<div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '2px', background: 'linear-gradient(90deg,var(--neon),transparent)', opacity: '0.4'}}></div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '9px', letterSpacing: '0.4em', color: 'rgba(1,215,253,0.4)', textTransform: 'uppercase'}}>
              For Fair Play
            </div>
<div style={{width: '44px', height: '44px', border: '1px solid rgba(1,215,253,0.22)', background: 'rgba(1,215,253,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(6px 0%,100% 0%,100% calc(100% - 6px),calc(100% - 6px) 100%,0% 100%,0% 6px)', flexShrink: '0'}}>
<svg fill="none" height="22" stroke="rgba(1,215,253,0.8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: '14px', fontWeight: '700', color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: '1.2'}}>
              VAR Anti-Cheat
            </div>
<p style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '15px', fontWeight: '400', lineHeight: '1.65', color: 'rgba(255,255,255,0.5)', margin: '0'}}>
              Our proprietary 'Video Assistant Referee' monitors every trade for
              latency abuse, hedging, or group trading. Fair play is
              non-negotiable.
            </p>
</div>

<div className="eng-card" onmouseenter="this.style.background='rgba(1,215,253,0.04)'" onmouseleave="this.style.background='var(--bg2)'" style={{opacity: '0', transform: 'translateY(24px)', transition: 'opacity 0.55s ease 0.07s, transform 0.55s ease 0.07s', background: 'var(--bg2)', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', overflow: 'hidden'}}>
<div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '2px', background: 'linear-gradient(90deg,var(--neon),transparent)', opacity: '0.4'}}></div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '9px', letterSpacing: '0.4em', color: 'rgba(1,215,253,0.4)', textTransform: 'uppercase'}}>
              For Strategists
            </div>
<div style={{width: '44px', height: '44px', border: '1px solid rgba(1,215,253,0.22)', background: 'rgba(1,215,253,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(6px 0%,100% 0%,100% calc(100% - 6px),calc(100% - 6px) 100%,0% 100%,0% 6px)', flexShrink: '0'}}>
<svg fill="none" height="22" stroke="rgba(1,215,253,0.8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"></path>
<path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"></path>
<line x1="1" x2="23" y1="1" y2="23"></line>
</svg>
</div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: '14px', fontWeight: '700', color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: '1.2'}}>
              Hidden Trades
            </div>
<p style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '15px', fontWeight: '400', lineHeight: '1.65', color: 'rgba(255,255,255,0.5)', margin: '0'}}>
              During 1v1 matches, you cannot see your opponent's positions until
              the round is over. No copy-trading. No sabotage. Just skill.
            </p>
</div>

<div className="eng-card" onmouseenter="this.style.background='rgba(1,215,253,0.04)'" onmouseleave="this.style.background='var(--bg2)'" style={{opacity: '0', transform: 'translateY(24px)', transition: 'opacity 0.55s ease 0.14s, transform 0.55s ease 0.14s', background: 'var(--bg2)', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', overflow: 'hidden'}}>
<div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '2px', background: 'linear-gradient(90deg,var(--neon),transparent)', opacity: '0.4'}}></div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '9px', letterSpacing: '0.4em', color: 'rgba(1,215,253,0.4)', textTransform: 'uppercase'}}>
              For Mental Giants
            </div>
<div style={{width: '44px', height: '44px', border: '1px solid rgba(1,215,253,0.22)', background: 'rgba(1,215,253,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(6px 0%,100% 0%,100% calc(100% - 6px),calc(100% - 6px) 100%,0% 100%,0% 6px)', flexShrink: '0'}}>
<svg fill="none" height="22" stroke="rgba(1,215,253,0.8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
</svg>
</div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: '14px', fontWeight: '700', color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: '1.2'}}>
              Live Biometrics
            </div>
<p style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '15px', fontWeight: '400', lineHeight: '1.65', color: 'rgba(255,255,255,0.5)', margin: '0'}}>
              In the final rounds, we track heart rate and stress levels. The
              audience sees who's cracking under pressure and who's ice-cold.
            </p>
</div>

<div className="eng-card" onmouseenter="this.style.background='rgba(1,215,253,0.04)'" onmouseleave="this.style.background='var(--bg2)'" style={{opacity: '0', transform: 'translateY(24px)', transition: 'opacity 0.55s ease 0.21s, transform 0.55s ease 0.21s', background: 'var(--bg2)', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', overflow: 'hidden'}}>
<div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '2px', background: 'linear-gradient(90deg,var(--neon),transparent)', opacity: '0.4'}}></div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '9px', letterSpacing: '0.4em', color: 'rgba(1,215,253,0.4)', textTransform: 'uppercase'}}>
              For The Community
            </div>
<div style={{width: '44px', height: '44px', border: '1px solid rgba(1,215,253,0.22)', background: 'rgba(1,215,253,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(6px 0%,100% 0%,100% calc(100% - 6px),calc(100% - 6px) 100%,0% 100%,0% 6px)', flexShrink: '0'}}>
<svg fill="none" height="22" stroke="rgba(1,215,253,0.8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
</svg>
</div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: '14px', fontWeight: '700', color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: '1.2'}}>
              Fan Voting
            </div>
<p style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '15px', fontWeight: '400', lineHeight: '1.65', color: 'rgba(255,255,255,0.5)', margin: '0'}}>
              Fans can vote for their favorite traders. The 'Fan Favorite' wins
              a special
              <strong style={{color: 'var(--neon)'}}>$5,000 bonus</strong>
              and a custom digital jersey.
            </p>
</div>

<div className="eng-card" onmouseenter="this.style.background='rgba(1,215,253,0.04)'" onmouseleave="this.style.background='var(--bg2)'" style={{opacity: '0', transform: 'translateY(24px)', transition: 'opacity 0.55s ease 0.28s, transform 0.55s ease 0.28s', background: 'var(--bg2)', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', overflow: 'hidden'}}>
<div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '2px', background: 'linear-gradient(90deg,var(--neon),transparent)', opacity: '0.4'}}></div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '9px', letterSpacing: '0.4em', color: 'rgba(1,215,253,0.4)', textTransform: 'uppercase'}}>
              For Spectators
            </div>
<div style={{width: '44px', height: '44px', border: '1px solid rgba(1,215,253,0.22)', background: 'rgba(1,215,253,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(6px 0%,100% 0%,100% calc(100% - 6px),calc(100% - 6px) 100%,0% 100%,0% 6px)', flexShrink: '0'}}>
<svg fill="none" height="22" stroke="rgba(1,215,253,0.8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<line x1="8" x2="21" y1="6" y2="6"></line>
<line x1="8" x2="21" y1="12" y2="12"></line>
<line x1="8" x2="21" y1="18" y2="18"></line>
<line x1="3" x2="3.01" y1="6" y2="6"></line>
<line x1="3" x2="3.01" y1="12" y2="12"></line>
<line x1="3" x2="3.01" y1="18" y2="18"></line>
</svg>
</div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: '14px', fontWeight: '700', color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: '1.2'}}>
              Bracket Pick'em
            </div>
<p style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '15px', fontWeight: '400', lineHeight: '1.65', color: 'rgba(255,255,255,0.5)', margin: '0'}}>
              Free to play. Predict the winners of each knockout round. Top
              predictors win cash prizes and merch.
            </p>
</div>

<div className="eng-card" onmouseenter="this.style.background='rgba(1,215,253,0.04)'" onmouseleave="this.style.background='var(--bg2)'" style={{opacity: '0', transform: 'translateY(24px)', transition: 'opacity 0.55s ease 0.35s, transform 0.55s ease 0.35s', background: 'var(--bg2)', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', overflow: 'hidden'}}>
<div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '2px', background: 'linear-gradient(90deg,var(--neon),transparent)', opacity: '0.4'}}></div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '9px', letterSpacing: '0.4em', color: 'rgba(1,215,253,0.4)', textTransform: 'uppercase'}}>
              For Top 48
            </div>
<div style={{width: '44px', height: '44px', border: '1px solid rgba(1,215,253,0.22)', background: 'rgba(1,215,253,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(6px 0%,100% 0%,100% calc(100% - 6px),calc(100% - 6px) 100%,0% 100%,0% 6px)', flexShrink: '0'}}>
<svg fill="none" height="22" stroke="rgba(1,215,253,0.8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M20.38 3.46 16 2 12 5 8 2 3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23Z"></path>
</svg>
</div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: '14px', fontWeight: '700', color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: '1.2'}}>
              Jersey Drop
            </div>
<p style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '15px', fontWeight: '400', lineHeight: '1.65', color: 'rgba(255,255,255,0.5)', margin: '0'}}>
              Custom physical jerseys with your name and country flag shipped to
              your door. Wear your colors with pride.
            </p>
</div>

<div className="eng-card" onmouseenter="this.style.background='rgba(1,215,253,0.04)'" onmouseleave="this.style.background='var(--bg2)'" style={{opacity: '0', transform: 'translateY(24px)', transition: 'opacity 0.55s ease 0.42s, transform 0.55s ease 0.42s', background: 'var(--bg2)', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', overflow: 'hidden'}}>
<div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '2px', background: 'linear-gradient(90deg,var(--neon),transparent)', opacity: '0.4'}}></div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '9px', letterSpacing: '0.4em', color: 'rgba(1,215,253,0.4)', textTransform: 'uppercase'}}>
              For Countries
            </div>
<div style={{width: '44px', height: '44px', border: '1px solid rgba(1,215,253,0.22)', background: 'rgba(1,215,253,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(6px 0%,100% 0%,100% calc(100% - 6px),calc(100% - 6px) 100%,0% 100%,0% 6px)', flexShrink: '0'}}>
<svg fill="none" height="22" stroke="rgba(1,215,253,0.8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: '14px', fontWeight: '700', color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: '1.2'}}>
              National Coaches
            </div>
<p style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '15px', fontWeight: '400', lineHeight: '1.65', color: 'rgba(255,255,255,0.5)', margin: '0'}}>
              Top influencers from each nation provide live coaching and
              commentary for their team. National pride on the line.
            </p>
</div>

<div className="eng-card" onmouseenter="this.style.background='rgba(1,215,253,0.04)'" onmouseleave="this.style.background='var(--bg2)'" style={{opacity: '0', transform: 'translateY(24px)', transition: 'opacity 0.55s ease 0.49s, transform 0.55s ease 0.49s', background: 'var(--bg2)', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', overflow: 'hidden'}}>
<div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '2px', background: 'linear-gradient(90deg,var(--neon),transparent)', opacity: '0.4'}}></div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '9px', letterSpacing: '0.4em', color: 'rgba(1,215,253,0.4)', textTransform: 'uppercase'}}>
              For Nations
            </div>
<div style={{width: '44px', height: '44px', border: '1px solid rgba(1,215,253,0.22)', background: 'rgba(1,215,253,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(6px 0%,100% 0%,100% calc(100% - 6px),calc(100% - 6px) 100%,0% 100%,0% 6px)', flexShrink: '0'}}>
<svg fill="none" height="22" stroke="rgba(1,215,253,0.8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="2" x2="22" y1="12" y2="12"></line>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
</svg>
</div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: '14px', fontWeight: '700', color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: '1.2'}}>
              Country Rankings
            </div>
<p style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '15px', fontWeight: '400', lineHeight: '1.65', color: 'rgba(255,255,255,0.5)', margin: '0'}}>
              Real-time ranking of countries based on the average performance of
              their top 100 traders. Which nation is the smartest?
            </p>
</div>
</div>
</div>
<style>
        @media (max-width: 1100px) {
          #engagement-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 600px) {
          #engagement-grid { grid-template-columns: 1fr !important; }
        }
      </style>

</section>
<style>
      @keyframes shimmer {
        0%, 100% { opacity: 0.3; transform: translateX(-100%); }
        50% { opacity: 1; transform: translateX(100%); }
      }
      @media (max-width: 900px) {
        #perks-grid { grid-template-columns: 1fr !important; max-width: 400px; margin: 0 auto; }
      }
      @media (max-width: 700px) {
        .prizes-section .prize-card { min-width: 100% !important; max-width: 100% !important; }
      }
    </style>



<section id="conduct-section" style={{position: 'relative', zIndex: '5'}}>
<div style={{position: 'relative', zIndex: '5', padding: '100px var(--px) 120px', overflow: 'hidden'}}>
<div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '1px', background: 'linear-gradient(90deg,transparent 0%,rgba(1,215,253,0.3) 30%,rgba(1,215,253,0.3) 70%,transparent 100%)'}}></div>
<div style={{position: 'absolute', top: '-200px', left: '50%', transform: 'translateX(-50%)', width: '900px', height: '700px', background: 'radial-gradient(ellipse,rgba(1,215,253,0.04) 0%,transparent 70%)', pointerEvents: 'none'}}></div>
<div className="section-header" style={{marginBottom: '72px'}}>
<div className="section-eyebrow">
<span className="eyebrow-line"></span>
<span>Rules &amp; Regulations</span>
<span className="eyebrow-line"></span>
</div>
<h2 className="section-title" style={{letterSpacing: '0.05em'}}>
            THE CODE OF
            <span className="accent">CONDUCT</span>
</h2>
<p className="section-sub">
            Simple Rules. Strict Enforcement. Professional Standards.
          </p>
</div>
<div id="conduct-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '16px', maxWidth: '1000px', margin: '0 auto 48px'}}>
<div className="conduct-card" style={{opacity: '0', transform: 'translateY(24px)', transition: 'opacity 0.6s ease,transform 0.6s ease', border: '1px solid rgba(1,215,253,0.14)', background: 'rgba(1,215,253,0.02)', clipPath: 'polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,16px 100%,0 calc(100% - 16px))', padding: '32px 32px 36px', position: 'relative', overflow: 'hidden'}}>
<div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '2px', background: 'linear-gradient(90deg,var(--neon),transparent)', opacity: '0.35'}}></div>
<div style={{display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px'}}>
<div style={{width: '44px', height: '44px', border: '1px solid rgba(1,215,253,0.25)', background: 'rgba(1,215,253,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(6px 0%,100% 0%,100% calc(100% - 6px),calc(100% - 6px) 100%,0% 100%,0% 6px)', flexShrink: '0'}}>
<svg fill="none" height="20" stroke="rgba(1,215,253,0.8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="3"></rect>
<path d="M8 21h8M12 17v4"></path>
</svg>
</div>
<div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '9px', letterSpacing: '0.4em', color: 'rgba(1,215,253,0.45)', textTransform: 'uppercase', marginBottom: '4px'}}>
                  Section 01
                </div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: '14px', fontWeight: '700', color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase'}}>
                  Account Specs
                </div>
</div>
</div>
<ul style={{listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '11px'}}>
<li style={{display: 'flex', alignItems: 'flex-start', gap: '12px', fontFamily: '\'Rajdhani\', sans-serif', fontSize: '16px', fontWeight: '400', color: 'rgba(255,255,255,0.6)', lineHeight: '1.45'}}>
<span style={{width: '5px', height: '5px', background: 'var(--neon)', borderRadius: '50%', flexShrink: '0', marginTop: '7px', boxShadow: '0 0 6px var(--neon)'}}></span>
<span>
<strong style={{color: '#fff'}}>$50,000</strong>
                  Virtual Starting Balance
                </span>
</li>
<li style={{display: 'flex', alignItems: 'flex-start', gap: '12px', fontFamily: '\'Rajdhani\', sans-serif', fontSize: '16px', fontWeight: '400', color: 'rgba(255,255,255,0.6)', lineHeight: '1.45'}}>
<span style={{width: '5px', height: '5px', background: 'var(--neon)', borderRadius: '50%', flexShrink: '0', marginTop: '7px', boxShadow: '0 0 6px var(--neon)'}}></span>
<span>
<strong style={{color: '#fff'}}>3%</strong>
                  Daily Loss Limit
                  <span style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '10px', letterSpacing: '0.15em', color: 'rgba(255,68,68,0.7)'}}>
                    (Hard Breach)
                  </span>
</span>
</li>
<li style={{display: 'flex', alignItems: 'flex-start', gap: '12px', fontFamily: '\'Rajdhani\', sans-serif', fontSize: '16px', fontWeight: '400', color: 'rgba(255,255,255,0.6)', lineHeight: '1.45'}}>
<span style={{width: '5px', height: '5px', background: 'var(--neon)', borderRadius: '50%', flexShrink: '0', marginTop: '7px', boxShadow: '0 0 6px var(--neon)'}}></span>
<span>
<strong style={{color: '#fff'}}>6%</strong>
                  Maximum Overall Drawdown
                </span>
</li>
<li style={{display: 'flex', alignItems: 'flex-start', gap: '12px', fontFamily: '\'Rajdhani\', sans-serif', fontSize: '16px', fontWeight: '400', color: 'rgba(255,255,255,0.6)', lineHeight: '1.45'}}>
<span style={{width: '5px', height: '5px', background: 'var(--neon)', borderRadius: '50%', flexShrink: '0', marginTop: '7px', boxShadow: '0 0 6px var(--neon)'}}></span>
<span>
                  MatchTrader or
                  <strong style={{color: '#fff'}}>DXtrade</strong>
                  Platforms
                </span>
</li>
</ul>
</div>
<div className="conduct-card" style={{opacity: '0', transform: 'translateY(24px)', transition: 'opacity 0.6s ease 0.1s,transform 0.6s ease 0.1s', border: '1px solid rgba(1,215,253,0.14)', background: 'rgba(1,215,253,0.02)', clipPath: 'polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,16px 100%,0 calc(100% - 16px))', padding: '32px 32px 36px', position: 'relative', overflow: 'hidden'}}>
<div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '2px', background: 'linear-gradient(90deg,var(--neon),transparent)', opacity: '0.35'}}></div>
<div style={{display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px'}}>
<div style={{width: '44px', height: '44px', border: '1px solid rgba(1,215,253,0.25)', background: 'rgba(1,215,253,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(6px 0%,100% 0%,100% calc(100% - 6px),calc(100% - 6px) 100%,0% 100%,0% 6px)', flexShrink: '0'}}>
<svg fill="none" height="20" stroke="rgba(1,215,253,0.8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
</svg>
</div>
<div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '9px', letterSpacing: '0.4em', color: 'rgba(1,215,253,0.45)', textTransform: 'uppercase', marginBottom: '4px'}}>
                  Section 02
                </div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: '14px', fontWeight: '700', color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase'}}>
                  Trading Rules
                </div>
</div>
</div>
<ul style={{listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '11px'}}>
<li style={{display: 'flex', alignItems: 'flex-start', gap: '12px', fontFamily: '\'Rajdhani\', sans-serif', fontSize: '16px', fontWeight: '400', color: 'rgba(255,255,255,0.6)', lineHeight: '1.45'}}>
<span style={{width: '5px', height: '5px', background: 'var(--neon)', borderRadius: '50%', flexShrink: '0', marginTop: '7px', boxShadow: '0 0 6px var(--neon)'}}></span>
<span>
                  Minimum
                  <strong style={{color: '#fff'}}>3 individual trades</strong>
                  required
                </span>
</li>
<li style={{display: 'flex', alignItems: 'flex-start', gap: '12px', fontFamily: '\'Rajdhani\', sans-serif', fontSize: '16px', fontWeight: '400', color: 'rgba(255,255,255,0.6)', lineHeight: '1.45'}}>
<span style={{width: '5px', height: '5px', background: 'var(--neon)', borderRadius: '50%', flexShrink: '0', marginTop: '7px', boxShadow: '0 0 6px var(--neon)'}}></span>
<span>
                  No single trade &gt;
                  <strong style={{color: '#fff'}}>50% of total profit</strong>
</span>
</li>
<li style={{display: 'flex', alignItems: 'flex-start', gap: '12px', fontFamily: '\'Rajdhani\', sans-serif', fontSize: '16px', fontWeight: '400', color: 'rgba(255,255,255,0.6)', lineHeight: '1.45'}}>
<span style={{width: '5px', height: '5px', background: 'var(--neon)', borderRadius: '50%', flexShrink: '0', marginTop: '7px', boxShadow: '0 0 6px var(--neon)'}}></span>
<span>
                  Highest
                  <strong style={{color: '#fff'}}>% profit</strong>
                  at end of round wins
                </span>
</li>
<li style={{display: 'flex', alignItems: 'flex-start', gap: '12px', fontFamily: '\'Rajdhani\', sans-serif', fontSize: '16px', fontWeight: '400', color: 'rgba(255,255,255,0.6)', lineHeight: '1.45'}}>
<span style={{width: '5px', height: '5px', background: 'var(--neon)', borderRadius: '50%', flexShrink: '0', marginTop: '7px', boxShadow: '0 0 6px var(--neon)'}}></span>
<span>
                  All positions
                  <strong style={{color: '#fff'}}>closed before round end</strong>
</span>
</li>
</ul>
</div>
<div className="conduct-card" style={{opacity: '0', transform: 'translateY(24px)', transition: 'opacity 0.6s ease 0.2s,transform 0.6s ease 0.2s', border: '1px solid rgba(1,215,253,0.14)', background: 'rgba(1,215,253,0.02)', clipPath: 'polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,16px 100%,0 calc(100% - 16px))', padding: '32px 32px 36px', position: 'relative', overflow: 'hidden'}}>
<div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '2px', background: 'linear-gradient(90deg,var(--neon),transparent)', opacity: '0.35'}}></div>
<div style={{display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px'}}>
<div style={{width: '44px', height: '44px', border: '1px solid rgba(1,215,253,0.25)', background: 'rgba(1,215,253,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(6px 0%,100% 0%,100% calc(100% - 6px),calc(100% - 6px) 100%,0% 100%,0% 6px)', flexShrink: '0'}}>
<svg fill="none" height="20" stroke="rgba(1,215,253,0.8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '9px', letterSpacing: '0.4em', color: 'rgba(1,215,253,0.45)', textTransform: 'uppercase', marginBottom: '4px'}}>
                  Section 03
                </div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: '14px', fontWeight: '700', color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase'}}>
                  Fair Play
                </div>
</div>
</div>
<ul style={{listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '11px'}}>
<li style={{display: 'flex', alignItems: 'flex-start', gap: '12px', fontFamily: '\'Rajdhani\', sans-serif', fontSize: '16px', fontWeight: '400', color: 'rgba(255,255,255,0.6)', lineHeight: '1.45'}}>
<span style={{width: '5px', height: '5px', background: 'var(--neon)', borderRadius: '50%', flexShrink: '0', marginTop: '7px', boxShadow: '0 0 6px var(--neon)'}}></span>
<span>
<strong style={{color: '#fff'}}>Hidden trades</strong>
                  in 1v1 (revealed at end)
                </span>
</li>
<li style={{display: 'flex', alignItems: 'flex-start', gap: '12px', fontFamily: '\'Rajdhani\', sans-serif', fontSize: '16px', fontWeight: '400', color: 'rgba(255,255,255,0.6)', lineHeight: '1.45'}}>
<span style={{width: '5px', height: '5px', background: 'var(--neon)', borderRadius: '50%', flexShrink: '0', marginTop: '7px', boxShadow: '0 0 6px var(--neon)'}}></span>
<span>
                  Strictly
                  <strong style={{color: '#fff'}}>one account per person</strong>
</span>
</li>
<li style={{display: 'flex', alignItems: 'flex-start', gap: '12px', fontFamily: '\'Rajdhani\', sans-serif', fontSize: '16px', fontWeight: '400', color: 'rgba(255,255,255,0.6)', lineHeight: '1.45'}}>
<span style={{width: '5px', height: '5px', background: 'var(--neon)', borderRadius: '50%', flexShrink: '0', marginTop: '7px', boxShadow: '0 0 6px var(--neon)'}}></span>
<span>
                  Automated
                  <strong style={{color: '#fff'}}>anti-cheat scan</strong>
                  every 10s
                </span>
</li>
<li style={{display: 'flex', alignItems: 'flex-start', gap: '12px', fontFamily: '\'Rajdhani\', sans-serif', fontSize: '16px', fontWeight: '400', color: 'rgba(255,255,255,0.6)', lineHeight: '1.45'}}>
<span style={{width: '5px', height: '5px', background: 'var(--neon)', borderRadius: '50%', flexShrink: '0', marginTop: '7px', boxShadow: '0 0 6px var(--neon)'}}></span>
<span>
                  No
                  <strong style={{color: '#fff'}}>HFT or latency arbitrage</strong>
</span>
</li>
</ul>
</div>
<div className="conduct-card" style={{opacity: '0', transform: 'translateY(24px)', transition: 'opacity 0.6s ease 0.3s,transform 0.6s ease 0.3s', border: '1px solid rgba(1,215,253,0.14)', background: 'rgba(1,215,253,0.02)', clipPath: 'polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,16px 100%,0 calc(100% - 16px))', padding: '32px 32px 36px', position: 'relative', overflow: 'hidden'}}>
<div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '2px', background: 'linear-gradient(90deg,var(--neon),transparent)', opacity: '0.35'}}></div>
<div style={{display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px'}}>
<div style={{width: '44px', height: '44px', border: '1px solid rgba(1,215,253,0.25)', background: 'rgba(1,215,253,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(6px 0%,100% 0%,100% calc(100% - 6px),calc(100% - 6px) 100%,0% 100%,0% 6px)', flexShrink: '0'}}>
<svg fill="none" height="20" stroke="rgba(1,215,253,0.8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="8" x2="21" y1="6" y2="6"></line>
<line x1="8" x2="21" y1="12" y2="12"></line>
<line x1="8" x2="21" y1="18" y2="18"></line>
<line x1="3" x2="3.01" y1="6" y2="6"></line>
<line x1="3" x2="3.01" y1="12" y2="12"></line>
<line x1="3" x2="3.01" y1="18" y2="18"></line>
</svg>
</div>
<div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '9px', letterSpacing: '0.4em', color: 'rgba(1,215,253,0.45)', textTransform: 'uppercase', marginBottom: '4px'}}>
                  Section 04
                </div>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: '14px', fontWeight: '700', color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase'}}>
                  Tie-Breakers
                </div>
</div>
</div>
<ul style={{listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '11px'}}>
<li style={{display: 'flex', alignItems: 'flex-start', gap: '12px', fontFamily: '\'Rajdhani\', sans-serif', fontSize: '16px', fontWeight: '400', color: 'rgba(255,255,255,0.6)', lineHeight: '1.45'}}>
<span style={{width: '5px', height: '5px', background: 'var(--neon)', borderRadius: '50%', flexShrink: '0', marginTop: '7px', boxShadow: '0 0 6px var(--neon)'}}></span>
<span>
                  Lowest
                  <strong style={{color: '#fff'}}>maximum drawdown</strong>
                  recorded
                </span>
</li>
<li style={{display: 'flex', alignItems: 'flex-start', gap: '12px', fontFamily: '\'Rajdhani\', sans-serif', fontSize: '16px', fontWeight: '400', color: 'rgba(255,255,255,0.6)', lineHeight: '1.45'}}>
<span style={{width: '5px', height: '5px', background: 'var(--neon)', borderRadius: '50%', flexShrink: '0', marginTop: '7px', boxShadow: '0 0 6px var(--neon)'}}></span>
<span>
                  Highest
                  <strong style={{color: '#fff'}}>win rate</strong>
                  percentage
                </span>
</li>
<li style={{display: 'flex', alignItems: 'flex-start', gap: '12px', fontFamily: '\'Rajdhani\', sans-serif', fontSize: '16px', fontWeight: '400', color: 'rgba(255,255,255,0.6)', lineHeight: '1.45'}}>
<span style={{width: '5px', height: '5px', background: 'var(--neon)', borderRadius: '50%', flexShrink: '0', marginTop: '7px', boxShadow: '0 0 6px var(--neon)'}}></span>
<span>
                  Shortest
                  <strong style={{color: '#fff'}}>average trade duration</strong>
</span>
</li>
<li style={{display: 'flex', alignItems: 'flex-start', gap: '12px', fontFamily: '\'Rajdhani\', sans-serif', fontSize: '16px', fontWeight: '400', color: 'rgba(255,255,255,0.6)', lineHeight: '1.45'}}>
<span style={{width: '5px', height: '5px', background: 'var(--neon)', borderRadius: '50%', flexShrink: '0', marginTop: '7px', boxShadow: '0 0 6px var(--neon)'}}></span>
<span>
                  Most
                  <strong style={{color: '#fff'}}>consistent lot sizing</strong>
</span>
</li>
</ul>
</div>
</div>
<div id="conduct-warning" style={{maxWidth: '1000px', margin: '0 auto'}}>
<div style={{border: '1px solid rgba(255,68,68,0.25)', background: 'rgba(255,68,68,0.03)', clipPath: 'polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px))', padding: '20px 28px', display: 'flex', alignItems: 'flex-start', gap: '16px', position: 'relative', overflow: 'hidden'}}>
<div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(255,68,68,0.5),transparent)'}}></div>
<div style={{flexShrink: '0', marginTop: '2px'}}>
<svg fill="none" height="18" stroke="rgba(255,68,68,0.8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
<line x1="12" x2="12" y1="9" y2="13"></line>
<line x1="12" x2="12.01" y1="17" y2="17"></line>
</svg>
</div>
<p style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '1.6', color: 'rgba(255,255,255,0.45)', margin: '0'}}>
<strong style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '11px', letterSpacing: '0.25em', color: 'rgba(255,68,68,0.75)', textTransform: 'uppercase'}}>
                WARNING:
              </strong>
              Any breach of the Code of Conduct results in immediate
              disqualification and a
              <strong style={{color: 'rgba(255,255,255,0.65)'}}>
                lifetime ban
              </strong>
              from all Hola Prime events.
            </p>
</div>
</div>
</div>
<style>
        @media(max-width:700px){#conduct-grid{grid-template-columns:1fr!important;}}
      </style>

</section>
<section id="faq-section" style={{position: 'relative', zIndex: '5'}}>
<div style={{position: 'relative', zIndex: '5', padding: '100px var(--px) 120px', overflow: 'hidden'}}>
<div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '1px', background: 'linear-gradient(90deg,transparent 0%,rgba(1,215,253,0.3) 30%,rgba(1,215,253,0.3) 70%,transparent 100%)'}}></div>
<div style={{position: 'absolute', top: '-200px', left: '50%', transform: 'translateX(-50%)', width: '900px', height: '700px', background: 'radial-gradient(ellipse,rgba(1,215,253,0.04) 0%,transparent 70%)', pointerEvents: 'none'}}></div>
<div className="section-header" style={{marginBottom: '72px'}}>
<div className="section-eyebrow">
<span className="eyebrow-line"></span>
<span>Everything you need to know before you answer the call.</span>
<span className="eyebrow-line"></span>
</div>
<h2 className="section-title" style={{letterSpacing: '0.05em'}}>
            INTEL
            <span className="accent">BRIEFING</span>
</h2>
</div>
<div id="faq-list" style={{maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2px'}}>
<div className="faq-item" style={{border: '1px solid rgba(1,215,253,0.12)', background: 'rgba(1,215,253,0.02)', clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))', overflow: 'hidden', transition: 'border-color 0.3s'}}>
<button className="faq-trigger" onclick="toggleFaq(this)" onmouseenter="this.closest('.faq-item').style.borderColor='rgba(1,215,253,0.3)'" onmouseleave="this.closest('.faq-item').style.borderColor='rgba(1,215,253,0.12)'" style={{width: '100%', background: 'none', border: 'none', cursor: 'none', padding: '24px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', textAlign: 'left'}}>
<span style={{fontFamily: '\'Orbitron\', monospace', fontSize: '13px', fontWeight: '600', color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase'}}>
                Do I need trading experience?
              </span>
<svg className="faq-chevron" fill="none" height="18" style={{flexShrink: '0', transition: 'transform 0.3s'}} viewbox="0 0 18 18" width="18">
<path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="rgba(1,215,253,0.6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
<div className="faq-body" style={{maxHeight: '0', overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(0.22,1,0.36,1)'}}>
<p style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '1.7', color: 'rgba(255,255,255,0.55)', margin: '0', padding: '0 28px 24px'}}>
                No! While experienced traders have an edge, the
                <strong style={{color: '#fff'}}>$10 entry</strong>
                makes it a perfect low-cost way for beginners to learn the
                mechanics of prop trading in a high-energy environment.
              </p>
</div>
</div>
<div className="faq-item" style={{border: '1px solid rgba(1,215,253,0.12)', background: 'rgba(1,215,253,0.02)', clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))', overflow: 'hidden', transition: 'border-color 0.3s'}}>
<button className="faq-trigger" onclick="toggleFaq(this)" onmouseenter="this.closest('.faq-item').style.borderColor='rgba(1,215,253,0.3)'" onmouseleave="this.closest('.faq-item').style.borderColor='rgba(1,215,253,0.12)'" style={{width: '100%', background: 'none', border: 'none', cursor: 'none', padding: '24px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', textAlign: 'left'}}>
<span style={{fontFamily: '\'Orbitron\', monospace', fontSize: '13px', fontWeight: '600', color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase'}}>
                Is this gambling?
              </span>
<svg className="faq-chevron" fill="none" height="18" style={{flexShrink: '0', transition: 'transform 0.3s'}} viewbox="0 0 18 18" width="18">
<path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="rgba(1,215,253,0.6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
<div className="faq-body" style={{maxHeight: '0', overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(0.22,1,0.36,1)'}}>
<p style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '1.7', color: 'rgba(255,255,255,0.55)', margin: '0', padding: '0 28px 24px'}}>
                Absolutely not. This is a
                <strong style={{color: '#fff'}}>skill-based competition</strong>
                using simulated trading accounts. No real money is ever at risk
                beyond your $10 entry fee.
              </p>
</div>
</div>
<div className="faq-item" style={{border: '1px solid rgba(1,215,253,0.12)', background: 'rgba(1,215,253,0.02)', clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))', overflow: 'hidden', transition: 'border-color 0.3s'}}>
<button className="faq-trigger" onclick="toggleFaq(this)" onmouseenter="this.closest('.faq-item').style.borderColor='rgba(1,215,253,0.3)'" onmouseleave="this.closest('.faq-item').style.borderColor='rgba(1,215,253,0.12)'" style={{width: '100%', background: 'none', border: 'none', cursor: 'none', padding: '24px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', textAlign: 'left'}}>
<span style={{fontFamily: '\'Orbitron\', monospace', fontSize: '13px', fontWeight: '600', color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase'}}>
                What is Hola Prime?
              </span>
<svg className="faq-chevron" fill="none" height="18" style={{flexShrink: '0', transition: 'transform 0.3s'}} viewbox="0 0 18 18" width="18">
<path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="rgba(1,215,253,0.6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
<div className="faq-body" style={{maxHeight: '0', overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(0.22,1,0.36,1)'}}>
<p style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '1.7', color: 'rgba(255,255,255,0.55)', margin: '0', padding: '0 28px 24px'}}>
<strong style={{color: '#fff'}}>Hola Prime</strong>
                is a leading prop trading technology provider. We organize this
                event to find the world's best trading talent and give them the
                capital they deserve.
              </p>
</div>
</div>
<div className="faq-item" style={{border: '1px solid rgba(1,215,253,0.12)', background: 'rgba(1,215,253,0.02)', clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))', overflow: 'hidden', transition: 'border-color 0.3s'}}>
<button className="faq-trigger" onclick="toggleFaq(this)" onmouseenter="this.closest('.faq-item').style.borderColor='rgba(1,215,253,0.3)'" onmouseleave="this.closest('.faq-item').style.borderColor='rgba(1,215,253,0.12)'" style={{width: '100%', background: 'none', border: 'none', cursor: 'none', padding: '24px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', textAlign: 'left'}}>
<span style={{fontFamily: '\'Orbitron\', monospace', fontSize: '13px', fontWeight: '600', color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase'}}>
                What's a funded account?
              </span>
<svg className="faq-chevron" fill="none" height="18" style={{flexShrink: '0', transition: 'transform 0.3s'}} viewbox="0 0 18 18" width="18">
<path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="rgba(1,215,253,0.6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
<div className="faq-body" style={{maxHeight: '0', overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(0.22,1,0.36,1)'}}>
<p style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '1.7', color: 'rgba(255,255,255,0.55)', margin: '0', padding: '0 28px 24px'}}>
                It's a professional account where we provide the capital. You
                trade it, and we
                <strong style={{color: 'var(--neon)'}}>split the profits</strong>
                with you. You don't risk your own money.
              </p>
</div>
</div>
<div className="faq-item" style={{border: '1px solid rgba(1,215,253,0.12)', background: 'rgba(1,215,253,0.02)', clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))', overflow: 'hidden', transition: 'border-color 0.3s'}}>
<button className="faq-trigger" onclick="toggleFaq(this)" onmouseenter="this.closest('.faq-item').style.borderColor='rgba(1,215,253,0.3)'" onmouseleave="this.closest('.faq-item').style.borderColor='rgba(1,215,253,0.12)'" style={{width: '100%', background: 'none', border: 'none', cursor: 'none', padding: '24px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', textAlign: 'left'}}>
<span style={{fontFamily: '\'Orbitron\', monospace', fontSize: '13px', fontWeight: '600', color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase'}}>
                Which countries can participate?
              </span>
<svg className="faq-chevron" fill="none" height="18" style={{flexShrink: '0', transition: 'transform 0.3s'}} viewbox="0 0 18 18" width="18">
<path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="rgba(1,215,253,0.6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
<div className="faq-body" style={{maxHeight: '0', overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(0.22,1,0.36,1)'}}>
<p style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '1.7', color: 'rgba(255,255,255,0.55)', margin: '0', padding: '0 28px 24px'}}>
                Traders from over
                <strong style={{color: '#fff'}}>150 countries</strong>
                can join. The top 48 nations with the most signups will form the
                official World Cup bracket.
              </p>
</div>
</div>
<div className="faq-item" style={{border: '1px solid rgba(1,215,253,0.12)', background: 'rgba(1,215,253,0.02)', clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))', overflow: 'hidden', transition: 'border-color 0.3s'}}>
<button className="faq-trigger" onclick="toggleFaq(this)" onmouseenter="this.closest('.faq-item').style.borderColor='rgba(1,215,253,0.3)'" onmouseleave="this.closest('.faq-item').style.borderColor='rgba(1,215,253,0.12)'" style={{width: '100%', background: 'none', border: 'none', cursor: 'none', padding: '24px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', textAlign: 'left'}}>
<span style={{fontFamily: '\'Orbitron\', monospace', fontSize: '13px', fontWeight: '600', color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase'}}>
                What platform will I use?
              </span>
<svg className="faq-chevron" fill="none" height="18" style={{flexShrink: '0', transition: 'transform 0.3s'}} viewbox="0 0 18 18" width="18">
<path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="rgba(1,215,253,0.6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
<div className="faq-body" style={{maxHeight: '0', overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(0.22,1,0.36,1)'}}>
<p style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '1.7', color: 'rgba(255,255,255,0.55)', margin: '0', padding: '0 28px 24px'}}>
                You can choose between
                <strong style={{color: '#fff'}}>MatchTrader</strong>
                or
                <strong style={{color: '#fff'}}>DXtrade</strong>
                , two of the most popular and stable platforms in the prop
                industry.
              </p>
</div>
</div>
<div className="faq-item" style={{border: '1px solid rgba(1,215,253,0.12)', background: 'rgba(1,215,253,0.02)', clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))', overflow: 'hidden', transition: 'border-color 0.3s'}}>
<button className="faq-trigger" onclick="toggleFaq(this)" onmouseenter="this.closest('.faq-item').style.borderColor='rgba(1,215,253,0.3)'" onmouseleave="this.closest('.faq-item').style.borderColor='rgba(1,215,253,0.12)'" style={{width: '100%', background: 'none', border: 'none', cursor: 'none', padding: '24px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', textAlign: 'left'}}>
<span style={{fontFamily: '\'Orbitron\', monospace', fontSize: '13px', fontWeight: '600', color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase'}}>
                What happens if my internet disconnects?
              </span>
<svg className="faq-chevron" fill="none" height="18" style={{flexShrink: '0', transition: 'transform 0.3s'}} viewbox="0 0 18 18" width="18">
<path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="rgba(1,215,253,0.6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
<div className="faq-body" style={{maxHeight: '0', overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(0.22,1,0.36,1)'}}>
<p style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '1.7', color: 'rgba(255,255,255,0.55)', margin: '0', padding: '0 28px 24px'}}>
                As in any professional sport, technical issues are the player's
                responsibility. However, our support team is available
                <strong style={{color: '#fff'}}>24/7</strong>
                to help with platform-side issues.
              </p>
</div>
</div>
<div className="faq-item" style={{border: '1px solid rgba(1,215,253,0.12)', background: 'rgba(1,215,253,0.02)', clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))', overflow: 'hidden', transition: 'border-color 0.3s'}}>
<button className="faq-trigger" onclick="toggleFaq(this)" onmouseenter="this.closest('.faq-item').style.borderColor='rgba(1,215,253,0.3)'" onmouseleave="this.closest('.faq-item').style.borderColor='rgba(1,215,253,0.12)'" style={{width: '100%', background: 'none', border: 'none', cursor: 'none', padding: '24px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', textAlign: 'left'}}>
<span style={{fontFamily: '\'Orbitron\', monospace', fontSize: '13px', fontWeight: '600', color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase'}}>
                Can I just spectate?
              </span>
<svg className="faq-chevron" fill="none" height="18" style={{flexShrink: '0', transition: 'transform 0.3s'}} viewbox="0 0 18 18" width="18">
<path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="rgba(1,215,253,0.6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
<div className="faq-body" style={{maxHeight: '0', overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(0.22,1,0.36,1)'}}>
<p style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '1.7', color: 'rgba(255,255,255,0.55)', margin: '0', padding: '0 28px 24px'}}>
                Yes! You can join the
                <strong style={{color: 'var(--neon)'}}>
                  Bracket Pick'em for free
                </strong>
                , watch live streams, and participate in the community without
                trading a single lot.
              </p>
</div>
</div>
<div className="faq-item" style={{border: '1px solid rgba(1,215,253,0.12)', background: 'rgba(1,215,253,0.02)', clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))', overflow: 'hidden', transition: 'border-color 0.3s'}}>
<button className="faq-trigger" onclick="toggleFaq(this)" onmouseenter="this.closest('.faq-item').style.borderColor='rgba(1,215,253,0.3)'" onmouseleave="this.closest('.faq-item').style.borderColor='rgba(1,215,253,0.12)'" style={{width: '100%', background: 'none', border: 'none', cursor: 'none', padding: '24px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', textAlign: 'left'}}>
<span style={{fontFamily: '\'Orbitron\', monospace', fontSize: '13px', fontWeight: '600', color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase'}}>
                What is the timeline?
              </span>
<svg className="faq-chevron" fill="none" height="18" style={{flexShrink: '0', transition: 'transform 0.3s'}} viewbox="0 0 18 18" width="18">
<path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="rgba(1,215,253,0.6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
<div className="faq-body" style={{maxHeight: '0', overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(0.22,1,0.36,1)'}}>
<p style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '1.7', color: 'rgba(255,255,255,0.55)', margin: '0', padding: '0 28px 24px'}}>
<strong style={{color: '#fff'}}>Registration:</strong>
                Now – May 31  · 
                <strong style={{color: '#fff'}}>Qualifiers:</strong>
                Jun 1–14  · 
                <strong style={{color: '#fff'}}>Knockouts:</strong>
                July  · 
                <strong style={{color: 'var(--neon)'}}>Grand Final:</strong>
                August 2026 in Dubai.
              </p>
</div>
</div>
<div className="faq-item" style={{border: '1px solid rgba(1,215,253,0.12)', background: 'rgba(1,215,253,0.02)', clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))', overflow: 'hidden', transition: 'border-color 0.3s'}}>
<button className="faq-trigger" onclick="toggleFaq(this)" onmouseenter="this.closest('.faq-item').style.borderColor='rgba(1,215,253,0.3)'" onmouseleave="this.closest('.faq-item').style.borderColor='rgba(1,215,253,0.12)'" style={{width: '100%', background: 'none', border: 'none', cursor: 'none', padding: '24px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', textAlign: 'left'}}>
<span style={{fontFamily: '\'Orbitron\', monospace', fontSize: '13px', fontWeight: '600', color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase'}}>
                How do I register?
              </span>
<svg className="faq-chevron" fill="none" height="18" style={{flexShrink: '0', transition: 'transform 0.3s'}} viewbox="0 0 18 18" width="18">
<path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="rgba(1,215,253,0.6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
<div className="faq-body" style={{maxHeight: '0', overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(0.22,1,0.36,1)'}}>
<p style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '1.7', color: 'rgba(255,255,255,0.55)', margin: '0', padding: '0 28px 24px'}}>
                Click any
                <strong style={{color: 'var(--neon)'}}>Register</strong>
                button on this page, pay the
                <strong style={{color: '#fff'}}>$10 fee</strong>
                , and you'll receive your credentials via email within minutes.
              </p>
</div>
</div>
</div>
</div>

</section>
<section id="cta-section" style={{position: 'relative', zIndex: '5'}}>
<div style={{position: 'relative', zIndex: '5', padding: '120px var(--px) 140px', overflow: 'hidden', textAlign: 'center'}}>

<div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '1px', background: 'linear-gradient(90deg,transparent 0%,rgba(1,215,253,0.3) 30%,rgba(1,215,253,0.3) 70%,transparent 100%)'}}></div>

<div style={{position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '900px', height: '700px', background: 'radial-gradient(ellipse,rgba(1,215,253,0.07) 0%,rgba(255,196,0,0.03) 40%,transparent 70%)', pointerEvents: 'none'}}></div>

<div style={{position: 'absolute', inset: '0', backgroundImage: 'linear-gradient(rgba(1,215,253,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(1,215,253,0.025) 1px,transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none'}}></div>
<div style={{position: 'relative', zIndex: '2', maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0'}}>

<div className="section-eyebrow" style={{marginBottom: '32px'}}>
<span className="eyebrow-line"></span>
<span>The World Is Watching</span>
<span className="eyebrow-line"></span>
</div>

<h2 style={{fontFamily: '\'Orbitron\', monospace', fontSize: 'clamp(28px,5.5vw,72px)', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.04em', lineHeight: '1.05', color: '#fff', margin: '0 0 8px'}}>
            YOUR COUNTRY NEEDS A
          </h2>
<h2 style={{fontFamily: '\'Orbitron\', monospace', fontSize: 'clamp(28px, 5.5vw, 72px)', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.04em', lineHeight: '1.05', color: 'var(--neon)', textShadow: '0 0 40px rgba(1, 215, 253, 0.5), 0 0 100px rgba(1,215,253,0.2)', margin: '0 0 16px'}}>
            CHAMPION.
          </h2>
<h2 style={{fontFamily: '\'Orbitron\', monospace', fontSize: 'clamp(22px, 4vw, 56px)', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: '1.1', color: 'rgba(255,255,255,0.85)', margin: '0 0 48px'}}>
            WILL YOU ANSWER?
          </h2>

<p style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '18px', fontWeight: '400', lineHeight: '1.7', color: 'rgba(255,255,255,0.55)', maxWidth: '580px', margin: '0 0 56px', letterSpacing: '0.03em'}}>
            Join
            <strong style={{color: '#fff'}}>1,000,000 traders</strong>
            in the ultimate battle for global dominance, institutional capital,
            and the
            <strong style={{color: '#ffc400'}}>Golden Bull</strong>
            .
          </p>

<a className="btn-primary" href="#" style={{fontSize: '14px', padding: '22px 52px', clipPath: 'polygon(16px 0%, 100% 0%, calc(100% - 16px) 100%, 0% 100%)', boxShadow: '0 0 40px rgba(1, 215, 253, 0.25), 0 0 80px rgba(1,215,253,0.1)'}}>
<span className="flag">🚩</span>
            REGISTER NOW
            <span className="btn-price">$10 ENTRY</span>
</a>

<div style={{marginTop: '48px', fontFamily: '\'Share Tech Mono\', monospace', fontSize: '13px', letterSpacing: '0.45em', color: 'rgba(1,215,253,0.35)', textTransform: 'uppercase'}}>
            #WEARETRADERS
          </div>

<div style={{width: '100%', maxWidth: '500px', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(1,215,253,0.2),transparent)', marginTop: '48px'}}></div>
</div>
</div>
</section>
<footer style={{position: 'relative', zIndex: '5', borderTop: '1px solid rgba(1, 215, 253, 0.12)', background: 'rgba(2,6,16,0.98)'}}>
<div style={{padding: '64px var(--px) 48px', position: 'relative', overflow: 'hidden'}}>
<div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '1px', background: 'linear-gradient(90deg,transparent 0%,rgba(1,215,253,0.25) 30%,rgba(1,215,253,0.25) 70%,transparent 100%)'}}></div>
<div style={{position: 'absolute', top: '-200px', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '400px', background: 'radial-gradient(ellipse,rgba(1,215,253,0.03) 0%,transparent 70%)', pointerEvents: 'none'}}></div>
<div style={{position: 'relative', zIndex: '2', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px'}}>
<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'}}>
<div style={{fontFamily: '\'Orbitron\', monospace', fontSize: '18px', fontWeight: '700', letterSpacing: '0.08em', color: 'var(--neon)', textShadow: '0 0 20px rgba(1,215,253,0.4)', textTransform: 'uppercase'}}>
              PROP TRADING WORLD CUP
            </div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '10px', letterSpacing: '0.45em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase'}}>
              2026  ·  Organized &amp; Sponsored by Hola Prime
            </div>
</div>
<div style={{width: '100%', maxWidth: '500px', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(1,215,253,0.15),transparent)'}}></div>
<nav style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', gap: '8px 32px'}}>
<a href="#" onmouseenter="this.style.color='var(--neon)'" onmouseleave="this.style.color='rgba(1,215,253,0.55)'" style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '11px', letterSpacing: '0.25em', color: 'rgba(1,215,253,0.55)', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.2s'}}>
              Terms of Service
            </a>
<span style={{width: '3px', height: '3px', background: 'rgba(1,215,253,0.2)', borderRadius: '50%', flexShrink: '0'}}></span>
<a href="#" onmouseenter="this.style.color='var(--neon)'" onmouseleave="this.style.color='rgba(1,215,253,0.55)'" style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '11px', letterSpacing: '0.25em', color: 'rgba(1,215,253,0.55)', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.2s'}}>
              Privacy Policy
            </a>
<span style={{width: '3px', height: '3px', background: 'rgba(1,215,253,0.2)', borderRadius: '50%', flexShrink: '0'}}></span>
<a href="#" onmouseenter="this.style.color='var(--neon)'" onmouseleave="this.style.color='rgba(1,215,253,0.55)'" style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '11px', letterSpacing: '0.25em', color: 'rgba(1,215,253,0.55)', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.2s'}}>
              Risk Disclosure
            </a>
<span style={{width: '3px', height: '3px', background: 'rgba(1,215,253,0.2)', borderRadius: '50%', flexShrink: '0'}}></span>
<a href="#" onmouseenter="this.style.color='var(--neon)'" onmouseleave="this.style.color='rgba(1,215,253,0.55)'" style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '11px', letterSpacing: '0.25em', color: 'rgba(1,215,253,0.55)', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.2s'}}>
              Support Center
            </a>
</nav>
<div style={{width: '100%', maxWidth: '760px', border: '1px solid rgba(1,215,253,0.1)', background: 'rgba(1,215,253,0.02)', clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))', padding: '20px 28px', position: 'relative', overflow: 'hidden'}}>
<div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(1,215,253,0.25),transparent)'}}></div>
<p style={{fontFamily: '\'Rajdhani\', sans-serif', fontSize: '13px', fontWeight: '400', lineHeight: '1.75', color: 'rgba(255,255,255,0.3)', margin: '0', textAlign: 'center'}}>
<strong style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(1,215,253,0.45)', textTransform: 'uppercase', display: 'block', marginBottom: '8px'}}>
                Disclaimer
              </strong>
              THE PROP TRADING WORLD CUP – 2026 ORGANIZED AND SPONSORED BY HOLA
              PRIME.
              <br/>
              All accounts provided in this competition are simulated (virtual)
              accounts. No real money is traded. “Funded Account” refers to a
              simulated account where traders can earn a performance-based
              reward. Trading involves risk. Past performance does not guarantee
              future results.
            </p>
</div>
<div style={{fontFamily: '\'Share Tech Mono\', monospace', fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.18)', textTransform: 'uppercase'}}>
            © 2026 Hola Prime. All rights reserved.
          </div>
</div>
</div>
</footer>

    </>
  );
}
