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
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
care: {
blue: '#20408E',
dark: '#14285A',
light: '#EBF1FF',
},
teal: {
500: '#0F766E',
50: '#F0FDFA',
},
gold: {
muted: '#D97706',
light: '#FFFBEB',
}
},
backgroundImage: {
'noise': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjY2NjIiBmaWxsLW9wYWNpdHk9IjAuMiIvPjwvc3ZnPg==')",
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
      

<nav className="fixed top-0 left-0 w-full z-50 glass border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-care-blue text-white flex items-center justify-center">
<iconify-icon icon="solar:shield-star-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900 group-hover:text-care-blue transition-colors">CareKudos</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-care-blue transition-colors" href="#features">Platform</a>
<a className="hover:text-care-blue transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-care-blue transition-colors" href="#roi">ROI</a>
<a className="hover:text-care-blue transition-colors" href="#pricing">Pricing</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-600 hover:text-care-blue" href="#">Log in</a>
<a className="bg-care-blue hover:bg-care-dark text-white text-sm font-medium px-4 py-2 rounded-lg shadow-lg shadow-care-blue/20 transition-all transform hover:-translate-y-0.5" href="#demo">
                    Request Demo
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-noise opacity-30 z-0 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-to-br from-indigo-100/50 via-teal-50/50 to-transparent rounded-full blur-3xl -z-10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

<div className="lg:col-span-5 flex flex-col gap-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 w-fit">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-care-blue opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-care-blue"></span>
</span>
<span className="text-xs font-semibold text-care-blue tracking-wide uppercase">CQC Ready 2024</span>
</div>
<h1 className="text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
                        Recognise Care.<br/>
                        Build Culture.<br/>
<span className="text-care-blue">Stay Compliant.</span>
</h1>
<p className="text-lg text-slate-500 leading-relaxed max-w-md">
                        The intelligent recognition platform that turns daily appreciation into audible compliance data for healthcare organisations.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<button className="bg-care-blue text-white px-6 py-3 rounded-lg font-medium shadow-xl shadow-care-blue/20 hover:shadow-2xl hover:shadow-care-blue/30 transition-all flex items-center justify-center gap-2 group">
                            Request a Demo
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="px-6 py-3 rounded-lg font-medium text-slate-600 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                            See how it works
                        </button>
</div>
<div className="flex items-center gap-6 pt-4 border-t border-slate-200/60 text-xs font-medium text-slate-400">
<span className="flex items-center gap-1.5">
<iconify-icon className="text-teal-500" icon="solar:shield-check-linear"></iconify-icon> GDPR Compliant
                        </span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-teal-500" icon="solar:users-group-rounded-linear"></iconify-icon> 20k+ Healthcare Staff
                        </span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-teal-500" icon="solar:chart-square-linear"></iconify-icon> Admin Dashboard
                        </span>
</div>
</div>

<div className="lg:col-span-7 relative h-[500px] lg:h-[600px] w-full">

<div className="absolute top-10 right-0 w-[90%] h-full bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden transform transition-transform hover:scale-[1.01] duration-700">

<div className="h-12 border-b border-slate-100 flex items-center px-4 gap-4">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400"></div>
<div className="w-3 h-3 rounded-full bg-amber-400/20 border border-amber-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400/20 border border-green-400"></div>
</div>
<div className="w-32 h-2 bg-slate-100 rounded-full"></div>
</div>

<div className="p-6 grid grid-cols-3 gap-6">
<div className="col-span-2 space-y-4">
<div className="flex justify-between items-end">
<div>
<div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Engagement Score</div>
<div className="text-3xl font-semibold text-slate-900">88% <span className="text-sm text-teal-600 font-medium">+12%</span></div>
</div>
<div className="flex gap-1">
<div className="w-1 h-8 bg-care-blue/20 rounded-sm"></div>
<div className="w-1 h-12 bg-care-blue/40 rounded-sm"></div>
<div className="w-1 h-16 bg-care-blue rounded-sm"></div>
<div className="w-1 h-10 bg-care-blue/30 rounded-sm"></div>
</div>
</div>
<div className="h-40 bg-slate-50 rounded-lg border border-slate-100 p-4">
<div className="flex justify-between items-center mb-4">
<div className="text-sm font-medium text-slate-700">Recent Kudos</div>
<div className="text-xs text-care-blue">View all</div>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-bold">SJ</div>
<div className="w-full">
<div className="h-2 w-3/4 bg-slate-200 rounded-full mb-1"></div>
<div className="h-1.5 w-1/2 bg-slate-100 rounded-full"></div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold">MK</div>
<div className="w-full">
<div className="h-2 w-2/3 bg-slate-200 rounded-full mb-1"></div>
<div className="h-1.5 w-1/2 bg-slate-100 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
<div className="col-span-1 bg-slate-50 rounded-lg border border-slate-100 p-4 flex flex-col justify-between">
<div className="text-xs text-slate-400 font-medium uppercase">Compliance</div>
<div className="flex justify-center py-4">

<div className="w-20 h-20 rounded-full border-8 border-teal-500 border-t-teal-200 rotate-45"></div>
</div>
<div className="text-center">
<div className="text-xl font-bold text-slate-900">92/100</div>
<div className="text-xs text-slate-400">Excellent</div>
</div>
</div>
</div>
</div>

<div className="absolute top-32 -left-4 w-64 bg-white/90 backdrop-blur-md rounded-lg shadow-xl border border-white/50 p-4 transform -rotate-2 animate-[pulse_4s_ease-in-out_infinite]">
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-full bg-gold-light border border-gold-muted/20 flex items-center justify-center text-gold-muted">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Nurse of the Month</div>
<div className="text-xs text-slate-500 mt-1">Awarded to Sarah Jenkins for empathy in palliative care.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="pr-8">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">
                        The hidden cost of <br/><span className="text-red-500/80">undervalued care.</span>
</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="mt-1 text-slate-300">
<iconify-icon icon="solar:sad-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-slate-800">Retention Crisis</h3>
<p className="text-sm text-slate-500 leading-relaxed mt-1">
                                    34% of healthcare staff leave due to lack of recognition. The cost of replacing a nurse is now over £12k.
                                </p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 text-slate-300">
<iconify-icon icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-slate-800">Compliance Silos</h3>
<p className="text-sm text-slate-500 leading-relaxed mt-1">
                                    Excellent care happens daily, but it's rarely documented in a way that auditors or CQC inspectors can easily see.
                                </p>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-2xl p-8 shadow-xl shadow-slate-200/50 relative overflow-hidden">
<div className="absolute top-0 right-0 p-32 bg-teal-50/50 rounded-full blur-3xl -z-10 translate-x-10 -translate-y-10"></div>
<h3 className="text-xl font-semibold text-care-blue mb-6 flex items-center gap-2">
<iconify-icon className="text-teal-500" icon="solar:check-circle-bold"></iconify-icon>
                        The CareKudos Effect
                    </h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
<iconify-icon className="text-rose-500" icon="solar:heart-angle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Boost morale with peer-to-peer recognition</span>
</li>
<li className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
<iconify-icon className="text-teal-600" icon="solar:verified-check-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Map every "Thank you" to CQC standards</span>
</li>
<li className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
<iconify-icon className="text-care-blue" icon="solar:graph-up-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Reduce turnover by up to 22%</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-bold text-teal-600 tracking-wider uppercase">Platform Features</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mt-2 mb-4">Complete Care Visibility</h2>
<p className="text-slate-500">Everything you need to manage culture and compliance in one unified view.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-4 h-auto lg:h-[600px]">

<div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-white rounded-2xl border border-slate-200 p-8 flex flex-col justify-between overflow-hidden relative group hover:shadow-lg transition-shadow duration-300">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-care-blue flex items-center justify-center mb-4">
<iconify-icon icon="solar:map-point-wave-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900">Regulatory Mapping</h3>
<p className="text-sm text-slate-500 mt-2 max-w-xs">Automatically tag recognition moments to CQC, ISO, or internal values for instant audit readiness.</p>
</div>

<div className="mt-8 relative h-full w-full bg-slate-50 rounded-lg border border-slate-100 p-4 overflow-hidden">
<div className="grid grid-cols-2 gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
<div className="h-8 bg-white border border-slate-200 rounded px-2 flex items-center text-xs">Safe</div>
<div className="h-8 bg-teal-50 border border-teal-100 rounded px-2 flex items-center text-xs text-teal-700">Effective</div>
<div className="h-8 bg-white border border-slate-200 rounded px-2 flex items-center text-xs">Caring</div>
<div className="h-8 bg-white border border-slate-200 rounded px-2 flex items-center text-xs">Responsive</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent"></div>
</div>
</div>

<div className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2 bg-care-blue text-white rounded-2xl p-8 flex flex-col items-center text-center relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-full bg-grid opacity-10"></div>
<div className="relative z-10 mb-6">
<h3 className="text-lg font-semibold">Frontline First</h3>
<p className="text-xs text-blue-200 mt-1">Mobile app designed for busy shifts.</p>
</div>
<div className="w-32 bg-white rounded-t-2xl h-full shadow-2xl transform translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
<div className="p-3">
<div className="w-full h-1 bg-slate-200 rounded mb-2"></div>
<div className="w-2/3 h-1 bg-slate-100 rounded"></div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-3 lg:col-span-1 bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
<div className="flex justify-between items-start">
<iconify-icon className="text-teal-600" icon="solar:pie-chart-2-linear" width="28"></iconify-icon>
<span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">+14%</span>
</div>
<h3 className="text-base font-semibold text-slate-900 mt-3">Engagement Analytics</h3>
</div>

<div className="col-span-1 md:col-span-3 lg:col-span-1 bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
<iconify-icon className="text-purple-500" icon="solar:gift-linear" width="28"></iconify-icon>
<h3 className="text-base font-semibold text-slate-900 mt-3">Meaningful Rewards</h3>
<p className="text-xs text-slate-400 mt-1">From vouchers to extra leave.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-amber-50/50 to-white relative overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-block p-4 rounded-full bg-gradient-to-br from-yellow-100 to-amber-50 shadow-inner mb-6">
<iconify-icon className="text-gold-muted" icon="solar:star-bold-duotone" width="48"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">
                Every star tells a story of care.
            </h2>
<p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
                Recognition shouldn't be a generic "good job." Our Star System allows staff to collect recognition that compounds over time, building a career portfolio of empathy and excellence.
            </p>

<div className="relative max-w-3xl mx-auto h-32 flex items-center justify-between px-4 md:px-12">

<div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>

<div className="bg-white p-1 rounded-full border border-slate-200 shadow-sm relative group cursor-default">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-care-blue group-hover:text-white transition-colors">
<span className="text-xs font-bold">1</span>
</div>
<div className="absolute top-12 left-1/2 -translate-x-1/2 w-32 text-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="text-xs font-semibold text-slate-800">First Kudos</div>
</div>
</div>

<div className="bg-white p-1 rounded-full border border-slate-200 shadow-sm relative group cursor-default">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-care-blue group-hover:text-white transition-colors">
<span className="text-xs font-bold">10</span>
</div>
<div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 text-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="text-xs font-semibold text-slate-800">Bronze Star</div>
</div>
</div>

<div className="bg-white p-1 rounded-full border-2 border-gold-muted shadow-lg relative z-10">
<div className="w-12 h-12 rounded-full bg-gold-muted text-white flex items-center justify-center">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<div className="absolute top-16 left-1/2 -translate-x-1/2 w-40 text-center">
<div className="text-sm font-bold text-slate-900">Care Champion</div>
<div className="text-xs text-slate-500">Top 5% of Organization</div>
</div>
</div>

<div className="bg-white p-1 rounded-full border border-slate-200 shadow-sm relative group cursor-default">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
<span className="text-xs font-bold">∞</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="roi">
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-0 bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">

<div className="lg:col-span-5 p-8 border-r border-slate-100 bg-slate-50/50">
<h3 className="text-lg font-semibold text-slate-900 mb-6">Calculate your ROI</h3>
<div className="space-y-8">
<div>
<div className="flex justify-between text-sm font-medium text-slate-700 mb-4">
<label>Number of Employees</label>
<span className="text-care-blue">150</span>
</div>
<input className="w-full" max="1000" min="50" type="range" value="150"/>
</div>
<div>
<div className="flex justify-between text-sm font-medium text-slate-700 mb-4">
<label>Current Turnover Rate</label>
<span className="text-care-blue">25%</span>
</div>
<input className="w-full" max="50" min="0" type="range" value="25"/>
</div>
<div className="flex items-center justify-between pt-4">
<span className="text-sm font-medium text-slate-700">Include agency cost reduction?</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-care-blue"></div>
</label>
</div>
</div>
</div>

<div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center bg-white relative">
<div className="absolute top-0 right-0 p-24 bg-green-50/50 rounded-full blur-3xl -z-10"></div>
<div className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-2">Estimated Annual Savings</div>
<div className="text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-4">£45,200</div>
<div className="flex gap-6 mt-4">
<div className="bg-green-50 border border-green-100 rounded-lg p-3">
<div className="text-xs text-green-700 font-bold mb-1">Retention Savings</div>
<div className="text-lg font-semibold text-slate-900">£32,000</div>
</div>
<div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
<div className="text-xs text-care-blue font-bold mb-1">Productivity Boost</div>
<div className="text-lg font-semibold text-slate-900">£13,200</div>
</div>
</div>
<p className="text-xs text-slate-400 mt-6">*Based on industry average hiring costs of £4k per care worker.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-care-dark text-white relative overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="text-3xl font-semibold text-center mb-16">Trusted by leaders in care.</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="glass-dark rounded-xl p-8 transform md:translate-y-4">
<div className="flex gap-1 text-gold-muted mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-lg leading-relaxed text-slate-200 mb-6">"Our CQC inspector specifically mentioned the staff recognition evidence we downloaded from CareKudos. It turned a gap into a strength."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center text-xs">ED</div>
<div>
<div className="text-sm font-semibold">Elena Drancic</div>
<div className="text-xs text-slate-400">Operations Director, BrightCare</div>
</div>
</div>
</div>

<div className="glass-dark rounded-xl p-8 transform md:-translate-y-4 border-t-2 border-care-blue">
<div className="flex gap-1 text-gold-muted mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-lg leading-relaxed text-slate-200 mb-6">"It's not just software. It's a cultural shift. The nurses actually use it because it's simple, quick, and feels genuine."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center text-xs">MJ</div>
<div>
<div className="text-sm font-semibold">Mark Johnson</div>
<div className="text-xs text-slate-400">Head of People, NHS Trust</div>
</div>
</div>
</div>

<div className="glass-dark rounded-xl p-8 transform md:translate-y-4">
<div className="flex gap-1 text-gold-muted mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-lg leading-relaxed text-slate-200 mb-6">"Finally, a way to track the soft skills that actually matter in healthcare. The reporting tools are fantastic."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center text-xs">SL</div>
<div>
<div className="text-sm font-semibold">Sarah Lewis</div>
<div className="text-xs text-slate-400">Care Home Manager</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900">Simple, transparent pricing</h2>
<p className="text-slate-500 mt-2">No hidden setup fees. Scale as you grow.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col">
<div className="text-sm font-semibold text-slate-500 mb-2">Starter</div>
<div className="text-3xl font-bold text-slate-900 mb-6">£3<span className="text-sm font-normal text-slate-400">/user/mo</span></div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-slate-600"><iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon> Peer-to-peer Kudos</li>
<li className="flex items-center gap-2 text-sm text-slate-600"><iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon> Basic Reporting</li>
<li className="flex items-center gap-2 text-sm text-slate-600"><iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon> Mobile App Access</li>
</ul>
<button className="w-full py-2.5 border border-slate-200 rounded-lg text-sm font-medium hover:border-slate-300 transition-colors">Start Trial</button>
</div>

<div className="bg-white p-8 rounded-2xl border-2 border-care-blue shadow-xl relative flex flex-col">
<div className="absolute top-0 right-0 bg-care-blue text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
<div className="text-sm font-semibold text-care-blue mb-2">Professional</div>
<div className="text-3xl font-bold text-slate-900 mb-6">£5<span className="text-sm font-normal text-slate-400">/user/mo</span></div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-slate-600"><iconify-icon className="text-care-blue" icon="solar:check-circle-bold"></iconify-icon> Everything in Starter</li>
<li className="flex items-center gap-2 text-sm text-slate-600"><iconify-icon className="text-care-blue" icon="solar:check-circle-bold"></iconify-icon> CQC &amp; ISO Mapping</li>
<li className="flex items-center gap-2 text-sm text-slate-600"><iconify-icon className="text-care-blue" icon="solar:check-circle-bold"></iconify-icon> Manager Dashboards</li>
<li className="flex items-center gap-2 text-sm text-slate-600"><iconify-icon className="text-care-blue" icon="solar:check-circle-bold"></iconify-icon> Reward Store</li>
</ul>
<button className="w-full py-2.5 bg-care-blue text-white rounded-lg text-sm font-medium hover:bg-care-dark transition-colors shadow-lg shadow-care-blue/20">Get Started</button>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col">
<div className="text-sm font-semibold text-slate-500 mb-2">Enterprise</div>
<div className="text-3xl font-bold text-slate-900 mb-6">Custom</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-slate-600"><iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon> Unlimited Users</li>
<li className="flex items-center gap-2 text-sm text-slate-600"><iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon> Custom API Integrations</li>
<li className="flex items-center gap-2 text-sm text-slate-600"><iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon> Dedicated Success Manager</li>
<li className="flex items-center gap-2 text-sm text-slate-600"><iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon> SSO / SAML</li>
</ul>
<button className="w-full py-2.5 border border-slate-200 rounded-lg text-sm font-medium hover:border-slate-300 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight mb-4">Start recognizing care today.</h2>
<p className="text-lg text-slate-500 mb-10">Join 500+ healthcare organisations building better cultures.</p>
<form className="max-w-md mx-auto space-y-4">
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-care-blue focus:ring-1 focus:ring-care-blue transition-all" placeholder="Work email address" type="email"/>
<div className="grid grid-cols-2 gap-4">
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-care-blue transition-all" placeholder="First Name" type="text"/>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-care-blue transition-all" placeholder="Organisation" type="text"/>
</div>
<button className="w-full bg-care-blue text-white font-medium py-3 rounded-lg shadow-xl shadow-care-blue/20 hover:bg-care-dark transition-all" type="submit">
                    Request a Demo
                </button>
<p className="text-xs text-slate-400 mt-4">We respect your data. GDPR compliant &amp; secure.</p>
</form>
</div>
</section>

<footer className="bg-stone-50 border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-care-blue text-white flex items-center justify-center">
<iconify-icon icon="solar:shield-star-linear" width="14"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tight text-slate-900">CareKudos</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                        The #1 employee recognition platform built exclusively for the healthcare sector.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Product</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-care-blue" href="#">Features</a></li>
<li><a className="hover:text-care-blue" href="#">Integrations</a></li>
<li><a className="hover:text-care-blue" href="#">Pricing</a></li>
<li><a className="hover:text-care-blue" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-care-blue" href="#">About Us</a></li>
<li><a className="hover:text-care-blue" href="#">Careers</a></li>
<li><a className="hover:text-care-blue" href="#">Blog</a></li>
<li><a className="hover:text-care-blue" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-care-blue" href="#">Privacy Policy</a></li>
<li><a className="hover:text-care-blue" href="#">Terms of Service</a></li>
<li><a className="hover:text-care-blue" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200">
<div className="text-xs text-slate-400">
                    © 2024 CareKudos Ltd. All rights reserved.
                </div>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="text-slate-400 hover:text-care-blue" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-care-blue" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
