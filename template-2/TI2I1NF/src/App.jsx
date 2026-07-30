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



      document.addEventListener("DOMContentLoaded", () => {
        lucide.createIcons();
      });
    
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
      

<div className="absolute inset-x-0 top-0 h-[560px] -z-10 bg-gradient-to-b from-slate-50 via-white to-white"></div>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-3" href="#">
<div className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--brand-yellow)] shadow-sm">
<span className="text-xl font-semibold text-slate-900">U</span>
</div>
<span className="text-lg font-medium tracking-tight text-slate-900">Utender.eu</span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
<a className="hover:text-slate-900 transition-colors" href="#tenderet">Tenderët</a>
<a className="hover:text-slate-900 transition-colors" href="#paketat">Paket</a>
<a className="hover:text-slate-900 transition-colors" href="#kontakt">Kontakto</a>
<a className="hover:text-slate-900 transition-colors" href="#abonohu">Abonohu</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
<svg className="lucide lucide-log-in mr-2 h-4 w-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
              Kyçu
            </button>
<a className="inline-flex items-center rounded-full bg-[var(--brand-yellow)] px-4 py-2 text-sm font-medium text-slate-900 hover:brightness-95 shadow-sm transition" href="#abonohu">
<svg className="lucide lucide-star mr-2 h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
              Abonohu
            </a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-10">
<div className="mx-auto max-w-3xl text-center">
<h1 className="text-4xl sm:text-5xl tracking-tight font-semibold text-slate-900">
            Njoftimet më të shpejta për tenderët në
            <span className="relative inline-block">
<span className="relative z-10 text-slate-900">Kosovë</span>
<span className="absolute -inset-1.5 -z-0 rounded-md bg-[var(--brand-yellow)]/60"></span>
</span>
</h1>
<p className="mt-4 text-base sm:text-lg text-slate-600">
            Lorem ipsum dolor sit amet consectetur. Nam fames nullam aliquet vivamus integer massa amet vel.
          </p>
</div>

<div className="mx-auto mt-10 max-w-6xl" id="tenderet">
<div className="rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/40 overflow-hidden">

<div className="relative h-16 bg-[var(--brand-yellow)]">
<div className="absolute inset-0 flex items-center justify-center">
<div className="grid h-9 w-9 place-items-center rounded-lg bg-white/90 shadow">
<span className="text-lg font-semibold text-slate-900">U</span>
</div>
</div>
</div>

<div className="border-b border-slate-200 bg-white px-4 sm:px-6 py-3">
<div className="relative">
<svg className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full rounded-lg border border-slate-200 bg-white pl-10 pr-3 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-300" placeholder="Kërko njoftime sipas emrit ose ID" type="text" />
</div>
</div>

<div className="relative overflow-x-auto">
<table className="w-full text-left">
<thead className="text-xs uppercase text-slate-500 bg-slate-50">
<tr>
<th className="px-4 sm:px-6 py-3 whitespace-nowrap">Autoriteti Kontraktues</th>
<th className="px-4 sm:px-6 py-3">Titulli i Tenderit</th>
<th className="px-4 sm:px-6 py-3 whitespace-nowrap">Data e Publikimit</th>
<th className="px-4 sm:px-6 py-3 whitespace-nowrap">Data e Skadimit</th>
<th className="px-4 sm:px-6 py-3 whitespace-nowrap">Nënkategoria</th>
<th className="px-4 sm:px-6 py-3 whitespace-nowrap">Shteti</th>
<th className="px-4 sm:px-6 py-3 whitespace-nowrap">Procedura</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 text-sm">

<tr className="hover:bg-slate-50">
<td className="px-4 sm:px-6 py-4 whitespace-nowrap text-slate-800">KK Rahovec</td>
<td className="px-4 sm:px-6 py-4">
                      MENAXHIMI, MBUSHJA, GRUMBULLIMI, TRANSPORTIMI DHE DEPOZITIMI I MBETURINAVE NË KOMUNËN E RAHOVECIT
                    </td>
<td className="px-4 sm:px-6 py-4 whitespace-nowrap">05.06.2024</td>
<td className="px-4 sm:px-6 py-4 whitespace-nowrap">28.06.2024</td>
<td className="px-4 sm:px-6 py-4 whitespace-nowrap">Menaxhimi i Mbeturinave</td>
<td className="px-4 sm:px-6 py-4 whitespace-nowrap">Kosovë</td>
<td className="px-4 sm:px-6 py-4 whitespace-nowrap">
<a className="inline-flex items-center gap-1 text-[var(--brand-mid)] hover:text-slate-900" href="#">
                        Njoftim publik
                        <svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-4 sm:px-6 py-4 whitespace-nowrap text-slate-800">Spitali i Prishtinës</td>
<td className="px-4 sm:px-6 py-4">Furnizim me pajisje laboratorike dhe reagens për QKUK</td>
<td className="px-4 sm:px-6 py-4 whitespace-nowrap">03.06.2024</td>
<td className="px-4 sm:px-6 py-4 whitespace-nowrap">20.06.2024</td>
<td className="px-4 sm:px-6 py-4 whitespace-nowrap">Mjekësi</td>
<td className="px-4 sm:px-6 py-4 whitespace-nowrap">Kosovë</td>
<td className="px-4 sm:px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700">Tender i hapur</span>
</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-4 sm:px-6 py-4 whitespace-nowrap text-slate-800">KK Vushtrri</td>
<td className="px-4 sm:px-6 py-4">Ndërtimi i rrugës lokale në fshatin Zhilivodë</td>
<td className="px-4 sm:px-6 py-4 whitespace-nowrap">02.06.2024</td>
<td className="px-4 sm:px-6 py-4 whitespace-nowrap">19.06.2024</td>
<td className="px-4 sm:px-6 py-4 whitespace-nowrap">Ndërtimtari</td>
<td className="px-4 sm:px-6 py-4 whitespace-nowrap">Kosovë</td>
<td className="px-4 sm:px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700">Njoftim publik</span>
</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-4 sm:px-6 py-4 whitespace-nowrap text-slate-800">Policia e Kosovës</td>
<td className="px-4 sm:px-6 py-4">Furnizim me uniforma dhe pajisje mbrojtëse</td>
<td className="px-4 sm:px-6 py-4 whitespace-nowrap">01.06.2024</td>
<td className="px-4 sm:px-6 py-4 whitespace-nowrap">17.06.2024</td>
<td className="px-4 sm:px-6 py-4 whitespace-nowrap">Siguri</td>
<td className="px-4 sm:px-6 py-4 whitespace-nowrap">Kosovë</td>
<td className="px-4 sm:px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700">Procedurë e hapur</span>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-4 sm:px-6 py-5">
<div className="flex justify-center">
<button className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-yellow)] px-6 py-2.5 text-sm font-medium text-slate-900 shadow-sm hover:brightness-95 transition">
                  Shiko më shumë
                  <svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center gap-x-8 gap-y-6 opacity-80">
<div className="flex items-center justify-center">
<div className="h-10 w-28 rounded-md bg-slate-100"></div>
</div>
<div className="flex items-center justify-center">
<div className="h-10 w-28 rounded-md bg-slate-100"></div>
</div>
<div className="flex items-center justify-center">
<div className="h-10 w-28 rounded-md bg-slate-100"></div>
</div>
<div className="flex items-center justify-center">
<div className="h-10 w-28 rounded-md bg-slate-100"></div>
</div>
<div className="flex items-center justify-center">
<div className="h-10 w-28 rounded-md bg-slate-100"></div>
</div>
<div className="flex items-center justify-center">
<div className="h-10 w-28 rounded-md bg-slate-100"></div>
</div>
</div>
</div>
</section>

<section className="py-6">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">

<div className="rounded-2xl border border-slate-200 bg-white shadow-lg p-6">
<h3 className="text-2xl tracking-tight font-semibold text-slate-900">Çfarë ofron Utender.eu?</h3>
<p className="mt-2 text-slate-600 text-sm">
            Utender.eu informon kompanitë dhe individët për tenderët në Kosovë. Publikojmë të gjithë tenderët zyrtarë në kohë reale, çdo ditë.
          </p>
<ul className="mt-4 space-y-2 text-sm">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle-2 h-5 w-5 text-slate-900" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Informim i shpejtë dhe i saktë për tenderët</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-inbox h-5 w-5 text-slate-900" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
<span>Dërgimi i të gjithë tenderëve aktivë në emailin tuaj</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-tag h-5 w-5 text-slate-900" data-lucide="tag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
<span>Klasifikim sipas profilit tuaj</span>
</li>
</ul>
<div className="mt-5">
<img alt="Pamje e produktit" className="w-full rounded-xl border border-slate-200 object-cover" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop" />
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-white shadow-lg p-6">
<h3 className="text-2xl tracking-tight font-semibold text-slate-900">Si shkon procedura e regjistrimit?</h3>
<p className="mt-2 text-slate-600 text-sm">
            Klikoni butonin Abonohu dhe plotësoni të dhënat bazike. Pasi konfirmoni emailin, filloni të merrni njoftimet.
          </p>
<div className="mt-5 grid gap-4">
<div className="rounded-xl border border-slate-200 p-4">
<div className="flex items-center gap-2 text-sm text-slate-700">
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                Verifikoni adresën tuaj të emailit
              </div>
</div>
<div className="rounded-xl border border-slate-200 p-4">
<div className="flex items-center gap-2 text-sm text-slate-700">
<svg className="lucide lucide-filter h-4 w-4" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
                Zgjidhni kategoritë dhe rajonet e interesit
              </div>
</div>
<div className="rounded-xl border border-slate-200 p-4">
<div className="flex items-center gap-2 text-sm text-slate-700">
<svg className="lucide lucide-bell h-4 w-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
                Filloni të merrni njoftime në email
              </div>
</div>
</div>
<div className="mt-5">
<img alt="Forma e regjistrimit" className="w-full rounded-xl border border-slate-200 object-cover" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1400&auto=format&fit=crop" />
</div>
</div>
</div>
</section>

<section className="py-8">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-slate-200 bg-white shadow-lg p-6">
<div className="grid lg:grid-cols-2 gap-6">
<div>
<h3 className="text-2xl tracking-tight font-semibold text-slate-900">Çfarë tenderë publikohen në Utender.eu</h3>
<p className="mt-2 text-slate-600 text-sm">
                Ne mbulojmë të gjitha kategoritë dhe rajonet në gjithë vendin, së bashku me dokumentacionin zyrtar të publikuar.
              </p>
<ul className="mt-4 space-y-2 text-sm">
<li className="flex items-start gap-3"><svg className="lucide lucide-file-text h-5 w-5 text-slate-900" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> Ndërtimtari, furnizime, shërbime dhe më shumë</li>
<li className="flex items-start gap-3"><svg className="lucide lucide-map h-5 w-5 text-slate-900" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg> Sipas komunës, rajonit dhe sektorit</li>
<li className="flex items-start gap-3"><svg className="lucide lucide-clock h-5 w-5 text-slate-900" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> Përditësime të shpejta çdo ditë</li>
</ul>
</div>
<div className="rounded-xl border border-slate-200 overflow-hidden">
<img alt="Shembull i listës së tenderëve" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop" />
</div>
</div>
</div>
</div>
</section>

<section className="py-10 bg-slate-50 border-y border-slate-200/70">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
<div>
<div className="text-3xl font-semibold tracking-tight text-[var(--brand-yellow)]">16378</div>
<div className="mt-1 text-sm text-slate-600">Tenderët për një muaj</div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight text-[var(--brand-yellow)]">1375</div>
<div className="mt-1 text-sm text-slate-600">Tenderët për një muaj</div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight text-[var(--brand-yellow)]">1375</div>
<div className="mt-1 text-sm text-slate-600">Tenderët për një muaj</div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight text-[var(--brand-yellow)]">307</div>
<div className="mt-1 text-sm text-slate-600">Tenderët për një javë</div>
</div>
</div>
</div>
</section>

<section className="py-16" id="paketat">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-3xl text-center">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-900">Cmime të përballueshme</h2>
<p className="mt-3 text-slate-600 text-sm sm:text-base">
            Zgjidhni planin që i përshtatet nevojave të organizatës suaj. Mund të ndryshoni planin në çdo kohë.
          </p>
</div>

<div className="mt-10 overflow-x-auto">
<div className="min-w-[900px] grid grid-cols-5 border border-slate-200 rounded-2xl overflow-hidden shadow-lg">

<div className="bg-slate-50">
<div className="px-5 py-5 border-b border-slate-200">
<div className="text-sm text-slate-600">Compare plans</div>
<div className="mt-1 text-xl font-semibold tracking-tight text-slate-900">Përmbledhje</div>
</div>
<div className="divide-y divide-slate-200 text-sm">
<div className="px-5 py-4">Email</div>
<div className="px-5 py-4">Listimi i të gjithë tenderëve</div>
<div className="px-5 py-4">Dërgesa me email</div>
<div className="px-5 py-4">Klasifikimi sipas profilit</div>
<div className="px-5 py-4">Kërkim i avancuar</div>
</div>
</div>

<div className="bg-white">
<div className="px-5 py-5 border-b border-slate-200">
<div className="text-center">
<div className="text-2xl font-semibold tracking-tight">17 €</div>
<div className="text-xs text-slate-600">/ 1 Muaj</div>
<a className="mt-3 inline-flex items-center rounded-full bg-[var(--brand-yellow)] px-4 py-2 text-xs font-medium text-slate-900 hover:brightness-95 shadow-sm transition" href="#abonohu">Abonohu</a>
</div>
</div>
<div className="divide-y divide-slate-200 text-sm">
<div className="px-5 py-4 text-center">1 email</div>
<div className="px-5 py-4 text-center"><svg className="lucide lucide-check mx-auto h-5 w-5 text-slate-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div className="px-5 py-4 text-center"><svg className="lucide lucide-check mx-auto h-5 w-5 text-slate-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div className="px-5 py-4 text-center"><svg className="lucide lucide-x mx-auto h-5 w-5 text-slate-300" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></div>
<div className="px-5 py-4 text-center"><svg className="lucide lucide-x mx-auto h-5 w-5 text-slate-300" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></div>
</div>
</div>

<div className="bg-white">
<div className="px-5 py-5 border-b border-slate-200">
<div className="text-center">
<div className="text-2xl font-semibold tracking-tight">45 €</div>
<div className="text-xs text-slate-600">/ 3 Muaj</div>
<a className="mt-3 inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:opacity-90 shadow-sm transition" href="#abonohu">Abonohu</a>
</div>
</div>
<div className="divide-y divide-slate-200 text-sm">
<div className="px-5 py-4 text-center">1 email</div>
<div className="px-5 py-4 text-center"><svg className="lucide lucide-check mx-auto h-5 w-5 text-slate-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div className="px-5 py-4 text-center"><svg className="lucide lucide-check mx-auto h-5 w-5 text-slate-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div className="px-5 py-4 text-center"><svg className="lucide lucide-check mx-auto h-5 w-5 text-slate-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div className="px-5 py-4 text-center"><svg className="lucide lucide-x mx-auto h-5 w-5 text-slate-300" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></div>
</div>
</div>

<div className="bg-white">
<div className="px-5 py-5 border-b border-slate-200">
<div className="text-center">
<div className="text-2xl font-semibold tracking-tight">84 €</div>
<div className="text-xs text-slate-600">/ 6 Muaj</div>
<a className="mt-3 inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:opacity-90 shadow-sm transition" href="#abonohu">Abonohu</a>
</div>
</div>
<div className="divide-y divide-slate-200 text-sm">
<div className="px-5 py-4 text-center">1 email</div>
<div className="px-5 py-4 text-center"><svg className="lucide lucide-check mx-auto h-5 w-5 text-slate-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div className="px-5 py-4 text-center"><svg className="lucide lucide-check mx-auto h-5 w-5 text-slate-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div className="px-5 py-4 text-center"><svg className="lucide lucide-check mx-auto h-5 w-5 text-slate-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div className="px-5 py-4 text-center"><svg className="lucide lucide-check mx-auto h-5 w-5 text-slate-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
</div>
</div>

<div className="bg-white">
<div className="px-5 py-5 border-b border-slate-200">
<div className="text-center">
<div className="text-2xl font-semibold tracking-tight">150 €</div>
<div className="text-xs text-slate-600">/ 12 Muaj</div>
<a className="mt-3 inline-flex items-center rounded-full bg-[var(--brand-yellow)] px-4 py-2 text-xs font-medium text-slate-900 hover:brightness-95 shadow-sm transition" href="#abonohu">Abonohu</a>
</div>
</div>
<div className="divide-y divide-slate-200 text-sm">
<div className="px-5 py-4 text-center">2 email</div>
<div className="px-5 py-4 text-center"><svg className="lucide lucide-check mx-auto h-5 w-5 text-slate-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div className="px-5 py-4 text-center"><svg className="lucide lucide-check mx-auto h-5 w-5 text-slate-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div className="px-5 py-4 text-center"><svg className="lucide lucide-check mx-auto h-5 w-5 text-slate-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div className="px-5 py-4 text-center"><svg className="lucide lucide-check mx-auto h-5 w-5 text-slate-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pb-14" id="aura-emfcgsr7n">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-slate-50 shadow-lg p-6 relative overflow-hidden">

<div className="absolute top-6 left-6 grid h-9 w-9 place-items-center rounded-full bg-[var(--brand-yellow)] shadow">
<svg className="lucide lucide-arrow-up-right h-5 w-5 text-slate-900" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<div className="grid md:grid-cols-2 gap-6 items-stretch">
<div className="pt-12 md:pt-8">
<h3 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-900">Çfarë ofron Utender.eu?</h3>
<p className="mt-3 text-sm sm:text-base text-slate-700">
<a className="font-medium text-[var(--brand-mid)] hover:text-slate-900" href="#">uTender.eu</a> informon kompani dhe individë për tenderët në Kosovë. Publikojmë të gjithë
            <span className="text-[var(--brand-yellow)] font-medium">tenderët aktivë</span> në kohë reale, çdo ditë.
          </p>
<ul className="mt-5 space-y-4 text-sm sm:text-base text-slate-700">
<li className="items-start gap-3">
<span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-slate-900">
<svg className="lucide lucide-check h-3.5 w-3.5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span><span className="font-medium text-[var(--brand-mid)]">uTender.eu</span> informon kompani dhe individë për tenderët në Kosovë.</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-slate-900">
<svg className="lucide lucide-check h-3.5 w-3.5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span>Publikojmë të gjithë <span className="text-[var(--brand-yellow)] font-medium">tenderët aktivë</span> në kohë reale, çdo ditë.</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-slate-900">
<svg className="lucide lucide-check h-3.5 w-3.5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span>Pas konfirmimit, përfitoni shërbimin tonë. Abonohu tani dhe fito një javë <span className="text-[var(--brand-yellow)] font-medium">FALAS!</span></span>
</li>
</ul>
<a className="mt-6 inline-flex items-center rounded-full bg-[var(--brand-yellow)] px-6 py-2.5 text-sm font-medium text-slate-900 hover:brightness-95 transition" href="#abonohu">
            Abonohu
          </a>
</div>
<div className="rounded-2xl overflow-hidden border border-slate-200">
<img alt="Zyrtar duke nënshkruar dokumente" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=1400&auto=format&fit=crop" />
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-slate-50 shadow-lg p-6 relative">

<div className="absolute top-6 left-6 grid h-9 w-9 place-items-center rounded-full bg-[var(--brand-yellow)] shadow">
<svg className="lucide lucide-arrow-up-right h-5 w-5 text-slate-900" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<div className="pt-12">
<h3 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-900">Çfarë tenderë publikohennë Utender.eu</h3>
<p className="mt-4 text-sm sm:text-base text-slate-700">
          Ata ndahen në <span className="text-[var(--brand-yellow)] font-medium">kategori</span> dhe <span className="text-[var(--brand-yellow)] font-medium">regjione</span> të ndryshme.
          Poashtu ofrohen detaje të tenderëve bashkë me dokumentin zyrtar të publikuar.
        </p>
<a className="mt-6 inline-flex items-center rounded-full bg-[var(--brand-yellow)] px-6 py-2.5 text-sm font-medium text-slate-900 hover:brightness-95 transition" href="#abonohu">
          Abonohu
        </a>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="grid md:grid-cols-4 gap-8">
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--brand-yellow)]">
<span className="text-lg font-semibold text-slate-900">U</span>
</div>
<span className="text-base font-medium tracking-tight text-slate-900">Utender.eu</span>
</div>
<p className="text-sm text-slate-600">
              Njoftimet më të shpejta për tenderët në Kosovë.
            </p>
</div>
<div className="space-y-2" id="kontakt">
<div className="text-sm font-medium text-slate-900 tracking-tight">Contact us</div>
<a className="block text-sm text-slate-700 hover:text-slate-900" href="tel:+38343592500">+383 45 592 500</a>
<a className="block text-sm text-slate-700 hover:text-slate-900" href="mailto:info@utender.eu">info@utender.eu</a>
<a className="block text-sm text-slate-700 hover:text-slate-900" href="mailto:info@3bros.eu">info@3bros.eu</a>
</div>
<div className="space-y-2">
<div className="text-sm font-medium text-slate-900 tracking-tight">Address</div>
<div className="text-sm text-slate-700">Rr. Trinë Smajli, Prishtinë</div>
<div className="text-sm text-slate-700">Republika e Kosovës</div>
<div className="flex items-center gap-3 pt-2">
<a className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-slate-200 hover:bg-slate-50" href="#"><svg className="lucide lucide-globe h-4 w-4 text-slate-700" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg></a>
<a className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-slate-200 hover:bg-slate-50" href="#"><svg className="lucide lucide-instagram h-4 w-4 text-slate-700" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-slate-200 hover:bg-slate-50" href="#"><svg className="lucide lucide-twitter h-4 w-4 text-slate-700" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
</div>
<div className="space-y-2">
<div className="text-sm font-medium text-slate-900 tracking-tight">Faqe</div>
<a className="block text-sm text-slate-700 hover:text-slate-900" href="#tenderet">Tenderët</a>
<a className="block text-sm text-slate-700 hover:text-slate-900" href="#paketat">Paket</a>
<a className="block text-sm text-slate-700 hover:text-slate-900" href="#kontakt">Kontakto</a>
<a className="block text-sm text-slate-700 hover:text-slate-900" href="#abonohu">Abonohu</a>
</div>
</div>
<div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6 text-xs text-slate-500">
<span>© 2025 Utender.eu — Të gjitha të drejtat e rezervuara</span>
<div className="flex items-center gap-4">
<a className="hover:text-slate-700" href="#">Privatësia</a>
<a className="hover:text-slate-700" href="#">Termat</a>
</div>
</div>
</div>

<a aria-label="Kthehu lart" className="fixed bottom-6 right-6 inline-flex items-center justify-center h-11 w-11 rounded-full bg-[var(--brand-yellow)] shadow-lg hover:brightness-95 transition" href="#top">
<svg className="lucide lucide-arrow-up h-5 w-5 text-slate-900" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</a>
</footer>



    </>
  );
}
