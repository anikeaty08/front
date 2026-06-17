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
      

<nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-zinc-200">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<a className="font-medium text-lg tracking-tighter uppercase" href="#">FSD.</a>
<a className="bg-black text-white px-5 py-2.5 text-xs font-normal uppercase tracking-widest hover:bg-zinc-800 transition-colors duration-300 rounded-none flex items-center gap-2" href="#contact">
                Request Info
                <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</nav>

<header className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
<div className="max-w-3xl">
<p className="text-xs font-normal text-zinc-500 mb-6 uppercase tracking-widest">Now Pre-Leasing <span className="mx-2">|</span> Delivery Q2 2027</p>
<h1 className="text-5xl md:text-7xl lg:text-[5rem] font-normal tracking-tight mb-8 leading-[1.05]">Flex Space<br/>Development</h1>
<p className="text-base md:text-lg text-zinc-500 mb-10 font-light flex items-center gap-3">
<iconify-icon className="text-xl text-zinc-400" icon="solar:map-point-linear"></iconify-icon>
                Maricopa, Arizona · Phoenix Metro Area
            </p>
<a className="inline-flex items-center gap-3 border border-black px-8 py-4 text-sm font-normal hover:bg-black hover:text-white transition-all duration-300 rounded-none group" href="#contact">
                Request Leasing Information
                <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</header>

<div className="w-full h-[50vh] lg:h-[70vh] bg-zinc-200 border-y border-zinc-200">
<img alt="Flex Space Development rendering" className="w-full h-full object-cover object-center grayscale-[50%] opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="bg-white border-b border-zinc-200">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-zinc-200">
<div className="p-8 lg:p-12 flex flex-col justify-center">
<p className="text-4xl lg:text-5xl font-normal tracking-tight mb-3">44</p>
<p className="text-xs text-zinc-500 uppercase tracking-widest font-light">Total Available<br/>Units</p>
</div>
<div className="p-8 lg:p-12 flex flex-col justify-center">
<p className="text-4xl lg:text-5xl font-normal tracking-tight mb-3">84k <span className="text-2xl text-zinc-400">SF</span></p>
<p className="text-xs text-zinc-500 uppercase tracking-widest font-light">Total Building<br/>Area</p>
</div>
<div className="p-8 lg:p-12 flex flex-col justify-center">
<p className="text-2xl lg:text-3xl font-normal tracking-tight mb-3 mt-2">1,500 – 2,000 <span className="text-xl text-zinc-400">SF</span></p>
<p className="text-xs text-zinc-500 uppercase tracking-widest font-light mt-1">Spaces<br/>Available</p>
</div>
<div className="p-8 lg:p-12 flex flex-col justify-center">
<p className="text-4xl lg:text-5xl font-normal tracking-tight mb-3">7.83</p>
<p className="text-xs text-zinc-500 uppercase tracking-widest font-light">Acres<br/>Site Size</p>
</div>
</div>
</div>
</div>

<section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
<div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
<div className="lg:col-span-5">
<h2 className="text-3xl lg:text-4xl font-normal tracking-tight mb-8 leading-tight">Modern, flexible space designed for growing businesses.</h2>
<div className="space-y-6 text-sm lg:text-base text-zinc-600 font-light leading-relaxed">
<p>This new flex retail and industrial development brings modern, flexible space to Maricopa, Arizona.</p>
<p>The project will feature six flex buildings and one retail/flex building, designed to support a range of uses including light industrial, warehouse, office, and showroom.</p>
<p className="pt-6 mt-6 border-t border-zinc-200 text-zinc-800 font-normal">With very limited flex space currently available in Maricopa, this is a strong opportunity for businesses looking to secure space in a growing area.</p>
</div>
</div>
<div className="lg:col-span-6 lg:col-start-7">
<p className="text-xs font-normal uppercase tracking-widest text-zinc-900 mb-8 border-b border-zinc-200 pb-4">Each unit includes</p>
<ul className="space-y-8">
<li className="flex items-start gap-5">
<div className="w-12 h-12 rounded-none bg-white border border-zinc-200 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-2xl text-zinc-800" icon="solar:shop-linear"></iconify-icon>
</div>
<div>
<strong className="block font-normal text-zinc-900 text-base mb-1 tracking-tight">Storefront entrances</strong>
<span className="text-sm text-zinc-500 font-light">For customer-facing businesses requiring a professional presentation.</span>
</div>
</li>
<li className="flex items-start gap-5">
<div className="w-12 h-12 rounded-none bg-white border border-zinc-200 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-2xl text-zinc-800" icon="solar:box-linear"></iconify-icon>
</div>
<div>
<strong className="block font-normal text-zinc-900 text-base mb-1 tracking-tight">Roll-up doors</strong>
<span className="text-sm text-zinc-500 font-light">For easy loading, unloading, and rear access for logistics.</span>
</div>
</li>
<li className="flex items-start gap-5">
<div className="w-12 h-12 rounded-none bg-white border border-zinc-200 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-2xl text-zinc-800" icon="solar:ruler-angular-linear"></iconify-icon>
</div>
<div>
<strong className="block font-normal text-zinc-900 text-base mb-1 tracking-tight">Efficient layouts</strong>
<span className="text-sm text-zinc-500 font-light">Designed to support day-to-day operations seamlessly without wasted space.</span>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="bg-black text-white py-24 lg:py-32">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<h2 className="text-3xl lg:text-4xl font-normal tracking-tight">Pre-Leasing Now Underway</h2>
<p className="text-sm text-zinc-400 font-light max-w-sm">Flexible configurations available depending on your exact spatial requirements.</p>
</div>
<div className="grid md:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800">
<div className="bg-black p-8 lg:p-12 hover:bg-zinc-900/50 transition-colors">
<div className="flex justify-between items-start mb-16">
<p className="text-sm font-normal uppercase tracking-widest text-zinc-400">Flex Space Units</p>
<p className="text-sm font-light text-zinc-300 bg-zinc-900 px-3 py-1 border border-zinc-800">~2,000 SF</p>
</div>
<p className="text-6xl lg:text-7xl font-normal tracking-tight">36</p>
<p className="text-xs text-zinc-500 mt-4 uppercase tracking-widest">Available Units</p>
</div>
<div className="bg-black p-8 lg:p-12 hover:bg-zinc-900/50 transition-colors">
<div className="flex justify-between items-start mb-16">
<p className="text-sm font-normal uppercase tracking-widest text-zinc-400">Retail/Flex Units</p>
<p className="text-sm font-light text-zinc-300 bg-zinc-900 px-3 py-1 border border-zinc-800">~1,500 SF</p>
</div>
<p className="text-6xl lg:text-7xl font-normal tracking-tight">8</p>
<p className="text-xs text-zinc-500 mt-4 uppercase tracking-widest">Available Units</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-24">
<div className="flex items-center justify-between mb-8 border-b border-zinc-200 pb-4">
<h2 className="text-2xl font-normal tracking-tight">Site Plan</h2>
<a className="text-xs font-normal uppercase tracking-widest hover:text-zinc-500 transition-colors" href="#contact">Request Detailed PDF</a>
</div>
<div className="w-full bg-zinc-100 aspect-video md:aspect-[21/9] border border-zinc-200 relative group overflow-hidden flex items-center justify-center">

<img alt="Site Plan Blueprint" className="w-full h-full object-cover opacity-80 mix-blend-luminosity transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&amp;w=2946&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-white/10"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<span className="bg-black text-white px-6 py-3 text-sm font-light tracking-wide">View High-Res Plan</span>
</div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-8 border-b border-zinc-200 pb-4">
<h2 className="text-2xl font-normal tracking-tight">Renderings &amp; Aerials</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="aspect-[4/3] bg-zinc-200 border border-zinc-200 overflow-hidden">
<img alt="Interior Flex Space Rendering" className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2938&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[4/3] bg-zinc-200 border border-zinc-200 overflow-hidden">
<img alt="Exterior Retail Space" className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[4/3] bg-zinc-200 border border-zinc-200 overflow-hidden md:col-span-2 lg:col-span-1">
<img alt="Aerial Location View" className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 object-top" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white border-y border-zinc-200">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-normal tracking-tight mb-16 text-center">Property Highlights</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20">
<div className="text-center">
<iconify-icon className="text-3xl text-zinc-300 mb-4" icon="solar:buildings-linear"></iconify-icon>
<h3 className="text-sm font-normal text-zinc-900 mb-2 tracking-tight">Purpose Built</h3>
<p className="text-xs text-zinc-500 font-light leading-relaxed">Designed specifically for small to mid-size growing businesses.</p>
</div>
<div className="text-center">
<iconify-icon className="text-3xl text-zinc-300 mb-4" icon="solar:hammer-linear"></iconify-icon>
<h3 className="text-sm font-normal text-zinc-900 mb-2 tracking-tight">Modern Construction</h3>
<p className="text-xs text-zinc-500 font-light leading-relaxed">Brand new facilities with highly flexible interior layouts.</p>
</div>
<div className="text-center">
<iconify-icon className="text-3xl text-zinc-300 mb-4" icon="solar:map-arrow-up-linear"></iconify-icon>
<h3 className="text-sm font-normal text-zinc-900 mb-2 tracking-tight">High Visibility</h3>
<p className="text-xs text-zinc-500 font-light leading-relaxed">Strategic location ensuring excellent exposure for retail elements.</p>
</div>
<div className="text-center">
<iconify-icon className="text-3xl text-zinc-300 mb-4" icon="solar:chart-square-linear"></iconify-icon>
<h3 className="text-sm font-normal text-zinc-900 mb-2 tracking-tight">Market Demand</h3>
<p className="text-xs text-zinc-500 font-light leading-relaxed">Extremely limited competing flex space in the Maricopa area.</p>
</div>
</div>

<div className="border border-zinc-200 bg-[#FAFAFA] p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
<div>
<div className="flex items-center gap-3 mb-2">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-20"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
</span>
<p className="text-xs font-normal uppercase tracking-widest text-zinc-500">Status Update</p>
</div>
<p className="text-2xl lg:text-3xl font-normal tracking-tight text-black">30% of spaces already committed</p>
</div>
<a className="bg-black text-white px-8 py-4 text-sm font-normal hover:bg-zinc-800 transition-colors whitespace-nowrap rounded-none flex items-center gap-2" href="#contact">
                    Secure Your Space
                    <iconify-icon className="text-lg" icon="solar:lock-keyhole-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 lg:py-32 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8" id="contact">
<div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

<div className="lg:col-span-5">
<p className="text-xs font-normal uppercase tracking-widest text-zinc-500 mb-4">Inquiries</p>
<h2 className="text-3xl lg:text-4xl font-normal tracking-tight mb-6">Now Pre-Leasing</h2>
<p className="text-sm lg:text-base text-zinc-600 mb-12 font-light leading-relaxed max-w-md">Secure your space in Maricopa’s first commercial developments. For availability, pricing, and leasing details, contact our dedicated team.</p>
<div className="border border-zinc-200 bg-white p-8">
<p className="font-normal text-xl tracking-tight mb-1 text-black">Trent Rustan</p>
<p className="text-xs text-zinc-500 mb-8 font-light uppercase tracking-wider">Vice President ‑ Retail Sales &amp; Leasing</p>
<ul className="space-y-5">
<li>
<a className="text-sm text-zinc-700 hover:text-black transition-colors flex items-center gap-4 group" href="mailto:trustan@cpiaz.com">
<div className="w-8 h-8 flex items-center justify-center border border-zinc-200 group-hover:border-black transition-colors">
<iconify-icon className="text-lg text-zinc-500 group-hover:text-black" icon="solar:letter-linear"></iconify-icon>
</div>
                                trustan@cpiaz.com
                            </a>
</li>
<li>
<a className="text-sm text-zinc-700 hover:text-black transition-colors flex items-center gap-4 group" href="tel:6025500709">
<div className="w-8 h-8 flex items-center justify-center border border-zinc-200 group-hover:border-black transition-colors">
<iconify-icon className="text-lg text-zinc-500 group-hover:text-black" icon="solar:smartphone-linear"></iconify-icon>
</div>
<span className="font-normal">602.550.0709</span> <span className="text-xs text-zinc-400 font-light ml-1">Mobile</span>
</a>
</li>
<li>
<div className="text-sm text-zinc-700 flex items-center gap-4">
<div className="w-8 h-8 flex items-center justify-center border border-zinc-200">
<iconify-icon className="text-lg text-zinc-500" icon="solar:phone-linear"></iconify-icon>
</div>
<span className="font-normal">480.966.5155</span> <span className="text-xs text-zinc-400 font-light ml-1">Direct</span>
</div>
</li>
<li>
<div className="text-sm text-zinc-700 flex items-center gap-4">
<div className="w-8 h-8 flex items-center justify-center border border-transparent">

</div>
<span className="font-normal">480.966.2301</span> <span className="text-xs text-zinc-400 font-light ml-1">Main</span>
</div>
</li>
</ul>
</div>
</div>

<div className="lg:col-span-7">
<form className="space-y-6 lg:p-8 lg:border lg:border-zinc-200 lg:bg-white">
<p className="text-lg font-normal tracking-tight mb-8 hidden lg:block border-b border-zinc-200 pb-4">Request Leasing Information</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-[10px] font-normal text-zinc-500 mb-2 uppercase tracking-widest">First Name *</label>
<input className="w-full border border-zinc-300 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black bg-transparent transition-all placeholder:text-zinc-400 font-light" placeholder="Jane" required="" type="text"/>
</div>
<div>
<label className="block text-[10px] font-normal text-zinc-500 mb-2 uppercase tracking-widest">Last Name</label>
<input className="w-full border border-zinc-300 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black bg-transparent transition-all placeholder:text-zinc-400 font-light" placeholder="Doe" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-[10px] font-normal text-zinc-500 mb-2 uppercase tracking-widest">Phone Number</label>
<input className="w-full border border-zinc-300 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black bg-transparent transition-all placeholder:text-zinc-400 font-light" placeholder="(555) 000-0000" type="tel"/>
</div>
<div>
<label className="block text-[10px] font-normal text-zinc-500 mb-2 uppercase tracking-widest">Email Address *</label>
<input className="w-full border border-zinc-300 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black bg-transparent transition-all placeholder:text-zinc-400 font-light" placeholder="jane@company.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-[10px] font-normal text-zinc-500 mb-2 uppercase tracking-widest">Company Name</label>
<input className="w-full border border-zinc-300 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black bg-transparent transition-all placeholder:text-zinc-400 font-light" placeholder="Your Business LLC" type="text"/>
</div>
<div>
<label className="block text-[10px] font-normal text-zinc-500 mb-2 uppercase tracking-widest">Additional Details / Questions</label>
<textarea className="w-full border border-zinc-300 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black bg-transparent transition-all placeholder:text-zinc-400 font-light resize-y" placeholder="I am interested in..." rows="4"></textarea>
</div>
<button className="w-full bg-black text-white px-6 py-4 text-sm font-normal hover:bg-zinc-800 transition-colors flex justify-center items-center gap-3 rounded-none mt-4 group" type="submit">
                        Submit Request
                        <iconify-icon className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:plain-linear"></iconify-icon>
</button>
<p className="text-[10px] text-zinc-400 text-center uppercase tracking-widest mt-4">We will get back to you within 24 hours.</p>
</form>
</div>
</div>
</section>

<footer className="bg-black text-white py-12 border-t border-zinc-900">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="font-normal text-xl tracking-tighter uppercase">FSD.</div>
<p className="text-xs text-zinc-500 font-light tracking-wide">© 2024 Flex Space Development. Maricopa, AZ.</p>
</div>
</footer>

    </>
  );
}
