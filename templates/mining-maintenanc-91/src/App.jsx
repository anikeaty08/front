import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-2xl font-semibold tracking-tighter text-white flex items-baseline" href="#">
                IMM<span className="text-amber-500 text-3xl leading-none">.</span>
</a>
<nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
<a className="text-neutral-400 hover:text-white transition-colors" href="#services">Capabilities</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#about">Equipment</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#contact">Operations</a>
</nav>
<div className="hidden md:block">
<a className="text-sm font-medium text-black bg-amber-500 hover:bg-amber-400 transition-colors px-5 py-2.5 rounded-sm" href="#contact">
                    Request Dispatch
                </a>
</div>

<button className="md:hidden text-white flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</header>
<main className="flex-grow">

<section className="relative pt-40 pb-24 md:pt-56 md:pb-32 overflow-hidden border-b border-white/5">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full opacity-20 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-amber-500/20 to-transparent blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl">
<div className="flex items-center space-x-2 mb-6">
<div className="h-px w-8 bg-amber-500"></div>
<span className="text-xs font-medium text-amber-500 uppercase tracking-widest">Uncompromising Uptime</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-tight mb-6">
                        Heavy-duty maintenance for independent operations.
                    </h1>
<p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl font-normal leading-relaxed">
                        We don't do downtime. IMM delivers specialized repair, preventative maintenance, and rapid-response diagnostics for mission-critical mining equipment.
                    </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
<a className="w-full sm:w-auto text-center text-sm font-medium text-black bg-amber-500 hover:bg-amber-400 transition-colors px-6 py-3 rounded-sm" href="#contact">
                            Initiate Service Request
                        </a>
<a className="w-full sm:w-auto text-center text-sm font-medium text-white border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-colors px-6 py-3 rounded-sm flex items-center justify-center space-x-2" href="#services">
<span>View Capabilities</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="absolute bottom-0 right-0 p-6 hidden lg:block opacity-30">
<svg height="200" viewbox="0 0 200 200" width="200" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="20" id="grid" patternunits="userSpaceOnUse" width="20">
<path d="M 20 0 L 0 0 0 20" fill="none" stroke="#404040" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="200" width="200"></rect>
</svg>
</div>
</section>

<section className="bg-neutral-950 border-b border-white/5 py-12">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
<div className="px-4">
<p className="text-3xl font-semibold text-white tracking-tight mb-1">24/7</p>
<p className="text-xs text-neutral-500 font-medium uppercase tracking-widest">Emergency Dispatch</p>
</div>
<div className="px-4">
<p className="text-3xl font-semibold text-white tracking-tight mb-1">15+</p>
<p className="text-xs text-neutral-500 font-medium uppercase tracking-widest">Years in the Dirt</p>
</div>
<div className="px-4">
<p className="text-3xl font-semibold text-white tracking-tight mb-1">Zero</p>
<p className="text-xs text-neutral-500 font-medium uppercase tracking-widest">Corners Cut</p>
</div>
<div className="px-4">
<p className="text-3xl font-semibold text-white tracking-tight mb-1">Tier 1</p>
<p className="text-xs text-neutral-500 font-medium uppercase tracking-widest">Certified Techs</p>
</div>
</div>
</section>

<section className="py-24 bg-black relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:flex md:items-end md:justify-between">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Core Capabilities</h2>
<p className="text-base text-neutral-400">Comprehensive mechanical and electrical support designed to keep your extraction rates high and operational costs predictable.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-sm bg-neutral-950 border border-white/5 hover:border-amber-500/30 transition-all duration-300 flex flex-col h-full">
<div className="w-12 h-12 bg-black border border-white/10 flex items-center justify-center rounded-sm mb-6 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-colors">
<iconify-icon className="text-2xl text-amber-500" icon="solar:settings-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Preventative Overhaul</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6 flex-grow">Scheduled teardowns, part replacements, and structural integrity checks to prevent catastrophic failures before they happen.</p>
<div className="w-full h-px bg-white/5 group-hover:bg-amber-500/20 transition-colors mt-auto"></div>
</div>

<div className="group p-8 rounded-sm bg-neutral-950 border border-white/5 hover:border-amber-500/30 transition-all duration-300 flex flex-col h-full">
<div className="w-12 h-12 bg-black border border-white/10 flex items-center justify-center rounded-sm mb-6 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-colors">
<iconify-icon className="text-2xl text-amber-500" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Rapid Emergency Repair</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6 flex-grow">Field-ready mobile units equipped for on-site welding, hydraulic repair, and heavy powertrain diagnostics when machines go down.</p>
<div className="w-full h-px bg-white/5 group-hover:bg-amber-500/20 transition-colors mt-auto"></div>
</div>

<div className="group p-8 rounded-sm bg-neutral-950 border border-white/5 hover:border-amber-500/30 transition-all duration-300 flex flex-col h-full">
<div className="w-12 h-12 bg-black border border-white/10 flex items-center justify-center rounded-sm mb-6 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-colors">
<iconify-icon className="text-2xl text-amber-500" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Compliance &amp; Safety</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6 flex-grow">Rigorous MSHA-aligned inspections, emissions testing, and safety system calibrations to keep your fleet operational and legal.</p>
<div className="w-full h-px bg-white/5 group-hover:bg-amber-500/20 transition-colors mt-auto"></div>
</div>
</div>
</div>
</section>

<div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<section className="py-24 bg-neutral-950" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:flex lg:gap-16">
<div className="lg:w-1/2 mb-12 lg:mb-0">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Deploy a Crew.</h2>
<p className="text-base text-neutral-400 mb-8 max-w-md">
                        Whether it's a scheduled shutdown or a critical failure at 3 AM, IMM is ready to deploy. Provide your details and our dispatch will contact you immediately.
                    </p>
<div className="space-y-6">
<div className="flex items-start space-x-4">
<iconify-icon className="text-xl text-amber-500 mt-1" icon="solar:map-point-linear"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-white mb-1">Headquarters</h4>
<p className="text-sm text-neutral-500">100 Industrial Parkway<br/>Mining District, NV 89001</p>
</div>
</div>
<div className="flex items-start space-x-4">
<iconify-icon className="text-xl text-amber-500 mt-1" icon="solar:phone-calling-linear"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-white mb-1">24/7 Dispatch</h4>
<p className="text-sm text-neutral-500">1-800-IMM-REPAIR</p>
</div>
</div>
</div>
</div>
<div className="lg:w-1/2">
<form className="bg-black p-8 border border-white/5 rounded-sm">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
<div>
<label className="block text-xs font-medium text-neutral-400 mb-2 uppercase tracking-widest" htmlFor="name">Foreman / Contact</label>
<input className="w-full bg-neutral-950 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors" id="name" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-2 uppercase tracking-widest" htmlFor="company">Operation Name</label>
<input className="w-full bg-neutral-950 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors" id="company" placeholder="XYZ Mining Co." type="text"/>
</div>
</div>
<div className="mb-6">
<label className="block text-xs font-medium text-neutral-400 mb-2 uppercase tracking-widest" htmlFor="priority">Priority Level</label>
<div className="relative">
<select className="w-full bg-neutral-950 border border-white/10 rounded-sm px-4 py-3 text-sm text-white appearance-none focus:outline-none focus:border-amber-500 transition-colors cursor-pointer" id="priority">
<option>Standard Maintenance</option>
<option>Urgent Repair (Next Available)</option>
<option>AOG / Equipment Down (Immediate)</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="mb-8">
<label className="block text-xs font-medium text-neutral-400 mb-2 uppercase tracking-widest" htmlFor="issue">Equipment &amp; Issue Details</label>
<textarea className="w-full bg-neutral-950 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors resize-none" id="issue" placeholder="Describe the machinery and symptoms..." rows="4"></textarea>
</div>
<button className="w-full text-sm font-medium text-black bg-amber-500 hover:bg-amber-400 transition-colors px-6 py-4 rounded-sm flex items-center justify-center space-x-2" type="button">
<span>Submit Request</span>
<iconify-icon icon="solar:plain-2-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</section>
</main>

<footer className="bg-black py-8 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
<div className="mb-4 md:mb-0">
<span className="text-xl font-semibold tracking-tighter text-white">IMM<span className="text-amber-500">.</span></span>
</div>
<div className="text-xs text-neutral-600 font-medium">
                © 2024 Independent Mine Maintenance. All rights reserved.
            </div>
<div className="flex space-x-6 mt-4 md:mt-0 text-xs font-medium text-neutral-500">
<a className="hover:text-amber-500 transition-colors" href="#">Terms</a>
<a className="hover:text-amber-500 transition-colors" href="#">Privacy</a>
<a className="hover:text-amber-500 transition-colors" href="#">Dispatch Portal</a>
</div>
</div>
</footer>

    </>
  );
}
