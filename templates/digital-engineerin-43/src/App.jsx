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
      
tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Geist','sans-serif'], montserrat: ['Montserrat','sans-serif'] },
animation: {
'marquee': 'marquee 40s linear infinite',
'float': 'float 6s ease-in-out infinite',
'pulse-dot': 'pulseDot 2s ease-in-out infinite',
},
keyframes: {
marquee: { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-50%)' } },
float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
pulseDot: { '0%,100%': { transform: 'scale(1)', opacity: '1' }, '50%': { transform: 'scale(1.5)', opacity: '0.7' } },
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



// ── Mobile nav ──
const menuBtn = document.getElementById('menu-btn');
const mobileNav = document.getElementById('mobile-nav');
const menuIconEl = document.getElementById('menu-icon-el');
let navOpen = false;

menuBtn.addEventListener('click', () => {
  navOpen = !navOpen;
  mobileNav.classList.toggle('hidden', !navOpen);
  menuIconEl.setAttribute('icon', navOpen ? 'lucide:x' : 'lucide:menu');
});
document.querySelectorAll('[data-mobile-link]').forEach(el => {
  el.addEventListener('click', () => {
    navOpen = false;
    mobileNav.classList.add('hidden');
    menuIconEl.setAttribute('icon', 'lucide:menu');
  });
});

// ── Nav shadow on scroll ──
window.addEventListener('scroll', () => {
  document.getElementById('nav').style.filter = window.scrollY > 10 ? 'drop-shadow(0 4px 16px rgba(0,0,0,0.07))' : '';
}, { passive: true });

// ── Smooth scroll ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

// ── Scroll reveal ──
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); ro.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .reveal-l, .reveal-r').forEach(el => ro.observe(el));

// ── Counter animation ──
const countUp = (el, target, dur) => {
  let start = null;
  const step = ts => {
    if (!start) start = ts;
    const p = Math.min((ts - start) / dur, 1);
    el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target);
    if (p < 1) requestAnimationFrame(step); else el.textContent = target;
  };
  requestAnimationFrame(step);
};

const co = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      countUp(e.target, parseInt(e.target.dataset.count), 1600);
      co.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => co.observe(el));

// ── FAQ accordion (click-based, one open at a time) ──
document.querySelectorAll('details').forEach(d => {
  d.querySelector('summary').addEventListener('click', e => {
    e.preventDefault();
    const isOpen = d.hasAttribute('open');
    document.querySelectorAll('details[open]').forEach(o => o.removeAttribute('open'));
    if (!isOpen) d.setAttribute('open', '');
  });
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
      

<header className="fixed inset-x-0 top-0 z-50 transition-shadow duration-300" id="nav">
<div className="glass border-b border-white/40">
<div className="max-w-7xl mx-auto px-5 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
<a className="text-xl lg:text-2xl font-bold tracking-tight font-montserrat" href="#">Agency<span style={{color: 'var(--cyan)'}}>ze</span></a>
<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#how-it-works">Comment ça marche</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-primary text-sm font-semibold group" href="#contact">
          Démarrer un projet
          <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
<button aria-label="Menu" className="lg:hidden w-10 h-10 rounded-xl border border-stone-200 bg-white flex items-center justify-center text-stone-600" id="menu-btn">
<iconify-icon icon="lucide:menu" id="menu-icon-el" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="hidden lg:hidden glass border-b border-white/30" id="mobile-nav">
<div className="max-w-7xl mx-auto px-5 py-3 flex flex-col gap-1">
<a className="px-4 py-3 rounded-xl text-sm font-medium text-stone-600 hover:bg-stone-100 transition-colors" data-mobile-link="" href="#services">Services</a>
<a className="px-4 py-3 rounded-xl text-sm font-medium text-stone-600 hover:bg-stone-100 transition-colors" data-mobile-link="" href="#how-it-works">Comment ça marche</a>
<a className="px-4 py-3 rounded-xl text-sm font-medium text-stone-600 hover:bg-stone-100 transition-colors" data-mobile-link="" href="#faq">FAQ</a>
<a className="mt-1 px-4 py-3 rounded-xl text-sm font-semibold text-white btn-primary text-center" data-mobile-link="" href="#contact">Démarrer un projet</a>
</div>
</div>
</header>

<section className="relative min-h-screen flex items-center pt-16 lg:pt-20 overflow-hidden noise-overlay">
<div className="absolute inset-0 grid-bg pointer-events-none"></div>
<div className="absolute top-1/4 right-0 w-[700px] h-[700px] rounded-full pointer-events-none" style={{background: 'radial-gradient(circle, rgba(114,205,216,0.11) 0%, transparent 65%)'}}></div>
<div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full pointer-events-none" style={{background: 'radial-gradient(circle, rgba(10,23,46,0.05) 0%, transparent 65%)'}}></div>
<div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center w-full">

<div className="space-y-6 lg:space-y-7">
<div className="hero-entry inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-stone-200 bg-white text-xs font-semibold text-stone-600 shadow-sm" style={{animationDelay: '0s'}}>
<span className="w-2 h-2 rounded-full animate-pulse-dot" style={{background: 'var(--cyan)'}}></span>
        Infrastructure d'exécution white label
      </div>
<h1 className="hero-entry leading-[1.05] font-bold text-stone-900 tracking-tight font-montserrat" style={{fontSize: 'clamp(2.2rem,5.5vw,4.2rem)', animationDelay: '0.1s'}}>
        L'équipe invisible<br/>derrière
        <span className="relative inline-block whitespace-nowrap" style={{color: 'var(--cyan)'}}>
          ta croissance.
          <svg aria-hidden="true" className="absolute -bottom-1.5 left-0 w-full overflow-visible" fill="none" height="10" viewbox="0 0 340 10" xmlns="http://www.w3.org/2000/svg">
<path className="underline-path" d="M4 7 Q85 3 170 7 Q255 11 336 7" fill="none" opacity="0.7" stroke="#72CDD8" strokeLinecap="round" strokeWidth="3"></path>
</svg>
</span>
</h1>
<p className="hero-entry text-stone-500 text-base lg:text-lg leading-relaxed max-w-lg" style={{animationDelay: '0.2s'}}>
        Tu gères la stratégie et la relation client. On s'occupe du reste — production, marketing, tech, support — en marque blanche totale. Tes clients ne sauront jamais qu'on existe.
      </p>
<div className="hero-entry flex flex-col sm:flex-row gap-3 pt-1" style={{animationDelay: '0.3s'}}>
<a className="btn-glass inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-stone-900 text-sm group" href="#contact">
          Activer Agencyze gratuitement
          <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
<a className="btn-outline inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm" href="#how-it-works">
<iconify-icon icon="lucide:play-circle" width="16"></iconify-icon>
          Voir comment ça marche
        </a>
</div>

<div className="hero-entry flex items-center gap-4" style={{animationDelay: '0.4s'}}>
<div className="flex -space-x-2.5">
<div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white" style={{background: 'var(--navy)'}}>A</div>
<div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white" style={{background: '#1e4d6b'}}>M</div>
<div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold" style={{background: 'var(--cyan)', color: 'var(--navy)'}}>S</div>
<div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white" style={{background: '#2c6e8a'}}>J</div>
</div>
<div>
<div className="flex items-center gap-0.5 mb-0.5">
<iconify-icon className="text-amber-400" icon="lucide:star" width="11"></iconify-icon>
<iconify-icon className="text-amber-400" icon="lucide:star" width="11"></iconify-icon>
<iconify-icon className="text-amber-400" icon="lucide:star" width="11"></iconify-icon>
<iconify-icon className="text-amber-400" icon="lucide:star" width="11"></iconify-icon>
<iconify-icon className="text-amber-400" icon="lucide:star" width="11"></iconify-icon>
</div>
<p className="text-xs text-stone-500">Utilisé par <span className="font-semibold text-stone-800">+40 agences &amp; freelances</span></p>
</div>
</div>
</div>

<div className="relative flex items-center justify-center h-[440px] lg:h-[500px]">
<div className="absolute inset-0 rounded-3xl pointer-events-none" style={{background: 'radial-gradient(ellipse at center, rgba(114,205,216,0.13) 0%, transparent 65%)'}}></div>

<div className="glass rounded-2xl p-4 shadow-xl absolute top-0 left-0 w-64 float-0">
<div className="flex items-center gap-3 mb-3">
<div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{background: 'rgba(114,205,216,0.18)'}}>
<iconify-icon icon="lucide:eye-off" style={{color: 'var(--navy)'}} width="17"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-stone-900">Livrable prêt</p>
<p className="text-[10px] text-stone-400">Envoyé sous ta marque</p>
</div>
</div>
<div className="w-full h-1.5 rounded-full bg-stone-100 overflow-hidden">
<div className="h-full rounded-full" style={{width: '92%', background: 'var(--cyan)'}}></div>
</div>
<p className="text-[10px] text-stone-400 mt-1.5">Projet #142 — 92% complété</p>
</div>

<div className="glass rounded-2xl p-5 shadow-2xl z-10 w-72 float-1">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs text-stone-400 mb-1">Capacité scalée ce mois</p>
<p className="font-montserrat font-bold text-3xl" style={{color: 'var(--navy)'}}>+60%</p>
</div>
<div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{background: 'var(--cyan)'}}>
<iconify-icon icon="lucide:trending-up" style={{color: 'var(--navy)'}} width="18"></iconify-icon>
</div>
</div>
<div className="space-y-2 text-[11px]">
<div className="flex items-center justify-between">
<span className="flex items-center gap-2 text-stone-500"><span className="w-2 h-2 rounded-full inline-block" style={{background: 'var(--cyan)'}}></span>Clients gérés</span>
<span className="font-semibold text-stone-800">+8 nouveaux</span>
</div>
<div className="flex items-center justify-between">
<span className="flex items-center gap-2 text-stone-500"><span className="w-2 h-2 rounded-full bg-stone-300 inline-block"></span>Recrutements</span>
<span className="font-semibold text-stone-800">0 embauche</span>
</div>
</div>
</div>

<div className="rounded-2xl p-4 shadow-xl absolute bottom-4 right-0 w-60 float-2" style={{background: 'var(--navy)'}}>
<div className="flex items-center gap-2 mb-3">
<span className="w-2 h-2 rounded-full animate-pulse-dot" style={{background: 'var(--cyan)'}}></span>
<p className="text-[11px] font-semibold text-white">Agencyze au travail</p>
</div>
<div className="space-y-1.5">
<div className="flex items-center gap-2 rounded-lg px-3 py-2" style={{background: 'rgba(255,255,255,0.08)'}}>
<iconify-icon icon="lucide:check" style={{color: 'var(--cyan)'}} width="12"></iconify-icon>
<span className="text-[10px] text-white/80">Post LinkedIn rédigé</span>
</div>
<div className="flex items-center gap-2 rounded-lg px-3 py-2" style={{background: 'rgba(255,255,255,0.08)'}}>
<iconify-icon icon="lucide:check" style={{color: 'var(--cyan)'}} width="12"></iconify-icon>
<span className="text-[10px] text-white/80">Campagne Meta livrée</span>
</div>
<div className="flex items-center gap-2 rounded-lg px-3 py-2 border" style={{background: 'rgba(255, 255, 255, 0.04)', borderColor: 'rgba(255,255,255,0.1)'}}>
<iconify-icon icon="lucide:loader" style={{color: 'rgba(114,205,216,0.7)'}} width="12"></iconify-icon>
<span className="text-[10px] text-white/40">Site vitrine en cours…</span>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="bg-white border-y border-stone-100">
<div className="max-w-7xl mx-auto px-5 lg:px-10 py-10">
<p className="text-center text-[11px] font-bold text-stone-400 uppercase tracking-[0.14em] mb-7">Choisi par des agences, freelances et PME ambitieuses</p>
<div className="overflow-hidden relative">
<div className="absolute left-0 inset-y-0 w-16 lg:w-28 z-10 pointer-events-none" style={{background: 'linear-gradient(to right,white,transparent)'}}></div>
<div className="absolute right-0 inset-y-0 w-16 lg:w-28 z-10 pointer-events-none" style={{background: 'linear-gradient(to left,white,transparent)'}}></div>
<div className="flex w-max animate-marquee">
<div className="flex items-center gap-12 lg:gap-20 opacity-35 pr-12 lg:pr-20">
<span className="flex items-center gap-2 text-base lg:text-lg font-bold font-montserrat whitespace-nowrap"><iconify-icon icon="lucide:briefcase" width="16"></iconify-icon> AgenceX</span>
<span className="flex items-center gap-2 text-base lg:text-lg font-bold font-montserrat whitespace-nowrap"><iconify-icon icon="lucide:zap" width="16"></iconify-icon> VelocityLab</span>
<span className="flex items-center gap-2 text-base lg:text-lg font-bold font-montserrat whitespace-nowrap"><iconify-icon icon="lucide:globe" width="16"></iconify-icon> GrowthCo</span>
<span className="flex items-center gap-2 text-base lg:text-lg font-bold font-montserrat whitespace-nowrap"><iconify-icon icon="lucide:layers" width="16"></iconify-icon> ScaleForce</span>
<span className="flex items-center gap-2 text-base lg:text-lg font-bold font-montserrat whitespace-nowrap"><iconify-icon icon="lucide:users" width="16"></iconify-icon> PartnerHub</span>
<span className="flex items-center gap-2 text-base lg:text-lg font-bold font-montserrat whitespace-nowrap"><iconify-icon icon="lucide:cpu" width="16"></iconify-icon> TechFlow</span>
<span className="flex items-center gap-2 text-base lg:text-lg font-bold font-montserrat whitespace-nowrap"><iconify-icon icon="lucide:trending-up" width="16"></iconify-icon> BoostAgency</span>
</div>
<div className="flex items-center gap-12 lg:gap-20 opacity-35 pr-12 lg:pr-20">
<span className="flex items-center gap-2 text-base lg:text-lg font-bold font-montserrat whitespace-nowrap"><iconify-icon icon="lucide:briefcase" width="16"></iconify-icon> AgenceX</span>
<span className="flex items-center gap-2 text-base lg:text-lg font-bold font-montserrat whitespace-nowrap"><iconify-icon icon="lucide:zap" width="16"></iconify-icon> VelocityLab</span>
<span className="flex items-center gap-2 text-base lg:text-lg font-bold font-montserrat whitespace-nowrap"><iconify-icon icon="lucide:globe" width="16"></iconify-icon> GrowthCo</span>
<span className="flex items-center gap-2 text-base lg:text-lg font-bold font-montserrat whitespace-nowrap"><iconify-icon icon="lucide:layers" width="16"></iconify-icon> ScaleForce</span>
<span className="flex items-center gap-2 text-base lg:text-lg font-bold font-montserrat whitespace-nowrap"><iconify-icon icon="lucide:users" width="16"></iconify-icon> PartnerHub</span>
<span className="flex items-center gap-2 text-base lg:text-lg font-bold font-montserrat whitespace-nowrap"><iconify-icon icon="lucide:cpu" width="16"></iconify-icon> TechFlow</span>
<span className="flex items-center gap-2 text-base lg:text-lg font-bold font-montserrat whitespace-nowrap"><iconify-icon icon="lucide:trending-up" width="16"></iconify-icon> BoostAgency</span>
</div>
</div>
</div>
</div>
</div>

<section className="py-20 lg:py-32 bg-white">
<div className="max-w-7xl mx-auto px-5 lg:px-10">
<div className="text-center max-w-2xl mx-auto mb-14 reveal">
<p className="text-xs font-bold uppercase tracking-[0.15em] mb-3" style={{color: 'var(--cyan)'}}>Le problème qu'on résout</p>
<h2 className="font-montserrat font-bold text-3xl lg:text-[2.7rem] leading-tight tracking-tight text-stone-900 mb-4">
        Tu passes ta vie à gérer <span className="text-stone-400">au lieu de vendre.</span>
</h2>
<p className="text-stone-500 text-base leading-relaxed">L'opérationnel bouffe ton temps, freine ta croissance. Agencyze t'en libère définitivement.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
<div className="reveal d1 card-hover p-7 bg-red-50 border border-red-100 rounded-2xl group">
<div className="w-11 h-11 bg-red-100 text-red-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:clock" width="22"></iconify-icon>
</div>
<h3 className="font-montserrat font-bold text-stone-900 text-lg mb-2">Débordé par la production ?</h3>
<p className="text-stone-500 text-sm leading-relaxed">Tu passes tes nuits à exécuter ce que tu devrais déléguer. Ton vrai rôle, c'est de vendre et de faire grandir ton business — pas de livrer toi-même.</p>
</div>
<div className="reveal d2 card-hover p-7 bg-amber-50 border border-amber-100 rounded-2xl group">
<div className="w-11 h-11 bg-amber-100 text-amber-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:users-x" width="22"></iconify-icon>
</div>
<h3 className="font-montserrat font-bold text-stone-900 text-lg mb-2">Recruter coûte trop cher ?</h3>
<p className="text-stone-500 text-sm leading-relaxed">Un salarié, c'est des charges, du management, des risques. Agencyze te donne la capacité d'une équipe complète sans aucune contrainte RH.</p>
</div>
<div className="reveal d3 card-hover p-7 bg-blue-50 border border-blue-100 rounded-2xl group">
<div className="w-11 h-11 bg-blue-100 text-blue-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:shield-off" width="22"></iconify-icon>
</div>
<h3 className="font-montserrat font-bold text-stone-900 text-lg mb-2">Tu refuses des missions ?</h3>
<p className="text-stone-500 text-sm leading-relaxed">Chaque "je n'ai pas le temps" est une opportunité et un revenu perdus. Avec Agencyze, tu dis oui à tout — on livre à ta place, sous ton nom.</p>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 relative overflow-hidden" style={{background: 'var(--navy)'}}>
<div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="absolute -right-40 top-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{background: 'radial-gradient(circle, rgba(114,205,216,0.1) 0%, transparent 60%)'}}></div>
<div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
<div className="reveal stat-card text-center p-6 rounded-2xl border" style={{background: 'rgba(255, 255, 255, 0.04)', borderColor: 'rgba(255,255,255,0.07)'}}>
<p className="font-montserrat font-bold text-white mb-1" style={{fontSize: 'clamp(2rem,4vw,3rem)'}}><span data-count="40">0</span>+</p>
<p className="text-xs leading-relaxed" style={{color: 'rgba(114,205,216,0.8)'}}>Agences &amp; freelances partenaires</p>
</div>
<div className="reveal d1 stat-card text-center p-6 rounded-2xl border" style={{background: 'rgba(255, 255, 255, 0.04)', borderColor: 'rgba(255,255,255,0.07)'}}>
<p className="font-montserrat font-bold text-white mb-1" style={{fontSize: 'clamp(2rem,4vw,3rem)'}}>+<span data-count="60">0</span>%</p>
<p className="text-xs leading-relaxed" style={{color: 'rgba(114,205,216,0.8)'}}>De capacité gagnée sans recrutement</p>
</div>
<div className="reveal d2 stat-card text-center p-6 rounded-2xl border" style={{background: 'rgba(255, 255, 255, 0.04)', borderColor: 'rgba(255,255,255,0.07)'}}>
<p className="font-montserrat font-bold text-white mb-1" style={{fontSize: 'clamp(2rem,4vw,3rem)'}}>-<span data-count="35">0</span>%</p>
<p className="text-xs leading-relaxed" style={{color: 'rgba(114,205,216,0.8)'}}>Sur les coûts fixes en moyenne</p>
</div>
<div className="reveal d3 stat-card text-center p-6 rounded-2xl border" style={{background: 'rgba(255, 255, 255, 0.04)', borderColor: 'rgba(255,255,255,0.07)'}}>
<p className="font-montserrat font-bold text-white mb-1" style={{fontSize: 'clamp(2rem,4vw,3rem)'}}><span data-count="100">0</span>%</p>
<p className="text-xs leading-relaxed" style={{color: 'rgba(114,205,216,0.8)'}}>White label, zéro visibilité externe</p>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-white" id="services">
<div className="max-w-7xl mx-auto px-5 lg:px-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
<div className="reveal-l lg:sticky lg:top-28">
<p className="text-xs font-bold uppercase tracking-[0.15em] mb-3" style={{color: 'var(--cyan)'}}>Ce qu'on exécute pour toi</p>
<h2 className="font-montserrat font-bold text-3xl lg:text-[2.7rem] leading-tight tracking-tight text-stone-900 mb-5">
          Tout ce qui te freine,<br/>on s'en charge.
        </h2>
<p className="text-stone-500 text-base leading-relaxed mb-8 max-w-md">Du community management à la création de site, en passant par la publicité, le SEO et le support — Agencyze couvre l'intégralité de ta chaîne de production digitale, en marque blanche totale.</p>
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-primary text-sm font-semibold group" href="#contact">
          Obtenir un devis gratuit
          <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
<div className="reveal-r grid grid-cols-1 sm:grid-cols-2 gap-2.5">
<div className="service-tag flex items-center gap-3 p-4 bg-stone-50 border border-stone-200 rounded-xl cursor-default">
<div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{background: 'rgba(114,205,216,0.15)'}}><iconify-icon icon="lucide:message-circle" style={{color: 'var(--navy)'}} width="17"></iconify-icon></div>
<span className="text-sm font-medium text-stone-800">Community Management</span>
</div>
<div className="service-tag flex items-center gap-3 p-4 bg-stone-50 border border-stone-200 rounded-xl cursor-default">
<div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{background: 'rgba(114,205,216,0.15)'}}><iconify-icon icon="lucide:target" style={{color: 'var(--navy)'}} width="17"></iconify-icon></div>
<span className="text-sm font-medium text-stone-800">Lead Gen &amp; Prospection</span>
</div>
<div className="service-tag flex items-center gap-3 p-4 bg-stone-50 border border-stone-200 rounded-xl cursor-default">
<div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{background: 'rgba(114,205,216,0.15)'}}><iconify-icon icon="lucide:monitor" style={{color: 'var(--navy)'}} width="17"></iconify-icon></div>
<span className="text-sm font-medium text-stone-800">Création de site internet</span>
</div>
<div className="service-tag flex items-center gap-3 p-4 bg-stone-50 border border-stone-200 rounded-xl cursor-default">
<div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{background: 'rgba(114,205,216,0.15)'}}><iconify-icon icon="lucide:megaphone" style={{color: 'var(--navy)'}} width="17"></iconify-icon></div>
<span className="text-sm font-medium text-stone-800">Digital Ads</span>
</div>
<div className="service-tag flex items-center gap-3 p-4 bg-stone-50 border border-stone-200 rounded-xl cursor-default">
<div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{background: 'rgba(114,205,216,0.15)'}}><iconify-icon icon="lucide:search" style={{color: 'var(--navy)'}} width="17"></iconify-icon></div>
<span className="text-sm font-medium text-stone-800">SEO</span>
</div>
<div className="service-tag flex items-center gap-3 p-4 bg-stone-50 border border-stone-200 rounded-xl cursor-default">
<div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{background: 'rgba(114,205,216,0.15)'}}><iconify-icon icon="lucide:file-text" style={{color: 'var(--navy)'}} width="17"></iconify-icon></div>
<span className="text-sm font-medium text-stone-800">Content Marketing</span>
</div>
<div className="service-tag flex items-center gap-3 p-4 bg-stone-50 border border-stone-200 rounded-xl cursor-default">
<div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{background: 'rgba(114,205,216,0.15)'}}><iconify-icon icon="lucide:palette" style={{color: 'var(--navy)'}} width="17"></iconify-icon></div>
<span className="text-sm font-medium text-stone-800">WebDesign</span>
</div>
<div className="service-tag flex items-center gap-3 p-4 bg-stone-50 border border-stone-200 rounded-xl cursor-default">
<div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{background: 'rgba(114,205,216,0.15)'}}><iconify-icon icon="lucide:share-2" style={{color: 'var(--navy)'}} width="17"></iconify-icon></div>
<span className="text-sm font-medium text-stone-800">Social Media</span>
</div>
<div className="service-tag flex items-center gap-3 p-4 bg-stone-50 border border-stone-200 rounded-xl cursor-default">
<div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{background: 'rgba(114,205,216,0.15)'}}><iconify-icon icon="lucide:mail" style={{color: 'var(--navy)'}} width="17"></iconify-icon></div>
<span className="text-sm font-medium text-stone-800">Email Marketing</span>
</div>
<div className="service-tag flex items-center gap-3 p-4 bg-stone-50 border border-stone-200 rounded-xl cursor-default">
<div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{background: 'rgba(114,205,216,0.15)'}}><iconify-icon icon="lucide:pen-tool" style={{color: 'var(--navy)'}} width="17"></iconify-icon></div>
<span className="text-sm font-medium text-stone-800">Copywriting</span>
</div>
<div className="service-tag sm:col-span-2 flex items-center gap-3 p-4 rounded-xl border cursor-default" style={{background: 'var(--navy)', borderColor: 'var(--navy)'}}>
<div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{background: 'rgba(114,205,216,0.2)'}}><iconify-icon icon="lucide:headphones" style={{color: 'var(--cyan)'}} width="17"></iconify-icon></div>
<span className="text-sm font-medium text-white">Support client</span>
<span className="ml-auto text-[10px] px-2.5 py-1 rounded-full font-semibold" style={{background: 'rgba(114, 205, 216, 0.18)', color: 'var(--cyan)'}}>+ bien d'autres</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-stone-50">
<div className="max-w-7xl mx-auto px-5 lg:px-10">
<div className="text-center max-w-2xl mx-auto mb-12 reveal">
<p className="text-xs font-bold uppercase tracking-[0.15em] mb-3" style={{color: 'var(--cyan)'}}>À qui s'adresse Agencyze ?</p>
<h2 className="font-montserrat font-bold text-3xl lg:text-[2.7rem] leading-tight tracking-tight text-stone-900">
        Pour tous ceux qui produisent, <span className="text-stone-400">vendent ou opèrent.</span>
</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="reveal d1 card-hover card-hover-cyan p-6 rounded-2xl border border-stone-200 bg-white group">
<div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{background: 'rgba(114,205,216,0.15)'}}><iconify-icon icon="lucide:briefcase" style={{color: 'var(--navy)'}} width="20"></iconify-icon></div>
<h3 className="font-montserrat font-bold text-stone-900 mb-2">Agences</h3>
<p className="text-stone-500 text-sm leading-relaxed">Marketing, growth, dev, design — Agencyze absorbe ton overflow sans diluer ta marge ni alourdir ta structure.</p>
</div>
<div className="reveal d2 card-hover card-hover-cyan p-6 rounded-2xl border border-stone-200 bg-white group">
<div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{background: 'rgba(114,205,216,0.15)'}}><iconify-icon icon="lucide:user" style={{color: 'var(--navy)'}} width="20"></iconify-icon></div>
<h3 className="font-montserrat font-bold text-stone-900 mb-2">Freelances</h3>
<p className="text-stone-500 text-sm leading-relaxed">Débordé de missions ? On exécute à ta place. Tu gardes le client, tu encaisses la marge, on fait le boulot.</p>
</div>
<div className="reveal d3 card-hover card-hover-cyan p-6 rounded-2xl border border-stone-200 bg-white group">
<div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{background: 'rgba(114,205,216,0.15)'}}><iconify-icon icon="lucide:building-2" style={{color: 'var(--navy)'}} width="20"></iconify-icon></div>
<h3 className="font-montserrat font-bold text-stone-900 mb-2">PME &amp; Startups</h3>
<p className="text-stone-500 text-sm leading-relaxed">Scale vite sans alourdir ta structure. Une équipe opérationnelle experte, activable à la demande.</p>
</div>
<div className="reveal d4 card-hover card-hover-cyan p-6 rounded-2xl border border-stone-200 bg-white group">
<div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{background: 'rgba(114,205,216,0.15)'}}><iconify-icon icon="lucide:layers" style={{color: 'var(--navy)'}} width="20"></iconify-icon></div>
<h3 className="font-montserrat font-bold text-stone-900 mb-2">Prestataires</h3>
<p className="text-stone-500 text-sm leading-relaxed">Étends ton offre sans recruter. Agencyze devient le back-office invisible qui te permet de tout accepter.</p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-white" id="how-it-works">
<div className="max-w-7xl mx-auto px-5 lg:px-10">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<p className="text-xs font-bold uppercase tracking-[0.15em] mb-3" style={{color: 'var(--cyan)'}}>Le process</p>
<h2 className="font-montserrat font-bold text-3xl lg:text-[2.7rem] leading-tight tracking-tight text-stone-900 mb-4">
        Simple. Rapide. Sans friction.
      </h2>
<p className="text-stone-500 text-base leading-relaxed">De ton brief à la livraison finale, tout est pensé pour que tu n'aies rien à gérer de ton côté.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
<div className="reveal d1 step-card p-6 bg-stone-50 border border-stone-200 rounded-2xl relative">
<div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm font-montserrat mb-5 text-white" style={{background: 'var(--navy)'}}>01</div>
<h3 className="font-montserrat font-bold text-stone-900 mb-2">Tu nous briefs</h3>
<p className="text-stone-500 text-sm leading-relaxed">Soumets ton besoin en quelques minutes via ton espace client dédié.</p>
<div className="hidden md:flex absolute top-9 -right-3 z-10 w-6 h-6 rounded-full items-center justify-center bg-white border border-stone-200 shadow-sm">
<iconify-icon className="text-stone-400" icon="lucide:chevron-right" width="11"></iconify-icon>
</div>
</div>
<div className="reveal d2 step-card p-6 bg-stone-50 border border-stone-200 rounded-2xl relative">
<div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm font-montserrat mb-5 text-white" style={{background: 'var(--navy)'}}>02</div>
<h3 className="font-montserrat font-bold text-stone-900 mb-2">On exécute</h3>
<p className="text-stone-500 text-sm leading-relaxed">Nos experts travaillent en marque blanche. Zéro management de ta part, zéro visibilité côté client.</p>
<div className="hidden md:flex absolute top-9 -right-3 z-10 w-6 h-6 rounded-full items-center justify-center bg-white border border-stone-200 shadow-sm">
<iconify-icon className="text-stone-400" icon="lucide:chevron-right" width="11"></iconify-icon>
</div>
</div>
<div className="reveal d3 step-card p-6 bg-stone-50 border border-stone-200 rounded-2xl relative">
<div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm font-montserrat mb-5 text-white" style={{background: 'var(--navy)'}}>03</div>
<h3 className="font-montserrat font-bold text-stone-900 mb-2">Tu reçois les livrables</h3>
<p className="text-stone-500 text-sm leading-relaxed">Livrables prêts à envoyer à tes clients, à ton image, sans mention d'Agencyze.</p>
<div className="hidden md:flex absolute top-9 -right-3 z-10 w-6 h-6 rounded-full items-center justify-center bg-white border border-stone-200 shadow-sm">
<iconify-icon className="text-stone-400" icon="lucide:chevron-right" width="11"></iconify-icon>
</div>
</div>
<div className="reveal d4 step-card p-6 border rounded-2xl" style={{background: 'var(--navy)', borderColor: 'var(--navy)'}}>
<div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm font-montserrat mb-5" style={{background: 'var(--cyan)', color: 'var(--navy)'}}>04</div>
<h3 className="font-montserrat font-bold text-white mb-2">T'as juste à encaisser 😉</h3>
<p className="text-sm leading-relaxed" style={{color: 'rgba(255,255,255,0.55)'}}>Tu gardes la relation client et la facturation. Aucune friction, aucune visibilité côté client final.</p>
</div>
</div>

<div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 p-6 lg:p-7 rounded-2xl border" style={{background: 'rgba(114, 205, 216, 0.05)', borderColor: 'rgba(114,205,216,0.18)'}}>
<div className="flex items-start gap-3">
<iconify-icon className="shrink-0 mt-0.5" icon="lucide:eye-off" style={{color: 'var(--cyan)'}} width="17"></iconify-icon>
<div><p className="text-sm font-semibold text-stone-900 mb-0.5">100% White Label</p><p className="text-xs text-stone-500">Tes clients ne sauront jamais qu'on est là.</p></div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="shrink-0 mt-0.5" icon="lucide:award" style={{color: 'var(--cyan)'}} width="17"></iconify-icon>
<div className=""><p className="text-sm font-semibold text-stone-900 mb-0.5">Experts mondiaux</p><p className="text-xs text-stone-500">Les meilleurs talents partout dans le monde.</p></div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="shrink-0 mt-0.5" icon="lucide:sliders" style={{color: 'var(--cyan)'}} width="17"></iconify-icon>
<div><p className="text-sm font-semibold text-stone-900 mb-0.5">Aucun contrat rigide</p><p className="text-xs text-stone-500">Tu actives Agencyze quand tu veux.</p></div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="shrink-0 mt-0.5" icon="lucide:trending-up" style={{color: 'var(--cyan)'}} width="17"></iconify-icon>
<div><p className="text-sm font-semibold text-stone-900 mb-0.5">Scalabilité infinie</p><p className="text-xs text-stone-500">Plus de clients sans embaucher.</p></div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="shrink-0 mt-0.5" icon="lucide:piggy-bank" style={{color: 'var(--cyan)'}} width="17"></iconify-icon>
<div><p className="text-sm font-semibold text-stone-900 mb-0.5">Tarifs compétitifs</p><p className="text-xs text-stone-500">Moins cher qu'un recrutement interne.</p></div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 relative overflow-hidden" id="results" style={{background: 'var(--navy)'}}>
<div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="absolute -right-32 top-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{background: 'radial-gradient(circle, rgba(114,205,216,0.1) 0%, transparent 60%)'}}></div>
<div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
<div className="reveal-l">
<div className="flex items-center gap-2.5 mb-6">
<span className="w-2 h-2 rounded-full animate-pulse-dot" style={{background: 'var(--cyan)'}}></span>
<span className="font-mono text-xs uppercase tracking-wider" style={{color: 'var(--cyan)'}}>Résultats vérifiés</span>
</div>
<h2 className="font-montserrat font-bold text-3xl lg:text-[2.7rem] leading-tight tracking-tight text-white mb-5">
        Des résultats concrets,<br/>pas des promesses.
      </h2>
<p className="text-base leading-relaxed mb-8 max-w-md" style={{color: 'rgba(255,255,255,0.5)'}}>Nos partenaires scalent sans recruter, livrent plus vite et récupèrent du temps pour ce qui compte vraiment : vendre et innover.</p>
<a className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm group btn-cyan" href="#contact">
        Rejoindre nos partenaires
        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
<div className="reveal-r">
<div className="rounded-2xl p-6 lg:p-7 border" style={{background: 'rgba(255, 255, 255, 0.03)', borderColor: 'rgba(255,255,255,0.07)', fontFamily: '\'Geist Mono\', monospace'}}>
<div className="flex items-center justify-between border-b pb-4 mb-5" style={{borderColor: 'rgba(255,255,255,0.07)'}}>
<span className="text-xs text-stone-400">performance_report.json</span>
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full" style={{background: 'rgba(255,69,58,0.5)'}}></div>
<div className="w-3 h-3 rounded-full" style={{background: 'rgba(255,214,10,0.5)'}}></div>
<div className="w-3 h-3 rounded-full" style={{background: 'rgba(52,199,89,0.5)'}}></div>
</div>
</div>
<div className="grid grid-cols-2 gap-3 mb-4">
<div className="p-4 rounded-xl border" style={{background: 'rgba(255, 255, 255, 0.04)', borderColor: 'rgba(255,255,255,0.06)'}}>
<p className="text-[11px] mb-2" style={{color: 'rgba(255,255,255,0.35)'}}>Coûts fixes</p>
<p className="text-3xl font-bold text-white mb-1">-35%</p>
<p className="text-[10px]" style={{color: 'var(--cyan)'}}>Agence partenaire / Scale</p>
</div>
<div className="p-4 rounded-xl border" style={{background: 'rgba(255, 255, 255, 0.04)', borderColor: 'rgba(255,255,255,0.06)'}}>
<p className="text-[11px] mb-2" style={{color: 'rgba(255,255,255,0.35)'}}>Capacité livrée</p>
<p className="text-3xl font-bold text-white mb-1">+60%</p>
<p className="text-[10px]" style={{color: 'var(--cyan)'}}>Freelance / 0 recrutement</p>
</div>
</div>
<div className="space-y-2 text-xs">
<div className="flex items-center justify-between p-3 rounded-lg" style={{background: 'rgba(255,255,255,0.03)'}}>
<div className="flex items-center gap-2.5">
<iconify-icon icon="lucide:timer" style={{color: 'var(--cyan)'}} width="13"></iconify-icon>
<span className="text-stone-300">Délai de livraison : 48h → 24h</span>
</div>
<iconify-icon icon="lucide:check" style={{color: 'var(--cyan)'}} width="13"></iconify-icon>
</div>
<div className="flex items-center justify-between p-3 rounded-lg" style={{background: 'rgba(255,255,255,0.03)'}}>
<div className="flex items-center gap-2.5">
<iconify-icon icon="lucide:shield" style={{color: 'var(--cyan)'}} width="13"></iconify-icon>
<span className="text-stone-300">White label opérationnel en 72h</span>
</div>
<iconify-icon icon="lucide:check" style={{color: 'var(--cyan)'}} width="13"></iconify-icon>
</div>
<div className="flex items-center justify-between p-3 rounded-lg" style={{background: 'rgba(255,255,255,0.03)'}}>
<div className="flex items-center gap-2.5">
<iconify-icon icon="lucide:users" style={{color: 'var(--cyan)'}} width="13"></iconify-icon>
<span className="text-stone-300">+8 clients gérés ce mois, 0 embauche</span>
</div>
<iconify-icon icon="lucide:check" style={{color: 'var(--cyan)'}} width="13"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-white" id="faq">
<div className="max-w-7xl mx-auto px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
<div className="lg:col-span-4 reveal-l">
<p className="text-xs font-bold uppercase tracking-[0.15em] mb-3" style={{color: 'var(--cyan)'}}>FAQ</p>
<h2 className="font-montserrat font-bold text-3xl lg:text-4xl leading-tight tracking-tight text-stone-900 mb-4">Tout ce que tu veux savoir.</h2>
<p className="text-stone-500 text-sm leading-relaxed mb-6">Une question ? On a la réponse.</p>
<a className="inline-flex items-center gap-2 text-sm font-semibold group" href="#contact" style={{color: 'var(--navy)'}}>
        Parler à l'équipe <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
<div className="lg:col-span-8 reveal-r space-y-3">
<details className="border border-stone-200 rounded-2xl bg-stone-50">
<summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-stone-900 text-sm lg:text-[0.95rem] list-none select-none">
          À qui s'adresse Agencyze ?
          <iconify-icon className="faq-chevron shrink-0 text-stone-400 ml-4" icon="lucide:chevron-down" width="18"></iconify-icon>
</summary>
<div className="faq-body"><p className="px-6 pb-5 pt-0 text-stone-500 text-sm leading-relaxed border-t border-stone-100">À toutes les agences (marketing, growth, dev, design), aux freelances débordés, aux prestataires de services et aux entreprises qui veulent déléguer leurs projets digitaux. En résumé : si tu vends, produis ou opères des services, Agencyze est fait pour toi.</p></div>
</details>
<details className="border border-stone-200 rounded-2xl bg-stone-50">
<summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-stone-900 text-sm lg:text-[0.95rem] list-none select-none">
          Mes clients vont-ils savoir qu'Agencyze travaille pour moi ?
          <iconify-icon className="faq-chevron shrink-0 text-stone-400 ml-4" icon="lucide:chevron-down" width="18"></iconify-icon>
</summary>
<div className="faq-body"><p className="px-6 pb-5 pt-0 text-stone-500 text-sm leading-relaxed border-t border-stone-100">Non, jamais. Agencyze reste totalement invisible. Chaque livrable est remis sous ton nom, à ton image. Tes clients ne perçoivent aucune externalisation et tu gardes 100% du contrôle sur ta relation client et ta facturation.</p></div>
</details>
<details className="border border-stone-200 rounded-2xl bg-stone-50">
<summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-stone-900 text-sm lg:text-[0.95rem] list-none select-none">
          Combien ça coûte ?
          <iconify-icon className="faq-chevron shrink-0 text-stone-400 ml-4" icon="lucide:chevron-down" width="18"></iconify-icon>
</summary>
<div className="faq-body"><p className="px-6 pb-5 pt-0 text-stone-500 text-sm leading-relaxed border-t border-stone-100">On propose des tarifs adaptés à tes besoins, toujours plus compétitifs qu'un recrutement interne. Il n'y a pas de grille tarifaire fixe — on calibre le pricing selon ton volume et tes projets. Contacte-nous pour un devis sur mesure.</p></div>
</details>
<details className="border border-stone-200 rounded-2xl bg-stone-50">
<summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-stone-900 text-sm lg:text-[0.95rem] list-none select-none">
          Y a-t-il un engagement minimum ?
          <iconify-icon className="faq-chevron shrink-0 text-stone-400 ml-4" icon="lucide:chevron-down" width="18"></iconify-icon>
</summary>
<div className="faq-body"><p className="px-6 pb-5 pt-0 text-stone-500 text-sm leading-relaxed border-t border-stone-100">Aucun contrat rigide. Tu actives Agencyze quand tu en as besoin et tu ajustes le volume instantanément. Pas de frais cachés, pas d'engagement contraignant. Tu pars quand tu veux, sans justification.</p></div>
</details>
<details className="border border-stone-200 rounded-2xl bg-stone-50">
<summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-stone-900 text-sm lg:text-[0.95rem] list-none select-none">
          Comment démarrer avec Agencyze ?
          <iconify-icon className="faq-chevron shrink-0 text-stone-400 ml-4" icon="lucide:chevron-down" width="18"></iconify-icon>
</summary>
<div className="faq-body"><p className="px-6 pb-5 pt-0 text-stone-500 text-sm leading-relaxed border-t border-stone-100">C'est simple : envoie-nous un message via notre formulaire et clique sur "Je souhaite obtenir plus d'informations". On revient vers toi rapidement pour cadrer ton besoin et t'onboarder en moins de 72h. Zéro paperasse, zéro friction.</p></div>
</details>
</div>
</div>
</section>

<section className="py-20 lg:py-24 bg-stone-50" id="contact">
<div className="max-w-7xl mx-auto px-5 lg:px-10">
<div className="reveal overflow-hidden lg:p-20 text-center rounded-3xl pt-10 pr-10 pb-10 pl-10 relative" style={{background: 'var(--cyan)'}}>
<div className="absolute -top-20 -left-20 w-64 h-64 rounded-full pointer-events-none" style={{background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 60%)'}}></div>
<div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full pointer-events-none" style={{background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 60%)'}}></div>
<div className="relative z-10 max-w-2xl mx-auto">
<p className="text-xs font-bold uppercase tracking-[0.15em] mb-4 text-stone-700">On est prêts. Et toi ?</p>
<h2 className="font-montserrat font-bold text-3xl lg:text-[2.7rem] leading-tight tracking-tight text-stone-900 mb-5">
      Scale ton business dès aujourd'hui.<br/>Sans recruter, sans friction.
    </h2>
<p className="text-stone-700 text-base leading-relaxed mb-8 max-w-lg mx-auto">
      Envoie-nous un message et clique sur <strong>"Je souhaite obtenir plus d'informations"</strong>. On revient vers
      toi sous 24h.
    </p>
<div className="flex flex-col sm:flex-row gap-3 justify-center">
<a className="btn-primary inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-sm group shadow-xl" href="mailto:contact@agencyze.com">
        Contacter l'équipe maintenant
        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
<a className="btn-outline inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-stone-900 text-sm" href="#how-it-works">
        Voir comment ça marche
      </a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-100">
<div className="max-w-7xl mx-auto px-5 lg:px-10 py-12 lg:py-16">
<div className="flex flex-col lg:flex-row gap-10 lg:gap-16 justify-between mb-10">
<div className="lg:max-w-xs space-y-4">
<a className="text-xl font-bold tracking-tight font-montserrat" href="#">Agency<span style={{color: 'var(--cyan)'}}>ze</span></a>
<p className="text-sm text-stone-500 leading-relaxed">La couche d'exécution des entreprises ambitieuses. Une équipe invisible, une capacité infinie.</p>
<div className="flex gap-2.5">
<a className="w-9 h-9 rounded-xl border border-stone-200 flex items-center justify-center text-stone-400 hover:text-stone-900 hover:border-stone-300 transition-all" href="#"><iconify-icon icon="simple-icons:linkedin" width="14"></iconify-icon></a>
<a className="w-9 h-9 rounded-xl border border-stone-200 flex items-center justify-center text-stone-400 hover:text-stone-900 hover:border-stone-300 transition-all" href="#"><iconify-icon icon="simple-icons:instagram" width="14"></iconify-icon></a>
<a className="w-9 h-9 rounded-xl border border-stone-200 flex items-center justify-center text-stone-400 hover:text-stone-900 hover:border-stone-300 transition-all" href="#"><iconify-icon icon="simple-icons:twitter" width="14"></iconify-icon></a>
</div>
</div>
<div className="flex flex-wrap gap-10 lg:gap-14 text-sm">
<div className="space-y-4">
<h3 className="text-[11px] font-bold uppercase tracking-wider text-stone-400">Navigation</h3>
<ul className="space-y-2.5 text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#how-it-works">Comment ça marche</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#results">Résultats</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#faq">FAQ</a></li>
</ul>
</div>
<div className="space-y-4">
<h3 className="text-[11px] font-bold uppercase tracking-wider text-stone-400">Contact</h3>
<ul className="space-y-2.5 text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="mailto:contact@agencyze.com">contact@agencyze.com</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#contact">Démarrer un projet</a></li>
</ul>
</div>
<div className="space-y-4">
<h3 className="text-[11px] font-bold uppercase tracking-wider text-stone-400">Légal</h3>
<ul className="space-y-2.5 text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">Confidentialité</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Conditions d'utilisation</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-stone-100 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
<p className="text-xs text-stone-400">© 2026 Agencyze. Tous droits réservés.</p>
<p className="text-xs text-stone-400">Une équipe invisible. Un seul objectif : délivrer.</p>
</div>
</div>
</footer>


    </>
  );
}
