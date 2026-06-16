import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // State
        let countdownInterval;

        // Navigation
        function goToStep(stepNum) {
            // Hide all steps
            document.querySelectorAll('[id^="step-"]').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('fade-in'); // Reset animation
            });

            // Show target step
            const target = document.getElementById(`step-${stepNum}`);
            target.classList.remove('hidden');
            target.classList.add('fade-in');
        }

        // Camera Simulation Logic
        function startCamera() {
            goToStep(3);
            const frame = document.getElementById('scan-frame');
            const pulse = document.getElementById('scan-pulse');
            const laser = document.getElementById('scan-laser');
            const status = document.getElementById('scan-status');
            const instruction = document.getElementById('scan-instruction');
            const flash = document.getElementById('flash-overlay');

            // 1. Initial wait (Simulate seeking) - 1.5s
            setTimeout(() => {
                // 2. Lock on (Green pulse)
                pulse.classList.add('pulse-green');
                instruction.innerHTML = `<iconify-icon icon="solar:focus-linear" class="text-green-400" width="16"></iconify-icon><span class="text-xs text-green-400 font-semibold tracking-wide">ID DETECTED</span>`;
                instruction.classList.replace('bg-black/60', 'bg-green-900/40');
                instruction.classList.replace('border-white/10', 'border-green-500/50');
                
                // 3. Snap (Flash) - 2.5s total
                setTimeout(() => {
                    // Flash effect
                    flash.classList.remove('opacity-0');
                    flash.classList.add('opacity-100');
                    setTimeout(() => { flash.classList.remove('opacity-100'); flash.classList.add('opacity-0'); }, 100);

                    // Stop pulse, freeze green border
                    pulse.classList.remove('pulse-green');
                    frame.classList.remove('border-white/50');
                    frame.classList.add('border-green-500', 'shadow-[0_0_20px_rgba(40,167,69,0.5)]', 'bg-green-900/10');
                    
                    // Start scanning animation
                    laser.classList.add('scan-line');
                    status.classList.remove('hidden');
                    
                    // 4. Scanning Duration - 5s total scanning
                    setTimeout(() => {
                        startCountdown();
                    }, 5000); // 5 seconds of scanning

                }, 1000); 

            }, 1500);
        }

        // Countdown Logic
        function startCountdown() {
            goToStep(4);
            let time = 60;
            const timerEl = document.getElementById('timer');
            const progressEl = document.getElementById('progress-bar');
            const container = document.getElementById('countdown-container');
            const details = document.getElementById('final-details');

            countdownInterval = setInterval(() => {
                time--;
                
                // Format time
                const minutes = Math.floor(time / 60);
                const seconds = time % 60;
                timerEl.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

                // Update bar
                const percentage = (time / 60) * 100;
                progressEl.style.width = `${percentage}%`;

                if (time <= 0) {
                    clearInterval(countdownInterval);
                    // Hide timer, show details
                    container.classList.add('hidden');
                    details.classList.remove('hidden');
                    details.classList.add('fade-in');
                }
            }, 1000); // Real-time tick
        }

        // Action Simulations
        function copyID() {
            // Visual feedback only
            const btn = event.currentTarget;
            const originalContent = btn.innerHTML;
            btn.innerHTML = `<iconify-icon icon="solar:check-circle-linear" width="16" class="text-green-600"></iconify-icon> Copied`;
            setTimeout(() => {
                btn.innerHTML = originalContent;
            }, 2000);
        }

        function downloadSlip() {
            const btn = event.currentTarget;
            const originalContent = btn.innerHTML;
            btn.innerHTML = `<iconify-icon icon="solar:spinner-linear" width="16" class="animate-spin"></iconify-icon> Saving...`;
            setTimeout(() => {
                btn.innerHTML = `<iconify-icon icon="solar:check-circle-linear" width="16" class="text-green-600"></iconify-icon> Saved`;
                setTimeout(() => {
                    btn.innerHTML = originalContent;
                }, 2000);
            }, 1500);
        }

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-white pointer-events-none opacity-0 z-50 transition-opacity duration-150" id="flash-overlay"></div>

<main className="flex-1 flex flex-col w-full max-w-md mx-auto bg-white sm:shadow-xl sm:my-8 sm:rounded-2xl h-full sm:h-[850px] relative overflow-hidden border-[#E0E0E0] sm:border">

<header className="bg-[#1A2433] text-white p-6 pb-8 relative z-10 shrink-0">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-sm tracking-widest font-semibold text-gray-300">NMEX</span>
</div>
<div className="text-xs text-gray-400 font-medium tracking-wide">SECURE CONNECT</div>
</div>
<h1 className="text-xl font-semibold uppercase tracking-tight leading-tight">Verification<br/>Access Portal</h1>
<p className="text-xs text-gray-400 mt-2 tracking-wide uppercase">Global Processing Authority</p>
</header>

<div className="flex-1 overflow-y-auto relative bg-white" id="content-area">

<div className="p-6 flex flex-col h-full fade-in" id="step-1">
<div className="flex-1">
<div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100 mb-6">
<p className="text-sm leading-relaxed text-[#2E3135]">
                            During automated registry synchronization, your profile requires verification. Please confirm identity parameters to continue.
                        </p>
</div>
<div className="bg-white rounded-xl border border-[#E0E0E0] shadow-sm p-5 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-[#1A2433]"></div>
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1">Profile Identity</h3>
<p className="text-lg font-semibold text-[#1A2433] tracking-tight">Sharday Charley SW</p>
</div>
<iconify-icon className="text-gray-300" icon="solar:user-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center py-2 border-b border-gray-50">
<span className="text-xs text-gray-500">Reference ID</span>
<span className="text-xs font-mono font-medium text-[#1A2433]">MMX-REG-8829</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-gray-50">
<span className="text-xs text-gray-500">Case Status</span>
<span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">Pending</span>
</div>
<div className="flex justify-between items-center pt-2">
<span className="text-xs text-gray-500">Authorization</span>
<span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">On Hold</span>
</div>
</div>
</div>
</div>
<div className="mt-auto pt-6">
<button className="w-full bg-[#1A2433] hover:bg-[#2E3135] text-white py-4 rounded-lg text-sm font-semibold uppercase tracking-wide shadow-lg shadow-gray-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2" onclick="goToStep(2)">
                        Confirm &amp; Continue
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="p-6 hidden flex flex-col h-full" id="step-2">
<div className="flex-1 space-y-5">

<div>
<h4 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Client Information</h4>
<div className="bg-white rounded-xl border border-[#E0E0E0] shadow-sm overflow-hidden">
<div className="p-4 grid grid-cols-1 gap-4">
<div>
<p className="text-[10px] uppercase text-gray-400 font-semibold">Full Name</p>
<p className="text-sm font-medium text-[#1A2433]">Sharday Charley SW</p>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-[10px] uppercase text-gray-400 font-semibold">Location</p>
<p className="text-sm font-medium text-[#1A2433]">Albuquerque, NM</p>
<p className="text-xs text-gray-500">87121</p>
</div>
<div>
<p className="text-[10px] uppercase text-gray-400 font-semibold">Contact</p>
<p className="text-sm font-medium text-[#1A2433]">505-450-6156</p>
</div>
</div>
<div>
<p className="text-[10px] uppercase text-gray-400 font-semibold">Email Registry</p>
<p className="text-sm font-medium text-[#1A2433] truncate">shardaycharley.sc@gmail.com</p>
</div>
</div>
</div>
</div>

<div>
<h4 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Asset Record</h4>
<div className="bg-white rounded-xl border border-[#E0E0E0] shadow-sm overflow-hidden">
<div className="p-4 grid grid-cols-2 gap-4">
<div className="col-span-2">
<p className="text-[10px] uppercase text-gray-400 font-semibold">Vehicle</p>
<p className="text-sm font-medium text-[#1A2433]">2022 Chevrolet Silverado 1500 RST</p>
</div>
<div>
<p className="text-[10px] uppercase text-gray-400 font-semibold">VIN Reference</p>
<p className="text-xs font-mono font-medium text-[#1A2433]">3GCPYBEK0NG123456</p>
</div>
<div>
<p className="text-[10px] uppercase text-gray-400 font-semibold">Sender</p>
<p className="text-xs font-medium text-gray-500">[Protected]</p>
</div>
</div>
</div>
</div>

<div className="bg-[#F5F5F7] rounded-lg p-4 border border-gray-200 flex gap-3 items-start">
<iconify-icon className="text-gray-500 shrink-0 mt-0.5" icon="solar:info-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<p className="text-xs text-gray-600 leading-relaxed">
                            By continuing, you acknowledge this record belongs to you and you are initiating the official verification procedure.
                        </p>
</div>
</div>
<div className="mt-auto pt-6">
<button className="w-full bg-[#1A2433] hover:bg-[#2E3135] text-white py-4 rounded-lg text-sm font-semibold uppercase tracking-wide shadow-lg shadow-gray-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2" onclick="startCamera()">
                        Proceed to Scan
                        <iconify-icon icon="solar:scanner-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="hidden h-full w-full bg-black relative flex flex-col items-center justify-center overflow-hidden" id="step-3">

<div className="absolute inset-0 camera-feed opacity-60"></div>

<div className="absolute inset-0 backdrop-blur-[2px]"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-72 h-48 relative transition-all duration-500 border-2 border-white/50 rounded-lg" id="scan-frame">

<div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white -mt-0.5 -ml-0.5"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white -mt-0.5 -mr-0.5"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white -mb-0.5 -ml-0.5"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white -mb-0.5 -mr-0.5"></div>

<div className="absolute left-0 right-0 h-0.5 bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)] opacity-0" id="scan-laser"></div>

<div className="absolute inset-0 rounded-lg" id="scan-pulse"></div>
</div>
</div>

<div className="absolute top-8 left-0 w-full flex justify-between px-6 text-white/70 text-[10px] font-mono tracking-widest uppercase z-10">
<span>Rec.Mode</span>
<span>AI: Active</span>
</div>
<div className="absolute bottom-12 text-center w-full px-6 z-10">
<div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full inline-flex items-center gap-2 border border-white/10" id="scan-instruction">
<iconify-icon className="text-white" icon="solar:card-2-linear" width="16"></iconify-icon>
<span className="text-xs text-white font-medium tracking-wide">Scan physical ID for verification</span>
</div>
<div className="hidden mt-4 text-green-400 text-xs font-mono uppercase tracking-widest animate-pulse" id="scan-status">
                        Processing Biometrics...
                    </div>
</div>
</div>

<div className="p-6 hidden flex-col h-full bg-gray-50" id="step-4">

<div className="flex flex-col items-center justify-center py-8 text-center">
<div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-[#28A745] mb-4 relative">
<div className="absolute inset-0 rounded-full border border-green-200 animate-ping opacity-75"></div>
<iconify-icon icon="solar:verified-check-bold" width="32"></iconify-icon>
</div>
<h2 className="text-lg font-semibold text-[#1A2433] tracking-tight mb-1">VERIFICATION PASSED</h2>
<p className="text-xs text-gray-500 max-w-[260px]">All primary profile info validated.</p>
</div>

<div className="bg-white rounded-xl shadow-sm border border-[#E0E0E0] p-6 text-center mb-6" id="countdown-container">
<p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">Authorization Activation</p>
<div className="text-4xl font-mono font-semibold text-[#1A2433] tabular-nums tracking-tight my-2" id="timer">1:00</div>
<div className="w-full bg-gray-100 rounded-full h-1.5 mt-4 overflow-hidden">
<div className="bg-[#1A2433] h-full rounded-full w-full transition-all duration-1000 ease-linear" id="progress-bar"></div>
</div>
<p className="text-xs text-gray-400 mt-3">Synchronizing secure registry nodes...</p>
</div>

<div className="hidden space-y-4 fade-in" id="final-details">
<div className="bg-[#1A2433] rounded-xl shadow-lg p-5 text-white relative overflow-hidden">

<div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
<iconify-icon icon="solar:qr-code-bold" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Authorization Stage</p>
<div className="inline-flex items-center gap-1.5 bg-green-500/20 px-2 py-0.5 rounded border border-green-500/30">
<div className="w-1.5 h-1.5 rounded-full bg-[#28A745]"></div>
<span className="text-xs font-semibold text-[#28A745] tracking-wide">ACTIVE</span>
</div>
</div>
</div>
<div className="space-y-3">
<div>
<p className="text-[10px] text-gray-400 uppercase mb-0.5">Registry Node ID</p>
<p className="font-mono text-sm tracking-wide text-gray-100">RNX-84721-A66-204</p>
</div>
<div className="pt-3 border-t border-white/10">
<p className="text-[10px] text-gray-400 uppercase mb-0.5">Linked Amount</p>
<p className="text-xl font-semibold text-white tracking-tight">$1,000.00</p>
<div className="mt-2 space-y-1">
<div className="flex justify-between text-xs text-gray-400">
<span>Node Registration Code</span>
<span>$500</span>
</div>
<div className="flex justify-between text-xs text-gray-400">
<span>Biometric Validation</span>
<span>$500</span>
</div>
</div>
</div>
</div>
</div>
</div>
<p className="text-xs text-center text-gray-500 px-4">
                        Present this authorization code to the assigned processing administrator to finalize the release procedure.
                    </p>
<div className="grid grid-cols-2 gap-3 pt-2">
<button className="col-span-1 bg-white border border-[#E0E0E0] text-[#1A2433] py-3 rounded-lg text-xs font-semibold shadow-sm active:bg-gray-50 flex items-center justify-center gap-2" onclick="copyID()">
<iconify-icon icon="solar:copy-linear" width="16"></iconify-icon>
                            Copy ID
                        </button>
<button className="col-span-1 bg-white border border-[#E0E0E0] text-[#1A2433] py-3 rounded-lg text-xs font-semibold shadow-sm active:bg-gray-50 flex items-center justify-center gap-2" onclick="downloadSlip()">
<iconify-icon icon="solar:file-download-linear" width="16"></iconify-icon>
                            Save Slip
                        </button>
</div>
<button className="w-full text-gray-400 text-xs py-3 hover:text-[#1A2433] transition-colors" onclick="window.location.reload()">
                        Close Portal
                    </button>
</div>
</div>
</div>
</main>



    </>
  );
}
