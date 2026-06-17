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



        // Simple Vanilla JS for Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Close mobile menu when a link is clicked
        const mobileLinks = menu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
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
      

<a className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 px-4 py-2 rounded-md z-50 bg-teal-700 text-white" href="#main-content">Skip to main content</a>

<header className="fixed top-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300 bg-white/90 border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center">
<a className="group flex items-center gap-2" href="#">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-teal-600 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:activity" data-width="24" height="24" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="flex flex-col">
<span className="leading-none group-hover:text-teal-700 transition-colors text-lg font-semibold tracking-tight text-slate-900">DR. LUBBE</span>
<span className="text-xs text-slate-500 uppercase tracking-widest mt-1">Radiation Oncology</span>
</div>
</a>
</div>

<nav className="hidden lg:flex gap-8 items-center text-sm font-medium text-slate-600">
<a className="transition-colors hover:text-teal-700" href="#services">Services</a>
<a className="transition-colors hover:text-teal-700" href="#about">About</a>
<a className="transition-colors hover:text-teal-700" href="#process">Journey</a>
<a className="transition-colors hover:text-teal-700" href="#locations">Locations</a>
<a className="transition-colors hover:text-teal-700" href="#faq">FAQ</a>
</nav>

<div className="hidden lg:flex items-center gap-4">
<a className="flex items-center gap-2 font-medium text-sm transition-colors text-slate-900 hover:text-teal-700" href="tel:9729728778">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone" data-width="18" height="18" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        (972) 972-8778
                    </a>
<a className="text-sm font-medium py-2.5 px-5 rounded-lg transition-all shadow-sm hover:shadow-md bg-slate-900 hover:bg-slate-800 text-white" href="#contact">
                        Request Appointment
                    </a>
</div>

<div className="flex items-center lg:hidden">
<button aria-label="Toggle menu" className="p-2 rounded-md text-slate-500 focus:outline-none hover:text-slate-900 hover:bg-slate-100" id="mobile-menu-btn">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>

<div className="hidden lg:hidden border-b shadow-xl absolute w-full left-0 top-20 bg-white border-slate-200" id="mobile-menu">
<div className="px-4 pt-4 pb-6 space-y-3">
<a className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-teal-700 hover:bg-slate-50" href="#services">Services</a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-teal-700 hover:bg-slate-50" href="#about">About Dr. Lubbe</a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-teal-700 hover:bg-slate-50" href="#process">Patient Journey</a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-teal-700 hover:bg-slate-50" href="#locations">Locations</a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-teal-700 hover:bg-slate-50" href="#faq">FAQ</a>
<div className="pt-4 border-t mt-2 space-y-3 border-slate-100">
<a className="flex items-center justify-center gap-2 w-full py-3 border rounded-lg font-medium bg-white border-slate-200 text-slate-900" href="tel:9729728778">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone" data-width="18" height="18" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Call Now
                    </a>
<a className="flex items-center justify-center w-full py-3 rounded-lg font-medium bg-slate-900 text-white" href="#contact">
                        Request Appointment
                    </a>
</div>
</div>
</div>
</header>
<main className="" id="main-content">

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full blur-3xl opacity-50 pointer-events-none bg-teal-100"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full blur-3xl opacity-50 pointer-events-none bg-blue-100"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 gap-x-12 gap-y-12 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border shadow-sm mb-6 bg-white border-slate-200">
<span className="flex h-2 w-2 rounded-full bg-teal-500"></span>
<span className="text-xs font-medium uppercase tracking-wide text-slate-600">Serving Plano &amp; McKinney</span>
</div>
<h1 className="lg:text-5xl xl:text-6xl leading-tight text-4xl font-semibold tracking-tight mb-6 text-slate-900">
                            Radiation Oncology Care with <span className="text-teal-700">Precision</span> and <span className="text-teal-700">Compassion</span>.
                        </h1>
<p className="text-lg mb-2 leading-relaxed text-slate-600">
                            Advanced, individualized treatment planning delivered with a supportive touch. 
                        </p>
<p className="text-base text-slate-500 mb-8 italic">"Never fight alone."</p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="inline-flex justify-center items-center px-6 py-3.5 border border-transparent text-base font-medium rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 text-white bg-slate-900 hover:bg-slate-800" href="tel:9729728778">
                                Call (972) 972-8778
                            </a>
<a className="inline-flex justify-center items-center px-6 py-3.5 border text-base font-medium rounded-lg transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 border-slate-200 text-slate-700 bg-white hover:bg-slate-50" href="#contact">
                                Request Appointment
                            </a>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t pt-8 border-slate-200">
<div className="flex items-center gap-3">
<div className="p-2 rounded-full text-teal-600 bg-teal-50">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:award" data-width="20" height="20" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></g></svg>
</div>
<span className="text-sm font-medium text-slate-700">Board-Certified Radiation Oncologist</span>
</div>
<div className="flex items-center gap-3">
<div className="p-2 rounded-full text-teal-600 bg-teal-50">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="20" height="20" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<span className="text-sm font-medium text-slate-700">Two Convenient Locations</span>
</div>
<div className="flex items-center gap-3">
<div className="p-2 rounded-full text-teal-600 bg-teal-50">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:video" data-width="20" height="20" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></g></svg>
</div>
<span className="text-sm font-medium text-slate-700">Telemedicine Available</span>
</div>
</div>
</div>

<div className="relative hidden lg:block h-full min-h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-200">

<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-slate-900">
<img alt="Advanced Medical Imaging Analysis" className="hover:scale-105 transition-transform duration-700 ease-out opacity-90 w-full h-full object-cover" src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent pointer-events-none from-slate-900/20"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-base font-semibold tracking-wide uppercase text-teal-600">How We Help</h2>
<p className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl text-slate-900">Advanced Treatments, Simply Explained</p>
<p className="mt-4 text-lg text-slate-600">We utilize state-of-the-art technology to target cancer while minimizing impact on your daily life.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 border rounded-xl hover:shadow-md transition-all duration-300 bg-white border-slate-200 hover:border-teal-200">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors bg-teal-50 text-teal-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:user-plus" data-width="24" height="24" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M19 8v6m3-3h-6"></path></g></svg>
</div>
<h3 className="text-xl font-semibold mb-3 text-slate-900">New Patient Consults</h3>
<p className="text-sm leading-relaxed text-slate-600">A comprehensive first meeting to review your history, discuss diagnosis, and create a personalized plan.</p>
</div>

<div className="group p-8 border rounded-xl hover:shadow-md transition-all duration-300 bg-white border-slate-200 hover:border-teal-200">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors bg-teal-50 text-teal-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:monitor" data-width="24" height="24" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" width="20" x="2" y="3"></rect><path d="M8 21h8m-4-4v4"></path></g></svg>
</div>
<h3 className="text-xl font-semibold mb-3 text-slate-900">Telemedicine Visits</h3>
<p className="text-sm leading-relaxed text-slate-600">Convenient follow-up appointments from the comfort of your home via secure video connection.</p>
</div>

<div className="group p-8 border rounded-xl hover:shadow-md transition-all duration-300 bg-white border-slate-200 hover:border-teal-200">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors bg-teal-50 text-teal-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:crosshair" data-width="24" height="24" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M22 12h-4M6 12H2m10-6V2m0 20v-4"></path></g></svg>
</div>
<h3 className="text-xl font-semibold mb-3 text-slate-900">IMRT</h3>
<p className="text-sm leading-relaxed text-slate-600">Intensity-Modulated Radiation Therapy. Advanced beams that shape radiation to the tumor, sparing healthy tissue.</p>
</div>

<div className="group p-8 border rounded-xl hover:shadow-md transition-all duration-300 bg-white border-slate-200 hover:border-teal-200">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors bg-teal-50 text-teal-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="24" height="24" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3 text-slate-900">SBRT</h3>
<p className="text-sm leading-relaxed text-slate-600">Stereotactic Body Radiation Therapy. Highly precise, high-dose radiation delivered in fewer sessions.</p>
</div>

<div className="group p-8 border rounded-xl hover:shadow-md transition-all duration-300 bg-white border-slate-200 hover:border-teal-200">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors bg-teal-50 text-teal-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:target" data-width="24" height="24" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></g></svg>
</div>
<h3 className="text-xl font-semibold mb-3 text-slate-900">Electron Therapy</h3>
<p className="text-sm leading-relaxed text-slate-600">A specialized treatment ideal for skin cancers or superficial tumors near the surface of the body.</p>
</div>

<div className="group p-8 border rounded-xl hover:shadow-md transition-all duration-300 bg-white border-slate-200 hover:border-teal-200">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors bg-teal-50 text-teal-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:microscope" data-width="24" height="24" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M6 18h8M3 22h18m-7 0a7 7 0 1 0 0-14h-1m-4 6h2m-2-2a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Zm3-6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3 text-slate-900">Brachytherapy</h3>
<p className="text-sm leading-relaxed text-slate-600">Internal radiation therapy where a radiation source is placed inside or next to the area requiring treatment.</p>
</div>
</div>
<div className="mt-8 text-center">
<p className="text-sm text-slate-500 inline-block px-4 py-2 rounded-full border bg-slate-50 border-slate-100">
<span className="font-medium">Note:</span> Services vary by diagnosis and treatment plan.
                    </p>
</div>
</div>
</section>

<section className="py-16 border-y bg-slate-50 border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Conditions We Treat</h2>
<p className="text-sm text-slate-600">Targeting a wide range of cancers with specialized care.</p>
</div>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 border rounded-full text-sm font-medium shadow-sm bg-white border-slate-200 text-slate-700">Prostate Cancer</span>
<span className="px-4 py-2 border rounded-full text-sm font-medium shadow-sm bg-white border-slate-200 text-slate-700">Breast Cancer</span>
<span className="px-4 py-2 border rounded-full text-sm font-medium shadow-sm bg-white border-slate-200 text-slate-700">Lung Cancer</span>
<span className="px-4 py-2 border rounded-full text-sm font-medium shadow-sm bg-white border-slate-200 text-slate-700">Head &amp; Neck Cancer</span>
<span className="px-4 py-2 border rounded-full text-sm font-medium shadow-sm bg-white border-slate-200 text-slate-700">Gastrointestinal</span>
<span className="px-4 py-2 border rounded-full text-sm font-medium shadow-sm bg-white border-slate-200 text-slate-700">Brain Tumors</span>
<span className="px-4 py-2 border rounded-full text-sm font-medium shadow-sm bg-white border-slate-200 text-slate-700">Gynecologic Cancers</span>
<span className="px-4 py-2 border rounded-full text-sm font-medium shadow-sm bg-white border-slate-200 text-slate-700">Skin Cancer</span>
<span className="px-4 py-2 border rounded-full text-sm font-medium shadow-sm bg-teal-50 border-teal-100 text-teal-800">Other Cancers — Please Call</span>
</div>
<p className="mt-4 text-xs italic text-slate-400">This list is not exhaustive. Please schedule a consultation to discuss your specific needs.</p>
</div>
</section>

<section className="py-20 lg:py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-4 order-2 lg:order-1">
<div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg relative bg-slate-200">

<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t text-slate-500 from-slate-300 to-slate-100">
<div className="text-center p-6">
<svg aria-hidden="true" className="iconify iconify--lucide mx-auto mb-2" data-icon="lucide:user" data-width="48" height="48" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
<span className="block font-medium">Dr. Wilhelm J. Lubbe</span>
<span className="text-xs opacity-75">Professional Headshot Placeholder</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-8 order-1 lg:order-2">
<h2 className="text-base font-semibold tracking-wide uppercase mb-2 text-teal-600">Meet Your Doctor</h2>
<h3 className="text-3xl font-semibold tracking-tight sm:text-4xl mb-6 text-slate-900">Wilhelm J. Lubbe, MD, PhD</h3>
<div className="prose prose-slate max-w-none mb-8 text-slate-600">
<p className="text-lg leading-relaxed">
                                Dr. Lubbe combines extensive academic expertise with a deeply personal commitment to patient care. With a dual background as both a physician and a researcher (MD, PhD), he approaches every case with scientific rigor and a problem-solving mindset. However, his practice is defined by his belief that every patient deserves to be heard, understood, and treated with dignity.
                            </p>
<p>
                                "My philosophy is simple: treat the person, not just the disease. I strive to make complex treatments understandable and ensure my patients feel supported at every step of their journey."
                            </p>
</div>

<div className="rounded-xl p-6 border bg-slate-50 border-slate-100">
<h4 className="font-semibold mb-4 flex items-center gap-2 text-slate-900">
<svg aria-hidden="true" className="iconify iconify--lucide text-teal-600" data-icon="lucide:shield-check" height="1em" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
                                Credentials &amp; Affiliations
                            </h4>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify iconify--lucide mt-1 flex-shrink-0 text-teal-600" data-icon="lucide:check-circle" data-width="18" height="18" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span className="text-sm text-slate-700"><strong>Board-Certified:</strong> American Board of Radiology (Radiation Oncology)</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify iconify--lucide mt-1 flex-shrink-0 text-teal-600" data-icon="lucide:check-circle" data-width="18" height="18" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span className="text-sm text-slate-700"><strong>Hospital Affiliation:</strong> Baylor Scott &amp; White Medical Center – Plano</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify iconify--lucide mt-1 flex-shrink-0 text-teal-600" data-icon="lucide:check-circle" data-width="18" height="18" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span className="text-sm text-slate-700"><strong>Hospital Affiliation:</strong> Texas Health Plano</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify iconify--lucide mt-1 flex-shrink-0 text-teal-600" data-icon="lucide:check-circle" data-width="18" height="18" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span className="text-sm text-slate-700"><strong>Education:</strong> MD and PhD degrees, specializing in Oncology research</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white" id="process">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight">What to Expect</h2>
<p className="mt-4 text-slate-400">Your journey to recovery, broken down into simple steps.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2 z-0 bg-slate-700"></div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">

<div className="flex flex-col items-center text-center md:items-center">
<div className="w-12 h-12 rounded-full border-4 flex items-center justify-center text-lg font-bold mb-4 bg-teal-600 border-slate-900">1</div>
<h3 className="font-semibold text-lg mb-2">Referral</h3>
<p className="text-sm px-2 text-slate-400">Referral from your doctor or self-request appointment.</p>
</div>

<div className="flex flex-col items-center text-center md:items-center">
<div className="w-12 h-12 rounded-full border-4 flex items-center justify-center text-lg font-bold mb-4 bg-slate-800 border-slate-900">2</div>
<h3 className="font-semibold text-lg mb-2">Consultation</h3>
<p className="text-sm px-2 text-slate-400">Meeting Dr. Lubbe and reviewing your records.</p>
</div>

<div className="flex flex-col items-center text-center md:items-center">
<div className="w-12 h-12 rounded-full border-4 flex items-center justify-center text-lg font-bold mb-4 bg-slate-800 border-slate-900">3</div>
<h3 className="font-semibold text-lg mb-2">Simulation</h3>
<p className="text-sm px-2 text-slate-400">CT scan to map the treatment area precisely.</p>
</div>

<div className="flex flex-col items-center text-center md:items-center">
<div className="w-12 h-12 rounded-full border-4 flex items-center justify-center text-lg font-bold mb-4 bg-slate-800 border-slate-900">4</div>
<h3 className="font-semibold text-lg mb-2">Treatment</h3>
<p className="text-sm px-2 text-slate-400">Daily sessions (typically M-F) as prescribed.</p>
</div>

<div className="flex flex-col items-center text-center md:items-center">
<div className="w-12 h-12 rounded-full border-4 flex items-center justify-center text-lg font-bold mb-4 bg-slate-800 border-slate-900">5</div>
<h3 className="font-semibold text-lg mb-2">Follow-up</h3>
<p className="text-sm px-2 text-slate-400">Monitoring progress and coordinating care.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-12">

<div>
<h3 className="text-xl font-semibold mb-6 text-slate-900">Patient Forms</h3>
<div className="space-y-4">
<a className="block p-4 border rounded-lg hover:border-teal-500 hover:shadow-sm transition-all flex items-center justify-between group bg-white border-slate-200" href="#">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify iconify--lucide text-red-500" data-icon="lucide:file-text" height="1em" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
<span className="font-medium group-hover:text-teal-700 text-slate-700">New Patient Intake Form</span>
</div>
<svg aria-hidden="true" className="iconify iconify--lucide group-hover:text-teal-500 text-slate-300" data-icon="lucide:download" height="1em" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
</a>
<a className="block p-4 border rounded-lg hover:border-teal-500 hover:shadow-sm transition-all flex items-center justify-between group bg-white border-slate-200" href="#">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify iconify--lucide text-red-500" data-icon="lucide:file-text" height="1em" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
<span className="font-medium group-hover:text-teal-700 text-slate-700">Release of Information</span>
</div>
<svg aria-hidden="true" className="iconify iconify--lucide group-hover:text-teal-500 text-slate-300" data-icon="lucide:download" height="1em" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
</a>
<a className="block p-4 border rounded-lg hover:border-teal-500 hover:shadow-sm transition-all flex items-center justify-between group bg-white border-slate-200" href="#">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify iconify--lucide text-red-500" data-icon="lucide:check-square" height="1em" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span className="font-medium group-hover:text-teal-700 text-slate-700">Radiation Therapy Checklist</span>
</div>
<svg aria-hidden="true" className="iconify iconify--lucide group-hover:text-teal-500 text-slate-300" data-icon="lucide:download" height="1em" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
</a>
</div>
</div>

<div>
<h3 className="text-xl font-semibold mb-6 text-slate-900">Billing &amp; Insurance</h3>
<div className="p-6 border rounded-xl bg-white border-slate-200">
<p className="mb-4 text-sm text-slate-600">We accept most major insurance plans. For specific billing inquiries, please contact our dedicated billing department.</p>
<div className="flex items-center gap-3 mb-2">
<svg aria-hidden="true" className="iconify iconify--lucide text-teal-600" data-icon="lucide:phone" height="1em" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-medium text-slate-900">800-477-5240</span>
</div>
<div className="flex items-center gap-3 mb-6">
<svg aria-hidden="true" className="iconify iconify--lucide text-teal-600" data-icon="lucide:mail" height="1em" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
<span className="font-medium text-slate-900">billing@wilhelmlubbe.com</span>
</div>
<div className="border-t pt-4 border-slate-100">
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Payment Methods</span>
<div className="flex gap-2 mt-2 mb-2">
<div className="h-8 w-12 rounded border flex items-center justify-center text-xs font-bold bg-slate-100 border-slate-200 text-slate-400">VISA</div>
<div className="h-8 w-12 rounded border flex items-center justify-center text-xs font-bold bg-slate-100 border-slate-200 text-slate-400">MC</div>
<div className="h-8 w-12 rounded border flex items-center justify-center text-xs font-bold bg-slate-100 border-slate-200 text-slate-400">AMEX</div>
<div className="h-8 w-12 rounded border flex items-center justify-center text-xs font-bold bg-slate-100 border-slate-200 text-slate-400">DISC</div>
</div>
<p className="text-xs text-slate-400">*Cash accepted only for exact dollar amounts.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="locations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Our Locations</h2>
<p className="mt-4 text-slate-600">Serving the North Dallas community with two convenient offices.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="border rounded-xl overflow-hidden flex flex-col h-full bg-slate-50 border-slate-200">
<div className="p-6 flex-grow">
<h3 className="text-xl font-semibold mb-2 text-slate-900">Plano Office</h3>
<address className="not-italic mb-4 block text-slate-600">
                                5948 West Parker Road, Suite 100<br/>
                                Plano, TX 75093
                            </address>
<div className="space-y-2 text-sm text-slate-600">
<p><strong className="text-slate-900">Phone:</strong> (972) 972-8778</p>
<p><strong className="text-slate-900">Fax:</strong> (972) 525-0630</p>
<p><strong className="text-slate-900">Hours:</strong> Mon–Fri, 8:00am–5:00pm</p>
</div>
<div className="mt-6 flex gap-3">
<a className="flex-1 border py-2 rounded-lg text-center text-sm font-medium transition-colors bg-white border-slate-200 text-slate-700 hover:bg-slate-50" href="#">Get Directions</a>
<a className="flex-1 py-2 rounded-lg text-center text-sm font-medium transition-colors bg-teal-600 text-white hover:bg-teal-700" href="tel:9729728778">Call Office</a>
</div>
</div>

<div className="h-48 w-full flex items-center justify-center border-t bg-slate-200 border-slate-200">
<span className="text-slate-500 text-sm flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map" height="1em" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Google Map Placeholder
                            </span>
</div>
</div>

<div className="border rounded-xl overflow-hidden flex flex-col h-full bg-slate-50 border-slate-200">
<div className="p-6 flex-grow">
<h3 className="text-xl font-semibold mb-2 text-slate-900">McKinney Office</h3>
<address className="not-italic mb-4 block text-slate-600">
                                4201 Medical Center Drive, Suite 180<br/>
                                McKinney, TX 75069
                            </address>
<div className="space-y-2 text-sm text-slate-600">
<p><strong className="text-slate-900">Phone:</strong> (972) 972-8778</p>
<p><strong className="text-slate-900">Fax:</strong> (972) 525-0630</p>
<p><strong className="text-slate-900">Hours:</strong> Mon–Fri, 8:00am–5:00pm</p>
</div>
<div className="mt-6 flex gap-3">
<a className="flex-1 border py-2 rounded-lg text-center text-sm font-medium transition-colors bg-white border-slate-200 text-slate-700 hover:bg-slate-50" href="#">Get Directions</a>
<a className="flex-1 py-2 rounded-lg text-center text-sm font-medium transition-colors bg-teal-600 text-white hover:bg-teal-700" href="tel:9729728778">Call Office</a>
</div>
</div>

<div className="h-48 w-full flex items-center justify-center border-t bg-slate-200 border-slate-200">
<span className="text-slate-500 text-sm flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map" height="1em" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Google Map Placeholder
                            </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-10 text-slate-900">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group border rounded-lg overflow-hidden bg-white border-slate-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-slate-900">
<span>What is radiation oncology?</span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" height="1em" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="p-4 pt-0 text-sm leading-relaxed text-slate-600">
                            Radiation oncology is a medical specialty that uses high-energy radiation beams to target and destroy cancer cells. It is often used to cure cancer, control its growth, or relieve symptoms.
                        </div>
</details>

<details className="group border rounded-lg overflow-hidden bg-white border-slate-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-slate-900">
<span>What happens during the first visit?</span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" height="1em" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="p-4 pt-0 text-sm leading-relaxed text-slate-600">
                            You will meet with Dr. Lubbe to discuss your medical history and diagnosis. We will review your imaging, explain treatment options, and if radiation is recommended, we will outline the next steps for simulation and planning.
                        </div>
</details>

<details className="group border rounded-lg overflow-hidden bg-white border-slate-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-slate-900">
<span>Do you offer telemedicine?</span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" height="1em" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="p-4 pt-0 text-sm leading-relaxed text-slate-600">
                            Yes, we offer telemedicine visits for certain follow-up appointments and consultations to make care more convenient for you.
                        </div>
</details>

<details className="group border rounded-lg overflow-hidden bg-white border-slate-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-slate-900">
<span>How many treatments will I need?</span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" height="1em" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="p-4 pt-0 text-sm leading-relaxed text-slate-600">
                            This varies significantly based on the type of cancer and the goal of treatment. Some patients require only 1–5 sessions (SBRT), while others may need daily treatments for several weeks.
                        </div>
</details>

<details className="group border rounded-lg overflow-hidden bg-white border-slate-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-slate-900">
<span>Do you accept insurance?</span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" height="1em" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="p-4 pt-0 text-sm leading-relaxed text-slate-600">
                            Yes, we accept most major insurance plans including Medicare. Please contact our billing office or check the patient resources section for more details.
                        </div>
</details>

<details className="group border rounded-lg overflow-hidden bg-white border-slate-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-slate-900">
<span>How do I send records or referrals?</span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" height="1em" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="p-4 pt-0 text-sm leading-relaxed text-slate-600">
                            Records can be faxed to (972) 525-0630. Patients may also bring physical copies of discs and reports to their consultation.
                        </div>
</details>

<details className="group border rounded-lg overflow-hidden bg-white border-slate-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-slate-900">
<span>What if I have an urgent issue?</span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" height="1em" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="p-4 pt-0 text-sm leading-relaxed text-slate-600">
                            If you are experiencing a life-threatening emergency, call 911 immediately. For urgent clinical questions during business hours, call our office. After hours, our answering service will direct you.
                        </div>
</details>
</div>
</div>
</section>

<section className="py-20 lg:py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-6 text-slate-900">Contact Us</h2>
<p className="text-lg mb-8 text-slate-600">
                            Ready to schedule a consultation? Fill out the form or call us directly. We are here to answer your questions.
                        </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-3 rounded-lg bg-teal-50 text-teal-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone" data-width="24" height="24" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="font-medium text-slate-900">Phone</h4>
<a className="text-slate-600 hover:text-teal-700" href="tel:9729728778">(972) 972-8778</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 rounded-lg bg-teal-50 text-teal-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:printer" data-width="24" height="24" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path><rect height="8" rx="1" width="12" x="6" y="14"></rect></g></svg>
</div>
<div>
<h4 className="font-medium text-slate-900">Fax</h4>
<span className="text-slate-600">(972) 525-0630</span>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 rounded-lg bg-teal-50 text-teal-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="24" height="24" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<div>
<h4 className="font-medium text-slate-900">Email</h4>
<a className="text-slate-600 hover:text-teal-700" href="mailto:info@wilhelmlubbe.com">info@wilhelmlubbe.com</a>
</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl border bg-slate-50 border-slate-200">
<div className="border-l-4 p-4 mb-6 rounded-r bg-blue-50 border-blue-600">
<div className="flex">
<div className="flex-shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide text-blue-600" data-icon="lucide:alert-circle" height="1em" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4m0 4h.01"></path></g></svg>
</div>
<div className="ml-3">
<p className="text-sm text-blue-800">
<strong>Privacy Notice:</strong> Please do not submit sensitive medical information through this form. For urgent symptoms, call 911. For clinical questions, please call the office.
                                    </p>
</div>
</div>
</div>
<form action="#" className="space-y-4" method="POST">
<div>
<label className="block text-sm font-medium mb-1 text-slate-700" htmlFor="name">Full Name</label>
<input className="w-full rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500 py-2.5 px-3 border border-slate-300" id="name" name="name" placeholder="Jane Doe" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium mb-1 text-slate-700" htmlFor="phone">Phone Number</label>
<input className="w-full rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500 py-2.5 px-3 border border-slate-300" id="phone" name="phone" placeholder="(555) 123-4567" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium mb-1 text-slate-700" htmlFor="email">Email Address</label>
<input className="w-full rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500 py-2.5 px-3 border border-slate-300" id="email" name="email" placeholder="jane@example.com" type="email"/>
</div>
</div>
<div>
<label className="block text-sm font-medium mb-1 text-slate-700" htmlFor="time">Preferred Contact Time</label>
<select className="w-full rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500 py-2.5 px-3 border border-slate-300 bg-white" id="time" name="time">
<option>Morning</option>
<option>Afternoon</option>
<option>Anytime</option>
</select>
</div>
<div>
<label className="block text-sm font-medium mb-1 text-slate-700" htmlFor="message">Message (General Inquiries Only)</label>
<textarea className="w-full rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500 py-2.5 px-3 border border-slate-300" id="message" name="message" placeholder="I would like to request an appointment..." rows="3"></textarea>
</div>
<button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-colors text-white bg-slate-900 hover:bg-slate-800" type="submit">
                                Request Appointment
                            </button>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="py-12 border-t bg-slate-900 text-slate-300 border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-8 mb-8">
<div className="col-span-1 md:col-span-2">
<span className="font-semibold text-lg tracking-tight block mb-4 text-white">Wilhelm J. Lubbe, MD, PhD, PLLC</span>
<p className="text-sm max-w-sm text-slate-400">
                        Providing compassionate, precise radiation oncology care to patients in Plano, McKinney, and surrounding areas.
                    </p>
</div>
<div>
<h4 className="font-medium mb-3 text-white">Practice</h4>
<ul className="space-y-2 text-sm">
<li><a className="transition-colors hover:text-white" href="#services">Services</a></li>
<li><a className="transition-colors hover:text-white" href="#about">About Dr. Lubbe</a></li>
<li><a className="transition-colors hover:text-white" href="#locations">Locations</a></li>
<li><a className="transition-colors hover:text-white" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-3 text-white">Legal</h4>
<ul className="space-y-2 text-sm">
<li><a className="transition-colors hover:text-white" href="#">Privacy Policy</a></li>
<li><a className="transition-colors hover:text-white" href="#">HIPAA Notice</a></li>
<li><a className="transition-colors hover:text-white" href="#">Accessibility</a></li>
<li><a className="transition-colors hover:text-white" href="#">Price Transparency</a></li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 border-slate-800">
<p>© 2023 Wilhelm J. Lubbe, MD, PhD, PLLC. All rights reserved.</p>
<p className="mt-2 md:mt-0">Medical Website Design by [Agency Name Placeholder]</p>
</div>
</div>
</footer>


    </>
  );
}
