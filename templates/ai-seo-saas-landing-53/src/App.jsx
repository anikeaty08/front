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



        function showPage(pageId) {
            // Hide all sections
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
            });
            // Show selected section
            const target = document.getElementById(pageId);
            if(target) {
                target.classList.add('active');
                window.scrollTo(0, 0);
            }
        }
    
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
      

<nav className="fixed top-0 w-full z-50 glass">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center gap-2 cursor-pointer" onclick="showPage('home')">
<div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:chart-square-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">RankVista</span>
</div>
<div className="hidden md:flex space-x-8">
<button className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors" onclick="showPage('services')">Services</button>
<button className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors" onclick="showPage('team')">Team</button>
<button className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors" onclick="showPage('pricing')">Pricing</button>
<button className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors" onclick="showPage('blog')">Blog</button>
<button className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors" onclick="showPage('contact')">Contact</button>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-slate-600 hover:text-slate-900 hidden sm:block">Log in</button>
<button className="bg-slate-900 text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20" onclick="showPage('pricing')">Start Free Trial</button>
</div>
</div>
</div>
</nav>

<main className="pt-16 min-h-screen">

<section className="page-section active" id="home">

<div className="relative overflow-hidden pt-20 pb-24 lg:pt-32">
<div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-medium mb-8">
<span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
                        New: Claude 3.5 Optimization Engine
                    </div>
<h1 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight mb-6 text-balance">
                        Get Your Brand <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Discovered by AI</span>
</h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                        The world's first AEO platform. We optimize your digital footprint for the next generation of search engines: ChatGPT, Perplexity, and Gemini.
                    </p>

<div className="max-w-md mx-auto mb-16 relative z-10">
<form className="flex gap-2 p-1.5 bg-white rounded-full shadow-xl shadow-indigo-100 border border-slate-200">
<div className="pl-4 flex items-center flex-1">
<iconify-icon className="text-slate-400 mr-2" icon="solar:global-linear"></iconify-icon>
<input className="w-full text-sm outline-none text-slate-700 placeholder-slate-400" placeholder="Enter your website URL" type="text"/>
</div>
<button className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors" type="button">
                                Analyze
                            </button>
</form>
<p className="text-center text-xs text-slate-400 mt-3">Free 14-day analysis. No credit card required.</p>
</div>

<div className="relative mx-auto max-w-5xl rounded-xl bg-slate-900 p-2 shadow-2xl shadow-indigo-500/20 animate-float border border-slate-800">
<div className="rounded-lg bg-slate-950 overflow-hidden border border-slate-800">
<div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/50">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
</div>
<div className="ml-4 flex-1 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 rounded-md text-xs text-slate-400 font-mono">rankvista.ai/dashboard/overview</div>
</div>
</div>

<div className="grid grid-cols-12 h-[400px] md:h-[500px]">

<div className="hidden md:block col-span-2 border-r border-slate-800 p-4 space-y-4">
<div className="h-2 w-20 bg-slate-800 rounded mb-6"></div>
<div className="space-y-3">
<div className="h-8 w-full bg-indigo-500/10 border border-indigo-500/20 rounded flex items-center px-3"><div className="h-2 w-16 bg-indigo-500 rounded"></div></div>
<div className="h-8 w-full rounded flex items-center px-3"><div className="h-2 w-12 bg-slate-800 rounded"></div></div>
<div className="h-8 w-full rounded flex items-center px-3"><div className="h-2 w-14 bg-slate-800 rounded"></div></div>
</div>
</div>

<div className="col-span-12 md:col-span-10 p-6 bg-slate-950 grid-bg">
<div className="grid grid-cols-3 gap-4 mb-6">
<div className="bg-slate-900/80 p-4 rounded-lg border border-slate-800">
<div className="text-xs text-slate-500 mb-2">Share of Voice (AI)</div>
<div className="text-2xl text-white font-medium">42.8% <span className="text-xs text-emerald-500">+12%</span></div>
</div>
<div className="bg-slate-900/80 p-4 rounded-lg border border-slate-800">
<div className="text-xs text-slate-500 mb-2">Prompt Mentions</div>
<div className="text-2xl text-white font-medium">1,204 <span className="text-xs text-emerald-500">+8%</span></div>
</div>
<div className="bg-slate-900/80 p-4 rounded-lg border border-slate-800">
<div className="text-xs text-slate-500 mb-2">Brand Sentiment</div>
<div className="text-2xl text-white font-medium">Positive</div>
</div>
</div>
<div className="bg-slate-900/80 p-4 rounded-lg border border-slate-800 h-64 flex items-end justify-between px-8 pb-4 gap-2">

<div className="w-full bg-indigo-500/20 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-indigo-500/30 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-indigo-500/40 rounded-t-sm h-[45%]"></div>
<div className="w-full bg-indigo-500/50 rounded-t-sm h-[75%]"></div>
<div className="w-full bg-indigo-500/60 rounded-t-sm h-[55%]"></div>
<div className="w-full bg-indigo-500/80 rounded-t-sm h-[85%]"></div>
<div className="w-full bg-indigo-500 rounded-t-sm h-[95%] relative group cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">Nov 14</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-y border-slate-200 bg-white py-10 overflow-hidden">
<p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">Optimizing for</p>
<div className="relative w-full overflow-hidden">
<div className="animate-marquee flex gap-12 items-center whitespace-nowrap min-w-full px-4">
<span className="text-xl font-semibold text-slate-400 flex items-center gap-2"><iconify-icon icon="solar:cpu-linear"></iconify-icon> OpenAI ChatGPT</span>
<span className="text-xl font-semibold text-slate-400 flex items-center gap-2"><iconify-icon icon="solar:stars-linear"></iconify-icon> Google Gemini</span>
<span className="text-xl font-semibold text-slate-400 flex items-center gap-2"><iconify-icon icon="solar:magnifer-linear"></iconify-icon> Perplexity</span>
<span className="text-xl font-semibold text-slate-400 flex items-center gap-2"><iconify-icon icon="solar:chat-round-linear"></iconify-icon> Anthropic Claude</span>
<span className="text-xl font-semibold text-slate-400 flex items-center gap-2"><iconify-icon icon="solar:shop-linear"></iconify-icon> Amazon Rufus</span>

<span className="text-xl font-semibold text-slate-400 flex items-center gap-2"><iconify-icon icon="solar:cpu-linear"></iconify-icon> OpenAI ChatGPT</span>
<span className="text-xl font-semibold text-slate-400 flex items-center gap-2"><iconify-icon icon="solar:stars-linear"></iconify-icon> Google Gemini</span>
<span className="text-xl font-semibold text-slate-400 flex items-center gap-2"><iconify-icon icon="solar:magnifer-linear"></iconify-icon> Perplexity</span>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="col-span-1 lg:col-span-2 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="h-10 w-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">AI Visibility Tracking</h3>
<p className="text-slate-500 text-sm leading-relaxed">Measure how often your brand appears in LLM responses. We reverse-engineer the "black box" of AI answers to give you actionable visibility metrics.</p>
</div>
<div className="bg-indigo-600 text-white p-8 rounded-2xl shadow-lg shadow-indigo-200">
<div className="h-10 w-10 bg-white/20 rounded-lg flex items-center justify-center mb-4">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2">Content Optimization</h3>
<p className="text-indigo-100 text-sm leading-relaxed">Rewrite your content to be "machine-readable" and highly citeable by Large Language Models.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="h-10 w-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-4">
<iconify-icon icon="solar:chat-square-code-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Prompt Analytics</h3>
<p className="text-slate-500 text-xs">Discover the exact prompts users are asking that relate to your industry.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="h-10 w-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center mb-4">
<iconify-icon icon="solar:bug-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Crawler Insights</h3>
<p className="text-slate-500 text-xs">Monitor when AI bots scrape your site and how they interpret your data schema.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="h-10 w-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-4">
<iconify-icon icon="solar:bag-heart-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Shopping Graph</h3>
<p className="text-slate-500 text-xs">Ensure your products are recommended in AI-driven shopping assistants.</p>
</div>
</div>
</div>

<div className="bg-slate-900 py-24 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<div className="text-indigo-400 font-mono text-xs mb-4">CASE STUDY: FINTECH</div>
<h2 className="text-3xl font-semibold mb-6 tracking-tight">How NeoBank increased ChatGPT referrals by 400%</h2>
<p className="text-slate-400 mb-8 font-light">By structuring their knowledge base for LLM retrieval, NeoBank became the #1 recommended banking app for "best student accounts" queries on AI platforms.</p>
<div className="flex gap-8 border-t border-slate-800 pt-8">
<div>
<div className="text-3xl font-semibold text-indigo-400">4x</div>
<div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Referral Traffic</div>
</div>
<div>
<div className="text-3xl font-semibold text-indigo-400">85%</div>
<div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Brand Sentiment</div>
</div>
<div>
<div className="text-3xl font-semibold text-indigo-400">2.1k</div>
<div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Citations</div>
</div>
</div>
</div>
<div className="relative bg-slate-800 rounded-xl p-6 border border-slate-700">

<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-sm text-slate-400">Before RankVista</span>
<span className="text-sm text-rose-400">12 mentions/mo</span>
</div>
<div className="w-full bg-slate-700 rounded-full h-2">
<div className="bg-rose-500 h-2 rounded-full w-[10%]"></div>
</div>
<div className="flex items-center justify-between pt-4">
<span className="text-sm text-slate-400">After RankVista</span>
<span className="text-sm text-emerald-400">840 mentions/mo</span>
</div>
<div className="w-full bg-slate-700 rounded-full h-2">
<div className="bg-emerald-500 h-2 rounded-full w-[90%] shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section" id="services">
<div className="bg-slate-50 py-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Comprehensive AEO Services</h2>
<p className="text-slate-500">We provide end-to-end solutions to ensure your brand dominates the AI-generated search landscape.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:border-indigo-100 transition-colors">
<iconify-icon className="text-indigo-600 text-3xl mb-4" icon="solar:eye-linear"></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Answer Engine Monitoring</h3>
<p className="text-sm text-slate-500 mb-4">Real-time tracking of how your brand is perceived across all major LLMs. Detect hallucinations and negative bias instantly.</p>
<ul className="space-y-2">
<li className="flex items-center text-xs text-slate-600"><iconify-icon className="text-emerald-500 mr-2" icon="solar:check-circle-linear"></iconify-icon> Sentiment Analysis</li>
<li className="flex items-center text-xs text-slate-600"><iconify-icon className="text-emerald-500 mr-2" icon="solar:check-circle-linear"></iconify-icon> Hallucination Alerts</li>
</ul>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:border-indigo-100 transition-colors">
<iconify-icon className="text-indigo-600 text-3xl mb-4" icon="solar:document-add-linear"></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 mb-2">LLM-Native Content</h3>
<p className="text-sm text-slate-500 mb-4">Create content structured for Vector Database retrieval. We use semantic triples to ensure AI understands your entities.</p>
<ul className="space-y-2">
<li className="flex items-center text-xs text-slate-600"><iconify-icon className="text-emerald-500 mr-2" icon="solar:check-circle-linear"></iconify-icon> Entity Mapping</li>
<li className="flex items-center text-xs text-slate-600"><iconify-icon className="text-emerald-500 mr-2" icon="solar:check-circle-linear"></iconify-icon> Schema Generation</li>
</ul>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:border-indigo-100 transition-colors">
<iconify-icon className="text-indigo-600 text-3xl mb-4" icon="solar:lightbulb-bolt-linear"></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Prompt Intelligence</h3>
<p className="text-sm text-slate-500 mb-4">Reverse-engineer the user journey in chat interfaces. Optimize for conversational queries rather than keywords.</p>
<ul className="space-y-2">
<li className="flex items-center text-xs text-slate-600"><iconify-icon className="text-emerald-500 mr-2" icon="solar:check-circle-linear"></iconify-icon> Question Mining</li>
<li className="flex items-center text-xs text-slate-600"><iconify-icon className="text-emerald-500 mr-2" icon="solar:check-circle-linear"></iconify-icon> Contextual relevance</li>
</ul>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:border-indigo-100 transition-colors">
<iconify-icon className="text-indigo-600 text-3xl mb-4" icon="solar:server-square-linear"></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Crawler Analytics</h3>
<p className="text-sm text-slate-500 mb-4">Technical SEO for AI bots. Manage your `robots.txt` and blocking strategies while opening doors for trusted models.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:border-indigo-100 transition-colors">
<iconify-icon className="text-indigo-600 text-3xl mb-4" icon="solar:cart-large-linear"></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Shopping Optimization</h3>
<p className="text-sm text-slate-500 mb-4">Optimize product feeds for AI shopping assistants like Rufus and Google SGE.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:border-indigo-100 transition-colors">
<iconify-icon className="text-indigo-600 text-3xl mb-4" icon="solar:buildings-linear"></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Enterprise Solutions</h3>
<p className="text-sm text-slate-500 mb-4">Custom API integrations and private knowledge graph construction for Fortune 500s.</p>
</div>
</div>

<div className="border-t border-slate-200 pt-16">
<h3 className="text-2xl font-semibold text-slate-900 mb-10 text-center">How It Works</h3>
<div className="grid md:grid-cols-4 gap-4 relative">
<div className="relative z-10">
<div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mb-4 mx-auto md:mx-0">1</div>
<h4 className="font-medium text-slate-900 mb-2 text-center md:text-left">Audit</h4>
<p className="text-xs text-slate-500 text-center md:text-left">We scan 50+ AI models to establish your current visibility baseline.</p>
</div>
<div className="relative z-10">
<div className="w-10 h-10 bg-white border-2 border-slate-200 text-slate-400 rounded-full flex items-center justify-center font-bold mb-4 mx-auto md:mx-0">2</div>
<h4 className="font-medium text-slate-900 mb-2 text-center md:text-left">Structure</h4>
<p className="text-xs text-slate-500 text-center md:text-left">We implement JSON-LD schema and semantic HTML to aid parsing.</p>
</div>
<div className="relative z-10">
<div className="w-10 h-10 bg-white border-2 border-slate-200 text-slate-400 rounded-full flex items-center justify-center font-bold mb-4 mx-auto md:mx-0">3</div>
<h4 className="font-medium text-slate-900 mb-2 text-center md:text-left">Seed</h4>
<p className="text-xs text-slate-500 text-center md:text-left">Strategic placement of brand facts in high-authority data sources.</p>
</div>
<div className="relative z-10">
<div className="w-10 h-10 bg-white border-2 border-slate-200 text-slate-400 rounded-full flex items-center justify-center font-bold mb-4 mx-auto md:mx-0">4</div>
<h4 className="font-medium text-slate-900 mb-2 text-center md:text-left">Monitor</h4>
<p className="text-xs text-slate-500 text-center md:text-left">Continuous tracking of sentiment and citation frequency.</p>
</div>

<div className="absolute top-5 left-0 w-full h-0.5 bg-slate-200 hidden md:block -z-0"></div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section" id="team">
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
<div className="grid lg:grid-cols-2 gap-12 mb-20">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Built by Data Scientists <br/> and SEO Veterans</h2>
<p className="text-slate-500 mb-6">At RankVista, we believe the future of search is conversational. Our team combines deep expertise in Natural Language Processing with decades of technical SEO experience.</p>
<div className="flex gap-8">
<div><div className="text-2xl font-bold text-slate-900">12+</div><div className="text-xs text-slate-500">PhD Researchers</div></div>
<div><div className="text-2xl font-bold text-slate-900">500m</div><div className="text-xs text-slate-500">Queries Analyzed</div></div>
<div><div className="text-2xl font-bold text-slate-900">2023</div><div className="text-xs text-slate-500">Founded</div></div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-indigo-100 rounded-2xl h-48 w-full animate-pulse"></div>
<div className="bg-indigo-50 rounded-2xl h-48 w-full mt-8 animate-pulse"></div>
</div>
</div>

<h3 className="text-lg font-semibold text-slate-900 mb-8">Leadership</h3>
<div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">

<div className="group">
<div className="aspect-square bg-slate-200 rounded-xl mb-4 overflow-hidden relative">

<div className="absolute inset-0 bg-gradient-to-tr from-slate-300 to-slate-100 flex items-center justify-center text-slate-400 text-4xl font-light">ES</div>
</div>
<h4 className="font-medium text-slate-900">Elena Stone</h4>
<p className="text-xs text-slate-500">CEO &amp; Co-Founder</p>
<p className="text-xs text-slate-400 mt-2 line-clamp-2">Ex-Google Search Engineer with 10 years experience in NLP.</p>
</div>

<div className="group">
<div className="aspect-square bg-slate-200 rounded-xl mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-300 to-slate-100 flex items-center justify-center text-slate-400 text-4xl font-light">MK</div>
</div>
<h4 className="font-medium text-slate-900">Marcus King</h4>
<p className="text-xs text-slate-500">CTO</p>
<p className="text-xs text-slate-400 mt-2 line-clamp-2">Leading AI researcher specializing in Retrieval Augmented Generation.</p>
</div>

<div className="group">
<div className="aspect-square bg-slate-200 rounded-xl mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-300 to-slate-100 flex items-center justify-center text-slate-400 text-4xl font-light">JL</div>
</div>
<h4 className="font-medium text-slate-900">Julia Lin</h4>
<p className="text-xs text-slate-500">Head of Product</p>
<p className="text-xs text-slate-400 mt-2 line-clamp-2">Product strategist formerly at OpenAI.</p>
</div>
</div>

<div className="bg-slate-900 rounded-2xl p-12 text-center text-white">
<h3 className="text-2xl font-semibold mb-4">Join the Revolution</h3>
<p className="text-slate-400 mb-8 max-w-md mx-auto">We're hiring engineers, data scientists, and content strategists who want to shape the future of information discovery.</p>
<button className="bg-white text-slate-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-100 transition-colors">View Open Roles</button>
</div>
</div>
</section>

<section className="page-section" id="pricing">
<div className="bg-slate-50 py-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
<div className="flex items-center justify-center gap-4 text-sm font-medium text-slate-600">
<span>Monthly</span>
<div className="relative w-12 h-6 bg-indigo-600 rounded-full p-1 cursor-pointer">
<div className="w-4 h-4 bg-white rounded-full absolute right-1"></div>
</div>
<span className="text-slate-400">Yearly (-20%)</span>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-start">

<div className="bg-white p-8 rounded-2xl border border-slate-200">
<h3 className="text-lg font-medium text-slate-900 mb-2">Starter</h3>
<div className="text-4xl font-semibold text-slate-900 mb-6">$299<span className="text-base text-slate-400 font-normal">/mo</span></div>
<p className="text-xs text-slate-500 mb-6">For small businesses getting started with AEO.</p>
<button className="w-full border border-slate-200 text-slate-900 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 mb-8">Get Started</button>
<ul className="space-y-3">
<li className="flex items-center text-xs text-slate-600"><iconify-icon className="text-indigo-600 mr-2" icon="solar:check-circle-linear"></iconify-icon> 5 Keywords tracked</li>
<li className="flex items-center text-xs text-slate-600"><iconify-icon className="text-indigo-600 mr-2" icon="solar:check-circle-linear"></iconify-icon> Monthly Reporting</li>
<li className="flex items-center text-xs text-slate-600"><iconify-icon className="text-indigo-600 mr-2" icon="solar:check-circle-linear"></iconify-icon> Basic Schema Audit</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border-2 border-indigo-600 shadow-xl shadow-indigo-100 relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-3 py-0.5 rounded-full text-[10px] font-medium tracking-wide uppercase">Most Popular</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Professional</h3>
<div className="text-4xl font-semibold text-slate-900 mb-6">$799<span className="text-base text-slate-400 font-normal">/mo</span></div>
<p className="text-xs text-slate-500 mb-6">For growing brands needing comprehensive coverage.</p>
<button className="w-full bg-indigo-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 mb-8">Start Free Trial</button>
<ul className="space-y-3">
<li className="flex items-center text-xs text-slate-600"><iconify-icon className="text-indigo-600 mr-2" icon="solar:check-circle-linear"></iconify-icon> 50 Keywords tracked</li>
<li className="flex items-center text-xs text-slate-600"><iconify-icon className="text-indigo-600 mr-2" icon="solar:check-circle-linear"></iconify-icon> Weekly Reporting</li>
<li className="flex items-center text-xs text-slate-600"><iconify-icon className="text-indigo-600 mr-2" icon="solar:check-circle-linear"></iconify-icon> Sentiment Analysis</li>
<li className="flex items-center text-xs text-slate-600"><iconify-icon className="text-indigo-600 mr-2" icon="solar:check-circle-linear"></iconify-icon> Content Optimization Tool</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200">
<h3 className="text-lg font-medium text-slate-900 mb-2">Enterprise</h3>
<div className="text-4xl font-semibold text-slate-900 mb-6">Custom</div>
<p className="text-xs text-slate-500 mb-6">For large organizations with complex needs.</p>
<button className="w-full border border-slate-200 text-slate-900 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 mb-8">Contact Sales</button>
<ul className="space-y-3">
<li className="flex items-center text-xs text-slate-600"><iconify-icon className="text-indigo-600 mr-2" icon="solar:check-circle-linear"></iconify-icon> Unlimited Tracking</li>
<li className="flex items-center text-xs text-slate-600"><iconify-icon className="text-indigo-600 mr-2" icon="solar:check-circle-linear"></iconify-icon> API Access</li>
<li className="flex items-center text-xs text-slate-600"><iconify-icon className="text-indigo-600 mr-2" icon="solar:check-circle-linear"></iconify-icon> Dedicated Success Manager</li>
</ul>
</div>
</div>

<div className="mt-24 max-w-3xl mx-auto">
<h3 className="text-xl font-semibold text-slate-900 mb-8 text-center">Frequently Asked Questions</h3>
<div className="space-y-4">
<div className="border-b border-slate-200 pb-4">
<h4 className="text-sm font-medium text-slate-900 mb-2">How is AEO different from SEO?</h4>
<p className="text-xs text-slate-500">Traditional SEO targets 10 blue links. AEO targets the single answer provided by AI models like ChatGPT.</p>
</div>
<div className="border-b border-slate-200 pb-4">
<h4 className="text-sm font-medium text-slate-900 mb-2">Which platforms do you track?</h4>
<p className="text-xs text-slate-500">We track OpenAI (ChatGPT), Anthropic (Claude), Google (Gemini/SGE), Perplexity, and Bing Copilot.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section" id="blog">
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-24">

<div className="mb-16 grid lg:grid-cols-2 gap-8 items-center bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
<div className="aspect-video bg-indigo-50 rounded-xl flex items-center justify-center">
<iconify-icon className="text-6xl text-indigo-300" icon="solar:graph-new-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-2">Latest Insights</div>
<h2 className="text-2xl font-semibold text-slate-900 mb-4">The Death of the Keyword: How Vectors are Changing Search</h2>
<p className="text-slate-500 mb-6 text-sm">Why exact match keywords matter less in the age of semantic embeddings and RAG systems.</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-slate-200 rounded-full"></div>
<div className="text-xs">
<div className="font-medium text-slate-900">Elena Stone</div>
<div className="text-slate-400">Oct 24, 2023 · 5 min read</div>
</div>
</div>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="lg:col-span-1 space-y-8">
<div>
<h3 className="font-semibold text-slate-900 mb-4 text-sm">Categories</h3>
<ul className="space-y-2 text-xs text-slate-600">
<li className="cursor-pointer hover:text-indigo-600">Algorithm Updates</li>
<li className="cursor-pointer hover:text-indigo-600">Prompt Engineering</li>
<li className="cursor-pointer hover:text-indigo-600">Case Studies</li>
<li className="cursor-pointer hover:text-indigo-600">Technical AEO</li>
</ul>
</div>
<div className="bg-indigo-50 p-6 rounded-xl">
<h3 className="font-semibold text-indigo-900 mb-2 text-sm">Subscribe to Newsletter</h3>
<p className="text-xs text-indigo-700 mb-4">Get the latest AI search trends delivered weekly.</p>
<input className="w-full text-xs p-2 rounded border border-indigo-200 mb-2" placeholder="Email address" type="email"/>
<button className="w-full bg-indigo-600 text-white text-xs font-medium py-2 rounded">Subscribe</button>
</div>
</div>

<div className="lg:col-span-2 grid md:grid-cols-2 gap-6">

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-slate-100 rounded-xl mb-4"></div>
<div className="text-xs text-indigo-600 font-medium mb-2">Guide</div>
<h3 className="font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">Optimizing for Perplexity AI</h3>
<p className="text-xs text-slate-500">How to get your content cited in Perplexity's answer engine.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-slate-100 rounded-xl mb-4"></div>
<div className="text-xs text-indigo-600 font-medium mb-2">Analysis</div>
<h3 className="font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">Google SGE vs ChatGPT</h3>
<p className="text-xs text-slate-500">Comparing traffic referral rates from the top two platforms.</p>
</div>
</div>
</div>
</div>
</section>

<section className="page-section" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-semibold text-slate-900 mb-6">Get in touch</h2>
<p className="text-slate-500 mb-8">Ready to prepare your brand for the AI future? Our team is ready to help you navigate the new search landscape.</p>
<div className="space-y-6 mb-12">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Headquarters</h4>
<p className="text-xs text-slate-500 mt-1">100 Spear Street, Suite 500<br/>San Francisco, CA 94105</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Email</h4>
<p className="text-xs text-slate-500 mt-1">hello@rankvista.ai</p>
</div>
</div>
</div>

<div className="bg-slate-200 rounded-xl h-48 w-full flex items-center justify-center text-slate-400">
<div className="text-center">
<iconify-icon className="text-3xl mb-2" icon="solar:map-linear"></iconify-icon>
<p className="text-xs">Map Loading...</p>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">First Name</label>
<input className="w-full text-sm border border-slate-300 rounded-lg px-3 py-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Last Name</label>
<input className="w-full text-sm border border-slate-300 rounded-lg px-3 py-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Work Email</label>
<input className="w-full text-sm border border-slate-300 rounded-lg px-3 py-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Company Website</label>
<input className="w-full text-sm border border-slate-300 rounded-lg px-3 py-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Message</label>
<textarea className="w-full text-sm border border-slate-300 rounded-lg px-3 py-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" rows="4"></textarea>
</div>

<div className="flex items-center gap-2">
<input className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 appearance-none border cursor-pointer" id="consent" type="checkbox"/>
<label className="text-xs text-slate-500 select-none cursor-pointer" htmlFor="consent">I agree to the privacy policy.</label>
</div>
<button className="w-full bg-slate-900 text-white font-medium text-sm py-2.5 rounded-lg hover:bg-slate-800 transition-colors" type="submit">Send Message</button>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<iconify-icon icon="solar:chart-square-linear" width="14"></iconify-icon>
</div>
<span className="text-sm font-semibold text-slate-900">RankVista</span>
</div>
<p className="text-xs text-slate-500 max-w-xs leading-relaxed">The premier Answer Engine Optimization platform. Helping brands stay visible in the age of Artificial Intelligence.</p>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm mb-4">Platform</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li className="hover:text-indigo-600 cursor-pointer">Features</li>
<li className="hover:text-indigo-600 cursor-pointer">Pricing</li>
<li className="hover:text-indigo-600 cursor-pointer">Enterprise</li>
<li className="hover:text-indigo-600 cursor-pointer">Changelog</li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm mb-4">Company</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li className="hover:text-indigo-600 cursor-pointer">About Us</li>
<li className="hover:text-indigo-600 cursor-pointer">Careers</li>
<li className="hover:text-indigo-600 cursor-pointer">Blog</li>
<li className="hover:text-indigo-600 cursor-pointer">Contact</li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li className="hover:text-indigo-600 cursor-pointer">Privacy</li>
<li className="hover:text-indigo-600 cursor-pointer">Terms</li>
<li className="hover:text-indigo-600 cursor-pointer">Security</li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 RankVista Inc. All rights reserved.</p>
<div className="flex gap-4 text-slate-400">
<iconify-icon className="hover:text-slate-900 cursor-pointer" icon="solar:brand-twitter-linear"></iconify-icon>
<iconify-icon className="hover:text-slate-900 cursor-pointer" icon="solar:brand-linkedin-linear"></iconify-icon>
<iconify-icon className="hover:text-slate-900 cursor-pointer" icon="solar:brand-github-linear"></iconify-icon>
</div>
</div>
</div>
</footer>



    </>
  );
}
