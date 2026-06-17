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



        // Initialize Lucide Icons
        lucide.createIcons();
    
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
      

<header className="absolute top-0 w-full z-50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

<div className="flex items-center gap-2">
<div className="text-xl tracking-tight font-semibold text-[#222222] uppercase">
                    MBS<span className="text-[#8e24aa]">.</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-[#222222] hover:text-[#8e24aa] transition-colors duration-200" href="#">About</a>
<a className="text-sm font-medium text-[#222222] hover:text-[#8e24aa] transition-colors duration-200" href="#">Role</a>
<a className="text-sm font-medium text-[#222222] hover:text-[#8e24aa] transition-colors duration-200" href="#">Perks</a>
<a className="text-sm font-medium text-[#222222] hover:text-[#8e24aa] transition-colors duration-200" href="#">Contact</a>
</nav>

<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#8e24aa] rounded-full hover:bg-opacity-90 transition-all shadow-sm" href="#apply">
                Apply Now
            </a>

<button className="md:hidden text-[#222222]">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</header>

<section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#D2F2FF] via-[#F1F6F9] to-white pt-20">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-white/50 backdrop-blur-sm text-xs font-medium text-[#8e24aa] mb-8 shadow-sm">
<span className="w-2 h-2 rounded-full bg-[#8e24aa]"></span>
                Now Hiring
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#222222] leading-[1.1] mb-6">
                Body Sculpting <br/>
<span className="text-slate-400">Technician</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Join Maryland's premier wellness center. We are looking for a dedicated professional to deliver transformative results in a calm, medical-grade environment.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-[#8e24aa] text-white rounded-full font-medium text-base hover:bg-opacity-90 transition-all shadow-lg shadow-[#8e24aa]/20 flex items-center justify-center gap-2" href="#apply">
                    Apply for this Role
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white text-[#222222] border border-slate-200 rounded-full font-medium text-base hover:bg-slate-50 transition-all flex items-center justify-center" href="#about">
                    Learn More
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-[#222222] mb-4">About the Clinic</h2>
<p className="text-slate-500 max-w-2xl text-lg">We combine cutting-edge technology with a holistic approach to wellness, providing non-invasive treatments that empower our clients.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-3xl bg-[#F1F6F9] border border-slate-100/50 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#8e24aa] mb-6 shadow-sm">
<i className="w-6 h-6" data-lucide="activity"></i>
</div>
<h3 className="text-xl font-medium text-[#222222] mb-3">Medical Excellence</h3>
<p className="text-slate-500 leading-relaxed text-sm">
                        Founded on strict medical protocols, ensuring safety and efficacy in every procedure we perform for our clients.
                    </p>
</div>

<div className="p-8 rounded-3xl bg-[#F1F6F9] border border-slate-100/50 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#8e24aa] mb-6 shadow-sm">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<h3 className="text-xl font-medium text-[#222222] mb-3">Client Focused</h3>
<p className="text-slate-500 leading-relaxed text-sm">
                        Our technicians build lasting relationships, guiding clients through their personal transformation journeys.
                    </p>
</div>

<div className="p-8 rounded-3xl bg-[#F1F6F9] border border-slate-100/50 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#8e24aa] mb-6 shadow-sm">
<i className="w-6 h-6" data-lucide="sparkles"></i>
</div>
<h3 className="text-xl font-medium text-[#222222] mb-3">State of the Art</h3>
<p className="text-slate-500 leading-relaxed text-sm">
                        Equipped with the latest FDA-approved body contouring devices to ensure superior results.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
<h3 className="text-2xl font-semibold tracking-tight text-[#222222] mb-8 flex items-center gap-3">
<span className="w-8 h-8 rounded-full bg-[#D2F2FF] flex items-center justify-center text-[#8e24aa]">
<i className="w-4 h-4" data-lucide="clipboard-list"></i>
</span>
                        What You'll Do
                    </h3>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<i className="w-5 h-5 text-[#8e24aa] mt-0.5 shrink-0" data-lucide="check-circle-2"></i>
<span className="text-slate-600 text-sm leading-relaxed">Perform non-invasive body sculpting treatments using CoolSculpting and Emsculpt Neo devices.</span>
</li>
<li className="flex items-start gap-4">
<i className="w-5 h-5 text-[#8e24aa] mt-0.5 shrink-0" data-lucide="check-circle-2"></i>
<span className="text-slate-600 text-sm leading-relaxed">Conduct patient consultations, assessing needs and creating customized treatment plans.</span>
</li>
<li className="flex items-start gap-4">
<i className="w-5 h-5 text-[#8e24aa] mt-0.5 shrink-0" data-lucide="check-circle-2"></i>
<span className="text-slate-600 text-sm leading-relaxed">Maintain detailed patient records and ensure treatment rooms meet sterilization standards.</span>
</li>
<li className="flex items-start gap-4">
<i className="w-5 h-5 text-[#8e24aa] mt-0.5 shrink-0" data-lucide="check-circle-2"></i>
<span className="text-slate-600 text-sm leading-relaxed">Educate patients on pre and post-care instructions to maximize treatment results.</span>
</li>
</ul>
</div>

<div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
<h3 className="text-2xl font-semibold tracking-tight text-[#222222] mb-8 flex items-center gap-3">
<span className="w-8 h-8 rounded-full bg-[#D2F2FF] flex items-center justify-center text-[#8e24aa]">
<i className="w-4 h-4" data-lucide="user-check"></i>
</span>
                        What We're Looking For
                    </h3>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<i className="w-5 h-5 text-[#8e24aa] mt-0.5 shrink-0" data-lucide="check-circle-2"></i>
<span className="text-slate-600 text-sm leading-relaxed">Active Aesthetics or Nursing license in the state of Maryland (Esthetician, RN, or LPN).</span>
</li>
<li className="flex items-start gap-4">
<i className="w-5 h-5 text-[#8e24aa] mt-0.5 shrink-0" data-lucide="check-circle-2"></i>
<span className="text-slate-600 text-sm leading-relaxed">Previous experience with body contouring devices preferred, but training is provided.</span>
</li>
<li className="flex items-start gap-4">
<i className="w-5 h-5 text-[#8e24aa] mt-0.5 shrink-0" data-lucide="check-circle-2"></i>
<span className="text-slate-600 text-sm leading-relaxed">Strong interpersonal skills with a passion for helping others achieve confidence.</span>
</li>
<li className="flex items-start gap-4">
<i className="w-5 h-5 text-[#8e24aa] mt-0.5 shrink-0" data-lucide="check-circle-2"></i>
<span className="text-slate-600 text-sm leading-relaxed">Professional demeanor with high attention to detail and patient safety.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#D2F2FF]/20 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-[#222222]">Compensation &amp; Benefits</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center">
<div className="text-4xl font-semibold text-[#8e24aa] tracking-tight mb-2">$25-35</div>
<div className="text-sm text-slate-500 font-medium">Hourly Rate</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center">
<div className="text-4xl font-semibold text-[#8e24aa] tracking-tight mb-2">Bonus</div>
<div className="text-sm text-slate-500 font-medium">Commission Structure</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center">
<div className="text-4xl font-semibold text-[#8e24aa] tracking-tight mb-2">401k</div>
<div className="text-sm text-slate-500 font-medium">Matching Available</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center">
<div className="text-4xl font-semibold text-[#8e24aa] tracking-tight mb-2">PTO</div>
<div className="text-sm text-slate-500 font-medium">Paid Time Off</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F1F6F9]">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-[#222222] mb-12 text-center">Why Join Us?</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-slate-100">
<div className="w-12 h-12 bg-[#D2F2FF] text-[#8e24aa] rounded-full flex items-center justify-center mb-6">
<i className="w-5 h-5" data-lucide="graduation-cap"></i>
</div>
<h4 className="text-lg font-medium text-[#222222] mb-2">Ongoing Training</h4>
<p className="text-sm text-slate-500">Continuous education on the newest technologies and techniques.</p>
</div>

<div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-slate-100">
<div className="w-12 h-12 bg-[#D2F2FF] text-[#8e24aa] rounded-full flex items-center justify-center mb-6">
<i className="w-5 h-5" data-lucide="heart-handshake"></i>
</div>
<h4 className="text-lg font-medium text-[#222222] mb-2">Supportive Culture</h4>
<p className="text-sm text-slate-500">Work within a team that values collaboration and mutual respect.</p>
</div>

<div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-slate-100">
<div className="w-12 h-12 bg-[#D2F2FF] text-[#8e24aa] rounded-full flex items-center justify-center mb-6">
<i className="w-5 h-5" data-lucide="trending-up"></i>
</div>
<h4 className="text-lg font-medium text-[#222222] mb-2">Career Growth</h4>
<p className="text-sm text-slate-500">Opportunities to advance as we expand our locations and services.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-[#222222] mb-8 border-b border-slate-100 pb-4">Position Details</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
<div>
<span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Employment Type</span>
<span className="text-lg text-[#222222]">Full-Time / Part-Time</span>
</div>
<div>
<span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Location</span>
<span className="text-lg text-[#222222]">Annapolis &amp; Baltimore, MD</span>
</div>
<div>
<span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Schedule</span>
<span className="text-lg text-[#222222]">Monday - Friday, Occasional Saturdays</span>
</div>
<div>
<span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Start Date</span>
<span className="text-lg text-[#222222]">Immediate Opening</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F1F6F9] relative" id="apply">
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold tracking-tight text-[#222222] mb-3">Ready to Apply?</h2>
<p className="text-slate-500">Fill out the form below and attach your resume.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-[#222222]">First Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#8e24aa]/20 focus:border-[#8e24aa] transition-all placeholder:text-slate-400" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-[#222222]">Last Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#8e24aa]/20 focus:border-[#8e24aa] transition-all placeholder:text-slate-400" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-[#222222]">Email Address</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#8e24aa]/20 focus:border-[#8e24aa] transition-all placeholder:text-slate-400" placeholder="jane@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-[#222222]">Phone Number</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#8e24aa]/20 focus:border-[#8e24aa] transition-all placeholder:text-slate-400" placeholder="(555) 123-4567" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-[#222222]">Resume / CV</label>
<div className="flex items-center justify-center w-full">
<label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-200 border-dashed rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors">
<div className="flex flex-col items-center justify-center pt-5 pb-6">
<i className="w-8 h-8 mb-3 text-slate-400" data-lucide="cloud-upload"></i>
<p className="text-sm text-slate-500"><span className="font-medium text-[#8e24aa]">Click to upload</span> or drag and drop</p>
<p className="text-xs text-slate-400 mt-1">PDF, DOCX up to 10MB</p>
</div>
<input className="hidden" type="file" />
</input></label>
</div>
</div>
<button className="w-full py-4 px-6 bg-[#8e24aa] text-white font-medium rounded-xl hover:bg-opacity-90 transition-colors shadow-lg shadow-[#8e24aa]/20 mt-4" type="submit">
                        Submit Application
                    </button>
</form>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-6">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#8e24aa] shadow-sm shrink-0">
<i className="w-5 h-5" data-lucide="mail"></i>
</div>
<div>
<h4 className="text-lg font-medium text-[#222222] mb-1">Email Us</h4>
<p className="text-slate-500 text-sm mb-3">Questions about the hiring process?</p>
<a className="text-[#8e24aa] font-medium text-sm hover:underline" href="mailto:careers@marylandbodysculpting.com">careers@marylandbodysculpting.com</a>
</div>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-6">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#8e24aa] shadow-sm shrink-0">
<i className="w-5 h-5" data-lucide="phone"></i>
</div>
<div>
<h4 className="text-lg font-medium text-[#222222] mb-1">Call Us</h4>
<p className="text-slate-500 text-sm mb-3">Speak to our office manager.</p>
<a className="text-[#8e24aa] font-medium text-sm hover:underline" href="tel:+15555555555">(555) 555-5555</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F1F6F9]">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-[#222222] mb-12 text-center">Our Locations</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100">
<div className="h-64 bg-slate-200 rounded-2xl overflow-hidden mb-6 relative group">

<div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
<span className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="map-pin"></i> Annapolis Map View</span>
</div>
</div>
<div className="px-4 pb-4">
<h3 className="text-xl font-medium text-[#222222]">Annapolis Clinic</h3>
<p className="text-slate-500 text-sm mt-2 mb-4">123 Wellness Blvd, Annapolis, MD 21401</p>
<a className="inline-flex items-center text-sm font-medium text-[#8e24aa] hover:opacity-80" href="#">
                            Get Directions <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100">
<div className="h-64 bg-slate-200 rounded-2xl overflow-hidden mb-6 relative group">

<div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
<span className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="map-pin"></i> Baltimore Map View</span>
</div>
</div>
<div className="px-4 pb-4">
<h3 className="text-xl font-medium text-[#222222]">Baltimore Clinic</h3>
<p className="text-slate-500 text-sm mt-2 mb-4">456 Harbor Way, Baltimore, MD 21202</p>
<a className="inline-flex items-center text-sm font-medium text-[#8e24aa] hover:opacity-80" href="#">
                            Get Directions <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#222222] text-white pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">

<div className="mb-20 p-10 rounded-3xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-2">Join the team today</h3>
<p className="text-slate-400">Start your career at Maryland Body Sculpting.</p>
</div>
<a className="px-6 py-3 bg-[#8e24aa] text-white rounded-full font-medium hover:bg-opacity-90 transition-all" href="#apply">
                    Apply Now
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
<div className="col-span-1 md:col-span-1">
<div className="text-xl tracking-tight font-semibold text-white uppercase mb-6">
                        MBS<span className="text-[#8e24aa]">.</span>
</div>
<p className="text-slate-400 text-sm leading-relaxed">
                        Transforming lives through advanced body contouring technology and compassionate care.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Company</h4>
<ul className="space-y-4">
<li><a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">About Us</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">Careers</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">Locations</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Legal</h4>
<ul className="space-y-4">
<li><a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">Privacy Policy</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Newsletter</h4>
<p className="text-slate-400 text-sm mb-4">Stay updated with our latest roles.</p>
<div className="flex gap-2">
<input className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-[#8e24aa]" placeholder="Email address" type="email"/>
<button className="bg-[#8e24aa] text-white p-2 rounded-lg hover:bg-opacity-90 transition">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
<p>© 2023 Maryland Body Sculpting. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="hover:text-white transition" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="hover:text-white transition" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
