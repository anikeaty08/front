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



        document.addEventListener("DOMContentLoaded", () => {
            // --- Animations de défilement (Scroll Reveal) ---
            const observerOptions = {
                root: null,
                rootMargin: "0px 0px -50px 0px",
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.js-reveal').forEach(el => {
                // Initialize elements to be hidden
                el.classList.add('opacity-0', 'translate-y-8');
                observer.observe(el);
            });

            // --- Gestion du statut Ouvert/Fermé ---
            function updateStoreStatus() {
                // Heure actuelle locale (avec ajustement automatique sur l'heure de Paris)
                const now = new Date();
                const options = { timeZone: 'Europe/Paris', hour12: false, hour: 'numeric', minute: 'numeric', weekday: 'numeric' };
                const formatter = new Intl.DateTimeFormat('en-US', options);
                
                // Extraction du jour et de l'heure
                const parisTimeStr = now.toLocaleString('en-US', { timeZone: 'Europe/Paris' });
                const parisTime = new Date(parisTimeStr);
                
                const day = parisTime.getDay(); // 0 = Dimanche, 1 = Lundi, ...
                const hours = parisTime.getHours();
                const minutes = parisTime.getMinutes();
                const time = hours + (minutes / 60);

                let isOpen = false;

                // Logique des horaires
                if (day >= 2 && day <= 5) { // Mardi à Vendredi
                    if ((time >= 10.5 && time < 14) || (time >= 16.5 && time < 19.5)) {
                        isOpen = true;
                    }
                } else if (day === 6) { // Samedi
                    if ((time >= 10 && time < 14) || (time >= 16.5 && time < 19.5)) {
                        isOpen = true;
                    }
                } else if (day === 0) { // Dimanche
                    if (time >= 10 && time < 14) {
                        isOpen = true;
                    }
                }

                const statusIcon = document.getElementById("status-icon");
                const statusText = document.getElementById("status-text");

                if (statusIcon && statusText) {
                    if (isOpen) {
                        statusIcon.classList.remove("bg-red-500");
                        statusIcon.classList.add("bg-green-500");
                        statusText.textContent = "La rôtisserie est ouverte";
                    } else {
                        statusIcon.classList.remove("bg-green-500");
                        statusIcon.classList.add("bg-red-500");
                        statusText.textContent = "La rôtisserie est fermée";
                    }
                }
            }

            // Mettre à jour immédiatement puis toutes les minutes
            updateStoreStatus();
            setInterval(updateStoreStatus, 60000);
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
      

<a className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 bg-primary text-secondary px-6 md:px-8 py-3 md:py-4 rounded-full shadow-2xl flex items-center gap-3 hover:opacity-90 transition-opacity js-reveal duration-700 ease-out opacity-100 translate-y-0" href="#commander">
<span className="text-lg font-medium tracking-tight">Commander</span>
<iconify-icon className="text-xl md:text-2xl" icon="solar:bag-3-linear"></iconify-icon>
</a>

<header className="absolute top-0 left-0 w-full z-40 py-6 px-4 md:px-12 flex justify-between items-center text-secondary js-reveal transition-all duration-700 ease-out opacity-100 translate-y-0 opacity-0 translate-y-8">
<a className="flex items-center gap-4" href="#">
<span className="font-['Cormorant_Garamond'] text-2xl md:text-3xl tracking-tight uppercase font-medium">Rôtisserie Segar</span>
</a>
<nav className="hidden md:flex gap-8 text-lg">
<a className="hover:opacity-70 transition-opacity" href="#savoir-faire">Savoir-faire</a>
<a className="hover:opacity-70 transition-opacity" href="#carte">La Carte</a>
<a className="hover:opacity-70 transition-opacity" href="#merch">L'Esprit</a>
</nav>
</header>

<section className="min-h-[600px] flex text-center h-screen pr-4 pl-4 relative items-center justify-center">

<div className="z-10 bg-black/70 absolute top-0 right-0 bottom-0 left-0"></div>

<img alt="Poulet rôti au feu de bois" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/47db75e2-4093-44c7-9964-35c4eb0b4b55_1600w.webp"/>
<div className="z-20 text-secondary flex flex-col gap-8 max-w-4xl mt-16 relative items-center">

<img alt="Segar Logo" className="h-24 md:h-32 w-auto object-contain rounded-3xl js-reveal transition-all duration-700 ease-out opacity-100 translate-y-0 opacity-0 translate-y-8" src="https://ugc.zenchef.com/3/6/1/7/6/7/1/5/2/2/9/2/4/1687512651_308/a8ee556bbe090a78b4b2ceef7006fd15.png"/>

<div className="inline-flex gap-2.5 js-reveal transition-all duration-700 ease-out bg-black/40 border-white/20 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur-sm items-center opacity-100 translate-y-0 opacity-0 translate-y-8" id="store-status">
<span className="w-2.5 h-2.5 rounded-full bg-red-500" id="status-icon"></span>
<span className="text-sm font-medium tracking-wide uppercase" id="status-text">La rôtisserie est fermée</span>
</div>
<h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl lg:text-8xl tracking-tight font-normal italic leading-tight js-reveal transition-all duration-700 ease-out opacity-100 translate-y-0 opacity-0 translate-y-8">
                L’héritage du goût.<br/>La précision du feu.
            </h1>
<p className="md:text-xl lg:text-2xl js-reveal transition-all duration-700 ease-out text-lg font-normal opacity-90 max-w-2xl opacity-100 translate-y-0 opacity-0 translate-y-8">Poulet fermier élevé en plein air,<br className="hidden md:block"/>nourri au grain pendant 105 jours.</p>

<div className="mt-4 flex flex-col sm:flex-row gap-4 js-reveal transition-all duration-700 ease-out opacity-100 translate-y-0 opacity-0 translate-y-8">
<a className="inline-flex items-center justify-center bg-primary text-secondary border border-primary px-10 py-4 rounded-full text-lg font-medium transition-colors hover:bg-primary/90" href="#commander">
                    Commander
                </a>
<a className="inline-flex items-center justify-center bg-secondary text-primary px-10 py-4 rounded-full text-lg font-medium transition-colors hover:bg-white" href="#carte">
                    Découvrir la carte
                </a>
</div>
</div>
</section>

<section className="bg-primary text-secondary md:py-32 w-full pt-24 pb-24" id="savoir-faire">
<div className="w-full text-center mb-16 js-reveal transition-all duration-700 ease-out opacity-0 translate-y-8">
<img alt="Segar Logo" className="h-16 md:h-20 w-auto object-contain rounded-3xl mx-auto" src="https://ugc.zenchef.com/3/6/1/7/6/7/1/5/2/2/9/2/4/1687512651_308/a8ee556bbe090a78b4b2ceef7006fd15.png"/>
</div>
<div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
<div className="js-reveal transition-all duration-700 ease-out space-y-8 opacity-0 translate-y-8">
<h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl lg:text-6xl tracking-tight font-normal text-secondary">
                    Une tradition<br/><span className="italic">rôtie à la perfection</span>
</h2>
<div className="space-y-6 text-lg text-secondary/80 leading-relaxed">
<p className="">
                        Chez Segar, la rôtisserie n'est pas qu'un mode de cuisson, c'est un art hérité des grandes traditions culinaires françaises. Chaque volaille est sélectionnée avec une rigueur absolue avant de rencontrer le feu.
                    </p>
<p className="">
                        Le secret réside dans le temps : une cuisson lente à la broche qui dore la peau tout en préservant une chair d'une tendreté incomparable, imprégnée des sucs et des aromates.
                    </p>
</div>
<div className="pt-2">
<a className="inline-flex items-center justify-center bg-secondary text-primary px-8 py-3 rounded-full text-lg font-medium transition-colors hover:bg-white hover:opacity-100" href="#commander">
                        Commander
                    </a>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
<div className="p-5 md:p-6 border border-secondary/20 rounded-2xl flex flex-col gap-3 bg-white/5 js-reveal transition-all duration-700 ease-out opacity-0 translate-y-8">
<iconify-icon className="text-2xl text-secondary" icon="solar:leaf-linear"></iconify-icon>
<h3 className="font-['Cormorant_Garamond'] text-xl tracking-tight font-medium">Plein air</h3>
<p className="text-base text-secondary/70 leading-snug">Poulets fermiers élevés en liberté dans le respect du bien-être animal.</p>
</div>
<div className="p-5 md:p-6 border border-secondary/20 rounded-2xl flex flex-col gap-3 bg-white/5 js-reveal transition-all duration-700 ease-out">
<iconify-icon className="text-2xl text-secondary" icon="solar:sun-2-linear"></iconify-icon>
<h3 className="font-['Cormorant_Garamond'] text-xl tracking-tight font-medium">150 Jours</h3>
<p className="text-base text-secondary/70 leading-snug">Une alimentation saine au grain pour une chair ferme et savoureuse.</p>
</div>
<div className="p-5 md:p-6 border border-secondary/20 rounded-2xl flex flex-col gap-3 bg-white/5 js-reveal transition-all duration-700 ease-out">
<iconify-icon className="text-2xl text-secondary" icon="solar:fire-linear"></iconify-icon>
<h3 className="font-['Cormorant_Garamond'] text-xl tracking-tight font-medium">À la broche</h3>
<p className="text-base text-secondary/70 leading-snug">Cuisson lente et maîtrisée pour une peau dorée et croustillante.</p>
</div>
<div className="p-5 md:p-6 border border-secondary/20 rounded-2xl flex flex-col gap-3 bg-white/5 js-reveal transition-all duration-700 ease-out">
<iconify-icon className="text-2xl text-secondary" icon="solar:medal-star-linear"></iconify-icon>
<h3 className="font-['Cormorant_Garamond'] text-xl tracking-tight font-medium">Excellence</h3>
<p className="text-base text-secondary/70 leading-snug">Un approvisionnement exigeant, digne des plus grandes tables.</p>
</div>
</div>
</div>
</section>

<section className="md:py-32 md:px-8 bg-white w-full max-w-4xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4" id="carte">
<div className="text-center mb-16 space-y-4 js-reveal transition-all duration-700 ease-out">
<img alt="Segar Logo" className="h-16 md:h-20 w-auto object-contain rounded-3xl mx-auto mb-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cff91ae1-3ffe-4122-874c-f3639bae0302_1600w.png"/>
<h4 className="font-['Cormorant_Garamond'] text-xl md:text-2xl tracking-widest uppercase text-primary/60 font-medium">Rôtisserie Segar</h4>
<h2 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl tracking-tight font-normal italic text-primary">Menu printanier</h2>
</div>
<div className="text-primary md:text-2xl text-xl font-semibold italic font-['Cormorant_Garamond'] space-y-12">

<div className="js-reveal transition-all duration-700 ease-out space-y-4">
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
<span className="font-semibold italic">Rillettes de poulet rôti, moutarde &amp; thym frais</span>
<span className="font-semibold italic whitespace-nowrap">32€/kg</span>
</div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
<span className="font-semibold italic">Rillettes de poulet rôti, estragon &amp; citron</span>
<span className="whitespace-nowrap font-semibold italic">32€/kg</span>
</div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
<span className="font-semibold italic">Terrine de poulet, champignons, oignons caramélisés, persil</span>
<span className="font-semibold italic whitespace-nowrap">30€/kg</span>
</div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
<span className="font-semibold italic">Terrine de poulet, tomates séchées, basilic, thym</span>
<span className="font-semibold italic whitespace-nowrap">32€/kg</span>
</div>
</div>
<div className="text-center text-primary/40 text-3xl tracking-widest js-reveal transition-all duration-700 ease-out">***</div>

<div className="js-reveal transition-all duration-700 ease-out space-y-4">
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
<span className="font-semibold italic">Poulet rôti des Landes élevé en plein air</span>
<span className="font-semibold italic whitespace-nowrap">19,90€/kg</span>
</div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
<span className="font-semibold italic">Fenouil braisé à l'orange et basilic</span>
<span className="font-semibold italic whitespace-nowrap">23€/kg</span>
</div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
<span className="font-semibold italic">Petits pois, carottes fanes, oignons caramélisés &amp; laurier</span>
<span className="font-semibold italic whitespace-nowrap">25€/kg</span>
</div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
<span className="font-semibold italic">Pomme de terre grenaille aux herbes</span>
<span className="font-semibold italic whitespace-nowrap">18€/kg</span>
</div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
<span className="font-semibold italic">Poêlée de champignons au laurier</span>
<span className="whitespace-nowrap font-semibold italic">23€/kg</span>
</div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
<span className="text-primary/80 font-semibold italic">Purée de pomme de terre (week-end uniquement)</span>
<span className="whitespace-nowrap font-semibold italic">14€/kg</span>
</div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
<span className="font-semibold italic">Carottes rôties aux épices, laquage miel, romarin &amp; poivre</span>
<span className="whitespace-nowrap font-semibold italic">23€/kg</span>
</div>
</div>
<div className="text-center text-primary/40 text-3xl tracking-widest js-reveal transition-all duration-700 ease-out">***</div>

<div className="space-y-4 js-reveal transition-all duration-700 ease-out">
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
<span className="font-semibold italic">Sandwich poulet rôti, mayo</span>
<span className="font-semibold italic whitespace-nowrap">6,50€</span>
</div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
<span className="font-semibold italic">Sandwich poulet rôti, mayo au curry</span>
<span className="font-semibold italic whitespace-nowrap">6,50€</span>
</div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
<span className="font-semibold italic">Sandwich poulet rôti façon César</span>
<span className="font-semibold italic whitespace-nowrap">8€</span>
</div>
</div>
<div className="text-center text-primary/40 text-3xl tracking-widest js-reveal transition-all duration-700 ease-out">***</div>

<div className="space-y-4 js-reveal transition-all duration-700 ease-out opacity-0 translate-y-8">
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
<span className="font-semibold italic">Fraises &amp; chantilly maison</span>
<span className="font-semibold italic whitespace-nowrap">5€/portion</span>
</div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
<span className="font-semibold italic">Mousse au chocolat</span>
<span className="font-semibold italic whitespace-nowrap">27€/kg</span>
</div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
<span className="font-semibold italic">Crumble pommes, fraises &amp; speculoos</span>
<span className="font-semibold italic whitespace-nowrap">22€/kg</span>
</div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
<span className="font-semibold italic">Tarte aux fruits de saison</span>
<span className="font-semibold italic whitespace-nowrap">5€/part</span>
</div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
<span className="font-semibold italic">Riz au lait vanille de Madagascar</span>
<span className="font-semibold italic whitespace-nowrap">25€/kg</span>
</div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
<span className="italic text-primary/80 font-semibold">Tarte tatin (week-end uniquement)</span>
<span className="font-semibold italic whitespace-nowrap">5€/part 30€/entière</span>
</div>
</div>
</div>
<div className="mt-20 text-center js-reveal transition-all duration-700 ease-out opacity-0 translate-y-8">
<br/>
<a className="inline-flex items-center justify-center border-2 border-primary text-primary px-10 py-4 rounded-full text-lg font-medium hover:bg-primary hover:text-secondary transition-colors" href="#commander">
                Passer commande
            </a>
</div>
</section>

<section className="py-24 bg-primary text-secondary text-center px-4">
<div className="max-w-4xl mx-auto space-y-12">
<img alt="Segar Logo" className="h-16 md:h-20 w-auto object-contain rounded-3xl mx-auto js-reveal transition-all duration-700 ease-out opacity-0 translate-y-8" src="https://ugc.zenchef.com/3/6/1/7/6/7/1/5/2/2/9/2/4/1687512651_308/a8ee556bbe090a78b4b2ceef7006fd15.png"/>
<h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl lg:text-6xl tracking-tight italic font-normal js-reveal transition-all duration-700 ease-out opacity-0 translate-y-8">
                "Le goût du dimanche,<br/>tous les jours."
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-secondary/20 js-reveal transition-all duration-700 ease-out opacity-0 translate-y-8">
<div className="">
<h3 className="font-['Cormorant_Garamond'] text-2xl tracking-tight font-medium mb-3">Rapidité</h3>
<p className="text-lg opacity-80">Votre commande prête à l'heure, sans attente.</p>
</div>
<div>
<h3 className="font-['Cormorant_Garamond'] text-2xl tracking-tight font-medium mb-3">Qualité Constante</h3>
<p className="text-lg opacity-80">L'excellence garantie à chaque visite.</p>
</div>
<div className="">
<h3 className="font-['Cormorant_Garamond'] text-2xl tracking-tight font-medium mb-3">Authenticité</h3>
<p className="text-lg opacity-80">Les vraies saveurs de la rôtisserie française.</p>
</div>
</div>
</div>
</section>

<section className="border-primary/10 bg-white border-t pt-24 pb-24" id="merch">
<div className="md:px-8 max-w-6xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-16 js-reveal transition-all duration-700 ease-out opacity-0 translate-y-8">
<img alt="Segar Logo" className="h-16 md:h-20 w-auto object-contain rounded-3xl mx-auto mb-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/afb06b50-0e20-42cf-bd68-92faf94bd345_1600w.png"/>
<h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl tracking-tight font-normal text-primary">L'esprit Segar</h2>
<p className="text-lg text-primary/70 mt-4 max-w-2xl mx-auto">Portez les couleurs de la tradition. Une collection d'objets lifestyle pensés avec la même exigence que notre cuisine.</p>
</div>
<div className="max-w-md mx-auto bg-white rounded-3xl overflow-hidden border border-primary/10 shadow-sm group js-reveal transition-all duration-700 ease-out opacity-0 translate-y-8">
<div className="aspect-square relative flex items-center justify-center p-12 bg-white">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&amp;w=2080&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"></div>
<div className="relative z-10 w-full h-full border-2 border-primary/20 flex flex-col items-center justify-center gap-6">
<span className="font-['Cormorant_Garamond'] text-primary text-2xl tracking-widest uppercase">Segar</span>
<span className="bg-primary text-secondary px-6 py-2 text-sm font-medium tracking-widest">COMMANDER</span>
</div>
</div>
<div className="p-8 text-center bg-white">
<h3 className="font-['Cormorant_Garamond'] text-2xl tracking-tight font-medium mb-2">T-Shirt Signature</h3>
<p className="text-lg text-primary/60 mb-6">Coton biologique lourd, coupe minimaliste.</p>
<button className="text-primary font-medium text-lg border-b border-primary pb-1 hover:opacity-70 transition-opacity">Ajouter au panier — 45€</button>
</div>
</div>
</div>
</section>

<footer className="bg-primary text-secondary mt-auto">
<div className="md:px-12 md:py-24 max-w-7xl mr-auto ml-auto pt-20 pr-4 pb-20 pl-4">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

<div className="space-y-6 lg:col-span-1 js-reveal transition-all duration-700 ease-out opacity-0 translate-y-8">
<img alt="Segar Logo" className="h-12 md:h-16 w-auto object-contain rounded-3xl" src="https://ugc.zenchef.com/3/6/1/7/6/7/1/5/2/2/9/2/4/1687512651_308/a8ee556bbe090a78b4b2ceef7006fd15.png"/>
<p className="text-lg opacity-80 max-w-xs">
                        La rôtisserie traditionnelle française, revisitée avec exigence. Click &amp; Collect disponible.
                    </p>
<div className="flex gap-4 pt-4">
<a className="hover:opacity-70 transition-opacity" href="#"><iconify-icon className="text-2xl" icon="solar:camera-linear"></iconify-icon></a>
<a className="hover:opacity-70 transition-opacity" href="#"><iconify-icon className="text-2xl" icon="solar:global-linear"></iconify-icon></a>
</div>
</div>

<div className="space-y-6 js-reveal transition-all duration-700 ease-out opacity-0 translate-y-8">
<h3 className="font-['Cormorant_Garamond'] text-2xl tracking-tight font-medium text-secondary/60">Contact</h3>
<div className="space-y-4 text-lg">
<p className="flex items-start gap-3">
<iconify-icon className="text-xl mt-1 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span className="">111 Rue Mouffetard,<br/>75005 Paris</span>
</p>
<p className="flex items-center gap-3">
<iconify-icon className="text-xl shrink-0" icon="solar:phone-linear"></iconify-icon>
<span className="">09 87 78 01 21</span>
</p>
</div>
</div>

<div className="lg:col-span-2 js-reveal transition-all duration-700 ease-out space-y-6 opacity-0 translate-y-8" style={{transitionDelay: '300ms'}}>
<h3 className="font-['Cormorant_Garamond'] text-2xl tracking-tight font-medium text-secondary/60">Horaires</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 text-lg gap-x-8 gap-y-3">
<div className="flex justify-between border-b border-secondary/10 pb-2">
<span className="opacity-80">Lundi</span>
<span className="font-medium">Fermé</span>
</div>
<div className="flex justify-between border-b border-secondary/10 pb-2">
<span className="opacity-80">Dimanche</span>
<span className="font-medium">10:00–14:00</span>
</div><div className="flex border-secondary/10 border-b pb-2 justify-between">
<span className="opacity-80">Mardi à Samedi</span>
<span className="font-medium text-right">10:30–14:00 <br/> 
16:30–19:30</span>
</div>
</div>
</div>
</div>
<div className="mt-20 pt-8 border-t border-secondary/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60 js-reveal transition-all duration-700 ease-out opacity-0 translate-y-8">
<p className="">© 2026 Rôtisserie Segar. Tous droits réservés.</p>
<div className="flex gap-6">
<a className="hover:underline" href="#">Mentions légales</a>
<a className="hover:underline" href="#">CGV</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
