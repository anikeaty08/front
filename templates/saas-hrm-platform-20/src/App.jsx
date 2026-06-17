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
      

<div className="noise-overlay"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 glass-nav rounded-full px-6 py-3 flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-6 h-6 rounded-md bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<span className="text-white font-medium tracking-tighter text-lg">HRM</span>
</div>
<div className="hidden md:flex items-center space-x-8 text-sm text-slate-400 font-normal">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#dashboard">Platform</a>
<a className="hover:text-white transition-colors" href="#security">Security</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center space-x-4">
<a className="hidden sm:block text-sm text-slate-300 hover:text-white transition-colors font-medium" href="#">Log in</a>
<a className="btn-glow px-5 py-2 rounded-full text-sm font-medium" href="#">Start Free</a>
</div>
</nav>

<section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 px-6 flex flex-col items-center text-center overflow-hidden">

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-900/20 blur-[120px] rounded-[100%] pointer-events-none"></div>
<div className="absolute top-1/3 left-1/3 w-[400px] h-[300px] bg-amber-900/10 blur-[100px] rounded-[100%] pointer-events-none"></div>
<div className="inline-flex items-center space-x-2 glass-card px-4 py-1.5 rounded-full mb-8 fade-in-up">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-emerald-200 tracking-wide uppercase">Introducing HRM 2.0</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gradient-hero max-w-4xl leading-[1.1] mb-6 fade-in-up delay-100">
            Redefine Workforce Management with Intelligent Precision
        </h1>
<p className="text-xl md:text-2xl italic text-slate-400 font-normal max-w-3xl mb-6 fade-in-up delay-200">
            Where people, performance, and productivity align effortlessly.
        </p>
<p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-10 fade-in-up delay-300 font-light">
            An all-in-one HR platform designed to simplify operations, automate workflows, and empower your team with real-time insights.
        </p>
<div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6 fade-in-up delay-300">
<a className="btn-glow px-8 py-3.5 rounded-full text-sm font-medium w-full sm:w-auto flex items-center justify-center space-x-2" href="#">
<span>Get Started Free</span>
<iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="btn-glass px-8 py-3.5 rounded-full text-sm font-medium w-full sm:w-auto flex items-center justify-center space-x-2" href="#">
<iconify-icon className="text-base text-slate-400" icon="solar:play-circle-linear"></iconify-icon>
<span>Book a Demo</span>
</a>
</div>
<div className="flex items-center space-x-6 text-xs text-slate-500 font-light fade-in-up delay-300">
<span className="flex items-center"><iconify-icon className="mr-1.5 text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> No credit card required</span>
<span className="flex items-center"><iconify-icon className="mr-1.5 text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Setup in minutes</span>
</div>

<div className="w-full max-w-5xl mx-auto mt-24 relative fade-in-up delay-300 h-[300px] md:h-[450px]">

<div className="absolute inset-0 glass-card rounded-2xl md:rounded-3xl border border-white/5 overflow-hidden flex flex-col z-10">

<div className="h-10 border-b border-white/5 flex items-center px-4 space-x-2 bg-white/[0.01]">
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
</div>

<div className="flex-1 p-6 md:p-10 flex flex-col md:flex-row gap-6 bg-gradient-to-b from-transparent to-black/20">
<div className="w-full md:w-1/3 flex flex-col gap-4">
<div className="h-24 rounded-xl border border-white/5 bg-white/[0.02] p-4 flex flex-col justify-between">
<div className="text-xs text-slate-500">Total Employees</div>
<div className="text-3xl font-medium text-white">1,248 <span className="text-xs text-emerald-400 font-normal ml-2">+12%</span></div>
</div>
<div className="h-24 rounded-xl border border-white/5 bg-white/[0.02] p-4 flex flex-col justify-between">
<div className="text-xs text-slate-500">Open Roles</div>
<div className="text-3xl font-medium text-white">24</div>
</div>
</div>

<div className="w-full md:w-2/3 h-full rounded-xl border border-white/5 bg-white/[0.01] p-6 relative flex items-end gap-2 md:gap-4 overflow-hidden">

<div className="w-full h-[40%] bg-white/5 rounded-t-md relative"><div className="absolute bottom-0 w-full h-[60%] bg-emerald-500/20 rounded-t-md"></div></div>
<div className="w-full h-[60%] bg-white/5 rounded-t-md relative"><div className="absolute bottom-0 w-full h-[70%] bg-emerald-500/30 rounded-t-md"></div></div>
<div className="w-full h-[45%] bg-white/5 rounded-t-md relative"><div className="absolute bottom-0 w-full h-[50%] bg-emerald-500/20 rounded-t-md"></div></div>
<div className="w-full h-[80%] bg-white/5 rounded-t-md relative"><div className="absolute bottom-0 w-full h-[90%] bg-emerald-500/50 rounded-t-md"></div></div>
<div className="w-full h-[100%] bg-white/5 rounded-t-md relative">
<div className="absolute bottom-0 w-full h-[95%] bg-emerald-400/80 rounded-t-md shadow-[0_0_20px_rgba(52,211,153,0.3)]"></div>
</div>
<div className="w-full h-[75%] bg-white/5 rounded-t-md relative"><div className="absolute bottom-0 w-full h-[80%] bg-emerald-500/40 rounded-t-md"></div></div>
</div>
</div>
</div>

<div className="absolute -left-4 md:-left-12 top-10 glass-card p-3 rounded-2xl flex items-center space-x-4 z-20 w-48 md:w-56 shadow-2xl shadow-black/50 animate-[translateY_4s_ease-in-out_infinite_alternate]">
<div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-emerald-400 text-lg" icon="solar:user-check-linear"></iconify-icon>
</div>
<div>
<div className="text-sm text-white font-medium">New Hire</div>
<div className="text-xs text-slate-400 font-light">Onboarding done</div>
</div>
</div>

<div className="absolute -right-4 md:-right-12 bottom-10 glass-card p-3 rounded-2xl flex items-center space-x-4 z-20 w-48 md:w-56 shadow-2xl shadow-black/50 animate-[translateY_5s_ease-in-out_infinite_alternate_reverse]">
<div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-amber-300 text-lg" icon="solar:wad-of-money-linear"></iconify-icon>
</div>
<div>
<div className="text-sm text-white font-medium">Payroll</div>
<div className="text-xs text-slate-400 font-light">Processed successfully</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-sm font-medium tracking-wide text-slate-500 mb-2 uppercase">Trusted by Growing Teams Worldwide</h2>
<p className="text-xs text-slate-600 font-light mb-8 max-w-md mx-auto">From startups to enterprises, companies rely on our platform to manage their workforce efficiently.</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center space-x-2 font-medium tracking-tight text-xl text-white"><iconify-icon icon="solar:box-linear"></iconify-icon><span>AcmeCorp</span></div>
<div className="flex items-center space-x-2 font-medium tracking-tight text-xl text-white"><iconify-icon icon="solar:buildings-linear"></iconify-icon><span>Nexus</span></div>
<div className="flex items-center space-x-2 font-medium tracking-tight text-xl text-white"><iconify-icon icon="solar:planet-linear"></iconify-icon><span>GlobalHR</span></div>
<div className="flex items-center space-x-2 font-medium tracking-tight text-xl text-white hidden sm:flex"><iconify-icon icon="solar:cup-star-linear"></iconify-icon><span>Stellar</span></div>
<div className="flex items-center space-x-2 font-medium tracking-tight text-xl text-white hidden md:flex"><iconify-icon icon="solar:infinity-linear"></iconify-icon><span>Synergy</span></div>
</div>
</div>
</section>

<section className="py-24 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Everything You Need to Manage Your Workforce</h2>
<p className="text-base text-slate-400 font-light italic">Powerful tools designed to streamline every aspect of HR.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-3xl group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px] rounded-full group-hover:bg-emerald-500/20 transition-colors"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-emerald-400">
<iconify-icon className="text-2xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Employee Management</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">Centralize employee data, documents, and lifecycle in one secure system.</p>
</div>

<div className="glass-card p-8 rounded-3xl group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-[50px] rounded-full group-hover:bg-amber-500/10 transition-colors"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-amber-200">
<iconify-icon className="text-2xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Attendance &amp; Time</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">Track work hours, shifts, and attendance with real-time accuracy.</p>
</div>

<div className="glass-card p-8 rounded-3xl group relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-emerald-400">
<iconify-icon className="text-2xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Payroll Automation</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">Automate salary calculations, tax management, and payslip generation.</p>
</div>

<div className="glass-card p-8 rounded-3xl group relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-slate-300">
<iconify-icon className="text-2xl" icon="solar:calendar-date-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Leave Management</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">Simplify leave requests, approvals, and balance tracking effortlessly.</p>
</div>

<div className="glass-card p-8 rounded-3xl group relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-emerald-400">
<iconify-icon className="text-2xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Performance Tracking</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">Monitor goals, reviews, and employee growth with actionable insights.</p>
</div>

<div className="glass-card p-8 rounded-3xl group relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-slate-300">
<iconify-icon className="text-2xl" icon="solar:user-plus-rounded-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Recruitment System</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">Manage hiring pipelines, candidates, and onboarding seamlessly.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="dashboard">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-emerald-900/10 blur-[150px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2 space-y-6">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
                    A Dashboard That Gives You Complete Control
                </h2>
<p className="text-lg italic text-slate-400 font-normal">
                    Visualize your workforce with clarity through intuitive and powerful analytics.
                </p>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                    From attendance trends to performance metrics, get a real-time overview of everything that matters—beautifully presented in a single dashboard that requires zero training to use.
                </p>
<ul className="space-y-4 mt-8">
<li className="flex items-center text-sm text-slate-300 font-light">
<div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mr-3">
<iconify-icon className="text-emerald-400 text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
                        Customizable widgets
                    </li>
<li className="flex items-center text-sm text-slate-300 font-light">
<div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mr-3">
<iconify-icon className="text-emerald-400 text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
                        Real-time data synchronization
                    </li>
<li className="flex items-center text-sm text-slate-300 font-light">
<div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mr-3">
<iconify-icon className="text-emerald-400 text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
                        Exportable automated reports
                    </li>
</ul>
</div>
<div className="w-full lg:w-1/2 relative">

<div className="absolute inset-0 border border-white/5 rounded-full scale-110 -z-10"></div>
<div className="absolute inset-0 border border-white/5 rounded-full scale-[1.25] -z-10"></div>
<div className="glass-card p-2 rounded-2xl border border-white/10 shadow-2xl relative">

<div className="w-full h-80 bg-[#0a0f0d] rounded-xl border border-white/5 flex overflow-hidden">

<div className="w-16 border-r border-white/5 flex flex-col items-center py-4 space-y-6">
<div className="w-8 h-8 rounded bg-white/10"></div>
<div className="w-6 h-6 rounded-full bg-white/5"></div>
<div className="w-6 h-6 rounded-full bg-white/5"></div>
<div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center"><iconify-icon className="text-xs" icon="solar:chart-linear"></iconify-icon></div>
</div>

<div className="flex-1 p-6 flex flex-col gap-4">
<div className="h-4 w-1/4 bg-white/10 rounded"></div>
<div className="flex gap-4 h-20">
<div className="flex-1 bg-white/5 rounded-lg border border-white/5 p-3 flex flex-col justify-end">
<div className="h-1 w-full bg-emerald-500/30 rounded overflow-hidden"><div className="h-full w-3/4 bg-emerald-400"></div></div>
</div>
<div className="flex-1 bg-white/5 rounded-lg border border-white/5 p-3 flex flex-col justify-end">
<div className="h-1 w-full bg-amber-500/30 rounded overflow-hidden"><div className="h-full w-1/2 bg-amber-400"></div></div>
</div>
</div>
<div className="flex-1 bg-white/5 rounded-lg border border-white/5 p-4 flex gap-2 items-end">
<div className="w-full bg-white/10 h-1/3 rounded-t"></div>
<div className="w-full bg-white/10 h-2/3 rounded-t"></div>
<div className="w-full bg-emerald-500/40 h-full rounded-t relative"><div className="absolute top-0 w-full h-1 bg-emerald-400"></div></div>
<div className="w-full bg-white/10 h-1/2 rounded-t"></div>
<div className="w-full bg-white/10 h-4/5 rounded-t"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="glass-card p-10 rounded-3xl border border-white/10 relative overflow-hidden group">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full group-hover:bg-amber-500/20 transition-all"></div>
<div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-8 relative z-10">
<iconify-icon className="text-amber-300 text-xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2 relative z-10">Smarter HR with Intelligent Automation</h3>
<p className="text-sm italic text-slate-400 mb-8 relative z-10">Let AI handle repetitive tasks while you focus on people.</p>
<ul className="space-y-4 relative z-10">
<li className="flex items-start text-sm text-slate-300 font-light">
<iconify-icon className="mr-3 text-amber-400 mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon>
                        Automated workflows for onboarding &amp; offboarding
                    </li>
<li className="flex items-start text-sm text-slate-300 font-light">
<iconify-icon className="mr-3 text-amber-400 mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon>
                        Smart insights for predictive retention
                    </li>
<li className="flex items-start text-sm text-slate-300 font-light">
<iconify-icon className="mr-3 text-amber-400 mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon>
                        Reduced manual errors in payroll calculations
                    </li>
</ul>
</div>

<div className="glass-card p-10 rounded-3xl border border-white/10 relative overflow-hidden group" id="security">
<div className="absolute -left-20 -bottom-20 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full group-hover:bg-emerald-500/20 transition-all"></div>
<div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-8 relative z-10">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:shield-keyhole-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2 relative z-10">Enterprise-Grade Security</h3>
<p className="text-sm italic text-slate-400 mb-8 relative z-10">Your data is protected with the highest standards.</p>
<ul className="space-y-4 relative z-10">
<li className="flex items-start text-sm text-slate-300 font-light">
<iconify-icon className="mr-3 text-emerald-400 mt-0.5" icon="solar:lock-password-linear"></iconify-icon>
                        Granular role-based access control (RBAC)
                    </li>
<li className="flex items-start text-sm text-slate-300 font-light">
<iconify-icon className="mr-3 text-emerald-400 mt-0.5" icon="solar:database-linear"></iconify-icon>
                        End-to-end data encryption at rest and in transit
                    </li>
<li className="flex items-start text-sm text-slate-300 font-light">
<iconify-icon className="mr-3 text-emerald-400 mt-0.5" icon="solar:cloud-check-linear"></iconify-icon>
                        SOC 2 Type II compliant secure cloud infrastructure
                    </li>
</ul>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-gradient-to-b from-transparent to-[#050a08]/50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-2">Why Teams Choose Our Platform</h2>
<p className="text-base italic text-slate-400 font-light mb-10">Designed to deliver measurable impact across your organization.</p>
<div className="grid grid-cols-2 gap-6">
<div className="border-l border-emerald-500/30 pl-4">
<div className="text-2xl font-semibold text-white mb-1">40%</div>
<div className="text-xs text-slate-400 font-light uppercase tracking-wider">Time Saved</div>
</div>
<div className="border-l border-emerald-500/30 pl-4">
<div className="text-2xl font-semibold text-white mb-1">99%</div>
<div className="text-xs text-slate-400 font-light uppercase tracking-wider">Accuracy</div>
</div>
<div className="border-l border-emerald-500/30 pl-4">
<div className="text-2xl font-semibold text-white mb-1">2x</div>
<div className="text-xs text-slate-400 font-light uppercase tracking-wider">Faster Onboarding</div>
</div>
<div className="border-l border-emerald-500/30 pl-4">
<div className="text-2xl font-semibold text-white mb-1">24/7</div>
<div className="text-xs text-slate-400 font-light uppercase tracking-wider">System Uptime</div>
</div>
</div>
</div>

<div className="glass-card p-10 rounded-3xl relative">
<iconify-icon className="absolute top-6 right-6 text-6xl text-white/5 pointer-events-none" icon="solar:quote-right-linear"></iconify-icon>
<div className="flex space-x-1 mb-6">
<iconify-icon className="text-amber-400" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-fall-bold"></iconify-icon>
</div>
<p className="text-lg md:text-xl text-slate-300 font-light italic leading-relaxed mb-8">
                        “This platform completely transformed how we manage our employees. It’s incredibly intuitive, powerful, and saves our HR department countless hours every single week. Highly recommended for any scaling team.”
                    </p>
<div className="flex items-center space-x-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-200 p-[1px]">
<div className="w-full h-full rounded-full bg-[#0a0f0d] flex items-center justify-center text-sm font-medium text-emerald-100">EW</div>
</div>
<div>
<div className="text-sm font-medium text-white">Elena Woods</div>
<div className="text-xs text-slate-500 font-light">VP of People, TechNova</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">Simple, Transparent Pricing</h2>
<p className="text-base text-slate-400 font-light italic">Choose a plan that fits your team size and business needs.</p>

<div className="mt-8 inline-flex items-center space-x-4 bg-white/5 p-1 rounded-full border border-white/10">
<button className="px-6 py-2 rounded-full bg-white/10 text-white text-xs font-medium shadow-sm transition-all">Monthly</button>
<button className="px-6 py-2 rounded-full text-slate-400 hover:text-white text-xs font-medium transition-all">Annually <span className="text-emerald-400 ml-1">-20%</span></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

<div className="glass-card p-8 rounded-3xl border border-white/5">
<h3 className="text-lg font-medium text-white mb-1">Starter</h3>
<p className="text-xs text-slate-500 font-light mb-6">Perfect for small teams</p>
<div className="text-4xl font-semibold text-white mb-8 tracking-tight">$29<span className="text-sm text-slate-500 font-light tracking-normal">/mo</span></div>
<ul className="space-y-4 mb-8 min-h-[160px]">
<li className="flex items-center text-sm text-slate-300 font-light"><iconify-icon className="mr-3 text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Basic HR tools</li>
<li className="flex items-center text-sm text-slate-300 font-light"><iconify-icon className="mr-3 text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Attendance tracking</li>
<li className="flex items-center text-sm text-slate-300 font-light"><iconify-icon className="mr-3 text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Employee directory</li>
<li className="flex items-center text-sm text-slate-300 font-light"><iconify-icon className="mr-3 text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Email support</li>
</ul>
<a className="block w-full py-3 text-center rounded-full btn-glass text-sm font-medium" href="#">Start Free</a>
</div>

<div className="glass-card p-8 rounded-3xl border border-emerald-500/30 relative transform md:-translate-y-4 shadow-[0_0_40px_rgba(16,185,129,0.1)]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-[#030706] text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
<div className="absolute inset-0 bg-emerald-500/5 rounded-3xl pointer-events-none"></div>
<h3 className="text-lg font-medium text-white mb-1">Professional</h3>
<p className="text-xs text-slate-500 font-light mb-6">For growing companies</p>
<div className="text-4xl font-semibold text-white mb-8 tracking-tight">$99<span className="text-sm text-slate-500 font-light tracking-normal">/mo</span></div>
<ul className="space-y-4 mb-8 min-h-[160px]">
<li className="flex items-center text-sm text-slate-200 font-light"><iconify-icon className="mr-3 text-emerald-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> All Starter features</li>
<li className="flex items-center text-sm text-slate-200 font-light"><iconify-icon className="mr-3 text-emerald-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Payroll automation</li>
<li className="flex items-center text-sm text-slate-200 font-light"><iconify-icon className="mr-3 text-emerald-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Performance tracking</li>
<li className="flex items-center text-sm text-slate-200 font-light"><iconify-icon className="mr-3 text-emerald-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Priority support</li>
</ul>
<a className="block w-full py-3 text-center rounded-full btn-glow text-sm font-medium" href="#">Start Free Trial</a>
</div>

<div className="glass-card p-8 rounded-3xl border border-white/5">
<h3 className="text-lg font-medium text-white mb-1">Enterprise</h3>
<p className="text-xs text-slate-500 font-light mb-6">For large organizations</p>
<div className="text-4xl font-semibold text-white mb-8 tracking-tight">Custom</div>
<ul className="space-y-4 mb-8 min-h-[160px]">
<li className="flex items-center text-sm text-slate-300 font-light"><iconify-icon className="mr-3 text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> All Pro features</li>
<li className="flex items-center text-sm text-slate-300 font-light"><iconify-icon className="mr-3 text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Advanced analytics</li>
<li className="flex items-center text-sm text-slate-300 font-light"><iconify-icon className="mr-3 text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Custom integrations</li>
<li className="flex items-center text-sm text-slate-300 font-light"><iconify-icon className="mr-3 text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Dedicated success manager</li>
</ul>
<a className="block w-full py-3 text-center rounded-full btn-glass text-sm font-medium" href="#">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center glass-card p-12 md:p-20 rounded-[3rem] border border-emerald-500/20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">Start Building a Smarter Workplace Today</h2>
<p className="text-lg italic text-slate-400 font-light mb-10 max-w-2xl mx-auto">Join thousands of companies transforming their HR operations with our premium platform.</p>
<div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
<a className="btn-glow px-8 py-3.5 rounded-full text-sm font-medium w-full sm:w-auto" href="#">Start Free Trial</a>
<a className="btn-glass px-8 py-3.5 rounded-full text-sm font-medium w-full sm:w-auto" href="#">Schedule a Demo</a>
</div>
<div className="flex justify-center items-center space-x-6 text-xs text-slate-500 font-light">
<span className="flex items-center"><iconify-icon className="mr-1.5 text-emerald-500" icon="solar:shield-check-linear"></iconify-icon> Built for modern teams</span>
<span className="flex items-center"><iconify-icon className="mr-1.5 text-emerald-500" icon="solar:close-circle-linear"></iconify-icon> Cancel anytime</span>
</div>
</div>
</section>

<footer className="border-t border-white/5 pt-16 pb-8 mt-auto bg-[#030706] relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2 pr-8">
<div className="flex items-center space-x-2 mb-4">
<div className="w-5 h-5 rounded-[4px] bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
<span className="text-white font-medium tracking-tighter text-base">HRM</span>
</div>
<p className="text-sm text-slate-500 font-light max-w-xs leading-relaxed">
                        A modern HR platform built to simplify workforce management and drive business growth through intelligent precision.
                    </p>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Product</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-white transition-colors font-light" href="#">Features</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors font-light" href="#">Pricing</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors font-light" href="#">Integrations</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors font-light" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-white transition-colors font-light" href="#">About Us</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors font-light" href="#">Careers</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors font-light" href="#">Blog</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors font-light" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Resources</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-white transition-colors font-light" href="#">Help Center</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors font-light" href="#">Documentation</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors font-light" href="#">Community</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors font-light" href="#">Privacy &amp; Terms</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between">
<p className="text-xs text-slate-600 font-light">© 2024 HRM Platform. All rights reserved.</p>
<div className="flex space-x-4 mt-4 md:mt-0 text-slate-600">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:link-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
