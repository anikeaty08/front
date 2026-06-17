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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // State Management
        let currentStep = 1;
        
        function goToStep(step) {
            // Animation out
            const currentSection = document.getElementById(`step-${currentStep}`);
            currentSection.classList.remove('fade-enter-active');
            currentSection.classList.add('fade-exit-active');
            
            setTimeout(() => {
                currentSection.classList.add('hidden');
                currentSection.classList.remove('fade-exit-active');
                
                // Setup next step
                const nextSection = document.getElementById(`step-${step}`);
                nextSection.classList.remove('hidden');
                
                // Force reflow
                void nextSection.offsetWidth;
                
                nextSection.classList.add('fade-enter-active');
                
                // Update header indicators
                updateIndicators(step);
                
                currentStep = step;
                
                // Specific Logic per step
                if(step === 3) initCamera();
                if(step === 4) startCountdown();

            }, 300);
        }

        function updateIndicators(step) {
            for(let i = 1; i <= 4; i++) {
                const el = document.getElementById(`step-ind-${i}`);
                if(i <= step) {
                    el.classList.remove('bg-white/20');
                    el.classList.add('bg-emerald-500');
                } else {
                    el.classList.remove('bg-emerald-500');
                    el.classList.add('bg-white/20');
                }
            }
        }

        // Camera Logic
        function initCamera() {
            const video = document.getElementById('camera-feed');
            
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
                    .then(function(stream) {
                        video.srcObject = stream;
                        video.play();
                        // Start simulation after camera is running
                        setTimeout(simulateDetection, 1500); 
                    })
                    .catch(function(err) {
                        console.error("Camera Error", err);
                        document.getElementById('camera-fallback').classList.remove('hidden');
                        document.getElementById('camera-fallback').classList.add('flex');
                    });
            } else {
                document.getElementById('camera-fallback').classList.remove('hidden');
                document.getElementById('camera-fallback').classList.add('flex');
            }
        }

        function simulateScan() {
             document.getElementById('camera-fallback').classList.add('hidden');
             // Simulate a fake feed background if needed, or just run the UI logic
             simulateDetection();
        }

        function simulateDetection() {
            const reticle = document.getElementById('scan-reticle');
            const status = document.getElementById('scan-status');
            
            // 1. Idle for 2 seconds (already passed)
            
            // 2. Detect Object (Simulated)
            setTimeout(() => {
                reticle.classList.add('detected', 'scale-95'); // Grip effect
                reticle.classList.remove('scale-100');
                
                // Update Status
                status.innerHTML = `
                    <span class="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500 backdrop-blur rounded-full text-xs font-mono text-white shadow-lg shadow-emerald-500/30">
                        <iconify-icon icon="solar:scanner-linear"></iconify-icon>
                        OBJECT DETECTED
                    </span>
                `;
                
                // Start Scanning Animation
                reticle.parentElement.classList.add('scanning'); // Adds scan-line animation
                
                // 3. Scan for 4 seconds then finish
                setTimeout(() => {
                    // Flash screen white for transition
                    const flash = document.createElement('div');
                    flash.className = "absolute inset-0 bg-white z-50 transition-opacity duration-500";
                    document.getElementById('step-3').appendChild(flash);
                    
                    setTimeout(() => {
                        // Stop camera stream
                        const video = document.getElementById('camera-feed');
                        if(video.srcObject) {
                            video.srcObject.getTracks().forEach(track => track.stop());
                        }
                        goToStep(4);
                    }, 200);
                    
                }, 4000);

            }, 2000);
        }

        // Timer Logic
        function startCountdown() {
            let timeLeft = 60; // 1:00
            const display = document.getElementById('countdown-display');
            const bar = document.getElementById('timer-bar');
            const status = document.getElementById('timer-status');
            const finalDetails = document.getElementById('final-details');
            const authBadge = document.getElementById('auth-badge');

            const timerId = setInterval(() => {
                timeLeft--;
                
                // Format Time
                const minutes = Math.floor(timeLeft / 60);
                const seconds = timeLeft % 60;
                display.innerText = `0${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
                
                // Update Bar Width
                const percentage = (timeLeft / 60) * 100;
                bar.style.width = `${percentage}%`;
                
                if (timeLeft <= 0) {
                    clearInterval(timerId);
                    // Unlock UI
                    finalDetails.classList.remove('filter', 'blur-sm', 'opacity-50', 'pointer-events-none', 'select-none');
                    status.innerHTML = `<span class="text-emerald-500 font-bold">AUTHORIZATION COMPLETE</span>`;
                    authBadge.innerText = "ACTIVE";
                    authBadge.classList.remove('bg-emerald-50', 'text-emerald-700');
                    authBadge.classList.add('bg-emerald-500', 'text-white');
                    bar.style.width = '0%';
                }
            }, 1000);
        }

        // Action Buttons
        function copyNodeID() {
            const id = document.getElementById('node-id').innerText;
            navigator.clipboard.writeText(id).then(() => {
                alert("ID copied to clipboard: " + id);
            });
        }

        function downloadSlip() {
            const element = document.getElementById('slip-content');
            html2canvas(element, { scale: 2 }).then(canvas => {
                const link = document.createElement('a');
                link.download = 'NMEX-Auth-Slip.png';
                link.href = canvas.toDataURL();
                link.click();
            });
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
      

<main className="w-full max-w-md bg-white sm:rounded-2xl shadow-2xl min-h-[100dvh] sm:min-h-[800px] flex flex-col relative overflow-hidden transition-all duration-300">

<header className="bg-[#1A2433] text-white p-6 pb-8 relative z-10">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
<iconify-icon className="text-white" height="18" icon="solar:shield-check-linear" width="18"></iconify-icon>
</div>
<div>
<h1 className="text-sm font-semibold tracking-tight leading-none">NMEX</h1>
<p className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">Global Processing Authority</p>
</div>
</div>
<div className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] tracking-wide text-gray-300">
                    SECURE
                </div>
</div>
<h2 className="text-xl font-semibold tracking-tight">Verification Access Portal</h2>

<div className="flex items-center gap-2 mt-6">
<div className="h-1 flex-1 bg-emerald-500 rounded-full transition-colors duration-500" id="step-ind-1"></div>
<div className="h-1 flex-1 bg-white/20 rounded-full transition-colors duration-500" id="step-ind-2"></div>
<div className="h-1 flex-1 bg-white/20 rounded-full transition-colors duration-500" id="step-ind-3"></div>
<div className="h-1 flex-1 bg-white/20 rounded-full transition-colors duration-500" id="step-ind-4"></div>
</div>
</header>

<div className="flex-1 relative bg-gray-50/50">

<section className="absolute inset-0 p-6 flex flex-col fade-enter-active" id="step-1">
<div className="flex-1">
<div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 flex items-start gap-3">
<iconify-icon className="text-amber-600 shrink-0 mt-0.5" icon="solar:info-circle-linear" width="20"></iconify-icon>
<p className="text-sm text-amber-900 leading-relaxed">
                            During automated registry synchronization, your profile requires verification. Please confirm to continue.
                        </p>
</div>
<div className="bg-white border border-[#E0E0E0] rounded-xl p-0 overflow-hidden shadow-sm mb-6">
<div className="bg-gray-50 px-5 py-3 border-b border-[#E0E0E0] flex justify-between items-center">
<span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Profile Summary</span>
<iconify-icon className="text-gray-400" icon="solar:user-circle-linear" width="18"></iconify-icon>
</div>
<div className="p-5 space-y-4">
<div>
<label className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Name</label>
<div className="text-base font-medium text-[#2E3135]">Sharday Charley SW</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Ref ID</label>
<div className="text-sm font-medium font-mono text-[#2E3135]">MMX-REG-8829</div>
</div>
<div>
<label className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Status</label>
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-orange-50 text-orange-600 text-xs font-medium border border-orange-100">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
                                        Pending
                                    </div>
</div>
</div>
<div>
<label className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Auth Stage</label>
<div className="text-sm text-gray-500">On Hold</div>
</div>
</div>
</div>
</div>
<button className="w-full bg-[#1A2433] hover:bg-[#2E3135] text-white font-medium py-3.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-gray-200" onclick="goToStep(2)">
<span>Confirm &amp; Continue</span>
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</section>

<section className="absolute inset-0 p-6 flex flex-col hidden opacity-0 translate-y-4" id="step-2">
<div className="flex-1 overflow-y-auto pb-4 space-y-4 scrollbar-hide">

<div className="bg-white border border-[#E0E0E0] rounded-xl overflow-hidden shadow-sm">
<div className="bg-gray-50 px-4 py-3 border-b border-[#E0E0E0]">
<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Client Information</h3>
</div>
<div className="p-4 space-y-3">
<div className="flex justify-between items-start border-b border-dashed border-gray-100 pb-2">
<span className="text-xs text-gray-400">Name</span>
<span className="text-sm font-medium text-right">Sharday Charley SW</span>
</div>
<div className="flex justify-between items-start border-b border-dashed border-gray-100 pb-2">
<span className="text-xs text-gray-400">Location</span>
<span className="text-sm text-right">Albuquerque, NM 87121</span>
</div>
<div className="flex justify-between items-start border-b border-dashed border-gray-100 pb-2">
<span className="text-xs text-gray-400">Email</span>
<span className="text-sm text-right break-all">shardaycharley.sc@gmail.com</span>
</div>
<div className="flex justify-between items-start border-b border-dashed border-gray-100 pb-2">
<span className="text-xs text-gray-400">Phone</span>
<span className="text-sm text-right">505-450-6156</span>
</div>
<div className="flex justify-between items-start">
<span className="text-xs text-gray-400">Client ID</span>
<span className="text-xs font-mono bg-gray-100 px-1.5 py-0.5 rounded text-gray-600">MMX-REG-8829</span>
</div>
</div>
</div>

<div className="bg-white border border-[#E0E0E0] rounded-xl overflow-hidden shadow-sm">
<div className="bg-gray-50 px-4 py-3 border-b border-[#E0E0E0]">
<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Vehicle Record</h3>
</div>
<div className="p-4 space-y-3">
<div className="grid grid-cols-2 gap-4 border-b border-dashed border-gray-100 pb-3">
<div>
<span className="text-xs text-gray-400 block mb-1">Make</span>
<span className="text-sm font-medium">Chevrolet</span>
</div>
<div>
<span className="text-xs text-gray-400 block mb-1">Model</span>
<span className="text-sm font-medium">Silverado 1500 RST</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<span className="text-xs text-gray-400 block mb-1">Year</span>
<span className="text-sm font-medium">2022</span>
</div>
<div>
<span className="text-xs text-gray-400 block mb-1">VIN</span>
<span className="text-xs font-mono text-gray-600">3GCPYBEK0NG123456</span>
</div>
</div>
</div>
</div>

<div className="bg-gray-100 rounded-lg p-3 flex gap-3 items-center">
<div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center shrink-0">
<div className="w-2 h-2 bg-gray-600 rounded-full"></div>
</div>
<p className="text-xs text-gray-500 leading-tight">
                            By continuing, you acknowledge this record belongs to you and you are initiating verification.
                        </p>
</div>
</div>
<button className="w-full bg-[#1A2433] hover:bg-[#2E3135] text-white font-medium py-3.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98] mt-4 shadow-lg shadow-gray-200" onclick="goToStep(3)">
<iconify-icon icon="solar:scanner-linear" width="20"></iconify-icon>
<span>Proceed to Scan</span>
</button>
</section>

<section className="absolute inset-0 bg-black flex flex-col hidden opacity-0" id="step-3">

<div className="relative w-full h-full overflow-hidden">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover" id="camera-feed" muted="" playsinline=""></video>

<div className="hidden absolute inset-0 bg-gray-900 flex-col items-center justify-center text-white p-6 text-center" id="camera-fallback">
<iconify-icon className="mb-4 text-gray-500" icon="solar:camera-broken-linear" width="48"></iconify-icon>
<p className="text-sm">Camera access unavailable.</p>
<button className="mt-4 px-4 py-2 bg-white/10 border border-white/20 rounded text-sm hover:bg-white/20" onclick="simulateScan()">Simulate Scan</button>
</div>

<div className="absolute inset-0 z-10 flex flex-col">

<div className="pt-8 pb-4 bg-gradient-to-b from-black/80 to-transparent text-center px-6">
<p className="text-white font-medium text-sm drop-shadow-md">Scan physical ID for verification</p>
<p className="text-white/60 text-xs mt-1">Align document within the frame</p>
</div>

<div className="flex-1 flex items-center justify-center relative px-8">

<div className="relative w-full aspect-[1.58/1] max-w-[340px] transition-all duration-500 ease-out" id="scan-reticle">

<div className="corner-bracket tl"></div>
<div className="corner-bracket tr"></div>
<div className="corner-bracket bl"></div>
<div className="corner-bracket br"></div>

<div className="scan-line"></div>

<div className="absolute bottom-[-40px] left-0 right-0 text-center" id="scan-status">
<span className="inline-flex items-center gap-2 px-3 py-1 bg-black/50 backdrop-blur rounded-full text-xs font-mono text-white/80">
<span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse"></span>
                                        SEARCHING...
                                    </span>
</div>
</div>
</div>

<div className="h-32 bg-gradient-to-t from-black/90 to-transparent flex items-center justify-center">
<p className="text-white/40 text-[10px] uppercase tracking-widest">Auto-Capture Enabled</p>
</div>
</div>
</div>
</section>

<section className="absolute inset-0 p-6 flex flex-col hidden opacity-0 translate-y-4 overflow-y-auto" id="step-4">

<div className="flex flex-col items-center text-center mb-8 mt-4">
<div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4 border border-emerald-100 shadow-sm relative">
<div className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping"></div>
<iconify-icon className="text-emerald-600" icon="solar:verified-check-linear" width="32"></iconify-icon>
</div>
<h2 className="text-lg font-semibold text-[#1A2433] tracking-tight mb-2">VERIFICATION PASSED</h2>
<p className="text-sm text-gray-500 leading-relaxed max-w-[280px]">
                        All primary profile info validated. Authorization activation in progress.
                    </p>
</div>

<div className="bg-[#1A2433] rounded-xl p-6 text-white text-center shadow-lg shadow-indigo-900/10 mb-6 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-white/10">
<div className="h-full bg-emerald-500 w-full transition-all duration-1000 linear" id="timer-bar"></div>
</div>
<p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Activation Timer</p>
<div className="text-4xl font-mono font-medium tracking-tight mb-2" id="countdown-display">01:00</div>
<p className="text-[10px] text-emerald-400 flex items-center justify-center gap-1.5" id="timer-status">
<span className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse"></span>
                        SYNCHRONIZING REGISTRY NODES
                    </p>
</div>

<div className="transition-all duration-700 filter blur-sm opacity-50 pointer-events-none select-none" id="final-details">
<div className="bg-white border border-[#E0E0E0] rounded-lg p-5 mb-4 relative" id="slip-content">

<div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden">
<span className="text-6xl font-bold -rotate-12">NMEX</span>
</div>
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-[10px] text-gray-400 uppercase tracking-wider">Registry Node ID</p>
<p className="font-mono text-sm text-[#2E3135] mt-0.5" id="node-id">RNX-84721-A66-204</p>
</div>
<div className="px-2 py-0.5 bg-emerald-50 border border-emerald-100 rounded text-[10px] font-bold text-emerald-700 uppercase" id="auth-badge">
                                PENDING
                            </div>
</div>
<div className="space-y-3 pt-3 border-t border-dashed border-gray-200">
<div className="flex justify-between items-center">
<span className="text-xs text-gray-500">Authorization Amount</span>
<span className="text-base font-semibold text-[#1A2433]">$1,000.00</span>
</div>
<div className="pl-3 border-l-2 border-gray-100 space-y-2">
<div className="flex justify-between items-center">
<span className="text-[10px] text-gray-400 uppercase">Node Reg. Code</span>
<span className="text-xs font-medium text-gray-600">$500.00</span>
</div>
<div className="flex justify-between items-center">
<span className="text-[10px] text-gray-400 uppercase">Biometric Binding</span>
<span className="text-xs font-medium text-gray-600">$500.00</span>
</div>
</div>
</div>
</div>
<div className="bg-blue-50/50 rounded p-3 mb-6">
<p className="text-xs text-slate-600 leading-normal text-center">
                            Present this authorization code to the assigned processing administrator to finalize the release procedure.
                        </p>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="col-span-1 bg-white border border-gray-200 hover:bg-gray-50 text-[#2E3135] py-3 rounded-lg text-xs font-medium flex flex-col items-center justify-center gap-1 transition-colors" onclick="copyNodeID()">
<iconify-icon icon="solar:copy-linear" width="20"></iconify-icon>
                            Copy ID
                        </button>
<button className="col-span-1 bg-white border border-gray-200 hover:bg-gray-50 text-[#2E3135] py-3 rounded-lg text-xs font-medium flex flex-col items-center justify-center gap-1 transition-colors" onclick="downloadSlip()">
<iconify-icon icon="solar:file-download-linear" width="20"></iconify-icon>
                            Download Slip
                        </button>
</div>
<button className="w-full mt-3 text-xs text-gray-400 hover:text-gray-600 py-2" onclick="location.reload()">
                        Close Portal
                    </button>
</div>
</section>
</div>
</main>


    </>
  );
}
