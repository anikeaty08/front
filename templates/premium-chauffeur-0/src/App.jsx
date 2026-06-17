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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-40 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 transition-all">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl font-medium tracking-tight text-white hover:opacity-80 transition-opacity" href="#">
                Chauffeur2Paris
            </a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-base font-normal text-zinc-400 hover:text-white transition-colors" href="#accueil">Accueil</a>
<a className="text-base font-normal text-zinc-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-base font-normal text-zinc-400 hover:text-white transition-colors" href="#vehicules">Véhicules</a>
<a className="text-base font-normal text-zinc-400 hover:text-white transition-colors" href="#avis">Avis</a>
<a className="text-base font-normal text-zinc-400 hover:text-white transition-colors" href="#contact">Contact</a>
</div>

<div className="hidden lg:flex items-center gap-6">

<div className="flex items-center p-1 rounded-full bg-white/5 border border-white/10">
<button className="px-3 py-1 rounded-full bg-white text-black text-sm font-medium shadow-sm">FR</button>
<button className="px-3 py-1 rounded-full text-zinc-400 hover:text-white text-sm font-normal transition-colors">EN</button>
<button className="px-3 py-1 rounded-full text-zinc-400 hover:text-white text-sm font-normal transition-colors">ES</button>
</div>
<a className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-base font-medium hover:bg-zinc-200 transition-all" href="https://wa.me/33767856618?text=Bonjour%20%F0%9F%91%8B%20%2F%20Hello%20%F0%9F%91%8B%20%2F%20Hola%20%F0%9F%91%8B%0A%0AJe%20souhaite%20r%C3%A9server%20un%20VTC%20avec%20Chauffeur2Paris%20%F0%9F%9A%98%0A%0A%F0%9F%93%8D%20D%C3%A9part%20%3A%0A%F0%9F%93%8D%20Destination%20%3A%0A%F0%9F%95%92%20Heure%20%3A%0A%F0%91%A4%20Passagers%20%3A%0A%0AMerci%20!" target="_blank">
<i className="w-5 h-5" data-lucide="message-circle" strokeWidth="1.5"></i>
                    Réserver
                </a>
</div>

<button className="lg:hidden text-zinc-400 hover:text-white" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<div className="hidden fixed inset-0 z-50 bg-[#050505] p-6 flex flex-col pt-24" id="mobile-menu">
<button className="absolute top-6 right-6 text-zinc-400 hover:text-white" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
<i className="w-8 h-8" data-lucide="x-circle" strokeWidth="1.5"></i>
</button>
<div className="flex flex-col gap-6 items-start text-2xl tracking-tight font-normal">
<a href="#accueil" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Accueil</a>
<a href="#services" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Services</a>
<a href="#vehicules" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Véhicules</a>
<a href="#avis" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Avis</a>
<a href="#contact" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Contact</a>
</div>
<div className="mt-auto flex gap-4">
<button className="text-white font-medium underline decoration-2 underline-offset-4">FR</button>
<button className="text-zinc-500 font-normal">EN</button>
<button className="text-zinc-500 font-normal">ES</button>
</div>
</div>

<a className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-white text-black px-4 py-3 md:px-5 md:py-3.5 rounded-full shadow-[0_8px_30px_rgb(255,255,255,0.12)] hover:scale-105 transition-transform duration-300 border border-black/5" href="https://wa.me/33767856618?text=Bonjour%20%F0%9F%91%8B%20%2F%20Hello%20%F0%9F%91%8B%20%2F%20Hola%20%F0%9F%91%8B%0A%0AJe%20souhaite%20r%C3%A9server%20un%20VTC%20avec%20Chauffeur2Paris%20%F0%9F%9A%98%0A%0A%F0%9F%93%8D%20D%C3%A9part%20%3A%0A%F0%9F%93%8D%20Destination%20%3A%0A%F0%9F%95%92%20Heure%20%3A%0A%F0%91%A4%20Passagers%20%3A%0A%0AMerci%20!" target="_blank">
<i className="w-6 h-6" data-lucide="message-square-text" strokeWidth="1.5"></i>
<span className="text-sm md:text-base font-medium tracking-tight hidden sm:block">Besoin d’un chauffeur ? Réponse immédiate 💬</span>
<span className="text-sm font-medium tracking-tight sm:hidden">Réserver 💬</span>
</a>

<section className="relative pt-32 md:pt-48 pb-24 overflow-hidden min-h-screen flex flex-col justify-center" id="accueil">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">

<div className="flex flex-wrap justify-center gap-3 mb-10 opacity-0 animate-fade-in">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0a0a0a] px-3.5 py-1.5 text-sm font-normal text-zinc-300 backdrop-blur-md">
<span className="text-[#eab308]">⭐</span> +2000 clients satisfaits
                </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0a0a0a] px-3.5 py-1.5 text-sm font-normal text-zinc-300 backdrop-blur-md">
<i className="w-4 h-4" data-lucide="timer" strokeWidth="1.5"></i> Réponse en &lt; 2 min
                </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0a0a0a] px-3.5 py-1.5 text-sm font-normal text-zinc-300 backdrop-blur-md">
<span className="text-white">🔥</span> Places limitées aujourd’hui
                </span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-[5rem] font-medium tracking-tight text-balance leading-[1.1] mb-6 opacity-0 animate-fade-in delay-100">
                Chauffeur privé VTC <br className="hidden md:block"/>à Paris 🚘
            </h1>
<p className="text-xl md:text-2xl text-zinc-400 font-normal tracking-tight mb-4 opacity-0 animate-fade-in delay-200">
                Le luxe accessible à prix raisonnables
            </p>
<p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto text-balance mb-12 opacity-0 animate-fade-in delay-200">
                Chauffeur professionnel pour tous vos déplacements privés et professionnels. Une expérience sur-mesure, discrète et ponctuelle.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in delay-300">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full text-base font-medium hover:scale-[1.02] transition-transform" href="https://wa.me/33767856618?text=Bonjour%20%F0%9F%91%8B%20%2F%20Hello%20%F0%9F%91%8B%20%2F%20Hola%20%F0%9F%91%8B%0A%0AJe%20souhaite%20r%C3%A9server%20un%20VTC%20avec%20Chauffeur2Paris%20%F0%9F%9A%98%0A%0A%F0%9F%93%8D%20D%C3%A9part%20%3A%0A%F0%9F%93%8D%20Destination%20%3A%0A%F0%9F%95%92%20Heure%20%3A%0A%F0%91%A4%20Passagers%20%3A%0A%0AMerci%20!" target="_blank">
<i className="w-5 h-5" data-lucide="message-circle" strokeWidth="1.5"></i>
                    Réserver sur WhatsApp
                </a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent text-white border border-white/20 px-8 py-4 rounded-full text-base font-normal hover:bg-white/5 transition-colors" href="tel:+33767856618">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
                    Appeler maintenant
                </a>
</div>

<div className="mt-20 md:mt-32 relative mx-auto max-w-5xl opacity-0 animate-fade-in delay-300">
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 h-full w-full"></div>
<img alt="Mercedes Classe S Noire" className="w-full h-[40vh] md:h-[60vh] object-cover rounded-2xl md:rounded-[2.5rem] border border-white/10 filter brightness-90" src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-t border-white/5 bg-[#0a0a0a]" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-balance">Des services pensés pour vous</h2>
<p className="text-zinc-400 text-base md:text-lg">Une flexibilité totale pour répondre à chacune de vos exigences.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 rounded-3xl bg-[#050505] border border-white/5 hover:border-white/10 transition-colors">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="plane" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2">Transfert aéroport</h3>
<p className="text-base text-zinc-500 leading-relaxed">CDG, Orly, Beauvais. Accueil personnalisé avec pancarte, suivi du vol en temps réel.</p>
</div>

<div className="group p-8 rounded-3xl bg-[#050505] border border-white/5 hover:border-white/10 transition-colors">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2">Déplacements pro</h3>
<p className="text-base text-zinc-500 leading-relaxed">Réunions, séminaires, roadshows. Discrétion absolue et wifi à bord.</p>
</div>

<div className="group p-8 rounded-3xl bg-[#050505] border border-white/5 hover:border-white/10 transition-colors">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="car" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2">Mise à disposition</h3>
<p className="text-base text-zinc-500 leading-relaxed">Un chauffeur dédié à l'heure, à la demi-journée ou à la journée complète.</p>
</div>

<div className="group p-8 rounded-3xl bg-[#050505] border border-white/5 hover:border-white/10 transition-colors">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="party-popper" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2">Événements &amp; soirées</h3>
<p className="text-base text-zinc-500 leading-relaxed">Mariages, fashion week, dîners. Arrivez avec élégance à tous vos événements.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative rounded-[2rem] overflow-hidden border border-white/10 aspect-square md:aspect-[4/3] lg:aspect-square">
<img alt="Chauffeur professionnel" className="w-full h-full object-cover filter brightness-75" src="https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8 text-balance">L'excellence au service de vos trajets</h2>
<div className="flex flex-col gap-8">
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
<i className="w-5 h-5" data-lucide="badge-check" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-lg font-medium tracking-tight mb-1">Chauffeur professionnel expérimenté</h4>
<p className="text-base text-zinc-400">Tenue stricte, courtoisie et parfaite connaissance de Paris et sa région.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
<i className="w-5 h-5" data-lucide="key" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-lg font-medium tracking-tight mb-1">Véhicules premium</h4>
<p className="text-base text-zinc-400">Flotte récente : Mercedes Classe E, S, V et Tesla. Propreté irréprochable.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
<i className="w-5 h-5" data-lucide="tag" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-lg font-medium tracking-tight mb-1">Prix fixes et raisonnables</h4>
<p className="text-base text-zinc-400">Aucune mauvaise surprise, le tarif annoncé est le tarif payé.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
<i className="w-5 h-5" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-lg font-medium tracking-tight mb-1">Disponible 24/7</h4>
<p className="text-base text-zinc-400">Un service continu pour s'adapter à vos horaires de vols ou de soirées.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
<i className="w-5 h-5" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-lg font-medium tracking-tight mb-1">Aucun frais caché</h4>
<p className="text-base text-zinc-400">Bagages, attente à l'aéroport, péages : tout est inclus dans le prix fixé.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#0a0a0a] border-t border-white/5" id="vehicules">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-balance">Notre flotte premium</h2>
<p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">Des véhicules noirs haut de gamme, intérieur cuir, pour un confort absolu.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group rounded-3xl overflow-hidden bg-[#050505] border border-white/5 hover:border-white/20 transition-all">
<div className="h-64 md:h-80 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent z-10"></div>

<img alt="Mercedes Classe E" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="IMAGE_1"/>
</div>
<div className="p-8 relative z-20 -mt-12">
<div className="flex justify-between items-end mb-4">
<h3 className="text-3xl font-medium tracking-tight">Mercedes Classe E</h3>
<span className="text-sm font-normal text-zinc-500 border border-white/10 rounded-full px-3 py-1">Business</span>
</div>
<ul className="flex gap-6 text-base text-zinc-400">
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="user" strokeWidth="1.5"></i> 3 Passagers</li>
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="luggage" strokeWidth="1.5"></i> 3 Bagages</li>
</ul>
</div>
</div>

<div className="group rounded-3xl overflow-hidden bg-[#050505] border border-white/5 hover:border-white/20 transition-all">
<div className="h-64 md:h-80 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent z-10"></div>

<img alt="Mercedes Classe S" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="IMAGE_2"/>
</div>
<div className="p-8 relative z-20 -mt-12">
<div className="flex justify-between items-end mb-4">
<h3 className="text-3xl font-medium tracking-tight">Mercedes Classe S</h3>
<span className="text-sm font-normal text-zinc-500 border border-white/10 rounded-full px-3 py-1">First Class</span>
</div>
<ul className="flex gap-6 text-base text-zinc-400">
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="user" strokeWidth="1.5"></i> 3 Passagers</li>
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="luggage" strokeWidth="1.5"></i> 2 Bagages</li>
</ul>
</div>
</div>

<div className="group rounded-3xl overflow-hidden bg-[#050505] border border-white/5 hover:border-white/20 transition-all">
<div className="h-64 md:h-80 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent z-10"></div>
<img alt="Mercedes Classe V" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-8 relative z-20 -mt-12">
<div className="flex justify-between items-end mb-4">
<h3 className="text-3xl font-medium tracking-tight">Mercedes Classe V</h3>
<span className="text-sm font-normal text-zinc-500 border border-white/10 rounded-full px-3 py-1">Van Premium</span>
</div>
<ul className="flex gap-6 text-base text-zinc-400">
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="users" strokeWidth="1.5"></i> 7 Passagers</li>
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="luggage" strokeWidth="1.5"></i> 7 Bagages</li>
</ul>
</div>
</div>

<div className="group rounded-3xl overflow-hidden bg-[#050505] border border-white/5 hover:border-white/20 transition-all">
<div className="h-64 md:h-80 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent z-10"></div>
<img alt="Tesla" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&amp;w=2671&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 relative z-20 -mt-12">
<div className="flex justify-between items-end mb-4">
<h3 className="text-3xl font-medium tracking-tight">Tesla Model S</h3>
<span className="text-sm font-normal text-zinc-500 border border-white/10 rounded-full px-3 py-1">100% Électrique</span>
</div>
<ul className="flex gap-6 text-base text-zinc-400">
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="user" strokeWidth="1.5"></i> 3 Passagers</li>
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="luggage" strokeWidth="1.5"></i> 2 Bagages</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-balance">Tarifs transparents</h2>
<p className="text-zinc-400 text-base md:text-lg">💸 Luxe accessible à prix raisonnables</p>
</div>
<div className="bg-[#0a0a0a] rounded-3xl border border-white/10 p-8 md:p-12">
<div className="flex items-center justify-between py-6 border-b border-white/5">
<div className="flex items-center gap-4">
<i className="w-5 h-5 text-zinc-400 hidden sm:block" data-lucide="route" strokeWidth="1.5"></i>
<span className="text-lg md:text-xl font-normal tracking-tight">CDG → Paris</span>
</div>
<span className="text-lg md:text-xl font-medium">à partir de 50€</span>
</div>
<div className="flex items-center justify-between py-6 border-b border-white/5">
<div className="flex items-center gap-4">
<i className="w-5 h-5 text-zinc-400 hidden sm:block" data-lucide="route" strokeWidth="1.5"></i>
<span className="text-lg md:text-xl font-normal tracking-tight">Orly → Paris</span>
</div>
<span className="text-lg md:text-xl font-medium">à partir de 35€</span>
</div>
<div className="flex items-center justify-between py-6">
<div className="flex items-center gap-4">
<i className="w-5 h-5 text-zinc-400 hidden sm:block" data-lucide="car" strokeWidth="1.5"></i>
<span className="text-lg md:text-xl font-normal tracking-tight">Mise à disposition</span>
</div>
<span className="text-lg md:text-xl font-medium text-zinc-400">Sur devis</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#0a0a0a] border-y border-white/5" id="avis">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12 text-center">Ce que pensent nos clients</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-[#050505] border border-white/5">
<div className="flex gap-1 mb-4 text-[#eab308]">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-base font-normal leading-relaxed">"Service impeccable, très professionnel. Le chauffeur était à l'heure, courtois, et la conduite parfaite. Je recommande vivement."</p>
</div>

<div className="p-8 rounded-2xl bg-[#050505] border border-white/5">
<div className="flex gap-1 mb-4 text-[#eab308]">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-base font-normal leading-relaxed">"Véhicule propre et très confortable (Mercedes Classe E). Transfert vers CDG sans aucun stress. Tarif très correct pour la prestation."</p>
</div>

<div className="p-8 rounded-2xl bg-[#050505] border border-white/5">
<div className="flex gap-1 mb-4 text-[#eab308]">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-base font-normal leading-relaxed">"Réservation rapide et efficace via WhatsApp. Réponse immédiate et chauffeur assigné en quelques minutes. Une vraie différence."</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden text-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 text-balance">Réservez votre chauffeur en 30 secondes 🚀</h2>
<p className="text-zinc-400 text-lg md:text-xl mb-10 font-normal">Réponse rapide garantie. Pas de formulaire compliqué, tout se passe directement sur WhatsApp.</p>
<a className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(255,255,255,0.1)]" href="https://wa.me/33767856618?text=Bonjour%20%F0%9F%91%8B%20%2F%20Hello%20%F0%9F%91%8B%20%2F%20Hola%20%F0%9F%91%8B%0A%0AJe%20souhaite%20r%C3%A9server%20un%20VTC%20avec%20Chauffeur2Paris%20%F0%9F%9A%98%0A%0A%F0%9F%93%8D%20D%C3%A9part%20%3A%0A%F0%9F%93%8D%20Destination%20%3A%0A%F0%9F%95%92%20Heure%20%3A%0A%F0%91%A4%20Passagers%20%3A%0A%0AMerci%20!" target="_blank">
<i className="w-5 h-5" data-lucide="message-circle" strokeWidth="1.5"></i>
                Réserver via WhatsApp
            </a>
</div>
</section>

<footer className="bg-[#050505] border-t border-white/5 pt-16 pb-24 md:pb-12" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-2">
<span className="text-2xl font-medium tracking-tight text-white block mb-4">Chauffeur2Paris</span>
<p className="text-base text-zinc-500 max-w-sm mb-6">Service de VTC haut de gamme à Paris et en Île-de-France. Le luxe accessible pour tous vos déplacements professionnels et privés.</p>
<div className="flex flex-wrap gap-3">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 text-sm font-normal text-zinc-400">
<i className="w-4 h-4" data-lucide="clock" strokeWidth="1.5"></i> Disponible 24/7
                        </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 text-sm font-normal text-zinc-400">
<i className="w-4 h-4" data-lucide="shield-check" strokeWidth="1.5"></i> Paiement sécurisé
                        </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 text-sm font-normal text-zinc-400">
<i className="w-4 h-4" data-lucide="star" strokeWidth="1.5"></i> Service premium
                        </span>
</div>
</div>

<div>
<h4 className="text-base font-medium text-white mb-6 tracking-tight">Contact direct</h4>
<ul className="flex flex-col gap-4 text-base text-zinc-400">
<li>
<a className="hover:text-white transition-colors flex items-center gap-2" href="tel:+33767856618">
<i className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i> +33 7 67 85 66 18
                            </a>
</li>
<li>
<a className="hover:text-white transition-colors flex items-center gap-2" href="https://wa.me/33767856618?text=Bonjour%20%F0%9F%91%8B..." target="_blank">
<i className="w-4 h-4" data-lucide="message-circle" strokeWidth="1.5"></i> WhatsApp
                            </a>
</li>
</ul>
</div>

<div>
<h4 className="text-base font-medium text-white mb-6 tracking-tight">Zone d'intervention</h4>
<ul className="flex flex-col gap-4 text-base text-zinc-400">
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i> Paris intra-muros</li>
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="route" strokeWidth="1.5"></i> Île-de-France</li>
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="plane" strokeWidth="1.5"></i> Aéroports (CDG, Orly)</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-normal text-zinc-600">
<p>© 2023 Chauffeur2Paris. Tous droits réservés.</p>
<div className="flex gap-4">
<a className="hover:text-zinc-300 transition-colors" href="#">Mentions légales</a>
<a className="hover:text-zinc-300 transition-colors" href="#">CGV</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
