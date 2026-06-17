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
      

<nav className="fixed top-0 w-full z-50 bg-[#FDFBF9]/80 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="bg-stone-800 text-white p-1.5 rounded-lg">
<i className="w-5 h-5" data-lucide="wrench"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-stone-900" style={{}}>Čiko Brno</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-stone-900 transition-colors text-stone-900" href="#domu" style={{}}>Domů</a>
<a className="text-sm font-medium hover:text-stone-900 transition-colors text-stone-900" href="#sluzby" style={{}}>Služby</a>
<a className="text-sm font-medium hover:text-stone-900 transition-colors text-stone-900" href="#o-nas" style={{}}>O nás</a>
<a className="text-sm font-medium hover:text-stone-900 transition-colors text-stone-900" href="#kontakt" style={{}}>Kontakt</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm" href="tel:775383383">
<i className="w-4 h-4" data-lucide="phone"></i>
<span>775 383 383</span>
</a>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-24 relative" id="domu">

<div className="absolute inset-0 z-0 opacity-30 pointer-events-none" style={{backgroundImage: 'radial-gradient(#A8A29E 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 mb-8">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium uppercase tracking-wide text-stone-900" style={{}}>NONSTOP Havarijní Služba</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 leading-[1.1] text-stone-900" style={{}}>
                Havarijní nonstop služba,<br/>
<span className="text-stone-500">instalatér &amp; čištění kanalizací</span>
</h1>
<p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-stone-900" style={{}}>
                Potřebujete instalatéra, vyčistit ucpanou kanalizaci, stoupačku nebo odpad z kuchyně, WC či koupelny? Neváhejte a obraťte se na nás.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-stone-800 hover:bg-stone-700 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2" href="tel:775383383">
                    Zavolat ihned
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 hover:border-stone-300 rounded-lg font-medium transition-all flex items-center justify-center" href="#sluzby">
                    Naše služby
                </a>
</div>

<div className="mt-16 pt-8 border-t border-stone-200/60 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="shield-check"></i>
<span className="font-medium text-sm">Ověřená firma</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="clock"></i>
<span className="font-medium text-sm">24/7 Pohotovost</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="map-pin"></i>
<span className="font-medium text-sm">Působíme v celé ČR</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="award"></i>
<span className="font-medium text-sm">Založeno 2001</span>
</div>
</div>
</div>
</section>

<section className="py-16 bg-stone-900 text-white relative overflow-hidden">
<div className="bg-center opacity-10 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&amp;w=2069&amp;auto=format&amp;fit=crop')] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="md:flex items-center justify-between gap-12">
<div className="mb-8 md:mb-0">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Náhlá krize, ucpaná kanalizace?</h2>
<p className="text-stone-300 text-lg max-w-2xl">
                        Neprůchodná venkovní nebo vnitřní kanalizace, stoupačka, odpad z kuchyně, WC či koupelny? 
                        Naše služby jsou tu pro Vás 24 hodin denně, 7 dní v týdnu.
                    </p>
</div>
<div className="flex flex-col items-start md:items-end gap-2">
<span className="text-sm font-medium text-stone-400 uppercase tracking-wider">Pohotovost 24/7</span>
<a className="text-3xl md:text-5xl font-bold tracking-tight text-white hover:text-stone-200 transition-colors" href="tel:775383383">
                        775 383 383
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="sluzby">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-stone-900" style={{}}>Komplexní instalatérské služby</h2>
<p className="text-lg text-stone-900" style={{}}>
                    Používáme širokou škálu moderních zařízení na špičkové úrovni, abychom zaručili maximálně kvalitní servis za finančně zajímavé ceny.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-[#FDFBF9] border border-stone-100 hover:border-stone-200 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-stone-100 text-stone-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-stone-800 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="droplet"></i>
</div>
<h3 className="text-xl font-semibold mb-3 text-stone-900" style={{}}>Čištění ucpávek</h3>
<p className="leading-relaxed text-stone-900" style={{}}>
                        Čištění ucpávek kanalizací a odpadů tlakovými vozy a elektromechanicky. Rychlé řešení pro domácnosti i firmy.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-[#FDFBF9] border border-stone-100 hover:border-stone-200 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-stone-100 text-stone-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-stone-800 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="settings"></i>
</div>
<h3 className="text-xl font-semibold mb-3 text-stone-900" style={{}}>Frézování usazenin</h3>
<p className="leading-relaxed text-stone-900" style={{}}>
                        Těžení a frézování usazenin z kanalizací tlakovými vozy, rotačními frézami, vidiovými a řetězovými tryskami.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-[#FDFBF9] border border-stone-100 hover:border-stone-200 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-stone-100 text-stone-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-stone-800 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="camera"></i>
</div>
<h3 className="text-xl font-semibold mb-3 text-stone-900" style={{}}>Kamerové revize</h3>
<p className="leading-relaxed text-stone-900" style={{}}>
                        Zjišťování stavu kanalizace, odpadů a domovních přípojek TV kamerou. Dodáváme kompletní záznam a protokol.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-[#FDFBF9] border border-stone-100 hover:border-stone-200 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-stone-100 text-stone-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-stone-800 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="trash-2"></i>
</div>
<h3 className="text-xl font-semibold mb-3 text-stone-900" style={{}}>Čištění jímek a lapolů</h3>
<p className="leading-relaxed text-stone-900" style={{}}>
                        Čištění tukových jímek a lapolů včetně ekologické likvidace tuků a vzniklých odpadů.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-[#FDFBF9] border border-stone-100 hover:border-stone-200 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-stone-100 text-stone-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-stone-800 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="cloud-rain"></i>
</div>
<h3 className="text-xl font-semibold mb-3 text-stone-900" style={{}}>Dešťové vpusti</h3>
<p className="leading-relaxed text-stone-900" style={{}}>
                        Čištění zanesených revizních šachet, dešťových vpustí a svodů pro zajištění správného odtoku vody.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-[#FDFBF9] border border-stone-100 hover:border-stone-200 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-stone-100 text-stone-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-stone-800 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="wrench"></i>
</div>
<h3 className="text-xl font-semibold mb-3 text-stone-900" style={{}}>Instalatérské práce</h3>
<p className="leading-relaxed text-stone-900" style={{}}>
                        Běžné instalatérské a průtočnické práce, čištění stoupaček a odpadů z kuchyní, WC a koupelen.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-[#FDFBF9] border-stone-200 border-t pt-24 pb-24" id="o-nas">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-stone-900" style={{}}>Firma Miroslav Honzák - Čiko Brno</h2>
<div className="prose prose-stone prose-lg text-stone-900" style={{}}>
<p className="mb-6">
                            Firma byla založena v roce <strong>2001</strong> se sídlem v Brně. Naším účelem je poskytovat co nejkomplexnější servis všem zákazníkům jak z firemní, tak ze soukromé sféry.
                        </p>
<p className="mb-6">
                            Zaměřujeme se na provádění instalatérských prací, čištění kanalizačních, průmyslových a technologických potrubí. Důraz klademe na moderní technologie a ekologickou likvidaci vzniklých odpadů.
                        </p>
<ul className="space-y-4 mt-8">
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-stone-800 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span>Špičková úroveň technického vybavení</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-stone-800 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span>Finančně zajímavé ceny pro každého</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-stone-800 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span>Rychlý a maximálně kvalitní servis</span>
</li>
</ul>
</div>
<div className="mt-10">
<a className="inline-flex items-center justify-center px-6 py-3 border border-stone-300 shadow-sm text-base font-medium rounded-lg text-stone-700 bg-white hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500" href="#kontakt">
                            Více o nás
                        </a>
</div>
</div>
<div className="relative">
<div className="aspect-square bg-stone-200 rounded-3xl overflow-hidden relative shadow-2xl">

<div className="absolute inset-0 bg-stone-300 flex items-center justify-center text-stone-500">
<div className="bg-center w-full h-full bg-[url(https://images.unsplash.com/photo-1669920282730-ab422e592f97?w=1600&amp;q=80)] bg-cover"></div>
</div>
</div>

<div className="absolute -bottom-6 -left-6 w-24 h-24 bg-stone-800 rounded-2xl flex items-center justify-center text-white shadow-lg">
<div className="text-center">
<span className="block text-2xl font-bold">20+</span>
<span className="text-xs uppercase tracking-wider">Let praxe</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden border-t border-stone-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-stone-900">Spokojení zákazníci</h2>
<p className="text-lg text-stone-600">Reálná hodnocení našich služeb z Google profilu. Spokojenost klienta je pro nás na prvním místě.</p>
</div>
<div className="flex items-center gap-2 text-stone-400 text-sm font-medium">
<i className="w-4 h-4" data-lucide="message-square"></i>
<span>Google Recenze</span>
</div>
</div>

<div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">

<div className="min-w-[85%] md:min-w-[400px] snap-center bg-[#FDFBF9] p-8 rounded-2xl border border-stone-100 hover:border-stone-200 transition-colors shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-stone-700 leading-relaxed mb-6">
                            "Vřele doporučuji! V 19h večer, v neděli, jsem zavolal s prosbou o čištění odpadu. Pán přijel do 30 min, byl velice ochotný, profesionální a cena byla naprosto férová. Děkuji!"
                        </p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-stone-200/50">
<div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 font-bold text-sm">
                            MŠ
                        </div>
<div>
<span className="block font-medium text-stone-900 text-sm">Marek Švarc</span>
<span className="block text-xs text-stone-400">Před 2 měsíci</span>
</div>
</div>
</div>

<div className="min-w-[85%] md:min-w-[400px] snap-center bg-[#FDFBF9] p-8 rounded-2xl border border-stone-100 hover:border-stone-200 transition-colors shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-stone-700 leading-relaxed mb-6">
                            "Velice ochotný a šikovný pán. Přijel hned, problém vyřešil rychle a za rozumnou cenu. Určitě doporučuji."
                        </p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-stone-200/50">
<div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 font-bold text-sm">
                            A
                        </div>
<div>
<span className="block font-medium text-stone-900 text-sm">Alice</span>
<span className="block text-xs text-stone-400">Před rokem</span>
</div>
</div>
</div>

<div className="min-w-[85%] md:min-w-[400px] snap-center bg-[#FDFBF9] p-8 rounded-2xl border border-stone-100 hover:border-stone-200 transition-colors shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-stone-700 leading-relaxed mb-6">
                            "Super domluva, rychlý příjezd (do hodiny od zavolání o víkendu), profesionální přístup a vybavení. Ucpaná kanalizace vyřešena. Mohu jen doporučit."
                        </p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-stone-200/50">
<div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 font-bold text-sm">
                            PK
                        </div>
<div>
<span className="block font-medium text-stone-900 text-sm">Petr K.</span>
<span className="block text-xs text-stone-400">Před rokem</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-200" id="kontakt">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-stone-900" style={{}}>Kontaktujte nás</h2>
<p className="text-lg mb-12 text-stone-900" style={{}}>
                Neváhejte a kontaktujte nás ještě dnes. V případě dotazů jsme vám k dispozici na uvedených telefonních číslech.
            </p>
<div className="bg-[#FDFBF9] rounded-2xl p-8 md:p-12 border border-stone-100 shadow-xl shadow-stone-200/50">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
<div className="">
<h3 className="text-sm font-semibold text-stone-400 uppercase tracking-wider mb-2">Adresa</h3>
<p className="font-medium text-lg text-stone-900" style={{}}>Čiko Brno - Miroslav Honzák</p>
<p className="text-stone-900" style={{}}>Brno, 638 00</p>
<p className="text-sm mt-2 text-stone-900" style={{}}>Působíme po celé České republice</p>
</div>
<div>
<h3 className="text-sm font-semibold text-stone-400 uppercase tracking-wider mb-2">Telefony (NONSTOP)</h3>
<div className="space-y-2">
<a className="flex items-center gap-2 font-medium text-lg hover:text-stone-600 transition-colors text-stone-900" href="tel:775383383" style={{}}>
<i className="w-4 h-4" data-lucide="phone"></i> 775 383 383
                            </a>
<a className="flex items-center gap-2 font-medium text-lg hover:text-stone-600 transition-colors text-stone-900" href="tel:724127778" style={{}}>
<i className="w-4 h-4" data-lucide="phone"></i> 724 127 778
                            </a>
</div>
</div>
</div>
<div className="mt-10 pt-8 border-t border-stone-200 text-center">
<a className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-stone-800 hover:bg-stone-700 text-white text-lg font-medium rounded-lg transition-all shadow-lg hover:shadow-stone-800/20" href="tel:775383383">
                        Zavolat havarijní službu
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-stone-50 border-t border-stone-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="bg-stone-800 text-white p-1.5 rounded-lg">
<i className="w-5 h-5" data-lucide="wrench"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-stone-900" style={{}}>Čiko Brno</span>
</div>
<p className="text-stone-500 max-w-sm mb-6">
                        Profesionální instalatérské a čistící služby s tradicí od roku 2001. Havarijní služba dostupná 24/7.
                    </p>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-stone-800 transition-colors" href="#"></a>
<a className="text-stone-400 hover:text-stone-800 transition-colors" href="#"></a>
</div>
</div>
<div className="">
<h3 className="font-semibold mb-4 text-stone-900" style={{}}>Menu</h3>
<ul className="space-y-3">
<li className=""><a className="text-stone-500 hover:text-stone-900 transition-colors" href="#">Domů</a></li>
<li className=""><a className="text-stone-500 hover:text-stone-900 transition-colors" href="#sluzby">Služby</a></li>
<li className=""><a className="text-stone-500 hover:text-stone-900 transition-colors" href="#o-nas">O nás</a></li>
</ul>
</div>
<div className="">
<h3 className="font-semibold mb-4 text-stone-900" style={{}}>Rychlý kontakt</h3>
<ul className="space-y-3">
<li className="text-stone-500">Čiko Brno - Miroslav Honzák</li>
<li className="text-stone-500">Brno, 638 00</li>
<li className=""><a className="text-stone-500 hover:text-stone-900 transition-colors font-medium" href="tel:775383383">775 383 383</a></li>
</ul>
</div>
</div>
<div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-stone-400" style={{}}>© Čiko Brno 2026. Všechna práva vyhrazena.</p>
<div className="flex items-center gap-6">
<a className="text-stone-400 hover:text-stone-800 text-sm transition-colors" href="#">Nahoru</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
