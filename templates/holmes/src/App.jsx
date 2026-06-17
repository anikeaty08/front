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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020408]/80 backdrop-blur-xl">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-lime-electric flex items-center justify-center text-black text-sm font-bold tracking-tighter">
                    H
                </div>
<span className="text-white font-semibold tracking-tight text-sm group-hover:text-lime-electric transition-colors">HOLMES</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium hover:text-white transition-colors" href="#features">Investigations</a>
<a className="text-xs font-medium hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="text-xs font-medium hover:text-white transition-colors" href="#customers">Evidence</a>
<a className="text-xs font-medium hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>

<div className="flex items-center gap-6">
<a className="hidden md:block text-xs font-medium hover:text-white transition-colors" href="#">Log in</a>
<a className="inline-flex items-center justify-center overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-lime-electric/50 hover:text-lime-electric focus:outline-none focus:ring-2 focus:ring-lime-electric focus:ring-offset-2 focus:ring-offset-black font-semibold text-white bg-white/5 h-8 border-white/10 border rounded pr-4 pl-4 relative" href="https://calendly.com/robbrechtdelrue-uur/30-min-call-with-robbrecht">
<span className="text-xs">Request Demo</span>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-plaid min-h-screen flex items-center">

<div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent pointer-events-none">
</div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020408_100%)] pointer-events-none opacity-80">
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="text-left animate-fade-in max-w-2xl">

<div className="inline-block px-3 py-1 bg-lime-electric rounded-sm mb-8">
<span className="text-[10px] uppercase tracking-widest font-bold text-black block leading-none pt-[1px]">AI QA Detective</span>
</div>

<h1 className="text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tighter text-lime-electric mb-6 leading-[0.85]">
            Holmes
        </h1>

<h2 className="text-4xl sm:text-5xl lg:text-6xl text-white font-medium tracking-tight mb-8 leading-[1.1]">
<span className="underline-highlight pb-1">Every</span> Release<br/>
                    Investigated.
        </h2>

<p className="text-lg text-slate-400 font-light mb-10 max-w-lg leading-relaxed">
            Automate your quality assurance with a detective that never sleeps. Holmes integrates with your GitHub
            workflow, analyzes regressions, and reports issues directly to Slack.
        </p>

<div className="w-12 h-0.5 bg-white/20 mb-10"></div>

<div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
<a className="h-12 px-8 rounded bg-lime-electric text-black hover:bg-[#b3e600] transition-all duration-300 text-sm font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(204,255,0,0.2)]" href="#">
                Start Investigation
            </a>
<a className="h-12 px-8 rounded bg-transparent border border-white/20 text-white text-sm font-medium hover:bg-white/5 transition-colors flex items-center gap-2" href="#">
<iconify-icon height="18" icon="solar:play-circle-linear" width="18"></iconify-icon>
                Watch Demo
            </a>
</div>
</div>

<div className="relative animate-fade-in hidden lg:block" style={{animationDelay: '0.2s'}}>
<div className="rounded-xl bg-[#0b1221] border border-white/10 p-1 shadow-2xl relative">

<div className="absolute -inset-4 bg-lime-electric/5 rounded-full blur-3xl -z-10"></div>
<div className="rounded-lg overflow-hidden bg-[#020408] min-h-[450px] flex flex-col relative border border-white/5">

<div className="h-12 border-b border-white/5 flex items-center justify-between px-4 bg-[#050a14]">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-white text-xs font-medium">
<div className="w-5 h-5 rounded bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<iconify-icon height="12" icon="ri:github-fill" width="12"></iconify-icon>
</div>
<span>acme/checkout-service</span>
</div>
<span className="text-slate-700 text-lg font-light">/</span>
<span className="text-slate-400 text-xs">Pull Requests</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]">
</div>
<span className="text-[10px] uppercase tracking-wider font-bold text-slate-500">Live</span>
</div>
</div>
<div className="flex flex-1">

<div className="w-14 border-r border-white/5 bg-[#03060d] flex flex-col items-center py-4 gap-4">
<div className="w-8 h-8 rounded-md bg-white/5 text-white flex items-center justify-center border border-white/10 hover:border-lime-electric/50 hover:text-lime-electric transition-colors cursor-pointer">
<iconify-icon height="18" icon="solar:widget-2-linear" width="18"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-md bg-transparent text-slate-500 flex items-center justify-center hover:bg-white/5 hover:text-white transition-colors cursor-pointer">
<iconify-icon height="18" icon="solar:bell-bing-linear" width="18"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-md bg-transparent text-slate-500 flex items-center justify-center hover:bg-white/5 hover:text-white transition-colors cursor-pointer">
<iconify-icon height="18" icon="solar:settings-linear" width="18"></iconify-icon>
</div>
<div className="mt-auto w-8 h-8 rounded-full bg-gradient-to-tr from-lime-electric to-emerald-400">
</div>
</div>

<div className="flex-1 bg-[#020408] p-6">
<h3 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-lime-electric" icon="solar:list-check-linear"></iconify-icon>
                            Recent Investigations
                        </h3>

<div className="bg-[#050a14] border border-red-500/20 rounded-lg p-4 mb-3 hover:border-red-500/40 transition-colors group cursor-pointer relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<span className="text-xs font-semibold text-white group-hover:text-red-400 transition-colors">Stripe Integration Update</span>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-slate-400 font-mono">#PR-842</span>
</div>
<div className="flex items-center gap-1.5 text-red-400 bg-red-950/20 px-2 py-0.5 rounded border border-red-900/30">
<iconify-icon height="10" icon="solar:danger-triangle-linear" width="10"></iconify-icon>
<span className="text-[10px] font-bold uppercase tracking-wide">Regression</span>
</div>
</div>
<p className="text-xs text-slate-400 mb-3">Detected latency spike in payment webhook
                                handler.</p>

<div className="flex items-center gap-2 pt-2 border-t border-white/5">
<div className="flex items-center gap-1 text-[10px] text-slate-500 bg-white/5 px-2 py-1 rounded">
<iconify-icon icon="ri:github-fill"></iconify-icon> acme/core
                                </div>
<div className="flex items-center gap-1 text-[10px] text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20">
<iconify-icon icon="ri:slack-fill"></iconify-icon> Alert sent to #dev-ops
                                </div>
</div>
</div>

<div className="bg-[#050a14] border border-white/5 rounded-lg p-4 mb-3 hover:border-lime-electric/30 transition-colors group cursor-pointer relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<span className="text-xs font-semibold text-white group-hover:text-lime-electric transition-colors">Frontend Component Refactor</span>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-slate-400 font-mono">#PR-841</span>
</div>
<div className="flex items-center gap-1.5 text-emerald-400 bg-emerald-950/20 px-2 py-0.5 rounded border border-emerald-900/30">
<iconify-icon height="10" icon="solar:check-circle-linear" width="10"></iconify-icon>
<span className="text-[10px] font-bold uppercase tracking-wide">Clean</span>
</div>
</div>
<p className="text-xs text-slate-400 mb-3">Visual regression tests passed. No UI anomalies
                                detected.</p>

<div className="flex items-center gap-2 pt-2 border-t border-white/5">
<div className="flex items-center gap-1 text-[10px] text-slate-500 bg-white/5 px-2 py-1 rounded">
<iconify-icon icon="ri:github-fill"></iconify-icon> acme/frontend
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

<section className="py-12 border-y border-white/5 bg-[#020408]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-semibold text-slate-500 mb-10 uppercase tracking-widest">Trusted by Engineering Teams</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 lg:gap-x-20 gap-y-8 opacity-60">

<a className="group transition-opacity hover:opacity-100" href="https://www.usebackbone.ai/" target="_blank">
<span className="text-xl font-bold tracking-tight text-white group-hover:text-lime-electric transition-colors">backbone.</span>
</a>

<a className="group transition-opacity hover:opacity-100" href="https://en.amplr.be/" target="_blank">
<div className="flex items-center gap-1">
<span className="text-xl font-light tracking-widest text-white uppercase group-hover:text-lime-electric transition-colors">AMPLR</span>
</div>
</a>

<a className="group transition-opacity hover:opacity-100" href="https://feedelity.io/" target="_blank">
<span className="text-xl font-medium text-white italic group-hover:text-lime-electric transition-colors">Feedelity</span>
</a>

<a className="group transition-opacity hover:opacity-100" href="https://www.aikido.dev/" target="_blank">
<div className="flex items-center gap-2">
<span className="text-xl font-black tracking-tighter text-white group-hover:text-lime-electric transition-colors">AIKIDO</span>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 relative bg-[#020408]" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center max-w-2xl mx-auto">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4">The Deduction Engine</h2>
<p className="text-slate-400">From discovery to validation, Holmes handles your entire QA workflow with the precision of a master detective.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 rounded border border-white/10 bg-white/[0.02] p-8 relative overflow-hidden group hover:border-lime-electric/30 transition-all duration-300">
<div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
<div className="w-64 h-64 bg-lime-electric rounded-full blur-[100px]"></div>
</div>
<div className="relative z-10">
<div className="w-10 h-10 rounded bg-lime-electric/10 flex items-center justify-center text-lime-electric mb-6 border border-lime-electric/20">
<iconify-icon height="20" icon="solar:chat-line-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Natural Language Investigation</h3>
<p className="text-sm text-slate-400 mb-8 max-w-sm">Define your test cases in plain English. Holmes translates your intent into comprehensive validation steps automatically.</p>

<div className="w-full bg-[#050a14] border border-white/10 rounded p-4 relative overflow-hidden flex flex-col gap-3">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-[10px] text-slate-500 font-bold">U</div>
<div className="bg-white/5 border border-white/10 text-slate-300 text-xs px-3 py-2 rounded rounded-tl-none">
                                     Verify that the user cannot proceed without a valid email.
                                 </div>
</div>
<div className="flex items-center gap-3 flex-row-reverse">
<div className="w-6 h-6 rounded bg-lime-electric flex items-center justify-center text-[10px] text-black font-bold">H</div>
<div className="bg-lime-electric/5 border border-lime-electric/20 text-lime-electric text-xs px-3 py-2 rounded rounded-tr-none w-full">
<div className="flex items-center gap-2 mb-2 text-[10px] opacity-70 uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-lime-electric animate-pulse"></span> Analyzing Flow
                                     </div>
<div className="space-y-1 font-mono text-[10px] text-white/70">
<div>&gt; Identify input[type="email"]</div>
<div>&gt; Attempt submit with invalid string</div>
<div>&gt; Expect validation error message</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-2 rounded border border-white/10 bg-white/[0.02] p-8 relative overflow-hidden group hover:border-red-500/30 transition-all duration-300">
<div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-red-900/10 to-transparent z-0"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-10 h-10 rounded bg-red-500/10 flex items-center justify-center text-red-500 mb-6 border border-red-500/20">
<iconify-icon height="20" icon="solar:bug-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Evidence Locker</h3>
<p className="text-sm text-slate-400 mb-8">Detailed bug reports generated instantly.</p>
<div className="mt-auto space-y-3">

<div className="p-3 rounded bg-[#0a0a0a] border border-white/10 shadow-lg relative overflow-hidden group-hover:border-red-500/30 transition-colors">
<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-red-500"></div>
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-semibold text-white">Crash on Payment</span>
<span className="text-[9px] bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded uppercase font-bold">Critical</span>
</div>
<div className="flex gap-2 mb-2">
<div className="h-10 w-16 bg-slate-800 rounded border border-white/5 flex items-center justify-center">
<iconify-icon className="text-slate-600" height="16" icon="solar:gallery-wide-linear" width="16"></iconify-icon>
</div>
<div className="flex-1 space-y-1.5 py-1">
<div className="h-1.5 w-full bg-slate-800 rounded"></div>
<div className="h-1.5 w-2/3 bg-slate-800 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="rounded border border-white/10 bg-white/[0.02] p-8 relative overflow-hidden group hover:border-lime-electric/30 transition-all duration-300">
<div className="w-10 h-10 rounded bg-lime-electric/10 flex items-center justify-center text-lime-electric mb-6 border border-lime-electric/20">
<iconify-icon height="20" icon="solar:graph-new-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Case Status</h3>
<p className="text-sm text-slate-400 mb-4">Track coverage, pass rates, and impact at a glance.</p>
<div className="flex items-center gap-4 mt-auto">
<div className="flex-1">
<div className="flex justify-between text-[10px] text-slate-400 mb-1">
<span>Coverage</span>
<span className="text-lime-electric">94%</span>
</div>
<div className="h-1 bg-slate-800 w-full overflow-hidden">
<div className="h-full bg-lime-electric w-[94%] shadow-[0_0_10px_rgba(204,255,0,0.5)]"></div>
</div>
</div>
</div>
</div>

<div className="rounded border border-white/10 bg-white/[0.02] p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-300">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white mb-6 border border-white/10">
<iconify-icon height="20" icon="solar:link-circle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Scotland Yard Sync</h3>
<p className="text-sm text-slate-400 mb-6">Seamless integration with your ecosystem.</p>
<div className="flex items-center gap-3 text-slate-400">
<iconify-icon className="hover:text-white transition-colors" height="20" icon="ri:github-fill" width="20"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" height="20" icon="ri:slack-fill" width="20"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" height="20" icon="ri:trello-fill" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#020408]" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white tracking-tight text-center mb-12" style={{}}>Pricing</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="p-8 rounded border border-white/10 bg-transparent hover:bg-white/[0.02] transition-colors flex flex-col items-start">
<h3 className="text-white font-medium mb-2">Amateur</h3>
<p className="text-3xl font-bold text-white mb-6">$0
                    <span className="text-sm text-slate-500 font-normal">/ mo</span>
</p>
<ul className="space-y-3 mb-8 w-full">
<li className="flex items-center gap-3 text-xs text-slate-300">
<iconify-icon className="text-slate-500" height="14" icon="solar:check-circle-linear" width="14"></iconify-icon> 50 Cases / mo
                    </li>
<li className="flex items-center gap-3 text-xs text-slate-300">
<iconify-icon className="text-slate-500" height="14" icon="solar:check-circle-linear" width="14"></iconify-icon> 1 Investigator
                    </li>
</ul>
<a className="w-full py-2 rounded border border-white/10 text-white text-xs font-medium hover:bg-white/5 transition-colors mt-auto text-center" href="#">Start
                    Free</a>
</div>

<div className="p-8 rounded border border-lime-electric bg-lime-electric/[0.02] transition-colors flex flex-col items-start relative shadow-[0_0_30px_rgba(204,255,0,0.05)]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lime-electric text-black text-[10px] font-bold px-2 py-0.5 tracking-wide uppercase">
                    Recommended</div>
<h3 className="text-lime-electric font-medium mb-2">Inspector</h3>
<p className="text-3xl font-bold text-white mb-6">$49
                    <span className="text-sm text-slate-500 font-normal">/ mo</span>
</p>
<ul className="space-y-3 mb-8 w-full">
<li className="flex gap-3 text-xs text-slate-300 gap-x-3 gap-y-3 items-center">
<iconify-icon className="text-lime-electric" height="14" icon="solar:check-circle-linear" width="14"></iconify-icon>
                        500 Cases
                    </li>
<li className="flex items-center gap-3 text-xs text-slate-300">
<iconify-icon className="text-lime-electric" height="14" icon="solar:check-circle-linear" width="14"></iconify-icon> GitHub Sync
                    </li>
</ul>
<a className="w-full py-2 rounded bg-lime-electric text-black text-xs font-bold hover:bg-lime-300 transition-colors mt-auto text-center" href="#">Get
                    Started</a>
</div>

<div className="p-8 rounded border border-white/10 bg-transparent hover:bg-white/[0.02] transition-colors flex flex-col items-start">
<h3 className="text-white font-medium mb-2">Chief</h3>
<p className="text-3xl font-bold text-white mb-6">Custom</p>
<ul className="space-y-3 mb-8 w-full">
<li className="flex items-center gap-3 text-xs text-slate-300">
<iconify-icon className="text-slate-500" height="14" icon="solar:check-circle-linear" width="14"></iconify-icon> Unlimited Cases
                    </li>
<li className="flex items-center gap-3 text-xs text-slate-300">
<iconify-icon className="text-slate-500" height="14" icon="solar:check-circle-linear" width="14"></iconify-icon> Dedicated Support
                    </li>
</ul>
<a className="w-full py-2 rounded border border-white/10 text-white text-xs font-medium hover:bg-white/5 transition-colors mt-auto text-center" href="#">Contact
                    Sales</a>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#010205] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 rounded bg-lime-electric flex items-center justify-center text-black text-xs font-bold">H</div>
<span className="text-white font-semibold text-sm tracking-tight">HOLMES</span>
</a>
<p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                        221B Baker Street<br/>
                        London, NW1 6XE<br/><br/>
                        Employee Equity Opportunity
                    </p>
</div>
<div>
<h4 className="text-white text-xs font-semibold mb-4">Platform</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-lime-electric transition-colors" href="#">Deduction Engine</a></li>
<li><a className="hover:text-lime-electric transition-colors" href="#">Integrations</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-semibold mb-4">Company</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-lime-electric transition-colors" href="#">About</a></li>
<li><a className="hover:text-lime-electric transition-colors" href="#">Careers</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-xs font-semibold mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-lime-electric transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-lime-electric transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
<p className="text-[10px] text-slate-600">© 2026 Holmes Inc.</p>
<div className="flex items-center gap-4 mt-4 md:mt-0">
<a className="text-slate-600 hover:text-lime-electric transition-colors" href="#"><iconify-icon height="16" icon="ri:twitter-x-line" width="16"></iconify-icon></a>
<a className="text-slate-600 hover:text-lime-electric transition-colors" href="#"><iconify-icon height="16" icon="ri:github-fill" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
