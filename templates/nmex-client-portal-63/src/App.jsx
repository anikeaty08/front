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



        function handleLogin() {
            const btn = document.getElementById('login-btn');
            const originalContent = btn.innerHTML;
            
            // Loading State
            btn.innerHTML = '<div class="spinner"></div><span class="text-[#A1A1A6]">Logging in...</span>';
            btn.disabled = true;
            btn.classList.add('cursor-not-allowed', 'bg-[#1C1C1E]', 'border', 'border-[#38383A]');
            btn.classList.remove('bg-[#0A84FF]', 'hover:bg-[#0071e3]');

            setTimeout(() => {
                // Success State Transition
                document.getElementById('login-view').classList.add('hidden');
                const dashboard = document.getElementById('dashboard-view');
                dashboard.classList.remove('hidden');
                dashboard.classList.add('flex'); // Because it's flex-col
            }, 1500);
        }

        function switchTab(tabId) {
            // Hide all contents
            document.querySelectorAll('.tab-content').forEach(el => {
                el.classList.remove('active');
            });
            // Show selected content
            document.getElementById(tabId).classList.add('active');

            // Deactivate all buttons
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            // Activate selected button
            document.querySelector(`button[data-tab="${tabId}"]`).classList.add('active');
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
      

<div className="flex-1 flex flex-col items-center justify-center p-4 relative z-10" id="login-view">

<div className="w-full max-w-[480px] bg-[#1C1C1E] border border-[#38383A] rounded-3xl shadow-2xl p-10 flex flex-col gap-8 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-white/5 blur-xl"></div>
<div className="text-center space-y-1">
<div className="text-[#A1A1A6] text-xs font-medium tracking-wide uppercase">NMEX</div>
<div className="text-[#A1A1A6] text-xs tracking-wide mb-2">Verification &amp; Authorization Services</div>
<h1 className="text-2xl font-semibold text-white tracking-tight">Client Portal</h1>
</div>
<form className="space-y-5" id="login-form" onsubmit="event.preventDefault(); handleLogin();">
<div className="space-y-1.5">
<label className="text-[#A1A1A6] text-xs font-medium ml-1">Email / Username</label>
<input autocomplete="off" className="w-full h-12 rounded-lg bg-[#2C2C2E] px-4 text-white placeholder-transparent focus:ring-1 focus:ring-[#0A84FF] border border-transparent outline-none transition-all" id="email-input" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[#A1A1A6] text-xs font-medium ml-1">Nmex Portal PIN (NPP)</label>
<input className="w-full h-12 rounded-lg bg-[#2C2C2E] px-4 text-white font-mono focus:ring-1 focus:ring-[#0A84FF] border border-transparent outline-none transition-all placeholder-[#555]" placeholder="Enter NPP" type="password"/>
</div>
<div className="flex items-center gap-2 pt-1">
<div className="relative flex items-center">
<input className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-[#38383A] bg-[#2C2C2E] checked:border-[#0A84FF] checked:bg-[#0A84FF] transition-all" id="remember" type="checkbox"/>
<iconify-icon className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<label className="text-[#A1A1A6] cursor-pointer select-none" htmlFor="remember">Remember this device</label>
</div>
<button className="w-full h-12 bg-[#0A84FF] hover:bg-[#0071e3] text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2" id="login-btn" type="submit">
                    Log In
                </button>

<div className="hidden items-center justify-center gap-2 text-[#FF3B30] text-xs font-medium pt-2" id="login-error">
<iconify-icon icon="solar:danger-circle-linear" width="14"></iconify-icon>
<span>Incorrect email or PIN. Please try again.</span>
</div>
</form>
</div>
<div className="mt-8 text-[#555] text-xs">
            © 2026 NMEX Systems. Secure Connection.
        </div>
</div>

<div className="hidden flex-col h-full bg-[#0F0F10]" id="dashboard-view">

<header className="h-16 border-b border-[#38383A] bg-[#1C1C1E]/50 backdrop-blur-md px-6 flex items-center justify-between shrink-0 z-20">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-[#2C2C2E] flex items-center justify-center text-white font-bold tracking-tighter">N</div>
<div>
<h2 className="text-white font-semibold text-sm leading-tight">Welcome back, Sharday Charley SW</h2>
<div className="flex items-center gap-2 mt-0.5">
<span className="text-[#A1A1A6] text-xs font-mono">NM-REG-8829</span>
<span className="flex items-center gap-1 text-[#34C759] text-[10px] font-medium bg-[#34C759]/10 px-1.5 py-0.5 rounded">
<iconify-icon icon="solar:verified-check-linear" width="10"></iconify-icon> Verified
                        </span>
</div>
</div>
</div>
<div className="flex items-center gap-6">
<div className="text-right hidden md:block">
<div className="text-[#A1A1A6] text-xs">Last login: Feb 12, 2026 – 9:32 AM</div>
<div className="text-[#555] text-[10px] flex items-center justify-end gap-1">
                        Logged in via NPP · PIN: <span className="font-mono tracking-widest text-[#777]">••••</span>
</div>
</div>
<div className="w-9 h-9 rounded-full bg-[#2C2C2E] border border-[#38383A] flex items-center justify-center text-xs text-white font-medium ring-2 ring-[#0F0F10]">
                    SC
                </div>
</div>
</header>

<div className="flex-1 overflow-hidden flex flex-col">

<div className="px-6 pt-6 border-b border-[#38383A] bg-[#0F0F10]">
<nav className="flex gap-8">
<button className="tab-btn active pb-3 text-sm font-medium hover:text-white transition-colors" data-tab="vehicle" onclick="switchTab('vehicle')">Vehicle</button>
<button className="tab-btn pb-3 text-sm font-medium hover:text-white transition-colors" data-tab="logistics" onclick="switchTab('logistics')">Logistics</button>
<button className="tab-btn pb-3 text-sm font-medium hover:text-white transition-colors" data-tab="payment" onclick="switchTab('payment')">Payment</button>
<button className="tab-btn pb-3 text-sm font-medium hover:text-white transition-colors" data-tab="release" onclick="switchTab('release')">Release</button>
<button className="tab-btn pb-3 text-sm font-medium hover:text-white transition-colors" data-tab="documents" onclick="switchTab('documents')">Documents</button>
</nav>
</div>

<main className="flex-1 overflow-y-auto p-6">
<div className="max-w-[1440px] mx-auto grid grid-cols-12 gap-6 h-full">

<div className="col-span-12 lg:col-span-9 space-y-6">

<div className="tab-content active grid-cols-1 md:grid-cols-2 gap-6 fade-in" id="vehicle">

<div className="bg-[#1C1C1E] border border-[#38383A] rounded-2xl p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-white font-medium">Vehicle Details</h3>
<iconify-icon className="text-[#A1A1A6]" icon="solar:wheel-angle-linear" width="20"></iconify-icon>
</div>
<div className="space-y-4">
<div>
<div className="text-[#A1A1A6] text-xs mb-1">Make &amp; Model</div>
<div className="text-lg text-white font-medium tracking-tight">2022 Chevrolet Silverado 1500 RST</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<div className="text-[#A1A1A6] text-xs mb-1">Color</div>
<div className="text-white">Red</div>
</div>
<div>
<div className="text-[#A1A1A6] text-xs mb-1">Weight</div>
<div className="text-white">5,000 lbs</div>
</div>
</div>
<div>
<div className="text-[#A1A1A6] text-xs mb-1">VIN</div>
<div className="text-white font-mono bg-[#2C2C2E] px-2 py-1 rounded inline-block text-xs border border-[#38383A]">3GCPYBEKONG123456</div>
</div>
<div className="pt-2 border-t border-[#38383A]">
<div className="flex justify-between items-center mt-3">
<span className="text-[#A1A1A6] text-xs">Current Status</span>
<span className="text-[#34C759] bg-[#34C759]/10 px-2 py-1 rounded text-xs font-medium border border-[#34C759]/20">Release Authorized</span>
</div>
</div>
</div>
</div>

<div className="bg-[#1C1C1E] border border-[#38383A] rounded-2xl p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-white font-medium">Owner Information</h3>
<iconify-icon className="text-[#A1A1A6]" icon="solar:user-id-linear" width="20"></iconify-icon>
</div>
<div className="space-y-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#2C2C2E] flex items-center justify-center text-[#A1A1A6]">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-white font-medium">Sharday Charley SW</div>
<div className="text-[#A1A1A6] text-xs">Registered Owner</div>
</div>
</div>
<div>
<div className="text-[#A1A1A6] text-xs mb-1">Address</div>
<div className="text-white">319 Kraft Ct. SW<br/>Albuquerque, NM 87121</div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-xs">
<iconify-icon className="text-[#A1A1A6]" icon="solar:letter-linear"></iconify-icon>
<span className="text-white">shardaycharley.sc@gmail.com</span>
</div>
<div className="flex items-center gap-2 text-xs">
<iconify-icon className="text-[#A1A1A6]" icon="solar:phone-linear"></iconify-icon>
<span className="text-white">505-450-6156</span>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 bg-[#1C1C1E] border border-[#38383A] rounded-2xl p-6 flex flex-col md:flex-row gap-6">
<div className="w-full md:w-1/3">
<h3 className="text-white font-medium mb-1">Identification</h3>
<p className="text-[#A1A1A6] text-xs">Government issued driver's license on file.</p>
</div>
<div className="w-full md:w-2/3">
<div className="bg-white rounded-xl h-48 w-full max-w-sm relative shadow-sm overflow-hidden text-black p-4 flex flex-col justify-between">

<div className="flex justify-between items-start border-b-2 border-yellow-500 pb-2">
<div className="font-bold text-xs uppercase tracking-widest text-blue-900">New Mexico <br/><span className="text-[8px] font-normal">DRIVER LICENSE</span></div>
<div className="w-8 h-8 bg-gray-200 rounded"></div>
</div>
<div className="flex gap-4 mt-2">
<div className="w-20 h-24 bg-gray-200 rounded"></div>
<div className="text-[10px] space-y-1 font-mono leading-tight">
<div className="font-bold">CHARLEY, SHARDAY</div>
<div>319 KRAFT CT SW</div>
<div>ALBUQUERQUE, NM</div>
<div className="pt-2 text-red-600 font-bold">EXP 02/12/2030</div>
</div>
</div>
<div className="text-[8px] text-center text-gray-400 mt-2 font-mono">DL: 899201992 · CLASS D</div>
</div>
</div>
</div>
</div>

<div className="tab-content grid-cols-1 gap-4 fade-in" id="logistics">
<div className="bg-[#1C1C1E] border border-[#38383A] rounded-2xl p-6">
<div className="flex justify-between items-center mb-6">
<div>
<h3 className="text-white font-medium">Logistics Provider</h3>
<p className="text-[#A1A1A6] text-xs mt-1">Evatrack Auto Logistics</p>
</div>
<div className="bg-[#2C2C2E] px-3 py-1 rounded text-xs text-white border border-[#38383A]">
                                        Status: In Transit
                                    </div>
</div>
<div className="flex flex-col md:flex-row gap-8 border-t border-[#38383A] pt-6">
<div className="flex-1">
<div className="text-[#A1A1A6] text-xs mb-2">Origin &amp; Destination</div>
<div className="flex items-center gap-3 text-sm">
<div className="text-white">Edmonton, AB</div>
<iconify-icon className="text-[#A1A1A6]" icon="solar:arrow-right-linear"></iconify-icon>
<div className="text-white">Velocity Truck Centres</div>
</div>
</div>
<div className="flex-1">
<div className="text-[#A1A1A6] text-xs mb-2">Carrier Info</div>
<div className="text-white text-sm">Patrick Wilson</div>
</div>
<div className="flex-1">
<div className="text-[#A1A1A6] text-xs mb-2">Tracking</div>
<div className="font-mono text-xs text-[#0A84FF]">SCAC: EVTK · PRO: 9928192</div>
</div>
</div>
</div>

<div className="bg-[#EFEFEF] rounded-2xl p-6 text-black relative overflow-hidden">
<div className="absolute top-0 left-0 bottom-0 w-2 bg-[#FF9F0A]"></div>
<div className="flex justify-between items-start pl-4">
<div>
<div className="text-xs font-bold uppercase tracking-widest text-[#555]">Gate Pass Authorization</div>
<div className="text-3xl font-bold mt-2 font-mono">GATE-A2</div>
</div>
<iconify-icon icon="solar:qr-code-linear" width="48"></iconify-icon>
</div>
</div>
</div>

<div className="tab-content grid-cols-1 md:grid-cols-2 gap-6 fade-in" id="payment">
<div className="bg-[#1C1C1E] border border-[#38383A] rounded-2xl p-6 col-span-2 flex justify-between items-center">
<div>
<div className="text-[#A1A1A6] text-xs">Outstanding Balance</div>
<div className="text-2xl text-white font-semibold mt-1 font-mono tracking-tight">$500.00</div>
</div>
<div className="text-right">
<div className="text-[#A1A1A6] text-xs">Total Paid</div>
<div className="text-lg text-[#34C759] font-medium mt-1 font-mono">$2,050.00</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 text-black col-span-1 shadow-lg max-w-sm mx-auto md:mx-0">
<div className="flex justify-center mb-4">
<iconify-icon className="text-[#34C759]" icon="solar:check-circle-bold" width="48"></iconify-icon>
</div>
<div className="text-center mb-6">
<div className="font-bold text-lg">Payment Confirmed</div>
<div className="text-xs text-gray-500">Feb 11, 2026 · 14:02</div>
</div>
<div className="border-t border-dashed border-gray-300 py-4 space-y-2 text-sm">
<div className="flex justify-between"><span>Amount</span><span className="font-semibold">$2,050.00</span></div>
<div className="flex justify-between"><span>Method</span><span>Apple Pay (•••• 4242)</span></div>
<div className="flex justify-between"><span>Ref ID</span><span className="font-mono text-xs">TXN-998271</span></div>
</div>
<div className="mt-4 text-[10px] text-gray-400 text-center leading-relaxed">
                                    This charge has been verified by NMEX Financial Services. A final hold of $500.00 remains until vehicle release.
                                </div>
</div>
</div>

<div className="tab-content grid-cols-1 gap-6 fade-in" id="release">
<div className="bg-[#1C1C1E] border border-[#FFD60A] rounded-2xl p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon className="text-[#FFD60A]" icon="solar:shield-check-bold" width="200"></iconify-icon>
</div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 border border-[#FFD60A] text-[#FFD60A] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
<iconify-icon icon="solar:lock-unlocked-linear"></iconify-icon> Official Release Certificate
                                    </div>
<h2 className="text-2xl text-white font-semibold mb-2">Pickup Authorized</h2>
<p className="text-[#A1A1A6] max-w-md text-sm mb-8">This vehicle has cleared all financial and legal holds. The designated carrier is authorized to remove the unit from the premises.</p>
<div className="flex flex-col md:flex-row gap-10">
<div className="bg-[#2C2C2E] p-4 rounded-xl border border-[#38383A] inline-block">
<div className="text-[#A1A1A6] text-[10px] uppercase tracking-widest mb-2">Authorization PIN</div>
<div className="text-3xl font-mono text-white tracking-widest font-bold">IMX7K9</div>
</div>
<div className="flex flex-col justify-end">
<div className="h-px w-48 bg-[#555] mb-2"></div>
<div className="text-[#A1A1A6] text-xs">Officer Signature</div>
<div className="font-serif italic text-lg text-white">James R. Sullivan</div>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content grid-cols-1 md:grid-cols-3 gap-4 fade-in" id="documents">

<div className="bg-[#1C1C1E] border border-[#38383A] rounded-xl p-4 hover:border-[#0A84FF] transition-colors group cursor-pointer">
<div className="flex justify-between items-start mb-8">
<div className="w-10 h-10 rounded bg-[#2C2C2E] flex items-center justify-center text-[#A1A1A6] group-hover:text-white group-hover:bg-[#0A84FF] transition-colors">
<iconify-icon icon="solar:file-text-linear" width="20"></iconify-icon>
</div>
<iconify-icon className="text-[#555]" icon="solar:menu-dots-linear"></iconify-icon>
</div>
<div className="text-white text-sm font-medium">Bill of Lading</div>
<div className="text-[#555] text-xs mt-1">PDF · 2.4 MB</div>
</div>
<div className="bg-[#1C1C1E] border border-[#38383A] rounded-xl p-4 hover:border-[#0A84FF] transition-colors group cursor-pointer">
<div className="flex justify-between items-start mb-8">
<div className="w-10 h-10 rounded bg-[#2C2C2E] flex items-center justify-center text-[#A1A1A6] group-hover:text-white group-hover:bg-[#0A84FF] transition-colors">
<iconify-icon icon="solar:file-check-linear" width="20"></iconify-icon>
</div>
<iconify-icon className="text-[#555]" icon="solar:menu-dots-linear"></iconify-icon>
</div>
<div className="text-white text-sm font-medium">Release Cert</div>
<div className="text-[#555] text-xs mt-1">PDF · 1.1 MB</div>
</div>
<div className="bg-[#1C1C1E] border border-[#38383A] rounded-xl p-4 hover:border-[#0A84FF] transition-colors group cursor-pointer">
<div className="flex justify-between items-start mb-8">
<div className="w-10 h-10 rounded bg-[#2C2C2E] flex items-center justify-center text-[#A1A1A6] group-hover:text-white group-hover:bg-[#0A84FF] transition-colors">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</div>
<iconify-icon className="text-[#555]" icon="solar:menu-dots-linear"></iconify-icon>
</div>
<div className="text-white text-sm font-medium">Gate Photo A</div>
<div className="text-[#555] text-xs mt-1">JPG · 4.5 MB</div>
</div>
<div className="bg-[#1C1C1E] border border-[#38383A] rounded-xl p-4 hover:border-[#0A84FF] transition-colors group cursor-pointer">
<div className="flex justify-between items-start mb-8">
<div className="w-10 h-10 rounded bg-[#2C2C2E] flex items-center justify-center text-[#A1A1A6] group-hover:text-white group-hover:bg-[#0A84FF] transition-colors">
<iconify-icon icon="solar:card-linear" width="20"></iconify-icon>
</div>
<iconify-icon className="text-[#555]" icon="solar:menu-dots-linear"></iconify-icon>
</div>
<div className="text-white text-sm font-medium">Payment Receipt</div>
<div className="text-[#555] text-xs mt-1">PDF · 0.8 MB</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-3 space-y-6">

<div className="bg-[#1C1C1E] border border-[#38383A] rounded-2xl p-1 overflow-hidden">
<button className="w-full flex items-center gap-3 p-3 hover:bg-[#2C2C2E] rounded-xl transition-colors text-left group">
<div className="w-8 h-8 rounded-lg bg-[#2C2C2E] group-hover:bg-[#38383A] flex items-center justify-center text-[#0A84FF]">
<iconify-icon icon="solar:upload-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-white">Upload Document</span>
</button>
<button className="w-full flex items-center gap-3 p-3 hover:bg-[#2C2C2E] rounded-xl transition-colors text-left group">
<div className="w-8 h-8 rounded-lg bg-[#2C2C2E] group-hover:bg-[#38383A] flex items-center justify-center text-[#A1A1A6]">
<iconify-icon icon="solar:printer-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-white">Print Summary</span>
</button>
<button className="w-full flex items-center gap-3 p-3 hover:bg-[#2C2C2E] rounded-xl transition-colors text-left group">
<div className="w-8 h-8 rounded-lg bg-[#2C2C2E] group-hover:bg-[#38383A] flex items-center justify-center text-[#A1A1A6]">
<iconify-icon icon="solar:headset-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-white">Contact Support</span>
</button>
</div>

<div className="bg-gradient-to-br from-[#1C1C1E] to-[#2C2C2E] border border-[#38383A] rounded-2xl p-6">
<div className="text-[#A1A1A6] text-xs font-medium uppercase tracking-wide mb-2">Credit Balance</div>
<div className="text-2xl text-white font-mono font-medium">2,140 <span className="text-xs text-[#555] font-sans">PTS</span></div>
<div className="mt-4 flex items-center gap-2 text-[10px] text-[#34C759]">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon> Connection secured
                            </div>
</div>

<div className="p-4 border border-[#38383A] rounded-2xl bg-[#1C1C1E]/50">
<div className="flex items-center gap-3 mb-2">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</div>
<span className="text-xs text-[#A1A1A6]">System Operational</span>
</div>
<div className="w-full bg-[#2C2C2E] h-1 rounded-full overflow-hidden">
<div className="bg-[#34C759] w-full h-full"></div>
</div>
</div>
</div>
</div>
</main>

<footer className="h-12 border-t border-[#38383A] bg-[#1C1C1E] px-6 flex items-center justify-between text-[10px] text-[#555] shrink-0">
<div className="flex gap-4">
<span>Nmex Verification &amp; Authorization Services · Client Portal v2.0</span>
<span className="hidden md:inline">Secure · Confidential · © 2026</span>
</div>
<div className="font-mono text-[#A1A1A6]">
                    Sharday Charley SW · NM-REG-8829 · <span className="text-[#34C759]">Session active</span>
</div>
</footer>
</div>
</div>


    </>
  );
}
