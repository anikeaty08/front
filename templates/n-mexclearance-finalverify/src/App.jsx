import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // State
        const views = {
            login: document.getElementById('page-login'),
            dashboard: document.getElementById('page-dashboard'),
            signature: document.getElementById('page-signature'),
            release: document.getElementById('page-release')
        };

        // Navigation
        function switchView(viewName) {
            Object.values(views).forEach(el => el.classList.add('hidden-forced'));
            
            // Animation handling
            const target = views[viewName];
            target.classList.remove('hidden-forced');
            target.classList.add('fade-enter');
            
            requestAnimationFrame(() => {
                target.classList.add('fade-enter-active');
                setTimeout(() => {
                    target.classList.remove('fade-enter', 'fade-enter-active');
                }, 400);
            });
        }

        // Login Logic
        document.getElementById('login-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value.trim();
            const code = document.getElementById('auth-code').value.trim();
            const errorMsg = document.getElementById('login-error');
            const btnText = document.getElementById('btn-text');
            const btnLoader = document.getElementById('btn-loader');

            errorMsg.classList.add('hidden');

            if (email === 'shardaycharley.sc@gmail.com' && code === 'M202') {
                // Success
                btnText.classList.add('hidden');
                btnLoader.classList.remove('hidden');
                
                setTimeout(() => {
                    switchView('dashboard');
                }, 1500); // Short verification loader
            } else {
                // Failure
                errorMsg.classList.remove('hidden');
                // Shake animation logic could go here
            }
        });

        // Dashboard Logic
        function goToSignature() {
            switchView('signature');
            setupCanvas();
        }

        function goToDashboard() {
            switchView('dashboard');
        }

        // Signature Logic
        let canvas, ctx, isDrawing = false;

        function setupCanvas() {
            canvas = document.getElementById('sig-canvas');
            ctx = canvas.getContext('2d');
            
            // Resize canvas to fit container
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
            
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            ctx.strokeStyle = '#0f172a';

            // Events
            canvas.addEventListener('mousedown', startDraw);
            canvas.addEventListener('mousemove', draw);
            canvas.addEventListener('mouseup', endDraw);
            canvas.addEventListener('touchstart', (e) => { e.preventDefault(); startDraw(e.touches[0]); });
            canvas.addEventListener('touchmove', (e) => { e.preventDefault(); draw(e.touches[0]); });
            canvas.addEventListener('touchend', endDraw);
        }

        function getPos(e) {
            const rect = canvas.getBoundingClientRect();
            return {
                x: (e.clientX || e.pageX) - rect.left,
                y: (e.clientY || e.pageY) - rect.top
            };
        }

        function startDraw(e) {
            isDrawing = true;
            const pos = getPos(e);
            ctx.beginPath();
            ctx.moveTo(pos.x, pos.y);
        }

        function draw(e) {
            if (!isDrawing) return;
            const pos = getPos(e);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
        }

        function endDraw() {
            isDrawing = false;
        }

        function clearCanvas() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        function confirmSignature() {
            const loader = document.getElementById('sig-loader');
            const success = document.getElementById('sig-success');
            
            loader.classList.remove('hidden');
            loader.classList.add('flex'); // Because it was hidden

            // 10 Second Verification Animation
            setTimeout(() => {
                loader.classList.add('hidden');
                loader.classList.remove('flex');
                
                success.classList.remove('hidden');
                success.classList.add('flex');

                setTimeout(() => {
                    switchView('release');
                }, 1500); // Short delay to read "Verified"
            }, 10000); 
        }

        // Handle Resize for Canvas
        window.addEventListener('resize', () => {
            if (!views.signature.classList.contains('hidden-forced')) {
                setupCanvas();
            }
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<main className="relative z-10 w-full max-w-md bg-white border border-slate-200 shadow-sm sm:rounded-lg overflow-hidden min-h-[500px] flex flex-col transition-all duration-500" id="app-container">

<section className="flex flex-col justify-center h-full p-8 w-full flex-grow" id="page-login">
<div className="mb-8">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-slate-900 rounded-md flex items-center justify-center text-white">
<span className="font-medium tracking-tighter text-xs">NX</span>
</div>
<span className="text-slate-900 font-medium tracking-tight">NMEX Agency</span>
</div>
<h1 className="text-xl font-medium text-slate-900 tracking-tight mb-2">Portal Access</h1>
<p className="text-slate-500 font-light">Secure verification system login.</p>
</div>
<form className="space-y-4" id="login-form">
<div className="space-y-1">
<label className="text-xs text-slate-500 font-medium">Email Address</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-slate-900 outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all font-normal placeholder:text-slate-300" id="email" placeholder="agent@nmex.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-500 font-medium">Authorization Code</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-slate-900 outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all font-normal placeholder:text-slate-300" id="auth-code" placeholder="••••" type="password"/>
</div>
<div className="hidden text-xs text-red-600 bg-red-50 p-2 rounded border border-red-100 flex items-center gap-2" id="login-error">
<iconify-icon icon="solar:danger-circle-linear" width="16"></iconify-icon>
                    Invalid credentials. Authorization denied.
                </div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2 rounded shadow-sm transition-colors flex items-center justify-center gap-2 mt-2" type="submit">
<span id="btn-text">Secure Sign In</span>
<div className="loader hidden border-white border-t-transparent" id="btn-loader"></div>
</button>
</form>
<div className="mt-auto pt-8 text-center">
<p className="text-[10px] text-slate-400 font-light tracking-wide uppercase">System ID: 89-AX-99</p>
</div>
</section>

<section className="hidden-forced w-full flex flex-col h-full bg-white relative" id="page-dashboard">

<header className="bg-slate-50 border-b border-slate-200 px-6 py-4">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<span className="font-medium tracking-tighter text-[10px]">NX</span>
</div>
<span className="font-medium tracking-tight text-slate-900">NMEX Global</span>
</div>
<span className="bg-amber-50 text-amber-700 text-[10px] uppercase tracking-wide px-2 py-0.5 rounded border border-amber-100 font-medium">Pending Verification</span>
</div>
<div className="grid grid-cols-2 gap-y-2 text-xs">
<div>
<span className="text-slate-400 block text-[10px]">Reference</span>
<span className="font-mono text-slate-700">NMX-72639-AX</span>
</div>
<div className="text-right">
<span className="text-slate-400 block text-[10px]">Network</span>
<span className="text-slate-700">IMX</span>
</div>
<div>
<span className="text-slate-400 block text-[10px]">Auth Level</span>
<span className="text-slate-700">Tier 2</span>
</div>
</div>
</header>
<div className="overflow-y-auto flex-grow px-6 py-6 space-y-6 scrollbar-hide">

<div>
<h3 className="text-xs uppercase tracking-wider text-slate-400 font-medium mb-3 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:wheel-angle-linear"></iconify-icon>
                        Vehicle Details
                    </h3>
<div className="border border-slate-100 rounded-lg p-4 space-y-3 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
<div className="grid grid-cols-2 gap-4">
<div>
<span className="text-[10px] text-slate-400 block">Make / Model</span>
<span className="text-slate-900 font-medium">Chevrolet Silverado 1500 RST</span>
</div>
<div>
<span className="text-[10px] text-slate-400 block">Year</span>
<span className="text-slate-900 font-medium">2022</span>
</div>
<div>
<span className="text-[10px] text-slate-400 block">Color</span>
<span className="text-slate-900 font-medium">Red</span>
</div>
<div>
<span className="text-[10px] text-slate-400 block">VIN</span>
<span className="font-mono text-xs text-slate-900">3GCPYBEK0NG123456</span>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-xs uppercase tracking-wider text-slate-400 font-medium mb-3 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:document-text-linear"></iconify-icon>
                        Logistics
                    </h3>
<div className="border border-slate-100 rounded-lg p-4 space-y-3 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
<div className="flex justify-between items-center border-b border-slate-50 pb-2">
<span className="text-slate-500 text-xs">Type</span>
<span className="text-slate-900 font-medium text-xs">Vehicle Transport Processing</span>
</div>
<div className="flex justify-between items-center border-b border-slate-50 pb-2">
<span className="text-slate-500 text-xs">Provider</span>
<span className="text-slate-900 font-medium text-xs">Evatrack Auto Logistics</span>
</div>
<div className="flex justify-between items-center">
<span className="text-slate-500 text-xs">Bill of Lading</span>
<span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[10px] font-medium border border-emerald-100">VICS — Authorized</span>
</div>
</div>
</div>

<div className="bg-slate-50 border border-slate-200 p-4 rounded text-xs leading-relaxed text-slate-600 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-slate-300"></div>
<p className="font-medium text-slate-800 mb-1">Administrative Validation</p>
                    Following comprehensive system review and administrative validation, the designated release authorization has been approved for operational use. This authorization remains valid upon presentation with verified identification and corresponding transaction records.
                </div>

<div className="relative pt-2 pb-6">

<div className="absolute right-4 top-4 border-4 border-slate-200 text-slate-200 rounded-full w-24 h-24 flex items-center justify-center stamp-rotate pointer-events-none z-0">
<div className="text-center">
<div className="text-[8px] tracking-widest uppercase">NMEX</div>
<div className="text-[8px] font-bold">VALID</div>
</div>
</div>
<div className="relative z-10 grid grid-cols-2 gap-4">
<div>
<span className="text-[10px] text-slate-400 block uppercase tracking-wider">Officer in Charge</span>
<span className="text-slate-900 font-medium block mt-1">Daniel R. Hoffman</span>
<span className="text-slate-500 text-[10px]">Processing &amp; Release Officer</span>
</div>
<div className="text-right">
<span className="text-[10px] text-slate-400 block uppercase tracking-wider">Date</span>
<span className="text-slate-900 font-medium block mt-1">February 03, 2026</span>
</div>
</div>
<div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-slate-500 text-[10px]">NMEX — Processing Validated</span>
</div>
</div>
</div>
<div className="p-6 border-t border-slate-100 bg-white">
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded shadow-sm transition-colors flex items-center justify-center gap-2 text-xs" onclick="goToSignature()">
                    Proceed to Authorization
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</section>

<section className="hidden-forced w-full flex flex-col h-full bg-white relative" id="page-signature">
<div className="flex-grow flex flex-col items-center justify-center p-6 w-full">
<div className="w-full text-center mb-6">
<h2 className="text-base font-medium text-slate-900">Digital Authorization</h2>
<p className="text-slate-500 text-xs mt-1">Please provide owner signature below.</p>
</div>
<div className="relative w-full max-w-xs mx-auto">
<div className="bg-white border border-slate-200 rounded-lg shadow-sm w-full h-48 relative overflow-hidden">
<canvas className="w-full h-full cursor-crosshair" id="sig-canvas"></canvas>

<div className="absolute bottom-4 left-0 w-full text-center pointer-events-none">
<div className="border-t border-slate-100 w-3/4 mx-auto mb-1"></div>
<span className="text-[10px] text-slate-300 uppercase tracking-wider">Owner Authorization Signature</span>
</div>

<div className="absolute top-2 left-3 pointer-events-none">
<span className="font-script text-slate-100 text-xs italic">Sharday Charley</span>
</div>
</div>
<button className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 p-1" onclick="clearCanvas()">
<iconify-icon icon="solar:refresh-linear" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="absolute inset-0 bg-white/95 z-50 hidden flex-col items-center justify-center text-center p-8" id="sig-loader">
<div className="loader mb-4 border-slate-200 border-top-slate-900"></div>
<h3 className="text-slate-900 font-medium text-sm mb-1">Validating signature...</h3>
<p className="text-slate-500 text-xs">Verifying against authorization records.</p>
<div className="w-48 bg-slate-100 h-1 rounded-full mt-6 overflow-hidden">
<div className="bg-slate-900 h-full w-0 animate-[progress_10s_ease-in-out_forwards]"></div>
</div>
</div>
<style> @keyframes progress { to { width: 100%; } } </style>

<div className="absolute inset-0 bg-white z-50 hidden flex-col items-center justify-center text-center p-8" id="sig-success">
<div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-emerald-900 font-medium text-sm mb-1">Signature Verified</h3>
<p className="text-emerald-700/70 text-xs">Authorization Confirmed.</p>
<div className="mt-4 px-3 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-medium rounded-full uppercase tracking-wide">
                    Active — Verified
                </div>
</div>
<div className="p-6 border-t border-slate-100 bg-white w-full grid grid-cols-2 gap-3">
<button className="w-full bg-white border border-slate-200 text-slate-600 hover:text-slate-900 font-medium py-3 rounded shadow-sm transition-colors text-xs" onclick="goToDashboard()">
                    Cancel
                </button>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded shadow-sm transition-colors text-xs" onclick="confirmSignature()">
                    Confirm Signature
                </button>
</div>
</section>

<section className="hidden-forced w-full flex flex-col h-full bg-white relative" id="page-release">
<header className="bg-emerald-50/50 border-b border-emerald-100 px-6 py-6 text-center">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 mb-3">
<iconify-icon icon="solar:lock-unlocked-linear" width="20"></iconify-icon>
</div>
<h2 className="text-base font-medium text-emerald-950">Release Authorized</h2>
<p className="text-emerald-800/60 text-xs mt-1">Clearance Validated by NMEX Processing</p>
</header>
<div className="flex-grow p-6 space-y-6">

<div className="bg-slate-900 text-white rounded-lg p-5 text-center shadow-lg shadow-slate-200/50">
<span className="text-slate-400 text-[10px] uppercase tracking-widest block mb-2">Release Code</span>
<div className="text-4xl font-mono font-medium tracking-tight mb-2">0945</div>
<div className="flex justify-center gap-4 text-[10px] text-slate-400 border-t border-slate-800 pt-3 mt-3">
<span>Issued: 2026-02-11</span>
<span>Expires: 2026-02-18</span>
</div>
</div>

<div className="border border-slate-200 rounded-lg p-0 overflow-hidden">
<div className="bg-slate-50 px-4 py-2 border-b border-slate-200 flex justify-between items-center">
<span className="text-xs font-medium text-slate-700">Yard Clearance Code (YCC)</span>
<iconify-icon className="text-slate-400" icon="solar:qr-code-linear"></iconify-icon>
</div>
<div className="p-4">
<div className="flex justify-between items-end mb-4">
<div>
<span className="text-[10px] text-slate-400 block mb-1">YCC Number</span>
<span className="font-mono text-lg text-slate-900">82941</span>
</div>
<div className="text-right">
<span className="text-[10px] text-slate-400 block mb-1">Clearance Charge</span>
<span className="font-medium text-lg text-slate-900">$1,000.00</span>
</div>
</div>
<div className="bg-amber-50 text-amber-800 text-[10px] px-3 py-2 rounded border border-amber-100 flex items-center gap-2">
<iconify-icon icon="solar:card-linear"></iconify-icon>
                            Status: Payment Required for Clearance
                        </div>
</div>
</div>

<div className="flex gap-3 items-start">
<iconify-icon className="text-slate-400 flex-shrink-0 mt-0.5" icon="solar:info-circle-linear" width="16"></iconify-icon>
<p className="text-xs text-slate-500 leading-relaxed">
                        Present this Yard Clearance Code to yard management or authorized agents for vehicle release.
                    </p>
</div>
</div>

<footer className="mt-auto bg-slate-900 text-white p-4 text-[10px]">
<div className="flex justify-between items-center mb-2 border-b border-slate-800 pb-2">
<span className="tracking-wide text-slate-300">NMEX • Verification • Single-Use</span>
<span className="bg-white/10 px-2 py-0.5 rounded text-white">ID Required</span>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<span className="text-slate-500 block">Gate</span>
<span className="font-mono text-white">4561</span>
</div>
<div className="text-right">
<span className="text-slate-500 block">Lot</span>
<span className="font-mono text-white">410901</span>
</div>
</div>
</footer>
</section>
</main>


    </>
  );
}
