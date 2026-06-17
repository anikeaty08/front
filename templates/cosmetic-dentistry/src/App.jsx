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
      

<header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 md:pt-6 md:px-6 pointer-events-none">
<nav className="pointer-events-auto glass border rounded-full pl-5 pr-2 py-2 flex items-center justify-between gap-4 md:gap-10 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] w-full max-w-6xl transition-all duration-300 border-gray-200/60">

<a className="group flex items-center gap-2 shrink-0" href="#">
</a>


<div className="hidden lg:flex items-center gap-6 text-xs font-montserrat font-medium text-gray-600">
<a className="hover:text-[#982626] transition-colors" href="#services">Treatments</a>
<a className="hover:text-[#982626] transition-colors" href="#regenerative">Porcelain Veneers</a>
<a className="hover:text-[#982626] transition-colors" href="#about">Our Studio</a>
<a className="hover:text-[#982626] transition-colors" href="#reviews">Smile Gallery</a>
<a className="hover:text-[#982626] transition-colors" href="#contact">Contact</a>
</div>


<a className="text-xs px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 font-montserrat font-medium group shadow-md hover:shadow-lg hover:shadow-[#982626]/20 bg-gray-900 text-white hover:bg-[#982626] shrink-0" href="#contact">
          Book Consultation
          <iconify-icon className="text-sm transition-transform group-hover:scale-110 hidden sm:block" icon="solar:calendar-linear"></iconify-icon>
</a>
</nav>
</header>
<main className="md:pt-32 md:px-6 max-w-7xl mr-auto ml-auto pt-28 pr-4 pb-24 pl-4">

<section className="md:rounded-[2.5rem] md:p-12 lg:p-20 overflow-hidden md:mb-16 text-center bg-white border-gray-200/60 border rounded-[2rem] mb-12 pt-12 pr-6 pb-12 pl-6 relative shadow-[0_1px_2px_rgba(0,0,0,0.02)]">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50"></div>
<div className="flex flex-col max-w-5xl z-10 mr-auto ml-auto relative items-center">


<div className="animate-fade-up text-[10px] uppercase md:mb-8 font-bold text-[#982626] tracking-widest font-montserrat bg-[#982626]/5 w-fit border-[#982626]/10 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3" style={{}}>ATTENTION: THOSE READY FOR A FLAWLESS SMILE</div>

<h1 className="animate-fade-up delay-100 sm:text-5xl md:text-7xl lg:text-[4.5rem] leading-[1.1] md:leading-[1.0] md:mb-8 text-4xl font-medium text-gray-900 tracking-tighter font-serif mb-6">
            We’ll 
            
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#982626] italic pr-2 to-[#007cba]">
              Transform Your Smile
            </span>
            with Custom Porcelain Veneers
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] mt-2 text-gray-400 font-normal">
                or We’ll Find a Better Path Together.
            </span>
</h1>

<p className="animate-fade-up delay-200 md:text-xl leading-relaxed md:mb-12 text-base font-light text-gray-500 max-w-2xl mb-8 pr-2 pl-2">Our specialized, <span className="font-medium text-gray-900">artisan approach</span> uses digital smile design to craft the perfect look for your face. Ensuring precision, beauty, and natural results <span className="font-semibold text-gray-900">so that you can smile with absolute confidence.</span></p>

<div className="animate-fade-up delay-300 relative w-full max-w-4xl aspect-video rounded-xl md:rounded-[2rem] border-2 md:border-4 shadow-xl md:shadow-2xl overflow-hidden mb-8 md:mb-12 group cursor-pointer ring-1 bg-gray-900 border-white/50 shadow-gray-200 ring-gray-900/5">

<img alt="Beautiful Confident Smile" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-all duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-14 h-14 md:w-24 md:h-24 backdrop-blur-md rounded-full flex items-center justify-center border shadow-[0_0_40px_rgba(0,0,0,0.2)] transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30 bg-white/20 border-white/40">
<div className="w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-sm pl-0.5 md:pl-1 bg-white">
<iconify-icon className="w-4 h-4 md:w-7 md:h-7 text-gray-900 text-2xl md:text-4xl" icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>


</div>

<div className="animate-fade-up delay-500 flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center w-full mb-6">

<a className="w-full sm:w-auto px-8 py-3.5 md:py-4 rounded-full text-sm hover:shadow-xl hover:shadow-[#982626]/20 transition-all duration-300 flex items-center justify-center gap-2 font-montserrat font-medium group bg-gray-900 text-white hover:bg-[#982626]" href="#contact">
              Book Your Smile Consultation
              <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto border px-8 py-3.5 md:py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center justify-center gap-2 bg-white border-gray-200 text-gray-900 hover:border-gray-400" href="#services">
              View Smile Makeovers
            </a>
</div>
</div>
</section>

<section className="py-12 md:py-20 max-w-6xl mx-auto">
<h2 className="text-3xl md:text-5xl text-center mb-10 md:mb-16 tracking-tight font-serif font-medium text-gray-900 px-4">
          Tired of Hiding Your Smile in Photos?
        </h2>
<div className="grid md:grid-cols-3 gap-6 md:gap-8">


<div className="md:p-8 md:rounded-3xl hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-[#982626]/5 to-white rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-sm border border-gray-100">

<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-[#982626]/10 text-[#982626]">
<iconify-icon className="text-xl md:text-2xl" height="24" icon="solar:sad-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-montserrat font-semibold mb-2 md:mb-3 text-gray-900">
              Stained, Chipped or Gapped Teeth
            </h3>
<p className="text-gray-500 font-light leading-relaxed text-sm">
              Whether it's deep discoloration or uneven wear, daily self-consciousness about your teeth shouldn't be your "normal."
            </p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-[#982626]/5 to-white rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-sm border border-gray-100">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-[#982626]/10 text-[#982626]">
<iconify-icon className="text-xl md:text-2xl" height="24" icon="solar:camera-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-montserrat font-semibold mb-2 md:mb-3 text-gray-900">
              Holding Back Your Joy
            </h3>
<p className="text-gray-500 font-light leading-relaxed text-sm">
              Struggling to laugh naturally or constantly covering your mouth during conversations and family pictures.
            </p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-[#982626]/5 to-white rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-sm border border-gray-100">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-[#982626]/10 text-[#982626]">
<iconify-icon className="text-xl md:text-2xl" height="24" icon="solar:shield-warning-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-montserrat font-semibold mb-2 md:mb-3 text-gray-900">
              Fear of Unnatural Results
            </h3>
<p className="text-gray-500 font-light leading-relaxed text-sm">
              You want a stunning smile but are worried about looking "fake" or dealing with bulky, poorly fitted solutions.
            </p>
</div>
</div>
</section>

<section className="md:py-20 pt-12 pb-12">
<div className="text-center mb-10 md:mb-16 px-4">
<h2 className="md:text-5xl text-3xl font-medium text-gray-900 tracking-tight font-serif mb-4" style={{}}>Why Choose Our Studio</h2>
<p className="md:text-base text-sm font-light text-gray-500 max-w-2xl mr-auto ml-auto">
            We provide a modern, luxury approach to aesthetic dentistry.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">


<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-colors hover:border-[#982626]/30 bg-gradient-to-br from-white to-gray-50 h-64 border-gray-200 border rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="md:text-2xl md:mb-4 text-xl font-medium text-gray-900 font-montserrat mb-3">Master Ceramist Craftsmanship</h3>
<p className="leading-relaxed z-10 text-sm font-light text-gray-500 relative" style={{}}>Every veneer is hand-crafted by world-class ceramists, not mass-produced, ensuring a bespoke fit and natural translucency.</p>

<div className="mt-auto self-end group-hover:text-[#982626] transition-colors duration-500 transform group-hover:scale-110 text-[#982626]/20">
<iconify-icon className="" height="96" icon="solar:crown-star-linear" width="96"></iconify-icon>
</div>
</div>

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-colors hover:border-[#982626]/30 bg-gradient-to-br from-white to-gray-50 h-64 border border-gray-200 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="md:text-2xl md:mb-4 text-xl font-medium text-gray-900 font-montserrat mb-3">Digital Smile Design</h3>
<p className="leading-relaxed z-10 text-sm font-light text-gray-500 relative">We use state-of-the-art 3D imaging to design your new smile, allowing you to 'test drive' your look before any permanent changes are made.</p>
<div className="mt-auto self-end group-hover:text-[#982626] transition-colors duration-500 transform group-hover:scale-110 text-[#982626]/20">
<iconify-icon className="" height="96" icon="solar:laptop-minimalistic-linear" width="96"></iconify-icon>
</div>
</div>

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-colors hover:border-[#982626]/30 bg-gradient-to-br from-white to-gray-50 h-64 border-gray-200 border rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="md:text-2xl md:mb-4 text-xl font-medium text-gray-900 font-montserrat mb-3">A Permanent, Luxury Investment</h3>
<p className="leading-relaxed z-10 text-sm font-light text-gray-500 relative">Our porcelain veneers offer incredible durability, stain resistance, and life-changing confidence that lasts for decades with proper care.</p>
<div className="mt-auto self-end group-hover:text-[#982626] transition-colors duration-500 transform group-hover:scale-110 text-[#982626]/20">
<iconify-icon className="" height="96" icon="solar:diamond-linear" width="96"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="md:py-24 pt-16 pb-16" id="services">
<div className="text-center mb-12 md:mb-16">

<span className="text-[10px] md:text-xs font-montserrat font-bold tracking-widest uppercase mb-3 block text-[#982626]">
            Our Expertise
          </span>
<h2 className="text-3xl md:text-5xl font-serif font-medium text-gray-900">
            Elite Cosmetic Treatments
          </h2>
</div>
<div className="grid md:grid-cols-3 gap-10 md:gap-8 relative max-w-6xl mx-auto">

<div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent to-transparent -z-10 via-gray-200"></div>

<div className="flex flex-col items-center text-center group">

<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-[#982626] group-hover:text-[#982626] transition-colors bg-white border-gray-200 text-gray-400">
<iconify-icon className="" height="40" icon="solar:smile-circle-linear" style={{color: '#982626'}} width="40"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-bold font-montserrat mb-2 md:mb-3 text-gray-900">
              Custom Porcelain Veneers
            </h3>
<p className="text-sm text-gray-500 font-light leading-relaxed max-w-xs px-4 md:px-0">
              Transform chipped, gapped, or discolored teeth into a flawless, natural-looking masterpiece.
            </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="md:w-24 md:h-24 flex md:text-2xl md:mb-6 group-hover:border-[#982626] group-hover:text-[#982626] transition-colors text-xl text-gray-400 font-serif bg-white w-20 h-20 border-gray-200 border rounded-full mb-5 shadow-sm items-center justify-center">
<iconify-icon className="" height="40" icon="solar:magic-stick-3-linear" style={{color: '#982626'}} width="40"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-bold font-montserrat mb-2 md:mb-3 text-gray-900">
              Full Smile Makeover
            </h3>
<p className="text-sm text-gray-500 font-light leading-relaxed max-w-xs px-4 md:px-0">
              A comprehensive, multi-disciplinary approach to completely redesign and rejuvenate your smile.
            </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-[#982626] group-hover:text-[#982626] transition-colors bg-white border-gray-200 text-gray-400">
<iconify-icon className="" height="40" icon="solar:stars-linear" style={{color: '#982626'}} width="40"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-bold font-montserrat mb-2 md:mb-3 text-gray-900">
              Professional Whitening
            </h3>
<p className="text-sm text-gray-500 font-light leading-relaxed max-w-xs px-4 md:px-0">
              Subtle but powerful enhancements to brighten your teeth and perfect your overall aesthetic.
            </p>
</div>
</div>
<div className="flex justify-center mt-12 md:mt-16">
<a className="w-full sm:w-auto justify-center px-10 py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center gap-2 shadow-lg hover:shadow-xl hover:shadow-[#982626]/20 bg-gray-900 text-white hover:bg-[#982626]" href="#contact">
            Get My Custom Smile Plan
            <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<section className="md:py-24 pt-16 pb-16" id="reviews">
<h2 className="text-3xl md:text-5xl text-center mb-10 md:mb-16 tracking-tight font-serif font-medium text-gray-900">
          Life-Changing Transformations
        </h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border shadow-sm bg-white border-gray-100 flex flex-col justify-between">
<div className="">

<div className="mb-4 text-[#982626] flex gap-1">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="leading-relaxed text-sm italic text-gray-500 mb-6">“After two visits, my confidence skyrocketed. The veneers look so natural, nobody knows they aren't my real teeth. Worth every penny."</p>
</div>
<div className="flex items-center gap-3">

<div className="flex text-xs font-bold text-[#982626] bg-[#982626]/10 w-10 h-10 rounded-full items-center justify-center">S</div>
<div className="">
<div className="text-sm font-bold text-gray-900">Sarah M.</div>
<div className="text-xs text-gray-400">Veneer Patient</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border shadow-sm bg-white border-gray-100 flex flex-col justify-between">
<div className="">
<div className="mb-4 text-[#982626] flex gap-1">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="leading-relaxed text-sm italic text-gray-500 mb-6">“I can finally smile big in photos for the first time in years. The digital design process was amazing. I am 100% thrilled with my celebrity smile.”</p>
</div>
<div className="flex items-center gap-3">
<div className="flex text-xs font-bold text-[#982626] bg-[#982626]/10 w-10 h-10 rounded-full items-center justify-center">R</div>
<div className="">
<div className="text-sm font-bold text-gray-900">R. Drury</div>
<div className="text-xs text-gray-400">Smile Makeover</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border shadow-sm bg-white border-gray-100 flex flex-col justify-between">
<div className="">
<div className="mb-4 text-[#982626] flex gap-1">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="leading-relaxed text-sm italic text-gray-500 mb-6">“The team treated me like royalty. My new smile has completely changed how I carry myself in business meetings. A true investment in myself.”</p>
</div>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<div className="flex text-xs font-bold text-[#982626] bg-[#982626]/10 w-10 h-10 rounded-full items-center justify-center">D</div>
<div className="">
<div className="text-sm font-bold text-gray-900">D. Helms</div>
<div className="text-xs text-gray-400">Veneer Patient</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 md:rounded-[2.5rem] bg-white border-gray-200/60 border rounded-[2rem] mt-16 mb-16 pt-20 pb-20 shadow-[0_1px_2px_rgba(0,0,0,0.02)]" id="about">
<div className="max-w-6xl mx-auto px-6 md:px-12">
<div className="grid md:grid-cols-2 gap-12 lg:gap-24 gap-x-12 gap-y-12 items-center">

<div className="">

<h2 className="md:text-6xl text-5xl text-gray-900 tracking-tight font-serif mb-8">Hi, I'm Dr. Smith</h2>

<p className="leading-relaxed text-lg font-light text-gray-500 mb-8">I founded this Studio with one mission: to elevate the standard of cosmetic dentistry and give patients the flawless, natural smiles they deserve.</p>
<p className="leading-relaxed text-lg font-light text-gray-500 mb-10">After years in traditional practice, I realized many clinics treat cosmetic work as an afterthought. They focus on basic function rather than true artistry. We built this luxury practice to change that entirely.</p>
<p className="leading-relaxed text-lg font-light text-gray-500 mb-10">With over 15 years of experience specializing exclusively in aesthetic dentistry, I've dedicated my career to mastering porcelain veneers, digital smile design, and full-mouth rehabilitation. As an expert in facial aesthetics, I focus on designing a smile that perfectly complements your unique features.</p>
<a className="inline-block text-[#982626] font-semibold text-lg border-b-2 border-[#982626]/20 hover:border-[#982626] pb-0.5 transition-colors" href="#contact">
                        Let's Design Your Smile!
                    </a>
</div>


<div className="relative">
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 mb-16 md:mb-20 rounded-[2rem] md:rounded-[2.5rem] text-center px-4 md:px-6 relative overflow-hidden bg-gray-900" id="contact">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#982626]/40 via-gray-900 to-gray-900"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl mb-4 md:mb-6 tracking-tight font-serif font-medium text-white">
            Request Your Smile Assessment
          </h2>
<p className="text-base md:text-lg mb-8 md:mb-10 font-light text-gray-400">
            Tell us about your current smile goals. We'll help you map out the perfect path to your dream results.
          </p>
<form className="flex flex-col gap-4 max-w-md mx-auto text-left">
<input className="w-full border rounded-full px-6 py-3.5 placeholder-gray-400 focus:outline-none focus:border-[#982626] transition-colors backdrop-blur-sm bg-white/10 border-white/20 text-white" placeholder="Full Name" type="text"/>
<input className="w-full border rounded-full px-6 py-3.5 placeholder-gray-400 focus:outline-none focus:border-[#982626] transition-colors backdrop-blur-sm bg-white/10 border-white/20 text-white" placeholder="Email Address" type="email"/>
<input className="w-full border rounded-full px-6 py-3.5 placeholder-gray-400 focus:outline-none focus:border-[#982626] transition-colors backdrop-blur-sm bg-white/10 border-white/20 text-white" placeholder="Phone Number" type="tel"/>
<div className="relative">
<select className="w-full border rounded-full px-6 py-3.5 text-gray-400 focus:outline-none focus:border-[#982626] transition-colors backdrop-blur-sm bg-white/10 border-white/20 appearance-none cursor-pointer">
<option disabled="" selected="" value="">Primary Area of Interest</option>
<option className="text-gray-900" value="veneers">Porcelain Veneers</option>
<option className="text-gray-900" value="makeover">Full Smile Makeover</option>
<option className="text-gray-900" value="whitening">Professional Whitening</option>
<option className="text-gray-900" value="other">Other</option>
</select>
<div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<button className="w-full py-4 mt-2 hover:bg-[#982626]/90 transition-colors shadow-[#982626]/50 font-bold text-white bg-[#982626] rounded-full shadow-lg flex justify-center items-center gap-2" type="button">
              Get My Assessment
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</section>

<section className="max-w-3xl mx-auto py-8 md:py-10 mb-16 md:mb-24 px-2 md:px-6">
<h2 className="text-2xl md:text-3xl text-center mb-10 md:mb-12 tracking-tight font-serif font-medium text-gray-900">
          Frequently Asked Questions
        </h2>
<div className="space-y-4">

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-gray-200">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-gray-900 text-sm md:text-base">
              How long do porcelain veneers last?
              <iconify-icon className="transition-transform group-open:rotate-180 text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-500 leading-relaxed font-light border-t pt-4 border-gray-100">
              With proper care and maintenance, our high-quality porcelain veneers can last 15-20 years or more, making them a true long-term investment in your appearance.
            </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-gray-200">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-gray-900 text-sm md:text-base">
              Do you offer financing options?
              <iconify-icon className="transition-transform group-open:rotate-180 text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-500 leading-relaxed font-light border-t pt-4 border-gray-100">
              Yes, we partner with premium healthcare financing providers to offer flexible payment plans, making your dream smile investment manageable and accessible.
            </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-gray-200">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-gray-900 text-sm md:text-base">
              Is the veneer procedure painful?
              <iconify-icon className="transition-transform group-open:rotate-180 text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-500 leading-relaxed font-light border-t pt-4 border-gray-100">
              We prioritize your ultimate comfort. The process is minimally invasive, and we offer various luxury sedation and relaxation options to ensure a completely stress-free experience.
            </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-gray-200">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-gray-900 text-sm md:text-base">
              Will they look bulky or fake?
              <iconify-icon className="transition-transform group-open:rotate-180 text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-500 leading-relaxed font-light border-t pt-4 border-gray-100">
              Absolutely not. We use digital design and partner with master ceramists to ensure light reflects naturally, crafting veneers that match the exact shape, translucency, and shade that perfectly complements your face.
            </div>
</details>
</div>
</section>
</main>

<footer className="border-t pt-12 md:pt-16 pb-8 md:pb-10 px-4 md:px-6 bg-white border-gray-200">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-10">

<div className="text-center md:text-left">

<a className="text-2xl font-medium italic text-gray-900 tracking-tight font-serif" href="#" style={{}}>Luxe Smile Studio</a>
<p className="flex items-center justify-center md:justify-start gap-2 text-sm font-light text-gray-500 mt-4" style={{}}>Beverly Hills, CA</p>
<p className="flex items-center justify-center md:justify-start gap-2 text-sm font-light text-gray-500 mt-2" style={{}}>{iconify-icon} (310) 555-8899</p>
</div>

<div className="flex flex-col gap-3 text-center md:text-right">
<a className="text-sm transition-colors font-medium text-gray-600 hover:text-[#982626]" href="#">Privacy Policy</a>
<a className="text-sm transition-colors font-medium text-gray-600 hover:text-[#982626]" href="#">Terms of Service</a>
<a className="text-sm transition-colors font-medium text-gray-600 hover:text-[#982626]" href="#">Sitemap</a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 md:mt-16 pt-8 border-t text-center text-[10px] md:text-xs font-montserrat border-gray-100 text-gray-400">
<p className="">© Luxe Smile Studio. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
