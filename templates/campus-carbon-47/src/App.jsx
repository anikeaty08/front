import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // ---------- Data ----------
      const layerParam = new URLSearchParams(location.search).get('layer') || 'energy';
      const buildings = [
        { id: 'bldg-eng', key: 'Engineering Block', kwh: 1200000, co2: 460, actions: ['Retrofit LEDs', 'Optimize HVAC schedules', 'Install 300 kW solar'], x: 26, y: 36 },
        { id: 'bldg-lib', key: 'Central Library', kwh: 850000, co2: 280, actions: ['Daylight sensors', 'Add 120 kW solar', 'Power down idle stacks'], x: 49, y: 58 },
        { id: 'bldg-gym', key: 'Sports Complex', kwh: 420000, co2: 160, actions: ['VFDs on fans', 'Pool cover to reduce heat loss', 'Solar thermal pilot'], x: 72, y: 27 },
        { id: 'bldg-sci', key: 'Science Labs', kwh: 1500000, co2: 560, actions: ['Fume hood sash policy', 'Heat recovery on AHUs', 'Install 500 kW solar'], x: 72, y: 67 },
        { id: 'bldg-admin', key: 'Admin Block', kwh: 300000, co2: 110, actions: ['Smart plugs', 'Work-from-home rotation', 'Plant shade trees'], x: 35, y: 78 }
      ];

      // Alternative layers (mock intensities)
      const layerScales = {
        energy: b => b.co2,
        transport: b => ({ 'bldg-eng': 90, 'bldg-lib': 60, 'bldg-gym': 40, 'bldg-sci': 110, 'bldg-admin': 20 }[b.id]),
        waste: b => ({ 'bldg-eng': 35, 'bldg-lib': 25, 'bldg-gym': 20, 'bldg-sci': 45, 'bldg-admin': 15 }[b.id]),
        events: b => ({ 'bldg-eng': 20, 'bldg-lib': 70, 'bldg-gym': 95, 'bldg-sci': 30, 'bldg-admin': 10 }[b.id])
      };

      let campusAvg = buildings.reduce((a,b)=>a+b.co2,0)/buildings.length;

      // ---------- Helpers ----------
      const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
      function lerpColor(a, b, t){
        const ar=parseInt(a.substr(1,2),16), ag=parseInt(a.substr(3,2),16), ab=parseInt(a.substr(5,2),16);
        const br=parseInt(b.substr(1,2),16), bg=parseInt(b.substr(3,2),16), bb=parseInt(b.substr(5,2),16);
        const rr=Math.round(ar+(br-ar)*t), rg=Math.round(ag+(bg-ag)*t), rb=Math.round(ab+(bb-ab)*t);
        return `rgb(${rr},${rg},${rb})`;
      }
      function colorForIntensity(val, maxVal){
        const t = 1 - clamp(val / maxVal, 0, 1); // more val = more red
        return lerpColor('#ef4444', '#10b981', t);
      }
      function radial(color, alpha=0.45){
        return `radial-gradient(closest-side, ${color.replace('rgb','rgba').replace(')',','+alpha+')')}, rgba(0,0,0,0) 70%)`;
      }

      // ---------- Map Rendering ----------
      const overlay = document.getElementById('map-overlay');
      const hotspots = document.getElementById('hotspots');
      const tooltip = document.getElementById('tooltip');
      const sideTitle = document.getElementById('panel-title');
      const sideKwh = document.getElementById('panel-kwh');
      const sideCo2 = document.getElementById('panel-co2');
      const sideVs = document.getElementById('panel-vs');
      const sideProg = document.getElementById('panel-progress');
      const sideAct = document.getElementById('panel-actions');
      const improveBtn = document.getElementById('improve-btn');

      function renderLayer(layer='energy', adjustments=null){
        const values = buildings.map(b => layerScales[layer](b));
        const maxVal = Math.max(...values);
        // Paint choropleth
        buildings.forEach(b=>{
          const rect = document.getElementById(b.id);
          const baseVal = layer === 'energy' ? b.co2 : layerScales[layer](b);
          const adjVal = adjustments ? adjustments(b, baseVal) : baseVal;
          const color = colorForIntensity(adjVal, maxVal);
          rect.setAttribute('fill', color);
          rect.setAttribute('fill-opacity', '0.55');
          rect.setAttribute('stroke', 'rgba(255,255,255,0.2)');
          rect.setAttribute('stroke-width', '0.3');
          rect.onmouseenter = (e)=> showTooltip(e, b, adjVal);
          rect.onmousemove = (e)=> moveTooltip(e);
          rect.onmouseleave = hideTooltip;
          rect.onclick = ()=> openPanel(b, adjVal);
        });

        // Hotspots
        hotspots.innerHTML = '';
        buildings.forEach(b=>{
          const val = layer === 'energy' ? b.co2 : layerScales[layer](b);
          const adjVal = adjustments ? adjustments(b, val) : val;
          const color = colorForIntensity(adjVal, Math.max(...values));
          const size = 60 + clamp(adjVal, 10, 600) * 0.4;
          const hs = document.createElement('div');
          hs.className = 'absolute pointer-events-none';
          hs.style.left = `calc(${b.x}% - ${size/2}px)`;
          hs.style.top = `calc(${b.y}% - ${size/2}px)`;
          hs.style.width = `${size}px`;
          hs.style.height = `${size}px`;
          hs.style.borderRadius = '9999px';
          hs.style.background = radial(color, 0.35);
          hs.style.transition = 'all 600ms ease';
          // outline
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#home">
<div className="h-8 w-8 rounded-md bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
<span className="text-sm font-semibold tracking-tight">CC</span>
</div>
<span className="text-sm md:text-base font-semibold tracking-tight text-zinc-200 group-hover:text-white transition-colors">Campus Carbon Mapper</span>
</a>
<nav className="hidden md:flex items-center gap-2">
<a className="px-3 py-2 text-sm rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors flex items-center gap-2" href="#map" target="_blank">

<svg className="h-4 w-4 text-zinc-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z"></path><path d="M9 3v15"></path><path d="M15 6v15"></path></svg>
            Map
          </a>
<a className="px-3 py-2 text-sm rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors flex items-center gap-2" href="#scenario" target="_blank">

<svg className="h-4 w-4 text-zinc-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="4" y1="21" y2="14"></line><line x1="4" x2="4" y1="10" y2="3"></line><line x1="12" x2="12" y1="21" y2="12"></line><line x1="12" x2="12" y1="8" y2="3"></line><line x1="20" x2="20" y1="21" y2="16"></line><line x1="20" x2="20" y1="12" y2="3"></line><line x1="2" x2="6" y1="14" y2="14"></line><line x1="10" x2="14" y1="8" y2="8"></line><line x1="18" x2="22" y1="16" y2="16"></line></svg>
            Scenarios
          </a>
<a className="px-3 py-2 text-sm rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors flex items-center gap-2" href="#tracker" target="_blank">

<svg className="h-4 w-4 text-zinc-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21a8 8 0 1 0-16 0"></path><circle cx="12" cy="7" r="4"></circle></svg>
            Personal
          </a>
<a className="px-3 py-2 text-sm rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors flex items-center gap-2" href="#analytics" target="_blank">

<svg className="h-4 w-4 text-zinc-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M19 9l-5 5-4-4-6 6"></path></svg>
            Analytics
          </a>
</nav>
<div className="md:hidden">
<a className="px-3 py-2 text-sm rounded-md bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-colors" href="#map" target="_blank">Open</a>
</div>
</div>
</header>

<section className="relative min-h-[88vh] overflow-hidden" id="home">

<div className="absolute inset-0">
<div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(600px 300px at 20% 10%, rgba(16,185,129,0.15), transparent 60%), radial-gradient(700px 400px at 90% 80%, rgba(239,68,68,0.12), transparent 60%)'}}></div>
<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(to bottom, rgba(2,6,12,0.6), rgba(2,6,12,0.9))'}}></div>

<div className="absolute inset-0 opacity-50">
<div className="w-full h-full [background-image:linear-gradient(#0f141b 1px,transparent 1px),linear-gradient(90deg,#0f141b 1px,transparent 1px)] [background-size:40px_40px] [background-position:center]"></div>
</div>
</div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 pb-12">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3l1.5 3.5L17 8l-3.5 1.5L12 13l-1.5-3.5L7 8l3.5-1.5L12 3z"></path><path d="M5 19l.75 1.75L7.5 21.5 5.75 22.25 5 24l-.75-1.75L2.5 21.5 4.25 20.75 5 19z"></path></svg>
              Live campus emissions preview
            </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
              Visualize, Understand, and Reduce Your Campus Carbon Footprint
            </h1>
<p className="text-zinc-400 text-base md:text-lg max-w-xl">
              Making sustainability visible, one map at a time. Explore energy, transport, waste, and event impacts with immersive layers and interactive storytelling.
            </p>
<div className="flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-emerald-500/15 border border-emerald-500/40 hover:bg-emerald-500/25 hover:border-emerald-500/60 text-emerald-200 transition-colors" href="#map" target="_blank">

<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 10.61A8 8 0 1 0 3.16 10.6c0 7.11 8 12.39 8 12.39s8-5.28 8-12.39z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                View Campus Map
                
<svg className="h-4 w-4 opacity-80" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-zinc-200 transition-colors" href="#scenario" target="_blank">

<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7l-4-4L5 13z"></path><path d="M3 21l6-6"></path><path d="M15 7l3 3"></path></svg>
                Run Scenarios
                <svg className="h-4 w-4 opacity-80" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path></svg>
</a>
</div>
</div>
<div className="relative">

<div className="rounded-2xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
<div className="p-4 flex items-center justify-between border-b border-white/10">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
<span className="text-sm text-zinc-300">Live Map Layer: Energy Intensity</span>
</div>
<div className="text-xs text-zinc-400">MapmyIndia</div>
</div>
<div className="relative h-72 sm:h-96">
<div className="absolute inset-0 bg-[#0a1218]" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1535136120296-00c4aa7a5c02?q=80&amp', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.35) saturate(0.9)'}}></div>

<div className="absolute inset-0">
<div className="absolute left-1/3 top-1/3 -translate-x-1/2 -translate-y-1/2 h-28 w-28 rounded-full">
<span className="absolute inset-0 rounded-full bg-red-500/40 blur-xl"></span>
<span className="absolute inset-0 rounded-full border border-red-400/40"></span>
<span className="absolute inset-0 rounded-full animate-ping bg-red-500/30"></span>
</div>
<div className="absolute left-2/3 top-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-24 rounded-full">
<span className="absolute inset-0 rounded-full bg-emerald-500/30 blur-xl"></span>
<span className="absolute inset-0 rounded-full border border-emerald-400/40"></span>
<span className="absolute inset-0 rounded-full animate-ping bg-emerald-500/20"></span>
</div>
</div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/5 border border-white/10 text-zinc-300">
<span className="h-2 w-2 rounded-full bg-red-400"></span>
                      High emission
                    </span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/5 border border-white/10 text-zinc-300">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                      Eco-friendly
                    </span>
</div>
<a className="text-xs text-emerald-300 hover:text-emerald-200 inline-flex items-center gap-1" href="#map" target="_blank">
                    Explore full map
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path></svg>
</a>
</div>
</div>
</div>

<div className="absolute -bottom-6 -right-3 md:-right-6">
<div className="rounded-xl bg-black/50 border border-white/10 p-4 shadow-xl backdrop-blur-xl">
<div className="text-xs text-zinc-400">Projected reduction</div>
<div className="text-2xl font-semibold tracking-tight text-emerald-300">−28.4t CO₂/yr</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative min-h-screen" id="map">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Interactive Map Dashboard</h2>
<span className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-zinc-400">Mock data</span>
</div>
<div className="flex items-center gap-2">
<a className="px-3 py-1.5 rounded-md text-xs bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-500/50 text-emerald-200 transition-colors flex items-center gap-2" href="?layer=energy#map" target="_blank">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l10 5-10 5L2 7l10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
              Energy
            </a>
<a className="px-3 py-1.5 rounded-md text-xs bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-zinc-300 transition-colors" href="?layer=transport#map" target="_blank">Transport</a>
<a className="px-3 py-1.5 rounded-md text-xs bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-zinc-300 transition-colors" href="?layer=waste#map" target="_blank">Waste</a>
<a className="px-3 py-1.5 rounded-md text-xs bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-zinc-300 transition-colors" href="?layer=events#map" target="_blank">Events</a>
</div>
</div>
<div className="grid lg:grid-cols-[1fr,360px] gap-4">

<div className="relative rounded-2xl overflow-hidden bg-[#0a1218] border border-white/10">

<div className="absolute top-3 left-3 z-20 text-[10px] text-zinc-400 px-2 py-1 rounded bg-black/40 border border-white/10 backdrop-blur-md">MapmyIndia • Campus View</div>

<div className="h-[70vh] w-full relative" id="map-base">
<div className="absolute inset-0" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&amp', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.4) saturate(0.9)'}}></div>

<svg className="absolute inset-0" id="map-overlay" preserveaspectratio="none" viewbox="0 0 100 100">

<rect className="cursor-pointer transition-all duration-500" height="12" id="bldg-eng" rx="1.5" width="16" x="18" y="30"></rect>
<rect className="cursor-pointer transition-all duration-500" height="11" id="bldg-lib" rx="1.5" width="18" x="40" y="52"></rect>
<rect className="cursor-pointer transition-all duration-500" height="10" id="bldg-gym" rx="1.5" width="14" x="66" y="22"></rect>
<rect className="cursor-pointer transition-all duration-500" height="13" id="bldg-sci" rx="1.5" width="20" x="62" y="60"></rect>
<rect className="cursor-pointer transition-all duration-500" height="10" id="bldg-admin" rx="1.5" width="14" x="28" y="72"></rect>
</svg>

<div className="absolute inset-0 pointer-events-none" id="hotspots"></div>

<div className="hidden absolute z-30 px-3 py-2 rounded-md bg-black/70 border border-white/10 text-xs text-zinc-200 backdrop-blur-md shadow-lg" id="tooltip"></div>
</div>

<div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<button className="h-9 w-9 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 flex items-center justify-center transition-colors" id="zoom-in" title="Zoom in">

<svg className="h-4.5 w-4.5 text-zinc-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
</button>
<button className="h-9 w-9 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 flex items-center justify-center transition-colors" id="zoom-out" title="Zoom out">

<svg className="h-4.5 w-4.5 text-zinc-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><line x1="5" x2="19" y1="12" y2="12"></line></svg>
</button>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] text-zinc-400 bg-black/40 border border-white/10 rounded px-2 py-1">Hover buildings for quick facts</span>
</div>
</div>
</div>

<aside className="relative" id="side-panel">
<div className="sticky top-24">
<div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden">
<div className="p-4 border-b border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2">

<svg className="h-4.5 w-4.5 text-zinc-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M9 3v18"></path><path d="M3 9h18"></path></svg>
<h3 className="text-sm font-semibold tracking-tight" id="panel-title">Select a building</h3>
</div>
<button className="h-8 w-8 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 flex items-center justify-center" id="panel-close">

<svg className="h-4 w-4 text-zinc-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
</button>
</div>
<div className="p-4 space-y-4">
<div className="grid grid-cols-2 gap-3">
<div className="rounded-lg bg-black/30 border border-white/10 p-3">
<div className="text-[10px] text-zinc-400">Annual kWh</div>
<div className="text-lg font-semibold tracking-tight" id="panel-kwh">—</div>
</div>
<div className="rounded-lg bg-black/30 border border-white/10 p-3">
<div className="text-[10px] text-zinc-400">Tons CO₂</div>
<div className="text-lg font-semibold tracking-tight" id="panel-co2">—</div>
</div>
</div>
<div className="rounded-lg bg-black/30 border border-white/10 p-3">
<div className="flex items-center justify-between">
<span className="text-[10px] text-zinc-400">vs Campus Avg</span>
<span className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10" id="panel-vs">—</span>
</div>
<div className="mt-2 w-full bg-white/5 h-2 rounded overflow-hidden">
<div className="h-2 bg-emerald-400" id="panel-progress" style={{width: '0%'}}></div>
</div>
</div>
<div>
<div className="text-xs text-zinc-400 mb-2">Suggested eco-actions</div>
<ul className="space-y-2" id="panel-actions">
<li className="text-sm text-zinc-300">—</li>
</ul>
</div>
</div>
<div className="p-4 border-t border-white/10 flex items-center justify-between">
<a className="text-xs text-emerald-300 hover:text-emerald-200 inline-flex items-center gap-1" href="#scenario" target="_blank">
                    Run scenario for this building
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path></svg>
</a>
<button className="px-3 py-1.5 rounded-md bg-emerald-500/15 border border-emerald-500/40 hover:bg-emerald-500/25 hover:border-emerald-500/60 text-xs text-emerald-200" id="improve-btn">Apply improvement</button>
</div>
</div>
<div className="mt-4 rounded-xl bg-white/5 border border-white/10 p-4">
<div className="text-xs text-zinc-400 mb-2">Legend</div>
<div className="flex items-center gap-3 text-xs">
<span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-red-400"></span> High CO₂</span>
<span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-amber-400"></span> Medium</span>
<span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span> Low</span>
</div>
</div>
</div>
</aside>
</div>
</div>
</section>

<section className="relative py-12" id="scenario">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Scenario Analysis</h2>
<a className="text-sm text-emerald-300 hover:text-emerald-200 inline-flex items-center gap-1" href="#scenario-compare" target="_blank">
            Open Compare Mode
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="7" width="7" x="3" y="3"></rect><rect height="7" width="7" x="14" y="3"></rect><rect height="7" width="7" x="14" y="14"></rect><rect height="7" width="7" x="3" y="14"></rect></svg>
</a>
</div>
<div className="grid lg:grid-cols-[420px,1fr] gap-6">

<div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-5 space-y-5">
<div className="flex items-center gap-2">

<svg className="h-4.5 w-4.5 text-zinc-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l0 0a2 2 0 1 1-2.83 2.83l0 0A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1.82.33l0 0a2 2 0 1 1-2.83-2.83l0 0A1.65 1.65 0 0 0 8.6 15a1.65 1.65 0 0 0-.33-1.82l0 0A2 2 0 1 1 11.1 10.35l0 0A1.65 1.65 0 0 0 12 8.6a1.65 1.65 0 0 0 1.82-.33l0 0A2 2 0 1 1 16.65 11.1l0 0A1.65 1.65 0 0 0 19.4 15z"></path></svg>
<h3 className="text-sm font-semibold tracking-tight">Interactive Simulation Controls</h3>
</div>
<div>
<div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
<span>Add Solar Capacity (kW)</span><span className="text-zinc-200" id="solar-val">0</span>
</div>
<input className="w-full" id="solar" max="1500" min="0" type="range" value="0"/>
</div>
<div>
<div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
<span>Reduce HVAC Energy %</span><span className="text-zinc-200" id="hvac-val">0%</span>
</div>
<input className="w-full" id="hvac" max="40" min="0" type="range" value="0"/>
</div>
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="text-xs text-zinc-400">Cut bus idling time</label>
<select className="mt-1 w-full bg-black/40 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-0 focus:border-white/20" id="idling">
<option value="0">No change</option>
<option value="10">10% less</option>
<option value="25">25% less</option>
<option value="50">50% less</option>
</select>
</div>
<div>
<label className="text-xs text-zinc-400">Switch vehicles to EVs</label>
<select className="mt-1 w-full bg-black/40 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-0 focus:border-white/20" id="evshare">
<option value="0">0% fleet</option>
<option value="25">25% fleet</option>
<option value="50">50% fleet</option>
<option value="100">100% fleet</option>
</select>
</div>
</div>
<div className="rounded-xl bg-black/30 border border-white/10 p-4">
<div className="text-xs text-zinc-400">Carbon reduced (est.)</div>
<div className="text-3xl font-semibold tracking-tight text-emerald-300" id="impact">0.0 t CO₂/yr</div>
<div className="mt-3 flex items-center gap-2 text-xs text-zinc-400">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="16" y2="12"></line><line x1="12" x2="12.01" y1="8" y2="8"></line></svg>
                Estimates update the map hotspots in real-time.
              </div>
</div>
<div className="flex items-center gap-2">
<button className="flex-1 px-4 py-2 rounded-md bg-emerald-500/15 border border-emerald-500/40 hover:bg-emerald-500/25 hover:border-emerald-500/60 text-sm text-emerald-200" id="apply-scenario">Apply to Map</button>
<a className="px-4 py-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-sm" href="#scenario-compare" target="_blank">Compare</a>
</div>
</div>

<div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-5">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">

<svg className="h-4.5 w-4.5 text-zinc-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
<h3 className="text-sm font-semibold tracking-tight">Dynamic Map Update</h3>
</div>
<span className="text-[10px] text-zinc-400">Red → Green transition</span>
</div>
<div className="relative h-[380px] rounded-xl overflow-hidden border border-white/10 bg-[#0a1218]">
<div className="absolute inset-0 opacity-60" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&amp', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.4) saturate(0.9)'}}></div>
<svg className="absolute inset-0" id="scenario-overlay" preserveaspectratio="none" viewbox="0 0 100 100">
<rect height="12" rx="1.5" width="16" x="18" y="30"></rect>
<rect height="11" rx="1.5" width="18" x="40" y="52"></rect>
<rect height="10" rx="1.5" width="14" x="66" y="22"></rect>
<rect height="13" rx="1.5" width="20" x="62" y="60"></rect>
<rect height="10" rx="1.5" width="14" x="28" y="72"></rect>
</svg>
</div>
</div>
</div>

<div className="mt-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-5" id="scenario-compare">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold tracking-tight">Scenario Compare Mode</h3>
<span className="text-[10px] text-zinc-400">Opened in parallel tab recommended</span>
</div>
<div className="grid md:grid-cols-2 gap-4">

<div className="rounded-xl bg-black/30 border border-white/10 p-4">
<div className="text-xs text-zinc-400 mb-2">Scenario A</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="text-[10px] text-zinc-400">Solar (kW)</label>
<input className="w-full" id="cmpA-solar" max="1500" min="0" type="range" value="300"/>
</div>
<div>
<label className="text-[10px] text-zinc-400">HVAC %</label>
<input className="w-full" id="cmpA-hvac" max="40" min="0" type="range" value="10"/>
</div>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-xs text-zinc-400">Est. reduction</div>
<div className="text-sm font-semibold tracking-tight text-emerald-300" id="cmpA-impact">—</div>
</div>
</div>

<div className="rounded-xl bg-black/30 border border-white/10 p-4">
<div className="text-xs text-zinc-400 mb-2">Scenario B</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="text-[10px] text-zinc-400">Solar (kW)</label>
<input className="w-full" id="cmpB-solar" max="1500" min="0" type="range" value="800"/>
</div>
<div>
<label className="text-[10px] text-zinc-400">HVAC %</label>
<input className="w-full" id="cmpB-hvac" max="40" min="0" type="range" value="25"/>
</div>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-xs text-zinc-400">Est. reduction</div>
<div className="text-sm font-semibold tracking-tight text-emerald-300" id="cmpB-impact">—</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-12" id="tracker">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-[380px,1fr] gap-6">

<div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden">
<div className="p-4 border-b border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2">

<svg className="h-4.5 w-4.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21C7 21 3 17 3 13 3 6 9 3 12 3c7 0 9 6 9 9 0 3-3 9-10 9z"></path><path d="M12 3v8"></path></svg>
<h3 className="text-sm font-semibold tracking-tight">Personal Carbon Tracker</h3>
</div>
<span className="text-[10px] text-zinc-400">PWA-ready</span>
</div>
<div className="p-4 space-y-4">
<div className="rounded-xl bg-black/30 border border-white/10 p-3">
<div className="text-xs text-zinc-400 mb-2">Log commute for today</div>
<div className="grid grid-cols-4 gap-2">
<button className="px-2 py-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 flex flex-col items-center gap-1" data-mode="bike">

<svg className="h-5 w-5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="5.5" cy="17.5" r="3.5"></circle><circle cx="18.5" cy="17.5" r="3.5"></circle><path d="M12 17.5h1.5l3-6H14l-2-4H8"></path></svg>
<span className="text-[10px] text-zinc-300">Bike</span>
</button>
<button className="px-2 py-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 flex flex-col items-center gap-1" data-mode="bus">

<svg className="h-5 w-5 text-amber-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="13" rx="2" width="18" x="3" y="3"></rect><path d="M8 16v2"></path><path d="M16 16v2"></path><path d="M3 11h18"></path></svg>
<span className="text-[10px] text-zinc-300">Bus</span>
</button>
<button className="px-2 py-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 flex flex-col items-center gap-1" data-mode="carpool">

<svg className="h-5 w-5 text-sky-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
<span className="text-[10px] text-zinc-300">Carpool</span>
</button>
<button className="px-2 py-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 flex flex-col items-center gap-1" data-mode="ev">

<svg className="h-5 w-5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12l2-5h14l2 5"></path><rect height="6" rx="2" width="18" x="3" y="12"></rect><path d="M6 18v2"></path><path d="M18 18v2"></path></svg>
<span className="text-[10px] text-zinc-300">EV</span>
</button>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-xl bg-black/30 border border-white/10 p-3">
<div className="text-[10px] text-zinc-400">Weekly footprint</div>
<div className="text-lg font-semibold tracking-tight" id="weekly-kg">— kg CO₂</div>
</div>
<div className="rounded-xl bg-black/30 border border-white/10 p-3">
<div className="text-[10px] text-zinc-400">% saved vs car-only</div>
<div className="text-lg font-semibold tracking-tight text-emerald-300" id="weekly-saved">—%</div>
</div>
</div>
<div className="rounded-xl bg-black/30 border border-white/10 p-3">
<div className="text-xs text-zinc-400 mb-2">Check-in Map (eco activity)</div>
<div className="relative h-40 rounded-md overflow-hidden border border-white/10 bg-[#0a1218]">
<div className="absolute inset-0" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1521542467731-59d3b4950d6b?q=80&amp', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.35)'}}></div>

<div className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2">
<span className="relative flex h-4 w-4">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30"></span>
<span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
</span>
</div>
<div className="absolute left-2/3 top-1/3 -translate-x-1/2 -translate-y-1/2">
<span className="relative flex h-4 w-4">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-25"></span>
<span className="relative inline-flex rounded-full h-4 w-4 bg-sky-400"></span>
</span>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-5">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">

<svg className="h-4.5 w-4.5 text-amber-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 21h8"></path><path d="M12 17v4"></path><path d="M7 4h10v4a5 5 0 0 1-10 0V4z"></path><path d="M5 8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2"></path><path d="M19 8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2"></path></svg>
<h3 className="text-sm font-semibold tracking-tight">Leaderboard</h3>
</div>
<span className="text-[10px] text-zinc-400">Eco-points</span>
</div>
<div className="divide-y divide-white/5">
<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<img alt="face" className="h-8 w-8 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">Aarav P.</div>
<div className="text-[10px] text-zinc-400">Cycling Club</div>
</div>
</div>
<div className="flex items-center gap-2">

<svg className="h-4 w-4 text-amber-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="5"></circle><path d="M8.5 14H7l-4 7 6-3 3 3 3-3 6 3-4-7h-1.5"></path></svg>
<span className="text-sm font-semibold tracking-tight">1,240</span>
</div>
</div>
<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<img alt="face" className="h-8 w-8 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">Meera S.</div>
<div className="text-[10px] text-zinc-400">Eco Warriors</div>
</div>
</div>
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-sky-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="5"></circle><path d="M8.5 14H7l-4 7 6-3 3 3 3-3 6 3-4-7h-1.5"></path></svg>
<span className="text-sm font-semibold tracking-tight">1,050</span>
</div>
</div>
<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<img alt="face" className="h-8 w-8 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">Rahul K.</div>
<div className="text-[10px] text-zinc-400">Sustainability Cell</div>
</div>
</div>
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="5"></circle><path d="M8.5 14H7l-4 7 6-3 3 3 3-3 6 3-4-7h-1.5"></path></svg>
<span className="text-sm font-semibold tracking-tight">980</span>
</div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-5">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold tracking-tight">Weekly commute footprint</h3>
<span className="text-[10px] text-zinc-400">kg CO₂</span>
</div>
<div className="relative">
<div className="h-56">
<div className="relative h-full">
<div className="h-full w-full">
<div className="relative h-full">
<div className="relative h-full">
<div className="relative h-full">
<div className="relative h-full">
<div className="relative h-full">
<div className="relative h-full">
<div className="relative h-full">
<div className="relative h-full">
<div className="relative h-full">
<div className="relative h-full">
<div className="relative h-full">
<div className="relative h-full">
<div className="relative h-full">
<div className="relative h-full">
<div className="relative h-full">
<div className="relative h-full">
<div className="relative h-full">
<div className="relative h-full">
<div className="relative h-full">
<div className="relative h-full">
<div className="relative h-full">
<div className="relative h-full">
<div className="relative h-full">
<div className="relative h-full">
<div className="relative h-full">
<div className="relative h-full">
<div className="relative h-full">
<div className="relative h-full">
<div className="relative h-full">
<div style={{height: '100%'}}>
<canvas id="trackerChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-3 text-xs text-zinc-400">Log modes daily to climb the leaderboard.</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-12" id="analytics">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Analytics &amp; Reports</h2>
<div className="flex items-center gap-2">
<a className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-sm inline-flex items-center gap-2" href="?print=1#analytics" target="_blank">

<svg className="h-4 w-4 text-zinc-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
              Download PDF
            </a>
<a className="px-3 py-1.5 rounded-md bg-emerald-500/15 border border-emerald-500/40 hover:bg-emerald-500/25 hover:border-emerald-500/60 text-sm text-emerald-200 inline-flex items-center gap-2" href="#map" target="_blank">

<svg className="h-4 w-4 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 1 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 1 0 7.07 7.07l1.71-1.71"></path></svg>
              Share Link
            </a>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-5">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold tracking-tight">CO₂ emissions over time</h3>
<span className="text-[10px] text-zinc-400">t CO₂ by month</span>
</div>
<div className="relative">
<div className="h-72">
<div className="relative h-full">
<div style={{height: '100%'}}>
<canvas id="emissionsChart"></canvas>
</div>
</div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-5">
<h3 className="text-sm font-semibold tracking-tight mb-3">Ranked Insights</h3>
<div className="text-xs text-zinc-400 mb-2">Top 10 emitters</div>
<div className="space-y-2 mb-4" id="top-emitters"></div>
<div className="text-xs text-zinc-400 mb-2">Greenest buildings</div>
<div className="space-y-2" id="greenest"></div>
</div>
</div>
<div className="mt-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-5">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold tracking-tight">Before vs After Interventions</h3>
<span className="text-[10px] text-zinc-400">t CO₂</span>
</div>
<div className="relative">
<div className="h-72">
<div className="relative h-full">
<div style={{height: '100%'}}>
<canvas id="beforeAfterChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-8 border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
<div className="text-xs text-zinc-500">© 2025 Campus Carbon Mapper</div>
<div className="flex items-center gap-3">
<a className="text-xs text-zinc-400 hover:text-zinc-200" href="#map" target="_blank">Map</a>
<a className="text-xs text-zinc-400 hover:text-zinc-200" href="#scenario" target="_blank">Scenarios</a>
<a className="text-xs text-zinc-400 hover:text-zinc-200" href="#tracker" target="_blank">Personal</a>
<a className="text-xs text-zinc-400 hover:text-zinc-200" href="#analytics" target="_blank">Reports</a>
</div>
</div>
</footer>

    </>
  );
}
