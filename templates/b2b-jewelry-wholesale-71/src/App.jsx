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
      

<div className="w-full max-w-7xl bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[90vh]">

<div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center space-x-2 shrink-0">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
<div className="ml-4 flex-1 bg-white border border-gray-200 rounded-md h-8 flex items-center px-3 text-xs text-gray-400 font-medium">
                wholesale.luxejewelry.b2b
            </div>
</div>

<div className="flex-1 overflow-y-auto custom-scroll relative">

<section className="relative pt-20 pb-16 px-6 md:px-12 lg:px-20 text-center">
<span className="text-[#E49A6B] text-xs font-medium uppercase tracking-widest mb-4 block">B2B Exclusive Partner Program</span>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#211E1F] tracking-tight leading-[1.1] mb-6 font-medium">
                    Artistry in Volume.<br/>Refined for Retail.
                </h1>
<p className="max-w-2xl mx-auto text-[#504C4D] text-lg font-light leading-relaxed mb-10">
                    Source premium fashion jewelry crafted with precision. We bridge the gap between artisanal aesthetics and scalable wholesale manufacturing.
                </p>
<div className="flex justify-center gap-4">
<button className="bg-[#211E1F] text-white px-8 py-3 text-sm font-medium hover:bg-[#333] transition-colors duration-300">
                        Apply for Wholesale
                    </button>
<button className="border border-[#211E1F] text-[#211E1F] px-8 py-3 text-sm font-medium hover:bg-gray-50 transition-colors duration-300">
                        Download Catalog
                    </button>
</div>
</section>

<section className="py-16 px-6 md:px-12 lg:px-20 border-t border-gray-100">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

<div className="group">
<div className="w-12 h-12 rounded-full bg-[#EEEEE9] flex items-center justify-center mb-6 group-hover:bg-[#E49A6B] transition-colors duration-500">
<span className="iconify text-[#211E1F] group-hover:text-white transition-colors duration-500" data-icon="lucide:gem" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-serif text-[#211E1F] font-medium mb-3">Master Craftsmanship</h3>
<p className="text-sm text-[#504C4D] leading-relaxed">
                            Hand-finished detailing on every piece, ensuring boutique quality at wholesale scale.
                        </p>
</div>

<div className="group">
<div className="w-12 h-12 rounded-full bg-[#EEEEE9] flex items-center justify-center mb-6 group-hover:bg-[#E49A6B] transition-colors duration-500">
<span className="iconify text-[#211E1F] group-hover:text-white transition-colors duration-500" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-serif text-[#211E1F] font-medium mb-3">Rapid Fulfillment</h3>
<p className="text-sm text-[#504C4D] leading-relaxed">
                            Optimized logistics ensuring 48-hour dispatch for in-stock collections globally.
                        </p>
</div>

<div className="group">
<div className="w-12 h-12 rounded-full bg-[#EEEEE9] flex items-center justify-center mb-6 group-hover:bg-[#E49A6B] transition-colors duration-500">
<span className="iconify text-[#211E1F] group-hover:text-white transition-colors duration-500" data-icon="lucide:palette" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-serif text-[#211E1F] font-medium mb-3">Trend Curation</h3>
<p className="text-sm text-[#504C4D] leading-relaxed">
                            Quarterly collections inspired by global runway trends and market analytics.
                        </p>
</div>

<div className="group">
<div className="w-12 h-12 rounded-full bg-[#EEEEE9] flex items-center justify-center mb-6 group-hover:bg-[#E49A6B] transition-colors duration-500">
<span className="iconify text-[#211E1F] group-hover:text-white transition-colors duration-500" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-serif text-[#211E1F] font-medium mb-3">Quality Guarantee</h3>
<p className="text-sm text-[#504C4D] leading-relaxed">
                            Hypoallergenic materials and long-lasting plating backed by our 1-year warranty.
                        </p>
</div>
</div>
</section>

<section className="py-16 px-6 md:px-12 lg:px-20">
<div className="flex justify-between items-end mb-10">
<h2 className="text-2xl md:text-3xl font-serif text-[#211E1F] tracking-tight">Curated Series</h2>
<a className="text-[#AD5207] text-sm font-medium hover:text-[#E49A6B] transition-colors flex items-center gap-1" href="#">
                        View Full Catalog <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[500px] md:h-[400px]">

<div className="relative group h-full w-full overflow-hidden bg-[#EEEEE9] cursor-pointer">
<img alt="Rings" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-white font-serif text-xl tracking-tight">Statement Rings</h3>
<p className="text-white/80 text-xs mt-1 font-light">Brass &amp; Gold Vermeil</p>
</div>
</div>

<div className="relative group h-full w-full overflow-hidden bg-[#EEEEE9] cursor-pointer">
<img alt="Necklaces" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-white font-serif text-xl tracking-tight">Layered Necklaces</h3>
<p className="text-white/80 text-xs mt-1 font-light">Chains &amp; Pendants</p>
</div>
</div>

<div className="relative group h-full w-full overflow-hidden bg-[#EEEEE9] cursor-pointer">
<img alt="Earrings" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-white font-serif text-xl tracking-tight">Sculptural Earrings</h3>
<p className="text-white/80 text-xs mt-1 font-light">Hoops &amp; Studs</p>
</div>
</div>

<div className="relative group h-full w-full overflow-hidden bg-[#EEEEE9] cursor-pointer">
<img alt="Bracelets" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-white font-serif text-xl tracking-tight">Fine Bracelets</h3>
<p className="text-white/80 text-xs mt-1 font-light">Cuffs &amp; Links</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 md:px-12 lg:px-20 bg-[#EEEEE9]">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-serif text-[#211E1F] tracking-tight mb-3">Wholesale Policies</h2>
<p className="text-[#504C4D] font-light">Transparent terms designed to support your business growth.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white p-8 border border-transparent hover:border-[#E49A6B] transition-colors duration-300">
<div className="flex items-center gap-3 mb-4">
<span className="iconify text-[#E49A6B]" data-icon="lucide:package-open" data-width="20"></span>
<h3 className="text-[#211E1F] font-serif font-medium text-lg">Minimum Orders</h3>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-[#504C4D]">
<span className="iconify mt-1 text-[#E49A6B]" data-icon="lucide:check" data-width="14"></span>
<span>First order MOQ: $500 USD</span>
</li>
<li className="flex items-start gap-2 text-sm text-[#504C4D]">
<span className="iconify mt-1 text-[#E49A6B]" data-icon="lucide:check" data-width="14"></span>
<span>Re-order MOQ: $300 USD</span>
</li>
<li className="flex items-start gap-2 text-sm text-[#504C4D]">
<span className="iconify mt-1 text-[#E49A6B]" data-icon="lucide:check" data-width="14"></span>
<span>Minimum 3 pieces per SKU</span>
</li>
</ul>
</div>

<div className="bg-white p-8 border border-transparent hover:border-[#E49A6B] transition-colors duration-300">
<div className="flex items-center gap-3 mb-4">
<span className="iconify text-[#E49A6B]" data-icon="lucide:percent" data-width="20"></span>
<h3 className="text-[#211E1F] font-serif font-medium text-lg">Volume Discounts</h3>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-[#504C4D]">
<span className="iconify mt-1 text-[#E49A6B]" data-icon="lucide:check" data-width="14"></span>
<span>Orders &gt; $2,000: 5% Off</span>
</li>
<li className="flex items-start gap-2 text-sm text-[#504C4D]">
<span className="iconify mt-1 text-[#E49A6B]" data-icon="lucide:check" data-width="14"></span>
<span>Orders &gt; $5,000: 10% Off + Free Shipping</span>
</li>
<li className="flex items-start gap-2 text-sm text-[#504C4D]">
<span className="iconify mt-1 text-[#E49A6B]" data-icon="lucide:check" data-width="14"></span>
<span>Exclusive tiered pricing for distributors</span>
</li>
</ul>
</div>

<div className="bg-white p-8 border border-transparent hover:border-[#E49A6B] transition-colors duration-300">
<div className="flex items-center gap-3 mb-4">
<span className="iconify text-[#E49A6B]" data-icon="lucide:truck" data-width="20"></span>
<h3 className="text-[#211E1F] font-serif font-medium text-lg">Shipping &amp; Duties</h3>
</div>
<p className="text-sm text-[#504C4D] leading-relaxed mb-3">
                                We ship via DHL/FedEx International Priority. Shipping costs are calculated at checkout based on weight and destination.
                            </p>
<p className="text-xs text-[#AD5207]">DDP (Delivered Duty Paid) options available for select regions.</p>
</div>

<div className="bg-white p-8 border border-transparent hover:border-[#E49A6B] transition-colors duration-300">
<div className="flex items-center gap-3 mb-4">
<span className="iconify text-[#E49A6B]" data-icon="lucide:refresh-cw" data-width="20"></span>
<h3 className="text-[#211E1F] font-serif font-medium text-lg">Returns &amp; Warranty</h3>
</div>
<p className="text-sm text-[#504C4D] leading-relaxed mb-3">
                                Damaged or defective items must be reported within 7 days of receipt. We provide a full replacement or credit note.
                            </p>
<p className="text-xs text-[#AD5207]">Restocking fee applies for non-defective returns.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 md:px-12 lg:px-20">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-serif text-[#211E1F] tracking-tight mb-3">Partnership Workflow</h2>
</div>
<div className="relative">

<div className="hidden lg:block absolute top-6 left-0 w-full h-[1px] bg-gray-200 -z-10"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

<div className="flex flex-col items-center text-center bg-white lg:bg-transparent">
<div className="w-12 h-12 rounded-full bg-[#211E1F] text-white flex items-center justify-center font-serif text-lg mb-6 border-4 border-white">1</div>
<h3 className="text-[#211E1F] font-medium mb-2">Application</h3>
<p className="text-sm text-[#504C4D] px-4">Submit your business credentials via our secure portal for verification.</p>
</div>

<div className="flex flex-col items-center text-center bg-white lg:bg-transparent">
<div className="w-12 h-12 rounded-full bg-white border border-[#E49A6B] text-[#E49A6B] flex items-center justify-center font-serif text-lg mb-6">2</div>
<h3 className="text-[#211E1F] font-medium mb-2">Account Approval</h3>
<p className="text-sm text-[#504C4D] px-4">Receive access to wholesale pricing and digital catalog within 24 hours.</p>
</div>

<div className="flex flex-col items-center text-center bg-white lg:bg-transparent">
<div className="w-12 h-12 rounded-full bg-white border border-[#E49A6B] text-[#E49A6B] flex items-center justify-center font-serif text-lg mb-6">3</div>
<h3 className="text-[#211E1F] font-medium mb-2">Order Placement</h3>
<p className="text-sm text-[#504C4D] px-4">Build your assortment online with real-time inventory visibility.</p>
</div>

<div className="flex flex-col items-center text-center bg-white lg:bg-transparent">
<div className="w-12 h-12 rounded-full bg-white border border-[#E49A6B] text-[#E49A6B] flex items-center justify-center font-serif text-lg mb-6">4</div>
<h3 className="text-[#211E1F] font-medium mb-2">Fulfillment</h3>
<p className="text-sm text-[#504C4D] px-4">Goods are quality checked, packed, and dispatched to your store.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 md:px-12 lg:px-20 bg-[#EEEEE9]">
<div className="flex flex-col lg:flex-row gap-12 items-start">
<div className="lg:w-1/3">
<span className="text-[#AD5207] text-xs font-medium uppercase tracking-widest mb-3 block">Success Stories</span>
<h2 className="text-3xl font-serif text-[#211E1F] tracking-tight mb-6">Trusted by Retailers Globally</h2>
<p className="text-[#504C4D] mb-8 leading-relaxed">
                            From independent boutiques in Paris to department stores in Tokyo, our partners value the consistency of our craft and the reliability of our service.
                        </p>
<a className="inline-flex items-center text-[#211E1F] font-medium border-b border-[#211E1F] pb-1 hover:text-[#AD5207] hover:border-[#AD5207] transition-colors" href="#">
                            Read more stories <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white p-8 shadow-sm">
<div className="flex items-center gap-1 mb-4 text-[#E49A6B]">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-[#504C4D] text-sm italic mb-6 leading-relaxed">"The quality-to-price ratio is unmatched. The 'Midnight' collection sold out in our Soho store within three days. Restocking was seamless."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-serif text-[#211E1F]">JS</div>
<div>
<p className="text-xs font-semibold text-[#211E1F]">Julia S.</p>
<p className="text-[10px] text-[#AD5207] uppercase tracking-wide">Owner, Aurelia Boutique</p>
</div>
</div>
</div>

<div className="bg-white p-8 shadow-sm">
<div className="flex items-center gap-1 mb-4 text-[#E49A6B]">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-[#504C4D] text-sm italic mb-6 leading-relaxed">"Transitioning to their wholesale platform saved us hours of admin work. The imagery provided makes marketing effortless."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-serif text-[#211E1F]">MR</div>
<div>
<p className="text-xs font-semibold text-[#211E1F]">Marcus R.</p>
<p className="text-[10px] text-[#AD5207] uppercase tracking-wide">Buyer, The Modern Chain</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-6 md:px-12 lg:px-20 border-t border-gray-100">
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 group">
<span className="iconify text-[#211E1F]" data-icon="lucide:award" data-width="24"></span>
<span className="text-sm font-semibold tracking-tighter text-[#211E1F]">ISO 9001:2015</span>
</div>
<div className="flex items-center gap-2 group">
<span className="iconify text-[#211E1F]" data-icon="lucide:globe" data-width="24"></span>
<span className="text-sm font-semibold tracking-tighter text-[#211E1F]">RJC CERTIFIED</span>
</div>
<div className="flex items-center gap-2 group">
<span className="iconify text-[#211E1F]" data-icon="lucide:droplet" data-width="24"></span>
<span className="text-sm font-semibold tracking-tighter text-[#211E1F]">SGS TESTED</span>
</div>
<div className="flex items-center gap-2 group">
<span className="iconify text-[#211E1F]" data-icon="lucide:leaf" data-width="24"></span>
<span className="text-sm font-semibold tracking-tighter text-[#211E1F]">ECO-FRIENDLY</span>
</div>
</div>
</section>

<section className="bg-[#211E1F] text-[#EEEEE9] py-16 px-6 text-center">
<h2 className="text-2xl md:text-3xl font-serif mb-4 tracking-tight">Ready to elevate your collection?</h2>
<p className="text-white/60 mb-8 max-w-lg mx-auto font-light">Join our network of 500+ global retailers. Apply today for exclusive access to wholesale pricing.</p>
<button className="bg-[#E49A6B] text-[#211E1F] px-8 py-3 text-sm font-medium hover:bg-[#d88c5e] transition-colors duration-300">
                    Apply Now
                </button>
</section>
</div>
</div>

    </>
  );
}
