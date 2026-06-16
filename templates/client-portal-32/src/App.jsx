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
background: '#0F0F11',
surface: '#1C1C1E',
surfaceHighlight: '#2C2C2E',
primary: '#0A84FF',
border: 'rgba(255, 255, 255, 0.08)',
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        const validEmail = "shardaycharley.sc@gmail.com";
        const validCode = "M202";

        function handleLogin(e) {
            e.preventDefault();
            
            const emailInput = document.getElementById('email');
            const codeInput = document.getElementById('access-code');
            const form = document.getElementById('login-form');
            const submitBtn = form.querySelector('button');

            if (emailInput.value === validEmail && codeInput.value === validCode) {
                // Success Flow
                
                // 1. Transition Button State
                submitBtn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin text-lg"></iconify-icon>';
                submitBtn.classList.add('opacity-80', 'cursor-not-allowed');
                
                setTimeout(() => {
                    // 2. Hide Login, Show Success
                    document.getElementById('login-view').classList.add('hidden');
                    document.getElementById('success-view').classList.remove('hidden');
                    document.getElementById('success-view').classList.add('flex');

                    // 3. Wait then Show Dashboard
                    setTimeout(() => {
                        document.getElementById('success-view').classList.add('hidden');
                        document.getElementById('success-view').classList.remove('flex');
                        
                        const dashboard = document.getElementById('dashboard-view');
                        dashboard.classList.remove('hidden');
                        document.body.style.overflowY = 'auto'; // Enable scroll on dashboard
                    }, 2200);

                }, 800);
            } else {
                // Error Flow (Subtle visual cue only, no text message as per rules)
                const card = document.querySelector('.bg-surface');
                card.classList.add('shake');
                
                // Visual error indication on inputs
                emailInput.classList.add('border-red-500/50', 'bg-red-500/5', 'text-red-200');
                codeInput.classList.add('border-red-500/50', 'bg-red-500/5', 'text-red-200');

                setTimeout(() => {
                    card.classList.remove('shake');
                    emailInput.classList.remove('border-red-500/50', 'bg-red-500/5', 'text-red-200');
                    codeInput.classList.remove('border-red-500/50', 'bg-red-500/5', 'text-red-200');
                    // Clear password
                    codeInput.value = '';
                }, 1000);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="h-full w-full flex flex-col items-center justify-center relative z-10" id="login-view">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="w-full max-w-[480px] z-20 fade-in">

<div className="text-center mb-8">
<h1 className="text-3xl font-semibold tracking-tighter mb-1">NMEX</h1>
<p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">Verification &amp; Authorization Services</p>
</div>

<div className="bg-surface rounded-[24px] p-10 shadow-2xl border border-white/5 ring-1 ring-white/5 relative overflow-hidden backdrop-blur-sm">
<h2 className="text-2xl font-semibold text-center mb-8 tracking-tight">Client Portal</h2>
<form className="space-y-5" id="login-form" onsubmit="handleLogin(event)">

<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-400 ml-1">Email Address</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-gray-500 group-focus-within:text-white transition-colors" icon="solar:letter-linear"></iconify-icon>
</div>
<input autocomplete="off" className="block w-full pl-10 pr-3 py-3 bg-surfaceHighlight border border-transparent rounded-xl text-sm focus:ring-1 focus:ring-primary focus:border-primary placeholder-gray-600 transition-all outline-none" id="email" placeholder="" type="email"/>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-400 ml-1">Access Code</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-gray-500 group-focus-within:text-white transition-colors" icon="solar:lock-keyhole-linear"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-3 bg-surfaceHighlight border border-transparent rounded-xl text-sm font-mono tracking-widest focus:ring-1 focus:ring-primary focus:border-primary placeholder-gray-600 transition-all outline-none" id="access-code" placeholder="Enter Access Code" type="password"/>
</div>
</div>

<div className="flex items-center pt-1">
<input className="rounded border-gray-600 text-primary focus:ring-primary bg-transparent" id="remember" type="checkbox"/>
<label className="ml-2 block text-xs text-gray-400 select-none" htmlFor="remember">Remember this device</label>
</div>

<button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-sm font-medium text-white bg-primary hover:bg-[#007AFF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-[#1C1C1E] transition-all shadow-lg shadow-primary/20 mt-2" type="submit">
                        Log In
                    </button>
</form>
</div>
</div>
</section>

<section className="hidden h-full w-full flex flex-col items-center justify-center relative z-10" id="success-view">
<div className="bg-surface rounded-[24px] p-12 shadow-2xl border border-white/5 text-center w-[400px] fade-in">
<div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear" width="32"></iconify-icon>
</div>
<h2 className="text-lg font-medium text-white mb-2">Authentication Successful</h2>
<p className="text-sm text-gray-500 mb-6">Redirecting to agency dashboard...</p>

<div className="w-full bg-white/5 rounded-full h-1 overflow-hidden">
<div className="bg-green-500 h-1 rounded-full w-1/3 animate-[pulse_1s_infinite]"></div>
</div>
</div>
</section>

<section className="hidden min-h-screen bg-background relative overflow-y-auto" id="dashboard-view">
<div className="max-w-6xl mx-auto px-6 py-8 fade-in">

<header className="flex items-center justify-between mb-10 pb-6 border-b border-border">
<div className="flex items-center gap-4">

<div className="h-10 w-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center border border-white/10 shadow-inner">
<span className="font-medium text-sm text-white">SC</span>
</div>
<div>
<div className="flex items-center gap-3">
<h1 className="text-xl font-semibold tracking-tight text-white">Welcome, Sharday Charley</h1>
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-green-500/10 text-green-400 border border-green-500/20 tracking-wide">
<iconify-icon className="mr-1" icon="solar:verified-check-linear"></iconify-icon>
                                NM-REG-8829 · VERIFIED
                            </span>
</div>
<div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
<span className="flex items-center gap-1">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> Last login: Feb 13, 2026 – 10:47 AM
                            </span>
<span className="w-1 h-1 bg-gray-700 rounded-full"></span>
<span className="flex items-center gap-1">
<iconify-icon icon="solar:shield-keyhole-linear"></iconify-icon> Session via Access Code · ••••
                            </span>
</div>
</div>
</div>

<div className="text-right opacity-50">
<h3 className="font-bold tracking-tighter text-lg">NMEX</h3>
</div>
</header>

<nav className="flex space-x-1 mb-8">
<button className="px-4 py-2 text-sm font-medium text-white border-b-2 border-primary">Vehicle</button>
<button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">Logistics</button>
<button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">Payment</button>
<button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">Release</button>
<button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">Ongoing Verification</button>
</nav>

<main className="grid grid-cols-12 gap-6">

<div className="col-span-8 space-y-6">

<div className="bg-surface rounded-2xl border border-border overflow-hidden">
<div className="px-6 py-4 border-b border-border flex justify-between items-center bg-white/[0.02]">
<h3 className="text-sm font-medium text-white flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:wheel-angle-linear"></iconify-icon>
                                Vehicle Specification
                            </h3>
<span className="text-xs text-gray-500 font-mono">ID: VX-9920-L</span>
</div>
<div className="p-6 grid grid-cols-2 gap-y-8 gap-x-4">
<div>
<p className="text-[11px] uppercase tracking-wider text-gray-500 mb-1">Make &amp; Model</p>
<p className="text-lg font-medium text-white">Land Rover Range Rover</p>
<p className="text-sm text-gray-400">Autobiography LWB</p>
</div>
<div>
<p className="text-[11px] uppercase tracking-wider text-gray-500 mb-1">VIN Identification</p>
<p className="text-base font-mono text-white tracking-wide">SALGA2EF4GA******</p>
<div className="flex items-center gap-1 mt-1 text-green-400 text-xs">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
<span>Clean Title Verified</span>
</div>
</div>
<div>
<p className="text-[11px] uppercase tracking-wider text-gray-500 mb-1">Year</p>
<p className="text-sm text-white">2025</p>
</div>
<div>
<p className="text-[11px] uppercase tracking-wider text-gray-500 mb-1">Exterior / Interior</p>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-black border border-white/20"></div>
<span className="text-sm text-white mr-3">Santorini Black</span>
<div className="w-3 h-3 rounded-full bg-[#8B5A2B] border border-white/20"></div>
<span className="text-sm text-white">Tan Leather</span>
</div>
</div>
</div>
</div>

<div className="bg-surface rounded-2xl border border-border p-6">
<h3 className="text-sm font-medium text-white mb-6">Processing Status</h3>
<div className="relative">
<div className="absolute left-[19px] top-0 bottom-0 w-[1px] bg-border"></div>

<div className="flex gap-4 mb-8 relative">
<div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center z-10 shrink-0">
<iconify-icon className="text-green-500" icon="solar:document-text-linear"></iconify-icon>
</div>
<div className="pt-2">
<p className="text-sm font-medium text-white">Documentation Submitted</p>
<p className="text-xs text-gray-500 mt-0.5">Feb 12, 2026 · 09:30 AM</p>
</div>
</div>

<div className="flex gap-4 mb-8 relative">
<div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center z-10 shrink-0">
<iconify-icon className="text-green-500" icon="solar:dollar-minimalistic-linear"></iconify-icon>
</div>
<div className="pt-2">
<p className="text-sm font-medium text-white">Payment Cleared</p>
<p className="text-xs text-gray-500 mt-0.5">Feb 12, 2026 · 02:15 PM</p>
</div>
</div>

<div className="flex gap-4 relative">
<div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center z-10 shrink-0 shadow-[0_0_15px_rgba(10,132,255,0.3)]">
<iconify-icon className="text-primary" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<div className="pt-2">
<p className="text-sm font-medium text-white">Pending Export Release</p>
<p className="text-xs text-blue-400 mt-0.5 animate-pulse">Awaiting Customs Approval</p>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-4 space-y-6">

<div className="bg-surface rounded-2xl border border-border p-5 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:bell-bing-linear" width="60"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white mb-2">Pending Action</h4>
<p className="text-xs text-gray-400 mb-4 leading-relaxed">Identity verification requires final biometrics confirmation before release.</p>
<button className="w-full py-2.5 bg-white text-black text-xs font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                            Complete Verification
                        </button>
</div>

<div className="bg-surface rounded-2xl border border-border p-5">
<h4 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:wallet-linear"></iconify-icon>
                            Transaction
                        </h4>
<div className="space-y-3">
<div className="flex justify-between text-xs">
<span className="text-gray-500">Subtotal</span>
<span className="text-gray-300">$184,500.00</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-gray-500">Agency Fees (2.5%)</span>
<span className="text-gray-300">$4,612.50</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-gray-500">Logistics</span>
<span className="text-gray-300">$2,400.00</span>
</div>
<div className="h-px bg-white/10 my-2"></div>
<div className="flex justify-between text-sm font-medium">
<span className="text-white">Total Paid</span>
<span className="text-green-400">$191,512.50</span>
</div>
</div>
</div>

<div className="bg-surface rounded-2xl border border-border p-5 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#2C2C2E] flex items-center justify-center text-gray-400">
<iconify-icon icon="solar:user-headset-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-500 uppercase tracking-wide">Assigned Agent</p>
<p className="text-sm text-white font-medium">Marcus V.</p>
</div>
<button className="ml-auto p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-400 hover:text-white">
<iconify-icon icon="solar:chat-line-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</main>
<footer className="mt-20 border-t border-border pt-8 text-center">
<p className="text-xs text-gray-500 font-medium">Nmex Verification &amp; Authorization Services · Client Portal v2.0</p>
<p className="text-[10px] text-gray-600 mt-2">Secure · Confidential · ©️ 2026</p>
</footer>
</div>
</section>



    </>
  );
}
