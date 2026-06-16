import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Role Tab Switching Logic
        const tabs = document.querySelectorAll('.role-tab');
        const views = [
            document.getElementById('view-patient'),
            document.getElementById('view-nurse'),
            document.getElementById('view-doctor'),
            document.getElementById('view-supervisor'),
            document.getElementById('view-admin')
        ];

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Reset tabs styling
                tabs.forEach(t => {
                    t.classList.remove('bg-white', 'shadow-sm', 'text-slate-900');
                    t.classList.add('text-slate-500', 'hover:text-slate-900', 'hover:bg-white/50');
                });
                
                // Set active tab styling
                tab.classList.remove('text-slate-500', 'hover:text-slate-900', 'hover:bg-white/50');
                tab.classList.add('bg-white', 'shadow-sm', 'text-slate-900');

                // Switch views explicitly with inline styles to prevent any overlap
                const targetId = tab.getAttribute('data-target');
                views.forEach(view => {
                    if (view) {
                        if (view.id === targetId) {
                            view.style.display = 'flex';
                        } else {
                            view.style.display = 'none';
                        }
                    }
                });
            });
        });

        // Patient Mobile Flow Logic
        const consentCheck = document.getElementById('consent-check');
        const startBtn = document.getElementById('btn-start-assess');

        if(consentCheck && startBtn) {
            consentCheck.addEventListener('change', (e) => {
                startBtn.disabled = !e.target.checked;
            });
        }

        function nextPatientStep(stepIndex) {
            const steps = [
                document.getElementById('patient-step-1'),
                document.getElementById('patient-step-2'),
                document.getElementById('patient-step-3')
            ];
            
            steps.forEach((step, index) => {
                if (step) {
                    if ((index + 1) === stepIndex) {
                        step.style.display = 'flex';
                    } else {
                        step.style.display = 'none';
                    }
                }
            });
            
            // Reset consent if going back to start
            if(stepIndex === 1 && consentCheck && startBtn) {
                consentCheck.checked = false;
                startBtn.disabled = true;
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-white border-b border-slate-200 shrink-0 z-50">
<div className="max-w-7xl mx-auto px-4 h-12 flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="tracking-tighter font-semibold text-lg flex items-center gap-2">
<iconify-icon className="text-slate-700" icon="solar:pulse-linear"></iconify-icon>
                    PulseTriage
                </span>
<div className="h-4 w-px bg-slate-200"></div>
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Demo Environment</span>
</div>
<nav className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
<button className="role-tab px-3 py-1.5 text-xs font-medium rounded-md transition-all bg-white shadow-sm text-slate-900" data-target="view-patient">Patient (Mobile)</button>
<button className="role-tab px-3 py-1.5 text-xs font-medium rounded-md transition-all text-slate-500 hover:text-slate-900 hover:bg-white/50" data-target="view-nurse">Triage Nurse</button>
<button className="role-tab px-3 py-1.5 text-xs font-medium rounded-md transition-all text-slate-500 hover:text-slate-900 hover:bg-white/50" data-target="view-doctor">Clinician</button>
<button className="role-tab px-3 py-1.5 text-xs font-medium rounded-md transition-all text-slate-500 hover:text-slate-900 hover:bg-white/50" data-target="view-supervisor">Supervisor</button>
<button className="role-tab px-3 py-1.5 text-xs font-medium rounded-md transition-all text-slate-500 hover:text-slate-900 hover:bg-white/50" data-target="view-admin">IT/Admin</button>
</nav>
</div>
</header>

<main className="flex-1 overflow-hidden relative">



<section className="w-full h-full flex flex-col items-center justify-center bg-slate-100/50 p-4 animate-fade-in" id="view-patient" style={{display: 'flex'}}>

<div className="w-full max-w-[375px] h-full max-h-[812px] bg-white rounded-[2rem] shadow-xl border-[6px] border-slate-900 overflow-hidden flex flex-col relative">

<div className="h-7 w-full flex items-center justify-between px-6 shrink-0 bg-white">
<span className="text-[10px] font-medium text-slate-900">9:41</span>
<div className="flex gap-1.5 items-center text-slate-900">
<iconify-icon className="text-xs" icon="solar:celluler-linear"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:wifi-linear"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:battery-charge-linear"></iconify-icon>
</div>
</div>
<div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col relative pb-6 px-5 pt-2">

<div className="flex items-center justify-between mb-8">
<span className="tracking-tighter font-semibold text-base">PulseTriage</span>

<div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 text-[10px] text-slate-600 px-2 py-1 rounded-full font-medium">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                            Private &amp; Secure
                        </div>
</div>

<div className="flex flex-col flex-1 animate-fade-in" id="patient-step-1" style={{display: 'flex'}}>
<div className="mb-6">
<div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-200 mb-4">
<iconify-icon className="text-xl text-slate-700" icon="solar:clipboard-text-linear"></iconify-icon>
</div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Pre-visit Assessment</h1>
<p className="text-sm text-slate-500 leading-relaxed">Help us prepare for your visit by sharing your symptoms. This is not a diagnosis tool.</p>
</div>
<div className="bg-slate-50 rounded-xl p-4 border border-slate-200 mb-6 space-y-3">
<div className="flex gap-3">
<iconify-icon className="text-slate-400 text-lg shrink-0 mt-0.5" icon="solar:database-linear"></iconify-icon>
<div>
<h3 className="text-xs font-semibold text-slate-900">Transient Processing</h3>
<p className="text-[11px] text-slate-500 mt-0.5">Your answers are processed securely and sent directly to the clinic. Nothing is stored on this device.</p>
</div>
</div>
</div>
<div className="mt-auto pt-4 space-y-4">
<label className="flex items-start gap-3 cursor-pointer group">
<input className="mt-0.5 shrink-0" id="consent-check" type="checkbox"/>
<span className="text-xs text-slate-600 leading-tight">I understand this is not for life-threatening emergencies and agree to share my responses with the clinic.</span>
</label>
<button className="w-full bg-slate-900 text-white py-3.5 rounded-xl text-sm font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-800 active:scale-[0.98]" disabled="" id="btn-start-assess" onclick="nextPatientStep(2)">
                                Start Assessment
                            </button>
</div>
</div>

<div className="flex flex-col flex-1 animate-fade-in" id="patient-step-2" style={{display: 'none'}}>

<div className="flex gap-1 mb-8">
<div className="h-1 flex-1 bg-slate-900 rounded-full"></div>
<div className="h-1 flex-1 bg-slate-200 rounded-full"></div>
<div className="h-1 flex-1 bg-slate-200 rounded-full"></div>
</div>
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-1">What brings you in today?</h2>
<p className="text-xs text-slate-500 mb-6">Select your primary symptom</p>

<div className="relative mb-4">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-9 pr-4 text-sm focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all" placeholder="Search symptoms..." type="text"/>
</div>
<div className="space-y-2">
<button className="w-full flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all text-left" onclick="nextPatientStep(3)">
<span className="text-sm font-medium text-slate-700">Chest Discomfort / Pain</span>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-all text-left">
<span className="text-sm font-medium text-slate-700">Fever or Chills</span>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-all text-left">
<span className="text-sm font-medium text-slate-700">Stomach Pain</span>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-all text-left">
<span className="text-sm font-medium text-slate-700">Injury / Trauma</span>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
<button className="mt-auto text-xs font-medium text-slate-500 hover:text-slate-900 py-4" onclick="nextPatientStep(1)">Back</button>
</div>

<div className="flex flex-col flex-1 animate-fade-in" id="patient-step-3" style={{display: 'none'}}>

<div className="bg-[#FEF2F2] border border-[#FECACA] rounded-xl p-4 mb-6 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-[#EF4444]"></div>
<div className="flex gap-3">
<iconify-icon className="text-[#EF4444] text-xl shrink-0 mt-0.5" icon="solar:danger-triangle-linear"></iconify-icon>
<div>
<h3 className="text-sm font-semibold text-[#991B1B] mb-1">Medical Attention Advised</h3>
<p className="text-xs text-[#991B1B]/80 leading-relaxed mb-3">Based on your report of chest discomfort, we advise you to proceed to the clinic immediately or call emergency services if symptoms worsen.</p>
<div className="flex gap-2">
<button className="bg-[#EF4444] text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-[#DC2626] transition-colors">Call Emergency</button>
<button className="bg-white border border-[#FECACA] text-[#991B1B] px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-[#FEF2F2] transition-colors">Directions</button>
</div>
</div>
</div>
</div>
<div className="text-center mb-6">
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Your Assessment is Ready</h2>
<p className="text-sm text-slate-500">Show this code to the triage nurse when you arrive.</p>
</div>

<div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 flex flex-col items-center justify-center mb-6">

<div className="w-32 h-32 bg-slate-900 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-2 border-2 border-white border-dashed opacity-50"></div>
<div className="w-16 h-16 bg-white rounded-sm flex items-center justify-center">
<iconify-icon className="text-4xl text-slate-900" icon="solar:qr-code-linear"></iconify-icon>
</div>
</div>
<div className="tracking-[0.2em] font-mono text-xl font-semibold text-slate-900">PT-892</div>
</div>
<div className="text-center mt-auto">
<p className="text-[10px] text-slate-400 mb-4 flex items-center justify-center gap-1">
<iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon> Data will auto-delete in 24h if unused
                            </p>
<button className="text-xs font-medium text-slate-500 hover:text-slate-900 py-2" onclick="nextPatientStep(1)">Start Over (Demo)</button>
</div>
</div>
</div>
</div>
</section>



<section className="w-full h-full bg-slate-50 flex flex-col animate-fade-in" id="view-nurse" style={{display: 'none'}}>

<header className="h-14 bg-white border-b border-slate-200 px-6 flex items-center justify-between shrink-0">
<div className="flex items-center gap-4">
<span className="tracking-tight font-semibold text-slate-900">Triage Station 02</span>
<div className="h-4 w-px bg-slate-200"></div>
<span className="text-xs font-medium text-slate-500">Nurse J. Smith</span>
</div>
<div className="flex items-center gap-4">

<div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">
<iconify-icon icon="solar:wifi-router-linear"></iconify-icon> Online
                    </div>
<div className="flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded-md border border-slate-200">
<iconify-icon icon="solar:database-linear"></iconify-icon> SAP Sync Active
                    </div>
<button className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors">
<iconify-icon icon="solar:user-linear"></iconify-icon>
</button>
</div>
</header>
<div className="flex-1 flex overflow-hidden">

<aside className="w-72 bg-white border-r border-slate-200 flex flex-col shrink-0">
<div className="p-4 border-b border-slate-200 flex items-center justify-between">
<h2 className="text-sm font-semibold text-slate-900">Waiting Queue</h2>
<span className="text-xs bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-medium">3</span>
</div>
<div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">

<div className="p-3 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-slate-900"></div>
<div className="flex justify-between items-start mb-1">
<span className="text-xs font-mono font-medium text-slate-500">PT-892</span>
<span className="text-[10px] font-medium text-[#EF4444] bg-[#FEF2F2] px-1.5 py-0.5 rounded">Urgent</span>
</div>
<p className="text-sm font-medium text-slate-900">Unknown Patient</p>
<p className="text-xs text-slate-500 mt-0.5 truncate">Chest Discomfort • 5m wait</p>
</div>

<div className="p-3 rounded-lg bg-white border border-transparent hover:bg-slate-50 cursor-pointer transition-colors">
<div className="flex justify-between items-start mb-1">
<span className="text-xs font-mono text-slate-400">PT-810</span>
<span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">Standard</span>
</div>
<p className="text-sm font-medium text-slate-700">Matched: M. Weber</p>
<p className="text-xs text-slate-400 mt-0.5 truncate">Ankle pain • 12m wait</p>
</div>
</div>
<div className="p-4 border-t border-slate-200">
<button className="w-full bg-white border border-slate-200 shadow-sm text-slate-700 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:scanner-linear"></iconify-icon> Scan New Patient
                        </button>
</div>
</aside>

<main className="flex-1 flex flex-col bg-slate-50 overflow-y-auto custom-scrollbar">
<div className="max-w-4xl mx-auto w-full p-8 space-y-6">

<div className="flex items-start justify-between">
<div>
<div className="flex items-center gap-3 mb-1">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Pre-Assessment: PT-892</h1>
<span className="text-xs font-medium text-slate-500 bg-slate-200 px-2 py-0.5 rounded-full flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Completed 10m ago
                                    </span>
</div>
<p className="text-sm text-slate-500">SAP Record Match: <span className="text-amber-600 font-medium bg-amber-50 px-1 rounded">Pending ID Verification</span></p>
</div>
<button className="text-sm font-medium text-slate-600 bg-white border border-slate-200 px-4 py-2 rounded-lg shadow-sm hover:bg-slate-50 transition-colors">
                                View Full History
                            </button>
</div>

<div className="grid grid-cols-3 gap-6">

<div className="col-span-2 space-y-6">

<section className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
<h3 className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:document-text-linear"></iconify-icon> Patient Reported
                                    </h3>
<div className="space-y-4">
<div>
<span className="text-xs text-slate-500 block mb-1">Chief Complaint</span>
<span className="text-sm font-medium text-slate-900">Chest Discomfort / Pressure</span>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<span className="text-xs text-slate-500 block mb-1">Onset</span>
<span className="text-sm text-slate-700">~2 hours ago</span>
</div>
<div>
<span className="text-xs text-slate-500 block mb-1">Severity (Reported)</span>
<span className="text-sm text-slate-700">6 / 10</span>
</div>
</div>
<div className="pt-3 border-t border-slate-100">
<label className="text-xs font-medium text-slate-700 block mb-2">Delta: What changed since submission?</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-sm focus:outline-none focus:border-slate-400 focus:bg-white transition-colors" placeholder="e.g., Pain increased, feeling dizzy..." type="text"/>
</div>
</div>
</section>

<section className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:heart-pulse-linear"></iconify-icon> Vitals Capture
                                        </h3>
<button className="text-xs text-blue-600 font-medium hover:underline">Import from Device</button>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="relative">
<label className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 block mb-1">Blood Pressure</label>
<div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg overflow-hidden focus-within:border-slate-400 focus-within:bg-white transition-colors">
<input className="w-1/2 bg-transparent py-2 text-center text-sm font-medium text-slate-900 focus:outline-none placeholder-slate-400" placeholder="Sys" type="text" value="145"/>
<div className="w-px h-4 bg-slate-300"></div>
<input className="w-1/2 bg-transparent py-2 text-center text-sm font-medium text-slate-900 focus:outline-none placeholder-slate-400" placeholder="Dia" type="text" value="90"/>
</div>

<span className="text-[10px] text-amber-600 mt-1 absolute -bottom-4 left-0">Elevated</span>
</div>
<div>
<label className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 block mb-1">Heart Rate (BPM)</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-sm font-medium text-slate-900 focus:outline-none focus:border-slate-400 focus:bg-white transition-colors" type="number" value="92"/>
</div>
<div>
<label className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 block mb-1">SpO2 (%)</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-sm font-medium text-slate-900 focus:outline-none focus:border-slate-400 focus:bg-white transition-colors" type="number" value="94"/>
</div>
<div>
<label className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 block mb-1">Temp (°C)</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-sm font-medium text-slate-900 focus:outline-none focus:border-slate-400 focus:bg-white transition-colors" step="0.1" type="number" value="37.1"/>
</div>
</div>
</section>
</div>

<div className="col-span-1 space-y-4">

<div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
<div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Triage Suggestion</span>
</div>
<div className="p-4">
<div className="flex items-center gap-2 mb-3">
<div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
<span className="text-base font-semibold text-slate-900">Urgent (Level 2)</span>
</div>
<ul className="text-xs text-slate-600 space-y-1.5 mb-4 list-disc list-inside">
<li>Reported chest discomfort</li>
<li>Patient age (&gt;50)</li>
<li>Elevated Blood Pressure</li>
<li>Borderline SpO2 (94%)</li>
</ul>
<div className="pt-3 border-t border-slate-100">
<label className="flex items-center gap-2 cursor-pointer mb-2">
<input checked="" type="checkbox"/>
<span className="text-xs font-medium text-slate-900">Confirm Suggestion</span>
</label>
<button className="text-[10px] text-slate-500 hover:text-slate-900 underline underline-offset-2">Override &amp; provide reason</button>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col gap-3">
<button className="w-full bg-slate-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm flex items-center justify-center gap-2">
<iconify-icon icon="solar:server-square-update-linear"></iconify-icon> Generate &amp; Send to SAP
                                    </button>
<button className="w-full bg-white border border-slate-200 text-slate-700 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:printer-linear"></iconify-icon> Print Summary PDF
                                    </button>
<p className="text-[10px] text-center text-slate-400 mt-1">Data clears locally upon successful SAP sync.</p>
</div>
</div>
</div>
</div>
</main>
</div>
</section>



<section className="w-full h-full bg-white flex flex-col animate-fade-in" id="view-doctor" style={{display: 'none'}}>

<header className="h-14 border-b border-slate-200 px-6 flex items-center justify-between shrink-0">
<div className="flex items-center gap-4">
<span className="tracking-tight font-semibold text-slate-900">Clinician Inbox</span>
<div className="h-4 w-px bg-slate-200"></div>
<span className="text-sm text-slate-500">Dr. H. Müller</span>
</div>
</header>
<div className="flex-1 flex overflow-hidden">

<aside className="w-80 border-r border-slate-200 bg-slate-50/50 flex flex-col shrink-0">
<div className="p-3 border-b border-slate-200 flex gap-2">
<button className="flex-1 bg-white shadow-sm border border-slate-200 rounded-md py-1.5 text-xs font-medium text-slate-900">Active (4)</button>
<button className="flex-1 border border-transparent rounded-md py-1.5 text-xs font-medium text-slate-500 hover:bg-slate-100 transition-colors">Completed</button>
</div>
<div className="flex-1 overflow-y-auto custom-scrollbar">

<div className="p-4 bg-white border-b border-slate-200 border-l-2 border-l-blue-600 cursor-pointer">
<div className="flex justify-between items-start mb-1">
<span className="text-xs font-medium text-slate-900">Male, 54y</span>
<span className="text-[10px] font-medium text-[#EF4444] bg-[#FEF2F2] px-1.5 py-0.5 rounded">Triage: L2</span>
</div>
<p className="text-sm text-slate-700 font-medium mb-1">Chest Discomfort</p>
<p className="text-xs text-slate-500 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Arrived 12m ago
                            </p>
</div>

<div className="p-4 border-b border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
<div className="flex justify-between items-start mb-1">
<span className="text-xs font-medium text-slate-700">Female, 28y</span>
<span className="text-[10px] font-medium text-slate-600 bg-slate-200 px-1.5 py-0.5 rounded">Triage: L4</span>
</div>
<p className="text-sm text-slate-600 mb-1">Ankle Sprain</p>
<p className="text-xs text-slate-400 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Arrived 45m ago
                            </p>
</div>
</div>
</aside>

<main className="flex-1 bg-white overflow-y-auto custom-scrollbar p-8">
<div className="max-w-3xl mx-auto">

<div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8 flex justify-between items-start">
<div>
<div className="flex items-center gap-3 mb-2">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Triage Summary</h2>
<span className="bg-[#FEF2F2] text-[#EF4444] border border-[#FECACA] text-xs font-semibold px-2.5 py-1 rounded-md">Urgent • Level 2</span>
</div>
<p className="text-sm text-slate-600">Generated from Pre-Clinic Intake &amp; Nurse Triage (Station 02)</p>
</div>
<button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm">
                                Acknowledge
                            </button>
</div>

<div className="grid grid-cols-2 gap-x-12 gap-y-8">

<div className="col-span-2 space-y-4">
<h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2">Chief Complaint &amp; History</h3>
<div>
<p className="text-lg font-medium text-slate-900 mb-2">Chest Discomfort / Pressure</p>
<ul className="text-sm text-slate-700 space-y-2">
<li className="flex gap-2"><span className="text-slate-400 w-24 shrink-0">Onset:</span> ~2 hours ago, gradual.</li>
<li className="flex gap-2"><span className="text-slate-400 w-24 shrink-0">Severity:</span> 6/10 reported by patient.</li>
<li className="flex gap-2"><span className="text-slate-400 w-24 shrink-0">Delta (Nurse):</span> "Patient appears anxious. Pain is constant, non-radiating."</li>
</ul>
</div>
</div>

<div className="space-y-4">
<h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2">Vitals at Triage</h3>
<table className="w-full text-sm text-left">
<tbody className="divide-y divide-slate-100">
<tr>
<td className="py-2 text-slate-500">Blood Pressure</td>
<td className="py-2 font-medium text-slate-900 flex items-center gap-2">
                                                145 / 90 <span className="w-2 h-2 rounded-full bg-amber-400" title="Elevated"></span>
</td>
</tr>
<tr>
<td className="py-2 text-slate-500">Heart Rate</td>
<td className="py-2 font-medium text-slate-900">92 bpm</td>
</tr>
<tr>
<td className="py-2 text-slate-500">SpO2</td>
<td className="py-2 font-medium text-slate-900 flex items-center gap-2">
                                                94% <span className="w-2 h-2 rounded-full bg-amber-400" title="Borderline"></span>
</td>
</tr>
<tr>
<td className="py-2 text-slate-500">Temperature</td>
<td className="py-2 font-medium text-slate-900">37.1 °C</td>
</tr>
</tbody>
</table>
</div>

<div className="space-y-4">
<h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2">System Flags</h3>
<div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
<ul className="text-sm text-slate-700 space-y-2 list-disc list-inside">
<li>Age protocol triggered (&gt;50 yrs).</li>
<li>Cardiovascular protocol suggested based on complaint + vitals.</li>
</ul>
</div>
<div className="text-[10px] text-slate-400 flex items-center gap-1 mt-2">
<iconify-icon icon="solar:info-circle-linear"></iconify-icon> Transient processing note: Data is fetched via SAP FHIR interface.
                                </div>
</div>
</div>
</div>
</main>
</div>
</section>



<section className="w-full h-full bg-slate-50 flex flex-col overflow-y-auto custom-scrollbar animate-fade-in" id="view-supervisor" style={{display: 'none'}}>
<div className="max-w-6xl mx-auto w-full p-8">
<header className="mb-8 flex justify-between items-end">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 mb-1">Shift Operations Overview</h1>
<p className="text-sm text-slate-500">Real-time throughput and integration metrics (Anonymized)</p>
</div>
<div className="flex gap-2">
<span className="bg-white border border-slate-200 text-xs font-medium px-3 py-1.5 rounded-md text-slate-600 shadow-sm flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Live Data
                        </span>
</div>
</header>

<div className="grid grid-cols-4 gap-4 mb-8">
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
<span className="text-xs font-medium text-slate-500 mb-2 block">Assessments Today</span>
<div className="flex items-end gap-2">
<span className="text-3xl font-semibold tracking-tight text-slate-900">142</span>
<span className="text-xs text-emerald-600 font-medium mb-1">+12%</span>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
<span className="text-xs font-medium text-slate-500 mb-2 block">Avg Triage Time Saved</span>
<div className="flex items-end gap-2">
<span className="text-3xl font-semibold tracking-tight text-slate-900">4m 12s</span>
<span className="text-xs text-slate-400 font-medium mb-1">per patient</span>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
<span className="text-xs font-medium text-slate-500 mb-2 block">% Urgent Flagged</span>
<div className="flex items-end gap-2">
<span className="text-3xl font-semibold tracking-tight text-[#EF4444]">18%</span>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-500"></div>
<span className="text-xs font-medium text-slate-500 mb-2 block">SAP Handoff Success</span>
<div className="flex items-end gap-2">
<span className="text-3xl font-semibold tracking-tight text-slate-900">99.8%</span>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-6">
<div className="col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
<h3 className="text-sm font-semibold text-slate-900 mb-6">Throughput Volume (Last 8h)</h3>

<div className="h-48 flex items-end gap-2 mt-4">
<div className="flex-1 bg-slate-100 rounded-t-sm h-[30%] hover:bg-slate-200 transition-colors relative group"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">12</span></div>
<div className="flex-1 bg-slate-100 rounded-t-sm h-[45%] hover:bg-slate-200 transition-colors"></div>
<div className="flex-1 bg-slate-100 rounded-t-sm h-[80%] hover:bg-slate-200 transition-colors"></div>
<div className="flex-1 bg-slate-100 rounded-t-sm h-[60%] hover:bg-slate-200 transition-colors"></div>
<div className="flex-1 bg-blue-100 border-t-2 border-blue-500 rounded-t-sm h-[90%] relative"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-600">Now</span></div>
<div className="flex-1 bg-slate-50 border border-slate-100 border-dashed rounded-t-sm h-[40%]"></div>
</div>
</div>
<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
<h3 className="text-sm font-semibold text-slate-900 mb-4">Current Bottlenecks</h3>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-600">Waiting for Vitals (Nurse)</span>
<span className="font-medium text-slate-900">4 pts</span>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-amber-400 w-[40%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-600">Awaiting Doctor Ack.</span>
<span className="font-medium text-slate-900">2 pts</span>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-400 w-[20%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>



<section className="w-full h-full bg-slate-50 overflow-y-auto custom-scrollbar flex flex-col animate-fade-in" id="view-admin" style={{display: 'none'}}>
<div className="max-w-4xl mx-auto w-full p-8">
<header className="mb-8">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 mb-1">System Configuration</h1>
<p className="text-sm text-slate-500">Security, compliance, and integration management.</p>
</header>
<div className="space-y-6">

<section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-slate-200 bg-slate-50/50">
<h2 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
<iconify-icon icon="solar:shield-keyhole-linear"></iconify-icon> Data Handling Policy
                            </h2>
</div>
<div className="p-6 space-y-6">
<div className="flex items-start justify-between">
<div>
<h3 className="text-sm font-medium text-slate-900 mb-1">No PHI Retention Mode (Default)</h3>
<p className="text-xs text-slate-500 max-w-md leading-relaxed">System acts purely as a transient processor. Data is temporarily held in memory/encrypted local cache until successful delivery to the hospital System of Record, then immediately purged.</p>
</div>
<input checked="" className="toggle-checkbox" disabled="" title="Enforced by policy" type="checkbox"/>
</div>
<div className="h-px w-full bg-slate-100"></div>
<div>
<div className="flex justify-between items-center mb-2">
<h3 className="text-sm font-medium text-slate-900">Unsynced Cache Auto-Delete</h3>
<span className="text-xs font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-600">0 Hours (Immediate)</span>
</div>
<input className="w-full mt-2" disabled="" max="24" min="0" type="range" value="0"/>
<p className="text-[10px] text-slate-400 mt-2">Slider locked due to "No PHI Retention" mode being active.</p>
</div>
</div>
</section>

<section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-slate-200 bg-slate-50/50 flex justify-between items-center">
<h2 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
<iconify-icon icon="solar:server-square-linear"></iconify-icon> System of Record (SAP)
                            </h2>
<span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Connected
                            </span>
</div>
<div className="p-6 space-y-4">
<div>
<label className="text-xs font-medium text-slate-700 block mb-1">FHIR Endpoint URL</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-sm text-slate-500 font-mono" disabled="" type="text" value="https://api.hospital-internal.local/fhir/v4"/>
</div>
<div className="pt-2">
<h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Recent Delivery Logs (Non-PHI)</h3>
<div className="border border-slate-200 rounded-lg overflow-hidden">
<table className="w-full text-left text-xs">
<thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
<tr>
<th className="px-4 py-2 font-medium">Timestamp</th>
<th className="px-4 py-2 font-medium">Event</th>
<th className="px-4 py-2 font-medium">Status</th>
<th className="px-4 py-2 font-medium">Local Purge</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 bg-white">
<tr>
<td className="px-4 py-2 font-mono text-slate-500">10:42:01Z</td>
<td className="px-4 py-2">Encounter Push (Assessment)</td>
<td className="px-4 py-2 text-emerald-600">201 Created</td>
<td className="px-4 py-2 text-slate-600"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Confirmed</td>
</tr>
<tr>
<td className="px-4 py-2 font-mono text-slate-500">10:38:14Z</td>
<td className="px-4 py-2">Patient Match Query</td>
<td className="px-4 py-2 text-emerald-600">200 OK</td>
<td className="px-4 py-2 text-slate-400">N/A</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>
</div>
</div>
</section>
</main>



    </>
  );
}
