import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // State
        let currentAQI = 142;
        let currentPM25 = 58;
        
        // --- 1. Fetch & Logic ---
        async function fetchLocationData() {
            const pin = document.getElementById('pincodeInput').value;
            const btn = document.querySelector('button');
            const originalText = btn.innerHTML;
            
            // UI Loading State
            btn.innerHTML = `<iconify-icon icon="solar:spinner-linear" class="animate-spin"></iconify-icon> Locate`;
            
            // Simulate Network Delay for realism
            await new Promise(r => setTimeout(r, 1200));

            // Mock Data Logic (Since no backend)
            // If Pin starts with '11' (Delhi), give realistic Bad data. Else Random.
            const isDelhi = pin.startsWith('11');
            
            if(pin.length === 6) {
                // Update Location Name
                document.getElementById('locationName').innerText = isDelhi ? "Delhi NCR (Detected)" : "Location " + pin;
                
                // Generate Mock Values based on Delhi Trends
                // Delhi usually ranges 150-400 in winter
                const newAQI = isDelhi ? Math.floor(Math.random() * (350 - 150) + 150) : Math.floor(Math.random() * (100 - 20) + 20);
                const newPM25 = Math.floor(newAQI / 2.2);
                const newPM10 = Math.floor(newAQI * 1.1);

                updateDashboard(newAQI, newPM25, newPM10);
            } else {
                alert("Please enter a valid 6-digit Pin Code.");
            }
            
            btn.innerHTML = originalText;
        }

        function updateDashboard(aqi, pm25, pm10) {
            currentAQI = aqi;
            currentPM25 = pm25;

            // Update Numbers with counter animation
            animateValue("aqiValue", parseInt(document.getElementById('aqiValue').innerText), aqi, 1000);
            document.getElementById('pm25Val').innerHTML = `${pm25} <span class="text-xs text-zinc-600">µg/m³</span>`;
            document.getElementById('pm10Val').innerHTML = `${pm10} <span class="text-xs text-zinc-600">µg/m³</span>`;
            
            // Update Status & Color Logic
            const statusEl = document.getElementById('aqiStatus');
            const lungPath = document.getElementById('lungPath');
            const mapPulse = document.getElementById('mapPulse');
            const mapRipple = document.getElementById('mapRipple');

            let color = "";
            let status = "";

            if (aqi < 50) {
                color = "#4ade80"; // Green
                status = "Good";
            } else if (aqi < 100) {
                color = "#facc15"; // Yellow
                status = "Moderate";
            } else if (aqi < 200) {
                color = "#fb923c"; // Orange
                status = "Unhealthy";
            } else {
                color = "#ef4444"; // Red
                status = "Hazardous";
            }

            statusEl.innerText = status;
            statusEl.style.color = color;
            lungPath.setAttribute("stroke", color);
            
            // Map Marker Color
            mapPulse.style.backgroundColor = color;
            mapRipple.style.backgroundColor = color;
            if(aqi > 200) {
                mapPulse.classList.add('pulse-danger');
            } else {
                mapPulse.classList.remove('pulse-danger');
            }

            // Recalculate Risk
            calculateRisk();
            // Update Solutions
            updateSolutions(aqi);
        }

        // --- 2. Risk Calculation ---
        function calculateRisk() {
            const age = parseInt(document.getElementById('ageInput').value);
            const hours = parseInt(document.getElementById('hoursInput').value);
            
            document.getElementById('ageValDisplay').innerText = age + " yrs";
            document.getElementById('hoursValDisplay').innerText = hours + " hrs";

            // Heuristic Formula: (PM2.5 / 10) * Hours * (Age Factor)
            // Age Factor: Kids(5-15) and Elderly(60+) are higher risk
            let ageFactor = 1;
            if (age < 15 || age > 60) ageFactor = 1.5;

            let riskScore = (currentPM25 / 10) * hours * ageFactor;
            // Normalize to 0-100% roughly
            let riskPercent = Math.min(Math.floor(riskScore), 100);

            const riskEl = document.getElementById('calcScore');
            const labelEl = document.getElementById('riskLabel');
            const lungCont = document.getElementById('lungContainer');

            riskEl.innerText = `${riskPercent}%`;

            if (riskPercent < 20) {
                riskEl.className = "text-sm font-medium text-emerald-400";
                labelEl.innerText = "Low Risk";
                labelEl.className = "text-2xl font-medium text-emerald-400 tracking-tight";
                lungCont.style.filter = "drop-shadow(0 0 10px rgba(74, 222, 128, 0.2))";
            } else if (riskPercent < 50) {
                riskEl.className = "text-sm font-medium text-yellow-400";
                labelEl.innerText = "Moderate Risk";
                labelEl.className = "text-2xl font-medium text-yellow-400 tracking-tight";
                lungCont.style.filter = "drop-shadow(0 0 15px rgba(250, 204, 21, 0.3))";
            } else {
                riskEl.className = "text-sm font-medium text-red-400";
                labelEl.innerText = "High Risk";
                labelEl.className = "text-2xl font-medium text-red-400 tracking-tight";
                lungCont.style.filter = "drop-shadow(0 0 20px rgba(239, 68, 68, 0.5)) grayscale(100%) sepia(100%) hue-rotate(-50deg) saturate(400%)";
            }
        }

        // --- 3. Simulator ---
        function runSimulation() {
            const emissionRed = parseInt(document.getElementById('simEmission').value);
            const greenInc = parseInt(document.getElementById('simGreen').value);

            document.getElementById('emissionDisplay').innerText = `-${emissionRed}%`;
            document.getElementById('greenDisplay').innerText = `+${greenInc}%`;

            // Logic: Emissions reduce PM directly. Green cover reduces PM slowly.
            // Impact score calculation
            const impact = Math.floor(currentAQI * (emissionRed/100)) + Math.floor(currentAQI * (greenInc/150));
            
            document.getElementById('simResult').innerHTML = `<span class="text-emerald-400">-${impact}</span> <span class="text-sm text-zinc-500">AQI pts</span>`;
        }

        // --- 4. Solutions Logic ---
        function updateSolutions(aqi) {
            const list = document.getElementById('solutionsList');
            let html = '';

            if(aqi > 200) {
                html += solItem("mask-happly-linear", "Mandatory N95/N99 Mask", "Air is hazardous. Do not step out without protection.", "text-red-400");
                html += solItem("forbidden-circle-linear", "Avoid Outdoor Exercise", "Deep breathing now inhales toxic metals.", "text-red-400");
                html += solItem("airbuds-case-open-linear", "Use Air Purifiers", "Keep indoor PM2.5 below 25.", "text-zinc-200");
            } else if (aqi > 100) {
                html += solItem("mask-happly-linear", "Wear Mask for Sensitive Groups", "Asthma patients should stay indoors.", "text-orange-400");
                html += solItem("window-frame-linear", "Close Windows", "Ventilate only between 2 PM - 4 PM.", "text-zinc-200");
            } else {
                html += solItem("walking-round-linear", "Good for Walks", "Enjoy the outdoors, air quality is optimal.", "text-emerald-400");
                html += solItem("window-frame-linear", "Ventilate Home", "Open windows to clear indoor CO2.", "text-zinc-200");
            }
            list.innerHTML = html;
        }

        function solItem(icon, title, desc, colorClass) {
            return `
            <div class="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/30 border border-zinc-800/50">
                <div class="${colorClass} mt-0.5"><iconify-icon icon="solar:${icon}"></iconify-icon></div>
                <div>
                    <p class="text-sm text-zinc-200">${title}</p>
                    <p class="text-xs text-zinc-500">${desc}</p>
                </div>
            </div>`;
        }

        // Utilities
        function toggleExplain() {
            const el = document.getElementById('aiExplain');
            el.classList.toggle('hidden');
        }

        function animateValue(id, start, end, duration) {
            if (start === end) return;
            const range = end - start;
            let current = start;
            const increment = end > start ? 1 : -1;
            const stepTime = Math.abs(Math.floor(duration / range));
            const obj = document.getElementById(id);
            const timer = setInterval(function() {
                current += increment;
                obj.innerHTML = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, stepTime > 0 ? stepTime : 10);
        }

        // Init
        calculateRisk();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-grid z-0 pointer-events-none"></div>

<div className="fixed top-0 left-0 w-96 h-96 bg-emerald-900/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 z-0"></div>
<div className="fixed bottom-0 right-0 w-96 h-96 bg-teal-900/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 z-0"></div>
<main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-16 flex flex-col gap-10">

<header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div>
<div className="flex items-center gap-3 mb-1">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h1 className="text-2xl font-medium tracking-tight text-white">LungGuard AI</h1>
</div>
<p className="text-sm text-zinc-500 tracking-tight">Delhi’s Personal Breathing Guardian</p>
</div>

<div className="w-full md:w-auto glass rounded-xl p-1.5 flex items-center gap-2 group focus-within:border-emerald-500/50 transition-colors">
<div className="pl-3 text-zinc-500 group-focus-within:text-emerald-400 transition-colors">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<input className="bg-transparent border-none outline-none text-sm text-white w-full md:w-64 placeholder-zinc-600 font-light h-10" id="pincodeInput" maxlength="6" placeholder="Enter Delhi Pin Code (e.g., 110001)" type="text"/>
<button className="bg-zinc-100 hover:bg-white text-black px-4 h-9 rounded-lg text-xs font-medium transition-colors flex items-center gap-2" onclick="fetchLocationData()">
<span>Locate</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</header>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-8 glass-highlight rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
<div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/30 px-3 py-1 rounded-full border border-emerald-900">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Live Analysis
                    </div>
</div>
<div className="flex flex-col gap-1 z-10 relative">
<span className="text-zinc-400 text-sm font-medium tracking-wide uppercase" id="locationName">New Delhi</span>
<div className="flex items-baseline gap-4 mt-2">
<h2 className="text-7xl lg:text-8xl font-medium text-white tracking-tighter" id="aqiValue">142</h2>
<div className="flex flex-col">
<span className="text-xl text-yellow-500 font-medium" id="aqiStatus">Moderate</span>
<span className="text-xs text-zinc-500">US AQI Standard</span>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mt-10 max-w-md">
<div>
<p className="text-xs text-zinc-500 mb-1">PM2.5</p>
<p className="text-xl font-normal text-white" id="pm25Val">58 <span className="text-xs text-zinc-600">µg/m³</span></p>
</div>
<div>
<p className="text-xs text-zinc-500 mb-1">PM10</p>
<p className="text-xl font-normal text-white" id="pm10Val">112 <span className="text-xs text-zinc-600">µg/m³</span></p>
</div>
<div>
<p className="text-xs text-zinc-500 mb-1">Humidity</p>
<p className="text-xl font-normal text-white" id="humidityVal">45<span className="text-xs text-zinc-600">%</span></p>
</div>
</div>
</div>

<div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-t from-yellow-500/10 to-transparent blur-3xl rounded-full"></div>
</div>

<div className="lg:col-span-4 glass rounded-2xl p-8 flex flex-col items-center justify-center relative min-h-[300px]">
<h3 className="absolute top-6 left-6 text-sm font-medium text-zinc-400">Biological Impact</h3>
<div className="relative animate-breathe transition-all duration-700" id="lungContainer">

<svg fill="none" height="140" viewbox="0 0 24 24" width="140" xmlns="http://www.w3.org/2000/svg">
<path d="M12 18C12 18 13.5 19.5 16 19.5C18.5 19.5 20.5 17.5 20.5 15C20.5 12 18 8 18 8C18 8 16.5 4 14 4C12.5 4 12 5 12 5M12 18C12 18 10.5 19.5 8 19.5C5.5 19.5 3.5 17.5 3.5 15C3.5 12 6 8 6 8C6 8 7.5 4 10 4C11.5 4 12 5 12 5M12 18V5" id="lungPath" stroke="#4ade80" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<circle className="opacity-40" cx="7" cy="14" fill="#4ade80" r="1.5"></circle>
<circle className="opacity-30" cx="17" cy="12" fill="#4ade80" r="2"></circle>
</svg>
</div>
<div className="mt-8 text-center">
<div className="text-2xl font-medium text-white tracking-tight" id="riskLabel">Low Risk</div>
<p className="text-xs text-zinc-500 mt-1 max-w-[200px]">Lung tissue healthy. Cilia functioning normally.</p>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="glass rounded-2xl p-6 flex flex-col gap-4">
<div className="flex justify-between items-center">
<h3 className="text-sm font-medium text-white flex items-center gap-2">
<iconify-icon className="text-purple-400" icon="solar:magic-stick-3-linear"></iconify-icon>
                        AI Forecast
                    </h3>
<span className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded border border-zinc-700">Next 24h</span>
</div>
<div className="flex-1 flex flex-col justify-center gap-4">
<div className="space-y-3">
<div className="flex justify-between text-xs">
<span className="text-zinc-400">Prediction Trend</span>
<span className="text-red-400 font-medium">Rising (+12%)</span>
</div>

<div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden flex">
<div className="h-full bg-emerald-500 w-[40%]"></div>
<div className="h-full bg-yellow-500 w-[30%]"></div>
<div className="h-full bg-red-500 w-[30%] animate-pulse"></div>
</div>
</div>
<button className="mt-2 w-full py-2.5 rounded-lg border border-zinc-700 hover:bg-zinc-800 text-xs text-zinc-300 transition-colors flex items-center justify-center gap-2" onclick="toggleExplain()">
<iconify-icon icon="solar:info-circle-linear"></iconify-icon>
                        Why this prediction?
                    </button>
<div className="hidden text-xs text-zinc-500 bg-zinc-900/50 p-3 rounded-lg border border-zinc-800/50 leading-relaxed" id="aiExplain">
<span className="text-zinc-300 font-medium">Model Logic:</span> High PM2.5 retention detected due to low wind speed (4km/h) and temperature drop. Dataset trend matches 2024 winter spikes.
                    </div>
</div>
</div>

<div className="glass rounded-2xl p-6">
<h3 className="text-sm font-medium text-white mb-6 flex items-center gap-2">
<iconify-icon className="text-red-400" icon="solar:heart-pulse-linear"></iconify-icon>
                    Personal Risk Score
                </h3>
<div className="space-y-6">

<div className="space-y-2">
<div className="flex justify-between text-xs">
<span className="text-zinc-400">Age Group</span>
<span className="text-white" id="ageValDisplay">25 yrs</span>
</div>
<input className="accent-emerald-500" id="ageInput" max="80" min="5" oninput="calculateRisk()" type="range" value="25"/>
</div>

<div className="space-y-2">
<div className="flex justify-between text-xs">
<span className="text-zinc-400">Outdoor Hours</span>
<span className="text-white" id="hoursValDisplay">2 hrs</span>
</div>
<input className="accent-emerald-500" id="hoursInput" max="12" min="0" oninput="calculateRisk()" type="range" value="2"/>
</div>

<div className="flex items-center justify-between bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
<span className="text-xs text-zinc-400">Calculated Risk</span>
<span className="text-sm font-medium text-emerald-400" id="calcScore">12% (Safe)</span>
</div>
</div>
</div>

<div className="glass rounded-2xl p-6 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50"></div>
<h3 className="text-sm font-medium text-white mb-6 flex items-center gap-2">
<iconify-icon className="text-blue-400" icon="solar:settings-linear"></iconify-icon>
                    Policy Simulator
                </h3>
<div className="space-y-6">
<div className="space-y-2">
<div className="flex justify-between text-xs">
<span className="text-zinc-400">Reduce Industrial Emissions</span>
<span className="text-blue-400" id="emissionDisplay">0%</span>
</div>
<input id="simEmission" max="50" min="0" oninput="runSimulation()" type="range" value="0"/>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs">
<span className="text-zinc-400">Increase Green Cover</span>
<span className="text-emerald-400" id="greenDisplay">0%</span>
</div>
<input id="simGreen" max="30" min="0" oninput="runSimulation()" type="range" value="0"/>
</div>
<div className="mt-4 pt-4 border-t border-zinc-800 text-center">
<p className="text-xs text-zinc-500 mb-1">Projected AQI Improvement</p>
<p className="text-2xl font-medium text-white" id="simResult">-0 pts</p>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="glass rounded-2xl p-1 relative h-64 lg:h-auto overflow-hidden group">
<div className="absolute inset-0 bg-[#111]">

<svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="#555" strokeWidth="0.5"></path>
</pattern>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
<div className="relative">
<div className="w-4 h-4 rounded-full bg-yellow-500 z-10 relative" id="mapPulse"></div>
<div className="absolute inset-0 w-4 h-4 rounded-full bg-yellow-500 animate-ping opacity-75" id="mapRipple"></div>
</div>
<span className="text-[10px] tracking-widest text-zinc-400 uppercase bg-black/80 px-2 py-0.5 rounded backdrop-blur-sm">Delhi NCR</span>
</div>

<div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-red-500 rounded-full opacity-60"></div>
<div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-orange-500 rounded-full opacity-60"></div>
</div>
<div className="absolute bottom-4 left-4">
<h3 className="text-sm font-medium text-white shadow-black drop-shadow-md">Pollution Heatmap</h3>
</div>
</div>

<div className="glass rounded-2xl p-6 flex flex-col">
<h3 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-teal-400" icon="solar:clipboard-check-linear"></iconify-icon>
                    Actionable Solutions
                </h3>
<div className="space-y-3 flex-1" id="solutionsList">

<div className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/30 border border-zinc-800/50">
<div className="text-zinc-400 mt-0.5"><iconify-icon icon="solar:mask-happly-linear"></iconify-icon></div>
<div>
<p className="text-sm text-zinc-200">Wear N95 Mask Outdoors</p>
<p className="text-xs text-zinc-500">Particulate matter is high enough to penetrate deep lung tissue.</p>
</div>
</div>
<div className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/30 border border-zinc-800/50">
<div className="text-zinc-400 mt-0.5"><iconify-icon icon="solar:home-linear"></iconify-icon></div>
<div>
<p className="text-sm text-zinc-200">Run Air Purifier (HEPA)</p>
<p className="text-xs text-zinc-500">Keep windows closed. Indoor AQI can be 50% better.</p>
</div>
</div>
<div className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/30 border border-zinc-800/50">
<div className="text-zinc-400 mt-0.5"><iconify-icon icon="solar:cup-hot-linear"></iconify-icon></div>
<div>
<p className="text-sm text-zinc-200">Detox Tea</p>
<p className="text-xs text-zinc-500">Ginger and Tulsi tea helps clear respiratory inflammation.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-zinc-900 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2 opacity-50">
<iconify-icon className="text-emerald-500" icon="solar:leaf-bold"></iconify-icon>
<span className="text-xs font-medium text-zinc-500">LungGuard AI v1.0</span>
</div>
<p className="text-xs text-zinc-600 font-mono tracking-tight">Built by Farheen – NTCC Pollution Project 2026</p>
</footer>
</main>


    </>
  );
}
