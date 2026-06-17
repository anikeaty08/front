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



(function () {
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => {
initInViewAnimations();
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



            (function() {
              const container = document.getElementById('card-grid-container');
              if(!container) return;
              const cards = container.querySelectorAll('.card-item');
              let activeCard = null;

              cards.forEach((card) => {
                card.addEventListener('click', function(e) {
                  e.stopPropagation();
                  if (activeCard === card) {
                    resetCards();
                    return;
                  }
                  cards.forEach((c) => {
                    c.style.filter = 'blur(6px) grayscale(30%)';
                    c.style.opacity = '0.4';
                    c.style.transform = '';
                    c.style.position = 'relative';
                    c.style.zIndex = '1';
                    c.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
                  });

                  card.style.filter = 'blur(0px) grayscale(0%)';
                  card.style.opacity = '1';
                  card.style.transform = 'translate(0, -15px) rotate(0deg) scale(1.15)';
                  card.style.position = 'relative';
                  card.style.zIndex = '10';
                  card.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';

                  activeCard = card;
                });
              });

              document.addEventListener('click', function(e) {
                if (activeCard && !container.contains(e.target)) resetCards();
              });

              function resetCards() {
                cards.forEach((c) => {
                  c.style.filter = '';
                  c.style.opacity = '';
                  c.style.transform = '';
                  c.style.position = '';
                  c.style.zIndex = '';
                });
                activeCard = null;
              }
            })();
          


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
      

<div className="fixed inset-0 z-[-1] h-full w-full bg-slate-50 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
<div className="absolute inset-0 bg-slate-50 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_20%,#000_100%)]"></div>
</div>

<div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
<div className="absolute left-[20%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#DD88CF] opacity-[0.08] mix-blend-multiply blur-[100px]"></div>
<div className="absolute right-[20%] top-[20%] h-[400px] w-[400px] rounded-full bg-[#4B164C] opacity-[0.05] mix-blend-multiply blur-[100px]"></div>
</div>

<header className="fixed z-50 top-0 right-0 left-0 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex h-16 items-center justify-between">
<a className="inline-flex items-center gap-2.5 text-xl tracking-tight font-medium text-slate-900 hover:opacity-80 transition-opacity" href="#">
<img alt="Heyama Logo" className="w-8 h-8 object-contain drop-shadow-sm" src="https://asset-pub.heyama.app/images/logo-heyama.png"/>
            Heyama
          </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#features">
              Avantages
            </a>
<a className="hover:text-slate-900 transition-colors" href="#experience">
              L'expérience
            </a>
<a className="hover:text-slate-900 transition-colors" href="#reviews">
              Témoignages
            </a>
</nav>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-lg bg-black px-3 py-1.5 text-white hover:bg-slate-800 transition-colors" href="#">
<i className="w-5 h-5 fill-current" data-lucide="apple"></i>
<div className="flex flex-col text-left">
<span className="text-[9px] leading-none text-slate-300 font-normal">
                    Download on the
                  </span>
<span className="text-[13px] leading-tight font-medium">
                    App Store
                  </span>
</div>
</a>
<a className="inline-flex items-center gap-2 rounded-lg bg-black px-3 py-1.5 text-white hover:bg-slate-800 transition-colors" href="#">
<i className="w-5 h-5 fill-current" data-lucide="play"></i>
<div className="flex flex-col text-left">
<span className="text-[9px] leading-none text-slate-300 font-normal">
                    GET IT ON
                  </span>
<span className="text-[13px] leading-tight font-medium">
                    Google Play
                  </span>
</div>
</a>
</div>
<button aria-label="Menu" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition md:hidden">
<i className="w-5 h-5" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</header>
<main className="relative">

<section className="pb-32 pt-40 max-w-7xl mx-auto px-6">
<div className="relative">
<div className="mx-auto max-w-4xl text-center" style={{animation: 'fadeSlideIn 1s ease-out 0.1s both'}}>
<h1 className="text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight font-medium text-slate-900">
              Rencontrez l'amour,
              <span className="block bg-gradient-to-r from-[#CA73D8] to-[#9C3AB0] bg-clip-text text-transparent tracking-tight font-medium">
                sans compromis.
              </span>
</h1>
</div>

<div className="mt-16 max-w-5xl mx-auto relative" style={{animation: 'fadeSlideIn 1s ease-out 0.3s both'}}>

<div className="absolute -top-6 sm:-top-8 left-[10%] sm:left-[14%] z-50">
<div className="relative">
<span className="inline-flex items-center gap-2 border border-slate-200/60 text-sm font-medium text-[#9C3AB0] bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  100% Vérifié
                  <i className="w-4 h-4 text-emerald-500" data-lucide="shield-check" strokeWidth="1.5"></i>
</span>
</div>
</div>
<div className="absolute -top-4 sm:-top-6 right-[8%] sm:right-[12%] z-50">
<div className="relative">
<span className="inline-flex items-center gap-2 border border-slate-200/60 text-sm font-medium text-[#CA73D8] bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  0 Abonnement
                  <i className="w-4 h-4" data-lucide="wallet" strokeWidth="1.5"></i>
</span>
</div>
</div>

<div className="flex justify-center px-4">
<div className="grid grid-cols-6 gap-3 sm:gap-5 w-full max-w-4xl" id="card-grid-container">

<div className="card-item col-span-2 sm:col-span-1 self-end transform -rotate-6 translate-y-4 transition-all duration-700 ease-out cursor-pointer hover:scale-105">
<div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-slate-900/5 shadow-xl bg-white relative">
<img alt="Couple laughing" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>

<div className="card-item col-span-2 sm:col-span-1 self-end transform -rotate-2 translate-y-8 transition-all duration-700 ease-out cursor-pointer hover:scale-105">
<div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-slate-900/5 shadow-xl bg-white relative">
<img alt="Couple hugging" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1531123414780-f74242c2b052?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>

<div className="card-item col-span-2 sm:col-span-1 self-end transform rotate-3 translate-y-2 transition-all duration-700 ease-out cursor-pointer hover:scale-105">
<div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-slate-900/5 shadow-xl bg-white relative">
<img alt="Couple on phone" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1573497161161-c3e73707e25c?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>

<div className="card-item col-span-2 sm:col-span-1 self-end transform rotate-1 -translate-y-2 transition-all duration-700 ease-out cursor-pointer hover:scale-105">
<div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-slate-900/5 shadow-xl bg-white relative">
<img alt="Young woman smiling" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1622023459113-9b195477d9c4?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>

<div className="card-item col-span-2 sm:col-span-1 self-end transform -rotate-3 translate-y-4 transition-all duration-700 ease-out cursor-pointer hover:scale-105">
<div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-slate-900/5 shadow-xl bg-white relative">
<img alt="Young man" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>

<div className="card-item col-span-2 sm:col-span-1 self-end transform rotate-6 translate-y-7 transition-all duration-700 ease-out cursor-pointer hover:scale-105">
<div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-slate-900/5 shadow-xl bg-white relative">
<img alt="Couple walking" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1516624683217-bf02fc6b6b7c?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>
</div>
</div>
</div>

<p className="mx-auto mt-16 max-w-2xl text-center text-lg sm:text-xl text-slate-600 font-normal leading-relaxed" style={{animation: 'fadeSlideIn 1s ease-out 0.5s both'}}>
            La première application de rencontre pensée pour des connexions
            authentiques. Échangez et vibrez avec des profils qui partagent
            votre culture.
          </p>

<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" style={{animation: 'fadeSlideIn 1s ease-out 0.7s both'}}>
<a className="inline-flex items-center gap-3 rounded-2xl bg-slate-900 px-6 py-3.5 text-base font-medium text-white hover:bg-slate-800 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.1)] w-full sm:w-auto justify-center" href="#">
<i className="w-6 h-6" data-lucide="apple" strokeWidth="1.5"></i>
<div className="flex flex-col text-left">
<span className="text-xs leading-none text-slate-400 font-normal">
                  Download on the
                </span>
<span className="text-base leading-tight">App Store</span>
</div>
</a>
<a className="inline-flex items-center gap-3 rounded-2xl bg-white ring-1 ring-slate-200/60 px-6 py-3.5 text-base font-medium text-slate-900 hover:bg-slate-50 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.05)] w-full sm:w-auto justify-center" href="#">
<i className="w-6 h-6 text-slate-700" data-lucide="smartphone" strokeWidth="1.5"></i>
<div className="flex flex-col text-left">
<span className="text-xs leading-none text-slate-500 font-normal">
                  GET IT ON
                </span>
<span className="text-base leading-tight">Google Play</span>
</div>
</a>
</div>
</div>
</section>
<div className="mx-auto max-w-7xl px-6">
<div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
</div>

<section className="py-32 max-w-7xl mx-auto px-6 animate-on-scroll" id="features">
<div className="text-center max-w-3xl mx-auto has-stagger mb-20">
<span className="inline-flex items-center ring-1 ring-slate-200 bg-white text-slate-600 text-xs font-medium rounded-full px-4 py-1.5 uppercase tracking-wider shadow-sm">
            Pourquoi Heyama ?
          </span>
<h2 className="text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight font-medium text-slate-900 mt-8">
            L'amour sans tracas,
            <br/>
            tout simplement.
          </h2>
<p className="text-slate-600 mt-6 text-lg sm:text-xl leading-relaxed font-normal">
            Nous avons réinventé la rencontre pour la rendre authentique,
            gratuite et centrée sur ce qui compte vraiment.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 has-stagger relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-tr from-[#CA73D8]/10 to-[#9C3AB0]/10 blur-[100px] -z-10 rounded-full"></div>
<div className="group relative p-8 sm:p-10 bg-white/60 backdrop-blur-xl ring-1 ring-slate-200/60 rounded-[2.5rem] hover:ring-[#CA73D8]/40 hover:bg-white/90 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(202,115,216,0.15)] md:translate-y-8">
<div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#CA73D8]/10 to-[#9C3AB0]/10 text-[#9C3AB0] flex items-center justify-center mb-8 ring-1 ring-[#9C3AB0]/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
<i className="w-7 h-7" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl tracking-tight font-medium text-slate-900 mb-4">
              Profils 100% Vérifiés
            </h3>
<p className="text-slate-600 text-lg leading-relaxed font-normal">
              Fini les faux profils et les mauvaises surprises. Notre IA de
              vérification faciale garantit que chaque personne est réelle.
              Rencontrez en toute sérénité.
            </p>
</div>
<div className="group relative p-8 sm:p-10 bg-white/60 backdrop-blur-xl ring-1 ring-slate-200/60 rounded-[2.5rem] hover:ring-[#9C3AB0]/40 hover:bg-white/90 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(156,58,176,0.15)]">
<div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#9C3AB0]/10 to-[#4B164C]/10 text-[#4B164C] flex items-center justify-center mb-8 ring-1 ring-[#4B164C]/20 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
<i className="w-7 h-7" data-lucide="wallet" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl tracking-tight font-medium text-slate-900 mb-4">
              Zéro Abonnement Caché
            </h3>
<p className="text-slate-600 text-lg leading-relaxed font-normal">
              L'amour n'a pas de prix. Profitez des fonctionnalités essentielles
              gratuitement. Matcher, discuter et rencontrer sans jamais sortir
              votre carte bancaire.
            </p>
</div>
<div className="group relative p-8 sm:p-10 bg-white/60 backdrop-blur-xl ring-1 ring-slate-200/60 rounded-[2.5rem] hover:ring-indigo-500/40 hover:bg-white/90 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.15)] md:translate-y-8">
<div className="h-14 w-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-8 ring-1 ring-indigo-100 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
<i className="w-7 h-7" data-lucide="calendar" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl tracking-tight font-medium text-slate-900 mb-4">
              Nouveaux Profils Chaque Jour
            </h3>
<p className="text-slate-600 text-lg leading-relaxed font-normal">
              Notre communauté grandit à une vitesse folle. Découvrez chaque
              jour une sélection fraîche de célibataires près de chez vous,
              prêts à échanger.
            </p>
</div>
<div className="group relative p-8 sm:p-10 bg-white/60 backdrop-blur-xl ring-1 ring-slate-200/60 rounded-[2.5rem] hover:ring-rose-500/40 hover:bg-white/90 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(244,63,94,0.15)]">
<div className="h-14 w-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-8 ring-1 ring-rose-100 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
<i className="w-7 h-7" data-lucide="wand-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl tracking-tight font-medium text-slate-900 mb-4">
              Affinités Culturelles
            </h3>
<p className="text-slate-600 text-lg leading-relaxed font-normal">
              On ne matche pas qu'avec une photo, on matche avec une culture,
              des valeurs et des passions communes. Laissez notre algorithme
              faire la magie.
            </p>
</div>
</div>
</section>
<section className="py-32 max-w-7xl mx-auto px-6 animate-on-scroll" id="experience">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center has-stagger">
<div>
<span className="inline-flex items-center ring-1 ring-slate-200 bg-white text-slate-600 text-xs font-medium rounded-full px-4 py-1.5 uppercase tracking-wider">
              L'expérience
            </span>
<h2 className="text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight font-medium text-slate-900 mt-8">
              Conçu pour que vous le supprimiez.
            </h2>
<p className="text-slate-600 mt-6 text-lg sm:text-xl leading-relaxed font-normal">
              Notre objectif ? Faire en sorte que vous n'ayez plus jamais besoin
              de nous. En mettant l'accent sur la qualité des profils plutôt que
              la quantité, Heyama vous aide à aller directement à l'essentiel :
              la vraie connexion.
            </p>
<ul className="mt-10 space-y-5">
<li className="flex items-center gap-4 text-slate-900 font-medium text-lg">
<i className="w-6 h-6 text-slate-400" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                Des suggestions de dates originales
              </li>
<li className="flex items-center gap-4 text-slate-900 font-medium text-lg">
<i className="w-6 h-6 text-slate-400" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                Filtres de recherche avancés inclus
              </li>
<li className="flex items-center gap-4 text-slate-900 font-medium text-lg">
<i className="w-6 h-6 text-slate-400" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                Des événements exclusifs membres
              </li>
</ul>
</div>
<div className="relative">
<div className="aspect-[4/5] rounded-[2rem] bg-slate-100 overflow-hidden ring-1 ring-slate-200/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative">
<img alt="App experience" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1516624683217-bf02fc6b6b7c?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex items-end p-6 sm:p-8">
<div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 w-full flex items-center gap-4 shadow-xl ring-1 ring-slate-200/50">
<div className="h-12 w-12 rounded-full bg-slate-200 overflow-hidden shrink-0 ring-1 ring-slate-200">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531123414780-f74242c2b052?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div className="flex-1 min-w-0">
<p className="text-base font-medium text-slate-900 truncate">
                      Nouveau Match !
                    </p>
<p className="text-sm text-slate-500 mt-0.5 truncate font-normal">
                      Vous et David avez liké vos profils.
                    </p>
</div>
<button className="h-10 w-10 shrink-0 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-colors shadow-sm">
<i className="w-5 h-5" data-lucide="message-circle" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden border-y border-slate-200/60 bg-slate-900 py-32 relative text-white animate-on-scroll">
<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute -top-[25%] -left-[10%] w-[50%] h-[50%] bg-[#CA73D8] opacity-20 blur-[120px] rounded-full mix-blend-screen"></div>
<div className="absolute -bottom-[25%] -right-[10%] w-[50%] h-[50%] bg-[#9C3AB0] opacity-20 blur-[120px] rounded-full mix-blend-screen"></div>
</div>
<div className="text-center max-w-4xl mx-auto px-6 mb-16 relative z-10 has-stagger">
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-medium text-white mb-6">
            Rejoignez une communauté
            <span className="italic font-light text-[#CA73D8]">vibrante</span>
</h2>
<p className="text-lg text-slate-300 max-w-2xl mx-auto font-normal">
            Des milliers de célibataires authentiques vous attendent. Découvrez
            des profils inspirants et partagez plus qu'un simple match.
          </p>
</div>
<div className="relative w-full flex flex-col gap-6" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="flex w-max gap-6 pl-10" style={{animation: 'marquee-left 40s linear infinite'}}>
<div className="flex gap-6">
<img alt="User" className="h-64 w-48 object-cover rounded-3xl ring-1 ring-white/10 shadow-2xl hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="User" className="h-80 w-60 object-cover rounded-3xl ring-1 ring-white/10 shadow-2xl -translate-y-6 hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="User" className="h-64 w-48 object-cover rounded-3xl ring-1 ring-white/10 shadow-2xl hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="User" className="h-72 w-56 object-cover rounded-3xl ring-1 ring-white/10 shadow-2xl translate-y-4 hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="User" className="h-64 w-48 object-cover rounded-3xl ring-1 ring-white/10 shadow-2xl hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="User" className="h-80 w-60 object-cover rounded-3xl ring-1 ring-white/10 shadow-2xl -translate-y-4 hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="flex gap-6">
<img alt="User" className="h-64 w-48 object-cover rounded-3xl ring-1 ring-white/10 shadow-2xl hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="User" className="h-80 w-60 object-cover rounded-3xl ring-1 ring-white/10 shadow-2xl -translate-y-6 hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="User" className="h-64 w-48 object-cover rounded-3xl ring-1 ring-white/10 shadow-2xl hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="User" className="h-72 w-56 object-cover rounded-3xl ring-1 ring-white/10 shadow-2xl translate-y-4 hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="User" className="h-64 w-48 object-cover rounded-3xl ring-1 ring-white/10 shadow-2xl hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="User" className="h-80 w-60 object-cover rounded-3xl ring-1 ring-white/10 shadow-2xl -translate-y-4 hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
</div>
<div className="flex w-max gap-6 pr-10" style={{animation: 'marquee-left 50s linear infinite reverse'}}>
<div className="flex gap-6">
<img alt="User" className="h-72 w-56 object-cover rounded-3xl ring-1 ring-white/10 shadow-2xl hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1531123414780-f74242c2b052?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="User" className="h-64 w-48 object-cover rounded-3xl ring-1 ring-white/10 shadow-2xl translate-y-6 hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="User" className="h-80 w-60 object-cover rounded-3xl ring-1 ring-white/10 shadow-2xl hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1573497161161-c3e73707e25c?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="User" className="h-64 w-48 object-cover rounded-3xl ring-1 ring-white/10 shadow-2xl -translate-y-4 hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1622023459113-9b195477d9c4?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="User" className="h-72 w-56 object-cover rounded-3xl ring-1 ring-white/10 shadow-2xl hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1516624683217-bf02fc6b6b7c?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="User" className="h-64 w-48 object-cover rounded-3xl ring-1 ring-white/10 shadow-2xl translate-y-4 hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="flex gap-6">
<img alt="User" className="h-72 w-56 object-cover rounded-3xl ring-1 ring-white/10 shadow-2xl hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1531123414780-f74242c2b052?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="User" className="h-64 w-48 object-cover rounded-3xl ring-1 ring-white/10 shadow-2xl translate-y-6 hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="User" className="h-80 w-60 object-cover rounded-3xl ring-1 ring-white/10 shadow-2xl hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1573497161161-c3e73707e25c?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="User" className="h-64 w-48 object-cover rounded-3xl ring-1 ring-white/10 shadow-2xl -translate-y-4 hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1622023459113-9b195477d9c4?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="User" className="h-72 w-56 object-cover rounded-3xl ring-1 ring-white/10 shadow-2xl hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1516624683217-bf02fc6b6b7c?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="User" className="h-64 w-48 object-cover rounded-3xl ring-1 ring-white/10 shadow-2xl translate-y-4 hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden animate-on-scroll" id="reviews">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-20 has-stagger">
<h2 className="text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight font-medium text-slate-900">
              L'amour, le vrai,
              <br/>
              commence ici.
            </h2>
<p className="mt-6 text-lg sm:text-xl text-slate-600 font-normal">
              Des milliers d'histoires s'écrivent chaque jour sur Heyama.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start has-stagger">

<div className="flex flex-col gap-6 lg:gap-8 md:mt-0">

<div className="p-8 rounded-[2rem] bg-white ring-1 ring-slate-200/60 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="flex items-center gap-1 mb-6 text-slate-900">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-slate-700 text-lg leading-relaxed font-normal">
                  "Je n'y croyais plus trop, mais Heyama est différent.
                  L'ambiance est respectueuse et j'ai pu rencontrer quelqu'un
                  qui partage mes valeurs dès le premier jour."
                </p>
<div className="mt-8 flex items-center gap-4 pt-6 border-t border-slate-100">
<div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-medium text-sm ring-1 ring-slate-200/60">
                    M
                  </div>
<div>
<p className="text-base font-medium text-slate-900 leading-tight">
                      Marc &amp; Aminata
                    </p>
<p className="text-sm text-slate-500 mt-1 font-normal">
                      Ensemble depuis 6 mois
                    </p>
</div>
</div>
</div>

<div className="p-8 rounded-[2rem] bg-slate-900 text-white shadow-xl relative overflow-hidden group">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 blur-3xl rounded-full"></div>
<div className="flex items-center gap-1 mb-6 text-white relative z-10">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-slate-300 text-lg leading-relaxed font-normal relative z-10">
                  "L'algorithme a fait mouche ! On s'est rendu compte qu'on
                  écoutait les mêmes artistes. Une app qui comprend enfin notre
                  culture."
                </p>
<div className="mt-8 flex items-center gap-4 pt-6 border-t border-white/10 relative z-10">
<div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white font-medium text-sm ring-1 ring-white/20">
                    J&amp;K
                  </div>
<div>
<p className="text-base font-medium text-white leading-tight">
                      Jonathan &amp; Ketsia
                    </p>
<p className="text-sm text-slate-400 mt-1 font-normal">
                      Fiancés grâce à Heyama
                    </p>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6 lg:gap-8 md:mt-16">

<div className="p-8 rounded-[2rem] bg-white ring-1 ring-slate-200/60 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="flex items-center gap-1 mb-6 text-slate-900">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-slate-700 text-lg leading-relaxed font-normal">
                  "Le système de vérification rassure énormément. J'ai eu de
                  vraies conversations profondes très rapidement. L'interface
                  est super fluide et moderne."
                </p>
<div className="mt-8 flex items-center gap-4 pt-6 border-t border-slate-100">
<img alt="Sarah" className="w-10 h-10 object-cover rounded-full ring-1 ring-slate-200/60" src="https://images.unsplash.com/photo-1531123414780-f74242c2b052?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div>
<p className="text-base font-medium text-slate-900 leading-tight">
                      Sarah, 26 ans
                    </p>
<p className="text-sm text-slate-500 mt-1 font-normal">
                      Utilisatrice depuis 2 mois
                    </p>
</div>
</div>
</div>

<div className="p-8 rounded-[2rem] bg-white ring-1 ring-slate-200/60 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="flex items-center gap-1 mb-6 text-slate-900">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-slate-700 text-lg leading-relaxed font-normal">
                  "Enfin une app où on se sent compris. Les profils sont de
                  qualité et l'absence d'abonnement abusif est un vrai souffle
                  d'air frais. Recommandé à 100%."
                </p>
<div className="mt-8 flex items-center gap-4 pt-6 border-t border-slate-100">
<div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-medium text-sm ring-1 ring-slate-200/60">
                    L
                  </div>
<div>
<p className="text-base font-medium text-slate-900 leading-tight">
                      Lucas D.
                    </p>
<p className="text-sm text-slate-500 mt-1 font-normal">
                      Match en 3 jours
                    </p>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6 lg:gap-8 md:mt-32">

<div className="p-8 rounded-[2rem] bg-white ring-1 ring-slate-200/60 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="flex items-center gap-1 mb-6 text-slate-900">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-slate-700 text-lg leading-relaxed font-normal">
                  "J'adore le design et la fluidité. C'est clair, net et précis.
                  J'ai rencontré ma partenaire actuelle dessus et on ne s'est
                  plus quittés depuis."
                </p>
<div className="mt-8 flex items-center gap-4 pt-6 border-t border-slate-100">
<img alt="Kevin" className="w-10 h-10 object-cover rounded-full ring-1 ring-slate-200/60" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div>
<p className="text-base font-medium text-slate-900 leading-tight">
                      Kevin M.
                    </p>
<p className="text-sm text-slate-500 mt-1 font-normal">
                      Heureux en couple
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden animate-on-scroll">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="relative rounded-[3rem] bg-slate-900 px-8 py-20 sm:p-24 overflow-hidden text-center shadow-2xl">
<div className="absolute -top-32 -left-32 w-96 h-96 bg-[#CA73D8] opacity-20 blur-[100px] rounded-full mix-blend-screen"></div>
<div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#9C3AB0] opacity-20 blur-[100px] rounded-full mix-blend-screen"></div>
<div className="relative z-10 flex flex-col items-center has-stagger">
<h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight font-medium text-white mb-6">
                L'amour n'attend plus que vous.
              </h2>
<p className="text-slate-300 max-w-xl mx-auto text-lg sm:text-xl font-normal mb-10 leading-relaxed">
                Rejoignez des milliers de célibataires qui ont déjà trouvé leur
                partenaire idéal sur Heyama. L'inscription est rapide et 100%
                gratuite.
              </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
<a className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-base font-medium text-slate-900 hover:bg-slate-50 transition-all hover:scale-105 duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1)] w-full sm:w-auto justify-center" href="#">
<i className="w-6 h-6" data-lucide="apple" strokeWidth="1.5"></i>
<div className="flex flex-col text-left">
<span className="text-xs leading-none text-slate-500 font-normal">
                      Download on the
                    </span>
<span className="text-base leading-tight">App Store</span>
</div>
</a>
<a className="inline-flex items-center gap-3 rounded-2xl bg-slate-800 ring-1 ring-white/10 px-8 py-4 text-base font-medium text-white hover:bg-slate-700 transition-all hover:scale-105 duration-300 w-full sm:w-auto justify-center" href="#">
<i className="w-6 h-6 text-slate-300" data-lucide="smartphone" strokeWidth="1.5"></i>
<div className="flex flex-col text-left">
<span className="text-xs leading-none text-slate-400 font-normal">
                      GET IT ON
                    </span>
<span className="text-base leading-tight">Google Play</span>
</div>
</a>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200/60 pt-24 pb-12 mt-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20">
<div className="col-span-1 md:col-span-4 lg:col-span-5">
<a className="inline-flex items-center gap-2.5 text-xl tracking-tight font-medium text-slate-900" href="#">
<img alt="Heyama Logo" className="w-8 h-8 object-contain drop-shadow-sm" src="https://asset-pub.heyama.app/images/logo-heyama.png"/>
              Heyama
            </a>
<p className="mt-6 text-base text-slate-500 max-w-sm font-normal leading-relaxed">
              Trouvez l'amour sans compromis. La première application pensée
              pour des connexions réelles et authentiques. Téléchargez-la dès
              aujourd'hui et commencez votre histoire.
            </p>
<div className="mt-8 flex items-center gap-4">
<a aria-label="Twitter" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all duration-300" href="#">
<i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#CA73D8] hover:text-white transition-all duration-300" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all duration-300" href="#">
<i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
<a aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all duration-300" href="#">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="col-span-1 md:col-span-8 lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-6 uppercase tracking-wider">
                L'Application
              </h3>
<ul className="space-y-4 text-base text-slate-500 font-normal">
<li>
<a className="hover:text-slate-900 hover:translate-x-1 inline-block transition-transform duration-300" href="#features">
                    Avantages
                  </a>
</li>
<li>
<a className="hover:text-slate-900 hover:translate-x-1 inline-block transition-transform duration-300" href="#experience">
                    L'Expérience
                  </a>
</li>
<li>
<a className="hover:text-slate-900 hover:translate-x-1 inline-block transition-transform duration-300" href="#reviews">
                    Témoignages
                  </a>
</li>
<li>
<a className="hover:text-slate-900 hover:translate-x-1 inline-block transition-transform duration-300" href="#">
                    Télécharger
                  </a>
</li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-6 uppercase tracking-wider">
                Légal
              </h3>
<ul className="space-y-4 text-base text-slate-500 font-normal">
<li>
<a className="hover:text-slate-900 hover:translate-x-1 inline-block transition-transform duration-300" href="#">
                    Confidentialité
                  </a>
</li>
<li>
<a className="hover:text-slate-900 hover:translate-x-1 inline-block transition-transform duration-300" href="#">
                    Conditions
                  </a>
</li>
<li>
<a className="hover:text-slate-900 hover:translate-x-1 inline-block transition-transform duration-300" href="#">
                    Mentions légales
                  </a>
</li>
<li>
<a className="hover:text-slate-900 hover:translate-x-1 inline-block transition-transform duration-300" href="#">
                    Cookies
                  </a>
</li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<h3 className="text-sm font-semibold text-slate-900 mb-6 uppercase tracking-wider">
                Contact
              </h3>
<ul className="space-y-4 text-base text-slate-500 font-normal">
<li>
<a className="hover:text-slate-900 hover:translate-x-1 inline-block transition-transform duration-300" href="#">
                    Support
                  </a>
</li>
<li>
<a className="hover:text-slate-900 hover:translate-x-1 inline-block transition-transform duration-300" href="#">
                    Presse
                  </a>
</li>
<li>
<a className="hover:text-slate-900 hover:translate-x-1 inline-block transition-transform duration-300" href="#">
                    Partenariats
                  </a>
</li>
</ul>
</div>
</div>
</div>
<div className="border-t border-slate-200/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-slate-400 font-normal">
            © 2024 Heyama. Tous droits réservés.
          </p>
<div className="flex items-center gap-4 text-sm text-slate-400">
<span>
              Fait avec
              <i className="w-4 h-4 inline-block text-slate-300 fill-current" data-lucide="heart" strokeWidth="1.5"></i>
              à Paris
            </span>
</div>
</div>
</div>
</footer>


    </>
  );
}
