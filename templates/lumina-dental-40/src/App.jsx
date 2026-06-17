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
      

<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:sparkles" data-inline="false" data-width="18"></span>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900 group-hover:opacity-80 transition-opacity">
                    Lumina<span className="text-slate-400 font-normal">Dental</span>
</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-teal-600 transition-colors" href="#services">Services</a>
<a className="hover:text-teal-600 transition-colors" href="#technology">Technology</a>
<a className="hover:text-teal-600 transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-teal-600 transition-colors" href="#faq">FAQ</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900" href="tel:+15550123456">
<span className="iconify" data-icon="lucide:phone" data-width="16"></span>
                    (555) 012-3456
                </a>
<a className="hidden md:inline-flex items-center justify-center h-9 px-4 text-sm font-medium text-white transition-colors bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2" href="#book">
                    Book Online
                </a>

<button className="md:hidden p-2 text-slate-600">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
<div className="absolute top-0 right-0 w-96 h-96 bg-teal-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
<div className="absolute top-0 right-40 w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
                        Accepting New Patients for 2024
                    </div>
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                        Modern dental care that makes you smile with confidence.
                    </h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">
                        Experience pain-free dentistry with the latest technology in Seattle. From routine checkups to complete smile makeovers, we prioritize your comfort.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="inline-flex items-center justify-center h-12 px-8 text-base font-medium text-white transition-all bg-teal-600 rounded-lg hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-600/20 focus:outline-none ring-offset-2 focus:ring-2 ring-teal-500" href="#book">
                            Schedule Appointment
                        </a>
<a className="inline-flex items-center justify-center h-12 px-8 text-base font-medium text-slate-700 transition-all bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 focus:outline-none" href="#services">
                            View Services
                        </a>
</div>

<div className="flex items-center gap-6 text-sm text-slate-500">
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<img alt="Patient" className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1"/>
<img alt="Patient" className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=5"/>
<img alt="Patient" className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=8"/>
</div>
<span className="font-medium text-slate-700">500+ Reviews</span>
</div>
<div className="w-px h-4 bg-slate-200"></div>
<div className="flex items-center gap-1">
<span className="iconify text-teal-500" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="font-medium text-slate-700">4.9/5.0 Rating</span>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-100 aspect-[4/5] lg:aspect-square">
<img alt="Smiling Patient" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
<span className="iconify" data-icon="lucide:calendar-check" data-width="20"></span>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Next Available Appointment</p>
<p className="text-xs text-slate-500 mt-1">Tomorrow at 10:00 AM</p>
</div>
<div className="ml-auto">
<button className="text-teal-600 hover:text-teal-700">
<span className="iconify" data-icon="lucide:arrow-right-circle" data-width="24"></span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-slate-400 uppercase tracking-wider mb-6">Trusted by patients with insurance from</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold tracking-tight text-slate-800">Delta<span className="font-light">Dental</span></span>
<span className="text-xl font-bold tracking-tight text-slate-800">Cigna</span>
<span className="text-xl font-bold tracking-tight text-slate-800">Aetna</span>
<span className="text-xl font-bold tracking-tight text-slate-800">MetLife</span>
<span className="text-xl font-bold tracking-tight text-slate-800">BlueCross</span>
</div>
</div>
</section>

<section className="py-20 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Comprehensive care under one roof</h2>
<p className="text-slate-500">From preventive hygiene to complex restorative solutions, our team of specialists is equipped to handle all your dental needs.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:heart-pulse" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">General Dentistry</h3>
<p className="text-sm text-slate-500 mb-4">Routine exams, cleanings, and preventative care to keep your smile healthy.</p>
<a className="text-sm font-medium text-teal-600 hover:text-teal-700 inline-flex items-center gap-1" href="#">
                        Learn more <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:sparkles" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Cosmetic &amp; Whitening</h3>
<p className="text-sm text-slate-500 mb-4">Veneers, bonding, and professional whitening for a stunning makeover.</p>
<a className="text-sm font-medium text-teal-600 hover:text-teal-700 inline-flex items-center gap-1" href="#">
                        Learn more <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:smile" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Invisalign</h3>
<p className="text-sm text-slate-500 mb-4">Clear aligners to straighten your teeth discreetly without metal braces.</p>
<a className="text-sm font-medium text-teal-600 hover:text-teal-700 inline-flex items-center gap-1" href="#">
                        Learn more <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:shield-alert" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Implants &amp; Emergency</h3>
<p className="text-sm text-slate-500 mb-4">Same-day emergency appointments and permanent tooth replacement.</p>
<a className="text-sm font-medium text-teal-600 hover:text-teal-700 inline-flex items-center gap-1" href="#">
                        Learn more <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 translate-y-8">
<img alt="Clinic Interior" className="rounded-2xl shadow-lg w-full object-cover h-64" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
<div className="p-6 bg-white rounded-2xl shadow-lg border border-slate-100">
<h4 className="text-3xl font-semibold text-teal-600 mb-1">15+</h4>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Years Experience</p>
</div>
</div>
<div className="space-y-4">
<div className="p-6 bg-teal-600 rounded-2xl shadow-lg border border-teal-500 text-white">
<span className="iconify mb-3" data-icon="lucide:award" data-width="24"></span>
<h4 className="font-medium">Top Rated</h4>
<p className="text-sm text-teal-100 opacity-90">Voted Best in City 2023</p>
</div>
<img alt="Technology" className="rounded-2xl shadow-lg w-full object-cover h-64" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">A dental experience designed around <span className="text-teal-600">you</span>.</h2>
<p className="text-lg text-slate-500 mb-8">We understand that visiting the dentist can be stressful. That’s why we’ve reimagined the experience to be transparent, comfortable, and efficient.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 shrink-0 mt-1">
<span className="iconify" data-icon="lucide:check" data-width="14"></span>
</div>
<div>
<h3 className="font-medium text-slate-900">Upfront Pricing</h3>
<p className="text-sm text-slate-500 mt-1">No hidden fees. We verify insurance benefits before your appointment.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 shrink-0 mt-1">
<span className="iconify" data-icon="lucide:check" data-width="14"></span>
</div>
<div>
<h3 className="font-medium text-slate-900">Sedation Options</h3>
<p className="text-sm text-slate-500 mt-1">Nitrous oxide and oral sedation available for anxious patients.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 shrink-0 mt-1">
<span className="iconify" data-icon="lucide:check" data-width="14"></span>
</div>
<div>
<h3 className="font-medium text-slate-900">Advanced 3D Imaging</h3>
<p className="text-sm text-slate-500 mt-1">Digital scanning means no more uncomfortable goop impressions.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">What our patients say</h2>
<p className="text-slate-500">Rated 4.9/5 stars based on 500+ Google Reviews.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 text-slate-600 transition-colors">
<span className="iconify" data-icon="lucide:arrow-left" data-width="20"></span>
</button>
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 text-slate-600 transition-colors">
<span className="iconify" data-icon="lucide:arrow-right" data-width="20"></span>
</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
<div className="flex text-yellow-400 gap-1 mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-slate-700 mb-6 leading-relaxed">"I haven't been to a dentist in 5 years due to anxiety. The team at Lumina made me feel completely at ease. The office is beautiful and the staff is incredibly kind."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-semibold text-sm">SJ</div>
<div>
<p className="text-sm font-semibold text-slate-900">Sarah Jenkins</p>
<p className="text-xs text-slate-400">Invisalign Patient</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
<div className="flex text-yellow-400 gap-1 mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-slate-700 mb-6 leading-relaxed">"State of the art facility. I got a crown done in a single visit with their new scanning technology. No temp crown, no second visit. Highly recommend!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-semibold text-sm">MR</div>
<div>
<p className="text-sm font-semibold text-slate-900">Michael Ross</p>
<p className="text-xs text-slate-400">Restorative Patient</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
<div className="flex text-yellow-400 gap-1 mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-slate-700 mb-6 leading-relaxed">"Best dental experience of my life. The doctors are transparent about costs and don't push unnecessary treatments. Finally found my family dentist."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 font-semibold text-sm">EL</div>
<div>
<p className="text-sm font-semibold text-slate-900">Emily Lawson</p>
<p className="text-xs text-slate-400">Checkup &amp; Clean</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white relative overflow-hidden" id="book">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#99f6e4 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-6">Ready to improve your smile?</h2>
<p className="text-slate-400 text-lg mb-8">Schedule your visit online. For emergencies, please call us directly for immediate assistance.</p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700">
<span className="iconify text-teal-400" data-icon="lucide:map-pin" data-width="24"></span>
</div>
<div>
<p className="font-medium">123 Market Street, Suite 400</p>
<p className="text-sm text-slate-400">Seattle, WA 98101</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700">
<span className="iconify text-teal-400" data-icon="lucide:clock" data-width="24"></span>
</div>
<div>
<p className="font-medium">Mon - Fri: 8:00 AM - 6:00 PM</p>
<p className="text-sm text-slate-400">Saturday: By Appointment</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 lg:p-8 text-slate-900 shadow-2xl">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">First Name</label>
<input className="w-full h-10 px-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Last Name</label>
<input className="w-full h-10 px-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Email</label>
<input className="w-full h-10 px-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" placeholder="jane@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Interest</label>
<div className="relative">
<select className="w-full h-10 px-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all appearance-none bg-white text-slate-600">
<option>General Checkup</option>
<option>Invisalign Consultation</option>
<option>Teeth Whitening</option>
<option>Implants</option>
<option>Other / Emergency</option>
</select>
<div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
</div>
<div className="space-y-3 pt-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Preferred Time</label>
<div className="flex gap-4">
<label className="flex-1 relative cursor-pointer group">
<input checked="" className="custom-check hidden" name="time" type="radio"/>
<div className="h-10 border border-slate-200 rounded-lg flex items-center justify-center text-sm font-medium text-slate-600 transition-all group-hover:border-teal-400">
<span className="iconify hidden mr-2 text-white" data-icon="lucide:check" data-width="14"></span>
<span className="group-hover:text-teal-600 text-slate-600">Morning</span>
</div>
<style>.custom-check:checked + div { background-color: #0f766e; border-color: #0f766e; color: white !important; } .custom-check:checked + div span { display: inline-block; }</style>
</label>
<label className="flex-1 relative cursor-pointer group">
<input className="custom-check hidden" name="time" type="radio"/>
<div className="h-10 border border-slate-200 rounded-lg flex items-center justify-center text-sm font-medium text-slate-600 transition-all group-hover:border-teal-400">
<span className="iconify hidden mr-2 text-white" data-icon="lucide:check" data-width="14"></span>
<span className="group-hover:text-teal-600 text-slate-600">Afternoon</span>
</div>
</label>
</div>
</div>
<button className="w-full h-12 mt-2 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/20 flex items-center justify-center gap-2">
                            Request Appointment
                            <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<p className="text-xs text-center text-slate-400 mt-4">We usually reply within 2 hours during business days.</p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 bg-teal-600 rounded-md flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:sparkles" data-width="14"></span>
</div>
<span className="text-base font-semibold tracking-tight text-slate-900">Lumina</span>
</a>
<p className="text-sm text-slate-500 mb-4">Elevating standards in dental care through technology and compassion.</p>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-teal-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="20"></span></a>
<a className="hover:text-teal-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="20"></span></a>
<a className="hover:text-teal-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Treatments</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-teal-600 transition-colors" href="#">Invisalign</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Veneers</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Implants</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Root Canals</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Patient Info</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-teal-600 transition-colors" href="#">New Patients</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Insurance</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Financing</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Contact</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li>(555) 012-3456</li>
<li>hello@luminadental.com</li>
<li><a className="text-teal-600 font-medium hover:underline" href="#book">Book Online →</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Lumina Dental Care. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="text-xs text-slate-400">Designed by Premium Agency</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
