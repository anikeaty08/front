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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 bg-emerald-900 rounded-lg flex items-center justify-center text-white transition-transform group-hover:scale-105">
<i data-lucide="mountain-snow" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-emerald-950 leading-none">UPPERLEFT</span>
<span className="text-[10px] uppercase tracking-widest text-emerald-700/80 font-medium">Logistics Inc</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-emerald-800 transition-colors" href="#about">About</a>
<a className="hover:text-emerald-800 transition-colors" href="#careers">Careers</a>
<a className="hover:text-emerald-800 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 bg-emerald-900 hover:bg-emerald-800 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5" href="#apply">
<span>Apply Now</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>

<button className="md:hidden text-slate-700">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 hero-gradient">
<div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 backdrop-blur-sm text-emerald-100 text-xs font-medium tracking-wide uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                    Hiring Professional Drivers
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
                    Build Your Career <br/>
<span className="text-emerald-400">With ULL.</span>
</h1>
<p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                    FedEx Ground Contract Service Provider based in Spokane Valley, WA. We offer competitive pay, excellent benefits, and the respect you deserve.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-medium px-8 py-4 rounded-lg transition-all text-sm shadow-lg shadow-orange-900/20" href="#apply">
                        Apply Now
                    </a>
<a className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 text-white font-medium px-8 py-4 rounded-lg transition-all text-sm" href="#about">
                        Learn More
                    </a>
</div>
</div>

<div className="hidden lg:block">
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-md ml-auto">
<div className="flex items-start gap-4 mb-6">
<div className="p-3 bg-emerald-500/20 rounded-lg text-emerald-400">
<i className="w-6 h-6" data-lucide="truck"></i>
</div>
<div>
<h3 className="text-white font-medium text-lg">Pacific Northwest Operations</h3>
<p className="text-slate-400 text-sm mt-1">Operating out of Spokane Valley, WA with routes across the region.</p>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 bg-white/5 rounded-xl border border-white/5">
<div className="text-2xl font-semibold text-white tracking-tight">15+</div>
<div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Years Business</div>
</div>
<div className="p-4 bg-white/5 rounded-xl border border-white/5">
<div className="text-2xl font-semibold text-white tracking-tight">99.9%</div>
<div className="text-xs text-slate-400 uppercase tracking-wider mt-1">On-Time</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
<i className="w-6 h-6" data-lucide="chevron-down"></i>
</div>
</section>

<div className="bg-white border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left border-r border-slate-100 last:border-0 md:pr-8">
<p className="text-4xl font-semibold tracking-tight text-emerald-950">15+</p>
<p className="text-sm text-slate-500 mt-2 font-medium">Years in Business</p>
</div>
<div className="text-center md:text-left border-r border-slate-100 last:border-0 md:pr-8">
<p className="text-4xl font-semibold tracking-tight text-emerald-950">40+</p>
<p className="text-sm text-slate-500 mt-2 font-medium">Professional Drivers</p>
</div>
<div className="text-center md:text-left border-r border-slate-100 last:border-0 md:pr-8">
<p className="text-4xl font-semibold tracking-tight text-emerald-950">99.9%</p>
<p className="text-sm text-slate-500 mt-2 font-medium">On-Time Delivery</p>
</div>
<div className="text-center md:text-left">
<p className="text-4xl font-semibold tracking-tight text-emerald-950">24/7</p>
<p className="text-sm text-slate-500 mt-2 font-medium">Support Available</p>
</div>
</div>
</div>
</div>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative group">
<div className="absolute inset-0 bg-emerald-900/5 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-2"></div>
<img alt="FedEx Truck PNW" className="relative rounded-2xl shadow-xl w-full object-cover h-[500px] grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur p-6 rounded-xl border border-white shadow-lg">
<div className="flex items-center gap-3 mb-2">
<i className="w-5 h-5 text-orange-600" data-lucide="map-pin"></i>
<span className="text-xs font-semibold uppercase tracking-wider text-emerald-950">Based in Spokane Valley, WA</span>
</div>
<p className="text-sm text-slate-600">Serving the greater Pacific Northwest region with pride and precision.</p>
</div>
</div>
<div className="space-y-8">
<div>
<span className="text-orange-600 font-semibold tracking-tight text-sm uppercase">About Us</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mt-3 mb-6">About Upper Left <br/>Logistics Inc.</h2>
<div className="w-20 h-1 bg-emerald-900 rounded-full"></div>
</div>
<p className="text-lg text-slate-600 leading-relaxed">
                        ULL is a growing motor carrier providing world class service to our customers in the Pacific Northwest. We partner with FedEx Ground as a Contract Service Provider, offering our driving team current equipment, exceptional benefits, and long-term job security.
                    </p>
<p className="text-lg text-slate-600 leading-relaxed">
                        From linehaul to P&amp;D operations, ULL meets all of your needs. Our partnership with FedEx Ground means stable work, predictable schedules, and the backing of one of the world's most trusted logistics companies.
                    </p>
<div className="grid sm:grid-cols-2 gap-6 pt-4">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<div>
<h4 className="font-medium text-slate-900">Exclusive Partner</h4>
<p className="text-sm text-slate-500 mt-1">FedEx Ground Contract Service Provider</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0">
<i className="w-5 h-5" data-lucide="route"></i>
</div>
<div>
<h4 className="font-medium text-slate-900">Consistent Routes</h4>
<p className="text-sm text-slate-500 mt-1">Linehaul Operations &amp; P&amp;D Services</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-orange-600 font-semibold tracking-tight text-sm uppercase">What Drives Us</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mt-3">Our Core Values</h2>
<p className="text-slate-600 mt-4 text-lg">We take personal ownership and responsibility in everything we do.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-700 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="hard-hat"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Safety</h3>
<p className="text-slate-500 leading-relaxed">Your safety and the safety of others is our top priority. We maintain rigorous standards for equipment and operations.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="heart-handshake"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Honesty</h3>
<p className="text-slate-500 leading-relaxed">We build trust through transparent communication. Integrity is the foundation of our relationships with drivers.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-700 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="award"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Excellence</h3>
<p className="text-slate-500 leading-relaxed">We strive for the highest standards in everything we do. From on-time delivery to equipment maintenance.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-700 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="lightbulb"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Creativity</h3>
<p className="text-slate-500 leading-relaxed">Innovative solutions for complex logistics challenges. We adapt to the changing needs of the industry.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-700 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="clock"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Reliability</h3>
<p className="text-slate-500 leading-relaxed">Dependable service you can count on, every time. We are committed to consistency.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-emerald-950 relative overflow-hidden">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-900 to-transparent opacity-50"></div>
<div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-800 rounded-full blur-3xl opacity-30"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-8 leading-tight">
                "We've built ULL on the foundation of treating our drivers with respect and providing them the support they need to succeed."
            </h2>
<div className="flex flex-col items-center gap-4">
<div className="w-16 h-16 rounded-full bg-slate-200 border-2 border-emerald-500 flex items-center justify-center text-xl font-bold text-slate-700">
                    JP
                </div>
<div>
<p className="text-white font-medium text-lg">Jennifer Parish</p>
<p className="text-emerald-400 text-sm tracking-wide uppercase">Owner, ULL Companies</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<span className="text-orange-600 font-semibold tracking-tight text-sm uppercase">Our Equipment</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mt-3">Top of the Line Fleet</h2>
<p className="text-slate-600 mt-4 max-w-xl">We provide our drivers with top of line equipment to ensure safety, comfort, and efficiency. Meticulously maintained and ELD equipped.</p>
</div>
<div className="flex items-center gap-2 text-sm font-medium text-slate-500 bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
<i className="w-4 h-4" data-lucide="wrench"></i>
<span>24/7 Road Service Support</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="group">
<div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden mb-4 border border-slate-200 relative">
<img alt="Freightliner Cascadia" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1604351888999-9ea0a2851e61?q=80&amp;w=2572&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur text-white text-xs px-2 py-1 rounded">Fleet Standard</div>
</div>
<h3 className="text-lg font-semibold text-slate-900">2021 Freightliner Cascadia</h3>
<p className="text-sm text-slate-500 mt-1">Modern safety features &amp; comfort</p>
</div>
<div className="group">
<div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden mb-4 border border-slate-200 relative">
<img alt="Truck Interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80&amp;w=2672&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-semibold text-slate-900">2020 Freightliner Cascadia</h3>
<p className="text-sm text-slate-500 mt-1">Automatic transmission &amp; ergonomic interior</p>
</div>
<div className="group">
<div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden mb-4 border border-slate-200 relative">
<img alt="Truck on Road" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1506306488026-b6aa727202e3?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-semibold text-slate-900">2019 Freightliner Cascadia</h3>
<p className="text-sm text-slate-500 mt-1">Proven reliability &amp; performance</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-orange-600 font-semibold tracking-tight text-sm uppercase">Driver Testimonials</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mt-3">What Our Team Says</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex gap-1 text-orange-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 italic mb-6">"I'm fortunate to work for a company where integrity, excellence, and safety are key values. Safety is what gets me home to my family every night."</p>
<div className="flex items-center justify-between border-t border-slate-100 pt-4">
<div>
<p className="font-semibold text-slate-900 text-sm">Mike Thompson</p>
<p className="text-xs text-slate-500">Spokane, WA</p>
</div>
<span className="text-xs font-medium bg-emerald-50 text-emerald-700 px-2 py-1 rounded">3 YEARS</span>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex gap-1 text-orange-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 italic mb-6">"I have never worked with a more reliable company. We are all treated equally and respected. Great career path with ULL."</p>
<div className="flex items-center justify-between border-t border-slate-100 pt-4">
<div>
<p className="font-semibold text-slate-900 text-sm">Sarah Martinez</p>
<p className="text-xs text-slate-500">Spokane Valley, WA</p>
</div>
<span className="text-xs font-medium bg-emerald-50 text-emerald-700 px-2 py-1 rounded">2 YEARS</span>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex gap-1 text-orange-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 italic mb-6">"ULL doesn't diminish one role from another. Customer service is strong and reliable. Thanks ULL for treating us right."</p>
<div className="flex items-center justify-between border-t border-slate-100 pt-4">
<div>
<p className="font-semibold text-slate-900 text-sm">Maria Rodriguez</p>
<p className="text-xs text-slate-500">Spokane, WA</p>
</div>
<span className="text-xs font-medium bg-emerald-50 text-emerald-700 px-2 py-1 rounded">2.5 YEARS</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="careers">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
<div className="grid lg:grid-cols-2">
<div className="p-12 lg:p-16">
<span className="text-emerald-400 font-semibold tracking-tight text-sm uppercase">Employment</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mt-3 mb-6">Join the ULL Team</h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            Our drivers are the backbone of our success. At ULL, we don't just offer jobs—we offer careers. Join a team where your dedication is appreciated.
                        </p>
<div className="space-y-6 mb-12">
<div className="flex gap-4">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-emerald-400 shrink-0 border border-white/10">
<i className="w-6 h-6" data-lucide="banknote"></i>
</div>
<div>
<h4 className="text-white font-medium text-lg">Competitive Wages</h4>
<p className="text-slate-400 text-sm">Weekly pay, consistent routes, and industry-leading compensation.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-emerald-400 shrink-0 border border-white/10">
<i className="w-6 h-6" data-lucide="stethoscope"></i>
</div>
<div>
<h4 className="text-white font-medium text-lg">Medical Coverage</h4>
<p className="text-slate-400 text-sm">75% employer paid benefits package for you and your family.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-emerald-400 shrink-0 border border-white/10">
<i className="w-6 h-6" data-lucide="palmtree"></i>
</div>
<div>
<h4 className="text-white font-medium text-lg">Work-Life Balance</h4>
<p className="text-slate-400 text-sm">Generous PTO and 7 Paid Holidays per year.</p>
</div>
</div>
</div>
<div id="apply">
<h3 className="text-white font-semibold text-xl mb-4">Requirements</h3>
<ul className="grid sm:grid-cols-2 gap-3 mb-8">
<li className="flex items-center gap-2 text-slate-300 text-sm">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i>
                                    2+ Years Experience
                                </li>
<li className="flex items-center gap-2 text-slate-300 text-sm">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i>
                                    Class A CDL
                                </li>
<li className="flex items-center gap-2 text-slate-300 text-sm">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i>
                                    Medically Qualified
                                </li>
<li className="flex items-center gap-2 text-slate-300 text-sm">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i>
                                    TWIC Card
                                </li>
<li className="flex items-center gap-2 text-slate-300 text-sm">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i>
                                    21+ Years Old
                                </li>
</ul>
<div className="flex flex-col sm:flex-row gap-4">
<a className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-medium px-6 py-3 rounded-lg transition-colors" href="tel:5099510822">
<i className="w-4 h-4" data-lucide="phone"></i>
                                    (509) 951-0822
                                </a>
<button className="flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-medium px-6 py-3 rounded-lg transition-colors">
                                    Apply Online
                                </button>
</div>
</div>
</div>
<div className="relative min-h-[400px] lg:min-h-full">
<img alt="Driver on road" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&amp;w=2675&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent lg:bg-gradient-to-l"></div>
<div className="absolute bottom-12 left-12 right-12">
<blockquote className="text-white font-medium text-lg leading-relaxed">
                                "I spend just as much time in the truck as I do out enjoying family, friends, and vacations. Great money and great benefits with ULL."
                            </blockquote>
<div className="mt-4 text-slate-300">
<span className="block font-semibold text-white">James Wilson</span>
<span className="text-sm">Driver, 4 Years</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<span className="text-orange-600 font-semibold tracking-tight text-sm uppercase">Contact Us</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mt-3 mb-6">Get In Touch</h2>
<p className="text-slate-600 text-lg mb-8">Fill out the form and our team will get back to you within 24 hours.</p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
<i className="w-5 h-5" data-lucide="phone"></i>
</div>
<div>
<h4 className="font-semibold text-slate-900">Phone</h4>
<a className="text-slate-600 hover:text-emerald-700 transition-colors" href="tel:5099510822">509-951-0822</a>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
<i className="w-5 h-5" data-lucide="mail"></i>
</div>
<div>
<h4 className="font-semibold text-slate-900">Email</h4>
<a className="text-slate-600 hover:text-emerald-700 transition-colors" href="mailto:upperleftlogistics@gmail.com">upperleftlogistics@gmail.com</a>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="font-semibold text-slate-900">Headquarters</h4>
<p className="text-slate-600">3020 N Sullivan Suite A<br/>Spokane Valley, WA 99205</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<div>
<h4 className="font-semibold text-slate-900">Executives</h4>
<p className="text-slate-600">Jennifer Parish - Owner</p>
<p className="text-slate-600">Lali - Dispatch/Operations Manager</p>
</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-900" htmlFor="name">Full Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-900" htmlFor="phone">Phone</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all" id="phone" placeholder="(509) 000-0000" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-900" htmlFor="email">Email</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all" id="email" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-900" htmlFor="message">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all resize-none" id="message" placeholder="Tell us how we can help..." rows="4"></textarea>
</div>
<button className="w-full bg-emerald-900 hover:bg-emerald-800 text-white font-medium py-3 rounded-lg transition-all shadow-md hover:shadow-lg" type="button">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-emerald-900 rounded-lg flex items-center justify-center text-white">
<i data-lucide="mountain-snow" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-white leading-none">UPPERLEFT</span>
<span className="text-[10px] uppercase tracking-widest text-emerald-500 font-medium">Logistics Inc</span>
</div>
</div>
<div className="flex gap-6 text-sm">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#careers">Careers</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2025 Upper Left Logistics Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<i className="w-3 h-3" data-lucide="phone"></i>
<span>(509) 951-0822</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
