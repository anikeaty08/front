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
      

<nav className="fixed top-0 inset-x-0 z-50 border-b border-zinc-200/50 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg tracking-tighter font-semibold text-zinc-950 flex items-center gap-2" href="#">
<div className="w-5 h-5 bg-zinc-950 rounded-sm flex items-center justify-center">
<span className="text-white text-[10px] font-bold">S</span>
</div>
                SELLENCE
            </a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#approach">Approach</a>
<a className="hover:text-zinc-900 transition-colors" href="#system">System</a>
<a className="hover:text-zinc-900 transition-colors" href="#pilot">Pilot</a>
<a className="hover:text-zinc-900 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden md:inline-flex text-xs font-medium text-zinc-600 hover:text-zinc-950 transition-colors px-3 py-2" href="#contact">
                    Client Login
                </a>
<a className="group relative inline-flex h-8 items-center justify-center overflow-hidden rounded-md bg-zinc-950 px-4 font-medium text-white transition-all duration-300 hover:bg-zinc-800 hover:w-auto" href="#pilot">
<span className="mr-2 text-xs">Start Pilot</span>
<span className="iconify group-hover:translate-x-1 transition-transform duration-300" data-icon="lucide:arrow-right" data-width="12"></span>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-zinc-200/40 to-transparent blur-3xl -z-10 rounded-full opacity-50"></div>
<div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="animate-fade-in" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 shadow-sm text-[11px] font-medium text-zinc-500 mb-8 hover:border-zinc-300 transition-colors cursor-default">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
                    Q4 Capacity: 2 Partners Remaining
                </div>
</div>
<h1 className="animate-fade-in text-5xl md:text-7xl lg:text-8xl font-medium text-zinc-950 tracking-[-0.03em] leading-[1.05] mb-8" style={{animationDelay: '0.2s'}}>
                Sales Execution <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-400 to-zinc-600">as a Service.</span>
</h1>
<p className="animate-fade-in text-lg md:text-xl text-zinc-500 font-normal max-w-xl mx-auto mb-12 leading-relaxed tracking-tight" style={{animationDelay: '0.3s'}}>
                We build, operate, and scale outbound sales systems for B2B tech companies. Predictable revenue without the headcount headache.
            </p>
<div className="animate-fade-in flex flex-col sm:flex-row items-center justify-center gap-4" style={{animationDelay: '0.4s'}}>
<a className="w-full sm:w-auto h-12 bg-zinc-950 text-white text-sm font-medium px-8 rounded-lg hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-zinc-200" href="#pilot">
                    Deploy 30-Day Pilot
                </a>
<a className="w-full sm:w-auto h-12 bg-white border border-zinc-200 text-zinc-900 text-sm font-medium px-8 rounded-lg hover:bg-zinc-50 hover:border-zinc-300 transition-all flex items-center justify-center gap-2" href="#contact">
                    View Process
                </a>
</div>

<div className="animate-fade-in mt-24 pt-10 border-t border-zinc-200/60 max-w-4xl mx-auto" style={{animationDelay: '0.5s'}}>
<p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest mb-6 text-center">Powering Growth For</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-50 hover:opacity-100 transition-opacity duration-500">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-zinc-800 rounded-full"></div>
<span className="font-semibold tracking-tight text-zinc-900">Acme</span>
</div>
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-zinc-800 rounded-sm rotate-45"></div>
<span className="font-semibold tracking-tight text-zinc-900">Nexus</span>
</div>
<div className="flex items-center gap-2">
<div className="w-5 h-5 border-2 border-zinc-800 rounded-full"></div>
<span className="font-semibold tracking-tight text-zinc-900">Oribt</span>
</div>
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-zinc-800 rounded-sm"></div>
<span className="font-semibold tracking-tight text-zinc-900">Structure</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-zinc-200" id="approach">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl font-medium text-zinc-950 tracking-tight mb-4">The Internal Sales Trap</h2>
<p className="text-zinc-500 text-lg">Founders spend 30% of their time managing sales teams that underperform. The traditional hiring model is broken for early-stage scaling.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-all duration-300 hover:shadow-sm">
<div className="h-10 w-10 bg-white rounded-lg border border-zinc-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
<span className="iconify text-red-500" data-icon="lucide:trending-down" data-width="20"></span>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">High Burn, Low Yield</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Hiring SDRs costs $60k-$90k base + tools + management overhead. Ramp time is 3+ months with zero guarantee of results.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-all duration-300 hover:shadow-sm">
<div className="h-10 w-10 bg-white rounded-lg border border-zinc-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
<span className="iconify text-orange-500" data-icon="lucide:hourglass" data-width="20"></span>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">Management Debt</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Technical founders aren't sales managers. Managing quotas, call coaching, and motivation drains focus from product.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-950 text-white shadow-xl relative overflow-hidden md:row-span-1">
<div className="absolute top-0 right-0 p-32 bg-zinc-800/30 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none"></div>
<div className="relative z-10">
<div className="h-10 w-10 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 border border-zinc-700">
<span className="iconify text-emerald-400" data-icon="lucide:zap" data-width="20"></span>
</div>
<h3 className="text-base font-semibold text-white mb-2">The SELLENCE Model</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                            Plug in a senior team immediately. We operate as a fractional CRO + SDR team. Proven playbooks, instant deployment.
                        </p>
<div className="w-full bg-zinc-800/50 rounded-full h-1.5 overflow-hidden">
<div className="bg-emerald-500 h-full w-[85%] rounded-full"></div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-zinc-400 font-medium uppercase tracking-wider">
<span>Speed</span>
<span className="text-emerald-400">Optimized</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32" id="system">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
<div>
<span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest pl-1">The System</span>
<h2 className="text-4xl font-medium text-zinc-950 tracking-tight mt-3">Precision Revenue Engineering</h2>
</div>
<a className="group flex items-center text-sm font-medium text-zinc-950 border-b border-zinc-300 pb-0.5 hover:border-zinc-900 transition-colors" href="#contact">
                    View Technical Specs
                    <span className="iconify ml-2 group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid lg:grid-cols-2 gap-12">

<div className="space-y-8">
<div className="flex gap-6 group">
<div className="shrink-0 pt-1">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center border border-zinc-200 group-hover:bg-zinc-950 group-hover:border-zinc-950 transition-colors duration-300">
<span className="text-xs font-bold text-zinc-500 group-hover:text-white">01</span>
</div>
</div>
<div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Hyper-Targeted Lists</h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-md">
                                We don't buy generic lists. We manually curate accounts based on intent signals, funding rounds, and hiring patterns to ensure high relevance.
                            </p>
</div>
</div>
<div className="flex gap-6 group">
<div className="shrink-0 pt-1">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center border border-zinc-200 group-hover:bg-zinc-950 group-hover:border-zinc-950 transition-colors duration-300">
<span className="text-xs font-bold text-zinc-500 group-hover:text-white">02</span>
</div>
</div>
<div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Multi-Channel Orchestration</h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-md">
                                A 14-touchpoint cadence blending cold calls, personalized email, and LinkedIn engagement. We persist until we get a yes or a no.
                            </p>
</div>
</div>
<div className="flex gap-6 group">
<div className="shrink-0 pt-1">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center border border-zinc-200 group-hover:bg-zinc-950 group-hover:border-zinc-950 transition-colors duration-300">
<span className="text-xs font-bold text-zinc-500 group-hover:text-white">03</span>
</div>
</div>
<div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">CRM &amp; Data Architecture</h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-md">
                                We setup Hubspot/Salesforce with proper automation, reporting, and pipeline stages so you own the data infrastructure forever.
                            </p>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-zinc-200 p-2 shadow-2xl shadow-zinc-200/50 rotate-1 hover:rotate-0 transition-transform duration-700">
<div className="bg-zinc-50 rounded-xl overflow-hidden h-full border border-zinc-100 relative">

<div className="p-6 border-b border-zinc-200 bg-white">
<div className="flex items-center justify-between mb-6">
<div className="space-y-1">
<div className="h-2 w-24 bg-zinc-200 rounded"></div>
<div className="h-4 w-32 bg-zinc-900 rounded"></div>
</div>
<div className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-medium rounded-full border border-emerald-100">
                                    +124% vs Prev
                                </div>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="p-4 bg-zinc-50 rounded-lg border border-zinc-100">
<div className="text-[10px] text-zinc-400 mb-1">Emails Sent</div>
<div className="text-lg font-semibold text-zinc-900">1,420</div>
</div>
<div className="p-4 bg-zinc-50 rounded-lg border border-zinc-100">
<div className="text-[10px] text-zinc-400 mb-1">Open Rate</div>
<div className="text-lg font-semibold text-zinc-900">48%</div>
</div>
<div className="p-4 bg-zinc-50 rounded-lg border border-zinc-100 bg-emerald-50/50 border-emerald-100/50">
<div className="text-[10px] text-emerald-600/70 mb-1">Meetings</div>
<div className="text-lg font-semibold text-emerald-700">24</div>
</div>
</div>
</div>

<div className="absolute inset-x-0 bottom-0 h-32 opacity-50">
<svg className="w-full h-full text-zinc-200" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 35 Q 25 35 30 20 T 60 25 T 100 5" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
<path d="M0 38 Q 25 38 30 25 T 60 30 T 100 15" fill="none" stroke="currentColor" stroke-dasharray="2 2" strokeWidth="0.5"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 relative overflow-hidden" id="pilot">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-800/30 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">
                Validate before you scale.
            </h2>
<p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                The 30-Day Pilot is designed to minimize risk. We deploy our system to a segment of your market. If we don't hit KPIs, you don't continue.
            </p>
<div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 md:p-12 text-left shadow-2xl relative group hover:border-zinc-700 transition-colors">
<div className="absolute top-0 right-0 p-px bg-gradient-to-l from-zinc-700 to-transparent w-1/2 h-px"></div>
<div className="grid md:grid-cols-2 gap-12">
<div>
<div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">Pilot Scope</div>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
                                Market Diagnosis &amp; Asset Audit
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
                                Build 1,000+ Contact Prospect List
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
                                Copywriting (Email, LinkedIn, Scripts)
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
                                30 Days of Intense Outreach
                            </li>
</ul>
</div>
<div className="flex flex-col justify-between border-t md:border-t-0 md:border-l border-zinc-800 pt-8 md:pt-0 md:pl-12">
<div>
<div className="text-xs text-zinc-500 mb-1">Investment</div>
<div className="text-3xl font-medium text-white tracking-tight">Flat Fee</div>
<div className="text-sm text-zinc-400 mt-1">+ Performance Bonus</div>
</div>
<a className="mt-8 block w-full py-4 bg-white text-zinc-950 text-center text-sm font-semibold rounded-lg hover:bg-zinc-200 transition-colors" href="#contact">
                            Apply for Pilot Access
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white" id="contact">
<div className="max-w-xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium text-zinc-950 tracking-tight">Diagnostic Call</h2>
<p className="text-zinc-500 mt-4 text-sm">
                    No pitch decks. We'll analyze your current sales process and determine if our system can increase your revenue velocity.
                </p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="group">
<label className="block text-[11px] font-medium text-zinc-400 mb-1.5 ml-1 group-focus-within:text-zinc-900 transition-colors">FIRST NAME</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-zinc-900 focus:ring-0 transition-all placeholder:text-zinc-300" placeholder="Jane" type="text"/>
</div>
<div className="group">
<label className="block text-[11px] font-medium text-zinc-400 mb-1.5 ml-1 group-focus-within:text-zinc-900 transition-colors">LAST NAME</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-zinc-900 focus:ring-0 transition-all placeholder:text-zinc-300" placeholder="Doe" type="text"/>
</div>
</div>
<div className="group">
<label className="block text-[11px] font-medium text-zinc-400 mb-1.5 ml-1 group-focus-within:text-zinc-900 transition-colors">WORK EMAIL</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-zinc-900 focus:ring-0 transition-all placeholder:text-zinc-300" placeholder="jane@company.com" type="email"/>
</div>
<div className="group">
<label className="block text-[11px] font-medium text-zinc-400 mb-1.5 ml-1 group-focus-within:text-zinc-900 transition-colors">WEBSITE</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-zinc-900 focus:ring-0 transition-all placeholder:text-zinc-300" placeholder="company.com" type="url"/>
</div>
<button className="w-full bg-zinc-950 text-white font-medium py-4 rounded-lg mt-6 hover:bg-zinc-800 hover:shadow-lg transition-all flex items-center justify-center gap-2 group" type="button">
                    Schedule Diagnostic
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</form>
</div>
</section>

<footer className="bg-zinc-50 border-t border-zinc-200 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
<div>
<a className="text-base tracking-tighter font-semibold text-zinc-950 flex items-center gap-2 mb-4" href="#">
                    SELLENCE
                </a>
<p className="text-xs text-zinc-400 max-w-xs leading-relaxed">
                    Building the infrastructure for B2B growth. <br/>Based in San Francisco &amp; London.
                </p>
</div>
<div className="flex gap-12 text-xs text-zinc-500">
<div className="flex flex-col gap-3">
<span className="font-semibold text-zinc-900">Company</span>
<a className="hover:text-zinc-900 transition-colors" href="#approach">Approach</a>
<a className="hover:text-zinc-900 transition-colors" href="#system">System</a>
<a className="hover:text-zinc-900 transition-colors" href="#pilot">Pricing</a>
</div>
<div className="flex flex-col gap-3">
<span className="font-semibold text-zinc-900">Legal</span>
<a className="hover:text-zinc-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Terms</a>
</div>
<div className="flex flex-col gap-3">
<span className="font-semibold text-zinc-900">Social</span>
<a className="hover:text-zinc-900 transition-colors" href="#">Twitter</a>
<a className="hover:text-zinc-900 transition-colors" href="#">LinkedIn</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-200 flex justify-between items-center text-[10px] text-zinc-400">
<span>© 2024 SELLENCE Inc.</span>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span>Systems Operational</span>
</div>
</div>
</footer>

    </>
  );
}
