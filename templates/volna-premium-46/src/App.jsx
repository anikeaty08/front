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
<a className="nav-link" href="#philosophy">О проекте</a>
<a className="nav-link" href="#services">Инфраструктура</a>
<a className="nav-link" href="#projects">Планировки</a>
<a className="nav-link" href="#process">Инвестиции</a>
<a className="nav-link" href="#journal">Отделка</a>
</div>
<div className="flex items-center gap-3">
<a className="nav-cta hidden md:block" href="#contact">
<i className="nav-cta-shimmer"></i>
<span className="">Узнать цены</span>
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
<a className="nav-link" href="#philosophy">О проекте</a>
<a className="nav-link" href="#services">Инфраструктура</a>
<a className="nav-link" href="#projects">Планировки</a>
<a className="nav-link" href="#process">Инвестиции</a>
<a className="nav-link" href="#journal">Отделка</a>
<a className="nav-cta" href="#contact" style={{marginTop: '1rem'}}>
<span>Узнать цены</span>
</a>
</div>

<section className="hero" id="hero" style={{alignItems: 'flex-start', paddingTop: 'clamp(8rem, 18vh, 12rem)'}}>
<div className="hero-bg">
<div aria-label="Luxury Resort Pool and Modern Architecture Rendering" className="hero-bg-image" role="img" style={{background: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0b79ccc-3862-4252-a096-18b0ad95f225_1600w.jpg\') center/cover no-repeat'}}></div>
<div className="hero-bg-overlay"></div>
</div>
<div className="container hero-content">
<div className="hero-tag">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:buildings-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M15 2h2c1.886 0 2.828 0 3.414.586S21 4.114 21 6v15.25h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h1V9c0-1.886 0-2.828.586-3.414S5.114 5 7 5h4c1.886 0 2.828 0 3.414.586S15 7.114 15 9v12.25h1.5V8.91c0-.865 0-1.659-.087-2.304c-.095-.711-.32-1.463-.938-2.08c-.618-.619-1.37-.844-2.08-.94c-.637-.085-1.418-.086-2.269-.086c.084-.387.225-.68.46-.914C12.172 2 13.114 2 15 2M5.25 8A.75.75 0 0 1 6 7.25h6a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 8m0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75M9 18.25a.75.75 0 0 1 .75.75v2.25h-1.5V19a.75.75 0 0 1 .75-.75" fill="currentColor" fill-rule="evenodd"></path>
</svg>
          Премиальный курорт в Сочи
        </div>
<h1 className="hero-title">
          Первая береговая линия
          <br className=""/>
          в
          <em className="" style={{filter: 'drop-shadow(0 5px 12px rgba(0,0,0,1))'}}>
            Сочи
          </em>
</h1>
<p className="hero-description">VOLNA Residences — масштабный курортный проект. <br className=""/> Готовые сервисные апартаменты с пассивным доходом от 5 000 000 ₽ в год.
</p>
<div className="hero-actions">
<a className="btn-hero-webgl" href="#projects" id="heroBtn">
<canvas height="51" id="heroBtnCanvas" width="220"></canvas>
<span className="btn-hero-webgl-text">
              Получить планировки
              <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</span>
</a>
<a className="btn btn-outline" href="#philosophy">
<span className="">Скачать презентацию</span>
</a>
</div>
<div className="hero-stats">
<div className="hero-stat">
<div className="hero-stat-number">50 м</div>
<div className="hero-stat-label">До берега моря</div>
</div>
<div className="hero-stat">
<div className="hero-stat-number">6</div>
<div className="hero-stat-label">Отелей на территории</div>
</div>
<div className="hero-stat">
<div className="hero-stat-number">10 га</div>
<div className="hero-stat-label">Площадь курорта</div>
</div>
</div>
</div>
</section>

<section className="philosophy section" id="philosophy">
<div className="container">
<div className="philosophy-grid">
<div className="philosophy-image reveal-clip-left">
<img alt="Sustainable building with living green wall and natural stone facade" className="bg-center object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fd94331e-d343-42f7-a761-6a4ff8236725_1600w.webp"/>
</div>
<div className="philosophy-text">
<div className="section-label reveal-slide-right">О проекте</div>
<h2 className="section-title reveal-slide-right reveal-delay-1">
              Новый уровень
              <em>курортной жизни</em>
</h2>
<p className="philosophy-quote reveal-slide-right reveal-delay-2">
              "Истинная роскошь — это
              <span>безупречный сервис</span>
              и гармония с окружающей природой."
            </p>
<p className="philosophy-desc reveal-slide-right reveal-delay-3">
              VOLNA Residences — масштабный инвестиционный проект на первой
              береговой линии. Комплекс спроектирован для тех, кто ценит
              эстетику, приватность и высочайший уровень отельного обслуживания.
            </p>
<div className="philosophy-features reveal-slide-right reveal-delay-4">
<div className="philosophy-feature">
<div className="philosophy-feature-icon">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:leaf-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.25 2.083a3.5 3.5 0 0 0-.713.243C6.553 4.188 4 9.395 4 13.856c0 4.24 3.183 7.724 7.25 8.109zm1.5 19.882c4.067-.385 7.25-3.868 7.25-8.108q0-.61-.063-1.234l-7.187 7.188zM18.26 7.18a13.4 13.4 0 0 0-1.34-2.04l-4.17 4.17v3.38zm-2.352-3.15a9.2 9.2 0 0 0-2.445-1.704a3.5 3.5 0 0 0-.713-.243v5.106zm3.028 4.594l-6.186 6.187v2.878l6.75-6.75l.132-.132a15 15 0 0 0-.696-2.183" fill="currentColor"></path>
</svg>
</div>
<div className="philosophy-feature-text">
<h4 className="">Рассрочка 0%</h4>
<p className="">
                    Уникальные условия покупки напрямую от застройщика. Плановая
                    сдача комплекса в 2027 году.
                  </p>
</div>
</div>
<div className="philosophy-feature">
<div className="philosophy-feature-icon">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:pallete-2-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10.847 21.934C5.867 21.362 2 17.133 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.157-3.283 4.733-6.086 4.37c-1.618-.209-3.075-.397-3.652.518c-.395.626.032 1.406.555 1.929a1.673 1.673 0 0 1 0 2.366c-.523.523-1.235.836-1.97.751M11.085 7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M6.5 13a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m11 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-3-4.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<div className="philosophy-feature-text">
<h4 className="">Готовая отделка</h4>
<p className="">
                    Апартаменты сдаются с премиальным ремонтом, меблировкой и
                    встроенной бытовой техникой.
                  </p>
</div>
</div>
<div className="philosophy-feature">
<div className="philosophy-feature-icon">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:compass-big-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" clip-rule="evenodd" d="M3.554 21.529c1.797 1.221 4.943-.038 11.236-2.554c1.342-.537 2.013-.806 2.54-1.267q.201-.177.378-.378c.461-.527.73-1.198 1.267-2.54c2.515-6.293 3.775-9.44 2.554-11.236a4.1 4.1 0 0 0-1.083-1.083c-1.797-1.221-4.944.037-11.236 2.554c-1.342.537-2.013.806-2.54 1.267q-.201.177-.378.378c-.461.527-.73 1.198-1.267 2.54c-2.517 6.292-3.775 9.439-2.554 11.236c.29.426.657.793 1.083 1.083M8.25 12a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m1.5 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<div className="philosophy-feature-text">
<h4 className="">Круглогодичный спрос</h4>
<p className="">
                    Мягкий климат Сочи и развитая инфраструктура обеспечивают
                    стабильный арендный доход.
                  </p>
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
<div className="">
<div className="section-label">Инфраструктура</div>
<h2 className="section-title">
              Курорт
              <em className="">внутри</em>
              курорта
            </h2>
</div>
<p className="">
            Вам не придется покидать территорию комплекса, чтобы насладиться
            идеальным отдыхом на побережье.
          </p>
</div>
<div className="services-grid stagger-scale">
<div className="service-card reveal-child">
<div className="service-card-number">01</div>
<div className="service-card-icon">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:buildings-2-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M21.25 8.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552c-.441-.295-1.034-.332-2.115-.336q.005.438.004.91V7.25h1a.75.75 0 0 1 0 1.5h-1v1.5h1a.75.75 0 0 1 0 1.5h-1v1.5h1a.75.75 0 0 1 0 1.5h-1v6.5h-1.5V6c0-1.886 0-2.828-.586-3.414S14.636 2 12.75 2h-2c-1.886 0-2.828 0-3.414.586S6.75 4.114 6.75 6v15.25h-1.5v-6.5h-1a.75.75 0 0 1 0-1.5h1v-1.5h-1a.75.75 0 0 1 0-1.5h1v-1.5h-1a.75.75 0 0 1 0-1.5h1V5.91q-.001-.47.004-.91c-1.081.005-1.674.042-2.115.337a2 2 0 0 0-.552.552C2.25 6.393 2.25 7.096 2.25 8.5v12.75h-.5a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-.5zM9 11.75a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m2.75 3.5a.75.75 0 0 1 .75.75v2.25H11V19a.75.75 0 0 1 .75-.75M9 6.25a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9 6.25m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9 9.25" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<h3>SPA и Бани</h3>
<p>
              Панорамная баня с видом на море, премиальные спа-ритуалы и
              просторные массажные кабинеты.
            </p>
</div>
<div className="service-card reveal-child" style={{-MouseX: '395px', -MouseY: '241.21875px'}}>
<div className="service-card-number">02</div>
<div className="service-card-icon">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:sofa-2-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M7 13v-1a3 3 0 0 0-2.993-3c.008-.328.027-.566.07-.78A4 4 0 0 1 7.22 5.077C7.606 5 8.07 5 9 5h2.25v8zm5.75 0H17v-1a3 3 0 0 1 2.993-3a4.6 4.6 0 0 0-.07-.78a4 4 0 0 0-3.143-3.143C16.394 5 15.93 5 15 5h-2.25z" fill="currentColor"></path>
<path d="M18.444 18H5.556a3.6 3.6 0 0 1-.806-.092V19a.75.75 0 0 1-1.5 0v-1.849A3.55 3.55 0 0 1 2 14.444V12a2 2 0 1 1 4 0v1.2a.8.8 0 0 0 .8.8h10.4a.8.8 0 0 0 .8-.8V12a2 2 0 1 1 4 0v2.444a3.55 3.55 0 0 1-1.25 2.707V19a.75.75 0 0 1-1.5 0v-1.092a3.6 3.6 0 0 1-.806.092" fill="currentColor"></path>
</svg>
</div>
<h3 className="">5 Открытых бассейнов</h3>
<p className="">
              Круглогодичные инфинити-бассейны с подогревом и морской водой,
              окруженные лаунж-зонами.
            </p>
</div>
<div className="service-card reveal-child" style={{-MouseX: '5px', -MouseY: '207.21875px'}}>
<div className="service-card-number">03</div>
<div className="service-card-icon">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:streets-map-point-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M21.89 7.172C22 8.433 22 10.006 22 12c0 4.134 0 6.455-.987 7.951L15.06 14zm-1.938 13.84L14 15.06l-6.828 6.83C8.433 22 10.006 22 12 22c4.134 0 6.456 0 7.952-.988" fill="currentColor"></path>
<path clip-rule="evenodd" d="M12 2c4.714 0 7.071 0 8.535 1.464c.504.504.835 1.114 1.052 1.889L5.353 21.587c-.775-.217-1.385-.548-1.889-1.052C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2M5.5 8.757c0 1.785 1.117 3.868 2.86 4.613c.406.173.874.173 1.28 0c1.743-.745 2.86-2.828 2.86-4.613C12.5 6.958 10.933 5.5 9 5.5S5.5 6.958 5.5 8.757" fill="currentColor" fill-rule="evenodd"></path>
<path d="M10.5 9a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" fill="currentColor"></path>
</svg>
</div>
<h3 className="">Рестораны и Бары</h3>
<p className="">
              Авторская кухня, винная комната и закрытый сигарный клуб
              исключительно для резидентов.
            </p>
</div>
<div className="service-card reveal-child" style={{-MouseX: '433px', -MouseY: '224px'}}>
<div className="service-card-number">04</div>
<div className="service-card-icon">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:lightbulb-bolt-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M11.5 2C7.358 2 4 5.436 4 9.674c0 2.273.966 4.315 2.499 5.72c.51.467.889.814 1.157 1.066a15 15 0 0 1 .4.39l.033.036c.237.3.288.376.318.446s.053.16.112.54c.024.15.026.406.026 1.105v.03c0 .409 0 .762.026 1.051c.027.306.087.61.248.895c.18.319.438.583.75.767c.278.165.575.226.874.254c.283.026.628.026 1.028.026h.058c.4 0 .745 0 1.028-.026c.3-.028.595-.09.875-.254a2.07 2.07 0 0 0 .749-.767c.16-.285.22-.588.248-.895c.026-.29.026-.642.025-1.051v-.03c0-.699.003-.955.026-1.105c.06-.38.082-.47.113-.54c.03-.07.081-.147.318-.446l.008-.01l.025z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<h3 className="">Медицинский центр</h3>
<p className="">
              Передовые оздоровительные программы и премиум-диагностика на
              современном оборудовании.
            </p>
</div>
<div className="service-card reveal-child" style={{-MouseX: '193px', -MouseY: '217px'}}>
<div className="service-card-number">05</div>
<div className="service-card-icon">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:home-angle-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2.25a.75.75 0 0 1 .453.153l9 7A.75.75 0 0 1 21 10.59V20.5a1.5 1.5 0 0 1-1.5 1.5H15a.75.75 0 0 1-.75-.75v-4.5a1.5 1.5 0 0 0-1.5-1.5h-1.5a1.5 1.5 0 0 0-1.5 1.5v4.5A.75.75 0 0 1 9 22H4.5A1.5 1.5 0 0 1 3 20.5V10.59a.75.75 0 0 1 .297-.587l9-7A.75.75 0 0 1 12 2.25" fill="currentColor"></path>
</svg>
</div>
<h3 className="">Спорт и Серфинг</h3>
<p className="">
              Фитнес-клубы, теннисные корты, зоны для йоги и профессиональная
              школа серфинга.
            </p>
</div>
<div className="service-card reveal-child">
<div className="service-card-number">06</div>
<div className="service-card-icon">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:armchair-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M7.75 4.5a3.25 3.25 0 0 1 6.5 0v3.75h-6.5zm8 0a4.75 4.75 0 0 0-9.5 0v4.25H4v1.5a1.5 1.5 0 0 0 1.5 1.5h13a1.5 1.5 0 0 0 1.5-1.5v-1.5h-2.25zM5.5 13.25v2.333a2.417 2.417 0 0 0 2.417 2.417h8.166A2.417 2.417 0 0 0 18.5 15.583v-2.333H20v2.333A3.917 3.917 0 0 1 16.083 19.5H7.917A3.917 3.917 0 0 1 4 15.583v-2.333zM6.5 210m13 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" fill="currentColor"></path>
</svg>
</div>
<h3 className="">Детский клуб</h3>
<p className="">
              Развивающие интерактивные пространства, кинотеатр и ежедневная
              анимация для детей.
            </p>
</div>
</div>
</div>
</section>

<div className="marquee-section">
<div className="marquee-track">
<div className="marquee-item">
<span>5-Звездочный Сервис</span>
<div className="marquee-dot"></div>
<span>Первая Линия</span>
<div className="marquee-dot"></div>
<span>Сдача в 2027</span>
<div className="marquee-dot"></div>
<span>Доход от 5 млн ₽</span>
<div className="marquee-dot"></div>
<span>Рассрочка 0%</span>
<div className="marquee-dot"></div>
</div>
<div className="marquee-item">
<span>5-Звездочный Сервис</span>
<div className="marquee-dot"></div>
<span>Первая Линия</span>
<div className="marquee-dot"></div>
<span>Сдача в 2027</span>
<div className="marquee-dot"></div>
<span>Доход от 5 млн ₽</span>
<div className="marquee-dot"></div>
<span>Рассрочка 0%</span>
<div className="marquee-dot"></div>
</div>
</div>
</div>

<section className="projects section" id="projects">
<div className="container">
<div className="projects-header reveal">
<div className="section-label">Выбор планировок</div>
<h2 className="section-title">
            Коллекция
            <em>апартаментов</em>
</h2>
<p className="projects-subtitle">
            20 видов планировочных решений: от эргономичных студий до роскошных
            пентхаусов с террасами.
          </p>
</div>
<div className="projects-grid stagger-clip">
<a className="project-card" href="#">
<img alt="Modern woodland home" className="project-card-image" loading="lazy" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&amp;q=80"/>
<div className="project-card-overlay"></div>
<div className="project-card-content">
<div className="project-card-tags">
<span className="project-card-tag">Студия</span>
<span className="project-card-tag">С отделкой</span>
</div>
<h3 className="">Студия De Luxe</h3>
<p>
                35 м², балкон с видом на горы. Эргономичное пространство для
                комфортного отдыха и сдачи в аренду.
              </p>
</div>
<div className="project-card-arrow">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</a>
<a className="project-card" href="#">
<img alt="Minimalist interior" className="project-card-image" loading="lazy" src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&amp;q=80"/>
<div className="project-card-overlay"></div>
<div className="project-card-content">
<div className="project-card-tags">
<span className="project-card-tag">1 Спальня</span>
<span className="project-card-tag">С мебелью</span>
</div>
<h3>Апартамент 1-Bedroom</h3>
<p>
                55 м², просторная спальня и кухня-гостиная с панорамными окнами
                и прямым видом на море.
              </p>
</div>
<div className="project-card-arrow">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</a>
<a className="project-card" href="#">
<img alt="Coastal retreat" className="project-card-image" loading="lazy" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&amp;q=80"/>
<div className="project-card-overlay"></div>
<div className="project-card-content">
<div className="project-card-tags">
<span className="project-card-tag">Пентхаус</span>
<span className="project-card-tag">Терраса</span>
</div>
<h3>Пентхаус с террасой</h3>
<p>
                120 м², эксклюзивный лот на верхнем этаже с приватным бассейном
                и обзором на 360°.
              </p>
</div>
<div className="project-card-arrow">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</a>
</div>
<div className="text-center mt-12 reveal">
<a className="btn btn-outline" href="#">
<span>Каталог планировок</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="process section" id="process">
<div className="container">
<div className="process-header reveal">
<div className="section-label">Инвестиции</div>
<h2 className="section-title">
            Прозрачная
            <em>модель</em>
</h2>
</div>
<div className="process-steps stagger-soft">
<div className="process-step">
<div className="process-step-number"><span>01</span></div>
<h4>Покупка лота</h4>
<p>
              Приобретение премиальной недвижимости на стадии строительства с
              максимальным потенциалом роста.
            </p>
</div>
<div className="process-step">
<div className="process-step-number"><span>02</span></div>
<h4>Отельное управление</h4>
<p>
              Профессиональный оператор полностью берет на себя поиск
              арендаторов, клининг и обслуживание.
            </p>
</div>
<div className="process-step">
<div className="process-step-number"><span>03</span></div>
<h4 className="">Стабильный доход</h4>
<p>
              Выплаты от 5 000 000 ₽ в год на ваш счет без личного участия в
              операционном процессе.
            </p>
</div>
<div className="process-step">
<div className="process-step-number"><span>04</span></div>
<h4>Личный отдых</h4>
<p>
              Возможность бесплатно проживать в своих апартаментах с 5★ сервисом
              до 4 недель в году.
            </p>
</div>
</div>
</div>
</section>

<section className="layouts section" id="layouts" style={{backgroundColor: 'var(--color-bg)'}}>
<div className="container">
<div className="text-center mb-12 md:mb-16">
<h2 className="section-title" style={{fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)'}}>
            Объект отличается большим разнообразием
            <br className="hidden md:block"/>
<em className="" style={{color: 'var(--color-sage) !important'}}>
              планировок
            </em>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
<div className="md:p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:border-[rgba(193,127,89,0.3)] text-center border-[rgba(193,127,89,0.1)] border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-xl items-center">
<div className="bg-[var(--color-sage)] text-[#F5F0EB] text-[0.65rem] font-medium tracking-widest uppercase py-1.5 px-4 rounded-full mb-6">
              Лучший выбор
            </div>
<div className="w-full mb-6 flex items-center justify-center overflow-hidden rounded-lg aspect-[5/4]">
<img alt="План этажа" className="transition-all duration-400 opacity-70 w-full h-full object-cover grayscale" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de56c056-170f-4237-b7e0-f1f4cce4bf7f_1600w.png"/>
</div>
<h3 className="text-[var(--color-cream)] text-xl mb-3 transition-colors duration-400" style={{fontFamily: 'var(--font-display)'}}>
              ВАРИАНТ №1
            </h3>
<p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6 transition-colors duration-400">
              Пассивный доход от сдачи номера в управление с возможностью
              проживания 4 недели в году
            </p>
<div className="w-full flex flex-col gap-3 mb-8 text-left border-t border-[rgba(193,127,89,0.15)] pt-6 transition-colors duration-400">
<div className="flex items-center gap-3 text-[var(--color-text-muted)] text-sm font-medium transition-colors duration-400">
<iconify-icon className="text-[var(--color-sage)] text-lg flex-shrink-0 transition-colors duration-400" icon="solar:buildings-2-bold"></iconify-icon>
<span className="">Корпус №2, Этаж №3</span>
</div>
<div className="flex items-center gap-3 text-[var(--color-text-muted)] text-sm font-medium transition-colors duration-400">
<iconify-icon className="text-[var(--color-sage)] text-lg flex-shrink-0 transition-colors duration-400" icon="solar:map-point-bold"></iconify-icon>
<span className="">50 м до моря</span>
</div>
<div className="flex items-center gap-3 text-[var(--color-text-muted)] text-sm font-medium transition-colors duration-400">
<iconify-icon className="text-[var(--color-sage)] text-lg flex-shrink-0 transition-colors duration-400" icon="solar:ruler-bold"></iconify-icon>
<span className="">Площадь: 41.63 м²</span>
</div>
</div>
<button className="btn btn-outline w-full justify-center mt-auto">
<span className="">УЗНАТЬ СТОИМОСТЬ</span>
</button>
</div>
<div className="bg-[var(--color-bg-elevated)] rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[rgba(193,127,89,0.1)] hover:border-[rgba(193,127,89,0.3)]">
<div className="bg-[var(--color-sage)] text-[#F5F0EB] text-[0.65rem] font-medium tracking-widest uppercase py-1.5 px-4 rounded-full mb-6">
              Лучший выбор
            </div>
<div className="w-full mb-6 flex items-center justify-center overflow-hidden rounded-lg aspect-[5/4]">
<img alt="План этажа" className="w-full h-full object-cover grayscale opacity-70 transition-all duration-400" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/00827de4-f15c-4943-b6fc-1316c15983ea_800w.jpg"/>
</div>
<h3 className="text-[var(--color-cream)] text-xl mb-3 transition-colors duration-400" style={{fontFamily: 'var(--font-display)'}}>
              ВАРИАНТ №2
            </h3>
<p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6 transition-colors duration-400">
              Пассивный доход от сдачи номера в управление с возможностью
              проживания 4 недели в году
            </p>
<div className="flex flex-col gap-3 transition-colors duration-400 text-left w-full border-[rgba(193,127,89,0.15)] border-t mb-8 pt-6 gap-x-3 gap-y-3">
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
<button className="btn btn-outline w-full mt-auto justify-center">
<span className="">УЗНАТЬ СТОИМОСТЬ</span>
</button>
</div>
<div className="bg-[var(--color-bg-elevated)] rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[rgba(193,127,89,0.1)] hover:border-[rgba(193,127,89,0.3)]">
<div className="bg-[var(--color-sage)] text-[#F5F0EB] text-[0.65rem] font-medium tracking-widest uppercase py-1.5 px-4 rounded-full mb-6">
              Лучший выбор
            </div>
<div className="w-full mb-6 flex items-center justify-center overflow-hidden rounded-lg aspect-[5/4]">
<img alt="План этажа" className="w-full h-full object-cover grayscale opacity-70 transition-all duration-400" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e36fa4d5-9b4a-4ed8-b170-609052531ba7_800w.jpg"/>
</div>
<h3 className="text-[var(--color-cream)] text-xl mb-3 transition-colors duration-400" style={{fontFamily: 'var(--font-display)'}}>
              ВАРИАНТ №3
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
<span>УЗНАТЬ СТОИМОСТЬ</span>
</button>
</div>
<div className="bg-[var(--color-bg-elevated)] rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[rgba(193,127,89,0.1)] hover:border-[rgba(193,127,89,0.3)]">
<div className="bg-[var(--color-sage)] text-[#F5F0EB] text-[0.65rem] font-medium tracking-widest uppercase py-1.5 px-4 rounded-full mb-6">
              Лучший выбор
            </div>
<div className="w-full mb-6 flex items-center justify-center overflow-hidden rounded-lg aspect-[5/4]">
<img alt="План этажа" className="w-full h-full object-cover grayscale opacity-70 transition-all duration-400" loading="lazy" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&amp;q=80"/>
</div>
<h3 className="text-[var(--color-cream)] text-xl mb-3 transition-colors duration-400" style={{fontFamily: 'var(--font-display)'}}>
              ВАРИАНТ №4
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
<span>УЗНАТЬ СТОИМОСТЬ</span>
</button>
</div>
<div className="bg-[var(--color-bg-elevated)] rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[rgba(193,127,89,0.1)] hover:border-[rgba(193,127,89,0.3)]">
<div className="bg-[var(--color-sage)] text-[#F5F0EB] text-[0.65rem] font-medium tracking-widest uppercase py-1.5 px-4 rounded-full mb-6">
              Лучший выбор
            </div>
<div className="w-full mb-6 flex items-center justify-center overflow-hidden rounded-lg aspect-[5/4]">
<img alt="План этажа" className="w-full h-full object-cover grayscale opacity-70 transition-all duration-400" loading="lazy" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&amp;q=80"/>
</div>
<h3 className="text-[var(--color-cream)] text-xl mb-3 transition-colors duration-400" style={{fontFamily: 'var(--font-display)'}}>
              ВАРИАНТ №5
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
<span>УЗНАТЬ СТОИМОСТЬ</span>
</button>
</div>
<div className="bg-[var(--color-bg-elevated)] rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[rgba(193,127,89,0.1)] hover:border-[rgba(193,127,89,0.3)]">
<div className="bg-[var(--color-sage)] text-[#F5F0EB] text-[0.65rem] font-medium tracking-widest uppercase py-1.5 px-4 rounded-full mb-6">
              Лучший выбор
            </div>
<div className="w-full mb-6 flex items-center justify-center overflow-hidden rounded-lg aspect-[5/4]">
<img alt="План этажа" className="w-full h-full object-cover grayscale opacity-70 transition-all duration-400" loading="lazy" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&amp;q=80"/>
</div>
<h3 className="text-[var(--color-cream)] text-xl mb-3 transition-colors duration-400" style={{fontFamily: 'var(--font-display)'}}>
              ВАРИАНТ №6
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
<span>УЗНАТЬ СТОИМОСТЬ</span>
</button>
</div>
<div className="bg-[var(--color-bg-elevated)] rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[rgba(193,127,89,0.1)] hover:border-[rgba(193,127,89,0.3)]">
<div className="bg-[var(--color-sage)] text-[#F5F0EB] text-[0.65rem] font-medium tracking-widest uppercase py-1.5 px-4 rounded-full mb-6">
              Лучший выбор
            </div>
<div className="w-full mb-6 flex items-center justify-center overflow-hidden rounded-lg aspect-[5/4]">
<img alt="План этажа" className="transition-all duration-400 opacity-70 w-full h-full object-cover grayscale" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/00e8379a-0514-43c1-99c9-94cdf37e0728_1600w.jpg"/>
</div>
<h3 className="text-[var(--color-cream)] text-xl mb-3 transition-colors duration-400" style={{fontFamily: 'var(--font-display)'}}>
              ВАРИАНТ №7
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
<span>УЗНАТЬ СТОИМОСТЬ</span>
</button>
</div>
<div className="bg-[var(--color-bg-elevated)] rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[rgba(193,127,89,0.1)] hover:border-[rgba(193,127,89,0.3)]">
<div className="bg-[var(--color-sage)] text-[#F5F0EB] text-[0.65rem] font-medium tracking-widest uppercase py-1.5 px-4 rounded-full mb-6">
              Лучший выбор
            </div>
<div className="w-full mb-6 flex items-center justify-center overflow-hidden rounded-lg aspect-[5/4]">
<img alt="План этажа" className="w-full h-full object-cover grayscale opacity-70 transition-all duration-400" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/00827de4-f15c-4943-b6fc-1316c15983ea_800w.jpg"/>
</div>
<h3 className="text-[var(--color-cream)] text-xl mb-3 transition-colors duration-400" style={{fontFamily: 'var(--font-display)'}}>
              ВАРИАНТ №8
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
<span>УЗНАТЬ СТОИМОСТЬ</span>
</button>
</div>
<div className="bg-[var(--color-bg-elevated)] rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[rgba(193,127,89,0.1)] hover:border-[rgba(193,127,89,0.3)]">
<div className="bg-[var(--color-sage)] text-[#F5F0EB] text-[0.65rem] font-medium tracking-widest uppercase py-1.5 px-4 rounded-full mb-6">
              Лучший выбор
            </div>
<div className="w-full mb-6 flex items-center justify-center overflow-hidden rounded-lg aspect-[5/4]">
<img alt="План этажа" className="w-full h-full object-cover grayscale opacity-70 transition-all duration-400" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e36fa4d5-9b4a-4ed8-b170-609052531ba7_800w.jpg"/>
</div>
<h3 className="text-[var(--color-cream)] text-xl mb-3 transition-colors duration-400" style={{fontFamily: 'var(--font-display)'}}>
              ВАРИАНТ №9
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
<span>УЗНАТЬ СТОИМОСТЬ</span>
</button>
</div>
</div>
</div>
</section>


<div className="awards">
<div className="container awards-grid stagger-pop">
<div className="award-item">
<iconify-icon className="award-icon" icon="solar:cup-first-bold-duotone"></iconify-icon>
<span>
            Высокая
            <br/>
            Ликвидность
          </span>
</div>
<div className="award-item">
<iconify-icon className="award-icon" icon="solar:leaf-bold-duotone"></iconify-icon>
<span>
            Надежный
            <br/>
            Застройщик
          </span>
</div>
<div className="award-item">
<iconify-icon className="award-icon" icon="solar:medal-star-circle-bold-duotone"></iconify-icon>
<span>
            Отельный
            <br/>
            Оператор 5★
          </span>
</div>
<div className="award-item">
<iconify-icon className="award-icon" icon="solar:global-bold-duotone"></iconify-icon>
<span>
            Первая
            <br/>
            Береговая Линия
          </span>
</div>
<div className="award-item">
<iconify-icon className="award-icon" icon="solar:buildings-3-bold-duotone"></iconify-icon>
<span>
            Рост Капитала
            <br/>
            до 30%
          </span>
</div>
</div>
</div>

<section className="blog section" id="journal">
<div className="container">
<div className="blog-header reveal">
<div>
<div className="section-label">Внутреннее пространство</div>
<h2 className="section-title">
              Безупречная
              <em>отделка</em>
</h2>
</div>
<a className="btn btn-outline hidden md:inline-flex" href="#">
<span>Скачать дизайн-проект</span>
</a>
</div>
<div className="blog-grid stagger-scale">
<article className="blog-card">
<div className="blog-card-image-wrap">
<img alt="Timber architecture detail" className="blog-card-image" loading="lazy" src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&amp;q=80"/>
</div>
<div className="blog-card-content">
<div className="blog-card-meta">
<span className="blog-card-tag">Материалы</span>
<span className="blog-card-date">Премиум</span>
</div>
<h3>Премиальные отделочные материалы</h3>
<p>
                Использование натурального камня, массива ценных пород дерева и
                экологичных покрытий. Дизайн-проект разработан ведущим
                архитектурным бюро.
              </p>
<a className="blog-card-link" href="#">
                Смотреть детали
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</article>
<article className="blog-card">
<div className="blog-card-image-wrap">
<img alt="Office building interior" className="blog-card-image" loading="lazy" src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&amp;q=80"/>
</div>
<div className="blog-card-content">
<div className="blog-card-meta">
<span className="blog-card-tag">Мебель</span>
<span className="blog-card-date">Под ключ</span>
</div>
<h3>Полная меблировка и комплектация</h3>
<p>
                Апартаменты полностью готовы к проживанию или сдаче.
                Комплектуются дизайнерской мебелью, текстилем премиум-класса и
                бытовой техникой.
              </p>
<a className="blog-card-link" href="#">
                Смотреть детали
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</article>
<article className="blog-card">
<div className="blog-card-image-wrap">
<img alt="Abstract architectural shapes" className="blog-card-image" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="blog-card-content">
<div className="blog-card-meta">
<span className="blog-card-tag">Технологии</span>
<span className="blog-card-date">Smart</span>
</div>
<h3>Система «Умный Дом»</h3>
<p>
                Интегрированное управление климатом, многоуровневым освещением,
                шторами и системами безопасности напрямую с вашего смартфона.
              </p>
<a className="blog-card-link" href="#">
                Смотреть детали
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</article>
</div>
<div className="text-center mt-10 md:hidden reveal">
<a className="btn btn-outline" href="#">
<span>Скачать дизайн-проект</span>
</a>
</div>
</div>
</section>

<section className="cta" id="contact">
<div className="cta-bg">
<div className="cta-bg-image"></div>
</div>
<div className="container cta-content reveal-zoom">
<div className="section-label" style={{marginBottom: '2rem', justifyContent: 'center'}}>
          Готовы инвестировать?
        </div>
<h2 className="cta-title">
          Инвестируйте в
          <em>курорт будущего</em>
</h2>
<p className="cta-text">
          Оставьте заявку, чтобы получить бизнес-план доходности, закрытый
          каталог планировок и индивидуальные условия покупки.
        </p>
<div className="mt-4">
<form className="flex flex-col gap-4 max-w-md mx-auto w-full" onsubmit="event.preventDefault()">
<div className="flex flex-col gap-4 sm:flex-row">
<input className="w-full bg-[rgba(193,127,89,0.06)] border border-[rgba(193,127,89,0.2)] rounded-lg px-4 py-3 text-[var(--color-cream)] text-sm outline-none focus:border-[var(--color-copper)] transition-colors placeholder-[var(--color-text-muted)]" placeholder="Имя" required="" type="text"/>
<input className="w-full bg-[rgba(193,127,89,0.06)] border border-[rgba(193,127,89,0.2)] rounded-lg px-4 py-3 text-[var(--color-cream)] text-sm outline-none focus:border-[var(--color-copper)] transition-colors placeholder-[var(--color-text-muted)]" placeholder="Телефон" required="" type="tel"/>
</div>
<input className="w-full bg-[rgba(193,127,89,0.06)] border border-[rgba(193,127,89,0.2)] rounded-lg px-4 py-3 text-[var(--color-cream)] text-sm outline-none focus:border-[var(--color-copper)] transition-colors placeholder-[var(--color-text-muted)]" placeholder="Email" required="" type="email"/>
<button className="btn-glow w-full justify-center mt-2 border-none cursor-pointer flex items-center" type="submit">
<span className="w-full text-center">Получить расчет доходности</span>
</button>
<p className="text-[0.7rem] text-[var(--color-text-subtle)] mt-2 text-center">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
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
              Масштабный инвестиционный проект в Сочи. Готовые сервисные
              апартаменты премиум-класса с доходом от 5 000 000 ₽ в год.
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
<h4>Меню</h4>
<ul>
<li><a href="#philosophy">О проекте</a></li>
<li><a href="#services">Инфраструктура</a></li>
<li><a href="#projects">Планировки</a></li>
<li><a href="#process">Модель дохода</a></li>
<li><a href="#journal">Отделка</a></li>
</ul>
</div>
<div className="footer-column">
<h4>Контакты</h4>
<ul>
<li>
<a href="mailto:hello@volna-sochi.ru">hello@volna-sochi.ru</a>
</li>
<li><a href="tel:+78000000000">+7 (800) 000-00-00</a></li>
<li>
<a href="#">
                  г. Сочи,
                  <br/>
                  Курортный проспект, 1
                </a>
</li>
</ul>
</div>
<div className="footer-column">
<h4>Презентация</h4>
<p style={{fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1rem', lineHeight: '1.6'}}>
              Оставьте свои контакты, чтобы получить подробную презентацию
              проекта и прайс-лист.
            </p>
<form className="flex flex-col gap-3" onsubmit="event.preventDefault()">
<input className="w-full bg-[rgba(193,127,89,0.06)] border border-[rgba(193,127,89,0.2)] rounded-md px-4 py-2.5 text-[var(--color-cream)] text-sm outline-none focus:border-[var(--color-copper)] transition-colors placeholder-[var(--color-text-muted)]" placeholder="Имя" required="" type="text"/>
<input className="w-full bg-[rgba(193,127,89,0.06)] border border-[rgba(193,127,89,0.2)] rounded-md px-4 py-2.5 text-[var(--color-cream)] text-sm outline-none focus:border-[var(--color-copper)] transition-colors placeholder-[var(--color-text-muted)]" placeholder="Телефон" required="" type="tel"/>
<input className="w-full bg-[rgba(193,127,89,0.06)] border border-[rgba(193,127,89,0.2)] rounded-md px-4 py-2.5 text-[var(--color-cream)] text-sm outline-none focus:border-[var(--color-copper)] transition-colors placeholder-[var(--color-text-muted)]" placeholder="Email" required="" type="email"/>
<button className="bg-[var(--color-copper)] hover:bg-[var(--color-terracotta)] rounded-md px-4 py-3 flex items-center justify-center transition-colors text-xs tracking-widest uppercase font-medium border-none cursor-pointer mt-1 text-black" type="submit">
<span>Получить презентацию</span>
</button>
</form>
</div>
</div>
<div className="footer-bottom reveal-soft">
<p>© 2024 VOLNA Residences. Все права защищены.</p>
<div className="footer-bottom-links">
<a href="#">Политика конфиденциальности</a>
<a href="#">Оферта</a>
<a href="#">Файлы Cookie</a>
</div>
</div>
</div>
</footer>


<div className="fixed inset-0 z-[1000] hidden items-center justify-center opacity-0 transition-all duration-300" id="leadModal">
<div className="absolute inset-0 bg-[#0F0F0E]/80 backdrop-blur-sm" id="modalOverlay"></div>
<div className="relative bg-[var(--color-bg-elevated)] border border-[rgba(193,127,89,0.2)] rounded-2xl max-w-4xl w-full mx-4 shadow-2xl transform scale-95 transition-all duration-300 flex flex-col md:flex-row overflow-hidden" id="modalContent">
<button className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[rgba(193,127,89,0.06)] border border-[rgba(193,127,89,0.2)] text-[var(--color-copper-light)] hover:bg-[rgba(193,127,89,0.15)] hover:border-[rgba(193,127,89,0.4)] transition-all cursor-pointer z-20" id="closeModal">
<iconify-icon className="text-xl" icon="solar:close-square-linear"></iconify-icon>
</button>
<div className="hidden md:block md:w-5/12 relative bg-[var(--color-bg)]">
<img alt="Инвестиции в Сочи" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0b79ccc-3862-4252-a096-18b0ad95f225_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-elevated)] via-[rgba(26,25,23,0.4)] to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 z-10">
<h4 className="text-xl font-display text-[var(--color-cream)] mb-3 drop-shadow-lg">
              Что вы получите:
            </h4>
<ul className="text-[rgba(245,240,235,0.95)] text-sm leading-relaxed drop-shadow-md flex flex-col gap-3">
<li className="flex items-start gap-2.5">
<iconify-icon className="text-[var(--color-copper-light)] text-lg mt-0.5 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Каталог планировок с актуальными ценами</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon className="text-[var(--color-copper-light)] text-lg mt-0.5 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Подробная финансовая модель (доходность от 5 млн ₽)</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon className="text-[var(--color-copper-light)] text-lg mt-0.5 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Условия беспроцентной рассрочки от застройщика</span>
</li>
</ul>
</div>
</div>
<div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center relative">
<h3 className="text-2xl font-display text-[var(--color-cream)] mb-2">
            Получить материалы проекта
          </h3>
<p className="text-[var(--color-text-muted)] text-sm mb-8 leading-relaxed">
            Оставьте контакты, и мы отправим вам презентацию, планировки и
            расчет доходности удобным для вас способом. Никакого спама и
            навязчивых звонков.
          </p>
<form className="flex flex-col gap-4" onsubmit="event.preventDefault(); window.closeLeadModal();">
<input className="w-full bg-[rgba(193,127,89,0.06)] border border-[rgba(193,127,89,0.2)] rounded-lg px-4 py-3.5 text-[var(--color-cream)] text-sm outline-none focus:border-[var(--color-copper)] transition-colors placeholder-[var(--color-text-muted)]" placeholder="Ваше имя" required="" type="text"/>
<input className="w-full bg-[rgba(193,127,89,0.06)] border border-[rgba(193,127,89,0.2)] rounded-lg px-4 py-3.5 text-[var(--color-cream)] text-sm outline-none focus:border-[var(--color-copper)] transition-colors placeholder-[var(--color-text-muted)]" placeholder="Номер телефона" required="" type="tel"/>
<button className="btn btn-primary w-full justify-center mt-2 border-none py-3.5" type="submit">
<span className="font-medium tracking-wide">Запросить материалы</span>
</button>
<p className="text-[0.7rem] text-[var(--color-text-subtle)] mt-3 text-center">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
            </p>
</form>
</div>
</div>
</div>


    </>
  );
}
