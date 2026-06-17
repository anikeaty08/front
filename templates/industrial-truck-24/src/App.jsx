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
      

<div className="bg-slate-900 text-slate-300 text-xs py-2 border-b border-slate-800">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5"><span className="iconify" data-icon="lucide:map-pin" data-width="14"></span> Industrial Park, Melbourne, VIC</span>
<span className="hidden sm:flex items-center gap-1.5"><span className="iconify" data-icon="lucide:clock" data-width="14"></span> Mon - Fri: 7:00 AM - 5:00 PM</span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-white transition-colors" href="#">News</a>
<a className="hover:text-white transition-colors" href="#">Careers</a>
<a className="hover:text-white transition-colors" href="#">Portal Login</a>
</div>
</div>
</div>

<header className="bg-white sticky top-0 z-50 border-b border-slate-200 shadow-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-center h-20">

<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 bg-slate-900 rounded flex items-center justify-center text-white font-bold text-xl tracking-tighter group-hover:bg-orange-600 transition-colors">
                        AX
                    </div>
<span className="text-xl font-semibold tracking-tight text-slate-900">AUSTruck<span className="text-orange-600">X</span></span>
</a>

<nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-orange-600 transition-colors" href="#">About Us</a>

<div className="relative group h-20 flex items-center cursor-pointer">
<span className="flex items-center gap-1 hover:text-orange-600 transition-colors">
                            Bodies <span className="iconify" data-icon="lucide:chevron-down" data-width="14"></span>
</span>
<div className="absolute top-full left-0 w-56 bg-white border border-slate-100 shadow-xl rounded-b-lg hidden group-hover:block pt-2 pb-2">
<a className="block px-4 py-2 hover:bg-slate-50 hover:text-orange-600" href="#">FRP Vans</a>
<a className="block px-4 py-2 hover:bg-slate-50 hover:text-orange-600" href="#">Curtain Siders</a>
<a className="block px-4 py-2 hover:bg-slate-50 hover:text-orange-600" href="#">Tray Bodies</a>
<a className="block px-4 py-2 hover:bg-slate-50 hover:text-orange-600" href="#">Refrigerated</a>
</div>
</div>

<div className="relative group h-20 flex items-center cursor-pointer">
<span className="flex items-center gap-1 hover:text-orange-600 transition-colors">
                            Trailers <span className="iconify" data-icon="lucide:chevron-down" data-width="14"></span>
</span>
<div className="absolute top-full left-0 w-56 bg-white border border-slate-100 shadow-xl rounded-b-lg hidden group-hover:block pt-2 pb-2">
<a className="block px-4 py-2 hover:bg-slate-50 hover:text-orange-600" href="#">Dog Trailers</a>
<a className="block px-4 py-2 hover:bg-slate-50 hover:text-orange-600" href="#">Semi Trailers</a>
<a className="block px-4 py-2 hover:bg-slate-50 hover:text-orange-600" href="#">Custom Builds</a>
</div>
</div>
<a className="hover:text-orange-600 transition-colors" href="#">Parts &amp; Repairs</a>
<a className="hover:text-orange-600 transition-colors" href="#">Warranty</a>
</nav>

<div className="hidden md:flex flex-col items-end">
<span className="text-xs text-slate-400 font-medium uppercase tracking-wide">Sales &amp; Support</span>
<a className="text-sm font-semibold text-slate-900 hover:text-orange-600 transition-colors flex items-center gap-2" href="tel:1300000000">
<span className="iconify text-orange-600" data-icon="lucide:phone" data-width="14"></span>
                        1300 878 259
                    </a>
</div>

<button className="lg:hidden text-slate-900">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</header>

<section className="relative bg-slate-900 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Industrial Manufacturing" className="w-full h-full object-cover opacity-30" src="https://images.unsplash.com/photo-1565034946487-077786996e27?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-48 flex flex-col justify-center h-full">
<div className="max-w-2xl">
<div className="flex items-center gap-2 mb-6">
<span className="px-3 py-1 bg-orange-600/10 border border-orange-600/20 text-orange-500 rounded-full text-xs font-semibold tracking-wide uppercase">Industrial Grade Manufacturing</span>
</div>
<h1 className="text-4xl lg:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
                    Engineered Excellence <br/>
<span className="text-slate-400">in Every Mile.</span>
</h1>
<p className="text-lg text-slate-300 mb-8 max-w-xl font-light leading-relaxed">
                    Setting the standard in heavy-duty truck bodies and custom trailers. Precision engineering for the Australian transport logistics sector.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-3 bg-orange-600 text-white font-medium rounded hover:bg-orange-700 transition-all shadow-lg shadow-orange-900/20" href="#products">
                        View Product Range
                    </a>
<a className="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-white font-medium rounded border border-white/10 hover:bg-white/20 backdrop-blur-sm transition-all" href="#contact">
                        Request a Quote
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full border-t border-white/10 bg-slate-900/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<p className="text-3xl font-semibold text-white tracking-tight">25+</p>
<p className="text-xs text-slate-400 uppercase tracking-wider">Years Experience</p>
</div>
<div>
<p className="text-3xl font-semibold text-white tracking-tight">10k+</p>
<p className="text-xs text-slate-400 uppercase tracking-wider">Units Built</p>
</div>
<div>
<p className="text-3xl font-semibold text-white tracking-tight">100%</p>
<p className="text-xs text-slate-400 uppercase tracking-wider">Australian Made</p>
</div>
<div>
<p className="text-3xl font-semibold text-white tracking-tight">ISO</p>
<p className="text-xs text-slate-400 uppercase tracking-wider">Certified Quality</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

<div className="flex flex-col items-start space-y-4 group">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
<span className="iconify" data-icon="lucide:shield-check" data-width="24"></span>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Uncompromised Safety</h3>
<p className="text-sm text-slate-500 leading-relaxed">Compliance with all Australian Design Rules ensuring maximum safety on the road.</p>
</div>
</div>

<div className="flex flex-col items-start space-y-4 group">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
<span className="iconify" data-icon="lucide:hammer" data-width="24"></span>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Engineering Excellence</h3>
<p className="text-sm text-slate-500 leading-relaxed">Advanced CAD design and structural analysis for durability in harsh environments.</p>
</div>
</div>

<div className="flex flex-col items-start space-y-4 group">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
<span className="iconify" data-icon="lucide:award" data-width="24"></span>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Premium Quality</h3>
<p className="text-sm text-slate-500 leading-relaxed">Sourced from high-grade steel and composite materials for longevity.</p>
</div>
</div>

<div className="flex flex-col items-start space-y-4 group">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
<span className="iconify" data-icon="lucide:scale" data-width="24"></span>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Payload Advantage</h3>
<p className="text-sm text-slate-500 leading-relaxed">Optimized tare weights to maximize your haulage capacity and profitability.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Our Product Range</h2>
<p className="text-slate-500 leading-relaxed">
                        From heavy-duty rigid bodies to custom-built trailers, our manufacturing capabilities cover the entire spectrum of transport logistics needs.
                    </p>
</div>
<a className="text-orange-600 font-medium hover:text-orange-700 flex items-center gap-1" href="#">
                    View Full Catalogue <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
<div className="h-56 bg-slate-100 relative overflow-hidden">
<img alt="FRP Van" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="bg-white/90 backdrop-blur text-slate-900 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">Rigid Body</span>
</div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-slate-900 mb-2">FRP Vans</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">High-strength Fiberglass Reinforced Plywood bodies designed for dry freight and general logistics.</p>
<div className="flex items-center text-orange-600 text-sm font-medium">
                            Explore Specs <span className="iconify ml-1 group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span>
</div>
</div>
</div>

<div className="group bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
<div className="h-56 bg-slate-100 relative overflow-hidden">
<img alt="Tray Series" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="bg-white/90 backdrop-blur text-slate-900 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">Heavy Duty</span>
</div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Tray Series</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Steel and alloy tray bodies built tough for construction, mining, and agricultural applications.</p>
<div className="flex items-center text-orange-600 text-sm font-medium">
                            Explore Specs <span className="iconify ml-1 group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span>
</div>
</div>
</div>

<div className="group bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
<div className="h-56 bg-slate-100 relative overflow-hidden">
<img alt="Slider Series" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Slider Series</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Innovative sliding curtain systems offering rapid access and weatherproof security.</p>
<div className="flex items-center text-orange-600 text-sm font-medium">
                            Explore Specs <span className="iconify ml-1 group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span>
</div>
</div>
</div>

<div className="group bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
<div className="h-56 bg-slate-100 relative overflow-hidden">
<img alt="Curtain Siders" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Curtain Siders</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Maximizing load efficiency with versatile side-loading capabilities and tensioning systems.</p>
<div className="flex items-center text-orange-600 text-sm font-medium">
                            Explore Specs <span className="iconify ml-1 group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span>
</div>
</div>
</div>

<div className="group bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
<div className="h-56 bg-slate-100 relative overflow-hidden">
<img alt="Probond Vans" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 left-4">
<span className="bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">Premium</span>
</div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Probond Vans</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Lightweight composite panel technology delivering superior thermal efficiency and aesthetics.</p>
<div className="flex items-center text-orange-600 text-sm font-medium">
                            Explore Specs <span className="iconify ml-1 group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span>
</div>
</div>
</div>

<div className="group bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
<div className="h-56 bg-slate-100 relative overflow-hidden">
<img alt="Trailer Series" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1616432043562-3671ea2e5242?q=80&amp;w=2788&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="bg-white/90 backdrop-blur text-slate-900 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">Custom Build</span>
</div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Trailer Series</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Dog trailers, semi-trailers, and pig trailers engineered for maximum payload and stability.</p>
<div className="flex items-center text-orange-600 text-sm font-medium">
                            Explore Specs <span className="iconify ml-1 group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">
                        Redefining Truck Body &amp; <br/>Trailer Manufacturing
                    </h2>
<p className="text-slate-600 mb-6 leading-relaxed">
                        At AUSTruckX, we don't just assemble; we engineer. With over two decades of operational excellence, our state-of-the-art facility in Melbourne combines traditional craftsmanship with modern robotics to deliver fleets that stand the test of time.
                    </p>
<p className="text-slate-600 mb-8 leading-relaxed">
                        Our commitment to innovation ensures that every chassis, every weld, and every panel is scrutinized for quality. We understand that in the logistics industry, downtime is not an option. That's why we build for reliability, strength, and performance.
                    </p>
<div className="flex flex-col space-y-4">
<div className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 text-orange-600">
<span className="iconify" data-icon="lucide:check" data-width="14"></span>
</div>
<div>
<h4 className="font-medium text-slate-900">Custom Engineering</h4>
<p className="text-sm text-slate-500">Tailored solutions for unique transport requirements.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 text-orange-600">
<span className="iconify" data-icon="lucide:check" data-width="14"></span>
</div>
<div>
<h4 className="font-medium text-slate-900">National Support Network</h4>
<p className="text-sm text-slate-500">Service partners across all major states and territories.</p>
</div>
</div>
</div>
<div className="mt-10">
<a className="text-slate-900 font-medium border-b border-slate-300 pb-1 hover:border-orange-600 hover:text-orange-600 transition-all" href="#">Read Our Story</a>
</div>
</div>
<div className="order-1 lg:order-2 relative">
<div className="relative rounded-2xl overflow-hidden shadow-2xl">
<img alt="Welding Factory" className="w-full object-cover" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/10"></div>
</div>

<div className="absolute -bottom-6 -left-6 w-24 h-24 bg-orange-600 rounded-lg -z-10"></div>
<div className="absolute -top-6 -right-6 w-64 h-64 bg-slate-100 rounded-full -z-10 opacity-50"></div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-center px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Ready to upgrade your fleet?</h2>
<p className="text-slate-400 mb-10 text-lg">Contact our engineering team to discuss your specific requirements and get a detailed quote.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center px-8 py-3 bg-orange-600 text-white font-medium rounded hover:bg-orange-700 transition-all" href="#contact">
                    Contact Sales
                </a>
<a className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-white border border-slate-700 font-medium rounded hover:bg-slate-800 transition-all" href="#">
                    Download Brochure
                </a>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div>
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center text-white font-bold text-sm tracking-tighter">
                            AX
                        </div>
<span className="text-lg font-semibold tracking-tight text-white">AUSTruck<span className="text-orange-600">X</span></span>
</a>
<p className="mb-6 text-slate-500 leading-relaxed">
                        Engineered Excellence in Every Mile. Australia's trusted partner for premium truck bodies and trailers.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded bg-slate-900 flex items-center justify-center hover:bg-slate-800 transition-colors text-white" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="18"></span>
</a>
<a className="w-10 h-10 rounded bg-slate-900 flex items-center justify-center hover:bg-slate-800 transition-colors text-white" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="18"></span>
</a>
<a className="w-10 h-10 rounded bg-slate-900 flex items-center justify-center hover:bg-slate-800 transition-colors text-white" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="18"></span>
</a>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-6">Products</h4>
<ul className="space-y-3">
<li><a className="hover:text-orange-500 transition-colors" href="#">FRP Vans</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Curtain Siders</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Tray Bodies</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Refrigerated</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Custom Trailers</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Company</h4>
<ul className="space-y-3">
<li><a className="hover:text-orange-500 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Our Facility</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">News &amp; Insights</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Contact</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="iconify mt-1 text-slate-500" data-icon="lucide:map-pin" data-width="16"></span>
<span>123 Industrial Avenue,<br/>Melbourne VIC 3000</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-slate-500" data-icon="lucide:phone" data-width="16"></span>
<a className="hover:text-white transition-colors" href="tel:1300878259">1300 878 259</a>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-slate-500" data-icon="lucide:mail" data-width="16"></span>
<a className="hover:text-white transition-colors" href="mailto:sales@austruckx.com.au">sales@austruckx.com.au</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
<div>© 2023 AUSTruckX Manufacturing Pty Ltd. All rights reserved.</div>
<div className="flex gap-6">
<a className="hover:text-slate-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-400 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-slate-400 transition-colors" href="#">Warranty Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
