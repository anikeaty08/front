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
colors: {
brand: {
yellow: '#FACC15',
blue: '#0089e4', // Esca Tech Brand Blue
dark: '#0A0A0A',
gray: '#171717',
light: '#F5F5F5'
}
},
fontFamily: {
geist: ['Geist', 'sans-serif'],
space: ['Space Grotesk', 'sans-serif'],
}
}
}
}



        // Intersection Observer for Animation
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-element');
            elements.forEach(el => observer.observe(el));
        });
    
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
      

<div className="bg-white border-b border-gray-100 py-3 hidden md:block">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm font-medium text-gray-500">
<div className="flex items-center gap-4">
<div className="flex gap-3">
<a className="hover:text-brand-blue transition-colors" href="https://Www.Facebook.com/escatech/"><iconify-icon icon="solar:facebook-linear" width="18"></iconify-icon></a>
<a className="hover:text-brand-blue transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="18"></iconify-icon></a>
<a className="hover:text-brand-blue transition-colors" href="#"><iconify-icon icon="solar:videocamera-linear" width="18"></iconify-icon></a>
</div>
</div>
<div className="flex items-center gap-6">
<span className="flex items-center gap-2 font-geist"><iconify-icon className="text-brand-yellow text-lg" icon="solar:phone-calling-linear"></iconify-icon> +233 55 247 1234</span>
<span className="flex items-center gap-2 font-geist"><iconify-icon className="text-brand-yellow text-lg" icon="solar:clock-circle-linear"></iconify-icon> Available 24/7</span>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-10 h-10 bg-brand-dark rounded-lg flex items-center justify-center">
<iconify-icon className="text-brand-yellow text-2xl" icon="solar:bolt-bold"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xl font-bold tracking-tight text-brand-dark font-space-grotesk leading-none">ESCA TECH</span>
<span className="text-[10px] tracking-widest uppercase font-geist text-brand-blue font-semibold">Electrical Company</span>
</div>
</div>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
<a className="hover:text-brand-blue transition-colors font-geist" href="#">Home</a>
<a className="hover:text-brand-blue transition-colors font-geist" href="#about">About</a>
<a className="hover:text-brand-blue transition-colors font-geist" href="#services">Services</a>
<a className="hover:text-brand-blue transition-colors font-geist" href="#projects">Projects</a>
<a className="hover:text-brand-blue transition-colors font-geist" href="#blog">Blog</a>
</div>
<button className="bg-brand-yellow text-brand-dark px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-yellow-400 transition-colors flex items-center gap-2 font-geist">
                Request Estimate
            </button>
<button className="lg:hidden text-brand-dark">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative bg-brand-dark pt-20 pb-32 overflow-hidden">

<div className="absolute left-0 top-0 bottom-0 w-32 opacity-10 bg-dot-pattern hidden xl:block pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 opacity-10 bg-dot-pattern hidden xl:block pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="reveal-element in-view">
<div className="flex items-center gap-3 mb-6">
<span className="w-8 h-[1px] bg-brand-yellow"></span>
<span className="text-brand-yellow text-xs font-medium tracking-widest uppercase font-geist">Electricians in Ghana</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 font-space-grotesk font-semibold">
                    RELIABLE WIRING.<br/>
<span className="text-gray-500">40-YEAR GUARANTEE.</span>
</h1>
<p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed font-geist">
                    The life-span of our wiring work is 70 years. Licensed by the Energy Commission &amp; ECG. We avoid high bills and electrical fire through precision engineering.
                </p>
<div className="flex flex-wrap items-center gap-4">
<button className="bg-brand-yellow text-brand-dark px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-yellow-400 transition-colors flex items-center gap-2 font-geist">
                        +233 55 247 1234 <div className="bg-white p-1 rounded-full text-black flex"><iconify-icon icon="solar:phone-calling-bold" width="12"></iconify-icon></div>
</button>
<button className="border border-gray-700 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:border-brand-blue hover:text-brand-blue transition-colors font-geist">
                        View Our Projects
                    </button>
</div>
<div className="mt-16 pt-8 border-t border-gray-800 grid sm:grid-cols-2 gap-8">

<div className="flex gap-4 reveal-element delay-100 in-view">
<img alt="Richie A" className="w-12 h-12 rounded-full object-cover grayscale opacity-80 border border-gray-700" src="https://lh3.googleusercontent.com/a/ACg8ocKcGB4up7F0zZ2mXCUL-2sVI7ytnYrwfU6eP7PIogQXTqmR9Q=w80-h80-c-rp-mo-br100"/>
<div>
<div className="flex text-brand-yellow mb-1 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<h4 className="text-white text-sm font-medium mb-1 font-geist">Richie A.</h4>
<p className="text-xs text-gray-500 leading-snug font-geist">"David and his team completely exceeded my expectations... solved a problem 6 others couldn't."</p>
</div>
</div>

<div className="flex gap-4 reveal-element delay-200">
<img alt="Kpodo Simon" className="w-12 h-12 rounded-full object-cover grayscale opacity-80 border border-gray-700" src="https://lh3.googleusercontent.com/a/ACg8ocLGVn1ZY-YAZLe0a4y573jSetWJW49St_cm3LTchQgTMVgYAg=w80-h80-c-rp-mo-br100"/>
<div>
<div className="flex text-brand-yellow mb-1 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<h4 className="text-white text-sm font-medium mb-1 font-geist">Kpodo Simon</h4>
<p className="text-xs text-gray-500 leading-snug font-geist">"Very professional and knowledgeable. Engage this company only when you want quality service."</p>
</div>
</div>
</div>
</div>
<div className="relative reveal-element delay-300">
<div className="absolute inset-0 bg-brand-yellow/10 rounded-3xl transform translate-x-4 translate-y-4"></div>

<div className="relative rounded-3xl overflow-hidden h-[600px] border border-gray-800 bg-gray-900 group">
<img alt="Professional Electrical Work" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent"></div>

<div className="absolute bottom-10 left-6 right-6">
<div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
<div className="flex items-start gap-4">
<div className="bg-brand-yellow p-3 rounded-full text-brand-dark shrink-0">
<iconify-icon className="text-2xl" icon="solar:shield-check-bold"></iconify-icon>
</div>
<div>
<div className="text-white text-lg font-bold font-space-grotesk mb-1">Legally Certified</div>
<p className="text-gray-300 text-sm font-geist leading-snug">
                                        We are fully licensed by the Energy Commission &amp; ECG. All projects meet international safety standards.
                                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-brand-light/50 pt-24 pb-24 border-b border-gray-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end gap-6 reveal-element mb-16 justify-between">
<div>
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-[1px] bg-brand-yellow"></span>
<span className="text-brand-yellow text-xs font-medium tracking-widest uppercase font-geist">Services</span>
</div>
<h2 className="text-4xl text-brand-dark tracking-tight font-space-grotesk font-semibold">OUR EXPERTISE</h2>
</div>
<p className="max-w-md text-gray-500 text-base leading-relaxed font-geist">
                    From domestic wiring to industrial installations, we power your world with precision and safety.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/5 transition-all duration-300 group reveal-element delay-100">
<div className="w-14 h-14 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:home-wifi-bold"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-brand-dark mb-3 font-geist">Domestic Wiring</h3>
<p className="text-gray-500 text-sm leading-relaxed mb-6 font-geist">Complete residential electrical solutions including first fix, second fix, and smart home integrations.</p>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark hover:text-brand-blue transition-colors font-geist" href="#">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/5 transition-all duration-300 group reveal-element delay-100">
<div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:city-bold"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-brand-dark mb-3 font-geist">Commercial Works</h3>
<p className="text-gray-500 text-sm leading-relaxed mb-6 font-geist">Reliable power systems for offices, shops, and commercial complexes designed for high efficiency.</p>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark hover:text-brand-blue transition-colors font-geist" href="#">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/5 transition-all duration-300 group reveal-element delay-100">
<div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:factory-2-bold"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-brand-dark mb-3 font-geist">Industrial Works</h3>
<p className="text-gray-500 text-sm leading-relaxed mb-6 font-geist">Heavy-duty installations, 3-phase systems, and machinery wiring for factories and plants.</p>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark hover:text-brand-blue transition-colors font-geist" href="#">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/5 transition-all duration-300 group reveal-element delay-200">
<div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:clipboard-check-bold"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-brand-dark mb-3 font-geist">Testing &amp; Inspection</h3>
<p className="text-gray-500 text-sm leading-relaxed mb-6 font-geist">Comprehensive audits to identify faults, reduce bills, and ensure compliance with safety standards.</p>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark hover:text-brand-blue transition-colors font-geist" href="#">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/5 transition-all duration-300 group reveal-element delay-200">
<div className="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:snowflake-bold"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-brand-dark mb-3 font-geist">AC Installation</h3>
<p className="text-gray-500 text-sm leading-relaxed mb-6 font-geist">Professional installation and servicing of air conditioning units for optimal cooling.</p>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark hover:text-brand-blue transition-colors font-geist" href="#">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/5 transition-all duration-300 group reveal-element delay-200">
<div className="w-14 h-14 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:shield-warning-bold"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-brand-dark mb-3 font-geist">Electric Fencing</h3>
<p className="text-gray-500 text-sm leading-relaxed mb-6 font-geist">Advanced security solutions with high-voltage electric fencing for perimeter protection.</p>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark hover:text-brand-blue transition-colors font-geist" href="#">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="mt-12 reveal-element text-center md:text-left">
<button className="bg-brand-yellow text-brand-dark px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-yellow-400 transition-colors inline-flex items-center gap-2 font-geist">
                    See All Services <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark text-white relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between mb-16 gap-10 reveal-element">
<div className="max-w-md">
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-[1px] bg-brand-yellow"></span>
<span className="text-brand-yellow text-xs font-medium tracking-widest uppercase font-geist">Why Esca Tech</span>
</div>
<h2 className="text-4xl tracking-tight font-space-grotesk font-semibold">QUALITY BY ALL MEANS</h2>
</div>
<p className="max-w-md text-gray-400 text-base leading-relaxed mt-auto font-geist">
                    We document every conversation in relation to your project to ensure we deliver accordingly. Your safety is our concern.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-brand-yellow/50 transition-colors reveal-element delay-100">
<div className="w-12 h-12 bg-brand-yellow/10 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-brand-yellow text-2xl" icon="solar:clock-circle-bold"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 font-geist">Meeting Deadlines</h3>
<p className="text-gray-400 text-base font-geist">Meeting deadlines of projects is our hallmark. We respect your time.</p>
</div>

<div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-brand-yellow/50 transition-colors reveal-element delay-200">
<div className="w-12 h-12 bg-brand-yellow/10 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-brand-yellow text-2xl" icon="solar:document-add-bold"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 font-geist">Legal Documentation</h3>
<p className="text-gray-400 text-base font-geist">Energy Commission licensed, ECG licensed, and Ghana Institute of Engineers certified.</p>
</div>

<div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-brand-yellow/50 transition-colors reveal-element delay-300">
<div className="w-12 h-12 bg-brand-yellow/10 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-brand-yellow text-2xl" icon="solar:shield-check-bold"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 font-geist">Avoid Electrical Fires</h3>
<p className="text-gray-400 text-base font-geist">Reduce your electricity bills and prevent hazards. We ensure your system is safe and sound.</p>
</div>

<div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-brand-yellow/50 transition-colors reveal-element delay-100">
<div className="w-12 h-12 bg-brand-yellow/10 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-brand-yellow text-2xl" icon="solar:medal-star-bold"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 font-geist">12-Month Guarantee</h3>
<p className="text-gray-400 text-base font-geist">Sub-standard materials are not allowed. We stand by our quality work.</p>
</div>

<div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-brand-yellow/50 transition-colors reveal-element delay-200">
<div className="w-12 h-12 bg-brand-yellow/10 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-brand-yellow text-2xl" icon="solar:headphones-round-sound-bold"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 font-geist">24/7 Support</h3>
<p className="text-gray-400 text-base font-geist">We are just a click away from you. Anytime, any day.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="projects">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 reveal-element">
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-[1px] bg-brand-yellow"></span>
<span className="text-brand-yellow text-xs font-medium tracking-widest uppercase font-geist">Portfolio</span>
</div>
<h2 className="text-4xl text-brand-dark tracking-tight font-space-grotesk font-semibold">ESCA TECH PROJECTS</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[500px]">
<div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://escatechafrica.com/wp-content/uploads/2023/11/x1699509425426-300x225.jpg.pagespeed.ic.2xyeGWDuxu.webp"/>
<div className="absolute inset-0 bg-black/40 flex items-end p-6">
<span className="text-white font-bold font-geist">Ghana Motorway Project</span>
</div>
</div>
<div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://escatechafrica.com/wp-content/uploads/2023/11/IMG-20230125-WA0037-225x300.jpg"/>
</div>
<div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://escatechafrica.com/wp-content/uploads/2023/11/1699509917106-225x300.jpg"/>
</div>
<div className="col-span-2 row-span-1 rounded-2xl overflow-hidden relative group">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://escatechafrica.com/wp-content/uploads/2024/06/xgetlstd-property-photo-300x200.jpg.pagespeed.ic.XdpGJTSG7r.webp"/>
<div className="absolute inset-0 bg-black/40 flex items-end p-6">
<span className="text-white font-bold font-geist">Residential Wiring</span>
</div>
</div>
</div>
</div>
</section>

<div className="bg-brand-yellow h-12 flex items-center overflow-hidden whitespace-nowrap">
<div className="animate-marquee flex gap-8 font-bold text-brand-dark text-lg uppercase tracking-wider opacity-80">
<span className="font-geist">Esca Tech</span> <span>•</span> <span className="font-geist">Fast</span> <span>•</span> <span className="font-geist">Reliable</span> <span>•</span> <span className="font-geist">Safe</span> <span>•</span>
<span className="font-geist">Esca Tech</span> <span>•</span> <span className="font-geist">Fast</span> <span>•</span> <span className="font-geist">Reliable</span> <span>•</span> <span className="font-geist">Safe</span> <span>•</span>
<span className="font-geist">Esca Tech</span> <span>•</span> <span className="font-geist">Fast</span> <span>•</span> <span className="font-geist">Reliable</span> <span>•</span> <span className="font-geist">Safe</span> <span>•</span>
<span className="font-geist">Esca Tech</span> <span>•</span> <span className="font-geist">Fast</span> <span>•</span> <span className="font-geist">Reliable</span> <span>•</span> <span className="font-geist">Safe</span> <span>•</span>
<span className="font-geist">Esca Tech</span> <span>•</span> <span className="font-geist">Fast</span> <span>•</span> <span className="font-geist">Reliable</span> <span>•</span> <span className="font-geist">Safe</span> <span>•</span>
</div>
</div>

<section className="py-24 bg-brand-gray relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal-element">
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-[1px] bg-brand-yellow"></span>
<span className="text-brand-yellow text-xs font-medium tracking-widest uppercase font-geist">Google Reviews</span>
</div>
<h2 className="text-4xl text-white tracking-tight font-space-grotesk font-semibold">CLIENT FEEDBACK</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-[#222] p-8 rounded-2xl border border-white/5 reveal-element delay-100 flex flex-col justify-between">
<div>
<div className="flex text-brand-yellow mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-400 text-sm leading-relaxed mb-6 font-geist">"I had a very strange electrical issue that had been ongoing for the past year... I'd already been through 6 other electricians. David and his team completely exceeded my expectations!"</p>
</div>
<div className="flex items-center gap-3 bg-white text-black p-3 rounded-xl max-w-[200px]">
<img className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/a/ACg8ocKcGB4up7F0zZ2mXCUL-2sVI7ytnYrwfU6eP7PIogQXTqmR9Q=w40-h40-c-rp-mo-br100"/>
<div>
<div className="font-semibold text-sm font-geist">Richie A.</div>
<div className="text-xs text-gray-500 font-geist">Google Review</div>
</div>
</div>
</div>

<div className="bg-[#222] p-8 rounded-2xl border border-white/5 reveal-element delay-200 flex flex-col justify-between">
<div>
<div className="flex text-brand-yellow mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-400 text-sm leading-relaxed mb-6 font-geist">"I will recommend this company anytime any day. 1. They arrived on time 2. Very professional and knowledgeable 3. Affordable. Note: engage this company only when you want quality service."</p>
</div>
<div className="flex items-center gap-3 bg-white text-black p-3 rounded-xl max-w-[200px]">
<img className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/a/ACg8ocLGVn1ZY-YAZLe0a4y573jSetWJW49St_cm3LTchQgTMVgYAg=w40-h40-c-rp-mo-br100"/>
<div>
<div className="font-semibold text-sm font-geist">Kpodo Simon</div>
<div className="text-xs text-gray-500 font-geist">Google Review</div>
</div>
</div>
</div>

<div className="bg-[#222] p-8 rounded-2xl border border-white/5 reveal-element delay-300 flex flex-col justify-between">
<div>
<div className="flex text-brand-yellow mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-400 text-sm leading-relaxed mb-6 font-geist">"There are two electrical engineers in Ghana. ESCA TECH ELECTRICAL and the rest. I advise you to go for the best. ESCA"</p>
</div>
<div className="flex items-center gap-3 bg-white text-black p-3 rounded-xl max-w-[200px]">
<img className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/a/ACg8ocKtakhA87lwH4VZzBe_Tucwy8bGp5motmVxq7RDQqVISFrBmw=w40-h40-c-rp-mo-br100"/>
<div>
<div className="font-semibold text-sm font-geist">Frederick Odai</div>
<div className="text-xs text-gray-500 font-geist">Google Review</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark border-b border-gray-800">
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-8 reveal-element">
<div className="max-w-2xl">
<h2 className="text-4xl lg:text-5xl text-white tracking-tight font-space-grotesk font-semibold mb-4">
                    TALK TO US IN 3 SECONDS
                </h2>
<p className="text-gray-400">Fill our quick form or call us directly. We are ready to help.</p>
</div>
<button className="bg-brand-blue text-white px-10 py-4 rounded-full text-base font-semibold hover:bg-blue-600 transition-colors flex items-center gap-3 font-geist">
                Contact Us Now <div className="bg-white text-brand-blue p-1 rounded-full"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></div>
</button>
</div>
</section>

<footer className="bg-brand-dark pt-20 pb-10 border-t border-gray-900">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-white text-2xl" icon="solar:bolt-bold"></iconify-icon>
<span className="text-lg font-semibold text-white tracking-tight font-geist">ESCA TECH</span>
</div>
<p className="text-gray-500 text-sm mb-6 font-geist">Two [2] years Guarantee on house wirings. Your reliable partner in Ghana.</p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-brand-yellow transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-brand-yellow transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-6 font-geist">QUICK LINKS</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-brand-yellow transition-colors font-geist" href="#">About Us</a></li>
<li><a className="hover:text-brand-yellow transition-colors font-geist" href="#">Domestic Works</a></li>
<li><a className="hover:text-brand-yellow transition-colors font-geist" href="#">Commercial Works</a></li>
<li><a className="hover:text-brand-yellow transition-colors font-geist" href="#">Industrial Works</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6 font-geist">SERVICES</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-brand-yellow transition-colors font-geist" href="#">Air Conditioner Installation</a></li>
<li><a className="hover:text-brand-yellow transition-colors font-geist" href="#">Testing &amp; Inspection</a></li>
<li><a className="hover:text-brand-yellow transition-colors font-geist" href="#">Electrical Shop List</a></li>
<li><a className="hover:text-brand-yellow transition-colors font-geist" href="#">Apprentice Report</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6 font-geist">CONTACT</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li className="flex items-start gap-3 font-geist">
<iconify-icon className="mt-1 text-brand-yellow" icon="solar:map-point-linear"></iconify-icon>
                            Greater Accra, Ghana
                        </li>
<li className="flex items-center gap-3 font-geist">
<iconify-icon className="text-brand-yellow" icon="solar:phone-calling-linear"></iconify-icon>
                            +233 55 247 1234
                        </li>
<li className="flex items-center gap-3 font-geist">
<iconify-icon className="text-brand-yellow" icon="solar:letter-linear"></iconify-icon>
                            escatechafrica@gmail.com
                        </li>
<li className="flex items-center gap-3 font-geist">
<iconify-icon className="text-brand-yellow" icon="solar:clock-circle-linear"></iconify-icon>
                            Mon-Sun: 09:00 - 17:00
                        </li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
<p className="font-geist">© 2025 Esca Tech Electrical Company</p>
<div className="flex items-center gap-1">
<span className="font-geist">Based in <span className="text-white font-geist">Ghana</span></span>
</div>
</div>
</div>
</footer>


    </>
  );
}
