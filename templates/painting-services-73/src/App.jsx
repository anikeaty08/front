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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#eff6ff',
100: '#dbeafe',
500: '#3b82f6',
600: '#2563eb',
700: '#1d4ed8',
900: '#1e3a8a',
950: '#172554',
}
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
      

<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-600 text-2xl" icon="solar:roller-linear"></iconify-icon>
<a className="text-brand-950 font-semibold tracking-tighter text-xl uppercase" href="#">Pro Line</a>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-brand-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium hover:text-brand-600 transition-colors" href="#about">About</a>
<a className="text-sm font-medium hover:text-brand-600 transition-colors" href="#portfolio">Gallery</a>
<a className="text-sm font-medium hover:text-brand-600 transition-colors" href="#reviews">Testimonials</a>
</div>
<div className="flex items-center gap-4">
<div className="hidden lg:flex items-center gap-2 text-brand-900 font-medium text-sm">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                        +44-777-6625-419
                    </div>
<a className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 rounded-lg shadow-sm shadow-brand-600/20 transition-all" href="#contact">
                        Get a Free Quote
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Beautifully painted interior" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/20 sm:to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                    Trusted Painters &amp; Decorators Hampshire
                </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                    Precision Painting &amp; Decorating <br className="hidden sm:block"/> Serving Hampshire and Surrounding Areas.
                </h1>
<p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                    Elevate your space with expert craftsmanship. We deliver flawless finishes, reliable service, and a meticulous attention to detail for both residential and commercial properties.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-brand-600 hover:bg-brand-700 rounded-lg shadow-sm shadow-brand-600/20 transition-all w-full sm:w-auto" href="#contact">
                        Contact Us Now
                    </a>
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg shadow-sm transition-all w-full sm:w-auto gap-2" href="tel:+447776625419">
<iconify-icon className="text-lg text-slate-400" icon="solar:phone-linear"></iconify-icon>
                        +44-777-6625-419
                    </a>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-200/60 bg-white py-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="text-sm font-semibold tracking-tight text-slate-400 uppercase">Trusted Quality</div>
<div className="flex flex-wrap justify-center gap-8 sm:gap-16 items-center">
<span className="font-semibold tracking-tighter text-xl text-slate-800">DULUX</span>
<span className="font-semibold tracking-tighter text-xl text-slate-800">FARROW&amp;BALL</span>
<span className="font-semibold tracking-tighter text-xl text-slate-800">CROWN</span>
<span className="font-semibold tracking-tighter text-xl text-slate-800">ZINSSER</span>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Comprehensive Decorating Services</h2>
<p className="text-base text-slate-500">From meticulous surface preparation to the final flawless coat, we offer a full spectrum of services designed to transform and protect your property.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-100 transition-all group">
<div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors">
<iconify-icon className="text-2xl text-brand-600 group-hover:text-white transition-colors" icon="solar:home-angle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Interior Painting</h3>
<p className="text-sm text-slate-500 leading-relaxed">Expert application for walls, ceilings, and trims. We ensure a smooth, durable finish that revitalizes your living spaces.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-100 transition-all group">
<div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors">
<iconify-icon className="text-2xl text-brand-600 group-hover:text-white transition-colors" icon="solar:buildings-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Exterior Painting</h3>
<p className="text-sm text-slate-500 leading-relaxed">Weather-resistant coatings for homes, commercial buildings, and fences. Protecting your property from the elements.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-100 transition-all group">
<div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors">
<iconify-icon className="text-2xl text-brand-600 group-hover:text-white transition-colors" icon="solar:city-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Full Property Decorating</h3>
<p className="text-sm text-slate-500 leading-relaxed">End-to-end project management. We handle complete property transformations with minimal disruption to your daily routine.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-100 transition-all group">
<div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors">
<iconify-icon className="text-2xl text-brand-600 group-hover:text-white transition-colors" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Surface Preparation</h3>
<p className="text-sm text-slate-500 leading-relaxed">The foundation of a perfect finish. Utilizing advanced dust-free sanding systems for pristine, defect-free surfaces.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-100 transition-all group">
<div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors">
<iconify-icon className="text-2xl text-brand-600 group-hover:text-white transition-colors" icon="solar:wallpaper-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Wallpapering</h3>
<p className="text-sm text-slate-500 leading-relaxed">Precision installation and seamless removal of all wallpaper types, from standard patterns to luxury wallcoverings.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-100 transition-all group">
<div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors">
<iconify-icon className="text-2xl text-brand-600 group-hover:text-white transition-colors" icon="solar:leaf-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Woodwork Finishing</h3>
<p className="text-sm text-slate-500 leading-relaxed">Restoring and finishing doors, frames, skirting boards, and staircases with premium oils, stains, and durable paints.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-100 transition-all group">
<div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors">
<iconify-icon className="text-2xl text-brand-600 group-hover:text-white transition-colors" icon="solar:shop-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Commercial &amp; Residential</h3>
<p className="text-sm text-slate-500 leading-relaxed">Versatile expertise scaling from cozy domestic bedrooms to large-scale retail and office space refurbishments.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-100 transition-all group">
<div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors">
<iconify-icon className="text-2xl text-brand-600 group-hover:text-white transition-colors" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Spray Painting</h3>
<p className="text-sm text-slate-500 leading-relaxed">High-efficiency airless and HVLP spray applications for factory-smooth fine finishes on cabinetry and large areas.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-100 transition-all group">
<div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors">
<iconify-icon className="text-2xl text-brand-600 group-hover:text-white transition-colors" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Touch-ups &amp; Maintenance</h3>
<p className="text-sm text-slate-500 leading-relaxed">Ongoing support to keep your property looking pristine. Perfect for end-of-tenancy or refreshing high-traffic areas.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute inset-0 bg-brand-100 rounded-3xl translate-x-4 translate-y-4 -z-10"></div>
<img alt="Professional painter at work" className="rounded-3xl shadow-lg border border-slate-100 object-cover h-[500px] w-full" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"/>
</div>
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Expert Craftsmanship, Impeccable Detail.</h2>
<p className="text-base text-slate-500 mb-6 leading-relaxed">
                        At Pro Line, we believe that painting and decorating is more than just applying color to a wall—it's about protecting your investment and creating spaces you love. With years of experience serving Hampshire and surrounding areas, we have built a reputation based on reliability, cleanliness, and an uncompromising standard of quality.
                    </p>
<p className="text-base text-slate-500 mb-8 leading-relaxed">
                        We cover all aspects of decorating. From initial consultation and rigorous surface preparation to the final inspection, our approach ensures timely completion and total customer satisfaction. We treat your property with the utmost respect, leaving nothing behind but a perfect finish.
                    </p>
<div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-100">
<div>
<div className="text-3xl font-semibold text-brand-600 tracking-tight mb-1">10+</div>
<div className="text-sm text-slate-500 font-medium">Years Experience</div>
</div>
<div>
<div className="text-3xl font-semibold text-brand-600 tracking-tight mb-1">100%</div>
<div className="text-sm text-slate-500 font-medium">Satisfaction Guarantee</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-brand-950 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-4">Why Choose Pro Line?</h2>
<p className="text-brand-100/70 text-sm max-w-xl mx-auto">We set the standard for professional decorating services, combining traditional skills with modern techniques.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4 border border-white/5">
<iconify-icon className="text-2xl text-brand-400" icon="solar:medal-star-linear"></iconify-icon>
</div>
<h4 className="text-base font-medium mb-2">Expert Craftsmanship</h4>
<p className="text-xs text-brand-100/60 leading-relaxed">Highly skilled tradespeople dedicated to delivering flawless results every time.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4 border border-white/5">
<iconify-icon className="text-2xl text-brand-400" icon="solar:eye-linear"></iconify-icon>
</div>
<h4 className="text-base font-medium mb-2">Attention to Detail</h4>
<p className="text-xs text-brand-100/60 leading-relaxed">Rigorous prep work and sharp lines. We don't cut corners; we paint them perfectly.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4 border border-white/5">
<iconify-icon className="text-2xl text-brand-400" icon="solar:broom-linear"></iconify-icon>
</div>
<h4 className="text-base font-medium mb-2">Clean &amp; Tidy</h4>
<p className="text-xs text-brand-100/60 leading-relaxed">Dust-free sanding and thorough cleanup. We respect your space as if it were our own.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4 border border-white/5">
<iconify-icon className="text-2xl text-brand-400" icon="solar:tag-price-linear"></iconify-icon>
</div>
<h4 className="text-base font-medium mb-2">Competitive Pricing</h4>
<p className="text-xs text-brand-100/60 leading-relaxed">Transparent quotes with no hidden fees, providing exceptional value for premium work.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="portfolio">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Our Recent Work</h2>
<p className="text-base text-slate-500 max-w-xl">Browse our portfolio of completed projects, showcasing the transformation and quality finishes we bring to every job.</p>
</div>
<a className="text-sm font-medium text-brand-600 hover:text-brand-700 inline-flex items-center gap-1 group" href="#contact">
                    Start Your Project 
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="relative group overflow-hidden rounded-xl aspect-[4/3] bg-slate-100">
<img alt="Modern white interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
<span className="text-white font-medium tracking-tight">Residential Interior</span>
<span className="text-white/70 text-xs">London</span>
</div>
</div>
<div className="relative group overflow-hidden rounded-xl aspect-[4/3] bg-slate-100">
<img alt="Detailed trim painting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1469&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
<span className="text-white font-medium tracking-tight">Fine Woodwork</span>
<span className="text-white/70 text-xs">Manchester</span>
</div>
</div>
<div className="relative group overflow-hidden rounded-xl aspect-[4/3] bg-slate-100">
<img alt="Exterior house painting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
<span className="text-white font-medium tracking-tight">Exterior Restoration</span>
<span className="text-white/70 text-xs">Birmingham</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200/50" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Client Testimonials</h2>
<p className="text-base text-slate-500">Don't just take our word for it. Here is what our clients have to say about our service.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex text-amber-400 mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">"Pro Line transformed our hallway and living room. The finish is absolutely flawless, and their attention to detail during the prep work was incredible. They were polite, punctual, and left the house spotless. Highly recommend!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-semibold text-sm">SJ</div>
<div>
<div className="text-sm font-semibold text-slate-900">Sarah Jenkins</div>
<div className="text-xs text-slate-500">Residential Client</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex text-amber-400 mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">"We hired them for a full exterior repaint of our commercial unit. The team worked efficiently to minimize disruption and used high-quality materials. The building looks brand new. Very professional outfit."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-semibold text-sm">MR</div>
<div>
<div className="text-sm font-semibold text-slate-900">Mark Roberts</div>
<div className="text-xs text-slate-500">Business Owner</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex text-amber-400 mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">"I was nervous about having contractors in the house, but the team at Pro Line put me at ease. Their dust-free sanding system really works! The paint job is pristine, with super sharp edges. Will definitely use them again."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-semibold text-sm">EL</div>
<div>
<div className="text-sm font-semibold text-slate-900">Emma Lawson</div>
<div className="text-xs text-slate-500">Residential Client</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-brand-900 rounded-3xl overflow-hidden shadow-2xl">
<div className="grid lg:grid-cols-2">

<div className="p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-800 to-brand-950 -z-10"></div>
<div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10"></div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Ready for a Flawless Finish?</h2>
<p className="text-brand-100/80 text-base mb-10 leading-relaxed max-w-md">Contact us today to discuss your project. We offer free, no-obligation quotes and expert advice tailored to your needs.</p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
<iconify-icon className="text-xl text-white" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<div className="text-xs text-brand-100/60 uppercase tracking-wider font-medium mb-1">Call Us Now</div>
<a className="text-xl font-semibold text-white hover:text-brand-200 transition-colors" href="tel:+447776625419">+44-777-6625-419</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
<iconify-icon className="text-xl text-white" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<div className="text-xs text-brand-100/60 uppercase tracking-wider font-medium mb-1">Email Us</div>
<a className="text-base font-medium text-white hover:text-brand-200 transition-colors" href="mailto:quotes@prolinepainting.co.uk">quotes@prolinepainting.co.uk</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
<iconify-icon className="text-xl text-white" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<div className="text-xs text-brand-100/60 uppercase tracking-wider font-medium mb-1">Service Area</div>
<span className="text-base font-medium text-white">Serving Hampshire and surrounding areas</span>
</div>
</div>
</div>
</div>

<div className="p-10 lg:p-16 bg-white">
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-6">Request a Free Quote</h3>
<form className="space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="name">Full Name</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all placeholder:text-slate-400" id="name" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="phone">Phone Number</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all placeholder:text-slate-400" id="phone" placeholder="+44 7000 000000" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="service">Required Service</label>

<div className="relative">
<select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all appearance-none text-slate-700" id="service">
<option disabled="" selected="" value="">Select a service...</option>
<option value="interior">Interior Painting</option>
<option value="exterior">Exterior Painting</option>
<option value="commercial">Commercial Decorating</option>
<option value="wallpaper">Wallpapering</option>
<option value="other">Other / Not Sure</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="message">Project Details</label>
<textarea className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all placeholder:text-slate-400 resize-none" id="message" placeholder="Tell us briefly about your project..." rows="4"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 rounded-lg shadow-sm shadow-brand-600/20 transition-all mt-2" type="button">
                                Send Message
                            </button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-600 text-2xl" icon="solar:roller-linear"></iconify-icon>
<span className="text-brand-950 font-semibold tracking-tighter text-xl uppercase">Pro Line</span>
</div>
<div className="flex flex-wrap justify-center gap-6 text-sm">
<a className="text-slate-500 hover:text-brand-600 font-medium transition-colors" href="#services">Services</a>
<a className="text-slate-500 hover:text-brand-600 font-medium transition-colors" href="#about">About</a>
<a className="text-slate-500 hover:text-brand-600 font-medium transition-colors" href="#portfolio">Portfolio</a>
<a className="text-slate-500 hover:text-brand-600 font-medium transition-colors" href="#contact">Contact</a>
</div>
<div className="text-slate-900 font-medium text-sm flex items-center gap-2">
<iconify-icon className="text-brand-600 text-lg" icon="solar:phone-linear"></iconify-icon>
                    +44-777-6625-419
                </div>
</div>
<div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-slate-100 text-xs text-slate-400 gap-4">
<p>copyright 2026 build by Kamil</p>
<div className="flex gap-4">
<a className="hover:text-slate-600 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-600 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
