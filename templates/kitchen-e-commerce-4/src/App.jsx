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
      

<header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-xl font-semibold tracking-tighter uppercase text-slate-900" href="#">
                KITCHEN<span className="text-slate-400">STUDIO</span>
</a>

<nav className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Keukens</a>
<a className="hover:text-slate-900 transition-colors" href="#">Apparatuur</a>
<a className="hover:text-slate-900 transition-colors" href="#">Inspiratie</a>
<a className="hover:text-slate-900 transition-colors" href="#">Service</a>
</nav>

<div className="flex items-center gap-4">
<button className="text-slate-500 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="relative text-slate-500 hover:text-slate-900 transition-colors group">
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 h-4 w-4 bg-slate-900 text-white text-[10px] flex items-center justify-center rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-opacity">2</span>
</button>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-6 pt-12">

<div className="flex items-center gap-2 text-xs text-slate-400 mb-8 font-medium">
<a className="hover:text-slate-900 transition-colors" href="#">Home</a>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<a className="hover:text-slate-900 transition-colors" href="#">Keukens</a>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-slate-900">Macau</span>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 mb-24">

<div className="lg:col-span-7 flex flex-col gap-4">
<div className="relative group w-full aspect-[4/3] bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
<img alt="Macau Kitchen" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>

<button className="absolute top-4 right-4 h-10 w-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-white transition-all shadow-sm border border-slate-100">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>

<div className="absolute bottom-4 left-4 flex gap-2">
<span className="bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-medium border border-slate-100 shadow-sm flex items-center gap-1.5">
<iconify-icon className="text-slate-500" icon="solar:box-minimalistic-linear"></iconify-icon>
                            Kasten voorgemonteerd
                        </span>
</div>
</div>

<div className="grid grid-cols-5 gap-4">
<button className="aspect-square rounded-xl overflow-hidden border-2 border-slate-900 relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</button>
<button className="aspect-square rounded-xl overflow-hidden border border-slate-100 opacity-70 hover:opacity-100 transition-opacity">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</button>
<button className="aspect-square rounded-xl overflow-hidden border border-slate-100 opacity-70 hover:opacity-100 transition-opacity">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</button>
<button className="aspect-square rounded-xl overflow-hidden border border-slate-100 opacity-70 hover:opacity-100 transition-opacity relative bg-slate-100">

<img className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-sm">
<iconify-icon icon="solar:play-linear" width="16"></iconify-icon>
</div>
</div>
</button>
<button className="aspect-square rounded-xl overflow-hidden border border-slate-100 bg-slate-50 flex items-center justify-center text-xs font-medium text-slate-500 hover:bg-slate-100 transition-colors">
                        +8
                    </button>
</div>
</div>

<div className="lg:col-span-5 flex flex-col h-full">
<div className="sticky top-24">

<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="flex text-yellow-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
</div>
<span className="text-sm text-slate-500 font-medium underline decoration-slate-200 underline-offset-4">4.8 (124 reviews)</span>
</div>
<div className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100">
<iconify-icon className="text-green-600" icon="solar:shield-check-linear"></iconify-icon>
                            WebwinkelKeur
                        </div>
</div>

<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                        Uw Droomkeuken Macau – Direct Leverbaar &amp; Hoogwaardig Afgewerkt
                    </h1>

<div className="flex items-baseline gap-4 mb-8">
<span className="text-4xl font-semibold tracking-tight text-slate-900">€ 4.299,-</span>
<span className="text-lg text-slate-400 line-through font-normal">€ 5.499,-</span>
<span className="text-xs font-medium text-green-700 bg-green-50 border border-green-100 px-2 py-1 rounded">-22% Deal</span>
</div>

<div className="grid grid-cols-2 gap-3 mb-8">
<div className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 bg-slate-50/50">
<div className="h-8 w-8 rounded-full bg-white flex items-center justify-center border border-slate-100 shadow-sm text-slate-900">
<iconify-icon icon="solar:medal-ribbon-linear"></iconify-icon>
</div>
<span className="text-sm font-medium">5 jaar garantie</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 bg-slate-50/50">
<div className="h-8 w-8 rounded-full bg-white flex items-center justify-center border border-slate-100 shadow-sm text-slate-900">
<iconify-icon icon="solar:box-linear"></iconify-icon>
</div>
<span className="text-sm font-medium">Gratis bezorging</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 bg-slate-50/50">
<div className="h-8 w-8 rounded-full bg-white flex items-center justify-center border border-slate-100 shadow-sm overflow-hidden">
<div className="w-4 h-3 flag-de rounded-sm"></div>
</div>
<span className="text-sm font-medium">Duitse kwaliteit</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 bg-slate-50/50">
<div className="h-8 w-8 rounded-full bg-white flex items-center justify-center border border-slate-100 shadow-sm">
<iconify-icon icon="logos:google-icon" width="14"></iconify-icon>
</div>
<span className="text-sm font-medium">4.9/5 Google</span>
</div>
</div>

<div className="flex flex-col gap-3 mb-6">
<button className="w-full bg-slate-900 text-white h-14 rounded-xl font-medium text-base hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 flex items-center justify-center gap-3">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="20"></iconify-icon>
                            In winkelwagen
                        </button>
<button className="w-full bg-white text-slate-900 border border-slate-200 h-14 rounded-xl font-medium text-base hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-3">
<iconify-icon icon="solar:chat-round-line-linear" width="20"></iconify-icon>
                            Gratis adviesgesprek
                        </button>
</div>

<p className="text-center text-xs text-slate-400">
                        Vandaag besteld, binnen 6 weken in huis.
                    </p>
</div>
</div>
</div>

<div className="border-b border-slate-100 mb-12 overflow-x-auto hide-scrollbar">
<nav className="flex gap-8 min-w-max">
<button className="pb-4 border-b-2 border-slate-900 text-slate-900 font-medium text-sm">Omschrijving &amp; Features</button>
<button className="pb-4 border-b-2 border-transparent text-slate-500 hover:text-slate-900 transition-colors font-medium text-sm">Keukenmeubelen</button>
<button className="pb-4 border-b-2 border-transparent text-slate-500 hover:text-slate-900 transition-colors font-medium text-sm">Garantie &amp; voorwaarden</button>
<button className="pb-4 border-b-2 border-transparent text-slate-500 hover:text-slate-900 transition-colors font-medium text-sm">Media</button>
</nav>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">

<div className="lg:col-span-2 space-y-16">

<div className="prose prose-slate prose-p:text-slate-500 prose-headings:font-semibold prose-headings:tracking-tight max-w-none">
<h3 className="text-xl">Modern design ontmoet functionaliteit</h3>
<p>De Macau droomkeuken combineert strakke lijnen met warme accenten. De fronten zijn uitgevoerd in een hoogwaardige matte finish die vingerafdrukken tegengaat. Het werkblad is gemaakt van duurzaam composiet dat bestand is tegen hitte en krassen.</p>
<p>Dankzij de soft-close lades en kasten geniet u van een geruisloze keukenervaring. De indeling is ergonomisch ontworpen om uw kookplezier te maximaliseren.</p>
</div>

<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
<h4 className="font-semibold text-lg mb-8">Eenvoudig naar uw nieuwe keuken</h4>
<div className="relative">

<div className="absolute top-5 left-0 w-full h-0.5 bg-slate-200 hidden md:block"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">

<div className="flex flex-col items-center text-center md:text-center md:items-center gap-4">
<div className="h-10 w-10 rounded-full bg-white border-2 border-slate-900 flex items-center justify-center text-slate-900 shadow-sm font-semibold text-sm">1</div>
<div>
<div className="font-medium text-sm mb-1">Customize</div>
<div className="text-xs text-slate-500 leading-relaxed">Pas uw keuken aan naar wens</div>
</div>
</div>

<div className="flex flex-col items-center text-center gap-4">
<div className="h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 shadow-sm font-medium text-sm">2</div>
<div>
<div className="font-medium text-sm mb-1">Bestel</div>
<div className="text-xs text-slate-500 leading-relaxed">Bestellen zonder aanbetaling</div>
</div>
</div>

<div className="flex flex-col items-center text-center gap-4">
<div className="h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 shadow-sm font-medium text-sm">3</div>
<div>
<div className="font-medium text-sm mb-1">Productie</div>
<div className="text-xs text-slate-500 leading-relaxed">Wij produceren uw keuken</div>
</div>
</div>

<div className="flex flex-col items-center text-center gap-4">
<div className="h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 shadow-sm font-medium text-sm">4</div>
<div>
<div className="font-medium text-sm mb-1">Levering</div>
<div className="text-xs text-slate-500 leading-relaxed">Snel in huis binnen 6 weken</div>
</div>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-xl font-semibold mb-6 tracking-tight">Inclusief 5 Topapparaten</h3>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">

<div className="p-6 rounded-xl border border-slate-100 bg-white hover:shadow-md hover:border-slate-200 transition-all group cursor-default">
<div className="bg-slate-50 rounded-lg aspect-square mb-4 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:oven-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="font-medium text-sm mb-1">Heteluchtoven</div>
<div className="text-xs text-slate-500">A+ Energielabel</div>
</div>

<div className="p-6 rounded-xl border border-slate-100 bg-white hover:shadow-md hover:border-slate-200 transition-all group cursor-default">
<div className="bg-slate-50 rounded-lg aspect-square mb-4 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:fridge-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="font-medium text-sm mb-1">Koelkast</div>
<div className="text-xs text-slate-500">182 liter inhoud</div>
</div>

<div className="p-6 rounded-xl border border-slate-100 bg-white hover:shadow-md hover:border-slate-200 transition-all group cursor-default">
<div className="bg-slate-50 rounded-lg aspect-square mb-4 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:washing-machine-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="font-medium text-sm mb-1">Vaatwasser</div>
<div className="text-xs text-slate-500">Stil &amp; Zuinig</div>
</div>

<div className="p-6 rounded-xl border border-slate-100 bg-white hover:shadow-md hover:border-slate-200 transition-all group cursor-default">
<div className="bg-slate-50 rounded-lg aspect-square mb-4 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:fire-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="font-medium text-sm mb-1">Inductieplaat</div>
<div className="text-xs text-slate-500">4 kookzones</div>
</div>

<div className="p-6 rounded-xl border border-slate-100 bg-white hover:shadow-md hover:border-slate-200 transition-all group cursor-default">
<div className="bg-slate-50 rounded-lg aspect-square mb-4 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:wind-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="font-medium text-sm mb-1">Afzuigkap</div>
<div className="text-xs text-slate-500">Design zwart</div>
</div>
</div>
</div>
</div>

<div className="space-y-8">

<div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50">
<div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white">
<span className="font-medium text-sm">3D Detail: Greep</span>
<iconify-icon className="text-slate-400" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<div className="aspect-square relative flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100">

<div className="w-32 h-4 bg-slate-800 rounded shadow-2xl transform rotate-45"></div>
<div className="absolute bottom-4 text-xs text-slate-400 font-medium flex items-center gap-2">
<iconify-icon icon="solar:hand-shake-linear"></iconify-icon>
                            Sleep om te draaien
                        </div>
</div>
</div>

<div className="rounded-2xl border border-slate-200 overflow-hidden">
<div className="p-4 bg-slate-50 border-b border-slate-200 font-medium text-sm">Beschikbare afmetingen</div>
<table className="w-full text-sm text-left">
<tbody className="divide-y divide-slate-100">
<tr>
<td className="p-4 text-slate-500">Breedte</td>
<td className="p-4 font-medium text-right">240 - 420 cm</td>
</tr>
<tr>
<td className="p-4 text-slate-500">Diepte</td>
<td className="p-4 font-medium text-right">60 cm</td>
</tr>
<tr>
<td className="p-4 text-slate-500">Werkhoogte</td>
<td className="p-4 font-medium text-right">92 cm</td>
</tr>
<tr>
<td className="p-4 text-slate-500">Plint</td>
<td className="p-4 font-medium text-right">10 - 15 cm</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="border-t border-slate-100 pt-16 mb-24 max-w-3xl mx-auto">
<h3 className="text-2xl font-semibold mb-8 text-center tracking-tight">Veelgestelde vragen</h3>
<div className="space-y-4">
<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none font-medium text-slate-900">
<span>Wordt de keuken gemonteerd geleverd?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-slate-500 text-sm leading-relaxed">
                        Ja, de kasten worden volledig voorgemonteerd geleverd. U hoeft ze alleen nog maar op hun plaats te zetten, waterpas te stellen en aan elkaar te koppelen. Dit bespaart u aanzienlijk veel tijd bij de installatie.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none font-medium text-slate-900">
<span>Kan ik de opstelling wijzigen?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-slate-500 text-sm leading-relaxed">
                        Zeker. Omdat de keuken uit losse elementen bestaat, kunt u de volgorde van de kasten naar wens aanpassen. Let wel op de aansluitpunten voor water en elektra.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none font-medium text-slate-900">
<span>Wat zijn de garantievoorwaarden?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-slate-500 text-sm leading-relaxed">
                        Wij bieden standaard 5 jaar fabrieksgarantie op de keukenmeubelen en 2 jaar op de apparatuur.
                    </div>
</details>
</div>
</div>

<div className="mb-24">
<div className="flex justify-between items-end mb-8">
<div>
<h3 className="text-2xl font-semibold tracking-tight">Thuis bij onze klanten</h3>
<p className="text-slate-500 mt-1">Tag ons op Instagram met #MijnDroomkeuken</p>
</div>
<a className="text-sm font-medium border-b border-slate-900 pb-0.5" href="#">Bekijk alle foto's</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="aspect-square bg-slate-100 rounded-xl overflow-hidden relative group">
<img className="w-full h-full object-cover transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute bottom-3 left-3 flex items-center gap-2 bg-white/90 backdrop-blur py-1 px-2 rounded-full text-xs font-medium">
<iconify-icon icon="solar:instagram-linear"></iconify-icon> @anne_interieur
                    </div>
</div>
<div className="aspect-square bg-slate-100 rounded-xl overflow-hidden relative group">
<img className="w-full h-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square bg-slate-100 rounded-xl overflow-hidden relative group">
<img className="w-full h-full object-cover transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="aspect-square bg-slate-100 rounded-xl overflow-hidden relative group">
<img className="w-full h-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 left-3 flex items-center gap-2 bg-white/90 backdrop-blur py-1 px-2 rounded-full text-xs font-medium">
<iconify-icon icon="solar:instagram-linear"></iconify-icon> @binnenkijken
                    </div>
</div>
</div>
</div>

<div className="border-t border-slate-100 pt-16 mb-24">
<h3 className="text-2xl font-semibold mb-8 tracking-tight">Anderen bekeken ook</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<a className="group" href="#">
<div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden mb-4 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="font-medium text-slate-900">Keuken Berlin</h4>
<p className="text-sm text-slate-500">Industrieel Design</p>
</div>
<span className="font-semibold text-slate-900">€ 3.899,-</span>
</div>
</a>

<a className="group" href="#">
<div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden mb-4 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="font-medium text-slate-900">Keuken Stockholm</h4>
<p className="text-sm text-slate-500">Scandinavisch Wit</p>
</div>
<span className="font-semibold text-slate-900">€ 4.599,-</span>
</div>
</a>

<a className="group" href="#">
<div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden mb-4 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="font-medium text-slate-900">Keuken Paris</h4>
<p className="text-sm text-slate-500">Klassiek Modern</p>
</div>
<span className="font-semibold text-slate-900">€ 5.199,-</span>
</div>
</a>
</div>
</div>
</main>

<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div>
<a className="text-lg font-bold tracking-tighter uppercase text-slate-900 mb-6 block" href="#">
                        KITCHEN<span className="text-slate-400">STUDIO</span>
</a>
<p className="text-slate-500 text-sm leading-relaxed">
                        Hoogwaardige keukens voor een eerlijke prijs. Direct van de fabriek, zonder tussenpersonen.
                    </p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Service</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">Klantenservice</a></li>
<li><a className="hover:text-slate-900" href="#">Garantie</a></li>
<li><a className="hover:text-slate-900" href="#">Montage</a></li>
<li><a className="hover:text-slate-900" href="#">Brochure aanvragen</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Over ons</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">Onze showroom</a></li>
<li><a className="hover:text-slate-900" href="#">Reviews</a></li>
<li><a className="hover:text-slate-900" href="#">Vacatures</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Nieuwsbrief</h4>
<div className="flex gap-2">
<input className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-slate-900 w-full" placeholder="Uw e-mailadres" type="email"/>
<button className="bg-slate-900 text-white rounded-lg px-4 py-2 hover:bg-slate-800">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
<div>© 2024 KitchenStudio. Alle rechten voorbehouden.</div>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-slate-900" href="#">Privacy</a>
<a className="hover:text-slate-900" href="#">Voorwaarden</a>
</div>
</div>
</div>
</footer>


<div className="fixed bottom-6 right-6 z-50 w-full max-w-[400px] shadow-2xl rounded-2xl animate-[slideIn_0.5s_ease-out]">
<style>
            @keyframes slideIn { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        </style>

<div className="bg-slate-900 text-white p-4 rounded-t-2xl flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="bg-white/10 p-1.5 rounded-lg">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold">Toegevoegd aan winkelwagen</div>
<div className="text-xs text-slate-400">Keuken Macau</div>
</div>
</div>
<button className="text-slate-400 hover:text-white">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<div className="bg-white p-6 rounded-b-2xl border-x border-b border-slate-100">
<div className="flex gap-4 mb-6">
<div className="w-16 h-16 bg-slate-100 rounded-lg overflow-hidden shrink-0 border border-slate-100">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-1">
<span className="font-medium text-slate-900 text-sm">Uw Droomkeuken Macau</span>
<span className="font-semibold text-slate-900 text-sm">€ 4.299,-</span>
</div>
<p className="text-xs text-slate-500 mb-2">Opstelling: Recht, 300cm</p>
<div className="flex items-center gap-2 text-[10px] text-green-700 bg-green-50 w-fit px-2 py-0.5 rounded border border-green-100">
<iconify-icon icon="solar:delivery-linear"></iconify-icon>
                        Levering binnen 6 weken
                    </div>
</div>
</div>

<div className="flex justify-between items-center border-t border-slate-50 pt-4 mb-6">
<span className="text-sm text-slate-500">Totaal (incl. BTW)</span>
<span className="text-lg font-bold text-slate-900">€ 4.299,-</span>
</div>

<div className="grid grid-cols-2 gap-3">
<button className="flex items-center justify-center px-4 py-3 border border-slate-200 rounded-xl text-sm font-medium hover:bg-slate-50 transition-colors">
                    Verder winkelen
                </button>
<button className="flex items-center justify-center px-4 py-3 bg-slate-900 text-white rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-100">
                    Afrekenen <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="mt-4 text-center">
<span className="text-[10px] text-slate-400 flex items-center justify-center gap-1.5">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon> Veilig betalen met iDeal, Creditcard
                </span>
</div>
</div>
</div>

    </>
  );
}
