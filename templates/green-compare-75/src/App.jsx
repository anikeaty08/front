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
emerald: {
50: '#ecfdf5',
100: '#d1fae5',
500: '#10b981',
600: '#059669',
700: '#047857',
900: '#064e3b',
},
slate: {
850: '#1e293b',
900: '#0f172a',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}



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
      

<header className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors">GREEN COMPARE</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<div className="relative group h-20 flex items-center">
<button className="text-sm font-medium text-slate-600 hover:text-emerald-600 flex items-center gap-1 transition-colors">
                        Services
                        <iconify-icon className="" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</button>

<div className="absolute top-full left-0 w-48 bg-white border border-slate-100 shadow-lg rounded-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0">
<a className="block px-4 py-2 text-sm text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg" href="#">Business Gas</a>
<a className="block px-4 py-2 text-sm text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg" href="#">Business Electricity</a>
<a className="block px-4 py-2 text-sm text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg" href="#">Water Audit</a>
</div>
</div>
<a className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors" href="#">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors" href="#">Contact</a>
</nav>

<div className="flex items-center gap-4">
<a className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all hover:scale-105 flex items-center gap-2" href="#">
                    Get Free Quote
                    <iconify-icon className="" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="lg:pt-40 lg:pb-32 overflow-hidden pt-32 pb-20">
<div className="max-w-7xl mx-auto px-6">
<div className="relative z-0 grid lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">

<div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="absolute -right-40 bottom-0 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        Trusted by 2,000+ UK Businesses
                    </div>
<h1 className="lg:text-6xl leading-[1.1] text-5xl font-medium text-slate-900 tracking-tight mb-6">
                        Power Your Business with <span className="text-emerald-600">Smart Savings</span>
</h1>
<p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg">
                        Compare market-leading rates instantly. Our intelligent platform helps businesses reduce energy overheads by up to 40% with zero paperwork hassle.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-medium transition-all shadow-sm hover:shadow-emerald-200/50 hover:-translate-y-1 flex items-center justify-center gap-3">
<iconify-icon icon="solar:flame-linear" width="20"></iconify-icon>
                            Compare Business Gas
                        </button>
<button className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 hover:border-emerald-600 px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center gap-3 group">
<iconify-icon className="group-hover:text-emerald-600 transition-colors" icon="solar:bolt-linear" width="20"></iconify-icon>
                            Compare Electricity
                        </button>
</div>
<div className="mt-10 flex items-center gap-4 text-sm text-slate-500">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
</div>
<p className="">Join smart businesses saving today.</p>
</div>
</div>

<div className="relative">
<div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3] group">
<img alt="Modern Green Office" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>

<div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100 max-w-xs">
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<div className="">
<p className="text-xs text-slate-500 mb-1">Total Savings Projected</p>
<p className="text-lg font-semibold text-slate-900">£12,450 / yr</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-slate-50/50 py-10 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-6 text-center">
<p className="text-sm font-medium text-slate-400 uppercase tracking-widest">Comparing providers including</p>
</div>
<div className="relative w-full overflow-hidden">
<div className="flex whitespace-nowrap slider-track items-center gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-2xl font-bold font-serif text-slate-800 flex items-center gap-2"><iconify-icon icon="solar:bolt-circle-linear"></iconify-icon> ENERGY ONE</span>
<span className="text-2xl font-bold text-slate-800 flex items-center gap-2"><iconify-icon className="" icon="solar:sun-2-linear"></iconify-icon> SOLARIS</span>
<span className="text-2xl font-bold tracking-tight text-slate-800 flex items-center gap-2"><iconify-icon className="" icon="solar:atom-linear"></iconify-icon> POWERGRID</span>
<span className="text-2xl font-bold text-slate-800 flex items-center gap-2"><iconify-icon icon="solar:leaf-bold-duotone"></iconify-icon> ECO SOURCE</span>
<span className="text-2xl font-bold font-serif text-slate-800 flex items-center gap-2"><iconify-icon icon="solar:wind-linear"></iconify-icon> BREEZE</span>
<span className="text-2xl font-bold text-slate-800 flex items-center gap-2"><iconify-icon icon="solar:flame-circle-linear"></iconify-icon> IGNITE</span>

<span className="text-2xl font-bold font-serif text-slate-800 flex items-center gap-2"><iconify-icon icon="solar:bolt-circle-linear"></iconify-icon> ENERGY ONE</span>
<span className="text-2xl font-bold text-slate-800 flex items-center gap-2"><iconify-icon icon="solar:sun-2-linear"></iconify-icon> SOLARIS</span>
<span className="text-2xl font-bold tracking-tight text-slate-800 flex items-center gap-2"><iconify-icon icon="solar:atom-linear"></iconify-icon> POWERGRID</span>
<span className="text-2xl font-bold text-slate-800 flex items-center gap-2"><iconify-icon icon="solar:leaf-bold-duotone"></iconify-icon> ECO SOURCE</span>
<span className="text-2xl font-bold font-serif text-slate-800 flex items-center gap-2"><iconify-icon icon="solar:wind-linear"></iconify-icon> BREEZE</span>
<span className="text-2xl font-bold text-slate-800 flex items-center gap-2"><iconify-icon icon="solar:flame-circle-linear"></iconify-icon> IGNITE</span>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="md:text-4xl text-3xl font-medium text-slate-900 tracking-tight border-emerald-800 mb-4">Savings simplified in three steps</h2>
<p className="text-slate-500">We've removed the complexity from business energy switching. No cold calls, just clear data.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-emerald-100/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 bg-emerald-50 rounded-xl text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:document-add-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">1. Tell Us Your Needs</h3>
<p className="text-slate-500 leading-relaxed">Fill out a simple form detailing your current usage or upload a recent bill. It takes less than 60 seconds.</p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-emerald-100/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 bg-emerald-50 rounded-xl text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:pie-chart-2-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">2. We Compare Market</h3>
<p className="text-slate-500 leading-relaxed">Our algorithm scans rates from 30+ top UK suppliers to find the perfect match for your consumption profile.</p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-emerald-100/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 bg-emerald-50 rounded-xl text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="" icon="solar:wallet-money-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">3. Start Saving</h3>
<p className="text-slate-500 leading-relaxed">Choose your preferred quote. We handle the switchover process completely so you can focus on business.</p>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 border-slate-100 border-t pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex mb-12 items-end justify-between">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">Trusted by industry leaders</h2>
<p className="text-slate-500">Don't just take our word for it. See what our clients say.</p>
</div>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:border-emerald-500 text-slate-400 hover:text-emerald-600 flex items-center justify-center transition-all"><iconify-icon className="" icon="solar:arrow-left-linear"></iconify-icon></button>
<button className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:border-emerald-500 text-slate-400 hover:text-emerald-600 flex items-center justify-center transition-all"><iconify-icon className="" icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex gap-1 text-emerald-500 mb-6">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<blockquote className="text-slate-700 leading-relaxed mb-6">
                        "Green Compare identified an oversight in our previous contract that was costing us thousands. The transition was seamless and the support team is incredible."
                    </blockquote>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-sm">JS</div>
<div>
<div className="text-sm font-semibold text-slate-900">James Smith</div>
<div className="text-xs text-slate-500">Director, TechFlow Solutions</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex gap-1 text-emerald-500 mb-6">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<blockquote className="text-slate-700 leading-relaxed mb-6">
                        "Finally, a comparison site that doesn't feel spammy. Clean interface, honest prices, and we reduced our carbon footprint by choosing a green supplier."
                    </blockquote>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-sm">EL</div>
<div>
<div className="text-sm font-semibold text-slate-900">Elena Lopez</div>
<div className="text-xs text-slate-500">Ops Manager, Urban Retail</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex gap-1 text-emerald-500 mb-6">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<blockquote className="text-slate-700 leading-relaxed mb-6">
                        "The dashboard makes it easy to track our savings. We switched both gas and electricity and the ROI was immediate. Highly recommended for SMEs."
                    </blockquote>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-sm">MK</div>
<div>
<div className="text-sm font-semibold text-slate-900">Marcus Kane</div>
<div className="text-xs text-slate-500">Founder, Kane Logistics</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
<div className="">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-8">Frequently asked questions</h2>
<div className="space-y-4">
<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden open:ring-1 open:ring-emerald-500 open:border-emerald-500 transition-all">
<summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-slate-900 hover:bg-slate-50 transition-colors">
<span className="">Is the comparison service really free?</span>
<iconify-icon className="transform transition-transform duration-300 group-open:rotate-180 text-slate-400" height="16" icon="solar:alt-arrow-down-linear" style={{color: 'rgb(148, 163, 184)'}} width="16"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 text-slate-500 leading-relaxed">
                                Yes, absolutely. We earn a small commission from the supplier you choose, so the service is completely free for your business. There are no hidden fees or charges from Green Compare.
                            </div>
</details>
<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden open:ring-1 open:ring-emerald-500 open:border-emerald-500 transition-all">
<summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-slate-900 hover:bg-slate-50 transition-colors">
<span className="">How long does it take to switch suppliers?</span>
<iconify-icon className="text-slate-400 transform transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 text-slate-500 leading-relaxed">
                                Typically, the switch takes between 3 to 5 weeks. However, there is no interruption to your power supply during this time. We handle the communication between your old and new suppliers.
                            </div>
</details>
<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden open:ring-1 open:ring-emerald-500 open:border-emerald-500 transition-all">
<summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-slate-900 hover:bg-slate-50 transition-colors">
<span className="">Do you offer renewable energy options?</span>
<iconify-icon className="text-slate-400 transform transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 text-slate-500 leading-relaxed">
                                Yes, we specialize in green energy. You can filter your search results to show only 100% renewable electricity and carbon-neutral gas plans.
                            </div>
</details>
</div>
</div>
<div className="relative lg:h-full">
<div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 h-full min-h-[400px] group">
<img alt="Customer Support" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-5 rounded-xl shadow-lg border border-slate-100">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:chat-round-dots-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Still have questions?</p>
<p className="text-sm text-slate-500">Our energy experts are here to help.</p>
</div>
<button className="ml-auto w-8 h-8 flex items-center justify-center rounded-full bg-slate-900 text-white hover:bg-emerald-600 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-12">Latest insights</h2>
<div className="grid md:grid-cols-3 gap-8">

<article className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
<div className="relative h-48 overflow-hidden">
<img alt="Wind Turbines" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="p-6">
<div className="text-xs font-semibold text-emerald-600 mb-2 uppercase tracking-wide">Sustainability</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">Why going green saves you green in 2024</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Exploring the tax incentives and long-term savings associated with renewable business energy contracts.</p>
<span className="text-sm font-medium text-slate-900 flex items-center gap-1">Read article <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</article>

<article className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
<div className="relative h-48 overflow-hidden">
<img alt="Data Analytics" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="p-6">
<div className="text-xs font-semibold text-emerald-600 mb-2 uppercase tracking-wide">Market Analysis</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">Q3 Energy Price Cap Predictions</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Our analysts breakdown the latest wholesale market trends and what they mean for your fixed-rate contract.</p>
<span className="text-sm font-medium text-slate-900 flex items-center gap-1">Read article <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</article>

<article className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
<div className="relative h-48 overflow-hidden">
<img alt="Office Meeting" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="p-6">
<div className="text-xs font-semibold text-emerald-600 mb-2 uppercase tracking-wide">Guides</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">5 Tips for Negotiating Corporate Rates</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Don't settle for the renewal quote. Here is how you can leverage competition to get better terms.</p>
<span className="text-sm font-medium text-slate-900 flex items-center gap-1">Read article <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</article>
</div>
</div>
</section>

<section className="py-20 bg-emerald-600 text-white relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Help us build a greener future.</h2>
<p className="text-emerald-100 text-lg max-w-xl">We are looking for passionate individuals to join our mission of making sustainable energy accessible to every business.</p>
</div>
<a className="bg-white text-emerald-900 px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all flex items-center gap-2 whitespace-nowrap" href="#">
                Join Our Team
                <iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</a>
</div>
</section>

<footer className="bg-white border-slate-100 border-t pt-20 pb-10">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 bg-emerald-600 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:leaf-linear" width="14"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-slate-900">GREEN COMPARE</span>
</a>
<p className="text-sm text-slate-500 mb-6">Empowering businesses with transparent energy comparisons and sustainable solutions.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-emerald-600 transition-colors" href="#"><iconify-icon className="" icon="mdi:twitter" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-emerald-600 transition-colors" href="#"><iconify-icon className="" icon="mdi:linkedin" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-emerald-600 transition-colors" href="#"><iconify-icon className="" icon="mdi:instagram" width="20"></iconify-icon></a>
</div>
</div>

<div className="">
<h4 className="font-medium text-slate-900 mb-4">Services</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li className=""><a className="hover:text-emerald-600 transition-colors" href="#">Business Gas</a></li>
<li className=""><a className="hover:text-emerald-600 transition-colors" href="#">Business Electricity</a></li>
<li className=""><a className="hover:text-emerald-600 transition-colors" href="#">Renewable Energy</a></li>
<li className=""><a className="hover:text-emerald-600 transition-colors" href="#">Large Corporate</a></li>
</ul>
</div>

<div className="">
<h4 className="font-medium text-slate-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li className=""><a className="hover:text-emerald-600 transition-colors" href="#">About Us</a></li>
<li className=""><a className="hover:text-emerald-600 transition-colors" href="#">Careers</a></li>
<li className=""><a className="hover:text-emerald-600 transition-colors" href="#">Blog</a></li>
<li className=""><a className="hover:text-emerald-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div className="">
<h4 className="font-medium text-slate-900 mb-4">Stay Updated</h4>
<p className="text-sm text-slate-500 mb-4">Energy tips directly to your inbox.</p>
<form className="flex flex-col gap-2">
<input className="focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm w-full border-slate-200 border rounded-lg pt-2.5 pr-4 pb-2.5 pl-4" placeholder="Enter your email" type="email"/>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium py-2.5 rounded-lg transition-colors" type="submit">Subscribe</button>
</form>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2026 Green Compare Ltd. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-400">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Terms of Service</a>
<a className="hover:text-slate-600" href="#">Cookies</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
