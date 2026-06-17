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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200/60 glass-panel">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-gradient-to-tr from-rose-400 to-rose-300 rounded-lg flex items-center justify-center text-white shadow-sm group-hover:shadow-rose-200 transition-all duration-300">
<span className="font-serif italic font-semibold text-lg">E</span>
</div>
<span className="text-lg font-medium tracking-tight text-slate-900">Emma.</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="hover:text-slate-900 transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-slate-900 transition-colors" href="#privacy">Privacy</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-full text-xs font-medium transition-all shadow-lg shadow-slate-200" href="https://apps.apple.com/us/app/emma-ivf-advisor/id6758023767" target="_blank">
<span>Download App</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
<div className="absolute top-20 left-10 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl mix-blend-multiply"></div>
<div className="absolute top-40 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl mix-blend-multiply"></div>
</div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
</span>
<span className="text-xs font-medium text-slate-600 tracking-wide uppercase">IVF Advisor AI</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Navigate your journey <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 font-serif italic pr-2">with clarity.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Emma is your intelligent companion for IVF. Track medications, organize appointments, and receive empathetic, data-driven insights every step of the way.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="flex items-center gap-3 bg-slate-900 text-white px-6 py-3.5 rounded-xl hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 w-full sm:w-auto justify-center group" href="https://apps.apple.com/us/app/emma-ivf-advisor/id6758023767" target="_blank">
<iconify-icon className="group-hover:text-gray-200" icon="solar:apple-linear" width="24"></iconify-icon>
<div className="text-left">
<div className="text-[10px] uppercase font-medium tracking-wider opacity-80 leading-none mb-1">Download on the</div>
<div className="text-sm font-semibold leading-none tracking-wide">App Store</div>
</div>
</a>
</div>
</div>
</section>

<section className="pb-24 px-4 overflow-hidden">
<div className="max-w-5xl mx-auto relative">

<div className="bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/50 p-6 md:p-8 relative z-10 overflow-hidden">

<div className="flex items-center justify-between mb-8 border-b border-slate-50 pb-6">
<div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Today's Protocol</h3>
<p className="text-xs text-slate-400 mt-1">Cycle Day 12 • Stimulation Phase</p>
</div>
<div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="md:col-span-2 space-y-4">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Medications</span>
<span className="text-xs text-rose-500 bg-rose-50 px-2 py-0.5 rounded-full font-medium">1 Remaining</span>
</div>

<div className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-transparent hover:border-slate-200 transition-all">
<div className="h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-sm font-medium text-slate-900 decoration-slate-300">Menopur</h4>
<p className="text-xs text-slate-500">75 IU • Subcutaneous injection</p>
</div>
<span className="text-xs font-medium text-slate-400">8:00 AM</span>
</div>

<div className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
<div className="h-6 w-6 rounded-full border-2 border-slate-200 group-hover:border-rose-400 flex items-center justify-center shrink-0 transition-colors">
</div>
<div className="flex-1">
<h4 className="text-sm font-medium text-slate-900">Gonal-F</h4>
<p className="text-xs text-slate-500">150 IU • Subcutaneous injection</p>
</div>
<span className="text-xs font-medium text-rose-500 bg-rose-50 px-2 py-1 rounded-md">8:00 PM</span>
</div>
</div>

<div className="space-y-4">
<div className="mb-2">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Daily Insight</span>
</div>
<div className="bg-gradient-to-b from-indigo-50 to-white border border-indigo-100 p-5 rounded-2xl h-full flex flex-col">
<div className="h-8 w-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mb-3">
<iconify-icon icon="solar:stars-linear" width="18"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-slate-900 mb-2">Estradiol Levels Rising</h4>
<p className="text-xs text-slate-500 leading-relaxed mb-4 flex-1">
                                Based on yesterday's bloodwork, your E2 levels are trending perfectly for retrieval. Hydration is key today.
                            </p>
<div className="w-full h-1 bg-indigo-100 rounded-full overflow-hidden">
<div className="w-3/4 h-full bg-indigo-500 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -right-12 -bottom-12 w-64 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:block rotate-3 z-20">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-rose-50 rounded-lg text-rose-500">
<iconify-icon icon="solar:heart-pulse-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold text-slate-900">Appointment</div>
<div className="text-[10px] text-slate-400">Ultrasound &amp; Bloodwork</div>
</div>
</div>
<div className="flex justify-between items-center mt-2">
<div className="text-xs font-medium text-slate-500">Tomorrow</div>
<div className="text-xs font-bold text-slate-900">7:30 AM</div>
</div>
</div>
<div className="absolute -left-8 top-1/2 w-56 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 hidden md:block -rotate-6 z-0">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-medium">JD</div>
<div className="text-xs text-slate-500 italic">"Emma made the 2-week wait feel so much shorter."</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">Science meets empathy.</h2>
<p className="text-slate-500 font-light text-lg">Designed to reduce the cognitive load of fertility treatments, giving you back control and peace of mind.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 transition-all duration-300 hover:shadow-xl hover:shadow-slate-100/50">
<div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-rose-500 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
<iconify-icon icon="solar:calendar-mark-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Smart Scheduling</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Input your protocol once. Emma automatically generates a precise calendar for injections, pills, and appointments, adjusting in real-time.
                    </p>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 transition-all duration-300 hover:shadow-xl hover:shadow-slate-100/50">
<div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-indigo-500 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Cycle Analytics</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Visualize your hormone levels and follicle growth. Understand the data behind the decisions your clinic makes.
                    </p>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 transition-all duration-300 hover:shadow-xl hover:shadow-slate-100/50">
<div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-teal-500 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Private &amp; Secure</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Your fertility data is sensitive. We use bank-level encryption and never sell your personal health information to third parties.
                    </p>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 transition-all duration-300 hover:shadow-xl hover:shadow-slate-100/50">
<div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">AI Companion</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Ask Emma questions about symptoms, medication side effects, or just get a word of encouragement when you need it most.
                    </p>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 transition-all duration-300 hover:shadow-xl hover:shadow-slate-100/50 md:col-span-2">
<div className="flex flex-col md:flex-row gap-6 h-full items-center">
<div className="flex-1">
<div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-purple-500 mb-6 shadow-sm">
<iconify-icon icon="solar:library-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Curated Knowledge Base</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                                Access a library of doctor-verified articles explaining every acronym and procedure. From "What is ICSI?" to "Understanding PGTA," we decode the jargon.
                            </p>
</div>
<div className="w-full md:w-1/2 bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
<div className="space-y-3">
<div className="h-2 w-1/3 bg-slate-100 rounded-full"></div>
<div className="h-2 w-full bg-slate-50 rounded-full"></div>
<div className="h-2 w-5/6 bg-slate-50 rounded-full"></div>
<div className="h-2 w-4/6 bg-slate-50 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white overflow-hidden relative">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 mb-6">
<iconify-icon className="text-rose-400" icon="solar:bell-bing-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-300">Intelligent Reminders</span>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Never miss a critical dose.</h2>
<p className="text-slate-400 text-lg font-light leading-relaxed mb-8">
                        Timing is everything in IVF. Emma sends notifications that account for your timezone and specific protocol, ensuring trigger shots and daily injections happen exactly when they need to.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-300">Time-zone adjusted alerts</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-300">Inventory tracking (know when to refill)</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-300">Shareable schedules for partners</span>
</li>
</ul>
</div>
<div className="relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-rose-500/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-3xl p-8 shadow-2xl">
<div className="flex items-start gap-4 mb-6">
<div className="w-10 h-10 rounded-xl bg-rose-500 flex items-center justify-center text-white shrink-0">
<span className="font-serif italic font-bold">E</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-baseline">
<h4 className="font-semibold text-white">Time for Trigger Shot</h4>
<span className="text-xs text-slate-400">Now</span>
</div>
<p className="text-sm text-slate-300 mt-1">Prepare Ovidrel 250mcg. This is your most important injection!</p>
</div>
</div>
<div className="w-full bg-slate-700/50 rounded-xl p-1 mb-4">
<div className="flex gap-2">
<button className="flex-1 bg-white text-slate-900 py-2 rounded-lg text-xs font-semibold shadow-lg">Mark Done</button>
<button className="flex-1 text-slate-300 py-2 rounded-lg text-xs font-medium hover:bg-slate-700 transition">Snooze</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-6xl mx-auto px-6 text-center">
<h2 className="text-2xl font-medium tracking-tight text-slate-900 mb-12">Trusted by patients at top fertility clinics</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center justify-center font-serif italic text-xl font-bold text-slate-800">C N Y</div>
<div className="flex items-center justify-center font-sans tracking-widest text-sm font-bold text-slate-800 uppercase">Shady Grove</div>
<div className="flex items-center justify-center font-sans tracking-tight text-lg font-bold text-slate-800">Kindbody</div>
<div className="flex items-center justify-center font-serif text-xl font-bold text-slate-800">CCRM</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto bg-slate-50 border border-slate-200 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-rose-100 to-transparent rounded-full opacity-50"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">Start your journey today.</h2>
<p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto font-light">
                    Join thousands of women who are finding clarity and control in their fertility journey with Emma.
                </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<a className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl hover:bg-slate-800 transition-all shadow-xl hover:shadow-slate-300 hover:-translate-y-1 w-full sm:w-auto justify-center" href="https://apps.apple.com/us/app/emma-ivf-advisor/id6758023767" target="_blank">
<iconify-icon icon="solar:apple-linear" width="24"></iconify-icon>
<span className="font-medium">Download for iOS</span>
</a>
</div>
<p className="mt-6 text-xs text-slate-400">Requires iOS 15.0 or later. Free to download.</p>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-rose-400 rounded-md flex items-center justify-center text-white">
<span className="font-serif italic font-bold text-xs">E</span>
</div>
<span className="font-medium tracking-tight text-slate-900">Emma.</span>
</div>
<p className="text-sm text-slate-500 max-w-xs leading-relaxed">
                        Empowering fertility patients with data, organization, and empathy.
                    </p>
</div>
<div className="flex gap-16">
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-rose-500 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-rose-500 transition-colors" href="#">Security</a></li>
<li><a className="hover:text-rose-500 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-rose-500 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-rose-500 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-rose-500 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Emma IVF Advisor. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-600" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
