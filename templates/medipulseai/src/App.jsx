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
      

<nav className="sticky top-0 z-50 w-full glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex items-center gap-2 cursor-pointer group">
<div className="bg-primary text-white w-8 h-8 rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
<iconify-icon icon="lucide:activity" width="18"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900 group-hover:text-primary transition-colors">MediPulse AI</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#testimonials">Testimonials</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
<a className="bg-primary hover-bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-lg hover:-translate-y-0.5" href="#">
                        Request a Demo
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-500 hover:text-slate-900">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="lg:pt-32 lg:pb-32 overflow-hidden pt-24 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
<div className="absolute top-20 left-10 w-96 h-96 bg-[#ADD8E6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
<div className="absolute top-40 right-10 w-96 h-96 bg-[#008080] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animation-delay-2000 animate-float"></div>
</div>
<div className="lg:px-8 z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="fade-in-up">
<span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-50 border-slate-200/60 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 shadow-sm"><span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008080] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#008080]"></span>
</span> Now accepting new clinics for 2026</span>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-semibold text-slate-900 tracking-tight max-w-4xl mr-auto mb-6 ml-auto">
                    The Future of <span className="text-primary">Patient Care</span> is Here.
                </h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                    MediPulse AI streamlines your clinic's operations, so you can focus on what matters most.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
<a className="bg-primary hover-bg-primary text-white text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto" href="#">
                        Get Started
                    </a>
<a className="group flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium px-6 py-3.5 rounded-full bg-white border border-slate-200 hover:border-slate-300 transition-all w-full sm:w-auto justify-center shadow-sm" href="#">
<iconify-icon className="text-primary group-hover:scale-110 transition-transform" icon="lucide:play-circle" width="20"></iconify-icon>
                        Watch Video
                    </a>
</div>
</div>

<div className="fade-in-up delay-200 relative max-w-5xl mx-auto">
<div className="relative bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 mx-auto">

<div className="bg-white rounded-[2rem] overflow-hidden relative aspect-[16/10] w-full">

<div className="flex h-full w-full bg-slate-50">

<div className="w-16 md:w-20 bg-white border-r border-slate-100 flex flex-col items-center py-6 gap-6 hidden sm:flex">
<div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center"><iconify-icon icon="lucide:activity" width="20"></iconify-icon></div>
<div className="w-10 h-10 rounded-xl text-slate-400 hover:bg-slate-50 flex items-center justify-center"><iconify-icon icon="lucide:calendar" width="20"></iconify-icon></div>
<div className="w-10 h-10 rounded-xl text-slate-400 hover:bg-slate-50 flex items-center justify-center"><iconify-icon icon="lucide:users" width="20"></iconify-icon></div>
<div className="w-10 h-10 rounded-xl text-slate-400 hover:bg-slate-50 flex items-center justify-center"><iconify-icon icon="lucide:message-square" width="20"></iconify-icon></div>
</div>

<div className="flex-1 p-6 md:p-8 overflow-hidden">
<div className="flex justify-between items-center mb-8">
<div>
<h3 className="text-xl font-semibold text-slate-900">Morning Overview</h3>
<p className="text-sm text-slate-400">Welcome back, Dr. Smith</p>
</div>
<div className="flex gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200"></div>
</div>
</div>
<div className="grid grid-cols-3 gap-6 mb-8">
<div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
<p className="text-xs font-medium text-slate-400 mb-1">Total Patients</p>
<p className="text-2xl font-semibold text-slate-900">142</p>
<div className="mt-2 text-xs text-primary flex items-center gap-1 bg-[#008080]/5 w-fit px-2 py-1 rounded-md">
<iconify-icon icon="lucide:trending-up" width="12"></iconify-icon> +12%
                                        </div>
</div>
<div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
<p className="text-xs font-medium text-slate-400 mb-1">Appointments</p>
<p className="text-2xl font-semibold text-slate-900">28</p>
<div className="mt-2 text-xs text-primary flex items-center gap-1 bg-[#008080]/5 w-fit px-2 py-1 rounded-md">
<iconify-icon icon="lucide:check-circle" width="12"></iconify-icon> On Track
                                        </div>
</div>
<div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
<p className="text-xs font-medium text-slate-400 mb-1">No-Shows</p>
<p className="text-2xl font-semibold text-slate-900">0</p>
<div className="mt-2 text-xs text-emerald-600 flex items-center gap-1 bg-emerald-50 w-fit px-2 py-1 rounded-md">
<iconify-icon icon="lucide:thumbs-up" width="12"></iconify-icon> Perfect
                                        </div>
</div>
</div>
<div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 h-full">
<h4 className="text-sm font-semibold text-slate-900 mb-4">Upcoming Schedule</h4>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium text-xs">JD</div>
<div>
<p className="text-sm font-medium text-slate-900">John Doe</p>
<p className="text-xs text-slate-400">General Checkup</p>
</div>
</div>
<span className="text-xs font-medium text-slate-500">09:00 AM</span>
</div>
<div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-medium text-xs">AS</div>
<div>
<p className="text-sm font-medium text-slate-900">Alice Smith</p>
<p className="text-xs text-slate-400">Follow-up</p>
</div>
</div>
<span className="text-xs font-medium text-slate-500">09:45 AM</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-10 left-10 right-10 h-20 bg-primary/20 blur-3xl rounded-full z-[-1]"></div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="features">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Powerful Features, Simply Designed</h2>
<p className="text-slate-500 max-w-2xl mx-auto">Everything you need to modernize your clinic in one unified platform.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 row-span-1 group relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-100 p-8 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200 transition-all duration-500">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-primary translate-x-12 -translate-y-12" icon="lucide:calendar-clock" width="200"></iconify-icon>
</div>
<div className="h-12 w-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-primary mb-6">
<iconify-icon icon="lucide:calendar-check" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Smart Scheduling</h3>
<p className="text-slate-500 leading-relaxed max-w-sm">
                        AI-driven calendar management that predicts cancellations, fills gaps automatically, and optimizes provider availability in real-time.
                    </p>
</div>

<div className="md:col-span-1 md:row-span-2 group relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 hover:shadow-xl hover:shadow-slate-900/20 transition-all duration-500 flex flex-col justify-between">
<div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
<div className="relative z-10">
<div className="h-12 w-12 bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center text-[#ADD8E6] mb-6">
<iconify-icon icon="lucide:bar-chart-2" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">AI Patient Analytics</h3>
<p className="text-slate-400 leading-relaxed">
                            Deep insights into patient demographics, retention rates, and treatment outcomes visualized instantly.
                        </p>
</div>

<div className="relative z-10 mt-8">
<div className="flex items-end gap-2 h-24 opacity-80">
<div className="w-1/5 bg-[#008080] rounded-t-lg h-[40%]"></div>
<div className="w-1/5 bg-[#ADD8E6] rounded-t-lg h-[70%]"></div>
<div className="w-1/5 bg-[#008080] rounded-t-lg h-[50%]"></div>
<div className="w-1/5 bg-[#ADD8E6] rounded-t-lg h-[90%]"></div>
<div className="w-1/5 bg-white rounded-t-lg h-[60%]"></div>
</div>
</div>
</div>

<div className="md:col-span-1 row-span-1 group relative overflow-hidden rounded-3xl bg-[#ADD8E6]/20 border border-[#ADD8E6]/30 p-8 hover:bg-[#ADD8E6]/30 transition-all duration-500">
<div className="h-12 w-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary mb-6">
<iconify-icon icon="lucide:message-circle" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Automated SMS</h3>
<p className="text-slate-600 leading-relaxed text-sm">
                        Reduce no-shows by 40% with personalized, automated appointment reminders sent directly to patients.
                    </p>
</div>

<div className="md:col-span-2 row-span-1 lg:col-span-2 group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-500">
<div className="flex flex-col h-full justify-between">
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-xl font-semibold text-slate-900 mb-2">HIPAA-Compliant Security</h3>
<p className="text-slate-500 max-w-md">
                                    Enterprise-grade encryption ensures your patient data is locked down and fully compliant with all regulations.
                                </p>
</div>
<div className="h-12 w-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
<iconify-icon icon="lucide:shield-check" width="24"></iconify-icon>
</div>
</div>
<div className="mt-6 flex gap-4 opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-slate-400 border border-slate-200 px-3 py-1 rounded-full">
<iconify-icon icon="lucide:lock" width="12"></iconify-icon> 256-bit AES
                            </div>
<div className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-slate-400 border border-slate-200 px-3 py-1 rounded-full">
<iconify-icon icon="lucide:file-check" width="12"></iconify-icon> SOC2 Certified
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-100" id="testimonials">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Trusted by Leading Clinics</h2>
<p className="text-slate-500">See why over 500+ medical professionals switched to MediPulse.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-400 hover:text-slate-900 flex items-center justify-center transition-colors"><iconify-icon icon="lucide:chevron-left" width="20"></iconify-icon></button>
<button className="w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-400 hover:text-slate-900 flex items-center justify-center transition-colors"><iconify-icon icon="lucide:chevron-right" width="20"></iconify-icon></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300">
<div className="flex items-center gap-1 mb-6 text-amber-400">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<blockquote className="text-slate-700 font-medium leading-relaxed mb-6">
                        "MediPulse AI has completely transformed our front desk operations. We save hours every week on scheduling alone."
                    </blockquote>
<div className="flex items-center gap-4">
<img alt="Doctor" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div>
<div className="font-semibold text-slate-900 text-sm">Dr. Ana Horvat</div>
<div className="text-xs text-primary font-medium">Cardiologist</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300">
<div className="flex items-center gap-1 mb-6 text-amber-400">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<blockquote className="text-slate-700 font-medium leading-relaxed mb-6">
                        "The analytics feature gave us insights into patient retention we never had before. It's an indispensable tool for growth."
                    </blockquote>
<div className="flex items-center gap-4">
<img alt="Doctor" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div className="">
<div className="font-semibold text-slate-900 text-sm">Dr. James Wilson</div>
<div className="text-xs text-primary font-medium">Clinic Director</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300">
<div className="flex items-center gap-1 mb-6 text-amber-400">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<blockquote className="text-slate-700 font-medium leading-relaxed mb-6">
                        "Finally, software that feels modern and easy to use. The no-show reduction paid for the subscription in the first month."
                    </blockquote>
<div className="flex items-center gap-4">
<img alt="Doctor" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div>
<div className="font-semibold text-slate-900 text-sm">Sarah Chen</div>
<div className="text-xs text-primary font-medium">Practice Manager</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="pricing">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Simple, Transparent Pricing</h2>
<p className="text-slate-500">Choose the plan that fits your practice size.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="bg-white rounded-3xl p-8 border border-slate-200">
<h3 className="text-lg font-medium text-slate-900 mb-2">Starter</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold text-slate-900">$199</span>
<span className="text-slate-500">/mo</span>
</div>
<p className="text-sm text-slate-500 mb-6">Perfect for solo practitioners starting out.</p>
<a className="block w-full py-3 px-4 bg-slate-50 hover:bg-slate-100 text-slate-900 text-center font-medium rounded-xl transition-colors mb-8 border border-slate-200" href="#">Get Started</a>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-primary mt-0.5 shrink-0" icon="lucide:check"></iconify-icon>
                            Smart Calendar Management
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-primary mt-0.5 shrink-0" icon="lucide:check"></iconify-icon>
                            Basic Patient Analytics
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-primary mt-0.5 shrink-0" icon="lucide:check"></iconify-icon>
                            Email Reminders
                        </li>
</ul>
</div>

<div className="bg-white rounded-3xl p-8 border-2 border-primary shadow-2xl relative transform scale-105 z-10">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full">
                        Most Popular
                    </div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Professional</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold text-slate-900">$399</span>
<span className="text-slate-500">/mo</span>
</div>
<p className="text-sm text-slate-500 mb-6">For growing clinics needing efficiency.</p>
<a className="block w-full py-3 px-4 bg-primary hover-bg-primary text-white text-center font-medium rounded-xl transition-colors mb-8 shadow-md" href="#">Get Started</a>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-primary mt-0.5 shrink-0" icon="lucide:check"></iconify-icon>
                            Everything in Starter
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-primary mt-0.5 shrink-0" icon="lucide:check"></iconify-icon>
                            Automated SMS Reminders
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-primary mt-0.5 shrink-0" icon="lucide:check"></iconify-icon>
                            Advanced Analytics Dashboard
                        </li>
</ul>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-200">
<h3 className="text-lg font-medium text-slate-900 mb-2">Enterprise</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold text-slate-900">Custom</span>
</div>
<p className="text-sm text-slate-500 mb-6">For multi-location clinics and hospitals.</p>
<a className="block w-full py-3 px-4 bg-slate-50 hover:bg-slate-100 text-slate-900 text-center font-medium rounded-xl transition-colors mb-8 border border-slate-200" href="#">Contact Sales</a>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-primary mt-0.5 shrink-0" icon="lucide:check"></iconify-icon>
                            Dedicated Account Manager
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-primary mt-0.5 shrink-0" icon="lucide:check"></iconify-icon>
                            Custom API Integrations
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-primary mt-0.5 shrink-0" icon="lucide:check"></iconify-icon>
                            24/7 Priority Support
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-slate-900">

<div className="absolute top-0 right-0 w-96 h-96 bg-[#008080] opacity-20 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ADD8E6] opacity-10 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3"></div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Ready to Transform Your Clinic?
            </h2>
<p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto font-light">
                Join the healthcare revolution with MediPulse AI. Schedule a personalized demo today and see the future in action.
            </p>
<a className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-[#ADD8E6] text-lg font-medium px-8 py-4 rounded-full transition-colors shadow-lg shadow-white/10" href="#">
                Request a Demo
                <iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon>
</a>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
<div className="flex items-center gap-2">
<div className="bg-primary text-white w-8 h-8 rounded-lg flex items-center justify-center">
<iconify-icon icon="lucide:activity" width="18"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">MediPulse AI</span>
</div>
<div className="flex gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-primary transition-colors" href="#">About Us</a>
<a className="hover:text-primary transition-colors" href="#">Contact</a>
<a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-primary transition-colors" href="#">Terms</a>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-50 text-slate-500 hover:bg-primary hover:text-white flex items-center justify-center transition-all" href="#">
<iconify-icon icon="lucide:twitter" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-50 text-slate-500 hover:bg-primary hover:text-white flex items-center justify-center transition-all" href="#">
<iconify-icon icon="lucide:linkedin" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-50 text-slate-500 hover:bg-primary hover:text-white flex items-center justify-center transition-all" href="#">
<iconify-icon icon="lucide:facebook" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="text-center border-t border-slate-100 pt-8">
<p className="text-sm text-slate-400">© 2026 MediPulse AI Inc. All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
