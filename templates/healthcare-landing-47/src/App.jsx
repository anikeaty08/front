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



    // Initialize Lucide Icons
    lucide.createIcons();

    // Scroll Reveal Animation Initialization
    document.addEventListener("DOMContentLoaded", () => {
        const revealElements = document.querySelectorAll('.reveal-up');
        
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Stop observing once revealed
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

<div className="flex-shrink-0">
<a className="flex items-center gap-1 text-xl font-medium text-gray-900 tracking-tight" href="#">
                Erdem Health <span className="text-gray-300">_</span>
</a>
</div>

<div className="hidden md:flex gap-x-10 gap-y-10 items-center">
<a className="hover:text-gray-900 transition-colors duration-200 text-base text-gray-500" href="#">Medical Units</a>
<a className="hover:text-gray-900 transition-colors duration-200 text-base text-gray-500" href="#">About Us</a>
<a className="hover:text-gray-900 transition-colors duration-200 text-base text-gray-500" href="#">Hospitals</a>
<a className="hover:text-gray-900 transition-colors duration-200 text-base text-gray-500" href="#">Medical Team</a>
</div>

<div className="flex items-center gap-6">
<button className="text-gray-500 hover:text-gray-900 transition-colors flex items-center justify-center">
<iconify-icon className="" height="24" icon="solar:magnifer-linear" width="24"></iconify-icon>
</button>
<div className="relative flex items-center justify-center">
<button className="text-gray-500 hover:text-gray-900 transition-colors flex items-center justify-center">
<iconify-icon height="24" icon="solar:calendar-linear" width="24"></iconify-icon>
</button>
<span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-white text-gray-900 border border-gray-200 text-[10px] font-medium">
                    0
                </span>
</div>
</div>
</div>
</nav>

<section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 pb-16">
<div className="relative w-full rounded-[3rem] h-auto min-h-[700px] overflow-hidden bg-gradient-to-br from-[#E6F8F6] via-[#F0F9FB] to-[#EBF3FA] ring-1 ring-gray-900/5">
<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-[-20%] left-[20%] w-[800px] h-[800px] rounded-full bg-gradient-to-b from-[#BEE9E8]/30 via-[#9ED9F5]/20 to-transparent blur-[120px] animate-float-slow"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[#A9E3EA]/40 via-[#CBE7F5]/30 to-transparent blur-[100px] animate-float-medium"></div>
</div>
<div className="absolute top-8 right-8 z-20 hidden md:block">
<a className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md hover:bg-white/80 text-gray-900 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-sm border border-white/40" href="#">
                Patient Portal
                <iconify-icon className="text-gray-500" height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
<div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-between p-10 lg:p-20 lg:pt-24 gap-16">
<div className="w-full lg:w-1/2 max-w-2xl">
<div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md rounded-full px-4 py-2 mb-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-white/50">
<iconify-icon className="text-blue-500" height="16" icon="solar:heart-angle-linear" width="16"></iconify-icon>
<span className="text-sm font-medium text-gray-700">Trusted Healthcare Provider</span>
</div>
<h1 className="text-6xl lg:text-7xl leading-[1.05] font-medium tracking-tight text-gray-900 mb-8">
                    Find the <br/>
<span className="text-[#2F6DF2]">Right Doctor.</span> <br/>
                    Book with <br/>
                    Confidence.
                </h1>
<p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-lg font-normal">
                    Connect with experienced specialists across Erdem Health Group hospitals and schedule your appointment in minutes.
                </p>
<a className="inline-flex items-center gap-3 hover:shadow-md transition-all duration-300 group text-lg font-medium text-gray-900 bg-white border-gray-100 border rounded-full pt-3.5 pr-6 pb-3.5 pl-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)]" href="#">
                    Find a Doctor
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:bg-gray-100 transition-colors">
<iconify-icon className="text-gray-600" height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</a>
</div>
<div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
<div className="relative w-full max-w-[420px] mt-10 lg:mt-0 animate-float-card">
<div className="absolute inset-0 bg-[#A6E6DD] rounded-[2.5rem] transform rotate-[-4deg] translate-x-5 translate-y-3 opacity-90 shadow-inner"></div>
<div className="relative bg-white/95 backdrop-blur-2xl rounded-[2.5rem] border border-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col">
<div className="flex items-center justify-between px-6 py-4 border-b border-gray-100/50 bg-white/50">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
<div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
<div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
</div>
<div className="flex items-center gap-1.5 bg-gray-50/80 px-4 py-1.5 rounded-full border border-gray-100/50">
<iconify-icon className="text-gray-400" height="12" icon="solar:lock-linear" width="12"></iconify-icon>
<span className="text-xs font-medium text-gray-500">erdem.health</span>
</div>
<div className="w-12"></div>
</div>
<div className="p-6 pb-8 flex flex-col gap-6">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
<img alt="Dr. Sarah Miller" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
<span className="text-[10px] font-medium text-gray-900 tracking-wider uppercase">Available</span>
</div>
</div>
<div className="flex justify-between items-center px-1">
<h3 className="text-2xl font-medium tracking-tight text-gray-900">Dr. Sarah Miller</h3>
<div className="bg-blue-50/80 text-[#2F6DF2] px-3 py-1.5 rounded-lg border border-blue-100/50">
<span className="text-sm font-medium">Next: 10:00 AM</span>
</div>
</div>
<button className="w-full bg-black text-white rounded-2xl py-4 flex items-center justify-center gap-2 mt-4 hover:bg-gray-800 transition-colors">
<span className="text-base font-medium">Book Appointment</span>
<iconify-icon className="text-white/80" height="16" icon="solar:calendar-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="absolute bottom-24 -left-16 z-20 bg-white/95 backdrop-blur-xl p-4 pr-6 rounded-2xl shadow-[0_12px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100 flex items-center gap-4 animate-float-card-reverse">
<div className="w-10 h-10 rounded-full bg-[#ECFDF5] flex items-center justify-center text-[#10B981] border border-[#A7F3D0]/50">
<iconify-icon height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Appointment Confirmed</span>
<span className="text-xs text-gray-500 mt-0.5">Tomorrow at 10:00 AM</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 pb-16 sm:pb-24 relative overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-x-12 gap-y-12 items-center">

<div className="relative w-full rounded-[3rem] bg-gradient-to-br from-[#E6F8F6] via-[#F0F9FB] to-[#EBF3FA] ring-1 ring-gray-900/5 p-4 lg:p-6 reveal-up">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-[#A9E3EA]/40 to-transparent blur-[80px] animate-float-slow"></div>
</div>
<div className="relative rounded-[2.5rem] overflow-hidden bg-white/50 aspect-square lg:aspect-[4/5] shadow-[0_8px_30px_rgba(0,0,0,0.04)] ring-1 ring-white/60">
<img alt="Modern Hospital Environment" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>

<div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-64 bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.15)] border border-white flex items-center gap-4 animate-float-card">
<div className="w-12 h-12 rounded-full bg-blue-50/80 flex items-center justify-center text-[#2F6DF2] border border-blue-100/50">
<iconify-icon height="24" icon="solar:shield-star-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xl font-medium text-gray-900 tracking-tight">25+ Years</p>
<p className="text-sm text-gray-500 font-normal mt-0.5">Of Medical Excellence</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col justify-center">
<div className="reveal-up delay-100">
<div className="inline-flex items-center gap-2 bg-blue-50/80 text-[#2F6DF2] rounded-full px-4 py-2 mb-6 border border-blue-100/50">
<iconify-icon height="16" icon="solar:info-circle-linear" width="16"></iconify-icon>
<span className="text-sm font-medium tracking-wide">About Erdem Health</span>
</div>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-gray-900 mb-6 leading-[1.15]">
                    Redefining healthcare with <span className="text-[#2F6DF2]">expertise and compassion.</span>
</h2>
<p className="text-lg text-gray-600 leading-relaxed mb-10 font-normal max-w-xl">
                    Since our establishment, Erdem Health Group has been committed to delivering world-class medical services. With our state-of-the-art facilities and a multidisciplinary team of globally recognized specialists, we prioritize your well-being above all else.
                </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">

<div className="hover:shadow-md hover:-translate-y-1 transition-all duration-300 reveal-up delay-200 group bg-white/80 border-gray-100 border rounded-[1.25rem] pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-md">
<div className="w-10 h-10 rounded-xl bg-blue-50/80 text-[#2F6DF2] flex items-center justify-center border border-blue-100/50 mb-4 group-hover:bg-[#2F6DF2] group-hover:text-white transition-colors duration-300">
<iconify-icon className="" height="22" icon="solar:user-rounded-linear" width="22"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-gray-900">Experienced Doctors</h3>
<p className="text-sm text-gray-500 mt-1.5 font-normal leading-relaxed">Highly qualified specialists across diverse medical disciplines.</p>
</div>

<div className="bg-white/80 backdrop-blur-md rounded-[1.25rem] p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 reveal-up delay-300 group">
<div className="w-10 h-10 rounded-xl bg-teal-50/80 text-[#0D9488] flex items-center justify-center border border-teal-100/50 mb-4 group-hover:bg-[#0D9488] group-hover:text-white transition-colors duration-300">
<iconify-icon height="22" icon="solar:pulse-2-linear" width="22"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-gray-900">Advanced Technology</h3>
<p className="text-sm text-gray-500 mt-1.5 font-normal leading-relaxed">State-of-the-art diagnostic and surgical equipment.</p>
</div>

<div className="bg-white/80 backdrop-blur-md rounded-[1.25rem] p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 reveal-up delay-400 group">
<div className="w-10 h-10 rounded-xl bg-blue-50/80 text-[#2F6DF2] flex items-center justify-center border border-blue-100/50 mb-4 group-hover:bg-[#2F6DF2] group-hover:text-white transition-colors duration-300">
<iconify-icon height="22" icon="solar:global-linear" width="22"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-gray-900">International Patients</h3>
<p className="text-sm text-gray-500 mt-1.5 font-normal leading-relaxed">Comprehensive support for medical tourists worldwide.</p>
</div>

<div className="bg-white/80 backdrop-blur-md rounded-[1.25rem] p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 reveal-up delay-500 group">
<div className="w-10 h-10 rounded-xl bg-teal-50/80 text-[#0D9488] flex items-center justify-center border border-teal-100/50 mb-4 group-hover:bg-[#0D9488] group-hover:text-white transition-colors duration-300">
<iconify-icon height="22" icon="solar:phone-calling-linear" width="22"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-gray-900">24/7 Patient Support</h3>
<p className="text-sm text-gray-500 mt-1.5 font-normal leading-relaxed">Continuous patient care and multilingual assistance.</p>
</div>
</div>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 sm:mt-16 z-10 max-w-[90rem] mt-12 mr-auto ml-auto pr-4 pl-4 relative">
<div className="grid lg:grid-cols-12 gap-12 lg:px-12 pt-20 pr-6 pb-20 pl-6 gap-x-12 gap-y-12 m-8 max-w-6xl my-20 mx-auto">

<div className="lg:col-span-7 overflow-hidden space-y-12">
<p className="lg:text-3xl leading-snug text-2xl font-light text-neutral-800 tracking-tight max-w-3xl">We connect patients with trusted doctors, making it easy to find specialists, book appointments, and manage your health in one place.</p>
<div className="w-full mask-gradient no-scrollbar" style={{overflowX: 'auto', overflowY: 'hidden'}}>
<div className="flex gap-6 w-[200%] gap-x-6 gap-y-6 items-stretch">

<div className="flex w-1/2 pr-6 gap-x-6 gap-y-6 items-stretch" style={{flexWrap: 'nowrap'}}>

<div className="flex-1 min-w-[240px] shrink-0 bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm flex flex-col h-64 group hover:border-blue-200 transition-colors duration-300">
<div className="flex group-hover:bg-blue-50 group-hover:text-[#2F6DF2] transition-colors duration-300 text-neutral-600 bg-neutral-50 w-10 h-10 rounded-lg mb-0 items-center justify-center">
<svg className="w-5 h-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"></path>
<path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path>
<circle cx="20" cy="10" r="2"></circle>
</svg>
</div>
<h4 className="text-base font-semibold text-neutral-900 leading-tight mt-6 mb-2">Find the Right Doctor</h4>
<p className="text-sm text-neutral-500 mb-4 line-clamp-2">Connect with specialized doctors across all medical departments.</p>
<div className="mt-auto w-full">
<button className="group shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden font-medium text-white bg-gradient-to-r from-[#4B83F4] to-[#2F6DF2] rounded-lg py-2.5 px-4 relative shadow-lg w-full text-sm" style={{boxShadow: '0 15px 33px -12px rgba(47, 109, 242, 0.6), inset 0 4px 6.3px rgba(106, 155, 246, 1), inset 0 -5px 6.3px rgba(29,78,216,1)'}}>
<div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute inset-0 translate-y-full"></div>
<span className="relative flex items-center justify-center gap-2">
            Learn More
            <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
</div>
</div>

<div className="flex-1 min-w-[260px] shrink-0 shadow-blue-100/50 flex flex-col bg-gradient-to-b from-white to-blue-50/50 h-64 border-blue-200 border rounded-2xl ring-blue-100 ring-1 pt-6 pr-6 pb-6 pl-6 shadow-lg group hover:border-blue-300 transition-colors duration-300">
<div className="flex group-hover:bg-blue-50 group-hover:text-[#2F6DF2] transition-colors duration-300 text-[#2F6DF2] bg-blue-50/80 w-10 h-10 rounded-lg mb-0 items-center justify-center border border-blue-100/50">
<svg className="w-5 h-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
</div>
<h4 className="text-base font-semibold text-[#1e3a8a] leading-tight mt-6 mb-2">Easy Appointment Booking</h4>
<p className="text-sm text-neutral-500 mb-4 line-clamp-2">Schedule and manage your hospital visits instantly online.</p>
<div className="mt-auto w-full">
<button className="group shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden font-medium text-white bg-gradient-to-r from-[#4B83F4] to-[#2F6DF2] rounded-lg py-2.5 px-4 relative shadow-lg w-full text-sm" style={{boxShadow: '0 15px 33px -12px rgba(47, 109, 242, 0.6), inset 0 4px 6.3px rgba(106, 155, 246, 1), inset 0 -5px 6.3px rgba(29,78,216,1)'}}>
<div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute inset-0 translate-y-full"></div>
<span className="relative flex items-center justify-center gap-2">
            Book Now
            <svg className="lucide lucide-calendar-check w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line><path d="m9 16 2 2 4-4"></path></svg>
</span>
</button>
</div>
</div>

<div className="flex-1 min-w-[240px] shrink-0 flex flex-col group hover:border-blue-200 transition-colors duration-300 bg-white h-64 border-neutral-200 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="flex group-hover:bg-blue-50 group-hover:text-[#2F6DF2] transition-colors duration-300 text-neutral-600 bg-neutral-50 w-10 h-10 rounded-lg mb-0 items-center justify-center">
<svg className="w-5 h-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
<line x1="16" x2="8" y1="13" y2="13"></line>
<line x1="16" x2="8" y1="17" y2="17"></line>
<line x1="10" x2="8" y1="9" y2="9"></line>
</svg>
</div>
<h4 className="text-base font-semibold text-neutral-900 leading-tight mt-6 mb-2">Digital Health Records</h4>
<p className="text-sm text-neutral-500 mb-4 line-clamp-2">Access your test results and health history securely.</p>
<div className="mt-auto w-full">
<button className="group shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden font-medium text-white bg-gradient-to-r from-[#4B83F4] to-[#2F6DF2] rounded-lg py-2.5 px-4 relative shadow-lg w-full text-sm" style={{boxShadow: '0 15px 33px -12px rgba(47, 109, 242, 0.6), inset 0 4px 6.3px rgba(106, 155, 246, 1), inset 0 -5px 6.3px rgba(29,78,216,1)'}}>
<div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute inset-0 translate-y-full"></div>
<span className="relative flex items-center justify-center gap-2">
            View Portal
            <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
</div>
</div>
</div>

</div>
</div>
</div>

<div className="lg:col-span-5 grid grid-cols-2 gap-x-8 gap-y-12 content-center">
<div className="">
<h3 className="text-5xl font-normal text-neutral-900 tracking-tighter mb-2">3</h3>
<p className="leading-snug text-sm text-neutral-500">Hospitals</p>
</div>
<div className="">
<h3 className="text-5xl font-normal text-neutral-900 tracking-tighter mb-2">185+</h3>
<p className="leading-snug text-sm text-neutral-500">Qualified Doctors</p>
</div>
<div className="">
<h3 className="text-5xl font-normal text-neutral-900 tracking-tighter mb-2">250+</h3>
<p className="leading-snug text-sm text-neutral-500">Clinic Rooms</p>
</div>
<div className="">
<h3 className="text-5xl font-normal text-neutral-900 tracking-tighter mb-2">83.000+</h3>
<p className="leading-snug text-sm text-neutral-500">Happy Patients</p>
</div>
</div>
</div>
</section>

<section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 pb-24 relative overflow-hidden">

<div className="text-center max-w-2xl mx-auto mb-16 reveal-up">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-gray-900 mb-6">Medical Units</h2>
<p className="text-lg text-gray-600 font-normal">Explore our specialized departments through an interactive anatomical overview powered by advanced medical diagnostics.</p>
</div>

<div className="overflow-hidden flex reveal-up delay-100 bg-gradient-to-br from-[#E6F8F6] via-[#F0F9FB] to-[#EBF3FA] w-full h-[900px] rounded-[3rem] ring-gray-900/5 ring-1 pt-8 pr-8 pb-8 pl-8 relative items-center justify-center">

<div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-[#2F6DF2]/10 via-[#A6E6DD]/10 to-transparent blur-[100px]"></div>
</div>

<div className="relative w-full max-w-6xl h-full hidden lg:block z-10">

<svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
<defs>
<lineargradient id="line-glow-left" x1="100%" x2="0%" y1="0%" y2="0%">
<stop offset="0%" stop-color="rgba(47, 109, 242, 0.5)"></stop>
<stop offset="100%" stop-color="rgba(166, 230, 221, 0.1)"></stop>
</lineargradient>
<lineargradient id="line-glow-right" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="rgba(47, 109, 242, 0.5)"></stop>
<stop offset="100%" stop-color="rgba(166, 230, 221, 0.1)"></stop>
</lineargradient>
</defs>

<line className="animate-flow" stroke="url(#line-glow-left)" strokeWidth="1.5" x1="50%" x2="22%" y1="18%" y2="18%"></line>
<line className="animate-flow" stroke="url(#line-glow-left)" strokeWidth="1.5" x1="48.5%" x2="22%" y1="21%" y2="30%"></line>
<line className="animate-flow" stroke="url(#line-glow-left)" strokeWidth="1.5" x1="46%" x2="22%" y1="45%" y2="50%"></line>
<line className="animate-flow" stroke="url(#line-glow-left)" strokeWidth="1.5" x1="50%" x2="22%" y1="52%" y2="70%"></line>

<line className="animate-flow" stroke="url(#line-glow-right)" strokeWidth="1.5" x1="50%" x2="78%" y1="24%" y2="24%"></line>
<line className="animate-flow" stroke="url(#line-glow-right)" strokeWidth="1.5" x1="52%" x2="78%" y1="36%" y2="38%"></line>
<line className="animate-flow" stroke="url(#line-glow-right)" strokeWidth="1.5" x1="50%" x2="78%" y1="60%" y2="60%"></line>
<line className="animate-flow" stroke="url(#line-glow-right)" strokeWidth="1.5" x1="53%" x2="78%" y1="72%" y2="80%"></line>
</svg>

<div className="absolute inset-0 flex justify-center items-center pointer-events-none z-20">

<div className="absolute top-[85%] left-1/2 -translate-x-1/2 w-[280px] h-[24px] rounded-[100%] bg-[#2F6DF2]/10 blur-md animate-float-shadow z-0 border border-[#2F6DF2]/10 shadow-[0_0_30px_rgba(47,109,242,0.15)]"></div>

<div className="relative h-[75%] aspect-[1/2] animate-float-card z-10 flex justify-center">
<img alt="Medical Skeleton Illustration" className="h-full w-auto object-contain animate-spin-slow-y opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/02743bea-aecf-4cbe-a721-f3bd8d720e2d_3840w.png" style={{filter: 'drop-shadow(0 12px 20px rgba(47,109,242,0.15))'}}/>
</div>
</div>

<div className="absolute top-[18%] left-[50%] z-30 animate-pulse-node w-2.5 h-2.5 rounded-full bg-white border-[1.5px] border-[#2F6DF2]"></div>
<div className="absolute top-[21%] left-[48.5%] z-30 animate-pulse-node w-2.5 h-2.5 rounded-full bg-white border-[1.5px] border-[#2F6DF2]" style={{animationDelay: '0.2s'}}></div>
<div className="absolute top-[24%] left-[50%] z-30 animate-pulse-node w-2.5 h-2.5 rounded-full bg-white border-[1.5px] border-[#2F6DF2]" style={{animationDelay: '0.3s'}}></div>
<div className="absolute top-[36%] left-[52%] z-30 animate-pulse-node w-2.5 h-2.5 rounded-full bg-white border-[1.5px] border-[#2F6DF2]" style={{animationDelay: '0.5s'}}></div>
<div className="absolute top-[45%] left-[46%] z-30 animate-pulse-node w-2.5 h-2.5 rounded-full bg-white border-[1.5px] border-[#2F6DF2]" style={{animationDelay: '0.4s'}}></div>
<div className="absolute top-[52%] left-[50%] z-30 animate-pulse-node w-2.5 h-2.5 rounded-full bg-white border-[1.5px] border-[#2F6DF2]" style={{animationDelay: '0.6s'}}></div>
<div className="absolute top-[60%] left-[50%] z-30 animate-pulse-node w-2.5 h-2.5 rounded-full bg-white border-[1.5px] border-[#2F6DF2]" style={{animationDelay: '0.7s'}}></div>
<div className="absolute top-[72%] left-[53%] z-30 animate-pulse-node w-2.5 h-2.5 rounded-full bg-white border-[1.5px] border-[#2F6DF2]" style={{animationDelay: '0.9s'}}></div>


<div className="absolute top-[18%] left-[22%] -translate-y-1/2 -translate-x-full pr-4 z-40 group cursor-pointer hover:scale-105 transition-transform origin-right">
<div className="flex items-center gap-3 bg-white/70 backdrop-blur-xl rounded-[1.25rem] p-2 pr-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-white/60">
<div className="w-10 h-10 rounded-xl bg-blue-50/80 text-[#2F6DF2] flex items-center justify-center border border-blue-100/50">
<iconify-icon height="20" icon="solar:scissors-linear" width="20"></iconify-icon>
</div>
<span className="text-base font-medium text-gray-900 tracking-tight whitespace-nowrap">Hair Transplant</span>
</div>
</div>
<div className="absolute top-[30%] left-[22%] -translate-y-1/2 -translate-x-full pr-4 z-40 group cursor-pointer hover:scale-105 transition-transform origin-right">
<div className="flex items-center gap-3 bg-white/70 backdrop-blur-xl rounded-[1.25rem] p-2 pr-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-white/60">
<div className="w-10 h-10 rounded-xl bg-blue-50/80 text-[#2F6DF2] flex items-center justify-center border border-blue-100/50">
<iconify-icon height="20" icon="solar:eye-linear" width="20"></iconify-icon>
</div>
<span className="text-base font-medium text-gray-900 tracking-tight whitespace-nowrap">Laser Eye</span>
</div>
</div>
<div className="absolute top-[50%] left-[22%] -translate-y-1/2 -translate-x-full pr-4 z-40 group cursor-pointer hover:scale-105 transition-transform origin-right">
<div className="flex items-center gap-3 bg-white/70 backdrop-blur-xl rounded-[1.25rem] p-2 pr-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-white/60">
<div className="w-10 h-10 rounded-xl bg-blue-50/80 text-[#2F6DF2] flex items-center justify-center border border-blue-100/50">
<iconify-icon height="20" icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</div>
<span className="text-base font-medium text-gray-900 tracking-tight whitespace-nowrap">Plastic Surgery</span>
</div>
</div>
<div className="absolute top-[70%] left-[22%] -translate-y-1/2 -translate-x-full pr-4 z-40 group cursor-pointer hover:scale-105 transition-transform origin-right">
<div className="flex items-center gap-3 bg-white/70 backdrop-blur-xl rounded-[1.25rem] p-2 pr-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-white/60">
<div className="w-10 h-10 rounded-xl bg-blue-50/80 text-[#2F6DF2] flex items-center justify-center border border-blue-100/50">
<iconify-icon height="20" icon="solar:ruler-linear" width="20"></iconify-icon>
</div>
<span className="text-base font-medium text-gray-900 tracking-tight whitespace-nowrap">Bariatric Surgery</span>
</div>
</div>

<div className="absolute top-[24%] left-[78%] -translate-y-1/2 pl-4 z-40 group cursor-pointer hover:scale-105 transition-transform origin-left">
<div className="flex items-center gap-3 bg-white/70 backdrop-blur-xl rounded-[1.25rem] p-2 pr-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-white/60">
<div className="w-10 h-10 rounded-xl bg-blue-50/80 text-[#2F6DF2] flex items-center justify-center border border-blue-100/50">
<iconify-icon height="20" icon="solar:smile-circle-linear" width="20"></iconify-icon>
</div>
<span className="text-base font-medium text-gray-900 tracking-tight whitespace-nowrap">Dental Treatment</span>
</div>
</div>
<div className="absolute top-[38%] left-[78%] -translate-y-1/2 pl-4 z-40 group cursor-pointer hover:scale-105 transition-transform origin-left">
<div className="flex items-center gap-3 bg-white/70 backdrop-blur-xl rounded-[1.25rem] p-2 pr-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-white/60">
<div className="w-10 h-10 rounded-xl bg-blue-50/80 text-[#2F6DF2] flex items-center justify-center border border-blue-100/50">
<iconify-icon height="20" icon="solar:cardiogram-linear" width="20"></iconify-icon>
</div>
<span className="text-base font-medium text-gray-900 tracking-tight whitespace-nowrap">Cardiovascular Surgery</span>
</div>
</div>
<div className="absolute top-[60%] left-[78%] -translate-y-1/2 pl-4 z-40 group cursor-pointer hover:scale-105 transition-transform origin-left">
<div className="flex items-center gap-3 bg-white/70 backdrop-blur-xl rounded-[1.25rem] p-2 pr-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-white/60">
<div className="w-10 h-10 rounded-xl bg-blue-50/80 text-[#2F6DF2] flex items-center justify-center border border-blue-100/50">
<iconify-icon height="20" icon="solar:waterdrops-linear" width="20"></iconify-icon>
</div>
<span className="text-base font-medium text-gray-900 tracking-tight whitespace-nowrap">Urology</span>
</div>
</div>
<div className="absolute top-[80%] left-[78%] -translate-y-1/2 pl-4 z-40 group cursor-pointer hover:scale-105 transition-transform origin-left">
<div className="flex items-center gap-3 bg-white/70 backdrop-blur-xl rounded-[1.25rem] p-2 pr-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-white/60">
<div className="w-10 h-10 rounded-xl bg-blue-50/80 text-[#2F6DF2] flex items-center justify-center border border-blue-100/50">
<iconify-icon height="20" icon="solar:bone-linear" width="20"></iconify-icon>
</div>
<span className="text-base font-medium text-gray-900 tracking-tight whitespace-nowrap">Orthopedics</span>
</div>
</div>
</div>

<div className="w-full h-full lg:hidden flex flex-col items-center justify-start py-10 overflow-y-auto hide-scrollbar relative z-10">
<div className="relative h-[300px] w-full flex justify-center mb-12">
<img alt="Medical Anatomy Diagram" className="h-full w-auto object-contain opacity-80 animate-float-slow drop-shadow-md" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl px-4">
<div className="flex items-center gap-3 bg-white/70 backdrop-blur-xl rounded-[1.25rem] p-3 shadow-sm border border-white/60">
<div className="w-10 h-10 rounded-xl bg-blue-50/80 text-[#2F6DF2] flex items-center justify-center border border-blue-100/50"><iconify-icon height="20" icon="solar:scissors-linear" width="20"></iconify-icon></div>
<span className="text-base font-medium text-gray-900">Hair Transplant</span>
</div>
<div className="flex items-center gap-3 bg-white/70 backdrop-blur-xl rounded-[1.25rem] p-3 shadow-sm border border-white/60">
<div className="w-10 h-10 rounded-xl bg-blue-50/80 text-[#2F6DF2] flex items-center justify-center border border-blue-100/50"><iconify-icon height="20" icon="solar:smile-circle-linear" width="20"></iconify-icon></div>
<span className="text-base font-medium text-gray-900">Dental Treatment</span>
</div>
<div className="flex items-center gap-3 bg-white/70 backdrop-blur-xl rounded-[1.25rem] p-3 shadow-sm border border-white/60">
<div className="w-10 h-10 rounded-xl bg-blue-50/80 text-[#2F6DF2] flex items-center justify-center border border-blue-100/50"><iconify-icon height="20" icon="solar:eye-linear" width="20"></iconify-icon></div>
<span className="text-base font-medium text-gray-900">Laser Eye</span>
</div>
<div className="flex items-center gap-3 bg-white/70 backdrop-blur-xl rounded-[1.25rem] p-3 shadow-sm border border-white/60">
<div className="w-10 h-10 rounded-xl bg-blue-50/80 text-[#2F6DF2] flex items-center justify-center border border-blue-100/50"><iconify-icon height="20" icon="solar:cardiogram-linear" width="20"></iconify-icon></div>
<span className="text-base font-medium text-gray-900">Cardiovascular</span>
</div>
<div className="flex items-center gap-3 bg-white/70 backdrop-blur-xl rounded-[1.25rem] p-3 shadow-sm border border-white/60">
<div className="w-10 h-10 rounded-xl bg-blue-50/80 text-[#2F6DF2] flex items-center justify-center border border-blue-100/50"><iconify-icon height="20" icon="solar:magic-stick-3-linear" width="20"></iconify-icon></div>
<span className="text-base font-medium text-gray-900">Plastic Surgery</span>
</div>
<div className="flex items-center gap-3 bg-white/70 backdrop-blur-xl rounded-[1.25rem] p-3 shadow-sm border border-white/60">
<div className="w-10 h-10 rounded-xl bg-blue-50/80 text-[#2F6DF2] flex items-center justify-center border border-blue-100/50"><iconify-icon height="20" icon="solar:waterdrops-linear" width="20"></iconify-icon></div>
<span className="text-base font-medium text-gray-900">Urology</span>
</div>
<div className="flex items-center gap-3 bg-white/70 backdrop-blur-xl rounded-[1.25rem] p-3 shadow-sm border border-white/60">
<div className="w-10 h-10 rounded-xl bg-blue-50/80 text-[#2F6DF2] flex items-center justify-center border border-blue-100/50"><iconify-icon height="20" icon="solar:ruler-linear" width="20"></iconify-icon></div>
<span className="text-base font-medium text-gray-900">Bariatric Surgery</span>
</div>
<div className="flex items-center gap-3 bg-white/70 backdrop-blur-xl rounded-[1.25rem] p-3 shadow-sm border border-white/60">
<div className="w-10 h-10 rounded-xl bg-blue-50/80 text-[#2F6DF2] flex items-center justify-center border border-blue-100/50"><iconify-icon height="20" icon="solar:bone-linear" width="20"></iconify-icon></div>
<span className="text-base font-medium text-gray-900">Orthopedics</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 relative z-10 overflow-hidden">
<div className="bg-white border border-gray-200/60 rounded-[2.5rem] shadow-[0_8px_40px_rgba(0,0,0,0.02)] p-8 md:p-12 lg:p-16 reveal-up">

<div className="flex flex-col md:flex-row md:items-end gap-6 mb-12">
<h2 className="text-5xl lg:text-7xl font-medium tracking-tight text-gray-900 leading-none">How it works.</h2>
<div className="hidden md:block w-px h-10 bg-gray-200 mx-2 mb-1"></div>
<p className="text-lg lg:text-xl text-gray-500 font-normal mb-1">Three simple steps to better healthcare.</p>
</div>
<div className="w-full h-px bg-gray-100 mb-12"></div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 relative pt-4">

<div className="flex flex-col relative reveal-up delay-100 group">
<div className="absolute -top-3 left-6 bg-white px-3.5 py-1 rounded-full border border-gray-200 text-xs font-medium tracking-wide text-gray-700 z-10 shadow-sm uppercase">
                    STEP 1
                </div>
<div className="border border-gray-100 bg-[#FAFAFA] rounded-[2rem] p-8 aspect-[4/3] flex items-center justify-center mb-8 relative overflow-hidden transition-colors group-hover:bg-gray-50">

<div className="w-full max-w-[280px] bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 p-5 flex flex-col gap-4 transform group-hover:-translate-y-1 transition-transform duration-500">
<div className="bg-gray-50 rounded-xl p-3 flex items-center gap-3 border border-gray-100/50">
<svg aria-hidden="true" className="lucide lucide-search text-gray-400 w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<div className="h-2 w-24 bg-gray-200 rounded-full"></div>
</div>
<div className="bg-white border border-gray-100/80 rounded-xl p-3 flex items-center gap-4 shadow-sm">
<div className="w-10 h-10 rounded-full bg-emerald-100/50 flex items-center justify-center text-emerald-600 shrink-0">
<svg aria-hidden="true" className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div className="flex flex-col gap-2 flex-1">
<div className="h-2.5 w-20 bg-gray-800 rounded-full"></div>
<div className="h-2 w-16 bg-gray-300 rounded-full"></div>
</div>
</div>
<div className="bg-white border border-gray-100/80 rounded-xl p-3 flex items-center gap-4 shadow-sm">
<div className="w-10 h-10 rounded-full bg-blue-100/50 flex items-center justify-center text-blue-600 shrink-0">
<svg aria-hidden="true" className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div className="flex flex-col gap-2 flex-1">
<div className="h-2.5 w-24 bg-gray-800 rounded-full"></div>
<div className="h-2 w-14 bg-gray-300 rounded-full"></div>
</div>
</div>
</div>
</div>
<h3 className="text-3xl font-medium tracking-tight text-gray-900 mb-4">Find your provider</h3>
<p className="text-lg text-gray-600 leading-relaxed font-normal">Search by condition, specialty, or insurance. Read reviews from verified patients.</p>
</div>

<div className="flex flex-col relative reveal-up delay-200 group">
<div className="absolute -top-3 left-6 bg-white px-3.5 py-1 rounded-full border border-gray-200 text-xs font-medium tracking-wide text-gray-700 z-10 shadow-sm uppercase">
                    STEP 2
                </div>
<div className="border border-gray-100 bg-[#FAFAFA] rounded-[2rem] p-8 aspect-[4/3] flex items-center justify-center mb-8 relative overflow-hidden transition-colors group-hover:bg-gray-50">

<div className="w-full max-w-[300px] bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 p-5 flex flex-col gap-5 transform group-hover:-translate-y-1 transition-transform duration-500">
<div className="flex justify-between items-center px-1">
<div className="h-3 w-20 bg-gray-800 rounded-full"></div>
<div className="flex gap-1.5">
<div className="w-5 h-5 rounded bg-gray-50 flex items-center justify-center text-gray-400 border border-gray-100"><svg aria-hidden="true" className="lucide lucide-chevron-left w-3 h-3" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg></div>
<div className="w-5 h-5 rounded bg-gray-50 flex items-center justify-center text-gray-400 border border-gray-100"><svg aria-hidden="true" className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></div>
</div>
</div>
<div className="flex justify-between items-start px-2 relative h-16">
<div className="flex flex-col items-center gap-2"><div className="h-1.5 w-5 bg-gray-200 rounded-full"></div><div className="w-5 h-5 rounded-full bg-gray-100"></div></div>
<div className="flex flex-col items-center gap-2 relative z-10">
<div className="h-1.5 w-5 bg-emerald-500 rounded-full"></div>
<div className="w-5 h-5 rounded-full bg-emerald-500"></div>
<div className="absolute top-10 w-20 h-6 bg-emerald-500 rounded flex items-center justify-center shadow-md">
<div className="w-5 h-0.5 bg-white rounded-full"></div>
</div>
</div>
<div className="flex flex-col items-center gap-2"><div className="h-1.5 w-5 bg-gray-200 rounded-full"></div><div className="w-5 h-5 rounded-full bg-gray-100"></div></div>
<div className="flex flex-col items-center gap-2"><div className="h-1.5 w-5 bg-gray-200 rounded-full"></div><div className="w-5 h-5 rounded-full bg-gray-100"></div></div>
<div className="flex flex-col items-center gap-2"><div className="h-1.5 w-5 bg-gray-200 rounded-full"></div><div className="w-5 h-5 rounded-full bg-gray-100"></div></div>
</div>
<div className="grid grid-cols-3 gap-2.5 mt-2">
<div className="h-6 bg-gray-50 border border-gray-100/80 rounded-md"></div>
<div className="h-6 bg-gray-50 border border-gray-100/80 rounded-md"></div>
<div className="h-6 bg-gray-50 border border-gray-100/80 rounded-md"></div>
<div className="h-6 bg-gray-50 border border-gray-100/80 rounded-md"></div>
<div className="h-6 bg-gray-50 border border-gray-100/80 rounded-md"></div>
<div className="h-6 bg-gray-50 border border-gray-100/80 rounded-md"></div>
</div>
</div>
</div>
<h3 className="text-3xl font-medium tracking-tight text-gray-900 mb-4">Book instantly</h3>
<p className="text-lg text-gray-600 leading-relaxed font-normal">See real-time availability and secure your appointment with a single tap.</p>
</div>

<div className="flex flex-col relative reveal-up delay-300 group">
<div className="absolute -top-3 left-6 bg-white px-3.5 py-1 rounded-full border border-gray-200 text-xs font-medium tracking-wide text-gray-700 z-10 shadow-sm uppercase">
                    STEP 3
                </div>
<div className="border border-gray-100 bg-[#FAFAFA] rounded-[2rem] p-8 aspect-[4/3] flex items-center justify-center mb-8 relative overflow-hidden transition-colors group-hover:bg-gray-50">

<div className="w-full max-w-[300px] bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 p-5 flex flex-col gap-5 transform group-hover:-translate-y-1 transition-transform duration-500">
<div className="flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center shrink-0">
<svg aria-hidden="true" className="lucide lucide-user w-4 h-4" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div className="flex flex-col gap-1.5">
<div className="h-2 w-16 bg-gray-800 rounded-full"></div>
<div className="h-1.5 w-10 bg-gray-300 rounded-full"></div>
</div>
</div>
<div className="w-6 h-6 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-400">
<svg aria-hidden="true" className="lucide lucide-lightbulb w-3 h-3" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="bg-blue-50/60 border border-blue-100/80 rounded-xl p-3 flex flex-col gap-2.5">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-activity text-blue-500 w-4 h-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<div className="h-2 w-8 bg-blue-500 rounded-full"></div>
</div>
<div className="h-4 w-12 bg-blue-900 rounded-full mt-1"></div>
<div className="h-1.5 w-16 bg-blue-200 rounded-full mt-0.5"></div>
</div>
<div className="bg-rose-50/60 border border-rose-100/80 rounded-xl p-3 flex flex-col gap-2.5">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-heart text-rose-500 w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<div className="h-2 w-8 bg-rose-500 rounded-full"></div>
</div>
<div className="h-4 w-12 bg-rose-900 rounded-full mt-1"></div>
<div className="h-1.5 w-16 bg-rose-200 rounded-full mt-0.5"></div>
</div>
</div>
<div className="flex flex-col gap-3 mt-1">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></div>
<div className="h-2 flex-1 bg-gray-200 rounded-full"></div>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-gray-300 shrink-0"></div>
<div className="h-2 w-4/5 bg-gray-100 rounded-full"></div>
</div>
</div>
</div>
</div>
<h3 className="text-3xl font-medium tracking-tight text-gray-900 mb-4">Manage your health</h3>
<p className="text-lg text-gray-600 leading-relaxed font-normal">Consult via video, message your care team, and track your health timeline.</p>
</div>
</div>
</div>
</section>

<section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 mb-16 sm:mb-24 relative overflow-hidden">

<div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
<div className="absolute top-0 right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-b from-[#2F6DF2]/10 via-[#A6E6DD]/10 to-transparent blur-[120px] animate-float-slow"></div>
<div className="absolute bottom-0 left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-t from-[#10B981]/10 via-[#CBE7F5]/20 to-transparent blur-[100px] animate-float-medium"></div>
</div>

<div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 reveal-up relative z-10">
<div className="inline-flex items-center gap-2 bg-blue-50/80 text-[#2F6DF2] rounded-full px-4 py-2 mb-6 border border-blue-100/50">
<iconify-icon height="16" icon="solar:health-linear" width="16"></iconify-icon>
<span className="text-sm font-medium tracking-wide">Patient Portal</span>
</div>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-gray-900 mb-6 leading-[1.15]">
            Manage your health <span className="text-[#2F6DF2]">intelligently.</span>
</h2>
<p className="text-lg text-gray-600 font-normal leading-relaxed">
            Access comprehensive health metrics, upcoming appointments, and lab results in one beautifully designed personal dashboard.
        </p>
</div>

<div className="relative w-full max-w-[80rem] mx-auto rounded-[2rem] bg-[#FAFAFA]/90 backdrop-blur-2xl border border-gray-200/80 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col lg:flex-row h-[950px] lg:h-[760px] reveal-up delay-100 z-10">

<div className="hidden lg:flex flex-col w-[280px] bg-white border-r border-gray-200/60 p-6 flex-shrink-0">

<div className="flex items-center gap-2 mb-10 px-2">
<div className="w-8 h-8 rounded-lg bg-[#2F6DF2] flex items-center justify-center text-white">
<iconify-icon height="20" icon="solar:pulse-2-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-gray-900">HealthSpace</span>
</div>

<nav className="flex flex-col gap-2 flex-1">
<a className="flex items-center gap-3 bg-gray-50 text-gray-900 px-4 py-3 rounded-xl transition-colors font-medium text-sm" href="#">
<iconify-icon className="text-[#2F6DF2]" height="20" icon="solar:widget-linear" width="20"></iconify-icon>
                    Dashboard
                </a>
<a className="flex items-center gap-3 text-gray-500 hover:bg-gray-50 hover:text-gray-900 px-4 py-3 rounded-xl transition-colors font-medium text-sm group" href="#">
<iconify-icon className="group-hover:text-gray-900 transition-colors" height="20" icon="solar:calendar-linear" width="20"></iconify-icon>
                    Appointments
                </a>
<a className="flex items-center gap-3 text-gray-500 hover:bg-gray-50 hover:text-gray-900 px-4 py-3 rounded-xl transition-colors font-medium text-sm group" href="#">
<iconify-icon className="group-hover:text-gray-900 transition-colors" height="20" icon="solar:test-tube-linear" width="20"></iconify-icon>
                    Lab Results
                </a>
<a className="flex items-center gap-3 text-gray-500 hover:bg-gray-50 hover:text-gray-900 px-4 py-3 rounded-xl transition-colors font-medium text-sm group" href="#">
<iconify-icon className="group-hover:text-gray-900 transition-colors" height="20" icon="solar:pill-linear" width="20"></iconify-icon>
                    Prescriptions
                </a>
<a className="flex items-center justify-between text-gray-500 hover:bg-gray-50 hover:text-gray-900 px-4 py-3 rounded-xl transition-colors font-medium text-sm group" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="group-hover:text-gray-900 transition-colors" height="20" icon="solar:letter-linear" width="20"></iconify-icon>
                        Messages
                    </div>
<span className="bg-[#2F6DF2] text-white text-[10px] px-2 py-0.5 rounded-full font-medium">2</span>
</a>
</nav>

<div className="mt-auto flex flex-col gap-2 pt-6 border-t border-gray-100">
<a className="flex items-center gap-3 text-gray-500 hover:text-gray-900 px-4 py-2 rounded-xl transition-colors font-medium text-sm" href="#">
<iconify-icon height="20" icon="solar:settings-linear" width="20"></iconify-icon>
                    Settings
                </a>
<a className="flex items-center gap-3 text-gray-500 hover:text-rose-600 px-4 py-2 rounded-xl transition-colors font-medium text-sm" href="#">
<iconify-icon height="20" icon="solar:logout-2-linear" width="20"></iconify-icon>
                    Log out
                </a>
</div>
</div>

<div className="flex-1 flex flex-col h-full overflow-y-auto hide-scrollbar">

<header className="flex items-center justify-between p-6 lg:p-8 pb-4 lg:pb-6 bg-white/50 backdrop-blur-md sticky top-0 z-20 border-b border-gray-200/50">
<div className="flex flex-col">
<h1 className="text-2xl font-medium tracking-tight text-gray-900">Good morning, Michael</h1>
<p className="text-sm text-gray-500 mt-1">Here is your daily health overview.</p>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
<iconify-icon className="text-gray-400" height="16" icon="solar:calendar-linear" width="16"></iconify-icon>
<span className="text-sm font-medium text-gray-600 ml-2">Oct 24, 2023</span>
</div>
<button className="relative w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-900 shadow-sm transition-colors">
<iconify-icon height="20" icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-2 right-2.5 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
</button>
<div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 shadow-sm">
<img alt="Michael Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
</div>
</header>
<div className="p-6 lg:p-8 flex flex-col gap-6 lg:gap-8 flex-1">

<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
<iconify-icon height="22" icon="solar:heart-pulse-linear" width="22"></iconify-icon>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">+2%</span>
</div>
<p className="text-sm font-medium text-gray-500 mb-1">Heart Rate</p>
<div className="flex items-baseline gap-1">
<h3 className="text-2xl font-medium tracking-tight text-gray-900">72</h3>
<span className="text-sm text-gray-500 font-medium">bpm</span>
</div>
</div>

<div className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#2F6DF2]">
<iconify-icon height="22" icon="solar:health-linear" width="22"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded-md">Normal</span>
</div>
<p className="text-sm font-medium text-gray-500 mb-1">Blood Pressure</p>
<div className="flex items-baseline gap-1">
<h3 className="text-2xl font-medium tracking-tight text-gray-900">118/76</h3>
<span className="text-sm text-gray-500 font-medium">mmHg</span>
</div>
</div>

<div className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500">
<iconify-icon height="22" icon="solar:moon-linear" width="22"></iconify-icon>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">+15m</span>
</div>
<p className="text-sm font-medium text-gray-500 mb-1">Sleep</p>
<div className="flex items-baseline gap-1">
<h3 className="text-2xl font-medium tracking-tight text-gray-900">7h 45m</h3>
</div>
</div>

<div className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
<iconify-icon height="22" icon="solar:scale-linear" width="22"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded-md">-0.5kg</span>
</div>
<p className="text-sm font-medium text-gray-500 mb-1">Weight</p>
<div className="flex items-baseline gap-1">
<h3 className="text-2xl font-medium tracking-tight text-gray-900">74.2</h3>
<span className="text-sm text-gray-500 font-medium">kg</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 pb-4">

<div className="lg:col-span-2 bg-white border border-gray-200/80 rounded-[1.5rem] p-6 shadow-sm flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-medium tracking-tight text-gray-900">Activity Insights</h3>
<button className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 border border-gray-200 rounded-full px-3 py-1.5 transition-colors">
                                This Week
                                <iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>
</div>

<div className="flex-1 flex items-end gap-2 sm:gap-4 mt-auto min-h-[220px] pt-4 border-b border-gray-100 pb-2 relative">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-2">
<div className="w-full h-px bg-gray-100"></div>
<div className="w-full h-px bg-gray-100"></div>
<div className="w-full h-px bg-gray-100"></div>
<div className="w-full h-px bg-gray-100"></div>
</div>

<div className="flex-1 flex flex-col items-center gap-2 z-10 h-full justify-end group cursor-pointer">
<div className="w-full max-w-[40px] bg-gray-100 rounded-t-lg relative transition-all group-hover:bg-gray-200" style={{height: '100%'}}>
<div className="absolute bottom-0 w-full bg-[#2F6DF2] rounded-t-lg transition-all group-hover:bg-blue-600" style={{height: '45%'}}></div>
</div>
<span className="text-xs font-medium text-gray-500">Mon</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 z-10 h-full justify-end group cursor-pointer">
<div className="w-full max-w-[40px] bg-gray-100 rounded-t-lg relative transition-all group-hover:bg-gray-200" style={{height: '100%'}}>
<div className="absolute bottom-0 w-full bg-[#2F6DF2] rounded-t-lg transition-all group-hover:bg-blue-600" style={{height: '60%'}}></div>
</div>
<span className="text-xs font-medium text-gray-500">Tue</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 z-10 h-full justify-end group cursor-pointer">
<div className="w-full max-w-[40px] bg-gray-100 rounded-t-lg relative transition-all group-hover:bg-gray-200" style={{height: '100%'}}>
<div className="absolute bottom-0 w-full bg-[#2F6DF2] rounded-t-lg transition-all group-hover:bg-blue-600" style={{height: '85%'}}></div>

<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">8,500 Steps</div>
</div>
<span className="text-xs font-medium text-gray-900">Wed</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 z-10 h-full justify-end group cursor-pointer">
<div className="w-full max-w-[40px] bg-gray-100 rounded-t-lg relative transition-all group-hover:bg-gray-200" style={{height: '100%'}}>
<div className="absolute bottom-0 w-full bg-[#2F6DF2] rounded-t-lg transition-all group-hover:bg-blue-600" style={{height: '35%'}}></div>
</div>
<span className="text-xs font-medium text-gray-500">Thu</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 z-10 h-full justify-end group cursor-pointer">
<div className="w-full max-w-[40px] bg-gray-100 rounded-t-lg relative transition-all group-hover:bg-gray-200" style={{height: '100%'}}>
<div className="absolute bottom-0 w-full bg-[#2F6DF2] rounded-t-lg transition-all group-hover:bg-blue-600" style={{height: '70%'}}></div>
</div>
<span className="text-xs font-medium text-gray-500">Fri</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 z-10 h-full justify-end group cursor-pointer">
<div className="w-full max-w-[40px] bg-gray-100 rounded-t-lg relative transition-all group-hover:bg-gray-200" style={{height: '100%'}}>
<div className="absolute bottom-0 w-full bg-emerald-400 rounded-t-lg transition-all group-hover:bg-emerald-500" style={{height: '95%'}}></div>
</div>
<span className="text-xs font-medium text-gray-500">Sat</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 z-10 h-full justify-end group cursor-pointer">
<div className="w-full max-w-[40px] bg-gray-100 rounded-t-lg relative transition-all group-hover:bg-gray-200" style={{height: '100%'}}>
<div className="absolute bottom-0 w-full bg-emerald-400 rounded-t-lg transition-all group-hover:bg-emerald-500" style={{height: '50%'}}></div>
</div>
<span className="text-xs font-medium text-gray-500">Sun</span>
</div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="bg-white border border-gray-200/80 rounded-[1.5rem] p-6 shadow-sm">
<div className="flex justify-between items-center mb-5">
<h3 className="text-lg font-medium tracking-tight text-gray-900">Upcoming Visit</h3>
<a className="text-xs font-medium text-[#2F6DF2] hover:text-blue-700" href="#">View All</a>
</div>
<div className="flex flex-col gap-4">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100 flex-shrink-0">
<img alt="Dr. Sarah Miller" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&amp;q=80"/>
</div>
<div className="flex flex-col">
<h4 className="text-sm font-medium text-gray-900">Dr. Sarah Miller</h4>
<span className="text-xs text-gray-500 mb-2">Cardiology</span>
<div className="flex items-center gap-2 bg-blue-50 text-[#2F6DF2] px-3 py-1.5 rounded-lg w-max">
<iconify-icon height="14" icon="solar:calendar-linear" width="14"></iconify-icon>
<span className="text-xs font-medium">Tomorrow, 10:00 AM</span>
</div>
</div>
</div>
<button className="w-full mt-2 bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-200 rounded-xl py-2.5 text-sm font-medium transition-colors flex items-center justify-center gap-2">
<iconify-icon height="16" icon="solar:videocamera-linear" width="16"></iconify-icon>
                                    Join Video Call
                                </button>
</div>
</div>

<div className="bg-white border border-gray-200/80 rounded-[1.5rem] p-6 shadow-sm flex flex-col flex-1">
<div className="flex justify-between items-center mb-5">
<h3 className="text-lg font-medium tracking-tight text-gray-900">Recent Labs</h3>
<a className="text-xs font-medium text-[#2F6DF2] hover:text-blue-700" href="#">View All</a>
</div>
<div className="flex flex-col gap-3 mt-auto">

<div className="flex items-center justify-between p-3.5 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
<iconify-icon height="20" icon="solar:test-tube-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900">Complete Blood Count</h4>
<span className="text-xs text-gray-500">Oct 20, 2023</span>
</div>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-100 px-2.5 py-1 rounded-md">Normal</span>
</div>

<div className="flex items-center justify-between p-3.5 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
<iconify-icon height="20" icon="solar:heart-pulse-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900">Lipid Panel</h4>
<span className="text-xs text-gray-500">Oct 18, 2023</span>
</div>
</div>
<span className="text-xs font-medium text-amber-600 bg-amber-100 px-2.5 py-1 rounded-md">Review</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
<div className="bg-[#111827] rounded-[2.5rem] overflow-hidden relative reveal-up flex flex-col lg:flex-row items-center justify-between p-10 lg:p-16">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2F6DF2]/20 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#10B981]/20 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3"></div>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
</div>
<div className="relative z-10 w-full lg:w-3/5 text-center lg:text-left mb-10 lg:mb-0">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6 leading-[1.15]">
                Ready to prioritize your health?
            </h2>
<p className="text-lg text-gray-400 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                Join thousands of patients who trust Erdem Health Group. Create your account today to easily find doctors, book appointments, and manage your medical records online.
            </p>
</div>
<div className="relative z-10 w-full lg:w-auto flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-end">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2F6DF2] hover:bg-blue-600 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 shadow-[0_8px_20px_rgba(47,109,242,0.3)]" href="#">
                Create Free Account
            </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full text-base font-medium transition-all duration-300" href="#">
                Contact Support
            </a>
</div>
</div>
</section>

<footer className="bg-gray-50 border-t border-gray-200/60 pt-20 pb-10">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

<div className="flex flex-col gap-6 lg:pr-8">
<a className="flex items-center gap-1 text-2xl font-medium text-gray-900 tracking-tight" href="#">
                    Erdem Health <span className="text-[#2F6DF2]">_</span>
</a>
<p className="text-gray-500 text-sm leading-relaxed font-normal">
                    Delivering world-class healthcare with state-of-the-art facilities, renowned specialists, and a patient-first approach.
                </p>
<div className="flex items-center gap-3">
<a className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#2F6DF2] hover:border-blue-200 hover:shadow-sm transition-all duration-300" href="#">
<iconify-icon height="18" icon="fa6-brands:instagram" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#2F6DF2] hover:border-blue-200 hover:shadow-sm transition-all duration-300" href="#">
<iconify-icon height="18" icon="fa6-brands:twitter" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#2F6DF2] hover:border-blue-200 hover:shadow-sm transition-all duration-300" href="#">
<iconify-icon height="18" icon="fa6-brands:linkedin-in" width="18"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-base font-medium text-gray-900 mb-6">Quick Links</h4>
<ul className="flex flex-col gap-3.5">
<li><a className="text-sm font-normal text-gray-500 hover:text-[#2F6DF2] transition-colors flex items-center gap-2" href="#"><div className="w-1 h-1 rounded-full bg-gray-300"></div> Find a Doctor</a></li>
<li><a className="text-sm font-normal text-gray-500 hover:text-[#2F6DF2] transition-colors flex items-center gap-2" href="#"><div className="w-1 h-1 rounded-full bg-gray-300"></div> Medical Units</a></li>
<li><a className="text-sm font-normal text-gray-500 hover:text-[#2F6DF2] transition-colors flex items-center gap-2" href="#"><div className="w-1 h-1 rounded-full bg-gray-300"></div> Hospitals &amp; Clinics</a></li>
<li><a className="text-sm font-normal text-gray-500 hover:text-[#2F6DF2] transition-colors flex items-center gap-2" href="#"><div className="w-1 h-1 rounded-full bg-gray-300"></div> Patient Portal</a></li>
<li><a className="text-sm font-normal text-gray-500 hover:text-[#2F6DF2] transition-colors flex items-center gap-2" href="#"><div className="w-1 h-1 rounded-full bg-gray-300"></div> International Patients</a></li>
</ul>
</div>

<div>
<h4 className="text-base font-medium text-gray-900 mb-6">Support &amp; Legal</h4>
<ul className="flex flex-col gap-3.5">
<li><a className="text-sm font-normal text-gray-500 hover:text-[#2F6DF2] transition-colors flex items-center gap-2" href="#"><div className="w-1 h-1 rounded-full bg-gray-300"></div> Contact Us</a></li>
<li><a className="text-sm font-normal text-gray-500 hover:text-[#2F6DF2] transition-colors flex items-center gap-2" href="#"><div className="w-1 h-1 rounded-full bg-gray-300"></div> FAQ &amp; Help Center</a></li>
<li><a className="text-sm font-normal text-gray-500 hover:text-[#2F6DF2] transition-colors flex items-center gap-2" href="#"><div className="w-1 h-1 rounded-full bg-gray-300"></div> Privacy Policy</a></li>
<li><a className="text-sm font-normal text-gray-500 hover:text-[#2F6DF2] transition-colors flex items-center gap-2" href="#"><div className="w-1 h-1 rounded-full bg-gray-300"></div> Terms of Service</a></li>
<li><a className="text-sm font-normal text-gray-500 hover:text-[#2F6DF2] transition-colors flex items-center gap-2" href="#"><div className="w-1 h-1 rounded-full bg-gray-300"></div> Cookie Policy</a></li>
</ul>
</div>

<div className="flex flex-col gap-5">
<h4 className="text-base font-medium text-gray-900 mb-1">Get in Touch</h4>
<div className="flex items-start gap-3 group">
<div className="w-8 h-8 rounded-full bg-blue-50 text-[#2F6DF2] flex items-center justify-center shrink-0 group-hover:bg-[#2F6DF2] group-hover:text-white transition-colors duration-300">
<iconify-icon height="16" icon="solar:map-point-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-normal text-gray-500 leading-relaxed mt-1">123 Healthcare Avenue, Medical District, NY 10001</span>
</div>
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-8 h-8 rounded-full bg-blue-50 text-[#2F6DF2] flex items-center justify-center shrink-0 group-hover:bg-[#2F6DF2] group-hover:text-white transition-colors duration-300">
<iconify-icon height="16" icon="solar:phone-calling-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-normal text-gray-500 group-hover:text-gray-900 transition-colors">+1 (800) 123-4567</span>
</div>
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-8 h-8 rounded-full bg-blue-50 text-[#2F6DF2] flex items-center justify-center shrink-0 group-hover:bg-[#2F6DF2] group-hover:text-white transition-colors duration-300">
<iconify-icon height="16" icon="solar:letter-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-normal text-gray-500 group-hover:text-gray-900 transition-colors">contact@erdemhealth.com</span>
</div>
</div>
</div>

<div className="pt-8 border-t border-gray-200/80 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-gray-400 font-normal">
                © 2023 Erdem Health Group. All rights reserved.
            </p>
<div className="flex items-center gap-2 text-sm text-gray-400">
<span>Designed for excellence in</span>
<iconify-icon className="text-rose-500 mx-0.5" height="16" icon="solar:heart-pulse-bold" width="16"></iconify-icon>
<span>Healthcare</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
