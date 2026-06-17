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
      

<nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl font-semibold tracking-tighter text-teal-900 uppercase" href="#">
                Oak<span className="text-stone-400 mx-0.5">&amp;</span>Stone
            </a>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-600">
<a className="hover:text-teal-700 transition-colors" href="#services">Services</a>
<a className="hover:text-teal-700 transition-colors" href="#approach">Our Approach</a>
<a className="hover:text-teal-700 transition-colors" href="#insurance">Insurance</a>
<a className="hover:text-teal-700 transition-colors" href="#team">Team</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-800 transition-colors" href="tel:+15550123456">
<svg aria-hidden="true" data-icon="lucide:phone" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    (555) 012-3456
                </a>
<a className="bg-teal-700 hover:bg-teal-800 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md flex items-center gap-2" href="#book">
                    Book Visit
                    <svg aria-hidden="true" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</nav>

<section className="lg:pt-40 lg:pb-32 pt-32 pr-6 pb-20 pl-6">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-xs font-medium tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
                    Accepting New Patients for Fall 2023
                </div>

<h1 className="text-5xl font-medium tracking-tight text-stone-900 leading-[1.1] lg:text-5xl">
                    Elevating your family's <br/>
<span className="text-teal-700">dental experience.</span>
</h1>
<p className="text-lg text-stone-500 max-w-lg leading-relaxed font-normal">
                    A family dental practice designed around comfort, safety, and trust. We treat toddlers, grandparents, and everyone in between with the same gentle touch.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex justify-center items-center px-8 py-3.5 rounded-xl bg-stone-900 text-white font-medium text-sm hover:bg-stone-800 transition-all shadow-sm hover:shadow-lg hover:-translate-y-0.5" href="#book">
                        Book Appointment
                    </a>
<a className="inline-flex justify-center items-center px-8 py-3.5 rounded-xl bg-white border border-stone-200 text-stone-700 font-medium text-sm hover:bg-stone-50 transition-all hover:border-stone-300" href="#insurance">
                        Check Insurance
                    </a>
</div>
<div className="flex items-center gap-4 pt-6 text-sm text-stone-500">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-stone-200 border-2 border-white overflow-hidden">
<img alt="Patient" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="w-8 h-8 rounded-full bg-stone-200 border-2 border-white overflow-hidden">
<img alt="Patient" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="w-8 h-8 rounded-full bg-stone-200 border-2 border-white overflow-hidden">
<img alt="Patient" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
</div>
<div>
<div className="flex text-yellow-500 gap-0.5">
<svg aria-hidden="true" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="font-medium text-stone-900">500+</span> happy neighbors
                    </div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-teal-100/50 to-stone-100/50 rounded-3xl transform rotate-3"></div>
<div className="relative rounded-3xl overflow-hidden shadow-xl shadow-stone-200/50 border border-stone-100 aspect-[4/3]">
<img alt="Friendly Dentist" className="hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://images.unsplash.com/photo-1764816650127-d2ba164ee82d?w=1600&amp;q=80"/>

<div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-stone-100 flex items-start gap-3 max-w-xs">
<div className="p-2 bg-teal-50 text-teal-600 rounded-lg">
<svg aria-hidden="true" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<div>
<p className="text-sm font-semibold text-stone-900">Safety First</p>
<p className="text-xs text-stone-500 mt-0.5">Hospital-grade sterilization protocols.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="services">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-12 gap-12">
<div className="lg:col-span-4 space-y-6">
<h2 className="text-3xl font-medium tracking-tight text-stone-900">Comprehensive care for every stage of life.</h2>
<p className="text-stone-500">We simplify your life by treating the whole family under one roof. No need to drive all over town for specialists.</p>
<a className="inline-flex items-center text-teal-700 font-medium text-sm hover:underline" href="#book">
                        View all services 
                        <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">

<div className="flex gap-4 items-start p-4 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-stone-100 transition-all">
<div className="mt-1 text-teal-600">
<svg aria-hidden="true" data-icon="lucide:baby" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5m1-4h.01"></path><path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6a9 9 0 0 1-17.6 0a2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1m-3 5h.01"></path></g></svg>
</div>
<div className="">
<h4 className="font-medium text-stone-900">Pediatric Dentistry</h4>
<p className="text-sm text-stone-500 mt-1">Gentle cleanings, sealants, and cavity prevention for growing smiles.</p>
</div>
</div>

<div className="flex gap-4 items-start p-4 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-stone-100 transition-all">
<div className="mt-1 text-teal-600">
<svg aria-hidden="true" data-icon="lucide:scan-face" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2m5-3s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="font-medium text-stone-900">Adult Preventative</h4>
<p className="text-sm text-stone-500 mt-1">Routine exams, digital x-rays, and oral cancer screenings.</p>
</div>
</div>

<div className="flex gap-4 items-start p-4 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-stone-100 transition-all">
<div className="mt-1 text-teal-600">
<svg aria-hidden="true" data-icon="lucide:sparkles" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<div className="">
<h4 className="font-medium text-stone-900">Cosmetic &amp; Restoration</h4>
<p className="text-sm text-stone-500 mt-1">Whitening, veneers, and bonding to help you love your smile.</p>
</div>
</div>

<div className="flex gap-4 items-start p-4 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-stone-100 transition-all">
<div className="mt-1 text-teal-600">
<svg aria-hidden="true" data-icon="lucide:crown" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294zM5 21h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="font-medium text-stone-900">Senior Care &amp; Implants</h4>
<p className="text-sm text-stone-500 mt-1">Denture care, implants, and gum health maintenance.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-stone-900 text-stone-200" id="insurance">
<div className="max-w-4xl mx-auto text-center space-y-8">
<span className="inline-block p-3 rounded-full bg-stone-800 text-stone-400 mb-2">
<svg aria-hidden="true" data-icon="lucide:wallet" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></g></svg>
</span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">We maximize your benefits.</h2>
<p className="text-lg text-stone-400 font-light">We are in-network with most major PPO providers and offer transparent pricing for everything else. Our front-desk team handles the paperwork for you.</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 pt-8 grayscale">

<div className="flex items-center justify-center border border-stone-700 rounded-lg h-16 text-lg font-semibold tracking-tight">DELTA</div>
<div className="flex items-center justify-center border border-stone-700 rounded-lg h-16 text-lg font-semibold tracking-tight">CIGNA</div>
<div className="flex items-center justify-center border border-stone-700 rounded-lg h-16 text-lg font-semibold tracking-tight">AETNA</div>
<div className="flex items-center justify-center border border-stone-700 rounded-lg h-16 text-lg font-semibold tracking-tight">METLIFE</div>
</div>
<div className="pt-8">
<p className="text-sm text-stone-500">Don't see your provider? <a className="text-teal-400 hover:text-teal-300 underline underline-offset-4" href="#">Give us a call</a> to check coverage.</p>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white border-y border-stone-100" id="approach">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-4">Dentistry that feels different</h2>
<p className="text-stone-500">We understand that visiting the dentist can be stressful. We've designed every aspect of our clinic to put you at ease.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-teal-100 hover:shadow-md transition-all group">
<div className="w-12 h-12 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-teal-700 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" data-icon="lucide:armchair" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0zm2 2v2m14-2v2"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-3">Comfort Focused</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        From noise-canceling headphones to weighted blankets and a calming environment, your comfort is our clinical priority.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-teal-100 hover:shadow-md transition-all group">
<div className="w-12 h-12 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-teal-700 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" data-icon="lucide:heart-handshake" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-3">Transparent &amp; Honest</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        No surprise bills or unnecessary treatments. We show you exactly what we see and explain all options clearly before we begin.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-teal-100 hover:shadow-md transition-all group">
<div className="w-12 h-12 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-teal-700 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" data-icon="lucide:users" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-3">For the Whole Family</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Whether it's a toddler's first visit or restorative care for seniors, we build long-term relationships with every generation.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-stone-50 pt-24 pr-6 pb-24 pl-6" id="book">
<div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl shadow-stone-200/50 border border-stone-100 overflow-hidden">
<div className="p-8 md:p-10">
<div className="text-center mb-10">
<h2 className="text-2xl font-medium text-stone-900 mb-2">Request an Appointment</h2>
<p className="text-sm text-stone-500">Fill out the form below and we'll contact you within 24 hours to confirm a time that works for you.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-700 uppercase tracking-wide">First Name</label>
<input className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 transition-all text-sm placeholder:text-stone-400" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-700 uppercase tracking-wide">Last Name</label>
<input className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 transition-all text-sm placeholder:text-stone-400" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-700 uppercase tracking-wide">Email</label>
<input className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 transition-all text-sm placeholder:text-stone-400" placeholder="jane@example.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-700 uppercase tracking-wide">Reason for Visit</label>
<div className="relative">
<select className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 transition-all text-sm text-stone-600 appearance-none">
<option>General Checkup &amp; Cleaning</option>
<option>Tooth Pain / Emergency</option>
<option>Cosmetic Consultation</option>
<option>Kids Visit</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
<svg aria-hidden="true" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>

<label className="flex items-start gap-3 cursor-pointer group custom-checkbox">
<div className="relative flex items-center">
<input className="sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-stone-300 rounded bg-white transition-colors flex items-center justify-center group-hover:border-teal-500">
<svg className="w-3.5 h-3.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</div>
<span className="text-xs text-stone-500 leading-snug select-none">I am a new patient to Oak &amp; Stone Dental.</span>
</label>
<button className="w-full py-4 bg-teal-700 hover:bg-teal-800 text-white font-medium rounded-xl shadow-lg shadow-teal-700/20 transition-all hover:-translate-y-0.5 flex justify-center items-center gap-2" type="button">
                        Request Appointment
                        <svg aria-hidden="true" data-icon="lucide:calendar-check" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18M9 16l2 2l4-4"></path></g></svg>
</button>
<p className="text-center text-xs text-stone-400 mt-4">
<svg aria-hidden="true" data-icon="lucide:lock" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
                        Your information is secure and encrypted.
                    </p>
</form>
</div>
<div className="bg-teal-50/50 p-6 border-t border-teal-100 flex items-center justify-between text-xs text-teal-800">
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:map-pin" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
                    123 Maple Ave, Suite 100
                </div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:clock" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                    Mon-Fri: 8am - 6pm
                </div>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-200 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<a className="text-lg font-semibold tracking-tighter text-teal-900 uppercase" href="#">
                    Oak<span className="text-stone-400 mx-0.5">&amp;</span>Stone
                </a>
<p className="text-xs text-stone-400 mt-2">© 2023 Oak &amp; Stone Family Dental.</p>
</div>
<div className="flex gap-6">
<a className="text-stone-400 hover:text-teal-700 transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:facebook" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-stone-400 hover:text-teal-700 transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:instagram" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="text-stone-400 hover:text-teal-700 transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:twitter" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</footer>

    </>
  );
}
