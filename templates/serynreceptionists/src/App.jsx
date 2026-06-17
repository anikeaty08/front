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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-white font-semibold tracking-tight text-sm flex items-center gap-2" href="#">
<span className="w-2 h-2 rounded-full bg-white"></span>
                    Seryn
                </a>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-500">
<a className="hover:text-white transition-colors" href="#features">Product</a>
<a className="hover:text-white transition-colors" href="#demo">Live Demo</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Log in</a>
<a className="bg-white text-black hover:bg-neutral-200 transition-colors text-xs font-medium px-4 py-1.5 rounded-md tracking-tight" href="#">
                    Start Free Trial
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden">
<div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col items-start gap-6">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-[11px] font-medium text-neutral-400">
<span className="flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
                    Live 24/7 on 1,000+ phone lines
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tighter leading-[1.05]">
                    The AI <br/>
                    Receptionist.
                </h1>
<p className="text-lg text-neutral-400 max-w-md font-normal leading-relaxed text-balance">
                    Never miss a call again. Seryn answers the phone, schedules appointments, and integrates with your calendar. Just like a human, but scalable.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-3 mt-2 w-full sm:w-auto">
<button className="w-full sm:w-auto h-10 px-6 rounded-lg bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2">
                        Get your number
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
<button className="w-full sm:w-auto h-10 px-6 rounded-lg border border-neutral-800 bg-transparent text-neutral-300 font-medium text-sm hover:bg-neutral-900 transition-all flex items-center justify-center gap-2">
                        Listen to calls
                    </button>
</div>
<div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/5 w-full">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-black bg-neutral-800"></div>
<div className="w-8 h-8 rounded-full border-2 border-black bg-neutral-700"></div>
<div className="w-8 h-8 rounded-full border-2 border-black bg-neutral-600"></div>
</div>
<p className="text-xs text-neutral-500">Trusted by modern dental, legal, and real estate practices.</p>
</div>
</div>

<div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3]">

<div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-neutral-900/20 to-transparent blur-3xl rounded-full"></div>

<div className="absolute inset-0 glass-card rounded-xl overflow-hidden flex flex-col">

<div className="h-10 border-b border-white/5 bg-black/20 flex items-center px-4 justify-between">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
</div>
<div className="text-[10px] uppercase tracking-wider font-semibold text-neutral-600">Active Call #8291</div>
</div>

<div className="flex-1 flex flex-col p-6 relative">

<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
<span className="iconify text-neutral-300" data-icon="lucide:phone" data-width="18"></span>
</div>
<div>
<div className="text-sm text-white font-medium">Unknown Caller</div>
<div className="text-xs text-neutral-500 mono">+1 (415) 555-0192</div>
</div>
</div>
<div className="flex items-center gap-2 px-2 py-1 bg-red-500/10 border border-red-500/20 rounded-md">
<div className="w-1.5 h-1.5 rounded-full bg-red-500 live-pulse"></div>
<span className="text-[10px] font-medium text-red-400 uppercase tracking-wide">Live Recording</span>
</div>
</div>

<div className="space-y-4 flex-1 overflow-hidden">
<div className="flex gap-3">
<div className="w-6 h-6 rounded bg-neutral-800 flex-shrink-0 flex items-center justify-center text-[10px] text-neutral-400">AI</div>
<p className="text-sm text-neutral-300 leading-relaxed">Thanks for calling Dr. Smith's office. How can I help you schedule today?</p>
</div>
<div className="flex gap-3">
<div className="w-6 h-6 rounded bg-blue-900/30 flex-shrink-0 flex items-center justify-center text-[10px] text-blue-400">U</div>
<p className="text-sm text-white leading-relaxed">Hi, I need to book a cleaning for next Tuesday, preferably in the morning.</p>
</div>
<div className="flex gap-3 opacity-50">
<div className="w-6 h-6 rounded bg-neutral-800 flex-shrink-0 flex items-center justify-center text-[10px] text-neutral-400">AI</div>
<p className="text-sm text-neutral-300 leading-relaxed typing-cursor">Checking availability. I have a slot at 9:30 AM or 11:00 AM on Tuesday the 14th.</p>
</div>
</div>

<div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
<div className="flex gap-2">
<span className="px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-400 font-medium">Intent: Booking</span>
<span className="px-2 py-1 rounded bg-neutral-800 border border-neutral-700 text-[10px] text-neutral-400 font-medium">Sentiment: Neutral</span>
</div>
<button className="text-xs text-white bg-neutral-800 hover:bg-neutral-700 px-3 py-1 rounded border border-neutral-700 transition-colors">View Contact</button>
</div>
</div>
</div>

<div className="absolute -right-4 bottom-8 w-64 glass-card p-4 rounded-lg animate-in slide-in-from-bottom-4 duration-700 fade-in fill-mode-forwards" style={{animationDelay: '1s'}}>
<div className="flex items-start gap-3">
<div className="p-2 bg-green-500/10 rounded-md border border-green-500/20">
<span className="iconify text-green-400" data-icon="lucide:calendar-check-2" data-width="16"></span>
</div>
<div>
<p className="text-xs font-medium text-white">Appointment Booked</p>
<p className="text-[10px] text-neutral-500 mt-1">Synced to Google Calendar</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-black/40 backdrop-blur-sm">
<div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<div className="text-2xl font-semibold text-white tracking-tight">0s</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide mt-1 font-medium">Hold Time</div>
</div>
<div>
<div className="text-2xl font-semibold text-white tracking-tight">$2k<span className="text-neutral-600">+</span></div>
<div className="text-xs text-neutral-500 uppercase tracking-wide mt-1 font-medium">Monthly Savings</div>
</div>
<div>
<div className="text-2xl font-semibold text-white tracking-tight">24/7</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide mt-1 font-medium">Availability</div>
</div>
<div>
<div className="text-2xl font-semibold text-white tracking-tight">100<span className="text-neutral-600">%</span></div>
<div className="text-xs text-neutral-500 uppercase tracking-wide mt-1 font-medium">Call Answer Rate</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="features">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">More than just answering.</h2>
<p className="text-neutral-400 max-w-xl">Seryn is a full-stack receptionist. It manages your calendar, answers complex questions based on your knowledge base, and filters spam.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl flex flex-col h-full group">
<div className="mb-6 w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white group-hover:border-neutral-600 transition-colors">
<span className="iconify" data-icon="lucide:calendar-clock" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Real-time Booking</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-8 flex-1">
                        Connects directly to Cal.com, Acuity, or Google Calendar. It negotiates times without double-booking.
                    </p>

<div className="bg-neutral-950 border border-white/5 rounded-lg p-3 space-y-2">
<div className="flex items-center gap-2 text-xs">
<div className="w-1 h-8 bg-blue-500 rounded-full"></div>
<div className="flex-1">
<div className="bg-neutral-900 rounded h-8 w-full border border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-blue-500/10"></div>
<div className="p-2 text-[10px] text-blue-200">New Appointment</div>
</div>
</div>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col h-full group">
<div className="mb-6 w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white group-hover:border-neutral-600 transition-colors">
<span className="iconify" data-icon="lucide:book-open" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Knowledge Injection</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-8 flex-1">
                        Upload your pricing PDFs, website URL, or policy docs. Seryn learns your business in seconds.
                    </p>

<div className="bg-neutral-950 border border-white/5 rounded-lg p-3 flex items-center gap-3">
<span className="iconify text-red-400" data-icon="lucide:file-text" data-width="16"></span>
<div className="flex-1">
<div className="h-1.5 w-20 bg-neutral-800 rounded-full mb-1"></div>
<div className="h-1.5 w-12 bg-neutral-800 rounded-full"></div>
</div>
<span className="iconify text-green-500" data-icon="lucide:check" data-width="14"></span>
</div>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col h-full group">
<div className="mb-6 w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white group-hover:border-neutral-600 transition-colors">
<span className="iconify" data-icon="lucide:phone-forwarded" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Smart Escalation</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-8 flex-1">
                        Define VIP rules. If a specific client calls or an urgent keyword is detected, call is forwarded to you instantly.
                    </p>

<div className="flex items-center justify-between bg-neutral-950 border border-white/5 rounded-lg p-3">
<span className="text-xs text-neutral-300">Forward Urgencies</span>
<div className="relative inline-block w-8 h-4 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 border-neutral-800 appearance-none cursor-pointer checked:right-0 checked:border-green-500 transition-all duration-300" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-neutral-800 cursor-pointer" htmlFor="toggle"></label>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-neutral-900/20">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-10 text-center">Why switch?</h2>
<div className="overflow-hidden rounded-xl border border-white/5 bg-[#0A0A0A]">
<table className="w-full text-left text-sm">
<thead>
<tr className="border-b border-white/5 bg-white/[0.02]">
<th className="py-4 px-6 text-neutral-500 font-medium w-1/3">Features</th>
<th className="py-4 px-6 text-neutral-500 font-medium w-1/3">Traditional Service</th>
<th className="py-4 px-6 text-white font-medium w-1/3">Seryn AI</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr>
<td className="py-4 px-6 text-neutral-300">Cost per month</td>
<td className="py-4 px-6 text-neutral-500">$2,500+</td>
<td className="py-4 px-6 text-white font-medium text-lg">$199</td>
</tr>
<tr>
<td className="py-4 px-6 text-neutral-300">Capacity</td>
<td className="py-4 px-6 text-neutral-500">1 call at a time</td>
<td className="py-4 px-6 text-white font-medium">Unlimited concurrent</td>
</tr>
<tr>
<td className="py-4 px-6 text-neutral-300">Response Time</td>
<td className="py-4 px-6 text-neutral-500">Minutes (on hold)</td>
<td className="py-4 px-6 text-white font-medium">Instant</td>
</tr>
<tr>
<td className="py-4 px-6 text-neutral-300">Availability</td>
<td className="py-4 px-6 text-neutral-500">9am - 5pm</td>
<td className="py-4 px-6 text-white font-medium">24/7/365</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-32 px-6 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#030303] to-[#030303]"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-6">Stop missing business.</h2>
<p className="text-neutral-400 text-lg mb-10">Deploy your AI receptionist in less than 15 minutes. No coding required.</p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<button className="h-12 px-8 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors">
                    Start 7-Day Free Trial
                </button>
<button className="h-12 px-8 rounded-full border border-neutral-800 text-white font-medium hover:bg-white/5 transition-colors">
                    View Pricing
                </button>
</div>
<p className="text-xs text-neutral-600 mt-6">No credit card required for demo.</p>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020202] py-12 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-neutral-800"></span>
<span className="text-sm text-neutral-500 font-medium">Seryn Systems Inc.</span>
</div>
<div className="flex gap-8 text-sm text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Status</a>
</div>
</div>
</footer>

    </>
  );
}
