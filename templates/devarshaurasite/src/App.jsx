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
orange: { 50: '#fff7ed', 100: '#ffedd5', 500: '#f97316', 600: '#ea580c', 900: '#7c2d12' }
},
fontSize: {
'xs': '0.8125rem',
'sm': '0.9375rem',
'base': '1.0625rem',
'lg': '1.1875rem',
'xl': '1.3125rem',
'2xl': '1.5rem',
'3xl': '1.875rem',
'4xl': '2.25rem',
'5xl': '3rem',
'6xl': '3.75rem',
}
}
}
}



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
      

<div className="bg-slate-950 text-white text-xs font-medium py-3 text-center px-4 tracking-wide relative z-20">
<span className="opacity-80">
        Gratis verzending in NL &amp; BE bij bestellingen boven €250
      </span>
</div>

<div className="md:p-6 bg-white pt-4 pr-4 pb-4 pl-4">
<div className="relative w-full h-[90vh] min-h-[600px] rounded-[2.5rem] overflow-hidden group">
<div className="absolute inset-0">
<img alt="Modern interieur" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7afa304-4ecd-4692-8dd2-0cdc7e54346b_3840w.webp"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-700"></div>
<div className="bg-gradient-to-b from-black/60 via-transparent to-black/40 absolute inset-0"></div>
</div>
<nav className="md:p-10 flex z-30 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 left-0 items-start justify-between">
<a className="flex flex-col leading-none group/logo" href="#">
<span className="font-bold text-2xl text-white tracking-tighter group-hover/logo:text-orange-400 transition-colors">
              STALEN.
            </span>
<span className="font-medium text-sm text-white/70 tracking-widest uppercase">
              Onderstel
            </span>
</a>
<div className="hidden xl:flex gap-4 text-base font-semibold text-white/90 items-center">
<a className="hover:bg-white/10 rounded-full px-4 py-2 transition-all" href="#collectie-inside">
              Binnen
            </a>
<a className="hover:bg-white/10 rounded-full px-4 py-2 transition-all" href="#collectie-outside">
              Buiten
            </a>
<a className="hover:bg-white/10 rounded-full px-4 py-2 transition-all" href="#maatwerk">
              Maatwerk
            </a>
<div className="flex items-center gap-2 ml-4">
<button className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
<iconify-icon icon="solar:cart-large-minimalistic-linear" style={{color: 'white'}} width="24"></iconify-icon>
</button>
<button className="p-2 hover:bg-white/10 rounded-full transition-colors">
<iconify-icon icon="solar:magnifer-linear" style={{color: 'white'}} width="24"></iconify-icon>
</button>
</div>
</div>
</nav>
<div className="flex flex-col text-start z-20 p-10 absolute bottom-0 left-0">
<h1 className="md:text-7xl lg:text-8xl leading-[1.05] text-5xl font-semibold text-white tracking-tight fade-up drop-shadow-2xl">
            Het onderstel voor
            <br/>
            uw droomtafel.
          </h1>
<p className="text-white text-lg leading-relaxed mt-8 fade-up max-w-xl opacity-90">
            Hoogwaardige stalen onderstellen op maat. Van robuuste industriële
            tafelpoten tot verfijnd design, voorzien van de sterkste
            poedercoating.
          </p>
<div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 fade-up">
<a className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-full hover:bg-orange-50 transition-all text-sm tracking-tight shadow-xl" href="#collectie-inside">
              Bekijk collectie
            </a>
<a className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all text-sm tracking-tight" href="#maatwerk">
              Maatwerk aanvragen
            </a>
</div>
</div>
</div>
</div>

<section className="py-24 bg-white" id="collectie-inside">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<span className="text-orange-500 font-semibold tracking-widest uppercase text-xs">
              Onze Modellen
            </span>
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mt-4">
              Populaire Onderstellen
            </h2>
</div>
<a className="text-slate-900 font-semibold flex items-center gap-2 hover:text-orange-600 transition-colors group" href="#">
            Bekijk alle modellen
            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
<div className="group cursor-pointer">
<div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-100 mb-6">
<img alt="Matrix Poot" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-6 right-6">
<span className="bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  Bestseller
                </span>
</div>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">
              Matrix Onderstel
            </h3>
<p className="text-slate-500 text-sm mb-4">
              Het meest gekozen model voor ronde en ovale tafels.
            </p>
<div className="flex items-center justify-between">
<span className="text-lg font-bold text-slate-900">Vanaf €289,-</span>
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-950 hover:text-white transition-all">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</button>
</div>
</div>
<div className="group cursor-pointer">
<div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-100 mb-6">
<img alt="X-Poot" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">
              X-Poot (Zwaar)
            </h3>
<p className="text-slate-500 text-sm mb-4">
              Industriële klassieker voor rechthoekige eiken bladen.
            </p>
<div className="flex items-center justify-between">
<span className="text-lg font-bold text-slate-900">Vanaf €195,-</span>
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-950 hover:text-white transition-all">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</button>
</div>
</div>
<div className="group cursor-pointer">
<div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-100 mb-6">
<img alt="U-Poot" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">
              U-Onderstel Slim
            </h3>
<p className="text-slate-500 text-sm mb-4">
              Verfijnd design met een modern, slank profiel.
            </p>
<div className="flex items-center justify-between">
<span className="text-lg font-bold text-slate-900">Vanaf €175,-</span>
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-950 hover:text-white transition-all">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1">
<a className="flex flex-col leading-none mb-6" href="#">
<span className="font-bold text-2xl text-white tracking-tighter">
              STALEN.
            </span>
<span className="font-medium text-sm text-white/70 tracking-widest uppercase">
              Onderstel
            </span>
</a>
<p className="text-sm leading-relaxed mb-8">
            De specialist in stalen tafelpoten en frames. Eerlijk, sterk en
            Nederlands fabricaat.
          </p>
</div>
<div>
<h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-6">
            Producten
          </h4>
<ul className="space-y-4 text-sm">
<li>
<a className="hover:text-white transition-colors" href="#">
                Matrix Poten
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                X-Onderstellen
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                U-Profielen
              </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-6">
            Service
          </h4>
<ul className="space-y-4 text-sm">
<li>
<a className="hover:text-white transition-colors" href="#">
                Levering
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Maatwerk
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Garantie
              </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-6">
            Contact
          </h4>
<div className="space-y-4 text-sm">
<p className="flex items-center gap-3">
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon>
              Industrieweg 12, Eindhoven
            </p>
<a className="flex items-center gap-3 hover:text-white transition-colors" href="mailto:info@stalenonderstel.nl">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
              info@stalenonderstel.nl
            </a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs opacity-50">
<p>© 2024 Stalen Onderstel. Alle rechten voorbehouden.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Voorwaarden</a>
</div>
</div>
</footer>

    </>
  );
}
