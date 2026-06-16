import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
gray: {
50: '#f9fafb',
100: '#f3f4f6',
200: '#e5e7eb',
300: '#d1d5db',
400: '#9ca3af',
500: '#6b7280',
600: '#4b5563',
700: '#374151',
800: '#1f2937',
900: '#111827',
950: '#030712',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- State Management ---
        const STORAGE_KEY = 'laced_env_logs';
        let logs = [];
        let currentSensors = { temp: 0, hum: 0, aqi: 0, noise: 0 };
        let chartInstance = null;

        // --- Theme Logic ---
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        const html = document.documentElement;

        function applyTheme(isDark) {
            if (isDark) {
                html.classList.add('dark');
                themeIcon.setAttribute('icon', 'solar:sun-linear');
            } else {
                html.classList.remove('dark');
                themeIcon.setAttribute('icon', 'solar:moon-linear');
            }
            updateChartTheme();
        }

        // Initialize Theme
        const storedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        let isDarkMode = storedTheme === 'dark' || (!storedTheme && prefersDark);
        applyTheme(isDarkMode);

        themeToggle.addEventListener('click', () => {
            isDarkMode = !isDarkMode;
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
            applyTheme(isDarkMode);
        });

        // --- Data Generation & Simulation ---
        function generateMockData() {
            const mockLogs = [];
            const now = Date.now();
            for (let i = 20; i >= 1; i--) {
                mockLogs.push({
                    id: crypto.randomUUID(),
                    timestamp: now - (i * 1000 * 60 * 15), // 15 mins apart
                    location: `Zone ${Math.floor(Math.random() * 5) + 1}`,
                    temp: (20 + Math.random() * 8).toFixed(1),
                    hum: (40 + Math.random() * 20).toFixed(1),
                    aqi: Math.floor(20 + Math.random() * 50),
                    noise: Math.floor(45 + Math.random() * 30),
                    notes: i % 3 === 0 ? 'Routine check.' : ''
                });
            }
            return mockLogs;
        }

        function simulateSensors() {
            // Base values + slight random walk
            currentSensors.temp = (22 + Math.sin(Date.now() / 10000) * 2 + Math.random()).toFixed(1);
            currentSensors.hum = (45 + Math.cos(Date.now() / 15000) * 5 + Math.random() * 2).toFixed(1);
            
            // AQI tends to be stable, occasional spikes
            let newAqi = parseInt(currentSensors.aqi) || 40;
            newAqi += Math.floor((Math.random() - 0.5) * 5);
            currentSensors.aqi = Math.max(10, Math.min(300, newAqi));

            // Noise fluctuates rapidly
            currentSensors.noise = Math.floor(50 + Math.random() * 15);

            updateDashboardUI();
        }

        // --- UI Updates ---
        function getAqiLabel(aqi) {
            if (aqi <= 50) return { text: 'Good', color: 'text-emerald-500' };
            if (aqi <= 100) return { text: 'Moderate', color: 'text-yellow-500' };
            if (aqi <= 150) return { text: 'Sensitive', color: 'text-orange-500' };
            return { text: 'Unhealthy', color: 'text-red-500' };
        }

        function updateDashboardUI() {
            document.getElementById('liveTemp').innerText = currentSensors.temp;
            document.getElementById('liveHum').innerText = currentSensors.hum;
            document.getElementById('liveAqi').innerText = currentSensors.aqi;
            document.getElementById('liveNoise').innerText = currentSensors.noise;

            const aqiInfo = getAqiLabel(currentSensors.aqi);
            const aqiLabelEl = document.getElementById('liveAqiLabel');
            aqiLabelEl.innerText = aqiInfo.text;
            aqiLabelEl.className = `text-[10px] uppercase font-medium px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 ml-2 ${aqiInfo.color}`;
        }

        function formatTime(ts) {
            const d = new Date(ts);
            return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' <span class="text-[10px] text-gray-400 block">' + d.toLocaleDateString([], {month:'short', day:'numeric'}) + '</span>';
        }

        function renderTable() {
            const tbody = document.getElementById('logsTableBody');
            tbody.innerHTML = '';
            
            // Show last 20 logs
            const displayLogs = logs.slice(0, 20);

            if (displayLogs.length === 0) {
                tbody.innerHTML = `<tr><td colspan="5" class="py-6 text-center text-gray-400 text-sm">No logs available.</td></tr>`;
                return;
            }

            displayLogs.forEach(log => {
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors';
                tr.innerHTML = `
                    <td class="py-3 pr-4 text-gray-900 dark:text-gray-300 align-top">${formatTime(log.timestamp)}</td>
                    <td class="py-3 px-4 font-medium align-top">${log.location}</td>
                    <td class="py-3 px-4 align-top">
                        <div class="flex items-center gap-2">
                            <span class="text-orange-500 dark:text-orange-400">${log.temp}°</span>
                            <span class="text-gray-300 dark:text-gray-600">|</span>
                            <span class="text-blue-500 dark:text-blue-400">${log.hum}%</span>
                        </div>
                    </td>
                    <td class="py-3 px-4 align-top text-gray-600 dark:text-gray-400">
                        ${log.aqi} <span class="text-[10px]">AQI</span> / ${log.noise} <span class="text-[10px]">dB</span>
                    </td>
                    <td class="py-3 pl-4 text-gray-500 dark:text-gray-500 max-w-[200px] truncate align-top text-xs" title="${log.notes || '-'}">
                        ${log.notes || '-'}
                    </td>
                `;
                tbody.appendChild(tr);
            });
        }

        // --- Chart Logic ---
        function initChart() {
            const ctx = document.getElementById('trendChart').getContext('2d');
            
            Chart.defaults.font.family = 'Inter, sans-serif';
            Chart.defaults.color = isDarkMode ? '#9ca3af' : '#6b7280';
            
            chartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: [],
                    datasets: [
                        {
                            label: 'Temp (°C)',
                            data: [],
                            borderColor: '#f97316', // orange-500
                            backgroundColor: 'transparent',
                            borderWidth: 2,
                            tension: 0.4,
                            pointRadius: 0,
                            pointHoverRadius: 4,
                            yAxisID: 'y'
                        },
                        {
                            label: 'Humidity (%)',
                            data: [],
                            borderColor: '#3b82f6', // blue-500
                            backgroundColor: 'transparent',
                            borderWidth: 2,
                            tension: 0.4,
                            pointRadius: 0,
                            pointHoverRadius: 4,
                            yAxisID: 'y1'
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    interaction: {
                        mode: 'index',
                        intersect: false,
                    },
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top',
                            align: 'end',
                            labels: { boxWidth: 8, usePointStyle: true, font: { size: 11 } }
                        },
                        tooltip: {
                            backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
                            titleColor: isDarkMode ? '#f3f4f6' : '#111827',
                            bodyColor: isDarkMode ? '#d1d5db' : '#4b5563',
                            borderColor: isDarkMode ? '#374151' : '#e5e7eb',
                            borderWidth: 1,
                            padding: 10,
                            boxPadding: 4,
                            usePointStyle: true
                        }
                    },
                    scales: {
                        x: {
                            grid: { display: false, drawBorder: false },
                            ticks: { maxTicksLimit: 6, font: { size: 10 } }
                        },
                        y: {
                            type: 'linear',
                            display: true,
                            position: 'left',
                            grid: { color: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', drawBorder: false },
                            ticks: { font: { size: 10 } }
                        },
                        y1: {
                            type: 'linear',
                            display: true,
                            position: 'right',
                            grid: { display: false },
                            ticks: { font: { size: 10 } }
                        }
                    }
                }
            });
        }

        function updateChartData() {
            if (!chartInstance) return;

            // Get last 10 logs for chart, chronological order
            const chartData = [...logs].slice(0, 10).reverse();
            
            const labels = chartData.map(l => {
                const d = new Date(l.timestamp);
                return `${d.getHours()}:${d.getMinutes().toString().padStart(2, '0')}`;
            });
            const temps = chartData.map(l => parseFloat(l.temp));
            const hums = chartData.map(l => parseFloat(l.hum));

            chartInstance.data.labels = labels;
            chartInstance.data.datasets[0].data = temps;
            chartInstance.data.datasets[1].data = hums;
            chartInstance.update();
        }

        function updateChartTheme() {
            if (!chartInstance) return;
            
            const textColor = isDarkMode ? '#9ca3af' : '#6b7280';
            const gridColor = isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
            const tooltipBg = isDarkMode ? '#1f2937' : '#ffffff';
            const tooltipTitle = isDarkMode ? '#f3f4f6' : '#111827';
            const tooltipBody = isDarkMode ? '#d1d5db' : '#4b5563';
            const tooltipBorder = isDarkMode ? '#374151' : '#e5e7eb';

            chartInstance.options.scales.x.ticks.color = textColor;
            chartInstance.options.scales.y.ticks.color = textColor;
            chartInstance.options.scales.y1.ticks.color = textColor;
            chartInstance.options.scales.y.grid.color = gridColor;
            
            chartInstance.options.plugins.legend.labels.color = textColor;
            chartInstance.options.plugins.tooltip.backgroundColor = tooltipBg;
            chartInstance.options.plugins.tooltip.titleColor = tooltipTitle;
            chartInstance.options.plugins.tooltip.bodyColor = tooltipBody;
            chartInstance.options.plugins.tooltip.borderColor = tooltipBorder;

            chartInstance.update();
        }

        // --- Form Handling ---
        const fileInput = document.getElementById('photo');
        const fileNameDisplay = document.getElementById('fileName');

        fileInput.addEventListener('change', (e) => {
            if(e.target.files.length > 0) {
                fileNameDisplay.textContent = e.target.files[0].name;
            } else {
                fileNameDisplay.textContent = 'Click or drag photo';
            }
        });

        document.getElementById('logForm').addEventListener('submit', (e) => {
            e.preventDefault();
            
            const location = document.getElementById('location').value.trim();
            const notes = document.getElementById('notes').value.trim();

            const newLog = {
                id: crypto.randomUUID(),
                timestamp: Date.now(),
                location: location,
                notes: notes,
                temp: currentSensors.temp,
                hum: currentSensors.hum,
                aqi: currentSensors.aqi,
                noise: currentSensors.noise
            };

            // Add to beginning of array
            logs.unshift(newLog);
            
            // Save to local storage
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
            } catch (err) {
                console.warn('Could not save to localStorage', err);
            }

            // Reset form visually
            e.target.reset();
            fileNameDisplay.textContent = 'Click or drag photo';

            // Update UI
            renderTable();
            updateChartData();
        });

        // --- Initialization ---
        function init() {
            // Load logs
            const storedLogs = localStorage.getItem(STORAGE_KEY);
            if (storedLogs) {
                try {
                    logs = JSON.parse(storedLogs);
                } catch(e) {
                    logs = generateMockData();
                }
            } else {
                logs = generateMockData();
            }

            // Initial Sensor Setup
            simulateSensors();
            setInterval(simulateSensors, 3000); // Update live stats every 3s

            // Render
            initChart();
            renderTable();
            updateChartData();
        }

        // Start App
        init();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-[100px] z-[-1] pointer-events-none"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-400/20 dark:bg-emerald-600/10 blur-[100px] z-[-1] pointer-events-none"></div>
<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 flex flex-col gap-8">

<header className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gray-900 dark:bg-white flex items-center justify-center text-white dark:text-gray-900">
<iconify-icon className="text-xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<h1 className="text-xl font-semibold tracking-tight tracking-[-0.02em]">LACED</h1>
</div>
<button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400 flex items-center justify-center focus:outline-none" id="themeToggle">
<iconify-icon className="text-xl" icon="solar:moon-linear" id="themeIcon"></iconify-icon>
</button>
</header>

<section className="grid grid-cols-2 lg:grid-cols-4 gap-4">

<div className="glass-panel rounded-2xl p-5 shadow-sm flex flex-col gap-2">
<div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-1">
<iconify-icon className="text-lg" icon="solar:thermometer-linear"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest">Temperature</span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-medium tracking-tight" id="liveTemp">--</span>
<span className="text-sm text-gray-400">°C</span>
</div>
</div>

<div className="glass-panel rounded-2xl p-5 shadow-sm flex flex-col gap-2">
<div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-1">
<iconify-icon className="text-lg" icon="solar:waterdrops-linear"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest">Humidity</span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-medium tracking-tight" id="liveHum">--</span>
<span className="text-sm text-gray-400">%</span>
</div>
</div>

<div className="glass-panel rounded-2xl p-5 shadow-sm flex flex-col gap-2">
<div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-1">
<iconify-icon className="text-lg" icon="solar:wind-linear"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest">AQI</span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-medium tracking-tight" id="liveAqi">--</span>
<span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 ml-2" id="liveAqiLabel">--</span>
</div>
</div>

<div className="glass-panel rounded-2xl p-5 shadow-sm flex flex-col gap-2">
<div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-1">
<iconify-icon className="text-lg" icon="solar:volume-loud-linear"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest">Noise Level</span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-medium tracking-tight" id="liveNoise">--</span>
<span className="text-sm text-gray-400">dB</span>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 flex flex-col gap-6">

<section className="glass-panel rounded-2xl p-5 shadow-sm flex flex-col gap-4">
<div className="flex items-center justify-between">
<h2 className="text-base font-medium">Environmental Trends</h2>
<span className="text-xs text-gray-500 dark:text-gray-400">Last 10 Logs</span>
</div>
<div className="relative w-full" style={{height: '250px'}}>
<canvas id="trendChart"></canvas>
</div>
</section>

<section className="glass-panel rounded-2xl p-5 shadow-sm flex flex-col gap-4 flex-1">
<div className="flex items-center justify-between">
<h2 className="text-base font-medium">Recent Logs</h2>
<span className="text-xs text-gray-500 dark:text-gray-400">Current Session</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead>
<tr className="text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-800">
<th className="pb-3 font-medium text-xs uppercase tracking-wider">Timestamp</th>
<th className="pb-3 font-medium text-xs uppercase tracking-wider">Location</th>
<th className="pb-3 font-medium text-xs uppercase tracking-wider">Temp / Hum</th>
<th className="pb-3 font-medium text-xs uppercase tracking-wider">AQI / Noise</th>
<th className="pb-3 font-medium text-xs uppercase tracking-wider">Notes</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 dark:divide-gray-800/50" id="logsTableBody">

</tbody>
</table>
</div>
</section>
</div>

<div className="flex flex-col gap-6">
<section className="glass-panel rounded-2xl p-5 shadow-sm">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-xl text-gray-500" icon="solar:pen-new-square-linear"></iconify-icon>
<h2 className="text-base font-medium">Manual Log Entry</h2>
</div>
<form className="flex flex-col gap-4" id="logForm">

<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-gray-500 dark:text-gray-400" htmlFor="location">Location</label>
<input className="w-full bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 transition-shadow text-gray-900 dark:text-white placeholder-gray-400" id="location" placeholder="e.g., Main Office, Sector 4" required="" type="text"/>
</div>

<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-gray-500 dark:text-gray-400" htmlFor="notes">Notes (Optional)</label>
<textarea className="w-full bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 transition-shadow text-gray-900 dark:text-white placeholder-gray-400 resize-none" id="notes" placeholder="Any anomalies observed?" rows="3"></textarea>
</div>

<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-gray-500 dark:text-gray-400">Attach Media</label>
<div className="relative w-full flex items-center justify-center border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer group">
<input accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" id="photo" type="file"/>
<div className="flex flex-col items-center gap-1 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
<iconify-icon className="text-xl" icon="solar:camera-add-linear"></iconify-icon>
<span className="text-xs" id="fileName">Click or drag photo</span>
</div>
</div>
</div>

<div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 flex gap-2 items-start mt-2">
<iconify-icon className="text-blue-500 mt-0.5" icon="solar:info-circle-linear"></iconify-icon>
<p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
                                Submitting will capture the current live sensor readings and attach them to this log.
                            </p>
</div>
<button className="mt-2 w-full bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-100 dark:hover:bg-white dark:text-gray-900 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-offset-gray-950" type="submit">
                            Save Log Entry
                        </button>
</form>
</section>
</div>
</div>
</div>


    </>
  );
}
