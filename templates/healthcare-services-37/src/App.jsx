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


document.write(new Date().getFullYear())
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
      

<nav className="sticky top-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-neutral-200/60">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-neutral-900 text-white rounded flex items-center justify-center">
<span className="tracking-tighter font-medium text-sm">JM</span>
</div>
<span className="text-base font-normal hidden sm:block">JoLynn MacLeod</span>
</div>
<div className="hidden md:flex items-center gap-8 text-base font-normal text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#expertise">Therapies</a>
<a className="hover:text-neutral-900 transition-colors" href="#education">Education</a>
<a className="hover:text-neutral-900 transition-colors" href="#about">About Kleos</a>
</div>
<a className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-neutral-900 text-white text-sm font-normal hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-1 focus:ring-offset-[#FAFAFA]" href="#contact">
                Partner With Me
            </a>
</div>
</nav>
<main className="flex-grow">

<section className="relative pt-24 pb-24 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-neutral-200/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

<div className="flex-1 text-center md:text-left">
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-200 text-sm font-medium text-neutral-600 mb-8 hover:bg-neutral-50 transition-colors shadow-sm" href="https://kleoshealthcare.com/" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-base" icon="solar:heart-pulse-linear"></iconify-icon>
                        Kleos Healthcare Territory Manager
                    </a>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 mb-6 leading-[1.1]">
                        Advanced Regenerative <br className="hidden lg:block"/> Protocols for Clinics.
                    </h1>
<p className="text-lg md:text-xl text-neutral-500 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
                        I partner with medical and aesthetic practices to integrate clinical-grade Exosome and PDRN therapies, supporting patient outcomes through dedicated education and practical guidance.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-6 rounded-lg bg-neutral-900 text-white text-base font-normal hover:bg-neutral-800 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2" href="#contact">
                            Schedule a Clinic Visit
                        </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-6 rounded-lg bg-white border border-neutral-200 text-neutral-700 text-base font-normal hover:bg-neutral-50 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:ring-offset-2" href="#expertise">
                            Explore Therapies
                            <iconify-icon className="text-base ml-2 text-neutral-400" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="flex-1 w-full max-w-sm relative">
<div className="absolute -inset-4 bg-neutral-100/80 border border-neutral-200/60 rounded-[2rem] -z-10 transform rotate-3 transition-transform hover:rotate-6 duration-500"></div>
<img alt="JoLynn MacLeod" className="aspect-[4/5] bg-white w-full h-auto object-cover border-neutral-200/80 border rounded-2xl shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7f32af7d-0490-4f2d-9e7e-a891f267f6ac_800w.jpg"/>
</div>
</div>
</section>

<section className="bg-white border-neutral-200/60 border-t pt-24 pr-6 pb-24 pl-6" id="expertise">
<div className="max-w-5xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight text-neutral-900 mb-4">Core Modalities</h2>
<p className="text-base text-neutral-500 max-w-xl leading-relaxed">Focusing on foundational cellular science to support healing, manage downtime, and complement aesthetic procedures.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group relative p-10 rounded-2xl border border-neutral-200 bg-[#FAFAFA] hover:bg-white hover:border-neutral-300 transition-all duration-300 shadow-sm hover:shadow-md">
<div className="w-14 h-14 rounded-xl bg-white border border-neutral-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
<iconify-icon className="text-3xl text-neutral-700" icon="solar:test-tube-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-neutral-900 mb-4">Exosome Therapy</h3>
<p className="text-base text-neutral-500 leading-relaxed mb-8">
                            Next-generation cellular signaling. Exosomes deliver targeted growth factors, mRNA, and proteins to orchestrate tissue repair, manage inflammation, and improve skin quality and hair restoration protocols.
                        </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-base text-neutral-600">
<iconify-icon className="text-xl mt-0.5 text-neutral-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Accelerated post-procedure healing</span>
</li>
<li className="flex items-start gap-3 text-base text-neutral-600">
<iconify-icon className="text-xl mt-0.5 text-neutral-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Enhanced collagen and elastin synthesis</span>
</li>
<li className="flex items-start gap-3 text-base text-neutral-600">
<iconify-icon className="text-xl mt-0.5 text-neutral-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Standardized, pure formulations</span>
</li>
</ul>
</div>

<div className="group relative p-10 rounded-2xl border border-neutral-200 bg-[#FAFAFA] hover:bg-white hover:border-neutral-300 transition-all duration-300 shadow-sm hover:shadow-md">
<div className="w-14 h-14 rounded-xl bg-white border border-neutral-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
<iconify-icon className="text-3xl text-neutral-700" icon="solar:medical-kit-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-neutral-900 mb-4">PDRN Integration</h3>
<p className="text-base text-neutral-500 leading-relaxed mb-8">
                            Polydeoxyribonucleotide (PDRN) works at the DNA level to stimulate microcirculation, promote angiogenesis, and deeply rejuvenate tissues. An essential tool for skin restructuring and scar management.
                        </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-base text-neutral-600">
<iconify-icon className="text-xl mt-0.5 text-neutral-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Deep dermal bio-revitalization</span>
</li>
<li className="flex items-start gap-3 text-base text-neutral-600">
<iconify-icon className="text-xl mt-0.5 text-neutral-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Compatible with energy-based devices</span>
</li>
<li className="flex items-start gap-3 text-base text-neutral-600">
<iconify-icon className="text-xl mt-0.5 text-neutral-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Potent anti-inflammatory properties</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="education">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
<div className="flex-1">
<span className="text-sm font-medium tracking-wider uppercase text-neutral-400 mb-4 block">Role &amp; Approach</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-6">An educator and partner for your practice.</h2>
<p className="text-base text-neutral-500 mb-6 leading-relaxed">
                        Successful integration of regenerative medicine requires deep understanding. My primary focus is educating providers and staff on the science, protocols, and clinical applications of Kleos Healthcare products.
                    </p>
<p className="text-base text-neutral-500 leading-relaxed mb-10">
                        From detailed in-clinic training sessions to ongoing support for complex cases, I ensure your team has the knowledge and confidence to deliver results safely.
                    </p>
<div className="grid grid-cols-2 gap-5">
<div className="p-5 rounded-xl bg-white border border-neutral-200">
<iconify-icon className="text-2xl text-neutral-900 mb-3" icon="solar:users-group-rounded-linear"></iconify-icon>
<h4 className="text-base font-medium text-neutral-900 mb-1">Staff Training</h4>
<p className="text-sm text-neutral-500">Comprehensive onboarding</p>
</div>
<div className="p-5 rounded-xl bg-white border border-neutral-200">
<iconify-icon className="text-2xl text-neutral-900 mb-3" icon="solar:document-text-linear"></iconify-icon>
<h4 className="text-base font-medium text-neutral-900 mb-1">Protocol Design</h4>
<p className="text-sm text-neutral-500">Customized treatment plans</p>
</div>
</div>
</div>
<div className="flex-1 w-full relative">
<div className="aspect-square max-w-md mx-auto rounded-[2rem] bg-neutral-100/50 border border-neutral-200 p-10 flex flex-col justify-center items-center text-center shadow-inner relative overflow-hidden">
<div className="absolute -right-8 -top-8 w-40 h-40 bg-white rounded-full blur-2xl opacity-60"></div>
<div className="absolute -left-8 -bottom-8 w-48 h-48 bg-neutral-200/50 rounded-full blur-3xl opacity-60"></div>
<div className="w-20 h-20 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center mb-8 shadow-sm z-10">
<iconify-icon className="text-5xl text-neutral-700" icon="solar:medal-ribbon-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-neutral-900 mb-3 z-10">Evidence-Based</h3>
<p className="text-base text-neutral-500 max-w-xs z-10 leading-relaxed">Committed to providing clinical data and scientific literature to support all treatment protocols.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-200 bg-white" id="contact">
<div className="max-w-xl mx-auto">
<div className="text-center mb-10">
<h2 className="text-3xl font-medium tracking-tight text-neutral-900 mb-4">Interested in adding these therapies?</h2>
<p className="text-base text-neutral-500 mb-10">Reach out to schedule a consultation, request product literature, or discuss training opportunities for your clinic.</p>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
<a className="group flex flex-col items-center p-6 bg-[#FAFAFA] border border-neutral-200 rounded-2xl hover:bg-white hover:border-neutral-300 transition-all shadow-sm hover:shadow-md" href="mailto:JoLynn.m@kleoshealthcare.com">
<div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center mb-4 group-hover:-translate-y-1 transition-transform shadow-sm">
<iconify-icon className="text-2xl text-neutral-700" icon="solar:letter-linear"></iconify-icon>
</div>
<span className="text-base font-medium text-neutral-900 mb-1">Email Me</span>
<span className="text-sm text-neutral-500">JoLynn.m@kleoshealthcare.com</span>
</a>
<a className="group flex flex-col items-center p-6 bg-[#FAFAFA] border border-neutral-200 rounded-2xl hover:bg-white hover:border-neutral-300 transition-all shadow-sm hover:shadow-md" href="tel:+16044426785">
<div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center mb-4 group-hover:-translate-y-1 transition-transform shadow-sm">
<iconify-icon className="text-2xl text-neutral-700" icon="solar:phone-linear"></iconify-icon>
</div>
<span className="text-base font-medium text-neutral-900 mb-1">Call or Text</span>
<span className="text-sm text-neutral-500">604-442-6785</span>
</a>
</div>
<div className="flex items-center gap-4 mb-10">
<div className="h-px bg-neutral-200 flex-1"></div>
<span className="text-sm text-neutral-400 font-medium">Or send a message</span>
<div className="h-px bg-neutral-200 flex-1"></div>
</div>
</div>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-sm font-medium text-neutral-700" htmlFor="firstName">First Name</label>
<input className="w-full px-4 py-2.5 text-base bg-[#FAFAFA] border border-neutral-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 transition-colors placeholder:text-neutral-400" id="firstName" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-neutral-700" htmlFor="lastName">Last Name</label>
<input className="w-full px-4 py-2.5 text-base bg-[#FAFAFA] border border-neutral-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 transition-colors placeholder:text-neutral-400" id="lastName" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-neutral-700" htmlFor="email">Work Email</label>
<input className="w-full px-4 py-2.5 text-base bg-[#FAFAFA] border border-neutral-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 transition-colors placeholder:text-neutral-400" id="email" placeholder="jane@clinic.com" type="email"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-neutral-700" htmlFor="clinic">Clinic Name</label>
<input className="w-full px-4 py-2.5 text-base bg-[#FAFAFA] border border-neutral-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 transition-colors placeholder:text-neutral-400" id="clinic" placeholder="Aesthetics Medical" type="text"/>
</div>
<div className="space-y-2 relative">
<label className="block text-sm font-medium text-neutral-700" htmlFor="interest">Primary Interest</label>
<div className="relative">
<select className="w-full px-4 py-2.5 text-base bg-[#FAFAFA] border border-neutral-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 transition-colors appearance-none text-neutral-700" id="interest">
<option>Select an option...</option>
<option>Exosome Therapy Information</option>
<option>PDRN Products</option>
<option>In-Clinic Training</option>
<option>General Inquiry</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-500">
<iconify-icon className="text-base" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-neutral-700" htmlFor="message">Message</label>
<textarea className="w-full px-4 py-2.5 text-base bg-[#FAFAFA] border border-neutral-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 transition-colors placeholder:text-neutral-400 resize-none" id="message" placeholder="Tell me about your practice and goals..." rows="4"></textarea>
</div>
<button className="w-full h-12 bg-neutral-900 text-white rounded-md text-base font-normal hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 mt-2" type="button">
                        Send Message
                    </button>
<p className="text-sm text-neutral-400 text-center mt-6">
                        By submitting, you agree to be contacted regarding Kleos Healthcare products.
                    </p>
</form>
</div>
</section>
</main>

<footer className="bg-[#FAFAFA] border-t border-neutral-200 py-12 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-neutral-900 text-white rounded flex items-center justify-center">
<span className="tracking-tighter font-medium text-sm">JM</span>
</div>
<span className="text-base font-normal text-neutral-900">JoLynn MacLeod</span>
</div>
<div className="text-sm text-neutral-500 flex flex-wrap justify-center gap-6">
<span className="flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:buildings-linear"></iconify-icon>
                    Territory Manager
                </span>
<a className="hover:text-neutral-900 transition-colors flex items-center gap-2" href="https://kleoshealthcare.com/" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-base" icon="solar:global-linear"></iconify-icon>
                    Kleos Healthcare
                </a>
</div>
<p className="text-sm text-neutral-400">
                © 20262026 JoLynn MacLeod. All rights reserved.
            </p>
</div>
</footer>

    </>
  );
}
