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
      

<header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-gray-900 font-semibold text-lg tracking-tighter flex items-center gap-1" href="#">
<iconify-icon className="text-amber-500 text-xl" icon="solar:sun-2-linear"></iconify-icon>
                SLRX
            </a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-emerald-600 transition-colors" href="#services">Services</a>
<a className="hover:text-emerald-600 transition-colors" href="#packages">Packages</a>
<a className="hover:text-emerald-600 transition-colors" href="#about">About Us</a>
<a className="hover:text-emerald-600 transition-colors" href="#contact">Contact</a>
</nav>

<div className="hidden md:block">
<a className="bg-emerald-600 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm hover:bg-emerald-700 transition-colors" href="#contact">
                    Get a Quote
                </a>
</div>

<button className="md:hidden text-gray-900">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</header>
<main className="flex-grow pt-16">

<section className="relative bg-gray-900 pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Solar Panels on Roof" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gray-900/75 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium mb-6">
<iconify-icon icon="solar:leaf-linear"></iconify-icon>
                        Powering a sustainable future
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight mb-6">
                        Professional Solar Panel Installation for Homes and Businesses
                    </h1>
<p className="text-lg text-gray-300 mb-8 max-w-2xl font-light leading-relaxed mx-auto lg:mx-0">
                        Take control of your energy bills and reduce your carbon footprint with our high-efficiency solar systems. Expert installation, premium materials, and ongoing support.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<a className="w-full sm:w-auto bg-amber-400 text-gray-900 text-sm font-medium px-6 py-3 rounded-lg shadow-sm hover:bg-amber-500 transition-colors flex items-center justify-center gap-2" href="#contact">
                            Get a Free Quote
                            <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-white/10 text-white border border-white/20 text-sm font-medium px-6 py-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors text-center" href="#services">
                            Explore Services
                        </a>
</div>
</div>
</div>
</section>

<section className="border-b border-gray-200 bg-white relative z-20 -mt-8 mx-6 lg:mx-auto max-w-5xl rounded-2xl shadow-sm p-6 lg:p-8">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
<div>
<div className="text-3xl font-medium tracking-tight text-gray-900">500+</div>
<div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Installations</div>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-gray-900">10yr</div>
<div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Warranty</div>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-gray-900">24/7</div>
<div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Support</div>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-gray-900">100%</div>
<div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Green Energy</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-4">Complete Solar Solutions</h2>
<p className="text-base leading-relaxed">From initial consultation to lifelong maintenance, we provide end-to-end solar energy services tailored to your specific needs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:home-smile-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 tracking-tight mb-2">Panel Installation</h3>
<p className="text-sm leading-relaxed">Professional mounting and wiring of high-efficiency solar panels on any roof type with minimal disruption.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:wrench-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 tracking-tight mb-2">System Maintenance</h3>
<p className="text-sm leading-relaxed">Regular cleaning, inspection, and performance tuning to ensure your system operates at peak efficiency year-round.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:battery-charge-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 tracking-tight mb-2">Battery Setup</h3>
<p className="text-sm leading-relaxed">Store excess energy for nighttime use or power outages with state-of-the-art lithium-ion battery integration.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 tracking-tight mb-2">Inverter Installation</h3>
<p className="text-sm leading-relaxed">Upgrade or install reliable inverters to convert solar energy into usable AC power for your home appliances safely.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-gray-100" id="packages">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-4">Transparent Solar Packages</h2>
<p className="text-base leading-relaxed">Choose a system size that fits your energy consumption. All packages include standard installation, inverter, and mounting hardware.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

<div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
<h3 className="text-lg font-medium text-gray-900 tracking-tight mb-1">Essential Home</h3>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-4xl font-medium tracking-tight text-gray-900">3KW</span>
<span className="text-sm font-medium text-gray-500">System</span>
</div>
<p className="text-sm mb-6 pb-6 border-b border-gray-200">Perfect for small households with low energy consumption.</p>
<ul className="space-y-4 mb-8 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Estimated 12-15 kWh/day output</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Tier 1 Solar Panels (Approx. 8-10)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>3kW Single Phase Inverter</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Standard Installation Included</span>
</li>
</ul>
<div className="text-lg font-medium text-gray-900 mb-4">Starting at $3,500</div>
<a className="block w-full text-center bg-white border border-gray-300 text-gray-900 text-sm font-medium px-4 py-2.5 rounded-lg shadow-sm hover:bg-gray-50 transition-colors" href="#contact">Get Quote</a>
</div>

<div className="relative bg-white rounded-2xl p-8 border-2 border-emerald-500 shadow-xl md:-my-4">
<div className="absolute top-0 right-8 -translate-y-1/2">
<span className="bg-emerald-500 text-white text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</span>
</div>
<h3 className="text-lg font-medium text-gray-900 tracking-tight mb-1">Standard Family</h3>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-4xl font-medium tracking-tight text-gray-900">5KW</span>
<span className="text-sm font-medium text-gray-500">System</span>
</div>
<p className="text-sm mb-6 pb-6 border-b border-gray-100">Ideal for average-sized homes to significantly offset energy bills.</p>
<ul className="space-y-4 mb-8 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Estimated 20-22 kWh/day output</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Tier 1 Solar Panels (Approx. 14-16)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>5kW Premium Inverter</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Smart Energy Monitoring App</span>
</li>
</ul>
<div className="text-lg font-medium text-gray-900 mb-4">Starting at $5,200</div>
<a className="block w-full text-center bg-emerald-600 text-white text-sm font-medium px-4 py-2.5 rounded-lg shadow-sm hover:bg-emerald-700 transition-colors" href="#contact">Install Now</a>
</div>

<div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
<h3 className="text-lg font-medium text-gray-900 tracking-tight mb-1">Business / Large Home</h3>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-4xl font-medium tracking-tight text-gray-900">10KW</span>
<span className="text-sm font-medium text-gray-500">System</span>
</div>
<p className="text-sm mb-6 pb-6 border-b border-gray-200">Designed for high energy consumers or small commercial properties.</p>
<ul className="space-y-4 mb-8 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Estimated 40-45 kWh/day output</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>High-Output Panels (Approx. 25-30)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>10kW 3-Phase Inverter Setup</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Custom Roof Engineering</span>
</li>
</ul>
<div className="text-lg font-medium text-gray-900 mb-4">Contact for Price</div>
<a className="block w-full text-center bg-white border border-gray-300 text-gray-900 text-sm font-medium px-4 py-2.5 rounded-lg shadow-sm hover:bg-gray-50 transition-colors" href="#contact">Get Custom Quote</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<div className="text-emerald-600 text-sm font-medium tracking-wide uppercase mb-3">About Us</div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-gray-900 mb-6">Empowering communities with clean, renewable energy.</h2>
<p className="text-base leading-relaxed mb-6">
                            With over a decade of experience in the renewable energy sector, SLRX is committed to making solar power accessible, affordable, and reliable. We handle everything from design and permitting to installation and maintenance.
                        </p>
<p className="text-base leading-relaxed mb-8">
                            Switching to solar isn't just about saving money on utility bills; it's about investing in a sustainable future for the next generation. We partner with top-tier manufacturers to ensure your system stands the test of time.
                        </p>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
<div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 mb-1">Drastically Reduce Bills</h4>
<p className="text-xs text-gray-500 leading-relaxed">Generate your own electricity and protect yourself from rising utility rates.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
<div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-xl" icon="solar:global-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 mb-1">Eco-Friendly Power</h4>
<p className="text-xs text-gray-500 leading-relaxed">Lower your carbon footprint using 100% clean, renewable energy from the sun.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-emerald-600/10 rounded-3xl translate-x-4 translate-y-4 -z-10"></div>
<img alt="Solar Installers at Work" className="rounded-3xl shadow-lg border border-gray-100 w-full object-cover h-[500px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
<div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:medal-star-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900 tracking-tight">Certified Experts</div>
<div className="text-xs text-gray-500">Fully licensed &amp; insured</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-12 text-center">What Our Customers Say</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon className="text-lg" icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-fall-linear"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-gray-700 mb-6">"The installation was incredibly smooth. The team was professional, cleaned up after themselves, and my energy bill dropped by 80% in the first month. Highly recommend!"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-medium text-xs">SJ</div>
<div>
<div className="text-sm font-medium text-gray-900">Sarah Jenkins</div>
<div className="text-xs text-gray-500">5KW System Owner</div>
</div>
</div>
</div>
<div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon className="text-lg" icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-fall-linear"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-gray-700 mb-6">"Great communication from getting the quote to turning the system on. They explained the app clearly, and I love seeing how much power I generate daily."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-medium text-xs">MR</div>
<div>
<div className="text-sm font-medium text-gray-900">Mark Roberts</div>
<div className="text-xs text-gray-500">3KW System Owner</div>
</div>
</div>
</div>
<div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon className="text-lg" icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-fall-linear"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-gray-700 mb-6">"We installed a 10KW system for our small business. The ROI calculation they provided was spot on, and we are proud to run on green energy now."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium text-xs">EL</div>
<div>
<div className="text-sm font-medium text-gray-900">Elena Lopez</div>
<div className="text-xs text-gray-500">Business Owner</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-100">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white rounded-xl border border-gray-200 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer font-medium text-gray-900">
<span>How long do solar panels last?</span>
<span className="transition duration-300 group-open:-rotate-180 text-gray-400">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-sm text-gray-600 mt-4 leading-relaxed">
                            Most modern solar panels are built to last 25 to 30 years or more. While their efficiency decreases slightly over time (usually about 0.5% per year), they will still produce a significant amount of electricity decades after installation.
                        </p>
</details>
<details className="group bg-white rounded-xl border border-gray-200 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer font-medium text-gray-900">
<span>Do solar panels work on cloudy days?</span>
<span className="transition duration-300 group-open:-rotate-180 text-gray-400">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-sm text-gray-600 mt-4 leading-relaxed">
                            Yes. Solar panels generate electricity from daylight, not just direct sunlight. While production is highest on clear, sunny days, your panels will still generate power when it's cloudy.
                        </p>
</details>
<details className="group bg-white rounded-xl border border-gray-200 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer font-medium text-gray-900">
<span>Will I still receive an electric bill?</span>
<span className="transition duration-300 group-open:-rotate-180 text-gray-400">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-sm text-gray-600 mt-4 leading-relaxed">
                            Usually, yes. Unless your system includes significant battery storage and you go completely "off-grid," you will remain connected to the utility grid. However, your bill will be drastically reduced, and in some cases, you may earn credits for excess power sent back to the grid.
                        </p>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-2">Request a Free Quote</h2>
<p className="text-sm text-gray-500 mb-8">Fill out the form below and our team will get back to you within 24 hours to schedule a site assessment.</p>
<form className="space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">First Name</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Last Name</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Email Address</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Phone Number</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors" placeholder="(555) 123-4567" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">How can we help?</label>
<textarea className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors resize-none" placeholder="Tell us about your home, current energy bill, or package interest..." rows="4"></textarea>
</div>
<button className="w-full bg-gray-900 text-white text-sm font-medium px-4 py-3 rounded-lg shadow-sm hover:bg-gray-800 transition-colors" type="submit">
                                Submit Request
                            </button>
</form>
</div>

<div className="flex flex-col h-full">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
<div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center">
<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-emerald-600 mb-3 border border-gray-100">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-gray-900">Call Us</h4>
<p className="text-xs text-gray-500 mt-1">+1 (800) 555-0199</p>
<p className="text-xs text-gray-400">Mon-Fri, 8am - 6pm</p>
</div>
<div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center">
<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-emerald-600 mb-3 border border-gray-100">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-gray-900">Email Us</h4>
<p className="text-xs text-gray-500 mt-1">hello@slrx-energy.com</p>
<p className="text-xs text-gray-400">24/7 Support</p>
</div>
</div>

<a className="mb-8 flex items-center justify-center gap-2 w-full bg-[#25D366] text-white text-sm font-medium px-4 py-3 rounded-lg shadow-sm hover:bg-[#20bd5a] transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:chat-round-line-linear"></iconify-icon>
                            Chat with us on WhatsApp
                        </a>

<div className="flex-grow min-h-[250px] bg-gray-100 rounded-2xl border border-gray-200 relative overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#9ca3af 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10 flex flex-col items-center text-gray-500">
<iconify-icon className="text-4xl mb-2 text-emerald-600" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm font-medium text-gray-700">123 Solar Way, Eco District</span>
<span className="text-xs">California, CA 90210</span>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div className="col-span-1 md:col-span-2">
<a className="text-white font-semibold text-lg tracking-tighter flex items-center gap-1 mb-4" href="#">
<iconify-icon className="text-amber-500 text-xl" icon="solar:sun-2-linear"></iconify-icon>
                        SLRX
                    </a>
<p className="text-sm leading-relaxed max-w-sm">
                        Leading the transition to sustainable energy with premium solar panel installations for residential and commercial properties.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Quick Links</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-emerald-400 transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#packages">Pricing Packages</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Warranty Info</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
<p>© 2023 SLRX Energy. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:facebook-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:twitter-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:instagram-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
