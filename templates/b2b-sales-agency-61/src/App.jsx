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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
blue: '#1A3D7C',
orange: '#FF6A3D',
green: '#28A745',
}
}
}
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
      

<nav className="glass-nav fixed w-full z-50 border-b border-slate-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold tracking-tighter">
            S
          </div>
<span className="text-slate-900 font-semibold tracking-tight text-lg">
            SELLENCE
          </span>
</div>
<a className="hidden md:flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors" href="#book">
          Book Diagnostic Call
          <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>

<header className="hero-pattern min-h-screen pt-32 pb-20 px-6 relative overflow-hidden flex items-center">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/4 -left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-100 text-xs font-medium mb-8">
<span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
            Revenue Engine™
          </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
            Predictable B2B Sales Pipeline in 30 Days
            <span className="text-white/40">— Or Don’t Continue With Us.</span>
</h1>
<p className="text-lg text-blue-100/90 mb-4 font-medium max-w-lg">
            No hiring. No team management. No empty promises.
          </p>
<p className="text-base text-blue-100/60 mb-8 font-light max-w-lg leading-relaxed">
            SELLENCE is a full-service external partner that builds and runs a
            real B2B sales system for companies aiming for tangible results in
            the European market.
          </p>
<div className="flex flex-col gap-6">
<div className="inline-block">
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-blue border border-white/10 text-white text-sm font-medium shadow-sm">
<iconify-icon className="text-brand-green" icon="lucide:check"></iconify-icon>
                We don’t consult. We don’t coach. We execute.
              </span>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-brand-orange hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 group w-full sm:w-auto" href="#book">
                Book Your Diagnostic Call
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="relative hidden lg:block">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30"></div>
<div className="relative bg-slate-900/90 border border-white/10 backdrop-blur-xl rounded-xl p-8 shadow-2xl">
<div className="flex justify-between items-center mb-8">
<div>
<div className="text-white font-medium">Pipeline Velocity</div>
<div className="text-xs text-slate-400">Execution Phase</div>
</div>
<div className="text-brand-green font-medium flex items-center gap-1 text-sm bg-brand-green/10 px-2 py-1 rounded">
<iconify-icon icon="lucide:activity" width="16"></iconify-icon>
                Live
              </div>
</div>

<div className="space-y-4">
<div className="space-y-2">
<div className="flex justify-between text-xs text-slate-400">
<span>ICP Identification</span>
<span className="text-white">Done</span>
</div>
<div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[100%] rounded-full pipeline-bar"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs text-slate-400">
<span>Outbound Campaigns</span>
<span className="text-white">Active</span>
</div>
<div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-purple-500 w-[85%] rounded-full pipeline-bar" style={{animationDelay: '0.2s'}}></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs text-slate-400">
<span>Discovery Calls</span>
<span className="text-white">Scheduled</span>
</div>
<div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-brand-orange w-[60%] rounded-full pipeline-bar" style={{animationDelay: '0.4s'}}></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs text-slate-400">
<span>Qualified Deals</span>
<span className="text-white">Validated</span>
</div>
<div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-brand-green w-[40%] rounded-full pipeline-bar" style={{animationDelay: '0.6s'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">
            The Problem Most B2B Companies Face
          </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 group">
<div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center mb-4">
<iconify-icon icon="lucide:hourglass" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-slate-900 font-medium mb-2">
              Hiring is Slow &amp; Expensive
            </h3>
<p className="text-sm text-slate-500">
              Building an internal sales team is expensive and slow.
            </p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 group">
<div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center mb-4">
<iconify-icon icon="lucide:anchor" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-slate-900 font-medium mb-2">Founders Stuck</h3>
<p className="text-sm text-slate-500">
              Founders get stuck selling instead of scaling the company.
            </p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 group">
<div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center mb-4">
<iconify-icon icon="lucide:cloud-off" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-slate-900 font-medium mb-2">No Clear Pipeline</h3>
<p className="text-sm text-slate-500">
              No clear, predictable pipeline leads to revenue instability.
            </p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 group">
<div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center mb-4">
<iconify-icon icon="lucide:globe" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-slate-900 font-medium mb-2">Expansion Risk</h3>
<p className="text-sm text-slate-500">
              Entering Europe carries cultural and operational risks.
            </p>
</div>
</div>

<div className="max-w-3xl mx-auto bg-red-50 rounded-2xl p-8 border border-red-100 text-center relative overflow-hidden">
<div className="relative z-10">
<h3 className="text-red-900 font-semibold mb-6">The Result</h3>
<div className="grid sm:grid-cols-3 gap-6 text-sm text-red-800">
<div className="flex flex-col items-center gap-2">
<iconify-icon icon="lucide:x-circle" width="24"></iconify-icon>
<span>Unstable revenue</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon icon="lucide:x-circle" width="24"></iconify-icon>
<span>Decisions based on gut feeling</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon icon="lucide:x-circle" width="24"></iconify-icon>
<span>Sales teams operating without a system</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-slate-900 to-slate-900 opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-4">
              The SELLENCE Difference
            </h2>
<p className="text-slate-400 mb-10 text-lg">
              SELLENCE builds and operates a fully integrated external sales
              engine.
            </p>
<div className="space-y-6">
<div className="flex gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
<div className="w-8 h-8 rounded bg-brand-blue/20 flex flex-shrink-0 items-center justify-center text-brand-blue">
<iconify-icon icon="lucide:target" width="18"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-white">
                    Identify your Ideal Customer Profile (ICP)
                  </h3>
</div>
</div>
<div className="flex gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
<div className="w-8 h-8 rounded bg-brand-blue/20 flex flex-shrink-0 items-center justify-center text-brand-blue">
<iconify-icon icon="lucide:message-square" width="18"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-white">
                    Craft sales messages tailored for the European market
                  </h3>
</div>
</div>
<div className="flex gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
<div className="w-8 h-8 rounded bg-brand-blue/20 flex flex-shrink-0 items-center justify-center text-brand-blue">
<iconify-icon icon="lucide:send" width="18"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-white">
                    Outbound campaigns via Email &amp; LinkedIn
                  </h3>
</div>
</div>
<div className="flex gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
<div className="w-8 h-8 rounded bg-brand-blue/20 flex flex-shrink-0 items-center justify-center text-brand-blue">
<iconify-icon icon="lucide:phone" width="18"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-white">
                    Discovery and qualification calls
                  </h3>
</div>
</div>
<div className="flex gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
<div className="w-8 h-8 rounded bg-brand-blue/20 flex flex-shrink-0 items-center justify-center text-brand-blue">
<iconify-icon icon="lucide:database" width="18"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-white">
                    Pipeline management inside a CRM
                  </h3>
</div>
</div>
<div className="flex gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
<div className="w-8 h-8 rounded bg-brand-blue/20 flex flex-shrink-0 items-center justify-center text-brand-blue">
<iconify-icon icon="lucide:bar-chart-2" width="18"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-white">
                    Clear, actionable reports based on real data
                  </h3>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="bg-slate-800 rounded-xl border border-slate-700 shadow-2xl p-6 relative overflow-hidden">

<div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="text-xs text-slate-400 font-mono">
                  sellence_dashboard.exe
                </div>
</div>

<div className="grid grid-cols-2 gap-4">

<div className="bg-slate-700/50 p-4 rounded-lg">
<div className="text-slate-400 text-xs mb-1">Qualified Leads</div>
<div className="text-white text-2xl font-semibold">124</div>
<div className="text-green-400 text-xs mt-1 flex items-center">
<iconify-icon icon="lucide:arrow-up" width="12"></iconify-icon>
                    12% vs last week
                  </div>
</div>

<div className="bg-slate-700/50 p-4 rounded-lg">
<div className="text-slate-400 text-xs mb-1">Discovery Calls</div>
<div className="text-white text-2xl font-semibold">38</div>
<div className="text-green-400 text-xs mt-1 flex items-center">
<iconify-icon icon="lucide:arrow-up" width="12"></iconify-icon>
                    5% vs last week
                  </div>
</div>
</div>

<div className="mt-6 bg-slate-700/30 rounded-lg p-4">
<div className="text-xs text-slate-400 mb-3 font-semibold uppercase tracking-wider">
                  Pipeline Stages
                </div>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="w-24 text-xs text-slate-400 text-right">
                      Cold
                    </div>
<div className="flex-1 h-2 bg-slate-600 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[90%]"></div>
</div>
<div className="w-8 text-xs text-white text-right">850</div>
</div>
<div className="flex items-center gap-3">
<div className="w-24 text-xs text-slate-400 text-right">
                      Contacted
                    </div>
<div className="flex-1 h-2 bg-slate-600 rounded-full overflow-hidden">
<div className="h-full bg-purple-500 w-[65%]"></div>
</div>
<div className="w-8 text-xs text-white text-right">420</div>
</div>
<div className="flex items-center gap-3">
<div className="w-24 text-xs text-slate-400 text-right">
                      Qualified
                    </div>
<div className="flex-1 h-2 bg-slate-600 rounded-full overflow-hidden">
<div className="h-full bg-brand-orange w-[35%]"></div>
</div>
<div className="w-8 text-xs text-white text-right">85</div>
</div>
<div className="flex items-center gap-3">
<div className="w-24 text-xs text-slate-400 text-right">
                      Proposal
                    </div>
<div className="flex-1 h-2 bg-slate-600 rounded-full overflow-hidden">
<div className="h-full bg-brand-green w-[15%]"></div>
</div>
<div className="w-8 text-xs text-white text-right">12</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">
            30 Days to a Clear Pipeline
          </h2>
</div>
<div className="relative max-w-5xl mx-auto">

<div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-slate-200 z-0"></div>
<div className="grid md:grid-cols-4 gap-8 relative z-10">

<div className="text-center md:text-left group">
<div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center text-sm font-bold mb-6 mx-auto md:mx-0 relative z-20 outline outline-8 outline-slate-50">
                1
              </div>
<h3 className="font-semibold text-slate-900 mb-3 text-lg">
                Week 1 – Setup
              </h3>
<ul className="text-sm text-slate-500 space-y-1">
<li>• Offer analysis</li>
<li>• Define ICP</li>
<li>• CRM configuration</li>
</ul>
</div>

<div className="text-center md:text-left group">
<div className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 text-slate-500 flex items-center justify-center text-sm font-bold mb-6 mx-auto md:mx-0 relative z-20 outline outline-8 outline-slate-50 group-hover:border-brand-blue group-hover:text-brand-blue transition-colors">
                2
              </div>
<h3 className="font-semibold text-slate-900 mb-3 text-lg">
                Week 2 – Launch
              </h3>
<ul className="text-sm text-slate-500 space-y-1">
<li>• Campaign rollout</li>
<li>• Message testing</li>
</ul>
</div>

<div className="text-center md:text-left group">
<div className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 text-slate-500 flex items-center justify-center text-sm font-bold mb-6 mx-auto md:mx-0 relative z-20 outline outline-8 outline-slate-50 group-hover:border-brand-blue group-hover:text-brand-blue transition-colors">
                3
              </div>
<h3 className="font-semibold text-slate-900 mb-3 text-lg">
                Week 3 – Qualification
              </h3>
<ul className="text-sm text-slate-500 space-y-1">
<li>• Discovery calls</li>
<li>• Performance optimization</li>
</ul>
</div>

<div className="text-center md:text-left group">
<div className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 text-slate-500 flex items-center justify-center text-sm font-bold mb-6 mx-auto md:mx-0 relative z-20 outline outline-8 outline-slate-50 group-hover:border-brand-blue group-hover:text-brand-blue transition-colors">
                4
              </div>
<h3 className="font-semibold text-slate-900 mb-3 text-lg">
                Week 4 – Pipeline
              </h3>
<ul className="text-sm text-slate-500 space-y-1">
<li>• Clear, actionable pipeline</li>
<li>• Decision report: continue or stop</li>
</ul>
</div>
</div>
<div className="mt-16 text-center">
<div className="inline-flex items-center gap-3 bg-brand-blue/5 border border-brand-blue/10 px-6 py-4 rounded-xl text-brand-blue font-medium">
<iconify-icon icon="lucide:check-circle" width="20"></iconify-icon>
              Outcome: A validated, predictable pipeline — or the freedom to
              stop, risk-free.
            </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-lg mx-auto bg-white rounded-3xl p-8 border border-slate-200 shadow-xl relative overflow-hidden">
<div className="absolute top-0 right-0 bg-blue-50 text-brand-blue text-xs font-bold px-4 py-2 rounded-bl-xl">
            TAILORED SOLUTIONS
          </div>
<div className="text-center mb-8">
<h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Strategic Growth Partnership
            </h2>
<p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
              We design a custom execution plan that fits your goals and growth
              stage, focused purely on ROI.
            </p>
</div>
<div className="space-y-6 mb-8">
<div className="text-sm font-semibold text-slate-900 border-b border-slate-100 pb-2">
              What you get:
            </div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-0.5 text-brand-blue">
<iconify-icon icon="lucide:check" strokeWidth="2.5" width="16"></iconify-icon>
</div>
<span className="text-sm text-slate-700">
                  Complete sales infrastructure setup
                </span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 text-brand-blue">
<iconify-icon icon="lucide:check" strokeWidth="2.5" width="16"></iconify-icon>
</div>
<span className="text-sm text-slate-700">
                  Dedicated execution team
                </span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 text-brand-blue">
<iconify-icon icon="lucide:check" strokeWidth="2.5" width="16"></iconify-icon>
</div>
<span className="text-sm text-slate-700">
                  Validated pipeline generation
                </span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 text-brand-blue">
<iconify-icon icon="lucide:check" strokeWidth="2.5" width="16"></iconify-icon>
</div>
<span className="text-sm text-slate-700">
                  Real-time insights &amp; transparency
                </span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 text-brand-blue">
<iconify-icon icon="lucide:check" strokeWidth="2.5" width="16"></iconify-icon>
</div>
<span className="text-sm text-slate-700">
                  Scalable growth framework
                </span>
</li>
</ul>
</div>
<div className="bg-slate-50 rounded-xl p-4 text-center mb-8">
<p className="text-sm font-medium text-slate-700">
              Focus on your product. We handle the revenue engine.
            </p>
</div>
<a className="block w-full text-center bg-brand-orange text-white font-semibold py-4 rounded-xl hover:bg-orange-500 transition-colors shadow-lg shadow-orange-500/20" href="#book">
            Schedule a Diagnostic Call
          </a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-5xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12">

<div>
<h3 className="text-xl font-semibold text-slate-900 mb-8 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<iconify-icon icon="lucide:check" width="16"></iconify-icon>
</div>
              Who This Works For
            </h3>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
<div className="text-brand-blue">
<iconify-icon icon="lucide:server" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900">
                  B2B SaaS &amp; Tech
                </span>
</div>
<div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
<div className="text-brand-blue">
<iconify-icon icon="lucide:briefcase" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900">
                  High-ticket services
                </span>
</div>
<div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
<div className="text-brand-blue">
<iconify-icon icon="lucide:map" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900">
                  Companies entering or expanding in Europe
                </span>
</div>
</div>
</div>

<div>
<h3 className="text-xl font-semibold text-slate-900 mb-8 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
<iconify-icon icon="lucide:x" width="16"></iconify-icon>
</div>
              Who This Is Not For
            </h3>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 bg-slate-100 rounded-lg border border-transparent opacity-75">
<div className="text-slate-400">
<iconify-icon icon="lucide:graduation-cap" width="20"></iconify-icon>
</div>
<span className="text-sm text-slate-500">
                  Not suitable for companies seeking training or consulting
                </span>
</div>
<div className="flex items-center gap-4 p-4 bg-slate-100 rounded-lg border border-transparent opacity-75">
<div className="text-slate-400">
<iconify-icon icon="lucide:box" width="20"></iconify-icon>
</div>
<span className="text-sm text-slate-500">
                  Not suitable for companies without a clear product
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-brand-blue text-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-full mb-8 text-brand-orange border border-white/20">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold mb-4">
          No Risk, Full Accountability
        </h2>
<p className="text-blue-100 text-xl mb-8 leading-relaxed">
          If SELLENCE doesn’t execute everything agreed in the CRM within 30
          days →
          <strong>full refund</strong>
          .
        </p>
<div className="inline-block bg-blue-900/50 backdrop-blur border border-blue-400/30 px-6 py-3 rounded-lg text-sm font-medium text-blue-200">
          Execution is under our control. We take the risk. You get results.
        </div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">
            Why SELLENCE
          </h2>
<p className="text-slate-500">
            We don’t sell dreams. We sell numbers and clarity.
          </p>
</div>
<div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">

<div className="grid grid-cols-1 md:grid-cols-2 bg-slate-50 border-b border-slate-200">
<div className="p-6 font-semibold text-slate-400 hidden md:block">
              Standard Agencies
            </div>
<div className="p-6 font-semibold text-brand-blue flex items-center gap-2 bg-blue-50/50 md:bg-transparent">
<span className="w-2 h-2 rounded-full bg-brand-blue"></span>
              The SELLENCE Standard
            </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 border-b border-slate-100 hover:bg-slate-50 transition-colors">
<div className="p-6 text-slate-500 flex items-center gap-3">
<iconify-icon className="text-slate-300" icon="lucide:shuffle" width="18"></iconify-icon>
              Varied quality &amp; ad-hoc processes
            </div>
<div className="p-6 text-slate-900 font-medium flex items-center gap-3">
<iconify-icon className="text-brand-green" icon="lucide:check-circle" width="18"></iconify-icon>
              One system, same standards for every client
            </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 border-b border-slate-100 hover:bg-slate-50 transition-colors">
<div className="p-6 text-slate-500 flex items-center gap-3">
<iconify-icon className="text-slate-300" icon="lucide:file-spreadsheet" width="18"></iconify-icon>
              Spreadsheets &amp; opaque data
            </div>
<div className="p-6 text-slate-900 font-medium flex items-center gap-3">
<iconify-icon className="text-brand-green" icon="lucide:check-circle" width="18"></iconify-icon>
              CRM is the single source of truth
            </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 border-b border-slate-100 hover:bg-slate-50 transition-colors">
<div className="p-6 text-slate-500 flex items-center gap-3">
<iconify-icon className="text-slate-300" icon="lucide:eye-off" width="18"></iconify-icon>
              Hidden metrics &amp; vague updates
            </div>
<div className="p-6 text-slate-900 font-medium flex items-center gap-3">
<iconify-icon className="text-brand-green" icon="lucide:check-circle" width="18"></iconify-icon>
              Full transparency
            </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 hover:bg-slate-50 transition-colors">
<div className="p-6 text-slate-500 flex items-center gap-3">
<iconify-icon className="text-slate-300" icon="lucide:lock" width="18"></iconify-icon>
              6-12 month lock-in contracts
            </div>
<div className="p-6 text-slate-900 font-medium flex items-center gap-3">
<iconify-icon className="text-brand-green" icon="lucide:check-circle" width="18"></iconify-icon>
              No long-term contracts
            </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden text-center" id="book">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-brand-blue/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-8">
          Explore, Understand, Decide
        </h2>
<p className="text-slate-300 text-lg mb-10 leading-relaxed">
          Take your time to explore how SELLENCE can transform your sales
          engine.
          <br/>
<span className="text-white font-medium">Understand</span>
          the European market for your product.
          <br/>
<span className="text-white font-medium">See</span>
          your pipeline come to life.
          <br/>
<span className="text-white font-medium">Get clear data</span>
          to make confident decisions.
        </p>
<div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 mb-10 inline-block text-left w-full max-w-lg">
<p className="text-slate-300 text-sm mb-6 text-center">
            When you’re ready, you can book a premium 15-minute diagnostic call.
          </p>
<a className="w-full flex items-center justify-center gap-3 bg-brand-orange hover:bg-orange-500 text-white font-semibold py-4 px-8 rounded-xl shadow-lg transition-all transform hover:scale-[1.02]" href="#">
<iconify-icon icon="lucide:calendar-clock" width="20"></iconify-icon>
            Book Your Diagnostic Call
          </a>
</div>
<p className="text-slate-500 text-xs">
          No commitment required. 15 minutes of pure value.
        </p>
</div>
</section>

<div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-4 z-50">
<a className="block w-full bg-brand-orange text-white text-center font-semibold py-3 rounded-lg shadow-lg" href="#book">
        Book Diagnostic Call
      </a>
</div>
<footer className="bg-white border-t border-slate-200 py-12 pb-28 md:pb-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-brand-blue rounded flex items-center justify-center text-white text-xs font-bold">
            S
          </div>
<span className="text-slate-900 font-semibold tracking-tight">
            SELLENCE
          </span>
</div>
<p className="text-slate-400 text-sm">
          © 2023 SELLENCE Revenue Engine™. All rights reserved.
        </p>
</div>
</footer>

    </>
  );
}
