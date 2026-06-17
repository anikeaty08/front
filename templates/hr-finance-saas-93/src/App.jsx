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
      

<nav className="fixed w-full top-0 z-50 bg-zinc-50/80 backdrop-blur-md border-b border-zinc-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center">
<a className="text-2xl font-semibold tracking-tighter text-zinc-900 flex items-center gap-1" href="#">
<iconify-icon className="text-zinc-900" icon="solar:layers-minimalistic-linear"></iconify-icon>
                        jisr
                    </a>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Products</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Solutions</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Compliance</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Resources</a>
</div>

<div className="flex items-center space-x-4">
<a className="hidden md:block text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Log in</a>
<a className="bg-zinc-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-zinc-800 transition-all shadow-sm" href="#">Get a Demo</a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none" style={{background: 'radial-gradient(circle, rgba(161,161,170,0.4) 0%, rgba(250,250,250,0) 70%)'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-6 flex flex-col items-start text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 mb-6">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-zinc-600">The #1 Platform for KSA Enterprises</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-zinc-900 leading-[1.05]">
                        The unified bridge for <span className="text-zinc-400">HR</span> &amp; <span className="text-zinc-400">Finance.</span>
</h1>
<p className="mt-6 text-lg text-zinc-500 max-w-xl leading-relaxed">
                        Unify payroll, ATS, time tracking, and employee engagement in one beautiful platform. Designed for people, compliant by default.
                    </p>

<div className="mt-10 w-full max-w-md">
<form className="flex flex-col sm:flex-row gap-2">
<div className="relative flex-grow">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-400" icon="solar:letter-linear"></iconify-icon>
</div>
<input className="w-full pl-10 pr-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-shadow shadow-sm" placeholder="Enter your work email" required="" type="email"/>
</div>
<button className="w-full sm:w-auto flex-none bg-zinc-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-zinc-800 transition-all shadow-sm flex items-center justify-center gap-2" type="submit">
                                Continue
                                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
<p className="mt-3 text-xs text-zinc-400 flex items-center gap-1.5">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                            Your data is secure. No credit card required.
                        </p>
</div>

<div className="mt-12 pt-8 border-t border-zinc-200/60 w-full">
<p className="text-xs font-medium text-zinc-400 mb-4 tracking-tight uppercase">Trusted by forward-thinking teams</p>
<div className="flex items-center gap-8 text-zinc-400">

<span className="text-xl font-semibold tracking-tighter opacity-60">ACME Corp</span>
<span className="text-xl font-semibold tracking-tighter opacity-60">Globex</span>
<span className="text-xl font-semibold tracking-tighter opacity-60 hidden sm:block">Soylent</span>
<span className="text-xl font-semibold tracking-tighter opacity-60 hidden md:block">Initech</span>
</div>
</div>
</div>

<div className="lg:col-span-6 relative">

<div className="absolute inset-0 bg-gradient-to-tr from-zinc-100 to-zinc-50 rounded-[2rem] transform rotate-3 scale-105 border border-zinc-200/50"></div>
<div className="relative bg-white rounded-2xl border border-zinc-200 shadow-xl shadow-zinc-200/50 overflow-hidden flex flex-col">

<div className="h-12 border-b border-zinc-100 flex items-center px-4 justify-between bg-zinc-50/50">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-400/80"></div>
<div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
<div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
</div>
<div className="flex gap-4">
<div className="w-20 h-2 bg-zinc-200 rounded-full"></div>
<div className="w-12 h-2 bg-zinc-200 rounded-full"></div>
</div>
</div>

<div className="p-6 flex-grow flex flex-col gap-6">

<div className="flex justify-between items-end">
<div>
<div className="w-24 h-3 bg-zinc-100 rounded-full mb-2"></div>
<div className="text-3xl font-semibold tracking-tight text-zinc-900">SAR 1.2M</div>
<div className="text-xs text-zinc-400 mt-1 flex items-center gap-1">
<iconify-icon className="text-emerald-500" icon="solar:trend-up-linear"></iconify-icon>
                                        Payroll processed this month
                                    </div>
</div>
<div className="flex gap-2">
<div className="w-8 h-8 rounded-lg border border-zinc-200 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-xl border border-zinc-100 bg-zinc-50/50 flex flex-col gap-3">
<div className="flex justify-between items-center">
<div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500">
<iconify-icon icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Active</span>
</div>
<div>
<div className="text-xs text-zinc-500 mb-1">Total Employees</div>
<div className="text-lg font-medium tracking-tight text-zinc-900">432</div>
</div>
</div>
<div className="p-4 rounded-xl border border-zinc-100 bg-zinc-50/50 flex flex-col gap-3">
<div className="flex justify-between items-center">
<div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500">
<iconify-icon icon="solar:shield-warning-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">Action req</span>
</div>
<div>
<div className="text-xs text-zinc-500 mb-1">Compliance Alerts</div>
<div className="text-lg font-medium tracking-tight text-zinc-900">3</div>
</div>
</div>
</div>

<div className="flex flex-col gap-3 mt-2">
<div className="text-xs font-medium text-zinc-400 uppercase tracking-tight">Recent Activity</div>
<div className="flex items-center justify-between p-3 rounded-lg hover:bg-zinc-50 border border-transparent hover:border-zinc-100 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-200"></div>
<div>
<div className="text-sm font-medium text-zinc-900">Sarah Al-Faisal</div>
<div className="text-xs text-zinc-500">Onboarding completed</div>
</div>
</div>
<div className="text-xs text-zinc-400">2h ago</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg hover:bg-zinc-50 border border-transparent hover:border-zinc-100 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-200"></div>
<div>
<div className="text-sm font-medium text-zinc-900">Ahmed Hassan</div>
<div className="text-xs text-zinc-500">Leave request approved</div>
</div>
</div>
<div className="text-xs text-zinc-400">5h ago</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-zinc-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Everything to manage your workforce.</h2>
<p className="mt-4 text-base text-zinc-500">Stop jumping between disjointed tools. jisr brings the entire employee lifecycle into one unified, compliant platform.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 mb-6 group-hover:scale-105 transition-transform">
<iconify-icon height="24" icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">Automated Payroll</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Run flawless payroll in clicks. Automatically syncs with attendance, leaves, and deductions. Fully WPS compliant.</p>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 mb-6 group-hover:scale-105 transition-transform">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">Modern ATS</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Attract, track, and hire top talent. Streamlined pipelines, collaborative hiring, and seamless onboarding to payroll.</p>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 mb-6 group-hover:scale-105 transition-transform">
<iconify-icon height="24" icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">Time &amp; Attendance</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Flexible tracking via app, web, or biometric devices. Real-time sync ensures accurate payroll every single cycle.</p>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 mb-6 group-hover:scale-105 transition-transform">
<iconify-icon height="24" icon="solar:target-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">Performance Management</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Set goals, conduct reviews, and foster growth. Tie performance directly to compensation modeling.</p>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 mb-6 group-hover:scale-105 transition-transform">
<iconify-icon height="24" icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">Employee Engagement</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Keep a pulse on your team. Surveys, announcements, and a self-service portal that employees actually love using.</p>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 mb-6 group-hover:scale-105 transition-transform">
<iconify-icon height="24" icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">HRIS Core</h3>
<p className="text-sm text-zinc-500 leading-relaxed">A single source of truth for all employee data. Secure, accessible, and organized to eliminate administrative chaos.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative order-2 lg:order-1">
<div className="absolute inset-0 bg-zinc-200/50 rounded-3xl transform -rotate-3 scale-105"></div>
<div className="relative bg-white border border-zinc-200 rounded-2xl shadow-sm p-8 flex flex-col gap-6">
<div className="flex items-center gap-4 border-b border-zinc-100 pb-6">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center">
<iconify-icon className="text-zinc-600 text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-zinc-900">Compliance Engine</h4>
<p className="text-xs text-zinc-500">Continuously monitoring regulations</p>
</div>
<div className="ml-auto px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-medium">Active</div>
</div>

<div className="flex flex-col gap-4">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-zinc-700">GOSI Auto-sync</span>
<div className="w-10 h-6 bg-zinc-900 rounded-full relative cursor-pointer">
<div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-zinc-700">WPS File Generation</span>
<div className="w-10 h-6 bg-zinc-900 rounded-full relative cursor-pointer">
<div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-zinc-700">Muqeem Integration</span>
<div className="w-10 h-6 bg-zinc-200 rounded-full relative cursor-pointer">
<div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
</div>
</div>
</div>
<div className="mt-4 p-4 bg-zinc-50 border border-zinc-100 rounded-xl text-xs text-zinc-500 leading-relaxed">
                            System is fully aligned with the latest Saudi Labor Law updates. Next audit scheduled in 14 days.
                        </div>
</div>
</div>

<div className="order-1 lg:order-2">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-6">Built for KSA.<br/>Compliant by design.</h2>
<p className="text-base text-zinc-500 mb-8 leading-relaxed">
                        Navigating local labor laws shouldn't be a full-time job. jisr is deeply localized for the Middle East, specifically Saudi Arabia. We bake compliance into every feature so you can focus on strategy, not paperwork.
                    </p>
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-900 mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-600">Native integration with Muqeem and GOSI</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-900 mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-600">Automated WPS (Wage Protection System) compliance</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-900 mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-600">Up-to-date Saudi labor law rules engine applied to leaves and end-of-service</span>
</li>
</ul>
<a className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors" href="#">
                        Explore compliance features
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Empathy in design, power in execution.</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-4 text-zinc-900">
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
</div>
<p className="text-sm text-zinc-700 leading-relaxed mb-8">"jisr completely transformed how Finance and HR collaborate. Payroll went from a 3-day headache to a 2-hour breeze. The interface is simply unmatched."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-200"></div>
<div>
<div className="text-sm font-medium text-zinc-900">Khalid A.</div>
<div className="text-xs text-zinc-500">CFO, Retail Group</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-4 text-zinc-900">
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
</div>
<p className="text-sm text-zinc-700 leading-relaxed mb-8">"Finally, software built for the region that feels like a global, top-tier SaaS. Our employees love the mobile app for self-service requests."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-200"></div>
<div>
<div className="text-sm font-medium text-zinc-900">Noura S.</div>
<div className="text-xs text-zinc-500">VP of HR, Tech Startup</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 flex flex-col justify-between md:col-span-2 lg:col-span-1">
<div>
<div className="flex gap-1 mb-4 text-zinc-900">
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
</div>
<p className="text-sm text-zinc-700 leading-relaxed mb-8">"We switched from a legacy system. The migration was smooth, and knowing we are always compliant with KSA laws lets me sleep better at night."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-200"></div>
<div>
<div className="text-sm font-medium text-zinc-900">Fahad M.</div>
<div className="text-xs text-zinc-500">Director of Operations</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-900 text-white relative overflow-hidden">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">Ready to unite your teams?</h2>
<p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">
                Join thousands of businesses streamlining their HR and Finance operations with jisr. See the platform in action today.
            </p>
<form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
<input className="flex-grow px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-sm text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all backdrop-blur-sm" placeholder="name@company.com" required="" type="email"/>
<button className="bg-white text-zinc-900 px-8 py-3 rounded-xl text-sm font-medium hover:bg-zinc-100 transition-all flex items-center justify-center gap-2 whitespace-nowrap" type="submit">
                    Book Demo
                </button>
</form>
<p className="mt-4 text-xs text-zinc-500">Typically responds within 10 minutes during business hours.</p>
</div>
</section>

<footer className="bg-white border-t border-zinc-200/50 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-900 text-xl" icon="solar:layers-minimalistic-linear"></iconify-icon>
<span className="text-xl font-semibold tracking-tighter text-zinc-900">jisr</span>
</div>
<div className="flex gap-6 text-sm text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Security</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Contact</a>
</div>
<div className="text-xs text-zinc-400">
                © 2024 jisr. All rights reserved. Built for MENA.
            </div>
</div>
</footer>

    </>
  );
}
