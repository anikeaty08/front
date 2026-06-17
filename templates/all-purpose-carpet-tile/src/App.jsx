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
      

<nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200/50 z-50 transition-all duration-300">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<a className="uppercase flex items-center gap-2 text-xl font-semibold text-[#1a2332] tracking-tighter" href="#">All Purpose Carpet &amp; Tile</a>
<ul className="hidden md:flex gap-8 items-center text-sm font-medium text-[#6c7a8c]">
<li className=""><a className="hover:text-[#21A0D3] transition-colors" href="#services">Services</a></li>
<li className=""><a className="hover:text-[#21A0D3] transition-colors" href="#process">Process</a></li>
<li className=""><a className="hover:text-[#21A0D3] transition-colors" href="#results">Results</a></li>
<li className=""><a className="hover:text-[#21A0D3] transition-colors" href="#reviews">Reviews</a></li>
</ul>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium bg-[#1a2332] text-white rounded-md hover:bg-[#2c3e50] transition-all shadow-sm hover:shadow" href="#contact">
                Book a Call
            </a>
<button className="md:hidden text-[#1a2332]">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</nav>

<section className="md:pt-40 md:pb-28 overflow-hidden pt-32 pb-20 relative">
<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-bl from-[#21A0D3]/5 to-transparent rounded-bl-[100%]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#21A0D3]/20 text-xs font-medium text-[#21A0D3] mb-6 shadow-sm">
<iconify-icon icon="solar:medal-star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Premium Floor Care Experts
                    </div>
<h1 className="md:text-5xl lg:text-6xl leading-[1.15] text-4xl font-medium text-[#1a2332] tracking-tight mb-6" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Trusted Cleaning That Brings Your  <span className="block font-semibold italic text-[#21A0D3]">Floors Back to Life</span></h1>
<p className="text-base md:text-lg text-[#6c7a8c] font-normal leading-relaxed mb-8 max-w-lg">
                        Specialized carpet and tile cleaning that restores the beauty, hygiene, and comfort of your living spaces. Experience premium care with guaranteed results.
                    </p>
<div className="flex flex-wrap items-center gap-4">
<a className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-[#21A0D3] text-white rounded-md hover:bg-[#1C86B0] transition-all shadow-sm hover:shadow" href="#contact">
<iconify-icon className="text-lg" icon="solar:calendar-add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Book a Call
                        </a>
<a className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-white text-[#1a2332] border border-gray-200 rounded-md hover:border-[#21A0D3] hover:text-[#21A0D3] transition-all shadow-sm" href="https://www.instagram.com/allpurposecarpetcleaning/" target="_blank">
<iconify-icon className="text-lg" icon="solar:gallery-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            View Our Work
                        </a>
</div>
</div>

<div className="md:p-10 bg-white border-gray-100 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)]" id="contact">
<div className="absolute -top-4 -right-4 w-24 h-24 bg-[#f8f6f3] rounded-full blur-2xl -z-10"></div>
<h3 className="text-2xl tracking-tight font-semibold text-[#1a2332] mb-2" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Request a Free Quote</h3>
<p className="text-sm text-[#6c7a8c] mb-8 font-normal">Tell us about your space and we'll be in touch to schedule your cleaning.</p>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-[#1a2332]">First Name</label>
<input className="w-full px-4 py-2.5 bg-[#f8f6f3]/50 border border-gray-200 rounded-md text-sm font-normal text-[#1a2332] placeholder-gray-400 focus:bg-white focus:outline-none focus:border-[#21A0D3] focus:ring-1 focus:ring-[#21A0D3]/30 transition-all" placeholder="John" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-[#1a2332]">Last Name</label>
<input className="w-full px-4 py-2.5 bg-[#f8f6f3]/50 border border-gray-200 rounded-md text-sm font-normal text-[#1a2332] placeholder-gray-400 focus:bg-white focus:outline-none focus:border-[#21A0D3] focus:ring-1 focus:ring-[#21A0D3]/30 transition-all" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-[#1a2332]">Email Address</label>
<input className="w-full px-4 py-2.5 bg-[#f8f6f3]/50 border border-gray-200 rounded-md text-sm font-normal text-[#1a2332] placeholder-gray-400 focus:bg-white focus:outline-none focus:border-[#21A0D3] focus:ring-1 focus:ring-[#21A0D3]/30 transition-all" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-[#1a2332]">Phone Number</label>
<input className="w-full px-4 py-2.5 bg-[#f8f6f3]/50 border border-gray-200 rounded-md text-sm font-normal text-[#1a2332] placeholder-gray-400 focus:bg-white focus:outline-none focus:border-[#21A0D3] focus:ring-1 focus:ring-[#21A0D3]/30 transition-all" placeholder="(555) 000-0000" type="tel"/>
</div>
<div className="space-y-1.5 relative">
<label className="text-xs font-medium text-[#1a2332]">Service Required</label>
<div className="relative">
<select className="focus:bg-white focus:outline-none focus:border-[#21A0D3] focus:ring-1 focus:ring-[#21A0D3]/30 transition-all appearance-none cursor-pointer text-sm font-normal text-[#1a2332] bg-[#f8f6f3]/50 w-full border-gray-200 border rounded-md pt-2.5 pr-4 pb-2.5 pl-4">
<option disabled="" selected="" value="">Select a service...</option>
<option value="carpet">Carpet Cleaning</option>
<option value="tile">Tile &amp; Grout Cleaning</option>
<option value="upholstery">Upholstery Cleaning</option>
<option value="both">Multiple Services</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="hover:bg-[#2c3e50] transition-colors flex text-sm font-medium text-white bg-[#1a2332] w-full rounded-md mt-2 pt-3 pb-3 shadow-sm gap-x-2 gap-y-2 items-center justify-center" type="button">
                            Request Quote
                            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<section className="border-y border-gray-200/60 bg-white">
<div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-gray-100">
<div className="text-center px-4">
<h3 className="text-3xl font-semibold text-[#21A0D3] tracking-tight mb-1" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>300+</h3>
<p className="text-xs font-medium text-[#6c7a8c] uppercase tracking-widest">Spaces Cleaned</p>
</div>
<div className="text-center px-4">
<h3 className="text-3xl font-semibold text-[#21A0D3] tracking-tight mb-1" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>4.9★</h3>
<p className="text-xs font-medium text-[#6c7a8c] uppercase tracking-widest">Average Rating</p>
</div>
<div className="text-center px-4">
<h3 className="text-3xl tracking-tight text-[#21A0D3] font-semibold mb-1" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>100%</h3>
<p className="text-xs font-medium text-[#6c7a8c] uppercase tracking-widest">Satisfaction</p>
</div>
<div className="text-center px-4">
<h3 className="text-3xl tracking-tight text-[#21A0D3] font-semibold mb-1" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Eco</h3>
<p className="text-xs font-medium text-[#6c7a8c] uppercase tracking-widest">Safe Products</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#f8f6f3]" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="uppercase block text-xs font-medium text-[#21A0D3] tracking-widest mb-3">Our Expertise</span>
<h2 className="text-4xl tracking-tight text-[#1a2332] font-semibold mb-4" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Specialized Cleaning Services</h2>
<p className="text-sm text-[#6c7a8c] font-normal leading-relaxed">Using state-of-the-art equipment and eco-friendly solutions to breathe new life into your home's surfaces.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
<div className="w-12 h-12 bg-[#f8f6f3] rounded-lg flex items-center justify-center text-[#21A0D3] mb-6 group-hover:bg-[#21A0D3] group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-xl tracking-tight font-medium text-[#1a2332] mb-3" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Premium Carpet Cleaning</h4>
<p className="text-sm text-[#6c7a8c] font-normal leading-relaxed">Deep extraction methods to remove embedded dirt, allergens, and stubborn stains, leaving carpets fresh and soft.</p>
</div>

<div className="group bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
<div className="w-12 h-12 bg-[#f8f6f3] rounded-lg flex items-center justify-center text-[#21A0D3] mb-6 group-hover:bg-[#21A0D3] group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:waterdrops-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-xl tracking-tight font-medium text-[#1a2332] mb-3" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Tile &amp; Grout Restoration</h4>
<p className="text-sm text-[#6c7a8c] font-normal leading-relaxed">High-pressure cleaning combined with specialized solutions to eliminate grime and restore the original color of your grout lines.</p>
</div>

<div className="group bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
<div className="w-12 h-12 bg-[#f8f6f3] rounded-lg flex items-center justify-center text-[#21A0D3] mb-6 group-hover:bg-[#21A0D3] group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:armchair-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-xl tracking-tight font-medium text-[#1a2332] mb-3" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Upholstery Care</h4>
<p className="text-sm text-[#6c7a8c] font-normal leading-relaxed">Delicate yet effective cleaning for all fabric types, removing odors and revitalizing your favorite furniture pieces.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<span className="text-xs font-medium text-[#21A0D3] uppercase tracking-widest mb-3 block">How It Works</span>
<h2 className="text-4xl tracking-tight text-[#1a2332] font-semibold mb-6" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>A Seamless Path to Cleaner Spaces</h2>
<p className="text-sm text-[#6c7a8c] font-normal leading-relaxed mb-10">We believe in transparent pricing, punctual service, and results that speak for themselves. Here is what you can expect when you work with us.</p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#f8f6f3] border border-gray-200 flex items-center justify-center text-xs font-medium text-[#1a2332]">1</div>
<div className="">
<h5 className="text-base font-medium text-[#1a2332] mb-1">Book Your Call</h5>
<p className="text-sm text-[#6c7a8c] font-normal">Schedule a convenient time for us to assess your needs and provide a free, no-obligation quote.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#f8f6f3] border border-gray-200 flex items-center justify-center text-xs font-medium text-[#1a2332]">2</div>
<div className="">
<h5 className="text-base font-medium text-[#1a2332] mb-1">Pre-Inspection</h5>
<p className="text-sm text-[#6c7a8c] font-normal">Our technicians walk through your space to identify problem areas, stains, and the best cleaning methods.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#21A0D3] border border-[#21A0D3] flex items-center justify-center text-xs font-medium text-white shadow-sm">3</div>
<div className="">
<h5 className="text-base font-medium text-[#1a2332] mb-1">Deep Cleaning</h5>
<p className="text-sm text-[#6c7a8c] font-normal">We utilize industry-leading equipment to thoroughly clean, sanitize, and extract dirt from your surfaces.</p>
</div>
</div>
</div>
</div>
<div className="overflow-hidden h-[500px] border-gray-100 border rounded-2xl relative shadow-lg">
<img alt="Pristine interior space" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6080040b-e89a-4979-aab9-4bef35d2d2e2_1600w.png"/>
<div className="bg-gradient-to-t from-[#1a2332]/80 to-transparent absolute top-0 right-0 bottom-0 left-0 scale-100"></div>
<div className="absolute bottom-6 left-6 right-6">
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1a2332] text-white" id="results">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-medium text-[#21A0D3] uppercase tracking-widest mb-3 block">Transformations</span>
<h2 className="text-4xl tracking-tight text-white font-semibold mb-4" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>See The Difference</h2>
<p className="text-sm text-gray-400 font-normal leading-relaxed">Real results from our latest projects. Drag to see the incredible difference a professional clean makes.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden p-2 backdrop-blur-sm">
<div className="relative h-64 rounded-lg overflow-hidden group">
<img alt="Clean floors" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4e7be15c-321a-42de-93ab-afaa9105ac73_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-xs font-medium text-white border border-white/10">
                            Tile Restoration
                        </div>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden p-2 backdrop-blur-sm">
<div className="relative h-64 rounded-lg overflow-hidden group">
<img alt="Clean carpet" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a354bce2-1ccd-41a6-98c2-47eb644b8958_800w.jpg"/>
<div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-xs font-medium text-white border border-white/10">
                            Carpet Extraction
                        </div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#21A0D3] hover:text-white transition-colors" href="https://www.instagram.com/allpurposecarpetcleaning/" target="_blank">
                    View more on Instagram
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#f8f6f3]" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-medium text-[#21A0D3] uppercase tracking-widest mb-3 block">Testimonials</span>
<h2 className="text-4xl tracking-tight text-[#1a2332] font-semibold" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>What Our Clients Say</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
<div className="flex gap-1 text-[#21A0D3] mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#6c7a8c] font-normal leading-relaxed mb-6 italic">"They completely transformed our living room carpet. With pets, we thought we'd have to replace it, but All Purpose made it look brand new. Highly recommend!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#f8f6f3] flex items-center justify-center text-xs font-semibold text-[#1a2332]">SM</div>
<div>
<h6 className="text-sm font-medium text-[#1a2332]">Sarah M.</h6>
<p className="text-xs text-gray-400 font-normal">Carpet Cleaning</p>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
<div className="flex gap-1 text-[#21A0D3] mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#6c7a8c] font-normal leading-relaxed mb-6 italic">"Professional, punctual, and meticulous. The tile and grout in our kitchen looks exactly like it did when we first moved in. Excellent service."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#f8f6f3] flex items-center justify-center text-xs font-semibold text-[#1a2332]">JD</div>
<div>
<h6 className="text-sm font-medium text-[#1a2332]">James D.</h6>
<p className="text-xs text-gray-400 font-normal">Tile Restoration</p>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
<div className="flex gap-1 text-[#21A0D3] mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#6c7a8c] font-normal leading-relaxed mb-6 italic">"I'm blown away by the attention to detail. They cleaned our sectional and rug, removing stains I thought were permanent. Fantastic communication throughout."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#f8f6f3] flex items-center justify-center text-xs font-semibold text-[#1a2332]">EW</div>
<div>
<h6 className="text-sm font-medium text-[#1a2332]">Emily W.</h6>
<p className="text-xs text-gray-400 font-normal">Upholstery Care</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white text-center border-t border-gray-100">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl tracking-tight text-[#1a2332] font-semibold mb-6" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Ready for Spotless Floors?</h2>
<p className="text-base text-[#6c7a8c] font-normal mb-8 max-w-xl mx-auto">Let us bring your carpets and tiles back to life. Schedule your free consultation today.</p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium bg-[#1a2332] text-white rounded-md hover:bg-[#2c3e50] transition-all shadow-sm" href="#contact">
                    Book a Call Now
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium bg-white text-[#1a2332] border border-gray-200 rounded-md hover:border-[#21A0D3] hover:text-[#21A0D3] transition-all shadow-sm flex items-center justify-center gap-2" href="https://www.instagram.com/allpurposecarpetcleaning/" target="_blank">
<iconify-icon className="text-lg" icon="mdi:instagram"></iconify-icon>
                    Follow Us
                </a>
</div>
</div>
</section>

<footer className="bg-[#1a2332] text-white pt-16 pb-8 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-2">
<a className="text-xl tracking-tighter font-semibold text-white uppercase flex items-center gap-2 mb-4" href="#">
<iconify-icon className="text-[#21A0D3] text-2xl" icon="solar:sparkles-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        All Purpose
                    </a>
<p className="text-sm text-gray-400 font-normal leading-relaxed max-w-sm">Premium carpet, tile, and upholstery cleaning services dedicated to transforming and protecting your home's surfaces.</p>
</div>
<div className="">
<h4 className="text-sm font-medium text-white mb-4">Quick Links</h4>
<ul className="space-y-3 text-sm text-gray-400 font-normal">
<li className=""><a className="hover:text-[#21A0D3] transition-colors" href="#services">Services</a></li>
<li className=""><a className="hover:text-[#21A0D3] transition-colors" href="#process">Our Process</a></li>
<li className=""><a className="hover:text-[#21A0D3] transition-colors" href="#results">Before &amp; After</a></li>
<li className=""><a className="hover:text-[#21A0D3] transition-colors" href="#contact">Book a Call</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-medium text-white mb-4">Connect</h4>
<ul className="space-y-3 text-sm text-gray-400 font-normal">
<li className="">
<a className="hover:text-[#21A0D3] transition-colors flex items-center gap-2" href="https://www.instagram.com/allpurposecarpetcleaning/" target="_blank">
<iconify-icon className="text-base" icon="mdi:instagram"></iconify-icon>
                                Instagram
                            </a><a className="hover:text-[#21A0D3] transition-colors flex items-center gap-2 mt-3" href="/805-248-1013" target="_blank">805-248-1013</a><a className="hover:text-[#21A0D3] transition-colors flex items-center gap-2 mt-3" href="/Allpurposecarpet@gmail.com" target="_blank">Allpurposecarpet@gmail.com</a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 text-center md:flex md:justify-between md:text-left text-xs text-gray-500 font-normal">
<p>© 2024 All Purpose Carpet &amp; Tile Cleaning. All rights reserved.</p>
<div className="space-x-4 mt-4 md:mt-0">
<a className="hover:text-gray-300 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-gray-300 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
