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
      

<nav className="relative pt-6 px-6 max-w-7xl mx-auto flex items-center justify-between z-20">

<div className="flex items-center gap-3 cursor-pointer">
<div className="w-10 h-10 bg-white/10 border border-white/10 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-activity w-6 h-6 text-white" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
</svg>
</div>
</div>

<div className="hidden md:flex items-center bg-[#2970de] rounded-lg p-1 border border-white/5">
<a className="px-6 py-2 text-sm font-medium text-white hover:bg-white/10 rounded-md transition-all duration-200" href="#">
          About
        </a>
<a className="px-6 py-2 text-sm font-medium text-white hover:bg-white/10 rounded-md transition-all duration-200" href="#">
          Services
        </a>
<a className="px-6 py-2 text-sm font-medium text-white hover:bg-white/10 rounded-md transition-all duration-200" href="#">
          Blog
        </a>
</div>

<div className="flex items-center gap-6 relative">

<svg className="hidden xl:block absolute -bottom-8 left-0 text-[#4ADE80] w-12 h-12 transform -rotate-12" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="M90 10 C 60 40, 40 40, 10 80" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
<path d="M10 80 L 25 75 M 10 80 L 20 60" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
</svg>
<a className="hidden lg:flex items-center gap-2 text-sm font-medium text-white hover:text-blue-100 transition-colors" href="tel:+447866058159">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
</svg>
<span>+44 78660 58159</span>
</a>
<button className="bg-[#FFD672] hover:bg-[#ffe094] hover:-translate-y-0.5 text-[#18181b] text-sm font-medium px-6 py-3 rounded-lg transition-all shadow-lg">
          Book Appointment
        </button>
</div>
</nav>
<main className="">

<section className="pt-20 pb-32 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col gap-6 pt-8">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm w-fit shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
</span>
<span className="text-xs font-medium text-white tracking-wide uppercase">
                Open to new patients
              </span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.05]">
              #1 WoodStock
              <br/>
              Physiotherapist
            </h1>
<div className="flex flex-col gap-2">
<p className="text-xl text-blue-50 font-medium tracking-tight">
                Physiotherapy to Move Freely and Live Better.
              </p>
<p className="text-base text-blue-100 font-light leading-relaxed max-w-md">
                I help you achieve optimal physical function and wellness.
              </p>
</div>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-6">
<button className="bg-[#FFD672] hover:bg-[#ffe094] text-[#18181b] text-base font-semibold px-8 py-3.5 rounded-lg transition-all shadow-lg hover:-translate-y-0.5">
                Explore our services
              </button>

<div className="flex items-center gap-4">
<div className="flex -space-x-4">
<div className="w-12 h-12 rounded-full border-2 border-[#1864D6] bg-gray-200 bg-[url('https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;w=100&amp;h=100')] bg-cover"></div>
<div className="w-12 h-12 rounded-full border-2 border-[#1864D6] bg-gray-200 bg-[url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;h=100')] bg-cover"></div>
<div className="w-12 h-12 rounded-full border-2 border-[#1864D6] bg-gray-200 bg-[url('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=100&amp;h=100')] bg-cover"></div>
</div>
<div className="flex flex-col gap-0.5">
<div className="flex gap-0.5 text-[#FFD672]">
<svg className="lucide lucide-star" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="lucide lucide-star" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="lucide lucide-star" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="lucide lucide-star" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="lucide lucide-star" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<span className="text-xs text-white font-medium">
                    From 100+ Google Reviews
                  </span>
</div>
</div>
</div>
</div>

<div className="relative h-full flex justify-center lg:justify-end items-center px-4 md:px-0">
<div className="relative w-full max-w-[500px] aspect-[4/4] rounded-[3rem] overflow-hidden shadow-2xl">
<img alt="Certified Physiotherapist" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/30 to-transparent p-10 flex flex-col justify-end h-1/2">
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3">
<svg className="lucide lucide-check text-white" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-white text-lg font-medium tracking-tight">
                      Reduced Pain In days / Weeks
                    </span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-check text-white" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-white text-lg font-medium tracking-tight">
                      Certified Physio
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F0F5FF] px-6 py-28">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-[28%] w-16 text-gray-200">
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>

<div className="hidden md:block absolute top-12 right-[28%] w-16 text-gray-200">
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>

<div className="flex flex-col items-center text-center relative z-10">
<div className="relative mb-8">

<div className="w-24 h-20 bg-[#FFD672] rounded-[2rem] transform -rotate-6"></div>

<div className="absolute inset-0 flex items-center justify-center">
<svg className="lucide lucide-phone text-black" fill="none" height="36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
</div>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">
                Get In Touch
              </h3>
<p className="text-gray-500 font-medium leading-relaxed max-w-xs mx-auto">
                Get In Touch by phone or booking an appointment online
              </p>
</div>

<div className="flex flex-col items-center text-center relative z-10">
<div className="relative mb-8">

<div className="w-24 h-20 bg-[#FFD672] rounded-[40%] transform rotate-3"></div>

<div className="absolute inset-0 flex items-center justify-center">
<svg className="lucide lucide-accessibility text-black" fill="none" height="36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
<circle cx="16" cy="4" r="1"></circle>
<path d="m18 19 1-7-6 1"></path>
<path d="m5 8 3-3 5.5 3-2.36 3.5"></path>
<path d="M4.24 14.5a5 5 0 0 0 6.88 6"></path>
<path d="M13.76 17.5a5 5 0 0 0-6.88-6"></path>
</svg>
</div>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">
                Expert evaluation
              </h3>
<p className="text-gray-500 font-medium leading-relaxed max-w-xs mx-auto">
                Your First Session Darcey Will Diagnose the issues &amp; create
                a plan of action
              </p>
</div>

<div className="flex flex-col items-center text-center relative z-10">
<div className="relative mb-8">

<div className="w-24 h-20 bg-[#FFD672] rounded-[30%] transform -rotate-2"></div>

<div className="absolute inset-0 flex items-center justify-center">
<svg className="lucide lucide-thumbs-up text-black" fill="none" height="36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
<path d="M7 10v12"></path>
<path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
</svg>
</div>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">
                We arrive in 30 minutes
              </h3>
<p className="text-gray-500 font-medium leading-relaxed max-w-xs mx-auto">
                Live life pain free!
              </p>
</div>
</div>
</div>
</section>

<section className="bg-white px-6 py-24">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative w-full h-full min-h-[500px] rounded-[2.5rem] overflow-hidden shadow-lg group cursor-pointer">
<img alt="Physiotherapy Back Treatment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-10 left-10 flex items-center gap-2 text-white group-hover:gap-4 transition-all duration-300">
<span className="text-xl font-medium tracking-tight">
                Learn more about us
              </span>
<svg className="lucide lucide-arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>

<div className="flex flex-col justify-center">
<h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight mb-6">
              Conditions treated
            </h2>
<p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-lg">
              Darcey offers a wide range of services and treatments to help his
              patients recover from injuries, manage chronic conditions, and
              improve their overall health and wellbeing.
            </p>
<ul className="flex flex-col gap-6">

<li className="flex items-center gap-4">
<div className="flex-shrink-0 w-6 h-6 bg-[#1864D6] rounded-full flex items-center justify-center">
<svg className="text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-lg font-semibold text-gray-900">
                  Acute and chronic back pain
                </span>
</li>

<li className="flex items-center gap-4">
<div className="flex-shrink-0 w-6 h-6 bg-[#1864D6] rounded-full flex items-center justify-center">
<svg className="text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-lg font-semibold text-gray-900">
                  Ankle pain
                </span>
</li>

<li className="flex items-center gap-4">
<div className="flex-shrink-0 w-6 h-6 bg-[#1864D6] rounded-full flex items-center justify-center">
<svg className="text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-lg font-semibold text-gray-900">
                  Cervicogenic headaches
                </span>
</li>

<li className="flex items-center gap-4">
<div className="flex-shrink-0 w-6 h-6 bg-[#1864D6] rounded-full flex items-center justify-center">
<svg className="text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-lg font-semibold text-gray-900">
                  Elbow pain
                </span>
</li>

<li className="flex items-center gap-4">
<div className="flex-shrink-0 w-6 h-6 bg-[#1864D6] rounded-full flex items-center justify-center">
<svg className="text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-lg font-semibold text-gray-900">
                  Mechanical neck pain
                </span>
</li>

<li className="flex items-center gap-4">
<div className="flex-shrink-0 w-6 h-6 bg-[#1864D6] rounded-full flex items-center justify-center">
<svg className="text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-lg font-semibold text-gray-900">
                  Muscle spasm and cramp
                </span>
</li>
</ul>
</div>
</div>
</section>

<section className="bg-[#1864D6] px-6 py-24">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
              Our services
            </h2>
<p className="text-lg text-blue-100/80 font-normal leading-relaxed">
              We offer a comprehensive range of physiotherapy services designed
              to address all your recovery and performance needs.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-[#1557bd] rounded-2xl p-8 hover:bg-[#1c60ca] transition-colors duration-300 group border border-white/5">
<div className="mb-6">
<svg className="lucide lucide-syringe w-8 h-8 text-white/90" data-lucide="syringe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m18 2 4 4"></path>
<path d="m17 7 3-3"></path>
<path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"></path>
<path d="m9 11 4 4"></path>
<path d="m5 19-3 3"></path>
<path d="m14 4 6 6"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                Acupuncture
              </h3>
<p className="text-sm text-blue-100/70 leading-relaxed">
                Targeted needling techniques to relieve pain and promote healing
                in affected muscle tissues.
              </p>
</div>

<div className="bg-[#1557bd] rounded-2xl p-8 hover:bg-[#1c60ca] transition-colors duration-300 group border border-white/5">
<div className="mb-6">
<svg className="lucide lucide-building-2 w-8 h-8 text-white/90" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 12h4"></path>
<path d="M10 8h4"></path>
<path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
<path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
<path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                Corporate office services
              </h3>
<p className="text-sm text-blue-100/70 leading-relaxed">
                Office Pop-up Physio &amp; Sports Massage drop-in clinics to
                improve workplace wellness.
              </p>
</div>

<div className="bg-[#1557bd] rounded-2xl p-8 hover:bg-[#1c60ca] transition-colors duration-300 group border border-white/5">
<div className="mb-6">
<svg className="lucide lucide-home w-8 h-8 text-white/90" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
<path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                Home visit physiotherapy
              </h3>
<p className="text-sm text-blue-100/70 leading-relaxed">
                As a specialist physiotherapist I can provide home based
                assessments and treatments.
              </p>
</div>

<div className="bg-[#1557bd] rounded-2xl p-8 hover:bg-[#1c60ca] transition-colors duration-300 group border border-white/5">
<div className="mb-6">
<svg className="lucide lucide-person-standing w-8 h-8 text-white/90" data-lucide="person-standing" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="5" r="1"></circle>
<path d="m9 20 3-6 3 6"></path>
<path d="m6 8 6 2 6-2"></path>
<path d="M12 10v4"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                Massage and sports massage
              </h3>
<p className="text-sm text-blue-100/70 leading-relaxed">
                Sports massage is a form of massage involving the manipulation
                of soft tissue to relieve exercise-related pain.
              </p>
</div>

<div className="bg-[#1557bd] rounded-2xl p-8 hover:bg-[#1c60ca] transition-colors duration-300 group border border-white/5">
<div className="mb-6">
<svg className="lucide lucide-hospital w-8 h-8 text-white/90" data-lucide="hospital" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 7v4"></path>
<path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
<path d="M14 9h-4"></path>
<path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"></path>
<path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                Post surgical rehabilitation
              </h3>
<p className="text-sm text-blue-100/70 leading-relaxed">
                Following surgery, you may find yourself struggling physically
                and psychologically. We are here to help.
              </p>
</div>

<div className="bg-[#1557bd] rounded-2xl p-8 hover:bg-[#1c60ca] transition-colors duration-300 group border border-white/5">
<div className="mb-6">
<svg className="lucide lucide-laptop w-8 h-8 text-white/90" data-lucide="laptop" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"></path>
<path d="M20.054 15.987H3.946"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                Remote physiotherapy
              </h3>
<p className="text-sm text-blue-100/70 leading-relaxed">
                Video Calling and Conferencing consultations available for those
                who cannot visit in person.
              </p>
</div>

<div className="bg-[#1557bd] rounded-2xl p-8 hover:bg-[#1c60ca] transition-colors duration-300 group border border-white/5">
<div className="mb-6">
<svg className="lucide lucide-trophy w-8 h-8 text-white/90" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path>
<path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path>
<path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path>
<path d="M4 22h16"></path>
<path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path>
<path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                Return to sport
              </h3>
<p className="text-sm text-blue-100/70 leading-relaxed">
                Performance enhancement strategies to get you back to top
                performance safely and effectively.
              </p>
</div>

<div className="bg-[#1557bd] rounded-2xl p-8 hover:bg-[#1c60ca] transition-colors duration-300 group border border-white/5">
<div className="mb-6">
<svg className="lucide lucide-zap w-8 h-8 text-white/90" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                Shockwave therapy
              </h3>
<p className="text-sm text-blue-100/70 leading-relaxed">
                Evidence based treatment modality particularly effective for
                chronic tendon conditions.
              </p>
</div>

<div className="bg-[#1557bd] rounded-2xl p-8 hover:bg-[#1c60ca] transition-colors duration-300 group border border-white/5">
<div className="mb-6">
<svg className="lucide lucide-dumbbell w-8 h-8 text-white/90" data-lucide="dumbbell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"></path>
<path d="m2.5 21.5 1.4-1.4"></path>
<path d="m20.1 3.9 1.4-1.4"></path>
<path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"></path>
<path d="m9.6 14.4 4.8-4.8"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                Strength and Conditioning
              </h3>
<p className="text-sm text-blue-100/70 leading-relaxed">
                Critical for physical fitness and athletic performance, tailored
                to your specific sport.
              </p>
</div>
</div>
<div className="mt-20 flex flex-col items-center justify-center">
<h3 className="text-2xl font-semibold text-white mb-6 tracking-tight">
              Have an emergency?
            </h3>
<button className="bg-[#FFD672] hover:bg-[#ffe094] text-[#1864D6] text-base font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
              Contact Us
            </button>
</div>
</div>
</section>

<section className="bg-white px-6 py-24">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

<div className="lg:col-span-4">
<h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight mb-6 leading-[1.1]">
              Your questions, answered
            </h2>
<p className="text-lg text-gray-500 leading-relaxed mb-8">
              Answers to the most common questions our customers have. If you
              don't find the information you're looking for, feel free to
              contact us.
            </p>
<button className="bg-[#FFD672] hover:bg-[#ffe094] text-[#1864D6] text-base font-semibold px-8 py-3.5 rounded-xl transition-all shadow-sm hover:shadow-md">
              Contact Us
            </button>
</div>

<div className="lg:col-span-8 flex flex-col gap-4">

<div className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm">
<div className="flex items-start justify-between cursor-pointer mb-4">
<span className="text-lg font-semibold text-gray-900 tracking-tight">
                  What should I wear?
                </span>
<svg className="lucide lucide-arrow-down w-5 h-5 text-gray-400" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="m19 12-7 7-7-7"></path>
</svg>
</div>
<p className="text-base text-gray-500 leading-relaxed">
                If your lower limb is being treated then please wear clothing
                that allows the practitioner to access the injured site, such as
                shorts. For upper body issues, a loose fitting t-shirt is
                recommended.
              </p>
</div>

<div className="border border-gray-200 rounded-2xl p-6 bg-white hover:bg-gray-50 transition-colors cursor-pointer group">
<div className="flex items-center justify-between">
<span className="text-lg font-medium text-gray-900 tracking-tight group-hover:text-[#1864D6] transition-colors">
                  What types of conditions do you treat?
                </span>
<svg className="lucide lucide-arrow-right w-5 h-5 text-gray-400 group-hover:text-[#1864D6] transition-colors" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>

<div className="border border-gray-200 rounded-2xl p-6 bg-white hover:bg-gray-50 transition-colors cursor-pointer group">
<div className="flex items-center justify-between">
<span className="text-lg font-medium text-gray-900 tracking-tight group-hover:text-[#1864D6] transition-colors">
                  What age range of patients do you treat?
                </span>
<svg className="lucide lucide-arrow-right w-5 h-5 text-gray-400 group-hover:text-[#1864D6] transition-colors" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>

<div className="border border-gray-200 rounded-2xl p-6 bg-white hover:bg-gray-50 transition-colors cursor-pointer group">
<div className="flex items-center justify-between">
<span className="text-lg font-medium text-gray-900 tracking-tight group-hover:text-[#1864D6] transition-colors">
                  Do you offer financing options?
                </span>
<svg className="lucide lucide-arrow-right w-5 h-5 text-gray-400 group-hover:text-[#1864D6] transition-colors" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>

<div className="border border-gray-200 rounded-2xl p-6 bg-white hover:bg-gray-50 transition-colors cursor-pointer group">
<div className="flex items-center justify-between">
<span className="text-lg font-medium text-gray-900 tracking-tight group-hover:text-[#1864D6] transition-colors">
                  Is there car parking at the clinic location?
                </span>
<svg className="lucide lucide-arrow-right w-5 h-5 text-gray-400 group-hover:text-[#1864D6] transition-colors" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>

<div className="border border-gray-200 rounded-2xl p-6 bg-white hover:bg-gray-50 transition-colors cursor-pointer group">
<div className="flex items-center justify-between">
<span className="text-lg font-medium text-gray-900 tracking-tight group-hover:text-[#1864D6] transition-colors">
                  What types of payment do you accept?
                </span>
<svg className="lucide lucide-arrow-right w-5 h-5 text-gray-400 group-hover:text-[#1864D6] transition-colors" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>

<div className="border border-gray-200 rounded-2xl p-6 bg-white hover:bg-gray-50 transition-colors cursor-pointer group">
<div className="flex items-center justify-between">
<span className="text-lg font-medium text-gray-900 tracking-tight group-hover:text-[#1864D6] transition-colors">
                  What if I need to cancel my appointment?
                </span>
<svg className="lucide lucide-arrow-right w-5 h-5 text-gray-400 group-hover:text-[#1864D6] transition-colors" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#1864D6] px-6 py-24 text-center relative overflow-hidden border-t border-white/10">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="max-w-3xl mx-auto relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            Ready to move freely?
          </h2>
<p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
            Book your appointment today and take the first step towards a
            pain-free life with Woodstock Physio.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-[#FFD672] hover:bg-[#ffe094] text-[#1864D6] text-lg font-semibold px-8 py-4 rounded-xl transition-all shadow-lg">
              Book Appointment
            </button>
<button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white text-lg font-medium px-8 py-4 rounded-xl transition-all backdrop-blur-sm">
              Contact Us
            </button>
</div>
</div>
</section>
</main>
<footer className="bg-gray-50 border-t border-gray-200 px-6 py-12">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-[#1864D6] rounded-md flex items-center justify-center">
<svg className="lucide lucide-activity w-5 h-5 text-white" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
</svg>
</div>
<span className="text-lg font-semibold text-gray-900 tracking-tight">
            Woodstock Physio
          </span>
</div>
<div className="text-gray-500 text-sm">
          © 2024 Woodstock Physiotherapy. All rights reserved.
        </div>
<div className="flex gap-6">
<a className="text-gray-400 hover:text-[#1864D6] transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="text-gray-400 hover:text-[#1864D6] transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="text-gray-400 hover:text-[#1864D6] transition-colors" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>
</footer>


    </>
  );
}
