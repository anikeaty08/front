import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        window.addEventListener('load', () => {
            lucide.createIcons();
            calculatePrice(); // Run calculation on load
        });

        // Portfolio Filtering Logic
        function filterPortfolio(category) {
            const items = document.querySelectorAll('.portfolio-item');
            const buttons = document.querySelectorAll('.filter-btn');

            // Update button styles
            buttons.forEach(btn => {
                if (btn.getAttribute('onclick').includes(category)) {
                    btn.classList.remove('bg-stone-100', 'text-stone-600');
                    btn.classList.add('bg-stone-900', 'text-white');
                } else {
                    btn.classList.add('bg-stone-100', 'text-stone-600');
                    btn.classList.remove('bg-stone-900', 'text-white');
                }
            });

            // Filter grid items
            items.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block';
                    // Trigger reflow for fade animation
                    item.classList.remove('fade-in');
                    void item.offsetWidth; 
                    item.classList.add('fade-in');
                } else {
                    item.style.display = 'none';
                }
            });
        }

        // Calculator Logic
        function calculatePrice() {
            // Get selected material price
            const materialRadio = document.querySelector('input[name="material"]:checked');
            const materialPrice = parseInt(materialRadio.value);
            
            // Get Material Name label
            const materialCard = materialRadio.nextElementSibling;
            const materialName = materialCard.querySelector('.material-name').innerText;
            document.getElementById('summaryMaterial').innerText = materialName;

            // Get dimensions
            const width = parseInt(document.getElementById('width').value);
            const height = parseInt(document.getElementById('height').value);
            const depth = parseInt(document.getElementById('depth').value);

            // Update range labels
            document.getElementById('widthVal').innerText = width + '"';
            document.getElementById('heightVal').innerText = height + '"';
            document.getElementById('depthVal').innerText = depth + '"';

            // Calculate Volume (simplified cubic feet: inches / 1728)
            const volume = (width * height * depth) / 1728;
            document.getElementById('summaryVolume').innerText = volume.toFixed(1) + ' ft³';

            // Base Calculations
            let basePrice = volume * materialPrice;
            
            // Addons
            let addonCost = 0;
            if(document.getElementById('softClose').checked) addonCost += 150;
            if(document.getElementById('glassFront').checked) addonCost += 200;
            if(document.getElementById('installation').checked) addonCost += 300;

            document.getElementById('addonCost').innerText = '$' + addonCost;

            // Labor (Fixed base + small multiplier for size)
            const labor = 450; 
            
            // Total
            const total = Math.floor(basePrice + labor + addonCost);
            document.getElementById('totalPrice').innerText = '$' + total.toLocaleString();
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-40 bg-[#F5F2EF]/80 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="p-1.5 rounded-md bg-stone-900 text-white">
<svg className="lucide lucide-hammer w-5 h-5" data-lucide="hammer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></svg>
</div>
<span className="text-sm font-semibold text-stone-900 tracking-tight">CRAFT &amp; WOOD</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium transition-colors text-stone-600 hover:text-stone-900" href="#collection">Collectie</a>
<a className="text-sm font-medium transition-colors text-stone-600 hover:text-stone-900" href="#portfolio">Projecten</a>
<a className="text-sm font-medium transition-colors text-stone-600 hover:text-stone-900" href="#calculator">Prijzen</a>
<a className="text-sm font-medium transition-colors text-stone-600 hover:text-stone-900" href="#faq">FAQ</a>
<a className="text-sm font-medium transition-colors text-stone-600 hover:text-stone-900" href="#contact">Contact</a>
</div>
<button className="text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-sm bg-stone-900 hover:bg-stone-800 text-white">
                Offerte Aanvragen
            </button>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Hout texture" className="w-full h-full object-cover object-center lg:object-right" src="https://images.unsplash.com/photo-1678988223920-82b0b3136446?q=80&amp;w=1171&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#F5F2EF] via-[#F5F2EF]/95 to-transparent/10 md:bg-gradient-to-r md:from-[#F5F2EF] md:via-[#F5F2EF] md:to-transparent"></div>
</div>
<div className="z-10 max-w-7xl mx-auto px-6 relative">
<div className="max-w-2xl">
<span className="inline-block uppercase text-xs font-semibold text-stone-600 tracking-[0.2em] bg-white/50 border-stone-300 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm">Handgemaakte Meubels in Limburg</span>
<h1 className="leading-[0.95] uppercase md:text-7xl lg:text-7xl text-4xl font-semibold text-stone-950 tracking-tighter mb-8">Moderne Productie <br className=""/> van Houten Meubels</h1>
<p className="leading-relaxed text-lg md:text-xl text-stone-700 mb-10 max-w-lg">
                    Wij combineren traditioneel vakmanschap met moderne precisie om unieke meubels te creëren van de beste natuurlijke houtsoorten.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-16">
<a className="inline-flex items-center justify-center transition-all hover:shadow-xl hover:-translate-y-0.5 hover:bg-stone-800 font-medium text-white bg-stone-900 rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg" href="#calculator">Bereken je projectprijs</a>
<a className="inline-flex items-center justify-center transition-all hover:bg-stone-50 font-medium text-stone-900 bg-white border-stone-200 border rounded-full pt-4 pr-8 pb-4 pl-8" href="#portfolio">Offerte ontvangen</a>
</div>
<div className="flex items-center gap-8 md:gap-12 pt-8 border-t border-stone-300/60">
<div className="">
<div className="flex items-center gap-1.5 mb-1">
<svg className="lucide lucide-star w-5 h-5 fill-stone-900 text-stone-900" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-2xl font-bold tracking-tight text-stone-900">4.9</span>
</div>
<p className="leading-tight text-sm font-medium text-stone-600">Google Score</p>
</div>
<div className="w-px h-12 bg-stone-300/60"></div>
<div className="">
<div className="flex items-center gap-1 mb-1">
<span className="text-2xl font-bold tracking-tight text-stone-900">15+</span>
</div>
<p className="leading-tight text-sm font-medium text-stone-600">Jaren ervaring</p>
</div>
</div>
</div>
</div>
</header>

<section className="bg-[#F5F2EF] pt-24 pb-24" id="collection">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-4">
<span className="uppercase block text-xs font-semibold text-stone-700 tracking-[0.2em] mb-4">Handgemaakte Meubels</span>
<h2 className="text-4xl font-semibold tracking-tight mb-6 leading-tight text-stone-900">UNIEKE MEUBELS VAN HET BESTE NATUURLIJKE HOUT.</h2>
<p className="leading-relaxed text-lg text-stone-600 mb-8">
                        Elk stuk vertelt een verhaal. Onze duurzame aanpak zorgt ervoor dat de natuurlijke schoonheid van het hout behouden blijft.
                    </p>
<a className="inline-flex items-center text-base font-medium border-b pb-1 text-stone-900 hover:text-stone-600 border-stone-900" href="#">
                        Bekijk Catalogus <svg className="lucide lucide-arrow-up-right w-4 h-4 ml-2" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-[#EBE8E4] p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
<div className="mb-8 text-stone-800"><svg className="lucide lucide-armchair w-10 h-10" data-lucide="armchair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"></path><path d="M5 18v2"></path><path d="M19 18v2"></path></svg></div>
<h3 className="text-xl font-semibold tracking-tight mb-2 text-stone-900">Stoelen &amp; Zitmeubels</h3>
<p className="text-lg text-stone-600">Ergonomische ontwerpen die sculpturale esthetiek ontmoeten.</p>
</div>
<div className="p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 group cursor-pointer bg-white">
<div className="mb-8 text-stone-800"><svg className="lucide lucide-table w-10 h-10" data-lucide="table" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path></svg></div>
<h3 className="text-xl font-semibold tracking-tight mb-2 text-stone-900">Houten Tafels</h3>
<p className="text-lg text-stone-600">Pronkstukken voor uw huis. Eettafels, salontafels en bijzettafels.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-stone-200 border-t pt-24 pb-24" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row mb-12 items-start md:items-end justify-between">
<div className="">
<span className="uppercase block text-xs font-semibold text-stone-700 tracking-[0.2em] mb-2">Geselecteerd Werk</span>
<h2 className="text-4xl font-semibold text-stone-900 text-left">Recente Projecten</h2>
</div>
<div className="mt-6 md:mt-0 relative w-full md:w-auto">
<div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden z-10"></div>
<div className="flex gap-2 overflow-x-auto hide-scroll pb-2 md:pb-0 w-full md:w-auto pr-4 md:pr-0">
<button className="filter-btn active whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all bg-stone-900 text-white flex-shrink-0" onclick="filterPortfolio('all')">Alle</button>
<button className="filter-btn whitespace-nowrap transition-all hover:bg-stone-200 flex-shrink-0 text-sm font-medium text-stone-600 bg-stone-100 rounded-full px-4 py-2" onclick="filterPortfolio('kitchen')">Keuken</button>
<button className="filter-btn whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all bg-stone-100 text-stone-600 hover:bg-stone-200 flex-shrink-0" onclick="filterPortfolio('living')">Woonkamer</button>
<button className="filter-btn whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all bg-stone-100 text-stone-600 hover:bg-stone-200 flex-shrink-0" onclick="filterPortfolio('bespoke')">Maatwerk</button>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6" id="portfolio-grid">

<div className="portfolio-item group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer" data-category="kitchen">
<img alt="Modern Kitchen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1649361811423-a55616f7ab11?q=80&amp;w=1058&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:bg-black/20 transition-colors duration-300 bg-black/0 absolute inset-0"></div>
<div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
<span className="text-xs font-semibold uppercase tracking-wider mb-1 block text-white/80">Keuken</span>
<h3 className="text-lg font-medium text-white">Minimalistische Eiken Kasten</h3>
</div>
</div>
<div className="portfolio-item group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer" data-category="living">
<img alt="Living Room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://plus.unsplash.com/premium_photo-1676823570632-adabc1c636ad?q=80&amp;w=702&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:bg-black/20 transition-colors duration-300 bg-black/0 absolute inset-0"></div>
<div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
<span className="text-xs font-semibold uppercase tracking-wider mb-1 block text-white/80">Woonkamer</span>
<h3 className="text-lg font-medium text-white">Zwevende Notelaar Planken</h3>
</div>
</div>
<div className="portfolio-item group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer" data-category="bespoke">
<img alt="Bespoke" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1636125661240-a4e077ee6d59?q=80&amp;w=687&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 group-hover:bg-black/20 transition-colors duration-300 bg-black/0"></div>
<div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
<span className="text-xs font-semibold uppercase tracking-wider mb-1 block text-white/80">Maatwerk</span>
<h3 className="text-lg font-medium text-white">Kledingkast Op Maat</h3>
</div>
</div>
<div className="portfolio-item group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer" data-category="kitchen">
<img alt="Kitchen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600422086908-72be2c8f5f3f?q=80&amp;w=686&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 group-hover:bg-black/20 transition-colors duration-300 bg-black/0"></div>
<div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
<span className="text-xs font-semibold uppercase tracking-wider mb-1 block text-white/80">Keuken</span>
<h3 className="text-lg font-medium text-white">Eiland Werkblad</h3>
</div>
</div>
<div className="portfolio-item group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer" data-category="living">
<img alt="Living" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1610733374054-59454fe657cd?q=80&amp;w=735&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 group-hover:bg-black/20 transition-colors duration-300 bg-black/0"></div>
<div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
<span className="text-xs font-semibold uppercase tracking-wider mb-1 block text-white/80">Woonkamer</span>
<h3 className="text-lg font-medium text-white">Mid-Century Dressoir</h3>
</div>
</div>
<div className="portfolio-item group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer" data-category="bespoke">
<img alt="Bespoke" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1647481045013-8efc5594369d?q=80&amp;w=728&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:bg-black/20 transition-colors duration-300 bg-black/0 absolute inset-0"></div>
<div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
<span className="text-xs font-semibold uppercase tracking-wider mb-1 block text-white/80">Maatwerk</span>
<h3 className="text-lg font-medium text-white">Vitrinekast</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F5F2EF] border-t border-stone-200" id="calculator">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16 gap-x-16 gap-y-16 items-start">

<div className="w-full md:w-2/3">
<span className="uppercase block text-xs font-semibold text-stone-700 tracking-[0.2em] mb-2">Offerte Tool</span>
<h2 className="text-4xl font-semibold text-stone-900 tracking-tight mb-8">Maatwerk Kast Calculator</h2>
<form className="space-y-10" id="cabinetForm" onsubmit="return false;">
<div className="">
<label className="block text-sm font-semibold mb-4 text-stone-900">Selecteer Houtsoort</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<label className="cursor-pointer relative">
<input checked="" className="peer sr-only" name="material" onchange="calculatePrice()" type="radio" value="150"/>
<div className="p-4 rounded-lg border peer-checked:border-stone-900 peer-checked:ring-1 peer-checked:ring-stone-900 transition-all h-full flex flex-col gap-2 border-stone-200 bg-white hover:bg-stone-50">
<div className="w-8 h-8 rounded bg-[#C4A484]"></div>
<span className="font-medium text-stone-900 material-name">Europese Eik</span>
<span className="text-sm text-stone-500">Duurzaam, prominente nerf</span>
</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="material" onchange="calculatePrice()" type="radio" value="220"/>
<div className="p-4 rounded-lg border peer-checked:border-stone-900 peer-checked:ring-1 peer-checked:ring-stone-900 transition-all h-full flex flex-col gap-2 border-stone-200 bg-white hover:bg-stone-50">
<div className="w-8 h-8 rounded bg-[#5D4037]"></div>
<span className="font-medium text-stone-900 material-name">Amerikaanse Notelaar</span>
<span className="text-sm text-stone-500">Rijke kleur, premium look</span>
</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="material" onchange="calculatePrice()" type="radio" value="120"/>
<div className="p-4 rounded-lg border peer-checked:border-stone-900 peer-checked:ring-1 peer-checked:ring-stone-900 transition-all h-full flex flex-col gap-2 border-stone-200 bg-white hover:bg-stone-50">
<div className="w-8 h-8 rounded bg-[#E3C099]"></div>
<span className="font-medium text-stone-900 material-name">Esdoorn</span>
<span className="text-sm text-stone-500">Gladde, consistente nerf</span>
</div>
</label>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="">
<div className="flex justify-between mb-2">
<label className="text-sm font-semibold text-stone-900">Breedte (inches)</label>
<span className="text-sm text-stone-500 font-mono" id="widthVal">24"</span>
</div>
<input className="w-full" id="width" max="96" min="12" oninput="calculatePrice()" type="range" value="24"/>
</div>
<div className="">
<div className="flex justify-between mb-2">
<label className="text-sm font-semibold text-stone-900">Hoogte (inches)</label>
<span className="text-sm font-mono text-stone-500" id="heightVal">30"</span>
</div>
<input className="w-full" id="height" max="96" min="12" oninput="calculatePrice()" type="range" value="30"/>
</div>
<div className="">
<div className="flex justify-between mb-2">
<label className="text-sm font-semibold text-stone-900">Diepte (inches)</label>
<span className="text-sm font-mono text-stone-500" id="depthVal">12"</span>
</div>
<input className="w-full" id="depth" max="36" min="12" oninput="calculatePrice()" type="range" value="12"/>
</div>
</div>
<div className="">
<label className="block text-sm font-semibold mb-4 text-stone-900">Opties &amp; Afwerking</label>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer sr-only" id="softClose" onchange="calculatePrice()" type="checkbox"/>
<div className="w-5 h-5 border rounded flex items-center justify-center peer-checked:bg-stone-900 peer-checked:border-stone-900 transition-colors border-stone-300 bg-white">
<svg className="lucide lucide-check w-3 h-3 opacity-0 peer-checked:opacity-100 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-lg group-hover:text-stone-900 text-stone-700">Soft-close ladesystemen (+$150)</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer sr-only" id="glassFront" onchange="calculatePrice()" type="checkbox"/>
<div className="w-5 h-5 border rounded flex items-center justify-center peer-checked:bg-stone-900 peer-checked:border-stone-900 transition-colors border-stone-300 bg-white">
<svg className="lucide lucide-check w-3 h-3 opacity-0 peer-checked:opacity-100 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-lg group-hover:text-stone-900 text-stone-700">Deuren van gehard glas (+$200)</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer sr-only" id="installation" onchange="calculatePrice()" type="checkbox"/>
<div className="w-5 h-5 border rounded flex items-center justify-center peer-checked:bg-stone-900 peer-checked:border-stone-900 transition-colors border-stone-300 bg-white">
<svg className="lucide lucide-check w-3 h-3 opacity-0 peer-checked:opacity-100 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-lg group-hover:text-stone-900 text-stone-700">Plaatsing aan huis (+$300)</span>
</label>
</div>
</div>
</form>
</div>

<div className="w-full md:w-1/3 sticky top-24">
<div className="p-8 rounded-2xl shadow-2xl relative overflow-hidden bg-stone-900 text-white">
<div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-50 -mr-10 -mt-10 bg-stone-800"></div>
<h3 className="text-xl font-semibold tracking-tight mb-6 relative z-10">Geschatte Kosten</h3>
<div className="space-y-4 mb-8 border-b pb-8 text-sm relative z-10 border-stone-700 text-stone-300">
<div className="flex justify-between">
<span>Materiaal Basis</span>
<span className="font-medium text-white" id="summaryMaterial">Europese Eik</span>
</div>
<div className="flex justify-between">
<span className="">Volume</span>
<span className="font-medium text-white" id="summaryVolume">5.0 ft³</span>
</div>
<div className="flex justify-between">
<span className="">Arbeid &amp; Afwerking</span>
<span className="font-medium text-white">$450</span>
</div>
<div className="flex justify-between" id="summaryAddons"><span>Opties</span><span className="text-white font-medium" id="addonCost">$0</span></div>
</div>
<div className="flex items-end justify-between mb-8 relative z-10">
<span className="text-sm text-stone-400">Totaalprijs</span>
<span className="text-4xl font-semibold tracking-tighter" id="totalPrice">$1.200</span>
</div>
<button className="transition-colors hover:bg-stone-100 font-semibold text-stone-900 bg-white w-full z-10 rounded-lg pt-3 pb-3 relative">Offerte ontvangen in 24u</button>
<p className="text-xs text-stone-500 mt-4 text-center relative z-10">
                            *Definitieve prijs kan variëren op basis van inspectie.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t bg-white border-stone-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b pb-12 gap-8 border-stone-100">
<div className="max-w-2xl">
<span className="uppercase block text-xs font-semibold text-stone-700 tracking-[0.2em] mb-2">Ervaringen</span>
<h2 className="text-4xl font-semibold tracking-tight mb-4 text-stone-900">Verhalen van Klanten</h2>
<p className="text-lg text-stone-600">Ontdek wat anderen zeggen over hun ervaring met onze op maat gemaakte meubels.</p>
</div>
<div className="flex gap-8">
<div className="px-6 py-4 rounded-xl border bg-stone-50 border-stone-100">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-bold text-stone-900">4.9</span>
<span className="text-stone-400">/5</span>
</div>
<div className="flex items-center gap-1 mt-1 mb-1 text-[#C4A484]">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<div className="text-xs font-medium text-stone-500">Google Score</div>
</div>
<div className="px-6 py-4 rounded-xl border bg-stone-50 border-stone-100">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-bold text-stone-900">200+</span>
</div>
<div className="text-sm font-medium mt-1 mb-1 text-stone-800">Projecten</div>
<div className="text-xs font-medium text-stone-500">Opgeleverd</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-8 rounded-2xl border bg-stone-50 border-stone-100">
<div className="flex gap-1 mb-4 text-[#C4A484]">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="mb-6 leading-relaxed text-stone-700">"De op maat gemaakte notelaar eettafel overtrof onze verwachtingen. Het is het ware hart van ons huis geworden."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-stone-300">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
</div>
<div className="">
<div className="font-semibold text-sm text-stone-900">Marcus Chen</div>
<div className="text-xs text-stone-500">Dilsen-Stokkem</div>
</div>
</div>
</div>
<div className="p-8 rounded-2xl border bg-stone-50 border-stone-100">
<div className="flex gap-1 mb-4 text-[#C4A484]">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="mb-6 leading-relaxed text-stone-700">"Craft &amp; Wood transformeerde onze onhandige alkoof in een prachtig thuiskantoor. Vakmanschap van wereldklasse."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-stone-300">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
</div>
<div className="">
<div className="font-semibold text-sm text-stone-900">Sarah Jenkins</div>
<div className="text-xs text-stone-500">Hasselt</div>
</div>
</div>
</div>
<div className="p-8 rounded-2xl border bg-stone-50 border-stone-100">
<div className="flex gap-1 mb-4 text-[#C4A484]">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="mb-6 leading-relaxed text-stone-700">"Van de eerste 3D-render tot de installatie verliep het proces naadloos. De soft-close lades zijn fluisterstil."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-stone-300">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
</div>
<div className="">
<div className="font-semibold text-sm text-stone-900">David Miller</div>
<div className="text-stone-500 text-xs">Peer</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F5F2EF] border-t border-stone-200" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<span className="uppercase block text-xs font-semibold text-stone-700 tracking-[0.2em] mb-2">Veelgestelde Vragen</span>
<h2 className="text-4xl font-semibold tracking-tight text-stone-900">FAQ</h2>
</div>
<div className="space-y-4">
<details className="group rounded-xl border overflow-hidden transition-all open:ring-1 open:ring-stone-900/5 bg-white border-stone-200 hover:border-stone-300">
<summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium select-none text-stone-900">
                        Hoe lang duurt een project op maat?
                        <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 leading-relaxed text-stone-600">
                        De typische doorlooptijd is 6-8 weken vanaf de goedkeuring van het definitieve ontwerp.
                    </div>
</details>
<details className="group rounded-xl border overflow-hidden transition-all open:ring-1 open:ring-stone-900/5 bg-white border-stone-200 hover:border-stone-300">
<summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium select-none text-stone-900">
                        Waar werken jullie?
                        <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 leading-relaxed text-stone-600">
                        Onze werkplaats is gevestigd in Dilsen-Stokkem en we bedienen voornamelijk Limburg.
                    </div>
</details>
<details className="group rounded-xl border overflow-hidden transition-all open:ring-1 open:ring-stone-900/5 bg-white border-stone-200 hover:border-stone-300">
<summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium select-none text-stone-900">
                        Bieden jullie garantie?
                        <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 leading-relaxed text-stone-600">
                        Ja, al ons constructief schrijnwerk wordt geleverd met 10 jaar garantie op fabricagefouten.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-[#F5F2EF] border-t border-stone-200" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
<div className="flex flex-col justify-between">
<div className="">
<span className="uppercase block text-xs font-semibold text-stone-700 tracking-[0.2em] mb-2">Contact Opnemen</span>
<h2 className="text-4xl font-semibold text-stone-900 tracking-tight mb-6">Bespreek uw project</h2>
<p className="text-stone-600 mb-8">Vul het onderstaande formulier in.</p>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-stone-900">Naam</label>
<input className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all border-stone-300 bg-white" placeholder="Jan Jansen" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-900">Telefoonnummer</label>
<input className="focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all bg-white w-full border-stone-300 border rounded-lg pt-3 pr-4 pb-3 pl-4" placeholder="+324 12 32 45 88" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-900">Interesse</label>
<select className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all border-stone-300 bg-white">
<option>Maatwerk Kasten</option>
<option>Meubelcommissie</option>
<option>Commercieel Project</option>
</select>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-900">Bericht</label>
<textarea className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all border-stone-300 bg-white" placeholder="Vertel ons over uw project..." rows="4"></textarea>
</div>
<button className="w-full font-semibold py-4 rounded-lg transition-all shadow-md bg-stone-900 text-white hover:bg-stone-800" type="submit">
                                Verstuur Aanvraag
                            </button>
</form>
</div>
<div className="mt-16 pt-12 border-t border-stone-200">
<div className="flex items-center gap-2 mb-4">
<svg className="lucide lucide-map w-5 h-5 text-stone-700" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
<h4 className="font-semibold text-stone-900">Werkgebied Limburg (BE)</h4>
</div>
<p className="text-sm text-stone-600 mb-4 leading-relaxed">
                            Wij zijn actief in de volledige provincie Limburg.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-700 border border-stone-200">Dilsen-Stokkem</span>
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-700 border border-stone-200">Hasselt</span>
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-700 border border-stone-200">Genk</span>
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-700 border border-stone-200">Maaseik</span>
</div>
</div>
</div>
<div className="p-8 md:p-12 rounded-2xl border shadow-sm flex flex-col justify-center h-full bg-white border-stone-200">
<div className="mb-10">
<div className="inline-flex items-center justify-center p-3 rounded-xl mb-6 bg-stone-100">
<svg className="lucide lucide-map-pin w-6 h-6 text-stone-900" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<h3 className="text-2xl font-semibold text-stone-900 tracking-tight mb-2">Locatie werkgebied</h3>
<p className="text-lg text-stone-600">Industrieweg 25, 3650 Dilsen-Stokkem, België</p>
</div>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="p-2 rounded-lg bg-stone-50">
<svg className="lucide lucide-clock w-5 h-5 text-stone-700" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="">
<h4 className="font-semibold text-sm mb-1 text-stone-900">Openingsuren</h4>
<ul className="text-sm space-y-1 text-stone-600">
<li className="flex justify-between w-48"><span className="">Ma - Vr:</span> <span className="">08:00 - 18:00</span></li>
<li className="flex justify-between w-48"><span>Zaterdag:</span> <span className="">09:00 - 15:00</span></li>
<li className="flex justify-between w-48"><span>Zondag:</span> <span>Gesloten</span></li>
</ul>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 rounded-lg bg-stone-50">
<svg className="lucide lucide-phone w-5 h-5 text-stone-700" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div className="">
<h4 className="font-semibold text-sm mb-1 text-stone-900">Telefoon</h4>
<a className="text-sm transition-colors text-stone-600 hover:text-stone-900" href="tel:+32123456789">+32 12 34 56 789</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-50 border-stone-200 border-t pt-16 pb-32">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-6">
<div className="p-1 rounded bg-stone-900 text-white">
<svg className="lucide lucide-hammer w-4 h-4" data-lucide="hammer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></svg>
</div>
<span className="text-base font-semibold tracking-tight text-stone-900">CRAFT &amp; WOOD</span>
</div>
<p className="text-lg text-stone-500">Tijdloze houten meubels creëren voor moderne leefruimtes.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-auto">
<div className="">
<h4 className="font-semibold mb-4 text-sm text-stone-900">Producten</h4>
<ul className="space-y-3 text-stone-500 text-sm">
<li className=""><a className="transition-colors hover:text-stone-900" href="#">Stoelen</a></li>
<li className=""><a className="transition-colors hover:text-stone-900" href="#">Tafels</a></li>
<li className=""><a className="transition-colors hover:text-stone-900" href="#">Kasten</a></li>
</ul>
</div>
<div className="">
<h4 className="font-semibold mb-4 text-sm text-stone-900">Bedrijf</h4>
<ul className="space-y-3 text-stone-500 text-sm">
<li className=""><a className="transition-colors hover:text-stone-900" href="#">Over ons</a></li>
<li className=""><a className="transition-colors hover:text-stone-900" href="#">Werkwijze</a></li>
<li className=""><a className="transition-colors hover:text-stone-900" href="#">Materialen</a></li>
</ul>
</div>
<div className="">
<h4 className="font-semibold mb-4 text-sm text-stone-900">Contact</h4>
<ul className="space-y-3 text-stone-500 text-sm">
<li>Industrieweg 253650 Dilsen-Stokkem</li>
<li><a className="transition-colors hover:text-stone-900" href="tel:+32123456789">+32 12 34 56 789</a></li>
<li>Ma - Vr: 08:00 - 18:00Za: 09:00 - 15:00</li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t pt-8 gap-4 border-stone-200">
<span className="text-sm text-stone-400">© 2024 Craft &amp; Wood. Alle rechten voorbehouden.</span>
<div className="flex gap-6">
<a className="text-stone-400 hover:text-stone-900" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-stone-400 hover:text-stone-900" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-stone-400 hover:text-stone-900" href="#"><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
</div>
</div>
</div>
</footer>

<div className="fixed group flex flex-col z-50 right-6 bottom-6 gap-x-3 gap-y-6 items-end">
<div className="flex flex-col gap-3 transition-all duration-300 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto opacity-0 translate-y-4 items-end">
<a className="flex items-center gap-3 transition-colors hover:bg-stone-50 text-stone-800 bg-white border-stone-100 border rounded-full pt-2 pr-3 pb-2 pl-4 shadow-lg" href="#">
<span className="text-sm font-medium">WhatsApp</span>
<div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white">
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</div>
</a>
<a className="flex items-center gap-3 transition-colors hover:bg-stone-50 text-stone-800 bg-white border-stone-100 border rounded-full pt-2 pr-3 pb-2 pl-4 shadow-lg" href="tel:+32123456789">
<span className="text-sm font-medium">Bel Nu</span>
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-stone-900 text-white">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
</a>
</div>
<button className="flex transition-transform duration-300 group-hover:scale-110 text-white bg-stone-900 w-14 h-14 rounded-full relative shadow-xl items-center justify-center ring-1 ring-stone-900/5">
<span className="absolute inline-flex h-full w-full rounded-full bg-stone-500 opacity-20 animate-ping"></span>
<div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:rotate-90">
<svg className="lucide lucide-phone w-6 h-6" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:opacity-100 group-hover:rotate-0 opacity-0 rotate-90">
<svg className="lucide lucide-arrow-up w-6 h-6" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</div>
</button>
</div>


    </>
  );
}
