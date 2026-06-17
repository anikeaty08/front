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
      

<nav className="fixed top-0 inset-x-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
<i className="h-6 w-6" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-zinc-900">Aura Therapy Centre</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-500 hover:text-emerald-800 transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-zinc-500 hover:text-emerald-800 transition-colors" href="#">About Us</a>
<a className="text-sm font-medium text-zinc-500 hover:text-emerald-800 transition-colors" href="#">Contact Us</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="inline-flex items-center justify-center rounded-lg bg-emerald-900 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-emerald-800 shadow-sm hover:shadow-emerald-900/20" href="#">
                        Integrated Care
                    </a>
</div>

<button className="md:hidden text-zinc-500">
<i className="h-6 w-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</nav>

<main className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 lg:items-center">

<div className="relative z-10 max-w-2xl">
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/50 px-3 py-1 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-sm font-medium text-emerald-800">Accepting new patients for 2024</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-zinc-900 mb-6">
                        Integrated Care for <br className="hidden lg:block"/>
<span className="text-emerald-900/80">Mind, Body &amp; Health</span>
</h1>
<p className="text-xl text-zinc-500 mb-10 leading-relaxed max-w-lg">
                        At Aura Therapy Clinic, we bring together evidence-based therapies and modern wellness treatments to help you feel balanced, energized, and confident.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-900 px-8 text-base font-medium text-white transition-all hover:bg-emerald-800 hover:translate-y-px shadow-lg shadow-emerald-900/10" href="#">
                            Book a Consultation
                        </a>
<a className="inline-flex h-12 items-center justify-center rounded-lg border border-zinc-200 bg-white px-8 text-base font-medium text-zinc-600 transition-all hover:bg-zinc-50 hover:border-zinc-300" href="#">
                            View Treatments
                        </a>
</div>
<div className="mt-12 flex items-center gap-4 text-sm font-medium text-zinc-500">
<div className="flex -space-x-3">
<img alt="Doctor" className="h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Therapist" className="h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Nurse" className="h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>Trusted by 2,000+ local patients</div>
</div>
</div>

<div className="relative">
<div className="absolute -top-24 -right-24 -z-10 h-[500px] w-[500px] rounded-full bg-emerald-50 blur-3xl opacity-60"></div>
<div className="absolute -bottom-12 -left-12 -z-10 h-[300px] w-[300px] rounded-full bg-blue-50 blur-3xl opacity-60"></div>
<div className="relative aspect-[4/3] w-full rounded-2xl bg-zinc-100 overflow-hidden shadow-2xl shadow-zinc-200">
<img alt="Clinic Team" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>

<div className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-white/90 p-6 rounded-xl border border-white/20 shadow-lg">
<div className="flex items-start gap-4">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
<i className="h-6 w-6" data-lucide="heart-pulse" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-zinc-900">Holistic Approach</h3>
<p className="text-sm text-zinc-500 mt-1">Combining medical science with compassionate emotional support.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 bg-zinc-50/50 border-t border-zinc-100">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-4">
<div className="lg:sticky lg:top-32">
<h2 className="text-xs font-semibold uppercase tracking-widest text-emerald-800 mb-4">What We Offer</h2>
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-6">Multidisciplinary services for total wellness.</h3>
<p className="text-lg text-zinc-500 mb-8 leading-relaxed">
                            Our team of healthcare professionals and registered therapists work collaboratively to create personalized care plans that support healing.
                        </p>
<a className="group inline-flex items-center text-sm font-medium text-emerald-800 hover:text-emerald-900" href="#">
                            Explore all services
                            <i className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">

<div className="group relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-900/5 transition-all hover:shadow-md hover:ring-emerald-500/20">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
<i className="h-6 w-6" data-lucide="brain" strokeWidth="1.5"></i>
</div>
<h4 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Mental Health Therapy</h4>
<p className="text-base text-zinc-500 leading-relaxed">Cognitive behavioral therapy and counseling sessions tailored to your mental needs.</p>
</div>

<div className="group relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-900/5 transition-all hover:shadow-md hover:ring-emerald-500/20">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
<i className="h-6 w-6" data-lucide="stethoscope" strokeWidth="1.5"></i>
</div>
<h4 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Physiotherapy</h4>
<p className="text-base text-zinc-500 leading-relaxed">Restorative treatments for injury recovery and chronic pain management.</p>
</div>

<div className="group relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-900/5 transition-all hover:shadow-md hover:ring-emerald-500/20">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
<i className="h-6 w-6" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h4 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Aesthetic Treatments</h4>
<p className="text-base text-zinc-500 leading-relaxed">Non-invasive procedures to rejuvenate your appearance and boost confidence.</p>
</div>

<div className="group relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-900/5 transition-all hover:shadow-md hover:ring-emerald-500/20">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
<i className="h-6 w-6" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h4 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Family Counseling</h4>
<p className="text-base text-zinc-500 leading-relaxed">Supportive environments for couples and families to grow together.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-zinc-100 bg-white pb-12 pt-16">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
<i className="h-5 w-5" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<span className="text-base font-semibold tracking-tight text-zinc-900">Aura</span>
</div>
<p className="text-base text-zinc-500 pr-4">Empowering you to live your healthiest life through integrated medical and therapeutic care.</p>
</div>
<div>
<h3 className="text-sm font-semibold text-zinc-900 mb-4">Clinic</h3>
<ul className="space-y-3">
<li><a className="text-base text-zinc-500 hover:text-emerald-800" href="#">About Us</a></li>
<li><a className="text-base text-zinc-500 hover:text-emerald-800" href="#">Our Team</a></li>
<li><a className="text-base text-zinc-500 hover:text-emerald-800" href="#">Careers</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-zinc-900 mb-4">Services</h3>
<ul className="space-y-3">
<li><a className="text-base text-zinc-500 hover:text-emerald-800" href="#">Therapy</a></li>
<li><a className="text-base text-zinc-500 hover:text-emerald-800" href="#">Physio</a></li>
<li><a className="text-base text-zinc-500 hover:text-emerald-800" href="#">Diagnostics</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-zinc-900 mb-4">Contact</h3>
<ul className="space-y-3">
<li><a className="text-base text-zinc-500 hover:text-emerald-800" href="#">Book Online</a></li>
<li><a className="text-base text-zinc-500 hover:text-emerald-800" href="#">Locations</a></li>
<li><a className="text-base text-zinc-500 hover:text-emerald-800" href="#">Support</a></li>
</ul>
</div>
</div>
<div className="mt-16 border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-base text-zinc-400">© 2024 Aura Therapy Centre. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-zinc-400 hover:text-emerald-800 transition-colors" href="#">
<i className="h-5 w-5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a className="text-zinc-400 hover:text-emerald-800 transition-colors" href="#">
<i className="h-5 w-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="text-zinc-400 hover:text-emerald-800 transition-colors" href="#">
<i className="h-5 w-5" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
