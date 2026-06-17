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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
gray: {
50: '#f9fafb',
100: '#f3f4f6',
200: '#e5e7eb',
300: '#d1d5db',
400: '#9ca3af',
500: '#6b7280',
600: '#4b5563',
700: '#374151',
800: '#1f2937',
900: '#111827',
}
}
}
}
}



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
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-white/20 transition-all duration-300">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl font-medium tracking-tighter text-neutral-900 flex items-center gap-2" href="/">
                RADIANT SKIN
            </a>

<div className="hidden md:flex items-center gap-10">
<a className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 uppercase tracking-wide" href="/our-services">Services</a>
<a className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 uppercase tracking-wide" href="/about">About</a>
<a className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 uppercase tracking-wide" href="/providers">Providers</a>
<a className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 uppercase tracking-wide" href="/blog">Journal</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden lg:block text-sm font-medium text-neutral-900" href="tel:212-229-0007">212-229-0007</a>
<a className="hidden md:flex items-center gap-2 text-xs font-semibold py-3 px-6 rounded-full transition-all bg-neutral-900 hover:bg-neutral-800 text-white shadow-lg uppercase tracking-wide" href="https://radiantskindermatologyandlaser.novopatient.com/home!requestAppointment.do">
<span>Book Online</span>
</a>
<button className="md:hidden text-neutral-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative h-screen w-full flex items-center justify-center overflow-hidden">

<div className="hero-video-container bg-neutral-100">

<video autoplay="" className="hero-video" loop="" muted="" playsinline="" poster="https://images.pexels.com/photos/4046316/pexels-photo-4046316.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1">
<source src="https://videos.pexels.com/video-files/5091624/5091624-uhd_2560_1440_25fps.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
</div>

<div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 pt-20">
<div className="max-w-4xl">
<span className="inline-block py-1 px-3 rounded-full bg-white/50 backdrop-blur-sm border border-white/60 text-[10px] font-bold tracking-widest uppercase text-neutral-800 mb-6">
                    New York City Dermatology
                </span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-neutral-900 leading-[0.95] mb-8">
                    Your Skin <br/>
<span className="text-neutral-500/80 italic font-light">Deserves</span> The Best.
                </h1>
<p className="text-lg md:text-xl font-light text-neutral-700 max-w-lg mb-10 leading-relaxed">
                    Medical and cosmetic dermatology at the intersection of science and beauty. Experience personalized care in SoHo &amp; Upper East Side.
                </p>
<div className="flex flex-col sm:flex-row gap-5">
<a className="inline-flex justify-center items-center gap-3 px-8 py-4 rounded-full font-medium text-sm transition-all bg-neutral-900 text-white hover:bg-neutral-800 hover:scale-105 duration-300 shadow-xl" href="https://radiantskindermatologyandlaser.novopatient.com/home!requestAppointment.do">
                        Request Appointment
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-3 px-8 py-4 rounded-full font-medium text-sm transition-all bg-white/40 backdrop-blur-md border border-white/60 text-neutral-900 hover:bg-white/60" href="/our-services">
                        View Treatments
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
<iconify-icon className="text-neutral-400" icon="solar:arrow-down-linear" width="24"></iconify-icon>
</div>
</section>

<section className="bg-white border-b border-neutral-100">
<div className="max-w-[1400px] mx-auto px-6 py-16">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 divide-x divide-neutral-100">
<div className="pl-4 first:pl-0">
<h3 className="text-4xl font-medium text-neutral-900 tracking-tight">10k+</h3>
<p className="text-xs text-neutral-500 font-semibold uppercase tracking-widest mt-2">Happy Patients</p>
</div>
<div className="pl-12">
<h3 className="text-4xl font-medium text-neutral-900 tracking-tight">5k+</h3>
<p className="text-xs text-neutral-500 font-semibold uppercase tracking-widest mt-2">Procedures</p>
</div>
<div className="pl-12">
<h3 className="text-4xl font-medium text-neutral-900 tracking-tight">18+</h3>
<p className="text-xs text-neutral-500 font-semibold uppercase tracking-widest mt-2">Years Practice</p>
</div>
<div className="pl-12">
<h3 className="text-4xl font-medium text-neutral-900 tracking-tight">NYC</h3>
<p className="text-xs text-neutral-500 font-semibold uppercase tracking-widest mt-2">Top Rated</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-neutral-900">
                        Comprehensive Care
                    </h2>
<p className="text-neutral-500 font-light text-lg max-w-xl">
                        Expert dermatological care tailored to your unique skin needs, from medical treatments to aesthetic enhancements.
                    </p>
</div>
<a className="group flex items-center gap-2 text-sm font-medium transition-colors text-neutral-900 hover:text-neutral-600" href="https://cozycal.com/radiantskin">
<span className="border-b border-neutral-900 pb-0.5 group-hover:border-neutral-600">View All Services</span>
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative overflow-hidden rounded-2xl bg-neutral-50 aspect-[4/5] md:aspect-[3/4]">
<img alt="Cosmetic" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.pexels.com/photos/5069454/pexels-photo-5069454.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-2">Cosmetic</h3>
<p className="text-white/80 text-sm font-light">Fillers, Botox, Laser</p>
</div>
<div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-neutral-50 aspect-[4/5] md:aspect-[3/4]">
<img alt="Medical" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-2">Medical</h3>
<p className="text-white/80 text-sm font-light">Acne, Rosacea, Eczema</p>
</div>
<div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-neutral-50 aspect-[4/5] md:aspect-[3/4]">
<img alt="Body" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.pexels.com/photos/3371661/pexels-photo-3371661.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-2">Body</h3>
<p className="text-white/80 text-sm font-light">Contouring, Sculpting</p>
</div>
<div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-20">
<div className="w-full lg:w-1/2 order-2 lg:order-1">
<div className="relative group">
<div className="absolute -inset-4 bg-white rounded-3xl rotate-2 opacity-50 transition-transform group-hover:rotate-1"></div>
<img alt="Dr. Dele-Michael" className="relative w-full h-auto rounded-2xl shadow-sm object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f1e96af5-9f33-4537-99ef-4656f1cfaf77_1600w.jpg"/>
</div>
</div>
<div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-8">
<div className="space-y-4">
<span className="text-xs font-bold uppercase tracking-widest text-neutral-400">The Expert</span>
<h2 className="text-4xl md:text-5xl font-medium text-neutral-900 tracking-tight leading-tight">Dr. Dele-Michael</h2>
</div>
<p className="text-lg text-neutral-600 font-light leading-relaxed">
                        Board-certified dermatologist specializing in General Dermatology, Dermatologic Surgery and Cosmetic Dermatology in Manhattan. An Assistant Professor of Dermatology at the prestigious Mount Sinai School of Medicine, Dr. Dele-Michael combines academic excellence with artistic precision.
                    </p>
<div className="grid grid-cols-2 gap-8 border-t border-neutral-200 pt-8 mt-8">
<div>
<span className="block text-3xl font-medium text-neutral-900">#1</span>
<span className="text-sm text-neutral-500">Rated in NYC</span>
</div>
<div>
<span className="block text-3xl font-medium text-neutral-900">15yr</span>
<span className="text-sm text-neutral-500">Experience</span>
</div>
</div>
<div className="pt-4">
<a className="inline-flex justify-center items-center gap-2 border-b-2 border-neutral-900 pb-1 font-medium text-sm transition-colors text-neutral-900 hover:text-neutral-600" href="/about">
                            Read Biography
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden bg-white">
<div className="max-w-[1400px] mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight mb-16 text-center text-neutral-900">Patient Stories</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-10 rounded-3xl bg-neutral-50 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
<div>
<div className="flex gap-1 mb-6 text-neutral-900">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="font-light text-lg leading-relaxed text-neutral-700">"I have been going to Dr. Dele-Michael for some time now and I can honestly say that she’s one of the best. She’s very knowledgeable and has been able to get my skin under control."</p>
</div>
<div className="mt-8 border-t border-neutral-200 pt-6">
<span className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">E.S.</span>
</div>
</div>

<div className="p-10 rounded-3xl bg-neutral-50 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
<div className="">
<div className="flex gap-1 mb-6 text-neutral-900">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="font-light text-lg leading-relaxed text-neutral-700">"She’s wonderful. I was very nervous meeting with a new derm, but she quickly took away my worries! Nice, sweet. Looking forward to our appointment!"</p>
</div>
<div className="mt-8 border-t border-neutral-200 pt-6">
<span className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">J.W.</span>
</div>
</div>

<div className="p-10 rounded-3xl bg-neutral-50 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
<div>
<div className="flex gap-1 mb-6 text-neutral-900">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="font-light text-lg leading-relaxed text-neutral-700">"I am very pleased about my experience. She is an outstanding dermatologist with superb bedside manners. I would recommend Dr. Dele-Michael without hesitation."</p>
</div>
<div className="mt-8 border-t border-neutral-200 pt-6">
<span className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">Y.F.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-100 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight mb-12 text-center text-neutral-900">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 rounded-xl cursor-pointer border transition-colors bg-white border-neutral-200 hover:bg-neutral-50">
<h2 className="text-base font-medium text-neutral-900">Do you accept insurance?</h2>
<span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
<iconify-icon className="absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity text-neutral-400" icon="solar:add-circle-linear" width="20"></iconify-icon>
<iconify-icon className="absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity text-neutral-900" icon="solar:minus-circle-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-2 text-neutral-600 text-sm font-light leading-relaxed">
                        Radiant Skin Dermatology and Laser participates in most commercial health insurance plans as an in-network provider. Some of the plans we are currently participating in are listed. If your plan is not on the list, please call 212-229-0007.
                    </div>
</details>
<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 rounded-xl cursor-pointer border transition-colors bg-white border-neutral-200 hover:bg-neutral-50">
<h2 className="text-base font-medium text-neutral-900">What kind of training do dermatologists go through?</h2>
<span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
<iconify-icon className="absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity text-neutral-400" icon="solar:add-circle-linear" width="20"></iconify-icon>
<iconify-icon className="absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity text-neutral-900" icon="solar:minus-circle-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-2 text-neutral-600 text-sm font-light leading-relaxed">
                        As medical specialists, dermatologists go through an extensive training program that involves four years of internship and residency after receiving their medical degree.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex items-center justify-between mb-12">
<h2 className="text-3xl font-medium tracking-tight">From The Journal</h2>
<a className="text-sm font-medium border-b border-white/30 pb-1 transition-colors hover:text-white/70 hover:border-white/70" href="/blog">Read All</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
<a className="group block" href="#">
<div className="overflow-hidden rounded-2xl mb-6 aspect-video bg-neutral-800">
<img alt="Blog Post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" src="https://cdn.prod.website-files.com/605eea74abaa953c37167749/698c2702232508e34c78f994_laser%20hair%20loss%20(2).jpg"/>
</div>
<div className="flex items-center gap-3 mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
<span>Hair Loss</span>
<span className="w-1 h-1 rounded-full bg-neutral-400"></span>
<span>5 Min Read</span>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3 group-hover:text-neutral-300 transition-colors">The Leading Alopecia Dermatologist in Harlem</h3>
<p className="text-neutral-400 font-light">Struggling with hair loss? Visit Radiant Skin NYC, Top alopecia dermatologist in Harlem.</p>
</a>
<a className="group block" href="#">
<div className="overflow-hidden rounded-2xl mb-6 aspect-video bg-neutral-800">
<img alt="Blog Post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" src="https://cdn.prod.website-files.com/605eea74abaa953c37167749/698327944dffec8f170d38ad_laser%20hair%20loss.jpg"/>
</div>
<div className="flex items-center gap-3 mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
<span>Treatments</span>
<span className="w-1 h-1 rounded-full bg-neutral-400"></span>
<span>4 Min Read</span>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3 group-hover:text-neutral-300 transition-colors">Safe and Effective Solution for Thinning Hair</h3>
<p className="text-neutral-400 font-light">Discover safe, effective laser hair loss treatment in NYC at Radiant Skin.</p>
</a>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-200">
<div className="max-w-[1400px] mx-auto px-6 py-20">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">

<div className="md:col-span-4 space-y-6">
<a className="text-xl font-medium tracking-tighter text-neutral-900 block" href="/">RADIANT SKIN</a>
<p className="text-sm text-neutral-500 leading-relaxed max-w-xs font-light">
                Advanced dermatological care tailored to your unique skin needs. Experience the difference of expert care.
              </p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="md:col-span-2">
<h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-6">Sitemap</h4>
<ul className="space-y-4 text-sm text-neutral-500 font-light">
<li><a className="hover:text-neutral-900 transition-colors" href="#">Home</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">About</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Services</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-6">Legal</h4>
<ul className="space-y-4 text-sm text-neutral-500 font-light">
<li><a className="hover:text-neutral-900 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Cookies</a></li>
</ul>
</div>

<div className="md:col-span-4">
<h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-6">Stay Updated</h4>
<form className="flex flex-col gap-4" onsubmit="event.preventDefault();">
<div className="flex gap-2">
<input className="w-full px-0 py-2 bg-transparent border-b border-neutral-300 text-sm placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors" placeholder="Email address" type="email"/>
<button className="text-neutral-900 hover:text-neutral-600 font-medium text-sm">Submit</button>
</div>
<p className="text-xs text-neutral-400">By subscribing you agree to our privacy policy.</p>
</form>
</div>
</div>
<div className="mt-20 pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400">
<p>© 2023 Radiant Skin Dermatology. All rights reserved.</p>
<p>Designed in New York</p>
</div>
</div>
</footer>

    </>
  );
}
