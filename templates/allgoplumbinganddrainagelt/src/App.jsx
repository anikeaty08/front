import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    


        // This script waits for Aura to load, then fixes the buttons
      window.addEventListener('load', function() {
        // 1. Fix all "Call Now" buttons
        const callButtons = Array.from(document.querySelectorAll('a, button')).filter(el => 
          el.textContent.toLowerCase().includes('call') || el.textContent.includes('0800')
        );
        callButtons.forEach(btn => {
          btn.onclick = () => window.location.href = "tel:0800255758";
          btn.style.cursor = "pointer";
        });
    
        // 2. Fix "Book" or "Contact" buttons
        const bookButtons = Array.from(document.querySelectorAll('a, button')).filter(el => 
          el.textContent.toLowerCase().includes('book') || el.textContent.toLowerCase().includes('contact')
        );
        bookButtons.forEach(btn => {
          btn.onclick = () => window.location.href = "https://www.allgoplumbing.co.nz/contact/";
          btn.style.cursor = "pointer";
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="absolute top-0 left-0 w-full z-50 border-b border-white/10 bg-slate-900/40 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
<div className="flex items-center gap-2">

<img alt="AllGo Plumbing" className="h-10 md:h-12 w-auto logo-white-filter opacity-90" src="https://www.allgoplumbing.co.nz/wp-content/uploads/2018/09/Allgo-Plumber.png"/>
</div>
<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-white hover:text-sky-400 transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#">Services</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#">Hot Water</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#">Localities</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#">About</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#" style={{cursor: 'pointer'}}>Contact</a>
</div>
<a className="hover:bg-orange-600 transition-all flex items-center gap-2 shadow-orange-500/20 text-sm font-medium text-white bg-orange-500 rounded-full pt-2.5 pr-6 pb-2.5 pl-6 shadow-lg" href="/tel:0800255758" style={{cursor: 'pointer'}}>
<svg aria-hidden="true" className="lucide lucide-phone-call w-4 h-4" data-lucide="phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                0800 255 758
            </a>
</div>
</nav>

<header className="relative min-h-[850px] flex items-center pt-24 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Auckland Plumbing Piping" className="w-full h-full object-cover" src="https://www.allgoplumbing.co.nz/wp-content/uploads/2018/08/Auckland-plumbing-piping-e1719284403645.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/90 to-slate-900/60"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5">
<span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
<span className="text-white font-medium tracking-wide uppercase text-xs">24/7 Emergency Service</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1]">
                    Plumbing, Drainage &amp; <span className="text-sky-400">Hot Water</span> Experts.
                </h1>
<p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                    Reliable and affordable Master Plumbers in Auckland. Whether you need a tap fixed, drain unblocked, or a midnight emergency repair—AllGo has got you covered.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<button className="hover:bg-sky-600 transition-all flex cursor-pointer text-sm font-medium text-white bg-sky-500 rounded-full pt-3.5 pr-8 pb-3.5 pl-8 gap-x-2 gap-y-2 items-center justify-center" onclick="window.location.href='https://www.allgoplumbing.co.nz/contact-us/'" role="button" style={{cursor: 'pointer'}}>
                        Book a Plumber
                        <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="glass-panel hover:bg-white/20 transition-all flex cursor-pointer text-sm font-medium text-white rounded-full pt-3.5 pr-8 pb-3.5 pl-8 gap-x-2 gap-y-2 items-center justify-center" onclick="window.location.href='https://www.allgoplumbing.co.nz/services/emergency-plumbing/'" role="button">Emergency Services</button>
</div>
<div className="flex items-center gap-6 pt-6 border-t border-white/10">
<div>
<p className="text-3xl font-semibold text-white">24<span className="text-orange-500 text-lg">/7</span></p>
<p className="text-slate-400 text-xs">Availability</p>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div>
<p className="text-3xl font-semibold text-white">100<span className="text-orange-500 text-lg">%</span></p>
<p className="text-slate-400 text-xs">Master Plumbers</p>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div>
<p className="text-3xl font-semibold text-white">GPS</p>
<p className="text-slate-400 text-xs">Tracked Fleet</p>
</div>
</div>
</div>

<div className="glass-panel p-8 md:p-10 rounded-2xl text-white shadow-2xl shadow-sky-900/20">
<h3 className="text-2xl font-semibold tracking-tight mb-2">Get a quick quote</h3>
<p className="text-slate-300 text-sm mb-8">Fast response for residential and commercial plumbing needs across Auckland.</p>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-300">Name</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="Your name" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-300">Phone</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="021..." type="tel"/>
</div>
</div>
<div className="space-y-1 relative">
<label className="text-xs font-medium text-slate-300">Service Needed</label>
<select className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm appearance-none text-white cursor-pointer">
<option className="text-slate-900">Plumbing Repair</option>
<option className="text-slate-900">Drain Unblocking</option>
<option className="text-slate-900">Hot Water Cylinder</option>
<option className="text-slate-900">Emergency Service</option>
<option className="text-slate-900">Renovations</option>
</select>
<iconify-icon className="absolute right-0 bottom-2 text-slate-300 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="space-y-1 pt-2">
<label className="text-xs font-medium text-slate-300">Message</label>
<textarea className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm resize-none" placeholder="Briefly describe your issue..." rows="2"></textarea>
</div>
<button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-full mt-2 transition-colors shadow-lg shadow-orange-500/20" type="button">
                        Submit Request
                    </button>
</form>
</div>
</div>
</header>

<div className="bg-sky-950 py-6 overflow-hidden whitespace-nowrap border-b border-white/5">
<div className="flex items-center gap-12 text-white/90 font-semibold text-xl md:text-2xl tracking-tight animate-marquee justify-center">
<span>Drain Unblocking</span>
<span className="text-orange-500">•</span>
<span>Hot Water Cylinders</span>
<span className="text-orange-500">•</span>
<span>Roofing &amp; Spouting</span>
<span className="text-orange-500">•</span>
<span>Gas Fitting</span>
<span className="text-orange-500">•</span>
<span>CCTV Inspections</span>
<span className="text-orange-500">•</span>
<span>Renovations</span>
<span className="text-orange-500">•</span>
<span>Emergency Plumbing</span>
</div>
</div>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
<img alt="Plumber working" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-sky-900/20"></div>
</div>

<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
<div className="flex items-start gap-4">
<div className="bg-green-100 p-3 rounded-full text-green-600">
<iconify-icon icon="solar:map-point-wave-bold" width="24"></iconify-icon>
</div>
<div>
<p className="font-semibold text-slate-900">GPS Tracked Fleet</p>
<p className="text-sm text-slate-500 mt-1">We call you when we're on the way. Accurate billing, no guesswork.</p>
</div>
</div>
</div>
</div>
<div>
<span className="inline-block bg-sky-100 text-sky-700 text-xs font-semibold px-3 py-1 rounded-full mb-6">WHY ALLGO PLUMBING?</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                    We Service North, South, East &amp; West Auckland.
                </h2>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    We maintain our time with GPS tracking on all our vehicles to ensure fair billing and punctual service. Whether it's the CBD or outer suburbs, we are on our way.
                </p>
<div className="space-y-5">
<div className="flex items-center gap-4">
<div className="bg-sky-50 rounded-full p-2">
<iconify-icon className="text-sky-600 text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
<span className="text-lg text-slate-800 font-medium">Master Plumbers Association Members</span>
</div>
<div className="flex items-center gap-4">
<div className="bg-sky-50 rounded-full p-2">
<iconify-icon className="text-sky-600 text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
<span className="text-lg text-slate-800 font-medium">24/7 Emergency Response</span>
</div>
<div className="flex items-center gap-4">
<div className="bg-sky-50 rounded-full p-2">
<iconify-icon className="text-sky-600 text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
<span className="text-lg text-slate-800 font-medium">Prompt &amp; Clean Service</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">OUR SERVICES</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                    Complete Plumbing Solutions
                </h2>
<p className="text-lg text-slate-500 leading-relaxed">
                    From blocked drains to full bathroom renovations, our qualified team handles it all with expertise and efficiency.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-slate-50 hover:bg-white p-8 rounded-2xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<div className="mb-6 bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-sky-500 group-hover:text-white transition-colors">
<iconify-icon className="text-slate-600 group-hover:text-white" icon="solar:wrench-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">Plumbing Maintenance</h3>
<p className="text-slate-500 leading-relaxed text-sm">Routine checks and repairs for taps, pipes, and leaks to keep your home flowing.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-2xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<div className="mb-6 bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-sky-500 group-hover:text-white transition-colors">
<iconify-icon className="text-slate-600 group-hover:text-white" icon="solar:bomb-minimalistic-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">Drain Unblocking</h3>
<p className="text-slate-500 leading-relaxed text-sm">Specialized equipment to clear blocked drains quickly and effectively.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-2xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<div className="mb-6 bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-sky-500 group-hover:text-white transition-colors">
<iconify-icon className="text-slate-600 group-hover:text-white" icon="solar:fire-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">Hot Water Cylinders</h3>
<p className="text-slate-500 leading-relaxed text-sm">Repairs, replacements, and upgrades for all hot water systems including Rheem.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-2xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<div className="mb-6 bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-sky-500 group-hover:text-white transition-colors">
<iconify-icon className="text-slate-600 group-hover:text-white" icon="solar:camera-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">CCTV Inspections</h3>
<p className="text-slate-500 leading-relaxed text-sm">Advanced camera technology to diagnose hidden pipe issues without digging.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-2xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<div className="mb-6 bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-sky-500 group-hover:text-white transition-colors">
<iconify-icon className="text-slate-600 group-hover:text-white" icon="solar:home-smile-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">Renovations</h3>
<p className="text-slate-500 leading-relaxed text-sm">Expert plumbing for kitchen and bathroom makeovers and upgrades.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-2xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<div className="mb-6 bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-sky-500 group-hover:text-white transition-colors">
<iconify-icon className="text-slate-600 group-hover:text-white" icon="solar:city-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">Commercial Plumbing</h3>
<p className="text-slate-500 leading-relaxed text-sm">Reliable maintenance and installation services for businesses and offices.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url(\'https://www.allgoplumbing.co.nz/wp-content/uploads/2018/08/Auckland-plumbing-piping-e1719284403645.jpg\')', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<span className="text-orange-400 font-medium tracking-wide uppercase text-xs mb-2 block">Our Clients</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
                        What our clients have to say
                    </h2>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all">
<svg aria-hidden="true" className="lucide lucide-arrow-left w-4 h-4" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">
<svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl">
<div className="flex text-orange-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-300 leading-relaxed mb-6">
                        "I'm very grateful to you guys for your fast prompt service, helping me with my plumbing emergency and repairing my burst watermain so quickly."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-sky-800 flex items-center justify-center text-white font-semibold text-sm">D</div>
<div>
<p className="text-white font-medium text-sm">Donna</p>
<p className="text-slate-500 text-xs">Howick</p>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl bg-white/5">
<div className="flex text-orange-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-300 leading-relaxed mb-6">
                        "Thank you for the speedy repairs and great service provided. I will keep in contact for future plumbing jobs required for our properties."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-sky-800 flex items-center justify-center text-white font-semibold text-sm">N</div>
<div>
<p className="text-white font-medium text-sm">Naomi</p>
<p className="text-slate-500 text-xs">Victoria Street, CBD</p>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl">
<div className="flex text-orange-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-300 leading-relaxed mb-6">
                        "The 2 men did a great job on our home. They are excellent workers and a credit to your company."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-sky-800 flex items-center justify-center text-white font-semibold text-sm">P</div>
<div>
<p className="text-white font-medium text-sm">P Harrison</p>
<p className="text-slate-500 text-xs">Home Owner</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-10">Our Partners &amp; Accreditations</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale">

<div className="flex items-center gap-2 font-bold text-xl text-slate-800"><iconify-icon className="text-orange-500" icon="solar:medal-star-bold"></iconify-icon> Master Plumbers</div>
<div className="flex items-center gap-2 font-bold text-xl text-slate-800"><iconify-icon className="text-green-600" icon="solar:leaf-bold"></iconify-icon> EECA</div>
<div className="flex items-center gap-2 font-bold text-xl text-slate-800"><iconify-icon className="text-sky-600" icon="solar:paw-bold"></iconify-icon> SPCA</div>
<div className="flex items-center gap-2 font-bold text-xl text-slate-800 font-serif italic text-red-600">Rheem</div>
<div className="flex items-center gap-2 font-bold text-xl text-slate-800">HJ COOPER</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-white relative">

<div className="absolute inset-0 opacity-10 z-0">
<img className="w-full h-full object-cover" src="https://www.allgoplumbing.co.nz/wp-content/uploads/2018/08/toilet-unblocker.jpg"/>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-10">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<img alt="AllGo Plumbing" className="h-10 w-auto logo-white-filter opacity-90" src="https://www.allgoplumbing.co.nz/wp-content/uploads/2018/09/Allgo-Plumber.png"/>
<p className="text-slate-400 text-sm leading-relaxed">
                        We fix all your plumbing problems. 24 Hours, 7 Days a week across Auckland.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 transition-colors" href="https://www.facebook.com/allgoplumbinganddrainage"><iconify-icon icon="solar:facebook-bold"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 transition-colors" href="#"><iconify-icon icon="solar:videocamera-bold"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 transition-colors" href="#"><iconify-icon icon="solar:link-bold"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="font-semibold text-white mb-6">Services</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Plumber Auckland</a></li>
<li><a className="hover:text-white transition-colors" href="#">Drain Unblocking</a></li>
<li><a className="hover:text-white transition-colors" href="#">Hot Water Cylinders</a></li>
<li><a className="hover:text-white transition-colors" href="#">Gas Plumber</a></li>
<li><a className="hover:text-white transition-colors" href="#">Spouting &amp; Guttering</a></li>
<li><a className="hover:text-white transition-colors" href="#">Emergency Plumber</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-white mb-6">Localities</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">South Auckland</a></li>
<li><a className="hover:text-white transition-colors" href="#">West Auckland</a></li>
<li><a className="hover:text-white transition-colors" href="#">East Auckland</a></li>
<li><a className="hover:text-white transition-colors" href="#">Central Auckland</a></li>
<li><a className="hover:text-white transition-colors" href="#">Outer Suburbs</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-white mb-6">Contact Us</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="lucide lucide-phone w-4 h-4 text-orange-500" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="text-white font-medium text-lg">0800 255 758</span>
</li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="lucide lucide-clock w-4 h-4 text-orange-500" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<div>
<span className="block text-white">Mon - Fri: 7am - 5pm</span>
<span className="block text-xs">After hours rates apply 5pm-7am &amp; Wknds</span>
</div>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">© 2026 AllGo Plumbing. All Rights Reserved.</p>
<div className="flex items-center gap-6 text-xs text-slate-500">
<a className="hover:text-white transition-colors" href="#">Terms of Trade</a>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
