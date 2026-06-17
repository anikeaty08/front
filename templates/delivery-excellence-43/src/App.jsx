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
      

<div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">

<div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/10 blur-[120px] rounded-full mix-blend-screen"></div>

<div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-pink-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
</div>

<nav className="sticky top-0 z-50 bg-[#0B1220]/70 backdrop-blur-xl border-b border-white/[0.06]">
<div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="text-white hover:text-white transition-colors" href="#">Home</a>
<a className="flex items-center gap-1.5 hover:text-white transition-colors" href="#">
                    Meetings <iconify-icon className="text-lg opacity-70" icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
</div>
<div className="flex items-center gap-2.5 text-sm font-medium text-gray-300 hover:text-white cursor-pointer transition-colors group">
<div className="w-7 h-7 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center group-hover:border-white/[0.2] transition-all">
<iconify-icon className="text-base" icon="solar:user-linear"></iconify-icon>
</div>
<span>sangamp880</span>
<iconify-icon className="text-lg opacity-70" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</nav>

<main className="max-w-6xl mx-auto px-8 py-20 flex flex-col gap-32">

<section className="flex flex-col gap-16">

<header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
<div>
<h1 className="text-4xl font-semibold tracking-tight text-white">Delivery Excellence</h1>
<p className="text-base text-gray-400 mt-3">Four pillars that ensure successful long-term outcomes</p>
</div>
<button className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-white/[0.02] border border-white/[0.1] text-white text-sm font-medium backdrop-blur-xl hover:bg-white/[0.05] hover:border-white/[0.2] transition-all shrink-0 overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.02)] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-lg relative z-10" icon="solar:document-download-linear"></iconify-icon>
<span className="relative z-10">Export to PDF</span>
</button>
</header>

<div className="relative py-8">

<div className="hidden lg:flex absolute top-1/2 left-1/2 animate-float w-28 h-28 rounded-full bg-[#0F172A]/90 backdrop-blur-2xl border border-white/[0.15] flex-col items-center justify-center z-20 shadow-[0_0_80px_rgba(139,92,246,0.15)] ring-1 ring-white/[0.05] ring-offset-8 ring-offset-[#0B1220]">
<span className="text-base font-medium text-white tracking-tight">System</span>
<span className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-medium">Success</span>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-32 lg:gap-y-16 relative z-10 max-w-4xl mx-auto">

<div className="rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-8 hover:-translate-y-1 hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 group shadow-lg">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-blue-500/20 transition-all shadow-[0_0_20px_rgba(59,130,246,0.0)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
<iconify-icon className="text-2xl text-blue-400" icon="solar:target-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">Implementation</h3>
<p className="text-base text-gray-400 mt-2.5 leading-relaxed">Where complexity is controlled, not discovered late</p>
</div>

<div className="rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-8 hover:-translate-y-1 hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 group shadow-lg">
<div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-amber-500/20 transition-all shadow-[0_0_20px_rgba(245,158,11,0.0)] group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]">
<iconify-icon className="text-2xl text-amber-400" icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">Tech Ecosystem</h3>
<p className="text-base text-gray-400 mt-2.5 leading-relaxed">Where your systems connect, not create work</p>
</div>

<div className="rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-8 hover:-translate-y-1 hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 group shadow-lg lg:mt-8">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-purple-500/20 transition-all shadow-[0_0_20px_rgba(168,85,247,0.0)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
<iconify-icon className="text-2xl text-purple-400" icon="solar:link-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">Partners</h3>
<p className="text-base text-gray-400 mt-2.5 leading-relaxed">Where your vendors align, not compete</p>
</div>

<div className="rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-8 hover:-translate-y-1 hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 group shadow-lg lg:mt-8">
<div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-teal-500/20 transition-all shadow-[0_0_20px_rgba(20,184,166,0.0)] group-hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]">
<iconify-icon className="text-2xl text-teal-400" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">Service</h3>
<p className="text-base text-gray-400 mt-2.5 leading-relaxed">Where your system evolves, not stalls</p>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-10">
<header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white">What We Need to Get Right</h2>
<p className="text-base text-gray-400 mt-3">Key findings from discovery that inform our approach</p>
</div>
<button className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.1] text-white text-sm font-medium backdrop-blur-xl hover:bg-white/[0.08] hover:border-white/[0.2] transition-all shrink-0">
<iconify-icon className="text-lg text-gray-400" icon="solar:add-circle-linear"></iconify-icon> 
                    Add Finding
                </button>
</header>
<div className="flex flex-col gap-8">

<div className="rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-6 md:p-8 flex flex-col md:flex-row gap-8 hover:border-white/[0.12] transition-colors shadow-lg relative group">
<div className="flex-1">
<h3 className="text-xl font-medium text-white tracking-tight">New finding</h3>
<div className="inline-flex items-center gap-2 mt-2">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
<p className="text-sm font-medium text-amber-500/90 tracking-wide">Impact: impact description</p>
</div>
<div className="mt-8 rounded-xl bg-teal-500/[0.03] border border-teal-500/10 p-5 md:p-6 shadow-inner">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-teal-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="block text-sm font-medium text-teal-400 tracking-wide">ProLiant Solution:</span>
</div>
<p className="text-base text-gray-300 leading-relaxed pl-7">How we address it</p>
</div>
</div>

<div className="flex md:flex-col items-center justify-between md:justify-start gap-4 md:border-l border-white/[0.06] md:pl-8 pt-6 md:pt-0 border-t md:border-t-0">
<div className="flex md:flex-col gap-1.5">
<button className="p-2 text-gray-500 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all"><iconify-icon className="text-xl" icon="solar:alt-arrow-up-linear"></iconify-icon></button>
<button className="p-2 text-gray-500 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all"><iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon></button>
</div>
<div className="flex md:flex-col gap-1.5 md:mt-auto">
<button className="p-2 text-gray-500 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all"><iconify-icon className="text-xl" icon="solar:pen-linear"></iconify-icon></button>
<button className="p-2 text-gray-500 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all"><iconify-icon className="text-xl" icon="solar:copy-linear"></iconify-icon></button>
<button className="p-2 text-gray-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-all"><iconify-icon className="text-xl" icon="solar:trash-bin-trash-linear"></iconify-icon></button>
</div>
</div>
</div>

<div className="rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-6 md:p-8 flex flex-col md:flex-row gap-8 hover:border-white/[0.12] transition-colors shadow-lg relative group">
<div className="flex-1">
<h3 className="text-xl font-medium text-white tracking-tight">New finding</h3>
<div className="inline-flex items-center gap-2 mt-2">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
<p className="text-sm font-medium text-amber-500/90 tracking-wide">Impact: impact description</p>
</div>
<div className="mt-8 rounded-xl bg-teal-500/[0.03] border border-teal-500/10 p-5 md:p-6 shadow-inner">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-teal-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="block text-sm font-medium text-teal-400 tracking-wide">ProLiant Solution:</span>
</div>
<p className="text-base text-gray-300 leading-relaxed pl-7">How we address it</p>
</div>
</div>

<div className="flex md:flex-col items-center justify-between md:justify-start gap-4 md:border-l border-white/[0.06] md:pl-8 pt-6 md:pt-0 border-t md:border-t-0">
<div className="flex md:flex-col gap-1.5">
<button className="p-2 text-gray-500 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all"><iconify-icon className="text-xl" icon="solar:alt-arrow-up-linear"></iconify-icon></button>
<button className="p-2 text-gray-500 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all"><iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon></button>
</div>
<div className="flex md:flex-col gap-1.5 md:mt-auto">
<button className="p-2 text-gray-500 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all"><iconify-icon className="text-xl" icon="solar:pen-linear"></iconify-icon></button>
<button className="p-2 text-gray-500 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all"><iconify-icon className="text-xl" icon="solar:copy-linear"></iconify-icon></button>
<button className="p-2 text-gray-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-all"><iconify-icon className="text-xl" icon="solar:trash-bin-trash-linear"></iconify-icon></button>
</div>
</div>
</div>

<div className="rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-6 md:p-8 flex flex-col md:flex-row gap-8 hover:border-white/[0.12] transition-colors shadow-lg relative group">
<div className="flex-1">
<h3 className="text-xl font-medium text-white tracking-tight">New finding1</h3>
<div className="inline-flex items-center gap-2 mt-2">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
<p className="text-sm font-medium text-amber-500/90 tracking-wide">Impact: impact description1</p>
</div>
<div className="mt-8 rounded-xl bg-teal-500/[0.03] border border-teal-500/10 p-5 md:p-6 shadow-inner">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-teal-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="block text-sm font-medium text-teal-400 tracking-wide">ProLiant Solution:</span>
</div>
<p className="text-base text-gray-300 leading-relaxed pl-7">How we address it1</p>
</div>
</div>

<div className="flex md:flex-col items-center justify-between md:justify-start gap-4 md:border-l border-white/[0.06] md:pl-8 pt-6 md:pt-0 border-t md:border-t-0">
<div className="flex md:flex-col gap-1.5">
<button className="p-2 text-gray-500 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all"><iconify-icon className="text-xl" icon="solar:alt-arrow-up-linear"></iconify-icon></button>
<button className="p-2 text-gray-500 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all"><iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon></button>
</div>
<div className="flex md:flex-col gap-1.5 md:mt-auto">
<button className="p-2 text-gray-500 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all"><iconify-icon className="text-xl" icon="solar:pen-linear"></iconify-icon></button>
<button className="p-2 text-gray-500 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all"><iconify-icon className="text-xl" icon="solar:copy-linear"></iconify-icon></button>
<button className="p-2 text-gray-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-all"><iconify-icon className="text-xl" icon="solar:trash-bin-trash-linear"></iconify-icon></button>
</div>
</div>
</div>

<div className="rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-6 md:p-8 flex flex-col md:flex-row gap-8 hover:border-white/[0.12] transition-colors shadow-lg relative group">
<div className="flex-1">
<h3 className="text-xl font-medium text-white tracking-tight">New finding</h3>
<div className="inline-flex items-center gap-2 mt-2">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
<p className="text-sm font-medium text-amber-500/90 tracking-wide">Impact: impact description</p>
</div>
<div className="mt-8 rounded-xl bg-teal-500/[0.03] border border-teal-500/10 p-5 md:p-6 shadow-inner">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-teal-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="block text-sm font-medium text-teal-400 tracking-wide">ProLiant Solution:</span>
</div>
<p className="text-base text-gray-300 leading-relaxed pl-7">How we address it</p>
</div>
</div>

<div className="flex md:flex-col items-center justify-between md:justify-start gap-4 md:border-l border-white/[0.06] md:pl-8 pt-6 md:pt-0 border-t md:border-t-0">
<div className="flex md:flex-col gap-1.5">
<button className="p-2 text-gray-500 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all"><iconify-icon className="text-xl" icon="solar:alt-arrow-up-linear"></iconify-icon></button>
<button className="p-2 text-gray-500 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all"><iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon></button>
</div>
<div className="flex md:flex-col gap-1.5 md:mt-auto">
<button className="p-2 text-gray-500 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all"><iconify-icon className="text-xl" icon="solar:pen-linear"></iconify-icon></button>
<button className="p-2 text-gray-500 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all"><iconify-icon className="text-xl" icon="solar:copy-linear"></iconify-icon></button>
<button className="p-2 text-gray-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-all"><iconify-icon className="text-xl" icon="solar:trash-bin-trash-linear"></iconify-icon></button>
</div>
</div>
</div>
</div>
</section>

<section className="pb-12">
<header className="mb-10 text-center md:text-left">
<h2 className="text-3xl font-semibold tracking-tight text-white">Investment Overview</h2>
<p className="text-base text-gray-400 mt-3">The investment required to deliver everything outlined above</p>
</header>
<div className="rounded-2xl bg-white/[0.01] backdrop-blur-md border border-dashed border-white/[0.15] p-16 md:p-24 flex flex-col items-center justify-center text-center hover:border-indigo-400/40 hover:bg-white/[0.03] transition-all duration-300 cursor-pointer group shadow-sm">
<div className="w-20 h-20 rounded-full bg-white/[0.03] border border-white/[0.08] text-gray-500 flex items-center justify-center group-hover:text-indigo-400 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 group-hover:scale-110 transition-all duration-300 mb-6 shadow-[0_0_20px_rgba(255,255,255,0.0)] group-hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]">
<iconify-icon className="text-4xl" icon="solar:cloud-upload-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">Upload Proposal PDF</h3>
<p className="text-base text-gray-400 mt-2.5">Click to select a PDF file</p>
</div>
</section>
</main>

    </>
  );
}
