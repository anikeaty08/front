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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.31/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        // Simple SPA Router
        function router(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-section').forEach(el => {
                el.classList.add('hidden');
            });
            // Show requested page
            const target = document.getElementById('page-' + pageId);
            if (target) {
                target.classList.remove('hidden');
                target.classList.add('animate-fade-up');
                window.scrollTo(0,0);
            }
        }

        // Testimonial Scroll
        function scrollTestimonials(direction) {
            const container = document.getElementById('testimonial-container');
            const scrollAmount = 420; 
            container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
        }

        // Counter Animation
        document.addEventListener('DOMContentLoaded', () => {
            const counters = document.querySelectorAll('.counter');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = +entry.target.getAttribute('data-target');
                        const duration = 2000; 
                        const increment = target / (duration / 16); 
                        
                        let current = 0;
                        const updateCounter = () => {
                            current += increment;
                            if (current < target) {
                                entry.target.innerText = Math.ceil(current);
                                requestAnimationFrame(updateCounter);
                            } else {
                                entry.target.innerText = target;
                            }
                        };
                        updateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            counters.forEach(counter => observer.observe(counter));
        });
    
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 saturate-50" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="hk4GkXoEfSX9qZozoFL6"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-lg font-semibold text-white tracking-tight flex items-center gap-2" href="javascript:void(0)" onclick="router('home')">
<div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
<iconify-icon icon="solar:minimalistic-magnifer-linear" width="18"></iconify-icon>
</div>
                FIRSTONSEARCH
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="javascript:void(0)" onclick="router('home')">Home</a>
<a className="hover:text-white transition-colors" href="javascript:void(0)" onclick="router('services')">Services</a>
<a className="hover:text-white transition-colors" href="javascript:void(0)" onclick="router('about')">About</a>
<a className="hover:text-white transition-colors" href="javascript:void(0)" onclick="router('resources')">Resources</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-white hover:text-indigo-400 transition-colors" href="javascript:void(0)" onclick="router('contact')">Contact</a>
<button className="text-xs font-semibold bg-white text-zinc-950 px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-all flex items-center gap-2" onclick="router('contact')">
                    Book Strategy
                    <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="page-section pt-20" id="page-home">

<section className="relative pt-24 pb-20 md:pt-36 md:pb-32 px-6 overflow-hidden">
<div className="absolute inset-0 bg-noise pointer-events-none z-0"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-indigo-600/10 via-purple-600/10 to-transparent blur-[120px] rounded-full pointer-events-none"></div>
<div className="animate-fade-up text-center max-w-5xl z-10 mr-auto ml-auto relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/10 text-xs font-medium text-indigo-300 mb-8 backdrop-blur-sm">
<iconify-icon icon="solar:stars-minimalistic-linear"></iconify-icon>
<span>The Era of AI Search is Here</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-[1.1] mb-8">
                    Be Found <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-zinc-400">Everywhere AI Looks.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                    We engineer SEO + AI visibility systems that rank you in Google and get you cited inside LLMs like ChatGPT, Gemini, Claude, and Perplexity.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-950 font-semibold rounded-full hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.1)]" onclick="router('contact')">
                        Book Strategy Call
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-medium rounded-full hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2" onclick="router('contact')">
<iconify-icon icon="solar:scanner-linear"></iconify-icon>
                        Get Free AI Audit
                    </button>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-zinc-900/30 backdrop-blur-sm relative z-20">
<div className="max-w-7xl mx-auto px-6 py-12">
<p className="text-center text-xs font-semibold tracking-widest text-zinc-600 uppercase mb-8">Trusted by Growth-Stage Brands &amp; Category Leaders</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-50 grayscale mb-16">

<span className="text-xl font-bold font-sans tracking-tight text-white">LUMINA</span>
<span className="text-xl font-bold font-sans tracking-tight text-white italic">Vertex.ai</span>
<span className="text-xl font-semibold font-sans tracking-tighter text-white">NEXUS</span>
<span className="text-xl font-bold font-sans tracking-wide text-white">OBLIVION</span>
<span className="text-xl font-bold font-sans tracking-tight text-white">STRATOS</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
<div className="text-center">
<div className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-2 counter" data-target="150">2</div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Projects Delivered</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-2 flex justify-center items-center gap-1"><span className="counter" data-target="3">1</span>.2M+</div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Organic Visitors</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-2 flex justify-center items-center gap-1"><span className="counter" data-target="300">3</span>%</div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Avg Traffic Growth</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-2 flex justify-center items-center gap-1"><span className="counter" data-target="40">1</span>+</div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Brands Cited in AI</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6 leading-tight">
                        Search Has Changed.<br/>
<span className="text-zinc-500">Visibility Has Evolved.</span>
</h2>
<p className="text-zinc-400 mb-8 leading-relaxed text-lg">
                        Traditional blue links are dying. Google SGE, AI Overviews, and direct answers from Claude and ChatGPT are the new gatekeepers.
                    </p>
<p className="text-zinc-400 mb-8 leading-relaxed">
                        If your brand isn't optimized for Large Language Models, you are invisible to the highest-intent users who ask AI for recommendations instead of scrolling through ads.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<iconify-icon className="text-zinc-600" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-zinc-500 line-through">Keyword stuffing &amp; backlink spam</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-white">Entity optimization &amp; LLM citation</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-white">Structured data &amp; knowledge graph ownership</span>
</li>
</ul>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-50"></div>
<div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 relative overflow-hidden">
<div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>

<div className="space-y-6">
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
<iconify-icon icon="solar:user-linear"></iconify-icon>
</div>
<div className="bg-zinc-800/50 p-4 rounded-2xl rounded-tl-none text-sm text-zinc-300">
                                    What are the best enterprise payment platforms for high volume SaaS?
                                </div>
</div>
<div className="flex gap-4 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
<iconify-icon icon="solar:stars-minimalistic-linear"></iconify-icon>
</div>
<div className="bg-zinc-950 border border-white/10 p-4 rounded-2xl rounded-tr-none text-sm text-zinc-300 w-full">
<p className="mb-3">Based on current market analysis and user reviews, here are the top recommendations:</p>
<ul className="space-y-2 mb-3">
<li className="flex items-center gap-2 text-white font-medium">1. Stripe Enterprise</li>
<li className="flex items-center gap-2 text-white font-medium bg-indigo-500/20 px-2 py-1 rounded -ml-2 border border-indigo-500/30">
                                            2. YOUR BRAND HERE
                                            <iconify-icon className="text-indigo-400" icon="solar:verified-check-linear"></iconify-icon>
</li>
<li className="flex items-center gap-2 text-white font-medium">3. Adyen</li>
</ul>
<p className="text-xs text-zinc-500">Sources: G2, Capterra, TechCrunch...</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-zinc-950 relative border-t border-white/5">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.05),transparent_40%)] pointer-events-none"></div>
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Core Capabilities</h2>
<p className="text-zinc-400 text-lg">Architecture for the modern web. From technical foundations to AI perception.</p>
</div>
<button className="text-sm font-medium text-white border-b border-zinc-700 hover:border-white pb-1 transition-colors" onclick="router('services')">View All Services</button>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:bg-zinc-900/40 transition-all duration-500 hover:border-indigo-500/20 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
<iconify-icon icon="solar:magnifer-zoom-in-bold-duotone" width="120"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg shadow-indigo-900/20">
<iconify-icon icon="solar:magnifer-zoom-in-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">SEO &amp; AI Visibility</h3>
<p className="text-sm text-zinc-400 mb-8 leading-relaxed">Technical SEO optimization paired with Entity Mapping to ensure you rank in SERPs and are understood by LLM bots.</p>
<ul className="space-y-2 text-sm text-zinc-500 mb-8">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-indigo-500 rounded-full"></div>Schema Markup</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-indigo-500 rounded-full"></div>Knowledge Graph</li>
</ul>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:bg-zinc-900/40 transition-all duration-500 hover:border-purple-500/20 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
<iconify-icon icon="solar:chat-round-line-bold-duotone" width="120"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-lg shadow-purple-900/20">
<iconify-icon icon="solar:chat-round-line-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">LLM Citation Strategy</h3>
<p className="text-sm text-zinc-400 mb-8 leading-relaxed">Reverse-engineering LLM training data to get your brand recommended in ChatGPT, Gemini, and Claude.</p>
<ul className="space-y-2 text-sm text-zinc-500 mb-8">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full"></div>Brand Mentions</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full"></div>Sentiment Analysis</li>
</ul>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:bg-zinc-900/40 transition-all duration-500 hover:border-emerald-500/20 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
<iconify-icon icon="solar:graph-up-bold-duotone" width="120"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg shadow-emerald-900/20">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Performance Marketing</h3>
<p className="text-sm text-zinc-400 mb-8 leading-relaxed">Integrated paid search and social campaigns that amplify your organic presence and capture immediate demand.</p>
<ul className="space-y-2 text-sm text-zinc-500 mb-8">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-emerald-500 rounded-full"></div>Paid Search</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-emerald-500 rounded-full"></div>Retargeting</li>
</ul>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:bg-zinc-900/40 transition-all duration-500 hover:border-blue-500/20 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
<iconify-icon icon="solar:code-square-bold-duotone" width="120"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-lg shadow-blue-900/20">
<iconify-icon icon="solar:code-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Technical Development</h3>
<p className="text-sm text-zinc-400 mb-8 leading-relaxed">Lightning-fast websites built on Next.js or Webflow, designed for both humans and web crawlers.</p>
<ul className="space-y-2 text-sm text-zinc-500 mb-8">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"></div>Next.js / React</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"></div>Headless CMS</li>
</ul>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:bg-zinc-900/40 transition-all duration-500 hover:border-orange-500/20 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
<iconify-icon icon="solar:transfer-horizontal-bold-duotone" width="120"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center mb-6 text-orange-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg shadow-orange-900/20">
<iconify-icon icon="solar:transfer-horizontal-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">SEO Migration</h3>
<p className="text-sm text-zinc-400 mb-8 leading-relaxed">Risk-free site migrations. We preserve your authority and traffic during rebrands, domain changes, or CMS moves.</p>
<ul className="space-y-2 text-sm text-zinc-500 mb-8">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500 rounded-full"></div>Traffic Preservation</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500 rounded-full"></div>Redirect Mapping</li>
</ul>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:bg-zinc-900/40 transition-all duration-500 hover:border-pink-500/20 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
<iconify-icon icon="solar:cursor-square-bold-duotone" width="120"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center mb-6 text-pink-400 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-lg shadow-pink-900/20">
<iconify-icon icon="solar:cursor-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">CRO</h3>
<p className="text-sm text-zinc-400 mb-8 leading-relaxed">Conversion rate optimization that turns traffic into revenue through rigorous A/B testing and analysis.</p>
<ul className="space-y-2 text-sm text-zinc-500 mb-8">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-pink-500 rounded-full"></div>A/B Testing</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-pink-500 rounded-full"></div>User Heatmaps</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-16 text-center">Why Leading Brands Choose Us</h2>
<div className="grid md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 rounded-3xl bg-zinc-900 border border-white/5 p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 border border-indigo-500/20">
<iconify-icon icon="solar:cpu-bolt-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Native AI Framework</h3>
<p className="text-zinc-400 text-sm max-w-md">We don't tack AI onto old strategies. We build systems designed specifically for Large Language Models using proprietary entity mapping.</p>
</div>

<div className="mt-8 bg-zinc-950/50 border border-white/5 rounded-lg p-4 font-mono text-xs text-zinc-500 w-full max-w-md">
<div className="flex items-center gap-2 mb-2 border-b border-white/5 pb-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
<span className="text-purple-400">const</span> entity = <span className="text-indigo-400">new</span> KnowledgeGraph();<br/>
                            entity.<span className="text-blue-400">optimize</span>({ target: <span className="text-green-400">'LLM_CITATION'</span> });
                        </div>
</div>
</div>

<div className="rounded-3xl bg-zinc-900 border border-white/5 p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 to-transparent"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 border border-emerald-500/20">
<iconify-icon icon="solar:stopwatch-play-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">High Velocity</h3>
<p className="text-zinc-400 text-sm">Automated audits allow us to analyze 10,000+ pages instantly.</p>
</div>
<div className="flex items-end gap-1 mt-4 h-16">
<div className="bg-emerald-500/20 w-1/4 h-[40%] rounded-t-md animate-pulse"></div>
<div className="bg-emerald-500/40 w-1/4 h-[60%] rounded-t-md animate-pulse" style={{animationDelay: '100ms'}}></div>
<div className="bg-emerald-500/60 w-1/4 h-[80%] rounded-t-md animate-pulse" style={{animationDelay: '200ms'}}></div>
<div className="bg-emerald-500 w-1/4 h-full rounded-t-md shadow-[0_0_15px_rgba(16,185,129,0.4)]"></div>
</div>
</div>
</div>

<div className="rounded-3xl bg-zinc-900 border border-white/5 p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-noise opacity-20"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4 border border-orange-500/20">
<iconify-icon icon="solar:wallet-money-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Revenue Focused</h3>
<p className="text-zinc-400 text-sm">We don't care about vanity metrics. Only qualified leads and ARR.</p>
</div>

<div className="mt-4 relative h-20 w-full">
<svg className="w-full h-full stroke-orange-500 stroke-2 fill-none overflow-visible" viewbox="0 0 100 40">
<path className="drop-shadow-[0_4px_6px_rgba(249,115,22,0.3)]" d="M0 35 Q 20 35, 30 25 T 60 20 T 100 5"></path>
</svg>
<div className="absolute top-0 right-0 bg-zinc-800 text-[10px] text-white px-2 py-0.5 rounded border border-white/10">ARR +40%</div>
</div>
</div>
</div>

<div className="md:col-span-2 rounded-3xl bg-zinc-900 border border-white/5 p-8 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 border border-blue-500/20">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Total Transparency</h3>
<p className="text-zinc-400 text-sm max-w-md">No black boxes. You own the strategy, the data, and the accounts. We provide real-time dashboards and weekly sprint reports.</p>
</div>
<div className="mt-6 flex items-center gap-4">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-zinc-900"></div>
<div className="w-8 h-8 rounded-full bg-zinc-700 border-2 border-zinc-900"></div>
<div className="w-8 h-8 rounded-full bg-zinc-600 border-2 border-zinc-900"></div>
</div>
<span className="text-xs text-zinc-500 font-medium">+ Dedicated Slack Channel</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-950 border-y border-white/5">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<span className="text-indigo-400 font-semibold tracking-wider text-xs uppercase mb-2 block">Our Methodology</span>
<h2 className="text-3xl md:text-5xl font-medium text-white">The AI Visibility Protocol</h2>
</div>
<div className="space-y-12 relative">

<div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 via-zinc-800 to-zinc-900 hidden md:block"></div>

<div className="relative flex flex-col md:flex-row gap-8 items-start">
<div className="w-14 h-14 rounded-full bg-zinc-900 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-xl font-bold z-10 shrink-0 shadow-[0_0_15px_rgba(99,102,241,0.2)]">1</div>
<div className="flex-1 bg-zinc-900/50 p-8 rounded-2xl border border-white/5 hover:border-indigo-500/20 transition-colors">
<h3 className="text-xl font-semibold text-white mb-3">Technical Foundation &amp; Audit</h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-4">We crawl your infrastructure to fix crawl budget issues, schema errors, and load velocity. We ensure your content is machine-readable for both Googlebot and LLM scrapers.</p>
<div className="flex gap-2">
<span className="px-2 py-1 bg-zinc-800 rounded text-[10px] text-zinc-400 border border-white/5">Log Analysis</span>
<span className="px-2 py-1 bg-zinc-800 rounded text-[10px] text-zinc-400 border border-white/5">Schema.org</span>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 items-start">
<div className="w-14 h-14 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white text-xl font-bold z-10 shrink-0">2</div>
<div className="flex-1 bg-zinc-900/50 p-8 rounded-2xl border border-white/5 hover:border-indigo-500/20 transition-colors">
<h3 className="text-xl font-semibold text-white mb-3">Entity &amp; Knowledge Graph Mapping</h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-4">We map your brand's entities to the Knowledge Graph. This establishes authority and helps search engines understand the relationships between your products and user intent.</p>
<div className="flex gap-2">
<span className="px-2 py-1 bg-zinc-800 rounded text-[10px] text-zinc-400 border border-white/5">Entity Stacking</span>
<span className="px-2 py-1 bg-zinc-800 rounded text-[10px] text-zinc-400 border border-white/5">Wikidata</span>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 items-start">
<div className="w-14 h-14 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white text-xl font-bold z-10 shrink-0">3</div>
<div className="flex-1 bg-zinc-900/50 p-8 rounded-2xl border border-white/5 hover:border-indigo-500/20 transition-colors">
<h3 className="text-xl font-semibold text-white mb-3">Programmatic &amp; Editorial Content</h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-4">We deploy high-quality content at scale. Combining human expertise with AI efficiency to cover the entire topical map of your industry.</p>
<div className="flex gap-2">
<span className="px-2 py-1 bg-zinc-800 rounded text-[10px] text-zinc-400 border border-white/5">Topical Authority</span>
<span className="px-2 py-1 bg-zinc-800 rounded text-[10px] text-zinc-400 border border-white/5">Content Velocity</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5 bg-zinc-900/30">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2">
<div className="inline-block px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-semibold rounded-full mb-6">CASE STUDY: FINTECH</div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">How ScalePay Dominated "Payment Integration" Searches</h2>
<p className="text-zinc-400 mb-8 leading-relaxed">ScalePay needed to lower CAC. We implemented a programmatic content strategy targeting 400+ integration keywords and secured citations in GPT-4 answers for "best payment API".</p>
<div className="grid grid-cols-3 gap-6 mb-8">
<div>
<div className="text-2xl font-bold text-white mb-1">+280%</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-widest">Growth</div>
</div>
<div className="">
<div className="text-2xl font-bold text-white mb-1">3X</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-widest">Demos</div>
</div>
<div>
<div className="text-2xl font-bold text-white mb-1">90 Days</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-widest">Time to Result</div>
</div>
</div>
<button className="text-white border-b border-white hover:text-indigo-300 hover:border-indigo-300 transition-colors pb-1 text-sm font-medium">View Full Case Study</button>
</div>
<div className="w-full md:w-1/2">
<div className="bg-zinc-950 rounded-2xl border border-white/10 p-2 shadow-2xl relative">
<div className="bg-zinc-900 rounded-xl overflow-hidden aspect-video relative flex items-center justify-center">
<iconify-icon className="text-indigo-500/20 text-9xl" icon="solar:graph-new-linear"></iconify-icon>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>

<div className="absolute bottom-8 right-8 bg-zinc-800/90 backdrop-blur border border-white/10 p-4 rounded-lg shadow-xl max-w-xs">
<div className="flex items-center gap-3 mb-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs text-zinc-300 font-medium">Traffic Source: AI Referrals</span>
</div>
<div className="h-1 bg-zinc-700 rounded-full w-full overflow-hidden">
<div className="h-full bg-green-500 w-[78%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl font-medium text-white">What Founders Say</h2>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all" onclick="scrollTestimonials(-1)">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all" onclick="scrollTestimonials(1)">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto snap-x scrollbar-hide pb-8" id="testimonial-container">

<div className="min-w-[320px] md:min-w-[400px] snap-center bg-zinc-900/50 p-8 rounded-2xl border border-white/5 hover:bg-zinc-900 transition-colors flex flex-col justify-between">
<div>
<div className="flex gap-1 text-indigo-400 mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-300 text-sm leading-relaxed mb-6">"Firstonsearch isn't just an SEO agency. They are a technical growth partner. They understood our complex infrastructure and delivered results that actually impacted revenue."</p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 font-bold text-xs">JS</div>
<div>
<div className="text-sm font-medium text-white">James Smith</div>
<div className="text-xs text-zinc-500">CTO, Vertex.ai</div>
</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[400px] snap-center bg-zinc-900/50 p-8 rounded-2xl border border-white/5 hover:bg-zinc-900 transition-colors flex flex-col justify-between">
<div>
<div className="flex gap-1 text-indigo-400 mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-300 text-sm leading-relaxed mb-6">"We were invisible on ChatGPT until we worked with them. The AI Visibility audit opened our eyes. Within 3 months, we were the top recommendation."</p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 font-bold text-xs">EL</div>
<div>
<div className="text-sm font-medium text-white">Elena Lee</div>
<div className="text-xs text-zinc-500">CMO, Nexus</div>
</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[400px] snap-center bg-zinc-900/50 p-8 rounded-2xl border border-white/5 hover:bg-zinc-900 transition-colors flex flex-col justify-between">
<div>
<div className="flex gap-1 text-indigo-400 mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-300 text-sm leading-relaxed mb-6">"Professional, data-driven, and no fluff. They don't waste time on vanity metrics. Every report connects back to business growth."</p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 font-bold text-xs">MR</div>
<div>
<div className="text-sm font-medium text-white">Mark Roberts</div>
<div className="text-xs text-zinc-500">Founder, Stratos</div>
</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[400px] snap-center bg-zinc-900/50 p-8 rounded-2xl border border-white/5 hover:bg-zinc-900 transition-colors flex flex-col justify-between">
<div>
<div className="flex gap-1 text-indigo-400 mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-300 text-sm leading-relaxed mb-6">"The programmatic SEO implementation was flawless. We scaled to 1,000 pages in weeks without any indexing issues. Highly recommended."</p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 font-bold text-xs">DK</div>
<div>
<div className="text-sm font-medium text-white">David Kim</div>
<div className="text-xs text-zinc-500">VP Marketing, Flowbase</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto">
<h2 className="text-3xl font-medium text-white text-center mb-12">Questions</h2>
<div className="space-y-4">
<details className="group bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden transition-all hover:bg-zinc-900">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium select-none">
                        What is AI SEO?
                        <iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed">
                        AI SEO optimizes your content not just for search engines like Google, but for the training data and retrieval systems of Large Language Models. This ensures your brand appears in direct answers generated by AI.
                    </div>
</details>
<details className="group bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden transition-all hover:bg-zinc-900">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium select-none">
                        Do you work with startups or enterprise?
                        <iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed">
                        We primarily work with Series A+ startups and enterprise brands. Our strategies are resource-intensive and designed for companies ready to scale aggressively.
                    </div>
</details>
<details className="group bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden transition-all hover:bg-zinc-900">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium select-none">
                        How long does AI visibility take?
                        <iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed">
                        While traditional SEO can take 6-12 months, our entity optimization strategies often show results in LLM outputs and AI Overviews within 60-90 days.
                    </div>
</details>
</div>
</section>

<section className="py-24 px-6 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-950/20 pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-4xl font-medium text-white tracking-tight mb-4">Ready to Own Search &amp; AI Visibility?</h2>
<p className="text-zinc-400 mb-10">Let’s build a system that ranks, converts, and gets cited.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-3.5 bg-white text-zinc-950 font-medium rounded-full hover:bg-zinc-200 transition-colors" onclick="router('contact')">Book Strategy Call</button>
<button className="px-8 py-3.5 bg-zinc-900 border border-zinc-800 text-white font-medium rounded-full hover:bg-zinc-800 transition-colors" onclick="router('contact')">Get AI Visibility Audit</button>
</div>
</div>
</section>
</main>

<main className="page-section pt-24 hidden min-h-screen" id="page-services">
<div className="max-w-7xl mx-auto px-6 py-12 animate-fade-up">
<h1 className="text-4xl md:text-5xl font-medium text-white mb-6">Our Capabilities</h1>
<p className="text-xl text-zinc-400 max-w-2xl mb-16">Comprehensive visibility engineering for the modern web. From technical foundations to AI perception management.</p>
<div className="grid gap-12">

<div className="grid md:grid-cols-2 gap-8 p-8 bg-zinc-900/30 border border-white/5 rounded-2xl">
<div>
<iconify-icon className="text-4xl text-indigo-400 mb-4" icon="solar:magnifer-zoom-in-linear"></iconify-icon>
<h3 className="text-2xl font-medium text-white mb-4">SEO &amp; AI Visibility</h3>
<p className="text-zinc-400 leading-relaxed mb-6">We move beyond keywords to entity-based optimization. By structuring your data and content to be machine-readable, we ensure search engines and AI models understand exactly who you are and what you offer.</p>
<ul className="space-y-2 text-sm text-zinc-500">
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Topical Authority Mapping</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Technical Health Audits</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Programmatic SEO</li>
</ul>
</div>
<div className="bg-zinc-950 rounded-xl border border-white/5 flex items-center justify-center p-8">

<div className="w-full h-48 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-lg relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-500/20 blur-xl rounded-full"></div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-8 p-8 bg-zinc-900/30 border border-white/5 rounded-2xl">
<div>
<iconify-icon className="text-4xl text-indigo-400 mb-4" icon="solar:chat-round-line-linear"></iconify-icon>
<h3 className="text-2xl font-medium text-white mb-4">LLM Citation Building</h3>
<p className="text-zinc-400 leading-relaxed mb-6">We influence the "black box" of AI. Through strategic digital PR, knowledge graph injection, and sentiment optimization, we train the models to cite your brand as the authority in your niche.</p>
<ul className="space-y-2 text-sm text-zinc-500">
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Reverse Engineering LLM Sources</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Brand Sentiment Analysis</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Knowledge Panel Optimization</li>
</ul>
</div>
<div className="bg-zinc-950 rounded-xl border border-white/5 flex items-center justify-center p-8">
<div className="w-full h-48 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-lg relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/20 blur-xl rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</main>

<main className="page-section pt-24 hidden min-h-screen" id="page-about">
<div className="max-w-4xl mx-auto px-6 py-12 animate-fade-up">
<h1 className="text-4xl md:text-5xl font-medium text-white mb-8">About FIRSTONSEARCH</h1>
<p className="text-lg text-zinc-400 leading-relaxed mb-12">
                We are a collective of data scientists, SEO engineers, and content strategists who realized the search landscape was shifting. The old agency model of "blog posts and backlinks" is obsolete. We built FIRSTONSEARCH to give brands a technical edge in the age of Artificial Intelligence.
            </p>
<div className="grid md:grid-cols-2 gap-8 mb-16">
<div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
<h3 className="text-xl font-medium text-white mb-4">Our Mission</h3>
<p className="text-zinc-400 text-sm leading-relaxed">To decode the algorithms of the future and ensure human-centric brands remain visible in an AI-curated world.</p>
</div>
<div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
<h3 className="text-xl font-medium text-white mb-4">Our Methodology</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Data over intuition. Code over copy. We believe that modern marketing is an engineering problem, and we solve it with precision.</p>
</div>
</div>
<h2 className="text-2xl font-medium text-white mb-8">Leadership</h2>
<div className="grid md:grid-cols-3 gap-6">
<div className="text-center">
<div className="w-24 h-24 bg-zinc-800 rounded-full mx-auto mb-4 border border-white/10"></div>
<div className="text-white font-medium">Alex Chen</div>
<div className="text-xs text-zinc-500">Founder &amp; CEO</div>
</div>
<div className="text-center">
<div className="w-24 h-24 bg-zinc-800 rounded-full mx-auto mb-4 border border-white/10"></div>
<div className="text-white font-medium">Sarah Miller</div>
<div className="text-xs text-zinc-500">Head of AI Strategy</div>
</div>
<div className="text-center">
<div className="w-24 h-24 bg-zinc-800 rounded-full mx-auto mb-4 border border-white/10"></div>
<div className="text-white font-medium">David Park</div>
<div className="text-xs text-zinc-500">Technical Director</div>
</div>
</div>
</div>
</main>

<main className="page-section pt-24 hidden min-h-screen" id="page-resources">
<div className="max-w-7xl mx-auto px-6 py-12 animate-fade-up">
<h1 className="text-4xl md:text-5xl font-medium text-white mb-6">Insights</h1>
<p className="text-zinc-400 mb-12">Deep dives into the mechanics of search, LLMs, and growth.</p>
<div className="grid md:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="aspect-video bg-zinc-900 rounded-xl mb-4 overflow-hidden border border-white/5 relative">
<div className="absolute inset-0 bg-zinc-800/50 group-hover:bg-zinc-800/30 transition-colors"></div>
</div>
<div className="text-xs text-indigo-400 mb-2 font-medium">AI SEO</div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-indigo-300 transition-colors">Optimizing for Google SGE: A Technical Guide</h3>
<p className="text-sm text-zinc-500">How to structure schema markup to appear in Search Generative Experience snapshots.</p>
</article>

<article className="group cursor-pointer">
<div className="aspect-video bg-zinc-900 rounded-xl mb-4 overflow-hidden border border-white/5 relative">
<div className="absolute inset-0 bg-zinc-800/50 group-hover:bg-zinc-800/30 transition-colors"></div>
</div>
<div className="text-xs text-indigo-400 mb-2 font-medium">LLM STRATEGY</div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-indigo-300 transition-colors">Reverse Engineering Claude 3 Citations</h3>
<p className="text-sm text-zinc-500">An analysis of 5,000 queries to determine what sources Anthropic's model trusts most.</p>
</article>

<article className="group cursor-pointer">
<div className="aspect-video bg-zinc-900 rounded-xl mb-4 overflow-hidden border border-white/5 relative">
<div className="absolute inset-0 bg-zinc-800/50 group-hover:bg-zinc-800/30 transition-colors"></div>
</div>
<div className="text-xs text-indigo-400 mb-2 font-medium">CASE STUDY</div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-indigo-300 transition-colors">From 0 to 100k Visitors with Programmatic SEO</h3>
<p className="text-sm text-zinc-500">How we built a content engine that scaled organic traffic without compromising quality.</p>
</article>
</div>
</div>
</main>

<main className="page-section pt-24 hidden min-h-screen" id="page-contact">
<div className="max-w-3xl mx-auto px-6 py-12 animate-fade-up">
<h1 className="text-4xl md:text-5xl font-medium text-white text-center mb-6">Let's Engineer Your Growth</h1>
<p className="text-zinc-400 text-center mb-12">Fill out the form below to book a strategy session. We'll audit your current visibility and propose a roadmap.</p>
<div className="bg-zinc-900 p-8 rounded-2xl border border-white/5 shadow-2xl">
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-2">First Name</label>
<input className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-zinc-700" placeholder="Jane" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-2">Last Name</label>
<input className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-zinc-700" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-2">Work Email</label>
<input className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-zinc-700" placeholder="jane@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-2">Company Website</label>
<input className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-zinc-700" placeholder="company.com" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-2">Service Interest</label>
<select className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all">
<option>AI Visibility Audit</option>
<option>Full SEO Strategy</option>
<option>Site Migration</option>
<option>Other</option>
</select>
</div>
<button className="w-full bg-white text-zinc-950 font-bold py-4 rounded-lg hover:bg-zinc-200 transition-colors" type="button">Request Strategy Call</button>
</form>
</div>
</div>
</main>

<footer className="bg-zinc-950 border-t border-white/5 mt-12 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">

<div className="col-span-2 lg:col-span-2">
<a className="text-lg font-semibold text-white tracking-tight flex items-center gap-2 mb-6" href="javascript:void(0)" onclick="router('home')">
<div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
<iconify-icon icon="solar:minimalistic-magnifer-linear" width="18"></iconify-icon>
</div>
                        FIRSTONSEARCH
                    </a>
<p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-sm">
                        Engineering visibility for the AI era. We build systems that rank in Google and get cited by Large Language Models like ChatGPT, Claude, and Gemini.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all" href="#">
<iconify-icon icon="solar:brand-github-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div>
<h3 className="text-white font-medium mb-6">Services</h3>
<ul className="space-y-4">
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="javascript:void(0)" onclick="router('services')">AI &amp; LLM Visibility</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="javascript:void(0)" onclick="router('services')">Technical SEO</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="javascript:void(0)" onclick="router('services')">Programmatic Content</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="javascript:void(0)" onclick="router('services')">SEO Migration</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="javascript:void(0)" onclick="router('services')">Performance Marketing</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="javascript:void(0)" onclick="router('services')">CRO &amp; Analytics</a></li>
</ul>
</div>

<div>
<h3 className="text-white font-medium mb-6">Company</h3>
<ul className="space-y-4">
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="javascript:void(0)" onclick="router('about')">About Us</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="javascript:void(0)" onclick="router('about')">Methodology</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Careers <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded ml-1">Hiring</span></a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Case Studies</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="javascript:void(0)" onclick="router('contact')">Contact</a></li>
</ul>
</div>

<div>
<h3 className="text-white font-medium mb-6">Stay Updated</h3>
<p className="text-xs text-zinc-500 mb-4">Latest search trends and LLM updates delivered weekly.</p>
<form className="space-y-3">
<input className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-zinc-600" placeholder="Enter your email" type="email"/>
<button className="w-full bg-white text-zinc-950 font-semibold text-sm py-2.5 rounded-lg hover:bg-zinc-200 transition-colors">Subscribe</button>
</form>
</div>
</div>

<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xs text-zinc-600">
                    © 2024 Firstonsearch Inc. All rights reserved.
                </div>
<div className="flex gap-6 text-xs text-zinc-500 font-medium">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Cookie Settings</a>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
<span className="text-xs text-zinc-500">Systems Operational</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
