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



        document.addEventListener('DOMContentLoaded', () => {
            const sqmInput = document.getElementById('sqm');
            const sqmDisplay = document.getElementById('sqm-val');
            const typeInputs = document.querySelectorAll('input[name="type"]');
            const priceDisplay = document.getElementById('total-price');
            const freqSelect = document.getElementById('freq');

            function calculatePrice() {
                const sqm = parseInt(sqmInput.value);
                sqmDisplay.textContent = sqm;

                let type = 'hem';
                typeInputs.forEach(input => {
                    if (input.checked) type = input.value;
                });

                // Price model (Dummy logic)
                let baseRate = 0;
                if (type === 'hem') baseRate = 22; // kr/sqm
                if (type === 'stor') baseRate = 45; 
                if (type === 'flytt') baseRate = 60;

                let total = sqm * baseRate;

                // Adjust for Frequency if Hemstäd
                if (type === 'hem') {
                    const freq = freqSelect.value;
                    if (freq === '4') total *= 1.2; // One time is more expensive per occasion
                }

                // Minimum pricing
                let minPrice = 500;
                if (type === 'flytt') minPrice = 1500;
                if (total < minPrice) total = minPrice;

                // Apply RUT (50% deduction on simplified labour cost)
                const finalPrice = Math.round(total * 0.5);

                priceDisplay.textContent = finalPrice.toLocaleString('sv-SE');
            }

            sqmInput.addEventListener('input', calculatePrice);
            typeInputs.forEach(input => input.addEventListener('change', calculatePrice));
            freqSelect.addEventListener('change', calculatePrice);

            calculatePrice(); // Init
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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center space-x-2 rtl:space-x-reverse group" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:sparkles" data-width="18"></span>
</div>
<span className="self-center text-lg font-semibold tracking-tight text-slate-900 group-hover:opacity-80 transition-opacity">RENTSERVICE.</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<a className="text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all" href="#bokning">Boka nu</a>
<button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Öppna meny</span>
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-100 rounded-lg bg-slate-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent text-sm">
<li><a className="block py-2 px-3 text-slate-600 rounded hover:text-slate-900 md:p-0 transition-colors" href="#tjanster">Tjänster</a></li>
<li><a className="block py-2 px-3 text-slate-600 rounded hover:text-slate-900 md:p-0 transition-colors" href="#priser">Prislista</a></li>
<li><a className="block py-2 px-3 text-slate-600 rounded hover:text-slate-900 md:p-0 transition-colors" href="#process">Så funkar det</a></li>
<li><a className="block py-2 px-3 text-slate-600 rounded hover:text-slate-900 md:p-0 transition-colors" href="#omdome">Omdömen</a></li>
</ul>
</div>
</div>
</nav>

<main>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50 border-b border-slate-200" id="bokning">

<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-r from-blue-100/40 to-indigo-100/40 blur-3xl"></div>
<div className="absolute top-[20%] right-[0%] w-[40%] h-[40%] rounded-full bg-gradient-to-l from-slate-200/40 to-gray-100/40 blur-3xl"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

<div className="lg:col-span-7 pt-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-medium mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                        Tillgängliga för bokning denna vecka
                    </div>
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                        Städning som märks. <br/> <span className="text-slate-400">Men inte syns.</span>
</h1>
<p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-xl">
                        Vi sköter städningen så du kan fokusera på livet. Beräkna ditt pris direkt här på sidan och boka en tid som passar dig. Inga bindningstider, bara rena resultat.
                    </p>
<div className="flex flex-wrap gap-8 text-sm font-medium text-slate-600">
<div className="flex items-center gap-2">
<div className="bg-blue-50 p-1.5 rounded-md text-blue-600"><span className="iconify" data-icon="lucide:check" data-width="16"></span></div>
<span>RUT-avdrag direkt</span>
</div>
<div className="flex items-center gap-2">
<div className="bg-blue-50 p-1.5 rounded-md text-blue-600"><span className="iconify" data-icon="lucide:check" data-width="16"></span></div>
<span>Ansvarsförsäkring</span>
</div>
<div className="flex items-center gap-2">
<div className="bg-blue-50 p-1.5 rounded-md text-blue-600"><span className="iconify" data-icon="lucide:check" data-width="16"></span></div>
<span>Nöjd-kund-garanti</span>
</div>
</div>
</div>

<div className="lg:col-span-5 w-full">
<div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 p-6 md:p-8 relative transition-all hover:shadow-2xl hover:shadow-slate-200/50 duration-500">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Snabbkalkyl</h3>
<span className="text-xs font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded">Steg 1 av 2</span>
</div>
<form className="space-y-6" id="price-calculator">

<div>
<div className="flex justify-between mb-3">
<label className="text-sm font-medium text-slate-700" htmlFor="sqm">Bostadens storlek</label>
<div className="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded"><span id="sqm-val">60</span> kvm</div>
</div>
<input className="w-full" id="sqm" max="250" min="20" step="5" type="range" value="60"/>
<div className="flex justify-between mt-2 text-xs text-slate-400">
<span>20 kvm</span>
<span>250 kvm</span>
</div>
</div>

<div className="grid grid-cols-3 gap-3">
<label className="cursor-pointer relative">
<input checked="" className="peer sr-only" name="type" type="radio" value="hem"/>
<div className="h-full rounded-xl border border-slate-200 bg-white p-3 text-center transition-all hover:bg-slate-50 peer-checked:border-slate-900 peer-checked:bg-slate-900 peer-checked:text-white">
<span className="block text-xs font-semibold mb-1">Hem</span>
<span className="block text-[10px] opacity-70">Veckostäd</span>
</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="type" type="radio" value="stor"/>
<div className="h-full rounded-xl border border-slate-200 bg-white p-3 text-center transition-all hover:bg-slate-50 peer-checked:border-slate-900 peer-checked:bg-slate-900 peer-checked:text-white">
<span className="block text-xs font-semibold mb-1">Stor</span>
<span className="block text-[10px] opacity-70">Djuprengöring</span>
</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="type" type="radio" value="flytt"/>
<div className="h-full rounded-xl border border-slate-200 bg-white p-3 text-center transition-all hover:bg-slate-50 peer-checked:border-slate-900 peer-checked:bg-slate-900 peer-checked:text-white">
<span className="block text-xs font-semibold mb-1">Flytt</span>
<span className="block text-[10px] opacity-70">Besiktning</span>
</div>
</label>
</div>

<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-500 uppercase tracking-wide mb-1.5">Stad</label>
<div className="relative">
<select className="appearance-none w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-slate-900 focus:border-slate-900 block p-2.5 pr-8 transition-colors hover:bg-slate-100" id="city">
<option value="sthlm">Stockholm</option>
<option value="gbs">Göteborg</option>
<option value="malmo">Malmö</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
<span className="iconify" data-icon="lucide:chevron-down" data-width="14"></span>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 uppercase tracking-wide mb-1.5">Frekvens</label>
<div className="relative">
<select className="appearance-none w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-slate-900 focus:border-slate-900 block p-2.5 pr-8 transition-colors hover:bg-slate-100" id="freq">
<option value="1">Varje vecka</option>
<option value="2">Varannan vecka</option>
<option value="4">En gång</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
<span className="iconify" data-icon="lucide:chevron-down" data-width="14"></span>
</div>
</div>
</div>
</div>

<div className="pt-6 border-t border-slate-100 mt-2">
<div className="flex justify-between items-center mb-4">
<span className="text-sm text-slate-500">Att betala (efter RUT)</span>
<div className="text-right flex items-baseline gap-1">
<span className="text-2xl font-bold text-slate-900 tracking-tight" id="total-price">0</span>
<span className="text-sm font-medium text-slate-500">kr</span>
</div>
</div>
<button className="group w-full flex items-center justify-center gap-2 text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:ring-slate-200 font-medium rounded-lg text-sm px-5 py-3.5 transition-all" type="button">
                                    Gå vidare till bokning
                                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<p className="text-[10px] text-center text-slate-400 mt-3">Priset är en uppskattning. Exakt pris bekräftas vid bokning.</p>
</div>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="tjanster">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Tjänster utformade för ditt hem</h2>
<p className="text-slate-500 text-lg">Oavsett om du behöver hjälp varje vecka eller en rejäl storstädning inför säsongsbyte har vi lösningen.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors" href="#priser">
                        Se fullständig prislista <span className="iconify" data-icon="lucide:arrow-down" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-slate-200 transition-colors">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:home" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Hemstädning</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                            Löpande städning av ditt hem. Vi dammar, dammsuger, moppar golv, rengör kök och badrum samt piffar till.
                        </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600">
<span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><span className="iconify" data-icon="lucide:check" data-width="12"></span></span>
                                Samma städare varje gång
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><span className="iconify" data-icon="lucide:check" data-width="12"></span></span>
                                Ingen bindningstid
                            </li>
</ul>
</div>

<div className="group relative bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-slate-200 transition-colors">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:box-select" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Flyttstädning</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                            En totalrengöring av bostaden. Vi följer Mäklarsamfundets riktlinjer för att garantera att städningen blir godkänd.
                        </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600">
<span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><span className="iconify" data-icon="lucide:check" data-width="12"></span></span>
                                Garanti mot anmärkning
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><span className="iconify" data-icon="lucide:check" data-width="12"></span></span>
                                Fönsterputs ingår
                            </li>
</ul>
</div>

<div className="group relative bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-slate-200 transition-colors">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:sparkles" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Storstädning</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                            För dig som vill ha en nystart. Vi går på djupet och tar hand om lister, dörrkarmar, bakom element och ovanpå skåp.
                        </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600">
<span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><span className="iconify" data-icon="lucide:check" data-width="12"></span></span>
                                Alla ytor rengörs
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><span className="iconify" data-icon="lucide:check" data-width="12"></span></span>
                                Perfekt inför visning
                            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="priser">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-2 block">Inga dolda avgifter</span>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Transparent prissättning</h2>
<p className="text-slate-500 max-w-2xl mx-auto">Nedan ser du våra cirkapriser baserat på kvadratmeter. Alla priser visas efter 50% RUT-avdrag.</p>
</div>
<div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-sm text-left">
<thead className="text-xs text-slate-500 uppercase bg-slate-50/50 border-b border-slate-100">
<tr>
<th className="px-6 py-5 font-medium" scope="col">Bostadsyta</th>
<th className="px-6 py-5 font-medium text-slate-900" scope="col">Hemstädning <span className="block text-[10px] text-slate-400 font-normal normal-case mt-1">per tillfälle</span></th>
<th className="px-6 py-5 font-medium" scope="col">Storstädning <span className="block text-[10px] text-slate-400 font-normal normal-case mt-1">engångspris</span></th>
<th className="px-6 py-5 font-medium" scope="col">Flyttstädning <span className="block text-[10px] text-slate-400 font-normal normal-case mt-1">engångspris</span></th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50/80 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900">0 – 39 kvm</td>
<td className="px-6 py-4">fr. 550 kr</td>
<td className="px-6 py-4 text-slate-500">fr. 1 600 kr</td>
<td className="px-6 py-4 text-slate-500">fr. 2 200 kr</td>
</tr>
<tr className="hover:bg-slate-50/80 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900">40 – 59 kvm</td>
<td className="px-6 py-4">fr. 750 kr</td>
<td className="px-6 py-4 text-slate-500">fr. 2 000 kr</td>
<td className="px-6 py-4 text-slate-500">fr. 2 800 kr</td>
</tr>
<tr className="hover:bg-slate-50/80 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900">60 – 79 kvm</td>
<td className="px-6 py-4">fr. 950 kr</td>
<td className="px-6 py-4 text-slate-500">fr. 2 400 kr</td>
<td className="px-6 py-4 text-slate-500">fr. 3 400 kr</td>
</tr>
<tr className="hover:bg-slate-50/80 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900">80 – 99 kvm</td>
<td className="px-6 py-4">fr. 1 150 kr</td>
<td className="px-6 py-4 text-slate-500">fr. 2 800 kr</td>
<td className="px-6 py-4 text-slate-500">fr. 3 900 kr</td>
</tr>
<tr className="hover:bg-slate-50/80 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900">100+ kvm</td>
<td className="px-6 py-4"><a className="text-blue-600 hover:underline" href="#">Begär offert</a></td>
<td className="px-6 py-4"><a className="text-blue-600 hover:underline" href="#">Begär offert</a></td>
<td className="px-6 py-4"><a className="text-blue-600 hover:underline" href="#">Begär offert</a></td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex gap-4 items-start">
<div className="mt-1 text-blue-600"><span className="iconify" data-icon="lucide:info" data-width="20"></span></div>
<div>
<h4 className="font-medium text-blue-900 text-sm">Vad ingår?</h4>
<p className="text-xs text-blue-800/80 mt-1">Städmaterial och utrustning ingår alltid i priset för flyttstädning. För hemstädning använder vi oftast din utrustning men kan ta med eget mot tillägg.</p>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-lg p-4 flex gap-4 items-start">
<div className="mt-1 text-slate-400"><span className="iconify" data-icon="lucide:credit-card" data-width="20"></span></div>
<div>
<h4 className="font-medium text-slate-900 text-sm">Betalning</h4>
<p className="text-xs text-slate-500 mt-1">Faktura skickas via e-post efter utfört arbete. Vi har 14 dagars betalningsvillkor.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Enkelhet i varje steg</h2>
<div className="space-y-10">
<div className="flex gap-5">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full border-2 border-slate-900 text-slate-900 flex items-center justify-center font-bold text-sm bg-white z-10">1</div>
<div className="h-full w-0.5 bg-slate-100 my-2"></div>
</div>
<div className="pb-8">
<h4 className="text-lg font-semibold text-slate-900">Fyll i uppgifter</h4>
<p className="text-slate-500 mt-2 text-sm">Använd kalkylatorn längst upp på sidan för att se ditt pris direkt. Det tar mindre än en minut.</p>
</div>
</div>
<div className="flex gap-5">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full border-2 border-slate-200 text-slate-400 flex items-center justify-center font-bold text-sm bg-white z-10">2</div>
<div className="h-full w-0.5 bg-slate-100 my-2"></div>
</div>
<div className="pb-8">
<h4 className="text-lg font-semibold text-slate-900">Vi matchar personal</h4>
<p className="text-slate-500 mt-2 text-sm">Vi hittar en stjärna i vårt team som passar ditt schema och dina behov.</p>
</div>
</div>
<div className="flex gap-5">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full border-2 border-slate-200 text-slate-400 flex items-center justify-center font-bold text-sm bg-white z-10">3</div>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900">Klart!</h4>
<p className="text-slate-500 mt-2 text-sm">Vi dyker upp på avtalad tid. Du behöver inte ens vara hemma (nyckelhantering löser vi säkert).</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-2xl transform rotate-3"></div>
<div className="relative bg-slate-900 rounded-2xl p-8 lg:p-12 text-white shadow-2xl">
<span className="iconify text-slate-400 mb-6" data-icon="lucide:quote" data-width="40"></span>
<h3 className="text-2xl font-medium leading-relaxed mb-6">
                                "Det absolut smidigaste sättet att boka städning. Inga konstiga telefonsamtal, bara raka rör och ett fantastiskt resultat."
                            </h3>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">MK</div>
<div>
<div className="font-semibold">Maria Karlsson</div>
<div className="text-slate-400 text-xs">Kund i Stockholm</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="omdome">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12">Omdömen från grannskapet</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-left">
<div className="flex gap-1 text-yellow-400 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-slate-600 text-sm mb-4">"Supernöjd med flyttstädningen! Hyresvärden godkände allt direkt utan några frågor."</p>
<span className="text-xs font-semibold text-slate-900">Johan P.</span>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-left">
<div className="flex gap-1 text-yellow-400 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-slate-600 text-sm mb-4">"Vår städare är en pärla. Kommer alltid i tid och lämnar huset skinande rent."</p>
<span className="text-xs font-semibold text-slate-900">Familjen Eriksson</span>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-left">
<div className="flex gap-1 text-yellow-400 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify text-slate-200" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-slate-600 text-sm mb-4">"Bra service och lätt att boka om tider när det behövs. Rekommenderas starkt!"</p>
<span className="text-xs font-semibold text-slate-900">Anders L.</span>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-slate-900 text-slate-400 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<span className="text-white text-lg font-bold tracking-tight mb-4 block">RENTSERVICE.</span>
<p className="text-xs leading-relaxed max-w-xs">
                        Vi är ett modernt städbolag som sätter kvalitet och trygghet i första rummet. F-skatt och försäkringar är en självklarhet.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Snabblänkar</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:text-white transition-colors" href="#tjanster">Våra tjänster</a></li>
<li><a className="hover:text-white transition-colors" href="#priser">Priser</a></li>
<li><a className="hover:text-white transition-colors" href="#process">Så funkar det</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Legal</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:text-white transition-colors" href="#">Integritetspolicy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Användarvillkor</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cookies</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Kontakt</h4>
<ul className="space-y-2 text-xs">
<li className="flex items-center gap-2"><span className="iconify" data-icon="lucide:mail" data-width="14"></span> info@rentservice.se</li>
<li className="flex items-center gap-2"><span className="iconify" data-icon="lucide:phone" data-width="14"></span> 08-123 45 67</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
<p>© 2023 Rentservice AB. Alla rättigheter förbehållna.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="18"></span></a>
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="18"></span></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
