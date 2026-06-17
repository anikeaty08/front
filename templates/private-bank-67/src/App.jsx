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



        // Sidebar Injection Logic
        function loadSidebar() {
            const template = document.getElementById('sidebar-template');
            document.querySelectorAll('.sidebar-container').forEach(container => {
                container.innerHTML = ''; // Clear existing
                container.appendChild(template.content.cloneNode(true));
            });
            updateActiveNav();
        }

        function updateActiveNav() {
            // Simple logic to style active link based on visible view
            const isDashboard = !document.getElementById('view-dashboard').classList.contains('hidden');
            const isTransfers = !document.getElementById('view-transfers').classList.contains('hidden');
            
            document.querySelectorAll('#nav-dashboard').forEach(el => {
                el.className = isDashboard 
                    ? "flex items-center gap-3 px-3 py-2 text-sm font-medium text-white bg-white/10 rounded-lg border border-white/5 transition-all"
                    : "flex items-center gap-3 px-3 py-2 text-sm font-medium hover:text-white hover:bg-white/5 rounded-lg transition-all group text-slate-400";
            });
            
            document.querySelectorAll('#nav-transfers').forEach(el => {
                el.className = isTransfers 
                    ? "flex items-center gap-3 px-3 py-2 text-sm font-medium text-white bg-white/10 rounded-lg border border-white/5 transition-all"
                    : "flex items-center gap-3 px-3 py-2 text-sm font-medium hover:text-white hover:bg-white/5 rounded-lg transition-all group text-slate-400";
            });
        }

        function switchView(viewId) {
            // Hide all views
            ['view-login', 'view-otp', 'view-dashboard', 'view-transfers'].forEach(id => {
                document.getElementById(id).classList.add('hidden');
            });
            // Show target view
            const target = document.getElementById(viewId);
            target.classList.remove('hidden');
            
            // Animation
            target.classList.remove('fade-enter');
            void target.offsetWidth; 
            target.classList.add('fade-enter');

            // Sidebar logic
            if (viewId === 'view-dashboard' || viewId === 'view-transfers') {
                loadSidebar();
            }

            // OTP Focus logic
            if (viewId === 'view-otp') {
                setTimeout(() => document.querySelector('.otp-input').focus(), 100);
            }
        }

        function toggleModal(modalId) {
            const el = document.getElementById(modalId);
            if(el.classList.contains('hidden')) {
                el.classList.remove('hidden');
            } else {
                el.classList.add('hidden');
            }
        }

        function verifyTransferOTP() {
            // Simulate API call
            const btn = document.querySelector('#modal-otp button');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin"></iconify-icon> Verifying...';
            
            setTimeout(() => {
                toggleModal('modal-otp');
                toggleModal('modal-success');
                btn.innerHTML = originalText;
            }, 1500);
        }

        // Initial OTP Inputs logic
        const otpInputs = document.querySelectorAll('.otp-input');
        otpInputs.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                if(e.target.value.length === 1 && index < otpInputs.length - 1) {
                    otpInputs[index + 1].focus();
                }
            });
            input.addEventListener('keydown', (e) => {
                if(e.key === 'Backspace' && !e.target.value && index > 0) {
                    otpInputs[index - 1].focus();
                }
            });
        });
    
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
      

<main className="flex-1 flex flex-col items-center justify-center p-6 relative w-full h-full z-30" id="view-login">
<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-gradient-to-br from-amber-100/40 to-transparent rounded-full blur-[80px]"></div>
<div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-gradient-to-tr from-slate-200/40 to-transparent rounded-full blur-[80px]"></div>
</div>
<div className="w-full max-w-[400px] bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] rounded-2xl p-10 relative fade-enter">
<div className="text-center mb-10">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 text-white mb-6 shadow-lg shadow-slate-900/20 ring-4 ring-slate-50">
<iconify-icon icon="solar:shield-keyhole-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h1 className="text-xl font-semibold tracking-tight text-slate-900">Prominence Private</h1>
<p className="text-xs text-slate-400 mt-2 font-medium tracking-wide">WEALTH MANAGEMENT PORTAL</p>
</div>
<form className="space-y-5" onsubmit="event.preventDefault(); switchView('view-otp');">
<div className="space-y-1.5">
<label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider pl-1">Client ID</label>
<div className="relative group">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-800 transition-colors" icon="solar:user-circle-linear" width="18"></iconify-icon>
<input className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:bg-white focus:ring-1 focus:ring-slate-400/20 transition-all font-medium" placeholder="Client ID" type="text" value="sterling.archibald@pbi.ch"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider pl-1">Access Key</label>
<div className="relative group">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-800 transition-colors" icon="solar:lock-password-linear" width="18"></iconify-icon>
<input className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:bg-white focus:ring-1 focus:ring-slate-400/20 transition-all font-medium" placeholder="••••••••••••" type="password" value="password123"/>
</div>
</div>
<button className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 mt-2" type="submit">
<span>Secure Sign In</span>
<iconify-icon className="text-slate-400" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
<div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center text-xs">
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">Recover Access</a>
<span className="text-slate-300">|</span>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">Contact Concierge</a>
</div>
</div>
</main>

<main className="hidden flex-1 flex flex-col items-center justify-center p-6 relative w-full h-full z-30" id="view-otp">
<div className="w-full max-w-[400px] bg-white border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-10 relative fade-enter">
<button className="absolute top-6 left-6 text-slate-400 hover:text-slate-600 transition-colors" onclick="switchView('view-login')">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<div className="text-center mb-8 mt-2">
<div className="w-12 h-12 mx-auto bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mb-4">
<iconify-icon icon="solar:smartphone-2-linear" width="24"></iconify-icon>
</div>
<h2 className="text-lg font-semibold text-slate-900">2-Step Verification</h2>
<p className="text-xs text-slate-500 mt-2 px-4">Enter the 6-digit dynamic code generated by your hardware token or mobile app.</p>
</div>
<form onsubmit="event.preventDefault(); switchView('view-dashboard');">
<div className="flex gap-2 justify-center mb-8">
<input autofocus="" className="w-10 h-12 text-center text-lg font-medium bg-slate-50 border border-slate-200 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 focus:bg-white transition-all outline-none otp-input" maxlength="1" type="text"/>
<input className="w-10 h-12 text-center text-lg font-medium bg-slate-50 border border-slate-200 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 focus:bg-white transition-all outline-none otp-input" maxlength="1" type="text"/>
<input className="w-10 h-12 text-center text-lg font-medium bg-slate-50 border border-slate-200 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 focus:bg-white transition-all outline-none otp-input" maxlength="1" type="text"/>
<span className="self-center text-slate-300">-</span>
<input className="w-10 h-12 text-center text-lg font-medium bg-slate-50 border border-slate-200 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 focus:bg-white transition-all outline-none otp-input" maxlength="1" type="text"/>
<input className="w-10 h-12 text-center text-lg font-medium bg-slate-50 border border-slate-200 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 focus:bg-white transition-all outline-none otp-input" maxlength="1" type="text"/>
<input className="w-10 h-12 text-center text-lg font-medium bg-slate-50 border border-slate-200 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 focus:bg-white transition-all outline-none otp-input" maxlength="1" type="text"/>
</div>
<button className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-lg shadow-lg shadow-amber-600/20 transition-all flex items-center justify-center gap-2" type="submit">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
<span>Verify Identity</span>
</button>
</form>
</div>
</main>

<template id="sidebar-template">
<aside className="w-[260px] bg-slate-950 text-slate-400 flex flex-col border-r border-slate-800 shrink-0 z-20">
<div className="h-16 flex items-center gap-3 px-6 border-b border-slate-800/50">
<div className="w-7 h-7 bg-gradient-to-tr from-amber-400 to-amber-600 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-amber-500/20">P</div>
<span className="text-white font-medium tracking-tight">PROMINENCE</span>
</div>
<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-0.5 custom-scroll">
<div className="px-3 mb-2 text-[10px] uppercase tracking-widest font-semibold text-slate-600">Main</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all group" href="#" id="nav-dashboard" onclick="switchView('view-dashboard')">
<iconify-icon className="group-hover:text-amber-500 transition-colors" icon="solar:widget-linear"></iconify-icon>
                    Overview
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all group" href="#" id="nav-transfers" onclick="switchView('view-transfers')">
<iconify-icon className="group-hover:text-amber-500 transition-colors" icon="solar:card-transfer-linear"></iconify-icon>
                    Transfers
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium hover:text-white hover:bg-white/5 rounded-lg transition-all group" href="#">
<iconify-icon className="group-hover:text-amber-500 transition-colors" icon="solar:wallet-money-linear"></iconify-icon>
                    Accounts
                </a>
<div className="px-3 mb-2 mt-6 text-[10px] uppercase tracking-widest font-semibold text-slate-600">Services</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium hover:text-white hover:bg-white/5 rounded-lg transition-all group" href="#">
<iconify-icon className="group-hover:text-amber-500 transition-colors" icon="solar:users-group-rounded-linear"></iconify-icon>
                    Beneficiaries
                </a>
</nav>
<div className="p-4 border-t border-slate-800/50">
<button className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all" onclick="switchView('view-login')">
<iconify-icon icon="solar:logout-2-linear"></iconify-icon>
                    Sign Out
                </button>
</div>
</aside>
</template>

<div className="hidden h-screen w-full flex overflow-hidden bg-white fade-enter" id="view-dashboard">
<div className="sidebar-container h-full"></div> 
<div className="flex-1 flex flex-col h-full overflow-hidden bg-slate-50/50 relative">
<header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
<div className="flex items-center gap-4">
<h2 className="text-sm font-semibold text-slate-800">Overview</h2>
<span className="h-4 w-px bg-slate-200"></span>
<p className="text-xs text-slate-500">Welcome back, <span className="text-slate-900 font-medium">Mr. Archibald</span></p>
</div>
<div className="flex items-center gap-4">
<button className="relative w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-amber-500 rounded-full ring-2 ring-white"></span>
</button>
<div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-medium border-2 border-slate-100 ring-1 ring-slate-200">SA</div>
</div>
</header>
<main className="flex-1 overflow-y-auto custom-scroll p-8">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
<div>
<p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Total Liquidity Position</p>
<div className="flex items-baseline gap-2">
<h1 className="text-3xl font-light tracking-tight text-slate-900">$12,450,220.00</h1>
<span className="text-sm font-medium text-emerald-600 flex items-center gap-0.5"><iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 2.4%</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="bg-slate-900 text-white p-6 rounded-xl shadow-xl shadow-slate-900/10 relative overflow-hidden group">
<div className="absolute -right-4 -top-4 text-white/5 group-hover:text-white/10 transition-colors duration-500"><iconify-icon icon="solar:dollar-minimalistic-linear" width="120"></iconify-icon></div>
<div className="flex justify-between items-start mb-6 relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10"><span className="text-lg font-light">$</span></div>
<span className="px-2 py-1 rounded bg-amber-500 text-[10px] font-bold text-white tracking-wide">PRIMARY</span>
</div>
<div className="relative z-10">
<p className="text-slate-400 text-xs font-medium mb-1">USD Operating</p>
<p className="text-2xl font-light tracking-tight">$8,240,500.00</p>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100 text-slate-600"><span className="text-lg font-light">€</span></div>
</div>
<div>
<p className="text-slate-500 text-xs font-medium mb-1">EUR Holdings</p>
<p className="text-2xl font-light tracking-tight text-slate-900">€2,850,120.50</p>
</div>
</div>
</div>
</div>
</main>
</div>
</div>

<div className="hidden h-screen w-full flex overflow-hidden bg-white fade-enter" id="view-transfers">
<div className="sidebar-container h-full"></div> 
<div className="flex-1 flex flex-col h-full overflow-hidden bg-slate-50/50 relative">
<header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
<div className="flex items-center gap-4">
<h2 className="text-sm font-semibold text-slate-800">Wire Transfer</h2>
<span className="h-4 w-px bg-slate-200"></span>
<p className="text-xs text-slate-500">New outgoing payment</p>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full border border-slate-200">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-[10px] font-medium text-slate-600 uppercase tracking-wide">SWIFT Network: Active</span>
</div>
<div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-medium border-2 border-slate-100 ring-1 ring-slate-200">SA</div>
</div>
</header>
<main className="flex-1 overflow-y-auto custom-scroll p-8">
<div className="max-w-4xl mx-auto space-y-6">

<div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
<div className="p-6 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
<h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
<iconify-icon className="text-amber-600" icon="solar:card-send-linear"></iconify-icon>
                                Payment Details
                            </h3>
<span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">SECURE TRANSACTION</span>
</div>
<div className="p-8 space-y-8">

<div className="space-y-3">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Source Account</label>
<div className="relative">
<div className="w-full p-4 bg-white border border-slate-200 rounded-xl hover:border-slate-300 cursor-pointer transition-all flex items-center justify-between group shadow-sm hover:shadow-md ring-1 ring-transparent hover:ring-slate-100">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
<span className="text-lg font-light">$</span>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">USD Operating Account</p>
<p className="text-xs text-slate-500 font-mono mt-0.5">**** 8829 • <span className="text-emerald-600 font-medium">Available: $8,100,000.00</span></p>
</div>
</div>
<iconify-icon className="text-slate-400 group-hover:text-slate-600" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="h-px bg-slate-100 w-full"></div>

<div className="space-y-3">
<div className="flex justify-between items-end">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Beneficiary</label>
<button className="text-xs font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1 transition-colors" onclick="toggleModal('modal-beneficiary')">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon> Add New Beneficiary
                                    </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="relative group col-span-2">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-800 transition-colors" icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:bg-white focus:ring-1 focus:ring-slate-400/20 transition-all font-medium" placeholder="Search saved beneficiaries..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2">
<span className="px-2 py-1 rounded-md bg-white border border-slate-200 text-[10px] font-medium text-slate-500 shadow-sm">Recent</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-3">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Amount</label>
<div className="relative group">
<div className="absolute left-0 top-0 bottom-0 w-12 flex items-center justify-center border-r border-slate-200 bg-slate-50 rounded-l-lg text-slate-500 font-serif">USD</div>
<input className="w-full pl-16 pr-4 py-3 bg-white border border-slate-200 rounded-lg text-lg font-semibold text-slate-900 placeholder-slate-300 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 transition-all" placeholder="0.00" type="number"/>
</div>
</div>
<div className="space-y-3">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">SWIFT / BIC</label>
<div className="relative group">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-800 transition-colors" icon="solar:global-linear" width="18"></iconify-icon>
<input className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:bg-white focus:ring-1 focus:ring-slate-400/20 transition-all font-medium uppercase font-mono" placeholder="ABCDUS33XXX" type="text"/>
</div>
</div>
<div className="col-span-2 space-y-3">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Reference (Optional)</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:bg-white focus:ring-1 focus:ring-slate-400/20 transition-all font-medium" placeholder="Invoice # or Message" type="text"/>
</div>
</div>
</div>

<div className="p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-slate-500">
<iconify-icon icon="solar:info-circle-linear"></iconify-icon>
<span>Fee: <span className="font-semibold text-slate-900">$45.00</span> will be deducted</span>
</div>
<div className="flex gap-3">
<button className="px-6 py-2.5 bg-white border border-slate-200 hover:border-slate-300 text-slate-600 text-xs font-bold rounded-lg shadow-sm hover:shadow transition-all" onclick="switchView('view-dashboard')">Cancel</button>
<button className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 active:scale-95 transition-all flex items-center gap-2" onclick="toggleModal('modal-otp')">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
                                    Submit Transfer
                                </button>
</div>
</div>
</div>
<div className="text-center">
<p className="text-[10px] text-slate-400">Transactions exceeding $1M require additional callback verification.</p>
</div>
</div>
</main>
</div>
</div>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center p-4" id="modal-beneficiary">
<div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm" onclick="toggleModal('modal-beneficiary')"></div>
<div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl relative z-10 modal-enter border border-slate-200">
<div className="p-6 border-b border-slate-100 flex justify-between items-center">
<h3 className="font-semibold text-slate-900">New Beneficiary</h3>
<button className="text-slate-400 hover:text-slate-600" onclick="toggleModal('modal-beneficiary')"><iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon></button>
</div>
<div className="p-6 space-y-4">
<div className="space-y-1.5">
<label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Account Holder Name</label>
<input className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-amber-500" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">IBAN / Account Number</label>
<input className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-amber-500" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Bank Name</label>
<input className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-amber-500" type="text"/>
</div>
</div>
<div className="p-4 border-t border-slate-100 flex justify-end gap-3 bg-slate-50 rounded-b-2xl">
<button className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800" onclick="toggleModal('modal-beneficiary')">Cancel</button>
<button className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-lg" onclick="toggleModal('modal-beneficiary')">Save Beneficiary</button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center p-4" id="modal-otp">
<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"></div>
<div className="bg-white w-full max-w-[360px] rounded-2xl shadow-2xl relative z-10 modal-enter border border-slate-200 overflow-hidden">
<div className="bg-slate-50 p-6 text-center border-b border-slate-100">
<div className="w-12 h-12 mx-auto bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-amber-600 mb-3">
<iconify-icon icon="solar:lock-password-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900">Security Challenge</h3>
<p className="text-xs text-slate-500 mt-1">Please enter the One-Time Password sent to your registered email address.</p>
</div>
<div className="p-6">
<div className="mb-6">
<label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 block text-center">Enter Email OTP</label>
<input className="w-full text-center py-3 bg-slate-50 border border-slate-200 rounded-lg text-xl tracking-[0.5em] font-mono font-medium focus:outline-none focus:border-amber-500 focus:bg-white transition-all" maxlength="6" placeholder="000000" type="text"/>
</div>
<button className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-lg shadow-lg shadow-slate-900/20 transition-all flex items-center justify-center gap-2" onclick="verifyTransferOTP()">
                    Confirm Transaction
                </button>
<button className="w-full mt-3 py-2 text-xs text-slate-400 hover:text-slate-600 font-medium" onclick="toggleModal('modal-otp')">Cancel</button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center p-4" id="modal-success">
<div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"></div>
<div className="bg-white w-full max-w-[360px] rounded-2xl shadow-2xl relative z-10 modal-enter border border-slate-200 overflow-hidden text-center p-8">
<div className="w-16 h-16 mx-auto bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6 border-4 border-emerald-100">
<iconify-icon icon="solar:check-read-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Transfer Submitted</h3>
<p className="text-sm text-slate-500 mb-8">Your transfer has been initiated securely. Status: <span className="font-semibold text-amber-600">Pending Admin Approval</span>.</p>
<button className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-semibold rounded-lg transition-all" onclick="toggleModal('modal-success'); switchView('view-dashboard');">
                Return to Dashboard
            </button>
</div>
</div>


    </>
  );
}
