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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
colors: {
cyan: {
400: '#22d3ee',
500: '#06b6d4',
900: '#164e63',
}
},
animation: {
'fade-in': 'fadeIn 1s ease-out forwards',
'fade-in-up': 'fadeInUp 1s ease-out forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spin-slow': 'spin 3s linear infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        lucide.createIcons();
    
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 mix-blend-normal hue-rotate-90" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="cqcLtDwfoHqqRPttBbQE"></div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="stars absolute w-[1px] h-[1px] bg-transparent rounded-full opacity-30"></div>
<div className="absolute inset-0 bg-grid opacity-30"></div>

<div className="absolute top-[-20%] left-[20%] w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[100px] mix-blend-screen"></div>
</div>

<nav className="fixed transition-all duration-300 w-full z-50 pt-6 pr-6 pb-6 pl-6 top-0">
<div className="max-w-7xl mx-auto flex items-center justify-between bg-black/40 backdrop-blur-md border border-white/5 rounded-full px-6 py-3">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
<svg aria-hidden="true" className="iconify text-cyan-400 iconify--solar" data-icon="solar:graph-up-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" fill="currentColor" opacity=".5"></path><path d="M14.5 10.75a.75.75 0 0 1 0-1.5H17a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-.69l-2.013 2.013a1.75 1.75 0 0 1-2.474 0l-1.586-1.586a.25.25 0 0 0-.354 0L7.53 14.53a.75.75 0 0 1-1.06-1.06l2.293-2.293a1.75 1.75 0 0 1 2.474 0l1.586 1.586a.25.25 0 0 0 .354 0l2.012-2.013z" fill="currentColor"></path></svg>
</div>
<span className="font-display font-bold text-lg tracking-tight text-white">FinCore</span>
</a>

<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors uppercase tracking-wider" href="#about">About</a>
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors uppercase tracking-wider" href="#features">Features</a>
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors uppercase tracking-wider" href="#integration">Integration</a>
</div>

<div className="flex items-center gap-4">
<button className="group inline-flex items-center gap-2 text-xs font-medium text-white/90 hover:text-white transition-colors">
                    Login
                </button>
<div className="relative group">
<button className="relative inline-flex h-9 overflow-hidden rounded-full p-[1px] focus:outline-none transition-transform hover:scale-105 active:scale-95 duration-200">
<span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#22d3ee_50%,#000000_100%)]"></span>
<span className="inline-flex h-full w-full items-center justify-center rounded-full bg-black px-4 py-1 text-xs font-medium text-white backdrop-blur-3xl border border-white/10 group-hover:bg-neutral-900/80 transition-colors">
                            Book Demo
                            <svg className="lucide lucide-chevron-right ml-1" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</span>
</button>
</div>
</div>
</div>
</nav>

<main className="z-10 relative pt-32 pb-24">

<div className="flex flex-col items-center text-center px-4 mb-32 max-w-7xl mx-auto">

<div className="animate-fade-in-up flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/30 text-cyan-300 text-[10px] md:text-xs font-medium mb-8 backdrop-blur-sm cursor-default tracking-wide uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                FinCore AI 2.0 is live
            </div>

<h1 className="animate-fade-in-up delay-[100ms] font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter text-white max-w-5xl mx-auto mb-6">
                The neural engine <br/>
<span className="text-gradient">for modern banking.</span>
</h1>

<p className="animate-fade-in-up delay-[200ms] text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
                Instantly resolve complex financial inquiries with an agent trained on compliance. Zero latency, holographic security, enterprise-grade scale.
            </p>

<div className="animate-fade-in-up delay-[300ms] mb-20 relative group">
<button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none transition-transform hover:scale-105 active:scale-95 duration-200">
<span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#22d3ee_50%,#000000_100%)]"></span>
<span className="inline-flex h-full w-full items-center justify-center rounded-full bg-black px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl border border-white/10 group-hover:bg-neutral-900/80 transition-colors">
                        Initialize Protocol
                        <svg className="lucide lucide-zap ml-2 text-cyan-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</span>
</button>

<div className="absolute inset-0 -z-10 bg-cyan-500/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
</div>

<div className="animate-fade-in-up delay-[400ms] w-full max-w-3xl perspective-[1200px] group mx-auto">
<div className="relative rounded-2xl glass-panel p-1 transition-all duration-500 group-hover:border-cyan-500/30 shadow-2xl shadow-cyan-900/10">

<div className="bg-[#050505] rounded-xl overflow-hidden relative min-h-[420px] flex flex-col">

<div className="relative px-6 py-4 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
<div className="flex items-center gap-3">
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
</div>
<div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 rounded-full bg-black border border-white/10">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
<span className="text-xs font-mono text-cyan-400/80">session_active</span>
</div>
</div>

<div className="flex-1 p-8 md:p-10 space-y-6 flex flex-col justify-center relative">

<div className="absolute inset-0 opacity-5 pointer-events-none bg-[url(default)] bg-cover bg-center" style={{}}></div>

<div className="flex justify-end w-full animate-[fadeIn_0.5s_ease-out_forwards]">
<div className="bg-neutral-900 border border-white/10 text-white/90 px-5 py-3 rounded-2xl rounded-tr-sm shadow-sm max-w-sm text-sm font-light">
                                    Analyze Q3 discrepancies in the lending portfolio.
                                </div>
</div>

<div className="flex justify-start w-full animate-[fadeIn_0.5s_ease-out_0.6s_forwards] opacity-0 [animation-fill-mode:forwards]">
<div className="bg-cyan-950/10 border border-cyan-500/20 px-5 py-4 rounded-2xl rounded-tl-sm backdrop-blur-sm max-w-[28rem]">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-sparkles text-cyan-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
<span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">FinCore</span>
</div>
<p className="text-sm text-cyan-100/80 leading-relaxed mb-3">
                                        I've detected a <span className="text-white font-medium">0.4% variance</span> in commercial real estate yield. This correlates with the rate adjustment on <span className="font-mono text-cyan-300 text-xs">Aug 14th</span>.
                                    </p>
<div className="h-1 w-full bg-cyan-900/30 rounded-full overflow-hidden">
<div className="h-full bg-cyan-400 w-[75%] rounded-full"></div>
</div>
<p className="text-[10px] text-cyan-400/60 mt-2 font-mono">Confidence: 99.8%</p>
</div>
</div>

<div className="flex justify-end w-full animate-[fadeIn_0.5s_ease-out_1.4s_forwards] opacity-0 [animation-fill-mode:forwards]">
<div className="bg-neutral-900 border border-white/10 text-white/90 px-5 py-3 rounded-2xl rounded-tr-sm shadow-sm max-w-sm text-sm font-light">
                                    Generate a fix report.
                                </div>
</div>

<div className="flex justify-start w-full animate-[fadeIn_0.5s_ease-out_2.0s_forwards] opacity-0 [animation-fill-mode:forwards]">
<div className="flex items-center gap-4 bg-cyan-900/10 border border-cyan-500/10 px-4 py-3 rounded-xl w-full max-w-[18rem]">
<div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
<svg className="lucide lucide-file-json-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"></path><path d="M14 2v6h6"></path><path d="M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"></path><path d="M8 12a1 1 0 0 1 1 1v1a1 1 0 0 0 1 1 1 1 0 0 0-1 1v1a1 1 0 0 1-1 1"></path></svg>
</div>
<div className="flex flex-col flex-1 min-w-0">
<span className="text-sm font-medium text-white truncate">Report_Q3_Fix.pdf</span>
<span className="text-[10px] text-cyan-400/60 font-mono">Compiling data...</span>
</div>
<div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -inset-4 bg-cyan-500/20 blur-3xl -z-10 rounded-full opacity-30 pointer-events-none"></div>
</div>
</div>

<section className="py-24 px-4 relative z-10 border-t border-white/5 bg-black/20 backdrop-blur-sm" id="about">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2">
<span className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4 block">Definition</span>
<h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-6">
                        The Operating System for <span className="text-cyan-400">Capital.</span>
</h2>
<p className="text-white/60 text-lg leading-relaxed mb-8">
                        FinCore isn't just a chatbot. It's an autonomous layer that sits between your core banking ledger and your customer support interfaces. 
                        It understands ISO 20022 formats, validates against real-time AML databases, and executes transactions with cryptographic proof.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-white/80">
<svg className="lucide lucide-check-circle text-cyan-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
                            Self-hosting options available
                        </li>
<li className="flex items-center gap-3 text-sm text-white/80">
<svg className="lucide lucide-check-circle text-cyan-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
                            SOC2 Type II Certified
                        </li>
</ul>
</div>
<div className="w-full md:w-1/2 relative group">
<div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-2xl rounded-full opacity-40 group-hover:opacity-60 transition-opacity"></div>
<div className="relative glass-panel rounded-2xl p-1 overflow-hidden">
<div className="bg-black/80 rounded-xl aspect-square flex items-center justify-center relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

<div className="relative z-10 w-24 h-24 rounded-full border border-cyan-500/50 flex items-center justify-center bg-cyan-900/20 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
<svg className="lucide lucide-cpu text-cyan-400 animate-pulse-slow" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" rx="1" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
</div>

<div className="absolute w-48 h-48 border border-white/5 rounded-full animate-spin-slow" style={{animationDuration: '10s'}}>
<div className="absolute -top-1.5 left-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]"></div>
</div>
<div className="absolute w-64 h-64 border border-white/5 rounded-full animate-spin-slow" style={{animationDuration: '15s', animationDirection: 'reverse'}}>
<div className="absolute -bottom-1.5 left-1/2 w-2 h-2 bg-cyan-400 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 max-w-7xl mx-auto" id="features">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Why FinCore?</h2>
<p className="text-white/60 max-w-2xl mx-auto">Built by ex-HFT engineers to handle the velocity of modern finance.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel glass-panel-hover rounded-2xl p-8 group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 border border-white/10 text-cyan-400 relative z-10">
<svg className="lucide lucide-zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-lg font-bold text-white mb-3 relative z-10">10ms Latency</h3>
<p className="text-white/60 text-sm leading-relaxed relative z-10">
                        Our inference engine runs on bare metal at the edge, ensuring responses feel instant and conversations flow naturally.
                    </p>
</div>

<div className="glass-panel glass-panel-hover rounded-2xl p-8 group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 border border-white/10 text-purple-400 relative z-10">
<svg className="lucide lucide-shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-bold text-white mb-3 relative z-10">Zero-Knowledge Proofs</h3>
<p className="text-white/60 text-sm leading-relaxed relative z-10">
                        Verify user identity and balance without ever exposing the underlying PII to the LLM context window.
                    </p>
</div>

<div className="glass-panel glass-panel-hover rounded-2xl p-8 group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 border border-white/10 text-blue-400 relative z-10">
<svg className="lucide lucide-brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.97-3.284"></path><path d="M17.97 14.716A4 4 0 0 1 16 18"></path></svg>
</div>
<h3 className="text-lg font-bold text-white mb-3 relative z-10">Adaptive Learning</h3>
<p className="text-white/60 text-sm leading-relaxed relative z-10">
                        The model self-corrects based on your institution's specific rulebook, becoming smarter with every interaction.
                    </p>
</div>
</div>
</section>

<section className="py-24 px-4 bg-white/[0.02] border-y border-white/5 relative overflow-hidden" id="integration">

<div className="absolute left-[10px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"></div>
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 relative z-10">
<h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Drop-in Integration</h2>
<p className="text-white/60">Three steps to full autonomy.</p>
</div>
<div className="flex flex-col gap-24 relative z-10">

<div className="flex flex-col md:flex-row items-center gap-10">
<div className="w-full md:w-1/2 md:text-right pr-0 md:pr-12">
<h3 className="text-xl font-bold text-white mb-2">1. Connect Data Lake</h3>
<p className="text-white/60 text-sm">We ingest your unstructured support logs and structure them into a vector database tailored for finance.</p>
</div>
<div className="hidden md:flex absolute left-1/2 -ml-[20px] w-10 h-10 rounded-full bg-black border border-cyan-500 text-cyan-400 items-center justify-center font-bold shadow-[0_0_15px_rgba(34,211,238,0.4)]">1</div>
<div className="w-full md:w-1/2 pl-0 md:pl-12">
<div className="glass-panel rounded-xl p-4 font-mono text-xs text-white/70">
<span className="text-purple-400">const</span> <span className="text-blue-400">finCore</span> = <span className="text-cyan-400">new</span> FinCore({
                                  dataSource: <span className="text-green-400">'s3://logs-bucket'</span>,
                                  encryption: <span className="text-yellow-400">true</span>
                                });
                            </div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-10">
<div className="w-full md:w-1/2 md:text-right pr-0 md:pr-12 order-2 md:order-1">
<div className="glass-panel rounded-xl p-4 font-mono text-xs text-white/70">
<span className="text-blue-400">finCore</span>.<span className="text-yellow-400">tune</span>({
                                  compliance_level: <span className="text-purple-400">'strict'</span>,
                                  regions: [<span className="text-green-400">'US'</span>, <span className="text-green-400">'EU'</span>]
                                });
                            </div>
</div>
<div className="hidden md:flex absolute left-1/2 -ml-[20px] w-10 h-10 rounded-full bg-black border border-white/20 text-white/50 items-center justify-center font-bold">2</div>
<div className="w-full md:w-1/2 pl-0 md:pl-12 order-1 md:order-2">
<h3 className="text-xl font-bold text-white mb-2">2. Define Parameters</h3>
<p className="text-white/60 text-sm">Set strict guardrails for the AI. It will never hallucinate financial advice outside your predefined scope.</p>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-10">
<div className="w-full md:w-1/2 md:text-right pr-0 md:pr-12">
<h3 className="text-xl font-bold text-white mb-2">3. Go Live</h3>
<p className="text-white/60 text-sm">Deploy instantly to your app, website, or internal slack. Monitor real-time sentiment analysis.</p>
</div>
<div className="hidden md:flex absolute left-1/2 -ml-[20px] w-10 h-10 rounded-full bg-black border border-white/20 text-white/50 items-center justify-center font-bold">3</div>
<div className="w-full md:w-1/2 pl-0 md:pl-12">
<button className="relative inline-flex h-10 overflow-hidden rounded-md p-[1px] group focus:outline-none">
<span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#22d3ee_50%,#000000_100%)]"></span>
<span className="inline-flex h-full w-full items-center justify-center rounded-md bg-black px-6 text-xs font-medium text-white backdrop-blur-3xl">
                                    Deploy Instance
                                </span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 py-24 px-4 relative max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
<div className="">
<h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white mb-3">
                        Native to the <span className="text-cyan-400">blockchain era.</span>
</h2>
<p className="text-white/60 max-w-lg">
                        Built for speed and privacy. FinCore doesn't just chat; it executes secure transactions.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel glass-panel-hover rounded-2xl md:col-span-2 p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-blocks text-cyan-400" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="14" y="3"></rect><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path></svg>
</div>
<div className="h-full flex flex-col justify-end relative z-10">
<div className="inline-flex items-center gap-2 mb-4">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase tracking-wider">Blockchain Ready</span>
</div>
<h3 className="text-xl font-bold text-white mb-2">On-Chain Verification</h3>
<p className="text-white/60 text-sm max-w-md">
                            Seamlessly interact with Solana and EVM chains to verify wallet ownership and asset holdings in real-time.
                        </p>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0"></div>
<div className="absolute top-1/4 right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
</div>

<div className="glass-panel glass-panel-hover rounded-2xl p-8 flex flex-col relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
<div className="mb-auto">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 border border-white/10">
<svg className="lucide lucide-activity text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
</div>
<h3 className="text-lg font-bold text-white mb-2">Real-time Stats</h3>
<p className="text-white/60 text-sm">
                            Monitor token usage and query costs live.
                        </p>
</div>
<div className="mt-8 border-t border-white/10 pt-4 flex items-center justify-between">
<span className="text-xs text-cyan-400 font-mono">latency: 12ms</span>
<div className="flex gap-0.5">
<div className="w-1 h-3 bg-cyan-500 rounded-sm"></div>
<div className="w-1 h-2 bg-cyan-500/50 rounded-sm"></div>
<div className="w-1 h-4 bg-cyan-500/30 rounded-sm"></div>
</div>
</div>
</div>

<div className="glass-panel glass-panel-hover rounded-2xl md:col-span-3 p-8 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="max-w-xl">
<h3 className="text-xl font-bold text-white mb-2">Private by Default</h3>
<p className="text-white/60 text-sm">
                            All conversational data is end-to-end encrypted. We never train our base models on your customer's PII.
                        </p>
</div>
<div className="flex items-center gap-4">
<button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white hover:bg-white/10 transition-colors">
                            View Security Audit
                        </button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 pt-16 pb-8 px-4">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 rounded bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
<span className="text-cyan-400 font-bold text-xs">F</span>
</div>
<span className="font-display font-bold text-lg text-white">FinCore</span>
</a>
<p className="text-sm text-white/50">
                            Defining the standard for autonomous financial intelligence.
                        </p>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Product</h4>
<ul className="space-y-2 text-sm text-white/60">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Integrations</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-white/60">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">API Reference</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-white/60">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-white/40">
<p>© 2025 FinCore AI Inc. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
<a className="hover:text-white transition-colors" href="#">Discord</a>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
