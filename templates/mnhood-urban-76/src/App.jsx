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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
black: '#050505',
dark: '#0a0a0a',
gray: '#171717',
light: '#e5e5e5'
}
}
}
}
}



        // Simple Marquee Animation Script (for the continuous scrolling text)
        const marquee = document.querySelector('.animate-marquee');
        if(marquee) {
            marquee.innerHTML = marquee.innerHTML + marquee.innerHTML; // Duplicate content for smooth loop
            
            let pos = 0;
            function animate() {
                pos -= 0.5; // Adjust speed
                if (pos <= -marquee.scrollWidth / 2) {
                    pos = 0;
                }
                marquee.style.transform = `translateX(${pos}px)`;
                requestAnimationFrame(animate);
            }
            animate();
        }

        // Smooth reveal on scroll using Intersection Observer
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section h2, section p, .group').forEach(el => {
            el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
            observer.observe(el);
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
      

<nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-brand-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-xl font-semibold tracking-tighter uppercase z-50" href="#">
                MNhood<span className="text-neutral-600">.</span>
</a>

<button className="md:hidden text-white z-50 group">
<iconify-icon className="group-hover:opacity-70 transition-opacity" icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
<a className="hover:text-white transition-colors duration-300" href="#about">L'Esprit</a>
<a className="hover:text-white transition-colors duration-300" href="#products">Collection</a>
<a className="hover:text-white transition-colors duration-300" href="#contact">Contact</a>
<a className="text-white bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded-full transition-all duration-300 text-xs uppercase tracking-wider border border-white/5" href="#">
                    Shop Now
                </a>
</div>
</div>
</nav>

<section className="relative h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Dark Urban Street" className="w-full h-full object-cover opacity-40 grayscale contrast-125" src="https://images.unsplash.com/photo-1552168324-d612d77725e3?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent"></div>
<div className="absolute inset-0 bg-grain mix-blend-overlay"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

<div className="mb-8 fade-in-up">
<h1 className="text-6xl md:text-9xl font-semibold text-white tracking-tighter leading-none uppercase select-none">
                    MN<span className="text-neutral-500">hood</span>
</h1>
</div>
<p className="text-lg md:text-xl text-neutral-300 font-light tracking-wide max-w-2xl mx-auto mb-10 fade-in-up delay-100">
                L'ombre est notre lumière. La rue est notre royaume.
            </p>
<div className="flex flex-col md:flex-row gap-4 justify-center items-center fade-in-up delay-200">
<a className="group relative px-8 py-3 bg-white text-black font-medium text-sm tracking-wide overflow-hidden rounded-sm transition-transform active:scale-95" href="#products">
<span className="relative z-10 group-hover:text-black transition-colors">Découvrir la collection</span>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<iconify-icon className="text-white" icon="lucide:arrow-down" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</section>

<section className="py-24 md:py-32 relative bg-brand-black border-t border-white/5" id="about">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-8 order-2 md:order-1">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                    Plus qu'une marque.<br/>
<span className="text-neutral-600">Une fraternité.</span>
</h2>
<div className="space-y-6 text-neutral-400 font-light leading-relaxed">
<p>
                        MNhood est né du béton et du silence. Nous incarnons la culture urbaine dans sa forme la plus pure et la plus brute. Chaque couture raconte une histoire de résilience, chaque pièce est une armure pour affronter la ville.
                    </p>
<p>
                        Notre identité est forgée dans l'obscurité pour mieux révéler votre force. Minimaliste par choix, puissant par essence. Nous ne suivons pas les tendances, nous traçons notre propre voie dans la jungle de béton.
                    </p>
</div>
<div className="flex items-center gap-6 pt-4">
<div className="flex flex-col">
<span className="text-2xl font-semibold text-white">100%</span>
<span className="text-xs uppercase tracking-wider text-neutral-500">Authentique</span>
</div>
<div className="w-px h-10 bg-neutral-800"></div>
<div className="flex flex-col">
<span className="text-2xl font-semibold text-white">Premium</span>
<span className="text-xs uppercase tracking-wider text-neutral-500">Qualité</span>
</div>
</div>
</div>
<div className="relative order-1 md:order-2 group">
<div className="absolute -inset-1 bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div className="relative h-[500px] w-full bg-neutral-900 overflow-hidden rounded-lg">
<img alt="MNhood Culture" className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700 grayscale" src="https://images.unsplash.com/photo-1509557965875-b88c97052f0e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black to-transparent w-full">
<p className="text-white text-sm tracking-widest uppercase">Est. 2024</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark relative" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-16">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">La Sélection</h2>
<p className="text-neutral-500 text-sm">Éditions limitées. Design intemporel.</p>
</div>
<a className="hidden md:flex items-center text-sm text-white hover:text-neutral-300 transition-colors" href="#">
                    Voir tout <iconify-icon className="ml-2" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative bg-neutral-900 h-96 w-full rounded-sm overflow-hidden mb-4 border border-white/5">
<div className="absolute inset-0 bg-neutral-800/50 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Dark Hoodie" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 z-20">
<span className="bg-white text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider">Best Seller</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-white font-medium tracking-tight group-hover:text-neutral-300 transition-colors">Obsidian Hoodie</h3>
<p className="text-neutral-500 text-xs mt-1">Coton lourd, Coupe oversize</p>
</div>
<span className="text-white font-medium text-sm">89€</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative bg-neutral-900 h-96 w-full rounded-sm overflow-hidden mb-4 border border-white/5">
<div className="absolute inset-0 bg-neutral-800/50 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Black Tee" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-white font-medium tracking-tight group-hover:text-neutral-300 transition-colors">Stealth T-Shirt</h3>
<p className="text-neutral-500 text-xs mt-1">Logo brodé, Noir profond</p>
</div>
<span className="text-white font-medium text-sm">45€</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative bg-neutral-900 h-96 w-full rounded-sm overflow-hidden mb-4 border border-white/5">
<div className="absolute inset-0 bg-neutral-800/50 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Tactical Jacket" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-white font-medium tracking-tight group-hover:text-neutral-300 transition-colors">Nightfall Jacket</h3>
<p className="text-neutral-500 text-xs mt-1">Techwear, Imperméable</p>
</div>
<span className="text-white font-medium text-sm">120€</span>
</div>
</div>
</div>
<div className="mt-12 text-center md:hidden">
<a className="inline-block border border-neutral-700 text-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-black transition-colors rounded-sm" href="#">
                    Voir toute la collection
                </a>
</div>
</div>
</section>

<div className="py-12 bg-black border-y border-white/5 overflow-hidden flex items-center">
<div className="whitespace-nowrap flex gap-12 animate-marquee">
<span className="text-4xl md:text-6xl font-bold text-neutral-800 uppercase tracking-tighter">MNhood /// Urban Legacy</span>
<span className="text-4xl md:text-6xl font-bold text-neutral-800 uppercase tracking-tighter">MNhood /// Urban Legacy</span>
<span className="text-4xl md:text-6xl font-bold text-neutral-800 uppercase tracking-tighter">MNhood /// Urban Legacy</span>
<span className="text-4xl md:text-6xl font-bold text-neutral-800 uppercase tracking-tighter">MNhood /// Urban Legacy</span>
</div>
</div>

<section className="py-24 bg-brand-black" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Rejoindre le mouvement</h2>
<p className="text-neutral-400">Inscrivez-vous pour les drops exclusifs et les événements.</p>
</div>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs uppercase text-neutral-500 tracking-wider font-semibold" htmlFor="name">Nom</label>
<input className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all rounded-sm placeholder-neutral-700" id="name" placeholder="Votre nom" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase text-neutral-500 tracking-wider font-semibold" htmlFor="email">Email</label>
<input className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all rounded-sm placeholder-neutral-700" id="email" placeholder="votre@email.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase text-neutral-500 tracking-wider font-semibold" htmlFor="message">Message</label>
<textarea className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all rounded-sm placeholder-neutral-700 resize-none" id="message" placeholder="Une question sur la marque ?" rows="4"></textarea>
</div>
<div className="flex items-start space-x-3 pt-2">
<div className="relative flex items-center">
<input className="peer h-4 w-4 appearance-none border border-neutral-700 bg-neutral-900 checked:bg-white checked:border-white transition-all cursor-pointer rounded-sm" id="newsletter" type="checkbox"/>
<iconify-icon className="absolute left-0 top-0 text-black opacity-0 peer-checked:opacity-100 pointer-events-none" icon="lucide:check" width="16"></iconify-icon>
</div>
<label className="text-xs text-neutral-500 cursor-pointer select-none leading-relaxed" htmlFor="newsletter">Je souhaite recevoir les actualités de MNhood. Vous pouvez vous désinscrire à tout moment.</label>
</div>
<button className="w-full bg-white text-black font-semibold uppercase tracking-wide py-4 text-sm hover:bg-neutral-200 transition-colors rounded-sm mt-4" type="submit">
                    Envoyer
                </button>
</form>
</div>
</section>

<footer className="bg-black border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-2xl font-semibold text-white tracking-tighter uppercase block mb-6" href="#">
                        MN<span className="text-neutral-600">hood</span>
</a>
<p className="text-neutral-500 text-sm leading-relaxed">
                        Streetwear premium pour ceux qui tracent leur propre chemin. Qualité, obscurité, authenticité.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">Navigation</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Accueil</a></li>
<li><a className="hover:text-white transition-colors" href="#about">La Marque</a></li>
<li><a className="hover:text-white transition-colors" href="#products">Collection</a></li>
<li><a className="hover:text-white transition-colors" href="#">Lookbook</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">Légal</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Conditions Générales</a></li>
<li><a className="hover:text-white transition-colors" href="#">Politique de Confidentialité</a></li>
<li><a className="hover:text-white transition-colors" href="#">Retours</a></li>
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">Suivez-nous</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-all" href="#">
<iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-all" href="#">
<iconify-icon icon="lucide:twitter" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-all" href="#">
<iconify-icon icon="lucide:facebook" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-neutral-600 text-xs">© 2024 MNhood Streetwear. Tous droits réservés.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-neutral-500 text-xs uppercase tracking-wider">Système Opérationnel</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
