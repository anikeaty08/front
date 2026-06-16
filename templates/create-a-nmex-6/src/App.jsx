import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- STATE MANAGEMENT ---
        const state = {
            isLoggedIn: false,
            isVerified: false,
            currentTab: 'vehicle'
        };

        // --- DOM ELEMENTS ---
        const views = {
            login: document.getElementById('view-login'),
            dashboard: document.getElementById('view-dashboard'),
            biometrics: document.getElementById('view-biometrics')
        };

        const tabs = {
            vehicle: document.getElementById('tab-vehicle'),
            logistics: document.getElementById('tab-logistics'),
            release: document.getElementById('tab-release')
        };

        const navBtns = {
            vehicle: document.getElementById('nav-vehicle'),
            logistics: document.getElementById('nav-logistics'),
            release: document.getElementById('nav-release')
        };

        // --- ACTIONS ---

        function handleLogin(e) {
            e.preventDefault();
            // Simulate processing delay
            const btn = e.target.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = "Authenticating...";
            btn.classList.add('opacity-75', 'cursor-wait');

            setTimeout(() => {
                state.isLoggedIn = true;
                views.login.classList.add('hidden');
                views.dashboard.classList.remove('hidden');
                views.dashboard.classList.add('flex');
            }, 800);
        }

        function switchTab(tabName) {
            // Update State
            state.currentTab = tabName;

            // Hide all tabs
            Object.values(tabs).forEach(el => el.classList.add('hidden'));
            // Show target tab
            tabs[tabName].classList.remove('hidden');

            // Update Nav Styles
            Object.values(navBtns).forEach(btn => {
                btn.classList.remove('text-white', 'border-white');
                btn.classList.add('text-zinc-500', 'border-transparent');
            });
            navBtns[tabName].classList.remove('text-zinc-500', 'border-transparent');
            navBtns[tabName].classList.add('text-white', 'border-white');
        }

        function checkReleaseAccess() {
            if (!state.isVerified) {
                // Redirect to biometrics if clicked directly and not verified
                goToBiometrics();
            } else {
                switchTab('release');
            }
        }

        function goToBiometrics() {
            views.dashboard.classList.remove('flex');
            views.dashboard.classList.add('hidden');
            views.biometrics.classList.remove('hidden');
            views.biometrics.classList.add('flex');
            
            // Reset scan state visual
            document.getElementById('scan-controls').classList.remove('hidden');
            document.getElementById('scan-success').classList.add('hidden');
            document.getElementById('scan-active').classList.add('hidden');
        }

        function startBiometricScan() {
            const scanActive = document.getElementById('scan-active');
            const controls = document.getElementById('scan-controls');
            
            controls.classList.add('opacity-0', 'pointer-events-none');
            scanActive.classList.remove('hidden');
            scanActive.classList.add('scanning'); // Triggers CSS animation

            // 4 seconds scan time
            setTimeout(() => {
                scanActive.classList.remove('scanning');
                scanActive.classList.add('hidden');
                controls.classList.add('hidden');
                
                // Show Success
                document.getElementById('scan-success').classList.remove('hidden');
                state.isVerified = true;
            }, 4000);
        }

        function completeBiometrics() {
            views.biometrics.classList.add('hidden');
            views.biometrics.classList.remove('flex');
            views.dashboard.classList.remove('hidden');
            views.dashboard.classList.add('flex');

            // Update Dashboard UI
            document.getElementById('action-required-state').classList.add('hidden');
            document.getElementById('action-complete-state').classList.remove('hidden');
            document.getElementById('action-complete-state').classList.add('flex');
            
            // Unlock Release Icon visual
            const lockIcon = navBtns.release.querySelector('iconify-icon');
            lockIcon.setAttribute('icon', 'solar:lock-unlocked-linear');
            lockIcon.classList.add('text-emerald-500');
            lockIcon.classList.remove('opacity-50');

            // Go to Release Tab
            switchTab('release');
        }

        function simulateReAuth() {
            // Just for the interaction flow if they want to re-verify in release tab
            goToBiometrics();
        }

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="flex-grow flex items-center justify-center p-4" id="view-login">
<div className="w-full max-w-sm">
<div className="flex items-center gap-3 mb-8 justify-center opacity-80">
<div className="w-6 h-6 border border-zinc-700 bg-zinc-900 rounded-sm grid place-items-center">
<span className="block w-2 h-2 bg-emerald-500 rounded-full"></span>
</div>
<span className="text-sm font-medium tracking-tight text-white">NMEX AGENCY PORTAL</span>
</div>
<div className="glass-panel rounded-lg p-6 md:p-8 shadow-2xl shadow-black/50">
<h1 className="text-lg font-medium text-white tracking-tight mb-1">Agent Access</h1>
<p className="text-xs text-zinc-500 mb-6">Restricted government access only.</p>
<form className="space-y-4" onsubmit="handleLogin(event)">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5 uppercase tracking-wider">Identity</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded text-sm text-zinc-300 px-3 py-2.5 focus:outline-none focus:border-zinc-600 cursor-not-allowed opacity-75 font-mono" readonly="" type="email" value="shardaycharley.sc@gmail.com"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5 uppercase tracking-wider">Secure Access Code</label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded text-sm text-white px-3 py-2.5 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-900/50 transition-colors font-mono" placeholder="••••••••" required="" type="password"/>
</div>
<button className="w-full bg-white text-black font-medium text-sm py-2.5 rounded hover:bg-zinc-200 transition-colors mt-2" type="submit">
                        Verify Identity
                    </button>
</form>
</div>
<p className="text-center text-zinc-600 text-xxs mt-8 font-mono">NMEX SYS V.4.0.2 · SECURE CONNECTION</p>
</div>
</main>

<main className="hidden flex-col min-h-screen" id="view-dashboard">

<header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-30">
<div className="max-w-5xl mx-auto px-4 py-4">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

<div className="flex items-center gap-3">
<div className="w-8 h-8 border border-zinc-700 bg-zinc-900 rounded grid place-items-center">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<h2 className="text-sm font-medium text-white tracking-tight">NMEX PORTAL</h2>
<div className="flex items-center gap-2">
<span className="text-xxs font-mono text-zinc-500">NM-REG-8829</span>
<span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
<span className="text-xxs font-mono text-emerald-500">VERIFIED</span>
</div>
</div>
</div>

<div className="flex items-center gap-3 bg-zinc-900/50 border border-zinc-800/50 rounded-full py-1.5 px-3 self-start md:self-auto">
<div className="w-6 h-6 rounded-full bg-zinc-800 grid place-items-center text-xs font-medium text-white">SC</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-300 font-medium leading-none">Sharday Charley SW</span>
<span className="text-xxs text-zinc-500 leading-none mt-0.5">Albuquerque, NM</span>
</div>
</div>
</div>

<nav className="flex items-center gap-1 mt-6 border-b border-zinc-800/0">
<button className="nav-btn group relative px-4 py-2 text-sm font-medium text-white border-b-2 border-white transition-colors" id="nav-vehicle" onclick="switchTab('vehicle')">
                        Vehicle
                    </button>
<button className="nav-btn group relative px-4 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-300 border-b-2 border-transparent transition-colors" id="nav-logistics" onclick="switchTab('logistics')">
                        Logistics
                    </button>
<button className="nav-btn group relative px-4 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-300 border-b-2 border-transparent transition-colors" id="nav-release" onclick="checkReleaseAccess()">
                        Release
                        <iconify-icon className="inline-block ml-1 text-xs opacity-50 relative -top-0.5" icon="solar:lock-keyhole-linear"></iconify-icon>
</button>
</nav>
</div>
</header>

<div className="flex-grow max-w-5xl mx-auto w-full px-4 py-8">

<section className="space-y-6 animate-fade" id="tab-vehicle">

<div className="flex items-center justify-between glass-panel px-4 py-3 rounded border-l-2 border-l-emerald-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs font-medium text-emerald-400 uppercase tracking-wide">Status: Active · Verified</span>
</div>
<span className="text-xxs font-mono text-zinc-500">REF: 3GCP-ACTIVE</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 glass-panel rounded-lg overflow-hidden border border-zinc-800">
<div className="p-6 border-b border-zinc-800/50 flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-white tracking-tight">Chevrolet Silverado 1500 RST</h3>
<p className="text-sm text-zinc-500 mt-1">2022 · Red · Clean Title</p>
</div>
<div className="w-10 h-10 bg-zinc-900 rounded grid place-items-center text-zinc-500 border border-zinc-800">
<iconify-icon className="text-xl" icon="solar:wheel-angle-linear"></iconify-icon>
</div>
</div>

<div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
<div>
<label className="block text-xs text-zinc-500 mb-1">VIN</label>
<div className="font-mono text-sm text-zinc-200 bg-zinc-900/50 px-2 py-1.5 rounded border border-zinc-800/50 inline-block w-full">3GCPYBEKONG123456</div>
</div>
<div>
<label className="block text-xs text-zinc-500 mb-1">Lot Number</label>
<div className="font-mono text-sm text-zinc-200">410901</div>
</div>
<div>
<label className="block text-xs text-zinc-500 mb-1">Gate Location</label>
<div className="font-mono text-sm text-zinc-200">4561</div>
</div>
<div>
<label className="block text-xs text-zinc-500 mb-1">Condition</label>
<div className="text-sm text-zinc-200 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                    Operational
                                </div>
</div>
</div>
</div>

<div className="glass-panel rounded-lg p-6 border border-zinc-800 flex flex-col justify-between h-full relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-orange-500/10 to-transparent"></div>
<div id="action-required-state">
<div className="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 grid place-items-center mb-4">
<iconify-icon className="text-xl" icon="solar:fingerprint-scan-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white mb-2">Pending Verification</h4>
<p className="text-xs text-zinc-400 leading-relaxed mb-6">
                                Administrative and biometric verification is required before release authorization can be granted.
                            </p>
<button className="w-full bg-white text-black text-sm font-medium py-2.5 rounded hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" onclick="goToBiometrics()">
                                Complete Verification
                                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="hidden h-full flex flex-col justify-center items-center text-center" id="action-complete-state">
<div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 grid place-items-center mb-3">
<iconify-icon className="text-2xl" icon="solar:verified-check-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white">Verification Complete</h4>
<p className="text-xs text-zinc-500 mt-1">Release authorized.</p>
</div>
</div>
</div>
</section>

<section className="hidden space-y-6" id="tab-logistics">

<div className="glass-panel px-6 py-4 rounded-lg border border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h3 className="text-sm font-medium text-white">Logistics Overview</h3>
<p className="text-xs text-zinc-500 mt-0.5">Network status: IMX · Active</p>
</div>
<div className="flex items-center gap-2">
<span className="px-2 py-1 rounded border border-zinc-800 bg-zinc-900 text-xxs font-mono text-zinc-400">AUTH: TIER 2</span>
<span className="px-2 py-1 rounded border border-zinc-800 bg-zinc-900 text-xxs font-mono text-zinc-400">NET: NMEX-GLB</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="glass-panel p-6 rounded-lg border border-zinc-800">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800/50">
<iconify-icon className="text-zinc-400 text-xl" icon="solar:box-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-200">Provider Information</span>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center">
<span className="text-xs text-zinc-500">Logistics Provider</span>
<span className="text-sm text-zinc-300 font-medium">Evatrack Auto Logistics</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-zinc-500">Verification Network</span>
<span className="text-sm text-zinc-300">IMX</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-zinc-500">Processing Network</span>
<span className="text-sm text-zinc-300">NMEX Global</span>
</div>
</div>
</div>
<div className="glass-panel p-6 rounded-lg border border-zinc-800">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800/50">
<iconify-icon className="text-zinc-400 text-xl" icon="solar:document-text-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-200">Documentation</span>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center">
<span className="text-xs text-zinc-500">Bill of Lading</span>
<div className="flex items-center gap-2">
<span className="text-xs text-emerald-500">Authorized</span>
<span className="text-sm text-zinc-300 font-mono">VICS</span>
</div>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-zinc-500">Export Certificate</span>
<span className="text-sm text-zinc-300">N/A</span>
</div>
<div className="mt-6 pt-4 border-t border-zinc-800/50 text-center">
<span className="text-xs text-zinc-600 block mb-2">Internal Clearance Only</span>
<div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden">
<div className="w-full h-full bg-zinc-700"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="hidden space-y-6" id="tab-release">

<div className="glass-panel rounded-lg border border-zinc-800 overflow-hidden">
<div className="bg-gradient-to-r from-emerald-900/20 to-transparent p-6 border-b border-zinc-800/50">
<div className="flex items-start justify-between">
<div>
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-emerald-500 text-xl" icon="solar:shield-check-bold"></iconify-icon>
<h3 className="text-lg font-medium text-white tracking-tight">Release Authorized</h3>
</div>
<p className="text-xs text-zinc-400">Biometric identity confirmed. Release order generated.</p>
</div>
<div className="text-right">
<span className="block text-xxs text-zinc-500 uppercase">Status</span>
<span className="text-sm text-emerald-400 font-medium">Processing Validated</span>
</div>
</div>
</div>
<div className="p-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded">
<span className="block text-xxs text-zinc-500 uppercase mb-1">Release Code</span>
<span className="text-xl font-mono text-white tracking-widest">0945</span>
</div>
<div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded">
<span className="block text-xxs text-zinc-500 uppercase mb-1">Document ID</span>
<span className="text-sm font-mono text-zinc-300">NMX-72639-AX</span>
</div>
<div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded">
<span className="block text-xxs text-zinc-500 uppercase mb-1">Expires</span>
<span className="text-sm font-mono text-zinc-300">2026-02-18</span>
</div>
<div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded">
<span className="block text-xxs text-zinc-500 uppercase mb-1">Auth Date</span>
<span className="text-sm font-mono text-zinc-300">Feb 03, 2026</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-zinc-800/50">
<div>
<span className="block text-xs text-zinc-500 mb-2">Officer in Charge</span>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 grid place-items-center text-xs text-zinc-400">DH</div>
<span className="text-sm text-white">Daniel R. Hoffman</span>
</div>
</div>
<div>
<span className="block text-xs text-zinc-500 mb-2">Staff Authorization</span>
<button className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition-colors border border-zinc-800 bg-zinc-900 px-3 py-2 rounded w-full justify-center md:w-auto" onclick="simulateReAuth()">
<iconify-icon icon="solar:scanner-linear"></iconify-icon>
                                    Verify Biometrics Again
                                </button>
</div>
</div>
</div>
</div>
</section>
</div>
</main>

<main className="hidden absolute inset-0 z-50 bg-zinc-950 flex-col items-center justify-center p-6" id="view-biometrics">
<div className="w-full max-w-md text-center">
<h2 className="text-lg font-medium text-white tracking-tight mb-2">Biometric Verification</h2>
<p className="text-xs text-zinc-500 mb-12">Scan fingerprint to authorize release protocols.</p>

<div className="relative w-48 h-64 mx-auto mb-12">

<div className="absolute inset-0 flex items-center justify-center opacity-30">

<iconify-icon className="text-white text-[12rem]" icon="solar:fingerprint-scan-bold"></iconify-icon>
</div>

<div className="absolute inset-0 hidden" id="scan-active">
<iconify-icon className="text-white text-[12rem] opacity-100" icon="solar:fingerprint-scan-bold"></iconify-icon>
<div className="scan-beam"></div>

<div className="absolute inset-0 rounded-full bg-emerald-500/10 blur-3xl animate-pulse"></div>
</div>
</div>

<div id="scan-controls">
<button className="group relative inline-flex items-center justify-center w-20 h-20 rounded-full border border-zinc-700 bg-zinc-900 hover:border-emerald-500 hover:text-emerald-500 text-zinc-400 transition-all duration-300 focus:outline-none" onclick="startBiometricScan()">
<div className="absolute inset-0 rounded-full border border-white/5 group-hover:scale-110 transition-transform duration-500"></div>
<span className="text-xs font-medium tracking-wide">SCAN</span>
</button>
<p className="text-xs text-zinc-600 mt-6 font-mono">SENSOR: ACTIVE · READY</p>
</div>

<div className="hidden" id="scan-success">
<div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/50 text-emerald-500 flex items-center justify-center mx-auto mb-4">
<iconify-icon className="text-3xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-1">Fingerprint updated successfully.</h3>
<p className="text-xs text-zinc-500 mb-6">Identity verified against NMEX database.</p>
<button className="w-full max-w-xs bg-white text-black font-medium text-sm py-3 rounded hover:bg-zinc-200 transition-colors" onclick="completeBiometrics()">
                    Continue
                </button>
</div>
</div>
</main>


    </>
  );
}
