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



        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        });

        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
            });
        });
    
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
      

<header className="fixed w-full top-0 z-50 transition-all duration-300">
<div className="absolute inset-0 bg-white/80 backdrop-blur-lg border-b border-slate-200/60"></div>
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative z-10">

<a className="flex items-center gap-2.5 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
<span className="iconify" data-icon="lucide:zap" data-width="18"></span>
</div>
<span className="text-lg font-bold tracking-tight text-slate-900">
                    Bangkok<span className="text-indigo-600">Boost</span>
</span>
</a>

<nav className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/50 backdrop-blur-sm">
<a className="px-4 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all" href="#services">Services</a>
<a className="px-4 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all" href="#process">Process</a>
<a className="px-4 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all" href="#pricing">Pricing</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center h-9 px-5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-all shadow-lg shadow-slate-900/20 ring-1 ring-white/20" href="#audit">
                    Free Audit
                </a>
<button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors" id="mobile-menu-btn">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>

<div className="hidden md:hidden absolute top-16 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 p-6 flex-col gap-4 shadow-xl animate-in slide-in-from-top-2" id="mobile-menu">
<a className="text-sm font-medium text-slate-600 py-2 block" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 py-2 block" href="#process">Process</a>
<a className="text-sm font-medium text-slate-600 py-2 block" href="#pricing">Pricing</a>
<a className="w-full text-center py-3 text-sm font-bold text-white bg-indigo-600 rounded-lg shadow-md" href="#audit">Get Started</a>
</div>
</header>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">

<div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-indigo-50/50 to-transparent pointer-events-none"></div>
<div className="absolute -top-20 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-pulse" style={{animationDuration: '4s'}}></div>
<div className="absolute top-40 -left-20 w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="max-w-xl fade-in-up" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-700 text-[11px] font-semibold tracking-wide uppercase shadow-sm mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    Helping Thai Businesses Scale
                </div>
<h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.05] mb-8">
                    Digital Growth, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Accelerated.</span>
</h1>
<p className="text-lg text-slate-600 mb-10 leading-relaxed font-light max-w-lg">
                    We optimize your online presence, automate your leads, and manage your reputation. The modern agency for Bangkok's ambitious brands.
                </p>
<div className="flex flex-col sm:flex-row gap-4 items-start">
<form className="flex w-full sm:max-w-sm items-center gap-2">
<input className="w-full px-4 h-12 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-sm transition-all" placeholder="Enter your website..." type="email"/>
<button className="h-12 px-6 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg transition-all shadow-lg shadow-indigo-500/30 whitespace-nowrap" type="button">
                            Analyze
                        </button>
</form>
</div>
<div className="mt-10 flex items-center gap-6">
<div className="flex -space-x-3">
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-white" src="https://ui-avatars.com/api/?name=Som&amp;background=e2e8f0&amp;color=64748b"/>
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-white" src="https://ui-avatars.com/api/?name=Joy&amp;background=cbd5e1&amp;color=64748b"/>
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-white" src="https://ui-avatars.com/api/?name=Ben&amp;background=94a3b8&amp;color=ffffff"/>
</div>
<div>
<div className="flex text-yellow-500 mb-1">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
</div>
<p className="text-xs font-medium text-slate-500">Trusted by <span className="text-slate-900">50+ local founders</span></p>
</div>
</div>
</div>
<div className="relative fade-in-up" style={{animationDelay: '0.3s'}}>

<div className="absolute -inset-4 bg-gradient-to-tr from-indigo-100 to-blue-50 rounded-[2rem] -z-10 blur-xl opacity-80"></div>

<div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200 overflow-hidden relative">

<div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 justify-between">
<div className="flex items-center gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
</div>
<div className="bg-white border border-slate-200 text-[10px] text-slate-400 px-3 py-1 rounded-md flex items-center gap-1">
<span className="iconify" data-icon="lucide:lock" data-width="8"></span>
                            bangkokboost.com/dashboard
                        </div>
</div>

<div className="p-6 md:p-8">
<div className="flex justify-between items-end mb-8">
<div>
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Total Revenue</p>
<h3 className="text-3xl font-bold text-slate-900">฿845,200</h3>
</div>
<div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded text-xs font-semibold">
<span className="iconify" data-icon="lucide:trending-up"></span> +24.5%
                            </div>
</div>

<div className="flex items-end gap-3 h-32 mb-8" id="chart-bars">
<div className="w-full bg-slate-50 rounded-t-sm h-1/2 relative group">
<div className="absolute bottom-0 w-full bg-slate-200 rounded-t-sm h-full group-hover:bg-indigo-200 transition-colors"></div>
</div>
<div className="w-full bg-slate-50 rounded-t-sm h-3/4 relative group">
<div className="absolute bottom-0 w-full bg-slate-200 rounded-t-sm h-full group-hover:bg-indigo-200 transition-colors"></div>
</div>
<div className="w-full bg-slate-50 rounded-t-sm h-2/3 relative group">
<div className="absolute bottom-0 w-full bg-slate-200 rounded-t-sm h-full group-hover:bg-indigo-200 transition-colors"></div>
</div>
<div className="w-full bg-slate-50 rounded-t-sm h-full relative group">
<div className="absolute bottom-0 w-full bg-indigo-500 rounded-t-sm h-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
</div>
<div className="w-full bg-slate-50 rounded-t-sm h-4/5 relative group">
<div className="absolute bottom-0 w-full bg-slate-200 rounded-t-sm h-full group-hover:bg-indigo-200 transition-colors"></div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-xl bg-slate-50 border border-slate-100 group hover:border-indigo-100 transition-colors">
<div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-500 mb-3 shadow-sm">
<span className="iconify" data-icon="lucide:users" data-width="16"></span>
</div>
<div className="text-xs text-slate-500">Active Users</div>
<div className="font-semibold text-slate-800">12.5k</div>
</div>
<div className="p-4 rounded-xl bg-slate-50 border border-slate-100 group hover:border-indigo-100 transition-colors">
<div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-purple-500 mb-3 shadow-sm">
<span className="iconify" data-icon="lucide:mouse-pointer-2" data-width="16"></span>
</div>
<div className="text-xs text-slate-500">Click Rate</div>
<div className="font-semibold text-slate-800">4.2%</div>
</div>
</div>
</div>
</div>

<div className="absolute -right-4 top-20 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/50 flex items-center gap-3 animate-bounce max-w-[240px]" style={{animationDuration: '3s'}}>
<div className="relative">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-green-500/30">
<span className="iconify" data-icon="lucide:phone" data-width="18"></span>
</div>
<span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
</div>
<div>
<p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">New Lead</p>
<p className="text-xs font-semibold text-slate-800">Siam Paragon Branch inquiry received.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">Powering local champions</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
<div className="flex items-center gap-2 text-slate-900 font-bold text-xl"><span className="iconify" data-icon="lucide:coffee"></span> ROAST</div>
<div className="flex items-center gap-2 text-slate-900 font-bold text-xl"><span className="iconify" data-icon="lucide:shopping-bag"></span> POMELO</div>
<div className="flex items-center gap-2 text-slate-900 font-bold text-xl"><span className="iconify" data-icon="lucide:activity"></span> F45</div>
<div className="flex items-center gap-2 text-slate-900 font-bold text-xl"><span className="iconify" data-icon="lucide:anchor"></span> SEAFOOD</div>
<div className="flex items-center gap-2 text-slate-900 font-bold text-xl"><span className="iconify" data-icon="lucide:zap"></span> VOLT</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">Complete Digital Ecosystem</h2>
<p className="text-slate-500 text-lg font-light">We don't just "do marketing". We build systems that print customers for your business.</p>
</div>
<a className="text-indigo-600 font-semibold hover:text-indigo-700 flex items-center gap-2 text-sm group" href="#audit">
                    View all solutions 
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">

<div className="md:col-span-2 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 group overflow-hidden relative">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-indigo-500/30">
<span className="iconify" data-icon="lucide:map-pin" data-width="24"></span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Google Business Mastery</h3>
<p className="text-slate-500 leading-relaxed max-w-md">Dominate the "near me" searches. We optimize your GMB profile, manage reviews, and post updates to ensure you are the #1 choice in your district.</p>
</div>
</div>

<div className="row-span-2 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:message-circle" data-width="24"></span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Social Automation</h3>
<p className="text-slate-500 leading-relaxed mb-6">Automated replies for LINE OA and Facebook Messenger. Capture leads while you sleep.</p>
<div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-slate-200"></div>
<div className="h-2 w-20 bg-slate-200 rounded"></div>
</div>
<div className="h-2 w-full bg-slate-200 rounded mb-2"></div>
<div className="h-2 w-2/3 bg-slate-200 rounded"></div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:layout" data-width="24"></span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Conversion Web Design</h3>
<p className="text-slate-500 text-sm leading-relaxed">Fast, mobile-first landing pages built to convert Thai traffic.</p>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:bar-chart-3" data-width="24"></span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Data Analytics</h3>
<p className="text-slate-500 text-sm leading-relaxed">Weekly reports that show you exactly where every Baht goes.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200" id="process">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-indigo-600 font-semibold text-xs tracking-wider uppercase mb-2 block">Workflow</span>
<h2 className="text-3xl md:text-4xl font-bold text-slate-900">From Audit to Automation</h2>
</div>
<div className="relative">

<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-200 via-slate-200 to-transparent md:-translate-x-1/2"></div>
<div className="space-y-16">

<div className="relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center justify-between group">
<div className="md:w-[45%] md:text-right order-2 md:order-1 pl-16 md:pl-0">
<h3 className="text-xl font-bold text-slate-900 mb-2">The Deep Dive Audit</h3>
<p className="text-slate-500">We analyze your competitors, SEO health, and social gaps. We find the "low hanging fruit" revenue you are missing.</p>
</div>
<div className="absolute left-6 md:left-1/2 w-12 h-12 -translate-x-1/2 rounded-full bg-white border-4 border-indigo-50 shadow-lg shadow-indigo-100 flex items-center justify-center text-indigo-600 z-10 font-bold order-1 md:order-2">1</div>
<div className="md:w-[45%] order-3 pl-16 md:pl-0">
<div className="bg-slate-50 border border-slate-100 p-4 rounded-xl shadow-sm rotate-1 group-hover:rotate-0 transition-transform duration-500">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<span className="text-xs text-slate-400">SEO Score</span>
</div>
<div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
<div className="bg-red-400 h-full w-[40%]"></div>
</div>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center justify-between group">
<div className="md:w-[45%] md:text-right order-2 md:order-1 pl-16 md:pl-0">
<div className="bg-slate-50 border border-slate-100 p-4 rounded-xl shadow-sm -rotate-1 group-hover:rotate-0 transition-transform duration-500 flex justify-end">
<div className="flex gap-2">
<div className="w-8 h-8 rounded bg-indigo-100 flex items-center justify-center text-indigo-600"><span className="iconify" data-icon="lucide:settings-2" data-width="16"></span></div>
<div className="w-8 h-8 rounded bg-blue-100 flex items-center justify-center text-blue-600"><span className="iconify" data-icon="lucide:link" data-width="16"></span></div>
</div>
</div>
</div>
<div className="absolute left-6 md:left-1/2 w-12 h-12 -translate-x-1/2 rounded-full bg-white border-4 border-indigo-50 shadow-lg shadow-indigo-100 flex items-center justify-center text-indigo-600 z-10 font-bold order-1 md:order-2">2</div>
<div className="md:w-[45%] order-3 pl-16 md:pl-0">
<h3 className="text-xl font-bold text-slate-900 mb-2">Systems Implementation</h3>
<p className="text-slate-500">We set up the lead capture forms, configure the chatbots, and optimize your Google Maps listing.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center justify-between group">
<div className="md:w-[45%] md:text-right order-2 md:order-1 pl-16 md:pl-0">
<h3 className="text-xl font-bold text-slate-900 mb-2">Scale &amp; Optimize</h3>
<p className="text-slate-500">Monthly reports and continuous tweaking. We don't just set it and forget it; we aim for MoM growth.</p>
</div>
<div className="absolute left-6 md:left-1/2 w-12 h-12 -translate-x-1/2 rounded-full bg-white border-4 border-indigo-50 shadow-lg shadow-indigo-100 flex items-center justify-center text-indigo-600 z-10 font-bold order-1 md:order-2">3</div>
<div className="md:w-[45%] order-3 pl-16 md:pl-0">
<div className="bg-slate-50 border border-slate-100 p-4 rounded-xl shadow-sm rotate-1 group-hover:rotate-0 transition-transform duration-500">
<div className="flex items-center justify-between">
<span className="text-xs text-slate-500">Monthly Leads</span>
<span className="text-xs font-bold text-emerald-600">+124%</span>
</div>
<div className="mt-2 flex items-end gap-1 h-8">
<div className="w-full bg-emerald-200 h-[30%] rounded-t-sm"></div>
<div className="w-full bg-emerald-200 h-[50%] rounded-t-sm"></div>
<div className="w-full bg-emerald-200 h-[70%] rounded-t-sm"></div>
<div className="w-full bg-emerald-500 h-[100%] rounded-t-sm"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Simple, Transparent Pricing</h2>

<div className="flex items-center p-1 bg-white border border-slate-200 rounded-lg">
<button className="px-6 py-2 text-sm font-medium bg-slate-900 text-white rounded shadow-sm transition-all">Monthly</button>
<button className="px-6 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-all flex items-center gap-2">
                        Yearly 
                        <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold">-20%</span>
</button>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-start">

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-slate-300 transition-all">
<h3 className="text-lg font-semibold text-slate-900">Starter</h3>
<p className="text-sm text-slate-500 mt-1 mb-6">Essential visibility for small shops.</p>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-bold text-slate-900">฿3,500</span>
<span className="text-slate-400 text-sm">/mo</span>
</div>
<a className="block w-full py-3 px-4 bg-slate-50 hover:bg-slate-100 text-slate-900 font-semibold text-center rounded-xl border border-slate-200 transition-all text-sm" href="#audit">Start Trial</a>
<ul className="mt-8 space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-600">
<span className="iconify text-indigo-600 shrink-0 mt-0.5" data-icon="lucide:check" data-width="16"></span> Google Maps Optimization
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<span className="iconify text-indigo-600 shrink-0 mt-0.5" data-icon="lucide:check" data-width="16"></span> 1 Social Post / Week
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<span className="iconify text-indigo-600 shrink-0 mt-0.5" data-icon="lucide:check" data-width="16"></span> Monthly Report
                        </li>
</ul>
</div>

<div className="bg-slate-900 rounded-2xl p-8 border border-indigo-500 shadow-2xl shadow-indigo-500/10 relative scale-105 z-10">
<div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">POPULAR</div>
<h3 className="text-lg font-semibold text-white">Growth</h3>
<p className="text-sm text-slate-400 mt-1 mb-6">Automation for scaling businesses.</p>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-bold text-white">฿7,500</span>
<span className="text-slate-400 text-sm">/mo</span>
</div>
<a className="block w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-center rounded-xl shadow-lg shadow-indigo-500/25 transition-all text-sm" href="#audit">Get Started</a>
<ul className="mt-8 space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-300">
<span className="iconify text-indigo-400 shrink-0 mt-0.5" data-icon="lucide:check" data-width="16"></span> <strong>All Starter features</strong>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<span className="iconify text-indigo-400 shrink-0 mt-0.5" data-icon="lucide:check" data-width="16"></span> Automated Chatbots (LINE/FB)
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<span className="iconify text-indigo-400 shrink-0 mt-0.5" data-icon="lucide:check" data-width="16"></span> 3 Social Posts / Week
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<span className="iconify text-indigo-400 shrink-0 mt-0.5" data-icon="lucide:check" data-width="16"></span> Review Management
                        </li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-slate-300 transition-all">
<h3 className="text-lg font-semibold text-slate-900">Scale</h3>
<p className="text-sm text-slate-500 mt-1 mb-6">Full digital department.</p>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-bold text-slate-900">฿15,000</span>
<span className="text-slate-400 text-sm">/mo</span>
</div>
<a className="block w-full py-3 px-4 bg-slate-50 hover:bg-slate-100 text-slate-900 font-semibold text-center rounded-xl border border-slate-200 transition-all text-sm" href="#audit">Contact Sales</a>
<ul className="mt-8 space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-600">
<span className="iconify text-indigo-600 shrink-0 mt-0.5" data-icon="lucide:check" data-width="16"></span> <strong>All Growth features</strong>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<span className="iconify text-indigo-600 shrink-0 mt-0.5" data-icon="lucide:check" data-width="16"></span> Website Management
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<span className="iconify text-indigo-600 shrink-0 mt-0.5" data-icon="lucide:check" data-width="16"></span> Ad Campaign Setup
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden" id="audit">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">Stop guessing.<br/>Start growing.</h2>
<p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">Get a comprehensive digital health audit of your business completely free. No strings attached.</p>
<div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl max-w-2xl mx-auto shadow-2xl">
<form className="grid sm:grid-cols-2 gap-4">
<div className="col-span-2 sm:col-span-1">
<label className="block text-left text-xs font-semibold text-slate-300 mb-1.5 ml-1">Business Name</label>
<input className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="e.g. Somchai Logistics" type="text"/>
</div>
<div className="col-span-2 sm:col-span-1">
<label className="block text-left text-xs font-semibold text-slate-300 mb-1.5 ml-1">Your Email</label>
<input className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="you@company.com" type="email"/>
</div>
<div className="col-span-2">
<label className="block text-left text-xs font-semibold text-slate-300 mb-1.5 ml-1">Website URL (Optional)</label>
<input className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="https://" type="text"/>
</div>
<div className="col-span-2 mt-2">
<button className="w-full py-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 group" type="button">
                            Get My Free Audit
                            <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right"></span>
</button>
</div>
</form>
<p className="text-slate-500 text-xs mt-4">We respect your privacy. Zero spam guarantee.</p>
</div>
</div>
</section>

<footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-4 text-white">
<div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center text-xs">
<span className="iconify" data-icon="lucide:zap"></span>
</div>
<span className="text-lg font-bold">BangkokBoost</span>
</div>
<p className="text-slate-400 text-sm">Empowering Thai entrepreneurs with data-driven digital strategies and automation.</p>
</div>
<div className="flex flex-wrap gap-12 sm:gap-24">
<div>
<h4 className="text-white font-semibold text-sm mb-4">Platform</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Services</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Case Studies</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold text-sm mb-4">Connect</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li className="flex items-center gap-2"><span className="iconify" data-icon="lucide:twitter"></span> Twitter</li>
<li className="flex items-center gap-2"><span className="iconify" data-icon="lucide:instagram"></span> Instagram</li>
<li className="flex items-center gap-2"><span className="iconify text-green-500" data-icon="lucide:message-square"></span> LINE OA</li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">© 2023 Bangkok Boost Studio. Made in Thailand.</p>
<div className="flex gap-4">
<a className="text-xs text-slate-500 hover:text-slate-300" href="#">Privacy</a>
<a className="text-xs text-slate-500 hover:text-slate-300" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
