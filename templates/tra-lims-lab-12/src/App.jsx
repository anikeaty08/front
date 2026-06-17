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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Simple Tab Switching Logic
        function switchTab(tabId) {
            // Hide all views
            document.querySelectorAll('[id^="view-"]').forEach(el => {
                el.classList.add('hidden');
            });
            // Show selected view
            document.getElementById('view-' + tabId).classList.remove('hidden');
            
            // Update Nav styling
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('active', 'text-[#1E6F3F]', 'shadow-[inset_3px_3px_6px_rgba(0,0,0,0.06),_inset_-3px_-3px_6px_rgba(255,255,255,0.8)]', 'bg-[#ebecf0]', 'border', 'border-[#C6A43F]/30');
                btn.classList.add('text-slate-600', 'border-transparent');
            });
            
            const activeBtn = event.currentTarget;
            activeBtn.classList.remove('text-slate-600', 'border-transparent');
            activeBtn.classList.add('active', 'text-[#1E6F3F]', 'shadow-[inset_3px_3px_6px_rgba(0,0,0,0.06),_inset_-3px_-3px_6px_rgba(255,255,255,0.8)]', 'bg-[#ebecf0]', 'border', 'border-[#C6A43F]/30');
        }

        // Biometric Simulation Flow
        const modal = document.getElementById('biometric-modal');
        const card = document.getElementById('bio-card');
        const line = document.getElementById('scan-line');
        const icon = document.getElementById('finger-icon');
        const statusText = document.getElementById('bio-status');

        function openBiometric() {
            modal.classList.remove('hidden');
            // Small delay for transition
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                card.classList.remove('scale-95');
                statusText.classList.add('hidden');
                icon.classList.replace('text-[#1E6F3F]', 'text-[#1A3A5C]');
            }, 10);
        }

        function simulateLogin() {
            // Animate scan
            line.classList.remove('hidden');
            line.animate([
                { top: '0%' },
                { top: '100%' }
            ], { duration: 1500, iterations: 1 });
            
            setTimeout(() => {
                line.classList.add('hidden');
                icon.classList.replace('text-[#1A3A5C]', 'text-[#1E6F3F]');
                statusText.classList.remove('hidden');
                
                // Close after success
                setTimeout(() => {
                    modal.classList.add('opacity-0');
                    card.classList.add('scale-95');
                    setTimeout(() => modal.classList.add('hidden'), 300);
                }, 1000);
            }, 1500);
        }

        // Close modal on outside click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('opacity-0');
                card.classList.add('scale-95');
                setTimeout(() => modal.classList.add('hidden'), 300);
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
      

<aside className="w-72 flex-shrink-0 h-full flex flex-col shadow-[8px_0_16px_rgba(0,0,0,0.05)] bg-[#f0f0f4] z-20 relative border-r border-[#C6A43F]/20">

<div className="p-6 flex items-center gap-4">
<div className="w-12 h-12 rounded-full shadow-[-4px_-4px_8px_rgba(255,255,255,0.8),_4px_4px_8px_rgba(0,0,0,0.08)] flex items-center justify-center bg-[#f0f0f4] border border-[#C6A43F]/40">
<i className="text-[#1E6F3F]" data-lucide="scale" strokeWidth="1.5"></i>
</div>
<div>
<h1 className="font-['Playfair_Display'] text-xl tracking-tight font-medium text-[#1A3A5C]">TRA LIMS</h1>
<p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Intelligence</p>
</div>
</div>

<nav className="flex-1 overflow-y-auto px-4 pb-8 space-y-1 mt-2">
<div className="text-xs uppercase tracking-widest text-slate-400 mb-2 mt-4 px-2 font-medium">Core Modules</div>
<a className="nav-btn active flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-[#1E6F3F] shadow-[inset_3px_3px_6px_rgba(0,0,0,0.06),_inset_-3px_-3px_6px_rgba(255,255,255,0.8)] bg-[#ebecf0] border border-[#C6A43F]/30 transition-all" href="#" onclick="switchTab('dashboard')">
<i className="w-5 h-5" data-lucide="layout-dashboard" strokeWidth="1.5"></i> Operations Dashboard
            </a>
<a className="nav-btn flex items-center gap-3 px-4 py-3 rounded-xl text-base text-slate-600 hover:text-[#1E6F3F] transition-all" href="#" onclick="switchTab('hs-engine')">
<i className="w-5 h-5" data-lucide="brain-circuit" strokeWidth="1.5"></i> HS AI Engine
            </a>
<a className="nav-btn flex items-center gap-3 px-4 py-3 rounded-xl text-base text-slate-600 hover:text-[#1E6F3F] transition-all" href="#">
<i className="w-5 h-5" data-lucide="test-tubes" strokeWidth="1.5"></i> Sample Orchestration
            </a>
<a className="nav-btn flex items-center gap-3 px-4 py-3 rounded-xl text-base text-slate-600 hover:text-[#1E6F3F] transition-all" href="#" onclick="switchTab('lab-sim')">
<i className="w-5 h-5" data-lucide="map" strokeWidth="1.5"></i> Visual Lab Control
            </a>
<div className="text-xs uppercase tracking-widest text-slate-400 mb-2 mt-6 px-2 font-medium">Integration &amp; External</div>
<a className="nav-btn flex items-center gap-3 px-4 py-3 rounded-xl text-base text-slate-600 hover:text-[#1E6F3F] transition-all" href="#">
<i className="w-5 h-5" data-lucide="network" strokeWidth="1.5"></i> TANCIS Sync
            </a>
<a className="nav-btn flex items-center gap-3 px-4 py-3 rounded-xl text-base text-slate-600 hover:text-[#1E6F3F] transition-all" href="#">
<i className="w-5 h-5" data-lucide="globe-2" strokeWidth="1.5"></i> WCO &amp; ECICS
            </a>
<div className="text-xs uppercase tracking-widest text-slate-400 mb-2 mt-6 px-2 font-medium">Management &amp; Quality</div>
<a className="nav-btn flex items-center gap-3 px-4 py-3 rounded-xl text-base text-slate-600 hover:text-[#1E6F3F] transition-all" href="#" onclick="switchTab('projects')">
<i className="w-5 h-5" data-lucide="gantt-chart" strokeWidth="1.5"></i> Project Management
            </a>
<a className="nav-btn flex items-center gap-3 px-4 py-3 rounded-xl text-base text-slate-600 hover:text-[#1E6F3F] transition-all" href="#" onclick="switchTab('admin')">
<i className="w-5 h-5" data-lucide="shield-alert" strokeWidth="1.5"></i> Omnipotent Admin
            </a>
</nav>

<div className="p-4 border-t border-[#C6A43F]/20">
<button className="w-full flex items-center justify-between px-4 py-3 rounded-xl shadow-[-4px_-4px_8px_rgba(255,255,255,0.8),_4px_4px_8px_rgba(0,0,0,0.06)] bg-[#f0f0f4] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),_inset_-2px_-2px_4px_rgba(255,255,255,0.6)] transition-all" onclick="openBiometric()">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#1A3A5C] text-white flex items-center justify-center text-sm font-medium">NM</div>
<div className="text-left">
<p className="text-sm font-medium text-slate-800">Nasru Mussa</p>
<p className="text-xs text-slate-500">Super Admin</p>
</div>
</div>
<i className="w-4 h-4 text-[#C6A43F]" data-lucide="fingerprint" strokeWidth="1.5"></i>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<div className="h-10 bg-[#1A3A5C] text-white/90 text-sm flex items-center overflow-hidden relative shadow-md z-10">
<div className="absolute inset-0 flex items-center whitespace-nowrap px-4 animate-ticker font-medium tracking-wide">
<span className="flex items-center gap-2 mx-8"><i className="w-4 h-4 text-[#C6A43F]" data-lucide="thermometer"></i> Dar Lab Temp: 22.4°C</span>
<span className="flex items-center gap-2 mx-8"><i className="w-4 h-4 text-[#C6A43F]" data-lucide="droplets"></i> Humidity: 45%</span>
<span className="flex items-center gap-2 mx-8"><i className="w-4 h-4 text-[#C6A43F]" data-lucide="activity"></i> HPLC-01: Running</span>
<span className="flex items-center gap-2 mx-8"><i className="w-4 h-4 text-green-400" data-lucide="refresh-cw"></i> TANCIS Sync: Real-time Active</span>
<span className="flex items-center gap-2 mx-8"><i className="w-4 h-4 text-yellow-400" data-lucide="alert-triangle"></i> Update: WCO HS 2022 amendments applied</span>
<span className="flex items-center gap-2 mx-8"><i className="w-4 h-4 text-[#C6A43F]" data-lucide="fingerprint"></i> Biometric node Mbeya online</span>

<span className="flex items-center gap-2 mx-8"><i className="w-4 h-4 text-[#C6A43F]" data-lucide="thermometer"></i> Dar Lab Temp: 22.4°C</span>
<span className="flex items-center gap-2 mx-8"><i className="w-4 h-4 text-[#C6A43F]" data-lucide="droplets"></i> Humidity: 45%</span>
</div>
</div>

<header className="h-20 px-8 flex items-center justify-between shadow-[0_8px_16px_rgba(0,0,0,0.02)] z-10 bg-[#f0f0f4]/80 backdrop-blur-md">

<div className="relative w-96">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
<i className="w-5 h-5 text-slate-400" data-lucide="search" strokeWidth="1.5"></i>
</div>
<input className="w-full pl-12 pr-4 py-3 bg-[#ebecf0] rounded-full shadow-[inset_3px_3px_6px_rgba(0,0,0,0.06),_inset_-3px_-3px_6px_rgba(255,255,255,0.8)] border-none focus:ring-1 focus:ring-[#C6A43F] text-base outline-none transition-all placeholder-slate-400" placeholder="Search declarations, MRNs, ISO standards..." type="text"/>
<div className="absolute inset-y-0 right-2 flex items-center">
<kbd className="px-2 py-1 text-xs text-slate-400 bg-[#f0f0f4] rounded-md shadow-[-2px_-2px_4px_rgba(255,255,255,0.8),_2px_2px_4px_rgba(0,0,0,0.05)] border border-slate-200">⌘K</kbd>
</div>
</div>

<div className="flex items-center gap-6">
<button className="w-12 h-12 rounded-full shadow-[-4px_-4px_8px_rgba(255,255,255,0.8),_4px_4px_8px_rgba(0,0,0,0.06)] bg-[#f0f0f4] flex items-center justify-center hover:text-[#1E6F3F] transition-colors relative">
<i className="w-5 h-5" data-lucide="bell" strokeWidth="1.5"></i>
<span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full"></span>
</button>
<button className="w-12 h-12 rounded-full shadow-[-4px_-4px_8px_rgba(255,255,255,0.8),_4px_4px_8px_rgba(0,0,0,0.06)] bg-[#f0f0f4] flex items-center justify-center hover:text-[#1E6F3F] transition-colors">
<i className="w-5 h-5" data-lucide="phone-call" strokeWidth="1.5"></i>
</button>
<button className="w-12 h-12 rounded-full shadow-[-4px_-4px_8px_rgba(255,255,255,0.8),_4px_4px_8px_rgba(0,0,0,0.06)] bg-[#f0f0f4] flex items-center justify-center text-[#1E6F3F] border border-[#1E6F3F]/20">
<i className="w-5 h-5" data-lucide="moon" strokeWidth="1.5"></i>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8 relative">

<div className="space-y-8 animate-fade-in" id="view-dashboard">
<div className="flex justify-between items-end">
<div>
<h2 className="text-3xl font-['Playfair_Display'] tracking-tight font-medium text-[#1A3A5C]">Command Center</h2>
<p className="text-base text-slate-500 mt-1">Real-time overview of customs laboratory operations across 25 border posts.</p>
</div>
<div className="flex gap-4">
<button className="px-6 py-3 rounded-xl shadow-[-4px_-4px_8px_rgba(255,255,255,0.8),_4px_4px_8px_rgba(0,0,0,0.06)] bg-[#f0f0f4] text-slate-700 font-medium hover:text-[#1E6F3F] transition flex items-center gap-2 text-base">
<i className="w-4 h-4" data-lucide="printer"></i> Generate PDF
                        </button>
<button className="px-6 py-3 rounded-xl shadow-[-4px_-4px_8px_rgba(255,255,255,0.1),_4px_4px_8px_rgba(0,0,0,0.2)] bg-[#1E6F3F] text-white font-medium hover:bg-[#185932] transition flex items-center gap-2 border border-white/10 text-base">
<i className="w-4 h-4" data-lucide="plus"></i> New Assignment
                        </button>
</div>
</div>

<div className="grid grid-cols-4 gap-6">

<div className="p-6 rounded-2xl shadow-[-6px_-6px_12px_rgba(255,255,255,0.8),_6px_6px_12px_rgba(0,0,0,0.06)] bg-[#f0f0f4] border border-white/50 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<i className="w-24 h-24" data-lucide="activity"></i>
</div>
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),_inset_-2px_-2px_4px_rgba(255,255,255,0.5)] flex items-center justify-center bg-[#ebecf0] text-[#1E6F3F]">
<i className="w-5 h-5" data-lucide="test-tube"></i>
</div>
<h3 className="text-base font-medium text-slate-500">Active Samples</h3>
</div>
<div className="text-4xl font-['Playfair_Display'] tracking-tight text-[#1A3A5C] mb-2">1,248</div>
<div className="flex items-center gap-2 text-sm text-[#1E6F3F] font-medium">
<i className="w-4 h-4" data-lucide="trending-up"></i> +12% from last week
                        </div>
</div>

<div className="p-6 rounded-2xl shadow-[-6px_-6px_12px_rgba(255,255,255,0.8),_6px_6px_12px_rgba(0,0,0,0.06)] bg-[#f0f0f4] border border-white/50">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),_inset_-2px_-2px_4px_rgba(255,255,255,0.5)] flex items-center justify-center bg-[#ebecf0] text-[#C6A43F]">
<i className="w-5 h-5" data-lucide="clock"></i>
</div>
<h3 className="text-base font-medium text-slate-500">Avg. Turnaround</h3>
</div>
<div className="text-4xl font-['Playfair_Display'] tracking-tight text-[#1A3A5C] mb-2">4.2 <span className="text-xl text-slate-400">days</span></div>
<div className="flex items-center gap-2 text-sm text-[#1E6F3F] font-medium">
<i className="w-4 h-4" data-lucide="trending-down"></i> Improved from 14d
                        </div>
</div>

<div className="p-6 rounded-2xl shadow-[-6px_-6px_12px_rgba(255,255,255,0.8),_6px_6px_12px_rgba(0,0,0,0.06)] bg-[#f0f0f4] border border-[#C6A43F]/30 relative">
<div className="absolute top-4 right-4 flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
</div>
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),_inset_-2px_-2px_4px_rgba(255,255,255,0.5)] flex items-center justify-center bg-[#ebecf0] text-red-500">
<i className="w-5 h-5" data-lucide="scale"></i>
</div>
<h3 className="text-base font-medium text-slate-500">Active Disputes</h3>
</div>
<div className="text-4xl font-['Playfair_Display'] tracking-tight text-[#1A3A5C] mb-2">14</div>
<div className="text-sm text-slate-500">Awaiting arbitration review</div>
</div>

<div className="p-6 rounded-2xl shadow-[-6px_-6px_12px_rgba(255,255,255,0.8),_6px_6px_12px_rgba(0,0,0,0.06)] bg-[#f0f0f4] border border-white/50">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),_inset_-2px_-2px_4px_rgba(255,255,255,0.5)] flex items-center justify-center bg-[#ebecf0] text-[#1E6F3F]">
<i className="w-5 h-5" data-lucide="coins"></i>
</div>
<h3 className="text-base font-medium text-slate-500">Revenue Protected</h3>
</div>
<div className="text-3xl font-['Playfair_Display'] tracking-tight text-[#1A3A5C] mb-2 truncate" title="TZS 18.4 Billion">18.4B <span className="text-xl text-slate-400">TZS</span></div>
<div className="text-sm text-slate-500">Year to date via reclassification</div>
</div>
</div>

<div className="grid grid-cols-3 gap-8">

<div className="col-span-2 p-6 rounded-2xl shadow-[-6px_-6px_12px_rgba(255,255,255,0.8),_6px_6px_12px_rgba(0,0,0,0.06)] bg-[#f0f0f4] border border-white/50 flex flex-col h-[500px]">
<div className="flex justify-between items-center mb-6">
<h3 className="text-xl font-['Playfair_Display'] font-medium text-[#1A3A5C]">Priority Queue (TANCIS Linked)</h3>
<button className="text-[#1E6F3F] text-sm font-medium hover:underline">View All</button>
</div>

<div className="flex-1 rounded-xl shadow-[inset_3px_3px_6px_rgba(0,0,0,0.06),_inset_-3px_-3px_6px_rgba(255,255,255,0.8)] bg-[#ebecf0] overflow-hidden flex flex-col">
<div className="overflow-y-auto p-2">
<table className="w-full text-left border-collapse">
<thead>
<tr className="text-xs uppercase tracking-widest text-slate-400 border-b border-slate-300/50">
<th className="p-4 font-medium">MRN / Sample ID</th>
<th className="p-4 font-medium">Product / HS</th>
<th className="p-4 font-medium">Risk Score</th>
<th className="p-4 font-medium">Status</th>
</tr>
</thead>
<tbody className="text-sm">

<tr className="border-b border-slate-300/30 hover:bg-white/40 transition-colors">
<td className="p-4">
<div className="font-medium text-[#1A3A5C]">24TZ10029384</div>
<div className="text-xs text-slate-500 font-mono mt-1">SPL-849-DAR</div>
</td>
<td className="p-4">
<div className="text-slate-800">Lubricating Oil</div>
<div className="text-xs text-[#C6A43F] font-medium mt-1">Decl: 2710.19.00</div>
</td>
<td className="p-4">
<span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100/50 text-red-700 border border-red-200 shadow-sm">94% High</span>
</td>
<td className="p-4 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
<span className="text-slate-600">In GC-MS</span>
</td>
</tr>

<tr className="border-b border-slate-300/30 hover:bg-white/40 transition-colors">
<td className="p-4">
<div className="font-medium text-[#1A3A5C]">24TZ10099411</div>
<div className="text-xs text-slate-500 font-mono mt-1">SPL-850-KIA</div>
</td>
<td className="p-4">
<div className="text-slate-800">Woven Fabric</div>
<div className="text-xs text-slate-500 font-medium mt-1">Decl: 5208.11.00</div>
</td>
<td className="p-4">
<span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100/50 text-orange-700 border border-orange-200 shadow-sm">65% Med</span>
</td>
<td className="p-4 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<span className="text-slate-600">Prep Room</span>
</td>
</tr>

<tr className="hover:bg-white/40 transition-colors">
<td className="p-4">
<div className="font-medium text-[#1A3A5C]">24TZ10077221</div>
<div className="text-xs text-slate-500 font-mono mt-1">SPL-851-NAM</div>
</td>
<td className="p-4">
<div className="text-slate-800">Frozen Poultry</div>
<div className="text-xs text-slate-500 font-medium mt-1">Decl: 0207.14.00</div>
</td>
<td className="p-4">
<span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100/50 text-green-700 border border-green-200 shadow-sm">12% Low</span>
</td>
<td className="p-4 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-purple-500"></div>
<span className="text-slate-600">Ext: TBS Lab</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="space-y-6">

<div className="p-6 rounded-2xl shadow-[-6px_-6px_12px_rgba(255,255,255,0.8),_6px_6px_12px_rgba(0,0,0,0.06)] bg-gradient-to-br from-[#1A3A5C] to-[#0f243b] text-white border border-[#C6A43F]/50">
<div className="flex items-center gap-3 mb-4">
<i className="w-6 h-6 text-[#C6A43F]" data-lucide="brain-circuit"></i>
<h3 className="font-['Playfair_Display'] text-xl tracking-tight">Predictive Alert</h3>
</div>
<p className="text-sm text-slate-300 mb-4 leading-relaxed">Anomaly detected in TANCIS declaration <span className="font-mono bg-white/10 px-1 rounded">DEC-992A</span>. Importer history suggests 85% probability of misclassifying Chapter 39 polymers.</p>
<button className="w-full py-2 bg-[#C6A43F] text-[#1A3A5C] font-medium rounded-lg text-sm hover:bg-[#b09133] transition shadow-lg">Trigger Auto-Sample</button>
</div>

<div className="p-6 rounded-2xl shadow-[-6px_-6px_12px_rgba(255,255,255,0.8),_6px_6px_12px_rgba(0,0,0,0.06)] bg-[#f0f0f4] border border-white/50">
<h3 className="text-lg font-['Playfair_Display'] font-medium text-[#1A3A5C] mb-4">Latest Ledger Entries</h3>
<div className="space-y-4">
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-3 h-3 rounded-full bg-[#1E6F3F] ring-4 ring-[#1E6F3F]/20"></div>
<div className="w-0.5 h-full bg-slate-300 mt-1"></div>
</div>
<div className="pb-4">
<p className="text-sm font-medium text-slate-800">Result Committed</p>
<p className="text-xs text-slate-500 mt-1 font-mono">Hash: 0x8f...4a2b</p>
<p className="text-xs text-slate-400 mt-1">2 mins ago • Dar Lab</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-3 h-3 rounded-full bg-slate-400"></div>
</div>
<div>
<p className="text-sm font-medium text-slate-800">Sample Transferred</p>
<p className="text-xs text-slate-500 mt-1 font-mono">Hash: 0x3e...991c</p>
<p className="text-xs text-slate-400 mt-1">1 hr ago • Tunduma Border</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden space-y-8 animate-fade-in h-full flex flex-col" id="view-hs-engine">
<div>
<h2 className="text-3xl font-['Playfair_Display'] tracking-tight font-medium text-[#1A3A5C]">Multi-Modal HS Classifier</h2>
<p className="text-base text-slate-500 mt-1">Upload images, technical specs, or FTIR results to query the EAC CET 2022 database via AI.</p>
</div>

<div className="p-2 rounded-2xl shadow-[-6px_-6px_12px_rgba(255,255,255,0.8),_6px_6px_12px_rgba(0,0,0,0.06)] bg-[#f0f0f4] border border-[#C6A43F]/30 flex items-center">
<button className="p-4 text-slate-400 hover:text-[#1A3A5C] transition"><i className="w-6 h-6" data-lucide="paperclip"></i></button>
<button className="p-4 text-slate-400 hover:text-[#1A3A5C] transition"><i className="w-6 h-6" data-lucide="image"></i></button>
<input className="flex-1 bg-transparent border-none focus:ring-0 text-lg outline-none px-4 text-slate-700" placeholder="Describe the product (e.g., 'Clear liquid, density 0.85, smells like alcohol') or paste WCO notes..." type="text"/>
<button className="m-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#1A3A5C] to-[#2a5a8c] text-white shadow-lg flex items-center gap-3 hover:opacity-90 transition font-medium text-base">
<i className="w-5 h-5 text-[#C6A43F]" data-lucide="sparkles"></i> Predict HS
                    </button>
</div>

<div className="flex-1 rounded-2xl shadow-[inset_3px_3px_6px_rgba(0,0,0,0.06),_inset_-3px_-3px_6px_rgba(255,255,255,0.8)] bg-[#ebecf0] p-8 overflow-y-auto">
<div className="max-w-4xl mx-auto space-y-6">

<div className="p-6 rounded-2xl bg-[#f0f0f4] shadow-[-4px_-4px_8px_rgba(255,255,255,0.8),_4px_4px_8px_rgba(0,0,0,0.06)] border-l-4 border-[#1E6F3F]">
<div className="flex justify-between items-start mb-4">
<div>
<div className="flex items-center gap-3">
<h3 className="text-2xl font-['Playfair_Display'] tracking-tight font-medium text-[#1E6F3F]">3901.20.00</h3>
<span className="px-3 py-1 rounded-md bg-[#1E6F3F]/10 text-[#1E6F3F] text-xs font-medium">98.5% Match</span>
</div>
<p className="text-base text-slate-700 font-medium mt-2">Polyethylene having a specific gravity of 0.94 or more</p>
</div>
<button className="p-2 rounded-lg bg-[#ebecf0] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),_inset_-2px_-2px_4px_rgba(255,255,255,0.5)] text-slate-500 hover:text-[#1A3A5C]"><i className="w-5 h-5" data-lucide="copy"></i></button>
</div>
<div className="bg-white/50 rounded-xl p-4 text-sm text-slate-600 border border-slate-200/50">
<span className="font-medium text-[#1A3A5C] block mb-2">WCO Explanatory Note excerpt:</span>
                                "This heading covers polyethylene... The specific gravity is determined according to ISO 1183. High density polyethylene (HDPE) falls here."
                            </div>
<div className="mt-4 flex gap-3">
<button className="px-4 py-2 rounded-lg bg-[#1A3A5C] text-white text-sm font-medium hover:bg-[#122840] transition shadow-md">Apply to Sample</button>
<button className="px-4 py-2 rounded-lg bg-transparent border border-slate-300 text-slate-600 text-sm font-medium hover:bg-slate-50 transition">View Full Hierarchy</button>
</div>
</div>

<div className="p-6 rounded-2xl bg-[#f0f0f4] shadow-[-4px_-4px_8px_rgba(255,255,255,0.8),_4px_4px_8px_rgba(0,0,0,0.06)] border-l-4 border-slate-300 opacity-80 hover:opacity-100 transition">
<div className="flex items-center gap-3">
<h3 className="text-xl font-['Playfair_Display'] tracking-tight font-medium text-slate-600">3901.10.00</h3>
<span className="px-3 py-1 rounded-md bg-slate-200 text-slate-600 text-xs font-medium">12.1% Match</span>
</div>
<p className="text-sm text-slate-500 mt-1">Polyethylene having a specific gravity of less than 0.94</p>
</div>
</div>
</div>
</div>

<div className="hidden space-y-6 h-full flex flex-col animate-fade-in" id="view-lab-sim">
<div className="flex justify-between items-center">
<div>
<h2 className="text-3xl font-['Playfair_Display'] tracking-tight font-medium text-[#1A3A5C]">Dar es Salaam HQs Lab Map</h2>
<p className="text-base text-slate-500 mt-1">Live instrument telemetry and spatial workflow visualization.</p>
</div>

<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-14 h-7 bg-[#ebecf0] peer-focus:outline-none rounded-full peer shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),_inset_-2px_-2px_4px_rgba(255,255,255,0.5)] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#1E6F3F]"></div>
<span className="ml-3 text-sm font-medium text-slate-600">Live Telemetry</span>
</label>
</div>
<div className="flex-1 rounded-3xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05),_inset_-4px_-4px_8px_rgba(255,255,255,0.8)] bg-[#ebecf0] p-8 relative overflow-hidden flex items-center justify-center border border-[#C6A43F]/20">

<div className="w-full max-w-5xl aspect-[16/9] bg-[#f0f0f4] rounded-2xl shadow-[-8px_-8px_16px_rgba(255,255,255,0.8),_8px_8px_16px_rgba(0,0,0,0.1)] border-2 border-slate-200/50 relative p-4 grid grid-cols-4 grid-rows-3 gap-4">

<div className="col-span-1 row-span-3 rounded-xl border border-dashed border-slate-400 bg-[#ebecf0] p-4 flex flex-col justify-between">
<div>
<h4 className="text-sm font-medium text-slate-700 uppercase tracking-wide">Receiving Bay</h4>
<p className="text-xs text-slate-500 mt-1">24 Samples Pending</p>
</div>
<div className="flex gap-2">
<div className="w-8 h-8 rounded-full bg-[#1E6F3F] text-white flex items-center justify-center animate-pulse"><i className="w-4 h-4" data-lucide="box"></i></div>
</div>
</div>

<div className="col-span-2 row-span-1 rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),_inset_-2px_-2px_4px_rgba(255,255,255,0.5)] bg-[#f8f9fa] border-l-4 border-[#1A3A5C] p-4 relative">
<h4 className="text-sm font-medium text-[#1A3A5C]">Spectroscopy Lab</h4>

<div className="absolute top-4 right-4 flex gap-4">
<div className="group relative cursor-pointer">
<div className="w-10 h-10 rounded-lg shadow-[-2px_-2px_4px_rgba(255,255,255,0.8),_2px_2px_4px_rgba(0,0,0,0.06)] bg-white flex items-center justify-center border border-[#1E6F3F]/30 relative">
<i className="w-5 h-5 text-[#1E6F3F]" data-lucide="monitor-speaker"></i>
<span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
</div>

<div className="hidden group-hover:block absolute bottom-full mb-2 right-0 w-48 p-3 bg-[#1A3A5C] text-white text-xs rounded-xl shadow-xl z-10">
<p className="font-medium mb-1">FTIR Spectrometer (Nicolet)</p>
<p className="text-slate-300">Status: Running (Sample SPL-849)</p>
<p className="text-slate-300">Temp: 22.1°C</p>
</div>
</div>
<div className="w-10 h-10 rounded-lg shadow-[-2px_-2px_4px_rgba(255,255,255,0.8),_2px_2px_4px_rgba(0,0,0,0.06)] bg-white flex items-center justify-center border border-slate-200 relative">
<i className="w-5 h-5 text-slate-400" data-lucide="monitor-speaker"></i>
<span className="absolute -top-1 -right-1 w-3 h-3 bg-slate-300 border-2 border-white rounded-full"></span>
</div>
</div>
</div>

<div className="col-span-1 row-span-2 rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),_inset_-2px_-2px_4px_rgba(255,255,255,0.5)] bg-[#f8f9fa] border-l-4 border-[#C6A43F] p-4 relative">
<h4 className="text-sm font-medium text-slate-700">Wet Chemistry</h4>
<div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded-md">
<i className="w-3 h-3" data-lucide="wind"></i> Fume Hood Alert
                            </div>
</div>

<div className="col-span-2 row-span-2 rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),_inset_-2px_-2px_4px_rgba(255,255,255,0.5)] bg-[#f8f9fa] border-l-4 border-slate-500 p-4 relative">
<h4 className="text-sm font-medium text-slate-700">Chromatography (GC-MS / HPLC)</h4>
<div className="mt-8 flex gap-6">
<div className="text-center">
<div className="w-16 h-24 rounded-lg shadow-[-4px_-4px_8px_rgba(255,255,255,0.8),_4px_4px_8px_rgba(0,0,0,0.06)] bg-[#ebecf0] mx-auto border-t-4 border-[#1E6F3F] flex flex-col items-center justify-center">
<i className="w-6 h-6 text-slate-600 mb-2" data-lucide="server"></i>
<span className="text-[10px] font-mono text-[#1E6F3F] bg-[#1E6F3F]/10 px-1 rounded">GC-01</span>
</div>
</div>
<div className="text-center">
<div className="w-16 h-24 rounded-lg shadow-[-4px_-4px_8px_rgba(255,255,255,0.8),_4px_4px_8px_rgba(0,0,0,0.06)] bg-[#ebecf0] mx-auto border-t-4 border-[#C6A43F] flex flex-col items-center justify-center">
<i className="w-6 h-6 text-slate-600 mb-2" data-lucide="server"></i>
<span className="text-[10px] font-mono text-[#C6A43F] bg-[#C6A43F]/10 px-1 rounded">HPLC-02</span>
</div>
<div className="mt-2 text-[10px] text-slate-500 animate-pulse">Running Ref Standard</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden space-y-6 h-full flex flex-col animate-fade-in" id="view-projects">
<div className="flex justify-between items-center">
<div>
<h2 className="text-3xl font-['Playfair_Display'] tracking-tight font-medium text-[#1A3A5C]">ISO Accreditation Strategy</h2>
<p className="text-base text-slate-500 mt-1">Project tracking and document formulation.</p>
</div>
<button className="px-4 py-2 rounded-xl shadow-[-4px_-4px_8px_rgba(255,255,255,0.8),_4px_4px_8px_rgba(0,0,0,0.06)] bg-[#f0f0f4] text-slate-700 font-medium hover:text-[#1E6F3F] transition flex items-center gap-2 text-sm border border-slate-200">
<i className="w-4 h-4" data-lucide="download"></i> Export XLSX
                    </button>
</div>
<div className="flex-1 rounded-2xl shadow-[-6px_-6px_12px_rgba(255,255,255,0.8),_6px_6px_12px_rgba(0,0,0,0.06)] bg-[#f0f0f4] border border-white/50 overflow-hidden flex flex-col">
<div className="flex border-b border-slate-300/50 bg-[#ebecf0] text-sm font-medium text-slate-600">
<div className="w-1/3 p-4 border-r border-slate-300/50">Task / Method</div>
<div className="w-2/3 flex">

<div className="flex-1 p-2 text-center border-r border-slate-300/20">Q1</div>
<div className="flex-1 p-2 text-center border-r border-slate-300/20">Q2</div>
<div className="flex-1 p-2 text-center border-r border-slate-300/20">Q3</div>
<div className="flex-1 p-2 text-center">Q4</div>
</div>
</div>
<div className="flex-1 overflow-y-auto">

<div className="flex border-b border-slate-300/20 hover:bg-white/30 transition">
<div className="w-1/3 p-4 border-r border-slate-300/50 text-sm">
<div className="font-medium text-[#1A3A5C]">Validate FTIR Method 4A</div>
<div className="text-xs text-slate-500 mt-1">Assignee: Dr. Amina</div>
</div>
<div className="w-2/3 relative py-4 px-2 flex items-center">

<div className="absolute inset-0 flex">
<div className="flex-1 border-r border-slate-300/10"></div>
<div className="flex-1 border-r border-slate-300/10"></div>
<div className="flex-1 border-r border-slate-300/10"></div>
</div>

<div className="relative w-1/2 ml-[10%] h-8 rounded-lg bg-gradient-to-r from-[#1E6F3F] to-[#288c52] shadow-md flex items-center px-3 text-white text-xs font-medium cursor-pointer hover:opacity-90">
                                    In Progress - 45%
                                    
</div>
</div>
</div>

<div className="flex border-b border-slate-300/20 hover:bg-white/30 transition">
<div className="w-1/3 p-4 border-r border-slate-300/50 text-sm">
<div className="font-medium text-slate-700">Procure GC-MS Reference Docs</div>
<div className="text-xs text-slate-500 mt-1">Status: Blocked</div>
</div>
<div className="w-2/3 relative py-4 px-2 flex items-center">
<div className="absolute inset-0 flex">
<div className="flex-1 border-r border-slate-300/10"></div>
<div className="flex-1 border-r border-slate-300/10"></div>
<div className="flex-1 border-r border-slate-300/10"></div>
</div>

<div className="relative w-1/4 ml-[50%] h-8 rounded-lg bg-gradient-to-r from-red-500 to-red-400 shadow-md flex items-center px-3 text-white text-xs font-medium">
                                    Delayed
                                </div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden space-y-8 animate-fade-in" id="view-admin">
<div>
<h2 className="text-3xl font-['Playfair_Display'] tracking-tight font-medium text-red-800">God Mode Workbench</h2>
<p className="text-base text-slate-500 mt-1">Real-time systemic parameter mutations. Changes broadcast via Kafka globally.</p>
</div>
<div className="grid grid-cols-3 gap-8">

<div className="col-span-1 rounded-2xl shadow-[inset_3px_3px_6px_rgba(0,0,0,0.06),_inset_-3px_-3px_6px_rgba(255,255,255,0.8)] bg-[#ebecf0] p-4 flex flex-col gap-2 h-fit">
<button className="w-full text-left px-4 py-3 rounded-xl bg-[#f0f0f4] shadow-[-4px_-4px_8px_rgba(255,255,255,0.8),_4px_4px_8px_rgba(0,0,0,0.06)] text-[#1A3A5C] font-medium border-l-4 border-[#C6A43F]">Workflow Rules Engine</button>
<button className="w-full text-left px-4 py-3 rounded-xl text-slate-600 hover:bg-white/50 transition font-medium">AI Model Parameters</button>
<button className="w-full text-left px-4 py-3 rounded-xl text-slate-600 hover:bg-white/50 transition font-medium">TANCIS Endpoint Config</button>
<button className="w-full text-left px-4 py-3 rounded-xl text-slate-600 hover:bg-white/50 transition font-medium">Role &amp; Permissions Map</button>
</div>

<div className="col-span-2 p-6 rounded-2xl shadow-[-6px_-6px_12px_rgba(255,255,255,0.8),_6px_6px_12px_rgba(0,0,0,0.06)] bg-[#f0f0f4] border border-white/50 border-t-4 border-t-red-700">
<h3 className="text-xl font-['Playfair_Display'] font-medium text-slate-800 mb-6">Edit Rule: External Lab Routing</h3>
<div className="space-y-6">
<div>
<label className="block text-sm font-medium text-slate-600 mb-2">Rule Name / ID</label>
<input className="w-full px-4 py-3 bg-[#ebecf0] rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),_inset_-2px_-2px_4px_rgba(255,255,255,0.5)] border-none outline-none text-slate-800 font-mono text-sm" readonly="" type="text" value="RTE-EXT-FOOD-01"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-600 mb-2">Condition Expression (SQL/JSON logic)</label>
<textarea className="w-full px-4 py-3 bg-[#1e1e1e] text-green-400 rounded-xl shadow-inner border-none outline-none font-mono text-sm resize-none" rows="3">product_category = 'FOOD' AND quantity &gt; 10000 AND internal_capacity = false</textarea>
</div>
<div className="grid grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-slate-600 mb-2">Target External Entity</label>

<div className="w-full px-4 py-3 bg-[#ebecf0] rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),_inset_-2px_-2px_4px_rgba(255,255,255,0.5)] flex justify-between items-center cursor-pointer">
<span className="text-slate-700 text-sm font-medium">TBS Food Lab (API v2)</span>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-down"></i>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-600 mb-2">Require Blockchain Hash</label>
<label className="relative inline-flex items-center cursor-pointer mt-1">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-14 h-7 bg-[#ebecf0] peer-focus:outline-none rounded-full peer shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),_inset_-2px_-2px_4px_rgba(255,255,255,0.5)] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-red-700"></div>
</label>
</div>
</div>
<div className="pt-6 border-t border-slate-300/50 flex justify-end gap-4">
<button className="px-6 py-2 text-slate-500 font-medium hover:text-slate-800 transition">Discard</button>
<button className="px-6 py-2 rounded-xl bg-red-700 text-white font-medium hover:bg-red-800 transition shadow-lg flex items-center gap-2">
<i className="w-4 h-4" data-lucide="zap"></i> Deploy Change Globally
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<button className="fixed bottom-8 right-8 w-16 h-16 rounded-full shadow-[-6px_-6px_12px_rgba(255,255,255,0.8),_6px_6px_12px_rgba(0,0,0,0.1)] bg-gradient-to-tr from-[#C6A43F] to-[#e0c266] text-[#1A3A5C] flex items-center justify-center hover:scale-105 transition-transform z-30 group">
<i className="w-8 h-8" data-lucide="headset" strokeWidth="1.5"></i>

<span className="absolute right-full mr-4 bg-[#1A3A5C] text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-lg">Global Call Center (VoIP)</span>
</button>

<div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 hidden flex-col items-center justify-center opacity-0 transition-opacity duration-300" id="biometric-modal">
<div className="bg-[#f0f0f4] p-8 rounded-3xl shadow-2xl max-w-sm w-full border border-white/50 text-center transform scale-95 transition-transform duration-300" id="bio-card">
<h3 className="text-2xl font-['Playfair_Display'] font-medium text-[#1A3A5C] mb-2">System Authorization</h3>
<p className="text-sm text-slate-500 mb-8">Hardware biometric required for Super Admin elevation.</p>
<div className="w-24 h-24 mx-auto rounded-full shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05),_inset_-4px_-4px_8px_rgba(255,255,255,0.8)] bg-[#ebecf0] flex items-center justify-center relative overflow-hidden group cursor-pointer" onclick="simulateLogin()">

<div className="absolute top-0 left-0 w-full h-1 bg-[#C6A43F] shadow-[0_0_10px_#C6A43F] hidden" id="scan-line"></div>
<i className="w-12 h-12 text-[#1A3A5C] transition-colors" data-lucide="fingerprint" id="finger-icon"></i>
</div>
<p className="mt-6 text-sm font-medium text-[#1E6F3F] hidden" id="bio-status">Identity Confirmed</p>
<p className="mt-6 text-xs text-slate-400">Cancel</p>
</div>
</div>


    </>
  );
}
