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
colors: {
brand: {
green: '#e8f5e9', // Soft hero bg
dark: '#022c22',  // Deep green text/bg
accent: '#10b981', // Icon accents
yellow: '#fffbeb', // Muted yellow
surface: '#f8fafc',
}
},
fontSize: {
xs: '0.8rem',
sm: '0.95rem',
base: '1.05rem', // 1 size bigger
lg: '1.15rem',
xl: '1.35rem',
'2xl': '1.75rem',
'3xl': '2.25rem',
'4xl': '2.75rem',
'5xl': '3.5rem',
'6xl': '4.5rem',
}
}
}
}



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
<div className="bg-brand-dark/5 backdrop-blur-md border border-brand-dark/5 rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl shadow-sm">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-emerald-700 rounded-full flex items-center justify-center text-white">
<i className="w-3 h-3" data-lucide="zap"></i>
</div>
<span className="font-semibold text-lg tracking-tight text-emerald-950">FlowFund</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-emerald-900/80">
<a className="hover:text-emerald-950 transition-colors" href="#">Solution</a>
<a className="hover:text-emerald-950 transition-colors" href="#">For Employees</a>
<a className="hover:text-emerald-950 transition-colors" href="#">Partnerships</a>
<a className="hover:text-emerald-950 transition-colors" href="#">Resources</a>
</div>
<a className="bg-emerald-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-emerald-800 transition-colors flex items-center gap-2" href="#">
                Schedule Demo <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
</nav>

<section className="pt-32 pb-0 px-4 md:px-8 relative overflow-hidden">
<div className="max-w-4xl mx-auto text-center z-10 relative">
<h1 className="text-5xl md:text-6xl text-emerald-950 leading-[1.1] mb-6 tracking-tight">
                A smarter way to release <br/>payouts to your team
            </h1>
<p className="text-lg md:text-xl text-emerald-800/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                FlowFund lets employees access bonuses, commissions, and reimbursements instantly, with no risk for employers and minimal fees for workers.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<button className="bg-emerald-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-emerald-800 transition-all flex items-center gap-2 shadow-lg shadow-emerald-900/10">
                    Get started <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="bg-emerald-100 text-emerald-900 px-8 py-3.5 rounded-full font-medium hover:bg-emerald-200 transition-all flex items-center gap-2">
                    See how it works <i className="w-4 h-4" data-lucide="play-circle"></i>
</button>
</div>
</div>

<div className="max-w-6xl mx-auto relative mt-8">

<div className="absolute -top-12 left-4 md:left-20 bg-white/90 backdrop-blur shadow-xl rounded-2xl p-4 flex items-center gap-3 animate-bounce z-20 hidden md:flex" style={{animationDuration: '3s'}}>
<div className="bg-green-100 p-2 rounded-full text-green-700"><i className="w-4 h-4" data-lucide="check"></i></div>
<div>
<p className="text-xs text-gray-500 uppercase font-semibold">Status</p>
<p className="text-sm font-medium text-emerald-950">Bonus Released</p>
</div>
</div>
<div className="absolute -top-4 right-4 md:right-32 bg-white/90 backdrop-blur shadow-xl rounded-2xl p-4 flex items-center gap-3 animate-bounce z-20 hidden md:flex" style={{animationDuration: '4s'}}>
<div className="bg-yellow-100 p-2 rounded-full text-yellow-700"><i className="w-4 h-4" data-lucide="dollar-sign"></i></div>
<div>
<p className="text-xs text-gray-500 uppercase font-semibold">Available</p>
<p className="text-sm font-medium text-emerald-950">Commission: $450.00</p>
</div>
</div>
<div className="rounded-t-[3rem] overflow-hidden shadow-2xl relative">
<img alt="Smiling worker looking at phone" className="w-full h-[500px] object-cover object-center" src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&amp;w=2938&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
</div>
</div>
</section>

<section className="bg-brand-yellow py-24 px-4 md:px-8 relative rounded-t-[3rem] mt-[-2rem] z-10">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

<div>
<div className="flex items-center gap-3 mb-6">
<div className="flex -space-x-3">
<img alt="" className="w-8 h-8 rounded-full border-2 border-brand-yellow" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-brand-yellow" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-brand-yellow" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<span className="text-sm font-medium text-amber-800">Trusted by 10,000+ employees</span>
</div>
<div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">The Problem</div>
<h2 className="text-4xl md:text-5xl text-emerald-950 mb-6 tracking-tight">Traditional payout cycles slow down your team</h2>
<p className="text-lg text-emerald-800/70 mb-8 leading-relaxed">
                    Delayed bonuses and reimbursements create unnecessary stress. FlowFund gives teams the flexibility to access the money already owed to them, whenever they need it.
                </p>
<a className="inline-flex items-center gap-2 text-emerald-900 font-medium border-b border-emerald-900 pb-0.5 hover:opacity-70 transition-opacity" href="#">
                    See how it works <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="relative rounded-3xl overflow-hidden shadow-xl">
<img alt="Person checking finances" className="w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&amp;fit=crop&amp;q=80&amp;w=2938"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-5 rounded-xl shadow-lg border border-amber-100">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="bg-red-50 p-1.5 rounded-full text-red-500"><i className="w-4 h-4" data-lucide="clock"></i></div>
<span className="text-sm font-medium text-gray-900">Pending Reimbursement</span>
</div>
<span className="text-sm font-medium text-gray-400">2 weeks ago</span>
</div>
<div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-amber-400"></div>
</div>
<p className="text-xs text-amber-700 mt-2">Waiting for payroll cycle...</p>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 px-4 md:px-8">
<div className="max-w-4xl mx-auto text-center mb-16">
<div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">The Solution</div>
<h2 className="text-4xl md:text-5xl text-emerald-950 mb-4 tracking-tight">A payout platform that does it all</h2>
<p className="text-lg text-gray-500 max-w-2xl mx-auto">
                FlowFund simplifies financial workflows for teams by unlocking fast, compliant payout access.
            </p>
</div>
<div className="max-w-5xl mx-auto relative flex justify-center">

<div className="absolute top-1/2 left-0 md:left-20 transform -translate-y-1/2 hidden md:block opacity-60">
<img className="w-20 h-20 rounded-full object-cover shadow-lg mb-8 ml-12" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;w=200&amp;h=200"/>
<img className="w-16 h-16 rounded-full object-cover shadow-lg" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;w=200&amp;h=200"/>
</div>
<div className="absolute top-1/2 right-0 md:right-20 transform -translate-y-1/2 hidden md:block opacity-60">
<img className="w-24 h-24 rounded-full object-cover shadow-lg mb-4 mr-8" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;w=200&amp;h=200"/>
</div>

<div className="relative w-[320px] bg-gray-900 rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden z-10">
<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20"></div>
<div className="h-[640px] bg-white w-full pt-12 pb-6 px-5 flex flex-col relative">

<div className="flex justify-between items-center mb-8">
<div>
<p className="text-xs text-gray-400">Good morning,</p>
<p className="font-semibold text-emerald-950">Sarah</p>
</div>
<div className="w-8 h-8 bg-gray-100 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100"/>
</div>
</div>

<div className="bg-emerald-900 text-white p-6 rounded-2xl shadow-lg shadow-emerald-900/20 mb-6">
<p className="text-xs text-emerald-200 mb-1">Available to payout</p>
<h3 className="text-3xl font-bold mb-4">$1,250.00</h3>
<button className="w-full bg-white text-emerald-900 py-2.5 rounded-xl text-sm font-semibold">Cash Out Now</button>
</div>

<p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Recent</p>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
<i className="w-5 h-5" data-lucide="briefcase"></i>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Q3 Bonus</p>
<p className="text-xs text-gray-500">Approved today</p>
</div>
</div>
<span className="text-sm font-semibold text-green-600">+$350</span>
</div>
<div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
<i className="w-5 h-5" data-lucide="receipt"></i>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Travel Exp.</p>
<p className="text-xs text-gray-500">Approved yesterday</p>
</div>
</div>
<span className="text-sm font-semibold text-green-600">+$124</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-brand-dark py-24 px-4 md:px-8 text-white overflow-hidden">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

<div className="space-y-12">
<div className="group">
<div className="flex items-center gap-4 mb-3">
<div className="p-2 bg-emerald-800/30 rounded-lg text-emerald-400 group-hover:bg-emerald-400 group-hover:text-emerald-950 transition-colors">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-2xl font-serif tracking-tight">Instant Payout Access</h3>
</div>
<p className="text-emerald-100/60 pl-14 text-lg font-light">
                        Give employees on-demand access to bonuses and reimbursements with automated approval workflows.
                    </p>
</div>
<div className="group">
<div className="flex items-center gap-4 mb-3">
<div className="p-2 bg-emerald-800/30 rounded-lg text-emerald-400 group-hover:bg-emerald-400 group-hover:text-emerald-950 transition-colors">
<i className="w-6 h-6" data-lucide="pie-chart"></i>
</div>
<h3 className="text-2xl font-serif tracking-tight">Smart Spending Insights</h3>
</div>
<p className="text-emerald-100/60 pl-14 text-lg font-light">
                        Provide helpful budgeting tips and spending analysis directly inside the app to promote financial wellness.
                    </p>
</div>
<div className="group">
<div className="flex items-center gap-4 mb-3">
<div className="p-2 bg-emerald-800/30 rounded-lg text-emerald-400 group-hover:bg-emerald-400 group-hover:text-emerald-950 transition-colors">
<i className="w-6 h-6" data-lucide="credit-card"></i>
</div>
<h3 className="text-2xl font-serif tracking-tight">Direct Push to Bank</h3>
</div>
<p className="text-emerald-100/60 pl-14 text-lg font-light">
                        Transfer funds instantly to the employee’s preferred bank account or debit card 24/7/365.
                    </p>
</div>
</div>

<div className="relative bg-emerald-900/50 rounded-3xl p-8 border border-emerald-800/50 shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-3xl"></div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-emerald-950 p-4 rounded-xl border border-emerald-800">
<i className="text-emerald-400 mb-2" data-lucide="arrow-up-right"></i>
<div className="h-2 w-16 bg-emerald-800 rounded mb-2"></div>
<div className="h-2 w-10 bg-emerald-900 rounded"></div>
</div>
<div className="bg-emerald-950 p-4 rounded-xl border border-emerald-800">
<i className="text-emerald-400 mb-2" data-lucide="shield-check"></i>
<div className="h-2 w-16 bg-emerald-800 rounded mb-2"></div>
<div className="h-2 w-10 bg-emerald-900 rounded"></div>
</div>
<div className="col-span-2 bg-emerald-800/20 p-6 rounded-xl border border-emerald-800/50 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-400/20 flex items-center justify-center text-emerald-400">
<i className="w-5 h-5" data-lucide="wallet"></i>
</div>
<div>
<div className="h-2 w-24 bg-emerald-700 rounded mb-2"></div>
<div className="h-2 w-16 bg-emerald-800 rounded"></div>
</div>
</div>
<div className="h-8 w-20 bg-emerald-400 rounded-lg"></div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-emerald-50 py-24 px-4 md:px-8">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative">
<div className="relative rounded-3xl overflow-hidden shadow-xl">
<img alt="Team reviewing documents" className="w-full h-[450px] object-cover" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-emerald-900/10"></div>
</div>

<div className="absolute -right-6 top-12 bg-[#166534] p-5 rounded-xl shadow-xl max-w-[240px] hidden md:block border border-green-700">
<div className="flex items-start gap-3">
<div className="mt-1 bg-green-400 rounded-full p-1 text-emerald-900"><i className="w-3 h-3" data-lucide="check"></i></div>
<div>
<p className="text-white text-sm font-medium">Reimbursement Approved</p>
<p className="text-green-200 text-xs mt-1">Audit log #4921 updated automatically.</p>
</div>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<h2 className="text-4xl md:text-5xl text-emerald-950 mb-6 tracking-tight">The compliant way to release payouts</h2>
<p className="text-lg text-emerald-800/70 mb-8 leading-relaxed">
                    Ensure financial accuracy and stay fully compliant with automated logs, approvals, and audit-ready reporting. We handle the complexity so you can focus on your team.
                </p>
<button className="bg-emerald-900 text-white px-7 py-3 rounded-full font-medium hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-900/10">
                    Book a demo
                </button>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-8 bg-white">
<div className="max-w-6xl mx-auto relative rounded-[3rem] overflow-hidden min-h-[600px] flex flex-col justify-between p-8 md:p-16">

<div className="absolute inset-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&amp;fit=crop&amp;q=80&amp;w=2671"/>
<div className="absolute inset-0 bg-emerald-950/40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent"></div>
</div>

<div className="relative z-10 max-w-2xl">
<div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">Competitive Alternatives</div>
<h2 className="text-4xl md:text-5xl text-white tracking-tight mb-6">Enjoy fast payout access without additional costs</h2>
<p className="text-lg text-white/80">Simplify payout access with predictable, low-cost options for your workforce.</p>
</div>

<div className="relative z-10 grid md:grid-cols-3 gap-6 mt-16">
<div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
<div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-700 mb-4">
<i className="w-5 h-5" data-lucide="percent"></i>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">Low Fees</h3>
<p className="text-sm text-gray-500 leading-relaxed">Transparent pricing structure that keeps more money in your employees' pockets.</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
<div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-700 mb-4">
<i className="w-5 h-5" data-lucide="shield"></i>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">Low-Risk Model</h3>
<p className="text-sm text-gray-500 leading-relaxed">Zero liability for employers. We manage the flow of funds securely.</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 mb-4">
<i className="w-5 h-5" data-lucide="headphones"></i>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">24/7 Support</h3>
<p className="text-sm text-gray-500 leading-relaxed">Dedicated support team available anytime your employees need assistance.</p>
</div>
</div>
</div>
</section>

<section className="bg-brand-surface py-24 px-4 md:px-8">
<div className="max-w-6xl mx-auto">
<h2 className="text-4xl md:text-5xl text-emerald-950 mb-12 tracking-tight text-center">Why customers trust FlowFund</h2>
<div className="grid md:grid-cols-2 gap-6">

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="bg-brand-yellow p-8 rounded-3xl flex flex-col justify-center sm:col-span-2">
<span className="text-6xl font-bold text-amber-500 mb-2 tracking-tight">82%</span>
<p className="text-amber-900/80 font-medium text-lg leading-snug">of employees say they feel more supported with instant payout access.</p>
</div>
<div className="bg-emerald-100 p-8 rounded-3xl flex flex-col justify-center">
<span className="text-5xl font-bold text-emerald-600 mb-2 tracking-tight">75%</span>
<p className="text-emerald-900/80 text-sm font-medium">say fast reimbursements improve workplace satisfaction.</p>
</div>
<div className="bg-white border border-gray-100 p-8 rounded-3xl flex flex-col justify-center shadow-sm">
<span className="text-5xl font-bold text-gray-900 mb-2 tracking-tight">40%</span>
<p className="text-gray-500 text-sm font-medium">reduction in payout-related HR tickets.</p>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden h-full min-h-[400px]">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&amp;fit=crop&amp;q=80&amp;w=2940"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="font-medium text-lg">"FlowFund changed how we handle expenses entirely."</p>
<p className="text-sm opacity-80 mt-1">— VP of Finance, TechCorp</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-b from-brand-green to-brand-yellow/30 py-24 px-4 md:px-8">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<div className="inline-block px-3 py-1 bg-white border border-emerald-100 text-emerald-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">How easy it is</div>
<h2 className="text-4xl md:text-5xl text-emerald-950 tracking-tight">Get started in three simple steps</h2>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-emerald-200 -z-10 border-t-2 border-dashed border-emerald-300"></div>
<div className="bg-white p-8 rounded-3xl shadow-lg border border-emerald-50 text-center relative hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 bg-emerald-900 text-white rounded-full flex items-center justify-center text-xl font-serif font-bold mx-auto mb-6 ring-4 ring-emerald-50">01</div>
<h3 className="text-xl font-bold text-emerald-950 mb-3 font-serif">Schedule a Demo</h3>
<p className="text-emerald-800/60 text-sm leading-relaxed">Meet with our team to walk through the platform and assess your needs.</p>
</div>
<div className="bg-white p-8 rounded-3xl shadow-lg border border-emerald-50 text-center relative hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 bg-emerald-900 text-white rounded-full flex items-center justify-center text-xl font-serif font-bold mx-auto mb-6 ring-4 ring-emerald-50">02</div>
<h3 className="text-xl font-bold text-emerald-950 mb-3 font-serif">Connect Payroll</h3>
<p className="text-emerald-800/60 text-sm leading-relaxed">Integrate FlowFund securely with your existing HR and payroll systems.</p>
</div>
<div className="bg-white p-8 rounded-3xl shadow-lg border border-emerald-50 text-center relative hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 bg-emerald-900 text-white rounded-full flex items-center justify-center text-xl font-serif font-bold mx-auto mb-6 ring-4 ring-emerald-50">03</div>
<h3 className="text-xl font-bold text-emerald-950 mb-3 font-serif">Launch FlowFund</h3>
<p className="text-emerald-800/60 text-sm leading-relaxed">Invite your team to download the app and start accessing their funds instantly.</p>
</div>
</div>
<div className="mt-16 rounded-3xl overflow-hidden h-[300px] relative shadow-2xl">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&amp;fit=crop&amp;q=80&amp;w=2940"/>
<div className="absolute inset-0 bg-emerald-900/60 flex items-center justify-center">
<button className="bg-white text-emerald-900 px-8 py-3 rounded-full font-medium hover:bg-emerald-50 transition-colors flex items-center gap-2">
                        Start your journey <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>

<footer className="bg-brand-dark text-white pt-20 pb-10 px-4 md:px-8">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

<div className="lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-brand-dark">
<i className="w-3 h-3" data-lucide="zap"></i>
</div>
<span className="font-semibold text-lg tracking-tight">FlowFund</span>
</div>
<h2 className="text-3xl font-serif leading-tight mb-8 text-emerald-50">Meet modern payout needs without compromise.</h2>
<div className="flex gap-4">
<button className="bg-emerald-800 hover:bg-emerald-700 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors border border-emerald-700">
<i className="w-5 h-5" data-lucide="apple"></i>
<div className="text-left">
<p className="text-[10px] leading-none text-emerald-200">Download on the</p>
<p className="text-xs font-semibold leading-none mt-0.5">App Store</p>
</div>
</button>
<button className="bg-emerald-800 hover:bg-emerald-700 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors border border-emerald-700">
<i className="w-5 h-5 fill-current" data-lucide="play"></i>
<div className="text-left">
<p className="text-[10px] leading-none text-emerald-200">GET IT ON</p>
<p className="text-xs font-semibold leading-none mt-0.5">Google Play</p>
</div>
</button>
</div>
</div>

<div>
<h4 className="text-emerald-400 text-sm font-semibold uppercase tracking-wider mb-6">Product</h4>
<ul className="space-y-4 text-emerald-100/70 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Why FlowFund</a></li>
<li><a className="hover:text-white transition-colors" href="#">How It Works</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 className="text-emerald-400 text-sm font-semibold uppercase tracking-wider mb-6">Company</h4>
<ul className="space-y-4 text-emerald-100/70 text-sm">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Partnerships</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-emerald-400 text-sm font-semibold uppercase tracking-wider mb-6">Support</h4>
<ul className="space-y-4 text-emerald-100/70 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-white transition-colors" href="#">Status</a></li>
</ul>
</div>
</div>
<div className="border-t border-emerald-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-emerald-400/60">
<p>© 2024 FlowFund Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-emerald-200 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-emerald-200 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-emerald-200 transition-colors" href="#">Cookie Settings</a>
</div>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
