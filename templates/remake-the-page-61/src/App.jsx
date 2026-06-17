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
      

<nav className="fixed top-0 w-full z-50 px-4 py-4">
<div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="iconify text-slate-900" data-height="24" data-icon="lucide:layers" data-width="24"></span>
<span className="text-lg font-semibold tracking-tight text-slate-900">GTC</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Solutions</a>
<a className="hover:text-slate-900 transition-colors" href="#">Platform</a>
<a className="hover:text-slate-900 transition-colors" href="#">Resources</a>
</div>
<a className="text-sm font-medium bg-slate-900 text-white px-5 py-2.5 rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10" href="#consultation">
                Contact Sales
            </a>
</div>
</nav>

<section className="pt-32 pb-12 px-4 max-w-7xl mx-auto">
<div className="grid lg:grid-cols-12 gap-4">

<div className="lg:col-span-7 bento-card p-8 md:p-12 flex flex-col justify-center">
<div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600 mb-6">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    Managed Services for Telecom
                </div>
<h1 className="text-5xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                    SMS Platform Management
                </h1>
<p className="text-xl text-slate-500 font-normal leading-relaxed mb-8">
                    Outsource Technical Operations, Own Your Market Presence. We handle the complexities of A2P messaging infrastructure.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mt-auto">
<a className="inline-flex justify-center items-center px-6 py-4 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20" href="#consultation">
                        Schedule a Consultation
                        <span className="iconify ml-2" data-icon="lucide:arrow-right" data-inline="false"></span>
</a>
<a className="inline-flex justify-center items-center px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-100 transition-colors" href="#details">
                        View Service Scope
                    </a>
</div>
</div>

<div className="lg:col-span-5 bento-card p-4 bg-slate-50 overflow-hidden relative min-h-[400px]">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-70"></div>
<div className="relative h-full w-full flex flex-col gap-4 p-4">

<div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-slate-100">
<div className="flex gap-2">
<span className="iconify text-slate-400" data-icon="lucide:menu" data-width="18"></span>
<div className="h-4 w-24 bg-slate-100 rounded-md"></div>
</div>
<div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
<span className="iconify" data-icon="lucide:user" data-width="16"></span>
</div>
</div>
<div className="flex flex-1 gap-4">

<div className="w-16 bg-white rounded-xl shadow-sm border border-slate-100 hidden sm:flex flex-col items-center py-4 gap-4">
<span className="iconify text-slate-400" data-icon="lucide:layout-dashboard" data-width="20"></span>
<span className="iconify text-slate-400" data-icon="lucide:bar-chart-2" data-width="20"></span>
<span className="iconify text-blue-500" data-icon="lucide:settings" data-width="20"></span>
</div>

<div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col">
<div className="flex justify-between items-start mb-6">
<div>
<p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Throughput</p>
<div className="text-2xl font-semibold text-slate-900">98.9%</div>
</div>
<div className="bg-green-50 text-green-600 p-2 rounded-lg">
<span className="iconify" data-icon="lucide:activity" data-width="20"></span>
</div>
</div>

<div className="flex items-end gap-2 h-full mt-4">
<div className="flex-1 bg-slate-100 rounded-t-sm h-[30%]"></div>
<div className="flex-1 bg-slate-100 rounded-t-sm h-[50%]"></div>
<div className="flex-1 bg-blue-100 rounded-t-sm h-[40%]"></div>
<div className="flex-1 bg-blue-200 rounded-t-sm h-[70%]"></div>
<div className="flex-1 bg-blue-500 rounded-t-sm h-[60%]"></div>
<div className="flex-1 bg-blue-600 rounded-t-sm h-[85%]"></div>
<div className="flex-1 bg-slate-900 rounded-t-sm h-[95%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="px-4 max-w-7xl mx-auto mb-16">
<div className="bento-card py-10 px-6">
<p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted Infrastructure Expertise</p>
<div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
<div className="flex items-center gap-2 font-semibold text-xl tracking-tighter text-slate-900"><span className="iconify" data-icon="lucide:hexagon"></span> NEXUS</div>
<div className="flex items-center gap-2 font-semibold text-xl tracking-tighter text-slate-900"><span className="iconify" data-icon="lucide:triangle"></span> VORTEX</div>
<div className="flex items-center gap-2 font-semibold text-xl tracking-tighter text-slate-900"><span className="iconify" data-icon="lucide:circle"></span> ORBIT</div>
<div className="flex items-center gap-2 font-semibold text-xl tracking-tighter text-slate-900"><span className="iconify" data-icon="lucide:box"></span> CUBE</div>
<div className="flex items-center gap-2 font-semibold text-xl tracking-tighter text-slate-900"><span className="iconify" data-icon="lucide:globe"></span> ATLAS</div>
</div>
</div>
</div>

<section className="py-12 px-4 max-w-7xl mx-auto">

<div className="mb-10 pl-2">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-3">The Expertise Challenge</h2>
<p className="text-slate-800 text-lg max-w-2xl">
                The A2P messaging business is dynamic and reliant on specific expertise that is difficult to hire and retain.
            </p>
</div>
<div className="grid md:grid-cols-12 gap-4">

<div className="md:col-span-7 bento-card p-8 md:p-10">
<div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:alert-triangle" data-width="20"></span>
</div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4">When Staff Departs, Innovation Stalls</h3>
<p className="text-slate-500 leading-relaxed mb-6">
                    A2P operations require niche knowledge. We provide instant access to a resourceful team with deep industry experience and diverse technical backgrounds.
                </p>
<div className="space-y-4 pt-4 border-t border-slate-100">
<div className="flex items-center gap-3">
<div className="bg-blue-50 text-blue-600 p-1.5 rounded-full"><span className="iconify" data-icon="lucide:check" data-width="14"></span></div>
<span className="text-sm font-medium text-slate-700">Platform agnostic expertise</span>
</div>
<div className="flex items-center gap-3">
<div className="bg-blue-50 text-blue-600 p-1.5 rounded-full"><span className="iconify" data-icon="lucide:check" data-width="14"></span></div>
<span className="text-sm font-medium text-slate-700">Wide-spread timezone coverage</span>
</div>
<div className="flex items-center gap-3">
<div className="bg-blue-50 text-blue-600 p-1.5 rounded-full"><span className="iconify" data-icon="lucide:check" data-width="14"></span></div>
<span className="text-sm font-medium text-slate-700">Rapid adaptation to fraud vectors</span>
</div>
</div>
</div>

<div className="md:col-span-5 bento-card p-8 md:p-10 bg-slate-900 text-white flex flex-col justify-between">
<div>
<div className="w-10 h-10 bg-white/10 text-white rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm">
<span className="iconify" data-icon="lucide:users" data-width="20"></span>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Our Solution:<br/>Expert Capacity</h3>
<p className="text-slate-300 text-sm leading-relaxed mb-6">
                        We handle technical and operational aspects, acting as an extension of your team. From single tasks to entire functional management.
                    </p>
</div>
<div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/5">
<p className="text-xs text-slate-300 font-medium">
                        "Until your business is ready to re-insource activities, you are in expert hands."
                    </p>
</div>
</div>
</div>
</section>

<section className="py-12 px-4 max-w-7xl mx-auto">
<div className="mb-10 pl-2">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-3">Advantages of Partnering</h2>
<p className="text-slate-800 text-lg max-w-2xl">
                Strengthen A2P operations and free up internal resources.
            </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bento-card p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-5">
<span className="iconify" data-icon="lucide:refresh-ccw" data-width="20"></span>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Internal Enablement</h3>
<p className="text-xs text-slate-500 leading-relaxed">
                    We collaborate and transfer knowledge, preparing your team for eventual insourcing.
                </p>
</div>

<div className="bento-card p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-5">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Mitigate Risk</h3>
<p className="text-xs text-slate-500 leading-relaxed">
                    Protect against staff turnover. Stable, non-stop support prevents critical knowledge gaps.
                </p>
</div>

<div className="bento-card p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-5">
<span className="iconify" data-icon="lucide:award" data-width="20"></span>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Instant Expertise</h3>
<p className="text-xs text-slate-500 leading-relaxed">
                    Summed-up decades of experience ensuring a tidy platform with minimized hiccups.
                </p>
</div>

<div className="bento-card p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-5">
<span className="iconify" data-icon="lucide:trending-up" data-width="20"></span>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Focus on Growth</h3>
<p className="text-xs text-slate-500 leading-relaxed">
                    Outsource noise. Gain capacity to focus entirely on commercial activities and sales.
                </p>
</div>
</div>
</section>

<section className="py-12 px-4 max-w-7xl mx-auto" id="details">
<div className="mb-10 pl-2">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-3">Service Scope</h2>
<p className="text-slate-800 text-lg max-w-2xl">
                Fluid support tailored to your specific timeline and needs.
            </p>
</div>
<div className="grid lg:grid-cols-3 gap-4">

<div className="lg:col-span-1 bento-card p-8 flex flex-col justify-between bg-slate-800 text-white border-slate-700">
<div>
<div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-6">
<span className="iconify text-white" data-icon="lucide:sliders-horizontal" data-width="20"></span>
</div>
<h3 className="text-xl font-semibold mb-4">Flexible &amp; Tailored</h3>
<p className="text-slate-300 text-sm leading-relaxed mb-6">
                        Simply state the challenges you face, and we will assist you with an immediate, customized solution.
                    </p>
</div>
<a className="text-sm font-medium text-white hover:text-blue-200 inline-flex items-center transition-colors" href="#consultation">
                    Discuss your needs <span className="iconify ml-2" data-icon="lucide:arrow-right"></span>
</a>
</div>

<div className="lg:col-span-2 bento-card p-0 overflow-hidden flex flex-col">
<div className="p-6 border-b border-slate-100 bg-slate-50/50 flex items-center gap-2">
<span className="iconify text-slate-400" data-icon="lucide:list" data-width="18"></span>
<span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Operational Areas</span>
</div>
<div className="flex-1 overflow-x-auto">
<table className="w-full text-left border-collapse">
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50 transition-colors group">
<td className="p-6 text-sm font-medium text-slate-900 w-1/3 group-hover:text-blue-600 transition-colors">Troubleshooting</td>
<td className="p-6 text-sm text-slate-500">Dedicated Level 2/3 support, resolving technical issues efficiently.</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors group">
<td className="p-6 text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Optimization</td>
<td className="p-6 text-sm text-slate-500">Continuous review and tidying of the platform for performance.</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors group">
<td className="p-6 text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Routing &amp; Commercial</td>
<td className="p-6 text-sm text-slate-500">Management of complex routing policies and tariff changes.</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors group">
<td className="p-6 text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Market Adaptation</td>
<td className="p-6 text-sm text-slate-500">Proactive handling of new trends, fraud vectors, and regulations.</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<section className="py-12 px-4 max-w-7xl mx-auto">
<div className="mb-10 pl-2">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-3">Engagement Model</h2>
<p className="text-slate-800 text-lg max-w-2xl">
                Close collaboration ensuring benefits are realized quickly.
            </p>
</div>
<div className="grid md:grid-cols-4 gap-4">

<div className="bento-card p-6 flex flex-col h-full">
<div className="flex items-center justify-between mb-6">
<div className="w-8 h-8 bg-slate-900 text-white rounded-md flex items-center justify-center text-sm font-bold shadow-md">1</div>
<span className="iconify text-slate-300" data-icon="lucide:phone-call" data-width="20"></span>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Exploration Call</h3>
<p className="text-xs text-slate-500 leading-relaxed">
                    Kick-off call to understand operational problems, scope, and stakeholders.
                </p>
</div>

<div className="bento-card p-6 flex flex-col h-full">
<div className="flex items-center justify-between mb-6">
<div className="w-8 h-8 bg-white border border-slate-200 text-slate-900 rounded-md flex items-center justify-center text-sm font-bold">2</div>
<span className="iconify text-slate-300" data-icon="lucide:log-in" data-width="20"></span>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Access &amp; Onboarding</h3>
<p className="text-xs text-slate-500 leading-relaxed">
                    Platform access granted. We begin work on assigned tasks immediately.
                </p>
</div>

<div className="bento-card p-6 flex flex-col h-full">
<div className="flex items-center justify-between mb-6">
<div className="w-8 h-8 bg-white border border-slate-200 text-slate-900 rounded-md flex items-center justify-center text-sm font-bold">3</div>
<span className="iconify text-slate-300" data-icon="lucide:message-square" data-width="20"></span>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Communication</h3>
<p className="text-xs text-slate-500 leading-relaxed">
                    Weekly check-ins adapting to bi-weekly or monthly based on preference.
                </p>
</div>

<div className="bento-card p-6 flex flex-col h-full">
<div className="flex items-center justify-between mb-6">
<div className="w-8 h-8 bg-white border border-slate-200 text-slate-900 rounded-md flex items-center justify-center text-sm font-bold">4</div>
<span className="iconify text-slate-300" data-icon="lucide:infinity" data-width="20"></span>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Continuous Sync</h3>
<p className="text-xs text-slate-500 leading-relaxed">
                    Deep integration. Building a relationship as close as in-house colleagues.
                </p>
</div>
</div>
</section>

<section className="py-12 px-4 max-w-7xl mx-auto">
<div className="mb-10 pl-2 text-center">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-3">Questions &amp; Answers</h2>
</div>
<div className="max-w-3xl mx-auto bento-card p-2 md:p-8">
<div className="divide-y divide-slate-100">

<details className="group">
<summary className="flex justify-between items-center cursor-pointer p-4 md:p-6 font-medium text-slate-900 hover:bg-slate-50 rounded-xl transition-colors">
<div className="flex items-center gap-4">
<span className="iconify text-slate-400" data-icon="lucide:help-circle" data-width="20"></span>
                            Why choose GTC over a vendor's service?
                        </div>
<span className="iconify transition-transform group-open:rotate-180 text-slate-400" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-4 md:px-6 pb-6 pt-2 text-sm text-slate-500 leading-relaxed ml-9">
                        Vendors know their tech, but we know the market. Our experience spans multiple platforms and operational approaches, ensuring market-centric best practices rather than just tool-centric ones.
                    </div>
</details>

<details className="group">
<summary className="flex justify-between items-center cursor-pointer p-4 md:p-6 font-medium text-slate-900 hover:bg-slate-50 rounded-xl transition-colors">
<div className="flex items-center gap-4">
<span className="iconify text-slate-400" data-icon="lucide:bar-chart" data-width="20"></span>
                            How is success measured?
                        </div>
<span className="iconify transition-transform group-open:rotate-180 text-slate-400" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-4 md:px-6 pb-6 pt-2 text-sm text-slate-500 leading-relaxed ml-9">
                        Frequent stakeholder interaction, successful knowledge transfer, a tidy platform environment, and minimized technical hiccups are our key metrics.
                    </div>
</details>

<details className="group">
<summary className="flex justify-between items-center cursor-pointer p-4 md:p-6 font-medium text-slate-900 hover:bg-slate-50 rounded-xl transition-colors">
<div className="flex items-center gap-4">
<span className="iconify text-slate-400" data-icon="lucide:users" data-width="20"></span>
                            What happens when we insource?
                        </div>
<span className="iconify transition-transform group-open:rotate-180 text-slate-400" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-4 md:px-6 pb-6 pt-2 text-sm text-slate-500 leading-relaxed ml-9">
                        We assist with a smooth transition. Our goal is enablement; when you're ready, we hand over the keys while remaining available for consultation.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-12 px-4 max-w-7xl mx-auto" id="consultation">
<div className="bento-card bg-slate-900 p-12 md:p-20 text-center relative overflow-hidden">

<div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
<span className="iconify text-white" data-icon="lucide:calendar-check" data-width="32"></span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Secure Operational Excellence.</h2>
<p className="text-slate-400 text-lg mb-10">
                    Fill critical operational gaps giving your business a solid, stable foundation. Leverage decades of experience today.
                </p>
<button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-colors inline-flex items-center justify-center shadow-lg shadow-white/10">
                    Schedule a Confidential Consultation
                </button>
</div>
</div>
</section>

<footer className="px-4 max-w-7xl mx-auto">
<div className="bento-card px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="iconify text-slate-900" data-icon="lucide:layers" data-width="24"></span>
<span className="font-semibold tracking-tight text-slate-900">GTC</span>
</div>
<div className="flex gap-8 text-sm text-slate-500 font-medium">
<a className="hover:text-slate-900 transition-colors" href="#">News</a>
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms</a>
</div>
<div className="text-xs text-slate-400">
                © 2023 GTC. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
