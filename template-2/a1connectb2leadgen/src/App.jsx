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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030712]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white font-medium tracking-tighter shadow-lg shadow-indigo-500/20">A1</div>
<span className="text-slate-100 font-medium tracking-tight group-hover:text-white transition-colors">Connect</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#process">Process</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium bg-white text-slate-950 px-4 py-2 rounded-full hover:bg-slate-200 transition-all" href="#get-started">
                Get Started
                <span className="iconify" data-icon="lucide:arrow-right" data-stroke-width="1.5" data-width="14"></span>
</a>

<button className="md:hidden text-slate-300">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="hero-glow absolute inset-0 z-0 pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 text-xs font-medium mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
</span>
                Performance-based B2B Lead Gen
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
                Done-For-You B2B Growth Engine <br className="hidden md:block" />
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-indigo-400">That Delivers Results</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Performance-based lead generation through cold email, LinkedIn outreach, and advanced targeting. We handle the backend, you close the deals.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-slate-950 rounded-full font-medium hover:bg-slate-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]" href="#get-started">
                    Get Started Today
                    <span className="iconify" data-icon="lucide:chevron-right" data-stroke-width="1.5" data-width="16"></span>
</a>
<a className="w-full sm:w-auto px-8 py-3 glass-panel text-white rounded-full font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2" href="#process">
                    How it Works
                </a>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-8">Trusted by top B2B companies</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><span className="iconify text-indigo-500" data-icon="lucide:zap" data-width="20"></span>Susten Energy</div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><span className="iconify text-emerald-500" data-icon="lucide:box" data-width="20"></span>LaBine & Assoc.</div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><span className="iconify text-amber-500" data-icon="lucide:sun" data-width="20"></span>Solar Developers</div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><span className="iconify text-blue-500" data-icon="lucide:bar-chart-2" data-width="20"></span>Ehlen Analytics</div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><span className="iconify text-sky-500" data-icon="lucide:users" data-width="20"></span>Kronkite</div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><span className="iconify text-rose-500" data-icon="lucide:play-circle" data-width="20"></span>NAM Media</div>
</div>
</div>
</section>

<section className="py-24" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Predictable revenue, <span className="text-slate-500">minus the guesswork.</span></h2>
<p className="text-slate-400 mb-6 leading-relaxed">
                        A1 Connect helps B2B companies grow with a fully-managed, data-driven outreach engine. While you focus on closing deals and product development, we handle the complex backend of prospecting.
                    </p>
<p className="text-slate-400 mb-8 leading-relaxed">
                        Our performance-based approach ensures you only pay for results, aligning our incentives with your success. No fluff, just qualified meetings on your calendar.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-300">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 text-indigo-400">
<span className="iconify" data-icon="lucide:check" data-stroke-width="2" data-width="14"></span>
</span>
                            Data-driven outreach engine
                        </li>
<li className="flex items-center gap-3 text-slate-300">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 text-indigo-400">
<span className="iconify" data-icon="lucide:check" data-stroke-width="2" data-width="14"></span>
</span>
                            Fully managed backend operations
                        </li>
<li className="flex items-center gap-3 text-slate-300">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 text-indigo-400">
<span className="iconify" data-icon="lucide:check" data-stroke-width="2" data-width="14"></span>
</span>
                            Performance-based pricing model
                        </li>
</ul>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-sky-500/20 rounded-2xl blur-2xl opacity-50"></div>
<div className="glass-panel rounded-2xl p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none"></div>
<div className="space-y-6">
<div className="flex items-center justify-between border-b border-white/5 pb-4">
<div>
<div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Monthly Leads</div>
<div className="text-3xl font-semibold text-white tracking-tight">1,240+</div>
</div>
<div className="text-emerald-400 text-sm font-medium bg-emerald-500/10 px-2 py-1 rounded">+24%</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-sm">
<span className="text-slate-400">Email Open Rate</span>
<span className="text-white font-medium">68%</span>
</div>
<div className="w-full bg-white/5 rounded-full h-1.5">
<div className="bg-indigo-500 h-1.5 rounded-full" style={{width: `68%`}}></div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-sm">
<span className="text-slate-400">Response Rate</span>
<span className="text-white font-medium">12.5%</span>
</div>
<div className="w-full bg-white/5 rounded-full h-1.5">
<div className="bg-sky-500 h-1.5 rounded-full" style={{width: `32%`}}></div>
</div>
</div>
<div className="pt-4 flex gap-4">
<div className="flex-1 bg-white/5 p-4 rounded-lg text-center">
<div className="text-indigo-400 mb-2"><span className="iconify mx-auto" data-icon="lucide:calendar-check" data-width="20"></span></div>
<div className="text-2xl font-semibold text-white">85</div>
<div className="text-xs text-slate-500">Meetings Booked</div>
</div>
<div className="flex-1 bg-white/5 p-4 rounded-lg text-center">
<div className="text-sky-400 mb-2"><span className="iconify mx-auto" data-icon="lucide:dollar-sign" data-width="20"></span></div>
<div className="text-2xl font-semibold text-white">42x</div>
<div className="text-xs text-slate-500">ROI</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.02] border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Why A1 Connect?</h2>
<p className="text-slate-400">We deliver measurable results through proven systems and continuous optimization.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-6 rounded-xl group hover:bg-white/[0.05] transition-colors">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:zap" data-stroke-width="1.5" data-width="20"></span>
</div>
<h3 className="text-white font-medium text-lg mb-2">Better Results from Day One</h3>
<p className="text-sm text-slate-400 leading-relaxed">Our proven frameworks deliver immediate impact and measurable improvements to your lead generation efforts.</p>
</div>

<div className="glass-panel p-6 rounded-xl group hover:bg-white/[0.05] transition-colors">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:message-square" data-stroke-width="1.5" data-width="20"></span>
</div>
<h3 className="text-white font-medium text-lg mb-2">Clear Market Feedback</h3>
<p className="text-sm text-slate-400 leading-relaxed">Real-time insights and detailed reporting give you complete visibility into campaign performance and response.</p>
</div>

<div className="glass-panel p-6 rounded-xl group hover:bg-white/[0.05] transition-colors">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:database" data-stroke-width="1.5" data-width="20"></span>
</div>
<h3 className="text-white font-medium text-lg mb-2">Rapidly Growing Database</h3>
<p className="text-sm text-slate-400 leading-relaxed">Access to millions of verified prospects across industries with continuous database expansion.</p>
</div>

<div className="glass-panel p-6 rounded-xl group hover:bg-white/[0.05] transition-colors">
<div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:sliders-horizontal" data-stroke-width="1.5" data-width="20"></span>
</div>
<h3 className="text-white font-medium text-lg mb-2">Weekly Optimization</h3>
<p className="text-sm text-slate-400 leading-relaxed">Continuous campaign refinement and A/B testing ensure maximum performance and ROI improvement.</p>
</div>

<div className="glass-panel p-6 rounded-xl group hover:bg-white/[0.05] transition-colors">
<div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:trending-up" data-stroke-width="1.5" data-width="20"></span>
</div>
<h3 className="text-white font-medium text-lg mb-2">Easier to Scale Campaigns</h3>
<p className="text-sm text-slate-400 leading-relaxed">Streamlined processes and automation allow rapid scaling without sacrificing quality or deliverability.</p>
</div>

<div className="glass-panel p-6 rounded-xl group hover:bg-white/[0.05] transition-colors">
<div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-400 mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:target" data-stroke-width="1.5" data-width="20"></span>
</div>
<h3 className="text-white font-medium text-lg mb-2">Better Than PPC Ads</h3>
<p className="text-sm text-slate-400 leading-relaxed">Higher quality leads, better engagement rates, and lower cost per acquisition compared to traditional PPC advertising.</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">Our Core Services</h2>
<p className="text-slate-400">End-to-end lead generation solutions designed for B2B growth</p>
</div>
<a className="text-indigo-400 hover:text-indigo-300 text-sm font-medium flex items-center gap-1 transition-colors" href="#get-started">
                    View all solutions <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group relative p-6 bg-white/5 hover:bg-white/[0.08] border border-white/5 rounded-xl transition-all duration-300">
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-white/20">
<span className="iconify" data-icon="lucide:mail" data-width="48"></span>
</div>
<div className="h-10 w-10 mb-4 text-indigo-400"><span className="iconify" data-icon="lucide:send" data-width="24"></span></div>
<h3 className="text-white font-medium mb-2">Cold Email Setup</h3>
<p className="text-xs text-slate-400 leading-relaxed">Complete email infrastructure with deliverability optimization and detailed analytics.</p>
</div>

<div className="group relative p-6 bg-white/5 hover:bg-white/[0.08] border border-white/5 rounded-xl transition-all duration-300">
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-white/20">
<span className="iconify" data-icon="lucide:pen-tool" data-width="48"></span>
</div>
<div className="h-10 w-10 mb-4 text-pink-400"><span className="iconify" data-icon="lucide:edit-3" data-width="24"></span></div>
<h3 className="text-white font-medium mb-2">Expert Copywriting</h3>
<p className="text-xs text-slate-400 leading-relaxed">Compelling, conversion-focused copy crafted by experienced B2B specialists.</p>
</div>

<div className="group relative p-6 bg-white/5 hover:bg-white/[0.08] border border-white/5 rounded-xl transition-all duration-300">
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-white/20">
<span className="iconify" data-icon="lucide:users" data-width="48"></span>
</div>
<div className="h-10 w-10 mb-4 text-blue-400"><span className="iconify" data-icon="lucide:linkedin" data-width="24"></span></div>
<h3 className="text-white font-medium mb-2">LinkedIn Outreach</h3>
<p className="text-xs text-slate-400 leading-relaxed">Professional campaigns that build relationships and generate qualified leads.</p>
</div>

<div className="group relative p-6 bg-white/5 hover:bg-white/[0.08] border border-white/5 rounded-xl transition-all duration-300">
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-white/20">
<span className="iconify" data-icon="lucide:search" data-width="48"></span>
</div>
<div className="h-10 w-10 mb-4 text-emerald-400"><span className="iconify" data-icon="lucide:crosshair" data-width="24"></span></div>
<h3 className="text-white font-medium mb-2">Targeted List Building</h3>
<p className="text-xs text-slate-400 leading-relaxed">Precision targeting with verified contact data across all major markets.</p>
</div>

<div className="group relative p-6 bg-white/5 hover:bg-white/[0.08] border border-white/5 rounded-xl transition-all duration-300">
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-white/20">
<span className="iconify" data-icon="lucide:bar-chart-2" data-width="48"></span>
</div>
<div className="h-10 w-10 mb-4 text-amber-400"><span className="iconify" data-icon="lucide:settings-2" data-width="24"></span></div>
<h3 className="text-white font-medium mb-2">Ongoing Optimization</h3>
<p className="text-xs text-slate-400 leading-relaxed">Continuous testing and refinement to maximize response rates and conversions.</p>
</div>

<div className="group relative p-6 bg-white/5 hover:bg-white/[0.08] border border-white/5 rounded-xl transition-all duration-300">
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-white/20">
<span className="iconify" data-icon="lucide:database" data-width="48"></span>
</div>
<div className="h-10 w-10 mb-4 text-cyan-400"><span className="iconify" data-icon="lucide:layout-dashboard" data-width="24"></span></div>
<h3 className="text-white font-medium mb-2">CRM Integration</h3>
<p className="text-xs text-slate-400 leading-relaxed">Complete CRM integration with automated lead scoring and pipeline management.</p>
</div>

<div className="group relative p-6 bg-white/5 hover:bg-white/[0.08] border border-white/5 rounded-xl transition-all duration-300">
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-white/20">
<span className="iconify" data-icon="lucide:message-circle" data-width="48"></span>
</div>
<div className="h-10 w-10 mb-4 text-sky-400"><span className="iconify" data-icon="lucide:slack" data-width="24"></span></div>
<h3 className="text-white font-medium mb-2">Slack Comms</h3>
<p className="text-xs text-slate-400 leading-relaxed">Real-time updates and direct communication through dedicated Slack channels.</p>
</div>
<div className="flex flex-col items-center justify-center p-6 border border-dashed border-white/10 rounded-xl text-center">
<p className="text-sm text-slate-400 mb-4">Need something specific?</p>
<a className="text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-xs font-medium transition-colors" href="#get-started">Book Strategy Call</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.02]" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Smooth Onboarding Process</h2>
<p className="text-slate-400">From strategy to launch in just 10 business days.</p>
</div>
<div className="relative">

<div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0"></div>
<div className="grid lg:grid-cols-3 gap-8 relative z-10">

<div className="bg-[#0B0C10] border border-white/10 p-8 rounded-2xl relative group hover:border-indigo-500/50 transition-colors">
<div className="absolute -top-4 left-8 bg-[#0B0C10] px-2 text-indigo-400 font-mono text-xs border border-indigo-500/30 rounded py-1">Days 1-2</div>
<div className="mb-4 text-2xl font-semibold text-white tracking-tight">Initial Setup</div>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-400">
<span className="iconify text-indigo-500 mt-0.5" data-icon="lucide:check-circle" data-width="16"></span>
                                Complete onboarding form
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<span className="iconify text-indigo-500 mt-0.5" data-icon="lucide:check-circle" data-width="16"></span>
                                Strategy call with our team
                            </li>
</ul>
</div>

<div className="bg-[#0B0C10] border border-white/10 p-8 rounded-2xl relative group hover:border-sky-500/50 transition-colors">
<div className="absolute -top-4 left-8 bg-[#0B0C10] px-2 text-sky-400 font-mono text-xs border border-sky-500/30 rounded py-1">Days 3-7</div>
<div className="mb-4 text-2xl font-semibold text-white tracking-tight">Campaign Dev</div>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-400">
<span className="iconify text-sky-500 mt-0.5" data-icon="lucide:check-circle" data-width="16"></span>
                                Market research & targeting
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<span className="iconify text-sky-500 mt-0.5" data-icon="lucide:check-circle" data-width="16"></span>
                                Compelling copy creation
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<span className="iconify text-sky-500 mt-0.5" data-icon="lucide:check-circle" data-width="16"></span>
                                CRM setup & integration
                            </li>
</ul>
</div>

<div className="bg-[#0B0C10] border border-white/10 p-8 rounded-2xl relative group hover:border-emerald-500/50 transition-colors">
<div className="absolute -top-4 left-8 bg-[#0B0C10] px-2 text-emerald-400 font-mono text-xs border border-emerald-500/30 rounded py-1">Days 8-10</div>
<div className="mb-4 text-2xl font-semibold text-white tracking-tight">Testing & Launch</div>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-400">
<span className="iconify text-emerald-500 mt-0.5" data-icon="lucide:check-circle" data-width="16"></span>
                                Final testing & validation
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<span className="iconify text-emerald-500 mt-0.5" data-icon="lucide:check-circle" data-width="16"></span>
                                Campaign preparation
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<span className="iconify text-emerald-500 mt-0.5" data-icon="lucide:rocket" data-width="16"></span>
                                Launch readiness review
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="get-started">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/10 pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-5 gap-16">

<div className="lg:col-span-2 space-y-8">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                        Ready to scale your B2B growth — without the guesswork?
                    </h2>
<p className="text-slate-400 leading-relaxed">
                        Get started with A1 Connect and transform your lead generation today. Join the ranks of high-growth companies scaling predictably.
                    </p>
<div className="space-y-6 pt-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10">
<span className="iconify" data-icon="lucide:shield-check" data-width="24"></span>
</div>
<div>
<h4 className="text-white font-medium">Verified Data</h4>
<p className="text-xs text-slate-500">98% deliverability guarantee</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10">
<span className="iconify" data-icon="lucide:users" data-width="24"></span>
</div>
<div>
<h4 className="text-white font-medium">Dedicated Team</h4>
<p className="text-xs text-slate-500">Strategy, Copy, and Ops experts</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3">
<form className="glass-panel p-8 rounded-2xl space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 ml-1">First Name *</label>
<input className="w-full bg-[#0B0C10] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-slate-600" placeholder="Jane" type="text" />
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 ml-1">Last Name *</label>
<input className="w-full bg-[#0B0C10] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-slate-600" placeholder="Doe" type="text" />
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 ml-1">Business Email *</label>
<input className="w-full bg-[#0B0C10] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-slate-600" placeholder="jane@company.com" type="email" />
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 ml-1">Company Name *</label>
<input className="w-full bg-[#0B0C10] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-slate-600" placeholder="Acme Inc" type="text" />
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 ml-1">Phone Number</label>
<input className="w-full bg-[#0B0C10] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-slate-600" placeholder="+1 (555) 000-0000" type="tel" />
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 ml-1">Annual Revenue Range</label>
<div className="relative">
<select className="w-full bg-[#0B0C10] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all appearance-none cursor-pointer">
<option disabled selected value="">Select revenue range</option>
<option value="seed">{"<"} $1M</option>
<option value="growth">$1M - $10M</option>
<option value="scale">$10M - $50M</option>
<option value="enterprise">$50M+</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 ml-1">Lead Generation Goals</label>
<textarea className="w-full bg-[#0B0C10] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-slate-600 resize-none" placeholder="Tell us about your current challenges..." rows="3"></textarea>
</div>
<button className="w-full py-3.5 bg-white text-slate-950 rounded-lg font-medium hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group mt-2" type="button">
                            Get Started Today
                            <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<p className="text-[10px] text-slate-500 text-center">
                            By submitting this form, you agree to our <a className="underline hover:text-slate-400" href="#">privacy policy</a> and <a className="underline hover:text-slate-400" href="#">terms of service</a>.
                        </p>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#030712] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold">A1</div>
<span className="text-white font-medium tracking-tight">Connect</span>
</div>
<p className="text-slate-500 text-sm max-w-xs">Performance-based lead generation for B2B companies looking to scale predictably.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-16">
<div>
<h4 className="text-white text-sm font-medium mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Services</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Cold Email</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Lead Lists</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2025 A1 Connect. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-600 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="text-slate-600 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="16"></span></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
