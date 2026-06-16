import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
  // Lucide icons
  lucide.createIcons();

  // Animation on scroll (staggered fade-in, blur-in, slide-in)
  function animateOnScroll() {
    let delay = 0;
    document.querySelectorAll('.fade-in, .blur-in, .slide-in-left, .slide-in-right').forEach((el, idx) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        setTimeout(() => el.classList.add('visible'), delay);
        delay += 110;
      }
    });
  }
  window.addEventListener('scroll', animateOnScroll);
  window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('navbar').classList.add('visible');
    animateOnScroll();
    lucide.createIcons();
  });

  // Sticky navbar shadow on scroll
  window.addEventListener("scroll", function() {
    const nav = document.getElementById('navbar');
    if(window.scrollY > 8) nav.classList.add('shadow-lg');
    else nav.classList.remove('shadow-lg');
  });

  // Mobile menu toggle
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
    document.body.style.overflow = mobileMenu.style.display === "flex" ? "hidden" : "";
  });
  window.closeMobileMenu = function() {
    mobileMenu.style.display = "none";
    hamburger.classList.remove('open');
    document.body.style.overflow = "";
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if(href.length > 1 && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'});
        window.closeMobileMenu && window.closeMobileMenu();
      }
    });
  });

  // Carousel logic
  const track = document.getElementById('carouselTrack');
  const leftBtn = document.querySelector('.carousel-btn.left');
  const rightBtn = document.querySelector('.carousel-btn.right');
  let idx = 0;
  function updateCarousel() {
    const cards = track.children;
    const cardWidth = cards[0].offsetWidth + 32;
    const visibleCards = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 700 ? 2 : 1;
    idx = Math.max(0, Math.min(idx, cards.length - visibleCards));
    track.style.transform = `translateX(-${idx * cardWidth}px)`;
  }
  leftBtn.addEventListener('click', () => { idx--; updateCarousel(); });
  rightBtn.addEventListener('click', () => { idx++; updateCarousel(); });
  window.addEventListener('resize', updateCarousel);
  window.addEventListener('DOMContentLoaded', updateCarousel);

  // Carousel: allow swipe on mobile
  let startX = 0, curX = 0, dragging = false;
  track.addEventListener('touchstart', e => { dragging=true; startX=e.touches[0].clientX; });
  track.addEventListener('touchmove', e => { if(!dragging)return; curX=e.touches[0].clientX; });
  track.addEventListener('touchend', e => {
    if(!dragging)return; dragging=false;
    if(curX - startX > 60) { idx--; updateCarousel(); }
    else if(startX - curX > 60) { idx++; updateCarousel(); }
    startX = curX = 0;
  });

  // Contact form validation
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    // Clear errors
    ['nome','email','telefono','servizio','messaggio'].forEach(f => document.getElementById('err-'+f).innerText='');
    // Nome
    const nome = this.nome.value.trim();
    if(nome.length < 2) { document.getElementById('err-nome').innerText = "Inserisci il tuo nome."; valid=false;}
    // Email
    const email = this.email.value.trim();
    if(!/^[\w-.]+@[\w-]+\.[\w-]{2,}$/.test(email)) { document.getElementById('err-email').innerText = "Email non valida."; valid=false; }
    // Telefono (optional but must be digits)
    const tel = this.telefono.value.trim();
    if(tel && !/^[\d\s+()-]{8,}$/.test(tel)) { document.getElementById('err-telefono').innerText = "Telefono non valido."; valid=false;}
    // Servizio
    if(!this.servizio.value) { document.getElementById('err-servizio').innerText = "Seleziona un servizio."; valid=false;}
    // Messaggio
    if(this.messaggio.value.trim().length < 5) { document.getElementById('err-messaggio').innerText = "Scrivi un messaggio."; valid=false;}
    if(valid) {
      document.getElementById('form-success').innerText = "Richiesta inviata con successo! Ti ricontatteremo a breve.";
      document.getElementById('form-success').style.display = "block";
      this.reset();
      setTimeout(()=>document.getElementById('form-success').style.display="none",4000);
    }
  });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-40 navbar-blur shadow-sm transition-all fade-in" id="navbar" style={{opacity: '0'}}>
<nav className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-8 py-3">

<a className="flex items-center font-semibold text-2xl tracking-tight select-none" href="#hero" style={{letterSpacing: '-0.03em', color: '#2563eb'}}>NW</a>

<ul className="hidden md:flex space-x-8 ml-8 font-medium">
<li><a className="nav-link" href="#hero">Home</a></li>
<li><a className="nav-link" href="#servizi">Servizi</a></li>
<li><a className="nav-link" href="#casi">Casi Studio</a></li>
<li><a className="nav-link" href="#contatti">Contatti</a></li>
</ul>

<a className="ml-8 cta-btn text-base shadow-lg" href="#contatti">Richiedi Preventivo</a>

<button aria-label="Toggle menu" className="md:hidden ml-4 hamburger" id="hamburger">
<span></span><span></span><span></span>
</button>
</nav>

<div className="fixed inset-0 top-[60px] bg-white/80 backdrop-blur-lg flex flex-col items-center pt-10 gap-8 text-lg font-medium z-30 transition-all duration-300" id="mobileMenu" style={{display: 'none'}}>
<a className="nav-link" href="#hero" onclick="closeMobileMenu()">Home</a>
<a className="nav-link" href="#servizi" onclick="closeMobileMenu()">Servizi</a>
<a className="nav-link" href="#casi" onclick="closeMobileMenu()">Casi Studio</a>
<a className="nav-link" href="#contatti" onclick="closeMobileMenu()">Contatti</a>
<a className="cta-btn shadow-md" href="#contatti" onclick="closeMobileMenu()">Richiedi Preventivo</a>
</div>
</header>

<section className="pt-32 md:pt-44 pb-20 relative overflow-hidden fade-in" id="hero" style={{opacity: '0'}}>

<div aria-hidden="true" className="absolute inset-0 pointer-events-none">
<div className="absolute top-20 left-1/2 -translate-x-1/2 w-[420px] h-[120px] bg-gradient-to-r from-[#2563eb55] via-[#6366f155] to-transparent rounded-full blur-2xl opacity-70"></div>
<div className="absolute right-0 top-0 w-[180px] h-[80px] bg-gradient-to-l from-[#2563eb22] to-transparent rounded-full blur-2xl"></div>
<div className="absolute left-0 bottom-0 w-[90px] h-[60px] bg-gradient-to-r from-[#6366f122] to-transparent rounded-full blur-2xl"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-8 flex flex-col-reverse md:flex-row items-center gap-12">

<div className="flex-1 text-center md:text-left slide-in-left" style={{opacity: '0'}}>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-5" style={{letterSpacing: '-0.04em', color: '#18181b'}}>Trasforma la tua presenza digitale con <span style={{color: '#2563eb'}}>NovaWeb</span></h1>
<p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl mx-auto md:mx-0">Social Media Management, Software AI, Menu Digitali e Siti Web. Soluzioni innovative per la crescita digitale del tuo business.</p>
<div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
<a className="cta-btn text-base" href="#servizi">Scopri i Servizi</a>
<a className="cta-btn text-base" href="#contatti" style={{background: 'linear-gradient(90deg,#6366f1 0%,#2563eb 100%)', boxShadow: '0 4px 16px 0 rgba(99,102,241,.10)'}}>Contattaci</a>
</div>
</div>

<div className="flex-1 flex justify-center items-center relative slide-in-right" style={{opacity: '0'}}>
<img alt="Hero Image" className="rounded-2xl shadow-xl w-full max-w-xs md:max-w-md object-cover blur-in" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&amp;fit=crop&amp;w=600&amp;q=80" style={{opacity: '0'}}/>
<div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-tr from-[#2563eb33] to-[#6366f133] rounded-full blur-xl"></div>
</div>
</div>
</section>

<section className="py-20 fade-in" id="servizi" style={{opacity: '0'}}>
<div className="mx-auto max-w-7xl px-4 sm:px-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center" style={{letterSpacing: '-0.03em'}}>I Nostri Servizi</h2>
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

<div className="card-service p-6 flex flex-col items-center text-center fade-in" style={{opacity: '0'}}>
<div className="bg-gradient-to-tr from-[#2563eb17] to-[#6366f111] rounded-full p-4 mb-5">
<i data-lucide="users" style={{width: '36px', height: '36px', stroke: '#2563eb', strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-xl font-semibold mb-2">Social Media Management</h3>
<p className="text-base text-slate-600">Strategie personalizzate e gestione professionale dei tuoi canali social per aumentare visibilità e engagement.</p>
</div>

<div className="card-service p-6 flex flex-col items-center text-center fade-in" style={{opacity: '0'}}>
<div className="bg-gradient-to-tr from-[#6366f117] to-[#2563eb11] rounded-full p-4 mb-5">
<i data-lucide="brain-circuit" style={{width: '36px', height: '36px', stroke: '#6366f1', strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-xl font-semibold mb-2">Software con AI Integration</h3>
<p className="text-base text-slate-600">Soluzioni software avanzate integrate con Intelligenza Artificiale per ottimizzare i processi e aumentare l'efficienza.</p>
</div>

<div className="card-service p-6 flex flex-col items-center text-center fade-in" style={{opacity: '0'}}>
<div className="bg-gradient-to-tr from-[#6366f117] to-[#2563eb11] rounded-full p-4 mb-5">
<i data-lucide="menu" style={{width: '36px', height: '36px', stroke: '#2563eb', strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-xl font-semibold mb-2">Menu Digitali</h3>
<p className="text-base text-slate-600">Menù digitali interattivi e personalizzabili per ristoranti e locali, facilmente aggiornabili e integrabili.</p>
</div>

<div className="card-service p-6 flex flex-col items-center text-center fade-in" style={{opacity: '0'}}>
<div className="bg-gradient-to-tr from-[#2563eb17] to-[#6366f111] rounded-full p-4 mb-5">
<i data-lucide="code" style={{width: '36px', height: '36px', stroke: '#6366f1', strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-xl font-semibold mb-2">Sviluppo Siti Web</h3>
<p className="text-base text-slate-600">Realizzazione di siti web moderni, performanti e su misura, ottimizzati per dispositivi mobili e SEO.</p>
</div>
</div>
</div>
</section>

<section className="py-20 fade-in" id="casi" style={{opacity: '0'}}>
<div className="mx-auto max-w-7xl px-4 sm:px-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center" style={{letterSpacing: '-0.03em'}}>Progetti Realizzati</h2>

<div className="relative carousel max-w-5xl mx-auto">
<button aria-label="Precedente" className="carousel-btn left" tabindex="0"><i data-lucide="chevron-left" style={{width: '26px', height: '26px'}}></i></button>
<div className="carousel-track" id="carouselTrack" style={{gap: '32px'}}>

<div className="bg-white rounded-2xl shadow-md border border-[#e5e7eb] min-w-[320px] max-w-[370px] px-6 py-7 flex flex-col fade-in" style={{opacity: '0'}}>
<img alt="Case 1" className="rounded-lg mb-4 w-full object-cover h-36" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<h3 className="font-semibold text-lg mb-2">RistoMenu</h3>
<p className="text-slate-600 mb-3 text-sm">Menu digitale interattivo per ristorante di Milano. Integrazione con gestionale cassa e QR code ai tavoli.</p>
<div className="flex flex-wrap gap-2 text-xs text-slate-500 mb-4">
<span className="bg-slate-100 rounded px-2 py-1">React</span>
<span className="bg-slate-100 rounded px-2 py-1">AI</span>
<span className="bg-slate-100 rounded px-2 py-1">Firebase</span>
</div>
<a className="cta-btn text-sm py-2 px-4 mt-auto" href="#" style={{borderRadius: '8px'}}>Vedi Progetto</a>
</div>

<div className="bg-white rounded-2xl shadow-md border border-[#e5e7eb] min-w-[320px] max-w-[370px] px-6 py-7 flex flex-col fade-in" style={{opacity: '0'}}>
<img alt="Case 2" className="rounded-lg mb-4 w-full object-cover h-36" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<h3 className="font-semibold text-lg mb-2">SocialWave</h3>
<p className="text-slate-600 mb-3 text-sm">Campagna social per brand moda. Pianificazione editoriale, automazioni e analytics avanzati.</p>
<div className="flex flex-wrap gap-2 text-xs text-slate-500 mb-4">
<span className="bg-slate-100 rounded px-2 py-1">Instagram API</span>
<span className="bg-slate-100 rounded px-2 py-1">AI</span>
<span className="bg-slate-100 rounded px-2 py-1">Analytics</span>
</div>
<a className="cta-btn text-sm py-2 px-4 mt-auto" href="#" style={{borderRadius: '8px'}}>Vedi Progetto</a>
</div>

<div className="bg-white rounded-2xl shadow-md border border-[#e5e7eb] min-w-[320px] max-w-[370px] px-6 py-7 flex flex-col fade-in" style={{opacity: '0'}}>
<img alt="Case 3" className="rounded-lg mb-4 w-full object-cover h-36" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<h3 className="font-semibold text-lg mb-2">AIChatSuite</h3>
<p className="text-slate-600 mb-3 text-sm">Suite chatbot AI per e-commerce: risposte automatiche, supporto clienti e suggerimenti prodotti smart.</p>
<div className="flex flex-wrap gap-2 text-xs text-slate-500 mb-4">
<span className="bg-slate-100 rounded px-2 py-1">Node.js</span>
<span className="bg-slate-100 rounded px-2 py-1">OpenAI</span>
<span className="bg-slate-100 rounded px-2 py-1">Vue</span>
</div>
<a className="cta-btn text-sm py-2 px-4 mt-auto" href="#" style={{borderRadius: '8px'}}>Vedi Progetto</a>
</div>

<div className="bg-white rounded-2xl shadow-md border border-[#e5e7eb] min-w-[320px] max-w-[370px] px-6 py-7 flex flex-col fade-in" style={{opacity: '0'}}>
<img alt="Case 4" className="rounded-lg mb-4 w-full object-cover h-36" src="https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<h3 className="font-semibold text-lg mb-2">WebStudioPro</h3>
<p className="text-slate-600 mb-3 text-sm">Sito web portfolio per studio design. Responsive, CMS Headless, performance top e SEO avanzato.</p>
<div className="flex flex-wrap gap-2 text-xs text-slate-500 mb-4">
<span className="bg-slate-100 rounded px-2 py-1">Next.js</span>
<span className="bg-slate-100 rounded px-2 py-1">CMS</span>
<span className="bg-slate-100 rounded px-2 py-1">SEO</span>
</div>
<a className="cta-btn text-sm py-2 px-4 mt-auto" href="#" style={{borderRadius: '8px'}}>Vedi Progetto</a>
</div>
</div>
<button aria-label="Successivo" className="carousel-btn right" tabindex="0"><i data-lucide="chevron-right" style={{width: '26px', height: '26px'}}></i></button>
</div>
</div>
</section>

<section className="py-20 fade-in" id="contatti" style={{opacity: '0'}}>
<div className="mx-auto max-w-2xl px-4 sm:px-8 bg-white rounded-2xl shadow-lg border border-[#e5e7eb]">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 text-center" style={{letterSpacing: '-0.02em'}}>Inizia il Tuo Progetto</h2>
<form autocomplete="off" className="space-y-5" id="contactForm" novalidate="">
<div>
<label className="font-medium" htmlFor="nome">Nome</label>
<input className="input-field" id="nome" name="nome" required="" type="text"/>
<div className="form-error" id="err-nome"></div>
</div>
<div>
<label className="font-medium" htmlFor="email">Email</label>
<input className="input-field" id="email" name="email" required="" type="email"/>
<div className="form-error" id="err-email"></div>
</div>
<div>
<label className="font-medium" htmlFor="telefono">Telefono</label>
<input className="input-field" id="telefono" name="telefono" type="tel"/>
<div className="form-error" id="err-telefono"></div>
</div>
<div>
<label className="font-medium" htmlFor="servizio">Tipo di Servizio</label>
<select className="select-field" id="servizio" name="servizio" required="">
<option value="">Seleziona un servizio</option>
<option>Social Media Management</option>
<option>Software con AI Integration</option>
<option>Menu Digitali</option>
<option>Sviluppo Siti Web</option>
</select>
<div className="form-error" id="err-servizio"></div>
</div>
<div>
<label className="font-medium" htmlFor="messaggio">Messaggio</label>
<textarea className="input-field" id="messaggio" name="messaggio" required="" rows="4"></textarea>
<div className="form-error" id="err-messaggio"></div>
</div>
<button className="cta-btn text-base w-full" type="submit">Invia Richiesta</button>
<div className="text-green-600 font-medium text-center mt-2" id="form-success" style={{display: 'none'}}></div>
</form>
</div>
</section>

<footer className="pt-16 pb-7 bg-white mt-16 border-t border-[#e5e7eb] fade-in" style={{opacity: '0'}}>
<div className="mx-auto max-w-7xl px-4 sm:px-8 flex flex-col md:flex-row gap-8 md:gap-0 justify-between">

<div className="mb-6 md:mb-0">
<div className="flex items-center gap-2 mb-2 font-semibold text-xl tracking-tight" style={{color: '#2563eb', letterSpacing: '-0.03em'}}>NW</div>
<div className="text-slate-600 text-sm mb-2">NovaWeb Srl</div>
<div className="text-slate-500 text-sm">Via Digitale 12, 20121 Milano</div>
<div className="text-slate-500 text-sm">info@novaweb.it</div>
<div className="text-slate-500 text-sm">+39 02 1234567</div>
</div>

<div>
<div className="font-semibold text-base mb-2">Servizi</div>
<ul className="space-y-1 text-sm">
<li><a className="footer-link" href="#servizi">Social Media Management</a></li>
<li><a className="footer-link" href="#servizi">Software AI Integration</a></li>
<li><a className="footer-link" href="#servizi">Menu Digitali</a></li>
<li><a className="footer-link" href="#servizi">Sviluppo Siti Web</a></li>
</ul>
</div>

<div>
<div className="font-semibold text-base mb-2">Seguici</div>
<div className="flex gap-5 mt-1">
<a aria-label="Instagram" className="footer-link" href="#"><i data-lucide="instagram" style={{width: '22px', height: '22px', strokeWidth: '1.5'}}></i></a>
<a aria-label="Facebook" className="footer-link" href="#"><i data-lucide="facebook" style={{width: '22px', height: '22px', strokeWidth: '1.5'}}></i></a>
<a aria-label="LinkedIn" className="footer-link" href="#"><i data-lucide="linkedin" style={{width: '22px', height: '22px', strokeWidth: '1.5'}}></i></a>
</div>
</div>
</div>
<div className="text-center text-xs text-slate-400 mt-10">© 2024 NovaWeb Srl. Tutti i diritti riservati.</div>
</footer>



    </>
  );
}
