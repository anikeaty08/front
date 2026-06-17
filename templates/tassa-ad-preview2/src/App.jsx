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



        // Init Icons
        lucide.createIcons();

        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Chart.js Init
        const ctx = document.getElementById('priceChart').getContext('2d');
        const priceChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Gen', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Des'],
                datasets: [{
                    label: 'Preu mitjà Espresso (€)',
                    data: [1.65, 1.68, 1.70, 1.72, 1.73, 1.75, 1.78, 1.80, 1.78, 1.76, 1.75, 1.75],
                    borderColor: '#E05A38',
                    backgroundColor: 'rgba(224, 90, 56, 0.05)',
                    borderWidth: 2,
                    pointBackgroundColor: '#FFFDF5',
                    pointBorderColor: '#E05A38',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: '#2C2C2C',
                        titleFont: { family: 'Plus Jakarta Sans', size: 13 },
                        bodyFont: { family: 'Plus Jakarta Sans', size: 13 },
                        padding: 12,
                        cornerRadius: 8,
                        displayColors: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 1.5,
                        grid: { color: '#EEEEEE', borderDash: [4, 4] },
                        ticks: { font: { family: 'Plus Jakarta Sans' }, color: '#666666' }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { font: { family: 'Plus Jakarta Sans' }, color: '#666666' }
                    }
                }
            }
        });

        // Leaflet Map Init (Centered on Andorra)
        const map = L.map('map', { scrollWheelZoom: false }).setView([42.5063, 1.5218], 12);
        
        // Using CartoDB Positron for the clean Swiss style look
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
            subdomains: 'abcd',
            maxZoom: 19
        }).addTo(map);

        // Custom Icon Function
        const createIcon = (color) => {
            return L.divIcon({
                className: 'custom-div-icon',
                html: `<div style="background-color: ${color}; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.2);"></div>`,
                iconSize: [12, 12],
                iconAnchor: [6, 6]
            });
        };

        // Dummy Markers
        const markers = [
            { pos: [42.5078, 1.5211], name: "Café Central", price: "1,60 €", color: "#4CAF50" }, // Andorra la Vella
            { pos: [42.5095, 1.5360], name: "BonDia Cafè", price: "1,90 €", color: "#F44336" }, // Escaldes
            { pos: [42.5348, 1.5802], name: "Espresso 42", price: "1,85 €", color: "#E05A38" }, // Encamp
            { pos: [42.5469, 1.5140], name: "La Tassa", price: "1,70 €", color: "#E05A38" }, // La Massana
            { pos: [42.5735, 1.4850], name: "Mountain Brew", price: "1,95 €", color: "#F44336" }, // Arinsal
            { pos: [42.5563, 1.5330], name: "Hidden Gem", price: "1,55 €", color: "#4CAF50" }  // Ordino
        ];

        markers.forEach(m => {
            L.marker(m.pos, { icon: createIcon(m.color) })
                .addTo(map)
                .bindPopup(`
                    <div style="width: 200px;">
                        <div style="height: 100px; background-color: #eee; background-image: url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=300&auto=format&fit=crop'); background-size: cover;"></div>
                        <div style="padding: 12px;">
                            <h3 style="margin: 0 0 4px; font-weight: 700; color: #2C2C2C;">${m.name}</h3>
                            <span style="font-size: 12px; font-weight: 600; color: ${m.color}; background: #FFFDF5; padding: 2px 6px; border-radius: 4px; border: 1px solid #EEE;">${m.price}</span>
                        </div>
                    </div>
                `);
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
      

<a className="fixed bottom-6 right-6 z-50 bg-[#E05A38] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 flex items-center justify-center gap-2 md:hidden" href="#comparteix">
<i className="w-6 h-6" data-lucide="coffee" strokeWidth="1.5"></i>
<span className="font-medium text-sm">Comparteix preu</span>
</a>

<header className="sticky top-0 z-40 bg-[#FFFDF5]/95 backdrop-blur-sm border-b border-[#EEEEEE]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="flex items-center gap-2 group" href="#">
<div className="relative w-8 h-8 text-[#2C2C2C]">
<i className="w-8 h-8" data-lucide="coffee" strokeWidth="1.5"></i>
<i className="w-4 h-4 absolute -top-1 right-0 text-[#E05A38] bg-[#FFFDF5] rounded-full p-0.5" data-lucide="mountain" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-bold tracking-tight text-[#2C2C2C]">tassa.ad</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-[#2C2C2C] hover:text-[#E05A38] font-medium text-sm transition-colors" href="#">Inici</a>
<div className="relative group">
<button className="flex items-center gap-1 text-[#2C2C2C] hover:text-[#E05A38] font-medium text-sm transition-colors">
                            Explora <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>

<div className="absolute top-full left-0 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
<div className="bg-white rounded-xl shadow-lg border border-[#EEEEEE] p-2 flex flex-col gap-1">
<a className="block px-4 py-2 hover:bg-[#FFFDF5] text-[#2C2C2C] text-sm rounded-lg" href="#">Totes les parròquies</a>
<a className="block px-4 py-2 hover:bg-[#FFFDF5] text-[#2C2C2C] text-sm rounded-lg" href="#">Cafès amb WiFi</a>
<a className="block px-4 py-2 hover:bg-[#FFFDF5] text-[#2C2C2C] text-sm rounded-lg" href="#">Per treballar</a>
<a className="block px-4 py-2 hover:bg-[#FFFDF5] text-[#2C2C2C] text-sm rounded-lg" href="#">Specialty Coffee</a>
</div>
</div>
</div>
<a className="text-[#2C2C2C] hover:text-[#E05A38] font-medium text-sm transition-colors" href="#index">Índex del Cafè</a>
<a className="text-[#2C2C2C] hover:text-[#E05A38] font-medium text-sm transition-colors" href="#">Ofertes de Treball</a>
<a className="text-[#2C2C2C] hover:text-[#E05A38] font-medium text-sm transition-colors" href="#">Blog</a>
</nav>

<div className="hidden md:flex items-center gap-4">
<a className="text-[#E05A38] font-medium text-sm hover:underline" href="#comparteix">Comparteix preu</a>
<a className="bg-[#E05A38] text-white px-5 py-2.5 rounded-full font-medium text-sm hover:bg-[#c44d30] transition-colors shadow-sm" href="#">
                        Publica cafeteria
                    </a>
</div>

<button className="md:hidden p-2 text-[#2C2C2C]" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="md:hidden hidden bg-white border-t border-[#EEEEEE] absolute w-full" id="mobile-menu">
<div className="px-4 py-6 space-y-4">
<a className="block text-lg font-medium text-[#2C2C2C]" href="#">Inici</a>
<a className="block text-lg font-medium text-[#2C2C2C]" href="#">Explora</a>
<a className="block text-lg font-medium text-[#2C2C2C]" href="#">Índex del Cafè</a>
<a className="block text-lg font-medium text-[#2C2C2C]" href="#">Ofertes de Treball</a>
<a className="block text-lg font-medium text-[#2C2C2C]" href="#">Blog</a>
<div className="pt-4 border-t border-[#EEEEEE] flex flex-col gap-3">
<a className="w-full text-center bg-[#E05A38] text-white px-5 py-3 rounded-xl font-medium" href="#">Publica la teva cafeteria</a>
</div>
</div>
</div>
</header>

<section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Pirineus Andorra" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1548777123-e216912df7d8?q=80&amp;w=2535&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40"></div>
</div>
<div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 drop-shadow-sm">
                Descobreix les millors cafeteries d'Andorra
            </h1>
<p className="text-white/90 text-lg sm:text-xl md:text-2xl font-normal max-w-2xl mb-10 drop-shadow-sm">
                Troba el lloc ideal per prendre un cafè, treballar o relaxar-te.
            </p>

<div className="w-full max-w-3xl bg-white p-2 rounded-2xl shadow-xl flex flex-col md:flex-row gap-2">
<div className="flex-1 relative border-b md:border-b-0 md:border-r border-[#EEEEEE]">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="w-5 h-5 text-[#666666]" data-lucide="search" strokeWidth="1.5"></i>
</div>
<select className="block w-full pl-10 pr-3 py-3 text-[#2C2C2C] bg-transparent focus:outline-none appearance-none cursor-pointer">
<option>Què busques?</option>
<option>WiFi ràpid</option>
<option>Specialty coffee</option>
<option>Terrassa</option>
<option>Preu baix</option>
</select>
</div>
<div className="flex-1 relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="w-5 h-5 text-[#666666]" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<select className="block w-full pl-10 pr-3 py-3 text-[#2C2C2C] bg-transparent focus:outline-none appearance-none cursor-pointer">
<option>On?</option>
<option>Andorra la Vella</option>
<option>Escaldes-Engordany</option>
<option>La Massana</option>
<option>Encamp</option>
<option>Ordino</option>
</select>
</div>
<button className="bg-[#E05A38] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#c44d30] transition-colors w-full md:w-auto">
                    Cerca
                </button>
</div>
</div>
</section>

<section className="relative z-20 px-4 sm:px-6 -mt-16 md:-mt-20 mb-20">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">

<div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center gap-3">
<div className="w-12 h-12 bg-[#FFFDF5] rounded-full flex items-center justify-center text-[#E05A38]">
<i className="w-6 h-6" data-lucide="wifi" strokeWidth="1.5"></i>
</div>
<h3 className="font-semibold text-lg text-[#2C2C2C]">Cafès amb WiFi i endolls</h3>
</div>

<div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center gap-3">
<div className="w-12 h-12 bg-[#FFFDF5] rounded-full flex items-center justify-center text-[#E05A38]">
<i className="w-6 h-6" data-lucide="laptop" strokeWidth="1.5"></i>
</div>
<h3 className="font-semibold text-lg text-[#2C2C2C]">Perfectes per a treballar</h3>
</div>

<div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center gap-3">
<div className="w-12 h-12 bg-[#FFFDF5] rounded-full flex items-center justify-center text-[#E05A38]">
<i className="w-6 h-6" data-lucide="euro" strokeWidth="1.5"></i>
</div>
<h3 className="font-semibold text-lg text-[#2C2C2C]">Preus actualitzats per la comunitat</h3>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#FFFDF5]" id="index">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
<div>
<h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-2 tracking-tight">Índex del Cafè d'Andorra</h2>
<p className="text-[#666666] text-lg">Evolució del preu de l'espresso a les 7 parròquies.</p>
</div>
<a className="text-[#E05A38] font-medium flex items-center gap-1 hover:gap-2 transition-all" href="#">
                    Veure informe complet <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-3xl p-8 shadow-sm border border-[#EEEEEE] flex flex-col justify-center">
<span className="text-[#666666] font-medium mb-1">Preu mitjà actual (Espresso)</span>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-6xl font-bold text-[#2C2C2C] tracking-tighter">1,75 €</span>
</div>
<div className="flex items-center gap-2 mb-8">
<span className="bg-[#FFFDF5] text-[#4CAF50] text-sm font-semibold px-2 py-1 rounded-lg border border-[#4CAF50]/20 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="trending-up" strokeWidth="2"></i> +2.3%
                        </span>
<span className="text-[#666666] text-sm">respecte el mes passat</span>
</div>
<button className="w-full bg-[#E05A38] text-white py-3 rounded-xl font-medium hover:bg-[#c44d30] transition-colors">
                        Contribueix amb un preu
                    </button>
</div>

<div className="lg:col-span-2 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-[#EEEEEE]">
<canvas className="w-full h-full min-h-[300px]" id="priceChart"></canvas>
</div>
</div>
</div>
</section>

<section className="w-full relative h-[400px] md:h-[600px] bg-[#EEEEEE]">
<div className="w-full h-full z-10" id="map"></div>

<div className="hidden md:block absolute top-6 left-6 z-[400] bg-white p-4 rounded-xl shadow-lg max-w-xs border border-[#EEEEEE]">
<h3 className="font-bold text-[#2C2C2C] mb-3">Explora cafeteries</h3>
<div className="space-y-2">
<label className="flex items-center gap-2 text-sm text-[#666666] cursor-pointer">
<input checked="" className="accent-[#E05A38] w-4 h-4 rounded" type="checkbox"/>
                    Obertes ara
                </label>
<label className="flex items-center gap-2 text-sm text-[#666666] cursor-pointer">
<input className="accent-[#E05A38] w-4 h-4 rounded" type="checkbox"/>
                    Amb WiFi
                </label>
<label className="flex items-center gap-2 text-sm text-[#666666] cursor-pointer">
<input className="accent-[#E05A38] w-4 h-4 rounded" type="checkbox"/>
                    Specialty Coffee
                </label>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#FFFDF5]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-12">
<h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4 tracking-tight">Cafeteries destacades</h2>
<p className="text-[#666666] text-lg">Selecció de la setmana basada en les valoracions de la comunitat.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-[#EEEEEE] group">
<div className="relative h-48 overflow-hidden">
<img alt="Café Central" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 right-4 bg-white/90 backdrop-blur text-[#2C2C2C] text-xs font-bold px-3 py-1.5 rounded-full border border-[#EEEEEE]">
                            Andorra la Vella
                        </span>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-3">
<h3 className="text-xl font-bold text-[#2C2C2C]">Café Central</h3>
<span className="bg-[#4CAF50]/10 text-[#4CAF50] text-xs font-semibold px-2 py-1 rounded-md">1,60 €</span>
</div>
<p className="text-[#666666] text-sm mb-4 line-clamp-2">Ideal per treballar amb portàtil. Ambient tranquil i molts endolls disponibles.</p>
<div className="flex gap-4 border-t border-[#EEEEEE] pt-4 mb-4">
<div className="flex items-center gap-1.5 text-[#666666] text-xs">
<i className="w-4 h-4 text-[#E05A38]" data-lucide="wifi" strokeWidth="1.5"></i> 300Mb
                            </div>
<div className="flex items-center gap-1.5 text-[#666666] text-xs">
<i className="w-4 h-4 text-[#E05A38]" data-lucide="plug" strokeWidth="1.5"></i> Sí
                            </div>
</div>
<a className="block w-full text-center border border-[#E05A38] text-[#E05A38] bg-transparent hover:bg-[#E05A38] hover:text-white font-medium py-2.5 rounded-xl transition-colors" href="#">
                            Veure fitxa
                        </a>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-[#EEEEEE] group">
<div className="relative h-48 overflow-hidden">
<img alt="BonDia Cafè" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&amp;w=2047&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 right-4 bg-white/90 backdrop-blur text-[#2C2C2C] text-xs font-bold px-3 py-1.5 rounded-full border border-[#EEEEEE]">
                            Escaldes
                        </span>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-3">
<h3 className="text-xl font-bold text-[#2C2C2C]">BonDia Cafè</h3>
<span className="bg-[#F44336]/10 text-[#F44336] text-xs font-semibold px-2 py-1 rounded-md">1,90 €</span>
</div>
<p className="text-[#666666] text-sm mb-4 line-clamp-2">Terrassa amb vistes espectaculars als Pirineus. Perfecte per relaxar-se.</p>
<div className="flex gap-4 border-t border-[#EEEEEE] pt-4 mb-4">
<div className="flex items-center gap-1.5 text-[#666666] text-xs">
<i className="w-4 h-4 text-[#E05A38]" data-lucide="sun" strokeWidth="1.5"></i> Terrassa
                            </div>
<div className="flex items-center gap-1.5 text-[#666666] text-xs">
<i className="w-4 h-4 text-[#E05A38]" data-lucide="award" strokeWidth="1.5"></i> Premium
                            </div>
</div>
<a className="block w-full text-center border border-[#E05A38] text-[#E05A38] bg-transparent hover:bg-[#E05A38] hover:text-white font-medium py-2.5 rounded-xl transition-colors" href="#">
                            Veure fitxa
                        </a>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-[#EEEEEE] group">
<div className="relative h-48 overflow-hidden">
<img alt="Espresso 42" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 right-4 bg-white/90 backdrop-blur text-[#2C2C2C] text-xs font-bold px-3 py-1.5 rounded-full border border-[#EEEEEE]">
                            Encamp
                        </span>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-3">
<h3 className="text-xl font-bold text-[#2C2C2C]">Espresso 42</h3>
<span className="bg-orange-100 text-[#E05A38] text-xs font-semibold px-2 py-1 rounded-md">1,85 €</span>
</div>
<p className="text-[#666666] text-sm mb-4 line-clamp-2">Specialty third wave, V60 i Aeropress. El millor cafè tècnic de la zona.</p>
<div className="flex gap-4 border-t border-[#EEEEEE] pt-4 mb-4">
<div className="flex items-center gap-1.5 text-[#666666] text-xs">
<i className="w-4 h-4 text-[#E05A38]" data-lucide="droplet" strokeWidth="1.5"></i> V60
                            </div>
<div className="flex items-center gap-1.5 text-[#666666] text-xs">
<i className="w-4 h-4 text-[#E05A38]" data-lucide="bean" strokeWidth="1.5"></i> Aràbica
                            </div>
</div>
<a className="block w-full text-center border border-[#E05A38] text-[#E05A38] bg-transparent hover:bg-[#E05A38] hover:text-white font-medium py-2.5 rounded-xl transition-colors" href="#">
                            Veure fitxa
                        </a>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center justify-center gap-2 text-[#2C2C2C] font-semibold hover:text-[#E05A38] transition-colors" href="#">
                    Veure totes les cafeteries <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="py-16 bg-[#EEEEEE]/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-bold text-[#2C2C2C] mb-8 tracking-tight">Fotos recents de la comunitat</h2>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
<img alt="Coffee" className="w-full h-48 object-cover rounded-xl shadow-sm" src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<img alt="Coffee Shop" className="w-full h-48 object-cover rounded-xl shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Winter Coffee" className="w-full h-48 object-cover rounded-xl shadow-sm" src="https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<img alt="Latte Art" className="w-full h-48 object-cover rounded-xl shadow-sm" src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<img alt="Espresso" className="hidden lg:block w-full h-48 object-cover rounded-xl shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</section>

<section className="py-16 bg-[#E05A38] text-white">
<div className="max-w-4xl mx-auto px-4 text-center">
<h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Ets propietari?</h2>
<p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">Reclama la teva fitxa gratis, actualitza els preus i atrau més clients locals i nòmades digitals.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-white text-[#E05A38] px-8 py-3.5 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg">
                    Reclama ara
                </button>
<button className="bg-transparent border-2 border-white/30 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                    Publica ofertes de feina
                </button>
</div>
</div>
</section>

<footer className="bg-[#FFFDF5] pt-16 pb-8 border-t border-[#EEEEEE]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<i className="w-6 h-6 text-[#2C2C2C]" data-lucide="coffee" strokeWidth="1.5"></i>
<span className="text-lg font-bold text-[#2C2C2C]">tassa.ad</span>
</a>
<p className="text-[#666666] text-sm leading-relaxed">
                        L'observatori econòmic i cultural del cafè al Principat d'Andorra. Fet amb amor i cafeïna.
                    </p>
</div>
<div>
<h4 className="font-bold text-[#2C2C2C] mb-4">Descobreix</h4>
<ul className="space-y-3 text-sm text-[#666666]">
<li><a className="hover:text-[#E05A38]" href="#">Totes les cafeteries</a></li>
<li><a className="hover:text-[#E05A38]" href="#">Índex del Cafè</a></li>
<li><a className="hover:text-[#E05A38]" href="#">Mapa interactiu</a></li>
<li><a className="hover:text-[#E05A38]" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-[#2C2C2C] mb-4">Comunitat</h4>
<ul className="space-y-3 text-sm text-[#666666]">
<li><a className="hover:text-[#E05A38]" href="#">Sobre nosaltres</a></li>
<li><a className="hover:text-[#E05A38]" href="#">Contacte</a></li>
<li><a className="hover:text-[#E05A38]" href="#">Ofertes de treball</a></li>
<li><a className="hover:text-[#E05A38]" href="#">Fes una contribució</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-[#2C2C2C] mb-4">Segueix-nos</h4>
<div className="flex gap-4 mb-6">
<a className="text-[#666666] hover:text-[#E05A38]" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-[#666666] hover:text-[#E05A38]" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-[#666666] hover:text-[#E05A38]" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
<button className="text-[#E05A38] text-sm font-semibold border border-[#E05A38] px-4 py-2 rounded-lg hover:bg-[#E05A38] hover:text-white transition-colors">
                        Newsletter setmanal
                    </button>
</div>
</div>
<div className="pt-8 border-t border-[#EEEEEE] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#666666]">
<p>© 2023 tassa.ad. Tots els drets reservats.</p>
<div className="flex gap-6">
<a className="hover:text-[#2C2C2C]" href="#">Privacitat</a>
<a className="hover:text-[#2C2C2C]" href="#">Cookies</a>
<a className="hover:text-[#2C2C2C]" href="#">Termes</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
