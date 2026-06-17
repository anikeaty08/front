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
      

<nav className="fixed w-full z-50 bg-[#0A0C0F]/90 backdrop-blur-md border-b border-[#2A3240]">
<div className="max-w-[1200px] mx-auto px-5 md:px-10 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-[#2A3240] flex items-center justify-center border border-[#3D4A5C]">
<i className="w-5 h-5 text-[#F5A623]" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-[#F0F4F8] uppercase">Volt<span className="text-[#F5A623]">Ind</span></span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-base font-medium text-[#F0F4F8] hover:text-[#F5A623] transition-colors" href="#">Home</a>
<a className="text-base font-medium hover:text-[#F5A623] transition-colors" href="#services">Services</a>
<a className="text-base font-medium hover:text-[#F5A623] transition-colors" href="#projects">Projects</a>
<a className="text-base font-medium hover:text-[#F5A623] transition-colors" href="#about">About</a>
</div>
<div className="hidden md:block">
<a className="inline-flex items-center justify-center bg-[#F5A623] text-[#111418] font-medium text-sm px-6 py-3 rounded-md hover:bg-[#FFBC42] transition-all shadow-[0_0_20px_rgba(245,166,35,0.25)]" href="#contact">
                    Get a Quote
                </a>
</div>
<button className="md:hidden text-[#F0F4F8]">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#0A0C0F]">

<div className="absolute inset-0 z-0">
<img alt="Industrial Worker" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#1A2A4A] to-[#0A0C0F] opacity-90"></div>

<div className="absolute inset-0 bg-[#F5A623] opacity-[0.08] mix-blend-color-burn"></div>
</div>
<div className="max-w-[1200px] mx-auto px-5 md:px-10 relative z-10 grid md:grid-cols-2 gap-12 items-center">
<div className="flex flex-col gap-6">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#2A3240] bg-[#1E242C]/50 backdrop-blur-sm w-fit">
<span className="w-2 h-2 rounded-full bg-[#22A855]"></span>
<span className="text-xs font-medium uppercase tracking-widest text-[#F0F4F8]">Available for projects</span>
</div>
<h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#F0F4F8] leading-[1.05]">
                    BUILDING YOUR <br/>
<span className="text-[#F5A623]">VISION</span>
</h1>
<p className="text-lg md:text-xl text-[#A8B4C2] font-normal leading-relaxed max-w-lg">
                    Innovative solutions for construction, electrical systems, and industrial development. Precision meets authority.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex items-center justify-center gap-2 bg-[#F5A623] text-[#111418] font-medium text-base px-8 py-4 rounded-md hover:bg-[#FFBC42] transition-all shadow-[0_0_20px_rgba(245,166,35,0.25)]" href="#services">
                        Explore Services
                        <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 bg-transparent text-[#F0F4F8] font-medium text-base px-8 py-4 rounded-md border border-[#2A3240] hover:border-[#3D4A5C] hover:bg-[#1E242C] transition-all" href="#projects">
                        View Projects
                    </a>
</div>
</div>

<div className="hidden md:flex flex-col gap-4 justify-self-end w-full max-w-sm">
<div className="bg-[#1E242C]/80 backdrop-blur-md border border-[#2A3240] p-6 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium uppercase tracking-widest text-[#6B7A8D]">Project Completion</span>
<i className="w-5 h-5 text-[#22A855]" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<div className="text-4xl font-bold tracking-tight text-[#F0F4F8] mb-1">98.5%</div>
<p className="text-base text-[#A8B4C2]">On-time delivery rate across all industrial sectors.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#161A20] border-b border-[#2A3240]">
<div className="max-w-[1200px] mx-auto px-5 md:px-10 py-12 md:py-0 md:-mt-12 relative z-20">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#1E242C] p-8 rounded-lg border border-[#2A3240] shadow-[0_2px_8px_rgba(0,0,0,0.35)] flex flex-col gap-2">
<div className="text-4xl font-bold tracking-tight text-[#F5A623]">17+</div>
<h4 className="text-xl font-semibold text-[#F0F4F8] tracking-tight">Years Experience</h4>
<p className="text-lg text-[#6B7A8D] mt-2">Delivering excellence in complex industrial environments.</p>
</div>

<div className="bg-[#1E242C] p-8 rounded-lg border border-[#2A3240] shadow-[0_2px_8px_rgba(0,0,0,0.35)] flex flex-col gap-2">
<div className="text-4xl font-bold tracking-tight text-[#F5A623]">450</div>
<h4 className="text-xl font-semibold text-[#F0F4F8] tracking-tight">Projects Completed</h4>
<p className="text-lg text-[#6B7A8D] mt-2">From residential complexes to heavy industrial facilities.</p>
</div>

<div className="bg-[#1E242C] p-8 rounded-lg border border-[#2A3240] shadow-[0_2px_8px_rgba(0,0,0,0.35)] flex flex-col gap-2">
<div className="text-4xl font-bold tracking-tight text-[#F5A623]">100%</div>
<h4 className="text-xl font-semibold text-[#F0F4F8] tracking-tight">Safety Record</h4>
<p className="text-lg text-[#6B7A8D] mt-2">Rigorous adherence to international safety protocols.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#111418]" id="services">
<div className="max-w-[1200px] mx-auto px-5 md:px-10 flex flex-col gap-12">
<div className="flex flex-col gap-4 max-w-2xl">
<span className="text-sm font-medium uppercase tracking-widest text-[#E86A1A]">Our Expertise</span>
<h2 className="text-4xl font-semibold tracking-tight text-[#F0F4F8]">Comprehensive Solutions</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-[#1E242C] p-8 rounded-lg border border-[#2A3240] hover:border-[#F5A623] transition-all cursor-pointer flex flex-col gap-6">
<div className="w-12 h-12 rounded-lg bg-[#2A3240] flex items-center justify-center border border-[#3D4A5C] group-hover:bg-[#F5A623]/10 group-hover:border-[#F5A623]/30 transition-colors">
<i className="w-6 h-6 text-[#F5A623]" data-lucide="hard-hat" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col gap-3">
<h3 className="text-2xl font-semibold tracking-tight text-[#F0F4F8]">General Construction</h3>
<p className="text-lg text-[#A8B4C2] leading-relaxed">Structural development and foundation engineering for commercial and industrial demands.</p>
</div>
</div>

<div className="group bg-[#1E242C] p-8 rounded-lg border border-[#2A3240] hover:border-[#F5A623] transition-all cursor-pointer flex flex-col gap-6">
<div className="w-12 h-12 rounded-lg bg-[#2A3240] flex items-center justify-center border border-[#3D4A5C] group-hover:bg-[#F5A623]/10 group-hover:border-[#F5A623]/30 transition-colors">
<i className="w-6 h-6 text-[#F5A623]" data-lucide="settings" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col gap-3">
<h3 className="text-2xl font-semibold tracking-tight text-[#F0F4F8]">Project Management</h3>
<p className="text-lg text-[#A8B4C2] leading-relaxed">End-to-end oversight ensuring precision, timeline adherence, and budget control.</p>
</div>
</div>

<div className="group bg-[#1E242C] p-8 rounded-lg border border-[#2A3240] hover:border-[#F5A623] transition-all cursor-pointer flex flex-col gap-6">
<div className="w-12 h-12 rounded-lg bg-[#2A3240] flex items-center justify-center border border-[#3D4A5C] group-hover:bg-[#F5A623]/10 group-hover:border-[#F5A623]/30 transition-colors">
<i className="w-6 h-6 text-[#F5A623]" data-lucide="cpu" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col gap-3">
<h3 className="text-2xl font-semibold tracking-tight text-[#F0F4F8]">Infrastructure &amp; Power</h3>
<p className="text-lg text-[#A8B4C2] leading-relaxed">High-voltage installations, electrical panels, and critical infrastructure modernization.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#161A20] border-y border-[#2A3240]" id="about">
<div className="max-w-[1200px] mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-16 items-center">
<div className="flex flex-col gap-8">
<div className="flex flex-col gap-4">
<span className="text-sm font-medium uppercase tracking-widest text-[#E86A1A]">About Our Company</span>
<h2 className="text-4xl font-semibold tracking-tight text-[#F0F4F8] leading-tight">Building Success Through Expertise &amp; Safety</h2>
<p className="text-lg text-[#A8B4C2] leading-relaxed mt-2">
                        We are an authoritative force in the industrial sector, bridging the gap between raw construction power and precise technical engineering. Our teams are equipped with industry-leading knowledge and safety protocols.
                    </p>
</div>
<div className="flex flex-col gap-4">
<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0">
<i className="w-6 h-6 text-[#22A855]" data-lucide="check-circle-2" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-xl font-medium text-[#F0F4F8]">Certified Professionals</h4>
<p className="text-lg text-[#6B7A8D] mt-1">Our engineers and technicians hold top-tier certifications.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0">
<i className="w-6 h-6 text-[#22A855]" data-lucide="check-circle-2" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-xl font-medium text-[#F0F4F8]">Advanced Technology</h4>
<p className="text-lg text-[#6B7A8D] mt-1">Utilizing modern diagnostics and deployment methods.</p>
</div>
</div>
</div>
<div>
<a className="inline-flex items-center justify-center bg-[#E86A1A] text-[#F0F4F8] font-medium text-sm px-6 py-3 rounded-md hover:bg-[#F07830] transition-colors" href="#">
                        Read More About Us
                    </a>
</div>
</div>
<div className="relative h-[500px] rounded-lg overflow-hidden border border-[#2A3240]">
<img alt="Engineering Team" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0C0F] via-transparent to-transparent opacity-90"></div>

<div className="absolute bottom-6 left-6 right-6 bg-[#1E242C]/90 backdrop-blur-md p-6 rounded-md border border-[#3D4A5C]">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#F5A623] flex items-center justify-center">
<i className="w-6 h-6 text-[#111418]" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-xl font-semibold text-[#F0F4F8] tracking-tight">ISO 9001 Certified</div>
<div className="text-base text-[#A8B4C2]">Quality Management Systems</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#111418]" id="projects">
<div className="max-w-[1200px] mx-auto px-5 md:px-10 flex flex-col gap-12">
<div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
<h2 className="text-4xl font-semibold tracking-tight text-[#F0F4F8]">Our Recent <span className="text-[#E86A1A]">Projects</span></h2>
<p className="text-lg text-[#A8B4C2]">A selection of our most challenging and rewarding industrial builds and infrastructural deployments.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-[#1E242C] rounded-lg border border-[#2A3240] overflow-hidden hover:border-[#F5A623] transition-colors flex flex-col">
<div className="h-48 relative overflow-hidden">
<img alt="Commercial Complex" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 mix-blend-luminosity" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#0A0C0F]/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="p-6 flex flex-col gap-4 flex-grow">
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#F5A623] mb-2 block">Commercial</span>
<h3 className="text-2xl font-semibold tracking-tight text-[#F0F4F8]">Nexus Complex Grid</h3>
</div>
<p className="text-lg text-[#6B7A8D] mb-4">Complete electrical framework overhaul for a 40-story commercial tower.</p>
<a className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[#A8B4C2] group-hover:text-[#F5A623] transition-colors uppercase tracking-widest" href="#">
                            View Project <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="group bg-[#1E242C] rounded-lg border border-[#2A3240] overflow-hidden hover:border-[#F5A623] transition-colors flex flex-col">
<div className="h-48 relative overflow-hidden">
<img alt="Industrial Facility" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-[#0A0C0F]/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="p-6 flex flex-col gap-4 flex-grow">
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#F5A623] mb-2 block">Industrial</span>
<h3 className="text-2xl font-semibold tracking-tight text-[#F0F4F8]">Automotive Plant Alpha</h3>
</div>
<p className="text-lg text-[#6B7A8D] mb-4">High-voltage installations and robotic assembly line power routing.</p>
<a className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[#A8B4C2] group-hover:text-[#F5A623] transition-colors uppercase tracking-widest" href="#">
                            View Project <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="group bg-[#1E242C] rounded-lg border border-[#2A3240] overflow-hidden hover:border-[#F5A623] transition-colors flex flex-col">
<div className="h-48 relative overflow-hidden">
<img alt="Infrastructure" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 mix-blend-luminosity" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=2831&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#0A0C0F]/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="p-6 flex flex-col gap-4 flex-grow">
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#F5A623] mb-2 block">Infrastructure</span>
<h3 className="text-2xl font-semibold tracking-tight text-[#F0F4F8]">City Power Station</h3>
</div>
<p className="text-lg text-[#6B7A8D] mb-4">Modernization of legacy power station controls and safety systems.</p>
<a className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[#A8B4C2] group-hover:text-[#F5A623] transition-colors uppercase tracking-widest" href="#">
                            View Project <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0C0F] border-t border-[#2A3240] relative overflow-hidden" id="contact">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
<div className="max-w-[1200px] mx-auto px-5 md:px-10 py-24 relative z-10 grid md:grid-cols-2 gap-16">
<div className="flex flex-col gap-10">
<div className="flex flex-col gap-4">
<span className="text-sm font-medium uppercase tracking-widest text-[#E86A1A]">Get in Touch</span>
<h2 className="text-4xl font-semibold tracking-tight text-[#F0F4F8]">Ready to build?</h2>
<p className="text-lg text-[#A8B4C2]">Contact our engineering team to discuss your next industrial project, request an audit, or get a comprehensive quote.</p>
</div>
<div className="flex flex-col gap-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-[#1E242C] flex items-center justify-center border border-[#2A3240]">
<i className="w-5 h-5 text-[#F5A623]" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-sm text-[#6B7A8D] mb-1">Call Us Directly</div>
<div className="text-xl font-medium text-[#F0F4F8]">+1 (555) 123-4567</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-[#1E242C] flex items-center justify-center border border-[#2A3240]">
<i className="w-5 h-5 text-[#F5A623]" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-sm text-[#6B7A8D] mb-1">Email Request</div>
<div className="text-xl font-medium text-[#F0F4F8]">projects@voltind.com</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-[#1E242C] flex items-center justify-center border border-[#2A3240]">
<i className="w-5 h-5 text-[#F5A623]" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-sm text-[#6B7A8D] mb-1">Headquarters</div>
<div className="text-xl font-medium text-[#F0F4F8]">Industrial Park, Sector 7</div>
</div>
</div>
</div>
</div>

<div className="bg-[#1E242C] p-8 md:p-10 rounded-lg border border-[#2A3240] shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
<h3 className="text-2xl font-semibold tracking-tight text-[#F0F4F8] mb-8">Request a Free Quote</h3>
<form className="flex flex-col gap-5">
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-[#A8B4C2]" htmlFor="name">Full Name</label>
<input className="bg-[#111418] border border-[#3D4A5C] rounded-md px-4 py-3 text-[#F0F4F8] placeholder:text-[#6B7A8D] focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-all" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-[#A8B4C2]" htmlFor="email">Email Address</label>
<input className="bg-[#111418] border border-[#3D4A5C] rounded-md px-4 py-3 text-[#F0F4F8] placeholder:text-[#6B7A8D] focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-all" id="email" placeholder="john@company.com" type="email"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-[#A8B4C2]" htmlFor="service">Service Required</label>
<div className="relative">
<select className="w-full bg-[#111418] border border-[#3D4A5C] rounded-md px-4 py-3 text-[#F0F4F8] appearance-none focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-all" id="service">
<option className="text-[#6B7A8D]" disabled="" selected="" value="">Select an option</option>
<option value="electrical">Electrical Infrastructure</option>
<option value="construction">General Construction</option>
<option value="management">Project Management</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#A8B4C2]">
<i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-[#A8B4C2]" htmlFor="message">Project Details</label>
<textarea className="bg-[#111418] border border-[#3D4A5C] rounded-md px-4 py-3 text-[#F0F4F8] placeholder:text-[#6B7A8D] focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-all resize-none" id="message" placeholder="Briefly describe your requirements..." rows="4"></textarea>
</div>

<label className="flex items-start gap-3 cursor-pointer mt-2 group">
<div className="relative flex items-center justify-center mt-1">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 bg-[#111418] border border-[#3D4A5C] rounded flex items-center justify-center peer-checked:bg-[#F5A623] peer-checked:border-[#F5A623] peer-focus-visible:ring-2 peer-focus-visible:ring-[#F5A623] peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-[#1E242C] transition-all">
<i className="w-3.5 h-3.5 text-[#111418] opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" strokeWidth="2.5"></i>
</div>
</div>
<span className="text-sm text-[#A8B4C2] leading-relaxed">I agree to the processing of my data for the purpose of receiving a quote.</span>
</label>
<button className="mt-4 w-full bg-[#E86A1A] text-[#F0F4F8] font-medium text-base px-6 py-4 rounded-md hover:bg-[#F07830] transition-colors shadow-[0_0_16px_rgba(232,106,26,0.3)]" type="button">
                        Send Request
                    </button>
</form>
</div>
</div>

<div className="border-t border-[#2A3240] bg-[#0A0C0F]">
<div className="max-w-[1200px] mx-auto px-5 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-[#F5A623]" data-lucide="zap" strokeWidth="1.5"></i>
<span className="text-base font-semibold tracking-tight text-[#F0F4F8] uppercase">Volt<span className="text-[#F5A623]">Ind</span></span>
</div>
<p className="text-sm text-[#6B7A8D]">© 2026 VoltInd Industrial Services. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-[#6B7A8D] hover:text-[#F0F4F8] transition-colors" href="#"><span className="sr-only">Twitter</span><i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i></a>
<a className="text-[#6B7A8D] hover:text-[#F0F4F8] transition-colors" href="#"><span className="sr-only">LinkedIn</span><i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i></a>
</div>
</div>
</div>
</section>


    </>
  );
}
