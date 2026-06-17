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



        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            const isOpen = mobileMenu.classList.contains('open');
            menuBtn.innerHTML = isOpen 
                ? '<iconify-icon icon="solar:close-square-linear" width="24"></iconify-icon>' 
                : '<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>';
        });
    
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
      

<div className="bg-emerald-600 text-white text-xs md:text-sm py-2 px-4 text-center font-medium tracking-wide">
<p>Notice: We are closed Friday, December 19th and return to the office on Monday, Jan 5, 2026.</p>
</div>

<header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

<a className="flex items-center gap-2 group" href="/">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white transition group-hover:bg-emerald-600">
<span className="font-medium text-lg">H</span>
</div>
<div className="flex flex-col">
<span className="text-lg font-medium tracking-tight text-slate-900 leading-none">Hillsdale</span>
<span className="text-xs font-light tracking-widest uppercase text-slate-500">Dental Care</span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition" href="/">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition" href="#about">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition" href="#providers">Providers</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:border-slate-300 hover:bg-slate-50" href="tel:4084048385">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
<span>408-404-8385</span>
</a>
<a className="hidden sm:flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 hover:shadow-md" href="#contact">
                    Book Online
                </a>

<button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-900 lg:hidden hover:bg-slate-50" id="menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="absolute left-0 top-16 w-full border-b border-slate-200 bg-white p-4 shadow-lg lg:hidden -z-10" id="mobile-menu">
<nav className="flex flex-col gap-4">
<a className="text-base font-medium text-slate-900" href="/">Home</a>
<a className="text-base font-medium text-slate-600" href="#about">About</a>
<a className="text-base font-medium text-slate-600" href="#services">Services</a>
<a className="text-base font-medium text-slate-600" href="#providers">Providers</a>
<a className="text-base font-medium text-slate-600" href="#contact">Contact</a>
<div className="h-px w-full bg-slate-100 my-2"></div>
<a className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 py-3 text-sm font-medium text-slate-900" href="tel:4084048385">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon> Call Now
                </a>
</nav>
</div>
</header>
<main>

<section className="relative h-[85vh] w-full overflow-hidden bg-slate-900">

<img alt="Dental Office" className="absolute inset-0 h-full w-full object-cover opacity-60" src="https://sa1s3optim.patientpop.com/assets/production/practices/2975c528bb41200f32137410343632f79b8cf4e2/images/2279290.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/90"></div>
<div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
<span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
                        Accepting New Patients
                    </div>
<h1 className="mb-6 text-5xl font-medium tracking-tight text-white sm:text-6xl lg:text-7xl">
                        Quality care you <br/>can <span className="text-emerald-400">smile</span> about.
                    </h1>
<p className="mb-8 text-lg font-light text-slate-200 sm:text-xl leading-relaxed">
                        Hillsdale Dental Care has been serving San Jose since 1975. We combine state-of-the-art technology with a warm, family-friendly environment.
                    </p>
<div className="flex flex-col gap-4 sm:flex-row">
<a className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 text-sm font-medium text-white transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900" href="tel:4084048385">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                            408-404-8385
                        </a>
<a className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20" href="#services">
                            View Services
                        </a>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-white py-12">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<p className="mb-8 text-center text-sm font-medium text-slate-400">TRUSTED BY PATIENTS ON GOOGLE &amp; YELP</p>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="group rounded-2xl border border-slate-100 bg-slate-50 p-6 transition hover:border-slate-200 hover:shadow-sm">
<div className="mb-4 flex text-amber-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="mb-4 text-sm font-light leading-relaxed text-slate-600">"Dr. Azzerella is my primary dentist. I just love her professionalism. The place is nice, clean, modern."</p>
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs font-bold">B</div>
<span className="text-sm font-medium text-slate-900">Barbie M.</span>
<iconify-icon className="ml-auto opacity-50 grayscale group-hover:grayscale-0 transition" icon="logos:yelp" width="16"></iconify-icon>
</div>
</div>

<div className="group rounded-2xl border border-slate-100 bg-slate-50 p-6 transition hover:border-slate-200 hover:shadow-sm">
<div className="mb-4 flex text-amber-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="mb-4 text-sm font-light leading-relaxed text-slate-600">"They take the time to greet everyone and make them feel valued. Very nice and helpful staff."</p>
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 text-xs font-bold">M</div>
<span className="text-sm font-medium text-slate-900">Mary E.</span>
<iconify-icon className="ml-auto opacity-50 grayscale group-hover:grayscale-0 transition" icon="logos:google-icon" width="16"></iconify-icon>
</div>
</div>

<div className="group hidden sm:block rounded-2xl border border-slate-100 bg-slate-50 p-6 transition hover:border-slate-200 hover:shadow-sm">
<div className="mb-4 flex text-amber-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="mb-4 text-sm font-light leading-relaxed text-slate-600">"I really like Dr. Jacob. He is very professional. You are in good hands with him."</p>
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold">E</div>
<span className="text-sm font-medium text-slate-900">Evelio V.</span>
<iconify-icon className="ml-auto opacity-50 grayscale group-hover:grayscale-0 transition" icon="logos:google-icon" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-20 lg:py-32" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
<div>
<span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-emerald-600">Since 1975</span>
<h2 className="mb-6 text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">Modern dentistry rooted in tradition.</h2>
<div className="space-y-4 text-slate-500 font-light leading-relaxed">
<p>Many people feel anxious about a trip to the dentist, so the team at Hillsdale Dental Care in San Jose, California, has made it a priority to create a welcoming and friendly environment.</p>
<p>Roge Jacob, DDS, and Magdalena Azzarelli, DDS, uphold the long-standing tradition of the practice ensuring everyone who visits feels part of the family.</p>
<p>Residents from all over the Bay Area seek out Hillsdale Dental Care for laser gum therapy, dental exams, periodontal treatments, and cosmetic transformations.</p>
</div>
<div className="mt-8 flex gap-6">
<div className="flex flex-col border-l-2 border-slate-200 pl-4">
<span className="text-2xl font-semibold text-slate-900">30+</span>
<span className="text-xs text-slate-500">Years Experience</span>
</div>
<div className="flex flex-col border-l-2 border-slate-200 pl-4">
<span className="text-2xl font-semibold text-slate-900">4.9</span>
<span className="text-xs text-slate-500">Avg Rating</span>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-100">
<img alt="Dental Care" className="h-full w-full object-cover grayscale transition hover:grayscale-0 duration-700" src="https://sa1s3optim.patientpop.com/assets/images/provider/photos/2279307.jpg"/>
</div>

<div className="absolute -bottom-6 -left-6 hidden lg:flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl border border-slate-100">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Safety First</p>
<p className="text-xs text-slate-400">Top-tier sterilization</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-20 lg:py-32" id="providers">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900">Meet Your Doctors</h2>
<p className="mt-4 text-slate-500 font-light">Experienced specialists dedicated to your smile.</p>
</div>
<div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">

<a className="group relative flex flex-col items-center overflow-hidden rounded-3xl bg-white p-8 shadow-sm transition hover:shadow-md hover:-translate-y-1" href="#">
<div className="mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-slate-50">
<img alt="Roge Jacob, DDS" className="h-full w-full object-cover" src="https://sa1s3optim.patientpop.com/200x200/assets/production/practices/2975c528bb41200f32137410343632f79b8cf4e2/images/2282016.jpg"/>
</div>
<h3 className="text-xl font-medium text-slate-900">Roge Jacob, DDS</h3>
<p className="text-sm text-emerald-600 font-medium mt-1">Family &amp; Cosmetic Dentist</p>
<p className="mt-4 text-center text-sm font-light text-slate-500">Dedicated to providing comprehensive dental care with a gentle touch.</p>
<div className="mt-6 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition group-hover:border-emerald-500 group-hover:bg-emerald-500 group-hover:text-white">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</a>

<a className="group relative flex flex-col items-center overflow-hidden rounded-3xl bg-white p-8 shadow-sm transition hover:shadow-md hover:-translate-y-1" href="#">
<div className="mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-slate-50">
<img alt="Magdalena Azzarelli, DDS" className="h-full w-full object-cover" src="https://sa1s3optim.patientpop.com/200x200/assets/production/practices/2975c528bb41200f32137410343632f79b8cf4e2/images/2282020.jpg"/>
</div>
<h3 className="text-xl font-medium text-slate-900">Magdalena Azzarelli, DDS</h3>
<p className="text-sm text-emerald-600 font-medium mt-1">Cosmetic &amp; Family Dentist</p>
<p className="mt-4 text-center text-sm font-light text-slate-500">Focused on aesthetic excellence and patient comfort.</p>
<div className="mt-6 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition group-hover:border-emerald-500 group-hover:bg-emerald-500 group-hover:text-white">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</a>
</div>
</div>
</section>

<section className="bg-white py-20 lg:py-32" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
<div>
<span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-slate-400">What we offer</span>
<h2 className="text-3xl font-medium tracking-tight text-slate-900">Comprehensive Services</h2>
</div>
<a className="hidden md:inline-flex items-center text-sm font-medium text-slate-900 hover:text-emerald-600 transition mt-4 md:mt-0" href="#contact">
                        View all treatments <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

<div className="group rounded-2xl border border-slate-100 bg-white p-6 transition hover:border-slate-300 hover:shadow-lg">
<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition">
<iconify-icon icon="solar:crown-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-medium text-slate-900">Implants &amp; Crowns</h3>
<p className="text-sm font-light text-slate-500">Restorative solutions to bring back your perfect smile.</p>
</div>
<div className="group rounded-2xl border border-slate-100 bg-white p-6 transition hover:border-slate-300 hover:shadow-lg">
<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-medium text-slate-900">Teeth Whitening</h3>
<p className="text-sm font-light text-slate-500">Brighten your smile safely with professional treatments.</p>
</div>
<div className="group rounded-2xl border border-slate-100 bg-white p-6 transition hover:border-slate-300 hover:shadow-lg">
<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition">
<iconify-icon icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-medium text-slate-900">Laser Gum Therapy</h3>
<p className="text-sm font-light text-slate-500">Advanced technology for periodontal health.</p>
</div>
<div className="group rounded-2xl border border-slate-100 bg-white p-6 transition hover:border-slate-300 hover:shadow-lg">
<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition">
<iconify-icon icon="solar:stethoscope-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-medium text-slate-900">Root Canals</h3>
<p className="text-sm font-light text-slate-500">Pain-free therapy to save your natural teeth.</p>
</div>
</div>

<div className="mt-16 rounded-2xl bg-slate-50 px-8 py-10 border border-slate-100">
<div className="flex flex-col items-center justify-between gap-8 md:flex-row">
<div className="max-w-md">
<h4 className="text-lg font-medium text-slate-900">PPO Insurance Accepted</h4>
<p className="text-sm font-light text-slate-500 mt-1">We work with most major insurance providers including Aetna, Delta, and Cigna.</p>
</div>
<div className="flex flex-wrap justify-center gap-6 opacity-50 grayscale transition hover:opacity-100 hover:grayscale-0">

<span className="text-lg font-semibold text-slate-700">Aetna</span>
<span className="text-lg font-semibold text-slate-700">Delta Dental</span>
<span className="text-lg font-semibold text-slate-700">Cigna</span>
<span className="text-lg font-semibold text-slate-700">Anthem</span>
<span className="text-lg font-semibold text-slate-700">Humana</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="mb-12 text-3xl font-medium tracking-tight text-slate-900">Latest Dental News</h2>
<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
<article className="flex flex-col gap-4">
<div className="aspect-video w-full overflow-hidden rounded-2xl bg-slate-200">
<img alt="Blog" className="h-full w-full object-cover transition duration-500 hover:scale-105" src="https://sa1s3optim.patientpop.com/fit-in/368x226/assets/images/provider/photos//2829322.jpeg"/>
</div>
<div>
<span className="text-xs font-semibold uppercase text-emerald-600">Oral Health</span>
<h3 className="mt-1 text-lg font-medium text-slate-900 hover:text-emerald-700">5 Resolutions for Better Oral Health</h3>
<p className="mt-2 text-sm font-light text-slate-500 line-clamp-2">Whether you’re regretting the damage to your teeth after holiday feasting or just want healthier teeth...</p>
</div>
</article>
<article className="flex flex-col gap-4">
<div className="aspect-video w-full overflow-hidden rounded-2xl bg-slate-200">
<img alt="Blog" className="h-full w-full object-cover transition duration-500 hover:scale-105" src="https://sa1s3optim.patientpop.com/fit-in/368x226/assets/images/provider/photos//2822146.jpeg"/>
</div>
<div>
<span className="text-xs font-semibold uppercase text-emerald-600">Tips</span>
<h3 className="mt-1 text-lg font-medium text-slate-900 hover:text-emerald-700">Guide to Holiday Oral Health</h3>
<p className="mt-2 text-sm font-light text-slate-500 line-clamp-2">Thanksgiving and Christmas bring memories of good company. Here is how to protect your teeth.</p>
</div>
</article>
<article className="flex flex-col gap-4">
<div className="aspect-video w-full overflow-hidden rounded-2xl bg-slate-200">
<img alt="Blog" className="h-full w-full object-cover transition duration-500 hover:scale-105" src="https://sa1s3optim.patientpop.com/fit-in/368x226/assets/images/provider/photos//2819150.jpeg"/>
</div>
<div>
<span className="text-xs font-semibold uppercase text-emerald-600">Dentures</span>
<h3 className="mt-1 text-lg font-medium text-slate-900 hover:text-emerald-700">Time to Reline Your Dentures?</h3>
<p className="mt-2 text-sm font-light text-slate-500 line-clamp-2">Replacing missing teeth is nothing new. Learn when your dentures might need relining.</p>
</div>
</article>
</div>
</div>
</section>

<section className="bg-white" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="flex flex-col justify-center px-4 py-20 sm:px-6 lg:px-20 xl:px-24 bg-slate-900 text-white">
<h2 className="text-3xl font-medium tracking-tight mb-8">Visit Us</h2>
<div className="space-y-8">
<div>
<h3 className="text-sm font-medium uppercase tracking-wider text-slate-400 mb-2">Location</h3>
<p className="text-lg font-light">1660 Hillsdale Avenue, Suite 130<br/>San Jose, CA 95124</p>
</div>
<div>
<h3 className="text-sm font-medium uppercase tracking-wider text-slate-400 mb-2">Hours</h3>
<div className="grid grid-cols-2 gap-4 text-sm font-light text-slate-300 max-w-sm">
<span>Mon - Thu</span>
<span className="text-white text-right">8:00 am - 4:50 pm</span>
<span>Fri - Sun</span>
<span className="text-white text-right">Closed</span>
</div>
</div>
<div>
<h3 className="text-sm font-medium uppercase tracking-wider text-slate-400 mb-2">Contact</h3>
<p className="text-lg font-light mb-2"><a className="hover:text-emerald-400 transition" href="tel:4084048385">408-404-8385</a></p>
<p className="text-sm text-slate-400">General: 408-267-2550</p>
</div>
<div className="pt-4">
<a className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-emerald-500 px-8 text-sm font-medium text-white transition hover:bg-emerald-600" href="tel:4084048385">
                                Call to Schedule
                            </a>
</div>
</div>
</div>
<div className="h-96 w-full lg:h-auto bg-slate-200">
<iframe allowfullscreen="" className="h-full w-full border-0 grayscale hover:grayscale-0 transition duration-700" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175.760142323864!2d-121.9072192!3d37.2669082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e3379f5f1f7e7%3A0x64642491a4b62d4f!2sHillsdale%20Dental%20Care!5e0!3m2!1sen!2sus!4v1684349234123!5m2!1sen!2sus">
</iframe>
</div>
</div>
</section>
</main>

<footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-sm font-light">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
<div>
<span className="text-lg font-medium text-white tracking-tight">Hillsdale Dental Care</span>
<p className="mt-2">Quality care you can smile about.</p>
</div>
<div className="flex gap-6">
<a className="hover:text-white transition" href="https://www.facebook.com/HillsdaleDentalCare" target="_blank">
<iconify-icon icon="solar:facebook-linear" width="24"></iconify-icon>
</a>
</div>
</div>
<div className="mt-12 flex flex-col gap-4 border-t border-slate-900 pt-8 md:flex-row md:items-center md:justify-between">
<p>© 2026 Hillsdale Dental Care. All rights reserved.</p>
<div className="flex gap-6 flex-wrap">
<a className="hover:text-white transition" href="#">Privacy</a>
<a className="hover:text-white transition" href="#">Terms</a>
<a className="hover:text-white transition" href="#">Accessibility</a>
</div>
</div>
<div className="mt-8 flex items-center gap-2 text-xs text-slate-600">
<iconify-icon className="text-emerald-700" icon="solar:star-bold"></iconify-icon>
<span>Rated 4.91/5 based on 627 reviews.</span>
</div>
</div>
</footer>



    </>
  );
}
