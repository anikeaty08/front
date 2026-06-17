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
      

<nav className="sticky top-0 z-50 bg-neutral-50/80 backdrop-blur-md border-b border-neutral-200/60">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon className="text-lg" icon="solar:soundwave-linear"></iconify-icon>
</div>
<span className="text-base font-medium tracking-tight text-neutral-900">Apex AI</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#how-it-works">How it works</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#features">Features</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm text-neutral-600 hover:text-neutral-900 transition-colors" href="#">Sign in</a>
<a className="text-sm font-medium bg-neutral-900 text-white px-4 py-2 rounded-full hover:bg-neutral-800 transition-colors shadow-sm" href="#">
                    Start for free
                </a>
</div>
</div>
</nav>
<main className="flex-1">

<section className="pt-20 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
<div className="max-w-5xl mx-auto flex flex-col gap-16 sm:gap-20">

<div className="text-center max-w-3xl mx-auto flex flex-col gap-4 sm:gap-6">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm mx-auto mb-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs text-neutral-600 font-medium">New: Instant CRM sync</span>
</div>
<h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-neutral-900 leading-tight">
                        Never let a missed call cost you a customer.
                    </h1>
<p className="text-base sm:text-lg text-neutral-500 leading-relaxed max-w-2xl mx-auto">
                        When one business misses the ring, the customer moves on. Deploy an AI voice assistant that answers 24/7, books appointments, and captures every opportunity.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
<a className="w-full sm:w-auto text-base font-medium bg-neutral-900 text-white px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors shadow-sm flex items-center justify-center gap-2" href="#">
                            Deploy your AI now
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto text-base font-medium bg-white text-neutral-900 border border-neutral-200 px-6 py-3 rounded-full hover:bg-neutral-50 transition-colors shadow-sm" href="#">
                            Book a demo
                        </a>
</div>
</div>

<div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 relative mt-8" id="how-it-works">

<div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200 -z-10"></div>

<div className="w-full max-w-sm flex flex-col gap-4 relative z-10">
<div className="flex items-center gap-2 px-1">
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Business A</span>
</div>
<div className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-200 shadow-sm overflow-hidden flex flex-col aspect-[4/5] sm:aspect-[9/16] relative">

<div className="px-6 py-4 border-b border-neutral-100 flex justify-between items-center bg-white z-10">
<span className="text-xs font-medium text-neutral-900 tracking-tight">10:42 AM</span>
<div className="flex gap-1.5 text-neutral-400">
<iconify-icon className="text-sm" icon="solar:cellular-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:wi-fi-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:battery-charge-linear"></iconify-icon>
</div>
</div>

<div className="flex-1 bg-neutral-100/50 p-4 sm:p-6 flex flex-col gap-3 relative">

<div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200 opacity-50"></div>

<div className="bg-white/90 backdrop-blur-sm border border-neutral-200 rounded-xl sm:rounded-2xl p-4 shadow-sm relative z-10 mt-4 sm:mt-12">
<div className="flex items-start gap-3 sm:gap-4">
<div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-0.5 sm:gap-1 flex-1">
<div className="flex justify-between items-start">
<span className="text-sm font-medium text-neutral-900">Missed Call</span>
<span className="text-xs text-neutral-400">Now</span>
</div>
<span className="text-sm text-neutral-600">John Doe (Customer)</span>
<span className="text-xs text-neutral-400 mt-1">No voicemail left</span>
</div>
</div>
</div>

<div className="mt-auto text-center relative z-10 pb-4">
<span className="text-xs font-medium text-neutral-400 flex items-center justify-center gap-2">
<iconify-icon icon="solar:lock-linear"></iconify-icon>
                                        Swipe up to unlock
                                    </span>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-neutral-200 shadow-sm text-neutral-400 rotate-90 lg:rotate-0 z-10 shrink-0">
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</div>

<div className="w-full max-w-sm flex flex-col gap-4 relative z-10">
<div className="flex items-center gap-2 px-1">
<div className="w-2 h-2 rounded-full bg-green-400"></div>
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Apex AI User</span>
</div>
<div className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-200 shadow-sm overflow-hidden flex flex-col aspect-[4/5] sm:aspect-[9/16] relative">

<div className="px-6 py-4 border-b border-neutral-100 flex justify-between items-center bg-white z-10">
<span className="text-xs font-medium text-neutral-900 tracking-tight">10:44 AM</span>
<div className="flex gap-1.5 text-neutral-400">
<iconify-icon className="text-sm" icon="solar:cellular-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:wi-fi-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:battery-charge-linear"></iconify-icon>
</div>
</div>

<div className="flex-1 bg-white flex flex-col relative">

<div className="flex flex-col items-center justify-center py-6 sm:py-8 gap-3 border-b border-neutral-100">
<div className="relative">
<div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-neutral-900 flex items-center justify-center text-white relative z-10">
<iconify-icon className="text-2xl sm:text-3xl" icon="solar:soundwave-linear"></iconify-icon>
</div>
<div className="absolute inset-0 bg-neutral-900/10 rounded-full animate-ping z-0"></div>
</div>
<div className="flex flex-col items-center gap-1">
<span className="text-sm sm:text-base font-medium text-neutral-900 tracking-tight">AI Voice Assistant</span>
<span className="text-xs text-green-600 font-medium flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                            00:45
                                        </span>
</div>
</div>

<div className="flex-1 p-4 sm:p-6 flex flex-col gap-4 overflow-hidden bg-neutral-50/50">
<div className="text-xs font-medium text-neutral-400 text-center mb-2 uppercase tracking-widest">Live Transcript</div>

<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center shrink-0 mt-1">
<iconify-icon className="text-xs text-neutral-600" icon="solar:bot-linear"></iconify-icon>
</div>
<div className="bg-white border border-neutral-200 rounded-2xl rounded-tl-sm p-3 shadow-sm text-xs sm:text-sm text-neutral-600 leading-relaxed">
                                            Hello, you've reached Apex Services. How can I help you today?
                                        </div>
</div>

<div className="flex gap-3 flex-row-reverse">
<div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
<iconify-icon className="text-xs text-blue-600" icon="solar:user-linear"></iconify-icon>
</div>
<div className="bg-blue-50 border border-blue-100 rounded-2xl rounded-tr-sm p-3 shadow-sm text-xs sm:text-sm text-blue-900 leading-relaxed">
                                            Hi, I couldn't reach anyone at the other place. I have an urgent request and need a quote.
                                        </div>
</div>

<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center shrink-0 mt-1">
<iconify-icon className="text-xs text-neutral-600" icon="solar:bot-linear"></iconify-icon>
</div>
<div className="bg-white border border-neutral-200 rounded-2xl rounded-tl-sm p-3 shadow-sm text-xs sm:text-sm text-neutral-600 leading-relaxed relative">
                                            I can certainly help with that. Let me grab a few details from you to send over a quote immediately. What is your address?
                                            <div className="absolute -bottom-2 -right-2 w-5 h-5 bg-white border border-neutral-200 rounded-full flex items-center justify-center shadow-sm">
<div className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-pulse"></div>
</div>
</div>
</div>
</div>

<div className="p-4 sm:p-6 bg-white border-t border-neutral-100 flex justify-center pb-6 sm:pb-8">
<div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white shadow-sm shadow-red-500/20 cursor-pointer hover:bg-red-600 transition-colors">
<iconify-icon className="text-lg rotate-[135deg]" icon="solar:phone-calling-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-white border-y border-neutral-200/60" id="features">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-neutral-900 mb-4">Everything you need to automate your front desk</h2>
<p className="text-base text-neutral-500">Powerful AI that sounds human, acts intelligently, and integrates directly with your existing tools.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200/60 flex flex-col gap-4 hover:shadow-sm transition-shadow">
<div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-center justify-center text-neutral-900 mb-2">
<iconify-icon className="text-2xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 tracking-tight">24/7 Availability</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Your business never sleeps. Answer calls after hours, on weekends, and during holidays automatically.</p>
</div>

<div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200/60 flex flex-col gap-4 hover:shadow-sm transition-shadow">
<div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-center justify-center text-neutral-900 mb-2">
<iconify-icon className="text-2xl" icon="solar:calendar-add-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 tracking-tight">Instant Booking</h3>
<p className="text-sm text-neutral-500 leading-relaxed">The AI checks your real-time calendar availability and schedules appointments directly on the call.</p>
</div>

<div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200/60 flex flex-col gap-4 hover:shadow-sm transition-shadow">
<div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-center justify-center text-neutral-900 mb-2">
<iconify-icon className="text-2xl" icon="solar:database-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 tracking-tight">CRM Integration</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Every transcript, lead detail, and scheduled event is automatically synced directly to your existing CRM.</p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-neutral-50" id="pricing">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-12">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-neutral-900 mb-6">Simple, transparent pricing</h2>

<div className="flex items-center justify-center gap-4">
<span className="text-sm font-normal text-neutral-500">Monthly</span>

<div className="w-12 h-7 bg-neutral-900 rounded-full relative cursor-pointer flex items-center px-1 shadow-inner">

<div className="w-5 h-5 bg-white rounded-full shadow-sm translate-x-5 transition-transform duration-300"></div>
</div>
<span className="text-sm font-medium text-neutral-900 flex items-center gap-2">
                            Annually
                            <span className="text-xs font-normal text-green-700 bg-green-100 px-2 py-0.5 rounded-full">Save 20%</span>
</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-white rounded-3xl border border-neutral-200 p-8 sm:p-10 shadow-sm flex flex-col">
<h3 className="text-xl font-medium text-neutral-900 tracking-tight mb-2">Starter</h3>
<p className="text-sm text-neutral-500 mb-6">Perfect for small businesses wanting to automate basic reception.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-medium tracking-tight text-neutral-900">$49</span>
<span className="text-sm text-neutral-500">/mo</span>
</div>
<ul className="flex flex-col gap-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-600">
<iconify-icon className="text-neutral-900 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                500 minutes included
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-600">
<iconify-icon className="text-neutral-900 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                Basic calendar integration
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-600">
<iconify-icon className="text-neutral-900 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                Email notifications
                            </li>
</ul>
<a className="w-full text-center text-sm font-medium bg-white text-neutral-900 border border-neutral-200 py-3 rounded-full hover:bg-neutral-50 transition-colors shadow-sm" href="#">
                            Get started
                        </a>
</div>

<div className="bg-neutral-900 rounded-3xl border border-neutral-800 p-8 sm:p-10 shadow-xl flex flex-col relative overflow-hidden">

<div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Professional</h3>
<p className="text-sm text-neutral-400 mb-6">For growing teams that need full CRM sync and advanced flows.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-medium tracking-tight text-white">$149</span>
<span className="text-sm text-neutral-400">/mo</span>
</div>
<ul className="flex flex-col gap-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                2,000 minutes included
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                Advanced CRM syncing
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                Custom voice cloning
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                Priority support
                            </li>
</ul>
<a className="w-full text-center text-sm font-medium bg-white text-neutral-900 py-3 rounded-full hover:bg-neutral-100 transition-colors shadow-sm" href="#">
                            Start free trial
                        </a>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-neutral-200/60 py-12 sm:py-16">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-8">
<div className="flex flex-col gap-4 max-w-xs">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-neutral-900 rounded-md flex items-center justify-center text-white">
<iconify-icon className="text-sm" icon="solar:soundwave-linear"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight text-neutral-900">Apex AI</span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed">
                    Automating customer support and reception for modern businesses. Never miss a ring again.
                </p>
</div>
<div className="flex gap-16">
<div className="flex flex-col gap-4">
<span className="text-sm font-medium text-neutral-900 tracking-tight">Product</span>
<a className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Features</a>
<a className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Integrations</a>
<a className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Pricing</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-sm font-medium text-neutral-900 tracking-tight">Company</span>
<a className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors" href="#">About</a>
<a className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Blog</a>
<a className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Contact</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-sm font-medium text-neutral-900 tracking-tight">Legal</span>
<a className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Privacy</a>
<a className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Terms</a>
</div>
</div>
</div>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-neutral-100 flex flex-col sm:flex-row justify-between items-center gap-4">
<span className="text-xs text-neutral-400">© 2024 Apex AI. All rights reserved.</span>
<div className="flex items-center gap-4 text-neutral-400">
<a className="hover:text-neutral-900 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:map-arrow-up-linear"></iconify-icon></a>
<a className="hover:text-neutral-900 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
