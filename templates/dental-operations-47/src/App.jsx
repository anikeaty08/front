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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        // Animation Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        document.querySelectorAll('[class*="animate-"]').forEach(el => {
            el.style.animationPlayState = 'paused';
            observer.observe(el);
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ty3N7ZPaIU7KlWixQFIc"></div>

</div></div>

<div className="bg-slate-900 text-white text-[11px] font-medium py-2.5 text-center tracking-wide border-b border-white/10 relative z-50">
<span className="opacity-80">New: Ongoing Dental Operations Signal Project — Aggregated insights, updated as the dataset grows.</span>
</div>

<nav className="sticky top-0 w-full z-40 glass-effect border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-14">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-white">
<iconify-icon icon="lucide:activity" strokeWidth="2" width="14"></iconify-icon>
</div>
<span className="font-semibold text-xs tracking-tight text-slate-900 uppercase">Dental Ops Signal</span>
</div>
<div className="hidden md:flex items-center gap-6 text-xs font-medium">
<a className="text-slate-500 hover:text-slate-900 transition-colors" href="#findings">Findings</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors" href="#pdf">The PDF</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors" href="#faq">FAQ</a>
</div>
</div>
</div>
</nav>
<main className="">

<section className="sm:px-6 lg:px-8 lg:pt-24 lg:pb-20 overflow-hidden max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-12 pl-4 relative">

<div className="absolute inset-0 -z-10 pointer-events-none select-none">

<img alt="Modern Dental Clinic Background" className="w-full h-full object-cover opacity-[0.04] scale-105" loading="eager" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-slate-50"></div>
</div>
<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-20 relative gap-x-12 gap-y-12">

<div className="lg:pt-2 animate-fade-in opacity-0 max-w-2xl" style={{animationPlayState: 'running'}}>

<div className="inline-flex items-center gap-2 bg-white border border-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wide mb-8 shadow-sm relative overflow-hidden group">
<div className="relative flex h-2 w-2">
<span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" style={{animationPlayState: 'running'}}></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</div>
                        Research Phase Active
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:animate-scan" style={{animationPlayState: 'paused'}}></div>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-slate-900 mb-6 relative">
                        The Dental Operations <br/>
<span className="text-slate-400 font-normal">Signal Project</span>

<div className="hidden lg:block absolute -right-24 top-2 animate-float opacity-80" style={{animationPlayState: 'running'}}>
<div className="bg-white/80 backdrop-blur border border-slate-200 p-3 rounded-xl shadow-lg w-16 h-16 flex items-center justify-center transform rotate-3">
<iconify-icon className="text-indigo-500" icon="lucide:activity" width="32"></iconify-icon>
</div>
<div className="bg-white/80 backdrop-blur border border-slate-200 p-2 rounded-lg shadow-md w-10 h-10 flex items-center justify-center absolute -bottom-4 -right-4 transform -rotate-6 animation-delay-400">
<iconify-icon className="text-slate-400" icon="lucide:bar-chart" width="18"></iconify-icon>
</div>
</div>
</h1>
<p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
                        A research-led effort to map what is really breaking inside modern dental practices. We are a small research team working with professionals across multiple countries to identify common bottlenecks.
                    </p>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-3">
<div className="mt-1 text-indigo-600"><iconify-icon icon="lucide:check-circle" width="18"></iconify-icon></div>
<span className="text-sm text-slate-700">Access to the latest aggregated findings and trend snapshots</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 text-indigo-600"><iconify-icon icon="lucide:check-circle" width="18"></iconify-icon></div>
<span className="text-sm text-slate-700">A practical PDF: The Clinic Control Pack (daily management mechanism)</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 text-indigo-600"><iconify-icon icon="lucide:check-circle" width="18"></iconify-icon></div>
<span className="text-sm text-slate-700">Future releases as the dataset grows (unsubscribe anytime)</span>
</div>
</div>
</div>

<div className="w-full max-w-md opacity-0 animate-slide-right animate-delay-200 relative" style={{animationPlayState: 'running'}}>

<div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-indigo-500/20 to-transparent opacity-0 lg:opacity-100 blur-md -z-10"></div>
<div className="glass-effect p-6 lg:p-8 rounded-2xl shadow-xl shadow-indigo-100/50 relative overflow-hidden ring-1 ring-slate-900/5">

<div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent z-10 animate-scan pointer-events-none" style={{animationPlayState: 'running'}}></div>

<div className="hidden absolute inset-0 bg-white z-20 flex flex-col items-center justify-center text-center p-8 animate-fade-in" id="hero-success" style={{animationPlayState: 'paused'}}>
<div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4">
<iconify-icon icon="lucide:check" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Access Granted</h3>
<p className="text-sm text-slate-500">Please check your inbox (and spam folder) for the findings and PDF.</p>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-1">Get access to the findings + PDF</h3>
<p className="text-xs text-slate-500 mb-6">Enter your email to unlock access. Aggregated insights only.</p>
<form className="space-y-4" id="hero-form" onsubmit="event.preventDefault(); document.getElementById('hero-success').classList.remove('hidden');">
<div className="">
<label className="sr-only" htmlFor="email">Work Email</label>
<input className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400" id="email" placeholder="name@clinic.com" required="" type="email"/>
</div>
<div className="">
<label className="sr-only" htmlFor="role">Role</label>
<div className="relative">
<select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all appearance-none text-slate-600 cursor-pointer" id="role">
<option disabled="" selected="" value="">Select your role...</option>
<option value="Owner">Practice Owner</option>
<option value="Manager">Practice Manager</option>
<option value="Associate">Associate Dentist</option>
<option value="Group">Group/DSO</option>
<option value="Other">Other</option>
</select>
<div className="absolute right-3 top-3.5 pointer-events-none text-slate-400">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
</div>
<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center mt-0.5">
<input className="custom-checkbox peer sr-only" required="" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded bg-white peer-checked:bg-slate-900 peer-checked:border-slate-900 transition-colors flex items-center justify-center">
<iconify-icon className="hidden text-white w-2.5 h-2.5" icon="lucide:check" strokeWidth="3"></iconify-icon>
</div>
</div>
<span className="text-[11px] text-slate-500 leading-snug">
                                    Send me the findings snapshot and the Clinic Control Pack. I can unsubscribe anytime.
                                </span>
</label>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm py-3 rounded-lg shadow-lg shadow-slate-200 transition-all flex items-center justify-center gap-2 group" type="submit">
                                Unlock access
                                <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<p className="text-[10px] text-center text-slate-400 pt-2">
                                Privacy-first. No sharing or selling of your data.
                            </p>
</form>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-200 bg-white/50 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[9px] text-slate-600 font-bold">UK</div>
<div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-[9px] text-slate-600 font-bold">US</div>
<div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white flex items-center justify-center text-[9px] text-white font-bold">EU</div>
</div>
<div className="">
<p className="text-sm font-medium text-slate-900">Based on aggregated responses from 60+ dental professionals</p>
<p className="text-xs text-slate-500 mt-1">We do not publish identifiable practice information. We share patterns, not personal data.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24">

<div className="grid md:grid-cols-12 gap-12 items-start">
<div className="md:col-span-4">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Who we are</h2>
<div className="h-1 w-12 bg-indigo-500 mt-4 rounded-full"></div>
</div>
<div className="md:col-span-8 space-y-6">
<p className="text-base text-slate-600 leading-relaxed">
                        We are an independent research and operations team working alongside practicing clinicians to understand what actually limits performance in dental clinics. Our focus is not theory. It is practical operating reality: the day-to-day bottlenecks that create chaos, reduce output, and increase team stress.
                    </p>
<p className="text-base text-slate-600 leading-relaxed">
                        We are building a clear picture of the recurring patterns and pressure points, then sharing the results back to the community in a usable format.
                    </p>
<div className="grid sm:grid-cols-3 gap-4 pt-4">
<div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-indigo-600 mb-2" icon="lucide:microscope" width="20"></iconify-icon>
<h4 className="text-sm font-semibold text-slate-900">Research-led</h4>
<p className="text-xs text-slate-500 mt-1">Structured signal collection across clinics.</p>
</div>
<div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-indigo-600 mb-2" icon="lucide:wrench" width="20"></iconify-icon>
<h4 className="text-sm font-semibold text-slate-900">Operator-led</h4>
<p className="text-xs text-slate-500 mt-1">Insight into practical mechanisms.</p>
</div>
<div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-indigo-600 mb-2" icon="lucide:shield-check" width="20"></iconify-icon>
<h4 className="text-sm font-semibold text-slate-900">Privacy-first</h4>
<p className="text-xs text-slate-500 mt-1">Aggregated learnings only.</p>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-12 gap-12 items-start">
<div className="md:col-span-4">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">What problem we are solving</h2>
<div className="h-1 w-12 bg-rose-500 mt-4 rounded-full"></div>
</div>
<div className="md:col-span-8">
<p className="text-lg font-medium text-slate-900 mb-6">
                        Most clinics do not fail because of clinical skill. They struggle because operational control breaks down.
                    </p>
<div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 relative overflow-hidden">

<iconify-icon className="absolute -right-4 -top-4 text-slate-200 opacity-50" icon="lucide:layout-grid" width="100"></iconify-icon>
<ul className="space-y-4 relative z-10">
<li className="flex gap-3">
<iconify-icon className="text-rose-500 shrink-0 mt-0.5" icon="lucide:x-circle" width="18"></iconify-icon>
<span className="text-sm text-slate-600">The diary looks full, but the day underperforms.</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-rose-500 shrink-0 mt-0.5" icon="lucide:x-circle" width="18"></iconify-icon>
<span className="text-sm text-slate-600">Execution varies by person and by day.</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-rose-500 shrink-0 mt-0.5" icon="lucide:x-circle" width="18"></iconify-icon>
<span className="text-sm text-slate-600">Small delays cascade into stress, cancellations, and lost momentum.</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-rose-500 shrink-0 mt-0.5" icon="lucide:x-circle" width="18"></iconify-icon>
<span className="text-sm text-slate-600">Follow-ups are inconsistent, so value leaks after the consult.</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-rose-500 shrink-0 mt-0.5" icon="lucide:x-circle" width="18"></iconify-icon>
<span className="text-sm text-slate-600">Leaders lack a simple system for visibility and accountability.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 py-24 text-white" id="findings">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12">
<h2 className="text-3xl font-semibold tracking-tight">What you will get access to</h2>
<p className="text-slate-400 mt-4 max-w-2xl">When you sign up, you will receive two things: current data snapshots and a practical tool.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors group relative overflow-hidden">
<div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
<iconify-icon icon="lucide:bar-chart-2" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2 relative z-10">A) Aggregated Findings Access</h3>
<p className="text-sm text-slate-400 mb-6 leading-relaxed relative z-10">
                            A snapshot of the current results, including the most common bottlenecks and directional patterns as the dataset grows.
                        </p>
<div className="space-y-4 border-t border-white/10 pt-6 relative z-10">
<div className="">
<span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 block mb-2">What this is</span>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/20">Aggregated trends</span>
<span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/20">Repeatable themes</span>
<span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/20">What to fix first</span>
</div>
</div>
<div className="">
<span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 block mb-2">What this is NOT</span>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded bg-rose-500/10 text-rose-400 text-xs border border-rose-500/20">Not conclusive research</span>
<span className="px-2 py-1 rounded bg-rose-500/10 text-rose-400 text-xs border border-rose-500/20">No identifiers</span>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-indigo-900 to-slate-900 border border-white/10 rounded-3xl p-8 relative overflow-hidden group" id="pdf">
<div className="absolute top-0 right-0 p-32 bg-indigo-500/20 blur-3xl rounded-full pointer-events-none"></div>
<iconify-icon className="absolute -bottom-8 -right-8 text-white/5 rotate-12" icon="lucide:file-text" width="200"></iconify-icon>
<div className="relative z-10">
<div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:file-text" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2">B) The Clinic Control Pack (PDF)</h3>
<p className="text-sm text-slate-300 mb-8 leading-relaxed">
                                A simple daily management control mechanism you can install without adding more complexity.
                            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-400 mt-0.5 shrink-0" icon="lucide:check" width="16"></iconify-icon>
<span className="text-sm text-slate-300">One-page daily control sheet template</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-400 mt-0.5 shrink-0" icon="lucide:check" width="16"></iconify-icon>
<span className="text-sm text-slate-300">10-minute huddle protocol</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-400 mt-0.5 shrink-0" icon="lucide:check" width="16"></iconify-icon>
<span className="text-sm text-slate-300">Minimum weekly metrics to spot drift</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-400 mt-0.5 shrink-0" icon="lucide:check" width="16"></iconify-icon>
<span className="text-sm text-slate-300">Common failure modes &amp; prevention</span>
</li>
</ul>
<div className="border-t border-white/10 pt-4 mt-auto">
<p className="text-[10px] text-slate-400 italic">
                                    This pack gives you one high-leverage mechanism. It is not a full operating system.
                                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-semibold text-slate-900 mb-12">How it works</h2>
<div className="grid md:grid-cols-4 gap-8">
<div className="relative">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900 font-semibold mb-4 border border-slate-200">1</div>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Enter your email</h4>
<p className="text-xs text-slate-500">Sign up via the secure form to request access.</p>
<div className="hidden md:block absolute top-5 left-14 right-0 h-px bg-slate-200"></div>
</div>
<div className="relative">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900 font-semibold mb-4 border border-slate-200">2</div>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Immediate Access</h4>
<p className="text-xs text-slate-500">Get instant access to the findings snapshot.</p>
<div className="hidden md:block absolute top-5 left-14 right-0 h-px bg-slate-200"></div>
</div>
<div className="relative">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900 font-semibold mb-4 border border-slate-200">3</div>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Receive the PDF</h4>
<p className="text-xs text-slate-500">The Clinic Control Pack arrives in your inbox.</p>
<div className="hidden md:block absolute top-5 left-14 right-0 h-px bg-slate-200"></div>
</div>
<div className="relative">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900 font-semibold mb-4 border border-slate-200">4</div>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Periodic Updates</h4>
<p className="text-xs text-slate-500">Receive new insights as the dataset grows (optional).</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-2xl mx-auto px-4 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Get access</h2>
<p className="text-slate-500 mb-10">
                    If you run a clinic, manage a clinic, or are responsible for operations across sites, you will recognise these bottlenecks. We are publishing what we find.
                </p>
<div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 text-left relative overflow-hidden">

<div className="hidden absolute inset-0 bg-white z-20 flex flex-col items-center justify-center text-center p-8 animate-fade-in" id="bottom-success" style={{animationPlayState: 'paused'}}>
<div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-3">
<iconify-icon icon="lucide:check" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900">Access Granted</h3>
<p className="text-xs text-slate-500 mt-1">Check your inbox.</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); document.getElementById('bottom-success').classList.remove('hidden');">
<div className="">
<label className="block text-xs font-medium text-slate-700 mb-1.5">Work Email</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500" required="" type="email"/>
</div>
<div className="">
<label className="block text-xs font-medium text-slate-700 mb-1.5">Role (Optional)</label>
<div className="relative">
<select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 appearance-none text-slate-600">
<option disabled="" selected="" value="">Select...</option>
<option value="Owner">Practice Owner</option>
<option value="Manager">Practice Manager</option>
<option value="Associate">Associate Dentist</option>
<option value="Group">Group/DSO</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-slate-400 pointer-events-none" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
<label className="flex items-start gap-3 cursor-pointer py-2">
<div className="relative flex items-center mt-0.5">
<input className="custom-checkbox peer sr-only" required="" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded bg-white peer-checked:bg-slate-900 peer-checked:border-slate-900 transition-colors flex items-center justify-center">
<iconify-icon className="hidden text-white w-2.5 h-2.5" icon="lucide:check" strokeWidth="3"></iconify-icon>
</div>
</div>
<span className="text-[11px] text-slate-500 leading-snug">
                                Send me the findings snapshot and the Clinic Control Pack. Unsubscribe anytime.
                            </span>
</label>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm py-3 rounded-lg shadow-md transition-all" type="submit">
                            Unlock access
                        </button>
<p className="text-[10px] text-center text-slate-400">
                            Privacy-first. Aggregated insights only. No sharing or selling of your data.
                        </p>
</form>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="faq">
<h2 className="text-xl font-semibold text-slate-900 mb-8">Frequently Asked Questions</h2>
<div className="space-y-8">
<div className="">
<h4 className="text-sm font-semibold text-slate-900 mb-2">How long does it take to get access?</h4>
<p className="text-sm text-slate-500 leading-relaxed">Immediately. You will see the access confirmation and the PDF is sent to your inbox.</p>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900 mb-2">Do you share my information or my answers?</h4>
<p className="text-sm text-slate-500 leading-relaxed">No. We do not publish identifiable information. We only share aggregated themes and patterns.</p>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900 mb-2">Is this UK or Portugal-only?</h4>
<p className="text-sm text-slate-500 leading-relaxed">The lens is not UK-first because of the operational pressure in the whole market, but the insights are relevant across private dentistry internationally.</p>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900 mb-2">Is this statistically significant research?</h4>
<p className="text-sm text-slate-500 leading-relaxed">No. It is directional signal gathering. We publish patterns conservatively and update as sample size grows.</p>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900 mb-2">What happens after I sign up?</h4>
<p className="text-sm text-slate-500 leading-relaxed">You receive access to the current findings snapshot and the PDF. We may send occasional updates when the dataset grows or when we publish a new release. Unsubscribe anytime.</p>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-200 bg-white py-12">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="flex justify-center gap-6 mb-6 text-xs font-medium text-slate-500">
<a className="hover:text-slate-900" href="#">Privacy Policy</a>
<a className="hover:text-slate-900" href="#">Contact</a>
</div>
<p className="text-[10px] text-slate-400 max-w-lg mx-auto leading-relaxed">
                We collect email addresses to deliver access and updates. We never sell personal data. You can unsubscribe or request deletion at any time.
            </p>
</div>
</footer>


    </>
  );
}
