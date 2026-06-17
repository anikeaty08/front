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
      
<main className="w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2">

<article className="relative aspect-[4/5] overflow-hidden group">
<img alt="Espresso" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/90 z-10"></div>
<div className="relative z-20 h-full flex flex-col items-center justify-between p-8 text-center">
<header className="flex flex-col items-center">
<h2 className="font-serif text-2xl tracking-tight text-gold uppercase">Black Fuel</h2>
<span className="text-xs tracking-[0.2em] text-zinc-400 uppercase mt-1">Bar • Café</span>
</header>
<div className="flex flex-col gap-4 gap-x-4 gap-y-4 items-center">
<h3 className="md:text-4xl leading-tight text-3xl font-medium text-white tracking-tight">Tu día merece más que <br/> <span className="text-gold font-serif italic">¡solo un café!</span></h3>
<p className="text-lg text-zinc-300 max-w-[250px]">
                        Experimenta la verdadera esencia de la preparación premium.
                    </p>
<a className="mt-4 px-8 py-3 bg-zinc-950 border border-zinc-800 text-lg text-white hover:bg-zinc-900 transition-colors uppercase tracking-widest text-xs" href="#">
                        Reserva una Mesa
                    </a>
</div>
</div>
</article>

<article className="relative aspect-[4/5] overflow-hidden group">
<img alt="Cocktails" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-900/60 to-zinc-950/90 z-10"></div>
<div className="relative z-20 h-full flex flex-col items-center justify-between p-8 text-center">
<header className="flex flex-col items-center">
<h2 className="font-serif text-2xl tracking-tight text-gold uppercase">Black Fuel</h2>
</header>
<div className="w-full flex flex-col items-center">
<h3 className="text-2xl font-medium tracking-tight text-white mb-2">
                        Reserva y asegura
                    </h3>
<div className="text-4xl font-serif text-gold mb-8 tracking-tight">
                        20% DSCTO
                    </div>
<div className="w-full max-w-[280px] space-y-6">
<div className="flex justify-between items-end border-b border-zinc-700/50 pb-2">
<div className="text-left">
<h4 className="text-xl tracking-tight text-white">Hora Feliz</h4>
<p className="text-base text-zinc-400">Mar a Jue</p>
</div>
<div className="text-right">
<span className="text-sm text-zinc-500 line-through mr-2">$15.00</span>
<span className="text-xl tracking-tight text-gold">$12.00</span>
</div>
</div>
<div className="flex justify-between items-end border-b border-zinc-700/50 pb-2">
<div className="text-left">
<h4 className="text-xl tracking-tight text-white">Fin de Semana</h4>
<p className="text-base text-zinc-400">Vie y Sáb</p>
</div>
<div className="text-right">
<span className="text-sm text-zinc-500 line-through mr-2">$22.00</span>
<span className="text-xl tracking-tight text-gold">$17.60</span>
</div>
</div>
</div>
<a className="mt-8 px-8 py-3 bg-gold text-zinc-950 font-medium text-xs uppercase tracking-widest hover:bg-opacity-90 transition-colors" href="#">
                        Reclamar Oferta
                    </a>
</div>
</div>
</article>

<article className="relative aspect-[4/5] overflow-hidden bg-zinc-950 bg-noise flex flex-col items-center justify-center p-8 text-center">
<header className="mb-12 flex flex-col items-center">
<h2 className="text-gold uppercase text-2xl tracking-tight font-serif">Black Fuel</h2>
<div className="w-12 h-[1px] bg-gold mt-4 mb-2"></div>
<span className="uppercase text-lg text-white tracking-tight">Menú Degustación</span>
</header>
<div className="w-full max-w-[300px] space-y-8 flex-grow">
<div className="flex justify-between items-end">
<div className="text-left">
<h4 className="text-xl tracking-tight text-white">Desayuno</h4>
<p className="text-base text-zinc-500">Servido hasta 11am</p>
</div>
<div className="text-right flex flex-col items-end">
<span className="text-xl tracking-tight text-zinc-300">$25.00</span>
<span className="text-xs text-zinc-600 uppercase">por persona</span>
</div>
</div>
<div className="flex justify-between items-end">
<div className="text-left">
<h4 className="text-xl tracking-tight text-white">Almuerzo</h4>
<p className="text-base text-zinc-500">12pm - 4pm</p>
</div>
<div className="text-right flex flex-col items-end">
<span className="text-xl tracking-tight text-zinc-300">$45.00</span>
<span className="text-xs text-zinc-600 uppercase">por persona</span>
</div>
</div>
<div className="flex justify-between items-end">
<div className="text-left">
<h4 className="text-xl tracking-tight text-white">Cena</h4>
<p className="text-base text-zinc-500">6pm - 11pm</p>
</div>
<div className="text-right flex flex-col items-end">
<span className="text-xl tracking-tight text-gold">$85.00</span>
<span className="text-xs text-zinc-600 uppercase">con maridaje</span>
</div>
</div>
</div>
<p className="text-xs text-zinc-500 mt-8 max-w-[250px] leading-relaxed">
                Los precios pueden variar en días festivos. Se recomienda encarecidamente reservar para el servicio de cena.
            </p>
</article>

<article className="relative aspect-[4/5] overflow-hidden group">
<img alt="Barista pouring" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0" src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-zinc-950/80 z-10"></div>
<div className="relative z-20 h-full flex flex-col items-center justify-between p-8 text-center">
<header className="flex flex-col items-center">
<h2 className="font-serif text-2xl tracking-tight text-gold uppercase">Black Fuel</h2>
</header>
<div className="flex flex-col items-center mb-12">
<p className="text-lg text-zinc-300 mb-4">En este Día Especial, te agradecemos por ser parte de la</p>
<h3 className="text-4xl font-serif text-gold tracking-tight leading-none mb-2">
                        EXPERIENCIA
                    </h3>
<h3 className="text-3xl font-medium tracking-tight text-white">
                        BLACK FUEL.
                    </h3>
<div className="relative mt-12 w-full flex justify-center">
<div className="absolute top-0 w-[1px] h-16 bg-gradient-to-b from-gold/0 via-gold to-gold/0"></div>
<p className="text-base text-zinc-400 mt-8 max-w-[200px]">
                            Cada taza transforma los momentos en algo muy especial.
                        </p>
</div>
</div>
</div>
</article>

<article className="relative aspect-[4/5] overflow-hidden bg-[#0a0a0a] bg-noise border border-zinc-800/50 flex flex-col items-center p-8 text-center shadow-2xl z-10 md:scale-105">
<header className="mb-10 flex flex-col items-center w-full">
<span className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-2">Menú</span>
<h2 className="font-serif text-3xl tracking-tight text-gold uppercase">Black Fuel</h2>
<div className="w-full h-[1px] bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 mt-6"></div>
</header>
<div className="w-full max-w-[320px] space-y-6 flex-grow flex flex-col justify-center">
<div className="flex justify-between items-baseline group cursor-pointer">
<div className="text-left flex-grow">
<h4 className="text-xl tracking-tight text-zinc-200 group-hover:text-white transition-colors">Pour Over</h4>
</div>
<div className="border-b border-dotted border-zinc-700 flex-grow mx-4 opacity-30"></div>
<span className="text-lg tracking-tight text-gold">$6.00</span>
</div>
<div className="flex justify-between items-baseline group cursor-pointer">
<div className="text-left flex-grow">
<h4 className="text-xl tracking-tight text-zinc-200 group-hover:text-white transition-colors">Cortado</h4>
</div>
<div className="border-b border-dotted border-zinc-700 flex-grow mx-4 opacity-30"></div>
<span className="text-lg tracking-tight text-gold">$4.50</span>
</div>
<div className="flex justify-between items-baseline group cursor-pointer mt-8">
<div className="text-left flex-grow">
<h4 className="text-xl tracking-tight text-zinc-200 group-hover:text-white transition-colors">Old Fashioned Ahumado</h4>
</div>
<div className="border-b border-dotted border-zinc-700 flex-grow mx-4 opacity-30"></div>
<span className="text-lg tracking-tight text-gold">$16.00</span>
</div>
<div className="flex justify-between items-baseline group cursor-pointer">
<div className="text-left flex-grow">
<h4 className="text-xl tracking-tight text-zinc-200 group-hover:text-white transition-colors">Espresso Martini</h4>
</div>
<div className="border-b border-dotted border-zinc-700 flex-grow mx-4 opacity-30"></div>
<span className="text-lg tracking-tight text-gold">$14.00</span>
</div>
</div>
<div className="mt-8 flex items-center justify-center gap-2 text-zinc-500">
<i className="w-4 h-4" data-lucide="coffee" strokeWidth="1.5"></i>
<span className="text-xs uppercase tracking-widest">Selección Premium</span>
<i className="w-4 h-4" data-lucide="glass-water" strokeWidth="1.5"></i>
</div>
</article>

<article className="relative aspect-[4/5] overflow-hidden group">
<img alt="Dessert" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-zinc-950/60 to-transparent z-10"></div>
<div className="relative z-20 h-full flex flex-col items-start justify-between p-8">
<div className="max-w-[280px]">
<h3 className="text-3xl font-medium tracking-tight text-white leading-tight mb-4">
                        ¡Celebra tu cumpleaños aquí en Black Fuel!
                    </h3>
<div className="inline-block px-3 py-1 bg-gold text-zinc-950 text-xs font-medium uppercase tracking-widest mb-3">
                        Obtienes:
                    </div>
<p className="text-lg text-zinc-200">
                        Un postre especial de autor o un cóctel de cortesía por nuestra cuenta.
                    </p>
</div>
<div className="w-full">
<header className="mb-4">
<h2 className="font-serif text-2xl tracking-tight text-gold uppercase">Black Fuel</h2>
</header>
<p className="text-base text-zinc-400 pl-4 border-l-2 border-gold/50">
                        ¡Trae a 5 amigos y el cumpleañero tendrá su comida gratis!
                    </p>
</div>
</div>
</article>

<article className="relative aspect-[4/5] overflow-hidden">
<img alt="Cafe Interior" className="absolute inset-0 w-full h-full object-cover z-0" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-zinc-950/40 z-10"></div>
<div className="absolute inset-0 z-20 flex items-center justify-center p-6">

<div className="flex flex-col text-center bg-white/5 w-full max-w-[300px] border-white/10 border rounded-sm pt-8 pr-8 pb-8 pl-8 shadow-2xl backdrop-blur-xl items-center">
<h2 className="font-serif text-xl tracking-tight text-gold uppercase mb-6">Black Fuel</h2>
<span className="text-xs tracking-[0.2em] text-zinc-300 uppercase mb-2">Evento Especial</span>
<h3 className="text-3xl font-medium tracking-tight text-white leading-none mb-6">
                        Noches de <br/>
<span className="text-gold font-serif italic">Jazz en Vivo</span>
</h3>
<p className="text-base text-zinc-200 mb-6">
                        ¡Disfruta de un cóctel de autor o cerveza de barril especial de <strong className="text-white">18:30 a 20:30</strong>!
                    </p>
<div className="w-full h-[1px] bg-white/20 mb-4"></div>
<p className="text-sm text-zinc-400">
                        Válido solo este <strong className="text-white">Sábado</strong> durante el servicio de noche.
                    </p>
</div>
</div>
</article>

<article className="relative aspect-[4/5] overflow-hidden group">
<img alt="Gourmet Burger" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0" src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/90 z-10"></div>
<div className="relative z-20 h-full flex flex-col items-center justify-between p-8 text-center">
<header className="flex flex-col items-center">
<h2 className="font-serif text-2xl tracking-tight text-gold uppercase">Black Fuel</h2>
</header>
<div className="flex flex-col items-center mb-12">
<h3 className="text-3xl font-medium tracking-tight text-white mb-2">
                        Reserva y obtén
                    </h3>
<div className="text-4xl font-serif text-gold tracking-tight mb-2">
                        $20 DSCTO
                    </div>
<h4 className="text-2xl text-white tracking-tight mb-6">
                        en tu cena en nuestro lounge.
                    </h4>
<div className="flex flex-col items-center gap-2">
<p className="text-base text-zinc-300">Ven a vivir la experiencia</p>
<strong className="text-lg text-white font-medium">¡Black Fuel!</strong>
<div className="w-[1px] h-8 bg-gold/50 mt-4"></div>
</div>
</div>
<p className="text-xs tracking-widest text-zinc-500 uppercase">Descuento válido para reservas online</p>
</div>
</article>

<article className="relative aspect-[4/5] overflow-hidden group">
<img alt="Coffee Pour" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0" src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/20 to-black/90 z-10"></div>
<div className="relative z-20 h-full flex flex-col items-center justify-between p-8 text-center">
<header className="flex flex-col items-center">
<h2 className="font-serif text-2xl tracking-tight text-gold uppercase">Black Fuel</h2>
</header>
<div className="flex flex-col items-center gap-4">
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-white leading-tight">
                        Tu velada necesita <br/>
<span className="text-gold font-serif italic">la mezcla perfecta.</span>
</h3>
<p className="text-lg text-zinc-300 max-w-[250px]">
                        Únete a nosotros para una sesión de degustación inolvidable.
                    </p>
<a className="mt-4 px-8 py-3 bg-white text-zinc-950 text-xs font-medium hover:bg-zinc-200 transition-colors uppercase tracking-widest" href="#">
                        Reserva Ahora
                    </a>
</div>
</div>
</article>
</main>


    </>
  );
}
