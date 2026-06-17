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
      

<nav className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold text-slate-900 tracking-tighter">      GCM</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#products">Products</a>
<a className="hover:text-slate-900 transition-colors" href="#quality">Quality</a>
<a className="hover:text-slate-900 transition-colors" href="#sustainability">Sustainability</a>
<a className="hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center text-sm font-medium transition-colors bg-slate-900 text-white h-9 px-4 rounded-md hover:bg-slate-800" href="#contact">
                    Export Inquiry
                </a>
<button className="md:hidden text-slate-600">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="md:pt-32 md:pb-24 overflow-hidden pt-24 pb-16 relative">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-6">
<span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
                    Premium Cotton Manufacturing
                </div>
<h1 className="md:text-5xl lg:text-6xl leading-tight text-4xl font-semibold text-slate-900 tracking-tight mb-6">
                    Garg Cotton &amp; <br/><span className="text-slate-400">General Mills</span>.
                </h1>
<p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                    We are a premier cotton manufacturing facility committed to delivering uncompromised quality. Specializing in high-grade cotton bales and premium cotton seeds for our global clients.
                </p>
<div className="flex flex-wrap items-center gap-4">
<a className="inline-flex items-center justify-center text-sm font-medium transition-colors bg-blue-600 text-white h-11 px-6 rounded-md hover:bg-blue-700 shadow-sm" href="#products">
                        View Products
                    </a>
<a className="inline-flex items-center justify-center text-sm font-medium transition-colors border border-slate-200 bg-white text-slate-700 h-11 px-6 rounded-md hover:bg-slate-50" href="#contact">
                        Contact Sales
                    </a>
</div>
</div>

<div className="relative group cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-slate-50 rounded-2xl transform rotate-2 scale-105 opacity-50 transition-transform group-hover:rotate-3"></div>
<div className="relative bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden shadow-sm aspect-video flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1598282361139-65231c50e2b3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80')] bg-cover bg-center">
<div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/30 transition-colors"></div>
<div className="relative flex flex-col items-center">
<div className="w-16 h-16 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-900 shadow-sm transition-transform group-hover:scale-105">
<iconify-icon className="ml-1" height="32" icon="solar:play-linear" width="32"></iconify-icon>
</div>
<span className="mt-4 text-white text-sm font-medium tracking-wide drop-shadow-md">Watch Factory Tour</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-200 bg-slate-50 py-8">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm font-medium text-slate-500 mb-6 tracking-wide uppercase">Certified &amp; Trusted By</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center text-slate-400">
<div className="flex items-center gap-2">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-slate-600">ISO 9001:2015</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon height="24" icon="solar:global-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-slate-600">Govt. Recognized Export House</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon height="24" icon="solar:leaf-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-slate-600">Eco-Friendly Process</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon height="24" icon="solar:verified-check-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-slate-600">TMA Member</span>
</div>
</div>
</div>
</section>

<section className="py-24" id="products">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Our Core Products.</h2>
<p className="text-slate-600 leading-relaxed">We specialize in processing high-grade raw cotton into fine bales and nutrient-rich seeds. Every stage is strictly monitored to ensure the highest yield and purity.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-5xl">

<div className="group flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
<div className="h-64 bg-slate-100 border-b border-slate-200 relative overflow-hidden">
<img alt="Cotton Bales" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7525fc01-0bd9-48eb-8ad7-c97c3192c076_1600w.jpg"/>
</div>
<div className="p-8 flex flex-col flex-1">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-blue-600" height="24" icon="solar:box-linear" width="24"></iconify-icon>
<h3 className="text-xl font-semibold text-slate-900">Cotton Bales</h3>
</div>
<p className="text-sm text-slate-600 mb-8 flex-1 leading-relaxed">High-density, contaminant-free cotton bales pressed with modern machinery. Meticulously cleaned and processed, making them ideal for high-end spinning mills globally.</p>
<a className="inline-flex items-center justify-between w-full text-sm font-medium transition-colors border border-slate-200 bg-white text-slate-900 h-11 px-4 rounded-md hover:bg-slate-50 group-hover:border-blue-200 group-hover:text-blue-600" href="#contact">
                            Inquire about Bales
                            <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="group flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
<div className="h-64 bg-slate-100 border-b border-slate-200 relative overflow-hidden">
<img alt="Cotton Seeds" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8b7a5bae-56eb-4858-a44c-77a914267461_1600w.jpg"/>
</div>
<div className="p-8 flex flex-col flex-1">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-blue-600" height="24" icon="solar:seedling-linear" width="24"></iconify-icon>
<h3 className="text-xl font-semibold text-slate-900">Cotton Seeds</h3>
</div>
<p className="text-sm text-slate-600 mb-8 flex-1 leading-relaxed">Premium quality fuzzy and delinted cotton seeds, cleanly separated during the ginning process. Known for excellent oil content and high nutritional value for agricultural use.</p>
<a className="inline-flex items-center justify-between w-full text-sm font-medium transition-colors border border-slate-200 bg-white text-slate-900 h-11 px-4 rounded-md hover:bg-slate-50 group-hover:border-blue-200 group-hover:text-blue-600" href="#contact">
                            Inquire about Seeds
                            <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="quality">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Rigorous Quality Control.</h2>
<p className="text-slate-600 leading-relaxed mb-8">Our in-house testing laboratory ensures every batch meets international standards. From micronaire value testing to staple length analysis, we leave nothing to chance.</p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 text-slate-700 shadow-sm">
<iconify-icon height="20" icon="solar:test-tube-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Advanced HVI Testing</h4>
<p className="text-sm text-slate-600">High Volume Instrument testing for length, strength, micronaire, color, and trash content.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 text-slate-700 shadow-sm">
<iconify-icon height="20" icon="solar:eye-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Moisture Monitoring</h4>
<p className="text-sm text-slate-600">Automated moisture control systems throughout the ginning process to prevent degradation.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 text-slate-700 shadow-sm">
<iconify-icon height="20" icon="solar:clipboard-check-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Batch Traceability</h4>
<p className="text-sm text-slate-600">Every bale is tagged and tracked, ensuring complete transparency from processing to delivery.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-square bg-slate-200 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
<img alt="Laboratory Testing" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon height="24" icon="solar:target-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">99.9%</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Contaminant Free</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-blue-50/50" id="sustainability">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Rooted in Sustainability.</h2>
<p className="text-slate-600 max-w-2xl mx-auto mb-16">We believe in manufacturing that respects the earth. Our facility implements eco-friendly processing while actively supporting the local farming community.</p>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-left">
<div className="w-10 h-10 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
<iconify-icon height="24" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Farmer Empowerment</h3>
<p className="text-sm text-slate-600">Fair pricing models and direct procurement from hundreds of local farmers.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-left">
<div className="w-10 h-10 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
<iconify-icon height="24" icon="solar:waterdrops-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Water Conservation</h3>
<p className="text-sm text-slate-600">Advanced systems integrated into our facility to drastically reduce water wastage.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-left">
<div className="w-10 h-10 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
<iconify-icon height="24" icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Energy Efficient</h3>
<p className="text-sm text-slate-600">Utilizing modern, low-emission machinery and transitioning towards cleaner energy.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-200" id="contact">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

<div className="flex flex-col justify-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Get in touch.</h2>
<p className="text-slate-600 mb-10">Ready to place an order or need specific quality details? Contact our directors directly or send us an inquiry via the form.</p>
<div className="space-y-8 bg-slate-50 p-8 rounded-2xl border border-slate-200">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 text-slate-500 shadow-sm">
<iconify-icon height="20" icon="solar:user-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Ownership &amp; Management</h4>
<p className="text-sm text-slate-600">Milind Garg &amp; Anurag Garg</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 text-slate-500 shadow-sm">
<iconify-icon height="20" icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Phone &amp; WhatsApp</h4>
<p className="text-sm text-slate-600 flex flex-col gap-1">
<a className="hover:text-blue-600 transition-colors" href="tel:+918053400045">+91 80534 00045</a>
<a className="hover:text-blue-600 transition-colors" href="tel:+917027100045">+91 70271 00045</a>
</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 text-slate-500 shadow-sm">
<iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Email Address</h4>
<a className="text-sm text-slate-600 hover:text-blue-600 transition-colors" href="mailto:gargcottonmills@gmail.com">gargcottonmills@gmail.com</a>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<h3 className="text-lg font-semibold text-slate-900 mb-6">Send an Inquiry</h3>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700">First Name</label>
<input className="w-full h-10 px-3 text-sm border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-shadow bg-slate-50" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700">Last Name</label>
<input className="w-full h-10 px-3 text-sm border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-shadow bg-slate-50" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700">Email Address</label>
<input className="w-full h-10 px-3 text-sm border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-shadow bg-slate-50" placeholder="john@company.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700">Product of Interest</label>
<div className="relative">
<select className="w-full h-10 px-3 text-sm border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-shadow bg-slate-50 appearance-none">
<option>Cotton Bales</option>
<option>Cotton Seeds</option>
<option>Both / General Inquiry</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-slate-400 pointer-events-none" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700">Message / Requirements</label>
<textarea className="w-full p-3 text-sm border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-shadow bg-slate-50 resize-none" placeholder="Please specify volume, destination, etc." rows="4"></textarea>
</div>
<button className="w-full flex items-center justify-center text-sm font-medium transition-colors bg-slate-900 text-white h-11 rounded-md hover:bg-slate-800" type="button">
                        Submit Inquiry
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-slate-50 py-12 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold text-slate-900 tracking-tighter">GCM</span>
</div>
<p className="text-xs text-slate-500">© 2023 Garg Cotton &amp; General Mills. All rights reserved.</p>
</div>
</footer>

<a aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform hover:shadow-xl group" href="https://wa.me/918053400045" target="_blank">
<iconify-icon height="28" icon="solar:phone-calling-linear" width="28"></iconify-icon>

<span className="absolute right-16 bg-white text-slate-800 text-xs font-medium py-1.5 px-3 rounded-md shadow-sm border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat with us
        </span>
</a>

    </>
  );
}
