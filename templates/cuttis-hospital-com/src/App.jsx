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



    document.getElementById('year-span').textContent = new Date().getFullYear();
  
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
      
<div className="min-h-screen flex flex-col">

<header className="border-b border-emerald-900/50 bg-[#1b2320]/90 backdrop-blur-sm sticky top-0 z-50">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
<div className="flex flex-col">
<span className="text-xl font-medium text-emerald-50 tracking-tight font-playfair">Cuttis Hospital</span>
<span className="text-[0.65rem] text-emerald-300 uppercase tracking-widest font-medium">Dr. Vivek Ambedkar</span>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-emerald-400 text-emerald-950 px-4 py-2 text-xs sm:text-sm font-medium hover:bg-emerald-300 hover:shadow-sm transition-colors cursor-pointer" href="#appointment">
<span className="">Book Appointment</span>
<iconify-icon className="w-4 h-4" icon="solar:calendar-add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</header>
<main className="flex-1 w-full">

<div className="sm:px-6 lg:px-8 lg:py-16 flex flex-col w-full max-w-6xl mr-auto ml-auto pt-10 pr-4 pb-10 pl-4 justify-center">

<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10 lg:mb-12">
<div className="max-w-3xl">
<h1 className="leading-tight sm:text-5xl lg:text-7xl text-4xl text-emerald-50 tracking-tight font-playfair">Transforming lives with precision &amp; care.</h1>
<h2 className="leading-tight sm:text-4xl lg:text-5xl text-3xl font-medium italic text-emerald-300 tracking-tight font-playfair mt-2">Expert Plastic &amp; Cosmetic Surgery.</h2>
<p className="sm:text-base text-sm text-emerald-100/80 max-w-xl mt-4">Specializing in Gynecomastia, Hair Transplants, Liposuction, Rhinoplasty, and comprehensive aesthetic treatments tailored to your unique goals.</p>
<div className="flex flex-wrap gap-4 mt-6 gap-x-4 gap-y-4 items-center">
<a className="inline-flex items-center gap-2 hover:bg-emerald-300 hover:shadow-sm transition-colors cursor-pointer text-sm font-medium text-emerald-950 bg-emerald-400 rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#appointment">
<span className="">Schedule Consultation</span>
<iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 hover:bg-emerald-900/40 hover:text-emerald-50 transition-colors cursor-pointer text-sm font-medium text-emerald-200 border border-emerald-800 rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="tel:09149049943">
<iconify-icon className="w-4 h-4" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="">091490 49943</span>
</a>
</div>
</div>

<div className="flex items-center gap-4 self-start md:self-end">
<div className="flex items-center gap-1 text-amber-400 text-sm">
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
</div>
<div className="flex flex-col items-start">
<span className="text-xs text-emerald-100/90 font-medium">Trusted by thousands</span>
<div className="-space-x-2 flex mt-1">
<img alt="Patient" className="w-7 h-7 object-cover border-[#1b2320] border rounded-full" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
<img alt="Patient" className="w-7 h-7 object-cover border-[#1b2320] border rounded-full" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
<img alt="Patient" className="w-7 h-7 object-cover border-[#1b2320] border rounded-full" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
</div>
</div>
</div>
</div>

<section className="grid gap-6 lg:gap-7 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.1fr)] gap-x-6 gap-y-6 items-center">

<article className="overflow-hidden bg-[#111715] rounded-3xl relative shadow-sm border border-emerald-900/60">
<div className="w-full h-[680px] relative">
<div className="w-full h-full relative overflow-hidden group rounded-3xl">
<img alt="Modern Clinic Facility" className="w-full h-full object-cover opacity-80 mix-blend-luminosity" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-emerald-900/20"></div>

<div className="absolute bottom-0 inset-x-0 h-[15%] min-h-[90px] backdrop-blur-xl bg-white/5 border-t border-white/10 flex items-center justify-between px-6 sm:px-10 z-20 shadow-[0_-8px_32px_rgba(0,0,0,0.15)]">
<div className="flex flex-col">
<span className="text-white font-playfair font-medium text-lg sm:text-xl tracking-tight drop-shadow-sm">Ready for a consultation?</span>
<span className="text-white/80 text-xs sm:text-sm mt-0.5 drop-shadow-sm hidden sm:block">Discuss your goals directly with our specialists.</span>
</div>
<a className="shrink-0 inline-flex items-center gap-2 rounded-full bg-emerald-400 text-emerald-950 px-5 py-2.5 text-sm font-medium hover:bg-emerald-300 transition-all duration-200" href="https://wa.me/919149049943" target="_blank">
<iconify-icon className="w-4 h-4" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="hidden sm:inline">WhatsApp Us</span>
<span className="sm:hidden">Chat</span>
</a>
</div>
</div>

<div className="absolute top-5 left-5 sm:top-6 sm:left-6 z-10">
<div className="sm:p-5 sm:max-w-xs flex gap-3 sm:gap-4 bg-[#1f2924]/95 max-w-[16rem] border-emerald-900/70 border rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-md backdrop-blur-sm gap-x-3 gap-y-3 items-start">
<img alt="Dr Vivek Ambedkar" className="sm:w-12 sm:h-12 shrink-0 w-10 h-10 object-cover border-emerald-900/60 border-2 rounded-full" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&amp;q=80"/>
<div className="flex flex-col">
<h3 className="text-sm sm:text-base font-medium text-emerald-50 tracking-tight font-playfair">Dr. Vivek Ambedkar</h3>
<p className="text-[0.65rem] sm:text-[10px] uppercase font-medium text-emerald-400 tracking-widest mt-0.5">Lead Surgeon</p>
<p className="leading-relaxed text-xs text-emerald-100/80 mt-1.5">Extensive experience and specialization in advanced plastic and cosmetic procedures.</p>
</div>
</div>
</div>
</div>
</article>

<div className="flex flex-col gap-6 lg:gap-7 h-full">

<article className="flex flex-col sm:flex-row bg-[#232e29] border-emerald-900/70 border rounded-3xl items-stretch justify-between overflow-hidden">
<div className="flex-1 flex flex-col justify-between p-6 sm:p-7 lg:p-8">
<div className="flex items-center justify-between mb-4">
<div className="flex text-emerald-200 bg-emerald-900/60 w-9 h-9 rounded-full items-center justify-center">
<iconify-icon className="w-[16px] h-[16px]" icon="solar:body-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-xs font-medium text-emerald-100 bg-emerald-900/60 px-2.5 py-1 rounded-full">
                    Featured
                  </p>
</div>
<div className="">
<h3 className="font-playfair font-medium tracking-tight text-xl text-emerald-50">
                    Gynecomastia &amp; Liposuction
                  </h3>
<p className="mt-1 font-playfair font-medium tracking-tight text-lg text-emerald-100 italic">
                    Advanced body contouring
                  </p>
<p className="text-sm text-emerald-100/80 max-w-sm mt-3">Utilizing the latest minimally invasive techniques to provide natural-looking results with minimal downtime and scarring.</p>
</div>
<div className="mt-6 flex items-center gap-3 text-xs text-emerald-200/80">
<div className="flex items-center gap-1">
<iconify-icon className="w-3.5 h-3.5 text-emerald-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="">Safe, predictable outcomes</span>
</div>
</div>
</div>
<div className="flex-1 relative min-h-[240px] sm:min-h-0 bg-emerald-900/20">
<img alt="Body Contouring Consultation" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-60" src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&amp;q=80"/>
</div>
</article>

<article className="flex flex-col sm:flex-row overflow-hidden text-emerald-50 bg-[#2f3b30] border-emerald-900/70 border rounded-3xl items-stretch">
<div className="flex-1 p-6 sm:p-7 lg:p-8">
<p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-emerald-200 mb-2">
                  HAIR RESTORATION
                </p>
<h3 className="font-playfair text-2xl sm:text-[1.6rem] font-medium tracking-tight text-emerald-50">
                  Hair Transplant Solutions
                </h3>
<p className="text-lg font-medium italic text-emerald-100/90 tracking-tight font-playfair mt-1">FUE, FUT &amp; PRP Therapy</p>
<ul className="mt-6 space-y-3 text-sm">
<li className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-emerald-200" icon="solar:verified-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-emerald-50/90">High density &amp; natural hairline</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-emerald-200" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-emerald-50/90">Advanced pain-free techniques</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-emerald-200" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-emerald-50/90">Comprehensive hair loss treatments</span>
</li>
</ul>
</div>
<div className="flex-1 relative min-h-[240px] sm:min-h-0 bg-emerald-900/20">
<img alt="Hair Treatment" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-70" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&amp;q=80"/>
</div>
</article>
</div>
</section>
</div>

<section className="text-stone-900 bg-amber-50 w-full border-stone-200/80 border-t">
<div className="sm:px-6 lg:px-8 lg:py-20 max-w-6xl mr-auto ml-auto pt-14 pr-4 pb-14 pl-4">

<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
<div className="max-w-2xl">
<p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-stone-500 mb-3">
                OUR EXPERTISE
              </p>
<h2 className="font-playfair text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight tracking-tight text-stone-900">
                Comprehensive Treatments:
                <span className="italic text-stone-700">Artistry meets Medicine</span>
</h2>
<p className="sm:text-base text-sm text-stone-700 mt-4">We offer a full spectrum of plastic and cosmetic procedures, utilizing state-of-the-art technology and proven surgical techniques to achieve your desired aesthetic.</p>
</div>
</div>

<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

<article className="group sm:px-6 sm:py-7 flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-200 bg-amber-100/50 border-stone-200 border rounded-3xl px-5 py-6 shadow-sm justify-start">
<div className="flex items-center gap-3 mb-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-900 text-[#f4eadf]">
<iconify-icon className="w-5 h-5" icon="solar:scissors-linear"></iconify-icon>
</div>
<h3 className="font-playfair text-xl font-medium tracking-tight text-stone-900">Hair Transplant</h3>
</div>
<ul className="space-y-2 text-sm text-stone-700 font-medium">
<li className="flex items-center gap-2 text-emerald-800"><span className="h-1 w-2 rounded-full bg-emerald-800"></span>FUE &amp; FUT Transplant</li>
<li className="flex items-center gap-2 text-emerald-800"><span className="h-1 w-2 rounded-full bg-emerald-800"></span>PRP Therapy</li>
<li className="flex items-center gap-2 text-emerald-800"><span className="h-1 w-2 rounded-full bg-emerald-800"></span>Hair Loss Treatment</li>
</ul>
</article>

<article className="group sm:px-6 sm:py-7 flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-200 bg-amber-100/50 border-stone-200 border rounded-3xl px-5 py-6 shadow-sm justify-start">
<div className="flex items-center gap-3 mb-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-900 text-[#f4eadf]">
<iconify-icon className="w-5 h-5" icon="solar:accessibility-linear"></iconify-icon>
</div>
<h3 className="font-playfair text-xl font-medium tracking-tight text-stone-900">Body Contouring</h3>
</div>
<ul className="space-y-2 text-sm text-stone-700 font-medium">
<li className="flex items-center gap-2 text-emerald-800"><span className="h-1 w-2 rounded-full bg-emerald-800"></span>Liposuction &amp; Tummy Tuck</li>
<li className="flex items-center gap-2 text-emerald-800"><span className="h-1 w-2 rounded-full bg-emerald-800"></span>Six Pack Surgery</li>
<li className="flex items-center gap-2 text-emerald-800"><span className="h-1 w-2 rounded-full bg-emerald-800"></span>Arm &amp; Thigh Lift</li>
</ul>
</article>

<article className="group sm:px-6 sm:py-7 flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-200 bg-amber-100/50 border-stone-200 border rounded-3xl px-5 py-6 shadow-sm justify-start">
<div className="flex items-center gap-3 mb-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-900 text-[#f4eadf]">
<iconify-icon className="w-5 h-5" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<h3 className="font-playfair text-xl font-medium tracking-tight text-stone-900">Breast Surgeries</h3>
</div>
<ul className="space-y-2 text-sm text-stone-700 font-medium">
<li className="flex items-center gap-2 text-emerald-800"><span className="h-1 w-2 rounded-full bg-emerald-800"></span>Breast Augmentation</li>
<li className="flex items-center gap-2 text-emerald-800"><span className="h-1 w-2 rounded-full bg-emerald-800"></span>Breast Reduction</li>
<li className="flex items-center gap-2 text-emerald-800"><span className="h-1 w-2 rounded-full bg-emerald-800"></span>Breast Implants</li>
</ul>
</article>

<article className="group sm:px-6 sm:py-7 flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-200 bg-amber-100/50 border-stone-200 border rounded-3xl px-5 py-6 shadow-sm justify-start">
<div className="flex items-center gap-3 mb-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-900 text-[#f4eadf]">
<iconify-icon className="w-5 h-5" icon="solar:user-circle-linear"></iconify-icon>
</div>
<h3 className="font-playfair text-xl font-medium tracking-tight text-stone-900">Facial Surgeries</h3>
</div>
<ul className="space-y-2 text-sm text-stone-700 font-medium">
<li className="flex items-center gap-2 text-emerald-800"><span className="h-1 w-2 rounded-full bg-emerald-800"></span>Rhinoplasty (Nose Job)</li>
<li className="flex items-center gap-2 text-emerald-800"><span className="h-1 w-2 rounded-full bg-emerald-800"></span>Facelift &amp; Blepharoplasty</li>
<li className="flex items-center gap-2 text-emerald-800"><span className="h-1 w-2 rounded-full bg-emerald-800"></span>Chin Augmentation</li>
</ul>
</article>

<article className="group sm:px-6 sm:py-7 flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-200 bg-amber-100/50 border-stone-200 border rounded-3xl px-5 py-6 shadow-sm justify-start">
<div className="flex items-center gap-3 mb-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-900 text-[#f4eadf]">
<iconify-icon className="w-5 h-5" icon="solar:medical-kit-linear"></iconify-icon>
</div>
<h3 className="font-playfair text-xl font-medium tracking-tight text-stone-900">Cosmetic Gynecology</h3>
</div>
<ul className="space-y-2 text-sm text-stone-700 font-medium">
<li className="flex items-center gap-2 text-emerald-800"><span className="h-1 w-2 rounded-full bg-emerald-800"></span>Hymenoplasty</li>
<li className="flex items-center gap-2 text-emerald-800"><span className="h-1 w-2 rounded-full bg-emerald-800"></span>Vaginoplasty</li>
<li className="flex items-center gap-2 text-emerald-800"><span className="h-1 w-2 rounded-full bg-emerald-800"></span>Labiaplasty</li>
</ul>
</article>

<article className="group sm:px-6 sm:py-7 flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-200 bg-amber-100/50 border-stone-200 border rounded-3xl px-5 py-6 shadow-sm justify-start">
<div className="flex items-center gap-3 mb-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-900 text-[#f4eadf]">
<iconify-icon className="w-5 h-5" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="font-playfair text-xl font-medium tracking-tight text-stone-900">Skin &amp; Scar Treatments</h3>
</div>
<ul className="space-y-2 text-sm text-stone-700 font-medium">
<li className="flex items-center gap-2 text-emerald-800"><span className="h-1 w-2 rounded-full bg-emerald-800"></span>Scar Revision &amp; Burn Surgery</li>
<li className="flex items-center gap-2 text-emerald-800"><span className="h-1 w-2 rounded-full bg-emerald-800"></span>Botox &amp; Fillers</li>
<li className="flex items-center gap-2 text-emerald-800"><span className="h-1 w-2 rounded-full bg-emerald-800"></span>Chemical Peel &amp; Acne Scars</li>
</ul>
</article>
</div>
</div>
</section>

<section className="text-emerald-50 bg-[#111715] w-full border-emerald-900/60 border-t">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
<div className="flex flex-col md:items-center md:text-center mb-10">
<p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-emerald-300 mb-3">
              OUR FACILITY
            </p>
<h2 className="font-playfair text-3xl sm:text-4xl lg:text-[2.7rem] leading-tight tracking-tight">
              State-of-the-Art <span className="italic text-emerald-300">Hospital Gallery</span>
</h2>
<p className="sm:text-base text-sm text-emerald-100/80 max-w-2xl mt-4">Equipped with the latest medical technology and designed for maximum patient comfort, privacy, and safety.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
<div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden aspect-square border border-emerald-900/50 group">
<img alt="Hospital Interior" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 mix-blend-luminosity opacity-80 hover:mix-blend-normal" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&amp;q=80"/>
</div>
<div className="relative rounded-2xl overflow-hidden aspect-square border border-emerald-900/50 group">
<img alt="Operation Theatre" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 mix-blend-luminosity opacity-80 hover:mix-blend-normal" src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=600&amp;q=80"/>
</div>
<div className="relative rounded-2xl overflow-hidden aspect-square border border-emerald-900/50 group">
<img alt="Medical Equipment" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 mix-blend-luminosity opacity-80 hover:mix-blend-normal" src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&amp;q=80"/>
</div>
<div className="col-span-2 relative rounded-2xl overflow-hidden aspect-[2/1] border border-emerald-900/50 group">
<img alt="Clinic Room" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 mix-blend-luminosity opacity-80 hover:mix-blend-normal" src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="text-emerald-50 bg-[#0b0f0e] w-full border-emerald-900/60 border-t">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
<div className="flex flex-col lg:flex-row gap-12 items-start">

<div className="w-full lg:w-1/2">
<p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-emerald-300 mb-3">
                REAL RESULTS
              </p>
<h2 className="font-playfair text-3xl sm:text-4xl leading-tight tracking-tight mb-6">
                Patient <span className="italic text-emerald-300">Transformations</span>
</h2>
<div className="space-y-6">
<article className="relative rounded-3xl overflow-hidden border border-emerald-900/70 bg-[#141a17] aspect-video group">
<div className="absolute inset-0 flex">
<div className="w-1/2 h-full border-r border-emerald-900/50 relative">
<img alt="Before" className="w-full h-full object-cover mix-blend-luminosity opacity-50" src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=600&amp;q=80"/>
<span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] uppercase tracking-wider font-medium">Before</span>
</div>
<div className="w-1/2 h-full relative">
<img alt="After" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=600&amp;q=80"/>
<span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] uppercase tracking-wider font-medium">After</span>
</div>
</div>
<div className="absolute top-4 left-4 bg-[#1b2320]/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-medium border border-emerald-900/50">Hair Transplant</div>
</article>
<article className="relative rounded-3xl overflow-hidden border border-emerald-900/70 bg-[#141a17] aspect-video group">
<div className="absolute inset-0 flex bg-emerald-900/20 items-center justify-center">
<p className="text-sm text-emerald-200/60 font-medium tracking-wide">View full gallery at the clinic</p>
</div>
</article>
</div>
</div>

<div className="w-full lg:w-1/2">
<p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-emerald-300 mb-3">
                EDUCATION
              </p>
<h2 className="font-playfair text-3xl sm:text-4xl leading-tight tracking-tight mb-6">
                Learn from <span className="italic text-emerald-300">Dr. Vivek</span>
</h2>
<div className="space-y-6">

<a className="block relative rounded-3xl overflow-hidden border border-emerald-900/70 aspect-video group bg-[#111715]" href="https://youtube.com/@drvivekambedkar-cuttisplas8367" target="_blank">
<img alt="Video Thumbnail" className="w-full h-full object-cover mix-blend-luminosity opacity-60 group-hover:opacity-80 transition-opacity duration-300" src="https://images.unsplash.com/photo-1576091160550-2173ff9e5eb3?w=800&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-red-600/90 flex items-center justify-center text-white backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 shadow-lg">
<iconify-icon className="w-8 h-8 ml-1" icon="solar:play-bold"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
<p className="font-playfair font-medium text-lg text-white">Understanding Gynecomastia Procedure</p>
</div>
</a>

<a className="block relative rounded-3xl overflow-hidden border border-emerald-900/70 aspect-video group bg-[#111715]" href="https://youtube.com/@drvivekambedkar-cuttisplas8367" target="_blank">
<img alt="Video Thumbnail" className="w-full h-full object-cover mix-blend-luminosity opacity-60 group-hover:opacity-80 transition-opacity duration-300" src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-red-600/90 flex items-center justify-center text-white backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 shadow-lg">
<iconify-icon className="w-8 h-8 ml-1" icon="solar:play-bold"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
<p className="font-playfair font-medium text-lg text-white">Hair Transplant Success Rates</p>
</div>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="text-emerald-50 bg-[#111715] w-full border-emerald-900/60 border-t">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-10">
<div className="max-w-xl">
<p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-emerald-300 mb-3">
                PATIENT STORIES
              </p>
<h2 className="font-playfair text-3xl sm:text-4xl lg:text-[2.7rem] leading-tight tracking-tight">
                Trusted by <span className="italic text-emerald-300">our community</span>
</h2>
</div>
</div>
<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6">

<article className="rounded-3xl bg-[#0e1513] px-6 py-7 sm:px-8 sm:py-8 border border-emerald-900/70 shadow-sm flex flex-col justify-between h-full">
<div>
<div className="flex items-center gap-1 text-amber-400 text-sm mb-4">
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
</div>
<p className="sm:text-base leading-relaxed text-sm text-emerald-100/90 font-medium italic font-playfair">"Dr. Vivek changed my life. The gynecomastia surgery was flawless, and the recovery was exactly as he described. The staff at Cuttis Hospital were incredibly supportive throughout."</p>
</div>
<p className="text-xs text-emerald-300 uppercase tracking-widest mt-6 font-medium">- Rahul M.</p>
</article>

<article className="rounded-3xl bg-[#0e1513] px-6 py-7 sm:px-8 sm:py-8 border border-emerald-900/70 shadow-sm flex flex-col justify-between h-full">
<div>
<div className="flex items-center gap-1 text-amber-400 text-sm mb-4">
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
</div>
<p className="sm:text-base leading-relaxed text-sm text-emerald-100/90 font-medium italic font-playfair">"I researched extensively for my hair transplant and chose Dr. Ambedkar. Best decision ever. The density is amazing and it looks completely natural. Highly recommend this facility."</p>
</div>
<p className="text-xs text-emerald-300 uppercase tracking-widest mt-6 font-medium">- Amit S.</p>
</article>
</div>
</div>
</section>

<section className="text-stone-900 bg-amber-50 w-full border-stone-200/80 border-t" id="appointment">
<div className="sm:px-6 lg:px-8 lg:py-20 max-w-6xl mr-auto ml-auto pt-14 pr-4 pb-14 pl-4">
<div className="flex flex-col lg:flex-row lg:items-stretch gap-x-12 gap-y-10 items-center">

<div className="lg:w-[55%] flex flex-col w-full justify-center">
<p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-stone-500 mb-3">
          TAKE THE FIRST STEP
        </p>
<h2 className="font-playfair text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight tracking-tight">
          Schedule Your
          <span className="italic text-stone-700">Consultation</span>
</h2>
<p className="sm:text-base text-sm text-stone-700 max-w-lg mt-4 mb-8">
          Fill out the form below to request an appointment. Our team will get back to you promptly to confirm the date and time.
        </p>

<form action="#" className="space-y-5" method="POST">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

<div className="">
<label className="block uppercase text-xs font-medium text-stone-900 tracking-widest mb-2">Patient Name *</label>
<input className="w-full bg-white/70 border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-stone-500 focus:bg-white transition-colors placeholder:text-stone-400" name="patient_name" placeholder="e.g. John Doe" required="" type="text"/>
</div>

<div className="">
<label className="block uppercase text-xs font-medium text-stone-900 tracking-widest mb-2">Phone Number *</label>
<input className="w-full bg-white/70 border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-stone-500 focus:bg-white transition-colors placeholder:text-stone-400" name="phone" placeholder="Your contact number" required="" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

<div className="">
<label className="block uppercase text-xs font-medium text-stone-900 tracking-widest mb-2">Email (Optional)</label>
<input className="w-full bg-white/70 border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-stone-500 focus:bg-white transition-colors placeholder:text-stone-400" name="email" placeholder="Your email address" type="email"/>
</div>

<div className="">
<label className="block text-xs font-medium text-stone-900 uppercase tracking-widest mb-2">Select Treatment *</label>
<div className="relative">
<select className="w-full appearance-none bg-white/70 border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-stone-500 focus:bg-white transition-colors" name="treatment" required="">
<option disabled="" selected="" value="">Choose procedure...</option>
<option>Hair Transplant</option>
<option>Gynecomastia</option>
<option>Liposuction</option>
<option>Rhinoplasty</option>
<option>Breast Surgery</option>
<option>Cosmetic Gynecology</option>
<option>Skin / Scar Treatment</option>
<option>Other / General Consultation</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>

<div className="">
<label className="block uppercase text-xs font-medium text-stone-900 tracking-widest mb-2">Preferred Date *</label>
<input className="w-full bg-white/70 border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-stone-500 focus:bg-white transition-colors" name="preferred_date" required="" type="date"/>
</div>

<div className="">
<label className="block uppercase text-xs font-medium text-stone-900 tracking-widest mb-2">Message</label>
<textarea className="w-full bg-white/70 border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-stone-500 focus:bg-white transition-colors placeholder:text-stone-400" name="message" placeholder="Any specific concerns or questions?" rows="3"></textarea>
</div>

<button className="sm:w-auto inline-flex hover:bg-stone-800 transition-colors hover:shadow text-sm font-medium text-[#f4eadf] bg-stone-900 w-full rounded-xl mt-4 pt-4 pr-8 pb-4 pl-8 shadow-sm gap-x-2 gap-y-2 items-center justify-center" type="submit">
            Book Appointment
            <iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>

<div className="w-full lg:w-[45%] mt-10 lg:mt-0">
<div className="relative rounded-3xl border border-stone-200 bg-white overflow-hidden shadow-sm h-full flex flex-col">
<div className="absolute -top-20 right-[-40px] w-56 h-56 bg-stone-100 rounded-full blur-3xl"></div>
<div className="absolute -bottom-16 left-[-40px] w-52 h-52 bg-stone-50 rounded-full blur-3xl"></div>
<div className="sm:px-10 sm:py-12 flex flex-col gap-8 h-full pt-8 pr-6 pb-8 pl-6 relative justify-center">
<div className="">
<p className="text-xs font-medium tracking-[0.18em] uppercase text-stone-400 mb-2">
                FAST TRACK
              </p>
<p className="text-2xl font-playfair font-medium text-stone-900 tracking-tight">
                Need immediate assistance?
              </p>
<p className="text-sm text-stone-600 mt-2">Skip the form and connect with our front desk directly during working hours.</p>
</div>
<div className="flex flex-col gap-4 w-full">
<a className="w-full inline-flex items-center justify-between p-4 rounded-2xl border border-stone-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all group" href="tel:09149049943">
<div className="flex items-center gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-stone-600 group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors">
<iconify-icon className="w-5 h-5" icon="solar:phone-bold"></iconify-icon>
</div>
<div className="text-left">
<p className="text-xs font-medium text-stone-500 uppercase tracking-widest">Call Now</p>
<p className="text-sm font-medium text-stone-900">091490 49943</p>
</div>
</div>
<iconify-icon className="text-stone-400 group-hover:text-emerald-600" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full inline-flex items-center justify-between p-4 rounded-2xl border border-stone-200 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all group" href="https://wa.me/919149049943" target="_blank">
<div className="flex items-center gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-stone-600 group-hover:bg-[#25D366]/20 group-hover:text-[#25D366] transition-colors">
<iconify-icon className="w-5 h-5" icon="solar:chat-round-dots-bold"></iconify-icon>
</div>
<div className="text-left">
<p className="text-xs font-medium text-stone-500 uppercase tracking-widest">WhatsApp Us</p>
<p className="text-sm font-medium text-stone-900">Instant Chat</p>
</div>
</div>
<iconify-icon className="text-stone-400 group-hover:text-[#25D366]" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="mt-2 border-t border-stone-100 pt-6">
<p className="text-xs font-medium text-stone-500 uppercase tracking-widest mb-1">Working Hours</p>
<p className="text-sm font-medium text-stone-900">Monday – Sunday: 9:00 AM – 7:00 PM</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-emerald-900/60 bg-[#141a17]">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-10 items-start justify-between">
<div className="max-w-sm">
<span className="text-xl font-medium text-emerald-50 tracking-tight font-playfair block mb-2">Cuttis Hospital</span>
<p className="text-sm text-emerald-200/70 mb-4">Dr Vivek Ambedkar - Specialized care in plastic surgery, cosmetology, and hair restoration.</p>
<a className="inline-flex items-start gap-2 text-sm text-emerald-100/90 hover:text-emerald-400 transition-colors group" href="https://www.google.com/search?kgmid=%2Fg%2F11mw8jj44n&amp;hl=en-IN&amp;q=Cuttis%20Hospital" target="_blank">
<iconify-icon className="w-5 h-5 mt-0.5 shrink-0" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Bansagar Saman Road, opp. Rewa Hospital, Rewa, Madhya Pradesh 486005</span>
</a>
</div>
<div className="flex flex-col gap-4 sm:items-end">
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full border border-emerald-900/60 flex items-center justify-center text-emerald-200 hover:bg-emerald-900/40 hover:text-emerald-50 transition-colors" href="https://www.instagram.com/dr.vivek_ambedkar" target="_blank">
<svg className="lucide lucide-instagram" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 rounded-full border border-emerald-900/60 flex items-center justify-center text-emerald-200 hover:bg-emerald-900/40 hover:text-emerald-50 transition-colors" href="https://youtube.com/@drvivekambedkar-cuttisplas8367" target="_blank">
<svg className="lucide lucide-youtube" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full border border-emerald-900/60 flex items-center justify-center text-emerald-200 hover:bg-emerald-900/40 hover:text-emerald-50 transition-colors" href="https://www.google.com/search?kgmid=%2Fg%2F11mw8jj44n" target="_blank">
<iconify-icon className="w-5 h-5" icon="solar:global-linear"></iconify-icon>
</a>
</div>
<p className="text-[0.7rem] text-emerald-500/70 mt-2">© <span id="year-span">2026</span> Cuttis Hospital. All rights reserved.</p>
</div>
</div>
</footer>
</div>


    </>
  );
}
