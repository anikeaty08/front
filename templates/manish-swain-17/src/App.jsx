import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function showLogin() {
            document.getElementById('register-view').classList.add('hidden');
            document.getElementById('login-view').classList.remove('hidden');
        }
        function showRegister() {
            document.getElementById('login-view').classList.add('hidden');
            document.getElementById('register-view').classList.remove('hidden');
        }
        function enterStore(e) {
            e.preventDefault();
            const form = e.target;
            const btn = form.querySelector('button[type="submit"]');
            const originalContent = btn.innerHTML;
            
            // Loading State
            btn.disabled = true;
            btn.innerHTML = '<span class="iconify animate-spin" data-icon="lucide:loader-2" data-width="16"></span>';
            
            setTimeout(() => {
                document.getElementById('auth-wrapper').classList.add('hidden');
                document.getElementById('store-view').classList.remove('hidden');
                window.scrollTo(0,0);
            }, 1200);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      



<div className="flex-grow flex overflow-hidden p-4 relative items-center justify-center min-h-screen" id="auth-wrapper">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[800px] h-[500px] bg-neutral-900/30 rounded-full blur-[120px]"></div>
<div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-neutral-950 to-transparent"></div>
</div>

<div className="w-full max-w-[360px] fade-in" id="register-view">
<div className="mb-10 text-center">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 mb-6 shadow-2xl shadow-black/50">
<span className="iconify text-white" data-icon="lucide:aperture" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h1 className="text-2xl font-medium text-white tracking-tight mb-2">AUMSRISAIRAM</h1>
<p className="text-xs text-neutral-500 font-normal">Create an account to access the exclusive drop.</p>
</div>
<form className="space-y-3" onsubmit="enterStore(event)">
<div className="grid grid-cols-2 gap-3">
<div className="space-y-1">
<label className="text-[11px] uppercase tracking-wider font-medium text-neutral-500 ml-1">First Name</label>
<input className="w-full bg-neutral-900/40 border border-neutral-800 text-neutral-200 text-sm rounded-md focus:ring-1 focus:ring-neutral-600 focus:border-neutral-600 focus:bg-neutral-900 block px-3 py-2 outline-none transition-all placeholder-neutral-700" placeholder="Jane" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[11px] uppercase tracking-wider font-medium text-neutral-500 ml-1">Last Name</label>
<input className="w-full bg-neutral-900/40 border border-neutral-800 text-neutral-200 text-sm rounded-md focus:ring-1 focus:ring-neutral-600 focus:border-neutral-600 focus:bg-neutral-900 block px-3 py-2 outline-none transition-all placeholder-neutral-700" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-[11px] uppercase tracking-wider font-medium text-neutral-500 ml-1">Email</label>
<input className="w-full bg-neutral-900/40 border border-neutral-800 text-neutral-200 text-sm rounded-md focus:ring-1 focus:ring-neutral-600 focus:border-neutral-600 focus:bg-neutral-900 block px-3 py-2 outline-none transition-all placeholder-neutral-700" placeholder="name@example.com" required="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-[11px] uppercase tracking-wider font-medium text-neutral-500 ml-1">Password</label>
<input className="w-full bg-neutral-900/40 border border-neutral-800 text-neutral-200 text-sm rounded-md focus:ring-1 focus:ring-neutral-600 focus:border-neutral-600 focus:bg-neutral-900 block px-3 py-2 outline-none transition-all placeholder-neutral-700" placeholder="••••••••" required="" type="password"/>
</div>
<button className="group w-full text-black bg-white hover:bg-neutral-200 font-medium rounded-md text-sm px-5 py-2 transition-all mt-6 flex items-center justify-center gap-2 h-9" type="submit">
<span>Continue</span>
<span className="iconify group-hover:translate-x-0.5 transition-transform duration-300" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16"></span>
</button>
</form>
<div className="mt-8 text-center border-t border-neutral-900 pt-6">
<p className="text-xs text-neutral-600">
                    Already a member? 
                    <button className="text-neutral-400 hover:text-white transition-colors ml-1 font-medium" onclick="showLogin()">Log in</button>
</p>
</div>
</div>

<div className="w-full max-w-[360px] hidden fade-in" id="login-view">
<div className="mb-10 text-center">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 mb-6 shadow-2xl">
<span className="iconify text-white" data-icon="lucide:fingerprint" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h1 className="text-2xl font-medium text-white tracking-tight mb-2">Welcome Back</h1>
<p className="text-xs text-neutral-500 font-normal">Authenticate to resume your session.</p>
</div>
<form className="space-y-3" onsubmit="enterStore(event)">
<div className="space-y-1">
<label className="text-[11px] uppercase tracking-wider font-medium text-neutral-500 ml-1">Email</label>
<input className="w-full bg-neutral-900/40 border border-neutral-800 text-neutral-200 text-sm rounded-md focus:ring-1 focus:ring-neutral-600 focus:border-neutral-600 focus:bg-neutral-900 block px-3 py-2 outline-none transition-all placeholder-neutral-700" placeholder="name@example.com" required="" type="email"/>
</div>
<div className="space-y-1">
<div className="flex justify-between items-center mb-1">
<label className="text-[11px] uppercase tracking-wider font-medium text-neutral-500 ml-1">Password</label>
<a className="text-[11px] text-neutral-600 hover:text-neutral-400 transition-colors" href="#">Forgot?</a>
</div>
<input className="w-full bg-neutral-900/40 border border-neutral-800 text-neutral-200 text-sm rounded-md focus:ring-1 focus:ring-neutral-600 focus:border-neutral-600 focus:bg-neutral-900 block px-3 py-2 outline-none transition-all placeholder-neutral-700" placeholder="••••••••" required="" type="password"/>
</div>
<button className="group w-full text-black bg-white hover:bg-neutral-200 font-medium rounded-md text-sm px-5 py-2 transition-all mt-6 flex items-center justify-center gap-2 h-9" type="submit">
<span>Sign In</span>
<span className="iconify group-hover:translate-x-0.5 transition-transform duration-300" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16"></span>
</button>
</form>
<div className="mt-8 text-center border-t border-neutral-900 pt-6">
<p className="text-xs text-neutral-600">
                    Don't have an account? 
                    <button className="text-neutral-400 hover:text-white transition-colors ml-1 font-medium" onclick="showRegister()">Create ID</button>
</p>
</div>
</div>
</div>

<div className="hidden min-h-screen bg-neutral-950 fade-in pb-20" id="store-view">

<nav className="sticky top-0 z-50 glass-panel border-b border-neutral-800/60">
<div className="max-w-6xl mx-auto px-6">
<div className="flex justify-between h-14 items-center">
<div className="flex items-center gap-3">
<div className="inline-flex items-center justify-center w-6 h-6 rounded bg-neutral-100 border border-neutral-200">
<span className="iconify text-black" data-icon="lucide:aperture" data-strokeWidth="2" data-width="14"></span>
</div>
<span className="text-sm font-medium text-neutral-200 tracking-tight">Access</span>
</div>
<div className="flex items-center gap-5">
<button className="text-neutral-500 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:search" data-strokeWidth="1.5" data-width="18"></span>
</button>
<button className="text-neutral-500 hover:text-white transition-colors relative">
<span className="iconify" data-icon="lucide:shopping-bag" data-strokeWidth="1.5" data-width="18"></span>
<span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-white rounded-full"></span>
</button>
<div className="h-3 w-px bg-neutral-800"></div>
<button className="flex items-center gap-2 group">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-neutral-800 to-neutral-700 ring-1 ring-neutral-700 group-hover:ring-neutral-500 transition-all flex items-center justify-center text-[10px] font-medium text-white">JD</div>
</button>
</div>
</div>
</div>
</nav>

<div className="max-w-6xl mx-auto px-6 py-20 border-b border-neutral-900/50 relative overflow-hidden">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neutral-900/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="max-w-2xl relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/30 text-[11px] font-medium text-neutral-400 mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    New Collection Live
                </div>
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-6 leading-[1.1]">Curated assets for<br/>modern creators.</h2>
<p className="text-neutral-400 text-lg font-normal leading-relaxed mb-10 max-w-lg tracking-tight">
                    A unified marketplace for premium digital assets, limited physical goods, and expert consultations.
                </p>
<div className="flex flex-wrap gap-3">
<button className="text-black bg-white hover:bg-neutral-200 font-medium rounded-md text-sm px-6 py-2.5 transition-colors">Browse Store</button>
<button className="text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 font-medium rounded-md text-sm px-6 py-2.5 transition-all">View Orders</button>
</div>
</div>
</div>

<div className="max-w-6xl mx-auto px-6 py-20">
<div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
<div>
<h3 className="text-lg font-medium text-white tracking-tight">Featured Drops</h3>
<p className="text-sm text-neutral-500 mt-1">Handpicked selection for this week.</p>
</div>
<div className="flex gap-2">
<button className="p-2 border border-neutral-800 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-900 hover:border-neutral-700 transition-all">
<span className="iconify" data-icon="lucide:layout-grid" data-strokeWidth="1.5" data-width="16"></span>
</button>
<button className="p-2 border border-neutral-800 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-900 hover:border-neutral-700 transition-all">
<span className="iconify" data-icon="lucide:sliders-horizontal" data-strokeWidth="1.5" data-width="16"></span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">

<div className="group relative flex flex-col h-full cursor-pointer">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-900 border border-neutral-800 relative mb-4">
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
<span className="iconify text-neutral-700 group-hover:text-neutral-500 transition-colors" data-icon="lucide:box" data-strokeWidth="1" data-width="64"></span>
</div>
<div className="absolute top-3 left-3 flex gap-2">
<div className="bg-neutral-950/80 backdrop-blur border border-neutral-800/50 text-[10px] font-medium px-2 py-1 rounded text-neutral-300 tracking-wide flex items-center gap-1">
<span className="iconify" data-icon="lucide:download" data-width="10"></span> Digital
                             </div>
</div>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium text-white group-hover:text-neutral-200 transition-colors">Abstract 3D Pack</h3>
<span className="text-sm font-medium text-white">$49</span>
</div>
<p className="mt-1 text-xs text-neutral-500">OBJ, FBX, BLEND formats</p>
</div>
</div>

<div className="group relative flex flex-col h-full cursor-pointer">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-900 border border-neutral-800 relative mb-4">
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
<span className="iconify text-neutral-700 group-hover:text-neutral-500 transition-colors" data-icon="lucide:shirt" data-strokeWidth="1" data-width="64"></span>
</div>
<div className="absolute top-3 left-3 flex gap-2">
<div className="bg-neutral-950/80 backdrop-blur border border-neutral-800/50 text-[10px] font-medium px-2 py-1 rounded text-neutral-300 tracking-wide flex items-center gap-1">
<span className="iconify" data-icon="lucide:truck" data-width="10"></span> Physical
                             </div>
</div>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium text-white group-hover:text-neutral-200 transition-colors">Heavyweight Tee</h3>
<span className="text-sm font-medium text-white">$85</span>
</div>
<p className="mt-1 text-xs text-neutral-500">100% Cotton, Oversized Fit</p>
</div>
</div>

<div className="group relative flex flex-col h-full cursor-pointer">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-900 border border-neutral-800 relative mb-4">
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
<span className="iconify text-neutral-700 group-hover:text-neutral-500 transition-colors" data-icon="lucide:calendar" data-strokeWidth="1" data-width="64"></span>
</div>
<div className="absolute top-3 left-3 flex gap-2">
<div className="bg-neutral-950/80 backdrop-blur border border-neutral-800/50 text-[10px] font-medium px-2 py-1 rounded text-neutral-300 tracking-wide flex items-center gap-1">
<span className="iconify" data-icon="lucide:video" data-width="10"></span> Service
                             </div>
</div>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium text-white group-hover:text-neutral-200 transition-colors">Design Audit</h3>
<span className="text-sm font-medium text-white">$250</span>
</div>
<p className="mt-1 text-xs text-neutral-500">60m Video Call Review</p>
</div>
</div>

<div className="group relative flex flex-col h-full cursor-pointer">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-900 border border-neutral-800 relative mb-4">
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
<span className="iconify text-neutral-700 group-hover:text-neutral-500 transition-colors" data-icon="lucide:zap" data-strokeWidth="1" data-width="64"></span>
</div>
<div className="absolute top-3 left-3 flex gap-2">
<div className="bg-neutral-950/80 backdrop-blur border border-neutral-800/50 text-[10px] font-medium px-2 py-1 rounded text-neutral-300 tracking-wide flex items-center gap-1">
<span className="iconify" data-icon="lucide:infinity" data-width="10"></span> Access
                             </div>
</div>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium text-white group-hover:text-neutral-200 transition-colors">Pro Membership</h3>
<span className="text-sm font-medium text-white">$29<span className="text-neutral-500 font-normal">/mo</span></span>
</div>
<p className="mt-1 text-xs text-neutral-500">All access + Source files</p>
</div>
</div>
</div>

<div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-neutral-900 pt-16">
<div className="space-y-3">
<span className="iconify text-neutral-400 mb-2" data-icon="lucide:globe" data-strokeWidth="1.5" data-width="20"></span>
<h4 className="text-sm font-medium text-white">Global Fulfillment</h4>
<p className="text-xs text-neutral-500 leading-relaxed max-w-xs">Logistics handled automatically. We ship physical goods to over 140 countries with tracking.</p>
</div>
<div className="space-y-3">
<span className="iconify text-neutral-400 mb-2" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="20"></span>
<h4 className="text-sm font-medium text-white">Secure Assets</h4>
<p className="text-xs text-neutral-500 leading-relaxed max-w-xs">Digital products are signed and delivered via encrypted, time-sensitive links.</p>
</div>
<div className="space-y-3">
<span className="iconify text-neutral-400 mb-2" data-icon="lucide:refresh-cw" data-strokeWidth="1.5" data-width="20"></span>
<h4 className="text-sm font-medium text-white">Instant Sync</h4>
<p className="text-xs text-neutral-500 leading-relaxed max-w-xs">Service bookings and memberships automatically sync with your existing tools.</p>
</div>
</div>
</div>
<footer className="border-t border-neutral-900 py-12 mt-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="inline-flex items-center justify-center w-5 h-5 rounded bg-neutral-900 border border-neutral-800">
<span className="iconify text-white" data-icon="lucide:aperture" data-strokeWidth="2" data-width="10"></span>
</div>
<p className="text-[11px] text-neutral-600">© 2024 Exclusive Access. All rights reserved.</p>
</div>
<div className="flex gap-8">
<a className="text-[11px] text-neutral-600 hover:text-neutral-400 transition-colors" href="#">Terms of Service</a>
<a className="text-[11px] text-neutral-600 hover:text-neutral-400 transition-colors" href="#">Privacy Policy</a>
<a className="text-[11px] text-neutral-600 hover:text-neutral-400 transition-colors" href="#">Support</a>
</div>
</div>
</footer>
</div>

    </>
  );
}
