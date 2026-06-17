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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#f0f5fa',
100: '#e1ebf4',
500: '#3b82f6',
800: '#1e40af',
900: '#1e3a8a', // Deep blue
}
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
}
}
}
}



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
      

<header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/60 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center">
<a className="text-xl font-semibold tracking-tighter text-brand-900 flex items-center gap-2" href="#">
<iconify-icon className="text-2xl" icon="solar:washing-machine-minimalistic-linear"></iconify-icon>
                        CCPJ
                    </a>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-slate-500 hover:text-brand-900 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-500 hover:text-brand-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-brand-900 transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-slate-500 hover:text-brand-900 transition-colors" href="#contact">Contact</a>
</nav>

<div className="hidden md:flex items-center">
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-brand-900 rounded-full hover:bg-brand-800 transition-colors shadow-sm" href="tel:0169699902">
<iconify-icon className="mr-2 text-base" icon="solar:phone-linear"></iconify-icon>
                        016-969 9902
                    </a>
</div>
</div>
</div>
</header>

<section className="pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden relative">
<div className="absolute inset-0 z-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-900 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                        Available in Petaling Jaya
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter text-slate-900 mb-6 leading-tight">
                        Professional Carpet Cleaning in <span className="text-brand-900">Petaling Jaya</span>
</h1>
<p className="text-lg text-slate-500 mb-8 max-w-lg mx-auto lg:mx-0">
                        Fast • Affordable • Fragrant • Trusted by Local Customers. We bring your carpets back to life with premium deep cleaning services.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<a className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-white bg-brand-900 rounded-full hover:bg-brand-800 transition-all shadow-sm hover:shadow-md" href="tel:0169699902">
<iconify-icon className="mr-2 text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                            Call Now
                        </a>
<a className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:text-slate-900 transition-all shadow-sm hover:shadow-md" href="https://wa.me/60169699902?text=Hi,%20I%20want%20to%20clean%20my%20carpet." target="_blank">
<iconify-icon className="mr-2 text-lg text-green-600" icon="solar:chat-line-linear"></iconify-icon>
                            WhatsApp Us
                        </a>
</div>
</div>

<div className="relative mx-auto w-full max-w-lg lg:max-w-none">
<div className="aspect-[4/3] rounded-2xl bg-white shadow-soft border border-slate-100 p-2 overflow-hidden relative group">

<img alt="Clean living room carpet" className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
<div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20">
<div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-900 shrink-0">
<iconify-icon className="text-2xl" icon="solar:verified-check-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900 tracking-tight">Guaranteed Freshness</p>
<p className="text-xs text-slate-500">Stain removal &amp; deep cleaning</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-100" id="about">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-sm font-semibold text-brand-900 tracking-tight uppercase mb-3">About Us</h2>
<h3 className="text-3xl font-semibold tracking-tighter text-slate-900 mb-6">Your Local Cleaning Specialists</h3>
<p className="text-base text-slate-500 leading-relaxed">
                Based in Kampung Cempaka, we are Petaling Jaya's dedicated carpet cleaning experts. Our experienced team is focused entirely on customer satisfaction, delivering fast service and affordable pricing without compromising on quality. Whether it's a stubborn stain or routine maintenance, we bring freshness back to your space.
            </p>
</div>
</section>

<section className="py-24 relative" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12 text-center max-w-2xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tighter text-slate-900 mb-4">Our Services</h2>
<p className="text-sm text-slate-500">Comprehensive cleaning solutions tailored for every type of fabric and space.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-soft border border-slate-100 hover:border-brand-100 hover:shadow-md transition-all group">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-700 mb-6 group-hover:bg-brand-50 group-hover:text-brand-900 transition-colors">
<iconify-icon className="text-2xl" icon="solar:rug-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Carpet Deep Cleaning</h3>
<p className="text-sm text-slate-500 leading-relaxed">Intensive wash to remove embedded dirt, dust mites, and allergens from deep within the fibers.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-soft border border-slate-100 hover:border-brand-100 hover:shadow-md transition-all group">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-700 mb-6 group-hover:bg-brand-50 group-hover:text-brand-900 transition-colors">
<iconify-icon className="text-2xl" icon="solar:sofa-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Sofa Cleaning</h3>
<p className="text-sm text-slate-500 leading-relaxed">Gentle yet effective cleaning for fabric and leather sofas, restoring original color and freshness.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-soft border border-slate-100 hover:border-brand-100 hover:shadow-md transition-all group">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-700 mb-6 group-hover:bg-brand-50 group-hover:text-brand-900 transition-colors">
<iconify-icon className="text-2xl" icon="solar:buildings-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Office Carpet Cleaning</h3>
<p className="text-sm text-slate-500 leading-relaxed">Commercial-grade cleaning for heavy foot traffic areas, ensuring a professional environment.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-soft border border-slate-100 hover:border-brand-100 hover:shadow-md transition-all group">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-700 mb-6 group-hover:bg-brand-50 group-hover:text-brand-900 transition-colors">
<iconify-icon className="text-2xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Stain Removal</h3>
<p className="text-sm text-slate-500 leading-relaxed">Targeted treatments for tough spots, spills, and pet stains without damaging the carpet.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-soft border border-slate-100 hover:border-brand-100 hover:shadow-md transition-all group lg:col-span-2">
<div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-700 shrink-0 group-hover:bg-brand-50 group-hover:text-brand-900 transition-colors">
<iconify-icon className="text-2xl" icon="solar:home-angle-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Residential &amp; Commercial Cleaning</h3>
<p className="text-sm text-slate-500 leading-relaxed">We cater to both homes and businesses. Whether it's a cozy living room rug or an entire office floor, our equipment scales to meet your exact needs efficiently.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-brand-900 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tighter mb-6 text-white">Why Choose CCPJ?</h2>
<p className="text-brand-100 text-base mb-8 max-w-md leading-relaxed">We don't just clean; we care for your fabrics. Our approach combines efficiency with affordability.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<iconify-icon className="text-xl text-brand-100 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium">Fast &amp; Efficient Service</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-xl text-brand-100 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium">Affordable Pricing</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-xl text-brand-100 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium">Fragrant &amp; Fresh Finish</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-xl text-brand-100 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium">Friendly &amp; Professional Team</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-xl text-brand-100 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium">Trusted by Regular Customers</span>
</li>
</ul>
</div>
<div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-900 shadow-inner">
<span className="text-2xl font-semibold tracking-tighter">4.9</span>
</div>
<div>
<div className="flex text-yellow-400 mb-1">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-brand-50">Average Rating</p>
</div>
</div>
<p className="text-lg italic text-white leading-relaxed">
                        "Good excellent service, my carpet very fragrance.. I like the smell."
                    </p>
<p className="text-sm font-medium text-brand-100 mt-4">— Ms Ali Juhar</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12 text-center">
<h2 className="text-3xl font-semibold tracking-tighter text-slate-900 mb-4">Customer Reviews</h2>
<p className="text-sm text-slate-500">Hear what our clients in Petaling Jaya have to say.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl shadow-soft border border-slate-100">
<div className="flex text-yellow-400 mb-4 gap-0.5">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-700 mb-6 leading-relaxed">"Regular customer here! Good service, fast, clean &amp; good price."</p>
<p className="text-xs font-semibold text-slate-900">Harith Musa</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-soft border border-slate-100">
<div className="flex text-yellow-400 mb-4 gap-0.5">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-700 mb-6 leading-relaxed">"Fast and efficient, great service overall. Definitely will come again."</p>
<p className="text-xs font-semibold text-slate-900">Darren Khor</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-soft border border-slate-100">
<div className="flex text-yellow-400 mb-4 gap-0.5">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-700 mb-6 leading-relaxed">"Responsive, punctual and quality service. Highly recommended."</p>
<p className="text-xs font-semibold text-slate-900">Norita Hunt</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-semibold tracking-tighter text-slate-900 mb-2">Get a Free Quote</h2>
<p className="text-sm text-slate-500 mb-8">Fill out the form below and we'll get back to you shortly.</p>
<form className="space-y-5" onsubmit="event.preventDefault(); alert('Demo form submitted! In production, this would connect to a backend.');">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="name">Full Name</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-500 transition-colors shadow-sm" id="name" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="phone">Phone Number</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-500 transition-colors shadow-sm" id="phone" placeholder="01X-XXX XXXX" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="message">Message / Requirements</label>
<textarea className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-500 transition-colors shadow-sm resize-none" id="message" placeholder="E.g., I need a deep clean for a 3-seater sofa and living room carpet." required="" rows="4"></textarea>
</div>
<button className="w-full inline-flex justify-center items-center px-6 py-3.5 text-sm font-medium text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors shadow-sm" type="submit">
                            Request Quote
                            <iconify-icon className="ml-2 text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>

<div className="flex flex-col h-full">
<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 mb-6 shadow-soft">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-6">Contact Information</h3>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-slate-500">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Address</p>
<p className="text-sm text-slate-900 leading-relaxed">789, Jalan PJU 1/13, PJU 1,<br/>Kampung Cempaka, 47301<br/>Petaling Jaya, Selangor</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-slate-500">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Business Hours</p>
<p className="text-sm text-slate-900">9:00 AM – 5:30 PM</p>
<p className="text-xs text-slate-500 mt-0.5">Closed Sunday<br/><em>*Lunar New Year hours may vary</em></p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-slate-500">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Phone</p>
<a className="text-sm font-medium text-brand-900 hover:underline" href="tel:0169699902">016-969 9902</a>
</div>
</div>
</div>
</div>

<div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 h-64 sm:h-auto flex-grow relative grayscale hover:grayscale-0 transition-all duration-500">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.896796328905!2d101.5956!3d3.1199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDcnMTEuNiJOIDEwMcKwMzUnNDQuMiJF!5e0!3m2!1sen!2smy!4v1620000000000!5m2!1sen!2smy" style={{border: '0', position: 'absolute', inset: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-8 text-center border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
<div className="flex items-center gap-2 text-white mb-4">
<iconify-icon className="text-xl" icon="solar:washing-machine-minimalistic-linear"></iconify-icon>
<span className="text-lg font-semibold tracking-tighter">CCPJ</span>
</div>
<p className="text-xs">© 2023 Cuci Carpet Petaling Jaya. All rights reserved.</p>
</div>
</footer>

<div className="fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-slate-200 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] z-50 md:hidden flex gap-3">
<a className="flex-1 inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-xl active:bg-slate-100" href="https://wa.me/60169699902?text=Hi,%20I%20want%20to%20clean%20my%20carpet." target="_blank">
<iconify-icon className="mr-2 text-lg text-green-600" icon="solar:chat-line-linear"></iconify-icon>
            WhatsApp
        </a>
<a className="flex-1 inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white bg-brand-900 rounded-xl active:bg-brand-800" href="tel:0169699902">
<iconify-icon className="mr-2 text-lg" icon="solar:phone-linear"></iconify-icon>
            Call Now
        </a>
</div>

    </>
  );
}
