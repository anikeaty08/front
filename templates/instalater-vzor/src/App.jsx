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
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-semibold text-lg tracking-tight text-blue-600">
                [Název Firmy]
            </div>
<a className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors" href="tel:+420123456789">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
<span className="hidden md:inline">+420 123 456 789</span>
</a>
</div>
</nav>

<header className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="flex flex-col gap-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium w-fit border border-blue-100">
<span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                    Pohotovost k dispozici
                </div>
<h1 className="md:text-5xl lg:text-6xl leading-tight text-4xl font-semibold text-slate-900 tracking-tight">
                    Perfektní vodoinstalace <br className=""/> bez <span className="text-blue-600">zbytečných starostí</span>
</h1>
<p className="text-lg text-slate-600 max-w-md">
                    Rychlé opravy havárií, kompletní instalace koupelen a odborný servis vodovodních rozvodů.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-lg font-medium text-base transition-colors flex items-center justify-center gap-2 shadow-sm" href="tel:+420123456789">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
                        Zavolat hned
                    </a>
<div className="flex items-center justify-center sm:justify-start gap-2 px-4 py-3 text-slate-600 font-medium text-base bg-white rounded-lg border border-slate-200">
                        +420 123 456 789
                    </div>
</div>
</div>
<div className="relative h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50">
<img alt="Instalatérské práce" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
</div>
</div>
</header>

<section className="py-20 bg-white border-y border-slate-200" id="sluzby">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-12">Naše služby</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-xl border border-slate-100 bg-slate-50 hover:border-blue-200 transition-colors">
<div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
<iconify-icon icon="solar:waterdrops-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Opravy vodovodních rozvodů</h3>
<p className="text-sm text-slate-600">Rychlá lokalizace a oprava prasklých potrubí, úniků vody a výměna starých rozvodů.</p>
</div>

<div className="p-6 rounded-xl border border-slate-100 bg-slate-50 hover:border-blue-200 transition-colors">
<div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
<iconify-icon icon="solar:bath-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Instalace koupelen</h3>
<p className="text-sm text-slate-600">Kompletní montáž sanity, zapojení van, sprchových koutů, umyvadel a závěsných WC.</p>
</div>

<div className="p-6 rounded-xl border border-slate-100 bg-slate-50 hover:border-blue-200 transition-colors">
<div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
<iconify-icon icon="solar:settings-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Výměna baterií a sifonů</h3>
<p className="text-sm text-slate-600">Odborná instalace a přetěsnění dřezových, umyvadlových i sprchových baterií a sifonů.</p>
</div>

<div className="p-6 rounded-xl border border-slate-100 bg-slate-50 hover:border-blue-200 transition-colors">
<div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
<iconify-icon icon="solar:trash-bin-trash-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Čištění odpadů</h3>
<p className="text-sm text-slate-600">Strojní čištění ucpaných domovních odpadů, dřezů, toalet a kanalizačních přípojek.</p>
</div>

<div className="p-6 rounded-xl border border-slate-100 bg-slate-50 hover:border-blue-200 transition-colors">
<div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
<iconify-icon icon="solar:fire-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Montáž bojlerů</h3>
<p className="text-sm text-slate-600">Bezpečná instalace, výměna a zapojení elektrických ohřívačů vody a bojlerů všech značek.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-blue-50/50">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-10">Proč si vybrat právě nás?</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-blue-600" icon="solar:clock-circle-linear" width="32"></iconify-icon>
<span className="text-sm font-medium text-slate-800">Rychlý příjezd k haváriím</span>
</div>
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-blue-600" icon="solar:hand-money-linear" width="32"></iconify-icon>
<span className="text-sm font-medium text-slate-800">Férové ceny předem</span>
</div>
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-blue-600" icon="solar:diploma-verified-linear" width="32"></iconify-icon>
<span className="text-sm font-medium text-slate-800">Letité zkušenosti v oboru</span>
</div>
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-blue-600" icon="solar:broom-linear" width="32"></iconify-icon>
<span className="text-sm font-medium text-slate-800">Pořádek po dokončení práce</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-10">Ukázky naší práce</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="aspect-square bg-slate-100 rounded-lg overflow-hidden">
<img alt="Realizace 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square bg-slate-100 rounded-lg overflow-hidden">
<img alt="Realizace 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square bg-slate-100 rounded-lg overflow-hidden md:col-span-2 md:row-span-2">
<img alt="Realizace 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square bg-slate-100 rounded-lg overflow-hidden">
<img alt="Realizace 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square bg-slate-100 rounded-lg overflow-hidden">
<img alt="Realizace 5" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-200">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-12">Co říkají naši zákazníci</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="text-yellow-400 mb-4 flex gap-1">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 line-clamp-4">
                        "Skvělá domluva a bleskový příjezd. Pán opravil prasklou trubku pod dřezem během chvíle. Konečně spolehlivý řemeslník. Určitě doporučuji všem v okolí."
                    </p>
<div className="font-medium text-sm text-slate-900">— Martin V.</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="text-yellow-400 mb-4 flex gap-1">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 line-clamp-4">
                        "Nechali jsme si dělat kompletní rozvody vody v nové koupelně. Práce byla odvedena naprosto profesionálně, čistě a za předem dohodnutou cenu."
                    </p>
<div className="font-medium text-sm text-slate-900">— Petra K.</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm md:hidden lg:block">
<div className="text-yellow-400 mb-4 flex gap-1">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 line-clamp-4">
                        "O víkendu se nám ucpal hlavní odpad. Po jednom telefonu pan instalatér dorazil a problém vyřešil strojním čištěním. Moc děkuji za záchranu!"
                    </p>
<div className="font-medium text-sm text-slate-900">— Josef N.</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white" id="kontakt">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-6">Potřebujete instalatéra?</h2>
<p className="text-slate-400 text-lg mb-10">Zavolejte nám. Řešíme havárie i plánované rekonstrukce. Přijedeme co nejdříve.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-blue-400" icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400 uppercase tracking-wide mb-1">Telefon / Pohotovost</div>
<a className="text-xl font-semibold hover:text-blue-400 transition-colors" href="tel:+420123456789">+420 123 456 789</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-blue-400" icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400 uppercase tracking-wide mb-1">E-mail</div>
<a className="text-base font-medium hover:text-blue-400 transition-colors" href="mailto:info@vas-instalater.cz">info@vas-instalater.cz</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-blue-400" icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400 uppercase tracking-wide mb-1">Oblast působení</div>
<div className="text-base font-medium">[Město] a okolí do 30 km</div>
<div className="text-sm text-slate-400 mt-1">[Vaše Ulice 123], [PSČ] [Město]</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-blue-400" icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400 uppercase tracking-wide mb-1">Pracovní doba</div>
<div className="text-base font-medium">Po - Pá: 8:00 – 17:00</div>
<div className="text-sm text-blue-400 mt-1">Víkendy: Pouze havárie po tel. domluvě</div>
</div>
</div>
</div>
</div>
<div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center">
<iconify-icon className="text-blue-500 mb-4" icon="solar:danger-triangle-linear" width="48"></iconify-icon>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2">Máte havárii?</h3>
<p className="text-slate-400 text-sm mb-8">Zavolejte ihned, snažíme se vyjíždět k prasklé vodě či ucpanému odpadu bez zbytečného odkladu.</p>
<a className="block w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg shadow-blue-900/50" href="tel:+420123456789">
                        Volat ihned: +420 123 456 789
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 border-t border-slate-800 py-8">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
<div>
                © 2024 [Název Firmy]. Všechna práva vyhrazena.
            </div>
<div className="flex items-center gap-6">
<span>[Město] a okolí</span>
<a className="hover:text-white transition-colors" href="tel:+420123456789">+420 123 456 789</a>
</div>
</div>
</footer>

    </>
  );
}
