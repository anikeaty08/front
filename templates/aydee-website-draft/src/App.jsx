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



    // Init Lucide
    lucide.createIcons();

    // NAV SCROLL
    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    });

    // MOBILE MENU
    let menuOpen = false;
    function toggleMenu() {
      menuOpen = !menuOpen;
      const menu = document.getElementById('mobileMenu');
      menu.style.maxHeight = menuOpen ? '500px' : '0';
    }

    // INTERSECTION OBSERVER for fade-up
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    // OAK BRANCH SCROLL HIDE
    const oakBranch = document.getElementById('oakBranchHero');
    const heroSection = document.getElementById('heroSection');
    
    let oakHidden = false;
    window.addEventListener('scroll', () => {
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      const windowH = window.innerHeight;
      if (heroBottom < windowH * 0.6 && !oakHidden) {
        oakHidden = true;
        oakBranch.querySelector('img').classList.add('fading-out');
      } else if (heroBottom >= windowH * 0.6 && oakHidden) {
        oakHidden = false;
        const inner = oakBranch.querySelector('img');
        inner.classList.remove('fading-out');
        inner.style.animation = 'none';
        inner.offsetHeight; // reflow
        inner.style.animation = '';
      }
    });

    // HERO SLIDESHOW
    let currentSlide = 0;
    const totalSlides = 5;
    function goToSlide(index) {
      const slides = document.querySelectorAll('.hero-slide');
      const dots = document.querySelectorAll('.slide-dot');
      slides[currentSlide].classList.remove('active');
      dots[currentSlide].classList.remove('active');
      dots[currentSlide].style.background = 'rgba(250,247,242,0.4)';
      currentSlide = index;
      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
      dots[currentSlide].style.background = '#c9a96e';
    }
    setInterval(() => {
      goToSlide((currentSlide + 1) % totalSlides);
    }, 5000);

    // LANGUAGE TOGGLE
    let currentLang = 'en';
    function setLang(lang) {
      currentLang = lang;
      document.getElementById('langEn').classList.toggle('lang-active', lang === 'en');
      document.getElementById('langEs').classList.toggle('lang-active', lang === 'es');
      document.querySelectorAll('[data-en]').forEach(el => {
        const text = el.getAttribute('data-' + lang);
        if (text) el.textContent = text;
      });
      document.querySelectorAll('[data-placeholder-en]').forEach(el => {
        const ph = el.getAttribute('data-placeholder-' + lang);
        if (ph) el.placeholder = ph;
      });
      document.querySelectorAll('select option').forEach(opt => {
        const text = opt.getAttribute('data-' + lang);
        if (text) opt.textContent = text;
      });
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
      

<nav className="md:px-12 pt-3 pr-6 pb-3 pl-6" id="mainNav">
<div className="flex max-w-7xl mr-auto ml-auto items-center justify-between">

<a className="flex items-center gap-3" href="#">
<img alt="Aydee Home &amp; 5 Oak Logo" className="max-w-sm max-h-full object-contain px-20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec270cda-2a28-4765-a244-4280515cb2a0_800w.png"/>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="font-geist transition-colors text-xs tracking-widest uppercase font-medium" href="#about" onmouseout="this.style.color='#7a5520'" onmouseover="this.style.color='#3d2c1e'" style={{color: '#7a5520'}}>About</a>
<a className="font-geist transition-colors text-xs tracking-widest uppercase font-medium" href="#services" onmouseout="this.style.color='#7a5520'" onmouseover="this.style.color='#3d2c1e'" style={{color: '#7a5520'}}>Services</a>
<a className="font-geist transition-colors text-xs tracking-widest uppercase font-medium" href="#quality" onmouseout="this.style.color='#7a5520'" onmouseover="this.style.color='#3d2c1e'" style={{color: '#7a5520'}}>Why Us</a>
<a className="font-geist transition-colors text-xs tracking-widest uppercase font-medium" href="#stories" onmouseout="this.style.color='#7a5520'" onmouseover="this.style.color='#3d2c1e'" style={{color: '#7a5520'}}>Stories</a>
<a className="font-geist transition-colors text-xs tracking-widest uppercase font-medium" href="#contact" onmouseout="this.style.color='#7a5520'" onmouseover="this.style.color='#3d2c1e'" style={{color: '#7a5520'}}>Contact</a>
</div>

<div className="hidden md:flex items-center gap-5">
<div className="lang-toggle flex items-center gap-2 tracking-widest uppercase" style={{color: '#a08060'}}>
<button className="lang-active transition-colors font-geist hover:text-amber-800" id="langEn" onclick="setLang('en')">EN</button>
<span className="font-geist" style={{color: '#d4c4aa'}}>|</span>
<button className="transition-colors font-geist hover:text-amber-800" id="langEs" onclick="setLang('es')">ES</button>
</div>
<a className="btn-gold px-5 py-2.5 rounded-full text-xs font-geist" href="#contact">Get Started</a>
</div>

<button className="md:hidden transition-colors" id="menuBtn" onclick="toggleMenu()" style={{color: '#7a5520'}}>
<i data-lucide="menu" style={{width: '24px', height: '24px', strokeWidth: '1.5'}}></i>
</button>
</div>

<div className="mobile-menu md:hidden max-h-0 overflow-hidden" id="mobileMenu">
<div className="pt-4 pb-6 px-2 flex flex-col gap-4 border-t mt-4" style={{borderColor: 'rgba(160,114,42,0.15)'}}>
<a className="font-geist text-xs tracking-widest uppercase font-medium py-2" href="#about" onclick="toggleMenu()" style={{color: '#7a5520'}}>About</a>
<a className="font-geist text-xs tracking-widest uppercase font-medium py-2" href="#services" onclick="toggleMenu()" style={{color: '#7a5520'}}>Services</a>
<a className="font-geist text-xs tracking-widest uppercase font-medium py-2" href="#quality" onclick="toggleMenu()" style={{color: '#7a5520'}}>Why Us</a>
<a className="font-geist text-xs tracking-widest uppercase font-medium py-2" href="#stories" onclick="toggleMenu()" style={{color: '#7a5520'}}>Stories</a>
<a className="font-geist text-xs tracking-widest uppercase font-medium py-2" href="#contact" onclick="toggleMenu()" style={{color: '#7a5520'}}>Contact</a>
<div className="flex items-center gap-4 pt-2">
<div className="lang-toggle flex items-center gap-2 tracking-widest uppercase" style={{color: '#a08060'}}>
<button className="lang-active transition-colors font-geist" onclick="setLang('en')">EN</button>
<span className="font-geist" style={{color: '#d4c4aa'}}>|</span>
<button className="transition-colors font-geist" onclick="setLang('es')">ES</button>
</div>
<a className="btn-gold px-5 py-2.5 rounded-full text-xs font-geist" href="#contact">Get Started</a>
</div>
</div>
</div>
</nav>

<section className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden px-6" id="heroSection" style={{background: '#f5efe6'}}>

<div className="absolute inset-0 z-0" id="heroSlideshow">
<div className="hero-slide active" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&amp'}}></div>
<div className="hero-slide" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1800&amp'}}></div>
<div className="hero-slide" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1800&amp'}}></div>
<div className="hero-slide" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1800&amp'}}></div>
<div className="hero-slide" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1800&amp'}}></div>
<div className="hero-overlay"></div>
</div>

<div className="absolute z-10 pointer-events-none select-none" id="oakBranchHero" style={{right: '-2%', bottom: '2%', width: 'clamp(280px, 36vw, 520px)'}}>
<img alt="Golden Oak Branch" className="oak-branch-hero w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b3cf3e06-ae80-4091-8d66-8ddb17a1249c_800w.png"/>
</div>

<div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
<button className="slide-dot active w-2 h-2 rounded-full" id="dot0" onclick="goToSlide(0)" style={{background: '#c9a96e'}}></button>
<button className="slide-dot w-2 h-2 rounded-full" id="dot1" onclick="goToSlide(1)" style={{background: 'rgba(250,247,242,0.4)'}}></button>
<button className="slide-dot w-2 h-2 rounded-full" id="dot2" onclick="goToSlide(2)" style={{background: 'rgba(250,247,242,0.4)'}}></button>
<button className="slide-dot w-2 h-2 rounded-full" id="dot3" onclick="goToSlide(3)" style={{background: 'rgba(250,247,242,0.4)'}}></button>
<button className="slide-dot w-2 h-2 rounded-full" id="dot4" onclick="goToSlide(4)" style={{background: 'rgba(250,247,242,0.4)'}}></button>
</div>
<div className="relative z-10 max-w-4xl mx-auto">

<div className="fade-up flex items-center justify-center gap-3 mb-8 visible">
<div className="gold-divider"></div>
<span className="font-geist text-xs tracking-widest uppercase font-medium" data-en="Mortgage · Real Estate · Wealth Strategy" data-es="Hipoteca · Bienes Raíces · Estrategia Patrimonial" style={{color: '#faf7f2'}}>Mortgage · Real Estate · Wealth Strategy</span>
<div className="gold-divider"></div>
</div>

<h1 className="fade-up font-playfair text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-6 visible">
<span className="" data-en="Own More." data-es="Posee Más." style={{color: '#faf7f2'}}>Own More.</span><br/>
<span className="" data-en="Build Wealth." data-es="Construye Riqueza." style={{color: '#c9a96e'}}>Build Wealth.</span>
</h1>

<p className="fade-up font-geist text-sm md:text-base font-light tracking-wide max-w-xl mx-auto mb-4 leading-relaxed visible" data-en="Mortgage. Real Estate. Wealth Strategy — all under one roof." data-es="Hipoteca. Bienes Raíces. Estrategia Patrimonial — todo bajo un mismo techo." style={{color: 'rgba(250,247,242,0.92)'}}>
        Mortgage. Real Estate. Wealth Strategy — all under one roof.
      </p>
<p className="fade-up md:text-sm leading-relaxed text-xs font-light font-geist max-w-lg mr-auto mb-12 ml-auto visible" data-en="We help families finance, invest, and build lasting wealth through real estate — with clarity at every step." data-es="Ayudamos a familias a financiar, invertir y construir riqueza duradera a través de bienes raíces — con claridad en cada paso." style={{color: 'rgba(250,247,242,0.72)'}}>
        We help families finance, invest, and build lasting wealth through real estate — with clarity at every step.
      </p>

<div className="fade-up flex flex-col sm:flex-row gap-4 justify-center visible">
<button className="btn-gold px-8 py-4 rounded-full text-xs flex items-center justify-center gap-2.5 group">
<i data-lucide="play-circle" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
<span className="font-geist" data-en="Watch in English" data-es="Watch in English">Watch in English</span>
</button>
<button className="btn-outline px-8 py-4 rounded-full text-xs flex items-center justify-center gap-2.5" style={{borderColor: 'rgba(250, 247, 242, 0.5)', color: '#faf7f2', background: 'rgba(250,247,242,0.12)'}}>
<i data-lucide="play-circle" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
<span className="font-geist" data-en="Ver en Español" data-es="Ver en Español">Ver en Español</span>
</button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-bounce z-20">
<span className="font-geist text-xs tracking-widest uppercase" style={{color: 'rgba(250,247,242,0.6)'}}>Scroll</span>
<i data-lucide="chevron-down" style={{width: '16px', height: '16px', strokeWidth: '1.5', color: 'rgba(250,247,242,0.6)'}}></i>
</div>
</section>

<section className="py-28 px-6 relative overflow-hidden" id="about" style={{background: '#faf7f2'}}>
<div className="absolute top-0 right-0 opacity-5 pointer-events-none select-none translate-x-1/3 -translate-y-1/4">
<svg fill="none" height="560" viewbox="0 0 32 36" width="500">
<path d="M16 2C16 2 4 8 4 20C4 26.627 9.373 32 16 32C22.627 32 28 26.627 28 20C28 8 16 2 16 2Z" fill="#c9a96e"></path>
</svg>
</div>
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-20 items-center">

<div className="fade-up visible">
<div className="flex items-center gap-3 mb-6">
<div className="gold-divider"></div>
<span className="font-geist text-xs tracking-widest uppercase" data-en="Our Mission" data-es="Nuestra Misión" style={{color: '#a0722a'}}>Our Mission</span>
</div>
<h2 className="font-playfair text-4xl md:text-5xl tracking-tight leading-tight mb-6 font-medium" data-en="Real Estate Is the Path. We're Your Guide." data-es="Los Bienes Raíces Son el Camino. Nosotros Tu Guía." style={{color: '#3d2c1e'}}>
            Real Estate Is the Path.<br/><span className="" style={{color: '#a0722a'}}>We're Your Guide.</span>
</h2>
<p className="font-geist text-sm leading-relaxed mb-6 font-light" data-en="We connect families and investors with smart lending solutions that create real, lasting wealth. No jargon — just clear guidance, modern service, and results you can build on." data-es="Conectamos a familias e inversores con soluciones de préstamo inteligentes que crean riqueza real y duradera. Sin tecnicismos — solo orientación clara, servicio moderno y resultados sobre los cuales construir." style={{color: '#6b4f38'}}>
            We connect families and investors with smart lending solutions that create real, lasting wealth. No jargon — just clear guidance, modern service, and results you can build on.
          </p>
<p className="font-geist text-xs font-light italic mb-10" data-en="First home or fifth investment — we're with you at every step." data-es="Primera casa o quinta inversión — estamos contigo en cada paso." style={{color: '#a08060'}}>
            First home or fifth investment — we're with you at every step.
          </p>
<a className="btn-gold px-7 py-3.5 rounded-full text-xs inline-flex items-center gap-2 font-geist" data-en="Contact Us" data-es="Contáctenos" href="#contact">
            Contact Us
            <i data-lucide="arrow-right" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</a>
</div>

<div className="fade-up flex flex-col gap-4 visible">
<div className="diff-item flex items-start gap-5 p-6 rounded-2xl border" style={{background: '#fff9f3', borderColor: 'rgba(160,114,42,0.14)'}}>
<div className="mt-0.5 transition-colors duration-300" style={{color: '#c9a96e'}}>
<i data-lucide="users" style={{width: '22px', height: '22px', strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="font-playfair text-base mb-1" data-en="Community First" data-es="Comunidad Primero" style={{color: '#3d2c1e'}}>Community First</div>
<div className="font-geist text-xs leading-relaxed font-light" data-en="We grow when you grow. Your success is our mission." data-es="Crecemos cuando tú creces. Tu éxito es nuestra misión." style={{color: '#8b6347'}}>We grow when you grow. Your success is our mission.</div>
</div>
</div>
<div className="diff-item flex items-start gap-5 p-6 rounded-2xl border" style={{background: '#fff9f3', borderColor: 'rgba(160,114,42,0.14)'}}>
<div className="mt-0.5 transition-colors duration-300" style={{color: '#c9a96e'}}>
<i data-lucide="message-circle-check" style={{width: '22px', height: '22px', strokeWidth: '1.5'}}></i>
</div>
<div className="">
<div className="font-playfair text-base mb-1" data-en="No Confusion" data-es="Sin Confusión" style={{color: '#3d2c1e'}}>No Confusion</div>
<div className="font-geist text-xs leading-relaxed font-light" data-en="Clear answers, every time. We speak plain language." data-es="Respuestas claras, siempre. Hablamos en lenguaje sencillo." style={{color: '#8b6347'}}>Clear answers, every time. We speak plain language.</div>
</div>
</div>
<div className="diff-item flex items-start gap-5 p-6 rounded-2xl border" style={{background: '#fff9f3', borderColor: 'rgba(160,114,42,0.14)'}}>
<div className="mt-0.5 transition-colors duration-300" style={{color: '#c9a96e'}}>
<i data-lucide="sparkles" style={{width: '22px', height: '22px', strokeWidth: '1.5'}}></i>
</div>
<div className="">
<div className="font-playfair text-base mb-1" data-en="Modern Experience" data-es="Experiencia Moderna" style={{color: '#3d2c1e'}}>Modern Experience</div>
<div className="font-geist text-xs leading-relaxed font-light" data-en="Elegant process, real human support at every stage." data-es="Proceso elegante, soporte humano real en cada etapa." style={{color: '#8b6347'}}>Elegant process, real human support at every stage.</div>
</div>
</div>
<div className="diff-item flex items-start gap-5 p-6 rounded-2xl border" style={{background: '#fff9f3', borderColor: 'rgba(160,114,42,0.14)'}}>
<div className="mt-0.5 transition-colors duration-300" style={{color: '#c9a96e'}}>
<i data-lucide="globe" style={{width: '22px', height: '22px', strokeWidth: '1.5'}}></i>
</div>
<div className="">
<div className="font-playfair text-base mb-1" data-en="Bilingual" data-es="Bilingüe" style={{color: '#3d2c1e'}}>Bilingual</div>
<div className="font-geist text-xs leading-relaxed font-light" data-en="English &amp; Spanish, seamlessly. We communicate your way." data-es="Inglés y español, perfectamente. Nos comunicamos a tu manera." style={{color: '#8b6347'}}>English &amp; Spanish, seamlessly. We communicate your way.</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-28 px-6 relative overflow-hidden" id="services" style={{background: '#f5efe6'}}>
<div className="max-w-7xl mx-auto">

<div className="text-center mb-6 fade-up">
<div className="flex items-center justify-center gap-3 mb-6">
<div className="gold-divider"></div>
<span className="font-geist text-xs tracking-widest uppercase" data-en="Services" data-es="Servicios" style={{color: '#a0722a'}}>Services</span>
<div className="gold-divider"></div>
</div>
<h2 className="font-playfair text-4xl md:text-5xl tracking-tight mb-4 font-medium" data-en="One Team. Every Step of Your Journey." data-es="Un Equipo. Cada Paso de Tu Camino." style={{color: '#3d2c1e'}}>
          One Team. Every Step of<br/><span style={{color: '#a0722a'}}>Your Journey.</span>
</h2>
<p className="font-geist text-sm font-light max-w-lg mx-auto" data-en="We handle the complexity. You focus on the future." data-es="Manejamos la complejidad. Tú enfócate en el futuro." style={{color: '#8b6347'}}>
          We handle the complexity. You focus on the future.
        </p>
</div>

<div className="grid md:grid-cols-3 gap-6 mt-16">

<div className="service-card fade-up border rounded-3xl p-8 flex flex-col group" style={{background: '#faf7f2', borderColor: 'rgba(160,114,42,0.15)'}}>
<div className="w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 transition-colors duration-300" style={{background: '#fff9f3', borderColor: 'rgba(160,114,42,0.2)'}}>
<i data-lucide="home" style={{width: '22px', height: '22px', strokeWidth: '1.5', color: '#a0722a'}}></i>
</div>
<div className="font-playfair text-xl mb-2 tracking-tight font-medium" data-en="Mortgage &amp; Financing" data-es="Hipoteca y Financiamiento" style={{color: '#3d2c1e'}}>Mortgage &amp; Financing</div>
<div className="font-geist text-xs font-medium mb-4 tracking-wide" data-en="Smart financing for every goal" data-es="Financiamiento inteligente para cada meta" style={{color: '#c9a96e'}}>Smart financing for every goal</div>
<p className="font-geist text-xs leading-relaxed font-light flex-1 mb-8" data-en="FHA, VA, ITIN, conforming and non-conforming — we match you with the right loan for your unique situation." data-es="FHA, VA, ITIN, conformes y no conformes — te emparejamos con el préstamo correcto para tu situación única." style={{color: '#8b6347'}}>
            FHA, VA, ITIN, conforming and non-conforming — we match you with the right loan for your unique situation.
          </p>
<a className="btn-outline px-5 py-2.5 rounded-full text-xs inline-flex items-center gap-2 self-start font-geist" data-en="View Financing Options" data-es="Ver Opciones de Financiamiento" href="#contact">
            View Financing Options
            <i data-lucide="arrow-right" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
</a>
</div>

<div className="service-card fade-up rounded-3xl p-8 flex flex-col relative overflow-hidden" style={{background: 'linear-gradient(145deg, #2c1a08 0%, #3d2410 50%, #2c1a08 100%)', border: '1px solid rgba(201,169,110,0.3)'}}>
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 70% 20%,#c9a96e 0%,transparent 60%)'}}></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{background: 'rgba(201, 169, 110, 0.18)', border: '1px solid rgba(201,169,110,0.35)'}}>
<i data-lucide="building-2" style={{width: '22px', height: '22px', strokeWidth: '1.5', color: '#c9a96e'}}></i>
</div>
<div className="font-playfair text-xl mb-2 tracking-tight font-medium" data-en="Real Estate" data-es="Bienes Raíces" style={{color: '#faf7f2'}}>Real Estate</div>
<div className="font-geist text-xs font-medium mb-4 tracking-wide" data-en="Buy smart. Sell strategically." data-es="Compra inteligente. Vende estratégicamente." style={{color: '#c9a96e'}}>Buy smart. Sell strategically.</div>
<p className="font-geist leading-relaxed flex-1 text-xs font-light mb-8" data-en="Expert guidance from first showing to final signature. We navigate every detail so you don't have to." data-es="Orientación experta desde la primera visita hasta la firma final. Navegamos cada detalle para que tú no tengas que hacerlo." style={{color: 'rgba(250,247,242,0.75)'}}>
              Expert guidance from first showing to final signature. We navigate every detail so you don't have to.
            </p>
<a className="btn-gold px-5 py-2.5 rounded-full text-xs inline-flex items-center gap-2 self-start font-geist" data-en="Start Your Search" data-es="Comienza Tu Búsqueda" href="#contact">
              Start Your Search
              <i data-lucide="arrow-right" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
</a>
</div>
</div>

<div className="service-card fade-up flex flex-col group border rounded-3xl p-8" style={{background: '#faf7f2', borderColor: 'rgba(160,114,42,0.15)'}}>
<div className="w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 transition-colors duration-300" style={{background: '#fff9f3', borderColor: 'rgba(160,114,42,0.2)'}}>
<i data-lucide="calculator" style={{width: '22px', height: '22px', strokeWidth: '1.5', color: '#a0722a'}}></i>
</div>
<div className="text-xl font-medium tracking-tight font-playfair mb-2" data-en="Mortgage Calculator" data-es="Calculadora Hipotecaria" style={{color: '#3d2c1e'}}>Mortgage Calculator</div>
<div className="font-geist text-xs font-medium mb-4 tracking-wide" data-en="Know your numbers." data-es="Conoce tus números." style={{color: '#c9a96e'}}>Know your numbers.</div>
<p className="font-geist text-xs leading-relaxed font-light flex-1 mb-8" data-en="Plan your move with confidence before you commit. Estimate payments, compare scenarios, understand your options." data-es="Planifica tu movimiento con confianza antes de comprometerte. Estima pagos, compara escenarios, entiende tus opciones." style={{color: '#8b6347'}}>
            Plan your move with confidence before you commit. Estimate payments, compare scenarios, understand your options.
          </p>
<a className="btn-outline px-5 py-2.5 rounded-full text-xs inline-flex items-center gap-2 self-start font-geist" data-en="Calculate Now" data-es="Calcular Ahora" href="#contact">
            Calculate Now
            <i data-lucide="arrow-right" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>
</section>

<section className="quality-bg pt-28 pr-6 pb-28 pl-6 relative" id="quality" style={{background: '#faf7f2'}}>
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 fade-up gap-x-16 gap-y-16 items-center">

<div className="">
<div className="flex items-center gap-3 mb-6">
<div className="gold-divider"></div>
<span className="font-geist text-xs tracking-widest uppercase" data-en="The Standard" data-es="El Estándar" style={{color: '#a0722a'}}>The Standard</span>
</div>
<h2 className="font-playfair text-4xl md:text-5xl tracking-tight leading-tight mb-10 font-medium" data-en="The Standard You Deserve." data-es="El Estándar Que Mereces." style={{color: '#3d2c1e'}}>
            The Standard<br/><span className="" style={{color: '#a0722a'}}>You Deserve.</span>
</h2>
<div className="flex flex-col gap-5">
<div className="quality-bullet flex items-center gap-5 group">
<div className="w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors duration-300" style={{borderColor: 'rgba(160,114,42,0.3)', background: '#fff9f3'}}>
<i data-lucide="zap" style={{width: '14px', height: '14px', strokeWidth: '1.5', color: '#a0722a'}}></i>
</div>
<span className="font-geist text-sm font-light" data-en="Fast, clear answers — no waiting, no confusion." data-es="Respuestas rápidas y claras — sin esperas, sin confusión." style={{color: '#6b4f38'}}>Fast, clear answers — no waiting, no confusion.</span>
</div>
<div className="quality-bullet flex items-center gap-5 group">
<div className="w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors duration-300" style={{borderColor: 'rgba(160,114,42,0.3)', background: '#fff9f3'}}>
<i data-lucide="route" style={{width: '14px', height: '14px', strokeWidth: '1.5', color: '#a0722a'}}></i>
</div>
<span className="font-geist text-sm font-light" data-en="Guidance from start to close." data-es="Orientación desde el inicio hasta el cierre." style={{color: '#6b4f38'}}>Guidance from start to close.</span>
</div>
<div className="quality-bullet flex items-center gap-5 group">
<div className="w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors duration-300" style={{borderColor: 'rgba(160,114,42,0.3)', background: '#fff9f3'}}>
<i data-lucide="heart" style={{width: '14px', height: '14px', strokeWidth: '1.5', color: '#a0722a'}}></i>
</div>
<span className="font-geist text-sm font-light" data-en="Community-first, always." data-es="Comunidad primero, siempre." style={{color: '#6b4f38'}}>Community-first, always.</span>
</div>
<div className="quality-bullet flex items-center gap-5 group">
<div className="w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors duration-300" style={{borderColor: 'rgba(160,114,42,0.3)', background: '#fff9f3'}}>
<i data-lucide="shield-check" style={{width: '14px', height: '14px', strokeWidth: '1.5', color: '#a0722a'}}></i>
</div>
<span className="font-geist text-sm font-light" data-en="Solutions for every financial situation." data-es="Soluciones para cada situación financiera." style={{color: '#6b4f38'}}>Solutions for every financial situation.</span>
</div>
<div className="quality-bullet flex items-center gap-5 group">
<div className="w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors duration-300" style={{borderColor: 'rgba(160,114,42,0.3)', background: '#fff9f3'}}>
<i data-lucide="handshake" style={{width: '14px', height: '14px', strokeWidth: '1.5', color: '#a0722a'}}></i>
</div>
<span className="font-geist text-sm font-light" data-en="No pressure. Just real help." data-es="Sin presión. Solo ayuda real." style={{color: '#6b4f38'}}>No pressure. Just real help.</span>
</div>
</div>
</div>

<div className="flex justify-center md:justify-end">
<img alt="Aydee Short at 5 Oaks Legacy Group" className="opacity-95 w-full max-w-sm object-contain drop-shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4a7ed4ac-e975-41c1-86f0-f410257334cd_800w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-28 px-6" id="stories" style={{background: '#f5efe6'}}>
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 fade-up">
<div className="flex items-center justify-center gap-3 mb-6">
<div className="gold-divider"></div>
<span className="font-geist text-xs tracking-widest uppercase" data-en="Community Stories" data-es="Historias de la Comunidad" style={{color: '#a0722a'}}>Community Stories</span>
<div className="gold-divider"></div>
</div>
<h2 className="font-playfair text-4xl md:text-5xl tracking-tight mb-4 font-medium" data-en="Real Families. Real Results." data-es="Familias Reales. Resultados Reales." style={{color: '#3d2c1e'}}>
          Real Families.<br/><span style={{color: '#a0722a'}}>Real Results.</span>
</h2>
<div className="flex items-center justify-center gap-2 mt-4">
<i data-lucide="heart" style={{width: '14px', height: '14px', strokeWidth: '1.5', color: '#c9a96e'}}></i>
<p className="font-geist text-xs font-light" data-en="Every closing gives back. We donate to charity with every home sold." data-es="Cada cierre devuelve. Donamos a caridad con cada casa vendida." style={{color: '#8b6347'}}>
            Every closing gives back. We donate to charity with every home sold.
          </p>
</div>
</div>

<div className="grid md:grid-cols-3 gap-6">

<div className="test-card fade-up border rounded-3xl overflow-hidden" style={{background: '#faf7f2', borderColor: 'rgba(160,114,42,0.15)'}}>
<div className="relative h-48 overflow-hidden" style={{backgroundImage: 'linear-gradient(135deg,rgba(201,169,110,0.2) 0%,rgba(61,44,30,0.7) 100%), url(\'https: //images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}>
<div className="absolute inset-0 flex items-center justify-center">
<button className="w-14 h-14 rounded-full border backdrop-blur-sm flex items-center justify-center transition-colors duration-300" style={{borderColor: 'rgba(201, 169, 110, 0.5)', background: 'rgba(250,247,242,0.25)'}}>
<i data-lucide="play" style={{width: '20px', height: '20px', strokeWidth: '1.5', color: '#faf7f2'}}></i>
</button>
</div>
<div className="absolute bottom-4 left-4 flex gap-0.5">
<span style={{color: '#c9a96e', fontSize: '12px'}}>★★★★★</span>
</div>
</div>
<div className="p-6">
<p className="font-geist text-xs leading-relaxed font-light mb-4 italic" data-en="&quot;They made buying our first home simple and stress-free. We didn't understand the process at all — they walked us through every single step.&quot;" data-es='"Hicieron que comprar nuestra primera casa fuera simple y sin estrés."' style={{color: '#6b4f38'}}>
              "They made buying our first home simple and stress-free. We didn't understand the process at all — they walked us through every single step."
            </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center" style={{background: 'rgba(201,169,110,0.2)'}}>
<span className="font-playfair text-sm" style={{color: '#a0722a'}}>M</span>
</div>
<div>
<div className="font-geist text-xs font-medium" style={{color: '#3d2c1e'}}>Maria &amp; Carlos R.</div>
<div className="font-geist text-xs" data-en="First-time homebuyers" data-es="Compradores por primera vez" style={{color: '#a08060'}}>First-time homebuyers</div>
</div>
</div>
</div>
</div>

<div className="test-card fade-up border rounded-3xl overflow-hidden" style={{background: '#faf7f2', borderColor: 'rgba(160,114,42,0.15)'}}>
<div className="relative h-48 overflow-hidden" style={{backgroundImage: 'linear-gradient(135deg,rgba(201,169,110,0.15) 0%,rgba(61,44,30,0.7) 100%), url(\'https: //images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}>
<div className="absolute inset-0 flex items-center justify-center">
<button className="w-14 h-14 rounded-full border backdrop-blur-sm flex items-center justify-center transition-colors duration-300" style={{borderColor: 'rgba(201, 169, 110, 0.5)', background: 'rgba(250,247,242,0.25)'}}>
<i data-lucide="play" style={{width: '20px', height: '20px', strokeWidth: '1.5', color: '#faf7f2'}}></i>
</button>
</div>
<div className="absolute bottom-4 left-4">
<span style={{color: '#c9a96e', fontSize: '12px'}}>★★★★★</span>
</div>
</div>
<div className="p-6">
<p className="font-geist text-xs leading-relaxed font-light mb-4 italic" style={{color: '#6b4f38'}}>
              "We used our ITIN to qualify — something we thought was impossible. Now we own two properties and are building real wealth."
            </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center" style={{background: 'rgba(201,169,110,0.2)'}}>
<span className="font-playfair text-sm" style={{color: '#a0722a'}}>J</span>
</div>
<div>
<div className="font-geist text-xs font-medium" style={{color: '#3d2c1e'}}>Jorge M.</div>
<div className="font-geist text-xs" data-en="Real estate investor" data-es="Inversor inmobiliario" style={{color: '#a08060'}}>Real estate investor</div>
</div>
</div>
</div>
</div>

<div className="test-card fade-up border rounded-3xl overflow-hidden" style={{background: '#faf7f2', borderColor: 'rgba(160,114,42,0.15)'}}>
<div className="relative h-48 overflow-hidden" style={{backgroundImage: 'linear-gradient(135deg,rgba(201,169,110,0.15) 0%,rgba(61,44,30,0.7) 100%), url(\'https: //images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}>
<div className="absolute inset-0 flex items-center justify-center">
<button className="w-14 h-14 rounded-full border backdrop-blur-sm flex items-center justify-center transition-colors duration-300" style={{borderColor: 'rgba(201, 169, 110, 0.5)', background: 'rgba(250,247,242,0.25)'}}>
<i data-lucide="play" style={{width: '20px', height: '20px', strokeWidth: '1.5', color: '#faf7f2'}}></i>
</button>
</div>
<div className="absolute bottom-4 left-4">
<span style={{color: '#c9a96e', fontSize: '12px'}}>★★★★★</span>
</div>
</div>
<div className="p-6">
<p className="font-geist text-xs leading-relaxed font-light mb-4 italic" style={{color: '#6b4f38'}}>
              "The bilingual support was everything. We felt heard, understood, and respected throughout the entire process."
            </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center" style={{background: 'rgba(201,169,110,0.2)'}}>
<span className="font-playfair text-sm" style={{color: '#a0722a'}}>A</span>
</div>
<div>
<div className="font-geist text-xs font-medium" style={{color: '#3d2c1e'}}>Ana &amp; David L.</div>
<div className="font-geist text-xs" data-en="Refinance clients" data-es="Clientes de refinanciamiento" style={{color: '#a08060'}}>Refinance clients</div>
</div>
</div>
</div>
</div>
</div>

</div>
</section>

<section className="py-28 px-6" id="contact" style={{background: '#faf7f2'}}>
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-20">

<div className="fade-up">
<div className="flex items-center gap-3 mb-6">
<div className="gold-divider"></div>
<span className="font-geist text-xs tracking-widest uppercase" data-en="Get In Touch" data-es="Contáctanos" style={{color: '#a0722a'}}>Get In Touch</span>
</div>
<h2 className="font-playfair text-4xl md:text-5xl tracking-tight leading-tight mb-6 font-medium" data-en="Your Next Chapter Starts Here." data-es="Tu Próximo Capítulo Comienza Aquí." style={{color: '#3d2c1e'}}>
            Your Next Chapter<br/><span className="" style={{color: '#a0722a'}}>Starts Here.</span>
</h2>
<p className="font-geist text-sm font-light leading-relaxed mb-10" data-en="One form. Every expert. Whether you're buying, investing, or refinancing — we respond fast." data-es="Un formulario. Cada experto. Ya sea que estés comprando, invirtiendo o refinanciando — respondemos rápido." style={{color: '#6b4f38'}}>
            One form. Every expert. Whether you're buying, investing, or refinancing — we respond fast.
          </p>
<div className="flex flex-col gap-5">
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-xl border flex items-center justify-center transition-colors duration-300" style={{background: '#fff9f3', borderColor: 'rgba(160,114,42,0.2)'}}>
<i data-lucide="phone" style={{width: '16px', height: '16px', strokeWidth: '1.5', color: '#a0722a'}}></i>
</div>
<div className="">
<div className="font-geist text-xs mb-0.5" data-en="Phone" data-es="Teléfono" style={{color: '#a08060'}}>Phone</div>
<div className="font-geist text-sm font-light" style={{color: '#3d2c1e'}}>(555) 000-0000</div>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-xl border flex items-center justify-center transition-colors duration-300" style={{background: '#fff9f3', borderColor: 'rgba(160,114,42,0.2)'}}>
<i data-lucide="mail" style={{width: '16px', height: '16px', strokeWidth: '1.5', color: '#a0722a'}}></i>
</div>
<div className="">
<div className="font-geist text-xs mb-0.5" style={{color: '#a08060'}}>Email</div>
<div className="font-geist text-sm font-light" style={{color: '#3d2c1e'}}>hello@aydeehome.com</div>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-xl border flex items-center justify-center transition-colors duration-300" style={{background: '#fff9f3', borderColor: 'rgba(160,114,42,0.2)'}}>
<i data-lucide="map-pin" style={{width: '16px', height: '16px', strokeWidth: '1.5', color: '#a0722a'}}></i>
</div>
<div className="">
<div className="font-geist text-xs mb-0.5" data-en="Location" data-es="Ubicación" style={{color: '#a08060'}}>Location</div>
<div className="font-geist text-sm font-light" data-en="Serving families nationwide" data-es="Sirviendo a familias en todo el país" style={{color: '#3d2c1e'}}>Serving families nationwide</div>
</div>
</div>
</div>
<div className="flex flex-wrap gap-2 mt-10">
<span className="font-geist text-xs px-3 py-1.5 rounded-full border font-light" data-en="Community First" data-es="Comunidad Primero" style={{color: '#7a5520', borderColor: 'rgba(160,114,42,0.25)', background: '#fff9f3'}}>Community First</span>
<span className="font-geist text-xs px-3 py-1.5 rounded-full border font-light" data-en="Clear Guidance" data-es="Guía Clara" style={{color: '#7a5520', borderColor: 'rgba(160,114,42,0.25)', background: '#fff9f3'}}>Clear Guidance</span>
<span className="font-geist text-xs px-3 py-1.5 rounded-full border font-light" data-en="Bilingual Support" data-es="Apoyo Bilingüe" style={{color: '#7a5520', borderColor: 'rgba(160,114,42,0.25)', background: '#fff9f3'}}>Bilingual Support</span>
<span className="font-geist text-xs px-3 py-1.5 rounded-full border font-light" data-en="No Pressure" data-es="Sin Presión" style={{color: '#7a5520', borderColor: 'rgba(160,114,42,0.25)', background: '#fff9f3'}}>No Pressure</span>
</div>
</div>

<div className="fade-up h-full min-h-[500px]">
<div className="w-full h-full rounded-3xl overflow-hidden border" style={{background: '#fff', borderColor: 'rgba(160,114,42,0.15)'}}>
<div className="ep-iFrameContainer" id="inline-BMYdh5TDOrummpRDsW0o-div" style={{borderRadius: '3px', display: 'block'}}><div className="ep-wrapper" id="inline-BMYdh5TDOrummpRDsW0o-wrapper" style={{borderRadius: '3px'}}><iframe data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-id="BMYdh5TDOrummpRDsW0o" data-form-name="Website Form" data-height="457" data-iframe-resizer-initialized="true" data-initial-iframe-hidden="true" data-layout="{'id':'INLINE'}" data-layout-iframe-id="inline-BMYdh5TDOrummpRDsW0o" data-trigger-type="alwaysShow" data-trigger-value="" data-unique-id-mapped="true" id="inline-BMYdh5TDOrummpRDsW0o" scrolling="yes" src="https://api.leadconnectorhq.com/widget/form/BMYdh5TDOrummpRDsW0o" style={{width: '100%', height: '100%', border: 'none', borderRadius: '3px', pointerEvents: 'none', overflow: 'auto', display: 'none'}} title="Website Form"></iframe></div></div>

</div>
</div>
</div>
</div>
</section>

<footer className="border-t pt-16 pr-6 pb-16 pl-6" style={{background: '#faf7f2', borderColor: 'rgba(160,114,42,0.12)'}}>
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-4 gap-12 mb-12">

<div className="md:col-span-2">
<div className="flex gap-3 mb-4 gap-x-3 gap-y-3 items-center">
<img alt="Aydee Home &amp; 5 Oak Logo" className="w-30 max-w-xs max-h-fit object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec270cda-2a28-4765-a244-4280515cb2a0_800w.png"/>
</div>
<p className="font-geist text-xs font-light leading-relaxed max-w-xs mb-6" data-en="Helping families finance, invest, and build lasting wealth through real estate — with clarity at every step." data-es="Ayudando a familias a financiar, invertir y construir riqueza duradera a través de bienes raíces." style={{color: '#a08060'}}>
            Helping families finance, invest, and build lasting wealth through real estate — with clarity at every step.
          </p>
<div className="flex gap-3">
<a className="w-9 h-9 rounded-xl border flex items-center justify-center transition-colors duration-300" href="#" style={{background: '#fff9f3', borderColor: 'rgba(160,114,42,0.2)'}}>
<i data-lucide="instagram" style={{width: '16px', height: '16px', strokeWidth: '1.5', color: '#a08060'}}></i>
</a>
<a className="w-9 h-9 rounded-xl border flex items-center justify-center transition-colors duration-300" href="#" style={{background: '#fff9f3', borderColor: 'rgba(160,114,42,0.2)'}}>
<i data-lucide="facebook" style={{width: '16px', height: '16px', strokeWidth: '1.5', color: '#a08060'}}></i>
</a>
<a className="w-9 h-9 rounded-xl border flex items-center justify-center transition-colors duration-300" href="#" style={{background: '#fff9f3', borderColor: 'rgba(160,114,42,0.2)'}}>
<i data-lucide="linkedin" style={{width: '16px', height: '16px', strokeWidth: '1.5', color: '#a08060'}}></i>
</a>
</div>
</div>
<div className="">
<div className="font-geist text-xs tracking-widest uppercase font-medium mb-5" data-en="Services" data-es="Servicios" style={{color: '#7a5520'}}>Services</div>
<div className="flex flex-col gap-3">
<a className="font-geist text-xs font-light transition-colors" data-en="Mortgage &amp; Financing" data-es="Hipoteca y Financiamiento" href="#services" onmouseout="this.style.color='#a08060'" onmouseover="this.style.color='#7a5520'" style={{color: '#a08060'}}>Mortgage &amp; Financing</a>
<a className="font-geist text-xs font-light transition-colors" data-en="Real Estate" data-es="Bienes Raíces" href="#services" onmouseout="this.style.color='#a08060'" onmouseover="this.style.color='#7a5520'" style={{color: '#a08060'}}>Real Estate</a>
<a className="font-geist text-xs font-light transition-colors" data-en="FHA &amp; VA Loans" data-es="Préstamos FHA &amp; VA" href="#services" onmouseout="this.style.color='#a08060'" onmouseover="this.style.color='#7a5520'" style={{color: '#a08060'}}>FHA &amp; VA Loans</a>
<a className="font-geist text-xs font-light transition-colors" data-en="ITIN Programs" data-es="Programas ITIN" href="#services" onmouseout="this.style.color='#a08060'" onmouseover="this.style.color='#7a5520'" style={{color: 'rgb(160, 128, 96)'}}>ITIN Programs</a>
<a className="font-geist text-xs font-light transition-colors" data-en="Wealth Strategy" data-es="Estrategia Patrimonial" href="#services" onmouseout="this.style.color='#a08060'" onmouseover="this.style.color='#7a5520'" style={{color: '#a08060'}}>Wealth Strategy</a>
</div>
</div>
<div className="">
<div className="font-geist text-xs tracking-widest uppercase font-medium mb-5" data-en="Company" data-es="Empresa" style={{color: '#7a5520'}}>Company</div>
<div className="flex flex-col gap-3">
<a className="font-geist text-xs font-light transition-colors" data-en="About Us" data-es="Nosotros" href="#about" onmouseout="this.style.color='#a08060'" onmouseover="this.style.color='#7a5520'" style={{color: '#a08060'}}>About Us</a>
<a className="font-geist text-xs font-light transition-colors" data-en="Community Stories" data-es="Historias" href="#stories" onmouseout="this.style.color='#a08060'" onmouseover="this.style.color='#7a5520'" style={{color: '#a08060'}}>Community Stories</a>
<a className="font-geist text-xs font-light transition-colors" data-en="Contact" data-es="Contacto" href="#contact" onmouseout="this.style.color='#a08060'" onmouseover="this.style.color='#7a5520'" style={{color: '#a08060'}}>Contact</a>
<a className="font-geist text-xs font-light transition-colors" data-en="Privacy Policy" data-es="Política de Privacidad" href="#" onmouseout="this.style.color='#a08060'" onmouseover="this.style.color='#7a5520'" style={{color: '#a08060'}}>Privacy Policy</a>
<a className="font-geist text-xs font-light transition-colors" data-en="Terms of Service" data-es="Términos de Servicio" href="#" onmouseout="this.style.color='#a08060'" onmouseover="this.style.color='#7a5520'" style={{color: '#a08060'}}>Terms of Service</a>
</div>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{borderColor: 'rgba(160,114,42,0.12)'}}>
<p className="font-geist text-xs font-light" data-en="© 2026 Aydee Home 5 Oak. All Rights Reserved." data-es="© 2026 Aydee Home 5 Oak. All Rights Reserved." style={{color: '#c4aa88'}}>
          © 2026 Aydee Home 5 Oak. All Rights Reserved.
        </p>
<div className="flex items-center gap-2 text-xs font-light" style={{color: '#c4aa88'}}>
<i data-lucide="heart" style={{width: '12px', height: '12px', strokeWidth: '1.5', color: '#c9a96e'}}></i>
<span className="font-geist" data-en="Building wealth, building community." data-es="Construyendo riqueza, construyendo comunidad.">Building wealth, building community.</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
