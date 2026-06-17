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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            // Stream Counter Animation
            const counters = document.querySelectorAll('.stream-count');
            
            counters.forEach(counter => {
                const targetStr = counter.getAttribute('data-target');
                const target = parseInt(targetStr, 10);
                // Start slightly below target to simulate realistic live update
                let current = target - Math.floor(Math.random() * 50) - 20; 
                
                const updateCounter = () => {
                    if (current < target) {
                        current += Math.ceil((target - current) / 10) + Math.floor(Math.random() * 3);
                        if(current > target) current = target;
                        counter.innerText = current.toLocaleString();
                        setTimeout(updateCounter, 200 + Math.random() * 800); // Random delay between updates
                    } else {
                        counter.innerText = target.toLocaleString();
                    }
                };
                
                // Initial format
                counter.innerText = current.toLocaleString();
                // Start animation with a slight delay
                setTimeout(updateCounter, 1000 + Math.random() * 2000);
            });

            // Preview Button Toggle Interaction
            const previewBtns = document.querySelectorAll('.preview-btn');
            
            previewBtns.forEach(btn => {
                let isPlaying = false;
                
                btn.addEventListener('click', function() {
                    isPlaying = !isPlaying;
                    const icon = this.querySelector('iconify-icon');
                    const text = this.querySelector('span');
                    const waveform = this.parentElement.querySelector('.waveform-display');
                    
                    if (isPlaying) {
                        // Reset all other buttons
                        previewBtns.forEach(otherBtn => {
                            if(otherBtn !== this) {
                                const otherIcon = otherBtn.querySelector('iconify-icon');
                                const otherText = otherBtn.querySelector('span');
                                const otherWaveform = otherBtn.parentElement.querySelector('.waveform-display');
                                otherIcon.setAttribute('icon', 'solar:play-linear');
                                otherText.innerText = 'Preview';
                                otherWaveform.classList.remove('flex');
                                otherWaveform.classList.add('hidden');
                                otherBtn.classList.remove('bg-white/10', 'border-white/20');
                            }
                        });

                        icon.setAttribute('icon', 'solar:pause-linear');
                        text.innerText = 'Playing';
                        waveform.classList.remove('hidden');
                        waveform.classList.add('flex');
                        this.classList.add('bg-white/10', 'border-white/20');
                    } else {
                        icon.setAttribute('icon', 'solar:play-linear');
                        text.innerText = 'Preview';
                        waveform.classList.remove('flex');
                        waveform.classList.add('hidden');
                        this.classList.remove('bg-white/10', 'border-white/20');
                    }
                });
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
      

<svg aria-hidden="true" focusable="false" style={{width: '0', height: '0', position: 'absolute'}}>
<defs>
<lineargradient id="blue-glow" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#3b82f6" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#3b82f6" stop-opacity="0"></stop>
</lineargradient>
<lineargradient id="purple-fade" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#a855f7" stop-opacity="0.4"></stop>
<stop offset="100%" stop-color="#3b82f6" stop-opacity="0.1"></stop>
</lineargradient>
</defs>
</svg>
<main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 flex flex-col gap-10">

<header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">

<div className="flex items-center gap-5">
<div className="relative w-16 h-16 rounded-full p-[1px] bg-gradient-to-br from-neutral-700 to-neutral-900 shadow-[0_0_20px_rgba(255,255,255,0.03)]">
<div className="w-full h-full rounded-full bg-neutral-900 flex items-center justify-center overflow-hidden relative">

<div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-blue-900/40 opacity-50"></div>
<span className="text-xl font-semibold tracking-tight text-white relative z-10">NB</span>
</div>

<div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-[#050505] flex items-center justify-center">
<div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
</div>
</div>
<div>
<h1 className="text-2xl font-semibold tracking-tight text-white leading-tight">NorthSideBaby</h1>
<div className="flex items-center gap-2 mt-1">
<span className="text-sm font-medium text-neutral-400">Hip-Hop / Rap</span>
<span className="w-1 h-1 rounded-full bg-neutral-700"></span>
<span className="text-sm font-medium text-blue-400">Active Artist</span>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-5 relative overflow-hidden group min-w-[240px]">
<div className="absolute -right-8 -top-8 w-24 h-24 bg-blue-500/10 blur-[40px] group-hover:bg-blue-500/20 transition-colors duration-700"></div>
<div className="flex flex-col relative z-10">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Balance</span>
<span className="text-3xl font-semibold tracking-tight text-white mt-1">$1,012.00</span>
<span className="text-xs font-medium text-neutral-400 mt-1">Available account balance</span>
</div>
</div>
</header>
<hr className="border-t border-white/5"/>

<section className="flex flex-col gap-5">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight text-white">Music</h2>
<button className="text-xs font-medium text-neutral-400 hover:text-white transition-colors flex items-center gap-1">
                    View All <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="glass-panel rounded-xl p-3 flex items-center gap-4 hover:bg-white/[0.02] transition-colors relative overflow-hidden group">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 opacity-50"></div>
<iconify-icon className="text-lg text-neutral-500 relative z-10" icon="solar:vinyl-linear"></iconify-icon>
</div>
<div className="flex-grow min-w-0">
<h3 className="text-sm font-semibold text-white truncate group-hover:text-blue-100 transition-colors">Without U</h3>
<p className="text-xs font-medium text-neutral-500 mt-0.5 truncate">Sept 2024 • 2:40</p>
</div>
<div className="flex flex-col items-end flex-shrink-0">
<svg className="w-10 h-4 mb-1" preserveaspectratio="none" viewbox="0 0 50 15">
<path className="opacity-60" d="M0,12 L10,8 L20,10 L30,5 L40,8 L50,2" fill="none" stroke="#3b82f6" strokeWidth="1.5"></path>
<path className="sparkline-gradient" d="M0,12 L10,8 L20,10 L30,5 L40,8 L50,2 L50,15 L0,15 Z"></path>
</svg>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-[10px] text-blue-400" icon="solar:chart-line-linear"></iconify-icon>
<span className="text-xs font-medium text-neutral-300 stream-count" data-target="148230">148,230</span>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-3 flex items-center gap-4 hover:bg-white/[0.02] transition-colors relative overflow-hidden group">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 opacity-50"></div>
<iconify-icon className="text-lg text-neutral-500 relative z-10" icon="solar:vinyl-linear"></iconify-icon>
</div>
<div className="flex-grow min-w-0">
<h3 className="text-sm font-semibold text-white truncate group-hover:text-blue-100 transition-colors">everything pure</h3>
<p className="text-xs font-medium text-neutral-500 mt-0.5 truncate">Oct 2024 • 2:20</p>
</div>
<div className="flex flex-col items-end flex-shrink-0">
<svg className="w-10 h-4 mb-1" preserveaspectratio="none" viewbox="0 0 50 15">
<path className="opacity-60" d="M0,13 L10,11 L20,9 L30,7 L40,5 L50,3" fill="none" stroke="#3b82f6" strokeWidth="1.5"></path>
<path className="sparkline-gradient" d="M0,13 L10,11 L20,9 L30,7 L40,5 L50,3 L50,15 L0,15 Z"></path>
</svg>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-[10px] text-blue-400" icon="solar:chart-line-linear"></iconify-icon>
<span className="text-xs font-medium text-neutral-300 stream-count" data-target="102410">102,410</span>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-3 flex items-center gap-4 hover:bg-white/[0.02] transition-colors relative overflow-hidden group">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 opacity-50"></div>
<iconify-icon className="text-lg text-neutral-500 relative z-10" icon="solar:vinyl-linear"></iconify-icon>
</div>
<div className="flex-grow min-w-0">
<h3 className="text-sm font-semibold text-white truncate group-hover:text-blue-100 transition-colors">Good Day$ (7 Nightz)</h3>
<p className="text-xs font-medium text-neutral-500 mt-0.5 truncate">Sept 2024 • 2:30</p>
</div>
<div className="flex flex-col items-end flex-shrink-0">
<svg className="w-10 h-4 mb-1" preserveaspectratio="none" viewbox="0 0 50 15">
<path className="opacity-60" d="M0,10 L15,12 L30,8 L40,6 L50,4" fill="none" stroke="#3b82f6" strokeWidth="1.5"></path>
<path className="sparkline-gradient" d="M0,10 L15,12 L30,8 L40,6 L50,4 L50,15 L0,15 Z"></path>
</svg>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-[10px] text-blue-400" icon="solar:chart-line-linear"></iconify-icon>
<span className="text-xs font-medium text-neutral-300 stream-count" data-target="84900">84,900</span>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-3 flex items-center gap-4 hover:bg-white/[0.02] transition-colors relative overflow-hidden group">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 opacity-50"></div>
<iconify-icon className="text-lg text-neutral-500 relative z-10" icon="solar:vinyl-linear"></iconify-icon>
</div>
<div className="flex-grow min-w-0">
<h3 className="text-sm font-semibold text-white truncate group-hover:text-blue-100 transition-colors">no luv $ong</h3>
<p className="text-xs font-medium text-neutral-500 mt-0.5 truncate">Dec 2024 • 2:35</p>
</div>
<div className="flex flex-col items-end flex-shrink-0">
<svg className="w-10 h-4 mb-1" preserveaspectratio="none" viewbox="0 0 50 15">
<path className="opacity-60" d="M0,14 L20,10 L30,12 L50,5" fill="none" stroke="#3b82f6" strokeWidth="1.5"></path>
<path className="sparkline-gradient" d="M0,14 L20,10 L30,12 L50,5 L50,15 L0,15 Z"></path>
</svg>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-[10px] text-blue-400" icon="solar:chart-line-linear"></iconify-icon>
<span className="text-xs font-medium text-neutral-300 stream-count" data-target="63210">63,210</span>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-3 flex items-center gap-4 hover:bg-white/[0.02] transition-colors relative overflow-hidden group">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 opacity-50"></div>
<iconify-icon className="text-lg text-neutral-500 relative z-10" icon="solar:vinyl-linear"></iconify-icon>
</div>
<div className="flex-grow min-w-0">
<h3 className="text-sm font-semibold text-white truncate group-hover:text-blue-100 transition-colors">rock$tar</h3>
<p className="text-xs font-medium text-neutral-500 mt-0.5 truncate">May 2025 • 2:30</p>
</div>
<div className="flex flex-col items-end flex-shrink-0">
<svg className="w-10 h-4 mb-1" preserveaspectratio="none" viewbox="0 0 50 15">
<path className="opacity-60" d="M0,10 L10,12 L20,6 L30,8 L40,3 L50,1" fill="none" stroke="#3b82f6" strokeWidth="1.5"></path>
<path className="sparkline-gradient" d="M0,10 L10,12 L20,6 L30,8 L40,3 L50,1 L50,15 L0,15 Z"></path>
</svg>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-[10px] text-blue-400" icon="solar:chart-line-linear"></iconify-icon>
<span className="text-xs font-medium text-neutral-300 stream-count" data-target="175320">175,320</span>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-3 flex items-center gap-4 hover:bg-white/[0.02] transition-colors relative overflow-hidden group">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 opacity-50"></div>
<iconify-icon className="text-lg text-neutral-500 relative z-10" icon="solar:vinyl-linear"></iconify-icon>
</div>
<div className="flex-grow min-w-0">
<h3 className="text-sm font-semibold text-white truncate group-hover:text-blue-100 transition-colors">Dangerou$</h3>
<p className="text-xs font-medium text-neutral-500 mt-0.5 truncate">2025 • 2:45</p>
</div>
<div className="flex flex-col items-end flex-shrink-0">
<svg className="w-10 h-4 mb-1" preserveaspectratio="none" viewbox="0 0 50 15">
<path className="opacity-60" d="M0,12 L15,10 L25,11 L40,6 L50,4" fill="none" stroke="#3b82f6" strokeWidth="1.5"></path>
<path className="sparkline-gradient" d="M0,12 L15,10 L25,11 L40,6 L50,4 L50,15 L0,15 Z"></path>
</svg>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-[10px] text-blue-400" icon="solar:chart-line-linear"></iconify-icon>
<span className="text-xs font-medium text-neutral-300 stream-count" data-target="92760">92,760</span>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-6 mt-4">
<h2 className="text-xl font-semibold tracking-tight text-white">Reserved Beats</h2>

<div className="bg-[#0b1221] border border-purple-500/20 rounded-2xl relative overflow-hidden flex flex-col md:flex-row shadow-[0_4px_30px_rgba(0,0,0,0.5)]">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/10 to-blue-900/10 pointer-events-none"></div>
<div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent -translate-y-1/2 translate-x-1/3 pointer-events-none blur-3xl"></div>
<div className="p-6 md:p-8 flex-grow relative z-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/5">
<div className="flex items-start justify-between gap-4 mb-4">
<span className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/10 px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold text-purple-400 ring-1 ring-inset ring-purple-500/20">
<iconify-icon icon="solar:star-fall-linear"></iconify-icon> Limited Offer
                        </span>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-2">Contemporary Rap Beat Bundle</h3>
<p className="text-sm font-medium text-neutral-400 max-w-lg leading-relaxed">Three modern rap instrumentals reserved for licensing.</p>
<div className="mt-6 flex items-center gap-2">
<div className="flex items-center gap-2 text-red-400 text-xs font-semibold animate-soft-pulse bg-red-500/10 border border-red-500/20 px-3 py-1.5 rounded-md w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                            Reservation Expires Today — March 30, 2026
                        </div>
</div>
</div>
<div className="p-6 md:p-8 md:w-80 flex-shrink-0 flex flex-col justify-center items-start md:items-end relative z-10 bg-black/20">
<div className="flex flex-col items-start md:items-end">
<span className="text-sm font-medium text-neutral-500 line-through decoration-neutral-600">$3,250.00</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="text-3xl font-semibold tracking-tight text-white">$2,015.00</span>
<span className="text-xs font-medium text-neutral-400">USD</span>
</div>
</div>
<button className="mt-6 w-full bg-white text-black hover:bg-neutral-200 transition-colors py-3 px-4 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                        Secure License Bundle <iconify-icon className="text-lg" icon="solar:shield-check-linear"></iconify-icon>
</button>
<p className="text-[10px] text-neutral-500 mt-3 text-center md:text-right w-full font-medium">All stems and commercial rights included.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-2">

<div className="glass-panel rounded-2xl p-4 flex flex-col group border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300">
<div className="aspect-square w-full rounded-xl bg-neutral-900 border border-white/5 mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-[#050505] group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-20">

<svg height="40%" preserveaspectratio="none" viewbox="0 0 100 100" width="100%">
<path className="opacity-50" d="M0,50 Q10,20 20,50 T40,50 T60,50 T80,50 T100,50" fill="none" stroke="white" strokeWidth="1"></path>
<path className="opacity-50" d="M0,50 Q10,80 20,50 T40,50 T60,50 T80,50 T100,50" fill="none" stroke="white" strokeWidth="1"></path>
</svg>
</div>
<div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-[#050505]/80 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
<span className="w-1 h-1 rounded-full bg-red-500 animate-[pulse_1.5s_ease-in-out_infinite]"></span>
<span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-300">Expires Today</span>
</div>
</div>
<div className="flex justify-between items-start mb-1 gap-2">
<h3 className="text-base font-semibold tracking-tight text-white truncate">Midnight Skyline</h3>
<span className="text-sm font-semibold text-white bg-white/5 px-2 py-0.5 rounded border border-white/5">$850</span>
</div>
<p className="text-xs font-medium text-neutral-400 mb-4">Producer: Aura Productions</p>
<div className="flex gap-2 mb-6">
<span className="bg-white/5 border border-white/5 rounded px-2 py-1 text-[10px] font-medium text-neutral-300 uppercase tracking-wide">142 BPM</span>
<span className="bg-white/5 border border-white/5 rounded px-2 py-1 text-[10px] font-medium text-neutral-300 uppercase tracking-wide">F Minor</span>
</div>
<div className="mt-auto grid grid-cols-2 gap-2 relative">
<button className="flex items-center justify-center gap-2 bg-neutral-800/50 hover:bg-neutral-800 border border-white/5 rounded-lg py-2 text-xs font-semibold text-white transition-colors preview-btn">
<iconify-icon className="text-sm" icon="solar:play-linear"></iconify-icon>
<span>Preview</span>
</button>
<button className="bg-white/10 hover:bg-white/15 border border-white/10 text-white rounded-lg py-2 text-xs font-semibold transition-colors">
                            Purchase
                        </button>

<div className="absolute -top-10 left-0 right-0 h-6 hidden items-center justify-center gap-1 waveform-display">
<div className="wave-bar h-full"></div>
<div className="wave-bar h-full"></div>
<div className="wave-bar h-full"></div>
<div className="wave-bar h-full"></div>
<div className="wave-bar h-full"></div>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-4 flex flex-col group border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300">
<div className="aspect-square w-full rounded-xl bg-neutral-900 border border-white/5 mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-[#050505] group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-20">
<svg height="40%" preserveaspectratio="none" viewbox="0 0 100 100" width="100%">
<path className="opacity-50" d="M0,50 Q15,10 30,50 T60,50 T90,50 T100,50" fill="none" stroke="white" strokeWidth="1"></path>
<path className="opacity-50" d="M0,50 Q15,90 30,50 T60,50 T90,50 T100,50" fill="none" stroke="white" strokeWidth="1"></path>
</svg>
</div>
<div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-[#050505]/80 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
<span className="w-1 h-1 rounded-full bg-red-500 animate-[pulse_1.5s_ease-in-out_infinite]"></span>
<span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-300">Expires Today</span>
</div>
</div>
<div className="flex justify-between items-start mb-1 gap-2">
<h3 className="text-base font-semibold tracking-tight text-white truncate">Neon District</h3>
<span className="text-sm font-semibold text-white bg-white/5 px-2 py-0.5 rounded border border-white/5">$850</span>
</div>
<p className="text-xs font-medium text-neutral-400 mb-4">Producer: Aura Productions</p>
<div className="flex gap-2 mb-6">
<span className="bg-white/5 border border-white/5 rounded px-2 py-1 text-[10px] font-medium text-neutral-300 uppercase tracking-wide">130 BPM</span>
<span className="bg-white/5 border border-white/5 rounded px-2 py-1 text-[10px] font-medium text-neutral-300 uppercase tracking-wide">C# Minor</span>
</div>
<div className="mt-auto grid grid-cols-2 gap-2 relative">
<button className="flex items-center justify-center gap-2 bg-neutral-800/50 hover:bg-neutral-800 border border-white/5 rounded-lg py-2 text-xs font-semibold text-white transition-colors preview-btn">
<iconify-icon className="text-sm" icon="solar:play-linear"></iconify-icon>
<span>Preview</span>
</button>
<button className="bg-white/10 hover:bg-white/15 border border-white/10 text-white rounded-lg py-2 text-xs font-semibold transition-colors">
                            Purchase
                        </button>
<div className="absolute -top-10 left-0 right-0 h-6 hidden items-center justify-center gap-1 waveform-display">
<div className="wave-bar h-full"></div>
<div className="wave-bar h-full"></div>
<div className="wave-bar h-full"></div>
<div className="wave-bar h-full"></div>
<div className="wave-bar h-full"></div>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-4 flex flex-col group border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300">
<div className="aspect-square w-full rounded-xl bg-neutral-900 border border-white/5 mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-[#050505] group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-20">
<svg height="40%" preserveaspectratio="none" viewbox="0 0 100 100" width="100%">
<path className="opacity-50" d="M0,50 Q20,30 40,50 T80,50 T100,50" fill="none" stroke="white" strokeWidth="1"></path>
<path className="opacity-50" d="M0,50 Q20,70 40,50 T80,50 T100,50" fill="none" stroke="white" strokeWidth="1"></path>
</svg>
</div>
<div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-[#050505]/80 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
<span className="w-1 h-1 rounded-full bg-red-500 animate-[pulse_1.5s_ease-in-out_infinite]"></span>
<span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-300">Expires Today</span>
</div>
</div>
<div className="flex justify-between items-start mb-1 gap-2">
<h3 className="text-base font-semibold tracking-tight text-white truncate">Velvet Bounce</h3>
<span className="text-sm font-semibold text-white bg-white/5 px-2 py-0.5 rounded border border-white/5">$850</span>
</div>
<p className="text-xs font-medium text-neutral-400 mb-4">Producer: Aura Productions</p>
<div className="flex gap-2 mb-6">
<span className="bg-white/5 border border-white/5 rounded px-2 py-1 text-[10px] font-medium text-neutral-300 uppercase tracking-wide">105 BPM</span>
<span className="bg-white/5 border border-white/5 rounded px-2 py-1 text-[10px] font-medium text-neutral-300 uppercase tracking-wide">G Minor</span>
</div>
<div className="mt-auto grid grid-cols-2 gap-2 relative">
<button className="flex items-center justify-center gap-2 bg-neutral-800/50 hover:bg-neutral-800 border border-white/5 rounded-lg py-2 text-xs font-semibold text-white transition-colors preview-btn">
<iconify-icon className="text-sm" icon="solar:play-linear"></iconify-icon>
<span>Preview</span>
</button>
<button className="bg-white/10 hover:bg-white/15 border border-white/10 text-white rounded-lg py-2 text-xs font-semibold transition-colors">
                            Purchase
                        </button>
<div className="absolute -top-10 left-0 right-0 h-6 hidden items-center justify-center gap-1 waveform-display">
<div className="wave-bar h-full"></div>
<div className="wave-bar h-full"></div>
<div className="wave-bar h-full"></div>
<div className="wave-bar h-full"></div>
<div className="wave-bar h-full"></div>
</div>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
