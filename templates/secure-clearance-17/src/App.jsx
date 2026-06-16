import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- STATE MANAGEMENT ---
        const state = {
            name: '',
            isValidRef: false,
            isValidPin: false,
            cameraActive: false,
            aligned: false
        };

        const VALID_REF = "NM045X";
        const VALID_PIN = "IMX7K9";

        // --- SCREEN 1 LOGIC ---
        const loginForm = document.getElementById('loginForm');
        const inputs = loginForm.querySelectorAll('input');
        const btnVerify = document.getElementById('btnVerify');
        const inputRef = document.getElementById('inputRef');
        const refError = document.getElementById('refError');

        function checkInputs() {
            let allFilled = true;
            inputs.forEach(input => {
                if(!input.value.trim()) allFilled = false;
            });
            btnVerify.disabled = !allFilled;
            btnVerify.classList.toggle('opacity-50', !allFilled);
            btnVerify.classList.toggle('cursor-not-allowed', !allFilled);
        }

        inputs.forEach(input => input.addEventListener('input', checkInputs));
        checkInputs(); // Init

        function handleLogin(e) {
            e.preventDefault();
            const refValue = inputRef.value.trim();
            state.name = document.getElementById('inputName').value;

            if (refValue === VALID_REF) {
                refError.classList.add('hidden');
                inputRef.classList.remove('border-rose-500', 'text-rose-600');
                transitionScreen('screen-1', 'screen-2');
            } else {
                // Visual rejection
                refError.classList.remove('hidden');
                inputRef.classList.add('border-rose-500', 'text-rose-600');
                inputRef.classList.remove('focus:ring-slate-900', 'focus:border-slate-900');
                inputRef.classList.add('focus:ring-rose-200', 'focus:border-rose-500');
            }
        }

        // --- SCREEN 2 LOGIC ---
        const inputPin = document.getElementById('inputPin');
        const pinError = document.getElementById('pinError');
        const btnPin = document.getElementById('btnPin');

        function checkPin() {
            const val = inputPin.value.trim();
            
            if (val === VALID_PIN) {
                pinError.classList.add('hidden');
                inputPin.classList.remove('border-rose-500', 'text-rose-600');
                inputPin.classList.add('border-emerald-500', 'text-emerald-600');
                
                btnPin.disabled = false;
                btnPin.classList.remove('opacity-50', 'cursor-not-allowed');
            } else {
                btnPin.disabled = true;
                btnPin.classList.add('opacity-50', 'cursor-not-allowed');
                inputPin.classList.remove('border-emerald-500', 'text-emerald-600');
                
                if(val.length === 6) {
                    pinError.classList.remove('hidden');
                    inputPin.classList.add('border-rose-500', 'text-rose-600');
                } else {
                    pinError.classList.add('hidden');
                    inputPin.classList.remove('border-rose-500', 'text-rose-600');
                }
            }
        }

        function goToScreen3() {
            transitionScreen('screen-2', 'screen-3');
        }

        // --- SCREEN 3: CAMERA LOGIC ---
        const video = document.getElementById('webcam');
        const canvas = document.getElementById('captureCanvas');
        const cameraOverlay = document.getElementById('cameraOverlay');
        const faceBorder = document.getElementById('faceBorder');
        const cameraStatus = document.getElementById('cameraStatus');
        const captureControls = document.getElementById('captureControls');

        function startCamera() {
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({ video: true })
                    .then(function (stream) {
                        video.srcObject = stream;
                        video.classList.remove('opacity-0');
                        document.getElementById('cameraPrompt').classList.add('hidden');
                        cameraOverlay.classList.remove('hidden');
                        
                        // Simulate Face Detection Logic
                        startFaceSimulation();
                    })
                    .catch(function (error) {
                        alert("Camera access denied or unavailable. Please enable permissions.");
                    });
            }
        }

        function startFaceSimulation() {
            // Initially Red (Misaligned)
            faceBorder.classList.add('border-rose-500');
            cameraStatus.textContent = "Align face within frame";

            // Simulate finding face after 2.5 seconds
            setTimeout(() => {
                state.aligned = true;
                faceBorder.classList.remove('border-rose-500');
                faceBorder.classList.add('border-emerald-500', 'shadow-[0_0_20px_rgba(16,185,129,0.4)]');
                cameraStatus.textContent = "Perfect. Ready to capture.";
                cameraStatus.classList.remove('text-slate-900');
                cameraStatus.classList.add('text-emerald-700', 'bg-emerald-50/90');
                captureControls.classList.remove('hidden');
            }, 2500);
        }

        function captureFace() {
            if(!state.aligned) return;

            // 1. Capture Image
            const context = canvas.getContext('2d');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            
            // 2. Freeze UI
            video.pause();
            canvas.classList.remove('hidden'); // Show still image
            captureControls.classList.add('hidden'); // Hide button
            document.getElementById('faceFrameBg').style.opacity = '0'; // Hide white overlay for better view
            faceBorder.classList.add('hidden'); // Hide border
            
            // 3. Verification Sequence
            cameraStatus.textContent = "Verifying...";
            
            let verifyCount = 0;
            const verifyInterval = setInterval(() => {
                verifyCount++;
                if(verifyCount === 1) cameraStatus.textContent = "Verifying...";
                if(verifyCount === 2) cameraStatus.textContent = "Verifying...";
                if(verifyCount === 3) cameraStatus.textContent = "Verifying...";
                
                // End after approx 6-7 seconds (3 cycles of 2s + initial)
                if(verifyCount >= 3) {
                    clearInterval(verifyInterval);
                    cameraStatus.textContent = "Verification Successful";
                    cameraStatus.classList.add('bg-emerald-500', 'text-white');
                    setTimeout(() => {
                        // Stop camera stream
                        const stream = video.srcObject;
                        const tracks = stream.getTracks();
                        tracks.forEach(track => track.stop());
                        
                        transitionScreen('screen-3', 'screen-4');
                    }, 1500);
                }
            }, 2000);
        }

        // --- SCREEN 4: FINAL STATUS ---
        function startReleaseProcess() {
            const btn = document.getElementById('btnRelease');
            const subtext = btn.nextElementSibling;
            const loader = document.getElementById('releaseLoader');
            const loadText = document.getElementById('loadingText');

            // Hide button
            btn.parentElement.classList.add('hidden');
            
            // Show loader
            loader.classList.remove('hidden');

            // Sequence text
            setTimeout(() => { loadText.textContent = "Validating release eligibility"; }, 3000);
            setTimeout(() => { loadText.textContent = "Preparing release credentials"; }, 6000);

            // Finish after 9s
            setTimeout(() => {
                loader.classList.add('hidden');
                document.getElementById('releaseCodeContainer').classList.remove('hidden');
            }, 9000);
        }

        // --- UTILS ---
        function transitionScreen(fromId, toId) {
            const fromEl = document.getElementById(fromId);
            const toEl = document.getElementById(toId);

            fromEl.classList.add('fade-exit-active'); // Add your CSS animation class if needed
            
            // Simple display toggle with fade simulation
            setTimeout(() => {
                fromEl.classList.add('hidden');
                toEl.classList.remove('hidden');
                
                // Setup specific screen data
                if(toId === 'screen-4') {
                    document.getElementById('displayUserName').textContent = state.name || "User";
                }
            }, 200);
        }

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="w-full max-w-md relative">

<section className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden relative z-10 transition-all duration-500" id="screen-1">
<div className="p-8">

<div className="text-center mb-8">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 border border-slate-100 mb-4 text-slate-900">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h1 className="text-sm font-semibold tracking-widest text-slate-500 mb-1">NMEX</h1>
<h2 className="text-xl font-semibold tracking-tight text-slate-900">OFFICIAL CLEARANCE PORTAL</h2>
<p className="text-xs text-slate-400 mt-1 font-medium">Concept Interface</p>
</div>

<div className="mb-6">
<h3 className="text-lg font-semibold tracking-tight mb-2">Identity Verification</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Enter your details to access the associated clearance record.</p>
<form className="space-y-4" id="loginForm" onsubmit="handleLogin(event)">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wide">Full Name</label>
<input className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all" id="inputName" placeholder="e.g. Alex Mercer" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wide">Email Address</label>
<input className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all" id="inputEmail" placeholder="name@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wide">Phone Number</label>
<input className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all" id="inputPhone" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wide">Reference ID</label>
<input className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all font-mono" id="inputRef" placeholder="NM000X" type="text"/>
<p className="hidden text-xs text-rose-600 mt-2 flex items-center gap-1" id="refError">
<iconify-icon icon="solar:danger-circle-linear"></iconify-icon> Access Denied: Invalid Reference ID
                            </p>
</div>
<button className="w-full mt-6 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm py-3 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" id="btnVerify" type="submit">
                            Verify Access <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>

<div className="border-t border-slate-100 pt-6 text-center">
<div className="inline-flex items-center gap-1.5 text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>
<span className="font-medium">Secure Access Session</span>
</div>
</div>
</div>
</section>

<section className="hidden bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden relative z-10" id="screen-2">
<div className="p-6 border-b border-slate-100 flex justify-between items-start">
<div>
<h4 className="text-xs font-semibold tracking-widest text-slate-500 mb-1">NMEX</h4>
<h2 className="text-lg font-semibold tracking-tight text-slate-900">Vehicle Clearance Record</h2>
</div>
<div className="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded text-xs font-semibold tracking-wide border border-emerald-100">
                    RECORD MATCHED
                </div>
</div>
<div className="p-6 space-y-8">

<div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
<div className="grid grid-cols-2 gap-y-4 gap-x-2">
<div>
<p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Make / Model</p>
<p className="text-sm font-medium text-slate-900">Chevrolet Silverado</p>
</div>
<div>
<p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Year</p>
<p className="text-sm font-medium text-slate-900">2023</p>
</div>
<div>
<p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Color</p>
<p className="text-sm font-medium text-slate-900">Red</p>
</div>
<div>
<p className="text-xs text-slate-400 uppercase tracking-wide mb-1">VIN</p>
<p className="text-sm font-medium text-slate-900 font-mono tracking-tight">3GCPYBEK0NG123456</p>
</div>
</div>
</div>

<div>
<h3 className="text-sm font-semibold text-slate-900 mb-3">Documentation History</h3>
<div className="space-y-3">
<div className="flex items-center justify-between text-sm py-1">
<span className="text-slate-600">VIS Record — Processed</span>
<iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between text-sm py-1 border-t border-slate-50 pt-3">
<span className="text-slate-600">NMEX Card Record — Approved</span>
<iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between text-sm py-1 border-t border-slate-50 pt-3">
<span className="text-slate-600">Authorization — Paid</span>
<iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
</div>

<div className="pt-2">
<label className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wide">Authorization PIN</label>
<div className="relative">
<input className="w-full px-3 py-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 tracking-widest placeholder-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all font-mono" id="inputPin" maxlength="6" oninput="checkPin()" placeholder="••••••" type="password"/>
<div className="absolute right-3 top-3 text-slate-400">
<iconify-icon icon="solar:key-minimalistic-linear"></iconify-icon>
</div>
</div>
<p className="hidden text-xs text-rose-600 mt-2 flex items-center gap-1" id="pinError">
                        Invalid Authorization PIN
                    </p>
<button className="w-full mt-6 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm py-3 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 opacity-50 cursor-not-allowed" disabled="" id="btnPin" onclick="goToScreen3()">
                        Continue Verification <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="hidden bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden relative z-10 flex flex-col h-[600px]" id="screen-3">
<div className="p-6 border-b border-slate-100 bg-white z-20">
<h2 className="text-lg font-semibold tracking-tight text-slate-900">Biometric Confirmation</h2>
<p className="text-sm text-slate-500 mt-1">This step confirms identity before final clearance review.</p>
</div>
<div className="flex-1 relative bg-slate-900 overflow-hidden flex flex-col items-center justify-center">

<video autoplay="" className="absolute inset-0 w-full h-full object-cover transform -scale-x-100 opacity-0 transition-opacity duration-500" id="webcam" muted="" playsinline=""></video>
<canvas className="absolute inset-0 w-full h-full object-cover transform -scale-x-100 hidden" id="captureCanvas"></canvas>

<div className="absolute z-30 text-center p-6 max-w-xs" id="cameraPrompt">
<div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
<iconify-icon icon="solar:camera-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Camera Access Required</h3>
<p className="text-slate-400 text-xs mb-6">We need to verify your identity against the documentation.</p>
<button className="px-6 py-2 bg-white text-slate-900 rounded-lg text-sm font-medium hover:bg-slate-100 transition" onclick="startCamera()">
                        Enable Camera
                    </button>
</div>

<div className="absolute inset-0 z-20 pointer-events-none hidden" id="cameraOverlay">

<div className="absolute inset-0 bg-white face-frame mix-blend-normal transition-colors duration-300" id="faceFrameBg"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-64 h-80 rounded-[50%] border-[3px] border-rose-500 transition-colors duration-500 relative" id="faceBorder">

<div className="absolute top-0 left-0 right-0 h-0.5 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)] hidden w-full animate-[scan_2s_ease-in-out_infinite]" id="scanLine"></div>
</div>
</div>

<div className="absolute bottom-10 left-0 right-0 text-center">
<p className="text-slate-900 font-medium text-sm bg-white/90 inline-block px-4 py-2 rounded-full shadow-sm backdrop-blur-sm" id="cameraStatus">
                            Align face within frame
                        </p>
</div>
</div>

<div className="absolute bottom-8 z-30 w-full flex justify-center hidden" id="captureControls">
<button className="w-16 h-16 rounded-full border-4 border-white bg-transparent flex items-center justify-center hover:bg-white/20 transition-all" onclick="captureFace()">
<div className="w-12 h-12 bg-emerald-500 rounded-full"></div>
</button>
</div>
</div>
</section>

<section className="hidden bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden relative z-10 transition-all duration-500" id="screen-4">
<div className="p-8 text-center">
<div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
<iconify-icon icon="solar:verified-check-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-1">Verification Complete</h2>
<p className="text-sm text-slate-500 mb-6">Hello, <span className="text-slate-900 font-medium" id="displayUserName">User</span></p>
<div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 mb-6">
<p className="text-emerald-800 text-sm font-medium mb-1">Your clearance review has been successfully completed.</p>
</div>

<div className="bg-white border border-slate-100 shadow-sm rounded-xl p-5 mb-8 text-left relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
<p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Vehicle</p>
<h3 className="text-base font-semibold text-slate-900 mb-3">Chevrolet Silverado</h3>
<div className="flex items-center gap-2">
<p className="text-xs text-slate-400 uppercase tracking-wide">Clearance Status:</p>
<span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">Approved for Release</span>
</div>
<p className="text-[10px] text-slate-300 mt-2 italic text-right">Concept display only</p>
</div>

<div id="actionContainer">
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm py-3.5 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2" id="btnRelease" onclick="startReleaseProcess()">
                        Get Release Code
                    </button>
<p className="text-xs text-slate-400 mt-3">Release processing fee: $1,000</p>
</div>

<div className="hidden py-4" id="releaseLoader">
<div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden mb-4">
<div className="h-full bg-slate-900 animate-[loading_9s_ease-out_forwards] w-0"></div>
</div>
<p className="text-sm font-medium text-slate-600 loader-dots" id="loadingText">Connecting to clearance system</p>
</div>

<div className="hidden mt-6 animate-[fadeIn_0.5s_ease-out]" id="releaseCodeContainer">
<div className="bg-slate-50 border border-slate-200 border-dashed rounded-lg p-6 mb-4">
<p className="text-xs text-slate-400 uppercase tracking-wide mb-2">Official Release Code</p>
<p className="text-3xl font-mono font-bold text-slate-900 tracking-widest selection:bg-emerald-100">RL-8842-X</p>
</div>
<p className="text-sm text-slate-500 leading-relaxed">
                        Provide this release code to your representing agent to finalize and activate the vehicle release process.
                    </p>
</div>
</div>
</section>
</main>

<style>
        @keyframes scan {
            0% { top: 10%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 90%; opacity: 0; }
        }
        @keyframes loading {
            0% { width: 0%; }
            20% { width: 10%; }
            50% { width: 40%; }
            80% { width: 70%; }
            100% { width: 100%; }
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(5px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>


    </>
  );
}
