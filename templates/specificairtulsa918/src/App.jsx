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
      

<nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between h-20">

<a className="flex items-center gap-2 text-slate-900 hover:opacity-80 transition-opacity" href="#">
<span className="text-xl font-semibold tracking-tighter uppercase">Specific Air</span>
</a>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium hover:text-sky-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium hover:text-sky-600 transition-colors" href="#work">Our Work</a>
<a className="text-sm font-medium hover:text-sky-600 transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium hover:text-sky-600 transition-colors" href="#about">About</a>
</div>

<div className="hidden md:flex items-center space-x-4">
<a className="text-sm font-medium text-slate-900 hover:text-sky-600 transition-colors" href="tel:+19184970098">
                        +1 918-497-0098
                    </a>
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-sky-500 rounded-lg hover:bg-sky-600 shadow-sm hover:shadow transition-all" href="#contact">
                        Get a Free Quote
                    </a>
</div>

<button className="md:hidden p-2 text-slate-600">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-medium mb-6">
<iconify-icon height="14" icon="solar:star-fall-linear" width="14"></iconify-icon>
                        Tulsa's 5-Star Precision Specialists
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                        HVAC done right the first time, without the guesswork.
                    </h1>
<p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                        We specialize in highly detailed diagnostics and solutions for complex airflow issues that others miss. Trust the local experts to restore perfect comfort to your Tulsa home.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-white bg-sky-500 rounded-lg hover:bg-sky-600 shadow-sm hover:shadow-md transition-all" href="tel:+19184970098">
<iconify-icon height="20" icon="solar:phone-calling-linear" width="20"></iconify-icon>
                            Call +1 918-497-0098
                        </a>
<a className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all" href="#contact">
                            Request Service
                        </a>
</div>

<div className="flex items-center gap-6 text-sm">
<div className="flex items-center gap-2">
<iconify-icon className="text-sky-500" height="20" icon="solar:shield-check-linear" width="20"></iconify-icon>
<span>Licensed &amp; Insured</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-sky-500" height="20" icon="solar:medal-star-linear" width="20"></iconify-icon>
<span>5+ Years Local</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-sky-500" height="20" icon="solar:verified-check-linear" width="20"></iconify-icon>
<span>100% Guaranteed</span>
</div>
</div>
</div>

<div className="relative w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-slate-100 shadow-xl border border-slate-200/50">
<img alt="HVAC Technician working on system" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://img.freepik.com/free-photo/repairman-doing-air-conditioner-service_1303-26541.jpg?w=740&amp;q=80"/>

<div className="bg-gradient-to-t from-slate-900/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
</div>
</section>

<div className="border-y border-slate-100 bg-slate-50/50 py-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-200/50">
<div className="flex flex-col items-center">
<span className="text-3xl font-semibold tracking-tight text-slate-900 mb-1">5+</span>
<span className="text-xs text-slate-500 uppercase tracking-wider">Years Experience</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-semibold tracking-tight text-slate-900 mb-1">71+</span>
<span className="text-xs text-slate-500 uppercase tracking-wider">Google Reviews</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-semibold tracking-tight text-slate-900 mb-1">5.0</span>
<span className="text-xs text-slate-500 uppercase tracking-wider">Average Rating</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-semibold tracking-tight text-slate-900 mb-1">100%</span>
<span className="text-xs text-slate-500 uppercase tracking-wider">Fully Licensed</span>
</div>
</div>
</div>
</div>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Why Tulsa Residents Choose Specific Air</h2>
<p className="text-base text-slate-600">We don't just patch problems; we engineer solutions. Here is why we are the trusted choice for precision climate control.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-sky-100 transition-all group">
<div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:target-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Precision Diagnostics</h3>
<p className="text-sm text-slate-600 leading-relaxed">We identify the root cause of airflow and temperature issues that other companies overlook.</p>
</div>

<div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-sky-100 transition-all group">
<div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:tag-price-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Honest Upfront Pricing</h3>
<p className="text-sm text-slate-600 leading-relaxed">No hidden fees or surprise charges. You know exactly what the job costs before we start working.</p>
</div>

<div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-sky-100 transition-all group">
<div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Local Tulsa Business</h3>
<p className="text-sm text-slate-600 leading-relaxed">We are deeply rooted in the Tulsa and Broken Arrow community, dedicated to serving our neighbors.</p>
</div>

<div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-sky-100 transition-all group">
<div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:shield-star-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">100% Satisfaction</h3>
<p className="text-sm text-slate-600 leading-relaxed">Our job isn't done until your system is operating at peak efficiency and you are completely satisfied.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50 border-y border-slate-100" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Our Services</h2>
<p className="text-base text-slate-600">High-detail installations, diagnostics, and repairs engineered for the Oklahoma climate.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-sky-600 hover:text-sky-700 transition-colors shrink-0" href="#contact">
                    Request Service
                    <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="flex flex-col sm:flex-row gap-6 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-14 h-14 shrink-0 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600">
<iconify-icon height="28" icon="solar:snowflake-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Precision AC Tuning</h3>
<p className="text-sm text-slate-600 mb-4 leading-relaxed">High-detail cooling system diagnostics and repairs. We optimize airflow and refrigerant levels to ensure your AC handles the hottest summer days with ease.</p>
<a className="text-sm font-medium text-slate-900 hover:text-sky-600 transition-colors" href="tel:+19184970098">Schedule Tuning →</a>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-6 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-14 h-14 shrink-0 rounded-xl bg-red-50 flex items-center justify-center text-red-500">
<iconify-icon height="28" icon="solar:fire-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Heating Solutions</h3>
<p className="text-sm text-slate-600 mb-4 leading-relaxed">Reliable furnace installations and heat pump servicing. Stay warm and safe during unpredictable cold fronts with expertly calibrated heating systems.</p>
<a className="text-sm font-medium text-slate-900 hover:text-sky-600 transition-colors" href="tel:+19184970098">Get Heating Help →</a>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-6 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-14 h-14 shrink-0 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
<iconify-icon height="28" icon="solar:wind-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Air Quality Control</h3>
<p className="text-sm text-slate-600 mb-4 leading-relaxed">Advanced filtration and humidity management for OK homes. We remove allergens, dust, and balance moisture levels for a healthier living environment.</p>
<a className="text-sm font-medium text-slate-900 hover:text-sky-600 transition-colors" href="tel:+19184970098">Improve Air Quality →</a>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-6 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-14 h-14 shrink-0 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
<iconify-icon height="28" icon="solar:devices-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Smart Thermostats</h3>
<p className="text-sm text-slate-600 mb-4 leading-relaxed">Installation of modern, energy-saving climate control systems. Take control of your comfort and utility bills with precision smart home integration.</p>
<a className="text-sm font-medium text-slate-900 hover:text-sky-600 transition-colors" href="tel:+19184970098">Upgrade Thermostat →</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Our Recent Work</h2>
<p className="text-base text-slate-600">Quality craftsmanship you can see. Real job-site photos from our recent projects across the Tulsa metro.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

<div className="group relative rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3]">
<img alt="AC Unit Installation" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://img.freepik.com/premium-photo/air-conditioning-technician-engineer-roof-maintenance-building-construction-fan-hvac-repair-air-conditioner-handyman-worker-with-tools-working-city-development-project-job_590464-129396.jpg?w=740&amp;q=80"/>
<div className="bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<p className="text-sm font-medium text-white mb-1">Precision AC Install</p>
<p className="text-xs text-slate-300">Broken Arrow, OK</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3]">
<img alt="Ductwork inspection" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://img.freepik.com/premium-photo/technician-working-air-conditioning-heat-pump-outdoor-unit-hvac-service-maintenance-repair_255667-73151.jpg?w=740&amp;q=80"/>
<div className="bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<p className="text-sm font-medium text-white mb-1">Airflow Diagnostics &amp; Repair</p>
<p className="text-xs text-slate-300">Tulsa, OK</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3]">
<img alt="Smart Thermostat" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<p className="text-sm font-medium text-white mb-1">Smart Thermostat Integration</p>
<p className="text-xs text-slate-300">Bixby, OK</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3]">
<img alt="Furnace repair" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://img.freepik.com/premium-photo/electrical-engineer-is-checking-maintenance-air-conditioner-system_54401-574.jpg?w=740&amp;q=80"/>
<div className="bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<p className="text-sm font-medium text-white mb-1">Furnace Maintenance</p>
<p className="text-xs text-slate-300">Jenks, OK</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3]">
<img alt="Technician measuring" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://img.freepik.com/free-photo/hvac-engineer-dusting-blower-fan_482257-90845.jpg?w=740&amp;q=80"/>
<div className="bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<p className="text-sm font-medium text-white mb-1">System Calibration</p>
<p className="text-xs text-slate-300">Owasso, OK</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3]">
<img alt="Air filter replacement" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://img.freepik.com/free-photo/full-shot-man-working-with-equipment_23-2148921407.jpg?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<p className="text-sm font-medium text-white mb-1">Air Quality System Setup</p>
<p className="text-xs text-slate-300">Tulsa, OK</p>
</div>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 shadow-sm transition-all" href="#contact">
                    Get Your Project Started
                </a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50 border-y border-slate-100" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-12">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-medium mb-6 shadow-sm">
<span className="text-sky-500 font-semibold">5.0 Rating</span>
<span className="w-1 h-1 rounded-full bg-slate-300 mx-1"></span>
<span>71+ Reviews</span>
<span className="w-1 h-1 rounded-full bg-slate-300 mx-1"></span>
<span>5+ Years Local</span>
</div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Trusted by Tulsa Customers</h2>
<p className="text-base text-slate-600">See what your neighbors have to say about our precision approach to comfort.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

<div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full">
<div className="flex items-center justify-between mb-4">
<div className="flex text-yellow-400">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<span className="text-[10px] uppercase font-medium tracking-wider text-slate-400 border border-slate-200 px-2 py-0.5 rounded-sm">Google</span>
</div>
<p className="text-sm text-slate-700 mb-6 flex-grow leading-relaxed">"Specific Air lived up to their name. We had a weird airflow issue where one room was always hot. Three other companies tried to sell us a whole new system. These guys found a duct issue, fixed it in two hours, and saved us thousands."</p>
<div>
<p className="text-sm font-semibold text-slate-900">Mark T.</p>
<p className="text-xs text-slate-500">Midtown Tulsa • AC Tuning</p>
</div>
</div>

<div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full">
<div className="flex items-center justify-between mb-4">
<div className="flex text-yellow-400">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<span className="text-[10px] uppercase font-medium tracking-wider text-slate-400 border border-slate-200 px-2 py-0.5 rounded-sm">Google</span>
</div>
<p className="text-sm text-slate-700 mb-6 flex-grow leading-relaxed">"Incredibly professional from start to finish. The technicians wore shoe covers, explained exactly what they were testing, and got our furnace running perfectly before the winter freeze. Highly recommend."</p>
<div>
<p className="text-sm font-semibold text-slate-900">Sarah J.</p>
<p className="text-xs text-slate-500">Broken Arrow • Heating Repair</p>
</div>
</div>

<div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full">
<div className="flex items-center justify-between mb-4">
<div className="flex text-yellow-400">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<span className="text-[10px] uppercase font-medium tracking-wider text-slate-400 border border-slate-200 px-2 py-0.5 rounded-sm">Google</span>
</div>
<p className="text-sm text-slate-700 mb-6 flex-grow leading-relaxed">"Upgraded us to a smart thermostat system and added an air purifier. The difference in air quality is night and day. Very meticulous work, no messy wires left behind."</p>
<div>
<p className="text-sm font-semibold text-slate-900">David R.</p>
<p className="text-xs text-slate-500">Bixby • Smart Thermostat</p>
</div>
</div>

<div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full">
<div className="flex items-center justify-between mb-4">
<div className="flex text-yellow-400">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<span className="text-[10px] uppercase font-medium tracking-wider text-slate-400 border border-slate-200 px-2 py-0.5 rounded-sm">Google</span>
</div>
<p className="text-sm text-slate-700 mb-6 flex-grow leading-relaxed">"Honest pricing. Our AC capacitor blew out on a Sunday. They came out first thing Monday morning, had the exact part, and charged exactly what they quoted over the phone."</p>
<div>
<p className="text-sm font-semibold text-slate-900">Emily W.</p>
<p className="text-xs text-slate-500">Jenks • AC Repair</p>
</div>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-all" href="https://www.google.com/maps/search/?api=1&amp;query=Scaduto+Solutions+LLC&amp;query_place_id=ChIJpfc5hq-jCIgR_8cn-pOUqiQ3" rel="noopener noreferrer" target="_blank">
                    See More Reviews on Google
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">About Specific Air</h2>
<div className="prose prose-slate prose-sm sm:prose-base text-slate-600">
<p className="mb-4">Specific Air lives up to its name by providing highly specific, detail-oriented HVAC solutions across the Tulsa metro area. Established over 5 years ago, we recognized a gap in the local industry: too many rushed jobs and too much guesswork.</p>
<p className="mb-4">We built this company to be the "precision specialists." Whether it's complex airflow diagnostics, meticulous AC tuning, or advanced air quality control, we focus on solving the root cause of the problem.</p>
<p>With a perfect 5.0-star rating across 70+ reviews, we are proud to be the trusted local choice for homeowners who want the job done right the first time, ensuring total comfort and peace of mind.</p>
</div>
<div className="mt-8 grid grid-cols-2 gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-700 border border-slate-200">
<iconify-icon height="20" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900">Locally Owned</span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-700 border border-slate-200">
<iconify-icon height="20" icon="solar:diploma-verified-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900">Fully Licensed</span>
</div>
</div>
</div>

<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-6">Proudly Serving Tulsa &amp; Surrounding Areas</h3>
<div className="space-y-6">
<div className="flex items-start gap-4">
<iconify-icon className="text-sky-500 mt-1 shrink-0" height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Service Area</h4>
<p className="text-sm text-slate-600">Tulsa, Broken Arrow, Bixby, Jenks, Owasso, and surrounding communities in Oklahoma.</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-sky-500 mt-1 shrink-0" height="24" icon="solar:clock-circle-linear" width="24"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Business Hours</h4>
<p className="text-sm text-slate-600">Monday – Friday: 8:00 AM – 5:00 PM<br/>Saturday – Sunday: Closed</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-sky-500 mt-1 shrink-0" height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">100% Satisfaction Guarantee</h4>
<p className="text-sm text-slate-600">We stand behind our work. If you aren't completely satisfied with our precision diagnostics or installation, we will make it right.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden" id="contact">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-sky-500/10 blur-3xl"></div>
<div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-sky-500/10 blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">Ready to Get Started?</h2>
<p className="text-base text-slate-300 mb-10">We are currently accepting new service requests. Contact us today for a free quote or to schedule your precision diagnostics.</p>
<div className="space-y-6">
<a className="flex items-center gap-4 group" href="tel:+19184970098">
<div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-sky-400 border border-slate-700 group-hover:bg-slate-700 transition-colors">
<iconify-icon height="24" icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 mb-0.5">Call Us Directly</p>
<p className="text-lg font-medium text-white">+1 918-497-0098</p>
</div>
</a>
<a className="flex items-center gap-4 group" href="mailto:specair918@gmail.com">
<div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-sky-400 border border-slate-700 group-hover:bg-slate-700 transition-colors">
<iconify-icon height="24" icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 mb-0.5">Email Us</p>
<p className="text-lg font-medium text-white">specair918@gmail.com</p>
</div>
</a>
</div>
</div>

<div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
<form action="#" className="space-y-5" method="POST">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="name">Full Name</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all placeholder:text-slate-400" id="name" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="phone">Phone Number</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all placeholder:text-slate-400" id="phone" name="phone" placeholder="(918) 555-0123" required="" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="email">Email Address</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all placeholder:text-slate-400" id="email" name="email" placeholder="john@example.com" type="email"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="message">How can we help?</label>
<textarea className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all placeholder:text-slate-400 resize-none" id="message" name="message" placeholder="Describe your HVAC needs or issues..." required="" rows="4"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-sky-500 rounded-lg hover:bg-sky-600 shadow-sm transition-all" type="submit">
                            Send Message
                        </button>
<p className="text-xs text-center text-slate-500 mt-3">We typically respond within 24 hours.</p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

<div>
<a className="inline-block text-xl font-semibold tracking-tighter uppercase text-white mb-4" href="#">Specific Air</a>
<p className="text-sm text-slate-400 mb-6 max-w-sm">Precision HVAC diagnostics, installations, and repairs for Tulsa homes. Done right the first time, without the guesswork.</p>
<div className="flex items-center gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<span className="sr-only">Facebook</span>
<iconify-icon height="20" icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="https://www.google.com/maps/search/?api=1&amp;query=Scaduto+Solutions+LLC&amp;query_place_id=ChIJpfc5hq-jCIgR_8cn-pOUqiQ3">
<span className="sr-only">Google</span>
<iconify-icon height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#services">Our Services</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#work">Recent Work</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#reviews">Customer Reviews</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#about">About Us</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-4">Contact Information</h4>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="shrink-0 mt-0.5" height="16" icon="solar:phone-linear" width="16"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:+19184970098">+1 918-497-0098</a>
</li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="shrink-0 mt-0.5" height="16" icon="solar:letter-linear" width="16"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:specair918@gmail.com">specair918@gmail.com</a>
</li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="shrink-0 mt-0.5" height="16" icon="solar:map-point-linear" width="16"></iconify-icon>
<span>Serving Tulsa, OK &amp; Surrounding Areas</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="shrink-0 mt-0.5" height="16" icon="solar:verified-check-linear" width="16"></iconify-icon>
<span>Fully Licensed &amp; Insured</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-500">
                    © 2024 Specific Air. All rights reserved.
                </p>
<div className="flex items-center gap-6 text-xs text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
