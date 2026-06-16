import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // State
        let currentMode = 'single';
        let batchCount = 0;

        // Navigation
        const views = ['view-dashboard', 'view-setup', 'view-scanner', 'view-modal'];
        
        function nav(targetId) {
            views.forEach(id => {
                const el = document.getElementById(id);
                if (id === targetId) {
                    el.classList.remove('hidden');
                    // Small delay for fade effect
                    setTimeout(() => el.style.opacity = '1', 10); 
                } else {
                    el.classList.add('hidden');
                    el.style.opacity = '0';
                }
            });
        }

        // Mode Toggling
        function toggleMode(mode) {
            currentMode = mode;
            const desc = document.getElementById('mode-desc');
            if (mode === 'single') {
                desc.innerText = 'Targeted activation for a specific asset. Saves immediately after scanning.';
            } else {
                desc.innerText = 'Continuous scanning loop for multiple items. Inherits location automatically.';
            }
        }

        // Start Scanner
        function startScanner(skipLocation = false) {
            if (skipLocation) {
                document.getElementById('location-input').value = '';
            }
            
            const pill = document.getElementById('batch-pill');
            if (currentMode === 'batch') {
                pill.classList.remove('hidden');
                batchCount = 0;
                document.getElementById('batch-count').innerText = batchCount;
            } else {
                pill.classList.add('hidden');
            }
            
            nav('view-scanner');
        }

        // Simulate Scan Action
        function simulateScan() {
            // Visual feedback
            const toast = document.getElementById('scan-toast');
            toast.classList.remove('opacity-0', 'translate-y-4');
            toast.classList.add('opacity-100', 'translate-y-0');
            
            setTimeout(() => {
                toast.classList.remove('opacity-100', 'translate-y-0');
                toast.classList.add('opacity-0', 'translate-y-4');
                
                // Configure modal details based on mode
                const title = document.getElementById('modal-title');
                const btnSkip = document.getElementById('btn-skip');
                const btnSave = document.getElementById('btn-save');

                if (currentMode === 'single') {
                    title.innerText = 'Tag Activated';
                    btnSkip.innerText = 'Skip & Save';
                    btnSave.innerText = 'Save Details';
                } else {
                    batchCount++;
                    document.getElementById('batch-count').innerText = batchCount;
                    title.innerText = `Tag ${batchCount} Captured`;
                    btnSkip.innerText = 'Skip & Next';
                    btnSave.innerText = 'Save & Next';
                }
                
                nav('view-modal');
            }, 500); // Snappy delay for better UX
        }

        // Save from Modal
        function saveScan(skipped) {
            // Reset input
            document.querySelector('textarea').value = '';

            // Route based on mode
            if (currentMode === 'single') {
                nav('view-dashboard');
            } else {
                nav('view-scanner');
            }
        }

        // Initialize
        document.getElementById('view-setup').style.opacity = '0';
        document.getElementById('view-scanner').style.opacity = '0';
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="w-full max-w-md h-full bg-white relative overflow-hidden shadow-2xl ring-1 ring-zinc-200/50 flex flex-col">

<div className="flex flex-col h-full w-full absolute inset-0 bg-zinc-50 z-10 transition-opacity duration-300" id="view-dashboard">

<header className="px-5 pt-8 pb-4 bg-white border-b border-zinc-100 sticky top-0 z-20">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center text-sm font-semibold tracking-tight">AT</div>
<h1 className="text-xl font-semibold tracking-tight">AeroTag</h1>
</div>
<button className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="bg-zinc-50 p-3 rounded-xl border border-zinc-100">
<p className="text-xs font-medium text-zinc-500 mb-1 uppercase tracking-widest">Today</p>
<p className="text-lg font-semibold tracking-tight text-zinc-900">124 <span className="text-xs font-normal text-zinc-500">tags</span></p>
</div>
<div className="bg-zinc-50 p-3 rounded-xl border border-zinc-100">
<p className="text-xs font-medium text-zinc-500 mb-1 uppercase tracking-widest">Active Batch</p>
<p className="text-lg font-semibold tracking-tight text-zinc-900">None</p>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto px-5 py-6 hide-scrollbar">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-semibold tracking-tight text-zinc-900">Recent Activity</h2>
<button className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors">View All</button>
</div>
<div className="space-y-3">

<div className="bg-white p-4 rounded-2xl border border-zinc-100 shadow-sm flex items-center gap-4 cursor-pointer active:scale-[0.98] transition-transform">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-indigo-600" icon="solar:layers-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold text-zinc-900 truncate">Boiler Room 3</h3>
<span className="text-xs text-zinc-400 shrink-0">10m ago</span>
</div>
<p className="text-xs text-zinc-500 mt-0.5">Tagset • 42 tags</p>
</div>
<iconify-icon className="text-zinc-300" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>

<div className="bg-white p-4 rounded-2xl border border-zinc-100 shadow-sm flex items-center gap-4 cursor-pointer active:scale-[0.98] transition-transform">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-emerald-600" icon="solar:tag-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold text-zinc-900 truncate">HVAC Unit B</h3>
<span className="text-xs text-zinc-400 shrink-0">1h ago</span>
</div>
<p className="text-xs text-zinc-500 mt-0.5">Single • Roof Level</p>
</div>
<iconify-icon className="text-zinc-300" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>

<div className="bg-white p-4 rounded-2xl border border-zinc-100 shadow-sm flex items-center gap-4 cursor-pointer active:scale-[0.98] transition-transform">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-emerald-600" icon="solar:tag-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold text-zinc-900 truncate">General Area</h3>
<span className="text-xs text-zinc-400 shrink-0">2h ago</span>
</div>
<p className="text-xs text-zinc-500 mt-0.5">Single • No location set</p>
</div>
<iconify-icon className="text-zinc-300" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-50 to-transparent pointer-events-none"></div>

<div className="absolute bottom-8 left-5 right-5 z-20">
<button className="w-full py-4 bg-zinc-900 hover:bg-zinc-800 text-white rounded-2xl font-medium shadow-xl shadow-zinc-900/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]" onclick="nav('view-setup')">
<iconify-icon icon="solar:scanner-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    New Activation
                </button>
</div>
</div>

<div className="flex flex-col h-full w-full absolute inset-0 bg-white z-20 hidden transition-opacity duration-300" id="view-setup">
<header className="px-5 pt-8 pb-4 flex items-center gap-4 border-b border-zinc-100">
<button className="w-8 h-8 -ml-2 rounded-full flex items-center justify-center text-zinc-600 hover:bg-zinc-100 transition-colors" onclick="nav('view-dashboard')">
<iconify-icon icon="solar:alt-arrow-left-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<h1 className="text-lg font-semibold tracking-tight flex-1">Setup Session</h1>
</header>
<div className="p-5 flex-1 overflow-y-auto">

<div className="mb-8">
<label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-3">Workflow Mode</label>
<div className="bg-zinc-100 p-1 rounded-xl flex segmented-control">
<input checked="" className="hidden" id="mode-single" name="mode" onchange="toggleMode('single')" type="radio"/>
<label className="flex-1 py-2 text-center text-sm font-medium text-zinc-500 rounded-lg cursor-pointer transition-all flex flex-col items-center gap-1" htmlFor="mode-single">
<iconify-icon className="mb-0.5 text-emerald-500" icon="solar:tag-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Single Tag
                        </label>
<input className="hidden" id="mode-batch" name="mode" onchange="toggleMode('batch')" type="radio"/>
<label className="flex-1 py-2 text-center text-sm font-medium text-zinc-500 rounded-lg cursor-pointer transition-all flex flex-col items-center gap-1" htmlFor="mode-batch">
<iconify-icon className="mb-0.5 text-indigo-500" icon="solar:layers-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Tagset Batch
                        </label>
</div>
<p className="text-xs text-zinc-500 mt-3 leading-relaxed" id="mode-desc">Targeted activation for a specific asset. Saves immediately after scanning.</p>
</div>

<div className="mb-8">
<div className="flex items-center justify-between mb-3">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Location Context</label>
<span className="text-[10px] bg-zinc-100 text-zinc-500 px-2 py-0.5 rounded-full font-medium tracking-wide">Optional</span>
</div>
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" icon="solar:map-point-linear" width="18"></iconify-icon>
<input className="w-full pl-10 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-all placeholder:text-zinc-400" id="location-input" placeholder="e.g. Boiler Room 3" type="text"/>
</div>
<p className="text-[11px] text-zinc-400 mt-2">If skipped, defaults to "General Area". All batch tags inherit this location.</p>
</div>
</div>
<div className="p-5 border-t border-zinc-100 bg-zinc-50 flex gap-3">
<button className="flex-1 py-3.5 bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-700 rounded-xl text-sm font-medium transition-colors" onclick="startScanner(true)">
                    Skip Setup
                </button>
<button className="flex-[2] py-3.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl text-sm font-medium shadow-md shadow-zinc-900/10 flex items-center justify-center gap-2 transition-colors" onclick="startScanner()">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Start Scanner
                </button>
</div>
</div>

<div className="flex flex-col h-full w-full absolute inset-0 bg-black z-30 hidden" id="view-scanner">

<div className="absolute inset-0 bg-zinc-900 flex items-center justify-center opacity-80">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#3f3f46 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
</div>

<header className="absolute top-0 w-full pt-10 pb-4 px-5 flex items-center justify-between z-10 bg-gradient-to-b from-black/80 to-transparent">
<button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 active:bg-white/20 transition-colors" onclick="nav('view-setup')">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<div className="hidden px-4 py-2 bg-indigo-500/20 backdrop-blur-md border border-indigo-500/30 rounded-full flex items-center gap-2 shadow-lg" id="batch-pill">
<div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
<span className="text-xs font-medium text-white tracking-wide"><span id="batch-count">0</span> Scanned</span>
</div>
<div className="w-10 h-10"></div> 
</header>

<div className="flex-1 flex items-center justify-center z-10 px-8" onclick="simulateScan()">
<div className="relative w-full max-w-[280px] aspect-square rounded-2xl border-2 border-white/30 overflow-hidden shadow-2xl">

<div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-green-500 rounded-tl-xl"></div>
<div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-green-500 rounded-tr-xl"></div>
<div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-green-500 rounded-bl-xl"></div>
<div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-green-500 rounded-br-xl"></div>

<div className="laser-line"></div>
<div className="absolute inset-0 flex items-center justify-center flex-col text-white/50">
<iconify-icon icon="solar:qr-code-linear" strokeWidth="1" width="48"></iconify-icon>
<p className="text-[10px] uppercase tracking-widest mt-4 font-medium">Tap to simulate scan</p>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/90 to-transparent flex items-end justify-center pb-6 z-10 cursor-pointer">
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-1 rounded-full bg-white/30"></div>
<span className="text-[10px] text-white/50 font-medium tracking-widest uppercase">Swipe up for session log</span>
</div>
</div>

<div className="absolute top-24 left-1/2 -translate-x-1/2 px-4 py-2 bg-green-500/20 backdrop-blur-md border border-green-500/30 text-green-100 rounded-full text-xs font-medium flex items-center gap-2 opacity-0 transition-opacity duration-200 z-50 pointer-events-none transform translate-y-4" id="scan-toast">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
                Tag Captured
            </div>
</div>

<div className="flex flex-col h-full w-full absolute inset-0 bg-zinc-900/40 backdrop-blur-sm z-40 hidden justify-end" id="view-modal">
<div className="bg-white w-full rounded-t-3xl pt-2 pb-8 px-5 transform transition-transform duration-300 translate-y-0 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
<div className="w-12 h-1 bg-zinc-200 rounded-full mx-auto mb-6"></div>
<div className="flex items-start gap-4 mb-6">
<div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
<iconify-icon className="text-emerald-600" icon="solar:qr-code-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h2 className="text-xl font-semibold tracking-tight text-zinc-900" id="modal-title">Tag Activated</h2>
<p className="text-xs text-zinc-500 mt-1 font-mono">ID: AT-9942-XCV</p>
</div>
</div>
<div className="mb-8">
<label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-3">Placement Details</label>
<textarea className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-all placeholder:text-zinc-400 resize-none" placeholder="e.g. Mounted at eye level behind the main door..." rows="3"></textarea>
</div>
<div className="flex gap-3">
<button className="flex-1 py-3.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 rounded-xl text-sm font-medium transition-colors" id="btn-skip" onclick="saveScan(true)">
                        Skip &amp; Save
                    </button>
<button className="flex-[2] py-3.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl text-sm font-medium shadow-md shadow-zinc-900/10 transition-colors" id="btn-save" onclick="saveScan(false)">
                        Save Details
                    </button>
</div>
</div>
</div>
</main>


    </>
  );
}
