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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="uppercase text-sm font-semibold text-white tracking-tight">Derek Baer</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-zinc-400 hover:text-white transition-colors" href="#schedule">
                Strategy Call
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium tracking-wide mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                REVENUE SYSTEMS ARCHITECTURE
            </div>
<h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6 max-w-5xl mx-auto">
                Add 32% Additional Revenue in 6 Months — <span className="text-zinc-500">Without Hiring More Reps or Slashing Margins.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 font-light max-w-3xl mx-auto mb-12 leading-relaxed">
                For CEOs, Founders, and Presidents of $25M–$750M Manufacturing &amp; Industrial Companies Who Want Accurate Forecasting, Faster Closings, and Sales Teams That Perform Without Constant Pressure.
            </p>

<div className="relative max-w-4xl mx-auto aspect-video bg-zinc-900 rounded-lg border border-white/10 shadow-2xl flex items-center justify-center group cursor-pointer overflow-hidden mb-12">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent z-10"></div>

<div className="absolute top-4 left-4 flex gap-2 z-20">
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
</div>
<div className="w-20 h-20 rounded-full bg-blue-600/90 text-white flex items-center justify-center relative z-20 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-white/10">
<iconify-icon icon="solar:play-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<p className="absolute bottom-6 left-6 z-20 text-sm font-medium text-white tracking-wide">WATCH THE BREAKDOWN</p>
</div>
<a className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded text-sm font-medium transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)]" href="#schedule">
                Book a Strategy Call
                <iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon>
</a>
<p className="mt-4 text-xs text-zinc-500">Limited availability for Q3/Q4 cohorts.</p>
</div>
</section>

<section className="bg-zinc-950 border-white/5 border-t pt-20 pb-20">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium tracking-widest text-zinc-500 uppercase mb-10">Trusted by Industrial Leaders</p>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-40 grayscale mb-24 items-center justify-items-center">
<div className="h-8 w-32 bg-zinc-800/50 rounded animate-pulse"></div>
<div className="h-8 w-32 bg-zinc-800/50 rounded animate-pulse"></div>
<div className="h-8 w-32 bg-zinc-800/50 rounded animate-pulse"></div>
<div className="h-8 w-32 bg-zinc-800/50 rounded animate-pulse"></div>
<div className="h-8 w-32 bg-zinc-800/50 rounded animate-pulse"></div>
<div className="h-8 w-32 bg-zinc-800/50 rounded animate-pulse"></div>
</div>
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">The Revenue Stagnation Trap</h2>
<p className="text-zinc-400 font-light">Identifying the structural failures in your current sales operation.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="hover:border-blue-500/30 transition-colors group bg-zinc-900/50 border-white/5 border rounded pt-6 pr-6 pb-6 pl-6">
<iconify-icon className="text-zinc-500 group-hover:text-blue-500 transition-colors mb-4" icon="solar:chart-2-linear" width="32"></iconify-icon>
<h3 className="font-medium text-white mb-2">Inaccurate Forecasting</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Revenue predictions miss targets quarter after quarter, destroying planning.</p>
</div>

<div className="bg-zinc-900/50 border border-white/5 p-6 rounded hover:border-blue-500/30 transition-colors group">
<iconify-icon className="text-zinc-500 group-hover:text-blue-500 transition-colors mb-4" icon="solar:clock-circle-linear" width="32"></iconify-icon>
<h3 className="text-white font-medium mb-2">Delayed Closings</h3>
<p className="leading-relaxed text-sm text-zinc-400">Deals stall late-stage and extend sales cycles unpredictably.</p>
</div>

<div className="bg-zinc-900/50 border border-white/5 p-6 rounded hover:border-blue-500/30 transition-colors group">
<iconify-icon className="text-zinc-500 group-hover:text-blue-500 transition-colors mb-4" icon="solar:filter-linear" width="32"></iconify-icon>
<h3 className="text-white font-medium mb-2">Not Enough Qualified Opportunities</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Pipeline volume looks healthy on paper — conversion does not.</p>
</div>

<div className="bg-zinc-900/50 border border-white/5 p-6 rounded hover:border-blue-500/30 transition-colors group">
<iconify-icon className="text-zinc-500 group-hover:text-blue-500 transition-colors mb-4" icon="solar:graph-down-linear" width="32"></iconify-icon>
<h3 className="text-white font-medium mb-2">Margin Erosion</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Reps rely on price cuts and discounts to win business.</p>
</div>

<div className="bg-zinc-900/50 border border-white/5 p-6 rounded hover:border-blue-500/30 transition-colors group">
<iconify-icon className="text-zinc-500 group-hover:text-blue-500 transition-colors mb-4" icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
<h3 className="text-white font-medium mb-2">Leadership Bottlenecks</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Sales leaders manage deals but don’t develop people.</p>
</div>

<div className="bg-zinc-900/50 border border-white/5 p-6 rounded hover:border-blue-500/30 transition-colors group">
<iconify-icon className="text-zinc-500 group-hover:text-blue-500 transition-colors mb-4" icon="solar:settings-linear" width="32"></iconify-icon>
<h3 className="text-white font-medium mb-2">Lack of Process Standardization</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Every rep sells differently. Results vary wildly.</p>
</div>

<div className="bg-zinc-900/50 border border-white/5 p-6 rounded hover:border-blue-500/30 transition-colors group">
<iconify-icon className="text-zinc-500 group-hover:text-blue-500 transition-colors mb-4" icon="solar:shield-warning-linear" width="32"></iconify-icon>
<h3 className="text-white font-medium mb-2">Weak Accountability</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Metrics are tracked but not enforced or coached against.</p>
</div>

<div className="bg-zinc-900/50 border border-white/5 p-6 rounded hover:border-blue-500/30 transition-colors group">
<iconify-icon className="text-zinc-500 group-hover:text-blue-500 transition-colors mb-4" icon="solar:danger-circle-linear" width="32"></iconify-icon>
<h3 className="text-white font-medium mb-2">Fear-Driven Culture</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Performance anxiety, job insecurity, and reactive selling behavior.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                    A Revenue Systems Architect.<br/>
<span className="text-zinc-500">Not a Motivational Speaker.</span>
</h2>
<p className="text-zinc-400 leading-relaxed mb-8">
                    Most sales training fails because it relies on temporary hype. We build permanent infrastructure. This isn't about teaching reps "tricks"—it's about installing an operating system for predictable growth.
                </p>
<div className="space-y-4">
<div className="flex items-start gap-4">
<iconify-icon className="text-blue-500 shrink-0 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<div>
<h4 className="text-white font-medium text-sm">Formulized, Milestone-Centric Sales Process</h4>
<p className="text-xs text-zinc-500 mt-1">Eliminate guesswork. Every stage has clear exit criteria.</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-blue-500 shrink-0 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<div>
<h4 className="text-white font-medium text-sm">Metrics That Actually Predict Revenue</h4>
<p className="text-xs text-zinc-500 mt-1">Leading indicators, not just lagging results.</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-blue-500 shrink-0 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<div>
<h4 className="text-white font-medium text-sm">Leadership Development for Managers</h4>
<p className="text-xs text-zinc-500 mt-1">Transforming deal-chasers into people-developers.</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-blue-500 shrink-0 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<div>
<h4 className="text-white font-medium text-sm">Coaching Systems That Scale</h4>
<p className="text-xs text-zinc-500 mt-1">Standardized feedback loops for continuous improvement.</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-blue-500 shrink-0 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<div>
<h4 className="text-white font-medium text-sm">Accountability Framework</h4>
<p className="text-xs text-zinc-500 mt-1">Driving behavioral change without micromanagement.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-square rounded-lg bg-zinc-800 border border-white/5 p-8 relative">

<div className="absolute inset-0 flex items-center justify-center opacity-30">
<iconify-icon className="text-zinc-700" icon="solar:structure-linear" width="300"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="bg-zinc-950/80 backdrop-blur border border-white/10 p-4 rounded mb-4 w-3/4 self-end">
<div className="h-2 w-12 bg-blue-600 rounded mb-2"></div>
<div className="h-2 w-full bg-zinc-800 rounded"></div>
</div>
<div className="bg-zinc-950/80 backdrop-blur border border-white/10 p-4 rounded mb-4 w-3/4">
<div className="h-2 w-12 bg-zinc-600 rounded mb-2"></div>
<div className="h-2 w-full bg-zinc-800 rounded"></div>
</div>
<div className="bg-zinc-950/80 backdrop-blur border border-white/10 p-4 rounded w-3/4 self-center">
<div className="h-2 w-12 bg-zinc-600 rounded mb-2"></div>
<div className="h-2 w-full bg-zinc-800 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950 pt-24 pb-24">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-12 text-center">Results from the Field</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

<div className="aspect-[9/16] bg-zinc-900 border border-white/10 rounded flex items-center justify-center relative group cursor-pointer">
<iconify-icon className="text-white/50 group-hover:text-blue-500 transition-colors" icon="solar:play-circle-linear" width="48"></iconify-icon>
<p className="absolute bottom-4 left-4 text-xs font-medium text-white">Manufacturing CEO</p>
</div>

<div className="aspect-[9/16] flex group cursor-pointer bg-zinc-900 border-white/10 border rounded relative items-center justify-center">
<iconify-icon className="text-white/50 group-hover:text-blue-500 transition-colors" icon="solar:play-circle-linear" width="48"></iconify-icon>
<p className="absolute bottom-4 left-4 text-xs font-medium text-white">VP of Sales</p>
</div>

<div className="aspect-[9/16] bg-zinc-900 border border-white/10 rounded flex items-center justify-center relative group cursor-pointer">
<iconify-icon className="text-white/50 group-hover:text-blue-500 transition-colors" icon="solar:play-circle-linear" width="48"></iconify-icon>
<p className="absolute bottom-4 left-4 text-xs font-medium text-white">Founder, Logistics</p>
</div>

<div className="aspect-[9/16] bg-zinc-900 border border-white/10 rounded flex items-center justify-center relative group cursor-pointer">
<iconify-icon className="text-white/50 group-hover:text-blue-500 transition-colors" icon="solar:play-circle-linear" width="48"></iconify-icon>
<p className="absolute bottom-4 left-4 text-xs font-medium text-white">Industrial Director</p>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-zinc-900/30 p-6 rounded border border-white/5">
<p className="text-sm text-zinc-300 italic mb-6">"Our forecasting was a joke. Now we hit within 3% every month. The system Derek installed removed the chaos."</p>
<div>
<p className="text-white font-medium text-sm">James Caldwell</p>
<p className="text-zinc-500 text-xs">CEO, Apex Industrial</p>
</div>
</div>
<div className="bg-zinc-900/30 p-6 rounded border border-white/5">
<p className="text-sm text-zinc-300 italic mb-6">"Finally, my sales managers are actually coaching instead of just firefighting. The culture shift has been massive."</p>
<div>
<p className="text-white font-medium text-sm">Sarah Jenkins</p>
<p className="text-zinc-500 text-xs">President, Core MFG</p>
</div>
</div>
<div className="bg-zinc-900/30 p-6 rounded border border-white/5">
<p className="text-sm text-zinc-300 italic mb-6">"We grew revenue 40% without adding a single headcount. It was all about process efficiency."</p>
<div>
<p className="text-white font-medium text-sm">Robert Chen</p>
<p className="text-zinc-500 text-xs">Founder, Skyward Systems</p>
</div>
</div>
<div className="bg-zinc-900/30 p-6 rounded border border-white/5">
<p className="text-sm text-zinc-300 italic mb-6">"Structured, no-nonsense, and effective. The ROI was clear within the first 90 days."</p>
<div>
<p className="text-white font-medium text-sm">Michael Ross</p>
<p className="text-zinc-500 text-xs">VP Sales, HeavyLift Corp</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight">Implementation Architecture</h2>
<p className="text-zinc-500 mt-2">Structured transformation over inspiration.</p>
</div>

<div className="hidden lg:grid grid-cols-6 gap-4 relative">

<div className="absolute top-8 left-0 w-full h-px bg-zinc-800 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center text-blue-500 mb-6 shadow-xl">
<iconify-icon icon="solar:stethoscope-linear" width="24"></iconify-icon>
</div>
<h4 className="text-white font-medium text-sm mb-2">Diagnostic &amp;<br/>Revenue Audit</h4>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center text-blue-500 mb-6 shadow-xl">
<iconify-icon icon="solar:flag-linear" width="24"></iconify-icon>
</div>
<h4 className="text-white font-medium text-sm mb-2">Milestone Process<br/>Implementation</h4>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center text-blue-500 mb-6 shadow-xl">
<iconify-icon icon="solar:user-speak-linear" width="24"></iconify-icon>
</div>
<h4 className="text-white font-medium text-sm mb-2">Leader Coaching<br/>&amp; Development</h4>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center text-blue-500 mb-6 shadow-xl">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h4 className="text-white font-medium text-sm mb-2">Metrics &amp;<br/>Accountability</h4>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center text-blue-500 mb-6 shadow-xl">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h4 className="text-white font-medium text-sm mb-2">Team Training<br/>&amp; Reinforcement</h4>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 bg-blue-900 border border-blue-500 rounded-full flex items-center justify-center text-white mb-6 shadow-xl shadow-blue-900/20">
<iconify-icon icon="solar:rocket-linear" width="24"></iconify-icon>
</div>
<h4 className="text-white font-medium text-sm mb-2">Optimization<br/>&amp; Scaling</h4>
</div>
</div>

<div className="lg:hidden space-y-8 pl-8 border-l border-zinc-800 ml-4">
<div className="relative">
<div className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs text-blue-500">1</div>
<h4 className="text-white font-medium mb-1">Diagnostic &amp; Revenue Audit</h4>
</div>
<div className="relative">
<div className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs text-blue-500">2</div>
<h4 className="text-white font-medium mb-1">Milestone Sales Process Implementation</h4>
</div>
<div className="relative">
<div className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs text-blue-500">3</div>
<h4 className="text-white font-medium mb-1">Sales Leader Coaching &amp; Development</h4>
</div>
<div className="relative">
<div className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs text-blue-500">4</div>
<h4 className="text-white font-medium mb-1">Metrics &amp; Accountability System Deployment</h4>
</div>
<div className="relative">
<div className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs text-blue-500">5</div>
<h4 className="text-white font-medium mb-1">Team Training &amp; Behavioral Reinforcement</h4>
</div>
<div className="relative">
<div className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-blue-600 border border-blue-400 flex items-center justify-center text-xs text-white">6</div>
<h4 className="text-white font-medium mb-1">Performance Optimization &amp; Scaling</h4>
</div>
</div>
</div>
</section>

<section className="bg-zinc-900 pt-24 pb-24">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-12">System Deliverables</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-zinc-900/80 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-blue-500/40 hover:bg-zinc-900 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)] transition-all duration-300 group relative">
<div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-6 border border-white/5 group-hover:border-blue-500/20 group-hover:bg-blue-500/10 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-blue-400 transition-colors" icon="solar:document-add-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-sm">Custom Sales Framework</h3>
<p className="text-xs text-zinc-500 mt-2 group-hover:text-zinc-400 transition-colors">Tailored milestone process.</p>
</div>
</div>
<div className="bg-zinc-900/80 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-blue-500/40 hover:bg-zinc-900 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)] transition-all duration-300 group relative">
<div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-6 border border-white/5 group-hover:border-blue-500/20 group-hover:bg-blue-500/10 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-blue-400 transition-colors" icon="solar:graph-new-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-sm">Forecast Accuracy Model</h3>
<p className="text-xs text-zinc-500 mt-2 group-hover:text-zinc-400 transition-colors">Predictable revenue tracking.</p>
</div>
</div>
<div className="bg-zinc-900/80 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-blue-500/40 hover:bg-zinc-900 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)] transition-all duration-300 group relative">
<div className="group-hover:opacity-100 transition-opacity duration-300 bg-blue-600/5 opacity-0 rounded-2xl absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-6 border border-white/5 group-hover:border-blue-500/20 group-hover:bg-blue-500/10 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-blue-400 transition-colors" icon="solar:crown-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-sm">Leadership Coaching</h3>
<p className="text-xs text-zinc-500 mt-2 group-hover:text-zinc-400 transition-colors">Executive 1-on-1 development.</p>
</div>
</div>
<div className="bg-zinc-900/80 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-blue-500/40 hover:bg-zinc-900 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)] transition-all duration-300 group relative">
<div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-6 border border-white/5 group-hover:border-blue-500/20 group-hover:bg-blue-500/10 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-blue-400 transition-colors" icon="solar:video-library-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-sm">Team Training Sessions</h3>
<p className="text-xs text-zinc-500 mt-2 group-hover:text-zinc-400 transition-colors">Live workshops &amp; roleplay.</p>
</div>
</div>
<div className="bg-zinc-900/80 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-blue-500/40 hover:bg-zinc-900 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)] transition-all duration-300 group relative">
<div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-6 border border-white/5 group-hover:border-blue-500/20 group-hover:bg-blue-500/10 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-blue-400 transition-colors" icon="solar:widget-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-sm">Metrics Dashboard</h3>
<p className="text-xs text-zinc-500 mt-2 group-hover:text-zinc-400 transition-colors">Visual KPI implementation.</p>
</div>
</div>
<div className="bg-zinc-900/80 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-blue-500/40 hover:bg-zinc-900 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)] transition-all duration-300 group relative">
<div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-6 border border-white/5 group-hover:border-blue-500/20 group-hover:bg-blue-500/10 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-blue-400 transition-colors" icon="solar:checklist-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-sm">Accountability Infrastructure</h3>
<p className="text-xs text-zinc-500 mt-2 group-hover:text-zinc-400 transition-colors">Standard operating procedures.</p>
</div>
</div>
<div className="bg-zinc-900/80 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-blue-500/40 hover:bg-zinc-900 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)] transition-all duration-300 group relative">
<div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-6 border border-white/5 group-hover:border-blue-500/20 group-hover:bg-blue-500/10 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-blue-400 transition-colors" icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-sm">Culture Alignment</h3>
<p className="text-xs text-zinc-500 mt-2 group-hover:text-zinc-400 transition-colors">Behavioral standard setting.</p>
</div>
</div>
<div className="bg-zinc-900/80 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-blue-500/40 hover:bg-zinc-900 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)] transition-all duration-300 group relative">
<div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-6 border border-white/5 group-hover:border-blue-500/20 group-hover:bg-blue-500/10 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-blue-400 transition-colors" icon="solar:refresh-circle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-sm">Improvement System</h3>
<p className="text-xs text-zinc-500 mt-2 group-hover:text-zinc-400 transition-colors">Iterative optimization loops.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950 relative overflow-hidden">
<div className="absolute inset-0 bg-blue-900/5"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<div className="border border-blue-500/30 bg-zinc-900/80 backdrop-blur-sm p-12 rounded-xl shadow-2xl">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                    Additional <span className="text-blue-500">32% Revenue</span> On Top of Existing Projected Growth Within 6 Months
                </h2>
<div className="w-full h-px bg-zinc-800 my-8"></div>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
<div className="bg-zinc-950 p-4 rounded border border-zinc-800 flex items-center gap-4">
<iconify-icon className="text-blue-500" icon="solar:shield-check-linear" width="32"></iconify-icon>
<div className="text-left">
<p className="text-xs text-zinc-500 uppercase tracking-wider">The Guarantee</p>
<p className="text-white text-sm font-medium">100% Refund if unsatisfied in 30 days.</p>
</div>
</div>
</div>
<a className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded text-sm font-medium transition-all w-full md:w-auto" href="#schedule">
                    Book a Strategy Call
                </a>
</div>
</div>
</section>

<section className="bg-zinc-900 pt-24 pb-24">
<div className="flex flex-col lg:flex-row gap-12 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-12 items-center">
<div className="lg:w-1/2">
<div className="aspect-[4/5] bg-zinc-800 rounded border border-white/5 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">

<div className="bg-gradient-to-t from-zinc-950 to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-8 left-8">
<h3 className="text-2xl font-semibold text-white">Derek Baer</h3>
<p className="text-blue-500 font-medium">Revenue Systems Architect</p>
</div>
</div>
</div>
<div className="lg:w-1/2">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">From Sales Trainer to Revenue Architect</h2>
<div className="space-y-6 text-zinc-400 font-light leading-relaxed">
<p>
                        I spent years as a high-level sales trainer. I saw the same pattern: companies would hire me for a "pep talk," revenue would spike for two weeks, and then baseline within a month.
                    </p>
<p>
                        Motivation is not a strategy.
                    </p>
<p className="">
                        I pivoted from teaching "sales tricks" to building revenue architecture. I work with industrial and manufacturing executives to install systems that function independently of individual rep talent.
                    </p>
<p className="">
                        My focus is long-term structure, leadership capability, and predictable scaling. We don't just train your team; we rebuild the engine they drive.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950 pt-24 pb-24">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-12 text-center">Common Questions</h2>
<div className="space-y-4">

<details className="group bg-zinc-900 border border-zinc-800 rounded overflow-hidden">
<summary className="flex cursor-pointer hover:bg-zinc-800/50 transition-colors select-none font-medium text-white pt-6 pr-6 pb-6 pl-6 items-center justify-between">
                        Is this only for manufacturing companies?
                        <iconify-icon className="group-open:rotate-180 transition-transform duration-300 text-zinc-500" height="16" icon="solar:alt-arrow-down-linear" style={{color: 'rgb(113, 113, 122)'}} width="16"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed border-t border-zinc-800/50 pt-4">
                        We specialize in B2B industrial, manufacturing, and logistics sectors with deal sizes typically ranging from $50k to $5M+. The systems apply to complex, consultative sales environments.
                    </div>
</details>

<details className="group bg-zinc-900 border border-zinc-800 rounded overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer text-white font-medium hover:bg-zinc-800/50 transition-colors select-none">
                        What size company is this best for?
                        <iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed border-t border-zinc-800/50 pt-4">
                        Our sweet spot is organizations between $25M and $750M in annual revenue. This stage typically has a sales team in place but lacks the scalable infrastructure to grow to the next level efficiently.
                    </div>
</details>

<details className="group bg-zinc-900 border border-zinc-800 rounded overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer text-white font-medium hover:bg-zinc-800/50 transition-colors select-none">
                        Does this require hiring new reps?
                        <iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed border-t border-zinc-800/50 pt-4">
                        No. The goal is to maximize the yield of your existing team. In fact, many clients find they can pause hiring because their current headcount becomes significantly more productive.
                    </div>
</details>

<details className="group bg-zinc-900 border border-zinc-800 rounded overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer text-white font-medium hover:bg-zinc-800/50 transition-colors select-none">
                        How disruptive is implementation?
                        <iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed border-t border-zinc-800/50 pt-4">
                        We build the plane while you fly it. Implementation is designed to integrate into daily workflows rather than stopping them. We require commitment from leadership, but we minimize downtime for reps.
                    </div>
</details>

<details className="group bg-zinc-900 border border-zinc-800 rounded overflow-hidden">
<summary className="flex cursor-pointer hover:bg-zinc-800/50 transition-colors select-none font-medium text-white pt-6 pr-6 pb-6 pl-6 items-center justify-between">
                        What happens after 6 months?
                        <iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed border-t border-zinc-800/50 pt-4">
                        The system is designed to be self-sustaining. Your leadership team will have the tools to run it. However, many clients choose to retain us for quarterly audit and optimization advisory.
                    </div>
</details>
</div>
</div>
</section>

<section className="bg-zinc-950 border-white/5 border-t pt-24 pb-24" id="schedule">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
                If Revenue Predictability Matters,<br/>This Is the Conversation to Have.
            </h2>
<p className="text-zinc-500 mb-12">Select a time below to audit your current sales infrastructure.</p>
<a className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded text-base font-medium transition-all shadow-lg shadow-blue-900/20 mb-12" href="#">
                Schedule Your Strategy Call
            </a>

<div className="bg-zinc-900 border border-zinc-800 rounded-lg h-[600px] flex flex-col items-center justify-center text-zinc-600">
<iconify-icon className="mb-4 opacity-50" icon="solar:calendar-date-linear" width="48"></iconify-icon>
<p className="text-sm font-mono">[Calendly Embed Placeholder]</p>
</div>
<div className="text-xs text-zinc-600 mt-12">© 2026 Derek Baer Revenue Architecture. All rights reserved.</div>
</div>
</section>

    </>
  );
}
