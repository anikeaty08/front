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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200 glass">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-1">
<div className="h-6 w-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<iconify-icon icon="lucide:bar-chart-2" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter text-slate-900">GainTime</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Platform</a>
<a className="hover:text-slate-900 transition-colors" href="#">Solutions</a>
<a className="hover:text-slate-900 transition-colors" href="#">Enterprise</a>
<a className="hover:text-slate-900 transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 hidden sm:block" href="#">Log in</a>
<a className="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10" href="#">Book Demo</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden">
<div className="absolute inset-0 subtle-grid -z-10 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-8">
<span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
<span className="text-xs font-medium text-slate-600 uppercase tracking-wide">New: Finch Integration for Payroll Sync</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
                Stop burning capital in <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">unproductive meetings.</span>
</h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                Connect your organization's calendar and payroll. GainTime analyzes meeting costs, aligns discussions with strategic goals, and automates outcomes with AI.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="h-12 px-8 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 flex items-center gap-2">
                    Start Organization Audit
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-full bg-white text-slate-700 border border-slate-200 font-medium hover:bg-slate-50 transition-all flex items-center gap-2">
<iconify-icon icon="lucide:play-circle" strokeWidth="1.5" width="16"></iconify-icon>
                    Watch Product Tour
                </button>
</div>

<div className="relative max-w-5xl mx-auto rounded-xl border border-slate-200 shadow-2xl bg-white overflow-hidden group">

<div className="absolute top-0 left-0 right-0 h-10 bg-slate-50/50 border-b border-slate-100 flex items-center px-4 gap-2 z-10">
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
</div>

<div className="pt-10 flex h-[600px] text-left">

<div className="w-64 border-r border-slate-100 bg-slate-50/30 p-4 hidden md:flex flex-col justify-between">
<div className="space-y-6">
<div className="space-y-1">
<div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Organization</div>
<div className="flex items-center gap-3 px-3 py-2 bg-white border border-slate-200 rounded-lg shadow-sm">
<div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs font-bold">A</div>
<span className="text-sm font-medium text-slate-700">Acme Corp</span>
</div>
</div>
<div className="space-y-1">
<div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-md cursor-pointer">
<iconify-icon icon="lucide:layout-dashboard" width="16"></iconify-icon>
<span className="text-sm font-medium">Dashboard</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-indigo-600 bg-indigo-50/50 rounded-md cursor-pointer">
<iconify-icon icon="lucide:pie-chart" width="16"></iconify-icon>
<span className="text-sm font-medium">Insights</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-md cursor-pointer">
<iconify-icon icon="lucide:check-square" width="16"></iconify-icon>
<span className="text-sm font-medium">Action Items</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-md cursor-pointer">
<iconify-icon icon="lucide:users" width="16"></iconify-icon>
<span className="text-sm font-medium">Org Chart</span>
</div>
</div>
</div>
<div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-amber-500" icon="lucide:zap" width="16"></iconify-icon>
<span className="text-xs font-medium text-slate-700">Goal Alignment</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5 mb-1">
<div className="bg-amber-500 h-1.5 rounded-full" style={{width: '78%'}}></div>
</div>
<div className="text-[10px] text-slate-400">78% of meetings tagged to Q3 Goals</div>
</div>
</div>

<div className="flex-1 bg-white p-8 overflow-hidden">
<div className="flex justify-between items-end mb-8">
<div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">Financial Impact Analysis</h3>
<p className="text-sm text-slate-500 mt-1">Real-time cost analysis based on attendee payroll data.</p>
</div>
<div className="flex gap-2">
<div className="px-3 py-1.5 border border-slate-200 rounded-md text-xs font-medium text-slate-600 bg-slate-50">Last 30 Days</div>
<div className="px-3 py-1.5 border border-slate-200 rounded-md text-xs font-medium text-slate-600 bg-slate-50">Engineering</div>
</div>
</div>

<div className="grid grid-cols-3 gap-4 mb-8">
<div className="p-4 rounded-lg border border-slate-100 bg-slate-50/50">
<div className="text-xs font-medium text-slate-500 mb-2">Total Meeting Cost</div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">$142,500</div>
<div className="flex items-center gap-1 mt-2 text-rose-600 text-xs font-medium">
<iconify-icon icon="lucide:trending-up" width="12"></iconify-icon>
<span>+12% vs last month</span>
</div>
</div>
<div className="p-4 rounded-lg border border-slate-100 bg-slate-50/50">
<div className="text-xs font-medium text-slate-500 mb-2">Hours / Employee</div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">18.5 hrs</div>
<div className="flex items-center gap-1 mt-2 text-emerald-600 text-xs font-medium">
<iconify-icon icon="lucide:trending-down" width="12"></iconify-icon>
<span>-2.4% vs last month</span>
</div>
</div>
<div className="p-4 rounded-lg border border-slate-100 bg-slate-50/50">
<div className="text-xs font-medium text-slate-500 mb-2">Feedback Score</div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">4.2/5.0</div>
<div className="flex items-center gap-1 mt-2 text-slate-400 text-xs">
<span>Based on 842 ratings</span>
</div>
</div>
</div>

<div className="w-full h-48 border-b border-l border-slate-200 relative mb-8">

<div className="absolute bottom-0 left-8 w-12 h-32 bg-indigo-100 rounded-t-sm group-hover:bg-indigo-200 transition-colors"></div>
<div className="absolute bottom-0 left-24 w-12 h-24 bg-indigo-100 rounded-t-sm group-hover:bg-indigo-200 transition-colors"></div>
<div className="absolute bottom-0 left-40 w-12 h-40 bg-indigo-500 rounded-t-sm shadow-lg shadow-indigo-500/20"></div>
<div className="absolute bottom-0 left-56 w-12 h-28 bg-indigo-100 rounded-t-sm group-hover:bg-indigo-200 transition-colors"></div>
<div className="absolute bottom-0 left-72 w-12 h-36 bg-indigo-100 rounded-t-sm group-hover:bg-indigo-200 transition-colors"></div>

<div className="absolute top-0 w-full border-t border-slate-100 border-dashed"></div>
<div className="absolute top-1/2 w-full border-t border-slate-100 border-dashed"></div>
</div>

<div>
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Live &amp; Recent Meetings</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 border border-slate-100 rounded-lg hover:border-slate-300 transition-colors group/item">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
<div>
<div className="text-sm font-medium text-slate-900">Q3 Product Strategy Sync</div>
<div className="text-xs text-slate-500">Sales &amp; Product • 12 Attendees</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-slate-900">$1,240</div>
<div className="text-[10px] text-slate-400">Est. Cost / Hour</div>
</div>
</div>
<div className="flex items-center justify-between p-3 border border-slate-100 rounded-lg hover:border-slate-300 transition-colors">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-slate-300"></div>
<div>
<div className="text-sm font-medium text-slate-900">Weekly Design Review</div>
<div className="text-xs text-slate-500">Design Team • 6 Attendees</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-slate-900">$480</div>
<div className="text-[10px] text-slate-400">Est. Cost / Hour</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-slate-50 py-12">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm font-medium text-slate-500 mb-8">TRUSTED BY FORWARD-THINKING ENTERPRISES</p>
<div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold tracking-tight text-slate-800">ACME<span className="font-light">CORP</span></span>
<span className="text-xl font-semibold tracking-tighter text-slate-800 flex items-center gap-1"><iconify-icon icon="lucide:hexagon" width="20"></iconify-icon>POLYMER</span>
<span className="text-xl font-bold tracking-tight text-slate-800 italic">focal.point</span>
<span className="text-xl font-semibold tracking-tight text-slate-800">Stratos</span>
<span className="text-xl font-medium tracking-tight text-slate-800 flex items-center gap-1"><iconify-icon icon="lucide:layers" width="20"></iconify-icon>Layers</span>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-600 mb-6">
<iconify-icon icon="lucide:dollar-sign" width="14"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wide">Cost Intelligence</span>
</div>
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">
                        Visualize the true cost of collaboration.
                    </h2>
<p className="text-lg text-slate-600 leading-relaxed mb-8">
                        GainTime integrates seamlessly with HRIS platforms like Finch to assign real dollar values to every calendar invite. See where your budget is going—by team, project, or strategic goal.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-600 mt-1" icon="lucide:check-circle-2" width="20"></iconify-icon>
<span className="text-slate-700">Detailed hierarchy view for organization-wide audits.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-600 mt-1" icon="lucide:check-circle-2" width="20"></iconify-icon>
<span className="text-slate-700">Identify meeting heavy departments and optimize flow.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-600 mt-1" icon="lucide:check-circle-2" width="20"></iconify-icon>
<span className="text-slate-700">Tag meetings with strategic OKRs to ensure alignment.</span>
</li>
</ul>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-tr from-indigo-50 to-slate-50 rounded-full blur-3xl opacity-60"></div>
<div className="relative bg-white border border-slate-200 rounded-2xl shadow-xl p-8">

<div className="flex justify-between items-center mb-6">
<h4 className="font-semibold text-slate-900">Department Spending</h4>
<select className="text-xs border-none bg-slate-50 text-slate-600 rounded-md py-1 px-2 focus:ring-0 cursor-pointer">
<option>This Quarter</option>
</select>
</div>
<div className="space-y-6">

<div>
<div className="flex justify-between text-sm mb-2">
<span className="font-medium text-slate-700">Engineering</span>
<span className="font-medium text-rose-600">$42k <span className="text-slate-400 font-normal">/ mo</span></span>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-rose-500 w-[85%] rounded-full"></div>
</div>
</div>

<div>
<div className="flex justify-between text-sm mb-2">
<span className="font-medium text-slate-700">Marketing</span>
<span className="font-medium text-slate-900">$28k <span className="text-slate-400 font-normal">/ mo</span></span>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-400 w-[60%] rounded-full"></div>
</div>
</div>

<div>
<div className="flex justify-between text-sm mb-2">
<span className="font-medium text-slate-700">Product</span>
<span className="font-medium text-slate-900">$24k <span className="text-slate-400 font-normal">/ mo</span></span>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-400 w-[50%] rounded-full"></div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-100">
<div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
<div className="h-10 w-10 bg-white rounded-full flex items-center justify-center border border-slate-200 shadow-sm text-amber-500">
<iconify-icon icon="lucide:alert-triangle" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">High Trend Alert</div>
<div className="text-xs text-slate-500">Engineering spent 20% more time in meetings this week.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-4">Complete loop intelligence.</h2>
<p className="text-slate-500 text-lg">From the moment a meeting is scheduled to the final action item, GainTime manages the workflow.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">

<div className="md:col-span-2 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between overflow-hidden relative group">
<div className="relative z-10">
<div className="h-10 w-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-6 border border-indigo-100">
<iconify-icon icon="lucide:bot" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">The GainTime AI Scribe</h3>
<p className="text-slate-500 max-w-md">Our bot joins your calls, records video, generates summaries, and extracts action items automatically. No more lost context.</p>
</div>

<div className="absolute bottom-0 right-0 left-0 h-48 bg-gradient-to-t from-slate-50 to-white/0 border-t border-slate-100 p-6 flex flex-col gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="self-start bg-slate-100 text-slate-600 text-sm px-4 py-2 rounded-2xl rounded-tl-none max-w-sm">
                            Meeting started. Recording in progress...
                        </div>
<div className="self-start bg-indigo-50 text-indigo-700 border border-indigo-100 text-sm px-4 py-2 rounded-2xl rounded-tl-none max-w-sm flex gap-2 items-center">
<iconify-icon icon="lucide:sparkles" width="14"></iconify-icon>
                            Detected Action Item: Sarah to update the Q3 roadmap by Friday.
                        </div>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col relative overflow-hidden group">
<div className="h-10 w-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 mb-6 border border-amber-100">
<iconify-icon icon="lucide:star" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Quality Feedback</h3>
<p className="text-slate-500 text-sm">Attendees rate meetings post-call. Identify low-value recurring syncs.</p>
<div className="mt-8 flex items-center justify-center">
<div className="bg-white border border-slate-200 shadow-lg rounded-xl p-4 w-full max-w-[240px] group-hover:scale-105 transition-transform">
<div className="text-center text-sm font-medium text-slate-900 mb-3">Rate this meeting</div>
<div className="flex justify-center gap-2 text-slate-300">
<iconify-icon className="text-amber-400 fill-amber-400" icon="lucide:star" width="24"></iconify-icon>
<iconify-icon className="text-amber-400 fill-amber-400" icon="lucide:star" width="24"></iconify-icon>
<iconify-icon className="text-amber-400 fill-amber-400" icon="lucide:star" width="24"></iconify-icon>
<iconify-icon className="text-slate-200" icon="lucide:star" width="24"></iconify-icon>
<iconify-icon className="text-slate-200" icon="lucide:star" width="24"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col relative overflow-hidden group">
<div className="h-10 w-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-6 border border-emerald-100">
<iconify-icon icon="lucide:check-circle" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Unified Outbox</h3>
<p className="text-slate-500 text-sm">Track tasks assigned to others. Ensure accountability across the org.</p>
<div className="mt-8 space-y-2">
<div className="flex items-center gap-3 p-2 bg-slate-50 rounded-md border border-slate-100">
<div className="w-4 h-4 border-2 border-slate-300 rounded bg-white"></div>
<div className="text-xs text-slate-600 line-through">Send proposal to client</div>
</div>
<div className="flex items-center gap-3 p-2 bg-white rounded-md border border-slate-200 shadow-sm">
<div className="w-4 h-4 border-2 border-indigo-500 rounded bg-white"></div>
<div className="text-xs text-slate-900">Review design system</div>
<div className="ml-auto w-5 h-5 rounded-full bg-slate-200 text-[10px] flex items-center justify-center">JD</div>
</div>
</div>
</div>

<div className="md:col-span-2 bg-slate-900 rounded-2xl border border-slate-800 p-8 shadow-sm flex flex-col justify-between text-white relative overflow-hidden">
<div className="absolute top-0 right-0 p-32 bg-indigo-500/20 blur-3xl rounded-full pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-10 items-center h-full">
<div className="flex-1">
<div className="h-10 w-10 bg-slate-800 rounded-lg flex items-center justify-center text-white mb-6 border border-slate-700">
<iconify-icon icon="lucide:target" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2">Strategic Goal Alignment</h3>
<p className="text-slate-400 max-w-sm">Every meeting should have a purpose. Tag meetings with company OKRs and visualize where your time investment is going.</p>
</div>

<div className="w-64 h-64 relative flex items-center justify-center">
<div className="absolute inset-0 border border-slate-700 rounded-full opacity-30"></div>
<div className="absolute inset-8 border border-slate-700 rounded-full opacity-50"></div>
<div className="absolute inset-16 border border-slate-700 rounded-full opacity-70"></div>

<div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center z-20 shadow-[0_0_30px_rgba(79,70,229,0.5)]">
<span className="font-bold text-xs">GOALS</span>
</div>

<div className="absolute top-0 w-8 h-8 bg-slate-800 border border-slate-600 rounded-full flex items-center justify-center text-[10px] -translate-y-1/2">Q1</div>
<div className="absolute bottom-4 right-4 w-10 h-10 bg-slate-800 border border-slate-600 rounded-full flex items-center justify-center text-[10px] translate-y-1/2">Growth</div>
<div className="absolute bottom-4 left-4 w-10 h-10 bg-slate-800 border border-slate-600 rounded-full flex items-center justify-center text-[10px] translate-y-1/2">Tech</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-16">
<div className="flex-1 order-2 md:order-1">
<div className="bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden">
<div className="border-b border-slate-100 bg-slate-50 p-4 flex gap-4 text-xs font-medium text-slate-500">
<span className="text-slate-900">Personal</span>
<span>Direct Reports</span>
<span>Organization</span>
</div>
<div className="p-6">
<div className="mb-6">
<div className="text-sm text-slate-500 mb-1">Time Distribution</div>
<div className="flex h-4 w-full rounded-full overflow-hidden">
<div className="bg-indigo-500 w-[40%]"></div>
<div className="bg-rose-400 w-[20%]"></div>
<div className="bg-amber-400 w-[15%]"></div>
<div className="bg-slate-200 w-[25%]"></div>
</div>
<div className="flex gap-4 mt-3">
<div className="flex items-center gap-1.5 text-xs text-slate-600">
<div className="w-2 h-2 rounded-full bg-indigo-500"></div> Deep Work
                                    </div>
<div className="flex items-center gap-1.5 text-xs text-slate-600">
<div className="w-2 h-2 rounded-full bg-rose-400"></div> Ext. Meetings
                                    </div>
<div className="flex items-center gap-1.5 text-xs text-slate-600">
<div className="w-2 h-2 rounded-full bg-amber-400"></div> Int. Sync
                                    </div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-sm p-3 bg-slate-50 rounded-md">
<span className="text-slate-700">Recurring Meetings</span>
<span className="font-semibold text-slate-900">12 hrs/wk</span>
</div>
<div className="flex items-center justify-between text-sm p-3 bg-slate-50 rounded-md">
<span className="text-slate-700">Cost of Meetings</span>
<span className="font-semibold text-slate-900">$2,400/wk</span>
</div>
</div>
</div>
</div>
</div>
<div className="flex-1 order-1 md:order-2">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">
                        From personal habits to organizational shifts.
                    </h2>
<p className="text-lg text-slate-600 leading-relaxed mb-6">
                        GainTime scales with your needs. Managers can view insights for their direct reports to prevent burnout. Executives get a bird's-eye view of the entire organization's meeting culture.
                    </p>
<div className="space-y-4">
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
<span className="text-sm font-bold">1</span>
</div>
<div>
<h4 className="font-medium text-slate-900">Organizer Insights</h4>
<p className="text-sm text-slate-500 mt-1">See how your meetings are rated and how much they cost the company.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
<span className="text-sm font-bold">2</span>
</div>
<div>
<h4 className="font-medium text-slate-900">Attendee Trends</h4>
<p className="text-sm text-slate-500 mt-1">Understand your meeting load vs. deep work time.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
<span className="text-sm font-bold">3</span>
</div>
<div>
<h4 className="font-medium text-slate-900">Hierarchy Rollups</h4>
<p className="text-sm text-slate-500 mt-1">Aggregate data up the management chain automatically.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto bg-slate-900 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-3xl bg-indigo-500/20 blur-[100px] pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                    Ready to reclaim your organization's time?
                </h2>
<p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                    Join forward-thinking enterprises using GainTime to reduce meeting bloat, save millions in operational costs, and align teams.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-full bg-white text-slate-900 font-medium hover:bg-slate-100 transition-all w-full sm:w-auto">
                        Get a Custom Demo
                    </button>
<button className="h-12 px-8 rounded-full bg-slate-800 text-white border border-slate-700 font-medium hover:bg-slate-700 transition-all w-full sm:w-auto">
                        View Pricing
                    </button>
</div>
<p className="mt-8 text-xs text-slate-500">
                    SOC2 Compliant • Enterprise SSO • Priority Support
                </p>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="h-5 w-5 bg-slate-900 rounded flex items-center justify-center text-white">
<iconify-icon icon="lucide:bar-chart-2" width="12"></iconify-icon>
</div>
<span className="text-md font-semibold tracking-tight text-slate-900">GainTime</span>
</div>
<p className="text-sm text-slate-500 max-w-xs mb-6">
                        The operating system for effective meetings. Turn calendar data into strategic assets.
                    </p>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-slate-900" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="hover:text-slate-900" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
<a className="hover:text-slate-900" href="#"><iconify-icon icon="lucide:github" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Product</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Insights</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">AI Scribe</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Cost Analysis</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Integrations</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">About</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Customers</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 GainTime Inc. All rights reserved.</p>
<div className="flex gap-6">
<span className="flex items-center gap-1.5 text-xs text-slate-500">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span> Systems Operational
                    </span>
</div>
</div>
</div>
</footer>

    </>
  );
}
