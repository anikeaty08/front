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



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
50: '#f5f3ff',
100: '#ede9fe',
500: '#8b5cf6',
600: '#7c3aed',
900: '#4c1d95',
}
}
}
}
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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-neutral-200/60 bg-white/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-6">
<a className="flex items-center gap-2 group" href="#">
<div className="bg-brand-600 text-white w-9 h-9 rounded-lg flex items-center justify-center shadow-lg shadow-brand-500/30 transition-transform group-hover:scale-95">
<span className="font-semibold text-lg tracking-tighter">Ss</span>
</div>
<span className="self-center text-lg font-semibold tracking-tight text-neutral-900 group-hover:text-brand-600 transition-colors">SeniorsStuck</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
<a className="hover:text-neutral-900 transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-neutral-900 transition-colors" href="#services">Services</a>
<a className="hover:text-neutral-900 transition-colors" href="#reviews">Reviews</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-brand-600 transition-colors mr-2" href="tel:5551234567">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
                    (555) 123-4567
                </a>
<a className="bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-full text-sm px-5 py-2.5 transition-all shadow-md hover:shadow-lg" href="#book">
                    Book Support
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
<div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-50 rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
<div className="absolute top-40 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
</div>
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="text-center max-w-3xl mx-auto mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-900 text-xs font-semibold uppercase tracking-wider mb-6 fade-in-up">
<span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
                    Available for In-Home Visits
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900 leading-[1.1] mb-6 fade-in-up delay-100">
                    Technology help that is <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-600">patient, not pushy.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-500 font-normal leading-relaxed mb-8 max-w-2xl mx-auto fade-in-up delay-200">
                    We help seniors master their devices, avoid scams, and connect with loved ones. No jargon, just friendly in-home support at your own pace.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up delay-300">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-brand-600 rounded-full hover:bg-brand-700 transition-all shadow-xl shadow-brand-200 hover:-translate-y-0.5" href="#book">
                        Get Help Now
                        <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-neutral-900 bg-white border border-neutral-200 rounded-full hover:bg-neutral-50 transition-all" href="#how-it-works">
<iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon>
                        Watch Video
                    </a>
</div>
<div className="mt-8 flex items-center justify-center gap-4 text-sm text-neutral-500 fade-in-up delay-300">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<span>Trusted by 500+ families locally</span>
</div>
</div>

<div className="relative mt-12 md:mt-20 rounded-2xl md:rounded-3xl border border-neutral-200 bg-white/50 backdrop-blur-sm p-2 md:p-3 shadow-2xl shadow-neutral-200/50">
<div className="aspect-[16/9] md:aspect-[21/9] rounded-xl md:rounded-2xl overflow-hidden relative">
<img alt="Senior woman laughing while using tablet" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1516307365426-bea591f05011?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white max-w-lg">
<div className="flex items-center gap-2 mb-2">
<span className="bg-green-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">Success Story</span>
</div>
<p className="text-xl md:text-2xl font-medium tracking-tight">"I was afraid to touch it. Now I'm video calling my grandkids every Sunday!"</p>
<p className="text-white/80 mt-1 font-medium">— Sarah J., 78</p>
</div>
</div>
</div>
</div>
</section>

<div className="border-y border-neutral-100 bg-neutral-50/50 py-10">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold tracking-tighter">AARP<span className="font-light">Member</span></span>
<span className="text-xl font-bold tracking-tighter">Tech<span className="font-light">Seniors</span></span>
<span className="text-xl font-bold tracking-tighter">Senior<span className="font-light">Living</span></span>
<span className="text-xl font-bold tracking-tighter">Community<span className="font-light">Center</span></span>
<span className="text-xl font-bold tracking-tighter">Family<span className="font-light">Trust</span></span>
</div>
</div>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">Why is technology so frustrating?</h2>
<p className="text-lg text-neutral-500 max-w-xl">It's not you. Devices change every day. We bridge the gap between complex tech and simple needs.</p>
</div>
<a className="text-brand-600 font-medium hover:text-brand-700 inline-flex items-center gap-1 group" href="#services">
                    View all services
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-3xl bg-neutral-50 hover:bg-white hover:shadow-xl hover:shadow-neutral-200/40 border border-neutral-100 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl border border-neutral-200 flex items-center justify-center mb-6 text-neutral-900 shadow-sm group-hover:scale-110 group-hover:border-brand-200 group-hover:text-brand-600 transition-all">
<iconify-icon className="text-2xl" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Fear of Scams</h3>
<p className="text-neutral-500 leading-relaxed">Terrified of clicking the wrong link? We install safety tools and teach you exactly what to look for so you can browse with confidence.</p>
</div>

<div className="group p-8 rounded-3xl bg-neutral-50 hover:bg-white hover:shadow-xl hover:shadow-neutral-200/40 border border-neutral-100 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl border border-neutral-200 flex items-center justify-center mb-6 text-neutral-900 shadow-sm group-hover:scale-110 group-hover:border-brand-200 group-hover:text-brand-600 transition-all">
<iconify-icon className="text-2xl" icon="solar:key-minimalistic-square-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Lost Passwords</h3>
<p className="text-neutral-500 leading-relaxed">Can't get into your email? We help reset your accounts and create a physical "Password Book" you can keep safe at home.</p>
</div>

<div className="group p-8 rounded-3xl bg-neutral-50 hover:bg-white hover:shadow-xl hover:shadow-neutral-200/40 border border-neutral-100 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl border border-neutral-200 flex items-center justify-center mb-6 text-neutral-900 shadow-sm group-hover:scale-110 group-hover:border-brand-200 group-hover:text-brand-600 transition-all">
<iconify-icon className="text-2xl" icon="solar:printer-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Hardware Issues</h3>
<p className="text-neutral-500 leading-relaxed">Printer won't print? Wi-Fi keeps dropping? We come to your house and fix the cables, connections, and settings for you.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white overflow-hidden relative" id="how-it-works">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-900/30 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
<div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
<div className="text-center mb-16">
<span className="text-brand-300 font-medium tracking-wide uppercase text-sm">Process</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-3">Simple as 1, 2, 3</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent border-t border-dashed border-neutral-700"></div>

<div className="relative text-center">
<div className="w-24 h-24 mx-auto bg-neutral-800 rounded-full border border-neutral-700 flex items-center justify-center mb-6 relative z-10 shadow-xl shadow-black/50">
<span className="text-4xl font-semibold text-brand-400">1</span>
</div>
<h3 className="text-xl font-medium mb-3">Book a Visit</h3>
<p className="text-neutral-400 leading-relaxed px-4">Fill out our form or call us. We schedule a time that works for you.</p>
</div>

<div className="relative text-center">
<div className="w-24 h-24 mx-auto bg-neutral-800 rounded-full border border-neutral-700 flex items-center justify-center mb-6 relative z-10 shadow-xl shadow-black/50">
<span className="text-4xl font-semibold text-brand-400">2</span>
</div>
<h3 className="text-xl font-medium mb-3">We Come to You</h3>
<p className="text-neutral-400 leading-relaxed px-4">A background-checked, patient expert arrives at your door.</p>
</div>

<div className="relative text-center">
<div className="w-24 h-24 mx-auto bg-brand-900/50 rounded-full border border-brand-500/50 flex items-center justify-center mb-6 relative z-10 shadow-xl shadow-brand-900/50">
<iconify-icon className="text-4xl text-brand-400" icon="solar:check-circle-bold"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Problem Solved</h3>
<p className="text-neutral-400 leading-relaxed px-4">We fix the issue and write down instructions so you remember.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50" id="services">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="max-w-2xl mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">We help with everything digital.</h2>
<p className="text-lg text-neutral-500">From setting up a new iPad to organizing your digital photos.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[500px]">

<div className="md:col-span-2 md:row-span-2 bg-white rounded-3xl p-8 border border-neutral-200 flex flex-col justify-between hover:shadow-lg transition-shadow overflow-hidden relative group">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-9xl text-brand-600" icon="solar:laptop-minimalistic-linear"></iconify-icon>
</div>
<div>
<div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mb-4">
<iconify-icon className="text-xl" icon="solar:laptop-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-neutral-900 mb-2">Computer Setup &amp; Repair</h3>
<p className="text-neutral-500">New computer? We'll transfer your files, set up your email, install antivirus, and make sure your printer works perfectly. We support both Windows and Mac.</p>
</div>
<div className="mt-8">
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-neutral-600">
<iconify-icon className="text-brand-600" icon="solar:check-circle-linear"></iconify-icon> Virus Removal
                            </li>
<li className="flex items-center gap-2 text-sm text-neutral-600">
<iconify-icon className="text-brand-600" icon="solar:check-circle-linear"></iconify-icon> Data Backup
                            </li>
<li className="flex items-center gap-2 text-sm text-neutral-600">
<iconify-icon className="text-brand-600" icon="solar:check-circle-linear"></iconify-icon> Speed Optimization
                            </li>
</ul>
</div>
</div>

<div className="md:col-span-2 bg-white rounded-3xl p-8 border border-neutral-200 flex flex-col justify-center hover:shadow-lg transition-shadow">
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2">Smartphone &amp; Tablet</h3>
<p className="text-sm text-neutral-500">iPhone, iPad, Android. We teach you gestures, app installation, and settings.</p>
</div>
<div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
<iconify-icon className="text-xl" icon="solar:smartphone-linear"></iconify-icon>
</div>
</div>
</div>

<div className="md:col-span-1 bg-white rounded-3xl p-6 border border-neutral-200 flex flex-col justify-between hover:shadow-lg transition-shadow">
<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
<iconify-icon className="text-xl" icon="solar:videocamera-record-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900">Video Calls</h3>
</div>

<div className="md:col-span-1 bg-white rounded-3xl p-6 border border-neutral-200 flex flex-col justify-between hover:shadow-lg transition-shadow">
<div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-4">
<iconify-icon className="text-xl" icon="solar:cart-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900">Shopping</h3>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-4xl mx-auto px-4 md:px-6">
<div className="bg-neutral-900 rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">

<div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full blur-[80px] opacity-40 translate-x-1/3 -translate-y-1/3"></div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 relative z-10">Simple Pricing. No Contracts.</h2>
<p className="text-xl text-neutral-400 mb-10 relative z-10">We believe in earning your trust, one visit at a time.</p>
<div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 max-w-sm mx-auto mb-10 transform hover:scale-105 transition-transform duration-300">
<p className="text-sm font-medium text-brand-300 uppercase tracking-wider mb-2">Home Visit</p>
<div className="flex items-baseline justify-center gap-1 mb-4">
<span className="text-5xl font-bold">$75</span>
<span className="text-lg text-neutral-300">/ hour</span>
</div>
<div className="h-px bg-white/10 w-full mb-4"></div>
<ul className="text-left space-y-3 text-sm text-neutral-200">
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-400" icon="solar:check-circle-bold"></iconify-icon> No travel fees
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-400" icon="solar:check-circle-bold"></iconify-icon> Written instructions included
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-400" icon="solar:check-circle-bold"></iconify-icon> Satisfaction guaranteed
                        </li>
</ul>
</div>
<p className="text-sm text-neutral-500 relative z-10">Minimum 1 hour charge. Billing in 15-minute increments thereafter.</p>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50" id="book">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

<div className="lg:col-span-5 flex flex-col justify-center">
<span className="text-brand-600 font-semibold tracking-tight mb-2">Get Started</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">Let's solve your tech problems.</h2>
<p className="text-lg text-neutral-500 mb-10">Fill out the form, and we'll call you within 24 hours to schedule your visit. No robotic menus, real people.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-900 shadow-sm shrink-0">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-neutral-900">Call Us Directly</h4>
<p className="text-neutral-500 mb-1">Available Mon-Fri, 9am - 5pm</p>
<a className="text-lg font-medium text-brand-600 hover:text-brand-700 hover:underline" href="tel:5551234567">(555) 123-4567</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-900 shadow-sm shrink-0">
<iconify-icon className="text-2xl" icon="solar:mailbox-linear"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-neutral-900">Email Us</h4>
<a className="text-lg font-medium text-brand-600 hover:text-brand-700 hover:underline" href="mailto:hello@seniorsstuck.com">hello@seniorsstuck.com</a>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="bg-white rounded-3xl p-8 md:p-10 border border-neutral-200 shadow-xl shadow-neutral-200/50">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-neutral-700" htmlFor="fname">First Name</label>
<input className="custom-input w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-xl focus:ring-brand-500 focus:border-brand-500 block w-full p-4 placeholder-neutral-400" id="fname" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-neutral-700" htmlFor="lname">Last Name</label>
<input className="custom-input w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-xl focus:ring-brand-500 focus:border-brand-500 block w-full p-4 placeholder-neutral-400" id="lname" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-neutral-700" htmlFor="phone">Phone Number</label>
<input className="custom-input w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-xl focus:ring-brand-500 focus:border-brand-500 block w-full p-4 placeholder-neutral-400" id="phone" placeholder="(555) 123-4567" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-neutral-700" htmlFor="issue">How can we help?</label>
<div className="relative">
<select className="custom-input w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-xl focus:ring-brand-500 focus:border-brand-500 block w-full p-4 appearance-none cursor-pointer" id="issue">
<option>Select an issue...</option>
<option>Computer Help</option>
<option>Printer / Wi-Fi</option>
<option>Smartphone / Tablet</option>
<option>Scam / Virus Security</option>
<option>Other</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="flex items-start gap-3 p-4 bg-brand-50 rounded-xl border border-brand-100">
<div className="flex items-center h-5">
<input className="w-5 h-5 border border-brand-300 rounded bg-white focus:ring-3 focus:ring-brand-300 text-brand-600 cursor-pointer" id="callback" type="checkbox" value=""/>
</div>
<label className="text-sm font-medium text-brand-900 cursor-pointer" htmlFor="callback">Please call me instead of emailing.</label>
</div>
<button className="w-full text-white bg-neutral-900 hover:bg-neutral-800 focus:ring-4 focus:ring-neutral-300 font-medium rounded-xl text-lg px-5 py-4 text-center transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group" type="button">
                                Schedule Callback
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-center text-xs text-neutral-400">By submitting, you agree to our privacy policy. We never share your info.</p>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-2 space-y-4">
<a className="flex items-center gap-2" href="#">
<div className="bg-brand-600 text-white w-8 h-8 rounded-md flex items-center justify-center">
<span className="font-bold text-sm tracking-tighter">Ss</span>
</div>
<span className="text-xl font-bold tracking-tight text-neutral-900">SeniorsStuck</span>
</a>
<p className="text-neutral-500 text-sm leading-relaxed max-w-sm">
                        Empowering seniors to use technology with confidence. Friendly, patient, and professional support delivered right to your home.
                    </p>
</div>
<div>
<h5 className="font-semibold text-neutral-900 mb-4">Support</h5>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">Book a Visit</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h5 className="font-semibold text-neutral-900 mb-4">Legal</h5>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-400">© 2024 SeniorsStuck. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-brand-600 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:facebook-linear"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-brand-600 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:instagram-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
