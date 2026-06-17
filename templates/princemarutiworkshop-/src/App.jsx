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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium text-lg tracking-tighter hover:text-zinc-200 transition-colors" href="#">
                PrinceMarutiWorkshop
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#location">Location</a>
<a className="text-emerald-500 hover:text-emerald-400 transition-colors" href="#deploy">How to Publish</a>
</div>
<a className="group flex items-center gap-2 bg-white text-zinc-950 px-4 py-2 rounded-md text-xs font-medium hover:bg-zinc-200 transition-all" href="tel:+918619036101">
<span>Call Now</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:phone-calling-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none mesh-gradient"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Open for service in Rawtsar
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-[1.1] mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-500">
                Precision care for<br/>your vehicle.
            </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Expert automotive services specializing in Maruti Suzuki and general repairs. Located conveniently near Shani Temple, Rawtsar.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-md text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="tel:+918619036101">
<iconify-icon icon="solar:calendar-add-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Book Appointment
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 border border-white/10 bg-zinc-900/50 text-white rounded-md text-sm font-medium hover:bg-zinc-900 hover:border-white/20 transition-colors flex items-center justify-center gap-2" href="#location">
<iconify-icon icon="solar:map-arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Get Directions
                </a>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left">
<div className="text-2xl font-medium text-white mb-1 tracking-tight">100%</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Satisfaction</div>
</div>
<div className="text-center md:text-left">
<div className="text-2xl font-medium text-white mb-1 tracking-tight">Expert</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Technicians</div>
</div>
<div className="text-center md:text-left">
<div className="text-2xl font-medium text-white mb-1 tracking-tight">Genuine</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Parts</div>
</div>
<div className="text-center md:text-left">
<div className="text-2xl font-medium text-white mb-1 tracking-tight">24/7</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Support</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="services">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Our Expertise</h2>
<p className="text-zinc-400 max-w-md font-light">Comprehensive solutions for your car's longevity and performance.</p>
</div>
<a className="text-sm text-white hover:text-zinc-300 transition-colors flex items-center gap-1 group" href="tel:+918619036101">
                Inquire specific service 
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all hover:bg-zinc-900/60">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Engine Diagnostics</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">Advanced computerized testing to identify and fix engine issues with precision.</p>
</div>

<div className="group p-8 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all hover:bg-zinc-900/60">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:wheel-angle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Wheel Alignment</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">Precision alignment and balancing to ensure smooth driving and tire longevity.</p>
</div>

<div className="group p-8 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all hover:bg-zinc-900/60">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:bath-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Wash &amp; Detailing</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">Complete interior and exterior cleaning to restore your vehicle's showroom shine.</p>
</div>

<div className="group p-8 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all hover:bg-zinc-900/60">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Periodic Maintenance</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">Scheduled oil changes, filter replacements, and safety checks for Maruti vehicles.</p>
</div>

<div className="group p-8 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all hover:bg-zinc-900/60">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Electrical Repair</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">Battery replacement, wiring fixes, and lighting upgrades handled by experts.</p>
</div>

<div className="group p-8 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all hover:bg-zinc-900/60">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:hammer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Denting &amp; Painting</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">High-quality bodywork repair to fix scratches, dents, and accident damage.</p>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative" id="location">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 items-start">

<div className="space-y-12">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Visit Workshop</h2>
<p className="text-zinc-400 font-light max-w-md">
                            We are conveniently located in Rawtsar. Drop by for a quick checkup or schedule a detailed service.
                        </p>
</div>
<div className="space-y-8">

<div className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 text-white">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-2">Location</h4>
<address className="not-italic text-zinc-400 font-light text-sm leading-6">
                                    Chungi No. 3, Sardarsaher Road,<br/>
                                    Near Shani Temple,<br/>
                                    Rawtsar Tehsil, Hanumangarh District,<br/>
                                    Rajasthan 335524, India
                                </address>
</div>
</div>

<div className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 text-white">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-2">Contact</h4>
<a className="block text-xl text-white tracking-tight hover:text-zinc-300 transition-colors font-light" href="tel:+918619036101">
                                    +91 86190 36101
                                </a>
<p className="text-xs text-zinc-500 mt-1">Available Mon-Sat, 9am - 7pm</p>
</div>
</div>
</div>
</div>

<div className="relative w-full h-[400px] bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden group">

<div className="absolute inset-0 opacity-20">
<div className="absolute top-[20%] left-0 w-full h-[1px] bg-zinc-700"></div>
<div className="absolute top-[60%] left-0 w-full h-[1px] bg-zinc-700"></div>
<div className="absolute top-0 left-[30%] h-full w-[1px] bg-zinc-700"></div>
<div className="absolute top-0 left-[70%] h-full w-[1px] bg-zinc-700"></div>

<div className="absolute top-[40%] left-0 w-full h-8 bg-zinc-800 -rotate-6"></div>
<div className="absolute top-0 left-[50%] w-8 h-full bg-zinc-800 rotate-12"></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<div className="relative">
<div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-md animate-pulse"></div>
<div className="w-4 h-4 bg-white rounded-full border-4 border-emerald-500 relative z-10"></div>
</div>
<div className="mt-4 bg-zinc-950/90 backdrop-blur border border-white/10 px-4 py-2 rounded-lg text-xs font-medium text-white shadow-2xl">
                            PrinceMarutiWorkshop
                        </div>
</div>
<div className="absolute bottom-6 left-6 right-6">
<a className="w-full block bg-white text-black text-center py-3 rounded-md text-sm font-medium hover:bg-zinc-200 transition-colors" href="https://www.google.com/maps/search/?api=1&amp;query=Chungi+No.+3,+Sardarsaher+Road,+Near+Shani+Temple,+Rawtsar+Tehsil,+Hanumangarh+District,+Rajasthan+335524,+India" target="_blank">
                            Open in Google Maps
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-2xl font-medium text-white tracking-tight mb-2">Request Service</h2>
<p className="text-zinc-500 text-sm">Fill out the form below and we will get back to you.</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault();">
<div className="grid md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs text-zinc-500 uppercase tracking-wider font-medium ml-1">Name</label>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all placeholder:text-zinc-700" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500 uppercase tracking-wider font-medium ml-1">Phone</label>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all placeholder:text-zinc-700" placeholder="+91" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500 uppercase tracking-wider font-medium ml-1">Service Type</label>
<div className="relative">
<select className="w-full bg-zinc-900/50 border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all appearance-none cursor-pointer">
<option>General Service</option>
<option>Engine Repair</option>
<option>Denting/Painting</option>
<option>Other</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<button className="w-full bg-white text-zinc-950 font-medium py-3 rounded-md mt-6 hover:bg-zinc-200 transition-colors text-sm" type="submit">
                Submit Request
            </button>
</form>
</section>

<section className="py-24 bg-zinc-900/20 border-t border-white/5" id="deploy">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<span className="text-emerald-500 text-xs font-medium uppercase tracking-widest mb-2 block">Quick Guide</span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">How to Publish This Website</h2>
<p className="text-zinc-400 max-w-2xl font-light">
                    This entire page is contained in a single HTML file. Follow these steps to put it online for free in under 2 minutes.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="relative p-6 rounded-xl border border-white/5 bg-zinc-900/40">
<div className="absolute -top-4 -left-4 w-8 h-8 bg-zinc-800 border border-white/10 rounded-full flex items-center justify-center text-white font-medium text-sm">1</div>
<div className="mb-4 text-white">
<iconify-icon icon="solar:code-file-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Save the Code</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                        Copy the entire code from this block and save it as a file named <code className="bg-white/10 px-1 py-0.5 rounded text-white text-xs">index.html</code> on your computer.
                    </p>
</div>

<div className="relative p-6 rounded-xl border border-white/5 bg-zinc-900/40">
<div className="absolute -top-4 -left-4 w-8 h-8 bg-zinc-800 border border-white/10 rounded-full flex items-center justify-center text-white font-medium text-sm">2</div>
<div className="mb-4 text-white">
<iconify-icon icon="solar:cloud-upload-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Drag &amp; Drop</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                        Go to <a className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white" href="https://netlify.com" target="_blank">Netlify Drop</a> or <a className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white" href="https://vercel.com" target="_blank">Vercel</a>. Create a free account and drag your <code className="bg-white/10 px-1 py-0.5 rounded text-white text-xs">index.html</code> file (or its folder) into the upload area.
                    </p>
</div>

<div className="relative p-6 rounded-xl border border-white/5 bg-zinc-900/40">
<div className="absolute -top-4 -left-4 w-8 h-8 bg-zinc-800 border border-white/10 rounded-full flex items-center justify-center text-white font-medium text-sm">3</div>
<div className="mb-4 text-white">
<iconify-icon icon="solar:rocket-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">You're Live!</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                        The service will generate a URL (e.g., <code>princemaruti.netlify.app</code>). You can share this link immediately or connect your own domain later.
                    </p>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black">
<span className="font-bold text-xs tracking-tighter">P</span>
</div>
<span className="text-zinc-400 text-sm font-medium tracking-tight">PrinceMarutiWorkshop</span>
</div>
<div className="text-xs text-zinc-600 font-light">
                © 2023 PrinceMarutiWorkshop. All rights reserved.
            </div>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="https://wa.me/918619036101">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
