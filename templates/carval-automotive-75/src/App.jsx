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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Comprehensive Car Data Structure
        const carData = {
            "skoda": { name: "Škoda", models: ["Citigo", "Enyaq", "Fabia", "Kamiq", "Karoq", "Kodiaq", "Octavia", "Rapid", "Roomster", "Scala", "Superb", "Yeti"] },
            "vw": { name: "Volkswagen", models: ["Amarok", "Arteon", "Caddy", "Crafter", "Golf", "ID.3", "ID.4", "Jetta", "Multivan", "Passat", "Polo", "Scirocco", "Sharan", "T-Cross", "T-Roc", "Tiguan", "Touareg", "Touran", "Up!"] },
            "audi": { name: "Audi", models: ["A1", "A3", "A4", "A5", "A6", "A7", "A8", "Q2", "Q3", "Q5", "Q7", "Q8", "TT", "e-tron"] },
            "bmw": { name: "BMW", models: ["Rad 1", "Rad 2", "Rad 3", "Rad 4", "Rad 5", "Rad 6", "Rad 7", "Rad 8", "X1", "X2", "X3", "X4", "X5", "X6", "X7", "i3", "i4", "iX"] },
            "mercedes": { name: "Mercedes-Benz", models: ["A-Trieda", "B-Trieda", "C-Trieda", "CLA", "CLS", "E-Trieda", "G-Trieda", "GLA", "GLB", "GLC", "GLE", "GLS", "S-Trieda", "V-Trieda"] },
            "toyota": { name: "Toyota", models: ["Auris", "Aygo", "C-HR", "Camry", "Corolla", "Highlander", "Hilux", "Land Cruiser", "Prius", "PROACE", "RAV4", "Yaris"] },
            "ford": { name: "Ford", models: ["B-Max", "C-Max", "Edge", "Explorer", "Fiesta", "Focus", "Galaxy", "Kuga", "Mondeo", "Mustang", "Puma", "Ranger", "S-Max", "Transit"] },
            "kia": { name: "Kia", models: ["Carens", "Ceed", "EV6", "Niro", "Optima", "Picanto", "ProCeed", "Rio", "Sorento", "Soul", "Sportage", "Stinger", "Stonic", "XCeed"] },
            "hyundai": { name: "Hyundai", models: ["Bayon", "i10", "i20", "i30", "i40", "Ioniq", "Ioniq 5", "Kona", "Santa Fe", "Tucson"] },
            "peugeot": { name: "Peugeot", models: ["208", "308", "508", "2008", "3008", "5008", "Boxer", "Partner", "Rifter"] },
            "renault": { name: "Renault", models: ["Arkana", "Austral", "Captur", "Clio", "Espace", "Kadjar", "Kangoo", "Koleos", "Megane", "Scenic", "Talisman", "Twingo", "Zoe"] },
            "dacia": { name: "Dacia", models: ["Dokker", "Duster", "Jogger", "Lodgy", "Logan", "Sandero", "Spring"] },
            "opel": { name: "Opel", models: ["Astra", "Combo", "Corsa", "Crossland", "Grandland", "Insignia", "Mokka", "Vivaro", "Zafira"] },
            "suzuki": { name: "Suzuki", models: ["Ignis", "Jimny", "S-Cross", "Swace", "Swift", "SX4", "Vitara"] },
            "fiat": { name: "Fiat", models: ["500", "500X", "Doblo", "Ducato", "Panda", "Punto", "Tipo"] },
            "mazda": { name: "Mazda", models: ["CX-3", "CX-30", "CX-5", "CX-60", "Mazda2", "Mazda3", "Mazda6", "MX-5"] },
            "volvo": { name: "Volvo", models: ["S60", "S90", "V40", "V60", "V90", "XC40", "XC60", "XC90"] },
            "seat": { name: "SEAT", models: ["Alhambra", "Arona", "Ateca", "Ibiza", "Leon", "Tarraco"] },
            "honda": { name: "Honda", models: ["Civic", "CR-V", "e", "HR-V", "Jazz"] },
            "nissan": { name: "Nissan", models: ["Ariya", "Juke", "Leaf", "Micra", "Navara", "Qashqai", "X-Trail"] },
            "jeep": { name: "Jeep", models: ["Avenger", "Cherokee", "Compass", "Grand Cherokee", "Renegade", "Wrangler"] },
            "land_rover": { name: "Land Rover", models: ["Defender", "Discovery", "Discovery Sport", "Range Rover", "Range Rover Evoque", "Range Rover Sport", "Range Rover Velar"] },
            "porsche": { name: "Porsche", models: ["911", "Cayenne", "Cayman", "Macan", "Panamera", "Taycan"] },
            "lexus": { name: "Lexus", models: ["CT", "ES", "IS", "LS", "NX", "RX", "UX"] },
            "mini": { name: "MINI", models: ["Clubman", "Cooper", "Countryman"] },
            "alfa_romeo": { name: "Alfa Romeo", models: ["Giulia", "Stelvio", "Tonale"] },
            "mitsubishi": { name: "Mitsubishi", models: ["ASX", "Colt", "Eclipse Cross", "L200", "Outlander", "Space Star"] },
            "subaru": { name: "Subaru", models: ["Crosstrek", "Forester", "Impreza", "Levorg", "Outback", "XV"] }
        };

        // Initialize Dropdowns on Load
        document.addEventListener("DOMContentLoaded", () => {
            // Populate Makes
            const makeSelect = document.getElementById("make");
            
            // Sort makes alphabetically by their display name
            const sortedMakes = Object.keys(carData).sort((a, b) => 
                carData[a].name.localeCompare(carData[b].name)
            );

            sortedMakes.forEach(key => {
                let option = document.createElement("option");
                option.value = key;
                option.textContent = carData[key].name;
                makeSelect.appendChild(option);
            });

            // Populate Years (1995 to 2026)
            const yearSelect = document.getElementById("year");
            for (let y = 2026; y >= 1995; y--) {
                let option = document.createElement("option");
                option.value = y;
                option.textContent = y;
                yearSelect.appendChild(option);
            }
        });

        // Update Models dropdown based on selected Make
        function updateModels() {
            const make = document.getElementById("make").value;
            const modelSelect = document.getElementById("model");
            
            // Reset models
            modelSelect.innerHTML = '<option value="" disabled selected>Vyberte model</option>';
            
            if (make && carData[make]) {
                const models = carData[make].models;
                models.sort((a, b) => a.localeCompare(b)).forEach(model => {
                    let option = document.createElement("option");
                    option.value = model.toLowerCase().replace(/\s+/g, '-');
                    option.textContent = model;
                    modelSelect.appendChild(option);
                });
            }
        }

        // Handle Value Calculation and UI State
        function calculateValue() {
            const make = document.getElementById("make").value;
            const model = document.getElementById("model").value;
            const year = document.getElementById("year").value;
            
            if(!make || !model || !year) {
                alert("Prosím, vyplňte aspoň značku, model a rok výroby pre presný výpočet z bazárov.");
                return;
            }

            // Hide input form, show loading
            document.getElementById('input-view').classList.add('hidden');
            document.getElementById('loading-view').classList.remove('hidden');
            
            const loadingText = document.getElementById('loading-text');
            
            // Simulate gathering data from specific Slovak portals
            loadingText.textContent = "Sťahujem inzeráty z auto.bazos.sk...";
            
            setTimeout(() => {
                loadingText.textContent = "Analyzujem dáta z autobazar.eu...";
            }, 1000);
            
            setTimeout(() => {
                loadingText.textContent = "Porovnávam s autobazar.sk...";
            }, 2000);

            setTimeout(() => {
                loadingText.textContent = "Agregujem finálne ceny pre SK trh...";
            }, 3000);
            
            // Show results
            setTimeout(() => {
                document.getElementById('loading-view').classList.add('hidden');
                document.getElementById('results-view').classList.remove('hidden');
            }, 4000);
        }

        // Reset to initial state
        function resetForm() {
            document.getElementById('results-view').classList.add('hidden');
            document.getElementById('input-view').classList.remove('hidden');
        }
    
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
      

<header className="w-full bg-white border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
<span className="text-white text-sm font-semibold tracking-tighter">CV</span>
</div>
<span className="text-black text-base font-medium tracking-tight">CarVal</span>
</div>
<nav className="hidden sm:flex items-center gap-6">
<a className="text-sm font-medium hover:text-black transition-colors" href="#">Ako to funguje</a>
<a className="text-sm font-medium hover:text-black transition-colors" href="#">Trhové trendy</a>
</nav>
<div className="flex items-center">
<a className="text-sm font-medium text-black hover:text-gray-600 transition-colors" href="#">Prihlásiť sa</a>
</div>
</div>
</header>

<main className="flex-grow flex flex-col items-center justify-center px-4 py-12 sm:py-24 w-full">
<div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="flex flex-col max-w-lg">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 w-fit mb-6">
<span className="flex h-2 w-2 rounded-full bg-black"></span>
<span className="text-xs font-medium text-black">Slovenský trh (SK)</span>
</div>
<h1 className="text-4xl sm:text-5xl font-semibold text-black tracking-tight leading-tight mb-6">
                    Zistite presnú hodnotu vášho auta.
                </h1>
<p className="text-base sm:text-lg font-normal text-gray-500 leading-relaxed mb-8">
                    Analyzujeme výhradne slovenský trh. Získajte okamžité ocenenie založené na reálnych inzerátoch z najväčších slovenských autobazárov.
                </p>
<div className="flex flex-col gap-4">
<div className="flex items-start gap-3">
<div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-black">
<iconify-icon className="text-sm" icon="solar:database-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-black">Lokálne dáta v reálnom čase</h3>
<p className="text-xs text-gray-500 mt-0.5">Prehľadávame Bazoš.sk, Autobazar.eu a Autobazar.sk.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-black">
<iconify-icon className="text-sm" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-black">100% zadarmo a okamžite</h3>
<p className="text-xs text-gray-500 mt-0.5">Žiadne skryté poplatky, odhad získate za pár sekúnd.</p>
</div>
</div>
</div>
</div>

<div className="w-full relative">

<div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-6 sm:p-8 transition-opacity duration-300 opacity-100" id="input-view">
<div className="mb-6">
<h2 className="text-lg font-medium text-black tracking-tight">Detaily vozidla</h2>
<p className="text-xs text-gray-500 mt-1">Zadajte špecifikácie pre výpočet hodnoty v SR.</p>
</div>
<form className="space-y-5">

<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5" htmlFor="make">Značka</label>
<div className="relative">
<select className="block w-full rounded-lg border-0 py-2.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-black bg-gray-50 hover:bg-gray-100 transition-colors text-sm cursor-pointer outline-none" id="make" name="make" onchange="updateModels()">
<option disabled="" selected="" value="">Vyberte značku</option>

</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-base" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5" htmlFor="model">Model</label>
<div className="relative">
<select className="block w-full rounded-lg border-0 py-2.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-black bg-gray-50 hover:bg-gray-100 transition-colors text-sm cursor-pointer outline-none" id="model" name="model">
<option disabled="" selected="" value="">Najprv vyberte značku</option>

</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-base" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5" htmlFor="year">Rok výroby</label>
<div className="relative">
<select className="block w-full rounded-lg border-0 py-2.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-black bg-gray-50 hover:bg-gray-100 transition-colors text-sm cursor-pointer outline-none" id="year" name="year">
<option disabled="" selected="" value="">Vyberte rok</option>

</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-base" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5" htmlFor="mileage">Najazdené kilometre</label>
<div className="relative">
<input className="block w-full rounded-lg border-0 py-2.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm bg-white transition-shadow outline-none" id="mileage" name="mileage" placeholder="napr. 45000" type="number"/>
</div>
</div>
</div>

<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5" htmlFor="condition">Celkový stav</label>
<div className="relative">
<select className="block w-full rounded-lg border-0 py-2.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-black bg-gray-50 hover:bg-gray-100 transition-colors text-sm cursor-pointer outline-none" id="condition" name="condition">
<option disabled="" selected="" value="">Vyberte stav</option>
<option value="excellent">Výborný (Ako nové, bez chýb)</option>
<option value="good">Dobrý (Drobné známky používania)</option>
<option value="fair">Uspokojivý (Viditeľné opotrebenie, menšie opravy)</option>
<option value="poor">Zlý (Výrazné poškodenie alebo mechanické chyby)</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-base" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div className="pt-2">
<button className="group w-full flex items-center justify-center gap-2 rounded-lg bg-black px-4 py-3 text-sm font-medium text-white hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-all active:scale-[0.98]" onclick="calculateValue()" type="button">
                                Vypočítať hodnotu z lokálnych dát
                                <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</form>
</div>

<div className="hidden bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8 flex flex-col items-center justify-center h-full min-h-[400px]" id="loading-view">
<iconify-icon className="text-3xl text-black animate-spin mb-4" icon="solar:spinner-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-base font-medium text-black">Analyzujeme slovenské bazáre</h3>
<p className="text-sm text-gray-500 mt-1 text-center" id="loading-text">Spúšťam analýzu...</p>
</div>

<div className="hidden bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-6 sm:p-8 flex flex-col h-full" id="results-view">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-lg font-medium text-black tracking-tight">Odhadovaná hodnota na SK trhu</h2>
<p className="text-xs text-gray-500 mt-1">Pre vaše zadané vozidlo</p>
</div>
<div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
<iconify-icon className="text-xl" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex flex-col items-center justify-center mb-6">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Trhová cena</span>
<div className="text-4xl font-semibold text-black tracking-tight">€12 500 - €14 200</div>
<p className="text-xs text-gray-400 mt-3 text-center max-w-xs">
                            Ideálna predajná cena pri priamom predaji na Slovensku.
                        </p>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="rounded-xl border border-gray-100 p-4">
<div className="flex items-center gap-2 text-gray-500 mb-2">
<iconify-icon className="text-sm" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium">Výkup bazárom</span>
</div>
<div className="text-base font-medium text-black">od €11 000</div>
</div>
<div className="rounded-xl border border-gray-100 p-4">
<div className="flex items-center gap-2 text-gray-500 mb-2">
<iconify-icon className="text-sm" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium">Súkromná inzercia</span>
</div>
<div className="text-base font-medium text-black">do €14 200</div>
</div>
</div>
<div className="flex items-start gap-2 mb-8 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
<iconify-icon className="text-blue-500 text-sm mt-0.5 flex-shrink-0" icon="solar:info-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-xs text-gray-500">
                            Ceny sú vypočítané výhradne na základe aktuálnej agregovanej ponuky portálov <strong>auto.bazos.sk</strong>, <strong>autobazar.eu</strong> a <strong>autobazar.sk</strong>.
                        </p>
</div>
<div className="mt-auto space-y-3">
<button className="w-full flex items-center justify-center gap-2 rounded-lg bg-black px-4 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-all active:scale-[0.98]" type="button">
                            Zobraziť podobné inzeráty
                            <iconify-icon className="text-lg" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="w-full flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-gray-600 border border-gray-200 hover:bg-gray-50 hover:text-black transition-all active:scale-[0.98]" onclick="resetForm()" type="button">
<iconify-icon className="text-lg" icon="solar:refresh-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Vypočítať pre iné auto
                        </button>
</div>
</div>
</div>
</div>
</main>

<footer className="w-full border-t border-gray-100 bg-white mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<span className="text-black text-sm font-semibold tracking-tighter">CV.</span>
<span className="text-xs text-gray-400">© 2024 CarVal Inc.</span>
</div>
<div className="flex gap-6">
<a className="text-xs text-gray-500 hover:text-black transition-colors" href="#">Súkromie</a>
<a className="text-xs text-gray-500 hover:text-black transition-colors" href="#">Podmienky</a>
<a className="text-xs text-gray-500 hover:text-black transition-colors" href="#">Kontakt</a>
</div>
</div>
</footer>



    </>
  );
}
