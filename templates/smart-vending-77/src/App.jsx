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
      

<div className="poster-container w-full max-w-sm relative overflow-hidden bg-slate-950 flex flex-col rounded-xl border border-slate-800">

<div className="noise-overlay absolute inset-0 z-50 pointer-events-none mix-blend-overlay"></div>

<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

<header className="relative z-10 pt-10 px-8 flex justify-between items-start">
<div className="flex flex-col">
<div className="flex items-center gap-2 mb-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
<span className="text-xs tracking-[0.2em] text-emerald-500 font-medium uppercase">Operational</span>
</div>
<h1 className="text-2xl font-semibold tracking-tighter text-white">SAYLANI</h1>
<p className="text-xs text-slate-500 tracking-wider uppercase mt-0.5">Welfare Int. Trust</p>
</div>
<iconify-icon className="text-slate-600" icon="lucide:qr-code" width="24"></iconify-icon>
</header>

<main className="relative z-10 flex-1 flex flex-col justify-center px-6">

<div className="relative w-full aspect-square mb-6">

<div className="absolute inset-4 glass-panel rounded-2xl flex flex-col items-center justify-center border-t border-white/10 shadow-2xl z-20 overflow-hidden group">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="relative z-10 h-16 w-16 bg-gradient-to-br from-emerald-500/20 to-emerald-900/20 rounded-full flex items-center justify-center border border-emerald-500/30 mb-4 shadow-[0_0_30px_-10px_rgba(16,185,129,0.5)]">
<iconify-icon className="text-emerald-400" icon="lucide:sprout" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h2 className="text-lg font-medium text-white tracking-tight mb-1">Smart Vending</h2>
<p className="text-xs text-slate-400 text-center max-w-[16ch]">Tech-enabled food distribution.</p>

<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent -translate-y-full animate-[spin_4s_linear_infinite_reverse] opacity-50"></div>
</div>

<div className="absolute inset-0 glass-panel rounded-2xl rotate-6 scale-90 z-10 opacity-40 bg-slate-800"></div>
<div className="absolute inset-0 glass-panel rounded-2xl -rotate-6 scale-90 z-10 opacity-40 bg-slate-800"></div>
</div>

<div className="grid grid-cols-2 gap-3 mb-6">
<div className="bg-slate-900/50 border border-slate-800 p-3 rounded-lg flex flex-col gap-2">
<iconify-icon className="text-yellow-500" icon="lucide:zap" width="16"></iconify-icon>
<div>
<div className="text-xs text-slate-300 font-medium">Instant</div>
<div className="text-[10px] text-slate-500 leading-tight">Zero wait time</div>
</div>
</div>
<div className="bg-slate-900/50 border border-slate-800 p-3 rounded-lg flex flex-col gap-2">
<iconify-icon className="text-emerald-500" icon="lucide:heart-handshake" width="16"></iconify-icon>
<div>
<div className="text-xs text-slate-300 font-medium">Free</div>
<div className="text-[10px] text-slate-500 leading-tight">For everyone</div>
</div>
</div>
</div>
</main>

<footer className="relative z-10 p-6 pt-0">
<div className="border-t border-slate-800 pt-5">
<div className="flex items-start gap-3">
<div className="mt-0.5 p-1.5 bg-slate-900 rounded-md border border-slate-800">
<iconify-icon className="text-slate-400" icon="lucide:map-pin" width="14"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-white tracking-tight">Zaitoon Ashraf IT Park</h3>
<p className="text-xs text-slate-500 mt-0.5">Automated Welfare Zone • Unit 01</p>
</div>
</div>
<div className="mt-6 flex justify-between items-end">
<div className="text-[10px] text-slate-600 font-mono tracking-widest">
                        SYL-WLF-2024<br/>
                        V.2.0.4
                    </div>
<button className="bg-white text-slate-950 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide hover:bg-slate-200 transition-colors">
                        Learn More
                    </button>
</div>
</div>
</footer>
</div>

    </>
  );
}
