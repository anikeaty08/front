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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



function navigate(page){
  document.querySelectorAll('.page').forEach(function(p){p.classList.remove('active')});
  var t=document.getElementById('page-'+page);
  if(t)t.classList.add('active');
  document.querySelectorAll('[data-page]').forEach(function(l){
    l.classList.toggle('active', l.getAttribute('data-page')===page);
  });
  window.scrollTo(0,0);
  initFadeIns();
}
function toggleMenu(){
  var m=document.getElementById('mobile-menu');
  var o=document.getElementById('burger-open');
  var c=document.getElementById('burger-close');
  var isOpen=m.classList.toggle('open');
  o.style.display=isOpen?'none':'block';
  c.style.display=isOpen?'block':'none';
}
function openModal(){document.getElementById('modal').classList.add('open')}
function closeModal(){document.getElementById('modal').classList.remove('open')}
document.getElementById('modal').addEventListener('click',function(e){if(e.target===this)closeModal()});
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeModal()});
function initFadeIns(){
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}});
  },{threshold:0.1});
  document.querySelectorAll('.page.active .fade-in:not(.visible)').forEach(function(el){obs.observe(el)});
}
document.querySelectorAll('[data-page="home"]').forEach(function(l){l.classList.add('active')});
initFadeIns();

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
      
<div className="app-bg-glow"></div>
<nav className="nav translate-y-1 scale-100" style={{maskImage: 'linear-gradient(360deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(360deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="nav-inner">
<a className="nav-logo" onclick="navigate('home')"><svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg> WaveSite.pl</a>
<div className="nav-links">
<a className="nav-link active" data-page="home" onclick="navigate('home')">Strona Główna</a>
<a className="nav-link" data-page="uslugi" onclick="navigate('uslugi')">Usługi</a>
<a className="nav-link" data-page="proces" onclick="navigate('proces')">Proces</a>
<a className="nav-link" data-page="cennik" onclick="navigate('cennik')">Cennik</a>
</div>
<a className="nav-cta translate-x-1" onclick="navigate('kontakt')">Rozpocznij projekt</a>
<button className="nav-burger" onclick="toggleMenu()">
<svg fill="none" height="24" id="burger-open" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
<svg fill="none" height="24" id="burger-close" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{display: 'none'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="mobile-menu" id="mobile-menu">
<a className="active" data-page="home" onclick="navigate('home');toggleMenu()">Strona Główna</a>
<a data-page="uslugi" onclick="navigate('uslugi');toggleMenu()">Usługi</a>
<a data-page="proces" onclick="navigate('proces');toggleMenu()">Proces</a>
<a data-page="cennik" onclick="navigate('cennik');toggleMenu()">Cennik</a>
<a className="mob-cta" onclick="navigate('kontakt');toggleMenu()">Rozpocznij projekt</a>
</div>
</nav>
<div className="page active" id="page-home">
<section className="hero"><div className="container"><div className="hero-grid">
<div className="fade-in visible">
<h1>Tworzymy strony,<br/>które<br/><span className="subtle">budują biznes.</span></h1>
<p>WaveSite.pl to zaufany partner w tworzeniu nowoczesnych, szybkich i w pełni responsywnych stron internetowych. Przekształcamy Twoją wizję w profesjonalne narzędzie sprzedaży, wykorzystując najlepsze technologie i przemyślany design.</p>
<div className="hero-btns">
<a className="btn-primary" onclick="navigate('kontakt')">Zobacz Więcej <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
<a className="btn-outline" onclick="navigate('proces')"><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg> Jak pracujemy</a>
</div></div>
<div className="code-box"><div className="code-bar"><div className="code-dot"></div><div className="code-dot"></div><div className="code-dot"></div><span className="code-title">wavesite_project / config.ts</span></div>
<div className="code-body">
<div className=""><span className="ck">import</span> <span className="cf">{ </span><span className="cf" style={{fontWeight: '600'}}>WaveSite</span><span className="cf"> } </span><span className="ck">from</span> <span className="cs">'@wavesite/core'</span><span className="cf">;</span></div><br/>
<div><span className="ck">const</span><span className="cf"> project = </span><span className="ck">new</span><span className="cf" style={{fontWeight: '600'}}> WaveSite</span><span className="cf">({</span></div>
<div className="indent"><span className="cf">client: </span><span className="cs">"Twoja Firma"</span><span className="cf">,</span></div>
<div className="indent"><span className="cf">focus: [</span></div>
<div className="indent2"><span className="cs">"Konwersja"</span><span className="cf">,</span></div>
<div className="indent2"><span className="cs">"Wydajność SEO"</span><span className="cf">,</span></div>
<div className="indent2"><span className="cs">"Design Premium"</span></div>
<div className="indent"><span className="cf">],</span></div>
<div className="indent"><span className="cf">metrics: {</span></div>
<div className="indent2"><span className="cf">speedScore: </span><span className="cn">100</span><span className="cf">,</span></div>
<div className="indent2"><span className="cf">uptime: </span><span className="cs">"99.9%"</span></div>
<div className="indent"><span className="cf">},</span></div>
<div className="indent"><span className="cf">status: </span><span className="cs">"Wdrażanie"</span><span className="cursor"></span></div>
<div><span className="cf">});</span></div>
</div></div>
</div></div></section>
<section className="socials"><div className="container">
<p className="socials-label">Znajdź nas w social mediach</p>
<div className="socials-list">
<a aria-label="TikTok" className="social-link" href="https://www.youtube.com/watch?v=UNAqqHIPbWA" rel="noopener noreferrer" target="_blank"><svg fill="currentColor" height="28" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z"></path></svg><span>TikTok</span></a>
<a aria-label="Instagram" className="social-link" href="#" rel="noopener noreferrer" target="_blank"><svg fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg><span>Instagram</span></a>
<a aria-label="Twitter / X" className="social-link" href="#" rel="noopener noreferrer" target="_blank"><svg fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg><span>Twitter / X</span></a>
</div></div></section>
<footer className="footer"><div className="container"><div className="footer-inner">
<a className="footer-logo" onclick="navigate('home')"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg> WaveSite.pl</a>
<p className="footer-copy">© 2026 WaveSite.pl — Wszystkie prawa zastrzeżone.</p>
</div></div></footer>
</div>
<div className="page" id="page-uslugi">
<section className="section"><div className="container">
<div className="section-header fade-in"><p className="section-label">Co oferujemy</p><h2 className="section-title">Kompleksowe usługi <span className="subtle">webowe</span></h2></div>
<div className="services-grid">
<div className="service-card fade-in"><svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg><h3>Strony internetowe</h3><p>Responsywne, szybkie strony dopasowane do Twojej branży i celów biznesowych.</p></div>
<div className="service-card fade-in"><svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg><h3>UI/UX Design</h3><p>Przemyślany design, który przyciąga uwagę i prowadzi użytkownika do konwersji.</p></div>
<div className="service-card fade-in"><svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"></path></svg><h3>Wydajność</h3><p>Optymalizacja pod kątem szybkości ładowania i najwyższych wyników Core Web Vitals.</p></div>
<div className="service-card fade-in"><svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg><h3>SEO</h3><p>Pozycjonowanie i optymalizacja, która sprawia, że klienci Cię znajdą.</p></div>
<div className="service-card fade-in"><svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg><h3>Wsparcie &amp; Hosting</h3><p>Niezawodny hosting, certyfikat SSL i ciągłe wsparcie techniczne.</p></div>
<div className="service-card fade-in"><svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg><h3>Analityka</h3><p>Śledzenie konwersji i zachowań użytkowników, aby ciągle ulepszać wyniki.</p></div>
</div></div></section>
<footer className="footer"><div className="container"><div className="footer-inner"><a className="footer-logo" onclick="navigate('home')"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg> WaveSite.pl</a><p className="footer-copy">© 2026 WaveSite.pl — Wszystkie prawa zastrzeżone.</p></div></div></footer>
</div>
<div className="page" id="page-proces">
<section className="section section-bg"><div className="container">
<div className="section-header fade-in"><p className="section-label">Jak pracujemy</p><h2 className="section-title">Prosty proces, <span className="subtle">wielkie rezultaty</span></h2></div>
<div className="process-grid">
<div className="step fade-in"><span className="step-num">01</span><h3>Konsultacja</h3><p>Poznajemy Twój biznes, cele i grupę docelową.</p></div>
<div className="step fade-in"><span className="step-num">02</span><h3>Projekt</h3><p>Tworzymy makiety i design dopasowany do Twojej marki.</p></div>
<div className="step fade-in"><span className="step-num">03</span><h3>Rozwój</h3><p>Kodujemy stronę z dbałością o wydajność i SEO.</p></div>
<div className="step fade-in"><span className="step-num">04</span><h3>Wdrożenie</h3><p>Publikujemy, testujemy i zapewniamy ciągłe wsparcie.</p></div>
</div></div></section>
<footer className="footer"><div className="container"><div className="footer-inner"><a className="footer-logo" onclick="navigate('home')"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg> WaveSite.pl</a><p className="footer-copy">© 2026 WaveSite.pl — Wszystkie prawa zastrzeżone.</p></div></div></footer>
</div>
<div className="page" id="page-cennik">
<section className="section"><div className="container">
<div className="section-header fade-in"><p className="section-label">Cennik</p><h2 className="section-title">Transparentne <span className="subtle">ceny</span></h2></div>
<div className="pricing-grid">
<div className="plan fade-in">
<h3>Standard</h3><p className="plan-desc">Solidna podstawa dla Twojego biznesu</p><p className="plan-price">399 zł</p>
<ul>
<li><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Opis firmy i oferty</li>
<li><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Menu / cennik</li>
<li><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Galeria realizacji</li>
<li><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Dane kontaktowe + mapa</li>
<li><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Adaptacja do wszystkich urządzeń</li>
<li><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Podstawowe animacje</li>
<li><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Podstawowe SEO</li>
<li><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Wybrana domena</li>
<li><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Certyfikat SSL</li>
</ul>
<a className="plan-btn plan-btn-default" onclick="navigate('kontakt')">Wybierz plan</a>
</div>
<div className="plan highlight fade-in">
<span className="plan-badge">Najpopularniejszy</span>
<h3>Pro</h3><p className="plan-desc">Pełen pakiet dla wymagających</p><p className="plan-price">599 zł</p>
<ul>
<li><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Wszystko z pakietu Standard</li>
<li><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Formularz kontaktowy</li>
<li><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Zaawansowane SEO</li>
<li><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Zaawansowane animacje</li>
<li><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Więcej podstron</li>
<li><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Rozbudowana galeria realizacji</li>
<li><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Panel CMS + szkolenie</li>
<li><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Wsparcie wizytówki Google</li>
<li><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Priorytetowe wsparcie</li>
</ul>
<a className="plan-btn plan-btn-accent" onclick="navigate('kontakt')">Wybierz plan</a>
</div>
</div></div></section>
<footer className="footer"><div className="container"><div className="footer-inner"><a className="footer-logo" onclick="navigate('home')"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg> WaveSite.pl</a><p className="footer-copy">© 2026 WaveSite.pl — Wszystkie prawa zastrzeżone.</p></div></div></footer>
</div>
<div className="page" id="page-kontakt">
<section className="section section-bg"><div className="container">
<div className="contact-center fade-in">
<svg className="mail-icon" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
<h2 className="section-title">Gotowy na nową <span className="subtle">stronę?</span></h2>
<p>Napisz do nas — odpowiemy w ciągu 24 godzin z bezpłatną wyceną Twojego projektu.</p>
<button className="btn-cta" onclick="openModal()">Rozpocznij projekt <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button>
<div className="contact-extra">
<a className="contact-extra-card" href="mailto:timotibiznes@gmail.com"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg><div><span className="label">Email</span><span className="value">timotibiznes@gmail.com</span></div></a>
<a className="contact-extra-card" href="tel:+48570182234"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg><div><span className="label">Telefon</span><span className="value">+48 570 182 234</span></div></a>
<div className="contact-extra-card"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><div><span className="label">Godziny pracy</span><span className="value">7:00–23:00, 7 dni</span></div></div>
</div></div></div></section>
<footer className="footer"><div className="container"><div className="footer-inner"><a className="footer-logo" onclick="navigate('home')"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg> WaveSite.pl</a><p className="footer-copy">© 2026 WaveSite.pl — Wszystkie prawa zastrzeżone.</p></div></div></footer>
</div>
<div className="modal-overlay" id="modal">
<div className="modal">
<button className="modal-close" onclick="closeModal()"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>
<h3>Skontaktuj się z nami</h3>
<p className="modal-desc">Napisz lub zadzwoń — chętnie pomożemy!</p>
<a className="modal-item" href="mailto:timotibiznes@gmail.com"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg><span>timotibiznes@gmail.com</span></a>
<a className="modal-item" href="tel:+48570182234"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg><span>+48 570 182 234</span></a>
<div className="modal-item" style={{cursor: 'default'}}><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><span className="muted">Aktywni 7:00–23:00, 7 dni w tygodniu</span></div>
</div></div>


    </>
  );
}
