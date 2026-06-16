import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
nmex: {
navy: '#1A2433',
charcoal: '#2E3135',
success: '#28A745',
border: '#E0E0E0',
}
},
fontFamily: {
sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
},
animation: {
'scan-line': 'scan 2s linear infinite',
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
scan: {
'0%': { transform: 'translateY(-100%)' },
'100%': { transform: 'translateY(100%)' }
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // State
        let currentStep = 1;
        let verificationImage = null;
        let stream = null;
        let timerInterval = null;
        const TIMER_DURATION = 60; // seconds

        // Navigation
        function goToStep(step) {
            // Validation Logic
            if (step === 4 && !verificationImage) {
                alert("Verification image is required.");
                goToStep(3);
                return;
            }

            // Hide current
            document.getElementById(`step-${currentStep}`).classList.remove('active-step');
            document.getElementById(`step-${currentStep}`).classList.add('hidden-step');
            
            // Update State
            currentStep = step;

            // Show new
            const nextSection = document.getElementById(`step-${currentStep}`);
            nextSection.classList.remove('hidden-step');
            
            // Small delay to allow display:block to apply before opacity transition
            setTimeout(() => {
                nextSection.classList.add('active-step');
            }, 10);

            // Step specific logic
            if (step === 3) initCamera();
            if (step === 4) startTimer();
        }

        // --- STEP 3: CAMERA LOGIC ---

        async function initCamera() {
            const video = document.getElementById('camera-stream');
            const btnContinue = document.getElementById('btn-continue-scan');
            
            // Reset state
            btnContinue.disabled = true;
            verificationImage = null;

            try {
                // Request rear camera
                stream = await navigator.mediaDevices.getUserMedia({ 
                    video: { 
                        facingMode: "environment",
                        width: { ideal: 1280 },
                        height: { ideal: 720 } 
                    } 
                });
                video.srcObject = stream;
            } catch (err) {
                console.error("Camera access error:", err);
                alert("Camera access is required for verification. Please enable permissions.");
            }
        }

        function captureImage() {
            const video = document.getElementById('camera-stream');
            const canvas = document.getElementById('camera-canvas');
            const capturedImg = document.getElementById('captured-image');
            const btnContinue = document.getElementById('btn-continue-scan');
            const btnCapture = document.getElementById('btn-capture');
            const btnRetake = document.getElementById('btn-retake');

            if (!stream) return;

            // Set canvas dimensions matches video
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            // Draw to canvas
            const ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Convert to data URL
            verificationImage = canvas.toDataURL('image/png');

            // Show captured image in UI
            capturedImg.src = verificationImage;
            capturedImg.classList.remove('hidden');

            // UI Updates
            btnCapture.classList.add('hidden');
            btnRetake.classList.remove('hidden');
            btnContinue.disabled = false;
        }

        function resetCamera() {
            const capturedImg = document.getElementById('captured-image');
            const btnCapture = document.getElementById('btn-capture');
            const btnRetake = document.getElementById('btn-retake');
            const btnContinue = document.getElementById('btn-continue-scan');

            verificationImage = null;
            capturedImg.classList.add('hidden');
            capturedImg.src = "";
            
            btnCapture.classList.remove('hidden');
            btnRetake.classList.add('hidden');
            btnContinue.disabled = true;
        }

        function processScan() {
            if (!verificationImage) {
                alert("Please capture an image first.");
                return;
            }

            const btnContinue = document.getElementById('btn-continue-scan');
            const btnRetake = document.getElementById('btn-retake');
            const scanBeam = document.getElementById('scan-beam');
            const scanStatus = document.getElementById('scan-status');

            // Lock UI
            btnContinue.disabled = true;
            btnContinue.innerHTML = `<iconify-icon icon="solar:spinner-linear" class="animate-spin"></iconify-icon> Processing...`;
            btnRetake.classList.add('hidden');

            // Start Animation
            scanBeam.classList.remove('hidden');
            scanStatus.classList.remove('hidden');

            // 6 Seconds delay
            setTimeout(() => {
                // Stop camera stream to save battery/resources
                if (stream) {
                    stream.getTracks().forEach(track => track.stop());
                }
                
                // Navigate
                goToStep(4);
            }, 6000);
        }

        // --- STEP 4: TIMER & RESULTS ---

        function startTimer() {
            let timeLeft = TIMER_DURATION;
            const display = document.getElementById('timer-display');
            const bar = document.getElementById('timer-bar');
            const countdownContainer = document.getElementById('countdown-container');
            const finalData = document.getElementById('final-data');

            // Reset UI just in case
            countdownContainer.classList.remove('hidden');
            finalData.classList.add('hidden');

            timerInterval = setInterval(() => {
                timeLeft--;
                
                // Update text
                const minutes = Math.floor(timeLeft / 60);
                const seconds = timeLeft % 60;
                display.innerText = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

                // Update bar
                const percentage = (timeLeft / TIMER_DURATION) * 100;
                bar.style.transform = `scaleX(${percentage / 100})`;

                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    revealResults();
                }
            }, 1000); // Real-time ticking
        }

        function revealResults() {
            const countdownContainer = document.getElementById('countdown-container');
            const finalData = document.getElementById('final-data');

            // Smooth transition
            countdownContainer.style.opacity = '0';
            setTimeout(() => {
                countdownContainer.classList.add('hidden');
                finalData.classList.remove('hidden');
            }, 300);
        }

        function copyNodeID() {
            navigator.clipboard.writeText("RNX-84721-A66-204").then(() => {
                alert("Node ID copied to clipboard");
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="w-full h-full sm:h-auto sm:max-w-md bg-white sm:rounded-2xl sm:shadow-xl sm:border border-nmex-border overflow-y-auto relative flex flex-col">

<header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-nmex-border px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-nmex-navy rounded flex items-center justify-center text-white text-xs font-bold tracking-tighter">
                    NM
                </div>
<div>
<h1 className="text-sm font-bold text-nmex-navy tracking-tight uppercase leading-none">NMEX</h1>
<p className="text-[0.6rem] text-gray-500 font-medium tracking-wide uppercase mt-0.5">Global Processing &amp; Clearance</p>
</div>
</div>
</header>

<div className="flex-1 p-6 relative min-h-[500px]">

<section className="active-step step-transition" id="step-1">
<div className="space-y-6">
<div>
<h2 className="text-lg font-semibold text-nmex-navy tracking-tight mb-2">Verification Access Portal</h2>
<p className="text-sm text-gray-600 leading-relaxed">
                            During automated registry synchronization, your profile requires verification. Please confirm to continue.
                        </p>
</div>

<div className="border border-nmex-border rounded-xl p-5 shadow-sm bg-white">
<div className="flex items-center gap-3 mb-4 border-b border-nmex-border pb-3">
<div className="w-10 h-10 rounded-full bg-nmex-navy/5 flex items-center justify-center text-nmex-navy">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Identity Profile</p>
<p className="text-sm font-semibold text-nmex-navy">Sharday Charley SW</p>
</div>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center">
<span className="text-xs text-gray-500">Reference ID</span>
<span className="text-xs font-mono text-nmex-navy bg-gray-100 px-2 py-0.5 rounded">MMX-REG-8829</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-gray-500">Case Status</span>
<span className="text-xs font-medium text-orange-600 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                    Pending Verification
                                </span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-gray-500">Auth Stage</span>
<span className="text-xs font-medium text-gray-600">On Hold</span>
</div>
</div>
</div>
<button className="w-full bg-nmex-navy text-white font-medium text-sm py-3.5 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-nmex-navy/20" onclick="goToStep(2)">
                        Confirm &amp; Continue
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</section>

<section className="hidden-step step-transition" id="step-2">
<div className="space-y-5">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-nmex-navy" icon="solar:document-text-linear" width="20"></iconify-icon>
<h2 className="text-sm font-semibold text-nmex-navy tracking-tight uppercase">Record Review</h2>
</div>

<div className="border border-nmex-border rounded-xl p-4 shadow-sm bg-white relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-nmex-navy"></div>
<div className="flex justify-between items-start mb-3">
<h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Client Information</h3>
<iconify-icon className="text-gray-300" icon="solar:user-id-linear" width="18"></iconify-icon>
</div>
<div className="space-y-2 text-sm">
<div className="grid grid-cols-3 gap-2">
<span className="text-gray-500 text-xs">Name</span>
<span className="col-span-2 font-medium text-nmex-navy text-xs">Sharday Charley SW</span>
</div>
<div className="grid grid-cols-3 gap-2">
<span className="text-gray-500 text-xs">Location</span>
<span className="col-span-2 font-medium text-nmex-navy text-xs">Albuquerque, NM 87121</span>
</div>
<div className="grid grid-cols-3 gap-2">
<span className="text-gray-500 text-xs">Email</span>
<span className="col-span-2 font-medium text-nmex-navy text-xs truncate">shardaycharley.sc@gmail.com</span>
</div>
<div className="grid grid-cols-3 gap-2">
<span className="text-gray-500 text-xs">Phone</span>
<span className="col-span-2 font-medium text-nmex-navy text-xs">505-450-6156</span>
</div>
<div className="grid grid-cols-3 gap-2 border-t border-dashed border-gray-200 pt-2 mt-2">
<span className="text-gray-500 text-xs">Client ID</span>
<span className="col-span-2 font-mono text-nmex-navy text-xs">MMX-REG-8829</span>
</div>
</div>
</div>

<div className="border border-nmex-border rounded-xl p-4 shadow-sm bg-white relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-gray-400"></div>
<div className="flex justify-between items-start mb-3">
<h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Vehicle Information</h3>
<iconify-icon className="text-gray-300" icon="solar:wheel-angle-linear" width="18"></iconify-icon>
</div>
<div className="space-y-2 text-sm">
<div className="flex justify-between">
<span className="text-gray-500 text-xs">Make/Model</span>
<span className="font-medium text-nmex-navy text-xs">Chevrolet Silverado 1500 RST</span>
</div>
<div className="flex justify-between">
<span className="text-gray-500 text-xs">Year</span>
<span className="font-medium text-nmex-navy text-xs">2022</span>
</div>
<div className="flex justify-between">
<span className="text-gray-500 text-xs">VIN</span>
<span className="font-mono text-nmex-navy text-xs">3GCPYBEK0NG123456</span>
</div>
<div className="flex justify-between border-t border-dashed border-gray-200 pt-2 mt-2">
<span className="text-gray-500 text-xs">Registered Sender</span>
<span className="font-medium text-nmex-navy text-xs">Neutral Processing Unit</span>
</div>
</div>
</div>

<div className="bg-gray-100 rounded-lg p-3 border border-gray-200 flex gap-3">
<iconify-icon className="text-gray-500 shrink-0 mt-0.5" icon="solar:info-circle-linear" width="16"></iconify-icon>
<p className="text-xs text-gray-600 leading-snug">
                            By continuing, you acknowledge this record belongs to you and you are initiating verification.
                        </p>
</div>
<button className="w-full bg-nmex-navy text-white font-medium text-sm py-3.5 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-nmex-navy/20" onclick="goToStep(3)">
                        Proceed to Scan
                    </button>
</div>
</section>

<section className="hidden-step step-transition h-full flex flex-col" id="step-3">
<div className="flex flex-col h-full">
<div className="text-center mb-4">
<h2 className="text-sm font-semibold text-nmex-navy uppercase tracking-tight">Identity Capture</h2>
<p className="text-xs text-gray-500 mt-1">Scan physical ID for verification</p>
</div>

<div className="relative w-full aspect-[3/4] bg-black rounded-xl overflow-hidden shadow-inner border border-gray-200 mb-4 group">

<video autoplay="" className="w-full h-full object-cover" id="camera-stream" playsinline=""></video>

<img className="absolute inset-0 w-full h-full object-cover hidden" id="captured-image"/>

<div className="absolute inset-0 pointer-events-none flex items-center justify-center" id="camera-guide">

<div className="absolute inset-0 camera-overlay"></div>

<div className="relative w-64 h-40 border-2 border-white/80 rounded-lg shadow-[0_0_0_9999px_rgba(26,36,51,0.5)] z-10 overflow-hidden">

<div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-nmex-success -mt-[2px] -ml-[2px]"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-nmex-success -mt-[2px] -mr-[2px]"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-nmex-success -mb-[2px] -ml-[2px]"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-nmex-success -mb-[2px] -mr-[2px]"></div>

<div className="hidden absolute top-0 left-0 w-full h-1 bg-nmex-success/80 shadow-[0_0_15px_rgba(40,167,69,0.8)] animate-scan-line" id="scan-beam"></div>
</div>
</div>

<div className="absolute bottom-6 left-0 w-full text-center z-20 hidden" id="scan-status">
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 text-white text-xs font-medium backdrop-blur-md">
<iconify-icon className="animate-spin" icon="solar:refresh-circle-linear"></iconify-icon>
                                Validating registry node...
                            </span>
</div>
</div>

<canvas className="hidden" id="camera-canvas"></canvas>

<div className="mt-auto space-y-3">

<button className="w-full border border-nmex-navy/20 bg-gray-50 text-nmex-navy font-medium text-sm py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2" id="btn-capture" onclick="captureImage()">
<iconify-icon icon="solar:camera-linear" width="18"></iconify-icon>
                            Capture ID
                        </button>

<button className="hidden w-full text-xs text-gray-500 underline py-2" id="btn-retake" onclick="resetCamera()">
                            Retake Photo
                        </button>

<button className="w-full bg-nmex-navy disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed text-white font-medium text-sm py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-nmex-navy/20 disabled:shadow-none" disabled="" id="btn-continue-scan" onclick="processScan()">
                            Continue
                        </button>
</div>
</div>
</section>

<section className="hidden-step step-transition" id="step-4">
<div className="flex flex-col items-center justify-center pt-4 pb-8 text-center space-y-6">

<div className="relative">
<div className="w-20 h-20 bg-nmex-success/10 rounded-full flex items-center justify-center animate-pulse-slow">
<div className="w-14 h-14 bg-nmex-success rounded-full flex items-center justify-center shadow-lg shadow-nmex-success/40">
<iconify-icon className="text-white" icon="solar:shield-check-linear" width="32"></iconify-icon>
</div>
</div>
<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-2 py-0.5 rounded border border-nmex-success/30">
<span className="text-[0.6rem] font-bold text-nmex-success uppercase tracking-widest">Passed</span>
</div>
</div>
<div className="space-y-2">
<h2 className="text-xl font-bold text-nmex-navy tracking-tight">Verification Complete</h2>
<p className="text-sm text-gray-600 max-w-[280px] mx-auto leading-relaxed">
                            All primary profile information validated.<br/>Authorization activation in progress.
                        </p>
</div>

<div className="w-full" id="countdown-container">
<div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl border border-gray-200">
<span className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Releasing Data In</span>
<div className="text-4xl font-mono font-bold text-nmex-navy tracking-tight" id="timer-display">01:00</div>
<div className="w-full bg-gray-200 h-1 mt-4 rounded-full overflow-hidden">
<div className="bg-nmex-navy h-full w-full origin-left transition-transform duration-1000 ease-linear" id="timer-bar"></div>
</div>
</div>
</div>

<div className="hidden w-full space-y-5 animate-[scan_0.5s_ease-out]" id="final-data">

<div className="bg-nmex-navy text-white rounded-xl p-5 shadow-xl relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10 text-left space-y-4">
<div>
<p className="text-[0.65rem] text-gray-400 uppercase tracking-wider mb-1">Registry Node ID</p>
<div className="flex items-center justify-between">
<p className="text-xl font-mono font-bold tracking-tight text-white select-all">RNX-84721-A66-204</p>
<button className="text-gray-400 hover:text-white transition-colors" onclick="copyNodeID()">
<iconify-icon icon="solar:copy-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="h-px bg-white/10 w-full"></div>
<div className="flex justify-between items-end">
<div>
<p className="text-[0.65rem] text-gray-400 uppercase tracking-wider mb-0.5">Auth Stage</p>
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-nmex-success/20 text-nmex-success text-xs font-bold border border-nmex-success/30">
<span className="w-1.5 h-1.5 rounded-full bg-nmex-success animate-pulse"></span>
                                            ACTIVE
                                        </span>
</div>
<div className="text-right">
<p className="text-[0.65rem] text-gray-400 uppercase tracking-wider mb-0.5">Linked Amount</p>
<p className="text-xl font-bold text-white">$1,000</p>
</div>
</div>
</div>
</div>

<div className="bg-white border border-nmex-border rounded-lg p-4 text-left space-y-2 text-sm">
<div className="flex justify-between items-center text-xs">
<span className="text-gray-500">Node Registration Code</span>
<span className="font-mono text-nmex-navy">$500.00</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-gray-500">Biometric Validation Binding</span>
<span className="font-mono text-nmex-navy">$500.00</span>
</div>
<div className="h-px bg-gray-100 my-2"></div>
<div className="flex justify-between items-center font-semibold text-xs">
<span className="text-nmex-navy">Total Value</span>
<span className="font-mono text-nmex-navy">$1,000.00</span>
</div>
</div>
<div className="bg-blue-50 border border-blue-100 rounded p-3 text-left">
<p className="text-xs text-blue-800 leading-tight">
<strong>Action Required:</strong> Present this authorization code to the assigned processing administrator to finalize the release procedure.
                            </p>
</div>
<div className="grid grid-cols-1 gap-3">
<button className="w-full bg-white border border-nmex-border text-nmex-navy font-medium text-sm py-3 rounded-lg hover:bg-gray-50 transition-colors" onclick="copyNodeID()">
                                Copy Node ID
                            </button>
<button className="w-full bg-white border border-nmex-border text-nmex-navy font-medium text-sm py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:download-linear"></iconify-icon>
                                Download Authorization Slip
                            </button>
<button className="w-full text-xs text-gray-400 py-2 hover:text-gray-600" onclick="window.close()">
                                Close Portal
                            </button>
</div>
</div>
</div>
</section>
</div>
</main>



    </>
  );
}
