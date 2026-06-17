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



const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');
const navLinks = document.querySelectorAll('.nav-mobile-overlay .nav-link, .nav-mobile-overlay .nav-cta');

navToggle.addEventListener('click', () => {
  navMobile.classList.toggle('active');
  document.body.style.overflow = navMobile.classList.contains('active') ? 'hidden' : '';
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('active');
    document.body.style.overflow = '';
  });
});

const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

const themeToggle = document.getElementById('themeToggle');
const iconSun = document.getElementById('iconSun');
const iconMoon = document.getElementById('iconMoon');
const htmlEl = document.documentElement;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light' || (!savedTheme && window.matchMedia('(prefers-color-scheme: light)').matches)) {
  htmlEl.setAttribute('data-theme', 'light');
  iconSun.classList.remove('hidden');
  iconMoon.classList.add('hidden');
}

themeToggle.addEventListener('click', () => {
  const currentTheme = htmlEl.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  htmlEl.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  if (newTheme === 'light') {
    iconSun.classList.remove('hidden');
    iconMoon.classList.add('hidden');
  } else {
    iconSun.classList.add('hidden');
    iconMoon.classList.remove('hidden');
  }
});

const cursorGlow = document.getElementById('cursorGlow');
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  cursorGlow.style.left = `${mouseX}px`;
  cursorGlow.style.top = `${mouseY}px`;
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});

const canvas = document.getElementById('heroBtnCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let time = 0;
  
  function drawCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    const stop1 = (Math.sin(time * 0.05) + 1) * 0.5;
    
    gradient.addColorStop(0, `rgba(193, 127, 89, ${0.1 + stop1 * 0.15})`);
    gradient.addColorStop(0.5, `rgba(201, 169, 110, ${0.1 + (1-stop1) * 0.15})`);
    gradient.addColorStop(1, `rgba(193, 127, 89, ${0.1 + stop1 * 0.15})`);
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = 'rgba(245, 240, 235, 0.2)';
    for(let i = 0; i < 5; i++) {
      const px = (Math.sin(time * 0.02 + i) * 0.5 + 0.5) * canvas.width;
      const py = (Math.cos(time * 0.03 + i) * 0.5 + 0.5) * canvas.height;
      ctx.beginPath();
      ctx.arc(px, py, 1.5, 0, Math.PI * 2);
      ctx.fill();
    }
    
    time++;
    requestAnimationFrame(drawCanvas);
  }
  drawCanvas();
}

const revealElements = document.querySelectorAll(
  '.reveal, .reveal-clip-left, .reveal-slide-right, .reveal-clip-up, .reveal-pop, .reveal-zoom, .reveal-soft, .stagger-children, .stagger-scale, .stagger-pop, .stagger-clip, .stagger-soft'
);

const revealOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, revealOptions);

revealElements.forEach(el => {
  revealObserver.observe(el);
});

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
      
<div className="cursor-glow" id="cursorGlow"></div>
<nav className="nav" id="nav">
<div className="container nav-inner">
<a className="nav-logo" href="#">Expert Bâtiment</a>
<div className="nav-links">
<a className="nav-link" href="#philosophy">Philosophie</a>
<a className="nav-link" href="#services">Expertises</a>
<a className="nav-link" href="#projects">Réalisations</a>
<a className="nav-link" href="#process">Méthode</a>
<a className="nav-link" href="#testimonials">Avis</a>
<a className="nav-link" href="#journal">Conseils</a>
</div>
<div className="flex items-center gap-3">
<a className="nav-cta hidden md:block" href="#contact"><i className="nav-cta-shimmer"></i><span>Demander un Devis</span></a>
<button aria-label="Toggle Theme" className="w-[38px] h-[38px] flex items-center justify-center rounded-full border border-[rgba(193,127,89,0.3)] text-[var(--color-copper-light)] hover:border-[var(--color-copper)] hover:bg-[rgba(193,127,89,0.08)] transition-all cursor-pointer z-10" id="themeToggle">
<iconify-icon className="text-lg hidden" icon="solar:sun-linear" id="iconSun" style={{strokeWidth: '1.5px'}}></iconify-icon>
<iconify-icon className="text-lg" icon="solar:moon-linear" id="iconMoon" style={{strokeWidth: '1.5px'}}></iconify-icon>
</button>
<button aria-label="Toggle menu" className="nav-toggle" id="navToggle">
<span></span><span></span><span></span>
</button>
</div>
</div>
</nav>
<div className="nav-mobile-overlay" id="navMobile">
<a className="nav-link" href="#philosophy">Philosophie</a>
<a className="nav-link" href="#services">Expertises</a>
<a className="nav-link" href="#projects">Réalisations</a>
<a className="nav-link" href="#process">Méthode</a>
<a className="nav-link" href="#testimonials">Avis</a>
<a className="nav-link" href="#journal">Conseils</a>
<a className="nav-cta" href="#contact" style={{marginTop: '1rem'}}><span>Demander un Devis</span></a>
</div>
<section className="hero" id="hero">
<div className="hero-bg">
<div aria-label="Salle de bain moderne haut de gamme" className="hero-bg-image" role="img"></div>
<div className="hero-bg-overlay"></div>
</div>
<div className="container hero-content">
<div className="hero-tag">
<iconify-icon icon="solar:waterdrops-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
    Plomberie &amp; Chauffage d'Excellence
  </div>
<h1 className="hero-title">L'excellence en plomberie pour vos <em>projets</em></h1>
<p className="hero-description">Nous concevons et installons des systèmes d'eau et de chauffage alliant performance technique, durabilité et esthétique haut de gamme. Un confort absolu au quotidien.</p>
<div className="hero-actions">
<a className="btn-hero-webgl" href="#projects" id="heroBtn">
<canvas height="51" id="heroBtnCanvas" width="220"></canvas>
<span className="btn-hero-webgl-text">
        Nos Réalisations
        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</span>
</a>
<a className="btn btn-outline" href="#philosophy">
<span>Notre Vision</span>
</a>
</div>
<div className="hero-stats">
<div className="hero-stat">
<div className="hero-stat-number">500+</div>
<div className="hero-stat-label">Projets Réalisés</div>
</div>
<div className="hero-stat">
<div className="hero-stat-number">15</div>
<div className="hero-stat-label">Années d'Expertise</div>
</div>
<div className="hero-stat">
<div className="hero-stat-number">98%</div>
<div className="hero-stat-label">Clients Satisfaits</div>
</div>
</div>
</div>
</section>
<section className="philosophy section" id="philosophy">
<div className="container">
<div className="philosophy-grid">
<div className="philosophy-image reveal-clip-left">
<img alt="Détail de robinetterie luxueuse en laiton" className="bg-center object-cover" loading="lazy" src="https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=1600&amp;q=80"/>
</div>
<div className="philosophy-text">
<div className="section-label reveal-slide-right">Notre Philosophie</div>
<h2 className="section-title reveal-slide-right reveal-delay-1">L'artisanat au service de votre <em>confort</em></h2>
<p className="philosophy-quote reveal-slide-right reveal-delay-2">"Une plomberie d'excellence ne se remarque pas ; elle offre un confort <span>absolu et durable</span> au quotidien."</p>
<p className="philosophy-desc reveal-slide-right reveal-delay-3">Chez Expert Bâtiment, nous considérons chaque installation comme une œuvre de précision. Notre approche allie des matériaux nobles, une ingénierie thermique pointue et des solutions éco-responsables pour créer des espaces fonctionnels intemporels.</p>
<div className="philosophy-features reveal-slide-right reveal-delay-4">
<div className="philosophy-feature">
<div className="philosophy-feature-icon">
<iconify-icon icon="solar:waterdrop-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<div className="philosophy-feature-text">
<h4>Éco-responsabilité</h4>
<p>Nous intégrons des systèmes de gestion d'eau intelligents et de récupération de chaleur pour optimiser votre consommation et réduire votre empreinte.</p>
</div>
</div>
<div className="philosophy-feature">
<div className="philosophy-feature-icon">
<iconify-icon icon="solar:star-ring-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<div className="philosophy-feature-text">
<h4>Matériaux Nobles</h4>
<p>Cuivre, laiton, céramiques premium : nous privilégions la qualité et la durabilité des composants pour des finitions impeccables.</p>
</div>
</div>
<div className="philosophy-feature">
<div className="philosophy-feature-icon">
<iconify-icon icon="solar:ruler-cross-pen-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<div className="philosophy-feature-text">
<h4>Intervention Précise</h4>
<p>Chaque chantier est mené avec une rigueur absolue, respectant les normes les plus strictes et l'esthétique globale de votre intérieur.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<hr className="gradient-hr"/>
<section className="services section" id="services">
<div className="container">
<div className="services-header reveal">
<div>
<div className="section-label">Nos Domaines d'Intervention</div>
<h2 className="section-title">Expertises <em>complètes</em></h2>
</div>
<p>De la conception initiale à la mise en service, nous vous accompagnons à chaque étape de vos projets sanitaires et thermiques.</p>
</div>
<div className="services-grid stagger-scale">
<div className="service-card reveal-child">
<div className="service-card-number">01</div>
<div className="service-card-icon">
<iconify-icon icon="solar:bath-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3>Rénovation Salle de Bain</h3>
<p>Conception et installation complète de salles de bain haut de gamme. Douches à l'italienne, baignoires îlot et robinetterie encastrée sur-mesure.</p>
</div>
<div className="service-card reveal-child">
<div className="service-card-number">02</div>
<div className="service-card-icon">
<iconify-icon icon="solar:fire-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3>Chauffage &amp; Climatisation</h3>
<p>Solutions thermiques performantes : planchers chauffants, pompes à chaleur, chaudières à condensation et systèmes de régulation intelligents.</p>
</div>
<div className="service-card reveal-child">
<div className="service-card-number">03</div>
<div className="service-card-icon">
<iconify-icon icon="solar:washing-machine-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3>Installation Sanitaire</h3>
<p>Mise en place des réseaux d'alimentation et d'évacuation, installation de cumulus, adoucisseurs et équipements pour cuisines et buanderies.</p>
</div>
<div className="service-card reveal-child">
<div className="service-card-number">04</div>
<div className="service-card-icon">
<iconify-icon icon="solar:leaf-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3>Traitement de l'Eau</h3>
<p>Conseil et pose de systèmes de filtration, d'adoucissement et de purification pour protéger vos installations et garantir une eau saine.</p>
</div>
<div className="service-card reveal-child">
<div className="service-card-number">05</div>
<div className="service-card-icon">
<iconify-icon icon="solar:home-2-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3>Plomberie Extérieure</h3>
<p>Raccordements extérieurs, systèmes d'arrosage automatique de précision, raccordement de piscines et spas privatifs.</p>
</div>
<div className="service-card reveal-child">
<div className="service-card-number">06</div>
<div className="service-card-icon">
<iconify-icon icon="solar:tools-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3>Dépannage d'Urgence</h3>
<p>Intervention rapide et diagnostic précis pour la recherche de fuites, le débouchage et la réparation de vos équipements défectueux.</p>
</div>
</div>
</div>
</section>
<div className="marquee-section">
<div className="marquee-track">
<div className="marquee-item">
<span>Rénovation Haut de Gamme</span><div className="marquee-dot"></div>
<span>Installation Sur-Mesure</span><div className="marquee-dot"></div>
<span>Chauffage Éco-Performant</span><div className="marquee-dot"></div>
<span>Dépannage Rapide</span><div className="marquee-dot"></div>
<span>Matériaux Durables</span><div className="marquee-dot"></div>
</div>
<div className="marquee-item">
<span>Rénovation Haut de Gamme</span><div className="marquee-dot"></div>
<span>Installation Sur-Mesure</span><div className="marquee-dot"></div>
<span>Chauffage Éco-Performant</span><div className="marquee-dot"></div>
<span>Dépannage Rapide</span><div className="marquee-dot"></div>
<span>Matériaux Durables</span><div className="marquee-dot"></div>
</div>
</div>
</div>
<section className="projects section" id="projects">
<div className="container">
<div className="projects-header reveal">
<div className="section-label">Projets Récents</div>
<h2 className="section-title">La technique au service de <em>l'élégance</em></h2>
<p className="projects-subtitle">Découvrez une sélection de nos réalisations récentes, illustrant notre savoir-faire en plomberie et aménagement thermique.</p>
</div>
<div className="projects-grid stagger-clip">
<a className="project-card" href="#">
<img alt="Salle de bain moderne en marbre" className="project-card-image" loading="lazy" src="https://images.unsplash.com/photo-1552321554-5f0fc3ce106d?w=1200&amp;q=80"/>
<div className="project-card-overlay"></div>
<div className="project-card-content">
<div className="project-card-tags">
<span className="project-card-tag">Rénovation</span>
<span className="project-card-tag">Sanitaire</span>
</div>
<h3>Salle de Bain Minérale</h3>
<p>Aménagement complet d'une suite parentale avec douche à l'italienne, robinetterie encastrée en laiton brossé et chauffage invisible.</p>
</div>
<div className="project-card-arrow">
<iconify-icon icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
</a>
<a className="project-card" href="#">
<img alt="Installation de chauffage moderne" className="project-card-image" loading="lazy" src="https://images.unsplash.com/photo-1504333638930-c8787321efa0?w=800&amp;q=80"/>
<div className="project-card-overlay"></div>
<div className="project-card-content">
<div className="project-card-tags">
<span className="project-card-tag">Chauffage</span>
<span className="project-card-tag">Éco-Énergie</span>
</div>
<h3>Villa Contemporaine</h3>
<p>Installation d'une pompe à chaleur couplée à un plancher chauffant rafraîchissant pour un confort thermique optimal toute l'année.</p>
</div>
<div className="project-card-arrow">
<iconify-icon icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
</a>
<a className="project-card" href="#">
<img alt="Spa extérieur" className="project-card-image" loading="lazy" src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&amp;q=80"/>
<div className="project-card-overlay"></div>
<div className="project-card-content">
<div className="project-card-tags">
<span className="project-card-tag">Extérieur</span>
<span className="project-card-tag">Spa</span>
</div>
<h3>Espace Bien-être Extérieur</h3>
<p>Raccordement et mise en service d'un spa privatif et d'une douche extérieure avec système de filtration haute performance.</p>
</div>
<div className="project-card-arrow">
<iconify-icon icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
</a>
</div>
<div className="text-center mt-12 reveal">
<a className="btn btn-outline" href="#">
<span>Voir Tous les Projets</span>
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</a>
</div>
</div>
</section>
<section className="process section" id="process">
<div className="container">
<div className="process-header reveal">
<div className="section-label">Notre Méthodologie</div>
<h2 className="section-title">Une exécution <em>sans faille</em></h2>
</div>
<div className="process-steps stagger-soft">
<div className="process-step">
<div className="process-step-number"><span>01</span></div>
<h4>Diagnostic &amp; Étude</h4>
<p>Analyse de vos réseaux existants, contraintes techniques et définition précise de vos besoins thermiques ou sanitaires.</p>
</div>
<div className="process-step">
<div className="process-step-number"><span>02</span></div>
<h4>Devis Sur-Mesure</h4>
<p>Proposition transparente détaillée avec plan d'implantation et sélection rigoureuse des matériaux et équipements.</p>
</div>
<div className="process-step">
<div className="process-step-number"><span>03</span></div>
<h4>Installation Précise</h4>
<p>Réalisation des travaux par nos artisans qualifiés dans le strict respect des délais, des normes et de la propreté du chantier.</p>
</div>
<div className="process-step">
<div className="process-step-number"><span>04</span></div>
<h4>Mise en Service</h4>
<p>Tests rigoureux d'étanchéité, réglages thermiques, réception du chantier et conseils personnalisés d'entretien.</p>
</div>
</div>
</div>
</section>
<section className="testimonials section" id="testimonials">
<div className="container">
<div className="testimonials-header text-center reveal">
<div className="section-label">Retours d'Expérience</div>
<h2 className="section-title">Ce que disent nos <em>clients</em></h2>
</div>
<div className="testimonials-grid stagger-children">
<div className="testimonial-card">
<div className="testimonial-stars">
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5px'}}></iconify-icon><iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5px'}}></iconify-icon><iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5px'}}></iconify-icon><iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5px'}}></iconify-icon><iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<p className="testimonial-text">"L'équipe d'Expert Bâtiment a totalement repensé notre salle de bain. Le niveau de finition de la robinetterie encastrée et la précision de la pose sont remarquables. Un travail de véritables orfèvres."</p>
<div className="testimonial-author">
<img alt="Sarah Jenkins" className="testimonial-avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&amp;q=80"/>
<div className="testimonial-author-info">
<h5>Sophie Laurent</h5>
<p>Rénovation Complète</p>
</div>
</div>
</div>
<div className="testimonial-card">
<div className="testimonial-stars">
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5px'}}></iconify-icon><iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5px'}}></iconify-icon><iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5px'}}></iconify-icon><iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5px'}}></iconify-icon><iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<p className="testimonial-text">"Remplacement de notre vieille chaudière par une pompe à chaleur. Conseils avisés en amont, chantier d'une propreté clinique, et des économies d'énergie visibles dès le premier mois."</p>
<div className="testimonial-author">
<img alt="Marcus Chen" className="testimonial-avatar" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&amp;q=80"/>
<div className="testimonial-author-info">
<h5>Marc Dubois</h5>
<p>Installation Chauffage</p>
</div>
</div>
</div>
<div className="testimonial-card">
<div className="testimonial-stars">
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5px'}}></iconify-icon><iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5px'}}></iconify-icon><iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5px'}}></iconify-icon><iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5px'}}></iconify-icon><iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<p className="testimonial-text">"Intervention en urgence un dimanche pour une grosse fuite encastrée. Réactivité exceptionnelle, diagnostic immédiat et réparation durable. Des professionnels de grande confiance."</p>
<div className="testimonial-author">
<img alt="Elena Rostova" className="testimonial-avatar" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&amp;q=80"/>
<div className="testimonial-author-info">
<h5>Éléonore Morel</h5>
<p>Dépannage Urgence</p>
</div>
</div>
</div>
</div>
</div>
</section>
<div className="awards">
<div className="container awards-grid stagger-pop">
<div className="award-item">
<iconify-icon className="award-icon" icon="solar:medal-star-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span>Garantie<br/>Décennale</span>
</div>
<div className="award-item">
<iconify-icon className="award-icon" icon="solar:shield-check-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span>Artisan<br/>Reconnu RGE</span>
</div>
<div className="award-item">
<iconify-icon className="award-icon" icon="solar:verified-check-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span>Certification<br/>Qualibat</span>
</div>
<div className="award-item">
<iconify-icon className="award-icon" icon="solar:earth-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span>Partenaire<br/>Éco-Énergie</span>
</div>
<div className="award-item">
<iconify-icon className="award-icon" icon="solar:like-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span>Service Client<br/>d'Excellence</span>
</div>
</div>
</div>
<section className="blog section" id="journal">
<div className="container">
<div className="blog-header reveal">
<div>
<div className="section-label">Actualités &amp; Conseils</div>
<h2 className="section-title">Notre œil <em>d'expert</em></h2>
</div>
<a className="btn btn-outline hidden md:inline-flex" href="#">
<span>Tous les articles</span>
</a>
</div>
<div className="blog-grid stagger-scale">
<article className="blog-card">
<div className="blog-card-image-wrap">
<img alt="Tuyaux en cuivre" className="blog-card-image" loading="lazy" src="https://images.unsplash.com/photo-1505798577917-a65157d3320a?w=600&amp;q=80"/>
</div>
<div className="blog-card-content">
<div className="blog-card-meta">
<span className="blog-card-tag">Matériaux</span>
<span className="blog-card-date">12 Oct 2023</span>
</div>
<h3>Le retour du cuivre apparent</h3>
<p>Autrefois dissimulé, le réseau de tuyauterie en cuivre devient aujourd'hui un véritable élément architectural dans les intérieurs contemporains et industriels.</p>
<a className="blog-card-link" href="#">Lire l'article <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon></a>
</div>
</article>
<article className="blog-card">
<div className="blog-card-image-wrap">
<img alt="Goutte d'eau pure" className="blog-card-image" loading="lazy" src="https://images.unsplash.com/photo-1542013936693-884638332954?w=600&amp;q=80"/>
</div>
<div className="blog-card-content">
<div className="blog-card-meta">
<span className="blog-card-tag">Conseils</span>
<span className="blog-card-date">28 Sep 2023</span>
</div>
<h3>L'importance d'un adoucisseur d'eau</h3>
<p>Calcaire et tartre réduisent la durée de vie de vos équipements. Découvrez comment un système de traitement de l'eau protège votre tuyauterie et votre peau.</p>
<a className="blog-card-link" href="#">Lire l'article <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon></a>
</div>
</article>
<article className="blog-card">
<div className="blog-card-image-wrap">
<img alt="Robinetterie design" className="blog-card-image" loading="lazy" src="https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?w=600&amp;q=80"/>
</div>
<div className="blog-card-content">
<div className="blog-card-meta">
<span className="blog-card-tag">Tendance</span>
<span className="blog-card-date">04 Sep 2023</span>
</div>
<h3>Robinetterie : Les finitions tendance</h3>
<p>Laiton brossé, noir mat ou nickel poli : guide complet pour bien choisir les finitions de votre robinetterie selon l'ambiance de votre salle de bain.</p>
<a className="blog-card-link" href="#">Lire l'article <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon></a>
</div>
</article>
</div>
<div className="text-center mt-10 md:hidden reveal">
<a className="btn btn-outline" href="#">
<span>Tous les articles</span>
</a>
</div>
</div>
</section>
<section className="cta" id="contact">
<div className="cta-bg">
<div className="cta-bg-image"></div>
</div>
<div className="container cta-content reveal-zoom">
<div className="section-label" style={{marginBottom: '2rem', justifyContent: 'center'}}>Prêt à commencer ?</div>
<h2 className="cta-title">Concrétisons ensemble votre <em>projet</em>.</h2>
<p className="cta-text">Qu'il s'agisse d'une rénovation luxueuse, de l'installation d'un système thermique ou d'un conseil technique, nos experts sont à votre écoute.</p>
<div className="cta-actions">
<a className="btn-glow" href="mailto:contact@expert-batiment.fr">
<span>Demander une Étude</span>
</a>
</div>
</div>
</section>
<footer className="footer">
<div className="container">
<div className="footer-grid reveal-soft">
<div className="footer-brand">
<div className="footer-logo">Expert Bâtiment</div>
<p>Artisans plombiers-chauffagistes passionnés. L'alliance parfaite entre technicité de pointe, durabilité et design intérieur.</p>
<div className="footer-social">
<a aria-label="Instagram" href="#"><iconify-icon icon="solar:camera-linear" style={{strokeWidth: '1.5px'}}></iconify-icon></a>
<a aria-label="LinkedIn" href="#"><iconify-icon icon="solar:suitcase-linear" style={{strokeWidth: '1.5px'}}></iconify-icon></a>
</div>
</div>
<div className="footer-column">
<h4>Navigation</h4>
<ul>
<li><a href="#philosophy">Notre Philosophie</a></li>
<li><a href="#services">Nos Expertises</a></li>
<li><a href="#projects">Réalisations</a></li>
<li><a href="#process">Méthodologie</a></li>
<li><a href="#journal">Actualités</a></li>
</ul>
</div>
<div className="footer-column">
<h4>Contact</h4>
<ul>
<li><a href="mailto:contact@expert-batiment.fr"><span className="flex items-center gap-2"><iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5px'}}></iconify-icon> contact@expert-batiment.fr</span></a></li>
<li><a href="tel:+33123456789"><span className="flex items-center gap-2"><iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5px'}}></iconify-icon> 01 23 45 67 89</span></a></li>
<li><a href="#"><span className="flex items-start gap-2"><iconify-icon className="mt-1" icon="solar:map-point-linear" style={{strokeWidth: '1.5px'}}></iconify-icon> 42 Avenue Montaigne,<br/>75008 Paris</span></a></li>
</ul>
</div>
<div className="footer-column">
<h4>Newsletter</h4>
<p style={{fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '1rem', lineHeight: '1.6'}}>Recevez nos conseils d'entretien et actualités domotiques.</p>
<form onsubmit="event.preventDefault()" style={{display: 'flex', gap: '0.5rem'}}>
<input placeholder="Votre adresse email" required="" style={{width: '100%', background: 'rgba(193, 127, 89, 0.06)', border: '0.0625rem solid rgba(193, 127, 89, 0.2)', borderRadius: '0.375rem', padding: '0.6rem 1rem', color: 'var(--color-cream)', fontSize: '0.875rem', outline: 'none'}} type="email"/>
<button style={{background: 'var(--color-copper)', color: '#fff', borderRadius: '0.375rem', padding: '0 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s'}} type="submit"><iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon></button>
</form>
</div>
</div>
<div className="footer-bottom reveal-soft" style={{transitionDelay: '0.2s'}}>
<p>© 2023 Expert Bâtiment Plomberie. Tous droits réservés.</p>
<div className="footer-bottom-links">
<a href="#">Mentions Légales</a>
<a href="#">Politique de Confidentialité</a>
<a href="#">Cookies</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
