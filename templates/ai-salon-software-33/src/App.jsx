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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<span className="text-xl font-semibold tracking-tight text-slate-900">blinkit</span>
<div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#testimonials">Testimonials</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-900" href="#">Log in</a>
<a className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-sm" href="#">
                        Get Early Access
                    </a>
</div>
</div>
</div>
</nav>

<main className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden border-b border-slate-100">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
<div className="absolute top-20 left-20 w-96 h-96 bg-rose-100/40 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob"></div>
<div className="absolute top-20 right-20 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

<div className="lg:col-span-6 flex flex-col items-start text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-8 transition-colors hover:border-rose-200 hover:bg-rose-50/50 cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
</span>
<span className="text-xs font-medium text-slate-600 tracking-wide uppercase">AI for Salons is here</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                        Run your salon <br/>
<span className="text-slate-400">smarter with AI.</span>
</h1>
<p className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed">
                        Blinkit handles your bookings, marketing, and admin so you can focus on your craft. The all-in-one growth platform built for modern beauty professionals.
                    </p>
<form className="w-full max-w-md flex flex-col sm:flex-row gap-3 mb-8">
<div className="relative flex-grow">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400" height="18" icon="lucide:mail" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all text-sm shadow-sm" placeholder="Enter your work email" required="" type="email"/>
</div>
<button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-all shadow-md hover:shadow-lg whitespace-nowrap group" type="submit">
                            Join Waitlist
                            <iconify-icon className="ml-2 group-hover:translate-x-0.5 transition-transform" height="16" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</form>
<div className="flex items-center gap-4 text-sm text-slate-500">
<div className="flex -space-x-2">
<div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-slate-200 bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&amp'}}></div>
<div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-slate-200 bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&amp'}}></div>
<div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-slate-200 bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp'}}></div>
</div>
<p className="font-medium">Join 2,000+ top salon owners.</p>
</div>
</div>

<div className="lg:col-span-6 relative mt-12 lg:mt-0">
<div className="absolute -inset-4 bg-gradient-to-tr from-rose-200/50 to-indigo-200/50 rounded-[2rem] blur-2xl opacity-60"></div>
<div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200/60 overflow-hidden">
<div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
</div>
<div className="flex h-[400px]">
<div className="w-16 border-r border-slate-100 flex flex-col items-center py-6 gap-6 bg-slate-50/50">
<div className="p-2 rounded-lg bg-slate-900 text-white shadow-sm"><iconify-icon icon="lucide:layout-grid" strokeWidth="1.5" width="20"></iconify-icon></div>
<div className="p-2 rounded-lg text-slate-400"><iconify-icon icon="lucide:calendar" strokeWidth="1.5" width="20"></iconify-icon></div>
<div className="p-2 rounded-lg text-slate-400"><iconify-icon icon="lucide:users" strokeWidth="1.5" width="20"></iconify-icon></div>
</div>
<div className="flex-1 p-6 bg-white">
<div className="flex justify-between items-center mb-6">
<div>
<h3 className="text-sm font-semibold text-slate-900">Today's Overview</h3>
<p className="text-xs text-slate-500">Wednesday, Oct 24</p>
</div>
<button className="px-3 py-1.5 text-xs font-medium bg-slate-900 text-white rounded-md shadow-sm">+ New Booking</button>
</div>
<div className="grid grid-cols-3 gap-4 mb-6">
<div className="p-3 border border-slate-100 rounded-lg shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]">
<div className="text-xs text-slate-500 mb-1">Revenue</div>
<div className="text-lg font-semibold text-slate-900">$1,240</div>
</div>
<div className="p-3 border border-slate-100 rounded-lg shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]">
<div className="text-xs text-slate-500 mb-1">Appointments</div>
<div className="text-lg font-semibold text-slate-900">18</div>
</div>
<div className="p-3 border border-slate-100 rounded-lg shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]">
<div className="text-xs text-slate-500 mb-1">Retention</div>
<div className="text-lg font-semibold text-slate-900">92%</div>
</div>
</div>
<div className="space-y-3">
<div className="text-xs font-medium text-slate-900 mb-2">Upcoming</div>
<div className="flex items-center p-2 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
<div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-xs font-medium mr-3">JM</div>
<div className="flex-1">
<div className="text-xs font-medium text-slate-900">Jessica Miller</div>
<div className="text-[10px] text-slate-500">Balayage &amp; Cut</div>
</div>
<div className="text-xs font-medium text-slate-900">10:00 AM</div>
</div>
<div className="flex items-center p-2 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
<div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-medium mr-3">AL</div>
<div className="flex-1">
<div className="text-xs font-medium text-slate-900">Anna Lee</div>
<div className="text-[10px] text-slate-500">Manicure Gel</div>
</div>
<div className="text-xs font-medium text-slate-900">11:30 AM</div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute -bottom-6 -left-6 md:-left-12 bg-white/90 backdrop-blur-md border border-slate-200/80 p-4 rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] w-72 animate-bounce" style={{animationDuration: '3s'}}>
<div className="flex gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-rose-500/30">
<iconify-icon className="text-white" icon="lucide:sparkles" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 mb-1">Blinkit AI Agent</h4>
<p className="text-[11px] leading-relaxed text-slate-600">I noticed a cancellation for 1 PM. I've automatically messaged 3 waitlist clients.</p>
</div>
</div>
<div className="mt-3 flex gap-2">
<div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-rose-500 w-3/4 rounded-full"></div>
</div>
<span className="text-[10px] font-medium text-slate-400">Just now</span>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-b border-slate-100 bg-slate-50/50 py-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">Trusted by modern beauty businesses</p>
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex justify-center"><span className="text-lg font-bold tracking-tighter text-slate-800 font-serif italic">VOGUE SALON</span></div>
<div className="flex justify-center"><span className="text-lg font-bold tracking-tight text-slate-800">The Studio.</span></div>
<div className="flex justify-center"><span className="text-xl font-light tracking-widest text-slate-800 uppercase">AURA</span></div>
<div className="flex justify-center"><span className="text-lg font-bold text-slate-800 border-2 border-slate-800 px-1">LUSH</span></div>
<div className="flex justify-center items-center gap-1"><div className="w-4 h-4 rounded-full bg-slate-800"></div><span className="text-lg font-semibold text-slate-800">MUSE</span></div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl mb-4">Everything you need to grow</h2>
<p className="text-lg text-slate-500">Powerful tools designed specifically for the beauty industry. Automate the busy work and focus on your clients.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">

<div className="group">
<div className="h-10 w-10 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center mb-4 group-hover:bg-rose-100 transition-colors">
<iconify-icon className="text-rose-600" icon="lucide:calendar-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Smart Scheduling</h3>
<p className="text-sm text-slate-500 leading-relaxed">AI-optimized calendar that fills gaps automatically and reduces wait times between appointments.</p>
</div>

<div className="group">
<div className="h-10 w-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:bg-slate-100 transition-colors">
<iconify-icon className="text-slate-700" icon="lucide:message-circle" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Automated Messaging</h3>
<p className="text-sm text-slate-500 leading-relaxed">Send reminders, follow-ups, and review requests without lifting a finger. Reduce no-shows by 80%.</p>
</div>

<div className="group">
<div className="h-10 w-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:bg-slate-100 transition-colors">
<iconify-icon className="text-slate-700" icon="lucide:bar-chart-3" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Financial Insights</h3>
<p className="text-sm text-slate-500 leading-relaxed">Track revenue, tips, and product sales in real-time. Understand your most profitable services.</p>
</div>

<div className="group">
<div className="h-10 w-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:bg-slate-100 transition-colors">
<iconify-icon className="text-slate-700" icon="lucide:users" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Client Profiles</h3>
<p className="text-sm text-slate-500 leading-relaxed">Store formulas, preferences, and before/after photos. Give every client a personalized experience.</p>
</div>

<div className="group">
<div className="h-10 w-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:bg-slate-100 transition-colors">
<iconify-icon className="text-slate-700" icon="lucide:zap" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Instant Booking Site</h3>
<p className="text-sm text-slate-500 leading-relaxed">Get a beautiful, mobile-optimized booking website that reflects your brand in seconds.</p>
</div>

<div className="group">
<div className="h-10 w-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:bg-slate-100 transition-colors">
<iconify-icon className="text-slate-700" icon="lucide:shield-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">No-Show Protection</h3>
<p className="text-sm text-slate-500 leading-relaxed">Secure deposits and card-on-file requirements to protect your time and revenue.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50/50 border-y border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-6 grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="md:col-span-4 md:row-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col relative overflow-hidden group">
<div className="mb-6">
<h3 className="text-xl font-semibold text-slate-900 mb-2">Your 24/7 AI Receptionist</h3>
<p className="text-slate-500 text-sm max-w-md">Responds to Instagram DMs and texts instantly to book appointments while you sleep.</p>
</div>

<div className="flex-1 bg-slate-50 border border-slate-100 rounded-xl p-4 flex flex-col gap-3 relative overflow-hidden">
<div className="flex justify-start">
<div className="bg-white border border-slate-200 px-4 py-2 rounded-2xl rounded-tl-none shadow-sm text-xs text-slate-600 max-w-[80%]">
                                Do you have any openings this Saturday for a gel manicure?
                            </div>
</div>
<div className="flex justify-end">
<div className="bg-rose-500 text-white px-4 py-2 rounded-2xl rounded-tr-none shadow-md text-xs max-w-[80%]">
                                Yes! I have openings at 10:00 AM and 2:30 PM. Would you like to grab one? ✨
                            </div>
</div>
<div className="flex justify-start">
<div className="bg-white border border-slate-200 px-4 py-2 rounded-2xl rounded-tl-none shadow-sm text-xs text-slate-600 max-w-[80%]">
                                10 AM works perfectly!
                            </div>
</div>

<div className="absolute bottom-4 right-4 flex gap-1">
<div className="w-1.5 h-1.5 bg-rose-400 rounded-full animate-bounce"></div>
<div className="w-1.5 h-1.5 bg-rose-400 rounded-full animate-bounce delay-75"></div>
<div className="w-1.5 h-1.5 bg-rose-400 rounded-full animate-bounce delay-150"></div>
</div>
</div>
</div>

<div className="md:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between group hover:border-rose-200 transition-colors">
<div>
<div className="h-8 w-8 rounded-full bg-emerald-50 flex items-center justify-center mb-3">
<iconify-icon className="text-emerald-600" icon="lucide:credit-card" width="16"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900">Seamless Payments</h3>
<p className="text-xs text-slate-500 mt-1">Tap to pay on iPhone. No hardware needed.</p>
</div>
<div className="mt-4 flex items-center gap-2">
<div className="h-10 w-16 bg-slate-900 rounded-md flex items-center justify-center">
<iconify-icon className="text-white opacity-50" icon="lucide:wifi" width="16"></iconify-icon>
</div>
<div className="h-10 w-16 bg-slate-100 rounded-md border border-slate-200 flex items-center justify-center transform -rotate-6 shadow-sm">
<span className="text-[10px] font-bold text-slate-400">VISA</span>
</div>
</div>
</div>

<div className="md:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 relative overflow-hidden group hover:border-rose-200 transition-colors">
<div className="relative z-10">
<div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center mb-3">
<iconify-icon className="text-blue-600" icon="lucide:mail-check" width="16"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900">Auto-Marketing</h3>
<p className="text-xs text-slate-500 mt-1">Fill slow days with one click email blasts.</p>
</div>

<div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full opacity-10 blur-xl group-hover:opacity-20 transition-opacity"></div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="testimonials">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-center text-slate-900 mb-12">Loved by pros</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-sm text-slate-700 leading-relaxed mb-6">"Blinkit changed my life. I used to spend 2 hours a day texting clients. Now the AI does it all. I have my evenings back."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200 bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp'}}></div>
<div>
<div className="text-xs font-semibold text-slate-900">Sarah Jenkins</div>
<div className="text-[10px] text-slate-500">Owner, Glow Studio</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-sm text-slate-700 leading-relaxed mb-6">"The no-show protection is a game changer. My revenue increased by 20% in the first month just by enforcing deposits."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200 bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp'}}></div>
<div>
<div className="text-xs font-semibold text-slate-900">David Chen</div>
<div className="text-[10px] text-slate-500">Freelance Stylist</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-sm text-slate-700 leading-relaxed mb-6">"It feels like having a full-time assistant. The design is so clean and easy to use, unlike other clunky salon software."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200 bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&amp'}}></div>
<div>
<div className="text-xs font-semibold text-slate-900">Elena Rodriguez</div>
<div className="text-[10px] text-slate-500">Lash Artist</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white border-t border-slate-800" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Simple pricing for everyone</h2>
<p className="text-slate-400">Start for free, upgrade as you grow.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/50 flex flex-col">
<div className="mb-4">
<span className="text-sm font-medium text-slate-400">Starter</span>
<div className="text-4xl font-bold mt-2">$0 <span className="text-sm font-normal text-slate-500">/mo</span></div>
</div>
<p className="text-sm text-slate-400 mb-8">Perfect for solo artists just getting started.</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-slate-500" icon="lucide:check" width="16"></iconify-icon> Up to 50 appointments/mo
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-slate-500" icon="lucide:check" width="16"></iconify-icon> Online Booking Page
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-slate-500" icon="lucide:check" width="16"></iconify-icon> Basic Client Profiles
                        </li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-sm font-medium transition-colors">Start Free</button>
</div>

<div className="p-8 rounded-2xl border border-rose-500/30 bg-slate-800/50 relative flex flex-col shadow-2xl shadow-rose-900/10">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-rose-500 to-orange-500 text-[10px] font-bold uppercase tracking-wider rounded-full">Most Popular</div>
<div className="mb-4">
<span className="text-sm font-medium text-rose-400">Professional</span>
<div className="text-4xl font-bold mt-2">$29 <span className="text-sm font-normal text-slate-500">/mo</span></div>
</div>
<p className="text-sm text-slate-400 mb-8">For busy pros who need automation.</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-rose-500" icon="lucide:check" width="16"></iconify-icon> Unlimited appointments
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-rose-500" icon="lucide:check" width="16"></iconify-icon> AI Receptionist (SMS/DM)
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-rose-500" icon="lucide:check" width="16"></iconify-icon> No-show protection
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-rose-500" icon="lucide:check" width="16"></iconify-icon> Marketing Blasts
                        </li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-white text-slate-900 hover:bg-slate-200 text-sm font-medium transition-colors">Get Started</button>
</div>

<div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/50 flex flex-col">
<div className="mb-4">
<span className="text-sm font-medium text-slate-400">Salon Team</span>
<div className="text-4xl font-bold mt-2">$79 <span className="text-sm font-normal text-slate-500">/mo</span></div>
</div>
<p className="text-sm text-slate-400 mb-8">For salons with multiple staff members.</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-slate-500" icon="lucide:check" width="16"></iconify-icon> 5 Staff Accounts
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-slate-500" icon="lucide:check" width="16"></iconify-icon> Payroll &amp; Commission
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-slate-500" icon="lucide:check" width="16"></iconify-icon> Advanced Inventory
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-slate-500" icon="lucide:check" width="16"></iconify-icon> Priority Support
                        </li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-sm font-medium transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<span className="text-lg font-bold tracking-tight text-slate-900">blinkit</span>
<div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div>
</div>
<p className="text-sm text-slate-500 max-w-xs mb-6">
                        Empowering beauty professionals with intelligent tools to manage and grow their business.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-600" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Product</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-rose-500 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-rose-500 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-rose-500 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-rose-500 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Resources</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-rose-500 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-rose-500 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-rose-500 transition-colors" href="#">Community</a></li>
<li><a className="hover:text-rose-500 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-rose-500 transition-colors" href="#">About</a></li>
<li><a className="hover:text-rose-500 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-rose-500 transition-colors" href="#">Legal</a></li>
<li><a className="hover:text-rose-500 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Blinkit Inc. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-400">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
