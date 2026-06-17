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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/80">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold text-zinc-900 tracking-tight" href="#">Jan Křenek</a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="tel:+420123456789">
<iconify-icon height="18" icon="solar:phone-linear" width="18"></iconify-icon>
<span className="hidden sm:inline">+420 123 456 789</span>
</a>
</div>
</nav>

<section className="sm:pt-40 sm:pb-32 pt-32 pr-6 pb-20 pl-6">
<div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 sm:gap-16">
<div className="flex-1 space-y-6 text-center md:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-600">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Přijímám nové klienty
                </div>
<h1 className="sm:text-5xl lg:text-6xl leading-tight text-4xl font-semibold text-zinc-900 tracking-tight">Realitní makléř, kterého jste hledali</h1>
<p className="sm:text-xl md:mx-0 text-lg text-zinc-600 max-w-lg mr-auto ml-auto">Jmenuji se Jan Křenek a zajistím hladký průběh prodeje vaší nemovitosti.</p>
<div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-all shadow-sm" href="tel:+420123456789">
<iconify-icon height="20" icon="solar:phone-linear" width="20"></iconify-icon>
                        Zavolat
                    </a>
<div className="text-sm text-zinc-500 font-medium">
                        +420 123 456 789
                    </div>
</div>
</div>
<div className="w-48 sm:w-64 md:w-80 flex-shrink-0">
<div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl bg-zinc-200 border border-zinc-100">
<img alt="Jan Novák - Realitní makléř" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/91d53965-316c-405d-ae86-a3f51ebdf118_800w.png"/>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-32 bg-white border-y border-zinc-100 px-6">
<div className="max-w-5xl mx-auto">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 mb-12 text-center md:text-left">Moje služby</h2>
<div className="grid sm:grid-cols-2 gap-6 sm:gap-8">

<div className="p-6 rounded-2xl border border-zinc-100 bg-zinc-50/50">
<div className="w-10 h-10 rounded-lg bg-zinc-900 text-white flex items-center justify-center mb-4">
<iconify-icon height="24" icon="solar:home-angle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Prodej nemovitostí</h3>
<p className="text-sm text-zinc-600">Kompletní zastoupení při prodeji. Cílem je bezpečný a rychlý prodej za maximální možnou tržní cenu.</p>
</div>

<div className="p-6 rounded-2xl border border-zinc-100 bg-zinc-50/50">
<div className="w-10 h-10 rounded-lg bg-zinc-900 text-white flex items-center justify-center mb-4">
<iconify-icon height="24" icon="solar:calculator-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Odhad ceny nemovitosti</h3>
<p className="text-sm text-zinc-600">Přesné zjištění reálné tržní hodnoty vaší nemovitosti na základě aktuálních dat a znalosti trhu.</p>
</div>

<div className="p-6 rounded-2xl border border-zinc-100 bg-zinc-50/50">
<div className="w-10 h-10 rounded-lg bg-zinc-900 text-white flex items-center justify-center mb-4">
<iconify-icon height="24" icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Kompletní servis při prodeji</h3>
<p className="text-sm text-zinc-600">Postarám se o právní servis, bezpečnou úschovu peněz, jednání s úřady i přepis energií.</p>
</div>

<div className="p-6 rounded-2xl border border-zinc-100 bg-zinc-50/50">
<div className="w-10 h-10 rounded-lg bg-zinc-900 text-white flex items-center justify-center mb-4">
<iconify-icon height="24" icon="solar:chat-round-line-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Poradenství</h3>
<p className="text-sm text-zinc-600">Odborné a nezávazné konzultace pro kupující i prodávající. Rád vám pomohu se správným rozhodnutím.</p>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-32 px-6">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 mb-10">Proč spolupracovat se mnou</h2>
<div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 text-left">
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-900 flex-shrink-0" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<p className="text-sm font-medium text-zinc-700">Osobní a lidský přístup ke každému klientovi.</p>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-900 flex-shrink-0" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<p className="text-sm font-medium text-zinc-700">Perfektní znalost lokálního trhu a cen.</p>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-900 flex-shrink-0" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<p className="text-sm font-medium text-zinc-700">Špičková prezentace (profesionální foto, video, homestaging).</p>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-900 flex-shrink-0" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<p className="text-sm font-medium text-zinc-700">Maximální bezpečnost, diskrétnost a transparentnost.</p>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-32 bg-white border-y border-zinc-100 px-6">
<div className="max-w-5xl mx-auto">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 mb-12 text-center md:text-left">Nedávné realizace</h2>
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

<div className="group relative rounded-2xl overflow-hidden border border-zinc-100 bg-zinc-50">
<div className="aspect-[4/3] bg-zinc-200 overflow-hidden relative">
<img alt="Prodej rodinného domu" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2.5 py-1 rounded text-xs font-semibold text-zinc-900 shadow-sm">Prodáno</div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold tracking-tight text-zinc-900 mb-1">Rodinný dům, Říčany</h3>
<p className="text-sm text-zinc-500">Více zájemců, navýšení kupní ceny o 8 %.</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden border border-zinc-100 bg-zinc-50">
<div className="aspect-[4/3] bg-zinc-200 overflow-hidden relative">
<img alt="Prodej bytu" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1502672260266-1c1de2d9d0cb?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2.5 py-1 rounded text-xs font-semibold text-zinc-900 shadow-sm">Prodáno</div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold tracking-tight text-zinc-900 mb-1">Byt 3+kk, Praha 4</h3>
<p className="text-sm text-zinc-500">Kupující nalezen během pouhých 14 dní.</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden border border-zinc-100 bg-zinc-50 sm:hidden md:block">
<div className="aspect-[4/3] bg-zinc-200 overflow-hidden relative">
<img alt="Prodej vily" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2.5 py-1 rounded text-xs font-semibold text-zinc-900 shadow-sm">Prodáno</div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold tracking-tight text-zinc-900 mb-1">Moderní vila, Praha - západ</h3>
<p className="text-sm text-zinc-500">Diskrétní prodej bez veřejné inzerce.</p>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-32 pt-20 pr-6 pb-20 pl-6">
<div className="max-w-4xl mx-auto">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 mb-12 text-center">Co říkají klienti</h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm">
<iconify-icon className="text-zinc-300 mb-4" height="32" icon="solar:quote-right-linear" width="32"></iconify-icon>
<p className="sm:text-base text-sm text-zinc-700 mb-6">„S Janem Křenekem jsem měl skvělou zkušenost. Vyzná se v oboru, jedná férově a vždy rychle reaguje. Doporučuji každému, kdo hledá spolehlivého realitního makléře“</p>
<div className="text-sm font-semibold text-zinc-900">— Andrej, Praha</div>
</div>

<div className="bg-white border-zinc-100 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm">
<iconify-icon className="text-zinc-300 mb-4" height="32" icon="solar:quote-right-linear" width="32"></iconify-icon>
<p className="sm:text-base text-sm text-zinc-700 mb-6">„Spolupráci s panem Křenkem mohu pouze doporučit. Jeho vstřícný a lidský přístup, rychlá komunikace a profesionalita zajistily, že celý proces koupě nemovistosti proběhl rychle, transparentně a bez stresu. Děkujeme.“</p>
<div className="text-sm font-semibold text-zinc-900">— Kristýna., Říčany</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 bg-zinc-900 text-white px-6">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-8">Spojte se se mnou</h2>
<p className="text-zinc-400 text-sm sm:text-base mb-10">Uvažujete o prodeji nemovitosti, nebo jen potřebujete poradit? <br className="hidden sm:block"/>Zavolejte mi a domluvíme se na dalším postupu.</p>
<div className="space-y-4 mb-12">
<a className="block text-3xl sm:text-4xl font-medium tracking-tight hover:text-zinc-300 transition-colors" href="tel:+420123456789">
                    +420 123 456 789
                </a>
<a className="block sm:text-lg hover:text-white transition-colors text-base text-zinc-400" href="mailto:jan.novak@email.cz">jan.krenek@email.cz</a>
<div className="text-sm text-zinc-500 pt-2 flex items-center justify-center gap-2">
<iconify-icon height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
                    Praha a Středočeský kraj
                </div>
</div>
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white text-zinc-900 text-sm font-semibold hover:bg-zinc-100 transition-all" href="tel:+420123456789">
<iconify-icon height="20" icon="solar:phone-linear" width="20"></iconify-icon>
                Zavolat makléři
            </a>
</div>
</section>

<footer className="bg-zinc-950 text-zinc-500 py-8 px-6 border-t border-zinc-800">
<div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
<div className="">© 2023 Jan Křenek. Všechna práva vyhrazena.</div>
<div className="flex items-center gap-4">
<span>+420 123 456 789</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span>Praha</span>
</div>
</div>
</footer>

    </>
  );
}
