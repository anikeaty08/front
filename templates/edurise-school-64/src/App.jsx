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
      

<nav className="sm:px-6 lg:px-8 flex max-w-screen-2xl mr-auto ml-auto pt-5 pr-4 pb-5 pl-4 items-center justify-between">
<div className="flex items-center gap-2">

<div className="w-6 h-6 bg-indigo-600 rounded-md"></div>
<a className="text-xl font-medium text-slate-900 tracking-tight font-space-grotesk" href="#">ClassLens</a>
</div>
<div className="hidden md:flex items-center gap-1 bg-white">
<a className="hover:bg-slate-50 transition-colors text-sm font-medium border-slate-200 border rounded-full pt-1.5 pr-4 pb-1.5 pl-4" href="#">Home</a>
<a className="hover:text-slate-900 transition-colors text-sm font-medium text-slate-600 rounded-full pt-1.5 pr-4 pb-1.5 pl-4" href="#" style={{}}>About Us</a>
<a className="hover:text-slate-900 transition-colors text-sm font-medium text-slate-600 rounded-full pt-1.5 pr-4 pb-1.5 pl-4" href="#" style={{}}>Contact</a>
</div>
<div className="">
<a className="group flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors" href="#">
                Request Demo
                <svg className="lucide lucide-arrow-up-right w-4 h-4 text-slate-400 group-hover:text-white transition-colors" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</nav>

<div className="max-w-[98%] mx-auto px-2">
<div className="relative w-full h-[600px] md:h-[750px] rounded-[2rem] overflow-hidden">

<img alt="Indian Students Learning" className="object-center w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://i.ibb.co/Z6hW5WWK/mohammad-alizade-n-Ilw-OYUb-QEA-unsplash.jpg"/>

<div className="absolute inset-0 bg-gradient-to-b from-indigo-900/30 via-black/20 to-black/60"></div>

<div className="flex flex-col text-center pt-20 pr-4 pl-4 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="mb-6 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
<span className="text-xs font-medium text-white tracking-wide">FOUCUSED INDIVIDUALISED LEARNING FOR ALL</span>
</div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-4xl font-medium text-white tracking-tight max-w-4xl mr-auto mb-6 ml-auto drop-shadow-sm">
    Empowering Every School.
    Inspiring Every Student.
  </h1>
<p className="md:text-lg leading-relaxed text-base font-light text-white/90 max-w-xl mr-auto mb-8 ml-auto drop-shadow-sm">Suite of products to make education impactful and future ready in every school</p>
<div className="flex items-center gap-3">
<a className="bg-white text-slate-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-100 transition-colors" href="#">
      Partner with us
    </a>
<a className="hover:bg-white/20 transition-colors text-sm font-medium text-white bg-white/10 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur-md" href="#" style={{}}>View Products</a>
</div>
</div>

<div className="absolute bottom-8 left-8 hidden md:flex items-center gap-4 bg-white/10 backdrop-blur-md p-2 pr-6 rounded-full border border-white/10">
<div className="flex -space-x-3">
<img alt="Principal" className="w-10 h-10 rounded-full border-2 border-white/20 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop"/>
<img alt="Teacher" className="w-10 h-10 rounded-full border-2 border-white/20 object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&amp;h=100&amp;fit=crop"/>
<img alt="Student" className="w-10 h-10 rounded-full border-2 border-white/20 object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&amp;h=100&amp;fit=crop"/>
</div>
<div className="flex flex-col text-left">
<span className="text-white text-xs font-medium leading-tight">Join the community</span>
<span className="text-white/70 text-xs leading-tight">Principals, Teachers &amp; Students.</span>
</div>
</div>

<div className="absolute bottom-8 right-8 hidden md:flex items-center gap-6 text-white text-xs font-medium">
<a className="flex items-center gap-1 hover:text-white/80 transition-colors" href="#">LinkedIn <svg className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a>
<a className="flex items-center gap-1 hover:text-white/80 transition-colors" href="#">Twitter <svg className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a>
<a className="flex items-center gap-1 hover:text-white/80 transition-colors" href="#">YouTube <svg className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a>
</div>
</div>
</div>

<section className="max-w-screen-xl mx-auto px-6 py-24 md:py-32">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-3">
<span className="inline-block border border-slate-200 rounded-full px-4 py-1.5 text-xs font-medium text-slate-600">
                    Our Mission
                </span>
</div>
<div className="lg:col-span-9">
<h2 className="md:text-4xl leading-tight text-2xl font-normal text-slate-900 tracking-tight" style={{}}>At Inferensics, we don't just digitize learning — we transform learning outcomes. We aim to help schools across Bharat adopt smart pedagogy, individualised learning and amplifying potential.</h2>
</div>
</div>
</section>

<section className="max-w-screen-xl mr-auto ml-auto pr-6 pb-24 pl-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-[#0f172a] rounded-[2rem] p-8 h-[480px] flex flex-col justify-between overflow-hidden">
<div className="relative z-10">
<div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-xl backdrop-blur-sm mb-6">
<svg className="lucide lucide-layout-dashboard text-white w-6 h-6" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</div>
<h3 className="md:text-2xl leading-snug text-xl font-normal text-white tracking-tight mb-4" style={{}}>Hyper-personalized solutions that meet students where they are and help them rise <span className="text-indigo-400" style={{}}>at an individual level</span></h3>
</div>
<div className="relative z-10 flex items-center gap-3">
<div className="w-12 h-7 bg-indigo-500 rounded-full p-1 cursor-pointer flex items-center transition-colors">
<div className="w-5 h-5 bg-white rounded-full shadow-md translate-x-5 transition-transform"></div>
</div>
<span className="text-sm font-medium text-slate-400" style={{}}>AI Mode</span>
</div>

<div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px]"></div>
</div>

<div className="relative rounded-[2rem] overflow-hidden h-[480px] group">
<img alt="Digital Learning" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-sm font-medium text-white bg-white/20 border-white/20 border rounded-full pt-2 pr-5 pb-2 pl-5 backdrop-blur-md" style={{}}>Syllabus + AI</div>
</div>
</div>

<div className="bg-slate-50 rounded-[2rem] p-8 h-[480px] flex flex-col justify-between border border-slate-100">
<div className="">
<h3 className="md:text-6xl text-5xl font-medium text-slate-900 tracking-tight mb-2" style={{}}>30%</h3>
<p className="font-medium text-slate-900 mb-4" style={{}}>Grade Improvement</p>
<p className="leading-relaxed text-sm text-slate-500 mb-10" style={{}}>Inferensics solutions have the potential to bring significant improvements in board exam results within the first academic year.</p>
</div>
<div className="space-y-5">

<div className="flex items-center justify-between">
<span className="text-xs font-medium text-slate-600 w-24" style={{}}>Math</span>
<div className="flex gap-1.5 flex-1">
<div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-200"></div>
</div>
<span className="text-xs font-medium text-slate-900 w-6 text-right">72</span>
</div>

<div className="flex items-center justify-between">
<span className="text-xs font-medium text-slate-600 w-24">Science</span>
<div className="flex gap-1.5 flex-1">
<div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-200"></div>
</div>
<span className="text-xs font-medium text-slate-900 w-6 text-right">85</span>
</div>

<div className="flex items-center justify-between">
<span className="text-xs font-medium text-slate-600 w-24">Coding</span>
<div className="flex gap-1.5 flex-1">
<div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-200"></div>
</div>
<span className="text-xs font-medium text-slate-900 w-6 text-right">91</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-screen-xl mx-auto px-6 py-12 text-center">
<h3 className="text-lg md:text-xl font-normal text-slate-900 mb-16 tracking-tight">Making an impact across the subcontinent</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
<div className="flex flex-col items-center">
<span className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 mb-2">1.2 Lakh+</span>
<span className="text-sm text-slate-500" style={{}}>Student/Teacher</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 mb-2">95%</span>
<span className="text-sm text-slate-500" style={{}}>Teacher Retention</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 mb-2">500+</span>
<span className="text-sm text-slate-500">Partner Schools</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 mb-2">2M+</span>
<span className="text-sm text-slate-500">Assessments Taken</span>
</div>
</div>
</section>

<section className="md:py-32 max-w-screen-xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-4 flex flex-col justify-between">
<div className="">
<span className="inline-block border border-slate-200 rounded-full px-4 py-1.5 text-xs font-medium text-slate-600 mb-8">
                        Our Ecosystem
                    </span>
<h2 className="md:text-3xl leading-snug text-2xl font-normal text-slate-900 tracking-tight mb-8">Explore our
          exciting range of solutions. From AI powered Exam analysis to automated report cards — we handle the
          complexity so you can focus on teaching.</h2>
</div>
<div className="">
<a className="inline-flex items-center gap-2 hover:bg-slate-800 transition-colors text-sm font-medium text-white bg-slate-900 rounded-full pt-3 pr-6 pb-3 pl-6" href="#">Explore
          Products</a>
</div>
</div>

<div className="lg:col-span-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="relative h-[420px] rounded-[2rem] overflow-hidden group">
<img alt="Smart Assessment" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://i.ibb.co/Hf9V5Wrf/Group-3.png;fit=crop"/>
<div className="bg-gradient-to-t from-black/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-6 left-6">
<span className="text-xs font-medium text-white bg-white/20 border-white/20 border rounded-full pt-1.5 pr-4 pb-1.5 pl-4 backdrop-blur-md" style={{}}>ClassLens</span>
</div>
<div className="absolute bottom-6 left-6 right-6">
<p className="leading-tight text-lg font-medium text-white mb-2" style={{}}>AI-driven exam analysis for every
              student</p>
</div>
<div className="absolute bottom-6 right-6">
<div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white">
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>
</div>

<div className="flex flex-col gap-6">
<div className="relative h-[340px] rounded-[2rem] overflow-hidden group">
<img alt="Teacher Training" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-black/50 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-6 left-6">
<span className="text-xs font-medium text-white bg-white/20 border-white/20 border rounded-full pt-1.5 pr-4 pb-1.5 pl-4 backdrop-blur-md" style={{}}>Automations</span>
</div>
<div className="absolute bottom-6 left-6 right-6">
<p className="font-medium text-white mb-2" style={{}}>AI classroom Automations</p>
</div>
</div>
<div className="flex flex-col">
<p className="text-sm text-slate-600 mb-4 leading-relaxed">
              Continuous professional development for educators to stay ahead of the curve.
            </p>
<div className="flex items-center gap-2">
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
<svg className="lucide lucide-arrow-left w-4 h-4 text-slate-600" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
<svg className="lucide lucide-arrow-right w-4 h-4 text-slate-600" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<footer className="flex flex-col md:flex-row text-sm text-slate-500 max-w-screen-xl border-slate-100 border-t mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 items-center justify-between">
<p>© 2024 EduRise India Pvt Ltd. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-900" href="#">Privacy</a>
<a className="hover:text-slate-900" href="#">Terms</a>
<a className="hover:text-slate-900" href="#">Contact</a>
</div>
</footer>


    </>
  );
}
