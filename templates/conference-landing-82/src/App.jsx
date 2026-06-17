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
      

<nav className="fixed w-full top-0 z-50 bg-[#FCFAF5]/90 backdrop-blur-md border-b border-[#808080]/10">
<div className="max-w-[1280px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-[#1B5325] flex items-center justify-center text-[#FCFAF5] font-semibold text-lg tracking-tight">
                    U
                </div>
<span className="font-semibold text-lg tracking-tight text-[#1B5325]">NUS26</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#2B2A26]/80">
<a className="hover:text-[#38A855] transition-colors" href="#about">About</a>
<a className="hover:text-[#38A855] transition-colors" href="#categories">Categories</a>
<a className="hover:text-[#38A855] transition-colors" href="#details">Details</a>
</div>
<div>
<a className="bg-[#38A855] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#1B5325] transition-colors shadow-sm" href="#register">
                    Register
                </a>
</div>
</div>
</nav>

<section className="hero-bg pt-32 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden">

<div className="absolute top-20 right-0 w-96 h-96 bg-[#C1920C]/10 rounded-full blur-3xl z-0"></div>
<div className="absolute bottom-0 left-20 w-80 h-80 bg-[#38A855]/10 rounded-full blur-3xl z-0"></div>
<div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#38A855]/10 border border-[#38A855]/20 text-[#1B5325] text-xs font-semibold uppercase tracking-widest mb-6">
<span className="w-2 h-2 rounded-full bg-[#C1920C]"></span>
                        Official 2026 Event
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1B5325] tracking-tight leading-[1.1] mb-6">
                        National Unani <br/>Seminar 2026
                    </h1>
<p className="text-lg sm:text-xl text-[#2B2A26]/70 mb-10 max-w-lg leading-relaxed">
                        Exploring the Scope and Strengths of Unani Medicine. Join leading practitioners, researchers, and students for a transformative academic experience.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="flex items-center justify-center gap-2 bg-[#38A855] text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-[#1B5325] transition-all shadow-sm shadow-[#38A855]/20" href="#register">
                            Register Now
                            <iconify-icon className="text-xl" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="flex items-center justify-center bg-white text-[#2B2A26] border border-[#808080]/30 px-8 py-4 rounded-xl text-base font-medium hover:bg-gray-50 transition-colors shadow-sm" href="#categories">
                            View Categories
                        </a>
</div>
</div>

<div className="lg:justify-self-end w-full max-w-md">
<div className="glass-card rounded-2xl p-8 border border-[#808080]/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#38A855] to-[#C1920C]"></div>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-[#38A855]/10 flex items-center justify-center text-[#38A855] shrink-0">
<iconify-icon className="text-2xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-[#808080] uppercase tracking-wider mb-1">Venue</h3>
<p className="text-base font-semibold text-[#1B5325] tracking-tight">NTR Auditorium</p>
<p className="text-sm text-[#2B2A26]/80 mt-1">SPR Telugu University, Hyderabad<br/>Landmark: Beside Public Gardens</p>
</div>
</div>
<div className="w-full h-px bg-[#808080]/10"></div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-[#C1920C]/10 flex items-center justify-center text-[#C1920C] shrink-0">
<iconify-icon className="text-2xl" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-[#808080] uppercase tracking-wider mb-1">Date &amp; Time</h3>
<p className="text-base font-semibold text-[#1B5325] tracking-tight">13th &amp; 14th June 2026</p>
<p className="text-sm text-[#2B2A26]/80 mt-1">Saturday &amp; Sunday</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-[#808080]/10" id="about">
<div className="max-w-[1280px] mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold text-[#1B5325] tracking-tight mb-6">Advancing Traditional Medicine in the Modern Era</h2>
<p className="text-base text-[#2B2A26]/80 mb-6 leading-relaxed">
                        The National Unani Seminar 2026 is a premier platform dedicated to the advancement and integration of Unani medicine. We bring together esteemed researchers, dedicated students, and experienced practitioners to foster knowledge exchange and drive innovation.
                    </p>
<p className="text-base text-[#2B2A26]/80 leading-relaxed">
                        Our mission is to highlight the profound importance of Unani medicine, exploring its potential to address contemporary healthcare challenges while preserving its rich, traditional heritage.
                    </p>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div className="p-6 rounded-xl bg-[#FCFAF5] border border-[#808080]/10">
<iconify-icon className="text-3xl text-[#38A855] mb-4" icon="solar:square-academic-cap-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-base font-semibold text-[#1B5325] mb-2 tracking-tight">Academic Excellence</h4>
<p className="text-sm text-[#2B2A26]/70 leading-relaxed">A rigorous platform for researchers and scholars to present groundbreaking studies.</p>
</div>
<div className="p-6 rounded-xl bg-[#FCFAF5] border border-[#808080]/10 mt-0 sm:mt-8">
<iconify-icon className="text-3xl text-[#C1920C] mb-4" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-base font-semibold text-[#1B5325] mb-2 tracking-tight">Expert Networking</h4>
<p className="text-sm text-[#2B2A26]/70 leading-relaxed">Connect with established practitioners and peers shaping the future of medicine.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="categories">
<div className="max-w-[1280px] mx-auto px-6 lg:px-12">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold text-[#1B5325] tracking-tight mb-4">Event Categories</h2>
<p className="text-base text-[#2B2A26]/70">Explore the diverse range of activities, presentations, and interactive sessions designed for comprehensive learning.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

<div className="group bg-white p-6 rounded-xl border border-[#808080]/20 hover:border-[#38A855]/50 shadow-sm hover:shadow-md transition-all cursor-pointer">
<div className="w-12 h-12 rounded-lg bg-[#FCFAF5] flex items-center justify-center text-[#1B5325] mb-5 group-hover:bg-[#38A855] group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:monitor-camera-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#2B2A26] tracking-tight mb-2">PowerPoint Presentation</h3>
<p className="text-sm text-[#2B2A26]/60">Digital presentations showcasing modern research and case studies.</p>
</div>

<div className="group bg-white p-6 rounded-xl border border-[#808080]/20 hover:border-[#38A855]/50 shadow-sm hover:shadow-md transition-all cursor-pointer">
<div className="w-12 h-12 rounded-lg bg-[#FCFAF5] flex items-center justify-center text-[#1B5325] mb-5 group-hover:bg-[#38A855] group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#2B2A26] tracking-tight mb-2">Paper Presentation</h3>
<p className="text-sm text-[#2B2A26]/60">In-depth academic papers and literature reviews on Unani principles.</p>
</div>

<div className="group bg-white p-6 rounded-xl border border-[#808080]/20 hover:border-[#38A855]/50 shadow-sm hover:shadow-md transition-all cursor-pointer">
<div className="w-12 h-12 rounded-lg bg-[#FCFAF5] flex items-center justify-center text-[#1B5325] mb-5 group-hover:bg-[#38A855] group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:shop-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#2B2A26] tracking-tight mb-2">Exhibition Stalls</h3>
<p className="text-sm text-[#2B2A26]/60">Explore products, tools, and innovations from leading industry vendors.</p>
</div>

<div className="group bg-white p-6 rounded-xl border border-[#808080]/20 hover:border-[#38A855]/50 shadow-sm hover:shadow-md transition-all cursor-pointer">
<div className="w-12 h-12 rounded-lg bg-[#FCFAF5] flex items-center justify-center text-[#1B5325] mb-5 group-hover:bg-[#38A855] group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:health-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#2B2A26] tracking-tight mb-2">Free Medical Camp</h3>
<p className="text-sm text-[#2B2A26]/60">Consultations and treatments utilizing traditional Unani methodologies.</p>
</div>

<div className="group bg-white p-6 rounded-xl border border-[#808080]/20 hover:border-[#38A855]/50 shadow-sm hover:shadow-md transition-all cursor-pointer">
<div className="w-12 h-12 rounded-lg bg-[#FCFAF5] flex items-center justify-center text-[#1B5325] mb-5 group-hover:bg-[#38A855] group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#2B2A26] tracking-tight mb-2">Medicinal Plants</h3>
<p className="text-sm text-[#2B2A26]/60">Free distribution of essential flora used in Unani compounding.</p>
</div>

<div className="group bg-white p-6 rounded-xl border border-[#808080]/20 hover:border-[#38A855]/50 shadow-sm hover:shadow-md transition-all cursor-pointer">
<div className="w-12 h-12 rounded-lg bg-[#FCFAF5] flex items-center justify-center text-[#1B5325] mb-5 group-hover:bg-[#38A855] group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:book-bookmark-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#2B2A26] tracking-tight mb-2">New Book Releases</h3>
<p className="text-sm text-[#2B2A26]/60">Launch events for the latest publications in traditional medicine.</p>
</div>

<div className="group bg-white p-6 rounded-xl border border-[#808080]/20 hover:border-[#38A855]/50 shadow-sm hover:shadow-md transition-all cursor-pointer sm:col-span-2 lg:col-span-3 xl:col-span-2">
<div className="flex items-start sm:items-center gap-5 flex-col sm:flex-row">
<div className="w-12 h-12 rounded-lg bg-[#FCFAF5] flex items-center justify-center text-[#C1920C] shrink-0 group-hover:bg-[#C1920C] group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:gift-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-[#2B2A26] tracking-tight mb-1">Souvenir Release</h3>
<p className="text-sm text-[#2B2A26]/60">Commemorative release documenting the seminar's abstracts, highlights, and contributions.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-[#808080]/10" id="details">
<div className="max-w-[1280px] mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-5 gap-16">

<div className="lg:col-span-2 space-y-4">
<h2 className="text-2xl font-semibold text-[#1B5325] tracking-tight mb-6">Seminar Logistics</h2>
<div className="flex items-center gap-4 p-4 rounded-xl border border-[#808080]/20 bg-[#FCFAF5]">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#38A855] shadow-sm">
<iconify-icon className="text-xl" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-[#808080] uppercase tracking-wider">Venue</p>
<p className="text-sm font-medium text-[#2B2A26]">NTR Auditorium, SPR Telugu University, Hyderabad</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border border-[#808080]/20 bg-[#FCFAF5]">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#38A855] shadow-sm">
<iconify-icon className="text-xl" icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-[#808080] uppercase tracking-wider">Landmark</p>
<p className="text-sm font-medium text-[#2B2A26]">Beside Public Gardens</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border border-[#808080]/20 bg-[#FCFAF5]">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#38A855] shadow-sm">
<iconify-icon className="text-xl" icon="solar:calendar-date-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-[#808080] uppercase tracking-wider">Dates</p>
<p className="text-sm font-medium text-[#2B2A26]">13–14 June 2026</p>
</div>
</div>
</div>

<div className="lg:col-span-3">
<h2 className="text-2xl font-semibold text-[#1B5325] tracking-tight mb-6">Why You Should Attend</h2>
<div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
<div className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#38A855] shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm text-[#2B2A26]/80 leading-relaxed">Explore the vast potential and modern applications of Unani medicine.</p>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#38A855] shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm text-[#2B2A26]/80 leading-relaxed">Present your research and innovative ideas to an expert panel.</p>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#38A855] shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm text-[#2B2A26]/80 leading-relaxed">Network extensively with leading practitioners, scholars, and peers.</p>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#38A855] shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm text-[#2B2A26]/80 leading-relaxed">Actively promote the heritage and efficacy of traditional medicine.</p>
</div>
<div className="flex items-start gap-3 sm:col-span-2">
<iconify-icon className="text-xl text-[#38A855] shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm text-[#2B2A26]/80 leading-relaxed">Participate in community-driven initiatives like the free medical camp and plant distribution.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1B5325] relative overflow-hidden" id="register">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#FCFAF5 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="text-[#FCFAF5]">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">Secure Your Spot</h2>
<p className="text-lg text-[#FCFAF5]/80 mb-8 max-w-md leading-relaxed">
                        Register for the National Unani Seminar 2026. Join the movement to preserve, study, and advance traditional medicinal practices.
                    </p>
<div className="flex items-center gap-4 text-sm text-[#FCFAF5]/90">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-[#38A855] border-2 border-[#1B5325] flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full bg-[#C1920C] border-2 border-[#1B5325] flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:diploma-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full bg-white border-2 border-[#1B5325] flex items-center justify-center">
<iconify-icon className="text-[#1B5325]" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<p>Join 500+ expected attendees</p>
</div>
</div>

<div className="bg-white rounded-2xl p-8 shadow-xl">
<h3 className="text-xl font-semibold text-[#1B5325] tracking-tight mb-6">Registration Form</h3>
<form className="space-y-5">
<div>
<label className="block text-xs font-semibold text-[#2B2A26]/70 uppercase tracking-wide mb-2">Full Name</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#808080]">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input className="w-full rounded-lg border border-[#808080]/30 pl-11 pr-4 py-3 bg-white text-sm text-[#2B2A26] placeholder:text-[#808080]/60 focus:outline-none focus:ring-2 focus:ring-[#38A855]/50 focus:border-[#38A855] transition-all" placeholder="Dr. John Doe" type="text"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-semibold text-[#2B2A26]/70 uppercase tracking-wide mb-2">Email Address</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#808080]">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input className="w-full rounded-lg border border-[#808080]/30 pl-11 pr-4 py-3 bg-white text-sm text-[#2B2A26] placeholder:text-[#808080]/60 focus:outline-none focus:ring-2 focus:ring-[#38A855]/50 focus:border-[#38A855] transition-all" placeholder="john@example.com" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-[#2B2A26]/70 uppercase tracking-wide mb-2">Phone Number</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#808080]">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input className="w-full rounded-lg border border-[#808080]/30 pl-11 pr-4 py-3 bg-white text-sm text-[#2B2A26] placeholder:text-[#808080]/60 focus:outline-none focus:ring-2 focus:ring-[#38A855]/50 focus:border-[#38A855] transition-all" placeholder="+91 98765 43210" type="tel"/>
</div>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-[#2B2A26]/70 uppercase tracking-wide mb-2">Participation Category</label>
<div className="relative">
<select className="w-full rounded-lg border border-[#808080]/30 pl-4 pr-10 py-3 bg-white text-sm text-[#2B2A26] focus:outline-none focus:ring-2 focus:ring-[#38A855]/50 focus:border-[#38A855] transition-all cursor-pointer">
<option disabled="" selected="" value="">Select your primary interest</option>
<option value="ppt">PowerPoint Presentation</option>
<option value="paper">Paper Presentation</option>
<option value="exhibition">Exhibition Stalls (Vendor)</option>
<option value="attendee">General Attendee / Medical Camp</option>
</select>
<div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-[#808080]">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<label className="flex items-center gap-3 cursor-pointer mt-4">
<div className="relative">
<input className="peer sr-only" type="checkbox"/>
<div className="block h-5 w-9 rounded-full bg-[#808080]/30 peer-checked:bg-[#38A855] transition-colors"></div>
<div className="absolute left-1 top-1 h-3 w-3 rounded-full bg-white transition-transform peer-checked:translate-x-4 shadow-sm"></div>
</div>
<span className="text-xs text-[#2B2A26]/70">Send me seminar updates and schedule changes.</span>
</label>
<button className="w-full bg-[#38A855] text-white py-3.5 rounded-lg text-sm font-medium hover:bg-[#1B5325] transition-colors shadow-sm mt-6" type="button">
                            Complete Registration
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#2B2A26] pt-16 pb-8 border-t border-white/10 mt-auto">
<div className="max-w-[1280px] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 rounded bg-[#FCFAF5] flex items-center justify-center text-[#2B2A26] font-semibold text-lg tracking-tight">
                            U
                        </div>
<span className="font-semibold text-lg tracking-tight text-[#FCFAF5]">NUS26</span>
</div>
<p className="text-sm text-[#FCFAF5]/60 max-w-xs leading-relaxed">
                        National Unani Seminar 2026. Advancing the scope, strengths, and future of Unani medicine through collaboration and research.
                    </p>
</div>

<div>
<h4 className="text-sm font-semibold text-[#FCFAF5] mb-4 tracking-wide">Contact</h4>
<ul className="space-y-3 text-sm text-[#FCFAF5]/60">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg shrink-0 mt-0.5" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span>NTR Auditorium, SPR Telugu University<br/>Beside Public Gardens, Hyderabad</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-lg shrink-0" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<a className="hover:text-white transition-colors" href="#">contact@unaniseminar26.org</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-lg shrink-0" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
<span>+91 12345 67890</span>
</li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-[#FCFAF5] mb-4 tracking-wide">Connect</h4>
<div className="flex gap-4 mb-6">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#38A855] transition-colors border border-white/10" href="#">
<iconify-icon className="text-xl" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#38A855] transition-colors border border-white/10" href="#">
<iconify-icon className="text-xl" icon="solar:gallery-wide-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#38A855] transition-colors border border-white/10" href="#">
<iconify-icon className="text-xl" icon="solar:videocamera-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="flex gap-4 text-xs text-[#FCFAF5]/40 font-medium">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/10 text-center text-xs text-[#FCFAF5]/40 font-medium">
                © 2026 National Unani Seminar. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
