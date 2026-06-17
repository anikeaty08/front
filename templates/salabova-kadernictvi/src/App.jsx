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
'marquee': 'marquee 25s linear infinite',
},
keyframes: {
pan: { '0%': { transform: 'scale(1.1) translate(0%, 0%)' }, '100%': { transform: 'scale(1.25) translate(-2%, -2%)' } },
float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-15px)' } },
revealUp: { '0%': { opacity: '0', transform: 'translateY(60px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
heroEnter: { '0%': { opacity: '0', transform: 'translateY(40px) scale(0.98)' }, '100%': { opacity: '1', transform: 'translateY(0) scale(1.02)' } },
fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
marquee: { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-100%)' } }
}
}
}
}



document.addEventListener("DOMContentLoaded", () => {
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

<nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" id="nav-wrapper">
<div className="pointer-events-auto transition-all duration-500 flex items-center gap-12 border bg-transparent max-w-[1920px] backdrop-blur-none justify-between md:justify-center" id="nav-container">
<div className="hidden md:flex items-center gap-8">
<a className="nav-link text-[11px] font-medium text-neutral-300 hover:text-white transition-all uppercase tracking-editorial" href="#about">O Nás</a>
<a className="nav-link text-[11px] font-medium text-neutral-300 hover:text-white transition-all uppercase tracking-editorial" href="#services">Služby</a>
</div>
<div className="flex items-center gap-3 group cursor-pointer relative z-10 px-4">
<span className="font-cinzel font-semibold text-2xl text-white tracking-widest transition-all duration-500 drop-shadow-[0_0_15px_rgba(217,181,111,0.5)]" id="nav-logo">YVONNE</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="nav-link text-[11px] font-medium text-neutral-300 hover:text-white transition-all uppercase tracking-editorial" href="#team">Tým</a>
<a className="bg-white/10 hover:bg-gold-300/10 border border-white/20 hover:border-gold-300/30 text-white hover:text-gold-300 rounded-full px-5 py-2 transition-all duration-500 group backdrop-blur-md" href="#contact">
<span className="text-[10px] font-semibold tracking-editorial uppercase">Kontakt</span>
</a>
</div>
<button className="md:hidden text-white"><iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon></button>
</div>
</nav>

<main className="relative flex flex-col h-screen w-full items-center justify-center overflow-hidden z-10">

<div className="absolute inset-0 w-full h-full bg-[#020202]">
<div className="absolute inset-0 animate-slow-pan transform-gpu">

<img alt="Abstract Barber Tools" className="w-full h-full object-cover filter brightness-[0.25] contrast-[1.1] grayscale-[80%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020202_90%)] opacity-90"></div>
<div className="absolute inset-0 animate-pulse-slow opacity-[0.03] mix-blend-overlay bg-white"></div>
</div>

<div className="z-30 flex flex-col text-center w-full max-w-[1920px] pr-6 pl-6 relative items-center">
<div className="mb-6 md:mb-12 animate-hero-enter opacity-0" style={{animationDelay: '0.2s'}}>
<div className="flex items-center gap-4">
<span className="h-px w-8 bg-gold-300/60"></span>
<span className="text-[10px] font-semibold text-gold-200 tracking-[0.4em] uppercase text-shadow-sm">Pánské Kadeřnictví</span>
<span className="h-px w-8 bg-gold-300/60"></span>
</div>
</div>
<h1 className="font-cinzel leading-[0.85] relative group cursor-default mix-blend-screen animate-hero-enter opacity-0" style={{animationDelay: '0.4s'}}>
<span className="block text-[15vw] md:text-[10rem] bg-clip-text transform font-medium text-transparent tracking-tighter bg-gradient-to-b from-white via-neutral-200 to-neutral-500 scale-y-105">YVONNE</span>
<div className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-10 mix-blend-normal">
<span className="font-serif italic text-[5vw] md:text-[4rem] text-gold-100 font-light tracking-wide drop-shadow-[0_0_25px_rgba(217,181,111,0.4)] opacity-90">Salabová</span>
</div>
</h1>
<p className="mt-8 md:mt-12 text-sm md:text-lg text-neutral-300 font-light text-center max-w-xl leading-relaxed animate-hero-enter opacity-0" style={{animationDelay: '0.6s'}}>
                Přicházíme do života mužů s nůžkami, fénem<br/> a <span className="text-gold-200/80">neodolatelným stylem.</span>
</p>
<div className="mt-10 animate-hero-enter opacity-0" style={{animationDelay: '0.8s'}}>
<a className="group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(217,181,111,0.5)] focus:outline-none text-xs font-semibold text-white tracking-widest font-sans rounded-full pt-4 pr-10 pb-4 pl-10 relative items-center justify-center w-fit mx-auto" href="#contact">
<div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#D9B56F_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="absolute inset-[1px] rounded-full bg-[#020202]"></div>
</div>
<span className="relative z-10 text-neutral-200 transition-colors group-hover:text-white">Rezervovat Termín</span>
<iconify-icon className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1 text-[#D9B56F]" icon="solar:calendar-linear" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-hero-enter opacity-0" style={{animationDelay: '1s'}}>
<div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
</div>
</main>


<section className="z-20 bg-[#020202] w-full pt-32 pb-32 relative" id="services">
<div className="max-w-[1600px] mx-auto px-6">
<div className="flex flex-col items-center text-center mb-24 reveal-on-scroll will-change-transform">
<div className="relative">
<div className="absolute inset-0 bg-gold-400/20 blur-[60px] rounded-full opacity-40"></div>
<h2 className="relative text-4xl md:text-7xl font-serif text-white mb-4 tracking-tight z-10">
                        Naše <span className="text-gold-300 italic font-light">Služby</span>
</h2>
</div>
<div className="flex items-center gap-4 mt-2 opacity-80">
<span className="w-12 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
<span className="text-[11px] uppercase tracking-cinematic text-neutral-400">Prvotřídní péče o pánský vzhled</span>
<span className="w-12 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">


<div className="hidden lg:block sticky top-32 h-[600px] w-full rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl reveal-on-scroll will-change-transform">
<div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">

<img alt="Tým Yvonne Salabová" className="service-bg-img absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 ease-out filter grayscale contrast-125" id="service-img-1" src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Tým Yvonne Salabová" className="service-bg-img absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 ease-out filter grayscale contrast-125" id="service-img-2" src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-8 left-8">
<span className="block text-white/80 font-cinzel text-sm tracking-widest border border-white/20 backdrop-blur-md px-4 py-2 rounded-full">Yvonne &amp; Anežka</span>
</div>
</div>
</div>

<div className="space-y-6">
<div className="group/card relative bg-neutral-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:bg-neutral-800/60 hover:border-gold-300/30 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] floating-card reveal-on-scroll will-change-transform" onmouseenter="setServiceImage(1)">
<div className="flex justify-between items-start mb-4">
<div>
<span className="text-[10px] font-bold text-gold-400 uppercase tracking-widest mb-1 block">Klasika</span>
<h3 className="text-2xl font-serif text-white group-hover/card:text-gold-100 transition-colors">Pravidelný Sestřih</h3>
</div>
<iconify-icon className="text-white text-2xl" icon="solar:scissors-linear"></iconify-icon>
</div>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                            Jaké je tajemství udržování perfektního sestřihu vlasů? No, vypadá to, že tvoje vlasy mají vlastní kalendář! Dopřejte jim profesionální péči a tvar.
                        </p>
<div className="flex items-center justify-between border-t border-white/5 pt-4">
<span className="text-[11px] text-neutral-500 flex items-center gap-2"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 30-45 Min</span>
<span className="text-[11px] text-white uppercase tracking-wider group-hover/card:translate-x-1 transition-transform flex items-center gap-1">Rezervovat <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
<div className="service-line absolute bottom-0 left-0 h-[2px] w-0 bg-gold-300 transition-all duration-500 rounded-b-3xl"></div>
</div>
<div className="group/card relative bg-neutral-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:bg-neutral-800/60 hover:border-gold-300/30 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] floating-card reveal-on-scroll will-change-transform" onmouseenter="setServiceImage(2)" style={{animationDelay: '0.1s'}}>
<div className="flex justify-between items-start mb-4">
<div>
<span className="text-[10px] font-bold text-gold-400 uppercase tracking-widest mb-1 block">Image</span>
<h3 className="text-2xl font-serif text-white group-hover/card:text-gold-100 transition-colors">Perfektní Účes</h3>
</div>
<iconify-icon className="text-white text-2xl" icon="solar:star-shine-linear"></iconify-icon>
</div>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                            Každé čtyři týdny si vaše vlasy sednou k sobě a říkají si: "Tak co, je čas zase navštívit Yvonne a udělat ze sebe hvězdu salonu?" Kompletní styling pro váš dokonalý look.
                        </p>
<div className="flex items-center justify-between border-t border-white/5 pt-4">
<span className="text-[11px] text-neutral-500 flex items-center gap-2"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 45-60 Min</span>
<span className="text-[11px] text-white uppercase tracking-wider group-hover/card:translate-x-1 transition-transform flex items-center gap-1">Rezervovat <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
<div className="service-line absolute bottom-0 left-0 h-[2px] w-0 bg-gold-300 transition-all duration-500 rounded-b-3xl"></div>
</div>
</div>
</div>
</div>
</section>


<div className="bg-[#050505] border-t border-white/5 relative">
<section className="w-full max-w-7xl mx-auto px-6 py-24 reveal-on-scroll z-20 relative will-change-transform" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
<div className="flex flex-col justify-center">
<span className="text-[10px] text-gold-400 font-semibold uppercase tracking-cinematic block mb-3">Lokalita</span>
<h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Kde nás <span className="text-gold-300 italic">najdete</span></h2>
<div className="space-y-8 mt-4">
<div className="flex items-start gap-6">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-gold-300">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-cinzel text-lg mb-1">Adresa</h4>
<p className="text-neutral-400 text-sm font-light">Na Šachtě 1<br/>Praha 7</p>
</div>
</div>
<div className="flex items-start gap-6">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-gold-300">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-white font-cinzel text-lg mb-1">Kontakt</h4>
<div className="flex flex-col gap-2">
<a className="text-white hover:text-gold-300 transition-colors block font-medium text-sm" href="tel:+420606267161">Yvonne: 606 267 161</a>
<a className="text-white hover:text-gold-300 transition-colors block font-medium text-sm" href="tel:+420722142201">Anežka: 722 142 201</a>
</div>
</div>
</div>
<div className="flex gap-6 gap-x-6 gap-y-6 items-start">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-white hover:bg-gold-300 hover:text-black transition-all shrink-0" href="https://www.facebook.com/profile.php?id=100063531692759" target="_blank">
<iconify-icon icon="lucide:facebook" width="20"></iconify-icon>
</a>
<div>
<h4 className="text-white font-cinzel text-lg mb-1">Facebook</h4>
<a className="text-neutral-400 text-sm font-light hover:text-gold-300 transition-colors block" href="https://www.facebook.com/profile.php?id=100063531692759" target="_blank">
            Yvonne Salabová
        </a>
</div>
</div>
</div>
</div>

<div className="bg-neutral-900/40 border border-white/10 rounded-3xl p-4 relative backdrop-blur-sm h-[400px] overflow-hidden">
<iframe allowfullscreen="" className="w-full h-full rounded-2xl filter grayscale contrast-125 invert-[0.9]" loading="lazy" src="https://maps.google.com/maps?output=embed&amp;q=Na%20%C5%A0acht%C4%9B1%2C%20Praha%207&amp;z=15&amp;t=m" style={{border: '0'}}></iframe>
</div>
</div>
</section>

<footer className="w-full pt-32 pb-16 bg-[#020202] border-t border-white/10 relative overflow-hidden">
<div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
<span className="text-[18vw] font-cinzel font-bold text-white/[0.02] leading-none tracking-tight block">YVONNE</span>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-neutral-600 text-[10px] uppercase tracking-widest">© 2024 Yvonne Salabová. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-neutral-500 text-[10px] uppercase tracking-wide">Otevřeno</span>
</div>
</div>
</div>
</footer>
</div>

<div className="fixed bottom-0 left-0 w-full z-40 md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10 px-6 py-4 pb-8 flex justify-between items-center animate-reveal-up shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.5)]">
<div className="flex flex-col">
<span className="text-[10px] text-neutral-400 uppercase tracking-wide">Rezervace</span>
<span className="text-xs text-white font-medium">Zavolejte nám</span>
</div>
<a className="px-6 py-3 bg-gold-300 text-black text-xs font-semibold uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(217,181,111,0.3)]" href="tel:+420606267161">Volat</a>
</div>

    </>
  );
}
