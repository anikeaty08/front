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
      

<header className="h-14 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur flex items-center justify-between px-6 z-20 shrink-0 shadow-sm shadow-black/50">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-gradient-to-br from-cyan-800 to-blue-900 flex items-center justify-center border border-cyan-500/30 shadow-inner">
<span className="text-white font-bold tracking-tighter text-sm">NX</span>
</div>
<h1 className="text-xl tracking-tight font-semibold text-zinc-100">NMEX Verification &amp; Authorization Services</h1>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2 text-xs font-medium text-zinc-400">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                SYSTEM SECURE
            </div>
<div className="h-4 w-[1px] bg-zinc-700"></div>
<div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
<iconify-icon className="text-sm" icon="solar:shield-keyhole-linear"></iconify-icon>
                NODE: NM-SEC-09
            </div>
</div>
</header>

<main className="flex-1 relative z-10 p-4 md:p-8 flex items-center justify-center w-full min-w-[1200px]">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
<span className="text-9xl font-black text-white opacity-[0.015] tracking-tighter scale-[3] select-none rotate-[-2deg]">NMEX</span>
</div>

<div className="grid grid-cols-4 grid-rows-2 gap-x-8 gap-y-12 w-full max-w-[1500px] h-full max-h-[750px] relative z-10">

<div className="relative w-full h-full flex flex-col col-start-1 row-start-1 group">

<div className="absolute top-1/2 -right-8 w-8 h-[2px] bg-gradient-to-r from-zinc-700 to-cyan-800/60 translate-y-[-50%] z-0 flex items-center justify-center">
<iconify-icon className="text-cyan-500 bg-zinc-950 text-lg absolute" icon="solar:round-alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="relative z-10 flex-1 bg-[#0a0a0c] border border-zinc-800 border-t-emerald-500/50 rounded-xl p-4 flex flex-col shadow-xl shadow-black/50">
<div className="flex items-start justify-between mb-4 border-b border-zinc-800/50 pb-3">
<div className="flex items-center gap-2 text-zinc-200">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:clipboard-text-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="text-sm font-semibold tracking-tight">Vehicle Compliance Record</h2>
</div>
<div className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs px-2 py-0.5 rounded-full font-medium tracking-wider uppercase whitespace-nowrap">
                            ACTIVE RECORD
                        </div>
</div>
<div className="grid grid-cols-2 gap-y-3 gap-x-4 flex-1">
<div className="col-span-2">
<span className="text-xs text-zinc-500 uppercase tracking-wider block mb-0.5">Asset</span>
<span className="text-xs font-semibold text-zinc-200">2022 Chevrolet Silverado 1500 RST</span>
</div>
<div>
<span className="text-xs text-zinc-500 uppercase tracking-wider block mb-0.5">VIN</span>
<span className="text-xs font-mono text-zinc-400">3GCPYBEK0NG123456</span>
</div>
<div>
<span className="text-xs text-zinc-500 uppercase tracking-wider block mb-0.5">Registered Client</span>
<span className="text-xs font-semibold text-zinc-300">Sharday Charley SW</span>
</div>
<div>
<span className="text-xs text-zinc-500 uppercase tracking-wider block mb-0.5">Registry Reference</span>
<span className="text-xs font-mono text-cyan-500/80">NMEX-TCR-98421</span>
</div>
<div>
<span className="text-xs text-zinc-500 uppercase tracking-wider block mb-0.5">Case ID</span>
<span className="text-xs font-mono text-zinc-400">VC-TRX-7714</span>
</div>
</div>
</div>
</div>

<div className="relative w-full h-full flex flex-col col-start-2 row-start-1 group">

<div className="absolute top-1/2 -right-8 w-8 h-[2px] bg-gradient-to-r from-zinc-700 to-cyan-800/60 translate-y-[-50%] z-0 flex items-center justify-center">
<iconify-icon className="text-cyan-500 bg-zinc-950 text-lg absolute" icon="solar:round-alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="relative z-10 flex-1 bg-[#0a0a0c] border border-zinc-800 border-t-cyan-500/50 rounded-xl p-4 flex flex-col shadow-xl shadow-black/50">
<div className="flex items-start justify-between mb-4 border-b border-zinc-800/50 pb-3">
<div className="flex items-center gap-2 text-zinc-200">
<iconify-icon className="text-cyan-500 text-lg" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="text-sm font-semibold tracking-tight">Administrative Clearance</h2>
</div>
<div className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs px-2 py-0.5 rounded-full font-medium tracking-wider uppercase">
                            VERIFIED
                        </div>
</div>
<div className="flex flex-col gap-3 flex-1">
<div>
<span className="text-xs text-zinc-500 uppercase tracking-wider block mb-0.5">Agency Unit</span>
<span className="text-xs font-semibold text-zinc-300">NMEX Verification &amp; Compliance</span>
</div>
<div>
<span className="text-xs text-zinc-500 uppercase tracking-wider block mb-0.5">Authorized Staff</span>
<span className="text-xs font-semibold text-zinc-300">Compliance Officer</span>
</div>
<div className="mt-auto">
<span className="text-xs text-zinc-500 uppercase tracking-wider block mb-1">Purpose</span>
<div className="bg-zinc-900/50 border border-zinc-800/50 rounded px-2.5 py-2 text-xs text-zinc-400 leading-relaxed font-mono shadow-inner">
                                Administrative compliance review and registry validation.
                            </div>
</div>
</div>
</div>
</div>

<div className="relative w-full h-full flex flex-col col-start-3 row-start-1 group">

<div className="absolute top-1/2 -right-8 w-8 h-[2px] bg-gradient-to-r from-zinc-700 to-cyan-800/60 translate-y-[-50%] z-0 flex items-center justify-center">
<iconify-icon className="text-cyan-500 bg-zinc-950 text-lg absolute" icon="solar:round-alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="relative z-10 flex-1 bg-[#0a0a0c] border border-zinc-800 border-t-blue-500/50 rounded-xl p-4 flex flex-col shadow-xl shadow-black/50">
<div className="flex items-start justify-between mb-4 border-b border-zinc-800/50 pb-3">
<div className="flex items-center gap-2 text-zinc-200">
<iconify-icon className="text-blue-500 text-lg" icon="solar:routing-3-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="text-sm font-semibold tracking-tight">Transport Authorization</h2>
</div>
<div className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs px-2 py-0.5 rounded-full font-medium tracking-wider uppercase">
                            AUTHORIZED
                        </div>
</div>
<div className="flex flex-col gap-3 flex-1">
<div>
<span className="text-xs text-zinc-500 uppercase tracking-wider block mb-0.5">Logistics Company</span>
<span className="text-xs font-semibold text-zinc-300">EverTrack Auto Logistics</span>
</div>
<div>
<span className="text-xs text-zinc-500 uppercase tracking-wider block mb-0.5">Carrier Representative</span>
<span className="text-xs font-semibold text-zinc-300">Patrick Wilson</span>
</div>
<div className="mt-auto">
<span className="text-xs text-zinc-500 uppercase tracking-wider block mb-1">Purpose</span>
<div className="bg-zinc-900/50 border border-zinc-800/50 rounded px-2.5 py-2 text-xs text-zinc-400 leading-relaxed font-mono shadow-inner">
                                Interstate title validation and transport authorization.
                            </div>
</div>
</div>
</div>
</div>

<div className="relative w-full h-full flex flex-col col-start-4 row-start-1 group">

<div className="absolute -bottom-12 left-1/2 w-[2px] h-12 bg-gradient-to-b from-zinc-700 to-cyan-800/60 translate-x-[-50%] z-0 flex items-center justify-center">
<iconify-icon className="text-cyan-500 bg-zinc-950 text-lg absolute" icon="solar:round-alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="relative z-10 flex-1 bg-[#0a0a0c] border border-zinc-800 border-t-indigo-500/50 rounded-xl p-4 flex flex-col shadow-xl shadow-black/50">
<div className="flex items-start justify-between mb-4 border-b border-zinc-800/50 pb-3">
<div className="flex items-center gap-2 text-zinc-200">
<iconify-icon className="text-indigo-500 text-lg" icon="solar:bolt-circle-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="text-sm font-semibold tracking-tight">Verification Activation</h2>
</div>
<div className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs px-2 py-0.5 rounded-full font-medium tracking-wider uppercase">
                            VALIDATED
                        </div>
</div>
<div className="flex flex-col gap-3 flex-1">
<div>
<span className="text-xs text-zinc-500 uppercase tracking-wider block mb-0.5">Agency Unit</span>
<span className="text-xs font-semibold text-zinc-300">NMEX Verification &amp; Authorization Services</span>
</div>
<div>
<span className="text-xs text-zinc-500 uppercase tracking-wider block mb-0.5">Transaction Sender</span>
<span className="text-xs font-semibold text-zinc-300">Marcus Reynolds</span>
</div>
<div className="mt-auto">
<span className="text-xs text-zinc-500 uppercase tracking-wider block mb-1">Purpose</span>
<div className="bg-zinc-900/50 border border-zinc-800/50 rounded px-2.5 py-2 text-xs text-zinc-400 leading-relaxed font-mono shadow-inner">
                                System authorization activation and compliance verification.
                            </div>
</div>
</div>
</div>
</div>

<div className="relative w-full h-full flex flex-col col-start-4 row-start-2 group">

<div className="absolute top-1/2 -left-8 w-8 h-[2px] bg-gradient-to-l from-zinc-700 to-cyan-800/60 translate-y-[-50%] z-0 flex items-center justify-center">
<iconify-icon className="text-cyan-500 bg-zinc-950 text-lg absolute" icon="solar:round-alt-arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="relative z-10 flex-1 bg-[#0a0a0c] border border-zinc-800 border-t-teal-500/50 rounded-xl p-4 flex flex-col shadow-xl shadow-black/50">
<div className="flex items-start justify-between mb-4 border-b border-zinc-800/50 pb-3">
<div className="flex items-center gap-2 text-zinc-200">
<iconify-icon className="text-teal-500 text-lg" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="text-sm font-semibold tracking-tight">Facility Release System</h2>
</div>
<div className="bg-teal-500/10 text-teal-400 border border-teal-500/20 text-xs px-2 py-0.5 rounded-full font-medium tracking-wider uppercase">
                            CLEARED
                        </div>
</div>
<div className="flex flex-col gap-3 flex-1">
<div>
<span className="text-xs text-zinc-500 uppercase tracking-wider block mb-0.5">Agency Unit</span>
<span className="text-xs font-semibold text-zinc-300">NMEX Authority – Secured Facility NM-404</span>
</div>
<div className="mt-auto">
<span className="text-xs text-zinc-500 uppercase tracking-wider block mb-1">Purpose</span>
<div className="bg-zinc-900/50 border border-zinc-800/50 rounded px-2.5 py-2 text-xs text-zinc-400 leading-relaxed font-mono shadow-inner">
                                Driver identification verification and internal facility exit authorization.
                            </div>
</div>
</div>
</div>
</div>

<div className="relative w-full h-full flex flex-col col-start-3 row-start-2 group">

<div className="absolute top-1/2 -left-8 w-8 h-[2px] bg-gradient-to-l from-zinc-700 to-cyan-800/60 translate-y-[-50%] z-0 flex items-center justify-center">
<iconify-icon className="text-cyan-500 bg-zinc-950 text-lg absolute" icon="solar:round-alt-arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="relative z-10 flex-1 bg-[#0a0a0c] border border-zinc-800 border-t-cyan-500/50 rounded-xl p-4 flex flex-col shadow-xl shadow-black/50">
<div className="flex items-start justify-between mb-4 border-b border-zinc-800/50 pb-3">
<div className="flex items-center gap-2 text-zinc-200">
<iconify-icon className="text-cyan-500 text-lg" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="text-sm font-semibold tracking-tight">Registry Compliance Processing</h2>
</div>
<div className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs px-2 py-0.5 rounded-full font-medium tracking-wider uppercase text-center leading-none flex items-center">
                            VERIFIED
                        </div>
</div>
<div className="flex flex-col gap-3 flex-1">
<div>
<span className="text-xs text-zinc-500 uppercase tracking-wider block mb-0.5">Agency Unit</span>
<span className="text-xs font-semibold text-zinc-300">NMEX Processing Authority – Compliance &amp; Asset Division</span>
</div>
<div className="mt-auto">
<span className="text-xs text-zinc-500 uppercase tracking-wider block mb-1">Purpose</span>
<div className="bg-zinc-900/50 border border-zinc-800/50 rounded px-2.5 py-2 text-xs text-zinc-400 leading-relaxed font-mono shadow-inner">
                                Registry authorization, biometric validation, and processing adjustments.
                            </div>
</div>
</div>
</div>
</div>

<div className="relative w-full h-full flex flex-col col-start-2 row-start-2 group">

<div className="absolute top-1/2 -left-8 w-8 h-[2px] bg-gradient-to-l from-zinc-700 to-cyan-800/60 translate-y-[-50%] z-0 flex items-center justify-center">
<iconify-icon className="text-cyan-500 bg-zinc-950 text-lg absolute" icon="solar:round-alt-arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="relative z-10 flex-1 bg-[#0a0a0c] border border-zinc-800 border-t-emerald-500/50 rounded-xl p-4 flex flex-col shadow-xl shadow-black/50">
<div className="flex items-start justify-between mb-4 border-b border-zinc-800/50 pb-3">
<div className="flex items-center gap-2 text-zinc-200">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:user-check-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="text-sm font-semibold tracking-tight">Authorization Approval</h2>
</div>
<div className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs px-2 py-0.5 rounded-full font-medium tracking-wider uppercase">
                            APPROVED
                        </div>
</div>
<div className="flex flex-col gap-3 flex-1">
<div>
<span className="text-xs text-zinc-500 uppercase tracking-wider block mb-0.5">Authorized By</span>
<span className="text-xs font-semibold text-zinc-300">Jonathan Sterling</span>
</div>
<div>
<span className="text-xs text-zinc-500 uppercase tracking-wider block mb-0.5">Role</span>
<span className="text-xs font-semibold text-zinc-300">Senior Verification Director</span>
<span className="text-xs text-zinc-400 block mt-0.5">NMEX Verification &amp; Compliance Department</span>
</div>
<div className="mt-auto">
<span className="text-xs text-zinc-500 uppercase tracking-wider block mb-1">Purpose</span>
<div className="bg-zinc-900/50 border border-zinc-800/50 rounded px-2.5 py-2 text-xs text-zinc-400 leading-relaxed font-mono shadow-inner">
                                Final validation of the compliance processing chain.
                            </div>
</div>
</div>
</div>
</div>

<div className="relative w-full h-full flex flex-col col-start-1 row-start-2 group">
<div className="relative z-10 flex-1 bg-[#050508] border-2 border-cyan-800/40 rounded-xl p-5 flex flex-col shadow-[0_0_30px_rgba(6,182,212,0.1)] overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent pointer-events-none"></div>
<div className="flex items-center gap-3 mb-5 relative z-10 border-b border-zinc-800/60 pb-4">
<div className="p-2 bg-cyan-950/40 rounded-lg border border-cyan-800/50 shadow-inner">
<iconify-icon className="text-cyan-400 text-2xl" icon="solar:diploma-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-lg tracking-tight font-semibold text-cyan-50">NMEX TRANSPORT CERTIFICATE</h2>
</div>
<div className="flex flex-col gap-4 flex-1 relative z-10">
<div>
<span className="text-xs text-zinc-500 uppercase tracking-wider block mb-2">Certificate Status</span>
<div className="bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs px-3 py-1.5 rounded-full font-semibold tracking-wide uppercase inline-flex items-center gap-1.5 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
<iconify-icon className="text-amber-400 text-sm" icon="solar:danger-triangle-linear" strokeWidth="1.5"></iconify-icon>
                                ⚠ PENDING ISSUANCE
                            </div>
</div>
<div className="mt-2">
<span className="text-xs text-zinc-500 uppercase tracking-wider block mb-1.5">Description</span>
<p className="text-xs text-zinc-400 leading-relaxed border-l-2 border-zinc-800/80 pl-3">
                                The transport certificate has not yet been generated within the NMEX certification registry.
                            </p>
</div>
</div>
<div className="mt-auto pt-4 border-t border-zinc-800/60 relative z-10 flex items-center gap-2.5">
<div className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</div>
<span className="text-xs text-zinc-500 uppercase tracking-wider font-mono">System Status: Awaiting Certificate Generation Trigger</span>
</div>
</div>
</div>
</div>
</main>

<footer className="h-10 border-t border-zinc-800/80 bg-zinc-950/90 flex items-center justify-between px-8 z-20 shrink-0 text-xs text-zinc-500 uppercase tracking-widest font-medium">
<div>NMEX Transport Compliance Network</div>
<div className="font-mono text-zinc-600">Internal Registry System v4.2.1</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>
            Authorized Administrative Access
        </div>
</footer>

    </>
  );
}
