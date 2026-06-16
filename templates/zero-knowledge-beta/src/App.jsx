import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none"></div>

<div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10 pointer-events-none">
<div className="flex items-center gap-2">

<iconify-icon className="text-zinc-500 text-lg" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-xs font-medium tracking-tight text-zinc-500">Secure Chat</span>
</div>
<div className="flex items-center gap-2.5">
<div className="w-1.5 h-1.5 rounded-full bg-teal-500/50 shadow-[0_0_8px_rgba(20,184,166,0.5)]"></div>
<span className="text-xs font-mono text-teal-500/90 tracking-wide">Encrypted Channel Active</span>
</div>
</div>

<main className="w-full max-w-[400px] p-6 z-20 relative">

<div className="mb-8 text-center sm:text-left">
<h1 className="text-2xl text-zinc-100 font-medium tracking-tight mb-2">Private Secure Session</h1>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">
                End-to-end encrypted. No accounts. No tracking.
            </p>
</div>

<form action="#" className="space-y-6" method="POST">

<div className="group">
<label className="block text-xs font-medium text-zinc-500 mb-1.5 pl-0.5 group-focus-within:text-zinc-300 transition-colors" htmlFor="identifier">
                    Local Identifier (optional)
                </label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-600 group-focus-within:text-teal-500/70 transition-colors text-lg" icon="solar:mask-h-linear"></iconify-icon>
</div>
<input autocomplete="off" className="block w-full pl-10 pr-4 py-2.5 bg-[#09090b] border border-zinc-800 rounded text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-teal-500/30 focus:ring-1 focus:ring-teal-500/30 transition-all duration-200 font-normal font-mono tracking-tight" id="identifier" name="identifier" placeholder="Optional local alias (not sent to server)" type="text"/>
</div>
</div>

<div className="group">
<div className="flex items-center justify-between mb-1.5 pl-0.5">
<label className="block text-xs font-medium text-zinc-500 group-focus-within:text-zinc-300 transition-colors" htmlFor="key">
                        Private Key / Secret Phrase
                    </label>
</div>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-600 group-focus-within:text-teal-500/70 transition-colors text-lg" icon="solar:key-minimalistic-linear"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-10 py-2.5 bg-[#09090b] border border-zinc-800 rounded text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-teal-500/30 focus:ring-1 focus:ring-teal-500/30 transition-all duration-200 font-normal tracking-tight font-mono" id="key" name="key" placeholder="Enter your cryptographic key" required="" type="password"/>
<button className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-600 hover:text-zinc-400 transition-colors cursor-pointer focus:outline-none" type="button">
<iconify-icon className="text-lg" icon="solar:eye-linear"></iconify-icon>
</button>
</div>
<p className="mt-2 pl-0.5 text-[10px] leading-relaxed text-zinc-600 font-normal">
                    Used locally to decrypt messages. Never leaves your device.
                </p>
</div>

<div className="pt-0">
<label className="flex items-start cursor-pointer custom-checkbox group w-fit">
<div className="relative flex items-center mt-0.5">
<input className="sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-700 rounded-[4px] bg-zinc-900/50 flex items-center justify-center transition-all group-hover:border-zinc-500">
<svg className="w-2.5 h-2.5 text-black hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</div>
<div className="ml-2.5 flex flex-col">
<span className="text-xs text-zinc-400 font-normal group-hover:text-zinc-300 transition-colors select-none">Encrypt &amp; store key locally on this device</span>
<span className="text-[10px] text-zinc-600 font-normal mt-0.5">Stored using secure browser storage. Never uploaded.</span>
</div>
</label>
</div>

<div className="pt-2">
<button className="w-full flex items-center justify-center gap-2 bg-zinc-100 hover:bg-white text-black border border-transparent py-2.5 px-4 rounded transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#09090b] focus:ring-zinc-600 group shadow-lg shadow-zinc-900/20" type="submit">
<span className="text-sm font-medium tracking-tight">Enter Secure Session</span>
<iconify-icon className="text-lg opacity-60 group-hover:translate-x-0.5 transition-transform duration-200" icon="solar:login-2-linear"></iconify-icon>
</button>
<div className="text-center mt-2.5">
<span className="text-[10px] text-zinc-600 font-normal tracking-tight">No data is sent unencrypted</span>
</div>
</div>

<div className="pt-6 flex flex-col items-center justify-center gap-3 border-t border-zinc-900/60">
<a className="text-xs text-zinc-500 hover:text-teal-400 transition-colors inline-flex items-center gap-1.5 group" href="#">
<iconify-icon className="text-zinc-600 group-hover:text-teal-400/70 transition-colors text-sm" icon="solar:refresh-circle-linear"></iconify-icon>
<span className="">Generate new anonymous identity</span>
</a>
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors inline-flex items-center gap-1.5 group" href="#">
<iconify-icon className="text-zinc-600 group-hover:text-zinc-400 transition-colors text-sm" icon="solar:info-circle-linear"></iconify-icon>
<span>How privacy works</span>
</a>
</div>
</form>
</main>

<footer className="absolute bottom-6 w-full text-center px-6 pointer-events-none opacity-60">
<div className="flex items-center justify-center gap-4 text-[10px] text-zinc-600 font-mono tracking-tight">
<span className="flex items-center gap-1.5">
<iconify-icon className="text-zinc-700" icon="solar:shield-check-linear"></iconify-icon>
                Zero-Knowledge Architecture
            </span>
<span className="text-zinc-800">|</span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-zinc-700" icon="solar:lock-password-unlocked-linear"></iconify-icon>
                Client-Side Encryption
            </span>
</div>
</footer>

    </>
  );
}
