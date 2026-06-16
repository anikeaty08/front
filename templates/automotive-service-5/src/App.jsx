import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4 opacity-80">
<div className="flex max-w-7xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex skew-x-[-20deg] gap-1">
<div className="w-2.5 h-7 bg-cyan-400"></div>
<div className="w-2.5 bg-blue-700 h-7"></div>
<div className="w-2.5 bg-red-600 h-7"></div>
</div>
<span className="text-2xl font-semibold italic text-slate-900 tracking-tight">ÁBEL KFT.</span>
</div>

<nav className="hidden md:flex gap-8 text-base font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#szolgaltatasok">Szolgáltatások</a>
<a className="hover:text-slate-900 transition-colors" href="#rolunk">Rólunk</a>
<a className="hover:text-slate-900 transition-colors" href="#kapcsolat">Kapcsolat &amp; Időpont</a>
</nav>

<div className="flex items-center">
<a className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-base font-medium hover:bg-slate-800 transition-colors shadow-sm" href="tel:+36305893904">
<iconify-icon height="18" icon="solar:phone-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="hidden sm:inline">+36 30 589 3904</span>
<span className="sm:hidden">Hívás</span>
</a>
</div>
</div>
</div>
</header>
<main className="flex-grow pt-16">

<section className="overflow-hidden lg:pt-32 lg:pb-32 bg-white border-slate-200/50 border-b pt-20 pb-24 relative">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-white to-white pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<h1 className="sm:text-5xl lg:text-6xl leading-tight text-4xl font-semibold text-slate-900 tracking-tight max-w-4xl mr-auto mb-6 ml-auto">Baranya vármegye megbízható autószervíze.</h1>
<p className="sm:text-2xl leading-relaxed text-xl text-slate-500 max-w-2xl mr-auto mb-10 ml-auto">Pontos diagnózis, tisztességes munka, határidőre kész </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-slate-800 transition-all shadow-sm hover:shadow-md" href="#kapcsolat">
<iconify-icon height="20" icon="solar:calendar-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        Időpontfoglalás
                    </a>
<a className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-xl text-lg font-medium hover:bg-slate-50 transition-all" href="#szolgaltatasok">
                        Szolgáltatásaink
                    </a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="szolgaltatasok">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="sm:text-3xl text-2xl font-semibold text-slate-900 tracking-tight mb-4">Miben tudunk segíteni?</h2>
<p className="text-lg text-slate-500">Átfogó autószerviz szolgáltatások személygépjárművek számára, korszerű eszközökkel és több mint 10 éves tapasztalattal Belvárdgyulán.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="hover:shadow-md transition-shadow bg-white border-slate-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center mb-6">
<iconify-icon height="24" icon="solar:settings-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Gépjármű karbantartás</h3>
<p className="text-base text-slate-500 leading-relaxed mb-6">
                            Időszakos szervizelés, olajcsere, szűrők cseréje és általános állapotfelmérés a biztonságos közlekedésért.
                        </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex text-slate-700 bg-slate-100 w-12 h-12 rounded-xl mb-6 items-center justify-center">
<iconify-icon height="24" icon="solar:laptop-linear" strokeWidth="1.5" style={{color: 'rgb(51, 65, 85)'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Diagnosztika</h3>
<p className="text-base text-slate-500 leading-relaxed mb-6">
                            Korszerű számítógépes hibakód olvasás, elektromos rendszerek vizsgálata és hibafeltárás minden típusnál.
                        </p>
</div>

<div className="hover:shadow-md transition-shadow bg-white border-slate-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="flex text-slate-700 bg-slate-100 w-12 h-12 rounded-xl mb-6 items-center justify-center">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Mechanikai javítások</h3>
<p className="text-base text-slate-500 leading-relaxed mb-6">
                            Fékrendszer, futómű, kipufogó és egyéb mechanikus alkatrészek szakszerű cseréje és javítása.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200/50" id="rolunk">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
<div className="">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-6">Rólunk</h2>
<div className="space-y-4 text-lg text-slate-500 leading-relaxed">
<p className="">
                                Az Ábel Autószervíz Kft. 2011 decembere óta áll ügyfelei rendelkezésére. Célunk a kezdetektől fogva az volt, hogy egy helyi, megbízható és ügyfélközpontú szervizt hozzunk létre.
                            </p>
<p className="">
                                Tisztában vagyunk azzal, hogy az autó elengedhetetlen a mindennapokban. Éppen ezért munkánkat a gyakorlatiasság, a transzparencia és a precizitás jellemzi. Különleges nyitvatartásunkkal (hétköznap délután és szombat délelőtt) azoknak is kedvezünk, akik munkaidőben nem tudják megoldani járművük szervizelését.
                            </p>
</div>
<div className="mt-8 grid grid-cols-2 gap-6">
<div className="">
<p className="text-3xl font-semibold tracking-tight text-slate-900">10+</p>
<p className="text-base text-slate-500 mt-1">Év tapasztalat</p>
</div>
<div className="">
<p className="text-3xl font-semibold tracking-tight text-slate-900">Helyi</p>
<p className="text-base text-slate-500 mt-1">Szakértelem</p>
</div>
</div>
</div>
<div className="aspect-square lg:aspect-auto lg:h-full min-h-[300px] flex overflow-hidden bg-slate-100 border-slate-200 border rounded-3xl relative items-center justify-center">

<div className="text-center p-6 text-slate-400">
<iconify-icon className="mb-4 mx-auto opacity-50" height="48" icon="solar:gallery-linear" strokeWidth="1.5" width="48"></iconify-icon>
<p className="text-base font-medium">Ide kéne kép a műhelyről!</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="kapcsolat">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-8">

<div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
<div className="relative z-10">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-8">Elérhetőségek és időpontfoglalás</h2>
<div className="space-y-8">
<div className="">
<p className="text-base font-medium text-slate-500 mb-2 flex items-center gap-2">
<iconify-icon height="18" icon="solar:map-point-linear" strokeWidth="1.5" width="18"></iconify-icon> Szerviz címe
                                    </p>
<p className="text-xl font-medium text-slate-900">7747 Belvárdgyula,</p>
<p className="text-lg text-slate-600">Ady Endre utca 326.</p>
</div>
<div className="">
<p className="text-base font-medium text-slate-500 mb-2 flex items-center gap-2">
<iconify-icon height="18" icon="solar:phone-linear" strokeWidth="1.5" width="18"></iconify-icon> Telefon / Időpontfoglalás
                                    </p>
<a className="text-2xl font-medium text-slate-900 hover:text-slate-600 transition-colors block" href="tel:+36305893904">+36 30 589 3904</a>
</div>
<div className="">
<p className="text-base font-medium text-slate-500 mb-2 flex items-center gap-2">
<iconify-icon height="18" icon="solar:letter-linear" strokeWidth="1.5" width="18"></iconify-icon> E-mail
                                    </p>
<a className="text-lg font-medium text-slate-900 hover:text-slate-600 transition-colors block break-all" href="mailto:abelkft@freemail.hu">abelkft@freemail.hu</a>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 sm:p-10 text-white bg-slate-900 border-slate-800 border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-md">
<h2 className="text-2xl font-semibold tracking-tight text-white mb-2">Nyitvatartás</h2>
<p className="text-base text-slate-400 mb-8">Kérjük, érkezés előtt egyeztessen időpontot telefonon.</p>
<ul className="space-y-4 text-base sm:text-lg">
<li className="flex justify-between items-center py-2 border-b border-slate-800">
<span className="text-slate-300">Hétfő - Csütörtök</span>
<span className="font-medium text-white">08:00 – 17:00</span>
</li>
<li className="flex justify-between items-center py-2 border-b border-slate-800">
<span className="text-slate-300">Péntek</span>
<span className="font-medium text-white">08:00 – 12:00</span>
</li>
<li className="flex justify-between items-center py-2">
<span className="text-slate-500">Szombat - Vasárnap</span>
<span className="font-medium text-slate-500">Zárva</span>
</li>
</ul>
</div>

<div className="lg:col-span-3 rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 h-64 lg:h-auto">
<iframe allowfullscreen="" className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=Belvárdgyula, Ady Endre utca 326&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{border: '0'}} width="100%">
</iframe>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
<div className="lg:col-span-2">
<span className="uppercase block text-xl font-semibold text-slate-900 tracking-tighter mb-4">ÁBEL KFT.  </span>
<p className="text-base text-slate-500 max-w-sm leading-relaxed">
                        Megbízható gépjármű javítás és karbantartás Belvárdgyulán. Kiemelt figyelem az ügyfelekre és a precíz munkavégzésre 2011 óta.
                    </p>
</div>
<div className="">
<h4 className="text-base font-semibold tracking-tight text-slate-900 mb-4">Navigáció</h4>
<ul className="space-y-3 text-base text-slate-500">
<li className=""><a className="hover:text-slate-900 transition-colors" href="#">Főoldal</a></li>
<li className=""><a className="hover:text-slate-900 transition-colors" href="#szolgaltatasok">Szolgáltatások</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#rolunk">Rólunk</a></li>
</ul>
</div>
<div className="">
<h4 className="text-base font-semibold tracking-tight text-slate-900 mb-4">Cégadatok (Impresszum)</h4>
<ul className="space-y-2 text-sm text-slate-500 leading-relaxed">
<li className=""><strong className="font-medium text-slate-700">Cégnév:</strong> Ábel Autószervíz Szolgáltató Kft.</li>
<li><strong className="font-medium text-slate-700">Székhely:</strong> 7745 Olasz, Kossuth u. 88/2.</li>
<li className=""><strong className="font-medium text-slate-700">Adószám:</strong> 23766309-2-02</li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-slate-400">© 2026 Ábel Autószervíz Kft. Minden jog fenntartva.</p>
<p className="text-sm text-slate-400">
                    Főtevékenység: 9531 – Gépjármű javítása, karbantartása
                </p>
</div>
</div>
</footer>

    </>
  );
}
