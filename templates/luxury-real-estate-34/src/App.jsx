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



      // Mobile Navigation Toggle
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

      // Navigation Background on Scroll
      const nav = document.getElementById('nav');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      });

      // Theme Toggle Functionality
      const themeToggle = document.getElementById('themeToggle');
      const iconSun = document.getElementById('iconSun');
      const iconMoon = document.getElementById('iconMoon');
      const htmlEl = document.documentElement;

      // Check local storage or system preference on load
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

      // Cursor Glow Effect
      const cursorGlow = document.getElementById('cursorGlow');
      let mouseX = window.innerWidth / 2;
      let mouseY = window.innerHeight / 2;

      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      // Smooth animate cursor to avoid lag
      function animateCursor() {
        cursorGlow.style.left = `${mouseX}px`;
        cursorGlow.style.top = `${mouseY}px`;
        requestAnimationFrame(animateCursor);
      }
      animateCursor();

      // Service Card Hover Effect (Light passing over)
      document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mousemove', e => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
        });
      });

      // WebGL-like Canvas Animation on Hero Button
      const canvas = document.getElementById('heroBtnCanvas');
      if (canvas) {
        const ctx = canvas.getContext('2d');
        let time = 0;

        function drawCanvas() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Draw subtle animated wave/gradient
          const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
          const stop1 = (Math.sin(time * 0.05) + 1) * 0.5; // Oscillates 0 to 1

          // Using theme-based transparent colors
          gradient.addColorStop(0, `rgba(193, 127, 89, ${0.1 + stop1 * 0.15})`);
          gradient.addColorStop(0.5, `rgba(201, 169, 110, ${0.1 + (1-stop1) * 0.15})`);
          gradient.addColorStop(1, `rgba(193, 127, 89, ${0.1 + stop1 * 0.15})`);

          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          // Draw subtle moving particles
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

      // Scroll Reveal Intersection Observer
      const revealElements = document.querySelectorAll(
        '.reveal, .reveal-clip-left, .reveal-slide-right, .reveal-clip-up, .reveal-pop, .reveal-zoom, .reveal-soft, .stagger-children, .stagger-scale, .stagger-blur, .stagger-pop, .stagger-draw, .stagger-soft, .stagger-clip'
      );

      const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      };

      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, revealOptions);

      revealElements.forEach(el => {
        revealObserver.observe(el);
      });
    


      const leadModal = document.getElementById('leadModal');
      const modalOverlayObj = document.getElementById('modalOverlay');
      const closeModalBtnObj = document.getElementById('closeModal');
      const modalContentObj = document.getElementById('modalContent');

      window.openLeadModal = function(e) {
        if(e) e.preventDefault();
        leadModal.classList.remove('hidden');
        leadModal.classList.add('flex');
        // Trigger reflow
        void leadModal.offsetWidth;
        leadModal.classList.remove('opacity-0');
        modalContentObj.classList.remove('scale-95');
        document.body.style.overflow = 'hidden';
      };

      window.closeLeadModal = function() {
        leadModal.classList.add('opacity-0');
        modalContentObj.classList.add('scale-95');
        setTimeout(() => {
          leadModal.classList.remove('flex');
          leadModal.classList.add('hidden');
          document.body.style.overflow = '';
        }, 300);
      };

      if(modalOverlayObj) modalOverlayObj.addEventListener('click', window.closeLeadModal);
      if(closeModalBtnObj) closeModalBtnObj.addEventListener('click', window.closeLeadModal);

      // Attach modal to buttons dynamically
      document.querySelectorAll('.btn, .nav-cta, .btn-hero-webgl').forEach(btn => {
        // Exclude actual submit buttons from taking this generic click handler just in case
        if (btn.type !== 'submit') {
          btn.addEventListener('click', window.openLeadModal);
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="cursor-glow" id="cursorGlow" style={{left: '1040px', top: '634px'}}></div>

<nav className="nav" id="nav">
<div className="container nav-inner">
<a className="nav-logo" href="#">VOLNA Residences</a>
<div className="nav-links">
<a className="nav-link" href="#philosophy">Le projet</a>
<a className="nav-link" href="#services">Infrastructures</a>
<a className="nav-link" href="#projects">Plans</a>
<a className="nav-link" href="#process">Investissement</a>
<a className="nav-link" href="#journal">Finitions</a>
</div>
<div className="flex items-center gap-3">
<a className="nav-cta hidden md:block" href="#contact">
<i className="nav-cta-shimmer"></i>
<span>Voir les prix</span>
</a>

<button aria-label="Toggle Theme" className="w-[38px] h-[38px] flex items-center justify-center rounded-full border border-[rgba(193,127,89,0.3)] text-[var(--color-copper-light)] hover:border-[var(--color-copper)] hover:bg-[rgba(193,127,89,0.08)] transition-all cursor-pointer z-10" id="themeToggle">
<iconify-icon className="text-lg hidden" icon="solar:sun-linear" id="iconSun"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:moon-linear" id="iconMoon"></iconify-icon>
</button>
<button aria-label="Toggle menu" className="nav-toggle" id="navToggle">
<span></span>
<span></span>
<span></span>
</button>
</div>
</div>
</nav>

<div className="nav-mobile-overlay" id="navMobile">
<a className="nav-link" href="#philosophy">Le projet</a>
<a className="nav-link" href="#services">Infrastructures</a>
<a className="nav-link" href="#projects">Plans</a>
<a className="nav-link" href="#process">Investissement</a>
<a className="nav-link" href="#journal">Finitions</a>
<a className="nav-cta" href="#contact" style={{marginTop: '1rem'}}>
<span>Voir les prix</span>
</a>
</div>

<section className="hero" id="hero" style={{alignItems: 'flex-start', paddingTop: 'clamp(8rem, 18vh, 12rem)'}}>
<div className="hero-bg">
<div aria-label="Rendu d’une piscine de resort de luxe et d’une architecture moderne" className="hero-bg-image" role="img" style={{background: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0b79ccc-3862-4252-a096-18b0ad95f225_1600w.jpg\') center/cover no-repeat'}}></div>
<div className="hero-bg-overlay"></div>
</div>
<div className="container hero-content">
<div className="hero-tag">Complexe premium à Sotchi</div>
<h1 className="hero-title">
          Première ligne
          <br/>
          à
          <em style={{filter: 'drop-shadow(0 5px 12px rgba(0,0,0,1))'}}>Sotchi</em>
</h1>
<p className="hero-description">
          VOLNA Residences — un grand projet balnéaire.
          <br/>
          Appartements avec services prêts à l’emploi, avec un revenu passif à
          partir de 5 000 000 ₽ par an.
        </p>
<div className="hero-actions">
<a className="btn-hero-webgl" href="#projects" id="heroBtn">
<canvas height="51" id="heroBtnCanvas" width="220"></canvas>
<span className="btn-hero-webgl-text">
              Recevoir les plans
              <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</span>
</a>
<a className="btn btn-outline" href="#philosophy">
<span>Télécharger la présentation</span>
</a>
</div>
<div className="hero-stats">
<div className="hero-stat">
<div className="hero-stat-number">50 м</div>
<div className="hero-stat-label">Jusqu’au rivage</div>
</div>
<div className="hero-stat">
<div className="hero-stat-number">6</div>
<div className="hero-stat-label">Hôtels sur le site</div>
</div>
<div className="hero-stat">
<div className="hero-stat-number">10 га</div>
<div className="hero-stat-label">Superficie du resort</div>
</div>
</div>
</div>
</section>

<section className="philosophy section" id="philosophy">
<div className="container">
<div className="philosophy-grid">
<div className="philosophy-image reveal-clip-left">
<img alt="Sustainable building with living green wall and natural stone facade" className="bg-center object-cover" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/84a904e6-a770-445b-b0c2-973ef50211e3_3840w.png" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/84a904e6-a770-445b-b0c2-973ef50211e3_3840w.png"/>
</div>
<div className="philosophy-text">
<div className="section-label reveal-slide-right">Le projet</div>
<h2 className="section-title reveal-slide-right reveal-delay-1">
              Un nouveau niveau de
              <em>vie balnéaire</em>
</h2>
<p className="philosophy-quote reveal-slide-right reveal-delay-2">
              “Le vrai luxe, c’est un
              <span>service irréprochable</span>
              et l’harmonie avec la nature.”
            </p>
<p className="philosophy-desc reveal-slide-right reveal-delay-3">
              VOLNA Residences — un projet d’investissement d’envergure en
              première ligne. Le complexe est conçu pour celles et ceux qui
              apprécient l’esthétique, l’intimité et le plus haut niveau de
              service hôtelier.
            </p>
<div className="philosophy-features reveal-slide-right reveal-delay-4">
<div className="philosophy-feature">
<div className="philosophy-feature-icon">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:leaf-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.25 2.083a3.5 3.5 0 0 0-.713.243C6.553 4.188 4 9.395 4 13.856c0 4.24 3.183 7.724 7.25 8.109zm1.5 19.882c4.067-.385 7.25-3.868 7.25-8.108q0-.61-.063-1.234l-7.187 7.188zM18.26 7.18a13.4 13.4 0 0 0-1.34-2.04l-4.17 4.17v3.38zm-2.352-3.15a9.2 9.2 0 0 0-2.445-1.704a3.5 3.5 0 0 0-.713-.243v5.106zm3.028 4.594l-6.186 6.187v2.878l6.75-6.75l.132-.132a15 15 0 0 0-.696-2.183" fill="currentColor"></path>
</svg>
</div>
<div className="philosophy-feature-text">
                  Conditions d’achat uniques directement auprès du promoteur.
                  Livraison prévue en 2027.
                </div>
</div>
<div className="philosophy-feature">
<div className="philosophy-feature-icon">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:pallete-2-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10.847 21.934C5.867 21.362 2 17.133 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.157-3.283 4.733-6.086 4.37c-1.618-.209-3.075-.397-3.652.518c-.395.626.032 1.406.555 1.929a1.673 1.673 0 0 1 0 2.366c-.523.523-1.235.836-1.97.751M11.085 7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M6.5 13a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m11 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-3-4.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<div className="philosophy-feature-text">
                  Les appartements sont livrés avec une rénovation premium, le
                  mobilier et l’électroménager encastré.
                </div>
</div>
<div className="philosophy-feature">
<div className="philosophy-feature-icon">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:compass-big-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" clip-rule="evenodd" d="M3.554 21.529c1.797 1.221 4.943-.038 11.236-2.554c1.342-.537 2.013-.806 2.54-1.267q.201-.177.378-.378c.461-.527.73-1.198 1.267-2.54c2.515-6.293 3.775-9.44 2.554-11.236a4.1 4.1 0 0 0-1.083-1.083c-1.797-1.221-4.944.037-11.236 2.554c-1.342.537-2.013.806-2.54 1.267q-.201.177-.378.378c-.461.527-.73 1.198-1.267 2.54c-2.517 6.292-3.775 9.439-2.554 11.236c.29.426.657.793 1.083 1.083M8.25 12a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m1.5 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<div className="philosophy-feature-text">
                  Le climat doux de Sotchi et l’infrastructure développée
                  garantissent un revenu locatif stable.
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
          Vous n’aurez pas besoin de quitter le complexe pour profiter d’un
          séjour idéal sur la côte.
        </div>
<div className="services-grid stagger-scale">
<div className="service-card reveal-child">
            Bain panoramique avec vue sur la mer, rituels spa premium et vastes
            salles de massage.
          </div>
<div className="service-card reveal-child" style={{-MouseX: '395px', -MouseY: '241.21875px'}}>
            Piscines à débordement chauffées toute l’année à l’eau de mer,
            entourées d’espaces lounge.
          </div>
<div className="service-card reveal-child" style={{-MouseX: '5px', -MouseY: '207.21875px'}}>
            Cuisine d’auteur, cave à vins et club cigare privé exclusivement
            réservé aux résidents.
          </div>
<div className="service-card reveal-child" style={{-MouseX: '433px', -MouseY: '224px'}}>
            Programmes de bien-être avancés et diagnostics premium sur des
            équipements modernes.
          </div>
<div className="service-card reveal-child" style={{-MouseX: '193px', -MouseY: '217px'}}>
            Clubs de fitness, courts de tennis, espaces de yoga et école de surf
            professionnelle.
          </div>
<div className="service-card reveal-child">
            Espaces interactifs éducatifs, cinéma et animations quotidiennes
            pour les enfants.
          </div>
</div>
</div>
</section>

<div className="marquee-section">
<div className="marquee-track">
<div className="marquee-item">Paiement échelonné 0%</div>
<div className="marquee-item">Paiement échelonné 0%</div>
</div>
</div>

<section className="projects section" id="projects">
<div className="container">
<div className="projects-header reveal">
<div className="section-label">Choix des plans</div>
<h2 className="section-title">
            Collection
            <em>d’appartements</em>
</h2>
<p className="projects-subtitle">
            20 types de plans : des studios ergonomiques aux penthouses luxueux
            avec terrasses.
          </p>
</div>
<div className="projects-grid stagger-clip">
<a className="project-card" href="#">
            35 m², balcon avec vue sur les montagnes. Un espace ergonomique pour
            un séjour confortable et la location.
          </a>
<a className="project-card" href="#">
            55 m², grande chambre et cuisine-salon avec fenêtres panoramiques et
            vue directe sur la mer.
          </a>
<a className="project-card" href="#">
            120 m², lot exclusif au dernier étage avec piscine privée et vue à
            360°.
          </a>
</div>
<div className="text-center mt-12 reveal">
<a className="btn btn-outline" href="#">
<span>Catalogue des plans</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="process section" id="process">
<div className="container">
<div className="process-header reveal">
<div className="section-label">Investissement</div>
<h2 className="section-title">
            Un modèle
            <em>transparent</em>
</h2>
</div>
<div className="process-steps stagger-soft">
<div className="process-step">
            Acquisition d’un bien premium en phase de construction avec un
            potentiel de hausse maximal.
          </div>
<div className="process-step">
            Un opérateur professionnel prend en charge la recherche de
            locataires, le ménage et la maintenance.
          </div>
<div className="process-step">
            Versements dès 5 000 000 ₽ par an sur votre compte,
            sans implication personnelle dans l’opérationnel.
          </div>
<div className="process-step">
            Possibilité de séjourner gratuitement dans vos appartements avec
            service 5★ jusqu’à 4 semaines par an.
          </div>
</div>
</div>
</section>

<section className="layouts section" id="layouts" style={{backgroundColor: 'var(--color-bg)'}}>
<div className="container">
<div className="text-center mb-12 md:mb-16">
<h2 className="section-title" style={{fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)'}}>
            Le projet se distingue par une grande variété
            <br className="hidden md:block"/>
<em style={{color: 'var(--color-sage) !important'}}>de plans</em>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
<div className="md:p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:border-[rgba(193,127,89,0.3)] text-center border-[rgba(193,127,89,0.1)] border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-xl items-center">
            Revenu passif via la mise en gestion, avec la possibilité d’y
            séjourner 4 semaines par an
          </div>
<div className="bg-[var(--color-bg-elevated)] rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[rgba(193,127,89,0.1)] hover:border-[rgba(193,127,89,0.3)]">
            Revenu passif via la mise en gestion, avec la possibilité d’y
            séjourner 4 semaines par an
          </div>
<div className="bg-[var(--color-bg-elevated)] rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[rgba(193,127,89,0.1)] hover:border-[rgba(193,127,89,0.3)]">
            Revenu passif via la mise en gestion, avec la possibilité d’y
            séjourner 4 semaines par an
          </div>
<div className="bg-[var(--color-bg-elevated)] rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[rgba(193,127,89,0.1)] hover:border-[rgba(193,127,89,0.3)]">
            Revenu passif via la mise en gestion, avec la possibilité d’y
            séjourner 4 semaines par an
          </div>
<div className="bg-[var(--color-bg-elevated)] rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[rgba(193,127,89,0.1)] hover:border-[rgba(193,127,89,0.3)]">
            Revenu passif via la mise en gestion, avec la possibilité d’y
            séjourner 4 semaines par an
          </div>
<div className="bg-[var(--color-bg-elevated)] rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[rgba(193,127,89,0.1)] hover:border-[rgba(193,127,89,0.3)]">
            Revenu passif via la mise en gestion, avec la possibilité d’y
            séjourner 4 semaines par an
          </div>
<div className="bg-[var(--color-bg-elevated)] rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[rgba(193,127,89,0.1)] hover:border-[rgba(193,127,89,0.3)]">
            Revenu passif via la mise en gestion, avec la possibilité d’y
            séjourner 4 semaines par an
          </div>
<div className="bg-[var(--color-bg-elevated)] rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[rgba(193,127,89,0.1)] hover:border-[rgba(193,127,89,0.3)]">
            Revenu passif via la mise en gestion, avec la possibilité d’y
            séjourner 4 semaines par an
          </div>
<div className="bg-[var(--color-bg-elevated)] rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[rgba(193,127,89,0.1)] hover:border-[rgba(193,127,89,0.3)]">
<div className="bg-[var(--color-sage)] text-[#F5F0EB] text-[0.65rem] font-medium tracking-widest uppercase py-1.5 px-4 rounded-full mb-6">
              Лучший выбор
            </div>
<div className="w-full mb-6 flex items-center justify-center overflow-hidden rounded-lg aspect-[5/4]">
<img alt="План этажа" className="w-full h-full object-cover grayscale opacity-70 transition-all duration-400" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d4bf6e94-f191-4b0d-b6c1-5b9185a3d67f_3840w.png" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d4bf6e94-f191-4b0d-b6c1-5b9185a3d67f_3840w.png"/>
</div>
<h3 className="text-[var(--color-cream)] text-xl mb-3 transition-colors duration-400" style={{fontFamily: 'var(--font-display)'}}>
              OPTION N°9
            </h3>
<p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6 transition-colors duration-400">
              Пассивный доход от сдачи номера в управление с возможностью
              проживания 4 недели в году
            </p>
<div className="w-full flex flex-col gap-3 mb-8 text-left border-t border-[rgba(193,127,89,0.15)] pt-6 transition-colors duration-400">
<div className="flex items-center gap-3 text-[var(--color-text-muted)] text-sm font-medium transition-colors duration-400">
<iconify-icon className="text-[var(--color-sage)] text-lg flex-shrink-0 transition-colors duration-400" icon="solar:buildings-2-bold"></iconify-icon>
<span>Корпус №2, Этаж №3</span>
</div>
<div className="flex items-center gap-3 text-[var(--color-text-muted)] text-sm font-medium transition-colors duration-400">
<iconify-icon className="text-[var(--color-sage)] text-lg flex-shrink-0 transition-colors duration-400" icon="solar:map-point-bold"></iconify-icon>
<span>50 м до моря</span>
</div>
<div className="flex items-center gap-3 text-[var(--color-text-muted)] text-sm font-medium transition-colors duration-400">
<iconify-icon className="text-[var(--color-sage)] text-lg flex-shrink-0 transition-colors duration-400" icon="solar:ruler-bold"></iconify-icon>
<span>Площадь: 41.63 м²</span>
</div>
</div>
<button className="btn btn-outline w-full justify-center mt-auto">
              CONNAÎTRE LE PRIX
            </button>
</div>
</div>
</div>
</section>


<div className="awards">
<div className="container awards-grid stagger-pop">
<div className="award-item">
<iconify-icon aria-label="Haute liquidité" className="award-icon" icon="solar:cup-first-bold-duotone"></iconify-icon>
<span>
            Haute
            <br/>
            liquidité
          </span>
</div>
<div className="award-item">
<iconify-icon className="award-icon" icon="solar:leaf-bold-duotone"></iconify-icon>
<span>
            Promoteur
            <br/>
            fiable
          </span>
</div>
<div className="award-item">
<iconify-icon className="award-icon" icon="solar:medal-star-circle-bold-duotone"></iconify-icon>
<span>
            Opérateur hôtelier
            <br/>
            5★
          </span>
</div>
<div className="award-item">
<iconify-icon className="award-icon" icon="solar:global-bold-duotone"></iconify-icon>
<span>
            Première
            <br/>
            ligne de mer
          </span>
</div>
<div className="award-item">
<iconify-icon className="award-icon" icon="solar:buildings-3-bold-duotone"></iconify-icon>
<span>
            Croissance du capital
            <br/>
            jusqu’à 30%
          </span>
</div>
</div>
</div>

<section className="blog section" id="journal">
<div className="container">
<div className="blog-header reveal">
<div>
<div className="section-label">Espaces intérieurs</div>
<h2 className="section-title">
              Finitions
              <em>irréprochables</em>
</h2>
</div>
<a className="btn btn-outline hidden md:inline-flex" href="#">
<span>Télécharger le projet design</span>
</a>
</div>
<div className="blog-grid stagger-scale">
<article className="blog-card">
            Utilisation de pierre naturelle, de bois massif d’essences nobles et
            de revêtements écologiques. Le projet a été conçu par un bureau
            d’architecture de premier plan.
          </article>
<article className="blog-card">
            Les appartements sont prêts à vivre ou à louer. Ils sont équipés de
            mobilier design, de textiles premium et d’électroménager.
          </article>
<article className="blog-card">
            Contrôle intégré du climat, de l’éclairage multi-niveaux, des
            rideaux et des systèmes de sécurité directement depuis votre
            smartphone.
          </article>
</div>
<div className="text-center mt-10 md:hidden reveal">
<a className="btn btn-outline" href="#">Télécharger le projet design</a>
</div>
</div>
</section>

<section className="cta" id="contact">
<div className="cta-bg">
<div className="cta-bg-image"></div>
</div>
<div className="container cta-content reveal-zoom">
<div className="section-label" style={{marginBottom: '2rem', justifyContent: 'center'}}>
          Prêt à investir ?
        </div>
<h2 className="cta-title">
          Investissez dans le
          <em>resort du futur</em>
</h2>
<p className="cta-text">
          Laissez une demande pour recevoir le business plan de rentabilité, le
          catalogue privé des plans et des conditions d’achat personnalisées.
        </p>
<div className="mt-4">
<form className="flex flex-col gap-4 max-w-md mx-auto w-full" onsubmit="event.preventDefault()">
<div className="flex flex-col gap-4 sm:flex-row">
<input className="w-full bg-[rgba(193,127,89,0.06)] border border-[rgba(193,127,89,0.2)] rounded-lg px-4 py-3 text-[var(--color-cream)] text-sm outline-none focus:border-[var(--color-copper)] transition-colors placeholder-[var(--color-text-muted)]" placeholder="Nom" required="" type="text"/>
<input className="w-full bg-[rgba(193,127,89,0.06)] border border-[rgba(193,127,89,0.2)] rounded-lg px-4 py-3 text-[var(--color-cream)] text-sm outline-none focus:border-[var(--color-copper)] transition-colors placeholder-[var(--color-text-muted)]" placeholder="Téléphone" required="" type="tel"/>
</div>
<input className="w-full bg-[rgba(193,127,89,0.06)] border border-[rgba(193,127,89,0.2)] rounded-lg px-4 py-3 text-[var(--color-cream)] text-sm outline-none focus:border-[var(--color-copper)] transition-colors placeholder-[var(--color-text-muted)]" placeholder="E-mail" required="" type="email"/>
<button className="btn-glow w-full justify-center mt-2 border-none cursor-pointer flex items-center" type="submit">
              Recevoir une estimation de rentabilité
            </button>
<p className="text-[0.7rem] text-[var(--color-text-subtle)] mt-2 text-center">
              En cliquant sur le bouton, vous acceptez la politique de
              confidentialité.
            </p>
</form>
</div>
</div>
</section>

<footer className="footer">
<div className="container">
<div className="footer-grid reveal-soft">
<div className="footer-brand">
<div className="footer-logo">VOLNA Residences</div>
<p>
              Un grand projet d’investissement à Sotchi. Appartements avec
              services premium, avec des revenus à partir de
              5 000 000 ₽ par an.
            </p>
<div className="footer-social">
<a aria-label="Instagram" href="#">
<iconify-icon icon="fa6-brands:instagram"></iconify-icon>
</a>
<a aria-label="LinkedIn" href="#">
<iconify-icon icon="fa6-brands:linkedin-in"></iconify-icon>
</a>
<a aria-label="Pinterest" href="#">
<iconify-icon icon="fa6-brands:pinterest-p"></iconify-icon>
</a>
<a aria-label="Twitter" href="#">
<iconify-icon icon="fa6-brands:x-twitter"></iconify-icon>
</a>
</div>
</div>
<div className="footer-column">
<h4>Menu</h4>
<ul>
<li><a href="#philosophy">Le projet</a></li>
<li><a href="#services">Infrastructures</a></li>
<li><a href="#projects">Plans</a></li>
<li><a href="#process">Modèle de revenus</a></li>
<li><a href="#journal">Finitions</a></li>
</ul>
</div>
<div className="footer-column">
<h4>Contacts</h4>
<ul>
<li>
<a href="mailto:hello@volna-sochi.ru">hello@volna-sochi.ru</a>
</li>
<li><a href="tel:+78000000000">+7 (800) 000-00-00</a></li>
<li>
<a href="#">
                  Sotchi,
                  <br/>
                  Avenue Kurortny, 1
                </a>
</li>
</ul>
</div>
<div className="footer-column">
<h4>
              Laissez vos coordonnées pour recevoir une présentation détaillée
              du projet et la liste des prix.
            </h4>
<p style={{fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1rem', lineHeight: '1.6'}}>
              Оставьте свои контакты, чтобы получить подробную презентацию
              проекта и прайс-лист.
            </p>
<form className="flex flex-col gap-3" onsubmit="event.preventDefault()">
<input className="w-full bg-[rgba(193,127,89,0.06)] border border-[rgba(193,127,89,0.2)] rounded-md px-4 py-2.5 text-[var(--color-cream)] text-sm outline-none focus:border-[var(--color-copper)] transition-colors placeholder-[var(--color-text-muted)]" placeholder="Nom" required="" type="text"/>
<input className="w-full bg-[rgba(193,127,89,0.06)] border border-[rgba(193,127,89,0.2)] rounded-md px-4 py-2.5 text-[var(--color-cream)] text-sm outline-none focus:border-[var(--color-copper)] transition-colors placeholder-[var(--color-text-muted)]" placeholder="Téléphone" required="" type="tel"/>
<input className="w-full bg-[rgba(193,127,89,0.06)] border border-[rgba(193,127,89,0.2)] rounded-md px-4 py-2.5 text-[var(--color-cream)] text-sm outline-none focus:border-[var(--color-copper)] transition-colors placeholder-[var(--color-text-muted)]" placeholder="E-mail" required="" type="email"/>
<button className="bg-[var(--color-copper)] hover:bg-[var(--color-terracotta)] rounded-md px-4 py-3 flex items-center justify-center transition-colors text-xs tracking-widest uppercase font-medium border-none cursor-pointer mt-1 text-black" type="submit">
                Recevoir la présentation
              </button>
</form>
</div>
</div>
<div className="footer-bottom reveal-soft">
<p>© 2024 VOLNA Residences. Tous droits réservés.</p>
<div className="footer-bottom-links">
<a href="#">Politique de confidentialité</a>
<a href="#">Offre</a>
<a href="#">Fichiers cookie</a>
</div>
</div>
</div>
</footer>


<div className="fixed inset-0 z-[1000] hidden items-center justify-center opacity-0 transition-all duration-300" id="leadModal">
<div className="absolute inset-0 bg-[#0F0F0E]/80 backdrop-blur-sm" id="modalOverlay"></div>
<div className="relative bg-[var(--color-bg-elevated)] border border-[rgba(193,127,89,0.2)] rounded-2xl max-w-4xl w-full mx-4 shadow-2xl transform scale-95 transition-all duration-300 flex flex-col md:flex-row overflow-hidden" id="modalContent">
        Laissez vos coordonnées et nous vous enverrons la présentation, les
        plans et l’estimation de rentabilité par le moyen qui vous convient. Pas
        de spam ni d’appels insistants.
      </div>
</div>


    </>
  );
}
