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



        document.getElementById('year').textContent = new Date().getFullYear();
    
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
      

<header className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-slate-200/50 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-300">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600 shadow-sm shadow-teal-600/20 group-hover:scale-105 transition-transform duration-300">
<iconify-icon className="text-white text-lg" icon="solar:heart-angle-linear"></iconify-icon>
</div>
<a className="text-lg font-medium tracking-tighter text-slate-900 ml-1" href="#">
                        ALANO
                    </a>
<span className="hidden sm:inline-block text-xs font-normal text-slate-400 tracking-tight border-l border-slate-200 pl-3 ml-1">
                        Brookings, SD
                    </span>
</div>
<nav className="hidden md:flex items-center gap-8 rounded-full bg-white/50 px-6 py-2 ring-1 ring-slate-900/5 shadow-sm">
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="#mission">Mission</a>
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="#meetings">Meetings</a>
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="#location">Location</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="#contact">Contact</a>
<a className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-[0_1px_2px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,1)] hover:bg-slate-800 transition-all hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2" href="#donate">
                        Donate
                    </a>
</div>
</div>
</div>
</header>
<main className="flex-grow pt-16">

<section className="relative overflow-hidden pt-20 pb-24 sm:pt-32 sm:pb-32">

<div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl">
<div className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-teal-400/20 to-emerald-400/20 opacity-40" style={{clipPath: 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)'}}></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
<div className="inline-flex items-center rounded-full border border-teal-200/60 bg-teal-50/50 backdrop-blur-md px-3 py-1 text-xs font-medium text-teal-700 shadow-sm mb-8 ring-1 ring-teal-900/5 animate-fade-in">
<span className="flex h-2 w-2 rounded-full bg-teal-500 mr-2 animate-pulse"></span>
                    A Safe Harbor in Brookings
                </div>
<h1 className="mx-auto max-w-4xl text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tighter text-slate-900 mb-8 drop-shadow-sm">
                    Support, Fellowship, and a Path to <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-600 via-teal-500 to-emerald-500">Recovery</span>.
                </h1>
<p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-500 mb-12 leading-relaxed font-normal">
                    The Alano Society of Brookings provides a secure, substance-free environment dedicated to 12-step recovery meetings, personal growth, and long-term sobriety.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-medium text-white shadow-[0_2px_12px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.15)] ring-1 ring-slate-900 hover:bg-slate-800 transition-all hover:-translate-y-0.5" href="#meetings">
                        View Meeting Schedule
                        <iconify-icon className="ml-2 text-base opacity-80" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 transition-all hover:-translate-y-0.5" href="#location">
                        Find Our Location
                        <iconify-icon className="ml-2 text-base text-slate-400" icon="solar:map-point-linear"></iconify-icon>
</a>
</div>

<div className="relative mx-auto max-w-5xl rounded-[2rem] bg-white/40 p-2 shadow-[0_8px_40px_rgba(0,0,0,0.04)] backdrop-blur-xl ring-1 ring-slate-900/5">
<div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent"></div>
<div className="rounded-[1.5rem] bg-white ring-1 ring-slate-200/50 p-4 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-8 text-left shadow-sm">
<div className="flex items-center gap-5 w-full md:w-auto">
<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-50 to-slate-50 ring-1 ring-slate-200/60 shadow-inner flex-shrink-0">
<iconify-icon className="text-2xl text-teal-600" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium tracking-tight text-slate-500 mb-1">Upcoming Feature</h3>
<p className="text-lg font-medium tracking-tight text-slate-900">Today's Open Meetings</p>
</div>
</div>
<div className="w-full md:w-auto flex flex-col gap-3">
<div className="flex items-center justify-between gap-8 rounded-xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200/60">
<span className="text-sm font-medium text-slate-700 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:users-group-rounded-linear"></iconify-icon>
                                    Noon Group
                                </span>
<span className="text-xs font-medium text-teal-700 bg-teal-50 px-2 py-1 rounded-md">12:00 PM</span>
</div>
<div className="flex items-center justify-between gap-8 rounded-xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200/60">
<span className="text-sm font-medium text-slate-700 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:moon-stars-linear"></iconify-icon>
                                    Evening Step
                                </span>
<span className="text-xs font-medium text-teal-700 bg-teal-50 px-2 py-1 rounded-md">7:00 PM</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative z-20" id="mission">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="relative">
<div className="absolute -left-4 top-0 h-12 w-1 bg-teal-500 rounded-r-full"></div>
<h2 className="text-3xl sm:text-4xl font-medium tracking-tighter text-slate-900 mb-6">A Foundation for <br/>Community Recovery</h2>
<div className="space-y-6 text-base text-slate-500 leading-relaxed font-normal">
<p>
                                The Alano Society is dedicated to providing a safe, supportive, and substance-free environment for 12-step recovery meetings and related activities.
                            </p>
<p>
                                We believe in the power of community. Our organization promotes fellowship, personal growth, and long-term sobriety within the Brookings community, ensuring that anyone seeking help has a welcoming place to go.
                            </p>
</div>
<div className="mt-10 pt-8 border-t border-slate-100 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-50 ring-1 ring-slate-200">
<iconify-icon className="text-xl text-slate-700" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900 tracking-tight">Registered Non-Profit</span>
<span className="text-xs text-slate-500">Official 501(c)(3) Organization</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-teal-50 to-transparent opacity-50 blur-2xl -z-10 rounded-full"></div>
<div className="bg-white rounded-[1.5rem] p-8 ring-1 ring-slate-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:ring-slate-300 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-slate-300" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="h-12 w-12 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/50 ring-1 ring-slate-200/80 flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:home-smile-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-900 mb-2">Safe Space</h3>
<p className="text-sm text-slate-500 font-normal leading-relaxed">A consistent, reliable, and substance-free environment for all attendees.</p>
</div>
<div className="bg-white rounded-[1.5rem] p-8 ring-1 ring-slate-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:ring-slate-300 transition-all duration-300 hover:-translate-y-1 sm:mt-8 group relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-slate-300" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="h-12 w-12 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/50 ring-1 ring-slate-200/80 flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-900 mb-2">Fellowship</h3>
<p className="text-sm text-slate-500 font-normal leading-relaxed">Connecting individuals on similar journeys to build a strong support network.</p>
</div>
<div className="bg-white rounded-[1.5rem] p-8 ring-1 ring-slate-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:ring-slate-300 transition-all duration-300 hover:-translate-y-1 sm:-mt-8 group relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-slate-300" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="h-12 w-12 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/50 ring-1 ring-slate-200/80 flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:hand-stars-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-900 mb-2">12-Step Focus</h3>
<p className="text-sm text-slate-500 font-normal leading-relaxed">Hosting various meetings dedicated to the principles of 12-step recovery programs.</p>
</div>
<div className="bg-white rounded-[1.5rem] p-8 ring-1 ring-slate-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:ring-slate-300 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-slate-300" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="h-12 w-12 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/50 ring-1 ring-slate-200/80 flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-900 mb-2">Personal Growth</h3>
<p className="text-sm text-slate-500 font-normal leading-relaxed">Fostering an atmosphere where long-term sobriety and healing can flourish.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative border-y border-slate-200/50" id="meetings">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tighter text-slate-900 mb-4">Meeting Information</h2>
<p className="text-base text-slate-500 font-normal leading-relaxed">
                        We host multiple meetings throughout the week. Our doors are open to anyone who has a desire to stop drinking or using.
                    </p>
</div>

<div className="mx-auto max-w-5xl bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-slate-200/60 overflow-hidden text-left flex flex-col md:flex-row">

<div className="w-full md:w-2/5 bg-slate-900 p-8 sm:p-10 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.15),transparent_50%)]"></div>
<div className="relative z-10">
<div className="flex-shrink-0 h-12 w-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white mb-8 backdrop-blur-sm">
<iconify-icon className="text-2xl" icon="solar:calendar-mark-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-4">Current Schedule</h3>
<p className="text-sm text-slate-300 font-normal leading-relaxed mb-8">
                                Our meeting schedule includes both open and closed meetings. Open meetings welcome anyone interested in the program, while closed meetings are reserved for those with a desire to stop.
                            </p>
<div className="space-y-4 pt-8 border-t border-white/10">
<h4 className="text-xs font-medium text-slate-400 uppercase tracking-wider">What to expect</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-300 font-normal">
<iconify-icon className="mt-0.5 text-teal-400 text-base flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                        A welcoming, judgment-free atmosphere.
                                    </li>
<li className="flex items-start gap-3 text-sm text-slate-300 font-normal">
<iconify-icon className="mt-0.5 text-teal-400 text-base flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                        Strict respect for anonymity and privacy.
                                    </li>
<li className="flex items-start gap-3 text-sm text-slate-300 font-normal">
<iconify-icon className="mt-0.5 text-teal-400 text-base flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                        Opportunities to connect with sponsors.
                                    </li>
</ul>
</div>
</div>
</div>

<div className="w-full md:w-3/5 p-8 sm:p-10 bg-white">
<div className="flex items-center justify-between mb-8">
<h3 className="text-base font-medium text-slate-900 tracking-tight">Daily Overview</h3>
<span className="inline-flex items-center rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-200">Weekly</span>
</div>
<div className="space-y-3">

<div className="group flex items-center justify-between p-4 rounded-2xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-md hover:border-slate-200 hover:ring-1 hover:ring-slate-200 transition-all cursor-default">
<div className="flex items-center gap-4">
<div className="flex flex-col items-center justify-center h-12 w-12 rounded-xl bg-white ring-1 ring-slate-200/80 shadow-sm text-slate-700">
<span className="text-xs font-medium">MON</span>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Open Discussion</p>
<p className="text-xs text-slate-500">Main Hall</p>
</div>
</div>
<div className="text-right">
<span className="text-sm font-medium text-slate-900 block">12:00 PM</span>
<span className="text-xs text-teal-600 font-medium">Open</span>
</div>
</div>

<div className="group flex items-center justify-between p-4 rounded-2xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-md hover:border-slate-200 hover:ring-1 hover:ring-slate-200 transition-all cursor-default">
<div className="flex items-center gap-4">
<div className="flex flex-col items-center justify-center h-12 w-12 rounded-xl bg-white ring-1 ring-slate-200/80 shadow-sm text-slate-700">
<span className="text-xs font-medium">WED</span>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Big Book Study</p>
<p className="text-xs text-slate-500">Library Room</p>
</div>
</div>
<div className="text-right">
<span className="text-sm font-medium text-slate-900 block">7:00 PM</span>
<span className="text-xs text-amber-600 font-medium">Closed</span>
</div>
</div>

<div className="group flex items-center justify-between p-4 rounded-2xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-md hover:border-slate-200 hover:ring-1 hover:ring-slate-200 transition-all cursor-default">
<div className="flex items-center gap-4">
<div className="flex flex-col items-center justify-center h-12 w-12 rounded-xl bg-white ring-1 ring-slate-200/80 shadow-sm text-slate-700">
<span className="text-xs font-medium">FRI</span>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Speaker Meeting</p>
<p className="text-xs text-slate-500">Main Hall</p>
</div>
</div>
<div className="text-right">
<span className="text-sm font-medium text-slate-900 block">8:00 PM</span>
<span className="text-xs text-teal-600 font-medium">Open</span>
</div>
</div>
</div>
<div className="mt-6 p-4 rounded-xl bg-teal-50/50 border border-teal-100 flex items-start gap-3">
<iconify-icon className="text-teal-600 text-lg mt-0.5" icon="solar:info-circle-linear"></iconify-icon>
<p className="text-xs text-teal-800 leading-relaxed">
                                Please visit our facility or check our community board for the complete and most up-to-date schedule. Times and formats may vary slightly.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="location">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
<div>
<h2 className="text-3xl sm:text-4xl font-medium tracking-tighter text-slate-900 mb-6">Visit Us</h2>
<p className="text-base text-slate-500 mb-12 font-normal leading-relaxed max-w-lg">
                            We are conveniently located in Brookings, South Dakota. If you need support, our doors are open during scheduled meeting times.
                        </p>
<div className="space-y-6">
<div className="group flex items-start gap-5 p-5 rounded-2xl bg-white border border-slate-100 ring-1 ring-slate-900/5 shadow-sm hover:shadow-md transition-shadow">
<div className="h-12 w-12 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-teal-600 flex-shrink-0 group-hover:scale-105 transition-transform">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium tracking-tight text-slate-900">Address</h3>
<p className="mt-2 text-sm text-slate-500 font-normal leading-relaxed">
                                        Alano Society<br/>
                                        135 1st Ave S<br/>
                                        Brookings, SD 57006
                                    </p>
</div>
</div>
<div className="group flex items-start gap-5 p-5 rounded-2xl bg-white border border-slate-100 ring-1 ring-slate-900/5 shadow-sm hover:shadow-md transition-shadow">
<div className="h-12 w-12 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-teal-600 flex-shrink-0 group-hover:scale-105 transition-transform">
<iconify-icon className="text-xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium tracking-tight text-slate-900">Organization Info</h3>
<p className="mt-2 text-sm text-slate-500 font-normal leading-relaxed">
                                        EIN: 51-0175538<br/>
                                        Registered 501(c)(3) Organization
                                    </p>
</div>
</div>
</div>
</div>

<div className="h-[480px] w-full bg-slate-50 rounded-[2rem] border border-slate-200/60 overflow-hidden relative flex items-center justify-center shadow-inner group">

<div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-60"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-100/90 via-slate-50/50 to-transparent"></div>

<div className="relative text-center p-8 bg-white/90 backdrop-blur-xl rounded-[1.5rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] ring-1 ring-slate-200/50 max-w-[280px] w-full transform transition-transform group-hover:-translate-y-2 duration-500">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-white border border-slate-100 shadow-md flex items-center justify-center">
<iconify-icon className="text-2xl text-teal-600" icon="solar:map-bold-duotone"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-900 mt-4 mb-1">Brookings, SD</h3>
<p className="text-sm text-slate-500 font-normal mb-6">135 1st Ave S</p>
<a className="w-full inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white hover:bg-slate-800 transition-all shadow-[0_2px_8px_rgba(0,0,0,0.1)]" href="https://maps.google.com/?q=135+1st+Ave+S,+Brookings,+SD+57006" rel="noopener noreferrer" target="_blank">
                                Get Directions
                                <iconify-icon className="ml-2 text-lg opacity-80" icon="solar:routing-2-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-slate-950" id="donate">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/10 blur-[100px]"></div>
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tighter text-white mb-6">Support Our Mission</h2>
<p className="text-base text-slate-400 mb-10 font-normal max-w-2xl mx-auto leading-relaxed">
                    As a non-profit organization, we rely on the generosity of the community to keep our doors open. Your contribution helps maintain a safe haven for recovery in Brookings.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-sm font-medium text-slate-900 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:bg-slate-100 transition-all hover:scale-105">
<iconify-icon className="mr-2 text-lg text-slate-700" icon="solar:wallet-linear"></iconify-icon>
                        Make a Donation
                    </button>
<span className="text-xs text-slate-500 mt-4 sm:mt-0 sm:ml-4">All donations are tax-deductible.</span>
</div>
</div>
</section>
</main>

<footer className="bg-slate-950 pt-16 pb-8 border-t border-slate-900/50 relative overflow-hidden">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12 border-b border-slate-800/60 pb-12">
<div className="md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600/20 ring-1 ring-teal-500/30">
<iconify-icon className="text-teal-400 text-lg" icon="solar:heart-angle-linear"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tighter text-white">
                            ALANO
                        </span>
</div>
<p className="text-sm text-slate-400 max-w-sm leading-relaxed font-normal">
                        Providing a safe, supportive, and substance-free environment for 12-step recovery meetings and related activities in Brookings, South Dakota.
                    </p>
</div>
<div>
<h3 className="text-sm font-medium tracking-tight text-slate-200 mb-5">Quick Links</h3>
<ul className="space-y-3">
<li><a className="text-sm text-slate-400 font-normal hover:text-teal-400 transition-colors" href="#mission">Our Mission</a></li>
<li><a className="text-sm text-slate-400 font-normal hover:text-teal-400 transition-colors" href="#meetings">Meetings</a></li>
<li><a className="text-sm text-slate-400 font-normal hover:text-teal-400 transition-colors" href="#location">Location &amp; Contact</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-medium tracking-tight text-slate-200 mb-5">Organization Info</h3>
<ul className="space-y-4 text-sm text-slate-400 font-normal">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 flex-shrink-0 text-slate-500" icon="solar:map-point-linear"></iconify-icon>
<span>135 1st Ave S<br/>Brookings, SD 57006</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="flex-shrink-0 text-slate-500" icon="solar:document-text-linear"></iconify-icon>
<span>EIN: 51-0175538</span>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-normal">
<p>© <span id="year"></span> Alano Society of Brookings. All rights reserved.</p>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:shield-check-linear"></iconify-icon>
<p>A registered 501(c)(3) non-profit organization.</p>
</div>
</div>
</div>
</footer>


    </>
  );
}
