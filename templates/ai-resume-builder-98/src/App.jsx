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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-neutral-800 to-neutral-900 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
<span className="text-white font-medium tracking-tighter text-sm">Ra</span>
</div>
<span className="text-white font-medium tracking-tight">Resumai</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-white transition-colors" href="#">Features</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#">Templates</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<a className="text-sm font-medium text-black bg-white hover:bg-neutral-200 px-4 py-2 rounded-full transition-colors" href="#">Start Building</a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none mesh-bg"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-sm">
<iconify-icon className="text-indigo-400" icon="solar:stars-minimalistic-linear" width="16"></iconify-icon>
<span className="text-xs font-medium text-neutral-300">Powered by GPT-4 &amp; React PDF</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 tracking-tight leading-[1.1] mb-6">
                Your career story,<br/> written by intelligence.
            </h1>
<p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Transform your scattered experience into a polished, ATS-ready resume in seconds. Engineered for developers, designed for humans.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<button className="h-12 px-8 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Generate Resume
                </button>
<button className="h-12 px-8 rounded-full border border-neutral-800 bg-neutral-900/50 text-white font-medium hover:bg-neutral-800 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:import-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Import LinkedIn
                </button>
</div>

<div className="relative w-full max-w-5xl mx-auto rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[16/10]">

<div className="h-12 border-b border-white/10 flex items-center justify-between px-4 bg-neutral-900/30">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs font-mono text-neutral-500">resume-v4-final.pdf</div>
<div className="flex items-center gap-3">
<div className="text-xs text-neutral-500 flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                            Saved
                         </div>
</div>
</div>

<div className="flex h-full">

<div className="w-1/3 border-r border-white/10 p-6 flex flex-col gap-6 bg-neutral-900/10 backdrop-blur-sm">

<div className="space-y-3">
<div className="flex items-center justify-between">
<label className="text-xs font-medium text-white">Experience</label>
<button className="text-[10px] text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
<iconify-icon icon="solar:wand-linear" width="12"></iconify-icon>
                                    Enhance
                                </button>
</div>
<div className="p-3 rounded-lg border border-white/10 bg-neutral-900/50 text-xs text-neutral-300 leading-relaxed font-mono">
                                Senior Frontend Engineer at Vercel. Led the migration to Next.js 14...
                            </div>
</div>

<div className="space-y-4">
<label className="text-xs font-medium text-white block">Tone of Voice</label>
<div className="flex items-center justify-between text-[10px] text-neutral-500">
<span>Casual</span>
<span>Formal</span>
</div>
<div className="relative w-full h-1 bg-neutral-800 rounded-full">
<div className="absolute left-0 top-0 h-full w-3/4 bg-white rounded-full"></div>
<div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow cursor-pointer"></div>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-300">ATS Optimization</span>
<div className="relative inline-block w-8 h-4 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer border-neutral-800 right-0" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-indigo-600 cursor-pointer" htmlFor="toggle"></label>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-300">Anonymize PII</span>
<div className="relative inline-block w-8 h-4 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-neutral-500 border-4 appearance-none cursor-pointer border-neutral-800 right-4" name="toggle2" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-neutral-800 cursor-pointer"></label>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-[#1a1a1a] p-8 flex justify-center overflow-hidden relative">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

<div className="w-full max-w-md bg-white h-[120%] shadow-2xl rounded-sm p-8 origin-top scale-90">

<div className="flex items-start justify-between mb-8">
<div>
<div className="h-6 w-48 bg-neutral-900 mb-2"></div>
<div className="h-3 w-32 bg-neutral-400"></div>
</div>
<div className="h-10 w-10 bg-neutral-200 rounded-full"></div>
</div>
<div className="space-y-6">
<div className="space-y-2">
<div className="h-3 w-20 bg-neutral-300 mb-2"></div>
<div className="h-2 w-full bg-neutral-100"></div>
<div className="h-2 w-full bg-neutral-100"></div>
<div className="h-2 w-2/3 bg-neutral-100"></div>
</div>
<div className="space-y-2">
<div className="h-3 w-20 bg-neutral-300 mb-2"></div>
<div className="h-2 w-full bg-neutral-100"></div>
<div className="h-2 w-full bg-neutral-100"></div>
<div className="h-2 w-2/3 bg-neutral-100"></div>
</div>
<div className="space-y-2">
<div className="h-3 w-20 bg-neutral-300 mb-2"></div>
<div className="flex gap-2">
<div className="h-6 w-16 bg-neutral-100 rounded"></div>
<div className="h-6 w-16 bg-neutral-100 rounded"></div>
<div className="h-6 w-16 bg-neutral-100 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 border-t border-white/5 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Engineered for perfection.</h2>
<p className="text-neutral-500 max-w-xl">Everything you need to land your next role, powered by a robust stack designed for speed and accuracy.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-neutral-900/20 border border-white/5 hover:border-white/10 transition-all overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/5 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:document-add-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Real-time Parsing</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                            Upload your existing PDF. Our OCR engine decomposes it into structured JSON data instantly.
                        </p>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/20 border border-white/5 hover:border-white/10 transition-all overflow-hidden md:col-span-2">
<div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
<div className="flex-1">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/5 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:tuning-square-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Dynamic Templates</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                                Switch between Harvard, Tech, and Creative layouts without losing content. Rendered with React PDF for pixel-perfect output.
                            </p>
</div>

<div className="w-full md:w-1/2 bg-neutral-950 rounded-lg border border-white/5 p-4 flex flex-col gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
<div className="flex items-center justify-between text-[10px] text-neutral-600 uppercase tracking-widest font-medium mb-1">Select Layout</div>
<div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
<div className="w-16 h-20 bg-white/5 border border-indigo-500/50 rounded-sm flex-shrink-0"></div>
<div className="w-16 h-20 bg-neutral-900 border border-white/5 rounded-sm flex-shrink-0"></div>
<div className="w-16 h-20 bg-neutral-900 border border-white/5 rounded-sm flex-shrink-0"></div>
</div>
</div>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/20 border border-white/5 hover:border-white/10 transition-all overflow-hidden md:col-span-2">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/5 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:user-id-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">AI Cover Letters</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                                Automatically generate a tailored cover letter based on the job description and your generated resume context.
                            </p>
</div>
<div className="w-full md:w-2/5 p-4 bg-neutral-900 rounded-lg border border-white/5 text-xs text-neutral-400 font-mono">
<span className="text-purple-400">const</span> coverLetter = <span className="text-yellow-400">await</span> ai.<span className="text-blue-400">generate</span>({<br/>
                              role: <span className="text-green-400">"Full Stack Dev"</span>,<br/>
                              resume: <span className="text-white">ctx.data</span><br/>
                            });
                        </div>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/20 border border-white/5 hover:border-white/10 transition-all overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/5 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Resume Scoring</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                            Get a score from 0-100 based on keyword density, readability, and impact metrics.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5">
<div className="max-w-3xl mx-auto px-6 text-center">
<iconify-icon className="text-neutral-700 mb-6" icon="solar:quote-up-linear" width="32"></iconify-icon>
<h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-8 leading-snug">
                "The MERN stack architecture makes this incredibly fast. I tweaked my resume, exported to PDF, and applied to 5 jobs in under 10 minutes. The AI suggestions were spot on."
            </h3>
<div className="flex items-center justify-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-medium text-white">JD</div>
<div className="text-left">
<div className="text-sm font-medium text-white">James Doe</div>
<div className="text-xs text-neutral-500">Senior Engineer @ TechCorp</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-neutral-950 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center">
<span className="text-white text-[10px] font-bold">R</span>
</div>
<span className="text-sm font-medium text-white tracking-tight">Resumai</span>
</div>
<div className="flex gap-8 flex-wrap">
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Twitter</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">GitHub</a>
</div>
<div className="text-xs text-neutral-600">
                © 2023 Resumai Inc. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
