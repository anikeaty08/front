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
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
gray: {
50: '#F9FAFB',
100: '#F3F4F6',
200: '#E5E7EB',
300: '#D1D5DB',
400: '#9CA3AF',
500: '#6B7280',
600: '#4B5563',
700: '#374151',
800: '#1F2937',
900: '#111827',
}
},
letterSpacing: {
tight: '-0.025em',
tighter: '-0.04em',
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            
            // --- STATE & UTILS ---
            const switchScreen = (fromId, toId) => {
                const fromEl = document.getElementById(fromId);
                const toEl = document.getElementById(toId);
                
                fromEl.style.opacity = '0';
                fromEl.style.transform = 'translateY(-10px)';
                
                setTimeout(() => {
                    fromEl.classList.add('hidden');
                    toEl.classList.remove('hidden');
                    // Reset position for animation
                    toEl.style.opacity = '0';
                    toEl.style.transform = 'translateY(10px)';
                    
                    // Trigger reflow
                    void toEl.offsetWidth; 
                    
                    toEl.style.opacity = '1';
                    toEl.style.transform = 'translateY(0)';
                }, 500);
            };

            // --- SCREEN 1: ACCESS ---
            const inputs1 = ['input-name', 'input-email', 'input-phone', 'input-ref'];
            const btnVerify = document.getElementById('btn-verify-access');
            const refInput = document.getElementById('input-ref');
            const refError = document.getElementById('ref-error');
            const nameInput = document.getElementById('input-name');

            const validateScreen1 = () => {
                const allFilled = inputs1.every(id => document.getElementById(id).value.trim() !== '');
                btnVerify.disabled = !allFilled;
                if(btnVerify.disabled) {
                    btnVerify.classList.remove('bg-gray-900', 'text-white');
                    btnVerify.classList.add('bg-gray-100', 'text-gray-400');
                } else {
                    btnVerify.classList.add('bg-gray-900', 'text-white');
                    btnVerify.classList.remove('bg-gray-100', 'text-gray-400');
                }
            };

            inputs1.forEach(id => {
                document.getElementById(id).addEventListener('input', () => {
                    validateScreen1();
                    if(id === 'input-ref') {
                        refInput.classList.remove('border-red-500', 'text-red-600');
                        refError.classList.add('hidden');
                    }
                });
            });

            btnVerify.addEventListener('click', () => {
                const val = refInput.value.trim().toUpperCase();
                if(val === 'NM045X') {
                    // Success
                    switchScreen('screen-1', 'screen-2');
                } else {
                    // Error
                    refInput.classList.add('border-red-500', 'text-red-600');
                    refError.classList.remove('hidden');
                    // Visual shake effect logic (simple class toggle or just css)
                    refInput.parentElement.animate([
                        { transform: 'translateX(0)' },
                        { transform: 'translateX(-4px)' },
                        { transform: 'translateX(4px)' },
                        { transform: 'translateX(0)' }
                    ], { duration: 300 });
                }
            });

            // --- SCREEN 2: RECORD ---
            const pinInput = document.getElementById('input-pin');
            const pinFeedback = document.getElementById('pin-feedback');
            const btnContinue = document.getElementById('btn-continue-verification');

            pinInput.addEventListener('input', (e) => {
                let val = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
                e.target.value = val;
                
                pinFeedback.innerHTML = '';
                pinInput.classList.remove('border-red-500', 'text-red-600', 'bg-red-50');
                pinInput.classList.add('border-gray-200', 'bg-gray-50', 'text-gray-900');

                if (val.length === 6) {
                    if (val === 'IMX7K9') {
                        btnContinue.disabled = false;
                        btnContinue.classList.add('bg-gray-900', 'text-white');
                        btnContinue.classList.remove('bg-gray-100', 'text-gray-400');
                    } else {
                        btnContinue.disabled = true;
                        // Error State
                        pinInput.classList.remove('border-gray-200', 'bg-gray-50', 'text-gray-900');
                        pinInput.classList.add('border-red-300', 'bg-red-50', 'text-red-600');
                        pinFeedback.innerHTML = '<span class="text-[10px] text-red-500 font-medium">Invalid Authorization PIN</span>';
                    }
                } else {
                    btnContinue.disabled = true;
                    btnContinue.classList.remove('bg-gray-900', 'text-white');
                    btnContinue.classList.add('bg-gray-100', 'text-gray-400');
                }
            });

            btnContinue.addEventListener('click', () => {
                switchScreen('screen-2', 'screen-3');
            });

            // --- SCREEN 3: BIOMETRIC ---
            const btnEnableCam = document.getElementById('btn-enable-camera');
            const cameraPrompt = document.getElementById('camera-prompt');
            const video = document.getElementById('webcam');
            const faceOverlay = document.getElementById('face-overlay');
            const alignmentFrame = document.getElementById('alignment-frame');
            const alignmentTextSpan = document.querySelector('#alignment-text span');
            const btnCapture = document.getElementById('btn-capture');
            const verifyingOverlay = document.getElementById('verifying-overlay');
            const verificationText = document.getElementById('verification-text');
            const canvas = document.getElementById('capture-canvas');

            let stream = null;

            btnEnableCam.addEventListener('click', async () => {
                try {
                    stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
                    video.srcObject = stream;
                    video.play();
                    
                    cameraPrompt.classList.add('hidden');
                    faceOverlay.classList.remove('hidden');

                    // Simulate "Finding Face" -> Alignment Logic
                    setTimeout(() => {
                        // After 2.5 seconds, simulated alignment
                        alignmentFrame.classList.remove('border-red-500');
                        alignmentFrame.classList.add('border-green-500', 'shadow-[0_0_20px_rgba(34,197,94,0.3)]');
                        
                        alignmentTextSpan.classList.remove('bg-red-50', 'text-red-600', 'border-red-100');
                        alignmentTextSpan.classList.add('bg-green-50', 'text-green-600', 'border-green-100');
                        alignmentTextSpan.textContent = 'Face Aligned';
                        
                        btnCapture.disabled = false;
                        btnCapture.classList.add('bg-gray-900', 'text-white');
                    }, 2500);

                } catch (err) {
                    alert('Camera access denied or unavailable. Please enable permissions.');
                }
            });

            btnCapture.addEventListener('click', () => {
                // 1. Capture Image (Freeze)
                const ctx = canvas.getContext('2d');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                ctx.translate(canvas.width, 0);
                ctx.scale(-1, 1);
                ctx.drawImage(video, 0, 0);
                
                video.classList.add('hidden');
                canvas.classList.remove('hidden');
                
                // Stop Stream
                stream.getTracks().forEach(track => track.stop());

                // 2. Show Verifying Overlay
                verifyingOverlay.classList.remove('hidden');
                faceOverlay.classList.add('hidden');
                btnCapture.classList.add('hidden');

                // 3. Sequential Text Logic (6-7 seconds)
                let steps = 0;
                const interval = setInterval(() => {
                    steps++;
                    // Simply creates a blinking effect on the text visually
                    verificationText.style.opacity = (verificationText.style.opacity === '0.5' ? '1' : '0.5');
                    
                    if(steps >= 6) { // approx 6-7 seconds
                        clearInterval(interval);
                        verificationText.style.opacity = '1';
                        verificationText.textContent = 'Verification Successful';
                        verificationText.classList.add('text-green-600');
                        document.querySelector('#verifying-overlay iconify-icon').icon = 'solar:check-circle-bold';
                        document.querySelector('#verifying-overlay iconify-icon').classList.remove('animate-spin', 'text-gray-900');
                        document.querySelector('#verifying-overlay iconify-icon').classList.add('text-green-600');
                        
                        setTimeout(() => {
                            switchScreen('screen-3', 'screen-4');
                            document.getElementById('user-name-display').textContent = nameInput.value || "User";
                        }, 1000);
                    }
                }, 1000);
            });

            // --- SCREEN 4: FINAL STATUS ---
            const btnGetCode = document.getElementById('btn-get-code');
            const btnText = document.getElementById('btn-text');
            const btnLoader = document.getElementById('btn-loader');
            const btnLoaderText = document.getElementById('btn-loader-text');
            const codeContainer = document.getElementById('code-container');
            const actionWrapper = document.getElementById('action-wrapper');

            btnGetCode.addEventListener('click', () => {
                // Loading State
                btnText.classList.add('hidden');
                btnLoader.classList.remove('hidden');
                btnGetCode.disabled = true;

                // 9 Seconds sequence
                const messages = [
                    "Connecting to clearance system...",
                    "Validating release eligibility...", 
                    "Preparing release credentials..."
                ];

                let msgIndex = 0;
                
                // Initial message
                btnLoaderText.textContent = messages[0];

                const loaderInterval = setInterval(() => {
                    msgIndex++;
                    if(msgIndex < messages.length) {
                        btnLoaderText.textContent = messages[msgIndex];
                    } else {
                        clearInterval(loaderInterval);
                        // Finish
                        actionWrapper.classList.add('hidden');
                        codeContainer.classList.remove('hidden');
                        codeContainer.classList.add('flex', 'flex-col'); // Ensures display
                    }
                }, 3000); // 3 steps * 3000ms = 9 seconds
            });

        });
    
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
      

<main className="w-full max-w-sm relative">

<header className="text-center mb-8 space-y-2 transition-opacity duration-500" id="global-header">
<div className="inline-flex items-center justify-center w-10 h-10 mb-2 rounded-xl bg-white border border-gray-200 shadow-sm text-gray-900">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h1 className="text-sm font-semibold tracking-widest text-gray-900">NMEX</h1>
<p className="text-xs text-gray-500 tracking-wide uppercase">Official Clearance Portal</p>
</header>

<section className="w-full transition-all duration-500 ease-in-out transform translate-y-0 opacity-100" id="screen-1">
<div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
<div className="p-6 pb-4">
<h2 className="text-xl font-medium tracking-tight text-gray-900 mb-1">Identity Verification</h2>
<p className="text-sm text-gray-500 leading-relaxed">Enter your details to access the associated clearance record.</p>
</div>
<div className="px-6 pb-6 space-y-4">

<div className="space-y-1">
<label className="text-xs font-medium text-gray-700 ml-1">Full Name</label>
<input className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-colors placeholder-gray-400 bg-gray-50/50" id="input-name" placeholder="e.g. Alex Mercer" type="text"/>
</div>

<div className="space-y-1">
<label className="text-xs font-medium text-gray-700 ml-1">Email Address</label>
<input className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-colors placeholder-gray-400 bg-gray-50/50" id="input-email" placeholder="name@company.com" type="email"/>
</div>

<div className="space-y-1">
<label className="text-xs font-medium text-gray-700 ml-1">Phone Number</label>
<input className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-colors placeholder-gray-400 bg-gray-50/50" id="input-phone" placeholder="+1 (555) 000-0000" type="tel"/>
</div>

<div className="space-y-1">
<label className="text-xs font-medium text-gray-700 ml-1">Reference ID</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-3 text-gray-400 pointer-events-none" icon="solar:key-linear" width="16"></iconify-icon>
<input className="w-full pl-9 pr-3 py-2.5 text-sm font-mono border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-colors placeholder-gray-400 bg-gray-50/50 uppercase tracking-wide" id="input-ref" placeholder="NMXXXX" type="text"/>
</div>
<p className="hidden text-xs text-red-600 mt-1 ml-1 flex items-center gap-1" id="ref-error">
<iconify-icon icon="solar:danger-circle-linear"></iconify-icon> Invalid Reference ID
                        </p>
</div>

<button className="w-full mt-2 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group" disabled="" id="btn-verify-access">
                        Verify Access
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-center gap-2">
<iconify-icon className="text-gray-400 text-xs" icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon>
<span className="text-xs text-gray-400 font-medium tracking-tight">Secure Access Session</span>
</div>
</div>
</section>

<section className="hidden w-full transition-all duration-500 ease-in-out" id="screen-2">
<div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden relative">

<div className="absolute top-6 right-6">
<span className="inline-flex items-center px-2 py-1 rounded-md bg-green-50 border border-green-100 text-[10px] font-semibold tracking-wide text-green-700 uppercase">
                        Record Matched
                    </span>
</div>
<div className="p-6 border-b border-gray-100">
<div className="mb-6">
<h2 className="text-xl font-medium tracking-tight text-gray-900">Vehicle Clearance Record</h2>
<p className="text-xs text-gray-400 mt-1 uppercase tracking-wide">Ref: NM045X</p>
</div>

<div className="grid grid-cols-2 gap-y-4 gap-x-4 mb-2">
<div>
<p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-0.5">Make / Model</p>
<p className="text-sm font-medium text-gray-900">Chevrolet Silverado</p>
</div>
<div>
<p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-0.5">Year</p>
<p className="text-sm font-medium text-gray-900">2023</p>
</div>
<div>
<p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-0.5">Color</p>
<p className="text-sm font-medium text-gray-900">Red</p>
</div>
<div>
<p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-0.5">VIN</p>
<p className="text-sm font-mono text-gray-600 tracking-tight">3GCPYBEK0NG123456</p>
</div>
</div>
</div>

<div className="p-6 border-b border-gray-100 bg-gray-50/30">
<h3 className="text-xs font-semibold text-gray-900 mb-3 tracking-tight">Documentation History</h3>
<div className="space-y-2.5">
<div className="flex items-center justify-between group">
<span className="text-sm text-gray-600">VIS Record</span>
<div className="flex items-center gap-2">
<span className="text-xs text-gray-400">Processed</span>
<iconify-icon className="text-green-600 text-sm" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
<div className="flex items-center justify-between group">
<span className="text-sm text-gray-600">NMEX Card Record</span>
<div className="flex items-center gap-2">
<span className="text-xs text-gray-400">Approved</span>
<iconify-icon className="text-green-600 text-sm" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
<div className="flex items-center justify-between group">
<span className="text-sm text-gray-600">Authorization</span>
<div className="flex items-center gap-2">
<span className="text-xs text-gray-400">Paid</span>
<iconify-icon className="text-green-600 text-sm" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="p-6">
<div className="space-y-3">
<label className="text-xs font-medium text-gray-700 ml-1 block">Authorization PIN</label>
<input className="w-full text-center px-3 py-3 text-lg tracking-[0.5em] font-mono border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-colors uppercase bg-gray-50 placeholder-gray-300" id="input-pin" maxlength="6" placeholder="••••••" type="text"/>
<div className="h-5 flex justify-center items-center" id="pin-feedback">

</div>
<button className="w-full mt-2 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-all active:scale-[0.98] flex items-center justify-center gap-2" disabled="" id="btn-continue-verification">
                            Continue Verification
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="hidden w-full transition-all duration-500 ease-in-out" id="screen-3">
<div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
<div className="p-6 pb-2 text-center">
<h2 className="text-xl font-medium tracking-tight text-gray-900 mb-1">Biometric Confirmation</h2>
<p className="text-sm text-gray-500">This step confirms identity before final clearance review.</p>
</div>
<div className="p-4 flex flex-col items-center">

<div className="relative w-full aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden mb-6 border border-gray-200">

<video className="absolute inset-0 w-full h-full object-cover transform scale-x-[-1]" id="webcam" muted="" playsinline=""></video>
<canvas className="absolute inset-0 w-full h-full object-cover transform scale-x-[-1] hidden" id="capture-canvas"></canvas>

<div className="absolute inset-0 bg-gray-50 flex flex-col items-center justify-center p-6 text-center z-20" id="camera-prompt">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-3 text-gray-900">
<iconify-icon icon="solar:camera-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-gray-900 mb-1">Camera Access Required</h3>
<p className="text-xs text-gray-500 mb-4">Please allow camera access to verify your identity.</p>
<button className="px-4 py-2 bg-white border border-gray-200 text-gray-900 text-xs font-medium rounded-lg hover:bg-gray-50 transition-colors" id="btn-enable-camera">
                                Enable Camera
                            </button>
</div>

<div className="absolute inset-0 z-10 hidden flex items-center justify-center" id="face-overlay">

<div className="relative w-48 h-64">

<div className="absolute inset-0 border-2 border-red-500 rounded-[50%] transition-colors duration-500 shadow-[0_0_0_9999px_rgba(255,255,255,0.85)]" id="alignment-frame"></div>

<div className="hidden absolute top-0 left-0 right-0 h-1 bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)] animate-scan" id="scan-line"></div>
</div>

<div className="absolute bottom-6 left-0 right-0 text-center" id="alignment-text">
<span className="inline-block px-3 py-1 bg-red-50 text-red-600 text-[10px] font-semibold tracking-wide uppercase rounded-full border border-red-100 transition-all duration-300">
                                    Align Face
                                </span>
</div>
</div>

<div className="absolute inset-0 bg-white/10 backdrop-blur-sm z-30 hidden flex flex-col items-center justify-center" id="verifying-overlay">
<div className="bg-white px-4 py-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3">
<iconify-icon className="animate-spin text-gray-900 text-lg" icon="solar:refresh-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-gray-900" id="verification-text">Verifying...</span>
</div>
</div>
</div>

<button className="w-full py-3 bg-gray-900 text-white text-sm font-medium rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-800 transition-all active:scale-[0.98] flex items-center justify-center gap-2" disabled="" id="btn-capture">
<iconify-icon icon="solar:camera-linear"></iconify-icon>
                        Capture &amp; Verify
                    </button>
</div>
</div>
</section>

<section className="hidden w-full transition-all duration-500 ease-in-out" id="screen-4">
<div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden relative">
<div className="p-8 pb-6 text-center">
<div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-100">
<iconify-icon icon="solar:verified-check-linear" width="32"></iconify-icon>
</div>
<h2 className="text-xl font-medium tracking-tight text-gray-900 mb-1">Verification Complete</h2>
<p className="text-sm text-gray-500">Hello, <span className="font-semibold text-gray-900" id="user-name-display">User</span></p>
<p className="text-xs text-gray-400 mt-2">Your clearance review has been successfully completed.</p>
</div>
<div className="mx-6 p-4 bg-gray-50 rounded-xl border border-gray-100 mb-6">
<div className="flex items-start justify-between">
<div>
<p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Vehicle</p>
<p className="text-sm font-medium text-gray-900">Chevrolet Silverado</p>
</div>
<div className="text-right">
<p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Clearance Status</p>
<p className="text-sm font-medium text-green-600">Approved for Release</p>
</div>
</div>
</div>
<div className="p-6 pt-0">

<div className="hidden mb-4 animate-fade-in" id="code-container">
<div className="text-center p-4 bg-gray-900 rounded-xl mb-3 shadow-lg relative overflow-hidden group">
<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[shine_3s_infinite]"></div>
<p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Release Code</p>
<p className="text-2xl font-mono font-bold text-white tracking-[0.2em]">7X-99-RP</p>
</div>
<p className="text-xs text-center text-gray-500 leading-relaxed px-4">
                            Provide this release code to your representing agent to finalize and activate the vehicle release process.
                        </p>
</div>

<div id="action-wrapper">
<button className="w-full py-3.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-all active:scale-[0.98] flex items-center justify-center gap-2 relative overflow-hidden" id="btn-get-code">
<span id="btn-text">Get Release Code</span>
<div className="hidden flex items-center gap-2" id="btn-loader">
<iconify-icon className="animate-spin" icon="solar:ring-resize-linear"></iconify-icon>
<span id="btn-loader-text">Connecting...</span>
</div>
</button>
<p className="text-center text-[10px] text-gray-400 mt-3" id="fee-text">Release processing fee: $1,000</p>
</div>
</div>
</div>
</section>
</main>

<style>
        @keyframes scan {
            0% { top: 0; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
            animation: scan 2s linear infinite;
        }
        @keyframes shine {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
    </style>



    </>
  );
}
