import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
neutral: {
850: '#1a1a1a',
925: '#0f0f0f',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'scan': 'scan 2s linear infinite',
},
keyframes: {
scan: {
'0%': { transform: 'translateX(-100%)' },
'100%': { transform: 'translateX(100%)' }
}
}
}
}
}



        function startScan() {
            // Get Elements
            const inputView = document.getElementById('input-view');
            const scanningView = document.getElementById('scanning-view');
            const mainTitle = document.getElementById('main-title');
            const subTitle = document.getElementById('sub-title');
            const statusIcon = document.getElementById('status-icon');
            const iconContainer = document.getElementById('icon-container');
            const scannerGlow = document.getElementById('scanner-glow');
            const progressBar = document.getElementById('progress-bar');
            const scanStatus = document.getElementById('scan-status');

            // 1. Fade out inputs
            inputView.classList.add('opacity-0', 'translate-y-4', 'scale-95');
            inputView.style.pointerEvents = 'none';

            // 2. Update Header
            mainTitle.innerText = "System Integrity Scan";
            subTitle.innerText = "Verifying credentials against the secure database. Do not close this window.";
            
            // 3. Animate Icon
            statusIcon.setAttribute('icon', 'lucide:scan-line');
            statusIcon.classList.add('text-emerald-400');
            iconContainer.classList.remove('border-white/10');
            iconContainer.classList.add('border-emerald-500/30', 'bg-emerald-500/10');
            scannerGlow.classList.remove('opacity-0');

            // 4. Show Scanning View
            setTimeout(() => {
                inputView.classList.add('hidden');
                scanningView.classList.remove('opacity-0', 'pointer-events-none', 'scale-95');
                
                // Start Progress
                setTimeout(() => {
                    progressBar.style.width = '75%';
                }, 100);

                // Update text sequence
                setTimeout(() => {
                    scanStatus.innerText = "ANALYZING PACKETS...";
                }, 1500);

                setTimeout(() => {
                    scanStatus.innerText = "VERIFYING SIGNATURE...";
                    progressBar.style.width = '100%';
                }, 2800);

            }, 400);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-indigo-500/10 blur-[120px] rounded-full opacity-50"></div>
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
</div>

<nav className="relative z-10 w-full flex justify-between items-center px-6 py-6 md:px-12">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-white rounded-sm"></div>
<span className="text-sm font-semibold tracking-tight text-neutral-200">SENTINEL</span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-neutral-900/50 border border-white/5 text-[10px] font-medium text-neutral-400 backdrop-blur-sm">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                Systems Online
            </div>
</div>
</nav>

<main className="flex-1 flex flex-col z-10 pt-4 pr-4 pb-4 pl-4 relative items-center justify-center">
<div className="w-full max-w-sm mx-auto min-h-[320px] flex flex-col justify-center relative">

<div className="flex justify-center mb-8 relative">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-neutral-800 to-neutral-900 border border-white/10 flex items-center justify-center shadow-2xl shadow-black/50 transition-all duration-700" id="icon-container">
<iconify-icon className="text-neutral-300 transition-all duration-500" icon="lucide:shield-check" id="status-icon" strokeWidth="1.5" width="20"></iconify-icon>
</div>

<div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full opacity-0 transition-opacity duration-700" id="scanner-glow"></div>
</div>

<div className="text-center mb-8 space-y-2">
<h1 className="text-2xl font-semibold text-white tracking-tight transition-all duration-500" id="main-title">Identity Verification</h1>
<p className="text-xs text-neutral-500 transition-all duration-500" id="sub-title">Enter the 6-digit session PIN provided by your administrator to initiate the system scan.</p>
</div>

<div className="space-y-6 transition-all duration-500 opacity-100 translate-y-0" id="input-view">

<div className="flex gap-2 justify-center">
<input autofocus="" className="focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500/20 focus:bg-neutral-900 transition-all outline-none caret-white placeholder-neutral-700 text-lg text-white font-mono text-center bg-[#0a0a0a] w-10 h-12 border-neutral-800 border rounded-lg" maxlength="1" placeholder="0" type="text" value="8"/>
<input className="w-10 h-12 bg-[#0a0a0a] border border-neutral-800 rounded-lg text-center font-mono text-lg text-white focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500/20 focus:bg-neutral-900 transition-all outline-none caret-white placeholder-neutral-700" maxlength="1" placeholder="0" type="text" value="4"/>
<input className="w-10 h-12 bg-[#0a0a0a] border border-neutral-800 rounded-lg text-center font-mono text-lg text-white focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500/20 focus:bg-neutral-900 transition-all outline-none caret-white placeholder-neutral-700" maxlength="1" placeholder="0" type="text" value="9"/>
<div className="w-2 flex items-center justify-center text-neutral-700">-</div>
<input className="w-10 h-12 bg-[#0a0a0a] border border-neutral-800 rounded-lg text-center font-mono text-lg text-white focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500/20 focus:bg-neutral-900 transition-all outline-none caret-white placeholder-neutral-700" maxlength="1" placeholder="0" type="text" value="1"/>
<input className="w-10 h-12 bg-[#0a0a0a] border border-neutral-800 rounded-lg text-center font-mono text-lg text-white focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500/20 focus:bg-neutral-900 transition-all outline-none caret-white placeholder-neutral-700" maxlength="1" placeholder="0" type="text" value="3"/>
<input className="w-10 h-12 bg-[#0a0a0a] border border-neutral-800 rounded-lg text-center font-mono text-lg text-white focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500/20 focus:bg-neutral-900 transition-all outline-none caret-white placeholder-neutral-700" maxlength="1" placeholder="0" type="text" value="7"/>
</div>

<button className="group relative w-full h-10 bg-white hover:bg-neutral-200 text-black text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2 overflow-hidden active:scale-[0.98]" onclick="startScan()">
<span className="relative z-10">Start Integrity Check</span>
<iconify-icon className="relative z-10 transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
</button>

<div className="flex items-center justify-center gap-1.5 pt-2">
<iconify-icon className="text-neutral-600" icon="lucide:help-circle" width="12"></iconify-icon>
<a className="text-[10px] text-neutral-500 hover:text-neutral-300 transition-colors" href="#">Where do I find my PIN?</a>
</div>
</div>

<div className="absolute inset-0 flex flex-col items-center justify-start pt-28 opacity-0 pointer-events-none transition-all duration-700 scale-95" id="scanning-view">

<div className="w-full max-w-[240px] h-1 bg-neutral-800 rounded-full overflow-hidden relative mb-4">
<div className="absolute left-0 top-0 h-full bg-emerald-500 w-0 transition-all duration-[3000ms] ease-out rounded-full" id="progress-bar"></div>
<div className="absolute inset-0 scan-line animate-scan opacity-50"></div>
</div>

<div className="font-mono text-[10px] text-emerald-500 mb-2 flex items-center gap-2">
<iconify-icon className="animate-spin" icon="lucide:loader-2" width="12"></iconify-icon>
<span id="scan-status">INITIATING PROTOCOL...</span>
</div>

<div className="font-mono text-[10px] text-neutral-600 space-y-1 text-center">
<p className="opacity-0 animate-[fadeIn_0.5s_ease-out_0.5s_forwards]">Verifying hash key...</p>
<p className="opacity-0 animate-[fadeIn_0.5s_ease-out_1.5s_forwards]">Connecting to secure node...</p>
</div>
</div>
</div>
</main>

<footer className="relative z-10 p-6 md:px-12 w-full flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-neutral-600">
<div className="flex gap-6">
<a className="hover:text-neutral-400 transition-colors" href="#">Client v2.4.1</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Privacy</a>
</div>
<div className="flex items-center gap-2 font-mono opacity-50">
<span>ID: 8829-AF</span>
<span className="w-px h-3 bg-neutral-800"></span>
<span>SECURE CONNECTION</span>
</div>
</footer>


    </>
  );
}
