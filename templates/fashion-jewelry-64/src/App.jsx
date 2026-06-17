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
      

<section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#EEEEE9]">

<div className="absolute inset-0 z-0">
<img alt="Fashion Jewelry Collection" className="w-full h-full object-cover opacity-90 object-center" src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-[#EEEEE9]/80 backdrop-blur-[2px]"></div>
</div>
<div className="relative z-10 container mx-auto px-6 md:px-12 text-center max-w-5xl fade-in-up">

<h1 className="text-[#211E1F] text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] mb-6">
                Global Fashion <br className="hidden md:block"/>Jewelry Wholesale Platform
            </h1>

<p className="text-[#504C4D] text-lg md:text-xl font-medium mb-10 tracking-tight">
                Factory Direct Supply <span className="text-[#E49A6B] mx-2">·</span> Global Shipping <span className="text-[#E49A6B] mx-2">·</span> Flexible MOQ <span className="text-[#E49A6B] mx-2">·</span> International Certification
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
<button className="bg-[#211E1F] text-white px-8 py-4 rounded-full font-medium hover:bg-[#E49A6B] transition-colors duration-300 flex items-center gap-2 group w-full sm:w-auto justify-center">
<span>View Hot Selling Products</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="20"></span>
</button>
<button className="bg-white border border-[#211E1F]/20 text-[#211E1F] px-8 py-4 rounded-full font-medium hover:border-[#211E1F] transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center">
<span>Get Wholesale Quote</span>
<span className="iconify" data-icon="lucide:file-text" data-width="20"></span>
</button>
</div>

<div className="flex flex-wrap justify-center gap-4 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:flex-col md:items-end md:gap-3">
<div className="bg-white/90 backdrop-blur-sm border border-gray-200 px-4 py-2 rounded-lg shadow-sm flex items-center gap-2 text-sm font-medium text-[#211E1F] hover-lift">
<span className="iconify text-[#E49A6B]" data-icon="lucide:layers" data-width="18"></span>
                    Accept Mixed Batch
                </div>
<div className="bg-white/90 backdrop-blur-sm border border-gray-200 px-4 py-2 rounded-lg shadow-sm flex items-center gap-2 text-sm font-medium text-[#211E1F] hover-lift">
<span className="iconify text-[#E49A6B]" data-icon="lucide:refresh-cw" data-width="18"></span>
                    7-Day Replenishment
                </div>
<div className="bg-white/90 backdrop-blur-sm border border-gray-200 px-4 py-2 rounded-lg shadow-sm flex items-center gap-2 text-sm font-medium text-[#211E1F] hover-lift">
<span className="iconify text-[#E49A6B]" data-icon="lucide:shield-check" data-width="18"></span>
                    CE/RoHS Certified
                </div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-gray-100">
<div className="container mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">

<div className="group flex flex-col items-start p-4 rounded-xl transition-all duration-300 hover:bg-[#EEEEE9]">
<div className="w-12 h-12 rounded-full bg-[#EEEEE9] group-hover:bg-white flex items-center justify-center text-[#E49A6B] mb-4 transition-colors">
<span className="iconify" data-icon="lucide:factory" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-[#211E1F] font-semibold text-lg mb-2">Factory Direct Pricing</h3>
<p className="text-sm text-[#504C4D] leading-relaxed">Source supply chain, no middlemen, <span className="text-[#AD5207] font-medium">30%+ cost saving</span>, tiered pricing.</p>
</div>

<div className="group flex flex-col items-start p-4 rounded-xl transition-all duration-300 hover:bg-[#EEEEE9]">
<div className="w-12 h-12 rounded-full bg-[#EEEEE9] group-hover:bg-white flex items-center justify-center text-[#E49A6B] mb-4 transition-colors">
<span className="iconify" data-icon="lucide:sparkles" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-[#211E1F] font-semibold text-lg mb-2">Trendy &amp; Diverse</h3>
<p className="text-sm text-[#504C4D] leading-relaxed"><span className="text-[#AD5207] font-medium">50+ new styles/month</span>, fit EU/US trends (minimalist, boho, luxury).</p>
</div>

<div className="group flex flex-col items-start p-4 rounded-xl transition-all duration-300 hover:bg-[#EEEEE9]">
<div className="w-12 h-12 rounded-full bg-[#EEEEE9] group-hover:bg-white flex items-center justify-center text-[#E49A6B] mb-4 transition-colors">
<span className="iconify" data-icon="lucide:shopping-cart" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-[#211E1F] font-semibold text-lg mb-2">Flexible MOQ</h3>
<p className="text-sm text-[#504C4D] leading-relaxed">MOQ <span className="text-[#AD5207] font-medium">10pcs/style</span>, mixed batch available, low trial cost.</p>
</div>

<div className="group flex flex-col items-start p-4 rounded-xl transition-all duration-300 hover:bg-[#EEEEE9]">
<div className="w-12 h-12 rounded-full bg-[#EEEEE9] group-hover:bg-white flex items-center justify-center text-[#E49A6B] mb-4 transition-colors">
<span className="iconify" data-icon="lucide:plane" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-[#211E1F] font-semibold text-lg mb-2">Global Logistics</h3>
<p className="text-sm text-[#504C4D] leading-relaxed">DHL/FedEx/UPS partners, door-to-door, fast delivery.</p>
</div>

<div className="group flex flex-col items-start p-4 rounded-xl transition-all duration-300 hover:bg-[#EEEEE9]">
<div className="w-12 h-12 rounded-full bg-[#EEEEE9] group-hover:bg-white flex items-center justify-center text-[#E49A6B] mb-4 transition-colors">
<span className="iconify" data-icon="lucide:brush" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-[#211E1F] font-semibold text-lg mb-2">OEM/ODM Service</h3>
<p className="text-sm text-[#504C4D] leading-relaxed">Custom logo/packaging, design customization, brand differentiation.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#EEEEE9]">
<div className="container mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<h2 className="text-[#211E1F] text-3xl md:text-4xl font-semibold tracking-tight">Wholesale Policies</h2>
<div className="mt-4 md:mt-0 flex gap-2">
<span className="bg-white px-3 py-1 rounded text-xs font-medium text-[#AD5207] border border-[#AD5207]/20">Transparent</span>
<span className="bg-white px-3 py-1 rounded text-xs font-medium text-[#AD5207] border border-[#AD5207]/20">Standardized</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-4">
<span className="iconify text-[#E49A6B]" data-icon="lucide:scale" data-width="24"></span>
<h4 className="text-[#211E1F] font-semibold text-lg">MOQ Rules</h4>
</div>
<ul className="text-sm space-y-2 text-[#504C4D]">
<li className="flex gap-2"><span className="text-[#E49A6B]">•</span> Basic MOQ 10pcs/style.</li>
<li className="flex gap-2"><span className="text-[#E49A6B]">•</span> Mixed batch ≥ $500 total.</li>
<li className="flex gap-2"><span className="text-[#E49A6B]">•</span> Bulk order (≥500pcs) flexible MOQ, contact sales.</li>
</ul>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-4">
<span className="iconify text-[#E49A6B]" data-icon="lucide:tag" data-width="24"></span>
<h4 className="text-[#211E1F] font-semibold text-lg">Pricing System</h4>
</div>
<ul className="text-sm space-y-2 text-[#504C4D]">
<li className="flex justify-between border-b border-gray-50 pb-1"><span>10-50pcs</span> <span className="font-medium text-[#211E1F]">$X/pcs</span></li>
<li className="flex justify-between border-b border-gray-50 pb-1"><span>51-200pcs</span> <span className="font-medium text-[#211E1F]">$X/pcs</span></li>
<li className="flex justify-between"><span>≥200pcs</span> <span className="font-medium text-[#211E1F]">$X/pcs</span></li>
<li className="text-xs text-gray-400 mt-2">*Excl. tax &amp; shipping. Duty borne by buyer.</li>
</ul>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-4">
<span className="iconify text-[#E49A6B]" data-icon="lucide:credit-card" data-width="24"></span>
<h4 className="text-[#211E1F] font-semibold text-lg">Payment Terms</h4>
</div>
<ul className="text-sm space-y-2 text-[#504C4D]">
<li className="flex gap-2"><span className="text-[#E49A6B]">•</span> T/T (30% deposit, 70% before shipment).</li>
<li className="flex gap-2"><span className="text-[#E49A6B]">•</span> L/C acceptable for bulk order.</li>
<li className="flex gap-2"><span className="text-[#E49A6B]">•</span> Supported: HSBC / Citi Bank / Alipay Global.</li>
</ul>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-4">
<span className="iconify text-[#E49A6B]" data-icon="lucide:truck" data-width="24"></span>
<h4 className="text-[#211E1F] font-semibold text-lg">Shipping &amp; Logistics</h4>
</div>
<ul className="text-sm space-y-2 text-[#504C4D]">
<li className="flex gap-2"><span className="text-[#E49A6B]">•</span> Stock: 48hrs. Custom: 7-15 workdays.</li>
<li className="flex gap-2"><span className="text-[#E49A6B]">•</span> DHL/FedEx/UPS (3-7 days).</li>
<li className="flex gap-2"><span className="text-[#E49A6B]">•</span> Sea shipping for bulk (20-35 days).</li>
<li className="text-xs text-gray-400">Includes commercial invoice &amp; packing list.</li>
</ul>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-4">
<span className="iconify text-[#E49A6B]" data-icon="lucide:rotate-ccw" data-width="24"></span>
<h4 className="text-[#211E1F] font-semibold text-lg">Return &amp; Refund</h4>
</div>
<ul className="text-sm space-y-2 text-[#504C4D]">
<li className="flex gap-2"><span className="text-[#E49A6B]">•</span> Quality: 7-day feedback, free return.</li>
<li className="flex gap-2"><span className="text-[#E49A6B]">•</span> Non-quality: Exchange only (unopened).</li>
<li className="text-xs text-gray-400">Buyer bears shipping + 10% restocking fee for non-quality returns.</li>
</ul>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-20 h-20 bg-[#E49A6B]/10 rounded-full"></div>
<div className="flex items-center gap-3 mb-4 relative z-10">
<span className="iconify text-[#E49A6B]" data-icon="lucide:pen-tool" data-width="24"></span>
<h4 className="text-[#211E1F] font-semibold text-lg">Custom Service</h4>
</div>
<div className="relative z-10">
<div className="flex items-center text-xs text-[#504C4D] mb-3">
<span>Consult</span> <span className="mx-1 text-[#E49A6B]">→</span>
<span>Design</span> <span className="mx-1 text-[#E49A6B]">→</span>
<span>Sample</span> <span className="mx-1 text-[#E49A6B]">→</span>
<span>Prod.</span>
</div>
<p className="text-sm text-[#504C4D]">Design/mold fee negotiable, exempt for bulk order.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="container mx-auto px-6 md:px-12">

<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
<h2 className="text-[#211E1F] text-3xl font-semibold tracking-tight">Selected Products</h2>
<div className="flex flex-wrap gap-3">

<div className="relative group">
<button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm font-medium hover:border-[#211E1F] transition-colors">
                            Style: All <span className="iconify" data-icon="lucide:chevron-down" data-width="14"></span>
</button>
</div>

<div className="relative group">
<button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm font-medium hover:border-[#211E1F] transition-colors">
                            Material: Sterling Silver <span className="iconify" data-icon="lucide:chevron-down" data-width="14"></span>
</button>
</div>

<div className="relative group">
<button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm font-medium hover:border-[#211E1F] transition-colors">
                            Market: EU/US <span className="iconify" data-icon="lucide:chevron-down" data-width="14"></span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-[#EEEEE9] mb-4">
<img alt="Gold Chain" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<span className="absolute top-3 left-3 bg-[#211E1F] text-white text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-sm">Hot Sale</span>

<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
<button className="bg-white text-[#211E1F] p-3 rounded-full hover:bg-[#E49A6B] hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:eye" data-width="20"></span>
</button>
<button className="bg-[#211E1F] text-white p-3 rounded-full hover:bg-[#E49A6B] transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="20"></span>
</button>
</div>
</div>
<h3 className="text-[#211E1F] font-medium text-base mb-1">Minimalist Gold Layered Chain</h3>
<p className="text-xs text-[#504C4D] mb-2">Sterling Silver / 18k Plated</p>
<div className="flex justify-between items-center border-t border-gray-100 pt-2">
<span className="text-[#AD5207] font-semibold">$12.50 <span className="text-xs text-gray-400 font-normal">/pcs</span></span>
<span className="text-[10px] bg-[#EEEEE9] text-[#504C4D] px-2 py-1 rounded">MOQ: 10</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-[#EEEEE9] mb-4">
<img alt="Pearl Earrings" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-3 left-3 bg-[#E49A6B] text-white text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-sm">New Arrival</span>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
<button className="bg-white text-[#211E1F] p-3 rounded-full hover:bg-[#E49A6B] hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:eye" data-width="20"></span>
</button>
<button className="bg-[#211E1F] text-white p-3 rounded-full hover:bg-[#E49A6B] transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="20"></span>
</button>
</div>
</div>
<h3 className="text-[#211E1F] font-medium text-base mb-1">Baroque Pearl Drop Earrings</h3>
<p className="text-xs text-[#504C4D] mb-2">Freshwater Pearl / Brass</p>
<div className="flex justify-between items-center border-t border-gray-100 pt-2">
<span className="text-[#AD5207] font-semibold">$8.20 <span className="text-xs text-gray-400 font-normal">/pcs</span></span>
<span className="text-[10px] bg-[#EEEEE9] text-[#504C4D] px-2 py-1 rounded">MOQ: 20</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-[#EEEEE9] mb-4">
<img alt="Vintage Ring" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<span className="absolute top-3 left-3 bg-green-600 text-white text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-sm">In Stock</span>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
<button className="bg-white text-[#211E1F] p-3 rounded-full hover:bg-[#E49A6B] hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:eye" data-width="20"></span>
</button>
<button className="bg-[#211E1F] text-white p-3 rounded-full hover:bg-[#E49A6B] transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="20"></span>
</button>
</div>
</div>
<h3 className="text-[#211E1F] font-medium text-base mb-1">Vintage Chunky Gold Ring</h3>
<p className="text-xs text-[#504C4D] mb-2">Stainless Steel PVD</p>
<div className="flex justify-between items-center border-t border-gray-100 pt-2">
<span className="text-[#AD5207] font-semibold">$5.90 <span className="text-xs text-gray-400 font-normal">/pcs</span></span>
<span className="text-[10px] bg-[#EEEEE9] text-[#504C4D] px-2 py-1 rounded">MOQ: 10</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-[#EEEEE9] mb-4">
<img alt="Boho Bracelet" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
<button className="bg-white text-[#211E1F] p-3 rounded-full hover:bg-[#E49A6B] hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:eye" data-width="20"></span>
</button>
<button className="bg-[#211E1F] text-white p-3 rounded-full hover:bg-[#E49A6B] transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="20"></span>
</button>
</div>
</div>
<h3 className="text-[#211E1F] font-medium text-base mb-1">Boho Beaded Stackable Set</h3>
<p className="text-xs text-[#504C4D] mb-2">Glass Beads / Alloy</p>
<div className="flex justify-between items-center border-t border-gray-100 pt-2">
<span className="text-[#AD5207] font-semibold">$4.50 <span className="text-xs text-gray-400 font-normal">/set</span></span>
<span className="text-[10px] bg-[#EEEEE9] text-[#504C4D] px-2 py-1 rounded">MOQ: 50</span>
</div>
</div>
</div>
<div className="text-center mt-16">
<button className="border border-[#211E1F] text-[#211E1F] hover:bg-[#211E1F] hover:text-white px-10 py-3 rounded-full text-sm font-medium transition-all duration-300">
                    View All Products
                </button>
</div>
</div>
</section>

<section className="py-24 bg-[#EEEEE9]">
<div className="container mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="space-y-12">

<div>
<h3 className="text-[#211E1F] text-xl font-semibold mb-6">International Certifications</h3>
<div className="flex flex-wrap gap-4">
<div className="bg-white border border-gray-200 px-6 py-4 rounded-lg flex items-center gap-3 shadow-sm hover:border-[#E49A6B] cursor-pointer transition-colors">
<span className="iconify text-[#211E1F]" data-icon="lucide:award" data-width="24"></span>
<span className="font-medium text-[#211E1F]">CE Certified</span>
</div>
<div className="bg-white border border-gray-200 px-6 py-4 rounded-lg flex items-center gap-3 shadow-sm hover:border-[#E49A6B] cursor-pointer transition-colors">
<span className="iconify text-[#211E1F]" data-icon="lucide:leaf" data-width="24"></span>
<span className="font-medium text-[#211E1F]">RoHS Compliant</span>
</div>
<div className="bg-white border border-gray-200 px-6 py-4 rounded-lg flex items-center gap-3 shadow-sm hover:border-[#E49A6B] cursor-pointer transition-colors">
<span className="iconify text-[#211E1F]" data-icon="lucide:file-check" data-width="24"></span>
<span className="font-medium text-[#211E1F]">SGS Report</span>
</div>
</div>
</div>

<div>
<h3 className="text-[#211E1F] text-xl font-semibold mb-6">Overseas Cooperation</h3>
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative">
<div className="absolute top-6 right-6 text-[#E49A6B]">
<span className="iconify" data-icon="lucide:quote" data-width="32"></span>
</div>
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-gray-100 rounded-full overflow-hidden blur-[2px]">
<img alt="Client" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=100"/>
</div>
<div>
<p className="text-[#211E1F] font-medium">US Online Jewelry Seller</p>
<p className="text-xs text-[#504C4D]">Cooperation: 2 Years</p>
</div>
</div>
<p className="text-sm text-[#504C4D] italic">"Stable supply and fast delivery. The quality compliance has helped us grow our brand significantly in the US market."</p>
</div>
</div>
</div>

<div>
<h3 className="text-[#211E1F] text-xl font-semibold mb-6">Factory Strength</h3>
<div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-200 group cursor-pointer shadow-lg">
<img alt="Factory Floor" className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/30 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50 group-hover:bg-[#E49A6B] group-hover:border-[#E49A6B] transition-all">
<span className="iconify text-white" data-fill="currentColor" data-icon="lucide:play" data-width="24"></span>
</div>
</div>
<div className="absolute bottom-4 left-4 text-white text-sm font-medium bg-black/50 px-3 py-1 rounded backdrop-blur-sm">
                            Show mass production &amp; quality control
                        </div>
</div>
<div className="grid grid-cols-3 gap-4 mt-4">
<div className="bg-white p-3 rounded text-center border border-gray-200">
<span className="block text-xl font-semibold text-[#211E1F]">5000+</span>
<span className="text-xs text-[#504C4D]">Designs</span>
</div>
<div className="bg-white p-3 rounded text-center border border-gray-200">
<span className="block text-xl font-semibold text-[#211E1F]">200+</span>
<span className="text-xs text-[#504C4D]">Workers</span>
</div>
<div className="bg-white p-3 rounded text-center border border-gray-200">
<span className="block text-xl font-semibold text-[#211E1F]">48h</span>
<span className="text-xs text-[#504C4D]">Dispatch</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="container mx-auto px-6 md:px-12">
<div className="text-center mb-16">
<h2 className="text-[#211E1F] text-3xl md:text-4xl font-semibold tracking-tight mb-4">How to Order</h2>
<p className="text-[#504C4D]">Simple 4-step process to start your global business</p>
</div>
<div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-[2px] bg-gray-100 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-white border-2 border-[#EEEEE9] group-hover:border-[#E49A6B] flex items-center justify-center text-[#504C4D] group-hover:text-[#E49A6B] transition-colors duration-300 shadow-sm mb-6">
<span className="iconify" data-icon="lucide:message-circle" data-width="28"></span>
</div>
<h4 className="text-[#211E1F] font-semibold text-lg mb-2">1. Consultation</h4>
<p className="text-sm text-[#504C4D] leading-relaxed px-4">Contact sales, clarify category, quantity, and customization needs.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-white border-2 border-[#EEEEE9] group-hover:border-[#E49A6B] flex items-center justify-center text-[#504C4D] group-hover:text-[#E49A6B] transition-colors duration-300 shadow-sm mb-6">
<span className="iconify" data-icon="lucide:file-text" data-width="28"></span>
</div>
<h4 className="text-[#211E1F] font-semibold text-lg mb-2">2. Get Quote</h4>
<p className="text-sm text-[#504C4D] leading-relaxed px-4">Receive detailed quote, confirm MOQ, price, and delivery time.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-white border-2 border-[#EEEEE9] group-hover:border-[#E49A6B] flex items-center justify-center text-[#504C4D] group-hover:text-[#E49A6B] transition-colors duration-300 shadow-sm mb-6">
<span className="iconify" data-icon="lucide:credit-card" data-width="28"></span>
</div>
<h4 className="text-[#211E1F] font-semibold text-lg mb-2">3. Order &amp; Pay</h4>
<p className="text-sm text-[#504C4D] leading-relaxed px-4">Sign contract and arrange deposit or full payment.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-white border-2 border-[#EEEEE9] group-hover:border-[#E49A6B] flex items-center justify-center text-[#504C4D] group-hover:text-[#E49A6B] transition-colors duration-300 shadow-sm mb-6">
<span className="iconify" data-icon="lucide:package-check" data-width="28"></span>
</div>
<h4 className="text-[#211E1F] font-semibold text-lg mb-2">4. Shipment</h4>
<p className="text-sm text-[#504C4D] leading-relaxed px-4">Production, inspection, and shipping with tracking number.</p>
</div>
</div>
<div className="mt-16 flex justify-center">
<button className="bg-[#E49A6B] hover:bg-[#AD5207] text-white px-10 py-4 rounded-full font-medium transition-colors shadow-lg shadow-[#E49A6B]/20 flex items-center gap-2">
                    Start Consultation
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="20"></span>
</button>
</div>
</div>
</section>

    </>
  );
}
