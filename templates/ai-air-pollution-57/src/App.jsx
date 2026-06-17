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



        // State Management
        let currentView = 'landing-page';
        let mapInitialized = false;
        let map;

        // View Toggle Logic
        function toggleView(viewName) {
            if (viewName === 'dashboard') {
                document.getElementById('landing-page').style.display = 'none';
                document.getElementById('dashboard-app').classList.remove('hidden');
                document.getElementById('dashboard-app').classList.add('flex'); // Ensure flex display
                switchTab('overview');
            }
        }

        // Tab Switching Logic
        function switchTab(tabId) {
            // Update UI Sidebar
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('active-nav', 'bg-white/5', 'text-blue-400');
                btn.classList.add('text-slate-400');
            });
            event.currentTarget?.classList.add('active-nav', 'bg-white/5', 'text-blue-400');
            event.currentTarget?.classList.remove('text-slate-400');

            // Hide all sections
            document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
            
            // Show target
            document.getElementById(`view-${tabId}`).classList.remove('hidden');
            document.getElementById('page-title').innerText = tabId.charAt(0).toUpperCase() + tabId.slice(1);

            // Initialize Map if needed
            if (tabId === 'map' && !mapInitialized) {
                setTimeout(initMap, 100); // Small delay for layout calculation
            }
        }

        // Chat Toggle
        function toggleChat() {
            const chat = document.getElementById('chat-window');
            chat.classList.toggle('hidden');
        }

        // Three.js Globe for Landing Page
        const initGlobe = () => {
            const container = document.getElementById('canvas-container');
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            
            renderer.setSize(container.clientWidth, container.clientHeight);
            container.appendChild(renderer.domElement);

            // Particle Sphere (Abstract Pollution Globe)
            const geometry = new THREE.BufferGeometry();
            const particles = 2000;
            const positions = new Float32Array(particles * 3);
            const colors = new Float32Array(particles * 3);

            for (let i = 0; i < particles; i++) {
                // Sphere math
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos((Math.random() * 2) - 1);
                const r = 2.5;

                const x = r * Math.sin(phi) * Math.cos(theta);
                const y = r * Math.sin(phi) * Math.sin(theta);
                const z = r * Math.cos(phi);

                positions[i * 3] = x;
                positions[i * 3 + 1] = y;
                positions[i * 3 + 2] = z;

                // Color gradient (Blue to Orange/Pollution)
                const isPolluted = Math.random() > 0.7;
                colors[i * 3] = isPolluted ? 1.0 : 0.2; // R
                colors[i * 3 + 1] = isPolluted ? 0.5 : 0.6; // G
                colors[i * 3 + 2] = isPolluted ? 0.0 : 1.0; // B
            }

            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

            const material = new THREE.PointsMaterial({ size: 0.04, vertexColors: true, transparent: true, opacity: 0.8 });
            const sphere = new THREE.Points(geometry, material);
            scene.add(sphere);

            camera.position.z = 5;

            // Animation
            const animate = function () {
                requestAnimationFrame(animate);
                sphere.rotation.y += 0.003;
                sphere.rotation.x += 0.001;
                renderer.render(scene, camera);
            };

            animate();

            // Resize handler
            window.addEventListener('resize', () => {
                camera.aspect = container.clientWidth / container.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container.clientWidth, container.clientHeight);
            });
        };
        
        // Initialize Charts
        const initCharts = () => {
            // Forecast Chart
            const ctxForecast = document.getElementById('forecastChart').getContext('2d');
            new Chart(ctxForecast, {
                type: 'line',
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                        label: 'Predicted AQI',
                        data: [210, 245, 280, 265, 300, 320, 290],
                        borderColor: '#6366f1', // Indigo 500
                        backgroundColor: 'rgba(99, 102, 241, 0.1)',
                        fill: true,
                        tension: 0.4,
                        borderWidth: 2,
                        pointBackgroundColor: '#0f172a'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8' } },
                        x: { grid: { display: false }, ticks: { color: '#94a3b8' } }
                    }
                }
            });

            // SHAP Chart
            const ctxShap = document.getElementById('shapChart').getContext('2d');
            new Chart(ctxShap, {
                type: 'bar',
                indexAxis: 'y',
                data: {
                    labels: ['PM2.5', 'NO2', 'CO', 'Temp', 'Wind', 'Humidity'],
                    datasets: [{
                        label: 'Impact on High Risk',
                        data: [0.45, 0.22, 0.15, -0.1, -0.2, 0.05],
                        backgroundColor: (ctx) => {
                            const v = ctx.raw;
                            return v > 0 ? '#ef4444' : '#3b82f6';
                        },
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8' } },
                        y: { grid: { display: false }, ticks: { color: '#e2e8f0' } }
                    }
                }
            });

            // EDA Boxplot (Simplified as bar for demo)
            const ctxEda = document.getElementById('edaBoxChart').getContext('2d');
            new Chart(ctxEda, {
                type: 'bar',
                data: {
                    labels: ['Low', 'Mid', 'High'],
                    datasets: [{
                        label: 'Avg PM2.5',
                        data: [45, 95, 180],
                        backgroundColor: ['#22c55e', '#eab308', '#ef4444'],
                        borderRadius: 4,
                        barThickness: 40
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8' } },
                        x: { grid: { display: false }, ticks: { color: '#94a3b8' } }
                    },
                    plugins: { legend: { display: false } }
                }
            });
        };

        // Initialize Map
        const initMap = () => {
            if(mapInitialized) return;
            map = L.map('mapContainer').setView([28.6139, 77.2090], 10); // Delhi coordinates
            
            // Dark Mode CartoDB tiles
            L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
            }).addTo(map);

            // Dummy Data Points (Pollution)
            const points = [
                { lat: 28.6139, lng: 77.2090, val: 'High', color: '#ef4444' }, // Central Delhi
                { lat: 28.5355, lng: 77.3910, val: 'Mid', color: '#eab308' },  // Noida
                { lat: 28.4595, lng: 77.0266, val: 'Mid', color: '#eab308' },  // Gurgaon
                { lat: 28.7041, lng: 77.1025, val: 'High', color: '#ef4444' }  // North Delhi
            ];

            points.forEach(p => {
                L.circleMarker([p.lat, p.lng], {
                    radius: 10,
                    fillColor: p.color,
                    color: "#000",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.8
                }).bindPopup(`<b>Status: ${p.val} Pollution</b><br>Coordinates: ${p.lat}, ${p.lng}`).addTo(map);
            });

            mapInitialized = true;
        };

        // Prediction Simulation
        const runPrediction = () => {
            const loader = document.getElementById('prediction-loader');
            loader.classList.remove('hidden');
            
            // Simulate API delay
            setTimeout(() => {
                loader.classList.add('hidden');
                // Could trigger a confetti effect here
            }, 2000);
        };

        // Export Mock
        const toggleExport = () => {
            const btn = event.currentTarget;
            const originalText = btn.innerHTML;
            btn.innerHTML = `<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon> Generating PDF...`;
            setTimeout(() => {
                btn.innerHTML = originalText;
                alert("Report exported to PDF successfully (NTCC_Report_2025.pdf)");
            }, 1500);
        };

        // Range Slider Value Update
        document.getElementById('input-pm25').addEventListener('input', (e) => {
            document.getElementById('val-pm25').innerText = e.target.value;
        });

        // Initialize Everything
        window.addEventListener('DOMContentLoaded', () => {
            initGlobe();
            initCharts();
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
      

<div className="relative min-h-screen flex flex-col overflow-hidden" id="landing-page">

<div className="absolute inset-0 w-full h-full bg-slate-950">
<div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
<div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
</div>

<nav className="relative z-50 w-full px-6 py-4 flex justify-between items-center glass border-b-0 border-white/5">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs tracking-tighter">NT</div>
<span className="text-sm font-medium tracking-tight text-slate-200">NTCC Pollution Project</span>
</div>
<div className="hidden md:flex gap-6 text-xs font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Methodology</a>
<a className="hover:text-white transition-colors" href="#">IEEE Paper</a>
<a className="hover:text-white transition-colors" href="#">xAI Integration</a>
</div>
<button className="bg-white text-black px-4 py-2 rounded-full text-xs font-semibold hover:bg-slate-200 transition-all flex items-center gap-2" onclick="toggleView('dashboard')">
                Launch App
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</nav>

<main className="relative z-10 flex-1 flex flex-col md:flex-row items-center justify-center px-6 lg:px-20 py-12 gap-12">
<div className="flex-1 space-y-6 max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-medium tracking-wide uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                    Ensemble Model Live
                </div>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500">
                    NTCC Air Pollution <br/> Dashboard
                </h1>
<p className="text-slate-400 text-lg font-light leading-relaxed">
                    Predict &amp; analyze lung risks in India using ML-driven classification. Leveraging Random Forest, XGBoost, and SHAP explainability to decode AQI, PM2.5, and O3 patterns.
                </p>
<div className="flex gap-4 pt-4">
<button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg text-sm font-medium transition-all shadow-lg shadow-blue-900/20 flex items-center gap-2 group" onclick="toggleView('dashboard')">
                        Start Analysis
                        <iconify-icon className="group-hover:rotate-12 transition-transform" icon="solar:stars-minimalistic-linear"></iconify-icon>
</button>
<button className="px-6 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 transition-all">
                        View Research
                    </button>
</div>
<div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
<div>
<div className="text-2xl font-medium text-white tracking-tight">98.7%</div>
<div className="text-xs text-slate-500 mt-1">F1-Macro Score</div>
</div>
<div>
<div className="text-2xl font-medium text-white tracking-tight">2.1s</div>
<div className="text-xs text-slate-500 mt-1">Inference Time</div>
</div>
<div>
<div className="text-2xl font-medium text-white tracking-tight">12k+</div>
<div className="text-xs text-slate-500 mt-1">Data Points</div>
</div>
</div>
</div>

<div className="flex-1 w-full h-[500px] relative" id="canvas-container">
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 pointer-events-none"></div>
</div>
</main>
</div>

<div className="hidden min-h-screen bg-slate-950 flex overflow-hidden" id="dashboard-app">

<aside className="w-64 border-r border-slate-800 bg-slate-950/50 flex flex-col z-20">
<div className="p-6 flex items-center gap-2 border-b border-slate-800/50">
<div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">AI</div>
<span className="text-sm font-semibold tracking-tight">Pollution<span className="text-slate-500">Net</span></span>
</div>
<div className="flex-1 py-6 px-3 space-y-1">
<div className="text-[10px] font-medium text-slate-500 px-3 py-2 uppercase tracking-wider">Analytics</div>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-all active-nav bg-white/5 text-blue-400" onclick="switchTab('overview')">
<iconify-icon icon="solar:widget-linear" width="18"></iconify-icon> Overview
                </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-all" onclick="switchTab('map')">
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon> Geo-Spatial Map
                </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-all" onclick="switchTab('eda')">
<iconify-icon icon="solar:chart-2-linear" width="18"></iconify-icon> EDA &amp; Stats
                </button>
<div className="text-[10px] font-medium text-slate-500 px-3 py-2 uppercase tracking-wider mt-6">Machine Learning</div>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-all" onclick="switchTab('predict')">
<iconify-icon icon="solar:magic-stick-3-linear" width="18"></iconify-icon> Predict &amp; SHAP
                </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-all" onclick="switchTab('models')">
<iconify-icon icon="solar:tuning-square-2-linear" width="18"></iconify-icon> Model Comparison
                </button>
<div className="text-[10px] font-medium text-slate-500 px-3 py-2 uppercase tracking-wider mt-6">Actions</div>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-all" onclick="toggleExport()">
<iconify-icon icon="solar:document-add-linear" width="18"></iconify-icon> Export Report
                </button>
</div>
<div className="p-4 border-t border-slate-800">
<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-b from-slate-700 to-slate-800 border border-slate-600 flex items-center justify-center text-xs font-medium">F</div>
<div className="flex-1">
<div className="text-xs font-medium text-white">Farheen</div>
<div className="text-[10px] text-slate-500">Research Lead</div>
</div>
<iconify-icon className="text-slate-500 cursor-pointer hover:text-white" icon="solar:settings-linear"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-y-auto relative bg-slate-950">

<header className="sticky top-0 z-30 flex items-center justify-between px-8 py-4 glass border-b border-slate-800/50">
<div className="flex items-center gap-2 text-sm text-slate-400">
<span>Dashboard</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-white" id="page-title">Overview</span>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<iconify-icon className="text-slate-400 text-lg" icon="solar:bell-linear"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
</div>
<button className="text-slate-400 hover:text-white" onclick="toggleTheme()">
<iconify-icon className="text-lg" icon="solar:moon-stars-linear"></iconify-icon>
</button>
</div>
</header>

<div className="p-8 space-y-8 max-w-7xl mx-auto w-full">

<div className="view-section space-y-6 animate-fade-in" id="view-overview">

<div className="flex justify-between items-end">
<div>
<h2 className="text-2xl font-semibold text-white tracking-tight">Welcome back, Farheen</h2>
<p className="text-slate-400 text-sm mt-1">Here's the latest air quality analysis for Delhi, India.</p>
</div>
<div className="flex gap-2">
<span className="text-xs px-2 py-1 rounded bg-green-500/10 text-green-400 border border-green-500/20">System Online</span>
<span className="text-xs px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">Model: Ensemble v2.1</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="glass-panel p-5 rounded-xl border-l-4 border-l-yellow-500 relative overflow-hidden group">
<div className="flex justify-between items-start">
<div>
<div className="text-slate-400 text-xs font-medium uppercase tracking-wider">Current AQI</div>
<div className="text-3xl font-semibold text-white mt-1">284</div>
<div className="text-yellow-400 text-xs mt-2 font-medium">Poor Condition</div>
</div>
<div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500">
<iconify-icon icon="solar:cloud-linear" width="20"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-1 bg-slate-800">
<div className="h-full bg-yellow-500" style={{width: '65%'}}></div>
</div>
</div>
<div className="glass-panel p-5 rounded-xl border-l-4 border-l-red-500">
<div className="flex justify-between items-start">
<div>
<div className="text-slate-400 text-xs font-medium uppercase tracking-wider">Lung Risk</div>
<div className="text-3xl font-semibold text-white mt-1">High</div>
<div className="text-red-400 text-xs mt-2 font-medium">Vulnerability Score: 8.4/10</div>
</div>
<div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
<iconify-icon icon="solar:heart-pulse-linear" width="20"></iconify-icon>
</div>
</div>
</div>
<div className="glass-panel p-5 rounded-xl border-l-4 border-l-blue-500">
<div className="flex justify-between items-start">
<div>
<div className="text-slate-400 text-xs font-medium uppercase tracking-wider">Primary Pollutant</div>
<div className="text-3xl font-semibold text-white mt-1">PM2.5</div>
<div className="text-slate-400 text-xs mt-2 font-medium">112 µg/m³ (Avg)</div>
</div>
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
<iconify-icon icon="solar:atom-linear" width="20"></iconify-icon>
</div>
</div>
</div>
<div className="glass-panel p-5 rounded-xl border-l-4 border-l-indigo-500">
<div className="flex justify-between items-start">
<div>
<div className="text-slate-400 text-xs font-medium uppercase tracking-wider">Forecast (24h)</div>
<div className="text-3xl font-semibold text-white mt-1">Rising</div>
<div className="text-indigo-400 text-xs mt-2 font-medium">+12% expected</div>
</div>
<div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 glass-panel p-6 rounded-xl">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-semibold text-white">AQI Forecasting (Prophet Model)</h3>
<select className="bg-slate-900 border border-slate-700 text-xs text-slate-300 rounded px-2 py-1">
<option>Next 7 Days</option>
<option>Next 30 Days</option>
</select>
</div>
<div className="relative h-64 w-full">
<canvas id="forecastChart"></canvas>
</div>
</div>
<div className="glass-panel p-6 rounded-xl flex flex-col">
<h3 className="text-sm font-semibold text-white mb-4">Gamification Scorecard</h3>
<div className="flex-1 flex flex-col items-center justify-center relative">
<div className="w-32 h-32 rounded-full border-4 border-slate-800 flex items-center justify-center relative">
<svg className="absolute top-0 left-0 w-full h-full transform -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="45" stroke="#3b82f6" stroke-dasharray="283" stroke-dashoffset="70" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<div className="text-center">
<div className="text-2xl font-bold text-white">750</div>
<div className="text-[10px] text-slate-400">Green Points</div>
</div>
</div>
</div>
<div className="mt-4 space-y-3">
<div className="flex items-center gap-3 p-2 rounded bg-slate-800/50 border border-slate-700/50">
<div className="p-1.5 rounded bg-yellow-500/20 text-yellow-500"><iconify-icon icon="solar:medal-star-linear"></iconify-icon></div>
<div className="text-xs">
<div className="text-white font-medium">Emission Saver</div>
<div className="text-slate-500">Used public transport 5 days</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden space-y-4 fade-in" id="view-map">
<div className="glass-panel p-1 rounded-xl h-[600px] relative z-0">
<div className="w-full h-full rounded-lg z-0" id="mapContainer"></div>

<div className="absolute bottom-6 right-6 bg-slate-900/90 backdrop-blur border border-slate-700 p-4 rounded-lg z-[1000] shadow-xl w-48">
<div className="text-xs font-semibold text-white mb-2">Pollution Groups</div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-xs text-slate-300">
<span className="w-3 h-3 rounded-full bg-green-500"></span> Low Risk
                                </div>
<div className="flex items-center gap-2 text-xs text-slate-300">
<span className="w-3 h-3 rounded-full bg-yellow-500"></span> Mid Risk
                                </div>
<div className="flex items-center gap-2 text-xs text-slate-300">
<span className="w-3 h-3 rounded-full bg-red-500"></span> High Risk
                                </div>
</div>
</div>
</div>
</div>

<div className="view-section hidden space-y-6 fade-in" id="view-predict">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-6 rounded-xl col-span-1">
<h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
<iconify-icon icon="solar:upload-linear"></iconify-icon> Data Input
                            </h3>
<div className="border-2 border-dashed border-slate-700 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer bg-slate-900/50" id="dropzone">
<iconify-icon className="text-3xl text-slate-500 mb-2" icon="solar:file-send-linear"></iconify-icon>
<p className="text-xs text-slate-400">Drag &amp; drop CSV or click to upload</p>
</div>
<div className="mt-6 space-y-4">
<div>
<label className="text-xs text-slate-400 block mb-1">PM2.5 Level</label>
<input className="w-full accent-blue-500 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer" id="input-pm25" max="500" min="0" type="range" value="120"/>
<div className="flex justify-between text-[10px] text-slate-500 mt-1"><span>0</span><span id="val-pm25">120</span><span>500</span></div>
</div>
<div>
<label className="text-xs text-slate-400 block mb-1">NO2 Concentration</label>
<input className="w-full accent-blue-500 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer" id="input-no2" max="200" min="0" type="range" value="45"/>
</div>
<button className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded shadow-lg shadow-blue-900/20 transition-all mt-2" onclick="runPrediction()">Run Ensemble Model</button>
</div>
</div>

<div className="glass-panel p-6 rounded-xl col-span-2 relative">

<div className="absolute inset-0 bg-slate-900/80 backdrop-blur z-20 flex flex-col items-center justify-center rounded-xl hidden" id="prediction-loader">
<div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
<p className="text-xs text-blue-400 mt-3 animate-pulse">Running Random Forest &amp; Gradient Boosting...</p>
</div>
<h3 className="text-sm font-semibold text-white mb-4">SHAP Explanation (Local Interpretability)</h3>
<div className="h-64 w-full">
<canvas id="shapChart"></canvas>
</div>
<div className="mt-4 p-3 bg-slate-800/50 rounded border border-slate-700">
<h4 className="text-xs font-bold text-white mb-1">Analysis Result: <span className="text-red-400">High Pollution Group</span></h4>
<p className="text-[10px] text-slate-400">The model indicates a 88% probability of High risk. The dominant factor is PM2.5 (&gt;110), contributing +0.45 to the log-odds.</p>
</div>
</div>
</div>
</div>

<div className="view-section hidden space-y-6 fade-in" id="view-eda">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="glass-panel p-5 rounded-xl">
<h3 className="text-xs font-semibold text-slate-300 mb-4">Feature Correlation Heatmap</h3>
<div className="h-60 flex items-center justify-center bg-slate-900/50 rounded border border-slate-800">

<div className="grid grid-cols-5 gap-1 p-2">

<div className="w-8 h-8 bg-red-500"></div><div className="w-8 h-8 bg-red-300"></div><div className="w-8 h-8 bg-blue-300"></div><div className="w-8 h-8 bg-blue-500"></div><div className="w-8 h-8 bg-red-400"></div>
<div className="w-8 h-8 bg-red-300"></div><div className="w-8 h-8 bg-red-500"></div><div className="w-8 h-8 bg-slate-800"></div><div className="w-8 h-8 bg-blue-400"></div><div className="w-8 h-8 bg-red-200"></div>
<div className="w-8 h-8 bg-blue-300"></div><div className="w-8 h-8 bg-slate-800"></div><div className="w-8 h-8 bg-red-500"></div><div className="w-8 h-8 bg-red-600"></div><div className="w-8 h-8 bg-blue-300"></div>
<div className="w-8 h-8 bg-blue-500"></div><div className="w-8 h-8 bg-blue-400"></div><div className="w-8 h-8 bg-red-600"></div><div className="w-8 h-8 bg-red-500"></div><div className="w-8 h-8 bg-blue-200"></div>
<div className="w-8 h-8 bg-red-400"></div><div className="w-8 h-8 bg-red-200"></div><div className="w-8 h-8 bg-blue-300"></div><div className="w-8 h-8 bg-blue-200"></div><div className="w-8 h-8 bg-red-500"></div>
</div>
</div>
</div>
<div className="glass-panel p-5 rounded-xl">
<h3 className="text-xs font-semibold text-slate-300 mb-4">Pollutant Distribution (Boxplot)</h3>
<div className="h-60 w-full relative">
<canvas id="edaBoxChart"></canvas>
</div>
</div>
</div>
</div>

<div className="view-section hidden space-y-6 fade-in" id="view-models">
<div className="glass-panel p-0 rounded-xl overflow-hidden border border-slate-800">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-900 border-b border-slate-800 text-xs text-slate-400 uppercase tracking-wider">
<th className="p-4 font-medium">Model Architecture</th>
<th className="p-4 font-medium">F1-Macro</th>
<th className="p-4 font-medium">ROC AUC</th>
<th className="p-4 font-medium">Inference Time</th>
<th className="p-4 font-medium">Status</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-slate-800">
<tr className="hover:bg-white/5 transition-colors bg-blue-900/20">
<td className="p-4 text-white font-medium flex items-center gap-2">
<iconify-icon className="text-yellow-500" icon="solar:crown-linear"></iconify-icon>
                                        Voting Ensemble (RF+GB+MLP)
                                    </td>
<td className="p-4 text-green-400">0.9872</td>
<td className="p-4">0.9981</td>
<td className="p-4 text-slate-400">1.0ms</td>
<td className="p-4"><span className="px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 text-[10px] border border-blue-500/30">Deployed</span></td>
</tr>
<tr className="hover:bg-white/5 transition-colors">
<td className="p-4 text-slate-300">Random Forest</td>
<td className="p-4 text-slate-300">0.9820</td>
<td className="p-4">0.9950</td>
<td className="p-4 text-slate-400">0.8ms</td>
<td className="p-4"><span className="px-2 py-1 rounded-full bg-slate-700 text-slate-400 text-[10px]">Archived</span></td>
</tr>
<tr className="hover:bg-white/5 transition-colors">
<td className="p-4 text-slate-300">XGBoost</td>
<td className="p-4 text-slate-300">0.9850</td>
<td className="p-4">0.9970</td>
<td className="p-4 text-slate-400">0.6ms</td>
<td className="p-4"><span className="px-2 py-1 rounded-full bg-slate-700 text-slate-400 text-[10px]">Archived</span></td>
</tr>
<tr className="hover:bg-white/5 transition-colors">
<td className="p-4 text-slate-300">MLP (Neural Net)</td>
<td className="p-4 text-slate-300">0.9750</td>
<td className="p-4">0.9890</td>
<td className="p-4 text-slate-400">0.9ms</td>
<td className="p-4"><span className="px-2 py-1 rounded-full bg-slate-700 text-slate-400 text-[10px]">Archived</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>

<div className="fixed bottom-6 right-6 z-50">
<button className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/40 flex items-center justify-center transition-transform hover:scale-110" onclick="toggleChat()">
<iconify-icon className="text-2xl" icon="solar:chat-round-dots-linear"></iconify-icon>
</button>
<div className="hidden absolute bottom-16 right-0 w-80 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden flex flex-col h-96 animate-fade-in" id="chat-window">
<div className="bg-slate-800 p-3 border-b border-slate-700 flex justify-between items-center">
<span className="text-xs font-semibold text-white flex items-center gap-2"><iconify-icon icon="solar:magic-stick-linear"></iconify-icon> NTCC Assistant</span>
<button className="text-slate-400 hover:text-white" onclick="toggleChat()"><iconify-icon icon="solar:close-circle-linear"></iconify-icon></button>
</div>
<div className="flex-1 p-3 overflow-y-auto space-y-3 bg-slate-900/95" id="chat-messages">
<div className="flex gap-2">
<div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-[10px]">AI</div>
<div className="bg-slate-800 p-2 rounded-lg rounded-tl-none text-xs text-slate-300 max-w-[80%]">
                            Hello Farheen! Ask me about pollution trends or lung risk predictions in Delhi.
                        </div>
</div>
</div>
<div className="p-3 border-t border-slate-700 bg-slate-800">
<div className="flex gap-2">
<input className="flex-1 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-white focus:outline-none focus:border-blue-500" placeholder="Type query..." type="text"/>
<button className="text-blue-500"><iconify-icon icon="solar:plain-linear"></iconify-icon></button>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
