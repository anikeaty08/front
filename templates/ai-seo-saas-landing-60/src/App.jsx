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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
</div>
<span className="text-xl font-semibold tracking-tight">RankZilla</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#">Solutions</a>
<a className="hover:text-slate-900 transition-colors" href="#">Pricing</a>
<a className="hover:text-slate-900 transition-colors" href="#">Resources</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Sign in</a>
<a className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-full transition-all" href="#">
                    Start for Free
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 hero-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -z-10 opacity-60"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                New: ChatGPT Search Optimization
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                Grow Your Organic Traffic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">10× Faster</span> on Autopilot
            </h1>
<p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                RankZilla.AI researches keywords, writes fully optimized articles, publishes them to your site, and improves your rankings 24/7 — automatically.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
<a className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium rounded-full transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2" href="#">
                    Start for Free <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-base font-medium rounded-full transition-all flex items-center justify-center gap-2">
<svg className="w-5 h-5" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg>
                    Continue with Google
                </button>
</div>
<div className="flex flex-col items-center gap-3">
<div className="flex items-center gap-1 text-yellow-400">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<span className="text-slate-900 font-semibold ml-2 text-base">4.9/5 rating</span>
</div>
<p className="text-sm text-slate-500">Trusted by 10,000+ creators &amp; businesses • 98% see growth in 30 days</p>
</div>
</div>

<div className="max-w-6xl mx-auto px-6 mt-16">
<div className="rounded-xl border border-slate-200 bg-white shadow-2xl overflow-hidden relative">

<div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-amber-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="bg-white border border-slate-200 rounded-md px-3 py-1 text-xs text-slate-500 flex-1 text-center font-mono">rankzilla.ai/dashboard</div>
</div>

<div className="p-8 bg-white min-h-[500px] flex gap-6">

<div className="hidden md:block w-56 space-y-4">
<div className="h-8 w-32 bg-slate-100 rounded-md"></div>
<div className="space-y-2 pt-4">
<div className="h-8 w-full bg-blue-50 text-blue-600 rounded-md flex items-center px-3 text-sm font-medium">Dashboard</div>
<div className="h-8 w-full hover:bg-slate-50 rounded-md flex items-center px-3 text-sm text-slate-600">Content Plan</div>
<div className="h-8 w-full hover:bg-slate-50 rounded-md flex items-center px-3 text-sm text-slate-600">Keywords</div>
<div className="h-8 w-full hover:bg-slate-50 rounded-md flex items-center px-3 text-sm text-slate-600">Integrations</div>
</div>
</div>

<div className="flex-1">
<div className="flex justify-between items-center mb-6">
<div className="h-8 w-48 bg-slate-100 rounded-md"></div>
<div className="h-8 w-24 bg-blue-600 rounded-full"></div>
</div>

<div className="h-64 bg-slate-50 border border-slate-100 rounded-lg w-full mb-6 relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-100/50 to-transparent"></div>

<svg className="absolute bottom-0 w-full h-full text-blue-500" preserveaspectratio="none">
<path d="M0,200 C100,180 200,150 300,100 C400,120 500,80 600,40 L600,300 L0,300 Z" fill="rgba(59, 130, 246, 0.1)"></path>
<path d="M0,200 C100,180 200,150 300,100 C400,120 500,80 600,40" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="h-24 bg-white border border-slate-200 rounded-lg shadow-sm p-4">
<div className="text-xs text-slate-500 mb-1">Total Traffic</div>
<div className="text-2xl font-semibold text-slate-900">+12,405</div>
<div className="text-xs text-green-600 mt-2">▲ 24% vs last month</div>
</div>
<div className="h-24 bg-white border border-slate-200 rounded-lg shadow-sm p-4">
<div className="text-xs text-slate-500 mb-1">Articles Published</div>
<div className="text-2xl font-semibold text-slate-900">128</div>
<div className="text-xs text-slate-400 mt-2">Auto-pilot active</div>
</div>
<div className="h-24 bg-white border border-slate-200 rounded-lg shadow-sm p-4">
<div className="text-xs text-slate-500 mb-1">Keywords Ranked</div>
<div className="text-2xl font-semibold text-slate-900">4,592</div>
<div className="text-xs text-green-600 mt-2">▲ 8% this week</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Our Solution</h2>
<p className="text-lg text-slate-600">
                    You shouldn’t waste hours writing or pay agencies thousands just to grow. Forget juggling a dozen SEO tools. Our AI Agent does the work for you—driving traffic and revenue even while you sleep.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">

<div className="bg-white p-8 rounded-2xl border border-red-100 shadow-sm relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
<h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
<span className="p-1 rounded bg-red-100 text-red-600"><i className="w-4 h-4" data-lucide="x"></i></span>
                        Old way of getting traffic
                    </h3>
<ul className="space-y-4 text-slate-600 mb-8">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-red-400 mt-0.5 shrink-0" data-lucide="minus-circle"></i>
<span>Hours wasted writing blog posts manually</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-red-400 mt-0.5 shrink-0" data-lucide="minus-circle"></i>
<span>Expensive agencies ($3k+/mo)</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-red-400 mt-0.5 shrink-0" data-lucide="minus-circle"></i>
<span>Complex tools like Ahrefs/Semrush</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-red-400 mt-0.5 shrink-0" data-lucide="minus-circle"></i>
<span>Inconsistent publishing schedule</span>
</li>
</ul>

<div className="h-32 w-full bg-slate-50 rounded border border-slate-100 relative">
<svg className="absolute bottom-0 w-full h-full text-slate-300" preserveaspectratio="none">
<path d="M0,80 L50,85 L100,75 L150,82 L200,80 L250,85 L300,80 L400,80" fill="none" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="2"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center text-xs text-slate-400 font-medium uppercase tracking-wider">No Growth</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-xl ring-1 ring-blue-500/10 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
<h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
<span className="p-1 rounded bg-blue-100 text-blue-600"><i className="w-4 h-4" data-lucide="check"></i></span>
                        RankZilla Solution
                    </h3>
<ul className="space-y-4 text-slate-600 mb-8">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" data-lucide="check-circle-2"></i>
<span className="text-slate-900 font-medium">Fully automated content engine</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" data-lucide="check-circle-2"></i>
<span className="text-slate-900 font-medium">Fraction of the cost of an agency</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" data-lucide="check-circle-2"></i>
<span className="text-slate-900 font-medium">AI-driven keyword research included</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" data-lucide="check-circle-2"></i>
<span className="text-slate-900 font-medium">Daily publishing = Compound growth</span>
</li>
</ul>

<div className="h-32 w-full bg-blue-50/50 rounded border border-blue-100 relative overflow-hidden">
<svg className="absolute bottom-0 w-full h-full text-blue-500" preserveaspectratio="none">
<path d="M0,120 Q150,110 250,50 T400,0" fill="none" stroke="currentColor" strokeWidth="3"></path>
<path d="M0,120 Q150,110 250,50 T400,0 L400,128 L0,128 Z" fill="rgba(59,130,246,0.1)"></path>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 lg:gap-24">

<div className="md:w-1/3 md:sticky md:top-32 h-fit">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                        Your Entire SEO Workflow — Automated by AI
                    </h2>
<p className="text-lg text-slate-600 mb-8">
                        Stop juggling freelancers, tools, and spreadsheets. RankZilla handles everything.
                    </p>
<a className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700" href="#">
                        Start for Free <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>

<div className="md:w-2/3 space-y-12">

<div className="flex gap-6 group">
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
<i className="w-6 h-6" data-lucide="sparkles"></i>
</div>
<div className="w-px h-full bg-slate-200 my-2 group-last:hidden"></div>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">How the magic actually works</h3>
<p className="text-lg text-slate-600 leading-relaxed">
                                We handle all the heavy SEO work for you. Sit back and relax while we produce daily ranking content that keeps you ahead of your competitors.
                            </p>
</div>
</div>

<div className="flex gap-6 group">
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
<i className="w-6 h-6" data-lucide="search"></i>
</div>
<div className="w-px h-full bg-slate-200 my-2 group-last:hidden"></div>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Deep analysis of your business</h3>
<p className="text-lg text-slate-600 leading-relaxed">
                                We dive into your niche, study competitors, and understand your audience. Our system uncovers hidden keyword opportunities with strong traffic potential and low competition.
                            </p>
</div>
</div>

<div className="flex gap-6 group">
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
<i className="w-6 h-6" data-lucide="calendar"></i>
</div>
<div className="w-px h-full bg-slate-200 my-2 group-last:hidden"></div>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Get a powerful 30-day plan</h3>
<p className="text-lg text-slate-600 leading-relaxed">
                                Receive a tailored 30-day content strategy where each day targets high-value keywords designed to bring the fastest growth for your business.
                            </p>
</div>
</div>

<div className="flex gap-6 group">
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center shrink-0">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<div className="w-px h-full bg-slate-200 my-2 group-last:hidden"></div>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Generate articles on autopilot</h3>
<p className="text-lg text-slate-600 leading-relaxed">
                                We create and publish SEO-optimized articles every day based on your selected keywords. Your site grows automatically while you stay focused on what matters most.
                            </p>
</div>
</div>

<div className="flex gap-6 group">
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
<i className="w-6 h-6" data-lucide="upload-cloud"></i>
</div>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Publish articles automatically</h3>
<p className="text-lg text-slate-600 leading-relaxed">
                                Auto-publish to <strong>WordPress, Webflow, Framer (14+ connections)</strong> or integrate with your own platform using our <strong>flexible API</strong>.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white overflow-hidden relative">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-900 to-slate-900"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 text-sm font-medium mb-6 border border-yellow-400/20">
                        Why RankZilla?
                    </div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">
                        SEO is no longer only about Google. <span className="text-blue-400">ChatGPT is the new search engine.</span>
</h2>
<p className="text-lg text-slate-400 mb-8 leading-relaxed">
                        RankZilla optimizes for both. When users ask ChatGPT, Perplexity, or Claude about your industry, your RankZilla articles become the trusted sources these AI tools cite and recommend.
                    </p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-green-400" data-lucide="check"></i>
<span className="text-slate-200">Google Search Optimization</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-green-400" data-lucide="check"></i>
<span className="text-slate-200">ChatGPT Answers, Browsing, Citations</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-green-400" data-lucide="check"></i>
<span className="text-slate-200">Claude, Perplexity, Gemini Ranking</span>
</div>
</div>
<div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
<h4 className="text-white font-medium mb-2">We make sure you unlock:</h4>
<ul className="list-disc list-inside text-slate-400 space-y-1">
<li>New Growth Opportunities</li>
<li>More Visitors &amp; Customers</li>
<li>Compound Growth Over Time</li>
</ul>
</div>
</div>

<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-xl"></div>
<div className="relative bg-slate-800 rounded-xl border border-slate-700 overflow-hidden shadow-2xl">
<div className="grid grid-rows-2 h-[500px]">

<div className="p-6 border-b border-slate-700">
<div className="flex items-center gap-2 mb-4">
<div className="w-20 h-6 bg-slate-600 rounded"></div> 
<div className="flex-1 h-8 bg-slate-700 rounded-full border border-slate-600"></div>
</div>
<div className="space-y-3">
<div className="h-4 w-3/4 bg-blue-400/20 rounded"></div>
<div className="h-3 w-full bg-slate-600 rounded"></div>
<div className="h-3 w-5/6 bg-slate-600 rounded"></div>
</div>
</div>

<div className="p-6 bg-slate-800/50">
<div className="flex gap-4">
<div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-green-400" data-lucide="bot"></i>
</div>
<div className="space-y-2 w-full">
<div className="h-3 w-full bg-slate-600 rounded"></div>
<div className="h-3 w-full bg-slate-600 rounded"></div>
<div className="h-3 w-2/3 bg-slate-600 rounded"></div>
<div className="mt-4 p-3 bg-slate-700 rounded border border-slate-600 flex gap-3 items-center">
<div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-xs font-bold">RZ</div>
<div className="text-sm">
<div className="text-white font-medium">RankZilla Source</div>
<div className="text-slate-400 text-xs">Recommended answer</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                    Everything You Need to Scale Organic Growth on Autopilot
                </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-shadow">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
<i className="w-5 h-5" data-lucide="globe"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Write in your language</h3>
<p className="text-slate-600">Generate high-quality content in over <strong>150+ languages</strong>. Our AI creates articles in any language you need.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-shadow">
<div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
<i className="w-5 h-5" data-lucide="edit-3"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Edit article with AI</h3>
<p className="text-slate-600"><strong>Easily edit your article</strong> to meet your exact expectations, ensuring every word aligns with your vision.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-shadow">
<div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center mb-4">
<i className="w-5 h-5" data-lucide="key"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Generate unlimited keywords</h3>
<p className="text-slate-600">Generate <strong>unlimited sets of keywords</strong> until you find the perfect match for your content strategy.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-shadow">
<div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
<i className="w-5 h-5" data-lucide="image"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Auto Images</h3>
<p className="text-slate-600">RankZilla creates and inserts visuals that match your topic and brand, saving you hours of design time.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-shadow">
<div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
<i className="w-5 h-5" data-lucide="megaphone"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Auto Promotion</h3>
<p className="text-slate-600">Strategically places business mentions to turn every blog post into a converting sales page.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-shadow">
<div className="w-10 h-10 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4">
<i className="w-5 h-5" data-lucide="life-buoy"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Support</h3>
<p className="text-slate-600">Get expert assistance 24/7, ensuring smooth operation of all platform features whenever you need it.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<div className="w-12 h-12 bg-white rounded-full shadow border border-slate-100 flex items-center justify-center mx-auto mb-6">
<i className="w-6 h-6 text-blue-600" data-lucide="file-text"></i>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                    AI-crafted content that feels natural, human, and engaging.
                </h2>
<p className="text-lg text-slate-600">These samples were generated by RankZilla.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="h-48 bg-slate-200 flex items-center justify-center relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-purple-50"></div>
<span className="relative z-10 font-bold text-slate-300 text-4xl">Screenstory</span>
</div>
<div className="p-6">
<h4 className="font-semibold text-slate-900 mb-2">How to record professional screen demos</h4>
<a className="text-blue-600 font-medium text-sm hover:underline" href="#">Read article →</a>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="h-48 bg-slate-200 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50"></div>
<span className="relative z-10 font-bold text-slate-300 text-4xl">BigMotion</span>
</div>
<div className="p-6">
<h4 className="font-semibold text-slate-900 mb-2">Top 10 Video Editing Trends in 2025</h4>
<a className="text-blue-600 font-medium text-sm hover:underline" href="#">Read article →</a>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="h-48 bg-slate-200 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50"></div>
<span className="relative z-10 font-bold text-slate-300 text-4xl">Jenni.ai</span>
</div>
<div className="p-6">
<h4 className="font-semibold text-slate-900 mb-2">AI writing assistants: A complete guide</h4>
<a className="text-blue-600 font-medium text-sm hover:underline" href="#">Read article →</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-center text-slate-900 tracking-tight mb-16">
                Loved by growth hackers &amp; founders
            </h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-slate-300"></div>
<div>
<div className="font-medium text-slate-900">Alex Chen</div>
<div className="text-sm text-slate-500">@alexchen_dev</div>
</div>
<i className="w-4 h-4 text-slate-400 ml-auto" data-lucide="twitter"></i>
</div>
<p className="text-slate-700">RankZilla is insane. I set it up for my SaaS, and traffic doubled in 3 weeks without me writing a single word. The quality is actually scary good.</p>
</div>

<div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-slate-300"></div>
<div>
<div className="font-medium text-slate-900">Sarah Jones</div>
<div className="text-sm text-slate-500">@sarah_marketing</div>
</div>
<i className="w-4 h-4 text-slate-400 ml-auto" data-lucide="twitter"></i>
</div>
<p className="text-slate-700">Finally an AI SEO tool that understands intent. The articles aren't just keyword stuffing—they actually provide value. <span className="text-blue-600">#SEO #Growth</span></p>
</div>

<div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-slate-300"></div>
<div>
<div className="font-medium text-slate-900">Michael Ross</div>
<div className="text-sm text-slate-500">@mross_agency</div>
</div>
<i className="w-4 h-4 text-slate-400 ml-auto" data-lucide="twitter"></i>
</div>
<p className="text-slate-700">We replaced 3 freelance writers with RankZilla for our tier-2 content. Saved us about $4k/mo and the ranking results are identical.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-center text-slate-900 tracking-tight mb-6">Simple Pricing</h2>
<p className="text-center text-slate-600 mb-16">Start for free, scale as you grow.</p>
<div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="bg-white p-8 rounded-2xl border border-slate-200">
<h3 className="text-xl font-semibold text-slate-900">Starter</h3>
<div className="mt-4 flex items-baseline text-slate-900">
<span className="text-4xl font-bold tracking-tight">$0</span>
<span className="ml-1 text-xl font-medium text-slate-500">/mo</span>
</div>
<p className="mt-2 text-slate-500">Perfect for testing the waters.</p>
<a className="mt-8 block w-full bg-slate-100 text-slate-900 font-medium py-3 rounded-lg text-center hover:bg-slate-200 transition" href="#">Get Started</a>
<ul className="mt-8 space-y-4 text-slate-600 text-sm">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> 3 Articles / month</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> Basic Keyword Research</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> Manual Publishing</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border-2 border-blue-600 shadow-xl relative">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular</div>
<h3 className="text-xl font-semibold text-slate-900">Growth</h3>
<div className="mt-4 flex items-baseline text-slate-900">
<span className="text-4xl font-bold tracking-tight">$49</span>
<span className="ml-1 text-xl font-medium text-slate-500">/mo</span>
</div>
<p className="mt-2 text-slate-500">For serious bloggers &amp; startups.</p>
<a className="mt-8 block w-full bg-blue-600 text-white font-medium py-3 rounded-lg text-center hover:bg-blue-700 transition" href="#">Start Free Trial</a>
<ul className="mt-8 space-y-4 text-slate-600 text-sm">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-blue-600" data-lucide="check"></i> <strong>30 Articles / month</strong></li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-blue-600" data-lucide="check"></i> Advanced Keyword AI</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-blue-600" data-lucide="check"></i> Auto-Publishing (WP, Webflow)</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-blue-600" data-lucide="check"></i> Auto-Images included</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200">
<h3 className="text-xl font-semibold text-slate-900">Scale</h3>
<div className="mt-4 flex items-baseline text-slate-900">
<span className="text-4xl font-bold tracking-tight">$199</span>
<span className="ml-1 text-xl font-medium text-slate-500">/mo</span>
</div>
<p className="mt-2 text-slate-500">For agencies and multiple sites.</p>
<a className="mt-8 block w-full bg-slate-100 text-slate-900 font-medium py-3 rounded-lg text-center hover:bg-slate-200 transition" href="#">Contact Sales</a>
<ul className="mt-8 space-y-4 text-slate-600 text-sm">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> Unlimited Articles</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> 10+ Connected Sites</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> API Access</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> Priority Support</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group border border-slate-200 rounded-lg open:bg-slate-50 transition-colors">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-slate-900">
                        Will Google penalize AI content?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-slate-600 px-6 pb-6 pt-0 leading-relaxed">
                        No. Google has explicitly stated they care about content quality and helpfulness, regardless of how it is produced (human or AI). RankZilla focuses on creating high-value, helpful content that adheres to Google's EEAT guidelines.
                    </div>
</details>
<details className="group border border-slate-200 rounded-lg open:bg-slate-50 transition-colors">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-slate-900">
                        Does it work with my CMS?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-slate-600 px-6 pb-6 pt-0 leading-relaxed">
                        Yes! We integrate natively with WordPress, Webflow, Shopify, Framer, and Ghost. For custom sites, you can use our robust API or Zapier integration.
                    </div>
</details>
<details className="group border border-slate-200 rounded-lg open:bg-slate-50 transition-colors">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-slate-900">
                        Can I edit the articles before publishing?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-slate-600 px-6 pb-6 pt-0 leading-relaxed">
                        Absolutely. You can set the system to "Draft Mode" where you review and edit every article before it goes live, or set it to "Auto-Publish" for a hands-off experience.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 py-16">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white">
<i className="w-3 h-3" data-lucide="bar-chart-2"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">RankZilla</span>
</div>
<p className="text-slate-500 text-sm max-w-xs">
                    Automate your organic growth with the world's most advanced AI SEO agent.
                </p>
</div>
<div className="flex gap-16">
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Product</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-600" href="#">Features</a></li>
<li><a className="hover:text-blue-600" href="#">Integrations</a></li>
<li><a className="hover:text-blue-600" href="#">Pricing</a></li>
<li><a className="hover:text-blue-600" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-600" href="#">About</a></li>
<li><a className="hover:text-blue-600" href="#">Blog</a></li>
<li><a className="hover:text-blue-600" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-600" href="#">Privacy</a></li>
<li><a className="hover:text-blue-600" href="#">Terms</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-200 text-center text-sm text-slate-400">
            © 2025 RankZilla AI Inc. All rights reserved.
        </div>
</footer>


    </>
  );
}
