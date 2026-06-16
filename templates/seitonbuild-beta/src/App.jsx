import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons({
            attrs: {
                class: "",
                "stroke-width": 1.5
            }
        });

        // Set Date
        const dateElement = document.getElementById('current-date');
        const options = { weekday: 'long', day: 'numeric', month: 'short' };
        dateElement.textContent = new Date().toLocaleDateString('es-ES', options);

        // Vehicle Data for Cascade
        const vehicleData = {
            "2024": {
                "Toyota": ["Corolla", "Hilux", "Yaris", "Rav4"],
                "Volkswagen": ["Golf", "Amarok", "T-Cross", "Taos"],
                "Ford": ["Ranger", "Mustang", "F-150", "Bronco"],
                "Chevrolet": ["Cruze", "Onix", "Tracker", "S10"]
            },
            "2023": {
                "Toyota": ["Corolla", "Hilux", "Yaris", "Etios"],
                "Volkswagen": ["Gol", "Polo", "Virtus", "Saveiro"],
                "Ford": ["Ranger", "Maverick", "Territory"],
                "Chevrolet": ["Cruze", "Onix", "Spin"]
            },
            "2022": {
                "Toyota": ["Corolla", "Hilux"],
                "Volkswagen": ["Gol", "Voyage"],
                "Ford": ["Ecosport", "Ka"],
                "Chevrolet": ["Prisma", "Cobalt"]
            }
        };

        const yearSelect = document.getElementById('select-year');
        const makeSelect = document.getElementById('select-make');
        const modelSelect = document.getElementById('select-model');

        // Init Years
        let yearOptions = '<option value="">Año...</option>';
        Object.keys(vehicleData).sort((a,b) => b-a).forEach(year => {
            yearOptions += `<option value="${year}">${year}</option>`;
        });
        yearSelect.innerHTML = yearOptions;

        // Handle Year Change
        yearSelect.addEventListener('change', function() {
            const year = this.value;
            makeSelect.innerHTML = '<option value="">Marca...</option>';
            modelSelect.innerHTML = '<option value="">Modelo...</option>';
            modelSelect.disabled = true;

            if (year && vehicleData[year]) {
                let makes = Object.keys(vehicleData[year]);
                let makeOptions = '<option value="">Marca...</option>';
                makes.forEach(make => {
                    makeOptions += `<option value="${make}">${make}</option>`;
                });
                makeSelect.innerHTML = makeOptions;
                makeSelect.disabled = false;
            } else {
                makeSelect.disabled = true;
            }
        });

        // Handle Make Change
        makeSelect.addEventListener('change', function() {
            const year = yearSelect.value;
            const make = this.value;
            modelSelect.innerHTML = '<option value="">Modelo...</option>';

            if (year && make && vehicleData[year][make]) {
                let models = vehicleData[year][make];
                let modelOptions = '<option value="">Modelo...</option>';
                models.forEach(model => {
                    modelOptions += `<option value="${model}">${model}</option>`;
                });
                modelSelect.innerHTML = modelOptions;
                modelSelect.disabled = false;
            } else {
                modelSelect.disabled = true;
            }
        });

        // Tabs Logic
        function switchTab(type) {
            const tabs = ['auto', 'moto', 'heavy'];
            const activeClass = "bg-slate-900 text-white shadow-md shadow-slate-900/10".split(" ");
            const inactiveClass = "text-slate-500 hover:text-slate-900 hover:bg-slate-50".split(" ");

            tabs.forEach(t => {
                const btn = document.getElementById(`tab-${t}`);
                if (t === type) {
                    btn.classList.remove(...inactiveClass);
                    btn.classList.add(...activeClass);
                } else {
                    btn.classList.remove(...activeClass);
                    btn.classList.add(...inactiveClass);
                }
            });
            
            // Reset form for effect
            yearSelect.value = "";
            makeSelect.innerHTML = '<option value="">Marca...</option>';
            makeSelect.disabled = true;
            modelSelect.innerHTML = '<option value="">Modelo...</option>';
            modelSelect.disabled = true;
        }

        // Search Simulation
        function handleSearch(e) {
            e.preventDefault();
            const btn = document.getElementById('search-btn');
            const icon = document.getElementById('search-icon');
            const text = document.getElementById('search-text');
            const originalText = text.innerText;

            const year = yearSelect.value;
            const make = makeSelect.value;
            const model = modelSelect.value;

            // Loading state
            text.innerText = "Buscando...";
            icon.setAttribute('class', 'w-4 h-4 animate-spin');
            icon.innerHTML = '<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" class="opacity-25"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>'; // SVG path for spinner
            lucide.createIcons(); // refresh icon classes if needed (simpler: use simple text or CSS spinner class)

            setTimeout(() => {
                // Reset State
                text.innerText = originalText;
                lucide.createIcons(); // reset icons
                document.getElementById('search-icon').outerHTML = '<i data-lucide="search" class="w-4 h-4" id="search-icon"></i>';
                lucide.createIcons();

                // Validation or Success
                if (!year || !make) {
                     showToast("Seleccione al menos Año y Marca", "error");
                } else {
                    showToast(`Resultados para ${make} ${model || ''}`, "success");
                    document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });
                }
            }, 800);
        }

        // Toast Notification System
        function showToast(message, type = 'default') {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            
            let bgClass = "bg-slate-900 text-white";
            let icon = "info";
            
            if (type === 'error') {
                bgClass = "bg-red-600 text-white";
                icon = "alert-circle";
            } else if (type === 'success') {
                bgClass = "bg-green-600 text-white";
                icon = "check-circle";
            }

            toast.className = `flex items-center gap-3 px-4 py-3 rounded-lg shadow-xl shadow-slate-900/10 text-sm font-medium toast-enter pointer-events-auto backdrop-blur-md ${bgClass}`;
            toast.innerHTML = `
                <span>${message}</span>
            `;

            container.appendChild(toast);

            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateY(100%)';
                toast.style.transition = 'all 0.3s ease-in';
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        function toggleSearch() {
            showToast("Presiona Cmd+K para búsqueda global");
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2 pointer-events-none" id="toast-container"></div>

<nav className="fixed top-0 w-full z-50 border-b border-slate-200/60 glass-panel transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-14 md:h-16 items-center">

<a className="flex items-center gap-2 cursor-pointer group" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white shadow-lg shadow-slate-900/20 group-hover:bg-blue-600 transition-colors duration-300">
<i className="w-4 h-4" data-lucide="activity"></i>
</div>
<span className="text-sm md:text-base font-semibold tracking-tight text-slate-900">SEITON<span className="text-slate-400 font-normal">MOTORS</span></span>
</a>

<div className="hidden md:flex items-center space-x-1 bg-white/50 border border-slate-200/50 rounded-full px-2 py-1 shadow-sm backdrop-blur-sm">
<a className="text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-white px-3 py-1.5 rounded-full transition-all" href="#">Catálogo</a>
<a className="text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-white px-3 py-1.5 rounded-full transition-all" href="#">Marcas</a>
<a className="text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-white px-3 py-1.5 rounded-full transition-all" href="#">Empresa</a>
<a className="text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-white px-3 py-1.5 rounded-full transition-all" href="#">Soporte</a>
</div>

<div className="flex items-center gap-3">
<button className="hidden md:flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-slate-900 px-3 py-1.5 rounded-md hover:bg-slate-100 transition-colors" onclick="toggleSearch()">
<i className="w-4 h-4" data-lucide="search"></i>
<span className="opacity-70">Cmd+K</span>
</button>
<div className="h-4 w-px bg-slate-200 hidden md:block"></div>
<button className="relative group p-2 hover:bg-slate-100 rounded-md transition-colors" onclick="showToast('Carrito de compras vacío')">
<i className="w-4 h-4 text-slate-600 group-hover:text-slate-900" data-lucide="shopping-bag"></i>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-600 rounded-full border border-white"></span>
</button>
<button className="text-xs font-medium bg-slate-900 text-white px-3 py-2 rounded-lg hover:bg-slate-800 transition-all shadow-md shadow-slate-900/10 active:scale-95">
                        Acceso Clientes
                    </button>
</div>
</div>
</div>
</nav>

<main className="pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">

<div className="lg:col-span-6 text-center lg:text-left z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 text-xs font-medium mb-6 hover:border-blue-200 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                        Stock actualizado: hace 5 min
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                        Ingeniería y precisión <br/> en cada repuesto.
                    </h1>
<p className="text-base sm:text-lg text-slate-500 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                        La plataforma B2B de **Seiton Motors** para talleres y distribuidores. Acceda a +50,000 referencias con datos técnicos precisos y logística en 24h.
                    </p>

<div className="bg-white p-1 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/60 max-w-xl mx-auto lg:mx-0 backdrop-blur-xl">

<div className="flex gap-1 p-1 mb-2" id="search-tabs">
<button className="flex-1 text-xs font-medium bg-slate-900 text-white shadow-md shadow-slate-900/10 py-1.5 rounded-lg transition-all" id="tab-auto" onclick="switchTab('auto')">Automóviles</button>
<button className="flex-1 text-xs font-medium text-slate-500 hover:text-slate-900 py-1.5 rounded-lg hover:bg-slate-50 transition-colors" id="tab-moto" onclick="switchTab('moto')">Motocicletas</button>
<button className="flex-1 text-xs font-medium text-slate-500 hover:text-slate-900 py-1.5 rounded-lg hover:bg-slate-50 transition-colors" id="tab-heavy" onclick="switchTab('heavy')">Pesados</button>
</div>
<form id="search-form" onsubmit="handleSearch(event)">
<div className="grid grid-cols-3 gap-2 px-3 pb-3">
<div className="relative group">
<label className="text-[10px] font-semibold text-slate-400 mb-1 block uppercase tracking-wider">Año</label>
<div className="relative">
<select className="custom-select w-full bg-slate-50/50 hover:bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 block p-2.5 outline-none transition-all cursor-pointer font-medium" id="select-year">

</select>
<i className="absolute right-3 top-2.5 w-4 h-4 text-slate-400 pointer-events-none group-hover:text-slate-600 transition-colors" data-lucide="calendar"></i>
</div>
</div>
<div className="relative group">
<label className="text-[10px] font-semibold text-slate-400 mb-1 block uppercase tracking-wider">Marca</label>
<div className="relative">
<select className="custom-select w-full bg-slate-50/50 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 block p-2.5 outline-none transition-all cursor-pointer font-medium" disabled="" id="select-make">
<option value="">Marca...</option>
</select>
<i className="absolute right-3 top-2.5 w-4 h-4 text-slate-400 pointer-events-none group-hover:text-slate-600 transition-colors" data-lucide="chevron-down"></i>
</div>
</div>
<div className="relative group">
<label className="text-[10px] font-semibold text-slate-400 mb-1 block uppercase tracking-wider">Modelo</label>
<div className="relative">
<select className="custom-select w-full bg-slate-50/50 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 block p-2.5 outline-none transition-all cursor-pointer font-medium" disabled="" id="select-model">
<option value="">Modelo...</option>
</select>
<i className="absolute right-3 top-2.5 w-4 h-4 text-slate-400 pointer-events-none group-hover:text-slate-600 transition-colors" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div className="px-3 pb-3 pt-1">
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all shadow-lg shadow-slate-900/10 flex justify-center items-center gap-2 active:transform active:scale-[0.98]" id="search-btn" type="submit">
<i className="w-4 h-4" data-lucide="search" id="search-icon"></i>
<span id="search-text">Buscar Compatibilidad</span>
</button>
</div>
</form>
</div>
<div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-xs font-medium text-slate-500">
<span className="flex items-center gap-1.5"><i className="w-3.5 h-3.5 text-blue-600" data-lucide="check-circle"></i> VIN Decoder</span>
<span className="flex items-center gap-1.5"><i className="w-3.5 h-3.5 text-blue-600" data-lucide="check-circle"></i> Diagramas</span>
<span className="flex items-center gap-1.5"><i className="w-3.5 h-3.5 text-blue-600" data-lucide="check-circle"></i> API Access</span>
</div>
</div>

<div className="lg:col-span-6 mt-16 lg:mt-0 relative group">

<div className="absolute -inset-4 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-[2rem] opacity-70 blur-2xl group-hover:opacity-100 transition duration-1000"></div>
<div className="relative bg-white border border-slate-200/80 rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] overflow-hidden">

<div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/30">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400/20 border border-yellow-400/50"></div>
<div className="w-3 h-3 rounded-full bg-green-400/20 border border-green-400/50"></div>
</div>
<span className="text-[10px] font-mono text-slate-400">seiton_dash_v2.0</span>
</div>

<div className="p-6">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-sm font-semibold text-slate-900">Pedidos en curso</h3>
<p className="text-xs text-slate-500 mt-0.5" id="current-date">Cargando...</p>
</div>
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
</span>
</div>
<div className="space-y-3">

<div className="flex items-center justify-between p-3 bg-white hover:bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition-all cursor-default shadow-sm group/item">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center border border-blue-100 group-hover/item:scale-105 transition-transform">
<i className="w-5 h-5" data-lucide="disc"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Kit Frenos Delanteros</p>
<div className="flex items-center gap-2 mt-0.5">
<span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-500 font-medium">Brembo</span>
<span className="text-[10px] text-slate-400">En ruta</span>
</div>
</div>
</div>
<div className="text-right">
<span className="text-sm font-semibold text-slate-900">$124.00</span>
<p className="text-[10px] text-slate-400">Hace 2m</p>
</div>
</div>

<div className="flex items-center justify-between p-3 bg-white hover:bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition-all cursor-default shadow-sm group/item">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center border border-purple-100 group-hover/item:scale-105 transition-transform">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Alternador Bosch 120A</p>
<div className="flex items-center gap-2 mt-0.5">
<span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-500 font-medium">Bosch</span>
<span className="text-[10px] text-slate-400">Procesando</span>
</div>
</div>
</div>
<div className="text-right">
<span className="text-sm font-semibold text-slate-900">$215.00</span>
<p className="text-[10px] text-slate-400">Hace 15m</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-16 border-y border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Categorías Populares</h2>
<p className="text-sm text-slate-500 mt-1">Explora el inventario de Seiton por sistemas.</p>
</div>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 flex items-center gap-1 group transition-colors" href="#">
                    Ver catálogo completo <i className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<a className="group p-5 rounded-xl border border-slate-200 hover:border-blue-400/50 hover:shadow-[0_4px_20px_-2px_rgba(59,130,246,0.1)] transition-all bg-slate-50/30 hover:bg-white relative overflow-hidden" href="#" onclick="showToast('Filtrando categoría: Frenos')">
<div className="w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm">
<i className="w-5 h-5 text-slate-700 group-hover:text-blue-600 transition-colors" data-lucide="disc"></i>
</div>
<h3 className="text-sm font-medium text-slate-900">Frenos y Suspensión</h3>
<p className="text-xs text-slate-500 mt-1">1,240 productos</p>
</a>
<a className="group p-5 rounded-xl border border-slate-200 hover:border-blue-400/50 hover:shadow-[0_4px_20px_-2px_rgba(59,130,246,0.1)] transition-all bg-slate-50/30 hover:bg-white relative overflow-hidden" href="#" onclick="showToast('Filtrando categoría: Motor')">
<div className="w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm">
<i className="w-5 h-5 text-slate-700 group-hover:text-blue-600 transition-colors" data-lucide="activity"></i>
</div>
<h3 className="text-sm font-medium text-slate-900">Motor y Transmisión</h3>
<p className="text-xs text-slate-500 mt-1">890 productos</p>
</a>
<a className="group p-5 rounded-xl border border-slate-200 hover:border-blue-400/50 hover:shadow-[0_4px_20px_-2px_rgba(59,130,246,0.1)] transition-all bg-slate-50/30 hover:bg-white relative overflow-hidden" href="#" onclick="showToast('Filtrando categoría: Eléctrico')">
<div className="w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm">
<i className="w-5 h-5 text-slate-700 group-hover:text-blue-600 transition-colors" data-lucide="zap"></i>
</div>
<h3 className="text-sm font-medium text-slate-900">Sistema Eléctrico</h3>
<p className="text-xs text-slate-500 mt-1">2,100 productos</p>
</a>
<a className="group p-5 rounded-xl border border-slate-200 hover:border-blue-400/50 hover:shadow-[0_4px_20px_-2px_rgba(59,130,246,0.1)] transition-all bg-slate-50/30 hover:bg-white relative overflow-hidden" href="#" onclick="showToast('Filtrando categoría: Fluidos')">
<div className="w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm">
<i className="w-5 h-5 text-slate-700 group-hover:text-blue-600 transition-colors" data-lucide="droplets"></i>
</div>
<h3 className="text-sm font-medium text-slate-900">Fluidos y Filtros</h3>
<p className="text-xs text-slate-500 mt-1">540 productos</p>
</a>
</div>
</div>
</section>

<section className="py-16" id="products-section">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-4 mb-8">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Novedades Seiton Motors</h2>
<div className="h-px bg-slate-200 flex-1"></div>
<div className="flex gap-2">
<button className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center hover:bg-white hover:shadow-sm transition-all"><i className="w-4 h-4 text-slate-500" data-lucide="chevron-left"></i></button>
<button className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center hover:bg-white hover:shadow-sm transition-all"><i className="w-4 h-4 text-slate-500" data-lucide="chevron-right"></i></button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="aspect-square bg-slate-50 flex items-center justify-center relative group-hover:bg-slate-100 transition-colors">
<i className="w-16 h-16 text-slate-300 group-hover:scale-110 transition-transform duration-300" data-lucide="package"></i>
<div className="absolute top-3 right-3 bg-white px-2 py-0.5 rounded text-[10px] font-bold text-red-600 border border-red-100 shadow-sm">-15%</div>
<div className="absolute inset-x-4 bottom-4 fade-enter">
<button className="w-full bg-white/90 backdrop-blur border border-slate-200 text-slate-900 text-xs font-medium py-2 rounded shadow-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors" onclick="showToast('Abriendo vista rápida...')">
                                Vista rápida
                            </button>
</div>
</div>
<div className="p-4">
<div className="flex flex-col gap-1 mb-3">
<p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Transmisión</p>
<h3 className="text-sm font-semibold text-slate-900 leading-snug cursor-pointer hover:text-blue-600 transition-colors">Kit Embrague Cerámico</h3>
<p className="text-[10px] font-mono text-slate-400">SKU: EMB-2024-X</p>
</div>
<div className="flex items-center justify-between pt-3 border-t border-slate-50">
<div className="flex flex-col">
<span className="text-[10px] text-slate-400 line-through">$320.00</span>
<span className="text-base font-semibold text-slate-900">$272.00</span>
</div>
<button className="w-8 h-8 rounded-full bg-slate-50 text-slate-900 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all" onclick="showToast('Agregado al carrito')">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group relative bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="aspect-square bg-slate-50 flex items-center justify-center relative group-hover:bg-slate-100 transition-colors">
<i className="w-16 h-16 text-slate-300 group-hover:scale-110 transition-transform duration-300" data-lucide="disc"></i>
<div className="absolute inset-x-4 bottom-4 fade-enter">
<button className="w-full bg-white/90 backdrop-blur border border-slate-200 text-slate-900 text-xs font-medium py-2 rounded shadow-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors" onclick="showToast('Abriendo vista rápida...')">
                                Vista rápida
                            </button>
</div>
</div>
<div className="p-4">
<div className="flex flex-col gap-1 mb-3">
<p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Frenos</p>
<h3 className="text-sm font-semibold text-slate-900 leading-snug cursor-pointer hover:text-blue-600 transition-colors">Disco Freno Ventilado</h3>
<p className="text-[10px] font-mono text-slate-400">SKU: BRK-9920-F</p>
</div>
<div className="flex items-center justify-between pt-3 border-t border-slate-50">
<div className="flex flex-col">
<span className="text-base font-semibold text-slate-900">$85.50</span>
</div>
<button className="w-8 h-8 rounded-full bg-slate-50 text-slate-900 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all" onclick="showToast('Agregado al carrito')">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group relative bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="aspect-square bg-slate-50 flex items-center justify-center relative group-hover:bg-slate-100 transition-colors">
<i className="w-16 h-16 text-slate-300 group-hover:scale-110 transition-transform duration-300" data-lucide="cpu"></i>
<div className="absolute top-3 left-3 bg-slate-900 px-2 py-0.5 rounded text-[10px] font-bold text-white shadow-sm">OEM</div>
<div className="absolute inset-x-4 bottom-4 fade-enter">
<button className="w-full bg-white/90 backdrop-blur border border-slate-200 text-slate-900 text-xs font-medium py-2 rounded shadow-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors" onclick="showToast('Abriendo vista rápida...')">
                                Vista rápida
                            </button>
</div>
</div>
<div className="p-4">
<div className="flex flex-col gap-1 mb-3">
<p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Electrónica</p>
<h3 className="text-sm font-semibold text-slate-900 leading-snug cursor-pointer hover:text-blue-600 transition-colors">ECU Unidad Control</h3>
<p className="text-[10px] font-mono text-slate-400">SKU: ELE-4450-M</p>
</div>
<div className="flex items-center justify-between pt-3 border-t border-slate-50">
<div className="flex flex-col">
<span className="text-base font-semibold text-slate-900">$450.00</span>
</div>
<button className="w-8 h-8 rounded-full bg-slate-50 text-slate-900 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all" onclick="showToast('Agregado al carrito')">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group relative bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="aspect-square bg-slate-50 flex items-center justify-center relative group-hover:bg-slate-100 transition-colors">
<i className="w-16 h-16 text-slate-300 group-hover:scale-110 transition-transform duration-300" data-lucide="filter"></i>
<div className="absolute inset-x-4 bottom-4 fade-enter">
<button className="w-full bg-white/90 backdrop-blur border border-slate-200 text-slate-900 text-xs font-medium py-2 rounded shadow-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors" onclick="showToast('Abriendo vista rápida...')">
                                Vista rápida
                            </button>
</div>
</div>
<div className="p-4">
<div className="flex flex-col gap-1 mb-3">
<p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Mantenimiento</p>
<h3 className="text-sm font-semibold text-slate-900 leading-snug cursor-pointer hover:text-blue-600 transition-colors">Pack Filtros Aceite x10</h3>
<p className="text-[10px] font-mono text-slate-400">SKU: FIL-1010-P</p>
</div>
<div className="flex items-center justify-between pt-3 border-t border-slate-50">
<div className="flex flex-col">
<span className="text-base font-semibold text-slate-900">$45.00</span>
</div>
<button className="w-8 h-8 rounded-full bg-slate-50 text-slate-900 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all" onclick="showToast('Agregado al carrito')">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
<div className="flex flex-col md:flex-row items-center md:items-start gap-5 group">
<div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-blue-600/20 group-hover:border-blue-500/50 transition-all">
<i className="w-6 h-6 text-blue-400" data-lucide="truck"></i>
</div>
<div>
<h4 className="text-base font-medium text-slate-100">Logística Seiton</h4>
<p className="text-sm text-slate-400 mt-2 leading-relaxed font-light">Entregas en 24hs a nivel nacional. Flota dedicada para manejo de piezas delicadas.</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center md:items-start gap-5 group">
<div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-blue-600/20 group-hover:border-blue-500/50 transition-all">
<i className="w-6 h-6 text-blue-400" data-lucide="shield-check"></i>
</div>
<div>
<h4 className="text-base font-medium text-slate-100">Garantía Extendida</h4>
<p className="text-sm text-slate-400 mt-2 leading-relaxed font-light">Todos nuestros productos cuentan con garantía oficial de fabricante de 12 meses.</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center md:items-start gap-5 group">
<div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-blue-600/20 group-hover:border-blue-500/50 transition-all">
<i className="w-6 h-6 text-blue-400" data-lucide="headphones"></i>
</div>
<div>
<h4 className="text-base font-medium text-slate-100">Soporte Técnico</h4>
<p className="text-sm text-slate-400 mt-2 leading-relaxed font-light">Equipo de ingenieros mecánicos disponibles para consultas de compatibilidad.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<i className="w-3 h-3" data-lucide="activity"></i>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">SEITON MOTORS</span>
</div>
<p className="text-sm text-slate-500 mb-6 max-w-xs font-light">
                        Líderes en distribución de autopartes para el mercado profesional. Calidad OEM y servicio premium.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Catálogo</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Motor</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Suspensión</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Frenos</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Eléctrico</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Empresa</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Sobre Nosotros</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Carreras</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Blog</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Prensa</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Soporte</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Centro de Ayuda</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Términos de Servicio</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Privacidad</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Devoluciones</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Seiton Motors Distribuidora S.A.</p>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 px-2 py-1 bg-slate-50 rounded-full border border-slate-100">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] font-medium text-slate-500">All systems operational</span>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
