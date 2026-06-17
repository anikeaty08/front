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



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
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
      

<nav className="absolute top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="text-[#C9D1D9]">
<i className="w-8 h-8" data-lucide="award"></i>
</div>
<div className="flex flex-col">
<span className="text-white text-xl font-medium tracking-tight uppercase leading-none">Kadsons</span>
<span className="text-[#C9D1D9] text-xs tracking-widest uppercase opacity-80">Since 1990</span>
</div>
</div>
<div className="hidden md:flex items-center gap-8 text-[#C9D1D9] text-sm font-medium">
<a className="text-white hover:text-[#3A6EA5] transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#">About Us</a>
<a className="hover:text-white transition-colors" href="#">Our Products</a>
<a className="hover:text-white transition-colors" href="#">Our Services</a>
<a className="hover:text-white transition-colors" href="#">Blog</a>
</div>
<div className="hidden md:flex items-center gap-6">
<button className="bg-[#3A6EA5] hover:bg-[#2C5686] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-[#3A6EA5]/25">
                    Contact Us
                </button>
<div className="relative text-white hover:text-[#C9D1D9] cursor-pointer">
<i className="w-5 h-5" data-lucide="shopping-cart"></i>
<span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-[#3A6EA5] text-[8px] font-bold text-white">0</span>
</div>
</div>
<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0F1E3A]">

<div className="absolute inset-0 z-0">
<img alt="Corporate Office" className="w-full h-full object-cover opacity-20 grayscale mix-blend-overlay" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#0F1E3A] via-[#0F1E3A]/90 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
<div className="max-w-2xl">
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                    Celebrating <br/> Excellence With <br/>
<span className="serif italic text-[#C9D1D9] font-normal">Premium Awards</span>
</h1>
<p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-lg">
                    Artisan quality for corporate milestones. Discover our bespoke collection of luxury trophies and executive gifts crafted with precision.
                </p>
<div className="flex flex-wrap gap-4">
<button className="bg-[#3A6EA5] hover:bg-[#2C5686] text-white px-8 py-3.5 rounded-full text-base font-medium transition-all shadow-lg shadow-[#3A6EA5]/20 flex items-center gap-2">
                        Explore Products <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="bg-transparent border border-[#C9D1D9]/30 hover:border-[#C9D1D9] text-[#C9D1D9] hover:text-white px-8 py-3.5 rounded-full text-base font-medium transition-all backdrop-blur-sm">
                        View Catalog
                    </button>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
<div>
<span className="text-[#3A6EA5] font-medium tracking-widest text-xs uppercase mb-3 block">Our Legacy</span>
<h2 className="text-4xl font-medium tracking-tight text-[#0F1E3A] mb-6">A Journey of Quality and Trust</h2>
<p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    Founded in the heart of Abu Dhabi in 1990, Al Shumookh Sports &amp; Gifts (Kadsons) started with a vision to provide the capital's corporations and sports organizations with unmatched recognition solutions.
                </p>
<p className="text-lg text-slate-600 leading-relaxed">
                    Over three decades, we have evolved from a local storefront into a premier regional partner for corporate gifting, precision engraving, and bespoke recognition awards. Our commitment to quality materials and meticulous craftsmanship remains at our core.
                </p>
</div>
<div className="relative pl-8 border-l border-slate-200 space-y-12">

<div className="relative">
<div className="absolute -left-[41px] top-1 bg-[#F4F7FB] border border-[#C9D1D9] rounded-full p-2">
<i className="w-4 h-4 text-[#3A6EA5]" data-lucide="building-2"></i>
</div>
<span className="text-[#3A6EA5] font-semibold text-sm">1990</span>
<h3 className="text-xl font-medium text-[#0F1E3A] mt-1">Founded in Abu Dhabi</h3>
<p className="text-base text-slate-500 mt-2">Established our first recognition center serving local entities.</p>
</div>

<div className="relative">
<div className="absolute -left-[41px] top-1 bg-[#F4F7FB] border border-[#C9D1D9] rounded-full p-2">
<i className="w-4 h-4 text-[#3A6EA5]" data-lucide="trending-up"></i>
</div>
<span className="text-[#3A6EA5] font-semibold text-sm">2005</span>
<h3 className="text-xl font-medium text-[#0F1E3A] mt-1">Expanded Operations</h3>
<p className="text-base text-slate-500 mt-2">Introduced automated precision printing &amp; engraving technologies.</p>
</div>

<div className="relative">
<div className="absolute -left-[41px] top-1 bg-[#F4F7FB] border border-[#C9D1D9] rounded-full p-2">
<i className="w-4 h-4 text-[#3A6EA5]" data-lucide="crown"></i>
</div>
<span className="text-[#3A6EA5] font-semibold text-sm">2015</span>
<h3 className="text-xl font-medium text-[#0F1E3A] mt-1">Major Corporate Partnerships</h3>
<p className="text-base text-slate-500 mt-2">Official supplier for UAE's top government entities.</p>
</div>

<div className="relative">
<div className="absolute -left-[41px] top-1 bg-[#F4F7FB] border border-[#C9D1D9] rounded-full p-2">
<i className="w-4 h-4 text-[#3A6EA5]" data-lucide="award"></i>
</div>
<span className="text-[#3A6EA5] font-semibold text-sm">2020</span>
<h3 className="text-xl font-medium text-[#0F1E3A] mt-1">30 Years of Excellence</h3>
<p className="text-base text-slate-500 mt-2">Celebrating three decades of legacy and growth.</p>
</div>
</div>
</div>
</section>

<section className="py-12 bg-[#F4F7FB] border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6 text-center">
<h3 className="serif text-2xl text-[#0F1E3A] mb-10 italic">Trusted by Industry Leaders</h3>
<div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="h-8 w-32 bg-[#0F1E3A]/20 rounded"></div>
<div className="h-10 w-10 bg-[#0F1E3A]/20 rounded-full"></div>
<div className="h-8 w-24 bg-[#0F1E3A]/20 rounded"></div>
<div className="h-8 w-32 bg-[#0F1E3A]/20 rounded"></div>
<div className="h-10 w-10 bg-[#0F1E3A]/20 rounded-full"></div>
<div className="h-8 w-28 bg-[#0F1E3A]/20 rounded"></div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-4xl font-medium tracking-tight text-[#0F1E3A]">Product Categories</h2>
</div>

<div className="flex flex-wrap justify-center gap-4 mb-16">
<button className="px-6 py-2 rounded-full border border-slate-200 text-slate-600 hover:border-[#3A6EA5] hover:text-[#3A6EA5] transition-colors text-sm font-medium">Flags and Poles</button>
<button className="px-6 py-2 rounded-full bg-[#3A6EA5] text-white shadow-md text-sm font-medium">Heritage</button>
<button className="px-6 py-2 rounded-full border border-slate-200 text-slate-600 hover:border-[#3A6EA5] hover:text-[#3A6EA5] transition-colors text-sm font-medium">Medals</button>
<button className="px-6 py-2 rounded-full border border-slate-200 text-slate-600 hover:border-[#3A6EA5] hover:text-[#3A6EA5] transition-colors text-sm font-medium">Keychains</button>
<button className="px-6 py-2 rounded-full border border-slate-200 text-slate-600 hover:border-[#3A6EA5] hover:text-[#3A6EA5] transition-colors text-sm font-medium">Apparels &amp; Tshirt</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group bg-white rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 overflow-hidden">
<div className="relative h-72 bg-gray-50 p-8 flex items-center justify-center">
<span className="absolute top-4 left-4 bg-[#0F1E3A] text-white text-[10px] uppercase font-bold px-2 py-1 tracking-wider">Best Seller</span>
<img alt="Award" className="max-h-full object-contain mix-blend-multiply filter grayscale group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-[#0F1E3A] mb-1">The Silver Summit</h3>
<p className="text-xs text-slate-500 mb-4 line-clamp-2">Premium silver-plated abstract design on a solid obsidian base.</p>
<div className="flex items-center justify-between">
<span className="text-[#0F1E3A] font-semibold">$1,299.00</span>
<button className="text-[#3A6EA5] hover:bg-[#3A6EA5]/10 p-2 rounded-full transition-colors">
<i className="w-4 h-4" data-lucide="eye"></i>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 overflow-hidden">
<div className="relative h-72 bg-gray-50 p-8 flex items-center justify-center">
<span className="absolute top-4 left-4 bg-[#C9D1D9] text-[#0F1E3A] text-[10px] uppercase font-bold px-2 py-1 tracking-wider">New</span>
<img alt="Award" className="max-h-full object-contain mix-blend-multiply filter grayscale group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1590845947698-8924d7409b56?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-[#0F1E3A] mb-1">Presidential Pillar</h3>
<p className="text-xs text-slate-500 mb-4 line-clamp-2">Hand-carved optical crystal with high-definition etching.</p>
<div className="flex items-center justify-between">
<span className="text-[#0F1E3A] font-semibold">$849.00</span>
<button className="text-[#3A6EA5] hover:bg-[#3A6EA5]/10 p-2 rounded-full transition-colors">
<i className="w-4 h-4" data-lucide="eye"></i>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 overflow-hidden">
<div className="relative h-72 bg-gray-50 p-8 flex items-center justify-center">
<span className="absolute top-4 left-4 bg-[#0F1E3A] text-white text-[10px] uppercase font-bold px-2 py-1 tracking-wider">Best Seller</span>
<img alt="Award" className="max-h-full object-contain mix-blend-multiply filter grayscale group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-[#0F1E3A] mb-1">Corporate Horizon</h3>
<p className="text-xs text-slate-500 mb-4 line-clamp-2">Sleek acrylic and metal fusion for modern businesses.</p>
<div className="flex items-center justify-between">
<span className="text-[#0F1E3A] font-semibold">$599.00</span>
<button className="text-[#3A6EA5] hover:bg-[#3A6EA5]/10 p-2 rounded-full transition-colors">
<i className="w-4 h-4" data-lucide="eye"></i>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 overflow-hidden">
<div className="relative h-72 bg-gray-50 p-8 flex items-center justify-center">
<span className="absolute top-4 left-4 bg-[#C9D1D9] text-[#0F1E3A] text-[10px] uppercase font-bold px-2 py-1 tracking-wider">New</span>
<img alt="Award" className="max-h-full object-contain mix-blend-multiply filter grayscale group-hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-[#0F1E3A] mb-1">Eagle's Honor</h3>
<p className="text-xs text-slate-500 mb-4 line-clamp-2">Detailed cast metal sculpture finished in antique silver.</p>
<div className="flex items-center justify-between">
<span className="text-[#0F1E3A] font-semibold">$1,499.00</span>
<button className="text-[#3A6EA5] hover:bg-[#3A6EA5]/10 p-2 rounded-full transition-colors">
<i className="w-4 h-4" data-lucide="eye"></i>
</button>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<button className="bg-[#3A6EA5] hover:bg-[#2C5686] text-white px-8 py-3 rounded-full text-sm font-medium transition-all shadow-md">
                View All Heritage Awards
            </button>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-4xl font-medium tracking-tight text-[#0F1E3A] mb-6">Our Specialized Services</h2>
<p className="text-lg text-slate-600 leading-relaxed">
<strong className="text-[#0F1E3A]">Kadsons</strong> provides end-to-end printing and customization services — from UV printing and embroidery to engraving and heat transfer — delivering high-quality solutions for businesses of all sizes.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

<div className="bg-[#F4F7FB] border border-slate-100 rounded-xl overflow-hidden group">
<div className="h-56 overflow-hidden relative">
<div className="absolute inset-0 bg-[#0F1E3A]/10 group-hover:bg-transparent transition-all z-10"></div>
<img alt="Screen Printing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-8 text-center">
<h3 className="text-xl font-medium text-[#0F1E3A] mb-3">Screen Printing</h3>
<p className="text-base text-slate-600 leading-relaxed">State-of-the-art screen printing for high-volume orders, ensuring durability and vibrant finishes.</p>
</div>
</div>

<div className="bg-[#F4F7FB] border border-slate-100 rounded-xl overflow-hidden group">
<div className="h-56 overflow-hidden relative">
<div className="absolute inset-0 bg-[#0F1E3A]/10 group-hover:bg-transparent transition-all z-10"></div>
<img alt="UV Printing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="p-8 text-center">
<h3 className="text-xl font-medium text-[#0F1E3A] mb-3">UV Printing</h3>
<p className="text-base text-slate-600 leading-relaxed">Direct-to-substrate printing technology for crystal, acrylic, and wood with photo-realistic quality.</p>
</div>
</div>

<div className="bg-[#F4F7FB] border border-slate-100 rounded-xl overflow-hidden group">
<div className="h-56 overflow-hidden relative">
<div className="absolute inset-0 bg-[#0F1E3A]/10 group-hover:bg-transparent transition-all z-10"></div>
<img alt="Embroidery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 text-center">
<h3 className="text-xl font-medium text-[#0F1E3A] mb-3">Embroidery</h3>
<p className="text-base text-slate-600 leading-relaxed">Premium thread work for corporate uniforms, caps, and promotional apparel in Sharjah and all over UAE.</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-[#F4F7FB] border border-slate-100 rounded-xl overflow-hidden group flex flex-col md:flex-row">
<div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
<div className="absolute inset-0 bg-[#0F1E3A]/10 group-hover:bg-transparent transition-all z-10"></div>
<img alt="Engraving" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="p-8 md:w-1/2 flex flex-col justify-center text-center md:text-left">
<h3 className="text-xl font-medium text-[#0F1E3A] mb-3">Engraving</h3>
<p className="text-base text-slate-600 leading-relaxed">Laser engraving on metal, glass, and wood for personalized touches on premium gifts.</p>
</div>
</div>

<div className="bg-[#F4F7FB] border border-slate-100 rounded-xl overflow-hidden group flex flex-col md:flex-row">
<div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
<div className="absolute inset-0 bg-[#0F1E3A]/10 group-hover:bg-transparent transition-all z-10"></div>
<img alt="Heat Transfer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="p-8 md:w-1/2 flex flex-col justify-center text-center md:text-left">
<h3 className="text-xl font-medium text-[#0F1E3A] mb-3">Heat Transfer Print</h3>
<p className="text-base text-slate-600 leading-relaxed">Custom logos or designs printed onto transfer paper and then inked thermally to fabrics.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F4F7FB]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-4xl font-medium tracking-tight text-[#0F1E3A] mb-4">Gallery</h2>
<p className="text-lg text-slate-600 max-w-2xl mx-auto">A showcase of our finest work, delivering high-quality solutions for businesses of all sizes.</p>
</div>
<div className="columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6">

<div className="break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
<img alt="Gallery" className="w-full object-cover grayscale hover:grayscale-0 transition duration-500" src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
<img alt="Gallery" className="w-full object-cover grayscale hover:grayscale-0 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
<img alt="Gallery" className="w-full object-cover grayscale hover:grayscale-0 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
<img alt="Gallery" className="w-full object-cover grayscale hover:grayscale-0 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
<img alt="Gallery" className="w-full object-cover grayscale hover:grayscale-0 transition duration-500" src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
<img alt="Gallery" className="w-full object-cover grayscale hover:grayscale-0 transition duration-500" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
<img alt="Gallery" className="w-full object-cover grayscale hover:grayscale-0 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
<img alt="Gallery" className="w-full object-cover grayscale hover:grayscale-0 transition duration-500" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium tracking-tight text-[#0F1E3A] mb-4">Trusted By Industry Leaders</h2>
<p className="text-lg text-slate-500 mb-16">Hear from the clients who grow with us.</p>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-[#F4F7FB] p-8 rounded-xl text-left border border-slate-100">
<div className="flex gap-1 text-[#3A6EA5] mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 mb-6 italic leading-relaxed">"The attention to detail on our annual corporate awards was impeccable. Kadsons captured our brand essence perfectly."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-[#C9D1D9] rounded-full flex items-center justify-center text-[#0F1E3A] font-bold text-xs">EN</div>
<div>
<p className="text-sm font-semibold text-[#0F1E3A]">Director of Marketing</p>
<p className="text-xs text-slate-500">Etihad Airways Partner</p>
</div>
</div>
</div>

<div className="bg-[#F4F7FB] p-8 rounded-xl text-left border border-slate-100">
<div className="flex gap-1 text-[#3A6EA5] mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 mb-6 italic leading-relaxed">"Consistently reliable and creative. We've been working with the Kadsons team for over a decade for all our sportswear."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-[#C9D1D9] rounded-full flex items-center justify-center text-[#0F1E3A] font-bold text-xs">AD</div>
<div>
<p className="text-sm font-semibold text-[#0F1E3A]">HR Manager</p>
<p className="text-xs text-slate-500">ADNOC Distribution</p>
</div>
</div>
</div>

<div className="bg-[#F4F7FB] p-8 rounded-xl text-left border border-slate-100">
<div className="flex gap-1 text-[#3A6EA5] mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 mb-6 italic leading-relaxed">"Fast turnaround and premium quality trophies. They handled our last-minute request with absolute professionalism."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-[#C9D1D9] rounded-full flex items-center justify-center text-[#0F1E3A] font-bold text-xs">MB</div>
<div>
<p className="text-sm font-semibold text-[#0F1E3A]">Events Coordinator</p>
<p className="text-xs text-slate-500">Mubadala Health</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F4F7FB]">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-center text-[#0F1E3A] mb-12">Blogs and Articles</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="aspect-video bg-slate-200 rounded-lg mb-4 overflow-hidden">
<img alt="Blog" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-[10px] text-[#3A6EA5] font-bold uppercase tracking-widest mb-2">April 2024 • Craftsmanship</div>
<h3 className="text-lg font-semibold text-[#0F1E3A] group-hover:text-[#3A6EA5] transition-colors mb-2">The Art of Metal Casting: From Molten Core to Mirror Finish</h3>
<p className="text-sm text-slate-500 line-clamp-2">Exploring the traditional foundry techniques that remain the cornerstone of high-prestige metal awards in the modern era.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-video bg-slate-200 rounded-lg mb-4 overflow-hidden">
<img alt="Blog" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale" src="https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-[10px] text-[#3A6EA5] font-bold uppercase tracking-widest mb-2">March 2024 • Trends</div>
<h3 className="text-lg font-semibold text-[#0F1E3A] group-hover:text-[#3A6EA5] transition-colors mb-2">Corporate Recognition Trends 2024: The Shift to Bespoke</h3>
<p className="text-sm text-slate-500 line-clamp-2">Why off-the-shelf recognition is fading in favor of custom-designed legacies that reflect specific organizational values.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-video bg-slate-200 rounded-lg mb-4 overflow-hidden">
<img alt="Blog" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-[10px] text-[#3A6EA5] font-bold uppercase tracking-widest mb-2">February 2024 • Technology</div>
<h3 className="text-lg font-semibold text-[#0F1E3A] group-hover:text-[#3A6EA5] transition-colors mb-2">Precision at Scale: Integrating UV Tech in Award Fabrication</h3>
<p className="text-sm text-slate-500 line-clamp-2">How advanced ultraviolet printing technology is revolutionizing the speed and detail of bespoke customization.</p>
</div>
</div>
<div className="text-center mt-12">
<button className="bg-[#3A6EA5] hover:bg-[#2C5686] text-white px-8 py-3 rounded-full text-sm font-medium transition-all shadow-md">
                    View All Blogs
                </button>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden">
<div className="absolute inset-0">
<img className="w-full h-full object-cover grayscale mix-blend-overlay opacity-30 bg-[#0F1E3A]" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#0F1E3A]/80"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="hidden lg:block">

</div>
<div className="bg-[#0F1E3A]/40 backdrop-blur-md border border-[#C9D1D9]/10 p-8 rounded-2xl shadow-2xl">
<h2 className="text-2xl font-semibold text-white mb-2 uppercase tracking-wide">Large Scale Commissions</h2>
<p className="text-sm text-[#C9D1D9] mb-8">Partner with us for corporate programs or government events. Our consultants provide professional assistance from concept to delivery.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[10px] uppercase font-bold text-[#C9D1D9] tracking-wider">Full Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#3A6EA5] transition-colors" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase font-bold text-[#C9D1D9] tracking-wider">Entity / Company</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#3A6EA5] transition-colors" placeholder="Organization Name" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase font-bold text-[#C9D1D9] tracking-wider">Email Address</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#3A6EA5] transition-colors" placeholder="office@organization.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase font-bold text-[#C9D1D9] tracking-wider">Project Details</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#3A6EA5] transition-colors" placeholder="Briefly describe your requirements..." rows="3"></textarea>
</div>
<button className="w-full bg-[#3A6EA5] hover:bg-[#2C5686] text-white font-medium py-3.5 rounded-lg transition-colors mt-4 text-sm uppercase tracking-wide">
                        Inquire for Commission
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-black text-[#C9D1D9] py-16 text-sm border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1">
<div className="flex items-center gap-2 mb-6">
<i className="w-8 h-8 text-[#3A6EA5]" data-lucide="award"></i>
<div className="flex flex-col">
<span className="text-white text-xl font-medium tracking-tight uppercase leading-none">Kadsons</span>
<span className="text-[#3A6EA5] text-[10px] tracking-widest uppercase">Since 1990</span>
</div>
</div>
<div className="flex gap-4">
<a className="text-[#3A6EA5] hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-[#3A6EA5] hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-[#3A6EA5] hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Quick Links</h4>
<ul className="space-y-3">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Our Products</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Other Pages</h4>
<ul className="space-y-3">
<li><a className="hover:text-white transition-colors" href="#">Shop</a></li>
<li><a className="hover:text-white transition-colors" href="#">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Our Clients</a></li>
<li><a className="hover:text-white transition-colors" href="#">Gift Collection</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Contact</h4>
<ul className="space-y-3 text-xs leading-relaxed">
<li className="uppercase tracking-wider font-semibold text-white">Al Shumookh Sports &amp; Gifts Shop</li>
<li>Fatima Bint Mubarak St - Abu Dhabi</li>
<li className="mt-4">Phone: +971 55 258 3032</li>
<li>Phone: 02 674 3558</li>
<li>info@kadsons.com</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-xs text-slate-500">
<p>Copyright ©2024 Kadsons. All Rights Reserved.</p>
</div>
</footer>


    </>
  );
}
