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



// Simple View Switcher to simulate pages in a single file
function switchView(viewId) {
// Hide all views
document.querySelectorAll('.page-view').forEach(el => {
el.classList.add('hidden');
});
// Show target view
document.getElementById(viewId).classList.remove('hidden');
// Scroll to top
window.scrollTo(0, 0);
}

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
      

<nav className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="javascript:switchView('home')">
<div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="lucide:smile" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-slate-900 font-semibold tracking-tighter text-lg group-hover:text-sky-600 transition-colors">TOMASH DENTAL</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-sky-600 transition-colors" href="javascript:switchView('home')">About</a>

<div className="relative group cursor-pointer h-16 flex items-center">
<span className="hover:text-sky-600 transition-colors flex items-center gap-1">
                        Services
                        <iconify-icon className="group-hover:rotate-180 transition-transform duration-200" icon="lucide:chevron-down" width="12"></iconify-icon>
</span>

<div className="absolute top-16 -left-4 w-56 bg-white border border-slate-100 rounded-xl shadow-lg shadow-slate-200/50 p-2 invisible opacity-0 -translate-y-2 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors group/item" href="javascript:switchView('implants')">
<div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
<iconify-icon icon="lucide:hammer" width="14"></iconify-icon>
</div>
<div>
<span className="block text-slate-900 font-medium text-xs">Dental Implants</span>
<span className="block text-slate-400 text-[10px]">Permanent solutions</span>
</div>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors group/item" href="javascript:switchView('invisalign')">
<div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors">
<iconify-icon icon="lucide:sparkles" width="14"></iconify-icon>
</div>
<div>
<span className="block text-slate-900 font-medium text-xs">Invisalign®</span>
<span className="block text-slate-400 text-[10px]">Clear aligners</span>
</div>
</a>
<div className="h-px bg-slate-100 my-1"></div>
<a className="block px-3 py-2 rounded-lg hover:bg-slate-50 text-xs font-medium text-slate-600" href="javascript:switchView('home')">
                            View all services
                        </a>
</div>
</div>
<a className="hover:text-sky-600 transition-colors" href="javascript:switchView('home')">Patients</a>
<a className="hover:text-sky-600 transition-colors" href="#contact" onclick="switchView('home')">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-sky-600" href="tel:+19055550123">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="16"></iconify-icon>
<span>(905) 555-0123</span>
</a>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium py-2.5 px-5 rounded-full transition-all shadow-sm hover:shadow-md flex items-center gap-2" href="#appointment" onclick="switchView('home')">
<span>Book Now</span>
</a>
</div>
</div>
</nav>

<div className="page-view" id="home">

<section className="py-16 md:py-24 overflow-hidden bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
</span>
                            Accepting New Patients in Richmond Hill
                        </div>
<h1 className="md:text-5xl lg:text-7xl leading-[1.1] text-balance text-4xl font-semibold text-slate-900 tracking-tight mb-6">Your confident smile starts right here.</h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">
                            Experience personalized, gentle dentistry designed for your comfort. From routine checkups to cosmetic transformations, Dr. Tomash and the team are here for you.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium py-3 px-6 rounded-lg shadow-lg shadow-sky-600/20 transition-all flex items-center justify-center gap-2" href="#appointment">
<iconify-icon icon="lucide:calendar" strokeWidth="1.5" width="18"></iconify-icon>
                                Book Appointment
                            </a>
<a className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-sm font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2" href="tel:+19055550123">
<iconify-icon icon="lucide:phone-call" strokeWidth="1.5" width="18"></iconify-icon>
                                Call Now
                            </a>
</div>
<div className="mt-10 flex items-center gap-4 text-sm text-slate-500">
<div className="flex -space-x-2">
<div className="w-9 h-9 rounded-full bg-slate-200 border-2 border-white overflow-hidden"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/></div>
<div className="w-9 h-9 rounded-full bg-slate-200 border-2 border-white overflow-hidden"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/></div>
<div className="w-9 h-9 rounded-full bg-slate-200 border-2 border-white overflow-hidden"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/></div>
</div>
<div className="flex items-center gap-2">
<div className="flex text-yellow-400">
<iconify-icon className="fill-transparent" icon="lucide:star" strokeWidth="2" width="14"></iconify-icon>
<iconify-icon className="fill-transparent" icon="lucide:star" strokeWidth="2" width="14"></iconify-icon>
<iconify-icon className="fill-transparent" icon="lucide:star" strokeWidth="2" width="14"></iconify-icon>
<iconify-icon className="fill-transparent" icon="lucide:star" strokeWidth="2" width="14"></iconify-icon>
<iconify-icon className="fill-transparent" icon="lucide:star" strokeWidth="2" width="14"></iconify-icon>
</div>
<span className="font-semibold text-slate-900">5.0</span>
<span className="text-slate-400">(200+ Reviews)</span>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-tr from-sky-50 to-transparent rounded-[2.5rem] opacity-70 blur-2xl"></div>

<img alt="Dental Office Interior" className="relative w-full rounded-[2.5rem] shadow-2xl shadow-slate-200/50 object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1629909615184-74f495363b63?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>

<div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center gap-4 animate-bounce" style={{animationDuration: '4s'}}>
<div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-500">
<iconify-icon icon="lucide:check-circle" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Satisfaction</p>
<p className="text-base font-bold text-slate-900">100% Guaranteed</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-1/3">
<div className="relative group">
<div className="absolute inset-0 bg-sky-600 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform"></div>
<img alt="Dr Sasha Tomash" className="relative rounded-2xl shadow-md w-full object-cover aspect-[3/4]" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
<div className="w-full md:w-2/3">
<h3 className="text-sky-600 font-medium mb-2 flex items-center gap-2">
<iconify-icon icon="lucide:activity" width="18"></iconify-icon>
                            Meet Your Dentist
                        </h3>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Dr. Sasha Tomash, DDS</h2>
<p className="text-slate-500 leading-relaxed mb-6">
                            "I believe that a visit to the dentist should be a positive, empowering experience. My practice in Richmond Hill is built on a foundation of trust, where every patient is treated like family. We combine advanced technology with a gentle touch to ensure your smile is healthy and beautiful."
                        </p>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
<div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">15+</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Years Experience</div>
</div>
<div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">3k+</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Happy Smiles</div>
</div>
<div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">Top</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Rated Clinic</div>
</div>
</div>
<a className="inline-flex items-center gap-2 text-sky-600 font-medium hover:text-sky-700 transition-colors" href="#appointment">
                            Book a Visit with Dr. Tomash
                            <iconify-icon icon="lucide:arrow-right" strokeWidth="2" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16 items-center">
<div className="w-full md:w-1/2">
<h2 className="text-3xl font-semibold tracking-tight mb-6">Modern Dental Technology</h2>
<p className="text-slate-400 leading-relaxed mb-8">
                            We invest in the latest dental innovations to ensure your treatments are faster, more comfortable, and incredibly precise. No more uncomfortable impressions or guessing games.
                        </p>
<ul className="space-y-6">
<li className="flex gap-4">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
<iconify-icon icon="lucide:scan-face" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-lg">iTero® Digital Scanners</h4>
<p className="text-sm text-slate-400 mt-1">3D impressions in minutes without the messy goop.</p>
</div>
</li>
<li className="flex gap-4">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
<iconify-icon icon="lucide:aperture" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-lg">Low-Radiation Digital X-Rays</h4>
<p className="text-sm text-slate-400 mt-1">Instant high-resolution images with 90% less radiation.</p>
</div>
</li>
<li className="flex gap-4">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
<iconify-icon icon="lucide:zap" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-lg">Laser Dentistry</h4>
<p className="text-sm text-slate-400 mt-1">Minimally invasive soft tissue treatments with faster healing.</p>
</div>
</li>
</ul>
</div>
<div className="w-full md:w-1/2 relative">
<div className="grid grid-cols-2 gap-4">
<img alt="Dental Equipment" className="rounded-2xl opacity-90 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Digital Scanning" className="rounded-2xl mt-8 opacity-90 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Comprehensive Dental Care</h2>
<p className="text-slate-500">From preventive hygiene to complex restorative procedures, we offer a full spectrum of dental services under one roof.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-sky-100 transition-all group">
<div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">General Dentistry</h3>
<p className="text-sm text-slate-500 leading-relaxed">Routine checkups, cleanings, and preventative care to keep your natural smile healthy for life.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-sky-100 transition-all group">
<div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:sparkles" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Cosmetic Dentistry</h3>
<p className="text-sm text-slate-500 leading-relaxed">Smile makeovers, veneers, and bonding designed to enhance your confidence.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-sky-100 transition-all group">
<div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:align-center-vertical" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Orthodontics</h3>
<p className="text-sm text-slate-500 leading-relaxed">Modern straightening solutions including Invisalign tailored for teens and adults.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-sky-100 transition-all group">
<div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:hammer" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Oral Surgery</h3>
<p className="text-sm text-slate-500 leading-relaxed">Expert care for extractions, wisdom teeth removal, and gum treatments in a safe environment.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-sky-100 transition-all group">
<div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:baby" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Pediatric Dentistry</h3>
<p className="text-sm text-slate-500 leading-relaxed">Friendly, fear-free dental visits for the little ones, building good habits from day one.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-sky-100 transition-all group">
<div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500 mb-6 group-hover:bg-rose-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:ambulance" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Emergency Care</h3>
<p className="text-sm text-slate-500 leading-relaxed">Same-day appointments for urgent dental pain, broken teeth, or accidents.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">

<div className="mb-24">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Why Richmond Hill Chooses Us</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
<iconify-icon icon="lucide:users" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-slate-900 font-medium mb-1">Experienced &amp; Caring Team</h4>
<p className="text-sm text-slate-500">Our staff is selected for their expertise and their ability to make patients feel at home.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
<iconify-icon icon="lucide:zap" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-slate-900 font-medium mb-1">Advanced Technology</h4>
<p className="text-sm text-slate-500">We utilize digital X-rays, intraoral cameras, and modern scanners for precise diagnostics.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
<iconify-icon icon="lucide:heart-handshake" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-slate-900 font-medium mb-1">Gentle &amp; Pain-Free</h4>
<p className="text-sm text-slate-500">We prioritize your comfort with sedation options and a gentle touch.</p>
</div>
</li>
</ul>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-slate-50 p-6 rounded-2xl">
<h3 className="text-4xl font-semibold text-sky-600 tracking-tight mb-1">99%</h3>
<p className="text-sm font-medium text-slate-900">Patient Satisfaction</p>
</div>
<div className="bg-slate-50 p-6 rounded-2xl">
<h3 className="text-4xl font-semibold text-sky-600 tracking-tight mb-1">24/7</h3>
<p className="text-sm font-medium text-slate-900">Emergency Support</p>
</div>
<div className="col-span-2 bg-slate-900 p-6 rounded-2xl text-white flex items-center justify-between">
<div>
<h3 className="text-xl font-semibold mb-1">Book Online</h3>
<p className="text-slate-400 text-sm">Instant confirmation</p>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon icon="lucide:mouse-pointer-2" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Featured Procedures</h2>
<a className="text-sm font-medium text-sky-600 hover:text-sky-700 flex items-center gap-1" href="#">
                            View all
                            <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group cursor-pointer" onclick="switchView('invisalign')">
<div className="overflow-hidden rounded-xl mb-3 border border-slate-100">
<img alt="Invisalign" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<h3 className="font-medium text-slate-900">Invisalign®</h3>
<p className="text-xs text-slate-500 mt-1">Clear aligners for straight teeth.</p>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden rounded-xl mb-3 border border-slate-100">
<img alt="Veneers" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<h3 className="font-medium text-slate-900">Porcelain Veneers</h3>
<p className="text-xs text-slate-500 mt-1">Transform your smile instantly.</p>
</div>

<div className="group cursor-pointer" onclick="switchView('implants')">
<div className="overflow-hidden rounded-xl mb-3 border border-slate-100">
<img alt="Implants" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<h3 className="font-medium text-slate-900">Dental Implants</h3>
<p className="text-xs text-slate-500 mt-1">Permanent replacement for missing teeth.</p>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden rounded-xl mb-3 border border-slate-100">
<img alt="Whitening" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<h3 className="font-medium text-slate-900">Teeth Whitening</h3>
<p className="text-xs text-slate-500 mt-1">Professional grade brightening.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-sky-50">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-8">Insurance &amp; Flexible Payments</h2>
<p className="text-slate-500 max-w-2xl mx-auto mb-12">We believe quality dental care should be accessible. We accept major insurance plans and offer flexible financing options.</p>
<div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-slate-600">
<div className="px-6 py-3 bg-white rounded-lg shadow-sm border border-slate-100">SunLife</div>
<div className="px-6 py-3 bg-white rounded-lg shadow-sm border border-slate-100">Manulife</div>
<div className="px-6 py-3 bg-white rounded-lg shadow-sm border border-slate-100">Great-West Life</div>
<div className="px-6 py-3 bg-white rounded-lg shadow-sm border border-slate-100">Green Shield</div>
<div className="px-6 py-3 bg-white rounded-lg shadow-sm border border-slate-100">Blue Cross</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-center text-slate-900 tracking-tight mb-16">Stories from Our Patients</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 relative">
<iconify-icon className="text-sky-200 absolute top-6 right-6" icon="lucide:quote" width="24"></iconify-icon>
<div className="flex text-yellow-400 mb-4">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"Dr. Tomash is incredible. I've always had anxiety about the dentist, but the team here made me feel completely at ease. The office is modern and clean."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="Sarah M." className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Sarah M.</p>
<p className="text-xs text-slate-400">Richmond Hill</p>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 relative">
<iconify-icon className="text-sky-200 absolute top-6 right-6" icon="lucide:quote" width="24"></iconify-icon>
<div className="flex text-yellow-400 mb-4">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"Professional and efficient. I came in for an emergency root canal and they saw me the same day. Pain-free experience. Highly recommend!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="David K." className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">David K.</p>
<p className="text-xs text-slate-400">Markham</p>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 relative">
<iconify-icon className="text-sky-200 absolute top-6 right-6" icon="lucide:quote" width="24"></iconify-icon>
<div className="flex text-yellow-400 mb-4">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"My kids actually love coming here! The pediatric care is top-notch. Dr. Tomash knows exactly how to handle children."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="Emily R." className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Emily R.</p>
<p className="text-xs text-slate-400">Vaughan</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div id="appointment">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-2">Book Your Visit</h2>
<p className="text-slate-500 mb-6">Ready for a healthier smile? Fill out the form and we'll confirm within an hour.</p>
<div className="w-full bg-white rounded-lg overflow-hidden min-h-[450px]">
<iframe data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-id="olsZ88EHSCM5nzcNhOKr" data-form-name="RN | Contact us form | Tomash | Lovable website" data-height="422" data-layout="{'id':'INLINE'}" data-layout-iframe-id="inline-olsZ88EHSCM5nzcNhOKr" data-trigger-type="alwaysShow" data-trigger-value="" id="inline-olsZ88EHSCM5nzcNhOKr" src="https://link.leadflowsolution.com/widget/form/olsZ88EHSCM5nzcNhOKr" style={{width: '100%', height: '100%', border: 'none', borderRadius: '4px'}} title="RN | Contact us form | Tomash | Lovable website">
</iframe>

</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col justify-between h-full">
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-6">Visit Us</h3>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 shrink-0">
<iconify-icon icon="lucide:map-pin" width="18"></iconify-icon>
</div>
<div>
<p className="font-medium text-slate-900 text-sm">Tomash Dental Clinic</p>
<p className="text-sm text-slate-500 mt-1">123 Yonge Street, Suite 200Richmond Hill, ON L4C 3B4</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 shrink-0">
<iconify-icon icon="lucide:clock" width="18"></iconify-icon>
</div>
<div>
<p className="font-medium text-slate-900 text-sm">Office Hours</p>
<div className="grid grid-cols-2 gap-x-8 text-sm text-slate-500 mt-1">
<span>Mon - Fri</span>
<span className="text-right">9:00 AM - 7:00 PM</span>
<span>Saturday</span>
<span className="text-right">10:00 AM - 4:00 PM</span>
<span>Sunday</span>
<span className="text-right">Closed</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8 bg-slate-200 rounded-xl h-48 w-full relative overflow-hidden group">
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-sm flex items-center gap-2">
<iconify-icon className="text-sky-600" icon="lucide:map" width="18"></iconify-icon>
<span className="text-xs font-medium text-slate-700">Interactive Map</span>
</div>
</div>
<img className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="flex-1 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-sm font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors" href="#">
<iconify-icon icon="lucide:navigation" width="16"></iconify-icon>
                                Get Directions
                            </a>
<a className="flex-1 bg-rose-50 border border-rose-100 hover:bg-rose-100 text-rose-700 text-sm font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors" href="tel:+19055550123">
<iconify-icon icon="lucide:phone-alert" width="16"></iconify-icon>
                                Emergency
                            </a>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-view hidden" id="implants">
<section className="pt-24 pb-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-6">
<iconify-icon icon="lucide:hammer" width="12"></iconify-icon>
                    Restorative Dentistry
                </div>
<h1 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight mb-6">Permanent Dental Implants</h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                    Restore your smile's function and aesthetics with the gold standard in tooth replacement. Natural-looking, durable, and designed to last a lifetime.
                </p>
</div>
</section>
<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">

<div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
<div className="relative">
<img alt="Smiling Senior with Implants" className="rounded-2xl shadow-xl object-cover h-full min-h-[400px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-slate-100">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-600">
<iconify-icon icon="lucide:shield-check" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-bold text-slate-900">Lifetime Warranty</p>
<p className="text-xs text-slate-500">On implant fixtures</p>
</div>
</div>
</div>
</div>
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Why Choose Implants?</h2>
<p className="text-slate-500 leading-relaxed mb-8">
                            Unlike dentures or bridges, dental implants replace the tooth root, providing a stable foundation for a permanent replacement tooth. They prevent bone loss, look completely natural, and allow you to eat whatever you want.
                        </p>
<div className="space-y-4">
<div className="flex gap-4">
<div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 shrink-0 mt-1">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900">Natural Look &amp; Feel</h4>
<p className="text-sm text-slate-500 mt-1">Matched perfectly to your existing teeth shade.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 shrink-0 mt-1">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900">Preserves Bone Health</h4>
<p className="text-sm text-slate-500 mt-1">Stimulates the jawbone to prevent recession.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 shrink-0 mt-1">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900">High Success Rate</h4>
<p className="text-sm text-slate-500 mt-1">Over 98% success rate with proper care.</p>
</div>
</div>
</div>
</div>
</div>

<div className="mb-24">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight text-center mb-4">Types of Dental Implants</h2>
<p className="text-slate-500 text-center max-w-2xl mx-auto mb-16">We offer customized solutions depending on how many teeth you need to replace.</p>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all">
<div className="h-48 overflow-hidden">
<img alt="Single Implant" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="p-8">
<h3 className="text-xl font-semibold text-slate-900 mb-2">Single Tooth Implant</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Ideal for replacing one missing tooth without affecting neighboring teeth. Includes a titanium post, abutment, and custom porcelain crown.</p>
<ul className="text-xs text-slate-500 space-y-2">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-sky-500"></div>Stops adjacent teeth shifting</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-sky-500"></div>Easy to floss and clean</li>
</ul>
</div>
</div>

<div className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all">
<div className="h-48 overflow-hidden">
<img alt="Implant Bridge" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-8">
<h3 className="text-xl font-semibold text-slate-900 mb-2">Implant-Supported Bridge</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Perfect for multiple missing teeth in a row. Uses two implants to support a bridge of 3 or 4 teeth, avoiding the need for a partial denture.</p>
<ul className="text-xs text-slate-500 space-y-2">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-sky-500"></div>More stable than traditional bridges</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-sky-500"></div>Preserves jawbone density</li>
</ul>
</div>
</div>

<div className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all">
<div className="h-48 overflow-hidden">
<img alt="All-on-4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-8">
<h3 className="text-xl font-semibold text-slate-900 mb-2">All-on-4® Full Arch</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">A life-changing solution for those missing all teeth. A full set of new teeth is permanently secured to just four strategically placed implants.</p>
<ul className="text-xs text-slate-500 space-y-2">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-sky-500"></div>No slipping or adhesive needed</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-sky-500"></div>Often completed in one day</li>
</ul>
</div>
</div>
</div>
</div>

<div className="bg-slate-900 text-white rounded-3xl p-8 md:p-16 text-center mb-24 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
<h2 className="text-2xl font-semibold tracking-tight mb-12 relative z-10">The Path to Your New Smile</h2>
<div className="grid md:grid-cols-4 gap-8 relative z-10">
<div className="relative">
<div className="w-12 h-12 bg-white/10 rounded-xl shadow-sm border border-white/20 flex items-center justify-center font-bold mx-auto mb-4 z-10 relative">1</div>
<h3 className="font-medium mb-2">Consultation</h3>
<p className="text-sm text-slate-400">3D imaging and planning your personalized treatment.</p>
</div>
<div className="relative">
<div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-white/10 -z-0"></div>
<div className="w-12 h-12 bg-white/10 rounded-xl shadow-sm border border-white/20 flex items-center justify-center font-bold mx-auto mb-4 z-10 relative">2</div>
<h3 className="font-medium mb-2">Placement</h3>
<p className="text-sm text-slate-400">The titanium post is gently placed into the jawbone.</p>
</div>
<div className="relative">
<div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-white/10 -z-0"></div>
<div className="w-12 h-12 bg-white/10 rounded-xl shadow-sm border border-white/20 flex items-center justify-center font-bold mx-auto mb-4 z-10 relative">3</div>
<h3 className="font-medium mb-2">Healing</h3>
<p className="text-sm text-slate-400">The bone fuses with the implant (osseointegration).</p>
</div>
<div className="relative">
<div className="hidden md:block absolute top-6 -left-1/2 w-full h-0.5 bg-white/10 -z-0"></div>
<div className="w-12 h-12 bg-sky-600 text-white rounded-xl shadow-sm flex items-center justify-center font-bold mx-auto mb-4 z-10 relative">4</div>
<h3 className="font-medium mb-2">Restoration</h3>
<p className="text-sm text-slate-400">Your custom crown is attached, completing your smile.</p>
</div>
</div>
</div>

<div className="max-w-3xl mx-auto">
<h3 className="text-2xl font-semibold text-slate-900 mb-8">Frequently Asked Questions</h3>
<div className="space-y-4">
<div className="border border-slate-200 rounded-xl p-6">
<h4 className="font-medium text-slate-900 mb-2">Does the procedure hurt?</h4>
<p className="text-sm text-slate-500">Most patients report less discomfort than a tooth extraction. We use local anesthesia and offer sedation options to ensure you are completely comfortable throughout the procedure.</p>
</div>
<div className="border border-slate-200 rounded-xl p-6">
<h4 className="font-medium text-slate-900 mb-2">How long do implants last?</h4>
<p className="text-sm text-slate-500">With proper oral hygiene and regular checkups, dental implants are designed to last a lifetime. The crown may need replacement after 10-15 years due to normal wear.</p>
</div>
<div className="border border-slate-200 rounded-xl p-6">
<h4 className="font-medium text-slate-900 mb-2">Am I a candidate for implants?</h4>
<p className="text-sm text-slate-500">Most adults with good general health and sufficient jawbone density are candidates. If you have bone loss, we can discuss bone grafting options to build a solid foundation.</p>
</div>
</div>
</div>
<div className="mt-20 text-center">
<h2 className="text-2xl font-semibold text-slate-900 mb-4">Ready to restore your smile?</h2>
<p className="text-slate-500 mb-8">Schedule a consultation with Dr. Tomash to see if implants are right for you.</p>
<a className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-slate-800 transition-colors" href="#contact" onclick="switchView('home')">
                        Book Implant Consultation
                        <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</section>
</div>

<div className="page-view hidden" id="invisalign">
<section className="pt-24 pb-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-medium mb-6">
<iconify-icon icon="lucide:sparkles" width="12"></iconify-icon>
                    Orthodontics
                </div>
<h1 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight mb-6">Invisalign® Clear Aligners</h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                    Straighten your teeth without wires or brackets. Enjoy the freedom of a removable, virtually invisible solution for a perfect smile.
                </p>
</div>
</section>
<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">The Clear Choice for Straight Teeth</h2>
<p className="text-slate-500 leading-relaxed mb-8">
                            Invisalign uses a series of custom-made clear aligners to gradually shift your teeth into place. It's the modern way to get the smile you've always wanted without disrupting your lifestyle.
                        </p>
<p className="text-slate-500 leading-relaxed mb-8">
                            Unlike traditional metal braces, Invisalign aligners are removable, allowing you to eat whatever you want and maintain perfect oral hygiene.
                        </p>
<a className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 transition-colors" href="#contact" onclick="switchView('home')">
                            Am I a candidate?
                            <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="relative">
<img alt="Invisalign Aligners" className="rounded-2xl shadow-xl border border-slate-100" src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>

<div className="mb-24">
<div className="text-center max-w-2xl mx-auto mb-12">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Invisalign vs. Traditional Braces</h2>
<p className="text-slate-500">See why millions of patients are choosing clear aligners over metal brackets.</p>
</div>
<div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
<div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 text-sm font-semibold text-slate-900">
<div className="p-6">Feature</div>
<div className="p-6 text-center text-purple-600 bg-purple-50/50">Invisalign®</div>
<div className="p-6 text-center text-slate-500">Metal Braces</div>
</div>

<div className="grid grid-cols-3 border-b border-slate-100 text-sm">
<div className="p-6 font-medium text-slate-900">Appearance</div>
<div className="p-6 text-center text-slate-600 bg-purple-50/30">Virtually Invisible</div>
<div className="p-6 text-center text-slate-500">Noticeable metal wires</div>
</div>

<div className="grid grid-cols-3 border-b border-slate-100 text-sm">
<div className="p-6 font-medium text-slate-900">Comfort</div>
<div className="p-6 text-center text-slate-600 bg-purple-50/30">Smooth plastic, no irritation</div>
<div className="p-6 text-center text-slate-500">Wires can poke cheeks/gums</div>
</div>

<div className="grid grid-cols-3 border-b border-slate-100 text-sm">
<div className="p-6 font-medium text-slate-900">Dietary Restrictions</div>
<div className="p-6 text-center text-slate-600 bg-purple-50/30">None (Remove to eat)</div>
<div className="p-6 text-center text-slate-500">No popcorn, nuts, sticky candy</div>
</div>

<div className="grid grid-cols-3 border-b border-slate-100 text-sm">
<div className="p-6 font-medium text-slate-900">Cleaning</div>
<div className="p-6 text-center text-slate-600 bg-purple-50/30">Brush &amp; floss normally</div>
<div className="p-6 text-center text-slate-500">Difficult to floss around wires</div>
</div>

<div className="grid grid-cols-3 text-sm">
<div className="p-6 font-medium text-slate-900">Office Visits</div>
<div className="p-6 text-center text-slate-600 bg-purple-50/30">Every 6-8 weeks</div>
<div className="p-6 text-center text-slate-500">Every 4 weeks for adjustments</div>
</div>
</div>
</div>

<div className="mb-24">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight text-center mb-12">What can Invisalign fix?</h2>
<div className="grid md:grid-cols-4 gap-6">
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center hover:border-purple-200 transition-colors">
<div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex items-center justify-center text-purple-600 shadow-sm">
<iconify-icon icon="lucide:align-center" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Crowded Teeth</h3>
<p className="text-xs text-slate-500">When there isn't enough room in the jaw for teeth to fit normally.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center hover:border-purple-200 transition-colors">
<div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex items-center justify-center text-purple-600 shadow-sm">
<iconify-icon icon="lucide:between-horizontal-start" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Gaps</h3>
<p className="text-xs text-slate-500">Spacing issues between teeth that can lead to gum problems.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center hover:border-purple-200 transition-colors">
<div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex items-center justify-center text-purple-600 shadow-sm">
<iconify-icon icon="lucide:arrow-down-to-line" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Overbite</h3>
<p className="text-xs text-slate-500">When upper teeth overlap significantly with lower teeth.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center hover:border-purple-200 transition-colors">
<div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex items-center justify-center text-purple-600 shadow-sm">
<iconify-icon icon="lucide:arrow-up-from-line" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Underbite</h3>
<p className="text-xs text-slate-500">When lower teeth protrude past the upper front teeth.</p>
</div>
</div>
</div>

<div className="grid md:grid-cols-3 gap-8">
<div className="bg-slate-50 p-8 rounded-2xl">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-purple-600 shadow-sm mb-4">
<iconify-icon icon="lucide:scan" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">1. 3D Scan &amp; Preview</h3>
<p className="text-sm text-slate-500">We take a precise digital scan of your teeth using iTero technology. No messy molds. We can even show you a digital preview of your future smile before you start.</p>
</div>
<div className="bg-slate-50 p-8 rounded-2xl">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-purple-600 shadow-sm mb-4">
<iconify-icon icon="lucide:layers" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">2. Custom Aligners</h3>
<p className="text-sm text-slate-500">You receive a series of clear aligners custom-printed for your teeth. You wear each set for about 1-2 weeks, moving teeth gradually into position.</p>
</div>
<div className="bg-slate-50 p-8 rounded-2xl">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-purple-600 shadow-sm mb-4">
<iconify-icon icon="lucide:smile" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">3. Reveal Your Smile</h3>
<p className="text-sm text-slate-500">Visit us every 6-8 weeks for a quick checkup. Once treatment is done, you'll have a straighter, confident smile and receive retainers to keep it that way.</p>
</div>
</div>
<div className="mt-20 text-center">
<h2 className="text-2xl font-semibold text-slate-900 mb-4">Start your journey today</h2>
<p className="text-slate-500 mb-8">Book a free Invisalign assessment with Dr. Tomash.</p>
<a className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-slate-800 transition-colors" href="#contact" onclick="switchView('home')">
                        Book Invisalign Consult
                        <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</section>
</div>

<footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center text-white">
<iconify-icon icon="lucide:smile" width="14"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight">TOMASH DENTAL</span>
</div>
<div className="flex gap-6 text-sm">
<a className="hover:text-white transition-colors" href="javascript:switchView('home')">Home</a>
<a className="hover:text-white transition-colors" href="javascript:switchView('implants')">Implants</a>
<a className="hover:text-white transition-colors" href="javascript:switchView('invisalign')">Invisalign</a>
<a className="hover:text-white transition-colors" href="#contact" onclick="switchView('home')">Contact</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-xs gap-4 pt-8 border-t border-slate-800/50">
<p>© 2023 Tomash Dental Clinic. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="16"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="16"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
