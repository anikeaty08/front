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



    // ===================== TICKER DATA =====================
    const tickerAssets = [
        { name: 'S&P 500',   price: '5 287',    change: +0.84,  currency: '' },
        { name: 'NASDAQ',    price: '18 432',   change: +1.12,  currency: '' },
        { name: 'DAX',       price: '18 751',   change: +0.43,  currency: '' },
        { name: 'PX',        price: '1 672',    change: -0.21,  currency: '' },
        { name: 'FTSE 100',  price: '8 312',    change: +0.31,  currency: '' },
        { name: 'EUR/CZK',   price: '25.14',    change: -0.08,  currency: '' },
        { name: 'USD/CZK',   price: '23.41',    change: +0.15,  currency: '' },
        { name: 'GBP/CZK',   price: '29.87',    change: -0.12,  currency: '' },
        { name: 'BTC/USD',   price: '68 240',   change: +2.34,  currency: '$' },
        { name: 'ETH/USD',   price: '3 512',    change: +1.87,  currency: '$' },
        { name: 'Gold',      price: '2 341',    change: +0.52,  currency: '$' },
        { name: 'Silver',    price: '28.74',    change: +0.89,  currency: '$' },
        { name: 'Oil WTI',   price: '78.32',    change: -0.67,  currency: '$' },
        { name: 'Apple',     price: '189.42',   change: +0.93,  currency: '$' },
        { name: 'Microsoft', price: '415.28',   change: +0.61,  currency: '$' },
        { name: 'NVIDIA',    price: '875.14',   change: +3.42,  currency: '$' },
        { name: 'Alphabet',  price: '175.32',   change: +0.74,  currency: '$' },
        { name: 'Amazon',    price: '184.71',   change: +1.05,  currency: '$' },
        { name: 'Meta',      price: '487.53',   change: +1.38,  currency: '$' },
        { name: 'Tesla',     price: '176.89',   change: -1.24,  currency: '$' },
        { name: 'ČEZ',       price: '912',      change: +0.55,  currency: 'Kč' },
        { name: 'Komerční B.',price: '688',     change: -0.43,  currency: 'Kč' },
        { name: 'Erste',     price: '44.82',    change: +0.28,  currency: '€' },
        { name: 'VIG',       price: '38.10',    change: +0.17,  currency: '€' },
        { name: 'EUR/USD',   price: '1.0842',   change: -0.06,  currency: '' },
        { name: 'USD/JPY',   price: '156.74',   change: +0.32,  currency: '' },
        { name: 'Natural Gas',price: '2.14',    change: -1.83,  currency: '$' },
        { name: 'Copper',    price: '4.52',     change: +0.41,  currency: '$' },
        { name: 'Wheat',     price: '614',      change: -0.72,  currency: '$' },
        { name: 'MSCI World',price: '3 412',    change: +0.66,  currency: '' },
    ];

    function buildTickerItem(asset) {
        const sign = asset.change > 0 ? '+' : '';
        const cls = asset.change > 0 ? 'positive' : asset.change < 0 ? 'negative' : 'neutral';
        const arrow = asset.change > 0 ? '▲' : asset.change < 0 ? '▼' : '●';
        return `<div class="ticker-item">
            <span class="ticker-item-name">${asset.name}</span>
            <span class="ticker-item-price">${asset.currency}${asset.price}</span>
            <span class="ticker-item-change ${cls}">${arrow} ${sign}${asset.change.toFixed(2)}%</span>
        </div>`;
    }

    function initTicker() {
        const track = document.getElementById('ticker-track');
        // Build content twice for seamless loop
        const html = tickerAssets.map(buildTickerItem).join('');
        track.innerHTML = html + html;
    }

    // Simulate live updates every 4 seconds
    function simulateLiveUpdates() {
        tickerAssets.forEach(asset => {
            const delta = (Math.random() - 0.48) * 0.15;
            asset.change = parseFloat((asset.change + delta).toFixed(2));
        });
        const track = document.getElementById('ticker-track');
        const items = track.querySelectorAll('.ticker-item');
        items.forEach((el, i) => {
            const asset = tickerAssets[i % tickerAssets.length];
            const sign = asset.change > 0 ? '+' : '';
            const cls = asset.change > 0 ? 'positive' : asset.change < 0 ? 'negative' : 'neutral';
            const arrow = asset.change > 0 ? '▲' : asset.change < 0 ? '▼' : '●';
            const changeEl = el.querySelector('.ticker-item-change');
            if (changeEl) {
                changeEl.className = `ticker-item-change ${cls}`;
                changeEl.textContent = `${arrow} ${sign}${asset.change.toFixed(2)}%`;
            }
        });
    }

    initTicker();
    setInterval(simulateLiveUpdates, 4000);

    // ===================== PARTICLE CANVAS =====================
    (function() {
        const canvas = document.getElementById('particle-canvas');
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animId;

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        function createParticles() {
            particles = [];
            const count = Math.floor((canvas.width * canvas.height) / 18000);
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    r: Math.random() * 1.5 + 0.3,
                    dx: (Math.random() - 0.5) * 0.25,
                    dy: (Math.random() - 0.5) * 0.25,
                    alpha: Math.random() * 0.4 + 0.1
                });
            }
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(34,197,94,${p.alpha})`;
                ctx.fill();
                p.x += p.dx;
                p.y += p.dy;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
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
                        ctx.strokeStyle = `rgba(34,197,94,${0.06 * (1 - dist / 120)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
            animId = requestAnimationFrame(draw);
        }

        resize();
        createParticles();
        draw();
        window.addEventListener('resize', () => { resize(); createParticles(); });
    })();

    // ===================== NAVIGATION =====================
    let currentPage = 'home';

    function navigateTo(page) {
        document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
        const target = document.getElementById('page-' + page);
        if (target) { target.classList.add('active'); }
        currentPage = page;
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

        // Trigger fade animations
        setTimeout(() => {
            document.querySelectorAll('#page-' + page + ' .fade-up').forEach(el => {
                el.classList.remove('visible');
            });
            setTimeout(() => triggerFadeUps(), 50);
        }, 100);

        return false;
    }

    // ===================== SCROLL & FADE =====================
    function triggerFadeUps() {
        const els = document.querySelectorAll('.fade-up:not(.visible)');
        const vh = window.innerHeight;
        els.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < vh - 60) { el.classList.add('visible'); }
        });
    }

    window.addEventListener('scroll', () => {
        triggerFadeUps();
        const nav = document.getElementById('main-nav');
        if (window.scrollY > 20) { nav.classList.add('scrolled'); }
        else { nav.classList.remove('scrolled'); }
    });

    setTimeout(triggerFadeUps, 300);

    // ===================== MOBILE MENU =====================
    function toggleMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        const hamburger = document.getElementById('hamburger');
        menu.classList.toggle('open');
        hamburger.classList.toggle('open');
    }

    // ===================== CALCULATOR =====================
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
        let futureValue;
        if (monthlyRate === 0) {
            futureValue = amount * months;
        } else {
            futureValue = amount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
        }
        const invested = amount * months;

        document.getElementById('calc-result').textContent = Math.round(futureValue).toLocaleString('cs-CZ') + ' Kč';
        document.getElementById('calc-invested').textContent = invested.toLocaleString('cs-CZ') + ' Kč';
    }

    // ===================== TESTIMONIALS =====================
    let testimonialIndex = 0;

    function moveTestimonials(dir) {
        const track = document.getElementById('testimonial-track');
        const slides = track.querySelectorAll('.testimonial-slide');
        const visibleCount = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
        const maxIndex = slides.length - visibleCount;
        testimonialIndex = Math.max(0, Math.min(testimonialIndex + dir, maxIndex));
        const slideWidth = slides[0] ? slides[0].offsetWidth : 0;
        track.style.transform = `translateX(-${testimonialIndex * slideWidth}px)`;
    }

    // ===================== TAG OPTIONS =====================
    function toggleTag(el) {
        el.classList.toggle('selected');
    }

    // ===================== CHECKBOX =====================
    function toggleCheckbox(el) {
        el.classList.toggle('checked');
    }

    // ===================== FORM SUBMIT =====================
    function handleFormSubmit(e) {
        e.preventDefault();
        const gdpr = document.getElementById('gdpr-checkbox');
        if (!gdpr.classList.contains('checked')) {
            alert('Prosím potvrďte souhlas se zpracováním osobních údajů.');
            return;
        }
        document.getElementById('contact-form').style.display = 'none';
        document.getElementById('form-success').style.display = 'block';
    }

    // ===================== CASE STUDIES =====================
    function toggleCase(id, btn) {
        const detail = document.getElementById(id);
        const isOpen = detail.classList.contains('open');
        detail.classList.toggle('open');
        btn.innerHTML = isOpen
            ? 'Zobrazit více <iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>'
            : 'Skrýt <iconify-icon icon="solar:alt-arrow-up-linear" width="16"></iconify-icon>';
    }

    // ===================== BLOG ARTICLES =====================
    const articles = {
        1: {
            title: '5 nejčastějších chyb při sjednání hypotéky',
            category: 'Hypotéky',
            content: `<p style="margin-bottom:16px;">Hypotéka je pro většinu lidí největším finančním závazkem v životě. Přesto ji mnoho lidí sjednává bez dostatečné přípravy.</p>
            <h4 style="font-weight:600;margin-bottom:10px;margin-top:20px;">1. Srovnání pouze jedné banky</h4>
            <p style="color:var(--text-secondary);margin-bottom:12px;">Každá banka nabízí jiné podmínky. Porovnání alespoň 5–6 nabídek může ušetřit desítky tisíc korun.</p>
            <h4 style="font-weight:600;margin-bottom:10px;margin-top:20px;">2. Nevhodná fixace</h4>
            <p style="color:var(--text-secondary);margin-bottom:12px;">Délka fixace závisí na vaší situaci a výhledu úrokových sazeb. Není universální správná odpověď.</p>
            <h4 style="font-weight:600;margin-bottom:10px;margin-top:20px;">3. Podceňování vedlejších nákladů</h4>
            <p style="color:var(--text-secondary);margin-bottom:12px;">Odhad nemovitosti, pojištění, poplatky — to vše navyšuje celkové náklady.</p>
            <h4 style="font-weight:600;margin-bottom:10px;margin-top:20px;">4. Zapomenuté dofixování</h4>
            <p style="color:var(--text-secondary);margin-bottom:12px;">Po skončení fixace banka automaticky nastaví novou sazbu — ne vždy výhodnou. Hlídejte termíny.</p>
            <h4 style="font-weight:600;margin-bottom:10px;margin-top:20px;">5. Absence finanční rezervy</h4>
            <p style="color:var(--text-secondary);">Hypotéka bez rezervy je riskantní. I malý výpadek příjmu může způsobit problémy se splácením.</p>`
        },
        2: {
            title: 'Proč je finanční rezerva důležitější než „výhodná" investice',
            category: 'Plánování',
            content: `<p style="margin-bottom:16px;">Mnozí lidé začínají investovat dřív, než mají vybudovanou finanční rezervu. To je chyba, která může mít vážné důsledky.</p>
            <h4 style="font-weight:600;margin-bottom:10px;margin-top:20px;">Co je finanční rezerva?</h4>
            <p style="color:var(--text-secondary);margin-bottom:12px;">Ideálně 3–6 měsíčních výdajů uložených na dostupném účtu. Tyto peníze neinvestujete — jsou vaší záchrannou sítí.</p>
            <h4 style="font-weight:600;margin-bottom:10px;margin-top:20px;">Proč je rezerva prioritou?</h4>
            <p style="color:var(--text-secondary);margin-bottom:12px;">Bez rezervy jste nuceni v případě krize prodávat investice — třeba ve špatný čas. Tím přijdete o výnosy i jistotu.</p>
            <h4 style="font-weight:600;margin-bottom:10px;margin-top:20px;">Správné pořadí</h4>
            <p style="color:var(--text-secondary);">Nejprve rezerva → pak pojištění → pak splácení nevhodných dluhů → pak investice. Toto pořadí není náhoda.</p>`
        },
        3: {
            title: 'Jak přemýšlet o pojištění příjmů',
            category: 'Pojištění',
            content: `<p style="margin-bottom:16px;">Pojištění příjmů je jeden z nejdůležitějších, ale nejčastěji podceňovaných finančních nástrojů.</p>
            <h4 style="font-weight:600;margin-bottom:10px;margin-top:20px;">Co chrání pojištění příjmů?</h4>
            <ptext-secondary);margin-bottom:12px;">Váš příjem je váš nejcennější majetek. Pojištění příjmů zajistí, že i při nemoci nebo úrazu budete schopni hradit výdaje.</p>
            <h4 style="font-weight:600;margin-bottom:10px;margin-top:20px;">Klíčové parametry</h4>
            <p style="color:var(--text-secondary);margin-bottom:12px;">Výše pojistného plnění, čekací doba, krytá rizika — to vše musí odpovídat vaší situaci a závazkům.</p>
            <h4 style="font-weight:600;margin-bottom:10px;margin-top:20px;">OSVČ vs. zaměstnanec</h4>
            <p style="color:var(--text-secondary);">Podnikatelé jsou výrazně zranitelnější — nemají nemocenskou ani náhradu mzdy od zaměstnavatele. Pro OSVČ je pojištění příjmů zásadní.</p>`
        },
        4: {
            title: 'ETF fondy: proč jsou budoucností drobných investorů',
            category: 'Investice',
            content: `<p style="margin-bottom:16px;">ETF (Exchange Traded Funds) jsou burzovně obchodované fondy, které sledují index, komoditu nebo koš aktiv.</p>
            <h4 style="font-weight:600;margin-bottom:10px;margin-top:20px;">Výhody ETF</h4>
            <p style="color:var(--text-secondary);margin-bottom:12px;">Nízké náklady, široká diverzifikace, transparentnost, likvidita. ETF vám za zlomek nákladů aktivně spravovaných fondů nabídne expozici na celý trh.</p>
            <h4 style="font-weight:600;margin-bottom:10px;margin-top:20px;">Jak ETF fungují</h4>
            <p style="color:var(--text-secondary);margin-bottom:12px;">Kupujete podíl ve fondu, který drží stovky nebo tisíce akcií. Vaše riziko je rozloženo — pád jedné firmy neohrozí celé portfolio.</p>
            <h4 style="font-weight:600;margin-bottom:10px;margin-top:20px;">Kde začít?</h4>
            <p style="color:var(--text-secondary);">Začněte s globálními ETF (MSCI World, S&P 500). Investujte pravidelně, reinvestujte dividendy a buďte trpěliví — čas je váš největší spojenec.</p>`
        }
    };

    function showArticle(id) {
        const article = articles[id];
        if (!article) return;

        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed; inset: 0; z-index: 2000;
            background: rgba(8, 12, 22, 0.97);
            backdrop-filter: blur(20px);
            overflow-y: auto;
            padding: 80px 24px 100px;
            animation: fadeIn 0.3s ease;
        `;
        overlay.innerHTML = `
            <div style="max-width: 720px; margin: 0 auto;">
                <button onclick="this.closest('[style]').remove()" style="display: flex; align-items: center; gap: 8px; background: none; border: none; color: var(--text-secondary); cursor: pointer; font-size: 14px; margin-bottom: 32px; padding: 0;">
                    <iconify-icon icon="solar:arrow-left-linear" width="18"></iconify-icon> Zpět na blog
                </button>
                <p style="color: var(--accent); font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 12px;">${article.category}</p>
                <h1 style="font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 700; letter-spacing: -0.03em; margin-bottom: 32px; line-height: 1.3;">${article.title}</h1>
                <div style="font-size: 15px; line-height: 1.8; color: var(--text-secondary);">${article.content}</div>
                <div style="margin-top: 48px; padding-top: 32px; border-top: 1px solid var(--card-border); text-align: center;">
                    <p style="color: var(--text-secondary); font-size: 15px; margin-bottom: 20px;">Máte otázky? Probereme to osobně.</p>
                    <button onclick="this.closest('[style]').remove(); navigateTo('contact');" class="btn-primary">Domluvit konzultaci</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
        overlay.scrollTop = 0;
    }

    // ===================== INIT =====================
    updateCalc();
    
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
      
<canvas id="particle-canvas"></canvas>
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
<div style={{maxWidth: '1200px', margin: '0 auto', padding: '60px 24px', width: '100%', textAlign: 'center'}}>
<div className="fade-up" style={{marginBottom: '24px'}}>
<span style={{display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '20px', border: '1px solid var(--card-border)', background: 'var(--card-bg)', fontSize: '13px', color: 'var(--text-secondary)'}}>
<span className="pulse-dot"></span>
                            Nezávislé finanční poradenství
                        </span>
</div>
<h1 className="fade-up fade-up-delay-1" style={{fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: '700', letterSpacing: '-0.04em', lineHeight: '1.1', marginBottom: '24px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>
                        Finanční plán, který rozumí <span style={{color: 'var(--accent)'}}>vašemu životu</span>
</h1>
<p className="fade-up fade-up-delay-2" style={{fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.7', fontWeight: '300'}}>
                        Spojuji lidský přístup s moderními nástroji. Společně vytvoříme strategii, která pokryje investice, pojištění, hypotéky i dlouhodobé cíle — vše na jednom místě.
                    </p>
<div className="fade-up fade-up-delay-3" style={{display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginBottom: '48px'}}>
<a className="btn-primary" href="#" onclick="navigateTo('contact')" style={{fontSize: '15px'}}>
                            Domluvit úvodní konzultaci zdarma
                            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="btn-secondary" href="#" onclick="navigateTo('services')" style={{fontSize: '15px'}}>
                            Získat orientační návrh plánu
                        </a>
</div>
<div className="fade-up fade-up-delay-4" style={{display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'center', color: 'var(--text-secondary)', fontSize: '14px'}}>
<span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
<iconify-icon icon="solar:widget-linear" style={{color: 'var(--accent)'}} width="18"></iconify-icon>
                            Komplexní řešení: investice, pojištění, hypotéky, úvěry
                        </span>
<span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
<iconify-icon icon="solar:shield-check-linear" style={{color: 'var(--accent)'}} width="18"></iconify-icon>
                            Transparentní odměna, stejné zájmy jako máte vy
                        </span>
<span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
<iconify-icon icon="solar:heart-linear" style={{color: 'var(--accent)'}} width="18"></iconify-icon>
                            Dlouhodobá péče, ne jednorázový prodej
                        </span>
</div>
</div>
<div style={{position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '12px', animation: 'subtlePulse 2s ease infinite'}}>
<span>Scrollujte dolů</span>
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</section>
<section className="section-gradient" style={{padding: '100px 24px'}}>
<div style={{maxWidth: '1200px', margin: '0 auto'}}>
<div className="fade-up" style={{textAlign: 'center', marginBottom: '64px'}}>
<p style={{color: 'var(--accent)', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Služby</p>
<h2 style={{fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', letterSpacing: '-0.03em', marginBottom: '16px'}}>Vše pod jednou střechou</h2>
<p style={{color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto', lineHeight: '1.7'}}>Nemusíte řešit finance na pěti místech. Postarám se o celý váš finanční ekosystém.</p>
</div>
<div className="services-scroll" style={{paddingBottom: '8px'}}>
<div className="glass-card fade-up" style={{padding: '32px', minWidth: '280px', flex: '1'}}>
<div style={{width: '48px', height: '48px', borderRadius: '12px', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
<iconify-icon icon="solar:chart-2-linear" style={{color: 'var(--accent)'}} width="24"></iconify-icon>
</div>
<h3 style={{fontWeight: '600', fontSize: '18px', marginBottom: '10px', letterSpacing: '-0.02em'}}>Investice a budování majetku</h3>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px'}}>Dlouhodobé investování přizpůsobené vašim cílům. Definujeme horizont, toleranci rizika a nastavíme strategii, která pracuje za vás.</p>
<a href="#" onclick="navigateTo('services')" style={{color: 'var(--accent)', fontSize: '14px', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px'}}>
                                Zjistit víc <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="glass-card fade-up fade-up-delay-1" style={{padding: '32px', minWidth: '280px', flex: '1'}}>
<div style={{width: '48px', height: '48px', borderRadius: '12px', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
<iconify-icon icon="solar:shield-linear" style={{color: 'var(--accent)'}} width="24"></iconify-icon>
</div>
<h3 style={{fontWeight: '600', fontSize: '18px', marginBottom: '10px', letterSpacing: '-0.02em'}}>Pojištění a ochrana</h3>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px'}}>Ochrana příjmů, rodiny i majetku. Nastavíme pojištění tak, aby dávalo smysl — ne maximum provize, ale maximum jistoty.</p>
<a href="#" onclick="navigateTo('services')" style={{color: 'var(--accent)', fontSize: '14px', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px'}}>
                                Zjistit víc <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="glass-card fade-up fade-up-delay-2" style={{padding: '32px', minWidth: '280px', flex: '1'}}>
<div style={{width: '48px', height: '48px', borderRadius: '12px', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
<iconify-icon icon="solar:home-smile-linear" style={{color: 'var(--accent)'}} width="24"></iconify-icon>
</div>
<h3 style={{fontWeight: '600', fontSize: '18px', marginBottom: '10px', letterSpacing: '-0.02em'}}>Hypotéky</h3>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px'}}>Porovnám nabídky bank za vás, vyřeším refinancování a pohlídám dofixování. Ušetříte čas i peníze.</p>
<a href="#" onclick="navigateTo('services')" style={{color: 'var(--accent)', fontSize: '14px', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px'}}>
                                Zjistit víc <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="glass-card fade-up fade-up-delay-3" style={{padding: '32px', minWidth: '280px', flex: '1'}}>
<div style={{width: '48px', height: '48px', borderRadius: '12px', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
<iconify-icon icon="solar:wallet-linear" style={{color: 'var(--accent)'}} width="24"></iconify-icon>
</div>
<h3 style={{fontWeight: '600', fontSize: '18px', marginBottom: '10px', letterSpacing: '-0.02em'}}>Úvěry a financování</h3>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px'}}>Zodpovědné zadlužení jako nástroj, ne past. Pomohu s konsolidací i nastavením splátek, které neohrozí váš plán.</p>
<a href="#" onclick="navigateTo('services')" style={{color: 'var(--accent)', fontSize: '14px', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px'}}>
                                Zjistit víc <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="glass-card fade-up fade-up-delay-4" style={{padding: '32px', minWidth: '280px', flex: '1'}}>
<div style={{width: '48px', height: '48px', borderRadius: '12px', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
<iconify-icon icon="solar:routing-linear" style={{color: 'var(--accent)'}} width="24"></iconify-icon>
</div>
<h3 style={{fontWeight: '600', fontSize: '18px', marginBottom: '10px', letterSpacing: '-0.02em'}}>Dlouhodobý finanční plán</h3>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px'}}>Celkový pohled na vaše finance — od rezervy přes střednědobé cíle až po důchod. Jasně uvidíte, kam směřujete.</p>
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
<h2 style={{fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', letterSpacing: '-0.03em', marginBottom: '16px'}}>Jak to funguje</h2>
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
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Připravím finanční plán s konkrétními čísly. Vysvětlím vám, proč volím daná řešení a jaké jsou alternativy.</p>
</div>
<div className="fade-up fade-up-delay-2" style={{textAlign: 'center', padding: '32px 24px'}}>
<div style={{width: '56px', height: '56px', borderRadius: '50%', border: '2px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontWeight: '700', color: 'var(--accent)', fontSize: '18px'}}>3</div>
<h3 style={{fontWeight: '600', fontSize: '17px', marginBottom: '10px', letterSpacing: '-0.02em'}}>Realizace</h3>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Zařídím vše potřebné — od nastavení investic přes sjednání pojištění po vyřízení hypotéky. Minimum papírování.</p>
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
<h2 style={{fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', letterSpacing: '-0.03em', marginBottom: '16px'}}>Nezávislý poradce vs. prodejce produktů</h2>
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
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Nejsem vázaný na žádnou banku ani pojišťovnu. Vybírám z celého trhu to, co je nejlepší pro vás.</p>
</div>
<div className="fade-up fade-up-delay-1" style={{padding: '24px'}}>
<iconify-icon icon="solar:users-group-rounded-linear" style={{color: 'var(--accent)', marginBottom: '12px', display: 'block'}} width="28"></iconify-icon>
<h4 style={{fontWeight: '600', fontSize: '16px', marginBottom: '8px', letterSpacing: '-0.02em'}}>Dlouhodobý vztah</h4>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Vaše finanční situace se mění. Jsem tu, abych plán průběžně přizpůsoboval novým okolnostem.</p>
</div>
<div className="fade-up fade-up-delay-2" style={{padding: '24px'}}>
<iconify-icon icon="solar:laptop-linear" style={{color: 'var(--accent)', marginBottom: '12px', display: 'block'}} width="28"></iconify-icon>
<h4 style={{fontWeight: '600', fontSize: '16px', marginBottom: '8px', letterSpacing: '-0.02em'}}>Technologie místo papírování</h4>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Digitální přehled vašich financí, bezpapírová administrativa a jednoduché ovládání online.</p>
</div>
<div className="fade-up fade-up-delay-3" style={{padding: '24px'}}>
<iconify-icon icon="solar:calculator-linear" style={{color: 'var(--accent)', marginBottom: '12px', display: 'block'}} width="28"></iconify-icon>
<h4 style={{fontWeight: '600', fontSize: '16px', marginBottom: '8px', letterSpacing: '-0.02em'}}>Srozumitelná čísla</h4>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Žádný finanční žargon. Jasně uvidíte, jak vaše rozhodnutí ovlivňují celkový plán.</p>
</div>
</div>
</div>
</section>
<section className="section-gradient" style={{padding: '100px 24px'}}>
<div style={{maxWidth: '800px', margin: '0 auto'}}>
<div className="glass-card glow-green fade-up" style={{padding: '48px 40px'}}>
<div style={{textAlign: 'center', marginBottom: '40px'}}>
<iconify-icon icon="solar:calculator-minimalistic-linear" style={{color: 'var(--accent)', marginBottom: '12px'}} width="32"></iconify-icon>
<h2 style={{fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: '700', letterSpacing: '-0.03em', marginBottom: '8px'}}>Kolik můžete naspořit?</h2>
<p style={{color: 'var(--text-secondary)', fontSize: '14px'}}>Orientační kalkulačka — ilustrace principu pravidelného investování.</p>
</div>
<div style={{display: 'grid', gap: '32px'}}>
<div>
<div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '12px'}}>
<label style={{fontSize: '14px', color: 'var(--text-secondary)'}}>Měsíční úspora</label>
<span id="calc-amount-label" style={{fontWeight: '600', color: 'var(--accent)'}}>5 000 Kč</span>
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
<p id="calc-result" style={{fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', color: 'var(--accent)', letterSpacing: '-0.03em'}}>2 310 204 Kč</p>
<p style={{color: 'var(--text-muted)', fontSize: '12px', marginTop: '12px'}}>Z toho vloženo: <span id="calc-invested">1 200 000 Kč</span></p>
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
<p className="fade-up" style={{color: 'var(--text-secondary)', fontSize: '14px', maxWidth: '500px', margin: '0 auto', lineHeight: '1.7'}}>Vybírám řešení na míru z nabídky bank, pojišťoven a investičních společností — ne na základě provizí, ale na základě vašich potřeb.</p>
</div>
</section>
<section className="section-dark" style={{padding: '100px 24px'}}>
<div style={{maxWidth: '1200px', margin: '0 auto'}}>
<div className="fade-up" style={{textAlign: 'center', marginBottom: '64px'}}>
<p style={{color: 'var(--accent)', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Reference</p>
<h2 style={{fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', letterSpacing: '-0.03em'}}>Co říkají klienti</h2>
</div>
<div style={{position: 'relative', overflow: 'hidden'}}>
<div className="testimonial-track" id="testimonial-track">
<div className="testimonial-slide">
<div className="glass-card" style={{padding: '32px', height: '100%'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px'}}>
<div style={{width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-glow), rgba(34, 197, 94, 0.3))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '16px', color: 'var(--accent)'}}>P.K.</div>
<div>
<p style={{fontWeight: '600', fontSize: '15px'}}>Petr K.</p>
<p style={{color: 'var(--text-muted)', fontSize: '12px'}}>Mladý pár, Praha</p>
</div>
</div>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>„S Janem jsme vyřešili hypotéku, investice i pojištění najednou. Konečně máme přehled o tom, kam naše peníze směřují. Hlavně oceňujeme, že nám vše trpělivě vysvětlil."</p>
</div>
</div>
<div className="testimonial-slide">
<div className="glass-card" style={{padding: '32px', height: '100%'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px'}}>
<div style={{width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-glow), rgba(34, 197, 94, 0.3))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '16px', color: 'var(--accent)'}}>M.S.</div>
<div>
<p style={{fontWeight: '600', fontSize: '15px'}}>Martina S.</p>
<p style={{color: 'var(--text-muted)', fontSize: '12px'}}>Podnikatelka, Brno</p>
</div>
</div>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>„Jako podnikatelka jsem potřebovala někoho, kdo mi pomůže nastavit finanční rezervu i investice pro firmu. Jan to zvládl profesionálně a bez zbytečného papírování."</p>
</div>
</div>
<div className="testimonial-slide">
<div className="glass-card" style={{padding: '32px', height: '100%'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px'}}>
<div style={{width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-glow), rgba(34, 197, 94, 0.3))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '16px', color: 'var(--accent)'}}>J.N.</div>
<div>
<p style={{fontWeight: '600', fontSize: '15px'}}>Jiří N.</p>
<p style={{color: 'var(--text-muted)', fontSize: '12px'}}>Rodina s dětmi, Ostrava</p>
</div>
</div>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>„Díky Janovi jsme ušetřili na pojistném a zároveň získali lepší ochranu. Refinancování hypotéky nám snížilo splátku o tisíce měsíčně. Vřele doporučujeme."</p>
</div>
</div>
<div className="testimonial-slide">
<div className="glass-card" style={{padding: '32px', height: '100%'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px'}}>
<div style={{width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-glow), rgba(34, 197, 94, 0.3))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '16px', color: 'var(--accent)'}}>L.H.</div>
<div>
<p style={{fontWeight: '600', fontSize: '15px'}}>Lenka H.</p>
<p style={{color: 'var(--text-muted)', fontSize: '12px'}}>Blízko důchodu, Plzeň</p>
</div>
</div>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>„Měla jsem obavy, jestli budu mít v důchodu dost. Jan mi připravil plán, díky kterému vím, že jsem na dobré cestě. Klidně spím."</p>
</div>
</div>
</div>
<div style={{display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px'}}>
<button onclick="moveTestimonials(-1)" onmouseout="this.style.borderColor='var(--card-border)';this.style.color='var(--text-secondary)'" onmouseover="this.style.borderColor='var(--accent)';this.style.color='var(--accent)'" style={{width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--card-border)', background: 'var(--card-bg)', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s'}}>
<iconify-icon icon="solar:arrow-left-linear" width="18"></iconify-icon>
</button>
<button onclick="moveTestimonials(1)" onmouseout="this.style.borderColor='var(--card-border)';this.style.color='var(--text-secondary)'" onmouseover="this.style.borderColor='var(--accent)';this.style.color='var(--accent)'" style={{width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--card-border)', background: 'var(--card-bg)', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s'}}>
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</section>
<section className="hero-gradient" style={{padding: '100px 24px', textAlign: 'center'}}>
<div className="fade-up" style={{maxWidth: '600px', margin: '0 auto'}}>
<h2 style={{fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', letterSpacing: '-0.03em', marginBottom: '16px'}}>Připraveni začít plánovat?</h2>
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
<h1 style={{fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', letterSpacing: '-0.04em', marginBottom: '16px'}}>Kompletní finanční péče</h1>
<p style={{color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.7'}}>Každá oblast vašich financí je propojena. Proto je řeším společně, ne odděleně.</p>
</div>
<div className="fade-up" id="svc-investice" style={{marginBottom: '80px'}}>
<div className="md-grid-2" style={{display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'center'}}>
<div>
<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px'}}>
<div style={{width: '44px', height: '44px', borderRadius: '12px', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<iconify-icon icon="solar:chart-2-linear" style={{color: 'var(--accent)'}} width="22"></iconify-icon>
</div>
<h2 style={{fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: '700', letterSpacing: '-0.03em'}}>Investice a budování majetku</h2>
</div>
<p style={{color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.8', marginBottom: '20px'}}>Investování není hazard ani výsada bohatých. Je to nástroj, jak nechat peníze pracovat za vás. Společně definujeme vaše cíle, časový horizont a toleranci rizika.</p>
<p style={{color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.8', marginBottom: '24px'}}>Využívám moderní investiční nástroje jako ETF fondy a diverzifikované portfolia. Váš plán průběžně rebalancuji, aby odpovídal aktuální situaci na trhu i ve vašem životě.</p>
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
<p style={{color: 'var(--text-muted)', fontSize: '11px', marginTop: '12px', textAlign: 'center'}}>* Pouze ilustrace, minulé výnosy nezaručují budoucí výnosy.</p>
</div>
</div>
</div>
<div className="fade-up" id="svc-pojisteni" style={{marginBottom: '80px', paddingTop: '40px', borderTop: '1px solid var(--card-border)'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px'}}>
<div style={{width: '44px', height: '44px', borderRadius: '12px', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><iconify-icon icon="solar:shield-linear" style={{color: 'var(--accent)'}} width="22"></iconify-icon></div>
<h2 style={{fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: '700', letterSpacing: '-0.03em'}}>Pojištění a ochrana</h2>
</div>
<p style={{color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.8', marginBottom: '32px', maxWidth: '700px'}}>Pojištění má chránit to nejdůležitější — váš příjem, rodinu a majetek. Nastavím ho tak, aby dávalo smysl, ne aby generovalo maximální provizi.</p>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px'}}>
<div className="glass-card" style={{padding: '28px'}}><iconify-icon icon="solar:user-check-linear" style={{color: 'var(--accent)', marginBottom: '12px', display: 'block'}} width="24"></iconify-icon><h3 style={{fontWeight: '600', fontSize: '16px', marginBottom: '8px'}}>Ochrana příjmů</h3><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Rizikové pojištění při úrazu, nemoci nebo invaliditě. Zajistíte příjem rodiny i v nepředvídatelných situacích.</p></div>
<div className="glass-card" style={{padding: '28px'}}><iconify-icon icon="solar:users-group-rounded-linear" style={{color: 'var(--accent)', marginBottom: '12px', display: 'block'}} width="24"></iconify-icon><h3 style={{fontWeight: '600', fontSize: '16px', marginBottom: '8px'}}>Pojištění rodiny</h3><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Životní pojištění, pojištění dětí a komplexní ochrana celé domácnosti pro váš klidný spánek.</p></div>
<div className="glass-card" style={{padding: '28px'}}><iconify-icon icon="solar:home-linear" style={{color: 'var(--accent)', marginBottom: '12px', display: 'block'}} width="24"></iconify-icon><h3 style={{fontWeight: '600', fontSize: '16px', marginBottom: '8px'}}>Pojištění majetku</h3><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Nemovitost, domácnost, odpovědnost. Nastavím pojištění tak, abyste byli skutečně chráněni.</p></div>
</div>
</div>
<div className="fade-up" id="svc-hypoteky" style={{marginBottom: '80px', paddingTop: '40px', borderTop: '1px solid var(--card-border)'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px'}}>
<div style={{width: '44px', height: '44px', borderRadius: '12px', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><iconify-icon icon="solar:home-smile-linear" style={{color: 'var(--accent)'}} width="22"></iconify-icon></div>
<h2 style={{fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: '700', letterSpacing: '-0.03em'}}>Hypotéky</h2>
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
<h2 style={{fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: '700', letterSpacing: '-0.03em'}}>Úvěry a financování</h2>
</div>
<p style={{color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.8', marginBottom: '24px', maxWidth: '700px'}}>Správně nastavený úvěr může být užitečný nástroj. Špatně zvolený úvěr může zničit celý finanční plán.</p>
<div className="glass-card" style={{padding: '24px', borderLeft: '3px solid rgba(234, 179, 8, 0.5)', maxWidth: '600px'}}>
<div style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}><iconify-icon icon="solar:danger-triangle-linear" style={{color: '#eab308', flexShrink: '0', marginTop: '2px'}} width="22"></iconify-icon><div><p style={{fontWeight: '600', fontSize: '14px', marginBottom: '6px', color: '#eab308'}}>Důležité upozornění</p><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Nevhodné úvěry mohou vážně ohrozit vaši finanční stabilitu. Pomohu s konsolidací stávajících závazků a nastavením splátek, které neohrozí vaše cíle.</p></div></div>
</div>
</div>
<div className="fade-up" id="svc-plan" style={{paddingTop: '40px', borderTop: '1px solid var(--card-border)'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px'}}>
<div style={{width: '44px', height: '44px', borderRadius: '12px', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><iconify-icon icon="solar:routing-linear" style={{color: 'var(--accent)'}} width="22"></iconify-icon></div>
<h2 style={{fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: '700', letterSpacing: '-0.03em'}}>Dlouhodobý finanční plán</h2>
</div>
<p style={{color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.8', marginBottom: '32px', maxWidth: '700px'}}>Nejde o jednorázový prodej produktů. Jde o celkovou strategii, která propojuje všechny oblasti vašich financí do jednoho srozumitelného plánu.</p>
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
<h1 style={{fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', letterSpacing: '-0.04em', marginBottom: '16px'}}>Jak probíhá spolupráce</h1>
<p style={{color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto', lineHeight: '1.7'}}>Od prvního rozhovoru až po dlouhodobou péči o váš finanční plán.</p>
</div>
<div style={{position: 'relative', paddingLeft: '48px'}}>
<div className="timeline-line"></div>
<div className="fade-up" style={{position: 'relative', paddingBottom: '48px'}}><div className="timeline-dot"></div><div className="glass-card" style={{padding: '28px'}}><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px'}}>Krok 1</p><h3 style={{fontWeight: '600', fontSize: '18px', marginBottom: '12px', letterSpacing: '-0.02em'}}>Seznámení a analýza</h3><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.8'}}>Při prvním setkání — online nebo osobně — vás vyslechnu. Žádné formuláře, žádný prodejní tlak. Pouze upřímný rozhovor.</p><p style={{color: 'var(--text-muted)', fontSize: '13px', marginTop: '12px', display: 'flex', alignItems: 'center', gap: '6px'}}><iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>Cca 60 minut, zdarma a nezávazně</p></div></div>
<div className="fade-up fade-up-delay-1" style={{position: 'relative', paddingBottom: '48px'}}><div className="timeline-dot"></div><div className="glass-card" style={{padding: '28px'}}><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px'}}>Krok 2</p><h3 style={{fontWeight: '600', fontSize: '18px', marginBottom: '12px', letterSpacing: '-0.02em'}}>Návrh řešení a finanční plán</h3><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.8'}}>Na základě analýzy připravím konkrétní návrh s jasnými čísly. Vše vysvětlím srozumitelně a ukážu alternativy.</p><p style={{color: 'var(--text-muted)', fontSize: '13px', marginTop: '12px', display: 'flex', alignItems: 'center', gap: '6px'}}><iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>Do 7 dnů od prvního setkání</p></div></div>
<div className="fade-up fade-up-delay-2" style={{position: 'relative', paddingBottom: '48px'}}><div className="timeline-dot"></div><div className="glass-card" style={{padding: '28px'}}><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px'}}>Krok 3</p><h3 style={{fontWeight: '600', fontSize: '18px', marginBottom: '12px', letterSpacing: '-0.02em'}}>Realizace</h3><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.8'}}>Po schválení plánu zařídím vše potřebné. Sjednám pojištění, nastavím investice, vyřídím hypotéku. Většinu věcí zvládneme digitálně.</p><p style={{color: 'var(--text-muted)', fontSize: '13px', marginTop: '12px', display: 'flex', alignItems: 'center', gap: '6px'}}><iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>Většinu produktů nastavíme do 14 dnů</p></div></div>
<div className="fade-up fade-up-delay-3" style={{position: 'relative'}}><div className="timeline-dot"></div><div className="glass-card" style={{padding: '28px'}}><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px'}}>Krok 4</p><h3 style={{fontWeight: '600', fontSize: '18px', marginBottom: '12px', letterSpacing: '-0.02em'}}>Dlouhodobá péče a revize</h3><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.8'}}>Minimálně jednou ročně plán společně zrevidujeme. Pokud se změní vaše situace — plán přizpůsobíme.</p><p style={{color: 'var(--text-muted)', fontSize: '13px', marginTop: '12px', display: 'flex', alignItems: 'center', gap: '6px'}}><iconify-icon icon="solar:infinity-linear" width="14"></iconify-icon>Průběžně, po celou dobu spolupráce</p></div></div>
</div>
<div className="glass-card glow-green fade-up" style={{padding: '32px', marginTop: '64px'}}>
<h3 style={{fontWeight: '600', fontSize: '18px', marginBottom: '20px', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '10px'}}><iconify-icon icon="solar:checklist-linear" style={{color: 'var(--accent)'}} width="22"></iconify-icon>Co si připravit na první schůzku</h3>
<div style={{display: 'grid', gap: '12px'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}><iconify-icon icon="solar:check-square-linear" style={{color: 'var(--accent)'}} width="18"></iconify-icon><span style={{fontSize: '14px', color: 'var(--text-secondary)'}}>Přehled o měsíčních příjmech a výdajích</span></div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}><iconify-icon icon="solar:check-square-linear" style={{color: 'var(--accent)'}} width="18"></iconify-icon><span style={{fontSize: '14px', color: 'var(--text-secondary)'}}>Stávající smlouvy (pojistky, investice, úvěry)</span></div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}><iconify-icon icon="solar:check-square-linear" style={{color: 'var(--accent)'}} width="18"></iconify-icon><span style={{fontSize: '14px', color: 'var(--text-secondary)'}}>Vaše cíle a přání (krátkodobé i dlouhodobé)</span></div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}><iconify-icon icon="solar:check-square-linear" style={{color: 'var(--accent)'}} width="18"></iconify-icon><span style={{fontSize: '14px', color: 'var(--text-secondary)'}}>Otázky, které vás napadají — žádná není hloupá</span></div>
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
<h1 style={{fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', letterSpacing: '-0.04em', marginBottom: '16px'}}>Jan Kurdiovský</h1>
<p style={{color: 'var(--text-secondary)', fontSize: '18px'}}>Nezávislý finanční poradce</p>
</div>
<div className="fade-up" style={{display: 'grid', gap: '48px', marginBottom: '64px'}}>
<div style={{display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'flex-start'}}>
<div style={{width: '200px', height: '260px', borderRadius: '16px', background: 'linear-gradient(135deg, var(--accent-glow), rgba(15, 23, 42, 0.8))', border: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}><iconify-icon icon="solar:user-circle-linear" style={{color: 'var(--text-muted)'}} width="64"></iconify-icon></div>
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
<div className="glass-card" style={{padding: '24px'}}><iconify-icon icon="solar:eye-linear" style={{color: 'var(--accent)', marginBottom: '12px', display: 'block'}} width="24"></iconify-icon><h4 style={{fontWeight: '600', fontSize: '15px', marginBottom: '8px'}}>Transparentnost</h4><p style={{color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.7'}}>Vždy vám řeknu, kolik a za co platíte. Žádné skryté poplatky.</p></div>
<div className="glass-card" style={{padding: '24px'}}><iconify-icon icon="solar:graduation-cap-linear" style={{color: 'var(--accent)', marginBottom: '12px', display: 'block'}} width="24"></iconify-icon><h4 style={{fontWeight: '600', fontSize: '15px', marginBottom: '8px'}}>Vzdělávání</h4><p style={{color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.7'}}>Chci, abyste rozuměli svým financím. Vědomě rozhodovali.</p></div>
<div className="glass-card" style={{padding: '24px'}}><iconify-icon icon="solar:hand-shake-linear" style={{color: 'var(--accent)', marginBottom: '12px', display: 'block'}} width="24"></iconify-icon><h4 style={{fontWeight: '600', fontSize: '15px', marginBottom: '8px'}}>Partnerství</h4><p style={{color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.7'}}>Nejsem prodejce, jsem váš partner. Moje odměna je navázána na vaši spokojenost.</p></div>
<div className="glass-card" style={{padding: '24px'}}><iconify-icon icon="solar:graph-up-linear" style={{color: 'var(--accent)', marginBottom: '12px', display: 'block'}} width="24"></iconify-icon><h4 style={{fontWeight: '600', fontSize: '15px', marginBottom: '8px'}}>Rozvoj</h4><p style={{color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.7'}}>Neustále se vzdělávám v nových nástrojích a přístupech.</p></div>
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
<h1 style={{fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', letterSpacing: '-0.04em', marginBottom: '16px'}}>Příběhy klientů</h1>
<p style={{color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto', lineHeight: '1.7'}}>Každý klient je jiný. Společné mají jedno — chtějí mít ve financích jasno.</p>
</div>
<div style={{display: 'grid', gap: '24px'}}>
<div className="glass-card fade-up" style={{padding: '32px'}}><div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px'}}><div style={{width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-glow), rgba(34, 197, 94, 0.2))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', color: 'var(--accent)'}}><iconify-icon icon="solar:users-group-rounded-linear" width="22"></iconify-icon></div><div><h3 style={{fontWeight: '600', fontSize: '17px', letterSpacing: '-0.02em'}}>Mladá rodina s dvěma dětmi</h3><p style={{color: 'var(--text-muted)', fontSize: '13px'}}>Tomáš a Lucie, 32 a 30 let</p></div></div><div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '16px'}}><div><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px'}}>Situace před</p><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Měli hypotéku u první banky, drahé pojistky a nulové investice.</p></div><div><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px'}}>Cíl</p><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Optimalizovat produkty, vytvořit rezervu a začít spořit na studium dětí.</p></div></div><div className="case-detail" id="case-1"><div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', paddingTop: '16px', borderTop: '1px solid var(--card-border)'}}><div><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px'}}>Řešení</p><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Refinancování hypotéky, revize pojistek, nastavení pravidelných investic.</p></div><div><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px'}}>Stav dnes</p><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Nižší splátka, lepší ochrana, investice běží a rodina má přehled.</p></div></div></div><button onclick="toggleCase('case-1', this)" style={{background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer', fontSize: '14px', fontWeight: '500', marginTop: '12px', display: 'flex', alignItems: 'center', gap: '4px'}}>Zobrazit více <iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon></button></div>
<div className="glass-card fade-up fade-up-delay-1" style={{padding: '32px'}}><div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px'}}><div style={{width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-glow), rgba(34, 197, 94, 0.2))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', color: 'var(--accent)'}}><iconify-icon icon="solar:case-linear" width="22"></iconify-icon></div><div><h3 style={{fontWeight: '600', fontSize: '17px', letterSpacing: '-0.02em'}}>Podnikatel hledající stabilitu</h3><p style={{color: 'var(--text-muted)', fontSize: '13px'}}>Martin, 42 let, OSVČ</p></div></div><div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '16px'}}><div><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px'}}>Situace před</p><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Vysoký příjem, ale bez jakékoliv finanční strategie.</p></div><div><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px'}}>Cíl</p><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Zajistit sebe a rodinu, vytvořit polštář a začít budovat majetek.</p></div></div><div className="case-detail" id="case-2"><div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', paddingTop: '16px', borderTop: '1px solid var(--card-border)'}}><div><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px'}}>Řešení</p><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Šestiměsíční rezerva, rizikové pojištění, diverzifikované portfolio.</p></div><div><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px'}}>Stav dnes</p><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Finanční jistota i v horších měsících. Investice rostou.</p></div></div></div><button onclick="toggleCase('case-2', this)" style={{background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer', fontSize: '14px', fontWeight: '500', marginTop: '12px', display: 'flex', alignItems: 'center', gap: '4px'}}>Zobrazit více <iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon></button></div>
<div className="glass-card fade-up fade-up-delay-2" style={{padding: '32px'}}><div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px'}}><div style={{width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-glow), rgba(34, 197, 94, 0.2))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', color: 'var(--accent)'}}><iconify-icon icon="solar:sun-fog-linear" width="22"></iconify-icon></div><div><h3 style={{fontWeight: '600', fontSize: '17px', letterSpacing: '-0.02em'}}>Příprava na klidný důchod</h3><p style={{color: 'var(--text-muted)', fontSize: '13px'}}>Jana, 55 let</p></div></div><div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '16px'}}><div><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px'}}>Situace před</p><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Blížící se důchod bez jasné představy o dostupných prostředcích.</p></div><div><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px'}}>Cíl</p><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Získat přehled a optimalizovat stávající produkty.</p></div></div><div className="case-detail" id="case-3"><div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', paddingTop: '16px', borderTop: '1px solid var(--card-border)'}}><div><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px'}}>Řešení</p><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Audit smluv, zrušení nevýhodných produktů, nastavení čerpacího plánu.</p></div><div><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px'}}>Stav dnes</p><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Jana přesně ví, kolik bude mít v důchodu. Klidně spí.</p></div></div></div><button onclick="toggleCase('case-3', this)" style={{background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer', fontSize: '14px', fontWeight: '500', marginTop: '12px', display: 'flex', alignItems: 'center', gap: '4px'}}>Zobrazit více <iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon></button></div>
</div>
</div>
</section>
</div>

<div className="page-section" id="page-blog">
<section className="hero-gradient" style={{paddingTop: '120px', paddingBottom: '100px'}}>
<div style={{maxWidth: '1000px', margin: '0 auto', padding: '0 24px'}}>
<div className="fade-up" style={{textAlign: 'center', marginBottom: '64px'}}>
<p style={{color: 'var(--accent)', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Blog</p>
<h1 style={{fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', letterSpacing: '-0.04em', marginBottom: '16px'}}>Edukace a články</h1>
<p style={{color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto', lineHeight: '1.7'}}>Praktické rady, které vám pomohou lépe rozumět financím.</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px'}}>
<div className="glass-card blog-card fade-up" onclick="showArticle(1)" style={{cursor: 'pointer'}}><div className="blog-img" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><iconify-icon icon="solar:home-smile-linear" style={{color: 'var(--accent)', opacity: '0.5'}} width="48"></iconify-icon></div><div style={{padding: '24px'}}><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', marginBottom: '8px'}}>Hypotéky</p><h3 style={{fontWeight: '600', fontSize: '17px', marginBottom: '10px', letterSpacing: '-0.02em', lineHeight: '1.4'}}>5 nejčastějších chyb při sjednání hypotéky</h3><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Většina lidí řeší hypotéku jednou nebo dvakrát za život. Přesto se do ní často pouští bez přípravy...</p></div></div>
<div className="glass-card blog-card fade-up fade-up-delay-1" onclick="showArticle(2)" style={{cursor: 'pointer'}}><div className="blog-img" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><iconify-icon icon="solar:safe-circle-linear" style={{color: 'var(--accent)', opacity: '0.5'}} width="48"></iconify-icon></div><div style={{padding: '24px'}}><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', marginBottom: '8px'}}>Plánování</p><h3 style={{fontWeight: '600', fontSize: '17px', marginBottom: '10px', letterSpacing: '-0.02em', lineHeight: '1.4'}}>Proč je finanční rezerva důležitější než „výhodná" investice</h3><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Mnoho lidí začne investovat dřív, než si vytvoří finanční polštář...</p></div></div>
<div className="glass-card blog-card fade-up fade-up-delay-2" onclick="showArticle(3)" style={{cursor: 'pointer'}}><div className="blog-img" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><iconify-icon icon="solar:shield-linear" style={{color: 'var(--accent)', opacity: '0.5'}} width="48"></iconify-icon></div><div style={{padding: '24px'}}><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', marginBottom: '8px'}}>Pojištění</p><h3 style={{fontWeight: '600', fontSize: '17px', marginBottom: '10px', letterSpacing: '-0.02em', lineHeight: '1.4'}}>Jak přemýšlet o pojištění příjmů</h3><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Pojištění příjmů je často přehlížené, přesto patří mezi nejdůležitější finanční nástroje...</p></div></div>
<div className="glass-card blog-card fade-up fade-up-delay-3" onclick="showArticle(4)" style={{cursor: 'pointer'}}><div className="blog-img" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><iconify-icon icon="solar:chart-2-linear" style={{color: 'var(--accent)', opacity: '0.5'}} width="48"></iconify-icon></div><div style={{padding: '24px'}}><p style={{color: 'var(--accent)', fontSize: '12px', fontWeight: '600', marginBottom: '8px'}}>Investice</p><h3 style={{fontWeight: '600', fontSize: '17px', marginBottom: '10px', letterSpacing: '-0.02em', lineHeight: '1.4'}}>ETF fondy: proč jsou budoucností drobných investorů</h3><p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>ETF fondy si získávají stále větší popularitu. Co stojí za jejich úspěchem?</p></div></div>
</div>
</div>
</section>
</div>

<div className="page-section" id="page-contact">
<section className="hero-gradient" style={{paddingTop: '120px', paddingBottom: '100px'}}>
<div style={{maxWidth: '1000px', margin: '0 auto', padding: '0 24px'}}>
<div className="fade-up" style={{textAlign: 'center', marginBottom: '64px'}}>
<p style={{color: 'var(--accent)', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Kontakt</p>
<h1 style={{fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', letterSpacing: '-0.04em', marginBottom: '16px'}}>Domluvte si konzultaci</h1>
<p style={{color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto', lineHeight: '1.7'}}>Úvodní schůzka je zdarma a nezávazná. Vyplňte formulář a ozvu se vám do 24 hodin.</p>
</div>
<div className="contact-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px'}}>
<div className="glass-card glow-green fade-up" style={{padding: '40px'}}>
<form id="contact-form" onsubmit="handleFormSubmit(event)">
<div style={{display: 'grid', gap: '20px'}}>
<div><label style={{fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px', display: 'block'}}>Jméno a příjmení *</label><input className="form-input" placeholder="Jan Novák" required="" type="text"/></div>
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}><div><label style={{fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px', display: 'block'}}>E-mail *</label><input className="form-input" placeholder="jan@email.cz" required="" type="email"/></div><div><label style={{fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px', display: 'block'}}>Telefon</label><input className="form-input" placeholder="+420 777 123 456" type="tel"/></div></div>
<div><label style={{fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '12px', display: 'block'}}>Co vás zajímá?</label><div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}><span className="tag-option" onclick="toggleTag(this)">Investice</span><span className="tag-option" onclick="toggleTag(this)">Pojištění</span><span className="tag-option" onclick="toggleTag(this)">Hypotéka</span><span className="tag-option" onclick="toggleTag(this)">Úvěry</span><span className="tag-option" onclick="toggleTag(this)">Finanční plán</span><span className="tag-option" onclick="toggleTag(this)">Revize smluv</span></div></div>
<div><label style={{fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px', display: 'block'}}>Preferovaný způsob schůzky</label><div style={{display: 'flex', gap: '16px'}}><label style={{display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', color: 'var(--text-secondary)'}}><input checked="" name="meeting" style={{accentColor: 'var(--accent)'}} type="radio" value="online"/> Online (video)</label><label style={{display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', color: 'var(--text-secondary)'}}><input name="meeting" style={{accentColor: 'var(--accent)'}} type="radio" value="osobne"/> Osobně</label><labelstyle="display: 14px;="" 8px;="" align-items:="" center;="" color:="" cursor:="" flex;="" font-size:="" gap:="" pointer;="" var(--text-secondary);"=""><input name="meeting" style={{accentColor: 'var(--accent)'}} type="radio" value="telefon"/> Telefon</labelstyle="display:></div></div>
<div><label style={{fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px', display: 'block'}}>Zpráva (nepovinné-input" placeholder="Popište stručně vaši situaci nebo otázky..."&gt;</label></div>
<div style={{display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
<div className="custom-checkbox" id="gdpr-checkbox" onclick="toggleCheckbox(this)"></div>
<label onclick="toggleCheckbox(document.getElementById('gdpr-checkbox'))" style={{fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6', cursor: 'pointer'}}>Souhlasím se zpracováním osobních údajů za účelem odpovědi na mou poptávku. Vaše data nebudou sdílena s třetími stranami.</label>
</div>
<button className="btn-primary" style={{width: '100%', justifyContent: 'center', fontSize: '15px'}} type="submit">
                                        Odeslat poptávku
                                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</form>
<div id="form-success" style={{display: 'none', textAlign: 'center', padding: '32px'}}>
<iconify-icon icon="solar:check-circle-linear" style={{color: 'var(--accent)', marginBottom: '16px', display: 'block'}} width="48"></iconify-icon>
<h3 style={{fontWeight: '600', fontSize: '20px', marginBottom: '12px'}}>Odesláno!</h3>
<p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7'}}>Děkuji za váš zájem. Ozvu se vám do 24 hodin na zadaný e-mail nebo telefon.</p>
</div>
</div>
<div className="fade-up fade-up-delay-1" style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
<div className="glass-card" style={{padding: '28px'}}>
<h3 style={{fontWeight: '600', fontSize: '16px', marginBottom: '20px', letterSpacing: '-0.02em'}}>Kontaktní údaje</h3>
<div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
<div style={{width: '36px', height: '36px', borderRadius: '10px', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
<iconify-icon icon="solar:phone-linear" style={{color: 'var(--accent)'}} width="18"></iconify-icon>
</div>
<div>
<p style={{fontSize: '12px', color: 'var(--text-muted)', marginBottom: '2px'}}>Telefon</p>
<p style={{fontSize: '14px', fontWeight: '500'}}>+420 777 123 456</p>
</div>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
<div style={{width: '36px', height: '36px', borderRadius: '10px', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
<iconify-icon icon="solar:letter-linear" style={{color: 'var(--accent)'}} width="18"></iconify-icon>
</div>
<div>
<p style={{fontSize: '12px', color: 'var(--text-muted)', marginBottom: '2px'}}>E-mail</p>
<p style={{fontSize: '14px', fontWeight: '500'}}>jan@kurdiovský.cz</p>
</div>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
<div style={{width: '36px', height: '36px', borderRadius: '10px', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
<iconify-icon icon="solar:map-point-linear" style={{color: 'var(--accent)'}} width="18"></iconify-icon>
</div>
<div>
<p style={{fontSize: '12px', color: 'var(--text-muted)', marginBottom: '2px'}}>Oblast působení</p>
<p style={{fontSize: '14px', fontWeight: '500'}}>Praha a okolí, online celá ČR</p>
</div>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
<div style={{width: '36px', height: '36px', borderRadius: '10px', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
<iconify-icon icon="solar:clock-circle-linear" style={{color: 'var(--accent)'}} width="18"></iconify-icon>
</div>
<div>
<p style={{fontSize: '12px', color: 'var(--text-muted)', marginBottom: '2px'}}>Dostupnost</p>
<p style={{fontSize: '14px', fontWeight: '500'}}>Po–Pá 9:00–18:00, dle dohody i mimo</p>
</div>
</div>
</div>
</div>
<div className="glass-card" style={{padding: '28px'}}>
<h3 style={{fontWeight: '600', fontSize: '16px', letterSpacing: '-0.02em'}}>Co vás čeká na první schůzce</h3>
<div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
<div style={{display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
<iconify-icon icon="solar:check-circle-linear" style={{color: 'var(--accent)', flexShrink: '0', marginTop: '2px'}} width="18"></iconify-icon>
<span style={{fontSize: '14px', color: 'var(--text-secondary)'}}>Analýza vaší aktuální finanční situace</span>
</div>
<div style={{display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
<iconify-icon icon="solar:check-circle-linear" style={{color: 'var(--accent)', flexShrink: '0', marginTop: '2px'}} width="18"></iconify-icon>
<span style={{fontSize: '14px', color: 'var(--text-secondary)'}}>Definice vašich cílů a priorit</span>
</div>
<div style={{display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
<iconify-icon icon="solar:check-circle-linear" style={{color: 'var(--accent)', flexShrink: '0', marginTop: '2px'}} width="18"></iconify-icon>
<span style={{fontSize: '14px', color: 'var(--text-secondary)'}}>Odpovědi na vaše otázky</span>
</div>
<div style={{display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
<iconify-icon icon="solar:check-circle-linear" style={{color: 'var(--accent)', flexShrink: '0', marginTop: '2px'}} width="18"></iconify-icon>
<span style={{fontSize: '14px', color: 'var(--text-secondary)'}}>Bez závazků a bez poplatků</span>
</div>
</div>
</div>
<div className="glass-card" style={{padding: '24px', border: '1px solid rgba(34, 197, 94, 0.2)', background: 'var(--accent-glow)'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px'}}>
<span className="pulse-dot"></span>
<p style={{fontWeight: '600', fontSize: '14px', color: 'var(--accent-light)'}}>Aktuálně přijímám nové klienty</p>
</div>
<p style={{fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6'}}>Nejbližší volný termín je zpravidla do 5 pracovních dní.</p>
</div>
</div>
</div>
</div>
</section>
</div>
</div>

<div className="floating-cta">
<a className="btn-primary" href="#" onclick="navigateTo('contact')" style={{width: '100%', justifyContent: 'center', fontSize: '14px'}}>
            Domluvit konzultaci zdarma
            <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="ticker-bar">
<div className="ticker-label">
<div className="ticker-label-live-dot"></div>
<span className="ticker-label-text">Trhy</span>
</div>
<div className="ticker-track-wrapper">
<div className="ticker-fade-left"></div>
<div className="ticker-track" id="ticker-track">

</div>
<div className="ticker-fade-right"></div>
</div>
</div>
<style>
        @media (max-width: 768px) {
            .contact-grid { grid-template-columns: 1fr !important; }
        }
    </style>


    </>
  );
}
