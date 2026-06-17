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
        let stream = null;
        let timerInterval;

        // Navigation
        function goToStep(step) {
            // Hide all steps
            document.querySelectorAll('.step-container').forEach(el => {
                el.classList.add('hidden-step');
                el.classList.remove('fade-enter-active');
            });

            // Show target step
            const target = document.getElementById(`step-${step}`);
            target.classList.remove('hidden-step');
            target.classList.add('fade-enter');
            
            // Trigger animation frame
            requestAnimationFrame(() => {
                target.classList.add('fade-enter-active');
            });

            currentStep = step;
        }

        // Camera Logic
        async function initCamera() {
            goToStep(3);
            const video = document.getElementById('camera-feed');
            const guide = document.getElementById('scan-guide');
            const beam = document.getElementById('scan-beam');
            const statusText = document.getElementById('scan-text');

            try {
                stream = await navigator.mediaDevices.getUserMedia({ 
                    video: { facingMode: 'environment' } 
                });
                video.srcObject = stream;
                
                // Simulate Auto-Detect Logic
                setTimeout(() => {
                    // 1. Detect Object
                    guide.classList.remove('border-white/30');
                    guide.classList.add('pulse-active');
                    statusText.innerText = "Object Detected. Hold Steady...";
                    statusText.classList.add('text-[#28A745]');
                    
                    // 2. Lock On & Scan
                    setTimeout(() => {
                        beam.classList.remove('opacity-0');
                        beam.classList.add('scan-overlay'); // Start vertical scan
                        statusText.innerText = "Acquiring Data...";

                        // 3. Capture & Process
                        setTimeout(() => {
                            captureAndProcess();
                        }, 2000);

                    }, 1500);

                }, 2000); // Initial delay to find object

            } catch (err) {
                alert("Camera access required for verification.");
                goToStep(2);
            }
        }

        function cancelScan() {
            if(stream) {
                stream.getTracks().forEach(track => track.stop());
            }
            goToStep(2);
        }

        function captureAndProcess() {
            const overlay = document.getElementById('processing-overlay');
            overlay.classList.remove('hidden-step');
            overlay.classList.add('fade-enter-active');

            // Simulate server processing time (5 seconds)
            setTimeout(() => {
                if(stream) {
                    stream.getTracks().forEach(track => track.stop());
                }
                startActivationCountdown();
            }, 4000);
        }

        // Step 4 Logic
        function startActivationCountdown() {
            goToStep(4);
            
            // For demo purposes, we speed up the minute.
            // 1 minute visual, but runs faster (approx 6 seconds real time)
            let timeLeft = 60; 
            const display = document.getElementById('countdown-display');
            const bar = document.getElementById('progress-bar');
            const totalDuration = 60;

            timerInterval = setInterval(() => {
                timeLeft--;
                
                // Format time
                const seconds = timeLeft < 10 ? `0${timeLeft}` : timeLeft;
                display.innerText = `00:${seconds}`;

                // Update Bar
                const percent = (timeLeft / totalDuration) * 100;
                bar.style.transform = `scaleX(${percent / 100})`;

                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    revealDetails();
                }
            }, 80); // 80ms ticks = fast forward effect
        }

        function revealDetails() {
            const display = document.getElementById('countdown-display');
            display.innerText = "00:00";
            display.classList.add('text-gray-600');
            
            const details = document.getElementById('final-details');
            details.classList.remove('opacity-30', 'blur-sm', 'pointer-events-none');
            details.classList.add('opacity-100', 'blur-0');
        }

        function copyCode() {
            navigator.clipboard.writeText("RNX-84721-A66-204");
            const btn = event.currentTarget;
            const icon = btn.querySelector('iconify-icon');
            const originalIcon = icon.getAttribute('icon');
            
            icon.setAttribute('icon', 'solar:check-circle-linear');
            icon.classList.add('text-[#28A745]');
            
            setTimeout(() => {
                icon.setAttribute('icon', originalIcon);
                icon.classList.remove('text-[#28A745]');
            }, 2000);
        }

        function downloadSlip() {
            // Simulated download
            const node = document.getElementById('ticket-node');
            const btn = event.currentTarget;
            btn.innerHTML = `<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon> Saved`;
            setTimeout(() => {
                btn.innerHTML = `<iconify-icon icon="solar:file-download-linear" width="20"></iconify-icon> Download Slip`;
            }, 2000);
            
            // In a real app, use html2canvas here.
            // Creating a dummy link for effect
            const link = document.createElement('a');
            link.download = 'NMEX_Auth_Slip.txt';
            link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent("NMEX AUTHORIZATION\nRef: MMX-REG-8829\nNode: RNX-84721-A66-204\nAmount: $1,000\nStatus: ACTIVE");
            link.click();
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
      

<main className="w-full max-w-md relative z-10">

<div className="step-container w-full" id="step-1">

<header className="mb-8 text-center">
<div className="flex items-center justify-center gap-2 mb-4 opacity-90">
<iconify-icon className="text-[#28A745]" icon="solar:shield-check-linear" width="24"></iconify-icon>
<h1 className="text-lg font-semibold tracking-tighter uppercase text-white">NMEX Verification</h1>
</div>
<p className="text-[10px] tracking-widest text-gray-400 uppercase border-b border-gray-700/50 pb-4 mx-8">
                    Global Processing &amp; Clearance Authority
                </p>
</header>

<div className="space-y-6">
<p className="text-sm text-gray-300 text-center leading-relaxed px-2">
                    During automated registry synchronization, your profile requires verification. Please confirm to continue.
                </p>

<div className="bg-[#2E3135] border border-gray-700 rounded-lg p-5 shadow-lg relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-orange-500/80"></div>
<div className="space-y-4">
<div className="flex justify-between items-start">
<div>
<p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Subject Name</p>
<p className="text-base font-medium text-white tracking-tight">Sharday Charley SW</p>
</div>
<iconify-icon className="text-gray-500" icon="solar:user-id-linear" width="20"></iconify-icon>
</div>
<div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-700/50">
<div>
<p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Reference ID</p>
<p className="text-xs font-mono text-gray-200">MMX-REG-8829</p>
</div>
<div className="text-right">
<p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Case Status</p>
<div className="inline-flex items-center gap-1.5 bg-yellow-500/10 border border-yellow-500/20 px-2 py-0.5 rounded text-[10px] text-yellow-500 font-medium">
<span className="w-1 h-1 rounded-full bg-yellow-500 animate-pulse"></span>
                                    Pending
                                </div>
</div>
</div>
<div>
<p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Auth Stage</p>
<p className="text-sm text-gray-300">On Hold</p>
</div>
</div>
</div>

<button className="w-full bg-white hover:bg-gray-100 text-[#1A2433] font-semibold text-sm py-3.5 rounded-lg shadow-lg shadow-white/5 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2" onclick="goToStep(2)">
<span>Confirm &amp; Continue</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="step-container w-full hidden-step" id="step-2">
<header className="mb-6 flex items-center justify-between">
<button className="text-gray-400 hover:text-white transition-colors" onclick="goToStep(1)">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400">Record Review</h2>
<div className="w-5"></div>
</header>
<div className="space-y-4">

<div className="bg-[#2E3135] border border-gray-700 rounded-lg p-5 shadow-sm">
<div className="flex items-center gap-2 mb-4 border-b border-gray-700/50 pb-2">
<iconify-icon className="text-blue-400" icon="solar:folder-open-linear"></iconify-icon>
<h3 className="text-xs font-semibold uppercase tracking-wider text-gray-200">Client Information</h3>
</div>
<div className="space-y-3">
<div className="flex justify-between">
<span className="text-xs text-gray-400">Name</span>
<span className="text-xs text-white font-medium text-right">Sharday Charley SW</span>
</div>
<div className="flex justify-between">
<span className="text-xs text-gray-400">Location</span>
<span className="text-xs text-white font-medium text-right">Albuquerque, NM 87121</span>
</div>
<div className="flex justify-between">
<span className="text-xs text-gray-400">Email</span>
<span className="text-xs text-white font-medium text-right truncate max-w-[150px]">shardaycharley.sc@gmail.com</span>
</div>
<div className="flex justify-between">
<span className="text-xs text-gray-400">Phone</span>
<span className="text-xs text-white font-medium text-right">505-450-6156</span>
</div>
<div className="flex justify-between items-center pt-2 border-t border-gray-700/30">
<span className="text-xs text-gray-400">Client ID Ref</span>
<span className="text-[10px] font-mono bg-gray-800 px-1.5 py-0.5 rounded text-gray-300">MMX-REG-8829</span>
</div>
</div>
</div>

<div className="bg-[#2E3135] border border-gray-700 rounded-lg p-5 shadow-sm">
<div className="flex items-center gap-2 mb-4 border-b border-gray-700/50 pb-2">
<iconify-icon className="text-blue-400" icon="solar:wheel-linear"></iconify-icon>
<h3 className="text-xs font-semibold uppercase tracking-wider text-gray-200">Vehicle Information</h3>
</div>
<div className="space-y-3">
<div className="grid grid-cols-2 gap-2">
<div>
<p className="text-[10px] text-gray-500 uppercase">Make</p>
<p className="text-xs text-white">Chevrolet</p>
</div>
<div>
<p className="text-[10px] text-gray-500 uppercase">Model</p>
<p className="text-xs text-white">Silverado 1500 RST</p>
</div>
<div>
<p className="text-[10px] text-gray-500 uppercase">Year</p>
<p className="text-xs text-white">2022</p>
</div>
<div>
<p className="text-[10px] text-gray-500 uppercase">Sender</p>
<p className="text-xs text-gray-400 italic">[Restricted]</p>
</div>
</div>
<div className="pt-2">
<p className="text-[10px] text-gray-500 uppercase mb-1">VIN</p>
<p className="text-xs font-mono text-white tracking-wide">3GCPYBEK0NG123456</p>
</div>
</div>
</div>

<div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4 flex gap-3 items-start">
<iconify-icon className="text-gray-400 shrink-0 mt-0.5" icon="solar:info-circle-linear"></iconify-icon>
<p className="text-xs text-gray-400 leading-relaxed">
                        By continuing, you acknowledge this record belongs to you and you are initiating verification.
                    </p>
</div>
<button className="w-full bg-[#28A745] hover:bg-[#218838] text-white font-semibold text-sm py-3.5 rounded-lg shadow-lg shadow-green-900/20 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2" onclick="initCamera()">
<iconify-icon icon="solar:scanner-linear" width="18"></iconify-icon>
<span>Proceed to Scan</span>
</button>
</div>
</div>

<div className="step-container w-full h-[80vh] hidden-step relative overflow-hidden bg-black rounded-xl border border-gray-800" id="step-3">

<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-60" id="camera-feed" muted="" playsinline=""></video>

<canvas className="hidden" id="capture-canvas"></canvas>

<div className="absolute inset-0 z-10 flex flex-col justify-between p-6">

<div className="flex justify-between items-start">
<div className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
<span className="text-[10px] font-medium tracking-wide uppercase">Live Feed</span>
</div>
</div>
<button className="bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10 text-white" onclick="cancelScan()">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
</div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-40">
<div className="w-full h-full border-2 border-white/30 rounded-lg relative transition-all duration-300" id="scan-guide">

<div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white -mt-0.5 -ml-0.5"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white -mt-0.5 -mr-0.5"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white -mb-0.5 -ml-0.5"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white -mb-0.5 -mr-0.5"></div>

<div className="absolute left-0 w-full h-0.5 bg-[#28A745] shadow-[0_0_15px_#28A745] opacity-0" id="scan-beam"></div>
</div>
<p className="text-center text-xs font-medium text-white/80 mt-4 tracking-wide shadow-black drop-shadow-md" id="scan-text">
                        Scan physical ID for verification
                    </p>
</div>

<div className="text-center">
<p className="text-[10px] text-gray-400 uppercase tracking-widest">Auto-Detect Enabled</p>
</div>
</div>

<div className="absolute inset-0 z-20 bg-[#1A2433] flex flex-col items-center justify-center hidden-step" id="processing-overlay">
<div className="relative w-16 h-16 mb-4">
<div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
<div className="absolute inset-0 border-4 border-[#28A745] rounded-full border-t-transparent animate-spin"></div>
</div>
<h3 className="text-sm font-semibold text-white tracking-wide uppercase">Processing Data</h3>
<p className="text-xs text-gray-400 mt-2">Validating biometrics...</p>
</div>
</div>

<div className="step-container w-full hidden-step" id="step-4">

<div className="text-center mb-6">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#28A745]/10 border border-[#28A745]/30 mb-4 relative">
<div className="absolute inset-0 rounded-full bg-[#28A745]/20 animate-ping opacity-75"></div>
<iconify-icon className="text-[#28A745] relative z-10" icon="solar:verified-check-linear" width="32"></iconify-icon>
</div>
<h2 className="text-lg font-semibold tracking-tight text-white mb-1">VERIFICATION PASSED</h2>
<p className="text-xs text-gray-400 max-w-[260px] mx-auto leading-relaxed">
                    All primary profile info validated. Authorization activation in progress.
                </p>
</div>

<div className="bg-[#2E3135] border border-gray-700 rounded-lg p-6 mb-6 text-center shadow-lg relative overflow-hidden">
<p className="text-[10px] text-gray-400 uppercase tracking-wider mb-2">Activation Sequence</p>
<div className="text-4xl font-mono font-medium text-white tracking-tighter tabular-nums" id="countdown-display">
                    01:00
                </div>
<div className="h-1 w-full bg-gray-700 mt-4 rounded-full overflow-hidden">
<div className="h-full bg-[#28A745] w-full origin-left transition-transform duration-100 ease-linear" id="progress-bar"></div>
</div>
</div>

<div className="space-y-4 opacity-30 blur-sm pointer-events-none transition-all duration-700" id="final-details">

<div className="bg-white text-[#1A2433] rounded-lg p-5 shadow-xl border-t-4 border-[#28A745]" id="ticket-node">
<div className="flex justify-between items-start mb-4 border-b border-gray-200 pb-3">
<div>
<p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Authorization Stage</p>
<p className="text-sm font-bold text-[#28A745] flex items-center gap-1">
                                ACTIVE
                                <iconify-icon icon="solar:check-circle-bold" width="14"></iconify-icon>
</p>
</div>
<div className="text-right">
<p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Total Limit</p>
<p className="text-lg font-bold tracking-tight">$1,000.00</p>
</div>
</div>
<div className="space-y-3 mb-4">
<div>
<p className="text-[10px] text-gray-500 uppercase tracking-wider">Registry Node ID</p>
<div className="flex items-center justify-between bg-gray-100 rounded px-3 py-2 mt-1">
<code className="text-sm font-mono font-semibold text-[#1A2433]">RNX-84721-A66-204</code>
<button className="text-gray-400 hover:text-[#1A2433] transition-colors" onclick="copyCode()">
<iconify-icon icon="solar:copy-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-2 gap-2 text-xs">
<div className="flex justify-between border-b border-gray-200 border-dashed py-1">
<span className="text-gray-500">Node Registration</span>
<span className="font-medium">$500</span>
</div>
<div className="flex justify-between border-b border-gray-200 border-dashed py-1">
<span className="text-gray-500">Biometric Bind</span>
<span className="font-medium">$500</span>
</div>
</div>
</div>
<p className="text-[10px] text-gray-400 leading-tight text-center">
                        Present this authorization code to the assigned processing administrator to finalize the release procedure.
                    </p>
</div>

<div className="grid grid-cols-2 gap-3">
<button className="bg-[#2E3135] hover:bg-gray-700 border border-gray-600 text-white text-xs font-medium py-3 rounded-lg transition-colors flex flex-col items-center justify-center gap-1" onclick="downloadSlip()">
<iconify-icon icon="solar:file-download-linear" width="20"></iconify-icon>
                        Download Slip
                    </button>
<button className="bg-[#2E3135] hover:bg-red-900/30 border border-gray-600 hover:border-red-500/50 text-white hover:text-red-400 text-xs font-medium py-3 rounded-lg transition-colors flex flex-col items-center justify-center gap-1" onclick="window.location.reload()">
<iconify-icon icon="solar:logout-2-linear" width="20"></iconify-icon>
                        Close Portal
                    </button>
</div>
</div>
</div>
</main>


    </>
  );
}
