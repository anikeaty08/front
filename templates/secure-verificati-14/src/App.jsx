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



        // Utilities
        const getEl = (id) => document.getElementById(id);
        const screens = [1, 2, 3, 4, 5, 6, 7];
        
        // Random Data Generation
        getEl('final-timestamp').innerText = new Date().toLocaleString('en-US', { 
            year: 'numeric', month: '2-digit', day: '2-digit', 
            hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false 
        });

        // Navigation
        function goToScreen(screenNum) {
            screens.forEach(s => {
                const el = getEl(`screen-${s}`);
                if (el) {
                    if (s === screenNum) {
                        el.classList.remove('screen-hidden');
                        el.classList.add('fade-enter');
                        setTimeout(() => el.classList.add('fade-enter-active'), 10);
                    } else {
                        el.classList.add('screen-hidden');
                        el.classList.remove('fade-enter', 'fade-enter-active');
                    }
                }
            });
        }

        // Logic Step 3: Initialization
        function startInitialization() {
            goToScreen(3);
            const msgs = [
                "Establishing encrypted session...",
                "Connecting to registry node...",
                "Generating verification token...",
                "Preparing validation interface..."
            ];
            let i = 0;
            const textEl = getEl('init-text');
            
            const interval = setInterval(() => {
                i++;
                if (i < msgs.length) {
                    textEl.style.opacity = 0;
                    setTimeout(() => {
                        textEl.innerText = msgs[i];
                        textEl.style.opacity = 1;
                    }, 200);
                } else {
                    clearInterval(interval);
                    setTimeout(() => startScanner(), 800);
                }
            }, 1200);
        }

        // Logic Step 4: Scanner
        function startScanner() {
            goToScreen(4);
            const frame = getEl('scan-frame');
            const line = getEl('scan-line');
            const status = getEl('scan-status');
            const progress = getEl('scan-progress');
            
            // Wait 1s then detect
            setTimeout(() => {
                frame.classList.add('border-[#28A745]', 'shadow-[0_0_20px_rgba(40,167,69,0.3)]');
                frame.classList.remove('border-gray-700');
                line.classList.remove('hidden');
                line.classList.add('scan-line');
                status.innerText = "Object detected. Scanning geometry...";
                
                // Progress simulation
                let w = 0;
                const msgs = [
                    "Reading object geometry...",
                    "Extracting markers...",
                    "Verifying format signature...",
                    "Cross-checking registry pattern...",
                    "Finalizing validation request..."
                ];
                let msgIdx = 0;
                
                const scanInt = setInterval(() => {
                    w += 2;
                    progress.style.width = w + '%';
                    
                    if (w % 20 === 0 && msgIdx < msgs.length) {
                        status.innerText = msgs[msgIdx];
                        msgIdx++;
                    }

                    if (w >= 100) {
                        clearInterval(scanInt);
                        setTimeout(() => {
                            goToScreen(5);
                            setTimeout(() => startCountdown(), 3500); // Show success briefly
                        }, 500);
                    }
                }, 100); // 100ms * 50 steps = 5 seconds scan
            }, 1500);
        }

        // Logic Step 6: Countdown
        function startCountdown() {
            goToScreen(6);
            let timeLeft = 600; // 10:00 minutes in seconds
            // FOR DEMO PURPOSES: We will speed up time significantly so the user can see the end screen.
            // Comment out the next line to strictly follow real-time 10 mins.
            // We'll make it count down 1 minute every 1 second real time for "Cinematic Speed"
            
            const timerEl = getEl('timer');
            
            const tick = () => {
                const m = Math.floor(timeLeft / 60);
                const s = timeLeft % 60;
                timerEl.innerText = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
                
                if (timeLeft <= 0) {
                    clearInterval(timerInt);
                    goToScreen(7);
                }
                // Decrement. 
                // To simulate 10 minutes in 10 seconds for demo review:
                timeLeft -= 60; 
                // For real time: timeLeft -= 1;
            };

            tick(); // init render
            const timerInt = setInterval(tick, 1000);
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
      

<div className="w-full max-w-lg bg-white shadow-xl shadow-[#1A2433]/5 rounded-xl overflow-hidden border border-[#E0E0E0] relative min-h-[600px] flex flex-col" id="app-container">

<header className="bg-[#1A2433] text-white p-4 border-b border-[#2E3135] flex items-center justify-between shrink-0">
<div className="flex flex-col">
<h1 className="text-lg font-semibold tracking-tight leading-none">NMEX</h1>
<p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Global Processing Authority</p>
</div>
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-[#28A745] animate-pulse"></div>
<span className="text-xs font-medium text-gray-300">SECURE</span>
</div>
</header>

<div className="flex-1 flex flex-col fade-enter-active" id="screen-1">
<div className="bg-[#1A2433] p-4 shadow-inner">
<div className="flex items-start gap-3">
<iconify-icon className="text-[#E0E0E0] text-2xl shrink-0 mt-0.5" icon="solar:shield-warning-linear"></iconify-icon>
<div>
<h2 className="text-white text-sm font-semibold tracking-tight uppercase mb-1">Processing Requires Additional Verification</h2>
<p className="text-gray-400 text-xs leading-relaxed">
                            During automated registry synchronization, the identification reference linked to this file could not be matched. Manual verification is required.
                        </p>
</div>
</div>
</div>
<div className="p-6 flex-1 flex flex-col justify-center">
<div className="bg-white border border-[#E0E0E0] rounded-lg p-5 shadow-sm mb-6 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-[#2E3135]"></div>
<div className="grid grid-cols-2 gap-y-4">
<div className="col-span-2">
<span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">Record Holder</span>
<p className="text-sm font-semibold text-[#1A2433]">Sharday Charley SW</p>
</div>
<div>
<span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">Reference ID</span>
<p className="text-sm font-medium text-[#2E3135] font-mono">MMX-REG-8829</p>
</div>
<div>
<span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">Case Status</span>
<p className="text-sm font-medium text-amber-600">Pending Verification</p>
</div>
</div>
</div>
<div className="space-y-3 mt-auto">
<button className="w-full bg-[#1A2433] hover:bg-[#2E3135] text-white text-sm font-medium py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2" onclick="goToScreen(2)">
<iconify-icon className="text-lg" icon="solar:user-id-linear"></iconify-icon>
                        Review Record
                    </button>
<button className="w-full bg-white border border-[#E0E0E0] text-[#2E3135] hover:bg-gray-50 text-sm font-medium py-3 rounded-lg transition-colors">
                        Exit Portal
                    </button>
</div>
</div>
</div>

<div className="flex-1 flex flex-col screen-hidden" id="screen-2">
<div className="p-6 flex-1 overflow-y-auto">
<h2 className="text-[#1A2433] text-sm font-semibold uppercase tracking-wider mb-4 border-b border-[#E0E0E0] pb-2">Record Details</h2>

<div className="bg-white border border-[#E0E0E0] rounded-lg p-4 shadow-sm mb-4">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-[#1A2433] text-lg" icon="solar:user-circle-linear"></iconify-icon>
<h3 className="text-xs font-semibold uppercase tracking-wide text-[#1A2433]">Client Information</h3>
</div>
<div className="space-y-3">
<div className="flex justify-between border-b border-gray-100 pb-2">
<span className="text-xs text-gray-500">Name</span>
<span className="text-xs font-medium text-[#2E3135]">Sharday Charley SW</span>
</div>
<div className="flex justify-between border-b border-gray-100 pb-2">
<span className="text-xs text-gray-500">Location</span>
<span className="text-xs font-medium text-[#2E3135]">District 4, Sector A</span>
</div>
<div className="flex justify-between border-b border-gray-100 pb-2">
<span className="text-xs text-gray-500">Client ID Ref</span>
<span className="text-xs font-medium text-[#2E3135] font-mono">CLI-992-AZ</span>
</div>
</div>
</div>

<div className="bg-white border border-[#E0E0E0] rounded-lg p-4 shadow-sm mb-6">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-[#1A2433] text-lg" icon="solar:wheel-angle-linear"></iconify-icon>
<h3 className="text-xs font-semibold uppercase tracking-wide text-[#1A2433]">Asset Information</h3>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<span className="text-[10px] text-gray-500 block">Make/Model</span>
<span className="text-xs font-medium text-[#2E3135]">Spectre V-Class</span>
</div>
<div>
<span className="text-[10px] text-gray-500 block">Year</span>
<span className="text-xs font-medium text-[#2E3135]">2024</span>
</div>
<div className="col-span-2">
<span className="text-[10px] text-gray-500 block">VIN / Serial</span>
<span className="text-xs font-medium text-[#2E3135] font-mono tracking-tight">1G1RC6E47BU119283</span>
</div>
</div>
</div>

<div className="bg-[#F8FAFC] border border-[#E0E0E0] rounded-lg p-4 mb-4 flex gap-3">
<div className="shrink-0 mt-0.5">
<iconify-icon className="text-gray-400" icon="solar:info-square-linear"></iconify-icon>
</div>
<p className="text-[11px] text-gray-500 leading-snug">
                        By continuing you acknowledge this record belongs to you and you are initiating the verification procedure required to proceed with processing authorization.
                    </p>
</div>
</div>
<div className="p-4 border-t border-[#E0E0E0] bg-white">
<button className="w-full bg-[#1A2433] hover:bg-[#2E3135] text-white text-sm font-medium py-3 rounded-lg shadow-md transition-all" onclick="startInitialization()">
                    Continue Verification
                </button>
</div>
</div>

<div className="flex-1 flex flex-col items-center justify-center p-8 screen-hidden bg-white" id="screen-3">
<div className="text-center w-full max-w-xs">
<div className="mb-8 relative flex justify-center">
<div className="h-16 w-16 border-4 border-gray-100 border-t-[#1A2433] rounded-full animate-spin"></div>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-[#1A2433] text-xl opacity-50" icon="solar:shield-check-linear"></iconify-icon>
</div>
</div>
<h3 className="text-sm font-semibold text-[#1A2433] uppercase tracking-widest mb-2">Secure Environment Initialization</h3>
<div className="h-6 flex items-center justify-center">
<p className="text-xs text-gray-500 font-medium font-mono fade-enter-active" id="init-text">Establishing encrypted session...</p>
</div>
<div className="mt-8 loader-dots text-center">
<span></span><span></span><span></span>
</div>
</div>
</div>

<div className="flex-1 flex flex-col screen-hidden bg-[#11161F] text-white relative overflow-hidden" id="screen-4">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="p-6 text-center z-10">
<h2 className="text-sm font-semibold tracking-widest uppercase mb-1">Position Document Within Frame</h2>
<p className="text-[11px] text-gray-400">Place the object inside the guide area. The system will detect it automatically.</p>
</div>

<div className="flex-1 flex items-center justify-center p-6 relative z-10">
<div className="w-full aspect-[4/3] max-w-sm border border-gray-700 rounded-lg relative transition-all duration-700" id="scan-frame">

<div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white rounded-tl-lg"></div>
<div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white rounded-tr-lg"></div>
<div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white rounded-bl-lg"></div>
<div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white rounded-br-lg"></div>

<div className="hidden h-full" id="scan-line"></div>

<div className="absolute inset-4 border border-dashed border-gray-800 flex items-center justify-center">
<iconify-icon className="text-6xl text-gray-700 opacity-20" icon="solar:document-text-linear"></iconify-icon>
</div>
</div>
</div>

<div className="p-6 bg-[#0B0F15] border-t border-gray-800 z-10">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-gray-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-gray-400" icon="solar:scanner-linear"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-xs font-mono text-[#28A745]" id="scan-status">Waiting for object...</p>
<div className="w-full bg-gray-800 h-1 mt-2 rounded-full overflow-hidden">
<div className="bg-[#28A745] h-full w-0 transition-all duration-300" id="scan-progress"></div>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col items-center justify-center p-8 screen-hidden bg-white text-center" id="screen-5">
<div className="mb-6 rounded-full bg-green-50 p-6 pulse-soft ring-1 ring-[#28A745]/20">
<iconify-icon className="text-[#28A745] text-5xl" icon="solar:verified-check-linear"></iconify-icon>
</div>
<h2 className="text-lg font-semibold text-[#1A2433] tracking-tight mb-2">VERIFICATION PASSED</h2>
<p className="text-sm text-gray-500 max-w-xs mx-auto leading-relaxed mb-8">
                All primary profile information has been successfully validated. Final authorization activation is now being prepared.
            </p>
<div className="w-full max-w-xs bg-gray-50 rounded p-3 border border-gray-100 flex items-center justify-between">
<span className="text-xs text-gray-400 font-medium">Validation Hash</span>
<span className="text-xs font-mono text-[#1A2433]">0x882...99A</span>
</div>
</div>

<div className="flex-1 flex flex-col items-center justify-center p-8 screen-hidden bg-[#1A2433] text-white relative overflow-hidden" id="screen-6">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#2E3135] rounded-full blur-3xl opacity-50"></div>
<div className="relative z-10 text-center w-full">
<div className="mb-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></div>
<span className="text-[10px] uppercase tracking-widest text-gray-300">Processing</span>
</div>
<h2 className="text-sm font-semibold tracking-widest uppercase text-gray-200">Authorization Activation In Progress</h2>
</div>
<div className="my-8">
<div className="text-7xl font-light font-mono tabular-nums tracking-tighter text-white drop-shadow-xl" id="timer">10:00</div>
</div>
<p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed mb-8">
                    Your record has been approved. The system is generating your registry authorization credentials. <br/>Please keep this page open.
                </p>
<div className="text-[10px] text-gray-500 border-t border-white/10 pt-4 mt-4 inline-block px-4">
                    Registry node credentials will be issued once activation finalizes.
                </div>
</div>
</div>

<div className="flex-1 flex flex-col screen-hidden bg-[#F8FAFC]" id="screen-7">
<div className="flex-1 flex flex-col justify-center p-6">
<div className="text-center mb-8">
<div className="inline-flex items-center gap-2 bg-[#28A745]/10 text-[#28A745] px-4 py-1.5 rounded-full border border-[#28A745]/20 mb-4 shadow-sm">
<iconify-icon className="text-sm" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-xs font-semibold tracking-wide uppercase">Authorization Activated</span>
</div>
<h2 className="text-[#1A2433] text-2xl font-semibold tracking-tight">Access Granted</h2>
</div>

<div className="bg-white border border-[#E0E0E0] rounded-xl shadow-md overflow-hidden mb-6">
<div className="bg-[#1A2433] p-4 flex justify-between items-center">
<span className="text-xs text-gray-400 uppercase tracking-wider">Registry Node ID</span>
<span className="text-xs text-white font-mono" id="node-id">RNX-84721-A66-204</span>
</div>
<div className="p-5 space-y-4">
<div className="flex justify-between items-center border-b border-gray-100 pb-3">
<span className="text-xs text-gray-500">Authorization Stage</span>
<span className="text-xs font-semibold text-[#28A745] bg-green-50 px-2 py-0.5 rounded border border-green-100">ACTIVE</span>
</div>
<div className="flex justify-between items-center border-b border-gray-100 pb-3">
<span className="text-xs text-gray-500">Timestamp</span>
<span className="text-xs font-medium text-[#2E3135] font-mono" id="final-timestamp"></span>
</div>
<div className="pt-2">
<p className="text-[10px] text-gray-400 uppercase tracking-wider mb-2">Linked Authorization Amount</p>
<div className="flex justify-between items-center mb-1">
<span className="text-xs text-[#2E3135]">Node Registration Code</span>
<span className="text-xs font-medium text-[#1A2433]">$500.00</span>
</div>
<div className="flex justify-between items-center mb-3">
<span className="text-xs text-[#2E3135]">Biometric Validation Binding</span>
<span className="text-xs font-medium text-[#1A2433]">$500.00</span>
</div>
<div className="flex justify-between items-center border-t border-dashed border-gray-300 pt-3">
<span className="text-xs font-semibold text-[#1A2433]">Total Authorized</span>
<span className="text-sm font-bold text-[#1A2433]">$1,000.00</span>
</div>
</div>
</div>
</div>
<p className="text-xs text-gray-500 text-center mb-6 px-4">
                    Present this authorization code to the assigned processing administrator to finalize the release procedure.
                </p>
<div className="space-y-3">
<button className="w-full bg-[#1A2433] hover:bg-[#2E3135] text-white text-sm font-medium py-3 rounded-lg shadow-md transition-all flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:copy-linear"></iconify-icon>
                        Copy Authorization Code
                    </button>
<button className="w-full bg-white border border-[#E0E0E0] text-[#1A2433] hover:bg-gray-50 text-sm font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:file-download-linear"></iconify-icon>
                        Download Slip (PDF)
                    </button>
<button className="w-full text-xs text-gray-400 hover:text-[#1A2433] py-2 transition-colors">
                        Close Portal
                    </button>
</div>
</div>
</div>
</div>


    </>
  );
}
