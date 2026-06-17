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
      

<header className="w-full py-5 px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-center bg-white sticky top-0 z-50 border-b border-slate-100/50 backdrop-blur-sm">

<div className="flex items-center gap-3 mb-4 lg:mb-0">
<div className="relative h-11 w-11">
<svg className="w-full h-full" viewbox="0 0 100 100">
<path d="M10 80 L30 20 L50 80 L70 20 L90 80" fill="none" stroke="#003594" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"></path>
<path d="M10 80 L35 30" stroke="#e6007e" strokeLinecap="round" strokeWidth="10"></path>
</svg>
</div>
<div className="flex flex-col leading-none">
<span className="text-xl font-medium text-[#003594] tracking-tight">Asociația</span>
<span className="text-xl font-medium text-[#003594] tracking-tight">Mavromati</span>
</div>
</div>

<nav className="bg-slate-100 rounded-full px-1 py-1 flex items-center gap-1 mb-4 lg:mb-0">
<a className="px-6 py-2.5 text-base font-normal text-slate-700 hover:bg-white hover:shadow-sm rounded-full transition-all" href="#">Despre noi</a>
<a className="px-6 py-2.5 text-base font-normal text-slate-700 hover:bg-white hover:shadow-sm rounded-full transition-all" href="#">Proiecte</a>
<button className="px-6 py-2.5 text-base font-normal text-slate-700 hover:bg-white hover:shadow-sm rounded-full transition-all flex items-center gap-1">
                Cum donez <svg className="lucide lucide-chevron-down w-4 h-4 ml-1 stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<a className="px-6 py-2.5 text-base font-normal text-slate-700 hover:bg-white hover:shadow-sm rounded-full transition-all" href="#">Contact</a>
</nav>

<a className="bg-[#e6007e] hover:bg-[#c9006e] text-white px-7 py-3 rounded-full text-base font-normal shadow-md shadow-pink-200 transition-colors flex items-center gap-2" href="#">
            Donează <svg className="lucide lucide-heart-handshake w-5 h-5 stroke-[1.5]" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
</a>
</header>

<section className="relative bg-[#003594] overflow-hidden min-h-[700px] flex items-center">

<div className="absolute inset-y-0 right-0 w-full lg:w-[65%] z-0">

<img alt="Doctor high fiving happy child in hospital bed" className="w-full h-full object-cover object-[center_left] opacity-100" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>


<div className="absolute inset-0 bg-gradient-to-r from-[#003594] via-[#003594] to-transparent lg:via-[#003594]/40 lg:from-5% lg:via-40%"></div>

<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#003594] to-transparent hidden lg:block"></div>

<div className="absolute inset-0 bg-gradient-to-t from-[#003594] via-[#003594]/90 to-transparent lg:hidden"></div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28 w-full">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8 max-w-2xl relative">

<div className="absolute -inset-10 bg-[#003594]/30 blur-3xl -z-10 rounded-full lg:hidden"></div>
<span className="text-[#ff4099] font-medium text-xl tracking-wide">Persoană Juridică</span>
<h1 className="text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1]">
<span className="text-[#ff4099]">Susține sănătatea</span>
                        comunității prin compania ta
                    </h1>
<p className="text-blue-100/90 text-xl font-light leading-relaxed max-w-lg">
                        Redirecționează 20% din impozitul pe profit și transformă cifrele în zâmbete și vieți salvate la Spitalul Mavromati.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-6">
<button className="hover:bg-[#d61c75] flex gap-2 shadow-pink-900/20 transition-all font-normal text-white bg-[#ff2e93] rounded-xl py-4 px-8 shadow-lg items-center justify-center text-lg">
                            Contract de sponsorizare
                            <svg className="lucide lucide-file-text w-5 h-5 stroke-[1.5]" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</button>
<button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-normal flex items-center justify-center gap-2 transition-all text-lg">
<svg className="lucide lucide-heart w-5 h-5 stroke-[1.5]" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg> 
                            Donează direct
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-white pt-28 pb-16 px-6">
<div className="max-w-4xl mx-auto">

<div className="text-center mb-20">
<svg className="lucide lucide-quote w-10 h-10 text-[#e6007e]/40 mx-auto mb-8 stroke-[1.5]" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<h3 className="md:text-4xl leading-tight text-3xl italic text-[#003594] font-playfair tracking-tight">”De prea multe ori subestimăm puterea unui gest mic”</h3>
</div>

<div className="space-y-10 text-xl text-slate-700 leading-relaxed text-left md:text-justify font-light">
<p>
                    Să ridici o piatră de temelie în Botoșani cere mai mult decât capital; cere caracter. Știm că drumul dumneavoastră nu a fost drept și că fiecare succes a venit cu efort dublu.
                </p>
<p className="">
                    Există o parte din munca dumneavoastră – impozitul pe profit – care pleacă, inevitabil, spre bugetul de stat. Adesea, acești bani se pierd în anonimatul cifrelor mari, departe de locul unde au fost produși.
                </p>
<p className="">
                    Dar legea vă oferă o putere discretă: aceea de a decide soarta a 20% din acest impozit. Aveți ocazia să nu-i lăsați să plece. Puteți alege să transformați o taxă abstractă într-un incubator real, într-o lampă chirurgicală performantă, într-o secție renovată chiar aici, în spitalele din Botoșani.
                </p>
<div className="relative bg-slate-50 p-10 rounded-2xl border border-slate-100 mt-10">
<p className="font-normal text-[#003594] leading-relaxed text-xl">
                        Vă propunem nu o simplă donație, ci un pact. În schimbul încrederii dumneavoastră, noi venim cu transparență totală. Veți vedea exact cum profitul dumneavoastră se întoarce în comunitate, devenind siguranță pentru copiii și părinții noștri.
                    </p>
</div>
</div>
</div>
</section>

<div className="relative flex items-center justify-center mb-20 mt-20 px-4">
<div className="w-full h-px bg-pink-100 max-w-7xl relative flex items-center justify-between">
<div className="w-2 h-2 rounded-full bg-[#ff2e93]"></div>
<div className="absolute left-1/2 -translate-x-1/2 -top-2">
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 bg-[#ff2e93] rounded-full opacity-50"></div>
<div className="w-3 h-3 bg-[#ff2e93] rotate-45"></div>
<div className="w-1.5 h-1.5 bg-[#ff2e93] rounded-full opacity-50"></div>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-[#ff2e93]"></div>
</div>
</div>

<section className="max-w-7xl mx-auto pt-6 px-6 pb-16">
<div className="grid lg:grid-cols-2 gap-20 items-start">

<div>
<h2 className="text-3xl lg:text-4xl font-medium text-[#003594] mb-8 tracking-tight leading-tight">
                    Susține Asociația Mavromati redirecționând <span className="text-[#e6007e]">20% din impozitul pe profit</span>
</h2>
<p className="text-xl text-slate-700 leading-relaxed mb-8 font-light">
                    Dacă ai o firmă care plătește impozit pe profit, poți sprijini direct proiectele Asociației Mavromati prin redirecționarea a până la 20% din acest impozit – <span className="font-medium text-slate-900">fără niciun cost suplimentar pentru compania ta.</span>
</p>
<p className="text-lg font-medium text-[#003594] mb-12 flex items-center gap-3">
<svg className="lucide lucide-info text-[#e6007e] w-6 h-6 stroke-[1.5]" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                    Nu ai mai făcut asta până acum? Îți explicăm simplu, pas cu pas:
                </p>

<div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 flex gap-5 items-start">
<div className="bg-white p-3 rounded-full shadow-sm text-[#003594] flex-shrink-0">
<svg className="lucide lucide-shield-check w-6 h-6 stroke-[1.5]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<p className="text-base text-slate-600 leading-relaxed">
<span className="font-medium text-[#003594]">Verificat:</span> Asociația Mavromati este înregistrată oficial în „Registrul entităților/unităților de cult” eligibile pentru deduceri fiscale. Poți verifica acest lucru direct pe site-ul ANAF, folosind codul nostru fiscal: <span className="font-mono bg-white px-2 py-1 rounded border border-slate-200 text-slate-800 text-sm mx-1">33188408</span>.
                        </p>
</div>
</div>

<div className="mt-10">
<button className="bg-[#e6007e] hover:bg-[#c9006e] text-white px-8 py-4 rounded-xl font-normal shadow-lg shadow-pink-900/10 transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-lg">
<svg className="lucide lucide-file-signature w-6 h-6 stroke-[1.5]" data-lucide="file-signature" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18.226 5.226-2.52-2.52A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.351"></path><path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path><path d="M8 18h1"></path></svg>
                        Contract de sponsorizare
                    </button>
</div>
</div>

<div className="relative space-y-10 pl-2">

<div className="absolute left-[23px] top-6 bottom-6 w-0.5 bg-slate-100 -z-10"></div>

<div className="flex gap-6 group">
<div className="w-12 h-12 rounded-full bg-white border-2 border-[#e6007e]/20 text-[#e6007e] font-medium text-lg flex items-center justify-center shadow-sm group-hover:border-[#e6007e] group-hover:bg-[#e6007e] group-hover:text-white transition-all flex-shrink-0">
                        1
                    </div>
<div className="pb-2 w-full">
<h4 className="text-sm font-medium text-[#e6007e] uppercase tracking-wider mb-3">Pasul 1 - Contractul</h4>
<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm group-hover:shadow-md transition-all">
<p className="text-base text-slate-600 mb-4 leading-relaxed">
                                Descarcă contractul de sponsorizare pregătit mai jos, completat deja cu datele Asociației Mavromati.
                            </p>
<p className="text-base text-slate-600 leading-relaxed">
                                Adaugă datele firmei tale și suma pe care dorești să o redirecționezi, apoi trimite-l pe adresa noastră de email: <a className="text-[#003594] font-medium hover:underline" href="mailto:asociatiamavromati@gmail.com">asociatiamavromati@gmail.com</a>. După semnare, îți vom returna contractul în original.
                            </p>
</div>
</div>
</div>

<div className="flex gap-6 group">
<div className="w-12 h-12 rounded-full bg-white border-2 border-[#e6007e]/20 text-[#e6007e] font-medium text-lg flex items-center justify-center shadow-sm group-hover:border-[#e6007e] group-hover:bg-[#e6007e] group-hover:text-white transition-all flex-shrink-0">
                        2
                    </div>
<div className="pb-2 w-full">
<h4 className="text-sm font-medium text-[#e6007e] uppercase tracking-wider mb-3">Pasul 2 - Plata</h4>
<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm group-hover:shadow-md transition-all">
<p className="text-base text-slate-600 mb-3 leading-relaxed">
                                Efectuează plata în contul Asociației Mavromati.
                            </p>
<p className="text-sm font-normal text-amber-700 bg-amber-50 p-3 rounded-lg border border-amber-100 leading-relaxed">
<span className="font-medium">Atenție!</span> Pentru ca sponsorizarea să poată fi dedusă din impozitul pe profit, contractul trebuie încheiat până la <span className="underline">31 decembrie</span>, iar suma trebuie virată înainte de sfârșitul anului fiscal.
                            </p>
</div>
</div>
</div>

<div className="flex gap-6 group">
<div className="w-12 h-12 rounded-full bg-white border-2 border-[#e6007e]/20 text-[#e6007e] font-medium text-lg flex items-center justify-center shadow-sm group-hover:border-[#e6007e] group-hover:bg-[#e6007e] group-hover:text-white transition-all flex-shrink-0">
                        3
                    </div>
<div className="pb-2 w-full">
<h4 className="text-sm font-medium text-[#e6007e] uppercase tracking-wider mb-3">Pasul 3 - Deducerea</h4>
<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm group-hover:shadow-md transition-all">
<p className="text-base text-slate-600 leading-relaxed">
                                Când achiți impozitul pe profit pentru anul fiscal în care ai efectuat sponsorizarea, vei putea scădea suma donată din valoarea totală de plată către stat.
                            </p>
</div>
</div>
</div>

<div className="flex gap-6 group">
<div className="w-12 h-12 rounded-full bg-white border-2 border-[#e6007e]/20 text-[#e6007e] font-medium text-lg flex items-center justify-center shadow-sm group-hover:border-[#e6007e] group-hover:bg-[#e6007e] group-hover:text-white transition-all flex-shrink-0">
                        4
                    </div>
<div className="pb-2 w-full">
<h4 className="text-sm font-medium text-[#e6007e] uppercase tracking-wider mb-3">Pasul 4 - Declarația</h4>
<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm group-hover:shadow-md transition-all">
<p className="text-base text-slate-600 leading-relaxed">
                                Nu uita să completezi formularul 107 și să îl depui până la termenul de depunere a declarației anuale de impozit pe profit.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="relative flex items-center justify-center my-4 px-4">
<div className="w-full h-px bg-slate-200 max-w-7xl relative flex items-center justify-between">
<div className="w-2 h-2 rounded-full bg-[#003594]"></div>
<div className="absolute left-1/2 -translate-x-1/2 -top-2">
<div className="w-3 h-3 bg-[#003594] rotate-45 opacity-50"></div>
</div>
<div className="w-2 h-2 rounded-full bg-[#003594]"></div>
</div>
</div>

<section className="bg-slate-50 py-24 border-b border-slate-100 overflow-hidden relative">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-100/30 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="max-w-4xl mb-16">
<h2 className="text-3xl lg:text-4xl font-medium text-[#003594] mb-8 tracking-tight leading-tight">Încă mai poți dona din impozitul pe profit din anul precedent</h2>
<p className="text-slate-700 text-xl leading-relaxed font-light">
                    Dacă firma ta nu a realizat sponsorizări deductibile în anul anterior sau nu a utilizat întreg plafonul disponibil (adică <span className="font-medium text-slate-900">20% din impozitul pe profit</span>, fără a depăși 0,75% din cifra de afaceri), poți solicita ANAF să redirecționeze către Asociația Mavromati sumele rămase nefolosite.
                </p>
</div>

<div className="grid lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
<div className="bg-white p-10 rounded-2xl shadow-xl shadow-blue-900/5 border border-slate-100 relative overflow-hidden group">

<div className="absolute top-0 right-0 w-48 h-48 bg-pink-50 rounded-full blur-3xl -mr-12 -mt-12 transition-all group-hover:bg-pink-100/70"></div>
<div className="relative z-10">
<div className="flex items-center gap-4 mb-6">
<div className="p-3 bg-pink-50 text-[#e6007e] rounded-xl border border-pink-100">
<svg className="lucide lucide-calendar-clock w-6 h-6 stroke-[1.5]" data-lucide="calendar-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 14v2.2l1.6 1"></path><path d="M16 2v4"></path><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M3 10h5"></path><path d="M8 2v4"></path><circle cx="16" cy="16" r="6"></circle></svg>
</div>
<span className="font-medium text-slate-500 uppercase tracking-wide text-sm">Termen limită</span>
</div>
<p className="text-4xl font-medium text-[#003594] tracking-tight mb-8">25 iunie 2026</p>
<div className="flex flex-col gap-4">
<a className="hover:bg-[#0d265c] flex items-center justify-center gap-3 transition-all shadow-blue-900/10 text-base font-normal text-white bg-[#003594] w-full rounded-xl pt-4 pr-6 pb-4 pl-6 shadow-md" href="#">
<svg className="lucide lucide-download w-5 h-5 stroke-[1.5]" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                                    Descarcă Declarația 177
                                </a>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7">
<h3 className="text-2xl font-medium text-[#003594] mb-8 flex items-center gap-3">
                        Ce ai de făcut:
                    </h3>
<div className="space-y-5">

<div className="flex gap-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="shrink-0 mt-1 text-[#e6007e]">
<svg className="lucide lucide-file-edit w-6 h-6 stroke-[1.5]" data-lucide="file-edit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z"></path></svg>
</div>
<div>
<h4 className="font-medium text-slate-900 text-lg mb-2">Completează contractul de sponsorizare</h4>
<p className="text-base text-slate-600 leading-relaxed">Îl găsești aici, pregătit deja cu datele Asociației Mavromati.</p>
</div>
</div>

<div className="flex gap-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="shrink-0 mt-1 text-[#e6007e]">
<svg className="lucide lucide-mail-check w-6 h-6 stroke-[1.5]" data-lucide="mail-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path><path d="m16 19 2 2 4-4"></path></svg>
</div>
<div>
<h4 className="font-medium text-slate-900 text-lg mb-2">Trimite-ne contractul semnat</h4>
<p className="text-base text-slate-600 leading-relaxed">Pe adresa: <span className="text-[#003594] font-medium">asociatiamavromati@gmail.com</span>.  Noi îl semnăm electronic și apoi îl trimitem înapoi</p>
</div>
</div>

<div className="flex gap-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="shrink-0 mt-1 text-[#e6007e]">
<svg className="lucide lucide-file-down w-6 h-6 stroke-[1.5]" data-lucide="file-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M12 18v-6"></path><path d="m9 15 3 3 3-3"></path></svg>
</div>
<div>
<h4 className="font-medium text-slate-900 text-lg mb-2">Descarcă Declarația 177</h4>
<p className="text-base text-slate-600 leading-relaxed">Acest document este cheia prin care soliciți ANAF să direcționeze până la 20% din impozitul deja plătit pentru anul 2025 către noi.</p>
</div>
</div>

<div className="flex gap-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="shrink-0 mt-1 text-[#e6007e]">
<svg className="lucide lucide-laptop w-6 h-6 stroke-[1.5]" data-lucide="laptop" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"></path><path d="M20.054 15.987H3.946"></path></svg>
</div>
<div>
<h4 className="font-medium text-slate-900 text-lg mb-2">Depune Declarația 177</h4>
<p className="text-base text-slate-600 leading-relaxed">În Spațiul Privat Virtual (SPV) al firmei tale, accesibil pe site-ul ANAF până pe <span className="font-medium text-[#003594]">25 iunie 2026</span>.</p>
</div>
</div>

<div className="flex gap-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="shrink-0 mt-1 text-[#e6007e]">
<svg className="lucide lucide-file-check-2 w-6 h-6 stroke-[1.5]" data-lucide="file-check-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m14 20 2 2 4-4"></path></svg>
</div>
<div>
<h4 className="font-medium text-slate-900 text-lg mb-2">Depune formularul 107</h4>
<p className="text-base text-slate-600 leading-relaxed">Nu uita să completezi formularul 107 și să îl depui până la termenul de depunere a declarației anuale de impozit pe profit.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="relative flex items-center justify-center my-20 px-4">
<div className="w-full h-px bg-pink-100 max-w-7xl relative flex items-center justify-between">
<div className="w-2 h-2 rounded-full bg-[#ff2e93]"></div>
<div className="absolute left-1/2 -translate-x-1/2 -top-2">
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 bg-[#ff2e93] rounded-full opacity-50"></div>
<div className="w-3 h-3 bg-[#ff2e93] rotate-45"></div>
<div className="w-1.5 h-1.5 bg-[#ff2e93] rounded-full opacity-50"></div>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-[#ff2e93]"></div>
</div>
</div>

<section className="max-w-7xl mr-auto ml-auto pt-8 pr-6 pb-16 pl-6 relative">
<h2 className="text-3xl lg:text-4xl font-medium text-[#003594] text-center mb-20 tracking-tight">Proiecte care pot fi susținute</h2>
<div className="grid lg:grid-cols-12 gap-10 items-stretch relative mb-16">

<div className="lg:col-span-4 z-10 flex flex-col bg-white h-full border-slate-100 border rounded-2xl px-10 py-10 relative shadow-xl justify-center">
<h3 className="text-2xl font-medium text-[#003594] mb-6">Ce obține compania ta?</h3>
<ol className="list-decimal list-inside space-y-4 text-base font-normal text-slate-800">
<li className="pl-2 marker:text-[#e6007e] marker:font-medium">Deducere fiscală legală</li>
<li className="pl-2 marker:text-[#e6007e] marker:font-medium">Impact real în comunitatea locală</li>
<li className="pl-2 marker:text-[#e6007e] marker:font-medium">Sprijin pentru proiecte medicale concrete</li>
<li className="pl-2 marker:text-[#e6007e] marker:font-medium">Transparență și raportare</li>
</ol>
</div>

<div className="lg:col-span-8 flex flex-col bg-white z-10 border-slate-100 border rounded-2xl pt-10 pr-10 pb-10 pl-10 shadow-2xl justify-center">
<h3 className="text-2xl font-medium text-[#e6007e] mb-8 text-center">Donează pentru un proiect</h3>
<div className="grid md:grid-cols-3 gap-6 w-full h-full">

<button className="group flex flex-col items-center justify-center p-6 h-full min-h-[160px] bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
<span className="text-white font-medium text-xl uppercase tracking-wide mb-3">VITALIS</span>
<span className="text-pink-50 text-sm leading-tight text-center font-normal opacity-90">Echipamente pentru Terapie Intensiva si Cardiologie</span>
</button>

<button className="group flex flex-col items-center justify-center p-6 h-full min-h-[160px] bg-[#003594] rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
<span className="text-white font-medium text-xl uppercase tracking-wide mb-3">CUORE</span>
<span className="text-blue-100 text-sm leading-tight text-center font-normal opacity-90">Dotam Spitalul de Pediatrie</span>
</button>

<button className="group flex flex-col items-center justify-center p-6 h-full min-h-[160px] bg-[#0d265c] rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
<span className="text-white font-medium text-xl uppercase tracking-wide mb-3">NEURO+</span>
<span className="text-blue-100 text-sm leading-tight text-center font-normal opacity-90">Echipamente pentru Psihiatrie si Neurochirurgie</span>
</button>
</div>
</div>
</div>
</section>

<div className="relative flex items-center justify-center my-12 px-4">
<div className="w-full h-px bg-pink-100 max-w-7xl relative flex items-center justify-between">
<div className="w-2 h-2 rounded-full bg-[#ff2e93]"></div>
<div className="absolute left-1/2 -translate-x-1/2 -top-2">
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 bg-[#ff2e93] rounded-full opacity-50"></div>
<div className="w-3 h-3 bg-[#ff2e93] rotate-45"></div>
<div className="w-1.5 h-1.5 bg-[#ff2e93] rounded-full opacity-50"></div>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-[#ff2e93]"></div>
</div>
</div>

<section className="bg-[#e9eff6] py-16 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div>
<h3 className="text-2xl font-medium text-[#003594] mb-3">Implică-te. Fii parte din schimbare.</h3>
<p className="text-lg text-slate-600 max-w-xl font-light">Implică-te activ în proiectele noastre și ajută-ne să îmbunătățim condițiile din Spitalul Mavromati.</p>
</div>
<button className="bg-[#ff2e93] hover:bg-[#d61c75] text-white font-normal px-10 py-3.5 rounded-xl shadow-sm whitespace-nowrap text-lg transition-colors">
                Contact
            </button>
</div>
</section>

<footer className="bg-white pt-16 pb-6">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">

<div className="space-y-6">
<div className="flex items-center gap-3">
<div className="relative h-12 w-12">
<svg className="w-full h-full" viewbox="0 0 100 100">
<path d="M10 80 L30 20 L50 80 L70 20 L90 80" fill="none" stroke="#003594" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"></path>
<path d="M10 80 L35 30" stroke="#e6007e" strokeLinecap="round" strokeWidth="10"></path>
</svg>
</div>
<div className="flex flex-col leading-none">
<span className="text-xl font-medium text-[#003594]">Asociația</span>
<span className="text-xl font-medium text-[#003594]">Mavromati</span>
</div>
</div>
<p className="text-sm font-medium text-slate-900">Asociația Prietenii Spitalului Mavromati</p>
<div className="text-xs text-slate-500 space-y-2 font-normal">
<p><span className="font-medium text-slate-700">CIF:</span> 33188408</p>
<p><span className="font-medium text-slate-700">IBAN RON:</span> RO91BTRLRONCRT0CW5828901</p>
<p><span className="font-medium text-slate-700">IBAN EUR:</span> RO38BTRLEURCRT0CW5828901</p>
</div>
<div className="flex gap-4 pt-2">
<a className="bg-[#3b5998] text-white p-2 rounded-full hover:opacity-90 transition-opacity" href="#">
<svg className="lucide lucide-facebook w-5 h-5 fill-current stroke-[1.5]" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white p-2 rounded-full hover:opacity-90 transition-opacity" href="#">
<svg className="lucide lucide-instagram w-5 h-5 stroke-[1.5]" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</div>

<div>
<h4 className="text-lg font-medium text-[#003594] mb-6">Navigare rapidă</h4>
<div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-slate-600 font-normal">
<a className="hover:text-pink-600 transition-colors" href="#">Despre noi</a>
<a className="hover:text-pink-600 transition-colors" href="#">Donează online</a>
<a className="hover:text-pink-600 transition-colors" href="#">Proiecte</a>
<a className="hover:text-pink-600 transition-colors" href="#">Contact</a>
<a className="hover:text-pink-600 transition-colors" href="#">Persoană juridică</a>
<a className="hover:text-pink-600 transition-colors" href="#">Termeni și condiții</a>
<a className="hover:text-pink-600 transition-colors" href="#">Persoană fizică</a>
<a className="hover:text-pink-600 transition-colors" href="#">Politica de confidențialitate</a>
</div>
<div className="mt-8 flex gap-3">

<div className="border border-slate-300 rounded px-3 py-1.5 flex items-center gap-2 hover:border-slate-400 cursor-pointer transition-colors">
<div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-[9px] text-white font-bold">L</div>
<div className="flex flex-col text-[8px] leading-tight text-slate-600">
<span>SOLUȚIONAREA ALTERNATIVĂ</span>
<span>A LITIGIILOR</span>
</div>
</div>
<div className="border border-slate-300 rounded px-3 py-1.5 flex items-center gap-2 hover:border-slate-400 cursor-pointer transition-colors">
<div className="flex flex-col text-[8px] leading-tight text-center text-slate-600">
<span>SOLUȚIONAREA ONLINE</span>
<span>A LITIGIILOR</span>
</div>
</div>
</div>
</div>

<div>
<h4 className="text-lg font-medium text-[#003594] mb-6">Informații de contact</h4>
<div className="space-y-4 text-sm text-slate-600 font-normal">
<div className="flex gap-3 items-start">
<svg className="lucide lucide-map-pin w-5 h-5 text-[#e6007e] shrink-0 mt-0.5 stroke-[1.5]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Sediu social: Str. Marchian nr. 11, Botoșani</span>
</div>
<div className="flex gap-3 items-center">
<svg className="lucide lucide-phone w-5 h-5 text-[#e6007e] shrink-0 stroke-[1.5]" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>Telefon donații: 0750 263 633</span>
</div>
<div className="flex gap-3 items-center">
<svg className="lucide lucide-mail w-5 h-5 text-[#e6007e] shrink-0 stroke-[1.5]" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span>Email: asociatiamavromati@gmail.com</span>
</div>
</div>
<button className="mt-8 bg-[#e6007e] hover:bg-[#c9006e] text-white text-sm font-normal px-8 py-3 rounded-xl shadow-md transition-colors w-full sm:w-auto">
                    Donează acum
                </button>
</div>
</div>

<div className="border-t border-slate-200 bg-[#003594] py-4 text-center">
<p className="text-xs text-white/80 font-light">© 2025 Asociația Prietenii Spitalului Mavromati. Toate drepturile rezervate. Website realizat de ITeXclusiv.ro</p>
</div>
</footer>


    </>
  );
}
