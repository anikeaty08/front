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



        // Fallback for Lucide if needed, though Iconify is primary for visual elements now
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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="relative w-10 h-10 overflow-hidden rounded-lg bg-blue-700 flex items-center justify-center text-white">
<iconify-icon height="24" icon="solar:bolt-circle-bold-duotone" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-slate-900 text-lg font-bold tracking-tight leading-none">Coates</span>
<span className="text-slate-500 text-xs font-medium tracking-wide uppercase">Electrical &amp; Instrumentation</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#services">Services</a>
<a className="text-sm text-slate-600 hover:text-blue-600 transition-colors font-medium" href="#team">Our Team</a>
<a className="text-sm text-slate-600 hover:text-blue-600 transition-colors font-medium" href="#reviews">Reviews</a>
<a className="text-sm text-slate-600 hover:text-blue-600 transition-colors font-medium" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-slate-600 text-sm font-medium hover:text-blue-600 transition-colors" href="tel:8014763139">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
<span className="">(801) 476-3139</span>
</a>
<a className="bg-slate-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2" href="https://www.google.com/maps/dir//2505+S+2050+W,+West+Haven,+UT+84401" target="_blank">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                    Get Directions
                </a>
</div>
</div>
</header>

<section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">

<div className="absolute inset-0 z-0">
<img alt="Industrial Electrical Engineering" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mb-6">
<span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
<span className="text-blue-100 text-xs font-medium tracking-wide uppercase">Open Today • 8:00 AM</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                    Industrial power &amp; control systems.
                </h1>
<p className="text-xl text-slate-300 mb-10 font-light max-w-xl leading-relaxed">
                    Full service electrical contractor specializing in industrial electrical, communications, instrumentation, and power systems in West Haven, Utah.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20 text-base group" href="tel:8014763139">
<iconify-icon icon="solar:phone-calling-bold" width="20"></iconify-icon>
                        Call (801) 476-3139
                    </a>
<a className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/20 transition-all text-base" href="#services">
                        Explore Services
                        <iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</a>
</div>

<div className="mt-12 flex items-center gap-4 text-white/80">
<div className="flex items-center gap-1 text-yellow-400">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400/50" icon="solar:star-linear"></iconify-icon>
</div>
<div className="h-4 w-px bg-white/20"></div>
<span className="text-sm font-medium">4.5 Rating (13 Google Reviews)</span>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-white relative z-20 -mt-10 mx-6 rounded-2xl shadow-xl max-w-7xl lg:mx-auto p-8 lg:p-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
<div className="text-center md:text-left px-4">
<div className="flex items-center justify-center md:justify-start gap-3 mb-2 text-blue-600">
<iconify-icon icon="solar:map-point-wave-linear" width="28"></iconify-icon>
<h3 className="font-semibold text-slate-900">West Haven, UT</h3>
</div>
<p className="text-slate-500 text-sm">Serving Ogden &amp; surrounding areas</p>
</div>
<div className="text-center md:text-left px-4 pt-8 md:pt-0">
<div className="flex items-center justify-center md:justify-start gap-3 mb-2 text-blue-600">
<iconify-icon icon="solar:clock-circle-linear" width="28"></iconify-icon>
<h3 className="font-semibold text-slate-900">Opens 8:00 AM</h3>
</div>
<p className="text-slate-500 text-sm">Mon - Fri (Standard Hours)</p>
</div>
<div className="text-center md:text-left px-4 pt-8 md:pt-0">
<div className="flex items-center justify-center md:justify-start gap-3 mb-2 text-blue-600">
<iconify-icon icon="solar:user-hands-linear" width="28"></iconify-icon>
<h3 className="font-semibold text-slate-900">Experienced Team</h3>
</div>
<p className="text-slate-500 text-sm">Led by Jason Coates &amp; Scott</p>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden" id="services">
<div className="z-10 w-full max-w-7xl mx-auto px-6 relative">

<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="md:text-4xl text-3xl font-semibold text-slate-900 tracking-tight mb-6">Industrial Capabilities</h2>
<p className="text-lg text-slate-600 leading-relaxed font-light">
                    CE&amp;I is a full service electrical contractor. We handle complex industrial requirements from power distribution to precise instrumentation.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300">
<div className="h-56 overflow-hidden relative bg-slate-100">
<img alt="Industrial Electrical" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">Industrial Electrical</h3>
</div>
<p className="text-slate-500 font-light mb-6 leading-relaxed">Complete power solutions for factories, warehouses, and industrial plants. Installation, maintenance, and heavy-duty upgrades.</p>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300">
<div className="h-56 overflow-hidden relative bg-slate-100">
<img alt="Instrumentation" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
<iconify-icon icon="solar:settings-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">Instrumentation</h3>
</div>
<p className="text-slate-500 font-light mb-6 leading-relaxed">Precision control systems, calibration, and monitoring equipment setup for process automation and efficiency.</p>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300">
<div className="h-56 overflow-hidden relative bg-slate-100">
<img alt="Communications" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
<iconify-icon icon="solar:server-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">Communications</h3>
</div>
<p className="text-slate-500 font-light mb-6 leading-relaxed">Data cabling, fiber optics, and robust communication infrastructure for modern industrial connectivity.</p>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors" href="#contact">
                    View all services
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold text-slate-900 mb-2">Trusted in West Haven</h2>
<p className="text-slate-500">Rated 4.5/5 based on 13 Google Reviews</p>
</div>
<a className="text-blue-600 font-medium hover:underline mt-4 md:mt-0" href="https://www.google.com/search?q=Coates+Electrical" target="_blank">Read all reviews on Google</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-slate-50 p-8 rounded-2xl relative">
<iconify-icon className="text-blue-200 w-10 h-10 absolute top-6 right-6" icon="solar:quote-up-square-linear" width="40"></iconify-icon>
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 mb-6 font-medium italic">"Thank you For the Friendship and Travis Coates is Amazing. I really need his help Right now... Happy Thanksgiving"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">JC</div>
<div>
<p className="text-sm font-bold text-slate-900">Jason Cower</p>
<p className="text-xs text-slate-500">Local Guide</p>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl relative">
<iconify-icon className="text-blue-200 w-10 h-10 absolute top-6 right-6" icon="solar:quote-up-square-linear" width="40"></iconify-icon>
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 mb-6 font-medium italic">"Great service and professional team. Handled our electrical installation needs efficiently."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">LC</div>
<div>
<p className="text-sm font-bold text-slate-900">Local Customer</p>
<p className="text-xs text-slate-500">Google Review</p>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl relative">
<iconify-icon className="text-blue-200 w-10 h-10 absolute top-6 right-6" icon="solar:quote-up-square-linear" width="40"></iconify-icon>
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-slate-700 mb-6 font-medium italic">"Professional electrical contractor in the West Haven area. Reliable for business needs."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">SR</div>
<div>
<p className="text-sm font-bold text-slate-900">Search Review</p>
<p className="text-xs text-slate-500">Google Review</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="team">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-1/2">
<div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
<img alt="Construction Site" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-blue-900/10"></div>
</div>
</div>
<div className="w-full md:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wide mb-6">
                        Established Expertise
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">
                        Meet the team behind the power.
                    </h2>
<p className="text-lg text-slate-500 leading-relaxed mb-6">
<strong>Jason Coates</strong> is a founding member of Coates Electrical &amp; Instrumentation Inc. His eagerness to learn and apply skills attained from mentorship has built the foundation of our company.
                    </p>
<p className="text-lg text-slate-500 leading-relaxed mb-8">
                        Together with our skilled technicians, we deliver top-tier industrial solutions in West Haven and throughout Utah.
                    </p>
<div className="flex gap-4">
<a className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center gap-2" href="mailto:info@coateselectrical.com">
                            Contact our team
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden" id="contact">
<div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                        Start your project.
                    </h2>
<p className="text-xl text-slate-400 mb-10 font-light max-w-md">
                        Contact us for industrial electrical services, instrumentation, and control systems.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-blue-400 shrink-0">
<iconify-icon icon="solar:map-point-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Visit Us</h4>
<p className="text-slate-400">2505 S 2050 W<br/>West Haven, UT 84401</p>
<a className="text-blue-400 text-sm mt-2 hover:text-blue-300 inline-block" href="https://www.google.com/maps/dir//2505+S+2050+W,+West+Haven,+UT+84401" target="_blank">Get Directions →</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-blue-400 shrink-0">
<iconify-icon icon="solar:mailbox-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Mailing Address</h4>
<p className="text-slate-400">P.O. Box 3068<br/>Ogden, UT 84409-1068</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-blue-400 shrink-0">
<iconify-icon icon="solar:phone-calling-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Contact</h4>
<p className="text-slate-400 mb-2">Mon - Fri: Opens 8 AM</p>
<a className="text-white text-lg font-semibold hover:text-blue-400 transition-colors block" href="tel:8014763139">(801) 476-3139</a>
<a className="text-slate-400 hover:text-white transition-colors" href="mailto:info@coateselectrical.com">info@coateselectrical.com</a>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-2 h-full min-h-[400px]">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.6293983281575!2d-112.035416!3d41.205778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87530f0f0f0f0f0f%3A0x0!2s2505%20S%202050%20W%2C%20West%20Haven%2C%20UT%2084401!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" style={{border: '0', borderRadius: '12px'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="text-blue-700">
<iconify-icon icon="solar:bolt-circle-bold-duotone" width="32"></iconify-icon>
</div>
<span className="text-slate-900 text-lg font-bold tracking-tight">Coates Electrical</span>
</a>
<p className="text-base text-slate-500 mb-4 max-w-sm">
                        Industrial electrical, communications, and instrumentation specialists serving West Haven, Ogden, and the greater Utah area.
                    </p>
</div>
<div className="">
<h5 className="text-slate-900 font-medium mb-4">Services</h5>
<ul className="space-y-3">
<li><a className="text-slate-500 hover:text-blue-600 transition-colors text-sm" href="#">Industrial Electrical</a></li>
<li><a className="text-slate-500 hover:text-blue-600 transition-colors text-sm" href="#">Instrumentation</a></li>
<li><a className="text-slate-500 hover:text-blue-600 transition-colors text-sm" href="#">Communications</a></li>
<li><a className="text-slate-500 hover:text-blue-600 transition-colors text-sm" href="#">Control Systems</a></li>
</ul>
</div>
<div>
<h5 className="text-slate-900 font-medium mb-4">Quick Links</h5>
<ul className="space-y-3">
<li><a className="text-slate-500 hover:text-blue-600 transition-colors text-sm" href="https://www.coateselectrical.com">Official Website</a></li>
<li><a className="text-slate-500 hover:text-blue-600 transition-colors text-sm" href="#team">About Jason Coates</a></li>
<li><a className="text-slate-500 hover:text-blue-600 transition-colors text-sm" href="#contact">Get Directions</a></li>
<li><a className="text-slate-500 hover:text-blue-600 transition-colors text-sm" href="#reviews">Google Reviews</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-400 text-sm">© 2024 Coates Electrical &amp; Instrumentation Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#">
<iconify-icon icon="solar:global-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
