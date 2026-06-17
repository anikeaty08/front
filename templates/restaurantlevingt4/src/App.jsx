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



        // --- Cookie Logic ---
        function closeCookies() {
            const modal = document.getElementById('cookie-consent');
            modal.style.opacity = '0';
            modal.style.transform = 'translateY(20px)';
            setTimeout(() => {
                modal.style.display = 'none';
            }, 500);
        }

        // --- Reservation Modal Logic ---
        function toggleReservation() {
            const modal = document.getElementById('reservation-modal');
            const panel = document.getElementById('reservation-panel');
            const body = document.body;
            
            if (modal.classList.contains('hidden')) {
                // Open
                modal.classList.remove('hidden');
                // Trigger reflow
                void modal.offsetWidth;
                modal.classList.remove('opacity-0');
                panel.classList.remove('translate-x-full');
                body.style.overflow = 'hidden';
            } else {
                // Close
                modal.classList.add('opacity-0');
                panel.classList.add('translate-x-full');
                setTimeout(() => {
                    modal.classList.add('hidden');
                    body.style.overflow = '';
                }, 300);
            }
        }

        // --- Scroll Animation Reveal ---
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            var windowHeight = window.innerHeight;
            var elementVisible = 100;

            for (var i = 0; i < reveals.length; i++) {
                var elementTop = reveals[i].getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }

        window.addEventListener("scroll", reveal);
        // Trigger once on load
        reveal();

        // --- Parallax Effect on Hero & Images ---
        window.addEventListener("scroll", function() {
            const scrollPosition = window.pageYOffset;
            const heroImage = document.getElementById('hero-image');
            if(heroImage) {
                heroImage.style.transform = "translateY(" + (scrollPosition * 0.4) + "px) scale(1.05)";
            }
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
      

<div className="fixed bottom-6 left-6 z-50 max-w-sm w-full bg-white/90 backdrop-blur-md border border-neutral-200 shadow-xl rounded-lg p-6 transform transition-all duration-500 translate-y-0 opacity-100" id="cookie-consent">
<div className="flex flex-col space-y-3">
<div className="flex items-start justify-between">
<span className="iconify text-[#2C3037]" data-icon="lucide:cookie" data-strokeWidth="1.5" data-width="24"></span>
<button className="text-neutral-400 hover:text-[#2C3037] transition-colors" onclick="closeCookies()">
<span className="iconify" data-icon="lucide:x" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
<p className="text-sm text-neutral-600 leading-relaxed">
                Nous utilisons des cookies pour améliorer votre expérience au <strong>Vingt4</strong>. En continuant, vous acceptez notre politique de confidentialité.
                <br/><span className="text-xs text-neutral-400 mt-1 block italic">We use cookies to enhance your experience.</span>
</p>
<div className="flex space-x-3 pt-2">
<button className="flex-1 bg-[#2C3037] text-white text-xs font-medium py-2 rounded-md hover:bg-neutral-800 transition-colors tracking-wide" onclick="closeCookies()">
                    ACCEPTER / ACCEPT
                </button>
<button className="flex-1 bg-transparent border border-neutral-200 text-neutral-600 text-xs font-medium py-2 rounded-md hover:bg-neutral-50 transition-colors" onclick="closeCookies()">
                    REFUSER
                </button>
</div>
</div>
</div>

<nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-neutral-100 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-2xl font-serif text-[#2C3037] tracking-tighter hover:opacity-80 transition-opacity" href="#">
                Le Vingt4
            </a>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm text-neutral-600 hover:text-[#A97959] transition-colors" href="#about">L'Histoire</a>
<a className="text-sm text-neutral-600 hover:text-[#A97959] transition-colors" href="#menu">La Carte</a>
<a className="text-sm text-neutral-600 hover:text-[#A97959] transition-colors" href="#gallery">Galerie</a>
</div>

<div className="flex items-center space-x-4">
<button className="text-xs font-medium text-neutral-500 hover:text-[#2C3037]">FR</button>
<span className="text-neutral-300">|</span>
<button className="text-xs font-medium text-neutral-400 hover:text-[#2C3037]">EN</button>
<button className="hidden md:flex items-center space-x-2 bg-[#A97959] text-white px-5 py-2.5 rounded-full hover:bg-[#8e654a] transition-all transform hover:scale-[1.02] shadow-sm" onclick="toggleReservation()">
<span className="text-xs font-medium tracking-wide">RÉSERVER / BOOK</span>
<span className="iconify" data-icon="lucide:calendar-clock" data-strokeWidth="1.5" data-width="14"></span>
</button>

<button className="md:hidden text-[#2C3037]">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24"></span>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-[60] hidden opacity-0 transition-opacity duration-300" id="reservation-modal">
<div className="absolute inset-0 bg-[#2C3037]/60 backdrop-blur-sm" onclick="toggleReservation()"></div>
<div className="absolute right-0 top-0 h-full w-full md:w-[500px] bg-white shadow-2xl transform translate-x-full transition-transform duration-300 flex flex-col" id="reservation-panel">

<div className="p-6 border-b border-neutral-100 flex justify-between items-center bg-white">
<div>
<h2 className="text-lg font-medium text-[#2C3037] tracking-tight">Réserver une table</h2>
<p className="text-xs text-neutral-400">Book a table</p>
</div>
<button className="p-2 hover:bg-neutral-100 rounded-full transition-colors" onclick="toggleReservation()">
<span className="iconify text-neutral-500" data-icon="lucide:x" data-strokeWidth="1.5" data-width="20"></span>
</button>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-8 bg-[#FAFAFA]">

<div className="space-y-3">
<label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Couverts / Guests</label>
<div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
<button className="w-10 h-10 rounded-full border border-neutral-200 bg-white text-sm font-medium text-neutral-600 hover:border-[#A97959] hover:text-[#A97959] focus:bg-[#A97959] focus:text-white transition-all">1</button>
<button className="w-10 h-10 rounded-full border border-neutral-200 bg-white text-sm font-medium text-neutral-600 hover:border-[#A97959] hover:text-[#A97959] focus:bg-[#A97959] focus:text-white transition-all bg-[#A97959] text-white">2</button>
<button className="w-10 h-10 rounded-full border border-neutral-200 bg-white text-sm font-medium text-neutral-600 hover:border-[#A97959] hover:text-[#A97959] focus:bg-[#A97959] focus:text-white transition-all">3</button>
<button className="w-10 h-10 rounded-full border border-neutral-200 bg-white text-sm font-medium text-neutral-600 hover:border-[#A97959] hover:text-[#A97959] focus:bg-[#A97959] focus:text-white transition-all">4</button>
<button className="w-10 h-10 rounded-full border border-neutral-200 bg-white text-sm font-medium text-neutral-600 hover:border-[#A97959] hover:text-[#A97959] focus:bg-[#A97959] focus:text-white transition-all">5+</button>
</div>
</div>

<div className="space-y-3">
<label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Date</label>
<div className="grid grid-cols-4 gap-2">

<div className="border border-[#A97959] bg-white rounded-lg p-3 text-center cursor-pointer shadow-sm ring-1 ring-[#A97959]">
<div className="text-[10px] text-[#A97959] uppercase font-bold">Auj</div>
<div className="text-lg font-medium text-[#2C3037]">24</div>
</div>

<div className="border border-neutral-200 bg-white rounded-lg p-3 text-center cursor-pointer hover:border-[#A97959] transition-colors">
<div className="text-[10px] text-neutral-400 uppercase font-bold">Dem</div>
<div className="text-lg font-medium text-neutral-600">25</div>
</div>

<div className="border border-neutral-200 bg-white rounded-lg p-3 text-center cursor-pointer hover:border-[#A97959] transition-colors">
<div className="text-[10px] text-neutral-400 uppercase font-bold">Sam</div>
<div className="text-lg font-medium text-neutral-600">26</div>
</div>

<div className="border border-neutral-200 bg-white rounded-lg p-3 text-center cursor-pointer hover:border-[#A97959] transition-colors">
<div className="text-[10px] text-neutral-400 uppercase font-bold">Dim</div>
<div className="text-lg font-medium text-neutral-600">27</div>
</div>
</div>
</div>

<div className="space-y-3">
<label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Service - Dîner</label>
<div className="grid grid-cols-3 gap-3">
<button className="py-2 px-3 rounded-md border border-neutral-200 text-sm text-neutral-400 bg-neutral-50 cursor-not-allowed line-through">19:00</button>
<button className="py-2 px-3 rounded-md border border-neutral-200 text-sm text-neutral-400 bg-neutral-50 cursor-not-allowed line-through">19:30</button>
<button className="py-2 px-3 rounded-md border border-[#A97959] bg-[#A97959]/10 text-sm font-medium text-[#A97959] hover:bg-[#A97959] hover:text-white transition-all">20:00</button>
<button className="py-2 px-3 rounded-md border border-neutral-200 bg-white text-sm text-neutral-600 hover:border-[#A97959] hover:text-[#A97959] transition-all">20:30</button>
<button className="py-2 px-3 rounded-md border border-neutral-200 bg-white text-sm text-neutral-600 hover:border-[#A97959] hover:text-[#A97959] transition-all">21:00</button>
<button className="py-2 px-3 rounded-md border border-neutral-200 bg-white text-sm text-neutral-600 hover:border-[#A97959] hover:text-[#A97959] transition-all">21:30</button>
</div>
<p className="text-[10px] text-neutral-400 flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-neutral-300"></span> Complet
                        <span className="w-2 h-2 rounded-full bg-[#A97959] ml-2"></span> Disponible
                    </p>
</div>

<div className="flex items-center justify-between py-2 border-t border-neutral-200 pt-4">
<span className="text-sm text-[#2C3037]">Préférence Terrasse</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-neutral-300 transition-all duration-300 ease-in-out" id="terrace-toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-neutral-300 cursor-pointer transition-colors duration-300" htmlFor="terrace-toggle"></label>
</div>
</div>
</div>

<div className="p-6 border-t border-neutral-100 bg-white">
<button className="w-full bg-[#2C3037] text-white py-4 rounded-lg font-medium tracking-wide hover:bg-neutral-800 transition-all flex justify-center items-center gap-2 group">
<span>CONFIRMER LA RÉSERVATION</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16"></span>
</button>
<p className="text-center text-[10px] text-neutral-400 mt-3">Aucun paiement requis maintenant / No payment required now</p>
</div>
</div>
</div>

<header className="relative h-screen w-full overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0">
<img alt="Le Vingt4 Ambiance" className="w-full h-full object-cover object-center opacity-90 scale-105" id="hero-image" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#2C3037]/90"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
<div className="inline-flex items-center space-x-2 border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full reveal">
<span className="w-1.5 h-1.5 bg-[#A97959] rounded-full animate-pulse"></span>
<span className="text-xs text-white/90 tracking-widest uppercase">Ouvert ce soir / Open tonight</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-none reveal" style={{transitionDelay: '100ms'}}>
                Le Vingt<span className="text-[#A97959] italic">4</span>
</h1>
<p className="text-lg md:text-xl text-neutral-200 font-light tracking-wide max-w-lg mx-auto reveal" style={{transitionDelay: '200ms'}}>
                Cuisine contemporaine, saveurs authentiques. <br/>
<span className="text-sm text-neutral-400 mt-2 block">Contemporary cuisine, authentic flavors.</span>
</p>
<div className="pt-8 reveal" style={{transitionDelay: '300ms'}}>
<button className="group bg-transparent border border-white/30 text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#2C3037] transition-all duration-300" onclick="document.getElementById('menu').scrollIntoView({behavior: 'smooth'})">
<span className="text-sm font-medium tracking-widest uppercase flex items-center gap-2">
                        Découvrir le Menu
                        <span className="iconify group-hover:translate-y-1 transition-transform" data-icon="lucide:arrow-down" data-strokeWidth="1.5" data-width="16"></span>
</span>
</button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
<span className="iconify text-white/50" data-icon="lucide:chevron-down" data-strokeWidth="1.5" data-width="24"></span>
</div>
</header>

<section className="py-24 bg-[#FAFAFA]" id="about">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-6 reveal">
<h2 className="text-3xl md:text-4xl font-serif text-[#2C3037] tracking-tight">L'Art de la Table</h2>
<div className="w-12 h-0.5 bg-[#A97959]"></div>
<p className="text-neutral-600 leading-relaxed font-light text-lg">
                    Situé au cœur de la ville, <strong>Le Vingt4</strong> propose une expérience culinaire où la tradition française rencontre la créativité moderne. Nos chefs sélectionnent les ingrédients les plus fins pour créer des plats qui éveillent les sens.
                </p>
<p className="text-neutral-500 text-sm leading-relaxed italic">
                    Located in the heart of the city, Le Vingt4 offers a culinary experience where French tradition meets modern creativity.
                </p>
<div className="pt-4 flex items-center space-x-8">
<div className="flex flex-col">
<span className="text-2xl font-serif text-[#2C3037]">4.9</span>
<span className="text-xs text-neutral-400 uppercase tracking-wide">Google Avis</span>
</div>
<div className="w-px h-10 bg-neutral-200"></div>
<div className="flex flex-col">
<span className="text-2xl font-serif text-[#2C3037]">2018</span>
<span className="text-xs text-neutral-400 uppercase tracking-wide">Établi</span>
</div>
</div>
</div>
<div className="relative reveal img-container rounded-lg overflow-hidden shadow-2xl" style={{transitionDelay: '200ms'}}>
<img alt="Chef Plating" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
</div>
</section>

<section className="py-24 bg-[#2C3037] text-white relative overflow-hidden" id="menu">

<div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
<svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal">
<span className="text-[#A97959] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Saison Hiver</span>
<h2 className="text-4xl md:text-5xl font-serif tracking-tight">La Carte</h2>
</div>

<div className="flex justify-center mb-12 space-x-8 text-sm font-medium tracking-wide reveal">
<button className="text-[#A97959] border-b-2 border-[#A97959] pb-2">Entrées</button>
<button className="text-neutral-400 hover:text-white transition-colors pb-2">Plats</button>
<button className="text-neutral-400 hover:text-white transition-colors pb-2">Desserts</button>
<button className="text-neutral-400 hover:text-white transition-colors pb-2">Vins</button>
</div>

<div className="grid gap-12">

<div className="group cursor-default reveal">
<div className="flex items-baseline justify-between mb-1">
<h3 className="text-xl font-serif group-hover:text-[#A97959] transition-colors">Velouté de Cèpes</h3>
<span className="text-lg font-light text-[#A97959]">18€</span>
</div>
<div className="flex items-center justify-between">
<p className="text-sm text-neutral-400 font-light">Huile de truffe blanche, croûtons à l'ail, crème fraîche.</p>
<div className="flex-grow mx-4 border-b border-neutral-700/50 border-dotted h-1 hidden sm:block"></div>
</div>
</div>

<div className="group cursor-default reveal" style={{transitionDelay: '100ms'}}>
<div className="flex items-baseline justify-between mb-1">
<h3 className="text-xl font-serif group-hover:text-[#A97959] transition-colors">Tartare de Bœuf</h3>
<span className="text-lg font-light text-[#A97959]">24€</span>
</div>
<div className="flex items-center justify-between">
<p className="text-sm text-neutral-400 font-light">Câpres, échalotes, jaune d'œuf confit, pommes paille.</p>
<div className="flex-grow mx-4 border-b border-neutral-700/50 border-dotted h-1 hidden sm:block"></div>
</div>
</div>

<div className="group cursor-default reveal" style={{transitionDelay: '200ms'}}>
<div className="flex items-baseline justify-between mb-1">
<h3 className="text-xl font-serif group-hover:text-[#A97959] transition-colors">Escargots de Bourgogne</h3>
<span className="text-lg font-light text-[#A97959]">22€</span>
</div>
<div className="flex items-center justify-between">
<p className="text-sm text-neutral-400 font-light">Beurre persillé, ail doux, chapelure dorée.</p>
<div className="flex-grow mx-4 border-b border-neutral-700/50 border-dotted h-1 hidden sm:block"></div>
</div>
</div>

<div className="group cursor-default reveal" style={{transitionDelay: '300ms'}}>
<div className="flex items-baseline justify-between mb-1">
<h3 className="text-xl font-serif group-hover:text-[#A97959] transition-colors">Foie Gras Maison</h3>
<span className="text-lg font-light text-[#A97959]">28€</span>
</div>
<div className="flex items-center justify-between">
<p className="text-sm text-neutral-400 font-light">Chutney de figues, brioche toastée, fleur de sel.</p>
<div className="flex-grow mx-4 border-b border-neutral-700/50 border-dotted h-1 hidden sm:block"></div>
</div>
</div>
</div>
<div className="mt-16 text-center reveal">
<button className="inline-flex items-center gap-2 text-sm text-white border border-[#A97959] px-6 py-3 hover:bg-[#A97959] transition-all duration-300" onclick="toggleReservation()">
                    RÉSERVER UNE TABLE POUR GOÛTER
                </button>
</div>
</div>
</section>

<section className="py-12 bg-white overflow-hidden" id="gallery">
<div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide snap-x">

<div className="flex-none w-80 md:w-96 h-64 relative rounded-lg overflow-hidden group snap-center reveal">
<img alt="Plat" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>

<div className="flex-none w-80 md:w-96 h-64 relative rounded-lg overflow-hidden group snap-center reveal" style={{transitionDelay: '100ms'}}>
<img alt="Plat" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>

<div className="flex-none w-80 md:w-96 h-64 relative rounded-lg overflow-hidden group snap-center reveal" style={{transitionDelay: '200ms'}}>
<img alt="Restaurant Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>

<div className="flex-none w-80 md:w-96 h-64 relative rounded-lg overflow-hidden group snap-center reveal" style={{transitionDelay: '300ms'}}>
<img alt="Cocktail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</section>

<footer className="bg-[#FAFAFA] border-t border-neutral-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<h3 className="text-2xl font-serif text-[#2C3037] mb-6">Le Vingt4</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-4">
                    Une expérience gastronomique inoubliable au cœur de Paris.
                </p>
<div className="flex space-x-4">
<a className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-[#2C3037] hover:bg-[#2C3037] hover:text-white transition-all hover:-translate-y-1" href="#">
<span className="iconify" data-icon="lucide:instagram" data-strokeWidth="1.5" data-width="18"></span>
</a>
<a className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-[#2C3037] hover:bg-[#2C3037] hover:text-white transition-all hover:-translate-y-1" href="#">
<span className="iconify" data-icon="lucide:facebook" data-strokeWidth="1.5" data-width="18"></span>
</a>
</div>
</div>
<div className="col-span-1">
<h4 className="text-sm font-semibold text-[#2C3037] uppercase tracking-wider mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li className="flex items-start gap-3">
<span className="iconify mt-0.5 text-[#A97959]" data-icon="lucide:map-pin" data-width="14"></span>
                        24 Rue de la Gastronomie, <br/>75001 Paris, France
                    </li>
<li className="flex items-center gap-3">
<span className="iconify text-[#A97959]" data-icon="lucide:phone" data-width="14"></span>
                        +33 1 23 45 67 89
                    </li>
<li className="flex items-center gap-3">
<span className="iconify text-[#A97959]" data-icon="lucide:mail" data-width="14"></span>
                        bonjour@levingt4.com
                    </li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-sm font-semibold text-[#2C3037] uppercase tracking-wider mb-4">Horaires</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li className="flex justify-between border-b border-neutral-100 pb-2">
<span>Mar - Jeu</span>
<span>18:00 - 23:00</span>
</li>
<li className="flex justify-between border-b border-neutral-100 pb-2">
<span>Ven - Sam</span>
<span>18:00 - 00:00</span>
</li>
<li className="flex justify-between border-b border-neutral-100 pb-2">
<span>Dimanche</span>
<span>Brunch 11:00 - 15:00</span>
</li>
<li className="flex justify-between pt-1 text-neutral-300">
<span>Lundi</span>
<span>Fermé</span>
</li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-sm font-semibold text-[#2C3037] uppercase tracking-wider mb-4">Newsletter</h4>
<form className="flex flex-col gap-2">
<input className="w-full bg-white border border-neutral-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#A97959] transition-colors rounded-md" placeholder="Votre email" type="email"/>
<button className="bg-[#2C3037] text-white text-xs font-medium py-2.5 rounded-md hover:bg-[#A97959] transition-colors uppercase tracking-widest" type="button">
                        S'inscrire
                    </button>
</form>
</div>
</div>
<div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 text-xs text-neutral-400">
<p>© 2024 Le Vingt4. Tous droits réservés.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-[#2C3037]" href="#">Mentions Légales</a>
<a className="hover:text-[#2C3037]" href="#">Politique de Confidentialité</a>
<a className="hover:text-[#2C3037]" href="#">Cookies</a>
</div>
</div>
</footer>



    </>
  );
}
