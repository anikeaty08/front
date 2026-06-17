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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="relative w-full h-[900px] -z-10 bg-gradient-to-b brightness-50 saturate-50 from-purple-100/20 via-blue-100/30 to-white/40" data-alpha-mask="62" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 62%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 62%, transparent)'}}>
<div className="absolute w-full h-full left-0 top-0 -z-10 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20" data-us-project="MSvSkmJb9Ax55PeV6eku"></div>

</div></div>

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] mix-blend-screen bg-green-600/20"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[150px] mix-blend-screen bg-cyan-600/10"></div>
<div className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-amber-500/10 blur-[100px] mix-blend-screen"></div>
</div>

<nav className="fixed top-0 inset-x-0 z-50 border-b backdrop-blur-xl border-white/5 bg-slate-950/40">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl tracking-tighter font-space-grotesk font-semibold text-white" href="#">
                    NAMA
                </a>
<div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
<a className="transition-colors duration-200 font-geist hover:text-white" href="#">Programs</a>
<a className="transition-colors duration-200 font-geist hover:text-white" href="#">Certifications</a>
<a className="transition-colors duration-200 font-geist hover:text-white" href="#">Careers</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium transition-colors hidden md:block font-geist text-slate-300 hover:text-white">
                    Sign In
                </button>
<button className="h-9 px-4 rounded-full border text-sm font-medium transition-all backdrop-blur-md flex items-center gap-2 font-geist bg-white/10 hover:bg-white/15 border-white/10 text-white">
                    Get Started
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="z-10 pt-32 pr-6 pb-24 pl-6 relative">
<div className="max-w-7xl mx-auto">

<div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-sm text-xs font-medium mb-8 bg-white/5 border-white/10 text-cyan-300">
<iconify-icon icon="solar:stars-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="font-geist">New Energy Sector Programs Available</span>
</div>
<h1 className="text-5xl md:text-7xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b leading-tight mb-6 font-space-grotesk font-semibold from-white to-white/50">
                    Master the Future of <br/> Energy in Oman
                </h1>
<p className="text-lg mb-10 max-w-2xl font-light font-geist text-slate-400">
                    A comprehensive training and certification platform designed to build the next generation of professionals for NAMA Supply and the broader energy sector.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
<button className="w-full sm:w-auto h-12 px-8 rounded-full font-medium text-sm transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] font-geist bg-white text-slate-950 hover:bg-slate-200">
<iconify-icon icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Explore Programs
                    </button>
<button className="w-full sm:w-auto h-12 px-8 rounded-full border font-medium text-sm transition-colors backdrop-blur-md flex items-center justify-center gap-2 font-geist bg-white/5 border-white/10 text-white hover:bg-white/10">
<iconify-icon icon="solar:diploma-verified-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Verify Certificate
                    </button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
<div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05] backdrop-blur-xl flex flex-col items-center text-center gap-2">
<div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center mb-2 text-green-400">
<iconify-icon icon="solar:book-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<span className="text-2xl tracking-tight font-space-grotesk font-semibold text-white">24+</span>
<span className="text-xs font-geist text-slate-400">Core Modules</span>
</div>
<div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05] backdrop-blur-xl flex flex-col items-center text-center gap-2">
<div className="h-10 w-10 rounded-full bg-cyan-500/10 flex items-center justify-center mb-2 text-cyan-400">
<iconify-icon icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<span className="text-2xl tracking-tight font-space-grotesk font-semibold text-white">5,000+</span>
<span className="text-xs font-geist text-slate-400">Active Learners</span>
</div>
<div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05] backdrop-blur-xl flex flex-col items-center text-center gap-2">
<div className="h-10 w-10 rounded-full bg-amber-500/10 flex items-center justify-center mb-2 text-amber-400">
<iconify-icon icon="solar:diploma-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<span className="text-2xl tracking-tight font-space-grotesk font-semibold text-white">100%</span>
<span className="text-xs font-geist text-slate-400">Verified Credentials</span>
</div>
<div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05] backdrop-blur-xl flex flex-col items-center text-center gap-2">
<div className="h-10 w-10 rounded-full bg-slate-500/10 flex items-center justify-center mb-2 text-slate-400">
<iconify-icon icon="solar:case-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<span className="text-2xl tracking-tight font-space-grotesk font-semibold text-white">Direct</span>
<span className="text-xs font-geist text-slate-400">Career Pipeline</span>
</div>
</div>

<div className="mb-24">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
<div className="">
<h2 className="text-3xl tracking-tight mb-2 font-space-grotesk font-semibold text-white">Featured Pathways</h2>
<p className="text-sm font-geist text-slate-400">Structured curriculums designed for industry readiness.</p>
</div>
<a className="text-sm flex items-center gap-1 transition-colors font-geist text-cyan-400 hover:text-cyan-300" href="#">
                        View all programs <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative p-1 rounded-2xl bg-gradient-to-b to-transparent overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] hover:-translate-y-1 from-white/10">
<div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="h-full backdrop-blur-xl rounded-xl p-6 border flex flex-col relative z-10 bg-slate-900/80 border-white/5">
<div className="h-12 w-12 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6 text-green-400">
<iconify-icon icon="solar:bolt-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight mb-2 font-space-grotesk font-semibold text-white">Smart Grid Operations</h3>
<p className="text-sm mb-6 flex-grow font-light font-geist text-slate-400">Understand the fundamentals of modern distribution networks, smart metering, and automated grid management.</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<div className="flex items-center gap-3 text-xs text-slate-500">
<span className="flex items-center gap-1 font-geist"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 8 Weeks</span>
<span className="flex items-center gap-1 font-geist"><iconify-icon icon="solar:chart-linear"></iconify-icon> Intermediate</span>
</div>
<button className="h-8 px-3 rounded-md border text-xs font-medium transition-colors font-geist bg-white/5 hover:bg-white/10 border-white/5 text-white">
                                    Enroll
                                </button>
</div>
</div>
</div>

<div className="group relative p-1 rounded-2xl bg-gradient-to-b to-transparent overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(45,212,191,0.1)] hover:-translate-y-1 from-white/10">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="h-full backdrop-blur-xl rounded-xl p-6 border flex flex-col relative z-10 bg-slate-900/80 border-white/5">
<div className="h-12 w-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400">
<iconify-icon icon="solar:leaf-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight mb-2 font-space-grotesk font-semibold text-white">Renewable Integration</h3>
<p className="text-sm mb-6 flex-grow font-light font-geist text-slate-400">Learn how to assess and integrate solar and wind energy sources into the existing national grid infrastructure.</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<div className="flex items-center gap-3 text-xs text-slate-500">
<span className="flex items-center gap-1 font-geist"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 12 Weeks</span>
<span className="flex items-center gap-1 font-geist"><iconify-icon icon="solar:chart-linear"></iconify-icon> Advanced</span>
</div>
<button className="h-8 px-3 rounded-md border text-xs font-medium transition-colors font-geist bg-white/5 hover:bg-white/10 border-white/5 text-white">
                                    Enroll
                                </button>
</div>
</div>
</div>

<div className="group relative p-1 rounded-2xl bg-gradient-to-b to-transparent overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] hover:-translate-y-1 from-white/10">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="h-full backdrop-blur-xl rounded-xl p-6 border flex flex-col relative z-10 bg-slate-900/80 border-white/5">
<div className="h-12 w-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 text-amber-400">
<iconify-icon icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight mb-2 font-space-grotesk font-semibold text-white">Energy Policy &amp; Compliance</h3>
<p className="text-sm mb-6 flex-grow font-light font-geist text-slate-400">Navigate the regulatory framework, safety standards, and compliance requirements within Oman's energy sector.</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<div className="flex items-center gap-3 text-xs text-slate-500">
<span className="flex items-center gap-1 font-geist"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 6 Weeks</span>
<span className="flex items-center gap-1 font-geist"><iconify-icon icon="solar:chart-linear"></iconify-icon> Beginner</span>
</div>
<button className="h-8 px-3 rounded-md border text-xs font-medium transition-colors font-geist bg-white/5 hover:bg-white/10 border-white/5 text-white">
                                    Enroll
                                </button>
</div>
</div>
</div>
</div>
</div>

<div className="relative rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-2xl p-8 md:p-12 overflow-hidden">
<div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none"></div>
<div className="max-w-2xl mb-12 relative z-10">
<h2 className="text-3xl tracking-tight mb-4 font-space-grotesk font-semibold text-white">From Learning to Leading</h2>
<p className="text-sm font-light font-geist text-slate-400">Our platform provides an end-to-end journey. Master the material, prove your knowledge, earn verifiable credentials, and unlock direct career opportunities with NAMA Supply.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">

<div className="relative">
<div className="hidden md:block absolute top-6 left-[3rem] right-[-1rem] h-[1px] bg-gradient-to-r to-transparent from-white/20"></div>
<div className="h-12 w-12 rounded-full border flex items-center justify-center mb-4 relative z-10 bg-slate-800 border-white/10 text-white">
<span className="text-sm font-medium font-geist">01</span>
</div>
<h4 className="text-base font-medium mb-1 font-geist text-white">Learn</h4>
<p className="text-xs font-light font-geist text-slate-400">Interactive video modules and curated study materials.</p>
</div>

<div className="relative">
<div className="hidden md:block absolute top-6 left-[3rem] right-[-1rem] h-[1px] bg-gradient-to-r to-transparent from-white/20"></div>
<div className="h-12 w-12 rounded-full border flex items-center justify-center mb-4 relative z-10 bg-slate-800 border-white/10 text-white">
<span className="text-sm font-medium font-geist">02</span>
</div>
<h4 className="text-base font-medium mb-1 font-geist text-white">Assess</h4>
<p className="text-xs font-light font-geist text-slate-400">Automated grading through challenging online quizzes.</p>
</div>

<div className="relative">
<div className="hidden md:block absolute top-6 left-[3rem] right-[-1rem] h-[1px] bg-gradient-to-r to-transparent from-white/20"></div>
<div className="h-12 w-12 rounded-full border flex items-center justify-center mb-4 relative z-10 bg-slate-800 border-white/10 text-white">
<span className="text-sm font-medium font-geist">03</span>
</div>
<h4 className="text-base font-medium mb-1 font-geist text-white">Certify</h4>
<p className="text-xs font-light font-geist text-slate-400">Earn blockchain-verified digital certificates instantly.</p>
</div>

<div className="relative">
<div className="h-12 w-12 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mb-4 relative z-10 shadow-[0_0_15px_rgba(45,212,191,0.2)] text-cyan-400">
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-base font-medium mb-1 font-geist text-white">Advance</h4>
<p className="text-xs font-light font-geist text-slate-400">Enter the talent pipeline for recruitment opportunities.</p>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t backdrop-blur-lg relative z-10 border-white/5 bg-slate-950/50">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-white">
<span className="text-lg font-medium tracking-tighter font-geist">NAMA</span>
<span className="text-xs text-slate-500 border-l pl-2 font-geist border-white/10">Training Platform</span>
</div>
<div className="flex gap-6 text-xs text-slate-400">
<a className="transition-colors font-geist hover:text-white" href="#">Privacy Policy</a>
<a className="transition-colors font-geist hover:text-white" href="#">Terms of Service</a>
<a className="transition-colors font-geist hover:text-white" href="#">Support</a>
</div>
<p className="text-xs text-slate-500 font-light font-geist">
                © 2023 NAMA Supply. All rights reserved.
            </p>
</div>
</footer>

    </>
  );
}
