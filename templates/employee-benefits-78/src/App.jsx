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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-[#008D87] text-xl font-bold tracking-tighter flex items-center gap-2" href="/">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
                benefitwise
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="text-slate-900 transition-colors" href="#about">About Us</a>
<a className="hover:text-slate-900 transition-colors" href="#difference">Difference</a>
<a className="hover:text-slate-900 transition-colors" href="#platform">Platform</a>
<a className="hover:text-slate-900 transition-colors" href="#journey">Journey</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Log in</a>
<a className="bg-[#008D87] hover:bg-[#007671] text-white text-sm font-medium px-4 py-2 rounded-lg transition-all shadow-sm shadow-[#008D87]/20" href="#schedule">
                    Schedule Demo
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden" id="about">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white -z-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight mb-8 leading-[1.1]">
                Redefining Employee <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008D87] to-[#006e69]">Benefits &amp; Engagement</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 mb-2 max-w-2xl mx-auto leading-relaxed font-medium">
                Employee Benefits Made Simple.
            </p>
<p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                One Platform, Complete Engagement.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-[#008D87] hover:bg-[#007671] text-white text-base font-medium px-8 py-3 rounded-xl transition-all shadow-lg shadow-[#008D87]/25 flex items-center justify-center gap-2" href="#schedule">
                    Schedule a Demo
                    <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="difference">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Why Choose BenefitWise?</h2>
<p className="text-slate-500">See how we compare to traditional, disconnected benefit providers.</p>
</div>

<div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
<div className="grid grid-cols-3 bg-slate-50/50 border-b border-slate-200 p-6">
<div className="col-span-1 flex items-center font-medium text-slate-500">Feature</div>
<div className="col-span-1 flex items-center justify-center font-medium text-slate-500">Traditional Providers</div>
<div className="col-span-1 flex items-center justify-center font-bold text-[#008D87] bg-teal-50/50 rounded-lg py-1 border border-teal-100">Benefitwise</div>
</div>

<div className="grid grid-cols-3 p-6 border-b border-slate-100 hover:bg-slate-50/30 transition-colors">
<div className="col-span-1 font-medium text-slate-900 flex items-center gap-2">
<iconify-icon className="text-slate-400 hidden md:block" icon="solar:layers-linear"></iconify-icon>
                        Platform Integration
                    </div>
<div className="col-span-1 flex flex-col items-center justify-center text-center">
<iconify-icon className="text-slate-300 mb-1" icon="solar:close-circle-linear" width="24"></iconify-icon>
<span className="text-xs text-slate-400">Disconnected Silos</span>
</div>
<div className="col-span-1 flex flex-col items-center justify-center text-center">
<iconify-icon className="text-[#008D87] mb-1" icon="solar:check-circle-bold" width="24"></iconify-icon>
<span className="text-xs font-semibold text-[#008D87]">Unified Ecosystem</span>
</div>
</div>

<div className="grid grid-cols-3 p-6 border-b border-slate-100 hover:bg-slate-50/30 transition-colors">
<div className="col-span-1 font-medium text-slate-900 flex items-center gap-2">
<iconify-icon className="text-slate-400 hidden md:block" icon="solar:document-text-linear"></iconify-icon>
                        Administration
                    </div>
<div className="col-span-1 flex flex-col items-center justify-center text-center">
<iconify-icon className="text-slate-300 mb-1" icon="solar:file-remove-linear" width="24"></iconify-icon>
<span className="text-xs text-slate-400">Manual Paperwork</span>
</div>
<div className="col-span-1 flex flex-col items-center justify-center text-center">
<iconify-icon className="text-[#008D87] mb-1" icon="solar:check-circle-bold" width="24"></iconify-icon>
<span className="text-xs font-semibold text-[#008D87]">100% Digital</span>
</div>
</div>

<div className="grid grid-cols-3 p-6 border-b border-slate-100 hover:bg-slate-50/30 transition-colors">
<div className="col-span-1 font-medium text-slate-900 flex items-center gap-2">
<iconify-icon className="text-slate-400 hidden md:block" icon="solar:chart-2-linear"></iconify-icon>
                        Insights &amp; Analytics
                    </div>
<div className="col-span-1 flex flex-col items-center justify-center text-center">
<iconify-icon className="text-slate-300 mb-1" icon="solar:calendar-date-linear" width="24"></iconify-icon>
<span className="text-xs text-slate-400">Annual Only</span>
</div>
<div className="col-span-1 flex flex-col items-center justify-center text-center">
<iconify-icon className="text-[#008D87] mb-1" icon="solar:check-circle-bold" width="24"></iconify-icon>
<span className="text-xs font-semibold text-[#008D87]">Real-time AI Data</span>
</div>
</div>

<div className="grid grid-cols-3 p-6 hover:bg-slate-50/30 transition-colors">
<div className="col-span-1 font-medium text-slate-900 flex items-center gap-2">
<iconify-icon className="text-slate-400 hidden md:block" icon="solar:gift-linear"></iconify-icon>
                        Benefits Scope
                    </div>
<div className="col-span-1 flex flex-col items-center justify-center text-center">
<iconify-icon className="text-slate-300 mb-1" icon="solar:wallet-linear" width="24"></iconify-icon>
<span className="text-xs text-slate-400">Cash/Insurance Only</span>
</div>
<div className="col-span-1 flex flex-col items-center justify-center text-center">
<iconify-icon className="text-[#008D87] mb-1" icon="solar:check-circle-bold" width="24"></iconify-icon>
<span className="text-xs font-semibold text-[#008D87]">Holistic (Health, Wealth, Travel)</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="platform">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">One Platform. Complete Engagement.</h2>
<p className="text-slate-500 max-w-2xl mx-auto">A fully digital platform that integrates seamlessly with your existing systems.</p>
</div>

<div className="relative max-w-4xl mx-auto h-[400px] md:h-[500px] flex items-center justify-center">

<div className="relative z-20 w-48 h-48 md:w-64 md:h-64 bg-white rounded-full shadow-2xl shadow-[#008D87]/20 border border-slate-100 flex flex-col items-center justify-center p-6 text-center">
<div className="w-12 h-12 bg-gradient-to-br from-[#008D87] to-[#006e69] rounded-xl flex items-center justify-center text-white mb-3 shadow-lg">
<iconify-icon icon="solar:layers-minimalistic-linear" width="28"></iconify-icon>
</div>
<h3 className="font-bold text-slate-900 text-lg md:text-xl tracking-tight">Benefitwise</h3>
<p className="text-xs text-slate-400 mt-2">Centralized Hub</p>
</div>

<div className="absolute border border-slate-100 rounded-full w-[300px] h-[300px] md:w-[450px] md:h-[450px] z-10"></div>
<div className="absolute border border-dashed border-slate-200 rounded-full w-[450px] h-[450px] md:w-[700px] md:h-[700px] z-0 animate-[spin_60s_linear_infinite]"></div>


<div className="absolute top-10 md:top-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-md border border-slate-100 flex items-center gap-2 z-20">
<iconify-icon className="text-blue-500" icon="solar:server-square-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">HRMS Integration</span>
</div>

<div className="absolute top-1/2 right-4 md:-right-4 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-md border border-slate-100 flex items-center gap-2 z-20">
<iconify-icon className="text-purple-500" icon="solar:gift-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Digital Rewards</span>
</div>

<div className="absolute bottom-10 md:bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-md border border-slate-100 flex items-center gap-2 z-20">
<iconify-icon className="text-green-500" icon="solar:chat-round-dots-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Communication</span>
</div>

<div className="absolute top-1/2 left-4 md:-left-4 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-md border border-slate-100 flex items-center gap-2 z-20">
<iconify-icon className="text-orange-500" icon="solar:pie-chart-2-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Smart Analytics</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="journey">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Everything You Need to Engage &amp; Scale</h2>
<p className="text-slate-500">Featuring AI Surveys, 24/7 Support &amp; Analytics Dashboard.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>

<div className="relative group">
<div className="w-24 h-24 mx-auto bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:border-[#008D87] transition-colors relative z-10">
<iconify-icon className="text-green-600" icon="solar:chat-square-call-linear" width="40"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 text-center mb-2">WhatsApp Access</h3>
<p className="text-sm text-slate-500 text-center">Instant access to benefits without installing new apps.</p>
</div>

<div className="relative group">
<div className="w-24 h-24 mx-auto bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:border-[#008D87] transition-colors relative z-10">
<iconify-icon className="text-purple-600" icon="solar:magic-stick-3-linear" width="40"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 text-center mb-2">AI Surveys</h3>
<p className="text-sm text-slate-500 text-center">Real-time pulse checks and sentiment analysis.</p>
</div>

<div className="relative group">
<div className="w-24 h-24 mx-auto bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:border-[#008D87] transition-colors relative z-10">
<iconify-icon className="text-blue-600" icon="solar:megaphone-linear" width="40"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 text-center mb-2">Communication</h3>
<p className="text-sm text-slate-500 text-center">Unified messaging to keep teams aligned.</p>
</div>

<div className="relative group">
<div className="w-24 h-24 mx-auto bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:border-[#008D87] transition-colors relative z-10">
<iconify-icon className="text-orange-600" icon="solar:headphones-round-sound-linear" width="40"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 text-center mb-2">24/7 Support</h3>
<p className="text-sm text-slate-500 text-center">Always-on assistance for every employee query.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Recognized for Excellence</h2>
<p className="text-slate-500 mb-16">Trusted by industry leaders for innovation and impact.</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

<div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center justify-center gap-4 hover:border-slate-200 transition-colors">
<iconify-icon className="text-yellow-500 text-4xl" icon="solar:cup-star-bold"></iconify-icon>
<div className="text-sm font-semibold text-slate-900">Best HR Tech 2023</div>
</div>

<div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center justify-center gap-4 hover:border-slate-200 transition-colors">
<iconify-icon className="text-blue-500 text-4xl" icon="solar:medal-star-bold"></iconify-icon>
<div className="text-sm font-semibold text-slate-900">Innovation Leader</div>
</div>

<div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center justify-center gap-4 hover:border-slate-200 transition-colors">
<iconify-icon className="text-green-500 text-4xl" icon="solar:star-circle-bold"></iconify-icon>
<div className="text-sm font-semibold text-slate-900">User's Choice</div>
</div>

<div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center justify-center gap-4 hover:border-slate-200 transition-colors">
<iconify-icon className="text-purple-500 text-4xl" icon="solar:verified-check-bold"></iconify-icon>
<div className="text-sm font-semibold text-slate-900">Top Performer</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0f172a] text-white" id="schedule">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Ready to Transform Your Benefits?</h2>
<p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                See the difference a unified platform can make.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
<button className="w-full sm:w-auto bg-[#008D87] hover:bg-[#007671] text-white text-base font-medium px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-[#008D87]/25">
                    Schedule a Demo
                </button>
</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-slate-400 border-t border-white/10 pt-8">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#008D87]" icon="solar:phone-linear"></iconify-icon>
<span className="hover:text-white transition-colors cursor-pointer">+91 931 133 9967 / 69</span>
</div>
<span className="hidden md:inline text-slate-700">|</span>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#008D87]" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:Info@benefitwise.in">Info@benefitwise.in</a>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<a className="text-[#008D87] text-xl font-bold tracking-tighter flex items-center gap-2" href="#">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
                    benefitwise
                </a>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-[#008D87] transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-[#008D87] transition-colors" href="#">Terms of Service</a>
<a className="hover:text-[#008D87] transition-colors" href="#">Contact</a>
</div>
<div className="text-xs text-slate-400">
                    © 2023 Benefitwise. All rights reserved.
                </div>
</div>
</div>
</footer>

    </>
  );
}
