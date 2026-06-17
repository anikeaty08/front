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



        lucide.createIcons();
        
        // Toggle layer buttons
        document.querySelectorAll('.layer-toggle').forEach(button => {
            button.addEventListener('click', function() {
                this.classList.toggle('active');
            });
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
      
<div className="min-h-screen p-4 lg:p-6">

<header className="mb-6 border-b border-slate-800/50 pb-6">
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
<div>
<div className="flex items-center gap-3 mb-2">
<div className="flex items-center justify-center w-10 h-10 bg-slate-900 border border-slate-800 rounded-lg">
<span className="text-lg font-semibold tracking-tighter text-cyan-400">OR</span>
</div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-100">Oceanographic Research Command</h1>
</div>
<p className="text-sm text-slate-400 ml-13">Real-time expedition monitoring &amp; data acquisition system</p>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-2 bg-slate-900/50 border border-slate-800 rounded-lg">
<div className="w-2 h-2 bg-emerald-400 rounded-full sonar-pulse"></div>
<span className="text-xs font-medium text-slate-300 mono">SYSTEM OPERATIONAL</span>
</div>
<div className="text-right">
<div className="text-xs text-slate-500 mono">UTC TIME</div>
<div className="text-sm font-medium mono text-slate-300">14:32:18</div>
</div>
</div>
</div>
</header>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">
<div className="data-card border border-slate-800/50 rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold tracking-tight text-slate-100">Global Expedition Tracking</h2>
<div className="flex items-center gap-2">
<button className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors">
<i className="w-4 h-4 text-slate-400" data-lucide="maximize-2"></i>
</button>
</div>
</div>

<div className="globe-container rounded-lg border border-slate-800/70 p-8 mb-4 relative overflow-hidden" style={{height: '400px'}}>
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative">
<img alt="Globe" className="w-80 h-80 object-cover rounded-full opacity-80" src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=500&amp;h=500&amp;fit=crop"/>

<div className="absolute top-24 left-32 w-3 h-3 bg-cyan-400 rounded-full animate-ping" style={{animationDuration: '2s'}}></div>
<div className="absolute top-24 left-32 w-3 h-3 bg-cyan-400 rounded-full"></div>
<div className="absolute top-24 left-32 -ml-16 mt-4 bg-slate-900/90 border border-cyan-400/30 rounded px-2 py-1 backdrop-blur-sm">
<div className="text-xs font-medium mono text-cyan-400">RV-001 ATLAS</div>
</div>
<div className="absolute bottom-32 right-24 w-3 h-3 bg-emerald-400 rounded-full animate-ping" style={{animationDuration: '2.5s'}}></div>
<div className="absolute bottom-32 right-24 w-3 h-3 bg-emerald-400 rounded-full"></div>
<div className="absolute bottom-32 right-24 -mr-16 mt-4 bg-slate-900/90 border border-emerald-400/30 rounded px-2 py-1 backdrop-blur-sm">
<div className="text-xs font-medium mono text-emerald-400">RV-002 NEREUS</div>
</div>
<div className="absolute top-40 right-28 w-3 h-3 bg-blue-400 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
<div className="absolute top-40 right-28 w-3 h-3 bg-blue-400 rounded-full"></div>
</div>
</div>

<div className="absolute bottom-4 left-4 bg-slate-900/80 border border-slate-800 rounded-lg px-3 py-2 backdrop-blur-sm">
<div className="text-xs text-slate-500 mono mb-1">ACTIVE VESSELS</div>
<div className="text-xl font-semibold mono text-slate-100">3</div>
</div>
<div className="absolute bottom-4 right-4 text-right">
<div className="text-xs text-slate-500 mono">COVERAGE AREA</div>
<div className="text-sm font-medium mono text-slate-300">2.4M km²</div>
</div>
</div>

<div className="grid grid-cols-3 gap-3">
<button className="layer-toggle active flex items-center gap-2 px-4 py-3 bg-slate-900/30 border border-slate-800 rounded-lg hover:bg-slate-800/50 transition-colors">
<i className="w-4 h-4 text-cyan-400" data-lucide="waves"></i>
<div className="text-left">
<div className="text-xs font-medium text-slate-300">Depth</div>
<div className="text-xs text-slate-500 mono">-2,847m</div>
</div>
</button>
<button className="layer-toggle flex items-center gap-2 px-4 py-3 bg-slate-900/30 border border-slate-800 rounded-lg hover:bg-slate-800/50 transition-colors">
<i className="w-4 h-4 text-orange-400" data-lucide="thermometer"></i>
<div className="text-left">
<div className="text-xs font-medium text-slate-300">Temperature</div>
<div className="text-xs text-slate-500 mono">4.2°C</div>
</div>
</button>
<button className="layer-toggle flex items-center gap-2 px-4 py-3 bg-slate-900/30 border border-slate-800 rounded-lg hover:bg-slate-800/50 transition-colors">
<i className="w-4 h-4 text-blue-400" data-lucide="droplet"></i>
<div className="text-left">
<div className="text-xs font-medium text-slate-300">Salinity</div>
<div className="text-xs text-slate-500 mono">35.1 PSU</div>
</div>
</button>
</div>
</div>

<div className="data-card border border-slate-800/50 rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold tracking-tight text-slate-100">Live Data Streams</h2>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-emerald-400 rounded-full sonar-pulse"></div>
<span className="text-xs text-slate-400 mono">STREAMING</span>
</div>
</div>
<div className="space-y-3">

<div className="bg-slate-900/40 border border-slate-800/70 rounded-lg p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-cyan-400" data-lucide="radio"></i>
<span className="text-sm font-medium text-slate-300">Multibeam Sonar</span>
</div>
<span className="text-xs mono text-slate-500">RV-001</span>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs">
<span className="text-slate-500">Signal Strength</span>
<span className="text-slate-300 mono">94%</span>
</div>
<div className="w-full bg-slate-800/50 rounded-full h-1.5">
<div className="bg-cyan-400 h-1.5 rounded-full" style={{width: '94%'}}></div>
</div>
</div>
</div>

<div className="bg-slate-900/40 border border-slate-800/70 rounded-lg p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-400" data-lucide="activity"></i>
<span className="text-sm font-medium text-slate-300">CTD Sensor Array</span>
</div>
<span className="text-xs mono text-slate-500">RV-002</span>
</div>
<div className="grid grid-cols-3 gap-3">
<div>
<div className="text-xs text-slate-500">Conductivity</div>
<div className="text-sm font-medium mono text-slate-300">42.8 mS/cm</div>
</div>
<div>
<div className="text-xs text-slate-500">Temp</div>
<div className="text-sm font-medium mono text-slate-300">4.2°C</div>
</div>
<div>
<div className="text-xs text-slate-500">Depth</div>
<div className="text-sm font-medium mono text-slate-300">2,847m</div>
</div>
</div>
</div>

<div className="bg-slate-900/40 border border-slate-800/70 rounded-lg p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-400" data-lucide="cloud"></i>
<span className="text-sm font-medium text-slate-300">Meteorological Station</span>
</div>
<span className="text-xs mono text-slate-500">RV-001</span>
</div>
<div className="grid grid-cols-4 gap-3">
<div>
<div className="text-xs text-slate-500">Wind</div>
<div className="text-sm font-medium mono text-slate-300">12 kts</div>
</div>
<div>
<div className="text-xs text-slate-500">Pressure</div>
<div className="text-sm font-medium mono text-slate-300">1013 mb</div>
</div>
<div>
<div className="text-xs text-slate-500">Wave</div>
<div className="text-sm font-medium mono text-slate-300">2.3m</div>
</div>
<div>
<div className="text-xs text-slate-500">Visibility</div>
<div className="text-sm font-medium mono text-slate-300">15 km</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="data-card border border-slate-800/50 rounded-xl p-6">
<h2 className="text-lg font-semibold tracking-tight text-slate-100 mb-4">Active Missions</h2>
<div className="space-y-3">
<div className="bg-slate-900/40 border border-cyan-400/20 rounded-lg p-4 hover:border-cyan-400/40 transition-colors">
<div className="flex items-start justify-between mb-2">
<div>
<div className="text-sm font-medium text-slate-200 mb-1">Deep Trench Survey</div>
<div className="text-xs text-slate-500 mono">RV-001 ATLAS</div>
</div>
<span className="px-2 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded text-xs font-medium text-cyan-400 mono">ACTIVE</span>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs">
<span className="text-slate-500">Progress</span>
<span className="text-slate-300 mono">67%</span>
</div>
<div className="w-full bg-slate-800/50 rounded-full h-1.5">
<div className="bg-cyan-400 h-1.5 rounded-full" style={{width: '67%'}}></div>
</div>
<div className="flex justify-between text-xs pt-1">
<span className="text-slate-500">Duration</span>
<span className="text-slate-300 mono">14d 6h</span>
</div>
</div>
</div>
<div className="bg-slate-900/40 border border-emerald-400/20 rounded-lg p-4 hover:border-emerald-400/40 transition-colors">
<div className="flex items-start justify-between mb-2">
<div>
<div className="text-sm font-medium text-slate-200 mb-1">Hydrothermal Vents</div>
<div className="text-xs text-slate-500 mono">RV-002 NEREUS</div>
</div>
<span className="px-2 py-1 bg-emerald-400/10 border border-emerald-400/30 rounded text-xs font-medium text-emerald-400 mono">ACTIVE</span>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs">
<span className="text-slate-500">Progress</span>
<span className="text-slate-300 mono">42%</span>
</div>
<div className="w-full bg-slate-800/50 rounded-full h-1.5">
<div className="bg-emerald-400 h-1.5 rounded-full" style={{width: '42%'}}></div>
</div>
<div className="flex justify-between text-xs pt-1">
<span className="text-slate-500">Duration</span>
<span className="text-slate-300 mono">9d 2h</span>
</div>
</div>
</div>
<div className="bg-slate-900/40 border border-slate-800/70 rounded-lg p-4 hover:border-slate-700/70 transition-colors">
<div className="flex items-start justify-between mb-2">
<div>
<div className="text-sm font-medium text-slate-200 mb-1">Seamount Mapping</div>
<div className="text-xs text-slate-500 mono">RV-003 TRITON</div>
</div>
<span className="px-2 py-1 bg-slate-700/30 border border-slate-700 rounded text-xs font-medium text-slate-400 mono">TRANSIT</span>
</div>
<div className="flex justify-between text-xs pt-1">
<span className="text-slate-500">ETA to site</span>
<span className="text-slate-300 mono">18h 30m</span>
</div>
</div>
</div>
</div>

<div className="data-card border border-slate-800/50 rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold tracking-tight text-slate-100">Crew Logs</h2>
<button className="text-xs text-cyan-400 hover:text-cyan-300 font-medium">View All</button>
</div>
<div className="space-y-3">
<div className="flex gap-3 pb-3 border-b border-slate-800/50">
<img alt="Crew" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-medium text-slate-300">Dr. Sarah Chen</span>
<span className="text-xs text-slate-500 mono">2h ago</span>
</div>
<p className="text-xs text-slate-400 leading-relaxed">Completed CTD cast at station 42. Water samples collected at 6 depths. Notable bioluminescent activity observed.</p>
</div>
</div>
<div className="flex gap-3 pb-3 border-b border-slate-800/50">
<img alt="Crew" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-medium text-slate-300">Capt. Marcus Rivera</span>
<span className="text-xs text-slate-500 mono">4h ago</span>
</div>
<p className="text-xs text-slate-400 leading-relaxed">Weather window optimal for next 36hrs. Proceeding to waypoint Echo-7 for deep ROV deployment.</p>
</div>
</div>
<div className="flex gap-3">
<img alt="Crew" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-medium text-slate-300">Dr. Elena Volkov</span>
<span className="text-xs text-slate-500 mono">6h ago</span>
</div>
<p className="text-xs text-slate-400 leading-relaxed">Sonar mapping complete for grid sector 12. High-resolution bathymetry data uploaded to main server.</p>
</div>
</div>
</div>
</div>

<div className="data-card border border-slate-800/50 rounded-xl p-6">
<h2 className="text-lg font-semibold tracking-tight text-slate-100 mb-4">Environmental Status</h2>
<div className="space-y-3">
<div className="flex items-start gap-3 p-3 bg-slate-900/40 border border-slate-800/70 rounded-lg">
<div className="w-8 h-8 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-emerald-400" data-lucide="check"></i>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-slate-300 mb-1">Sea State Nominal</div>
<div className="text-xs text-slate-500">Wave height 1.8m, wind 8kts NE</div>
</div>
</div>
<div className="flex items-start gap-3 p-3 bg-slate-900/40 border border-blue-400/20 rounded-lg">
<div className="w-8 h-8 rounded-full bg-blue-400/10 border border-blue-400/30 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-blue-400" data-lucide="info"></i>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-slate-300 mb-1">Marine Life Detected</div>
<div className="text-xs text-slate-500">Large biomass on sonar at 450m depth</div>
</div>
</div>
<div className="flex items-start gap-3 p-3 bg-slate-900/40 border border-slate-800/70 rounded-lg">
<div className="w-8 h-8 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-cyan-400" data-lucide="zap"></i>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-slate-300 mb-1">
<span className="bioluminescent">Bioluminescence</span>
</div>
<div className="text-xs text-slate-500">Elevated activity in survey area</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="data-card border border-slate-800/50 rounded-xl p-4">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-slate-400" data-lucide="database"></i>
<span className="text-xs text-slate-500">Data Collected</span>
</div>
<div className="text-xl font-semibold mono text-slate-100">847.3 GB</div>
</div>
<div className="data-card border border-slate-800/50 rounded-xl p-4">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-slate-400" data-lucide="map-pin"></i>
<span className="text-xs text-slate-500">Stations</span>
</div>
<div className="text-xl font-semibold mono text-slate-100">142</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
