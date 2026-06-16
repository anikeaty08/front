import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Scroll Animation Observer
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach((element) => {
                observer.observe(element);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1] opacity-[0.015] pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
<div className="fixed inset-0 z-[-2] bg-grid pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-slate-100 font-medium tracking-tight text-lg hover:opacity-80 transition-opacity cursor-pointer">
<i className="w-5 h-5 text-indigo-400" data-lucide="radar" strokeWidth="1.5"></i>
                QLFI
            </div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-400">
<a className="hover:text-slate-100 transition-colors" href="#problem">The Problem</a>
<a className="hover:text-slate-100 transition-colors" href="#solution">Platform</a>
<a className="hover:text-slate-100 transition-colors" href="#proof">Customers</a>
<a className="hover:text-slate-100 transition-colors" href="#how-it-works">Process</a>
</div>
<div className="">
<a className="inline-flex items-center justify-center rounded-lg bg-slate-100 text-slate-900 px-4 py-2 text-sm font-medium hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.2)]" href="#cta">
                    Book a demo
                </a>
</div>
</div>
</nav>

<section className="pt-40 pb-20 px-6 relative">
<div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-indigo-500/10 blur-[100px] rounded-full z-[-1] pointer-events-none"></div>
<div className="reveal active text-center max-w-2xl mr-auto ml-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-medium text-indigo-300 mb-8 border border-indigo-500/20 shadow-[0_0_15px_rgba(79,70,229,0.15)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Built for B2B Revenue Teams
            </div>
<h1 className="leading-tight md:text-6xl text-5xl font-medium text-slate-50 tracking-tight mb-6">Automate and qualify leads <span className="glow-text">at lightspeed.</span></h1>
<p className="leading-relaxed md:text-lg text-xl font-normal text-slate-400 max-w-2xl mr-auto mb-10 ml-auto">
                Stop wasting sales cycles on unqualified prospects. QLFI scores, routes, and qualifies your B2B pipeline in real-time.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal delay-100 active">
<a className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-indigo-500 transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:scale-105 active:scale-95 w-full sm:w-auto" href="#cta">
                    Book a demo
                    <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg glass-panel px-6 py-3 text-sm font-normal text-slate-200 hover:bg-white/10 transition-all hover:-translate-y-1" href="#how-it-works">
                    See how it works
                </a>
</div>
</div>

<div className="max-w-5xl mx-auto mt-20 relative reveal delay-200 group active">
<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent z-10 top-1/2 pointer-events-none"></div>
<div className="glass-panel md:p-4 overflow-hidden transition-transform duration-700 hover:scale-[1.01] bg-black/40 rounded-2xl ring-white/10 ring-1 pt-2 pr-2 pb-2 pl-2 relative shadow-2xl">
<div className="flex items-center gap-2 mb-4 px-2">
<div className="w-3 h-3 rounded-full bg-slate-800"></div>
<div className="w-3 h-3 rounded-full bg-slate-800"></div>
<div className="w-3 h-3 rounded-full bg-slate-800"></div>
</div>
<div className="flex gap-4 h-[400px]">

<div className="hidden md:flex flex-col gap-4 w-48 border-r border-white/5 pr-4">
<div className="h-8 rounded bg-white/5 w-full"></div>
<div className="h-8 rounded bg-indigo-500/10 text-indigo-300 text-xs flex items-center px-3 border border-indigo-500/20 shadow-[inset_0_0_10px_rgba(79,70,229,0.1)] font-medium">Active Pipeline</div>
<div className="h-8 rounded bg-white/5 w-full"></div>
</div>

<div className="flex-1 flex flex-col gap-4">

<div className="flex gap-4">
<div className="flex-1 glass-panel rounded-xl p-4 border border-white/5 hover:border-emerald-500/30 transition-colors">
<div className="text-sm text-slate-500 mb-1">Qualified Today</div>
<div className="text-2xl font-medium text-slate-100 tracking-tight">142</div>
<div className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="trending-up" strokeWidth="1.5"></i> Processing 24/7
                                </div>
</div>
<div className="flex-1 glass-panel rounded-xl p-4 border border-white/5 hover:border-indigo-500/30 transition-colors">
<div className="text-sm text-slate-500 mb-1">Time to Route</div>
<div className="text-2xl font-medium text-slate-100 tracking-tight">0.8s</div>
<div className="text-xs text-indigo-400 mt-1 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="zap" strokeWidth="1.5"></i> Instant AI sync
                                </div>
</div>
</div>

<div className="flex-1 glass-panel rounded-xl p-4 border border-white/5 flex flex-col gap-3 relative overflow-hidden">
<div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-white/5">
<div className="w-1/3">Lead Source</div>
<div className="w-1/4">AI Score</div>
<div className="w-1/4">Action Taken</div>
<div className="w-1/6 text-right">CRM</div>
</div>
<div className="flex items-center justify-between text-sm hover:bg-white/[0.02] p-2 -mx-2 rounded-lg transition-colors">
<div className="w-1/3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> <span className="text-slate-200 font-medium tracking-tight">Acme Enterprise</span></div>
<div className="w-1/4 text-emerald-400 font-medium font-mono">98/100</div>
<div className="w-1/4"><span className="px-2 py-1 rounded border border-emerald-500/20 bg-emerald-500/10 text-emerald-300 text-[10px] uppercase tracking-widest font-medium">Routed to AE</span></div>
<div className="w-1/6 flex justify-end"><i className="w-4 h-4 text-emerald-500/50" data-lucide="check-circle" strokeWidth="1.5"></i></div>
</div>
<div className="flex items-center justify-between text-sm hover:bg-white/[0.02] p-2 -mx-2 rounded-lg transition-colors">
<div className="w-1/3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-400"></span> <span className="text-slate-200 font-medium tracking-tight">Global Tech</span></div>
<div className="w-1/4 text-indigo-400 font-medium font-mono">85/100</div>
<div className="w-1/4"><span className="px-2 py-1 rounded border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 text-[10px] uppercase tracking-widest font-medium">Qualifying</span></div>
<div className="w-1/6 flex justify-end"><i className="w-4 h-4 text-indigo-500/50" data-lucide="hourglass" strokeWidth="1.5"></i></div>
</div>
<div className="flex items-center justify-between text-sm opacity-40 p-2 -mx-2">
<div className="w-1/3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-400"></span> <span className="text-slate-200 font-medium tracking-tight">Local Shop</span></div>
<div className="w-1/4 text-red-400 font-medium font-mono">12/100</div>
<div className="w-1/4"><span className="px-2 py-1 rounded border border-red-500/20 bg-red-500/10 text-red-300 text-[10px] uppercase tracking-widest font-medium">Discarded</span></div>
<div className="w-1/6 flex justify-end"><i className="w-4 h-4 text-red-500/50" data-lucide="x-circle" strokeWidth="1.5"></i></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative border-t border-white/5 bg-diagonal" id="problem">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#030303] z-[-1] pointer-events-none"></div>
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-50 mb-4">The manual way is killing your pipeline.</h2>
<p className="leading-relaxed text-lg text-slate-400 max-w-2xl mx-auto">Your sales team shouldn't be digging through dirt to find gold. Manual qualification causes friction, delays, and lost revenue.</p>
</div>
<div className="relative max-w-4xl mx-auto reveal delay-100">
<div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-red-500/10 -translate-y-1/2 z-0 overflow-hidden">
<div className="w-full h-full bg-gradient-to-r from-transparent via-red-500/40 to-transparent -translate-x-full animate-[moveLine_2s_linear_infinite]"></div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
<div className="glass-panel p-6 rounded-2xl border border-red-500/10 bg-[#0a0a0a]/80 w-full md:w-1/3 text-center relative group hover:border-red-500/30 transition-all duration-300 backdrop-blur-md">
<div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 mx-auto mb-4 border border-red-500/20 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="file-text" strokeWidth="1.5"></i>
</div>
<h3 className="text-base font-medium text-slate-100 mb-2 tracking-tight">Manual Entry</h3>
<p className="text-sm text-slate-400 leading-relaxed">Reps spend hours copying data and researching leads instead of selling.</p>
<div className="block md:hidden w-[2px] h-8 bg-red-500/20 mx-auto mt-6"></div>
</div>
<div className="glass-panel p-6 rounded-2xl border border-orange-500/10 bg-[#0a0a0a]/80 w-full md:w-1/3 text-center relative group hover:border-orange-500/30 transition-all duration-300 backdrop-blur-md">
<div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 mx-auto mb-4 border border-orange-500/20 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="timer" strokeWidth="1.5"></i>
</div>
<h3 className="text-base font-medium text-slate-100 mb-2 tracking-tight">Slow Responses</h3>
<p className="text-sm text-slate-400 leading-relaxed">Average response time is 42h. By then, the prospect is talking to competitors.</p>
<div className="block md:hidden w-[2px] h-8 bg-orange-500/20 mx-auto mt-6"></div>
</div>
<div className="glass-panel p-6 rounded-2xl border border-amber-500/10 bg-[#0a0a0a]/80 w-full md:w-1/3 text-center relative group hover:border-amber-500/30 transition-all duration-300 backdrop-blur-md">
<div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 mx-auto mb-4 border border-amber-500/20 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="ghost" strokeWidth="1.5"></i>
</div>
<h3 className="text-base font-medium text-slate-100 mb-2 tracking-tight">Lost Revenue</h3>
<p className="text-sm text-slate-400 leading-relaxed">High-intent leads fall through the cracks, resulting in lower conversion rates.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative border-y border-white/5 bg-[#030303] overflow-hidden" id="solution">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent z-0"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-20 reveal">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-50 mb-4">A real-time qualification engine.</h2>
<p className="leading-relaxed text-lg text-slate-400 max-w-2xl mx-auto">Replace manual tasks with an intelligent system that separates signal from noise automatically.</p>
</div>

<div className="max-w-5xl mx-auto mb-24 reveal delay-100 relative">
<div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
<div className="flex flex-col gap-4 w-full md:w-auto">
<div className="glass-panel p-4 rounded-xl border-white/10 flex items-center gap-3 w-full md:w-48 shadow-lg hover:bg-white/[0.03] transition-colors bg-[#080808]">
<i className="w-5 h-5 text-indigo-400" data-lucide="mail" strokeWidth="1.5"></i>
<span className="text-sm font-medium text-slate-300">Inbound Forms</span>
</div>
<div className="glass-panel p-4 rounded-xl border-white/10 flex items-center gap-3 w-full md:w-48 shadow-lg hover:bg-white/[0.03] transition-colors bg-[#080808]">
<i className="w-5 h-5 text-indigo-400" data-lucide="database" strokeWidth="1.5"></i>
<span className="text-sm font-medium text-slate-300">Clearbit / ZoomInfo</span>
</div>
<div className="glass-panel p-4 rounded-xl border-white/10 flex items-center gap-3 w-full md:w-48 shadow-lg hover:bg-white/[0.03] transition-colors bg-[#080808]">
<i className="w-5 h-5 text-indigo-400" data-lucide="search" strokeWidth="1.5"></i>
<span className="text-sm font-medium text-slate-300">Intent Signals</span>
</div>
</div>
<div className="hidden md:flex flex-col justify-center h-full relative w-16">
<div className="w-full h-[2px] bg-indigo-500/20 absolute top-[15%] animated-line"></div>
<div className="w-full h-[2px] bg-indigo-500/20 absolute top-[50%] animated-line"></div>
<div className="w-full h-[2px] bg-indigo-500/20 absolute top-[85%] animated-line"></div>
</div>
<div className="relative group">
<div className="glass-panel p-8 rounded-3xl border border-indigo-500/30 relative z-10 text-center bg-[#0a0a0a] backdrop-blur-xl w-64 shadow-[0_0_40px_rgba(79,70,229,0.1)]">
<div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(139,92,246,0.4)] ring-4 ring-indigo-500/20">
<i className="w-8 h-8 text-white" data-lucide="wand-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-1">QLFI AI Engine</h3>
<p className="text-sm text-indigo-200/70">Scoring &amp; Routing</p>
<div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-xs text-slate-400 uppercase tracking-widest font-medium">
<span className="">Real-time</span>
<span>24/7</span>
</div>
</div>
</div>
<div className="hidden md:flex flex-col justify-center h-full relative w-16">
<div className="w-full h-[2px] bg-emerald-500/20 absolute top-[30%] animated-line"></div>
<div className="w-full h-[2px] bg-slate-500/20 absolute top-[70%] animated-line"></div>
</div>
<div className="flex flex-col gap-6 w-full md:w-auto">
<div className="glass-panel p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 flex items-center gap-4 w-full md:w-56 shadow-lg">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
<i className="w-5 h-5" data-lucide="flame" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-base font-medium text-emerald-300">Hot Leads</div>
<div className="text-xs text-slate-400">Instant route to Sales</div>
</div>
</div>
<div className="glass-panel p-4 rounded-xl border border-white/10 flex items-center gap-4 w-full md:w-56 shadow-lg bg-[#080808]">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 border border-white/10">
<i className="w-5 h-5" data-lucide="snowflake" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-base font-medium text-slate-300">Cold Leads</div>
<div className="text-xs text-slate-400">Send to nurture flow</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto reveal delay-200">
<div className="glass-panel p-8 rounded-2xl border-white/5 hover:bg-white/[0.03] transition-colors bg-[#080808]">
<h3 className="text-xl font-medium tracking-tight text-slate-50 mb-3">Automated Lead Scoring</h3>
<p className="text-slate-400 text-base leading-relaxed mb-6">Our AI analyzes firmographic data, intent signals, and historical performance to assign a precise revenue score to every inbound lead instantly.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-300"><i className="w-4 h-4 text-indigo-400" data-lucide="check-circle" strokeWidth="1.5"></i> Custom scoring models based on ICP</li>
<li className="flex items-center gap-3 text-sm text-slate-300"><i className="w-4 h-4 text-indigo-400" data-lucide="check-circle" strokeWidth="1.5"></i> Data enrichment behind the scenes</li>
</ul>
</div>
<div className="glass-panel p-8 rounded-2xl border-white/5 hover:bg-white/[0.03] transition-colors bg-[#080808]">
<h3 className="text-xl font-medium tracking-tight text-slate-50 mb-3">Smart CRM Routing</h3>
<p className="text-slate-400 text-base leading-relaxed mb-6">High-scoring leads are instantly routed to the right account executive based on territory, capacity, or performance directly in your CRM.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-300"><i className="w-4 h-4 text-emerald-400" data-lucide="check-circle" strokeWidth="1.5"></i> Two-way sync with Salesforce &amp; HubSpot</li>
<li className="flex items-center gap-3 text-sm text-slate-300"><i className="w-4 h-4 text-emerald-400" data-lucide="check-circle" strokeWidth="1.5"></i> Round-robin &amp; rules-based assignment</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="proof">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20 reveal">
<p className="text-sm font-medium text-slate-500 mb-8 uppercase tracking-widest">Powering revenue teams at modern companies</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-2xl font-medium tracking-tight text-slate-300 flex items-center gap-2"><i className="w-6 h-6" data-lucide="box" strokeWidth="1.5"></i> VERTEX</span>
<span className="text-2xl font-medium tracking-tight text-slate-300 flex items-center gap-2"><i className="w-6 h-6" data-lucide="building" strokeWidth="1.5"></i> NEXUS</span>
<span className="text-2xl font-medium tracking-tight text-slate-300 flex items-center gap-2"><i className="w-6 h-6" data-lucide="globe" strokeWidth="1.5"></i> STRATA</span>
<span className="text-2xl font-medium tracking-tight text-slate-300 flex items-center gap-2"><i className="w-6 h-6" data-lucide="layers" strokeWidth="1.5"></i> LUMINA</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20 reveal delay-100">
<div className="glass-panel p-6 rounded-2xl text-center border-t border-t-indigo-500/30 bg-gradient-to-b from-indigo-500/10 to-transparent relative overflow-hidden">
<div className="text-4xl md:text-5xl font-medium text-slate-50 tracking-tight mb-2 glow-text">+40%</div>
<div className="text-sm text-slate-400 uppercase tracking-widest font-medium">Qualified Pipeline</div>
</div>
<div className="glass-panel p-6 rounded-2xl text-center border-t border-t-emerald-500/30 bg-gradient-to-b from-emerald-500/10 to-transparent relative overflow-hidden">
<div className="text-4xl md:text-5xl font-medium text-slate-50 tracking-tight mb-2 glow-text">2x</div>
<div className="text-sm text-slate-400 uppercase tracking-widest font-medium">Faster Response</div>
</div>
<div className="glass-panel p-6 rounded-2xl text-center border-t border-t-violet-500/30 bg-gradient-to-b from-violet-500/10 to-transparent relative overflow-hidden">
<div className="text-4xl md:text-5xl font-medium text-slate-50 tracking-tight mb-2 glow-text">15h</div>
<div className="text-sm text-slate-400 uppercase tracking-widest font-medium">Saved per rep/week</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto reveal delay-200">
<div className="glass-panel p-8 md:p-10 rounded-3xl border-white/5 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 bg-[#080808]">
<div className="mb-6 text-indigo-400"><i className="w-8 h-8 opacity-40" data-lucide="quote" strokeWidth="1.5"></i></div>
<p className="text-slate-300 text-base leading-relaxed mb-8">"Before QLFI, my AEs were spending 40% of their day digging through bad leads. Now, they only talk to accounts that fit our ICP perfectly. Our close rate doubled in one quarter."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-base font-medium text-indigo-300">SJ</div>
<div>
<div className="text-base font-medium tracking-tight text-slate-100">Sarah Jenkins</div>
<div className="text-sm text-slate-500">VP of Sales, Strata</div>
</div>
</div>
</div>
<div className="glass-panel p-8 md:p-10 rounded-3xl border-white/5 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 bg-[#080808]">
<div className="mb-6 text-emerald-400"><i className="w-8 h-8 opacity-40" data-lucide="quote" strokeWidth="1.5"></i></div>
<p className="text-slate-300 text-base leading-relaxed mb-8">"The integration with Salesforce took 10 minutes. The automated routing rules have completely eliminated the bottleneck we had in lead distribution. A total game changer."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-base font-medium text-emerald-300">MR</div>
<div>
<div className="text-base font-medium tracking-tight text-slate-100">Marcus Rossi</div>
<div className="text-sm text-slate-500">RevOps Manager, Vertex</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 relative overflow-hidden bg-diagonal" id="how-it-works">
<div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] z-0 pointer-events-none"></div>
<div className="max-w-5xl mx-auto relative z-10">
<div className="text-center mb-20 reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-50 mb-4">Three steps to a frictionless pipeline.</h2>
<p className="text-lg text-slate-400">Set it up once, let the system handle the rest.</p>
</div>
<div className="relative reveal delay-100">
<div className="hidden md:block absolute top-[3.5rem] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
<div className="flex flex-col items-center text-center group">
<div className="w-28 h-28 rounded-3xl glass-panel flex items-center justify-center mb-6 shadow-xl relative bg-[#0a0a0a] border border-indigo-500/20 group-hover:border-indigo-500/50 transition-colors duration-300">
<div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#050505] border border-indigo-500/50 text-sm flex items-center justify-center text-indigo-300 font-medium">1</div>
<i className="w-10 h-10 text-indigo-400 group-hover:scale-110 transition-transform" data-lucide="magnet" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-100 mb-3">Capture &amp; Connect</h3>
<p className="text-base text-slate-400 leading-relaxed">Plug in your existing forms, emails, and inbound channels. Zero coding required.</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="w-28 h-28 rounded-3xl glass-panel flex items-center justify-center mb-6 shadow-xl relative bg-[#0a0a0a] border border-violet-500/20 group-hover:border-violet-500/50 transition-colors duration-300">
<div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#050505] border border-violet-500/50 text-sm flex items-center justify-center text-violet-300 font-medium">2</div>
<i className="w-10 h-10 text-violet-400 group-hover:scale-110 transition-transform" data-lucide="wand-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-100 mb-3">AI Qualification</h3>
<p className="text-base text-slate-400 leading-relaxed">Our engine instantly enriches the data and scores the lead against your ICP.</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="w-28 h-28 rounded-3xl glass-panel flex items-center justify-center mb-6 shadow-xl relative bg-[#0a0a0a] border border-emerald-500/20 group-hover:border-emerald-500/50 transition-colors duration-300">
<div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#050505] border border-emerald-500/50 text-sm flex items-center justify-center text-emerald-300 font-medium">3</div>
<i className="w-10 h-10 text-emerald-400 group-hover:scale-110 transition-transform" data-lucide="route" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-100 mb-3">Route &amp; Close</h3>
<p className="text-base text-slate-400 leading-relaxed">Qualified leads are pushed to CRM and assigned to reps via Slack in milliseconds.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#030303] z-0 pt-32 pr-6 pb-32 pl-6 relative" id="cta">

<div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] pointer-events-none z-0"></div>
<div className="md:p-16 animate-pulse-shadow z-10 reveal text-center bg-[#0a0a0e]/90 max-w-[800px] border-white/5 border rounded-[2rem] mr-auto ml-auto pt-12 pr-12 pb-12 pl-12 relative backdrop-blur-xl">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-50 mb-5">Ready to unlock revenue?</h2>
<p className="leading-relaxed md:text-lg text-lg text-slate-400 max-w-xl mr-auto mb-10 ml-auto">Join the modern B2B teams closing deals faster. Book a demo today to see your custom lead qualification model in action.</p>
<div className="flex flex-col items-center justify-center gap-6">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-8 py-4 text-base font-medium text-white hover:bg-violet-500 transition-colors w-full sm:w-auto shadow-lg" href="#">
                    Book a demo
                    <i className="w-5 h-5" data-lucide="rocket" strokeWidth="1.5"></i>
</a>
<p className="text-sm font-medium text-emerald-400 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                    Only 4 onboarding slots left this month
                </p>
</div>
</div>
</section>

<footer className="py-8 text-center text-sm font-normal text-slate-500 border-t border-white/5 bg-[#030303]">
<div className="flex items-center justify-center gap-2 mb-4 font-medium tracking-tight text-slate-300">
<i className="w-5 h-5 text-indigo-400" data-lucide="radar" strokeWidth="1.5"></i>
            QLFI
        </div>
<p>© 2023 QLFI Inc. All rights reserved.</p>
</footer>



    </>
  );
}
