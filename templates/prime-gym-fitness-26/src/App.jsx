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



/* Navbar scroll effect */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    navbar.classList.add('bg-neutral-950/90', 'backdrop-blur-md', 'border-b', 'border-lime-400/20');
  } else {
    navbar.classList.remove('bg-neutral-950/90', 'backdrop-blur-md', 'border-b', 'border-lime-400/20');
  }
});

/* Hamburger Menu */
const burger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
let menuOpen = false;

burger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  if(menuOpen) {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('flex');
    burger.children[0].classList.add('translate-y-2', 'rotate-45');
    burger.children[1].classList.add('opacity-0');
    burger.children[2].classList.add('-translate-y-2', '-rotate-45');
    document.body.style.overflow = 'hidden';
  } else {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
    burger.children[0].classList.remove('translate-y-2', 'rotate-45');
    burger.children[1].classList.remove('opacity-0');
    burger.children[2].classList.remove('-translate-y-2', '-rotate-45');
    document.body.style.overflow = '';
  }
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuOpen = false;
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
    burger.children[0].classList.remove('translate-y-2', 'rotate-45');
    burger.children[1].classList.remove('opacity-0');
    burger.children[2].classList.remove('-translate-y-2', '-rotate-45');
    document.body.style.overflow = '';
  });
});

/* Language Switcher */
let currentLang = 'fr';

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-sw button').forEach(btn => {
    btn.classList.toggle('text-lime-400', btn.textContent.trim().toLowerCase() === lang);
    btn.classList.toggle('bg-lime-400/10', btn.textContent.trim().toLowerCase() === lang);
    btn.classList.toggle('text-neutral-400', btn.textContent.trim().toLowerCase() !== lang);
  });
  
  document.querySelectorAll('[data-' + lang + ']').forEach(el => {
    const val = el.getAttribute('data-' + lang);
    if (val && val.includes('<br')) {
      el.innerHTML = val;
    } else if (val) {
      el.textContent = val;
    }
  });
  
  document.querySelectorAll('select option').forEach(opt => {
    const val = opt.getAttribute('data-' + lang);
    if (val) opt.textContent = val;
  });
  updatePlaceholders(lang);
}

function updatePlaceholders(lang) {
  const maps = {
    fr: { name: 'Mohamed Alami', email: 'vous@exemple.com', msg: 'Parlez-nous de vous...' },
    en: { name: 'John Smith',    email: 'you@example.com',  msg: 'Tell us about yourself...' },
    es: { name: 'Carlos García', email: 'tú@ejemplo.com',   msg: 'Cuéntanos sobre ti...' }
  };
  const m = maps[lang] || maps.fr;
  const fn = document.getElementById('f-name');
  const fe = document.getElementById('f-email');
  const fm = document.getElementById('f-message');
  if (fn) fn.placeholder = m.name;
  if (fe) fe.placeholder = m.email;
  if (fm) fm.placeholder = m.msg;
}

/* Scroll Reveal */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObserver.observe(el));

/* Lightbox */
const galleryImages = [
  'gal1.jpg','gal2.jpg','gal3.jpg','gal4.jpg',
  'gal5.jpg','gal6.jpg','gal7.jpg','gal8.jpg',
  'gal9.jpg','gal10.jpg','gal11.jpg','gal12.jpg'
];
let lbIndex = 0;
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');

function openLightbox(idx) {
  lbIndex = idx;
  lbImg.src = galleryImages[lbIndex];
  lightbox.classList.remove('hidden');
  lightbox.classList.add('flex');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.add('hidden');
  lightbox.classList.remove('flex');
  document.body.style.overflow = '';
}
function lbNav(dir) {
  lbIndex = (lbIndex + dir + galleryImages.length) % galleryImages.length;
  lbImg.src = galleryImages[lbIndex];
}
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (lightbox.classList.contains('hidden')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft')  lbNav(-1);
  if (e.key === 'ArrowRight') lbNav(1);
});

/* Testimonials Carousel Drag & Auto-play */
const track = document.getElementById('carousel-track');
let autoScroll;
let isDragging = false, startX, scrollLeft;

function startAutoScroll() {
  autoScroll = setInterval(() => {
    track.scrollLeft += 1.5;
    if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 2) {
      track.scrollLeft = 0;
    }
  }, 25);
}
function stopAutoScroll() { clearInterval(autoScroll); }

if(track) {
  track.addEventListener('mouseenter', stopAutoScroll);
  track.addEventListener('mouseleave', startAutoScroll);
  track.addEventListener('mousedown', (e) => {
    isDragging = true; startX = e.pageX - track.offsetLeft; scrollLeft = track.scrollLeft;
  });
  track.addEventListener('mousemove', (e) => {
    if (!isDragging) return; e.preventDefault();
    track.scrollLeft = scrollLeft - (e.pageX - track.offsetLeft - startX);
  });
  track.addEventListener('mouseup', () => isDragging = false);
  track.addEventListener('mouseleave', () => isDragging = false);
  startAutoScroll();
}

/* Form Submit to WhatsApp */
function submitForm(e) {
  e.preventDefault();
  const name    = document.getElementById('f-name').value.trim();
  const email   = document.getElementById('f-email').value.trim();
  const goal    = document.getElementById('f-goal').value;
  const message = document.getElementById('f-message').value.trim();
  const text = encodeURIComponent(
    `Bonjour Prime Gym! 👋\n\n` +
    `Nom: ${name}\nEmail: ${email}\nObjectif: ${goal}\n\nMessage:\n${message}`
  );
  window.open(`https://wa.me/212709219904?text=${text}`, '_blank');
}

/* Mobile Bottom Nav Scroll Sync */
(function(){
  const sections = ['services','programs','gallery','pricing','contact'];
  const navItems = document.querySelectorAll('.mob-nav-item[data-section]');

  function setActive(id){
    navItems.forEach(el => {
      if(el.dataset.section === id) {
        el.classList.add('text-lime-400');
        el.classList.remove('text-neutral-500');
      } else {
        el.classList.remove('text-lime-400');
        el.classList.add('text-neutral-500');
      }
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting) setActive(e.target.id);
    });
  }, { threshold: 0.35 });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if(el) observer.observe(el);
  });

  const mobHome = document.getElementById('mob-home');
  if(mobHome) {
    mobHome.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      navItems.forEach(el => {
        el.classList.remove('text-lime-400');
        el.classList.add('text-neutral-500');
      });
    });
  }
})();

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
      

<nav className="fixed top-0 left-0 w-full z-50 h-[72px] flex items-center justify-between px-4 md:px-10 transition-all duration-400" id="navbar">
<a className="flex items-center gap-1 font-['Bebas_Neue'] text-3xl tracking-wide leading-none" href="#">
<span className="text-lime-400">PRIME</span><span className="text-white"> GYM</span>
</a>
<ul className="hidden md:flex items-center gap-8">
<li><a className="text-xs tracking-widest uppercase text-white/80 hover:text-lime-400 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-lime-400 hover:after:w-full after:transition-all" data-en="Services" data-es="Servicios" data-fr="Services" href="#services">Services</a></li>
<li><a className="text-xs tracking-widest uppercase text-white/80 hover:text-lime-400 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-lime-400 hover:after:w-full after:transition-all" data-en="Programs" data-es="Programas" data-fr="Programmes" href="#programs">Programmes</a></li>
<li><a className="text-xs tracking-widest uppercase text-white/80 hover:text-lime-400 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-lime-400 hover:after:w-full after:transition-all" data-en="Gallery" data-es="Galería" data-fr="Galerie" href="#gallery">Galerie</a></li>
<li><a className="text-xs tracking-widest uppercase text-white/80 hover:text-lime-400 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-lime-400 hover:after:w-full after:transition-all" data-en="Pricing" data-es="Precios" data-fr="Tarifs" href="#pricing">Tarifs</a></li>
<li><a className="text-xs tracking-widest uppercase text-white/80 hover:text-lime-400 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-lime-400 hover:after:w-full after:transition-all" data-en="Contact" data-es="Contacto" data-fr="Contact" href="#contact">Contact</a></li>
</ul>
<div className="hidden md:flex items-center gap-6">
<div className="flex items-center gap-2 lang-sw">
<button className="active text-[10px] tracking-widest uppercase px-2 py-1 rounded transition-colors font-medium text-neutral-400 hover:text-lime-400 hover:bg-lime-400/10" onclick="setLang('fr')">FR</button>
<span className="text-neutral-600 text-[10px]">|</span>
<button className="text-[10px] tracking-widest uppercase px-2 py-1 rounded transition-colors font-medium text-neutral-400 hover:text-lime-400 hover:bg-lime-400/10" onclick="setLang('en')">EN</button>
<span className="text-neutral-600 text-[10px]">|</span>
<button className="text-[10px] tracking-widest uppercase px-2 py-1 rounded transition-colors font-medium text-neutral-400 hover:text-lime-400 hover:bg-lime-400/10" onclick="setLang('es')">ES</button>
</div>
<a className="border-[1.5px] border-lime-400 text-lime-400 text-xs font-medium tracking-widest uppercase px-5 py-2.5 rounded-sm hover:bg-lime-400 hover:text-black transition-all" data-en="Join Now" data-es="Únete ahora" data-fr="Rejoindre maintenant" href="#contact">Rejoindre maintenant</a>
</div>
<button aria-label="Menu" className="md:hidden flex flex-col gap-1.5 p-2 z-50 group" id="hamburger">
<span className="block w-6 h-0.5 bg-white transition-transform origin-center"></span>
<span className="block w-6 h-0.5 bg-white transition-opacity"></span>
<span className="block w-6 h-0.5 bg-white transition-transform origin-center"></span>
</button>
</nav>

<div className="fixed inset-0 bg-neutral-950/95 backdrop-blur-xl z-40 hidden flex-col items-center justify-center gap-8 pt-16 border-b border-lime-400/20 transition-all" id="mobile-menu">
<a className="text-lg tracking-widest uppercase text-white hover:text-lime-400" data-en="Services" data-es="Servicios" data-fr="Services" href="#services">Services</a>
<a className="text-lg tracking-widest uppercase text-white hover:text-lime-400" data-en="Programs" data-es="Programas" data-fr="Programmes" href="#programs">Programmes</a>
<a className="text-lg tracking-widest uppercase text-white hover:text-lime-400" data-en="Gallery" data-es="Galería" data-fr="Galerie" href="#gallery">Galerie</a>
<a className="text-lg tracking-widest uppercase text-white hover:text-lime-400" data-en="Pricing" data-es="Precios" data-fr="Tarifs" href="#pricing">Tarifs</a>
<a className="text-lg tracking-widest uppercase text-white hover:text-lime-400" data-en="Contact" data-es="Contacto" data-fr="Contact" href="#contact">Contact</a>
<a className="bg-lime-400 text-black text-sm font-medium tracking-widest uppercase px-8 py-3 rounded-sm mt-4" data-en="Join Now" data-es="Únete ahora" data-fr="Rejoindre maintenant" href="#contact">Rejoindre maintenant</a>
</div>

<section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-[72px] relative overflow-hidden" id="hero">
<div className="flex flex-col justify-center px-6 md:px-12 py-16 z-10 bg-neutral-950/80 lg:bg-transparent lg:backdrop-blur-none backdrop-blur-md">
<div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-lime-400 mb-6 opacity-0 [animation:fadeUp_0.8s_0.2s_ease-out_forwards]">
<div className="w-8 h-px bg-lime-400"></div>
<span data-en="Marrakech, Morocco" data-es="Marrakech, Marruecos" data-fr="Marrakech, Maroc">Marrakech, Maroc</span>
</div>
<h1 className="font-['Bebas_Neue'] text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.9] tracking-tight uppercase text-white opacity-0 [animation:fadeUp_0.9s_0.35s_ease-out_forwards]">
      WHERE<br/><span className="text-lime-400">CHAMPIONS</span><br/>TRAIN
    </h1>
<p className="mt-6 text-sm md:text-base text-neutral-400 leading-relaxed max-w-md opacity-0 [animation:fadeUp_0.9s_0.5s_ease-out_forwards]" data-en="An exceptional space designed by champions, for champions — premium equipment, personalised coaching, guaranteed results." data-es="Un espacio excepcional diseñado por campeones, para campeones — equipamiento premium, coaching personalizado, resultados garantizados." data-fr="Un espace d'exception conçu par des champions, pour des champions — équipement premium, coaching sur-mesure, résultats garantis.">
      Un espace d'exception conçu par des champions, pour des champions — équipement premium, coaching sur-mesure, résultats garantis.
    </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-10 opacity-0 [animation:fadeUp_0.9s_0.65s_ease-out_forwards]">
<a className="bg-lime-400 text-black font-medium text-xs tracking-widest uppercase px-8 py-3.5 rounded-sm hover:bg-lime-300 hover:-translate-y-0.5 transition-all" data-en="Start Now" data-es="Empezar ahora" data-fr="Commencer maintenant" href="#contact">Commencer maintenant</a>
<a className="inline-flex items-center gap-2 text-white text-xs tracking-widest opacity-80 hover:opacity-100 hover:gap-3 transition-all uppercase" data-en="See the gym →" data-es="Ver el gimnasio →" data-fr="Voir la salle →" href="#gallery">Voir la salle →</a>
</div>
<div className="flex gap-8 mt-12 pt-8 border-t border-white/10 opacity-0 [animation:fadeUp_0.9s_0.8s_ease-out_forwards]">
<div className="flex flex-col gap-1">
<span className="font-['Bebas_Neue'] text-3xl text-lime-400 tracking-wide">7J/7</span>
<span className="text-[10px] tracking-[0.15em] uppercase text-neutral-500" data-en="Open" data-es="Abierto" data-fr="Ouvert">Ouvert</span>
</div>
<div className="flex flex-col gap-1">
<span className="font-['Bebas_Neue'] text-3xl text-lime-400 tracking-wide">8H–23H</span>
<span className="text-[10px] tracking-[0.15em] uppercase text-neutral-500" data-en="Hours" data-es="Horario" data-fr="Horaires">Horaires</span>
</div>
<div className="flex flex-col gap-1">
<span className="font-['Bebas_Neue'] text-3xl text-lime-400 tracking-wide">100%</span>
<span className="text-[10px] tracking-[0.15em] uppercase text-neutral-500" data-en="Personalised" data-es="Personalizado" data-fr="Personnalisé">Personnalisé</span>
</div>
</div>
</div>

<div className="absolute inset-0 lg:relative grid grid-cols-3 grid-rows-3 gap-1 overflow-hidden h-full w-full z-0 lg:z-10 opacity-30 lg:opacity-100">
<div className="col-span-2 row-span-1 overflow-hidden relative group"><img alt="Prime Gym" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="hero1.jpg"/></div>
<div className="col-start-3 col-span-1 row-span-2 overflow-hidden relative group"><img alt="Prime Gym" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="hero2.jpg"/></div>
<div className="col-span-1 row-span-2 row-start-2 overflow-hidden relative group"><img alt="Prime Gym" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="hero3.jpg"/></div>
<div className="col-start-2 row-start-2 overflow-hidden relative group"><img alt="Prime Gym" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="hero4.jpg"/></div>
<div className="col-start-2 col-span-2 row-start-3 overflow-hidden relative group"><img alt="Prime Gym" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="hero5.jpg"/></div>
</div>
</section>

<div className="bg-lime-400 py-3 overflow-hidden relative z-20 border-y border-lime-500">
<div className="flex w-max animate-marquee">
<span className="font-['Bebas_Neue'] text-xl tracking-[0.1em] uppercase text-black whitespace-nowrap px-8">Bodybuilding ✦ Cardio Premium ✦ Nutrition Sur-Mesure ✦ Coaching Personnalisé ✦ Marrakech ✦ Ouvert 7j/7 ✦ Bodybuilding ✦ Cardio Premium ✦ Nutrition Sur-Mesure ✦ Coaching Personnalisé ✦ Marrakech ✦ Ouvert 7j/7 ✦ Bodybuilding ✦ Cardio Premium ✦ Nutrition Sur-Mesure ✦ Coaching Personnalisé ✦ Marrakech ✦ Ouvert 7j/7 ✦</span>
</div>
</div>

<section className="py-28 px-6 md:px-12 bg-neutral-900" id="services">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
<div>
<p className="text-[10px] tracking-[0.2em] uppercase text-lime-400 flex items-center gap-2 mb-4"><span className="w-7 h-px bg-lime-400"></span><span data-en="What we offer" data-es="Lo que ofrecemos" data-fr="Ce que nous offrons">Ce que nous offrons</span></p>
<h2 className="font-['Bebas_Neue'] text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tight uppercase text-white reveal" data-en="OUR PREMIUM&lt;br/&gt;SERVICES" data-es="NUESTROS SERVICIOS&lt;br/&gt;PREMIUM" data-fr="NOS SERVICES&lt;br/&gt;PREMIUM">NOS SERVICES<br/>PREMIUM</h2>
</div>
<p className="text-sm text-neutral-400 leading-relaxed max-w-lg reveal" data-en="Every service is designed to help you reach your full potential with personalised support." data-es="Cada servicio está diseñado para ayudarte a alcanzar tu máximo potencial con acompañamiento personalizado." data-fr="Chaque service est conçu pour vous aider à atteindre votre plein potentiel avec un accompagnement personnalisé.">
      Chaque service est conçu pour vous aider à atteindre votre plein potentiel avec un accompagnement personnalisé.
    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-lime-400/10 border border-lime-400/10 hide-scrollbar overflow-x-auto snap-x">
<div className="bg-neutral-900 p-8 md:p-10 relative overflow-hidden group hover:bg-neutral-800 transition-colors duration-300 min-w-[280px] snap-start after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-lime-400 hover:after:w-full after:transition-all after:duration-500 reveal">
<span className="absolute top-4 right-6 font-['Bebas_Neue'] text-7xl text-lime-400/5 select-none">01</span>
<div className="w-12 h-12 mb-8 text-lime-400 flex items-center justify-center">
<iconify-icon height="48" icon="solar:apple-linear" strokeWidth="1.2" width="48"></iconify-icon>
</div>
<h3 className="font-['Bebas_Neue'] text-2xl tracking-wide text-white mb-3 leading-tight" data-en="Diet Plans" data-es="Planes Dietéticos" data-fr="Plans Diététiques">Plans Diététiques</h3>
<p className="text-xs text-neutral-400 leading-relaxed" data-en="Customised diet plans designed by expert nutritionists." data-es="Planes alimentarios personalizados por expertos." data-fr="Des plans alimentaires personnalisés conçus par des nutritionnistes.">Des plans alimentaires personnalisés conçus par des nutritionnistes.</p>
</div>
<div className="bg-neutral-900 p-8 md:p-10 relative overflow-hidden group hover:bg-neutral-800 transition-colors duration-300 min-w-[280px] snap-start after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-lime-400 hover:after:w-full after:transition-all after:duration-500 reveal">
<span className="absolute top-4 right-6 font-['Bebas_Neue'] text-7xl text-lime-400/5 select-none">02</span>
<div className="w-12 h-12 mb-8 text-lime-400 flex items-center justify-center">
<iconify-icon height="48" icon="solar:cup-hot-linear" strokeWidth="1.2" width="48"></iconify-icon>
</div>
<h3 className="font-['Bebas_Neue'] text-2xl tracking-wide text-white mb-3 leading-tight" data-en="Healthy Meals" data-es="Comidas Sanas" data-fr="Repas Sains">Repas Sains</h3>
<p className="text-xs text-neutral-400 leading-relaxed" data-en="Fresh, healthy meals prepared daily." data-es="Comidas frescas y saludables preparadas a diario." data-fr="Des repas frais et équilibrés préparés quotidiennement.">Des repas frais et équilibrés préparés quotidiennement.</p>
</div>
<div className="bg-neutral-900 p-8 md:p-10 relative overflow-hidden group hover:bg-neutral-800 transition-colors duration-300 min-w-[280px] snap-start after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-lime-400 hover:after:w-full after:transition-all after:duration-500 reveal">
<span className="absolute top-4 right-6 font-['Bebas_Neue'] text-7xl text-lime-400/5 select-none">03</span>
<div className="w-12 h-12 mb-8 text-lime-400 flex items-center justify-center">
<iconify-icon height="48" icon="solar:clipboard-list-linear" strokeWidth="1.2" width="48"></iconify-icon>
</div>
<h3 className="font-['Bebas_Neue'] text-2xl tracking-wide text-white mb-3 leading-tight" data-en="Personalised Training" data-es="Entrenamiento Personalizado" data-fr="Programmes Sur-Mesure">Programmes Sur-Mesure</h3>
<p className="text-xs text-neutral-400 leading-relaxed" data-en="Trainers create plans tailored to your level." data-es="Planes adaptados a tu nivel." data-fr="Nos coachs créent des plans adaptés à votre niveau.">Nos coachs créent des plans adaptés à votre niveau.</p>
</div>
<div className="bg-neutral-900 p-8 md:p-10 relative overflow-hidden group hover:bg-neutral-800 transition-colors duration-300 min-w-[280px] snap-start after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-lime-400 hover:after:w-full after:transition-all after:duration-500 reveal">
<span className="absolute top-4 right-6 font-['Bebas_Neue'] text-7xl text-lime-400/5 select-none">04</span>
<div className="w-12 h-12 mb-8 text-lime-400 flex items-center justify-center">
<iconify-icon height="48" icon="solar:dumbell-linear" strokeWidth="1.2" width="48"></iconify-icon>
</div>
<h3 className="font-['Bebas_Neue'] text-2xl tracking-wide text-white mb-3 leading-tight" data-en="Top-Performance Machines" data-es="Máquinas de Alto Rendimiento" data-fr="Machines Haute Performance">Machines Haute Performance</h3>
<p className="text-xs text-neutral-400 leading-relaxed" data-en="State-of-the-art cardio and strength equipment." data-es="Equipamiento de última generación." data-fr="Équipement cardio et musculation de dernière génération.">Équipement cardio et musculation de dernière génération.</p>
</div>
</div>
</section>

<section className="py-28 px-6 md:px-12 bg-neutral-950" id="programs">
<div className="text-center mb-16">
<p className="text-[10px] tracking-[0.2em] uppercase text-lime-400 flex justify-center items-center gap-2 mb-4"><span className="w-7 h-px bg-lime-400"></span><span data-en="Discover our workouts" data-es="Descubre nuestros entrenamientos" data-fr="Découvrez nos entraînements">Découvrez nos entraînements</span><span className="w-7 h-px bg-lime-400"></span></p>
<h2 className="font-['Bebas_Neue'] text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tight uppercase text-white reveal" data-en="TARGETED PROGRAMS" data-es="PROGRAMAS ESPECÍFICOS" data-fr="PROGRAMMES CIBLÉS">PROGRAMMES CIBLÉS</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative h-[400px] overflow-hidden reveal">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" src="gal3.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<div className="w-10 h-10 bg-lime-400 text-black flex items-center justify-center rounded-sm mb-4">
<iconify-icon height="24" icon="solar:armchair-linear" width="24"></iconify-icon>
</div>
<h3 className="font-['Bebas_Neue'] text-3xl text-white tracking-wide mb-2" data-en="Bodybuilding" data-es="Culturismo" data-fr="Bodybuilding">Bodybuilding</h3>
<p className="text-xs text-neutral-400 mb-4" data-en="Build muscle mass with our intensive programs." data-es="Desarrolla masa muscular con programas intensivos." data-fr="Développez votre masse musculaire avec nos programmes intensifs.">Développez votre masse musculaire avec nos programmes intensifs.</p>
<a className="text-[10px] tracking-[0.15em] uppercase text-lime-400 font-medium hover:text-white transition-colors" data-en="Join program →" data-es="Únete al programa →" data-fr="Rejoindre ce programme →" href="#contact">Rejoindre ce programme →</a>
</div>
</div>

<div className="group relative h-[400px] overflow-hidden reveal delay-100">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" src="gal4.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<div className="w-10 h-10 bg-lime-400 text-black flex items-center justify-center rounded-sm mb-4">
<iconify-icon height="24" icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<h3 className="font-['Bebas_Neue'] text-3xl text-white tracking-wide mb-2" data-en="Cardio &amp; HIIT" data-es="Cardio y HIIT" data-fr="Cardio &amp; HIIT">Cardio &amp; HIIT</h3>
<p className="text-xs text-neutral-400 mb-4" data-en="Improve endurance and burn calories fast." data-es="Mejora tu resistencia y quema calorías rápido." data-fr="Améliorez votre endurance et brûlez des calories rapidement.">Améliorez votre endurance et brûlez des calories rapidement.</p>
<a className="text-[10px] tracking-[0.15em] uppercase text-lime-400 font-medium hover:text-white transition-colors" data-en="Join program →" data-es="Únete al programa →" data-fr="Rejoindre ce programme →" href="#contact">Rejoindre ce programme →</a>
</div>
</div>

<div className="group relative h-[400px] overflow-hidden reveal delay-200">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" src="gal5.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<div className="w-10 h-10 bg-lime-400 text-black flex items-center justify-center rounded-sm mb-4">
<iconify-icon height="24" icon="solar:body-shape-linear" width="24"></iconify-icon>
</div>
<h3 className="font-['Bebas_Neue'] text-3xl text-white tracking-wide mb-2" data-en="Cross Training" data-es="Cross Training" data-fr="Cross Training">Cross Training</h3>
<p className="text-xs text-neutral-400 mb-4" data-en="Full body circuits for optimal fitness." data-es="Circuitos completos para un estado físico óptimo." data-fr="Des circuits complets pour une condition physique optimale.">Des circuits complets pour une condition physique optimale.</p>
<a className="text-[10px] tracking-[0.15em] uppercase text-lime-400 font-medium hover:text-white transition-colors" data-en="Join program →" data-es="Únete al programa →" data-fr="Rejoindre ce programme →" href="#contact">Rejoindre ce programme →</a>
</div>
</div>
</div>
</section>

<section className="py-28 px-6 md:px-12 bg-neutral-900" id="gallery">
<div className="mb-16">
<p className="text-[10px] tracking-[0.2em] uppercase text-lime-400 flex items-center gap-2 mb-4"><span className="w-7 h-px bg-lime-400"></span><span data-en="The Environment" data-es="El Entorno" data-fr="L'environnement">L'environnement</span></p>
<h2 className="font-['Bebas_Neue'] text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tight uppercase text-white reveal" data-en="THE GYM IN PHOTOS" data-es="EL GYM EN FOTOS" data-fr="LA SALLE EN IMAGES">LA SALLE EN IMAGES</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-6 grid-rows-6 md:grid-rows-3 gap-1 h-[900px] md:h-[660px]">

<div className="col-span-2 row-span-1 md:col-span-2 md:row-span-1 overflow-hidden relative group cursor-pointer" onclick="openLightbox(0)">
<div className="absolute inset-0 bg-gradient-to-br from-lime-400/40 to-transparent opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-300"></div>
<img className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-500" src="gal1.jpg"/>
</div>
<div className="col-span-1 md:col-start-3 md:col-span-1 row-span-1 md:row-span-2 overflow-hidden relative group cursor-pointer" onclick="openLightbox(1)">
<div className="absolute inset-0 bg-gradient-to-br from-lime-400/40 to-transparent opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-300"></div>
<img className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-500" src="gal2.jpg"/>
</div>
<div className="col-span-1 md:col-start-4 md:col-span-2 row-span-1 overflow-hidden relative group cursor-pointer" onclick="openLightbox(2)">
<div className="absolute inset-0 bg-gradient-to-br from-lime-400/40 to-transparent opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-300"></div>
<img className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-500" src="gal3.jpg"/>
</div>
<div className="col-span-1 md:col-start-6 md:col-span-1 row-span-1 overflow-hidden relative group cursor-pointer" onclick="openLightbox(3)">
<div className="absolute inset-0 bg-gradient-to-br from-lime-400/40 to-transparent opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-300"></div>
<img className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-500" src="gal4.jpg"/>
</div>
<div className="col-span-1 md:col-start-1 md:col-span-1 row-span-1 md:row-span-2 overflow-hidden relative group cursor-pointer" onclick="openLightbox(4)">
<div className="absolute inset-0 bg-gradient-to-br from-lime-400/40 to-transparent opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-300"></div>
<img className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-500" src="gal5.jpg"/>
</div>
<div className="col-span-2 md:col-start-2 md:col-span-1 row-span-1 overflow-hidden relative group cursor-pointer" onclick="openLightbox(5)">
<div className="absolute inset-0 bg-gradient-to-br from-lime-400/40 to-transparent opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-300"></div>
<img className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-500" src="gal6.jpg"/>
</div>
<div className="col-span-1 md:col-start-4 md:col-span-1 row-span-1 md:row-span-2 overflow-hidden relative group cursor-pointer" onclick="openLightbox(6)">
<div className="absolute inset-0 bg-gradient-to-br from-lime-400/40 to-transparent opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-300"></div>
<img className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-500" src="gal7.jpg"/>
</div>
<div className="col-span-1 md:col-start-5 md:col-span-2 row-span-1 overflow-hidden relative group cursor-pointer" onclick="openLightbox(7)">
<div className="absolute inset-0 bg-gradient-to-br from-lime-400/40 to-transparent opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-300"></div>
<img className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-500" src="gal8.jpg"/>
</div>
<div className="col-span-2 md:col-start-2 md:col-span-2 row-span-1 overflow-hidden relative group cursor-pointer" onclick="openLightbox(8)">
<div className="absolute inset-0 bg-gradient-to-br from-lime-400/40 to-transparent opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-300"></div>
<img className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-500" src="gal9.jpg"/>
</div>
<div className="hidden md:block md:col-start-5 md:col-span-1 row-span-1 overflow-hidden relative group cursor-pointer" onclick="openLightbox(9)">
<div className="absolute inset-0 bg-gradient-to-br from-lime-400/40 to-transparent opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-300"></div>
<img className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-500" src="gal10.jpg"/>
</div>
<div className="hidden md:block md:col-start-6 md:col-span-1 row-span-1 overflow-hidden relative group cursor-pointer" onclick="openLightbox(10)">
<div className="absolute inset-0 bg-gradient-to-br from-lime-400/40 to-transparent opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-300"></div>
<img className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-500" src="gal11.jpg"/>
</div>
</div>
</section>

<div className="fixed inset-0 bg-black/95 backdrop-blur-md z-[2000] hidden items-center justify-center" id="lightbox">
<button className="absolute top-6 right-8 font-['Bebas_Neue'] text-4xl text-lime-400 hover:rotate-90 transition-transform duration-300" id="lightbox-close" onclick="closeLightbox()">✕</button>
<button className="absolute left-4 top-1/2 -translate-y-1/2 font-['Bebas_Neue'] text-5xl text-lime-400 bg-black/40 px-4 py-2 hover:opacity-70 transition-opacity" id="lb-prev" onclick="lbNav(-1)">‹</button>
<img alt="Gallery" className="max-w-[90vw] max-h-[88vh] object-contain border border-lime-400/20" id="lightbox-img" src="" />
<button className="absolute right-4 top-1/2 -translate-y-1/2 font-['Bebas_Neue'] text-5xl text-lime-400 bg-black/40 px-4 py-2 hover:opacity-70 transition-opacity" id="lb-next" onclick="lbNav(1)">›</button>
</img></div>

<section className="bg-neutral-950 flex flex-col md:flex-row" id="about">
<div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[600px] overflow-hidden">
<img alt="Prime Gym Marrakech" className="absolute inset-0 w-full h-full object-cover" src="about.jpg" />
</img></div>
<div className="w-full md:w-1/2 py-20 px-6 md:px-16 flex flex-col justify-center">
<p className="text-[10px] tracking-[0.2em] uppercase text-lime-400 flex items-center gap-2 mb-4"><span className="w-7 h-px bg-lime-400"></span><span data-en="Our Story" data-es="Nuestra historia" data-fr="Notre histoire">Notre histoire</span></p>
<h2 className="font-['Bebas_Neue'] text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tight uppercase text-white mb-8 reveal" data-en="LUXURY &amp;&lt;br/&gt;PERFORMANCE" data-es="LUJO &amp;&lt;br/&gt;RENDIMIENTO" data-fr="LUXE &amp;&lt;br/&gt;PERFORMANCE">LUXE &amp;<br/>PERFORMANCE</h2>
<blockquote className="font-['Cormorant_Garamond'] text-2xl md:text-3xl italic text-lime-400 leading-snug border-l-2 border-lime-400 pl-6 mb-8 reveal" data-en="« A space designed by champions, for champions. »" data-es="« Un espacio diseñado por campeones, para campeones. »" data-fr="« Un espace conçu par des champions, pour des champions. »">
      « Un espace conçu par des champions, pour des champions. »
    </blockquote>
<p className="text-sm text-neutral-400 leading-relaxed mb-10 reveal" data-en="Prime Gym is much more than a gym — it's an elite community dedicated to physical and mental transformation. Located in the heart of Marrakech, our facility combines premium equipment, certified coaches and an atmosphere that pushes your limits every single day." data-es="Prime Gym es mucho más que un gimnasio — es una comunidad de élite dedicada a la transformación física y mental. Ubicado en el corazón de Marrakech, nuestro establecimiento combina equipamiento premium, entrenadores certificados y una atmósfera que supera tus límites cada día." data-fr="Prime Gym est bien plus qu'une salle de sport — c'est une communauté d'élite dédiée à la transformation physique et mentale. Situé au cœur de Marrakech, notre établissement réunit équipements haut de gamme, coachs certifiés et une atmosphère qui repousse vos limites chaque jour.">
      Prime Gym est bien plus qu'une salle de sport — c'est une communauté d'élite dédiée à la transformation physique et mentale. Situé au cœur de Marrakech, notre établissement réunit équipements haut de gamme, coachs certifiés et une atmosphère qui repousse vos limites chaque jour.
    </p>
<div className="flex items-center gap-8 reveal">
<div className="text-xs tracking-[0.1em] uppercase text-neutral-500" data-en="Mon – Sun" data-es="Lun – Dom" data-fr="Lun – Dim">Lun – Dim</div>
<div className="font-['Bebas_Neue'] text-2xl tracking-wide text-lime-400">08:00 – 23:00</div>
</div>
</div>
</section>

<section className="py-28 px-6 md:px-12 bg-neutral-900 border-t border-white/5" id="trainers">
<div className="text-center mb-16">
<p className="text-[10px] tracking-[0.2em] uppercase text-lime-400 flex justify-center items-center gap-2 mb-4"><span className="w-7 h-px bg-lime-400"></span><span data-en="Meet the team" data-es="Conoce al equipo" data-fr="Rencontrez l'équipe">Rencontrez l'équipe</span><span className="w-7 h-px bg-lime-400"></span></p>
<h2 className="font-['Bebas_Neue'] text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tight uppercase text-white reveal" data-en="EXPERT TRAINERS" data-es="ENTRENADORES EXPERTOS" data-fr="COACHS EXPERTS">COACHS EXPERTS</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="group text-center reveal">
<div className="relative overflow-hidden mb-6 h-[400px]">
<img className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" src="gal8.jpg"/>
<div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
<a className="w-10 h-10 rounded-sm bg-lime-400 text-black flex items-center justify-center hover:bg-white" href="#"><iconify-icon icon="solar:global-linear" width="20"></iconify-icon></a>
</div>
</div>
<h3 className="font-['Bebas_Neue'] text-3xl text-white tracking-wide mb-1">Amine B.</h3>
<p className="text-xs tracking-widest text-lime-400 uppercase font-medium" data-en="Head Coach" data-es="Entrenador Principal" data-fr="Head Coach">Head Coach</p>
</div>

<div className="group text-center reveal delay-100">
<div className="relative overflow-hidden mb-6 h-[400px]">
<img className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" src="gal10.jpg"/>
<div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
<a className="w-10 h-10 rounded-sm bg-lime-400 text-black flex items-center justify-center hover:bg-white" href="#"><iconify-icon icon="solar:global-linear" width="20"></iconify-icon></a>
</div>
</div>
<h3 className="font-['Bebas_Neue'] text-3xl text-white tracking-wide mb-1">Sara N.</h3>
<p className="text-xs tracking-widest text-lime-400 uppercase font-medium" data-en="Fitness &amp; Nutrition" data-es="Fitness y Nutrición" data-fr="Coach Fitness &amp; Nutrition">Coach Fitness &amp; Nutrition</p>
</div>

<div className="group text-center reveal delay-200">
<div className="relative overflow-hidden mb-6 h-[400px]">
<img className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" src="gal11.jpg"/>
<div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
<a className="w-10 h-10 rounded-sm bg-lime-400 text-black flex items-center justify-center hover:bg-white" href="#"><iconify-icon icon="solar:global-linear" width="20"></iconify-icon></a>
</div>
</div>
<h3 className="font-['Bebas_Neue'] text-3xl text-white tracking-wide mb-1">Youssef K.</h3>
<p className="text-xs tracking-widest text-lime-400 uppercase font-medium" data-en="Strength Expert" data-es="Experto en Fuerza" data-fr="Expert Musculation">Expert Musculation</p>
</div>
</div>
</section>

<section className="py-28 px-6 md:px-12 bg-neutral-950">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
<div>
<p className="text-[10px] tracking-[0.2em] uppercase text-lime-400 flex items-center gap-2 mb-4"><span className="w-7 h-px bg-lime-400"></span><span data-en="Before / After" data-es="Antes / Después" data-fr="Avant / Après">Avant / Après</span></p>
<h2 className="font-['Bebas_Neue'] text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tight uppercase text-white reveal" data-en="REAL RESULTS" data-es="RESULTADOS REALES" data-fr="RÉSULTATS RÉELS">RÉSULTATS RÉELS</h2>
</div>
<p className="text-sm text-neutral-400 leading-relaxed max-w-lg reveal" data-en="Join those who have already transformed their lives with our elite coaching and premium equipment." data-es="Únete a quienes ya han transformado sus vidas con nuestro entrenamiento de élite y equipamiento premium." data-fr="Rejoignez ceux qui ont déjà transformé leur vie grâce à notre encadrement d'élite et notre équipement premium.">
      Rejoignez ceux qui ont déjà transformé leur vie grâce à notre encadrement d'élite et notre équipement premium.
    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

<div className="relative h-[300px] md:h-[400px] overflow-hidden reveal group">
<div className="absolute inset-0 flex w-full h-full">
<div className="w-1/2 h-full bg-neutral-900 border-r-2 border-lime-400 relative overflow-hidden grayscale">
<img className="absolute w-[200%] h-full object-cover max-w-none opacity-50" src="gal1.jpg"/>
<span className="absolute bottom-4 left-4 bg-black/60 text-white text-[10px] tracking-widest px-2 py-1 uppercase" data-en="Before" data-es="Antes" data-fr="Avant">Avant</span>
</div>
<div className="w-1/2 h-full bg-neutral-800 relative overflow-hidden">
<img className="absolute -left-full w-[200%] h-full object-cover max-w-none group-hover:scale-105 transition-transform duration-700" src="gal9.jpg"/>
<span className="absolute bottom-4 right-4 bg-lime-400 text-black font-medium text-[10px] tracking-widest px-2 py-1 uppercase" data-en="After 6 months" data-es="Después de 6 meses" data-fr="Après 6 mois">Après 6 mois</span>
</div>
</div>
</div>

<div className="relative h-[300px] md:h-[400px] overflow-hidden reveal delay-100 group">
<div className="absolute inset-0 flex w-full h-full">
<div className="w-1/2 h-full bg-neutral-900 border-r-2 border-lime-400 relative overflow-hidden grayscale">
<img className="absolute w-[200%] h-full object-cover max-w-none opacity-50" src="gal7.jpg"/>
<span className="absolute bottom-4 left-4 bg-black/60 text-white text-[10px] tracking-widest px-2 py-1 uppercase" data-en="Before" data-es="Antes" data-fr="Avant">Avant</span>
</div>
<div className="w-1/2 h-full bg-neutral-800 relative overflow-hidden">
<img className="absolute -left-full w-[200%] h-full object-cover max-w-none group-hover:scale-105 transition-transform duration-700" src="gal12.jpg"/>
<span className="absolute bottom-4 right-4 bg-lime-400 text-black font-medium text-[10px] tracking-widest px-2 py-1 uppercase" data-en="After 4 months" data-es="Después de 4 meses" data-fr="Après 4 mois">Après 4 mois</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-28 px-6 md:px-12 bg-neutral-900 border-t border-white/5" id="pricing">
<div className="text-center mb-16">
<p className="text-[10px] tracking-[0.2em] uppercase text-lime-400 flex justify-center items-center gap-2 mb-4"><span className="w-7 h-px bg-lime-400"></span><span data-en="Choose your plan" data-es="Elige tu plan" data-fr="Choisissez votre formule">Choisissez votre formule</span><span className="w-7 h-px bg-lime-400"></span></p>
<h2 className="font-['Bebas_Neue'] text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tight uppercase text-white reveal" data-en="MEMBERSHIP PLANS" data-es="PLANES DE SUSCRIPCIÓN" data-fr="NOS ABONNEMENTS">NOS ABONNEMENTS</h2>
</div>
<div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="bg-neutral-950 border border-white/10 p-10 flex flex-col items-center text-center reveal">
<h3 className="font-medium text-lg text-white mb-2 tracking-wide uppercase">Standard</h3>
<div className="font-['Bebas_Neue'] text-6xl text-lime-400 mb-6">350<span className="text-xl text-neutral-500 uppercase tracking-widest"> MAD /Mois</span></div>
<ul className="space-y-4 text-xs text-neutral-400 w-full mb-8 flex-1">
<li className="flex items-center justify-center gap-2"><iconify-icon className="text-lime-400 text-base" icon="solar:check-circle-linear"></iconify-icon> Accès plateau cardio &amp; muscu</li>
<li className="flex items-center justify-center gap-2"><iconify-icon className="text-lime-400 text-base" icon="solar:check-circle-linear"></iconify-icon> Vestiaires &amp; Douches</li>
<li className="flex items-center justify-center gap-2 text-neutral-600"><iconify-icon className="text-base" icon="solar:close-circle-linear"></iconify-icon> Cours collectifs</li>
<li className="flex items-center justify-center gap-2 text-neutral-600"><iconify-icon className="text-base" icon="solar:close-circle-linear"></iconify-icon> Suivi personnalisé</li>
</ul>
<a className="w-full border border-white/20 text-white text-xs font-medium uppercase tracking-widest py-3.5 hover:border-lime-400 hover:text-lime-400 transition-colors" data-en="Choose Standard" data-es="Elegir Estándar" data-fr="Choisir Standard" href="#contact">Choisir Standard</a>
</div>

<div className="bg-lime-400 p-10 flex flex-col items-center text-center reveal scale-105 shadow-[0_0_40px_rgba(163,230,53,0.15)] z-10 relative">
<div className="absolute top-0 left-0 w-full h-1 bg-white/30"></div>
<h3 className="font-bold text-lg text-black mb-2 tracking-wide uppercase">Premium</h3>
<div className="font-['Bebas_Neue'] text-6xl text-black mb-6">450<span className="text-xl text-black/60 uppercase tracking-widest"> MAD /Mois</span></div>
<ul className="space-y-4 text-xs text-black font-medium w-full mb-8 flex-1">
<li className="flex items-center justify-center gap-2"><iconify-icon className="text-base" icon="solar:check-circle-linear"></iconify-icon> Accès illimité club</li>
<li className="flex items-center justify-center gap-2"><iconify-icon className="text-base" icon="solar:check-circle-linear"></iconify-icon> Cours collectifs inclus</li>
<li className="flex items-center justify-center gap-2"><iconify-icon className="text-base" icon="solar:check-circle-linear"></iconify-icon> Plan d'entraînement de base</li>
<li className="flex items-center justify-center gap-2"><iconify-icon className="text-base" icon="solar:check-circle-linear"></iconify-icon> Accès espace détente</li>
</ul>
<a className="w-full bg-black text-lime-400 text-xs font-bold uppercase tracking-widest py-3.5 hover:bg-neutral-900 transition-colors" data-en="Choose Premium" data-es="Elegir Premium" data-fr="Choisir Premium" href="#contact">Choisir Premium</a>
</div>

<div className="bg-neutral-950 border border-white/10 p-10 flex flex-col items-center text-center reveal">
<h3 className="font-medium text-lg text-white mb-2 tracking-wide uppercase">VIP Coaching</h3>
<div className="font-['Bebas_Neue'] text-6xl text-lime-400 mb-6">850<span className="text-xl text-neutral-500 uppercase tracking-widest"> MAD /Mois</span></div>
<ul className="space-y-4 text-xs text-neutral-400 w-full mb-8 flex-1">
<li className="flex items-center justify-center gap-2"><iconify-icon className="text-lime-400 text-base" icon="solar:check-circle-linear"></iconify-icon> Accès illimité VIP</li>
<li className="flex items-center justify-center gap-2"><iconify-icon className="text-lime-400 text-base" icon="solar:check-circle-linear"></iconify-icon> 2 Séances Coaching/semaine</li>
<li className="flex items-center justify-center gap-2"><iconify-icon className="text-lime-400 text-base" icon="solar:check-circle-linear"></iconify-icon> Plan Nutritionnel sur-mesure</li>
<li className="flex items-center justify-center gap-2"><iconify-icon className="text-lime-400 text-base" icon="solar:check-circle-linear"></iconify-icon> Serviette &amp; Casier privé</li>
</ul>
<a className="w-full border border-white/20 text-white text-xs font-medium uppercase tracking-widest py-3.5 hover:border-lime-400 hover:text-lime-400 transition-colors" data-en="Choose VIP" data-es="Elegir VIP" data-fr="Choisir VIP" href="#contact">Choisir VIP</a>
</div>
</div>
</section>

<section className="py-28 px-6 md:px-12 bg-neutral-950 overflow-hidden" id="testimonials">
<div className="mb-16">
<p className="text-[10px] tracking-[0.2em] uppercase text-lime-400 flex items-center gap-2 mb-4"><span className="w-7 h-px bg-lime-400"></span><span data-en="What they say" data-es="Lo que dicen" data-fr="Ce qu'ils disent">Ce qu'ils disent</span></p>
<h2 className="font-['Bebas_Neue'] text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tight uppercase text-white reveal" data-en="MEMBER REVIEWS" data-es="RESEÑAS DE MIEMBROS" data-fr="AVIS DE NOS MEMBRES">AVIS DE NOS MEMBRES</h2>
</div>
<div className="relative cursor-grab active:cursor-grabbing">
<div className="flex gap-6 overflow-x-auto snap-x hide-scrollbar pb-4" id="carousel-track">

<div className="flex-none w-[320px] bg-neutral-900 border border-lime-400/10 rounded-sm p-8 snap-start hover:border-lime-400/40 hover:-translate-y-1 transition-all duration-300">
<div className="flex items-center gap-4 mb-5">
<div className="w-11 h-11 rounded-full bg-lime-400 flex items-center justify-center font-['Bebas_Neue'] text-xl text-black shrink-0">KA</div>
<div>
<div className="font-medium text-sm text-white">Karim Alaoui</div>
<div className="text-[10px] text-neutral-500 flex items-center gap-1 mt-0.5"><iconify-icon className="text-lime-400" icon="solar:medal-star-linear"></iconify-icon> Google Review</div>
</div>
</div>
<div className="text-lime-400 text-sm tracking-widest mb-3">★★★★★</div>
<p className="text-xs text-neutral-400 leading-relaxed" data-en="The best gym in Marrakech, without a doubt. The equipment is ultra-modern and the coaches are truly attentive." data-es="El mejor gimnasio de Marrakech, sin duda. Los equipos son ultra modernos y los entrenadores son realmente atentos." data-fr="La meilleure salle de Marrakech, sans aucun doute. Les équipements sont ultra-modernes et les coachs sont vraiment à l'écoute.">
          La meilleure salle de Marrakech, sans aucun doute. Les équipements sont ultra-modernes et les coachs sont vraiment à l'écoute. Je me sens comme un champion chaque jour.
        </p>
</div>

<div className="flex-none w-[320px] bg-neutral-900 border border-lime-400/10 rounded-sm p-8 snap-start hover:border-lime-400/40 hover:-translate-y-1 transition-all duration-300">
<div className="flex items-center gap-4 mb-5">
<div className="w-11 h-11 rounded-full bg-lime-400 flex items-center justify-center font-['Bebas_Neue'] text-xl text-black shrink-0">SB</div>
<div>
<div className="font-medium text-sm text-white">Sara Benali</div>
<div className="text-[10px] text-neutral-500 flex items-center gap-1 mt-0.5"><iconify-icon className="text-lime-400" icon="solar:medal-star-linear"></iconify-icon> Google Review</div>
</div>
</div>
<div className="text-lime-400 text-sm tracking-widest mb-3">★★★★★</div>
<p className="text-xs text-neutral-400 leading-relaxed" data-en="I've tried several gyms in Marrakech — Prime Gym is in a class of its own. The atmosphere is motivating." data-es="He probado varios gimnasios en Marrakech — Prime Gym está en una clase aparte. El ambiente es motivador." data-fr="J'ai essayé plusieurs salles à Marrakech — Prime Gym est dans une classe à part. L'ambiance est motivante.">
          J'ai essayé plusieurs salles à Marrakech — Prime Gym est dans une classe à part. L'ambiance est motivante, l'équipe est professionnelle et les résultats parlent d'eux-mêmes.
        </p>
</div>

<div className="flex-none w-[320px] bg-neutral-900 border border-lime-400/10 rounded-sm p-8 snap-start hover:border-lime-400/40 hover:-translate-y-1 transition-all duration-300">
<div className="flex items-center gap-4 mb-5">
<div className="w-11 h-11 rounded-full bg-lime-400 flex items-center justify-center font-['Bebas_Neue'] text-xl text-black shrink-0">YM</div>
<div>
<div className="font-medium text-sm text-white">Youssef Mansouri</div>
<div className="text-[10px] text-neutral-500 flex items-center gap-1 mt-0.5"><iconify-icon className="text-lime-400" icon="solar:medal-star-linear"></iconify-icon> Google Review</div>
</div>
</div>
<div className="text-lime-400 text-sm tracking-widest mb-3">★★★★★</div>
<p className="text-xs text-neutral-400 leading-relaxed" data-en="The personalised nutrition plan completely changed the way I train. In 3 months I achieved results." data-es="El plan de nutrición personalizado cambió completamente mi forma de entrenar. En 3 meses logré resultados." data-fr="Le plan nutritionnel personnalisé a complètement changé ma façon de m'entraîner. En 3 mois j'ai atteint des résultats.">
          Le plan nutritionnel personnalisé a complètement changé ma façon de m'entraîner. En 3 mois j'ai atteint des résultats que je n'aurais jamais crus possibles. Merci Prime Gym !
        </p>
</div>

<div className="flex-none w-[320px] bg-neutral-900 border border-lime-400/10 rounded-sm p-8 snap-start hover:border-lime-400/40 hover:-translate-y-1 transition-all duration-300">
<div className="flex items-center gap-4 mb-5">
<div className="w-11 h-11 rounded-full bg-lime-400 flex items-center justify-center font-['Bebas_Neue'] text-xl text-black shrink-0">LE</div>
<div>
<div className="font-medium text-sm text-white">Layla El Fassi</div>
<div className="text-[10px] text-neutral-500 flex items-center gap-1 mt-0.5"><iconify-icon className="text-lime-400" icon="solar:medal-star-linear"></iconify-icon> Google Review</div>
</div>
</div>
<div className="text-lime-400 text-sm tracking-widest mb-3">★★★★★</div>
<p className="text-xs text-neutral-400 leading-relaxed" data-en="Luxurious setting, caring staff and very convenient hours. The healthy meals offered on-site are a real bonus." data-es="Entorno lujoso, personal atento y horarios muy convenientes. Las comidas saludables que ofrecen son un gran plus." data-fr="Cadre luxueux, équipes bienveillantes et horaires très pratiques. Les repas sains sur place sont un vrai plus.">
          Cadre luxueux, équipes bienveillantes et horaires très pratiques. Les repas sains proposés sur place sont un vrai plus. Je recommande à 100% !
        </p>
</div>
</div>
</div>
</section>

<section className="py-28 px-6 md:px-12 bg-neutral-900 border-t border-white/5" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

<div>
<p className="text-[10px] tracking-[0.2em] uppercase text-lime-400 flex items-center gap-2 mb-4"><span className="w-7 h-px bg-lime-400"></span><span data-en="Find Us" data-es="Encuéntranos" data-fr="Nous trouver">Nous trouver</span></p>
<h2 className="font-['Bebas_Neue'] text-5xl md:text-6xl leading-none tracking-tight uppercase text-white mb-10 reveal" data-en="GET IN TOUCH" data-es="CONTÁCTANOS" data-fr="CONTACTEZ-NOUS">CONTACTEZ-NOUS</h2>
<div className="space-y-6">
<div className="flex items-start gap-4 reveal">
<div className="w-10 h-10 border border-lime-400/30 rounded-full flex items-center justify-center shrink-0 text-lime-400 text-lg">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="text-sm text-neutral-400 leading-relaxed">
<strong className="block text-white text-[10px] tracking-[0.1em] uppercase mb-1" data-en="Address" data-es="Dirección" data-fr="Adresse">Adresse</strong>
            Allal Fassi, près du Centre d'affaires Malizia, Marrakech
          </div>
</div>
<div className="flex items-start gap-4 reveal">
<div className="w-10 h-10 border border-lime-400/30 rounded-full flex items-center justify-center shrink-0 text-lime-400 text-lg">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
</div>
<div className="text-sm text-neutral-400 leading-relaxed">
<strong className="block text-white text-[10px] tracking-[0.1em] uppercase mb-1" data-en="Phone" data-es="Teléfono" data-fr="Téléphone">Téléphone</strong>
            +212 709-219904
          </div>
</div>
<div className="flex items-start gap-4 reveal">
<div className="w-10 h-10 border border-lime-400/30 rounded-full flex items-center justify-center shrink-0 text-lime-400 text-lg">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</div>
<div className="text-sm text-neutral-400 leading-relaxed">
<strong className="block text-white text-[10px] tracking-[0.1em] uppercase mb-1" data-en="Email" data-es="Correo" data-fr="Email">Email</strong>
            contact@primegym.ma
          </div>
</div>
</div>
<div className="flex gap-3 mt-10 reveal">
<a className="w-10 h-10 border border-lime-400/20 rounded-full flex items-center justify-center text-neutral-400 hover:border-lime-400 hover:text-lime-400 hover:bg-lime-400/10 transition-all" href="https://instagram.com/primegym.ma" target="_blank">
<iconify-icon icon="solar:camera-linear" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 border border-lime-400/20 rounded-full flex items-center justify-center text-neutral-400 hover:border-lime-400 hover:text-lime-400 hover:bg-lime-400/10 transition-all" href="https://wa.link/18x139" target="_blank">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 border border-lime-400/20 rounded-full flex items-center justify-center text-neutral-400 hover:border-lime-400 hover:text-lime-400 hover:bg-lime-400/10 transition-all" href="https://maps.google.com/?q=Allal+Fassi+Malizia+Marrakech+Maroc" target="_blank">
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon>
</a>
</div>
<div className="mt-8 h-48 md:h-56 rounded border border-lime-400/20 overflow-hidden reveal">
<iframe allowfullscreen="" className="w-full h-full border-0 filter grayscale invert-[90%] hue-rotate-180" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.123!2d-7.9897!3d31.6258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8c0e9a6b27%3A0x4f2e8b3a1c5d6e7f!2sAllal%20Al%20Fassi%2C%20Marrakech%2C%20Maroc!5e0!3m2!1sfr!2sma!4v1711000000000!5m2!1sfr!2sma"></iframe>
</div>
</div>

<div>
<p className="text-[10px] tracking-[0.2em] uppercase text-lime-400 flex items-center gap-2 mb-4"><span className="w-7 h-px bg-lime-400"></span><span data-en="Send a message" data-es="Enviar mensaje" data-fr="Envoyer un message">Envoyer un message</span></p>
<form className="space-y-5 reveal" id="contact-form" onsubmit="submitForm(event)">
<div>
<label className="block text-[10px] tracking-[0.15em] uppercase text-neutral-500 mb-2" data-en="Your name" data-es="Tu nombre" data-fr="Votre nom">Votre nom</label>
<input className="w-full bg-white/5 border border-white/10 rounded-sm text-white text-sm px-4 py-3 outline-none focus:border-lime-400 transition-colors" id="f-name" placeholder="Mohamed Alami" required="" type="text"/>
</div>
<div>
<label className="block text-[10px] tracking-[0.15em] uppercase text-neutral-500 mb-2" data-en="Email" data-es="Correo electrónico" data-fr="Email">Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded-sm text-white text-sm px-4 py-3 outline-none focus:border-lime-400 transition-colors" id="f-email" placeholder="vous@exemple.com" required="" type="email"/>
</div>
<div>
<label className="block text-[10px] tracking-[0.15em] uppercase text-neutral-500 mb-2" data-en="Your goal" data-es="Tu objetivo" data-fr="Votre objectif">Votre objectif</label>
<select className="w-full bg-white/5 border border-white/10 rounded-sm text-white text-sm px-4 py-3 outline-none focus:border-lime-400 transition-colors appearance-none" id="f-goal">
<option className="bg-neutral-900" data-en="Weight loss" data-es="Pérdida de peso" data-fr="Perte de poids">Perte de poids</option>
<option className="bg-neutral-900" data-en="Muscle gain" data-es="Ganar masa muscular" data-fr="Prise de masse">Prise de masse</option>
<option className="bg-neutral-900" data-en="Cardio &amp; endurance" data-es="Cardio y resistencia" data-fr="Cardio &amp; endurance">Cardio &amp; endurance</option>
<option className="bg-neutral-900" data-en="General fitness" data-es="Forma física general" data-fr="Remise en forme générale">Remise en forme générale</option>
<option className="bg-neutral-900" data-en="Personal coaching" data-es="Entrenamiento personal" data-fr="Coaching personnalisé">Coaching personnalisé</option>
</select>
</div>
<div>
<label className="block text-[10px] tracking-[0.15em] uppercase text-neutral-500 mb-2" data-en="Message" data-es="Mensaje" data-fr="Message">Message</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-sm text-white text-sm px-4 py-3 outline-none focus:border-lime-400 transition-colors min-h-[120px] resize-y" id="f-message" placeholder="Parlez-nous de vous..." required=""></textarea>
</div>
<button className="w-full bg-lime-400 text-black font-bold text-xs tracking-[0.15em] uppercase rounded-sm px-4 py-4 hover:bg-lime-300 hover:-translate-y-0.5 transition-all" data-en="Send via WhatsApp →" data-es="Enviar por WhatsApp →" data-fr="Envoyer via WhatsApp →" type="submit">Envoyer via WhatsApp →</button>
</form>
</div>
</div>
</section>

<footer className="bg-neutral-950 border-t border-white/10 py-6 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4" id="footer">
<div className="font-['Bebas_Neue'] text-xl tracking-wide">
<span className="text-lime-400">PRIME</span><span className="text-white"> GYM</span>
</div>
<p className="text-xs text-neutral-500 text-center order-3 md:order-2">
<span data-en="© 2025 Prime Gym Maroc — All rights reserved" data-es="© 2025 Prime Gym Maroc — Todos los derechos reservados" data-fr="© 2025 Prime Gym Maroc — Tous droits réservés">© 2025 Prime Gym Maroc — Tous droits réservés</span>
</p>
<p className="text-xs text-neutral-500 text-center md:text-right hidden md:block order-2 md:order-3">Allal Fassi, Malizia, Marrakech</p>
</footer>

<div className="fixed bottom-24 md:bottom-8 right-6 z-[900] flex flex-col items-end gap-3 group">
<span className="bg-neutral-950/90 border border-lime-400/30 text-lime-400 text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 backdrop-blur-md pointer-events-none" data-en="Message us" data-es="Escríbenos" data-fr="Écrivez-nous">Écrivez-nous</span>
<a aria-label="WhatsApp" className="w-14 h-14 rounded-full bg-lime-400 flex items-center justify-center shadow-[0_4px_24px_rgba(163,230,53,0.3)] hover:scale-110 transition-transform duration-300 border-[1.5px] border-white/20 wa-pulse" href="https://wa.link/18x139" target="_blank">
<iconify-icon className="text-black" icon="solar:phone-linear" width="28"></iconify-icon>
</a>
</div>

<nav className="md:hidden fixed bottom-0 left-0 right-0 z-[950] bg-neutral-950/95 backdrop-blur-xl border-t border-lime-400/20 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] grid grid-cols-5" id="mob-nav">
<a className="flex flex-col items-center gap-1 p-1 text-neutral-500 hover:text-lime-400 active:text-lime-400 transition-colors relative group" data-section="services" href="#services">
<iconify-icon icon="solar:cup-hot-linear" width="20"></iconify-icon>
<span className="text-[9px] tracking-wider uppercase font-medium" data-en="Services" data-es="Servicios" data-fr="Services">Services</span>
</a>
<a className="flex flex-col items-center gap-1 p-1 text-neutral-500 hover:text-lime-400 active:text-lime-400 transition-colors relative group" data-section="programs" href="#programs">
<iconify-icon icon="solar:dumbell-linear" width="20"></iconify-icon>
<span className="text-[9px] tracking-wider uppercase font-medium" data-en="Progs" data-es="Progs" data-fr="Progs">Progs</span>
</a>
<a className="flex flex-col items-center gap-1 p-1 text-neutral-500 hover:text-lime-400 transition-colors relative group" href="#" id="mob-home">
<div className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center -mt-5 border-2 border-neutral-950 shadow-[0_0_15px_rgba(163,230,53,0.3)]">
<iconify-icon className="text-black" icon="solar:home-2-linear" width="20"></iconify-icon>
</div>
<span className="text-[9px] tracking-wider uppercase font-medium text-lime-400" data-en="Home" data-es="Inicio" data-fr="Accueil">Accueil</span>
</a>
<a className="flex flex-col items-center gap-1 p-1 text-neutral-500 hover:text-lime-400 active:text-lime-400 transition-colors relative group" data-section="pricing" href="#pricing">
<iconify-icon icon="solar:tag-price-linear" width="20"></iconify-icon>
<span className="text-[9px] tracking-wider uppercase font-medium" data-en="Pricing" data-es="Precios" data-fr="Tarifs">Tarifs</span>
</a>
<a className="flex flex-col items-center gap-1 p-1 text-neutral-500 hover:text-lime-400 active:text-lime-400 transition-colors relative group" data-section="contact" href="#contact">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
<span className="text-[9px] tracking-wider uppercase font-medium" data-en="Contact" data-es="Contacto" data-fr="Contact">Contact</span>
</a>
</nav>



    </>
  );
}
