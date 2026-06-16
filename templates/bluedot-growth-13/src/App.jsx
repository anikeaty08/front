import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Simple SPA Router Logic
        function navigate(pageId) {
            // 1. Hide all pages
            const pages = document.querySelectorAll('.page-view');
            pages.forEach(page => {
                page.classList.add('hidden');
                page.classList.remove('block');
            });

            // 2. Show target page
            const target = document.getElementById('page-' + pageId);
            if (target) {
                target.classList.remove('hidden');
                target.classList.add('block');
                
                // Add simple fade animation
                target.style.opacity = '0';
                setTimeout(() => {
                    target.style.transition = 'opacity 0.4s ease';
                    target.style.opacity = '1';
                }, 10);
            }

            // 3. Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        // Basic Calculator Logic
        function calculate() {
            const spend = parseFloat(document.getElementById('calc-spend').value) || 0;
            const customers = parseFloat(document.getElementById('calc-customers').value) || 0;
            const aov = parseFloat(document.getElementById('calc-aov').value) || 0;
            
            if(spend > 0 && customers > 0) {
                const cac = spend / customers;
                const revenue = customers * aov;
                const roas = revenue / spend;
                
                document.getElementById('res-cac').innerText = '$' + cac.toFixed(2);
                document.getElementById('res-rev').innerText = '$' + revenue.toLocaleString();
                document.getElementById('res-roas').innerText = roas.toFixed(2) + 'x';
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0">

<div className="absolute -top-[10%] -right-[10%] w-[800px] h-[800px] rounded-full bg-orange-500/10 blur-[120px] animate-drift"></div>

<div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[100px] animate-drift" style={{animationDelay: '2s'}}></div>

<div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[80px]"></div>
</div>

<nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#030712]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#030712]/60">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

<a className="flex items-center gap-2.5 text-base font-medium tracking-tight text-white cursor-pointer hover:opacity-80 transition-opacity" href="#" onclick="navigate('home')">
<div className="relative flex h-5 w-5 items-center justify-center rounded bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
<div className="absolute inset-[3px] bg-[#030712] rounded-[2px]"></div>
</div>
<span className="font-semibold">BlueDot</span>
</a>

<div className="hidden items-center gap-8 md:flex text-sm font-medium text-slate-400">
<button className="hover:text-white transition-colors focus:outline-none" onclick="navigate('home')">Home</button>

<div className="group relative py-4">
<button className="flex items-center gap-1 hover:text-white transition-colors focus:outline-none">
                        Solutions <i className="h-3 w-3 opacity-50 transition-transform group-hover:rotate-180" data-lucide="chevron-down"></i>
</button>

<div className="invisible absolute -left-4 top-full w-60 rounded-xl border border-white/10 bg-[#0B1120] p-1.5 shadow-2xl opacity-0 transition-all transform translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 backdrop-blur-xl">
<button className="block w-full text-left rounded-lg px-4 py-2.5 text-sm text-slate-400 hover:bg-white/5 hover:text-white transition-colors" onclick="navigate('blueprint')">Growth Blueprint</button>
<button className="block w-full text-left rounded-lg px-4 py-2.5 text-sm text-slate-400 hover:bg-white/5 hover:text-white transition-colors" onclick="navigate('accelerator')">Commerce Accelerator</button>
<button className="block w-full text-left rounded-lg px-4 py-2.5 text-sm text-slate-400 hover:bg-white/5 hover:text-white transition-colors" onclick="navigate('launchpad')">Startup LaunchPad</button>
</div>
</div>
<div className="group relative py-4">
<button className="flex items-center gap-1 hover:text-white transition-colors focus:outline-none">
                       Resources <i className="h-3 w-3 opacity-50 transition-transform group-hover:rotate-180" data-lucide="chevron-down"></i>
</button>
<div className="invisible absolute -left-4 top-full w-60 rounded-xl border border-white/10 bg-[#0B1120] p-1.5 shadow-2xl opacity-0 transition-all transform translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 backdrop-blur-xl">
<button className="block w-full text-left rounded-lg px-4 py-2.5 text-sm text-slate-400 hover:bg-white/5 hover:text-white transition-colors" onclick="navigate('tools')">Tools &amp; Calculators</button>
<button className="block w-full text-left rounded-lg px-4 py-2.5 text-sm text-slate-400 hover:bg-white/5 hover:text-white transition-colors" onclick="navigate('webinars')">Webinars</button>
</div>
</div>
<button className="hover:text-white transition-colors focus:outline-none" onclick="navigate('contact')">Contact</button>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:block text-xs font-medium text-slate-400 hover:text-white focus:outline-none transition-colors" onclick="navigate('contact')">Log in</button>
<button className="relative overflow-hidden rounded-full bg-gradient-to-r from-orange-600 to-orange-500 px-5 py-2 text-xs font-semibold text-white transition-all hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:brightness-110 focus:outline-none" onclick="navigate('contact')">
<span className="relative z-10">Free Consultation</span>
</button>
</div>
</div>
</nav>

<div className="flex-grow relative z-10" id="content-container">

<main className="page-view animate-fade-in block" id="page-home">

<section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40">
<div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
<div className="relative mx-auto max-w-7xl px-6 text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[11px] font-medium text-blue-300 backdrop-blur-sm mb-8 hover:bg-blue-500/20 transition-colors cursor-default">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400"></span>
</span>
                        Growth Systems for MENA Founders
                    </div>
<h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight text-white lg:text-7xl">
                        We Build <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-orange-400 bg-clip-text text-transparent">Growth Systems</span> <br/> That Scale.
                    </h1>
<p className="mx-auto mt-8 max-w-2xl text-lg font-light text-slate-400 leading-relaxed">
                        Helping tech startups, D2C brands, and SMEs grow profitably across <span className="text-slate-200">Egypt, Kuwait, KSA, and UAE</span> through data-driven architecture.
                    </p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<button className="group w-full sm:w-auto rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-lg transition-all hover:bg-slate-200 hover:scale-[1.02]" onclick="navigate('contact')">
                            Free 20-Min Consultation
                        </button>
<button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-8 py-3.5 text-sm font-medium text-slate-300 transition-all hover:bg-slate-800 hover:text-white backdrop-blur-sm" onclick="navigate('tools')">
<i className="h-4 w-4 text-orange-400" data-lucide="calculator"></i>
                            Try CAC/LTV Calculator
                        </button>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-[#030712]/50 py-20 backdrop-blur-sm">
<div className="mx-auto max-w-7xl px-6">
<h2 className="mb-12 text-center text-xs font-medium uppercase tracking-widest text-slate-500">Who We Help</h2>
<div className="grid gap-6 md:grid-cols-3">

<div className="cursor-pointer group relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:border-orange-500/20 hover:bg-white/[0.04]" onclick="navigate('accelerator')">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="relative z-10">
<div className="mb-6 inline-flex rounded-lg bg-orange-500/10 p-3 text-orange-500 ring-1 ring-inset ring-orange-500/20">
<i className="h-5 w-5" data-lucide="shopping-bag"></i>
</div>
<h3 className="mb-2 text-lg font-medium text-white">D2C &amp; E-Commerce</h3>
<p className="text-sm leading-relaxed text-slate-400">Fix CAC, optimize funnels, and build retention loops to scale profitably.</p>
<div className="mt-6 flex items-center text-xs font-medium text-slate-500 group-hover:text-orange-400 transition-colors">
                                    Explore Accelerator <i className="ml-2 h-3 w-3" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<div className="cursor-pointer group relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:border-blue-500/20 hover:bg-white/[0.04]" onclick="navigate('blueprint')">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="relative z-10">
<div className="mb-6 inline-flex rounded-lg bg-blue-500/10 p-3 text-blue-500 ring-1 ring-inset ring-blue-500/20">
<i className="h-5 w-5" data-lucide="server"></i>
</div>
<h3 className="mb-2 text-lg font-medium text-white">Tech/SaaS Startups</h3>
<p className="text-sm leading-relaxed text-slate-400">Refine PMF, optimize GTM strategy, pricing models &amp; revenue predictability.</p>
<div className="mt-6 flex items-center text-xs font-medium text-slate-500 group-hover:text-blue-400 transition-colors">
                                    View Blueprint <i className="ml-2 h-3 w-3" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<div className="cursor-pointer group relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:border-cyan-500/20 hover:bg-white/[0.04]" onclick="navigate('launchpad')">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="relative z-10">
<div className="mb-6 inline-flex rounded-lg bg-cyan-500/10 p-3 text-cyan-400 ring-1 ring-inset ring-cyan-500/20">
<i className="h-5 w-5" data-lucide="rocket"></i>
</div>
<h3 className="mb-2 text-lg font-medium text-white">Early Stage Founders</h3>
<p className="text-sm leading-relaxed text-slate-400">Validate ideas, build MVPs, and get your first 100 paying customers.</p>
<div className="mt-6 flex items-center text-xs font-medium text-slate-500 group-hover:text-cyan-400 transition-colors">
                                    Start LaunchPad <i className="ml-2 h-3 w-3" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
<div className="max-w-xl">
<h2 className="text-3xl font-medium tracking-tight text-white">Results That Matter</h2>
<p className="mt-2 text-slate-400">We measure success in revenue, not vanity metrics.</p>
</div>
</div>
<div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden border border-white/5">
<div className="bg-[#050914] px-6 py-10 hover:bg-[#0A0F1E] transition-colors">
<p className="text-4xl font-semibold text-white tracking-tight">3.5x</p>
<p className="mt-2 text-sm text-slate-400">Average ROAS improvement within 90 days</p>
</div>
<div className="bg-[#050914] px-6 py-10 hover:bg-[#0A0F1E] transition-colors">
<p className="text-4xl font-semibold text-white tracking-tight">40%</p>
<p className="mt-2 text-sm text-slate-400">Reduction in CAC for SaaS Clients</p>
</div>
<div className="bg-[#050914] px-6 py-10 hover:bg-[#0A0F1E] transition-colors">
<p className="text-4xl font-semibold text-white tracking-tight">$50M+</p>
<p className="mt-2 text-sm text-slate-400">Revenue generated across MENA region</p>
</div>
<div className="bg-[#050914] px-6 py-10 hover:bg-[#0A0F1E] transition-colors">
<p className="text-4xl font-semibold text-white tracking-tight">120+</p>
<p className="mt-2 text-sm text-slate-400">Successful product launches executed</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-white/[0.01]">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between">
<div>
<h2 className="text-3xl font-medium tracking-tight text-white">Free Growth Tools</h2>
<p className="mt-2 text-slate-400">Stop guessing. Start calculating.</p>
</div>
<button className="mt-4 md:mt-0 text-sm text-orange-400 hover:text-orange-300 flex items-center gap-1 focus:outline-none transition-colors" onclick="navigate('tools')">
                            View all resources <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
<div className="grid gap-6 md:grid-cols-3">
<div className="glass-card rounded-xl p-6 hover:border-white/10 hover:bg-white/5 transition-all cursor-pointer group" onclick="navigate('tools')">
<div className="flex items-center justify-between mb-4">
<div className="p-2 rounded bg-blue-500/10 text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-500/20 transition-colors">
<i className="h-5 w-5" data-lucide="calculator"></i>
</div>
<span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-medium uppercase text-slate-400">Sheet</span>
</div>
<h3 className="text-base font-medium text-white">CAC/LTV Calculator</h3>
<p className="mt-2 text-xs text-slate-500">Determine your true unit economics.</p>
</div>
<div className="glass-card rounded-xl p-6 hover:border-white/10 hover:bg-white/5 transition-all cursor-pointer group" onclick="navigate('tools')">
<div className="flex items-center justify-between mb-4">
<div className="p-2 rounded bg-cyan-500/10 text-cyan-400 group-hover:text-cyan-300 group-hover:bg-cyan-500/20 transition-colors">
<i className="h-5 w-5" data-lucide="filter"></i>
</div>
<span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-medium uppercase text-slate-400">Tool</span>
</div>
<h3 className="text-base font-medium text-white">Funnel Simulator</h3>
<p className="mt-2 text-xs text-slate-500">Project revenue based on conversion rates.</p>
</div>
<div className="glass-card rounded-xl p-6 hover:border-white/10 hover:bg-white/5 transition-all cursor-pointer group" onclick="navigate('webinars')">
<div className="flex items-center justify-between mb-4">
<div className="p-2 rounded bg-orange-500/10 text-orange-400 group-hover:text-orange-300 group-hover:bg-orange-500/20 transition-colors">
<i className="h-5 w-5" data-lucide="video"></i>
</div>
<span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-medium uppercase text-slate-400">Video</span>
</div>
<h3 className="text-base font-medium text-white">Masterclasses</h3>
<p className="mt-2 text-xs text-slate-500">Watch our latest growth breakdowns.</p>
</div>
</div>
</div>
</section>
</main>

<main className="page-view hidden min-h-[60vh]" id="page-blueprint">

<section className="relative py-20 px-6">
<div className="mx-auto max-w-4xl">
<button className="mb-8 flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors" onclick="navigate('home')">
<i className="h-4 w-4" data-lucide="arrow-left"></i> Back to Home
                    </button>
<span className="text-blue-400 text-sm font-semibold tracking-wide uppercase">The Growth Blueprint</span>
<h1 className="mt-4 text-4xl font-semibold text-white tracking-tight lg:text-5xl">Turn growth into a system — not a gamble.</h1>
<p className="mt-6 text-xl text-slate-400 leading-relaxed">
                        We help scaling startups and e-commerce SMEs improve profitability by optimizing CAC/LTV, conversion, retention, and revenue levers across the full funnel.
                    </p>
<p className="mt-4 text-xs font-medium text-slate-500 uppercase tracking-widest">
                        For businesses with traction that need scalable growth, stronger economics, and predictable performance.
                    </p>
<div className="mt-8 flex flex-col gap-4 sm:flex-row">
<button className="rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20" onclick="navigate('contact')">
                            Book a Strategy Call
                        </button>
<button className="flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-300 hover:bg-white/10 transition-colors" onclick="navigate('tools')">
                            Use CAC/LTV Tool
                        </button>
</div>
</div>
</section>

<section className="py-16 border-y border-white/5 bg-white/[0.01]">
<div className="mx-auto max-w-4xl px-6">
<h2 className="text-lg font-medium text-white mb-8">Growth Blueprint is built for teams that have traction — but feel the growth ceiling.</h2>
<div className="grid gap-x-10 gap-y-4 md:grid-cols-2">
<div className="flex items-start gap-3">
<i className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" data-lucide="check-circle-2"></i>
<span className="text-sm text-slate-400">Your paid channels bring traffic, but profitability is inconsistent</span>
</div>
<div className="flex items-start gap-3">
<i className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" data-lucide="check-circle-2"></i>
<span className="text-sm text-slate-400">CAC is rising and you’re not sure which levers matter most</span>
</div>
<div className="flex items-start gap-3">
<i className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" data-lucide="check-circle-2"></i>
<span className="text-sm text-slate-400">Conversion rate, AOV, or repeat purchase rate is underperforming</span>
</div>
<div className="flex items-start gap-3">
<i className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" data-lucide="check-circle-2"></i>
<span className="text-sm text-slate-400">Retention is weak, and growth depends too heavily on acquisition</span>
</div>
<div className="flex items-start gap-3">
<i className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" data-lucide="check-circle-2"></i>
<span className="text-sm text-slate-400">Your reporting exists, but doesn’t drive confident decisions</span>
</div>
<div className="flex items-start gap-3">
<i className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" data-lucide="check-circle-2"></i>
<span className="text-sm text-slate-400">Founder/team is stuck in reactive optimization instead of a roadmap</span>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="mx-auto max-w-4xl">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-4">The Real Cost of "Growth Without Economics"</h2>
<p className="text-slate-400 mb-10 max-w-2xl">
                        Most businesses don’t plateau because they lack effort — they plateau because they scale inefficiency. When growth isn’t anchored in economics and systems, it leads to:
                    </p>
<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
<div className="rounded-lg border border-red-900/20 bg-red-950/10 p-5">
<i className="h-5 w-5 text-red-500 mb-3" data-lucide="trending-down"></i>
<p className="text-sm text-red-100/80">Increasing spend with diminishing returns</p>
</div>
<div className="rounded-lg border border-red-900/20 bg-red-950/10 p-5">
<i className="h-5 w-5 text-red-500 mb-3" data-lucide="percent"></i>
<p className="text-sm text-red-100/80">Margin erosion due to CAC creep and discount dependency</p>
</div>
<div className="rounded-lg border border-red-900/20 bg-red-950/10 p-5">
<i className="h-5 w-5 text-red-500 mb-3" data-lucide="dices"></i>
<p className="text-sm text-red-100/80">“Random wins” that can’t be repeated or scaled</p>
</div>
<div className="rounded-lg border border-red-900/20 bg-red-950/10 p-5">
<i className="h-5 w-5 text-red-500 mb-3" data-lucide="user-x"></i>
<p className="text-sm text-red-100/80">Low retention that forces constant re-acquisition</p>
</div>
<div className="rounded-lg border border-red-900/20 bg-red-950/10 p-5">
<i className="h-5 w-5 text-red-500 mb-3" data-lucide="target"></i>
<p className="text-sm text-red-100/80">Poor prioritization: teams optimize noise instead of real levers</p>
</div>
</div>
<p className="mt-8 text-sm font-medium text-blue-400">Growth Blueprint exists to build a predictable growth engine — with measurable improvement across your core drivers.</p>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#0B1120]">
<div className="mx-auto max-w-6xl">
<div className="mb-12 text-center max-w-3xl mx-auto">
<h2 className="text-2xl font-semibold text-white tracking-tight uppercase">The Blueprint System</h2>
<p className="mt-4 text-slate-400 leading-relaxed">
                            Growth Blueprint is a structured optimization system across acquisition, conversion, retention, and unit economics — designed to turn performance into repeatable growth.
                        </p>
</div>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

<div className="glass-card p-8 rounded-xl flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<span className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-500/10 text-blue-400 font-mono text-sm border border-blue-500/20">1</span>
<h3 className="text-white font-medium text-lg">Economics &amp; Baseline Diagnostics</h3>
</div>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">Establish clarity on what’s working, what’s leaking, and where value is trapped.</p>
<ul className="space-y-3 text-sm text-slate-400 list-none mt-auto">
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-blue-500/50 mt-1 shrink-0" data-lucide="bar-chart-3"></i>
                                    CAC / LTV analysis and levers map
                                </li>
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-blue-500/50 mt-1 shrink-0" data-lucide="bar-chart-3"></i>
                                    Baseline documentation (90-day metrics)
                                </li>
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-blue-500/50 mt-1 shrink-0" data-lucide="bar-chart-3"></i>
                                    Capital efficiency analysis
                                </li>
</ul>
</div>

<div className="glass-card p-8 rounded-xl flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<span className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-500/10 text-blue-400 font-mono text-sm border border-blue-500/20">2</span>
<h3 className="text-white font-medium text-lg">Positioning &amp; Offer Optimization</h3>
</div>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">Improve conversion by tightening value proposition and monetization logic.</p>
<ul className="space-y-3 text-sm text-slate-400 list-none mt-auto">
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-blue-500/50 mt-1 shrink-0" data-lucide="megaphone"></i>
                                    Brand audit &amp; repositioning
                                </li>
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-blue-500/50 mt-1 shrink-0" data-lucide="megaphone"></i>
                                    Competitive differentiation refresh
                                </li>
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-blue-500/50 mt-1 shrink-0" data-lucide="megaphone"></i>
                                    Bundling &amp; upsell strategy
                                </li>
</ul>
</div>

<div className="glass-card p-8 rounded-xl flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<span className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-500/10 text-blue-400 font-mono text-sm border border-blue-500/20">3</span>
<h3 className="text-white font-medium text-lg">Funnel &amp; Conversion Optimization</h3>
</div>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">Increase conversion rate and reduce waste in the customer journey.</p>
<ul className="space-y-3 text-sm text-slate-400 list-none mt-auto">
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-blue-500/50 mt-1 shrink-0" data-lucide="mouse-pointer-click"></i>
                                    Funnel audit &amp; friction points
                                </li>
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-blue-500/50 mt-1 shrink-0" data-lucide="mouse-pointer-click"></i>
                                    CRO experimentation plan (A/B)
                                </li>
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-blue-500/50 mt-1 shrink-0" data-lucide="mouse-pointer-click"></i>
                                    Storefront optimization backlog
                                </li>
</ul>
</div>

<div className="glass-card p-8 rounded-xl flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<span className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-500/10 text-blue-400 font-mono text-sm border border-blue-500/20">4</span>
<h3 className="text-white font-medium text-lg">Retention &amp; LTV Growth System</h3>
</div>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">Improve repeat purchase and lifetime value so growth isn’t “ads-only.”</p>
<ul className="space-y-3 text-sm text-slate-400 list-none mt-auto">
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-blue-500/50 mt-1 shrink-0" data-lucide="repeat"></i>
                                    Retention levers + lifecycle plan
                                </li>
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-blue-500/50 mt-1 shrink-0" data-lucide="repeat"></i>
                                    Post-purchase flows (Email/SMS)
                                </li>
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-blue-500/50 mt-1 shrink-0" data-lucide="repeat"></i>
                                    LTV improvement roadmap
                                </li>
</ul>
</div>

<div className="glass-card p-8 rounded-xl flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<span className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-500/10 text-blue-400 font-mono text-sm border border-blue-500/20">5</span>
<h3 className="text-white font-medium text-lg">Content &amp; Demand Support</h3>
</div>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">Build compounding acquisition support beyond paid.</p>
<ul className="space-y-3 text-sm text-slate-400 list-none mt-auto">
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-blue-500/50 mt-1 shrink-0" data-lucide="file-text"></i>
                                    Content marketing strategy
                                </li>
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-blue-500/50 mt-1 shrink-0" data-lucide="file-text"></i>
                                    Channel-level messaging guidance
                                </li>
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-blue-500/50 mt-1 shrink-0" data-lucide="file-text"></i>
                                    Topics aligned to demand capture
                                </li>
</ul>
</div>

<div className="glass-card p-8 rounded-xl flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<span className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-500/10 text-blue-400 font-mono text-sm border border-blue-500/20">6</span>
<h3 className="text-white font-medium text-lg">Execution Enablement</h3>
</div>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">Make growth sustainable inside the business, not dependent on external chaos.</p>
<ul className="space-y-3 text-sm text-slate-400 list-none mt-auto">
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-blue-500/50 mt-1 shrink-0" data-lucide="users"></i>
                                    Budget optimization &amp; ROI reporting
                                </li>
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-blue-500/50 mt-1 shrink-0" data-lucide="users"></i>
                                    Recruitment advisory
                                </li>
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-blue-500/50 mt-1 shrink-0" data-lucide="users"></i>
                                    Workforce design
                                </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-y border-white/5 bg-white/[0.01]">
<div className="mx-auto max-w-4xl">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-8">What Success Looks Like</h2>
<div className="grid gap-12 md:grid-cols-2">

<div className="space-y-4">
<div className="flex items-start gap-3">
<i className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" data-lucide="check-circle"></i>
<p className="text-sm text-slate-300">Lower CAC with clearer acquisition focus and less waste</p>
</div>
<div className="flex items-start gap-3">
<i className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" data-lucide="check-circle"></i>
<p className="text-sm text-slate-300">Higher conversion rate through systematic CRO</p>
</div>
<div className="flex items-start gap-3">
<i className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" data-lucide="check-circle"></i>
<p className="text-sm text-slate-300">Stronger repeat purchase rate through retention systems</p>
</div>
<div className="flex items-start gap-3">
<i className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" data-lucide="check-circle"></i>
<p className="text-sm text-slate-300">Clear performance reporting that drives decisions</p>
</div>
<div className="flex items-start gap-3">
<i className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" data-lucide="check-circle"></i>
<p className="text-sm text-slate-300">A prioritized growth roadmap your team can execute</p>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-[#0B1120] p-6">
<h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wider">Signals We Measure</h4>
<div className="space-y-4">
<div className="flex items-center justify-between border-b border-white/5 pb-3">
<span className="text-xs text-slate-400">Conversion Rate</span>
<span className="text-xs font-medium text-blue-400">Improvement vs Baseline</span>
</div>
<div className="flex items-center justify-between border-b border-white/5 pb-3">
<span className="text-xs text-slate-400">CAC Efficiency</span>
<span className="text-xs font-medium text-blue-400">Reduction vs Baseline</span>
</div>
<div className="flex items-center justify-between border-b border-white/5 pb-3">
<span className="text-xs text-slate-400">Retention/LTV</span>
<span className="text-xs font-medium text-blue-400">Incremental Uplift</span>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-slate-400">Repeat Purchase</span>
<span className="text-xs font-medium text-blue-400">Growth vs Baseline</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="mx-auto max-w-6xl">
<div className="text-center mb-16">
<h2 className="text-2xl font-semibold text-white tracking-tight uppercase">Why Growth Blueprint is Different</h2>
<p className="mt-4 text-slate-400">Most growth support sells tactics. We build the system behind the results.</p>
</div>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
<div className="mb-4 inline-flex items-center justify-center rounded-lg bg-blue-500/10 p-2 text-blue-400">
<i className="h-5 w-5" data-lucide="scale"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Value-Aligned Commercial Model</h3>
<div className="space-y-2 text-xs text-slate-400 leading-relaxed">
<p>• Base fee + performance fee structure</p>
<p>• We believe in earning upside only when measurable value is delivered</p>
<p>• Incentives stay aligned: outcomes first, activity second</p>
</div>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
<div className="mb-4 inline-flex items-center justify-center rounded-lg bg-blue-500/10 p-2 text-blue-400">
<i className="h-5 w-5" data-lucide="sliders"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Customized to Your Stage</h3>
<div className="space-y-2 text-xs text-slate-400 leading-relaxed">
<p>• Tailored based on business model (D2C vs SaaS) and maturity</p>
<p>• Funnel structure and operational constraints considered</p>
<p>• No one-size-fits-all templates</p>
</div>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
<div className="mb-4 inline-flex items-center justify-center rounded-lg bg-blue-500/10 p-2 text-blue-400">
<i className="h-5 w-5" data-lucide="calendar-clock"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Clear Duration &amp; Scope</h3>
<div className="space-y-2 text-xs text-slate-400 leading-relaxed">
<p>• Fixed engagement duration with structured phases</p>
<p>• Clear outputs and measurement checkpoints</p>
<p>• No open-ended retainers disguised as “projects”</p>
</div>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
<div className="mb-4 inline-flex items-center justify-center rounded-lg bg-blue-500/10 p-2 text-blue-400">
<i className="h-5 w-5" data-lucide="briefcase"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Senior-Led, Systems-First</h3>
<div className="space-y-2 text-xs text-slate-400 leading-relaxed">
<p>• Engagement led by experienced consultants</p>
<p>• Focused on prioritization and leverage — not busywork</p>
<p>• Designed to make growth repeatable inside your team</p>
</div>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
<div className="mb-4 inline-flex items-center justify-center rounded-lg bg-blue-500/10 p-2 text-blue-400">
<i className="h-5 w-5" data-lucide="pie-chart"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Grounded in Economics</h3>
<div className="space-y-2 text-xs text-slate-400 leading-relaxed">
<p>• Every recommendation ties back to CAC, LTV, conversion, and ROI</p>
<p>• No “creative-first” fluff — clarity and numbers lead</p>
</div>
</div>
</div>
</div>
</section>
</main>

<main className="page-view hidden min-h-[60vh]" id="page-accelerator">
<section className="relative py-20 px-6">
<div className="mx-auto max-w-4xl">
<button className="mb-8 flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors" onclick="navigate('home')">
<i className="h-4 w-4" data-lucide="arrow-left"></i> Back to Home
                    </button>
<span className="text-orange-500 text-sm font-semibold tracking-wide uppercase">Retail Transformation</span>
<h1 className="mt-4 text-4xl font-semibold text-white tracking-tight lg:text-5xl">Commerce Accelerator</h1>
<p className="mt-6 text-xl text-slate-400 leading-relaxed">
                        Transitioning traditional retail to a digital-first powerhouse. We unify your offline presence with online systems to drive omni-channel revenue.
                    </p>
<div className="mt-12 grid gap-6 md:grid-cols-3">
<div className="p-6 rounded-lg border border-white/5 bg-white/[0.02]">
<i className="h-8 w-8 text-orange-500 mb-4" data-lucide="layout-grid"></i>
<h3 className="text-white font-medium">Store UX/UI</h3>
<p className="mt-2 text-xs text-slate-400">Optimization of Shopify/Magento storefronts for mobile-first MENA shoppers.</p>
</div>
<div className="p-6 rounded-lg border border-white/5 bg-white/[0.02]">
<i className="h-8 w-8 text-orange-500 mb-4" data-lucide="refresh-cw"></i>
<h3 className="text-white font-medium">Retention Loops</h3>
<p className="mt-2 text-xs text-slate-400">SMS and WhatsApp automation to turn one-time buyers into loyalists.</p>
</div>
<div className="p-6 rounded-lg border border-white/5 bg-white/[0.02]">
<i className="h-8 w-8 text-orange-500 mb-4" data-lucide="package"></i>
<h3 className="text-white font-medium">Logistics Ops</h3>
<p className="mt-2 text-xs text-slate-400">Streamlining fulfillment and last-mile tracking to reduce support tickets.</p>
</div>
</div>
<div className="mt-10">
<button className="rounded-md bg-orange-600 px-6 py-3 text-sm font-medium text-white hover:bg-orange-500 transition-colors shadow-lg shadow-orange-900/20" onclick="navigate('contact')">
                            Discuss Your Store
                        </button>
</div>
</div>
</section>
</main>

<main className="page-view hidden min-h-[60vh]" id="page-launchpad">

<section className="relative py-20 px-6">
<div className="mx-auto max-w-4xl">
<button className="mb-8 flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors" onclick="navigate('home')">
<i className="h-4 w-4" data-lucide="arrow-left"></i> Back to Home
                    </button>
<span className="text-cyan-400 text-sm font-semibold tracking-wide uppercase">From 0 to 1</span>
<h1 className="mt-4 text-4xl font-semibold text-white tracking-tight lg:text-5xl">Launch your startup with clarity — not guesswork.</h1>
<p className="mt-6 text-xl text-slate-400 leading-relaxed">
                        We help early-stage founders validate product-market fit, design a scalable go-to-market system, and launch with investor-grade fundamentals from day one.
                    </p>
<p className="mt-4 text-xs font-medium text-slate-500 uppercase tracking-widest">
                        Built for tech startups &amp; digital commerce founders at idea to early-revenue stage.
                    </p>
<div className="mt-8 flex flex-col gap-4 sm:flex-row">
<button className="rounded-md bg-cyan-600 px-6 py-3 text-sm font-medium text-white hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-900/20" onclick="navigate('contact')">
                            Book a Strategy Call
                        </button>
<button className="flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-300 hover:bg-white/10 transition-colors" onclick="navigate('tools')">
                            Validate Your Economics
                        </button>
</div>
</div>
</section>

<section className="py-16 border-y border-white/5 bg-white/[0.01]">
<div className="mx-auto max-w-4xl px-6">
<h2 className="text-lg font-medium text-white mb-8">This package is designed for founders who recognize these signals:</h2>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="h-5 w-5 text-cyan-500 mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-sm text-slate-400">You have a product idea or MVP but lack clear product-market validation</span>
</li>
<li className="flex items-start gap-3">
<i className="h-5 w-5 text-cyan-500 mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-sm text-slate-400">You’re unsure how to price, position, or launch profitably</span>
</li>
<li className="flex items-start gap-3">
<i className="h-5 w-5 text-cyan-500 mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-sm text-slate-400">Growth decisions are based on assumptions, not data</span>
</li>
<li className="flex items-start gap-3">
<i className="h-5 w-5 text-cyan-500 mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-sm text-slate-400">You need to look credible to investors, partners, or early customers</span>
</li>
<li className="flex items-start gap-3">
<i className="h-5 w-5 text-cyan-500 mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-sm text-slate-400">You want to avoid building the wrong thing — or scaling the wrong model</span>
</li>
</ul>
</div>
</section>

<section className="py-20 px-6">
<div className="mx-auto max-w-4xl">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-4">The Real Cost of Launching Without a System</h2>
<p className="text-slate-400 mb-10 max-w-2xl">
                        Most startups don’t fail because of execution — they fail because they scale uncertainty. Launching without validated economics, positioning, and systems leads to:
                    </p>
<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
<div className="rounded-lg border border-red-900/20 bg-red-950/10 p-5">
<i className="h-5 w-5 text-red-500 mb-3" data-lucide="alert-triangle"></i>
<p className="text-sm text-red-100/80">Months of wasted development and marketing spend</p>
</div>
<div className="rounded-lg border border-red-900/20 bg-red-950/10 p-5">
<i className="h-5 w-5 text-red-500 mb-3" data-lucide="bar-chart-2"></i>
<p className="text-sm text-red-100/80">Early traction that doesn’t convert into sustainable revenue</p>
</div>
<div className="rounded-lg border border-red-900/20 bg-red-950/10 p-5">
<i className="h-5 w-5 text-red-500 mb-3" data-lucide="shuffle"></i>
<p className="text-sm text-red-100/80">Constant pivots with no clear signal of what’s working</p>
</div>
<div className="rounded-lg border border-red-900/20 bg-red-950/10 p-5">
<i className="h-5 w-5 text-red-500 mb-3" data-lucide="frown"></i>
<p className="text-sm text-red-100/80">Weak investor conversations due to unclear fundamentals</p>
</div>
<div className="rounded-lg border border-red-900/20 bg-red-950/10 p-5">
<i className="h-5 w-5 text-red-500 mb-3" data-lucide="battery-warning"></i>
<p className="text-sm text-red-100/80">Founder burnout from operating without structure</p>
</div>
</div>
<p className="mt-8 text-sm font-medium text-cyan-400">Startup LaunchPad exists to eliminate this uncertainty before it becomes expensive.</p>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#0B1120]">
<div className="mx-auto max-w-6xl">
<div className="mb-12 text-center max-w-3xl mx-auto">
<h2 className="text-2xl font-semibold text-white tracking-tight uppercase">The LaunchPad System (What We Install &amp; Deliver)</h2>
<p className="mt-4 text-slate-400 leading-relaxed">
                            Startup LaunchPad is a structured launch system, not a list of disconnected services.
                            Each component is designed to work together to create a launch-ready business.
                        </p>
</div>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

<div className="glass-card p-8 rounded-xl flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<span className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-500/10 text-cyan-400 font-mono text-sm border border-cyan-500/20">1</span>
<h3 className="text-white font-medium text-lg">Market &amp; Product Validation</h3>
</div>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">Ensure you’re building something the market actually wants.</p>
<ul className="space-y-3 text-sm text-slate-400 list-none mt-auto">
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-cyan-500/50 mt-1 shrink-0" data-lucide="check-circle"></i>
                                    Product-market fit validation
                                </li>
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-cyan-500/50 mt-1 shrink-0" data-lucide="check-circle"></i>
                                    Founder &amp; customer interviews
                                </li>
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-cyan-500/50 mt-1 shrink-0" data-lucide="check-circle"></i>
                                    Demand and signal analysis
                                </li>
</ul>
</div>

<div className="glass-card p-8 rounded-xl flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<span className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-500/10 text-cyan-400 font-mono text-sm border border-cyan-500/20">2</span>
<h3 className="text-white font-medium text-lg">Positioning &amp; Differentiation</h3>
</div>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">Make your product clear, compelling, and defensible.</p>
<ul className="space-y-3 text-sm text-slate-400 list-none mt-auto">
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-cyan-500/50 mt-1 shrink-0" data-lucide="check-circle"></i>
                                    Competitive positioning &amp; value prop
                                </li>
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-cyan-500/50 mt-1 shrink-0" data-lucide="check-circle"></i>
                                    Brand identity foundations
                                </li>
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-cyan-500/50 mt-1 shrink-0" data-lucide="check-circle"></i>
                                    Market narrative clarity
                                </li>
</ul>
</div>

<div className="glass-card p-8 rounded-xl flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<span className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-500/10 text-cyan-400 font-mono text-sm border border-cyan-500/20">3</span>
<h3 className="text-white font-medium text-lg">Go-To-Market Architecture</h3>
</div>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">Design how growth actually happens.</p>
<ul className="space-y-3 text-sm text-slate-400 list-none mt-auto">
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-cyan-500/50 mt-1 shrink-0" data-lucide="check-circle"></i>
                                    GTM strategy (local or regional)
                                </li>
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-cyan-500/50 mt-1 shrink-0" data-lucide="check-circle"></i>
                                    Early acquisition &amp; activation logic
                                </li>
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-cyan-500/50 mt-1 shrink-0" data-lucide="check-circle"></i>
                                    Content &amp; traction strategy
                                </li>
</ul>
</div>

<div className="glass-card p-8 rounded-xl flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<span className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-500/10 text-cyan-400 font-mono text-sm border border-cyan-500/20">4</span>
<h3 className="text-white font-medium text-lg">Revenue &amp; Economics Design</h3>
</div>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">Build a business that can scale profitably.</p>
<ul className="space-y-3 text-sm text-slate-400 list-none mt-auto">
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-cyan-500/50 mt-1 shrink-0" data-lucide="check-circle"></i>
                                    Pricing strategy &amp; revenue model
                                </li>
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-cyan-500/50 mt-1 shrink-0" data-lucide="check-circle"></i>
                                    CAC / LTV logic and growth levers
                                </li>
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-cyan-500/50 mt-1 shrink-0" data-lucide="check-circle"></i>
                                    Financial modeling &amp; forecasting
                                </li>
</ul>
</div>

<div className="glass-card p-8 rounded-xl flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<span className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-500/10 text-cyan-400 font-mono text-sm border border-cyan-500/20">5</span>
<h3 className="text-white font-medium text-lg">Operations, Tech &amp; Readiness</h3>
</div>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">Ensure infrastructure supports scale from day one.</p>
<ul className="space-y-3 text-sm text-slate-400 list-none mt-auto">
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-cyan-500/50 mt-1 shrink-0" data-lucide="check-circle"></i>
                                    Platform selection &amp; migration
                                </li>
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-cyan-500/50 mt-1 shrink-0" data-lucide="check-circle"></i>
                                    Payments integration
                                </li>
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-cyan-500/50 mt-1 shrink-0" data-lucide="check-circle"></i>
                                    Core process mapping
                                </li>
</ul>
</div>

<div className="glass-card p-8 rounded-xl flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<span className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-500/10 text-cyan-400 font-mono text-sm border border-cyan-500/20">6</span>
<h3 className="text-white font-medium text-lg">Founder &amp; Team Enablement</h3>
</div>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">Reduce founder dependency and early execution risk.</p>
<ul className="space-y-3 text-sm text-slate-400 list-none mt-auto">
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-cyan-500/50 mt-1 shrink-0" data-lucide="check-circle"></i>
                                    Recruitment advisory for early hires
                                </li>
<li className="flex items-start gap-2">
<i className="h-4 w-4 text-cyan-500/50 mt-1 shrink-0" data-lucide="check-circle"></i>
                                    Leadership coaching
                                </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-y border-white/5 bg-white/[0.01]">
<div className="mx-auto max-w-4xl">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-8">What Success Looks Like</h2>
<div className="grid gap-12 md:grid-cols-2">

<div className="space-y-4">
<div className="flex items-start gap-3">
<i className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" data-lucide="check-circle"></i>
<p className="text-sm text-slate-300">A validated product with real market signals</p>
</div>
<div className="flex items-start gap-3">
<i className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" data-lucide="check-circle"></i>
<p className="text-sm text-slate-300">A launch-ready GTM system, not a list of tactics</p>
</div>
<div className="flex items-start gap-3">
<i className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" data-lucide="check-circle"></i>
<p className="text-sm text-slate-300">Clear pricing, unit economics, and growth levers</p>
</div>
<div className="flex items-start gap-3">
<i className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" data-lucide="check-circle"></i>
<p className="text-sm text-slate-300">A credible foundation for investors and partners</p>
</div>
<div className="flex items-start gap-3">
<i className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" data-lucide="check-circle"></i>
<p className="text-sm text-slate-300">Reduced risk, faster learning, and focused execution</p>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-[#0B1120] p-6">
<h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wider">Metrics We Track</h4>
<div className="space-y-4">
<div className="flex items-center justify-between border-b border-white/5 pb-3">
<span className="text-xs text-slate-400">PMF Signals</span>
<span className="text-xs font-medium text-cyan-400">Interviews &amp; Waitlists</span>
</div>
<div className="flex items-center justify-between border-b border-white/5 pb-3">
<span className="text-xs text-slate-400">Unit Economics</span>
<span className="text-xs font-medium text-cyan-400">CAC / LTV Logic</span>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-slate-400">Roadmap</span>
<span className="text-xs font-medium text-cyan-400">Phase 1 GTM Plan</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="mx-auto max-w-6xl">
<div className="text-center mb-16">
<h2 className="text-2xl font-semibold text-white tracking-tight uppercase">Why Startup LaunchPad is Different</h2>
<p className="mt-4 text-slate-400">We don’t believe in charging for activity. We believe in charging for outcomes.</p>
</div>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
<div className="mb-4 inline-flex items-center justify-center rounded-lg bg-cyan-500/10 p-2 text-cyan-400">
<i className="h-5 w-5" data-lucide="scale"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Value-Aligned Commercial Model</h3>
<div className="space-y-2 text-xs text-slate-400 leading-relaxed">
<p>• Base fee + performance fee structure</p>
<p>• We align incentives by earning additional fees only when agreed results are delivered</p>
<p>• This ensures focus on outcomes, not deliverables</p>
</div>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
<div className="mb-4 inline-flex items-center justify-center rounded-lg bg-cyan-500/10 p-2 text-cyan-400">
<i className="h-5 w-5" data-lucide="sliders"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Customized by Design</h3>
<div className="space-y-2 text-xs text-slate-400 leading-relaxed">
<p>• Every engagement is tailored to Business model, Market, and Stage of maturity</p>
<p>• No templates. No fixed playbooks forced onto your startup.</p>
</div>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
<div className="mb-4 inline-flex items-center justify-center rounded-lg bg-cyan-500/10 p-2 text-cyan-400">
<i className="h-5 w-5" data-lucide="calendar-clock"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Clear Duration &amp; Scope</h3>
<div className="space-y-2 text-xs text-slate-400 leading-relaxed">
<p>• Defined engagement timeline from day one</p>
<p>• Structured phases with clear outputs</p>
<p>• No open-ended consulting or scope creep</p>
</div>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
<div className="mb-4 inline-flex items-center justify-center rounded-lg bg-cyan-500/10 p-2 text-cyan-400">
<i className="h-5 w-5" data-lucide="briefcase"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Senior-Led Engagement</h3>
<div className="space-y-2 text-xs text-slate-400 leading-relaxed">
<p>• Strategy and delivery are led by experienced consultants, not juniors</p>
<p>• Founder-level thinking throughout the engagement</p>
<p>• Hands-on guidance, not theoretical advice</p>
</div>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
<div className="mb-4 inline-flex items-center justify-center rounded-lg bg-cyan-500/10 p-2 text-cyan-400">
<i className="h-5 w-5" data-lucide="globe-2"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Built for MENA Reality</h3>
<div className="space-y-2 text-xs text-slate-400 leading-relaxed">
<p>• Regional buyer behavior, payments, and market dynamics embedded</p>
<p>• Practical decisions grounded in local execution constraints</p>
</div>
</div>
</div>
</div>
</section>
</main>

<main className="page-view hidden min-h-[60vh]" id="page-webinars">
<section className="relative py-20 px-6">
<div className="mx-auto max-w-5xl">
<button className="mb-8 flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors" onclick="navigate('home')">
<i className="h-4 w-4" data-lucide="arrow-left"></i> Back to Home
                    </button>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
<div>
<h1 className="text-3xl font-semibold text-white tracking-tight">Growth Masterclasses</h1>
<p className="mt-2 text-slate-400">Deep dives into specific growth mechanics. No fluff, just tactics.</p>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white">Upcoming</span>
<span className="px-3 py-1 rounded-full border border-white/5 bg-transparent text-xs font-medium text-slate-500">Archive</span>
</div>
</div>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

<div className="group relative rounded-xl border border-white/5 bg-white/[0.02] p-1 hover:bg-white/[0.04] transition-colors">
<div className="aspect-video w-full rounded-lg bg-slate-800 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center">
<i className="h-12 w-12 text-white/50 group-hover:text-white transition-colors" data-lucide="play-circle"></i>
</div>
</div>
<div className="p-4">
<div className="mb-2 flex items-center gap-2 text-[10px] font-medium uppercase tracking-wider text-orange-400">
<span>Upcoming</span> • <span>Oct 24</span>
</div>
<h3 className="text-base font-medium text-white">Cracking KSA: Ad Creative Strategy</h3>
<p className="mt-2 text-xs text-slate-400 line-clamp-2">How to localize your creatives for the Saudi market to lower CPMs and increase CTR.</p>
</div>
</div>

<div className="group relative rounded-xl border border-white/5 bg-white/[0.02] p-1 hover:bg-white/[0.04] transition-colors">
<div className="aspect-video w-full rounded-lg bg-slate-800 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center">
<i className="h-12 w-12 text-white/50 group-hover:text-white transition-colors" data-lucide="play-circle"></i>
</div>
</div>
<div className="p-4">
<div className="mb-2 flex items-center gap-2 text-[10px] font-medium uppercase tracking-wider text-slate-500">
<span>Recorded</span> • <span>Sep 12</span>
</div>
<h3 className="text-base font-medium text-white">B2B Lead Gen on LinkedIn</h3>
<p className="mt-2 text-xs text-slate-400 line-clamp-2">Automating outreach without getting banned. The playbook for high-ticket sales.</p>
</div>
</div>

<div className="group relative rounded-xl border border-white/5 bg-white/[0.02] p-1 hover:bg-white/[0.04] transition-colors">
<div className="aspect-video w-full rounded-lg bg-slate-800 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center">
<i className="h-12 w-12 text-white/50 group-hover:text-white transition-colors" data-lucide="play-circle"></i>
</div>
</div>
<div className="p-4">
<div className="mb-2 flex items-center gap-2 text-[10px] font-medium uppercase tracking-wider text-slate-500">
<span>Recorded</span> • <span>Aug 05</span>
</div>
<h3 className="text-base font-medium text-white">Email Flows that Print Money</h3>
<p className="mt-2 text-xs text-slate-400 line-clamp-2">Setting up Klaviyo for D2C brands. The 3 flows that generate 20% of revenue.</p>
</div>
</div>
</div>
</div>
</section>
</main>

<main className="page-view hidden min-h-[60vh]" id="page-tools">
<section className="relative py-20 px-6">
<div className="mx-auto max-w-3xl">
<button className="mb-8 flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors" onclick="navigate('home')">
<i className="h-4 w-4" data-lucide="arrow-left"></i> Back to Home
                    </button>
<h1 className="text-3xl font-semibold text-white tracking-tight mb-8">Unit Economics Calculator</h1>
<div className="rounded-2xl border border-white/10 bg-[#0B1120] p-8 shadow-2xl">
<div className="grid gap-8 md:grid-cols-2">

<div className="space-y-6">
<div>
<label className="block text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">Monthly Ad Spend ($)</label>
<input className="w-full rounded-md border border-white/10 bg-[#030712] px-4 py-2 text-white placeholder-slate-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all" id="calc-spend" oninput="calculate()" type="number" value="5000"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">Total Customers Acquired</label>
<input className="w-full rounded-md border border-white/10 bg-[#030712] px-4 py-2 text-white placeholder-slate-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all" id="calc-customers" oninput="calculate()" type="number" value="120"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">Average Order Value ($)</label>
<input className="w-full rounded-md border border-white/10 bg-[#030712] px-4 py-2 text-white placeholder-slate-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all" id="calc-aov" oninput="calculate()" type="number" value="85"/>
</div>
</div>

<div className="flex flex-col justify-center space-y-4 rounded-xl bg-[#030712] p-6 border border-white/5">
<div className="flex justify-between items-center border-b border-white/5 pb-4">
<span className="text-sm text-slate-400">CAC</span>
<span className="text-2xl font-semibold text-white" id="res-cac">$41.67</span>
</div>
<div className="flex justify-between items-center border-b border-white/5 pb-4">
<span className="text-sm text-slate-400">ROAS</span>
<span className="text-2xl font-semibold text-emerald-400" id="res-roas">2.04x</span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-slate-400">Revenue</span>
<span className="text-2xl font-semibold text-blue-400" id="res-rev">$10,200</span>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10">
<p className="text-xs text-slate-500 mb-4">This is a simplified demo. Get the advanced sheet for LTV cohorts and contribution margin.</p>
<button className="w-full rounded-md bg-white text-slate-900 font-semibold py-3 hover:bg-slate-200 transition-colors">Download Advanced Sheet</button>
</div>
</div>
</div>
</section>
</main>

<main className="page-view hidden min-h-[60vh]" id="page-contact">
<section className="relative py-20 px-6">
<div className="mx-auto max-w-2xl">
<button className="mb-8 flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors" onclick="navigate('home')">
<i className="h-4 w-4" data-lucide="arrow-left"></i> Back to Home
                    </button>
<div className="text-center mb-10">
<h1 className="text-3xl font-semibold text-white tracking-tight">Start Your Growth Engine</h1>
<p className="mt-2 text-slate-400">Fill out the form below to schedule your free 20-minute audit.</p>
</div>
<form className="space-y-6 rounded-2xl border border-white/10 bg-[#0B1120] p-8 backdrop-blur-sm shadow-xl">
<div className="grid gap-6 md:grid-cols-2">
<div>
<label className="block text-xs font-medium text-slate-300 mb-2">First Name</label>
<input className="w-full rounded-md border border-white/10 bg-[#030712] px-4 py-2 text-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-300 mb-2">Last Name</label>
<input className="w-full rounded-md border border-white/10 bg-[#030712] px-4 py-2 text-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-300 mb-2">Work Email</label>
<input className="w-full rounded-md border border-white/10 bg-[#030712] px-4 py-2 text-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-300 mb-2">Company Website</label>
<input className="w-full rounded-md border border-white/10 bg-[#030712] px-4 py-2 text-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-300 mb-2">Biggest Growth Challenge</label>
<textarea className="w-full rounded-md border border-white/10 bg-[#030712] px-4 py-2 text-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all" rows="4"></textarea>
</div>
<button className="w-full rounded-md bg-gradient-to-r from-orange-600 to-orange-500 py-3 text-sm font-medium text-white shadow-lg hover:shadow-orange-500/20 transition-all" type="button">
                            Request Consultation
                        </button>
</form>

<div className="mt-16 border-t border-white/10 pt-10">
<h4 className="text-sm font-medium text-white mb-6">Frequently Asked Questions</h4>
<div className="space-y-4">
<details className="group">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm text-slate-400 group-hover:text-white">
<span>Do you work with pre-revenue startups?</span>
<span className="transition group-open:rotate-180">
<i className="h-4 w-4" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="mt-2 text-xs text-slate-500 leading-relaxed pl-4 border-l border-white/10">Yes, through our Startup LaunchPad program designed specifically for MVP validation and first traction.</p>
</details>
<details className="group">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm text-slate-400 group-hover:text-white">
<span>What creates the price?</span>
<span className="transition group-open:rotate-180">
<i className="h-4 w-4" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="mt-2 text-xs text-slate-500 leading-relaxed pl-4 border-l border-white/10">Pricing is based on the complexity of your funnel and the dedicated resources needed. We offer both retainer and performance-based models.</p>
</details>
</div>
</div>
</div>
</section>
</main>
</div>

<footer className="mt-auto border-t border-white/5 bg-[#030712] pb-12 pt-16 z-20 relative">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-12 md:grid-cols-4 lg:grid-cols-5">
<div className="lg:col-span-2">
<a className="mb-4 flex items-center gap-2 text-base font-semibold tracking-tight text-white" href="#" onclick="navigate('home')">
<div className="relative flex h-4 w-4 items-center justify-center rounded bg-gradient-to-br from-blue-500 to-cyan-400">
<div className="absolute inset-[2px] bg-[#030712] rounded-[1px]"></div>
</div>
                        BlueDot
                    </a>
<p className="text-sm text-slate-500">
                        Strategic Growth Systems for MENA Founders. <br/>
                        Egypt | Kuwait | KSA | UAE
                    </p>
</div>
<div>
<h4 className="mb-4 text-sm font-medium text-white">Solutions</h4>
<ul className="space-y-3 text-xs text-slate-500 cursor-pointer">
<li><a className="hover:text-white transition-colors" onclick="navigate('blueprint')">Growth Blueprint</a></li>
<li><a className="hover:text-white transition-colors" onclick="navigate('accelerator')">Commerce Accelerator</a></li>
<li><a className="hover:text-white transition-colors" onclick="navigate('launchpad')">Startup LaunchPad</a></li>
</ul>
</div>
<div>
<h4 className="mb-4 text-sm font-medium text-white">Resources</h4>
<ul className="space-y-3 text-xs text-slate-500 cursor-pointer">
<li><a className="hover:text-white transition-colors" onclick="navigate('tools')">CAC Calculator</a></li>
<li><a className="hover:text-white transition-colors" onclick="navigate('tools')">Funnel Simulator</a></li>
<li><a className="hover:text-white transition-colors" onclick="navigate('webinars')">Webinars</a></li>
</ul>
</div>
<div>
<h4 className="mb-4 text-sm font-medium text-white">Company</h4>
<ul className="space-y-3 text-xs text-slate-500 cursor-pointer">
<li><a className="hover:text-white transition-colors" onclick="navigate('contact')">Contact</a></li>
<li><a className="hover:text-white transition-colors" onclick="navigate('home')">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="mt-16 border-t border-white/5 pt-8 text-center text-xs text-slate-600">
                © 2023 Blue Dot Consultancy. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
