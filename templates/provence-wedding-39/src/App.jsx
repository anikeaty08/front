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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Intersection Observer for Reveal on Scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-up').forEach(el => {
            observer.observe(el);
        });

        // Simple Radio Button Logic
        function toggleCheck(radio) {
            const name = radio.name;
            document.querySelectorAll(`input[name="${name}"]`).forEach(input => {
                const checkDiv = input.parentElement.querySelector('.check-anim');
                if(checkDiv) checkDiv.style.opacity = '0';
            });
            const activeCheck = radio.parentElement.querySelector('.check-anim');
            if(activeCheck) activeCheck.style.opacity = '1';
        }
    
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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-500 bg-[#FAFAF9]/90 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
<a className="font-serif-display text-2xl tracking-wide text-stone-800 italic hover:opacity-70 transition-opacity z-50" href="#">
                J <span className="text-stone-400 font-script text-3xl not-italic">&amp;</span> D
            </a>
<div className="hidden md:flex space-x-10">
<a className="text-xs uppercase tracking-[0.15em] text-stone-500 hover:text-stone-900 transition-colors" href="#histoire">Histoire</a>
<a className="text-xs uppercase tracking-[0.15em] text-stone-500 hover:text-stone-900 transition-colors" href="#organisation">Programme</a>
<a className="text-xs uppercase tracking-[0.15em] text-stone-500 hover:text-stone-900 transition-colors" href="#hotels">Hôtels</a>
<a className="text-xs uppercase tracking-[0.15em] text-stone-500 hover:text-stone-900 transition-colors" href="#galerie">Galerie</a>
<a className="px-5 py-2 border border-stone-300 rounded-full text-xs uppercase tracking-[0.15em] text-stone-600 hover:bg-stone-800 hover:text-white hover:border-stone-800 transition-all duration-300" href="#rsvp">RSVP</a>
</div>

<button className="md:hidden text-stone-600">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

<div className="absolute inset-0 z-0">
<img alt="Tuscany Landscape" className="w-full h-full object-cover object-center opacity-80 brightness-[1.05] grayscale-[10%]" src="https://images.unsplash.com/photo-1595244792070-9c9869818804?q=80&amp;w=2836&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#FAFAF9]/30 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#FAFAF9] via-transparent to-[#FAFAF9]/40"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#FAFAF9] via-transparent to-transparent"></div>
</div>

<div className="relative z-10 text-center px-6 reveal-up active">
<div className="mb-2 relative">

<div className="monogram-emboss font-serif-display text-[10rem] md:text-[14rem] leading-none tracking-tight opacity-40 select-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -z-10">
                    JD
                </div>
<p className="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-stone-600 font-medium mb-6">Réservez la date</p>
<h1 className="font-serif-display text-6xl md:text-8xl text-stone-800 italic tracking-tight mb-2">
                    Julia <span className="font-script text-stone-500 not-italic px-4 text-7xl md:text-9xl align-middle font-light">&amp;</span> David
                </h1>
</div>
<div className="space-y-6 mt-8">
<div className="flex items-center justify-center gap-6 text-stone-700 font-serif-display text-2xl md:text-3xl italic">
<span>14 Juin</span>
<i className="w-6 h-6 text-stone-400 stroke-1" data-lucide="flower-2"></i>
<span>2025</span>
</div>
<p className="text-xs uppercase tracking-[0.2em] text-stone-500 pt-2">Château de la Gaude • Provence</p>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-stone-400 opacity-60">
<i className="w-6 h-6 stroke-1" data-lucide="arrow-down"></i>
</div>
</header>

<section className="py-32 px-6 relative overflow-hidden" id="histoire">

<div className="absolute -left-10 top-20 opacity-20 rotate-12 pointer-events-none">
<img alt="Olive Branch" className="w-80 h-80 object-cover rounded-full mix-blend-multiply blur-[1px]" src="https://images.unsplash.com/photo-1616694600298-508b4920b70d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-center">
<div className="order-2 md:order-1 relative reveal-up">

<div className="relative w-full aspect-[3/4]">
<div className="absolute inset-0 bg-stone-200 rotate-3 transform scale-[1.02] shadow-lg"></div>
<div className="relative h-full w-full bg-white p-3 shadow-md rotate-[-2deg]">
<img alt="Couple" className="w-full h-full object-cover grayscale-[10%] contrast-[0.95]" src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#F2F5F3] rounded-full flex items-center justify-center shadow-inner z-10 hidden md:flex">
<span className="font-serif-display text-4xl italic text-sage-800">10<span className="text-base align-top ml-1">ans</span></span>
</div>
</div>
<div className="order-1 md:order-2 space-y-8 text-center md:text-left reveal-up">
<span className="inline-block border-b border-stone-300 pb-1 text-[10px] uppercase tracking-[0.3em] text-stone-500">Notre Récit</span>
<h2 className="font-serif-display text-4xl md:text-5xl text-stone-800 leading-[1.1]">
                    L'amour est un voyage, <br/>pas une destination
                </h2>
<div className="space-y-6 font-body text-base font-light text-stone-600 leading-8 text-justify">
<p>
                        Notre histoire a commencé simplement, par un café partagé une après-midi de printemps. Ce qui semblait anodin s'est transformé en une décennie de rires, de voyages et de complicité silencieuse.
                    </p>
<p>
                        La Provence a toujours eu une place spéciale dans nos cœurs. C'est ici, parmi les champs de lavande et les oliviers centenaires, que David a posé la question. Il nous semblait naturel de revenir à la source pour sceller notre union devant vous.
                    </p>
</div>
<div className="pt-4 text-center md:text-left">
<span className="font-script text-3xl text-stone-400">J &amp; D</span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F2F5F3]/50 relative overflow-hidden" id="organisation">

<div className="absolute inset-0 bg-texture opacity-50 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-20 reveal-up">
<h2 className="font-serif-display text-5xl md:text-6xl text-stone-800 mb-4">Organisation</h2>
<p className="font-script text-3xl text-stone-500">Le déroulé des festivités</p>
</div>
<div className="relative">

<div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 z-0 hidden md:block">
<svg className="overflow-visible" height="100%" width="2">
<line stroke="#D6D3D1" stroke-dasharray="6,8" strokeWidth="2" x1="1" x2="1" y1="0" y2="100%"></line>
</svg>
</div>

<div className="relative z-10 grid md:grid-cols-2 gap-12 mb-24 items-center reveal-up">
<div className="text-center md:text-right order-2 md:order-1">
<span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold block mb-2">Vendredi 13 Juin • 18:00</span>
<h3 className="font-serif-display text-3xl text-sage-800 mb-3 italic">Welcome Party</h3>
<p className="font-body text-sm font-light text-stone-600 mb-4 px-4 md:px-0 md:pl-10">
                            Nous vous accueillons pour un cocktail dînatoire au coucher du soleil pour débuter ce week-end inoubliable.
                        </p>
<p className="text-xs uppercase tracking-widest text-stone-500 border border-stone-300 rounded-full py-1 px-3 inline-block">Dress Code: Cocktail Chic</p>
</div>
<div className="order-1 md:order-2 flex justify-center md:justify-start">
<div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl watercolor-img relative">
<img alt="Villa View" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524666041070-9d87656c25bb?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="relative z-10 grid md:grid-cols-2 gap-12 mb-24 items-center reveal-up">
<div className="order-1 flex justify-center md:justify-end">
<div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl watercolor-img relative">
<img alt="Ceremony Spot" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="text-center md:text-left order-2">
<span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold block mb-2">Samedi 14 Juin • 16:30</span>
<h3 className="font-serif-display text-4xl text-sage-800 mb-3 italic">La Cérémonie</h3>
<p className="font-body text-sm font-light text-stone-600 mb-4 px-4 md:px-0 md:pr-10">
                            Échange des vœux dans les jardins du château, suivi d'un vin d'honneur et du dîner sous les étoiles.
                        </p>
<p className="text-xs uppercase tracking-widest text-stone-500 border border-stone-300 rounded-full py-1 px-3 inline-block">Dress Code: Cravate Noire</p>
</div>
</div>

<div className="relative z-10 grid md:grid-cols-2 gap-12 items-center reveal-up">
<div className="text-center md:text-right order-2 md:order-1">
<span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold block mb-2">Dimanche 15 Juin • 11:00</span>
<h3 className="font-serif-display text-3xl text-sage-800 mb-3 italic">Brunch d'Adieu</h3>
<p className="font-body text-sm font-light text-stone-600 mb-4 px-4 md:px-0 md:pl-10">
                            Un dernier moment de partage autour d'un brunch décontracté au bord de la piscine avant de se quitter.
                        </p>
<p className="text-xs uppercase tracking-widest text-stone-500 border border-stone-300 rounded-full py-1 px-3 inline-block">Dress Code: Décontracté</p>
</div>
<div className="order-1 md:order-2 flex justify-center md:justify-start">
<div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl watercolor-img relative">
<img alt="Brunch Setting" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559869604-e3c75044235e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-5 z-0">
<img alt="Tree Illustration" className="w-full h-full object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1628147879627-4c7406a6428e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="hotels">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 reveal-up">
<span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 block mb-3">Hébergements</span>
<h2 className="font-serif-display text-4xl md:text-5xl text-stone-800 mb-6">Où Séjourner</h2>
<p className="font-body text-stone-500 font-light max-w-lg mx-auto">
                    Nous avons sélectionné pour vous quelques établissements de charme situés à proximité du lieu de réception. Des navettes seront organisées.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-white p-4 shadow-[0_5px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-500 reveal-up">
<div className="relative h-64 overflow-hidden mb-6">
<img alt="Hotel Luxury" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-stone-800">5 Étoiles</div>
</div>
<div className="text-center px-4 pb-4">
<h3 className="font-serif-display text-2xl text-stone-800 mb-2">Villa Gallici</h3>
<p className="text-xs text-stone-400 uppercase tracking-wider mb-4">À 5 min du lieu</p>
<p className="font-body text-sm font-light text-stone-500 mb-6 line-clamp-2">
                            Une bastide du XVIIIe siècle offrant luxe et raffinement au cœur d'un jardin florentin.
                        </p>
<a className="inline-block border-b border-stone-800 pb-1 text-xs uppercase tracking-widest text-stone-800 hover:text-stone-500 hover:border-stone-400 transition-colors" href="#">Réserver</a>
</div>
</div>

<div className="group bg-white p-4 shadow-[0_5px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-500 reveal-up" style={{transitionDelay: '100ms'}}>
<div className="relative h-64 overflow-hidden mb-6">
<img alt="Hotel Charm" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-stone-800">4 Étoiles</div>
</div>
<div className="text-center px-4 pb-4">
<h3 className="font-serif-display text-2xl text-stone-800 mb-2">Le Pigonnet</h3>
<p className="text-xs text-stone-400 uppercase tracking-wider mb-4">À 10 min du lieu</p>
<p className="font-body text-sm font-light text-stone-500 mb-6 line-clamp-2">
                            Le charme d'une maison de campagne aixoise avec ses jardins magnifiques et sa piscine.
                        </p>
<a className="inline-block border-b border-stone-800 pb-1 text-xs uppercase tracking-widest text-stone-800 hover:text-stone-500 hover:border-stone-400 transition-colors" href="#">Réserver</a>
</div>
</div>

<div className="group bg-white p-4 shadow-[0_5px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-500 reveal-up" style={{transitionDelay: '200ms'}}>
<div className="relative h-64 overflow-hidden mb-6">
<img alt="B&amp;B" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-stone-800">Charme</div>
</div>
<div className="text-center px-4 pb-4">
<h3 className="font-serif-display text-2xl text-stone-800 mb-2">Maison du Collectionneur</h3>
<p className="text-xs text-stone-400 uppercase tracking-wider mb-4">À 12 min du lieu</p>
<p className="font-body text-sm font-light text-stone-500 mb-6 line-clamp-2">
                            Une atmosphère intimiste et chaleureuse pour un séjour authentique en Provence.
                        </p>
<a className="inline-block border-b border-stone-800 pb-1 text-xs uppercase tracking-widest text-stone-800 hover:text-stone-500 hover:border-stone-400 transition-colors" href="#">Réserver</a>
</div>
</div>
</div>

<div className="mt-16 text-center reveal-up">
<div className="inline-flex items-center gap-3 px-6 py-4 bg-[#F2F5F3] border border-stone-200 rounded-lg">
<i className="w-5 h-5 text-sage-800 stroke-1" data-lucide="bus"></i>
<p className="font-body text-xs text-stone-600">
<span className="font-medium text-stone-800">Transport :</span> Des navettes seront disponibles entre ces hôtels et le château le jour du mariage.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-stone-50 border-t border-stone-100" id="galerie">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-up">
<div>
<span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 block mb-2">Inspirations</span>
<h2 className="font-serif-display text-4xl text-stone-800">L'Esprit du Mariage</h2>
</div>
<div className="hidden md:block text-right">
<p className="font-script text-2xl text-stone-400">Douceur de vivre</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-4 h-[50vh] reveal-up group overflow-hidden">
<img alt="Flowers" className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="md:col-span-5 flex flex-col gap-6 mt-12 md:mt-0">
<div className="h-[40vh] reveal-up group overflow-hidden" style={{transitionDelay: '100ms'}}>
<img alt="Table" className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="md:col-span-3 h-[40vh] md:mt-24 reveal-up group overflow-hidden" style={{transitionDelay: '200ms'}}>
<img alt="Detail" className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1522673607200-1645062cd958?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-texture" id="rsvp">
<div className="max-w-2xl mx-auto relative">

<div className="absolute -top-6 -right-6 hidden md:block seal-emboss opacity-20 transform rotate-12">
<i className="w-32 h-32 stroke-[0.5]" data-lucide="stamp"></i>
</div>
<div className="bg-white p-12 md:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-stone-100 relative z-10 reveal-up">
<div className="text-center mb-12">
<span className="text-[10px] uppercase tracking-[0.4em] text-sage-800 block mb-3 font-bold">Répondez s'il vous plaît</span>
<h2 className="font-serif-display text-4xl text-stone-800 mb-6">Votre Présence</h2>
<p className="font-body text-sm font-light text-stone-500">
                        Merci de nous confirmer votre venue avant le <br/> <span className="font-medium text-stone-800">1er Mars 2025</span>.
                    </p>
</div>
<form className="space-y-10">
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-stone-400 font-medium">Nom &amp; Prénom</label>
<input className="w-full border-b border-stone-200 py-2 text-stone-800 font-serif-display text-xl focus:outline-none focus:border-stone-500 transition-colors bg-transparent placeholder-stone-300" placeholder="M. et Mme..." type="text"/>
</div>
<div className="grid md:grid-cols-2 gap-10">
<div className="space-y-4">
<label className="text-[10px] uppercase tracking-widest text-stone-400 font-medium block">Réponse</label>
<div className="flex flex-col gap-3">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative w-5 h-5 border border-stone-300 rounded-full flex items-center justify-center group-hover:border-stone-600 transition-colors">
<div className="w-2.5 h-2.5 bg-sage-800 rounded-full opacity-0 check-anim transition-opacity"></div>
</div>
<span className="font-body text-sm font-light text-stone-600">Accepte avec plaisir</span>
<input className="hidden" name="attendance" onchange="toggleCheck(this)" type="radio"/>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative w-5 h-5 border border-stone-300 rounded-full flex items-center justify-center group-hover:border-stone-600 transition-colors">
<div className="w-2.5 h-2.5 bg-sage-800 rounded-full opacity-0 check-anim transition-opacity"></div>
</div>
<span className="font-body text-sm font-light text-stone-600">Décline avec regret</span>
<input className="hidden" name="attendance" onchange="toggleCheck(this)" type="radio"/>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-stone-400 font-medium">Invités</label>
<div className="relative">
<select className="w-full border-b border-stone-200 py-2 text-stone-800 font-body text-sm focus:outline-none bg-transparent appearance-none">
<option>1 Adulte</option>
<option>2 Adultes</option>
<option>Famille (3+)</option>
</select>
<i className="w-4 h-4 text-stone-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-stone-400 font-medium">Notes (Allergies, Régimes)</label>
<textarea className="w-full border-b border-stone-200 py-2 text-stone-800 font-body text-sm focus:outline-none focus:border-stone-500 transition-colors bg-transparent placeholder-stone-300 resize-none" placeholder="Laissez-nous un message..." rows="1"></textarea>
</div>
<div className="pt-6 text-center">
<button className="px-12 py-4 bg-stone-800 text-[#FAFAF9] font-body text-xs uppercase tracking-[0.25em] hover:bg-[#445648] transition-all duration-500 shadow-xl hover:shadow-stone-400/30 w-full md:w-auto" type="button">
                            Confirmer
                        </button>
</div>
</form>
</div>
</div>
</section>

<footer className="bg-[#F2F5F3] py-20 border-t border-stone-200 text-center relative overflow-hidden">

<i className="w-96 h-96 text-stone-200 absolute -bottom-20 -left-20 stroke-[0.2] opacity-50 rotate-45 pointer-events-none" data-lucide="leaf"></i>
<div className="relative z-10">
<h2 className="font-serif-display text-4xl md:text-5xl text-stone-800 mb-8 italic">Julia &amp; David</h2>
<div className="flex justify-center items-center gap-6 mb-12">
<span className="h-px w-12 bg-stone-300"></span>
<div className="w-2 h-2 rounded-full bg-stone-300"></div>
<span className="h-px w-12 bg-stone-300"></span>
</div>
<div className="flex flex-col gap-4 font-body text-[10px] uppercase tracking-[0.2em] text-stone-500">
<p>14 Juin 2025 • Château de la Gaude</p>
<p className="opacity-60">Fait avec amour en Provence</p>
</div>
</div>
</footer>



    </>
  );
}
