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
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
slate: {
850: '#151f32',
900: '#0f172a',
950: '#020617',
},
neon: {
400: '#a3e635', // Lime-400
500: '#84cc16', // Lime-500
glow: 'rgba(163, 230, 53, 0.15)'
},
mpesa: {
500: '#43A047',
600: '#2E7D32'
},
escrow: {
500: '#F59E0B', // Amber for Locked/Escrow
900: '#451a03'
},
protocol: {
500: '#6366f1', // Indigo for Blockchain/Night
900: '#1e1b4b'
}
},
boxShadow: {
'glow': '0 0 20px rgba(163, 230, 53, 0.15)',
'escrow': '0 0 15px rgba(245, 158, 11, 0.15)',
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        // Custom animation for QR scanner
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes translate-y {
                0% { transform: translateY(0); }
                50% { transform: translateY(180px); }
                100% { transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);

        function switchView(viewName) {
            // Define all views
            const views = ['merchant', 'admin', 'pickup', 'tracking', 'whatsapp', 'revenue'];
            
            // Hide all views
            views.forEach(v => {
                const el = document.getElementById(`view-${v}`);
                if(el) el.classList.add('hidden');
                
                // Reset Nav Styles
                const btn = document.getElementById(`btn-${v}`);
                if(btn) {
                    btn.classList.remove('bg-slate-900', 'border', 'border-slate-800/50', 'text-slate-300', 'text-white');
                    btn.classList.add('text-slate-400');
                    const icon = btn.querySelector('iconify-icon');
                    if(icon) icon.classList.remove('text-neon-400', 'text-green-400');
                }
            });

            // Show selected view
            const selectedView = document.getElementById(`view-${viewName}`);
            if(selectedView) {
                selectedView.classList.remove('hidden');
                // Very subtle fade in
                selectedView.classList.add('animate-[fadeIn_0.2s_ease-out]');
            }

            // Activate Nav Button
            const activeBtn = document.getElementById(`btn-${viewName}`);
            if(activeBtn) {
                activeBtn.classList.add('bg-slate-900', 'border', 'border-slate-800/50', 'text-slate-300');
                activeBtn.classList.remove('text-slate-400');
                
                // Color logic based on section
                const icon = activeBtn.querySelector('iconify-icon');
                if(icon) icon.classList.add('text-neon-400');
            }

            // Update Header Titles
            const titles = {
                'merchant': 'Merchant Dashboard',
                'admin': 'Logistics Grid Control',
                'pickup': 'Partner Portal (Agent View)',
                'tracking': 'Customer Pickup Pass',
                'whatsapp': 'Automation Logs',
                'revenue': 'Settlement Bridge'
            };
            
            const titleEl = document.getElementById('page-title');
            if(titleEl) titleEl.textContent = titles[viewName] || 'Dashboard';

            // Close mobile sidebar
            if(window.innerWidth < 1024) {
                document.getElementById('sidebar').classList.add('-translate-x-full');
            }
        }
    
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
      

<div className="lg:hidden flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-tr from-neon-400 to-emerald-600 rounded flex items-center justify-center text-slate-950 font-bold tracking-tighter">P</div>
<span className="text-slate-100 font-semibold tracking-tight">PrivateShip</span>
</div>
<button className="text-slate-400 hover:text-white" onclick="document.getElementById('sidebar').classList.toggle('-translate-x-full')">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="flex min-h-screen relative overflow-hidden">

<aside className="fixed inset-y-0 left-0 z-40 w-64 transform -translate-x-full lg:translate-x-0 transition-transform duration-300 border-r border-slate-800 bg-slate-950 flex flex-col" id="sidebar">
<div className="h-16 flex items-center px-6 border-b border-slate-800">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-neon-400 rounded-sm flex items-center justify-center text-slate-950 text-xs font-bold shadow-glow">P</div>
<span className="text-slate-100 font-semibold tracking-tight">PrivateShip</span>
<span className="text-[9px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400 border border-slate-700">v1.0</span>
</div>
</div>
<nav className="flex-1 px-4 py-6 space-y-8 overflow-y-auto">
<div>
<h3 className="px-2 text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">Core Modules</h3>
<div className="space-y-1">
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-300 hover:bg-slate-900 hover:text-neon-400 transition-colors group bg-slate-900 border border-slate-800/50" id="btn-merchant" onclick="switchView('merchant')">
<iconify-icon className="text-slate-400 group-hover:text-neon-400" icon="lucide:store" strokeWidth="1.5" width="18"></iconify-icon>
                            Merchant Dashboard
                        </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-400 hover:bg-slate-900 hover:text-neon-400 transition-colors group" id="btn-pickup" onclick="switchView('pickup')">
<iconify-icon className="text-slate-400 group-hover:text-neon-400" icon="lucide:scan-line" strokeWidth="1.5" width="18"></iconify-icon>
                            Partner Portal
                        </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-400 hover:text-white hover:bg-slate-900 transition-colors group" id="btn-tracking" onclick="switchView('tracking')">
<iconify-icon className="text-slate-400 group-hover:text-neon-400" icon="lucide:qr-code" strokeWidth="1.5" width="18"></iconify-icon>
                            Customer Pass
                        </button>
</div>
</div>
<div>
<h3 className="px-2 text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">Infrastructure</h3>
<div className="space-y-1">
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-400 hover:text-white hover:bg-slate-900 transition-colors group" id="btn-revenue" onclick="switchView('revenue')">
<iconify-icon className="text-slate-400 group-hover:text-neon-400" icon="lucide:arrow-left-right" strokeWidth="1.5" width="18"></iconify-icon>
                            Settlement Bridge
                        </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-400 hover:bg-slate-900 hover:text-neon-400 transition-colors group" id="btn-admin" onclick="switchView('admin')">
<iconify-icon className="text-slate-400 group-hover:text-neon-400" icon="lucide:network" strokeWidth="1.5" width="18"></iconify-icon>
                            Logistics Grid
                        </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-400 hover:text-white hover:bg-slate-900 transition-colors group" id="btn-whatsapp" onclick="switchView('whatsapp')">
<iconify-icon className="text-slate-400 group-hover:text-green-400" icon="lucide:bot" strokeWidth="1.5" width="18"></iconify-icon>
                            Automation Logs
                        </button>
</div>
</div>
</nav>
<div className="p-4 border-t border-slate-800">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center relative">
<iconify-icon className="text-neon-400" icon="lucide:shield-check" width="16"></iconify-icon>
<div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-slate-950"></div>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white" id="user-role">Merchant Mode</span>
<span className="text-[10px] text-slate-500 flex items-center gap-1">
<iconify-icon icon="lucide:lock" width="8"></iconify-icon>
                            ID Verified (ZK)
                        </span>
</div>
</div>
</div>
</aside>

<main className="flex-1 lg:ml-64 flex flex-col h-screen overflow-hidden bg-slate-950">

<header className="h-16 flex items-center justify-between px-6 border-b border-slate-800 bg-slate-950">
<div className="flex items-center gap-4">
<h2 className="text-sm font-medium text-white" id="page-title">Merchant Dashboard</h2>
<span className="px-2 py-0.5 rounded-full bg-protocol-900/50 text-protocol-500 text-[10px] font-medium border border-protocol-500/20 flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-protocol-500 animate-pulse"></div>
                        Protocol Online
                    </span>
</div>
<div className="flex items-center gap-6">
<div className="relative hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" icon="lucide:search" width="16"></iconify-icon>
<input className="pl-9 pr-4 py-1.5 bg-slate-900 border border-slate-800 rounded-md text-xs text-white placeholder-slate-600 focus:outline-none focus:border-neon-500 focus:ring-1 focus:ring-neon-500 w-64 transition-all" placeholder="Trace ID / Wallet Address..." type="text"/>
</div>
<button className="relative text-slate-400 hover:text-white transition-colors">
<iconify-icon icon="lucide:bell" strokeWidth="1.5" width="18"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-950"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6" id="main-content-area">

<div className="space-y-6" id="view-merchant">

<div className="bg-gradient-to-r from-slate-900 via-slate-900 to-protocol-900/20 border border-slate-800 rounded-lg p-5 relative overflow-hidden group">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
<div className="space-y-1">
<h3 className="text-sm font-semibold text-white flex items-center gap-2">
<iconify-icon className="text-neon-400" icon="lucide:shield-check"></iconify-icon>
                                    Privacy-First Model Active
                                </h3>
<div className="flex flex-wrap gap-4 text-xs text-slate-400 mt-2">
<div className="flex items-center gap-1.5 text-neon-400">
<iconify-icon icon="lucide:check-circle" width="14"></iconify-icon>
<span>Address Hidden</span>
</div>
<div className="flex items-center gap-1.5 text-neon-400">
<iconify-icon icon="lucide:check-circle" width="14"></iconify-icon>
<span>ID Verified (Zero-Knowledge)</span>
</div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="lucide:lock" width="14"></iconify-icon>
<span>Escrow Secured</span>
</div>
</div>
</div>
<div className="flex gap-2">
<span className="text-[10px] bg-slate-950 px-3 py-1.5 rounded border border-slate-700 text-slate-400 flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                    M-Pesa Bridge: Live
                                </span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 space-y-4">
<div className="bg-slate-900 border border-slate-800 rounded-lg p-5 relative">

<div className="absolute top-5 right-5 flex items-center gap-2">
<span className="text-[9px] uppercase tracking-widest text-slate-600 border border-slate-700 px-2 py-0.5 rounded">Confidential</span>
</div>
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-white">Create Private Shipment</h3>
</div>
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-[10px] font-medium text-slate-400 uppercase tracking-wider flex justify-between">
                                                Customer Name
                                                <span className="text-neon-400 text-[9px] flex items-center gap-1"><iconify-icon icon="lucide:eye-off" width="10"></iconify-icon> Masked for Rider</span>
</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded text-sm text-white px-3 py-2 focus:ring-1 focus:ring-neon-500 focus:border-neon-500 outline-none transition-all placeholder-slate-700" placeholder="e.g. John Kamau" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">WhatsApp (Link for Updates)</label>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-xs">+254</span>
<input className="w-full bg-slate-950 border border-slate-800 rounded text-sm text-white pl-12 pr-3 py-2 focus:ring-1 focus:ring-neon-500 focus:border-neon-500 outline-none transition-all placeholder-slate-700" placeholder="712 345 678" type="text"/>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Select Partner Pickup Point</label>
<div className="relative">
<select className="w-full bg-slate-950 border border-slate-800 rounded text-sm text-white px-3 py-2 appearance-none focus:ring-1 focus:ring-neon-500 focus:border-neon-500 outline-none transition-all">
<option>Westlands - Naivas Sarit (Partner #112)</option>
<option>Kilimani - Yaya Petrol Station (Partner #402)</option>
<option>Roysambu - TRM Dropoff (Partner #099)</option>
<option>CBD - City Hall Way Agent (Partner #004)</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
<p className="text-[10px] text-slate-500 mt-1 flex items-center gap-1">
<iconify-icon icon="lucide:info" width="10"></iconify-icon> 
                                            Package will be auto-returned if not collected in 72h.
                                        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Collection Amount (KSh)</label>
<div className="relative">
<input className="w-full bg-slate-950 border border-slate-800 rounded text-sm text-white px-3 py-2 focus:ring-1 focus:ring-neon-500 focus:border-neon-500 outline-none transition-all" placeholder="0.00" type="number"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Smart Contract Action</label>
<select className="w-full bg-slate-950 border border-slate-800 rounded text-sm text-white px-3 py-2 appearance-none focus:ring-1 focus:ring-neon-500 focus:border-neon-500 outline-none transition-all">
<option value="cod">Lock Funds on Pickup (Escrow)</option>
<option value="prepaid">Standard Delivery (Pre-paid)</option>
</select>
</div>
</div>
<div className="pt-2 flex justify-end gap-3">
<button className="px-4 py-2 rounded text-xs font-medium text-slate-400 hover:text-white transition-colors" type="button">Save Draft</button>
<button className="bg-neon-500 hover:bg-neon-400 text-slate-950 px-4 py-2 rounded text-xs font-semibold tracking-wide transition-colors shadow-glow flex items-center gap-2" type="button">
<iconify-icon icon="lucide:send" width="14"></iconify-icon>
                                            Encrypt &amp; Dispatch
                                        </button>
</div>
</form>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="p-4 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors flex-1 relative overflow-hidden">
<div className="absolute right-0 top-0 p-4 opacity-10 text-mpesa-500">
<iconify-icon icon="lucide:wallet" width="48"></iconify-icon>
</div>
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-slate-500">M-Pesa Wallet</span>
</div>
<div className="text-2xl font-semibold text-white tracking-tight">KSh 12,400</div>
<div className="flex items-center gap-2 mt-2">
<span className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400">Available</span>
<span className="text-[10px] text-green-400 flex items-center gap-0.5"><iconify-icon icon="lucide:arrow-up" width="10"></iconify-icon> 4.2%</span>
</div>
</div>
<div className="p-4 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors flex-1 relative overflow-hidden">
<div className="absolute right-0 top-0 p-4 opacity-10 text-escrow-500">
<iconify-icon icon="lucide:lock" width="48"></iconify-icon>
</div>
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-slate-500">In Escrow (Locked)</span>
</div>
<div className="text-2xl font-semibold text-white tracking-tight">KSh 4,500</div>
<div className="text-[10px] text-slate-500 mt-2">Awaiting Pickup Confirmation</div>
</div>
</div>
</div>
</div>

<div className="space-y-6 hidden" id="view-admin">
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
<span className="text-[10px] uppercase tracking-wider text-slate-500">Protocol Volume</span>
<div className="flex items-end gap-2 mt-1">
<h3 className="text-xl font-semibold text-white">452 Pkgs</h3>
</div>
</div>
<div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
<span className="text-[10px] uppercase tracking-wider text-slate-500">Active Riders</span>
<div className="flex items-end gap-2 mt-1">
<h3 className="text-xl font-semibold text-white">24</h3>
<span className="text-[10px] text-neon-400 mb-1">Nairobi</span>
</div>
</div>
<div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
<span className="text-[10px] uppercase tracking-wider text-slate-500">Partner Payouts</span>
<div className="flex items-end gap-2 mt-1">
<h3 className="text-xl font-semibold text-white">KSh 12,450</h3>
</div>
</div>
<div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
<span className="text-[10px] uppercase tracking-wider text-slate-500">Escrow Value</span>
<div className="flex items-end gap-2 mt-1">
<h3 className="text-xl font-semibold text-escrow-500">KSh 185k</h3>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-lg p-5">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-white">Nairobi Logistics Grid</h3>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-slate-950 border border-slate-800 rounded group hover:border-slate-700 transition-all">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center border border-slate-800 text-slate-400">
<iconify-icon icon="lucide:map" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-medium text-white">Route: Westlands Loop</h4>
<p className="text-[10px] text-slate-500">Traffic: <span className="text-red-400">Heavy</span> • 12 Packages</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-[10px] bg-slate-900 px-2 py-1 border border-slate-800 rounded text-slate-400">Rider: Kevin M.</span>
</div>
</div>
<div className="flex items-center justify-between p-3 bg-slate-950 border border-slate-800 rounded group hover:border-slate-700 transition-all">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center border border-slate-800 text-slate-400">
<iconify-icon icon="lucide:map" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-medium text-white">Route: Thika Rd Bypass</h4>
<p className="text-[10px] text-slate-500">Traffic: <span className="text-green-400">Clear</span> • 18 Packages</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-[10px] bg-slate-900 px-2 py-1 border border-slate-800 rounded text-slate-400">Rider: Samuel O.</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6 hidden" id="view-pickup">

<div className="flex justify-between items-end">
<div>
<h2 className="text-xl font-semibold text-white">Naivas Westlands (Sarit)</h2>
<p className="text-xs text-slate-500">Partner ID: #112 • Status: Online</p>
</div>
<div className="bg-slate-900 border border-slate-800 rounded px-4 py-2 flex gap-4">
<div className="text-right">
<div className="text-[10px] text-slate-500 uppercase tracking-wider">Today's Earnings</div>
<div className="text-lg font-bold text-green-400">KSh 450</div>
</div>
<div className="text-right border-l border-slate-800 pl-4">
<div className="text-[10px] text-slate-500 uppercase tracking-wider">Rate / Pkg</div>
<div className="text-lg font-bold text-white">KSh 30</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-slate-900 border border-slate-800 rounded-lg p-6 flex flex-col items-center text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-500 to-transparent"></div>
<h3 className="text-lg font-semibold text-white mb-2">Customer Handover</h3>
<p className="text-xs text-slate-400 mb-6">Scan customer Digital Pass or enter Code</p>
<div className="w-full max-w-xs space-y-4">
<button className="w-full py-4 bg-neon-500 hover:bg-neon-400 text-slate-950 font-bold rounded shadow-glow flex items-center justify-center gap-2 transition-all">
<iconify-icon icon="lucide:scan" width="24"></iconify-icon>
                                    SCAN PICKUP PASS
                                </button>
<div className="relative flex py-2 items-center">
<div className="flex-grow border-t border-slate-800"></div>
<span className="flex-shrink-0 mx-4 text-[10px] text-slate-600 uppercase">Or Manual Entry</span>
<div className="flex-grow border-t border-slate-800"></div>
</div>
<div className="flex gap-2">
<input className="flex-1 bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-white focus:border-neon-500 outline-none text-center tracking-widest font-mono" placeholder="Enter 4-Digit Code" type="text"/>
<button className="px-4 py-2 bg-slate-800 text-white rounded text-sm hover:bg-slate-700">Verify</button>
</div>
</div>
</div>

<div className="bg-slate-900 border border-slate-800 rounded-lg p-0 overflow-hidden flex flex-col h-[400px]">
<div className="px-5 py-4 border-b border-slate-800 bg-slate-900 flex justify-between items-center">
<h3 className="text-sm font-medium text-white">Shelf Inventory (4)</h3>
<span className="text-[10px] text-slate-500">Auto-Return Rule: 72h</span>
</div>
<div className="flex-1 overflow-y-auto p-2 space-y-2">

<div className="flex items-center justify-between p-3 rounded bg-red-950/10 border border-red-900/20">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-slate-950 flex items-center justify-center border border-red-900/30 text-red-400 font-mono text-sm font-bold">
                                            8842
                                        </div>
<div>
<h4 className="text-xs font-medium text-white">Encrypted ID: ...9A2</h4>
<p className="text-[10px] text-red-400 font-medium flex items-center gap-1">
<iconify-icon icon="lucide:clock" width="10"></iconify-icon> Expiry: 4h 12m
                                            </p>
</div>
</div>
<button className="text-[10px] px-2 py-1 rounded bg-slate-800 text-slate-300 hover:text-white border border-slate-700">
                                        Flag Return
                                    </button>
</div>

<div className="flex items-center justify-between p-3 rounded bg-slate-950 border border-slate-800 hover:bg-slate-800/50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-slate-900 flex items-center justify-center border border-slate-800 text-slate-400 font-mono text-sm font-bold">
                                            9921
                                        </div>
<div>
<h4 className="text-xs font-medium text-white">Encrypted ID: ...B4X</h4>
<p className="text-[10px] text-mpesa-500 font-medium">Due: KSh 2,500</p>
</div>
</div>
<span className="text-[10px] text-slate-500">46h left</span>
</div>

<div className="flex items-center justify-between p-3 rounded bg-slate-950 border border-slate-800 hover:bg-slate-800/50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-slate-900 flex items-center justify-center border border-slate-800 text-slate-400 font-mono text-sm font-bold">
                                            1044
                                        </div>
<div>
<h4 className="text-xs font-medium text-white">Encrypted ID: ...C22</h4>
<p className="text-[10px] text-green-500 font-medium">Pre-Paid</p>
</div>
</div>
<span className="text-[10px] text-slate-500">68h left</span>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6 hidden" id="view-tracking">
<div className="bg-slate-900 border border-slate-800 rounded-lg p-8 text-center max-w-2xl mx-auto mt-4">
<h3 className="text-lg font-medium text-white mb-2">Track Shipment</h3>
<div className="flex gap-2 max-w-md mx-auto relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" icon="lucide:search"></iconify-icon>
<input className="flex-1 pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-md text-sm text-white focus:ring-1 focus:ring-neon-500 focus:border-neon-500 outline-none" type="text" value="SHP-8842-KE"/>
<button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-md text-sm border border-slate-700">Search</button>
</div>
</div>

<div className="max-w-md mx-auto bg-slate-900 border border-slate-800 rounded-xl overflow-hidden relative shadow-2xl">

<div className="h-1 bg-gradient-to-r from-neon-400 via-emerald-500 to-neon-400"></div>
<div className="p-6 text-center">
<div className="mb-4">
<h2 className="text-xl font-bold text-white tracking-tight">Digital Pickup Pass</h2>
<p className="text-xs text-slate-400">Present this at <strong className="text-white">Naivas Westlands (Sarit)</strong></p>
</div>

<div className="w-48 h-48 mx-auto bg-white rounded-lg p-2 mb-4 relative overflow-hidden group">
<div className="w-full h-full bg-black qr-pattern"></div>

<div className="absolute top-0 left-0 w-full h-1 bg-neon-500 shadow-[0_0_15px_rgba(132,204,22,0.8)] animate-[translate-y_2s_linear_infinite] group-hover:opacity-100 opacity-50"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white p-1 rounded-full">
<div className="w-8 h-8 bg-slate-950 rounded-full flex items-center justify-center font-bold text-neon-400 text-xs">P</div>
</div>
</div>
</div>

<div className="bg-slate-950 border border-slate-800 rounded-lg p-3 mb-4">
<div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Secure Pickup Code</div>
<div className="text-3xl font-mono font-bold text-white tracking-[0.2em] text-center">8 8 4 2</div>
</div>

<div className="flex items-center justify-center gap-2 mb-6 text-xs bg-red-950/20 text-red-400 py-1.5 rounded border border-red-900/20">
<iconify-icon icon="lucide:timer" width="14"></iconify-icon>
                                Expires in: <span className="font-mono font-bold">47h : 12m : 04s</span>
</div>

<div className="border-t border-slate-800 pt-4 flex justify-between items-center text-left">
<div>
<div className="text-[10px] text-slate-500">Amount to Pay</div>
<div className="text-sm font-bold text-white">KSh 2,500</div>
</div>
<div className="text-right">
<div className="text-[10px] text-slate-500">Method</div>
<div className="text-xs text-green-400 font-medium flex items-center gap-1">
<iconify-icon icon="lucide:smartphone" width="12"></iconify-icon>
                                        M-Pesa Prompt
                                    </div>
</div>
</div>
</div>

<div className="bg-slate-950 p-3 text-center border-t border-slate-800">
<p className="text-[10px] text-slate-500 flex items-center justify-center gap-1.5">
<iconify-icon className="text-neon-400" icon="lucide:shield-check"></iconify-icon>
                                ID Verified via Zero-Knowledge Proof
                            </p>
</div>
</div>
</div>

<div className="space-y-8 hidden" id="view-revenue">

<div className="bg-slate-900 border border-slate-800 rounded-lg p-6 overflow-x-auto">
<h3 className="text-sm font-medium text-white mb-6">Payment Settlement Bridge (Live)</h3>
<div className="flex items-center justify-between min-w-[600px] relative">

<div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -z-0"></div>

<div className="relative z-10 flex flex-col items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-green-500 flex items-center justify-center text-green-500 shadow-[0_0_10px_rgba(34,197,94,0.2)]">
<iconify-icon icon="lucide:smartphone" width="18"></iconify-icon>
</div>
<div className="text-center">
<div className="text-xs font-medium text-white">M-Pesa</div>
<div className="text-[10px] text-slate-500">Customer Pays</div>
</div>
</div>

<div className="relative z-10 bg-slate-900 px-2 text-slate-600">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</div>

<div className="relative z-10 flex flex-col items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-escrow-500 flex items-center justify-center text-escrow-500 shadow-escrow animate-pulse">
<iconify-icon icon="lucide:lock" width="18"></iconify-icon>
</div>
<div className="text-center">
<div className="text-xs font-medium text-escrow-500">Escrow</div>
<div className="text-[10px] text-slate-500">Funds Held</div>
</div>
</div>

<div className="relative z-10 bg-slate-900 px-2 text-slate-600">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</div>

<div className="relative z-10 flex flex-col items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center text-slate-300">
<iconify-icon icon="lucide:scan" width="18"></iconify-icon>
</div>
<div className="text-center">
<div className="text-xs font-medium text-slate-300">Pickup Scan</div>
<div className="text-[10px] text-slate-500">Verification</div>
</div>
</div>

<div className="relative z-10 bg-slate-900 px-2 text-slate-600">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</div>

<div className="relative z-10 flex flex-col items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center text-slate-300 opacity-50">
<iconify-icon icon="lucide:check-circle" width="18"></iconify-icon>
</div>
<div className="text-center">
<div className="text-xs font-medium text-slate-400">Settlement</div>
<div className="text-[10px] text-slate-500">Merchant Paid</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
<h3 className="text-sm font-medium text-white mb-4">Merchant Wallet</h3>
<div className="flex items-center justify-between mb-6">
<div>
<span className="text-xs text-slate-500">Available Balance</span>
<h2 className="text-3xl font-bold text-white tracking-tight">KSh 12,400</h2>
</div>
<button className="bg-mpesa-600 hover:bg-mpesa-500 text-white px-4 py-2 rounded text-xs font-semibold shadow-lg transition-colors flex items-center gap-2">
<iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
                                    Withdraw
                                </button>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs p-2 bg-slate-950 rounded border border-slate-800">
<span className="text-slate-400">Escrow (In-Flight)</span>
<span className="text-escrow-500 font-medium">KSh 4,500</span>
</div>
</div>
</div>
<div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
<div className="px-6 py-4 border-b border-slate-800">
<h3 className="text-sm font-medium text-white">Recent Ledger</h3>
</div>
<div className="overflow-y-auto max-h-[250px]">
<table className="w-full text-left">
<tbody className="text-xs divide-y divide-slate-800">
<tr className="hover:bg-slate-800/50">
<td className="px-6 py-3">
<div className="text-white">Settlement #8842</div>
<div className="text-[9px] text-slate-500 font-mono">TX: 0x8a...42b</div>
</td>
<td className="px-6 py-3 text-right">
<div className="text-green-400 font-medium">+ KSh 2,500</div>
<div className="text-[9px] text-slate-500">Completed</div>
</td>
</tr>
<tr className="hover:bg-slate-800/50">
<td className="px-6 py-3">
<div className="text-white">Escrow Lock #9921</div>
<div className="text-[9px] text-slate-500 font-mono">TX: 0xc1...99a</div>
</td>
<td className="px-6 py-3 text-right">
<div className="text-escrow-500 font-medium">KSh 2,500</div>
<div className="text-[9px] text-escrow-500">Locked</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<div className="hidden h-full flex flex-col justify-center items-center text-slate-500" id="view-whatsapp">
<div className="bg-slate-900 border border-slate-800 rounded-lg p-8 text-center max-w-lg">
<iconify-icon className="text-slate-600 mb-4" icon="lucide:bot" width="48"></iconify-icon>
<h3 className="text-white font-medium">Automation Logs</h3>
<p className="text-xs mt-2">System is automatically sending WhatsApp pickup notifications with secure codes.</p>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
