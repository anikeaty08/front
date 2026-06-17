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
      
<div className="max-w-7xl mx-auto space-y-6 relative">

<header className="relative mb-10 pb-6 border-b border-white/5 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="flex flex-col">
<div className="flex items-center gap-4 mb-2">
<div className="w-12 h-12 rounded-lg bg-[#7CFF6B]/10 border border-[#7CFF6B]/30 flex items-center justify-center shadow-[0_0_15px_rgba(124,255,107,0.15)] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#7CFF6B]/20 to-transparent opacity-50"></div>
<iconify-icon className="text-3xl text-[#7CFF6B]" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h1 className="font-['Orbitron'] text-4xl sm:text-5xl font-semibold text-[#7CFF6B] tracking-tight drop-shadow-[0_0_12px_rgba(124,255,107,0.4)]">NMEX</h1>
</div>
<div className="mt-2 space-y-1">
<p className="font-['Montserrat'] text-sm text-[#A0FF9A] uppercase tracking-widest">Verification &amp; Authorization System</p>
<p className="font-['Inter'] text-xs text-slate-400 tracking-wider uppercase">Secure Identity Validation Interface</p>
</div>
</div>
<div className="flex items-center gap-3 bg-[#13202b]/80 border border-white/5 px-4 py-2 rounded-md backdrop-blur-sm">
<div className="w-2 h-2 rounded-full bg-[#7CFF6B] shadow-[0_0_8px_#7CFF6B] animate-pulse"></div>
<span className="font-['Rajdhani'] text-xs text-[#A0FF9A] uppercase tracking-widest">System Online</span>
</div>

<div className="absolute bottom-0 left-0 w-1/3 h-px bg-gradient-to-r from-[#7CFF6B]/50 to-transparent"></div>
</header>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-3 bg-[#13202b]/60 backdrop-blur-md border border-white/5 rounded-xl p-5 shadow-lg relative group overflow-hidden">

<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#7CFF6B]/30 rounded-tl-xl"></div>
<div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-3">
<iconify-icon className="text-lg text-[#7CFF6B]" icon="solar:chart-square-linear"></iconify-icon>
<h2 className="font-['Orbitron'] text-[#A0FF9A] text-xs tracking-widest uppercase font-medium">System Analytics</h2>
</div>
<div className="space-y-6">

<div>
<div className="flex justify-between items-end mb-2">
<span className="font-['Rajdhani'] text-xs text-slate-400 uppercase tracking-wider">Network Activity</span>
<span className="font-['Inter'] text-xs text-[#7CFF6B]">Optimized</span>
</div>
<div className="h-8 flex items-end gap-1 opacity-80">

<div className="w-full bg-[#7CFF6B]/20 h-[30%] rounded-t-sm"></div>
<div className="w-full bg-[#7CFF6B]/40 h-[60%] rounded-t-sm"></div>
<div className="w-full bg-[#7CFF6B]/20 h-[40%] rounded-t-sm"></div>
<div className="w-full bg-[#7CFF6B]/60 h-[80%] rounded-t-sm"></div>
<div className="w-full bg-[#7CFF6B]/30 h-[50%] rounded-t-sm"></div>
<div className="w-full bg-[#7CFF6B]/50 h-[70%] rounded-t-sm"></div>
<div className="w-full bg-[#7CFF6B]/20 h-[20%] rounded-t-sm"></div>
</div>
</div>

<div className="border-t border-white/5 pt-4">
<span className="font-['Rajdhani'] text-xs text-slate-400 uppercase tracking-wider block mb-1">Verification Queue</span>
<div className="flex items-center gap-3">
<span className="font-['Orbitron'] text-3xl text-slate-200">01</span>
<span className="font-['Inter'] text-xs text-slate-500">Active Request<br/>Processing</span>
</div>
</div>

<div className="border-t border-white/5 pt-4">
<div className="flex justify-between items-center mb-2">
<span className="font-['Rajdhani'] text-xs text-slate-400 uppercase tracking-wider block">Processing Load</span>
<span className="font-['Inter'] text-xs text-slate-300">34%</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="w-[34%] h-full bg-gradient-to-r from-[#7CFF6B]/50 to-[#7CFF6B] shadow-[0_0_10px_#7CFF6B]"></div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-6 flex flex-col gap-6">

<div className="bg-[#13202b]/60 backdrop-blur-md border border-white/5 rounded-xl p-6 shadow-lg relative">
<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#7CFF6B]/30 rounded-tr-xl"></div>
<div className="flex items-center gap-2 mb-5 border-b border-white/5 pb-3">
<iconify-icon className="text-lg text-[#7CFF6B]" icon="solar:bus-linear"></iconify-icon>
<h2 className="font-['Orbitron'] text-[#A0FF9A] text-xs tracking-widest uppercase font-medium">Vehicle Details</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
<div className="flex flex-col gap-1">
<span className="font-['Rajdhani'] text-xs text-slate-500 uppercase tracking-widest">Vehicle</span>
<span className="font-['Inter'] text-sm text-slate-100">2022 Chevrolet Silverado 1500 RST</span>
</div>
<div className="flex flex-col gap-1">
<span className="font-['Rajdhani'] text-xs text-slate-500 uppercase tracking-widest">VIN</span>
<span className="font-['Inter'] text-sm text-slate-100 font-['Orbitron'] tracking-wider">3GCPYBEK0NG123456</span>
</div>
<div className="flex flex-col gap-1">
<span className="font-['Rajdhani'] text-xs text-slate-500 uppercase tracking-widest">Color</span>
<span className="font-['Inter'] text-sm text-slate-100 flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_5px_rgba(220,38,38,0.5)]"></div>
                                Red
                            </span>
</div>
<div className="flex flex-col gap-1">
<span className="font-['Rajdhani'] text-xs text-slate-500 uppercase tracking-widest">Plate Number</span>
<div className="inline-flex mt-0.5 px-3 py-1 bg-white/5 border border-white/10 rounded items-center w-max">
<span className="font-['Orbitron'] text-xs text-slate-100 tracking-widest">NM-88429</span>
</div>
</div>
</div>
</div>

<div className="bg-[#13202b]/60 backdrop-blur-md border border-white/5 rounded-xl p-6 shadow-lg relative">
<div className="flex items-center gap-2 mb-5 border-b border-white/5 pb-3">
<iconify-icon className="text-lg text-[#7CFF6B]" icon="solar:map-point-wave-linear"></iconify-icon>
<h2 className="font-['Orbitron'] text-[#A0FF9A] text-xs tracking-widest uppercase font-medium">Transport Information</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
<div className="flex flex-col gap-1">
<span className="font-['Rajdhani'] text-xs text-slate-500 uppercase tracking-widest">Origin</span>
<span className="font-['Inter'] text-sm text-slate-100">Edmonton, Canada</span>
</div>
<div className="flex flex-col gap-1">
<span className="font-['Rajdhani'] text-xs text-slate-500 uppercase tracking-widest">Destination</span>
<span className="font-['Inter'] text-sm text-slate-100">Albuquerque, New Mexico</span>
</div>
<div className="flex flex-col gap-1">
<span className="font-['Rajdhani'] text-xs text-slate-500 uppercase tracking-widest">Logistics Carrier</span>
<span className="font-['Inter'] text-sm text-slate-100">Evertrack Auto Logistics</span>
</div>
<div className="flex flex-col gap-1">
<span className="font-['Rajdhani'] text-xs text-slate-500 uppercase tracking-widest">Transport Status</span>
<span className="font-['Inter'] text-xs text-[#7CFF6B] bg-[#7CFF6B]/10 border border-[#7CFF6B]/20 px-2 py-1 rounded w-max mt-0.5">Secured Holding Authorization</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 bg-[#13202b]/60 backdrop-blur-md border border-white/5 rounded-xl p-5 shadow-lg relative group flex flex-col">
<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#7CFF6B]/30 rounded-br-xl"></div>
<div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-3">
<iconify-icon className="text-lg text-[#7CFF6B]" icon="solar:scanner-linear"></iconify-icon>
<h2 className="font-['Orbitron'] text-[#A0FF9A] text-xs tracking-widest uppercase font-medium">Biometric Verification</h2>
</div>
<div className="flex-grow flex flex-col items-center justify-center py-6">

<div className="relative w-32 h-32 flex items-center justify-center mb-8">
<div className="absolute inset-0 bg-[#7CFF6B]/5 rounded-full border border-[#7CFF6B]/10 animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-2 border border-dashed border-[#7CFF6B]/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<iconify-icon className="text-7xl text-[#7CFF6B] drop-shadow-[0_0_15px_rgba(124,255,107,0.5)] z-10" icon="solar:fingerprint-linear"></iconify-icon>

<div className="absolute top-0 left-0 w-full h-0.5 bg-[#7CFF6B] shadow-[0_0_8px_#7CFF6B] z-20 animate-[bounce_2s_infinite]"></div>
</div>
<div className="w-full space-y-4">
<div className="bg-black/30 rounded p-3 border border-white/5 flex items-center justify-between">
<span className="font-['Rajdhani'] text-xs text-slate-400 uppercase tracking-wider">Fingerprint Authentication</span>
<iconify-icon className="text-[#7CFF6B] text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="bg-black/30 rounded p-3 border border-white/5 flex items-center justify-between">
<span className="font-['Rajdhani'] text-xs text-slate-400 uppercase tracking-wider">Identity Match Processing</span>
<iconify-icon className="text-[#7CFF6B] text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-[#13202b]/60 backdrop-blur-md border border-white/5 rounded-xl p-6 shadow-lg relative">
<div className="flex items-center gap-2 mb-5 border-b border-white/5 pb-3">
<iconify-icon className="text-lg text-[#7CFF6B]" icon="solar:user-id-linear"></iconify-icon>
<h2 className="font-['Orbitron'] text-[#A0FF9A] text-xs tracking-widest uppercase font-medium">Pickup Agent Verification</h2>
</div>
<div className="space-y-4">
<div className="flex items-start justify-between border-b border-white/5 pb-3">
<span className="font-['Rajdhani'] text-xs text-slate-500 uppercase tracking-widest">Assigned Pickup Driver</span>
<span className="font-['Inter'] text-sm text-slate-200 text-right">Verified Logistics Operator</span>
</div>
<div className="flex items-start justify-between border-b border-white/5 pb-3">
<span className="font-['Rajdhani'] text-xs text-slate-500 uppercase tracking-widest">Verification Method</span>
<span className="font-['Inter'] text-sm text-slate-200 text-right">Biometric Identity Scan</span>
</div>
<div className="flex items-start justify-between border-b border-white/5 pb-3">
<span className="font-['Rajdhani'] text-xs text-slate-500 uppercase tracking-widest">Screening Status</span>
<span className="font-['Inter'] text-xs text-[#7CFF6B] bg-[#7CFF6B]/10 px-2 py-0.5 rounded border border-[#7CFF6B]/20">Completed</span>
</div>
<div className="flex items-start justify-between">
<span className="font-['Rajdhani'] text-xs text-slate-500 uppercase tracking-widest">Authorization Level</span>
<span className="font-['Inter'] text-xs text-[#7CFF6B] uppercase tracking-wider font-medium">Approved</span>
</div>
</div>
</div>

<div className="bg-[#13202b]/60 backdrop-blur-md border border-white/5 rounded-xl p-6 shadow-lg relative">
<div className="flex items-center gap-2 mb-5 border-b border-white/5 pb-3">
<iconify-icon className="text-lg text-[#7CFF6B]" icon="solar:folder-with-files-linear"></iconify-icon>
<h2 className="font-['Orbitron'] text-[#A0FF9A] text-xs tracking-widest uppercase font-medium">Clearance File Reference</h2>
</div>
<div className="space-y-4">
<div className="flex items-start justify-between border-b border-white/5 pb-3">
<span className="font-['Rajdhani'] text-xs text-slate-500 uppercase tracking-widest">Clearance Record ID</span>
<span className="font-['Orbitron'] text-xs text-slate-200 tracking-wider">NMEX-CR-72639</span>
</div>
<div className="flex items-start justify-between border-b border-white/5 pb-3">
<span className="font-['Rajdhani'] text-xs text-slate-500 uppercase tracking-widest">Authorization Code</span>
<span className="font-['Orbitron'] text-xs text-slate-200 tracking-wider">APY-7X92KQ-39LMR8</span>
</div>
<div className="flex items-start justify-between border-b border-white/5 pb-3">
<span className="font-['Rajdhani'] text-xs text-slate-500 uppercase tracking-widest">Verification Timestamp</span>
<span className="font-['Inter'] text-sm text-slate-200 text-right">System Logged</span>
</div>
<div className="flex items-start justify-between">
<span className="font-['Rajdhani'] text-xs text-slate-500 uppercase tracking-widest">Security Level</span>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-slate-400 text-xs" icon="solar:lock-keyhole-linear"></iconify-icon>
<span className="font-['Inter'] text-sm text-slate-200 text-right">Internal Authorization</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8 bg-gradient-to-r from-[#7CFF6B]/5 via-[#7CFF6B]/10 to-[#7CFF6B]/5 border border-[#7CFF6B]/30 rounded-xl p-8 text-center relative overflow-hidden shadow-[0_0_30px_rgba(124,255,107,0.05)]">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#7CFF6B] to-transparent opacity-50"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-[#7CFF6B] to-transparent opacity-30"></div>
<div className="flex flex-col items-center justify-center space-y-3">
<iconify-icon className="text-5xl text-[#7CFF6B] mb-2 drop-shadow-[0_0_10px_rgba(124,255,107,0.5)]" icon="solar:verified-check-linear"></iconify-icon>
<h2 className="font-['Orbitron'] text-2xl sm:text-3xl font-semibold text-[#7CFF6B] tracking-tight uppercase shadow-black drop-shadow-md">Clearance Approved</h2>
<p className="font-['Montserrat'] text-sm text-[#A0FF9A] tracking-widest uppercase">Vehicle Release Authorization Granted</p>
</div>
</div>
</div>

    </>
  );
}
