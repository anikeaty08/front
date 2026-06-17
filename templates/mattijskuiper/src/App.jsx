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
      

<header className="relative w-full h-[85vh] overflow-hidden bg-zinc-900">

<img alt="Hero Achtergrond" className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>

<div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
<div className="mb-6">

<h1 className="text-white text-4xl md:text-6xl font-medium tracking-tighter uppercase mb-4">
                    Mattijs Kuiper
                </h1>
<p className="text-zinc-300 text-sm md:text-lg font-light tracking-wide uppercase opacity-90">
                    Fotografie
                </p>
</div>
<p className="text-white/80 text-lg md:text-2xl font-light tracking-tight max-w-2xl italic font-serif">
                "Momenten vastgelegd met gevoel"
            </p>

<div className="absolute bottom-12 animate-bounce">
<iconify-icon className="text-white/50" icon="solar:mouse-minimalistic-linear" width="28"></iconify-icon>
</div>
</div>
</header>

<section className="relative z-20 -mt-24 px-4 md:px-8 pb-16 max-w-7xl mx-auto">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">

<a className="group bg-white p-6 border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-start justify-between h-32 md:h-40" href="#">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="solar:home-linear" width="28"></iconify-icon>
<span className="font-medium text-lg tracking-tight">Home</span>
</a>

<a className="group bg-white p-6 border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-start justify-between h-32 md:h-40" href="#about">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="solar:user-id-linear" width="28"></iconify-icon>
<span className="font-medium text-lg tracking-tight">Even voorstellen</span>
</a>

<a className="group bg-zinc-900 p-6 border border-zinc-900 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-start justify-between h-32 md:h-40 md:col-span-2" href="#portfolio">
<div className="w-full flex justify-between items-start">
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors" icon="solar:camera-linear" width="28"></iconify-icon>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<span className="font-medium text-lg tracking-tight text-white">Eigen werk bekijken</span>
</a>

<a className="group bg-white p-6 border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-start justify-between h-32 md:h-40" href="#rates">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="solar:tag-price-linear" width="28"></iconify-icon>
<span className="font-medium text-lg tracking-tight">Tarieven</span>
</a>

<a className="group bg-zinc-50 p-6 border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-start justify-between h-32 md:h-40 md:col-span-2 relative overflow-hidden" href="#flip">
<div className="absolute right-0 top-0 opacity-5 group-hover:opacity-10 transition-opacity">
<iconify-icon icon="solar:armchair-2-linear" width="120"></iconify-icon>
</div>
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="solar:gallery-wide-linear" width="28"></iconify-icon>
<div className="">
<span className="font-medium text-lg tracking-tight block">Flip en zo</span>
<span className="text-xs text-zinc-500 font-normal">Interieur &amp; Wanddecoratie</span>
</div>
</a>

<a className="group bg-white p-6 border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-start justify-between h-32 md:h-40" href="#contact">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="solar:letter-linear" width="28"></iconify-icon>
<span className="font-medium text-lg tracking-tight">Contact</span>
</a>

</div>
</section>

<section className="bg-white pt-24 pb-24" id="about">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<div className="aspect-[4/5] overflow-hidden group bg-zinc-100 w-full relative">
<img alt="Mattijs Kuiper" className="group-hover:grayscale-0 transition-all duration-700 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3a054f31-5e3b-49d4-aaa7-cfc2113d09ea_1600w.jpg"/>
</div>
</div>
<div className="order-1 md:order-2">
<span className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-4 block">Achter de camera</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-6">Mattijs Kuiper.</h2>
<div className="space-y-4 text-zinc-600 font-light leading-relaxed text-lg">
<p className="">
                        Fotografie is voor mij meer dan alleen het indrukken van een knop. Het gaat om het zien van licht, het voelen van de sfeer en het vastleggen van dat ene vluchtige moment dat anders verloren zou gaan.
                    </p>
<p className="">
                        Met een achtergrond in design en een passie voor esthetiek, streef ik naar beelden die rust en authenticiteit uitstralen. Of het nu gaat om een portret, een bruiloft of een commerciële shoot.
                    </p>
</div>
<a className="inline-flex items-center gap-2 mt-8 text-sm font-medium uppercase tracking-widest border-b border-zinc-900 pb-1 hover:text-zinc-600 hover:border-zinc-400 transition-colors" href="#">
                    Lees mijn volledige verhaal
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50" id="portfolio">
<div className="flex max-w-7xl mr-auto mb-12 ml-auto pr-6 pl-6 items-end justify-between">
<div className="">
<span className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-2 block">Portfolio</span>
<h2 className="text-3xl font-medium tracking-tight text-zinc-900">Recent Werk</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
                Bekijk alles <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">

<div className="aspect-square relative overflow-hidden group cursor-pointer">
<img alt="Portfolio 1" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a389992c-72b4-47ef-bae0-f2c1bc202448_800w.jpg"/>
<div className="group-hover:bg-black/20 transition-colors duration-300 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="aspect-square relative overflow-hidden group cursor-pointer">
<img alt="Portfolio 2" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e2ad0e7-4b62-46ac-9806-a6440b7de2ec_800w.jpg"/>
<div className="group-hover:bg-black/20 transition-colors duration-300 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="aspect-square relative overflow-hidden group cursor-pointer">
<img alt="Portfolio 3" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a57f64c3-78dd-4b04-a0e6-bd85a517a331_800w.jpg"/>
<div className="group-hover:bg-black/20 transition-colors duration-300 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="aspect-square relative overflow-hidden group cursor-pointer">
<img alt="Portfolio 4" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e05f1f5b-e1bc-475b-a10f-c1b974d819a4_800w.jpg"/>
<div className="group-hover:bg-black/20 transition-colors duration-300 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="aspect-square relative overflow-hidden group cursor-pointer">
<img alt="Portfolio 5" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/686df8e4-9a6c-4011-b484-7fe72a493ff2_800w.jpg"/>
<div className="group-hover:bg-black/20 transition-colors duration-300 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="aspect-square relative overflow-hidden group cursor-pointer">
<img alt="Portfolio 6" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8ce45497-2a41-4a4e-a03f-4668d5842d99_800w.jpg"/>
<div className="group-hover:bg-black/20 transition-colors duration-300 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="aspect-square relative overflow-hidden group cursor-pointer">
<img alt="Portfolio 7" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70779b3a-7010-4333-bc64-9333334f8efd_800w.jpg"/>
<div className="group-hover:bg-black/20 transition-colors duration-300 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="aspect-square relative overflow-hidden group cursor-pointer">
<img alt="Portfolio 8" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eced21a4-3cd1-435f-aed6-5c9c1e7aa1f0_800w.jpg"/>
<div className="group-hover:bg-black/20 transition-colors duration-300 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-block border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors" href="#">
                    Bekijk volledig portfolio
                </a>
</div>
</div>
</section>

<section className="py-20 bg-white border-b border-zinc-100" id="rates">
<div className="max-w-3xl mx-auto px-6 text-center">
<iconify-icon className="text-zinc-300 mb-6" icon="solar:tag-horizontal-linear" width="40"></iconify-icon>
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-4">Investeren in herinneringen</h2>
<p className="text-zinc-500 font-light text-lg mb-8 leading-relaxed">
                Transparante pakketten voor elke gelegenheid. Van intieme portretsessies tot volledige trouwdagen. Kwaliteit en aandacht staan altijd voorop.
            </p>
<a className="inline-flex items-center justify-center px-8 py-3 bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-200" href="#">
                Bekijk de tarieven
            </a>
</div>
</section>

<section className="py-24 bg-stone-50 text-stone-900" id="flip">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="relative pl-0 lg:pl-12">
<span className="text-xs font-semibold tracking-widest uppercase text-stone-400 mb-2 block">Interieur &amp; Lifestyle</span>
<h2 className="text-4xl font-serif font-normal tracking-tight mb-6">Flip en zo</h2>
<p className="text-stone-600 font-light text-lg mb-6 leading-relaxed">
                        Naast fotografie heb ik een passie voor interieur en unieke wanddecoratie. "Flip en zo" is mijn creatieve uitlaatklep waar fotografie en interieurstyling samenkomen. Ontdek unieke prints en wanddecoratie voor jouw huis.
                    </p>
<ul className="space-y-3 mb-8 text-stone-500 font-light">
<li className="flex items-center gap-3">
<iconify-icon className="text-stone-400" icon="solar:check-circle-linear"></iconify-icon>
                            Fine-art prints
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-stone-400" icon="solar:check-circle-linear"></iconify-icon>
                            Wanddecoratie advies
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-stone-400" icon="solar:check-circle-linear"></iconify-icon>
                            Custom inlijstwerk
                        </li>
</ul>
<a className="text-stone-900 border-b border-stone-900 pb-0.5 hover:text-stone-600 hover:border-stone-400 transition-colors text-sm font-medium uppercase tracking-wide" href="#">
                        Bezoek Flip en zo
                    </a>
</div>
<div className="relative h-[500px] w-full bg-stone-200 overflow-hidden">
<img alt="Flip en zo Interieur" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs font-medium uppercase tracking-wider text-stone-900">
                        Wanddecoratie
                     </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-4">Laten we kennismaken</h2>
<p className="text-zinc-500 font-light">Heb je een vraag of wil je een shoot boeken? Vul het formulier in.</p>
</div>
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="relative group">
<input className="peer w-full border-b border-zinc-200 bg-transparent py-3 text-sm text-zinc-900 focus:border-zinc-900 focus:outline-none transition-colors placeholder-transparent" id="name" required="" type="text"/>
<label className="absolute left-0 -top-3.5 text-xs text-zinc-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-zinc-900" htmlFor="name">Naam</label>
</div>
<div className="relative group">
<input className="peer w-full border-b border-zinc-200 bg-transparent py-3 text-sm text-zinc-900 focus:border-zinc-900 focus:outline-none transition-colors placeholder-transparent" id="email" required="" type="email"/>
<label className="absolute left-0 -top-3.5 text-xs text-zinc-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-zinc-900" htmlFor="email">Emailadres</label>
</div>
</div>
<div className="relative group">
<select className="peer w-full border-b border-zinc-200 bg-transparent py-3 text-sm text-zinc-900 focus:border-zinc-900 focus:outline-none transition-colors appearance-none rounded-none" id="subject">
<option disabled="" selected="" value="">Kies een onderwerp</option>
<option value="shoot">Fotoshoot boeken</option>
<option value="wedding">Bruiloft</option>
<option value="flip">Vraag over Flip en zo</option>
<option value="other">Anders</option>
</select>
<iconify-icon className="absolute right-0 top-3 text-zinc-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="relative group">
<textarea className="peer w-full border-b border-zinc-200 bg-transparent py-3 text-sm text-zinc-900 focus:border-zinc-900 focus:outline-none transition-colors placeholder-transparent resize-none" id="message" required="" rows="4"></textarea>
<label className="absolute left-0 -top-3.5 text-xs text-zinc-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-zinc-900" htmlFor="message">Jouw bericht</label>
</div>
<div className="pt-4 flex justify-center">
<button className="bg-zinc-900 text-white px-10 py-3 text-sm font-medium hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95" type="submit">
                        Verstuur bericht
                    </button>
</div>
</form>
<div className="mt-20 flex justify-center gap-8 border-t border-zinc-100 pt-10">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="brandico:instagram" width="20"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="brandico:facebook" width="20"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="solar:phone-linear" width="22"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="bg-zinc-50 border-t border-zinc-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-1">Mattijs Kuiper</h3>
<p className="uppercase text-xs text-zinc-400 tracking-widest" style={{}}>Fotografie</p>
</div>
<div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Home</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Portfolio</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Algemene Voorwaarden</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Privacy</a>
</div>
<div className="text-xs text-zinc-400">
                © 2023 Mattijs Kuiper
            </div>
</div>
</footer>

    </>
  );
}
