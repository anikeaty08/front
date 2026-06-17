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
      

<div className="w-full bg-[#0A1628] border-b border-[#D4AF37]/30 py-2.5 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-sm tracking-wide">
<div className="text-[#D4AF37] font-normal tracking-widest hidden md:block">WHOLESALE PORTAL</div>
<a className="text-white hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-2 mb-2 md:mb-0" href="tel:6196718833">
<i className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i>
            (619) 671-8833
        </a>
<div className="flex items-center gap-6 text-[#B8C5D6]">
<a className="hover:text-white transition-colors duration-300" href="#">Order Status</a>
<a className="hover:text-white transition-colors duration-300" href="#">Warranty</a>
<a className="hover:text-white transition-colors duration-300" href="#">Policies</a>
<a className="text-[#D4AF37] hover:text-[#E5C158] flex items-center gap-1.5 transition-colors duration-300 font-normal tracking-wide" href="#">
<i className="w-4 h-4" data-lucide="user" strokeWidth="1.5"></i>
                MY ACCOUNT
            </a>
</div>
</div>

<nav className="sticky top-0 z-50 bg-[#1E3A5F]/95 backdrop-blur-md border-b border-[#2D4A6F] shadow-sm">
<div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-wrap md:flex-nowrap items-center justify-between gap-4">

<div className="flex flex-col flex-shrink-0">
<div className="text-3xl font-medium tracking-tight text-white leading-none">SDTW</div>
<div className="text-xs text-[#D4AF37] tracking-widest mt-1 font-normal">DIRECT | WHOLESALE</div>
</div>

<div className="w-full md:flex-1 md:max-w-xl order-3 md:order-none relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#B8C5D6] group-focus-within:text-[#D4AF37] transition-colors duration-300">
<i className="w-4 h-4" data-lucide="search" strokeWidth="1.5"></i>
</div>
<input className="w-full bg-[#152742] border border-[#2D4A6F] text-white text-base rounded-md pl-10 pr-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all duration-300 placeholder-[#B8C5D6]/70" placeholder="Search by SKU, Vehicle, Size, Bolt Pattern, Finish..." type="text"/>
</div>

<div className="flex items-center gap-6 order-2 md:order-none text-sm font-normal tracking-wide">
<div className="hidden lg:flex items-center gap-6">
<a className="text-[#D4AF37] border-b border-[#D4AF37] pb-1" href="#">HOME</a>
<a className="text-white hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-1 pb-1" href="#">WHEELS <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i></a>
<a className="text-white hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-1 pb-1" href="#">TIRES <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i></a>
<a className="text-white hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-1 pb-1" href="#">ACCESSORIES <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i></a>
<a className="text-white hover:text-[#D4AF37] transition-colors duration-300 pb-1" href="#">DOWNLOADS</a>
<a className="text-white hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-1 pb-1" href="#">CONTACT <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i></a>
</div>
<div className="flex items-center gap-5 pl-4 border-l border-[#2D4A6F]">
<button className="text-white hover:text-[#D4AF37] transition-colors duration-300">
</button>
<button className="flex items-center gap-2.5 group text-white hover:text-[#D4AF37] transition-colors duration-300">
<div className="relative">
<i className="w-5 h-5" data-lucide="shopping-cart" strokeWidth="1.5"></i>
<span className="absolute -top-1.5 -right-1.5 bg-[#D4AF37] text-[#0A1628] text-xs font-medium h-4 w-4 rounded-full flex items-center justify-center">2</span>
</div>
<span className="bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 px-2 py-0.5 rounded text-sm group-hover:bg-[#D4AF37] group-hover:text-[#0A1628] transition-all duration-300">$400.00</span>
</button>
</div>
</div>
</div>
</nav>

<section className="bg-gradient-to-br from-[#0A1628] via-[#152742] to-[#0A1628] border-b border-[#2D4A6F]">
<div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
<div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">

<div className="md:col-span-7 space-y-6">
<div className="">
<span className="text-[#D4AF37] text-xs font-medium tracking-widest uppercase">Welcome Back</span>
<h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mt-2">Midwest Auto Group</h1>
</div>
<div className="flex flex-wrap items-center gap-3 text-base text-[#B8C5D6]">
<span className="bg-[#1E3A5F] border border-[#D4AF37]/30 text-[#D4AF37] px-3 py-1 rounded-full flex items-center gap-1.5 shadow-[0_0_10px_rgba(212,175,55,0.1)]">
<i className="w-4 h-4" data-lucide="star" strokeWidth="1.5"></i>
                            Tier 2 Partner
                        </span>
</div>
<div className="flex flex-wrap gap-4 pt-2">
<a className="bg-[#D4AF37] text-[#0A1628] px-6 py-3 rounded-full text-base font-normal hover:bg-[#E5C158] hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-[#D4AF37]/20 flex items-center gap-2" href="#">
                            View Full Catalog
                            <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="bg-transparent border border-[#D4AF37] text-white px-6 py-3 rounded-full text-base font-normal hover:bg-[#D4AF37]/10 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="zap" strokeWidth="1.5"></i>
                            Quick Order
                        </a>
</div>
</div>

<div className="md:col-span-5 grid grid-cols-3 gap-4">
<div className="bg-[#152742]/80 backdrop-blur-sm border-l-4 border-[#D4AF37] rounded-r-lg p-5 shadow-lg shadow-black/20 hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between h-32">
<div className="text-[#D4AF37] text-xs font-medium tracking-widest uppercase">Open Orders</div>
<div className="text-5xl font-medium tracking-tight text-white tabular-nums">5</div>
</div>
<div className="bg-[#152742]/80 backdrop-blur-sm border-l-4 border-[#D4AF37] rounded-r-lg p-5 shadow-lg shadow-black/20 hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between h-32">
<div className="text-[#D4AF37] text-xs font-medium tracking-widest uppercase">Shipments</div>
<div className="text-5xl font-medium tracking-tight text-white tabular-nums">2</div>
</div>
<div className="bg-[#152742]/80 backdrop-blur-sm border-l-4 border-[#2D4A6F] rounded-r-lg p-5 shadow-lg shadow-black/20 hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between h-32 opacity-80">
<div className="text-[#B8C5D6] text-xs font-medium tracking-widest uppercase">Returns</div>
<div className="text-5xl font-medium tracking-tight text-[#B8C5D6] tabular-nums">0</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F8FAFC] py-16 border-b border-slate-200 text-slate-800">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="text-center mb-10">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0A1628]">Precision Fitment Search</h2>
<p className="text-slate-500 mt-2 text-base md:text-lg">Locate exactly what you need across millions of SKUs with guaranteed accuracy.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col hover:shadow-md transition-shadow duration-300">
<div className="flex items-center gap-3 mb-6">
<div className="h-10 w-10 rounded-full bg-[#0A1628] flex items-center justify-center text-[#D4AF37]">
<i className="w-5 h-5" data-lucide="circle-dashed" strokeWidth="1.5"></i>
</div>
<h3 className="font-medium text-lg text-[#0A1628] tracking-tight">Search by Vehicle</h3>
</div>
<div className="space-y-3 flex-grow">
<select className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all text-slate-700">
<option value="">Select Year</option>
<option>2024</option>
<option>2023</option>
</select>
<select className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all text-slate-400" disabled="">
<option value="">Select Make</option>
</select>
<select className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all text-slate-400" disabled="">
<option value="">Select Model</option>
</select>
<select className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all text-slate-400" disabled="">
<option value="">Select Submodel</option>
</select>
</div>
<div className="grid grid-cols-2 gap-3 mt-6">
<button className="bg-[#0A1628] border border-[#0A1628] text-[#D4AF37] py-2.5 rounded-md text-sm font-normal hover:bg-[#152742] transition-colors duration-300">GO</button>
<button className="bg-white border border-[#0A1628] text-[#0A1628] py-2.5 rounded-md text-sm font-normal hover:bg-slate-50 transition-colors duration-300">CLEAR</button>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col hover:shadow-md transition-shadow duration-300">
<div className="flex items-center gap-3 mb-6">
<div className="h-10 w-10 rounded-full bg-[#0A1628] flex items-center justify-center text-[#D4AF37]">
<i className="w-5 h-5" data-lucide="circle-dot" strokeWidth="1.5"></i>
</div>
<h3 className="font-medium text-lg text-[#0A1628] tracking-tight">Search by Wheel Specs</h3>
</div>
<div className="space-y-3 flex-grow">
<select className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all text-slate-700">
<option value="">Select Diameter</option>
<option>17"</option>
<option>18"</option>
<option>19"</option>
<option>20"</option>
</select>
<select className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all text-slate-400" disabled="">
<option value="">Select Width</option>
</select>
<select className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all text-slate-400" disabled="">
<option value="">Select Bolt Pattern</option>
</select>
<select className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all text-slate-400" disabled="">
<option value="">Select Offset</option>
</select>
</div>
<div className="grid grid-cols-2 gap-3 mt-6">
<button className="bg-[#0A1628] border border-[#0A1628] text-[#D4AF37] py-2.5 rounded-md text-sm font-normal hover:bg-[#152742] transition-colors duration-300">GO</button>
<button className="bg-white border border-[#0A1628] text-[#0A1628] py-2.5 rounded-md text-sm font-normal hover:bg-slate-50 transition-colors duration-300">CLEAR</button>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col hover:shadow-md transition-shadow duration-300">
<div className="flex items-center gap-3 mb-6">
<div className="h-10 w-10 rounded-full bg-[#0A1628] flex items-center justify-center text-[#D4AF37]">
<i className="w-5 h-5" data-lucide="barcode" strokeWidth="1.5"></i>
</div>
<h3 className="font-medium text-lg text-[#0A1628] tracking-tight">Search by Part Number</h3>
</div>
<div className="space-y-4 flex-grow">
<input className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all text-slate-700" placeholder="Search by SKU, Brand, Size..." type="text"/>
<div className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-md p-4 mt-2">
<p className="text-sm font-normal text-[#0A1628] mb-2">Quick Search Tips:</p>
<ul className="text-sm text-slate-500 space-y-1.5 ml-1">
<li className="flex items-center gap-1.5"><i className="w-4 h-4 text-[#D4AF37]" data-lucide="check-circle" strokeWidth="1.5"></i> Verify absolute fitment</li>
<li className="flex items-center gap-1.5"><i className="w-4 h-4 text-[#D4AF37]" data-lucide="check-circle" strokeWidth="1.5"></i> Check real-time stock</li>
<li className="flex items-center gap-1.5"><i className="w-4 h-4 text-[#D4AF37]" data-lucide="check-circle" strokeWidth="1.5"></i> View tier-specific pricing</li>
</ul>
</div>
</div>
<button className="w-full mt-6 bg-[#0A1628] border border-[#0A1628] text-[#D4AF37] py-2.5 rounded-md text-sm font-normal hover:bg-[#152742] transition-colors duration-300 flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="search" strokeWidth="1.5"></i> Search Catalog
                    </button>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-b from-[#0A1628] to-[#152742] border-[#2D4A6F] border-b py-16 gap-x-3 justify-between">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="flex flex-col md:flex-row gap-4 mb-8 gap-x-6 gap-y-6 items-end justify-between">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Browse Categories</h2>
<p className="text-[#B8C5D6] mt-1 text-base md:text-lg">Explore our comprehensive catalog of premium aftermarket parts.</p>
</div>
<a className="text-[#D4AF37] hover:text-[#E5C158] text-base font-normal flex items-center gap-1 transition-colors duration-300 group pb-1" href="#">
                    View Entire Catalog <i className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<a className="overflow-hidden group hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] block h-64 border-transparent border rounded-xl relative" href="#">
<img alt="Wheels" className="group-hover:scale-[1.02] transition-transform duration-500 ease-out w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&amp;w=800"/>
<div className="bg-gradient-to-t from-[#0A1628] via-[#0A1628]/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="flex absolute right-6 bottom-6 left-6 items-end justify-between">
<h3 className="text-2xl font-medium text-white tracking-tight">Wheels</h3>
</div>
</a>

<a className="relative h-64 rounded-xl overflow-hidden group border border-transparent hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] block" href="#">
<img alt="Tires" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&amp;w=800"/>
<div className="bg-gradient-to-t from-[#0A1628] via-[#0A1628]/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="flex absolute right-6 bottom-6 left-6 items-end justify-between">
<h3 className="text-2xl font-medium text-white tracking-tight">Tires</h3>
</div>
</a>

<a className="overflow-hidden group hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] block h-64 border-transparent border rounded-xl relative" href="#">
<img alt="Accessories" className="group-hover:scale-[1.02] transition-transform duration-500 ease-out w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1557245526-45dc0f1a8745?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-[#0A1628] via-[#0A1628]/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<h3 className="text-2xl font-medium text-white tracking-tight">Accessories</h3>
</div>
</a>
</div>
</div>
</section>

<section className="text-slate-800 bg-white border-slate-200 border-b pt-20 pb-20">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="mb-14 inline-block">
<h2 className="md:text-4xl text-3xl font-medium text-[#0A1628] tracking-tight">New Arrivals</h2>
<div className="w-12 h-[2px] bg-[#D4AF37] mt-4"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

<div className="lg:col-span-7 flex flex-col">
<div className="bg-white border border-slate-100 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.03)] rounded-2xl p-6 md:p-8 relative mb-8">
<div className="aspect-[16/10] w-full relative rounded-lg overflow-hidden bg-white">
<img alt="Wheel on car" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606109155877-36ee1e029274?w=1200&amp;q=80"/>
</div>
</div>
<div className="flex flex-col">
<div className="text-xs text-[#D4AF37] font-medium tracking-widest uppercase mb-3">FACTORY STYLE</div>
<h3 className="text-3xl md:text-4xl font-medium text-[#0A1628] tracking-tight mb-3">ZL MESH STYLE - F019</h3>
<p className="text-base text-slate-500 mb-8 flex items-center gap-3">
                            20x9 <span className="text-slate-300">•</span> 5x120 <span className="text-slate-300">•</span> Matte Gunmetal
                        </p>
<div className="flex items-center justify-between">
<div className="flex items-baseline">
<span className="leading-none tabular-nums text-3xl font-medium text-[#0A1628] tracking-tight">View Pricing</span>
</div>
<div className="flex items-center gap-4">
<button className="hover:bg-[#1f2937] transition-colors flex shadow-[#111827]/10 flex-shrink-0 text-base font-normal text-white bg-amber-400 rounded-full px-8 py-3.5 shadow-md gap-x-3 gap-y-3 items-center">
                                    Add to Cart
                                    <i className="w-4 h-4" data-lucide="shopping-cart" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col justify-start pt-2">
<div className="text-xs text-slate-400 font-medium tracking-widest uppercase mb-6">HIGH VELOCITY / REGION 2</div>
<div className="flex flex-col">

<div className="flex items-center justify-between py-6 border-b border-slate-100 group">
<div className="flex items-center gap-5">
<div className="h-24 w-24 bg-white border border-slate-100 rounded-xl shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] overflow-hidden flex-shrink-0 flex items-center justify-center p-2.5 group-hover:border-slate-300 transition-colors">
<img alt="TSW Bathurst" className="w-full h-full object-contain" src="https://images.unsplash.com/photo-1761756580701-e7ecb9baea13?w=400&amp;q=80"/>
</div>
<div className="flex flex-col justify-center">
<h4 className="font-medium text-[#0A1628] mb-1.5 text-lg tracking-tight">TSW Bathurst</h4>
<p className="text-sm text-slate-500 mb-2.5 flex items-center gap-1.5">19x8.5 <span className="text-slate-300">•</span> 5x112 <span className="text-slate-300">•</span> Gloss Gunmetal</p>
<div className="text-base font-medium text-[#D4AF37] tabular-nums">$295.00</div>
</div>
</div>
<button className="flex group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-colors flex-shrink-0 text-slate-400 w-10 h-10 border-slate-200 border rounded-full ml-4 items-center justify-center">
<i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>

<div className="flex items-center justify-between py-6 border-b border-slate-100 group">
<div className="flex items-center gap-5">
<div className="h-24 w-24 bg-white border border-slate-100 rounded-xl shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] overflow-hidden flex-shrink-0 flex items-center justify-center p-2.5 group-hover:border-slate-300 transition-colors">
<img alt="Method MR305" className="w-full h-full object-contain mix-blend-multiply hue-rotate-180" src="https://images.unsplash.com/photo-1601026967622-dfb8ae42353a?w=400&amp;q=80"/>
</div>
<div className="flex flex-col justify-center">
<h4 className="font-medium text-[#0A1628] mb-1.5 text-lg tracking-tight">Method MR305 NV</h4>
<p className="text-sm text-slate-500 mb-2.5 flex items-center gap-1.5">17x8.5 <span className="text-slate-300">•</span> 6x139.7 <span className="text-slate-300">•</span> Matte Black</p>
<div className="text-base font-medium text-[#D4AF37] tabular-nums">$242.00</div>
</div>
</div>
<button className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-colors ml-4 flex-shrink-0">
<i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>

<div className="flex items-center justify-between py-6 group">
<div className="flex items-center gap-5">
<div className="h-24 w-24 bg-white border border-slate-100 rounded-xl shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] overflow-hidden flex-shrink-0 flex items-center justify-center p-2.5 group-hover:border-slate-300 transition-colors">
<img alt="American Racing" className="w-full h-full object-contain grayscale mix-blend-multiply" src="https://images.unsplash.com/photo-1605388252472-ec598a9db158?w=400&amp;q=80"/>
</div>
<div className="flex flex-col justify-center">
<h4 className="font-medium text-[#0A1628] mb-1.5 text-lg tracking-tight">American Racing Torq</h4>
<p className="text-sm text-slate-500 mb-2.5 flex items-center gap-1.5">15x8 <span className="text-slate-300">•</span> 5x4.5 <span className="text-slate-300">•</span> Polished</p>
<div className="text-base font-medium text-[#D4AF37] tabular-nums">$155.00</div>
</div>
</div>
<button className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-colors ml-4 flex-shrink-0">
<i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-20 text-slate-800 relative">

<div className="absolute inset-0 bg-[#F8FAFC]/50 pointer-events-none" style={{backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0A1628]">Recent Orders</h2>
<a className="text-[#D4AF37] hover:text-[#E5C158] text-base font-medium transition-colors duration-300 pb-1 flex items-center gap-2 group" href="#">
                    View All History <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="2"></i>
</a>
</div>
<div className="flex flex-col gap-5">

<div className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 transition-all duration-300 border-l-4 border-l-[#D4AF37] border-y border-r border-slate-100 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group relative overflow-hidden">
<div className="flex flex-col md:w-48 shrink-0">
<span className="text-[#0A1628] font-semibold text-lg tracking-tight tabular-nums">ORD-99321</span>
<span className="text-slate-500 text-sm mt-1 tabular-nums">Oct 24, 2026</span>
</div>
<div className="flex-1 min-w-0">
<span className="text-[#0A1628] font-medium text-base truncate block">4x Wheels, 1x Install Kit</span>
</div>
<div className="md:w-32 text-left md:text-right shrink-0">
<span className="text-[#0A1628] font-semibold text-2xl tracking-tight tabular-nums">$716.00</span>
</div>
<div className="md:w-36 flex justify-start md:justify-center shrink-0">
<span className="bg-[#D4AF37] text-[#0A1628] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">Processing</span>
</div>
<div className="md:w-32 flex justify-start md:justify-end mt-2 md:mt-0 shrink-0">
<button className="bg-[#D4AF37] text-[#0A1628] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#E5C158] transition-colors shadow-md shadow-[#D4AF37]/20 w-full md:w-auto text-center">Reorder</button>
</div>
</div>

<div className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 transition-all duration-300 border-l-4 border-l-[#D4AF37] border-y border-r border-slate-100 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group relative overflow-hidden">
<div className="flex flex-col md:w-48 shrink-0">
<span className="text-[#0A1628] font-semibold text-lg tracking-tight tabular-nums">ORD-99285</span>
<span className="text-slate-500 text-sm mt-1 tabular-nums">Oct 21, 2026</span>
</div>
<div className="flex-1 min-w-0">
<span className="text-[#0A1628] font-medium text-base truncate block">2x Suspension Kits</span>
</div>
<div className="md:w-32 text-left md:text-right shrink-0">
<span className="text-[#0A1628] font-semibold text-2xl tracking-tight tabular-nums">$1,240.50</span>
</div>
<div className="md:w-36 flex justify-start md:justify-center shrink-0">
<span className="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">Shipped</span>
</div>
<div className="md:w-32 flex justify-start md:justify-end mt-2 md:mt-0 shrink-0">
<button className="bg-[#D4AF37] text-[#0A1628] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#E5C158] transition-colors shadow-md shadow-[#D4AF37]/20 w-full md:w-auto text-center">Reorder</button>
</div>
</div>

<div className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 transition-all duration-300 border-l-4 border-l-[#D4AF37] border-y border-r border-slate-100 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group relative overflow-hidden">
<div className="flex flex-col md:w-48 shrink-0">
<span className="text-[#0A1628] font-semibold text-lg tracking-tight tabular-nums">ORD-99102</span>
<span className="text-slate-500 text-sm mt-1 tabular-nums">Oct 15, 2026</span>
</div>
<div className="flex-1 min-w-0">
<span className="text-[#0A1628] font-medium text-base truncate block">8x Tires (275/55R20)</span>
</div>
<div className="md:w-32 text-left md:text-right shrink-0">
<span className="text-[#0A1628] font-semibold text-2xl tracking-tight tabular-nums">$1,850.00</span>
</div>
<div className="md:w-36 flex justify-start md:justify-center shrink-0">
<span className="bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">Delivered</span>
</div>
<div className="md:w-32 flex justify-start md:justify-end mt-2 md:mt-0 shrink-0">
<button className="bg-[#D4AF37] text-[#0A1628] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#E5C158] transition-colors shadow-md shadow-[#D4AF37]/20 w-full md:w-auto text-center">Reorder</button>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-gradient-to-br from-[#0A1628] to-[#162033] pt-20 pb-20 relative">

<div className="max-w-7xl mx-auto px-4 md:px-8 mb-10 relative z-10">
<div className="text-[#D4AF37] text-xs font-medium tracking-widest uppercase mb-3">Resource Hub</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-3">Download Center</h2>
<p className="text-[#B8C5D6] text-base md:text-lg font-light">Access invoices, catalogs, and technical docs.</p>
</div>

<div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-6 auto-rows-[220px]">

<div className="lg:col-span-2 lg:row-span-2 md:p-10 flex flex-col overflow-hidden group hover:border-[#D4AF37]/50 transition-colors bg-white/5 border-[#2D4A6F] border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-xl backdrop-blur-md">
<div className="absolute top-8 right-8 bg-[#D4AF37] text-[#0A1628] text-xs font-bold tracking-wider px-3 py-1.5 rounded-full z-20 uppercase shadow-lg shadow-[#D4AF37]/30">NEW</div>
<div className="relative z-20 w-full md:w-[60%] mt-auto pb-4">
<div className="text-[#D4AF37] mb-4">
<iconify-icon className="text-4xl" icon="solar:book-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight leading-tight">Product Catalogs</h3>
<p className="text-[#B8C5D6] text-base mb-8">2026 Wheel Catalog v2.3 <br/> Complete spec guide and fitment data.</p>
<button className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A1628] transition-colors duration-300 px-8 py-3.5 rounded-full text-sm font-semibold w-fit flex items-center gap-2">
                            Download Latest <iconify-icon className="text-lg" icon="solar:download-linear"></iconify-icon>
</button>
</div>

<div className="absolute right-[-10%] bottom-[-10%] w-[60%] h-[110%] z-10 transform group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-700 ease-out hidden md:block">
<div className="overflow-hidden shadow-black/50 w-full h-full relative">
</div>
</div>
</div>

<div className="lg:col-span-2 lg:row-span-1 flex flex-col sm:flex-row sm:items-center group hover:border-[#D4AF37]/50 transition-colors bg-white/5 border-[#2D4A6F] border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-lg backdrop-blur-md justify-between">
<div className="flex items-center gap-6 mb-6 sm:mb-0">
<div className="w-16 h-16 bg-[#0A1628] border border-[#D4AF37]/30 rounded-2xl flex items-center justify-center text-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.15)] shrink-0 group-hover:scale-105 transition-transform">
<iconify-icon className="text-3xl" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<h3 className="text-xl font-medium text-white tracking-tight">Invoices &amp; Statements</h3>
<p className="text-[#B8C5D6] text-sm mt-1.5 tabular-nums font-light">24 Documents available</p>
</div>
</div>
<a className="text-[#D4AF37] hover:text-[#E5C158] text-sm font-semibold flex items-center gap-2 group/link shrink-0" href="#">
                        View History <i className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>

<div className="lg:col-span-1 lg:row-span-1 bg-white/5 backdrop-blur-md border border-[#2D4A6F] rounded-3xl p-8 flex flex-col justify-between group hover:border-[#D4AF37]/50 transition-colors shadow-lg">
<div className="">
<div className="w-12 h-12 bg-[#0A1628] border border-[#D4AF37]/30 rounded-xl flex items-center justify-center text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.15)] mb-5 group-hover:rotate-12 transition-transform">
<iconify-icon className="text-2xl" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">Technical Specs</h3>
<p className="text-[#B8C5D6] text-sm mt-1.5 tabular-nums font-light">156 Files (PDF/DWG)</p>
</div>
<a className="text-[#D4AF37] hover:text-[#E5C158] text-sm font-semibold flex items-center gap-1.5 w-fit mt-4 group/link" href="#">
                        Browse Library <i className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>

<div className="lg:col-span-1 lg:row-span-1 bg-white/5 backdrop-blur-md border border-[#2D4A6F] rounded-3xl p-8 flex flex-col justify-between group hover:border-[#D4AF37]/50 transition-colors shadow-lg">
<div>
<div className="w-12 h-12 bg-[#0A1628] border border-[#D4AF37]/30 rounded-xl flex items-center justify-center text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.15)] mb-5 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">Certifications</h3>
<p className="text-[#B8C5D6] text-sm mt-1.5 font-light">ISO &amp; Compliance</p>
</div>
<a className="text-[#D4AF37] hover:text-[#E5C158] text-sm font-semibold flex items-center gap-1.5 w-fit mt-4 group/link" href="#">
                        View Certificates <i className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>

</section>

<section className="bg-[#0A1628] py-24 relative overflow-hidden">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(to right, #D4AF37 1px, transparent 1px)', backgroundSize: '64px 64px'}}></div>
<div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">Partner Support</h2>
<p className="text-[#B8C5D6] text-lg mb-16 font-light">Dedicated wholesale assistance.</p>
<div className="space-y-12">

<div className="flex items-start gap-6 group">
<div className="mt-1">
<iconify-icon className="text-4xl text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-3xl md:text-4xl font-medium text-white tracking-tight tabular-nums">630-349-8600</div>
<div className="text-sm text-[#B8C5D6] mt-2 font-medium uppercase tracking-widest">Priority Line</div>
</div>
</div>

<div className="flex items-start gap-6 group">
<div className="mt-1">
<iconify-icon className="text-4xl text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-2xl md:text-3xl font-medium text-white tracking-tight">wholesale@company.com</div>
<div className="text-sm text-[#B8C5D6] mt-2 font-medium uppercase tracking-widest">24/7 Monitored</div>
</div>
</div>

<div className="flex items-start gap-6 group">
<div className="mt-1">
<iconify-icon className="text-4xl text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-xl md:text-2xl font-medium text-white tracking-tight">Chicago, IL Warehouse</div>
<div className="text-sm text-[#B8C5D6] mt-2 font-medium uppercase tracking-widest">Will-call pickup available</div>
</div>
</div>
</div>
</div>

<div className="relative w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto">

<div className="absolute -inset-2 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent blur-3xl rounded-full opacity-60 pointer-events-none"></div>
<div className="bg-white/[0.03] backdrop-blur-[20px] border border-[#D4AF37]/30 rounded-[2rem] p-8 md:p-12 relative z-10 shadow-2xl shadow-black/50">
<h3 className="text-2xl font-semibold text-white mb-10 tracking-tight">Quick Support Ticket</h3>
<form className="space-y-8">
<div className="relative">
<select className="w-full bg-transparent border-t-0 border-x-0 border-b border-[#D4AF37]/50 text-white pb-3 px-0 focus:ring-0 focus:border-[#E5C158] transition-colors appearance-none cursor-pointer text-base font-light outline-none select-glass">
<option className="text-slate-400" disabled="" selected="" value="">Select Topic</option>
<option className="bg-[#0A1628] text-white">Billing Issue</option>
<option className="bg-[#0A1628] text-white">Order Status</option>
<option className="bg-[#0A1628] text-white">Technical Fitment</option>
<option className="bg-[#0A1628] text-white">Return Request</option>
</select>
</div>
<div>
<textarea className="w-full bg-transparent border-t-0 border-x-0 border-b border-[#D4AF37]/50 text-white pb-3 px-0 focus:ring-0 focus:border-[#E5C158] transition-colors resize-none placeholder-white/30 text-base font-light outline-none" placeholder="How can we help?" rows="4"></textarea>
</div>
<button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#E5C158] text-[#0A1628] py-4 rounded-full text-base font-semibold hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all duration-300 mt-4" type="button">
                                Send Request
                            </button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#0A1628] pt-16 pb-8 border-t border-[#D4AF37]/20">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-5">
<div className="text-3xl font-medium tracking-tighter text-white">WHL <span className="text-[#D4AF37]">SL</span></div>
<p className="text-base text-[#B8C5D6] leading-relaxed">Premium B2B portal for automotive parts distribution. Empowering dealers with data and speed.</p>
<div className="flex gap-4 pt-2">
<a className="text-[#B8C5D6] hover:text-[#D4AF37] hover:scale-110 transition-all duration-300" href="#">
<i className="w-5 h-5" data-lucide="globe" strokeWidth="1.5"></i>
</a>
<a className="text-[#B8C5D6] hover:text-[#D4AF37] hover:scale-110 transition-all duration-300" href="#">
<i className="w-5 h-5" data-lucide="link" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div>
<h4 className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase mb-6">Portal Links</h4>
<ul className="space-y-4 text-base">
<li><a className="text-white hover:text-[#D4AF37] transition-colors duration-300 hover:underline decoration-[#D4AF37] underline-offset-4" href="#">Dashboard</a></li>
<li><a className="text-white hover:text-[#D4AF37] transition-colors duration-300 hover:underline decoration-[#D4AF37] underline-offset-4" href="#">Full Catalog</a></li>
<li><a className="text-white hover:text-[#D4AF37] transition-colors duration-300 hover:underline decoration-[#D4AF37] underline-offset-4" href="#">Order Status</a></li>
</ul>
</div>

<div className="">
<h4 className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase mb-6">Account</h4>
<ul className="space-y-4 text-base">
<li><a className="text-white hover:text-[#D4AF37] transition-colors duration-300" href="#">Company Profile</a></li>
<li className=""><a className="text-white hover:text-[#D4AF37] transition-colors duration-300" href="#">Payment Terms</a></li>
<li><a className="text-white hover:text-[#D4AF37] transition-colors duration-300" href="#">Saved Addresses</a></li>
</ul>
</div>

<div className="space-y-5">
<h4 className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase mb-6">Support Center</h4>
<div>
<div className="text-[#B8C5D6] text-xs tracking-widest uppercase mb-1.5">Dealer Hotline</div>
<div className="text-white text-xl font-medium tracking-tight">630-349-8600</div>
</div>
<div>
<div className="text-[#B8C5D6] text-xs tracking-widest uppercase mb-1.5">Email Support</div>
<div className="text-white text-base">wholesale@company.com</div>
</div>
<div className="">
<div className="text-[#B8C5D6] text-xs tracking-widest uppercase mb-1.5">Hours</div>
<div className="text-white text-base">Mon-Fri: 8am - 6pm CST</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[#2D4A6F] text-sm text-[#B8C5D6]">
<div>© 2026 Wholesale Portal. All Rights Reserved.</div>
<div className="flex gap-6">
<a className="hover:text-[#D4AF37] transition-colors duration-300" href="#">Privacy Policy</a>
<a className="hover:text-[#D4AF37] transition-colors duration-300" href="#">Terms of Service</a>
<a className="hover:text-[#D4AF37] transition-colors duration-300" href="#">Shipping Policy</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
