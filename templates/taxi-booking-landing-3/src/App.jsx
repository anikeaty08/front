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
      

<nav className="flex flex-col md:flex-row justify-between items-center w-full gap-4 md:gap-0 mb-4">

<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
<svg className="lucide lucide-car-taxi-front w-6 h-6 stroke-[1.5]" data-lucide="car-taxi-front" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2h4"></path><path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"></path><path d="M7 14h.01"></path><path d="M17 14h.01"></path><rect height="8" rx="2" width="18" x="3" y="10"></rect><path d="M5 18v2"></path><path d="M19 18v2"></path></svg>
</div>
<span className="text-xl font-semibold text-slate-900 tracking-tight" style={{}}>Paris<span className="text-amber-500" style={{}}>Cab</span></span>
</div>

<div className="hidden md:flex items-center bg-white border border-gray-200 rounded-full p-1.5 shadow-sm">
<a className="px-5 py-2 rounded-full bg-slate-100 text-slate-900 font-medium text-sm transition-colors" href="#">Accueil</a>
<a className="px-5 py-2 rounded-full text-slate-500 hover:text-slate-900 font-medium text-sm transition-colors" href="#">Services</a>
<a className="px-5 py-2 rounded-full text-slate-500 hover:text-slate-900 font-medium text-sm transition-colors" href="#">Flotte</a>
<a className="px-5 py-2 rounded-full text-slate-500 hover:text-slate-900 font-medium text-sm transition-colors" href="#">Contact</a>
</div>

<div className="flex items-center gap-3">
<button className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 shadow-md transition-colors flex items-center gap-2">
                Réserver
                <svg className="lucide lucide-arrow-right w-4 h-4 stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</nav>

<main className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:h-[800px] h-auto gap-x-6 gap-y-6">

<div className="lg:col-span-3 flex flex-col gap-6 h-full">

<div className="relative h-[60%] w-full rounded-[2rem] overflow-hidden group shadow-sm">
<img alt="Blue Taxi City" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>

<div className="relative h-[40%] w-full bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 group">
<img alt="Customer Happy" className="transition-transform duration-700 group-hover:scale-105 bg-slate-500 opacity-90 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1537988489137-33d67a16f3ec?w=800&amp;q=80" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)'}}/>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
<div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
<svg className="lucide lucide-users w-4 h-4 stroke-[1.5] text-amber-600" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-sm font-semibold text-slate-800">4.9/5 Avis</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-6 h-full">

<div className="h-[60%] w-full bg-gradient-to-br from-amber-100 via-amber-200 to-yellow-100 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden shadow-sm border border-amber-200/50">
<div className="z-10">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                        Voyagez en toute  sérénité.
                    </h1>
<div className="flex items-center gap-4 mb-8">
<div className="flex -space-x-3">
<img alt="Avatar" className="w-10 h-10 rounded-full border-2 border-amber-100" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Avatar" className="w-10 h-10 rounded-full border-2 border-amber-100" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Avatar" className="w-10 h-10 rounded-full border-2 border-amber-100" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<span className="text-sm font-medium text-slate-700 bg-white/40 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                            +12k trajets ce mois
                        </span>
</div>
<p className="text-lg text-slate-700 max-w-sm leading-relaxed">
                        Simplifiez vos déplacements urbains. Chauffeurs professionnels, temps d'attente réduit et confort garanti à chaque course.
                    </p>
</div>
<div className="flex justify-end mt-4">
<button className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-white shadow-xl hover:bg-slate-800 transition-all hover:scale-105 group">
<svg className="lucide lucide-arrow-right w-8 h-8 stroke-[1.5] group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="absolute -top-10 -right-10 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
</div>

<div className="h-[40%] w-full grid grid-cols-2 gap-6">

<div className="bg-gray-100 rounded-[2rem] p-8 flex flex-col justify-between relative overflow-hidden group">
<span className="bg-black text-white text-xs font-medium px-3 py-1.5 rounded-full w-fit">
                        Disponible 24/7
                    </span>
<div className="">
<span className="block text-6xl font-semibold tracking-tight text-slate-900 mb-2">15</span>
<span className="leading-snug text-lg text-slate-500" style={{}}>Minutes d'attente max.</span>
</div>
</div>

<div className="bg-orange-50 rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden relative border border-orange-100">
<div className="absolute top-0 right-0 p-32 bg-orange-200 rounded-full filter blur-3xl opacity-30 translate-x-10 -translate-y-10"></div>
<div>
<span className="text-5xl font-semibold tracking-tight text-slate-900 mb-2 block">10k+</span>
<span className="text-lg text-slate-600">Clients Satisfaits</span>
</div>
<div className="flex items-center gap-2 mt-4 text-orange-800 text-sm font-medium">
<svg className="lucide lucide-shield-check w-5 h-5 stroke-[1.5]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                        Transport Sécurisé
                    </div>
</div>
</div>
</div>

<div className="lg:col-span-4 h-full">
<div className="h-full w-full bg-stone-800 rounded-[2rem] p-8 md:p-10 flex flex-col relative overflow-hidden text-white group">

<img alt="Luxury Interior" className="transition-transform duration-1000 group-hover:scale-110 opacity-60 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1572191267783-5618f992aff5?w=1600&amp;q=80"/>
<div className="bg-gradient-to-b from-stone-900/80 via-stone-900/40 to-stone-900/90 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Flotte Premium</h2>
<p className="text-lg text-gray-300 leading-relaxed">
                            Nos derniers véhicules électriques offrent un confort silencieux et une technologie de pointe pour vos trajets d'affaires.
                        </p>
</div>
<div className="flex flex-col gap-4 mt-12">

<div className="self-end bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl w-3/4 transform translate-x-4">
<div className="flex items-center gap-3">
<div className="bg-amber-500 rounded-full p-2 text-black">
<svg className="lucide lucide-wifi w-5 h-5 stroke-[1.5]" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
</div>
<div className="">
<p className="text-sm font-medium text-white">Wi-Fi à bord</p>
<p className="text-xs text-gray-400">Connexion haut débit</p>
</div>
</div>
</div>
<div className="self-start bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl w-3/4 transform -translate-x-2">
<div className="flex items-center gap-3">
<div className="bg-amber-500 rounded-full p-2 text-black">
<svg className="lucide lucide-battery-charging w-5 h-5 stroke-[1.5]" data-lucide="battery-charging" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 7-3 5h4l-3 5"></path><path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"></path><path d="M22 14v-4"></path><path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"></path></svg>
</div>
<div className="">
<p className="text-sm font-medium text-white">100% Électrique</p>
<p className="text-xs text-gray-400">Voyagez vert</p>
</div>
</div>
</div>
</div>
<div className="flex items-center justify-between mt-auto pt-8">
<span className="px-4 py-2 rounded-full bg-white text-slate-900 text-sm font-semibold">
                            Gamme Business
                        </span>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
