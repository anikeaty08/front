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
      

<header className="absolute top-0 z-50 w-full border-b border-white/10 bg-transparent">
<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
<a className="text-2xl font-extrabold tracking-tight text-white lowercase" href="#">SleepR</a>
<nav className="hidden gap-8 text-sm font-semibold text-blue-100 md:flex">
<a className="hover:text-white transition-colors" href="#oplossing">Oplossing</a>
<a className="hover:text-white transition-colors" href="#maten">Maten</a>
<a className="hover:text-white transition-colors" href="#proefslapen">Proefslapen</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center text-sm font-semibold text-white hover:text-blue-100" href="#">
<iconify-icon className="mr-2 text-lg" icon="lucide:user"></iconify-icon> Inloggen
        </a>
<a className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20" href="#maten">
<iconify-icon className="text-lg" icon="lucide:shopping-bag"></iconify-icon>
</a>
</div>
</div>
</header>
<main className="">

<section className="overflow-hidden hero-gradient md:pt-40 md:pb-32 pt-32 pb-20 relative" id="top">
<div className="grid grid-cols-1 gap-16 sm:px-6 md:grid-cols-2 max-w-7xl mr-auto ml-auto pr-4 pl-4 gap-x-16 gap-y-16 items-center">

<div className="flex flex-col items-start text-left z-10">
<p className="mb-6 inline-flex items-center rounded-full bg-blue-600/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-100 border border-blue-400/30 backdrop-blur-md">
<span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-300 animate-pulse"></span>
            Winter Sale
          </p>
<h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.05]">
            Slaap beter.<br/>Leef beter.
          </h1>
<p className="mb-10 text-lg font-normal leading-relaxed text-blue-100/90 max-w-lg">
            De perfecte balans tussen steun en comfort. Ervaar de diepste slaap met de SleepR Hybride, nu met 100 dagen proefslapen.
          </p>
<div className="flex flex-wrap mb-10 gap-x-4 gap-y-4">
<a className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-900 shadow-xl shadow-blue-900/20 transition-all hover:scale-105 hover:bg-blue-50" href="#maten">
              Shop het best geteste matras
            </a>
<a className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10" href="#proefslapen">
              Bekijk voordelen
            </a>
</div>
<ul className="flex flex-col gap-3 text-sm font-medium text-blue-100/80">
<li className="flex items-center gap-3">
<div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-400 text-white">
<iconify-icon className="text-xs" icon="lucide:check"></iconify-icon>
</div>
              Gratis bezorging en retour
            </li>
<li className="flex items-center gap-3">
<div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-400 text-white">
<iconify-icon className="text-xs" icon="lucide:check"></iconify-icon>
</div>
              10 jaar volledige garantie
            </li>
</ul>
</div>

<div className="relative w-full z-10 lg:pl-0">

<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-slate-800 transition-transform duration-700 hover:scale-[1.01]">
<img alt="SleepR Hybride Matras Slaapkamer" className="group-hover:opacity-100 transition-opacity duration-500 bg-center opacity-95 w-full h-auto max-h-min object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8129939f-eb75-41e9-b0db-d991c4f22445_1600w.png"/>

<div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent pointer-events-none"></div>
</div>

<div className="absolute -right-4 top-12 z-20 hidden sm:block">
<div className="flex flex-col transition-transform hover:-translate-y-1 duration-300 bg-white/90 max-w-[200px] border-white/40 border rounded-xl pt-3 pr-3 pb-3 pl-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-md gap-x-1.5 gap-y-1.5">
<div className="flex items-center gap-0.5 text-amber-400">
<iconify-icon className="text-[10px] fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-[10px] fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-[10px] fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-[10px] fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-[10px] fill-current" icon="lucide:star"></iconify-icon>
</div>
<p className="text-xs font-semibold text-slate-900 leading-snug">"Mijn rugklachten waren na één nacht verdwenen. Absolute aanrader!"</p>
<div className="flex items-center gap-1.5 mt-0.5">
<div className="h-3.5 w-3.5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
<iconify-icon className="text-[8px]" icon="lucide:check"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-slate-500">Gino de Waus</span>
</div>
</div>
</div>

<div className="absolute -left-4 bottom-8 z-20">
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/80 p-3 shadow-[0_8px_30px_rgb(0,0,0,0.2)] backdrop-blur-md transition-transform hover:-translate-y-1 duration-300">
<div className="flex -space-x-2">
<img alt="Klant" className="h-8 w-8 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;q=80"/>
<img alt="Klant" className="h-8 w-8 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;q=80"/>
<img alt="Klant" className="h-8 w-8 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;q=80"/>
<div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-900 bg-blue-600 text-[9px] font-bold text-white">
                      +2k
                   </div>
</div>
<div className="">
<p className="text-xs font-semibold text-white">2.400+ Slapers</p>
<p className="text-[10px] font-medium text-blue-200/80">Beoordelen ons met 4.9/5</p>
</div>
</div>
</div>

<div className="-translate-x-1/2 -translate-y-1/2 -z-10 bg-blue-500/30 mix-blend-screen w-[120%] h-[120%] rounded-full absolute top-1/2 left-1/2 blur-3xl pointer-events-none"></div>
</div>
</div>

<div className="absolute bottom-0 w-full border-t border-white/10 bg-black/10 backdrop-blur-sm">
<div className="mx-auto flex max-w-7xl items-center justify-center gap-8 py-4 px-4 overflow-x-auto no-scrollbar md:justify-end text-white/70">
<span className="text-xs font-bold uppercase tracking-widest whitespace-nowrap mr-2">Aanbevolen door:</span>
<iconify-icon className="opacity-80 hover:opacity-100 transition-opacity" icon="simple-icons:rtl" width="24"></iconify-icon>
<span className="font-bold text-sm tracking-tight opacity-80">Consumentenbond</span>
<span className="font-serif font-bold text-sm tracking-tight opacity-80">Volkskrant</span>
<span className="font-bold text-sm tracking-tight opacity-80">RADAR</span>
<span className="font-bold text-sm tracking-tight opacity-80">NRC</span>
</div>
</div>
</section>

<section className="bg-white py-12 border-b border-slate-100">
<div className="flex flex-wrap sm:px-6 md:justify-between md:text-left text-center max-w-6xl mr-auto ml-auto pr-4 pl-4 gap-x-12 gap-y-12 items-center justify-center">
<div className="flex items-center gap-5">
<div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-2xl font-black text-blue-700">
            4.9
          </div>
<div>
<div className="flex text-amber-400 text-lg mb-1 justify-center md:justify-start">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-medium text-slate-500">Gebaseerd op <span className="font-bold text-slate-900 underline decoration-blue-200 decoration-2 underline-offset-2">2.400+ reviews</span></p>
</div>
</div>
<div className="h-10 w-px bg-slate-200 hidden md:block"></div>
<div className="max-w-md">
<p className="text-lg font-medium text-slate-700">"Eindelijk een matras dat niet te hard en niet te zacht is. Ik slaap als een roos."</p>
<p className="text-sm font-bold text-blue-600 mt-2">— Sarah V. uit Amsterdam</p>
</div>
</div>
</section>

<section className="pt-24 pb-24" id="probleem">
<div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-16 px-4 sm:px-6 md:grid-cols-2">
<div className="">
<span className="text-blue-600 font-bold tracking-wider text-xs uppercase mb-2 block">Het probleem</span>
<h2 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900">
            Waarom de meeste matrassen falen.
          </h2>
<p className="mb-6 text-lg text-slate-600 font-medium leading-relaxed">
            Een traditioneel traagschuim matras wordt vaak te warm en biedt te weinig tegendruk. Ouderwetse veringmatrassen zijn daarentegen vaak te hard en veroorzaken drukpunten.
          </p>
<p className="text-lg text-slate-600 leading-relaxed">
            Dit resulteert in woelen, draaien en wakker worden met een stijve rug. Je lichaam krijgt niet de kans om volledig te herstellen.
          </p>
</div>
<div className="rounded-3xl bg-slate-50 p-10 border border-slate-100 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full blur-3xl -mr-10 -mt-10"></div>
<h3 className="mb-8 text-xl font-bold text-slate-900 relative z-10">Veelvoorkomende klachten</h3>
<ul className="space-y-6 relative z-10">
<li className="flex items-start gap-4 text-slate-700">
<div className="flex-none rounded-full bg-red-100 p-1 text-red-500">
<iconify-icon className="text-lg block" icon="lucide:x"></iconify-icon>
</div>
<span className="font-medium pt-0.5">Overmatige warmte en transpiratie door slechte ventilatie.</span>
</li>
<li className="flex items-start gap-4 text-slate-700">
<div className="flex-none rounded-full bg-red-100 p-1 text-red-500">
<iconify-icon className="text-lg block" icon="lucide:x"></iconify-icon>
</div>
<span className="font-medium pt-0.5">Pijn in de onderrug door gebrek aan zonering.</span>
</li>
</ul>
</div>
</div>
</section>

<section className="bg-[#f8fafc] py-24 border-y border-slate-200" id="oplossing">
<div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-4 sm:px-6 md:grid-cols-2">
<div className="order-2 md:order-1">
<div className="group flex min-h-[450px] overflow-hidden shadow-blue-900/5 transition-transform hover:scale-[1.02] duration-500 bg-white w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa8f63c0-70d5-4ba5-b1c7-de968506dd12_1600w.png)] bg-cover bg-center rounded-3xl shadow-2xl items-center justify-center">
<div className="relative flex flex-col items-center">

</div>
</div>
</div>
<div className="order-1 md:order-2">
<span className="text-blue-600 font-bold tracking-wider text-xs uppercase mb-2 block">De Oplossing</span>
<h2 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900">
            Het beste van twee werelden.
          </h2>
<p className="mb-10 text-lg font-medium text-slate-600 leading-relaxed">
            De SleepR Hybride combineert de ademende ondersteuning van geharde pocketveren met het drukverlagende comfort van premium HR-koudschuim.
          </p>
<div className="mb-10 space-y-4">

<div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
<div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-blue-600 text-white font-bold">1</div>
<div className="">
<h4 className="font-bold text-slate-900">Tencel™ toplaag</h4>
<p className="text-sm text-slate-500">Ultieme vochtregulatie en zachtheid.</p>
</div>
</div>
<div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
<div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">2</div>
<div className="">
<h4 className="font-bold text-slate-900">Airflow koudschuim</h4>
<p className="text-sm text-slate-500">Drukverlaging zonder warmtestuwing.</p>
</div>
</div>
<div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
<div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">3</div>
<div className="">
<h4 className="font-bold text-slate-900">7-zone pocketvering</h4>
<p className="text-sm text-slate-500">Ergonomische steun voor elk lichaamstype.</p>
</div>
</div>
</div>
<div className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-4 py-2 text-xs font-bold text-slate-600">
<iconify-icon className="text-base" icon="lucide:info"></iconify-icon>
              Totale hoogte: 25 cm. Geschikt voor alle bedbodems.
          </div>
</div>
</div>
</section>

<section className="py-24" id="voordelen">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="mb-20 text-center max-w-3xl mx-auto">
<h2 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
            Ontworpen voor prestaties.
          </h2>
<p className="text-lg text-slate-500 font-medium">
            Elk detail van de SleepR is ontwikkeld om jouw slaapkwaliteit meetbaar te verbeteren.
          </p>
</div>
<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

<div className="group rounded-3xl border border-slate-100 bg-white p-8 transition-all hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5">
<div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
<iconify-icon className="text-2xl" icon="lucide:snowflake"></iconify-icon>
</div>
<h3 className="mb-3 text-xl font-bold text-slate-900">Blijft koel</h3>
<p className="text-slate-600 leading-relaxed">Open celstructuur en pocketveren zorgen voor continue luchtcirculatie, zodat je nooit klam wakker wordt.</p>
</div>

<div className="group rounded-3xl border border-slate-100 bg-white p-8 transition-all hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5">
<div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
<iconify-icon className="text-2xl" icon="lucide:wine"></iconify-icon>
</div>
<h3 className="mb-3 text-xl font-bold text-slate-900">Geen bewegingsoverdracht</h3>
<p className="text-slate-600 leading-relaxed">Als jij beweegt, merkt je partner daar niets van. De veren bewegen onafhankelijk van elkaar.</p>
</div>

<div className="group rounded-3xl border border-slate-100 bg-white p-8 transition-all hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5">
<div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
<iconify-icon className="text-2xl" icon="lucide:activity"></iconify-icon>
</div>
<h3 className="mb-3 text-xl font-bold text-slate-900">Ergonomische uitlijning</h3>
<p className="text-slate-600 leading-relaxed">De 7 zones zorgen ervoor dat je wervelkolom in een neutrale, rechte lijn blijft, ongeacht je positie.</p>
</div>

<div className="group rounded-3xl border border-slate-100 bg-white p-8 transition-all hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5">
<div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
<iconify-icon className="text-2xl" icon="lucide:shield-check"></iconify-icon>
</div>
<h3 className="mb-3 text-xl font-bold text-slate-900">Hypoallergeen</h3>
<p className="text-slate-600 leading-relaxed">De hoes is wasbaar en behandeld tegen huisstofmijt. Ideaal voor mensen met allergieën.</p>
</div>

<div className="group rounded-3xl border border-slate-100 bg-white p-8 transition-all hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5">
<div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
<iconify-icon className="text-2xl" icon="lucide:refresh-cw"></iconify-icon>
</div>
<h3 className="mb-3 text-xl font-bold text-slate-900">Duurzaam</h3>
<p className="text-slate-600 leading-relaxed">Gemaakt van hoogwaardige materialen die hun vorm behouden. Getest voor minimaal 10 jaar gebruik.</p>
</div>

<div className="group rounded-3xl border border-slate-100 bg-white p-8 transition-all hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5">
<div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
<iconify-icon className="text-2xl" icon="lucide:package-check"></iconify-icon>
</div>
<h3 className="mb-3 text-xl font-bold text-slate-900">Gemakkelijk</h3>
<p className="text-slate-600 leading-relaxed">Compact verpakt en gratis thuisbezorgd. Binnen enkele minuten klaar voor gebruik.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#1a47b8] text-white py-24" id="slapers">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="mb-16 text-center">
<h2 className="mb-6 text-4xl font-extrabold tracking-tight">
            Voor elke slaaphouding.
          </h2>
<p className="mx-auto max-w-2xl text-lg text-blue-100 font-medium">
            De adaptieve toplaag vormt zich naar jouw contouren, terwijl de kern tegendruk geeft waar nodig.
          </p>
</div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
<div className="rounded-3xl bg-white/10 p-10 text-center border border-white/10 backdrop-blur-lg hover:bg-white/20 transition-colors">
<h3 className="mb-4 text-xl font-bold text-white">Zijslapers</h3>
<p className="text-blue-100 leading-relaxed">De zachtere schouderzone laat je schouder iets wegzakken, waardoor de druk wordt weggenomen en je ruggengraat recht blijft.</p>
</div>
<div className="rounded-3xl bg-white/10 p-10 text-center border border-white/10 backdrop-blur-lg hover:bg-white/20 transition-colors">
<h3 className="mb-4 text-xl font-bold text-white">Rugslapers</h3>
<p className="text-blue-100 leading-relaxed">De stevige lendezone voorkomt dat je heupen te diep wegzakken, wat essentieel is om rugklachten te voorkomen.</p>
</div>
<div className="rounded-3xl bg-white/10 p-10 text-center border border-white/10 backdrop-blur-lg hover:bg-white/20 transition-colors">
<h3 className="mb-4 text-xl font-bold text-white">Buikslapers</h3>
<p className="text-blue-100 leading-relaxed">De medium-stevige supportlaag zorgt ervoor dat je rug niet hol trekt, voor een ontspannen nek en onderrug.</p>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24" id="maten">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="mb-16 md:w-2/3">
<h2 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
            Kies jouw formaat.
          </h2>
<p className="text-lg text-slate-500 font-medium">
            Eerlijke prijzen zonder tussenpersonen. Inclusief bezorging en 10 jaar garantie.
          </p>
</div>
<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

<div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 transition-transform hover:-translate-y-1">
<div className="flex items-center justify-between mb-2">
<p className="text-xs font-bold tracking-widest text-slate-400 uppercase">Eenpersoons</p>
</div>
<h3 className="mb-4 text-2xl font-bold text-slate-900">90 × 200</h3>
<div className="mb-6 flex items-baseline gap-2">
<p className="text-4xl font-black tracking-tight text-slate-900">€450</p>
</div>
<ul className="mb-8 flex-1 space-y-4 text-sm font-medium text-slate-600">
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-600 text-lg" icon="lucide:check"></iconify-icon> Ideaal voor studenten
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-600 text-lg" icon="lucide:check"></iconify-icon> Gratis verzending
              </li>
</ul>
<a className="inline-flex w-full items-center justify-center rounded-full border-2 border-slate-100 bg-white px-6 py-4 text-sm font-bold text-slate-900 transition-all hover:border-slate-300 hover:bg-slate-50" href="#proefslapen">
              Selecteren
            </a>
</div>

<div className="relative flex flex-col rounded-3xl border-2 border-blue-600 bg-white p-8 shadow-2xl shadow-blue-900/10 transform scale-105 z-10">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1.5 text-[11px] font-bold tracking-wider text-white uppercase shadow-sm">Meest gekozen</div>
<p className="mb-2 text-xs font-bold tracking-widest text-blue-600 uppercase">Tweepersoons</p>
<h3 className="mb-4 text-2xl font-bold text-slate-900">160 × 200</h3>
<div className="mb-6 flex items-baseline gap-2">
<span className="text-lg text-slate-400 line-through decoration-slate-400 decoration-2">€950</span>
<p className="text-5xl font-black tracking-tight text-slate-900">€750</p>
</div>
<ul className="mb-10 flex-1 space-y-4 text-sm font-medium text-slate-700">
<li className="flex items-center gap-3">
<div className="rounded-full bg-blue-100 p-1"><iconify-icon className="text-blue-600 text-xs block" icon="lucide:check"></iconify-icon></div>
                Populairste maat
              </li>
<li className="flex items-center gap-3">
<div className="rounded-full bg-blue-100 p-1"><iconify-icon className="text-blue-600 text-xs block" icon="lucide:check"></iconify-icon></div>
                Gratis verzending
              </li>
</ul>
<a className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-4 text-sm font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30" href="#proefslapen">
              Toevoegen aan winkelmand
            </a>
</div>

<div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 transition-transform hover:-translate-y-1">
<div className="flex items-center justify-between mb-2">
<p className="text-xs font-bold tracking-widest text-slate-400 uppercase">Royal</p>
</div>
<h3 className="mb-4 text-2xl font-bold text-slate-900">180 × 200</h3>
<div className="mb-6 flex items-baseline gap-2">
<p className="text-4xl font-black tracking-tight text-slate-900">€850</p>
</div>
<ul className="mb-8 flex-1 space-y-4 text-sm font-medium text-slate-600">
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-600 text-lg" icon="lucide:check"></iconify-icon> Extra ruimte
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-600 text-lg" icon="lucide:check"></iconify-icon> Gratis verzending
              </li>
</ul>
<a className="inline-flex w-full items-center justify-center rounded-full border-2 border-slate-100 bg-white px-6 py-4 text-sm font-bold text-slate-900 transition-all hover:border-slate-300 hover:bg-slate-50" href="#proefslapen">
              Selecteren
            </a>
</div>
</div>
<div className="mt-12 text-center flex items-center justify-center gap-2">
<iconify-icon className="grayscale opacity-50" icon="logos:klarna" width="40"></iconify-icon>
<p className="text-sm text-slate-400 font-medium">Betaal in 3 termijnen. 0% rente.</p>
</div>
</div>
</section>

<section className="border-y bg-slate-50 border-slate-200 pt-24 pb-24" id="proefslapen">
<div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 md:grid-cols-2">
<div className="">
<h2 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900">
            Slaap er 100 nachten over.
          </h2>
<p className="mb-10 text-lg font-medium text-slate-600">
            Je lichaam heeft tijd nodig om te wennen aan een nieuw matras. Daarom geven we je 100 nachten de tijd om de SleepR thuis uit te proberen.
          </p>
<ol className="mb-10 space-y-8 relative before:absolute before:left-4 before:top-4 before:h-[calc(100%-2rem)] before:w-0.5 before:bg-slate-200">
<li className="flex items-start gap-6 relative z-10">
<span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-600/20">1</span>
<span className="pt-1.5 text-slate-700 font-medium">Bestel je SleepR online. We bezorgen hem gratis tot in je slaapkamer.</span>
</li>
<li className="flex items-start gap-6 relative z-10">
<span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white border-2 border-blue-600 text-sm font-bold text-blue-600">2</span>
<span className="pt-1.5 text-slate-700 font-medium">Slaap minimaal 30 nachten op het matras om echt te wennen.</span>
</li>
<li className="flex items-start gap-6 relative z-10">
<span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white border-2 border-slate-200 text-sm font-bold text-slate-400">3</span>
<span className="pt-1.5 text-slate-700 font-medium">Niet tevreden? We halen hem gratis op en je krijgt je geld terug.</span>
</li>
</ol>
<div className="flex flex-wrap gap-4">
<a className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-base font-bold text-white transition-all hover:bg-slate-800" href="#maten">
              Kies je matras
            </a>
</div>
</div>
<div className="group relative h-full min-h-[500px] w-full overflow-hidden rounded-[2rem] bg-slate-900 shadow-[0_20px_40px_rgba(26,71,184,0.15)] ring-1 ring-white/10 transition-all hover:shadow-[0_30px_60px_rgba(26,71,184,0.25)]">

<img alt="SleepR Proefslapen Garantie" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-95" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

<div className="flex flex-col bg-center h-full pt-10 pr-10 pb-10 pl-10 relative justify-end">

<div className="absolute top-8 right-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-md transition-transform group-hover:rotate-12">
<iconify-icon className="" icon="lucide:shield-check" width="24"></iconify-icon>
</div>

<h3 className="mb-3 text-3xl font-semibold tracking-tight text-white">Geen risico garantie</h3>
<p className="mb-8 max-w-sm text-base font-medium leading-relaxed text-slate-200/90">
      95% van onze klanten houdt hun SleepR. Voor de overige 5% maken we retourneren net zo makkelijk als bestellen.
    </p>

<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20">
<iconify-icon className="text-blue-300" icon="lucide:ruler" width="14"></iconify-icon>
        25 cm dik
      </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20">
<iconify-icon className="text-blue-300" icon="lucide:layers" width="14"></iconify-icon>
        Hybride
      </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20">
<iconify-icon className="text-blue-300" icon="lucide:calendar-check" width="14"></iconify-icon>
        100 dagen
      </span>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24" id="faq">
<div className="mx-auto max-w-4xl px-4 sm:px-6">
<div className="mb-16 text-center">
<h2 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">Veelgestelde vragen</h2>
<p className="text-lg text-slate-500 font-medium">Alles wat je moet weten over jouw nieuwe matras.</p>
</div>
<div className="grid gap-4">
<div className="group rounded-2xl border border-slate-200 bg-white p-8 hover:border-blue-200 transition-colors">
<h3 className="mb-3 text-lg font-bold text-slate-900 flex items-center justify-between">
                Hoe lang duurt de bezorging?
                <iconify-icon className="text-slate-400 group-hover:text-blue-600 transition-colors" icon="lucide:chevron-down"></iconify-icon>
</h3>
<p className="text-slate-600 leading-relaxed">Als je voor 22:00 bestelt, heb je het matras meestal de volgende werkdag al in huis. We sturen een track &amp; trace code zodra het pakket ons magazijn verlaat.</p>
</div>
<div className="group rounded-2xl border border-slate-200 bg-white p-8 hover:border-blue-200 transition-colors">
<h3 className="mb-3 text-lg font-bold text-slate-900 flex items-center justify-between">
                Moet ik het matras keren?
                <iconify-icon className="text-slate-400 group-hover:text-blue-600 transition-colors" icon="lucide:chevron-down"></iconify-icon>
</h3>
<p className="text-slate-600 leading-relaxed">Nee, de SleepR Hybride heeft een specifieke opbouw. De witte zijde met de Tencel-hoes moet altijd boven liggen. Je mag het matras wel af en toe van hoofd- naar voeteneind draaien.</p>
</div>
<div className="group rounded-2xl border border-slate-200 bg-white p-8 hover:border-blue-200 transition-colors">
<h3 className="mb-3 text-lg font-bold text-slate-900 flex items-center justify-between">
                Op welke bedbodems past het?
                <iconify-icon className="text-slate-400 group-hover:text-blue-600 transition-colors" icon="lucide:chevron-down"></iconify-icon>
</h3>
<p className="text-slate-600 leading-relaxed">De SleepR werkt perfect op lattenbodems (met max 5cm tussenruimte), boxsprings, spiraalbodems en zelfs direct op een vlakke vloer.</p>
</div>
<div className="group rounded-2xl border border-slate-200 bg-white p-8 hover:border-blue-200 transition-colors">
<h3 className="mb-3 text-lg font-bold text-slate-900 flex items-center justify-between">
                Hoe werkt de 100 dagen proef?
                <iconify-icon className="text-slate-400 group-hover:text-blue-600 transition-colors" icon="lucide:chevron-down"></iconify-icon>
</h3>
<p className="text-slate-600 leading-relaxed">Vanaf de dag van levering gaat de proefperiode in. Bevalt het niet? Neem contact op met de klantenservice, en we halen het matras kosteloos weer op.</p>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24" id="bestel">
<div className="mx-auto max-w-5xl px-4 sm:px-6">
<div className="relative overflow-hidden rounded-[2.5rem] bg-[#1a47b8] px-6 py-20 text-center sm:px-12">

<div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-blue-400 opacity-20 blur-3xl"></div>
<div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-indigo-400 opacity-20 blur-3xl"></div>
<h2 className="relative z-10 mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Klaar voor je beste nachtrust?</h2>
<p className="relative z-10 mb-10 text-xl text-blue-100 font-medium max-w-2xl mx-auto">Sluit je aan bij duizenden uitgeruste Nederlanders. Vandaag besteld, morgen slapen.</p>
<div className="relative z-10 flex flex-wrap justify-center gap-4">
<a className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-blue-900 shadow-xl shadow-blue-900/20 transition-all hover:-translate-y-1 hover:bg-blue-50" href="#maten">
              Bekijk alle maten
            </a>
<a className="inline-flex items-center justify-center rounded-full border border-white/30 bg-blue-800/50 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-blue-800" href="#proefslapen">
              Meer over proefslapen
            </a>
</div>
<p className="relative z-10 mt-10 text-xs font-bold uppercase tracking-widest text-blue-200/60">10 jaar garantie • Gratis retourneren • Made in Holland</p>
</div>
</div>
</section>
</main>
<footer className="bg-white py-12 border-t border-slate-100">
<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 sm:flex-row sm:px-6">
<div className="flex items-center gap-2">
<span className="text-xl font-extrabold tracking-tight text-slate-900 lowercase">SleepR</span>
<span className="text-slate-300">|</span>
<p className="text-sm text-slate-500">© 2024</p>
</div>
<div className="flex gap-8 text-sm font-bold text-slate-600">
<a className="hover:text-blue-600 transition-colors" href="#faq">FAQ</a>
<a className="hover:text-blue-600 transition-colors" href="#maten">Maten</a>
<a className="hover:text-blue-600 transition-colors" href="#proefslapen">Proefslapen</a>
</div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
