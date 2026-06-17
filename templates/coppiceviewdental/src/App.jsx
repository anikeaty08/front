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
      

<nav className="fixed w-full z-50 top-0 left-0 border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-[#31112e] text-white w-10 h-10 rounded-lg flex items-center justify-center">
<span className="font-semibold text-lg tracking-tighter">CV</span>
</div>
<div className="flex flex-col">
<span className="text-[#31112e] font-semibold text-base tracking-tight leading-none group-hover:opacity-80 transition-opacity">COPPICE VIEW</span>
<span className="text-slate-400 text-xs tracking-widest uppercase">Dental Care</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-[#31112e] transition-colors" href="#">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#31112e] transition-colors" href="#">Treatments</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#31112e] transition-colors" href="#">New Patients</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#31112e] transition-colors" href="#">Prices</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-sm font-medium text-[#31112e]" href="tel:01423503428">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                    01423 503 428
                </a>
<a className="bg-[#31112e] hover:bg-[#4a1a45] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md flex items-center gap-2" href="#book">
                    Book Online
                    <iconify-icon icon="solar:calendar-add-linear" width="16"></iconify-icon>
</a>
<button className="md:hidden text-[#31112e]">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="pt-32 pb-20 px-6 bg-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#e5c5e3]/20 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e5c5e3]/30 text-[#31112e] text-xs font-medium mb-6 border border-[#e5c5e3]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#31112e]"></span>
</span>
                    Accepting New Patients
                </div>
<h1 className="text-5xl lg:text-6xl font-semibold text-[#31112e] tracking-tight mb-6 leading-[1.1]">
                    Exceptional dental care in the heart of Harrogate.
                </h1>
<p className="text-lg text-slate-500 mb-8 max-w-lg leading-relaxed font-light">
                    Located on Kings Road. We offer general, cosmetic, and implant dentistry in a modern, wheelchair-friendly environment.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-[#31112e] text-white px-8 py-3.5 rounded-lg font-medium text-sm flex justify-center items-center gap-2 hover:bg-opacity-90 transition-all" href="#contact">
                        Get in Touch
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="bg-white border border-slate-200 text-[#31112e] px-8 py-3.5 rounded-lg font-medium text-sm flex justify-center items-center gap-2 hover:bg-slate-50 transition-all" href="#services">
                        View Treatments
                    </a>
</div>

<div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
<div className="flex items-center gap-1">
<iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon>
<span className="font-medium text-[#31112e]">5.0</span>
<span>Google Reviews</span>
</div>
<div className="w-px h-4 bg-slate-300"></div>
<div>NHS &amp; Private Options</div>
</div>
</div>

<div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-[#e5c5e3]/50">
<img alt="Modern Dental Office" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#31112e]/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="font-medium text-lg">Dr. &amp; Team</p>
<p className="text-sm opacity-90 font-light">Providing smiles since 2018</p>
</div>
</div>
</div>
</header>

<main className="py-20 max-w-7xl mx-auto px-6" id="contact">
<div className="grid lg:grid-cols-12 gap-12">

<div className="lg:col-span-5 space-y-8">
<div>
<h2 className="text-3xl font-semibold text-[#31112e] tracking-tight mb-4">Contact Us</h2>
<p className="text-slate-500 mb-8 font-light leading-relaxed">
                        We are located on the corner of Kings Road and Franklin Mount, facing the Balmoral Apartments. On-site parking available.
                    </p>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">

<div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-[#e5c5e3]/20 flex items-center justify-center text-[#31112e] mb-4">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-[#31112e] mb-2">Visit Us</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            104 Kings Road<br/>
                            Harrogate, North Yorkshire<br/>
                            HG1 5HH
                        </p>
<a className="text-xs font-medium text-blue-600 mt-3 inline-block hover:underline" href="https://maps.google.com" target="_blank">Get Directions →</a>
</div>

<div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-[#e5c5e3]/20 flex items-center justify-center text-[#31112e] mb-4">
<iconify-icon icon="solar:chat-round-call-linear" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-[#31112e] mb-2">Get in Touch</h3>
<p className="text-sm text-slate-500 mb-1">
<span className="font-medium text-slate-700">Phone:</span> <a className="hover:text-blue-600 transition-colors" href="tel:01423503428">01423 503 428</a>
</p>
<p className="text-sm text-slate-500 mb-1">
<span className="font-medium text-slate-700">Email:</span> <a className="hover:text-blue-600 transition-colors" href="mailto:info@coppiceviewdental.co.uk">info@coppiceviewdental.co.uk</a>
</p>
<p className="text-sm text-slate-500 mt-3 pt-3 border-t border-slate-100">
<span className="font-medium text-red-500">Emergency:</span> 07790 780 512
                        </p>
</div>
</div>

<div className="bg-[#31112e] text-white rounded-xl p-6 shadow-lg">
<h3 className="font-medium text-lg mb-4 flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Opening Hours
                    </h3>
<div className="space-y-3 text-sm font-light opacity-90">
<div className="flex justify-between border-b border-white/10 pb-2">
<span>Mon - Thu</span>
<span>08:30 - 18:00</span>
</div>
<div className="flex justify-between border-b border-white/10 pb-2">
<span>Wednesday</span>
<span>08:00 - 18:00</span>
</div>
<div className="flex justify-between">
<span>Friday</span>
<span>08:30 - 17:30</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 lg:p-10">
<div className="mb-8">
<h2 className="text-2xl font-semibold text-[#31112e] tracking-tight">Send an Enquiry</h2>
<p className="text-sm text-slate-500 mt-2">New and existing patients welcome. Fill out the form below and we'll get back to you shortly.</p>
</div>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">Full Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#31112e] focus:ring-1 focus:ring-[#31112e] outline-none transition-all text-sm" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">Date of Birth</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#31112e] focus:ring-1 focus:ring-[#31112e] outline-none transition-all text-sm text-slate-500" type="date"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">Email Address</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#31112e] focus:ring-1 focus:ring-[#31112e] outline-none transition-all text-sm" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">Phone Number</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#31112e] focus:ring-1 focus:ring-[#31112e] outline-none transition-all text-sm" placeholder="07700 900000" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">I am a...</label>
<div className="grid grid-cols-2 gap-4">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="patient_type" type="radio"/>
<div className="text-center py-3 rounded-lg border border-slate-200 bg-white peer-checked:bg-[#31112e] peer-checked:text-white peer-checked:border-[#31112e] transition-all text-sm font-medium">New Patient</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="patient_type" type="radio"/>
<div className="text-center py-3 rounded-lg border border-slate-200 bg-white peer-checked:bg-[#31112e] peer-checked:text-white peer-checked:border-[#31112e] transition-all text-sm font-medium">Existing Patient</div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">Reason for Enquiry</label>
<select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#31112e] focus:ring-1 focus:ring-[#31112e] outline-none transition-all text-sm text-slate-600 appearance-none">
<option>Routine Check-up</option>
<option>Emergency Appointment</option>
<option>Dental Implants</option>
<option>Cosmetic Dentistry</option>
<option>Hygienist Visit</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#31112e] focus:ring-1 focus:ring-[#31112e] outline-none transition-all text-sm" placeholder="How can we help you?" rows="4"></textarea>
</div>
<button className="w-full bg-[#31112e] hover:bg-[#4a1a45] text-white font-medium py-4 rounded-lg shadow-lg shadow-purple-900/10 transition-all transform active:scale-[0.99] flex justify-center items-center gap-2" type="button">
                            Submit Enquiry
                            <iconify-icon icon="solar:plain-3-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</main>

<section className="bg-[#fcf8fc] border-y border-[#e5c5e3]/30 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center text-center space-y-3">
<div className="w-12 h-12 rounded-full bg-white border border-[#e5c5e3] flex items-center justify-center text-[#31112e]">
<iconify-icon icon="solar:wheelchair-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-[#31112e]">Wheelchair Friendly</h3>
<p className="text-xs text-slate-500 max-w-[150px]">Downstairs surgery and disabled access available.</p>
</div>
<div className="flex flex-col items-center text-center space-y-3">
<div className="w-12 h-12 rounded-full bg-white border border-[#e5c5e3] flex items-center justify-center text-[#31112e]">
<iconify-icon icon="solar:parking-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-[#31112e]">On-site Parking</h3>
<p className="text-xs text-slate-500 max-w-[150px]">Private car park and permit street parking.</p>
</div>
<div className="flex flex-col items-center text-center space-y-3">
<div className="w-12 h-12 rounded-full bg-white border border-[#e5c5e3] flex items-center justify-center text-[#31112e]">
<iconify-icon icon="solar:bus-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-[#31112e]">Transport Links</h3>
<p className="text-xs text-slate-500 max-w-[150px]">Bus stop directly outside (2A &amp; 2B Services).</p>
</div>
<div className="flex flex-col items-center text-center space-y-3">
<div className="w-12 h-12 rounded-full bg-white border border-[#e5c5e3] flex items-center justify-center text-[#31112e]">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-[#31112e]">Denplan Excel</h3>
<p className="text-xs text-slate-500 max-w-[150px]">Accredited practice for your peace of mind.</p>
</div>
</div>
</div>
</section>

<section className="h-[400px] w-full bg-slate-200 relative grayscale opacity-90">

<div className="absolute inset-0 flex items-center justify-center bg-slate-100">
<div className="text-center">
<iconify-icon className="text-[#31112e] text-5xl mb-2" icon="solar:map-point-bold"></iconify-icon>
<p className="text-[#31112e] font-semibold">104 Kings Road, Harrogate</p>
<a className="text-blue-600 text-sm hover:underline mt-1" href="https://maps.google.com" target="_blank">Open in Google Maps</a>
</div>
</div>
</section>

<footer className="bg-[#31112e] text-slate-300 pt-20 pb-10 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="space-y-4">
<span className="text-white font-semibold text-lg tracking-tight block mb-4">COPPICE VIEW</span>
<p className="font-light leading-relaxed max-w-xs text-slate-400">
                        Coppice View Dental Care offers comprehensive services including implants, cosmetic dentistry, and routine care in Harrogate.
                    </p>
<div className="flex gap-4 mt-4">
<a className="text-white opacity-60 hover:opacity-100 transition-opacity" href="#"><iconify-icon icon="mdi:facebook" width="20"></iconify-icon></a>
<a className="text-white opacity-60 hover:opacity-100 transition-opacity" href="#"><iconify-icon icon="mdi:instagram" width="20"></iconify-icon></a>
<a className="text-white opacity-60 hover:opacity-100 transition-opacity" href="#"><iconify-icon icon="mdi:twitter" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-6">Treatments</h4>
<ul className="space-y-3 font-light text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Dental Implants</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cosmetic Dentistry</a></li>
<li><a className="hover:text-white transition-colors" href="#">Teeth Whitening</a></li>
<li><a className="hover:text-white transition-colors" href="#">Invisalign</a></li>
<li><a className="hover:text-white transition-colors" href="#">Emergency Care</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Patient Info</h4>
<ul className="space-y-3 font-light text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">New Patient Journey</a></li>
<li><a className="hover:text-white transition-colors" href="#">Prices &amp; Denplan</a></li>
<li><a className="hover:text-white transition-colors" href="#">Meet the Team</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Newsletter</h4>
<p className="font-light text-slate-400 mb-4 text-xs">Sign up for dental tips and practice updates.</p>
<form className="flex flex-col gap-2">
<input className="bg-white/5 border border-white/10 rounded px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-[#e5c5e3] text-sm" placeholder="Email address" type="email"/>
<button className="bg-[#e5c5e3] text-[#31112e] font-medium py-2 rounded text-xs hover:bg-white transition-colors">Subscribe</button>
</form>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<p>© 2025 Coppice View Dental Care. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="#">Sitemap</a>
</div>
</div>

<div className="flex flex-wrap justify-center gap-6 mt-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="border border-white/20 px-2 py-1 rounded text-[10px] tracking-wider">CQC RATED</span>
<span className="border border-white/20 px-2 py-1 rounded text-[10px] tracking-wider">DENPLAN EXCEL</span>
<span className="border border-white/20 px-2 py-1 rounded text-[10px] tracking-wider">GDC REGULATED</span>
</div>
</div>
</footer>

    </>
  );
}
