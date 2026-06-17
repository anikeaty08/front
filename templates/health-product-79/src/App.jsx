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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-6">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-2 text-lg font-medium tracking-tighter text-slate-900" href="#">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-400 text-white">
<span className="text-xs font-semibold">D</span>
</div>
                    DE GYLDNE DRÅBER
                </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#produktet">Produktet</a>
<a className="hover:text-slate-900 transition-colors" href="#hvordan">Virkning</a>
<a className="hover:text-slate-900 transition-colors" href="#pakker">Opstartspakker</a>
<a className="hover:text-slate-900 transition-colors" href="#faq">FAQ</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-slate-800 hover:ring-2 hover:ring-slate-200 hover:ring-offset-1" href="#kob">
                        Bestil nu
                    </a>

<button className="md:hidden text-slate-500">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">

<div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[500px] w-[800px] rounded-full bg-amber-50 blur-[100px] opacity-60"></div>
<div className="mx-auto max-w-7xl px-6 text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 mb-8 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-amber-500"></span>
                Nyhed: BioMS™ Teknologi
            </div>
<h1 className="mx-auto max-w-4xl text-5xl font-medium tracking-tight text-slate-900 md:text-7xl lg:text-7xl">
                99,9% optagelig <span className="text-amber-500/90">gurkemeje</span> <br className="hidden md:block"/>
                for naturlig balance.
            </h1>
<p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500 leading-relaxed font-light">
                Oplev kraften fra Curcumin med banebrydende nanoteknologi. 
                De Gyldne Dråber sikrer, at din krop optager det maksimale potentiale.
            </p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-slate-900 px-8 text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-slate-200" href="#kob">
                    Bestil din flaske
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50" href="#video">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                    Se hvordan det virker
                </a>
</div>

<div className="mt-16 flex flex-col items-center gap-4 border-t border-slate-100 pt-8">
<div className="flex -space-x-3">
<img alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-white grayscale opacity-80" src="https://i.pravatar.cc/100?img=5"/>
<img alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-white grayscale opacity-80" src="https://i.pravatar.cc/100?img=9"/>
<img alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-white grayscale opacity-80" src="https://i.pravatar.cc/100?img=12"/>
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 ring-2 ring-white text-xs font-medium text-slate-500">+2k</div>
</div>
<p className="text-sm text-slate-400">Anbefalet af tusindvis af tilfredse brugere</p>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50" id="produktet">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 md:text-center">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">Renhed i hver dråbe</h2>
<p className="mt-4 text-slate-500 max-w-2xl mx-auto">En unik sammensætning designet til maksimal effekt uden unødvendige fyldstoffer.</p>
</div>
<div className="grid gap-6 md:grid-cols-3">

<div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm border border-slate-100 transition-all hover:shadow-md">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-500">
<iconify-icon icon="solar:leaf-linear" width="28"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-medium text-slate-900">Curcumin &amp; Gurkemeje</h3>
<p className="text-sm leading-relaxed text-slate-500">
                        Den aktive ingrediens, kendt for sine antiinflammatoriske egenskaber. BioMS teknologien gør den 185x mere optagelig end standard pulver.
                    </p>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm border border-slate-100 transition-all hover:shadow-md">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-500">
<iconify-icon icon="solar:sun-2-linear" width="28"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-medium text-slate-900">Vitamin D3</h3>
<p className="text-sm leading-relaxed text-slate-500">
                        Støtter immunsystemet og knogler. Hver dosis giver dig et optimalt tilskud, der arbejder i synergi med curcuminen.
                    </p>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm border border-slate-100 transition-all hover:shadow-md">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-500">
<iconify-icon icon="solar:water-drop-linear" width="28"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-medium text-slate-900">Nanofy® BioMS</h3>
<p className="text-sm leading-relaxed text-slate-500">
                        Patenteret tysk teknologi. Omdanner fedtopløselige stoffer til vandopløselige miceller, der optages direkte i blodbanen.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24" id="hvordan">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-12 lg:grid-cols-2 lg:items-center">

<div>
<div className="inline-flex items-center gap-2 rounded-lg bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 mb-6">
<iconify-icon icon="solar:test-tube-minimalistic-linear"></iconify-icon>
                        Videnskaben bag
                    </div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl mb-6">
                        Hvorfor BioMS ændrer alt
                    </h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 text-amber-500">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900">Problemet med almindelig gurkemeje</h4>
<p className="mt-2 text-sm text-slate-500 leading-relaxed">
                                    Normal gurkemeje er fedtopløseligt og optages dårligt af kroppen. Op til 90% udskilles igen uden effekt.
                                </p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 text-amber-500">
<iconify-icon icon="solar:atom-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900">Løsningen: Micellisering</h4>
<p className="mt-2 text-sm text-slate-500 leading-relaxed">
                                    BioMS indkapsler curcumin i mikroskopiske kugler (miceller), der gør det vandopløseligt. Det sikrer lynhurtig passage gennem cellemembraner.
                                </p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 text-amber-500">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900">Resultatet</h4>
<p className="mt-2 text-sm text-slate-500 leading-relaxed">
                                    Du mærker effekten hurtigere og kraftigere. 10 dråber svarer til 8-10 kg gurkemejerod i optagelighed.
                                </p>
</div>
</div>
</div>
</div>

<div className="relative h-[500px] w-full overflow-hidden rounded-3xl bg-slate-100">

<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-amber-100 to-white">
<div className="relative w-64 h-64">

<div className="absolute inset-0 rounded-full border border-amber-200 opacity-20 animate-ping"></div>
<div className="absolute inset-4 rounded-full border border-amber-300 opacity-40"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="h-32 w-32 rounded-full bg-amber-400 blur-xl opacity-30"></div>
<img alt="BioMS visualisering" className="relative z-10 opacity-0" src="https://placehold.co/400x600/png?text=BioMS+Visual"/>
<div className="relative z-10 text-center">
<span className="block text-6xl text-amber-500 opacity-80 mix-blend-multiply">
<iconify-icon icon="solar:drop-linear"></iconify-icon>
</span>
<p className="mt-4 text-xs font-medium uppercase tracking-widest text-amber-800/50">BioMS Teknologi</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="kob">
<div className="mx-auto max-w-7xl px-6">
<div className="mx-auto max-w-3xl text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">Investér i dit helbred</h2>
<p className="mt-4 text-slate-500">Vælg den løsning der passer dig. Fra enkeltkøb til iværksætterpakker.</p>
</div>

<div className="grid gap-8 md:grid-cols-3 lg:gap-10">

<div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8">
<div className="mb-4">
<h3 className="text-lg font-medium text-slate-900">Enkelt flaske</h3>
<p className="text-sm text-slate-500">Til dig der vil prøve det af</p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-medium tracking-tight text-slate-900">599,-</span>
<span className="text-sm text-slate-500">/stk</span>
</div>
<a className="mt-auto block w-full rounded-xl border border-slate-200 bg-white py-3 text-center text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50 hover:border-slate-300" href="#">
                        Vælg 1 flaske
                    </a>
<ul className="mt-8 space-y-4 text-sm text-slate-600">
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Ca. 1 måneds forbrug</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Højeste optagelighed</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Dag-til-dag levering</span>
</li>
</ul>
</div>

<div className="relative flex flex-col rounded-3xl border-2 border-amber-400 bg-slate-900 p-8 shadow-2xl shadow-amber-900/10">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-white tracking-wide">
                        MEST POPULÆR
                    </div>
<div className="mb-4">
<h3 className="text-lg font-medium text-white">3-Pak</h3>
<p className="text-sm text-slate-400">Til den stabile rutine</p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-medium tracking-tight text-white">1.499,-</span>
<span className="text-sm text-slate-400">/pakke</span>
</div>
<a className="mt-auto block w-full rounded-xl bg-amber-400 py-3 text-center text-sm font-medium text-slate-900 transition-transform hover:scale-[1.02] active:scale-[0.98]" href="#">
                        Bestil 3 flasker
                    </a>
<p className="mt-3 text-center text-xs text-slate-400">Du sparer 298,-</p>
<ul className="mt-8 space-y-4 text-sm text-slate-300">
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-400 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>3 måneders fuldt forbrug</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-400 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Fri fragt inkluderet</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-400 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Adgang til kundeklub</span>
</li>
</ul>
</div>

<div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8" id="pakker">
<div className="mb-4">
<h3 className="text-lg font-medium text-slate-900">Kit 250</h3>
<p className="text-sm text-slate-500">Til familier eller videresalg</p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-medium tracking-tight text-slate-900">2.200,-</span>
<span className="text-sm text-slate-500">/sæt</span>
</div>
<a className="mt-auto block w-full rounded-xl border border-slate-200 bg-white py-3 text-center text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50 hover:border-slate-300" href="#">
                        Vælg Opstartspakke
                    </a>
<ul className="mt-8 space-y-4 text-sm text-slate-600">
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Indeholder 5 flasker</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Entrepreneur Status</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Stor stykpris besparelse</span>
</li>
</ul>
</div>
</div>
<div className="mt-12 flex justify-center gap-6 opacity-60 grayscale transition-all hover:grayscale-0">

<div className="flex items-center gap-2 text-xs font-medium text-slate-500">
<iconify-icon icon="solar:card-linear" width="20"></iconify-icon> Sikker betaling
                 </div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-500">
<iconify-icon icon="solar:box-linear" width="20"></iconify-icon> Levering 2-4 dage
                 </div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-500">
<iconify-icon icon="solar:verified-check-linear" width="20"></iconify-icon> Officiel Forhandler
                 </div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="faq">
<div className="mx-auto max-w-3xl px-6">
<h2 className="mb-12 text-center text-3xl font-medium tracking-tight text-slate-900">Ofte stillede spørgsmål</h2>
<div className="space-y-4">

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<details className="group">
<summary className="flex cursor-pointer list-none items-center justify-between font-medium text-slate-900">
<span>Hvordan indtager jeg dråberne?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="mt-3 text-sm leading-relaxed text-slate-500 group-open:animate-fadeIn">
                            Du kan dryppe dem direkte i munden, eller blande dem i et glas vand, te eller kaffe. De har en neutral smag og opløses øjeblikkeligt takket være BioMS-teknologien.
                        </p>
</details>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<details className="group">
<summary className="flex cursor-pointer list-none items-center justify-between font-medium text-slate-900">
<span>Hvad er forskellen på Nanofy og Curcumin Plus?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="mt-3 text-sm leading-relaxed text-slate-500 group-open:animate-fadeIn">
                            Nanofy indeholder ren curcumin og D3-vitamin. Curcumin Plus indeholder desuden ingefær og C-vitamin for ekstra støtte til fordøjelsen og immunsystemet.
                        </p>
</details>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<details className="group">
<summary className="flex cursor-pointer list-none items-center justify-between font-medium text-slate-900">
<span>Kan jeg tage det med anden medicin?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="mt-3 text-sm leading-relaxed text-slate-500 group-open:animate-fadeIn">
                            Som udgangspunkt ja, men da curcumin er blodfortyndende, bør du altid rådføre dig med din læge, hvis du tager blodfortyndende medicin.
                        </p>
</details>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<details className="group">
<summary className="flex cursor-pointer list-none items-center justify-between font-medium text-slate-900">
<span>Hvor mange dråber om dagen?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="mt-3 text-sm leading-relaxed text-slate-500 group-open:animate-fadeIn">
                            Vi anbefaler 10 dråber dagligt som vedligeholdelse. Ved særlige behov kan dosis øges i perioder.
                        </p>
</details>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-12 border-t border-slate-100">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-12 lg:grid-cols-2">

<div className="space-y-6">
<a className="flex items-center gap-2 text-lg font-medium tracking-tighter text-slate-900" href="#">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-400 text-white">
<span className="text-xs font-semibold">D</span>
</div>
                        DE GYLDNE DRÅBER
                    </a>
<p className="max-w-md text-sm leading-relaxed text-slate-500">
                        Vi er dedikerede til at bringe den nyeste sundhedsteknologi direkte hjem til dig. 
                        Drevet af passion for naturlig velvære.
                    </p>
<div className="flex gap-4 pt-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="24"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="24"></iconify-icon>
</a>
</div>
</div>

<div className="rounded-3xl bg-slate-50 p-8 border border-slate-100">
<h3 className="mb-6 text-lg font-medium text-slate-900">Har du spørgsmål?</h3>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500" htmlFor="name">Navn</label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400" id="name" placeholder="Dit navn" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500" htmlFor="email">Email</label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400" id="email" placeholder="din@email.dk" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500" htmlFor="msg">Besked</label>
<textarea className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400" id="msg" placeholder="Hvad kan vi hjælpe med?" rows="3"></textarea>
</div>
<button className="w-full rounded-lg bg-slate-900 py-2.5 text-sm font-medium text-white hover:bg-slate-800" type="button">
                            Send besked
                        </button>
</form>
</div>
</div>
<div className="mt-16 border-t border-slate-100 pt-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 De Gyldne Dråber. Alle rettigheder forbeholdes.</p>
<div className="flex gap-6 text-xs text-slate-400">
<a className="hover:text-slate-900" href="#">Handelsbetingelser</a>
<a className="hover:text-slate-900" href="#">Privatlivspolitik</a>
<a className="hover:text-slate-900" href="#">Cookiepolitik</a>
</div>
</div>
</div>
</div>
</footer>

<style>
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-4px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>

    </>
  );
}
