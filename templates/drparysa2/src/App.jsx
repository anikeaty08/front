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
      
<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/twistcopy-CPActtgUfoQoOToZfH4Pt18Q" width="100%"></iframe></div></div>

<nav className="fixed top-0 w-full z-50 border-b border-indigo-200/60 bg-white/70 backdrop-blur-md">
<div className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="group flex items-center gap-2" href="#">

<div className="h-8 w-8 bg-gradient-to-br from-blue-400 to-green-500 rounded-lg flex items-center justify-center text-white shadow-sm group-hover:shadow-md transition-all duration-300">
<span className="font-serif italic text-lg leading-none pt-1">P</span>
</div>
<span className="text-sm font-semibold tracking-tight text-indigo-800 uppercase">Dr. Parysa</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-indigo-500 hover:text-indigo-900 transition-colors" href="#approach">Approach</a>
<a className="text-sm font-medium text-indigo-500 hover:text-indigo-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-indigo-500 hover:text-indigo-900 transition-colors" href="#about">About</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-white transition-all duration-200 bg-indigo-800 rounded-lg hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800" href="#contact">
                Book Consultation
            </a>

<button className="md:hidden text-indigo-500">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 inset-x-0 h-full w-full -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-cyan-50/50 to-indigo-50"></div>

<div className="filter animate-float bg-blue-200 opacity-30 mix-blend-multiply w-96 h-96 rounded-full absolute top-20 right-0 blur-3xl"></div>
<div className="absolute top-40 left-0 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
<div className="grid lg:grid-cols-2 gap-12 max-w-6xl mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-12 items-center">
<div className="space-y-8">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-xs font-medium tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
                    Accepting New Patients
                </div>
<h1 className="text-5xl lg:text-6xl font-medium tracking-tight text-indigo-900 leading-[1.1]">
                    Navigating the depths of <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">healing.</span>
</h1>
<p className="leading-relaxed text-lg text-indigo-500 max-w-lg">
                    Evidence-based psychiatric care for PTSD and trauma. Dr. Parysa provides a safe harbor for processing, understanding, and moving forward.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<button className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white transition-all bg-indigo-800 rounded-lg hover:bg-indigo-700 hover:translate-y-px shadow-sm hover:shadow-md">
                        Begin Your Journey
                        <svg className="lucide lucide-arrow-right ml-2 w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-indigo-700 transition-all bg-white border border-indigo-200 rounded-lg hover:bg-indigo-50 hover:border-indigo-300">
                        Learn More
                    </button>
</div>
<div className="flex items-center gap-4 text-xs text-indigo-400 pt-4">
<div className="flex -space-x-2">

<div className="w-8 h-8 rounded-full border-2 border-white bg-indigo-200"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-blue-100"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-indigo-300"></div>
</div>
<p className="">Trusted by patients across California</p>
</div>
</div>

<div className="relative lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-indigo-900/10 border border-white/50 bg-white/30 backdrop-blur-sm group">

<div className="group-hover:scale-105 transition-transform duration-700 ease-out bg-gradient-to-br from-blue-400/10 via-green-300/10 to-cyan-300/10 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-xl rounded-xl border border-white/50 shadow-lg">
<div className="flex items-start gap-4">
<div className="p-3 bg-blue-50 rounded-lg text-blue-600">
<svg className="lucide lucide-anchor w-6 h-6" data-lucide="anchor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v16"></path><path d="m19 13 2-1a9 9 0 0 1-18 0l2 1"></path><path d="M9 11h6"></path><circle cx="12" cy="4" r="2"></circle></svg>
</div>
<div className="">
<h3 className="text-sm font-semibold text-indigo-900">Grounded Methodology</h3>
<p className="text-xs text-indigo-500 mt-1 leading-relaxed">
                                Utilizing EMDR, Cognitive Processing Therapy, and holistic psychiatric evaluations to treat the root causes of trauma.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
<div className="max-w-2xl">
<h2 className="text-3xl font-medium tracking-tight text-indigo-900 mb-4">Clinical Focus Areas</h2>
<p className="text-indigo-500">Specialized treatment plans tailored to the unique topography of your life experiences.</p>
</div>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 group" href="#">
                    View all services 
                    <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-indigo-50 hover:bg-white border border-indigo-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl border border-indigo-200 shadow-sm flex items-center justify-center text-green-500 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-brain-circuit w-6 h-6" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<h3 className="text-lg font-semibold text-indigo-900 mb-2">PTSD &amp; Trauma</h3>
<p className="text-sm text-indigo-500 leading-relaxed">
                        Comprehensive assessment and treatment for Post-Traumatic Stress Disorder, utilizing evidence-based modalities designed to process traumatic memories.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-indigo-50 hover:bg-white border border-indigo-100 hover:border-cyan-100 hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl border border-indigo-200 shadow-sm flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-waves w-6 h-6" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
</div>
<h3 className="text-lg font-semibold text-indigo-900 mb-2">Anxiety Disorders</h3>
<p className="text-sm text-indigo-500 leading-relaxed">
                        Navigating generalized anxiety, panic disorders, and phobias through a combination of medication management and therapeutic strategies.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-indigo-50 hover:bg-white border border-indigo-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl border border-indigo-200 shadow-sm flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-sun w-6 h-6" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<h3 className="text-lg font-semibold text-indigo-900 mb-2">Depression &amp; Mood</h3>
<p className="text-sm text-indigo-500 leading-relaxed">
                        Providing a light in the darkness for major depressive disorders and mood dysregulation with compassionate, personalized care.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-cyan-900 text-cyan-300 relative overflow-hidden" id="about">

<div className="blur-[100px] bg-green-900/20 w-[500px] h-[500px] rounded-full absolute right-0 bottom-0"></div>
<div className="blur-[80px] bg-indigo-900/30 w-[300px] h-[300px] rounded-full absolute top-0 left-0"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">

<div className="relative order-2 lg:order-1">
<div className="aspect-[4/5] overflow-hidden cursor-pointer bg-gradient-to-b from-cyan-800 to-cyan-900 border-cyan-700/50 border rounded-2xl relative" onclick="window.location.href='https://www.psychtraumaptsd.com/wp-content/uploads/2021/10/IMG_4888.jpg'" role="button">

<div className="bg-gradient-to-t from-cyan-900 to-transparent h-1/2 absolute right-0 bottom-0 left-0"></div>

<div className="absolute bottom-6 left-6">
<p className="text-white font-medium text-lg">Dr. Parysa</p>
<p className="text-blue-300/80 text-sm">Psychiatrist &amp; Trauma Specialist</p>
</div>
</div>

<div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border border-cyan-700/50 rounded-2xl"></div>
</div>
<div className="space-y-8 order-1 lg:order-2">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white">
                        Healing is not linear, <br/>
<span className="text-cyan-400">it's a deepening of self.</span>
</h2>
<div className="space-y-6 text-cyan-400 text-lg leading-relaxed">
<p className="">
                            As a psychiatrist specializing in trauma, I believe that symptoms are often the mind's way of surviving the unsurvivable. My practice is dedicated to helping you move from surviving to thriving.
                        </p>
<p className="">
                            We don't just treat symptoms; we explore the underlying currents of your experiences. Using a blend of modern psychiatric medicine and psychodynamic therapy, we work together to calm the storm.
                        </p>
</div>
<div className="grid grid-cols-2 gap-8 pt-4">
<div className="">
<p className="text-3xl font-semibold text-white tracking-tight">15+</p>
<p className="text-sm text-cyan-500 mt-1">Years Experience</p>
</div>
<div className="">
<p className="text-3xl font-semibold text-white tracking-tight">100%</p>
<p className="text-sm text-cyan-500 mt-1">Confidential Care</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-indigo-50 border-y border-indigo-200">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-indigo-200">
<div className="px-4">
<div className="mx-auto w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-400 shadow-sm border border-indigo-100 mb-4">
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h4 className="text-sm font-semibold text-indigo-900 uppercase tracking-wide">Safe Space</h4>
<p className="text-sm text-indigo-500 mt-2 max-w-xs mx-auto">HIPAA compliant tele-health and in-person sessions designed for privacy.</p>
</div>
<div className="px-4 pt-8 md:pt-0">
<div className="mx-auto w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-400 shadow-sm border border-indigo-100 mb-4">
<svg className="lucide lucide-heart-handshake w-5 h-5" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
</div>
<h4 className="text-sm font-semibold text-indigo-900 uppercase tracking-wide">Compassionate Care</h4>
<p className="text-sm text-indigo-500 mt-2 max-w-xs mx-auto">A non-judgmental environment focused on your personal narrative.</p>
</div>
<div className="px-4 pt-8 md:pt-0">
<div className="mx-auto w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-400 shadow-sm border border-indigo-100 mb-4">
<svg className="lucide lucide-graduation-cap w-5 h-5" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
<h4 className="text-sm font-semibold text-indigo-900 uppercase tracking-wide">Expert Knowledge</h4>
<p className="text-sm text-indigo-500 mt-2 max-w-xs mx-auto">Board-certified psychiatry with specialized training in trauma modalities.</p>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="contact">
<div className="max-w-xl mx-auto px-6">
<div className="text-center mb-10">
<h2 className="text-3xl font-medium tracking-tight text-indigo-900">Get in Touch</h2>
<p className="text-indigo-500 mt-3">Ready to begin? Send us a message to schedule an initial consultation.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-indigo-700 uppercase tracking-wider" htmlFor="fname">First Name</label>
<input className="w-full px-4 py-3 bg-indigo-50 border border-indigo-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all placeholder-indigo-400" id="fname" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-indigo-700 uppercase tracking-wider" htmlFor="lname">Last Name</label>
<input className="w-full px-4 py-3 bg-indigo-50 border border-indigo-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all placeholder-indigo-400" id="lname" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-indigo-700 uppercase tracking-wider" htmlFor="email">Email</label>
<input className="w-full px-4 py-3 bg-indigo-50 border border-indigo-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all placeholder-indigo-400" id="email" placeholder="jane@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">Type of Inquiry</label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer relative">
<input checked="" className="peer sr-only" name="inquiry" type="radio"/>
<div className="px-4 py-3 text-sm text-center bg-white border border-indigo-200 rounded-lg text-indigo-600 peer-checked:bg-indigo-50 peer-checked:border-blue-500 peer-checked:text-blue-800 transition-all hover:bg-indigo-50">
                                New Patient
                            </div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="inquiry" type="radio"/>
<div className="px-4 py-3 text-sm text-center bg-white border border-indigo-200 rounded-lg text-indigo-600 peer-checked:bg-indigo-50 peer-checked:border-blue-500 peer-checked:text-blue-800 transition-all hover:bg-indigo-50">
                                General Info
                            </div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-indigo-700 uppercase tracking-wider" htmlFor="message">Message</label>
<textarea className="w-full px-4 py-3 bg-indigo-50 border border-indigo-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all placeholder-indigo-400" id="message" placeholder="Briefly describe what you are looking for..." rows="4"></textarea>
</div>
<button className="w-full py-4 px-6 bg-gradient-to-r from-indigo-800 to-indigo-700 hover:from-indigo-700 hover:to-indigo-600 text-white font-medium rounded-lg shadow-lg shadow-indigo-900/10 transition-all transform active:scale-[0.98]" type="submit">
                    Send Message
                </button>
</form>
</div>
</section>

<footer className="bg-white border-t border-indigo-100 py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="h-6 w-6 bg-indigo-100 rounded flex items-center justify-center text-indigo-900">
<span className="font-serif italic text-xs font-bold leading-none pt-0.5">P</span>
</div>
<span className="text-xs font-medium text-indigo-900 tracking-tight">DR. PARYSA © 2025</span>
</div>
<div className="flex gap-6">
<a className="text-indigo-400 hover:text-blue-600 transition-colors" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="text-indigo-400 hover:text-blue-600 transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-indigo-400 hover:text-blue-600 transition-colors" href="#">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 mt-8 text-center md:text-left">
<p className="text-xs text-indigo-300">
                In case of a medical emergency, please call 911 or visit your nearest emergency room.
            </p>
</div>
</footer>


    </>
  );
}
