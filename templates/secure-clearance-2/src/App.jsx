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



        // Constants
        const VALID_REF_ID = "NM045X";
        const VALID_PIN = "IMX7K9";

        // State Store
        let userData = {
            name: '',
            email: '',
            phone: ''
        };

        // Screen 1 Logic
        const inputs = ['input-name', 'input-email', 'input-phone', 'input-ref'];
        inputs.forEach(id => {
            document.getElementById(id).addEventListener('input', checkForm1);
        });

        function checkForm1() {
            const allFilled = inputs.every(id => document.getElementById(id).value.trim() !== '');
            const btn = document.getElementById('btn-verify');
            if (allFilled) {
                btn.disabled = false;
                btn.classList.remove('opacity-50', 'cursor-not-allowed');
            } else {
                btn.disabled = true;
                btn.classList.add('opacity-50', 'cursor-not-allowed');
            }
        }

        function attemptLogin() {
            const refInput = document.getElementById('input-ref');
            const errorMsg = document.getElementById('ref-error');
            const val = refInput.value.trim().toUpperCase();

            // Store Name
            userData.name = document.getElementById('input-name').value;
            document.getElementById('final-username').innerText = userData.name;

            if (val === VALID_REF_ID) {
                refInput.classList.remove('border-red-500', 'text-red-600');
                refInput.classList.add('border-emerald-500', 'text-emerald-700');
                errorMsg.classList.add('hidden');
                transitionScreen('screen-1', 'screen-2');
            } else {
                refInput.classList.add('border-red-500', 'text-red-600');
                errorMsg.classList.remove('hidden');
                
                // Shake effect
                refInput.classList.add('animate-[pulse_0.2s_ease-in-out_2]');
                setTimeout(() => refInput.classList.remove('animate-[pulse_0.2s_ease-in-out_2]'), 400);
            }
        }

        // Screen 2 Logic
        document.getElementById('input-pin').addEventListener('input', function(e) {
            e.target.value = e.target.value.toUpperCase(); // Force uppercase
            const val = e.target.value;
            const btn = document.getElementById('btn-pin-submit');
            const error = document.getElementById('pin-error');
            
            // Reset error on type
            e.target.classList.remove('border-red-500', 'text-red-600');
            error.classList.add('hidden');

            if (val.length === 6) {
                // Check instantly visually but button handles submission
                if (val === VALID_PIN) {
                    btn.disabled = false;
                    btn.classList.remove('opacity-50', 'cursor-not-allowed');
                } else {
                    // Logic dictates strict visual error only on submission usually, 
                    // but prompt implies behavior logic. We'll enable button if length is 6, validate on click.
                    // However, prompt says "Only one PIN is visually accepted".
                    // Let's check logic: "When IMX7K9 is entered: Continue button becomes active."
                    btn.disabled = false;
                    btn.classList.remove('opacity-50', 'cursor-not-allowed');
                }
            } else {
                btn.disabled = true;
                btn.classList.add('opacity-50', 'cursor-not-allowed');
            }
        });

        function verifyPin() {
            const input = document.getElementById('input-pin');
            const val = input.value;
            const error = document.getElementById('pin-error');
            const btn = document.getElementById('btn-pin-submit');

            if (val === VALID_PIN) {
                transitionScreen('screen-2', 'screen-3');
            } else {
                input.classList.add('border-red-500', 'text-red-600');
                error.classList.remove('hidden');
                btn.disabled = true;
                btn.classList.add('opacity-50', 'cursor-not-allowed');
            }
        }

        // Screen 3 Logic
        let videoStream = null;

        function startCamera() {
            const video = document.getElementById('webcam');
            const permUI = document.getElementById('camera-permission-ui');
            const faceUI = document.getElementById('face-interface');
            
            // Simulate Camera Start
            permUI.classList.add('hidden');
            faceUI.classList.remove('hidden');
            video.classList.remove('opacity-50');
            video.classList.add('opacity-100');

            // Try to get actual webcam, fallback to simulation if fails (or local file)
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({ video: true })
                    .then(function (stream) {
                        videoStream = stream;
                        video.srcObject = stream;
                        simulateAlignmentProcess();
                    })
                    .catch(function (error) {
                        console.log("Camera blocked/error, simulating visual feed via gray background");
                        // Even if blocked, we simulate the UI flow
                        simulateAlignmentProcess();
                    });
            } else {
                simulateAlignmentProcess();
            }
        }

        function simulateAlignmentProcess() {
            const ring = document.getElementById('face-frame-ring');
            const status = document.getElementById('face-status');
            const readyBtn = document.getElementById('btn-bio-ready');

            // 1. Wait 2 seconds (simulating user moving head)
            setTimeout(() => {
                // 2. Turn Green
                ring.classList.remove('border-red-500');
                ring.classList.add('border-emerald-400', 'shadow-[0_0_20px_rgba(52,211,153,0.5)]');
                status.innerText = "Position Perfect";
                status.classList.remove('bg-black/60');
                status.classList.add('bg-emerald-500/90');
                
                // 3. Show Ready Button
                readyBtn.classList.remove('hidden');
                readyBtn.classList.add('animate-in', 'fade-in', 'slide-in-from-bottom-2');
            }, 2500);
        }

        function startVerification() {
            const readyBtn = document.getElementById('btn-bio-ready');
            const loadingText = document.getElementById('bio-loading-text');
            const overlay = document.getElementById('scan-overlay');
            const status = document.getElementById('face-status');

            readyBtn.classList.add('hidden');
            loadingText.classList.remove('hidden');
            status.classList.add('hidden');
            
            // Cycle text: Verifying...
            let dots = 0;
            loadingText.innerText = "Verifying...";
            
            const interval = setInterval(() => {
                dots = (dots + 1) % 4;
                // Visual Simulation of scanning
            }, 500);

            // Duration 6-7 seconds
            setTimeout(() => {
                clearInterval(interval);
                loadingText.innerText = "Verification Successful";
                loadingText.classList.remove('text-slate-500', 'animate-pulse');
                loadingText.classList.add('text-emerald-600', 'font-bold');
                
                // Show green check overlay
                overlay.classList.remove('hidden');
                
                // Transition
                setTimeout(() => {
                    if(videoStream) {
                        videoStream.getTracks().forEach(track => track.stop());
                    }
                    transitionScreen('screen-3', 'screen-4');
                }, 1000);

            }, 6500);
        }

        // Screen 4 Logic
        function generateCode() {
            const actionArea = document.getElementById('release-action-area');
            const loadingArea = document.getElementById('release-loading');
            const resultArea = document.getElementById('release-result');
            const loadText = document.getElementById('release-loading-text');

            actionArea.classList.add('hidden');
            loadingArea.classList.remove('hidden');

            // 9 Seconds sequence
            const steps = [
                { time: 0, text: "Connecting to clearance system..." },
                { time: 3000, text: "Validating release eligibility..." },
                { time: 6000, text: "Preparing release credentials..." },
                { time: 8500, text: "Finalizing..." }
            ];

            steps.forEach(step => {
                setTimeout(() => {
                    loadText.style.opacity = 0;
                    setTimeout(() => {
                        loadText.innerText = step.text;
                        loadText.style.opacity = 1;
                    }, 200);
                }, step.time);
            });

            setTimeout(() => {
                loadingArea.classList.add('hidden');
                resultArea.classList.remove('hidden');
            }, 9000);
        }

        // Helper: Transitions
        function transitionScreen(fromId, toId) {
            const fromEl = document.getElementById(fromId);
            const toEl = document.getElementById(toId);

            fromEl.classList.add('opacity-0', '-translate-y-4');
            
            setTimeout(() => {
                fromEl.classList.add('hidden-step');
                toEl.classList.remove('hidden-step');
                // Trigger reflow
                void toEl.offsetWidth;
                toEl.classList.add('opacity-0', 'translate-y-4'); // Start pos for enter
                
                requestAnimationFrame(() => {
                    toEl.classList.remove('opacity-0', 'translate-y-4');
                });
            }, 500);
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
      

<main className="w-full max-w-md relative">

<div className="w-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden transition-all duration-500" id="screen-1">
<div className="p-8">

<div className="flex flex-col items-center justify-center mb-8 text-center space-y-2">
<div className="h-10 w-10 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center mb-2">
<iconify-icon className="text-slate-800" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h1 className="text-xl font-semibold tracking-tight text-slate-900">NMEX</h1>
<p className="text-xs font-medium tracking-wide text-slate-500 uppercase">Official Clearance Portal</p>
</div>
<div className="space-y-6">
<div className="space-y-1 text-center">
<h2 className="text-lg font-medium tracking-tight">Identity Verification</h2>
<p className="text-sm text-slate-500">Enter your details to access the clearance record.</p>
</div>

<div className="space-y-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1">Full Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-slate-800 focus:bg-white transition-all placeholder-slate-400" id="input-name" placeholder="e.g. Alex Mercer" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1">Email Address</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-slate-800 focus:bg-white transition-all placeholder-slate-400" id="input-email" placeholder="name@company.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1">Phone Number</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-slate-800 focus:bg-white transition-all placeholder-slate-400" id="input-phone" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1">Reference ID</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-slate-800 focus:bg-white transition-all placeholder-slate-400 uppercase tracking-widest" id="input-ref" placeholder="NM000X" type="text"/>
<p className="text-xs text-red-600 hidden mt-1" id="ref-error">Access Denied: Invalid Reference ID.</p>
</div>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm py-3 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 opacity-50 cursor-not-allowed" disabled="" id="btn-verify" onclick="attemptLogin()">
<span>Verify Access</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="bg-slate-50 px-8 py-3 border-t border-slate-100 flex justify-center">
<div className="flex items-center gap-1.5 text-slate-400">
<iconify-icon icon="solar:lock-keyhole-linear" width="12"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide uppercase">Secure Access Session</span>
</div>
</div>
</div>

<div className="hidden-step w-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden" id="screen-2">

<div className="px-6 py-5 border-b border-slate-100 flex justify-between items-start bg-slate-50/50 backdrop-blur-sm">
<div>
<h1 className="text-lg font-semibold tracking-tight text-slate-900">NMEX</h1>
<p className="text-xs text-slate-500">Vehicle Clearance Record</p>
</div>
<div className="bg-emerald-50 border border-emerald-100 text-emerald-700 px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase flex items-center gap-1">
<iconify-icon icon="solar:check-circle-bold" width="10"></iconify-icon>
                    Record Matched
                </div>
</div>
<div className="p-6 space-y-8">

<div className="space-y-3">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Vehicle Information</label>
<div className="bg-slate-50 rounded-xl border border-slate-200 p-4 space-y-3">
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-xs text-slate-500">Make / Model</p>
<p className="text-sm font-medium text-slate-900">Chevrolet Silverado</p>
</div>
<div>
<p className="text-xs text-slate-500">Year</p>
<p className="text-sm font-medium text-slate-900">2023</p>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-xs text-slate-500">Color</p>
<p className="text-sm font-medium text-slate-900">Red</p>
</div>
<div>
<p className="text-xs text-slate-500">VIN</p>
<p className="text-sm font-medium text-slate-900 font-mono">3GCPYBEK0NG123456</p>
</div>
</div>
</div>
</div>

<div className="space-y-3">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Documentation History</label>
<div className="space-y-2">
<div className="flex items-center justify-between text-sm py-1">
<span className="text-slate-600">VIS Record</span>
<div className="flex items-center gap-1.5 text-emerald-600 text-xs font-medium bg-emerald-50 px-2 py-0.5 rounded-full">
                                Processed <iconify-icon icon="solar:check-circle-linear" width="12"></iconify-icon>
</div>
</div>
<div className="flex items-center justify-between text-sm py-1 border-t border-slate-50">
<span className="text-slate-600">NMEX Card Record</span>
<div className="flex items-center gap-1.5 text-emerald-600 text-xs font-medium bg-emerald-50 px-2 py-0.5 rounded-full">
                                Approved <iconify-icon icon="solar:check-circle-linear" width="12"></iconify-icon>
</div>
</div>
<div className="flex items-center justify-between text-sm py-1 border-t border-slate-50">
<span className="text-slate-600">Authorization</span>
<div className="flex items-center gap-1.5 text-emerald-600 text-xs font-medium bg-emerald-50 px-2 py-0.5 rounded-full">
                                Paid <iconify-icon icon="solar:wallet-linear" width="12"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="space-y-4 pt-4 border-t border-slate-100">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-900">Authorization PIN</label>
<input className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm font-mono tracking-widest text-center focus:outline-none focus:ring-1 focus:ring-slate-800 transition-all uppercase placeholder-slate-300" id="input-pin" maxlength="6" placeholder="••••••" type="text"/>
<p className="text-xs text-red-600 hidden mt-1 text-center" id="pin-error">Invalid Authorization PIN</p>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm py-3 rounded-lg shadow-sm transition-all opacity-50 cursor-not-allowed" disabled="" id="btn-pin-submit" onclick="verifyPin()">
                        Continue Verification →
                    </button>
</div>
</div>
</div>

<div className="hidden-step w-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden relative" id="screen-3">
<div className="p-8 space-y-6">
<div className="text-center space-y-1">
<h2 className="text-lg font-medium tracking-tight">Biometric Confirmation</h2>
<p className="text-sm text-slate-500">This step confirms identity before final clearance review.</p>
</div>

<div className="relative w-full aspect-[4/5] bg-slate-900 rounded-xl overflow-hidden flex flex-col items-center justify-center">

<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-50" id="webcam" muted="" playsinline=""></video>

<div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center bg-slate-50" id="camera-permission-ui">
<div className="h-12 w-12 bg-slate-100 rounded-full flex items-center justify-center mb-4">
<iconify-icon className="text-slate-500" icon="solar:camera-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Camera Access Required</h3>
<p className="text-xs text-slate-500 mb-6">We need access to your camera to verify your identity against the clearance record.</p>
<button className="bg-slate-900 text-white text-xs font-medium px-4 py-2.5 rounded-lg shadow-sm hover:bg-slate-800 transition-colors" onclick="startCamera()">
                            Allow Camera Access
                        </button>
</div>

<div className="absolute inset-0 z-20 hidden" id="face-interface">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 rounded-[45%] border-[3px] border-red-500 face-frame transition-colors duration-500" id="face-frame-ring"></div>

<div className="absolute bottom-6 left-0 right-0 text-center">
<span className="inline-block bg-black/60 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/10" id="face-status">
                                Align face in frame
                            </span>
</div>

<div className="absolute inset-0 bg-emerald-500/20 hidden flex items-center justify-center backdrop-blur-sm" id="scan-overlay">
<div className="bg-white rounded-full p-3 shadow-lg animate-bounce">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-bold" width="32"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="h-10 flex items-center justify-center">
<button className="hidden w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm py-3 rounded-lg shadow-sm transition-all" id="btn-bio-ready" onclick="startVerification()">
                        Ready
                    </button>
<p className="text-xs font-medium text-slate-500 hidden animate-pulse" id="bio-loading-text"></p>
</div>
</div>
</div>

<div className="hidden-step w-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden" id="screen-4">

<div className="h-1.5 w-full bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-400"></div>
<div className="p-8 text-center space-y-6">
<div className="h-16 w-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2 border border-emerald-100">
<iconify-icon icon="solar:verified-check-linear" width="32"></iconify-icon>
</div>
<div className="space-y-1">
<h2 className="text-lg font-semibold tracking-tight text-slate-900">Verification Complete</h2>
<p className="text-sm text-slate-500">Hello, <span className="font-medium text-slate-900" id="final-username">User</span></p>
<p className="text-sm text-slate-500">Your clearance review has been successfully completed.</p>
</div>
<div className="bg-slate-50 rounded-xl border border-slate-200 p-5 text-left shadow-sm">
<div className="flex items-start gap-4">
<div className="h-10 w-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-600" icon="solar:wheel-angle-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Chevrolet Silverado</p>
<p className="text-xs text-emerald-600 font-medium mt-0.5">Clearance Status: Approved for Release</p>
</div>
</div>
</div>
<div className="space-y-4 pt-4">

<div id="release-action-area">
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm py-3 rounded-lg shadow-lg shadow-slate-200 transition-all flex items-center justify-center gap-2" id="btn-get-code" onclick="generateCode()">
<span>Get Release Code</span>
</button>
<p className="text-[10px] text-slate-400 mt-3 text-center">Release processing fee: $1,000</p>
</div>

<div className="hidden py-4 space-y-3" id="release-loading">
<div className="flex justify-center">
<iconify-icon className="text-slate-800" icon="svg-spinners:90-ring-with-bg" width="24"></iconify-icon>
</div>
<p className="text-xs font-mono text-slate-500" id="release-loading-text">Connecting to clearance system...</p>
</div>

<div className="hidden space-y-4 animate-in fade-in zoom-in duration-500" id="release-result">
<div className="bg-slate-900 text-white p-4 rounded-lg text-center space-y-1 shadow-lg">
<p className="text-[10px] text-slate-400 uppercase tracking-widest">Official Release Code</p>
<p className="text-2xl font-mono font-bold tracking-widest text-emerald-400 selection:bg-emerald-900">RLS-8842</p>
</div>
<p className="text-xs text-slate-500 leading-relaxed px-4">Provide this release code to your representing agent to finalize and activate the vehicle release.</p>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
