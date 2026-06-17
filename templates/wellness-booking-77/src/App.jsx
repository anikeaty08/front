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
      

<header className="fixed top-0 w-full z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#EBE5DA] transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex-shrink-0 flex items-center">
<a className="text-xl font-semibold text-[#2D5A27] tracking-tighter" href="/#">Just Book</a>
</div>
<nav className="hidden md:flex space-x-8 h-full items-center">
<a className="text-sm font-medium text-[#5D554A] hover:text-[#2D5A27] transition-colors duration-300" href="#">Home</a>
<a className="text-sm font-medium text-[#5D554A] hover:text-[#2D5A27] transition-colors duration-300" href="#about">About</a>
<a className="text-sm font-medium text-[#5D554A] hover:text-[#2D5A27] transition-colors duration-300" href="#services">Department</a>

<div className="relative group h-full flex items-center">
<button className="flex items-center gap-1 text-sm font-medium text-[#5D554A] group-hover:text-[#2D5A27] transition-colors duration-300 outline-none">
                            Specialties <iconify-icon className="text-xs opacity-70 group-hover:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>

<div className="absolute left-1/2 -translate-x-1/2 top-full w-[480px] bg-white border border-[#EBE5DA] rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-50 overflow-hidden transform group-hover:translate-y-0 translate-y-2">
<div className="p-6 grid grid-cols-2 gap-2">
<a className="flex items-start gap-3 p-3 hover:bg-[#FDFBF7] rounded-xl transition-all duration-300 group/item" href="#cardiology">
<div className="w-10 h-10 shrink-0 rounded-lg bg-[#2D5A27]/5 text-[#2D5A27] flex items-center justify-center group-hover/item:bg-[#2D5A27] group-hover/item:text-white transition-colors duration-300">
<iconify-icon className="text-lg" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-[#2A241E] mb-0.5 group-hover/item:text-[#2D5A27] transition-colors">Cardiology</div>
<div className="text-xs text-[#5D554A]">Heart &amp; vascular care</div>
</div>
</a>
<a className="flex items-start gap-3 p-3 hover:bg-[#FDFBF7] rounded-xl transition-all duration-300 group/item" href="#orthopedics">
<div className="w-10 h-10 shrink-0 rounded-lg bg-[#2D5A27]/5 text-[#2D5A27] flex items-center justify-center group-hover/item:bg-[#2D5A27] group-hover/item:text-white transition-colors duration-300">
<iconify-icon className="text-lg" icon="solar:bone-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-[#2A241E] mb-0.5 group-hover/item:text-[#2D5A27] transition-colors">Orthopedics</div>
<div className="text-xs text-[#5D554A]">Bone &amp; joint health</div>
</div>
</a>
<a className="flex items-start gap-3 p-3 hover:bg-[#FDFBF7] rounded-xl transition-all duration-300 group/item" href="#psychology">
<div className="w-10 h-10 shrink-0 rounded-lg bg-[#2D5A27]/5 text-[#2D5A27] flex items-center justify-center group-hover/item:bg-[#2D5A27] group-hover/item:text-white transition-colors duration-300">
<iconify-icon className="text-lg" icon="solar:user-speak-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-[#2A241E] mb-0.5 group-hover/item:text-[#2D5A27] transition-colors">Psychology</div>
<div className="text-xs text-[#5D554A]">Mental well-being</div>
</div>
</a>
<a className="flex items-start gap-3 p-3 hover:bg-[#FDFBF7] rounded-xl transition-all duration-300 group/item" href="#dentistry">
<div className="w-10 h-10 shrink-0 rounded-lg bg-[#2D5A27]/5 text-[#2D5A27] flex items-center justify-center group-hover/item:bg-[#2D5A27] group-hover/item:text-white transition-colors duration-300">
<iconify-icon className="text-lg" icon="solar:teeth-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-[#2A241E] mb-0.5 group-hover/item:text-[#2D5A27] transition-colors">Dentistry</div>
<div className="text-xs text-[#5D554A]">Complete dental care</div>
</div>
</a>
</div>
<div className="bg-[#FDFBF7] p-4 border-t border-[#EBE5DA] text-center">
<a className="text-sm font-medium text-[#2D5A27] hover:text-[#23461F] transition-colors" href="#all-specialties">View all specialties →</a>
</div>
</div>
</div>
<a className="text-sm font-medium text-[#5D554A] hover:text-[#2D5A27] transition-colors duration-300" href="#doctors">Doctors</a>
<a className="text-sm font-medium text-[#5D554A] hover:text-[#2D5A27] transition-colors duration-300" href="#stories">Patient Stories</a>
</nav>
<div className="flex items-center space-x-4">
<a className="inline-flex items-center justify-center px-5 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium bg-[#2D5A27] hover:bg-[#23461F] transition-all text-white" href="#book">
                        Book a Appointment
                    </a>
</div>
</div>
</div>
</header>
<main className="pt-16">

<section className="relative min-h-[850px] lg:min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 pb-12">
<div className="absolute inset-0 z-0">
<img alt="Background" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9135951f-bf3a-47d0-b8e0-04b5cecefaac_1600w.webp"/>
<div className="absolute inset-0 bg-[#FDFBF7]/85 backdrop-blur-sm"></div>
<div className="bg-gradient-to-b from-[#FDFBF7]/95 via-[#FDFBF7]/50 to-[#FDFBF7] absolute inset-0"></div>
</div>
<div className="relative z-10 max-w-6xl w-full text-center">
<h1 className="sm:text-5xl md:text-6xl text-4xl font-semibold text-[#2A241E] tracking-tight font-playfair mb-4 max-w-4xl mx-auto">
                    Top specialists in your city. Available appointments right now.
                </h1>
<p className="sm:text-xl text-lg font-normal text-[#5D554A] font-playfair max-w-2xl mx-auto mb-10">
                    Find an available time slot and book your appointment in seconds.
                </p>

<div className="p-2 rounded-2xl sm:rounded-full shadow-xl shadow-[#2D5A27]/5 border border-[#EBE5DA] flex flex-col sm:flex-row items-center max-w-3xl mx-auto bg-white mb-16">
<div className="flex-1 w-full flex items-center px-4 py-3 sm:py-2 border-b sm:border-b-0 sm:border-r border-[#EBE5DA] group">
<iconify-icon className="text-[#C5A059] mr-3 text-xl" icon="solar:magnifer-linear"></iconify-icon>
<div className="text-left w-full">
<label className="block text-xs font-semibold text-[#2D5A27] uppercase tracking-wide">Specialty</label>
<input className="w-full text-sm text-[#2A241E] placeholder-[#9CA3AF] focus:outline-none bg-transparent font-medium" placeholder="Orthopedist, Dermatologist..." type="text"/>
</div>
</div>
<div className="flex-1 w-full flex items-center px-4 py-3 sm:py-2 border-b sm:border-b-0 sm:border-r border-[#EBE5DA] group">
<iconify-icon className="text-[#C5A059] mr-3 text-xl" icon="solar:map-point-linear"></iconify-icon>
<div className="text-left w-full">
<label className="block text-xs font-semibold text-[#2D5A27] uppercase tracking-wide">Location</label>
<input className="w-full text-sm text-[#2A241E] placeholder-[#9CA3AF] focus:outline-none bg-transparent font-medium" placeholder="Warsaw" type="text"/>
</div>
</div>
<div className="p-2 w-full sm:w-auto">
<button className="w-full sm:w-auto bg-[#2D5A27] hover:bg-[#23461F] rounded-xl sm:rounded-full px-8 py-3.5 text-sm font-medium transition-all text-white flex justify-center">
                            Search
                        </button>
</div>
</div>

<div className="w-full relative mt-8 -mx-4 sm:mx-0 px-4 sm:px-0">

<div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#FDFBF7] to-transparent z-20 pointer-events-none hidden sm:block"></div>
<div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#FDFBF7] to-transparent z-20 pointer-events-none hidden sm:block"></div>
<div className="flex overflow-x-auto hide-scroll gap-4 sm:gap-6 snap-x snap-mandatory scroll-smooth pb-8 pt-4 px-2 sm:px-12 items-center justify-start lg:justify-center min-w-full">

<a className="snap-start shrink-0 flex flex-col items-center justify-center gap-3 bg-white/70 backdrop-blur-md border border-[#EBE5DA] w-[160px] h-[140px] rounded-2xl hover:bg-white hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#2D5A27]/10 hover:border-[#2D5A27]/30 transition-all duration-500 group" href="#find-doctor">
<div className="w-12 h-12 rounded-full bg-[#FDFBF7] border border-[#EBE5DA] flex items-center justify-center text-[#5D554A] group-hover:bg-[#2D5A27] group-hover:text-white group-hover:border-transparent transition-all duration-500 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:user-rounded-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold text-[#2A241E] text-center uppercase tracking-wide group-hover:text-[#2D5A27] transition-colors duration-500">Find A Doctor</span>
</a>

<a className="snap-start shrink-0 flex flex-col items-center justify-center gap-3 bg-white/70 backdrop-blur-md border border-[#EBE5DA] w-[160px] h-[140px] rounded-2xl hover:bg-white hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#2D5A27]/10 hover:border-[#2D5A27]/30 transition-all duration-500 group" href="#book-appointment">
<div className="w-12 h-12 rounded-full bg-[#FDFBF7] border border-[#EBE5DA] flex items-center justify-center text-[#5D554A] group-hover:bg-[#2D5A27] group-hover:text-white group-hover:border-transparent transition-all duration-500 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:calendar-add-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold text-[#2A241E] text-center uppercase tracking-wide group-hover:text-[#2D5A27] transition-colors duration-500 px-2">Book Appointment</span>
</a>

<a className="snap-start shrink-0 flex flex-col items-center justify-center gap-3 bg-white/70 backdrop-blur-md border border-[#EBE5DA] w-[160px] h-[140px] rounded-2xl hover:bg-white hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#2D5A27]/10 hover:border-[#2D5A27]/30 transition-all duration-500 group" href="#book-test">
<div className="w-12 h-12 rounded-full bg-[#FDFBF7] border border-[#EBE5DA] flex items-center justify-center text-[#5D554A] group-hover:bg-[#2D5A27] group-hover:text-white group-hover:border-transparent transition-all duration-500 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:health-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold text-[#2A241E] text-center uppercase tracking-wide group-hover:text-[#2D5A27] transition-colors duration-500">Book A Test</span>
</a>

<a className="snap-start shrink-0 flex flex-col items-center justify-center gap-3 bg-white/70 backdrop-blur-md border border-[#EBE5DA] w-[160px] h-[140px] rounded-2xl hover:bg-white hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#2D5A27]/10 hover:border-[#2D5A27]/30 transition-all duration-500 group" href="#tele-online">
<div className="w-12 h-12 rounded-full bg-[#FDFBF7] border border-[#EBE5DA] flex items-center justify-center text-[#5D554A] group-hover:bg-[#2D5A27] group-hover:text-white group-hover:border-transparent transition-all duration-500 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:laptop-minimalistic-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold text-[#2A241E] text-center uppercase tracking-wide group-hover:text-[#2D5A27] transition-colors duration-500 px-2">Tele-Online Patient</span>
</a>

<a className="snap-start shrink-0 flex flex-col items-center justify-center gap-3 bg-white/70 backdrop-blur-md border border-[#EBE5DA] w-[160px] h-[140px] rounded-2xl hover:bg-white hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#2D5A27]/10 hover:border-[#2D5A27]/30 transition-all duration-500 group" href="#online-report">
<div className="w-12 h-12 rounded-full bg-[#FDFBF7] border border-[#EBE5DA] flex items-center justify-center text-[#5D554A] group-hover:bg-[#2D5A27] group-hover:text-white group-hover:border-transparent transition-all duration-500 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold text-[#2A241E] text-center uppercase tracking-wide group-hover:text-[#2D5A27] transition-colors duration-500">Online Report</span>
</a>

<a className="snap-start shrink-0 flex flex-col items-center justify-center gap-3 bg-white/70 backdrop-blur-md border border-[#EBE5DA] w-[160px] h-[140px] rounded-2xl hover:bg-white hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#2D5A27]/10 hover:border-[#2D5A27]/30 transition-all duration-500 group" href="#health-package">
<div className="w-12 h-12 rounded-full bg-[#FDFBF7] border border-[#EBE5DA] flex items-center justify-center text-[#5D554A] group-hover:bg-[#2D5A27] group-hover:text-white group-hover:border-transparent transition-all duration-500 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:shield-plus-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold text-[#2A241E] text-center uppercase tracking-wide group-hover:text-[#2D5A27] transition-colors duration-500 px-2">Health Package</span>
</a>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-[#EBE5DA] bg-white relative z-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-[#EBE5DA]">
<div>
<div className="text-3xl font-semibold text-[#2A241E] font-playfair tracking-tight">500+</div>
<div className="text-sm text-[#5D554A] mt-1">Verified Clinics</div>
</div>
<div>
<div className="text-3xl font-semibold text-[#2A241E] font-playfair tracking-tight">1200+</div>
<div className="text-sm text-[#5D554A] mt-1">Specialists</div>
</div>
<div>
<div className="text-3xl font-semibold text-[#2A241E] font-playfair tracking-tight">2M+</div>
<div className="text-sm text-[#5D554A] mt-1">Happy Patients</div>
</div>
<div>
<div className="text-3xl font-semibold text-[#2A241E] font-playfair tracking-tight">4.9/5</div>
<div className="text-sm text-[#5D554A] mt-1">Average Rating</div>
</div>
</div>
</div>
</section>

<section className="py-10 bg-[#FDFBF7] border-b border-[#EBE5DA]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-6">Trusted by the best</p>
<div className="flex flex-wrap justify-center gap-12 items-center opacity-60 grayscale">
<div className="text-xl font-semibold font-playfair text-[#2A241E] tracking-tight">Enel-Med</div>
<div className="text-xl font-semibold font-playfair text-[#2A241E] tracking-tight">LuxMed</div>
<div className="text-xl font-semibold font-playfair text-[#2A241E] tracking-tight">Medicover</div>
<div className="text-xl font-semibold font-playfair text-[#2A241E] tracking-tight">Damian Medical</div>
<div className="text-xl font-semibold font-playfair text-[#2A241E] tracking-tight">Aura Clinic</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<span className="text-xs font-semibold text-[#C5A059] uppercase tracking-wide mb-2 block">About Us</span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#2A241E] mb-6 font-playfair">
                            Changing healthcare standards
                        </h2>
<p className="text-[#5D554A] text-base leading-relaxed mb-6">
                            Just Book is more than a booking platform. It's a carefully curated network of top medical facilities and wellness clinics, where quality and patient comfort come first.
                        </p>
<p className="text-[#5D554A] text-base leading-relaxed mb-8">
                            We ensure the booking process is transparent, fast, and completely secure. We believe health is the most important investment, which is why we only work with certified specialists.
                        </p>
<a className="inline-flex items-center text-[#2D5A27] font-medium hover:text-[#23461F] transition-colors" href="#contact">
                            Discover our story <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="relative">
<div className="absolute inset-0 bg-[#C5A059]/10 rounded-2xl transform translate-x-4 translate-y-4"></div>
<img alt="Medical clinic" className="relative rounded-2xl shadow-lg w-full h-[400px] object-cover" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-[#EBE5DA] bg-[#FDFBF7]" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-2xl sm:text-3xl font-semibold text-[#2A241E] tracking-tight">Our specialties</h2>
<p className="mt-4 text-[#5D554A]">Quick access to experts in various fields.</p>
</div>
<div className="flex flex-wrap justify-center gap-6 sm:gap-10">
<a className="group flex flex-col items-center min-w-[90px] cursor-pointer" href="#">
<div className="w-16 h-16 rounded-full border border-[#EBE5DA] flex items-center justify-center text-[#5D554A] group-hover:border-[#2D5A27] group-hover:bg-[#2D5A27]/5 transition-all shadow-sm bg-white">
<iconify-icon className="group-hover:text-[#2D5A27] transition-colors" icon="solar:heart-pulse-linear" width="28"></iconify-icon>
</div>
<span className="mt-3 text-sm font-medium text-[#5D554A] group-hover:text-[#2D5A27]">Cardiology</span>
</a>
<a className="group flex flex-col items-center min-w-[90px] cursor-pointer" href="#">
<div className="w-16 h-16 rounded-full border border-[#EBE5DA] flex items-center justify-center text-[#5D554A] group-hover:border-[#2D5A27] group-hover:bg-[#2D5A27]/5 transition-all shadow-sm bg-white">
<iconify-icon className="group-hover:text-[#2D5A27] transition-colors" icon="solar:bone-linear" width="28"></iconify-icon>
</div>
<span className="mt-3 text-sm font-medium text-[#5D554A] group-hover:text-[#2D5A27]">Orthopedics</span>
</a>
<a className="group flex flex-col items-center min-w-[90px] cursor-pointer" href="#">
<div className="w-16 h-16 rounded-full border border-[#EBE5DA] flex items-center justify-center text-[#5D554A] group-hover:border-[#2D5A27] group-hover:bg-[#2D5A27]/5 transition-all shadow-sm bg-white">
<iconify-icon className="group-hover:text-[#2D5A27] transition-colors" icon="solar:user-speak-linear" width="28"></iconify-icon>
</div>
<span className="mt-3 text-sm font-medium text-[#5D554A] group-hover:text-[#2D5A27]">Psychology</span>
</a>
<a className="group flex flex-col items-center min-w-[90px] cursor-pointer" href="#">
<div className="w-16 h-16 rounded-full border border-[#EBE5DA] flex items-center justify-center text-[#5D554A] group-hover:border-[#2D5A27] group-hover:bg-[#2D5A27]/5 transition-all shadow-sm bg-white">
<iconify-icon className="group-hover:text-[#2D5A27] transition-colors" icon="solar:sparkles-linear" width="28"></iconify-icon>
</div>
<span className="mt-3 text-sm font-medium text-[#5D554A] group-hover:text-[#2D5A27]">Aesthetics</span>
</a>
<a className="group flex flex-col items-center min-w-[90px] cursor-pointer" href="#">
<div className="w-16 h-16 rounded-full border border-[#EBE5DA] flex items-center justify-center text-[#5D554A] group-hover:border-[#2D5A27] group-hover:bg-[#2D5A27]/5 transition-all shadow-sm bg-white">
<iconify-icon className="group-hover:text-[#2D5A27] transition-colors" icon="solar:teeth-linear" width="28"></iconify-icon>
</div>
<span className="mt-3 text-sm font-medium text-[#5D554A] group-hover:text-[#2D5A27]">Dentistry</span>
</a>
<a className="group flex flex-col items-center min-w-[90px] cursor-pointer" href="#">
<div className="w-16 h-16 rounded-full border border-[#EBE5DA] flex items-center justify-center text-[#5D554A] group-hover:border-[#2D5A27] group-hover:bg-[#2D5A27]/5 transition-all shadow-sm bg-white">
<iconify-icon className="group-hover:text-[#2D5A27] transition-colors" icon="solar:body-shape-linear" width="28"></iconify-icon>
</div>
<span className="mt-3 text-sm font-medium text-[#5D554A] group-hover:text-[#2D5A27]">Physiotherapy</span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-[#EBE5DA]" id="doctors">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#2A241E]">Find a specialist</h2>
<p className="mt-2 text-[#5D554A]">Book an appointment with recommended doctors in your area.</p>
</div>
<a className="hidden sm:flex items-center text-[#2D5A27] font-medium hover:text-[#23461F] transition-colors text-sm" href="#">
                        All doctors <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group rounded-xl border border-[#EBE5DA] overflow-hidden hover:shadow-lg transition-all duration-300 bg-white">
<div className="relative h-64 overflow-hidden bg-[#F2EFE9]">
<img alt="Doctor" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-semibold text-[#2A241E] flex items-center gap-1 bg-white/95 shadow-sm">
<iconify-icon className="text-[#C5A059]" icon="solar:star-bold"></iconify-icon> 5.0
                            </div>
</div>
<div className="p-6">
<div className="mb-2">
<h3 className="text-lg font-semibold text-[#2A241E] group-hover:text-[#2D5A27] transition-colors">dr Anna Kowalska</h3>
<p className="text-sm text-[#C5A059] font-medium">Cardiologist</p>
</div>
<p className="text-sm text-[#5D554A] flex items-center gap-1 mb-4">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Aura Medical Center, Warsaw
                            </p>
<div className="pt-4 border-t border-[#F2EFE9] flex items-center justify-between">
<span className="text-xs font-medium text-[#5D554A]">Next available: <span className="text-[#2A241E] font-semibold">Today, 14:30</span></span>
<button className="text-sm font-semibold text-[#2D5A27] hover:text-[#C5A059] transition-colors">Book now</button>
</div>
</div>
</div>

<div className="group rounded-xl border border-[#EBE5DA] overflow-hidden hover:shadow-lg transition-all duration-300 bg-white">
<div className="relative h-64 overflow-hidden bg-[#F2EFE9]">
<img alt="Doctor" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-semibold text-[#2A241E] flex items-center gap-1 bg-white/95 shadow-sm">
<iconify-icon className="text-[#C5A059]" icon="solar:star-bold"></iconify-icon> 4.9
                            </div>
</div>
<div className="p-6">
<div className="mb-2">
<h3 className="text-lg font-semibold text-[#2A241E] group-hover:text-[#2D5A27] transition-colors">dr Piotr Nowak</h3>
<p className="text-sm text-[#C5A059] font-medium">Orthopedist</p>
</div>
<p className="text-sm text-[#5D554A] flex items-center gap-1 mb-4">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Motion Clinic, Krakow
                            </p>
<div className="pt-4 border-t border-[#F2EFE9] flex items-center justify-between">
<span className="text-xs font-medium text-[#5D554A]">Next available: <span className="text-[#2A241E] font-semibold">Tomorrow, 09:00</span></span>
<button className="text-sm font-semibold text-[#2D5A27] hover:text-[#C5A059] transition-colors">Book now</button>
</div>
</div>
</div>

<div className="group rounded-xl border border-[#EBE5DA] overflow-hidden hover:shadow-lg transition-all duration-300 bg-white">
<div className="relative h-64 overflow-hidden bg-[#F2EFE9]">
<img alt="Doctor" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1594824436998-05223c6f2ea4?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-semibold text-[#2A241E] flex items-center gap-1 bg-white/95 shadow-sm">
<iconify-icon className="text-[#C5A059]" icon="solar:star-bold"></iconify-icon> 5.0
                            </div>
</div>
<div className="p-6">
<div className="mb-2">
<h3 className="text-lg font-semibold text-[#2A241E] group-hover:text-[#2D5A27] transition-colors">Marta Wiśniewska</h3>
<p className="text-sm text-[#C5A059] font-medium">Physiotherapist</p>
</div>
<p className="text-sm text-[#5D554A] flex items-center gap-1 mb-4">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Holistic Space, Wroclaw
                            </p>
<div className="pt-4 border-t border-[#F2EFE9] flex items-center justify-between">
<span className="text-xs font-medium text-[#5D554A]">Next available: <span className="text-[#2A241E] font-semibold">Today, 18:00</span></span>
<button className="text-sm font-semibold text-[#2D5A27] hover:text-[#C5A059] transition-colors">Book now</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-[#EBE5DA]" id="book">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-[#FDFBF7] border border-[#EBE5DA] rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#2D5A27]/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
<div className="relative z-10">
<h2 className="text-3xl font-semibold text-[#2A241E] tracking-tight mb-2">Book a quick appointment</h2>
<p className="text-[#5D554A] mb-8">Fill out the form to find the nearest available slot.</p>
<form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="col-span-1 sm:col-span-2">
<label className="block text-xs font-semibold text-[#5D554A] uppercase tracking-wider mb-2">Appointment type</label>
<select className="w-full px-4 py-3 bg-white border border-[#EBE5DA] rounded-xl text-sm focus:outline-none focus:border-[#2D5A27] focus:ring-1 focus:ring-[#2D5A27] text-[#2A241E] appearance-none">
<option>Choose specialty...</option>
<option>Cardiology consultation</option>
<option>Ultrasound</option>
<option>Physiotherapy</option>
</select>
</div>
<div>
<label className="block text-xs font-semibold text-[#5D554A] uppercase tracking-wider mb-2">Date</label>
<div className="relative">
<iconify-icon className="absolute left-4 top-3.5 text-[#9CA3AF] text-lg" icon="solar:calendar-linear"></iconify-icon>
<input className="w-full pl-11 pr-4 py-3 bg-white border border-[#EBE5DA] rounded-xl text-sm focus:outline-none focus:border-[#2D5A27] focus:ring-1 focus:ring-[#2D5A27] text-[#2A241E]" type="date"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-[#5D554A] uppercase tracking-wider mb-2">Preferred Time</label>
<select className="w-full px-4 py-3 bg-white border border-[#EBE5DA] rounded-xl text-sm focus:outline-none focus:border-[#2D5A27] focus:ring-1 focus:ring-[#2D5A27] text-[#2A241E] appearance-none">
<option>Anytime</option>
<option>Morning (08:00 - 12:00)</option>
<option>Afternoon (12:00 - 16:00)</option>
<option>Evening (16:00 - 20:00)</option>
</select>
</div>
<div className="col-span-1 sm:col-span-2 mt-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-[#2D5A27] hover:bg-[#23461F] text-white text-sm font-medium rounded-xl transition-all shadow-md shadow-[#2D5A27]/20 flex justify-center items-center gap-2" type="button">
<iconify-icon icon="solar:calendar-add-linear"></iconify-icon> Find slots
                                </button>
</div>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FDFBF7] border-t border-b border-[#EBE5DA]" id="stories">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#2A241E]">Patient Stories</h2>
<p className="mt-2 text-[#5D554A]">What people who trusted us say.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-[#EBE5DA] shadow-sm">
<div className="flex text-[#C5A059] mb-4 gap-0.5">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-[#5D554A] text-sm leading-relaxed mb-6 italic">"Incredibly simple and intuitive app. I found a cardiologist for the same day, and paying upfront saved me stress at the clinic."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#F2EFE9] flex items-center justify-center font-semibold text-[#2D5A27] text-sm border border-[#EBE5DA]">MW</div>
<div>
<div className="text-sm font-semibold text-[#2A241E]">Magdalena W.</div>
<div className="text-xs text-[#9CA3AF]">Patient since 2022</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-[#EBE5DA] shadow-sm">
<div className="flex text-[#C5A059] mb-4 gap-0.5">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-[#5D554A] text-sm leading-relaxed mb-6 italic">"I've been using Just Book for years to book my physiotherapist. The e-prescription feature is a real game-changer. Top-tier service."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#F2EFE9] flex items-center justify-center font-semibold text-[#2D5A27] text-sm border border-[#EBE5DA]">JD</div>
<div>
<div className="text-sm font-semibold text-[#2A241E]">John D.</div>
<div className="text-xs text-[#9CA3AF]">Patient since 2021</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-[#EBE5DA] shadow-sm">
<div className="flex text-[#C5A059] mb-4 gap-0.5">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-[#5D554A] text-sm leading-relaxed mb-6 italic">"Great interface and access to the best clinics. Discreet SMS reminders help a lot in planning my day."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#F2EFE9] flex items-center justify-center font-semibold text-[#2D5A27] text-sm border border-[#EBE5DA]">AK</div>
<div>
<div className="text-sm font-semibold text-[#2A241E]">Anna K.</div>
<div className="text-xs text-[#9CA3AF]">Patient since 2023</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#F2EFE9] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="text-xl font-semibold tracking-tighter text-[#2D5A27] mb-4 block" href="#">just-book</a>
<p className="text-sm text-[#5D554A] mb-6">
                            A booking platform for the demanding. We combine peace of mind with medical technology.
                        </p>
<div className="flex space-x-4">
<a className="text-[#9CA3AF] hover:text-[#2D5A27] transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-[#9CA3AF] hover:text-[#2D5A27] transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-[#9CA3AF] hover:text-[#2D5A27] transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-[#2A241E] uppercase tracking-wider mb-4">For Patients</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#5D554A] hover:text-[#2D5A27] transition-colors" href="#services">Specialties</a></li>
<li><a className="text-sm text-[#5D554A] hover:text-[#2D5A27] transition-colors" href="#doctors">Find a Doctor</a></li>
<li><a className="text-sm text-[#5D554A] hover:text-[#2D5A27] transition-colors" href="#book">Book Appointment</a></li>
<li><a className="text-sm text-[#5D554A] hover:text-[#2D5A27] transition-colors" href="#">Online Results</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-[#2A241E] uppercase tracking-wider mb-4">Company &amp; Legal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#5D554A] hover:text-[#2D5A27] transition-colors" href="#about">About Us</a></li>
<li><a className="text-sm text-[#5D554A] hover:text-[#2D5A27] transition-colors" href="#contact">Contact</a></li>
<li><a className="text-sm text-[#5D554A] hover:text-[#2D5A27] transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-sm text-[#5D554A] hover:text-[#2D5A27] transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-[#2A241E] uppercase tracking-wider mb-4">Newsletter</h4>
<p className="text-sm text-[#5D554A] mb-4">Subscribe to receive health tips and discounts on check-ups.</p>
<form className="flex flex-col gap-2">
<input className="w-full px-4 py-2.5 text-sm border border-[#EBE5DA] rounded-lg focus:outline-none focus:border-[#2D5A27] focus:ring-1 focus:ring-[#2D5A27] placeholder-[#9CA3AF] bg-white text-[#2A241E]" placeholder="Your email" type="email"/>
<button className="w-full px-4 py-2.5 text-sm font-medium bg-[#2A241E] hover:bg-[#1a1612] rounded-lg transition-colors text-white" type="submit">
                                Subscribe
                            </button>
</form>
</div>
</div>
<div className="border-t border-[#EBE5DA] pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-xs text-[#9CA3AF]">© 2023 just-book. All rights reserved.</p>
</div>
</div>
</footer>
</main>

    </>
  );
}
