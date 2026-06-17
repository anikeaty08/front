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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
cinzel: ['Cinzel', 'serif'],
},
letterSpacing: {
'cinematic': '0.3em',
'editorial': '0.15em',
},
colors: {
gold: {
50: '#F9F5EC',
100: '#F5EBD4',
200: '#EAD4A6',
300: '#D9B56F',
400: '#C49F58',
500: '#A6823C',
800: '#4D3B1C',
900: '#2A200A',
},
obsidian: '#020202',
charcoal: '#0A0A0A',
},
backgroundImage: {
'noise': "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')",
},
animation: {
'slow-pan': 'pan 60s linear infinite alternate',
'float': 'float 10s ease-in-out infinite',
'reveal-up': 'revealUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
'hero-enter': 'heroEnter 2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'fade-in': 'fadeIn 0.5s ease-out forwards',
'typing': 'typing 1.4s infinite ease-in-out both',
'spin-slow': 'spin 60s linear infinite',
'aurora': 'aurora 20s ease-in-out infinite alternate',
'marquee': 'marquee 25s linear infinite',
},
keyframes: {
pan: { '0%': { transform: 'scale(1.1) translate(0%, 0%)' }, '100%': { transform: 'scale(1.25) translate(-2%, -2%)' } },
float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-15px)' } },
revealUp: { '0%': { opacity: '0', transform: 'translateY(60px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
heroEnter: { '0%': { opacity: '0', transform: 'translateY(40px) scale(0.98)' }, '100%': { opacity: '1', transform: 'translateY(0) scale(1.02)' } },
fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
typing: { '0%, 80%, 100%': { transform: 'scale(0)' }, '40%': { transform: 'scale(1)' } },
aurora: { '0%': { opacity: '0.3', transform: 'scale(1) translate(0,0)' }, '100%': { opacity: '0.6', transform: 'scale(1.2) translate(10%, -10%)' } },
marquee: { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-100%)' } }
}
}
}
}



document.addEventListener("DOMContentLoaded", () => {
// Navigation Logic
const navWrapper = document.getElementById('nav-wrapper');
const navContainer = document.getElementById('nav-container');
const navLogo = document.getElementById('nav-logo');
window.addEventListener('scroll', () => {
if(window.scrollY > 50) {
navWrapper.classList.remove('pt-6', 'mix-blend-difference');
navWrapper.classList.add('pt-4', 'mix-blend-normal');
navContainer.classList.add('bg-black/80', 'backdrop-blur-xl', 'rounded-full', 'py-2', 'px-8', 'border-white/10');
navContainer.classList.remove('w-full', 'py-6', 'px-12', 'border-transparent');
navLogo.classList.add('scale-90');
} else {
navWrapper.classList.add('pt-6', 'mix-blend-difference');
navWrapper.classList.remove('pt-4', 'mix-blend-normal');
navContainer.classList.remove('bg-black/80', 'backdrop-blur-xl', 'rounded-full', 'py-2', 'px-8', 'border-white/10');
navContainer.classList.add('w-full', 'py-6', 'px-12', 'border-transparent');
navLogo.classList.remove('scale-90');
}
});
// Intersection Observer
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate-reveal-up");
entry.target.classList.remove("opacity-0", "translate-y-12");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.05, rootMargin: "0px 0px -10% 0px" });
document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
el.classList.add("opacity-0", "translate-y-12", "will-change-transform");
observer.observe(el);
});
// Service Image Hover
window.setServiceImage = (id) => {
document.querySelectorAll('.service-bg-img').forEach(img => {
img.classList.remove('opacity-100', 'scale-105');
img.classList.add('opacity-0', 'scale-100');
});
const active = document.getElementById(`service-img-${id}`);
if(active) {
active.classList.remove('opacity-0', 'scale-100');
active.classList.add('opacity-100', 'scale-105');
}
};
// Gallery Filtering
window.filterGallery = (category, btn) => {
document.querySelectorAll('.filter-btn').forEach(b => {
b.classList.remove('text-black', 'bg-gold-300', 'border-gold-300');
b.classList.add('text-neutral-400', 'bg-transparent', 'border-white/10');
});
btn.classList.remove('text-neutral-400', 'bg-transparent', 'border-white/10');
btn.classList.add('text-black', 'bg-gold-300', 'border-gold-300');
const items = document.querySelectorAll('.gallery-item-wrapper');
items.forEach(item => {
if (category === 'all' || item.dataset.category.includes(category)) {
item.classList.remove('hidden');
setTimeout(() => item.classList.remove('opacity-0', 'scale-95'), 50);
} else {
item.classList.add('opacity-0', 'scale-95');
setTimeout(() => item.classList.add('hidden'), 300);
}
});
};
// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
let currentImgIndex = 0;
const galleryImages = [];
document.querySelectorAll('.gallery-img').forEach((img, index) => {
galleryImages.push(img.src);
img.parentElement.setAttribute('onclick', `openLightbox(${index})`);
});
window.openLightbox = (index) => {
currentImgIndex = index;
lightboxImg.src = galleryImages[index];
lightbox.classList.remove('hidden');
setTimeout(() => lightbox.classList.remove('opacity-0'), 10);
document.body.style.overflow = 'hidden';
};
window.closeLightbox = () => {
lightbox.classList.add('opacity-0');
setTimeout(() => lightbox.classList.add('hidden'), 300);
document.body.style.overflow = 'auto';
};
window.changeSlide = (dir) => {
currentImgIndex += dir;
if (currentImgIndex >= galleryImages.length) currentImgIndex = 0;
if (currentImgIndex < 0) currentImgIndex = galleryImages.length - 1;
lightboxImg.style.opacity = '0';
setTimeout(() => {
lightboxImg.src = galleryImages[currentImgIndex];
lightboxImg.style.opacity = '1';
}, 200);
};
// Chatbot
window.toggleChat = () => {
const box = document.getElementById('chat-box');
const indicator = document.getElementById('chat-indicator');
if(box.classList.contains('invisible')) {
box.classList.remove('invisible', 'opacity-0', 'translate-y-4', 'scale-95');
box.classList.add('visible', 'opacity-100', 'translate-y-0', 'scale-100');
if(indicator) indicator.classList.add('hidden');
const typing = document.getElementById('chat-typing');
const msg = document.getElementById('chat-welcome-msg');
if(typing && msg) {
typing.style.display = 'flex';
msg.style.display = 'none';
setTimeout(() => {
typing.style.display = 'none';
msg.style.display = 'block';
msg.classList.add('animate-fade-in');
}, 1500);
}
} else {
box.classList.add('invisible', 'opacity-0', 'translate-y-4', 'scale-95');
box.classList.remove('visible', 'opacity-100', 'translate-y-0', 'scale-100');
}
}
if (window.lucide) lucide.createIcons();
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
      

<div className="cinema-grain"></div>

<nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] mix-blend-difference" id="nav-wrapper">
<div className="pointer-events-auto transition-all duration-500 flex items-center gap-12 border border-transparent bg-transparent w-full max-w-[1920px] px-12 py-6 backdrop-blur-none justify-between md:justify-center" id="nav-container">
<div className="hidden md:flex items-center gap-8">
<a className="nav-link text-[11px] font-medium text-neutral-300 hover:text-white transition-all uppercase tracking-editorial" href="#services">Leistungen</a>
<a className="nav-link text-[11px] font-medium text-neutral-300 hover:text-white transition-all uppercase tracking-editorial" href="#gallery">Galerie</a>
</div>
<div className="flex items-center gap-3 group cursor-pointer relative z-10 px-4">
<span className="font-cinzel font-semibold text-2xl text-white tracking-widest transition-all duration-500 drop-shadow-[0_0_15px_rgba(217,181,111,0.5)]" id="nav-logo">SHERY</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="nav-link text-[11px] font-medium text-neutral-300 hover:text-white transition-all uppercase tracking-editorial" href="#team">Team</a>
<a className="nav-link text-[11px] font-medium text-neutral-300 hover:text-white transition-all uppercase tracking-editorial" href="#prices">Preise</a>
<a className="bg-white/10 hover:bg-gold-300/10 border border-white/20 hover:border-gold-300/30 text-white hover:text-gold-300 rounded-full px-5 py-2 transition-all duration-500 group backdrop-blur-md" href="#booking">
<span className="text-[10px] font-semibold tracking-editorial uppercase">Termin</span>
</a>
</div>
<button className="md:hidden text-white"><span className="iconify" data-icon="lucide:menu" width="24"></span></button>
</div>
</nav>

<main className="relative flex flex-col h-screen w-full items-center justify-center overflow-hidden z-10">

<div className="absolute inset-0 w-full h-full bg-[#020202]">
<div className="absolute inset-0 animate-slow-pan transform-gpu">
<img className="w-full h-full object-cover filter brightness-[0.3] contrast-100 grayscale-[40%] blur-[1px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute -top-[30%] -left-[10%] w-[80vw] h-[80vw] bg-gold-500/10 rounded-full blur-[120px] animate-aurora mix-blend-screen opacity-40"></div>
<div className="absolute -bottom-[30%] -right-[10%] w-[70vw] h-[70vw] bg-neutral-700/20 rounded-full blur-[100px] animate-float opacity-30" style={{animationDelay: '-5s'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vmax] h-[150vmax] opacity-[0.08] animate-spin-slow pointer-events-none mix-blend-overlay">
<div className="w-full h-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(217,181,111,0.8)_20deg,transparent_60deg)] blur-3xl"></div>
</div>
</div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020202_85%)] opacity-90"></div>
<div className="absolute inset-0 bg-noise opacity-[0.03] animate-pulse-slow mix-blend-overlay"></div>
</div>

<div className="relative z-30 flex flex-col items-center px-6 text-center w-full max-w-[1920px]">
<div className="mb-6 md:mb-12 animate-hero-enter opacity-0" style={{animationDelay: '0.2s'}}>
<div className="flex items-center gap-4">
<span className="h-px w-8 bg-gold-300/60"></span>
<span className="text-[10px] font-semibold text-gold-200 tracking-[0.4em] uppercase text-shadow-sm">Black Label Aesthetics</span>
<span className="h-px w-8 bg-gold-300/60"></span>
</div>
</div>
<h1 className="font-cinzel leading-[0.85] relative group cursor-default mix-blend-screen animate-hero-enter opacity-0" style={{animationDelay: '0.4s'}}>
<span className="block text-[18vw] md:text-[14rem] font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 transform scale-y-105">SHERY</span>
<div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-10 mix-blend-normal">
<span className="font-serif italic text-[5vw] md:text-[4rem] text-gold-100 font-light tracking-wide drop-shadow-[0_0_25px_rgba(217,181,111,0.4)] opacity-90">Kunst <span className="text-white/60 text-[0.7em] not-italic font-cinzel mx-2">&amp;</span> Pflege</span>
</div>
</h1>
<p className="mt-8 md:mt-12 text-sm md:text-lg text-neutral-300 font-light text-center max-w-lg leading-relaxed animate-hero-enter opacity-0" style={{animationDelay: '0.6s'}}>
                Das Dortmunder Refugium für kompromisslose Haarästhetik. <br/>
<span className="text-gold-200/80">Balayage, Extensions und Pflege auf internationalem Niveau.</span>
</p>
<div className="mt-10 animate-hero-enter opacity-0" style={{animationDelay: '0.8s'}}>
<a className="group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(217,181,111,0.5)] focus:outline-none text-xs font-semibold text-white tracking-widest font-sans rounded-full pt-4 pr-10 pb-4 pl-10 relative items-center justify-center w-fit mx-auto" href="#booking">
<div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#D9B56F_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="absolute inset-[1px] rounded-full bg-[#020202]"></div>
</div>
<div className="-z-10 overflow-hidden bg-[#020202] rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">
<div className="absolute inset-0 bg-gradient-to-b from-neutral-800/40 to-transparent"></div>
<div className="opacity-30 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '12px 12px', animation: 'dots-move 8s linear infinite'}}></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-[#D9B56F]/20 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-[#D9B56F]/40"></div>
</div>
<span className="relative z-10 text-neutral-200 transition-colors group-hover:text-white">Termin Vereinbaren</span>
<span className="iconify relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1 text-[#D9B56F]" data-icon="lucide:arrow-right" width="16"></span>
</a>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-hero-enter opacity-0" style={{animationDelay: '1s'}}>
<div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
</div>
</main>

<div className="relative z-20 w-full py-12 bg-[#020202] border-b border-white/5 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#020202] via-transparent to-[#020202] z-10 pointer-events-none"></div>
<div className="flex gap-24 items-center animate-marquee whitespace-nowrap opacity-40 hover:opacity-100 transition-opacity duration-500 marquee-mask">

<span className="text-3xl font-serif text-white/80">OLAPLEX</span>
<span className="text-2xl font-sans font-light tracking-widest text-white/80">KERASTASE</span>
<span className="text-3xl font-serif italic text-white/80">GHD Professional</span>
<span className="text-2xl font-sans font-bold text-white/80">DYSON</span>
<span className="text-3xl font-serif text-white/80">L'OREAL</span>
<span className="text-2xl font-sans tracking-widest text-white/80">SCHWARZKOPF</span>
<span className="text-3xl font-serif italic text-white/80">Redken</span>

<span className="text-3xl font-serif text-white/80">OLAPLEX</span>
<span className="text-2xl font-sans font-light tracking-widest text-white/80">KERASTASE</span>
<span className="text-3xl font-serif italic text-white/80">GHD Professional</span>
<span className="text-2xl font-sans font-bold text-white/80">DYSON</span>
<span className="text-3xl font-serif text-white/80">L'OREAL</span>
<span className="text-2xl font-sans tracking-widest text-white/80">SCHWARZKOPF</span>
<span className="text-3xl font-serif italic text-white/80">Redken</span>
</div>
</div>

<section className="relative z-20 w-full py-32 bg-[#020202]" id="services">
<div className="max-w-[1600px] mx-auto px-6">

<div className="flex flex-col items-center text-center mb-24 reveal-on-scroll">
<div className="relative">
<div className="absolute inset-0 bg-gold-400/20 blur-[60px] rounded-full opacity-40"></div>
<h2 className="relative text-4xl md:text-7xl font-serif text-white mb-4 tracking-tight z-10">
                        Exklusive <span className="text-gold-300 italic font-light">Leistungen</span>
</h2>
</div>
<div className="flex items-center gap-4 mt-2 opacity-80">
<span className="w-12 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
<span className="text-[11px] uppercase tracking-cinematic text-neutral-400">Modernes Handwerk – maßgeschneiderte Schönheit</span>
<span className="w-12 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

<div className="hidden lg:block sticky top-32 h-[700px] w-full rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl reveal-on-scroll">
<div className="absolute inset-0 bg-neutral-900">
<img className="service-bg-img absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out opacity-100 scale-105" id="service-img-1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img className="service-bg-img absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out opacity-0 scale-100" id="service-img-2" src="https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img className="service-bg-img absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out opacity-0 scale-100" id="service-img-3" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img className="service-bg-img absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out opacity-0 scale-100" id="service-img-4" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<img className="service-bg-img absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out opacity-0 scale-100" id="service-img-5" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60"></div>
<div className="absolute bottom-8 left-8">
<span className="block text-white/80 font-cinzel text-sm tracking-widest border border-white/20 backdrop-blur-md px-4 py-2 rounded-full">Atelier Experience</span>
</div>
</div>
</div>

<div className="space-y-6">
<div className="group/card relative bg-neutral-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:bg-neutral-800/60 hover:border-gold-300/30 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] floating-card reveal-on-scroll" onmouseenter="setServiceImage(1)">
<div className="flex justify-between items-start mb-4">
<div>
<span className="text-[10px] font-bold text-gold-400 uppercase tracking-widest mb-1 block">Präzision</span>
<h3 className="text-2xl font-serif text-white group-hover/card:text-gold-100 transition-colors">Calligraphy Cut</h3>
</div>
<span className="text-white font-cinzel text-lg">85 €</span>
</div>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                            Die patentierte Schnitt-Technik für 270% mehr Volumen und weniger Spliss. Das Haar wird schräg angeschnitten, was ihm mehr Bewegung verleiht.
                        </p>
<div className="flex items-center justify-between border-t border-white/5 pt-4">
<span className="text-[11px] text-neutral-500 flex items-center gap-2"><span className="iconify" data-icon="lucide:clock"></span> 60 Min</span>
<span className="text-[11px] text-white uppercase tracking-wider group-hover/card:translate-x-1 transition-transform flex items-center gap-1">Details <span className="iconify" data-icon="lucide:arrow-right" width="12"></span></span>
</div>
<div className="service-line absolute bottom-0 left-0 h-[2px] w-0 bg-gold-300 transition-all duration-500 rounded-b-3xl"></div>
</div>
<div className="group/card relative bg-neutral-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:bg-neutral-800/60 hover:border-gold-300/30 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] floating-card reveal-on-scroll" onmouseenter="setServiceImage(2)" style={{animationDelay: '0.1s'}}>
<div className="flex justify-between items-start mb-4">
<div>
<span className="text-[10px] font-bold text-gold-400 uppercase tracking-widest mb-1 block">Struktur</span>
<h3 className="text-2xl font-serif text-white group-hover/card:text-gold-100 transition-colors">Keratin Infusion</h3>
</div>
<span className="text-white font-cinzel text-lg">ab 150 €</span>
</div>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                            Eine tiefenwirksame Glättung und Reparatur der Haarstruktur. Eliminiert Frizz und verleiht einen seidigen Glanz für bis zu 4 Monate.
                        </p>
<div className="flex items-center justify-between border-t border-white/5 pt-4">
<span className="text-[11px] text-neutral-500 flex items-center gap-2"><span className="iconify" data-icon="lucide:clock"></span> 120-180 Min</span>
<span className="text-[11px] text-white uppercase tracking-wider group-hover/card:translate-x-1 transition-transform flex items-center gap-1">Details <span className="iconify" data-icon="lucide:arrow-right" width="12"></span></span>
</div>
<div className="service-line absolute bottom-0 left-0 h-[2px] w-0 bg-gold-300 transition-all duration-500 rounded-b-3xl"></div>
</div>
<div className="group/card relative bg-neutral-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:bg-neutral-800/60 hover:border-gold-300/30 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] floating-card reveal-on-scroll" onmouseenter="setServiceImage(3)" style={{animationDelay: '0.2s'}}>
<div className="flex justify-between items-start mb-4">
<div>
<span className="text-[10px] font-bold text-gold-400 uppercase tracking-widest mb-1 block">Farbe</span>
<h3 className="text-2xl font-serif text-white group-hover/card:text-gold-100 transition-colors">Balayage Deluxe</h3>
</div>
<span className="text-white font-cinzel text-lg">ab 180 €</span>
</div>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                            Unser Signature-Service. Freihand-Painting für natürlich verlaufende Highlights. Inklusive Glossing, Olaplex-Schutz und Styling.
                        </p>
<div className="flex items-center justify-between border-t border-white/5 pt-4">
<span className="text-[11px] text-neutral-500 flex items-center gap-2"><span className="iconify" data-icon="lucide:clock"></span> 3-5 Std</span>
<span className="text-[11px] text-white uppercase tracking-wider group-hover/card:translate-x-1 transition-transform flex items-center gap-1">Details <span className="iconify" data-icon="lucide:arrow-right" width="12"></span></span>
</div>
<div className="service-line absolute bottom-0 left-0 h-[2px] w-0 bg-gold-300 transition-all duration-500 rounded-b-3xl"></div>
</div>
<div className="group/card relative bg-neutral-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:bg-neutral-800/60 hover:border-gold-300/30 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] floating-card reveal-on-scroll" onmouseenter="setServiceImage(4)" style={{animationDelay: '0.3s'}}>
<div className="flex justify-between items-start mb-4">
<div>
<span className="text-[10px] font-bold text-gold-400 uppercase tracking-widest mb-1 block">Repair</span>
<h3 className="text-2xl font-serif text-white group-hover/card:text-gold-100 transition-colors">Olaplex Treatment</h3>
</div>
<span className="text-white font-cinzel text-lg">45 €</span>
</div>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                            Die Versicherung für Ihr Haar. Ein intensives Aufbau-Treatment, das geschädigte Disulfidbrücken im Haar dauerhaft repariert.
                        </p>
<div className="flex items-center justify-between border-t border-white/5 pt-4">
<span className="text-[11px] text-neutral-500 flex items-center gap-2"><span className="iconify" data-icon="lucide:clock"></span> 30 Min</span>
<span className="text-[11px] text-white uppercase tracking-wider group-hover/card:translate-x-1 transition-transform flex items-center gap-1">Details <span className="iconify" data-icon="lucide:arrow-right" width="12"></span></span>
</div>
<div className="service-line absolute bottom-0 left-0 h-[2px] w-0 bg-gold-300 transition-all duration-500 rounded-b-3xl"></div>
</div>
<div className="group/card relative bg-neutral-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:bg-neutral-800/60 hover:border-gold-300/30 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] floating-card reveal-on-scroll" onmouseenter="setServiceImage(5)" style={{animationDelay: '0.4s'}}>
<div className="flex justify-between items-start mb-4">
<div>
<span className="text-[10px] font-bold text-gold-400 uppercase tracking-widest mb-1 block">Expertin</span>
<h3 className="text-2xl font-serif text-white group-hover/card:text-gold-100 transition-colors">Extensions Beratung</h3>
</div>
<span className="text-white font-cinzel text-lg">Kostenlos</span>
</div>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                            Individuelle Analyse für Haarverdichtung oder -verlängerung. Wir arbeiten ausschließlich mit Premium-Echthaar.
                        </p>
<div className="flex items-center justify-between border-t border-white/5 pt-4">
<span className="text-[11px] text-neutral-500 flex items-center gap-2"><span className="iconify" data-icon="lucide:clock"></span> 30 Min</span>
<span className="text-[11px] text-white uppercase tracking-wider group-hover/card:translate-x-1 transition-transform flex items-center gap-1">Details <span className="iconify" data-icon="lucide:arrow-right" width="12"></span></span>
</div>
<div className="service-line absolute bottom-0 left-0 h-[2px] w-0 bg-gold-300 transition-all duration-500 rounded-b-3xl"></div>
</div>
</div>
</div>

<div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto reveal-on-scroll">
<div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
<span className="block text-white font-serif text-sm">Blow-Dry</span>
<span className="text-[10px] text-gold-300 uppercase tracking-wider">+25€</span>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
<span className="block text-white font-serif text-sm">Express Gloss</span>
<span className="text-[10px] text-gold-300 uppercase tracking-wider">+15€</span>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
<span className="block text-white font-serif text-sm">Spa Hair Wash</span>
<span className="text-[10px] text-gold-300 uppercase tracking-wider">+10€</span>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
<span className="block text-white font-serif text-sm">Scalp Massage</span>
<span className="text-[10px] text-gold-300 uppercase tracking-wider">+15€</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] border-t border-white/5">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Das <span className="italic text-gold-300">Ritual</span></h2>
<p className="text-neutral-400 text-sm font-light">Ihr Weg zu vollkommener Ästhetik in drei Schritten.</p>
</div>
<div className="relative grid md:grid-cols-3 gap-8">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-300/30 to-transparent z-0"></div>

<div className="relative z-10 text-center reveal-on-scroll">
<div className="w-24 h-24 mx-auto rounded-full bg-[#050505] border border-white/10 flex items-center justify-center mb-6 shadow-xl relative group hover:border-gold-300/50 transition-colors">
<span className="font-cinzel text-3xl text-white group-hover:text-gold-300 transition-colors">I</span>
<div className="absolute -bottom-2 w-px h-8 bg-gold-300/50"></div>
</div>
<h3 className="text-xl font-serif text-white mb-2">Konsultation</h3>
<p className="text-neutral-500 text-sm font-light leading-relaxed px-4">Wir analysieren Ihre Haarstruktur und Gesichtsform, um die perfekte Farbe und den idealen Schnitt zu definieren.</p>
</div>

<div className="relative z-10 text-center reveal-on-scroll" style={{animationDelay: '0.2s'}}>
<div className="w-24 h-24 mx-auto rounded-full bg-[#050505] border border-white/10 flex items-center justify-center mb-6 shadow-xl relative group hover:border-gold-300/50 transition-colors">
<span className="font-cinzel text-3xl text-white group-hover:text-gold-300 transition-colors">II</span>
<div className="absolute -bottom-2 w-px h-8 bg-gold-300/50"></div>
</div>
<h3 className="text-xl font-serif text-white mb-2">Handwerk</h3>
<p className="text-neutral-500 text-sm font-light leading-relaxed px-4">Präzise Painting-Techniken und der Calligraphy Cut kommen zum Einsatz. Wir arbeiten in Ruhe und mit Fokus.</p>
</div>

<div className="relative z-10 text-center reveal-on-scroll" style={{animationDelay: '0.4s'}}>
<div className="w-24 h-24 mx-auto rounded-full bg-[#050505] border border-white/10 flex items-center justify-center mb-6 shadow-xl relative group hover:border-gold-300/50 transition-colors">
<span className="font-cinzel text-3xl text-white group-hover:text-gold-300 transition-colors">III</span>
<div className="absolute -bottom-2 w-px h-8 bg-gold-300/50"></div>
</div>
<h3 className="text-xl font-serif text-white mb-2">Veredelung</h3>
<p className="text-neutral-500 text-sm font-light leading-relaxed px-4">Das Glossing versiegelt die Farbe, gefolgt von einem Styling, das Ihre natürliche Schönheit unterstreicht.</p>
</div>
</div>
</div>
</section>

<section className="relative z-20 w-full py-32 bg-[#020202] border-t border-white/5" id="gallery">
<div className="max-w-[1800px] mx-auto px-6">

<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-on-scroll">
<div>
<div className="relative inline-block">
<div className="absolute inset-0 bg-gold-300/30 blur-[40px] rounded-full opacity-50"></div>
<h2 className="relative text-4xl md:text-6xl font-serif text-white leading-tight z-10">
                            Visuelles <span className="italic text-gold-300">Tagebuch</span>
</h2>
</div>
<p className="mt-4 text-neutral-400 text-sm font-light max-w-sm">
                        Ein kuratierter Einblick in unsere tägliche Arbeit, Editorial Shoots und Salon-Momente.
                    </p>
</div>
<div className="mt-8 md:mt-0 overflow-x-auto no-scrollbar pb-2 w-full md:w-auto">
<div className="flex gap-3">
<button className="filter-btn text-black bg-gold-300 border border-gold-300 px-5 py-2 rounded-full text-[11px] font-medium uppercase tracking-widest transition-all hover:opacity-80 whitespace-nowrap" onclick="filterGallery('all', this)">Alle</button>
<button className="filter-btn text-neutral-400 bg-transparent border border-white/10 px-5 py-2 rounded-full text-[11px] font-medium uppercase tracking-widest transition-all hover:border-gold-300 hover:text-white whitespace-nowrap" onclick="filterGallery('balayage', this)">#Balayage</button>
<button className="filter-btn text-neutral-400 bg-transparent border border-white/10 px-5 py-2 rounded-full text-[11px] font-medium uppercase tracking-widest transition-all hover:border-gold-300 hover:text-white whitespace-nowrap" onclick="filterGallery('blond', this)">#BlondExpert</button>
<button className="filter-btn text-neutral-400 bg-transparent border border-white/10 px-5 py-2 rounded-full text-[11px] font-medium uppercase tracking-widest transition-all hover:border-gold-300 hover:text-white whitespace-nowrap" onclick="filterGallery('extensions', this)">#Extensions</button>
<button className="filter-btn text-neutral-400 bg-transparent border border-white/10 px-5 py-2 rounded-full text-[11px] font-medium uppercase tracking-widest transition-all hover:border-gold-300 hover:text-white whitespace-nowrap" onclick="filterGallery('makeup', this)">#MakeUp</button>
</div>
</div>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
<div className="break-inside-avoid gallery-item-wrapper group cursor-zoom-in relative rounded-xl overflow-hidden reveal-on-scroll" data-category="balayage blond">
<img className="gallery-img w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-110" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
<div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<span className="text-gold-300 text-[10px] uppercase tracking-wider block mb-1">Color Correction</span>
<span className="text-white font-serif text-lg">Ice Platinum</span>
</div>
</div>
<div className="break-inside-avoid gallery-item-wrapper group cursor-zoom-in relative rounded-xl overflow-hidden reveal-on-scroll" data-category="salon">
<img className="gallery-img w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1631730486784-5456119f69ae?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
<div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<span className="text-gold-300 text-[10px] uppercase tracking-wider block mb-1">Atmosphere</span>
<span className="text-white font-serif text-lg">Salon Detail</span>
</div>
</div>
<div className="break-inside-avoid gallery-item-wrapper group cursor-zoom-in relative rounded-xl overflow-hidden reveal-on-scroll" data-category="extensions">
<img className="gallery-img w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
<div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<span className="text-gold-300 text-[10px] uppercase tracking-wider block mb-1">Transformation</span>
<span className="text-white font-serif text-lg">Invisible Extensions</span>
</div>
</div>
<div className="break-inside-avoid gallery-item-wrapper group cursor-zoom-in relative rounded-xl overflow-hidden reveal-on-scroll" data-category="makeup">
<img className="gallery-img w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
<div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<span className="text-gold-300 text-[10px] uppercase tracking-wider block mb-1">Styling</span>
<span className="text-white font-serif text-lg">Editorial Look</span>
</div>
</div>
<div className="break-inside-avoid gallery-item-wrapper group cursor-zoom-in relative rounded-xl overflow-hidden reveal-on-scroll" data-category="balayage">
<img className="gallery-img w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
<div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<span className="text-gold-300 text-[10px] uppercase tracking-wider block mb-1">Color Melt</span>
<span className="text-white font-serif text-lg">Soft Caramel</span>
</div>
</div>
<div className="break-inside-avoid gallery-item-wrapper group cursor-zoom-in relative rounded-xl overflow-hidden reveal-on-scroll" data-category="blond">
<img className="gallery-img w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 filter sepia-[0.2]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
<div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<span className="text-gold-300 text-[10px] uppercase tracking-wider block mb-1">Texture</span>
<span className="text-white font-serif text-lg">Beach Waves</span>
</div>
</div>
<div className="break-inside-avoid gallery-item-wrapper group cursor-zoom-in relative rounded-xl overflow-hidden reveal-on-scroll" data-category="balayage">
<img className="gallery-img w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
<div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<span className="text-gold-300 text-[10px] uppercase tracking-wider block mb-1">Occasion</span>
<span className="text-white font-serif text-lg">Bridal</span>
</div>
</div>
<div className="break-inside-avoid gallery-item-wrapper group cursor-zoom-in relative rounded-xl overflow-hidden reveal-on-scroll" data-category="salon">
<img className="gallery-img w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-125" src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
<div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<span className="text-gold-300 text-[10px] uppercase tracking-wider block mb-1">Products</span>
<span className="text-white font-serif text-lg">Premium Care</span>
</div>
</div>
</div>
<div className="mt-16 text-center">
<button className="px-8 py-3 border border-white/20 rounded-full text-xs uppercase tracking-widest text-white hover:bg-gold-300 hover:border-gold-300 hover:text-black transition-all duration-300">Mehr Laden</button>
</div>
</div>
</section>

<div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl hidden opacity-0 transition-opacity duration-300 flex items-center justify-center" id="lightbox">
<button className="absolute top-6 right-6 text-white hover:text-gold-300 transition-colors z-50" onclick="closeLightbox()">
<span className="iconify" data-icon="lucide:x" width="32"></span>
</button>
<button className="absolute left-6 text-white hover:text-gold-300 transition-colors z-50 p-4" onclick="changeSlide(-1)">
<span className="iconify" data-icon="lucide:chevron-left" width="40"></span>
</button>
<div className="relative max-h-[90vh] max-w-[90vw]">
<img className="max-h-[85vh] max-w-full object-contain shadow-2xl transition-opacity duration-200" id="lightbox-img" src=""/>
<div className="mt-4 text-center">
<span className="text-gold-300 text-xs uppercase tracking-widest font-medium">Shery Beauty Center</span>
</div>
</div>
<button className="absolute right-6 text-white hover:text-gold-300 transition-colors z-50 p-4" onclick="changeSlide(1)">
<span className="iconify" data-icon="lucide:chevron-right" width="40"></span>
</button>
</div>

<section className="relative z-20 w-full py-32 bg-[#020202]" id="team">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal-on-scroll">
<div>
<span className="text-[10px] text-gold-400 font-semibold uppercase tracking-cinematic block mb-3">Expertise</span>
<h2 className="text-4xl md:text-6xl font-serif text-white">Das <span className="text-neutral-700 italic">Team</span></h2>
</div>
<div className="hidden md:block text-right">
<p className="text-neutral-500 text-xs tracking-wide max-w-xs">
                        Ein Kollektiv aus spezialisierten Stylisten,<br/>vereint durch Perfektionismus.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group relative reveal-on-scroll cursor-pointer">
<div className="aspect-[3/4] overflow-hidden rounded-xl bg-neutral-900 relative">
<img className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 filter grayscale contrast-125 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex items-center gap-3 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
<span className="px-2 py-0.5 border border-white/20 rounded text-[9px] text-white uppercase tracking-wider backdrop-blur-sm">Master Colorist</span>
</div>
<h3 className="text-2xl font-cinzel text-white mb-1">Shery</h3>
<p className="text-xs text-gold-300 tracking-widest uppercase opacity-80">Founder &amp; Creative Director</p>
</div>
</div>
</div>
<div className="group relative reveal-on-scroll delay-100 cursor-pointer">
<div className="aspect-[3/4] overflow-hidden rounded-xl bg-neutral-900 relative">
<img className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 filter grayscale contrast-125 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex items-center gap-3 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
<span className="px-2 py-0.5 border border-white/20 rounded text-[9px] text-white uppercase tracking-wider backdrop-blur-sm">Top Stylist</span>
</div>
<h3 className="text-2xl font-cinzel text-white mb-1">Daniel</h3>
<p className="text-xs text-neutral-400 tracking-widest uppercase opacity-80">Cut &amp; Men's Expert</p>
</div>
</div>
</div>
<div className="group relative reveal-on-scroll delay-200 cursor-pointer">
<div className="aspect-[3/4] overflow-hidden rounded-xl bg-neutral-900 relative">
<img className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 filter grayscale contrast-125 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex items-center gap-3 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
<span className="px-2 py-0.5 border border-white/20 rounded text-[9px] text-white uppercase tracking-wider backdrop-blur-sm">Extensions</span>
</div>
<h3 className="text-2xl font-cinzel text-white mb-1">Elena</h3>
<p className="text-xs text-neutral-400 tracking-widest uppercase opacity-80">Balayage Specialist</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="text-3xl md:text-5xl font-serif text-white text-center mb-16">Client <span className="italic text-neutral-600">Voices</span></h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-white/5 border border-white/10 p-10 rounded-2xl relative reveal-on-scroll hover:bg-white/10 transition-colors">
<span className="text-6xl text-gold-300 font-serif absolute top-6 left-6 opacity-20">"</span>
<p className="text-white text-lg font-serif italic leading-relaxed mb-6 relative z-10">
                        Endlich jemand, der Blond wirklich versteht. Kein Gelbstich, kein Haarbruch. Das Team arbeitet mit einer Präzision, die ich so in Dortmund noch nicht erlebt habe.
                    </p>
<div className="flex items-center gap-4">
<div className="w-px h-8 bg-gold-300"></div>
<div>
<span className="block text-white text-xs uppercase tracking-widest font-bold">Sarah M.</span>
<span className="block text-neutral-500 text-[10px] mt-0.5">Balayage &amp; Schnitt</span>
</div>
</div>
</div>
<div className="bg-white/5 border border-white/10 p-10 rounded-2xl relative reveal-on-scroll hover:bg-white/10 transition-colors" style={{animationDelay: '0.1s'}}>
<span className="text-6xl text-gold-300 font-serif absolute top-6 left-6 opacity-20">"</span>
<p className="text-white text-lg font-serif italic leading-relaxed mb-6 relative z-10">
                        Die Extensions sind absolut unsichtbar. Shery hat sich viel Zeit für die Beratung genommen. Die Atmosphäre im Salon ist pure Entspannung.
                    </p>
<div className="flex items-center gap-4">
<div className="w-px h-8 bg-gold-300"></div>
<div>
<span className="block text-white text-xs uppercase tracking-widest font-bold">Julia K.</span>
<span className="block text-neutral-500 text-[10px] mt-0.5">Haarverlängerung</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-4xl mx-auto px-6 py-32 reveal-on-scroll" id="prices">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Service <span className="italic text-neutral-600 font-light">Menü</span></h2>
<div className="w-px h-8 bg-gold-300/30 mx-auto"></div>
</div>
<div className="grid md:grid-cols-2 gap-x-16 gap-y-12">

<div className="space-y-6">
<h3 className="text-gold-300 text-xs uppercase tracking-cinematic border-b border-white/10 pb-2 mb-4">Styling</h3>
<div className="flex justify-between items-baseline group cursor-default">
<div>
<span className="text-neutral-200 font-light text-base group-hover:text-white transition-colors">Damen Haarschnitt</span>
<span className="block text-[10px] text-neutral-500 mt-0.5">Beratung, Waschen &amp; Style</span>
</div>
<span className="text-white font-medium text-sm">ab 45 €</span>
</div>
<div className="flex justify-between items-baseline group cursor-default">
<div>
<span className="text-neutral-200 font-light text-base group-hover:text-white transition-colors">Calligraphy Cut</span>
<span className="block text-[10px] text-neutral-500 mt-0.5">Volumen Schnitt-Technik</span>
</div>
<span className="text-white font-medium text-sm">85 €</span>
</div>
</div>

<div className="space-y-6">
<h3 className="text-gold-300 text-xs uppercase tracking-cinematic border-b border-white/10 pb-2 mb-4">Color</h3>
<div className="flex justify-between items-baseline group cursor-default">
<div>
<span className="text-neutral-200 font-light text-base group-hover:text-white transition-colors">Balayage Signature</span>
<span className="block text-[10px] text-neutral-500 mt-0.5">Glossing &amp; Olaplex inkl.</span>
</div>
<span className="text-white font-medium text-sm">ab 180 €</span>
</div>
<div className="flex justify-between items-baseline group cursor-default">
<div>
<span className="text-neutral-200 font-light text-base group-hover:text-white transition-colors">Face Framing</span>
<span className="block text-[10px] text-neutral-500 mt-0.5">Contouring Highlights</span>
</div>
<span className="text-white font-medium text-sm">65 €</span>
</div>
</div>
</div>
</section>

<div className="bg-[#050505] border-t border-white/5 relative">
<section className="w-full max-w-7xl mx-auto px-6 py-24 reveal-on-scroll z-20 relative" id="booking">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
<div className="flex flex-col justify-center">
<span className="text-[10px] text-gold-400 font-semibold uppercase tracking-cinematic block mb-3">Kontakt</span>
<h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Bereit für Ihre <span className="text-gold-300 italic">Verwandlung?</span></h2>
<div className="space-y-8 mt-4">
<div className="flex items-start gap-6">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-gold-300">
<span className="iconify" data-icon="lucide:map-pin"></span>
</div>
<div>
<h4 className="text-white font-cinzel text-lg mb-1">Unser Atelier</h4>
<p className="text-neutral-400 text-sm font-light">Hohe Str. 22<br/>44139 Dortmund</p>
</div>
</div>
<div className="flex items-start gap-6">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-gold-300">
<span className="iconify" data-icon="lucide:phone"></span>
</div>
<div>
<h4 className="text-white font-cinzel text-lg mb-1">Direktkontakt</h4>
<p className="text-neutral-400 text-sm font-light mb-2">Für Beratung &amp; Termine</p>
<a className="text-white hover:text-gold-300 transition-colors block font-medium" href="tel:023120637127">0231 20637127</a>
</div>
</div>
</div>
</div>

<div className="bg-neutral-900/40 border border-white/10 rounded-3xl p-8 md:p-12 relative backdrop-blur-sm">
<h3 className="text-2xl font-serif text-white mb-6">Terminanfrage</h3>
<form className="space-y-6" onsubmit="event.preventDefault();">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest text-neutral-500 ml-1">Vorname</label>
<input className="w-full bg-transparent border-b border-white/15 py-3 text-white text-sm focus:outline-none focus:border-gold-300 transition-colors placeholder-white/20" placeholder="Anna" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest text-neutral-500 ml-1">Nachname</label>
<input className="w-full bg-transparent border-b border-white/15 py-3 text-white text-sm focus:outline-none focus:border-gold-300 transition-colors placeholder-white/20" placeholder="Müller" type="text"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest text-neutral-500 ml-1">E-Mail</label>
<input className="w-full bg-transparent border-b border-white/15 py-3 text-white text-sm focus:outline-none focus:border-gold-300 transition-colors placeholder-white/20" placeholder="anna@beispiel.de" type="email"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest text-neutral-500 ml-1">Telefon</label>
<input className="w-full bg-transparent border-b border-white/15 py-3 text-white text-sm focus:outline-none focus:border-gold-300 transition-colors placeholder-white/20" placeholder="0170 12345678" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest text-neutral-500 ml-1">Nachricht</label>
<textarea className="w-full bg-transparent border-b border-white/15 py-3 text-white text-sm focus:outline-none focus:border-gold-300 transition-colors placeholder-white/20 resize-none" placeholder="Ich interessiere mich für..." rows="3"></textarea>
</div>
<button className="w-full bg-white text-black font-medium py-4 mt-4 hover:bg-gold-100 transition-colors uppercase tracking-editorial text-xs rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(217,181,111,0.4)]">Anfrage Senden</button>
</form>
</div>
</div>
</section>

<footer className="w-full pt-32 pb-16 bg-[#020202] border-t border-white/10 relative overflow-hidden">
<div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
<span className="text-[18vw] font-cinzel font-bold text-white/[0.02] leading-none tracking-tight block">SHERY</span>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

<div className="md:col-span-4 space-y-8">
<div>
<span className="font-cinzel text-3xl text-white block mb-6">SHERY</span>
<p className="text-neutral-400 text-sm font-light leading-relaxed max-w-xs">
                                High-End Friseurkunst in Dortmund. Wir verbinden handwerkliche Präzision mit einer Atmosphäre vollkommener Ruhe.
                            </p>
</div>
<div className="flex items-center gap-4">
<a className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300" href="#">
<span className="iconify" data-icon="lucide:instagram" width="18"></span>
</a>
<a className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300" href="#">
<span className="iconify" data-icon="lucide:facebook" width="18"></span>
</a>
<a className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300" href="#">
<span className="iconify" data-icon="lucide:mail" width="18"></span>
</a>
</div>
</div>

<div className="md:col-span-2 md:col-start-6">
<h4 className="text-white font-cinzel text-sm mb-6">Menu</h4>
<ul className="space-y-4">
<li><a className="text-neutral-400 text-xs uppercase tracking-widest hover:text-gold-300 transition-colors" href="#services">Leistungen</a></li>
<li><a className="text-neutral-400 text-xs uppercase tracking-widest hover:text-gold-300 transition-colors" href="#gallery">Galerie</a></li>
<li><a className="text-neutral-400 text-xs uppercase tracking-widest hover:text-gold-300 transition-colors" href="#team">Team</a></li>
<li><a className="text-neutral-400 text-xs uppercase tracking-widest hover:text-gold-300 transition-colors" href="#prices">Preise</a></li>
</ul>
</div>

<div className="md:col-span-2">
<h4 className="text-white font-cinzel text-sm mb-6">Rechtliches</h4>
<ul className="space-y-4">
<li><a className="text-neutral-400 text-xs uppercase tracking-widest hover:text-gold-300 transition-colors" href="#">Impressum</a></li>
<li><a className="text-neutral-400 text-xs uppercase tracking-widest hover:text-gold-300 transition-colors" href="#">Datenschutz</a></li>
<li><a className="text-neutral-400 text-xs uppercase tracking-widest hover:text-gold-300 transition-colors" href="#">AGB</a></li>
</ul>
</div>

<div className="md:col-span-3">
<h4 className="text-white font-cinzel text-sm mb-6">Newsletter</h4>
<p className="text-neutral-400 text-xs mb-4 leading-relaxed">Erhalten Sie exklusive Angebote und Pflege-Tipps direkt in Ihr Postfach.</p>
<form className="relative">
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-300 transition-colors placeholder-white/20" placeholder="E-Mail Adresse" type="email"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 text-gold-300 hover:text-white transition-colors p-2">
<span className="iconify" data-icon="lucide:arrow-right" width="14"></span>
</button>
</form>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-neutral-600 text-[10px] uppercase tracking-widest">© 2024 Shery Beauty Center. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-neutral-500 text-[10px] uppercase tracking-wide">System Operational</span>
</div>
</div>
</div>
</footer>
</div>

<div className="fixed bottom-6 right-6 z-[60] hidden md:block font-sans">
<div className="relative group">
<button className="relative w-14 h-14 bg-white hover:bg-gold-100 text-black rounded-full flex items-center justify-center shadow-[0_4px_30px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all duration-300 z-50" onclick="toggleChat()">
<span className="iconify" data-icon="lucide:message-square" width="24"></span>
<span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-[#020202] rounded-full" id="chat-indicator"></span>
</button>
<div className="absolute bottom-[calc(100%+16px)] right-0 w-[360px] bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl invisible opacity-0 translate-y-4 scale-95 origin-bottom-right transition-all duration-300 overflow-hidden flex flex-col" id="chat-box">
<div className="bg-gradient-to-r from-neutral-900 to-neutral-800 p-4 border-b border-white/5 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-gold-300/20 flex items-center justify-center border border-gold-300/30 overflow-hidden">
<img className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#0A0A0A] rounded-full"></span>
</div>
<div>
<span className="block text-white text-sm font-medium">Concierge</span>
<span className="block text-[10px] text-neutral-400">Antwortet sofort</span>
</div>
</div>
<button className="text-neutral-400 hover:text-white transition-colors" onclick="toggleChat()">
<span className="iconify" data-icon="lucide:x" width="18"></span>
</button>
</div>
<div className="p-5 space-y-4 min-h-[280px] max-h-[400px] overflow-y-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent">
<div className="text-center text-[10px] text-neutral-500 uppercase tracking-widest mb-4">Heute</div>
<div className="flex gap-3 items-start">
<div className="w-6 h-6 rounded-full bg-gold-300/20 flex-shrink-0 flex items-center justify-center border border-gold-300/10 mt-1">
<span className="iconify text-gold-300" data-icon="lucide:sparkles" width="12"></span>
</div>
<div className="bg-[#1A1A1A] border border-white/5 rounded-2xl rounded-tl-sm p-3 shadow-sm max-w-[85%]">
<p className="text-neutral-200 text-xs leading-relaxed">
                                 Herzlich Willkommen bei Shery Beauty. Ich bin Ihr digitaler Assistent.
                             </p>
</div>
</div>
<div className="hidden gap-3 items-start" id="chat-typing">
<div className="w-6 h-6 rounded-full bg-gold-300/20 flex-shrink-0 flex items-center justify-center border border-gold-300/10 mt-1">
<span className="iconify text-gold-300" data-icon="lucide:sparkles" width="12"></span>
</div>
<div className="bg-[#1A1A1A] border border-white/5 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
<div className="flex gap-1">
<span className="w-1 h-1 bg-neutral-400 rounded-full animate-typing typing-dot"></span>
<span className="w-1 h-1 bg-neutral-400 rounded-full animate-typing typing-dot"></span>
<span className="w-1 h-1 bg-neutral-400 rounded-full animate-typing typing-dot"></span>
</div>
</div>
</div>
<div className="flex gap-3 items-start hidden" id="chat-welcome-msg">
<div className="w-6 h-6 rounded-full bg-gold-300/20 flex-shrink-0 flex items-center justify-center border border-gold-300/10 mt-1">
<span className="iconify text-gold-300" data-icon="lucide:sparkles" width="12"></span>
</div>
<div className="bg-[#1A1A1A] border border-white/5 rounded-2xl rounded-tl-sm p-3 shadow-sm max-w-[85%]">
<p className="text-neutral-200 text-xs leading-relaxed">
                                 Suchen Sie einen Termin für Balayage oder eine Extensions-Beratung?
                             </p>
</div>
</div>
<div className="flex flex-wrap gap-2 pt-2">
<a className="px-3 py-1.5 bg-white/5 hover:bg-gold-300/20 border border-white/10 hover:border-gold-300/30 rounded-full text-[10px] text-white transition-all cursor-pointer whitespace-nowrap" href="#booking" onclick="toggleChat()">Termin buchen</a>
<a className="px-3 py-1.5 bg-white/5 hover:bg-gold-300/20 border border-white/10 hover:border-gold-300/30 rounded-full text-[10px] text-white transition-all cursor-pointer whitespace-nowrap" href="#prices" onclick="toggleChat()">Preisliste</a>
<a className="px-3 py-1.5 bg-white/5 hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366]/30 rounded-full text-[10px] text-white transition-all cursor-pointer whitespace-nowrap flex items-center gap-1" href="https://wa.me/4923120637127" target="_blank"><span className="iconify" data-icon="lucide:message-circle" width="10"></span> WhatsApp</a>
</div>
</div>
<div className="p-3 border-t border-white/5 bg-neutral-900/50">
<form className="flex items-center gap-2 bg-[#050505] border border-white/10 rounded-full px-4 py-2" onsubmit="event.preventDefault(); window.location.href='#booking'; toggleChat();">
<input className="bg-transparent border-none focus:outline-none text-xs text-white w-full placeholder-neutral-500" placeholder="Nachricht schreiben..." type="text"/>
<button className="text-gold-300 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:send" width="14"></span>
</button>
</form>
</div>
</div>
</div>
</div>

<div className="fixed bottom-0 left-0 w-full z-40 md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10 px-6 py-4 pb-8 flex justify-between items-center animate-reveal-up shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.5)]">
<div className="flex flex-col">
<span className="text-[10px] text-neutral-400 uppercase tracking-wide">Nächster Termin</span>
<span className="text-xs text-white font-medium">Heute verfügbar</span>
</div>
<a className="px-6 py-3 bg-gold-300 text-black text-xs font-semibold uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(217,181,111,0.3)]" href="#booking">Buchen</a>
</div>

    </>
  );
}
