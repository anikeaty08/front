import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Data Structure for the spreadsheet
        const items = [
            { id: 1, name: "Pakiet Podstawowy (Loty + Hotele + Transfery)", category: "Baza", price: 8900, type: "fixed", selected: true },
            { id: 2, name: "Ubezpieczenie Podróżne Premium", category: "Dodatki", price: 350, type: "optional", selected: true },
            { id: 3, name: "Prywatny Jeep Safari (Yala)", category: "Atrakcje", price: 450, type: "optional", selected: true },
            { id: 4, name: "Rejs obserwacja wielorybów", category: "Atrakcje", price: 300, type: "optional", selected: false },
            { id: 5, name: "Upgrade pokoi (Ocean View)", category: "Hotel", price: 1200, type: "optional", selected: false },
            { id: 6, name: "Lot balonem o wschodzie słońca", category: "Atrakcje", price: 850, type: "optional", selected: false },
            { id: 7, name: "Prywatny przewodnik (Język polski)", category: "Obsługa", price: 1500, type: "optional", selected: false }
        ];

        let pax = 2;

        function getCategoryIcon(cat) {
            const map = {
                'Baza': 'package',
                'Dodatki': 'shield-check',
                'Atrakcje': 'camera',
                'Hotel': 'bed',
                'Obsługa': 'user-check'
            };
            return map[cat] || 'circle';
        }

        function getCategoryColor(cat) {
            const map = {
                'Baza': 'text-teal-600',
                'Dodatki': 'text-slate-400',
                'Atrakcje': 'text-slate-400',
                'Hotel': 'text-slate-400',
                'Obsługa': 'text-slate-400'
            };
            return map[cat] || 'text-slate-400';
        }

        function renderCalculator() {
            const container = document.getElementById('calculator-rows');
            container.innerHTML = '';

            items.forEach(item => {
                const isFixed = item.type === 'fixed';
                const row = document.createElement('div');
                row.className = `group flex items-center justify-between p-4 hover:bg-slate-50 transition-colors ${item.selected ? 'bg-white' : 'bg-slate-50/50 opacity-60'}`;
                
                const iconName = getCategoryIcon(item.category);
                const categoryColor = item.selected ? 'text-teal-600' : 'text-slate-400';
                
                row.innerHTML = `
                    <div class="flex items-start gap-3 flex-1">
                        <div class="mt-0.5 text-slate-400 group-hover:text-teal-600 transition-colors">
                            <i data-lucide="${iconName}" class="w-4 h-4"></i>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-xs font-medium text-slate-900 ${item.selected ? '' : 'text-slate-500 line-through decoration-slate-300'}">${item.name}</span>
                            <span class="text-[10px] ${item.category === 'Baza' ? 'text-teal-600' : 'text-slate-400'} uppercase tracking-wider mt-0.5 font-medium">${item.category}</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-3 pl-2">
                        <span class="text-xs font-semibold text-slate-900 tabular-nums whitespace-nowrap">${item.price.toLocaleString('pl-PL').replace(',', ' ')} PLN</span>
                        ${isFixed 
                            ? `<div class="w-5 h-5 flex items-center justify-center bg-teal-50 rounded-full"><i data-lucide="check" class="w-3 h-3 text-teal-600"></i></div>` 
                            : `<label class="checkbox-wrapper cursor-pointer relative flex items-center">
                                <input type="checkbox" class="peer sr-only" ${item.selected ? 'checked' : ''} onchange="toggleItem(${item.id})">
                                <div class="w-5 h-5 border border-slate-300 rounded bg-white transition-all flex items-center justify-center hover:border-slate-400 peer-focus:ring-2 peer-focus:ring-teal-100">
                                    <svg class="w-3 h-3 text-white hidden pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                               </label>`
                        }
                    </div>
                `;
                container.appendChild(row);
            });
            
            lucide.createIcons();
            updateTotal();
        }

        function toggleItem(id) {
            const item = items.find(i => i.id === id);
            if (item && item.type !== 'fixed') {
                item.selected = !item.selected;
                renderCalculator();
            }
        }

        function changePax(delta) {
            const newPax = pax + delta;
            if (newPax >= 1 && newPax <= 10) {
                pax = newPax;
                document.getElementById('pax-count').innerText = pax;
                updateTotal();
            }
        }

        function updateTotal() {
            let total = 0;
            items.forEach(item => {
                if (item.selected) {
                    total += item.price;
                }
            });

            const totalEl = document.getElementById('total-price');
            totalEl.innerText = total.toLocaleString('pl-PL').replace(',', ' ') + ' PLN';
        }

        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
            renderCalculator();
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="flex h-16 max-w-7xl mx-auto px-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-teal-600 to-emerald-800 rounded-lg flex items-center justify-center text-white shadow-lg shadow-teal-900/20">
<span className="text-xs font-bold tracking-tighter">SL</span>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">SRI LANKA EXPEDITION</span>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-full transition-all shadow-md hover:shadow-lg" href="#kalkulator">
<span>Personalizuj ofertę</span>
<svg className="lucide lucide-sparkles w-3 h-3" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M9 3v4"></path><path d="M7 5h4"></path><path d="M7 1v4"></path></svg>
</a>
</div>
</div>
</nav>

<header className="pt-28 pb-12 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">

<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-100 bg-teal-50/50 mb-6 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
<span className="text-xs font-semibold text-teal-800 tracking-wide uppercase">Sezon 2024/2025</span>
</div>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-slate-900 tracking-tight mb-6 leading-[0.9]">
                        Kolory <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-800 font-instrument-serif italic pr-2">Cejlonu</span>
</h1>
<p className="text-lg text-slate-500 max-w-xl leading-relaxed mb-8">
                        Poczuj energię tropikalnej wyspy. Od mglistych plantacji herbaty w Ella, przez szafirowe wody Oceanu Indyjskiego, aż po dzikie serce dżungli Yala.
                    </p>
<div className="flex flex-wrap gap-3">
<div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg border border-slate-100">
<svg className="lucide lucide-sun w-4 h-4 text-orange-500" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<span className="text-sm font-medium text-slate-700">12 Dni Słońca</span>
</div>
<div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg border border-slate-100">
<svg className="lucide lucide-palm-tree w-4 h-4 text-teal-600" data-lucide="palm-tree" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1 9h4l1-9h3"></path><path d="M18 10c0-2.76-2.46-5-5.5-5S7 7.24 7 10h2l1 9h4l1-9h3"></path></svg>
<span className="text-sm font-medium text-slate-700">Natura &amp; Kultura</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-3 h-[400px] md:h-[500px]">

<div className="col-span-2 md:col-span-2 row-span-2 relative group overflow-hidden rounded-2xl shadow-xl">
<img alt="Nine Arch Bridge Train" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-4 left-4 text-white">
<div className="text-xs font-medium uppercase tracking-wider bg-white/20 backdrop-blur-md px-2 py-1 rounded inline-block mb-1">Ella</div>
<div className="text-lg font-medium">Słynny Niebieski Pociąg</div>
</div>
</div>

<div className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl shadow-lg">
<img alt="Elephants" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1588258524675-c63704dc1757?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
</div>

<div className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl shadow-lg">
<img alt="Sigiriya" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 pb-20">

<div className="lg:col-span-2 space-y-12">
<div className="flex items-end justify-between border-b border-slate-100 pb-4 mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Twój Plan Podróży</h2>
<div className="text-xs font-medium text-slate-400 uppercase tracking-wide">4 Etapy</div>
</div>

<div className="relative pl-8 md:pl-12 border-l border-slate-200 space-y-12">

<div className="relative group">
<div className="absolute -left-[39px] md:-left-[55px] top-0 flex flex-col items-center">
<div className="w-4 h-4 bg-teal-600 rounded-full border-4 border-white shadow-sm z-10"></div>
<div className="h-full w-px bg-slate-200 my-2"></div>
</div>
<div className="flex flex-col md:flex-row gap-6">

<div className="w-full md:w-1/3 aspect-[4/3] rounded-xl overflow-hidden shadow-md relative">
<img alt="Sigiriya Rock" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1620619767323-b95a89183081?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold tracking-wide uppercase text-slate-800 shadow-sm">
                                Dzień 1-3
                            </div>
</div>

<div className="flex-1">
<h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">Tajemnica Lwiej Skały</h3>
<p className="text-sm leading-relaxed text-slate-500 mb-4">
                                Lądowanie w tropikach. Prywatny transfer do serca wyspy. Wspinaczka na majestatyczną Sigiriyę o zachodzie słońca, gdy dżungla mieni się złotem. Rowerowa wyprawa przez ruiny Polonnaruwy.
                            </p>

<div className="inline-flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100 w-full">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Odpoczynek</div>
<div className="text-sm font-medium text-slate-900">Jetwing Vil Uyana</div>
</div>
<div className="ml-auto flex gap-0.5">
<svg className="w-3 h-3 text-yellow-400" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-3 h-3 text-yellow-400" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-3 h-3 text-yellow-400" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-3 h-3 text-yellow-400" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-3 h-3 text-yellow-400" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
</div>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute -left-[39px] md:-left-[55px] top-0 flex flex-col items-center">
<div className="w-4 h-4 bg-white rounded-full border-4 border-slate-200 group-hover:border-teal-400 transition-colors shadow-sm z-10"></div>
<div className="h-full w-px bg-slate-200 my-2"></div>
</div>
<div className="flex flex-col md:flex-row gap-6">
<div className="w-full md:w-1/3 aspect-[4/3] rounded-xl overflow-hidden shadow-md relative">
<img alt="Tea Train" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1590757736398-7c858b44983e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold tracking-wide uppercase text-slate-800 shadow-sm">
                                Dzień 4-6
                            </div>
</div>
<div className="flex-1">
<h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">Podróż w Chmurach</h3>
<p className="text-sm leading-relaxed text-slate-500 mb-4">
                                Kultowy przejazd pociągiem z Kandy do Ella. Otwarte drzwi, wiatr we włosach i niekończące się pola herbaciane w kolorze soczystej zieleni. Trekking na Little Adam's Peak o świcie.
                            </p>
<div className="inline-flex items-center gap-3 p-3 rounded-lg bg-teal-50 border border-teal-100 w-full">
<div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center text-teal-700">
<svg className="lucide lucide-coffee w-5 h-5" data-lucide="coffee" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2"></path><path d="M14 2v2"></path><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path><path d="M6 2v2"></path></svg>
</div>
<div>
<div className="text-[10px] text-teal-600 uppercase tracking-wider font-semibold">Doświadczenie</div>
<div className="text-sm font-medium text-slate-900">Degustacja herbaty Ceylon</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute -left-[39px] md:-left-[55px] top-0 flex flex-col items-center">
<div className="w-4 h-4 bg-white rounded-full border-4 border-slate-200 group-hover:border-teal-400 transition-colors shadow-sm z-10"></div>
<div className="h-full w-px bg-slate-200 my-2"></div>
</div>
<div className="flex flex-col md:flex-row gap-6">
<div className="w-full md:w-1/3 aspect-[4/3] rounded-xl overflow-hidden shadow-md relative">
<img alt="Yala Leopard" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1622363233887-17b5b5b480e1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold tracking-wide uppercase text-slate-800 shadow-sm">
                                Dzień 7-9
                            </div>
</div>
<div className="flex-1">
<h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">Dzikie Królestwo Yala</h3>
<p className="text-sm leading-relaxed text-slate-500 mb-4">
                                Zmiana krajobrazu na suchy busz. Safari jeepami 4x4 w poszukiwaniu lampartów, słoni i krokodyli. Nocleg w luksusowych namiotach pod rozgwieżdżonym niebem, nasłuchując odgłosów dżungli.
                            </p>
<div className="inline-flex items-center gap-3 p-3 rounded-lg bg-orange-50 border border-orange-100 w-full">
<div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-700">
<svg className="lucide lucide-tent w-5 h-5" data-lucide="tent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 21 14 3"></path><path d="M20.5 21 10 3"></path><path d="M15.5 21 12 15l-3.5 6"></path><path d="M2 21h20"></path></svg>
</div>
<div>
<div className="text-[10px] text-orange-600 uppercase tracking-wider font-semibold">Nocleg</div>
<div className="text-sm font-medium text-slate-900">Glamping Wild Coast</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute -left-[39px] md:-left-[55px] top-0 flex flex-col items-center">
<div className="w-4 h-4 bg-white rounded-full border-4 border-slate-200 group-hover:border-teal-400 transition-colors shadow-sm z-10"></div>
</div>
<div className="flex flex-col md:flex-row gap-6">
<div className="w-full md:w-1/3 aspect-[4/3] rounded-xl overflow-hidden shadow-md relative">
<img alt="Mirissa Beach" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1543731068-1663f704a250?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold tracking-wide uppercase text-slate-800 shadow-sm">
                                Dzień 10-12
                            </div>
</div>
<div className="flex-1">
<h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">Turkus i Złoto</h3>
<p className="text-sm leading-relaxed text-slate-500 mb-4">
                                Zasłużony relaks na plażach Mirissy. Palmy kokosowe chylące się ku wodzie, świeże owoce morza i zachody słońca w Galle Fort.
                            </p>
<div className="flex gap-2 mt-2">
<span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-[10px] font-medium uppercase tracking-wide">Plaża</span>
<span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-[10px] font-medium uppercase tracking-wide">UNESCO</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-white/10 rounded-lg">
<svg className="lucide lucide-plane w-5 h-5 text-teal-400" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
</div>
<h3 className="text-lg font-medium">Połączenie Lotnicze</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-6">
<div>
<div className="text-[10px] text-slate-400 uppercase tracking-widest mb-2">Wylot</div>
<div className="text-2xl font-semibold mb-1">WAW <span className="text-slate-500 text-lg mx-1">→</span> CMB</div>
<div className="text-sm text-slate-400">Qatar Airways (przesiadka DOH)</div>
</div>
<div>
<div className="text-[10px] text-slate-400 uppercase tracking-widest mb-2">Powrót</div>
<div className="text-2xl font-semibold mb-1">CMB <span className="text-slate-500 text-lg mx-1">→</span> WAW</div>
<div className="text-sm text-slate-400">Czas całkowity: ok. 14h</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1" id="kalkulator">
<div className="sticky top-24">
<div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden ring-1 ring-slate-900/5">
<div className="p-6 bg-gradient-to-b from-white to-slate-50/50 border-b border-slate-100">
<h3 className="text-lg font-semibold text-slate-900">Konfigurator</h3>
<p className="text-xs text-slate-500 mt-1">Dostosuj swoją podróż marzeń.</p>
</div>

<div className="divide-y divide-slate-100" id="calculator-rows"><div className="group flex items-center justify-between p-4 hover:bg-slate-50 transition-colors bg-white">
<div className="flex items-start gap-3 flex-1">
<div className="mt-0.5 text-slate-400 group-hover:text-teal-600 transition-colors">
<svg className="lucide lucide-package w-4 h-4" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">Pakiet Podstawowy (Loty + Hotele + Transfery)</span>
<span className="text-[10px] text-teal-600 uppercase tracking-wider mt-0.5 font-semibold">Baza</span>
</div>
</div>
<div className="flex items-center gap-3 pl-2">
<span className="text-xs font-semibold text-slate-900 tabular-nums whitespace-nowrap">8 900 PLN</span>
<div className="w-5 h-5 flex items-center justify-center bg-teal-50 rounded-full"><svg className="lucide lucide-check w-3 h-3 text-teal-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
</div>
</div><div className="group flex items-center justify-between p-4 hover:bg-slate-50 transition-colors bg-white">
<div className="flex items-start gap-3 flex-1">
<div className="mt-0.5 text-slate-400 group-hover:text-teal-600 transition-colors">
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">Ubezpieczenie Podróżne Premium</span>
<span className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5 font-medium">Dodatki</span>
</div>
</div>
<div className="flex items-center gap-3 pl-2">
<span className="text-xs font-semibold text-slate-900 tabular-nums whitespace-nowrap">350 PLN</span>
<label className="checkbox-wrapper cursor-pointer relative flex items-center">
<input checked="" className="peer sr-only" onchange="toggleItem(2)" type="checkbox"/>
<div className="transition-all flex hover:border-slate-400 peer-focus:ring-2 peer-focus:ring-teal-100 bg-white w-5 h-5 border-slate-300 border rounded items-center justify-center">
<svg className="w-3 h-3 text-white hidden pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</label>
</div>
</div><div className="group flex items-center justify-between p-4 hover:bg-slate-50 transition-colors bg-white">
<div className="flex items-start gap-3 flex-1">
<div className="mt-0.5 text-slate-400 group-hover:text-teal-600 transition-colors">
<svg className="lucide lucide-camera w-4 h-4" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">Prywatny Jeep Safari (Yala)</span>
<span className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5 font-medium">Atrakcje</span>
</div>
</div>
<div className="flex items-center gap-3 pl-2">
<span className="text-xs font-semibold text-slate-900 tabular-nums whitespace-nowrap">450 PLN</span>
<label className="checkbox-wrapper cursor-pointer relative flex items-center">
<input checked="" className="peer sr-only" onchange="toggleItem(3)" type="checkbox"/>
<div className="w-5 h-5 border border-slate-300 rounded bg-white transition-all flex items-center justify-center hover:border-slate-400 peer-focus:ring-2 peer-focus:ring-teal-100">
<svg className="w-3 h-3 text-white hidden pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</label>
</div>
</div><div className="group flex items-center justify-between p-4 hover:bg-slate-50 transition-colors bg-slate-50/50 opacity-60">
<div className="flex items-start gap-3 flex-1">
<div className="mt-0.5 text-slate-400 group-hover:text-teal-600 transition-colors">
<svg className="lucide lucide-camera w-4 h-4" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900 text-slate-500 line-through decoration-slate-300">Rejs obserwacja wielorybów</span>
<span className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5 font-medium">Atrakcje</span>
</div>
</div>
<div className="flex items-center gap-3 pl-2">
<span className="text-xs font-semibold text-slate-900 tabular-nums whitespace-nowrap">300 PLN</span>
<label className="checkbox-wrapper cursor-pointer relative flex items-center">
<input className="peer sr-only" onchange="toggleItem(4)" type="checkbox"/>
<div className="w-5 h-5 border border-slate-300 rounded bg-white transition-all flex items-center justify-center hover:border-slate-400 peer-focus:ring-2 peer-focus:ring-teal-100">
<svg className="w-3 h-3 text-white hidden pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</label>
</div>
</div><div className="group flex items-center justify-between p-4 hover:bg-slate-50 transition-colors bg-slate-50/50 opacity-60">
<div className="flex items-start gap-3 flex-1">
<div className="mt-0.5 text-slate-400 group-hover:text-teal-600 transition-colors">
<svg className="lucide lucide-bed w-4 h-4" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900 text-slate-500 line-through decoration-slate-300">Upgrade pokoi (Ocean View)</span>
<span className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5 font-medium">Hotel</span>
</div>
</div>
<div className="flex items-center gap-3 pl-2">
<span className="text-xs font-semibold text-slate-900 tabular-nums whitespace-nowrap">1 200 PLN</span>
<label className="checkbox-wrapper cursor-pointer relative flex items-center">
<input className="peer sr-only" onchange="toggleItem(5)" type="checkbox"/>
<div className="w-5 h-5 border border-slate-300 rounded bg-white transition-all flex items-center justify-center hover:border-slate-400 peer-focus:ring-2 peer-focus:ring-teal-100">
<svg className="w-3 h-3 text-white hidden pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</label>
</div>
</div><div className="group flex items-center justify-between p-4 hover:bg-slate-50 transition-colors bg-slate-50/50 opacity-60">
<div className="flex items-start gap-3 flex-1">
<div className="mt-0.5 text-slate-400 group-hover:text-teal-600 transition-colors">
<svg className="lucide lucide-camera w-4 h-4" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900 text-slate-500 line-through decoration-slate-300">Lot balonem o wschodzie słońca</span>
<span className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5 font-medium">Atrakcje</span>
</div>
</div>
<div className="flex items-center gap-3 pl-2">
<span className="text-xs font-semibold text-slate-900 tabular-nums whitespace-nowrap">850 PLN</span>
<label className="checkbox-wrapper cursor-pointer relative flex items-center">
<input className="peer sr-only" onchange="toggleItem(6)" type="checkbox"/>
<div className="w-5 h-5 border border-slate-300 rounded bg-white transition-all flex items-center justify-center hover:border-slate-400 peer-focus:ring-2 peer-focus:ring-teal-100">
<svg className="w-3 h-3 text-white hidden pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</label>
</div>
</div><div className="group flex items-center justify-between p-4 hover:bg-slate-50 transition-colors bg-slate-50/50 opacity-60">
<div className="flex items-start gap-3 flex-1">
<div className="mt-0.5 text-slate-400 group-hover:text-teal-600 transition-colors">
<svg className="lucide lucide-user-check w-4 h-4" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900 text-slate-500 line-through decoration-slate-300">Prywatny przewodnik (Język polski)</span>
<span className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5 font-medium">Obsługa</span>
</div>
</div>
<div className="flex items-center gap-3 pl-2">
<span className="text-xs font-semibold text-slate-900 tabular-nums whitespace-nowrap">1 500 PLN</span>
<label className="checkbox-wrapper cursor-pointer relative flex items-center">
<input className="peer sr-only" onchange="toggleItem(7)" type="checkbox"/>
<div className="w-5 h-5 border border-slate-300 rounded bg-white transition-all flex items-center justify-center hover:border-slate-400 peer-focus:ring-2 peer-focus:ring-teal-100">
<svg className="w-3 h-3 text-white hidden pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</label>
</div>
</div></div>

<div className="p-6 bg-slate-50/50 border-t border-slate-200">
<div className="flex justify-between items-end mb-2">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Szacowana cena / os.</span>
<span className="text-3xl font-bold tracking-tight text-slate-900" id="total-price">9 700 PLN</span>
</div>
<div className="flex justify-between items-center mb-6">
<span className="text-xs text-slate-400">Podróżujący:</span>
<div className="flex items-center bg-white border border-slate-200 rounded-lg p-1 shadow-sm">
<button className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded transition-colors" onclick="changePax(-1)">-</button>
<span className="w-8 text-center text-sm font-semibold text-slate-900" id="pax-count">2</span>
<button className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded transition-colors" onclick="changePax(1)">+</button>
</div>
</div>
<button className="group w-full bg-slate-900 hover:bg-teal-700 text-white text-sm font-semibold py-4 rounded-xl transition-all shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2">
<span>Rezerwuj wstępnie</span>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-slate-100 bg-white py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all">
<div className="w-6 h-6 bg-teal-800 rounded flex items-center justify-center text-white">
<span className="text-[10px] font-bold">SL</span>
</div>
<span className="text-xs font-semibold text-slate-900">SRI LANKA EXPEDITION</span>
</div>
<div className="flex gap-6 text-xs text-slate-400">
<a className="hover:text-slate-600 transition-colors" href="#">Polityka Prywatności</a>
<a className="hover:text-slate-600 transition-colors" href="#">Regulamin</a>
<span>© 2024</span>
</div>
</div>
</footer>



    </>
  );
}
