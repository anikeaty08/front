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



        // --- 1. Data Upload Logic ---
        const dropZone = document.getElementById('drop-zone');
        const fileInput = document.getElementById('file-input');
        const dataPreview = document.getElementById('data-preview');
        const fileName = document.getElementById('file-name');
        const tableBody = document.getElementById('table-body');

        dropZone.addEventListener('click', () => fileInput.click());

        fileInput.addEventListener('change', (e) => handleFile(e.target.files[0]));

        function handleFile(file) {
            if (file) {
                dropZone.classList.add('hidden');
                dataPreview.classList.remove('hidden');
                fileName.textContent = file.name;
                
                // Simulate CSV Parsing
                tableBody.innerHTML = '';
                const dummyData = [
                    { id: 'Z-101', coord: '34.05, -118.24', lvl: 85, status: 'Critical' },
                    { id: 'Z-102', coord: '36.16, -115.13', lvl: 42, status: 'Monitor' },
                    { id: 'Z-103', coord: '40.71, -74.00', lvl: 12, status: 'Clean' },
                    { id: 'Z-104', coord: '34.05, -118.24', lvl: 67, status: 'Warning' },
                ];

                dummyData.forEach(row => {
                    const tr = document.createElement('tr');
                    tr.className = 'hover:bg-slate-800/30 transition-colors';
                    // Determine status color
                    let statusColor = 'text-slate-400';
                    if(row.status === 'Critical') statusColor = 'text-rose-400';
                    else if(row.status === 'Clean') statusColor = 'text-emerald-400';
                    else statusColor = 'text-amber-400';

                    tr.innerHTML = `
                        <td class="px-4 py-3 text-slate-300 font-mono">${row.id}</td>
                        <td class="px-4 py-3 text-slate-400">${row.coord}</td>
                        <td class="px-4 py-3 text-slate-300">${row.lvl}%</td>
                        <td class="px-4 py-3 ${statusColor} font-medium text-[10px] uppercase tracking-wider">${row.status}</td>
                    `;
                    tableBody.appendChild(tr);
                });
            }
        }

        // --- 2. Heatmap Logic ---
        function generateHeatmap() {
            const grid = document.getElementById('heatmap-grid');
            grid.innerHTML = '';
            
            for (let i = 0; i < 25; i++) {
                const val = Math.floor(Math.random() * 101);
                const cell = document.createElement('div');
                cell.className = 'grid-cell w-full h-full rounded-md shadow-sm border border-black/10';
                
                // Animation delay
                cell.style.animation = `fadeIn 0.5s ease-out ${i * 0.02}s backwards`;

                // Color Logic
                if (val <= 30) {
                    cell.classList.add('bg-emerald-500/80', 'shadow-[0_0_10px_rgba(16,185,129,0.2)]');
                } else if (val <= 70) {
                    cell.classList.add('bg-amber-400/80', 'shadow-[0_0_10px_rgba(251,191,36,0.2)]');
                } else {
                    cell.classList.add('bg-rose-500/80', 'shadow-[0_0_10px_rgba(244,63,94,0.3)]');
                }
                
                // Tooltip simulation
                cell.title = `Pollution Level: ${val}%`;
                grid.appendChild(cell);
            }
        }

        // --- 3. Robot Simulation Logic ---
        let robotInterval;
        
        function startCleanup() {
            const grid = document.getElementById('sim-grid');
            const statusEl = document.getElementById('robot-status');
            const countEl = document.getElementById('collected-count');
            const btn = document.getElementById('start-btn');
            
            clearInterval(robotInterval);
            grid.innerHTML = '';
            btn.disabled = true;
            btn.classList.add('opacity-50', 'cursor-not-allowed');
            statusEl.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> Active`;

            let collected = 0;
            countEl.textContent = collected;

            // Setup Grid State
            let robotPos = { x: 0, y: 0 };
            let wastes = [];
            
            // Generate 5 unique random waste positions (excluding 0,0)
            while(wastes.length < 5) {
                let x = Math.floor(Math.random() * 5);
                let y = Math.floor(Math.random() * 5);
                if ((x !== 0 || y !== 0) && !wastes.some(w => w.x === x && w.y === y)) {
                    wastes.push({ x, y });
                }
            }

            // Render Function
            function renderGrid() {
                grid.innerHTML = '';
                for(let y=0; y<5; y++) {
                    for(let x=0; x<5; x++) {
                        const cell = document.createElement('div');
                        cell.className = 'w-full h-full rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center relative transition-all duration-300';
                        
                        // Check Robot
                        if (x === robotPos.x && y === robotPos.y) {
                            cell.classList.add('bg-slate-800', 'border-blue-500/50');
                            cell.innerHTML = '<iconify-icon icon="solar:smart-vacuum-bold-duotone" class="text-blue-400 text-xl drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]"></iconify-icon>';
                        }
                        
                        // Check Waste
                        const wasteIndex = wastes.findIndex(w => w.x === x && w.y === y);
                        if (wasteIndex !== -1) {
                            cell.innerHTML = '<iconify-icon icon="solar:trash-bin-trash-bold" class="text-rose-500 text-sm animate-bounce"></iconify-icon>';
                        }
                        
                        grid.appendChild(cell);
                    }
                }
            }

            renderGrid();

            // Movement Logic
            robotInterval = setInterval(() => {
                if (wastes.length === 0) {
                    clearInterval(robotInterval);
                    statusEl.innerHTML = `<span class="w-2 h-2 rounded-full bg-blue-500"></span> Task Complete`;
                    btn.disabled = false;
                    btn.classList.remove('opacity-50', 'cursor-not-allowed');
                    return;
                }

                // Find closest waste
                let target = wastes[0];
                let minDist = 999;
                
                wastes.forEach(w => {
                    const dist = Math.abs(robotPos.x - w.x) + Math.abs(robotPos.y - w.y);
                    if (dist < minDist) {
                        minDist = dist;
                        target = w;
                    }
                });

                // Move one step towards target
                if (robotPos.x < target.x) robotPos.x++;
                else if (robotPos.x > target.x) robotPos.x--;
                else if (robotPos.y < target.y) robotPos.y++;
                else if (robotPos.y > target.y) robotPos.y--;

                // Check Collection
                const hitIndex = wastes.findIndex(w => w.x === robotPos.x && w.y === robotPos.y);
                if (hitIndex !== -1) {
                    wastes.splice(hitIndex, 1);
                    collected++;
                    countEl.textContent = collected;
                }

                renderGrid();

            }, 600);
        }

        // --- 4. Reuse Dashboard Logic ---
        const slider = document.getElementById('plastic-slider');
        const sliderVal = document.getElementById('slider-val');
        const recycledVal = document.getElementById('recycled-val');
        const energyVal = document.getElementById('energy-val');
        const impactMsg = document.getElementById('impact-msg');
        
        // Chart Init
        const ctx = document.getElementById('reuseChart').getContext('2d');
        
        Chart.defaults.color = '#64748b';
        Chart.defaults.font.family = 'Inter';
        
        const reuseChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Recycled', 'Waste'],
                datasets: [{
                    data: [350, 150],
                    backgroundColor: ['#2dd4bf', '#334155'],
                    borderWidth: 0,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '75%',
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: '#0f172a',
                        titleColor: '#f1f5f9',
                        bodyColor: '#cbd5e1',
                        borderColor: '#334155',
                        borderWidth: 1
                    }
                }
            }
        });

        slider.addEventListener('input', updateDashboard);

        function updateDashboard() {
            const collected = parseInt(slider.value);
            const recycled = Math.round(collected * 0.7);
            const energy = collected * 2;
            const remaining = collected - recycled;

            sliderVal.textContent = collected;
            recycledVal.textContent = recycled + " kg";
            energyVal.textContent = energy + " kWh";

            // Update Chart
            reuseChart.data.datasets[0].data = [recycled, remaining];
            reuseChart.update();

            // Update Message
            if (collected < 200) {
                impactMsg.textContent = "Low impact. Consider expanding cleanup zones.";
                impactMsg.className = "text-rose-400";
            } else if (collected < 700) {
                impactMsg.textContent = "Moderate impact. Energy recovery is optimal.";
                impactMsg.className = "text-amber-400";
            } else {
                impactMsg.textContent = "High environmental impact! Great performance.";
                impactMsg.className = "text-emerald-400";
            }
        }

        // Initial calls
        generateHeatmap(); // Show empty grid initially (placeholder handled in HTML)
        updateDashboard();
    
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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/10 rounded-full blur-[120px]"></div>
</div>

<header className="w-full border-b border-white/5 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
<iconify-icon icon="solar:water-sun-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h1 className="text-lg font-medium tracking-tight text-slate-100 leading-none">Blue Turned Grey</h1>
<p className="text-xs text-slate-500 font-light tracking-wide mt-1">OCEAN PLASTIC MANAGER</p>
</div>
</div>
<p className="text-sm text-cyan-400 font-medium tracking-wide">Predict. Clean. Reuse. Protect.</p>
</div>
</header>

<main className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-6">

<section className="bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6 shadow-2xl relative group overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-slate-800/50 text-cyan-400 border border-white/5">
<iconify-icon icon="solar:file-send-linear" width="20"></iconify-icon>
</div>
<h2 className="text-base font-medium text-slate-100 tracking-tight">Data Upload</h2>
</div>
<span className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-400 border border-white/5">.CSV Support</span>
</div>

<div className="border-2 border-dashed border-slate-700 hover:border-cyan-500/50 rounded-xl p-8 transition-colors duration-300 text-center cursor-pointer bg-slate-900/30" id="drop-zone">
<input accept=".csv" className="hidden" id="file-input" type="file"/>
<div className="flex flex-col items-center gap-3 pointer-events-none">
<iconify-icon className="text-slate-500" icon="solar:cloud-upload-linear" width="32"></iconify-icon>
<div className="text-sm text-slate-300">
<span className="text-cyan-400 font-medium">Click to upload</span> or drag and drop
                    </div>
<p className="text-xs text-slate-500">Oceanographic data (MAX 10MB)</p>
</div>
</div>

<div className="hidden mt-6 fade-in" id="data-preview">
<div className="flex justify-between items-center mb-3">
<span className="text-xs font-medium text-cyan-400 bg-cyan-950/30 px-2 py-1 rounded border border-cyan-500/20" id="file-name">data.csv</span>
<span className="text-xs text-emerald-400 flex items-center gap-1">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Validated
                    </span>
</div>
<div className="overflow-x-auto rounded-lg border border-white/5">
<table className="w-full text-xs text-left">
<thead className="bg-slate-800/50 text-slate-400 font-medium">
<tr>
<th className="px-4 py-3">Zone ID</th>
<th className="px-4 py-3">Coordinates</th>
<th className="px-4 py-3">Pollution Lvl</th>
<th className="px-4 py-3">Status</th>
</tr>
</thead>
<tbody className="bg-slate-900/50 divide-y divide-white/5" id="table-body">

</tbody>
</table>
</div>
</div>
</section>

<section className="bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6 shadow-2xl relative group overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-slate-800/50 text-rose-400 border border-white/5">
<iconify-icon icon="solar:danger-linear" width="20"></iconify-icon>
</div>
<h2 className="text-base font-medium text-slate-100 tracking-tight">Pollution Prediction</h2>
</div>
<button className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-slate-800 to-slate-700 hover:from-cyan-900 hover:to-blue-900 border border-white/10 transition-all text-xs text-white font-medium shadow-lg hover:shadow-cyan-500/20" onclick="generateHeatmap()">
<iconify-icon icon="solar:cpu-bolt-linear"></iconify-icon>
                    Predict Zones
                </button>
</div>
<div className="flex flex-col md:flex-row gap-6 items-center">

<div className="grid grid-cols-5 gap-1.5 w-full max-w-[280px] aspect-square p-2 bg-slate-950 rounded-xl border border-white/5 shadow-inner" id="heatmap-grid">

<div className="flex items-center justify-center h-full col-span-5 text-xs text-slate-600">
                        Waiting for AI prediction...
                    </div>
</div>

<div className="flex flex-col gap-3 w-full md:w-auto">
<div className="text-xs font-medium text-slate-400 mb-1">Index</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded bg-emerald-500/80 shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
<span className="text-xs text-slate-400">Low (0-30)</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded bg-amber-400/80 shadow-[0_0_10px_rgba(251,191,36,0.4)]"></div>
<span className="text-xs text-slate-400">Med (31-70)</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded bg-rose-500/80 shadow-[0_0_10px_rgba(244,63,94,0.4)]"></div>
<span className="text-xs text-slate-400">Critical (&gt;70)</span>
</div>
</div>
</div>
</section>

<section className="bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6 shadow-2xl relative group overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-slate-800/50 text-emerald-400 border border-white/5">
<iconify-icon icon="solar:smart-vacuum-linear" width="20"></iconify-icon>
</div>
<h2 className="text-base font-medium text-slate-100 tracking-tight">Cleanup Simulation</h2>
</div>
<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-medium transition-all shadow-lg shadow-emerald-900/20" id="start-btn" onclick="startCleanup()">
                    Start Simulation
                </button>
</div>
<div className="flex gap-6">

<div className="grid grid-cols-5 gap-1 w-full max-w-[280px] aspect-square p-2 bg-slate-950 rounded-xl border border-white/5 relative" id="sim-grid">

<div className="flex items-center justify-center h-full col-span-5 text-xs text-slate-600">
                        System Standby
                    </div>
</div>

<div className="flex flex-col justify-center gap-4 flex-1">
<div className="bg-slate-800/30 p-4 rounded-xl border border-white/5">
<p className="text-xs text-slate-500 mb-1">Status</p>
<p className="text-sm text-slate-200 font-medium flex items-center gap-2" id="robot-status">
<span className="w-2 h-2 rounded-full bg-slate-500"></span> Idle
                        </p>
</div>
<div className="bg-slate-800/30 p-4 rounded-xl border border-white/5">
<p className="text-xs text-slate-500 mb-1">Collected</p>
<p className="text-2xl text-emerald-400 font-light tracking-tight"><span id="collected-count">0</span><span className="text-xs text-slate-500 ml-1">items</span></p>
</div>
</div>
</div>
</section>

<section className="bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6 shadow-2xl relative group overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-slate-800/50 text-blue-400 border border-white/5">
<iconify-icon icon="solar:chart-2-linear" width="20"></iconify-icon>
</div>
<h2 className="text-base font-medium text-slate-100 tracking-tight">Reuse Analytics</h2>
</div>
<div className="flex items-center gap-1 text-xs text-slate-400 bg-slate-800/50 px-2 py-1 rounded-md border border-white/5">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Live
                </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

<div className="space-y-6">
<div>
<div className="flex justify-between text-xs text-slate-400 mb-2">
<span>Input Collection</span>
<span className="text-cyan-400 font-medium"><span id="slider-val">500</span> kg</span>
</div>
<input className="w-full" id="plastic-slider" max="1000" min="0" type="range" value="500"/>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="bg-slate-800/30 p-3 rounded-xl border border-white/5">
<iconify-icon className="text-emerald-400 mb-2" icon="solar:leaf-linear" width="20"></iconify-icon>
<p className="text-[10px] text-slate-500 uppercase tracking-wider">Recycled</p>
<p className="text-lg font-medium text-slate-200" id="recycled-val">350 kg</p>
</div>
<div className="bg-slate-800/30 p-3 rounded-xl border border-white/5">
<iconify-icon className="text-amber-400 mb-2" icon="solar:bolt-linear" width="20"></iconify-icon>
<p className="text-[10px] text-slate-500 uppercase tracking-wider">Energy Saved</p>
<p className="text-lg font-medium text-slate-200" id="energy-val">1000 kWh</p>
</div>
</div>
<p className="text-xs text-slate-400 leading-relaxed border-t border-white/5 pt-3 mt-2">
<iconify-icon className="inline align-middle mr-1 text-blue-400" icon="solar:info-circle-linear"></iconify-icon>
<span id="impact-msg">Moderate impact achieved. Increase collection efforts.</span>
</p>
</div>

<div className="relative h-48 w-full flex items-center justify-center">
<canvas id="reuseChart"></canvas>
</div>
</div>
</section>
</main>

<footer className="max-w-7xl mx-auto px-6 py-8 border-t border-white/5 text-center md:text-left">
<p className="text-xs text-slate-600 font-light">© 2023 OceanAI Systems. All rights reserved.</p>
</footer>


    </>
  );
}
