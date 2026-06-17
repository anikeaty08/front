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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl tracking-tighter font-semibold text-zinc-900 uppercase flex items-center gap-2" href="#">
                Studio 333<span className="text-accent">.</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Úvod</a>
<a className="hover:text-zinc-900 transition-colors" href="#locations">Salony</a>
<a className="hover:text-zinc-900 transition-colors" href="#services">Služby</a>
<a className="hover:text-zinc-900 transition-colors" href="#about">O nás</a>
<a className="hover:text-zinc-900 transition-colors" href="#contact">Kontakt</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-xs font-medium text-zinc-900 hover:text-accent transition-colors" href="tel:+420732361754">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
                    +420 732 361 754
                </a>
<a className="hover:bg-zinc-800 transition-colors hidden sm:block text-xs font-medium text-white tracking-wide bg-zinc-900 rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#locations">
                    Vybrat salon
                </a>
</div>
</div>
</nav>

<section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Studio 333 Interior" className="w-full h-full object-cover grayscale opacity-90" src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/50 to-zinc-900/40"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
<span className="inline-block py-1 px-3 border border-white/20 rounded-full text-white/80 text-xs tracking-wider uppercase mb-6 bg-white/5 backdrop-blur-sm">
                Kadeřnictví Praha 5
            </span>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                Naším cílem je <br className="hidden md:block"/> váš skvělý účes.
            </h1>
<p className="text-lg text-zinc-300 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
                Poznejte Studio 333. Provozujeme dva kadeřnické salony v Praze 5, které nabízejí kompletní servis pro pány, dámy i děti.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="bg-white text-zinc-900 text-sm font-medium px-8 py-3.5 rounded-full hover:bg-zinc-100 transition-all transform hover:scale-105" href="#radlicka">
                    Salon Radlická
                </a>
<a className="backdrop-blur-sm border border-white/30 text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-white/10 transition-all" href="#podbarvirkou">
                    Salon Pod Barvířkou
                </a>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="locations">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight mb-4">Naše Pobočky</h2>
<p className="text-zinc-500 font-light">Vyberte si salon, který je vám blíže. V obou vás čeká profesionální péče.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 lg:gap-16">

<div className="group relative rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-100 hover:border-accent/30 transition-all duration-300" id="radlicka">
<div className="aspect-[16/9] overflow-hidden">
<img alt="Salon Radlická" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-2xl font-medium text-zinc-900">Radlická</h3>
<p className="text-sm text-zinc-500 mt-1">Radlická 333/150, Praha 5</p>
</div>
<span className="bg-zinc-900 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">Metro B</span>
</div>
<p className="text-zinc-600 font-light leading-relaxed mb-6 text-sm">
                            V roce 2007 jsme otevřeli Studio 333 na stanici metra Radlická. Kadeřnictví vás osloví pozitivní atmosférou a moderním prostředím. Preferujeme kreativitu a dbáme na špičkové střihy a nové techniky barvení.
                        </p>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-3 text-sm text-zinc-600">
<iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon>
<span>Moderní střihy a styling</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-600">
<iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon>
<span>L'Oréal Professionnel produkty</span>
</div>
</div>
<div className="flex items-center justify-between pt-6 border-t border-zinc-200">
<a className="flex items-center gap-2 text-zinc-900 font-medium text-sm hover:text-accent transition-colors" href="tel:+420732361754">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                                +420 732 361 754
                            </a>
<button className="text-xs font-medium uppercase tracking-wide text-zinc-400 hover:text-zinc-900 transition-colors">
                                Zobrazit ceník
                            </button>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-100 hover:border-accent/30 transition-all duration-300" id="podbarvirkou">
<div className="aspect-[16/9] overflow-hidden">
<img alt="Salon Pod Barvířkou" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-2xl font-medium text-zinc-900">Pod Barvířkou</h3>
<p className="text-sm text-zinc-500 mt-1">Pod Barvířkou 2374/3, Praha 5</p>
</div>
<span className="bg-zinc-100 text-zinc-600 text-[10px] uppercase font-bold px-2 py-1 rounded">Tradice od 1993</span>
</div>
<p className="text-zinc-600 font-light leading-relaxed mb-6 text-sm">
                            Kadeřnictví působí již od roku 1993. Tento salon v retro stylu vás osloví příjemným rodinným prostředím. Náš tým má dlouholeté zkušenosti s návrhem a realizací změny image i proměnami pro časopisy.
                        </p>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-3 text-sm text-zinc-600">
<iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon>
<span>Rodinná atmosféra</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-600">
<iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Proměny image</span>
</div>
</div>
<div className="flex items-center justify-between pt-6 border-t border-zinc-200">
<a className="flex items-center gap-2 text-zinc-900 font-medium text-sm hover:text-accent transition-colors" href="tel:+420732772258">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                                +420 732 772 258
                            </a>
<button className="text-xs font-medium uppercase tracking-wide text-zinc-400 hover:text-zinc-900 transition-colors">
                                Zobrazit ceník
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
                    Profesionalita a <br/><span className="text-accent">osobní přístup</span>
</h2>
<div className="w-12 h-0.5 bg-accent mb-8"></div>
<p className="text-zinc-400 font-light leading-relaxed mb-6">
                    Naše studio se snaží neustále zkvalitňovat a rozšiřovat poskytované služby. V našem týmu najdete pouze proškolené profesionály, kteří neustále sledují nové trendy, nejnovější techniky melírování a barvení.
                </p>
<p className="text-zinc-400 font-light leading-relaxed mb-8">
                    Vlasy jsou nedílnou součástí vaší osobnosti a my se staráme o to, aby byly co nejdokonalejší a nepřehlédnutelné. Pravidelně se účastníme školení a akcí pořádaných značkou L'Oréal.
                </p>
<div className="grid grid-cols-2 gap-6 mt-10">
<div className="flex flex-col gap-2">
<span className="text-3xl font-semibold text-white">2</span>
<span className="text-xs text-zinc-500 uppercase tracking-wide">Pobočky<br/>v Praze</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-3xl font-semibold text-white">15+</span>
<span className="text-xs text-zinc-500 uppercase tracking-wide">Let<br/>zkušeností</span>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
<img alt="Kadeřnické nůžky" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&amp;w=1976&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-y border-zinc-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight mb-4">Nejoblíbenější služby</h2>
<p className="text-zinc-500 font-light">Pánské, dámské i dětské kadeřnictví na vysoké úrovni.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-xl border border-zinc-200 hover:border-accent transition-colors group cursor-default shadow-sm">
<div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
<iconify-icon className="text-zinc-900 group-hover:text-accent transition-colors" icon="solar:scissors-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Střih &amp; Styling</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed mb-4">
                        Kvalitní střih je základem pro dobrý účes. Jen profesionální a vstřícný personál vám může tento komfort nabídnout. Svěřte se do rukou odborníků.
                    </p>
</div>

<div className="bg-white p-8 rounded-xl border border-zinc-200 hover:border-accent transition-colors group cursor-default shadow-sm">
<div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
<iconify-icon className="text-zinc-900 group-hover:text-accent transition-colors" icon="solar:palette-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Barvení</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed mb-4">
                        Barva nemusí vždy nutně znamenat radikální změnu vaší vizáže. Správně zvolený odstín zvýrazní rysy vaší tváře a dokonale doplní kvalitní střih.
                    </p>
</div>

<div className="bg-white p-8 rounded-xl border border-zinc-200 hover:border-accent transition-colors group cursor-default shadow-sm">
<div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
<iconify-icon className="text-zinc-900 group-hover:text-accent transition-colors" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Pro celou rodinu</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed mb-4">
                        Poradíme si se všemi typy účesů pro muže, ženy i děti. Máme zkušenosti s návrhem a realizací změny image pro každého.
                    </p>
</div>
</div>
</div>
</section>


<footer className="bg-white border-t border-zinc-200" id="contact">
<div className="max-w-7xl mx-auto px-6 py-24">
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

<div className="">
<a className="text-lg font-semibold text-zinc-900 uppercase flex items-center gap-1 mb-6" href="#">
                        Studio 333<span className="text-accent">.</span>
</a>
<p className="text-zinc-500 text-sm leading-relaxed mb-6">
                        Profesionální kadeřnické služby v Praze 5.<br/>
                        Kreativita, kvalita a příjemné prostředí.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all" href="https://www.facebook.com/studio333.cz/">
<iconify-icon icon="brandico:facebook" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="">
<h3 className="text-sm font-semibold uppercase text-zinc-900 tracking-wider mb-6">Provozovna Radlická</h3>
<div className="space-y-4">
<div className="flex gap-3 text-zinc-600 text-sm">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<p className="">Radlická 333/150<br/>Praha 5 (Metro B)</p>
</div>
<div className="flex gap-3 text-zinc-600 text-sm">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-accent transition-colors" href="tel:+420732361754">+420 732 361 754</a>
</div>
</div>
</div>

<div className="">
<h3 className="text-sm font-semibold uppercase text-zinc-900 tracking-wider mb-6">Provozovna Pod Barvířkou</h3>
<div className="space-y-4">
<div className="flex gap-3 text-zinc-600 text-sm">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<p className="">Pod Barvířkou 2374/3<br/>Praha 5</p>
</div>
<div className="flex gap-3 text-zinc-600 text-sm">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-accent transition-colors" href="tel:+420732772258">+420 732 772 258</a>
</div>
</div>
</div>
</div>
<div className="border-t border-zinc-100 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-400">
<p className="">© 2026 Studio 333. Všechna práva vyhrazena.</p>
<div className="flex gap-6 mt-4 md:mt-0">
</div>
</div>
</div>
</footer>

    </>
  );
}
