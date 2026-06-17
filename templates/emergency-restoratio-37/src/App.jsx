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



tailwind.config = {
theme: {
extend: {
colors: {
navy: '#002147',
ersRed: '#D32F2F',
slate: {
850: '#1e293b'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}

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
      

<nav className="sticky top-0 z-50 w-full bg-navy/95 backdrop-blur-sm border-b border-slate-700/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex-shrink-0">
<a className="text-white text-2xl font-semibold tracking-tighter" href="#">
                        ERS<span className="text-ersRed">.</span>
</a>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#process">Process</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#areas">Service Areas</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#testimonials">Reviews</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 bg-ersRed hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors shadow-lg shadow-red-900/20" href="tel:555-555-5555">
<iconify-icon height="18" icon="solar:phone-calling-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span>24/7 Emergency Line</span>
</a>
</div>
</div>
</div>
</nav>

<section className="relative bg-navy overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">
<div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&amp;fit=crop&amp;q=80')] bg-cover bg-center"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">

<div className="flex-1 text-center lg:text-left space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ersRed opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-ersRed"></span>
</span>
<span className="text-xs font-medium text-slate-300 tracking-wide uppercase">Live 24/7 Response Team</span>
</div>
<h1 className="text-4xl lg:text-6xl font-semibold text-white tracking-tight leading-tight">
                    24/7 Emergency Restoration Services <span className="text-slate-400 font-normal">— Proven, Skilled and Responsive</span>
</h1>
<p className="text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-light">
                    Immediate dispatch for water, fire, and mold emergencies. We restore your property with industrial precision and care.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<button className="w-full sm:w-auto bg-ersRed hover:bg-red-700 text-white px-8 py-3.5 rounded text-sm font-medium transition-all shadow-lg shadow-red-900/30 flex items-center justify-center gap-2">
<span>Get Immediate Help</span>
<iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="flex flex-col items-start">
<div className="flex text-yellow-400 text-lg">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs text-slate-400 mt-1">4.9/5 Rating based on 155+ Real Google Reviews</span>
</div>
</div>

<div className="pt-8 border-t border-slate-800 flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8">
<div className="flex items-center gap-3 bg-slate-800/40 px-4 py-2 rounded border border-slate-700/50">
<iconify-icon className="text-slate-300" height="24" icon="solar:diploma-verified-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-medium text-white">IICRC Certified</span>
</div>
<div className="flex items-center gap-3 bg-slate-800/40 px-4 py-2 rounded border border-slate-700/50">
<iconify-icon className="text-slate-300" height="24" icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-medium text-white">A+ BBB Rating</span>
</div>
<div className="flex items-center gap-3 bg-slate-800/40 px-4 py-2 rounded border border-slate-700/50">
<iconify-icon className="text-slate-300" height="24" icon="solar:stopwatch-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-medium text-white">Fast 24/7 Response</span>
</div>
</div>
</div>

<div className="flex-1 w-full relative group">
<div className="relative rounded-lg overflow-hidden shadow-2xl border border-slate-700">

<img alt="ERS Technician and Vehicle" className="w-full h-[500px] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy to-transparent h-40"></div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-navy tracking-tight mb-4">Why Homeowners &amp; Businesses Trust ERS</h2>
<div className="h-1 w-20 bg-ersRed mx-auto rounded"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all group">
<iconify-icon className="text-ersRed mb-3 group-hover:scale-110 transition-transform" height="32" icon="solar:siren-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-base font-semibold text-navy mb-1">Priority Dispatch (24/7)</h3>
<p className="text-sm text-slate-500">Immediate mobilization day or night.</p>
</div>

<div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all group">
<iconify-icon className="text-ersRed mb-3 group-hover:scale-110 transition-transform" height="32" icon="solar:diploma-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-base font-semibold text-navy mb-1">IICRC-Certified Experts</h3>
<p className="text-sm text-slate-500">Industry standard trained technicians.</p>
</div>

<div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all group">
<iconify-icon className="text-ersRed mb-3 group-hover:scale-110 transition-transform" height="32" icon="solar:stars-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-base font-semibold text-navy mb-1">500+ Five-Star Reviews</h3>
<p className="text-sm text-slate-500">Top-rated service across all platforms.</p>
</div>

<div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all group">
<iconify-icon className="text-ersRed mb-3 group-hover:scale-110 transition-transform" height="32" icon="solar:document-add-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-base font-semibold text-navy mb-1">Insurance Support</h3>
<p className="text-sm text-slate-500">We handle the claims paperwork.</p>
</div>

<div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all group">
<iconify-icon className="text-ersRed mb-3 group-hover:scale-110 transition-transform" height="32" icon="solar:home-smile-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-base font-semibold text-navy mb-1">Full-Service Restoration</h3>
<p className="text-sm text-slate-500">From cleanup to final reconstruction.</p>
</div>

<div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all group">
<iconify-icon className="text-ersRed mb-3 group-hover:scale-110 transition-transform" height="32" icon="solar:chat-round-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-base font-semibold text-navy mb-1">Transparent Comms</h3>
<p className="text-sm text-slate-500">Real-time updates, no surprises.</p>
</div>

<div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all group">
<iconify-icon className="text-ersRed mb-3 group-hover:scale-110 transition-transform" height="32" icon="solar:medal-ribbon-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-base font-semibold text-navy mb-1">Quality-First Work</h3>
<p className="text-sm text-slate-500">Materials and finish you can trust.</p>
</div>

<div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all group">
<iconify-icon className="text-ersRed mb-3 group-hover:scale-110 transition-transform" height="32" icon="solar:map-point-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-base font-semibold text-navy mb-1">Locally Owned</h3>
<p className="text-sm text-slate-500">Serving our neighbors since 2008.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-100" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12">
<span className="text-ersRed font-medium text-sm tracking-widest uppercase">Expertise</span>
<h2 className="text-3xl font-semibold text-navy tracking-tight mt-2">Our Core Services</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group flex flex-col h-full bg-slate-50 rounded-lg overflow-hidden border border-slate-100 hover:border-slate-200 transition-colors">
<div className="h-48 overflow-hidden">
<img alt="Water Damage" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-xl font-semibold text-navy mb-2">Water Damage Restoration</h3>
<p className="text-sm text-slate-500 mb-6 flex-grow">Rapid water extraction and drying for burst pipes, appliance leaks, and floods. We prevent structural rot.</p>
<button className="flex items-center text-sm font-medium text-ersRed group-hover:text-red-800 transition-colors">
                            Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</button>
</div>
</div>

<div className="group flex flex-col h-full bg-slate-50 rounded-lg overflow-hidden border border-slate-100 hover:border-slate-200 transition-colors">
<div className="h-48 overflow-hidden">
<img alt="Mold Remediation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-xl font-semibold text-navy mb-2">Mold Remediation Services</h3>
<p className="text-sm text-slate-500 mb-6 flex-grow">Comprehensive inspection, containment, and removal. We eliminate spores and treat underlying moisture.</p>
<button className="flex items-center text-sm font-medium text-ersRed group-hover:text-red-800 transition-colors">
                            Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</button>
</div>
</div>

<div className="group flex flex-col h-full bg-slate-50 rounded-lg overflow-hidden border border-slate-100 hover:border-slate-200 transition-colors">
<div className="h-48 overflow-hidden">
<img alt="Fire Damage" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-xl font-semibold text-navy mb-2">Fire and Smoke Damage</h3>
<p className="text-sm text-slate-500 mb-6 flex-grow">Specialized soot removal, structural cleaning, and advanced deodorization to erase smoke damage.</p>
<button className="flex items-center text-sm font-medium text-ersRed group-hover:text-red-800 transition-colors">
                            Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</button>
</div>
</div>

<div className="group flex flex-col h-full bg-slate-50 rounded-lg overflow-hidden border border-slate-100 hover:border-slate-200 transition-colors">
<div className="h-48 overflow-hidden">
<img alt="Flood Damage" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-xl font-semibold text-navy mb-2">Flood Damage Restoration</h3>
<p className="text-sm text-slate-500 mb-6 flex-grow">Handling sewer backups and heavy rain fallout. We sanitize affected areas and restore safety.</p>
<button className="flex items-center text-sm font-medium text-ersRed group-hover:text-red-800 transition-colors">
                            Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</button>
</div>
</div>

<div className="group flex flex-col h-full bg-slate-50 rounded-lg overflow-hidden border border-slate-100 hover:border-slate-200 transition-colors">
<div className="h-48 overflow-hidden">
<img alt="Basement Water" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-xl font-semibold text-navy mb-2">Basement Water Removal</h3>
<p className="text-sm text-slate-500 mb-6 flex-grow">Deploying high-volume industrial pumps and dehumidifiers to dry basements fast.</p>
<button className="flex items-center text-sm font-medium text-ersRed group-hover:text-red-800 transition-colors">
                            Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</button>
</div>
</div>

<div className="group flex flex-col h-full bg-slate-50 rounded-lg overflow-hidden border border-slate-100 hover:border-slate-200 transition-colors">
<div className="h-48 overflow-hidden">
<img alt="Biohazard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-xl font-semibold text-navy mb-2">Biohazard &amp; Hazmat</h3>
<p className="text-sm text-slate-500 mb-6 flex-grow">Discreet, certified cleanup for hazardous materials, trauma scenes, and sanitization needs.</p>
<button className="flex items-center text-sm font-medium text-ersRed group-hover:text-red-800 transition-colors">
                            Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">

<div className="relative group overflow-hidden">
<img alt="Residential" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-navy/80 group-hover:bg-navy/70 transition-colors"></div>
<div className="relative h-full flex flex-col justify-center p-12 lg:p-20">
<iconify-icon className="text-white mb-6" height="48" icon="solar:home-2-linear" strokeWidth="1.5" width="48"></iconify-icon>
<h2 className="text-3xl font-semibold text-white mb-4 tracking-tight">Residential Services</h2>
<p className="text-slate-300 mb-8 max-w-md">Protect your home and family. We treat every residential project with personal care, respecting your property while erasing damage quickly.</p>
<a className="inline-flex items-center text-white border-b border-ersRed pb-1 w-fit hover:text-ersRed transition-colors" href="#">
                    Restore My Home <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="relative group overflow-hidden">
<img alt="Commercial" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/80 group-hover:bg-slate-900/70 transition-colors"></div>
<div className="relative h-full flex flex-col justify-center p-12 lg:p-20">
<iconify-icon className="text-white mb-6" height="48" icon="solar:buildings-linear" strokeWidth="1.5" width="48"></iconify-icon>
<h2 className="text-3xl font-semibold text-white mb-4 tracking-tight">Commercial Services</h2>
<p className="text-slate-300 mb-8 max-w-md">Minimize downtime. Our large-loss teams are equipped to handle industrial facilities, offices, and retail spaces with speed and scale.</p>
<a className="inline-flex items-center text-white border-b border-ersRed pb-1 w-fit hover:text-ersRed transition-colors" href="#">
                    Restore My Business <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="process">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div>
<span className="text-ersRed font-medium text-sm tracking-widest uppercase">Our Story</span>
<h2 className="text-3xl font-semibold text-navy tracking-tight mt-2 mb-6">Restoring Properties, Rebuilding Lives.</h2>
<div className="prose text-slate-500">
<p className="mb-4">
                            For over 15 years, ERS has been the backbone of disaster recovery in SE Wisconsin and Northern Illinois. Founded on the principles of integrity and technical excellence, we don't just extract water—we reconstruct peace of mind.
                        </p>
<p className="mb-6">
                            Our technicians aren't just workers; they are certified specialists who understand the science of drying, remediation, and structural integrity. When you call us, you get a partner who advocates for you with insurance companies and delivers workmanship that lasts.
                        </p>
</div>
<div className="flex items-center gap-4 mt-8">
<div className="bg-navy text-white px-4 py-3 rounded text-center">
<span className="block text-2xl font-bold">15+</span>
<span className="text-xs text-slate-300">Years Exp.</span>
</div>
<div className="bg-white border border-slate-200 text-navy px-4 py-3 rounded text-center">
<span className="block text-2xl font-bold">24/7</span>
<span className="text-xs text-slate-500">Availability</span>
</div>
</div>
</div>

<div className="relative pl-8 border-l border-slate-200 space-y-12">

<div className="relative">
<div className="absolute -left-[41px] bg-ersRed rounded-full p-2 border-4 border-slate-50">
<iconify-icon className="text-white block" height="16" icon="solar:phone-calling-linear" width="16"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-navy">1. Call Now</h3>
<p className="text-sm text-slate-500 mt-2">
                            Connect immediately with our dispatch center. We collect vital details and deploy the nearest rapid-response unit to your location within minutes.
                        </p>
</div>

<div className="relative">
<div className="absolute -left-[41px] bg-navy rounded-full p-2 border-4 border-slate-50">
<iconify-icon className="text-white block" height="16" icon="solar:delivery-linear" width="16"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-navy">2. Crew Arrives</h3>
<p className="text-sm text-slate-500 mt-2">
                            Our IICRC-certified team arrives fully equipped. We conduct an immediate assessment, stop the damage source, and begin containment and mitigation.
                        </p>
</div>

<div className="relative">
<div className="absolute -left-[41px] bg-navy rounded-full p-2 border-4 border-slate-50">
<iconify-icon className="text-white block" height="16" icon="solar:home-smile-linear" width="16"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-navy">3. Full Restoration</h3>
<p className="text-sm text-slate-500 mt-2">
                            From drying and cleaning to final repairs and reconstruction. We handle the entire project until your property is returned to its pre-loss condition.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-slate-100" id="areas">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

<div className="bg-slate-100 rounded-lg h-full min-h-[300px] flex items-center justify-center relative overflow-hidden border border-slate-200">
<iconify-icon className="text-slate-300 absolute inset-0 m-auto w-32 h-32 opacity-20" icon="solar:map-linear"></iconify-icon>
<div className="z-10 text-center">
<p className="text-navy font-semibold text-lg">SE Wisconsin &amp; <br/>Northern Illinois</p>
<button className="mt-4 text-xs font-medium text-ersRed uppercase tracking-wide border border-ersRed px-4 py-2 rounded hover:bg-ersRed hover:text-white transition-colors">
                            View Service Map
                        </button>
</div>
</div>

<div className="lg:col-span-2">
<h2 className="text-2xl font-semibold text-navy tracking-tight mb-8">Serving Milwaukee to Antioch</h2>
<div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 text-sm text-slate-600">

<ul className="space-y-3">
<li className="flex items-center gap-2"><iconify-icon className="text-ersRed" icon="solar:map-point-linear"></iconify-icon> Milwaukee, WI</li>
<li className="flex items-center gap-2"><iconify-icon className="text-ersRed" icon="solar:map-point-linear"></iconify-icon> Waukesha, WI</li>
<li className="flex items-center gap-2"><iconify-icon className="text-ersRed" icon="solar:map-point-linear"></iconify-icon> Brookfield, WI</li>
<li className="flex items-center gap-2"><iconify-icon className="text-ersRed" icon="solar:map-point-linear"></iconify-icon> New Berlin, WI</li>
<li className="flex items-center gap-2"><iconify-icon className="text-ersRed" icon="solar:map-point-linear"></iconify-icon> West Allis, WI</li>
<li className="flex items-center gap-2"><iconify-icon className="text-ersRed" icon="solar:map-point-linear"></iconify-icon> Greenfield, WI</li>
<li className="flex items-center gap-2"><iconify-icon className="text-ersRed" icon="solar:map-point-linear"></iconify-icon> Franklin, WI</li>
<li className="flex items-center gap-2"><iconify-icon className="text-ersRed" icon="solar:map-point-linear"></iconify-icon> Oak Creek, WI</li>
</ul>

<ul className="space-y-3">
<li className="flex items-center gap-2"><iconify-icon className="text-ersRed" icon="solar:map-point-linear"></iconify-icon> Racine, WI</li>
<li className="flex items-center gap-2"><iconify-icon className="text-ersRed" icon="solar:map-point-linear"></iconify-icon> Kenosha, WI</li>
<li className="flex items-center gap-2"><iconify-icon className="text-ersRed" icon="solar:map-point-linear"></iconify-icon> Mount Pleasant, WI</li>
<li className="flex items-center gap-2"><iconify-icon className="text-ersRed" icon="solar:map-point-linear"></iconify-icon> Pleasant Prairie, WI</li>
<li className="flex items-center gap-2"><iconify-icon className="text-ersRed" icon="solar:map-point-linear"></iconify-icon> Caledonia, WI</li>
<li className="flex items-center gap-2"><iconify-icon className="text-ersRed" icon="solar:map-point-linear"></iconify-icon> Burlington, WI</li>
<li className="flex items-center gap-2"><iconify-icon className="text-ersRed" icon="solar:map-point-linear"></iconify-icon> Elkhorn, WI</li>
<li className="flex items-center gap-2"><iconify-icon className="text-ersRed" icon="solar:map-point-linear"></iconify-icon> Lake Geneva, WI</li>
</ul>

<ul className="space-y-3">
<li className="flex items-center gap-2"><iconify-icon className="text-ersRed" icon="solar:map-point-linear"></iconify-icon> Antioch, IL</li>
<li className="flex items-center gap-2"><iconify-icon className="text-ersRed" icon="solar:map-point-linear"></iconify-icon> Gurnee, IL</li>
<li className="flex items-center gap-2"><iconify-icon className="text-ersRed" icon="solar:map-point-linear"></iconify-icon> Waukegan, IL</li>
<li className="flex items-center gap-2"><iconify-icon className="text-ersRed" icon="solar:map-point-linear"></iconify-icon> Zion, IL</li>
<li className="flex items-center gap-2"><iconify-icon className="text-ersRed" icon="solar:map-point-linear"></iconify-icon> Libertyville, IL</li>
<li className="flex items-center gap-2"><iconify-icon className="text-ersRed" icon="solar:map-point-linear"></iconify-icon> Grayslake, IL</li>
<li className="flex items-center gap-2"><iconify-icon className="text-ersRed" icon="solar:map-point-linear"></iconify-icon> Lake Villa, IL</li>
<li className="flex items-center gap-2"><iconify-icon className="text-ersRed" icon="solar:map-point-linear"></iconify-icon> Round Lake, IL</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="testimonials">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-navy text-center mb-12 tracking-tight">Real Stories from Local Clients</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-lg border border-slate-100 shadow-sm">
<div className="flex text-yellow-400 text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"We had a pipe burst at 2 AM on a Sunday. ERS was at our door within 45 minutes. The team was incredibly professional and managed to save our hardwood floors which I thought were ruined."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm">B</div>
<div>
<p className="text-sm font-semibold text-navy">Britt S.</p>
<p className="text-xs text-slate-400">Homeowner, Milwaukee</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-lg border border-slate-100 shadow-sm relative top-0 md:-top-4">
<div className="flex text-yellow-400 text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"Highly recommend ERS. They handled the mold remediation in our attic before we sold our house. They documented everything perfectly for the buyers and the inspector passed it with flying colors."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-ersRed text-white flex items-center justify-center font-bold text-sm">M</div>
<div>
<p className="text-sm font-semibold text-navy">Matthew T.</p>
<p className="text-xs text-slate-400">Real Estate Investor</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-lg border border-slate-100 shadow-sm">
<div className="flex text-yellow-400 text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"After the heavy rains in Antioch flooded our basement, Alan's crew pumped out the water and set up dryers immediately. No mold, no smell left behind. Honest pricing too."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm">A</div>
<div>
<p className="text-sm font-semibold text-navy">Alan K.</p>
<p className="text-xs text-slate-400">Business Owner</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-slate-100">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-semibold text-navy text-center mb-12 tracking-tight">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group bg-slate-50 rounded-lg open:bg-white open:shadow-md transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-navy">
<span>How quickly can you arrive for an emergency?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 text-sm mt-0 p-5 pt-0">
                        Our rapid response teams are available 24/7. For most locations in SE Wisconsin and Northern Illinois, we typically arrive within 60 minutes of dispatch.
                    </div>
</details>

<details className="group bg-slate-50 rounded-lg open:bg-white open:shadow-md transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-navy">
<span>Do you work directly with my insurance company?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 text-sm mt-0 p-5 pt-0">
                        Yes. We work with all major insurance carriers. We use industry-standard software (Xactimate) to submit claims directly, reducing your paperwork burden.
                    </div>
</details>

<details className="group bg-slate-50 rounded-lg open:bg-white open:shadow-md transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-navy">
<span>Is your staff certified?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 text-sm mt-0 p-5 pt-0">
                        Absolutely. Our technicians hold IICRC certifications in Water Damage Restoration (WRT), Applied Structural Drying (ASD), and Mold Remediation (AMRT).
                    </div>
</details>

<details className="group bg-slate-50 rounded-lg open:bg-white open:shadow-md transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-navy">
<span>What should I do while waiting for you to arrive?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 text-sm mt-0 p-5 pt-0">
                        If safe, shut off the water main or power source. Do not enter standing water if electricity is active. Move valuables to higher ground if possible.
                    </div>
</details>

<details className="group bg-slate-50 rounded-lg open:bg-white open:shadow-md transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-navy">
<span>Can you remove mold completely?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 text-sm mt-0 p-5 pt-0">
                        We remediate mold by removing the colony and treating the area. "Complete removal" of all mold spores from the air is impossible as they are natural, but we return levels to normal, safe ecology.
                    </div>
</details>

<details className="group bg-slate-50 rounded-lg open:bg-white open:shadow-md transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-navy">
<span>Do you handle reconstruction repairs?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 text-sm mt-0 p-5 pt-0">
                        Yes, ERS is a full-service restoration company. We can handle everything from the initial cleanup to drywall, painting, and flooring installation.
                    </div>
</details>

<details className="group bg-slate-50 rounded-lg open:bg-white open:shadow-md transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-navy">
<span>How do you detect hidden water?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 text-sm mt-0 p-5 pt-0">
                        We use advanced thermal imaging cameras and moisture meters to detect water trapped behind walls, under floors, and in ceilings without destructive testing.
                    </div>
</details>

<details className="group bg-slate-50 rounded-lg open:bg-white open:shadow-md transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-navy">
<span>Are your cleaning products safe for pets?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 text-sm mt-0 p-5 pt-0">
                        We use hospital-grade, EPA-registered botanical disinfectants whenever possible that are safe for pets and children once dried.
                    </div>
</details>

<details className="group bg-slate-50 rounded-lg open:bg-white open:shadow-md transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-navy">
<span>Do you offer free estimates?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 text-sm mt-0 p-5 pt-0">
                        We offer free visual inspections and estimates for property owners. (Some restrictions may apply for real estate transactions).
                    </div>
</details>

<details className="group bg-slate-50 rounded-lg open:bg-white open:shadow-md transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-navy">
<span>What areas do you serve?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 text-sm mt-0 p-5 pt-0">
                        We serve the entire Southeast Wisconsin region (Milwaukee, Waukesha, Racine, Kenosha) and Northern Illinois (Antioch, Gurnee, Waukegan).
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-navy text-slate-300 py-16 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

<div>
<a className="text-white text-2xl font-semibold tracking-tighter inline-block mb-6" href="#">
                        ERS<span className="text-ersRed">.</span>
</a>
<p className="text-sm leading-relaxed mb-6">
                        Emergency Restoration Specialists. <br/>
                        Providing 24/7 disaster recovery services with integrity, speed, and skilled craftsmanship.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon height="24" icon="solar:facebook-linear" width="24"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon height="24" icon="solar:instagram-linear" width="24"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon height="24" icon="brandico:linkedin-rect" width="24"></iconify-icon></a>
</div>
</div>

<div>
<h3 className="text-white font-medium mb-4">Our Services</h3>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-ersRed transition-colors" href="#">Water Damage Restoration</a></li>
<li><a className="hover:text-ersRed transition-colors" href="#">Mold Remediation</a></li>
<li><a className="hover:text-ersRed transition-colors" href="#">Fire &amp; Smoke Damage</a></li>
<li><a className="hover:text-ersRed transition-colors" href="#">Flood Restoration</a></li>
<li><a className="hover:text-ersRed transition-colors" href="#">Basement Water Removal</a></li>
<li><a className="hover:text-ersRed transition-colors" href="#">Biohazard Cleanup</a></li>
<li><a className="hover:text-ersRed transition-colors" href="#">Carpet Cleaning</a></li>
</ul>
</div>

<div>
<h3 className="text-white font-medium mb-4">Contact Us</h3>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-ersRed" icon="solar:map-point-linear"></iconify-icon>
<span>1234 Restoration Way,<br/>Milwaukee, WI 53201</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-ersRed" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-white" href="tel:5555555555">555-555-5555</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-ersRed" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-white" href="mailto:help@ers-restore.com">help@ers-restore.com</a>
</li>
</ul>
</div>

<div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
<h3 className="text-white font-medium mb-2">Emergency?</h3>
<p className="text-sm mb-4">We are available 24 hours a day, 7 days a week.</p>
<a className="w-full block bg-ersRed text-white text-center py-2 rounded font-medium hover:bg-red-700 transition-colors" href="tel:5555555555">
                        Call Dispatch Now
                    </a>
</div>
</div>
<div className="border-t border-slate-800 mt-16 pt-8 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
<p>© 2023 ERS Emergency Restoration Specialists. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
