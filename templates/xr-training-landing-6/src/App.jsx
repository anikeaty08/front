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



        document.addEventListener('DOMContentLoaded', () => {
            const categories = ['clarity', 'composure', 'persuasion', 'structure'];
            const sysPhrases = [
                "Re-evaluating primary metrics due to high variance anomaly.",
                "Syntax fragmentation confirmed in secondary buffer.",
                "Compensatory acoustic shift identified; mapping trajectory.",
                "Baseline physical lock maintained despite pressure surge.",
                "Ocular dispersion widening to peripheral vectors.",
                "Volume amplification detected in persuasion framework."
            ];

            // Animate number ticker
            function animateValue(obj, start, end, duration) {
                let startTimestamp = null;
                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    obj.innerHTML = Math.floor(progress * (end - start) + start);
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    }
                };
                window.requestAnimationFrame(step);
            }

            function systemLoop() {
                // Randomly generate event payload
                const target = categories[Math.floor(Math.random() * categories.length)];
                const latency = (Math.random() * 15 + 5).toFixed(1);
                const confidence = (Math.random() * 10 + 89).toFixed(1);
                const targetScore = Math.floor(Math.random() * 45 + 50);
                const selectedPhrase = sysPhrases[Math.floor(Math.random() * sysPhrases.length)];

                // +0ms: Telemetry Injection (Interrogation Log)
                setTimeout(() => {
                    const logContainer = document.getElementById('telemetry-log-container');
                    if (logContainer) {
                        const newLog = document.createElement('div');
                        newLog.className = 'relative z-10 flex space-x-4 mb-4 transition-all duration-700 opacity-0 -translate-y-4 shadow-sm';
                        newLog.innerHTML = `
                            <div class="w-8 h-8 rounded-md bg-blue-600 flex items-center justify-center flex-shrink-0 text-white font-mono text-xs shadow-sm flicker-once">SYS</div>
                            <div class="flex-1">
                                <div class="font-mono text-xs text-gray-400 mb-2 flex justify-between">
                                    <span>T+ ${new Date().toISOString().substring(11, 23)}</span>
                                    <span class="text-emerald-500 border border-emerald-200 bg-emerald-50 px-1 rounded uppercase">UPDATE_${target.toUpperCase()}</span>
                                </div>
                                <p class="text-sm font-medium tracking-tight text-[#111111] mb-2 bg-white p-3 border border-gray-100 rounded">
                                    "${selectedPhrase}"
                                </p>
                            </div>
                        `;
                        logContainer.prepend(newLog);

                        // Trigger reflow for animation
                        requestAnimationFrame(() => {
                            newLog.classList.remove('opacity-0', '-translate-y-4');
                            newLog.classList.add('opacity-100', 'translate-y-0');
                        });

                        // Apply non-destructive visual decay downwards
                        const children = Array.from(logContainer.children);
                        children.forEach((child, index) => {
                            if (index === 1) {
                                child.classList.add('opacity-70', 'blur-[0.5px]', 'scale-[0.99]');
                                const sysIcon = child.querySelector('.bg-blue-600');
                                if (sysIcon) { sysIcon.classList.replace('bg-blue-600', 'bg-[#111111]'); }
                            } else if (index === 2) {
                                child.classList.replace('opacity-70', 'opacity-30');
                                child.classList.replace('blur-[0.5px]', 'blur-[1.5px]');
                                child.classList.replace('scale-[0.99]', 'scale-[0.98]');
                            } else if (index > 2) {
                                child.style.opacity = '0';
                                setTimeout(() => child.remove(), 700);
                            }
                        });
                    }

                    // Top header latency update
                    const latencyEl = document.getElementById('sys-latency');
                    if (latencyEl) {
                        latencyEl.classList.add('text-emerald-400');
                        latencyEl.innerHTML = `<iconify-icon icon="solar:wifi-router-linear"></iconify-icon><span>LATENCY: ${latency}ms</span>`;
                        setTimeout(() => latencyEl.classList.remove('text-emerald-400'), 400);
                    }
                }, 0);

                // +200ms: Connectors and Data Paths Activate
                setTimeout(() => {
                    document.querySelectorAll('.svg-connector').forEach(path => {
                        path.classList.add('stroke-blue-400', 'drop-shadow-sm');
                        path.style.strokeWidth = '0.8';
                        setTimeout(() => {
                            path.classList.remove('stroke-blue-400', 'drop-shadow-sm');
                            path.style.strokeWidth = '0.3';
                        }, 500);
                    });

                    document.querySelectorAll('.sys-node').forEach(node => {
                        node.classList.add('border-blue-200', 'bg-blue-50/20');
                        setTimeout(() => node.classList.remove('border-blue-200', 'bg-blue-50/20'), 500);
                    });
                }, 200);

                // +400ms: Action Engine (Parallel Column UI updates)
                setTimeout(() => {
                    const overlay = document.getElementById(`overlay-${target}`);
                    if (overlay) {
                        overlay.classList.remove('opacity-0');
                        overlay.classList.add('opacity-100', 'flicker-once');
                        setTimeout(() => {
                            overlay.classList.remove('opacity-100', 'flicker-once');
                            overlay.classList.add('opacity-0');
                        }, 600);
                    }

                    const scoreEl = document.getElementById(`score-${target}`);
                    if (scoreEl) {
                        const current = parseInt(scoreEl.innerText);
                        animateValue(scoreEl, current, targetScore, 500);
                    }

                    const confEl = document.getElementById(`conf-${target}`);
                    if (confEl) {
                        confEl.classList.add('text-[#111111]');
                        confEl.innerText = `CONF. ${confidence}%`;
                        setTimeout(() => confEl.classList.remove('text-[#111111]'), 400);
                    }

                    // Update abstract blend bars visually
                    const blend = document.getElementById(`blend-${categories.indexOf(target) + 1}`);
                    if (blend) {
                        blend.style.width = Math.random() * 40 + 10 + '%';
                    }
                }, 400);

                // +700ms: Tickers and Global Micro-States Sync
                setTimeout(() => {
                    const loadEl = document.getElementById('sys-load');
                    const vectorsEl = document.getElementById('sys-vectors');
                    const liveInstances = document.getElementById('live-instances');
                    
                    if (loadEl) loadEl.innerText = `SYS_LOAD: ${Math.floor(Math.random() * 35 + 15)}%`;
                    if (vectorsEl) vectorsEl.innerText = `VECTORS: ${(Math.floor(Math.random() * 5000 + 3000)).toLocaleString()}`;
                    if (liveInstances) liveInstances.innerText = (Math.floor(Math.random() * 1000 + 4000)).toLocaleString();

                    const tickerText = document.getElementById('ticker-text');
                    if (tickerText) {
                        tickerText.classList.add('text-[#111111]', 'flicker-once');
                        tickerText.innerText = `BUFFER: RE-SYNC [${target.toUpperCase()}]`;
                        setTimeout(() => {
                            tickerText.classList.remove('text-[#111111]', 'flicker-once');
                            tickerText.innerText = 'BUFFER: SYNCHRONIZED';
                        }, 1200);
                    }

                    const timeEl = document.getElementById('live-time');
                    if (timeEl) {
                        const d = new Date();
                        timeEl.innerText = `T+ [00:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}.${Math.floor(Math.random()*9)}]`;
                    }
                }, 700);

                // Re-arm loop (dynamic unpredictability)
                setTimeout(systemLoop, Math.random() * 2500 + 2000);
            }

            // Initiate Continuous System Loop
            setTimeout(systemLoop, 1500);
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
      

<div className="fixed inset-0 bg-sys-grid pointer-events-none z-0"></div>
<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
<div className="w-full h-px bg-gradient-to-r from-transparent via-[#111111] to-transparent animate-scan absolute top-0"></div>
<div className="w-px h-full bg-gradient-to-b from-transparent via-[#2563EB] to-transparent animate-sweep absolute left-1/4 opacity-10"></div>
</div>

<header className="fixed top-0 w-full bg-[#FAFAFA]/80 backdrop-blur-xl border-b border-gray-200 z-50">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center space-x-4">
<div className="flex items-center space-x-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-calm-fast"></div>
<span className="font-medium tracking-tight text-sm uppercase">SpeakXR</span>
</div>
<div className="hidden md:flex items-center space-x-3 border-l border-gray-200 pl-4 text-xs font-mono text-gray-400">
<span className="flex items-center space-x-1"><iconify-icon icon="solar:cpu-linear"></iconify-icon><span>NODE_04</span></span>
<span className="flex items-center space-x-1 text-emerald-600 transition-colors duration-300" id="sys-latency"><iconify-icon icon="solar:wifi-router-linear"></iconify-icon><span>LATENCY: 12ms</span></span>
</div>
</div>
<div className="flex items-center space-x-6 text-sm">
<div className="hidden md:flex flex-col items-end mr-4">
<span className="font-mono text-xs text-[#111111] uppercase leading-none mb-0.5">SYS.STATUS</span>
<span className="font-mono text-xs text-emerald-600 uppercase leading-none">PARALLEL_ACTIVE</span>
</div>
<button className="text-gray-500 hover:text-[#111111] transition-colors font-medium text-xs uppercase tracking-wide">Docs_</button>
<button className="bg-[#111111] text-white px-5 py-2 rounded-md font-medium text-xs uppercase tracking-wide hover:bg-gray-800 transition-colors shadow-sm relative overflow-hidden group">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
<span className="relative z-10 flex items-center space-x-2">
<iconify-icon icon="solar:power-button-linear"></iconify-icon>
<span>Initialize</span>
</span>
</button>
</div>
</div>
</header>

<section className="pt-36 pb-24 px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-center relative z-10">
<div className="max-w-3xl mb-16 relative">
<div className="flex items-center space-x-3 mb-6">
<span className="font-mono text-xs bg-gray-100 text-gray-500 px-2 py-1 border border-gray-200 rounded uppercase tracking-widest flex items-center space-x-2 transition-all duration-300" id="session-badge">
<span className="w-1.5 h-1.5 bg-blue-500 rounded-full pulse-calm"></span>
<span>Session_Active</span>
</span>
<span className="font-mono text-xs text-gray-400">IDX // 894.22.A</span>
</div>
<h1 className="text-5xl md:text-6xl font-medium tracking-tight leading-tight mb-6 relative">
                Train how you perform<br/>under pressure.
                <div className="absolute -left-6 top-2 bottom-2 w-1 bg-gradient-to-b from-gray-300 to-transparent animate-pulse"></div>
</h1>
<p className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed font-light">
                Simulate real social pressure in XR. Get analyzed by a panel of specialized intelligence reconstructing your behavior in parallel.
            </p>
<div className="flex items-center space-x-4">
<button className="bg-[#111111] text-white px-6 py-3 rounded-md font-medium text-sm flex items-center space-x-2 hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
<span>Initiate Sequence</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="flex flex-col text-xs font-mono text-gray-400 border-l border-gray-200 pl-4">
<span>REQ: XR_HEADSET</span>
<span className="text-gray-500">SYS_READY</span>
</div>
</div>
</div>

<div className="border border-gray-200 bg-white shadow-sm overflow-hidden flex flex-col relative group">

<div className="bg-[#FAFAFA] border-b border-gray-200 p-3 flex items-center justify-between relative z-20">
<div className="flex items-center space-x-4">
<div className="flex items-center space-x-2 bg-white border border-gray-200 px-2 py-1 rounded shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 pulse-calm-fast"></span>
<span className="font-mono text-xs text-gray-600">LIVE EXTRACTION</span>
</div>
<span className="font-mono text-xs text-gray-400 border-l border-gray-200 pl-4">SESSION_094 // PR_ENV</span>
</div>
<div className="flex items-center space-x-4">
<span className="font-mono text-xs text-gray-400 hidden md:inline-block transition-colors duration-300" id="ticker-text">BUFFER: SYNCHRONIZED</span>
<div className="font-mono text-xs text-[#111111] bg-gray-100 px-3 py-1 rounded border border-gray-200 flex items-center space-x-2">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
<span id="live-time">T+ [00:14:22.4]</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100 relative bg-white">

<div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
<div className="w-full h-1 bg-gradient-to-r from-transparent via-[#2563EB]/10 to-transparent animate-scan"></div>
</div>

<div className="p-5 relative overflow-hidden bg-gradient-to-b from-transparent to-[#2563EB]/5 hover:bg-[#FAFAFA] transition-colors z-10" id="col-clarity">
<div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 pointer-events-none" id="overlay-clarity">
<div className="font-mono text-xs bg-white border border-[#2563EB]/30 text-[#2563EB] px-2 py-1 rounded shadow-sm flex items-center space-x-1.5">
<span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full pulse-calm-fast"></span><span>PROCESSING...</span>
</div>
</div>
<div className="flex justify-between items-start mb-6">
<div className="flex items-center space-x-2 text-[#2563EB]">
<iconify-icon icon="solar:text-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs uppercase tracking-widest font-medium">Clarity</span>
</div>
<div className="text-right">
<div className="font-mono text-xs text-gray-400 transition-all duration-300" id="conf-clarity">CONF. 98%</div>
<div className="font-mono text-xs text-red-500 flex items-center justify-end"><iconify-icon icon="solar:arrow-right-down-linear"></iconify-icon> 2.4</div>
</div>
</div>
<div className="flex items-end space-x-2 mb-4">
<span className="font-mono text-4xl font-extralight text-[#111111] leading-none transition-all duration-300" id="score-clarity">62</span>
<div className="flex flex-col mb-0.5">
<span className="font-mono text-xs text-gray-400 uppercase leading-none border-b border-gray-200 pb-0.5 mb-0.5">Idx</span>
<span className="font-mono text-xs text-gray-500 leading-none">Lvl. 3</span>
</div>
</div>
<p className="text-xs text-gray-600 mb-6 min-h-[48px] leading-relaxed font-light">Syntax fragmentation detected upon high-pressure interruption.</p>
<div className="border-l border-[#2563EB]/40 pl-3 relative bg-white p-3 shadow-sm border-t border-r border-b border-gray-100">
<div className="flex justify-between items-center mb-2">
<div className="font-mono text-xs text-[#2563EB] bg-[#2563EB]/10 px-1.5 rounded">T-REF: 00:14:20.1</div>
<iconify-icon className="text-gray-300" icon="solar:soundwave-linear"></iconify-icon>
</div>
<p className="text-xs font-mono text-gray-700">"We should... if you look at..."</p>
</div>
</div>

<div className="p-5 relative overflow-hidden bg-gradient-to-b from-transparent to-[#7C3AED]/5 hover:bg-[#FAFAFA] transition-colors z-10" id="col-composure">
<div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 pointer-events-none" id="overlay-composure">
<div className="font-mono text-xs bg-white border border-[#7C3AED]/30 text-[#7C3AED] px-2 py-1 rounded shadow-sm flex items-center space-x-1.5">
<span className="w-1.5 h-1.5 bg-[#7C3AED] rounded-full pulse-calm-fast"></span><span>PROCESSING...</span>
</div>
</div>
<div className="flex justify-between items-start mb-6">
<div className="flex items-center space-x-2 text-[#7C3AED]">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs uppercase tracking-widest font-medium">Composure</span>
</div>
<div className="text-right">
<div className="font-mono text-xs text-gray-400 transition-all duration-300" id="conf-composure">CONF. 92%</div>
<div className="font-mono text-xs text-emerald-500 flex items-center justify-end"><iconify-icon icon="solar:minus-linear"></iconify-icon> 0.0</div>
</div>
</div>
<div className="flex items-end space-x-2 mb-4">
<span className="font-mono text-4xl font-extralight text-[#111111] leading-none transition-all duration-300" id="score-composure">88</span>
<div className="flex flex-col mb-0.5">
<span className="font-mono text-xs text-gray-400 uppercase leading-none border-b border-gray-200 pb-0.5 mb-0.5">Idx</span>
<span className="font-mono text-xs text-gray-500 leading-none">Lvl. 4</span>
</div>
</div>
<p className="text-xs text-gray-600 mb-6 min-h-[48px] leading-relaxed font-light">Physical baseline maintained despite elevated cognitive load.</p>
<div className="border-l border-[#7C3AED]/40 pl-3 relative bg-white p-3 shadow-sm border-t border-r border-b border-gray-100 flex flex-col justify-center h-[74px]">
<div className="flex justify-between items-center mb-2">
<div className="font-mono text-xs text-gray-400">BIO_VARIANCE</div>
<span className="font-mono text-xs text-[#7C3AED]">NOMINAL</span>
</div>
<div className="flex items-end space-x-1 h-6 w-full overflow-hidden opacity-70">
<div className="w-1.5 bg-[#7C3AED]/30 data-bar-1"></div>
<div className="w-1.5 bg-[#7C3AED]/50 data-bar-2"></div>
<div className="w-1.5 bg-[#7C3AED] h-[80%]"></div>
<div className="w-1.5 bg-[#7C3AED]/40 data-bar-3"></div>
<div className="w-1.5 bg-[#7C3AED]/20 data-bar-1"></div>
<div className="w-1.5 bg-[#7C3AED]/60 data-bar-2"></div>
</div>
</div>
</div>

<div className="p-5 relative overflow-hidden bg-gradient-to-b from-transparent to-[#EA580C]/5 hover:bg-[#FAFAFA] transition-colors z-10" id="col-persuasion">
<div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 pointer-events-none" id="overlay-persuasion">
<div className="font-mono text-xs bg-white border border-[#EA580C]/30 text-[#EA580C] px-2 py-1 rounded shadow-sm flex items-center space-x-1.5">
<span className="w-1.5 h-1.5 bg-[#EA580C] rounded-full pulse-calm-fast"></span><span>PROCESSING...</span>
</div>
</div>
<div className="flex justify-between items-start mb-6">
<div className="flex items-center space-x-2 text-[#EA580C]">
<iconify-icon icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs uppercase tracking-widest font-medium">Persuasion</span>
</div>
<div className="text-right">
<div className="font-mono text-xs text-gray-400 transition-all duration-300" id="conf-persuasion">CONF. 87%</div>
<div className="font-mono text-xs text-emerald-500 flex items-center justify-end"><iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 4.1</div>
</div>
</div>
<div className="flex items-end space-x-2 mb-4">
<span className="font-mono text-4xl font-extralight text-[#111111] leading-none transition-all duration-300" id="score-persuasion">94</span>
<div className="flex flex-col mb-0.5">
<span className="font-mono text-xs text-[#EA580C] uppercase leading-none border-b border-[#EA580C]/30 pb-0.5 mb-0.5">Surge</span>
<span className="font-mono text-xs text-gray-500 leading-none">Lvl. 5</span>
</div>
</div>
<p className="text-xs text-gray-600 mb-6 min-h-[48px] leading-relaxed font-light">Volume and pitch actively adjusted to retain authority.</p>
<div className="border-l border-[#EA580C]/40 pl-3 relative bg-white p-3 shadow-sm border-t border-r border-b border-gray-100">
<div className="flex justify-between items-center mb-2">
<div className="font-mono text-xs text-[#EA580C] bg-[#EA580C]/10 px-1.5 rounded">T-REF: 00:14:22.0</div>
<iconify-icon className="text-gray-300" icon="solar:sort-from-bottom-to-top-linear"></iconify-icon>
</div>
<p className="text-xs text-gray-700 font-medium">Compensatory acoustic shift identified.</p>
</div>
</div>

<div className="p-5 relative overflow-hidden bg-gradient-to-b from-transparent to-[#059669]/5 hover:bg-[#FAFAFA] transition-colors z-10" id="col-structure">
<div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 pointer-events-none" id="overlay-structure">
<div className="font-mono text-xs bg-white border border-[#059669]/30 text-[#059669] px-2 py-1 rounded shadow-sm flex items-center space-x-1.5">
<span className="w-1.5 h-1.5 bg-[#059669] rounded-full pulse-calm-fast"></span><span>PROCESSING...</span>
</div>
</div>
<div className="flex justify-between items-start mb-6">
<div className="flex items-center space-x-2 text-[#059669]">
<iconify-icon icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs uppercase tracking-widest font-medium">Structure</span>
</div>
<div className="text-right">
<div className="font-mono text-xs text-gray-400 transition-all duration-300" id="conf-structure">CONF. 95%</div>
<div className="font-mono text-xs text-red-500 flex items-center justify-end"><iconify-icon icon="solar:arrow-right-down-linear"></iconify-icon> 8.7</div>
</div>
</div>
<div className="flex items-end space-x-2 mb-4">
<span className="font-mono text-4xl font-extralight text-[#111111] leading-none transition-all duration-300" id="score-structure">41</span>
<div className="flex flex-col mb-0.5">
<span className="font-mono text-xs text-gray-400 uppercase leading-none border-b border-gray-200 pb-0.5 mb-0.5">Idx</span>
<span className="font-mono text-xs text-[#059669] leading-none pulse-calm">Lvl. 2</span>
</div>
</div>
<p className="text-xs text-gray-600 mb-6 min-h-[48px] leading-relaxed font-light">Core argument systematically abandoned post-interruption.</p>
<div className="border-l border-[#059669]/40 pl-3 relative bg-white p-3 shadow-sm border-t border-r border-b border-gray-100">
<div className="flex justify-between items-center mb-2">
<div className="font-mono text-xs text-[#059669] bg-[#059669]/10 px-1.5 rounded">T-REF: 00:14:24.5</div>
<iconify-icon className="text-gray-300" icon="solar:link-broken-linear"></iconify-icon>
</div>
<p className="text-xs font-mono text-gray-700 line-through text-gray-400">Point 2 transition sequence.</p>
</div>
</div>
</div>

<div className="bg-gray-50 border-t border-gray-200 px-4 py-2 flex justify-between items-center text-xs font-mono text-gray-400 z-20">
<div className="flex space-x-4">
<span className="transition-all duration-300" id="sys-load">SYS_LOAD: 24%</span>
<span className="transition-all duration-300" id="sys-vectors">VECTORS: 4,092</span>
</div>
<div className="flex items-center space-x-1">
<span className="w-1 h-1 bg-gray-400 rounded-full"></span>
<span className="w-1 h-1 bg-[#111111] rounded-full"></span>
<span className="w-1 h-1 bg-gray-400 rounded-full pulse-calm"></span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative z-10 border-t border-gray-200 bleed-divider">
<div className="max-w-7xl mx-auto px-6 relative">
<div className="mb-12">
<span className="font-mono text-xs text-gray-400 uppercase tracking-widest flex items-center space-x-2">
<span className="w-1.5 h-1.5 border border-gray-400 bg-white"></span>
<span>Phase 00 // Baseline Degradation</span>
</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-6 leading-snug">
                        You don't fail because you don't know what to say.
                    </h2>
<p className="text-lg text-gray-500 mb-8 leading-relaxed font-light">
                        You fail because your analytical mind degrades under social pressure. We map exactly where the fractures occur.
                    </p>
<div className="flex flex-col space-y-3 font-mono text-xs text-gray-400 border-l border-gray-200 pl-4">
<div className="flex justify-between max-w-xs"><span>ISOLATION_INDEX</span><span className="text-[#111111]">NOMINAL</span></div>
<div className="flex justify-between max-w-xs"><span>PRESSURE_STATE</span><span className="text-red-500 pulse-calm-fast">ACTIVE</span></div>
</div>
</div>

<div className="relative h-72 border border-gray-200 bg-[#FAFAFA] rounded-md p-8 flex flex-col justify-center space-y-8 overflow-hidden group">
<div className="absolute inset-0 bg-micro-grid opacity-50 z-0"></div>

<div className="absolute top-0 bottom-0 left-1/3 w-px bg-blue-500/30 z-10 animate-sweep pointer-events-none"></div>

<div className="relative z-10 flex items-center space-x-4 opacity-100 transition-opacity">
<div className="font-mono text-xs text-gray-400 w-12">T-00</div>
<div className="flex-1 h-1.5 bg-[#111111] rounded-sm relative">
<div className="absolute -top-4 right-0 font-mono text-xs text-[#111111]">100%</div>
</div>
<div className="font-mono text-xs text-gray-600 w-32 uppercase tracking-wide">Structured Thought</div>
</div>

<div className="relative z-10 flex items-center space-x-4 opacity-80">
<div className="font-mono text-xs text-gray-400 w-12">T-14</div>
<div className="flex-1 flex space-x-1">
<div className="h-1.5 bg-gray-500 rounded-sm w-3/4"></div>
<div className="h-1.5 bg-gray-500 rounded-sm w-1/4 opacity-50"></div>
</div>
<div className="font-mono text-xs text-gray-500 w-32 uppercase tracking-wide relative">
                            Cognitive Load
                            <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-xs text-red-400 bg-red-50 px-1 rounded">-14%</span>
</div>
</div>

<div className="relative z-10 flex items-center space-x-4 opacity-90">
<div className="font-mono text-xs text-red-500 w-12 pulse-calm">T-22</div>
<div className="flex-1 flex space-x-1 relative">
<div className="absolute -inset-y-3 left-[20%] w-[40%] bg-red-500/5 border border-red-500/20 rounded z-0"></div>
<div className="h-1.5 bg-red-500 rounded-sm w-[15%] z-10"></div>
<div className="h-1.5 bg-gray-300 rounded-sm w-[25%] z-10 pulse-calm-fast"></div>
<div className="h-1.5 bg-red-500 rounded-sm w-[10%] z-10"></div>
<div className="h-1.5 bg-gray-300 rounded-sm w-[35%] z-10"></div>
<div className="h-1.5 bg-gray-200 rounded-sm w-[15%] z-10"></div>
</div>
<div className="font-mono text-xs text-red-500 w-32 uppercase tracking-wide relative">
                            Pressure State
                            <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-xs text-red-500 bg-red-100 px-1 rounded">FRAG</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FAFAFA] relative z-10 border-t border-gray-200 bleed-divider">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 flex flex-col md:flex-row md:justify-between md:items-end">
<div className="max-w-2xl">
<span className="font-mono text-xs text-gray-400 uppercase tracking-widest flex items-center space-x-2 mb-4">
<span className="w-1.5 h-1.5 border border-gray-400 bg-white"></span>
<span>Phase 01 // Induction</span>
</span>
<h2 className="text-3xl font-medium tracking-tight mb-4">Controlled environmental stress.</h2>
<p className="text-gray-500 text-lg font-light">Pressure is computed, not random. XR instances induce stress through highly precise variables.</p>
</div>
<div className="mt-6 md:mt-0 font-mono text-xs text-gray-400 border border-gray-200 bg-white px-3 py-2 rounded shadow-sm text-right sys-node transition-colors duration-300">
<div className="mb-1 text-gray-500">ENV_CTRL_ACTIVE</div>
<div className="text-emerald-500 flex items-center justify-end space-x-1"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span><span>3 ACTIVE MODULES</span></div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white border border-gray-200 p-6 rounded-md hover:border-gray-300 transition-colors group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-0.5 bg-gray-100 group-hover:bg-[#111111] transition-colors"></div>
<div className="flex justify-between items-start mb-10">
<iconify-icon className="text-gray-400 text-xl group-hover:text-gray-600 transition-colors" icon="solar:eye-linear" strokeWidth="1.5"></iconify-icon>
<div className="flex flex-col items-end space-y-2">
<div className="w-8 h-4 bg-[#111111] rounded-full relative">
<div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5 pulse-calm"></div>
</div>
<span className="font-mono text-xs text-gray-400">TRK_LOCK</span>
</div>
</div>
<div className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-1 border-b border-gray-100 pb-1">Mod_01</div>
<h3 className="font-medium text-sm mb-2 text-[#111111]">Audience Gaze Shifts</h3>
<p className="text-xs text-gray-500 leading-relaxed font-light">Simulates disinterest or intense scrutiny via synchronized avatar eye-tracking algorithms.</p>
</div>

<div className="bg-white border border-gray-200 p-6 rounded-md hover:border-gray-300 transition-colors group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-0.5 bg-gray-100 group-hover:bg-blue-500 transition-colors"></div>
<div className="flex justify-between items-start mb-10">
<iconify-icon className="text-gray-400 text-xl group-hover:text-blue-500 transition-colors" icon="solar:volume-cross-linear" strokeWidth="1.5"></iconify-icon>
<div className="flex flex-col items-end">
<div className="font-mono text-xs text-gray-400 border border-gray-200 px-2 py-0.5 rounded bg-gray-50 mb-1">AMP: HIGH</div>
<span className="font-mono text-xs text-blue-500 pulse-calm">ISO_ACTV</span>
</div>
</div>
<div className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-1 border-b border-gray-100 pb-1">Mod_02</div>
<h3 className="font-medium text-sm mb-2 text-[#111111]">Silence Amplification</h3>
<p className="text-xs text-gray-500 leading-relaxed mb-6 font-light">Acoustic isolation protocols that artificially extend pauses to induce social panic.</p>
<div className="h-1 w-full bg-gray-100 rounded-full relative">
<div className="absolute left-0 top-0 h-full w-[85%] bg-blue-500 rounded-full pulse-calm-fast"></div>
<div className="absolute left-[85%] top-1/2 -translate-y-1/2 w-2 h-2 bg-white border border-blue-500 rounded-full"></div>
</div>
</div>

<div className="bg-white border border-gray-200 p-6 rounded-md hover:border-red-200 transition-colors group relative overflow-hidden">
<div className="absolute inset-0 bg-red-50/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
<div className="absolute top-0 left-0 w-full h-0.5 bg-gray-100 group-hover:bg-red-500 transition-colors"></div>
<div className="absolute top-0 right-0 w-16 h-16 bg-red-500/5 rounded-bl-full pointer-events-none pulse-calm"></div>
<div className="flex justify-between items-start mb-10 relative z-10">
<iconify-icon className="text-red-500 text-xl pulse-calm" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
<div className="flex flex-col items-end">
<div className="font-mono text-xs text-red-500 bg-red-50 px-2 py-0.5 border border-red-100 rounded mb-1">INJECTING</div>
<span className="font-mono text-xs text-red-400">VAR_HIGH</span>
</div>
</div>
<div className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-1 border-b border-gray-100 pb-1 relative z-10">Mod_03</div>
<h3 className="font-medium text-sm mb-2 text-[#111111] relative z-10">Algorithmic Interruptions</h3>
<p className="text-xs text-gray-500 leading-relaxed font-light relative z-10">Injects verbal challenges precisely at moments of highest cognitive load based on variance.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative z-10 border-t border-gray-200 bleed-divider">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
<div className="md:col-span-4 relative sys-node transition-colors duration-300 rounded-md p-2 -ml-2">
<span className="font-mono text-xs text-gray-400 uppercase tracking-widest flex items-center space-x-2 mb-4">
<span className="w-1.5 h-1.5 border border-gray-400 bg-white"></span>
<span>Phase 02 // Extraction</span>
</span>
<h2 className="text-3xl font-medium tracking-tight mb-8">Real-time signal extraction.</h2>
<div className="space-y-1 font-mono text-xs text-[#111111] border border-gray-200 bg-[#FAFAFA] p-4 rounded-md shadow-sm">
<div className="flex justify-between items-end py-2 border-b border-gray-200 hover:bg-gray-100 transition-colors px-1 -mx-1 rounded">
<div className="flex flex-col">
<span className="text-gray-400 text-xs uppercase">Metric</span>
<span>Speech Rate</span>
</div>
<div className="flex items-center space-x-3">
<span className="text-gray-400">184 wpm</span>
<span className="text-red-500 bg-red-50 px-1 rounded flex items-center"><iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 12%</span>
</div>
</div>
<div className="flex justify-between items-end py-2 border-b border-gray-200 hover:bg-gray-100 transition-colors px-1 -mx-1 rounded">
<div className="flex flex-col">
<span className="text-gray-400 text-xs uppercase">Metric</span>
<span>Response Latency</span>
</div>
<div className="flex items-center space-x-3">
<span className="text-gray-400">1.2s</span>
<span className="text-emerald-500 bg-emerald-50 px-1 rounded flex items-center"><iconify-icon icon="solar:arrow-right-down-linear"></iconify-icon> 0.1s</span>
</div>
</div>
<div className="flex justify-between items-end py-2 border-b border-gray-200 relative overflow-hidden px-1 -mx-1 rounded">
<div className="absolute inset-0 bg-red-50/30 z-0 pulse-calm"></div>
<div className="flex flex-col relative z-10">
<span className="text-red-400 text-xs uppercase">Anomaly</span>
<span>Filler Density</span>
</div>
<div className="flex items-center space-x-3 relative z-10">
<span className="text-[#111111] font-medium">8.4%</span>
<span className="text-red-500 bg-red-100 px-1 rounded flex items-center flicker-once">ERR</span>
</div>
</div>
<div className="flex justify-between items-end py-2 px-1 -mx-1 hover:bg-gray-100 transition-colors rounded">
<div className="flex flex-col">
<span className="text-gray-400 text-xs uppercase">State</span>
<span>Pitch Variance</span>
</div>
<span className="text-blue-500 font-medium tracking-wide">NOMINAL</span>
</div>
</div>
</div>

<div className="md:col-span-8 relative">
<div className="relative w-full h-56 border border-gray-200 bg-white rounded-md overflow-hidden shadow-sm flex flex-col group">

<div className="absolute inset-0 bg-micro-grid opacity-20 pointer-events-none z-0"></div>

<div className="h-8 border-b border-gray-100 bg-gray-50 flex justify-between items-center px-4 relative z-10">
<div className="flex items-center space-x-3 font-mono text-xs text-gray-500">
<span className="flex items-center space-x-1"><iconify-icon className="text-red-500 pulse-calm-fast" icon="solar:record-circle-linear"></iconify-icon><span>REC</span></span>
<span className="border-l border-gray-300 pl-3">CH_01: AUDIO_CORE</span>
</div>
<span className="font-mono text-xs text-gray-400 ticker-dbfs">DBFS: -12.4</span>
</div>

<div className="flex-1 relative w-full flex items-end px-4 space-x-[2px] pb-6 z-10">

<div className="w-1 bg-gray-200 h-[20%] hover:bg-gray-400 transition-colors"></div><div className="w-1 bg-gray-200 h-[30%]"></div><div className="w-1 bg-gray-200 h-[50%]"></div><div className="w-1 bg-gray-300 h-[40%]"></div><div className="w-1 bg-gray-300 h-[60%]"></div><div className="w-1 bg-gray-300 h-[80%]"></div><div className="w-1 bg-gray-300 h-[90%]"></div><div className="w-1 bg-gray-400 h-[100%]"></div><div className="w-1 bg-gray-300 h-[70%]"></div><div className="w-1 bg-gray-300 h-[50%]"></div><div className="w-1 bg-gray-200 h-[30%]"></div><div className="w-1 bg-gray-200 h-[20%]"></div><div className="w-1 bg-gray-200 h-[10%]"></div><div className="w-1 bg-gray-200 h-[10%]"></div><div className="w-1 bg-gray-200 h-[10%]"></div>

<div className="absolute bottom-6 top-2 left-[20%] w-[25%] bg-red-50/50 border-x border-red-200 flex flex-col justify-between z-0 pulse-calm">
<span className="text-xs font-mono text-red-500 bg-white px-1 self-start border border-red-100 ml-1 mt-1 rounded shadow-sm relative z-20">EVENT: SILENCE_AMP</span>
</div>

<div className="w-1 bg-red-300 h-[5%] relative z-10"></div><div className="w-1 bg-red-200 h-[5%] z-10"></div><div className="w-1 bg-red-200 h-[2%] z-10"></div><div className="w-1 bg-red-100 h-[2%] z-10"></div><div className="w-1 bg-red-100 h-[2%] z-10"></div><div className="w-1 bg-red-100 h-[2%] z-10"></div><div className="w-1 bg-red-200 h-[5%] z-10"></div><div className="w-1 bg-red-300 h-[10%] z-10"></div><div className="w-1 bg-red-400 h-[30%] z-10"></div><div className="w-1 bg-red-500 h-[80%] relative z-10"><div className="absolute -top-5 -left-4 font-mono text-xs text-red-500 bg-white border border-red-200 px-1 rounded shadow-sm">SPIKE</div></div><div className="w-1 bg-red-400 h-[90%] z-10"></div><div className="w-1 bg-red-300 h-[60%] z-10"></div><div className="w-1 bg-red-200 h-[40%] z-10"></div><div className="w-1 bg-red-200 h-[20%] z-10"></div>

<div className="w-1 bg-gray-300 h-[30%] ml-1"></div><div className="w-1 bg-gray-300 h-[40%]"></div><div className="w-1 bg-gray-300 h-[60%]"></div><div className="w-1 bg-gray-400 h-[80%]"></div><div className="w-1 bg-gray-400 h-[90%]"></div><div className="w-1 bg-gray-300 h-[70%]"></div><div className="w-1 bg-gray-300 h-[40%]"></div><div className="w-1 bg-gray-200 h-[20%]"></div><div className="w-1 bg-gray-200 h-[10%]"></div><div className="w-1 bg-gray-200 h-[30%]"></div>

<div className="absolute top-0 bottom-6 left-[35%] w-[1.5px] bg-[#2563EB] z-20 group-hover:left-[40%] transition-all duration-1000 ease-in-out">
<div className="w-2.5 h-2.5 border-2 border-[#2563EB] bg-white rounded-full absolute -top-1 -left-[4.5px]"></div>
</div>
</div>

<div className="absolute bottom-0 w-full h-6 border-t border-gray-200 bg-gray-50 flex justify-between items-center px-4 font-mono text-xs text-gray-400 z-10">

<div className="absolute top-0 left-0 w-full flex justify-between px-4">
<div className="w-px h-1.5 bg-gray-300"></div><div className="w-px h-1 bg-gray-200"></div><div className="w-px h-1 bg-gray-200"></div><div className="w-px h-1.5 bg-gray-300"></div><div className="w-px h-1 bg-gray-200"></div><div className="w-px h-1 bg-gray-200"></div><div className="w-px h-1.5 bg-gray-300"></div><div className="w-px h-1 bg-gray-200"></div><div className="w-px h-1 bg-gray-200"></div><div className="w-px h-1.5 bg-gray-300"></div><div className="w-px h-1 bg-gray-200"></div><div className="w-px h-1 bg-gray-200"></div><div className="w-px h-1.5 bg-gray-300"></div>
</div>
<span className="relative pt-1.5">00:14:15</span>
<span className="relative pt-1.5 text-blue-500 font-medium">00:14:22</span>
<span className="relative pt-1.5">00:14:30</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FAFAFA] relative z-10 border-t border-gray-200 bleed-divider">
<div className="max-w-7xl mx-auto px-6 text-center mb-16 relative">
<span className="font-mono text-xs text-gray-400 uppercase tracking-widest inline-flex items-center space-x-2 mb-4">
<span className="w-1.5 h-1.5 border border-gray-400 bg-white"></span>
<span>Phase 03 // Insight Synthesis</span>
</span>
<h2 className="text-3xl font-medium tracking-tight mb-4">System Conflict Detected</h2>
<p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">Parallel analysis reveals subconscious trade-offs. The human processing unit rarely optimizes all vectors simultaneously under induced stress.</p>
</div>
<div className="max-w-5xl mx-auto border border-gray-200 rounded-md bg-white p-12 relative overflow-hidden shadow-sm">

<div className="absolute inset-0 bg-micro-grid opacity-30 z-0"></div>
<svg className="absolute inset-0 w-full h-full text-gray-200 z-0 overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">
<path className="svg-connector transition-all duration-300" d="M 20 50 Q 50 10 80 50" fill="none" stroke="currentColor" stroke-dasharray="2 2" strokeWidth="0.3"></path>
<path className="svg-connector transition-all duration-300" d="M 20 50 Q 50 90 80 50" fill="none" stroke="currentColor" stroke-dasharray="2 2" strokeWidth="0.3"></path>

<circle className="opacity-60" fill="#2563EB" r="1">
<animatemotion dur="2.8s" path="M 20 50 Q 50 10 80 50" repeatcount="indefinite"></animatemotion>
</circle>
<circle className="opacity-60" fill="#EA580C" r="1">
<animatemotion dur="3.4s" path="M 20 50 Q 50 90 80 50" repeatcount="indefinite"></animatemotion>
</circle>
</svg>
<div className="flex flex-col md:flex-row justify-between items-center relative z-10">

<div className="w-full md:w-1/3 bg-[#FAFAFA] border border-gray-100 p-6 rounded-md shadow-sm relative group sys-node transition-all duration-300">
<div className="absolute -top-3 left-4 font-mono text-xs bg-white border border-gray-200 text-gray-400 px-2 rounded">NODE_A // LOSS</div>
<div className="flex flex-col items-center text-center">
<div className="flex items-center space-x-2 text-[#2563EB] mb-4">
<iconify-icon className="text-lg" icon="solar:arrow-right-down-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs uppercase tracking-widest font-medium">Clarity Fracture</span>
</div>
<div className="font-mono text-4xl font-extralight text-gray-400 mb-2 transition-transform group-hover:scale-105">-24%</div>
<p className="text-xs text-gray-500 leading-relaxed font-mono font-light">Structural breakdown in multi-part sentence construction.</p>
</div>
</div>

<div className="w-full md:w-1/3 text-center px-8 py-8 md:py-0 relative">

<div className="hidden md:block absolute top-1/2 -left-8 w-8 h-px bg-[#111111]/20"></div>
<div className="hidden md:block absolute top-1/2 -right-8 w-8 h-px bg-[#111111]/20"></div>
<div className="inline-block font-mono text-xs text-red-500 bg-red-50 border border-red-100 px-2 py-0.5 rounded mb-4 pulse-calm-fast">CORRELATION IDENTIFIED</div>
<p className="font-medium text-lg leading-snug text-[#111111]">
                        You instinctively trade precision for engagement under pressure.
                    </p>
</div>

<div className="w-full md:w-1/3 bg-white border border-gray-200 p-6 rounded-md shadow-sm relative group shadow-orange-500/5 sys-node transition-all duration-300">
<div className="absolute -top-3 left-4 font-mono text-xs bg-white border border-gray-200 text-orange-500 px-2 rounded">NODE_B // COMP</div>
<div className="flex flex-col items-center text-center">
<div className="flex items-center space-x-2 text-[#EA580C] mb-4">
<iconify-icon className="text-lg" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs uppercase tracking-widest font-medium">Persuasion Spike</span>
</div>
<div className="font-mono text-4xl font-extralight text-[#111111] mb-2 transition-transform group-hover:scale-105">+18%</div>
<p className="text-xs text-gray-500 leading-relaxed font-mono font-light">Unconscious volume amplification to maintain control.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative z-10 border-t border-gray-200 bleed-divider">
<div className="max-w-4xl mx-auto px-6">
<div className="mb-12 text-center">
<span className="font-mono text-xs text-gray-400 uppercase tracking-widest inline-flex items-center space-x-2">
<span className="w-1.5 h-1.5 border border-gray-400 bg-white"></span>
<span>Phase 04 // Interrogation</span>
</span>
</div>
<div className="border border-gray-200 rounded-md shadow-sm overflow-hidden bg-white flex flex-col">

<div className="bg-gray-50 border-b border-gray-200 p-3 flex items-center justify-between z-20 relative">
<div className="flex items-center space-x-3">
<iconify-icon className="text-gray-400" icon="solar:terminal-outline-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-mono text-xs text-gray-600 uppercase tracking-widest font-medium">System Interrogation Log</span>
</div>
<div className="flex space-x-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-gray-200 border border-gray-300 pulse-calm"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-200 border border-gray-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-200 border border-gray-300"></div>
</div>
</div>
<div className="flex flex-col md:flex-row relative">
<div className="absolute inset-0 bg-sys-grid opacity-10 pointer-events-none z-0"></div>

<div className="p-8 md:w-2/3 border-b md:border-b-0 md:border-r border-gray-100 relative overflow-hidden flex flex-col justify-start min-h-[300px]">
<div className="w-full relative z-10 flex flex-col space-y-4" id="telemetry-log-container">

<div className="relative z-10 flex space-x-4 mb-4 transition-all duration-700">
<div className="w-8 h-8 rounded-md bg-[#111111] flex items-center justify-center flex-shrink-0 text-white font-mono text-xs shadow-sm">SYS</div>
<div className="flex-1">
<div className="font-mono text-xs text-gray-400 mb-2 flex justify-between">
<span>T+ 00:18:42.11</span>
<span className="text-blue-500 border border-blue-200 bg-blue-50 px-1 rounded uppercase">ANALYSIS_NODE_3</span>
</div>
<p className="text-base font-medium tracking-tight text-[#111111] mb-4 bg-gray-50/80 backdrop-blur p-3 border border-gray-100 rounded shadow-sm">
                                        "You avoided committing to a clear stance regarding the timeline — why?"
                                    </p>
<div className="flex items-center space-x-3">
<span className="bg-white border border-gray-200 text-gray-500 font-mono text-xs px-2 py-0.5 rounded shadow-sm flex items-center space-x-1">
<iconify-icon icon="solar:link-linear"></iconify-icon>
<span>Triggered by: STRUCTURE ANOMALY</span>
</span>
</div>
</div>
</div>
</div>

<div className="pl-12 border-l border-gray-200 ml-4 space-y-4 relative z-10 mt-8 pt-4">
<div className="absolute -left-1 top-6 w-2 h-2 bg-white border border-gray-300 rounded-full"></div>
<div className="bg-white border border-gray-200 p-4 rounded-md text-xs text-gray-600 shadow-sm relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 group-hover:bg-[#111111] transition-colors"></div>
<div className="font-mono text-xs text-gray-400 mb-2 uppercase tracking-widest">Behavioral Evidence Trace</div>
<span className="font-light leading-relaxed">Use of passive voice increased by <span className="font-mono text-[#111111] bg-gray-100 px-1 rounded font-medium">40%</span>. Eye contact tracking maps reveal visual dispersion towards peripheral avatars 1.2s immediately preceding verbal response.</span>
</div>
<div className="flex items-center justify-between bg-blue-50/50 border border-blue-100 p-3 rounded-md cursor-pointer hover:bg-blue-50 transition-colors">
<div className="flex items-center space-x-2 text-[#2563EB] text-xs font-medium">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Review XR Playback Segment</span>
</div>
<span className="font-mono text-xs text-blue-400">00:00:14</span>
</div>
</div>
</div>

<div className="p-6 md:w-1/3 bg-[#FAFAFA]/80 backdrop-blur-sm font-mono text-xs z-10">
<h4 className="text-gray-400 uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">Trace Data</h4>
<ul className="space-y-3 text-gray-600">
<li className="flex justify-between hover:text-[#111111] transition-colors">
<span>CONFIDENCE</span>
<span className="text-[#111111]">98.2%</span>
</li>
<li className="flex justify-between hover:text-[#111111] transition-colors">
<span>OCULAR_DISP</span>
<span className="text-red-500">+2.4 RAD</span>
</li>
<li className="flex justify-between hover:text-[#111111] transition-colors">
<span>VOICE_TENS</span>
<span className="text-[#111111]">ELEVATED</span>
</li>
<li className="flex justify-between hover:text-[#111111] transition-colors">
<span>COGNITIVE_LD</span>
<span className="text-[#111111]">LVL 4</span>
</li>
</ul>
<div className="mt-8 pt-4 border-t border-gray-200">
<div className="text-gray-400 mb-2">SYNTHESIS GRAPH</div>

<div className="flex items-end h-12 space-x-1 opacity-50 relative group">
<div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#FAFAFA] opacity-50 group-hover:opacity-0 transition-opacity"></div>
<div className="w-full bg-gray-300 h-[20%] transition-all duration-300 hover:bg-gray-400 hover:h-[30%]"></div>
<div className="w-full bg-gray-300 h-[30%] transition-all duration-300 hover:bg-gray-400 hover:h-[40%]"></div>
<div className="w-full bg-gray-300 h-[50%] transition-all duration-300 hover:bg-gray-400 hover:h-[60%]"></div>
<div className="w-full bg-[#111111] h-[90%] relative pulse-calm-fast"><div className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs text-[#111111]">TRIG</div></div>
<div className="w-full bg-gray-300 h-[60%] transition-all duration-300 hover:bg-gray-400 hover:h-[70%]"></div>
<div className="w-full bg-gray-300 h-[40%] transition-all duration-300 hover:bg-gray-400 hover:h-[50%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#111111] text-white text-center px-6 relative overflow-hidden z-10">

<div className="absolute inset-0 z-0 opacity-10" style={{backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-3xl mx-auto flex flex-col items-center relative z-10">
<div className="font-mono text-xs text-gray-500 mb-8 border border-gray-800 px-3 py-1 rounded-sm bg-black/50 hover:bg-black transition-colors">
                PARALLEL INSTANCES_ACTIVE: <span className="text-white" id="live-instances">4,092</span>
</div>

<div className="w-full max-w-sm mb-12">
<div className="flex justify-between text-xs font-mono text-gray-500 mb-2 px-1">
<span className="flicker-once">PROCESSING</span>
<span>100% VECTOR_MAP</span>
</div>
<div className="flex space-x-0.5 h-1.5 w-full mx-auto rounded-full overflow-hidden bg-gray-900 group">
<div className="bg-[#2563EB] w-[25%] h-full transition-all duration-1000" id="blend-1"></div>
<div className="bg-[#7C3AED] w-[35%] h-full transition-all duration-1000" id="blend-2"></div>
<div className="bg-[#EA580C] w-[15%] h-full transition-all duration-1000" id="blend-3"></div>
<div className="bg-[#059669] w-[25%] h-full transition-all duration-1000" id="blend-4"></div>
</div>
</div>
<h2 className="text-4xl font-medium tracking-tight mb-6 leading-tight">
                We don't give feedback.<br/>We reconstruct how you think.
            </h2>
<p className="text-gray-400 mb-10 text-lg font-light max-w-lg">
                Enter the controlled environment. Capture the high-density data. Face the intelligence panel.
            </p>
<button className="bg-white text-[#111111] px-8 py-4 rounded-md font-medium hover:bg-gray-200 transition-colors shadow-lg shadow-white/10 group relative overflow-hidden">
<span className="relative z-10 flex items-center space-x-2 text-sm uppercase tracking-wide">
<span>Request System Access</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
<div className="flex items-center space-x-4 mt-8 font-mono text-xs text-gray-600">
<span className="pulse-calm">SECURE INFRASTRUCTURE</span>
<span className="w-1 h-1 bg-gray-600 rounded-full"></span>
<span>V 2.4.0_BUILD.88</span>
</div>
</div>
</section>

<footer className="border-t border-gray-200 bg-[#FAFAFA] py-8 relative z-10 text-center flex flex-col items-center">
<div className="flex items-center space-x-2 font-mono text-xs text-gray-400 mb-2">
<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full pulse-calm"></span>
<span>SYSTEM NOMINAL</span>
</div>
<p className="font-mono text-xs text-gray-400">© 2024 S P E A K X R. PARALLEL INTELLIGENCE ARCHITECTURE.</p>
</footer>



    </>
  );
}
