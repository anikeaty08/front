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
theme: {
extend: {
colors: {
brand: {
900: '#1a1611',
800: '#2c2419',
700: '#3d3225',
600: '#524530',
500: '#78674d',
400: '#a8977d',
300: '#c4b5a3',
200: '#ddd4c6',
150: '#eae4da',
100: '#f3efe8',
50: '#f9f7f3',
25: '#fcfbf9',
},
gold: {
DEFAULT: '#c4a97e',
light: '#dbc9a8',
dark: '#9a8260',
},
wine: {
DEFAULT: '#4a1525',
light: '#6b2240',
dark: '#2d0a15',
}
}
}
}
}



// Scroll reveal
function toggleModal(modalID) {
    const modal = document.getElementById(modalID);
    const backdrop = document.getElementById(modalID + '-backdrop');
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        backdrop.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    } else {
        modal.classList.add('hidden');
        backdrop.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// Navbar scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if (window.scrollY > 80) {
        nav.style.background = 'rgba(249,247,243,0.92)';
        nav.style.backdropFilter = 'blur(20px)';
        nav.style.borderBottom = '1px solid rgba(221,212,198,0.5)';
    } else {
        nav.style.background = 'transparent';
        nav.style.backdropFilter = 'none';
        nav.style.borderBottom = '1px solid transparent';
    }
});

// Intersection Observer for reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
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
      

<nav className="nav-animate fixed top-0 w-full z-50 transition-all duration-700" id="main-nav" style={{background: 'rgba(249, 247, 243, 0.92)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(221, 212, 198, 0.5)'}}>
<div className="max-w-7xl mx-auto px-6 lg:px-10">
<div className="h-20 flex items-center justify-between">
<a className="flex items-center gap-3.5 group" href="#">
<div className="w-10 h-10 border border-brand-300 group-hover:border-gold group-hover:bg-brand-900 rounded-full flex items-center justify-center transition-all duration-500">
<span className="group-hover:text-gold transition-colors duration-500 text-xl italic text-[#a7977d] font-display">P</span>
</div>
<div className="hidden sm:flex flex-col">
<span className="uppercase md:text-[#a7977d] text-sm font-medium tracking-[0.08em]" style={{fontSize: '11px', letterSpacing: '0.15em'}}>Monsieur Poirot</span>
</div>
</a>
<div className="hidden lg:flex items-center gap-12">
<a className="link-hover text-xs font-medium tracking-[0.12em] uppercase text-brand-500 hover:text-brand-800 transition-colors duration-300" href="#concept">L'Histoire</a>
<a className="link-hover text-xs font-medium tracking-[0.12em] uppercase text-brand-500 hover:text-brand-800 transition-colors duration-300" href="#cave">La Cave</a>
<a className="link-hover text-xs font-medium tracking-[0.12em] uppercase text-brand-500 hover:text-brand-800 transition-colors duration-300" href="#gallery">Galerie</a>
<a className="link-hover text-xs font-medium tracking-[0.12em] uppercase text-brand-500 hover:text-brand-800 transition-colors duration-300" href="#menu">La Carte</a>
<a className="link-hover text-xs font-medium tracking-[0.12em] uppercase text-brand-500 hover:text-brand-800 transition-colors duration-300" href="#infos">Contact</a>
</div>
<div className="flex items-center gap-5">
<button className="hidden md:flex items-center gap-2 text-xs tracking-wider text-brand-400">
<span className="text-brand-800 font-medium">FR</span>
<span className="text-brand-200">·</span>
<span className="hover:text-brand-800 transition-colors cursor-pointer">EN</span>
</button>
<button className="group bg-brand-900 text-brand-100 px-6 py-2.5 rounded-full text-xs font-medium tracking-[0.1em] uppercase hover:bg-wine transition-all duration-500 flex items-center gap-2.5 shadow-lg shadow-brand-900/10 hover:shadow-xl hover:shadow-wine/15" onclick="toggleModal('reservation-modal')">
                    Réserver
                    <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<header className="relative h-screen flex items-end overflow-hidden grain">
<div className="absolute inset-0 z-0">
<img alt="Monsieur Poirot" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=2560&amp;q=85" style={{filter: 'brightness(0.45) saturate(1.15) contrast(1.05)'}}/>
<div className="absolute top-0 right-0 bottom-0 left-0" style={{background: 'linear-gradient(180deg, rgba(26,22,17,0.3) 0%, rgba(26,22,17,0.15) 30%, rgba(26,22,17,0.6) 70%, rgba(26,22,17,0.92) 100%)'}}></div>
</div>
<div className="lg:px-10 lg:pb-28 w-full max-w-7xl z-10 mr-auto ml-auto pr-6 pb-20 pl-6 relative">
<div className="max-w-4xl">
<div className="hero-text-1 flex items-center gap-4 mb-8">
<div className="w-12 h-[1px] bg-gold/60"></div>
<span className="text-xs font-medium tracking-[0.25em] uppercase text-gold/80">Bistrot Fusion · Paris 11e</span>
</div>
<h1 className="hero-text-2 font-serif text-white leading-[0.95] tracking-tight mb-8" style={{fontSize: 'clamp(3.2rem, 8vw, 7rem)'}}>
<span className="font-light">Le repaire</span><br/>
<span className="italic font-light text-gold-light" style={{fontSize: '0.85em'}}>des esprits libres</span>
</h1>
<p className="hero-text-3 text-lg md:text-xl text-white/60 max-w-lg font-light leading-relaxed mb-12">
                Cuisine voyageuse par <span className="text-white/90 font-normal">Djibi Sow</span> et cave secrète, au cœur de la Bastille.
            </p>
<div className="hero-text-4 flex flex-col sm:flex-row items-start gap-4">
<button className="group hover:bg-gold-light transition-all duration-500 flex text-lg italic text-brand-900 tracking-tight font-serif bg-white rounded-full pt-2 pr-8 pb-2 pl-8 shadow-2xl gap-x-4 gap-y-4 items-center" onclick="toggleModal('reservation-modal')">
                    Réserver une table
                    <iconify-icon className="group-hover:translate-x-1 transition-transform duration-300" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<a className="hover:bg-white/8 hover:border-white/25 transition-all duration-500 text-base italic text-white/80 tracking-wider font-serif border-white/15 border rounded-full pt-2 pr-8 pb-2 pl-8 backdrop-blur-sm" href="#menu">
                    Découvrir la carte
                </a>
</div>
</div>

<div className="absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-3 text-white/25">
<span className="text-xs tracking-[0.2em] uppercase" style={{writingMode: 'vertical-rl'}}>Scroll</span>
<div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
<div className="absolute inset-x-0 top-0 h-1/2 bg-gold/60 float-gentle"></div>
</div>
</div>
</div>
</header>

<div className="bg-brand-25 border-y border-brand-150">
<div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap items-center justify-center gap-8 md:gap-16 text-brand-400">
<div className="flex items-center gap-2.5">
<iconify-icon className="text-gold-dark" icon="solar:chef-hat-minimalistic-linear" style={{strokeWidth: '1.5'}} width="17"></iconify-icon>
<span className="text-xs tracking-[0.1em] uppercase font-medium">Fait Maison</span>
</div>
<div className="w-1 h-1 rounded-full bg-brand-200 hidden md:block"></div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-gold-dark" icon="solar:wineglass-linear" style={{strokeWidth: '1.5'}} width="17"></iconify-icon>
<span className="text-xs tracking-[0.1em] uppercase font-medium">Prix Caviste</span>
</div>
<div className="w-1 h-1 rounded-full bg-brand-200 hidden md:block"></div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-gold-dark" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}} width="17"></iconify-icon>
<span className="text-xs tracking-[0.1em] uppercase font-medium">Végé &amp; Vegan</span>
</div>
<div className="w-1 h-1 rounded-full bg-brand-200 hidden md:block"></div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-gold-dark" icon="solar:star-bold" width="14"></iconify-icon>
<span className="text-xs tracking-[0.1em] uppercase font-medium">9.3 / 10 TheFork</span>
</div>
</div>
</div>

<section className="py-32 lg:py-40 px-6 bg-brand-50 relative grain" id="concept">
<div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
<div className="lg:col-span-5 relative reveal">
<div className="relative">
<img alt="Chef Djibi Sow" className="w-full rounded-2xl shadow-2xl shadow-brand-900/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b3873ec-8126-481e-a0e6-2a4cb22dd234_3840w.jpg" style={{aspectRatio: '3 / 4', objectFit: 'cover', objectPosition: 'center'}}/>
<div className="absolute inset-0 rounded-2xl" style={{boxShadow: 'inset 0 0 0 1px rgba(196,169,126,0.15)'}}></div>
</div>

<div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl shadow-xl shadow-brand-900/8 p-5 border border-brand-100 flex items-center gap-4">
<div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{background: 'linear-gradient(135deg, #f3efe8 0%, #dbc9a8 100%)'}}>
<iconify-icon className="text-gold-dark" icon="solar:star-bold" width="22"></iconify-icon>
</div>
<div>
<div className="font-serif text-2xl text-brand-900 tracking-tight">9.3<span className="text-brand-300 text-lg">/10</span></div>
<div className="text-xs text-brand-400 tracking-wider">TheFork Excellence</div>
</div>
</div>
</div>
<div className="lg:col-span-6 lg:col-start-7 space-y-8">
<div className="reveal">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-[1px] bg-gold"></div>
<span className="text-xs font-medium uppercase tracking-[0.25em] text-gold-dark">Notre Histoire</span>
</div>
<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-900 leading-[1.05] tracking-tight font-light">
                    Notre cuisine<br/>
<span className="italic">ne connaît pas</span><br/>
                    de frontières
                </h2>
</div>
<div className="reveal reveal-delay-1 space-y-5 text-brand-500 leading-[1.8]">
<p className="text-lg font-light">
                    Au 23 Rue Sedaine, nous ne servons pas simplement à dîner — nous racontons des histoires.
                </p>
<p className="font-light">
                    Celles du Chef Djibi Sow, architecte d'un pont audacieux entre la tradition française et ses pérégrinations culinaires. Un bistrot à l'âme rétro mais au cœur moderne — fait de bois, de velours et de rires.
                </p>
</div>
<div className="reveal reveal-delay-2 pt-8 grid grid-cols-3 gap-8 border-t border-brand-150">
<div>
<span className="block font-serif text-3xl lg:text-4xl text-brand-900 tracking-tight font-light">2016</span>
<span className="text-xs tracking-[0.15em] uppercase text-brand-400 mt-2 block font-medium">Ouverture</span>
</div>
<div className="">
<span className="block font-serif text-3xl lg:text-4xl text-brand-900 tracking-tight font-light italic">Fusion</span>
<span className="text-xs tracking-[0.15em] uppercase text-brand-400 mt-2 block font-medium">Cuisine</span>
</div>
<div>
<span className="block font-serif text-3xl lg:text-4xl text-brand-900 tracking-tight font-light">11</span>
<span className="text-xs tracking-[0.15em] uppercase text-brand-400 mt-2 block font-medium">Paris</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-28 lg:py-36 px-6 bg-white relative grain" id="gallery">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<div className="flex items-center justify-center gap-4 mb-6">
<div className="w-10 h-[1px] bg-gold"></div>
<span className="text-xs font-medium uppercase tracking-[0.25em] text-gold-dark">Galerie</span>
<div className="w-10 h-[1px] bg-gold"></div>
</div>
<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-900 tracking-tight font-light italic">L'Ambiance Poirot</h2>
</div>
<div className="grid grid-cols-12 gap-3 md:gap-4">
<div className="col-span-12 md:col-span-7 reveal">
<div className="gallery-card rounded-2xl overflow-hidden">
<img alt="Plat signature" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f1cf0cd4-3875-4f87-b94d-ab219bbfaaad_3840w.jpg" style={{aspectRatio: '16 / 10'}}/>
</div>
</div>
<div className="col-span-6 md:col-span-5 reveal reveal-delay-1">
<div className="gallery-card rounded-2xl overflow-hidden h-full">
<img alt="Ambiance bistrot" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c3b5ca22-aeab-451d-90e8-880047f9f0cb_3840w.jpg" style={{aspectRatio: '4 /'}}/>
</div>
</div>
<div className="col-span-6 md:col-span-4 reveal reveal-delay-2">
<div className="gallery-card rounded-2xl overflow-hidden">
<img alt="Cave à vins" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&amp;q=80" style={{aspectRatio: '1 / 1'}}/>
</div>
</div>
<div className="col-span-6 md:col-span-4 reveal reveal-delay-3">
<div className="gallery-card rounded-2xl overflow-hidden">
<img alt="Viande grillée" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544025162-d76694265947?w=800&amp;q=80" style={{aspectRatio: '1 / 1'}}/>
</div>
</div>
<div className="col-span-12 md:col-span-4 reveal reveal-delay-4">
<div className="gallery-card rounded-2xl overflow-hidden">
<img alt="Dessert artisanal" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&amp;q=80" style={{aspectRatio: '16 / 16'}}/>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 lg:py-40 px-6 relative overflow-hidden" id="cave" style={{background: 'linear-gradient(170deg, #1a1611 0%, #2d0a15 50%, #1a1611 100%)'}}>
<div className="absolute inset-0 grain" style={{opacity: '0.5'}}></div>
<div className="absolute top-0 left-0 w-full h-px shimmer-gold"></div>
<div className="absolute bottom-0 left-0 w-full h-px shimmer-gold"></div>

<div className="absolute top-20 right-20 w-96 h-96 rounded-full border border-gold/5 breathe hidden lg:block"></div>
<div className="absolute bottom-20 left-10 w-64 h-64 rounded-full border border-gold/3 breathe hidden lg:block" style={{animationDelay: '2s'}}></div>
<div className="max-w-6xl z-10 mr-auto ml-auto relative">
<div className="text-center max-w-2xl mx-auto mb-24 reveal">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gold/20 mb-8">
<iconify-icon className="text-gold" icon="solar:wineglass-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white tracking-tight font-light mb-6">
<span className="italic text-gold-light">La Cave</span> Secrète
            </h2>
<p className="text-white/40 text-lg font-light">Ne lisez pas la carte des vins — vivez-la.</p>
</div>
<div className="grid md:grid-cols-3 gap-5">
<div className="step-card reveal lg:p-10 border-white/6 border rounded-2xl pt-8 pr-8 pb-8 pl-8 backdrop-blur-sm">
<div className="text-gold/30 text-5xl italic font-serif mb-6">01</div>
<h3 className="text-2xl font-light text-white tracking-tight font-serif mb-4">Descendez</h3>
<p className="leading-[1.8] text-sm font-light text-white/35">Accédez à notre cave voûtée. Un sanctuaire intime loin de l'agitation parisienne.</p>
</div>
<div className="step-card reveal reveal-delay-1 lg:p-10 border-white/6 border rounded-2xl pt-8 pr-8 pb-8 pl-8 backdrop-blur-sm">
<div className="font-serif italic text-5xl text-gold/30 mb-6">02</div>
<h3 className="font-serif text-2xl text-white mb-4 font-light tracking-tight">Choisissez</h3>
<p className="text-white/35 text-sm leading-[1.8] font-light">Pas de carte impersonnelle. Prenez la bouteille en main, laissez-vous guider par votre instinct.</p>
</div>
<div className="step-card reveal reveal-delay-2 lg:p-10 border-gold/15 border-slate-50 border rounded-2xl pt-8 pr-8 pb-8 pl-8 backdrop-blur-sm">
<div className="font-serif italic text-5xl text-gold/40 mb-6">03</div>
<h3 className="font-serif text-2xl text-white mb-4 font-light tracking-tight">Prix Cave</h3>
<p className="text-white/35 text-sm leading-[1.8] font-light">Prix cave + droit de bouchon unique. Des grands crus sans le coefficient ×3 habituel.</p>
</div>
</div>
<div className="mt-20 text-center reveal">
<div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/8 bg-white/[0.02] text-white/30 text-sm font-light">
<iconify-icon className="text-gold/50" icon="solar:people-nearby-linear" style={{strokeWidth: '1.5'}} width="17"></iconify-icon>
<span className="">Cave privatisable pour vos événements — jusqu'à 15 personnes</span>
</div>
</div>
</div>
</section>

<section className="py-32 lg:py-40 px-6 bg-brand-50 relative grain" id="menu">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-24 reveal">
<div className="flex items-center justify-center gap-4 mb-6">
<div className="w-10 h-[1px] bg-gold"></div>
<span className="text-xs font-medium uppercase tracking-[0.25em] text-gold-dark">Carte de Saison</span>
<div className="w-10 h-[1px] bg-gold"></div>
</div>
<h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-brand-900 tracking-tight font-light">
                Les <span className="italic">Indices</span> du Chef
            </h2>
<p className="text-brand-400 font-light mt-4">Cuisine faite maison par Djibi Sow &amp; son équipe</p>
</div>

<div className="reveal mb-20">
<div className="bg-white rounded-2xl p-10 border border-brand-150 text-center shadow-sm">
<span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-gold-dark bg-brand-100 px-4 py-2 rounded-full mb-6">Arrivage Frais</span>
<h3 className="font-serif text-3xl text-brand-900 mb-2 font-light tracking-tight">Huîtres Fines de Claire n°3</h3>
<div className="w-10 h-[1px] bg-gold mx-auto my-5"></div>
<p className="font-serif text-xl text-brand-600 font-light italic">
                    Les 6 : <span className="text-wine not-italic font-medium">13€</span>  ·  Les 12 : <span className="text-wine not-italic font-medium">24€</span>
</p>
</div>
</div>

<div className="reveal mb-24">
<div className="flex items-center gap-6 mb-12">
<h3 className="font-serif text-3xl text-brand-900 tracking-tight font-light whitespace-nowrap">Entrées</h3>
<div className="flex-1 h-[1px] bg-brand-150"></div>
</div>
<div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
<div className="menu-item group">
<div className="flex justify-between items-baseline pb-2 border-b border-brand-100 border-dashed">
<h4 className="font-medium text-sm text-brand-800 transition-colors">Carpaccio de Betterave</h4>
<span className="font-serif italic text-lg text-brand-600 ml-4">7.5€</span>
</div>
<p className="text-xs text-brand-400 font-light mt-2 leading-relaxed">Ricotta aux épices et herbes fraîches.</p>
</div>
<div className="menu-item group">
<div className="flex justify-between items-baseline pb-2 border-b border-brand-100 border-dashed">
<h4 className="font-medium text-sm text-brand-800 transition-colors">Soupe de Courge</h4>
<span className="font-serif italic text-lg text-brand-600 ml-4">8.5€</span>
</div>
<p className="text-xs text-brand-400 font-light mt-2 leading-relaxed">Crème coco, graines grillées aux épices, croûtons.</p>
</div>
<div className="menu-item group">
<div className="flex justify-between items-baseline pb-2 border-b border-brand-100 border-dashed">
<h4 className="font-medium text-sm text-brand-800 transition-colors">Pain Cristal</h4>
<span className="font-serif italic text-lg text-brand-600 ml-4">6.5€</span>
</div>
<p className="text-xs text-brand-400 font-light mt-2 leading-relaxed">Grillé à l'ail, tartare de tomate &amp; herbes. <span className="text-brand-300 italic">(Jambon Serrano +2,5€)</span></p>
</div>
<div className="menu-item group">
<div className="flex justify-between items-baseline pb-2 border-b border-brand-100 border-dashed">
<h4 className="font-medium text-sm text-brand-800 transition-colors">Œuf Mimosa</h4>
<span className="font-serif italic text-lg text-brand-600 ml-4">8.5€</span>
</div>
<p className="text-xs text-brand-400 font-light mt-2 leading-relaxed">Oignons grillés et herbes fraîches.</p>
</div>
<div className="menu-item group">
<div className="flex justify-between items-baseline pb-2 border-b border-brand-100 border-dashed">
<h4 className="font-medium text-sm text-brand-800 transition-colors">Salade de Chèvre Chaud</h4>
<span className="font-serif italic text-lg text-brand-600 ml-4">10€</span>
</div>
<p className="text-xs text-brand-400 font-light mt-2 leading-relaxed">Miel sur tartine, salade, noix.</p>
</div>
<div className="menu-item group">
<div className="flex justify-between items-baseline pb-2 border-b border-brand-100 border-dashed">
<h4 className="font-medium text-sm text-brand-800 transition-colors">Mille-Feuille Vegan</h4>
<span className="font-serif italic text-lg text-brand-600 ml-4">12€</span>
</div>
<p className="text-xs text-brand-400 font-light mt-2 leading-relaxed">Betterave, poivrons marinés, lait soja. <span className="text-xs font-medium text-emerald-700/70 bg-emerald-50 px-2 py-0.5 rounded-full ml-1">V</span></p>
</div>
<div className="menu-item group">
<div className="flex justify-between items-baseline pb-2 border-b border-brand-100 border-dashed">
<h4 className="font-medium text-sm text-brand-800 transition-colors">Quesadillas</h4>
<span className="font-serif italic text-lg text-brand-600 ml-4">9€</span>
</div>
<p className="text-xs text-brand-400 font-light mt-2 leading-relaxed">Mozzarella, cheddar, roquette, oignons confits.</p>
</div>
<div className="menu-item group">
<div className="flex justify-between items-baseline pb-2 border-b border-brand-100 border-dashed">
<h4 className="font-medium text-sm text-brand-800 transition-colors">Petit Poulpe Plancha</h4>
<span className="font-serif italic text-lg text-brand-600 ml-4">14.5€</span>
</div>
<p className="text-xs text-brand-400 font-light mt-2 leading-relaxed">Écrasé de PDT au confit d'ail, poivrons, paprika fumé.</p>
</div>
<div className="menu-item group">
<div className="flex justify-between items-baseline pb-2 border-b border-brand-100 border-dashed">
<h4 className="font-medium text-sm text-brand-800 transition-colors">Burrata des Pouilles</h4>
<span className="font-serif italic text-lg text-brand-600 ml-4">18€</span>
</div>
<p className="text-xs text-brand-400 font-light mt-2 leading-relaxed">Duo tomate cerise, herbes fraîches et pesto.</p>
</div>
<div className="menu-item group">
<div className="flex justify-between items-baseline pb-2 border-b border-brand-100 border-dashed">
<h4 className="font-medium text-sm text-brand-800 transition-colors">Mini Tartare de Saumon</h4>
<span className="font-serif italic text-lg text-brand-600 ml-4">13.5€</span>
</div>
<p className="text-xs text-brand-400 font-light mt-2 leading-relaxed">Aneth, cébette, concombre et chips de légumes.</p>
</div>
<div className="menu-item group">
<div className="flex justify-between items-baseline pb-2 border-b border-brand-100 border-dashed">
<h4 className="font-medium text-sm text-brand-800 transition-colors">Cecina de Leon</h4>
<span className="font-serif italic text-lg text-brand-600 ml-4">12€</span>
</div>
<p className="text-xs text-brand-400 font-light mt-2 leading-relaxed">Bœuf persillé sur planche, cornichon aigre-doux.</p>
</div>
</div>
</div>

<div className="reveal mb-24">
<div className="flex items-center gap-6 mb-12">
<h3 className="font-serif text-3xl text-brand-900 tracking-tight font-light whitespace-nowrap">Plats</h3>
<div className="flex-1 h-[1px] bg-brand-150"></div>
</div>

<div className="bg-white p-8 lg:p-10 rounded-2xl border border-gold/15 mb-14 text-center relative overflow-hidden shadow-sm">
<div className="absolute top-0 right-0 bg-wine text-white/90 text-xs font-medium px-5 py-2 rounded-bl-2xl tracking-[0.1em] uppercase" style={{fontSize: '10px'}}>Plat du Moment</div>
<h4 className="font-serif text-2xl text-brand-900 font-light tracking-tight mt-2 mb-2">Hachis Parmentier de Confit de Canard</h4>
<p className="text-brand-400 text-sm font-light mb-6">Servi avec sa salade fraîche</p>
<div className="inline-flex items-center gap-6 font-serif italic text-lg text-wine border border-wine/10 px-6 py-3 rounded-full bg-wine/[0.02]">
<span>Midi</span>
<span className="w-px h-5 bg-wine/15"></span>
<span>Soir</span>
</div>
</div>
<div className="grid md:grid-cols-2 gap-x-16 gap-y-6 mb-16">
<div className="menu-item group">
<div className="flex justify-between items-baseline pb-2 border-b border-brand-100 border-dashed">
<h4 className="font-medium text-sm text-brand-800 transition-colors">Filet de Truite (FR)</h4>
<span className="font-serif italic text-lg text-brand-600 ml-4">23€</span>
</div>
<p className="text-xs text-brand-400 font-light mt-2">Sauce blanche, purée patate douce, jeunes pousses.</p>
</div>
<div className="menu-item group">
<div className="flex justify-between items-baseline pb-2 border-b border-brand-100 border-dashed">
<h4 className="font-medium text-sm text-brand-800 transition-colors">Pavé de Veau (FR)</h4>
<span className="font-serif italic text-lg text-brand-600 ml-4">23€</span>
</div>
<p className="text-xs text-brand-400 font-light mt-2">Frites, Salade, Sauce Béarnaise.</p>
</div>
<div className="menu-item group">
<div className="flex justify-between items-baseline pb-2 border-b border-brand-100 border-dashed">
<h4 className="font-medium text-sm text-brand-800 transition-colors">Osso Bucco à l'Italienne</h4>
<span className="font-serif italic text-lg text-brand-600 ml-4">24€</span>
</div>
<p className="text-xs text-brand-400 font-light mt-2">Accompagné de ses tagliatelles fraîches.</p>
</div>
<div className="menu-item group">
<div className="flex justify-between items-baseline pb-2 border-b border-brand-100 border-dashed">
<h4 className="font-medium text-sm text-brand-800 transition-colors">Poulpe Plancha</h4>
<span className="font-serif italic text-lg text-brand-600 ml-4">27€</span>
</div>
<p className="text-xs text-brand-400 font-light mt-2">Écrasé de PDT, confit d'ail, poivrons, paprika fumé.</p>
</div>
<div className="menu-item group">
<div className="flex justify-between items-baseline pb-2 border-b border-brand-100 border-dashed">
<h4 className="font-medium text-sm text-brand-800 transition-colors">Chilli Végétarien</h4>
<span className="font-serif italic text-lg text-brand-600 ml-4">16.5€</span>
</div>
<p className="text-xs text-brand-400 font-light mt-2">Avec son riz basmati. <span className="text-xs font-medium text-emerald-700/70 bg-emerald-50 px-2 py-0.5 rounded-full ml-1">V</span></p>
</div>
<div className="menu-item group">
<div className="flex justify-between items-baseline pb-2 border-b border-brand-100 border-dashed">
<h4 className="font-medium text-sm text-brand-800 transition-colors">Linguine Carbonara Végé</h4>
<span className="font-serif italic text-lg text-brand-600 ml-4">16.5€</span>
</div>
<p className="text-xs text-brand-400 font-light mt-2">Butternut, patate douce, courgette, aubergine. <span className="text-xs font-medium text-emerald-700/70 bg-emerald-50 px-2 py-0.5 rounded-full ml-1">V</span></p>
</div>
<div className="menu-item group md:col-span-2">
<div className="flex justify-between items-baseline pb-2 border-b border-brand-100 border-dashed">
<h4 className="font-medium text-sm text-brand-800 transition-colors">Entrecôte Holstein Maturée (260g)</h4>
<span className="font-serif italic text-lg text-brand-600 ml-4">27€</span>
</div>
<p className="text-xs text-brand-400 font-light mt-2">Frites et Salade ou Wok de Légumes, Sauce au Bleu.</p>
</div>
</div>

<div className="mb-16">
<div className="flex items-center gap-4 mb-8">
<div className="w-1 h-5 bg-gold rounded-full"></div>
<h4 className="font-serif text-xl text-brand-900 font-light tracking-tight">Nos Burgers Maison</h4>
<span className="text-xs text-brand-300 font-light">(Frites maison &amp; salade)</span>
</div>
<div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
<div className="menu-item flex justify-between items-center py-2">
<span className="text-sm text-brand-700 font-medium">Cheeseburger Bœuf Angus</span>
<span className="font-serif italic text-brand-600">17.5€</span>
</div>
<div className="menu-item flex justify-between items-center py-2">
<span className="text-sm text-brand-700 font-medium">Végé/Vegan Steak Maison</span>
<span className="font-serif italic text-brand-600">16.5€</span>
</div>
<div className="menu-item flex justify-between items-center py-2">
<span className="text-sm text-brand-700 font-medium">Steak de Poulet Crispy</span>
<span className="font-serif italic text-brand-600">17€</span>
</div>
<div className="menu-item flex justify-between items-center py-2">
<span className="text-sm text-brand-700 font-medium">Steak Cabillaud Maison</span>
<span className="font-serif italic text-brand-600">17€</span>
</div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden" style={{background: 'linear-gradient(135deg, #1a1611 0%, #2d0a15 100%)'}}>
<div className="absolute inset-0 grain"></div>
<div className="relative z-10 p-8 lg:p-10 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-6">
<div className="w-14 h-14 rounded-xl border border-gold/20 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-gold" icon="solar:chef-hat-linear" style={{strokeWidth: '1.5'}} width="26"></iconify-icon>
</div>
<div>
<h4 className="font-serif text-xl text-white font-light tracking-tight">Côte de Bœuf Holstein <span className="text-white/40">(1-1.2kg)</span></h4>
<p className="text-white/30 text-sm mt-1 font-light">Maturée 3-4 semaines · Pour 2 personnes · Frites &amp; salade</p>
</div>
</div>
<div className="font-serif text-4xl italic text-gold tracking-tight font-light">72€</div>
</div>
</div>
</div>

<div className="reveal">
<div className="flex items-center gap-6 mb-12">
<h3 className="font-serif text-3xl text-brand-900 tracking-tight font-light whitespace-nowrap">Desserts</h3>
<div className="flex-1 h-[1px] bg-brand-150"></div>
</div>
<div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
<div className="menu-item group">
<div className="flex justify-between items-baseline pb-2 border-b border-brand-100 border-dashed">
<h4 className="font-medium text-sm text-brand-800 transition-colors">Tiramisu Café Amaretto</h4>
<span className="font-serif italic text-lg text-brand-600 ml-4">8.5€</span>
</div>
<p className="text-xs text-brand-400 font-light mt-2">Le classique revisité.</p>
</div>
<div className="menu-item group">
<div className="flex justify-between items-baseline pb-2 border-b border-brand-100 border-dashed">
<h4 className="font-medium text-sm text-brand-800 transition-colors">Mi-Cuit Chocolat Noir</h4>
<span className="font-serif italic text-lg text-brand-600 ml-4">12€</span>
</div>
<p className="text-xs text-brand-400 font-light mt-2">Avec sa glace vanille.</p>
</div>
<div className="menu-item group">
<div className="flex justify-between items-baseline pb-2 border-b border-brand-100 border-dashed">
<h4 className="font-medium text-sm text-brand-800 transition-colors">Café Gourmand</h4>
<span className="font-serif italic text-lg text-brand-600 ml-4">12€</span>
</div>
<p className="text-xs text-brand-400 font-light mt-2">Avec 3 douceurs. <span className="text-brand-300 italic">(Thé +1,50€)</span></p>
</div>
<div className="menu-item group">
<div className="flex justify-between items-baseline pb-2 border-b border-brand-100 border-dashed">
<h4 className="font-medium text-sm text-brand-800 transition-colors">Dessert Vegan Exotique</h4>
<span className="font-serif italic text-lg text-brand-600 ml-4">11€</span>
</div>
<p className="text-xs text-brand-400 font-light mt-2">Tapioca, lait coco, mangue, passion. <span className="text-xs font-medium text-emerald-700/70 bg-emerald-50 px-2 py-0.5 rounded-full ml-1">V</span></p>
</div>
<div className="menu-item group">
<div className="flex justify-between items-baseline pb-2 border-b border-brand-100 border-dashed">
<h4 className="font-medium text-sm text-brand-800 transition-colors">Mousse au Chocolat Noir</h4>
<span className="font-serif italic text-lg text-brand-600 ml-4">7.5€</span>
</div>
<p className="text-xs text-brand-400 font-light mt-2">Aux zestes d'orange.</p>
</div>
<div className="menu-item group">
<div className="flex justify-between items-baseline pb-2 border-b border-brand-100 border-dashed">
<h4 className="font-medium text-sm text-brand-800 transition-colors">Panna Cotta</h4>
<span className="font-serif italic text-lg text-brand-600 ml-4">8€</span>
</div>
<p className="text-xs text-brand-400 font-light mt-2">Cardamome et coulis de fruits rouges.</p>
</div>
<div className="menu-item group">
<div className="flex justify-between items-baseline pb-2 border-b border-brand-100 border-dashed">
<h4 className="font-medium text-sm text-brand-800 transition-colors">Tarte Citron Meringuée</h4>
<span className="font-serif italic text-lg text-brand-600 ml-4">8.5€</span>
</div>
<p className="text-xs text-brand-400 font-light mt-2">Fraîcheur acidulée.</p>
</div>
<div className="menu-item group">
<div className="flex justify-between items-baseline pb-2 border-b border-brand-100 border-dashed">
<h4 className="font-medium text-sm text-brand-800 transition-colors">Cheesecake Pistache</h4>
<span className="font-serif italic text-lg text-brand-600 ml-4">9€</span>
</div>
<p className="text-xs text-brand-400 font-light mt-2">Pistache Framboise.</p>
</div>
<div className="menu-item group">
<div className="flex justify-between items-baseline pb-2 border-b border-brand-100 border-dashed">
<h4 className="font-medium text-sm text-brand-800 transition-colors">Glace du Moment</h4>
<span className="font-serif italic text-lg text-brand-600 ml-4">8.5€</span>
</div>
<p className="text-xs text-brand-400 font-light mt-2">3 parfums au choix.</p>
</div>
<div className="menu-item group">
<div className="flex justify-between items-baseline pb-2 border-b border-brand-100 border-dashed">
<h4 className="font-medium text-sm text-brand-800 transition-colors">Crème de Crème</h4>
<span className="font-serif italic text-lg text-brand-600 ml-4">9€</span>
</div>
<p className="text-xs text-brand-400 font-light mt-2">Crème au miel, pistache et noix.</p>
</div>
</div>
</div>
<div className="mt-20 text-center">
<p className="text-xs text-brand-300 tracking-[0.15em] uppercase font-light">Eau minérale Mondariz · Allergènes disponibles sur demande</p>
</div>
</div>
</section>

<section className="relative py-32 lg:py-40 px-6 overflow-hidden grain">
<div className="absolute inset-0">
<img alt="Ambiance" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b3873ec-8126-481e-a0e6-2a4cb22dd234_3840w.jpg" style={{filter: 'brightness(0.3) saturate(1.2) contrast(1.05)'}}/>
<div className="absolute top-0 right-0 bottom-0 left-0" style={{background: 'linear-gradient(180deg, rgba(26,22,17,0.5) %, rgba(45,10,21,0.4) 100%)'}}></div>
</div>
<div className="relative z-10 max-w-3xl mx-auto text-center space-y-10 reveal">
<h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white tracking-tight font-light leading-[1.05]">
            Votre table<br/><span className="italic text-gold-light">vous attend</span>
</h2>
<p className="text-white/40 text-lg font-light max-w-lg mx-auto leading-relaxed">
            Réservez en direct et bénéficiez d'un café offert. Confirmation instantanée.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="group w-full sm:w-auto px-10 py-4 bg-white text-brand-900 rounded-full font-serif italic text-xl tracking-tight hover:bg-gold-light transition-all duration-500 shadow-2xl flex items-center justify-center gap-4" onclick="toggleModal('reservation-modal')">
                Réserver maintenant
                <iconify-icon className="group-hover:translate-x-1 transition-transform duration-300" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<a className="w-full sm:w-auto px-8 py-4 border border-white/15 text-white/70 rounded-full text-sm font-light tracking-wider hover:bg-white/8 hover:border-white/25 transition-all duration-500 backdrop-blur-sm text-center flex items-center justify-center gap-3" href="tel:+33148067697">
<iconify-icon className="text-gold/60" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="17"></iconify-icon>
                01 48 06 76 97
            </a>
</div>
</div>
</section>

<section className="pt-28 lg:pt-36 pb-12 px-6 relative" id="infos" style={{background: 'linear-gradient(180deg, #0f0d0a 0%, #141210 100%)'}}>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 mb-24">

<div className="h-80 lg:h-full w-full rounded-2xl overflow-hidden border border-white/5 map-filter relative min-h-[360px] reveal">
<iframe allowfullscreen="" className="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937615!2d2.3698887768547225!3d48.85406597133036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e672005934529d%3A0x7e8c07e26b4859a1!2s23%20Rue%20Sedaine%2C%2075011%20Paris!5e0!3m2!1sen!2sfr!4v1709220000000!5m2!1sen!2sfr" style={{border: '0'}} width="100%"></iframe>
<div className="absolute bottom-5 left-5">
<a className="bg-white text-brand-900 px-5 py-2.5 rounded-full text-xs font-medium tracking-wider shadow-xl hover:bg-brand-100 transition-colors flex items-center gap-2" href="https://maps.google.com/?q=23+Rue+Sedaine+75011+Paris" target="_blank">
<iconify-icon icon="solar:map-arrow-up-bold" width="14"></iconify-icon>
                    Itinéraire
                </a>
</div>
</div>

<div className="space-y-12 reveal">
<div>
<div className="flex items-center gap-4 mb-8">
<div className="w-8 h-[1px] bg-gold/40"></div>
<span className="text-xs font-medium uppercase tracking-[0.25em] text-gold/60">Informations</span>
</div>
<h3 className="font-serif text-4xl text-white tracking-tight font-light mb-10">Nous <span className="italic">trouver</span></h3>
<div className="grid sm:grid-cols-2 gap-10">
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl border border-white/8 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon className="text-gold/60" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<h4 className="text-white/90 font-medium text-sm mb-1.5">Adresse</h4>
<p className="text-sm text-white/30 leading-relaxed font-light">23 Rue Sedaine<br/>75011 Paris</p>
<p className="text-xs text-white/15 mt-2 font-light">M° Bastille · Bréguet-Sabin</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl border border-white/8 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon className="text-gold/60" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<h4 className="text-white/90 font-medium text-sm mb-1.5">Téléphone</h4>
<a className="text-sm text-white/30 hover:text-gold transition-colors font-light" href="tel:+33148067697">+33 1 48 06 76 97</a>
</div>
</div>
</div>
<div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl border border-white/8 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon className="text-gold/60" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<h4 className="text-white/90 font-medium text-sm mb-3">Horaires</h4>
<ul className="text-sm text-white/30 space-y-2.5 font-light">
<li className="flex justify-between gap-4">
<span>Lun – Sam</span>
<span className="text-white/20">12h–14h30 · 19h–23h30</span>
</li>
<li className="flex justify-between gap-4">
<span className="text-white/60">Dimanche</span>
<span className="text-gold/70 font-serif italic">Brunch</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
<div className="p-7 rounded-2xl border border-white/5 bg-white/[0.02]">
<p className="font-serif italic text-white/20 text-lg leading-relaxed mb-6">"Kind regards from Monsieur Poirot.<br/>We look forward to welcoming you."</p>
<div className="flex gap-3">
<a className="w-9 h-9 rounded-full border border-white/8 flex items-center justify-center text-white/20 hover:text-gold hover:border-gold/30 transition-all duration-300" href="#">
<iconify-icon icon="brandico:facebook-rect" width="14"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-full border border-white/8 flex items-center justify-center text-white/20 hover:text-gold hover:border-gold/30 transition-all duration-300" href="#">
<iconify-icon icon="brandico:instagram-filled" width="14"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-full border border-white/8 flex items-center justify-center text-white/20 hover:text-gold hover:border-gold/30 transition-all duration-300" href="#">
<iconify-icon icon="simple-icons:tripadvisor" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-0 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/15 gap-4 font-light">
<div className="flex items-center gap-3">
<div className="w-6 h-6 border border-white/10 rounded-full flex items-center justify-center">
<span className="font-display italic text-xs text-white/25">P</span>
</div>
<p>© 2024 Monsieur Poirot Paris</p>
</div>
<div className="flex gap-8">
<a className="hover:text-white/30 transition-colors" href="#">Mentions Légales</a>
<a className="hover:text-white/30 transition-colors" href="#">Confidentialité</a>
</div>
</div>
</section>

<div className="fixed inset-0 bg-brand-900/80 backdrop-blur-md z-[60] hidden" id="reservation-modal-backdrop" onclick="toggleModal('reservation-modal')"></div>
<div className="fixed inset-0 z-[70] flex items-center justify-center p-4 hidden pointer-events-none" id="reservation-modal">
<div className="bg-brand-25 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden pointer-events-auto modal-enter flex flex-col max-h-[90vh]">

<div className="relative overflow-hidden p-8 pb-7" style={{background: 'linear-gradient(135deg, #1a1611 0%, #2d0a15 100%)'}}>
<div className="absolute inset-0 grain" style={{opacity: '0.5'}}></div>
<div className="relative z-10 flex justify-between items-start">
<div>
<h3 className="font-serif text-2xl text-white font-light tracking-tight">Réserver une table</h3>
<p className="text-white/25 text-xs mt-2 font-light tracking-wider">Confirmation instantanée par email</p>
</div>
<button className="text-white/25 hover:text-white transition-colors" onclick="toggleModal('reservation-modal')">
<iconify-icon icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
</div>
</div>
<div className="p-8 overflow-y-auto">
<form className="space-y-6" onsubmit="event.preventDefault(); alert('Merci ! Votre demande a été envoyée à Monsieur Poirot.'); toggleModal('reservation-modal');">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs font-medium uppercase text-brand-400 tracking-[0.15em]">Date</label>
<input className="w-full bg-brand-100 border border-brand-150 rounded-xl px-4 py-3 text-sm text-brand-800 focus:outline-none focus:ring-2 focus:ring-wine/20 focus:border-wine/40 transition-all" required="" type="date"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium uppercase text-brand-400 tracking-[0.15em]">Heure</label>
<select className="w-full bg-brand-100 border border-brand-150 rounded-xl px-4 py-3 text-sm text-brand-800 focus:outline-none focus:ring-2 focus:ring-wine/20 focus:border-wine/40 transition-all appearance-none" style={{backgroundImage: 'url(\'data:image/svg+xml', charset=UTF-8,%3Csvg xmlns=%22http: '//www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23a8977d%22 strokeWidth=%222%22%3E%3Cpath d=%22M6 9l6 6 6-6%22/%3E%3C/svg%3E\')', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px'}}>
<option>12:00</option>
<option>12:30</option>
<option>13:00</option>
<option>13:30</option>
<option disabled="">───</option>
<option>19:00</option>
<option>19:30</option>
<option selected="">20:00</option>
<option>20:30</option>
<option>21:00</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium uppercase text-brand-400 tracking-[0.15em]">Couverts</label>
<div className="flex gap-2">
<label className="flex-1 cursor-pointer">
<input checked="" className="peer sr-only" name="guests" type="radio" value="2"/>
<div className="text-center py-3 border border-brand-150 rounded-xl text-sm font-medium text-brand-500 peer-checked:bg-brand-900 peer-checked:text-brand-100 peer-checked:border-brand-900 transition-all duration-300 hover:bg-brand-100">2</div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="guests" type="radio" value="3"/>
<div className="text-center py-3 border border-brand-150 rounded-xl text-sm font-medium text-brand-500 peer-checked:bg-brand-900 peer-checked:text-brand-100 peer-checked:border-brand-900 transition-all duration-300 hover:bg-brand-100">3</div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="guests" type="radio" value="4"/>
<div className="text-center py-3 border border-brand-150 rounded-xl text-sm font-medium text-brand-500 peer-checked:bg-brand-900 peer-checked:text-brand-100 peer-checked:border-brand-900 transition-all duration-300 hover:bg-brand-100">4</div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="guests" type="radio" value="5+"/>
<div className="text-center py-3 border border-brand-150 rounded-xl text-sm font-medium text-brand-500 peer-checked:bg-brand-900 peer-checked:text-brand-100 peer-checked:border-brand-900 transition-all duration-300 hover:bg-brand-100">5+</div>
</label>
</div>
</div>
<div className="space-y-3">
<label className="text-xs font-medium uppercase text-brand-400 tracking-[0.15em]">Coordonnées</label>
<input className="w-full bg-brand-100 border border-brand-150 rounded-xl px-4 py-3 text-sm text-brand-800 placeholder:text-brand-300 focus:outline-none focus:ring-2 focus:ring-wine/20 focus:border-wine/40 transition-all tdfocus-1770414284220" placeholder="Nom complet" required="" type="text"/>
<input className="w-full bg-brand-100 border border-brand-150 rounded-xl px-4 py-3 text-sm text-brand-800 placeholder:text-brand-300 focus:outline-none focus:ring-2 focus:ring-wine/20 focus:border-wine/40 transition-all" placeholder="Téléphone mobile" required="" type="tel"/>
</div>
<div className="p-4 rounded-xl border border-gold/10 bg-gold/[0.03] flex items-start gap-3">
<iconify-icon className="text-gold mt-0.5 flex-shrink-0" icon="solar:cup-hot-linear" style={{strokeWidth: '1.5'}} width="17"></iconify-icon>
<div className="text-xs text-brand-500 leading-relaxed font-light">
                        Café <span className="font-medium text-gold-dark">offert</span> pour toute réservation via ce formulaire.
                    </div>
</div>
<button className="w-full bg-brand-900 hover:bg-wine text-brand-100 font-medium py-3.5 rounded-xl transition-all duration-500 shadow-lg hover:shadow-xl text-sm tracking-wider uppercase flex items-center justify-center gap-2.5" style={{letterSpacing: '0.1em'}} type="submit">
                    Confirmer
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</form>
</div>
</div>
</div>

<button className="lg:hidden fixed bottom-6 right-6 z-50 w-12 h-12 bg-brand-900 rounded-full shadow-xl shadow-brand-900/20 flex items-center justify-center text-gold/70" id="mobile-menu-btn" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<div className="hidden fixed inset-0 z-[55] bg-brand-900/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 lg:hidden" id="mobile-menu">
<button className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
<iconify-icon icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</button>
<a className="font-serif text-3xl text-white/70 hover:text-gold transition-colors italic" href="#concept" onclick="document.getElementById('mobile-menu').classList.add('hidden')">L'Histoire</a>
<a className="font-serif text-3xl text-white/70 hover:text-gold transition-colors italic" href="#cave" onclick="document.getElementById('mobile-menu').classList.add('hidden')">La Cave</a>
<a className="font-serif text-3xl text-white/70 hover:text-gold transition-colors italic" href="#gallery" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Galerie</a>
<a className="font-serif text-3xl text-white/70 hover:text-gold transition-colors italic" href="#menu" onclick="document.getElementById('mobile-menu').classList.add('hidden')">La Carte</a>
<a className="font-serif text-3xl text-white/70 hover:text-gold transition-colors italic" href="#infos" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Contact</a>
<div className="mt-4">
<button className="px-8 py-3 bg-white text-brand-900 rounded-full font-serif italic text-lg" onclick="document.getElementById('mobile-menu').classList.add('hidden'); toggleModal('reservation-modal')">Réserver</button>
</div>
</div>


    </>
  );
}
