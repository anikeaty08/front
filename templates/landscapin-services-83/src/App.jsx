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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
<span className="font-semibold text-sm tracking-tighter">CL</span>
</div>
<span className="font-semibold text-slate-900 tracking-tight text-sm">Carrillo's Landscaping</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-emerald-600 transition-colors" href="#services">Services</a>
<a className="hover:text-emerald-600 transition-colors" href="#why-us">Why Us</a>
<a className="hover:text-emerald-600 transition-colors" href="#gallery">Projects</a>
<a className="hover:text-emerald-600 transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="tel:3604410004">
<span className="iconify" data-icon="lucide:phone" data-width="14"></span>
                    (360) 441-0004
                </a>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium px-4 py-2 rounded-full transition-all shadow-sm hover:shadow-md active:scale-95" href="#contact">
                    Get a Free Quote
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Now booking projects for Spring/Summer 2024
                </div>
<h1 className="text-4xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                    Beautiful landscapes built for Bellingham homes.
                </h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">
                    Expert hardscaping and landscaping services in Whatcom County. We specialize in durable concrete pavers, retaining walls, and custom outdoor spaces designed to withstand Pacific Northwest weather.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm px-6 py-3 rounded-lg shadow-sm hover:shadow-lg hover:shadow-emerald-600/20 transition-all active:scale-[0.98]" href="#contact">
                        Request Free Estimate
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="inline-flex justify-center items-center gap-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-medium text-sm px-6 py-3 rounded-lg transition-all hover:bg-slate-50" href="#gallery">
                        View Recent Projects
                    </a>
</div>
<div className="mt-8 flex items-center gap-4 text-xs text-slate-400">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-400"></div>
</div>
<p>Trusted by homeowners in<br/><span className="text-slate-600 font-medium">Bellingham, Ferndale &amp; Lynden</span></p>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 bg-slate-100 relative group">

<img alt="Bellingham Landscaping Pavers" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-fade-in-up">
<div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
<span className="iconify" data-icon="lucide:map-pin" data-width="20"></span>
</div>
<div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Serving</div>
<div className="text-sm font-semibold text-slate-900">Whatcom County</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="why-us">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Why Carrillo's Landscaping?</h2>
<p className="text-slate-500">We combine local expertise with premium materials to build outdoor spaces that last a lifetime.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
<span className="iconify" data-icon="lucide:hammer" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Built to Last</h3>
<p className="text-sm text-slate-500 leading-relaxed">We use high-grade concrete, stone, and drainage techniques specifically for the wet Pacific Northwest climate to prevent shifting and cracking.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center mb-4">
<span className="iconify" data-icon="lucide:sprout" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Local Expertise</h3>
<p className="text-sm text-slate-500 leading-relaxed">Born and raised in the area. We understand Bellingham's soil composition, local plant hardiness zones, and permit requirements.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center mb-4">
<span className="iconify" data-icon="lucide:user-check" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Owner Involved</h3>
<p className="text-sm text-slate-500 leading-relaxed">No outsourcing. The owner is present on every job site to ensure quality control, clear communication, and timely completion.</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<span className="text-emerald-600 font-medium text-sm tracking-wide uppercase">Our Expertise</span>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mt-2">Comprehensive Hardscaping Services</h2>
</div>
<a className="text-sm font-medium text-slate-900 hover:text-emerald-600 flex items-center gap-1 transition-colors" href="#contact">
                    Get a custom quote <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative rounded-2xl overflow-hidden bg-slate-100 aspect-[4/5] border border-slate-200">
<img alt="Concrete Pavers" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="text-emerald-400 mb-2">
<span className="iconify" data-icon="lucide:layout-grid" data-width="24"></span>
</div>
<h3 className="text-white font-semibold text-lg mb-1">Concrete Pavers</h3>
<p className="text-slate-300 text-xs leading-relaxed mb-4">Driveways, patios, and pool decks installed with proper base preparation for longevity.</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-slate-100 aspect-[4/5] border border-slate-200">
<img alt="Retaining Walls" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="text-emerald-400 mb-2">
<span className="iconify" data-icon="lucide:layers" data-width="24"></span>
</div>
<h3 className="text-white font-semibold text-lg mb-1">Retaining Walls</h3>
<p className="text-slate-300 text-xs leading-relaxed mb-4">Structural and decorative walls to manage slopes, prevent erosion, and create usable space.</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-slate-100 aspect-[4/5] border border-slate-200">
<img alt="Stairs &amp; Steps" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="text-emerald-400 mb-2">
<span className="iconify" data-icon="lucide:align-vertical-space-around" data-width="24"></span>
</div>
<h3 className="text-white font-semibold text-lg mb-1">Custom Stairs</h3>
<p className="text-slate-300 text-xs leading-relaxed mb-4">Safe, elegant stone or concrete stairs that integrate seamlessly with your landscape.</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-slate-100 aspect-[4/5] border border-slate-200">
<img alt="Walkways" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="text-emerald-400 mb-2">
<span className="iconify" data-icon="lucide:footprints" data-width="24"></span>
</div>
<h3 className="text-white font-semibold text-lg mb-1">Walkways</h3>
<p className="text-slate-300 text-xs leading-relaxed mb-4">Inviting paths that improve curb appeal and connectivity around your property.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white" id="gallery">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="md:w-1/3">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium mb-6">
<span className="iconify" data-icon="lucide:camera" data-width="14"></span>
                        Gallery
                    </div>
<h2 className="text-3xl font-semibold tracking-tight mb-6">Transforming Bellingham Yards.</h2>
<p className="text-slate-400 mb-8 leading-relaxed">
                        From reclaiming unusable slopes with sturdy retaining walls to creating the perfect summer patio. See how we help locals enjoy their outdoor space.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
<span className="iconify" data-icon="lucide:check" data-width="14"></span>
</div>
<div>
<h4 className="font-medium text-sm">Site Cleanup &amp; Prep</h4>
<p className="text-xs text-slate-500 mt-1">We handle all excavation and removal.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
<span className="iconify" data-icon="lucide:check" data-width="14"></span>
</div>
<div>
<h4 className="font-medium text-sm">Design Consultation</h4>
<p className="text-xs text-slate-500 mt-1">Free walkthroughs to discuss your vision.</p>
</div>
</div>
</div>
</div>
<div className="md:w-2/3 w-full">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4">
<img alt="Bellingham Patio Project" className="rounded-lg w-full h-48 object-cover bg-slate-800 border border-slate-700" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Garden Walkway" className="rounded-lg w-full h-64 object-cover bg-slate-800 border border-slate-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="space-y-4 pt-8">
<img alt="Retaining Wall Construction" className="rounded-lg w-full h-64 object-cover bg-slate-800 border border-slate-700" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="bg-emerald-900/30 border border-emerald-900/50 rounded-lg w-full h-48 flex items-center justify-center p-6 text-center">
<div>
<div className="text-3xl font-bold text-emerald-400 mb-1">150+</div>
<div className="text-xs text-emerald-200">Projects Completed<br/>in Whatcom County</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-slate-200">
<div className="max-w-6xl mx-auto px-6">
<div className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-200">
<div className="grid lg:grid-cols-2 gap-12">
<div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4">Proudly Serving Whatcom County</h2>
<p className="text-slate-500 mb-6 text-sm leading-relaxed">
                            We aren't just contractors; we are your neighbors. We understand the specific challenges of Bellingham terrain—from the rocky soil of Alabama Hill to the drainage needs in the Tweed Twenty.
                        </p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600">Bellingham</span>
<span className="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600">Ferndale</span>
<span className="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600">Lynden</span>
<span className="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600">Blaine</span>
<span className="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600">Sudden Valley</span>
</div>
<div className="flex items-center gap-2 text-emerald-600 font-medium text-sm">
<span className="iconify" data-icon="lucide:shield-check" data-width="18"></span>
                            Licensed, Bonded &amp; Insured
                        </div>
</div>
<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
<span className="iconify" data-icon="lucide:quote" data-width="20"></span>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm">Michael R.</h4>
<div className="text-xs text-slate-500">Fairhaven, Bellingham</div>
</div>
<div className="ml-auto flex text-amber-400">
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed italic">
                            "Carrillo's transformed our muddy backyard into a beautiful paver patio. They were on time, incredibly polite, and cleaned up perfectly every day. Highly recommend for anyone in Bellingham needing honest work."
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group bg-white border border-slate-200 rounded-lg open:ring-2 open:ring-emerald-500/10 transition-all">
<summary className="flex justify-between items-center cursor-pointer p-5 font-medium text-slate-900">
                        Do you provide free estimates?
                        <span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-slate-500 text-sm px-5 pb-5 leading-relaxed">
                        Yes, we offer free, no-obligation estimates. We'll come to your property, assess your needs, and provide a transparent quote for the project.
                    </div>
</details>

<details className="group bg-white border border-slate-200 rounded-lg open:ring-2 open:ring-emerald-500/10 transition-all">
<summary className="flex justify-between items-center cursor-pointer p-5 font-medium text-slate-900">
                        Do you handle permits for retaining walls?
                        <span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-slate-500 text-sm px-5 pb-5 leading-relaxed">
                        Yes. For retaining walls over 4 feet or projects requiring specific drainage alterations, we help navigate the permitting process with the City of Bellingham or Whatcom County.
                    </div>
</details>

<details className="group bg-white border border-slate-200 rounded-lg open:ring-2 open:ring-emerald-500/10 transition-all">
<summary className="flex justify-between items-center cursor-pointer p-5 font-medium text-slate-900">
                        How long does a typical paver project take?
                        <span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-slate-500 text-sm px-5 pb-5 leading-relaxed">
                        Most residential patios and walkways are completed within 3 to 5 days, depending on size and weather conditions. We work consecutively on your project until it is finished.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="contact">
<div className="max-w-xl mx-auto px-6">
<div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 p-8">
<div className="text-center mb-8">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Request a Free Quote</h2>
<p className="text-slate-500 text-sm mt-2">Fill out the form below or call us at <a className="text-emerald-600 font-medium hover:underline" href="tel:3604410004">(360) 441-0004</a>.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700" htmlFor="name">Name</label>
<input className="w-full bg-white border border-slate-200 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-slate-300" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700" htmlFor="phone">Phone</label>
<input className="w-full bg-white border border-slate-200 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-slate-300" id="phone" placeholder="(360) 555-0123" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700" htmlFor="email">Email</label>
<input className="w-full bg-white border border-slate-200 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-slate-300" id="email" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700" htmlFor="service">Interested In</label>
<div className="relative">
<select className="w-full bg-white border border-slate-200 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-600" id="service">
<option>General Inquiry</option>
<option>Paver Patio / Walkway</option>
<option>Retaining Wall</option>
<option>Stairs / Steps</option>
<option>Full Landscape Design</option>
</select>
<div className="absolute right-3 top-2.5 pointer-events-none text-slate-400">
<span className="iconify" data-icon="lucide:chevron-down" data-width="14"></span>
</div>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700" htmlFor="message">Project Details</label>
<textarea className="w-full bg-white border border-slate-200 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-slate-300" id="message" placeholder="Tell us about your project..." rows="3"></textarea>
</div>
<button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm py-3 rounded-lg shadow-sm hover:shadow-lg hover:shadow-emerald-600/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 mt-2" type="button">
                        Send Request
                        <span className="iconify" data-icon="lucide:send" data-width="14"></span>
</button>
<p className="text-xs text-center text-slate-400 mt-4">We usually reply within 24 hours.</p>
</form>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-slate-200">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-emerald-600 rounded flex items-center justify-center text-white text-xs font-bold">CL</div>
<span className="font-semibold text-slate-900 tracking-tight">Carrillo's Landscaping</span>
</div>
<p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
                        Professional hardscape and landscape construction serving Bellingham and Whatcom County. Quality craftsmanship you can walk on.
                    </p>
<div className="flex gap-4">

<a className="text-slate-400 hover:text-emerald-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="20"></span></a>
<a className="text-slate-400 hover:text-emerald-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="20"></span></a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Services</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">Concrete Pavers</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Retaining Walls</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Walkways &amp; Paths</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Stairs</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Contact</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:phone" data-width="14"></span>
<a className="hover:text-emerald-600 transition-colors" href="tel:3604410004">(360) 441-0004</a>
</li>
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:mail" data-width="14"></span>
<a className="hover:text-emerald-600 transition-colors" href="mailto:info@carrilloslandscaping.com">Email Us</a>
</li>
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:map-pin" data-width="14"></span>
                            Bellingham, WA
                        </li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2024 Carrillo's Landscaping. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
