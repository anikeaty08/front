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



        // System State
        const SYSTEM_PIN = "8821"; // The valid PIN
        
        // Navigation Helper
        function transitionTo(screenId, progress) {
            const screens = ['screen-1', 'screen-2', 'screen-3', 'screen-4'];
            const container = document.getElementById('app-container');
            
            // Fade out current
            container.style.opacity = '0';
            container.style.transform = 'translateY(-5px)';
            container.style.transition = 'all 0.3s ease';

            setTimeout(() => {
                // Hide all screens
                screens.forEach(id => {
                    const el = document.getElementById(id);
                    el.classList.add('hidden');
                    el.classList.remove('fade-enter-active');
                    el.style.opacity = '0';
                });

                // Show target screen
                const target = document.getElementById(screenId);
                target.classList.remove('hidden');
                
                // Update Progress Bar
                document.getElementById('progress-bar').style.width = `${progress}%`;

                // Fade in container
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
                
                setTimeout(() => {
                    target.style.opacity = '1';
                    target.classList.add('fade-enter-active');
                }, 50);

            }, 300);
        }

        // Screen 1: Validation
        function validateStep1() {
            const form = document.getElementById('access-form');
            if (form.checkValidity()) {
                const btn = form.querySelector('button');
                btn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin" width="20"></iconify-icon> Verifying...';
                btn.classList.add('opacity-75', 'cursor-not-allowed');
                
                setTimeout(() => {
                    transitionTo('screen-2', 50);
                    initializeScreen2();
                }, 1000);
            } else {
                form.reportValidity();
            }
        }

        // Screen 2: Logic
        function initializeScreen2() {
            const pinInput = document.getElementById('auth-pin');
            const pinBtn = document.getElementById('pin-submit');
            
            // Simulate data loading delay for inputs
            setTimeout(() => {
                pinInput.disabled = false;
                pinInput.focus();
                
                // Add listener to enable button
                pinInput.addEventListener('input', (e) => {
                    if (e.target.value.length === 4) {
                        pinBtn.disabled = false;
                        pinBtn.classList.remove('bg-gray-200', 'text-gray-400');
                        pinBtn.classList.add('bg-gray-900', 'text-white', 'hover:bg-gray-800');
                    } else {
                        pinBtn.disabled = true;
                        pinBtn.classList.add('bg-gray-200', 'text-gray-400');
                        pinBtn.classList.remove('bg-gray-900', 'text-white', 'hover:bg-gray-800');
                    }
                });
            }, 500);
        }

        function validatePin() {
            const input = document.getElementById('auth-pin');
            const error = document.getElementById('pin-error');
            
            if (input.value === SYSTEM_PIN) {
                error.classList.add('hidden');
                transitionTo('screen-3', 75);
            } else {
                error.classList.remove('hidden');
                input.value = '';
                input.classList.add('border-red-500', 'ring-1', 'ring-red-500');
                setTimeout(() => {
                    input.classList.remove('border-red-500', 'ring-1', 'ring-red-500');
                }, 2000);
            }
        }

        // Screen 3: Camera Logic
        function startCapture() {
            const status = document.getElementById('status-text');
            const feed = document.getElementById('camera-feed');
            const progress = document.getElementById('scan-progress');
            const controls = document.getElementById('scan-controls');
            const icon = feed.querySelector('iconify-icon');
            
            // UI Update
            controls.classList.add('hidden');
            status.textContent = "Connecting Camera...";
            status.classList.add('animate-pulse');

            setTimeout(() => {
                // Simulate Camera On
                status.textContent = "Capturing Face Data...";
                feed.classList.add('capturing');
                icon.style.opacity = '0.2';
                feed.style.backgroundColor = '#1f2937'; // Darken bg to simulate cam
                
                // Start Ring Animation
                progress.style.strokeDashoffset = '0';
                
                setTimeout(() => {
                    // Capture Complete
                    feed.classList.remove('capturing');
                    feed.style.borderColor = '#10b981'; // Green border
                    status.textContent = "Capture Complete";
                    status.classList.remove('animate-pulse');
                    status.classList.add('text-green-600');
                    
                    document.getElementById('confirm-controls').classList.remove('hidden');
                    document.getElementById('confirm-controls').classList.add('grid');
                }, 3000); // 3s scan time
                
            }, 800);
        }

        function resetCapture() {
            const feed = document.getElementById('camera-feed');
            const progress = document.getElementById('scan-progress');
            const icon = feed.querySelector('iconify-icon');
            
            feed.style.borderColor = '#e5e7eb';
            feed.style.backgroundColor = '#f3f4f6';
            icon.style.opacity = '1';
            
            progress.style.transition = 'none';
            progress.style.strokeDashoffset = '289';
            // Force reflow
            void progress.offsetWidth;
            progress.style.transition = 'all 3000ms linear';
            
            document.getElementById('status-text').textContent = "Ready to Scan";
            document.getElementById('status-text').classList.remove('text-green-600');
            
            document.getElementById('confirm-controls').classList.add('hidden');
            document.getElementById('confirm-controls').classList.remove('grid');
            document.getElementById('scan-controls').classList.remove('hidden');
        }

        function finalizeVerification() {
            transitionTo('screen-4', 100);
        }

        // Screen 4: Release Logic
        function generateCode() {
            const btn = document.querySelector('#release-action button');
            btn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin"></iconify-icon> Generating Secure Code...';
            btn.disabled = true;
            btn.classList.add('opacity-75');

            setTimeout(() => {
                const randomCode = 'RLS-' + Math.floor(1000 + Math.random() * 9000) + '-XY';
                document.getElementById('final-code').textContent = randomCode;
                
                document.getElementById('release-action').classList.add('hidden');
                document.getElementById('code-display').classList.remove('hidden');
                
                // Simple fade in
                document.getElementById('code-display').classList.add('fade-enter-active');
            }, 1500);
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
      

<div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

<div className="mb-8 text-center">
<div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gray-900 text-white mb-4 shadow-xl shadow-gray-200">
<iconify-icon height="24" icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h1 className="text-2xl font-medium tracking-tighter text-gray-900">NMEX</h1>
<p className="text-xs text-gray-500 font-medium tracking-wide uppercase mt-1">Official Clearance Portal</p>
</div>

<div className="w-full max-w-md bg-white rounded-2xl shadow-[0_2px_12px_-4px_rgba(0,0,0,0.08)] border border-gray-200 overflow-hidden relative">

<div className="absolute top-0 left-0 w-full h-1 bg-gray-100">
<div className="h-full bg-gray-900 transition-all duration-500 ease-out w-[25%]" id="progress-bar"></div>
</div>

<div className="p-6 sm:p-8" id="app-container">

<div className="fade-enter-active" id="screen-1">
<div className="mb-6">
<h2 className="text-lg font-medium text-gray-900 tracking-tight">Identity Verification</h2>
<p className="text-sm text-gray-500 mt-1">Please provide your details to access the clearance record.</p>
</div>
<form className="space-y-4" id="access-form" onsubmit="event.preventDefault(); validateStep1();">
<div className="grid grid-cols-1 gap-4">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="fullname">Full Name</label>
<input className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 transition-colors" id="fullname" placeholder="e.g. Alex Sterling" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="email">Email Address</label>
<input className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 transition-colors" id="email" placeholder="name@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="phone">Phone Number</label>
<input className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 transition-colors" id="phone" placeholder="+1 (555) 000-0000" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="ref-id">Reference ID</label>
<div className="relative">
<input className="block w-full rounded-lg border border-gray-300 pl-3 pr-10 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 transition-colors uppercase tracking-widest" id="ref-id" placeholder="NMX-XXXX" required="" type="text"/>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
<iconify-icon className="text-gray-400" icon="solar:key-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<button className="w-full mt-6 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium py-2.5 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-all flex items-center justify-center gap-2" type="submit">
                        Verify Access
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>

<div className="hidden opacity-0" id="screen-2">
<div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
<div>
<h2 className="text-lg font-medium text-gray-900 tracking-tight">Clearance Details</h2>
<div className="flex items-center gap-1.5 mt-1">
<div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs text-green-600 font-medium">Active Record Found</span>
</div>
</div>
<div className="h-10 w-10 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100">
<iconify-icon className="text-gray-600" icon="solar:file-check-linear" width="20"></iconify-icon>
</div>
</div>

<div className="space-y-4">
<div className="aspect-video w-full bg-gray-100 rounded-lg overflow-hidden border border-gray-200 relative">
<img alt="Vehicle" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md text-white text-[10px] px-2 py-0.5 rounded">Img: 2023-REC</div>
</div>
<div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
<div>
<p className="text-[10px] uppercase tracking-wider text-gray-500">Make / Model</p>
<p className="text-gray-900 font-medium">Tesla Model Y</p>
</div>
<div>
<p className="text-[10px] uppercase tracking-wider text-gray-500">Year / Color</p>
<p className="text-gray-900 font-medium">2023 / Midnight Silver</p>
</div>
<div className="col-span-2">
<p className="text-[10px] uppercase tracking-wider text-gray-500">VIN / Chassis</p>
<p className="text-gray-900 font-medium font-mono tracking-tight">5YJ3E1EA5KF00293</p>
</div>
</div>
</div>

<div className="mt-6 pt-6 border-t border-gray-100">
<h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">Documentation History</h3>
<div className="space-y-3">
<div className="flex items-center justify-between text-sm group">
<div className="flex items-center gap-3">
<iconify-icon className="text-gray-400" icon="solar:document-add-linear"></iconify-icon>
<span className="text-gray-600">VIS Record</span>
</div>
<span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/10">Processed</span>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-3">
<iconify-icon className="text-gray-400" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-gray-600">NMX Card Record</span>
</div>
<span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/10">Approved</span>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-3">
<iconify-icon className="text-gray-400" icon="solar:bill-check-linear"></iconify-icon>
<span className="text-gray-600">Auth. &amp; Reauth.</span>
</div>
<div className="text-right">
<span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/10">Paid</span>
</div>
</div>
</div>
</div>

<div className="mt-8 bg-gray-50 rounded-xl p-4 border border-gray-100">
<label className="block text-xs font-medium text-gray-700 mb-2" htmlFor="auth-pin">Authorization PIN</label>
<div className="flex gap-2">
<input className="block w-full rounded-lg border-gray-200 bg-white px-3 py-2 text-sm text-center tracking-[0.5em] text-gray-900 placeholder-gray-300 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 transition-all" disabled="" id="auth-pin" maxlength="4" placeholder="••••" type="password"/>
<button className="bg-gray-200 text-gray-400 rounded-lg px-4 flex items-center justify-center transition-all" disabled="" id="pin-submit" onclick="validatePin()">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<p className="text-[10px] text-red-600 mt-2 hidden text-center" id="pin-error">Invalid Authorization PIN.</p>
</div>
</div>

<div className="hidden opacity-0 text-center" id="screen-3">
<div className="mb-8">
<h2 className="text-lg font-medium text-gray-900 tracking-tight">Biometric Verification</h2>
<p className="text-sm text-gray-500 mt-1">Facial recognition required for final release.</p>
</div>
<div className="relative w-48 h-48 mx-auto mb-8">

<div className="w-full h-full rounded-full bg-gray-100 border-2 border-gray-200 overflow-hidden relative flex items-center justify-center" id="camera-feed">
<iconify-icon className="text-gray-300 w-24 h-24" icon="solar:user-circle-linear" width="64"></iconify-icon>
<video className="absolute inset-0 w-full h-full object-cover hidden" id="webcam-mock" loop="" muted="" playsinline=""></video>
<div className="scan-overlay"></div>
</div>

<svg className="absolute -inset-4 w-56 h-56 rotate-[-90deg]" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="46" stroke="#e5e7eb" strokeWidth="2"></circle>
<circle className="transition-all duration-[3000ms] ease-linear" cx="50" cy="50" fill="none" id="scan-progress" r="46" stroke="#111827" stroke-dasharray="289" stroke-dashoffset="289" strokeWidth="2"></circle>
</svg>
</div>
<div className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-8" id="status-text">Ready to Scan</div>

<div id="scan-controls">
<button className="w-full bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium py-2.5 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2" onclick="startCapture()">
<iconify-icon icon="solar:camera-linear"></iconify-icon>
                        Ready
                    </button>
</div>
<div className="hidden grid-cols-2 gap-3" id="confirm-controls">
<button className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-medium py-2.5 rounded-lg transition-all" onclick="resetCapture()">
                        Retake
                    </button>
<button className="w-full bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium py-2.5 rounded-lg shadow-sm transition-all" onclick="finalizeVerification()">
                        Confirm
                    </button>
</div>
</div>

<div className="hidden opacity-0 text-center" id="screen-4">
<div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
<iconify-icon className="text-green-600" icon="solar:verified-check-linear" width="32"></iconify-icon>
</div>
<h2 className="text-xl font-medium text-gray-900 tracking-tight">Verification Complete</h2>
<p className="text-sm text-gray-500 mt-2 mx-auto max-w-[260px]">Your vehicle has been approved for release.</p>
<div className="my-8 py-6 bg-gray-50 rounded-xl border border-gray-100 border-dashed">
<p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Total Outstanding</p>
<p className="text-3xl font-semibold text-gray-900 tracking-tight">1,000</p>
</div>
<div id="release-action">
<button className="w-full bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium py-3 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2" onclick="generateCode()">
                        Get Release Code
                    </button>
</div>
<div className="hidden mt-6" id="code-display">
<div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-4">
<p className="text-[10px] text-blue-600 uppercase tracking-widest mb-1">Release Code</p>
<p className="text-2xl font-mono font-bold text-blue-900 tracking-widest" id="final-code">---</p>
</div>
<p className="text-xs text-gray-500 leading-relaxed text-left bg-gray-50 p-3 rounded border border-gray-100">
<span className="font-medium text-gray-900 block mb-1">Instructions:</span>
                        Send this release code to your representing agent to finalize and activate the vehicle release. Present the code at the base to complete the release process.
                    </p>
</div>
</div>
</div>

<div className="bg-gray-50 border-t border-gray-100 px-6 py-3 flex items-center justify-between">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-gray-400" icon="solar:lock-password-linear" width="12"></iconify-icon>
<span className="text-[10px] text-gray-400 font-medium">SSL Secure Connection</span>
</div>
<span className="text-[10px] text-gray-300 font-mono">ID: 9942-AX</span>
</div>
</div>


    </>
  );
}
