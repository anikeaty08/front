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
      

<nav className="fixed w-full top-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">
<div className="flex-shrink-0 flex items-center gap-2">
<iconify-icon className="text-indigo-600 text-2xl" icon="solar:programming-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-slate-900 font-medium tracking-tighter text-xl uppercase">AURA</span>
</div>
<div className="hidden lg:flex space-x-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#about">Philosophy</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#journey">The Process</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#team">Practitioners</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#membership">Membership</a>
</div>
<div className="hidden md:flex items-center space-x-6">
<a className="text-sm font-medium text-slate-900 hover:text-indigo-600 transition-colors" href="#">Patient Portal</a>

<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 hover:shadow-sm transition-all duration-200" href="#book">
                        Schedule Consultation
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-50/80 via-[#FAFAFA] to-[#FAFAFA] -z-10"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
<div className="lg:col-span-6 max-w-2xl lg:max-w-none">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50/50 border border-indigo-100 mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
<span className="text-xs font-medium text-indigo-700 tracking-wide uppercase">Accepting New Patients</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tighter leading-[1.05] mb-6">
                        Elevating Dental Care to an Art of Precision.
                    </h1>
<p className="text-base sm:text-lg text-slate-500 leading-relaxed mb-10">
                        We combine rigorous clinical expertise with a profoundly human approach. Designed to ensure your absolute comfort and sustainable oral health, entirely free from anxiety.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">

<a className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 hover:shadow-md transition-all duration-200 group" href="#book">
                            Book an Appointment
                            <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-slate-700 bg-white border border-slate-200/80 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-colors duration-200 shadow-sm" href="#about">
                            Explore Practice
                        </a>
</div>
</div>
<div className="lg:col-span-6 relative">
<div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-slate-100 shadow-xl shadow-slate-200/50 ring-1 ring-slate-200/50 group">
<img alt="Modern Clinic Interior" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 via-transparent to-transparent mix-blend-multiply"></div>
<div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-8 sm:bottom-8 bg-white/90 backdrop-blur-md border border-white/50 p-5 rounded-2xl shadow-lg sm:max-w-xs transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-indigo-600 text-xl" icon="solar:star-fall-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 tracking-tight">Voted Excellence 2026</h4>
<p className="text-xs text-slate-500 mt-0.5">Top-rated patient experience</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-200/50 bg-white py-10 relative z-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
<div className="flex flex-col items-center justify-center">
<span className="text-3xl font-semibold text-slate-900 tracking-tighter mb-1">15+</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Years Experience</span>
</div>
<div className="flex flex-col items-center justify-center">
<span className="text-3xl font-semibold text-slate-900 tracking-tighter mb-1">10k</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Smiles Restored</span>
</div>
<div className="flex flex-col items-center justify-center">
<span className="text-3xl font-semibold text-slate-900 tracking-tighter mb-1">4.9</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Average Rating</span>
</div>
<div className="flex flex-col items-center justify-center">
<span className="text-3xl font-semibold text-slate-900 tracking-tighter mb-1">100%</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Digital Workflow</span>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white relative" id="about">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
<div className="lg:col-span-5 lg:sticky lg:top-32">
<h2 className="text-xs font-medium text-indigo-600 tracking-widest uppercase mb-4">Our Philosophy</h2>
<h3 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-6 leading-tight">Rooted in Empathy,<br/>Driven by Science.</h3>
<p className="text-base text-slate-500 leading-relaxed mb-8 max-w-md">
                        We have systematically dismantled the traditional clinic experience to bridge the gap between rigorous medical standards and genuine patient comfort.
                    </p>
<div className="hidden lg:block relative w-full aspect-square rounded-3xl overflow-hidden shadow-md ring-1 ring-slate-200/50 mt-8 group">
<img alt="Precision Instruments" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
<div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
<div className="bg-[#FAFAFA] p-8 sm:p-10 rounded-3xl border border-slate-200/60 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
<iconify-icon className="text-8xl text-indigo-600" icon="solar:leaf-linear" style={{strokeWidth: '1'}}></iconify-icon>
</div>
<p className="text-lg text-slate-700 leading-relaxed mb-6 font-medium relative z-10">
                            AURA was founded on a singular principle: healthcare should never feel intimidating. We recognize that the dental chair often brings apprehension.
                        </p>
<p className="text-base text-slate-500 leading-relaxed relative z-10">
                            By taking the time to understand your unique physiology and personal concerns, our focus remains steadfastly on sustainable, long-term outcomes rather than momentary, reactive fixes. Every instrument used, every light configured, and every protocol followed is chosen specifically to enhance your well-being.
                        </p>
</div>
<div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
<div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center mb-5">
<iconify-icon className="text-indigo-600 text-lg" icon="solar:heart-angle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-base font-medium text-slate-900 tracking-tight mb-2">Human-Centric</h4>
<p className="text-sm text-slate-500 leading-relaxed">Every treatment plan is built collaboratively around your individual lifestyle and emotional needs.</p>
</div>
<div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center mb-5">
<iconify-icon className="text-indigo-600 text-lg" icon="solar:microscope-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-base font-medium text-slate-900 tracking-tight mb-2">Evidence-Based</h4>
<p className="text-sm text-slate-500 leading-relaxed">Clinical decisions driven entirely by peer-reviewed research and the latest precision technology.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#FAFAFA] border-y border-slate-200/50" id="journey">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-xs font-medium text-indigo-600 tracking-widest uppercase mb-4">The Process</h2>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">A Streamlined Journey to Health</h3>
<p className="text-base text-slate-500">We have engineered a frictionless, transparent process from your first greeting to your long-term maintenance.</p>
</div>
<div className="relative">
<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-200 -translate-y-1/2 z-0"></div>
<div className="grid md:grid-cols-3 gap-12 relative z-10">

<div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-lg font-medium absolute -top-6 left-8 shadow-md border-4 border-[#FAFAFA]">1</div>
<h4 className="text-xl font-medium text-slate-900 tracking-tight mt-4 mb-3">Discovery</h4>
<p className="text-sm text-slate-500 leading-relaxed">A zero-pressure consultation involving 3D diagnostic imaging and a thorough discussion of your medical history and aesthetic goals.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-lg font-medium absolute -top-6 left-8 shadow-md border-4 border-[#FAFAFA]">2</div>
<h4 className="text-xl font-medium text-slate-900 tracking-tight mt-4 mb-3">Blueprint</h4>
<p className="text-sm text-slate-500 leading-relaxed">We present a highly detailed, itemized treatment plan outlining clinical requirements, optional enhancements, and exact financial obligations.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-lg font-medium absolute -top-6 left-8 shadow-md border-4 border-[#FAFAFA]">3</div>
<h4 className="text-xl font-medium text-slate-900 tracking-tight mt-4 mb-3">Restoration</h4>
<p className="text-sm text-slate-500 leading-relaxed">Execution of your personalized plan in our sensory-adapted suites, utilizing minimally invasive techniques and uncompromising sterility.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Clinical Competencies</h2>
<p className="text-base text-slate-500">Comprehensive modalities tailored to preserve, restore, and elevate your natural dentition.</p>
</div>

<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors duration-200 flex-shrink-0" href="#book">
                    View Full Catalog
                </a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl bg-[#FAFAFA] border border-slate-200/60 hover:border-indigo-200 hover:bg-white hover:shadow-md transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 flex items-center justify-center mb-6 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-colors">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Preventive &amp; Diagnostic</h4>
<p className="text-sm text-slate-500 leading-relaxed">Comprehensive risk assessments and proactive maintenance protocols designed to preserve your biological structure.</p>
</div>

<div className="group p-8 rounded-3xl bg-[#FAFAFA] border border-slate-200/60 hover:border-indigo-200 hover:bg-white hover:shadow-md transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 flex items-center justify-center mb-6 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-colors">
<iconify-icon className="text-2xl" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Aesthetic Architecture</h4>
<p className="text-sm text-slate-500 leading-relaxed">Meticulously designing balanced, natural-looking profiles tailored to complement your unique facial morphology.</p>
</div>

<div className="group p-8 rounded-3xl bg-[#FAFAFA] border border-slate-200/60 hover:border-indigo-200 hover:bg-white hover:shadow-md transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 flex items-center justify-center mb-6 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-colors">
<iconify-icon className="text-2xl" icon="solar:stars-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Clinical Whitening</h4>
<p className="text-sm text-slate-500 leading-relaxed">Safe, chemically stabilized brightening procedures formulated to revitalize appearance without compromising enamel.</p>
</div>

<div className="group p-8 rounded-3xl bg-[#FAFAFA] border border-slate-200/60 hover:border-indigo-200 hover:bg-white hover:shadow-md transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 flex items-center justify-center mb-6 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-colors">
<iconify-icon className="text-2xl" icon="solar:programming-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Implantology</h4>
<p className="text-sm text-slate-500 leading-relaxed">Biocompatible, structurally sound titanium integration that restores both foundational function and confidence.</p>
</div>

<div className="group p-8 rounded-3xl bg-[#FAFAFA] border border-slate-200/60 hover:border-indigo-200 hover:bg-white hover:shadow-md transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 flex items-center justify-center mb-6 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-colors">
<iconify-icon className="text-2xl" icon="solar:ruler-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Orthodontic Alignment</h4>
<p className="text-sm text-slate-500 leading-relaxed">Precision spatial correction utilizing modern, low-visibility therapeutic systems for optimal occlusion.</p>
</div>

<div className="group p-8 rounded-3xl bg-[#FAFAFA] border border-slate-200/60 hover:border-indigo-200 hover:bg-white hover:shadow-md transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 flex items-center justify-center mb-6 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-colors">
<iconify-icon className="text-2xl" icon="solar:medical-kit-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Endodontic Therapy</h4>
<p className="text-sm text-slate-500 leading-relaxed">Microscope-assisted internal treatments prioritizing tooth preservation and absolute, definitive pain management.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA] border-y border-slate-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">The Environment</h2>
<p className="text-base text-slate-500">Architecturally designed to reduce clinical anxiety and promote a sense of calm from the moment you arrive.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[240px]">
<div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group">
<img alt="Reception" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1629904853716-f0bc54fea4b4?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<p className="text-white font-medium">Patient Lounge</p>
</div>
</div>
<div className="rounded-3xl overflow-hidden relative group">
<img alt="Equipment" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="md:col-span-2 rounded-3xl overflow-hidden relative group">
<img alt="Consultation Room" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="rounded-3xl overflow-hidden relative group bg-indigo-600 p-8 flex flex-col justify-center items-start text-white">
<iconify-icon className="text-3xl mb-4" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-lg font-medium mb-2 tracking-tight">Visit Us</h4>
<p className="text-sm text-indigo-100 mb-4">Located in the heart of the Metropolitan District.</p>
<a className="text-sm font-medium hover:text-indigo-200 transition-colors flex items-center gap-1" href="#">Get Directions <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white" id="team">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Clinical Directors</h2>
<p className="text-base text-slate-500">Board-certified specialists dedicated to advancing the standard of modern dentistry.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group">
<div className="w-full aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-slate-100 relative">
<img alt="Dr. Sarah Chen" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h4 className="text-xl font-medium text-slate-900 tracking-tight">Dr. Sarah Chen, DDS</h4>
<p className="text-sm text-indigo-600 font-medium mb-3">Head of Restorative Dentistry</p>
<p className="text-sm text-slate-500 leading-relaxed">Specializing in biomimetic reconstruction and full-mouth rehabilitation with over a decade of clinical excellence.</p>
</div>

<div className="group">
<div className="w-full aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-slate-100 relative">
<img alt="Dr. Michael Sterling" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h4 className="text-xl font-medium text-slate-900 tracking-tight">Dr. Michael Sterling, DMD</h4>
<p className="text-sm text-indigo-600 font-medium mb-3">Surgical Specialist &amp; Implantology</p>
<p className="text-sm text-slate-500 leading-relaxed">Pioneering minimally invasive surgical techniques and advanced tissue regeneration protocols.</p>
</div>

<div className="group">
<div className="w-full aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-slate-100 relative">
<img alt="Dr. Elena Rostova" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1594824436951-7f1269556d44?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h4 className="text-xl font-medium text-slate-900 tracking-tight">Dr. Elena Rostova, MS</h4>
<p className="text-sm text-indigo-600 font-medium mb-3">Aesthetic Architecture</p>
<p className="text-sm text-slate-500 leading-relaxed">Combining artistic vision with microscopic precision to craft natural, enduring smiles tailored to facial symmetry.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-900"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Patient Experiences</h2>
<p className="text-base text-slate-400">Hear from those who have transitioned to our standard of care.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-3xl">
<div className="flex gap-1 mb-6 text-indigo-400">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-300 leading-relaxed mb-6">"I avoided the dentist for years due to severe anxiety. AURA changed everything. The transparency, the calm environment, and the total lack of judgment made me feel completely safe."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 font-medium">JD</div>
<div className="text-sm font-medium text-white">James D.<br/><span className="text-xs text-slate-400 font-normal">Restorative Patient</span></div>
</div>
</div>

<div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-3xl">
<div className="flex gap-1 mb-6 text-indigo-400">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-300 leading-relaxed mb-6">"The attention to detail here is unmatched. Dr. Rostova didn't just look at my teeth; she looked at my whole facial structure to design veneers that look 100% natural. Pure artistry."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 font-medium">MC</div>
<div className="text-sm font-medium text-white">Maria C.<br/><span className="text-xs text-slate-400 font-normal">Aesthetic Patient</span></div>
</div>
</div>

<div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-3xl">
<div className="flex gap-1 mb-6 text-indigo-400">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-300 leading-relaxed mb-6">"Their diagnostic process is a revelation. Seeing my own 3D scans and having Dr. Sterling explain exactly what was happening gave me total confidence in the implant procedure."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 font-medium">TR</div>
<div className="text-sm font-medium text-white">Thomas R.<br/><span className="text-xs text-slate-400 font-normal">Implantology Patient</span></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div className="lg:sticky lg:top-32">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">The Standard of Care</h2>
<p className="text-base text-slate-500 mb-10 leading-relaxed max-w-md">
                        We do not compromise on the details. Every protocol, environment, and interaction is engineered to foster an atmosphere of trust, safety, and clinical excellence.
                    </p>
<div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200/50">
<img alt="Laboratory Setup" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
<div className="flex flex-col gap-8 pt-4">
<div className="flex gap-5">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-indigo-600 text-xl" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-slate-900 mb-2">Diagnostic Transparency</h4>
<p className="text-sm text-slate-500 leading-relaxed">Utilizing ultra-low dose 3D imaging, we walk you through your anatomical landscape so you fully understand your health status before discussing interventions.</p>
</div>
</div>
<hr className="border-slate-100"/>
<div className="flex gap-5">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-indigo-600 text-xl" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-slate-900 mb-2">Uncompromising Sterility</h4>
<p className="text-sm text-slate-500 leading-relaxed">Our sterilization center operates on hospital-grade infection control protocols, far exceeding state dental board mandates.</p>
</div>
</div>
<hr className="border-slate-100"/>
<div className="flex gap-5">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-indigo-600 text-xl" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-slate-900 mb-2">Calibrated Environment</h4>
<p className="text-sm text-slate-500 leading-relaxed">From acoustic management to ambient lighting, our clinical suites are sensory-adapted to significantly lower autonomic stress responses.</p>
</div>
</div>
<hr className="border-slate-100"/>
<div className="flex gap-5">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-indigo-600 text-xl" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-slate-900 mb-2">Conservative Trajectories</h4>
<p className="text-sm text-slate-500 leading-relaxed">We employ minimally invasive techniques whenever scientifically viable, respecting the integrity of your natural tissues above all else.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]" id="membership">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">AURA Access Membership</h2>
<p className="text-base text-slate-500 max-w-xl mx-auto mb-8">No insurance? No problem. Our comprehensive maintenance plans provide complete preventive care and exclusive priority access.</p>

<div className="flex items-center justify-center gap-4">
<span className="text-sm font-medium text-slate-500">Monthly</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-12 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
</label>
<span className="text-sm font-medium text-slate-900 flex items-center gap-2">
                        Annually 
                        <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-medium tracking-tight">-20%</span>
</span>
</div>
</div>
<div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">

<div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col">
<h4 className="text-lg font-medium text-slate-900 mb-2">Essential Access</h4>
<p className="text-sm text-slate-500 mb-6">Perfect for proactive maintenance and foundational health.</p>
<div className="mb-8">
<span className="text-4xl font-semibold text-slate-900 tracking-tighter">$45</span>
<span className="text-sm text-slate-500">/mo billed annually</span>
</div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm text-slate-600"><iconify-icon className="text-indigo-600 mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon> 2 Comprehensive Exams</li>
<li className="flex items-start gap-3 text-sm text-slate-600"><iconify-icon className="text-indigo-600 mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon> 2 Professional Cleanings</li>
<li className="flex items-start gap-3 text-sm text-slate-600"><iconify-icon className="text-indigo-600 mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon> Annual 3D Imaging</li>
<li className="flex items-start gap-3 text-sm text-slate-600"><iconify-icon className="text-indigo-600 mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon> 10% off restorative treatments</li>
</ul>

<a className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-indigo-600 border border-indigo-200 rounded-full hover:bg-indigo-50 transition-colors duration-200" href="#">
                        Select Essential
                    </a>
</div>

<div className="bg-indigo-600 p-8 rounded-3xl shadow-lg shadow-indigo-600/20 flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
<iconify-icon className="text-8xl text-white" icon="solar:crown-star-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white mb-2 relative z-10">Premium Access</h4>
<p className="text-sm text-indigo-100 mb-6 relative z-10">For those requiring advanced periodontal maintenance.</p>
<div className="mb-8 relative z-10">
<span className="text-4xl font-semibold text-white tracking-tighter">$75</span>
<span className="text-sm text-indigo-200">/mo billed annually</span>
</div>
<ul className="space-y-4 mb-8 flex-grow relative z-10">
<li className="flex items-start gap-3 text-sm text-white"><iconify-icon className="text-indigo-300 mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon> 3 Comprehensive Exams</li>
<li className="flex items-start gap-3 text-sm text-white"><iconify-icon className="text-indigo-300 mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon> 4 Periodontal Cleanings</li>
<li className="flex items-start gap-3 text-sm text-white"><iconify-icon className="text-indigo-300 mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon> Annual 3D Imaging</li>
<li className="flex items-start gap-3 text-sm text-white"><iconify-icon className="text-indigo-300 mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon> 15% off restorative treatments</li>
<li className="flex items-start gap-3 text-sm text-white"><iconify-icon className="text-indigo-300 mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon> 1 Complimentary Whitening</li>
</ul>

<a className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-indigo-600 bg-white rounded-full hover:bg-slate-50 transition-colors duration-200 relative z-10" href="#">
                        Select Premium
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200/50" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12 text-center">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Common Inquiries</h2>
<p className="text-base text-slate-500">Clarity on our operational and clinical protocols.</p>
</div>
<div className="space-y-4">
<details className="group bg-[#FAFAFA] border border-slate-200/60 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden shadow-sm hover:border-slate-300 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-sm text-slate-900 select-none">
                        How do you manage patients with significant dental anxiety?
                        <span className="ml-4 flex-shrink-0 text-slate-400 group-open:rotate-180 transition-transform duration-200">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed">
                        We utilize a phased approach. The initial consultation involves absolutely no clinical intervention—just a conversation and imaging. We establish a signaling system for breaks, utilize sensory-reducing environments, and can provide localized or systemic pharmacological support when clinically appropriate.
                    </div>
</details>
<details className="group bg-[#FAFAFA] border border-slate-200/60 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden shadow-sm hover:border-slate-300 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-sm text-slate-900 select-none">
                        What exactly is involved in the initial consultation?
                        <span className="ml-4 flex-shrink-0 text-slate-400 group-open:rotate-180 transition-transform duration-200">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed">
                        A comprehensive diagnostic workup. This includes ultra-low radiation 3D imaging, a periodontal baseline assessment, an oral cancer screening, and a structural evaluation of each tooth. We then sit down to review the findings on a monitor together, ensuring total transparency.
                    </div>
</details>
<details className="group bg-[#FAFAFA] border border-slate-200/60 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden shadow-sm hover:border-slate-300 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-sm text-slate-900 select-none">
                        Are cosmetic procedures inherently damaging to natural teeth?
                        <span className="ml-4 flex-shrink-0 text-slate-400 group-open:rotate-180 transition-transform duration-200">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed">
                        Historically, yes. However, we strictly adhere to biomimetic principles. Our modern aesthetic protocols—whether bonding or ultra-thin ceramics—are designed to be additive or require microscopic, non-invasive preparation, preserving the vital inner structure of the tooth.
                    </div>
</details>
<details className="group bg-[#FAFAFA] border border-slate-200/60 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden shadow-sm hover:border-slate-300 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-sm text-slate-900 select-none">
                        How do you ensure pricing transparency before treatment?
                        <span className="ml-4 flex-shrink-0 text-slate-400 group-open:rotate-180 transition-transform duration-200">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed">
                        Following your diagnostic review, our clinical coordinators present a highly detailed, itemized treatment plan. This document outlines your clinical requirements, optional aesthetic enhancements, and exact financial obligations—including anticipated insurance contributions—before any scheduling occurs.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-indigo-50 relative overflow-hidden border-y border-indigo-100" id="book">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-6">
<iconify-icon className="text-indigo-600 text-3xl" icon="solar:calendar-add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-6 leading-tight">Begin Your Pathway to<br/>Enduring Oral Health.</h2>
<p className="text-base text-slate-500 mb-10 leading-relaxed max-w-xl mx-auto">
                Reserve a dedicated block of time for a thorough, unhurried evaluation. We look forward to establishing a comprehensive understanding of your needs.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">

<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 hover:scale-[1.02] transition-all duration-200 shadow-md shadow-indigo-600/20" href="#">
                    Schedule New Patient Exam
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-sm" href="#">
                    Current Patient Login
                </a>
</div>
<p className="text-xs text-slate-500 mt-8 flex items-center justify-center gap-2">
<iconify-icon className="text-indigo-600" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                HIPAA Compliant Booking Portal
            </p>
</div>
</section>

<footer className="bg-white pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-indigo-600 text-xl" icon="solar:programming-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-slate-900 font-medium tracking-tighter text-lg uppercase">AURA</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed pr-4">
                        Precision dentistry engineered for longevity, executed with uncompromising empathy and rigorous medical standards.
                    </p>
</div>
<div>
<h5 className="text-xs font-medium text-slate-900 uppercase tracking-widest mb-4">Practice</h5>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-indigo-600 transition-colors" href="#about">Philosophy</a></li>
<li><a className="text-sm text-slate-500 hover:text-indigo-600 transition-colors" href="#team">Clinical Directors</a></li>
<li><a className="text-sm text-slate-500 hover:text-indigo-600 transition-colors" href="#services">Treatments</a></li>
<li><a className="text-sm text-slate-500 hover:text-indigo-600 transition-colors" href="#membership">Membership Plans</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-medium text-slate-900 uppercase tracking-widest mb-4">Contact</h5>
<ul className="space-y-3">
<li className="text-sm text-slate-500 flex items-start gap-2">
<iconify-icon className="mt-0.5 text-indigo-600" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>1420 Premium Blvd, Suite 400<br/>Metropolitan District, NY 10001</span>
</li>
<li className="text-sm text-slate-500 flex items-center gap-2">
<iconify-icon className="text-indigo-600" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            +1 (555) 890-2345
                        </li>
<li className="text-sm text-slate-500 flex items-center gap-2">
<iconify-icon className="text-indigo-600" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            reception@auradental.com
                        </li>
</ul>
</div>
<div>
<h5 className="text-xs font-medium text-slate-900 uppercase tracking-widest mb-4">Hours</h5>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex justify-between"><span>Mon - Thu</span> <span>8:00 AM - 5:00 PM</span></li>
<li className="flex justify-between"><span>Friday</span> <span>8:00 AM - 2:00 PM</span></li>
<li className="flex justify-between"><span>Sat - Sun</span> <span>Closed</span></li>
</ul>
<div className="mt-6 flex gap-4">
<a className="text-slate-400 hover:text-indigo-600 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:instagram-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="text-slate-400 hover:text-indigo-600 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:linkedin-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">
                    © 2026 AURA Precision Dental. All rights reserved.
                </p>
<div className="flex gap-4">
<a className="text-xs text-slate-400 hover:text-indigo-600 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-slate-400 hover:text-indigo-600 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
