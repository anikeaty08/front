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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/95 backdrop-blur-md text-white">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-3xl font-light tracking-tighter">J</span>
<div className="h-6 w-px bg-white/20"></div>
<span className="text-xs uppercase tracking-widest text-neutral-400">Atelier Parrucchieri</span>
</div>
<a className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest hover:text-neutral-300 transition-colors" href="#">
<span>Torna al Trova Saloni</span>
<svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</nav>

<header className="relative bg-black text-white min-h-[85vh] flex items-center pt-20 overflow-hidden">
<div className="absolute inset-0 z-0">

<div className="absolute inset-0 bg-black/50 z-10"></div>
<img alt="Interni Salone 16 se.dici" className="w-full h-full object-cover" src="https://parsefiles.back4app.com/XC4wB4ZJEUbU7C63Q97MTFj5ybCkFnUGbVQjt8lQ/e4f40dc60978ff0d45a1d148cdc6bbc5_1669733789201832489538800.jpeg"/>
</div>
<div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end pb-24">
<div className="lg:col-span-8 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-medium tracking-widest uppercase">Promozioni Attive</span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1]">
                    16 se.dici <br/>
<span className="text-neutral-400 font-light">Atelier Parrucchieri</span>
</h1>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-neutral-400">
<div className="flex items-center gap-2">
<svg className="lucide lucide-map-pin w-5 h-5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-lg font-light">via Fiumazzo, 582 Voltana - RA 48022</span>
</div>
<div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-neutral-700"></div>
<span className="text-lg font-light">Di Ombretta Toschi</span>
</div>
</div>
<div className="lg:col-span-4 flex justify-end gap-4">
<button className="p-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 group">
<svg className="lucide lucide-arrow-left w-6 h-6" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="p-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 group">
<svg className="lucide lucide-arrow-right w-6 h-6" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</header>

<section className="relative z-30 -mt-20 px-6 mb-24">
<div className="max-w-7xl mx-auto">
<div className="bg-white rounded-2xl shadow-2xl shadow-black/20 overflow-hidden border border-neutral-100 flex flex-col md:flex-row">
<div className="md:w-2/5 bg-neutral-100 min-h-[300px] relative group overflow-hidden">
<img alt="Offerta Degradè Joelle" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://areariservata.degradejoelle.it/wp-content/uploads/2025/03/Copia-di-Foto-Coupon-Shooting-9.png"/>
<div className="absolute top-6 left-6 bg-white/95 backdrop-blur px-4 py-3 rounded-lg shadow-sm">
<p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">Promo Joelle</p>
<p className="text-3xl font-semibold tracking-tight">€70</p>
</div>
</div>
<div className="md:w-3/5 p-10 lg:p-12 flex flex-col justify-center">
<div className="flex justify-between items-start mb-6">
<div>
<span className="text-green-600 text-xs font-semibold uppercase tracking-widest mb-2 block">Coupon Esclusivo</span>
<h2 className="text-3xl font-medium tracking-tight text-black mb-2">Degradè Joelle + Piega Glamour</h2>
<p className="text-lg text-neutral-500 font-light">Un'offerta speciale per rinnovare il tuo look con la tecnica originale.</p>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 items-center pt-6 border-t border-neutral-100">
<button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-500/20">
<svg className="lucide lucide-message-circle w-5 h-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                            Prenota su WhatsApp
                        </button>
<a className="text-neutral-500 hover:text-black text-sm font-medium transition-colors underline decoration-neutral-300 underline-offset-4" href="#">
                            Oppure chiama in salone
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-32">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
<div className="space-y-8">
<span className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase">Il Salone</span>
<h3 className="text-3xl lg:text-4xl font-medium tracking-tight text-black leading-tight">
                    Uno spazio storico a Voltana, dedicato alla bellezza dal 1996.
                </h3>
<div className="space-y-6 text-lg text-neutral-600 font-light leading-relaxed">
<p className="">
                        16 Atelier Parrucchieri è un punto di riferimento per la frazione più popolosa del comune di Lugo. Ombretta, che lo gestisce con passione, nel 2016 ha trasformato il salone nel primo <span className="text-black font-normal">Centro Degradè Joelle</span> della provincia di Ravenna.
                    </p>

<div className="flex gap-4 bg-neutral-50 border-neutral-100 border rounded-xl pt-5 pr-5 pb-5 pl-5 gap-x-4 gap-y-4 items-start">
<div className="shrink-0 flex items-center pt-1">
<svg className="w-[91px] h-[24px]" data-icon-replaced="true" fill="none" height="58" strokeWidth="2" style={{width: '91px', height: '24px', color: 'rgb(82, 82, 82)'}} viewbox="0 0 91 58" width="91" xmlns="http://www.w3.org/2000/svg">
<path className="" clip-rule="evenodd" d="M25.795 29.563c-3.167 1.875-5.667 4.792-7.083 8.333 3.666-1.541 7.458-1.541 11.375 0 2.208-4.291 5.375-7.583 9.5-9.875-6.084-2.833-12.75-2.291-18.459-.333-6.541 2.25-11.333 6.666-13.041 11.291-2.417 6.375-1.125 13.5 3.5 19 4.625 5.5 11.458 8.625 18.667 8.5 4.375-.083 8.666-1.291 12.5-3.541 7.208-4.25 11.833-11.417 12.5-19.792.667-8.375-2.208-16.541-7.833-22.333-3.833-3.958-8.833-6.5-14.167-7.25-.458-.083-.916-.125-1.375-.125-5.083 0-9.917 2.083-13.5 5.833-.667.708-1.291 1.458-1.875 2.25l-.208.292c-2.459 3.416-3.834 7.5-3.959 11.75h3.167c.166-3.375 1.25-6.625 3.208-9.375 3.084-4.292 7.834-6.833 13.125-6.833 6.625 0 12.542 3.583 15.75 9.166 3.209 5.584 3.125 12.375-.208 17.875-2.667 4.417-7.209 7.417-12.292 8.167-5.083.75-10.208-1.167-13.458-5.042-3.25-3.875-3.917-9.208-1.75-13.708.375-.792.833-1.542 1.333-2.25 1.5-2.083 3.5-3.5 5.833-4.125 2.334-.625 4.792-.375 6.917.708 2.125 1.084 3.666 3.084 4.333 5.417.667 2.333.292 4.792-1.041 6.833-1.209 1.875-3.209 3.042-5.459 3.209h-.458c-1.958-.167-3.667-1.042-4.792-2.5-1.125-1.458-1.375-3.375-.708-5.083l.083-.208c.5-1.125 1.333-2.042 2.375-2.625 1.042-.583 2.25-.708 3.375-.333.917.292 1.625.958 2.042 1.792.416.833.375 1.791-.084 2.583-.458.792-1.208 1.375-2.083 1.583 1.458-.292 2.625-1.25 3.125-2.625.5-1.375.25-2.917-.708-4.083-1.084-1.333-2.834-1.917-4.542-1.542-1.708.375-3.125 1.667-3.708 3.333-.583 1.667-.208 3.5.958 4.875 1.292 1.542 3.375 2.292 5.375 1.958 2.458-.416 4.458-2.083 5.333-4.416.875-2.334.375-4.959-1.333-6.959-1.708-2-4.291-2.958-6.875-2.583-2.583.375-4.791 2.083-5.916 4.459-.75 1.583-1.042 3.333-.875 5.083-.708-.417-1.375-.917-2-1.5-.75-.708-1.333-1.5-1.792-2.375l-.458-1z" fill="#000000" fill-rule="evenodd"></path>
</svg>
</div>
<p className="text-sm text-neutral-600">
                            Nel nostro Centro Degradè Joelle autorizzato usiamo i migliori prodotti <span className="font-medium text-black">Wella Professionals</span> per garantire salute e lucentezza.
                        </p>
</div>
</div>
</div>
<div className="grid grid-cols-1 gap-8 lg:pt-12">

<div className="relative h-auto bg-neutral-100 rounded-xl overflow-hidden aspect-video">
<img alt="Interni Salone" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://parsefiles.back4app.com/XC4wB4ZJEUbU7C63Q97MTFj5ybCkFnUGbVQjt8lQ/be6ac58d3714ecc08d7a8e21fb5eca77_166973377480677884757308.jpeg"/>
</div>

<div className="grid grid-cols-2 gap-8 items-center justify-items-center px-4">
<img alt="Taglio Punte Aria Logo" className="w-full max-w-[140px] h-auto opacity-80 hover:opacity-100 transition-opacity" src="https://saloni.degradejoelle.it/wp-content/themes/saloni_joelle/assets/images/salon/tpa.svg"/>
<img alt="Starlight Logo" className="w-full max-w-[140px] h-auto opacity-80 hover:opacity-100 transition-opacity" src="https://saloni.degradejoelle.it/wp-content/themes/saloni_joelle/assets/images/salon/starlight.svg"/>
</div>
</div>
</div>
</section>

<section className="bg-black text-white py-24 border-y border-neutral-900">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase block mb-4">Le Tecniche Uniche by Joelle</span>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight">Bellezza naturale allo stato puro</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-900 cursor-pointer">
<img alt="Tecnica Degradè Joelle" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://saloni.degradejoelle.it/wp-content/themes/saloni_joelle/assets/images/salon/rebrand/tecnica-degrade.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute inset-0 flex flex-col justify-end p-6">
<span className="text-sm font-medium tracking-wide">Degradè Originale</span>
<div className="h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300 mt-2"></div>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-900 cursor-pointer">
<img alt="Tecnica Taglio Punte Aria" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://saloni.degradejoelle.it/wp-content/themes/saloni_joelle/assets/images/salon/rebrand/tecnica-tpa.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute inset-0 flex flex-col justify-end p-6">
<span className="text-sm font-medium tracking-wide">Taglio Punte Aria</span>
<div className="h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300 mt-2"></div>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-900 cursor-pointer">
<img alt="Tecnica Starlight" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://saloni.degradejoelle.it/wp-content/themes/saloni_joelle/assets/images/salon/rebrand/tecnica-starlight.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute inset-0 flex flex-col justify-end p-6">
<span className="text-sm font-medium tracking-wide">Starlight</span>
<div className="h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300 mt-2"></div>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-900 cursor-pointer">
<img alt="Tecnica Degradè Royal" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://saloni.degradejoelle.it/wp-content/themes/saloni_joelle/assets/images/salon/rebrand/tecnica-royal.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute inset-0 flex flex-col justify-end p-6">
<span className="text-sm font-medium tracking-wide">Degradè Royal</span>
<div className="h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300 mt-2"></div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32">
<div className="flex justify-between items-end mb-16">
<div>
<span className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase">Il Team</span>
<h2 className="text-3xl font-medium tracking-tight text-black mt-4">Lo Staff</h2>
</div>
<div className="hidden md:flex gap-2">
<button className="p-3 rounded-full border border-neutral-200 text-neutral-400 hover:border-black hover:text-black transition-colors">
<svg className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="p-3 rounded-full border border-neutral-200 text-neutral-400 hover:border-black hover:text-black transition-colors">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group">
<div className="aspect-[4/5] bg-neutral-100 rounded-lg mb-6 overflow-hidden relative">
<img alt="Ombretta Toschi" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://parsefiles.back4app.com/XC4wB4ZJEUbU7C63Q97MTFj5ybCkFnUGbVQjt8lQ/98a0883b62d3073fa3991e1eb4e3d498_1669737610528473544274494.jpeg"/>
</div>
<h4 className="text-xl font-medium text-black">Ombretta Toschi</h4>
<p className="text-sm text-neutral-500 uppercase tracking-wider mt-1">Titolare</p>
</div>

<div className="group">
<div className="aspect-[4/5] bg-neutral-100 rounded-lg mb-6 overflow-hidden relative">
<img alt="Valentina Babini" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://parsefiles.back4app.com/XC4wB4ZJEUbU7C63Q97MTFj5ybCkFnUGbVQjt8lQ/656264b8b8fbb085b0335f3b54225ca0_1669737593694822748096972.jpeg"/>
</div>
<h4 className="text-xl font-medium text-black">Valentina Babini</h4>
<p className="text-sm text-neutral-500 uppercase tracking-wider mt-1">Collaboratore</p>
</div>

<div className="group">
<div className="aspect-[4/5] bg-neutral-100 rounded-lg mb-6 overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center text-neutral-400 bg-neutral-100">
<svg className="lucide lucide-user w-12 h-12 opacity-20" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-6xl font-thin text-neutral-300/50">D V</span>
</div>
</div>
<h4 className="text-xl font-medium text-black">Daria Vasina</h4>
<p className="text-sm text-neutral-500 uppercase tracking-wider mt-1">Collaboratore</p>
</div>
</div>
</section>

<section className="bg-neutral-50 py-32 border-t border-neutral-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
<div>
<span className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase">Blog</span>
<h2 className="text-3xl font-medium tracking-tight text-black mt-4">Rimani Aggiornato</h2>
</div>
<a className="text-sm font-medium border-b border-neutral-300 pb-1 hover:border-black transition-colors" href="#">Visualizza tutti gli articoli</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">

<article className="flex flex-col h-full group">
<div className="aspect-video bg-neutral-200 rounded-lg mb-6 overflow-hidden relative">
<img alt="Capelli Bianchi Cortissimi Donna" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.weserv.nl/?url=www.degradejoelle.it/wp-content/uploads/2024/02/foto-copertina-6_page-0001-scaled.jpg"/>
<div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">Capelli Bianchi</div>
</div>
<h3 className="text-xl font-medium text-black mb-3 leading-snug group-hover:text-neutral-600 transition-colors">
                        Capelli Bianchi Cortissimi Donna – Idee per un Look Moderno
                    </h3>
<div className="mt-auto pt-4">
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-black transition-colors" href="#">
                            Leggi di più <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</article>

<article className="flex flex-col h-full group">
<div className="aspect-video bg-neutral-200 rounded-lg mb-6 overflow-hidden relative">
<img alt="Biondo Beige" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.weserv.nl/?url=www.degradejoelle.it/wp-content/uploads/2024/02/foto-copertina-5_page-0001-scaled.jpg"/>
<div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">Colore</div>
</div>
<h3 className="text-xl font-medium text-black mb-3 leading-snug group-hover:text-neutral-600 transition-colors">
                        Biondo Beige: A Chi Sta Bene Questo Colore Caldo e Naturale
                    </h3>
<div className="mt-auto pt-4">
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-black transition-colors" href="#">
                            Leggi di più <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</article>

<article className="flex flex-col h-full group">
<div className="aspect-video bg-neutral-200 rounded-lg mb-6 overflow-hidden relative">
<img alt="Capelli Ricci Scuri con Mèches" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.weserv.nl/?url=www.degradejoelle.it/wp-content/uploads/2024/02/foto-copertina-4_page-0001-scaled.jpg"/>
<div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">Ricci</div>
</div>
<h3 className="text-xl font-medium text-black mb-3 leading-snug group-hover:text-neutral-600 transition-colors">
                        Capelli Ricci Scuri con Mèches: Come Trasformare il tuo Look
                    </h3>
<div className="mt-auto pt-4">
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-black transition-colors" href="#">
                            Leggi di più <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</article>
</div>
</div>
</section>

<section className="bg-black text-white py-0">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="p-12 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
<span className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase mb-8">Contatti &amp; Orari</span>
<h2 className="text-3xl font-medium tracking-tight mb-2">16 se.dici Atelier</h2>
<p className="text-neutral-400 text-lg font-light mb-12">Parrucchieri di Ombretta Toschi</p>
<div className="grid grid-cols-2 gap-y-4 gap-x-12 text-base font-light text-neutral-300 mb-12 max-w-md">
<div className="contents">
<span className="text-neutral-500">Lunedì</span>
<span className="text-right tabular-nums">13:00 - 18:00</span>
</div>
<div className="contents">
<span className="text-neutral-500">Martedì</span>
<span className="text-right tabular-nums">9:00 - 19:00</span>
</div>
<div className="contents">
<span className="text-neutral-500">Mercoledì</span>
<span className="text-right tabular-nums">9:00 - 19:00</span>
</div>
<div className="contents">
<span className="text-neutral-500">Giovedì</span>
<span className="text-right tabular-nums">9:00 - 19:00</span>
</div>
<div className="contents">
<span className="text-neutral-500">Venerdì</span>
<span className="text-right tabular-nums">9:00 - 19:00</span>
</div>
<div className="contents">
<span className="text-neutral-500">Sabato</span>
<span className="text-right tabular-nums">8:00 - 16:00</span>
</div>
<div className="contents">
<span className="text-neutral-500">Domenica</span>
<span className="text-right text-neutral-400">Chiuso</span>
</div>
</div>
<div className="space-y-4">
<a className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group" href="#">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/10">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<span className="font-light">+39 0545 72711</span>
</a>
<a className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group" href="#">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/10">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<span className="font-light">toschiombretta@gmail.com</span>
</a>
<div className="flex gap-4 mt-6">
<a className="p-2 text-neutral-400 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-instagram w-6 h-6" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="p-2 text-neutral-400 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-facebook w-6 h-6" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
</div>
</div>
</div>
<div className="relative bg-neutral-900 min-h-[400px] lg:min-h-full">
<svg className="absolute inset-0 w-full h-full opacity-10" height="100%" width="100%">
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"></path>
</pattern>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative">
<div className="w-4 h-4 bg-white rounded-full animate-ping absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-75"></div>
<div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10">
<svg className="lucide lucide-map w-6 h-6 text-white" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg></div></div></div></div></div></section>
    </>
  );
}
