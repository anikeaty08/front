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



    // ── COUNTDOWN ──────────────────────────────────────────
function updateCountdown() {
  const target = new Date('2026-03-19T00:00:00');
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) {
    document.getElementById('cd-days').textContent = '00';
    document.getElementById('cd-hours').textContent = '00';
    document.getElementById('cd-mins').textContent = '00';
    document.getElementById('cd-secs').textContent = '00';
    return;
  }

  const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs  = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('cd-days').textContent  = String(days).padStart(2, '0');
  document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('cd-mins').textContent  = String(mins).padStart(2, '0');
  document.getElementById('cd-secs').textContent  = String(secs).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

// ── SCROLL REVEAL ──────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── MOBILE MENU ────────────────────────────────────────
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}


  
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
<div className="nav-logo" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
<img alt="Decoding Divinity" onerror="this.style.display='none'" src="https://lh3.googleusercontent.com/d/1dtrrw6rEhgeo0YhwxJ40DC6CmF7SCqEL" style={{height: '38px', width: 'auto', objectFit: 'contain'}}/>
<span>Decoding Divinity</span>
</div>
<div className="nav-links">
<a href="#program">Program</a>
<a href="#guide">Your Guide</a>
<a className="nav-cta" href="#register">Register Now</a>
</div>
<div className="hamburger" id="ham" onclick="toggleMenu()">
<span></span><span></span><span></span>
</div>
</nav>
<div className="mobile-menu" id="mobileMenu">
<a href="#program" onclick="toggleMenu()">The Program</a>
<a href="#guide" onclick="toggleMenu()">Your Guide</a>
<a href="#register" onclick="toggleMenu()">Register Now</a>
</div>

<section className="hero">
<div className="hero-bg"></div>
<div className="hero-content">
<div className="hero-badge">
<iconify-icon icon="solar:leaf-linear"></iconify-icon>
        Starting 19th March 2026  ·  🕐 Daily Meditation at 5:00 AM &amp; 7:00 PM
      </div>
<h1>45 Days <em>Mindful Meditation</em><br/>for Inner Transformation</h1>
<h1 style={{marginTop: '0.2rem', marginBottom: '2rem'}}>In the divine presence of
        <span style={{fontFamily: '\'Cormorant Garamond\', serif', fontWeight: '400', color: 'var(--gold-light)', letterSpacing: '0.02em', textShadow: '0 0 24px rgba(232,197,109,0.45)'}}>Deepali Didi</span>
</h1>
<p style={{marginTop: '-1rem'}}>5 Phases · 9 Days Each · One Powerful Shift.</p>
<a className="btn-primary" href="#register">
        Begin Your Journey
        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>

<div className="countdown-section">
<p className="countdown-label">✦ Program begins in</p>
<div className="countdown-grid">
<div className="countdown-box">
<span className="countdown-num" id="cd-days">--</span>
<span className="countdown-unit">Days</span>
</div>
<div className="countdown-box">
<span className="countdown-num" id="cd-hours">--</span>
<span className="countdown-unit">Hours</span>
</div>
<div className="countdown-box">
<span className="countdown-num" id="cd-mins">--</span>
<span className="countdown-unit">Minutes</span>
</div>
<div className="countdown-box">
<span className="countdown-num" id="cd-secs">--</span>
<span className="countdown-unit">Seconds</span>
</div>
</div>
</div>
</div>
<div className="scroll-hint">
<iconify-icon icon="solar:mouse-minimalistic-linear"></iconify-icon>
      Scroll
    </div>
</section>

<section style={{background: 'var(--green-deep)', padding: '0', position: 'relative', overflow: 'hidden'}}>

<div style={{position: 'absolute', top: '-80px', left: '-80px', width: '320px', height: '320px', borderRadius: '50%', background: 'rgba(62,169,107,0.07)', pointerEvents: 'none'}}>
</div>
<div style={{position: 'absolute', bottom: '-60px', right: '-60px', width: '260px', height: '260px', borderRadius: '50%', background: 'rgba(184,147,42,0.06)', pointerEvents: 'none'}}>
</div>
<div style={{maxWidth: '1100px', margin: '0 auto', padding: '64px 6%'}}>

<div className="reveal" style={{textAlign: 'center', marginBottom: '48px'}}>
<span style={{fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--green-bright)', fontWeight: '600'}}>✦ Program At a Glance</span>
<h2 style={{fontFamily: '\'Cormorant Garamond\', serif', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: '300', color: '#e8f8ee', marginTop: '10px', letterSpacing: '-0.02em'}}>
          Everything You Need to Know</h2>
</div>

<div className="reveal" style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', marginBottom: '20px'}}>

<div onmouseout="this.style.background='rgba(255,255,255,0.05)'; this.style.transform='translateY(0)'" onmouseover="this.style.background='rgba(62,169,107,0.1)'; this.style.transform='translateY(-4px)'" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '20px', padding: '32px 28px', position: 'relative', overflow: 'hidden', transition: 'transform 0.3s, background 0.3s'}}>
<div style={{width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(62,169,107,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', fontSize: '1.4rem'}}>
            🗓️</div>
<p style={{fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '8px', fontWeight: '500'}}>
            Start Date</p>
<p style={{fontFamily: '\'Cormorant Garamond\', serif', fontSize: '1.7rem', fontWeight: '300', color: '#e8f8ee', lineHeight: '1.1', marginBottom: '6px'}}>
            19th March</p>
<p style={{fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)'}}>2026</p>
</div>

<div onmouseout="this.style.background='rgba(255,255,255,0.05)'; this.style.transform='translateY(0)'" onmouseover="this.style.background='rgba(62,169,107,0.1)'; this.style.transform='translateY(-4px)'" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '20px', padding: '32px 28px', position: 'relative', overflow: 'hidden', transition: 'transform 0.3s, background 0.3s'}}>
<div style={{width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(62,169,107,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', fontSize: '1.4rem'}}>
            🏁</div>
<p style={{fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '8px', fontWeight: '500'}}>
            End Date</p>
<p style={{fontFamily: '\'Cormorant Garamond\', serif', fontSize: '1.7rem', fontWeight: '300', color: '#e8f8ee', lineHeight: '1.1', marginBottom: '6px'}}>
            2nd May</p>
<p style={{fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)'}}>2026</p>
</div>

<div onmouseout="this.style.background='rgba(255,255,255,0.05)'; this.style.transform='translateY(0)'" onmouseover="this.style.background='rgba(62,169,107,0.1)'; this.style.transform='translateY(-4px)'" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '20px', padding: '32px 28px', position: 'relative', overflow: 'hidden', transition: 'transform 0.3s, background 0.3s'}}>
<div style={{width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(62,169,107,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', fontSize: '1.4rem'}}>
            ⏳</div>
<p style={{fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '8px', fontWeight: '500'}}>
            Duration</p>
<p style={{fontFamily: '\'Cormorant Garamond\', serif', fontSize: '1.7rem', fontWeight: '300', color: '#e8f8ee', lineHeight: '1.1', marginBottom: '6px'}}>
            45 Days</p>
<p style={{fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginBottom: '14px'}}>5 Phases · 9 Days Each</p>
<a href="#program" onmouseout="this.style.color='var(--green-bright)';this.style.borderColor='rgba(62,169,107,0.3)'" onmouseover="this.style.color='var(--gold-light)';this.style.borderColor='rgba(232,197,109,0.4)'" style={{display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: 'var(--green-bright)', textDecoration: 'none', letterSpacing: '0.1em', fontWeight: '500', borderBottom: '1px solid rgba(62,169,107,0.3)', paddingBottom: '2px', transition: 'color 0.3s'}}>
            More Details →
          </a>
</div>
</div>

<div className="reveal" style={{display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '20px', maxWidth: '680px', margin: '0 auto'}}>

<div onmouseout="this.style.background='rgba(255,255,255,0.05)'; this.style.transform='translateY(0)'" onmouseover="this.style.background='rgba(62,169,107,0.1)'; this.style.transform='translateY(-4px)'" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '20px', padding: '32px 28px', position: 'relative', overflow: 'hidden', transition: 'transform 0.3s, background 0.3s'}}>
<div style={{width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(62,169,107,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', fontSize: '1.4rem'}}>
            📱</div>
<p style={{fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '8px', fontWeight: '500'}}>
            Platform</p>
<p style={{fontFamily: '\'Cormorant Garamond\', serif', fontSize: '1.4rem', fontWeight: '300', color: '#e8f8ee', lineHeight: '1.2', marginBottom: '6px'}}>
            WhatsApp<br/>Voice Call</p>
<p style={{fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)'}}>Join from anywhere</p>
</div>

<div onmouseout="this.style.background='rgba(255,255,255,0.05)'; this.style.transform='translateY(0)'" onmouseover="this.style.background='rgba(62,169,107,0.1)'; this.style.transform='translateY(-4px)'" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '20px', padding: '32px 28px', position: 'relative', overflow: 'hidden', transition: 'transform 0.3s, background 0.3s'}}>
<div style={{width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(62,169,107,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', fontSize: '1.4rem'}}>
            🕐</div>
<p style={{fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '8px', fontWeight: '500'}}>
            Daily Time Slots</p>
<p style={{fontFamily: '\'Cormorant Garamond\', serif', fontSize: '1.4rem', fontWeight: '300', color: '#e8f8ee', lineHeight: '1.3', marginBottom: '6px'}}>
            5:00 AM<br/>&amp; 7:00 PM</p>
<p style={{fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)'}}>Morning &amp; Evening Sessions</p>
</div>
</div>
</div>
</section>

<section className="section guide-section" id="guide">
<div className="guide-inner reveal">
<div className="guide-avatar" style={{padding: '0', overflow: 'hidden'}}>
<img alt="Deepali Didi" onerror="this.parentElement.innerHTML='DD';" src="https://lh3.googleusercontent.com/d/19Pye2mSK0LsCc3fM25i-riiO_pARWycP" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', borderRadius: '50%'}}/>
</div>
<div>
<p className="guide-label">✦ Your Spiritual Guide</p>
<h2 className="guide-name">Deepali Didi</h2>
<p className="guide-role">Spiritual Mentor · Meditation Guide · Founder – Decoding Divinity</p>
<div className="guide-stats">
<div className="stat">
<span className="stat-num">25+</span>
<span className="stat-label">Years of teaching</span>
</div>
<div className="stat">
<span className="stat-num">15+</span>
<span className="stat-label">Years in deep meditation</span>
</div>
<div className="stat">
<span className="stat-num">∞</span>
<span className="stat-label">Souls guided</span>
</div>
</div>
<p className="guide-desc" style={{marginBottom: '1.2rem'}}>
          With over 25 years of teaching experience and 15+ years of deep meditation under the guidance of her Guru,
          Deepali Didi's journey evolved from seeking mental peace to experiencing
          <strong>Atma Sakshatkar — Self-Realization ✨</strong>.
        </p>
<p style={{fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px', fontWeight: '500'}}>
          Through this awakening, she experienced:</p>
<div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1.4rem'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
<span style={{color: 'var(--green-bright)', fontSize: '0.8rem'}}>✦</span>
<span className="guide-desc" style={{fontSize: '0.85rem'}}>Clarity replacing confusion</span>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
<span style={{color: 'var(--green-bright)', fontSize: '0.8rem'}}>✦</span>
<span className="guide-desc" style={{fontSize: '0.85rem'}}>Courage overcoming fear</span>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
<span style={{color: 'var(--green-bright)', fontSize: '0.8rem'}}>✦</span>
<span className="guide-desc" style={{fontSize: '0.85rem'}}>Deep inner calm and stability</span>
</div>
</div>
<p className="guide-desc" style={{marginBottom: '1.2rem'}}>What began as personal transformation became a higher
          calling — to help others understand spirituality beyond rituals and beliefs.</p>
<p style={{fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px', fontWeight: '500'}}>
          Through Decoding Divinity she helps to:</p>
<div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1.4rem'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
<span style={{color: 'var(--gold-light)', fontSize: '0.8rem'}}>→</span>
<span className="guide-desc" style={{fontSize: '0.85rem'}}>Decode customs and rituals logically</span>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
<span style={{color: 'var(--gold-light)', fontSize: '0.8rem'}}>→</span>
<span className="guide-desc" style={{fontSize: '0.85rem'}}>Understand spirituality — Know Yourself</span>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
<span style={{color: 'var(--gold-light)', fontSize: '0.8rem'}}>→</span>
<span className="guide-desc" style={{fontSize: '0.85rem'}}>Connect ancient wisdom with modern life</span>
</div>
</div>
<div style={{padding: '16px 20px', background: 'rgba(62, 169, 107, 0.1)', borderLeft: '3px solid var(--green-bright)', borderRadius: '0 10px 10px 0'}}>
<p style={{fontFamily: '\'Cormorant Garamond\', serif', fontSize: '1rem', color: 'rgba(255,255,255,0.7)', fontStyle: 'italic', lineHeight: '1.6'}}>
            "Deepali Didi simply helps people decode what is already there — making spirituality simple, practical,
            understandable, and relevant today."
          </p>
</div>
</div>
</div>
</section>

<section className="section" style={{background: 'linear-gradient(160deg, #f0faf4, var(--cream))'}}>
<div style={{maxWidth: '900px', margin: '0 auto'}}>
<div className="reveal" style={{textAlign: 'center', marginBottom: '3rem'}}>
<p className="section-label">✦ What to Expect</p>
<h2 className="section-title">Transformations You May
          Observe<br/><em style={{fontStyle: 'italic', color: 'var(--green-leaf)'}}>During the 45-Day Journey</em> ✨🧘‍♀️</h2>
</div>
<div className="reveal" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px,1fr))', gap: '20px'}}>

<div onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 20px 48px rgba(15,45,31,0.1)'" style={{background: 'white', borderRadius: '20px', padding: '32px', border: '1px solid rgba(45,122,79,0.1)', transition: 'all 0.4s'}}>
<div style={{display: 'flex', alignItems: 'flex-start', gap: '18px'}}>
<div style={{width: '48px', height: '48px', borderRadius: '14px', background: 'var(--green-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0', fontSize: '1.4rem'}}>
              🧠</div>
<div>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'}}>
<span style={{fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--green-bright)'}}>01</span>
<h3 style={{fontFamily: '\'Cormorant Garamond\', serif', fontSize: '1.25rem', fontWeight: '400', color: 'var(--text-dark)'}}>
                  Thoughts Become Quiet</h3>
</div>
<p style={{fontSize: '0.88rem', color: 'var(--text-soft)', lineHeight: '1.7'}}>Slowly the mind moves towards
                <strong style={{color: 'var(--text-dark)'}}>thought-zero</strong> — a state of thoughtlessness where deep
                peace naturally arises.</p>
</div>
</div>
</div>

<div onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 20px 48px rgba(15,45,31,0.1)'" style={{background: 'white', borderRadius: '20px', padding: '32px', border: '1px solid rgba(45,122,79,0.1)', transition: 'all 0.4s'}}>
<div style={{display: 'flex', alignItems: 'flex-start', gap: '18px'}}>
<div style={{width: '48px', height: '48px', borderRadius: '14px', background: 'var(--green-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0', fontSize: '1.4rem'}}>
              🌊</div>
<div>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'}}>
<span style={{fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--green-bright)'}}>02</span>
<h3 style={{fontFamily: '\'Cormorant Garamond\', serif', fontSize: '1.25rem', fontWeight: '400', color: 'var(--text-dark)'}}>
                  Emotional Balance Develops</h3>
</div>
<p style={{fontSize: '0.88rem', color: 'var(--text-soft)', lineHeight: '1.7'}}>Even in stress, anxiety, or
                difficult situations, you remain <strong style={{color: 'var(--text-dark)'}}>more stable and calm</strong> —
                unshaken from within.</p>
</div>
</div>
</div>

<div onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 20px 48px rgba(15,45,31,0.1)'" style={{background: 'white', borderRadius: '20px', padding: '32px', border: '1px solid rgba(45,122,79,0.1)', transition: 'all 0.4s'}}>
<div style={{display: 'flex', alignItems: 'flex-start', gap: '18px'}}>
<div style={{width: '48px', height: '48px', borderRadius: '14px', background: 'var(--green-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0', fontSize: '1.4rem'}}>
              ✨</div>
<div>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'}}>
<span style={{fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--green-bright)'}}>03</span>
<h3 style={{fontFamily: '\'Cormorant Garamond\', serif', fontSize: '1.25rem', fontWeight: '400', color: 'var(--text-dark)'}}>
                  Intuition Awakens</h3>
</div>
<p style={{fontSize: '0.88rem', color: 'var(--text-soft)', lineHeight: '1.7'}}>Your sixth sense or
                <strong style={{color: 'var(--text-dark)'}}>आत्मा की आवाज़</strong> (inner voice of the soul) becomes
                clearer and easier to recognise.</p>
</div>
</div>
</div>

<div onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 20px 48px rgba(15,45,31,0.1)'" style={{background: 'white', borderRadius: '20px', padding: '32px', border: '1px solid rgba(45,122,79,0.1)', transition: 'all 0.4s'}}>
<div style={{display: 'flex', alignItems: 'flex-start', gap: '18px'}}>
<div style={{width: '48px', height: '48px', borderRadius: '14px', background: 'var(--green-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0', fontSize: '1.4rem'}}>
              🔮</div>
<div>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'}}>
<span style={{fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--green-bright)'}}>04</span>
<h3 style={{fontFamily: '\'Cormorant Garamond\', serif', fontSize: '1.25rem', fontWeight: '400', color: 'var(--text-dark)'}}>
                  Mental Clarity Increases</h3>
</div>
<p style={{fontSize: '0.88rem', color: 'var(--text-soft)', lineHeight: '1.7'}}>The confusion of
                <strong style={{color: 'var(--text-dark)'}}>"karoon ya na karoon"</strong> reduces. You start receiving
                clear inner guidance about what is right. ✨</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section style={{background: 'var(--green-deep)', padding: '60px 6%', position: 'relative', overflow: 'hidden'}}>
<div style={{position: 'absolute', top: '-60px', right: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(62,169,107,0.06)', pointerEvents: 'none'}}>
</div>
<div style={{position: 'absolute', bottom: '-40px', left: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(184,147,42,0.05)', pointerEvents: 'none'}}>
</div>
<div className="reveal" style={{maxWidth: '860px', margin: '0 auto', textAlign: 'center'}}>
<div style={{fontSize: '2.5rem', marginBottom: '1.2rem', opacity: '0.4'}}>❝</div>
<p style={{fontFamily: '\'Cormorant Garamond\', serif', fontSize: 'clamp(1.3rem,3vw,1.9rem)', fontWeight: '300', color: '#e8f8ee', lineHeight: '1.6', marginBottom: '1.6rem', letterSpacing: '0.01em'}}>
        Meditation doesn't change the world around you —<br/>
      it changes the <em style={{color: 'var(--gold-light)'}}>way you experience it.</em>
</p>
<div style={{width: '48px', height: '1px', background: 'rgba(184,147,42,0.4)', margin: '0 auto 1.6rem'}}></div>
<p style={{fontFamily: '\'Cormorant Garamond\', serif', fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', fontWeight: '300', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6', fontStyle: 'italic'}}>
        Meditation upgrades your brain from
        <strong style={{color: 'var(--green-bright)', fontStyle: 'normal', fontWeight: '500'}}>reactive mode</strong> to
        <strong style={{color: 'var(--gold-light)', fontStyle: 'normal', fontWeight: '500'}}>responsive mode.</strong>
</p>
</div>
</section>

<section className="section" style={{background: 'var(--cream)'}}>
<div className="reveal" style={{maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center'}}>

<div>
<p className="section-label">✦ The Science Behind It</p>
<h2 className="section-title">Meditation
          =<br/><em style={{fontStyle: 'italic', color: 'var(--green-leaf)'}}>Brain Training</em></h2>
<p className="section-body" style={{marginBottom: '1.5rem'}}>
          This isn't religion. This isn't an escape. <strong style={{color: 'var(--text-dark)'}}>Yeh Science hai.</strong>
          Every session rewires your neural pathways, lowers cortisol, and builds the mental architecture for a calmer,
          sharper, more conscious life.
        </p>
<div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
<div style={{display: 'flex', alignItems: 'flex-start', gap: '14px'}}>
<div style={{width: '40px', height: '40px', borderRadius: '11px', background: 'var(--green-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0', fontSize: '1.1rem'}}>
              🧠</div>
<div>
<p style={{fontSize: '0.88rem', fontWeight: '500', color: 'var(--text-dark)', marginBottom: '2px'}}>Brain Rewire Kare
              </p>
<p style={{fontSize: '0.8rem', color: 'var(--text-soft)', lineHeight: '1.5'}}>Memory improves, emotional balance
                stabilises, overthinking reduces.</p>
</div>
</div>
<div style={{display: 'flex', alignItems: 'flex-start', gap: '14px'}}>
<div style={{width: '40px', height: '40px', borderRadius: '11px', background: 'var(--green-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0', fontSize: '1.1rem'}}>
              💤</div>
<div>
<p style={{fontSize: '0.88rem', fontWeight: '500', color: 'var(--text-dark)', marginBottom: '2px'}}>Stress &amp; Anxiety
                Kam Hoti Hai</p>
<p style={{fontSize: '0.8rem', color: 'var(--text-soft)', lineHeight: '1.5'}}>Cortisol drops, sleep deepens, nervous
                system finds its balance.</p>
</div>
</div>
<div style={{display: 'flex', alignItems: 'flex-start', gap: '14px'}}>
<div style={{width: '40px', height: '40px', borderRadius: '11px', background: 'var(--green-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0', fontSize: '1.1rem'}}>
              🎯</div>
<div>
<p style={{fontSize: '0.88rem', fontWeight: '500', color: 'var(--text-dark)', marginBottom: '2px'}}>Focus &amp;
                Productivity Badhe</p>
<p style={{fontSize: '0.8rem', color: 'var(--text-soft)', lineHeight: '1.5'}}>Zyada focus, kam distraction — even
                Google &amp; MNCs use it for employees.</p>
</div>
</div>
</div>
<div style={{marginTop: '2rem', padding: '18px 22px', background: 'var(--green-deep)', borderRadius: '14px', borderLeft: '3px solid var(--gold)'}}>
<p style={{fontFamily: '\'Cormorant Garamond\', serif', fontSize: '1.1rem', color: '#e8f8ee', fontStyle: 'italic', lineHeight: '1.5'}}>
            "Aapka Brain Badlega, Aur Brain Aapki Life Badlega."
          </p>
</div>
</div>

<div style={{position: 'relative'}}>
<div style={{position: 'absolute', inset: '-16px', background: 'linear-gradient(135deg,rgba(62,169,107,0.1),rgba(184,147,42,0.08))', borderRadius: '32px', zIndex: '0'}}>
</div>
<img alt="Meditation = Brain Training Infographic" onerror="this.style.display='none';" src="https://lh3.googleusercontent.com/d/1cHLWeQV6Fq57z-DQ0eIpVc5sXNErM_61" style={{width: '100%', borderRadius: '24px', boxShadow: '0 24px 64px rgba(15,45,31,0.15)', position: 'relative', zIndex: '1', display: 'block'}}/>
</div>
</div>
</section>

<section className="section phases-bg" id="program">
<div style={{maxWidth: '1100px', margin: '0 auto'}}>
<div className="reveal" style={{textAlign: 'center', maxWidth: '620px', margin: '0 auto 10px'}}>
<p className="section-label">✦ The 5-Phase Journey</p>
<h2 className="section-title">The Path to Awakening</h2>
<p className="section-body">Scientifically and spiritually designed to cleanse your energy, rewire your
          subconscious, and elevate your daily awareness — one phase at a time.</p>
</div>
<div className="divider reveal"><span></span><em>🌿</em><span></span></div>
<div className="phases-grid">

<div className="phase-card reveal">
<span className="phase-num">Phase 01 · Days 1–9</span>
<div className="phase-icon">
<iconify-icon icon="solar:chat-round-line-linear"></iconify-icon>
</div>
<h3 className="phase-title">Bura Mat Bolo</h3>
<p className="phase-sub">Speak Divine</p>
<ul className="phase-ul">
<li>No gossip, no complaints, no harsh words</li>
<li>Every sentence spoken with full consciousness</li>
<li>Your speech is your energy field</li>
</ul>
<p className="phase-wisdom">"Words create vibration. Aapki speech hi aapka energy field banati hai."</p>
</div>

<div className="phase-card reveal">
<span className="phase-num">Phase 02 · Days 10–18</span>
<div className="phase-icon">
<iconify-icon icon="solar:eye-linear"></iconify-icon>
</div>
<h3 className="phase-title">Bura Mat Dekho</h3>
<p className="phase-sub">See the Divine</p>
<ul className="phase-ul">
<li>Avoid negative or low-vibration content</li>
<li>See virtues in others, not their flaws</li>
<li>Conscious, intentional social media use</li>
</ul>
<p className="phase-wisdom">"Nazar badlegi, nazara badlega."</p>
</div>

<div className="phase-card reveal">
<span className="phase-num">Phase 03 · Days 19–27</span>
<div className="phase-icon">
<iconify-icon icon="solar:music-note-linear"></iconify-icon>
</div>
<h3 className="phase-title">Bura Mat Suno</h3>
<p className="phase-sub">Listen Divine</p>
<ul className="phase-ul">
<li>No unnecessary criticism or gossip</li>
<li>Choose uplifting talks, mantras, silence</li>
<li>Practice deep, conscious listening</li>
</ul>
<p className="phase-wisdom">"Jo aap sunte ho, wahi subconscious mein store hota hai."</p>
</div>

<div className="phase-card reveal">
<span className="phase-num">Phase 04 · Days 28–36</span>
<div className="phase-icon">
<iconify-icon icon="solar:lightbulb-minimalistic-linear"></iconify-icon>
</div>
<h3 className="phase-title">Bura Mat Socho</h3>
<p className="phase-sub">Think Divine</p>
<ul className="phase-ul">
<li>Cultivate full thought awareness</li>
<li>Observe and break negative mental loops</li>
<li>Replace reaction with conscious reflection</li>
</ul>
<p className="phase-wisdom">"Soch sudhregi toh life sudhregi."</p>
</div>

<div className="phase-card phase-full reveal">
<div style={{display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center'}}>
<div style={{flex: '1', minWidth: '260px'}}>
<span className="phase-num">Phase 05 · Days 37–45 · The Culmination</span>
<h3 className="phase-title" style={{fontSize: '2rem'}}>Self Analysis &amp;<br/>Inner Reflection</h3>
<p className="phase-sub">The Synthesis — Feel the Transformation</p>
<ul className="phase-ul" style={{maxWidth: '440px'}}>
<li>Daily journaling to deeply observe behavioral shifts</li>
<li>Watch yourself move from reaction to conscious response</li>
<li>Measure and celebrate your own transformation</li>
</ul>
<p className="phase-wisdom" style={{maxWidth: '440px'}}>"Ab practice nahi… transformation feel karo."</p>
</div>
<div style={{flexShrink: '0', textAlign: 'center', minWidth: '160px'}}>
<div style={{fontSize: '5rem', lineHeight: '1', marginBottom: '0.5rem'}}>🪷</div>
<div style={{fontFamily: '\'Cormorant Garamond\', serif', fontSize: '1rem', color: 'var(--gold)', fontStyle: 'italic'}}>
                Atma Sakshatkar</div>
<div style={{fontSize: '0.72rem', color: 'var(--text-soft)', marginTop: '4px', letterSpacing: '0.1em'}}>
                Self-Realization</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section style={{background: 'linear-gradient(135deg, #0a1f14 0%, #1a3d28 50%, #0f2d1f 100%)', padding: '70px 6%', position: 'relative', overflow: 'hidden', textAlign: 'center'}}>
<div style={{position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(184,147,42,0.05)', pointerEvents: 'none'}}>
</div>
<div style={{position: 'absolute', bottom: '-60px', left: '-60px', width: '240px', height: '240px', borderRadius: '50%', background: 'rgba(62,169,107,0.06)', pointerEvents: 'none'}}>
</div>
<div style={{position: 'absolute', bottom: '-60px', right: '-60px', width: '240px', height: '240px', borderRadius: '50%', background: 'rgba(62,169,107,0.06)', pointerEvents: 'none'}}>
</div>
<div className="reveal" style={{maxWidth: '760px', margin: '0 auto', position: 'relative', zIndex: '1'}}>
<div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🌊🪷🔥</div>
<p style={{fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold-light)', fontWeight: '600', marginBottom: '1rem'}}>
        ✦ Sacred Closing · 3rd May 2026 · Goa</p>
<h2 style={{fontFamily: '\'Cormorant Garamond\', serif', fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: '300', color: '#e8f8ee', lineHeight: '1.3', marginBottom: '1.2rem'}}>
        Anushthan &amp; Havan in Goa —<br/>
<em style={{color: 'var(--gold-light)'}}>in the presence of Deepali Didi</em>
</h2>
<div style={{width: '60px', height: '1px', background: 'rgba(184,147,42,0.5)', margin: '0 auto 1.4rem'}}></div>
<p style={{fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: '1.8', maxWidth: '540px', margin: '0 auto 2rem'}}>
        The 45-day journey culminates in a sacred gathering — a divine Anushthan and Havan on the shores of Goa, in the
        blessed presence of Deepali Didi.
      </p>
<a href="#register" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 8px 24px rgba(184,147,42,0.25)'" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 14px 32px rgba(184,147,42,0.35)'" style={{display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, var(--gold), #c8a040)', color: '#0f2d1f', textDecoration: 'none', padding: '13px 30px', borderRadius: '100px', fontSize: '0.83rem', fontWeight: '600', letterSpacing: '0.08em', transition: 'all 0.3s', boxShadow: '0 8px 24px rgba(184,147,42,0.25)'}}>
        Click to Apply →
      </a>
</div>
</section>

<section className="section register-section" id="register">
<div style={{maxWidth: '680px', margin: '0 auto'}}>
<div className="reveal" style={{textAlign: 'center', marginBottom: '2.5rem'}}>
<p className="section-label">✦ Secure Your Spot</p>
<h2 className="section-title">Commit to Your Evolution</h2>
<p className="section-body">Fill out the form below to join the 45-day inner transformation journey.</p>
</div>
<div className="form-wrap reveal" style={{padding: '12px', background: 'white'}}>
<iframe frameborder="0" height="900" loading="lazy" marginheight="0" marginwidth="0" src="https://docs.google.com/forms/d/e/1FAIpQLSeMTM5ctBdTTFnKNwonpb0z1JIzTINqNbJfciRtHQiGbbanrA/viewform?embedded=true" style={{borderRadius: '20px', display: 'block'}} width="100%">Loading form…</iframe>
</div>
</div>
</section>

<footer>
<div className="footer-logo" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '0.8rem'}}>
<img alt="Decoding Divinity" onerror="this.style.display='none'" src="https://lh3.googleusercontent.com/d/1dtrrw6rEhgeo0YhwxJ40DC6CmF7SCqEL" style={{height: '52px', width: 'auto', objectFit: 'contain'}}/>
<span>Decoding Divinity</span>
</div>
<p className="footer-tagline">Guiding Souls · Awakening Awareness · Living Consciously</p>
<p className="footer-copy">© 2026 Decoding Divinity | A Path Towards Peaceful Life</p>
</footer>


    </>
  );
}
