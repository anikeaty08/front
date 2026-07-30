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
      

<main className="shadow-slate-200/50 overflow-hidden min-h-screen bg-white max-w-[1600px] z-10 mr-auto ml-auto relative shadow-2xl">

<nav className="fixed -translate-x-1/2 flex transition-all duration-300 bg-white/80 w-[95%] max-w-5xl z-50 border-neutral-200 border rounded-full pt-3 pr-4 pb-3 pl-4 top-6 left-1/2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="flex text-white bg-neutral-900 w-9 h-9 rounded-full items-center justify-center">
<iconify-icon height="20" icon="solar:wheel-bold-duotone" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-neutral-900">2K Autoservis</span>
</div>

<div className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-500">
<a className="text-neutral-900 transition-colors" href="#">Úvod</a>
<a className="hover:text-neutral-900 transition-colors" href="#podoli">Podolí</a>
<a className="hover:text-neutral-900 transition-colors" href="#libus">Libuš</a>
<a className="hover:text-neutral-900 transition-colors" href="#sluzby">Služby</a>
<a className="hover:text-neutral-900 transition-colors" href="#klima">Klimatizace</a>
</div>

<a className="hidden md:flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium py-2 px-4 rounded-full transition-colors" href="#kontakty">
<iconify-icon height="16" icon="solar:phone-calling-linear" width="16"></iconify-icon>
         Kontakt
    </a>
</nav>

<section className="grid min-h-[680px] pt-32 lg:grid-cols-12 lg:pt-0">

<div className="lg:col-span-7 lg:pl-20 lg:pr-12 flex flex-col z-10 pt-12 pr-6 pb-12 pl-6 relative justify-center">

<div className="flex lg:mt-20 w-fit mt-0 mb-6 gap-x-2 gap-y-2 items-center">
<div className="inline-flex gap-2 text-[11px] uppercase font-medium text-red-600 tracking-wider bg-red-50 border-red-100 border rounded-full pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
</span>
            Certifikovaný partner ELIT
        </div>
</div>
<h1 className="leading-[0.95] lg:text-7xl text-5xl text-neutral-900 tracking-tighter mb-6">
<span className="block text-neutral-400">Autoservis</span>
<span className="block">Praha 4</span>
</h1>
<div className="border-l-2 border-red-500 pl-6 mb-8">
<h2 className="text-xl font-medium text-neutral-900 mb-2">Potřebujete opravit rychle auto?</h2>
<p className="text-lg text-neutral-500 max-w-xl leading-relaxed font-normal">
        Díky našim dlouholetým zkušenostem to umíme podstatně rychleji, než většina konkurence. Umíme opravit všechny značky.
        </p>
</div>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
<a className="group shadow-red-500/30 hover:shadow-red-500/60 transition-all duration-300 overflow-hidden hover:bg-red-600 font-medium text-white bg-red-600 rounded-lg pt-3.5 pr-6 pb-3.5 pl-6 relative shadow-lg w-full sm:w-auto text-center" href="tel:+420602203503" style={{boxShadow: `0 18px 40px -15px rgba(220,38,38,0.5)`, borderRadius: `0.5rem`, position: `relative`, '--border-gradient': `linear-gradient(180deg, rgba(252, 165, 165, 0.4), rgba(220, 38, 38, 0.5))`, '--border-radius-before': `8px`}}>
<div className="group-hover:translate-y-0 group-hover:opacity-0 transition-all duration-300 bg-white/10 absolute top-0 right-0 bottom-0 left-0 translate-y-full"></div>
<span className="flex items-center justify-center gap-2 relative">
                Volat Podolí
                <span className="text-xs opacity-80 font-normal ml-1">602 203 503</span>
</span>
</a>
<a className="group transition-all duration-300 overflow-hidden hover:bg-neutral-100 font-medium text-neutral-700 bg-white border border-neutral-200 rounded-lg pt-3.5 pr-6 pb-3.5 pl-6 relative w-full sm:w-auto text-center" href="tel:+420603419935">
<span className="flex items-center justify-center gap-2 relative">
                Volat Libuš
                <span className="text-xs opacity-60 font-normal ml-1">603 419 935</span>
</span>
</a>
</div>
<div className="flex items-center gap-8 text-sm text-neutral-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-900" icon="solar:shield-check-linear"></iconify-icon>
<span>Záruka kvality</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-900" icon="solar:clock-circle-linear"></iconify-icon>
<span>20+ let na trhu</span>
</div>
</div>
</div>

<div className="lg:col-span-5 lg:h-auto overflow-hidden bg-center bg-neutral-900 w-full h-[400px] bg-cover relative bg-[url(https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop)]" style={{}}>
<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-neutral-900/40 opacity-100 lg:bg-gradient-to-l lg:from-neutral-900/0 lg:via-transparent lg:to-white"></div>
</div>
</section>

<section className="bg-neutral-950 border-neutral-900 border-t text-white py-20">
<div className="container mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform">
<span className="font-bold font-mono">01</span>
</div>
<h3 className="text-lg font-semibold mb-2 text-white">Prověřená zkušenost</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                    Jaká je naše záruka kvality? Jsme tu pro Vás už přes <span className="text-white">20 let</span> a to díky Vám.
                </p>
</div>

<div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform">
<span className="font-bold font-mono">02</span>
</div>
<h3 className="text-lg font-semibold mb-2 text-white">Opravíme cokoliv</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                    Umíme opravit <span className="text-white">všechny značky</span> vozů, protože máme dlouholeté a rozsáhlé zkušenosti.
                </p>
</div>

<div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform">
<span className="font-bold font-mono">03</span>
</div>
<h3 className="text-lg font-semibold mb-2 text-white">Výborná dostupnost</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                    Máme pro Vás připravené <span className="text-white">2 pobočky</span> (Podolí a Libuš), sami si můžete vybrat podle Vaší lokality.
                </p>
</div>

<div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors group relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon height="60" icon="solar:medal-star-bold" width="60"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon height="20" icon="solar:verified-check-bold" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 text-white">Partner ELITE</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                    Jsme certifikovaným partnerem společnosti <span className="text-white">ELITE</span>. Zakládáme si na kvalitních dílech.
                </p>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 border-b border-neutral-100" id="sluzby">
<div className="container mx-auto px-6 lg:px-12">
<div className="flex flex-col lg:flex-row gap-16">

<div className="lg:w-1/3">
<span className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-4 block">O Nás</span>
<h2 className="text-4xl tracking-tight text-neutral-900 mb-6">
                    Kvalitní díly, poctivá práce.
                </h2>
<div className="space-y-4 text-neutral-500 text-sm leading-relaxed">
<p>
                        2K autoservis se nachází ve výborné lokalitě téměř v centru Prahy, a to v Podolí na Praze 4. Další pobočku naleznete na Libuši.
                    </p>
<p>
                        Jako jedni z mála jsme certifikovaným partnerem společnosti ELITE, která nám dodává náhradní díly. Jedině tak dokážeme odvést kvalitní práci, která vydrží delší dobu bez jakýchkoliv závad.
                    </p>
</div>
<div className="mt-8 p-4 bg-neutral-50 rounded-xl border border-neutral-100">
<div className="flex items-start gap-3">
<iconify-icon className="text-neutral-400 mt-0.5" icon="solar:info-circle-bold-duotone" width="20"></iconify-icon>
<p className="text-xs text-neutral-600">
<strong>Tip:</strong> Pobočka na Libuši je větší a je přizpůsobená i pro opravy dodávek a nákladních aut.
                         </p>
</div>
</div>
</div>

<div className="lg:w-2/3">
<h3 className="text-xl font-medium mb-8">Nabízíme komplexní služby:</h3>
<div className="grid md:grid-cols-2 gap-x-8 gap-y-6">

<div className="flex items-start gap-3">
<div className="mt-1 text-red-500"><iconify-icon icon="solar:check-circle-bold" width="18"></iconify-icon></div>
<span className="text-neutral-700 text-sm">Odborné prohlídky a opravy automobilů po záruce</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 text-red-500"><iconify-icon icon="solar:check-circle-bold" width="18"></iconify-icon></div>
<span className="text-neutral-700 text-sm">Komplexní pozáruční servisní služby <span className="font-medium text-neutral-900 underline decoration-neutral-300">všech značek</span></span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 text-red-500"><iconify-icon icon="solar:check-circle-bold" width="18"></iconify-icon></div>
<span className="text-neutral-700 text-sm">Prodej pneumatik a pneuservis</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 text-red-500"><iconify-icon icon="solar:check-circle-bold" width="18"></iconify-icon></div>
<span className="text-neutral-700 text-sm">Služby pro stálé zákazníky, firmy</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 text-red-500"><iconify-icon icon="solar:check-circle-bold" width="18"></iconify-icon></div>
<span className="text-neutral-700 text-sm">Servis autoklimatizací</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 text-red-500"><iconify-icon icon="solar:check-circle-bold" width="18"></iconify-icon></div>
<span className="text-neutral-700 text-sm">Originální díly FORD od značky MOTORCRAFT</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 text-red-500"><iconify-icon icon="solar:check-circle-bold" width="18"></iconify-icon></div>
<span className="text-neutral-700 text-sm">Dovoz a prodej náhradních dílů (US, Japonsko, EU)</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 text-red-500"><iconify-icon icon="solar:check-circle-bold" width="18"></iconify-icon></div>
<span className="text-neutral-700 text-sm">Prodej náhradních dílů s minimální dodací lhůtou</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 text-red-500"><iconify-icon icon="solar:check-circle-bold" width="18"></iconify-icon></div>
<span className="text-neutral-700 text-sm">Zapůjčení náhradního vozu zdarma (pojistné události)</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50" id="kontakty">
<div className="container mx-auto px-6 lg:px-12">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-4">Vyberte si pobočku</h2>
<p className="text-neutral-500 max-w-lg mx-auto">Jsme Vám k dispozici na dvou místech v Praze 4.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-200 hover:border-red-200 hover:shadow-md transition-all group" id="podoli">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-xl font-bold text-neutral-900">Servis Podolí</h3>
<p className="text-sm text-neutral-500 mt-1">Praha 4 - Podolí</p>
</div>
<div className="bg-neutral-100 p-2 rounded-full text-neutral-600 group-hover:text-red-500 group-hover:bg-red-50 transition-colors">
<iconify-icon icon="solar:map-point-bold-duotone" width="24"></iconify-icon>
</div>
</div>
<div className="space-y-4">
<a className="flex items-center gap-4 p-4 rounded-xl bg-neutral-50 group-hover:bg-white border border-transparent group-hover:border-neutral-200 transition-all" href="tel:+420602203503">
<iconify-icon className="text-red-500" icon="solar:phone-calling-bold" width="24"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs text-neutral-400 uppercase tracking-wider font-medium">Zavolat</span>
<span className="text-lg font-semibold text-neutral-900">+420 602 203 503</span>
</div>
</a>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-200 hover:border-red-200 hover:shadow-md transition-all group" id="libus">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-xl font-bold text-neutral-900">Servis Libuš</h3>
<p className="text-sm text-neutral-500 mt-1">Praha 4 - Libuš (i dodávky)</p>
</div>
<div className="bg-neutral-100 p-2 rounded-full text-neutral-600 group-hover:text-red-500 group-hover:bg-red-50 transition-colors">
<iconify-icon icon="solar:delivery-bold-duotone" width="24"></iconify-icon>
</div>
</div>
<div className="space-y-4">
<a className="flex items-center gap-4 p-4 rounded-xl bg-neutral-50 group-hover:bg-white border border-transparent group-hover:border-neutral-200 transition-all" href="tel:+420603419935">
<iconify-icon className="text-red-500" icon="solar:phone-calling-bold" width="24"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs text-neutral-400 uppercase tracking-wider font-medium">Zavolat</span>
<span className="text-lg font-semibold text-neutral-900">+420 603 419 935</span>
</div>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-200 pt-16 pb-8">
<div className="container mx-auto px-6 lg:px-12">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-neutral-900" icon="solar:wheel-bold-duotone" width="24"></iconify-icon>
<span className="text-lg font-bold tracking-tight text-neutral-900">2K Autoservis</span>
</div>
<p className="text-neutral-500 text-sm max-w-sm">
                    Spolehlivý autoservis na Praze 4 s více než dvacetiletou tradicí. Dvě pobočky pro vaše pohodlí.
                </p>
</div>
<div>
<h4 className="font-medium text-neutral-900 mb-4">Služby</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-red-600 transition-colors" href="#">Autoservis</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Pneuservis</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Klimatizace</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Autoklempířství</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-neutral-900 mb-4">Kontakt</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li className="flex items-center gap-2"><iconify-icon icon="solar:phone-linear"></iconify-icon> 602 203 503 (Podolí)</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:phone-linear"></iconify-icon> 603 419 935 (Libuš)</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Praha 4</li>
</ul>
</div>
</div>
<div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-400">© 2025 2K Autoservis. Všechna práva vyhrazena.</p>
<div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">

<span className="text-xs font-bold text-neutral-800 border border-neutral-300 px-2 py-0.5 rounded">ELIT Partner</span>
<span className="text-xs font-bold text-neutral-800 border border-neutral-300 px-2 py-0.5 rounded">Motorcraft</span>
</div>
</div>
</div>
</footer>
</main>

    </>
  );
}
