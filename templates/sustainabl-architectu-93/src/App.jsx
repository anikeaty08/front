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
<a className="nav-logo" href="#">VERD</a>
<div className="nav-links">
<a className="nav-link" href="#philosophy">Philosophy</a>
<a className="nav-link" href="#services">Services</a>
<a className="nav-link" href="#projects">Projects</a>
<a className="nav-link" href="#process">Process</a>
<a className="nav-link" href="#testimonials">Voices</a>
<a className="nav-link" href="#journal">Journal</a>
</div>
<div className="flex items-center gap-3">
<a className="nav-cta hidden md:block" href="#contact"><i className="nav-cta-shimmer"></i><span>Start a Project</span></a>

<button aria-label="Toggle Theme" className="w-[38px] h-[38px] flex items-center justify-center rounded-full border border-[rgba(193,127,89,0.3)] text-[var(--color-copper-light)] hover:border-[var(--color-copper)] hover:bg-[rgba(193,127,89,0.08)] transition-all cursor-pointer z-10" id="themeToggle">
<iconify-icon className="text-lg hidden" icon="solar:sun-linear" id="iconSun"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:moon-linear" id="iconMoon"></iconify-icon>
</button>
<button aria-label="Toggle menu" className="nav-toggle" id="navToggle">
<span></span><span></span><span></span>
</button>
</div>
</div>
</nav>

<div className="nav-mobile-overlay" id="navMobile">
<a className="nav-link" href="#philosophy">Philosophy</a>
<a className="nav-link" href="#services">Services</a>
<a className="nav-link" href="#projects">Projects</a>
<a className="nav-link" href="#process">Process</a>
<a className="nav-link" href="#testimonials">Voices</a>
<a className="nav-link" href="#journal">Journal</a>
<a className="nav-cta" href="#contact" style={{marginTop: '1rem'}}><span>Start a Project</span></a>
</div>

<section className="hero" id="hero">
<div className="hero-bg">
<div aria-label="Modern sustainable architecture with natural materials and green surroundings" className="hero-bg-image" role="img"></div>
<div className="hero-bg-overlay"></div>
</div>
<div className="container hero-content">
<div className="hero-tag">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:buildings-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M15 2h2c1.886 0 2.828 0 3.414.586S21 4.114 21 6v15.25h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h1V9c0-1.886 0-2.828.586-3.414S5.114 5 7 5h4c1.886 0 2.828 0 3.414.586S15 7.114 15 9v12.25h1.5V8.91c0-.865 0-1.659-.087-2.304c-.095-.711-.32-1.463-.938-2.08c-.618-.619-1.37-.844-2.08-.94c-.637-.085-1.418-.086-2.269-.086c.084-.387.225-.68.46-.914C12.172 2 13.114 2 15 2M5.25 8A.75.75 0 0 1 6 7.25h6a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 8m0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75M9 18.25a.75.75 0 0 1 .75.75v2.25h-1.5V19a.75.75 0 0 1 .75-.75" fill="currentColor" fill-rule="evenodd"></path></svg>
    Award-Winning Sustainable Architecture
  </div>
<h1 className="hero-title">Designing spaces<br/>that breathe with <em>nature</em></h1>
<p className="hero-description">We create architecture that doesn't just exist in the environment — it converses with it. Every structure is a dialogue between human aspiration and ecological responsibility.</p>
<div className="hero-actions">
<a className="btn-hero-webgl" href="#projects" id="heroBtn">
<canvas height="51" id="heroBtnCanvas" width="220"></canvas>
<span className="btn-hero-webgl-text">
        View Our Work
        <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</span>
</a>
<a className="btn btn-outline" href="#philosophy">
<span>Our Philosophy</span>
</a>
</div>
<div className="hero-stats">
<div className="hero-stat">
<div className="hero-stat-number">240+</div>
<div className="hero-stat-label">Projects Completed</div>
</div>
<div className="hero-stat">
<div className="hero-stat-number">18</div>
<div className="hero-stat-label">Design Awards</div>
</div>
<div className="hero-stat">
<div className="hero-stat-number">96%</div>
<div className="hero-stat-label">Client Retention</div>
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
<div className="section-label reveal-slide-right">Our Philosophy</div>
<h2 className="section-title reveal-slide-right reveal-delay-1">Architecture as <em>living dialogue</em></h2>
<p className="philosophy-quote reveal-slide-right reveal-delay-2">"The best buildings are not monuments to ego, but <span className="">quiet conversations</span> between place, purpose, and the passage of time."</p>
<p className="philosophy-desc reveal-slide-right reveal-delay-3">At VERD, we believe every structure should give back more than it takes. Our biophilic approach integrates passive heating, natural ventilation, living walls, and locally-sourced materials into designs that feel timeless rather than trendy.</p>
<div className="philosophy-features reveal-slide-right reveal-delay-4">
<div className="philosophy-feature">
<div className="philosophy-feature-icon">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:leaf-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.25 2.083a3.5 3.5 0 0 0-.713.243C6.553 4.188 4 9.395 4 13.856c0 4.24 3.183 7.724 7.25 8.109zm1.5 19.882c4.067-.385 7.25-3.868 7.25-8.108q0-.61-.063-1.234l-7.187 7.188zM18.26 7.18a13.4 13.4 0 0 0-1.34-2.04l-4.17 4.17v3.38zm-2.352-3.15a9.2 9.2 0 0 0-2.445-1.704a3.5 3.5 0 0 0-.713-.243v5.106zm3.028 4.594l-6.186 6.187v2.878l6.75-6.75l.132-.132a15 15 0 0 0-.696-2.183" fill="currentColor"></path></svg>
</div>
<div className="philosophy-feature-text">
<h4 className="">Net-Zero Commitment</h4>
<p className="">Every project targets net-zero carbon over its lifetime through passive design and renewable integration.</p>
</div>
</div>
<div className="philosophy-feature">
<div className="philosophy-feature-icon">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:pallete-2-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M10.847 21.934C5.867 21.362 2 17.133 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.157-3.283 4.733-6.086 4.37c-1.618-.209-3.075-.397-3.652.518c-.395.626.032 1.406.555 1.929a1.673 1.673 0 0 1 0 2.366c-.523.523-1.235.836-1.97.751M11.085 7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M6.5 13a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m11 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-3-4.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" fill="currentColor" fill-rule="evenodd"></path></svg>
</div>
<div className="philosophy-feature-text">
<h4 className="">Material Honesty</h4>
<p className="">We celebrate raw materials — timber, stone, rammed earth — letting their natural character define the aesthetic.</p>
</div>
</div>
<div className="philosophy-feature">
<div className="philosophy-feature-icon">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:compass-big-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.554 21.529c1.797 1.221 4.943-.038 11.236-2.554c1.342-.537 2.013-.806 2.54-1.267q.201-.177.378-.378c.461-.527.73-1.198 1.267-2.54c2.515-6.293 3.775-9.44 2.554-11.236a4.1 4.1 0 0 0-1.083-1.083c-1.797-1.221-4.944.037-11.236 2.554c-1.342.537-2.013.806-2.54 1.267q-.201.177-.378.378c-.461.527-.73 1.198-1.267 2.54c-2.517 6.292-3.775 9.439-2.554 11.236c.29.426.657.793 1.083 1.083M8.25 12a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m1.5 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" fill="currentColor" fill-rule="evenodd"></path></svg>
</div>
<div className="philosophy-feature-text">
<h4 className="">Contextual Design</h4>
<p>Every site has a story. We listen to the landscape, climate, and culture before drawing a single line.</p>
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
<div className="section-label">What We Do</div>
<h2 className="section-title">Comprehensive design <em>services</em></h2>
</div>
<p className="">From initial concept to final handover, we guide every project through a meticulous, client-centered process.</p>
</div>
<div className="services-grid stagger-scale">
<div className="service-card reveal-child">
<div className="service-card-number">01</div>
<div className="service-card-icon">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:buildings-2-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M21.25 8.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552c-.441-.295-1.034-.332-2.115-.336q.005.438.004.91V7.25h1a.75.75 0 0 1 0 1.5h-1v1.5h1a.75.75 0 0 1 0 1.5h-1v1.5h1a.75.75 0 0 1 0 1.5h-1v6.5h-1.5V6c0-1.886 0-2.828-.586-3.414S14.636 2 12.75 2h-2c-1.886 0-2.828 0-3.414.586S6.75 4.114 6.75 6v15.25h-1.5v-6.5h-1a.75.75 0 0 1 0-1.5h1v-1.5h-1a.75.75 0 0 1 0-1.5h1v-1.5h-1a.75.75 0 0 1 0-1.5h1V5.91q-.001-.47.004-.91c-1.081.005-1.674.042-2.115.337a2 2 0 0 0-.552.552C2.25 6.393 2.25 7.096 2.25 8.5v12.75h-.5a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-.5zM9 11.75a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m2.75 3.5a.75.75 0 0 1 .75.75v2.25H11V19a.75.75 0 0 1 .75-.75M9 6.25a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9 6.25m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9 9.25" fill="currentColor" fill-rule="evenodd"></path></svg>
</div>
<h3>Architectural Design</h3>
<p>Full-service architecture from concept sketches through construction documents. Residential, commercial, and cultural projects shaped by sustainability.</p>
</div>
<div className="service-card reveal-child">
<div className="service-card-number">02</div>
<div className="service-card-icon">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:sofa-2-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 13v-1a3 3 0 0 0-2.993-3c.008-.328.027-.566.07-.78A4 4 0 0 1 7.22 5.077C7.606 5 8.07 5 9 5h2.25v8zm5.75 0H17v-1a3 3 0 0 1 2.993-3a4.6 4.6 0 0 0-.07-.78a4 4 0 0 0-3.143-3.143C16.394 5 15.93 5 15 5h-2.25z" fill="currentColor"></path><path d="M18.444 18H5.556a3.6 3.6 0 0 1-.806-.092V19a.75.75 0 0 1-1.5 0v-1.849A3.55 3.55 0 0 1 2 14.444V12a2 2 0 1 1 4 0v1.2a.8.8 0 0 0 .8.8h10.4a.8.8 0 0 0 .8-.8V12a2 2 0 1 1 4 0v2.444a3.55 3.55 0 0 1-1.25 2.707V19a.75.75 0 0 1-1.5 0v-1.092a3.6 3.6 0 0 1-.806.092" fill="currentColor"></path></svg>
</div>
<h3 className="">Interior Architecture</h3>
<p className="">Spatial design that flows naturally. We curate materials, lighting, and furniture to create interiors that are both functional and emotionally resonant.</p>
</div>
<div className="service-card reveal-child">
<div className="service-card-number">03</div>
<div className="service-card-icon">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:streets-map-point-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21.89 7.172C22 8.433 22 10.006 22 12c0 4.134 0 6.455-.987 7.951L15.06 14zm-1.938 13.84L14 15.06l-6.828 6.83C8.433 22 10.006 22 12 22c4.134 0 6.456 0 7.952-.988" fill="currentColor"></path><path clip-rule="evenodd" d="M12 2c4.714 0 7.071 0 8.535 1.464c.504.504.835 1.114 1.052 1.889L5.353 21.587c-.775-.217-1.385-.548-1.889-1.052C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2M5.5 8.757c0 1.785 1.117 3.868 2.86 4.613c.406.173.874.173 1.28 0c1.743-.745 2.86-2.828 2.86-4.613C12.5 6.958 10.933 5.5 9 5.5S5.5 6.958 5.5 8.757" fill="currentColor" fill-rule="evenodd"></path><path d="M10.5 9a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" fill="currentColor"></path></svg>
</div>
<h3 className="">Landscape Integration</h3>
<p className="">Architecture doesn't stop at the facade. We design landscapes that extend the living experience into gardens, courtyards, and natural terraces.</p>
</div>
<div className="service-card reveal-child">
<div className="service-card-number">04</div>
<div className="service-card-icon">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:lightbulb-bolt-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M11.5 2C7.358 2 4 5.436 4 9.674c0 2.273.966 4.315 2.499 5.72c.51.467.889.814 1.157 1.066a15 15 0 0 1 .4.39l.033.036c.237.3.288.376.318.446s.053.16.112.54c.024.15.026.406.026 1.105v.03c0 .409 0 .762.026 1.051c.027.306.087.61.248.895c.18.319.438.583.75.767c.278.165.575.226.874.254c.283.026.628.026 1.028.026h.058c.4 0 .745 0 1.028-.026c.3-.028.595-.09.875-.254a2.07 2.07 0 0 0 .749-.767c.16-.285.22-.588.248-.895c.026-.29.026-.642.025-1.051v-.03c0-.699.003-.955.026-1.105c.06-.38.082-.47.113-.54c.03-.07.081-.147.318-.446l.008-.01l.025z" fill="currentColor" fill-rule="evenodd"></path></svg>
</div>
<h3 className="">Sustainable Consulting</h3>
<p className="">Expert guidance on eco-friendly building practices, green certifications, and integrating renewable technologies into new or existing structures.</p>
</div>
<div className="service-card reveal-child">
<div className="service-card-number">05</div>
<div className="service-card-icon">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:home-angle-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25a.75.75 0 0 1 .453.153l9 7A.75.75 0 0 1 21 10.59V20.5a1.5 1.5 0 0 1-1.5 1.5H15a.75.75 0 0 1-.75-.75v-4.5a1.5 1.5 0 0 0-1.5-1.5h-1.5a1.5 1.5 0 0 0-1.5 1.5v4.5A.75.75 0 0 1 9 22H4.5A1.5 1.5 0 0 1 3 20.5V10.59a.75.75 0 0 1 .297-.587l9-7A.75.75 0 0 1 12 2.25" fill="currentColor"></path></svg>
</div>
<h3 className="">Master Planning</h3>
<p className="">Visionary urban and rural planning that respects ecological boundaries while creating cohesive, thriving communities and developments.</p>
</div>
<div className="service-card reveal-child">
<div className="service-card-number">06</div>
<div className="service-card-icon">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:armchair-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7.75 4.5a3.25 3.25 0 0 1 6.5 0v3.75h-6.5zm8 0a4.75 4.75 0 0 0-9.5 0v4.25H4v1.5a1.5 1.5 0 0 0 1.5 1.5h13a1.5 1.5 0 0 0 1.5-1.5v-1.5h-2.25zM5.5 13.25v2.333a2.417 2.417 0 0 0 2.417 2.417h8.166A2.417 2.417 0 0 0 18.5 15.583v-2.333H20v2.333A3.917 3.917 0 0 1 16.083 19.5H7.917A3.917 3.917 0 0 1 4 15.583v-2.333zM6.5 210m13 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" fill="currentColor"></path></svg>
</div>
<h3 className="">Custom Furnishings</h3>
<p className="">Bespoke furniture and fixture design using reclaimed and ethically sourced materials, crafted specifically for the spaces we design.</p>
</div>
</div>
</div>
</section>

<div className="marquee-section">
<div className="marquee-track">
<div className="marquee-item">
<span>Regenerative Design</span><div className="marquee-dot"></div>
<span>Net-Zero Architecture</span><div className="marquee-dot"></div>
<span>Passive House Certified</span><div className="marquee-dot"></div>
<span>Biophilic Interiors</span><div className="marquee-dot"></div>
<span>Locally Sourced Materials</span><div className="marquee-dot"></div>
</div>
<div className="marquee-item">
<span>Regenerative Design</span><div className="marquee-dot"></div>
<span>Net-Zero Architecture</span><div className="marquee-dot"></div>
<span>Passive House Certified</span><div className="marquee-dot"></div>
<span>Biophilic Interiors</span><div className="marquee-dot"></div>
<span>Locally Sourced Materials</span><div className="marquee-dot"></div>
</div>
</div>
</div>

<section className="projects section" id="projects">
<div className="container">
<div className="projects-header reveal">
<div className="section-label">Selected Works</div>
<h2 className="section-title">Form shaped by <em>nature</em></h2>
<p className="projects-subtitle">Explore a selection of our most recent residential and cultural projects, each uniquely responsive to its environment.</p>
</div>
<div className="projects-grid stagger-clip">
<a className="project-card" href="#">
<img alt="Modern woodland home" className="project-card-image" loading="lazy" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&amp;q=80"/>
<div className="project-card-overlay"></div>
<div className="project-card-content">
<div className="project-card-tags">
<span className="project-card-tag">Residential</span>
<span className="project-card-tag">Net-Zero</span>
</div>
<h3>The Woodland Pavilion</h3>
<p>A stilted structure that touches the forest floor lightly, featuring a rammed earth core and charred timber cladding.</p>
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
<span className="project-card-tag">Interior</span>
<span className="project-card-tag">Renovation</span>
</div>
<h3>Lumina House</h3>
<p>Passive solar principles applied to a heritage barn restoration, maximizing light.</p>
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
<span className="project-card-tag">Hospitality</span>
<span className="project-card-tag">Coastal</span>
</div>
<h3>Aura Retreat</h3>
<p>A boutique eco-resort that generates its own power and purifies its water on-site.</p>
</div>
<div className="project-card-arrow">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</a>
</div>
<div className="text-center mt-12 reveal">
<a className="btn btn-outline" href="#">
<span>View All Projects</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="process section" id="process">
<div className="container">
<div className="process-header reveal">
<div className="section-label">Our Methodology</div>
<h2 className="section-title">How we <em>collaborate</em></h2>
</div>
<div className="process-steps stagger-soft">
<div className="process-step">
<div className="process-step-number"><span>01</span></div>
<h4>Discovery &amp; Site</h4>
<p>We analyze the topography, climate data, and local ecology to inform the core conceptual direction.</p>
</div>
<div className="process-step">
<div className="process-step-number"><span>02</span></div>
<h4>Concept Design</h4>
<p>Translating environmental insights and client aspirations into initial spatial volumes and material palettes.</p>
</div>
<div className="process-step">
<div className="process-step-number"><span>03</span></div>
<h4>Technical Resolution</h4>
<p>Integrating passive systems, structural engineering, and sustainable technologies into detailed plans.</p>
</div>
<div className="process-step">
<div className="process-step-number"><span>04</span></div>
<h4>Realization</h4>
<p>Working closely with local artisans and sustainable contractors to ensure precision in the final build.</p>
</div>
</div>
</div>
</section>

<section className="testimonials section" id="testimonials">
<div className="container">
<div className="testimonials-header text-center reveal">
<div className="section-label">Client Voices</div>
<h2 className="section-title">Conversations &amp; <em>reflections</em></h2>
</div>
<div className="testimonials-grid stagger-children">
<div className="testimonial-card">
<div className="testimonial-stars">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="testimonial-text">"VERD Studio didn't just design a house; they shaped a sanctuary that feels entirely rooted in the landscape. Our energy bills are practically non-existent, yet the space feels luxurious and warm."</p>
<div className="testimonial-author">
<img alt="Sarah Jenkins" className="testimonial-avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&amp;q=80"/>
<div className="testimonial-author-info">
<h5>Sarah Jenkins</h5>
<p>Client, The Woodland Pavilion</p>
</div>
</div>
</div>
<div className="testimonial-card">
<div className="testimonial-stars">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="testimonial-text">"Their commitment to material honesty and zero-carbon practices aligned perfectly with our commercial vision. The result is a striking headquarters that represents our brand's future."</p>
<div className="testimonial-author">
<img alt="Marcus Chen" className="testimonial-avatar" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&amp;q=80"/>
<div className="testimonial-author-info">
<h5>Marcus Chen</h5>
<p>CEO, Vertex Innovations</p>
</div>
</div>
</div>
<div className="testimonial-card">
<div className="testimonial-stars">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="testimonial-text">"Working with VERD is a truly collaborative experience. They listen deeply, not just to us, but to the land itself. The house they built for us breathes with the seasons."</p>
<div className="testimonial-author">
<img alt="Elena Rostova" className="testimonial-avatar" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&amp;q=80"/>
<div className="testimonial-author-info">
<h5>Elena Rostova</h5>
<p>Client, Lumina House</p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="awards">
<div className="container awards-grid stagger-pop">
<div className="award-item">
<iconify-icon className="award-icon" icon="solar:cup-first-bold-duotone"></iconify-icon>
<span>AIA Sustainable<br/>Design Award 2023</span>
</div>
<div className="award-item">
<iconify-icon className="award-icon" icon="solar:leaf-bold-duotone"></iconify-icon>
<span>LEED Platinum<br/>Firm of the Year</span>
</div>
<div className="award-item">
<iconify-icon className="award-icon" icon="solar:medal-star-circle-bold-duotone"></iconify-icon>
<span>Dezeen Awards<br/>Architecture 2022</span>
</div>
<div className="award-item">
<iconify-icon className="award-icon" icon="solar:global-bold-duotone"></iconify-icon>
<span>Global Eco-Design<br/>Excellence</span>
</div>
<div className="award-item">
<iconify-icon className="award-icon" icon="solar:buildings-3-bold-duotone"></iconify-icon>
<span>ArchDaily Building<br/>of the Year 2021</span>
</div>
</div>
</div>

<section className="blog section" id="journal">
<div className="container">
<div className="blog-header reveal">
<div>
<div className="section-label">Studio Journal</div>
<h2 className="section-title">Thoughts on <em>design</em></h2>
</div>
<a className="btn btn-outline hidden md:inline-flex" href="#">
<span>Read Journal</span>
</a>
</div>
<div className="blog-grid stagger-scale">
<article className="blog-card">
<div className="blog-card-image-wrap">
<img alt="Timber architecture detail" className="blog-card-image" loading="lazy" src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&amp;q=80"/>
</div>
<div className="blog-card-content">
<div className="blog-card-meta">
<span className="blog-card-tag">Materiality</span>
<span className="blog-card-date">Oct 12, 2023</span>
</div>
<h3>The Resurgence of Charred Timber Facades</h3>
<p>Exploring the ancient Japanese technique of Shou Sugi Ban and why its preservation qualities make it the ultimate sustainable cladding material for modern structures.</p>
<a className="blog-card-link" href="#">Read Article <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</article>
<article className="blog-card">
<div className="blog-card-image-wrap">
<img alt="Office building interior" className="blog-card-image" loading="lazy" src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&amp;q=80"/>
</div>
<div className="blog-card-content">
<div className="blog-card-meta">
<span className="blog-card-tag">Insights</span>
<span className="blog-card-date">Sep 28, 2023</span>
</div>
<h3>Designing for Passive Cooling</h3>
<p>As global temperatures rise, architecture must adapt. How we utilize cross-ventilation, thermal mass, and solar shading to eliminate the need for mechanical AC.</p>
<a className="blog-card-link" href="#">Read Article <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</article>
<article className="blog-card">
<div className="blog-card-image-wrap">
<img alt="Abstract architectural shapes" className="blog-card-image" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="blog-card-content">
<div className="blog-card-meta">
<span className="blog-card-tag">Studio</span>
<span className="blog-card-date">Sep 04, 2023</span>
</div>
<h3>VERD Wins Dezeen Architecture Award</h3>
<p>We are honored to share that The Woodland Pavilion has been recognized globally for its harmonious integration of net-zero systems and luxurious spatial design.</p>
<a className="blog-card-link" href="#">Read Article <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</article>
</div>
<div className="text-center mt-10 md:hidden reveal">
<a className="btn btn-outline" href="#">
<span>Read Journal</span>
</a>
</div>
</div>
</section>

<section className="cta" id="contact">
<div className="cta-bg">
<div className="cta-bg-image"></div>
</div>
<div className="container cta-content reveal-zoom">
<div className="section-label" style={{marginBottom: '2rem', justifyContent: 'center'}}>Ready to Begin?</div>
<h2 className="cta-title">Let's build a legacy that <em>honors the earth.</em></h2>
<p className="cta-text">Whether you're envisioning a private retreat or a sustainable commercial headquarters, our team is ready to translate your vision into a regenerative reality.</p>
<div className="cta-actions">
<a className="btn-glow" href="mailto:hello@verdstudio.com">
<span>Start a Conversation</span>
</a>
</div>
</div>
</section>

<footer className="footer">
<div className="container">
<div className="footer-grid reveal-soft">
<div className="footer-brand">
<div className="footer-logo">VERD Studio</div>
<p>Creating sustainable, award-winning architecture that harmonizes human living with the natural world. Luxury meets responsibility.</p>
<div className="footer-social">
<a aria-label="Instagram" href="#"><iconify-icon icon="fa6-brands:instagram"></iconify-icon></a>
<a aria-label="LinkedIn" href="#"><iconify-icon icon="fa6-brands:linkedin-in"></iconify-icon></a>
<a aria-label="Pinterest" href="#"><iconify-icon icon="fa6-brands:pinterest-p"></iconify-icon></a>
<a aria-label="Twitter" href="#"><iconify-icon icon="fa6-brands:x-twitter"></iconify-icon></a>
</div>
</div>
<div className="footer-column">
<h4>Navigation</h4>
<ul>
<li><a href="#philosophy">Our Philosophy</a></li>
<li><a href="#services">Design Services</a></li>
<li><a href="#projects">Selected Works</a></li>
<li><a href="#process">Methodology</a></li>
<li><a href="#journal">Studio Journal</a></li>
</ul>
</div>
<div className="footer-column">
<h4>Contact</h4>
<ul>
<li><a href="mailto:hello@verdstudio.com">hello@verdstudio.com</a></li>
<li><a href="tel:+15550192837">+1 (555) 019-2837</a></li>
<li><a href="#">1200 Eco Boulevard,<br/>Portland, OR 97204</a></li>
</ul>
</div>
<div className="footer-column">
<h4>Newsletter</h4>
<p style={{fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1rem', lineHeight: '1.6'}}>Subscribe for insights on sustainable architecture and studio updates.</p>
<form onsubmit="event.preventDefault()" style={{display: 'flex', gap: '0.5rem'}}>
<input placeholder="Email Address" required="" style={{width: '100%', background: 'rgba(193, 127, 89, 0.06)', border: '1px solid rgba(193, 127, 89, 0.2)', borderRadius: '6px', padding: '0.6rem 1rem', color: 'var(--color-cream)', fontSize: '0.8rem', outline: 'none'}} type="email"/>
<button style={{background: 'var(--color-copper)', color: '#fff', borderRadius: '6px', padding: '0 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s'}} type="submit"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</form>
</div>
</div>
<div className="footer-bottom reveal-soft" style={{transitionDelay: '0.2s'}}>
<p>© 2023 VERD Studio Architecture. All rights reserved.</p>
<div className="footer-bottom-links">
<a href="#">Privacy Policy</a>
<a href="#">Terms of Service</a>
<a href="#">Cookies</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
