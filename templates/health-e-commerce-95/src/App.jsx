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
gold: '#dca54a',
goldlight: '#fbf6e6',
dark: '#1a1a1a',
gray: '#f2f5f7'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Merriweather', 'serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
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
      

<header className="bg-white border-b border-gray-100 sticky top-0 z-50">

<div className="bg-brand-dark text-white text-xs py-2 text-center hidden sm:block">
<p>Doprava zadarmo pri objednávke nad 70 € • Garancia vrátenia peňazí</p>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
<a className="flex-shrink-0" href="#">
<img alt="Zlatý Nepál" className="h-12 w-auto object-contain" src="https://www.zlatynepal.sk/wp-content/uploads/2025/10/zlatynepal-logo.png"/>
</a>
<nav className="hidden lg:flex gap-8">
<a className="text-sm font-medium text-slate-900 hover:text-brand-gold transition-colors" href="#">Domov</a>
<a className="text-sm font-medium text-brand-gold transition-colors" href="#">E-shop</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-gold transition-colors" href="#">O nás</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-gold transition-colors" href="#">Blog</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-gold transition-colors" href="#">Kontakt</a>
</nav>
<div className="flex items-center gap-6">
<div className="hidden md:flex flex-col items-end mr-2">
<span className="text-xs text-slate-500">Objednávky</span>
<a className="text-sm font-bold text-slate-900 hover:text-brand-gold" href="tel:+421910949033">0910 949 033</a>
</div>
<div className="flex items-center gap-3">
<button className="p-2 text-slate-600 hover:text-brand-gold">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="search"></i>
</button>
<button className="p-2 text-slate-600 hover:text-brand-gold relative">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="shopping-cart"></i>
<span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-brand-gold rounded-full">0</span>
</button>
<button className="lg:hidden p-2 text-slate-900">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</header>
<main className="py-8 lg:py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<nav aria-label="Breadcrumb" className="flex mb-8 text-sm text-slate-500">
<ol className="inline-flex items-center space-x-2">
<li className="inline-flex items-center"><a className="hover:text-brand-gold" href="#">Domov</a></li>
<li><i className="w-4 h-4 stroke-[1.5]" data-lucide="chevron-right"></i></li>
<li><a className="hover:text-brand-gold" href="#">Kĺbová výživa</a></li>
<li><i className="w-4 h-4 stroke-[1.5]" data-lucide="chevron-right"></i></li>
<li className="text-slate-900 font-medium">30-dňová kúra</li>
</ol>
</nav>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 mb-16">

<div className="flex flex-col gap-4">
<div className="relative aspect-square w-full rounded-xl overflow-hidden bg-white border border-gray-100 group">
<span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide z-10 shadow-sm">
                            -38% ZĽAVA
                        </span>
<img alt="Komplexná kúra na kĺby" className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105" src="https://www.zlatynepal.sk/wp-content/uploads/2025/07/Kura-na-klby-komplexna.png"/>
</div>
<div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar snap-x">
<button className="flex-shrink-0 w-20 h-20 rounded-lg border-2 border-brand-gold bg-white p-1 snap-start">
<img className="w-full h-full object-contain" src="https://www.zlatynepal.sk/wp-content/uploads/2025/07/Kura-na-klby-komplexna.png"/>
</button>
<button className="flex-shrink-0 w-20 h-20 rounded-lg border border-gray-200 bg-white p-1 snap-start hover:border-brand-gold transition-colors">
<img className="w-full h-full object-contain" src="https://www.zlatynepal.sk/wp-content/uploads/2025/07/NAJVYSSIA-CERTIFIKACIA-9.png"/>
</button>
<button className="flex-shrink-0 w-20 h-20 rounded-lg border border-gray-200 bg-white p-1 snap-start hover:border-brand-gold transition-colors">
<img className="w-full h-full object-contain" src="https://www.zlatynepal.sk/wp-content/uploads/2025/07/NAJVYSSIA-CERTIFIKACIA-6.png"/>
</button>
</div>
</div>

<div className="flex flex-col">
<h1 className="font-serif text-3xl lg:text-4xl text-slate-900 font-bold tracking-tight leading-tight mb-2">
                        Komplexná kúra na kĺby na 30 dní
                    </h1>
<div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-6">
<div className="flex text-brand-gold">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<span className="text-sm font-medium text-slate-500">(447 recenzií)</span>
</div>

<div className="prose prose-sm text-slate-600 mb-8 leading-relaxed">
<p className="text-base">Jedinečná <span className="text-slate-900 font-bold">30-dňová kúra</span> na skutočnú podporu kĺbov. Balenie obsahuje:</p>
<ul className="mt-2 space-y-1 pl-0 list-none">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i> 1x Kolagén MAX (90 kapsúl)</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i> 1x Artro Komplex (90 kapsúl)</li>
</ul>
</div>

<div className="mb-6">
<label className="block text-sm font-bold text-slate-900 mb-3">Vyberte veľkosť balenia:</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

<label className="relative cursor-pointer group">
<input checked="" className="peer sr-only plan-radio" name="bundle" type="radio"/>
<div className="h-full bg-white border-2 border-gray-100 rounded-xl p-4 flex flex-col justify-between hover:border-brand-gold transition-all duration-200">
<div className="mb-2">
<span className="block text-sm font-bold text-slate-900">1x Kúra</span>
<span className="block text-xs text-slate-500 mt-1">30 dní</span>
</div>
<div className="mt-2">
<span className="block text-xl font-bold text-slate-900">38,90 €</span>
<span className="block text-xs text-slate-400">Bežná cena</span>
</div>

<div className="absolute top-4 right-4 w-4 h-4 rounded-full border border-gray-200 radio-circle flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-white radio-circle-inner opacity-0 transition-opacity"></div>
</div>
</div>
</label>

<label className="relative cursor-pointer group">
<input className="peer sr-only plan-radio" name="bundle" type="radio"/>
<div className="relative h-full bg-white border-2 border-gray-100 rounded-xl p-4 flex flex-col justify-between hover:border-brand-gold transition-all duration-200">
<div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide whitespace-nowrap">
                                        Tip pre pár
                                    </div>
<div className="mb-2 pt-1">
<span className="block text-sm font-bold text-slate-900">2x Kúra</span>
<span className="block text-xs text-slate-500 mt-1">60 dní</span>
</div>
<div className="mt-2">
<span className="block text-xl font-bold text-slate-900">74,90 €</span>
<span className="inline-block bg-green-50 text-green-800 text-[10px] font-bold px-1.5 py-0.5 rounded mt-1">Ušetríte 5%</span>
</div>
<div className="absolute top-4 right-4 w-4 h-4 rounded-full border border-gray-200 radio-circle flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-white radio-circle-inner opacity-0 transition-opacity"></div>
</div>
</div>
</label>

<label className="relative cursor-pointer group">
<input className="peer sr-only plan-radio" name="bundle" type="radio"/>
<div className="relative h-full bg-white border-2 border-brand-gold rounded-xl p-4 flex flex-col justify-between transition-all duration-200">
<div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-gold text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide whitespace-nowrap shadow-sm">
                                        Najvýhodnejšie
                                    </div>
<div className="mb-2 pt-1">
<span className="block text-sm font-bold text-slate-900">3x Kúra</span>
<span className="block text-xs text-slate-500 mt-1">90 dní</span>
</div>
<div className="mt-2">
<span className="block text-xl font-bold text-slate-900">109,90 €</span>
<span className="inline-block bg-brand-gold text-white text-[10px] font-bold px-1.5 py-0.5 rounded mt-1">Ušetríte 10%</span>
</div>
<div className="absolute top-4 right-4 w-4 h-4 rounded-full border border-gray-200 radio-circle flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-white radio-circle-inner opacity-0 transition-opacity"></div>
</div>
</div>
</label>
</div>
</div>

<div className="flex gap-4 mt-2 mb-8">
<button className="flex-1 h-14 bg-brand-gold hover:bg-[#c9953f] text-white text-lg font-bold rounded-xl shadow-lg shadow-orange-200/50 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
<span>Pridať do košíka</span>
<i className="w-5 h-5 stroke-[2]" data-lucide="shopping-cart"></i>
</button>
</div>

<div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-6">
<div className="flex flex-col items-center text-center">
<div className="w-10 h-10 rounded-full border border-blue-100 flex items-center justify-center mb-2 text-blue-600">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="shield-check"></i>
</div>
<span className="text-xs font-semibold text-slate-800">Overený nákup</span>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-10 h-10 rounded-full border border-green-100 flex items-center justify-center mb-2 text-green-600">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="truck"></i>
</div>
<span className="text-xs font-semibold text-slate-800">Rýchle dodanie</span>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-10 h-10 rounded-full border border-purple-100 flex items-center justify-center mb-2 text-purple-600">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="leaf"></i>
</div>
<span className="text-xs font-semibold text-slate-800">100% Prírodné</span>
</div>
</div>
</div>
</div>

<div className="max-w-4xl mx-auto mt-16 space-y-16">

<section className="bg-white rounded-2xl p-6 md:p-10 border border-gray-200 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-brand-gold"></div>
<div className="flex items-center gap-4 mb-6">
<div className="p-3 rounded-full border border-orange-100 text-brand-gold">
<i className="w-6 h-6 stroke-[2]" data-lucide="info"></i>
</div>
<h2 className="text-2xl font-serif font-bold text-slate-900">Prečo si vybrať túto kúru?</h2>
</div>
<div className="prose prose-slate max-w-none text-slate-600">
<p className="text-lg leading-relaxed mb-8">Len správny kolagén dokáže naozaj obnoviť Vaše kĺby. <strong>Kolagén MAX</strong> prináša vysoko kvalitný kolagén (typ II), ktorý je presne to, čo vaše kĺby potrebujú pre regeneráciu a bezbolestný pohyb.</p>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-brand-gold/30 transition-colors">
<h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
<i className="w-4 h-4 text-brand-gold" data-lucide="activity"></i> Kedy kúra pomáha?
                                </h4>
<ul className="space-y-3 list-none pl-0">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-green-500 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span>Pri bolestiach a stuhnutosti kĺbov</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-green-500 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span>Pri artróze a chronických zápaloch</span>
</li>
</ul>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-brand-gold/30 transition-colors">
<h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
<i className="w-4 h-4 text-brand-gold" data-lucide="user-plus"></i> Pre koho je určená?
                                </h4>
<ul className="space-y-3 list-none pl-0">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-green-500 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span>Pre seniorov nad 60 rokov</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-green-500 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span>Preventívne už od 40. roku života</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-white rounded-2xl p-6 md:p-10 border border-gray-200 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
<div className="flex items-center gap-4 mb-6">
<div className="p-3 rounded-full border border-blue-100 text-blue-600">
<i className="w-6 h-6 stroke-[2]" data-lucide="flask-conical"></i>
</div>
<h2 className="text-2xl font-serif font-bold text-slate-900">Detailné zloženie</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="p-5 rounded-xl border border-gray-200 bg-white flex flex-col gap-1 hover:border-blue-200 transition-colors">
<span className="text-xs text-blue-600 uppercase font-bold tracking-wider">Regenerácia</span>
<span className="text-lg font-bold text-slate-900">Glukozamín sulfát</span>
<span className="text-sm text-slate-600">1500mg v dennej dávke</span>
</div>
<div className="p-5 rounded-xl border border-gray-200 bg-white flex flex-col gap-1 hover:border-blue-200 transition-colors">
<span className="text-xs text-blue-600 uppercase font-bold tracking-wider">Pružnosť</span>
<span className="text-lg font-bold text-slate-900">Chondroitín sulfát</span>
<span className="text-sm text-slate-600">150mg v dennej dávke</span>
</div>
<div className="p-5 rounded-xl border border-gray-200 bg-white flex flex-col gap-1 hover:border-blue-200 transition-colors">
<span className="text-xs text-blue-600 uppercase font-bold tracking-wider">Protizápalové</span>
<span className="text-lg font-bold text-slate-900">Boswellia serrata</span>
<span className="text-sm text-slate-600">200mg (vysoká koncentrácia)</span>
</div>
<div className="p-5 rounded-xl border border-gray-200 bg-white flex flex-col gap-1 hover:border-blue-200 transition-colors">
<span className="text-xs text-blue-600 uppercase font-bold tracking-wider">Kolagén</span>
<span className="text-lg font-bold text-slate-900">MSM + Vitamín C</span>
<span className="text-sm text-slate-600">Podpora vlastnej tvorby</span>
</div>
</div>
</section>

<section className="bg-white rounded-2xl p-6 md:p-10 border border-gray-200 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
<div className="flex items-center gap-4 mb-6">
<div className="p-3 rounded-full border border-green-100 text-green-600">
<i className="w-6 h-6 stroke-[2]" data-lucide="clock"></i>
</div>
<h2 className="text-2xl font-serif font-bold text-slate-900">Odporúčané dávkovanie</h2>
</div>

<div className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-xl border border-gray-200">
<div className="text-center md:text-left flex-1">
<p className="font-bold text-slate-900 text-lg mb-2">Ráno nalačno</p>
<p className="text-slate-600">Užívajte <strong>3 kapsule Kolagénu</strong> a <strong>3 kapsule Artro Komplexu</strong> každé ráno pred raňajkami. Dôležité je zapiť kapsule aspoň 200ml čistej vody.</p>
</div>
<div className="bg-white p-4 rounded-lg shadow-sm shrink-0 border border-green-100">
<div className="flex items-center gap-2 text-sm font-medium text-slate-900">
<i className="w-5 h-5 text-green-600" data-lucide="calendar-check"></i>
                                Kúra na 30 dní
                            </div>
</div>
</div>
</section>
</div>

<div className="max-w-6xl mx-auto mt-20 pt-10 border-t border-gray-100" id="reviews">
<h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Hodnotenia zákazníkov</h2>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-4 space-y-6">
<div className="flex items-baseline gap-3">
<span className="text-5xl font-bold text-slate-900">4.8</span>
<div className="flex text-brand-gold">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current opacity-50" data-lucide="star"></i>
</div>
</div>
<p className="text-slate-500 text-sm">Na základe 447 recenzií</p>

<div className="space-y-3">
<div className="flex items-center gap-3 text-sm">
<span className="w-12 text-slate-600">5 hviezdy</span>
<progress className="review-bar h-4 flex-1" max="100" value="85"></progress>
<span className="w-8 text-right text-slate-400">85%</span>
</div>
<div className="flex items-center gap-3 text-sm">
<span className="w-12 text-slate-600">4 hviezdy</span>
<progress className="review-bar h-4 flex-1" max="100" value="10"></progress>
<span className="w-8 text-right text-slate-400">10%</span>
</div>
<div className="flex items-center gap-3 text-sm">
<span className="w-12 text-slate-600">3 hviezdy</span>
<progress className="review-bar h-4 flex-1" max="100" value="3"></progress>
<span className="w-8 text-right text-slate-400">3%</span>
</div>
<div className="flex items-center gap-3 text-sm">
<span className="w-12 text-slate-600">2 hviezdy</span>
<progress className="review-bar h-4 flex-1" max="100" value="1"></progress>
<span className="w-8 text-right text-slate-400">1%</span>
</div>
<div className="flex items-center gap-3 text-sm">
<span className="w-12 text-slate-600">1 hviezda</span>
<progress className="review-bar h-4 flex-1" max="100" value="1"></progress>
<span className="w-8 text-right text-slate-400">1%</span>
</div>
</div>
<div className="pt-6 border-t border-gray-100">
<h4 className="font-bold text-slate-900 mb-2">Píšte recenzie a vyhrajte</h4>
<p className="text-sm text-slate-500 mb-4">Každý mesiac žrebujeme jedného zákazníka, ktorý získa nákup v hodnote 50 € zdarma.</p>
<button className="w-full py-2.5 border border-slate-300 rounded-lg text-sm font-semibold hover:border-slate-400 transition-colors">Napísať recenziu</button>
</div>
</div>

<div className="lg:col-span-8 space-y-8">

<div className="pb-8 border-b border-gray-100">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-xs font-bold text-slate-600">MK</div>
<span className="font-medium text-slate-900">Mária Kováčová</span>
<span className="text-xs font-bold text-brand-gold bg-orange-50 px-2 py-0.5 rounded">Overený nákup</span>
</div>
<div className="flex items-center gap-2 mb-3">
<div className="flex text-brand-gold text-xs">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<span className="text-sm font-bold text-slate-900">Naozaj to funguje, bolesť ustúpila</span>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-4">Užívam druhý mesiac a cítim výrazné zlepšenie. Ranná stuhnutosť kolien je preč a dokážem ísť na dlhšie prechádzky so psom. Určite odporúčam každému v mojom veku (65+).</p>
<div className="text-xs text-slate-400">Pred 3 dňami</div>
</div>

<div className="pb-8 border-b border-gray-100">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-xs font-bold text-slate-600">JH</div>
<span className="font-medium text-slate-900">Jozef Horváth</span>
<span className="text-xs font-bold text-brand-gold bg-orange-50 px-2 py-0.5 rounded">Overený nákup</span>
</div>
<div className="flex items-center gap-2 mb-3">
<div className="flex text-brand-gold text-xs">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<span className="text-sm font-bold text-slate-900">Rýchle dodanie a kvalita</span>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-4">Tovar prišiel hneď na druhý deň. Balenie je praktické. Zatiaľ užívam týždeň, ale cítim sa lepšie. Žalúdok ma z toho nebolí, čo je pre mňa dôležité.</p>
<div className="text-xs text-slate-400">Pred 1 týždňom</div>
</div>

<div>
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-xs font-bold text-slate-600">AL</div>
<span className="font-medium text-slate-900">Anna L.</span>
<span className="text-xs font-bold text-brand-gold bg-orange-50 px-2 py-0.5 rounded">Overený nákup</span>
</div>
<div className="flex items-center gap-2 mb-3">
<div className="flex text-brand-gold text-xs">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-gray-300" data-lucide="star"></i>
</div>
<span className="text-sm font-bold text-slate-900">Dobrý produkt</span>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-4">Kúpila som pre manžela. Je spokojný, i keď cena by mohla byť trochu nižšia. Ale ak to pomáha, tak to za to stojí.</p>
<div className="text-xs text-slate-400">Pred 2 týždňami</div>
</div>
</div>
</div>
</div>

<div className="mt-20 border-t border-gray-100 pt-10">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-serif font-bold text-slate-900">Podobné produkty</h2>
<div className="flex gap-2">
<button className="p-2 border border-slate-200 rounded-full hover:border-slate-400 text-slate-600"><i className="w-5 h-5" data-lucide="chevron-left"></i></button>
<button className="p-2 border border-slate-200 rounded-full hover:border-slate-400 text-slate-600"><i className="w-5 h-5" data-lucide="chevron-right"></i></button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">

<div className="snap-start flex-shrink-0 w-64 bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">

<div className="relative h-48 bg-white p-6 flex items-center justify-center border-b border-gray-50">
<img className="h-full object-contain mix-blend-multiply" src="https://www.zlatynepal.sk/wp-content/uploads/2025/07/NAJVYSSIA-CERTIFIKACIA-9.png"/>
</div>
<div className="p-4">
<h3 className="font-semibold text-slate-900 mb-1 truncate">Čistý Kolagén MAX</h3>
<div className="flex text-yellow-400 text-xs mb-2">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<div className="flex items-center justify-between mt-3">
<span className="font-bold text-slate-900">24,90 €</span>
<button className="p-2 bg-slate-50 rounded-full hover:bg-brand-gold hover:text-white transition-colors border border-slate-100">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="snap-start flex-shrink-0 w-64 bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
<div className="relative h-48 bg-white p-6 flex items-center justify-center border-b border-gray-50">
<img className="h-full object-contain mix-blend-multiply" src="https://www.zlatynepal.sk/wp-content/uploads/2025/07/NAJVYSSIA-CERTIFIKACIA-6.png"/>
</div>
<div className="p-4">
<h3 className="font-semibold text-slate-900 mb-1 truncate">Artro Komplex</h3>
<div className="flex text-yellow-400 text-xs mb-2">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<div className="flex items-center justify-between mt-3">
<span className="font-bold text-slate-900">19,90 €</span>
<button className="p-2 bg-slate-50 rounded-full hover:bg-brand-gold hover:text-white transition-colors border border-slate-100">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="snap-start flex-shrink-0 w-64 bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
<div className="relative h-48 bg-white p-6 flex items-center justify-center border-b border-gray-50">

<div className="text-gray-300"><i className="w-12 h-12" data-lucide="package"></i></div>
</div>
<div className="p-4">
<h3 className="font-semibold text-slate-900 mb-1 truncate">Vitamín C + Zinok</h3>
<div className="flex text-yellow-400 text-xs mb-2">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<div className="flex items-center justify-between mt-3">
<span className="font-bold text-slate-900">12,50 €</span>
<button className="p-2 bg-slate-50 rounded-full hover:bg-brand-gold hover:text-white transition-colors border border-slate-100">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="snap-start flex-shrink-0 w-64 bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
<div className="relative h-48 bg-white p-6 flex items-center justify-center border-b border-gray-50">
<div className="text-gray-300"><i className="w-12 h-12" data-lucide="package"></i></div>
</div>
<div className="p-4">
<h3 className="font-semibold text-slate-900 mb-1 truncate">Magnézium Oil</h3>
<div className="flex text-yellow-400 text-xs mb-2">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 text-gray-300" data-lucide="star"></i>
</div>
<div className="flex items-center justify-between mt-3">
<span className="font-bold text-slate-900">14,90 €</span>
<button className="p-2 bg-slate-50 rounded-full hover:bg-brand-gold hover:text-white transition-colors border border-slate-100">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-gray-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div>
<img alt="Zlatý Nepál" className="h-10 mb-6 brightness-0 invert opacity-90" src="https://www.zlatynepal.sk/wp-content/uploads/2025/10/zlatynepal-logo.png"/>
<p className="text-gray-400 text-sm leading-relaxed mb-6">Prémiové prírodné doplnky výživy inšpirované silou prírody. Vaše zdravie je našou prioritou už od roku 2018.</p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-gray-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>

<div>
<h3 className="text-lg font-bold mb-6 text-white">Rýchle odkazy</h3>
<ul className="space-y-3">
<li><a className="text-gray-400 hover:text-brand-gold transition-colors text-sm" href="#">Všetky produkty</a></li>
<li><a className="text-gray-400 hover:text-brand-gold transition-colors text-sm" href="#">O nás</a></li>
<li><a className="text-gray-400 hover:text-brand-gold transition-colors text-sm" href="#">Blog a rady</a></li>
<li><a className="text-gray-400 hover:text-brand-gold transition-colors text-sm" href="#">Kontakt</a></li>
<li><a className="text-gray-400 hover:text-brand-gold transition-colors text-sm" href="#">Vernostný program</a></li>
</ul>
</div>

<div>
<h3 className="text-lg font-bold mb-6 text-white">Informácie</h3>
<ul className="space-y-3">
<li><a className="text-gray-400 hover:text-brand-gold transition-colors text-sm" href="#">Obchodné podmienky</a></li>
<li><a className="text-gray-400 hover:text-brand-gold transition-colors text-sm" href="#">Doprava a platba</a></li>
<li><a className="text-gray-400 hover:text-brand-gold transition-colors text-sm" href="#">Reklamácie a vrátenie</a></li>
<li><a className="text-gray-400 hover:text-brand-gold transition-colors text-sm" href="#">Ochrana osobných údajov</a></li>
<li><a className="text-gray-400 hover:text-brand-gold transition-colors text-sm" href="#">Cookies</a></li>
</ul>
</div>

<div>
<h3 className="text-lg font-bold mb-6 text-white">Kontaktujte nás</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-brand-gold mt-0.5" data-lucide="phone"></i>
<div>
<a className="block text-white font-medium hover:text-brand-gold transition-colors" href="tel:+421910949033">+421 910 949 033</a>
<span className="text-xs text-gray-500">Po-Pi: 8:00 - 16:00</span>
</div>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-brand-gold mt-0.5" data-lucide="mail"></i>
<a className="text-gray-400 hover:text-white transition-colors text-sm" href="mailto:info@zlatynepal.sk">info@zlatynepal.sk</a>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-brand-gold mt-0.5" data-lucide="map-pin"></i>
<span className="text-gray-400 text-sm">Zlatý Nepál s.r.o.<br/>Bratislava, Slovensko</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-500 text-center md:text-left">© 2025 Zlatý Nepál. Všetky ceny sú s DPH.</p>
<div className="flex gap-3 opacity-60">
<div className="h-6 w-10 bg-white rounded flex items-center justify-center"><span className="text-[10px] text-black font-bold">VISA</span></div>
<div className="h-6 w-10 bg-white rounded flex items-center justify-center"><span className="text-[10px] text-black font-bold">MC</span></div>
<div className="h-6 w-10 bg-white rounded flex items-center justify-center"><span className="text-[10px] text-black font-bold">PAY</span></div>
</div>
</div>
</div>
</footer>


    </>
  );
}
