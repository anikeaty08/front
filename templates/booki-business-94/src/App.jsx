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
      

<nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 top-0">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex-shrink-0 flex items-center">
<a className="text-2xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500" href="#">Booki</a>
</div>
<div className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#how-it-works">How it works</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#industries">Industries</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center">
<a className="bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white px-5 py-2 rounded-xl text-sm font-medium shadow-sm transition-all duration-300" href="#contact">
                        Request Demo
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-28 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">

<div className="absolute inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute -top-[10%] -left-[10%] w-[50%] h-[60%] rounded-full bg-blue-400/10 blur-[100px]"></div>
<div className="absolute top-[20%] -right-[10%] w-[50%] h-[60%] rounded-full bg-emerald-400/10 blur-[100px]"></div>
</div>
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
<div className="w-full lg:w-1/2 flex flex-col items-start text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-medium mb-6">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    Built for growing businesses
                </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.15]">
                    Manage your business. Let clients book you online.
                </h1>
<p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-lg">
                    Booki is a complete booking and management system for appointment-based businesses. Simplify your schedule, grow your revenue, and delight your clients.
                </p>
<div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="flex justify-center items-center bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white px-6 py-3.5 rounded-xl text-base font-medium shadow-sm transition-all hover:shadow-md duration-300" href="#contact">
                        Request a Demo
                    </a>
<a className="flex justify-center items-center gap-2 bg-white hover:bg-gray-50 text-slate-700 border border-gray-200 px-6 py-3.5 rounded-xl text-base font-medium shadow-sm transition-all" href="#">
<iconify-icon className="text-emerald-500 text-xl" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
                        Chat on WhatsApp
                    </a>
</div>
<div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
</div>
<span>Trusted by 500+ local businesses</span>
</div>
</div>
<div className="w-full lg:w-1/2 relative">

<div className="relative rounded-2xl bg-white border border-gray-200 shadow-2xl overflow-hidden aspect-[4/3] flex flex-col">

<div className="h-14 border-b border-gray-100 flex items-center justify-between px-4 bg-gray-50/50">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-amber-400"></div>
<div className="w-3 h-3 rounded-full bg-emerald-400"></div>
</div>
<div className="h-6 w-32 bg-gray-200 rounded-md"></div>
<div className="w-8 h-8 rounded-full bg-teal-100"></div>
</div>
<div className="flex flex-1 overflow-hidden">

<div className="w-16 sm:w-48 border-r border-gray-100 p-4 flex flex-col gap-4 bg-gray-50/30">
<div className="h-8 w-full bg-teal-50 rounded-lg hidden sm:block"></div>
<div className="h-8 w-8 sm:w-full bg-gray-100 rounded-lg"></div>
<div className="h-8 w-8 sm:w-full bg-gray-100 rounded-lg"></div>
<div className="h-8 w-8 sm:w-full bg-gray-100 rounded-lg"></div>
</div>

<div className="flex-1 p-4 sm:p-6 bg-white flex flex-col gap-6">

<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
<div className="h-20 border border-gray-100 rounded-xl p-3 flex flex-col justify-between shadow-sm">
<div className="h-3 w-16 bg-gray-200 rounded"></div>
<div className="h-5 w-24 bg-gradient-to-r from-blue-500 to-teal-400 rounded"></div>
</div>
<div className="h-20 border border-gray-100 rounded-xl p-3 flex flex-col justify-between shadow-sm">
<div className="h-3 w-20 bg-gray-200 rounded"></div>
<div className="h-5 w-16 bg-slate-800 rounded"></div>
</div>
<div className="h-20 border border-gray-100 rounded-xl p-3 hidden sm:flex flex-col justify-between shadow-sm">
<div className="h-3 w-14 bg-gray-200 rounded"></div>
<div className="h-5 w-20 bg-emerald-400 rounded"></div>
</div>
</div>

<div className="flex-1 border border-gray-100 rounded-xl p-4 shadow-sm relative overflow-hidden">
<div className="h-4 w-32 bg-gray-200 rounded mb-4"></div>
<div className="space-y-3">
<div className="flex gap-3 items-center">
<div className="w-12 h-12 rounded-lg bg-blue-50"></div>
<div className="space-y-2 flex-1">
<div className="h-3 w-full bg-gray-100 rounded"></div>
<div className="h-3 w-2/3 bg-gray-100 rounded"></div>
</div>
</div>
<div className="flex gap-3 items-center">
<div className="w-12 h-12 rounded-lg bg-emerald-50"></div>
<div className="space-y-2 flex-1">
<div className="h-3 w-5/6 bg-gray-100 rounded"></div>
<div className="h-3 w-1/2 bg-gray-100 rounded"></div>
</div>
</div>
<div className="flex gap-3 items-center">
<div className="w-12 h-12 rounded-lg bg-amber-50"></div>
<div className="space-y-2 flex-1">
<div className="h-3 w-full bg-gray-100 rounded"></div>
<div className="h-3 w-3/4 bg-gray-100 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-4 animate-bounce" style={{animationDuration: '3s'}}>
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<iconify-icon className="text-2xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">New Booking</div>
<div className="text-xs text-slate-500">Just now • Haircut</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                    Still managing appointments manually?
                </h2>
<p className="text-lg text-slate-600">
                    Running a business is hard enough. Don't let disorganized scheduling hold your growth back.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center mb-4">
<iconify-icon className="text-2xl" icon="solar:chat-square-call-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Too many WhatsApps</h3>
<p className="text-sm text-slate-600 leading-relaxed">Endless back-and-forth messages just to find a free time slot for one client.</p>
</div>

<div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mb-4">
<iconify-icon className="text-2xl" icon="solar:phone-calling-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Missed calls &amp; mistakes</h3>
<p className="text-sm text-slate-600 leading-relaxed">Losing clients because you couldn't pick up the phone, or accidentally double-booking.</p>
</div>

<div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-slate-200 text-slate-600 flex items-center justify-center mb-4">
<iconify-icon className="text-2xl" icon="solar:calendar-broken" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">No organized calendar</h3>
<p className="text-sm text-slate-600 leading-relaxed">Relying on paper notebooks or messy spreadsheets that only you understand.</p>
</div>

<div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-500 flex items-center justify-center mb-4">
<iconify-icon className="text-2xl" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">No visibility on revenue</h3>
<p className="text-sm text-slate-600 leading-relaxed">Guessing how much you made this month or which services are your most profitable.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-gray-50 to-teal-50/30 border-t border-gray-200 relative overflow-hidden" id="how-it-works">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                    How Booki works
                </h2>
<p className="text-lg text-slate-600">
                    A seamless experience from the moment a client decides to book, to the moment they pay.
                </p>
</div>
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="w-full lg:w-1/2 space-y-8 relative">

<div className="absolute left-6 top-8 bottom-8 w-px bg-gray-200 hidden sm:block"></div>
<div className="flex gap-6 relative z-10">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 text-white flex items-center justify-center text-lg font-semibold shadow-md">1</div>
<div className="pt-2">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Client selects service &amp; time</h3>
<p className="text-sm text-slate-600">Share your personalized Booki link on Instagram, WhatsApp, or your website. Clients view your availability and pick what works for them.</p>
</div>
</div>
<div className="flex gap-6 relative z-10">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-teal-500 text-teal-600 flex items-center justify-center text-lg font-semibold">2</div>
<div className="pt-2">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Booking is confirmed automatically</h3>
<p className="text-sm text-slate-600">No manual approval needed. The slot is blocked in your calendar, and automated SMS/WhatsApp reminders are sent to reduce no-shows.</p>
</div>
</div>
<div className="flex gap-6 relative z-10">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-gray-300 text-slate-400 flex items-center justify-center text-lg font-semibold">3</div>
<div className="pt-2">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Manage from the dashboard</h3>
<p className="text-sm text-slate-600">View your daily schedule, check out clients, update services, and track your daily revenue all from one simple app.</p>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 relative h-[500px] flex items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-emerald-100 rounded-[3rem] transform rotate-3 scale-95 opacity-50"></div>

<div className="relative z-20 w-[240px] h-[480px] bg-white rounded-[2rem] border-[6px] border-slate-900 shadow-2xl overflow-hidden flex flex-col transform -translate-x-12">
<div className="h-16 bg-gradient-to-r from-blue-600 to-emerald-500 flex flex-col justify-end p-4 pb-2 text-white">
<div className="text-xs opacity-80">Book an appointment</div>
<div className="font-medium">Studio Salon</div>
</div>
<div className="p-4 space-y-4 flex-1 bg-gray-50">
<div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Select Service</div>

<div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
<div>
<div className="text-sm font-medium text-slate-900">Premium Haircut</div>
<div className="text-xs text-slate-500">45 mins</div>
</div>
<div className="w-5 h-5 rounded-full border border-teal-500 bg-teal-50 flex items-center justify-center">
<div className="w-2 h-2 bg-teal-500 rounded-full"></div>
</div>
</div>
<div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center opacity-60">
<div>
<div className="text-sm font-medium text-slate-900">Beard Trim</div>
<div className="text-xs text-slate-500">20 mins</div>
</div>
<div className="w-5 h-5 rounded-full border border-gray-300"></div>
</div>
<div className="text-xs font-semibold text-slate-500 uppercase tracking-wider pt-2">Select Time</div>
<div className="grid grid-cols-2 gap-2">
<div className="bg-teal-600 text-white py-2 rounded-lg text-center text-sm font-medium">10:00 AM</div>
<div className="bg-white border border-gray-200 py-2 rounded-lg text-center text-sm font-medium text-slate-600">11:00 AM</div>
<div className="bg-gray-100 border border-gray-200 py-2 rounded-lg text-center text-sm font-medium text-slate-400 line-through">12:30 PM</div>
<div className="bg-white border border-gray-200 py-2 rounded-lg text-center text-sm font-medium text-slate-600">02:00 PM</div>
</div>
</div>
<div className="p-4 bg-white border-t border-gray-100">
<div className="w-full bg-slate-900 text-white text-center py-3 rounded-xl text-sm font-medium">Confirm Booking</div>
</div>
</div>

<div className="absolute z-10 w-[300px] h-[350px] bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden right-4 top-16 transform translate-x-12 opacity-90 hidden sm:flex flex-col">
<div className="h-12 border-b border-gray-100 flex items-center px-4 bg-gray-50">
<div className="text-sm font-medium text-slate-700">Calendar view</div>
</div>
<div className="flex-1 p-3 grid grid-cols-3 gap-2 relative">

<div className="col-span-1 space-y-4 text-xs text-slate-400 text-right pr-2 pt-2 border-r border-gray-100">
<div>09:00</div>
<div>10:00</div>
<div>11:00</div>
<div>12:00</div>
</div>

<div className="col-span-2 relative pt-2">
<div className="absolute top-2 left-0 right-0 h-12 bg-blue-100 rounded border border-blue-200 p-1">
<div className="w-8 h-2 bg-blue-300 rounded mb-1"></div>
<div className="w-16 h-1.5 bg-blue-200 rounded"></div>
</div>
<div className="absolute top-20 left-0 right-0 h-16 bg-emerald-100 rounded border border-emerald-200 p-1">
<div className="w-10 h-2 bg-emerald-300 rounded mb-1"></div>
<div className="w-14 h-1.5 bg-emerald-200 rounded"></div>
</div>
<div className="absolute top-40 left-0 w-3/4 h-10 bg-amber-100 rounded border border-amber-200 p-1">
<div className="w-6 h-2 bg-amber-300 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                    Everything you need in one place
                </h2>
<p className="text-lg text-slate-600">
                    Replace multiple tools with one powerful dashboard built specifically for service businesses.
                </p>
</div>
<div className="space-y-24">

<div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
<div className="w-full md:w-1/2">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:calendar-date-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">📅 Planning Management</h3>
<p className="text-slate-600 leading-relaxed text-base">
                            Get a clear view of your day, week, or month. Easily drag and drop appointments, schedule recurring sessions, and manage your staff's availability with a few clicks. Color-code services to see your day at a glance.
                        </p>
</div>
<div className="w-full md:w-1/2">

<div className="bg-gray-50 rounded-2xl border border-gray-200 p-4 aspect-[4/3] shadow-inner relative overflow-hidden flex flex-col">
<div className="flex justify-between items-center mb-4">
<div className="h-4 w-24 bg-gray-300 rounded"></div>
<div className="flex gap-1">
<div className="h-6 w-6 bg-white border border-gray-200 rounded"></div>
<div className="h-6 w-6 bg-white border border-gray-200 rounded"></div>
</div>
</div>
<div className="grid grid-cols-7 gap-2 flex-1">

<div className="col-span-7 grid grid-cols-7 gap-2 mb-2">
<div className="h-2 bg-gray-200 rounded"></div><div className="h-2 bg-gray-200 rounded"></div><div className="h-2 bg-gray-200 rounded"></div><div className="h-2 bg-gray-200 rounded"></div><div className="h-2 bg-gray-200 rounded"></div><div className="h-2 bg-gray-200 rounded"></div><div className="h-2 bg-gray-200 rounded"></div>
</div>

<div className="bg-white rounded border border-gray-100 p-1"><div className="h-1.5 w-3 bg-gray-200 rounded mb-1"></div></div>
<div className="bg-white rounded border border-gray-100 p-1"><div className="h-1.5 w-3 bg-gray-200 rounded mb-1"></div><div className="h-3 w-full bg-teal-100 rounded mt-2"></div></div>
<div className="bg-white rounded border border-gray-100 p-1"><div className="h-1.5 w-3 bg-gray-200 rounded mb-1"></div></div>
<div className="bg-teal-50 rounded border border-teal-100 p-1 relative ring-1 ring-teal-500"><div className="h-1.5 w-3 bg-teal-400 rounded mb-1"></div><div className="h-4 w-full bg-teal-500 rounded mt-1"></div><div className="h-3 w-full bg-emerald-400 rounded mt-1"></div></div>
<div className="bg-white rounded border border-gray-100 p-1"><div className="h-1.5 w-3 bg-gray-200 rounded mb-1"></div><div className="h-4 w-full bg-amber-100 rounded mt-1"></div></div>
<div className="bg-gray-100 rounded border border-gray-200 p-1 opacity-50"><div className="h-1.5 w-3 bg-gray-300 rounded mb-1"></div></div>
<div className="bg-gray-100 rounded border border-gray-200 p-1 opacity-50"><div className="h-1.5 w-3 bg-gray-300 rounded mb-1"></div></div>

<div className="bg-white rounded border border-gray-100 p-1 h-12"></div>
<div className="bg-white rounded border border-gray-100 p-1 h-12"></div>
<div className="bg-white rounded border border-gray-100 p-1 h-12"><div className="h-3 w-full bg-purple-100 rounded mt-4"></div></div>
<div className="bg-white rounded border border-gray-100 p-1 h-12"></div>
<div className="bg-white rounded border border-gray-100 p-1 h-12"></div>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
<div className="w-full md:w-1/2">
<div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">👥 Client Management</h3>
<p className="text-slate-600 leading-relaxed text-base">
                            Keep a detailed history of every client. Access their contact info, past appointments, preferred services, and personal notes. Build stronger relationships and increase repeat visits.
                        </p>
</div>
<div className="w-full md:w-1/2">

<div className="bg-white rounded-2xl border border-gray-200 p-1 aspect-[4/3] shadow-md flex flex-col overflow-hidden">
<div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
<div className="h-6 w-32 bg-gray-200 rounded-md"></div>
<div className="h-6 w-20 bg-teal-100 rounded-full"></div>
</div>
<div className="flex-1 overflow-hidden p-2 space-y-2">

<div className="p-3 bg-white border border-gray-100 rounded-xl flex items-center gap-4 hover:bg-gray-50 transition-colors">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium text-sm">JD</div>
<div className="flex-1">
<div className="h-3 w-24 bg-slate-700 rounded mb-1.5"></div>
<div className="h-2 w-32 bg-gray-300 rounded"></div>
</div>
<div className="h-4 w-12 bg-emerald-100 rounded-full"></div>
</div>

<div className="p-3 bg-white border border-gray-100 rounded-xl flex items-center gap-4 hover:bg-gray-50 transition-colors">
<div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-medium text-sm">AM</div>
<div className="flex-1">
<div className="h-3 w-20 bg-slate-700 rounded mb-1.5"></div>
<div className="h-2 w-28 bg-gray-300 rounded"></div>
</div>
<div className="h-4 w-12 bg-emerald-100 rounded-full"></div>
</div>

<div className="p-3 bg-white border border-gray-100 rounded-xl flex items-center gap-4 hover:bg-gray-50 transition-colors">
<div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-medium text-sm">RK</div>
<div className="flex-1">
<div className="h-3 w-28 bg-slate-700 rounded mb-1.5"></div>
<div className="h-2 w-24 bg-gray-300 rounded"></div>
</div>
<div className="h-4 w-16 bg-gray-100 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
<div className="w-full md:w-1/2">
<div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">🛠 Service Management</h3>
<p className="text-slate-600 leading-relaxed text-base">
                            Organize your offerings into categories. Set pricing, duration, and assign which team members can perform specific services. Create add-ons to boost your average ticket size.
                        </p>
</div>
<div className="w-full md:w-1/2">

<div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 aspect-[4/3] shadow-inner grid grid-cols-2 gap-4">
<div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
<div className="w-full h-20 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
<iconify-icon className="text-gray-300 text-2xl" icon="solar:scissors-linear"></iconify-icon>
</div>
<div className="h-3 w-3/4 bg-slate-700 rounded mb-2"></div>
<div className="flex justify-between items-center">
<div className="h-2 w-10 bg-gray-300 rounded"></div>
<div className="h-4 w-12 bg-teal-100 rounded"></div>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
<div className="w-full h-20 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
<iconify-icon className="text-gray-300 text-2xl" icon="solar:cosmetic-linear"></iconify-icon>
</div>
<div className="h-3 w-1/2 bg-slate-700 rounded mb-2"></div>
<div className="flex justify-between items-center">
<div className="h-2 w-12 bg-gray-300 rounded"></div>
<div className="h-4 w-12 bg-teal-100 rounded"></div>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
<div className="w-full h-20 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
<iconify-icon className="text-gray-300 text-2xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div className="h-3 w-2/3 bg-slate-700 rounded mb-2"></div>
<div className="flex justify-between items-center">
<div className="h-2 w-10 bg-gray-300 rounded"></div>
<div className="h-4 w-12 bg-teal-100 rounded"></div>
</div>
</div>
<div className="bg-transparent border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-gray-400 gap-2 cursor-pointer hover:bg-gray-100 transition-colors">
<iconify-icon className="text-2xl" icon="solar:add-circle-linear"></iconify-icon>
<span className="text-xs font-medium">Add Service</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
<div className="w-full md:w-1/2">
<div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">📊 Statistics &amp; Analytics</h3>
<p className="text-slate-600 leading-relaxed text-base">
                            Stop guessing and start knowing. Track your daily, weekly, and monthly revenue. Understand which services are most popular and identify your busiest times to optimize staffing.
                        </p>
</div>
<div className="w-full md:w-1/2">

<div className="bg-white rounded-2xl border border-gray-200 p-6 aspect-[4/3] shadow-lg flex flex-col gap-4">
<div className="h-5 w-32 bg-slate-800 rounded mb-2"></div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-teal-50 p-4 rounded-xl">
<div className="text-xs text-teal-700 font-medium mb-1">Total Revenue</div>
<div className="h-6 w-24 bg-gradient-to-r from-teal-500 to-emerald-400 rounded"></div>
</div>
<div className="bg-emerald-50 p-4 rounded-xl">
<div className="text-xs text-emerald-700 font-medium mb-1">Bookings</div>
<div className="h-6 w-16 bg-emerald-500 rounded"></div>
</div>
</div>
<div className="flex-1 border border-gray-100 rounded-xl p-4 flex items-end gap-2 relative mt-2">

<div className="w-full bg-gray-100 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-gray-200 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-teal-200 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-teal-400 rounded-t-sm h-[70%]"></div>
<div className="w-full bg-emerald-500 rounded-t-sm h-[90%] relative">
<div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded">Peak</div>
</div>
<div className="w-full bg-gray-200 rounded-t-sm h-[60%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-br from-blue-50/50 via-teal-50/40 to-emerald-50/50 border-y border-gray-100" id="industries">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                    Built for your industry
                </h2>
<p className="text-lg text-slate-600">
                    Customizable to fit the unique needs of different service-based businesses.
                </p>
</div>

<div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 max-w-4xl mx-auto">
<div className="px-6 py-3 rounded-full border border-gray-200 bg-white text-slate-700 font-medium shadow-sm flex items-center gap-2 cursor-pointer hover:border-teal-500 hover:text-teal-600 transition-all">
<iconify-icon className="text-lg" icon="solar:scissors-linear"></iconify-icon> Barbers &amp; Salons
                </div>
<div className="px-6 py-3 rounded-full border border-gray-200 bg-white text-slate-700 font-medium shadow-sm flex items-center gap-2 cursor-pointer hover:border-teal-500 hover:text-teal-600 transition-all">
<iconify-icon className="text-lg" icon="solar:heart-pulse-linear"></iconify-icon> Clinics &amp; Spa
                </div>
<div className="px-6 py-3 rounded-full border border-teal-500 bg-teal-50 text-teal-700 font-medium shadow-sm flex items-center gap-2 cursor-pointer transition-all ring-1 ring-teal-500">
<iconify-icon className="text-lg" icon="solar:dumbbell-linear"></iconify-icon> Gyms &amp; Fitness
                </div>
<div className="px-6 py-3 rounded-full border border-gray-200 bg-white text-slate-700 font-medium shadow-sm flex items-center gap-2 cursor-pointer hover:border-teal-500 hover:text-teal-600 transition-all">
<iconify-icon className="text-lg" icon="solar:diploma-linear"></iconify-icon> Tutors &amp; Coaches
                </div>
<div className="px-6 py-3 rounded-full border border-gray-200 bg-white text-slate-700 font-medium shadow-sm flex items-center gap-2 cursor-pointer hover:border-teal-500 hover:text-teal-600 transition-all">
<iconify-icon className="text-lg" icon="solar:wheel-linear"></iconify-icon> Car Services
                </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="bg-slate-900 rounded-2xl p-6 aspect-[9/16] shadow-xl border border-slate-800 flex flex-col items-center justify-start transform transition-transform hover:-translate-y-2">
<div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 mt-4 mb-4 flex items-center justify-center">
<iconify-icon className="text-2xl text-white" icon="solar:scissors-linear"></iconify-icon>
</div>
<div className="h-4 w-32 bg-white/20 rounded mb-8"></div>
<div className="w-full space-y-3">
<div className="h-12 w-full bg-white/10 rounded-xl border border-white/5"></div>
<div className="h-12 w-full bg-white/10 rounded-xl border border-white/5"></div>
<div className="h-12 w-full bg-white/10 rounded-xl border border-white/5"></div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 aspect-[9/16] shadow-xl border border-gray-200 flex flex-col items-center justify-start transform scale-105 z-10 relative">
<div className="absolute top-4 right-4 bg-teal-100 text-teal-700 text-[10px] px-2 py-1 rounded font-semibold uppercase tracking-wider">Preview</div>
<div className="w-16 h-16 rounded-full bg-teal-50 border border-teal-100 mt-4 mb-4 flex items-center justify-center">
<iconify-icon className="text-2xl text-teal-600" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<div className="h-4 w-32 bg-slate-800 rounded mb-8"></div>
<div className="w-full space-y-3">
<div className="h-12 w-full bg-white rounded-xl border border-gray-200 shadow-sm flex items-center px-4">
<div className="w-4 h-4 rounded-full border border-gray-300"></div>
<div className="ml-3 h-2 w-20 bg-gray-300 rounded"></div>
</div>
<div className="h-12 w-full bg-teal-50 rounded-xl border border-teal-200 shadow-sm flex items-center px-4">
<div className="w-4 h-4 rounded-full bg-teal-600 flex items-center justify-center"><div className="w-1.5 h-1.5 bg-white rounded-full"></div></div>
<div className="ml-3 h-2 w-24 bg-teal-600 rounded"></div>
</div>
<div className="h-12 w-full bg-white rounded-xl border border-gray-200 shadow-sm flex items-center px-4">
<div className="w-4 h-4 rounded-full border border-gray-300"></div>
<div className="ml-3 h-2 w-16 bg-gray-300 rounded"></div>
</div>
</div>
<div className="mt-auto w-full h-12 bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl flex items-center justify-center text-white text-sm font-medium">Book Now</div>
</div>

<div className="bg-amber-50 rounded-2xl p-6 aspect-[9/16] shadow-xl border border-amber-100 flex flex-col items-center justify-start transform transition-transform hover:-translate-y-2">
<div className="w-16 h-16 rounded-full bg-amber-500 mt-4 mb-4 flex items-center justify-center shadow-lg shadow-amber-500/30">
<iconify-icon className="text-2xl text-white" icon="solar:dumbbell-linear"></iconify-icon>
</div>
<div className="h-4 w-32 bg-amber-900/80 rounded mb-8"></div>
<div className="w-full space-y-3">
<div className="h-16 w-full bg-white rounded-xl border border-amber-200 shadow-sm flex flex-col justify-center px-4">
<div className="h-2 w-20 bg-amber-900/50 rounded mb-2"></div>
<div className="h-2 w-12 bg-amber-500 rounded"></div>
</div>
<div className="h-16 w-full bg-white rounded-xl border border-amber-200 shadow-sm flex flex-col justify-center px-4">
<div className="h-2 w-24 bg-amber-900/50 rounded mb-2"></div>
<div className="h-2 w-16 bg-amber-500 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                    Simple pricing for growing businesses
                </h2>
<p className="text-lg text-slate-600">
                    No hidden fees. No complicated tiers. Just pick the plan that fits your team size.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

<div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
<h3 className="text-xl font-semibold text-slate-900">Basic</h3>
<p className="text-sm text-slate-500 mt-2">Perfect for independent professionals.</p>
<div className="my-6">
<span className="text-4xl font-semibold tracking-tight text-slate-900">$15</span>
<span className="text-slate-500 text-sm">/month</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-600">
<li className="flex items-center gap-3"><iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> 1 Staff member</li>
<li className="flex items-center gap-3"><iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> Unlimited bookings</li>
<li className="flex items-center gap-3"><iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> Basic online booking page</li>
<li className="flex items-center gap-3 text-slate-400"><iconify-icon className="text-gray-300 text-lg" icon="solar:close-circle-linear"></iconify-icon> Advanced analytics</li>
</ul>
<a className="block w-full text-center bg-white border border-gray-300 hover:bg-gray-50 text-slate-700 py-3 rounded-xl font-medium transition-colors" href="#contact">Start Free Trial</a>
</div>

<div className="bg-white rounded-2xl p-8 border-2 border-teal-500 shadow-xl relative transform md:-translate-y-4 z-10">
<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase shadow-sm">Most Popular</div>
<h3 className="text-xl font-semibold text-slate-900">Team</h3>
<p className="text-sm text-slate-500 mt-2">For small businesses with multiple staff.</p>
<div className="my-6">
<span className="text-4xl font-semibold tracking-tight text-slate-900">$39</span>
<span className="text-slate-500 text-sm">/month</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-600">
<li className="flex items-center gap-3"><iconify-icon className="text-teal-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> Up to 5 Staff members</li>
<li className="flex items-center gap-3"><iconify-icon className="text-teal-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> Custom branded booking page</li>
<li className="flex items-center gap-3"><iconify-icon className="text-teal-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> Automated SMS reminders</li>
<li className="flex items-center gap-3"><iconify-icon className="text-teal-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> Full statistics dashboard</li>
</ul>
<a className="block w-full text-center bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white py-3 rounded-xl font-medium transition-all duration-300 shadow-sm" href="#contact">Start Free Trial</a>
</div>

<div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
<h3 className="text-xl font-semibold text-slate-900">Custom</h3>
<p className="text-sm text-slate-500 mt-2">For larger clinics, chains, or specific needs.</p>
<div className="my-6">
<span className="text-3xl font-semibold tracking-tight text-slate-900">Let's talk</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-600">
<li className="flex items-center gap-3"><iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> Unlimited staff</li>
<li className="flex items-center gap-3"><iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> Multi-location support</li>
<li className="flex items-center gap-3"><iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> Dedicated account manager</li>
<li className="flex items-center gap-3"><iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> API Access</li>
</ul>
<a className="block w-full text-center bg-white border border-gray-300 hover:bg-gray-50 text-slate-700 py-3 rounded-xl font-medium transition-colors" href="#contact">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

<div className="w-full lg:w-5/12 flex flex-col justify-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                        Ready to digitize your business?
                    </h2>
<p className="text-lg text-slate-600 mb-8">
                        Request a demo today. Our team will walk you through the platform and show you exactly how Booki can help your specific business grow.
                    </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:stopwatch-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-slate-900">Quick Setup</h4>
<p className="text-sm text-slate-500">Go live in less than 24 hours.</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-slate-900">No Commitment</h4>
<p className="text-sm text-slate-500">14-day free trial, cancel anytime.</p>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-7/12">
<div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-6 sm:p-10">
<form className="space-y-5">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
<input className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all bg-gray-50 hover:bg-white" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
<input className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all bg-gray-50 hover:bg-white" placeholder="john@example.com" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
<input className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all bg-gray-50 hover:bg-white" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">City *</label>
<input className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all bg-gray-50 hover:bg-white" placeholder="New York" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Business Type *</label>
<div className="relative">
<select className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all bg-gray-50 hover:bg-white appearance-none text-slate-700" required="">
<option disabled="" selected="" value="">Select your industry</option>
<option value="barber">Barbershop / Salon</option>
<option value="clinic">Clinic / Medical</option>
<option value="gym">Gym / Fitness Center</option>
<option value="training">Training / Coaching</option>
<option value="auto">Auto Repair / Car Wash</option>
<option value="other">Other</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Message (Optional)</label>
<textarea className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all bg-gray-50 hover:bg-white resize-none" placeholder="Tell us a bit about your current challenges..." rows="3"></textarea>
</div>
<button className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white py-3.5 rounded-xl text-base font-medium shadow-sm transition-all duration-300 mt-2" type="submit">
                                Request a Demo
                            </button>
<p className="text-xs text-center text-slate-500 mt-4">By submitting this form, you agree to our Terms of Service and Privacy Policy.</p>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-gray-50 py-12 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-2xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Booki</span>
</div>
<div className="flex flex-wrap justify-center items-center gap-6 text-sm font-medium text-slate-600">
<a className="hover:text-teal-600 transition-colors flex items-center gap-2" href="mailto:hello@booki.app">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
                    hello@booki.app
                </a>
<a className="hover:text-emerald-600 transition-colors flex items-center gap-2" href="#">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear"></iconify-icon>
                    WhatsApp Support
                </a>
</div>
<div className="text-sm text-slate-400">
                © 2023 Booki Inc. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
