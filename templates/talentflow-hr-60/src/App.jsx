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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl tracking-tighter font-medium text-slate-900 flex items-center gap-2 z-50" href="#">
<div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
<span className="text-xs font-semibold">T</span>
</div>
                TalentFlow
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-blue-600 transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-blue-600 transition-colors" href="#customers">Customers</a>
<a className="hover:text-blue-600 transition-colors" href="#testimonials">Stories</a>
<a className="hover:text-blue-600 transition-colors" href="#pricing">Pricing</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Log in</a>
<a className="px-4 py-2 bg-slate-900 text-white text-xs font-medium rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-200" href="#contact">
                    Book Demo
                </a>
</div>

<label className="md:hidden cursor-pointer z-50 p-2 text-slate-600">
<input className="hidden" id="mobile-menu-toggle" type="checkbox"/>
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>

<div className="hidden absolute top-16 left-0 right-0 bg-white border-b border-slate-100 p-6 shadow-xl" id="mobile-menu">
<div className="flex flex-col gap-4 text-sm font-medium text-slate-600">
<a className="hover:text-blue-600" href="#solutions">Solutions</a>
<a className="hover:text-blue-600" href="#customers">Customers</a>
<a className="hover:text-blue-600" href="#testimonials">Stories</a>
<a className="hover:text-blue-600" href="#pricing">Pricing</a>
<hr className="border-slate-100 my-2"/>
<a className="hover:text-slate-900" href="#">Log in</a>
<a className="text-blue-600" href="#contact">Book Demo</a>
</div>
</div>
</label>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
<div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
<div className="absolute top-20 right-10 w-96 h-96 bg-cyan-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-indigo-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
</div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-6">
<span className="flex h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                    Reimagining Human Resources
                </div>
<h1 className="text-5xl lg:text-7xl tracking-tight font-medium text-slate-900 mb-8 leading-[1.05]">
                    Orchestrate your entire <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">workforce</span> with clarity.
                </h1>
<p className="text-lg text-slate-500 mb-10 font-light leading-relaxed max-w-lg">
                    Streamline recruitment, onboarding, and talent management in one unified platform. Designed for modern teams who value efficiency.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/30 group" href="#contact">
                        Start for free
                        <iconify-icon className="ml-2 group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center px-6 py-3 bg-white text-slate-700 border border-slate-200 text-sm font-medium rounded-lg hover:bg-slate-50 transition-all" href="#">
<iconify-icon className="mr-2 text-slate-400" icon="solar:play-circle-linear" width="18"></iconify-icon>
                        Watch Showreel
                    </a>
</div>
<div className="mt-12 flex items-center gap-4 text-xs text-slate-500 font-medium">
<div className="flex -space-x-3">
<img alt="User" className="w-9 h-9 rounded-full border-2 border-slate-50" src="https://i.pravatar.cc/100?img=1"/>
<img alt="User" className="w-9 h-9 rounded-full border-2 border-slate-50" src="https://i.pravatar.cc/100?img=5"/>
<img alt="User" className="w-9 h-9 rounded-full border-2 border-slate-50" src="https://i.pravatar.cc/100?img=8"/>
<div className="w-9 h-9 rounded-full border-2 border-slate-50 bg-slate-100 flex items-center justify-center text-[10px] text-slate-600">+2k</div>
</div>
<div>
<p className="text-slate-900">Trusted by 2,000+ teams</p>
<div className="flex text-yellow-400 gap-0.5 mt-0.5">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="relative mx-auto lg:ml-auto w-full max-w-md lg:max-w-lg aspect-square">

<div className="absolute inset-4 rounded-[3rem] bg-gradient-to-tr from-blue-50 to-indigo-50 overflow-hidden shadow-2xl shadow-blue-900/5 ring-1 ring-slate-900/5">

<img alt="HR Professional" className="w-full h-full object-cover object-center opacity-90 hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=2576&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-12 -left-4 bg-white/80 backdrop-blur-md border border-white/50 p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] animate-float-slow max-w-[200px]">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-slate-900">Candidate Hired</p>
<p className="text-[10px] text-slate-500">Engineering Dept</p>
</div>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[80%] rounded-full"></div>
</div>
</div>

<div className="absolute bottom-12 -right-4 bg-white/80 backdrop-blur-md border border-white/50 p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] animate-float-delayed min-w-[180px]">
<div className="flex items-start justify-between gap-6">
<div className="text-center">
<p className="text-[10px] font-medium text-slate-500 uppercase tracking-wider mb-1">Interviews</p>
<p className="text-2xl font-bold text-slate-900 tracking-tight">24</p>
</div>
<div className="w-px h-10 bg-slate-200"></div>
<div className="text-center">
<p className="text-[10px] font-medium text-slate-500 uppercase tracking-wider mb-1">Efficiency</p>
<p className="text-2xl font-bold text-blue-600 tracking-tight">+18%</p>
</div>
</div>
</div>

<div className="absolute top-1/2 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-xl -z-10"></div>
<div className="absolute -bottom-8 -left-8 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -z-10"></div>
</div>
</div>
</section>

<section className="py-12 border-y border-slate-200/60 bg-white" id="customers">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-semibold text-slate-400 mb-8 uppercase tracking-widest">Powering teams at companies like</p>
<div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
<div className="text-lg font-bold tracking-tighter text-slate-800 flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:align-bottom-bold"></iconify-icon> ACME
                </div>
<div className="text-lg font-bold tracking-tighter text-slate-800 flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:atom-bold"></iconify-icon> Kinetik
                </div>
<div className="text-lg font-bold tracking-tighter text-slate-800 flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:bolt-circle-bold"></iconify-icon> BoltFlow
                </div>
<div className="text-lg font-bold tracking-tighter text-slate-800 flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:box-bold"></iconify-icon> Layer
                </div>
<div className="text-lg font-bold tracking-tighter text-slate-800 flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:chart-square-bold"></iconify-icon> Scale
                </div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-semibold uppercase tracking-wider mb-4">
                    Features
                </div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Complete HR ecosystem</h2>
<p className="text-slate-500 font-light text-lg">Everything you need to manage your people, from first hello to long-term growth.</p>
</div>

<div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 group">
<div className="order-2 md:order-1 relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm aspect-[4/3] flex items-center justify-center p-8 transition-shadow hover:shadow-xl hover:shadow-blue-900/5 duration-500">
<div className="absolute inset-0 bg-blue-50/40 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>

<div className="relative w-full max-w-xs bg-white rounded-xl shadow-lg border border-slate-100 p-5 transform transition-transform duration-500 group-hover:scale-105">
<div className="flex items-center gap-3 mb-5">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:user-id-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="h-2.5 w-24 bg-slate-100 rounded mb-2"></div>
<div className="h-2 w-16 bg-slate-50 rounded"></div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
<span className="text-[10px] text-slate-500 font-medium">Resume Score</span>
<span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">98% Match</span>
</div>
<div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
<span className="text-[10px] text-slate-500 font-medium">Experience</span>
<span className="text-[10px] font-semibold text-slate-700">5 Years</span>
</div>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<div className="w-12 h-12 bg-blue-600/10 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:users-group-two-rounded-bold" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4">Smart Recruitment</h3>
<p className="text-slate-500 leading-relaxed font-light mb-8 text-lg">
                        Automate sourcing and screening with AI-driven insights. Find the perfect fit for your culture without the manual grind.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Automated resume parsing and ranking</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>One-click interview scheduling with calendar sync</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Collaborative hiring pipelines</span>
</li>
</ul>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 group">
<div className="md:pr-10">
<div className="w-12 h-12 bg-indigo-600/10 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:rocket-2-bold" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4">Seamless Onboarding</h3>
<p className="text-slate-500 leading-relaxed font-light mb-8 text-lg">
                        Create memorable first days. Assign tasks, provision equipment, and introduce team members automatically.
                    </p>
<a className="text-indigo-600 text-sm font-semibold hover:text-indigo-700 inline-flex items-center group/link" href="#">
                        Explore Onboarding <iconify-icon className="ml-1 group-hover/link:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm aspect-[4/3] flex items-center justify-center p-8 transition-shadow hover:shadow-xl hover:shadow-indigo-900/5 duration-500">
<div className="absolute inset-0 bg-indigo-50/40 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>

<div className="relative w-full max-w-xs bg-white rounded-xl shadow-lg border border-slate-100 p-6 transform transition-transform duration-500 group-hover:scale-105">
<div className="flex justify-between items-center mb-6">
<p className="text-xs font-semibold text-slate-900 uppercase tracking-wider">Day 1 Checklist</p>
<span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded-full">2/3 Done</span>
</div>
<div className="space-y-4">
<div className="flex items-center gap-3 group/item cursor-pointer">
<div className="text-indigo-500 transition-transform group-hover/item:scale-110">
<iconify-icon icon="solar:check-square-bold" width="18"></iconify-icon>
</div>
<span className="text-sm text-slate-400 line-through decoration-slate-300">Sign Contract</span>
</div>
<div className="flex items-center gap-3 group/item cursor-pointer">
<div className="text-indigo-500 transition-transform group-hover/item:scale-110">
<iconify-icon icon="solar:check-square-bold" width="18"></iconify-icon>
</div>
<span className="text-sm text-slate-400 line-through decoration-slate-300">Setup Email</span>
</div>
<div className="flex items-center gap-3 group/item cursor-pointer">
<div className="text-slate-300 transition-transform group-hover/item:scale-110">
<iconify-icon icon="solar:box-minimalistic-linear" width="18"></iconify-icon>
</div>
<span className="text-sm text-slate-900 font-medium">Team Lunch</span>
</div>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 group">
<div className="order-2 md:order-1 relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm aspect-[4/3] flex items-center justify-center p-8 transition-shadow hover:shadow-xl hover:shadow-emerald-900/5 duration-500">
<div className="absolute inset-0 bg-emerald-50/40 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>

<div className="relative w-full max-w-xs space-y-3">
<div className="bg-white rounded-xl shadow-lg border border-slate-100 p-4 transform -rotate-2 transition-transform duration-500 group-hover:-rotate-3 group-hover:-translate-y-1">
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<iconify-icon icon="solar:wallet-bold" width="16"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-500">Net Pay</span>
</div>
<span className="text-sm font-bold text-slate-900 font-mono">$4,250.00</span>
</div>
</div>
<div className="bg-white rounded-xl shadow-lg border border-slate-100 p-4 transform rotate-1 transition-transform duration-500 group-hover:rotate-2 group-hover:translate-y-1">
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:document-text-bold" width="16"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-500">Taxes</span>
</div>
<span className="text-sm font-bold text-slate-900 font-mono">$1,100.00</span>
</div>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<div className="w-12 h-12 bg-emerald-600/10 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:wallet-money-bold" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4">Global Payroll</h3>
<p className="text-slate-500 leading-relaxed font-light mb-8 text-lg">
                        Pay your team in 150+ currencies with compliance built-in. Tax filings, benefits, and deductions handled instantly.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Local tax compliance in 100+ countries</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Instant contractor payouts</span>
</li>
</ul>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 group">
<div className="md:pr-10">
<div className="w-12 h-12 bg-orange-600/10 text-orange-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:pie-chart-2-bold" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4">People Analytics</h3>
<p className="text-slate-500 leading-relaxed font-light mb-8 text-lg">
                        Make data-backed decisions. Track retention, eNPS, and diversity metrics in real-time dashboards.
                    </p>
<a className="text-orange-600 text-sm font-semibold hover:text-orange-700 inline-flex items-center group/link" href="#">
                        View Sample Reports <iconify-icon className="ml-1 group-hover/link:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm aspect-[4/3] flex items-center justify-center p-8 transition-shadow hover:shadow-xl hover:shadow-orange-900/5 duration-500">
<div className="absolute inset-0 bg-orange-50/40 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>

<div className="relative w-full max-w-xs bg-white rounded-xl shadow-lg border border-slate-100 p-5 transform transition-transform duration-500 group-hover:scale-105">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-semibold text-slate-900">Headcount Growth</span>
<span className="text-[10px] text-orange-600 bg-orange-50 px-2 py-0.5 rounded font-medium">+22%</span>
</div>
<div className="flex items-end justify-between gap-2 h-24 mb-2">
<div className="w-full bg-orange-100 rounded-t h-[40%] hover:bg-orange-500 transition-colors duration-300"></div>
<div className="w-full bg-orange-200 rounded-t h-[60%] hover:bg-orange-500 transition-colors duration-300"></div>
<div className="w-full bg-orange-300 rounded-t h-[30%] hover:bg-orange-500 transition-colors duration-300"></div>
<div className="w-full bg-orange-400 rounded-t h-[50%] hover:bg-orange-500 transition-colors duration-300"></div>
<div className="w-full bg-orange-500 rounded-t h-[80%] shadow-lg shadow-orange-500/20"></div>
</div>
<div className="border-t border-slate-100 pt-3 flex justify-between font-mono">
<span className="text-[10px] text-slate-400">Q1</span>
<span className="text-[10px] text-slate-400">Q4</span>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="order-2 md:order-1 relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm aspect-[4/3] flex items-center justify-center p-8 transition-shadow hover:shadow-xl hover:shadow-purple-900/5 duration-500">
<div className="absolute inset-0 bg-purple-50/40 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>

<div className="relative w-full max-w-xs bg-white rounded-xl shadow-lg border border-slate-100 p-6 flex items-center gap-4 transform transition-transform duration-500 group-hover:scale-105">
<div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden ring-2 ring-white shadow-sm">
<img alt="Employee" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=32"/>
</div>
<div className="flex-1">
<p className="text-xs font-bold text-slate-900">Sarah Jenkins</p>
<p className="text-[10px] text-slate-500 mb-2">Product Designer</p>
<div className="flex gap-1 text-yellow-400">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-slate-200" icon="solar:star-bold" width="12"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<div className="w-12 h-12 bg-purple-600/10 text-purple-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:medal-star-bold" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4">Performance &amp; Growth</h3>
<p className="text-slate-500 leading-relaxed font-light mb-8 text-lg">
                        Replace annual reviews with continuous feedback loops. Set OKRs and track career progression transparently.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-center text-slate-900 tracking-tight mb-16">Loved by HR Leaders</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="mb-6 text-blue-600">
<iconify-icon icon="solar:quote-up-square-linear" width="32"></iconify-icon>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                        "TalentFlow transformed how we handle recruitment. We cut our time-to-hire by 40% in just two months. The interface is simply beautiful."
                    </p>
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-10 h-10 rounded-full grayscale opacity-80" src="https://i.pravatar.cc/100?img=12"/>
<div>
<p className="text-xs font-bold text-slate-900">Elena Ross</p>
<p className="text-[10px] text-slate-500 uppercase tracking-wide">VP of People, TechSpace</p>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="mb-6 text-blue-600">
<iconify-icon icon="solar:quote-up-square-linear" width="32"></iconify-icon>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                        "The analytics feature is a game changer. I can finally show the board exactly how our retention strategies are paying off financially."
                    </p>
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-10 h-10 rounded-full grayscale opacity-80" src="https://i.pravatar.cc/100?img=33"/>
<div>
<p className="text-xs font-bold text-slate-900">Marcus Chen</p>
<p className="text-[10px] text-slate-500 uppercase tracking-wide">HR Director, GlobalCorp</p>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="mb-6 text-blue-600">
<iconify-icon icon="solar:quote-up-square-linear" width="32"></iconify-icon>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                        "Onboarding used to be a nightmare of paperwork. Now, new hires have a magical first day experience. Support is also top-notch."
                    </p>
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-10 h-10 rounded-full grayscale opacity-80" src="https://i.pravatar.cc/100?img=44"/>
<div>
<p className="text-xs font-bold text-slate-900">Sarah Miller</p>
<p className="text-[10px] text-slate-500 uppercase tracking-wide">Founder, StartupX</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 text-white relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Ready to modernize your HR?</h2>
<p className="text-slate-400 font-light mb-10 max-w-sm text-lg leading-relaxed">Get a personalized demo of TalentFlow. See how we can solve your specific challenges.</p>
<div className="space-y-8">
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
<iconify-icon className="text-blue-400" icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Email us</p>
<p className="text-sm font-medium hover:text-blue-400 transition-colors cursor-pointer">hello@talentflow.com</p>
</div>
</div>
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
<iconify-icon className="text-blue-400" icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Office</p>
<p className="text-sm font-medium">123 Market St, San Francisco</p>
</div>
</div>
</div>
</div>
<div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl">
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-400 ml-1">First Name</label>
<input className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2 focus:ring-offset-[#020617] transition-all placeholder:text-slate-600 text-slate-200" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-400 ml-1">Last Name</label>
<input className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2 focus:ring-offset-[#020617] transition-all placeholder:text-slate-600 text-slate-200" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-400 ml-1">Work Email</label>
<input className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2 focus:ring-offset-[#020617] transition-all placeholder:text-slate-600 text-slate-200" placeholder="jane@company.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-400 ml-1">Company Size</label>
<div className="relative">
<select className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2 focus:ring-offset-[#020617] transition-all appearance-none cursor-pointer">
<option>1-50 employees</option>
<option>51-200 employees</option>
<option>201-1000 employees</option>
<option>1000+ employees</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-xl mt-2 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] active:scale-[0.98]" type="button">
                            Request Demo
                        </button>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-center text-slate-900 tracking-tight mb-16">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group bg-slate-50 p-5 rounded-2xl cursor-pointer border border-transparent hover:border-slate-200 transition-colors">
<summary className="flex justify-between items-center font-medium text-slate-900 text-sm">
<span>How long does implementation take?</span>
<div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-slate-400 shadow-sm border border-slate-100 group-open:rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</div>
</summary>
<p className="text-slate-600 text-sm mt-4 font-light leading-relaxed pl-1 pr-4">
                        Most companies are up and running within 2-4 weeks. We offer a dedicated onboarding specialist to help migrate your data and train your team.
                    </p>
</details>

<details className="group bg-slate-50 p-5 rounded-2xl cursor-pointer border border-transparent hover:border-slate-200 transition-colors">
<summary className="flex justify-between items-center font-medium text-slate-900 text-sm">
<span>Is my employee data secure?</span>
<div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-slate-400 shadow-sm border border-slate-100 group-open:rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</div>
</summary>
<p className="text-slate-600 text-sm mt-4 font-light leading-relaxed pl-1 pr-4">
                        Absolutely. We use bank-level encryption (AES-256) and are SOC2 Type II compliant. Your data privacy and security are our top priorities.
                    </p>
</details>

<details className="group bg-slate-50 p-5 rounded-2xl cursor-pointer border border-transparent hover:border-slate-200 transition-colors">
<summary className="flex justify-between items-center font-medium text-slate-900 text-sm">
<span>Does TalentFlow integrate with Slack?</span>
<div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-slate-400 shadow-sm border border-slate-100 group-open:rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</div>
</summary>
<p className="text-slate-600 text-sm mt-4 font-light leading-relaxed pl-1 pr-4">
                        Yes! Our Slack integration allows for instant notifications for time-off requests, interview reminders, and team shout-outs.
                    </p>
</details>

<details className="group bg-slate-50 p-5 rounded-2xl cursor-pointer border border-transparent hover:border-slate-200 transition-colors">
<summary className="flex justify-between items-center font-medium text-slate-900 text-sm">
<span>Can I customize the reports?</span>
<div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-slate-400 shadow-sm border border-slate-100 group-open:rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</div>
</summary>
<p className="text-slate-600 text-sm mt-4 font-light leading-relaxed pl-1 pr-4">
                        Yes, our analytics engine is fully customizable. Build reports that matter to your stakeholders using our drag-and-drop builder.
                    </p>
</details>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-20 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-20">
<div className="col-span-2 lg:col-span-2 pr-8">
<a className="text-xl tracking-tighter font-medium text-slate-900 flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center text-white">
<span className="text-xs font-semibold">T</span>
</div>
                        TalentFlow
                    </a>
<p className="text-sm text-slate-500 font-light max-w-xs mb-8 leading-relaxed">
                        The all-in-one HR platform for teams that care about people, not just paperwork. Built for the modern workforce.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-all" href="#"><iconify-icon icon="solar:cat-bold" width="16"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-all" href="#"><iconify-icon icon="solar:basketball-bold" width="16"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-all" href="#"><iconify-icon icon="solar:camera-bold" width="16"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-5">Product</h4>
<ul className="space-y-3 text-sm text-slate-500 font-light">
<li><a className="hover:text-blue-600 transition-colors" href="#">Recruitment</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Onboarding</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Payroll</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Performance</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Analytics</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-5">Company</h4>
<ul className="space-y-3 text-sm text-slate-500 font-light">
<li><a className="hover:text-blue-600 transition-colors" href="#">About</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Customers</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Careers</a> <span className="text-[10px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded ml-1 font-medium">Hiring</span></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-5">Resources</h4>
<ul className="space-y-3 text-sm text-slate-500 font-light">
<li><a className="hover:text-blue-600 transition-colors" href="#">Community</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">API Docs</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Status</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-5">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500 font-light">
<li><a className="hover:text-blue-600 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400 font-light">
                    © 2024 TalentFlow Inc. All rights reserved.
                </p>
<div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full border border-green-100">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-medium text-green-700">All systems operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
