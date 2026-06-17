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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
tago: {
50: '#f0f9ff',
100: '#e0f2fe',
500: '#0ea5e9',
600: '#009de0', // TagoIO Blue
700: '#0284c7',
900: '#0c4a6e',
}
}
}
}
}



        lucide.createIcons();

        let state = {
            basePrice: 850,
            regionMultiplier: 1.0,
            regionName: "North America",
            sensorCost: 850,
            sensorCount: 5000,
            mqttCost: 0,
            loraCost: 0,
            domainCount: 0,
            domainPrice: 50
        };

        const totalEl = document.getElementById('total-price');
        const baseCostDisplay = document.getElementById('base-cost-display');
        const regionLabel = document.getElementById('region-label');
        const sensorCostDisplay = document.getElementById('sensor-cost-display');
        const sensorCountLabel = document.getElementById('sensor-count-label');
        
        const connectivityRow = document.getElementById('connectivity-row');
        const connectivityCostDisplay = document.getElementById('connectivity-cost-display');
        const connectivityDetails = document.getElementById('connectivity-details');
        
        const addonsRow = document.getElementById('addons-row');
        const addonCostDisplay = document.getElementById('addon-cost-display');
        const addonDetails = document.getElementById('addon-details');
        
        const domainCountEl = document.getElementById('domain-count');

        function updateDisplay() {
            // Calculate Base with Region Multiplier
            const adjustedBase = state.basePrice * state.regionMultiplier;
            
            // Calculate Totals
            const connectivityTotal = state.mqttCost + state.loraCost;
            const addonsTotal = state.domainCount * state.domainPrice;
            const total = adjustedBase + state.sensorCost + connectivityTotal + addonsTotal;

            // Update DOM
            totalEl.innerText = total.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0});
            baseCostDisplay.innerText = adjustedBase.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
            regionLabel.innerText = state.regionName;
            
            sensorCostDisplay.innerText = state.sensorCost.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
            sensorCountLabel.innerText = state.sensorCount.toLocaleString() + ' devices';

            // Connectivity Section
            if (connectivityTotal > 0) {
                connectivityRow.classList.remove('hidden');
                connectivityCostDisplay.innerText = connectivityTotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                
                let details = [];
                if(state.mqttCost > 0) details.push("Managed Broker");
                if(state.loraCost > 0) details.push("LNS Middleware");
                connectivityDetails.innerText = details.join(" + ");
            } else {
                connectivityRow.classList.add('hidden');
            }

            // Addons Section
            if (addonsTotal > 0) {
                addonsRow.classList.remove('hidden');
                addonCostDisplay.innerText = addonsTotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                addonDetails.innerText = `${state.domainCount} Custom Domain${state.domainCount > 1 ? 's' : ''}`;
            } else {
                addonsRow.classList.add('hidden');
            }
        }

        function setSensors(count, cost) {
            state.sensorCount = count;
            state.sensorCost = cost;
            
            const buttons = document.querySelectorAll('.sensor-btn');
            buttons.forEach(btn => {
                // Reset styling
                btn.className = 'sensor-btn p-3 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:border-tago-500 hover:text-tago-600 transition-all focus:outline-none flex flex-col items-center justify-center gap-1 h-20';
                
                const costSpan = btn.querySelector('span:last-child');
                if(costSpan) {
                    costSpan.className = 'text-[10px] text-gray-400 font-normal';
                }

                if(btn.innerText.includes(count.toLocaleString())) {
                    // Active styling
                    btn.className = 'sensor-btn active-sensor p-3 border border-tago-600 bg-tago-50 text-tago-700 rounded-lg text-sm font-medium transition-all focus:outline-none ring-1 ring-tago-500 flex flex-col items-center justify-center gap-1 h-20';
                    if(costSpan) {
                        costSpan.className = 'text-[10px] text-tago-600/70 font-normal';
                    }
                }
            });
            updateDisplay();
        }

        function updateRegion() {
            const select = document.getElementById('region-select');
            state.regionMultiplier = parseFloat(select.value);
            state.regionName = select.options[select.selectedIndex].text.split(' - ')[0]; // Extract Name part
            updateDisplay();
        }

        function updateConnectivity() {
            const mqttType = document.querySelector('input[name="mqtt_type"]:checked').value;
            state.mqttCost = (mqttType === 'managed') ? 300 : 0;

            const loraChecked = document.getElementById('lora-toggle').checked;
            state.loraCost = loraChecked ? 250 : 0;

            updateDisplay();
        }

        function updateDomains(change) {
            const newCount = state.domainCount + change;
            if(newCount >= 0) {
                state.domainCount = newCount;
                domainCountEl.innerText = newCount;
                updateDisplay();
            }
        }

        function selectTemplate(element) {
            // Visual selection logic only
            const cards = document.querySelectorAll('.template-card');
            cards.forEach(card => {
                card.className = 'template-card group relative p-5 bg-white border border-gray-200 rounded-xl text-left hover:border-tago-300 transition-all shadow-sm';
                const checkIcon = card.querySelector('.absolute i');
                checkIcon.setAttribute('data-lucide', 'circle');
                checkIcon.parentElement.className = 'absolute top-4 right-4 text-transparent group-hover:text-gray-200 transition-colors';
                
                // Reset icon background
                const iconContainer = card.querySelector('div.p-2');
                // Keep the color specific classes (blue-50 vs green-50 etc) but ensure logic preserves them? 
                // Simplification: We won't stripping inner classes, just the container.
            });

            element.className = 'template-card group relative p-5 bg-white border-2 border-tago-600 ring-2 ring-tago-50 rounded-xl text-left transition-all shadow-sm';
            const activeCheck = element.querySelector('.absolute i');
            activeCheck.setAttribute('data-lucide', 'check-circle-2');
            activeCheck.parentElement.className = 'absolute top-4 right-4 text-tago-600';
            
            lucide.createIcons();
        }

        // Initialize
        updateDisplay();
    
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
      

<nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">

<div className="flex items-center select-none">
<span className="text-2xl font-bold tracking-tighter text-black mr-1">Tago</span>
<div className="bg-black text-white text-[13px] font-bold px-1.5 py-0.5 rounded-[4px] leading-none tracking-wider flex items-center justify-center h-6">
                        IO
                    </div>
</div>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
<a className="hover:text-tago-600 transition-colors" href="#">Platform</a>
<a className="hover:text-tago-600 transition-colors" href="#">Enterprise</a>
<a className="hover:text-tago-600 transition-colors" href="#">Partners</a>
<a className="text-tago-600" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-gray-500 hover:text-gray-900" href="#">Log in</a>
<a className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-black transition-all shadow-sm" href="#">Get Started</a>
</div>
</div>
</nav>

<main className="max-w-7xl mx-auto px-6 py-12 md:py-16">

<div className="max-w-4xl mb-12">
<h1 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4">
                Dedicated Instance Estimator
            </h1>
<p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
                Calculate the cost of your private, single-tenant IoT environment. Your instance runs on fully managed cloud infrastructure featuring dedicated databases, compute clusters, and scalable storage.
            </p>

<div className="mt-6 flex flex-wrap gap-2">
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
<i className="w-3 h-3 mr-1.5 text-tago-600" data-lucide="database"></i> Dedicated SQL
                </span>
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
<i className="w-3 h-3 mr-1.5 text-tago-600" data-lucide="server"></i> Container Clusters
                </span>
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
<i className="w-3 h-3 mr-1.5 text-tago-600" data-lucide="zap"></i> Serverless Compute
                </span>
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
<i className="w-3 h-3 mr-1.5 text-tago-600" data-lucide="globe"></i> API Gateway
                </span>
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
<i className="w-3 h-3 mr-1.5 text-tago-600" data-lucide="hard-drive"></i> Object Storage
                </span>
</div>
</div>
<div className="flex flex-col lg:flex-row gap-12">

<div className="flex-1 space-y-12">

<section>
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-medium text-gray-900 tracking-tight">1. Use Case Profile</h2>
<span className="text-sm text-gray-400">Optimizes default settings</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<button className="template-card group relative p-5 bg-white border-2 border-tago-600 ring-2 ring-tago-50 rounded-xl text-left transition-all shadow-sm" onclick="selectTemplate(this)">
<div className="absolute top-4 right-4 text-tago-600">
<i className="w-5 h-5 fill-tago-50" data-lucide="check-circle-2"></i>
</div>
<div className="flex items-center gap-3 mb-2">
<div className="p-2 rounded-lg bg-blue-50 text-tago-600">
<i className="w-4 h-4" data-lucide="truck"></i>
</div>
<h3 className="font-medium text-gray-900">Logistics</h3>
</div>
<p className="text-xs text-gray-500">Optimized for heavy GPS data streams.</p>
</button>
<button className="template-card group relative p-5 bg-white border border-gray-200 rounded-xl text-left hover:border-tago-300 transition-all shadow-sm" onclick="selectTemplate(this)">
<div className="absolute top-4 right-4 text-transparent group-hover:text-gray-200 transition-colors">
<i className="w-5 h-5" data-lucide="circle"></i>
</div>
<div className="flex items-center gap-3 mb-2">
<div className="p-2 rounded-lg bg-green-50 text-green-600">
<i className="w-4 h-4" data-lucide="sprout"></i>
</div>
<h3 className="font-medium text-gray-900">Agriculture</h3>
</div>
<p className="text-xs text-gray-500">LoRaWAN &amp; periodic sensor uplinks.</p>
</button>
<button className="template-card group relative p-5 bg-white border border-gray-200 rounded-xl text-left hover:border-tago-300 transition-all shadow-sm" onclick="selectTemplate(this)">
<div className="absolute top-4 right-4 text-transparent group-hover:text-gray-200 transition-colors">
<i className="w-5 h-5" data-lucide="circle"></i>
</div>
<div className="flex items-center gap-3 mb-2">
<div className="p-2 rounded-lg bg-yellow-50 text-yellow-600">
<i className="w-4 h-4" data-lucide="zap"></i>
</div>
<h3 className="font-medium text-gray-900">Energy</h3>
</div>
<p className="text-xs text-gray-500">High-frequency metering &amp; analytics.</p>
</button>
<button className="template-card group relative p-5 bg-white border border-gray-200 rounded-xl text-left hover:border-tago-300 transition-all shadow-sm" onclick="selectTemplate(this)">
<div className="absolute top-4 right-4 text-transparent group-hover:text-gray-200 transition-colors">
<i className="w-5 h-5" data-lucide="circle"></i>
</div>
<div className="flex items-center gap-3 mb-2">
<div className="p-2 rounded-lg bg-purple-50 text-purple-600">
<i className="w-4 h-4" data-lucide="building-2"></i>
</div>
<h3 className="font-medium text-gray-900">Smart City</h3>
</div>
<p className="text-xs text-gray-500">Diverse payload types &amp; integrations.</p>
</button>
</div>
</section>

<section>
<h2 className="text-xl font-medium text-gray-900 tracking-tight mb-6">2. Scale &amp; Region</h2>
<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-8">

<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Deployment Region</label>
<div className="relative group">
<select className="w-full appearance-none bg-white border border-gray-200 text-gray-700 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-tago-500 focus:border-transparent cursor-pointer hover:border-gray-300 transition-colors" id="region-select" onchange="updateRegion()">
<option value="1.0">North America (East) - Base Price</option>
<option value="1.0">North America (Central) - Base Price</option>
<option value="1.15">Europe (Frankfurt) - +15%</option>
<option value="1.15">Europe (Ireland) - +15%</option>
<option value="1.30">South America (São Paulo) - +30%</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400 group-hover:text-gray-600">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>
</div>
<p className="mt-2 text-xs text-gray-400">Infrastructure costs vary by geographic region.</p>
</div>

<div>
<div className="flex justify-between items-center mb-3">
<label className="text-sm font-medium text-gray-700">Device Capacity</label>
<span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">Includes Unlimited Users</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<button className="sensor-btn p-3 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:border-tago-500 hover:text-tago-600 transition-all focus:outline-none flex flex-col items-center justify-center gap-1 h-20" onclick="setSensors(1000, 450)">
<span>1,000</span>
<span className="text-[10px] text-gray-400 font-normal">($0.45/dev)</span>
</button>
<button className="sensor-btn active-sensor p-3 border border-tago-600 bg-tago-50 text-tago-700 rounded-lg text-sm font-medium transition-all focus:outline-none ring-1 ring-tago-500 flex flex-col items-center justify-center gap-1 h-20" onclick="setSensors(5000, 850)">
<span>5,000</span>
<span className="text-[10px] text-tago-600/70 font-normal">($0.17/dev)</span>
</button>
<button className="sensor-btn p-3 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:border-tago-500 hover:text-tago-600 transition-all focus:outline-none flex flex-col items-center justify-center gap-1 h-20" onclick="setSensors(10000, 1500)">
<span>10,000</span>
<span className="text-[10px] text-gray-400 font-normal">($0.15/dev)</span>
</button>
<button className="sensor-btn p-3 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:border-tago-500 hover:text-tago-600 transition-all focus:outline-none flex flex-col items-center justify-center gap-1 h-20" onclick="setSensors(25000, 2800)">
<span>25,000+</span>
<span className="text-[10px] text-gray-400 font-normal">($0.11/dev)</span>
</button>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-medium text-gray-900 tracking-tight">3. Connectivity &amp; Middleware</h2>
<span className="text-sm text-gray-400">Integration setup</span>
</div>
<div className="space-y-6">

<div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
<div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-gray-500" data-lucide="network"></i>
<span className="text-sm font-medium text-gray-900">MQTT Broker Strategy</span>
</div>
</div>
<div className="p-4 grid md:grid-cols-2 gap-4">
<label className="relative cursor-pointer group">
<input checked="" className="custom-radio peer sr-only" name="mqtt_type" onchange="updateConnectivity()" type="radio" value="external"/>
<div className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all h-full">
<div className="flex justify-between items-start mb-2">
<span className="font-medium text-gray-900 text-sm">External Broker</span>
<div className="radio-indicator w-4 h-4 rounded-full border border-gray-300 bg-white"></div>
</div>
<p className="text-xs text-gray-500 leading-relaxed">
                                            Bring your own broker (HiveMQ, Mosquitto, etc). No extra cost on TagoIO side.
                                        </p>
<div className="mt-3 text-sm font-medium text-gray-900">Included</div>
</div>
</label>
<label className="relative cursor-pointer group">
<input className="custom-radio peer sr-only" name="mqtt_type" onchange="updateConnectivity()" type="radio" value="managed"/>
<div className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all h-full">
<div className="flex justify-between items-start mb-2">
<span className="font-medium text-gray-900 text-sm">Managed Broker</span>
<div className="radio-indicator w-4 h-4 rounded-full border border-gray-300 bg-white"></div>
</div>
<p className="text-xs text-gray-500 leading-relaxed">
                                            We deploy and manage a scalable MQTT broker within your dedicated instance.
                                        </p>
<div className="mt-3 text-sm font-medium text-gray-900">+$300<span className="text-gray-400 font-normal">/mo</span></div>
</div>
</label>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<h3 className="text-sm font-medium text-gray-900">LoRaWAN Network Server Integration</h3>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-orange-100 text-orange-700">Optional</span>
</div>
<p className="text-xs text-gray-500 leading-relaxed max-w-lg">
                                    Required if connecting via TTI/TTN, Senet, Sigfox, or Loriot. Deploys a dedicated middleware listener for payload normalization.
                                </p>
</div>
<div className="flex items-center gap-4">
<span className="text-sm font-medium text-gray-900">+$250<span className="text-gray-400 font-normal">/mo</span></span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" id="lora-toggle" onchange="updateConnectivity()" type="checkbox"/>
<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tago-600"></div>
</label>
</div>
</div>
</div>
</section>

<section>
<h2 className="text-xl font-medium text-gray-900 tracking-tight mb-6">4. Platform Add-ons</h2>
<div className="space-y-4">

<div className="p-5 bg-white border border-gray-200 rounded-xl flex items-center justify-between">
<div className="flex-1">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-gray-900">Custom Domains</span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-600">$50/each</span>
</div>
<p className="text-xs text-gray-500 mt-1 pr-4">
                                    Use your own URLs for API, Admin Panel, Middleware, or published Applications.
                                </p>
</div>
<div className="flex items-center border border-gray-200 rounded-lg overflow-hidden h-9">
<button className="w-9 h-full flex items-center justify-center bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors border-r border-gray-200" onclick="updateDomains(-1)">
<i className="w-3 h-3" data-lucide="minus"></i>
</button>
<div className="w-10 h-full flex items-center justify-center bg-white text-sm font-medium text-gray-900" id="domain-count">
                                    0
                                </div>
<button className="w-9 h-full flex items-center justify-center bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors border-l border-gray-200" onclick="updateDomains(1)">
<i className="w-3 h-3" data-lucide="plus"></i>
</button>
</div>
</div>

<div className="p-5 bg-blue-50/50 border border-blue-100 rounded-xl flex gap-4">
<div className="text-tago-600 mt-0.5">
<i className="w-5 h-5" data-lucide="info"></i>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 mb-1">Email &amp; SMS Whitelabeling</h4>
<p className="text-xs text-gray-600 leading-relaxed">
                                    All communications are white-labeled by default. You simply configure your own providers (Twilio, SendGrid, Mailgun, etc.) in the admin panel to send messages from your domain.
                                </p>
</div>
</div>
</div>
</section>
</div>

<div className="lg:w-96 flex-shrink-0">
<div className="sticky top-24 space-y-6">
<div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
<div className="p-6 bg-gray-900 text-white relative overflow-hidden">

<div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white/5 blur-2xl"></div>
<h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider">Estimated Monthly Cost</h3>
<div className="mt-2 flex items-baseline">
<span className="text-4xl font-semibold tracking-tight">$<span className="price-transition" id="total-price">1,700</span></span>
<span className="ml-1 text-gray-400">/ month</span>
</div>
</div>
<div className="p-6 space-y-4">

<div className="flex justify-between text-sm items-center">
<div className="flex flex-col">
<span className="text-gray-500">Infrastructure Base</span>
<span className="text-[10px] text-gray-400" id="region-label">North America</span>
</div>
<span className="font-medium text-gray-900">$<span id="base-cost-display">850.00</span></span>
</div>
<div className="flex justify-between text-sm items-center">
<div className="flex flex-col">
<span className="text-gray-500">Device Capacity</span>
<span className="text-[10px] text-gray-400" id="sensor-count-label">5,000 devices</span>
</div>
<span className="font-medium text-gray-900">$<span id="sensor-cost-display">850.00</span></span>
</div>
<div className="hidden" id="connectivity-row">
<div className="h-px bg-gray-100 my-2"></div>
<div className="flex justify-between text-sm items-center">
<span className="text-gray-500">Connectivity Layers</span>
<span className="font-medium text-gray-900">$<span id="connectivity-cost-display">0.00</span></span>
</div>
<div className="text-[10px] text-gray-400 text-right mt-1" id="connectivity-details"></div>
</div>
<div className="hidden" id="addons-row">
<div className="h-px bg-gray-100 my-2"></div>
<div className="flex justify-between text-sm items-center">
<span className="text-gray-500">Add-ons</span>
<span className="font-medium text-gray-900">$<span id="addon-cost-display">0.00</span></span>
</div>
<div className="text-[10px] text-gray-400 text-right mt-1" id="addon-details"></div>
</div>
<div className="h-px bg-gray-100 my-2"></div>
<div className="flex justify-between text-sm items-center">
<span className="text-xs text-gray-400">Data Retention</span>
<span className="text-xs font-medium text-gray-500">9 Years Included</span>
</div>
</div>
<div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
<button className="w-full bg-gray-900 hover:bg-black text-white font-medium py-3 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2">
                                Request Quote
                                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<p className="text-center text-[11px] text-gray-400 mt-3">
                                Estimates subject to final volume agreements.
                            </p>
</div>
</div>
</div>
</div>
</div>
</main>



    </>
  );
}
