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



    // Navigation
    function navigateTo(page) {
        document.querySelectorAll('.page-section').forEach(el => el.classList.remove('active'));
        const target = document.getElementById('page-' + page);
        if (target) {
            target.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => observeFadeUps(), 100);
        }
        // Update active nav
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    }

    // Mobile menu
    function toggleMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        const hamburger = document.getElementById('hamburger');
        menu.classList.toggle('open');
        hamburger.classList.toggle('open');
    }

    // Scroll header
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('main-nav');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Fade-up observer
    function observeFadeUps() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
        document.querySelectorAll('.fade-up:not(.visible)').forEach(el => observer.observe(el));
    }
    observeFadeUps();

    // Calculator
    function updateCalc() {
        const amount = parseInt(document.getElementById('calc-amount').value);
        const years = parseInt(document.getElementById('calc-years').value);
        const rate = parseInt(document.getElementById('calc-rate').value);

        document.getElementById('calc-amount-label').textContent = amount.toLocaleString('cs-CZ') + ' Kč';
        document.getElementById('calc-years-label').textContent = years + ' let';
        document.getElementById('calc-rate-label').textContent = rate + ' %';
        document.getElementById('calc-result-years').textContent = years;

        const monthlyRate = rate / 100 / 12;
        const months = years * 12;
        const futureValue = amount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
        const invested = amount * months;

        document.getElementById('calc-result').textContent = Math.round(futureValue).toLocaleString('cs-CZ') + ' Kč';
        document.getElementById('calc-invested').textContent = invested.toLocaleString('cs-CZ') + ' Kč';
    }
    updateCalc();

    // Case detail toggle
    function toggleCase(id, btn) {
        const detail = document.getElementById(id);
        detail.classList.toggle('open');
        if (detail.classList.contains('open')) {
            btn.innerHTML = 'Zobrazit méně <iconify-icon icon="solar:alt-arrow-up-linear" width="16"></iconify-icon>';
        } else {
            btn.innerHTML = 'Zobrazit více <iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>';
        }
    }

    // Tag toggle
    function toggleTag(el) {
        el.classList.toggle('selected');
    }

    // Form submit
    function handleFormSubmit(e) {
        e.preventDefault();
        document.getElementById('contact-form').style.display = 'none';
        document.getElementById('form-success').style.display = 'block';
    }

    // Particle canvas
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animFrame;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    function createParticles() {
        particles = [];
        const count = Math.min(Math.floor(window.innerWidth / 15), 80);
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                size: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.3 + 0.05
            });
        }
    }
    createParticles();

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(34, 197, 94, ${p.opacity})`;
            ctx.fill();
        });
        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(34, 197, 94, ${0.03 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
        animFrame = requestAnimationFrame(animateParticles);
    }
    animateParticles();

    // Ticker data
    const tickerData = [
        { name: 'S&P 500', price: '5,842.01', change: '+0.74%', dir: 'positive' },
        { name: 'NASDAQ', price: '18,847.28', change: '+1.12%', dir: 'positive' },
        { name: 'DAX', price: '19,425.73', change: '+0.38%', dir: 'positive' },
        { name: 'EUR/CZK', price: '25.28', change: '-0.12%', dir: 'negative' },
        { name: 'USD/CZK', price: '23.45', change: '+0.05%', dir: 'positive' },
        { name: 'Bitcoin', price: '$104,250', change: '+2.35%', dir: 'positive' },
        { name: 'Zlato', price: '$2,658.40', change: '+0.18%', dir: 'positive' },
        { name: 'MSCI World', price: '3,612.55', change: '+0.52%', dir: 'positive' },
        { name: 'PX Index', price: '1,812.34', change: '+0.28%', dir: 'positive' },
        { name: 'EUR/USD', price: '1.0782', change: '-0.15%', dir: 'negative' },
        { name: 'Ropa Brent', price: '$73.42', change: '-0.65%', dir: 'negative' },
        { name: 'Ethereum', price: '$3,892', change: '+1.87%', dir: 'positive' },
    ];

    function buildTicker() {
        const track = document.getElementById('ticker-track');
        let html = '';
        // Double the items for seamless loop
        for (let r = 0; r < 2; r++) {
            tickerData.forEach(item => {
                html += `<div class="ticker-item">
                    <span class="ticker-item-name">${item.name}</span>
                    <span class="ticker-item-price">${item.price}</span>
                    <span class="ticker-item-change ${item.dir}">${item.change}</span>
                </div>`;
            });
        }
        track.innerHTML = html;
    }
    buildTicker();

    // Responsive grid fix for services page
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .md-grid-2 { grid-template-columns: 1fr !important; }
        }
    `;
    document.head.appendChild(style);
    
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
      
<canvas height="816" id="particle-canvas" width="1072"></canvas>
<header className="nav-header" id="main-nav">
<div style={{maxWidth: '1200px', margin: '0 auto', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
<a href="#" onclick="navigateTo('home')" style={{display: 'flex', alignItems: 'center', gap: '10px', zIndex: '1001'}}>
<div style={{width: '36px', height: '36px', borderRadius: '10px', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', color: 'var(--primary-dark)', fontSize: '16px', letterSpacing: '-0.05em'}}>JK</div>
<span style={{fontWeight: '600', fontSize: '16px', letterSpacing: '-0.03em', color: 'var(--text-primary)'}}>Jan Kurdiovský</span>
</a>
<nav className="desktop-nav" style={{display: 'flex', alignItems: 'center', gap: '28px'}}>
<a className="nav-link" href="#" onclick="navigateTo('home')" style={{fontSize: '14px'}}>Domů</a>
<a className="nav-link" href="#" onclick="navigateTo('services')" style={{fontSize: '14px'}}>Služby</a>
<a className="nav-link" href="#" onclick="navigateTo('process')" style={{fontSize: '14px'}}>Spolupráce</a>
<a className="nav-link" href="#" onclick="navigateTo('about')" style={{fontSize: '14px'}}>O mně</a>
<a className="nav-link" href="#" onclick="navigateTo('references')" style={{fontSize: '14px'}}>Reference</a>
<a className="nav-link" href="#" onclick="navigateTo('blog')" style={{fontSize: '14px'}}>Blog</a>
<a className="btn-primary btn-sm" href="#" onclick="navigateTo('contact')">Domluvit konzultaci</a>
</nav>
<div className="hamburger" id="hamburger" onclick="toggleMobileMenu()">
<span></span>
<span></span>
<span></span>
</div>
</div>
</header>
<div className="mobile-menu" id="mobile-menu">
<a href="#" onclick="navigateTo('home'); toggleMobileMenu();">Domů</a>
<a href="#" onclick="navigateTo('services'); toggleMobileMenu();">Služby</a>
<a href="#" onclick="navigateTo('process'); toggleMobileMenu();">Spolupráce</a>
<a href="#" onclick="navigateTo('about'); toggleMobileMenu();">O mně</a>
<a href="#" onclick="navigateTo('references'); toggleMobileMenu();">Reference</a>
<a href="#" onclick="navigateTo('blog'); toggleMobileMenu();">Blog</a>
<a className="btn-primary" href="#" onclick="navigateTo('contact'); toggleMobileMenu();" style={{marginTop: '16px'}}>Domluvit konzultaci</a>
</div>
<div id="page-content">

<div className="page-section active" id="page-home">

<section className="hero-gradient" style={{minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', paddingTop: '80px'}}>
<div className="" style={{maxWidth: '1200px', margin: '0 auto', padding: '60px 24px', width: '100%'}}>
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
<div className="flex-1 text-center lg:text-left">
<div className="fade-up visible" style={{marginBottom: '24px'}}>
<span style={{display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '20px', border: '1px solid var(--card-border)', background: 'var(--card-bg)', fontSize: '13px', color: 'var(--text-secondary)'}}>
<span className="pulse-dot"></span>
                                    Nezávislé finanční poradenství
                                </span>
</div>
<h1 className="fade-up fade-up-delay-1 visible" style={{fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: '700', letterSpacing: '-0.04em', lineHeight: '1.1', marginBottom: '24px'}}>
                                Finanční plán, který rozumí <span style={{color: 'var(--accent)'}}>vašemu životu</span>
</h1>
<p className="fade-up fade-up-delay-2 visible" style={{fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.7', fontWeight: '300'}}>
                                Spojuji lidský přístup s moderními nástroji. Společně vytvoříme strategii, která pokryje investice, pojištění, hypotéky i dlouhodobé cíle — vše na jednom místě.
                            </p>
<div className="fade-up fade-up-delay-3 visible" style={{display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginBottom: '48px'}}>
<a className="btn-primary" href="#" onclick="navigateTo('contact')" style={{fontSize: '15px'}}>
                                    Domluvit úvodní konzultaci zdarma
                                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="btn-secondary" href="#" onclick="navigateTo('services')" style={{fontSize: '15px'}}>
                                    Získat orientační návrh plánu
                                </a>
</div>
<div className="fade-up fade-up-delay-4 visible" style={{display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', color: 'var(--text-secondary)', fontSize: '14px'}}>
<span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
<iconify-icon icon="solar:widget-linear" style={{color: 'var(--accent)'}} width="18"></iconify-icon>
                                    Investice, pojištění, hypotéky, úvěry
                                </span>
<span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
<iconify-icon icon="solar:shield-check-linear" style={{color: 'var(--accent)'}} width="18"></iconify-icon>
                                    Transparentní odměna
                                </span>
<span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
<iconify-icon icon="solar:heart-linear" style={{color: 'var(--accent)'}} width="18"></iconify-icon>
                                    Dlouhodobá péče
                                </span>
</div>
</div>

<div className="fade-up fade-up-delay-2 hidden lg:block flex-shrink-0 visible" style={{width: '340px'}}>
<div className="photo-frame" style={{height: '440px', boxShadow: '0 30px 80px rgba(0, 0, 0, 0.4), 0 0 60px rgba(34,197,94,0.08)'}}>
<img alt="Jan Kurdiovský" className="object-auto" onerror="this.style.display='none'; this.parentElement.innerHTML='&lt;div style=\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg, rgba(34,197,94,0.08), rgba(15,23,42,0.9));\' &gt;&lt;iconify-icon icon=\'solar:user-circle-linear\' width=\'80\' style=\'color:var(--text-muted);\'&gt;&lt;/iconify-icon&gt;&lt;/div&gt;';" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/878f10eb-c1c1-448d-821c-0b380990737e_800w.png"/>
<div style={{position: 'absolute', bottom: '0', left: '0', right: '0', padding: '24px', zIndex: '2'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px'}}>
<span className="google-stars text-sm">★★★★★</span>
<span style={{fontSize: '13px', color: 'var(--text-secondary)'}}>5.0 na Google</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div style={{position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '12px', animation: 'subtlePulse 2s ease infinite'}}>
<span>Scrollujte dolů</span>
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</section>

<section className="section-gradient calendly-section" style={{padding: '80px 24px'}}>
<div style={{maxWidth: '1000px', margin: '0 auto'}}>
<div className="fade-up" style={{textAlign: 'center', marginBottom: '48px'}}>
<p style={{color: 'var(--accent)', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Rezervace</p>
<h2 className="tracking-tight" style={{fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', letterSpacing: '-0.03em', marginBottom: '16px'}}>Zarezervujte si termín online</h2>
<p style={{color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto', lineHeight: '1.7'}}>Vyberte si volný termín přímo v kalendáři. Úvodní konzultace je zdarma a nezávazná.</p>
</div>
<div className="fade-up glass-card" style={{overflow: 'hidden', padding: '4px'}}>
<div id="calendly-embed" style={{minHeight: '680px', borderRadius: '14px', overflow: 'hidden'}}>

<div className="calendly-inline-widget" data-processed="true" data-url="https://calendly.com/d00786b7-c743-4740-b182-7bc9ecd0e2ad?hide_gdpr_banner=1&amp;background_color=0f1729&amp;text_color=f1f5f9&amp;primary_color=22c55e" style={{position: 'relative', minWidth: '320px', height: '680px'}}><div className="calendly-spinner"><div className="calendly-bounce1"></div><div className="calendly-bounce2"></div><div className="calendly-bounce3"></div></div><iframe frameborder="0" height="100%" src="https://calendly.com/d00786b7-c743-4740-b182-7bc9ecd0e2ad?embed_domain=&amp;embed_type=Inline&amp;hide_gdpr_banner=1&amp;background_color=0f1729&amp;text_color=f1f5f9&amp;primary_color=22c55e" title="Select a Date &amp; Time - Calendly" width="100%"></iframe></div>
</div>
</div>
</div>
</section>

<section className="section-gradient" style={{padding: '100px 24px'}}>
<div style={{maxWidth: '1200px', margin: '0 auto'}}>
<div className="fade-up" style={{textAlign: 'center', marginBottom: '64px'}}>
<p style={{color: 'var(--accent)', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Služby</p>
<h2 className="tracking-tight" style={{fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', letterSpacing: '-0.03em', marginBottom: '16px'}}>Vše pod jednou střechou</h2>
<p style={{color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto', lineHeight: '1.7'}}>Nemusíte řešit finance na pěti místech. Postarám se o celý váš finanční ekosystém.</p>
</div>
<div className="services-scroll" style={{paddingBottom: '8px'}}>
<div className="glass-card fade-up" style={{padding: '32px', minWidth: '280px', flex: '1'}}>
<div style={{width: '48px', height: '48px', borderRadius: '12px', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
<iconify-icon icon="solar:chart-2-linear" style={{color: 'var(--accent)'}} width="24"></iconify-icon>
</div>
<h3 style={{fontWeight: '600', fontSize: '18px', marginBottom: '10px', letterSpacing: '-0.02em'}}>Investice a budování majetku</h3>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px'}}>Dlouhodobé investování přizpůsobené vašim cílům. Definujeme horizont, toleranci rizika a nastavíme strategii.</p>
<a href="#" onclick="navigateTo('services')" style={{color: 'var(--accent)', fontSize: '14px', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px'}}>
                                Zjistit víc <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="glass-card fade-up fade-up-delay-1" style={{padding: '32px', minWidth: '280px', flex: '1'}}>
<div style={{width: '48px', height: '48px', borderRadius: '12px', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
<iconify-icon icon="solar:shield-linear" style={{color: 'var(--accent)'}} width="24"></iconify-icon>
</div>
<h3 style={{fontWeight: '600', fontSize: '18px', marginBottom: '10px', letterSpacing: '-0.02em'}}>Pojištění a ochrana</h3>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px'}}>Ochrana příjmů, rodiny i majetku. Nastavíme pojištění tak, aby dávalo smysl — ne maximum provize.</p>
<a href="#" onclick="navigateTo('services')" style={{color: 'var(--accent)', fontSize: '14px', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px'}}>
                                Zjistit víc <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="glass-card fade-up fade-up-delay-2" style={{padding: '32px', minWidth: '280px', flex: '1'}}>
<div style={{width: '48px', height: '48px', borderRadius: '12px', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
<iconify-icon icon="solar:home-smile-linear" style={{color: 'var(--accent)'}} width="24"></iconify-icon>
</div>
<h3 style={{fontWeight: '600', fontSize: '18px', marginBottom: '10px', letterSpacing: '-0.02em'}}>Hypotéky</h3>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px'}}>Porovnám nabídky bank za vás, vyřeším refinancování a pohlídám dofixování.</p>
<a href="#" onclick="navigateTo('services')" style={{color: 'var(--accent)', fontSize: '14px', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px'}}>
                                Zjistit víc <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="glass-card fade-up fade-up-delay-3" style={{padding: '32px', minWidth: '280px', flex: '1'}}>
<div style={{width: '48px', height: '48px', borderRadius: '12px', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
<iconify-icon icon="solar:wallet-linear" style={{color: 'var(--accent)'}} width="24"></iconify-icon>
</div>
<h3 style={{fontWeight: '600', fontSize: '18px', marginBottom: '10px', letterSpacing: '-0.02em'}}>Úvěry a financování</h3>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px'}}>Zodpovědné zadlužení jako nástroj, ne past. Pomohu s konsolidací i nastavením splátek.</p>
<a href="#" onclick="navigateTo('services')" style={{color: 'var(--accent)', fontSize: '14px', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px'}}>
                                Zjistit víc <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="glass-card fade-up fade-up-delay-4" style={{padding: '32px', minWidth: '280px', flex: '1'}}>
<div style={{width: '48px', height: '48px', borderRadius: '12px', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
<iconify-icon icon="solar:routing-linear" style={{color: 'var(--accent)'}} width="24"></iconify-icon>
</div>
<h3 style={{fontWeight: '600', fontSize: '18px', marginBottom: '10px', letterSpacing: '-0.02em'}}>Dlouhodobý finanční plán</h3>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px'}}>Celkový pohled na vaše finance — od rezervy přes střednědobé cíle až po důchod.</p>
<a href="#" onclick="navigateTo('services')" style={{color: 'var(--accent)', fontSize: '14px', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px'}}>
                                Zjistit víc <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="section-mid" style={{padding: '100px 24px'}}>
<div style={{maxWidth: '1200px', margin: '0 auto'}}>
<div className="fade-up" style={{textAlign: 'center', marginBottom: '64px'}}>
<p style={{color: 'var(--accent)', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Proces</p>
<h2 className="tracking-tight" style={{fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', letterSpacing: '-0.03em', marginBottom: '16px'}}>Jak to funguje</h2>
<p style={{color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto', lineHeight: '1.7'}}>Čtyři jednoduché kroky k finančnímu klidu.</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px'}}>
<div className="fade-up" style={{textAlign: 'center', padding: '32px 24px'}}>
<div style={{width: '56px', height: '56px', borderRadius: '50%', border: '2px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontWeight: '700', color: 'var(--accent)', fontSize: '18px'}}>1</div>
<h3 style={{fontWeight: '600', fontSize: '17px', marginBottom: '10px', letterSpacing: '-0.02em'}}>Úvodní rozhovor</h3>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Společně zmapujeme vaši aktuální situaci, příjmy, výdaje, závazky a cíle. Nezávazně a zdarma.</p>
</div>
<div className="fade-up fade-up-delay-1" style={{textAlign: 'center', padding: '32px 24px'}}>
<div style={{width: '56px', height: '56px', borderRadius: '50%', border: '2px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontWeight: '700', color: 'var(--accent)', fontSize: '18px'}}>2</div>
<h3 style={{fontWeight: '600', fontSize: '17px', marginBottom: '10px', letterSpacing: '-0.02em'}}>Návrh řešení</h3>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Připravím finanční plán s konkrétními čísly. Vysvětlím vám, proč volím daná řešení.</p>
</div>
<div className="fade-up fade-up-delay-2" style={{textAlign: 'center', padding: '32px 24px'}}>
<div style={{width: '56px', height: '56px', borderRadius: '50%', border: '2px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontWeight: '700', color: 'var(--accent)', fontSize: '18px'}}>3</div>
<h3 style={{fontWeight: '600', fontSize: '17px', marginBottom: '10px', letterSpacing: '-0.02em'}}>Realizace</h3>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Zařídím vše potřebné — od nastavení investic přes sjednání pojištění po vyřízení hypotéky.</p>
</div>
<div className="fade-up fade-up-delay-3" style={{textAlign: 'center', padding: '32px 24px'}}>
<div style={{width: '56px', height: '56px', borderRadius: '50%', border: '2px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontWeight: '700', color: 'var(--accent)', fontSize: '18px'}}>4</div>
<h3 style={{fontWeight: '600', fontSize: '17px', marginBottom: '10px', letterSpacing: '-0.02em'}}>Pravidelné revize</h3>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Váš plán průběžně aktualizuji. Životní situace se mění — váš finanční plán se přizpůsobí.</p>
</div>
</div>
</div>
</section>

<section className="section-dark" style={{padding: '100px 24px'}}>
<div style={{maxWidth: '1000px', margin: '0 auto'}}>
<div className="fade-up" style={{textAlign: 'center', marginBottom: '64px'}}>
<p style={{color: 'var(--accent)', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Proč právě já</p>
<h2 className="tracking-tight" style={{fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', letterSpacing: '-0.03em', marginBottom: '16px'}}>Nezávislý poradce vs. prodejce produktů</h2>
</div>
<div className="glass-card fade-up" style={{overflow: 'hidden'}}>
<div style={{display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '0', fontSize: '14px'}}>
<div style={{padding: '20px 24px', fontWeight: '600', color: 'var(--text-muted)', borderBottom: '1px solid var(--card-border)'}}></div>
<div style={{padding: '20px 16px', textAlign: 'center', fontWeight: '600', color: 'var(--text-muted)', borderBottom: '1px solid var(--card-border)', fontSize: '13px'}}>Klasický prodejce</div>
<div style={{padding: '20px 16px', textAlign: 'center', fontWeight: '600', color: 'var(--accent)', borderBottom: '1px solid var(--card-border)', fontSize: '13px'}}>Jan Kurdiovský</div>
<div className="compare-row" style={{padding: '16px 24px', borderBottom: '1px solid var(--card-border)', color: 'var(--text-secondary)', display: 'grid', gridColumn: '1 / -1', gridTemplateColumns: '2fr 1fr 1fr'}}>
<span>Odměna poradce</span>
<span style={{textAlign: 'center', color: 'var(--text-muted)'}}>Provize od pojišťovny</span>
<span style={{textAlign: 'center', color: 'var(--accent-light)'}}>Transparentní</span>
</div>
<div className="compare-row" style={{padding: '16px 24px', borderBottom: '1px solid var(--card-border)', color: 'var(--text-secondary)', display: 'grid', gridColumn: '1 / -1', gridTemplateColumns: '2fr 1fr 1fr'}}>
<span>Přístup ke klientovi</span>
<span style={{textAlign: 'center', color: 'var(--text-muted)'}}>Jednorázový prodej</span>
<span style={{textAlign: 'center', color: 'var(--accent-light)'}}>Dlouhodobá péče</span>
</div>
<div className="compare-row" style={{padding: '16px 24px', borderBottom: '1px solid var(--card-border)', color: 'var(--text-secondary)', display: 'grid', gridColumn: '1 / -1', gridTemplateColumns: '2fr 1fr 1fr'}}>
<span>Cíl poradce</span>
<span style={{textAlign: 'center', color: 'var(--text-muted)'}}>Prodat produkt</span>
<span style={{textAlign: 'center', color: 'var(--accent-light)'}}>Splnit váš cíl</span>
</div>
<div className="compare-row" style={{padding: '16px 24px', borderBottom: '1px solid var(--card-border)', color: 'var(--text-secondary)', display: 'grid', gridColumn: '1 / -1', gridTemplateColumns: '2fr 1fr 1fr'}}>
<span>Nezávislost</span>
<span style={{textAlign: 'center', color: 'var(--text-muted)'}}>Omezený výběr</span>
<span style={{textAlign: 'center', color: 'var(--accent-light)'}}>Celý trh</span>
</div>
<div className="compare-row" style={{padding: '16px 24px', color: 'var(--text-secondary)', display: 'grid', gridColumn: '1 / -1', gridTemplateColumns: '2fr 1fr 1fr'}}>
<span>Pravidelné revize</span>
<span style={{textAlign: 'center', color: 'var(--text-muted)'}}>Zřídka</span>
<span style={{textAlign: 'center', color: 'var(--accent-light)'}}>Každý rok</span>
</div>
</div>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginTop: '48px'}}>
<div className="fade-up" style={{padding: '24px'}}>
<iconify-icon icon="solar:verified-check-linear" style={{color: 'var(--accent)', marginBottom: '12px', display: 'block'}} width="28"></iconify-icon>
<h4 style={{fontWeight: '600', fontSize: '16px', marginBottom: '8px', letterSpacing: '-0.02em'}}>Nezávislost</h4>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Nejsem vázaný na žádnou banku ani pojišťovnu. Vybírám z celého trhu.</p>
</div>
<div className="fade-up fade-up-delay-1" style={{padding: '24px'}}>
<iconify-icon icon="solar:users-group-rounded-linear" style={{color: 'var(--accent)', marginBottom: '12px', display: 'block'}} width="28"></iconify-icon>
<h4 style={{fontWeight: '600', fontSize: '16px', marginBottom: '8px', letterSpacing: '-0.02em'}}>Dlouhodobý vztah</h4>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Vaše finanční situace se mění. Jsem tu, abych plán přizpůsoboval.</p>
</div>
<div className="fade-up fade-up-delay-2" style={{padding: '24px'}}>
<iconify-icon icon="solar:laptop-linear" style={{color: 'var(--accent)', marginBottom: '12px', display: 'block'}} width="28"></iconify-icon>
<h4 style={{fontWeight: '600', fontSize: '16px', marginBottom: '8px', letterSpacing: '-0.02em'}}>Technologie</h4>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Digitální přehled vašich financí, bezpapírová administrativa.</p>
</div>
<div className="fade-up fade-up-delay-3" style={{padding: '24px'}}>
<iconify-icon icon="solar:calculator-linear" style={{color: 'var(--accent)', marginBottom: '12px', display: 'block'}} width="28"></iconify-icon>
<h4 style={{fontWeight: '600', fontSize: '16px', marginBottom: '8px', letterSpacing: '-0.02em'}}>Srozumitelná čísla</h4>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Žádný finanční žargon. Jasně uvidíte dopady rozhodnutí.</p>
</div>
</div>
</div>
</section>

<section className="section-gradient" style={{padding: '100px 24px'}}>
<div style={{maxWidth: '800px', margin: '0 auto'}}>
<div className="glass-card glow-green fade-up" style={{padding: '48px 40px'}}>
<div style={{textAlign: 'center', marginBottom: '40px'}}>
<iconify-icon icon="solar:calculator-minimalistic-linear" style={{color: 'var(--accent)', marginBottom: '12px'}} width="32"></iconify-icon>
<h2 className="tracking-tight" style={{fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: '700', letterSpacing: '-0.03em', marginBottom: '8px'}}>Kolik můžete naspořit?</h2>
<p style={{color: 'var(--text-secondary)', fontSize: '14px'}}>Orientační kalkulačka — ilustrace principu pravidelného investování.</p>
</div>
<div style={{display: 'grid', gap: '32px'}}>
<div>
<div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '12px'}}>
<label style={{fontSize: '14px', color: 'var(--text-secondary)'}}>Měsíční úspora</label>
<span id="calc-amount-label" style={{fontWeight: '600', color: 'var(--accent)'}}>5 000 Kč</span>
</div>
<input id="calc-amount" max="50000" min="1000" oninput="updateCalc()" step="1000" type="range" value="5000"/>
</div>
<div>
<div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '12px'}}>
<label style={{fontSize: '14px', color: 'var(--text-secondary)'}}>Počet let</label>
<span id="calc-years-label" style={{fontWeight: '600', color: 'var(--accent)'}}>20 let</span>
</div>
<input id="calc-years" max="40" min="5" oninput="updateCalc()" step="1" type="range" value="20"/>
</div>
<div>
<div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '12px'}}>
<label style={{fontSize: '14px', color: 'var(--text-secondary)'}}>Předpokládané roční zhodnocení</label>
<span id="calc-rate-label" style={{fontWeight: '600', color: 'var(--accent)'}}>6 %</span>
</div>
<input id="calc-rate" max="10" min="2" oninput="updateCalc()" step="1" type="range" value="6"/>
</div>
</div>
<div style={{marginTop: '40px', textAlign: 'center', padding: '32px', borderRadius: '12px', background: 'rgba(34, 197, 94, 0.05)', border: '1px solid rgba(34, 197, 94, 0.1)'}}>
<p style={{color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '8px'}}>Orientační hodnota po <span id="calc-result-years">20</span> letech</p>
<p id="calc-result" style={{fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', color: 'var(--accent)', letterSpacing: '-0.03em'}}>2 310 204 Kč</p>
<p style={{color: 'var(--text-muted)', fontSize: '12px', marginTop: '12px'}}>Z toho vloženo: <span id="calc-invested">1 200 000 Kč</span></p>
<p style={{color: 'var(--text-muted)', fontSize: '11px', marginTop: '8px'}}>* Ilustrativní výpočet, nejedná se o investiční doporučení.</p>
</div>
<div style={{textAlign: 'center', marginTop: '24px'}}>
<a className="btn-primary" href="#" onclick="navigateTo('contact')">Spočítejte si přesněji s poradcem</a>
</div>
</div>
</div>
</section>

<section className="section-mid" style={{padding: '80px 24px'}}>
<div style={{maxWidth: '1200px', margin: '0 auto', textAlign: 'center'}}>
<p className="fade-up" style={{color: 'var(--text-muted)', fontSize: '13px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '32px'}}>Spolupracuji se širokou škálou partnerů</p>
<div className="fade-up" style={{display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginBottom: '24px'}}>
<div className="partner-logo">Partner 1</div>
<div className="partner-logo">Partner 2</div>
<div className="partner-logo">Partner 3</div>
<div className="partner-logo">Partner 4</div>
<div className="partner-logo">Partner 5</div>
<div className="partner-logo">Partner 6</div>
</div>
<p className="fade-up" style={{color: 'var(--text-secondary)', fontSize: '14px', maxWidth: '500px', margin: '0 auto', lineHeight: '1.7'}}>Vybírám řešení na míru z nabídky bank, pojišťoven a investičních společností.</p>
</div>
</section>

<section className="section-dark" style={{padding: '100px 24px'}}>
<div style={{maxWidth: '1200px', margin: '0 auto'}}>
<div className="fade-up" style={{textAlign: 'center', marginBottom: '64px'}}>
<p style={{color: 'var(--accent)', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Google recenze</p>
<h2 className="tracking-tight" style={{fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', letterSpacing: '-0.03em', marginBottom: '16px'}}>Co říkají klienti</h2>

<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '24px'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
<svg height="28" style={{flexShrink: '0'}} viewbox="0 0 48 48" width="28">
<path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" fill="#FFC107"></path>
<path d="M3.2 14.1l7.1 5.2C12.2 15 17.7 12 24 12c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 14.7 2 6.6 7 3.2 14.1z" fill="#FF3D00"></path>
<path d="M24 46c5.4 0 10.3-1.8 14.1-5l-6.5-5.5C29.5 37.1 26.9 38 24 38c-6 0-11.1-4-12.8-9.5l-7 5.4C7.2 41 14.9 46 24 46z" fill="#4CAF50"></path>
<path d="M44.5 20H24v8.5h11.8c-1 3-3 5.5-5.7 7l6.5 5.5c4.5-4.2 7.4-10.5 7.4-17 0-1.3-.2-2.7-.5-4z" fill="#1976D2"></path>
</svg>
<div>
<div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
<span style={{fontSize: '28px', fontWeight: '700', letterSpacing: '-0.03em'}}>5.0</span>
<div className="google-stars" style={{fontSize: '18px'}}>★★★★★</div>
</div>
<p style={{color: 'var(--text-muted)', fontSize: '13px'}}>Založeno na 12 recenzích na Google</p>
</div>
</div>
</div>
</div>

<div className="reviews-scroll" id="reviews-container">

<div className="glass-card review-card fade-up" style={{padding: '28px', minWidth: '320px', flex: '1'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
<div style={{width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #4285f4, #34a853)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '15px', color: 'white'}}>T</div>
<div>
<p style={{fontWeight: '600', fontSize: '14px'}}>Tomáš Procházka</p>
<p style={{color: 'var(--text-muted)', fontSize: '11px'}}>před 2 měsíci</p>
</div>
</div>
<div className="google-stars" style={{fontSize: '14px', marginBottom: '12px'}}>★★★★★</div>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>„Jan je naprosto skvělý poradce. Vysvětlil nám vše srozumitelně, bez nátlaku. Díky němu máme konečně jasno v investicích i pojištění. Doporučuji každému, kdo chce mít finance pod kontrolou."</p>
</div>

<div className="glass-card review-card fade-up fade-up-delay-1" style={{padding: '28px', minWidth: '320px', flex: '1'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
<div style={{width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #ea4335, #fbbc05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '15px', color: 'white'}}>L</div>
<div>
<p style={{fontWeight: '600', fontSize: '14px'}}>Lucie Dvořáková</p>
<p style={{color: 'var(--text-muted)', fontSize: '11px'}}>před 3 měsíci</p>
</div>
</div>
<div className="google-stars" style={{fontSize: '14px', marginBottom: '12px'}}>★★★★★</div>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>„Honza nám pomohl s refinancováním hypotéky a ušetřili jsme tisíce měsíčně. Profesionální přístup, vždy dostupný. Na každou otázku má odpověď. Perfektní servis!"</p>
</div>

<div className="glass-card review-card fade-up fade-up-delay-2" style={{padding: '28px', minWidth: '320px', flex: '1'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
<div style={{width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #34a853, #4285f4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '15px', color: 'white'}}>M</div>
<div>
<p style={{fontWeight: '600', fontSize: '14px'}}>Martin Novotný</p>
<p style={{color: 'var(--text-muted)', fontSize: '11px'}}>před 3 měsíci</p>
</div>
</div>
<div className="google-stars" style={{fontSize: '14px', marginBottom: '12px'}}>★★★★★</div>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>„Jako OSVČ jsem potřeboval někoho, kdo mi pomůže s celkovým přehledem financí. Jan mi nastavil pojištění, investice i rezervu. Vše funguje a já mám klid. Díky!"</p>
</div>

<div className="glass-card review-card fade-up" style={{padding: '28px', minWidth: '320px', flex: '1'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
<div style={{width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #fbbc05, #ea4335)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '15px', color: 'white'}}>K</div>
<div>
<p style={{fontWeight: '600', fontSize: '14px'}}>Kateřina Horáková</p>
<p style={{color: 'var(--text-muted)', fontSize: '11px'}}>před 4 měsíci</p>
</div>
</div>
<div className="google-stars" style={{fontSize: '14px', marginBottom: '12px'}}>★★★★★</div>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>„S Janem spolupracujeme už rok a jsme maximálně spokojeni. Naše pojistky byly předražené a investice špatně nastavené. Teď je vše optimalizované a přehledné."</p>
</div>

<div className="glass-card review-card fade-up" style={{padding: '28px', minWidth: '320px', flex: '1'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
<div style={{width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #4285f4, #34a853)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '15px', color: 'white'}}>P</div>
<div>
<p style={{fontWeight: '600', fontSize: '14px'}}>Petr Šimek</p>
<p style={{color: 'var(--text-muted)', fontSize: '11px'}}>před 5 měsíců</p>
</div>
</div>
<div className="google-stars" style={{fontSize: '14px', marginBottom: '12px'}}>★★★★★</div>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>„Oceňuji transparentní přístup. Jan mi přesně řekl, jak je odměňován a proč doporučuje dané řešení. Žádné mlžení, žádné skryté poplatky. Takto by to mělo fungovat."</p>
</div>

<div className="glass-card review-card fade-up" style={{padding: '28px', minWidth: '320px', flex: '1'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
<div style={{width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #ea4335, #fbbc05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '15px', color: 'white'}}>J</div>
<div>
<p style={{fontWeight: '600', fontSize: '14px'}}>Jana Kolářová</p>
<p style={{color: 'var(--text-muted)', fontSize: '11px'}}>před 5 měsíců</p>
</div>
</div>
<div className="google-stars" style={{fontSize: '14px', marginBottom: '12px'}}>★★★★★</div>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>„Blíží se mi důchod a bála jsem se, jestli budu mít dost. Jan mi udělal kompletní analýzu a nastavil plán. Teď přesně vím, na čem jsem. Obrovská úleva."</p>
</div>

<div className="glass-card review-card fade-up" style={{padding: '28px', minWidth: '320px', flex: '1'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
<div style={{width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #34a853, #4285f4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '15px', color: 'white'}}>D</div>
<div>
<p style={{fontWeight: '600', fontSize: '14px'}}>David Černý</p>
<p style={{color: 'var(--text-muted)', fontSize: '11px'}}>před 6 měsíců</p>
</div>
</div>
<div className="google-stars" style={{fontSize: '14px', marginBottom: '12px'}}>★★★★★</div>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>„Poprvé v životě mám pocit, že mi někdo s financemi opravdu pomáhá. Jan mi nastavil investice, zrušil nevýhodné smlouvy a nastavil správnou ochranu. Super přístup."</p>
</div>

<div className="glass-card review-card fade-up" style={{padding: '28px', minWidth: '320px', flex: '1'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
<div style={{width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #fbbc05, #ea4335)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '15px', color: 'white'}}>A</div>
<div>
<p style={{fontWeight: '600', fontSize: '14px'}}>Alena Marková</p>
<p style={{color: 'var(--text-muted)', fontSize: '11px'}}>před 7 měsíců</p>
</div>
</div>
<div className="google-stars" style={{fontSize: '14px', marginBottom: '12px'}}>★★★★★</div>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>„Doporučila mi Jana kamarádka a nelituji. Na první schůzce mi vysvětlil, kde mám mezery v pojištění a jak efektivněji spořit. Vše bez nátlaku. Člověk na svém místě."</p>
</div>

<div className="glass-card review-card fade-up" style={{padding: '28px', minWidth: '320px', flex: '1'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
<div style={{width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #4285f4, #34a853)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '15px', color: 'white'}}>R</div>
<div>
<p style={{fontWeight: '600', fontSize: '14px'}}>Radek Veselý</p>
<p style={{color: 'var(--text-muted)', fontSize: '11px'}}>před 8 měsíců</p>
</div>
</div>
<div className="google-stars" style={{fontSize: '14px', marginBottom: '12px'}}>★★★★★</div>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>„Vyřízení hypotéky s Janem bylo bezbolestné. Porovnal nabídky, vyjednal lepší podmínky a vše zařídil za mě. Ušetřil mi čas i nervy. Děkuji a jednoznačně doporučuji."</p>
</div>

<div className="glass-card review-card fade-up" style={{padding: '28px', minWidth: '320px', flex: '1'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
<div style={{width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #ea4335, #fbbc05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '15px', color: 'white'}}>E</div>
<div>
<p style={{fontWeight: '600', fontSize: '14px'}}>Eva Svobodová</p>
<p style={{color: 'var(--text-muted)', fontSize: '11px'}}>před 9 měsíců</p>
</div>
</div>
<div className="google-stars" style={{fontSize: '14px', marginBottom: '12px'}}>★★★★★</div>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>„S Janem řešíme finance celé rodiny. Nastavil nám kompletní finanční plán, pomohl s hypotékou i zajištěním dětí. Je vidět, že ho práce baví a záleží mu na klientech."</p>
</div>

<div className="glass-card review-card fade-up" style={{padding: '28px', minWidth: '320px', flex: '1'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
<div style={{width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #34a853, #4285f4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '15px', color: 'white'}}>V</div>
<div>
<p style={{fontWeight: '600', fontSize: '14px'}}>Vojtěch Kříž</p>
<p style={{color: 'var(--text-muted)', fontSize: '11px'}}>před 10 měsíců</p>
</div>
</div>
<div className="google-stars" style={{fontSize: '14px', marginBottom: '12px'}}>★★★★★</div>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>„Měl jsem špatnou zkušenost s finančními poradci, ale Jan je úplně jiná liga. Upřímný, znalý a vždy hledá to nejlepší řešení pro klienta. Konečně poradce, kterému věřím."</p>
</div>

<div className="glass-card review-card fade-up" style={{padding: '28px', minWidth: '320px', flex: '1'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
<div style={{width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #fbbc05, #ea4335)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '15px', color: 'white'}}>M</div>
<div>
<p style={{fontWeight: '600', fontSize: '14px'}}>Michaela Benešová</p>
<p style={{color: 'var(--text-muted)', fontSize: '11px'}}>před 11 měsíců</p>
</div>
</div>
<div className="google-stars" style={{fontSize: '14px', marginBottom: '12px'}}>★★★★★</div>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>„Jan mi pomohl kompletně přehodnotit moje finance. Zrušili jsme nevýhodné produkty, nastavili investice a konečně mám přehled. Komunikace na jedničku, vřele doporučuji!"</p>
</div>
</div>

<div style={{display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px', alignItems: 'center'}}>
<iconify-icon icon="solar:arrow-left-linear" style={{color: 'var(--text-muted)'}} width="16"></iconify-icon>
<span style={{color: 'var(--text-muted)', fontSize: '12px'}}>Scrollujte pro další recenze</span>
<iconify-icon icon="solar:arrow-right-linear" style={{color: 'var(--text-muted)'}} width="16"></iconify-icon>
</div>
</div>
</section>

<section className="hero-gradient" style={{padding: '100px 24px', textAlign: 'center'}}>
<div className="fade-up" style={{maxWidth: '600px', margin: '0 auto'}}>
<h2 className="tracking-tight" style={{fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', letterSpacing: '-0.03em', marginBottom: '16px'}}>Připraveni začít plánovat?</h2>
<p style={{color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.7', marginBottom: '32px'}}>Úvodní konzultace je zdarma a nezávazná. Zjistíte, kde jste a kam můžete směřovat.</p>
<a className="btn-primary" href="#" onclick="navigateTo('contact')" style={{fontSize: '16px'}}>
                        Domluvit konzultaci zdarma
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</section>
</div>

<div className="page-section" id="page-services">
<section className="hero-gradient" style={{paddingTop: '120px', paddingBottom: '80px'}}>
<div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 24px'}}>
<div className="fade-up" style={{textAlign: 'center', marginBottom: '80px'}}>
<p style={{color: 'var(--accent)', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Služby</p>
<h1 className="tracking-tight" style={{fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', letterSpacing: '-0.04em', marginBottom: '16px'}}>Kompletní finanční péče</h1>
<p style={{color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.7'}}>Každá oblast vašich financí je propojena. Proto je řeším společně, ne odděleně.</p>
</div>
<div className="fade-up" id="svc-investice" style={{marginBottom: '80px'}}>
<div className="md-grid-2" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center'}}>
<div>
<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px'}}>
<div style={{width: '44px', height: '44px', borderRadius: '12px', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<iconify-icon icon="solar:chart-2-linear" style={{color: 'var(--accent)'}} width="22"></iconify-icon>
</div>
<h2 className="tracking-tight" style={{fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: '700', letterSpacing: '-0.03em'}}>Investice a budování majetku</h2>
</div>
<p style={{color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.8', marginBottom: '20px'}}>Investování není hazard ani výsada bohatých. Je to nástroj, jak nechat peníze pracovat za vás.</p>
<p style={{color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.8', marginBottom: '24px'}}>Využívám moderní investiční nástroje jako ETF fondy a diverzifikované portfolia.</p>
<div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}><iconify-icon icon="solar:check-circle-linear" style={{color: 'var(--accent)', flexShrink: '0'}} width="18"></iconify-icon><span style={{fontSize: '14px', color: 'var(--text-secondary)'}}>Definice investičních cílů a strategie</span></div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}><iconify-icon icon="solar:check-circle-linear" style={{color: 'var(--accent)', flexShrink: '0'}} width="18"></iconify-icon><span style={{fontSize: '14px', color: 'var(--text-secondary)'}}>Pravidelné rebalancování portfolia</span></div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}><iconify-icon icon="solar:check-circle-linear" style={{color: 'var(--accent)', flexShrink: '0'}} width="18"></iconify-icon><span style={{fontSize: '14px', color: 'var(--text-secondary)'}}>Digitální přehled vašich investic kdykoliv</span></div>
</div>
</div>
<div className="glass-card" style={{padding: '32px'}}>
<p style={{color: 'var(--text-muted)', fontSize: '12px', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Ilustrativní vývoj portfolia</p>
<svg style={{width: '100%', height: 'auto'}} viewbox="0 0 400 200">
<defs><lineargradient id="chartGrad" x1="0%" x2="0%" y1="0%" y2="100%"><stop offset="0%" style={{stopColor: 'rgba(34,197,94,0.2)'}}></stop><stop offset="100%" style={{stopColor: 'rgba(34,197,94,0)'}}></stop></lineargradient></defs>
<path className="chart-line" d="M 0 180 Q 50 170, 100 150 Q 150 140, 180 120 Q 220 100, 260 80 Q 300 55, 340 35 Q 370 20, 400 10" fill="none" stroke="#22c55e" strokeWidth="2"></path>
<path d="M 0 180 Q 50 170, 100 150 Q 150 140, 180 120 Q 220 100, 260 80 Q 300 55, 340 35 Q 370 20, 400 10 L 400 200 L 0 200 Z" fill="url(#chartGrad)" opacity="0.5"></path>
<line stroke="rgba(148,163,184,0.1)" strokeWidth="1" x1="0" x2="400" y1="190" y2="190"></line>
<text fill="#64748b" fontSize="10" x="10" y="198">Rok 0</text>
<text fill="#64748b" fontSize="10" x="180" y="198">Rok 10</text>
<text fill="#64748b" fontSize="10" x="370" y="198">Rok 20</text>
</svg>
<p style={{color: 'var(--text-muted)', fontSize: '11px', marginTop: '12px', textAlign: 'center'}}>* Pouze ilustrace.</p>
</div>
</div>
</div>
<div className="fade-up" id="svc-pojisteni" style={{marginBottom: '80px', paddingTop: '40px', borderTop: '1px solid var(--card-border)'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px'}}>
<div style={{width: '44px', height: '44px', borderRadius: '12px', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><iconify-icon icon="solar:shield-linear" style={{color: 'var(--accent)'}} width="22"></iconify-icon></div>
<h2 className="tracking-tight" style={{fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: '700', letterSpacing: '-0.03em'}}>Pojištění a ochrana</h2>
</div>
<p style={{color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.8', marginBottom: '32px', maxWidth: '700px'}}>Pojištění má chránit to nejdůležitější — váš příjem, rodinu a majetek.</p>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px'}}>
<div className="glass-card" style={{padding: '28px'}}><iconify-icon icon="solar:user-check-linear" style={{color: 'var(--accent)', marginBottom: '12px', display: 'block'}} width="24"></iconify-icon><h3 style={{fontWeight: '600', fontSize: '16px', marginBottom: '8px'}}>Ochrana příjmů</h3><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Rizikové pojištění při úrazu, nemoci nebo invaliditě.</p></div>
<div className="glass-card" style={{padding: '28px'}}><iconify-icon icon="solar:users-group-rounded-linear" style={{color: 'var(--accent)', marginBottom: '12px', display: 'block'}} width="24"></iconify-icon><h3 style={{fontWeight: '600', fontSize: '16px', marginBottom: '8px'}}>Pojištění rodiny</h3><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Životní pojištění, pojištění dětí a komplexní ochrana celé domácnosti.</p></div>
<div className="glass-card" style={{padding: '28px'}}><iconify-icon icon="solar:home-linear" style={{color: 'var(--accent)', marginBottom: '12px', display: 'block'}} width="24"></iconify-icon><h3 style={{fontWeight: '600', fontSize: '16px', marginBottom: '8px'}}>Pojištění majetku</h3><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Nemovitost, domácnost, odpovědnost.</p></div>
</div>
</div>
<div className="fade-up" id="svc-hypoteky" style={{marginBottom: '80px', paddingTop: '40px', borderTop: '1px solid var(--card-border)'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px'}}>
<div style={{width: '44px', height: '44px', borderRadius: '12px', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><iconify-icon icon="solar:home-smile-linear" style={{color: 'var(--accent)'}} width="22"></iconify-icon></div>
<h2 className="tracking-tight" style={{fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: '700', letterSpacing: '-0.03em'}}>Hypotéky</h2>
</div>
<p style={{color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.8', marginBottom: '32px', maxWidth: '700px'}}>Porovnám nabídky bank za vás, vyřeším refinancování a pohlídám termín dofixování.</p>
<div className="glass-card" style={{padding: '32px', maxWidth: '600px'}}>
<h3 style={{fontWeight: '600', fontSize: '16px', marginBottom: '16px', letterSpacing: '-0.02em'}}>Proč neřešit hypotéku přímo v bance?</h3>
<div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
<div style={{display: 'flex', alignItems: 'flex-start', gap: '10px'}}><iconify-icon icon="solar:arrow-right-linear" style={{color: 'var(--accent)', flexShrink: '0', marginTop: '3px'}} width="16"></iconify-icon><span style={{fontSize: '14px', color: 'var(--text-secondary)'}}>Banka nabídne pouze svůj produkt — já porovnám celý trh</span></div>
<div style={{display: 'flex', alignItems: 'flex-start', gap: '10px'}}><iconify-icon icon="solar:arrow-right-linear" style={{color: 'var(--accent)', flexShrink: '0', marginTop: '3px'}} width="16"></iconify-icon><span style={{fontSize: '14px', color: 'var(--text-secondary)'}}>Nemusíte obcházet pobočky — vše vyřeším za vás</span></div>
<div style={{display: 'flex', alignItems: 'flex-start', gap: '10px'}}><iconify-icon icon="solar:arrow-right-linear" style={{color: 'var(--accent)', flexShrink: '0', marginTop: '3px'}} width="16"></iconify-icon><span style={{fontSize: '14px', color: 'var(--text-secondary)'}}>Pohlídám dofixování a včas navrhnu refinancování</span></div>
<div style={{display: 'flex', alignItems: 'flex-start', gap: '10px'}}><iconify-icon icon="solar:arrow-right-linear" style={{color: 'var(--accent)', flexShrink: '0', marginTop: '3px'}} width="16"></iconify-icon><span style={{fontSize: '14px', color: 'var(--text-secondary)'}}>Moje služba je pro vás zdarma — odměnu hradí banka</span></div>
</div>
</div>
</div>
<div className="fade-up" id="svc-uvery" style={{marginBottom: '80px', paddingTop: '40px', borderTop: '1px solid var(--card-border)'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px'}}>
<div style={{width: '44px', height: '44px', borderRadius: '12px', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><iconify-icon icon="solar:wallet-linear" style={{color: 'var(--accent)'}} width="22"></iconify-icon></div>
<h2 className="tracking-tight" style={{fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: '700', letterSpacing: '-0.03em'}}>Úvěry a financování</h2>
</div>
<p style={{color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.8', marginBottom: '24px', maxWidth: '700px'}}>Správně nastavený úvěr může být užitečný nástroj. Špatně zvolený úvěr může zničit celý finanční plán.</p>
<div className="glass-card" style={{padding: '24px', borderLeft: '3px solid rgba(234, 179, 8, 0.5)', maxWidth: '600px'}}>
<div style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}><iconify-icon icon="solar:danger-triangle-linear" style={{color: '#eab308', flexShrink: '0', marginTop: '2px'}} width="22"></iconify-icon><div><p style={{fontWeight: '600', fontSize: '14px', marginBottom: '6px', color: '#eab308'}}>Důležité upozornění</p><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Nevhodné úvěry mohou vážně ohrozit vaši finanční stabilitu. Pomohu s konsolidací stávajících závazků.</p></div></div>
</div>
</div>
<div className="fade-up" id="svc-plan" style={{paddingTop: '40px', borderTop: '1px solid var(--card-border)'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px'}}>
<div style={{width: '44px', height: '44px', borderRadius: '12px', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><iconify-icon icon="solar:routing-linear" style={{color: 'var(--accent)'}} width="22"></iconify-icon></div>
<h2 className="tracking-tight" style={{fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: '700', letterSpacing: '-0.03em'}}>Dlouhodobý finanční plán</h2>
</div>
<p style={{color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.8', marginBottom: '32px', maxWidth: '700px'}}>Nejde o jednorázový prodej produktů. Jde o celkovou strategii.</p>
<div style={{display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'flex-end', justifyContent: 'center'}}>
<div style={{textAlign: 'center'}}><div className="glass-card" style={{padding: '24px', width: '180px', marginBottom: '12px'}}><iconify-icon icon="solar:safe-circle-linear" style={{color: 'var(--accent)', marginBottom: '8px', display: 'block'}} width="28"></iconify-icon><p style={{fontWeight: '600', fontSize: '14px', marginBottom: '4px'}}>Finanční rezerva</p><p style={{color: 'var(--text-muted)', fontSize: '12px'}}>0–1 rok</p></div></div>
<div style={{textAlign: 'center'}}><div className="glass-card" style={{padding: '24px', width: '180px', marginBottom: '12px'}}><iconify-icon icon="solar:car-linear" style={{color: 'var(--accent)', marginBottom: '8px', display: 'block'}} width="28"></iconify-icon><p style={{fontWeight: '600', fontSize: '14px', marginBottom: '4px'}}>Střednědobé cíle</p><p style={{color: 'var(--text-muted)', fontSize: '12px'}}>2–5 let</p></div></div>
<div style={{textAlign: 'center'}}><div className="glass-card" style={{padding: '24px', width: '180px', marginBottom: '12px'}}><iconify-icon icon="solar:home-smile-linear" style={{color: 'var(--accent)', marginBottom: '8px', display: 'block'}} width="28"></iconify-icon><p style={{fontWeight: '600', fontSize: '14px', marginBottom: '4px'}}>Bydlení</p><p style={{color: 'var(--text-muted)', fontSize: '12px'}}>5–10 let</p></div></div>
<div style={{textAlign: 'center'}}><div className="glass-card" style={{padding: '24px', width: '180px', marginBottom: '12px'}}><iconify-icon icon="solar:sun-fog-linear" style={{color: 'var(--accent)', marginBottom: '8px', display: 'block'}} width="28"></iconify-icon><p style={{fontWeight: '600', fontSize: '14px', marginBottom: '4px'}}>Finanční svoboda</p><p style={{color: 'var(--text-muted)', fontSize: '12px'}}>15+ let</p></div></div>
</div>
</div>
<div className="fade-up" style={{textAlign: 'center', marginTop: '80px'}}>
<a className="btn-primary" href="#" onclick="navigateTo('contact')" style={{fontSize: '16px'}}>Probereme to společně <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon></a>
</div>
</div>
</section>
</div>

<div className="page-section" id="page-process">
<section className="hero-gradient" style={{paddingTop: '120px', paddingBottom: '100px'}}>
<div style={{maxWidth: '800px', margin: '0 auto', padding: '0 24px'}}>
<div className="fade-up" style={{textAlign: 'center', marginBottom: '80px'}}>
<p style={{color: 'var(--accent)', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Spolupráce</p>
<h1 className="tracking-tight" style={{fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', letterSpacing: '-0.04em', marginBottom: '16px'}}>Jak probíhá spolupráce</h1>
<p style={{color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto', lineHeight: '1.7'}}>Od prvního rozhovoru až po dlouhodobou péči o váš finanční plán.</p>
</div>
<div style={{position: 'relative', paddingLeft: '48px'}}>
<div className="timeline-line"></div>
<div className="fade-up" style={{position: 'relative', paddingBottom: '48px'}}><div className="timeline-dot"></div><div className="glass-card" style={{padding: '28px'}}><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px'}}>Krok 1</p><h3 style={{fontWeight: '600', fontSize: '18px', marginBottom: '12px', letterSpacing: '-0.02em'}}>Seznámení a analýza</h3><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.8'}}>Při prvním setkání — online nebo osobně — vás vyslechnu. Žádné formuláře, žádný prodejní tlak.</p><p style={{color: 'var(--text-muted)', fontSize: '13px', marginTop: '12px', display: 'flex', alignItems: 'center', gap: '6px'}}><iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>Cca 60 minut, zdarma a nezávazně</p></div></div>
<div className="fade-up fade-up-delay-1" style={{position: 'relative', paddingBottom: '48px'}}><div className="timeline-dot"></div><div className="glass-card" style={{padding: '28px'}}><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px'}}>Krok 2</p><h3 style={{fontWeight: '600', fontSize: '18px', marginBottom: '12px', letterSpacing: '-0.02em'}}>Návrh řešení a finanční plán</h3><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.8'}}>Na základě analýzy připravím konkrétní návrh s jasnými čísly.</p><p style={{color: 'var(--text-muted)', fontSize: '13px', marginTop: '12px', display: 'flex', alignItems: 'center', gap: '6px'}}><iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>Do 7 dnů od prvního setkání</p></div></div>
<div className="fade-up fade-up-delay-2" style={{position: 'relative', paddingBottom: '48px'}}><div className="timeline-dot"></div><div className="glass-card" style={{padding: '28px'}}><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px'}}>Krok 3</p><h3 style={{fontWeight: '600', fontSize: '18px', marginBottom: '12px', letterSpacing: '-0.02em'}}>Realizace</h3><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.8'}}>Po schválení plánu zařídím vše potřebné. Většinu věcí zvládneme digitálně.</p><p style={{color: 'var(--text-muted)', fontSize: '13px', marginTop: '12px', display: 'flex', alignItems: 'center', gap: '6px'}}><iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>Většinu produktů nastavíme do 14 dnů</p></div></div>
<div className="fade-up fade-up-delay-3" style={{position: 'relative'}}><div className="timeline-dot"></div><div className="glass-card" style={{padding: '28px'}}><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px'}}>Krok 4</p><h3 style={{fontWeight: '600', fontSize: '18px', marginBottom: '12px', letterSpacing: '-0.02em'}}>Dlouhodobá péče a revize</h3><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.8'}}>Minimálně jednou ročně plán společně zrevidujeme.</p><p style={{color: 'var(--text-muted)', fontSize: '13px', marginTop: '12px', display: 'flex', alignItems: 'center', gap: '6px'}}><iconify-icon icon="solar:infinity-linear" width="14"></iconify-icon>Průběžně, po celou dobu spolupráce</p></div></div>
</div>
<div className="glass-card glow-green fade-up" style={{padding: '32px', marginTop: '64px'}}>
<h3 style={{fontWeight: '600', fontSize: '18px', marginBottom: '20px', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '10px'}}><iconify-icon icon="solar:checklist-linear" style={{color: 'var(--accent)'}} width="22"></iconify-icon>Co si připravit na první schůzku</h3>
<div style={{display: 'grid', gap: '12px'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}><iconify-icon icon="solar:check-square-linear" style={{color: 'var(--accent)'}} width="18"></iconify-icon><span style={{fontSize: '14px', color: 'var(--text-secondary)'}}>Přehled o měsíčních příjmech a výdajích</span></div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}><iconify-icon icon="solar:check-square-linear" style={{color: 'var(--accent)'}} width="18"></iconify-icon><span style={{fontSize: '14px', color: 'var(--text-secondary)'}}>Stávající smlouvy (pojistky, investice, úvěry)</span></div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}><iconify-icon icon="solar:check-square-linear" style={{color: 'var(--accent)'}} width="18"></iconify-icon><span style={{fontSize: '14px', color: 'var(--text-secondary)'}}>Vaše cíle a přání (krátkodobé i dlouhodobé)</span></div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}><iconify-icon icon="solar:check-square-linear" style={{color: 'var(--accent)'}} width="18"></iconify-icon><span style={{fontSize: '14px', color: 'var(--text-secondary)'}}>Otázky, které vás napadají</span></div>
</div>
</div>
<div className="fade-up" style={{textAlign: 'center', marginTop: '48px'}}><a className="btn-primary" href="#" onclick="navigateTo('contact')">Domluvit první schůzku <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon></a></div>
</div>
</section>
</div>

<div className="page-section" id="page-about">
<section className="hero-gradient" style={{paddingTop: '120px', paddingBottom: '100px'}}>
<div style={{maxWidth: '900px', margin: '0 auto', padding: '0 24px'}}>
<div className="fade-up" style={{textAlign: 'center', marginBottom: '64px'}}>
<p style={{color: 'var(--accent)', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>O mně</p>
<h1 className="tracking-tight" style={{fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', letterSpacing: '-0.04em', marginBottom: '16px'}}>Jan Kurdiovský</h1>
<p style={{color: 'var(--text-secondary)', fontSize: '18px'}}>Nezávislý finanční poradce</p>
</div>
<div className="fade-up" style={{display: 'grid', gap: '48px', marginBottom: '64px'}}>
<div style={{display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'flex-start'}}>
<div className="photo-frame flex-shrink-0" style={{width: '200px', height: '260px'}}>
<img alt="Jan Kurdiovský" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg'http://www.w3.org/2000/svg' width='200' height='260'%3E%3Crect fill='%230f1729' width='200' height='260'/%3E%3C/svg%3E" style={{width: '200px', height: '260px', objectFit: 'cover', objectPosition: 'top center'}}/>
</div>
<div style={{flex: '1', minWidth: '300px'}}>
<p style={{color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.9', marginBottom: '20px'}}>Věřím, že finanční poradenství by mělo být o lidech, ne o produktech. Mojí úlohou není prodat co nejvíc smluv, ale pomoct vám pochopit vaše finance.</p>
<p style={{color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.9', marginBottom: '20px'}}>Zaměřuji se na komplexní finanční plánování — od vytvoření finanční rezervy přes správné pojištění až po dlouhodobé investice.</p>
<p style={{color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.9'}}>Mým cílem je, abyste se v penězích cítili jistě — ne proto, že vám někdo řekl, co máte dělat, ale proto, že tomu sami rozumíte.</p>
</div>
</div>
</div>
<div className="fade-up" style={{marginBottom: '64px'}}>
<h3 style={{fontWeight: '600', fontSize: '18px', marginBottom: '24px', letterSpacing: '-0.02em'}}>Profesní cesta</h3>
<div style={{display: 'grid', gap: '16px'}}>
<div style={{display: 'flex', gap: '16px', alignItems: 'flex-start'}}><span style={{color: 'var(--accent)', fontSize: '14px', fontWeight: '600', minWidth: '80px'}}>2024</span><div><p style={{fontWeight: '500', fontSize: '14px'}}>Rozšíření služeb o komplexní finanční plánování</p><p style={{color: 'var(--text-muted)', fontSize: '13px'}}>Integrace moderních investičních platforem a digitálních nástrojů</p></div></div>
<div style={{display: 'flex', gap: '16px', alignItems: 'flex-start'}}><span style={{color: 'var(--accent)', fontSize: '14px', fontWeight: '600', minWidth: '80px'}}>2021</span><div><p style={{fontWeight: '500', fontSize: '14px'}}>Přechod k nezávislému poradenství</p><p style={{color: 'var(--text-muted)', fontSize: '13px'}}>Zaměření na dlouhodobou péči a vzdělávání klientů</p></div></div>
<div style={{display: 'flex', gap: '16px', alignItems: 'flex-start'}}><span style={{color: 'var(--accent)', fontSize: '14px', fontWeight: '600', minWidth: '80px'}}>2018</span><div><p style={{fontWeight: '500', fontSize: '14px'}}>Zahájení kariéry ve finančním poradenství</p><p style={{color: 'var(--text-muted)', fontSize: '13px'}}>Pojištění, hypotéky, základy investičního poradenství</p></div></div>
</div>
</div>
<div className="fade-up">
<h3 style={{fontWeight: '600', fontSize: '18px', marginBottom: '24px', letterSpacing: '-0.02em'}}>Hodnoty, které mě vedou</h3>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px'}}>
<div className="glass-card" style={{padding: '24px'}}><iconify-icon icon="solar:eye-linear" style={{color: 'var(--accent)', marginBottom: '12px', display: 'block'}} width="24"></iconify-icon><h4 style={{fontWeight: '600', fontSize: '15px', marginBottom: '8px'}}>Transparentnost</h4><p style={{color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.7'}}>Vždy vám řeknu, kolik a za co platíte.</p></div>
<div className="glass-card" style={{padding: '24px'}}><iconify-icon icon="solar:graduation-cap-linear" style={{color: 'var(--accent)', marginBottom: '12px', display: 'block'}} width="24"></iconify-icon><h4 style={{fontWeight: '600', fontSize: '15px', marginBottom: '8px'}}>Vzdělávání</h4><p style={{color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.7'}}>Chci, abyste rozuměli svým financím.</p></div>
<div className="glass-card" style={{padding: '24px'}}><iconify-icon icon="solar:hand-shake-linear" style={{color: 'var(--accent)', marginBottom: '12px', display: 'block'}} width="24"></iconify-icon><h4 style={{fontWeight: '600', fontSize: '15px', marginBottom: '8px'}}>Partnerství</h4><p style={{color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.7'}}>Nejsem prodejce, jsem váš partner.</p></div>
<div className="glass-card" style={{padding: '24px'}}><iconify-icon icon="solar:graph-up-linear" style={{color: 'var(--accent)', marginBottom: '12px', display: 'block'}} width="24"></iconify-icon><h4 style={{fontWeight: '600', fontSize: '15px', marginBottom: '8px'}}>Rozvoj</h4><p style={{color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.7'}}>Neustále se vzdělávám v nových nástrojích.</p></div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section" id="page-references">
<section className="hero-gradient" style={{paddingTop: '120px', paddingBottom: '100px'}}>
<div style={{maxWidth: '1000px', margin: '0 auto', padding: '0 24px'}}>
<div className="fade-up" style={{textAlign: 'center', marginBottom: '64px'}}>
<p style={{color: 'var(--accent)', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Reference</p>
<h1 className="tracking-tight" style={{fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', letterSpacing: '-0.04em', marginBottom: '16px'}}>Příběhy klientů</h1>
<p style={{color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto', lineHeight: '1.7'}}>Každý klient je jiný. Společné mají jedno — chtějí mít ve financích jasno.</p>
</div>
<div style={{display: 'grid', gap: '24px'}}>
<div className="glass-card fade-up" style={{padding: '32px'}}><div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px'}}><div style={{width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-glow), rgba(34, 197, 94, 0.2))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', color: 'var(--accent)'}}><iconify-icon icon="solar:users-group-rounded-linear" width="22"></iconify-icon></div><div><h3 style={{fontWeight: '600', fontSize: '17px', letterSpacing: '-0.02em'}}>Mladá rodina s dvěma dětmi</h3><p style={{color: 'var(--text-muted)', fontSize: '13px'}}>Tomáš a Lucie, 32 a 30 let</p></div></div><div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '16px'}}><div><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px'}}>Situace před</p><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Měli hypotéku u první banky, drahé pojistky a nulové investice.</p></div><div><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px'}}>Cíl</p><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Optimalizovat produkty, vytvořit rezervu a začít spořit na studium dětí.</p></div></div><div className="case-detail" id="case-1"><div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', paddingTop: '16px', borderTop: '1px solid var(--card-border)'}}><div><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px'}}>Řešení</p><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Refinancování hypotéky, revize pojistek, nastavení pravidelných investic.</p></div><div><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px'}}>Stav dnes</p><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Nižší splátka, lepší ochrana, investice běží.</p></div></div></div><button onclick="toggleCase('case-1', this)" style={{background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer', fontSize: '14px', fontWeight: '500', marginTop: '12px', display: 'flex', alignItems: 'center', gap: '4px'}}>Zobrazit více <iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon></button></div>
<div className="glass-card fade-up fade-up-delay-1" style={{padding: '32px'}}><div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px'}}><div style={{width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-glow), rgba(34, 197, 94, 0.2))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', color: 'var(--accent)'}}><iconify-icon icon="solar:case-linear" width="22"></iconify-icon></div><div><h3 style={{fontWeight: '600', fontSize: '17px', letterSpacing: '-0.02em'}}>Podnikatel hledající stabilitu</h3><p style={{color: 'var(--text-muted)', fontSize: '13px'}}>Martin, 41 let, OSVČ</p></div></div><div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '16px'}}><div><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px'}}>Situace před</p><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Kolísavé příjmy, žádná finanční rezerva, minimální pojištění a nulové investice.</p></div><div><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px'}}>Cíl</p><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Vytvořit stabilní finanční zázemí, ochránit příjmy a začít budovat majetek.</p></div></div><div className="case-detail" id="case-2"><div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', paddingTop: '16px', borderTop: '1px solid var(--card-border)'}}><div><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px'}}>Řešení</p><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Vytvoření 6měsíční rezervy, nastavení rizikového pojištění pro OSVČ, zahájení pravidelného investování.</p></div><div><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px'}}>Stav dnes</p><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Finanční polštář vytvořen, příjmy ochráněny, investice rostou. Martin má klid na podnikání.</p></div></div></div><button onclick="toggleCase('case-2', this)" style={{background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer', fontSize: '14px', fontWeight: '500', marginTop: '12px', display: 'flex', alignItems: 'center', gap: '4px'}}>Zobrazit více <iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon></button></div>
<div className="glass-card fade-up fade-up-delay-2" style={{padding: '32px'}}><div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px'}}><div style={{width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-glow), rgba(34, 197, 94, 0.2))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', color: 'var(--accent)'}}><iconify-icon icon="solar:sun-fog-linear" width="22"></iconify-icon></div><div><h3 style={{fontWeight: '600', fontSize: '17px', letterSpacing: '-0.02em'}}>Předdůchodový pár</h3><p style={{color: 'var(--text-muted)', fontSize: '13px'}}>Jana a Pavel, 55 a 57 let</p></div></div><div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '16px'}}><div><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px'}}>Situace před</p><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Blížící se důchod, úspory na spořicím účtu, strach z nedostatku financí.</p></div><div><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px'}}>Cíl</p><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Zjistit, zda budou mít na důchod dost, a optimalizovat stávající úspory.</p></div></div><div className="case-detail" id="case-3"><div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', paddingTop: '16px', borderTop: '1px solid var(--card-border)'}}><div><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px'}}>Řešení</p><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Kompletní analýza důchodových příjmů, přesun části úspor do konzervativnějších investic, optimalizace pojištění.</p></div><div><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px'}}>Stav dnes</p><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Jasný plán pro důchod, úspory lépe zhodnoceny, zbytečné pojistky zrušeny.</p></div></div></div><button onclick="toggleCase('case-3', this)" style={{background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer', fontSize: '14px', fontWeight: '500', marginTop: '12px', display: 'flex', alignItems: 'center', gap: '4px'}}>Zobrazit více <iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon></button></div>
</div>
<div className="fade-up" style={{textAlign: 'center', marginTop: '48px'}}><a className="btn-primary" href="#" onclick="navigateTo('contact')">Chci podobný výsledek <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon></a></div>
</div>
</section>
</div>

<div className="page-section" id="page-blog">
<section className="hero-gradient" style={{paddingTop: '120px', paddingBottom: '100px'}}>
<div style={{maxWidth: '1000px', margin: '0 auto', padding: '0 24px'}}>
<div className="fade-up" style={{textAlign: 'center', marginBottom: '64px'}}>
<p style={{color: 'var(--accent)', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Blog</p>
<h1 className="tracking-tight" style={{fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', letterSpacing: '-0.04em', marginBottom: '16px'}}>Finanční vzdělávání</h1>
<p style={{color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto', lineHeight: '1.7'}}>Články a tipy, které vám pomohou lépe rozumět financím.</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px'}}>
<div className="glass-card blog-card fade-up">
<div className="blog-img" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<iconify-icon icon="solar:safe-circle-linear" style={{color: 'var(--accent)', opacity: '0.6'}} width="48"></iconify-icon>
</div>
<div style={{padding: '28px'}}>
<div style={{display: 'flex', gap: '8px', marginBottom: '12px'}}>
<span style={{fontSize: '11px', padding: '4px 10px', borderRadius: '12px', background: 'var(--accent-glow)', color: 'var(--accent)', fontWeight: '500'}}>Základy</span>
<span style={{fontSize: '11px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px'}}><iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon>5 min čtení</span>
</div>
<h3 style={{fontWeight: '600', fontSize: '17px', marginBottom: '10px', letterSpacing: '-0.02em'}}>Proč je finanční rezerva základ všeho</h3>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Než začnete investovat, potřebujete bezpečnostní polštář. Kolik by měl být a kde ho mít?</p>
</div>
</div>
<div className="glass-card blog-card fade-up fade-up-delay-1">
<div className="blog-img" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<iconify-icon icon="solar:chart-2-linear" style={{color: 'var(--accent)', opacity: '0.6'}} width="48"></iconify-icon>
</div>
<div style={{padding: '28px'}}>
<div style={{display: 'flex', gap: '8px', marginBottom: '12px'}}>
<span style={{fontSize: '11px', padding: '4px 10px', borderRadius: '12px', background: 'var(--accent-glow)', color: 'var(--accent)', fontWeight: '500'}}>Investice</span>
<span style={{fontSize: '11px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px'}}><iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon>7 min čtení</span>
</div>
<h3 style={{fontWeight: '600', fontSize: '17px', marginBottom: '10px', letterSpacing: '-0.02em'}}>ETF fondy: Proč jsou ideální pro začátečníky</h3>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Co jsou ETF fondy, proč mají nízké poplatky a jak s nimi začít investovat už od pár tisíc měsíčně.</p>
</div>
</div>
<div className="glass-card blog-card fade-up fade-up-delay-2">
<div className="blog-img" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<iconify-icon icon="solar:shield-linear" style={{color: 'var(--accent)', opacity: '0.6'}} width="48"></iconify-icon>
</div>
<div style={{padding: '28px'}}>
<div style={{display: 'flex', gap: '8px', marginBottom: '12px'}}>
<span style={{fontSize: '11px', padding: '4px 10px', borderRadius: '12px', background: 'var(--accent-glow)', color: 'var(--accent)', fontWeight: '500'}}>Pojištění</span>
<span style={{fontSize: '11px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px'}}><iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon>6 min čtení</span>
</div>
<h3 style={{fontWeight: '600', fontSize: '17px', marginBottom: '10px', letterSpacing: '-0.02em'}}>5 chyb v pojištění, které vás mohou stát statisíce</h3>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Nejčastější chyby, které lidé dělají u pojistných smluv — a jak se jim vyhnout.</p>
</div>
</div>
<div className="glass-card blog-card fade-up">
<div className="blog-img" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<iconify-icon icon="solar:home-smile-linear" style={{color: 'var(--accent)', opacity: '0.6'}} width="48"></iconify-icon>
</div>
<div style={{padding: '28px'}}>
<div style={{display: 'flex', gap: '8px', marginBottom: '12px'}}>
<span style={{fontSize: '11px', padding: '4px 10px', borderRadius: '12px', background: 'var(--accent-glow)', color: 'var(--accent)', fontWeight: '500'}}>Hypotéky</span>
<span style={{fontSize: '11px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px'}}><iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon>8 min čtení</span>
</div>
<h3 style={{fontWeight: '600', fontSize: '17px', marginBottom: '10px', letterSpacing: '-0.02em'}}>Kdy se vyplatí refinancovat hypotéku</h3>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Blíží se vám konec fixace? Zjistěte, zda můžete ušetřit přechodem k jiné bance.</p>
</div>
</div>
<div className="glass-card blog-card fade-up fade-up-delay-1">
<div className="blog-img" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<iconify-icon icon="solar:calculator-linear" style={{color: 'var(--accent)', opacity: '0.6'}} width="48"></iconify-icon>
</div>
<div style={{padding: '28px'}}>
<div style={{display: 'flex', gap: '8px', marginBottom: '12px'}}>
<span style={{fontSize: '11px', padding: '4px 10px', borderRadius: '12px', background: 'var(--accent-glow)', color: 'var(--accent)', fontWeight: '500'}}>Plánování</span>
<span style={{fontSize: '11px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px'}}><iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon>6 min čtení</span>
</div>
<h3 style={{fontWeight: '600', fontSize: '17px', marginBottom: '10px', letterSpacing: '-0.02em'}}>Jak vytvořit rodinný rozpočet, který funguje</h3>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Praktický návod na sledování příjmů a výdajů bez složitých tabulek.</p>
</div>
</div>
<div className="glass-card blog-card fade-up fade-up-delay-2">
<div className="blog-img" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<iconify-icon icon="solar:diploma-linear" style={{color: 'var(--accent)', opacity: '0.6'}} width="48"></iconify-icon>
</div>
<div style={{padding: '28px'}}>
<div style={{display: 'flex', gap: '8px', marginBottom: '12px'}}>
<span style={{fontSize: '11px', padding: '4px 10px', borderRadius: '12px', background: 'var(--accent-glow)', color: 'var(--accent)', fontWeight: '500'}}>Vzdělávání</span>
<span style={{fontSize: '11px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px'}}><iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon>4 min čtení</span>
</div>
<h3 style={{fontWeight: '600', fontSize: '17px', marginBottom: '10px', letterSpacing: '-0.02em'}}>Jak poznat dobrého finančního poradce</h3>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Na co se ptát, čeho se vyvarovat a jaké otázky by vám měl poradce zodpovědět.</p>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section" id="page-contact">
<section className="hero-gradient" style={{paddingTop: '120px', paddingBottom: '100px'}}>
<div style={{maxWidth: '900px', margin: '0 auto', padding: '0 24px'}}>
<div className="fade-up" style={{textAlign: 'center', marginBottom: '64px'}}>
<p style={{color: 'var(--accent)', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Kontakt</p>
<h1 className="tracking-tight" style={{fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', letterSpacing: '-0.04em', marginBottom: '16px'}}>Pojďme se spojit</h1>
<p style={{color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto', lineHeight: '1.7'}}>Vyberte si způsob, který vám vyhovuje. Rád se s vámi spojím.</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '48px'}}>
<div className="glass-card fade-up" style={{padding: '28px', textAlign: 'center'}}>
<iconify-icon icon="solar:phone-linear" style={{color: 'var(--accent)', marginBottom: '12px'}} width="28"></iconify-icon>
<h3 style={{fontWeight: '600', fontSize: '16px', marginBottom: '8px'}}>Telefon</h3>
<a href="tel:+420123456789" style={{color: 'var(--accent-light)', fontSize: '15px', fontWeight: '500'}}>+420 123 456 789</a>
<p style={{color: 'var(--text-muted)', fontSize: '13px', marginTop: '8px'}}>Po–Pá, 9:00–18:00</p>
</div>
<div className="glass-card fade-up fade-up-delay-1" style={{padding: '28px', textAlign: 'center'}}>
<iconify-icon icon="solar:letter-linear" style={{color: 'var(--accent)', marginBottom: '12px'}} width="28"></iconify-icon>
<h3 style={{fontWeight: '600', fontSize: '16px', marginBottom: '8px'}}>E-mail</h3>
<a href="mailto:jan@kurdiovsky.cz" style={{color: 'var(--accent-light)', fontSize: '15px', fontWeight: '500'}}>jan@kurdiovsky.cz</a>
<p style={{color: 'var(--text-muted)', fontSize: '13px', marginTop: '8px'}}>Odpovím do 24 hodin</p>
</div>
<div className="glass-card fade-up fade-up-delay-2" style={{padding: '28px', textAlign: 'center'}}>
<iconify-icon icon="solar:calendar-linear" style={{color: 'var(--accent)', marginBottom: '12px'}} width="28"></iconify-icon>
<h3 style={{fontWeight: '600', fontSize: '16px', marginBottom: '8px'}}>Online schůzka</h3>
<a href="#" onclick="navigateTo('home'); setTimeout(()=&gt;{document.querySelector('.calendly-section').scrollIntoView({behavior:'smooth'})}, 300);" style={{color: 'var(--accent-light)', fontSize: '15px', fontWeight: '500'}}>Zarezervovat v kalendáři</a>
<p style={{color: 'var(--text-muted)', fontSize: '13px', marginTop: '8px'}}>Vyberte si volný termín</p>
</div>
</div>

<div className="glass-card glow-green fade-up" style={{padding: '40px'}}>
<h2 style={{fontWeight: '600', fontSize: '20px', marginBottom: '8px', letterSpacing: '-0.02em'}}>Napište mi</h2>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '32px'}}>Popište mi vaši situaci a já se vám ozvu s návrhem dalšího postupu.</p>
<form id="contact-form" onsubmit="handleFormSubmit(event)">
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px'}}>
<div>
<label style={{fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '6px', display: 'block'}}>Jméno *</label>
<input className="form-input" placeholder="Jan Novák" required="" type="text"/>
</div>
<div>
<label style={{fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '6px', display: 'block'}}>Telefon</label>
<input className="form-input" placeholder="+420 ..." type="tel"/>
</div>
</div>
<div style={{marginBottom: '16px'}}>
<label style={{fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '6px', display: 'block'}}>E-mail *</label>
<input className="form-input" placeholder="jan@email.cz" required="" type="email"/>
</div>
<div style={{marginBottom: '16px'}}>
<label style={{fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '10px', display: 'block'}}>Co vás zajímá?</label>
<div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
<span className="tag-option" onclick="toggleTag(this)">Investice</span>
<span className="tag-option" onclick="toggleTag(this)">Pojištění</span>
<span className="tag-option" onclick="toggleTag(this)">Hypotéka</span>
<span className="tag-option" onclick="toggleTag(this)">Úvěr</span>
<span className="tag-option" onclick="toggleTag(this)">Finanční plán</span>
<span className="tag-option" onclick="toggleTag(this)">Nevím, poraďte</span>
</div>
</div>
<div style={{marginBottom: '24px'}}>
<label style={{fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '6px', display: 'block'}}>Vaše zpráva</label>
<textarea className="form-input" placeholder="Popište mi vaši situaci nebo co byste chtěli řešit..."></textarea>
</div>
<div style={{display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '24px'}}>
<div className="custom-checkbox" onclick="this.classList.toggle('checked')"></div>
<span style={{fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.5'}}>Souhlasím se zpracováním osobních údajů za účelem odpovědi na můj dotaz.</span>
</div>
<button className="btn-primary" style={{width: '100%', justifyContent: 'center', fontSize: '15px', padding: '16px'}} type="submit">
                                Odeslat zprávu
                                <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</form>
<div id="form-success" style={{textAlign: 'center', padding: '40px 20px', display: 'none'}}>
<iconify-icon icon="solar:check-circle-linear" style={{color: 'var(--accent)', marginBottom: '16px'}} width="48"></iconify-icon>
<h3 style={{fontWeight: '600', fontSize: '20px', marginBottom: '8px'}}>Zpráva odeslána!</h3>
<p style={{color: 'var(--text-secondary)', fontSize: '14px'}}>Děkuji za vaši zprávu. Ozvu se vám co nejdříve, obvykle do 24 hodin.</p>
</div>
</div>
</div>
</section>
</div>
</div>

<footer className="section-mid" style={{padding: '64px 24px 80px', borderTop: '1px solid var(--card-border)'}}>
<div style={{maxWidth: '1200px', margin: '0 auto'}}>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '48px'}}>
<div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px'}}>
<div style={{width: '32px', height: '32px', borderRadius: '8px', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', color: 'var(--primary-dark)', fontSize: '14px'}}>JK</div>
<span style={{fontWeight: '600', fontSize: '15px'}}>Jan Kurdiovský</span>
</div>
<p style={{color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.7', maxWidth: '250px'}}>Nezávislý finanční poradce. Investice, pojištění, hypotéky a komplexní finanční plánování.</p>
</div>
<div>
<h4 style={{fontWeight: '600', fontSize: '14px', marginBottom: '16px', color: 'var(--text-secondary)'}}>Navigace</h4>
<div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
<a href="#" onclick="navigateTo('home')" onmouseout="this.style.color='var(--text-muted)'" onmouseover="this.style.color='var(--accent-light)'" style={{color: 'var(--text-muted)', fontSize: '13px', transition: 'color 0.2s'}}>Domů</a>
<a href="#" onclick="navigateTo('services')" onmouseout="this.style.color='var(--text-muted)'" onmouseover="this.style.color='var(--accent-light)'" style={{color: 'var(--text-muted)', fontSize: '13px', transition: 'color 0.2s'}}>Služby</a>
<a href="#" onclick="navigateTo('process')" onmouseout="this.style.color='var(--text-muted)'" onmouseover="this.style.color='var(--accent-light)'" style={{color: 'var(--text-muted)', fontSize: '13px', transition: 'color 0.2s'}}>Spolupráce</a>
<a href="#" onclick="navigateTo('about')" onmouseout="this.style.color='var(--text-muted)'" onmouseover="this.style.color='var(--accent-light)'" style={{color: 'var(--text-muted)', fontSize: '13px', transition: 'color 0.2s'}}>O mně</a>
<a href="#" onclick="navigateTo('blog')" onmouseout="this.style.color='var(--text-muted)'" onmouseover="this.style.color='var(--accent-light)'" style={{color: 'var(--text-muted)', fontSize: '13px', transition: 'color 0.2s'}}>Blog</a>
</div>
</div>
<div>
<h4 style={{fontWeight: '600', fontSize: '14px', marginBottom: '16px', color: 'var(--text-secondary)'}}>Kontakt</h4>
<div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
<a href="tel:+420123456789" style={{color: 'var(--text-muted)', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px'}}><iconify-icon icon="solar:phone-linear" style={{color: 'var(--accent)'}} width="14"></iconify-icon>+420 123 456 789</a>
<a href="mailto:jan@kurdiovsky.cz" style={{color: 'var(--text-muted)', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px'}}><iconify-icon icon="solar:letter-linear" style={{color: 'var(--accent)'}} width="14"></iconify-icon>jan@kurdiovsky.cz</a>
</div>
</div>
<div>
<h4 style={{fontWeight: '600', fontSize: '14px', marginBottom: '16px', color: 'var(--text-secondary)'}}>Sociální sítě</h4>
<div style={{display: 'flex', gap: '12px'}}>
<a href="#" onmouseout="this.style.borderColor='var(--card-border)'; this.style.color='var(--text-muted)'" onmouseover="this.style.borderColor='var(--accent)'; this.style.color='var(--accent-light)'" style={{width: '36px', height: '36px', borderRadius: '8px', border: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', transition: 'all 0.2s'}}><iconify-icon icon="mdi:linkedin" width="18"></iconify-icon></a>
<a href="#" onmouseout="this.style.borderColor='var(--card-border)'; this.style.color='var(--text-muted)'" onmouseover="this.style.borderColor='var(--accent)'; this.style.color='var(--accent-light)'" style={{width: '36px', height: '36px', borderRadius: '8px', border: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', transition: 'all 0.2s'}}><iconify-icon icon="mdi:instagram" width="18"></iconify-icon></a>
<a href="#" onmouseout="this.style.borderColor='var(--card-border)'; this.style.color='var(--text-muted)'" onmouseover="this.style.borderColor='var(--accent)'; this.style.color='var(--accent-light)'" style={{width: '36px', height: '36px', borderRadius: '8px', border: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', transition: 'all 0.2s'}}><iconify-icon icon="mdi:facebook" width="18"></iconify-icon></a>
</div>
</div>
</div>
<div style={{borderTop: '1px solid var(--card-border)', paddingTop: '24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '12px'}}>
<p style={{color: 'var(--text-muted)', fontSize: '12px'}}>© 2025 Jan Kurdiovský. Všechna práva vyhrazena.</p>
<p style={{color: 'var(--text-muted)', fontSize: '12px'}}>Registrován u ČNB jako vázaný zástupce.</p>
</div>
</div>
</footer>

<div className="ticker-bar">
<div className="ticker-label">
<span className="ticker-label-live-dot"></span>
<span className="ticker-label-text">Trhy</span>
</div>
<div className="ticker-track-wrapper">
<div className="ticker-fade-left"></div>
<div className="ticker-track" id="ticker-track"><div className="ticker-item">
<span className="ticker-item-name">S&amp;P 500</span>
<span className="ticker-item-price">5,842.01</span>
<span className="ticker-item-change positive">+0.74%</span>
</div><div className="ticker-item">
<span className="ticker-item-name">NASDAQ</span>
<span className="ticker-item-price">18,847.28</span>
<span className="ticker-item-change positive">+1.12%</span>
</div><div className="ticker-item">
<span className="ticker-item-name">DAX</span>
<span className="ticker-item-price">19,425.73</span>
<span className="ticker-item-change positive">+0.38%</span>
</div><div className="ticker-item">
<span className="ticker-item-name">EUR/CZK</span>
<span className="ticker-item-price">25.28</span>
<span className="ticker-item-change negative">-0.12%</span>
</div><div className="ticker-item">
<span className="ticker-item-name">USD/CZK</span>
<span className="ticker-item-price">23.45</span>
<span className="ticker-item-change positive">+0.05%</span>
</div><div className="ticker-item">
<span className="ticker-item-name">Bitcoin</span>
<span className="ticker-item-price">$104,250</span>
<span className="ticker-item-change positive">+2.35%</span>
</div><div className="ticker-item">
<span className="ticker-item-name">Zlato</span>
<span className="ticker-item-price">$2,658.40</span>
<span className="ticker-item-change positive">+0.18%</span>
</div><div className="ticker-item">
<span className="ticker-item-name">MSCI World</span>
<span className="ticker-item-price">3,612.55</span>
<span className="ticker-item-change positive">+0.52%</span>
</div><div className="ticker-item">
<span className="ticker-item-name">PX Index</span>
<span className="ticker-item-price">1,812.34</span>
<span className="ticker-item-change positive">+0.28%</span>
</div><div className="ticker-item">
<span className="ticker-item-name">EUR/USD</span>
<span className="ticker-item-price">1.0782</span>
<span className="ticker-item-change negative">-0.15%</span>
</div><div className="ticker-item">
<span className="ticker-item-name">Ropa Brent</span>
<span className="ticker-item-price">$73.42</span>
<span className="ticker-item-change negative">-0.65%</span>
</div><div className="ticker-item">
<span className="ticker-item-name">Ethereum</span>
<span className="ticker-item-price">$3,892</span>
<span className="ticker-item-change positive">+1.87%</span>
</div><div className="ticker-item">
<span className="ticker-item-name">S&amp;P 500</span>
<span className="ticker-item-price">5,842.01</span>
<span className="ticker-item-change positive">+0.74%</span>
</div><div className="ticker-item">
<span className="ticker-item-name">NASDAQ</span>
<span className="ticker-item-price">18,847.28</span>
<span className="ticker-item-change positive">+1.12%</span>
</div><div className="ticker-item">
<span className="ticker-item-name">DAX</span>
<span className="ticker-item-price">19,425.73</span>
<span className="ticker-item-change positive">+0.38%</span>
</div><div className="ticker-item">
<span className="ticker-item-name">EUR/CZK</span>
<span className="ticker-item-price">25.28</span>
<span className="ticker-item-change negative">-0.12%</span>
</div><div className="ticker-item">
<span className="ticker-item-name">USD/CZK</span>
<span className="ticker-item-price">23.45</span>
<span className="ticker-item-change positive">+0.05%</span>
</div><div className="ticker-item">
<span className="ticker-item-name">Bitcoin</span>
<span className="ticker-item-price">$104,250</span>
<span className="ticker-item-change positive">+2.35%</span>
</div><div className="ticker-item">
<span className="ticker-item-name">Zlato</span>
<span className="ticker-item-price">$2,658.40</span>
<span className="ticker-item-change positive">+0.18%</span>
</div><div className="ticker-item">
<span className="ticker-item-name">MSCI World</span>
<span className="ticker-item-price">3,612.55</span>
<span className="ticker-item-change positive">+0.52%</span>
</div><div className="ticker-item">
<span className="ticker-item-name">PX Index</span>
<span className="ticker-item-price">1,812.34</span>
<span className="ticker-item-change positive">+0.28%</span>
</div><div className="ticker-item">
<span className="ticker-item-name">EUR/USD</span>
<span className="ticker-item-price">1.0782</span>
<span className="ticker-item-change negative">-0.15%</span>
</div><div className="ticker-item">
<span className="ticker-item-name">Ropa Brent</span>
<span className="ticker-item-price">$73.42</span>
<span className="ticker-item-change negative">-0.65%</span>
</div><div className="ticker-item">
<span className="ticker-item-name">Ethereum</span>
<span className="ticker-item-price">$3,892</span>
<span className="ticker-item-change positive">+1.87%</span>
</div></div>
<div className="ticker-fade-right"></div>
</div>
</div>

<div className="floating-cta" id="floating-cta">
<a className="btn-primary" href="#" onclick="navigateTo('contact')" style={{width: '100%', justifyContent: 'center', fontSize: '14px', padding: '12px'}}>
            Domluvit konzultaci zdarma
            <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>




    </>
  );
}
