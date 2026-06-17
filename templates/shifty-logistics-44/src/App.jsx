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
      

<div className="bg-[#1a1a1a] text-gray-300 py-3 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-sm">
<div className="mb-2 md:mb-0">
            Save up to 20% on moves booked this month.
        </div>
<div className="flex items-center space-x-6">
<a className="flex items-center hover:text-white transition-colors" href="#">
<i className="w-4 h-4 mr-2" data-lucide="phone" strokeWidth="1.5"></i>
                (123) 456-7890
            </a>
<a className="flex items-center hover:text-white transition-colors" href="#">
<i className="w-4 h-4 mr-2" data-lucide="mail" strokeWidth="1.5"></i>
                hello@shifty.com
            </a>
</div>
</div>

<nav className="bg-white py-5 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 border-b border-gray-100">
<div className="flex items-center space-x-2">
<div className="text-[#ef5e30]">
<i className="w-8 h-8" data-lucide="box" strokeWidth="1.5"></i>
</div>
<span className="text-2xl font-semibold tracking-tight text-black">Shifty</span>
</div>
<div className="hidden lg:flex items-center space-x-8 text-base font-medium text-gray-700">
<a className="hover:text-[#ef5e30] transition-colors" href="#">Home</a>
<a className="hover:text-[#ef5e30] transition-colors" href="#">About</a>
<div className="flex items-center cursor-pointer hover:text-[#ef5e30] transition-colors text-[#ef5e30]">
                Services <i className="w-4 h-4 ml-1" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<div className="flex items-center cursor-pointer hover:text-[#ef5e30] transition-colors">
                Pages <i className="w-4 h-4 ml-1" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<div className="flex items-center cursor-pointer hover:text-[#ef5e30] transition-colors">
                Blog <i className="w-4 h-4 ml-1" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<a className="hover:text-[#ef5e30] transition-colors" href="#">Contact</a>
</div>
<div className="hidden md:block">
<a className="bg-[#ef5e30] hover:bg-[#d94f26] text-white px-6 py-3 rounded-full text-base font-medium flex items-center transition-colors" href="#">
                Free Quote
                <div className="bg-black/20 rounded-full p-1 ml-3">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</a>
</div>
<div className="lg:hidden">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</div>
</nav>

<section className="relative bg-gradient-to-br from-[#2a1e19] to-[#1a1311] text-white py-32 px-6 md:px-12 overflow-hidden">
<div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80')] bg-cover bg-center mix-blend-overlay"></div>
<div className="relative z-10 max-w-3xl">
<div className="text-[#ef5e30] text-base font-medium mb-6 flex items-center">
                Home / Services
            </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-8">
                Complete Moving<br/>Solutions for Every Need
            </h1>
<p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                From local apartment moves to full commercial relocations, Shifty offers 8 professional services designed to make every move smooth, safe, and stress-free.
            </p>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-gray-50/50">
<div className="max-w-7xl mx-auto">

<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
<div className="max-w-2xl">
<div className="inline-block border border-gray-200 bg-white text-gray-600 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                        Our Services
                    </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
                        Complete Moving Solutions for Homes and Businesses
                    </h2>
</div>
<div className="flex flex-col items-start lg:items-end gap-6 max-w-sm">
<p className="text-base text-gray-500 lg:text-right leading-relaxed">
                        Shiftly provides structured relocation services designed to make home and office moves organized and manageable. We coordinate each step with reliable transport solutions.
                    </p>
<a className="bg-[#1a1311] hover:bg-black text-white px-6 py-3 rounded-full text-base font-medium flex items-center transition-colors" href="#">
                        View All Services
                        <div className="bg-white text-black rounded-full p-1 ml-3">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col group hover:border-gray-200 transition-colors">
<div className="w-12 h-12 bg-[#fff1ec] rounded-full flex items-center justify-center text-[#ef5e30] mb-8">
<i className="w-6 h-6" data-lucide="truck" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-4">Local Home Moving</h3>
<p className="text-base text-gray-500 flex-grow mb-8 leading-relaxed">
                        Safe and organized relocation within your city, including packing, loading, transport, and careful unloading at your new home.
                    </p>
<a className="text-sm font-medium text-gray-900 flex items-center group-hover:text-[#ef5e30] transition-colors" href="#">
                        Learn More <i className="w-4 h-4 ml-1" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="bg-[#1a1311] text-white p-8 rounded-2xl border border-gray-800 flex flex-col relative overflow-hidden">
<div className="absolute top-6 right-6 bg-[#ef5e30] text-white text-xs font-medium px-3 py-1 rounded-full">
                        Most Requested
                    </div>
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white mb-8">
<i className="w-6 h-6" data-lucide="map" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-4">Long Distance Moving</h3>
<p className="text-base text-gray-300 flex-grow mb-8 leading-relaxed">
                        Planned and coordinated interstate or cross-region moving services with secure transport and scheduled delivery timelines.
                    </p>
<a className="text-sm font-medium text-white flex items-center hover:text-[#ef5e30] transition-colors" href="#">
                        Learn More <i className="w-4 h-4 ml-1" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col group hover:border-gray-200 transition-colors">
<div className="w-12 h-12 bg-[#fff1ec] rounded-full flex items-center justify-center text-[#ef5e30] mb-8">
<i className="w-6 h-6" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-4">Office Relocation</h3>
<p className="text-base text-gray-500 flex-grow mb-8 leading-relaxed">
                        Efficient workplace moving solutions designed to minimize downtime while ensuring safe handling of equipment.
                    </p>
<a className="text-sm font-medium text-gray-900 flex items-center group-hover:text-[#ef5e30] transition-colors" href="#">
                        Learn More <i className="w-4 h-4 ml-1" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col group hover:border-gray-200 transition-colors">
<div className="w-12 h-12 bg-[#fff1ec] rounded-full flex items-center justify-center text-[#ef5e30] mb-8">
<i className="w-6 h-6" data-lucide="package" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-4">Packing &amp; Unpacking</h3>
<p className="text-base text-gray-500 flex-grow mb-8 leading-relaxed">
                        Professional packing using protective materials, labeling systems, and careful unpacking at your destination.
                    </p>
<a className="text-sm font-medium text-gray-900 flex items-center group-hover:text-[#ef5e30] transition-colors" href="#">
                        Learn More <i className="w-4 h-4 ml-1" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col group hover:border-gray-200 transition-colors">
<div className="w-12 h-12 bg-[#fff1ec] rounded-full flex items-center justify-center text-[#ef5e30] mb-8">
<i className="w-6 h-6" data-lucide="sofa" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-4">Furniture Moving</h3>
<p className="text-base text-gray-500 flex-grow mb-8 leading-relaxed">
                        Careful disassembly, secure wrapping, and safe transport of furniture to prevent scratches, damage, or handling issues.
                    </p>
<a className="text-sm font-medium text-gray-900 flex items-center group-hover:text-[#ef5e30] transition-colors" href="#">
                        Learn More <i className="w-4 h-4 ml-1" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col group hover:border-gray-200 transition-colors">
<div className="w-12 h-12 bg-[#fff1ec] rounded-full flex items-center justify-center text-[#ef5e30] mb-8">
<i className="w-6 h-6" data-lucide="home" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-4">Residential Relocation</h3>
<p className="text-base text-gray-500 flex-grow mb-8 leading-relaxed">
                        Smooth home relocation services with organized packing, reliable transport, and careful unloading to help families settle quickly.
                    </p>
<a className="text-sm font-medium text-gray-900 flex items-center group-hover:text-[#ef5e30] transition-colors" href="#">
                        Learn More <i className="w-4 h-4 ml-1" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col group hover:border-gray-200 transition-colors">
<div className="w-12 h-12 bg-[#fff1ec] rounded-full flex items-center justify-center text-[#ef5e30] mb-8">
<i className="w-6 h-6" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-4">Commercial Moving</h3>
<p className="text-base text-gray-500 flex-grow mb-8 leading-relaxed">
                        Professional office moving for equipment, workstations, and business assets with careful handling and minimal disruption.
                    </p>
<a className="text-sm font-medium text-gray-900 flex items-center group-hover:text-[#ef5e30] transition-colors" href="#">
                        Learn More <i className="w-4 h-4 ml-1" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col group hover:border-gray-200 transition-colors">
<div className="w-12 h-12 bg-[#fff1ec] rounded-full flex items-center justify-center text-[#ef5e30] mb-8">
<i className="w-6 h-6" data-lucide="archive" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-4">Storage Solutions</h3>
<p className="text-base text-gray-500 flex-grow mb-8 leading-relaxed">
                        Short-term and long-term storage options with secure facilities, organized handling, and flexible access when needed.
                    </p>
<a className="text-sm font-medium text-gray-900 flex items-center group-hover:text-[#ef5e30] transition-colors" href="#">
                        Learn More <i className="w-4 h-4 ml-1" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-[#f4f5f6]">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<div className="inline-block border border-gray-200 bg-white text-gray-600 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                    Client Reviews
                </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
                    Why Clients Trust Shiftly for Their Move
                </h2>
<p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                    We focus on delivering structured relocation services with careful handling, trained professionals, and organized planning.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
<div className="text-sm text-[#ef5e30] font-medium mb-4">Apartment Relocation</div>
<p className="text-base text-gray-600 mb-8 leading-relaxed min-h-[120px]">
                        The team arrived as scheduled, packed everything carefully, and handled the entire move in an organized manner. The process felt smooth from pickup to final placement.
                    </p>
<div className="flex items-center">
<img alt="User" className="w-12 h-12 rounded-full mr-4 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div>
<div className="font-semibold text-gray-900">James Rehman.</div>
<div className="flex text-yellow-400 mt-1 space-x-1">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
<div className="text-sm text-[#ef5e30] font-medium mb-4">Long Distance Move</div>
<p className="text-base text-gray-600 mb-8 leading-relaxed min-h-[120px]">
                        The move was planned properly, and delivery was completed as scheduled. The team maintained organization and handled our belongings responsibly.
                    </p>
<div className="flex items-center border-t border-gray-100 pt-6 mt-auto">
<img alt="User" className="w-12 h-12 rounded-full mr-4 object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div>
<div className="font-semibold text-gray-900">Sophia L.</div>
<div className="flex text-yellow-400 mt-1 space-x-1">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
<div className="text-sm text-[#ef5e30] font-medium mb-4">Apartment Move</div>
<p className="text-base text-gray-600 mb-8 leading-relaxed min-h-[120px]">
                        Shiftly coordinated our relocation efficiently and ensured every item was packed and transported safely. Communication throughout the move was clear and consistent.
                    </p>
<div className="flex items-center border-t border-gray-100 pt-6 mt-auto">
<img alt="User" className="w-12 h-12 rounded-full mr-4 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div>
<div className="font-semibold text-gray-900">Olivia M.</div>
<div className="flex text-yellow-400 mt-1 space-x-1">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-gradient-to-r from-[#2a1e19] to-[#1a1311] py-24 px-6 md:px-12 overflow-hidden">
<div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80')] bg-cover bg-center mix-blend-overlay"></div>
<div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
<div className="max-w-2xl text-white">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                    Ready to Make Your Move With Us?
                </h2>
<p className="text-lg text-gray-300 leading-relaxed">
                    Get a free, no-obligation quote today. Our team is standing by to plan your perfect move — stress-free, on time, and within budget.
                </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
<a className="bg-[#ef5e30] hover:bg-[#d94f26] text-white px-8 py-4 rounded-full text-base font-medium flex items-center justify-center transition-colors" href="#">
                    Free Quote
                    <div className="bg-black/20 rounded-full p-1 ml-3">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</a>
<a className="border border-white/20 hover:bg-white/5 text-white px-8 py-4 rounded-full text-base font-medium flex items-center justify-center transition-colors" href="#">
                    Call Now
                    <div className="bg-[#ef5e30] rounded-full p-1 ml-3">
<i className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i>
</div>
</a>
</div>
</div>
</section>

<footer className="bg-[#110c09] text-white pt-24 pb-8 px-6 md:px-12 border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

<div>
<div className="flex items-center space-x-2 mb-8">
<div className="text-[#ef5e30]">
<i className="w-8 h-8" data-lucide="box" strokeWidth="1.5"></i>
</div>
<span className="text-2xl font-semibold tracking-tight">Shifty</span>
</div>
<p className="text-base text-gray-400 mb-8 leading-relaxed pr-4">
                        Professional moving services for homes and businesses with secure packing and reliable transport.
                    </p>
<div className="flex space-x-3">
<a className="w-10 h-10 bg-[#ef5e30] rounded-full flex items-center justify-center hover:bg-[#d94f26] transition-colors" href="#">
<i className="w-4 h-4 text-white" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 bg-[#ef5e30] rounded-full flex items-center justify-center hover:bg-[#d94f26] transition-colors" href="#">
<i className="w-4 h-4 text-white" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 bg-[#ef5e30] rounded-full flex items-center justify-center hover:bg-[#d94f26] transition-colors" href="#">
<i className="w-4 h-4 text-white" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 bg-[#ef5e30] rounded-full flex items-center justify-center hover:bg-[#d94f26] transition-colors" href="#">
<i className="w-4 h-4 text-white" data-lucide="youtube" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div>
<h4 className="text-lg font-semibold mb-6">Quick Links</h4>
<ul className="space-y-4">
<li>
<a className="text-base text-gray-400 hover:text-[#ef5e30] transition-colors flex items-center" href="#">
<span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3"></span> Home
                            </a>
</li>
<li>
<a className="text-base text-gray-400 hover:text-[#ef5e30] transition-colors flex items-center" href="#">
<span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3"></span> About Us
                            </a>
</li>
<li>
<a className="text-base text-gray-400 hover:text-[#ef5e30] transition-colors flex items-center" href="#">
<span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3"></span> Our Services
                            </a>
</li>
<li>
<a className="text-base text-gray-400 hover:text-[#ef5e30] transition-colors flex items-center" href="#">
<span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3"></span> Pricing Plans
                            </a>
</li>
<li>
<a className="text-base text-gray-400 hover:text-[#ef5e30] transition-colors flex items-center" href="#">
<span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3"></span> Contact Us
                            </a>
</li>
</ul>
</div>

<div>
<h4 className="text-lg font-semibold mb-6">Our Services</h4>
<ul className="space-y-4">
<li>
<a className="text-base text-gray-400 hover:text-[#ef5e30] transition-colors flex items-center" href="#">
<span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3"></span> Local Home Moving
                            </a>
</li>
<li>
<a className="text-base text-gray-400 hover:text-[#ef5e30] transition-colors flex items-center" href="#">
<span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3"></span> Long Distance Moving
                            </a>
</li>
<li>
<a className="text-base text-gray-400 hover:text-[#ef5e30] transition-colors flex items-center" href="#">
<span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3"></span> Office Relocation
                            </a>
</li>
<li>
<a className="text-base text-gray-400 hover:text-[#ef5e30] transition-colors flex items-center" href="#">
<span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3"></span> Packing &amp; Unpacking
                            </a>
</li>
<li>
<a className="text-base text-gray-400 hover:text-[#ef5e30] transition-colors flex items-center" href="#">
<span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3"></span> Furniture Handling
                            </a>
</li>
</ul>
</div>

<div>
<h4 className="text-lg font-semibold mb-6">Contact Info</h4>
<ul className="space-y-4 mb-8">
<li className="flex items-start text-base text-gray-400">
<i className="w-5 h-5 mr-3 mt-0.5 text-white" data-lucide="phone" strokeWidth="1.5"></i>
                            (123) 456-7890
                        </li>
<li className="flex items-start text-base text-gray-400">
<i className="w-5 h-5 mr-3 mt-0.5 text-white" data-lucide="mail" strokeWidth="1.5"></i>
                            hello@shifty.com
                        </li>
<li className="flex items-start text-base text-gray-400">
<i className="w-5 h-5 mr-3 mt-0.5 text-white" data-lucide="map-pin" strokeWidth="1.5"></i>
                            123 Main Street, Your City
                        </li>
</ul>
<div className="mt-6">
<p className="text-sm text-gray-400 mb-3">Sign up for our newsletter &amp; receive offers</p>
<form className="flex items-center bg-white rounded-full p-1">
<i className="w-5 h-5 text-gray-400 ml-3" data-lucide="mail" strokeWidth="1.5"></i>
<input className="bg-transparent text-gray-900 w-full px-3 py-2 text-sm outline-none placeholder-gray-500" placeholder="Your Email" type="email"/>
<button className="bg-[#ef5e30] hover:bg-[#d94f26] text-white px-6 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap" type="submit">
                                Subscribe
                            </button>
</form>
</div>
</div>
</div>

<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
<p>Copyright ©2024 Shifty | Powered by Reddito.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms &amp; Conditions</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
