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
      

<header className="z-50 font-sans bg-white w-full relative shadow-sm">

<div className="bg-gray-950 text-white text-xs py-2">
<div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center">
<div className="flex gap-4">
<span className="">Call Us: 1-800-507-9651</span>
<span className="hidden sm:inline">support@hydraulicsupply.com</span>
</div>
<div className="flex gap-6">
<a className="hover:text-gray-300" href="#">Contact Us</a>
<div className="border-l border-gray-700 pl-6 ml-2">
<a className="hover:text-gray-300 font-semibold" href="#">Sign In / Register</a>
</div>
</div>
</div>
</div>

<div className="flex flex-wrap md:flex-nowrap md:flex-row max-w-[1240px] mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 gap-x-6 gap-y-6 items-center justify-between">

<a className="flex-shrink-0 flex items-center group order-1" href="#">
<img alt="Hydraulic Supply Company" className="h-10 md:h-12 w-auto object-contain" src="https://www.hydraulic-supply.com/media/logo/stores/1/hsc-logo-new.png"/>
</a>

<div className="flex-grow w-full md:w-auto relative right-1 order-3 md:order-2">
<div className="flex w-[90%] mx-auto">
<input className="w-full border border-gray-300 h-12 px-5 text-base focus:outline-none focus:border-hsc-blue transition-colors placeholder:text-gray-400" placeholder="Search by keyword, part number or category..." type="text"/>
<button className="hover:bg-hsc-blue-dark transition-colors flex text-white bg-blue-400 h-12 pr-8 pl-8 items-center justify-center">
<iconify-icon className="" height="24" icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="flex flex-shrink-0 gap-x-6 gap-y-6 items-center order-2 md:order-3">
<a className="flex flex-col items-center hover:text-hsc-blue transition-colors group text-gray-600 relative right-[35px]" href="#">
<div className="relative space-y-1">
<iconify-icon className="group-hover:scale-110 transition-transform" height="30" icon="solar:cart-large-linear" strokeWidth="1.5" style={{color: 'rgb(15, 41, 89)'}} width="30"></iconify-icon>
<span className="absolute -top-2 -right-2 bg-hsc-blue text-white text-[10px] w-4 h-4 flex items-center justify-center font-bold">0</span>
</div>
<span className="text-xs font-semibold mt-1">Cart</span>
</a>
</div>
</div>

<div className="bg-[#F5F5F5] text-black border-t border-gray-200">
<div className="max-w-[1240px] mx-auto pr-0 pl-0">
<nav className="flex overflow-x-auto no-scrollbar">
<a className="py-3 px-5 text-sm font-semibold text-black hover:bg-white hover:text-hsc-blue transition-colors whitespace-nowrap border-b-4 border-transparent hover:border-hsc-blue" href="#">Products</a>
<a className="py-3 px-5 text-sm font-semibold text-black hover:bg-white hover:text-hsc-blue transition-colors whitespace-nowrap border-b-4 border-transparent hover:border-hsc-blue" href="#">Brands</a>
<a className="py-3 px-5 text-sm font-semibold text-black hover:bg-white hover:text-hsc-blue transition-colors whitespace-nowrap border-b-4 border-transparent hover:border-hsc-blue" href="#">Services</a>
<a className="py-3 px-5 text-sm font-semibold text-black hover:bg-white hover:text-hsc-blue transition-colors whitespace-nowrap border-b-4 border-transparent hover:border-hsc-blue" href="#">Branch Locations</a>
<a className="py-3 px-5 text-sm font-semibold text-black hover:bg-white hover:text-hsc-blue transition-colors whitespace-nowrap border-b-4 border-transparent hover:border-hsc-blue" href="#">Resources</a>
<a className="hover:bg-hsc-blue-dark transition-colors whitespace-nowrap hover:border-hsc-blue text-sm font-semibold text-white bg-slate-500 border-transparent border-b-4 ml-auto pt-3 pr-5 pb-3 pl-5" href="#">Quick
        Order</a>
</nav>
</div>
</div>
</header>

<main className="">

<section className="relative bg-gray-900 overflow-hidden h-[500px] flex items-center">

<div className="absolute inset-0 z-0 opacity-40">
<img alt="Industrial Warehouse" className="w-full h-full object-cover" src="https://www.hydraulic-supply.com/media/wysiwyg/hydraulic-repair.png?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{}}/>
</div>

<div className="bg-gradient-to-r from-[#051125] via-[#051125]/80 to-transparent z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-20 w-full max-w-[1240px] mr-auto ml-auto pr-4 pl-4 relative">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-400/20 text-blue-100 text-xs font-semibold mb-6 backdrop-blur-sm uppercase tracking-wide">
<span className="w-2 h-2 bg-blue-400"></span>
        At Hydraulic Supply Company, we’ve been delivering top fluid power solutions since 1947.
      </div>
<h1 className="md:text-5xl lg:text-6xl leading-tight text-4xl font-bold text-white tracking-tight mb-3">
        Your One-Stop Shop for <br/><span className="text-blue-400">Hydraulic Equipment</span>
</h1>
<h2 className="text-2xl md:text-3xl font-semibold text-blue-100 tracking-tight mb-6">Expertise Built on Over 75 Years of Experience</h2>
<p className="leading-relaxed text-lg font-normal text-gray-300 max-w-lg mb-8">
        With 20,000+ hydraulic, pneumatic, and industrial products in stock, plus services like custom fabrication,
        repairs,
        and online shopping, we’re here to keep your operations running seamlessly. Shop online or visit a branch
        location
        near you!
      </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center hover:bg-[#091b3b] transition-all hover:shadow-blue-900/40 uppercase text-sm font-bold text-white tracking-wide bg-[#60A5FA] px-8 py-3.5 shadow-lg" href="#">
          Create Business Account
          <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center hover:bg-white/20 transition-all uppercase text-sm font-bold text-white tracking-wide bg-white/10 border-white/20 border pt-3.5 pr-8 pb-3.5 pl-8 backdrop-blur-sm" href="#">Create Personal Account</a>
</div>
</div>
</div>
</section>

<section className="bg-white border-gray-200 border-b">
<div className="max-w-[1240px] mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
<div className="flex flex-col hover:bg-gray-50 transition-colors pt-8 pr-4 pb-8 pl-4 gap-x-4 gap-y-4 items-start">
<img alt="Hydraulic inventory warehouse" className="w-full h-48 object-cover rounded-none shadow-sm" src="https://www.hydraulic-supply.com/media/wysiwyg/20000-products-in-stock.png"/>
<div className="w-full">
<h3 className="text-lg font-semibold text-gray-900 mb-1">Over 20,000 Hydraulic Items in Stock</h3>
<p className="leading-relaxed text-base text-gray-500">Same day shipping by 2pm EST.</p>
</div>
</div>
<div className="flex flex-col hover:bg-gray-50 transition-colors pt-8 pr-4 pb-8 pl-4 gap-x-4 gap-y-4 items-start">
<img alt="Hydraulic inventory warehouse" className="w-full h-48 object-cover rounded-none shadow-sm -multi" src="https://www.hydraulic-supply.com/media/wysiwyg/40-solution-centers.png"/>
<div className="w-full">
<h3 className="text-lg font-semibold text-gray-900 mb-1">40+ Hydraulic Solution Centers</h3>
<p className="leading-relaxed text-base text-gray-500">Find a branch near you</p>
</div>
</div>
<div className="flex flex-col hover:bg-gray-50 transition-colors pt-8 pr-4 pb-8 pl-4 gap-x-4 gap-y-4 items-start">
<img alt="Hydraulic inventory warehouse" className="-multi w-full h-48 object-cover rounded-none shadow-sm" src="https://hydraulicsupply-test.epicorcommerce.com/media/wysiwyg/cms/top_box3_1-revised.png?w=800&amp;q=80"/>
<div className="w-full">
<h3 className="text-lg font-semibold text-gray-900 mb-1">We're Ready to Help</h3>
<p className="leading-relaxed text-base text-gray-500">Technical support backed by decades of experience.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 pt-10 pb-10">
<div className="max-w-[1240px] mr-auto ml-auto pr-4 pl-4">
<div className="flex flex-col md:flex-row md:items-end mb-10 gap-x-4 gap-y-4 justify-between">
<div className="">
<h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-2">Product Categories</h2>
<p className="text-gray-500 text-sm md:text-base max-w-xl">Explore our comprehensive range of hydraulic and
          industrial components.</p>
</div>
<a className="text-hsc-blue font-bold text-sm flex items-center hover:opacity-80 transition-opacity" href="#">
        View All Categories
        <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">

<a className="group relative col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200" href="#">
<div className="absolute top-0 right-0 p-8 w-1/2 h-full flex items-center justify-center z-10">
<iconify-icon className="text-gray-100 group-hover:text-blue-50 transition-colors duration-500" height="200" icon="solar:reel-linear" width="200"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-0"></div>
<div className="z-20 flex flex-col h-full pt-8 pr-8 pb-8 pl-8 relative justify-end">
<img alt="Hydraulic Hose" className="z-0 object-bottom w-[60%] h-full object-contain absolute right-0 bottom-0" src="https://www.hydraulic-supply.com/media/wysiwyg/Hydraulic-Hose.png?format=1500w"/>
<div className="mb-auto pt-4 relative z-10">
<span className="text-hsc-blue text-xs font-bold tracking-wider uppercase mb-2 block">Top Seller</span>
<h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-hsc-blue transition-colors">
              Hydraulic Hose
            </h3>
<p className="text-gray-500 text-sm max-w-xs mb-6">Industrial grade hoses for high pressure
              applications. Custom
              assemblies available.</p>
</div>
<span className="inline-flex items-center justify-center w-10 h-10 bg-gray-50 group-hover:bg-hsc-blue group-hover:text-white transition-colors relative z-10">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</span>
</div>
</a>

<a className="group overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between bg-white border-gray-200 border pt-6 pr-6 pb-6 pl-6 relative shadow-sm" href="#">
<div className="-right-4 -bottom-4 absolute z-0">
<img alt="Hydraulic Fittings" className="group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-0 opacity-100 w-[180px] h-[180px] object-contain" src="https://www.hydraulic-supply.com/media/wysiwyg/hydraulic-hose-fitting_1.png"/>
</div>
<div className="z-10 relative">
<h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-hsc-blue transition-colors">
            Fittings &amp;
            Adapters</h3>
<p className="text-xs text-gray-400">Steel, Brass, Stainless</p>
</div>
<div className="relative z-10 mt-4">
<span className="text-hsc-blue text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                Shop Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</a>

<a className="group overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between bg-white border-gray-200 border pt-6 pr-6 pb-6 pl-6 relative shadow-sm" href="#">
<div className="-right-4 -bottom-4 absolute z-0">
<img alt="Hydraulic Pumps" className="group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-0 opacity-100 w-[180px] h-[180px] object-contain" src="https://www.hydraulic-supply.com/media/catalog/product/cache/671e84f5c7714d2df967545f0e04f5b6/5/3-209334-53960/25vq-series-vane-pumps-up-to-31-5-gpm-1800-rpm-up-to-3000-psi-up-to-2700-rpm_group_907.jpg"/>
</div>
<div className="z-10 relative">
<h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-hsc-blue transition-colors">
            Hydraulic Pumps</h3>
<p className="text-xs text-gray-400">Single, Double, Dump </p>
</div>
<div className="relative z-10 mt-4">
<span className="text-hsc-blue text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                Shop Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</a>

<a className="group overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between bg-white border-gray-200 border pt-6 pr-6 pb-6 pl-6 relative shadow-sm" href="#">
<div className="-right-4 -bottom-4 absolute z-0">
<img alt="Hydraulic Fittings" className="group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-0 opacity-100 w-[180px] h-[180px] object-contain" src="https://www.hydraulic-supply.com/media/catalog/product/cache/671e84f5c7714d2df967545f0e04f5b6/c/8-208817-53481/2000-series-geroler-motors-up-to-8225-lb-in-intermittent-torque-1042-intermittent-rpm_group_581.jpg"/>
</div>
<div className="z-10 relative">
<h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-hsc-blue transition-colors">
      Hydraulic Motors</h3>
<p className="text-xs text-gray-400">Gear, Vane, Piston</p>
</div>
<div className="relative z-10 mt-4">
<span className="text-hsc-blue text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                Shop Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</a>

<a className="group overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between bg-white border-gray-200 border pt-6 pr-6 pb-6 pl-6 relative shadow-sm" href="#">
<div className="-right-4 -bottom-4 absolute z-0">
<img alt="Hydraulic Fittings" className="group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-0 opacity-100 w-[180px] h-[180px] object-contain" src="https://www.hydraulic-supply.com/media/catalog/product/cache/671e84f5c7714d2df967545f0e04f5b6/b/8-209578-54176/analog-pressure-gauges_group_3002.jpg"/>
</div>
<div className="z-10 relative">
<h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-hsc-blue transition-colors">
            Hydraulic Accessories</h3>
<p className="text-xs text-gray-400">Gauges, Flow Meters, Pressure Testing</p>
</div>
<div className="relative z-10 mt-4">
<span className="text-hsc-blue text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                Shop Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</a>
</div>
</div>
</section>

<section className="">
<section className="border-y bg-white border-gray-100 pt-12 pb-2">

<div className="max-w-[1240px] mr-auto mb-10 ml-auto pr-4 pl-4">
<p className="text-center text-gray-400 text-sm font-bold mb-8 tracking-widest uppercase">Trusted Brands We
        Distribute</p>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="h-16 flex items-center justify-center">
<img alt="EATON" className="w-auto max-h-10 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Eaton_Corporation_logo.svg/960px-Eaton_Corporation_logo.svg.png?w=800&amp;q=80"/>
</div>
<div className="h-16 flex items-center justify-center">
<img alt="Danfoss" className="w-auto max-h-8 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Danfoss-Logo.svg/1920px-Danfoss-Logo.svg.png?w=800&amp;q=80"/>
</div>
<div className="h-16 flex items-center justify-center">
<img alt="Parker" className="w-auto max-h-12 object-contain" src="https://clthompson.com/wp-content/uploads/2019/08/aeroquip-logo.png?w=800&amp;q=80"/>
</div>
<div className="h-16 flex items-center justify-center">
<img alt="Gates" className="w-auto max-h-9 object-contain" src="https://mma.prnewswire.com/media/477169/Gates_Logo.jpg?w=800&amp;q=80"/>
</div>
<div className="h-16 flex items-center justify-center">
<img alt="Rexroth" className="w-auto max-h-10 object-contain" src="https://encrypted-tbn0.gstatic.com/images?w=800&amp;q=tbn%3AANd9GcS3fafzcfyX8Hw4FnzFXPvdUlh1ltz_eeytzA"/>
</div>
<div className="h-16 flex items-center justify-center">
<img alt="Continental" className="w-auto max-h-10 object-contain" src="https://www.hydraulic-supply.com/media/wysiwyg/cms/images/Brennan_Logo-_Hydraulic_Supply_Company90.jpg?w=800&amp;q=80"/>
</div>
</div>
</div>

<div className="bg-gray-50 pt-10 pb-0"></div>

<div className="max-w-[1240px] mx-auto px-4 mb-16">
<div className="border-t border-gray-100"></div>
</div>

<div className="max-w-[1240px] mr-auto ml-auto pr-4 pl-4">
<div className="flex flex-col sm:flex-row gap-4 mb-8 gap-x-4 gap-y-4 items-end justify-between">
<div className="">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-2">Popular Hydraulic
                        Products</h2>
<p className="text-gray-500 text-sm md:text-base">Top-rated components available for immediate shipment.
                    </p>
</div>
<div className="flex items-center gap-4">
<div className="flex gap-2">
<button aria-label="Scroll left" className="flex hover:border-hsc-blue hover:text-hsc-blue transition-colors focus:outline-none text-gray-600 bg-white w-9 h-9 border-gray-200 border rounded-none shadow-sm items-center justify-center" onclick="document.getElementById('popular-products-track').scrollBy({left: -320, behavior: 'smooth'})">
<iconify-icon className="" height="18" icon="lucide:arrow-left" style={{color: 'rgb(15, 41, 89)'}} width="18"></iconify-icon>
</button>
<button aria-label="Scroll right" className="flex hover:border-hsc-blue hover:text-hsc-blue transition-colors focus:outline-none text-gray-600 bg-white w-9 h-9 border-gray-200 border rounded-none shadow-sm items-center justify-center" onclick="document.getElementById('popular-products-track').scrollBy({left: 320, behavior: 'smooth'})">
<iconify-icon className="" height="18" icon="lucide:arrow-right" style={{color: 'rgb(15, 41, 89)'}} width="18"></iconify-icon>
</button>
</div>
<a className="group flex items-center gap-1 text-sm font-semibold text-hsc-blue hover:text-blue-700 transition-colors whitespace-nowrap" href="#">
                        View All
                        </a>
</div>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 -mx-4 scroll-smooth no-scrollbar pr-4 pb-8 pl-4 gap-x-6 gap-y-6" id="popular-products-track">

<a className="snap-start shrink-0 group block bg-white border border-gray-200 rounded-none p-4 hover:shadow-lg hover:border-hsc-blue/30 transition-all duration-300 w-[85vw] sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]" href="#">
<div className="relative aspect-square bg-gray-50 rounded-none mb-4 overflow-hidden flex items-center justify-center p-6">
<img alt="Hydraulic Hose" className="group-hover:scale-110 transition-transform duration-500 w-full h-full object-contain" src="https://www.hydraulic-supply.com/media/wysiwyg/solenoid-valve.png?format=1500w"/>
<div className="absolute top-2 right-2 bg-green-100 text-green-700 text-[10px] font-semibold px-2 py-0.5 rounded-none uppercase tracking-wide">
        In Stock</div>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-hsc-blue transition-colors">
      Series D05 Solenoid Valves</h3>
<p className="text-sm text-gray-500 mb-4 line-clamp-2">High performance AC Coils 16 GPM, DC Coils 21 GPM</p>
<div className="flex text-hsc-blue text-sm font-semibold mt-auto items-center">
  Shop Now
  <iconify-icon className="ml-1 w-4 h-4" icon="lucide:chevron-right"></iconify-icon>
</div>
</a>

<a className="snap-start shrink-0 group block bg-white border border-gray-200 rounded-none p-4 hover:shadow-lg hover:border-hsc-blue/30 transition-all duration-300 w-[85vw] sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]" href="#">
<div className="relative aspect-square bg-gray-50 rounded-none mb-4 overflow-hidden flex items-center justify-center p-6">
<img alt="Hydraulic Fittings" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" src="https://www.hydraulic-supply.com/media/wysiwyg/geroler-motor_3_1.png"/>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-hsc-blue transition-colors">Geroler Motors</h3>
<p className="line-clamp-2 text-sm text-gray-500 mb-4">Power Solutions II LLC (Char-Lynn) S Series Geroler Motor is designed for precision and durability.</p>
<div className="flex items-center text-hsc-blue text-sm font-semibold mt-auto">
    Shop Now
    <iconify-icon className="ml-1 w-4 h-4" icon="lucide:chevron-right"></iconify-icon>
</div>
</a>

<a className="snap-start shrink-0 group block bg-white border border-gray-200 rounded-none p-4 hover:shadow-lg hover:border-hsc-blue/30 transition-all duration-300 w-[85vw] sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]" href="#">
<div className="relative aspect-square bg-gray-50 rounded-none mb-4 overflow-hidden flex items-center justify-center p-6">
<img alt="Vane Pumps" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" src="https://www.hydraulic-supply.com/media/catalog/product/cache/671e84f5c7714d2df967545f0e04f5b6/5/3-209334-53960/25vq-series-vane-pumps-up-to-31-5-gpm-1800-rpm-up-to-3000-psi-up-to-2700-rpm_group_907.jpg"/>
</div>
<h3 className="group-hover:text-hsc-blue transition-colors text-lg font-semibold text-gray-900 mb-1">V20F Series Vane Pumps</h3>
<p className="text-sm text-gray-500 mb-4 line-clamp-2">High performance vane pumps for industrial and
      mobile machinery.</p>
<div className="flex items-center text-hsc-blue text-sm font-semibold mt-auto">
      Shop Now
      <iconify-icon className="ml-1 w-4 h-4" icon="lucide:chevron-right"></iconify-icon>
</div>
</a>

<a className="snap-start shrink-0 group block bg-white border border-gray-200 rounded-none p-4 hover:shadow-lg hover:border-hsc-blue/30 transition-all duration-300 w-[85vw] sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]" href="#">
<div className="relative aspect-square bg-gray-50 rounded-none mb-4 overflow-hidden flex items-center justify-center p-6">
<img alt="Hydraulic Motors" className="group-hover:scale-110 transition-transform duration-500 w-full h-full object-contain" src="https://www.hydraulic-supply.com/media/wysiwyg/dump-pumps_1.png?w=800&amp;q=80"/>
<div className="absolute top-2 right-2 bg-blue-100 text-blue-700 text-[10px] font-semibold px-2 py-0.5 rounded-none uppercase tracking-wide">
        Best Seller</div>
</div>
<h3 className="group-hover:text-hsc-blue transition-colors text-lg font-semibold text-gray-900 mb-1">CDM400 Series Dump Pumps</h3>
<p className="text-sm text-gray-500 mb-4 line-clamp-2">Geroler, Gear, and Piston motors for various
      torque requirements.</p>
<div className="flex items-center text-hsc-blue text-sm font-semibold mt-auto">
      Shop Now
      <iconify-icon className="ml-1 w-4 h-4" icon="lucide:chevron-right"></iconify-icon>
</div>
</a>
</div>
</div>
</section>
</section>

<section className="bg-gray-50 pt-20 pb-20">
<div className="max-w-[1240px] mx-auto px-4">
<div className="bg-white border border-gray-200 overflow-hidden shadow-sm flex flex-col md:flex-row">
<div className="md:w-1/2 md:p-16 flex flex-col pt-10 pr-10 pb-10 pl-10 justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold mb-6 w-fit uppercase">
          Custom Solutions
        </div>
<h2 className="md:text-4xl text-3xl font-bold text-gray-900 tracking-tight mb-6">Retail Locations, <span className="text-hsc-blue">Service Centers &amp; Warehouse</span></h2>
<p className="leading-relaxed text-gray-500 mb-8">With over 50 retail locations, our "Hose Pro" experts are ready to build assemblies while you wait. We offer fabrication, kit assembly, and inventory management services.</p>
<ul className="space-y-4 mb-8">
<li className="flex text-sm font-medium text-gray-700 gap-x-3 gap-y-3 items-center">
<iconify-icon className="text-hsc-blue" icon="solar:check-circle-linear"></iconify-icon>
            While-you-wait hose assembly
          </li>
<li className="flex items-center gap-3 text-gray-700 text-sm font-medium">
<iconify-icon className="text-hsc-blue" icon="solar:check-circle-linear"></iconify-icon>
            24/7 Emergency Service
          </li>
<li className="flex items-center gap-3 text-gray-700 text-sm font-medium">
<iconify-icon className="text-hsc-blue" icon="solar:check-circle-linear"></iconify-icon>
            VMI &amp; Bin Stocking Programs
          </li>
</ul>
<a className="text-hsc-blue font-bold text-sm flex items-center gap-2 group w-fit uppercase" href="#">
          Find a Location
          <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="md:w-1/2 bg-gray-100 relative min-h-[400px]">
<img alt="Service Center" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/p/AF1QipPvTpnzXddnLBtbO68VnE8J2lP68zocQP51F18N=s1360-w1360-h1020-rw"/>
<div className="bg-gradient-to-t from-gray-900/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-8 left-8 text-white">
<p className="text-sm font-bold">Sunrise, FL HQ</p>
<p className="text-xs opacity-80">Main Distribution Center</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-gray-100 border-t pt-24 pb-24">
<div className="max-w-[1240px] mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-gray-900 tracking-tight mb-4">Trusted by Industry Professionals</h2>
<p className="text-gray-500">See what our partners say about our product availability and service.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex flex-col relative group hover:-translate-y-1 transition-transform duration-300">
<div className="flex text-yellow-500 gap-1 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="leading-relaxed flex-grow text-sm italic text-gray-600 mb-8">"One of the few remaining company’s to actually value their customers… the crew HSC has helped me with several challenging repair/designs. Their knowledge and fully stocked store has saved me thousands of $$$. Dewayne in repair is super knowledgeable… I had a problem motor that he worked magic onellent team. The service was exceptional."</p>
<div className="flex items-center gap-3 border-t border-gray-200 pt-6">
<div className="bg-white border border-gray-200 w-10 h-10 flex items-center justify-center rounded-full text-hsc-blue font-semibold shadow-sm">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
</div>
<div className="">
<div className="text-sm font-semibold text-gray-900">Leland S.</div>
<div className="text-xs text-gray-500 font-medium">Maintenance Supervisor</div>
</div>
<iconify-icon className="ml-auto text-blue-500" icon="solar:verified-check-bold" width="18"></iconify-icon>
</div>
</div>

<div className="flex flex-col group hover:-translate-y-1 transition-transform duration-300 bg-gray-50 border-gray-100 border rounded-lg pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex text-yellow-500 gap-1 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="leading-relaxed flex-grow text-sm italic text-gray-600 mb-8">"Ronald is the man! Always helpful and very reasonable prices. My “go to” for many repair needs on our farm."</p>
<div className="flex items-center gap-3 border-t border-gray-200 pt-6">
<div className="bg-white border border-gray-200 w-10 h-10 flex items-center justify-center rounded-full text-hsc-blue font-semibold shadow-sm">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
</div>
<div className="">
<div className="text-sm font-semibold text-gray-900">Kevin G.</div>
<div className="text-xs text-gray-500 font-medium">Fleet Manager</div>
</div>
<iconify-icon className="ml-auto text-blue-500" icon="solar:verified-check-bold" width="18"></iconify-icon>
</div>
</div>

<div className="flex flex-col group hover:-translate-y-1 transition-transform duration-300 bg-gray-50 border-gray-100 border rounded-lg pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex text-yellow-500 gap-1 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="leading-relaxed flex-grow text-sm italic text-gray-600 mb-8">"This company is by far the best hydraulic repair and supply company in Jacksonville. I have unfortunately gone to other companies and have been let down and will not go anywhere else. They have been extremely fast and communicative. We have now used them several times for many different hydraulic cylinder repairs and all of them have been done perfectly. Heather is very nice on the phone and Dwayne is the best specialist you can ask for."</p>
<div className="flex gap-3 border-gray-200 border-t pt-6 gap-x-3 gap-y-3 items-center">
<div className="bg-white border border-gray-200 w-10 h-10 flex items-center justify-center rounded-full text-hsc-blue font-semibold shadow-sm">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
</div>
<div className="">
<div className="text-sm font-semibold text-gray-900">Gregory T.</div>
<div className="text-xs text-gray-500 font-medium">Industrial Buyer</div>
</div>
<iconify-icon className="ml-auto text-blue-500" icon="solar:verified-check-bold" width="18"></iconify-icon>
</div>
</div>

<div className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex flex-col relative group hover:-translate-y-1 transition-transform duration-300">
<div className="flex text-yellow-500 gap-1 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="leading-relaxed flex-grow text-sm italic text-gray-600 mb-8">"Hydraulic Supply was quick with making 6 hoses for my tow truck, only took about 15 minutes. If you need any repair, replacement or accessories. I would recommend 100%"</p>
<div className="flex gap-3 border-gray-200 border-t pt-6 gap-x-3 gap-y-3 items-center">
<div className="bg-white border border-gray-200 w-10 h-10 flex items-center justify-center rounded-full text-hsc-blue font-semibold shadow-sm">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
</div>
<div className="">
<div className="text-sm font-semibold text-gray-900">Giovanni L.</div>
<div className="text-xs text-gray-500 font-medium">Plant Manager</div>
</div>
<iconify-icon className="ml-auto text-blue-500" icon="solar:verified-check-bold" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
</section><div className="bg-gray-50 w-full h-[40px] border-gray-100 border-t"></div>


<section className="bg-white pt-20 pb-20">
<div className="max-w-[1240px] mr-auto ml-auto pr-4 pl-4">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
<div className="max-w-3xl">
<h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-4">Industry Solutions</h2>
<p className="text-gray-500">HSC works with industries that depend on reliable hydraulic and pneumatic systems, providing access to in-stock components, service capabilities, and knowledgeable support across diverse applications.</p>
</div>
<div className="flex gap-2 shrink-0">
<button aria-label="Scroll left" className="flex hover:border-hsc-blue hover:text-hsc-blue hover:bg-blue-50 transition-all focus:outline-none text-gray-600 bg-white w-9 h-9 border-gray-200 border rounded-none shadow-sm items-center justify-center" onclick="document.getElementById('industry-carousel').scrollBy({left: -320, behavior: 'smooth'})">
<iconify-icon className="" height="20" icon="lucide:arrow-left" style={{color: 'rgb(15, 41, 89)'}} width="20"></iconify-icon>
</button>
<button aria-label="Scroll right" className="flex hover:border-hsc-blue hover:text-hsc-blue hover:bg-blue-50 transition-all focus:outline-none text-gray-600 bg-white w-9 h-9 border-gray-200 border rounded-none shadow-sm items-center justify-center" onclick="document.getElementById('industry-carousel').scrollBy({left: 320, behavior: 'smooth'})">
<iconify-icon className="" height="20" icon="lucide:arrow-right" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 -mx-4 scroll-smooth no-scrollbar pr-4 pb-8 pl-4 gap-x-6 gap-y-6" id="industry-carousel">

<a className="snap-start shrink-0 w-[85vw] sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] group block" href="#">
<div className="relative h-64 overflow-hidden mb-6 rounded-none bg-gray-100">
<img alt="Construction" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1653924333410-0dda83ae490c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:bg-gray-900/0 transition-colors bg-gray-900/10 absolute inset-0"></div>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-hsc-blue transition-colors">Construction &amp; Earthmoving</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-4">Heavy-duty hoses and cylinders built to withstand extreme conditions and vibration.</p>
<span className="text-sm font-semibold text-gray-900 underline decoration-gray-300 underline-offset-4 group-hover:decoration-hsc-blue transition-all">Learn more</span>
</a>

<a className="snap-start shrink-0 w-[85vw] sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] group block" href="#">
<div className="relative h-64 overflow-hidden mb-6 rounded-none bg-gray-100">
<img alt="Marine" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1578356058390-f58c575337a2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:bg-gray-900/0 transition-colors bg-gray-900/10 absolute inset-0"></div>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-hsc-blue transition-colors">Marine &amp; Offshore</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-4">Corrosion-resistant stainless steel fittings and certified assemblies for marine environments.</p>
<span className="text-sm font-semibold text-gray-900 underline decoration-gray-300 underline-offset-4 group-hover:decoration-hsc-blue transition-all">Learn more</span>
</a>

<a className="snap-start shrink-0 w-[85vw] sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] group block" href="#">
<div className="relative h-64 overflow-hidden mb-6 rounded-none bg-gray-100">
<img alt="Manufacturing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://plus.unsplash.com/premium_photo-1682144554614-bce1c2311b72?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:bg-gray-900/0 transition-colors bg-gray-900/10 absolute inset-0"></div>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-hsc-blue transition-colors">Manufacturing</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-4">Pneumatic automation and hydraulic power units to keep production lines moving.</p>
<span className="text-sm font-semibold text-gray-900 underline decoration-gray-300 underline-offset-4 group-hover:decoration-hsc-blue transition-all">Learn more</span>
</a>

<a className="snap-start shrink-0 w-[85vw] sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] group block" href="#">
<div className="relative h-64 overflow-hidden mb-6 rounded-none bg-gray-100">
<img alt="Industrial" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hydraulicsupply-test.epicorcommerce.com/media/wysiwyg/cms/images/industry-construction_245x280.png?w=2160&amp;q=80"/>
<div className="group-hover:bg-gray-900/0 transition-colors bg-gray-900/10 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-hsc-blue transition-colors">Industrial</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-4">High-performance components for mining, processing, and heavy industrial machinery.</p>
<span className="text-sm font-semibold text-gray-900 underline decoration-gray-300 underline-offset-4 group-hover:decoration-hsc-blue transition-all">Learn more</span>
</a>

<a className="snap-start shrink-0 w-[85vw] sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] group block" href="#">
<div className="relative h-64 overflow-hidden mb-6 rounded-none bg-gray-100">
<img alt="Agriculture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hydraulicsupply-test.epicorcommerce.com/media/wysiwyg/cms/images/industry-agriculture_245x280.png?w=2160&amp;q=80"/>
<div className="group-hover:bg-gray-900/0 transition-colors bg-gray-900/10 absolute inset-0"></div>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-hsc-blue transition-colors">Agriculture</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-4">Durable hydraulic solutions for tractors, harvesters, and irrigation systems.</p>
<span className="text-sm font-semibold text-gray-900 underline decoration-gray-300 underline-offset-4 group-hover:decoration-hsc-blue transition-all">Learn more</span>
</a>
</div>
</div>
</section><section aria-hidden="true" className="w-full h-[40px] bg-gray-50 border-t border-gray-100 block"></section><section className="bg-white pt-24 pb-24">
<div className="max-w-[1240px] mx-auto px-4">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-4">Global Reach &amp; Services</h2>
<p className="text-gray-500">Comprehensive hydraulic solutions through our international network, specialized services, and local branches.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-x-8 gap-y-8">

<div className="bg-gray-50 p-10 flex flex-col h-full rounded-sm hover:shadow-md transition-all duration-300">
<div className="flex justify-between items-start mb-6">
<h3 className="text-2xl text-hsc-blue font-normal tracking-tight">Intl Affiliate Distributors</h3>
<div className="bg-hsc-blue p-2 flex items-center justify-center h-10 w-10">
<iconify-icon className="text-white" height="24" icon="lucide:globe" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<p className="text-gray-600 mb-10 leading-relaxed text-lg font-normal">
                    With over 75 international affiliate distributors in the Caribbean, Central America, and South America, HSC connects customer and suppliers with these markets through our dedicated and experienced export teams.
                </p>
<a className="block hover:bg-hsc-blue-dark transition-all uppercase hover:shadow-md text-sm font-semibold text-white tracking-wide text-center bg-[#0F2959] w-full rounded-sm mt-auto pt-4 pb-4 shadow-sm" href="#">International Distribution Network</a>
</div>

<div className="bg-gray-50 p-10 flex flex-col h-full rounded-sm hover:shadow-md transition-all duration-300">
<div className="flex justify-between items-start mb-6">
<h3 className="text-2xl text-hsc-blue font-normal tracking-tight">Hydraulic Supply Services</h3>
<div className="bg-hsc-blue p-2 flex items-center justify-center h-10 w-10">
<iconify-icon className="text-white" height="24" icon="lucide:settings-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<p className="text-gray-600 mb-10 leading-relaxed text-lg font-normal">
                    Stocking over 20,000 different parts, HSC specializes in servicing OEM and resellers with dedicated inventory, production assembly capabilities, build programs, kitting, and an engineered solutions group.
                </p>
<a className="block hover:bg-hsc-blue-dark transition-all uppercase hover:shadow-md text-sm font-semibold text-white tracking-wide text-center bg-[#0F2959] w-full rounded-sm mt-auto pt-4 pb-4 shadow-sm" href="#">
                    View Services and Capabilities
                </a>
</div>

<div className="flex flex-col hover:shadow-md transition-all duration-300 bg-gray-50 h-full rounded-sm pt-10 pr-10 pb-10 pl-10">
<div className="flex justify-between items-start mb-6">
<h3 className="text-2xl text-hsc-blue font-normal tracking-tight">HSC Branch Locations</h3>
<div className="bg-hsc-blue p-2 flex items-center justify-center h-10 w-10">
<iconify-icon className="text-white" height="24" icon="lucide:map-pin" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<p className="text-gray-600 mb-10 leading-relaxed text-lg font-normal">
                    Boasting over 50 branch locations to meet the just-in-time needs of the end-users and operators, the HSC branch network has solutions on hand to keep you up and running.
                </p>
<a className="block hover:bg-hsc-blue-dark transition-all uppercase hover:shadow-md text-sm font-semibold text-white tracking-wide text-center bg-[#0F2959] w-full rounded-sm mt-auto pt-4 pb-4 shadow-sm" href="#">
                    Find an HSC Branch Near You
                </a>
</div>
</div>
</div>
</section><section className="bg-gray-50 pt-24 pb-24 border-t border-gray-200">
<div className="max-w-5xl mx-auto px-4 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm border border-gray-100 mb-8 text-hsc-blue">
<iconify-icon height="24" icon="lucide:layers" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-2xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-8 leading-tight">
            Hydraulic Supply Company is dedicated to simplifying your access to top-quality hydraulic, pneumatic, and industrial solutions.
        </h2>
<div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-gray-500 font-normal leading-relaxed">
<p className="">
                With thousands of products in stock and services like custom fabrication, and kitting, and repairs in select locations, we ensure you have everything you need to tackle any application.
            </p>
<p className="">
                Our 40+ branch locations and online shopping platform provide seamless purchasing options, backed by expert support to keep your operations running efficiently. From parts to full system solutions, we’re here to help you succeed.
            </p>
</div>
</div>
</section>

<section className="bg-hsc-blue py-16 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
<div className="max-w-[1240px] mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
<div>
<h2 className="text-3xl text-white font-bold mb-2 tracking-tight">Need help identifying a part?</h2>
<p className="text-blue-200 text-lg font-light">Send us a photo and our experts will find it for you.</p>
</div>
<div className="flex gap-4">
<button className="bg-white text-hsc-blue px-8 py-3 text-sm font-bold hover:bg-gray-100 transition-colors shadow-lg uppercase">
                        Contact Support
                    </button>
<button className="bg-transparent border border-white text-white px-8 py-3 text-sm font-bold hover:bg-white/10 transition-colors uppercase">
                        Find Locations
                    </button>
</div>
</div>
</section>
</main>

<footer className="text-sm text-gray-300 bg-gray-900">

<div className="border-b border-gray-800">
<div className="max-w-[1240px] mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="">
<h3 className="text-white text-lg font-bold mb-1">Subscribe to our newsletter</h3>
<p className="text-gray-400">Get the latest product news and promotions directly to your inbox.</p>
</div>
<div className="flex w-full md:w-auto">
<input className="border-none md:w-80 focus:ring-1 focus:ring-hsc-blue outline-none placeholder:text-gray-500 text-white bg-white w-full px-4 py-3" placeholder="Enter your email address" type="email"/>
<button className="hover:bg-hsc-blue-dark transition-colors font-bold text-white bg-blue-400 px-6 py-3">Subscribe</button>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-left max-w-[1240px] mr-auto ml-auto pt-12 pr-4 pb-12 pl-4 gap-x-8 gap-y-12">

<div className="flex flex-col gap-8 gap-x-8 gap-y-8">
<div className="">
<h4 className="text-white font-normal text-base mb-6">Company Information</h4>
<ul className="text-sm text-gray-400 space-y-3">
<li className=""><a className="hover:text-white transition-colors" href="#">Company History</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Executive Team</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">International</a></li>
</ul>
</div>
</div>

<div className="">
<h4 className="text-base font-normal text-white mb-6">HSC Resources</h4>
<ul className="text-sm text-gray-400 space-y-3">
<li className=""><a className="hover:text-white transition-colors" href="#">Catalogs</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Brands</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Services</a></li>
</ul>
</div>

<div className="">
<h4 className="text-white font-normal text-base mb-6">Top Categories</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li className=""><a className="hover:text-white transition-colors" href="#">Hydraulic Cylinders</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Hydraulic Pumps</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Hydraulic Motor</a></li>
</ul>
</div>

<div className="">
<h4 className="text-white font-normal text-base mb-6">Customer Support</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li className=""><a className="hover:text-white transition-colors font-bold text-white" href="tel:8005079651">800-507-9651</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Frequently Asked Questions</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Credit Application</a></li>
</ul>
</div>

<div className="flex flex-col gap-8">
<div className="">
<h4 className="text-white font-normal text-base mb-6">Follow Us</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 hover:bg-white hover:text-gray-900 hover:border-white transition-all" href="#">
<iconify-icon height="20" icon="lucide:facebook" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 hover:bg-white hover:text-gray-900 hover:border-white transition-all" href="#">
<iconify-icon height="20" icon="lucide:twitter" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 hover:bg-white hover:text-gray-900 hover:border-white transition-all" href="#">
<iconify-icon className="" height="20" icon="lucide:linkedin" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 hover:bg-white hover:text-gray-900 hover:border-white transition-all" href="#">
<iconify-icon height="20" icon="lucide:youtube" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="">
<p className="text-gray-300 text-sm mb-2">A Division of</p>
<div className="text-white font-black italic text-2xl tracking-tight mb-6 opacity-90">
<span className="inline-block transform -skew-x-12 mr-0.5">///</span>iMOTION
            </div>
<div className="bg-[#d50000] text-white p-3 inline-block w-28 text-center shadow-md">
<div className="font-bold font-serif text-lg leading-none mb-2 tracking-wide">Danfoss</div>
<div className="text-[9px] leading-tight font-sans opacity-90 uppercase font-semibold">Power Solutions<br/>Authorized<br/>Distributor</div>
</div>
</div>
</div>
</div></footer>
    </>
  );
}
