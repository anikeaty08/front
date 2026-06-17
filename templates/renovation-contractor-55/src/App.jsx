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



        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-up').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
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
      

<nav className="fixed top-0 w-full z-50 glass-card border-b border-white/5 bg-black/60 supports-[backdrop-filter]:bg-black/40">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group select-none hover:opacity-90 transition-opacity" href="#">
<div className="bg-sky-600 w-8 h-8 flex items-center justify-center rounded-lg text-white">
<iconify-icon icon="solar:hammer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white font-semibold text-lg tracking-tight">HYTE Automation Group</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#how-it-works">How It Works</a>
<a className="hover:text-white transition-colors" href="#benefits">Benefits</a>
<a className="hover:text-white transition-colors" href="#reviews">Reviews</a>
</div>
<div className="flex items-center gap-4">
<a className="px-5 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 transition-all rounded-full shadow-[0_0_15px_-5px_rgba(2,132,199,0.5)] border border-sky-500/50" href="#book-call">
                    Book Discovery Call
                </a>
</div>
</div>
</nav>

<section className="relative min-h-[90vh] flex items-center pt-24 pb-12 bg-grid overflow-hidden">
<div className="glow-spot top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
<div className="glow-spot bottom-0 right-0 translate-x-1/3 translate-y-1/3 !bg-blue-900/10"></div>
<div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 z-10 fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-900/30 bg-sky-900/10 backdrop-blur-sm">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
</span>
<span className="text-xs font-medium text-sky-300 tracking-wide uppercase">Specialized for Renovation Contractors</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1]">
                    Turn Website Visitors Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Booked Jobs</span>
</h1>
<p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                    We build conversion-optimized websites for renovation contractors that attract serious homeowners and book qualified consultations directly to your calendar.
                </p>
<div className="flex flex-wrap items-center gap-4">
<a className="px-8 py-4 bg-white text-slate-900 text-sm font-semibold rounded-lg hover:bg-slate-100 transition-all shadow-lg shadow-white/5 flex items-center gap-2" href="#book-call">
                        Book a Free Discovery Call
                        <iconify-icon icon="solar:calendar-add-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<div className="flex items-center gap-2 text-sm text-slate-500 px-4">
<iconify-icon className="text-sky-500" icon="solar:shield-check-linear" width="18"></iconify-icon>
<span>No long-term contracts</span>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex items-center gap-8">
<div>
<div className="text-2xl font-semibold text-white">100%</div>
<div className="text-xs text-slate-500 uppercase tracking-wider">Renovation Focused</div>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div>
<div className="text-2xl font-semibold text-white">3x</div>
<div className="text-xs text-slate-500 uppercase tracking-wider">Lead Quality</div>
</div>
</div>
</div>

<div className="relative z-10 fade-up delay-100 hidden lg:block">

<div className="glass-card rounded-2xl p-1 border-white/10 bg-slate-900/50 backdrop-blur-xl relative">

<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="mx-auto w-1/2 h-5 bg-white/5 rounded-md"></div>
</div>

<div className="p-6">
<div className="flex justify-between items-end mb-6">
<div>
<h3 className="text-white font-medium text-lg">Upcoming Estimates</h3>
<p className="text-slate-500 text-xs">Today, Oct 24</p>
</div>
<div className="bg-sky-500/10 text-sky-400 px-3 py-1 rounded-full text-xs font-medium border border-sky-500/20">
                                +4 New Leads
                            </div>
</div>

<div className="space-y-3">
<div className="bg-white/5 rounded-lg p-4 border border-white/5 flex items-center gap-4 hover:border-sky-500/30 transition-colors cursor-default">
<div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between">
<h4 className="text-sm font-medium text-white">Sarah Jenkins</h4>
<span className="text-xs text-sky-400 font-medium">10:00 AM</span>
</div>
<div className="flex justify-between mt-1">
<p className="text-xs text-slate-400">Kitchen Remodel • $45k Budget</p>
</div>
</div>
</div>
<div className="bg-white/5 rounded-lg p-4 border border-white/5 flex items-center gap-4 hover:border-sky-500/30 transition-colors cursor-default">
<div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between">
<h4 className="text-sm font-medium text-white">Mike Ross</h4>
<span className="text-xs text-sky-400 font-medium">02:00 PM</span>
</div>
<div className="flex justify-between mt-1">
<p className="text-xs text-slate-400">Master Bath • $25k Budget</p>
</div>
</div>
</div>
<div className="bg-white/5 rounded-lg p-4 border border-white/5 flex items-center gap-4 opacity-50">
<div className="w-10 h-10 rounded-full bg-slate-500/20 text-slate-400 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-sm font-medium text-slate-300">Available Slot</h4>
<p className="text-xs text-slate-500">04:30 PM</p>
</div>
<button className="px-3 py-1 bg-white/10 rounded text-xs text-white hover:bg-white/20 transition">Book</button>
</div>
</div>
</div>
</div>

<div className="absolute -right-6 bottom-10 glass-card p-4 rounded-xl flex items-center gap-3 animate-bounce shadow-xl shadow-black/50">
<div className="bg-green-500/20 text-green-400 p-2 rounded-lg">
<iconify-icon icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-white">New Booking</div>
<div className="text-xs text-slate-400">Just now via Website</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-black/40 relative" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-sm font-semibold text-sky-500 tracking-widest uppercase mb-3">The System</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">How We Fill Your Calendar</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent z-0"></div>

<div className="relative z-10 text-center group">
<div className="w-24 h-24 mx-auto glass-card rounded-2xl flex items-center justify-center mb-6 group-hover:border-sky-500/50 transition-colors shadow-[0_0_20px_-5px_rgba(0,0,0,0.5)]">
<iconify-icon className="text-sky-400 group-hover:scale-110 transition-transform" icon="solar:map-point-search-linear" width="40"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-white mb-3">1. Attract Local Homeowners</h4>
<p className="text-sm text-slate-400 leading-relaxed px-4">
                        We deploy an SEO-ready site structure with local intent, ensuring you appear when neighbors search for "kitchen remodel near me".
                    </p>
</div>

<div className="relative z-10 text-center group">
<div className="w-24 h-24 mx-auto glass-card rounded-2xl flex items-center justify-center mb-6 group-hover:border-sky-500/50 transition-colors shadow-[0_0_20px_-5px_rgba(0,0,0,0.5)]">
<iconify-icon className="text-sky-400 group-hover:scale-110 transition-transform" icon="solar:checklist-minimalistic-linear" width="40"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-white mb-3">2. Qualify Project Needs</h4>
<p className="text-sm text-slate-400 leading-relaxed px-4">
                        Smart forms filter out tire-kickers by asking budget and timeline questions before they can ever take your time.
                    </p>
</div>

<div className="relative z-10 text-center group">
<div className="w-24 h-24 mx-auto glass-card rounded-2xl flex items-center justify-center mb-6 group-hover:border-sky-500/50 transition-colors shadow-[0_0_20px_-5px_rgba(0,0,0,0.5)]">
<iconify-icon className="text-sky-400 group-hover:scale-110 transition-transform" icon="solar:calendar-check-linear" width="40"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-white mb-3">3. Ready-to-Bid Opportunities</h4>
<p className="text-sm text-slate-400 leading-relaxed px-4">
                        Serious homeowners book estimates directly into your calendar. You simply show up ready to bid and close.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="benefits">
<div className="glow-spot top-1/2 right-0 -translate-y-1/2 translate-x-1/2 !w-[600px] !h-[600px] opacity-50"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Stop Chasing Leads.<br/>Start Selecting Projects.</h2>
<p className="text-slate-400 mb-8 text-lg">Most contractor websites are just digital brochures. Ours are 24/7 sales agents that vet leads while you sleep.</p>
<div className="space-y-6">

<div className="flex gap-4">
<div className="w-12 h-12 rounded-lg bg-sky-900/20 border border-sky-500/20 flex items-center justify-center shrink-0 text-sky-400">
<iconify-icon icon="solar:smartphone-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-lg">Mobile-First Portfolio</h4>
<p className="text-sm text-slate-500 mt-1">70% of renovation research happens on phones. We make your projects look stunning on every device.</p>
</div>
</div>

<div className="flex gap-4">
<div className="w-12 h-12 rounded-lg bg-sky-900/20 border border-sky-500/20 flex items-center justify-center shrink-0 text-sky-400">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-lg">High-Intent Optimization</h4>
<p className="text-sm text-slate-500 mt-1">We optimize headings and layout to guide visitors toward one specific action: booking an estimate.</p>
</div>
</div>

<div className="flex gap-4">
<div className="w-12 h-12 rounded-lg bg-sky-900/20 border border-sky-500/20 flex items-center justify-center shrink-0 text-sky-400">
<iconify-icon icon="solar:verified-check-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-lg">Instant Trust Signals</h4>
<p className="text-sm text-slate-500 mt-1">Strategic placement of reviews, licenses, and insurance badges to build instant authority.</p>
</div>
</div>
</div>
</div>

<div className="glass-card p-2 rounded-xl border border-white/10 bg-black/40 rotate-1 hover:rotate-0 transition-transform duration-500">
<div className="bg-slate-900 rounded-lg p-6 overflow-hidden relative">

<div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
<div className="font-bold text-white text-lg tracking-tight">APEX <span className="text-sky-500">RENO</span></div>
<div className="px-4 py-2 bg-sky-600 text-white text-xs font-semibold rounded">Get Estimate</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="h-32 bg-slate-800 rounded-lg animate-pulse"></div>
<div className="h-32 bg-slate-800 rounded-lg animate-pulse delay-100"></div>
</div>
<div className="space-y-2">
<div className="h-4 bg-slate-800 rounded w-3/4"></div>
<div className="h-4 bg-slate-800 rounded w-1/2"></div>
</div>

<div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center">
<div className="glass-card p-6 rounded-xl border-sky-500/30 text-center max-w-xs">
<div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
<iconify-icon icon="solar:calendar-check-bold" width="24"></iconify-icon>
</div>
<h3 className="text-white font-semibold text-lg">Estimate Requested</h3>
<p className="text-xs text-slate-400 mt-2">New lead from "Downtown Kitchen" landing page.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12 text-center">Built for Contractors</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-xl relative">
<div className="flex gap-1 text-sky-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">"Before this site, I was chasing tire-kickers all day. Now, I only talk to people who have a budget and are ready to start. Saved me 10 hours a week."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center font-bold text-white">DB</div>
<div>
<div className="text-sm font-medium text-white">Dave B.</div>
<div className="text-xs text-slate-500">Brighton Renovations</div>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-xl relative border-sky-500/20">
<div className="flex gap-1 text-sky-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">"The best investment we made this year. The portfolio gallery looks amazing on mobile, and clients actually compliment the website during the bid."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center font-bold text-white">MK</div>
<div>
<div className="text-sm font-medium text-white">Mark K.</div>
<div className="text-xs text-slate-500">Kitchens &amp; Bath Co.</div>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-xl relative">
<div className="flex gap-1 text-sky-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">"Simple, fast, and effective. The automated booking link they set up means I wake up to scheduled estimates. Highly recommend."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center font-bold text-white">ST</div>
<div>
<div className="text-sm font-medium text-white">Sarah T.</div>
<div className="text-xs text-slate-500">Urban Living Spaces</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-grid border-t border-white/5 relative" id="book-call">
<div className="glow-spot top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !bg-sky-600/10"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-10">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Book Your Free Strategy Call</h2>
<p className="text-slate-400">See if your business qualifies for our high-conversion system. No obligation. 15 Minutes.</p>
</div>
<div className="glass-card rounded-2xl overflow-hidden shadow-2xl shadow-black/80 flex flex-col md:flex-row">

<div className="bg-slate-900/80 p-8 md:w-2/5 border-r border-white/5 flex flex-col justify-between">
<div>
<div className="bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-sky-400" icon="solar:user-speak-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-semibold text-lg mb-2">Discovery Call</h3>
<div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
<iconify-icon icon="solar:clock-circle-linear" width="16"></iconify-icon>
                            15 Minutes
                        </div>
<p className="text-slate-400 text-sm leading-relaxed">
                            We'll review your current website (if you have one), discuss your target projects, and explain how we can help you fill your calendar.
                        </p>
</div>
<div className="mt-8 pt-8 border-t border-white/5">
<div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">You'll Speak With</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div className="text-sm text-white font-medium">Head of Strategy</div>
</div>
</div>
</div>

<div className="p-8 md:w-3/5 bg-black/40">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs text-slate-400 ml-1">First Name</label>
<input className="glass-input w-full rounded-lg px-4 py-2.5 text-white text-sm" placeholder="John" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-400 ml-1">Last Name</label>
<input className="glass-input w-full rounded-lg px-4 py-2.5 text-white text-sm" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-400 ml-1">Company Name</label>
<input className="glass-input w-full rounded-lg px-4 py-2.5 text-white text-sm" placeholder="JD Renovations" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-400 ml-1">Email Address</label>
<input className="glass-input w-full rounded-lg px-4 py-2.5 text-white text-sm" placeholder="john@company.com" type="email"/>
</div>

<div className="space-y-1">
<label className="text-xs text-slate-400 ml-1">Preferred Time</label>
<div className="grid grid-cols-3 gap-2">
<button className="border border-sky-500 bg-sky-500/10 text-sky-400 rounded-lg py-2 text-xs font-medium" type="button">Tue, 10am</button>
<button className="border border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 rounded-lg py-2 text-xs font-medium" type="button">Wed, 2pm</button>
<button className="border border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 rounded-lg py-2 text-xs font-medium" type="button">Thu, 9am</button>
</div>
</div>
<button className="w-full mt-4 bg-white text-black font-semibold py-3 rounded-lg hover:bg-sky-50 transition-colors flex items-center justify-center gap-2" type="button">
                            Schedule My Call
                            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12 text-center">Simple Pricing</h2>
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="glass-card p-8 rounded-xl flex flex-col">
<h3 className="text-lg font-medium text-white">Renovation Starter</h3>
<p className="text-sm text-slate-500 mt-2">Perfect for independent contractors.</p>
<div className="my-6">
<span className="text-3xl font-bold text-white">$2,500</span>
<span className="text-slate-500 text-sm ml-1">one-time</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-sky-500" icon="solar:check-circle-linear"></iconify-icon> 5-Page Conversion Site
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-sky-500" icon="solar:check-circle-linear"></iconify-icon> Local SEO Setup
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-sky-500" icon="solar:check-circle-linear"></iconify-icon> Contact Form Integration
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-sky-500" icon="solar:check-circle-linear"></iconify-icon> Mobile Optimized
                        </li>
</ul>
<a className="block w-full py-3 border border-white/10 rounded-lg text-center text-sm font-medium text-white hover:bg-white/5 transition-colors" href="#book-call">
                        Inquire Now
                    </a>
</div>

<div className="glass-card p-8 rounded-xl border-sky-500/30 relative flex flex-col shadow-[0_0_30px_-15px_rgba(2,132,199,0.3)]">
<div className="absolute top-4 right-4 bg-sky-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Most Popular</div>
<h3 className="text-lg font-medium text-white">Growth System</h3>
<p className="text-sm text-slate-500 mt-2">For crews wanting automated leads.</p>
<div className="my-6">
<span className="text-3xl font-bold text-white">$4,500</span>
<span className="text-slate-500 text-sm ml-1">one-time</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white font-medium">
<iconify-icon className="text-sky-500" icon="solar:check-circle-bold"></iconify-icon> Everything in Starter
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-sky-500" icon="solar:check-circle-linear"></iconify-icon> Project Portfolio Gallery
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-sky-500" icon="solar:check-circle-linear"></iconify-icon> <strong>Calendar Booking System</strong>
</li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-sky-500" icon="solar:check-circle-linear"></iconify-icon> Review Import Automation
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-sky-500" icon="solar:check-circle-linear"></iconify-icon> CRM Integration
                        </li>
</ul>
<a className="block w-full py-3 bg-white text-black font-semibold rounded-lg text-center text-sm hover:bg-slate-200 transition-colors" href="#book-call">
                        Book Strategy Call
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-grid border-t border-white/5">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-semibold text-white mb-10 text-center">Common Questions</h2>
<div className="space-y-4">
<details className="group glass-card rounded-lg open:bg-white/5 transition-all">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-white font-medium select-none">
                        How long does it take to build?
                        <iconify-icon className="group-open:rotate-180 transition-transform text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed">
                        Typically 2-3 weeks from the time we get your photos and info. We know you're busy, so we handle the heavy lifting.
                    </div>
</details>
<details className="group glass-card rounded-lg open:bg-white/5 transition-all">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-white font-medium select-none">
                        Do I need to pay monthly fees?
                        <iconify-icon className="group-open:rotate-180 transition-transform text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed">
                        No hidden marketing fees. You pay for the build. We do offer optional hosting/maintenance packages if you don't want to handle updates yourself.
                    </div>
</details>
<details className="group glass-card rounded-lg open:bg-white/5 transition-all">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-white font-medium select-none">
                        Will I own the website?
                        <iconify-icon className="group-open:rotate-180 transition-transform text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed">
                        Yes, 100%. Once paid for, the website, domain, and all assets are yours. We don't hold your business hostage.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-20 relative overflow-hidden bg-black">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Stop Losing Projects to Competitors</h2>
<p className="text-slate-400 mb-8 text-lg">Your next kitchen or bathroom remodel is searching for you right now. Make sure they can book you.</p>
<div className="flex justify-center">
<a className="px-10 py-4 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-500 transition-all shadow-[0_0_30px_-10px_rgba(2,132,199,0.5)]" href="#book-call">
                    Book Your Free Discovery Call
                </a>
</div>
<p className="mt-6 text-xs text-slate-500">No pressure. Just a strategy chat.</p>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="bg-white/10 w-6 h-6 flex items-center justify-center rounded text-white">
<iconify-icon icon="solar:hammer-linear" width="14"></iconify-icon>
</div>
<span className="text-slate-300 font-medium text-sm">HYTE Automation Group</span>
</div>
<div className="text-xs text-slate-600">
                © 2024 HYTE Automation Group. Specialized for the Renovation Industry.
            </div>
</div>
</footer>



    </>
  );
}
