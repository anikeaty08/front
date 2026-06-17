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
lusine: {
bg: '#EBE8E3', // The warm beige background
text: '#1C1C1C', // Soft black
teal: '#284E5E', // The header left bar
dark: '#1F1E1E', // The header right bar
}
},
fontFamily: {
serif: ['"Playfair Display"', 'serif'],
sans: ['"Inter"', 'sans-serif'],
}
}
}
}



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
      

<div className="mx-auto max-w-[600px] bg-lusine-bg min-h-screen shadow-2xl overflow-hidden">

<header className="pt-8 pb-4 px-6 text-center">

<div className="flex items-end justify-center mb-6">
<h1 className="font-sans text-5xl tracking-[0.15em] font-medium text-black uppercase leading-none">
                    Lusine
                </h1>
<span className="font-serif italic text-lg text-gray-600 ml-3 mb-1 leading-none">
                    mobilier<br/>design
                </span>
</div>

<nav className="flex flex-wrap justify-between items-center gap-4 px-2 mb-6">
<a className="text-xs uppercase tracking-[0.15em] text-gray-700 hover:text-black no-underline font-normal" href="#">Salle à Manger</a>
<a className="text-xs uppercase tracking-[0.15em] text-gray-700 hover:text-black no-underline font-normal" href="#">Salon</a>
<a className="text-xs uppercase tracking-[0.15em] text-gray-700 hover:text-black no-underline font-normal" href="#">Chambre</a>
<a className="text-xs uppercase tracking-[0.15em] text-gray-700 hover:text-black no-underline font-normal" href="#">Promos</a>
</nav>
</header>

<div className="flex w-full">
<div className="w-1/2 bg-lusine-teal py-2.5 text-center">
<span className="text-white text-[10px] uppercase tracking-[0.15em] font-serif">Mobilier d'ici</span>
</div>
<div className="w-1/2 bg-lusine-dark py-2.5 text-center">
<span className="text-white text-[10px] uppercase tracking-[0.15em] font-serif">Nouveautés</span>
</div>
</div>

<div className="relative w-full h-[500px]">

<img alt="Intérieur d'hiver" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d785c4ae-6b24-4117-9cf9-dadbceb9865d_1600w.jpg"/>

<div className="flex flex-col text-center bg-black/20 pr-8 pl-8 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<h2 className="text-white font-serif text-5xl lg:text-6xl tracking-tight mb-2 leading-tight">
                    Nouveautés<span className="italic font-light"> d’hiver</span>
</h2>
<button className="mt-8 bg-white text-black px-8 py-3 text-xs uppercase tracking-[0.15em] font-medium hover:bg-gray-100 transition-colors">
                    Découvrir
                </button>
</div>
</div>

<main className="px-8 py-12 space-y-16">

<div className="text-center max-w-sm mx-auto mb-12">
<div className="w-12 h-px bg-gray-400 mx-auto mb-6"></div>
<p className="font-serif text-xl text-gray-800 leading-relaxed italic">
                    "Créer des espaces qui respirent la tranquillité et la sophistication pendant les mois froids."
                </p>
</div>

<div className="flex flex-col gap-6 group cursor-pointer">
<div className="overflow-hidden aspect-[4/3] bg-gray-200">
<img alt="Salon" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2c0bc4e4-e802-462e-8214-15da67e39dcc_1600w.jpg"/>
</div>
<div className="text-center">
<h3 className="font-serif text-2xl text-gray-900 mb-2 tracking-tight">Collection Salon</h3>
<span className="inline-block border-b border-gray-800 pb-0.5 text-xs uppercase tracking-widest text-gray-900 font-medium hover:text-gray-600 hover:border-gray-400 transition-colors">
                        Découvrir le salon
                    </span>
</div>
</div>

<div className="flex flex-col gap-6 group cursor-pointer">
<div className="overflow-hidden aspect-[4/3] bg-gray-200">
<img alt="Salle à manger" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a9b9e2f8-8b2b-4419-a607-f3df5a52a62f_1600w.png"/>
</div>
<div className="text-center">
<h3 className="font-serif text-2xl text-gray-900 mb-2 tracking-tight">Collection Salle à manger</h3>
<span className="inline-block border-b border-gray-800 pb-0.5 text-xs uppercase tracking-widest text-gray-900 font-medium hover:text-gray-600 hover:border-gray-400 transition-colors">
                        Découvrir la salle à manger
                    </span>
</div>
</div>

<div className="flex flex-col gap-6 group cursor-pointer">
<div className="overflow-hidden aspect-[4/3] bg-gray-200">
<img alt="Éclairage" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11e04c39-e61f-4fa4-a46f-d3f1fe83e00f_1600w.jpg"/>
</div>
<div className="text-center">
<h3 className="text-2xl text-gray-900 tracking-tight font-serif mb-2">Collection Rangement</h3>
<span className="inline-block uppercase hover:text-gray-600 hover:border-gray-400 transition-colors text-xs font-medium text-gray-900 tracking-widest border-gray-800 border-b pb-0.5">Découvrir le rangement</span>
</div>
</div>

<div className="flex flex-col gap-6 group cursor-pointer">
<div className="overflow-hidden aspect-[4/3] bg-gray-200">
<img alt="Chambre" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32dba762-57be-4df7-a6de-98707b1759bb_1600w.jpg"/>
</div>
<div className="text-center">
<h3 className="font-serif text-2xl text-gray-900 mb-2 tracking-tight">Collection Chambre</h3>
<span className="inline-block border-b border-gray-800 pb-0.5 text-xs uppercase tracking-widest text-gray-900 font-medium hover:text-gray-600 hover:border-gray-400 transition-colors">
                        Découvrir la chambre
                    </span>
</div>
</div>

<div className="flex flex-col gap-6 group cursor-pointer">
<div className="overflow-hidden aspect-[4/3] bg-gray-200">
<img alt="Décoration" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ddd910f0-1874-4a3b-9e17-2061d0042d39_1600w.png"/>
</div>
<div className="text-center">
<h3 className="text-2xl text-gray-900 tracking-tight font-serif mb-2">Collection Fauteuils</h3>
<span className="inline-block uppercase hover:text-gray-600 hover:border-gray-400 transition-colors text-xs font-medium text-gray-900 tracking-widest border-gray-800 border-b pb-0.5">
                        Découvrir les fauteuils
                    </span>
</div>
</div>
</main>

<footer className="bg-[#EBE8E3] pt-12 pr-8 pb-12 pl-8">

<div className="text-center mb-10">
<h2 className="font-serif text-3xl text-black leading-tight mb-6">
                    Gagnez une carte-cadeau
                    LUSINE de 100$ grâce à votre décor.
                </h2>

<div className="grid grid-cols-3 gap-2 mb-8 px-2">
<div className="aspect-square bg-gray-200 overflow-hidden">
<img alt="Salon" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32174284-0f84-4664-9c43-fbe0d6f18f7f_800w.jpg"/>
</div>
<div className="aspect-square bg-gray-200 overflow-hidden">
<img alt="Salle à manger" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3904f442-d99c-407e-8223-356d874641b3_800w.jpg"/>
</div>
<div className="aspect-square bg-gray-200 overflow-hidden">
<img alt="Chambre" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/278606fa-b428-49f5-a8f0-f5ca3d8581de_800w.jpg"/>
</div>
</div>

<a className="inline-block border border-gray-600 bg-[#EBE8E3] px-8 py-3 text-xl font-serif uppercase tracking-widest text-black hover:bg-white transition-colors" href="#">
                    TOUS LES DÉTAILS ICI
                </a>
</div>

<div className="w-full h-px bg-black mb-6"></div>

<div className="flex justify-between items-center px-4 mb-6">

<div className="w-32">
<svg className="text-black w-full h-auto" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 160 50">
<path d="M5,25 L25,5 L135,5 L155,25 L135,45 L25,45 Z" strokeLinejoin="round"></path>
<text fill="currentColor" fontFamily="sans-serif" fontSize="22" font-weight="bold" letter-spacing="3" stroke="none" text-anchor="middle" x="80" y="34">LUSINE</text>
</svg>
</div>

<div className="flex items-center space-x-6">
<a className="hover:text-gray-600 transition-colors" href="#">
<svg className="w-5 h-5 text-black" fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="hover:text-gray-600 transition-colors" href="#">
<svg className="w-5 h-5 text-black" fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="hover:text-gray-600 transition-colors" href="#">
<svg className="w-5 h-5 text-black" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="hover:text-gray-600 transition-colors" href="#">
<svg className="w-5 h-5 text-black" fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.966 1.407-5.966s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.65 0-5.789 2.738-5.789 5.563 0 1.103.425 2.286.956 2.928.105.128.12.24.089.373-.098.406-.319 1.287-.362 1.467-.057.237-.248.287-.57.173-2.126-.989-3.46-4.093-3.46-6.585 0-5.36 3.896-10.292 11.233-10.292 5.895 0 10.477 4.204 10.477 9.816 0 5.856-3.69 10.569-8.814 10.569-1.722 0-3.342-.895-3.898-1.954 0 0-.931 3.543-1.157 4.417-.417 1.616-1.536 3.633-2.296 4.869 1.745.541 3.6.837 5.524.837 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z"></path></svg>
</a>
</div>
</div>

<div className="w-full h-px bg-black mb-12"></div>

<div className="grid grid-cols-3 gap-4 mb-12 px-2">

<div className="flex flex-col items-center group cursor-pointer">
<div className="mb-4">
<svg className="lucide lucide-truck w-14 h-14 text-black" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<span className="border border-black px-1 text-sm font-serif uppercase tracking-widest text-black">LIVRAISON</span>
</div>

<div className="flex flex-col items-center group cursor-pointer">
<div className="mb-4">
<svg className="lucide lucide-map-pin w-14 h-14 text-black" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<span className="border border-black px-1 text-sm font-serif uppercase tracking-widest text-black">BOUTIQUES</span>
</div>

<div className="flex flex-col items-center group cursor-pointer">
<div className="mb-4">
<svg className="lucide lucide-headphones w-14 h-14 text-black" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path><path d="M12 12v.01"></path></svg>
</div>
<span className="border border-black px-1 text-sm font-serif uppercase tracking-widest text-black">ASSISTANCE</span>
</div>
</div>

<div className="text-center font-sans text-black">
<div className="text-[10px] mb-3">
<a className="underline hover:no-underline" href="#">Mettre à jour vos préférences</a>
<span className="mx-1">|</span>
<a className="underline hover:no-underline" href="#">Se désinscrire</a>
</div>
<div className="text-[11px] font-bold mb-1">
                    © 2026 | LUSINE mobilier design
                </div>
<div className="text-[11px] italic mb-6">
                    1195 Rue Taillon, porte 240 Québec, Quebec, G1N 3V2
                </div>
<div className="text-[10px] text-gray-500">
                    Vous ne voyez pas cet e-mail ?
                    <a className="underline hover:text-black" href="#">Visualiser dans votre navigateur</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
