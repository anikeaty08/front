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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="text-white text-2xl font-semibold tracking-tighter uppercase flex items-center gap-1" href="#">
                    ERS
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1"></span>
</a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#why-us">Why ERS</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#areas">Areas Served</a>
</div>
<a className="hidden md:inline-flex items-center justify-center h-10 px-6 rounded-full bg-white text-slate-900 text-sm font-medium transition-all hover:bg-slate-100 focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900" href="tel:4145017953">
                Call (414) 501-7953
            </a>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-900 overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute -top-[20%] right-[10%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-[10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-red-400 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
                        24/7 Rapid Response Unit
                    </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                        24/7 Emergency <br/>
                        Restoration Services
                        <span className="text-slate-400 block text-2xl md:text-3xl mt-2 font-normal">Proven, Skilled and Responsive.</span>
</h1>
<p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
                        Fire, water, storm, or mold—we restore what matters most, with deep expertise and proven know-how.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-red-600 text-white text-base font-medium transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-900/20" href="tel:4145017953">
<iconify-icon className="mr-2 text-xl" icon="solar:phone-calling-linear"></iconify-icon>
                            Call (414) 501-7953 Now
                        </a>
<div className="flex items-center gap-4 px-6 h-12 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-slate-600 border border-slate-800"></div>
<div className="w-6 h-6 rounded-full bg-slate-500 border border-slate-800"></div>
<div className="w-6 h-6 rounded-full bg-slate-400 border border-slate-800"></div>
</div>
<div className="flex flex-col">
<span className="text-xs text-white font-medium">155+ User Reviews</span>
<span className="flex text-yellow-400 text-[10px] gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<span className="text-slate-400 ml-1">4.9 Stars</span>
</span>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800 aspect-video group">

<div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
<iconify-icon className="text-slate-600 text-6xl md:text-9xl opacity-20" icon="solar:delivery-linear"></iconify-icon>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
</div>

<div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
<div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-2 rounded-lg flex items-center gap-2">
<iconify-icon className="text-white text-xl" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-xs font-medium text-white">IICRC Certified</span>
</div>
<div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-2 rounded-lg flex items-center gap-2">
<iconify-icon className="text-white text-xl" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-xs font-medium text-white">Fast Response</span>
</div>
<div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-2 rounded-lg flex items-center gap-2">
<span className="font-serif text-white font-bold italic text-lg leading-none">A+</span>
<span className="text-xs font-medium text-white">BBB Rating</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="why-us">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Why Milwaukee Chooses ERS</h2>
<p className="text-slate-500 max-w-2xl text-lg">We don't just restore buildings; we restore confidence through transparency, speed, and expert craftsmanship.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-red-600 mb-4 shadow-sm">
<iconify-icon icon="solar:siren-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Priority Dispatch, 24/7</h3>
<p className="text-sm text-slate-600 leading-relaxed">We’re always ready—our crews are on standby day and night to mobilize quickly when you call.</p>
</div>

<div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-4 shadow-sm">
<iconify-icon icon="solar:medal-ribbon-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">IICRC-Certified Experts</h3>
<p className="text-sm text-slate-600 leading-relaxed">Our technicians are fully trained and certified to meet the highest restoration standards in the industry.</p>
</div>

<div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-4 shadow-sm">
<iconify-icon icon="solar:stars-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">500+ Five-Star Reviews</h3>
<p className="text-sm text-slate-600 leading-relaxed">Our reputation speaks for itself—hundreds of satisfied customers trust us with their homes.</p>
</div>

<div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-4 shadow-sm">
<iconify-icon icon="solar:document-add-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Insurance Support</h3>
<p className="text-sm text-slate-600 leading-relaxed">We guide you through documentation and paperwork to help keep the claims process smooth.</p>
</div>

<div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-4 shadow-sm">
<iconify-icon icon="solar:home-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Full-Service Restoration</h3>
<p className="text-sm text-slate-600 leading-relaxed">From water and fire damage to mold and trauma cleanup, we provide complete solutions.</p>
</div>

<div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-4 shadow-sm">
<iconify-icon icon="solar:chat-line-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Transparent Communication</h3>
<p className="text-sm text-slate-600 leading-relaxed">We keep you informed every step of the way with clear timelines, honest pricing, and updates.</p>
</div>

<div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-4 shadow-sm">
<iconify-icon icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Quality-First Workmanship</h3>
<p className="text-sm text-slate-600 leading-relaxed">We focus on doing the job right—careful restoration, clean finishes, and attention to detail.</p>
</div>

<div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-4 shadow-sm">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Locally Owned &amp; Operated</h3>
<p className="text-sm text-slate-600 leading-relaxed">Proud to serve our community with local expertise, fast service, and a personal touch.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Our Services</h2>
<p className="text-slate-500 max-w-xl text-lg">Comprehensive restoration solutions tailored to specific disaster types.</p>
</div>
<a className="text-red-600 font-medium hover:text-red-700 flex items-center gap-1 group" href="tel:4145017953">
                    Get an Estimate <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
<div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:drop-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight mb-3">Water Damage Restoration</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">From burst pipes to basement floods, water damage can escalate quickly. Our Milwaukee-based team brings proven restoration know-how and a community-first approach to contain the damage and guide your property through a thorough, efficient recovery.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
<div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:bacteria-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight mb-3">Mold Remediation</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">Wisconsin’s fluctuating humidity can make mold a serious threat. Our certified mold specialists start with a careful inspection and then tailor the remediation plan to your specific situation—containing affected areas so mold is removed safely.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
<div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:flame-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight mb-3">Fire &amp; Smoke Damage</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">After a fire, the emotional and physical toll can be overwhelming. ERS handles everything from soot and smoke odor removal to structural repair and deep cleaning. Our team restores your space with care and craftsmanship.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
<div className="w-12 h-12 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:cloud-storm-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight mb-3">Flood Damage Restoration</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">Flooding can devastate a property within hours. Whether caused by heavy rains or sewer backups, our crews work quickly to remove standing water, dehumidify the area, and prevent mold growth or long-term structural damage.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
<div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:water-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight mb-3">Basement Water Removal</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">Basements are often the first to flood. Our technicians use high-volume pumps, drying systems, and moisture detection tools to fully dry and restore below-grade spaces, preventing foundation damage and future leaks.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
<div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:danger-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight mb-3">Biohazard &amp; Hazmat</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">ERS is fully certified to handle biohazard cleanup, including sewage backups, trauma scenes, and hoarder situations. We follow strict safety and sanitization protocols to ensure your property is truly safe.</p>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 bg-white">

<div className="relative py-24 px-8 md:px-16 bg-slate-50 overflow-hidden group">
<div className="relative z-10">
<span className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-2 block">Homeowners</span>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Residential Restoration</h3>
<p className="text-slate-600 leading-relaxed mb-8 max-w-md">
                    When disaster strikes your home, you need more than just repairs — you need peace of mind. Whether it’s water damage from a burst pipe or smoke residue, our certified team responds swiftly to restore your living space to its original condition.
                </p>
<a className="inline-flex items-center text-sm font-medium text-slate-900 border-b border-slate-300 pb-1 hover:border-slate-900 transition-colors" href="#contact">
                    Restore Your Home <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="relative py-24 px-8 md:px-16 bg-slate-900 overflow-hidden group">
<div className="relative z-10">
<span className="text-xs font-semibold tracking-wider uppercase text-red-500 mb-2 block">Businesses</span>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-6">Commercial Restoration</h3>
<p className="text-slate-400 leading-relaxed mb-8 max-w-md">
                    Time is money — and downtime can be costly. That’s why our commercial restoration services are tailored to minimize business interruption. From retail storefronts to industrial warehouses, we handle damage with speed and precision.
                </p>
<a className="inline-flex items-center text-sm font-medium text-white border-b border-slate-600 pb-1 hover:border-white transition-colors" href="#contact">
                    Restore Your Business <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6 text-center">
<iconify-icon className="text-4xl text-slate-300 mb-6" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-8">Who We Are</h2>
<p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                For over 15 years, we’ve helped homeowners and businesses across the region recover from water, fire, mold, storm, and biohazard damage. Our IICRC-certified technicians bring real-world know-how to every job, and we stay focused on what matters most: doing the work right and treating you and your property with care and respect. ERS is locally owned and operated, and we take that personally.
            </p>
<div className="w-16 h-1 bg-red-600 mx-auto rounded-full"></div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Restore in 3 Simple Steps</h2>
</div>
<div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-slate-200 -z-0 transform translate-y-1/2"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm mb-6">
<iconify-icon className="text-3xl text-red-600" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">1. Call Now</h3>
<p className="text-sm text-slate-600 max-w-xs">Disaster doesn’t wait—and neither do we. Call (414) 501-7953 any hour. Our team is available 24/7 to coordinate dispatch.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm mb-6">
<iconify-icon className="text-3xl text-slate-900" icon="solar:delivery-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">2. Crew Arrives</h3>
<p className="text-sm text-slate-600 max-w-xs">Our restoration crew arrives swiftly, fully equipped to stop the damage in its tracks. From water extraction to mold containment.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm mb-6">
<iconify-icon className="text-3xl text-slate-900" icon="solar:home-smile-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">3. Restoration</h3>
<p className="text-sm text-slate-600 max-w-xs">Our IICRC-certified team handles cleanup, repairs, insurance paperwork, and everything in between—delivering a renewed space.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="areas">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 items-start">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Serving Southeastern Wisconsin and Northern Illinois</h2>
<p className="text-slate-600 mb-6">We provide rapid local response to the following communities.</p>
<a className="inline-flex items-center text-sm font-medium text-white bg-slate-900 px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors" href="tel:4145017953">
                        Check Availability
                    </a>
</div>
<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
<ul className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-4 text-sm text-slate-600">
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Milwaukee</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> South Milwaukee</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> West Milwaukee</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Cudahy</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Oak Creek</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Franklin</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Greenfield</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Greendale</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Wauwatosa</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Glendale</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Shorewood</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Mequon</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Whitefish Bay</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Waukesha</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Brookfield</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> New Berlin</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Muskego</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Racine</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Kenosha</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Pleasant Prairie</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Gurnee (IL)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Waukegan (IL)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Zion (IL)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Antioch (IL)</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-12 text-center">Common Questions</h2>
<div className="space-y-4">
<details className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer p-6">
<span className="text-slate-900">Are restoration services covered by insurance?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 px-6 pb-6 pt-0 text-sm leading-relaxed">
                        Most water, fire, and mold restoration services are covered, depending on your policy. ERS works directly with your insurance company and provides all necessary documentation to support your claim.
                    </div>
</details>
<details className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer p-6">
<span className="text-slate-900">How long does a typical restoration take?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 px-6 pb-6 pt-0 text-sm leading-relaxed">
                        It depends on the damage. Minor water cleanup may take a day, while larger projects like fire or mold restoration can take several days. We provide a timeline immediately after inspection.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-16" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12 mb-12">
<div className="md:col-span-2">
<a className="text-white text-2xl font-semibold tracking-tighter uppercase flex items-center gap-1 mb-6" href="#">
                        ERS
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1"></span>
</a>
<p className="max-w-sm mb-6 text-sm">
                        Elite Professional Emergency Restoration Specialists. We restore homes and businesses with speed, integrity, and skilled craftsmanship.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Contact</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="tel:4145017953">Call (414) 501-7953</a></li>
<li><a className="hover:text-white transition-colors" href="mailto:info@removewater.com">info@removewater.com</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Address</h4>
<p className="text-sm">
                        5615 S. Pennsylvania Avenue<br/>
                        Cudahy, WI 53110
                    </p>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2026 ERS Emergency Restoration Specialists, Inc.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
