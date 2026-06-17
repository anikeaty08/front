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
beige: '#EBE6DE',
teal: '#2C4F5F',
dark: '#1A1A1A',
text: '#222222',
sub: '#555555',
bg: '#F9F9F9'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
}
}
}
}



        (function() {
            var container = document.currentScript.parentElement;
            var slides = container.querySelectorAll('img');
            var current = 0;
            setInterval(function() {
                slides[current].style.opacity = '0';
                current = (current + 1) % slides.length;
                slides[current].style.opacity = '1';
            }, 1000);
        })();
    
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
      

<div className="max-w-[600px] mx-auto bg-white shadow-sm min-h-screen">

<header className="bg-lusine-beige pb-6">

<div className="pt-10 pb-6 text-center">
<div className="inline-flex items-baseline gap-3">
<h1 className="text-4xl tracking-[0.25em] font-medium text-black uppercase leading-none">LUSINE</h1>
<span className="font-serif italic text-lg text-gray-800">mobilier design</span>
</div>
</div>

<nav className="flex justify-center gap-6 sm:gap-10 pb-6 px-4">
<a className="text-xs uppercase tracking-widest text-gray-700 hover:text-black transition-colors no-underline" href="#">Salle à Manger</a>
<a className="text-xs uppercase tracking-widest text-gray-700 hover:text-black transition-colors no-underline" href="#">Salon</a>
<a className="text-xs uppercase tracking-widest text-gray-700 hover:text-black transition-colors no-underline" href="#">Chambre</a>
<a className="text-xs uppercase tracking-widest text-gray-700 hover:text-black transition-colors no-underline" href="#">Promos</a>
</nav>

<div className="flex w-full">
<div className="w-1/2 bg-lusine-teal py-2.5 text-center">
<span className="text-white text-[10px] sm:text-xs uppercase tracking-widest font-medium">Mobilier d'ici</span>
</div>
<div className="w-1/2 bg-[#221F1F] py-2.5 text-center">
<span className="text-white text-[10px] sm:text-xs uppercase tracking-widest font-medium">Nouveautés</span>
</div>
</div>
</header>


<div className="relative w-full group overflow-hidden bg-gray-100">

<div className="aspect-square w-full relative overflow-hidden bg-gray-100">

<img alt="Canapé Delano Salon" className="transition-opacity duration-700 ease-in-out w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/23809bc9-f0a5-4883-939d-53497a82e6df_1600w.jpg" style={{opacity: '1', zIndex: '10'}}/>

<img alt="Canapé Delano Detail" className="transition-opacity duration-700 ease-in-out w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0607daf6-eb2b-4072-a00d-5dae661373b6_800w.jpg" style={{opacity: '0', zIndex: '10'}}/>

</div>
</div>

<div className="sm:px-12 text-left max-w-xl mr-auto ml-auto pt-12 pr-8 pb-12 pl-8">
<h2 className="font-serif text-3xl sm:text-4xl text-black tracking-tight mb-5 font-medium leading-tight">
        Delano, le modulaire iconique.
    </h2>
<p className="text-base sm:text-lg text-lusine-sub leading-relaxed font-light mb-8">
        Une silhouette basse, des lignes épurées et un confort sans compromis. 
        Le Delano se réinvente à l'infini pour s'adapter à votre espace et à votre vie, 
        alliant design intemporel et fonctionnalité moderne.
    </p>
<div className="flex flex-col items-start gap-4">
<a className="inline-block bg-lusine-dark text-white px-8 py-3.5 text-sm uppercase tracking-widest font-medium hover:bg-gray-800 transition-colors rounded-sm no-underline" href="#">
            Découvrir Delano
        </a>
<a className="text-sm text-lusine-sub hover:text-black transition-colors flex items-center gap-1 group no-underline" href="#">
</a>
</div>
</div>

<div className="px-6 pb-16 sm:px-8 space-y-12">

<div className="group cursor-pointer">
<div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden mb-3">
<img alt="Delano Modulaire" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8e7a480b-fd05-4d1f-b396-55c43f4493a2_1600w.png"/>
</div>
<div className="text-center">
<a className="group-hover:text-lusine-teal transition-colors flex items-center justify-center gap-2 no-underline text-xl font-medium text-black font-inter text-center" href="#" style={{}}>Sectionnel 4 places →</a>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">

<div className="group cursor-pointer">
<div className="w-full aspect-square bg-gray-100 overflow-hidden mb-3">
<img alt="Chaise Delano" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a424adf6-fec4-473a-a688-9a92c9bf1711_800w.png"/>
</div>
<div className="">
<a className="block group-hover:text-lusine-teal transition-colors no-underline text-base font-medium text-black font-inter" href="#">Divan 2 places →</a>
</div>
</div>

<div className="group cursor-pointer">
<div className="w-full aspect-square bg-gray-100 overflow-hidden mb-3">
<img alt="Module 2 places" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8a6d08d5-8411-42db-80c8-110a6c62865f_800w.png"/>
</div>
<div className="">
<a className="block group-hover:text-lusine-teal transition-colors no-underline text-base font-medium text-black font-inter" href="#">Divan 3 places →</a>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="w-full aspect-[16/9] bg-gray-100 overflow-hidden mb-3">
<img alt="Sectionnel Delano" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2c8da52f-11a1-43ad-b660-515b8b045983_1600w.png"/>
</div>
<div className="">
<a className="group-hover:text-lusine-teal transition-colors flex items-center gap-2 no-underline text-xl font-medium text-black font-inter" href="#">Sectionnel 4 places + ottoman</a>
</div>
</div>
</div>


<div className="sm:px-16 text-center bg-white pt-10 pr-16 pb-10 pl-16">
<blockquote className="leading-normal sm:text-4xl text-xl italic text-black font-serif text-left mb-6">
        « Le confort est incroyable, et la modularité nous a permis de créer exactement la forme parfaite. »
    </blockquote>
<p className="text-left font-sans text-xs sm:text-sm uppercase tracking-widest text-gray-500 font-medium">
        - Sophie L.
    </p>
</div>

<div className="text-center bg-[#F5F5F0] border-gray-100 border-t">

<div className="max-w-3xl mr-auto ml-auto pt-14 pr-6 pb-12 pl-6">
<h3 className="font-serif text-3xl sm:text-4xl text-black mb-8 leading-tight">
            Offre de service de décor virtuel — Visualisez les meubles LUSINE dans votre pièce
        </h3>
<div className="w-full mb-10 overflow-hidden bg-gray-200">
<img alt="Service de décor virtuel" className="aspect-square w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/95edc233-7bef-4cb9-b463-90115e9f799a_1600w.jpg"/>
</div>
<a className="inline-block border border-black text-black px-10 py-3 text-lg font-serif uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 no-underline bg-[#F5F5F0]" href="#">
            Découvrir le service
        </a>
</div>

<div className="bg-white px-6 pt-10 pb-12 w-full">
<div className="max-w-4xl mx-auto">

<div className="border-t border-black mb-10 w-full"></div>

<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10 px-4">

<div className="h-14 w-48 relative flex items-center justify-center">
<svg className="w-full h-full overflow-visible text-black" viewbox="0 0 160 50">
<path d="M10,25 L20,2 L140,2 L150,25 L140,48 L20,48 Z" fill="none" stroke="currentColor" strokeWidth="2.5"></path>
<text fill="currentColor" fontFamily="sans-serif" fontSize="20" font-weight="bold" letter-spacing="0.15em" text-anchor="middle" x="80" y="33">LUSINE</text>
</svg>
</div>

<div className="flex items-center gap-6 text-black">
<a className="hover:opacity-60 transition-opacity" href="#">
<svg className="w-5 h-5" fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="hover:opacity-60 transition-opacity" href="#">
<svg className="w-5 h-5" fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="hover:opacity-60 transition-opacity" href="#">
<svg className="lucide lucide-instagram w-5 h-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="hover:opacity-60 transition-opacity" href="#">
<svg className="w-5 h-5" fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12l4 4 4-4" fill="none" stroke="white" strokeWidth="2"></path></svg>
</a>
</div>
</div>

<div className="border-t border-black mb-12 w-full"></div>

<div className="grid grid-cols-3 gap-4 mb-16 text-black">
<div className="flex flex-col items-center gap-4">
<svg className="lucide lucide-truck w-10 h-10 sm:w-12 sm:h-12" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
<div className="border border-black px-2 py-0.5">
<span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest block leading-none">Livraison</span>
</div>
</div>
<div className="flex flex-col items-center gap-4">
<svg className="lucide lucide-map-pin w-10 h-10 sm:w-12 sm:h-12" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div className="border border-black px-2 py-0.5">
<span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest block leading-none">Boutiques</span>
</div>
</div>
<div className="flex flex-col items-center gap-4">
<svg className="lucide lucide-headphones w-10 h-10 sm:w-12 sm:h-12" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
<div className="border border-black px-2 py-0.5">
<span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest block leading-none">Assistance</span>
</div>
</div>
</div>

<div className="text-[10px] text-gray-500 font-sans space-y-2.5">
<div className="flex justify-center items-center gap-1.5 flex-wrap">
<a className="underline decoration-1 underline-offset-2 hover:text-black" href="#">Mettre à jour vos préférences</a>
<span className="text-gray-300 mx-1">|</span>
<a className="underline decoration-1 underline-offset-2 hover:text-black" href="#">Se désinscrire</a>
</div>
<div className="font-bold text-black uppercase tracking-wide">© 2026 | LUSINE mobilier design</div>
<div className="italic text-gray-400 font-serif tracking-wide">1195 Rue Taillon, porte 240 Québec, Quebec, G1N 3V2</div>
<div className="pt-3">
                    Vous ne voyez pas cet e-mail ? <a className="underline decoration-1 underline-offset-2 hover:text-black" href="#">Visualiser dans votre navigateur</a>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
