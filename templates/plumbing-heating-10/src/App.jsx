import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Phone Number Logic
        const areaSelector = document.getElementById('areaSelector');
        const dynamicPhone = document.getElementById('dynamicPhone');
        
        const phoneNumbers = {
            'main': { text: '(508) 757-4803', link: 'tel:5087574803' },
            'shrewsbury': { text: '(508) 842-0498', link: 'tel:5088420498' },
            'westborough': { text: '(508) 366-0498', link: 'tel:5083660498' },
            'holden': { text: '(508) 829-6011', link: 'tel:5088296011' },
            'auburn': { text: '(508) 832-4338', link: 'tel:5088324338' }
        };

        areaSelector.addEventListener('change', (e) => {
            const selected = phoneNumbers[e.target.value];
            if(selected) {
                dynamicPhone.textContent = selected.text;
                dynamicPhone.href = selected.link;
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-white/5">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5">
<iconify-icon className="text-blue-400" icon="solar:shield-check-linear"></iconify-icon>
                    Est. 1916 (3 Generations)
                </span>
<span className="hidden sm:inline text-slate-700">|</span>
<span className="flex items-center gap-1.5 text-orange-400 font-medium">
<iconify-icon icon="solar:bell-linear"></iconify-icon>
                    24/7 Emergency Dispatch
                </span>
</div>
<div className="flex items-center gap-2">
<span>Real people answer day or night.</span>
</div>
</div>
</div>

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/80">
<div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">

<a className="flex flex-col group" href="#">
<span className="font-medium tracking-tight text-xl leading-none text-slate-900 group-hover:text-blue-700 transition-colors">GARABEDIAN</span>
<span className="text-[0.6rem] tracking-widest text-zinc-500 uppercase mt-0.5">Plumbing &amp; Heating Inc.</span>
</a>

<nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-600">
<a className="hover:text-slate-900 transition-colors" href="#plumbing">Plumbing</a>
<a className="hover:text-slate-900 transition-colors" href="#heating">Heating</a>
<a className="hover:text-slate-900 transition-colors" href="#drains">Drains</a>
<a className="hover:text-slate-900 transition-colors" href="#commercial">Commercial</a>
<a className="hover:text-slate-900 transition-colors" href="#areas">Areas</a>
</nav>

<div className="flex items-center gap-4">

<div className="hidden md:flex flex-col items-end">
<select className="custom-select bg-transparent text-xs text-zinc-500 border-none outline-none cursor-pointer pr-6 text-right hover:text-blue-600 transition-colors" id="areaSelector">
<option value="main">Worcester (Main)</option>
<option value="shrewsbury">Shrewsbury</option>
<option value="westborough">Westborough</option>
<option value="holden">Holden</option>
<option value="auburn">Auburn</option>
</select>
<a className="text-base font-medium text-slate-900 tracking-tight hover:text-blue-700 transition-colors leading-none mt-0.5" href="tel:5087574803" id="dynamicPhone">
                        (508) 757-4803
                    </a>
</div>
<a className="hidden sm:inline-flex h-10 items-center justify-center rounded-lg bg-blue-600 px-5 text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" href="#request">
                    Request Service
                </a>

<button className="lg:hidden p-2 text-zinc-600">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-zinc-200 p-3 sm:hidden flex gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
<a className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white rounded-lg h-12 font-medium" href="tel:5087574803">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
            Call Now
        </a>
<a className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white rounded-lg h-12 font-medium" href="#request">
            Request
        </a>
</div>

<section className="relative bg-slate-900 overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32">

<div className="absolute inset-0 z-0">
<div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-3xl"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-3xl"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-blue-400 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    Serving Central MA Since 1916
                </div>
<h1 className="text-4xl md:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                    Worcester’s Trusted Plumbing &amp; Heating Experts.
                </h1>
<p className="text-lg text-slate-400 font-light max-w-2xl mb-8 leading-relaxed">
                    Prompt, reliable service for homes and businesses across Worcester County. Backed by 3 generations of experience and modern diagnostics.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="h-12 px-6 rounded-lg bg-white text-slate-900 font-medium flex items-center justify-center gap-2 hover:bg-zinc-100 transition-colors" href="tel:5087574803">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                        (508) 757-4803
                    </a>
<a className="h-12 px-6 rounded-lg bg-slate-800 border border-slate-700 text-white font-medium flex items-center justify-center hover:bg-slate-700 transition-colors" href="#request">
                        Book Online
                    </a>
</div>
<div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:clock-circle-linear"></iconify-icon>
<span>24/7 Emergency Service</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:city-linear"></iconify-icon>
<span>Residential &amp; Commercial</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-50 border-b border-zinc-200">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-2xl md:text-3xl font-medium text-slate-900 tracking-tight">Everything Flowing Smoothly</h2>
<p className="text-zinc-500 mt-2">Comprehensive solutions for plumbing, heating, and drains.</p>
</div>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1" href="#all-services">
                    View all services <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="group p-6 bg-white rounded-xl border border-zinc-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5 transition-all cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:bath-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900">Plumbing</h3>
<p className="text-xs text-zinc-500 mt-1">Repairs, installs &amp; fixtures</p>
</div>

<div className="group p-6 bg-white rounded-xl border border-zinc-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5 transition-all cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:flame-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900">Heating</h3>
<p className="text-xs text-zinc-500 mt-1">Boilers &amp; Oil-to-Gas</p>
</div>

<div className="group p-6 bg-white rounded-xl border border-zinc-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5 transition-all cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:water-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900">Water Heaters</h3>
<p className="text-xs text-zinc-500 mt-1">Tankless &amp; Traditional</p>
</div>

<div className="group p-6 bg-white rounded-xl border border-zinc-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5 transition-all cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:camera-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900">Drain &amp; Sewer</h3>
<p className="text-xs text-zinc-500 mt-1">Camera inspections &amp; Jetting</p>
</div>

<div className="group p-6 bg-white rounded-xl border border-zinc-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5 transition-all cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center mb-4 group-hover:bg-rose-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:bell-bing-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900">Emergency</h3>
<p className="text-xs text-zinc-500 mt-1">24/7 Rapid Response</p>
</div>

<div className="group p-6 bg-white rounded-xl border border-zinc-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5 transition-all cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:city-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900">Commercial</h3>
<p className="text-xs text-zinc-500 mt-1">Industrial &amp; Design-Build</p>
</div>

<div className="group p-6 bg-white rounded-xl border border-zinc-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5 transition-all cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900">Efficiency</h3>
<p className="text-xs text-zinc-500 mt-1">AC Tune-ups &amp; Maintenance</p>
</div>

<div className="group p-6 bg-white rounded-xl border border-zinc-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5 transition-all cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-warning-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900">Specialty</h3>
<p className="text-xs text-zinc-500 mt-1">Water Cop Shutoff Systems</p>
</div>
</div>
</div>
</section>

<section className="bg-orange-50 border-y border-orange-100 py-8">
<div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-start gap-4">
<div className="bg-orange-100 p-3 rounded-full text-orange-600">
<iconify-icon icon="solar:alarm-add-linear" width="32"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900">Plumbing Emergency?</h3>
<p className="text-sm text-slate-600 mt-1">Water heater failure? Burst pipe? We dispatch immediately, day or night.</p>
</div>
</div>
<div className="flex items-center gap-3 w-full md:w-auto">
<a className="flex-1 md:flex-none whitespace-nowrap h-11 px-6 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors" href="tel:5087574803">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                    Call (508) 757-4803
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 md:px-6">

<div className="grid md:grid-cols-2 gap-12 items-center mb-24">
<div className="order-2 md:order-1">
<div className="inline-block px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-medium mb-4">Heating Experts</div>
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">Keep your home warm all winter.</h2>
<p className="text-zinc-500 mb-6 leading-relaxed">From hydronic heating installations to boiler repairs and oil-to-gas conversions, our licensed technicians ensure your system runs efficiently.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
                            Boiler Repair &amp; Installation
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
                            Oil-to-Gas Conversions
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
                            Radiant &amp; Hydronic Heating
                        </li>
</ul>
<a className="text-sm font-medium text-slate-900 border-b border-slate-900 pb-0.5 hover:text-blue-600 hover:border-blue-600 transition-colors" href="#request">Request Heating Quote</a>
</div>
<div className="order-1 md:order-2 bg-zinc-100 rounded-2xl aspect-video md:aspect-square flex items-center justify-center overflow-hidden relative">

<div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-white"></div>
<iconify-icon className="text-orange-200 text-9xl relative z-10 opacity-50" icon="solar:flame-linear"></iconify-icon>
<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl border border-white shadow-sm z-20">
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Featured Service</p>
<p className="text-sm font-medium text-slate-900">High-Efficiency Gas Boiler Installs</p>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="bg-zinc-100 rounded-2xl aspect-video md:aspect-square flex items-center justify-center overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-bl from-blue-100 to-white"></div>
<iconify-icon className="text-blue-200 text-9xl relative z-10 opacity-50" icon="solar:water-drops-linear"></iconify-icon>
<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl border border-white shadow-sm z-20">
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Advanced Diagnostics</p>
<p className="text-sm font-medium text-slate-900">Camera Inspection &amp; Hydro Jetting</p>
</div>
</div>
<div>
<div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-4">Drain &amp; Sewer</div>
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">Slow drains? We see what others miss.</h2>
<p className="text-zinc-500 mb-6 leading-relaxed">Don't guess with your plumbing. We use state-of-the-art drain cameras to locate blockages and hydro-jetting technology to clear them completely.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
                            Video Camera Inspections
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
                            High-Pressure Hydro Jetting
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
                            Electric Drain Cleaning
                        </li>
</ul>
<a className="text-sm font-medium text-slate-900 border-b border-slate-900 pb-0.5 hover:text-blue-600 hover:border-blue-600 transition-colors" href="#request">Schedule Drain Service</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-2xl md:text-3xl font-medium text-slate-900 tracking-tight">The Garabedian Standard</h2>
<p className="text-zinc-500 mt-4">We’ve been serving Worcester County since 1916. Here is why locals trust us with their homes.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl border border-zinc-200/60 shadow-sm">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mb-6 text-slate-900">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">3 Generations of Service</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Founded in 1916, we bring over a century of knowledge to every job. We aren't a franchise; we are your neighbors.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-zinc-200/60 shadow-sm">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mb-6 text-slate-900">
<iconify-icon icon="solar:chat-round-call-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Real People Answer</h3>
<p className="text-sm text-zinc-500 leading-relaxed">No robots. No endless phone trees. When you call Garabedian, you speak to a real person who can help.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-zinc-200/60 shadow-sm">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mb-6 text-slate-900">
<iconify-icon icon="solar:tag-price-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Honest Assessments</h3>
<p className="text-sm text-zinc-500 leading-relaxed">We quote fairly and do the job right the first time. No hidden fees or unnecessary upsells.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="request">
<div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
<div className="bg-slate-900 rounded-2xl p-8 md:p-12 shadow-2xl text-center md:text-left">
<div className="grid md:grid-cols-2 gap-12">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Request Service</h2>
<p className="text-slate-400 mb-8">Fill out the form and our team will get back to you shortly to confirm your appointment.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<iconify-icon className="text-blue-500 mt-1" icon="solar:map-point-linear" width="20"></iconify-icon>
<div>
<p className="text-white font-medium text-sm">Headquarters</p>
<p className="text-slate-400 text-sm">208 Austin St, Worcester, MA 01609</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-blue-500 mt-1" icon="solar:letter-linear" width="20"></iconify-icon>
<div>
<p className="text-white font-medium text-sm">Email Us</p>
<p className="text-slate-400 text-sm">info@garabedianplumbing.com</p>
</div>
</div>
</div>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full h-11 px-4 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" placeholder="First Name" type="text"/>
<input className="w-full h-11 px-4 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" placeholder="Last Name" type="text"/>
</div>
<input className="w-full h-11 px-4 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" placeholder="Phone Number" type="tel"/>
<div className="grid grid-cols-2 gap-4">
<select className="custom-select w-full h-11 px-4 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
<option disabled="" selected="" value="">Service Area</option>
<option>Worcester</option>
<option>Shrewsbury</option>
<option>Westborough</option>
<option>Holden</option>
<option>Auburn</option>
<option>Other</option>
</select>
<select className="custom-select w-full h-11 px-4 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
<option disabled="" selected="" value="">Service Needed</option>
<option>Plumbing Repair</option>
<option>Heating / Boiler</option>
<option>Drain Cleaning</option>
<option>Water Heater</option>
<option>Commercial</option>
</select>
</div>
<textarea className="w-full h-32 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none" placeholder="How can we help?"></textarea>
<button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors" type="button">Submit Request</button>
<p className="text-xs text-slate-500 text-center">For emergencies, please call us directly.</p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-50 pt-20 pb-8 border-t border-zinc-200">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="flex flex-col mb-6" href="#">
<span className="font-medium tracking-tight text-xl leading-none text-slate-900">GARABEDIAN</span>
<span className="text-[0.6rem] tracking-widest text-zinc-500 uppercase mt-0.5">Plumbing &amp; Heating Inc.</span>
</a>
<p className="text-sm text-zinc-500 mb-6">
                        Providing prompt and reliable plumbing, heating, and drain services to Central Massachusetts since 1916.
                    </p>
<div className="flex gap-4">

<a className="text-zinc-400 hover:text-slate-900" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-slate-900" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Services</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-blue-600" href="#">Plumbing Repair</a></li>
<li><a className="hover:text-blue-600" href="#">Water Heaters</a></li>
<li><a className="hover:text-blue-600" href="#">Boiler Installation</a></li>
<li><a className="hover:text-blue-600" href="#">Oil-to-Gas Conversion</a></li>
<li><a className="hover:text-blue-600" href="#">Drain Camera &amp; Jetting</a></li>
<li><a className="hover:text-blue-600" href="#">Commercial Services</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Service Areas</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-blue-600" href="#">Worcester, MA</a></li>
<li><a className="hover:text-blue-600" href="#">Shrewsbury, MA</a></li>
<li><a className="hover:text-blue-600" href="#">Westborough, MA</a></li>
<li><a className="hover:text-blue-600" href="#">Holden, MA</a></li>
<li><a className="hover:text-blue-600" href="#">Auburn, MA</a></li>
<li><a className="hover:text-blue-600" href="#">West Boylston, MA</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:map-point-linear"></iconify-icon>
                            208 Austin St,<br/>Worcester, MA 01609
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="shrink-0" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-blue-600" href="tel:5087574803">(508) 757-4803</a>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="shrink-0" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-blue-600" href="mailto:info@garabedianplumbing.com">info@garabedianplumbing.com</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400">
<p>© 2023 Garabedian Plumbing, Heating &amp; Air Conditioning Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-600" href="#">Privacy Policy</a>
<a className="hover:text-zinc-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
