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
brand: {
50: '#F4F6F3',
100: '#E6EBE4',
200: '#CFD8CC',
300: '#A9B9A4',
800: '#4A5D43',
900: '#354330',
},
stone: {
850: '#1c1917',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-brand-100/50">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex justify-between items-center h-20">

<div className="flex items-center md:hidden">
<button className="text-stone-800 hover:text-brand-800 transition" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" type="button">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>

<a className="flex flex-col items-center group" href="#">
<span className="font-serif text-2xl tracking-wide text-brand-800 uppercase">Grynnerup</span>
<span className="font-sans text-[0.65rem] tracking-[0.25em] text-brand-900 uppercase mt-0.5 group-hover:tracking-[0.3em] transition-all duration-500">Aesthetics</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-600 hover:text-brand-800 transition-colors" href="#behandlinger">Behandlinger</a>
<a className="text-sm font-medium text-stone-600 hover:text-brand-800 transition-colors" href="#om">Om Klinikken</a>
<a className="text-sm font-medium text-stone-600 hover:text-brand-800 transition-colors" href="#priser">Priser</a>
<a className="text-sm font-medium text-stone-600 hover:text-brand-800 transition-colors" href="#kontakt">Kontakt</a>

<a className="bg-brand-800 text-white px-5 py-2.5 rounded-sm text-xs font-medium tracking-wide uppercase hover:bg-brand-900 transition-colors shadow-sm" href="https://system.easypractice.net/book/grynnerup-aesthetics" target="_blank">
                        Book Tid
                    </a>
</div>

<div className="w-6 md:hidden"></div>
</div>
</div>

<div className="hidden md:hidden bg-white border-t border-stone-100 absolute w-full" id="mobile-menu">
<div className="px-6 py-6 space-y-4 flex flex-col items-center">
<a className="text-base font-medium text-stone-800" href="#behandlinger">Behandlinger</a>
<a className="text-base font-medium text-stone-800" href="#om">Om Klinikken</a>
<a className="text-base font-medium text-stone-800" href="#priser">Priser</a>
<a className="text-base font-medium text-stone-800" href="#kontakt">Kontakt</a>
<a className="text-base font-medium text-brand-800" href="https://system.easypractice.net/book/grynnerup-aesthetics" target="_blank">Book Konsultation</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="order-2 lg:order-1 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100/50 border border-brand-200 text-brand-900 text-xs tracking-wide uppercase font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-brand-800"></span>
                        Ny klinik i Aarhus N
                    </div>
<h1 className="text-4xl lg:text-6xl font-serif text-stone-900 leading-[1.1] tracking-tight text-balance">
                        Naturlig skønhed gennem <span className="text-brand-800 italic pr-1">æstetisk</span> præcision
                    </h1>
<p className="text-lg lg:text-xl text-stone-500 font-light leading-relaxed max-w-lg text-balance">
                        Vi skaber resultater, der ikke ændrer hvem du er, men fremhæver den bedste version af dig selv. Specialiseret i botox, filler og hudforbedring.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex justify-center items-center px-8 py-3.5 bg-brand-800 text-white text-sm font-medium tracking-wide uppercase hover:bg-brand-900 transition-all shadow-md hover:shadow-lg" href="https://system.easypractice.net/book/grynnerup-aesthetics" target="_blank">
                            Book Konsultation
                        </a>
<a className="inline-flex justify-center items-center px-8 py-3.5 bg-white border border-stone-200 text-stone-800 text-sm font-medium tracking-wide uppercase hover:bg-stone-50 transition-colors" href="#behandlinger">
                            Se Behandlinger
                        </a>
</div>
</div>
<div className="order-1 lg:order-2 relative">
<div className="aspect-[4/5] relative rounded-sm overflow-hidden">
<img alt="Naturlig skønhed" className="object-cover w-full h-full opacity-90 hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-100/30 rounded-full blur-2xl -z-10"></div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-white border-y border-stone-100/50">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
<span className="text-xs font-medium tracking-[0.2em] text-stone-400 uppercase">Filosofi</span>
<h2 className="mt-4 text-3xl lg:text-4xl font-serif text-stone-900 tracking-tight">Vores tilgang til aesthetics</h2>
</div>
<div className="grid md:grid-cols-3 gap-12 lg:gap-16">

<div className="group">
<div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-50 text-brand-800 mb-6 group-hover:bg-brand-800 group-hover:text-white transition-colors duration-500">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="scale"></i>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-3 tracking-tight">Balance &amp; Harmoni</h3>
<p className="text-stone-500 font-light leading-relaxed">
                        Vi analyserer ansigtets proportioner for at skabe balance. Målet er aldrig at overbehandle, men at genoprette symmetri og ro i ansigtstrækkene.
                    </p>
</div>

<div className="group">
<div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-50 text-brand-800 mb-6 group-hover:bg-brand-800 group-hover:text-white transition-colors duration-500">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="scan-face"></i>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-3 tracking-tight">Naturlig Præcision</h3>
<p className="text-stone-500 font-light leading-relaxed">
                        Håndværket ligger i detaljen. Vi arbejder med diskrete justeringer, der giver et friskt og veludhvilet udtryk, uden at det ser 'lavet' ud.
                    </p>
</div>

<div className="group">
<div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-50 text-brand-800 mb-6 group-hover:bg-brand-800 group-hover:text-white transition-colors duration-500">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-3 tracking-tight">Tryghed &amp; Tillid</h3>
<p className="text-stone-500 font-light leading-relaxed">
                        Din sikkerhed er fundamentet. Vi bruger kun de bedste produkter på markedet og sætter en ære i gennemsigtighed omkring forventninger og resultat.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-brand-50" id="behandlinger">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="max-w-xl">
<span className="text-xs font-medium tracking-[0.2em] text-stone-400 uppercase">Behandlinger</span>
<h2 className="mt-4 text-3xl lg:text-4xl font-serif text-stone-900 tracking-tight">Ekspertise i injektioner</h2>
<p className="mt-4 text-stone-500 font-light text-lg">
                        Vi fokuserer udelukkende på behandlinger, der kræver en sikker hånd og et æstetisk øje. Ingen maskiner, kun håndværk.
                    </p>
</div>
<a className="hidden md:inline-flex items-center text-sm font-medium text-brand-800 border-b border-brand-800/30 pb-0.5 hover:border-brand-800 transition-colors" href="#priser">
                    Se prisliste <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6 lg:gap-8">

<div className="bg-white group hover:shadow-xl transition-all duration-500 cursor-pointer rounded-sm overflow-hidden border border-stone-100">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Botox behandling" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8">
<h3 className="text-2xl font-serif text-stone-900 mb-2">Botox</h3>
<p className="text-stone-500 font-light text-sm mb-6 leading-relaxed">
                            Effektiv reduktion af mimiske linjer. Vi bevarer din mimik og udtryk, men fjerner det 'strenge' eller trætte look. Perfekt til panderynker, smilerynker og brynløft.
                        </p>
<ul className="space-y-2 mb-8">
<li className="flex items-center text-sm text-stone-600 font-light"><i className="w-4 h-4 mr-2 text-brand-800" data-lucide="check"></i>Udglatter fine linjer</li>
<li className="flex items-center text-sm text-stone-600 font-light"><i className="w-4 h-4 mr-2 text-brand-800" data-lucide="check"></i>Forebyggende effekt</li>
</ul>
<span className="inline-block text-brand-800 text-sm font-medium border-b border-transparent group-hover:border-brand-800 transition-colors">Læs mere om Botox</span>
</div>
</div>

<div className="bg-white group hover:shadow-xl transition-all duration-500 cursor-pointer rounded-sm overflow-hidden border border-stone-100">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Filler behandling" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8">
<h3 className="text-2xl font-serif text-stone-900 mb-2">Non-permanent Filler</h3>
<p className="text-stone-500 font-light text-sm mb-6 leading-relaxed">
                            Genskab tabt volumen eller definer ansigtets konturer. Vi bruger markedets sikreste fillers til læber, kindben, hage og kæbelinje med fokus på harmoni.
                        </p>
<ul className="space-y-2 mb-8">
<li className="flex items-center text-sm text-stone-600 font-light"><i className="w-4 h-4 mr-2 text-brand-800" data-lucide="check"></i>Markering af konturer</li>
<li className="flex items-center text-sm text-stone-600 font-light"><i className="w-4 h-4 mr-2 text-brand-800" data-lucide="check"></i>Genskaber volumen</li>
</ul>
<span className="inline-block text-brand-800 text-sm font-medium border-b border-transparent group-hover:border-brand-800 transition-colors">Læs mere om Filler</span>
</div>
</div>

<div className="bg-white group hover:shadow-xl transition-all duration-500 cursor-pointer rounded-sm overflow-hidden border border-stone-100">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Skinbooster behandling" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-8">
<h3 className="text-2xl font-serif text-stone-900 mb-2">Skinboosters</h3>
<p className="text-stone-500 font-light text-sm mb-6 leading-relaxed">
                            Den ultimative fugtbehandling indefra. Forbedrer hudens kvalitet, elasticitet og glød. Ideel til tør hud, fine linjer og acne-ar i ansigt, hals og hænder.
                        </p>
<ul className="space-y-2 mb-8">
<li className="flex items-center text-sm text-stone-600 font-light"><i className="w-4 h-4 mr-2 text-brand-800" data-lucide="check"></i>Dyb hydrering</li>
<li className="flex items-center text-sm text-stone-600 font-light"><i className="w-4 h-4 mr-2 text-brand-800" data-lucide="check"></i>Naturlig glød</li>
</ul>
<span className="inline-block text-brand-800 text-sm font-medium border-b border-transparent group-hover:border-brand-800 transition-colors">Læs mere om Skinbooster</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-white overflow-hidden" id="om">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[3/4] bg-stone-100 rounded-sm overflow-hidden">
<img alt="Klinikindehaver hos Grynnerup" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=2069"/>
</div>
<div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-50 z-[-1]"></div>
</div>
<div>
<span className="text-xs font-medium tracking-[0.2em] text-stone-400 uppercase">Om Klinikken</span>
<h2 className="mt-4 text-3xl lg:text-4xl font-serif text-stone-900 tracking-tight mb-8">Tryghed er fundamentet for et smukt resultat</h2>
<p className="text-stone-500 font-light text-lg mb-6 leading-relaxed">
                        Hos Grynnerup Aesthetics møder du altid faglighed på højeste niveau. Vi tror på, at en grundig konsultation er nøglen til det bedste resultat.
                    </p>
<p className="text-stone-500 font-light text-lg mb-10 leading-relaxed">
                        Vi siger nej tak, hvis vi vurderer, at en behandling ikke vil gavne dit ansigts harmoni. Ærlighed og integritet kommer før alt andet.
                    </p>

<div className="space-y-6">
<div className="flex gap-4">
<span className="flex-shrink-0 w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-sm font-serif text-brand-800">1</span>
<div>
<h4 className="font-medium text-stone-900">Konsultation</h4>
<p className="text-sm text-stone-500 font-light mt-1">Vi gennemgår dine ønsker og lægger en personlig plan.</p>
</div>
</div>
<div className="flex gap-4">
<span className="flex-shrink-0 w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-sm font-serif text-brand-800">2</span>
<div>
<h4 className="font-medium text-stone-900">Behandling</h4>
<p className="text-sm text-stone-500 font-light mt-1">Udføres med præcision og ro i sterile, trygge rammer.</p>
</div>
</div>
<div className="flex gap-4">
<span className="flex-shrink-0 w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-sm font-serif text-brand-800">3</span>
<div>
<h4 className="font-medium text-stone-900">Opfølgning</h4>
<p className="text-sm text-stone-500 font-light mt-1">Vi sikrer os, at resultatet lever op til forventningerne.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-brand-50" id="priser">
<div className="max-w-4xl mx-auto px-6 lg:px-12">
<div className="text-center mb-16">
<span className="text-xs font-medium tracking-[0.2em] text-stone-400 uppercase">Investering</span>
<h2 className="mt-4 text-3xl lg:text-4xl font-serif text-stone-900 tracking-tight">Vejledende Priser</h2>
<p className="mt-4 text-stone-500 font-light">Endelig pris fastsættes altid ved din gratis forundersøgelse.</p>
</div>
<div className="bg-white rounded-sm shadow-sm border border-stone-100 overflow-hidden">

<div className="bg-brand-800/5 px-6 py-3 border-b border-brand-800/10">
<h3 className="text-sm font-medium text-brand-800 uppercase tracking-wider">Botox</h3>
</div>
<div className="divide-y divide-stone-100">
<div className="flex justify-between items-center p-6 hover:bg-stone-50/50 transition-colors">
<div>
<span className="block text-stone-900 font-medium">1 område</span>
<span className="block text-xs text-stone-400 font-light mt-1">Fx bekymringsrynke eller smilerynker</span>
</div>
<span className="text-stone-900 font-medium">1.200 DKK</span>
</div>
<div className="flex justify-between items-center p-6 hover:bg-stone-50/50 transition-colors">
<div>
<span className="block text-stone-900 font-medium">2 områder</span>
</div>
<span className="text-stone-900 font-medium">2.000 DKK</span>
</div>
<div className="flex justify-between items-center p-6 hover:bg-stone-50/50 transition-colors">
<div>
<span className="block text-stone-900 font-medium">3 områder</span>
<span className="block text-xs text-stone-400 font-light mt-1">Full face løft</span>
</div>
<span className="text-stone-900 font-medium">2.600 DKK</span>
</div>
</div>

<div className="bg-brand-800/5 px-6 py-3 border-y border-brand-800/10 mt-0">
<h3 className="text-sm font-medium text-brand-800 uppercase tracking-wider">Filler (Juvéderm / Restylane)</h3>
</div>
<div className="divide-y divide-stone-100">
<div className="flex justify-between items-center p-6 hover:bg-stone-50/50 transition-colors">
<div>
<span className="block text-stone-900 font-medium">0,5 ml Filler</span>
<span className="block text-xs text-stone-400 font-light mt-1">Let læbeforstørrelse</span>
</div>
<span className="text-stone-900 font-medium">1.200 DKK</span>
</div>
<div className="flex justify-between items-center p-6 hover:bg-stone-50/50 transition-colors">
<div>
<span className="block text-stone-900 font-medium">1,0 ml Filler</span>
<span className="block text-xs text-stone-400 font-light mt-1">Læber, kindben eller hage</span>
</div>
<span className="text-stone-900 font-medium">1.800 DKK</span>
</div>
<div className="flex justify-between items-center p-6 hover:bg-stone-50/50 transition-colors">
<div>
<span className="block text-stone-900 font-medium">2,0 ml Filler</span>
<span className="block text-xs text-stone-400 font-light mt-1">Større volumen eller flere områder</span>
</div>
<span className="text-stone-900 font-medium">2.400 DKK</span>
</div>
</div>

<div className="bg-brand-800/5 px-6 py-3 border-y border-brand-800/10 mt-0">
<h3 className="text-sm font-medium text-brand-800 uppercase tracking-wider">Skinbooster</h3>
</div>
<div className="divide-y divide-stone-100">
<div className="flex justify-between items-center p-6 hover:bg-stone-50/50 transition-colors">
<div>
<span className="block text-stone-900 font-medium">1 Skinbooster (2 ml)</span>
<span className="block text-xs text-stone-400 font-light mt-1">Dyb hydrering og glød</span>
</div>
<span className="text-stone-900 font-medium">1.500 DKK</span>
</div>
<div className="flex justify-between items-center p-6 hover:bg-stone-50/50 transition-colors">
<div>
<span className="block text-stone-900 font-medium">Pakkeforløb (3 behandlinger)</span>
<span className="block text-xs text-stone-400 font-light mt-1">Optimalt resultat</span>
</div>
<span className="text-stone-900 font-medium">4.000 DKK</span>
</div>
</div>

<div className="bg-brand-800/5 px-6 py-3 border-y border-brand-800/10 mt-0">
<h3 className="text-sm font-medium text-brand-800 uppercase tracking-wider">PRP Behandling</h3>
</div>
<div className="divide-y divide-stone-100">
<div className="flex justify-between items-center p-6 hover:bg-stone-50/50 transition-colors">
<div>
<span className="block text-stone-900 font-medium">1 behandling</span>
<span className="block text-xs text-stone-400 font-light mt-1">Naturlig vækst og fornyelse</span>
</div>
<span className="text-stone-900 font-medium">2.300 DKK</span>
</div>
<div className="flex justify-between items-center p-6 hover:bg-stone-50/50 transition-colors">
<div>
<span className="block text-stone-900 font-medium">Pakkeforløb (3 behandlinger)</span>
<span className="block text-xs text-stone-400 font-light mt-1">Anbefalet kurforløb</span>
</div>
<span className="text-stone-900 font-medium">6.000 DKK</span>
</div>
<div className="flex justify-between items-center p-6 hover:bg-stone-50/50 transition-colors">
<div>
<span className="block text-stone-900 font-medium">Pakkeforløb (5 behandlinger)</span>
<span className="block text-xs text-stone-400 font-light mt-1">Det fulde behandlingsforløb</span>
</div>
<span className="text-stone-900 font-medium">9.500 DKK</span>
</div>
</div>

<div className="bg-brand-800/5 px-6 py-3 border-y border-brand-800/10 mt-0">
<h3 className="text-sm font-medium text-brand-800 uppercase tracking-wider">Konsultation</h3>
</div>
<div className="divide-y divide-stone-100">
<div className="flex justify-between items-center p-6 hover:bg-stone-50/50 transition-colors">
<div>
<span className="block text-stone-900 font-medium">Forundersøgelse</span>
<span className="block text-xs text-stone-400 font-light mt-1">Obligatorisk før første behandling</span>
</div>
<span className="text-brand-800 font-medium">Gratis</span>
</div>
</div>
</div>
<div className="mt-8 text-center">
<a className="inline-flex justify-center items-center px-8 py-3.5 bg-brand-800 text-white text-sm font-medium tracking-wide uppercase hover:bg-brand-900 transition-all shadow-md" href="https://system.easypractice.net/book/grynnerup-aesthetics" target="_blank">
                    Book tid til behandling
                </a>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-white">
<div className="max-w-3xl mx-auto px-6 lg:px-12">
<h2 className="text-3xl font-serif text-stone-900 tracking-tight mb-12 text-center">Ofte stillede spørgsmål</h2>
<div className="space-y-4">
<details className="group border-b border-stone-100 pb-4">
<summary className="flex justify-between items-center cursor-pointer list-none py-2 text-lg font-medium text-stone-800">
<span>Gør det ondt at blive behandlet?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-stone-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-stone-500 font-light mt-3 leading-relaxed animate-fadeIn">
                        De fleste oplever kun et lille stik eller ubehag. Vores fillere indeholder lokalbedøvelse (Lidokain), og vi tilbyder bedøvelsescreme inden behandling, hvis du ønsker det. Din komfort er vores prioritet.
                    </div>
</details>
<details className="group border-b border-stone-100 pb-4">
<summary className="flex justify-between items-center cursor-pointer list-none py-2 text-lg font-medium text-stone-800">
<span>Hvor længe holder resultatet?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-stone-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-stone-500 font-light mt-3 leading-relaxed">
                        Holdbarheden varierer fra person til person. Botox holder typisk 3-4 måneder, mens filler kan holde 6-12 måneder afhængig af område og produkt. Skinboosters kræver ofte et kurforløb for optimalt resultat.
                    </div>
</details>
<details className="group border-b border-stone-100 pb-4">
<summary className="flex justify-between items-center cursor-pointer list-none py-2 text-lg font-medium text-stone-800">
<span>Kan jeg gå på arbejde lige efter?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-stone-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-stone-500 font-light mt-3 leading-relaxed">
                        Ja, de fleste behandlinger har ingen eller minimal 'downtime'. Du kan opleve let rødme eller små hævelser umiddelbart efter injektionen, men dette fortager sig hurtigt. Vi guider dig i, hvad du skal undgå det første døgn.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-brand-900 text-white relative overflow-hidden" id="book-section">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'0 0 2000 2000\\'%3E%3Cpath d=\\'M54.627 0l.83.828-1.415 1.415-.828-.828-.828.828-1.415-1.415.828-.828-.828-.828 1.415-1.415.828.828.828-.828 1.415 1.415-.828.828zM22.485 0l.83.828-1.415 1.415-.828-.828-.828.828-1.415-1.415.828-.828-.828-.828 1.415-1.415.828.828.828-.828 1.415 1.415-.828.828zM0 22.485l.828.83-1.415 1.415-.828-.828-.828.828L-2.83 22.485l.828-.828-.828-.828 1.415-1.415.828.828.828-.828 1.415 1.415-.828.828zM0 54.627l.828.83-1.415 1.415-.828-.828-.828.828L-2.83 54.627l.828-.828-.828-.828 1.415-1.415.828.828.828-.828 1.415 1.415-.828.828zM54.627 60l.83.828-1.415 1.415-.828-.828-.828.828-1.415-1.415.828-.828-.828-.828 1.415-1.415.828.828.828-.828 1.415 1.415-.828.828zM22.485 60l.83.828-1.415 1.415-.828-.828-.828.828-1.415-1.415.828-.828-.828-.828 1.415-1.415.828.828.828-.828 1.415 1.415-.828.828z\\' fill=\\'%23ffffff\\' fillOpacity=\\'1\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E\')'}}></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
<div>
<span className="text-brand-300 text-xs font-medium tracking-[0.2em] uppercase">Start rejsen</span>
<h2 className="mt-4 text-3xl lg:text-5xl font-serif text-white tracking-tight mb-6">Klar til at fremhæve det bedste ved dig selv?</h2>
<p className="text-brand-100 font-light text-lg mb-8 max-w-md leading-relaxed">
                        Book en uforpligtende konsultation i dag. Vi tager os tid til at lytte, analysere og lægge en plan, der passer præcis til dig.
                    </p>
<a className="inline-block bg-white text-brand-900 px-8 py-4 rounded-sm text-sm font-medium tracking-wide uppercase hover:bg-brand-50 transition-colors shadow-lg" href="https://system.easypractice.net/book/grynnerup-aesthetics" target="_blank">
                        Book Online Nu
                    </a>
<p className="mt-6 text-sm text-brand-300 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="check-circle"></i> Gratis forundersøgelse
                    </p>
</div>
<div className="bg-brand-800/50 backdrop-blur-sm p-8 lg:p-12 border border-brand-700/50 rounded-sm" id="kontakt">
<h3 className="text-2xl font-serif mb-6 text-white">Kontakt &amp; Åbningstider</h3>
<div className="space-y-6">
<div className="flex items-start gap-4">
<i className="w-5 h-5 text-brand-300 mt-1" data-lucide="map-pin"></i>
<div>
<p className="font-medium text-white">Grynnerup Aesthetics</p>
<p className="text-brand-200 font-light text-sm">Ringgade 117<br/>8200 Aarhus N</p>
</div>
</div>
<div className="flex items-start gap-4">
<i className="w-5 h-5 text-brand-300 mt-1" data-lucide="mail"></i>
<div>
<p className="font-medium text-white">Email</p>
<a className="text-brand-200 font-light text-sm hover:text-white transition break-all" href="mailto:rikke@grynnerup-aesthetics.dk">rikke@grynnerup-aesthetics.dk</a>
<p className="text-xs text-brand-400 mt-1">Vi svarer indenfor 24 timer</p>
</div>
</div>
<div className="flex items-start gap-4">
<i className="w-5 h-5 text-brand-300 mt-1" data-lucide="phone"></i>
<div>
<p className="font-medium text-white">Telefon</p>
<a className="text-brand-200 font-light text-sm hover:text-white transition" href="tel:+4529707775">+45 29 70 77 75</a>
<p className="text-xs text-brand-400 mt-1">Man - Fredag: 09:00 - 16:00<br/>Eller efter aftale med klinik</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-12 lg:py-16 border-t border-stone-800">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="block mb-6" href="#">
<span className="font-serif text-xl tracking-wide text-brand-50 uppercase">Grynnerup</span>
<span className="block font-sans text-[0.6rem] tracking-[0.25em] text-brand-200 uppercase mt-0.5">Aesthetics</span>
</a>
<p className="text-sm font-light max-w-xs leading-relaxed mb-6">
                        Eksklusiv kosmetisk klinik med fokus på naturlige resultater, sikkerhed og æstetisk præcision.
                    </p>
<div className="flex gap-4">
<a className="text-stone-500 hover:text-brand-200 transition" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-stone-500 hover:text-brand-200 transition" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
</div>
</div>
<div>
<h4 className="text-white text-sm font-medium uppercase tracking-wider mb-4">Behandlinger</h4>
<ul className="space-y-2 text-sm font-light">
<li><a className="hover:text-brand-200 transition" href="#">Botox</a></li>
<li><a className="hover:text-brand-200 transition" href="#">Filler</a></li>
<li><a className="hover:text-brand-200 transition" href="#">Skinbooster</a></li>
<li><a className="hover:text-brand-200 transition" href="#">Profhilo</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium uppercase tracking-wider mb-4">Klinikken</h4>
<ul className="space-y-2 text-sm font-light">
<li><a className="hover:text-brand-200 transition" href="#om">Om os</a></li>
<li><a className="hover:text-brand-200 transition" href="#">Sikkerhed</a></li>
<li><a className="hover:text-brand-200 transition" href="#priser">Priser</a></li>
<li><a className="hover:text-brand-200 transition" href="#">Handelsbetingelser</a></li>
<li><a className="hover:text-brand-200 transition" href="#">Cookiepolitik</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs font-light text-stone-600">
<p>© 2023 Grynnerup Aesthetics. Registreret hos Styrelsen for Patientsikkerhed.</p>
<p className="mt-2 md:mt-0">Designet med fokus på æstetik.</p>
</div>
</div>
</footer>




    </>
  );
}
