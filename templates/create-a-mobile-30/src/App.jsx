import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // State Management
        function goToStep(step) {
            // Hide all steps
            [1, 2, 3, 4].forEach(id => {
                const el = document.getElementById(`step-${id}`);
                el.classList.add('hidden');
                el.classList.remove('fade-in');
            });

            // Show target step
            const target = document.getElementById(`step-${step}`);
            target.classList.remove('hidden');
            target.classList.add('fade-in');

            // Specific logic per step
            if(step === 2) stopCamera(); // Cleanup
            if(step === 4) startCountdown();
        }

        // Camera Logic
        let stream = null;
        async function initCamera() {
            goToStep(3);
            const video = document.getElementById('camera-feed');
            const fallback = document.getElementById('camera-fallback');
            
            try {
                stream = await navigator.mediaDevices.getUserMedia({ 
                    video: { facingMode: "environment" } 
                });
                video.srcObject = stream;
                fallback.classList.add('hidden');
            } catch (err) {
                console.error("Camera access denied or unavailable", err);
                video.classList.add('hidden');
                fallback.classList.remove('hidden');
                fallback.classList.add('flex');
            }
        }

        function stopCamera() {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
                stream = null;
            }
        }

        function capture() {
            const loader = document.getElementById('scan-loader');
            loader.classList.remove('hidden');
            loader.classList.add('flex');
            
            // Simulate scanning process
            setTimeout(() => {
                stopCamera();
                loader.classList.add('hidden');
                goToStep(4);
            }, 3500);
        }

        // Countdown Logic
        function startCountdown() {
            let timeLeft = 60;
            const display = document.getElementById('countdown');
            const bar = document.getElementById('progress-bar');
            
            const timer = setInterval(() => {
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    display.innerText = "00:00";
                    display.classList.add('text-red-400');
                    return;
                }
                
                timeLeft--;
                const minutes = Math.floor(timeLeft / 60);
                const seconds = timeLeft % 60;
                display.innerText = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
                
                // Update bar width
                const percentage = (timeLeft / 60) * 100;
                bar.style.width = `${percentage}%`;
                
                // Color shift at low time
                if(timeLeft < 15) bar.classList.replace('bg-[#28A745]', 'bg-red-500');

            }, 1000);
        }

        // Utilities
        function showToast(msg) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-msg').innerText = msg;
            toast.classList.remove('opacity-0', 'translate-y-[-10px]');
            setTimeout(() => {
                toast.classList.add('opacity-0', 'translate-y-[-10px]');
            }, 2000);
        }

        function copyId() {
            const id = document.getElementById('node-id').innerText;
            navigator.clipboard.writeText(id).then(() => showToast('Node ID Copied'));
        }

        function downloadSlip() {
            // Create a fake text file download
            const data = 
`NMEX VERIFICATION SLIP
----------------------
Date: ${new Date().toLocaleDateString()}
Client: Sharday Charley SW
Ref ID: MMX-REG-8829
Status: VERIFIED

Registry Node ID: RNX-84721-A66-204
Auth Amount: $1,000.00
----------------------
Present to Admin immediately.`;
            
            const blob = new Blob([data], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'NMEX_Auth_Slip_8829.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            showToast('Slip Downloaded');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden relative min-h-[600px] flex flex-col">

<header className="bg-[#1A2433] p-4 text-white border-b border-gray-700 z-10">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#28A745]" icon="solar:shield-check-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold tracking-tighter">NMEX</span>
</div>
<div className="text-[10px] uppercase tracking-widest opacity-60">Auth Portal v2.4</div>
</div>
<h1 className="text-xs uppercase tracking-widest text-gray-400">Global Processing &amp; Clearance Authority</h1>
</header>

<div className="flex-1 relative bg-gray-50" id="portal-content">

<section className="absolute inset-0 p-6 flex flex-col fade-in bg-gray-50 overflow-y-auto no-scrollbar" id="step-1">
<div className="flex-1">
<div className="mb-6">
<h2 className="text-xl font-semibold tracking-tight text-[#1A2433] mb-2 uppercase">Identity Verification</h2>
<p className="text-sm text-gray-500 leading-relaxed">
                            During automated registry synchronization, your profile requires verification. Please confirm identity details to continue processing.
                        </p>
</div>
<div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm mb-6 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-[#1A2433]"></div>
<div className="flex justify-between items-start mb-4 border-b border-gray-100 pb-2">
<span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Profile Identity</span>
<iconify-icon className="text-gray-400" icon="solar:user-id-linear" width="20"></iconify-icon>
</div>
<div className="space-y-3">
<div>
<p className="text-xs text-gray-400 uppercase tracking-wide">Name</p>
<p className="text-sm font-semibold text-[#1A2433]">Sharday Charley SW</p>
</div>
<div>
<p className="text-xs text-gray-400 uppercase tracking-wide">Reference ID</p>
<p className="text-sm font-mono text-gray-600">MMX-REG-8829</p>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-xs text-gray-400 uppercase tracking-wide">Case Status</p>
<div className="flex items-center gap-1 mt-1">
<span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
<p className="text-xs font-medium text-orange-600">Pending</p>
</div>
</div>
<div>
<p className="text-xs text-gray-400 uppercase tracking-wide">Auth Stage</p>
<p className="text-xs font-medium text-gray-500 mt-1">On Hold</p>
</div>
</div>
</div>
</div>
</div>
<button className="w-full bg-[#1A2433] hover:bg-[#2E3135] text-white font-medium py-3 px-4 rounded-md text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-gray-200" onclick="goToStep(2)">
                    Confirm &amp; Continue
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</section>

<section className="absolute inset-0 p-6 flex flex-col hidden bg-gray-50 overflow-y-auto no-scrollbar" id="step-2">
<div className="flex-1">
<div className="flex items-center gap-2 mb-4 text-gray-400 cursor-pointer hover:text-[#1A2433] transition-colors" onclick="goToStep(1)">
<iconify-icon icon="solar:arrow-left-linear" width="16"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wide">Back</span>
</div>
<h2 className="text-lg font-semibold tracking-tight text-[#1A2433] mb-4 uppercase">Record Review</h2>

<div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-gray-400" icon="solar:folder-open-linear" width="18"></iconify-icon>
<h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">Client Information</h3>
</div>
<div className="grid grid-cols-1 gap-3">
<div className="flex justify-between border-b border-gray-50 pb-2">
<span className="text-xs text-gray-400">Name</span>
<span className="text-xs font-medium text-[#1A2433]">Sharday Charley SW</span>
</div>
<div className="flex justify-between border-b border-gray-50 pb-2">
<span className="text-xs text-gray-400">Location</span>
<span className="text-xs font-medium text-[#1A2433] text-right">Albuquerque, NM 87121</span>
</div>
<div className="flex justify-between border-b border-gray-50 pb-2">
<span className="text-xs text-gray-400">Email</span>
<span className="text-xs font-medium text-[#1A2433]">shardaycharley.sc@gmail.com</span>
</div>
<div className="flex justify-between">
<span className="text-xs text-gray-400">Phone</span>
<span className="text-xs font-medium text-[#1A2433]">505-450-6156</span>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-6">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-gray-400" icon="solar:wheel-angle-linear" width="18"></iconify-icon>
<h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">Asset Designation</h3>
</div>
<div className="grid grid-cols-2 gap-3 mb-2">
<div>
<p className="text-[10px] text-gray-400 uppercase">Make</p>
<p className="text-xs font-medium text-[#1A2433]">Chevrolet</p>
</div>
<div>
<p className="text-[10px] text-gray-400 uppercase">Model</p>
<p className="text-xs font-medium text-[#1A2433]">Silverado 1500 RST</p>
</div>
<div>
<p className="text-[10px] text-gray-400 uppercase">Year</p>
<p className="text-xs font-medium text-[#1A2433]">2022</p>
</div>
<div>
<p className="text-[10px] text-gray-400 uppercase">Sender</p>
<p className="text-xs font-medium text-gray-400 italic">Restricted</p>
</div>
</div>
<div className="bg-gray-50 p-2 rounded border border-gray-100">
<p className="text-[10px] text-gray-400 uppercase">VIN Reference</p>
<p className="text-xs font-mono text-[#1A2433]">3GCPYBEK0NG123456</p>
</div>
</div>
<div className="bg-gray-100 rounded-md p-3 mb-4 flex gap-3 items-start">
<iconify-icon className="text-[#1A2433] shrink-0 mt-0.5" icon="solar:info-circle-linear" width="24"></iconify-icon>
<p className="text-xs text-gray-600 leading-tight">
                            By continuing, you acknowledge this record belongs to you and you are initiating the formal verification sequence.
                        </p>
</div>
</div>
<button className="w-full bg-[#1A2433] hover:bg-[#2E3135] text-white font-medium py-3 px-4 rounded-md text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-gray-200" onclick="initCamera()">
                    Proceed to Scan
                    <iconify-icon icon="solar:scanner-linear" width="18"></iconify-icon>
</button>
</section>

<section className="absolute inset-0 flex flex-col hidden bg-black" id="step-3">

<div className="absolute top-0 w-full p-4 z-20 flex justify-between items-center text-white bg-gradient-to-b from-black/80 to-transparent">
<button className="text-white/80 hover:text-white" onclick="goToStep(2)">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<span className="text-xs uppercase tracking-widest font-medium">Scan Identification</span>
<div className="w-6"></div>
</div>

<div className="relative flex-1 bg-gray-900 flex items-center justify-center overflow-hidden">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-80" id="camera-feed" muted="" playsinline=""></video>

<div className="hidden flex-col items-center justify-center text-gray-500" id="camera-fallback">
<iconify-icon icon="solar:camera-broken-linear" width="48"></iconify-icon>
<p className="text-xs mt-2">Camera Unavailable</p>
</div>

<div className="relative w-64 h-40 border border-white/30 rounded-lg z-10 overflow-hidden">
<div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#28A745]"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#28A745]"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#28A745]"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#28A745]"></div>

<div className="scan-line"></div>
</div>
<p className="absolute mt-52 text-white/70 text-xs font-medium bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">Align physical ID within frame</p>
</div>

<div className="p-6 bg-[#1A2433] text-center z-20">
<button className="w-16 h-16 rounded-full border-4 border-white/20 bg-white flex items-center justify-center mx-auto hover:scale-105 transition-transform" onclick="capture()">
<div className="w-14 h-14 rounded-full border-2 border-[#1A2433]"></div>
</button>
<p className="text-xs text-gray-400 mt-3 uppercase tracking-wide">Capture Photo</p>
</div>

<div className="absolute inset-0 bg-[#1A2433]/95 z-50 hidden flex-col items-center justify-center" id="scan-loader">
<div className="relative w-20 h-20 flex items-center justify-center">
<div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-[#28A745] animate-spin"></div>
<iconify-icon className="text-white" icon="solar:document-text-linear" width="32"></iconify-icon>
</div>
<h3 className="mt-6 text-white text-sm font-semibold tracking-wide uppercase">Validating Biometrics</h3>
<p className="text-gray-400 text-xs mt-2">Connecting to registry node...</p>
</div>
</section>

<section className="absolute inset-0 p-6 flex flex-col hidden bg-gray-50 overflow-y-auto no-scrollbar" id="step-4">

<div className="flex items-center gap-3 mb-6 animate-pulse">
<div className="w-10 h-10 rounded-full bg-[#28A745]/10 flex items-center justify-center text-[#28A745]">
<iconify-icon icon="solar:verified-check-linear" width="24"></iconify-icon>
</div>
<div>
<h2 className="text-sm font-bold text-[#28A745] uppercase tracking-wide">Verification Passed</h2>
<p className="text-xs text-gray-500">Profile validated successfully.</p>
</div>
</div>

<div className="bg-[#1A2433] rounded-xl p-6 text-white mb-6 shadow-xl relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon icon="solar:stopwatch-linear" width="80"></iconify-icon>
</div>
<p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Activation Expires In</p>
<div className="text-4xl font-mono font-light tracking-tighter" id="countdown">01:00</div>
<div className="w-full bg-gray-700 h-1 mt-4 rounded-full overflow-hidden">
<div className="bg-[#28A745] h-full transition-all duration-1000 ease-linear" id="progress-bar" style={{width: '100%'}}></div>
</div>
<p className="text-[10px] text-gray-400 mt-3">Authorization activation in progress. Do not close.</p>
</div>

<div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm mb-6">
<div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
<span className="text-xs font-semibold uppercase text-gray-500">Registry Details</span>
<div className="px-2 py-0.5 bg-green-50 text-[#28A745] text-[10px] font-bold uppercase rounded border border-green-100">Active</div>
</div>
<div className="space-y-4">
<div>
<p className="text-[10px] text-gray-400 uppercase">Registry Node ID</p>
<div className="flex items-center gap-2 mt-1">
<code className="text-sm font-mono text-[#1A2433] bg-gray-50 px-2 py-1 rounded border border-gray-200" id="node-id">RNX-84721-A66-204</code>
<button className="text-gray-400 hover:text-[#1A2433] transition-colors" onclick="copyId()">
<iconify-icon icon="solar:copy-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="pt-2 border-t border-dashed border-gray-200">
<p className="text-[10px] text-gray-400 uppercase mb-2">Linked Authorization</p>
<div className="flex justify-between items-center mb-1">
<span className="text-xs text-gray-500">Node Registration</span>
<span className="text-xs font-mono text-[#1A2433]">$500.00</span>
</div>
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-gray-500">Biometric Binding</span>
<span className="text-xs font-mono text-[#1A2433]">$500.00</span>
</div>
<div className="flex justify-between items-center pt-2 border-t border-gray-100">
<span className="text-xs font-semibold text-[#1A2433]">Total Auth Value</span>
<span className="text-sm font-semibold font-mono text-[#1A2433]">$1,000.00</span>
</div>
</div>
</div>
</div>
<div className="mt-auto space-y-3">
<p className="text-[10px] text-center text-gray-400 px-4">
                        Present this authorization code to the assigned processing administrator to finalize the release procedure.
                    </p>
<div className="grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-2 bg-white border border-gray-300 text-[#1A2433] py-2.5 rounded-md text-xs font-semibold hover:bg-gray-50 transition-colors" onclick="downloadSlip()">
<iconify-icon icon="solar:file-download-linear" width="16"></iconify-icon>
                            Save Slip
                        </button>
<button className="flex items-center justify-center gap-2 bg-[#1A2433] text-white py-2.5 rounded-md text-xs font-semibold hover:bg-[#2E3135] transition-colors shadow-lg shadow-gray-200" onclick="window.location.reload()">
                            Close Portal
                        </button>
</div>
</div>
</section>
</div>
</main>

<div className="fixed top-4 left-1/2 -translate-x-1/2 bg-[#1A2433] text-white text-xs py-2 px-4 rounded shadow-xl flex items-center gap-2 transition-all duration-300 opacity-0 pointer-events-none translate-y-[-10px]" id="toast">
<iconify-icon className="text-[#28A745]" icon="solar:check-circle-linear"></iconify-icon>
<span id="toast-msg">Copied to clipboard</span>
</div>


    </>
  );
}
