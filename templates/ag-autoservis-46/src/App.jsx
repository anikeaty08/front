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



    lucide.createIcons({ attrs: { "stroke-width": 1.5 } });

    document.getElementById("year").textContent = new Date().getFullYear();

    const mobileBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    let menuOpen = false;

    mobileBtn.addEventListener("click", () => {
      menuOpen = !menuOpen;
      mobileMenu.classList.toggle("hidden", !menuOpen);
      mobileBtn.innerHTML = "";
      const iconName = menuOpen ? "x" : "menu";
      const icon = lucide.createElement(iconName, { "stroke-width": 1.5, class: "w-5 h-5" });
      mobileBtn.appendChild(icon);
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
      
<div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">

<header className="border-b border-slate-800/70 sticky top-0 z-40 backdrop-blur">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-6 py-4 px-4 sm:px-6 lg:px-8">

<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight text-emerald-300">AG</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">AG Autoservis</span>
<span className="text-xs sm:text-sm text-slate-400">Brza i pouzdana autoservisna rješenja</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-7 text-sm">
<a className="text-slate-300 hover:text-emerald-300 transition-colors" href="#usluge">Usluge</a>
<a className="text-slate-300 hover:text-emerald-300 transition-colors" href="#o-nama">O nama</a>
<a className="text-slate-300 hover:text-emerald-300 transition-colors" href="#recenzije">Recenzije</a>
<a className="text-slate-300 hover:text-emerald-300 transition-colors" href="#kontakt">Kontakt</a>
</nav>

<div className="hidden md:flex items-center gap-3">
<div className="flex flex-col items-end leading-tight">
<span className="text-xs text-slate-400 uppercase tracking-wide">Nazovite odmah</span>
<a className="text-sm font-semibold tracking-tight text-slate-50 hover:text-emerald-300 transition-colors" href="tel:+385911234567">
              +385 91 123 4567
            </a>
</div>
<a className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/50 bg-emerald-500/10 px-4 py-2 text-sm font-semibold tracking-tight text-emerald-200 hover:bg-emerald-500/15 hover:border-emerald-300 transition-colors" href="#termin">
<span>Rezerviraj termin</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<button className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 p-2 text-slate-200 hover:border-emerald-400/50 hover:text-emerald-200 transition-colors" id="mobileMenuBtn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>

<div className="md:hidden hidden border-t border-slate-800/70 bg-slate-950/95" id="mobileMenu">
<div className="max-w-6xl mx-auto flex flex-col gap-3 py-4 px-4 sm:px-6">
<a className="text-sm text-slate-200 hover:text-emerald-300 transition-colors" href="#usluge">Usluge</a>
<a className="text-sm text-slate-200 hover:text-emerald-300 transition-colors" href="#o-nama">O nama</a>
<a className="text-sm text-slate-200 hover:text-emerald-300 transition-colors" href="#recenzije">Recenzije</a>
<a className="text-sm text-slate-200 hover:text-emerald-300 transition-colors" href="#kontakt">Kontakt</a>
<div className="pt-2 border-t border-slate-800/70 flex flex-col gap-2">
<a className="text-sm font-semibold tracking-tight text-slate-50 hover:text-emerald-300 transition-colors" href="tel:+385911234567">
              +385 91 123 4567
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/60 bg-emerald-500/10 px-4 py-2 text-sm font-semibold tracking-tight text-emerald-200 hover:bg-emerald-500/15 hover:border-emerald-300 transition-colors" href="#termin">
<span>Rezerviraj termin</span>
<i className="w-4 h-4" data-lucide="calendar"></i>
</a>
</div>
</div>
</div>
</header>

<main>
<section className="relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 -right-32 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl"></div>
<div className="absolute top-1/2 -left-40 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl"></div>
</div>
<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8 relative z-10">

<div className="space-y-7">
<span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium tracking-tight text-emerald-200">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              Otvoreno: Pon–Sub, 08–19 h
            </span>
<div className="space-y-3">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
                Pouzdan autoservis za<br className="hidden sm:block"/>
                vaš automobil u <span className="text-emerald-300">Zagrebu</span>
</h1>
<p className="text-base sm:text-lg text-slate-300 max-w-xl">
                Brza dijagnostika, kvalitetan popravak i transparentne cijene. Ovlašteni stručnjaci za redovan servis, mehaniku, elektriku i pripremu za tehnički.
              </p>
</div>
<div className="flex flex-wrap items-center gap-4">
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/70 bg-emerald-500/15 px-5 py-2.5 text-sm font-semibold tracking-tight text-emerald-100 hover:bg-emerald-500/25 hover:border-emerald-300 transition-colors" href="#termin">
<i className="w-4 h-4" data-lucide="calendar-clock"></i>
<span>Rezerviraj termin online</span>
</a>
<a className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-medium tracking-tight text-slate-100 hover:border-emerald-400/60 hover:text-emerald-200 transition-colors" href="tel:+385911234567">
<i className="w-4 h-4" data-lucide="phone-call"></i>
<span>Hitni kvar? Nazovi sada</span>
</a>
</div>
<div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-400">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="badge-check"></i>
<span>12 mjeseci jamstva na rad</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="timer"></i>
<span>Brzi servis u roku 24 h*</span>
</div>
</div>
</div>

<div className="lg:pl-6">
<div className="relative">
<div className="absolute -inset-0.5 bg-gradient-to-tr from-emerald-500/60 via-sky-500/40 to-transparent opacity-60 blur-2xl"></div>
<div className="relative rounded-2xl border border-slate-800 bg-slate-950/80 shadow-2xl shadow-emerald-900/20 overflow-hidden">

<div className="flex items-center justify-between border-b border-slate-800/80 px-5 py-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">
<i className="w-4 h-4 text-emerald-300" data-lucide="wrench"></i>
</div>
<div className="leading-tight">
<p className="text-sm font-semibold tracking-tight text-slate-50">Status servisa</p>
<p className="text-xs text-slate-400">VW Golf 7 • Registracija: ZG 123-AB</p>
</div>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-400/40 px-2.5 py-1 text-[0.7rem] font-medium tracking-tight text-emerald-200">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    U tijeku
                  </span>
</div>

<div className="grid grid-cols-2 gap-4 px-5 py-4 sm:py-5">
<div className="col-span-2 flex items-center justify-between rounded-xl bg-slate-900/70 border border-slate-800 px-3 py-3">
<div className="flex flex-col gap-0.5">
<span className="text-xs text-slate-400">Procijenjeni završetak</span>
<span className="text-sm font-semibold tracking-tight text-slate-50">Danas do 17:30</span>
</div>
<div className="flex items-center gap-1 text-xs text-emerald-300">
<i className="w-3.5 h-3.5" data-lucide="clock-3"></i>
<span>2 h preostalo</span>
</div>
</div>
<div className="flex flex-col gap-1 rounded-xl bg-slate-900/60 border border-slate-800 px-3 py-3">
<span className="text-xs text-slate-400">Usluga</span>
<span className="text-sm font-semibold tracking-tight text-slate-50">Veliki servis</span>
<span className="text-xs text-slate-400">Ulje, filteri, kočnice</span>
</div>
<div className="flex flex-col gap-1 rounded-xl bg-slate-900/60 border border-slate-800 px-3 py-3">
<span className="text-xs text-slate-400">Ukupna procjena</span>
<span className="text-sm font-semibold tracking-tight text-slate-50">od 180 €</span>
<span className="text-xs text-emerald-300">Sve cijene transparentno unaprijed</span>
</div>
<div className="col-span-2 flex items-center justify-between rounded-xl bg-slate-900/60 border border-slate-800 px-3 py-3">
<div className="flex items-center gap-2 text-xs text-slate-300">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="shield-check"></i>
<span>Dijagnostika uključena u cijenu servisa</span>
</div>
<button className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-[0.7rem] font-medium tracking-tight text-slate-100 hover:border-emerald-400/60 hover:text-emerald-200 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="file-text"></i>
                      Detalji ponude
                    </button>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-800/80 bg-slate-950/90 px-5 py-3.5">
<div className="flex items-center gap-2 text-xs text-slate-400">
<i className="w-3.5 h-3.5 text-sky-400" data-lucide="info"></i>
<span>*Vrijedi za dogovorene termine i dostupne dijelove.</span>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-[0.7rem] font-medium tracking-tight text-slate-100 hover:border-emerald-400/60 hover:text-emerald-200 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="message-square"></i>
                      Javi mi kad je gotovo
                    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-900/80 bg-slate-950/60" id="usluge">
<div className="max-w-6xl mx-auto py-10 sm:py-14 lg:py-18 px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 sm:mb-10">
<div className="space-y-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                Usluge koje nudimo
              </h2>
<p className="text-base text-slate-300 max-w-2xl">
                Kompletnu brigu o vašem vozilu preuzimamo mi – od redovnog servisa i dijagnostike do pripreme za tehnički pregled i hitnih popravaka.
              </p>
</div>
<div className="flex flex-wrap gap-2 text-xs text-slate-400">
<span className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/70 px-2.5 py-1">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="sparkles"></i>
                Originalni i zamjenski dijelovi
              </span>
<span className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/70 px-2.5 py-1">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="car"></i>
                Sva osobna i dostavna vozila
              </span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-5 lg:gap-6">

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center">
<i className="w-4 h-4 text-emerald-300" data-lucide="settings-2"></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-50">Redovan servis</h3>
<p className="text-xs text-slate-400">Ulje, filteri, remenje, kočnice</p>
</div>
</div>
<p className="text-sm text-slate-300">
                Redovni mali i veliki servis svih marki vozila prema preporuci proizvođača, uz ovjeru servisne knjižice.
              </p>
<ul className="mt-1 space-y-1.5 text-xs text-slate-300">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80"></span> Zamjena ulja i svih filtera
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80"></span> Kontrola kočnica i ovjesa
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80"></span> Vizualni pregled vozila
                </li>
</ul>
<div className="mt-auto pt-3 flex items-center justify-between text-xs">
<span className="text-slate-400">Već od <span className="text-slate-100 font-semibold tracking-tight">89 €</span></span>
<span className="text-emerald-300 font-medium">Prosječno trajanje 2–3 h</span>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-sky-500/10 border border-sky-400/40 flex items-center justify-center">
<i className="w-4 h-4 text-sky-300" data-lucide="scan-search"></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-50">Dijagnostika i elektrika</h3>
<p className="text-xs text-slate-400">Motor, elektronika, sustavi pomoći</p>
</div>
</div>
<p className="text-sm text-slate-300">
                Računalna dijagnostika modernim uređajima, rješavanje problema paljenja, lampica, senzora i električnih kvarova.
              </p>
<ul className="mt-1 space-y-1.5 text-xs text-slate-300">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400/80"></span> Detaljno očitanje grešaka
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400/80"></span> Provjera akumulatora i alternatora
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400/80"></span> Kalibracija sustava (ABS, ESP, airbag)
                </li>
</ul>
<div className="mt-auto pt-3 flex items-center justify-between text-xs">
<span className="text-slate-400">Dijagnostika od <span className="text-slate-100 font-semibold tracking-tight">25 €</span></span>
<span className="text-sky-300 font-medium">Rezultati u 30–60 min</span>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-amber-500/10 border border-amber-400/40 flex items-center justify-center">
<i className="w-4 h-4 text-amber-300" data-lucide="check-circle-2"></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-50">Priprema za tehnički</h3>
<p className="text-xs text-slate-400">Pregled, popravak i savjetovanje</p>
</div>
</div>
<p className="text-sm text-slate-300">
                Detaljan pregled kočnica, svjetala, ovjesa i ispuha kako biste bez brige prošli tehnički pregled iz prvog pokušaja.
              </p>
<ul className="mt-1 space-y-1.5 text-xs text-slate-300">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-amber-400/80"></span> Simulacija tehničkog pregleda
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-amber-400/80"></span> Regulacija svjetala i ispuha
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-amber-400/80"></span> Detaljno savjetovanje prije registracije
                </li>
</ul>
<div className="mt-auto pt-3 flex items-center justify-between text-xs">
<span className="text-slate-400">Pregled od <span className="text-slate-100 font-semibold tracking-tight">35 €</span></span>
<span className="text-amber-300 font-medium">Moguć prijevoz do stanice</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-900/80 bg-slate-950" id="o-nama">
<div className="max-w-6xl mx-auto py-10 sm:py-14 lg:py-18 px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
<div className="space-y-5">
<span className="text-xs font-medium tracking-wide text-emerald-300 uppercase">O nama</span>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
              Više od 15 godina iskustva u održavanju vozila
            </h2>
<p className="text-base text-slate-300">
              AG Autoservis je obiteljski servis koji spaja iskustvo i moderne tehnologije. Naš tim čine certificirani automehaničari i autoelektričari s bogatim iskustvom u radu na svim vrstama vozila.
            </p>
<p className="text-base text-slate-300">
              Vjerujemo u transparentan rad: prije svakog zahvata dobivate jasnu ponudu, fotografije i pojašnjenja, a zamijenjene dijelove možete pregledati pri preuzimanju vozila.
            </p>
<div className="grid grid-cols-3 gap-4 pt-2">
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 px-3 py-3">
<p className="text-lg font-semibold tracking-tight text-slate-50">15+</p>
<p className="text-xs text-slate-400">godina iskustva</p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 px-3 py-3">
<p className="text-lg font-semibold tracking-tight text-slate-50">4.9</p>
<p className="text-xs text-slate-400">prosječna ocjena</p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 px-3 py-3">
<p className="text-lg font-semibold tracking-tight text-slate-50">3k+</p>
<p className="text-xs text-slate-400">zadovoljnih klijenata</p>
</div>
</div>
</div>
<div className="space-y-5">
<span className="text-xs font-medium tracking-wide text-emerald-300 uppercase">Zašto odabrati nas</span>
<div className="space-y-3">

<div className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
<div className="mt-1">
<div className="h-8 w-8 rounded-xl bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center">
<i className="w-4 h-4 text-emerald-300" data-lucide="wallet-cards"></i>
</div>
</div>
<div className="space-y-1">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Transparentne cijene</h3>
<p className="text-sm text-slate-300">
                    Svaki posao dogovaramo unaprijed – nema skrivenih troškova. Ponuda s jasno navedenim cijenama dijelova i rada.
                  </p>
</div>
</div>

<div className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
<div className="mt-1">
<div className="h-8 w-8 rounded-xl bg-sky-500/10 border border-sky-400/40 flex items-center justify-center">
<i className="w-4 h-4 text-sky-300" data-lucide="car-front"></i>
</div>
</div>
<div className="space-y-1">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Originalni ili kvalitetni zamjenski dijelovi</h3>
<p className="text-sm text-slate-300">
                    U dogovoru s vama biramo optimalnu kombinaciju kvalitete i cijene, uz jamstvo na ugrađene dijelove.
                  </p>
</div>
</div>

<div className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
<div className="mt-1">
<div className="h-8 w-8 rounded-xl bg-amber-500/10 border border-amber-400/40 flex items-center justify-center">
<i className="w-4 h-4 text-amber-300" data-lucide="clock"></i>
</div>
</div>
<div className="space-y-1">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Fleksibilni termini i brz servis</h3>
<p className="text-sm text-slate-300">
                    Prilagođavamo se vašem rasporedu – rano ujutro, kasno popodne ili subotom. Većinu servisa završavamo isti dan.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-900/80 bg-slate-950/80" id="recenzije">
<div className="max-w-6xl mx-auto py-10 sm:py-14 lg:py-18 px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 sm:mb-10">
<div className="space-y-2">
<span className="text-xs font-medium tracking-wide text-emerald-300 uppercase">Recenzije</span>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                Što kažu naši klijenti
              </h2>
<p className="text-base text-slate-300 max-w-2xl">
                Ponosni smo na dugoročan odnos s klijentima koji nam se vraćaju iz godine u godinu.
              </p>
</div>
<div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
<div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2.5 py-1">
<i className="w-3.5 h-3.5 text-amber-300" data-lucide="star"></i>
<span className="font-semibold tracking-tight text-slate-50">4.9/5</span>
<span className="text-slate-300">na temelju 200+ ocjena</span>
</div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-5 lg:gap-6">

<div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-5 flex flex-col gap-3">
<div className="flex items-center justify-between gap-3">
<div>
<p className="text-sm font-semibold tracking-tight text-slate-50">Ivan K.</p>
<p className="text-xs text-slate-400">VW Passat • Redovan servis</p>
</div>
<div className="flex items-center gap-1 text-amber-300">
<i className="w-3.5 h-3.5" data-lucide="star"></i>
<span className="text-xs font-medium">5.0</span>
</div>
</div>
<p className="text-sm text-slate-300">
                Dogovorili smo termin online, sve je bilo gotovo isti dan. Detaljno su mi objasnili što je rađeno i pokazali stare dijelove. Svaka preporuka!
              </p>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-5 flex flex-col gap-3">
<div className="flex items-center justify-between gap-3">
<div>
<p className="text-sm font-semibold tracking-tight text-slate-50">Marija P.</p>
<p className="text-xs text-slate-400">Renault Clio • Dijagnostika</p>
</div>
<div className="flex items-center gap-1 text-amber-300">
<i className="w-3.5 h-3.5" data-lucide="star"></i>
<span className="text-xs font-medium">4.8</span>
</div>
</div>
<p className="text-sm text-slate-300">
                Auto mi je povremeno gasio, u drugim servisima nisu znali što je. Ovdje su vrlo brzo pronašli problem, objasnili i riješili uz korektnu cijenu.
              </p>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-5 flex flex-col gap-3">
<div className="flex items-center justify-between gap-3">
<div>
<p className="text-sm font-semibold tracking-tight text-slate-50">Dario L.</p>
<p className="text-xs text-slate-400">Škoda Octavia • Priprema za tehnički</p>
</div>
<div className="flex items-center gap-1 text-amber-300">
<i className="w-3.5 h-3.5" data-lucide="star"></i>
<span className="text-xs font-medium">5.0</span>
</div>
</div>
<p className="text-sm text-slate-300">
                Donio sam auto prije registracije, napravili su kompletan pregled, podesili svjetla i riješili sitne kvarove. Tehnički prošao bez ikakvih problema.
              </p>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-900/80 bg-slate-950" id="termin">
<div className="max-w-6xl mx-auto py-10 sm:py-14 lg:py-18 px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10 lg:gap-14 items-start">

<div className="space-y-6">
<div className="space-y-2">
<span className="text-xs font-medium tracking-wide text-emerald-300 uppercase">Rezervacija termina</span>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                Zatražite termin servisa
              </h2>
<p className="text-base text-slate-300">
                Ispunite kratki obrazac, a mi ćemo vam se javiti s prijedlogom slobodnog termina i okvirnom ponudom.
              </p>
</div>
<form className="space-y-4">
<div className="grid md:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-200">Ime i prezime</label>
<input className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:border-emerald-400/70 focus:ring-0" placeholder="Vaše ime i prezime" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-200">Kontakt telefon</label>
<input className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:border-emerald-400/70 focus:ring-0" placeholder="+385 ..." type="tel"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-200">Marka i model vozila</label>
<input className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:border-emerald-400/70 focus:ring-0" placeholder="npr. VW Golf 7 2.0 TDI" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-200">Godina proizvodnje</label>
<input className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:border-emerald-400/70 focus:ring-0" placeholder="npr. 2016" type="number"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-200">Vrsta usluge</label>
<select className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:border-emerald-400/70 focus:ring-0">
<option className="bg-slate-900">Mali servis</option>
<option className="bg-slate-900">Veliki servis</option>
<option className="bg-slate-900">Dijagnostika</option>
<option className="bg-slate-900">Elektrika</option>
<option className="bg-slate-900">Priprema za tehnički</option>
<option className="bg-slate-900">Ostalo</option>
</select>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-200">Preferirani datum</label>
<input className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:border-emerald-400/70 focus:ring-0" type="date"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-200">Kratak opis problema</label>
<textarea className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:border-emerald-400/70 focus:ring-0" placeholder="Npr. čuje se škripa pri kočenju, pali se lampica motora..." rows="4"></textarea>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
<button className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/70 bg-emerald-500/20 px-5 py-2.5 text-sm font-semibold tracking-tight text-emerald-50 hover:bg-emerald-500/30 hover:border-emerald-300 transition-colors" type="submit">
<i className="w-4 h-4" data-lucide="send"></i>
<span>Pošalji upit za termin</span>
</button>
<p className="text-xs text-slate-400 max-w-xs">
                  Slanjem upita potvrđujete da se slažete s obradom osobnih podataka isključivo u svrhu dogovora termina.
                </p>
</div>
</form>
</div>

<div className="space-y-5" id="kontakt">
<div className="space-y-2">
<span className="text-xs font-medium tracking-wide text-emerald-300 uppercase">Kontakt</span>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
                Gdje se nalazimo
              </h3>
<p className="text-base text-slate-300">
                AG Autoservis<br/>
                Ulica Primjera 12, 10000 Zagreb
              </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4 space-y-4">
<div className="space-y-1.5">
<div className="flex items-center gap-2 text-sm text-slate-200">
<i className="w-4 h-4 text-emerald-300" data-lucide="phone"></i>
<a className="hover:text-emerald-200 transition-colors" href="tel:+385911234567">+385 91 123 4567</a>
</div>
<div className="flex items-center gap-2 text-sm text-slate-200">
<i className="w-4 h-4 text-emerald-300" data-lucide="mail"></i>
<a className="hover:text-emerald-200 transition-colors" href="mailto:info@ag-autoservis.hr">info@ag-autoservis.hr</a>
</div>
</div>
<div className="space-y-1.5 text-xs text-slate-300">
<p className="font-medium text-slate-200">Radno vrijeme</p>
<p>Pon – Pet: 08:00 – 19:00</p>
<p>Subota: 08:00 – 14:00</p>
<p>Nedjeljom i praznicima: zatvoreno</p>
</div>
<div className="space-y-1.5 text-xs text-slate-300">
<p className="font-medium text-slate-200">Dodatne usluge</p>
<p>• Zamjensko vozilo (uz najavu)</p>
<p>• Mogućnost plaćanja karticama</p>
</div>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/90 overflow-hidden">
<div className="h-56 w-full bg-slate-900 flex items-center justify-center">
<div className="text-center space-y-1">
<i className="w-6 h-6 text-emerald-300 mx-auto" data-lucide="map-pin"></i>
<p className="text-sm font-medium tracking-tight text-slate-100">Karta lokacije</p>
<p className="text-xs text-slate-400">
                    Ovdje možete umetnuti interaktivnu kartu (npr. Google Maps iframe).
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-900 bg-slate-950/95">
<div className="max-w-6xl mx-auto py-6 sm:py-7 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-xl bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center">
<span className="text-xs font-semibold tracking-tight text-emerald-300">AG</span>
</div>
<p className="text-xs sm:text-sm text-slate-400">
            © <span id="year"></span> AG Autoservis. Sva prava pridržana.
          </p>
</div>
<div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
<span>Ulica Primjera 12, Zagreb</span>
<span className="hidden sm:inline-block h-1 w-1 rounded-full bg-slate-600"></span>
<span>OIB: 12345678901</span>
</div>
</div>
</footer>
</div>


    </>
  );
}
