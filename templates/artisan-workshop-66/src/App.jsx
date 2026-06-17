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
      

<header className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center relative z-10">
<div className="font-serif text-xl tracking-tighter text-[#b05c4e] font-medium uppercase">LTDM</div>
<div className="text-xs uppercase tracking-widest text-stone-500 font-medium flex items-center gap-2">
<iconify-icon className="text-sm" icon="solar:map-point-linear"></iconify-icon>
            Foire de Tours 2026
        </div>
</header>

<section className="max-w-4xl mx-auto px-6 pt-12 pb-20 md:pt-20 md:pb-32 text-center relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b05c4e]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
<span className="inline-block text-xs font-medium text-[#b05c4e] tracking-widest uppercase mb-6 px-4 py-1.5 border border-[#b05c4e]/20 rounded-full bg-[#b05c4e]/5">
            Les Tours de Main – Atelier de céramique à Tours
        </span>
<h1 className="font-serif text-4xl md:text-6xl tracking-tight text-stone-900 font-medium mb-8 leading-tight">
            Révélez l’artisan qui <br className="hidden md:block"/> est en vous
        </h1>
<p className="text-lg md:text-xl text-stone-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Une expérience digitale exclusive à la Foire de Tours 2026. <br className="hidden md:block"/>
            Participez à la campagne "Façonne ton profil d'artisan".
        </p>
<a className="inline-flex items-center justify-center bg-[#b05c4e] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#9a4f42] transition-colors shadow-sm gap-2" href="https://artisan-soul-maker.lovable.app" rel="noopener noreferrer" target="_blank">
            Je découvre mon profil
            <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</section>

<section className="max-w-3xl mx-auto px-6 pb-24 text-center">
<div className="h-px w-24 bg-stone-200 mx-auto mb-12"></div>
<p className="text-base md:text-lg text-stone-700 leading-loose font-light">
            Prenez 2 minutes pour plonger dans notre application interactive. Répondez à quelques questions créatives, <strong>découvrez votre profil d'artisan</strong> et débloquez une offre exclusive pour vous initier au travail de la terre dans notre atelier.
            <br className="hidden md:block"/>
<span className="font-medium text-[#b05c4e] block mt-4">Opération spéciale disponible uniquement pendant la Foire de Tours 2026.</span>
</p>
</section>

<section className="bg-stone-100 py-24 border-y border-stone-200">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 aspect-square bg-stone-200 rounded-2xl flex items-center justify-center relative overflow-hidden border border-stone-300 shadow-inner">
<iconify-icon className="text-6xl text-stone-400 opacity-40" icon="solar:jar-linear"></iconify-icon>
<div className="absolute w-72 h-72 bg-[#b05c4e]/10 rounded-full blur-3xl -bottom-12 -right-12"></div>
</div>
<div className="order-1 md:order-2">
<div className="flex items-center gap-3 mb-4">
<div className="h-px w-8 bg-[#b05c4e]"></div>
<span className="text-xs uppercase tracking-widest text-[#b05c4e] font-medium">Notre Atelier</span>
</div>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight font-medium text-stone-900 mb-6">Les Tours de Main</h2>
<p className="text-base text-stone-600 mb-10 font-light leading-relaxed">
                    Situé au cœur de Tours, notre atelier de céramique célèbre le travail manuel, la patience et la créativité. Nous avons à cœur de transmettre notre passion et d'accompagner chaque participant dans la découverte d'un savoir-faire authentique.
                </p>
<ul className="space-y-6">
<li className="flex items-start">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center mr-4 shadow-sm">
<iconify-icon className="text-[#b05c4e] text-base" icon="solar:star-linear"></iconify-icon>
</div>
<div>
<span className="block text-sm font-medium text-stone-900 mb-1">Expertise artisanale locale</span>
<span className="block text-sm text-stone-500 font-light">Un savoir-faire reconnu au service de vos créations.</span>
</div>
</li>
<li className="flex items-start">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center mr-4 shadow-sm">
<iconify-icon className="text-[#b05c4e] text-base" icon="solar:hand-stars-linear"></iconify-icon>
</div>
<div>
<span className="block text-sm font-medium text-stone-900 mb-1">Ateliers pratiques et immersifs</span>
<span className="block text-sm text-stone-500 font-light">Mettez la main à la pâte lors de sessions de découverte.</span>
</div>
</li>
<li className="flex items-start">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center mr-4 shadow-sm">
<iconify-icon className="text-[#b05c4e] text-base" icon="solar:user-rounded-linear"></iconify-icon>
</div>
<div>
<span className="block text-sm font-medium text-stone-900 mb-1">Accessible à tous les niveaux</span>
<span className="block text-sm text-stone-500 font-light">Débutants curieux comme passionnés sont les bienvenus.</span>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24 md:py-32" id="experience">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight font-medium text-center text-stone-900 mb-20">Comment participer ?</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
<div className="hidden md:block absolute top-12 left-12 right-12 h-px bg-stone-200 -z-10"></div>
<div className="flex flex-col items-center text-center relative group">
<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 text-[#b05c4e] border border-stone-200 shadow-sm transition-transform group-hover:-translate-y-1">
<iconify-icon className="text-3xl" icon="solar:qr-code-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-stone-900 mb-2">1. Cliquez</h3>
<p className="text-sm text-stone-500 font-light px-4">Ou scannez le QR code présent sur notre stand.</p>
</div>
<div className="flex flex-col items-center text-center relative group">
<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 text-[#b05c4e] border border-stone-200 shadow-sm transition-transform group-hover:-translate-y-1">
<iconify-icon className="text-3xl" icon="solar:gamepad-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-stone-900 mb-2">2. Jouez</h3>
<p className="text-sm text-stone-500 font-light px-4">Répondez à quelques questions créatives sur l'application.</p>
</div>
<div className="flex flex-col items-center text-center relative group">
<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 text-[#b05c4e] border border-stone-200 shadow-sm transition-transform group-hover:-translate-y-1">
<iconify-icon className="text-3xl" icon="solar:user-id-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-stone-900 mb-2">3. Découvrez</h3>
<p className="text-sm text-stone-500 font-light px-4">Votre profil d'artisan unique révélé.</p>
</div>
<div className="flex flex-col items-center text-center relative group">
<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 text-[#b05c4e] border border-stone-200 shadow-sm transition-transform group-hover:-translate-y-1">
<iconify-icon className="text-3xl" icon="solar:calendar-add-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-stone-900 mb-2">4. Réservez</h3>
<p className="text-sm text-stone-500 font-light px-4">Votre atelier avec votre offre exclusive.</p>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 pb-24">
<div className="bg-[#b05c4e] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-xl">
<div className="relative z-10 flex flex-col items-center">
<div className="inline-flex items-center justify-center px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs tracking-widest uppercase mb-8 font-medium">
                    Limité aux participants
                </div>
<h2 className="font-serif text-6xl md:text-8xl tracking-tight font-medium mb-6 drop-shadow-sm">-20%</h2>
<p className="text-base md:text-lg text-white/90 mb-10 max-w-md mx-auto font-light leading-relaxed">
                    Sur votre premier atelier découverte de la céramique. Révélez votre profil pour obtenir votre code unique.
                </p>
<a className="bg-white text-[#b05c4e] px-8 py-3.5 rounded-full text-sm font-medium hover:bg-stone-50 transition-colors shadow-sm inline-flex items-center gap-2" href="https://artisan-soul-maker.lovable.app" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg" icon="solar:ticket-linear"></iconify-icon>
                    Je découvre mon profil
                </a>
</div>

<div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
</div>
</section>

<section className="py-24 border-t border-stone-200">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-stone-900 font-medium mb-6">Prêt à révéler votre talent caché ?</h2>
<p className="text-base text-stone-600 mb-10 font-light max-w-lg mx-auto">
                Ne manquez pas cette occasion unique de plonger dans l'art de la céramique lors de la Foire de Tours.
            </p>
<a className="inline-flex items-center justify-center bg-[#b05c4e] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#9a4f42] transition-colors shadow-sm gap-2" href="https://artisan-soul-maker.lovable.app" rel="noopener noreferrer" target="_blank">
                Je découvre mon profil
                <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-16 md:py-20 border-t border-stone-800">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="w-12 h-12 rounded-full bg-stone-800 mx-auto flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-stone-400" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-xs font-medium text-stone-300 mb-4 tracking-widest uppercase">Transparence &amp; Données</h3>
<p className="text-xs leading-relaxed max-w-2xl mx-auto mb-8 font-light text-stone-500">
                Dans le cadre de la campagne "Façonne ton profil d'artisan", nous collectons : votre prénom, email, créneau préféré et profil créatif. Ces données ont pour unique but de vous faire parvenir votre récompense et une proposition d'atelier adaptée.
            </p>
<ul className="text-xs flex flex-col md:flex-row flex-wrap justify-center items-center gap-x-8 gap-y-3 mb-12 text-stone-400 font-light">
<li className="flex items-center gap-2">
<iconify-icon className="text-stone-500" icon="solar:check-circle-linear"></iconify-icon> 
                    Base légale : consentement
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-stone-500" icon="solar:check-circle-linear"></iconify-icon> 
                    Aucune revente à des tiers
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-stone-500" icon="solar:check-circle-linear"></iconify-icon> 
                    Désinscription libre
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-stone-500" icon="solar:check-circle-linear"></iconify-icon> 
                    Conservation 12 mois max.
                </li>
</ul>
<div className="text-xs text-stone-600 border-t border-stone-800/50 pt-8 uppercase tracking-widest font-medium flex flex-col md:flex-row justify-between items-center gap-4">
<span>© 2026 Les Tours de Main.</span>
<span className="font-serif tracking-tighter text-sm">LTDM</span>
<a className="hover:text-stone-300 transition-colors" href="#">Mentions légales</a>
</div>
</div>
</footer>

    </>
  );
}
