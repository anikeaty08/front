import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const REQUIRED_KEY = "SH1143845";
        
        const loginView = document.getElementById('login-view');
        const panelView = document.getElementById('panel-view');
        const errorMsg = document.getElementById('login-error');
        const codeInput = document.getElementById('access-code');

        function authenticate() {
            if (codeInput.value === REQUIRED_KEY) {
                errorMsg.classList.add('hidden');
                
                // Fade out login
                loginView.style.opacity = '0';
                setTimeout(() => {
                    loginView.classList.add('hidden');
                    panelView.classList.remove('hidden');
                    // Fade in panel
                    setTimeout(() => {
                        panelView.style.opacity = '1';
                    }, 50);
                }, 300);
            } else {
                errorMsg.classList.remove('hidden');
                codeInput.value = '';
                codeInput.focus();
            }
        }

        function logout() {
            codeInput.value = '';
            panelView.style.opacity = '0';
            
            setTimeout(() => {
                panelView.classList.add('hidden');
                loginView.classList.remove('hidden');
                resetPanel();
                setTimeout(() => {
                    loginView.style.opacity = '1';
                }, 50);
            }, 300);
        }

        function executeModification() {
            const email = document.getElementById('target-id').value;
            const oldP = document.getElementById('current-p').value;
            const newP = document.getElementById('new-p').value;

            if (!email || !oldP || !newP) {
                // Flash border to indicate required fields
                document.getElementById('target-id').parentElement.classList.add('ring-1', 'ring-red-500/50');
                setTimeout(() => document.getElementById('target-id').parentElement.classList.remove('ring-1', 'ring-red-500/50'), 1000);
                return;
            }

            const loader = document.getElementById('process-loader');
            const success = document.getElementById('process-success');

            loader.classList.remove('hidden');
            loader.classList.add('flex');

            // Simulate network request and processing time
            setTimeout(() => {
                loader.classList.add('hidden');
                loader.classList.remove('flex');
                
                success.classList.remove('hidden');
                success.classList.add('flex');
            }, 2800);
        }

        function resetPanel() {
            document.getElementById('target-id').value = '';
            document.getElementById('current-p').value = '';
            document.getElementById('new-p').value = '';
            
            const success = document.getElementById('process-success');
            success.classList.add('hidden');
            success.classList.remove('flex');
        }

        // Handle Enter key for login
        codeInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                authenticate();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="w-full max-w-sm flex flex-col gap-8 transition-opacity duration-300" id="login-view">
<div className="flex flex-col items-center justify-center text-center gap-2">
<div className="w-12 h-12 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center mb-2 shadow-sm">
<iconify-icon className="text-white text-2xl" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h1 className="text-xl font-semibold tracking-tight text-white">SYS.AUTH</h1>
<p className="text-sm text-neutral-500">Enter access key to continue</p>
</div>
<div className="bg-[#0f0f0f] border border-neutral-800/60 rounded-2xl p-6 shadow-2xl">
<div className="flex flex-col gap-5">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-neutral-400" htmlFor="access-code">Security Key</label>
<div className="relative group">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-white transition-colors" icon="solar:lock-password-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full bg-black border border-neutral-800 text-sm rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all text-neutral-200 placeholder:text-neutral-600 shadow-inner" id="access-code" placeholder="••••••••" type="password"/>
</div>
</div>
<button className="w-full bg-white text-black font-medium text-sm rounded-xl py-2.5 hover:bg-neutral-200 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-2" onclick="authenticate()">
                    Verify Identity
                    <iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="hidden flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 px-3 py-2 rounded-lg mt-1" id="login-error">
<iconify-icon className="text-base" icon="solar:danger-triangle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">Authentication failed.</span>
</div>
</div>
</div>
<p className="text-[10px] text-neutral-600 text-center uppercase tracking-widest">End-to-End Encrypted</p>
</main>

<main className="hidden w-full max-w-md flex-col gap-6 opacity-0 transition-opacity duration-500" id="panel-view">

<header className="flex items-center justify-between border-b border-neutral-800/60 pb-5">
<div className="flex items-center gap-3.5">
<div className="w-9 h-9 rounded-lg bg-neutral-900 flex items-center justify-center border border-neutral-800 shadow-sm">
<iconify-icon className="text-white text-xl" icon="solar:gamepad-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h2 className="text-base font-semibold tracking-tight text-white leading-tight">Terminal V2.4</h2>
<p className="text-xs text-emerald-500 flex items-center gap-1 mt-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        API Connected
                    </p>
</div>
</div>
<button className="text-xs font-medium text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5" onclick="logout()">
<iconify-icon icon="solar:logout-2-linear" strokeWidth="1.5"></iconify-icon> Close Session
            </button>
</header>

<div className="bg-[#0f0f0f] border border-neutral-800/60 rounded-2xl p-1 shadow-2xl relative overflow-hidden">

<div className="absolute inset-0 bg-[#0a0a0a]/80 backdrop-blur-md z-20 hidden flex-col items-center justify-center gap-4 rounded-2xl" id="process-loader">
<iconify-icon className="animate-spin text-4xl text-white" icon="solar:refresh-circle-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-center flex flex-col gap-1">
<span className="text-sm font-medium text-white">Injecting Payload...</span>
<span className="text-xs text-neutral-400">Communicating with auth servers</span>
</div>
</div>

<div className="absolute inset-0 bg-[#0a0a0a]/95 backdrop-blur-xl z-30 hidden flex-col items-center justify-center gap-4 rounded-2xl border border-neutral-800" id="process-success">
<div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
<iconify-icon className="text-2xl" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-center">
<h3 className="text-base font-semibold text-white tracking-tight mb-1">Credentials Overwritten</h3>
<p className="text-xs text-neutral-400 max-w-[200px] mx-auto">The target account data has been successfully modified.</p>
</div>
<button className="mt-2 bg-white text-black text-xs font-medium px-5 py-2 rounded-lg hover:bg-neutral-200 transition-colors" onclick="resetPanel()">Acknowledge</button>
</div>

<div className="bg-[#0a0a0a] rounded-xl p-5 border border-neutral-800/40">
<div className="space-y-4">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-neutral-400">Target Identifier (Email)</label>
<div className="relative group">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-white transition-colors" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full bg-[#0f0f0f] border border-neutral-800 text-sm rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-neutral-500 transition-all text-neutral-200 placeholder:text-neutral-600" id="target-id" placeholder="player@domain.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-neutral-400">Current Hash/Pass</label>
<div className="relative group">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-neutral-300 transition-colors" icon="solar:lock-keyhole-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full bg-[#0f0f0f] border border-neutral-800 text-sm rounded-xl pl-10 pr-3 py-2.5 focus:outline-none focus:border-neutral-600 transition-all text-neutral-200 placeholder:text-neutral-600" id="current-p" placeholder="Required" type="password"/>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-neutral-400">Replacement Data</label>
<div className="relative group">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-white transition-colors" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full bg-[#0f0f0f] border border-neutral-700 text-sm rounded-xl pl-10 pr-3 py-2.5 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-white placeholder:text-neutral-500" id="new-p" placeholder="New Password" type="password"/>
</div>
</div>
</div>

<div className="pt-2 pb-1 flex items-center justify-between">
<span className="text-xs font-medium text-neutral-400">Force Sign-out all devices</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-white peer-checked:after:bg-black"></div>
</label>
</div>
</div>
</div>
<div className="p-2">
<button className="w-full bg-white text-black font-medium text-sm rounded-xl py-2.5 hover:bg-neutral-200 active:scale-[0.98] transition-all flex items-center justify-center gap-2" onclick="executeModification()">
<iconify-icon className="text-base" icon="solar:server-square-update-linear" strokeWidth="1.5"></iconify-icon>
                    Execute Modification
                </button>
</div>
</div>
<div className="flex justify-center gap-6 text-[10px] text-neutral-500 uppercase tracking-widest font-medium">
<span>Status: Operational</span>
<span className="w-px h-3 bg-neutral-800"></span>
<span>Latency: 24ms</span>
</div>
</main>


    </>
  );
}
