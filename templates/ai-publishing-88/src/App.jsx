import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
dark: '#020617',     // Deep Slate 950
surface: '#0f172a',  // Slate 900
surfaceHighlight: '#1e293b',
accent: '#8b5cf6',   // Violet
accentSec: '#ec4899', // Pink
text: '#f8fafc',     // Slate 50
muted: '#94a3b8',    // Slate 400
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2a2a2a 0deg, #020617 180deg, #2a2a2a 360deg)',
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 start-0 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center space-x-2 group" href="#">

<div className="relative w-8 h-8 flex items-center justify-center bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-lg shadow-[0_0_15px_rgba(139,92,246,0.5)] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] transition-all">
<i className="text-white w-4 h-4 absolute top-1 right-1 opacity-75" data-lucide="sparkles"></i>
<i className="text-white w-5 h-5 mb-[-4px]" data-lucide="book-open"></i>
</div>
<span className="self-center text-xl font-semibold tracking-tight whitespace-nowrap text-white">LitForge</span>
</a>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-brand-muted hover:text-white transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-brand-muted hover:text-white transition-colors" href="#how-it-works">Workflow</a>
<a className="text-sm font-medium text-brand-muted hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse">
<button className="hidden md:block text-brand-muted hover:text-white font-medium text-sm px-4 py-2 transition-colors" type="button">Log In</button>
<button className="group relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-violet-600 to-fuchsia-600 group-hover:from-violet-500 group-hover:to-fuchsia-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-violet-800 shadow-lg shadow-violet-900/40" type="button">
<span className="relative px-5 py-2 transition-all ease-in duration-75 bg-brand-dark bg-opacity-0 rounded-md group-hover:bg-opacity-0">
                        Start Forging
                    </span>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-violet-600/20 blur-[120px] rounded-full pointer-events-none opacity-40 mix-blend-screen"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[100px] rounded-full pointer-events-none opacity-30"></div>
<div className="relative max-w-5xl mx-auto px-6 text-center z-10">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-muted text-xs font-medium mb-8 backdrop-blur-sm hover:border-violet-500/50 hover:text-violet-200 transition-all cursor-default shadow-lg shadow-black/50">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
</span>
<span className="bg-gradient-to-r from-violet-200 to-fuchsia-200 bg-clip-text text-transparent">v2.0 is now live</span>
<div className="w-[1px] h-3 bg-white/20 mx-1"></div>
<span>The Future of Publishing</span>
</div>
<h1 className="mb-6 text-5xl md:text-7xl font-semibold tracking-tighter text-white leading-[1.1]">
                Forge Books. <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">Publish Faster.</span>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 glow-text">Scale Smarter.</span>
</h1>
<p className="mb-10 text-lg md:text-xl font-normal text-brand-muted max-w-2xl mx-auto leading-relaxed">
                The all-in-one operating system for modern authors. Replace fragmented tools with a single, intelligent engine powered by next-gen AI.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex justify-center items-center py-3.5 px-8 text-base font-medium text-white rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 focus:ring-4 focus:ring-violet-900 transition-all shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)]" href="#">
                    Start Forging
                    <i className="ml-2 w-4 h-4 fill-white" data-lucide="zap"></i>
</a>
<a className="inline-flex justify-center items-center py-3.5 px-8 text-base font-medium text-white rounded-lg glass-card hover:bg-white/10 transition-all" href="#how-it-works">
<i className="mr-2 w-4 h-4 fill-white" data-lucide="play"></i>
                    Watch Demo
                </a>
</div>

<div className="mt-20 relative mx-auto w-full max-w-5xl rounded-xl border border-white/10 bg-[#0B0F17]/80 backdrop-blur-md shadow-2xl overflow-hidden group transform hover:scale-[1.01] transition-transform duration-700">

<div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
<div className="p-4 border-b border-white/5 flex gap-4 items-center bg-black/20">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-white/10"></div>
<div className="w-3 h-3 rounded-full bg-white/10"></div>
<div className="w-3 h-3 rounded-full bg-white/10"></div>
</div>
<div className="h-6 w-64 rounded-md bg-white/5 flex items-center px-3 border border-white/5">
<div className="w-full h-1.5 rounded-full bg-white/10"></div>
</div>
</div>
<div className="p-8 grid grid-cols-12 gap-8 h-[450px] md:h-[550px] bg-gradient-to-b from-[#0B0F17] to-[#020617]">

<div className="col-span-3 hidden md:flex flex-col gap-5 border-r border-white/5 pr-6">
<div className="flex items-center gap-3 px-2 py-2 rounded-lg bg-violet-500/10 border border-violet-500/20">
<div className="w-4 h-4 rounded bg-violet-500"></div>
<div className="h-2 w-16 rounded-full bg-white/20"></div>
</div>
<div className="space-y-3 px-2">
<div className="h-2 w-20 rounded bg-white/5"></div>
<div className="h-2 w-24 rounded bg-white/5"></div>
<div className="h-2 w-16 rounded bg-white/5"></div>
</div>
<div className="mt-8 space-y-3 px-2">
<div className="h-2 w-full rounded bg-white/5 opacity-50"></div>
<div className="h-2 w-full rounded bg-white/5 opacity-50"></div>
</div>

<div className="mt-auto p-4 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/5">
<div className="flex justify-between items-center mb-2">
<div className="w-6 h-6 rounded-full bg-fuchsia-500/20 flex items-center justify-center">
<i className="w-3 h-3 text-fuchsia-400" data-lucide="sparkles"></i>
</div>
</div>
<div className="h-1.5 w-full bg-white/10 rounded-full mb-2 overflow-hidden">
<div className="h-full w-[70%] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"></div>
</div>
<div className="h-2 w-12 rounded bg-white/10"></div>
</div>
</div>

<div className="col-span-12 md:col-span-9 flex flex-col gap-6">
<div className="flex justify-between items-center">
<div className="space-y-2">
<div className="h-6 w-48 rounded bg-white/10"></div>
<div className="h-3 w-32 rounded bg-white/5"></div>
</div>
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border border-black bg-slate-700"></div>
<div className="w-8 h-8 rounded-full border border-black bg-slate-600"></div>
</div>
</div>

<div className="flex-1 rounded-xl border border-white/5 bg-white/[0.01] p-8 relative overflow-hidden shadow-inner">
<div className="space-y-5 max-w-2xl">
<div className="h-4 w-full rounded bg-white/10 animate-pulse delay-75"></div>
<div className="h-4 w-[95%] rounded bg-white/10 animate-pulse delay-100"></div>
<div className="h-4 w-[98%] rounded bg-white/10 animate-pulse delay-150"></div>
<div className="h-4 w-[90%] rounded bg-white/10 animate-pulse delay-200"></div>
<div className="h-4 w-[60%] rounded bg-white/10 animate-pulse delay-300"></div>
<div className="mt-8 p-4 rounded-lg bg-violet-500/10 border border-violet-500/20 flex gap-3">
<div className="mt-1"><i className="w-4 h-4 text-violet-400" data-lucide="message-square"></i></div>
<div className="space-y-2 w-full">
<div className="h-2 w-32 rounded bg-violet-400/30"></div>
<div className="h-2 w-full rounded bg-violet-400/20"></div>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 group cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
<div className="relative flex gap-3 items-center bg-[#0B0F17] border border-white/10 rounded-full pl-3 pr-4 py-2.5 shadow-xl">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500 flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="wand-2"></i>
</div>
<span className="text-xs font-medium text-white">Enhance Prose</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-black/40">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-semibold text-brand-muted mb-8 uppercase tracking-widest">Powering next-gen bestsellers</p>
<div className="flex flex-wrap justify-center gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
<div className="flex items-center gap-2 text-lg font-bold text-white"><i className="w-6 h-6" data-lucide="infinity"></i> LOOP</div>
<div className="flex items-center gap-2 text-lg font-bold text-white"><i className="w-6 h-6 text-fuchsia-500 fill-fuchsia-500/20" data-lucide="triangle"></i> PRISM</div>
<div className="flex items-center gap-2 text-lg font-bold text-white"><i className="w-6 h-6 text-violet-500" data-lucide="circle-dashed"></i> ORBIT</div>
<div className="flex items-center gap-2 text-lg font-bold text-white"><i className="w-6 h-6" data-lucide="box"></i> CUBE</div>
<div className="flex items-center gap-2 text-lg font-bold text-white"><i className="w-6 h-6" data-lucide="wind"></i> AERO</div>
</div>
</div>
</section>

<section className="py-32 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Publishing Intelligence</h2>
<p className="text-lg text-brand-muted max-w-2xl mx-auto">From messy draft to global distribution. LitForge handles the complexity.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl glass-card hover:bg-white/[0.05] transition-all duration-300 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-violet-400 group-hover:text-violet-300 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Neural Drafting</h3>
<p className="text-brand-muted leading-relaxed">Generate outlines and chapters with models fine-tuned on bestseller narrative structures.</p>
</div>

<div className="group relative p-8 rounded-2xl glass-card hover:bg-white/[0.05] transition-all duration-300 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-fuchsia-400 group-hover:text-fuchsia-300 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="scan-text"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Contextual Editing</h3>
<p className="text-brand-muted leading-relaxed">Refine tone and pacing while preserving your unique authorial voice. No robotic phrasing.</p>
</div>

<div className="group relative p-8 rounded-2xl glass-card hover:bg-white/[0.05] transition-all duration-300 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="file-check-2"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Liquid Formatting</h3>
<p className="text-brand-muted leading-relaxed">One click to generate perfect PDF, EPUB, and KPF files compliant with all major marketplaces.</p>
</div>

<div className="md:col-span-2 group relative p-1 rounded-2xl bg-gradient-to-br from-white/10 to-white/0 overflow-hidden">
<div className="relative h-full bg-[#0B0F17] rounded-xl p-8 flex flex-col md:flex-row gap-10 items-center overflow-hidden">

<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-violet-900/20 blur-[80px] rounded-full pointer-events-none"></div>
<div className="flex-1 relative z-10">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center mb-6 text-white shadow-lg shadow-violet-900/50">
<i className="w-6 h-6" data-lucide="globe-2"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Omni-Channel Distribution</h3>
<p className="text-brand-muted leading-relaxed">Deploy to Amazon KDP, Apple Books, and Google Play instantly. Update metadata globally from one dashboard.</p>
</div>
<div className="flex-1 w-full relative z-10">
<div className="grid grid-cols-2 gap-3 w-full opacity-80">
<div className="bg-white/5 border border-white/5 p-4 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
<span className="text-xs font-medium text-white">Amazon KDP</span>
</div>
<div className="bg-white/5 border border-white/5 p-4 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
<span className="text-xs font-medium text-white">Apple Books</span>
</div>
<div className="bg-white/5 border border-white/5 p-4 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
<span className="text-xs font-medium text-white">IngramSpark</span>
</div>
<div className="bg-white/5 border border-white/5 p-4 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
<span className="text-xs font-medium text-white">Google Play</span>
</div>
</div>
</div>
</div>
</div>

<div className="group relative p-8 rounded-2xl glass-card hover:bg-white/[0.05] transition-all duration-300 overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="trending-up"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Live Royalty Data</h3>
<p className="text-brand-muted leading-relaxed">Aggregate sales data across platforms. Visualize your earnings in real-time.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-gradient-to-b from-[#0B0F17] to-brand-dark" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-4">From Spark to Sales</h2>
<p className="text-lg text-brand-muted">A streamlined path for the modern creator.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">

<div className="relative pt-8 md:pt-16 group">
<div className="hidden md:flex absolute top-[44px] left-1/2 -translate-x-1/2 w-3 h-3 bg-brand-dark border border-violet-500 rounded-full z-10 shadow-[0_0_10px_rgba(139,92,246,0.8)]"></div>
<div className="text-5xl font-bold text-white/5 mb-6 group-hover:text-violet-500/20 transition-colors select-none">01</div>
<h3 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-400 transition-colors">Synthesize</h3>
<p className="text-brand-muted text-sm leading-relaxed">Brainstorm with AI. Expand bullet points into rich, descriptive prose instantly.</p>
</div>

<div className="relative pt-8 md:pt-16 group">
<div className="hidden md:flex absolute top-[44px] left-1/2 -translate-x-1/2 w-3 h-3 bg-brand-dark border border-white/20 rounded-full z-10 group-hover:border-fuchsia-500 transition-colors"></div>
<div className="text-5xl font-bold text-white/5 mb-6 group-hover:text-fuchsia-500/20 transition-colors select-none">02</div>
<h3 className="text-lg font-semibold text-white mb-2 group-hover:text-fuchsia-400 transition-colors">Refine</h3>
<p className="text-brand-muted text-sm leading-relaxed">Use smart filters to catch inconsistencies, improve flow, and strengthen dialogue.</p>
</div>

<div className="relative pt-8 md:pt-16 group">
<div className="hidden md:flex absolute top-[44px] left-1/2 -translate-x-1/2 w-3 h-3 bg-brand-dark border border-white/20 rounded-full z-10 group-hover:border-blue-500 transition-colors"></div>
<div className="text-5xl font-bold text-white/5 mb-6 group-hover:text-blue-500/20 transition-colors select-none">03</div>
<h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">Package</h3>
<p className="text-brand-muted text-sm leading-relaxed">Auto-generate covers and interior layouts. Export pristine files for every retailer.</p>
</div>

<div className="relative pt-8 md:pt-16 group">
<div className="hidden md:flex absolute top-[44px] left-1/2 -translate-x-1/2 w-3 h-3 bg-brand-dark border border-white/20 rounded-full z-10 group-hover:border-emerald-500 transition-colors"></div>
<div className="text-5xl font-bold text-white/5 mb-6 group-hover:text-emerald-500/20 transition-colors select-none">04</div>
<h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">Deploy</h3>
<p className="text-brand-muted text-sm leading-relaxed">Launch globally. LitForge manages the backend so you can focus on the next book.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-black"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-8">Why LitForge?</h2>
<div className="space-y-8">
<div className="flex gap-5 group">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-violet-500/10 group-hover:border-violet-500/50 transition-all">
<i className="w-5 h-5 text-white group-hover:text-violet-400" data-lucide="layers"></i>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Unified Workflow</h4>
<p className="text-brand-muted leading-relaxed">Most tools help you write OR publish. We do both, end-to-end, removing friction.</p>
</div>
</div>
<div className="flex gap-5 group">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-fuchsia-500/10 group-hover:border-fuchsia-500/50 transition-all">
<i className="w-5 h-5 text-white group-hover:text-fuchsia-400" data-lucide="bar-chart-2"></i>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Market Precision</h4>
<p className="text-brand-muted leading-relaxed">Optimize titles, keywords, and categories with real-time market data to maximize visibility.</p>
</div>
</div>
<div className="flex gap-5 group">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/50 transition-all">
<i className="w-5 h-5 text-white group-hover:text-blue-400" data-lucide="lock"></i>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">100% IP Ownership</h4>
<p className="text-brand-muted leading-relaxed">You keep 100% of your royalties and rights. We are the engine, you are the driver.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-fuchsia-600/20 blur-[60px] rounded-full"></div>
<div className="relative gradient-border rounded-2xl bg-[#0B0F17]/90 p-8 shadow-2xl backdrop-blur-xl">
<div className="flex justify-between items-end border-b border-white/10 pb-6 mb-6">
<div>
<div className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">Total Royalties</div>
<div className="text-4xl font-semibold text-white tracking-tight">$124,502.45</div>
</div>
<div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20 flex items-center">
<i className="w-3 h-3 mr-1" data-lucide="arrow-up-right"></i> 24.5%
                        </div>
</div>
<div className="space-y-6">

<div className="group">
<div className="flex justify-between text-xs text-brand-muted mb-2">
<span>Amazon KDP</span>
<span className="text-white">$84,200</span>
</div>
<div className="h-2 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-violet-600 to-indigo-500 w-[70%] rounded-full group-hover:w-[72%] transition-all duration-1000"></div>
</div>
</div>
<div className="group">
<div className="flex justify-between text-xs text-brand-muted mb-2">
<span>Apple Books</span>
<span className="text-white">$28,100</span>
</div>
<div className="h-2 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-fuchsia-600 to-pink-500 w-[35%] rounded-full group-hover:w-[37%] transition-all duration-1000"></div>
</div>
</div>
<div className="group">
<div className="flex justify-between text-xs text-brand-muted mb-2">
<span>Google Play</span>
<span className="text-white">$12,202</span>
</div>
<div className="h-2 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 w-[15%] rounded-full group-hover:w-[17%] transition-all duration-1000"></div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-[#0B0F17]"></div>
<div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-[#0B0F17]"></div>
<div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-[#0B0F17]"></div>
</div>
<button className="text-xs font-medium text-violet-400 hover:text-white transition-colors flex items-center">
                            View Analytics <i className="w-3 h-3 ml-1" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">

<div className="absolute inset-0 bg-brand-dark"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-[80px] pointer-events-none"></div>
<div className="relative max-w-4xl mx-auto px-6 text-center z-10">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">Build your publishing empire.</h2>
<p className="text-xl text-brand-muted mb-10 max-w-2xl mx-auto">Join the next generation of authors using AI to unlock speed, scale, and creative freedom.</p>
<div className="flex flex-col sm:flex-row justify-center gap-5">
<button className="px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-lg shadow-violet-900/40">
                    Get Started for Free
                </button>
<button className="px-8 py-4 text-lg font-medium text-white bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all">
                    Contact Sales
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#010409] py-16">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center space-x-2 mb-6" href="#">
<div className="w-6 h-6 flex items-center justify-center bg-white rounded text-black">
<i className="w-3 h-3" data-lucide="book-open"></i>
</div>
<span className="text-lg font-bold tracking-tight text-white">LitForge</span>
</a>
<p className="text-brand-muted text-sm leading-relaxed pr-4">Where ideas become books, and books become businesses.</p>
</div>
<div>
<h4 className="text-white font-medium mb-6">Product</h4>
<ul className="space-y-3 text-sm text-brand-muted">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">API</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integration</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Company</h4>
<ul className="space-y-3 text-sm text-brand-muted">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Legal</h4>
<ul className="space-y-3 text-sm text-brand-muted">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-muted">
<div>© 2023 LitForge AI. All rights reserved.</div>
<div className="flex space-x-6">
<a className="hover:text-white" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="hover:text-white" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a className="hover:text-white" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
</footer>


    </>
  );
}
