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
      

<header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex-shrink-0">
<a className="text-xl font-semibold tracking-tighter text-slate-900" href="#">
                        L U M I N A
                    </a>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#about">Our Practice</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#testimonials">Reviews</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</nav>

<div className="hidden md:flex items-center">
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2" href="#">
                        Book Appointment
                    </a>
</div>

<div className="flex items-center md:hidden">
<button className="text-slate-500 hover:text-slate-900 focus:outline-none" type="button">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<main className="flex-grow">
<section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
<div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
<div className="lg:col-span-6 text-center lg:text-left">
<div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-100 mb-6">
<iconify-icon className="mr-2" height="16" icon="solar:star-fall-minimalistic-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
                            Accepting New Patients
                        </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                            Modern dentistry.<br/>
<span className="text-slate-500">Reimagined for you.</span>
</h1>
<p className="mt-4 text-lg text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0">
                            Experience gentle, comprehensive dental care in a state-of-the-art environment. We combine advanced technology with a compassionate approach to perfect your smile.
                        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2" href="#">
                                Book Your Visit
                                <iconify-icon className="ml-2" height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:text-slate-900 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2" href="#services">
                                Explore Services
                            </a>
</div>
</div>
<div className="lg:col-span-6 mt-16 lg:mt-0 relative hidden md:block">

<div className="relative w-full aspect-[4/3] rounded-3xl bg-gray-100 overflow-hidden shadow-sm border border-gray-200">
<img alt="Modern Dental Clinic" className="object-cover w-full h-full opacity-90 mix-blend-multiply" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent"></div>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
<iconify-icon height="24" icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Top Rated</p>
<div className="flex items-center text-yellow-400 mt-0.5">
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<span className="text-xs text-slate-500 ml-1 font-medium">5.0 (200+)</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-gray-100" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Comprehensive Care</h2>
<p className="text-lg text-slate-600">From routine cleanings to advanced restorative procedures, we provide all the services you need for a healthy, beautiful smile under one roof.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-200 flex flex-col h-full">
<div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-blue-600 mb-6 shadow-sm group-hover:scale-105 transition-transform">
<iconify-icon height="28" icon="solar:health-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Preventive Dentistry</h3>
<p className="text-base text-slate-600 flex-grow mb-6">Routine checkups, cleanings, and oral cancer screenings to maintain optimal oral health and catch issues early.</p>
<a className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 mt-auto" href="#">
                            Learn more <iconify-icon className="ml-1" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="group relative bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-200 flex flex-col h-full">
<div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-purple-600 mb-6 shadow-sm group-hover:scale-105 transition-transform">
<iconify-icon height="28" icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Cosmetic Treatments</h3>
<p className="text-base text-slate-600 flex-grow mb-6">Professional whitening, veneers, and Invisalign to help you achieve the confident, radiant smile you deserve.</p>
<a className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700 mt-auto" href="#">
                            Learn more <iconify-icon className="ml-1" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="group relative bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-200 flex flex-col h-full">
<div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-teal-600 mb-6 shadow-sm group-hover:scale-105 transition-transform">
<iconify-icon height="28" icon="solar:settings-minimalistic-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Restorative Care</h3>
<p className="text-base text-slate-600 flex-grow mb-6">Dental implants, crowns, bridges, and fillings using high-quality materials to restore function and aesthetics.</p>
<a className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-700 mt-auto" href="#">
                            Learn more <iconify-icon className="ml-1" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white overflow-hidden relative">

<div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-10">
<svg fill="none" height="384" viewbox="0 0 404 384" width="404"><defs><pattern height="20" id="d3eb07ae-5182-43e6-857d-35c643af9034" patternunits="userSpaceOnUse" width="20" x="0" y="0"><rect fill="currentColor" height="4" width="4" x="0" y="0"></rect></pattern></defs><rect fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" height="384" width="404"></rect></svg>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
<div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">A different kind of dental experience.</h2>
<p className="text-lg text-slate-400 mb-10">We've redesigned the patient experience to eliminate anxiety and maximize comfort. From our soothing waiting room to our pain-free techniques.</p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1 text-blue-400">
<iconify-icon height="24" icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-white">Transparent Pricing</h4>
<p className="mt-1 text-sm text-slate-400">No hidden fees. We provide clear treatment plans and work with your insurance.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1 text-blue-400">
<iconify-icon height="24" icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-white">Advanced Technology</h4>
<p className="mt-1 text-sm text-slate-400">3D imaging and digital impressions for faster, more accurate diagnoses and treatments.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1 text-blue-400">
<iconify-icon height="24" icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-white">Anxiety-Free Approach</h4>
<p className="mt-1 text-sm text-slate-400">Sedation options, noise-canceling headphones, and a gentle touch.</p>
</div>
</div>
</div>
</div>
<div className="mt-16 lg:mt-0 relative">
<div className="aspect-square rounded-3xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl relative">
<img alt="Dental Equipment" className="object-cover w-full h-full opacity-60 mix-blend-overlay grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

<div className="absolute bottom-8 left-8 right-8">
<p className="text-2xl font-semibold tracking-tight text-white mb-2">State of the art facility</p>
<p className="text-sm text-slate-300">Equipped with the latest in dental innovation.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="testimonials">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Loved by our patients</h2>
<p className="text-lg text-slate-600">Don't just take our word for it. Read what our community has to say.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
<div className="flex items-center text-yellow-400 mb-4">
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-base text-slate-700 mb-6 flex-grow">"The most painless dental experience I've ever had. The staff is incredibly friendly, and Dr. Smith took the time to explain everything clearly. Highly recommend!"</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-medium text-sm">SJ</div>
<div>
<p className="text-sm font-medium text-slate-900">Sarah Jenkins</p>
<p className="text-xs text-slate-500">Patient since 2022</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
<div className="flex items-center text-yellow-400 mb-4">
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-base text-slate-700 mb-6 flex-grow">"I hadn't been to the dentist in years due to anxiety. Lumina completely changed my perspective. The calm environment and gentle approach made all the difference."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-medium text-sm">MR</div>
<div>
<p className="text-sm font-medium text-slate-900">Michael Rodriguez</p>
<p className="text-xs text-slate-500">Patient since 2023</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
<div className="flex items-center text-yellow-400 mb-4">
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-base text-slate-700 mb-6 flex-grow">"Got my Invisalign done here. The results are amazing, and the process was seamless. The modern equipment they use really speeds things up. 10/10."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-medium text-sm">EL</div>
<div>
<p className="text-sm font-medium text-slate-900">Emily Chen</p>
<p className="text-xs text-slate-500">Patient since 2021</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 relative overflow-hidden">
<div className="absolute inset-0 bg-blue-600"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6">Ready to perfect your smile?</h2>
<p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">Join hundreds of satisfied patients. Schedule your initial consultation today and discover a better way to do dentistry.</p>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-blue-900 bg-white rounded-full hover:bg-gray-50 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600" href="#">
                    Book Your Appointment
                    <iconify-icon className="ml-2" height="20" icon="solar:calendar-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<p className="mt-4 text-sm text-blue-200">Usually available within 48 hours.</p>
</div>
</section>
</main>

<footer className="bg-white border-t border-gray-200 pt-16 pb-8">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="text-lg font-semibold tracking-tighter text-slate-900 mb-4 block" href="#">
                        L U M I N A
                    </a>
<p className="text-sm text-slate-500 mb-6 max-w-xs">
                        Modern dentistry reimagined for your comfort, health, and confidence.
                    </p>
<div className="flex space-x-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<span className="sr-only">Instagram</span>
<iconify-icon height="20" icon="solar:camera-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<span className="sr-only">Twitter</span>
<iconify-icon height="20" icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4">Services</h3>
<ul className="space-y-3">
<li><a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">Preventive Care</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">Cosmetic Dentistry</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">Invisalign &amp; Orthodontics</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">Implants &amp; Restorative</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4">Practice</h3>
<ul className="space-y-3">
<li><a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">Our Team</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">Patient Forms</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">Financing</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4">Visit Us</h3>
<address className="not-italic text-sm text-slate-600 space-y-3">
<p className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-slate-400 flex-shrink-0" height="16" icon="solar:map-point-linear" strokeWidth="1.5" width="16"></iconify-icon>
                            123 Healthway Drive, Suite 100<br/>San Francisco, CA 94105
                        </p>
<p className="flex items-center gap-2">
<iconify-icon className="text-slate-400 flex-shrink-0" height="16" icon="solar:phone-calling-linear" strokeWidth="1.5" width="16"></iconify-icon>
                            (555) 123-4567
                        </p>
<p className="flex items-center gap-2">
<iconify-icon className="text-slate-400 flex-shrink-0" height="16" icon="solar:clock-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                            Mon-Fri: 8am - 6pm
                        </p>
</address>
</div>
</div>
<div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">
                    © 2023 Lumina Dental Practice. All rights reserved.
                </p>
<div className="flex space-x-6">
<a className="text-xs text-slate-500 hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-slate-500 hover:text-slate-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
