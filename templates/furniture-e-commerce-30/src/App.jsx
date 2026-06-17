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
      

<div className="max-w-2xl mx-auto bg-white shadow-sm overflow-hidden min-h-screen">

<header className="">

<div className="bg-[#E6E1D8] pt-10 pb-6 px-6 text-center">

<div className="flex items-end justify-center mb-6 leading-none">
<span className="font-sans text-5xl tracking-widest text-black font-medium mr-3">LUSINE</span>
<div className="font-serif text-lg leading-tight text-left text-gray-800 pb-1">
                        mobilier<br/>design
                    </div>
</div>

<nav className="flex justify-center flex-wrap gap-x-8 gap-y-2 mt-6">
<a className="text-sm font-normal text-gray-700 uppercase tracking-wider hover:text-black" href="#">Salle à manger</a>
<a className="text-sm font-normal text-gray-700 uppercase tracking-wider hover:text-black" href="#">Salon</a>
<a className="text-sm font-normal text-gray-700 uppercase tracking-wider hover:text-black" href="#">Chambre</a>
<a className="text-sm font-normal text-gray-700 uppercase tracking-wider hover:text-black" href="#">Promos</a>
</nav>
</div>

<div className="flex w-full">
<div className="w-1/2 bg-[#2D5D72] py-2.5 text-center">
<a className="text-white text-xs uppercase tracking-widest font-normal" href="#">Mobilier d'ici</a>
</div>
<div className="w-1/2 bg-[#1F1F1F] py-2.5 text-center">
<a className="text-white text-xs uppercase tracking-widest font-normal" href="#">Nouveautés</a>
</div>
</div>
</header>

<main className="">

<div className="w-full relative">
<img alt="Dining Room Atmosphere" className="object-center aspect-[4/5] w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e94046be-2845-429d-ba97-bb7e7d3ba021_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full p-8 text-center pb-12">
<p className="md:text-5xl leading-tight text-4xl font-normal text-white tracking-tight font-playfair drop-shadow-sm">
            La nouvelle collection
            <span className="italic text-white/95">salle à manger St-Martin</span>
</p>
</div>
</div>

<div className="flex flex-col max-w-lg mx-auto pt-16 pb-8 items-start">
<p className="leading-relaxed text-2xl font-semibold text-gray-600 tracking-tight text-left mb-10">
        Redéfinissez l'espace où la vie se rassemble. Des silhouettes épurées, des matériaux authentiques et une fonctionnalité pensée pour le quotidien. Créez un lieu de partage qui vous ressemble, du petit-déjeuner intime aux grands soupers festifs.
    </p>
<a className="inline-block hover:bg-gray-900 hover:text-white transition-colors duration-300 uppercase text-sm font-semibold text-slate-950 tracking-widest text-left border-gray-900 border rounded-full pt-3 pr-8 pb-3 pl-8" href="#">
        Découvrir la salle à manger
    </a>
</div>


<div className="pt-8 pr-8 pb-16 pl-8">
<h2 className="font-serif text-3xl text-gray-900 text-center mb-10 tracking-tight">Vu en ligne</h2>

<div className="mb-16">
<div className="overflow-hidden mb-8 aspect-[16/9] w-full group cursor-pointer">
<img alt="Salle à manger lumineuse" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/adf9e3f6-22bf-4995-af29-e7e24e934165_1600w.jpg"/>
</div>
<div className="flex flex-col font-inter text-center max-w-lg mr-auto ml-auto items-center">
<div className="flex gap-1 mb-4 text-gray-900">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="leading-relaxed text-lg font-semibold text-gray-600 font-sans mb-4">
                "Le design est encore plus beau en vrai. La table s'intègre parfaitement à notre décor minimaliste tout en apportant une chaleur incroyable."
            </p>
<span className="uppercase text-xs font-semibold text-gray-900 tracking-widest font-sans bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6322025f-3353-4db5-93e2-23f966eb9c3b_1600w.jpg)]">Émilie Desjarlais — Influenceuse &amp; Styliste d’intérieur</span>
</div>
</div>

<div className="flex flex-col gap-6">
<div className="overflow-hidden aspect-[21/9] w-full group cursor-pointer">
<img alt="Détail bois" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6a3dab39-25d6-44fd-9b1b-cc7625812513_1600w.jpg"/>
</div>
<div className="overflow-hidden aspect-[21/9] w-full group cursor-pointer">
<img alt="Vue d'ensemble" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d03311ae-a389-48a8-9a30-a356e6914967_1600w.jpg"/>
</div>
</div>
</div>

<div className="bg-gray-50 pt-20 pr-8 pb-20 pl-8">
<div className="grid grid-cols-1 gap-20 w-full max-w-4xl mx-auto">

<div className="flex flex-col group cursor-pointer">
<h2 className="md:text-4xl text-6xl font-normal text-slate-950 tracking-tight font-inter mb-8">Frêne blond</h2>
<div className="w-full relative aspect-[4/3] flex items-center justify-center overflow-hidden bg-white/50">
<img alt="Collection Vela" className="transition-transform duration-500 group-hover:scale-105 mix-blend-multiply w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e8840c9b-68c8-448a-bbdc-42712be9d36c_1600w.png"/>
</div>
</div>

<div className="flex flex-col group cursor-pointer">
<h2 className="md:text-4xl text-6xl font-normal text-slate-950 tracking-tight font-inter mb-8">Noyer naturel</h2>
<div className="w-full relative aspect-[4/3] flex items-center justify-center overflow-hidden bg-white/50">
<img alt="Collection Ushi" className="transition-transform duration-500 group-hover:scale-105 mix-blend-multiply w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f16ab6d3-0c50-4d96-a643-b22536711489_1600w.png"/>
</div>
</div>
</div>

<div className="w-full max-w-4xl mx-auto mt-20 flex flex-col items-start text-left">
<h3 className="leading-tight md:text-5xl text-3xl font-normal text-slate-950 tracking-tight font-inter max-w-2xl mt-8 mb-10">Découvrez de nouvelles possibilités pour votre salle à manger</h3>
<a className="inline-block hover:bg-gray-900 hover:text-white transition-colors duration-300 uppercase text-sm font-medium text-slate-950 tracking-widest text-left border-gray-900 border rounded-full pt-3 pr-8 pb-3 pl-8" href="#">Magasiner la salle à manger</a>
</div>
</div>

<footer className="bg-white text-center">

<div className="bg-[#F2EEE9] pt-16 pb-16 px-6 text-center">
<h2 className="font-serif text-3xl md:text-4xl text-black leading-tight tracking-tight mb-2">
            Gagnez une carte-cadeau
        </h2>
<h2 className="font-serif text-3xl md:text-4xl text-black leading-tight tracking-tight mb-10">
            LUSINE de 100$ grâce à votre décor.
        </h2>

<div className="grid grid-cols-3 w-full max-w-4xl mx-auto mb-12 gap-0">
<div className="aspect-[4/3] relative overflow-hidden group">
<img alt="Decor Living Room" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d03311ae-a389-48a8-9a30-a356e6914967_1600w.jpg"/>
</div>
<div className="aspect-[4/3] relative overflow-hidden group">
<img alt="Decor Dining Room" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e94046be-2845-429d-ba97-bb7e7d3ba021_1600w.jpg"/>
</div>
<div className="aspect-[4/3] relative overflow-hidden group">
<img alt="Decor Lounge" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/adf9e3f6-22bf-4995-af29-e7e24e934165_1600w.jpg"/>
</div>
</div>
<a className="inline-block bg-[#E8E4DF] border border-gray-400 py-3 px-8 text-lg font-serif uppercase tracking-widest text-black hover:bg-white transition-colors duration-300" href="#">
            Tous les détails ici
        </a>
</div>

<div className="bg-white pt-12 pb-12 px-6">
<div className="max-w-2xl mx-auto">

<div className="border-t border-black mb-6"></div>

<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">

<div className="relative w-32 h-10 flex items-center justify-center text-black">
<svg className="absolute inset-0 w-full h-full text-black fill-none stroke-current stroke-2" preserveaspectratio="none" viewbox="0 0 160 50">
<path d="M10,0 L150,0 L160,25 L150,50 L10,50 L0,25 Z" vector-effect="non-scaling-stroke"></path>
</svg>
<span className="font-sans font-bold text-lg tracking-[0.2em] relative z-10">LUSINE</span>
</div>

<div className="flex items-center gap-6 text-black">
<a className="hover:text-gray-600 transition-colors" href="#">
<svg className="w-5 h-5" fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="hover:text-gray-600 transition-colors" href="#">
<svg className="w-5 h-5" fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="hover:text-gray-600 transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="hover:text-gray-600 transition-colors" href="#">
<svg className="w-5 h-5" fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7z"></path></svg>
</a>
</div>
</div>

<div className="border-t border-black mb-12"></div>

<div className="grid grid-cols-3 gap-8 mb-16 text-center">

<div className="flex flex-col items-center gap-4 group cursor-pointer">
<svg className="lucide lucide-truck" fill="none" height="42" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="42" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
<span className="text-xs font-serif uppercase tracking-widest border border-gray-800 px-1 py-0.5 group-hover:bg-gray-100 transition-colors">Livraison</span>
</div>

<div className="flex flex-col items-center gap-4 group cursor-pointer">
<svg className="lucide lucide-map-pin" fill="none" height="42" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="42" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-xs font-serif uppercase tracking-widest border border-gray-800 px-1 py-0.5 group-hover:bg-gray-100 transition-colors">Boutiques</span>
</div>

<div className="flex flex-col items-center gap-4 group cursor-pointer">
<svg className="lucide lucide-headphones" fill="none" height="42" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="42" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path><path d="M12 14v4"></path></svg>
<span className="text-xs font-serif uppercase tracking-widest border border-gray-800 px-1 py-0.5 group-hover:bg-gray-100 transition-colors">Assistance</span>
</div>
</div>

<div className="text-center font-sans space-y-2">
<p className="text-xs uppercase tracking-wider text-gray-900 mb-4">
<a className="underline hover:text-gray-600" href="#">Mettre à jour vos préférences</a>
<span className="mx-1">|</span>
<a className="underline hover:text-gray-600" href="#">Se désinscrire</a>
</p>
<p className="text-xs font-bold text-black tracking-wide">
                    © 2026 | LUSINE mobilier design
                </p>
<p className="text-xs text-gray-500 italic font-serif">
                    1195 Rue Taillon, porte 240 Québec, Quebec, G1N 3V2
                </p>
<div className="pt-2">
<p className="text-xs text-gray-400">
                        Vous ne voyez pas cet e-mail ? 
                        <a className="underline hover:text-gray-600 block md:inline mt-1 md:mt-0" href="#">Visualiser dans votre navigateur</a>
</p>
</div>
</div>
</div>
</div>
</footer>
</main>
</div>


    </>
  );
}
