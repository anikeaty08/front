import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Theme Toggle Logic
        const toggleBtn = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;
        const sunIcon = document.querySelector('.light-icon');
        const moonIcon = document.querySelector('.dark-icon');

        // Default to dark mode logic handled in CSS variables, 
        // we just toggle the data-theme attribute.
        let isDark = true; 

        toggleBtn.addEventListener('click', () => {
            isDark = !isDark;
            if (isDark) {
                htmlElement.removeAttribute('data-theme');
                sunIcon.classList.remove('hidden');
                moonIcon.classList.add('hidden');
            } else {
                htmlElement.setAttribute('data-theme', 'light');
                sunIcon.classList.add('hidden');
                moonIcon.classList.remove('hidden');
            }
        });

        // Set initial icon state
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-[#4F7CFF] rounded-md flex items-center justify-center">
<svg fill="none" height="14" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
</div>
<span className="text-sm font-medium tracking-tight">Flow UX AI</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-[var(--text-muted)]">
<a className="hover:text-[var(--text-main)] transition-colors" href="#features">Features</a>
<a className="hover:text-[var(--text-main)] transition-colors" href="#workflow">Workflow</a>
<a className="hover:text-[var(--text-main)] transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-full hover:bg-[var(--border-color)] transition-colors text-[var(--text-muted)] hover:text-[var(--text-main)]" id="theme-toggle">
<i className="w-4 h-4 hidden dark-icon" data-lucide="sun"></i>
<i className="w-4 h-4 light-icon" data-lucide="moon"></i>
</button>
<a className="hidden sm:inline-flex bg-[#4F7CFF] hover:bg-[#3A64E0] text-white text-xs font-medium px-4 py-2 rounded-full transition-all shadow-[0_0_15px_-3px_rgba(79,124,255,0.4)]" href="https://v0-flow-ux-ai-overview.vercel.app/">
                    Get Started
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 hero-glow pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] mb-8 fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4F7CFF] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#4F7CFF]"></span>
</span>
<span className="text-xs font-medium text-[var(--text-muted)] tracking-wide">Flow UX AI 2.0 is now live</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-6 fade-in-up delay-100">
<span className="text-gradient">AI-powered UX analysis<br/>for flawless product design.</span>
</h1>
<p className="text-base md:text-lg text-[var(--text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed fade-in-up delay-200">
                Upload your designs and get pixel-perfect UX insights, accessibility warnings, and layout improvements — instantly.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 fade-in-up delay-300">
<a className="h-10 px-6 bg-[#4F7CFF] hover:bg-[#3A64E0] text-white rounded-lg flex items-center justify-center gap-2 text-sm font-medium transition-all shadow-[0_4px_14px_0_rgba(79,124,255,0.39)]" href="https://v0-flow-ux-ai-overview.vercel.app/">
                    Start Analysis <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="relative max-w-5xl mx-auto fade-in-up delay-300">
<div className="mockup-window rounded-xl overflow-hidden shadow-2xl relative border border-[#333]">

<div className="h-10 bg-[#0F0F0F] border-b border-[#222] flex items-center px-4 justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#333]"></div>
<div className="w-3 h-3 rounded-full bg-[#333]"></div>
<div className="w-3 h-3 rounded-full bg-[#333]"></div>
</div>
<div className="text-[10px] text-[#666] font-mono">analysis_dashboard_v2.png</div>
<div className="w-16"></div>
</div>

<div className="flex h-[400px] md:h-[500px] bg-black">

<div className="w-16 border-r border-[#222] flex flex-col items-center py-4 gap-6">
<i className="w-5 h-5 text-[#444]" data-lucide="layers"></i>
<i className="w-5 h-5 text-[#4F7CFF]" data-lucide="zap"></i>
<i className="w-5 h-5 text-[#444]" data-lucide="message-square"></i>
<i className="w-5 h-5 text-[#444] mt-auto" data-lucide="settings"></i>
</div>

<div className="flex-1 relative p-8 flex items-center justify-center bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:16px_16px]">

<div className="relative group cursor-default">
<div className="w-64 h-32 bg-[#111] rounded-lg border border-[#333] p-4 flex flex-col gap-3 shadow-lg">
<div className="w-1/2 h-4 bg-[#222] rounded"></div>
<div className="w-3/4 h-3 bg-[#222] rounded"></div>
<div className="mt-auto flex gap-2">
<div className="h-8 w-20 bg-[#4F7CFF] rounded text-[10px] text-white flex items-center justify-center">Submit</div>
</div>
</div>

<div className="absolute -top-3 -right-3 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
<i className="w-3 h-3 text-white" data-lucide="alert-circle"></i>
</div>
<div className="absolute -left-6 top-1/2 -translate-y-1/2 flex items-center gap-2">
<div className="bg-[#1a1a1a] border border-[#333] px-3 py-1.5 rounded-md text-[10px] text-[#ccc] whitespace-nowrap shadow-xl flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-red-500"></span>
                                        Low Contrast Ratio (2.1:1)
                                    </div>
<div className="w-8 h-[1px] bg-red-500/50"></div>
</div>
</div>
</div>

<div className="w-64 border-l border-[#222] bg-[#050505] p-4 hidden md:block">
<div className="text-[10px] font-bold text-[#666] uppercase tracking-wider mb-4">Issues Found</div>

<div className="bg-[#111] border border-[#222] rounded p-3 mb-3 border-l-2 border-l-red-500">
<div className="flex items-center gap-2 mb-1">
<i className="w-3 h-3 text-red-500" data-lucide="accessibility"></i>
<span className="text-xs text-[#eee] font-medium">Accessibility</span>
</div>
<p className="text-[10px] text-[#888] leading-relaxed">Submit button text color fails WCAG AA standards.</p>
</div>

<div className="bg-[#111] border border-[#222] rounded p-3 mb-3 border-l-2 border-l-yellow-500">
<div className="flex items-center gap-2 mb-1">
<i className="w-3 h-3 text-yellow-500" data-lucide="layout"></i>
<span className="text-xs text-[#eee] font-medium">Spacing</span>
</div>
<p className="text-[10px] text-[#888] leading-relaxed">Inconsistent padding detected on card container.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-[var(--border-color)] bg-[var(--bg-secondary)]">
<div className="max-w-7xl mx-auto px-6 py-10">
<p className="text-center text-xs text-[var(--text-muted)] mb-6 tracking-wide">TRUSTED BY DESIGN TEAMS AT</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">

<span className="text-lg font-bold tracking-tighter text-[var(--text-main)]">ACME</span>
<span className="text-lg font-bold tracking-tighter text-[var(--text-main)] font-serif">Vertex</span>
<span className="text-lg font-semibold tracking-wide text-[var(--text-main)]">NEXUS</span>
<span className="text-lg font-black tracking-tight text-[var(--text-main)] italic">Strata</span>
<span className="text-lg font-medium tracking-tight text-[var(--text-main)]">Orbital</span>
</div>
</div>
</section>

<section className="py-24 bg-[var(--bg-main)]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="space-y-2">
<div className="text-4xl md:text-5xl font-medium text-[var(--text-main)] tracking-tight">92%</div>
<div className="text-sm text-[var(--text-muted)]">Detection accuracy</div>
</div>
<div className="space-y-2">
<div className="text-4xl md:text-5xl font-medium text-[var(--text-main)] tracking-tight">10x</div>
<div className="text-sm text-[var(--text-muted)]">Faster design reviews</div>
</div>
<div className="space-y-2">
<div className="text-4xl md:text-5xl font-medium text-[var(--text-main)] tracking-tight">0s</div>
<div className="text-sm text-[var(--text-muted)]">Manual setup time</div>
</div>
<div className="space-y-2">
<div className="text-4xl md:text-5xl font-medium text-[var(--text-main)] tracking-tight">WCAG</div>
<div className="text-sm text-[var(--text-muted)]">Compliance ready</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[var(--bg-secondary)] relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-[var(--text-main)]">Everything you need<br/>for pixel-perfect UI.</h2>
<p className="text-[var(--text-muted)] max-w-xl">Our AI models are trained on thousands of premium design systems to spot errors human eyes often miss.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="card-base p-8 rounded-2xl group">
<div className="w-10 h-10 rounded-lg bg-[rgba(79,124,255,0.1)] flex items-center justify-center mb-6 group-hover:bg-[#4F7CFF] transition-colors duration-300">
<i className="w-5 h-5 text-[#4F7CFF] group-hover:text-white transition-colors" data-lucide="scan-eye"></i>
</div>
<h3 className="text-lg font-medium text-[var(--text-main)] mb-2">Accessibility Audit</h3>
<p className="text-sm text-[var(--text-muted)] leading-relaxed">Automatically detect contrast failures, missing alt tags, and touch target size violations.</p>
</div>

<div className="card-base p-8 rounded-2xl group">
<div className="w-10 h-10 rounded-lg bg-[rgba(79,124,255,0.1)] flex items-center justify-center mb-6 group-hover:bg-[#4F7CFF] transition-colors duration-300">
<i className="w-5 h-5 text-[#4F7CFF] group-hover:text-white transition-colors" data-lucide="ruler"></i>
</div>
<h3 className="text-lg font-medium text-[var(--text-main)] mb-2">Pixel-Level Spacing</h3>
<p className="text-sm text-[var(--text-muted)] leading-relaxed">Spot inconsistent margins and padding. Enforce your 4px or 8px grid system effortlessly.</p>
</div>

<div className="card-base p-8 rounded-2xl group">
<div className="w-10 h-10 rounded-lg bg-[rgba(79,124,255,0.1)] flex items-center justify-center mb-6 group-hover:bg-[#4F7CFF] transition-colors duration-300">
<i className="w-5 h-5 text-[#4F7CFF] group-hover:text-white transition-colors" data-lucide="git-branch"></i>
</div>
<h3 className="text-lg font-medium text-[var(--text-main)] mb-2">Layout &amp; Flow</h3>
<p className="text-sm text-[var(--text-muted)] leading-relaxed">Identify broken visual hierarchy and navigational dead-ends before developers start coding.</p>
</div>
</div>
</div>
</section>

<section className="py-32 overflow-hidden" id="workflow">
<div className="max-w-7xl mx-auto px-6">

<div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-32">
<div className="w-full md:w-1/2 order-2 md:order-1">
<div className="relative rounded-xl overflow-hidden shadow-2xl border border-[var(--border-color)] bg-[#111]">
<div className="h-64 bg-[#050505] flex items-center justify-center">
<div className="w-full max-w-[300px] h-[180px] border-2 border-dashed border-[#333] rounded-lg flex flex-col items-center justify-center gap-3">
<i className="w-8 h-8 text-[#444]" data-lucide="upload-cloud"></i>
<span className="text-xs text-[#555]">Drag &amp; Drop Design Files</span>
</div>
</div>
</div>
</div>
<div className="w-full md:w-1/2 order-1 md:order-2">
<div className="flex items-center gap-3 mb-4 text-[#4F7CFF]">
<i className="w-5 h-5" data-lucide="upload"></i>
<span className="text-xs font-semibold tracking-wider uppercase">Upload</span>
</div>
<h3 className="text-3xl font-medium text-[var(--text-main)] mb-4 tracking-tight">Sync directly from Figma.</h3>
<p className="text-[var(--text-muted)] leading-relaxed">
                        Connect your Figma account or simply drag and drop screenshots. Flow UX AI instantly parses the layers and visual structure.
                    </p>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
<div className="w-full md:w-1/2">
<div className="flex items-center gap-3 mb-4 text-[#4F7CFF]">
<i className="w-5 h-5" data-lucide="cpu"></i>
<span className="text-xs font-semibold tracking-wider uppercase">Analyze</span>
</div>
<h3 className="text-3xl font-medium text-[var(--text-main)] mb-4 tracking-tight">Instant design intelligence.</h3>
<p className="text-[var(--text-muted)] leading-relaxed">
                        Our engine highlights inconsistencies in real-time. Review suggested fixes side-by-side with your original design.
                    </p>
<ul className="mt-6 space-y-3">
<li className="flex items-center gap-3 text-sm text-[var(--text-main)]">
<i className="w-4 h-4 text-[#4F7CFF]" data-lucide="check"></i> Color palette consistency
                        </li>
<li className="flex items-center gap-3 text-sm text-[var(--text-main)]">
<i className="w-4 h-4 text-[#4F7CFF]" data-lucide="check"></i> Typography scale verification
                        </li>
<li className="flex items-center gap-3 text-sm text-[var(--text-main)]">
<i className="w-4 h-4 text-[#4F7CFF]" data-lucide="check"></i> Contrast warnings
                        </li>
</ul>
</div>
<div className="w-full md:w-1/2">
<div className="relative rounded-xl overflow-hidden shadow-2xl border border-[var(--border-color)] bg-[#111]">
<div className="h-64 bg-[#050505] relative">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-[80%] h-[60%] border border-[#333] bg-[#111] rounded flex relative">
<div className="w-1/3 border-r border-[#333]"></div>

<div className="absolute top-0 w-full h-[2px] bg-[#4F7CFF] shadow-[0_0_15px_#4F7CFF] animate-[scan_3s_ease-in-out_infinite]"></div>

<div className="absolute top-4 left-4 flex gap-2">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-16 h-2 bg-[#333] rounded"></div>
</div>
<div className="absolute bottom-4 right-4 flex gap-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-16 h-2 bg-[#333] rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[var(--bg-secondary)] border-t border-[var(--border-color)]">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight mb-12 text-center text-[var(--text-main)]">Loved by product teams</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[var(--bg-card)] p-6 rounded-xl border border-[var(--border-color)]">
<p className="text-sm text-[var(--text-muted)] mb-6 leading-relaxed">"Flow UX AI has completely replaced our manual QA process for design handoffs. It catches things even our senior designers miss."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
<div>
<div className="text-sm font-medium text-[var(--text-main)]">Sarah Jenkins</div>
<div className="text-xs text-[var(--text-muted)]">Product Designer, Vertex</div>
</div>
</div>
</div>

<div className="bg-[var(--bg-card)] p-6 rounded-xl border border-[var(--border-color)]">
<p className="text-sm text-[var(--text-muted)] mb-6 leading-relaxed">"The accessibility checks alone are worth the subscription. We're finally confident that our products are inclusive from day one."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-cyan-500"></div>
<div>
<div className="text-sm font-medium text-[var(--text-main)]">Marcus Chen</div>
<div className="text-xs text-[var(--text-muted)]">Head of UX, Strata</div>
</div>
</div>
</div>

<div className="bg-[var(--bg-card)] p-6 rounded-xl border border-[var(--border-color)]">
<p className="text-sm text-[var(--text-muted)] mb-6 leading-relaxed">"Incredible speed. What used to take us two days of design review now takes 15 minutes. A game changer for sprints."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500"></div>
<div>
<div className="text-sm font-medium text-[var(--text-main)]">Elena Rodriguez</div>
<div className="text-xs text-[var(--text-muted)]">CTO, Orbital</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-main)] to-[#4F7CFF]/10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-[var(--text-main)]">Ready to perfect your UX?</h2>
<p className="text-lg text-[var(--text-muted)] mb-10 max-w-2xl mx-auto">Join 10,000+ designers building better products with automated insights.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="h-12 px-8 bg-[#4F7CFF] hover:bg-[#3A64E0] text-white rounded-lg flex items-center justify-center gap-2 font-medium transition-all shadow-[0_0_20px_rgba(79,124,255,0.4)]" href="https://v0-flow-ux-ai-overview.vercel.app/">
                    Start Free Analysis
                </a>
</div>
</div>
</section>

<footer className="bg-[var(--bg-secondary)] pt-20 pb-12 border-t border-[var(--border-color)]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 bg-[#4F7CFF] rounded flex items-center justify-center">
<svg fill="none" height="12" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
</div>
<span className="text-sm font-semibold tracking-tight text-[var(--text-main)]">Flow UX AI</span>
</div>
<p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-xs">
                        Automated UX analysis for modern product teams. Build inclusive, pixel-perfect interfaces in record time.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-[var(--text-main)] mb-4">Product</h4>
<ul className="space-y-3 text-xs text-[var(--text-muted)]">
<li><a className="hover:text-[var(--text-main)] transition-colors" href="#">Features</a></li>
<li><a className="hover:text-[var(--text-main)] transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-[var(--text-main)] transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-[var(--text-main)] transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-[var(--text-main)] mb-4">Resources</h4>
<ul className="space-y-3 text-xs text-[var(--text-muted)]">
<li><a className="hover:text-[var(--text-main)] transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-[var(--text-main)] transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-[var(--text-main)] transition-colors" href="#">Community</a></li>
<li><a className="hover:text-[var(--text-main)] transition-colors" href="#">Help Center</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-[var(--text-main)] mb-4">Company</h4>
<ul className="space-y-3 text-xs text-[var(--text-muted)]">
<li><a className="hover:text-[var(--text-main)] transition-colors" href="#">About</a></li>
<li><a className="hover:text-[var(--text-main)] transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-[var(--text-main)] transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-[var(--text-main)] transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-[var(--text-main)] mb-4">Legal</h4>
<ul className="space-y-3 text-xs text-[var(--text-muted)]">
<li><a className="hover:text-[var(--text-main)] transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-[var(--text-main)] transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-[var(--text-main)] transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-[10px] text-[var(--text-muted)]">© 2024 Flow UX AI Inc. All rights reserved.</div>
<div className="flex gap-4">
<a className="text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a className="text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
