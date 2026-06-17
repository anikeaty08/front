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
      

<nav className="w-full flex items-center justify-between px-6 py-5 border-b border-white/5 relative z-50 bg-[#111111]/80 backdrop-blur-md">
<div className="flex items-center gap-8">
<a className="text-base font-semibold tracking-tighter flex items-center gap-2" href="#">
<span className="w-5 h-5 rounded bg-[#E4D8C8] flex items-center justify-center">
<span className="w-1.5 h-1.5 bg-[#111111] rounded-sm"></span>
</span>
                HUMANOS
            </a>
<div className="hidden md:flex items-center gap-6 text-sm text-white/50 font-medium">
<a className="hover:text-[#F4F3EF] transition-colors" href="#">Platform</a>
<a className="hover:text-[#F4F3EF] transition-colors" href="#">Solutions</a>
<a className="hover:text-[#F4F3EF] transition-colors" href="#">Documentation</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-white/60 hover:text-[#F4F3EF] transition-colors hidden sm:block" href="#">Sign in</a>
<a className="text-sm font-medium bg-[#F4F3EF] text-[#111111] px-4 py-2 rounded-md hover:bg-white transition-colors shadow-[0_0_15px_rgba(244,243,239,0.1)]" href="#">
                Get API Keys
            </a>
</div>
</nav>

<main className="flex-1 flex flex-col items-center pt-24 pb-12 w-full relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E4D8C8]/5 blur-[120px] pointer-events-none rounded-full"></div>

<div className="text-center px-4 max-w-4xl mx-auto relative z-10 flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 text-xs font-medium text-white/70">
<span className="w-1.5 h-1.5 rounded-full bg-[#E4D8C8] animate-pulse"></span>
                New: Structured Mandates API
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#F4F3EF] to-white/60">
                Verify authorization <br className="hidden md:block"/> before anything happens
            </h1>
<p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
                Turn human decisions into machine-verifiable mandates in real time. The universal transformation layer for critical operations.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto text-sm font-medium bg-[#F4F3EF] text-[#111111] px-6 py-3 rounded-md hover:bg-white transition-colors shadow-lg flex items-center justify-center gap-2" href="#">
                    Start Building
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto text-sm font-medium bg-transparent text-[#F4F3EF] border border-white/10 px-6 py-3 rounded-md hover:bg-white/5 transition-colors flex items-center justify-center gap-2" href="#">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
                    Read Documentation
                </a>
</div>
</div>

<div className="w-full h-[400px] mt-24 relative border-y border-white/5 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] overflow-hidden flex">

<div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2"></div>

<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#111111] to-transparent z-30 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#111111] to-transparent z-30 pointer-events-none"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-64 h-64 pointer-events-none">

<div className="absolute inset-4 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
<div className="absolute inset-10 border border-[#E4D8C8]/10 border-dashed rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

<div className="relative w-28 h-28 bg-[#161616] border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden" style={{animation: 'pulseGlow 4s ease-in-out infinite'}}>
<div className="absolute inset-0 bg-gradient-to-br from-[#E4D8C8]/10 to-transparent opacity-50"></div>

<div className="absolute left-0 w-full h-[1px] bg-[#E4D8C8]/40 shadow-[0_0_15px_#E4D8C8]" style={{animation: 'scanVertical 2s linear infinite'}}></div>
<iconify-icon className="text-4xl text-[#E4D8C8]/80 relative z-10" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="relative w-1/2 h-full z-10 overflow-hidden">

<div className="absolute top-[20%] w-52 bg-[#1A1A1A] border border-[#E4D8C8]/20 rounded-lg p-3 shadow-xl flex items-center gap-3 rotate-[-4deg] backdrop-blur-sm" style={{animation: 'flowChaos 8s linear infinite', animationDelay: '0s'}}>
<div className="w-8 h-8 rounded bg-[#E4D8C8]/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#E4D8C8] text-lg" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-1 w-full">
<span className="text-xs font-medium text-[#F4F3EF] truncate">Director Approval</span>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="w-3/4 h-full bg-[#E4D8C8]/40"></div>
</div>
</div>
</div>

<div className="absolute top-[55%] w-48 bg-[#222222] border border-white/5 rounded-full px-4 py-2.5 shadow-xl flex items-center gap-2 rotate-[3deg]" style={{animation: 'flowChaos 8s linear infinite', animationDelay: '-2.6s'}}>
<iconify-icon className="text-white/40 text-sm" icon="solar:chat-round-line-linear"></iconify-icon>
<span className="text-xs text-[#F4F3EF] truncate font-medium">@admin looks good 👍</span>
</div>

<div className="absolute top-[35%] w-40 bg-gradient-to-b from-[#1A1A1A] to-[#111111] border border-white/10 rounded-md p-3 shadow-2xl flex flex-col gap-2 rotate-[-6deg]" style={{animation: 'flowChaos 8s linear infinite', animationDelay: '-5.3s'}}>
<div className="flex items-center gap-1.5 text-white/50 text-xs">
<iconify-icon icon="solar:document-text-linear"></iconify-icon>
<span className="truncate">Contract_v4.pdf</span>
</div>
<div className="space-y-1">
<div className="w-full h-1.5 bg-white/5 rounded-sm"></div>
<div className="w-5/6 h-1.5 bg-white/5 rounded-sm"></div>
<div className="w-4/6 h-1.5 bg-white/5 rounded-sm"></div>
</div>
</div>
</div>

<div className="relative w-1/2 h-full z-10 overflow-hidden">

<div className="absolute top-1/2 -translate-y-1/2 w-64 bg-[#141414] border border-white/10 border-l-2 border-l-[#E4D8C8] rounded-lg p-4 shadow-2xl" style={{animation: 'flowMandate 8s linear infinite', animationDelay: '0s'}}>
<div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
<iconify-icon className="text-[#E4D8C8] text-sm" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs font-medium tracking-wide text-white/80">MANDATE_CREATED</span>
</div>
<div className="space-y-1.5 font-mono text-[0.65rem]">
<div className="flex justify-between items-center"><span className="text-white/40">identity:</span> <span className="text-[#F4F3EF]">usr_8x92k</span></div>
<div className="flex justify-between items-center"><span className="text-white/40">action:</span> <span className="text-[#E4D8C8]">db.write</span></div>
<div className="flex justify-between items-center"><span className="text-white/40">scope:</span> <span className="text-[#F4F3EF]">production</span></div>
<div className="flex justify-between items-center"><span className="text-white/40">exp:</span> <span className="text-white/60">+3600s</span></div>
</div>
</div>

<div className="absolute top-1/2 -translate-y-1/2 w-64 bg-[#141414] border border-white/10 border-l-2 border-l-[#E4D8C8] rounded-lg p-4 shadow-2xl" style={{animation: 'flowMandate 8s linear infinite', animationDelay: '-2.6s'}}>
<div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
<iconify-icon className="text-[#E4D8C8] text-sm" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs font-medium tracking-wide text-white/80">MANDATE_CREATED</span>
</div>
<div className="space-y-1.5 font-mono text-[0.65rem]">
<div className="flex justify-between items-center"><span className="text-white/40">identity:</span> <span className="text-[#F4F3EF]">sys_admin</span></div>
<div className="flex justify-between items-center"><span className="text-white/40">action:</span> <span className="text-[#E4D8C8]">transfer.fund</span></div>
<div className="flex justify-between items-center"><span className="text-white/40">scope:</span> <span className="text-[#F4F3EF]">acct_main</span></div>
<div className="flex justify-between items-center"><span className="text-white/40">exp:</span> <span className="text-white/60">+1200s</span></div>
</div>
</div>

<div className="absolute top-1/2 -translate-y-1/2 w-64 bg-[#141414] border border-white/10 border-l-2 border-l-[#E4D8C8] rounded-lg p-4 shadow-2xl" style={{animation: 'flowMandate 8s linear infinite', animationDelay: '-5.3s'}}>
<div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
<iconify-icon className="text-[#E4D8C8] text-sm" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs font-medium tracking-wide text-white/80">MANDATE_CREATED</span>
</div>
<div className="space-y-1.5 font-mono text-[0.65rem]">
<div className="flex justify-between items-center"><span className="text-white/40">identity:</span> <span className="text-[#F4F3EF]">usr_4k11m</span></div>
<div className="flex justify-between items-center"><span className="text-white/40">action:</span> <span className="text-[#E4D8C8]">config.update</span></div>
<div className="flex justify-between items-center"><span className="text-white/40">scope:</span> <span className="text-[#F4F3EF]">global_env</span></div>
<div className="flex justify-between items-center"><span className="text-white/40">exp:</span> <span className="text-white/60">+7200s</span></div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
