import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
slate: { 850: '#1e293b', 950: '#020617' }
}
}
}
}



        // --- Navigation ---
        function scrollToSection(id) {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        }

        // --- 1. Upload Logic ---
        function handleFileUpload() {
            const preview = document.getElementById('tablePreview');
            const tbody = document.getElementById('tableBody');
            preview.classList.remove('hidden');
            preview.classList.add('fade-in');

            // Simulate random data
            let html = '';
            for(let i=1; i<=3; i++) {
                html += `
                <tr class="hover:bg-white/5 transition-colors">
                    <td class="px-4 py-3 font-mono text-slate-500">Z-${100+i}</td>
                    <td class="px-4 py-3">34.${Math.floor(Math.random()*99)}° N</td>
                    <td class="px-4 py-3">-118.${Math.floor(Math.random()*99)}° W</td>
                    <td class="px-4 py-3 text-right font-mono text-indigo-300">${(Math.random()*50).toFixed(2)}</td>
                </tr>`;
            }
            tbody.innerHTML = html;
        }

        // --- 2. Prediction Logic ---
        function generateHeatmap() {
            const container = document.getElementById('heatmapContainer');
            container.style.opacity = '1';
            container.innerHTML = '';
            
            // Generate 5x5 grid
            for(let i=0; i<25; i++) {
                const intensity = Math.random();
                const div = document.createElement('div');
                div.className = 'w-full h-full rounded-sm fade-in transition-all duration-700 hover:scale-95';
                div.style.backgroundColor = `rgba(99, 102, 241, ${intensity * 0.9 + 0.1})`; // Indigo base
                div.style.animationDelay = `${i * 20}ms`;
                div.title = `Pollution Index: ${Math.round(intensity * 100)}`;
                container.appendChild(div);
            }
            document.getElementById('heatmapLegend').classList.remove('hidden');
        }

        // --- 3. Simulation Logic ---
        let simInterval;
        const GRID_SIZE = 5;

        async function startSimulation() {
            const container = document.getElementById('simGrid');
            const btn = document.getElementById('simBtn');
            const stats = document.getElementById('simStats');
            const statusText = document.getElementById('simStatusText');
            const collectedDisplay = document.getElementById('collectedCount');
            
            btn.disabled = true;
            btn.classList.add('opacity-50', 'cursor-not-allowed');
            stats.classList.remove('opacity-0');
            statusText.innerText = "Scanning...";
            statusText.className = "text-xs font-medium text-amber-400";
            
            // Initialize Grid
            let grid = []; // 2D array representation
            let plasticLocs = [];
            let robotPos = {x: 0, y: 0};
            let collected = 0;

            // Generate Plastics
            for(let i=0; i<5; i++) {
                plasticLocs.push({
                    x: Math.floor(Math.random() * GRID_SIZE),
                    y: Math.floor(Math.random() * GRID_SIZE)
                });
            }

            // Render Function
            function renderGrid() {
                container.innerHTML = '';
                for(let r=0; r<GRID_SIZE; r++) {
                    for(let c=0; c<GRID_SIZE; c++) {
                        const cell = document.createElement('div');
                        cell.className = 'bg-slate-900 w-full aspect-square flex items-center justify-center relative border border-slate-800/50';
                        
                        // Check Robot
                        if (robotPos.x === r && robotPos.y === c) {
                            cell.innerHTML = '<iconify-icon icon="solar:smart-vacuum-cleaner-linear" class="text-indigo-400 text-2xl fade-in"></iconify-icon>';
                            cell.classList.add('bg-slate-800');
                        }
                        
                        // Check Plastic
                        const plasticIndex = plasticLocs.findIndex(p => p.x === r && p.y === c);
                        if (plasticIndex > -1) {
                            // Only show plastic if robot isn't there (collected)
                            if (!(robotPos.x === r && robotPos.y === c)) {
                                cell.innerHTML = '<iconify-icon icon="solar:trash-bin-trash-linear" class="text-rose-500/80 text-lg"></iconify-icon>';
                            }
                        }
                        container.appendChild(cell);
                    }
                }
            }

            // Simulation Loop
            statusText.innerText = "Collecting...";
            statusText.className = "text-xs font-medium text-indigo-400";

            for (let i = 0; i < plasticLocs.length; i++) {
                let target = plasticLocs[i];
                
                // Move towards target
                while (robotPos.x !== target.x || robotPos.y !== target.y) {
                    renderGrid();
                    await new Promise(r => setTimeout(r, 300)); // Speed of bot

                    if (robotPos.x < target.x) robotPos.x++;
                    else if (robotPos.x > target.x) robotPos.x--;
                    else if (robotPos.y < target.y) robotPos.y++;
                    else if (robotPos.y > target.y) robotPos.y--;
                }

                // Collect
                renderGrid(); // Robot at plastic
                await new Promise(r => setTimeout(r, 300));
                // Plastic "removed" logically by not rendering it next frame (loop moves to next target)
                collected++;
                collectedDisplay.innerText = `${collected} units`;
            }

            // Finish
            renderGrid(); // Final state
            statusText.innerText = "Mission Complete";
            statusText.className = "text-xs font-medium text-emerald-400";
            btn.disabled = false;
            btn.classList.remove('opacity-50', 'cursor-not-allowed');
        }

        // --- 4. Dashboard Logic ---
        function updateDashboard() {
            const val = document.getElementById('plasticSlider').value;
            const recycled = (val * 0.7).toFixed(1);
            const energy = (val * 2).toFixed(1);
            
            document.getElementById('sliderValue').innerText = `${val} kg`;
            document.getElementById('recycledValue').innerText = `${recycled} kg`;
            document.getElementById('energyValue').innerText = `${energy} kWh`;
            
            // Update Pie Chart Gradient (70% fixed ratio based on python code, but let's make it look dynamic if we wanted, 
            // the python code said recycled = collected * 0.7, so ratio is always 70%)
            // Let's keep it 70% as per logic, but animate the text maybe? 
            // Or if the logic implies variable efficiency, we'd change the gradient. 
            // Since logic is fixed 0.7, the pie chart visual remains static 70/30, but numbers change.
            
            // However, to make it fun, let's pretend efficiency drops slightly at higher volumes (fictional)
            // or just keep it strict. I'll stick to strict 70% to match Python logic exactly.
            
            // Using a conic gradient for the chart
            // Logic: 70% recycled
            const deg = 360 * 0.7;
            document.getElementById('pieChart').style.background = `conic-gradient(#6366f1 0deg ${deg}deg, #1e293b ${deg}deg 360deg)`;
        }
        
        // Init
        updateDashboard();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/5 bg-slate-950 flex flex-col z-20">
<div className="p-6 border-b border-white/5">
<h1 className="text-sm font-medium tracking-tight text-slate-100 uppercase">Blue Turned Grey</h1>
<p className="text-xs text-slate-500 mt-1">Ocean Plastic Manager</p>
</div>
<nav className="flex-1 p-4 space-y-1 overflow-y-auto">
<button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium text-slate-400 hover:text-slate-100 hover:bg-white/5 rounded-md transition-colors text-left group" onclick="scrollToSection('upload')">
<iconify-icon className="text-slate-500 group-hover:text-slate-100" icon="solar:upload-minimalistic-linear" strokeWidth="1.5" width="18"></iconify-icon>
                Data Upload
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium text-slate-400 hover:text-slate-100 hover:bg-white/5 rounded-md transition-colors text-left group" onclick="scrollToSection('prediction')">
<iconify-icon className="text-slate-500 group-hover:text-slate-100" icon="solar:chart-square-linear" strokeWidth="1.5" width="18"></iconify-icon>
                Prediction
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium text-slate-400 hover:text-slate-100 hover:bg-white/5 rounded-md transition-colors text-left group" onclick="scrollToSection('simulation')">
<iconify-icon className="text-slate-500 group-hover:text-slate-100" icon="solar:bot-linear" strokeWidth="1.5" width="18"></iconify-icon>
                Simulation
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium text-slate-400 hover:text-slate-100 hover:bg-white/5 rounded-md transition-colors text-left group" onclick="scrollToSection('reuse')">
<iconify-icon className="text-slate-500 group-hover:text-slate-100" icon="solar:refresh-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
                Reuse Dashboard
            </button>
</nav>
<div className="p-4 border-t border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-700 to-slate-600 flex items-center justify-center text-xs font-medium text-white border border-white/10">JD</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-200">Jane Doe</span>
<span className="text-xs text-slate-500">Admin</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto relative scroll-smooth" id="main-container">
<div className="max-w-3xl mx-auto px-6 py-12 space-y-16">

<section className="space-y-6" id="upload">
<div className="space-y-1">
<h2 className="text-lg font-medium text-slate-100 tracking-tight">Data Source</h2>
<p className="text-sm text-slate-500 font-light">Import your plastic density datasets.</p>
</div>
<div className="relative group">
<input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" id="csvInput" onchange="handleFileUpload()" type="file"/>
<div className="border border-dashed border-slate-700 bg-slate-900/50 hover:bg-slate-900 hover:border-slate-600 rounded-lg h-32 flex flex-col items-center justify-center transition-all">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<iconify-icon className="text-slate-400" icon="solar:cloud-upload-linear"></iconify-icon>
</div>
<p className="text-xs text-slate-400 font-medium">Click to upload CSV</p>
<p className="text-xs text-slate-600 mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
</div>
</div>

<div className="hidden border border-white/5 rounded-lg overflow-hidden" id="tablePreview">
<div className="bg-white/5 px-4 py-2 border-b border-white/5 flex items-center justify-between">
<span className="text-xs font-medium text-slate-300">ocean_data.csv</span>
<span className="text-xs text-emerald-400 flex items-center gap-1">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Ready
                        </span>
</div>
<table className="w-full text-left text-xs">
<thead className="bg-slate-900/50 text-slate-400 font-medium">
<tr>
<th className="px-4 py-3 font-medium">Zone_ID</th>
<th className="px-4 py-3 font-medium">Latitude</th>
<th className="px-4 py-3 font-medium">Longitude</th>
<th className="px-4 py-3 font-medium text-right">Density (kg/m²)</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 text-slate-300" id="tableBody">

</tbody>
</table>
</div>
</section>
<div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

<section className="space-y-6" id="prediction">
<div className="flex items-end justify-between">
<div className="space-y-1">
<h2 className="text-lg font-medium text-slate-100 tracking-tight">Pollution Forecast</h2>
<p className="text-sm text-slate-500 font-light">AI-driven density prediction zones.</p>
</div>
<button className="bg-slate-100 text-slate-950 hover:bg-white text-xs font-medium px-4 py-2 rounded shadow-lg shadow-white/5 transition-all flex items-center gap-2" onclick="generateHeatmap()">
<iconify-icon className="text-slate-950" icon="solar:magic-stick-3-linear"></iconify-icon>
                        Run Prediction
                    </button>
</div>
<div className="bg-slate-900 border border-white/5 rounded-xl p-6 relative overflow-hidden">
<div className="grid grid-cols-5 gap-1 aspect-square md:aspect-video w-full max-w-sm mx-auto opacity-50" id="heatmapContainer">

<div className="col-span-5 flex flex-col items-center justify-center h-48 text-slate-600">
<iconify-icon className="mb-2 opacity-20" icon="solar:chart-square-linear" width="32"></iconify-icon>
<span className="text-xs">No prediction generated</span>
</div>
</div>

<div className="hidden mt-6 flex items-center justify-center gap-4" id="heatmapLegend">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-indigo-500/20"></div>
<span className="text-xs text-slate-500">Low</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-indigo-500/60"></div>
<span className="text-xs text-slate-500">Medium</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-indigo-500"></div>
<span className="text-xs text-slate-500">High</span>
</div>
</div>
</div>
</section>
<div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

<section className="space-y-6" id="simulation">
<div className="flex items-end justify-between">
<div className="space-y-1">
<h2 className="text-lg font-medium text-slate-100 tracking-tight">Autonomous Cleanup</h2>
<p className="text-sm text-slate-500 font-light">Simulate collection pathfinding.</p>
</div>
<button className="bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white border border-white/5 text-xs font-medium px-4 py-2 rounded transition-all flex items-center gap-2" id="simBtn" onclick="startSimulation()">
<iconify-icon icon="solar:play-linear"></iconify-icon>
                        Start Mission
                    </button>
</div>
<div className="bg-slate-900 border border-white/5 rounded-xl p-1 relative">

<div className="grid grid-cols-5 gap-px bg-slate-800 border border-slate-800 rounded-lg overflow-hidden" id="simGrid">

<div className="col-span-5 h-64 bg-slate-900 flex items-center justify-center text-xs text-slate-600">
                            Ready to initialize grid...
                        </div>
</div>
</div>
<div className="flex gap-6 opacity-0 transition-opacity duration-500" id="simStats">
<div className="flex flex-col">
<span className="text-xs text-slate-500">Status</span>
<span className="text-xs font-medium text-emerald-400" id="simStatusText">Idle</span>
</div>
<div className="flex flex-col">
<span className="text-xs text-slate-500">Collected</span>
<span className="text-xs font-medium text-slate-200" id="collectedCount">0 units</span>
</div>
</div>
</section>
<div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

<section className="space-y-8 pb-12" id="reuse">
<div className="space-y-1">
<h2 className="text-lg font-medium text-slate-100 tracking-tight">Impact Analytics</h2>
<p className="text-sm text-slate-500 font-light">Efficiency &amp; conversion metrics.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="space-y-8">
<div className="bg-white/5 border border-white/5 rounded-xl p-5 space-y-4">
<div className="flex justify-between items-center">
<label className="text-xs font-medium text-slate-300">Collection Volume</label>
<span className="text-xs font-mono text-indigo-400" id="sliderValue">20 kg</span>
</div>
<input className="w-full" id="plasticSlider" max="100" min="0" oninput="updateDashboard()" type="range" value="20"/>
<div className="flex justify-between text-[10px] text-slate-600 uppercase tracking-wider">
<span>0 kg</span>
<span>100 kg</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-xl border border-white/5 bg-gradient-to-br from-slate-900 to-slate-800/50">
<div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3">
<iconify-icon icon="solar:recycle-linear"></iconify-icon>
</div>
<p className="text-xs text-slate-500">Material Recycled</p>
<p className="text-lg font-medium text-slate-100 mt-1" id="recycledValue">14.0 kg</p>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-gradient-to-br from-slate-900 to-slate-800/50">
<div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 mb-3">
<iconify-icon icon="solar:bolt-circle-linear"></iconify-icon>
</div>
<p className="text-xs text-slate-500">Energy Saved</p>
<p className="text-lg font-medium text-slate-100 mt-1" id="energyValue">40.0 kWh</p>
</div>
</div>
</div>

<div className="flex flex-col items-center justify-center bg-slate-900 border border-white/5 rounded-xl p-6">
<div className="relative w-40 h-40">

<div className="w-full h-full rounded-full transition-all duration-300" id="pieChart" style={{background: 'conic-gradient(#6366f1 0% 70%, #1e293b 70% 100%)'}}></div>

<div className="absolute inset-0 m-auto w-28 h-28 bg-slate-900 rounded-full flex flex-col items-center justify-center">
<span className="text-xl font-medium text-slate-100 tracking-tight" id="percentageText">70%</span>
<span className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Recycled</span>
</div>
</div>
<div className="mt-6 flex gap-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-indigo-500"></div>
<span className="text-xs text-slate-400">Recycled</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-slate-800"></div>
<span className="text-xs text-slate-400">Waste</span>
</div>
</div>
</div>
</div>
</section>
</div>
</main>


    </>
  );
}
