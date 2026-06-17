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



        lucide.createIcons();
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] bg-gradient-to-b from-zinc-100/80 to-transparent rounded-full blur-3xl opacity-60"></div>
<div className="absolute inset-0 bg-grid-slate z-[-1]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-zinc-200/50 glass-panel">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-6 h-6 bg-zinc-900 rounded-md flex items-center justify-center text-white font-bold text-xs shadow-lg group-hover:rotate-3 transition-transform duration-300">T</div>
<span className="font-semibold tracking-tight text-sm">Tabels.io</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#features">Product</a>
<a className="hover:text-zinc-900 transition-colors" href="#compare">Comparison</a>
<a className="hover:text-zinc-900 transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-3">
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors hidden sm:block" href="#">Login</a>
<a className="bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium px-3 py-1.5 rounded-full transition-all shadow-sm hover:shadow-md" href="#">Get Started</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-5xl mx-auto px-6 text-center z-10 relative">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white/50 backdrop-blur-sm mb-8 stagger-1 shadow-sm">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-medium text-zinc-600">Enrichment 2.0 is here</span>
</div>

<h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tighter mb-6 text-gradient stagger-1 leading-[1.1]">
                The spreadsheet that <br className="hidden sm:block"/>
                fills itself.
            </h1>
<p className="text-lg sm:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed stagger-2">
                Scale your outbound data enrichment without the enterprise tax. <br className="hidden sm:block"/>
                10x more data coverage than Clay, for 1/10th the price.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 stagger-3">
<button className="group relative flex items-center gap-3 bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-200 px-5 py-3 rounded-lg transition-all shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:border-zinc-300">
<svg className="w-5 h-5" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
<span className="font-medium text-sm">Sign in with Google</span>
<i className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>

<div className="relative w-full max-w-[1000px] mx-auto stagger-3">

<div className="absolute -inset-1 bg-gradient-to-r from-zinc-200 via-zinc-100 to-zinc-200 rounded-xl blur opacity-30"></div>
<div className="relative bg-white rounded-xl border border-zinc-200 custom-shadow overflow-hidden">

<div className="h-10 border-b border-zinc-100 bg-zinc-50/50 flex items-center justify-between px-4">
<div className="flex items-center gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-200 border border-zinc-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-200 border border-zinc-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-200 border border-zinc-300"></div>
</div>
<div className="h-4 w-[1px] bg-zinc-200 mx-2"></div>
<div className="flex items-center gap-1.5 text-xs text-zinc-500">
<i className="w-3 h-3" data-lucide="layout-grid"></i>
<span className="font-medium">Leads_Q3_Enriched</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="text-[10px] font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md flex items-center gap-1">
<span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></span>
                                3 Active Agents
                            </div>
</div>
</div>

<div className="grid grid-cols-12 text-[10px] font-medium text-zinc-500 bg-white border-b border-zinc-100">
<div className="col-span-1 p-2 border-r border-zinc-100 flex items-center justify-center bg-zinc-50/30">#</div>
<div className="col-span-3 p-2 border-r border-zinc-100 flex items-center gap-1">
<i className="w-3 h-3 text-zinc-400" data-lucide="user"></i> Prospect
                        </div>
<div className="col-span-3 p-2 border-r border-zinc-100 flex items-center gap-1">
<i className="w-3 h-3 text-zinc-400" data-lucide="building-2"></i> Company
                        </div>
<div className="col-span-3 p-2 border-r border-zinc-100 flex items-center gap-1">
<i className="w-3 h-3 text-amber-400" data-lucide="sparkles"></i> AI Research
                        </div>
<div className="col-span-2 p-2 flex items-center gap-1">
<i className="w-3 h-3 text-zinc-400" data-lucide="mail"></i> Email
                        </div>
</div>

<div className="grid grid-cols-12 text-xs border-b border-zinc-50 hover:bg-zinc-50/50 transition-colors group">
<div className="col-span-1 p-2.5 border-r border-zinc-50 text-zinc-400 text-center text-[10px]">1</div>
<div className="col-span-3 p-2.5 border-r border-zinc-50 flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-gradient-to-br from-zinc-100 to-zinc-200"></div>
<span className="font-medium text-zinc-800">Sarah Jenkins</span>
</div>
<div className="col-span-3 p-2.5 border-r border-zinc-50 flex items-center gap-1.5">
<div className="w-4 h-4 rounded bg-black text-white flex items-center justify-center text-[8px] font-bold">V</div>
<span className="text-zinc-600">Vercel</span>
</div>
<div className="col-span-3 p-2.5 border-r border-zinc-50">
<div className="bg-amber-50 text-amber-700 px-2 py-0.5 rounded text-[10px] font-medium w-fit border border-amber-100/50">
                                Scaling Eng Team
                            </div>
</div>
<div className="col-span-2 p-2.5 flex items-center justify-between">
<span className="text-zinc-500 truncate">sarah@vercel.com</span>
<i className="w-3 h-3 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="check"></i>
</div>
</div>

<div className="grid grid-cols-12 text-xs border-b border-zinc-50 hover:bg-zinc-50/50 transition-colors group">
<div className="col-span-1 p-2.5 border-r border-zinc-50 text-zinc-400 text-center text-[10px]">2</div>
<div className="col-span-3 p-2.5 border-r border-zinc-50 flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[8px]">JM</div>
<span className="font-medium text-zinc-800">James Miller</span>
</div>
<div className="col-span-3 p-2.5 border-r border-zinc-50 flex items-center gap-1.5">
<div className="w-4 h-4 rounded bg-[#635bff] text-white flex items-center justify-center text-[8px] font-bold">S</div>
<span className="text-zinc-600">Stripe</span>
</div>
<div className="col-span-3 p-2.5 border-r border-zinc-50">
<div className="h-4 w-24 bg-zinc-100 rounded animate-pulse"></div>
</div>
<div className="col-span-2 p-2.5">
<div className="h-4 w-20 bg-zinc-100 rounded animate-pulse"></div>
</div>
</div>

<div className="grid grid-cols-12 text-xs border-b border-zinc-50 hover:bg-zinc-50/50 transition-colors opacity-60">
<div className="col-span-1 p-2.5 border-r border-zinc-50 text-zinc-400 text-center text-[10px]">3</div>
<div className="col-span-3 p-2.5 border-r border-zinc-50 flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-[8px]">EL</div>
<span className="font-medium text-zinc-800">Elena Li</span>
</div>
<div className="col-span-3 p-2.5 border-r border-zinc-50 flex items-center gap-1.5">
<div className="w-4 h-4 rounded bg-zinc-800 text-white flex items-center justify-center text-[8px] font-bold">L</div>
<span className="text-zinc-600">Linear</span>
</div>
<div className="col-span-3 p-2.5 border-r border-zinc-50">
<div className="h-4 w-16 bg-zinc-100 rounded"></div>
</div>
<div className="col-span-2 p-2.5">
<div className="h-4 w-24 bg-zinc-100 rounded"></div>
</div>
</div>

<div className="bg-zinc-50 border-t border-zinc-100 p-2 flex justify-between items-center">
<div className="text-[10px] text-zinc-400 px-2">1,240 rows loaded</div>
<div className="flex items-center gap-1 px-2">
<div className="w-16 h-1.5 bg-zinc-200 rounded-full overflow-hidden">
<div className="w-2/3 h-full bg-zinc-400 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="absolute -right-12 -top-12 w-24 h-24 bg-emerald-400/20 blur-[60px] rounded-full z-[-1]"></div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50/50 border-t border-zinc-200" id="compare">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl font-medium tracking-tight mb-4 text-zinc-900">Stop paying the "Credit" tax.</h2>
<p className="text-zinc-500 mb-8 leading-relaxed">
                        Legacy enrichment tools like Clay charge you per "credit". We charge for compute. It's 10x cheaper and unlimitedly scalable.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-lg bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-sm">
<i className="w-4 h-4 text-zinc-700" data-lucide="database"></i>
</div>
<div>
<h3 className="font-medium text-sm text-zinc-900">Bring your own keys</h3>
<p className="text-sm text-zinc-500 mt-1">Plug in OpenAI, Perplexity, or any API directly. No markup on tokens.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-lg bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-sm">
<i className="w-4 h-4 text-zinc-700" data-lucide="zap"></i>
</div>
<div>
<h3 className="font-medium text-sm text-zinc-900">Waterfall Enrichment</h3>
<p className="text-sm text-zinc-500 mt-1">Try free sources first. Fallback to paid only when necessary. Logic built-in.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/50 shadow-2xl z-0 rotate-2 transform scale-95 translate-y-2"></div>
<div className="relative bg-white rounded-2xl border border-zinc-200 shadow-xl p-8 z-10">
<div className="mb-6">
<p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-4">Cost to enrich 10,000 leads</p>

<div className="mb-6">
<div className="flex justify-between text-sm mb-2">
<span className="font-medium text-zinc-500">Clay.com</span>
<span className="font-medium text-zinc-900">$500.00</span>
</div>
<div className="w-full bg-zinc-100 rounded-full h-3 overflow-hidden relative">
<div className="absolute left-0 top-0 h-full bg-zinc-300 w-[100%] rounded-full"></div>

<div className="absolute inset-0 w-full h-full" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,255,255,0.2) 5px, rgba(255,255,255,0.2) 10px)'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-sm mb-2">
<span className="font-medium text-zinc-900">Tabels.io</span>
<span className="font-medium text-emerald-600">$49.00</span>
</div>
<div className="w-full bg-zinc-100 rounded-full h-3 overflow-hidden">
<div className="bg-emerald-500 w-[10%] h-full rounded-full shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
</div>
</div>
</div>
<div className="pt-6 border-t border-zinc-100 flex items-center justify-between">
<div className="text-xs text-zinc-400">
                                Based on Standard Plan usage
                            </div>
<div className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded border border-emerald-100">
                                10x Savings
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-200 bg-white" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4">Built for high-volume outbound.</h2>
<p className="text-zinc-500">Don't let your software be the bottleneck. <br/>Designed for speed, built for scale.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-6 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 hover:shadow-lg transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-zinc-700" data-lucide="bot"></i>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Multi-Agent Workflows</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Chain multiple AI agents together. Have one agent find the LinkedIn URL, and another draft the email.</p>
</div>

<div className="group p-6 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 hover:shadow-lg transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-zinc-700" data-lucide="layers"></i>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Universal Integration</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Connect to Apollo, HubSpot, Salesforce, and PostgreSQL with zero friction. Two-way sync included.</p>
</div>

<div className="group p-6 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 hover:shadow-lg transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-zinc-700" data-lucide="infinity"></i>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2">No Row Limits</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Load 100k+ rows without the browser crashing. Our virtualized grid technology handles heavy lifting.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200 relative overflow-hidden" id="pricing">
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4">Simple, transparent pricing</h2>
<p className="text-zinc-500">Pay for platform access, bring your own API keys for lowest cost.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-end">

<div className="p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm">
<h3 className="font-medium text-zinc-900">Starter</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-medium tracking-tight text-zinc-900">$0</span>
<span className="text-zinc-500">/mo</span>
</div>
<p className="text-sm text-zinc-500 mt-2 mb-6">Perfect for testing the waters.</p>
<button className="w-full py-2.5 rounded-lg border border-zinc-200 text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors">Get Started</button>
<ul className="mt-8 space-y-3 text-sm text-zinc-600">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-zinc-400" data-lucide="check"></i> 500 Rows / month</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-zinc-400" data-lucide="check"></i> 2 Active Tables</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-zinc-400" data-lucide="check"></i> Basic Integrations</li>
</ul>
</div>

<div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl text-white relative scale-105">
<div className="absolute -top-4 left-0 right-0 flex justify-center">
<div className="bg-emerald-500 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full text-emerald-950 shadow-lg">Most Popular</div>
</div>
<h3 className="font-medium text-zinc-100">Growth</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-medium tracking-tight text-white">$49</span>
<span className="text-zinc-400">/mo</span>
</div>
<p className="text-sm text-zinc-400 mt-2 mb-6">For serious outbound teams.</p>
<button className="w-full py-2.5 rounded-lg bg-white text-sm font-bold text-zinc-900 hover:bg-zinc-200 transition-colors">Start Free Trial</button>
<ul className="mt-8 space-y-3 text-sm text-zinc-300">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-400" data-lucide="check"></i> Unlimited Rows</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-400" data-lucide="check"></i> Unlimited Tables</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-400" data-lucide="check"></i> BYO API Keys</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-400" data-lucide="check"></i> Priority Support</li>
</ul>
</div>

<div className="p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm">
<h3 className="font-medium text-zinc-900">Agency</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-medium tracking-tight text-zinc-900">$149</span>
<span className="text-zinc-500">/mo</span>
</div>
<p className="text-sm text-zinc-500 mt-2 mb-6">For large teams and agencies.</p>
<button className="w-full py-2.5 rounded-lg border border-zinc-200 text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors">Contact Sales</button>
<ul className="mt-8 space-y-3 text-sm text-zinc-600">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-zinc-400" data-lucide="check"></i> Everything in Growth</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-zinc-400" data-lucide="check"></i> Team Permissions</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-zinc-400" data-lucide="check"></i> Custom SSO</li>
</ul>
</div>
</div>
</div>
</section>

<footer className="bg-white py-12 border-t border-zinc-200">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-zinc-900 rounded flex items-center justify-center text-white font-bold text-[10px]">T</div>
<span className="font-semibold tracking-tight text-sm text-zinc-900">Tabels.io</span>
</div>
<div className="text-xs text-zinc-400">
                © 2024 Tabels Inc. Crafted with precision.
            </div>
<div className="flex gap-6">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
</div>
</div>
</footer>


    </>
  );
}
