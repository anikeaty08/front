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



        // Initialize Lucide Icons
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center">
<i className="text-white w-4 h-4" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-semibold tracking-widest text-white uppercase group-hover:text-cyan-400 transition-colors duration-300">Flow UX AI</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">Sign In</a>
<button className="bg-white text-black hover:bg-neutral-200 px-4 py-2 rounded-full text-xs font-semibold transition-all">
                    Get Started
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] bg-cyan-900/10 rounded-full blur-[100px] mix-blend-screen"></div>
<div className="absolute top-[40%] left-[20%] w-[60%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent blur-sm"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-cyan-400 mb-8 animate-float" style={{animationDuration: '4s'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                V2.0 Now Available
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-6 leading-[1.1]">
                Instant UX Analysis From <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">a Single Screenshot.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Flow UX AI reveals hierarchy, usability issues, flows, and actionable recommendations — all in seconds.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="h-12 px-8 rounded-full gradient-accent text-white font-medium text-sm hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(6,182,212,0.3)] w-full sm:w-auto flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="zap" strokeWidth="1.5"></i>
                    Run Free Analysis
                </button>
<button className="h-12 px-8 rounded-full border border-neutral-700 text-neutral-300 font-medium text-sm hover:bg-white/5 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="play-circle" strokeWidth="1.5"></i>
                    Watch Demo
                </button>
</div>

<div className="relative max-w-5xl mx-auto group">
<div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl opacity-20 blur-lg group-hover:opacity-30 transition duration-1000"></div>
<div className="relative glass-panel rounded-xl overflow-hidden shadow-2xl">

<div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-[#0A0A0A]">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
</div>
<div className="mx-auto text-[10px] text-neutral-600 font-mono">dashboard_final_v2.png (Analyzed)</div>
</div>

<div className="relative aspect-[16/9] bg-[#0A0A0A] p-8 grid grid-cols-12 gap-6">

<div className="col-span-3 space-y-4 border-r border-white/5 pr-6">
<div className="h-8 w-8 rounded bg-neutral-800 mb-8"></div>
<div className="h-4 w-3/4 rounded bg-neutral-800/50"></div>
<div className="h-4 w-1/2 rounded bg-neutral-800/50"></div>
<div className="h-4 w-2/3 rounded bg-neutral-800/50"></div>
</div>

<div className="col-span-9 space-y-6 relative">

<div className="absolute top-0 right-0 p-2 bg-red-500/10 border border-red-500/40 rounded text-[10px] text-red-400 font-mono flex items-center gap-1">
<i className="w-3 h-3" data-lucide="alert-circle"></i> Contrast Fail
                            </div>
<div className="flex justify-between items-end">
<div className="h-10 w-1/3 rounded bg-neutral-800"></div>
<div className="h-8 w-24 rounded bg-cyan-900/20 border border-cyan-500/30"></div>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="h-32 rounded bg-neutral-800/30 border border-white/5"></div>
<div className="h-32 rounded bg-neutral-800/30 border border-white/5"></div>
<div className="h-32 rounded bg-neutral-800/30 border border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-green-500/5 border border-green-500/30 rounded flex items-center justify-center">
<span className="text-[10px] text-green-400 font-mono bg-green-950/50 px-2 py-1 rounded">Good Hierarchy</span>
</div>
</div>
</div>
<div className="h-48 rounded bg-neutral-800/30 border border-white/5"></div>
</div>

<div className="absolute inset-0 border-b-2 border-cyan-500/50 bg-gradient-to-b from-transparent to-cyan-500/10 pointer-events-none animate-scan z-20 h-24 blur-[2px]"></div>
</div>
</div>
</div>

<div className="mt-16">
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-6">Trusted by designers at</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-white font-semibold tracking-tight"><div className="w-5 h-5 bg-white rounded-full"></div> ACME INC</div>
<div className="flex items-center gap-2 text-white font-semibold tracking-tight"><div className="w-5 h-5 bg-white rounded-tr-none rounded-bl-none"></div> ORBITAL</div>
<div className="flex items-center gap-2 text-white font-semibold tracking-tight"><div className="w-5 h-5 border-2 border-white rounded-full"></div> SPHERE</div>
<div className="flex items-center gap-2 text-white font-semibold tracking-tight"><div className="w-5 h-5 bg-white transform rotate-45"></div> KINETIC</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 relative border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">UX Reviews Take Too Long. <br/><span className="text-neutral-500">We Fix That.</span></h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-panel p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 text-red-400">
<i className="w-5 h-5" data-lucide="image-off" strokeWidth="1.5"></i>
</div>
<h3 className="text-white font-medium text-lg mb-2">Stitching Nightmares</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Endless hours screenshotting and stitching flows together manually.</p>
</div>

<div className="glass-panel p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 text-orange-400">
<i className="w-5 h-5" data-lucide="clipboard-list" strokeWidth="1.5"></i>
</div>
<h3 className="text-white font-medium text-lg mb-2">Manual Heuristics</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Going through a 100-point checklist by hand is tedious and error-prone.</p>
</div>

<div className="glass-panel p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4 text-yellow-400">
<i className="w-5 h-5" data-lucide="eye-off" strokeWidth="1.5"></i>
</div>
<h3 className="text-white font-medium text-lg mb-2">Cognitive Load</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Missing obvious hierarchy issues because you've stared at the screen too long.</p>
</div>

<div className="glass-panel p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 text-purple-400">
<i className="w-5 h-5" data-lucide="message-square-warning" strokeWidth="1.5"></i>
</div>
<h3 className="text-white font-medium text-lg mb-2">Hard to Explain</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Struggling to articulate vague UX "feelings" to engineering teams.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Your AI Co-Designer for UX Audits.</h2>
<p className="text-neutral-400">From static image to actionable report in three steps.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-8">
<div className="text-4xl font-semibold text-white/10 mb-6 group-hover:text-cyan-500/20 transition-colors">01</div>
<h3 className="text-xl font-medium text-white mb-3">Upload Screenshot</h3>
<p className="text-sm text-neutral-400">Drag and drop any UI screenshot. Web, mobile, or desktop applications supported.</p>
</div>
<div className="h-32 bg-gradient-to-t from-cyan-900/10 to-transparent mt-4 mx-8 rounded-t-lg border-t border-x border-white/5 relative">
<i className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-cyan-500/50 w-8 h-8" data-lucide="upload-cloud"></i>
</div>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-8">
<div className="text-4xl font-semibold text-white/10 mb-6 group-hover:text-purple-500/20 transition-colors">02</div>
<h3 className="text-xl font-medium text-white mb-3">AI Analysis</h3>
<p className="text-sm text-neutral-400">Our vision model detects hierarchy, applies Nielsen Heuristics, and maps user flows.</p>
</div>
<div className="h-32 bg-gradient-to-t from-purple-900/10 to-transparent mt-4 mx-8 rounded-t-lg border-t border-x border-white/5 flex items-center justify-center gap-2">
<div className="w-16 h-1 bg-purple-500/30 rounded-full animate-pulse"></div>
<div className="w-8 h-1 bg-purple-500/30 rounded-full animate-pulse delay-75"></div>
</div>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-8">
<div className="text-4xl font-semibold text-white/10 mb-6 group-hover:text-green-500/20 transition-colors">03</div>
<h3 className="text-xl font-medium text-white mb-3">Actionable Report</h3>
<p className="text-sm text-neutral-400">Receive a prioritized list of fixes. Export directly to Notion, Jira, or PDF.</p>
</div>
<div className="h-32 bg-gradient-to-t from-green-900/10 to-transparent mt-4 mx-8 rounded-t-lg border-t border-x border-white/5 p-4 space-y-2">
<div className="h-2 w-full bg-green-500/10 rounded"></div>
<div className="h-2 w-2/3 bg-green-500/10 rounded"></div>
<div className="h-2 w-3/4 bg-green-500/10 rounded"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Everything You Need for a <br /> Professional UX Audit.</br></h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-xl flex flex-col items-start group">
<div className="p-3 bg-neutral-800 rounded-lg text-white mb-6 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
<i className="w-6 h-6" data-lucide="layout-template" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Frame Hierarchy Extraction</h3>
<p className="text-sm text-neutral-400">Auto-detects containers, blocks, and layout structure to visualize the DOM-like tree from pixels.</p>
</div>

<div className="glass-panel p-8 rounded-xl flex flex-col items-start group">
<div className="p-3 bg-neutral-800 rounded-lg text-white mb-6 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
<i className="w-6 h-6" data-lucide="scan-search" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2">UX Issue Detection</h3>
<p className="text-sm text-neutral-400">Identifies accessibility failures, contrast issues, and heuristic violations instantly.</p>
</div>

<div className="glass-panel p-8 rounded-xl flex flex-col items-start group">
<div className="p-3 bg-neutral-800 rounded-lg text-white mb-6 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
<i className="w-6 h-6" data-lucide="git-merge" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2">User Flow Modeling</h3>
<p className="text-sm text-neutral-400">Reconstructs the expected user path through the interface to spot dead-ends or friction.</p>
</div>

<div className="glass-panel p-8 rounded-xl flex flex-col items-start group">
<div className="p-3 bg-neutral-800 rounded-lg text-white mb-6 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
<i className="w-6 h-6" data-lucide="bar-chart-4" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Prioritization Engine</h3>
<p className="text-sm text-neutral-400">Ranks every issue by severity, estimated engineering effort, and user impact.</p>
</div>

<div className="glass-panel p-8 rounded-xl flex flex-col items-start group">
<div className="p-3 bg-neutral-800 rounded-lg text-white mb-6 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
<i className="w-6 h-6" data-lucide="lightbulb" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Recommendations</h3>
<p className="text-sm text-neutral-400">Generates clear "How to Fix" and "Why it Matters" snippets for developers.</p>
</div>

<div className="glass-panel p-8 rounded-xl flex flex-col items-start group">
<div className="p-3 bg-neutral-800 rounded-lg text-white mb-6 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
<i className="w-6 h-6" data-lucide="share-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Export to PDF / Jira</h3>
<p className="text-sm text-neutral-400">Push tickets directly to your project management tool with one click.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between mb-12">
<h2 className="text-3xl font-semibold text-white tracking-tight">See Flow UX AI in Action.</h2>
<div className="mt-4 md:mt-0 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-mono">
                    LIVE PREVIEW MODE
                </div>
</div>
<div className="grid lg:grid-cols-2 gap-0 border border-white/10 rounded-2xl overflow-hidden bg-[#0A0A0A]">

<div className="p-10 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col items-center justify-center min-h-[400px] relative bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale opacity-30">
<div className="absolute inset-0 bg-neutral-950/80"></div>
<div className="relative z-10 text-center">
<div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
<i className="text-white w-6 h-6" data-lucide="image"></i>
</div>
<p className="text-white font-medium mb-2">Checkout_Flow_Final.jpg</p>
<p className="text-xs text-neutral-500">2.4 MB • 1920x1080</p>
</div>
</div>

<div className="p-8 bg-neutral-900/30 backdrop-blur-sm">
<div className="flex items-center justify-between mb-8">
<div className="text-sm text-neutral-400">Analysis Complete</div>
<div className="text-xs font-mono text-green-400">0.4s processing time</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-8">
<div className="p-4 rounded-lg bg-neutral-800/50 border border-white/5">
<div className="text-xs text-neutral-500 mb-1">Usability Score</div>
<div className="text-2xl font-semibold text-white">82<span className="text-neutral-600 text-sm">/100</span></div>
</div>
<div className="p-4 rounded-lg bg-neutral-800/50 border border-white/5">
<div className="text-xs text-neutral-500 mb-1">Critical Issues</div>
<div className="text-2xl font-semibold text-red-400">03</div>
</div>
</div>

<div className="space-y-4 mb-8">
<div className="flex gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/10">
<div className="mt-0.5"><i className="w-4 h-4 text-red-400" data-lucide="x-circle"></i></div>
<div>
<h4 className="text-sm font-medium text-red-200">Button Contrast Low</h4>
<p className="text-xs text-red-200/60 mt-1">CTA "Pay Now" fails WCAG AA. Increase foreground contrast.</p>
</div>
</div>
<div className="flex gap-3 p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/10">
<div className="mt-0.5"><i className="w-4 h-4 text-yellow-400" data-lucide="alert-triangle"></i></div>
<div>
<h4 className="text-sm font-medium text-yellow-200">Visual Clutter</h4>
<p className="text-xs text-yellow-200/60 mt-1">Too many competing primary actions in the header area.</p>
</div>
</div>
</div>
<button className="w-full py-3 rounded-lg bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors">
                        Try Your Screenshot
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-950" id="how-it-works">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-16">Three Steps to Better UX.</h2>
<div className="relative flex flex-col md:flex-row justify-between items-center gap-12 max-w-5xl mx-auto">

<div className="hidden md:block absolute top-12 left-0 w-full h-[2px] border-t-2 border-dashed border-neutral-800 z-0"></div>

<div className="relative z-10 bg-neutral-950 px-4">
<div className="w-24 h-24 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-900/20">
<i className="w-8 h-8 text-white" data-lucide="upload"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Upload</h3>
<p className="text-sm text-neutral-400 max-w-[200px] mx-auto">Drag any JPG/PNG screenshot into the dashboard.</p>
</div>

<div className="relative z-10 bg-neutral-950 px-4">
<div className="w-24 h-24 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-900/20">
<i className="w-8 h-8 text-white" data-lucide="cpu"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Analyze</h3>
<p className="text-sm text-neutral-400 max-w-[200px] mx-auto">Our AI engine scans for usability and flow.</p>
</div>

<div className="relative z-10 bg-neutral-950 px-4">
<div className="w-24 h-24 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-900/20">
<i className="w-8 h-8 text-white" data-lucide="file-check"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Report</h3>
<p className="text-sm text-neutral-400 max-w-[200px] mx-auto">Get prioritized fixes and export to your team.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="absolute inset-0 bg-gradient-to-b from-neutral-900/20 to-neutral-950"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="glass-panel rounded-3xl p-12 md:p-20 text-center border border-white/5 bg-gradient-to-b from-white/5 to-black">
<div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-cyan-300 uppercase bg-cyan-900/20 rounded-full">
                    Designed for UX/UI Designers
                </div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-8">Built for Flow Architects.</h2>
<div className="grid md:grid-cols-4 gap-8 text-left max-w-4xl mx-auto mt-12">
<div>
<div className="text-white font-medium mb-2 flex items-center gap-2"><i className="w-4 h-4 text-neutral-500" data-lucide="clock"></i> Faster Audits</div>
<p className="text-sm text-neutral-400">Cut audit time by 90% with instant heuristic checks.</p>
</div>
<div>
<div className="text-white font-medium mb-2 flex items-center gap-2"><i className="w-4 h-4 text-neutral-500" data-lucide="layers"></i> Clear Hierarchy</div>
<p className="text-sm text-neutral-400">Visualize structure objectively to settle layout debates.</p>
</div>
<div>
<div className="text-white font-medium mb-2 flex items-center gap-2"><i className="w-4 h-4 text-neutral-500" data-lucide="message-square"></i> PM Ready</div>
<p className="text-sm text-neutral-400">Explanations written in language Product Managers understand.</p>
</div>
<div>
<div className="text-white font-medium mb-2 flex items-center gap-2"><i className="w-4 h-4 text-neutral-500" data-lucide="shield-check"></i> Reliable Data</div>
<p className="text-sm text-neutral-400">Backed by Nielsen Heuristics and WCAG standards.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Simple Pricing for Fast UX Insights.</h2>
<p className="text-neutral-400">Start free, upgrade for power features.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="rounded-xl border border-white/10 p-8 bg-neutral-900/20">
<h3 className="text-lg font-medium text-white mb-2">Free</h3>
<div className="text-3xl font-semibold text-white mb-6">$0</div>
<ul className="space-y-3 mb-8 text-sm text-neutral-400">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-neutral-500" data-lucide="check"></i> 1 Analysis / Day</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-neutral-500" data-lucide="check"></i> Basic Heuristics</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-neutral-500" data-lucide="check"></i> Web Only</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-medium">Start Free</button>
</div>

<div className="rounded-xl border border-cyan-500/50 p-8 bg-cyan-950/10 relative shadow-[0_0_30px_rgba(6,182,212,0.1)]">
<div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
<span className="bg-cyan-500 text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Popular</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Pro</h3>
<div className="text-3xl font-semibold text-white mb-6">$29<span className="text-base font-normal text-neutral-500">/mo</span></div>
<ul className="space-y-3 mb-8 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-cyan-400" data-lucide="check"></i> Unlimited Analyses</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-cyan-400" data-lucide="check"></i> PDF &amp; Notion Export</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-cyan-400" data-lucide="check"></i> AI Chat Assistant</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-cyan-400" data-lucide="check"></i> Mobile &amp; Web</li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white transition-colors text-sm font-medium">Get Pro</button>
</div>

<div className="rounded-xl border border-white/10 p-8 bg-neutral-900/20">
<h3 className="text-lg font-medium text-white mb-2">Team</h3>
<div className="text-3xl font-semibold text-white mb-6">$99<span className="text-base font-normal text-neutral-500">/mo</span></div>
<ul className="space-y-3 mb-8 text-sm text-neutral-400">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-neutral-500" data-lucide="check"></i> 5 Team Seats</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-neutral-500" data-lucide="check"></i> Shared Workspace</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-neutral-500" data-lucide="check"></i> Jira Integration</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-medium">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-semibold text-white mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-neutral-900/30 border border-white/5 rounded-lg p-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-neutral-200">
                        Is this secure?
                        <span className="transform group-open:rotate-180 transition-transform"><i className="w-4 h-4" data-lucide="chevron-down"></i></span>
</summary>
<p className="text-neutral-400 text-sm mt-3 leading-relaxed">Yes. Screenshots are processed securely and deleted from our servers after analysis unless you choose to save them to your workspace.</p>
</details>
<details className="group bg-neutral-900/30 border border-white/5 rounded-lg p-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-neutral-200">
                        What if the screenshot is low quality?
                        <span className="transform group-open:rotate-180 transition-transform"><i className="w-4 h-4" data-lucide="chevron-down"></i></span>
</summary>
<p className="text-neutral-400 text-sm mt-3 leading-relaxed">Flow UX AI uses advanced upscaling, but for best results, we recommend at least 1080p resolution or direct high-fidelity exports from Figma.</p>
</details>
<details className="group bg-neutral-900/30 border border-white/5 rounded-lg p-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-neutral-200">
                        Can I export reports to my workspace?
                        <span className="transform group-open:rotate-180 transition-transform"><i className="w-4 h-4" data-lucide="chevron-down"></i></span>
</summary>
<p className="text-neutral-400 text-sm mt-3 leading-relaxed">Absolutely. Pro and Team plans allow one-click exports to Notion, Jira, PDF, and plain markdown.</p>
</details>
<details className="group bg-neutral-900/30 border border-white/5 rounded-lg p-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-neutral-200">
                        Does it work with mobile UI?
                        <span className="transform group-open:rotate-180 transition-transform"><i className="w-4 h-4" data-lucide="chevron-down"></i></span>
</summary>
<p className="text-neutral-400 text-sm mt-3 leading-relaxed">Yes, our model is trained on both desktop and mobile patterns, specifically identifying touch target issues on mobile screens.</p>
</details>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden text-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-gradient-to-r from-cyan-900/20 to-blue-900/20 blur-[100px] -z-10 rounded-full"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-8">Start Your First UX Audit <br/> in 10 Seconds.</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-14 px-8 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10 w-full sm:w-auto">
                    Run Free Analysis
                </button>
<button className="h-14 px-8 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-colors w-full sm:w-auto">
                    View Example Report
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<div className="w-5 h-5 rounded bg-neutral-800 flex items-center justify-center">
<i className="text-white w-3 h-3" data-lucide="layers"></i>
</div>
<span className="text-sm font-semibold text-neutral-400 uppercase tracking-widest">Flow UX AI</span>
</div>
<div className="flex gap-6 text-sm text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="mt-4 md:mt-0 text-xs text-neutral-600">
                © 2024 Flow UX AI. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
