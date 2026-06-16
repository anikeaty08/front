import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        lucide.createIcons();

        // ------------------ VIEW SWITCHER (Dashboard) ------------------
        function switchView(viewName) {
            ['dashboard', 'rooster', 'personeel'].forEach(v => {
                const el = document.getElementById('view-' + v);
                const btn = document.getElementById('btn-' + v);
                if (el) el.classList.add('hidden');
                if (btn) btn.className = "h-8 w-full hover:bg-gray-50 text-gray-500 rounded flex items-center px-3 gap-3 cursor-pointer transition-colors";
            });
            const selectedView = document.getElementById('view-' + viewName);
            const activeBtn = document.getElementById('btn-' + viewName);
            if (selectedView) selectedView.classList.remove('hidden');
            if (activeBtn) activeBtn.className = "h-8 w-full bg-blue-50 text-blue-600 rounded flex items-center px-3 gap-3 cursor-pointer transition-colors";
            
            const titleEl = document.getElementById('page-title');
            if (viewName === 'dashboard') titleEl.innerText = "Overzicht";
            if (viewName === 'rooster') titleEl.innerText = "Planning";
            if (viewName === 'personeel') titleEl.innerText = "Medewerkers";
        }

        // ------------------ INTERACTIVE COST CHART ------------------
        const chartData = [
            { day: 'Ma', cost: 650, hours: 32, forecast: 620 },
            { day: 'Di', cost: 580, hours: 28, forecast: 580 },
            { day: 'Wo', cost: 420, hours: 20, forecast: 450 },
            { day: 'Do', cost: 550, hours: 26, forecast: 550 },
            { day: 'Vr', cost: 950, hours: 45, forecast: 900 },
            { day: 'Za', cost: 1100, hours: 52, forecast: 1000 },
            { day: 'Zo', cost: 0, hours: 0, forecast: 0 } // Future/Closed
        ];

        let currentMode = 'cost'; // 'cost' or 'hours'

        function initChart() {
            const container = document.getElementById('chart-container');
            container.innerHTML = '';
            
            const maxVal = Math.max(...chartData.map(d => Math.max(d.cost, d.forecast)));
            
            chartData.forEach((d, i) => {
                // Height percentage relative to max
                const hMain = currentMode === 'cost' ? (d.cost / maxVal) * 100 : (d.hours / 60) * 100;
                const hFore = currentMode === 'cost' ? (d.forecast / maxVal) * 100 : 0;
                
                const barGroup = document.createElement('div');
                barGroup.className = "flex-1 flex flex-col justify-end items-center h-full group relative cursor-pointer";
                barGroup.onmouseenter = () => showDetails(d);
                
                // Forecast bar (ghost) - only show in cost mode
                if (currentMode === 'cost') {
                    const forecastBar = document.createElement('div');
                    forecastBar.className = "w-full mx-1 bg-gray-100 rounded-t-sm absolute bottom-0 z-0 border border-gray-200 border-dashed";
                    forecastBar.style.height = `${hFore}%`;
                    barGroup.appendChild(forecastBar);
                }

                // Actual Bar
                const bar = document.createElement('div');
                // Color logic: if cost > forecast, make it red-ish, else blue
                let colorClass = "bg-blue-500";
                if(currentMode === 'cost' && d.cost > d.forecast) colorClass = "bg-indigo-500";
                if(d.cost === 0) colorClass = "bg-gray-200";

                bar.className = `w-full mx-2 md:mx-3 rounded-t-md z-10 bar-fill ${colorClass} group-hover:opacity-80`;
                bar.style.height = "0%"; // animate from 0
                
                setTimeout(() => { bar.style.height = `${hMain}%`; }, 100 + (i * 50));
                
                barGroup.appendChild(bar);
                container.appendChild(barGroup);
            });
        }

        function updateChart(mode) {
            currentMode = mode;
            
            // Update tabs
            const btnCost = document.getElementById('tab-cost');
            const btnHours = document.getElementById('tab-hours');
            
            if (mode === 'cost') {
                btnCost.className = "px-3 py-1 text-xs font-medium rounded-md bg-gray-900 text-white shadow transition-all";
                btnHours.className = "px-3 py-1 text-xs font-medium rounded-md text-gray-500 hover:text-gray-900 transition-all";
                document.getElementById('label-total').innerText = "Kosten";
                document.getElementById('val-total').innerText = "€ 4.250";
                document.getElementById('val-forecast').innerText = "€ 4.100";
            } else {
                btnHours.className = "px-3 py-1 text-xs font-medium rounded-md bg-gray-900 text-white shadow transition-all";
                btnCost.className = "px-3 py-1 text-xs font-medium rounded-md text-gray-500 hover:text-gray-900 transition-all";
                document.getElementById('label-total').innerText = "Uren";
                document.getElementById('val-total').innerText = "203u";
                document.getElementById('val-forecast').innerText = "200u";
            }
            
            initChart();
        }

        function showDetails(data) {
            document.getElementById('hover-day').innerText = data.day + (data.cost === 0 ? " (Gesloten)" : "");
            if (currentMode === 'cost') {
                document.getElementById('hover-val').innerText = "€ " + data.cost;
            } else {
                document.getElementById('hover-val').innerText = data.hours + " uur";
            }
        }

        // Initialize chart on load
        initChart();

        // ------------------ REGISTRATION OVERLAY ------------------
        function toggleRegister() {
            const modal = document.getElementById('register-overlay');
            if (modal.classList.contains('hidden')) {
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                document.body.style.overflow = 'hidden'; // prevent background scrolling
            } else {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                document.body.style.overflow = 'auto';
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-40 glass-nav border-b border-gray-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-semibold shadow-sm shadow-blue-200">
                        M
                    </div>
<span className="text-lg font-semibold tracking-tight text-gray-900">MyRooster</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-normal text-gray-500 hover:text-gray-900 transition-colors" href="#features">Functies</a>
<a className="text-sm font-normal text-gray-500 hover:text-gray-900 transition-colors" href="#solutions">Oplossingen</a>
<a className="text-sm font-normal text-gray-500 hover:text-gray-900 transition-colors" href="#pricing">Prijzen</a>
<button className="text-sm font-normal text-gray-500 hover:text-gray-900 transition-colors" onclick="toggleRegister()">Inloggen</button>
<button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-gray-900 hover:bg-gray-800 transition-all shadow-sm hover:shadow-md" onclick="toggleRegister()">
                        Start gratis
                        <i className="ml-2 w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>

<div className="md:hidden flex items-center">
<button className="text-gray-500 hover:text-gray-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
<div className="absolute inset-0 hero-glow -z-10"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Nu beschikbaar: MyRooster App 2.0
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
                Roosteren zonder <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">hoofdpijn</span>.
            </h1>
<p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto font-normal leading-relaxed">
                De alles-in-één oplossing voor slimme roosters, nauwkeurige urenregistratie en moeiteloze personeelscommunicatie.
            </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2" onclick="toggleRegister()">
                    Probeer 14 dagen gratis
                    <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-full font-medium transition-all flex items-center justify-center gap-2" onclick="toggleRegister()">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                    Bekijk demo
                </button>
</div>
<div className="mt-12 text-sm text-gray-400 flex items-center justify-center gap-6">
<span className="flex items-center gap-2"><i className="w-4 h-4 text-blue-600" data-lucide="check"></i> Geen creditcard nodig</span>
<span className="flex items-center gap-2"><i className="w-4 h-4 text-blue-600" data-lucide="check"></i> Binnen 5 minuten online</span>
</div>
</div>

<div className="mt-16 md:mt-24 relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 group perspective-1000">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
<div className="relative rounded-xl bg-white border border-gray-200 shadow-2xl overflow-hidden ring-1 ring-gray-900/5 transition-transform duration-700 hover:-translate-y-2">

<div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="flex-1 text-center">
<div className="inline-flex items-center gap-1 bg-white border border-gray-200 rounded px-3 py-0.5 text-xs text-gray-400">
<i className="w-3 h-3" data-lucide="lock"></i> app.myrooster.nl
                        </div>
</div>
</div>

<div className="flex h-[500px] md:h-[600px] bg-gray-50 font-sans text-xs md:text-sm">

<div className="w-16 md:w-64 border-r border-gray-200 bg-white flex flex-col p-4 z-20">
<div className="h-8 w-32 bg-gray-100 rounded mb-8 hidden md:block"></div>
<div className="space-y-2">
<div className="h-8 w-full bg-blue-50 text-blue-600 rounded flex items-center px-3 gap-3 cursor-pointer transition-colors" id="btn-dashboard" onclick="switchView('dashboard')">
<i className="w-4 h-4" data-lucide="layout-grid"></i> <span className="hidden md:inline font-medium">Dashboard</span>
</div>
<div className="h-8 w-full hover:bg-gray-50 text-gray-500 rounded flex items-center px-3 gap-3 cursor-pointer transition-colors" id="btn-rooster" onclick="switchView('rooster')">
<i className="w-4 h-4" data-lucide="calendar"></i> <span className="hidden md:inline font-medium">Rooster</span>
</div>
<div className="h-8 w-full hover:bg-gray-50 text-gray-500 rounded flex items-center px-3 gap-3 cursor-pointer transition-colors" id="btn-personeel" onclick="switchView('personeel')">
<i className="w-4 h-4" data-lucide="users"></i> <span className="hidden md:inline font-medium">Personeel</span>
</div>
</div>
</div>

<div className="flex-1 p-6 md:p-8 overflow-y-auto no-scrollbar relative bg-gray-50">

<div className="flex justify-between items-center mb-8 sticky top-0 bg-gray-50 z-10 pb-2">
<div>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight" id="page-title">Overzicht</h3>
<p className="text-gray-500 mt-1">Goedemiddag, Tim</p>
</div>
<div className="flex gap-3">
<div className="h-9 w-24 bg-white border border-gray-200 rounded shadow-sm flex items-center justify-center text-gray-400 text-xs">
<i className="w-3 h-3 mr-2" data-lucide="search"></i> Zoeken
                                </div>
<div className="h-9 w-9 bg-blue-600 rounded shadow-sm flex items-center justify-center text-white">
<span className="font-bold text-xs">TS</span>
</div>
</div>
</div>

<div className="animate-in fade-in duration-300" id="view-dashboard">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<div className="flex justify-between mb-4 items-center">
<span className="text-gray-500 font-medium text-xs uppercase tracking-wide">Omzet vandaag</span>
<span className="text-green-600 text-xs bg-green-50 px-2 py-0.5 rounded-full">+12%</span>
</div>
<div className="text-2xl font-semibold tracking-tight">€ 2.450,00</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<div className="flex justify-between mb-4 items-center">
<span className="text-gray-500 font-medium text-xs uppercase tracking-wide">Loonkosten</span>
<span className="text-blue-600 text-xs bg-blue-50 px-2 py-0.5 rounded-full">24%</span>
</div>
<div className="text-2xl font-semibold tracking-tight">€ 588,00</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<div className="flex justify-between mb-4 items-center">
<span className="text-gray-500 font-medium text-xs uppercase tracking-wide">Ziekteverzuim</span>
<span className="text-gray-400 text-xs bg-gray-100 px-2 py-0.5 rounded-full">0%</span>
</div>
<div className="text-2xl font-semibold tracking-tight">0 mdw</div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="border-b border-gray-200 p-4 flex justify-between items-center">
<h4 className="font-medium text-gray-900">Diensten vandaag</h4>
<button className="text-blue-600 text-xs font-medium">Bekijk alles</button>
</div>
<div className="p-4 space-y-4">
<div className="flex gap-4 items-center">
<div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 text-xs font-bold">ES</div>
<div className="w-1/3 text-sm font-medium text-gray-700">Emma Smits</div>
<div className="flex-1 h-8 bg-blue-50 border border-blue-100 rounded flex items-center px-3 text-blue-600 text-[10px] font-medium">09:00 - 17:00 <span className="ml-auto text-blue-400">Bar</span></div>
</div>
<div className="flex gap-4 items-center">
<div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 text-xs font-bold">JD</div>
<div className="w-1/3 text-sm font-medium text-gray-700">Jan de Boer</div>
<div className="flex-1 h-8 bg-purple-50 border border-purple-100 rounded flex items-center px-3 text-purple-600 text-[10px] font-medium">12:00 - 20:00 <span className="ml-auto text-purple-400">Keuken</span></div>
</div>
</div>
</div>
</div>

<div className="hidden" id="view-rooster"><div className="text-center text-gray-400 mt-20">Rooster weergave geladen...</div></div>
<div className="hidden" id="view-personeel"><div className="text-center text-gray-400 mt-20">Personeel weergave geladen...</div></div>
</div>
</div>

<div className="absolute -bottom-10 -right-4 md:right-10 w-48 md:w-64 bg-gray-900 rounded-[2rem] border-[6px] border-gray-800 shadow-2xl p-2 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500 z-30 pointer-events-none">
<div className="bg-white w-full h-96 rounded-[1.5rem] overflow-hidden flex flex-col relative">
<div className="bg-blue-600 h-24 p-4 text-white">
<div className="w-8 h-1 bg-white/30 mx-auto rounded-full mb-4"></div>
<div className="text-xs font-medium opacity-80">Goedemorgen,</div>
<div className="font-semibold text-lg">Tim</div>
</div>
<div className="p-4 space-y-3 -mt-6">
<div className="bg-white rounded-xl shadow-lg p-3 border border-gray-100">
<div className="text-[10px] text-gray-400 uppercase font-medium">Volgende dienst</div>
<div className="flex items-center gap-2 mt-1">
<div className="w-1 h-6 bg-blue-500 rounded-full"></div>
<div>
<div className="font-semibold text-gray-900 text-sm">Vandaag</div>
<div className="text-xs text-gray-500">14:00 - 22:00</div>
</div>
</div>
</div>
</div>
<div className="mt-auto border-t border-gray-100 p-3 flex justify-around">
<div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
<div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-gray-100 bg-gray-50/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<p className="text-sm font-medium text-gray-500 mb-6">Vertrouwd door 500+ bedrijven</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-60">
<div className="flex items-center gap-2 font-bold text-xl text-gray-800"><i className="stroke-2" data-lucide="coffee"></i> CafeJansen</div>
<div className="flex items-center gap-2 font-bold text-xl text-gray-800"><i className="stroke-2" data-lucide="shopping-bag"></i> RetailGroup</div>
<div className="flex items-center gap-2 font-bold text-xl text-gray-800"><i className="stroke-2" data-lucide="utensils"></i> BistroB</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">Alles wat je nodig hebt</h2>
<p className="text-gray-500 font-normal">MyRooster automatiseert de saaie taken.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 bg-white border border-gray-200 rounded-2xl">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="calendar-days"></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Slim Roosteren</h3>
<p className="text-sm text-gray-500">Sleep diensten, kopieer weken en zie direct de loonkosten.</p>
</div>
<div className="p-8 bg-white border border-gray-200 rounded-2xl">
<div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-6 text-purple-600">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="smartphone"></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Medewerker App</h3>
<p className="text-sm text-gray-500">Roosters, ruilen en verlof direct via de app.</p>
</div>
<div className="p-8 bg-white border border-gray-200 rounded-2xl">
<div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6 text-green-600">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="clock"></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Uren &amp; Klokken</h3>
<p className="text-sm text-gray-500">Start/stop systeem en export naar salarisadministratie.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-200 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-medium mb-6">
<i className="w-3 h-3" data-lucide="zap"></i> Real-time inzicht
                    </div>
<h2 className="text-3xl font-semibold text-gray-900 tracking-tight mb-6">Houd grip op je loonkosten.</h2>
<p className="text-gray-500 mb-8 leading-relaxed">
                        Zie direct de impact van je rooster op je marge. Schakel tussen kosten en uren om precies te zien waar je kunt besparen. Onze analyse module werkt real-time terwijl je roostert.
                    </p>
<div className="space-y-6">
<div className="flex gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:border-blue-300 transition-colors cursor-default">
<div className="flex-shrink-0 mt-1">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<i className="w-5 h-5" data-lucide="bar-chart-3"></i>
</div>
</div>
<div>
<h4 className="text-base font-semibold text-gray-900">Budgettering</h4>
<p className="text-gray-500 text-sm mt-1">Stel weekbudgetten in en ontvang waarschuwingen.</p>
</div>
</div>
</div>
</div>

<div className="lg:w-1/2 w-full relative">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-2xl blur-2xl opacity-40"></div>
<div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-1">
<div className="bg-gray-50/50 rounded-xl p-6">

<div className="flex items-center justify-between mb-8">
<div>
<h3 className="font-semibold text-gray-900">Loonkosten Analyse</h3>
<p className="text-xs text-gray-500 mt-1">Week 42 • Filiaal Amsterdam</p>
</div>
<div className="bg-white border border-gray-200 rounded-lg p-1 flex shadow-sm">
<button className="px-3 py-1 text-xs font-medium rounded-md bg-gray-900 text-white shadow transition-all" id="tab-cost" onclick="updateChart('cost')">Kosten</button>
<button className="px-3 py-1 text-xs font-medium rounded-md text-gray-500 hover:text-gray-900 transition-all" id="tab-hours" onclick="updateChart('hours')">Uren</button>
</div>
</div>

<div className="flex gap-6 mb-8 border-b border-gray-200 pb-6">
<div>
<div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Totaal <span id="label-total">Kosten</span></div>
<div className="text-2xl font-bold text-gray-900 tracking-tight mt-1" id="val-total">€ 4.250</div>
</div>
<div>
<div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Prognose</div>
<div className="text-2xl font-bold text-gray-900 tracking-tight mt-1" id="val-forecast">€ 4.100</div>
</div>
<div className="ml-auto text-right">
<div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Verschil</div>
<div className="text-sm font-bold text-red-600 bg-red-50 px-2 py-1 rounded-full inline-block mt-2">+ 3.6%</div>
</div>
</div>

<div className="h-64 flex items-end justify-between gap-2 md:gap-4 select-none" id="chart-container">

</div>

<div className="flex justify-between mt-4 text-xs text-gray-400 font-medium px-1">
<span>Ma</span><span>Di</span><span>Wo</span><span>Do</span><span>Vr</span><span>Za</span><span>Zo</span>
</div>

<div className="mt-6 bg-blue-50 border border-blue-100 rounded-lg p-3 flex items-center justify-between text-sm transition-opacity duration-200" id="hover-info">
<span className="text-blue-800 font-medium flex items-center gap-2">
<i className="w-4 h-4" data-lucide="info"></i>
<span id="hover-day">Selecteer een dag</span>
</span>
<span className="font-bold text-blue-900" id="hover-val">-</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="pricing">
<div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-6">Klaar om tijd te besparen?</h2>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-black transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1" onclick="toggleRegister()">
                    Start gratis proefperiode
                </button>
</div>
</div>
</section>

<footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-4 text-center sm:text-left">
<p className="text-sm text-gray-400">© 2024 MyRooster B.V.</p>
</div>
</footer>

<div className="fixed inset-0 z-[60] bg-white hidden flex-col lg:flex-row" id="register-overlay">

<button className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-gray-100 rounded-full transition-colors lg:text-gray-500 text-gray-900" onclick="toggleRegister()">
<i className="w-6 h-6" data-lucide="x"></i>
</button>

<div className="hidden lg:flex lg:w-1/2 relative bg-blue-600 overflow-hidden flex-col justify-between p-12 text-white">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/4"></div>

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-8">
<div className="w-8 h-8 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center text-white font-semibold border border-white/20">M</div>
<span className="text-lg font-bold tracking-tight">MyRooster</span>
</div>
<h2 className="text-4xl font-semibold tracking-tight leading-tight max-w-md">
                    Sluit je aan bij de snelst groeiende planning tool van Nederland.
                </h2>
</div>

<div className="relative z-10 mt-auto">
<div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-2xl max-w-md">
<div className="flex gap-1 mb-4">
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
</div>
<p className="text-lg font-medium leading-relaxed mb-4">"Binnen 10 minuten hadden we ons hele team overgezet. De loonkosten analyse heeft ons in de eerste maand al geld bespaard."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">JD</div>
<div>
<div className="font-semibold">Joris Driepinter</div>
<div className="text-sm opacity-75">Eigenaar, 't Hoekje</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 h-full overflow-y-auto flex flex-col justify-center items-center p-6 lg:p-12 bg-white">
<div className="w-full max-w-md space-y-8">
<div className="text-center lg:text-left">
<div className="lg:hidden flex justify-center mb-6">
<div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">M</div>
</div>
<h2 className="text-3xl font-bold tracking-tight text-gray-900">Maak een account</h2>
<p className="mt-2 text-sm text-gray-500">
                        Probeer 14 dagen gratis. Geen creditcard nodig.
                    </p>
</div>
<div className="space-y-4">
<button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2.5 px-4 rounded-xl transition-all">
<svg className="w-5 h-5" viewbox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg>
                        Registreren met Google
                    </button>
<div className="relative">
<div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
<div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-gray-500">of met e-mail</span></div>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); window.location.href='/dashboard'">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="first-name">Voornaam</label>
<input className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm" id="first-name" placeholder="Jan" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="last-name">Achternaam</label>
<input className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm" id="last-name" placeholder="Jansen" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="company">Bedrijfsnaam</label>
<input className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm" id="company" placeholder="Bistro 't Hoekje" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Zakelijk e-mailadres</label>
<input className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm" id="email" placeholder="jan@bedrijf.nl" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">Wachtwoord</label>
<input className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm" id="password" placeholder="••••••••" type="password"/>
</div>
<div className="flex items-center gap-2">
<input className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" id="terms" type="checkbox"/>
<label className="text-sm text-gray-500" htmlFor="terms">Ik ga akkoord met de <a className="text-blue-600 hover:text-blue-500" href="#">voorwaarden</a>.</label>
</div>
<button className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors" type="submit">
                            Account aanmaken
                        </button>
</form>
</div>
<p className="text-center text-sm text-gray-500">
                    Heb je al een account? <a className="font-medium text-blue-600 hover:text-blue-500" href="#">Log in</a>
</p>
</div>
</div>
</div>


    </>
  );
}
