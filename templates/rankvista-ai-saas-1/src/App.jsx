import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Single Page Routing Logic
        function route(pageId) {
            // Hide all sections
            document.querySelectorAll('main > section').forEach(el => {
                el.classList.remove('show-section');
                el.classList.add('hide-section');
            });
            
            // Show target section
            const target = document.getElementById(pageId);
            if(target) {
                target.classList.remove('hide-section');
                target.classList.add('show-section');
                window.scrollTo(0,0);
            }
        }

        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('translate-x-full')) {
                menu.classList.remove('translate-x-full');
            } else {
                menu.classList.add('translate-x-full');
            }
        }

        // Sticky Nav Logic
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('main-nav');
            if (window.scrollY > 50) {
                nav.classList.add('glass-nav');
                nav.classList.remove('bg-transparent', 'py-4');
                nav.classList.add('py-2');
            } else {
                nav.classList.remove('glass-nav', 'py-2');
                nav.classList.add('bg-transparent', 'py-4');
            }
        });

        // Initialize Home
        route('home');
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed w-full top-0 z-50 transition-all duration-300 bg-transparent py-4" id="main-nav">
<div className="max-w-7xl mx-auto px-6">
<nav className="flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#" onclick="route('home')">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-white font-bold text-lg tracking-tighter">R</div>
<span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">RANKVISTA</span>
</a>

<div className="hidden lg:flex items-center gap-8">
<button className="text-sm font-medium text-slate-300 hover:text-white transition-colors" onclick="route('services')">Services</button>
<button className="text-sm font-medium text-slate-300 hover:text-white transition-colors" onclick="route('pricing')">Pricing</button>
<button className="text-sm font-medium text-slate-300 hover:text-white transition-colors" onclick="route('team')">Team</button>
<button className="text-sm font-medium text-slate-300 hover:text-white transition-colors" onclick="route('blog')">Blog</button>
<button className="text-sm font-medium text-slate-300 hover:text-white transition-colors" onclick="route('contact')">Contact</button>
</div>

<div className="hidden lg:flex items-center gap-4">
<button className="text-sm font-medium text-white hover:text-cyan-400">Log In</button>
<button className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]" onclick="route('contact')">
                        Get Demo
                    </button>
</div>

<button className="lg:hidden text-white text-2xl" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</nav>
</div>
</header>

<div className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-xl transform translate-x-full transition-transform duration-300 flex flex-col items-center justify-center space-y-8 lg:hidden" id="mobile-menu">
<button className="absolute top-6 right-6 text-white text-3xl" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon>
</button>
<a className="text-2xl font-medium text-white" onclick="route('home'); toggleMobileMenu()">Home</a>
<a className="text-2xl font-medium text-white" onclick="route('services'); toggleMobileMenu()">Services</a>
<a className="text-2xl font-medium text-white" onclick="route('pricing'); toggleMobileMenu()">Pricing</a>
<a className="text-2xl font-medium text-white" onclick="route('team'); toggleMobileMenu()">Team</a>
<a className="text-2xl font-medium text-white" onclick="route('blog'); toggleMobileMenu()">Blog</a>
<a className="text-2xl font-medium text-white" onclick="route('contact'); toggleMobileMenu()">Contact</a>
</div>

<main className="relative min-h-screen pt-24">

<section className="show-section" id="home">

<div className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 mesh-bg opacity-30 pointer-events-none"></div>
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px]"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-mono-data tracking-wide">
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            NEW: PROMPT INTELLIGENCE ENGINE V2.0
                        </div>
<h1 className="text-5xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-white">
                            Dominate AI Search. <br/>
<span className="text-gradient">Own Your Narrative.</span>
</h1>
<p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                            RankVista is the first enterprise platform designed to optimize your brand visibility across LLMs like ChatGPT, Claude, and Gemini. Stop guessing, start ranking.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-8 py-4 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all flex items-center justify-center gap-2 group" onclick="route('pricing')">
                                Start Free Trial
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="px-8 py-4 text-sm font-semibold text-white glass-panel hover:bg-slate-800 rounded-lg transition-all flex items-center justify-center gap-2">
<iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon>
                                Watch 2-min Demo
                            </button>
</div>
<div className="pt-8 border-t border-slate-800">
<p className="text-xs text-slate-500 mb-4 font-mono-data">TRUSTED BY INNOVATORS AT</p>
<div className="flex gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<h3 className="text-xl font-bold font-cabinet tracking-tighter">ACME</h3>
<h3 className="text-xl font-bold font-cabinet tracking-tighter">VERCEL</h3>
<h3 className="text-xl font-bold font-cabinet tracking-tighter">STRIPE</h3>
<h3 className="text-xl font-bold font-cabinet tracking-tighter">LINEAR</h3>
</div>
</div>
</div>

<div className="relative hidden lg:block h-[600px] flex items-center justify-center">
<div className="iso-container w-full max-w-lg glass-panel rounded-2xl p-6 shadow-2xl shadow-blue-900/20 border border-slate-700/50">

<div className="flex items-center justify-between mb-6 border-b border-slate-700 pb-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="text-xs text-slate-400 font-mono-data">dashboard.rankvista.ai</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-6">
<div className="glass-panel p-4 rounded-lg bg-slate-900/50">
<div className="text-xs text-slate-400 mb-2">Answer Engine Share</div>
<div className="text-2xl font-bold text-white mb-2">64.2%</div>
<div className="h-1 bg-slate-700 rounded-full overflow-hidden">
<div className="h-full w-[64%] bg-blue-500"></div>
</div>
</div>
<div className="glass-panel p-4 rounded-lg bg-slate-900/50">
<div className="text-xs text-slate-400 mb-2">Sentiment Score</div>
<div className="text-2xl font-bold text-emerald-400 mb-2">+8.4</div>
<div className="h-1 bg-slate-700 rounded-full overflow-hidden">
<div className="h-full w-[88%] bg-emerald-500"></div>
</div>
</div>
</div>

<div className="glass-panel p-4 rounded-lg bg-slate-900/50 h-48 flex items-end justify-between gap-2">
<div className="w-full bg-blue-500/20 h-[40%] rounded-t-sm relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 px-1 rounded">40%</div></div>
<div className="w-full bg-blue-500/40 h-[60%] rounded-t-sm relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 px-1 rounded">60%</div></div>
<div className="w-full bg-blue-500/60 h-[50%] rounded-t-sm relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 px-1 rounded">50%</div></div>
<div className="w-full bg-blue-500/80 h-[85%] rounded-t-sm relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 px-1 rounded">85%</div></div>
<div className="w-full bg-cyan-400 h-[75%] rounded-t-sm relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 px-1 rounded">75%</div></div>
</div>
</div>

<div className="absolute -right-10 top-20 glass-panel p-4 rounded-xl animate-float shadow-xl border-l-4 border-l-purple-500">
<div className="flex items-center gap-3">
<iconify-icon className="text-purple-400 text-2xl" icon="solar:chat-square-check-linear"></iconify-icon>
<div>
<div className="text-xs text-slate-400">ChatGPT Mention</div>
<div className="text-sm font-semibold">Rank #1 for "Enterprise SEO"</div>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="border-y border-slate-800 bg-slate-900/50 backdrop-blur-sm py-12">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold text-white font-mono-data mb-2">2.4B</div>
<div className="text-sm text-slate-400">Queries Analyzed</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold text-white font-mono-data mb-2">847%</div>
<div className="text-sm text-slate-400">Avg. Traffic Increase</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold text-white font-mono-data mb-2">150+</div>
<div className="text-sm text-slate-400">Enterprise Clients</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold text-white font-mono-data mb-2">12ms</div>
<div className="text-sm text-slate-400">Real-time Latency</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 space-y-24">

<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative group">
<div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
<div className="relative glass-panel rounded-2xl p-8 border border-slate-700 h-96 flex flex-col justify-center">

<div className="space-y-4">
<div className="flex justify-between text-sm text-slate-300">
<span>Brand Sentiment</span>
<span className="text-emerald-400">+24%</span>
</div>
<div className="h-2 bg-slate-800 rounded-full"><div className="h-full w-[75%] bg-blue-500 rounded-full"></div></div>
<div className="flex justify-between text-sm text-slate-300">
<span>Citation Frequency</span>
<span className="text-emerald-400">+12%</span>
</div>
<div className="h-2 bg-slate-800 rounded-full"><div className="h-full w-[60%] bg-indigo-500 rounded-full"></div></div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 space-y-6">
<iconify-icon className="text-5xl text-blue-500" icon="solar:chart-2-bold-duotone"></iconify-icon>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Answer Engine Intelligence</h2>
<p className="text-slate-400 leading-relaxed">Stop flying blind. Our proprietary crawler monitors mentions of your brand across ChatGPT, Perplexity, Gemini, and 12 other major LLMs in real-time.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Sentiment Analysis
                            </li>
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Citation Tracking
                            </li>
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Competitor Share of Voice
                            </li>
</ul>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<iconify-icon className="text-5xl text-cyan-400" icon="solar:magic-stick-3-bold-duotone"></iconify-icon>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Content Studio AI</h2>
<p className="text-slate-400 leading-relaxed">Generate content specifically engineered to be cited by LLMs. Our algorithms analyze training data patterns to suggest structure, syntax, and entities that maximize inclusion.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear"></iconify-icon> Entity Graph Optimization
                            </li>
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear"></iconify-icon> Predictive Schema
                            </li>
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear"></iconify-icon> 75+ Validated Templates
                            </li>
</ul>
</div>
<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
<div className="relative glass-panel rounded-2xl p-8 border border-slate-700 h-96 flex items-center justify-center">
<div className="w-full space-y-3">
<div className="h-4 bg-slate-700/50 rounded w-3/4 animate-pulse"></div>
<div className="h-4 bg-slate-700/50 rounded w-full animate-pulse"></div>
<div className="h-4 bg-slate-700/50 rounded w-5/6 animate-pulse"></div>
<div className="mt-6 p-4 bg-slate-800/50 rounded border border-cyan-500/30">
<div className="text-xs text-cyan-400 mb-1">AI Suggestion</div>
<div className="text-sm text-slate-300">"Add structured data for 'Pricing Tier' to increase Gemini visibility by 14%."</div>
</div>
</div>
</div>
</div>
</div>
</section>
</section>

<section className="hide-section" id="services">
<div className="py-20 bg-slate-900 border-b border-slate-800">
<div className="max-w-7xl mx-auto px-6 text-center">
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6">Comprehensive AEO Solutions</h1>
<p className="text-lg text-slate-400 max-w-2xl mx-auto">We don't just optimize for search engines; we optimize for the answers engines provide. Explore our suite of enterprise tools.</p>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="glass-panel p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all group">
<div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Answer Engine Intelligence</h3>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">Real-time tracking of your brand across ChatGPT, Claude, and Bing Chat with 12-month historical data retention.</p>
<ul className="space-y-2 mb-6">
<li className="text-xs text-slate-300 flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"></div> Sentiment Analysis</li>
<li className="text-xs text-slate-300 flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"></div> Competitor Gaps</li>
<li className="text-xs text-slate-300 flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"></div> Alert System</li>
</ul>
<a className="text-blue-400 text-sm font-medium hover:text-blue-300 flex items-center gap-1" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="glass-panel p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all group">
<div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Content Studio</h3>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">AI writing assistant trained on top-ranking result patterns. 75+ templates optimized for NLP recognition.</p>
<ul className="space-y-2 mb-6">
<li className="text-xs text-slate-300 flex items-center gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full"></div> Workflow Automation</li>
<li className="text-xs text-slate-300 flex items-center gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full"></div> CMS Integrations</li>
<li className="text-xs text-slate-300 flex items-center gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full"></div> A/B Testing</li>
</ul>
<a className="text-purple-400 text-sm font-medium hover:text-purple-300 flex items-center gap-1" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="glass-panel p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all group">
<div className="w-12 h-12 bg-cyan-900/30 rounded-lg flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:database-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Crawler Analytics</h3>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">Deep technical audits ensuring your site is accessible to AI bots (GPTBot, CCBot) and properly structured.</p>
<ul className="space-y-2 mb-6">
<li className="text-xs text-slate-300 flex items-center gap-2"><div className="w-1 h-1 bg-cyan-500 rounded-full"></div> Bot Monitoring</li>
<li className="text-xs text-slate-300 flex items-center gap-2"><div className="w-1 h-1 bg-cyan-500 rounded-full"></div> Schema Validation</li>
<li className="text-xs text-slate-300 flex items-center gap-2"><div className="w-1 h-1 bg-cyan-500 rounded-full"></div> Traffic Attribution</li>
</ul>
<a className="text-cyan-400 text-sm font-medium hover:text-cyan-300 flex items-center gap-1" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>

<div className="max-w-5xl mx-auto px-6 pb-24">
<h3 className="text-2xl font-semibold text-white mb-8 text-center">RankVista vs. Traditional SEO</h3>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-slate-700">
<th className="p-4 text-slate-400 font-medium">Feature</th>
<th className="p-4 text-white font-semibold bg-slate-800/50">RankVista AEO</th>
<th className="p-4 text-slate-500 font-medium">Traditional SEO</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-slate-800">
<td className="p-4 text-slate-300">Target Audience</td>
<td className="p-4 text-blue-400 bg-slate-800/30">Large Language Models (AI)</td>
<td className="p-4 text-slate-500">Search Engine Crawlers</td>
</tr>
<tr className="border-b border-slate-800">
<td className="p-4 text-slate-300">Primary Metric</td>
<td className="p-4 text-blue-400 bg-slate-800/30">Citation &amp; Sentiment</td>
<td className="p-4 text-slate-500">Clicks &amp; Rankings</td>
</tr>
<tr className="border-b border-slate-800">
<td className="p-4 text-slate-300">Content Structure</td>
<td className="p-4 text-blue-400 bg-slate-800/30">Entity-Relationship Focused</td>
<td className="p-4 text-slate-500">Keyword Density Focused</td>
</tr>
<tr className="border-b border-slate-800">
<td className="p-4 text-slate-300">Data Source</td>
<td className="p-4 text-blue-400 bg-slate-800/30">Generative Output Analysis</td>
<td className="p-4 text-slate-500">SERP Scraping</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="hide-section" id="team">
<div className="relative py-24 bg-slate-900 overflow-hidden">
<div className="absolute inset-0 mesh-bg opacity-10"></div>
<div className="max-w-4xl mx-auto text-center px-6 relative z-10">
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6">Meet the Minds Behind RankVista</h1>
<p className="text-lg text-slate-400">Our mission is to help brands reclaim their narrative in the age of Artificial Intelligence.</p>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 py-20">
<h2 className="text-2xl font-semibold text-white mb-12">Leadership</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="glass-panel p-6 rounded-xl border border-slate-800">
<div className="w-24 h-24 rounded-full bg-slate-700 mb-6 mx-auto overflow-hidden grayscale hover:grayscale-0 transition-all">

<div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-500"></div>
</div>
<h3 className="text-lg font-semibold text-white text-center">Sarah Jenkins</h3>
<p className="text-blue-500 text-xs text-center font-mono-data mb-4">CEO &amp; CO-FOUNDER</p>
<p className="text-sm text-slate-400 text-center">Ex-Google Search Engineer. Pioneer in NLP optimization.</p>
<div className="flex justify-center gap-3 mt-4">
<iconify-icon className="text-slate-500 hover:text-white cursor-pointer" icon="solar:link-circle-linear"></iconify-icon>
</div>
</div>

<div className="glass-panel p-6 rounded-xl border border-slate-800">
<div className="w-24 h-24 rounded-full bg-slate-700 mb-6 mx-auto overflow-hidden grayscale hover:grayscale-0 transition-all">
<div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-500"></div>
</div>
<h3 className="text-lg font-semibold text-white text-center">David Chen</h3>
<p className="text-blue-500 text-xs text-center font-mono-data mb-4">CTO</p>
<p className="text-sm text-slate-400 text-center">PhD in Machine Learning from MIT. 15 patents in AI.</p>
<div className="flex justify-center gap-3 mt-4">
<iconify-icon className="text-slate-500 hover:text-white cursor-pointer" icon="solar:link-circle-linear"></iconify-icon>
</div>
</div>

<div className="glass-panel p-6 rounded-xl border border-slate-800">
<div className="w-24 h-24 rounded-full bg-slate-700 mb-6 mx-auto overflow-hidden grayscale hover:grayscale-0 transition-all">
<div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-500"></div>
</div>
<h3 className="text-lg font-semibold text-white text-center">Elena Rodriguez</h3>
<p className="text-blue-500 text-xs text-center font-mono-data mb-4">VP PRODUCT</p>
<p className="text-sm text-slate-400 text-center">Former Product Lead at OpenAI. Focus on UX/AI.</p>
<div className="flex justify-center gap-3 mt-4">
<iconify-icon className="text-slate-500 hover:text-white cursor-pointer" icon="solar:link-circle-linear"></iconify-icon>
</div>
</div>

<div className="glass-panel p-6 rounded-xl border border-slate-800">
<div className="w-24 h-24 rounded-full bg-slate-700 mb-6 mx-auto overflow-hidden grayscale hover:grayscale-0 transition-all">
<div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-500"></div>
</div>
<h3 className="text-lg font-semibold text-white text-center">Marcus Thorne</h3>
<p className="text-blue-500 text-xs text-center font-mono-data mb-4">CMO</p>
<p className="text-sm text-slate-400 text-center">20 years in Enterprise SaaS Marketing.</p>
<div className="flex justify-center gap-3 mt-4">
<iconify-icon className="text-slate-500 hover:text-white cursor-pointer" icon="solar:link-circle-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="border-t border-slate-800 bg-slate-900/50 py-16">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-8">
<div>
<div className="text-4xl font-bold text-white font-mono-data">2022</div>
<div className="text-sm text-slate-500 uppercase tracking-wide">Founded</div>
</div>
<div>
<div className="text-4xl font-bold text-white font-mono-data">85</div>
<div className="text-sm text-slate-500 uppercase tracking-wide">Employees</div>
</div>
<div>
<div className="text-4xl font-bold text-white font-mono-data">$45M</div>
<div className="text-sm text-slate-500 uppercase tracking-wide">Raised</div>
</div>
<div>
<div className="text-4xl font-bold text-white font-mono-data">156</div>
<div className="text-sm text-slate-500 uppercase tracking-wide">Countries</div>
</div>
</div>
</div>
</section>

<section className="hide-section" id="pricing">
<div className="py-20 text-center max-w-7xl mx-auto px-6">
<h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Choose the Perfect Plan</h1>
<p className="text-slate-400 mb-10">Transparent pricing for brands of all sizes.</p>

<div className="inline-flex items-center gap-4 bg-slate-800 p-1 rounded-full mb-16 border border-slate-700">
<button className="px-6 py-2 rounded-full bg-blue-600 text-white text-sm font-medium shadow-lg">Monthly</button>
<button className="px-6 py-2 rounded-full text-slate-400 text-sm font-medium hover:text-white">Annually <span className="text-xs text-green-400 ml-1">-20%</span></button>
</div>
<div className="grid lg:grid-cols-3 gap-8 text-left">

<div className="glass-panel p-8 rounded-2xl border border-slate-800">
<div className="text-lg font-semibold text-white mb-2">Starter</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold text-white">$299</span>
<span className="text-slate-500">/mo</span>
</div>
<p className="text-sm text-slate-400 mb-8">Essential tools for emerging brands.</p>
<button className="w-full py-3 border border-slate-600 text-white rounded-lg hover:bg-slate-800 transition-colors mb-8 text-sm font-semibold">Get Started</button>
<ul className="space-y-4 text-sm text-slate-300">
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> 50 Keywords</li>
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> 5 Competitors</li>
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Basic Dashboard</li>
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Email Support</li>
</ul>
</div>

<div className="glass-panel p-8 rounded-2xl border-2 border-blue-600 relative overflow-hidden">
<div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
<div className="text-lg font-semibold text-white mb-2">Professional</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold text-white">$799</span>
<span className="text-slate-500">/mo</span>
</div>
<p className="text-sm text-slate-400 mb-8">For data-driven marketing teams.</p>
<button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mb-8 text-sm font-semibold shadow-lg shadow-blue-900/50">Start Free Trial</button>
<ul className="space-y-4 text-sm text-slate-300">
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> 200 Keywords</li>
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> 15 Competitors</li>
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Crawler Analytics</li>
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Priority Support</li>
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> API Access (Limited)</li>
</ul>
</div>

<div className="glass-panel p-8 rounded-2xl border border-slate-800">
<div className="text-lg font-semibold text-white mb-2">Enterprise</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold text-white">Custom</span>
</div>
<p className="text-sm text-slate-400 mb-8">Unlimited power for global organizations.</p>
<button className="w-full py-3 border border-slate-600 text-white rounded-lg hover:bg-slate-800 transition-colors mb-8 text-sm font-semibold" onclick="route('contact')">Contact Sales</button>
<ul className="space-y-4 text-sm text-slate-300">
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Unlimited Tracking</li>
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Custom Workflows</li>
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> White-label Reports</li>
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> 24/7 Dedicated Support</li>
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> SSO &amp; Security Review</li>
</ul>
</div>
</div>
</div>
</section>

<section className="hide-section" id="contact">
<div className="max-w-7xl mx-auto px-6 py-20">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<h1 className="text-4xl font-semibold text-white mb-2">Get in Touch</h1>
<p className="text-slate-400 mb-8">Fill out the form below and our team will get back to you within 2 business hours.</p>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div>
<label className="block text-sm text-slate-400 mb-2">First Name</label>
<input className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="text"/>
</div>
<div>
<label className="block text-sm text-slate-400 mb-2">Last Name</label>
<input className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="text"/>
</div>
</div>
<div>
<label className="block text-sm text-slate-400 mb-2">Work Email</label>
<input className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="email"/>
</div>
<div>
<label className="block text-sm text-slate-400 mb-2">Company Size</label>
<select className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all">
<option>1-50 employees</option>
<option>51-200 employees</option>
<option>201-1000 employees</option>
<option>1000+ employees</option>
</select>
</div>
<div>
<label className="block text-sm text-slate-400 mb-2">Message</label>
<textarea className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" rows="4"></textarea>
</div>
<button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-900/40" type="button">
                                Send Message
                            </button>
</form>
</div>

<div className="space-y-10">
<div className="glass-panel p-8 rounded-2xl border border-slate-800">
<h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
<div className="space-y-4">
<div className="flex items-start gap-4">
<iconify-icon className="text-blue-500 text-xl mt-1" icon="solar:letter-linear"></iconify-icon>
<div>
<div className="text-sm font-medium text-white">Email</div>
<div className="text-sm text-slate-400">sales@rankvista.ai</div>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-blue-500 text-xl mt-1" icon="solar:phone-linear"></iconify-icon>
<div>
<div className="text-sm font-medium text-white">Phone</div>
<div className="text-sm text-slate-400">+1 (555) 123-4567</div>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-blue-500 text-xl mt-1" icon="solar:map-point-linear"></iconify-icon>
<div>
<div className="text-sm font-medium text-white">Headquarters</div>
<div className="text-sm text-slate-400">100 Market St, Suite 400<br/>San Francisco, CA 94103</div>
</div>
</div>
</div>
</div>

<div className="w-full h-64 bg-slate-800 rounded-2xl overflow-hidden relative grayscale opacity-75 hover:opacity-100 transition-opacity">
<div className="absolute inset-0 flex items-center justify-center text-slate-500 bg-slate-800">
                                [Google Map Integration]
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="hide-section" id="blog">
<div className="py-20 bg-slate-900 border-b border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<span className="text-blue-500 font-mono-data text-xs mb-2 block">LATEST INSIGHTS</span>
<h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-8">RankVista Intelligence</h1>

<div className="relative group cursor-pointer overflow-hidden rounded-2xl">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-10"></div>
<div className="h-96 w-full bg-slate-800 relative">

<div className="w-full h-full bg-gradient-to-r from-blue-900 to-indigo-900"></div>
</div>
<div className="absolute bottom-0 left-0 p-8 z-20 max-w-2xl">
<div className="flex items-center gap-3 mb-4">
<span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-medium">Strategy</span>
<span className="text-slate-300 text-sm">Oct 24, 2023</span>
</div>
<h2 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">The Future of Search: Why AEO is Replacing SEO for Enterprise Brands</h2>
<p className="text-slate-300 mb-6 line-clamp-2">As Large Language Models become the primary interface for information retrieval, traditional keyword strategies are failing. Here is the new playbook.</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-600"></div>
<span className="text-sm text-white font-medium">Sarah Jenkins</span>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 py-20">
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="h-48 bg-slate-800 rounded-xl mb-4 overflow-hidden">
<div className="w-full h-full bg-slate-700 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<div className="flex items-center gap-2 mb-3">
<span className="text-cyan-400 text-xs font-bold uppercase">Technical</span>
<span className="text-slate-500 text-xs">• 5 min read</span>
</div>
<h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">Schema Markup for LLMs</h3>
<p className="text-slate-400 text-sm line-clamp-3">How to structure your JSON-LD to ensure ChatGPT and Claude can parse your product pricing accurately.</p>
</article>

<article className="group cursor-pointer">
<div className="h-48 bg-slate-800 rounded-xl mb-4 overflow-hidden">
<div className="w-full h-full bg-slate-700 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<div className="flex items-center gap-2 mb-3">
<span className="text-purple-400 text-xs font-bold uppercase">Case Study</span>
<span className="text-slate-500 text-xs">• 8 min read</span>
</div>
<h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">FinTech Growth: +400% Visibility</h3>
<p className="text-slate-400 text-sm line-clamp-3">See how Stripe integrated AEO principles to dominate answer engine results for payment processing queries.</p>
</article>

<article className="group cursor-pointer">
<div className="h-48 bg-slate-800 rounded-xl mb-4 overflow-hidden">
<div className="w-full h-full bg-slate-700 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<div className="flex items-center gap-2 mb-3">
<span className="text-green-400 text-xs font-bold uppercase">Update</span>
<span className="text-slate-500 text-xs">• 3 min read</span>
</div>
<h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">Google SGE vs. Bing Chat</h3>
<p className="text-slate-400 text-sm line-clamp-3">A comparative analysis of the traffic drivers in the new era of generative search experiences.</p>
</article>
</div>
</div>
</section>
</main>

<footer className="bg-slate-950 border-t border-slate-800 pt-20 pb-10 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white text-xs font-bold">R</div>
<span className="text-lg font-bold text-white tracking-tight">RANKVISTA</span>
</div>
<p className="text-slate-400 mb-6 max-w-sm">The enterprise operating system for the Answer Engine Optimization era. Built for data-driven brands.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:brand-twitter-linear"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:brand-linkedin-linear"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:brand-github-linear"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Platform</h4>
<ul className="space-y-4">
<li><a className="text-slate-400 hover:text-blue-400 transition-colors" href="#">Intelligence</a></li>
<li><a className="text-slate-400 hover:text-blue-400 transition-colors" href="#">Content Studio</a></li>
<li><a className="text-slate-400 hover:text-blue-400 transition-colors" href="#">Crawler</a></li>
<li><a className="text-slate-400 hover:text-blue-400 transition-colors" href="#">Integrations</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Company</h4>
<ul className="space-y-4">
<li><a className="text-slate-400 hover:text-blue-400 transition-colors" href="#" onclick="route('team')">About</a></li>
<li><a className="text-slate-400 hover:text-blue-400 transition-colors" href="#">Careers</a> <span className="text-xs bg-blue-900 text-blue-300 px-1.5 py-0.5 rounded ml-1">Hiring</span></li>
<li><a className="text-slate-400 hover:text-blue-400 transition-colors" href="#">Press</a></li>
<li><a className="text-slate-400 hover:text-blue-400 transition-colors" href="#" onclick="route('contact')">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Legal</h4>
<ul className="space-y-4">
<li><a className="text-slate-400 hover:text-blue-400 transition-colors" href="#">Privacy</a></li>
<li><a className="text-slate-400 hover:text-blue-400 transition-colors" href="#">Terms</a></li>
<li><a className="text-slate-400 hover:text-blue-400 transition-colors" href="#">Security</a></li>
<li><a className="text-slate-400 hover:text-blue-400 transition-colors" href="#">GDPR</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-slate-500">
                    © 2024 RankVista Inc. All rights reserved.
                </div>
<div className="flex gap-6 items-center">
<div className="flex items-center gap-2 text-slate-500 text-xs">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:shield-check-linear"></iconify-icon> SOC2 Type II Compliant
                    </div>
<div className="flex items-center gap-2 text-slate-500 text-xs">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:server-square-linear"></iconify-icon> 99.9% Uptime
                    </div>
</div>
</div>
</div>
</footer>



    </>
  );
}
