import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        function switchPage(pageId) {
            const home = document.getElementById('home-page');
            const services = document.getElementById('services-page');
            
            window.scrollTo({ top: 0, behavior: 'smooth' });

            if (pageId === 'home') {
                home.classList.remove('hidden-page');
                services.classList.add('hidden-page');
            } else {
                home.classList.add('hidden-page');
                services.classList.remove('hidden-page');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-red-600 text-white text-sm py-2 px-6 flex justify-between items-center font-medium tracking-wide">
<span>24/7 Operational Readiness</span>
<div className="flex gap-6">
<span className="hidden md:inline">Emergency: (877) 824-9888</span>
<a className="hover:underline" href="#">Client Portal -&gt;</a>
</div>
</div>

<nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2 cursor-pointer" onclick="switchPage('home')">
<div className="relative">
<span className="text-3xl font-semibold tracking-tighter text-white">ABC</span>
<span className="text-3xl font-semibold tracking-tighter text-red-600 absolute left-0 top-0 mix-blend-overlay opacity-50">ABC</span>
</div>
<span className="text-lg font-medium tracking-tight text-slate-400 border-l border-slate-700 pl-3 ml-1">MECHANICAL</span>
</div>

<div className="hidden md:flex items-center gap-8">
<button className="text-sm font-medium text-slate-300 hover:text-white transition-colors" onclick="switchPage('home')">Home</button>
<button className="text-sm font-medium text-slate-300 hover:text-white transition-colors" onclick="switchPage('services')">Services</button>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Projects</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">About</a>
<a className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-200 transition-all" href="#">Contact Us</a>
</div>

<button className="md:hidden text-white"><i data-lucide="menu"></i></button>
</div>
</nav>

<main id="main-content">

<div className="page-section" id="home-page">

<section className="relative pt-20 pb-32 overflow-hidden border-b border-white/5">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-red-600/20 rounded-full blur-[120px] -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
                            Fort Lauderdale Based
                        </div>
<h1 className="text-6xl md:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
                            Precision-Driven <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">HVAC Excellence.</span>
</h1>
<p className="text-xl text-slate-400 max-w-lg leading-relaxed">
                            Built on precision, accountability, and operational excellence. We deliver advanced cooling and heating solutions that reduce utility costs and ensure compliance.
                        </p>
<div className="flex flex-wrap gap-6 pt-4">
<div className="flex items-center gap-3">
<div className="bg-slate-900 p-2 rounded-lg border border-white/10">
<i className="text-red-500 w-5 h-5" data-lucide="zap"></i>
</div>
<span className="text-slate-300 text-sm">Energy Efficient</span>
</div>
<div className="flex items-center gap-3">
<div className="bg-slate-900 p-2 rounded-lg border border-white/10">
<i className="text-red-500 w-5 h-5" data-lucide="shield-check"></i>
</div>
<span className="text-slate-300 text-sm">Precision Install</span>
</div>
<div className="flex items-center gap-3">
<div className="bg-slate-900 p-2 rounded-lg border border-white/10">
<i className="text-red-500 w-5 h-5" data-lucide="bar-chart-3"></i>
</div>
<span className="text-slate-300 text-sm">ROI Focused</span>
</div>
</div>
</div>

<div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative group">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
<div className="mb-6">
<h3 className="text-2xl font-semibold text-white tracking-tight">Request an Assessment</h3>
<p className="text-slate-400 mt-2 text-base">Get a comprehensive audit of your facility's HVAC needs.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">First Name</label>
<input className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Last Name</label>
<input className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Company Email</label>
<input className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="jane@company.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">System Type</label>
<div className="relative">
<select className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-red-500 transition-colors">
<option>Commercial HVAC</option>
<option>Industrial Refrigeration</option>
<option>Building Automation</option>
<option>Maintenance Plan</option>
</select>
<i className="absolute right-4 top-3.5 w-4 h-4 text-slate-500" data-lucide="chevron-down"></i>
</div>
</div>
<button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-4 rounded-lg transition-all shadow-[0_0_20px_-5px_rgba(220,38,38,0.5)] mt-2 flex justify-center items-center gap-2" type="button">
                                Get Consultation <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<p className="text-xs text-slate-500 text-center pt-2">Zero obligation. 24 hour response time guaranteed.</p>
</form>
</div>
</div>
</section>

<section className="border-b border-white/5 py-12 bg-slate-950">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm font-medium text-slate-500 mb-8 uppercase tracking-widest">Authorized Integration Partners</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<h3 className="text-2xl font-bold tracking-tighter text-white">Honeywell</h3>
<h3 className="text-2xl font-bold tracking-tighter text-white italic">Johnson Controls</h3>
<h3 className="text-2xl font-bold tracking-tighter text-white">Carrier</h3>
<h3 className="text-2xl font-bold tracking-tighter text-white">TRANE</h3>
<h3 className="text-2xl font-bold tracking-tighter text-white">DAIKIN</h3>
</div>
</div>
</section>

<section className="py-24 bg-black relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Our Expertise</h2>
<p className="text-xl text-slate-400 max-w-2xl">From predictive maintenance to complex VRF installations, we engineer environments for success.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-slate-900 border border-white/10 min-h-[400px]">
<img alt="Engineer" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<h3 className="text-2xl font-semibold text-white mb-2">Predictive Maintenance</h3>
<p className="text-slate-300 text-lg max-w-md">Using IoT sensors and data analytics to predict failures before they impact your operations.</p>
</div>
</div>

<div className="md:col-span-1 relative group overflow-hidden rounded-2xl bg-slate-900 border border-white/10">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-900/40 via-slate-900 to-slate-900"></div>
<div className="p-8 h-full flex flex-col justify-between relative z-10">
<i className="w-10 h-10 text-red-500 mb-4" data-lucide="cpu"></i>
<div>
<h3 className="text-xl font-semibold text-white mb-2">BAS Integration</h3>
<p className="text-slate-400">Seamless integration with Niagara, Honeywell, and proprietary control systems.</p>
</div>
</div>
</div>

<div className="md:col-span-1 relative group overflow-hidden rounded-2xl bg-slate-900 border border-white/10 p-8 hover:bg-slate-800/50 transition-colors">
<i className="w-10 h-10 text-white mb-6" data-lucide="fan"></i>
<h3 className="text-xl font-semibold text-white mb-2">VRF Solutions</h3>
<p className="text-slate-400">High-efficiency variable refrigerant flow systems for modern high-rises.</p>
</div>

<div className="md:col-span-1 relative group overflow-hidden rounded-2xl bg-slate-900 border border-white/10 p-8 hover:bg-slate-800/50 transition-colors">
<i className="w-10 h-10 text-white mb-6" data-lucide="thermometer"></i>
<h3 className="text-xl font-semibold text-white mb-2">Chiller Optimization</h3>
<p className="text-slate-400">Restoring peak performance to water-cooled and air-cooled chiller plants.</p>
</div>

<div className="md:col-span-1 relative group overflow-hidden rounded-2xl bg-slate-900 border border-white/10 p-8 hover:bg-slate-800/50 transition-colors">
<i className="w-10 h-10 text-white mb-6" data-lucide="wind"></i>
<h3 className="text-xl font-semibold text-white mb-2">Air Quality Control</h3>
<p className="text-slate-400">HEPA filtration and UV-C implementation for medical-grade air quality.</p>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-slate-950">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
<div>
<div className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-2">35+</div>
<div className="text-slate-500 text-sm font-medium uppercase tracking-wider">Years Experience</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-2">24/7</div>
<div className="text-slate-500 text-sm font-medium uppercase tracking-wider">Emergency Response</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-2">100%</div>
<div className="text-slate-500 text-sm font-medium uppercase tracking-wider">Project Compliance</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-2">4hr</div>
<div className="text-slate-500 text-sm font-medium uppercase tracking-wider">Avg Response Time</div>
</div>
</div>
</section>

<section className="py-24 bg-black overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl opacity-20 blur-xl"></div>
<img alt="Van" className="relative rounded-2xl border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-8">The ABC Standard Operating Procedure</h2>
<div className="space-y-8">
<div className="flex gap-6">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-white font-semibold">1</div>
<div>
<h4 className="text-xl font-medium text-white mb-2">Operational Assessment</h4>
<p className="text-slate-400 text-lg">We don't just fix; we analyze. Every engagement starts with a deep dive into your system's efficiency metrics.</p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-white font-semibold">2</div>
<div>
<h4 className="text-xl font-medium text-white mb-2">Strategic Implementation</h4>
<p className="text-slate-400 text-lg">Deploying NATE-certified technicians equipped with the latest diagnostic tools and OEM parts.</p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-white font-semibold">3</div>
<div>
<h4 className="text-xl font-medium text-white mb-2">Continuous Optimization</h4>
<p className="text-slate-400 text-lg">Post-service monitoring ensures your systems maintain peak efficiency long after we leave.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 border-t border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="mb-8">
<i className="w-12 h-12 text-slate-700 mx-auto" data-lucide="quote"></i>
</div>
<blockquote className="text-2xl md:text-4xl font-medium text-white tracking-tight leading-relaxed mb-8">
                        "ABC Mechanical transformed our building's efficiency. We saw a 22% reduction in energy costs within the first quarter of their BAS implementation."
                    </blockquote>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 bg-slate-800 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<div className="text-left">
<div className="text-white font-medium">David Miller</div>
<div className="text-slate-500 text-sm">Director of Facilities, Beacon Tower</div>
</div>
</div>
</div>
</section>

<section className="py-20 relative overflow-hidden">
<div className="absolute inset-0 bg-red-600"></div>
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">Ready to optimize your facility?</h2>
<p className="text-red-100 text-lg">Join the leading commercial entities in Fort Lauderdale.</p>
</div>
<div className="flex gap-4">
<button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                            Schedule Service
                        </button>
<button className="bg-red-700 text-white px-8 py-4 rounded-lg font-semibold border border-red-500 hover:bg-red-800 transition-colors">
                            Call (877) 824-9888
                        </button>
</div>
</div>
</section>
</div> 

<div className="page-section hidden-page" id="services-page">

<section className="relative pt-32 pb-20 bg-slate-950 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl">
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6">Comprehensive <br/>HVAC Solutions</h1>
<p className="text-xl text-slate-400 leading-relaxed">
                            We don't offer generic fixes. We provide engineered solutions tailored to the unique demands of high-rise, industrial, and commercial infrastructure.
                        </p>
</div>
</div>
</section>

<section className="py-24 bg-black">
<div className="max-w-7xl mx-auto px-6">

<div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
<div className="order-2 md:order-1">
<div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center mb-6">
<i className="text-red-500 w-6 h-6" data-lucide="settings"></i>
</div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">HVAC Control Integration</h2>
<p className="text-lg text-slate-400 mb-6">
                                Modern buildings require brains, not just brawn. We specialize in retrofitting legacy systems with modern Building Automation Systems (BAS).
                            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-slate-300">
<i className="text-red-500 w-5 h-5" data-lucide="check"></i> Niagara Framework Integration
                                </li>
<li className="flex items-center gap-3 text-slate-300">
<i className="text-red-500 w-5 h-5" data-lucide="check"></i> Remote Monitoring &amp; Diagnostics
                                </li>
<li className="flex items-center gap-3 text-slate-300">
<i className="text-red-500 w-5 h-5" data-lucide="check"></i> Energy Consumption Analytics
                                </li>
</ul>
<a className="text-white border-b border-red-500 pb-1 hover:text-red-500 transition-colors inline-flex items-center gap-2" href="#">Explore Controls <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
<div className="order-1 md:order-2">
<img className="rounded-2xl border border-white/10 shadow-2xl" src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>

<div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
<div>
<img className="rounded-2xl border border-white/10 shadow-2xl" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div>
<div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center mb-6">
<i className="text-red-500 w-6 h-6" data-lucide="tool"></i>
</div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Predictive Maintenance</h2>
<p className="text-lg text-slate-400 mb-6">
                                Stop reacting to emergencies. Our predictive maintenance plans use data to forecast component lifecycles, allowing for scheduled replacements that don't disrupt business.
                            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-slate-300">
<i className="text-red-500 w-5 h-5" data-lucide="check"></i> Vibration Analysis
                                </li>
<li className="flex items-center gap-3 text-slate-300">
<i className="text-red-500 w-5 h-5" data-lucide="check"></i> Thermal Imaging Inspections
                                </li>
<li className="flex items-center gap-3 text-slate-300">
<i className="text-red-500 w-5 h-5" data-lucide="check"></i> Fluid Analysis
                                </li>
</ul>
<a className="text-white border-b border-red-500 pb-1 hover:text-red-500 transition-colors inline-flex items-center gap-2" href="#">View Maintenance Plans <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center mb-6">
<i className="text-red-500 w-6 h-6" data-lucide="hammer"></i>
</div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Capital Projects &amp; Retrofits</h2>
<p className="text-lg text-slate-400 mb-6">
                                Whether it's a cooling tower replacement via helicopter lift or a full chiller plant overhaul, our project management team ensures on-time, on-budget delivery.
                            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-slate-300">
<i className="text-red-500 w-5 h-5" data-lucide="check"></i> Turnkey Installation
                                </li>
<li className="flex items-center gap-3 text-slate-300">
<i className="text-red-500 w-5 h-5" data-lucide="check"></i> Engineering &amp; Permitting
                                </li>
<li className="flex items-center gap-3 text-slate-300">
<i className="text-red-500 w-5 h-5" data-lucide="check"></i> Commissioning &amp; Validation
                                </li>
</ul>
<a className="text-white border-b border-red-500 pb-1 hover:text-red-500 transition-colors inline-flex items-center gap-2" href="#">See Portfolio <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
<div className="order-1 md:order-2">
<img className="rounded-2xl border border-white/10 shadow-2xl" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 border-y border-white/5">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white text-center mb-16 tracking-tight">The ABC Difference</h2>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-white/10">
<th className="py-6 px-4 text-slate-500 font-medium">Feature</th>
<th className="py-6 px-4 text-white font-semibold text-lg">ABC Mechanical</th>
<th className="py-6 px-4 text-slate-600 font-medium">Standard Contractors</th>
</tr>
</thead>
<tbody className="text-slate-300">
<tr className="border-b border-white/5">
<td className="py-6 px-4 font-medium">Response Time</td>
<td className="py-6 px-4 text-green-400">Under 4 Hours (Guaranteed)</td>
<td className="py-6 px-4 text-slate-500">24-48 Hours</td>
</tr>
<tr className="border-b border-white/5">
<td className="py-6 px-4 font-medium">Technician Certifications</td>
<td className="py-6 px-4 text-white">NATE, OSHA 30, Manufacturer Specific</td>
<td className="py-6 px-4 text-slate-500">General License</td>
</tr>
<tr className="border-b border-white/5">
<td className="py-6 px-4 font-medium">Reporting</td>
<td className="py-6 px-4 text-white">Digital, Real-time with Photos</td>
<td className="py-6 px-4 text-slate-500">Paper/Carbon Copy</td>
</tr>
<tr className="border-b border-white/5">
<td className="py-6 px-4 font-medium">Pricing Model</td>
<td className="py-6 px-4 text-white">Transparent Flat Rate</td>
<td className="py-6 px-4 text-slate-500">Hourly + Hidden Fees</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-24 bg-black">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white mb-12 tracking-tight">Industries We Serve</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="bg-slate-900 border border-white/10 p-6 rounded-xl hover:border-red-500/50 transition-colors cursor-default">
<i className="w-8 h-8 text-white mb-4" data-lucide="building-2"></i>
<h4 className="font-medium text-white">Commercial Office</h4>
</div>
<div className="bg-slate-900 border border-white/10 p-6 rounded-xl hover:border-red-500/50 transition-colors cursor-default">
<i className="w-8 h-8 text-white mb-4" data-lucide="factory"></i>
<h4 className="font-medium text-white">Industrial / Warehouse</h4>
</div>
<div className="bg-slate-900 border border-white/10 p-6 rounded-xl hover:border-red-500/50 transition-colors cursor-default">
<i className="w-8 h-8 text-white mb-4" data-lucide="heart-pulse"></i>
<h4 className="font-medium text-white">Healthcare Facilities</h4>
</div>
<div className="bg-slate-900 border border-white/10 p-6 rounded-xl hover:border-red-500/50 transition-colors cursor-default">
<i className="w-8 h-8 text-white mb-4" data-lucide="server"></i>
<h4 className="font-medium text-white">Data Centers</h4>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 border-t border-white/5">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white mb-12 tracking-tight text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-slate-900 rounded-xl border border-white/10 open:border-red-500/30">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white">
<span>Do you offer 24/7 emergency service?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-slate-400 px-6 pb-6 pt-0 leading-relaxed">
                                Yes. We have on-call technicians available 24 hours a day, 365 days a year for our contract clients. Call (877) 824-9888 for immediate assistance.
                            </div>
</details>
<details className="group bg-slate-900 rounded-xl border border-white/10 open:border-red-500/30">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white">
<span>Which manufacturers do you service?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-slate-400 px-6 pb-6 pt-0 leading-relaxed">
                                We are certified to service all major brands including Trane, Carrier, York, Daikin, McQuay, and Lennox commercial systems.
                            </div>
</details>
<details className="group bg-slate-900 rounded-xl border border-white/10 open:border-red-500/30">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white">
<span>What areas do you cover?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-slate-400 px-6 pb-6 pt-0 leading-relaxed">
                                We primarily serve the Tri-County area: Miami-Dade, Broward, and Palm Beach counties.
                            </div>
</details>
</div>
</div>
</section>
</div> 
</main>

<footer className="bg-slate-950 border-t border-white/10 pt-20 pb-10 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<span className="text-2xl font-bold tracking-tighter text-white">ABC</span>
<span className="text-sm font-medium tracking-tight text-slate-400 border-l border-slate-700 pl-2">MECHANICAL</span>
</div>
<p className="text-slate-500 mb-6 max-w-sm leading-relaxed">
                        Driving operational excellence &amp; customer success through superior HVAC solutions. Fort Lauderdale's premier commercial mechanical contractor.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>
<div>
<h4 className="font-semibold text-white mb-4">Services</h4>
<ul className="space-y-3 text-slate-500">
<li><a className="hover:text-red-500 transition-colors" href="#">Installations</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Maintenance</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Automation (BAS)</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">VRF Systems</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white mb-4">Company</h4>
<ul className="space-y-3 text-slate-500">
<li><a className="hover:text-red-500 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Projects</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white mb-4">Contact</h4>
<ul className="space-y-3 text-slate-500">
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="phone"></i> (877) 824-9888</li>
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="mail"></i> info@abcmech.com</li>
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="map-pin"></i> 800 Corporate Dr, Ft Lauderdale</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-slate-600">
                    © 2024 ABC Mechanical LLC. All rights reserved.
                </div>
<div className="flex gap-6 text-slate-600">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms of Service</a>
<a className="hover:text-slate-400" href="#">Accessibility</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
