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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Line Chart
            const lineCtx = document.getElementById('salesLineChart');
            if (lineCtx) {
                new Chart(lineCtx, {
                    type: 'line',
                    data: {
                        labels: ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'],
                        datasets: [{
                            data: [15, 22, 18, 28, 24, 35, 32],
                            borderColor: '#0f172a', 
                            borderWidth: 1.5,
                            backgroundColor: (context) => {
                                const ctx = context.chart.ctx;
                                const gradient = ctx.createLinearGradient(0, 0, 0, 140);
                                gradient.addColorStop(0, 'rgba(15, 23, 42, 0.08)');
                                gradient.addColorStop(1, 'rgba(15, 23, 42, 0)');
                                return gradient;
                            },
                            fill: true,
                            tension: 0.4,
                            pointRadius: 0,
                            pointHoverRadius: 4,
                            pointHoverBackgroundColor: '#0f172a',
                            pointHoverBorderColor: '#fff',
                            pointHoverBorderWidth: 2
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: { 
                            legend: { display: false }, 
                            tooltip: { 
                                enabled: true, 
                                intersect: false, 
                                mode: 'index', 
                                backgroundColor: '#1e293b', 
                                padding: 8, 
                                cornerRadius: 8, 
                                displayColors: false,
                                bodyFont: { family: "'Inter', sans-serif", size: 12 },
                                titleFont: { family: "'Inter', sans-serif", size: 12, weight: '500' }
                            } 
                        },
                        scales: {
                            x: { 
                                grid: { display: false }, 
                                ticks: { color: '#94a3b8', font: { size: 10, family: "'Inter', sans-serif" } }, 
                                border: { display: false } 
                            },
                            y: { display: false, min: 0 }
                        },
                        interaction: { mode: 'nearest', axis: 'x', intersect: false }
                    }
                });
            }

            // Doughnut Chart
            const doughCtx = document.getElementById('rateDoughnutChart');
            if (doughCtx) {
                new Chart(doughCtx, {
                    type: 'doughnut',
                    data: {
                        labels: ['Tasso', 'Rimanente'],
                        datasets: [{
                            data: [54, 46],
                            backgroundColor: ['#0ea5e9', '#e0f2fe'], 
                            borderWidth: 0,
                            hoverOffset: 0
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        cutout: '75%',
                        plugins: { legend: { display: false }, tooltip: { enabled: false } },
                        animation: { animateScale: true, animateRotate: true }
                    }
                });
            }
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
      

<div className="overflow-hidden grid grid-cols-12 lg:p-8 bg-slate-50 w-full max-w-screen-2xl rounded-[2.5rem] pt-6 pr-6 pb-6 pl-6 relative shadow-2xl gap-x-8 gap-y-8">

<div className="absolute inset-0 bg-white/40 pointer-events-none"></div>

<div className="col-span-12 lg:col-span-9 flex flex-col gap-8 z-10">

<header className="flex flex-wrap items-center justify-between gap-4">

<div className="flex items-center gap-2">
<span className="iconify text-slate-900 w-8 h-8" data-icon="lucide:gem" data-strokeWidth="1.5"></span>
<span className="text-2xl text-slate-900 font-semibold tracking-tight">Gioiello.ai</span>
</div>

<nav className="hidden md:flex items-center bg-white shadow-sm border border-slate-100 rounded-full p-1.5 gap-1">
<button className="flex items-center gap-2 px-5 py-2.5 bg-rose-50 text-rose-600 rounded-full transition-colors group">
<span className="iconify text-lg group-hover:scale-110 transition-transform" data-icon="lucide:layout-dashboard" data-strokeWidth="1.5"></span>
<span className="text-sm font-medium">Panoramica</span>
</button>
<button className="flex items-center gap-2 px-5 py-2.5 text-slate-500 hover:bg-slate-50 rounded-full transition-colors group">
<span className="iconify text-lg group-hover:scale-110 transition-transform" data-icon="lucide:building-2" data-strokeWidth="1.5"></span>
<span className="text-sm font-medium">Proprietà</span>
</button>
<button className="flex items-center gap-2 px-5 py-2.5 text-slate-500 hover:bg-slate-50 rounded-full transition-colors group">
<span className="iconify text-lg group-hover:scale-110 transition-transform" data-icon="lucide:headphones" data-strokeWidth="1.5"></span>
<span className="text-sm font-medium">Supporto</span>
</button>
</nav>

<div className="flex items-center gap-4">
<button className="w-12 h-12 flex items-center justify-center bg-white border border-slate-100 rounded-full text-slate-500 hover:text-slate-800 transition">
<span className="iconify text-xl" data-icon="lucide:message-square" data-strokeWidth="1.5"></span>
</button>
<button className="w-12 h-12 flex items-center justify-center bg-white border border-slate-100 rounded-full text-slate-500 hover:text-slate-800 transition relative">
<span className="iconify text-xl" data-icon="lucide:bell" data-strokeWidth="1.5"></span>
<span className="absolute top-3 right-3.5 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
</button>
<div className="flex gap-3 pl-2 items-center cursor-pointer group">
<img alt="Utente" className="w-11 h-11 object-cover ring-white ring-2 rounded-full shadow-sm" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div className="hidden xl:block leading-tight">
<div className="text-sm font-medium text-slate-900 group-hover:text-rose-600 transition-colors">Marco Rossi</div>
<div className="text-xs text-slate-400">marco@gioiello.ai</div>
</div>
<span className="iconify text-slate-400 hidden xl:block group-hover:text-slate-600 transition-colors" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</div>
</div>
</header>

<div className="flex flex-wrap items-center justify-between gap-4">
<div className="flex items-center gap-6">
<div className="text-slate-400 text-sm font-medium">Martedì, 24 Ottobre, 2024</div>
<div className="h-4 w-px bg-slate-300 hidden sm:block"></div>
<button className="hidden sm:flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-sm text-slate-500 hover:text-slate-800 hover:shadow-md transition-all">
<span className="iconify" data-icon="lucide:filter" data-strokeWidth="1.5"></span>
</button>
<div className="relative group">
<span className="iconify absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg group-focus-within:text-slate-800 transition-colors" data-icon="lucide:search" data-strokeWidth="1.5"></span>
<input className="pl-11 pr-4 py-3 bg-white rounded-full text-sm font-medium text-slate-700 placeholder-slate-400 shadow-sm border-none focus:ring-2 focus:ring-rose-500/20 outline-none w-64 transition-all" placeholder="Roma, RM" type="text"/>
</div>
</div>
<div className="flex bg-white p-1.5 rounded-full shadow-sm">
<button className="px-6 py-2 bg-rose-50 text-rose-600 text-sm font-medium rounded-full shadow-sm hover:shadow transition-shadow">Compra</button>
<button className="px-6 py-2 text-slate-400 text-sm font-medium rounded-full hover:bg-slate-50 transition-colors">Vendi</button>
</div>
</div>

<div className="min-h-[420px] flex flex-col overflow-hidden group bg-gradient-to-br from-slate-500 via-slate-400 to-slate-100 rounded-[2rem] p-8 relative justify-between shadow-inner">

<div className="z-10 flex gap-12 mt-4 relative">
<div className="">
<div className="text-sm font-medium text-slate-100/90 mb-1">Volume Totale</div>
<div className="text-5xl text-white font-semibold tracking-tight">€8,245<span className="text-2xl text-slate-200 ml-1 font-medium">k</span></div>
</div>
<div className="">
<div className="text-sm font-medium text-slate-100/90 mb-1">Coinvolgimento</div>
<div className="text-5xl text-white font-semibold tracking-tight">42.1<span className="text-2xl text-slate-200 ml-1 font-medium">%</span></div>
</div>
</div>

<div className="flex flex-wrap max-w-2xl z-10 mt-auto relative gap-5">

<div className="bg-gradient-to-br from-white/90 to-white/40 w-64 rounded-3xl p-5 shadow-xl backdrop-blur-md" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.2))', '--border-radius-before': '24px'}}>
<div className="flex items-center gap-2 mb-6 text-emerald-800">
<span className="iconify text-xl" data-icon="lucide:package-check" data-strokeWidth="1.5"></span>
<span className="text-sm font-medium">Affari Conclusi</span>
</div>
<div className="flex items-end justify-between">
<div className="text-3xl text-emerald-900 font-semibold tracking-tight">142,84</div>
<div className="text-emerald-700 text-sm font-medium mb-1.5">82%</div>
</div>
<div className="mt-3 h-1.5 w-full bg-emerald-900/10 rounded-full overflow-hidden">
<div className="h-full bg-emerald-600 rounded-full w-[82%]"></div>
</div>
</div>

<div className="bg-gradient-to-br from-white/90 to-white/40 w-64 rounded-3xl p-5 shadow-xl backdrop-blur-md" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.2))', '--border-radius-before': '24px'}}>
<div className="flex items-center gap-2 mb-6 text-sky-800">
<span className="iconify text-xl" data-icon="lucide:euro" data-strokeWidth="1.5"></span>
<span className="text-sm font-medium">Ricavo Netto</span>
</div>
<div className="flex items-end justify-between">
<div className="text-3xl text-sky-900 font-semibold tracking-tight">€52,930<span className="text-lg font-medium">K</span></div>
<div className="bg-sky-200 px-2 py-0.5 rounded-md text-sky-800 text-xs font-medium mb-1">
                                +34%
                            </div>
</div>
<div className="mt-3 h-1.5 w-full bg-sky-900/10 rounded-full overflow-hidden">
<div className="h-full bg-sky-500 rounded-full w-[34%]"></div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-3 bg-white rounded-[2rem] p-6 flex flex-col justify-between shadow-sm border border-slate-100 relative overflow-hidden group">
<div className="flex items-center gap-2 mb-4 z-10">
<span className="iconify text-slate-900 w-4 h-4" data-icon="lucide:gem" data-strokeWidth="1.5"></span>
<span className="font-medium text-slate-900 text-sm">Gioiello.ai</span>
</div>

<div className="flex items-end justify-between gap-1 h-24 mt-2 z-10">
<div className="w-full bg-slate-100 rounded-t-md h-[40%] group-hover:bg-rose-100 transition-colors duration-300"></div>
<div className="w-full bg-slate-100 rounded-t-md h-[70%] group-hover:bg-rose-200 transition-colors duration-500"></div>
<div className="w-full bg-slate-100 rounded-t-md h-[50%] group-hover:bg-rose-100 transition-colors duration-300"></div>
<div className="w-full bg-slate-800 rounded-t-md h-[100%] shadow-lg shadow-slate-200 relative group-hover:-translate-y-1 transition-transform duration-300">
<div className="w-full h-full flex items-start justify-center pt-2">
<span className="text-[10px] text-white font-medium">€9k</span>
</div>
</div>
<div className="w-full bg-slate-100 rounded-t-md h-[60%] group-hover:bg-rose-100 transition-colors duration-500"></div>
</div>
<div className="mt-4 z-10">
<h3 className="font-medium text-slate-900 leading-tight">Accesso Analitiche</h3>
<p className="text-xs text-slate-400 mt-2 leading-relaxed">Ottieni approfondimenti completi sulle prestazioni delle tue proprietà.</p>
</div>
</div>

<div className="md:col-span-5 flex flex-col bg-white border-slate-100 border rounded-[2rem] p-6 shadow-sm justify-between">
<div className="flex justify-between items-start mb-6">
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Statistiche Vendite</h3>
</div>
<div className="flex items-center gap-6 mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 border border-slate-100">
<span className="iconify text-xl" data-icon="lucide:layers" data-strokeWidth="1.5"></span>
</div>
<div className="">
<div className="text-xs text-slate-400 font-medium">Profitto Totale</div>
<div className="text-xl font-semibold text-slate-900 tracking-tight">€38.4K</div>
</div>
</div>
<div className="h-8 w-px bg-slate-100"></div>
<div className="bg-slate-50 rounded-xl px-3 py-2 border border-slate-100">
<div className="text-xs text-slate-400 mb-0.5">Visitatori</div>
<div className="flex items-center gap-1">
<span className="text-sm font-semibold text-slate-900">32K</span>
<span className="w-2 h-2 bg-green-500 rounded-full"></span>
</div>
</div>
</div>
<div className="flex gap-4 flex-1 min-h-0">
<div className="flex-1 flex flex-col min-w-0">
<div className="text-xs text-slate-400 font-medium mb-4">Grafico Visite</div>
<div className="flex-1 w-full relative min-h-[140px]">
<canvas id="salesLineChart" style={{width: '100%', height: '100%'}}></canvas>
</div>
</div>
<div className="bg-sky-50 rounded-2xl p-3 w-28 flex flex-col justify-between relative overflow-hidden shrink-0">
<div className="flex justify-between items-start z-10">
<span className="text-xs text-sky-700 font-medium">Tasso</span>
<span className="iconify text-sky-400 text-xs" data-icon="lucide:info" data-strokeWidth="1.5"></span>
</div>
<div className="relative z-10 mt-auto">
<div className="text-lg font-semibold text-sky-900 mb-1 tracking-tight">54.12%</div>
<div className="text-[10px] text-sky-600/70 font-medium leading-tight">Crescita</div>
</div>

<div className="absolute -bottom-6 -right-6 w-24 h-24 opacity-80 pointer-events-none">
<canvas id="rateDoughnutChart"></canvas>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 flex flex-col">
<div className="flex justify-between items-center mb-5">
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Messaggi</h3>
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-50 transition text-slate-400">
<span className="iconify" data-icon="lucide:more-horizontal" data-strokeWidth="1.5"></span>
</button>
</div>
<div className="flex flex-col gap-5">

<div className="flex items-start gap-3 group cursor-pointer">
<img alt="" className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-50 group-hover:ring-rose-100 transition-all" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline">
<div className="text-sm font-medium text-slate-900 truncate group-hover:text-rose-600 transition-colors">Sarah Jenkins</div>
<div className="w-5 h-5 flex items-center justify-center bg-[#ecfccb] text-[#4d7c0f] text-[10px] font-bold rounded-full">4</div>
</div>
<div className="text-xs text-slate-400 truncate">Richiesta prezzi per il loft...</div>
</div>
</div>

<div className="flex items-start gap-3 group cursor-pointer">
<img alt="" className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-50 group-hover:ring-rose-100 transition-all" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline">
<div className="text-sm font-medium text-slate-900 truncate group-hover:text-rose-600 transition-colors">Marco Chen</div>
<div className="w-5 h-5 flex items-center justify-center bg-[#ecfccb] text-[#4d7c0f] text-[10px] font-bold rounded-full">2</div>
</div>
<div className="text-xs text-slate-400 truncate">Ottima idea! Invio i documenti.</div>
</div>
</div>

<div className="flex items-start gap-3 group cursor-pointer">
<img alt="" className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-50 group-hover:ring-rose-100 transition-all" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline">
<div className="text-sm font-medium text-slate-900 truncate group-hover:text-rose-600 transition-colors">Elena Vance</div>
</div>
<div className="text-xs text-slate-400 truncate">Grazie, apprezzo l'aggiornamento!</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-3 z-10 flex flex-col gap-6 border-t lg:border-t-0 lg:border-l border-slate-200/60 lg:pl-8 pt-8 lg:pt-0">
<div className="flex items-center justify-between">
<h2 className="text-lg font-medium text-slate-900 tracking-tight">Bacheca Annunci</h2>
<button className="flex items-center gap-1 text-xs font-medium text-slate-500 bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-100 hover:bg-slate-50 transition-colors">
                    Recenti
                    <span className="iconify text-slate-400" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</button>
</div>

<div className="group hover:shadow-lg transition-all bg-white border-slate-100 border rounded-[2rem] p-3 shadow-sm">
<div className="relative aspect-[4/3] overflow-hidden rounded-3xl mb-4">
<img alt="Proprietà" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur text-slate-400 flex items-center justify-center rounded-full hover:text-rose-500 transition-colors shadow-sm">
<span className="iconify text-lg" data-icon="lucide:heart" data-strokeWidth="1.5"></span>
</button>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-start mb-1">
<div className="text-emerald-600 text-sm font-semibold">€2,850 <span className="text-slate-400 font-normal text-xs">/Mese</span></div>
<button className="text-slate-400 hover:text-slate-800 transition-colors">
<span className="iconify" data-icon="lucide:more-horizontal" data-strokeWidth="1.5"></span>
</button>
</div>
<h3 className="text-base font-medium text-slate-900 mb-0.5 tracking-tight">Villa sul Mare</h3>
<div className="text-xs text-slate-400 mb-4">Portofino, Italia 16034</div>
<div className="flex items-center justify-between border-t border-slate-100 pt-3">
<div className="flex items-center gap-1.5 text-slate-500" title="Stanze">
<span className="iconify text-slate-400" data-icon="lucide:bed" data-strokeWidth="1.5"></span>
<span className="text-xs font-medium">4</span>
</div>
<div className="flex items-center gap-1.5 text-slate-500" title="Bagni">
<span className="iconify text-slate-400" data-icon="lucide:bath" data-strokeWidth="1.5"></span>
<span className="text-xs font-medium">3</span>
</div>
<div className="flex items-center gap-1.5 text-slate-500" title="Area">
<span className="iconify text-slate-400" data-icon="lucide:ruler" data-strokeWidth="1.5"></span>
<span className="text-xs font-medium">320mq</span>
</div>
</div>
</div>
</div>

<div className="group hover:shadow-lg transition-all bg-white border-slate-100 border rounded-[2rem] p-3 shadow-sm">
<div className="relative aspect-[4/3] overflow-hidden rounded-3xl mb-4">
<img alt="Proprietà" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur text-slate-400 flex items-center justify-center rounded-full hover:text-rose-500 transition-colors shadow-sm">
<span className="iconify text-lg" data-icon="lucide:heart" data-strokeWidth="1.5"></span>
</button>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-start mb-1">
<div className="text-emerald-600 text-sm font-semibold">€845 <span className="text-slate-400 font-normal text-xs">/Mese</span></div>
<button className="text-slate-400 hover:text-slate-800 transition-colors">
<span className="iconify" data-icon="lucide:more-horizontal" data-strokeWidth="1.5"></span>
</button>
</div>
<h3 className="text-base font-medium text-slate-900 mb-0.5 tracking-tight">Loft Urbano</h3>
<div className="text-xs text-slate-400 mb-4">Milano, Italia 20121</div>
<div className="flex items-center justify-between border-t border-slate-100 pt-3">
<div className="flex items-center gap-1.5 text-slate-500">
<span className="iconify text-slate-400" data-icon="lucide:bed" data-strokeWidth="1.5"></span>
<span className="text-xs font-medium">2</span>
</div>
<div className="flex items-center gap-1.5 text-slate-500">
<span className="iconify text-slate-400" data-icon="lucide:bath" data-strokeWidth="1.5"></span>
<span className="text-xs font-medium">1</span>
</div>
<div className="flex items-center gap-1.5 text-slate-500">
<span className="iconify text-slate-400" data-icon="lucide:ruler" data-strokeWidth="1.5"></span>
<span className="text-xs font-medium">85mq</span>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
