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



    // Nav scroll
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  // Mobile menu
  const burger  = document.getElementById('burger');
  const mobNav  = document.getElementById('mobNav');
  const mobClose = document.getElementById('mobClose');
  burger.addEventListener('click',   () => mobNav.classList.add('open'));
  mobClose.addEventListener('click', () => mobNav.classList.remove('open'));
  mobNav.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => mobNav.classList.remove('open'))
  );

  // Scroll reveal
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Smooth anchor
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="mob-nav" id="mobNav">
<button className="mob-close" id="mobClose">✕</button>
<a href="#philosophie">L'expérience</a>
<a href="#soins">Nos soins</a>
<a href="#avis">Avis</a>
<a href="#contact">Contact</a>
<a href="https://salonkee.be/salon/image-de-soi" style={{color: 'var(--rose)', marginTop: '0.8rem'}}>Réserver →</a>
</div>

<nav className="" id="nav">
<a className="nav-logo" href="index.html">
    Image de Soi

  </a>
<ul className="hidden md:flex gap-10 gap-x-10 gap-y-10 items-center">
<li className="">
<a className="text-xs uppercase tracking-widest font-extralight text-[#2E2A27] relative group py-2" href="/l-exp-rience">
        L'expérience
        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C8927A] transition-all duration-300 ease-out group-hover:w-full"></span>
</a>
</li>
<li className="">
<a className="text-xs uppercase tracking-widest font-extralight text-[#2E2A27] relative group py-2" href="/a-propos">
        À propos
        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C8927A] transition-all duration-300 ease-out group-hover:w-full"></span>
</a>
</li>
<li className="relative group">
<a className="text-xs uppercase tracking-widest font-extralight text-[#2E2A27] relative py-2 flex items-center gap-1 cursor-pointer" href="/#soins">
        Nos soins
        <span className="text-base transition-transform duration-300 group-hover:rotate-90 leading-none -mt-[2px]">
              ›
            </span>
<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C8927A] transition-all duration-300 ease-out group-hover:w-full"></span>
</a>
<div className="md:absolute static md:left-0 md:top-full md:mt-4 mt-2 md:w-max md:min-w-[320px] w-full bg-white md:border-t-2 md:border-[#C8927A] md:opacity-0 md:-translate-y-1.5 md:invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 md:shadow-xl z-[250] hidden md:block group-hover:block border-l md:border-l-0 pl-4 md:pl-0 border-[#C8927A]/30 md:before:content-[''] md:before:absolute md:before:w-full md:before:h-4 md:before:-top-4 md:before:left-0">
<ul className="flex flex-col py-3 md:py-4 gap-3 md:gap-0">
<li className="">
<a className="block md:px-8 md:py-2.5 text-[0.78rem] font-light tracking-[0.14em] uppercase text-[#2E2A27] hover:text-[#C8927A] transition-colors duration-300" href="/soins-corps">
              Soins corps &amp; Rituels Afterwork Wellness
            </a>
</li>
<li className="">
<a className="block md:px-8 md:py-2.5 text-[0.78rem] font-light tracking-[0.14em] uppercase text-[#2E2A27] hover:text-[#C8927A] transition-colors duration-300" href="/hydrafacial">
              Hydrafacial
            </a>
</li>
<li className="">
<a className="block md:px-8 md:py-2.5 text-[0.78rem] font-light tracking-[0.14em] uppercase text-[#2E2A27] hover:text-[#C8927A] transition-colors duration-300" href="/head-spa-holistique">
              Head Spa Holistique
            </a>
</li>
<li className="">
<a className="block md:px-8 md:py-2.5 text-[0.78rem] font-light tracking-[0.14em] uppercase text-[#2E2A27] hover:text-[#C8927A] transition-colors duration-300" href="/beauty-academy">
              Beauty Academy
            </a>
</li>
<li className="">
<a className="block md:px-8 md:py-2.5 text-[0.78rem] font-light tracking-[0.14em] uppercase text-[#2E2A27] hover:text-[#C8927A] transition-colors duration-300" href="/soins-enfants">
              Soins Enfants
            </a>
</li>
<li className="">
<a className="block md:px-8 md:py-2.5 text-[0.78rem] font-light tracking-[0.14em] uppercase text-[#2E2A27] hover:text-[#C8927A] transition-colors duration-300" href="/beauty-coaching">Beauty
              Coaching</a>
</li>
<li className="">
<a className="block md:px-8 md:py-2.5 text-[0.78rem] font-light tracking-[0.14em] uppercase text-[#2E2A27] hover:text-[#C8927A] transition-colors duration-300" href="/photobiomodulation">
              Photobiomodulation LED
            </a>
</li>
<li className="">
<a className="block md:px-8 md:py-2.5 text-[0.78rem] font-light tracking-[0.14em] uppercase text-[#2E2A27] hover:text-[#C8927A] transition-colors duration-300" href="/ems">
              EMS
            </a>
</li>
<li className="">
<a className="block md:px-8 md:py-2.5 text-[0.78rem] font-light tracking-[0.14em] uppercase text-[#2E2A27] hover:text-[#C8927A] transition-colors duration-300" href="/soins-visage">
              Soins du visage
            </a>
</li>
<li className="">
<a className="block md:px-8 md:py-2.5 text-[0.78rem] font-light tracking-[0.14em] uppercase text-[#2E2A27] hover:text-[#C8927A] transition-colors duration-300" href="/autres-soins">
              Autres soins
            </a>
</li>
</ul>
</div>
</li>
<li className="">
<a className="text-xs uppercase tracking-widest font-extralight text-[#2E2A27] relative group py-2" href="/gammes">
        Nos gammes
        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C8927A] transition-all duration-300 ease-out group-hover:w-full"></span>
</a>
</li>
<li className="">
<a className="text-xs uppercase tracking-widest font-extralight text-[#2E2A27] relative group py-2" href="/contact">
        Contact &amp; FAQ
        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C8927A] transition-all duration-300 ease-out group-hover:w-full"></span>
</a>
</li>
</ul>
<div className="" style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
<a className="nav-cta" href="https://salonkee.be/salon/image-de-soi">
      Réserver
    </a>
<button aria-label="Menu" className="burger" id="burger">
<span></span>
<span></span>
<span></span>
</button>
</div>
</nav>

<section className="hero">
<div className="hero-left">
<p className="hero-pretitle reveal in">Institut de Beauté · Aubel, Belgique</p>
<h1 className="hero-h1 reveal d1 in">
        Votre beauté,<br/>
<em className="">une parenthèse</em><br/>
      qui vous ressemble.
      </h1>
<p className="hero-p reveal d2 in">
        Chez Image de Soi, chaque soin est un moment privatisé, pensé pour vous et uniquement vous. Des produits
        d'exception, des technologies de pointe, une attention sans partage — parce que votre bien-être ne se négocie
        pas.
      </p>
<div className="hero-btns reveal d3 in">
<a className="btn-fill" href="https://salonkee.be/salon/image-de-soi">Prendre rendez-vous</a>
<a className="btn-line" href="#philosophie">Découvrir l'institut</a>
</div>
<div className="hero-stats reveal d4">
<div className="stat-item">
<div className="stat-num">20+</div>
<div className="stat-label">Ans d'expertise</div>
</div>
<div className="stat-item">
<div className="stat-num">100%</div>
<div className="stat-label">Soins privatisés</div>
</div>
<div className="stat-item">
<div className="stat-num">★ 5/5</div>
<div className="stat-label">Avis Google</div>
</div>
</div>
</div>
<div className="hero-right">

<div className="hero-mosaic">
<div className="mosaic-cell mc1">
<img alt="Soin visage Institut Image de Soi Aubel" className="" onerror="this.style.display='none'" src="https://static.wixstatic.com/media/d14d8a_a528e9233878496eab6654ec7ffdca82~mv2.jpeg/v1/fit/w_480,h_709,q_90,enc_avif,quality_auto/c2afb08e-467e-499a-baf5-3ca4c8175015.jpeg"/>
</div>
<div className="mosaic-cell mc2">
<img alt="Institut de beauté Aubel" className="" onerror="this.style.display='none'" src="https://static.wixstatic.com/media/d14d8a_da6b3b8ea5e34cd1a99781c62505af10~mv2.jpeg/v1/fit/w_960,h_659,q_90,enc_avif,quality_auto/c5a89290-1fa1-458a-a9fa-fe2eb486e6bc.jpeg"/>
</div>
<div className="mosaic-cell mc3">
<img alt="Soin bien-être Image de Soi" className="" onerror="this.style.display='none'" src="https://static.wixstatic.com/media/d14d8a_2f1f3b538d78478fbd07a210e00bbb01~mv2.jpeg/v1/fit/w_480,h_709,q_90,enc_avif,quality_auto/2592f17f-4ef3-49a0-887d-c77dd623e8b6.jpeg"/>
</div>
<div className="mosaic-cell mc4">
<img alt="Produits beauté Institut Image de Soi" className="" onerror="this.style.display='none'" src="https://static.wixstatic.com/media/d14d8a_b605db01610a4914b8e3661a0de2e35d~mv2.jpeg/v1/fit/w_681,h_480,q_90,enc_avif,quality_auto/8ac3902e-7605-43a0-b879-c4e0366ae7c0.jpeg"/>
</div>
</div>
<div className="hero-float reveal d5">
<p className="float-tag">Concept unique</p>
<p className="float-text">Soin privatisé<br/>&amp; sur-mesure</p>
</div>
</div>
</section>

<div className="brands-bar">
<div className="brands-track">
<span className="brand-item">Maria Galland</span><span className="brand-dot"></span>
<span className="brand-item">Cellcosmet</span><span className="brand-dot"></span>
<span className="brand-item">Hydrafacial®</span><span className="brand-dot"></span>
<span className="brand-item">Dermalogica</span><span className="brand-dot"></span>
<span className="brand-item">Juliette has a gun</span><span className="brand-dot"></span>
<span className="brand-item">Manucurist</span><span className="brand-dot"></span>
<span className="brand-item">Meraki</span><span className="brand-dot"></span>
<span className="brand-item">Pune</span><span className="brand-dot"></span>
<span className="brand-item">Ouate</span><span className="brand-dot"></span>

<span className="brand-item">Maria Galland</span><span className="brand-dot"></span>
<span className="brand-item">Cellcosmet</span><span className="brand-dot"></span>
<span className="brand-item">Hydrafacial®</span><span className="brand-dot"></span>
<span className="brand-item">Dermalogica</span><span className="brand-dot"></span>
<span className="brand-item">Juliette has a gun</span><span className="brand-dot"></span>
<span className="brand-item">Manucurist</span><span className="brand-dot"></span>
<span className="brand-item">Meraki</span><span className="brand-dot"></span>
<span className="brand-item">Pune</span><span className="brand-dot"></span>
<span className="brand-item">Ouate</span><span className="brand-dot"></span>
</div>
</div>

<section className="intro" id="philosophie">
<div className="intro-img">
<div className="intro-tag reveal in">
<p>« Parce que votre beauté dépend<br/>intimement du bien-être de votre esprit. »</p>
</div>
<img alt="Soin visage Institut Image de Soi Aubel" className="" onerror="this.style.display='none'" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bd5514a5-ae87-43b3-9dc4-fce6976a42c7_1600w.jpg"/></div>
<div className="intro-content">
<p className="eyebrow reveal in">Notre philosophie</p>
<h2 className="section-h2 reveal d1 in">L'attention<br/><em className="">que vous méritez</em></h2>
<blockquote className="intro-quote reveal d2 in">
        Un espace privatisé, une praticienne entièrement dédiée à vous, des soins pensés dans le moindre détail.
      </blockquote>
<p className="body-text reveal d3 in">L'Institut Image de Soi vous accueille à Aubel depuis plus de 15 ans. Nathalie et son équipe ont bâti un concept rare : des soins individuels, au calme, sans précipitation. Pas de file d'attente, pas de bruit — juste vous.</p>
<p className="body-text reveal d4 in">
        Nous sélectionnons chaque marque, chaque technologie, chaque petit détail — jusqu'à la coupe de champagne qui
        conclut votre visite — pour que l'expérience soit à la hauteur de vos attentes.
      </p>
<a className="btn-line reveal d5 in" href="#soins">Découvrir nos soins</a>
</div>
</section>

<section className="experience" id="soins">
<div className="exp-head">
<div className="">
<p className="eyebrow reveal">Ce qui nous distingue</p>
<h2 className="section-h2 reveal d1">L'expérience<br/><em>Image de Soi</em></h2>
</div>
<p className="reveal d2">Chaque détail est pensé pour faire de votre visite un moment d'exception, bien au-delà d'un
        simple rendez-vous beauté.</p>
</div>
<div className="exp-grid">
<div className="exp-card reveal">
<div className="exp-n">01</div>
<h3 className="exp-title">Espace privatisé</h3>
<p className="exp-text">Un concept de soins individuels au calme. Toute l'attention de votre praticienne est pour
          vous, et uniquement vous.</p>
</div>
<div className="exp-card reveal d1">
<div className="exp-n">02</div>
<h3 className="exp-title">Technologies de pointe</h3>
<p className="exp-text">Hydrafacial®, photobiomodulation LED, EMS, Head Spa holistique — les meilleures technologies
          beauté, entre des mains expertes.</p>
</div>
<div className="exp-card reveal d2">
<div className="exp-n">03</div>
<h3 className="exp-title">Produits d'exception</h3>
<p className="exp-text">Maria Galland, Cellcosmet, Dermalogica... Une sélection rigoureuse de marques premium pour
          des résultats visibles et durables.</p>
</div>
<div className="exp-card reveal">
<div className="exp-n">04</div>
<h3 className="exp-title">Beauty Academy</h3>
<p className="exp-text">Ateliers anniversaire, soins enfants, soins duo — un institut qui s'adresse à toute la
          famille avec la même exigence.</p>
</div>
<div className="exp-card reveal d1">
<div className="exp-n">05</div>
<h3 className="exp-title">Bons cadeaux</h3>
<p className="exp-text">Offrez un moment de bien-être inoubliable. Bons cadeaux disponibles à l'institut pour toutes
          les occasions.</p>
</div>
<div className="exp-card reveal d2">
<div className="exp-n">06</div>
<h3 className="exp-title">Horaires flexibles</h3>
<p className="exp-text">Ouvert dès 6h le samedi et jusqu'à 21h certains jour en semaine. Votre bien-être s'adapte à votre rythme, pas l'inverse.</p>
</div>
</div>
</section>

<section className="hydra">
<div className="hydra-left">
<p className="eyebrow reveal">Soin vedette</p>
<h2 className="section-h2 reveal d1">Hydrafacial®<br/><em className="">La révolution peau</em></h2>
<p className="body-text reveal d2">Le seul protocole combinant nettoyage, exfoliation, extraction, hydratation et protection antioxydante en 75 minutes. Résultats immédiatement visibles, convient à tous types de peaux.</p>
<a className="btn-fill reveal d3" href="https://salonkee.be/salon/image-de-soi">Réserver mon Hydrafacial®</a>
</div>
<div className="hydra-right">
<div className="step-list reveal">
<div className="step">
<span className="step-n">1</span>
<div className="step-body">
<strong className="">Nettoyage &amp; Exfoliation</strong>
<p className="">Élimination des cellules mortes et des impuretés en surface pour une peau nette et lisse.</p>
</div>
</div>
<div className="step">
<span className="step-n">2</span>
<div className="step-body">
<strong className="">Extraction &amp; Hydratation</strong>
<p className="">Désincrustage indolore et hydratation intense à l'acide hyaluronique et aux peptides.</p>
</div>
</div>
<div className="step">
<span className="step-n">3</span>
<div className="step-body">
<strong>Protection antioxydante</strong>
<p>Apport d'antioxydants puissants pour protéger et illuminer durablement la peau.</p>
</div>
</div>
</div>
<div className="reveal d1" style={{display: 'flex', flexWrap: 'wrap', gap: '0.7rem'}}>
<span className="hydra-pill">Traitement indolore</span>
<span className="hydra-pill">Résultats immédiats</span>
<span className="hydra-pill">Tous types de peaux</span>
</div>
</div>
</section>

<section className="services">
<div className="svc-head">
<p className="eyebrow reveal">Ce que nous proposons</p>
<h2 className="section-h2 reveal d1">Nos <em>soins &amp; services</em></h2>
</div>
<div className="svc-grid">
<div className="svc-card reveal">
<h3 className="svc-name">Soins du visage</h3>
<p className="svc-desc">Soins personnalisés selon votre type de peau, avec les meilleures marques professionnelles.
        </p>
</div>
<div className="svc-card reveal d1">
<h3 className="svc-name">Head Spa holistique</h3>
<p className="svc-desc">Soin du cuir chevelu et de la nuque alliant détente profonde et soins capillaires premium.
        </p>
</div>
<div className="svc-card reveal d2">
<h3 className="svc-name">Photobiomodulation LED</h3>
<p className="svc-desc">Technologie lumineuse pour stimuler la régénération cellulaire et traiter de nombreuses
          problématiques.</p>
</div>
<div className="svc-card reveal d3">
<h3 className="svc-name">EMS — Remodelage</h3>
<p className="svc-desc">Stimulation musculaire électrique pour tonifier et raffermir le corps en douceur.</p>
</div>
<div className="svc-card reveal">
<h3 className="svc-name">Afterwork Wellness</h3>
<p className="svc-desc">Rituels corps &amp; détente pensés pour décompresser après une longue journée de travail.</p>
</div>
<div className="svc-card reveal d1">
<h3 className="svc-name">Beauty Academy</h3>
<p className="svc-desc">Ateliers anniversaire et formations beauté pour petits et grands dans une ambiance
          conviviale.</p>
</div>
<div className="svc-card reveal d2">
<h3 className="svc-name">Beauty Coaching</h3>
<p className="svc-desc">Conseils personnalisés pour sublimer votre image au quotidien, adapté à votre style de vie.
        </p>
</div>
<div className="svc-card reveal d3">
<h3 className="svc-name">Soins enfants</h3>
<p className="svc-desc">Soins adaptés aux plus jeunes, seuls ou en duo parent-enfant, dans une atmosphère ludique et
          douce.</p>
</div>
</div>
</section>

<section className="testimonials" id="avis">
<div className="testi-head">
<div className="">
<p className="eyebrow reveal">Ce qu'elles disent</p>
<h2 className="section-h2 reveal d1">Elles nous font <em className="">confiance</em></h2>
</div>
<div className="testi-rating reveal d2">
<div className="stars-row">★★★★★</div>
<span className="">Avis salonkee vérifiés</span>
</div>
</div>
<div className="testi-grid">
<div className="testi-card reveal">
<span className="testi-source">Salonkee</span>
<div className="testi-stars">★★★★★</div>
<p className="testi-text">« J’ai apprécié mon soin visage. Le résultat est instantané. Nathalie prend le temps d’expliquer
    les différentes étapes du soins mais aussi comment prolonger ses effets à domicile. »</p>
<p className="testi-author">JULIE</p>
</div>
<div className="testi-card reveal d1">
<span className="testi-source">Salonkee</span>
<div className="testi-stars">★★★★★</div>
<p className="testi-text">« C'est devenu un rituel mensuel... Tout le monde est adorable, aux petits soins et les soins sont d'une grandes qualités !  J'adore ce petit moment à moi. »</p>
<p className="testi-author">Cynthia</p>
</div>
<div className="testi-card reveal d2">
<span className="testi-source">Google</span>
<div className="testi-stars">★★★★★</div>
<p className="testi-text">« Depuis mon Hydrafacial, ma peau n'a jamais été aussi belle. L'équipe est
          professionnelle, et l'ambiance de l'institut est vraiment apaisante. »</p>
<p className="testi-author">Sophie D.</p>
</div>
</div>
</section>

<section className="details">
<div className="detail-tile reveal">
<span className="detail-icon">🫖</span>
<h3 className="detail-name">Tea Tower Factory</h3>
<p className="detail-text">Infusions et thés bio belges pour accompagner votre soin dans la douceur.</p>
</div>
<div className="detail-tile reveal d1">
<span className="detail-icon">🥂</span>
<h3 className="detail-name">Champagne Deutz</h3>
<p className="detail-text">Une coupe de champagne frais pour clore votre visite avec élégance.</p>
</div>
<div className="detail-tile reveal d2">
<span className="detail-icon">💧</span>
<h3 className="detail-name">Eau filtrée Berkey</h3>
<p className="detail-text">Une eau pure filtrée par un système haut de gamme, pour une pause rafraîchissante.</p>
</div>
<div className="detail-tile reveal d3">
<span className="detail-icon">🎁</span>
<h3 className="detail-name">Bons cadeaux</h3>
<p className="detail-text">Offrez un moment de bien-être. Disponibles à l'institut pour toutes les occasions.</p>
</div>
</section>

<section className="cta" id="contact">
<p className="eyebrow reveal">Prête à vous faire chouchouter ?</p>
<h2 className="section-h2 reveal d1">Prenez rendez-vous<br/><em className="">dès aujourd'hui</em></h2>
<p className="reveal d2">Réservez en ligne en quelques clics, ou contactez-nous directement par téléphone. Nous sommes
      là pour vous accueillir dans la sérénité.</p>
<div className="cta-btns reveal d3">
<a className="btn-fill" href="https://wa.me/32478616003?text=Bonjour%2C%20je%20souhaite%20avoir%20des%20informations.">
    💬 Écrire sur WhatsApp
  </a>
<a className="btn-outline" href="https://salonkee.be/salon/image-de-soi">
    📅 Réserver en ligne
  </a>
</div>
<div className="horaires reveal d4">
<div className="horaire-item">
<p className="h-label">Lun — Mar</p>
<p className="h-val">9h – 21h</p>
</div>
<div className="horaire-item">
<p className="h-label">Mercredi</p>
<p className="h-val">6h – 18h</p>
</div><div className="horaire-item">
<p className="h-label">Jeudi</p>
<p className="h-val">15h – 21h</p>
</div><div className="horaire-item">
<p className="h-label">Vendredi</p>
<p className="h-val">6h – 18h30</p>
</div>
<div className="horaire-item">
<p className="h-label">Samedi</p>
<p className="h-val">06h - 13h</p>
</div>
</div>
</section>

<footer className="">
<div className="footer-grid">
<div className="ft-brand">
<div className="nav-logo">
        Image de Soi
        <small className="">Institut de Beauté · Aubel</small>
</div>
<p className="">
        Votre espace de beauté et de bien-être à Aubel depuis plus de 20
        ans. Soins en cabine, produits d'exception, technologies de pointe.
      </p>
<div className="ft-socials">
<a aria-label="Facebook" className="social" href="https://www.facebook.com/imagedesoiinstitut">
          f
        </a>
<a aria-label="Instagram" className="social" href="https://www.instagram.com/imagedesoi_nathaliechantraine/">
          ig
        </a>
</div>
</div>
<div className="ft-col">
<h4 className="">Nous joindre</h4>
<p className="">
        Rue de la Station 2/1
        <br/>
            4880 Aubel
      </p>
<br/>
<p className="">
<a className="ft-link" href="https://wa.me/32478616003">💬 WhatsApp</a>
</p>
<br/>
<p className="">
<a className="ft-link" href="https://salonkee.be/salon/image-de-soi" style={{fontSize: '0.78rem'}}>
          📅 Réserver en ligne
        </a>
</p>
</div>
</div>
<div className="footer-bottom">
<p className="ft-copy">
      © 2025 Institut Image de Soi — Nathalie Chantraine · Aubel, Belgique
    </p>
<p className="ft-copy">Rue de la Station 2/1 · 4880 Aubel</p>
</div>
</footer>



    </>
  );
}
