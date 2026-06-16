import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
<div className="max-w-6xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:card-recieved-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-bold tracking-tight text-slate-900 group-hover:opacity-80 transition-opacity">Kortoversikt</span>
</a>
<div className="hidden md:flex gap-1 text-sm font-medium text-slate-500">
<a className="px-4 py-2 rounded-full bg-slate-100 text-slate-900" href="#">Kredittkort</a>
<a className="px-4 py-2 rounded-full hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">Forbrukslån</a>
<a className="px-4 py-2 rounded-full hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">Boliglån</a>
<a className="px-4 py-2 rounded-full hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">Sparing</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
                    Logg inn
                </button>
<button className="md:hidden text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="bg-white pt-16 pb-12 md:pt-24 md:pb-16 border-b border-slate-200">
<div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 mb-8">
<iconify-icon className="text-emerald-500" icon="solar:verified-check-linear"></iconify-icon>
                Oppdatert: November 2023
            </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 max-w-3xl mx-auto">
                Finn beste kredittkort for din økonomi
            </h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10">
                Vi sammenligner over 45 norske kredittkort helt objektivt. Finn kortet med lavest rente, beste bonuspoeng eller reiseforsikring.
            </p>

<div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium text-slate-500 border-t border-slate-100 pt-8 mt-8 inline-block w-full max-w-4xl">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-900" icon="solar:shield-check-linear" width="18"></iconify-icon>
                    Helt gratis tjeneste
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-900" icon="solar:graph-up-linear" width="18"></iconify-icon>
                    Oppdaterte renter
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-900" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
                    Over 50 000 brukere
                </div>
</div>
</div>
</section>

<div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
<div className="grid lg:grid-cols-12 gap-8">

<aside className="lg:col-span-3 space-y-8">
<div>
<h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
<iconify-icon icon="solar:filter-linear"></iconify-icon>
                        Filtrer søk
                    </h3>
<div className="space-y-3">
<label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 bg-white cursor-pointer hover:border-slate-300 transition-colors">
<input checked="" className="custom-checkbox relative w-5 h-5 appearance-none border-2 border-slate-300 rounded transition-colors cursor-pointer" type="checkbox"/>
<span className="text-sm font-medium text-slate-700">Alle kort</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg border border-transparent hover:bg-white hover:shadow-sm transition-all cursor-pointer">
<input className="custom-checkbox relative w-5 h-5 appearance-none border-2 border-slate-300 rounded transition-colors cursor-pointer" type="checkbox"/>
<span className="text-sm font-medium text-slate-600">Reisefordeler</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg border border-transparent hover:bg-white hover:shadow-sm transition-all cursor-pointer">
<input className="custom-checkbox relative w-5 h-5 appearance-none border-2 border-slate-300 rounded transition-colors cursor-pointer" type="checkbox"/>
<span className="text-sm font-medium text-slate-600">Drivstoffrabatt</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg border border-transparent hover:bg-white hover:shadow-sm transition-all cursor-pointer">
<input className="custom-checkbox relative w-5 h-5 appearance-none border-2 border-slate-300 rounded transition-colors cursor-pointer" type="checkbox"/>
<span className="text-sm font-medium text-slate-600">Dagligvare</span>
</label>
</div>
</div>
<div className="pt-6 border-t border-slate-200">
<h4 className="text-sm font-medium text-slate-900 mb-4">Årlig gebyr</h4>
<div className="relative pt-6 pb-2">
<input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer" max="1000" min="0" type="range"/>
<div className="flex justify-between mt-2 text-xs text-slate-500 font-medium">
<span>0 kr</span>
<span>1000 kr+</span>
</div>
</div>
</div>
</aside>

<div className="lg:col-span-9 space-y-6">

<div className="flex items-center justify-between pb-4">
<span className="text-sm font-medium text-slate-500">Viser <span className="text-slate-900 font-semibold">45</span> kredittkort</span>
<div className="flex items-center gap-2">
<span className="text-sm text-slate-500 hidden sm:inline">Sorter etter:</span>
<select className="bg-white border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-slate-900 focus:border-slate-900 block p-2.5 font-medium cursor-pointer">
<option>Mest populær</option>
<option>Lavest rente</option>
<option>Høyest bonus</option>
</select>
</div>
</div>

<article className="group bg-white rounded-2xl border border-slate-200 overflow-hidden compare-card relative">

<div className="absolute top-0 right-0 bg-slate-900 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-bl-xl z-10">
                        Testvinner 2023
                    </div>
<div className="grid md:grid-cols-12 p-6 md:p-8 gap-6 md:gap-0">

<div className="md:col-span-3 flex flex-col justify-center items-start md:border-r md:border-slate-100 md:pr-6">
<div className="bg-red-500 w-full h-[140px] rounded-xl relative shadow-lg mb-4 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-red-600 to-red-400"></div>
<div className="relative text-white font-bold text-lg tracking-wider z-10">Norwegian</div>
<iconify-icon className="absolute bottom-[-10px] right-[-10px] text-white opacity-20 text-8xl" icon="solar:plane-linear"></iconify-icon>
</div>
<h3 className="font-bold text-slate-900 text-lg">Bank Norwegian</h3>
<div className="flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded mt-2">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
                                Beste reisekort
                            </div>
</div>

<div className="md:col-span-6 md:px-8 grid grid-cols-2 md:grid-cols-3 gap-y-6 items-center">
<div>
<div className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">Eff. Rente</div>
<div className="text-2xl font-bold text-slate-900 tracking-tight">23,4%</div>
</div>
<div>
<div className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">Kredittgrense</div>
<div className="text-lg font-semibold text-slate-900">100 000 kr</div>
</div>
<div>
<div className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">Rentefri</div>
<div className="text-lg font-semibold text-slate-900">45 dager</div>
</div>

<div className="col-span-2 md:col-span-3 pt-2">
<ul className="space-y-2">
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 text-lg mt-0.5 min-w-[18px]" icon="solar:check-circle-bold"></iconify-icon>
<span>1% Cashpoints på alle varekjøp</span>
</li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 text-lg mt-0.5 min-w-[18px]" icon="solar:check-circle-bold"></iconify-icon>
<span>Gratis reise- og avbestillingsforsikring</span>
</li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 text-lg mt-0.5 min-w-[18px]" icon="solar:check-circle-bold"></iconify-icon>
<span>Ingen årsavgift eller uttaksgebyr i utlandet</span>
</li>
</ul>
</div>
</div>

<div className="md:col-span-3 flex flex-col justify-center gap-3 md:pl-6 md:border-l md:border-slate-100">
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3.5 px-4 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2 text-sm">
                                Søk nå
                                <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<a className="w-full bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-medium py-3 px-4 rounded-xl transition-colors text-center text-sm" href="#">
                                Les omtale
                            </a>
</div>
</div>

<div className="bg-slate-50 px-6 py-3 border-t border-slate-100 text-[11px] text-slate-500 leading-normal">
<span className="font-semibold">Priseksempel:</span> Eff.rente 23,4 %, 15 000 kr o/12 mnd. Kostnad 1 780 kr. Totalt 16 780 kr.
                    </div>
</article>

<article className="group bg-white rounded-2xl border border-slate-200 overflow-hidden compare-card">
<div className="grid md:grid-cols-12 p-6 md:p-8 gap-6 md:gap-0">

<div className="md:col-span-3 flex flex-col justify-center items-start md:border-r md:border-slate-100 md:pr-6">
<div className="bg-slate-100 w-full h-[140px] rounded-xl relative shadow-sm mb-4 flex items-center justify-center overflow-hidden border border-slate-200">
<div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-100"></div>
<div className="relative text-red-600 font-bold text-lg z-10">Santander</div>
</div>
<h3 className="font-bold text-slate-900 text-lg">Gebyrfri Visa</h3>
<div className="flex items-center gap-1 text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded mt-2">
<iconify-icon icon="solar:star-linear"></iconify-icon>
                                Mest populær
                            </div>
</div>

<div className="md:col-span-6 md:px-8 grid grid-cols-2 md:grid-cols-3 gap-y-6 items-center">
<div>
<div className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">Eff. Rente</div>
<div className="text-2xl font-bold text-slate-900 tracking-tight">24,6%</div>
</div>
<div>
<div className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">Kredittgrense</div>
<div className="text-lg font-semibold text-slate-900">100 000 kr</div>
</div>
<div>
<div className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">Rentefri</div>
<div className="text-lg font-semibold text-slate-900">50 dager</div>
</div>
<div className="col-span-2 md:col-span-3 pt-2">
<ul className="space-y-2">
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-slate-300 text-lg mt-0.5 min-w-[18px]" icon="solar:check-circle-bold"></iconify-icon>
<span>Rabatt på over 200 restauranter</span>
</li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-slate-300 text-lg mt-0.5 min-w-[18px]" icon="solar:check-circle-bold"></iconify-icon>
<span>Inkludert reiseforsikring</span>
</li>
</ul>
</div>
</div>

<div className="md:col-span-3 flex flex-col justify-center gap-3 md:pl-6 md:border-l md:border-slate-100">
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-4 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2 text-sm">
                                Søk nå
                                <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<a className="w-full bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-medium py-3 px-4 rounded-xl transition-colors text-center text-sm" href="#">
                                Les omtale
                            </a>
</div>
</div>
<div className="bg-slate-50 px-6 py-3 border-t border-slate-100 text-[11px] text-slate-500 leading-normal">
<span className="font-semibold">Priseksempel:</span> Eff.rente 24,6 %, 15 000 kr o/12 mnd. Kostnad 1 890 kr. Totalt 16 890 kr.
                    </div>
</article>

<article className="group bg-white rounded-2xl border border-slate-200 overflow-hidden compare-card">
<div className="grid md:grid-cols-12 p-6 md:p-8 gap-6 md:gap-0">

<div className="md:col-span-3 flex flex-col justify-center items-start md:border-r md:border-slate-100 md:pr-6">
<div className="bg-slate-800 w-full h-[140px] rounded-xl relative shadow-sm mb-4 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"></div>
<div className="relative text-white font-bold text-lg z-10 tracking-tight">Morrow</div>
</div>
<h3 className="font-bold text-slate-900 text-lg">Morrow Bank</h3>
<div className="flex items-center gap-1 text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded mt-2">
<iconify-icon icon="solar:wallet-money-linear"></iconify-icon>
                                Høy bonus
                            </div>
</div>

<div className="md:col-span-6 md:px-8 grid grid-cols-2 md:grid-cols-3 gap-y-6 items-center">
<div>
<div className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">Eff. Rente</div>
<div className="text-2xl font-bold text-slate-900 tracking-tight">21,9%</div>
</div>
<div>
<div className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">Kredittgrense</div>
<div className="text-lg font-semibold text-slate-900">75 000 kr</div>
</div>
<div>
<div className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">Rentefri</div>
<div className="text-lg font-semibold text-slate-900">50 dager</div>
</div>
<div className="col-span-2 md:col-span-3 pt-2">
<ul className="space-y-2">
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-slate-300 text-lg mt-0.5 min-w-[18px]" icon="solar:check-circle-bold"></iconify-icon>
<span>2% bonus på alle nettkjøp</span>
</li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-slate-300 text-lg mt-0.5 min-w-[18px]" icon="solar:check-circle-bold"></iconify-icon>
<span>4% bonus hos Komplett.no</span>
</li>
</ul>
</div>
</div>

<div className="md:col-span-3 flex flex-col justify-center gap-3 md:pl-6 md:border-l md:border-slate-100">
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-4 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2 text-sm">
                                Søk nå
                                <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<a className="w-full bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-medium py-3 px-4 rounded-xl transition-colors text-center text-sm" href="#">
                                Les omtale
                            </a>
</div>
</div>
<div className="bg-slate-50 px-6 py-3 border-t border-slate-100 text-[11px] text-slate-500 leading-normal">
<span className="font-semibold">Priseksempel:</span> Eff.rente 21,9 %, 15 000 kr o/12 mnd. Kostnad 1 650 kr. Totalt 16 650 kr.
                    </div>
</article>

<button className="w-full py-4 text-sm font-medium text-slate-500 border border-dashed border-slate-300 rounded-xl hover:border-slate-400 hover:text-slate-900 transition-colors">
                    Vis 42 flere kredittkort
                </button>
</div>
</div>
</div>

<section className="bg-white border-t border-slate-200 py-16 md:py-24">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Hvordan velge riktig kredittkort?</h2>
<div className="grid md:grid-cols-2 gap-12">
<div>
<h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900 mb-4">
<iconify-icon className="text-blue-600 text-xl" icon="solar:plane-bold-duotone"></iconify-icon>
                        Reise og ferie
                    </h3>
<p className="text-slate-500 leading-relaxed mb-6">
                        Skal du bruke kortet i utlandet, bør du se etter kort med lavt valutapåslag og gratis reiseforsikring. Bank Norwegian og SAS Eurobonus er populære valg for reisende.
                    </p>
</div>
<div>
<h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900 mb-4">
<iconify-icon className="text-blue-600 text-xl" icon="solar:tag-price-bold-duotone"></iconify-icon>
                        Cashback og rabatter
                    </h3>
<p className="text-slate-500 leading-relaxed mb-6">
                        Mange kort gir penger tilbake når du handler i dagligvarebutikker eller fyller drivstoff. Sjekk "Cashback"-kategorien for å finne kort som sparer deg penger i hverdagen.
                    </p>
</div>
<div>
<h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900 mb-4">
<iconify-icon className="text-blue-600 text-xl" icon="solar:card-search-bold-duotone"></iconify-icon>
                        Disiplinert bruk
                    </h3>
<p className="text-slate-500 leading-relaxed mb-6">
                        Betaler du alltid hele fakturaen ved forfall? Da er renten mindre viktig. Fokuser heller på fordelsprogrammer, gebyrfrihet og forsikringer som følger med kortet.
                    </p>
</div>
<div>
<h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900 mb-4">
<iconify-icon className="text-blue-600 text-xl" icon="solar:shield-warning-bold-duotone"></iconify-icon>
                        Refinansiering
                    </h3>
<p className="text-slate-500 leading-relaxed mb-6">
                        Har du dyr kredittkortgjeld? Vi anbefaler å se på refinansiering eller forbrukslån med lavere rente for å samle gjelden og redusere månedlige kostnader.
                    </p>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-16 px-6">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-white text-2xl" icon="solar:card-recieved-bold"></iconify-icon>
<span className="text-xl font-bold text-white tracking-tight">Kortoversikt</span>
</div>
<p className="max-w-xs text-sm leading-relaxed mb-6">
                        Norges mest oversiktlige sammenligningstjeneste for privatøkonomi. Vi hjelper deg å ta smarte valg.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Tjenester</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Alle kredittkort</a></li>
<li><a className="hover:text-white transition-colors" href="#">Forbrukslån</a></li>
<li><a className="hover:text-white transition-colors" href="#">Boliglån</a></li>
<li><a className="hover:text-white transition-colors" href="#">Refinansiering</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Om oss</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Kontakt</a></li>
<li><a className="hover:text-white transition-colors" href="#">Personvern</a></li>
<li><a className="hover:text-white transition-colors" href="#">Vilkår</a></li>
<li><a className="hover:text-white transition-colors" href="#">Annonsering</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2023 Kortoversikt AS. Alle rettigheter reservert.</p>
<p>Renteeksempler er veiledende og kan variere.</p>
</div>
</div>
</footer>

    </>
  );
}
