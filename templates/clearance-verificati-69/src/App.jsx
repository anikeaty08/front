import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- Navigation Logic ---
        function switchScreen(screenId) {
            document.querySelectorAll('.screen').forEach(s => {
                s.classList.remove('active');
                setTimeout(() => {
                    if(!s.classList.contains('active')) s.style.display = 'none';
                }, 400);
            });
            
            const target = document.getElementById(screenId);
            target.style.display = 'block';
            // slight delay to allow display block to apply before opacity transition
            setTimeout(() => {
                target.classList.add('active');
            }, 50);
        }

        // --- Screen 1: Access ---
        const refInput = document.getElementById('refId');
        const btnVerify = document.getElementById('btnVerify');
        const nameInput = document.getElementById('fullName');

        refInput.addEventListener('input', (e) => {
            const val = e.target.value.toUpperCase();
            e.target.value = val; // Force uppercase visually
            
            if (val === 'NM045X') {
                btnVerify.disabled = false;
                btnVerify.classList.remove('bg-zinc-900');
                btnVerify.classList.add('bg-blue-600', 'hover:bg-blue-500', 'shadow-blue-200');
            } else {
                btnVerify.disabled = true;
                btnVerify.classList.add('bg-zinc-900');
                btnVerify.classList.remove('bg-blue-600', 'hover:bg-blue-500', 'shadow-blue-200');
            }
        });

        btnVerify.addEventListener('click', () => {
            if(nameInput.value) {
                document.getElementById('displayUserName').textContent = nameInput.value;
            }
            switchScreen('screen-2');
        });

        // --- Screen 2: Record ---
        const authPin = document.getElementById('authPin');
        const btnContinue = document.getElementById('btnContinue');
        const pinError = document.getElementById('pinError');

        authPin.addEventListener('input', (e) => {
            const val = e.target.value.toUpperCase();
            e.target.value = val;
            
            // Logic: Button active only on exact match
            if (val === 'IMX7K9') {
                btnContinue.disabled = false;
                pinError.classList.add('hidden');
                authPin.classList.remove('text-red-600', 'border-red-300', 'bg-red-50');
                authPin.classList.add('text-green-600', 'bg-green-50', 'border-green-300');
            } else {
                btnContinue.disabled = true;
                authPin.classList.remove('text-green-600', 'bg-green-50', 'border-green-300');
                
                // Show error if length is full but wrong
                if (val.length >= 6) {
                    pinError.classList.remove('hidden');
                    authPin.classList.add('text-red-600', 'border-red-300', 'bg-red-50');
                } else {
                    pinError.classList.add('hidden');
                    authPin.classList.remove('text-red-600', 'border-red-300', 'bg-red-50');
                }
            }
        });

        btnContinue.addEventListener('click', () => {
            switchScreen('screen-3');
        });

        // --- Screen 3: Biometric ---
        const btnBiometric = document.getElementById('btnBiometric');
        const scanRing = document.getElementById('scanRing');
        const scanStatus = document.getElementById('scanStatus');
        const scanIcon = document.getElementById('scanIcon');

        btnBiometric.addEventListener('click', () => {
            // Visual Updates
            btnBiometric.style.display = 'none';
            scanStatus.textContent = 'Scanning...';
            scanStatus.classList.remove('text-zinc-400');
            scanStatus.classList.add('text-zinc-800');
            
            // Start Animation
            scanRing.classList.remove('opacity-0');
            scanRing.classList.add('scan-ring', 'border-t-green-500'); // Add rotation class
            scanIcon.classList.add('text-zinc-800');

            // Phase 2
            setTimeout(() => {
                scanStatus.textContent = 'Processing...';
            }, 1500);

            // Phase 3: Success
            setTimeout(() => {
                scanRing.classList.remove('scan-ring', 'border-t-green-500');
                scanRing.classList.add('border-green-500', 'opacity-100');
                scanIcon.setAttribute('icon', 'solar:check-circle-bold');
                scanIcon.classList.remove('text-zinc-800');
                scanIcon.classList.add('text-green-500');
                scanStatus.textContent = '✔ Verification Successful';
                scanStatus.classList.add('text-green-600');
                
                // Auto proceed
                setTimeout(() => {
                    switchScreen('screen-4');
                }, 1000);
            }, 3000);
        });

        // --- Screen 4: Release ---
        const btnRelease = document.getElementById('btnRelease');
        const codeContainer = document.getElementById('codeContainer');

        btnRelease.addEventListener('click', () => {
            btnRelease.style.display = 'none';
            codeContainer.classList.remove('hidden');
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="w-full max-w-md bg-white rounded-2xl shadow-xl shadow-zinc-200/50 border border-zinc-100 overflow-hidden relative min-h-[600px] flex flex-col">

<header className="pt-8 pb-2 px-6 text-center border-b border-zinc-50">
<div className="flex flex-col items-center justify-center gap-2">
<div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center text-white shadow-lg shadow-zinc-300">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h1 className="text-sm font-semibold tracking-widest text-zinc-900">NMEX</h1>
<p className="text-[10px] font-medium tracking-wide text-zinc-400 uppercase">Official Clearance Portal</p>
</div>
</div>
</header>

<div className="flex-1 relative">

<div className="screen active p-6" id="screen-1">
<div className="mb-8 text-center">
<h2 className="text-xl font-semibold tracking-tight text-zinc-900">Identity Verification</h2>
<p className="text-sm text-zinc-500 mt-2 leading-relaxed">Enter your details to access the associated clearance record.</p>
</div>
<form className="space-y-4" id="accessForm" onsubmit="event.preventDefault();">
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide ml-1">Full Name</label>
<input className="w-full px-4 py-3 text-sm bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:bg-white transition-all" id="fullName" placeholder="e.g. Alex Mercer" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide ml-1">Email Address</label>
<input className="w-full px-4 py-3 text-sm bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:bg-white transition-all" placeholder="name@company.com" required="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide ml-1">Phone Number</label>
<input className="w-full px-4 py-3 text-sm bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:bg-white transition-all" placeholder="+1 (555) 000-0000" required="" type="tel"/>
</div>
<div className="space-y-1 pt-2">
<div className="flex justify-between items-center">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide ml-1">Reference ID</label>
<span className="text-[10px] text-zinc-400">Req: NM045X</span>
</div>
<input className="w-full px-4 py-3 text-sm font-mono bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:bg-white transition-all uppercase tracking-wider" id="refId" placeholder="NMX-XXXX" type="text"/>
</div>
<button className="w-full mt-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium rounded-xl transition-all shadow-lg shadow-zinc-200 flex items-center justify-center gap-2" disabled="" id="btnVerify" type="button">
                        Verify Access
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</form>
<div className="mt-8 flex items-center justify-center gap-2 text-zinc-400">
<iconify-icon icon="solar:lock-password-linear" width="14"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide uppercase">Secure Access Session</span>
</div>
</div>

<div className="screen p-6 pb-8" id="screen-2">
<div className="mb-5 flex justify-between items-end">
<h2 className="text-lg font-semibold tracking-tight text-zinc-900">Vehicle Clearance Record</h2>
<span className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-semibold uppercase tracking-wider rounded border border-green-100">Record Matched</span>
</div>

<div className="bg-zinc-50 rounded-xl border border-zinc-100 overflow-hidden mb-6">
<div className="h-40 w-full bg-zinc-200 relative overflow-hidden group">

<img alt="Red Chevrolet Silverado" className="w-full h-full object-cover object-center brightness-95" src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white font-medium">
                            Inspection Image – Record 2023
                        </div>
</div>
<div className="p-4 grid grid-cols-2 gap-y-4 gap-x-2">
<div>
<p className="text-[10px] text-zinc-400 uppercase tracking-wide font-medium">Make / Model</p>
<p className="text-sm font-medium text-zinc-900">Chevrolet Silverado</p>
</div>
<div>
<p className="text-[10px] text-zinc-400 uppercase tracking-wide font-medium">Year</p>
<p className="text-sm font-medium text-zinc-900">2023</p>
</div>
<div>
<p className="text-[10px] text-zinc-400 uppercase tracking-wide font-medium">Exterior Color</p>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="w-2.5 h-2.5 rounded-full bg-red-700 shadow-sm border border-red-800"></span>
<p className="text-sm font-medium text-zinc-900">Red</p>
</div>
</div>
<div>
<p className="text-[10px] text-zinc-400 uppercase tracking-wide font-medium">VIN</p>
<p className="text-xs font-mono text-zinc-600">3GCPYBEK0NG123456</p>
</div>
</div>
</div>

<div className="mb-6">
<h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide mb-3 px-1">Documentation History</h3>
<div className="space-y-2">
<div className="flex items-center justify-between p-3 bg-white border border-zinc-100 rounded-lg shadow-sm">
<span className="text-xs text-zinc-600 font-medium">VIS Record — Processed</span>
<iconify-icon className="text-green-600" icon="solar:check-circle-linear" width="18"></iconify-icon>
</div>
<div className="flex items-center justify-between p-3 bg-white border border-zinc-100 rounded-lg shadow-sm">
<span className="text-xs text-zinc-600 font-medium">NMEX Card Record — Approved</span>
<iconify-icon className="text-green-600" icon="solar:check-circle-linear" width="18"></iconify-icon>
</div>
<div className="flex items-center justify-between p-3 bg-white border border-zinc-100 rounded-lg shadow-sm">
<span className="text-xs text-zinc-600 font-medium">Authorization — Paid</span>
<iconify-icon className="text-green-600" icon="solar:check-circle-linear" width="18"></iconify-icon>
</div>
</div>
</div>

<div className="pt-4 border-t border-zinc-100">
<div className="flex justify-between items-center mb-2">
<label className="text-xs font-medium text-zinc-900 uppercase tracking-wide">Authorization PIN</label>
<span className="text-[10px] text-red-500 font-medium hidden" id="pinError">Invalid Authorization PIN</span>
</div>
<div className="relative">
<input className="w-full px-4 py-3 pl-10 text-sm font-mono bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:bg-white transition-all uppercase tracking-[0.2em]" id="authPin" maxlength="6" placeholder="XXXXXX" type="text"/>
<iconify-icon className="absolute left-3 top-3.5 text-zinc-400" icon="solar:key-minimalistic-linear" width="18"></iconify-icon>
</div>
<button className="w-full mt-4 py-3 bg-zinc-900 hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium rounded-xl transition-all shadow-md shadow-zinc-200" disabled="" id="btnContinue" type="button">
                        Continue Verification →
                    </button>
</div>
</div>

<div className="screen h-full flex flex-col justify-center items-center p-6 text-center" id="screen-3">
<div className="mb-8">
<h2 className="text-xl font-semibold tracking-tight text-zinc-900">Biometric Confirmation</h2>
<p className="text-sm text-zinc-500 mt-2 max-w-[260px] mx-auto">This step confirms identity before final clearance review.</p>
</div>
<div className="relative w-48 h-48 flex items-center justify-center mb-10">

<div className="absolute w-full h-full rounded-full border border-zinc-100 bg-zinc-50"></div>

<div className="absolute w-full h-full rounded-full border-2 border-transparent border-t-zinc-900 opacity-0 transition-opacity duration-300" id="scanRing"></div>

<div className="relative z-10 bg-white w-40 h-40 rounded-full shadow-xl shadow-zinc-100 flex items-center justify-center border border-zinc-50">
<iconify-icon className="text-zinc-300 transition-all duration-500" icon="solar:face-scan-square-linear" id="scanIcon" width="64"></iconify-icon>
</div>
</div>
<div className="h-12 flex flex-col justify-center">
<p className="text-sm font-medium text-zinc-400 tracking-wide transition-all" id="scanStatus">Waiting for input...</p>
</div>
<button className="mt-8 px-10 py-3 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium rounded-full transition-all shadow-lg shadow-zinc-200 hover:scale-105 active:scale-95" id="btnBiometric">
                    Ready
                </button>
</div>

<div className="screen p-6 pb-8" id="screen-4">
<div className="text-center mb-8 pt-4">
<div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-100 shadow-sm">
<iconify-icon icon="solar:verified-check-linear" width="32"></iconify-icon>
</div>
<h2 className="text-xl font-semibold tracking-tight text-zinc-900">Verification Complete</h2>
<p className="text-sm text-zinc-500 mt-2">Hello, <span className="text-zinc-900 font-medium" id="displayUserName">User</span></p>
<p className="text-sm text-zinc-500">Your clearance review has been successfully completed.</p>
</div>
<div className="bg-white rounded-xl border border-zinc-200 p-5 shadow-sm mb-6 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-sm font-semibold text-zinc-900">Chevrolet Silverado</h3>
<p className="text-xs text-zinc-500 font-mono mt-1">Ref: NM045X</p>
</div>
<iconify-icon className="text-zinc-300" icon="solar:car-linear" width="24"></iconify-icon>
</div>
<div className="py-2 px-3 bg-green-50 rounded border border-green-100 inline-block">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span>
<span className="text-xs font-semibold text-green-700 uppercase tracking-wide">Approved for Release</span>
</div>
</div>
<p className="text-[10px] text-zinc-400 mt-3 italic text-right">Concept display only</p>
</div>
<div className="space-y-3">
<div className="hidden mb-4 bg-zinc-900 rounded-xl p-4 text-center transition-all" id="codeContainer">
<p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-1">Release Code</p>
<p className="text-2xl font-mono text-white font-semibold tracking-widest">REL-882-X9</p>
</div>
<button className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-xl transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2" id="btnRelease">
<iconify-icon icon="solar:qr-code-linear" width="20"></iconify-icon>
                        Get Release Code
                    </button>
<div className="flex justify-between items-center px-2">
<span className="text-[10px] text-zinc-400">Processing fee</span>
<span className="text-xs font-medium text-zinc-900">$1,000.00</span>
</div>
<p className="text-[10px] text-zinc-300 text-center mt-1">Displayed for demonstration purposes only</p>
</div>
<div className="mt-8 p-4 bg-zinc-50 rounded-lg border border-zinc-100">
<div className="flex gap-2">
<iconify-icon className="text-zinc-400 shrink-0" icon="solar:info-circle-linear" width="16"></iconify-icon>
<p className="text-xs text-zinc-500 leading-relaxed">Provide this release code to your representing agent to finalize and activate the vehicle release process.</p>
</div>
</div>
</div>
</div>

<footer className="py-3 px-6 bg-zinc-50 border-t border-zinc-100 text-center">
<p className="text-[9px] text-zinc-400 leading-tight">This interface is a fictional demonstration and does not perform real transactions or authorizations.</p>
</footer>
</main>


    </>
  );
}
