import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // DOM Elements
        const steps = [1, 2, 3, 4].map(id => document.getElementById(`step-${id}`));
        const video = document.getElementById('camera-feed');
        
        // Navigation
        function nextStep(stepNumber) {
            steps.forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('fade-in');
            });
            const target = document.getElementById(`step-${stepNumber}`);
            target.classList.remove('hidden');
            target.classList.add('fade-in');
            window.scrollTo(0, 0);
        }

        // Camera Logic
        async function startCamera() {
            nextStep(3);
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ 
                    video: { facingMode: "environment" } 
                });
                video.srcObject = stream;
            } catch (err) {
                console.error("Camera error:", err);
                alert("Camera access is required for verification. Please enable permissions.");
                // Fallback for demo purposes if no camera
                video.poster = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxYTI0MzMiLz48L3N2Zz4=";
            }
        }

        // Capture & Simulate Scan
        function captureAndScan() {
            const btn = document.getElementById('capture-btn');
            const beam = document.getElementById('scan-beam');
            const overlay = document.getElementById('processing-overlay');
            const reticle = document.getElementById('scan-reticle');
            const terminal = document.getElementById('scan-terminal');

            // 1. UI updates for scanning
            btn.classList.add('hidden');
            beam.classList.remove('hidden'); // Show laser
            reticle.classList.add('pulse-slow'); // Pulse the box

            // 2. Simulate Delay then Show Loader
            setTimeout(() => {
                beam.classList.add('hidden');
                overlay.classList.remove('hidden'); // Show full loader
                overlay.classList.add('flex');
                
                // Simulate terminal text
                const logs = ["Initializing...", "Image Captured", "Parsing Geometry...", "Matching Registry...", "Validated."];
                let i = 0;
                const logInterval = setInterval(() => {
                    if (i < logs.length) {
                        terminal.innerText = `> ${logs[i]}`;
                        i++;
                    } else {
                        clearInterval(logInterval);
                    }
                }, 800);

            }, 2000); // 2s scanning laser

            // 3. Move to Final Step
            setTimeout(() => {
                // Stop camera
                if(video.srcObject) {
                    video.srcObject.getTracks().forEach(track => track.stop());
                }
                startCountdown();
            }, 6500); // Total wait time
        }

        // Countdown Logic
        function startCountdown() {
            nextStep(4);
            const timerDisplay = document.getElementById('timer');
            const progressBar = document.getElementById('progress-bar');
            const countdownCard = document.getElementById('countdown-card');
            const finalDetails = document.getElementById('final-details');
            
            let timeLeft = 60; // 60 seconds
            const totalTime = 60;
            
            const interval = setInterval(() => {
                timeLeft--;
                
                // Update text
                const minutes = Math.floor(timeLeft / 60);
                const seconds = timeLeft % 60;
                timerDisplay.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                
                // Update bar
                const percentage = (timeLeft / totalTime) * 100;
                progressBar.style.width = `${percentage}%`;

                if (timeLeft <= 0) {
                    clearInterval(interval);
                    // Transformation
                    countdownCard.classList.add('hidden');
                    finalDetails.classList.remove('hidden');
                    finalDetails.classList.add('fade-in');
                }
            }, 1000);
        }

        // Action: Copy
        function copyNodeID() {
            navigator.clipboard.writeText("RNX-84721-A66-204").then(() => {
                alert("Node ID copied to clipboard.");
            });
        }

        // Action: Download Slip (Canvas Simulation)
        function downloadSlip() {
            const canvas = document.getElementById('downloadCanvas');
            const ctx = canvas.getContext('2d');
            canvas.width = 400;
            canvas.height = 600;

            // Background
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, 400, 600);
            
            // Header
            ctx.fillStyle = "#1A2433";
            ctx.fillRect(0, 0, 400, 80);
            ctx.fillStyle = "#ffffff";
            ctx.font = "bold 24px Arial";
            ctx.fillText("NMEX AUTH", 20, 50);

            // Content
            ctx.fillStyle = "#333333";
            ctx.font = "16px Arial";
            ctx.fillText("Node ID: RNX-84721-A66-204", 20, 120);
            ctx.fillText("Status: ACTIVE", 20, 150);
            ctx.fillText("Ref: MMX-REG-8829", 20, 180);
            
            // Line
            ctx.beginPath();
            ctx.moveTo(20, 220);
            ctx.lineTo(380, 220);
            ctx.strokeStyle = "#E0E0E0";
            ctx.stroke();

            // Amounts
            ctx.fillText("Node Registration: $500.00", 20, 260);
            ctx.fillText("Biometric Validation: $500.00", 20, 290);
            
            ctx.fillStyle = "#28A745";
            ctx.font = "bold 20px Arial";
            ctx.fillText("Total: $1,000.00", 20, 340);

            // Footer
            ctx.fillStyle = "#999999";
            ctx.font = "12px Arial";
            ctx.fillText("Generated via NMEX Portal", 20, 560);

            // Download
            const link = document.createElement('a');
            link.download = 'NMEX-Auth-Slip.png';
            link.href = canvas.toDataURL();
            link.click();
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-[#1A2433] text-white sticky top-0 z-50 shadow-lg border-b border-[#2E3135]">
<div className="max-w-md mx-auto px-6 py-4 flex flex-col items-center text-center">
<div className="tracking-tighter font-semibold text-lg flex items-center gap-2">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
                NMEX
            </div>
<div className="text-[10px] uppercase tracking-widest text-gray-400 mt-1 font-medium">
                Global Processing &amp; Clearance Authority
            </div>
</div>
</header>

<main className="flex-grow flex flex-col items-center justify-start pt-6 px-4 pb-12 w-full max-w-md mx-auto">

<div className="w-full fade-in" id="step-1">
<div className="mb-6 text-center">
<h1 className="text-xl font-semibold text-[#1A2433] tracking-tight uppercase">Verification Access Portal</h1>
<p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    During automated registry synchronization, your profile requires verification. Please confirm to continue.
                </p>
</div>
<div className="bg-white border border-[#E0E0E0] rounded-xl shadow-sm p-5 mb-6 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-[#1A2433]"></div>
<div className="flex justify-between items-start mb-4">
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">Subject Name</span>
<span className="text-lg font-semibold text-[#1A2433]">Sharday Charley SW</span>
</div>
<iconify-icon className="text-gray-300" icon="solar:user-id-linear" width="24"></iconify-icon>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
<span className="text-gray-500">Reference ID</span>
<span className="font-mono text-[#1A2433]">MMX-REG-8829</span>
</div>
<div className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
<span className="text-gray-500">Case Status</span>
<span className="bg-yellow-100 text-yellow-800 text-[10px] px-2 py-0.5 rounded border border-yellow-200 uppercase font-semibold tracking-wide">Pending Verification</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-gray-500">Auth Stage</span>
<span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded border border-gray-200 uppercase font-semibold tracking-wide">On Hold</span>
</div>
</div>
</div>
<button className="w-full bg-[#1A2433] text-white py-4 rounded-lg font-medium shadow-md hover:bg-[#2E3135] transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wide" onclick="nextStep(2)">
<span>Confirm &amp; Continue</span>
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>

<div className="w-full hidden" id="step-2">
<div className="mb-4">
<button className="text-gray-400 hover:text-[#1A2433] text-xs flex items-center gap-1 mb-4 transition-colors" onclick="nextStep(1)">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back
                </button>
<h2 className="text-lg font-semibold text-[#1A2433] uppercase tracking-tight">Record Review</h2>
<p className="text-xs text-gray-500 mt-1">Validate the following registry data.</p>
</div>

<div className="bg-white border border-[#E0E0E0] rounded-xl shadow-sm p-5 mb-4">
<div className="flex items-center gap-2 mb-3 border-b border-gray-100 pb-2">
<iconify-icon className="text-[#1A2433]" icon="solar:user-circle-linear" width="18"></iconify-icon>
<h3 className="text-sm font-semibold text-[#1A2433] uppercase tracking-wide">Client Information</h3>
</div>
<div className="grid grid-cols-1 gap-3 text-sm">
<div className="flex flex-col">
<span className="text-[10px] text-gray-400 uppercase">Full Name</span>
<span className="font-medium">Sharday Charley SW</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-gray-400 uppercase">Location</span>
<span className="font-medium">Albuquerque, NM 87121</span>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="flex flex-col">
<span className="text-[10px] text-gray-400 uppercase">Client ID Ref</span>
<span className="font-mono text-xs">MMX-REG-8829</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-gray-400 uppercase">Phone</span>
<span className="font-mono text-xs">505-450-6156</span>
</div>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-gray-400 uppercase">Email</span>
<span className="font-medium">shardaycharley.sc@gmail.com</span>
</div>
</div>
</div>

<div className="bg-white border border-[#E0E0E0] rounded-xl shadow-sm p-5 mb-4">
<div className="flex items-center gap-2 mb-3 border-b border-gray-100 pb-2">
<iconify-icon className="text-[#1A2433]" icon="solar:wheel-angle-linear" width="18"></iconify-icon>
<h3 className="text-sm font-semibold text-[#1A2433] uppercase tracking-wide">Vehicle Information</h3>
</div>
<div className="grid grid-cols-2 gap-4 text-sm">
<div className="flex flex-col">
<span className="text-[10px] text-gray-400 uppercase">Make</span>
<span className="font-medium">Chevrolet</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-gray-400 uppercase">Model</span>
<span className="font-medium">Silverado 1500 RST</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-gray-400 uppercase">Year</span>
<span className="font-medium">2022</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-gray-400 uppercase">Reg Sender</span>
<span className="font-medium text-gray-400 italic">Restricted</span>
</div>
<div className="col-span-2 flex flex-col bg-gray-50 p-2 rounded border border-gray-100">
<span className="text-[10px] text-gray-400 uppercase">VIN</span>
<span className="font-mono text-xs tracking-wide">3GCPYBEK0NG123456</span>
</div>
</div>
</div>

<div className="bg-[#F8F9FA] border border-gray-200 rounded-lg p-4 mb-6 flex gap-3 items-start">
<iconify-icon className="text-gray-400 mt-0.5 flex-shrink-0" icon="solar:info-circle-linear" width="16"></iconify-icon>
<p className="text-xs text-gray-500 leading-snug">
                    By continuing, you acknowledge this record belongs to you and you are initiating verification.
                </p>
</div>
<button className="w-full bg-[#1A2433] text-white py-4 rounded-lg font-medium shadow-md hover:bg-[#2E3135] transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wide" onclick="startCamera()">
<iconify-icon icon="solar:camera-linear" width="18"></iconify-icon>
<span>Proceed to Scan</span>
</button>
</div>

<div className="w-full hidden h-full flex-col" id="step-3">
<div className="mb-4">
<h2 className="text-lg font-semibold text-[#1A2433] uppercase tracking-tight">Biometric Link</h2>
<p className="text-xs text-gray-500">Scan physical object for validation.</p>
</div>
<div className="relative w-full aspect-[3/4] bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800 mb-6 group">

<video autoplay="" className="w-full h-full object-cover opacity-80" id="camera-feed" muted="" playsinline=""></video>

<div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">

<div className="absolute inset-0 camera-overlay opacity-60"></div>

<div className="relative w-64 h-40 border border-white/30 rounded-lg" id="scan-reticle">

<div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-green-400 -ml-1 -mt-1"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-green-400 -mr-1 -mt-1"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-green-400 -ml-1 -mb-1"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-green-400 -mr-1 -mb-1"></div>

<div className="hidden scan-line" id="scan-beam"></div>
<div className="absolute -bottom-8 w-full text-center">
<span className="text-white/80 text-[10px] uppercase tracking-widest bg-black/50 px-2 py-1 rounded">Align Object</span>
</div>
</div>
</div>

<div className="absolute inset-0 bg-[#1A2433]/90 z-20 hidden flex-col items-center justify-center text-center p-6" id="processing-overlay">
<div className="w-16 h-16 border-4 border-[#2E3135] border-t-[#28A745] rounded-full animate-spin mb-4"></div>
<h3 className="text-white font-semibold tracking-wide text-lg">Analyzing Data...</h3>
<p className="text-gray-400 text-xs mt-2 animate-pulse">Syncing with Registry Node...</p>
<div className="font-mono text-green-400 text-xs mt-4" id="scan-terminal"></div>
</div>
</div>
<button className="w-full bg-[#1A2433] text-white py-4 rounded-lg font-medium shadow-md hover:bg-[#2E3135] transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wide" id="capture-btn" onclick="captureAndScan()">
<iconify-icon icon="solar:camera-minimalistic-linear" width="20"></iconify-icon>
<span>Capture Photo</span>
</button>
</div>

<div className="w-full hidden" id="step-4">

<div className="flex flex-col items-center justify-center mb-6">
<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3 shadow-sm border border-green-200 pulse-slow">
<iconify-icon className="text-[#28A745]" icon="solar:verified-check-linear" width="32"></iconify-icon>
</div>
<h2 className="text-xl font-semibold text-[#1A2433] uppercase tracking-tight">Verification Passed</h2>
<p className="text-xs text-gray-500 mt-2 text-center max-w-xs">All primary profile info validated. Authorization activation in progress.</p>
</div>

<div className="bg-[#1A2433] rounded-xl shadow-lg p-6 mb-4 text-center text-white relative overflow-hidden" id="countdown-card">
<div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-10 -mt-10 blur-xl"></div>
<p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Activation Timer</p>
<div className="text-5xl font-mono font-light tracking-tighter tabular-nums" id="timer">01:00</div>
<div className="w-full bg-gray-700 h-1 mt-4 rounded-full overflow-hidden">
<div className="bg-[#28A745] h-full transition-all duration-1000 ease-linear" id="progress-bar" style={{width: '100%'}}></div>
</div>
</div>

<div className="hidden fade-in" id="final-details">

<div className="bg-white border-l-4 border-[#28A745] rounded-r-lg shadow-sm p-4 mb-4 flex justify-between items-center bg-gradient-to-r from-green-50 to-white">
<div>
<div className="text-[10px] uppercase text-gray-400 tracking-wider">Registry Node ID</div>
<div className="font-mono text-sm font-bold text-[#1A2433] tracking-wide mt-0.5">RNX-84721-A66-204</div>
</div>
<div className="text-right">
<div className="text-[10px] uppercase text-gray-400 tracking-wider">Status</div>
<div className="text-[#28A745] font-bold text-sm tracking-wide">ACTIVE</div>
</div>
</div>

<div className="bg-white border border-[#E0E0E0] rounded-xl shadow-sm p-5 mb-6" id="slip-content">
<div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
<span className="text-sm font-semibold text-[#1A2433] uppercase">Authorization Slip</span>
<iconify-icon className="text-gray-400" icon="solar:bill-list-linear" width="18"></iconify-icon>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center text-sm">
<span className="text-gray-500">Node Registration</span>
<span className="font-medium text-[#1A2433]">$500.00</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-gray-500">Biometric Binding</span>
<span className="font-medium text-[#1A2433]">$500.00</span>
</div>
<div className="flex justify-between items-center pt-3 border-t border-dashed border-gray-200">
<span className="text-xs font-bold uppercase text-[#1A2433] tracking-wide">Total Linked Amount</span>
<span className="text-lg font-bold text-[#28A745]">$1,000.00</span>
</div>
</div>
</div>
<div className="text-xs text-center text-gray-400 mb-6 italic">
                    Present this authorization code to the assigned processing administrator to finalize the release procedure.
                </div>

<div className="grid grid-cols-1 gap-3">
<button className="w-full bg-white border border-[#E0E0E0] text-[#1A2433] py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm" onclick="copyNodeID()">
<iconify-icon icon="solar:copy-linear" width="18"></iconify-icon>
<span>Copy Node ID</span>
</button>
<button className="w-full bg-[#1A2433] text-white py-3 rounded-lg font-medium shadow-md hover:bg-[#2E3135] transition-colors flex items-center justify-center gap-2 text-sm" onclick="downloadSlip()">
<iconify-icon icon="solar:download-linear" width="18"></iconify-icon>
<span>Download Authorization Slip</span>
</button>
<button className="w-full text-gray-400 py-2 text-xs hover:text-[#1A2433] transition-colors" onclick="location.reload()">
                        Close Portal
                    </button>
</div>
</div>
</div>
</main>

<footer className="text-center py-6 text-[10px] text-gray-400 border-t border-gray-200 mt-auto bg-white">
<div className="mb-1 uppercase tracking-wider">NMEX Security Protocol</div>
<div>System Version 4.2.0 • Encrypted Connection</div>
</footer>
<canvas id="downloadCanvas" style={{display: 'none'}}></canvas>


    </>
  );
}
