import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function navigateTo(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-section').forEach(el => {
                el.classList.remove('active');
            });
            
            // Show target page
            const target = document.getElementById(pageId);
            if(target) {
                target.classList.add('active');
            }

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Update Nav State
            document.querySelectorAll('.nav-btn').forEach(btn => {
                if(btn.dataset.target === pageId) {
                    btn.classList.add('bg-white', 'text-slate-900', 'shadow-sm');
                    btn.classList.remove('text-slate-600');
                } else {
                    btn.classList.remove('bg-white', 'text-slate-900', 'shadow-sm');
                    btn.classList.add('text-slate-600');
                }
            });
        }

        // Initialize Home Nav State
        document.addEventListener('DOMContentLoaded', () => {
             document.querySelector('[data-target="home"]').classList.add('bg-white', 'text-slate-900', 'shadow-sm');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1] mesh-gradient opacity-60 pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 glass">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group cursor-pointer" href="#home" onclick="navigateTo('home')">
<div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-violet-500/20 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chart-square-linear" width="22"></iconify-icon>
</div>
<span className="font-heading text-xl font-bold tracking-tight text-slate-900">RankVista</span>
</a>
<div className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-white/50 border border-slate-200/50 backdrop-blur-md">
<button className="nav-btn px-5 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white transition-all" data-target="home" onclick="navigateTo('home')">Home</button>
<button className="nav-btn px-5 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white transition-all" data-target="services" onclick="navigateTo('services')">Services</button>
<button className="nav-btn px-5 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white transition-all" data-target="pricing" onclick="navigateTo('pricing')">Pricing</button>
<button className="nav-btn px-5 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white transition-all" data-target="team" onclick="navigateTo('team')">Team</button>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Login</a>
<a className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2 group" href="#pricing" onclick="navigateTo('pricing')">
                    Get Started
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<div className="page-section active pt-28" id="home">

<header className="relative pb-20 overflow-hidden">
<div className="absolute top-20 left-10 w-24 h-24 bg-violet-400/20 rounded-full blur-3xl animate-float"></div>
<div className="absolute bottom-40 right-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl animate-float-delayed"></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 border border-slate-200 text-xs font-medium text-violet-600 mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
</span>
                    New: Gemini Ultra Integration Live
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.95] mb-8 text-slate-900">
                    Dominate the <span className="text-gradient">AI Search</span><br/>Revolution
                </h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    The world's first AEO platform designed to maximize visibility across ChatGPT, Gemini, Perplexity, and traditional search engines.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="px-8 py-4 rounded-xl bg-slate-900 text-white font-medium text-base shadow-xl shadow-indigo-500/20 hover:scale-105 transition-transform flex items-center gap-2" onclick="navigateTo('services')">
<iconify-icon icon="solar:rocket-2-linear" width="20"></iconify-icon>
                        Explore Platform
                    </button>
<button className="px-8 py-4 rounded-xl bg-white text-slate-700 border border-slate-200 font-medium text-base hover:bg-slate-50 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                        Watch Demo
                    </button>
</div>

<div className="max-w-5xl mx-auto glass-card rounded-2xl p-2 bg-gradient-to-b from-white/80 to-white/40 shadow-2xl ring-1 ring-slate-900/5 overflow-hidden">
<div className="bg-slate-50 rounded-xl border border-slate-100 p-6 md:p-8">
<div className="flex justify-between items-center mb-8">
<div className="flex gap-4">
<div className="h-8 w-8 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600">
<iconify-icon icon="solar:chat-round-line-linear"></iconify-icon>
</div>
<div>
<div className="h-4 w-32 bg-slate-200 rounded animate-pulse mb-2"></div>
<div className="h-3 w-20 bg-slate-100 rounded"></div>
</div>
</div>
<div className="flex gap-2">
<div className="h-8 w-24 bg-white border border-slate-200 rounded-lg"></div>
<div className="h-8 w-8 bg-slate-900 rounded-lg"></div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
<div className="text-xs font-mono text-slate-400 mb-2">VISIBILITY SCORE</div>
<div className="text-3xl font-bold text-slate-800 mb-4">94.2%</div>
<div className="h-16 w-full flex items-end gap-1">
<div className="w-full bg-violet-100 h-1/3 rounded-t"></div>
<div className="w-full bg-violet-200 h-1/2 rounded-t"></div>
<div className="w-full bg-violet-500 h-full rounded-t"></div>
<div className="w-full bg-violet-300 h-2/3 rounded-t"></div>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
<div className="text-xs font-mono text-slate-400 mb-2">AI SENTIMENT</div>
<div className="text-3xl font-bold text-emerald-600 mb-4">Positive</div>
<div className="flex gap-2 mt-auto">
<span className="text-[10px] px-2 py-1 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100">Trusted Source</span>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
<div className="text-xs font-mono text-slate-400 mb-2">CITATION VELOCITY</div>
<div className="text-3xl font-bold text-slate-800 mb-4">+128%</div>
<div className="h-16 w-full relative">
<svg className="w-full h-full stroke-cyan-500 fill-none stroke-2" viewbox="0 0 100 40">
<path d="M0 35 C 20 35, 20 10, 40 20 S 60 30, 80 5 L 100 0"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-10 border-y border-slate-200/60 bg-white/30 backdrop-blur-sm">
<p className="text-center text-xs font-mono text-slate-400 mb-8 uppercase tracking-widest">Trusting their AI Strategy to RankVista</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 px-6">
<span className="text-xl font-heading font-semibold">Acme Corp</span>
<span className="text-xl font-heading font-semibold">Stripe</span>
<span className="text-xl font-heading font-semibold">Vercel</span>
<span className="text-xl font-heading font-semibold">Linear</span>
<span className="text-xl font-heading font-semibold">OpenAI</span>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold mb-4 text-slate-900">Unified Intelligence</h2>
<p className="text-slate-500">Everything you need to control your brand narrative.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="glass-card p-8 rounded-2xl">
<div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:monitor-camera-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Live Monitoring</h3>
<p className="text-slate-500 text-sm leading-relaxed">Track how LLMs answer questions about your brand in real-time across 12+ models.</p>
</div>
<div className="glass-card p-8 rounded-2xl">
<div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:graph-new-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Gap Analysis</h3>
<p className="text-slate-500 text-sm leading-relaxed">Identify questions your competitors are answering that you aren't.</p>
</div>
<div className="glass-card p-8 rounded-2xl">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Optimization</h3>
<p className="text-slate-500 text-sm leading-relaxed">Auto-generate schema and content structures preferred by AI scrapers.</p>
</div>
</div>
<div className="mt-12 text-center">
<button className="text-violet-600 font-medium hover:text-violet-700 flex items-center justify-center gap-2" onclick="navigateTo('services')">View all features <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</section>
</div>

<div className="page-section pt-32 pb-20" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20">
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6">Platform Services</h1>
<p className="text-xl text-slate-500 max-w-2xl font-light">A comprehensive suite of tools designed to help you analyze, optimize, and control your presence in the age of generative search.</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
<div className="order-2 lg:order-1">
<div className="w-14 h-14 rounded-2xl bg-violet-100 text-violet-600 flex items-center justify-center mb-8">
<iconify-icon icon="solar:database-linear" width="28"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold text-slate-900 mb-4">Answer Engine Optimization (AEO)</h2>
<p className="text-slate-500 leading-relaxed mb-6">Unlike traditional SEO, AEO focuses on being the single source of truth. Our platform analyzes vector embeddings to ensure your content is the most likely to be cited by LLMs.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Vector similarity analysis
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Citation authority tracking
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Hallucination prevention
                        </li>
</ul>
</div>
<div className="order-1 lg:order-2">
<div className="glass-card p-2 rounded-2xl bg-gradient-to-br from-violet-50 to-white transform rotate-2 hover:rotate-0 transition-transform duration-500">

<div className="bg-white rounded-xl border border-slate-200 p-6 h-80 flex flex-col">
<div className="flex items-center gap-3 mb-6">
<div className="w-20 h-4 bg-slate-100 rounded"></div>
<div className="w-full h-px bg-slate-100"></div>
</div>
<div className="space-y-3">
<div className="w-full h-12 bg-violet-50 rounded-lg border border-violet-100 flex items-center px-4 text-violet-700 text-sm">
<iconify-icon className="mr-2" icon="solar:star-bold"></iconify-icon> Preferred Answer Source
                                </div>
<div className="w-3/4 h-3 bg-slate-100 rounded"></div>
<div className="w-full h-3 bg-slate-100 rounded"></div>
<div className="w-5/6 h-3 bg-slate-100 rounded"></div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
<div className="lg:order-1">
<div className="glass-card p-2 rounded-2xl bg-gradient-to-br from-cyan-50 to-white transform -rotate-2 hover:rotate-0 transition-transform duration-500">

<div className="bg-white rounded-xl border border-slate-200 p-6 h-80 grid grid-cols-2 gap-4">
<div className="col-span-2 h-8 w-1/3 bg-slate-100 rounded mb-2"></div>
<div className="bg-slate-50 rounded-lg p-4 border border-slate-100 flex flex-col justify-between">
<iconify-icon className="text-cyan-500 text-2xl" icon="solar:document-text-linear"></iconify-icon>
<div className="h-2 w-12 bg-slate-200 rounded mt-4"></div>
</div>
<div className="bg-slate-50 rounded-lg p-4 border border-slate-100 flex flex-col justify-between">
<iconify-icon className="text-cyan-500 text-2xl" icon="solar:code-file-linear"></iconify-icon>
<div className="h-2 w-12 bg-slate-200 rounded mt-4"></div>
</div>
<div className="bg-slate-50 rounded-lg p-4 border border-slate-100 flex flex-col justify-between">
<iconify-icon className="text-cyan-500 text-2xl" icon="solar:widget-2-linear"></iconify-icon>
<div className="h-2 w-12 bg-slate-200 rounded mt-4"></div>
</div>
<div className="bg-slate-50 rounded-lg p-4 border border-slate-100 flex flex-col justify-between">
<iconify-icon className="text-cyan-500 text-2xl" icon="solar:chart-2-linear"></iconify-icon>
<div className="h-2 w-12 bg-slate-200 rounded mt-4"></div>
</div>
</div>
</div>
</div>
<div className="lg:order-2">
<div className="w-14 h-14 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center mb-8">
<iconify-icon icon="solar:pen-new-square-linear" width="28"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold text-slate-900 mb-4">Generative Content Studio</h2>
<p className="text-slate-500 leading-relaxed mb-6">Create content structures that machines love to read. Our studio provides templates for structured data, FAQ schema, and entity-dense paragraphs.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Knowledge Graph injection
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> JSON-LD generator
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Entity density scoring
                        </li>
</ul>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-8">
<iconify-icon icon="solar:shield-warning-linear" width="28"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold text-slate-900 mb-4">Brand Protection &amp; Monitoring</h2>
<p className="text-slate-500 leading-relaxed mb-6">Get instant alerts when AI models generate inaccurate information about your pricing, features, or company history. Issue correction signals immediately.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> 24/7 LLM Crawling
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Sentiment drift alerts
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Competitor comparative analysis
                        </li>
</ul>
</div>
<div className="order-1 lg:order-2">
<div className="glass-card p-2 rounded-2xl bg-gradient-to-br from-orange-50 to-white transform rotate-1 hover:rotate-0 transition-transform duration-500">

<div className="bg-white rounded-xl border border-slate-200 p-6 h-80 flex flex-col justify-center items-center relative overflow-hidden">
<div className="absolute inset-0 bg-red-50/50"></div>
<div className="relative bg-white p-4 shadow-lg rounded-xl border border-red-100 max-w-[250px] mb-4">
<div className="flex items-center gap-2 text-red-500 text-xs font-bold mb-1">
<iconify-icon icon="solar:danger-triangle-linear"></iconify-icon> ALERT: Hallucination Detected
                                </div>
<div className="h-2 w-full bg-slate-100 rounded mb-1"></div>
<div className="h-2 w-2/3 bg-slate-100 rounded"></div>
</div>
<div className="relative bg-white p-4 shadow-lg rounded-xl border border-emerald-100 max-w-[250px] opacity-60 scale-95">
<div className="flex items-center gap-2 text-emerald-500 text-xs font-bold mb-1">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Correction Sent
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-section pt-32 pb-20" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h1 className="text-5xl font-semibold text-slate-900 mb-6">Simple, transparent pricing</h1>
<p className="text-slate-500 text-lg">Choose the plan that fits your brand's AI maturity.</p>
<div className="mt-8 inline-flex items-center bg-white border border-slate-200 rounded-full p-1 relative">
<div className="w-24 py-2 rounded-full bg-slate-900 text-white text-sm font-medium text-center z-10 cursor-pointer transition-all">Monthly</div>
<div className="w-24 py-2 rounded-full text-slate-500 text-sm font-medium text-center z-10 cursor-pointer hover:text-slate-900 transition-all">Yearly</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="glass-card p-8 rounded-2xl flex flex-col">
<div className="mb-4">
<span className="text-sm font-bold text-violet-600 bg-violet-50 px-3 py-1 rounded-full uppercase tracking-wider">Starter</span>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold text-slate-900">$299</span>
<span className="text-slate-500">/mo</span>
</div>
<p className="text-slate-500 text-sm mb-8">Perfect for small brands starting their AEO journey.</p>
<button className="w-full py-3 border border-slate-200 rounded-xl font-medium text-slate-600 hover:border-slate-400 hover:text-slate-900 transition-all mb-8">Get Started</button>
<ul className="space-y-4 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Monitor 3 AI Models
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> 50 Keywords
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Weekly Reporting
                        </li>
</ul>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col relative border-violet-500 border-2 shadow-2xl shadow-violet-500/10">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-violet-600 text-white px-4 py-1 rounded-full text-xs font-medium">Most Popular</div>
<div className="mb-4">
<span className="text-sm font-bold text-violet-600 bg-violet-50 px-3 py-1 rounded-full uppercase tracking-wider">Growth</span>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold text-slate-900">$799</span>
<span className="text-slate-500">/mo</span>
</div>
<p className="text-slate-500 text-sm mb-8">For scaling companies dominating their niche.</p>
<button className="w-full py-3 bg-violet-600 rounded-xl font-medium text-white hover:bg-violet-700 transition-all mb-8 shadow-lg shadow-violet-500/25">Start Free Trial</button>
<ul className="space-y-4 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-violet-500 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon> Monitor All 12 AI Models
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-violet-500 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon> 500 Keywords
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-violet-500 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon> Real-time Alerts
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-violet-500 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon> Content Studio Access
                        </li>
</ul>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col">
<div className="mb-4">
<span className="text-sm font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">Enterprise</span>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold text-slate-900">Custom</span>
</div>
<p className="text-slate-500 text-sm mb-8">Full control for large organizations.</p>
<button className="w-full py-3 border border-slate-200 rounded-xl font-medium text-slate-600 hover:border-slate-400 hover:text-slate-900 transition-all mb-8">Contact Sales</button>
<ul className="space-y-4 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Unlimited Keywords
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> API Access
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Custom Integrations
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Dedicated Success Manager
                        </li>
</ul>
</div>
</div>
<div className="mt-20 max-w-4xl mx-auto">
<h3 className="text-xl font-semibold mb-6 text-center">Frequently Asked Questions</h3>
<div className="space-y-4">
<div className="glass-card p-6 rounded-xl cursor-pointer hover:bg-white/60">
<div className="flex justify-between items-center font-medium text-slate-800">
<span>How does this differ from traditional SEO tools?</span>
<iconify-icon className="text-slate-400" icon="solar:add-circle-linear"></iconify-icon>
</div>
</div>
<div className="glass-card p-6 rounded-xl cursor-pointer hover:bg-white/60">
<div className="flex justify-between items-center font-medium text-slate-800">
<span>Which AI models do you track?</span>
<iconify-icon className="text-slate-400" icon="solar:add-circle-linear"></iconify-icon>
</div>
</div>
<div className="glass-card p-6 rounded-xl cursor-pointer hover:bg-white/60">
<div className="flex justify-between items-center font-medium text-slate-800">
<span>Can I integrate with my existing CMS?</span>
<iconify-icon className="text-slate-400" icon="solar:add-circle-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-section pt-32 pb-20" id="team">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h1 className="text-5xl font-semibold text-slate-900 mb-6">Builders &amp; Researchers</h1>
<p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">We are a team of NLP engineers, data scientists, and SEO veterans on a mission to decode the black box of Generative AI.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">

<div className="group">
<div className="aspect-square rounded-2xl bg-slate-200 mb-4 overflow-hidden relative">

<div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<span className="text-4xl font-heading font-bold text-slate-400">ES</span>
</div>
</div>
<h3 className="text-lg font-semibold text-slate-900">Elena Smith</h3>
<p className="text-violet-600 text-sm mb-2">Co-Founder &amp; CEO</p>
<p className="text-slate-500 text-xs leading-relaxed">Ex-Google Search engineer. 10+ years in NLP research.</p>
<div className="flex gap-3 mt-3">
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="prime:twitter"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="prime:linkedin"></iconify-icon></a>
</div>
</div>

<div className="group">
<div className="aspect-square rounded-2xl bg-slate-200 mb-4 overflow-hidden relative">
<div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<span className="text-4xl font-heading font-bold text-slate-400">DJ</span>
</div>
</div>
<h3 className="text-lg font-semibold text-slate-900">David Jin</h3>
<p className="text-cyan-600 text-sm mb-2">CTO</p>
<p className="text-slate-500 text-xs leading-relaxed">PhD in Computer Vision. Previously lead AI at Stripe.</p>
<div className="flex gap-3 mt-3">
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="prime:twitter"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="prime:linkedin"></iconify-icon></a>
</div>
</div>

<div className="group">
<div className="aspect-square rounded-2xl bg-slate-200 mb-4 overflow-hidden relative">
<div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<span className="text-4xl font-heading font-bold text-slate-400">MK</span>
</div>
</div>
<h3 className="text-lg font-semibold text-slate-900">Maya Kapoor</h3>
<p className="text-orange-600 text-sm mb-2">Head of Product</p>
<p className="text-slate-500 text-xs leading-relaxed">Obsessed with UX for complex data tools.</p>
<div className="flex gap-3 mt-3">
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="prime:twitter"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="prime:linkedin"></iconify-icon></a>
</div>
</div>

<div className="group">
<div className="aspect-square rounded-2xl bg-slate-200 mb-4 overflow-hidden relative">
<div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<span className="text-4xl font-heading font-bold text-slate-400">AR</span>
</div>
</div>
<h3 className="text-lg font-semibold text-slate-900">Alex Ross</h3>
<p className="text-emerald-600 text-sm mb-2">Lead Researcher</p>
<p className="text-slate-500 text-xs leading-relaxed">Author of "Vector Search Optimization".</p>
<div className="flex gap-3 mt-3">
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="prime:twitter"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="prime:linkedin"></iconify-icon></a>
</div>
</div>
</div>
<div className="glass-card p-12 rounded-3xl text-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-violet-200 rounded-full blur-[80px] opacity-40 translate-x-1/2 -translate-y-1/2"></div>
<div className="relative z-10">
<h2 className="text-3xl font-semibold mb-4">Join the Mission</h2>
<p className="text-slate-500 max-w-lg mx-auto mb-8">We're always looking for brilliant minds to help us shape the future of information discovery. Remote-first, global impact.</p>
<button className="px-6 py-3 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors">View Open Roles</button>
</div>
</div>
</div>
</div>

<footer className="bg-white/50 backdrop-blur-md pt-16 pb-12 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-900" icon="solar:chart-square-linear" width="24"></iconify-icon>
<span className="font-heading font-semibold text-slate-900">RankVista AI</span>
</div>
<div className="flex gap-8 text-sm text-slate-500">
<button className="hover:text-violet-600" onclick="navigateTo('services')">Services</button>
<button className="hover:text-violet-600" onclick="navigateTo('pricing')">Pricing</button>
<button className="hover:text-violet-600" onclick="navigateTo('team')">Team</button>
<a className="hover:text-violet-600" href="#">Privacy</a>
</div>
<div className="text-xs text-slate-400">
                    © 2024 RankVista AI.
                </div>
</div>
</div>
</footer>


    </>
  );
}
