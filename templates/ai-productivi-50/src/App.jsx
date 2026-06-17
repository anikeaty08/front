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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="absolute inset-x-0 top-0 h-[800px] w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50/80 via-white to-white -z-10"></div>

<header className="w-full border-b border-slate-100/50 bg-white/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter text-emerald-600 hover:opacity-80 transition-opacity" href="#">
                    strata
                </a>
<nav className="hidden md:flex gap-6">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Product</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Solutions</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Pricing</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Sign in</a>
<a className="inline-flex justify-center items-center h-9 px-4 rounded-full bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all" href="#">
                    Start for free
                </a>
</div>
</div>
</header>
<main>

<section className="pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pb-32 px-4 max-w-7xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100/50 text-emerald-700 mb-8 cursor-pointer hover:bg-emerald-100/50 transition-colors">
<iconify-icon className="text-base" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium tracking-wide uppercase">Strata AI 2.0 is live</span>
<iconify-icon className="text-sm opacity-50" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tighter text-slate-900 max-w-4xl mx-auto leading-[1.1] mb-6">
                Do your best work, <br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">at half the time.</span>
</h1>
<p className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                An intelligent workspace that organizes your tasks, automates routine workflows, and generates insights while you focus on what matters.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="w-full sm:w-auto inline-flex justify-center items-center h-11 px-6 rounded-full bg-emerald-600 text-white text-sm font-medium shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all">
                    Get started free
                </button>
<button className="w-full sm:w-auto inline-flex justify-center items-center h-11 px-6 rounded-full bg-white text-slate-700 border border-slate-200 text-sm font-medium hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2 transition-all gap-2">
<iconify-icon className="text-lg text-slate-400" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Watch demo
                </button>
</div>

<div className="relative mx-auto max-w-5xl rounded-2xl border border-slate-200/60 bg-white/50 p-2 sm:p-4 backdrop-blur-sm shadow-2xl shadow-emerald-900/5">
<div className="rounded-xl border border-slate-100 bg-white overflow-hidden shadow-sm flex flex-col h-[400px] sm:h-[600px]">

<div className="h-12 border-b border-slate-100 flex items-center px-4 gap-4 bg-slate-50/50">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
</div>
<div className="flex-1 flex justify-center">
<div className="h-6 w-48 bg-slate-100 rounded-md flex items-center justify-center px-2">
<iconify-icon className="text-xs text-slate-400 mr-2" icon="solar:lock-keyhole-linear"></iconify-icon>
<span className="text-xs text-slate-400 font-medium">app.strata.ai</span>
</div>
</div>
</div>

<div className="flex-1 flex overflow-hidden">

<div className="w-56 border-r border-slate-100 bg-slate-50/30 hidden md:flex flex-col p-4 gap-4">
<div className="h-8 w-24 bg-slate-200/50 rounded-md mb-4"></div>
<div className="flex items-center gap-3 px-2 py-1.5 rounded-md bg-white border border-slate-100 shadow-sm text-emerald-600">
<iconify-icon icon="solar:widget-linear"></iconify-icon>
<div className="h-2 w-16 bg-emerald-100 rounded-full"></div>
</div>
<div className="flex items-center gap-3 px-2 py-1.5 text-slate-400">
<iconify-icon icon="solar:folder-linear"></iconify-icon>
<div className="h-2 w-20 bg-slate-200/60 rounded-full"></div>
</div>
<div className="flex items-center gap-3 px-2 py-1.5 text-slate-400">
<iconify-icon icon="solar:chart-linear"></iconify-icon>
<div className="h-2 w-12 bg-slate-200/60 rounded-full"></div>
</div>
</div>

<div className="flex-1 p-6 flex flex-col gap-6 overflow-hidden">
<div className="flex justify-between items-end">
<div>
<div className="h-4 w-32 bg-slate-200 rounded-full mb-2"></div>
<div className="h-8 w-48 bg-slate-800 rounded-md"></div>
</div>
<div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
</div>

<div className="flex-1 rounded-xl border border-slate-100 bg-slate-50/50 p-4 flex flex-col gap-4">
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0"></div>
<div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-tl-none shadow-sm flex-1">
<div className="h-2 w-3/4 bg-slate-200 rounded-full mb-2"></div>
<div className="h-2 w-1/2 bg-slate-200 rounded-full"></div>
</div>
</div>
<div className="flex gap-3 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-emerald-600 flex-shrink-0 flex items-center justify-center text-white text-xs font-semibold tracking-tighter">st</div>
<div className="bg-emerald-50 border border-emerald-100 p-3 rounded-2xl rounded-tr-none shadow-sm w-3/4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-emerald-500 text-xs" icon="solar:stars-linear"></iconify-icon>
<span className="text-xs text-emerald-700 font-medium">AI Generated Plan</span>
</div>
<div className="space-y-2 mt-3">
<div className="h-2 w-full bg-emerald-200/50 rounded-full"></div>
<div className="h-2 w-5/6 bg-emerald-200/50 rounded-full"></div>
<div className="h-2 w-4/6 bg-emerald-200/50 rounded-full"></div>
</div>

<div className="mt-4 flex items-center justify-between border-t border-emerald-100 pt-3">
<span className="text-xs text-emerald-700/70">Auto-execute tasks</span>
<button className="w-8 h-5 rounded-full bg-emerald-500 relative transition-colors focus:outline-none flex items-center px-0.5">
<span className="w-4 h-4 bg-white rounded-full shadow-sm translate-x-3 transition-transform"></span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 py-10 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-4 text-center">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-8">Powering modern teams</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale">
<span className="text-xl font-semibold tracking-tighter text-slate-800">ACME</span>
<span className="text-xl font-semibold tracking-tighter text-slate-800">GLOBEX</span>
<span className="text-xl font-semibold tracking-tighter text-slate-800">SOYUZ</span>
<span className="text-xl font-semibold tracking-tighter text-slate-800">INITECH</span>
<span className="text-xl font-semibold tracking-tighter text-slate-800">UMBRELLA</span>
</div>
</div>
</section>

<section className="pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Intelligence built into every action.</h2>
<p className="text-base text-slate-500 max-w-2xl mx-auto">Stop managing work and start doing it. Strata anticipates your needs and handles the busywork behind the scenes.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

<div className="md:col-span-2 rounded-3xl bg-slate-50 border border-slate-100 p-8 flex flex-col relative overflow-hidden group">
<div className="relative z-10 mb-8">
<div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 mb-4">
<iconify-icon className="text-xl" icon="solar:document-add-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Contextual Drafting</h3>
<p className="text-sm text-slate-500 max-w-sm">Generates briefs, emails, and reports instantly based on your project history and recent meetings.</p>
</div>

<div className="absolute -bottom-10 -right-10 w-2/3 h-48 bg-white rounded-t-xl border border-slate-200 shadow-xl shadow-slate-200/50 p-4 rotate-3 group-hover:rotate-0 transition-transform duration-500">
<div className="h-2 w-1/4 bg-slate-200 rounded-full mb-4"></div>
<div className="space-y-2">
<div className="h-2 w-full bg-slate-100 rounded-full"></div>
<div className="h-2 w-5/6 bg-slate-100 rounded-full"></div>
<div className="h-2 w-4/6 bg-slate-100 rounded-full"></div>
</div>
<div className="mt-4 inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-600 px-2 py-1 rounded text-xs font-medium">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
                            Auto-completed
                        </div>
</div>
</div>

<div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-8 flex flex-col relative overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-emerald-600 shadow-sm flex items-center justify-center text-white mb-4">
<iconify-icon className="text-xl" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-emerald-900 mb-2">Zap Workflows</h3>
<p className="text-sm text-emerald-700/80">Connect your tools. When x happens, AI does y. Zero coding required.</p>
<div className="mt-auto pt-8">
<div className="flex items-center gap-2 text-emerald-600 bg-white/60 p-2 rounded-lg border border-emerald-100/50">
<iconify-icon className="text-lg" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-lg text-emerald-500" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="rounded-3xl bg-white border border-slate-100 shadow-sm p-8 flex flex-col">
<div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 mb-4">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Universal Search</h3>
<p className="text-sm text-slate-500">Ask questions in natural language. Get answers sourced from all your connected apps instantly.</p>
</div>

<div className="md:col-span-2 rounded-3xl bg-slate-900 p-8 flex flex-col sm:flex-row items-center justify-between relative overflow-hidden">
<div className="relative z-10 w-full sm:w-1/2 mb-8 sm:mb-0 text-left">
<div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 mb-4">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Enterprise-grade Security</h3>
<p className="text-sm text-slate-400">Your data never trains our public models. SOC2 Type II certified and fully GDPR compliant.</p>
</div>
<div className="w-full sm:w-1/3 relative z-10 flex flex-col gap-3">
<div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
<span className="text-sm text-slate-300 font-medium">End-to-end encryption</span>
<iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
<span className="text-sm text-slate-300 font-medium">SSO Integration</span>
<iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 px-4 max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">How it works</h2>
<p className="text-base text-slate-500 max-w-2xl mx-auto">Three simple steps to automate your entire workflow.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative max-w-4xl mx-auto">
<div className="hidden md:block absolute top-6 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="relative flex flex-col items-center text-center gap-4">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-emerald-600 relative z-10">
<span className="text-sm font-semibold">1</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Connect your tools</h3>
<p className="text-sm text-slate-500">Integrate with Slack, Notion, Jira, and 50+ other apps in just one click.</p>
</div>
<div className="relative flex flex-col items-center text-center gap-4">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-emerald-600 relative z-10">
<span className="text-sm font-semibold">2</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Set your intent</h3>
<p className="text-sm text-slate-500">Tell Strata what you want to achieve using natural, everyday language.</p>
</div>
<div className="relative flex flex-col items-center text-center gap-4">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-emerald-600 relative z-10">
<span className="text-sm font-semibold">3</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Let AI execute</h3>
<p className="text-sm text-slate-500">Strata builds the workflow, drafts the content, and executes the actions.</p>
</div>
</div>
</section>

<section className="py-16 sm:py-24 px-4 max-w-7xl mx-auto">
<div className="bg-slate-50/50 rounded-[2.5rem] sm:rounded-[3rem] border border-slate-100 p-8 sm:p-16">
<div className="text-center mb-12 sm:mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Built for high-velocity teams</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-3xl text-slate-400 mb-4" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Product Managers</h3>
<p className="text-sm text-slate-500">Automate sprint planning and turn messy meeting notes into structured PRDs.</p>
</div>
<div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-3xl text-slate-400 mb-4" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Engineers</h3>
<p className="text-sm text-slate-500">Auto-generate documentation and triage bug reports without leaving your terminal.</p>
</div>
<div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-3xl text-slate-400 mb-4" icon="solar:pen-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Designers</h3>
<p className="text-sm text-slate-500">Sync feedback directly to design files and auto-organize assets by project phase.</p>
</div>
<div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-3xl text-slate-400 mb-4" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Founders</h3>
<p className="text-sm text-slate-500">Reclaim 10+ hours a week by automating ops, emails, and routine follow-ups.</p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 px-4 max-w-7xl mx-auto border-t border-slate-100">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Loved by builders</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
<div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200"></div>
<div>
<p className="text-sm font-semibold text-slate-900">Sarah Jenkins</p>
<p className="text-xs text-slate-500">VP of Product, Globex</p>
</div>
</div>
<p className="text-sm text-slate-600 leading-relaxed">"Strata feels like having a brilliant chief of staff. It anticipates what I need before a meeting even starts. Absolute game-changer for our workflow."</p>
</div>
<div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200"></div>
<div>
<p className="text-sm font-semibold text-slate-900">David Chen</p>
<p className="text-xs text-slate-500">Engineering Lead, Acme Corp</p>
</div>
</div>
<p className="text-sm text-slate-600 leading-relaxed">"The way it parses our Jira tickets and automatically assigns context to our pull requests is pure magic. We ship code 20% faster now."</p>
</div>
<div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200"></div>
<div>
<p className="text-sm font-semibold text-slate-900">Elena Rostova</p>
<p className="text-xs text-slate-500">Founder, Soyuz</p>
</div>
</div>
<p className="text-sm text-slate-600 leading-relaxed">"I was skeptical about another AI tool, but Strata actually does the work instead of just giving me another chat interface. Worth every penny."</p>
</div>
</div>
</section>

<section className="py-16 sm:py-24 px-4 max-w-7xl mx-auto border-t border-slate-100">
<div className="text-center mb-10">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Simple, transparent pricing</h2>
<p className="text-base text-slate-500 max-w-2xl mx-auto mb-8">Start for free, upgrade when you need more power.</p>

<div className="flex items-center justify-center gap-3 mb-16">
<span className="text-sm text-slate-500 font-medium">Monthly</span>
<button className="w-11 h-6 rounded-full bg-emerald-500 relative transition-colors focus:outline-none flex items-center px-0.5">
<span className="w-5 h-5 bg-white rounded-full shadow-sm translate-x-5 transition-transform"></span>
</button>
<span className="text-sm text-slate-900 font-medium flex items-center gap-2">
                        Annually
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-medium border border-emerald-100/50">Save 20%</span>
</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">

<div className="p-8 rounded-[2rem] bg-white border border-slate-200 shadow-sm flex flex-col h-full">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Starter</h3>
<p className="text-sm text-slate-500 mb-6 h-10">Perfect for individuals trying out AI automation.</p>
<div className="mb-8">
<span className="text-4xl font-semibold tracking-tight text-slate-900">$0</span>
<span className="text-sm text-slate-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Up to 100 AI tasks per month</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>3 active integrations</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>7-day history retention</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Community support</span>
</li>
</ul>
<button className="w-full h-11 rounded-full bg-slate-50 text-slate-900 border border-slate-200 text-sm font-medium hover:bg-slate-100 transition-colors mt-auto">
                        Get started free
                    </button>
</div>

<div className="p-8 rounded-[2rem] bg-slate-900 border border-slate-800 shadow-xl flex flex-col relative overflow-hidden h-[105%]">

<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none"></div>
<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-400"></div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Pro</h3>
<p className="text-sm text-slate-400 mb-6 h-10">For professionals and teams scaling their output.</p>
<div className="mb-8">
<span className="text-4xl font-semibold tracking-tight text-white">$29</span>
<span className="text-sm text-slate-400">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Unlimited AI tasks</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Unlimited integrations</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Unlimited history &amp; search</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Priority 24/7 support</span>
</li>
</ul>
<button className="w-full h-11 rounded-full bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition-colors shadow-md shadow-emerald-900/20 relative z-10 mt-auto">
                        Start 14-day trial
                    </button>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden border-t border-slate-100">
<div className="absolute inset-0 bg-emerald-50/50 -z-10"></div>
<div className="max-w-3xl mx-auto px-4 text-center">
<h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Ready to multiply your output?</h2>
<p className="text-base sm:text-lg text-slate-500 mb-10">Join thousands of professionals saving 10+ hours a week with Strata.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto inline-flex justify-center items-center h-12 px-8 rounded-full bg-emerald-600 text-white text-sm font-medium shadow-md shadow-emerald-600/20 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all">
                        Start your free trial
                    </button>
<span className="text-xs text-slate-400 font-medium">No credit card required</span>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-xl font-semibold tracking-tighter text-emerald-600 mb-4 inline-block" href="#">
                        strata
                    </a>
<p className="text-sm text-slate-500 max-w-xs mb-6">The intelligent workspace that does the heavy lifting for you.</p>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:twitter-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:github-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:figma-linear" strokeWidth="1.5"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Product</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">About</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Strata AI Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-xs text-slate-500 font-medium">All systems operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
