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
      

<div className="bg-white border-b border-zinc-200 py-2.5 z-50 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
<div className="flex items-center gap-2 font-medium text-zinc-900">
<i className="w-4 h-4 text-[#1c62a5]" data-lucide="radio" strokeWidth="1.5"></i>
                    Live Traffic Status
                </div>
<div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#328842] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#328842]"></span>
</span>
<span className="text-zinc-600 font-medium">Kigali East <span className="text-zinc-400 ml-1 font-normal">Clear</span></span>
</div>
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-zinc-600 font-medium">Central Zone <span className="text-zinc-400 ml-1 font-normal">Moderate</span></span>
</div>
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
<span className="text-zinc-600 font-medium">Nyabugogo <span className="text-zinc-400 ml-1 font-normal">Heavy</span></span>
</div>
</div>
</div>
</div>
</div>

<nav className="sticky top-0 z-40 w-full backdrop-blur-md bg-zinc-50/80 border-b border-zinc-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-1 cursor-pointer">
<svg className="w-10 h-10" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">

<path d="M100 10 L185 65 L155 185 L45 185 L15 65 Z" fill="#328842"></path>

<path d="M100 65 A 4 4 0 1 0 100 66" stroke="white" strokeLinecap="round" strokeWidth="8"></path>
<path d="M82 48 Q 100 35 118 48" fill="transparent" stroke="white" strokeLinecap="round" strokeWidth="6"></path>
<path d="M65 30 Q 100 10 135 30" fill="transparent" stroke="white" strokeLinecap="round" strokeWidth="6"></path>

<path d="M60 95 C60 85, 140 85, 140 95 L140 155 C140 165, 130 165, 130 165 L130 175 C130 180, 120 180, 120 175 L120 165 L80 165 L80 175 C80 180, 70 180, 70 175 L70 165 C70 165, 60 165, 60 155 Z" fill="white"></path>
<rect fill="#328842" height="30" rx="4" width="60" x="70" y="100"></rect>
<circle cx="80" cy="148" fill="#328842" r="8"></circle>
<circle cx="120" cy="148" fill="#328842" r="8"></circle>
</svg>
<div className="flex flex-col ml-1 pt-0.5">
<span className="font-semibold text-xl tracking-tight text-[#1c62a5] leading-none">Ecofleet</span>
<span className="text-[0.65rem] font-medium tracking-[0.22em] text-[#1c62a5] leading-none mt-1 ml-[1px]">SOLUTIONS</span>
</div>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Vehicles</a>
<a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Solutions</a>
<a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Impact</a>
<a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Company</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Log in</a>
<a className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-[#1c62a5] text-white text-base font-medium hover:bg-[#154d82] transition-all focus:outline-none focus:ring-2 focus:ring-[#1c62a5] focus:ring-offset-2" href="#">
                        Get Started
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-24 pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10 h-full w-full bg-zinc-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#328842]/20 bg-[#328842]/5 text-[#328842] text-sm font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#328842] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#328842]"></span>
</span>
                Operating in Kigali, Rwanda
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-zinc-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
                Powering the future of <br className="hidden md:block"/>
<span className="text-zinc-400">sustainable logistics.</span>
</h1>
<p className="text-xl text-zinc-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                Ecofleet provides modern electric vehicles and smart fleet management software to help businesses reduce costs and eliminate emissions.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-6 rounded-full bg-[#1c62a5] text-white text-base font-medium hover:bg-[#154d82] transition-all shadow-sm" href="#">
                    Explore our fleet
                    <i className="ml-2 w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-6 rounded-full bg-white border border-zinc-200 text-zinc-900 text-base font-medium hover:bg-zinc-50 transition-all shadow-sm" href="#">
                    Talk to an expert
                </a>
</div>
</div>

<div className="max-w-5xl mx-auto px-4 sm:px-6 mt-20 relative">
<div className="rounded-2xl border border-zinc-200/80 bg-white/50 backdrop-blur-xl shadow-2xl overflow-hidden">
<div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-100 bg-zinc-50/50">
<div className="w-3 h-3 rounded-full bg-zinc-300"></div>
<div className="w-3 h-3 rounded-full bg-zinc-300"></div>
<div className="w-3 h-3 rounded-full bg-zinc-300"></div>
</div>
<div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 bg-white/80">
<div className="border border-zinc-100 rounded-xl p-5 shadow-sm">
<div className="flex items-center gap-2 text-zinc-500 text-sm font-medium mb-3 uppercase tracking-wider">
<i className="w-4 h-4" data-lucide="leaf" strokeWidth="1.5"></i>
                            CO2 Saved
                        </div>
<div className="text-4xl font-semibold tracking-tight text-zinc-900">2,450 kg</div>
<div className="text-sm text-[#328842] mt-2 flex items-center gap-1">
<i className="w-4 h-4" data-lucide="trending-up" strokeWidth="1.5"></i>
                            +12% this month
                        </div>
</div>
<div className="border border-zinc-100 rounded-xl p-5 shadow-sm">
<div className="flex items-center gap-2 text-zinc-500 text-sm font-medium mb-3 uppercase tracking-wider">
<i className="w-4 h-4" data-lucide="route" strokeWidth="1.5"></i>
                            Active Vehicles
                        </div>
<div className="text-4xl font-semibold tracking-tight text-zinc-900">142</div>
<div className="text-sm text-zinc-500 mt-2">Across 3 districts</div>
</div>
<div className="border border-zinc-100 rounded-xl p-5 shadow-sm">
<div className="flex items-center gap-2 text-zinc-500 text-sm font-medium mb-3 uppercase tracking-wider">
<i className="w-4 h-4" data-lucide="wallet" strokeWidth="1.5"></i>
                            Cost Reduction
                        </div>
<div className="text-4xl font-semibold tracking-tight text-zinc-900">45%</div>
<div className="text-sm text-zinc-500 mt-2">Vs traditional fuel</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-zinc-200/50 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-center text-sm text-zinc-400 font-medium tracking-tight mb-8">TRUSTED BY INNOVATIVE LOGISTICS TEAMS</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
<span className="text-2xl font-semibold tracking-tight">PARTNER</span>
<span className="text-2xl font-semibold tracking-tight">COMPANY</span>
<span className="text-2xl font-semibold tracking-tight">LOGISTICS</span>
<span className="text-2xl font-semibold tracking-tight">DELIVERY</span>
<span className="text-2xl font-semibold tracking-tight">BRAND</span>
</div>
</div>
</section>

<section className="pt-16 pb-8 bg-zinc-50">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="p-2 rounded-2xl bg-white border border-zinc-200/80 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] flex flex-col sm:flex-row items-center gap-2 transition-shadow focus-within:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.05)] focus-within:border-[#1c62a5]/50">
<div className="relative w-full sm:w-auto sm:min-w-[160px] flex items-center h-12 bg-zinc-50/50 rounded-xl border border-zinc-100 hover:border-zinc-200 transition-colors group cursor-pointer">
<div className="pl-4 pr-8 text-base text-zinc-600 font-medium w-full flex items-center gap-2">
<i className="w-4 h-4 text-zinc-400" data-lucide="map-pin" strokeWidth="1.5"></i>
<span className="truncate">Kigali Zone</span>
</div>
<i className="absolute right-3 w-4 h-4 text-zinc-400 group-hover:text-zinc-600 transition-colors" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<div className="hidden sm:block w-px h-8 bg-zinc-100 mx-1"></div>
<div className="relative flex-1 w-full flex items-center h-12">
<i className="absolute left-3 w-5 h-5 text-zinc-400" data-lucide="search" strokeWidth="1.5"></i>
<input className="w-full h-full pl-10 pr-4 bg-transparent text-base text-zinc-900 focus:outline-none placeholder:text-zinc-400" placeholder="Search vehicles, charging stations, or guides..." type="text"/>
</div>
<button className="w-full sm:w-auto h-12 px-6 rounded-xl bg-[#1c62a5] text-white text-base font-medium hover:bg-[#154d82] transition-colors flex items-center justify-center gap-2 shrink-0">
                    Search
                </button>
</div>
<div className="flex flex-wrap items-center justify-center gap-2 mt-5">
<span className="text-sm text-zinc-400 font-medium mr-2">Popular searches:</span>
<button className="px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors shadow-sm">Electric Vans</button>
<button className="px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors shadow-sm">Charging Map</button>
<button className="px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors shadow-sm">Maintenance</button>
</div>
</div>
</section>

<section className="py-16 bg-zinc-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Everything you need to transition to electric.</h2>
<p className="text-zinc-500 text-xl">We provide an end-to-end ecosystem, from reliable hardware to intelligent software, making the switch seamless and profitable.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-8 rounded-2xl bg-white border border-zinc-200/80 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.05)] hover:-translate-y-1 group">
<div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center mb-6 text-zinc-700 group-hover:bg-[#1c62a5] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="bike" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">Premium EVs</h3>
<p className="text-base text-zinc-500 leading-relaxed">High-performance electric motorcycles and vans designed specifically for the rigorous demands of delivery and logistics in Africa.</p>
</div>
<div className="p-8 rounded-2xl bg-white border border-zinc-200/80 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.05)] hover:-translate-y-1 group">
<div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center mb-6 text-zinc-700 group-hover:bg-[#1c62a5] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">Smart Telematics</h3>
<p className="text-base text-zinc-500 leading-relaxed">Real-time tracking, battery health monitoring, and route optimization integrated directly into a centralized dashboard.</p>
</div>
<div className="p-8 rounded-2xl bg-white border border-zinc-200/80 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.05)] hover:-translate-y-1 group">
<div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center mb-6 text-zinc-700 group-hover:bg-[#1c62a5] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="wrench" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">Full Maintenance</h3>
<p className="text-base text-zinc-500 leading-relaxed">Zero downtime guarantee. Our local teams handle all servicing, repairs, and battery swapping to keep your fleet moving.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-6">Built for urban delivery.</h2>
<p className="text-zinc-500 text-lg mb-8 leading-relaxed">
                        Navigate city traffic with ease. Our vehicles are engineered for high payload capacity while maintaining agility. Cut down your operational costs significantly compared to ICE vehicles.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-[#328842]/10 text-[#328842] flex items-center justify-center shrink-0">
<i className="w-4 h-4" data-lucide="check-circle-2" strokeWidth="1.5"></i>
</div>
<span className="text-base text-zinc-700">Up to 120km range on a single charge</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-[#328842]/10 text-[#328842] flex items-center justify-center shrink-0">
<i className="w-4 h-4" data-lucide="check-circle-2" strokeWidth="1.5"></i>
</div>
<span className="text-base text-zinc-700">Quick-swap battery network across the city</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-[#328842]/10 text-[#328842] flex items-center justify-center shrink-0">
<i className="w-4 h-4" data-lucide="check-circle-2" strokeWidth="1.5"></i>
</div>
<span className="text-base text-zinc-700">Heavy-duty suspension for local terrain</span>
</li>
</ul>
<div className="mt-10">
<a className="inline-flex items-center text-base font-medium text-[#1c62a5] hover:text-[#154d82] transition-colors" href="#">
                            View technical specs <i className="ml-1 w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="relative h-[400px] rounded-3xl bg-zinc-100 border border-zinc-200 overflow-hidden flex items-center justify-center group">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-zinc-200"></div>
<i className="w-20 h-20 text-zinc-300 relative z-10 transition-transform group-hover:scale-110 duration-500" data-lucide="package" strokeWidth="1.5"></i>
<div className="absolute bottom-6 left-6 right-6">
<div className="bg-white/80 backdrop-blur-md rounded-xl p-4 border border-white flex justify-between items-center shadow-sm">
<div>
<div className="text-sm text-zinc-500 font-medium">Model</div>
<div className="text-base text-zinc-900 font-semibold tracking-tight">Eco-Pro Cargo</div>
</div>
<div className="text-right">
<div className="text-sm text-zinc-500 font-medium">Status</div>
<div className="text-base text-[#328842] font-semibold tracking-tight flex items-center gap-1.5 justify-end">
<div className="w-2 h-2 rounded-full bg-[#328842]"></div> Active
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200/50">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Support &amp; Feedback</h2>
<p className="text-lg text-zinc-500 max-w-2xl mx-auto">Report traffic issues, request support for your fleet, or share feedback with our team to help us improve.</p>
</div>
<div className="bg-white rounded-3xl border border-zinc-200/80 p-6 md:p-10 shadow-sm">
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-3">
<label className="block text-sm font-medium text-zinc-900">Full Name</label>
<input className="w-full h-12 px-4 bg-zinc-50 border border-zinc-200 rounded-xl text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#1c62a5]/20 focus:border-[#1c62a5] transition-all" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-3">
<label className="block text-sm font-medium text-zinc-900">Email Address</label>
<input className="w-full h-12 px-4 bg-zinc-50 border border-zinc-200 rounded-xl text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#1c62a5]/20 focus:border-[#1c62a5] transition-all" placeholder="jane@example.com" type="email"/>
</div>
</div>
<div className="space-y-3">
<label className="block text-sm font-medium text-zinc-900">Topic</label>
<div className="relative">
<select className="w-full h-12 pl-4 pr-10 bg-zinc-50 border border-zinc-200 rounded-xl text-base text-zinc-900 appearance-none focus:outline-none focus:ring-2 focus:ring-[#1c62a5]/20 focus:border-[#1c62a5] transition-all cursor-pointer">
<option>Traffic or Routing Issue</option>
<option>Vehicle Maintenance Request</option>
<option>Software Dashboard Feedback</option>
<option>General Inquiry</option>
</select>
<i className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div className="space-y-3">
<label className="block text-sm font-medium text-zinc-900">Message</label>
<textarea className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#1c62a5]/20 focus:border-[#1c62a5] transition-all resize-none" placeholder="Please provide details about your request or report..." rows="5"></textarea>
</div>
<div className="flex items-center gap-3">
<div className="relative flex items-start">
<div className="flex h-6 items-center">
<input className="h-5 w-5 rounded border-zinc-300 text-[#1c62a5] focus:ring-[#1c62a5] bg-zinc-50 cursor-pointer appearance-none checked:bg-[#1c62a5] checked:border-[#1c62a5] relative checked:after:content-[''] checked:after:absolute checked:after:left-[6px] checked:after:top-[2px] checked:after:w-[6px] checked:after:h-[10px] checked:after:border-white checked:after:border-r-2 checked:after:border-b-2 checked:after:rotate-45 transition-colors" id="urgent" name="urgent" type="checkbox"/>
</div>
<div className="ml-3 text-base leading-6">
<label className="font-medium text-zinc-900 cursor-pointer" htmlFor="urgent">Mark as urgent</label>
<p className="text-zinc-500 text-sm mt-0.5">Select if your vehicle is currently immobilized or facing a critical issue.</p>
</div>
</div>
</div>
<button className="w-full sm:w-auto h-12 px-8 rounded-xl bg-[#1c62a5] text-white text-base font-medium hover:bg-[#154d82] transition-colors shadow-sm" type="submit">
                        Submit Request
                    </button>
</form>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-[#1c62a5]"></div>
<div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-10"></div>
<div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Ready to electrify your fleet?</h2>
<p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
                Join the leading companies reducing their carbon footprint and saving on operational costs today.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-[#1c62a5] text-base font-medium hover:bg-zinc-50 transition-all shadow-sm" href="#">
                    Contact Sales
                </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-1 mb-4">
<svg className="w-8 h-8" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<path d="M100 10 L185 65 L155 185 L45 185 L15 65 Z" fill="#328842"></path>
<path d="M100 65 A 4 4 0 1 0 100 66" stroke="white" strokeLinecap="round" strokeWidth="8"></path>
<path d="M82 48 Q 100 35 118 48" fill="transparent" stroke="white" strokeLinecap="round" strokeWidth="6"></path>
<path d="M65 30 Q 100 10 135 30" fill="transparent" stroke="white" strokeLinecap="round" strokeWidth="6"></path>
<path d="M60 95 C60 85, 140 85, 140 95 L140 155 C140 165, 130 165, 130 165 L130 175 C130 180, 120 180, 120 175 L120 165 L80 165 L80 175 C80 180, 70 180, 70 175 L70 165 C70 165, 60 165, 60 155 Z" fill="white"></path>
<rect fill="#328842" height="30" rx="4" width="60" x="70" y="100"></rect>
<circle cx="80" cy="148" fill="#328842" r="8"></circle>
<circle cx="120" cy="148" fill="#328842" r="8"></circle>
</svg>
<div className="flex flex-col ml-1">
<span className="font-semibold text-lg tracking-tight text-[#1c62a5] leading-none">Ecofleet</span>
</div>
</div>
<p className="text-base text-zinc-500 leading-relaxed">
                        Sustainable mobility solutions for modern businesses.
                    </p>
</div>
<div>
<h4 className="text-base font-semibold text-zinc-900 mb-4 tracking-tight">Product</h4>
<ul className="space-y-3">
<li><a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Vehicles</a></li>
<li><a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Software</a></li>
<li><a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Charging</a></li>
<li><a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-base font-semibold text-zinc-900 mb-4 tracking-tight">Company</h4>
<ul className="space-y-3">
<li><a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors" href="#">About</a></li>
<li><a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Impact</a></li>
<li><a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Careers</a></li>
<li><a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-base font-semibold text-zinc-900 mb-4 tracking-tight">Stay updated</h4>
<form className="flex flex-col gap-2">
<div className="relative flex items-center">
<input className="w-full h-11 px-3 bg-zinc-50 border border-zinc-200 rounded-xl text-base text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#1c62a5]/20 focus:border-[#1c62a5] transition-all placeholder:text-zinc-400" placeholder="Enter your email" type="email"/>
</div>
<button className="h-11 w-full rounded-xl bg-zinc-900 text-white text-base font-medium hover:bg-zinc-800 transition-colors" type="submit">
                            Subscribe
                        </button>
</form>
</div>
</div>
<div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-zinc-400">
                    © 2024 Ecofleet Solutions. All rights reserved.
                </p>
<div className="flex items-center gap-4 text-zinc-400">
<a className="hover:text-zinc-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</a>
<a className="hover:text-zinc-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="map-pin" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
