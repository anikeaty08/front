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
      


<div className="bg-[#2D2B2A] text-[#FAF9F6] text-xs py-2 text-center tracking-wide font-light flex items-center justify-center gap-4 px-4">
<span>Complimentary shipping on orders over $150</span>
<a className="underline decoration-white/30 underline-offset-4 hover:decoration-white transition-colors hidden sm:inline-block" href="#">Shop New Arrivals</a>
</div>

<nav className="sticky top-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#EBE5DE] transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

<div className="flex items-center gap-4 lg:hidden">
<button aria-label="Menu" className="text-[#2D2B2A] hover:text-[#A89F91] transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button aria-label="Search" className="text-[#2D2B2A] hover:text-[#A89F91] transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
<a className="hover:text-[#A89F91] transition-colors" href="#shop">Shop</a>
<div className="group relative py-4">
<a className="hover:text-[#A89F91] transition-colors flex items-center gap-1" href="#collections">
                        Collections
                        <iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</a>
</div>
<a className="hover:text-[#A89F91] transition-colors text-[#A89F91]" href="#fit-quiz">Find Your Fit</a>
</div>

<a className="text-xl tracking-tighter uppercase font-medium absolute left-1/2 -translate-x-1/2" href="#">
                hvenx
            </a>

<div className="flex items-center gap-4 sm:gap-6">
<button aria-label="Search" className="hidden lg:block text-[#2D2B2A] hover:text-[#A89F91] transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<a aria-label="Account" className="hidden sm:block text-[#2D2B2A] hover:text-[#A89F91] transition-colors" href="#account">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
<a aria-label="Wishlist" className="hidden sm:block text-[#2D2B2A] hover:text-[#A89F91] transition-colors" href="#wishlist">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
<a aria-label="Cart" className="text-[#2D2B2A] hover:text-[#A89F91] transition-colors relative" href="#cart">
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="absolute -top-1 -right-1 bg-[#2D2B2A] text-white text-[0.65rem] w-4 h-4 flex items-center justify-center rounded-full font-medium">2</span>
</a>
</div>
</div>
</nav>

<header className="relative w-full h-[85vh] bg-[#EBE5DE] flex items-end justify-center overflow-hidden pb-24 sm:pb-32">

<div className="absolute inset-0 bg-gradient-to-t from-[#2D2B2A]/40 to-transparent z-0"></div>
<div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center">
<span className="text-[#FAF9F6] text-sm uppercase tracking-widest mb-4 font-medium">The Signature Collection</span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tighter text-[#FAF9F6] mb-8 leading-none">Comfort,<br/>Redefined.</h1>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="bg-[#FAF9F6] text-[#2D2B2A] px-8 py-4 text-sm font-medium tracking-wide hover:bg-[#EBE5DE] transition-colors w-full sm:w-auto text-center" href="#">
                    Shop Collection
                </a>
<a className="bg-transparent border border-[#FAF9F6] text-[#FAF9F6] px-8 py-4 text-sm font-medium tracking-wide hover:bg-[#FAF9F6] hover:text-[#2D2B2A] transition-colors w-full sm:w-auto text-center" href="#quiz">
                    Find Your Fit
                </a>
</div>
</div>
</header>

<section className="border-b border-[#EBE5DE] bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-[#EBE5DE]/0 md:divide-[#EBE5DE]">
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-[#A89F91]" icon="solar:ruler-pen-linear" width="28"></iconify-icon>
<h3 className="text-sm font-medium tracking-wide">Engineered Fit</h3>
<p className="text-xs text-[#A89F91] max-w-[150px]">Designed for every contour.</p>
</div>
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-[#A89F91]" icon="solar:leaf-linear" width="28"></iconify-icon>
<h3 className="text-sm font-medium tracking-wide">Premium Fabrics</h3>
<p className="text-xs text-[#A89F91] max-w-[150px]">Second-skin feel materials.</p>
</div>
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-[#A89F91]" icon="solar:shield-check-linear" width="28"></iconify-icon>
<h3 className="text-sm font-medium tracking-wide">Secure Checkout</h3>
<p className="text-xs text-[#A89F91] max-w-[150px]">Encrypted &amp; safe payments.</p>
</div>
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-[#A89F91]" icon="solar:box-minimalistic-linear" width="28"></iconify-icon>
<h3 className="text-sm font-medium tracking-wide">Easy Returns</h3>
<p className="text-xs text-[#A89F91] max-w-[150px]">30-day effortless process.</p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-serif tracking-tight text-[#2D2B2A]">Curated Essentials</h2>
<p className="text-sm text-[#A89F91] mt-2">Our most loved silhouettes.</p>
</div>
<a className="text-sm font-medium border-b border-[#2D2B2A] pb-1 hover:text-[#A89F91] hover:border-[#A89F91] transition-colors hidden sm:block" href="#">View All</a>
</div>

<div className="flex overflow-x-auto hide-scrollbar gap-6 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">

<div className="group min-w-[280px] sm:min-w-0 flex flex-col relative">
<div className="relative aspect-[3/4] bg-[#EBE5DE]/30 overflow-hidden mb-4 cursor-pointer">
<span className="absolute top-4 left-4 bg-white px-2 py-1 text-xs font-medium tracking-wide z-10">Best Seller</span>
<button className="absolute top-4 right-4 z-10 text-[#2D2B2A] hover:text-[#A89F91] transition-colors">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</button>

<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hidden lg:block">
<button className="w-full bg-[#FAF9F6]/90 backdrop-blur text-[#2D2B2A] py-3 text-sm font-medium hover:bg-[#2D2B2A] hover:text-white transition-colors">
                                Quick Add
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium"><a href="#pdp">The Silk Plunge Bra</a></h3>
<p className="text-sm text-[#A89F91] mt-1">Noir</p>
</div>
<span className="text-sm font-medium">$85</span>
</div>

<div className="flex gap-2 mt-3">
<div className="w-4 h-4 rounded-full bg-[#2D2B2A] border hover:border-gray-400 cursor-pointer"></div>
<div className="w-4 h-4 rounded-full bg-[#EBE5DE] border hover:border-gray-400 cursor-pointer"></div>
<div className="w-4 h-4 rounded-full bg-[#FAF9F6] border border-gray-300 hover:border-gray-400 cursor-pointer"></div>
</div>
</div>

<div className="group min-w-[280px] sm:min-w-0 flex flex-col relative">
<div className="relative aspect-[3/4] bg-[#EBE5DE]/30 overflow-hidden mb-4 cursor-pointer">
<button className="absolute top-4 right-4 z-10 text-[#2D2B2A] hover:text-[#A89F91] transition-colors">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium"><a href="#pdp">High-Waist Brief</a></h3>
<p className="text-sm text-[#A89F91] mt-1">Champagne</p>
</div>
<span className="text-sm font-medium">$45</span>
</div>
<div className="flex gap-2 mt-3">
<div className="w-4 h-4 rounded-full bg-[#EBE5DE] border hover:border-gray-400 cursor-pointer"></div>
<div className="w-4 h-4 rounded-full bg-[#2D2B2A] border hover:border-gray-400 cursor-pointer"></div>
</div>
</div>

<div className="group min-w-[280px] sm:min-w-0 flex flex-col relative">
<div className="relative aspect-[3/4] bg-[#EBE5DE]/30 overflow-hidden mb-4 cursor-pointer">
<button className="absolute top-4 right-4 z-10 text-[#2D2B2A] hover:text-[#A89F91] transition-colors">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium"><a href="#pdp">Contour Bodysuit</a></h3>
<p className="text-sm text-[#A89F91] mt-1">Ivory</p>
</div>
<span className="text-sm font-medium">$120</span>
</div>
<div className="flex gap-2 mt-3">
<div className="w-4 h-4 rounded-full bg-[#FAF9F6] border border-gray-300 hover:border-gray-400 cursor-pointer"></div>
</div>
</div>

<div className="group min-w-[280px] sm:min-w-0 flex flex-col relative">
<div className="relative aspect-[3/4] bg-[#EBE5DE]/30 overflow-hidden mb-4 cursor-pointer">
<span className="absolute top-4 left-4 bg-[#2D2B2A] text-white px-2 py-1 text-xs font-medium tracking-wide z-10">New</span>
<button className="absolute top-4 right-4 z-10 text-[#2D2B2A] hover:text-[#A89F91] transition-colors">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium"><a href="#pdp">Lace Bralette</a></h3>
<p className="text-sm text-[#A89F91] mt-1">Rose Beige</p>
</div>
<span className="text-sm font-medium">$65</span>
</div>
<div className="flex gap-2 mt-3">
<div className="w-4 h-4 rounded-full bg-[#A89F91] border hover:border-gray-400 cursor-pointer"></div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#EBE5DE]/40 py-24 border-y border-[#EBE5DE]">
<div className="max-w-4xl mx-auto px-4 text-center">
<iconify-icon className="text-[#A89F91] mb-6" icon="solar:magic-stick-3-linear" width="40"></iconify-icon>
<h2 className="text-3xl md:text-5xl font-serif tracking-tight mb-6">Discover Your True Fit</h2>
<p className="text-base text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed">
                Take our 60-second quiz to find the perfect silhouette tailored to your unique shape and style preferences. Say goodbye to guesswork.
            </p>
<button className="bg-[#2D2B2A] text-white px-10 py-4 text-sm font-medium tracking-wide hover:bg-[#A89F91] transition-colors inline-flex items-center gap-2">
                Start The Quiz
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</section>

<section className="bg-white py-24 border-b border-[#EBE5DE]" id="pdp">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12 border-b border-[#EBE5DE] pb-4 flex items-center gap-3 text-xs uppercase tracking-widest text-[#A89F91] font-medium">
<span>Architecture</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-[#2D2B2A]">Product Detail Page UX</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

<div className="lg:col-span-7 lg:sticky lg:top-24 lg:h-max">
<div className="grid grid-cols-2 gap-4">
<div className="aspect-[3/4] bg-[#F5F5F5] w-full flex items-center justify-center text-[#A89F91] text-sm">Image 1 (Main)</div>
<div className="aspect-[3/4] bg-[#F5F5F5] w-full flex items-center justify-center text-[#A89F91] text-sm">Image 2 (Detail)</div>
<div className="aspect-[3/4] bg-[#F5F5F5] w-full flex items-center justify-center text-[#A89F91] text-sm">Image 3 (Lifestyle)</div>
<div className="aspect-[3/4] bg-[#F5F5F5] w-full flex items-center justify-center text-[#A89F91] text-sm">Image 4 (Fabric)</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col">

<nav className="text-xs text-[#A89F91] mb-6 flex gap-2">
<a className="hover:text-[#2D2B2A]" href="#">Shop</a> / 
                        <a className="hover:text-[#2D2B2A]" href="#">Bras</a> / 
                        <span className="text-[#2D2B2A]">The Silk Plunge</span>
</nav>

<h1 className="text-3xl font-serif tracking-tight mb-2">The Silk Plunge Bra</h1>
<div className="text-lg font-medium mb-6">$85</div>

<div className="flex items-center gap-2 mb-8 text-sm">
<div className="flex text-[#2D2B2A]">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
</div>
<span className="text-[#A89F91] underline underline-offset-4 cursor-pointer">124 Reviews</span>
</div>

<div className="mb-8">
<div className="flex justify-between items-center mb-3">
<span className="text-sm font-medium">Color: Noir</span>
</div>
<div className="flex gap-3">
<label className="cursor-pointer relative">
<input checked="" className="peer sr-only" name="color" type="radio"/>
<div className="w-8 h-8 rounded-full bg-[#2D2B2A] ring-1 ring-offset-2 ring-transparent peer-checked:ring-[#2D2B2A] transition-all"></div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="color" type="radio"/>
<div className="w-8 h-8 rounded-full bg-[#EBE5DE] ring-1 ring-offset-2 ring-transparent peer-checked:ring-[#2D2B2A] transition-all"></div>
</label>
</div>
</div>

<div className="mb-8">
<div className="flex justify-between items-center mb-3 text-sm">
<span className="font-medium">Size</span>
<button className="text-[#A89F91] underline underline-offset-4 hover:text-[#2D2B2A] transition-colors">Size Guide</button>
</div>
<div className="grid grid-cols-4 gap-3">

<label className="cursor-pointer">
<input className="peer sr-only" name="size" type="radio"/>
<div className="w-full py-3 text-center border border-[#EBE5DE] text-sm peer-checked:bg-[#2D2B2A] peer-checked:text-white peer-checked:border-[#2D2B2A] hover:border-[#2D2B2A] transition-all">32A</div>
</label>
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="size" type="radio"/>
<div className="w-full py-3 text-center border border-[#EBE5DE] text-sm peer-checked:bg-[#2D2B2A] peer-checked:text-white peer-checked:border-[#2D2B2A] hover:border-[#2D2B2A] transition-all">32B</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="size" type="radio"/>
<div className="w-full py-3 text-center border border-[#EBE5DE] text-sm peer-checked:bg-[#2D2B2A] peer-checked:text-white peer-checked:border-[#2D2B2A] hover:border-[#2D2B2A] transition-all">32C</div>
</label>
<label className="cursor-pointer opacity-50">
<input className="peer sr-only" disabled="" name="size" type="radio"/>
<div className="w-full py-3 text-center border border-[#EBE5DE] text-sm line-through">32D</div>
</label>
</div>

<div className="mt-4 flex items-center gap-2 text-xs bg-[#FAF9F6] p-3 border border-[#EBE5DE]">
<iconify-icon className="text-[#A89F91]" icon="solar:magic-stick-3-linear"></iconify-icon>
<span>Not sure? <a className="font-medium underline" href="#quiz">Take the Fit Quiz</a> to find your match.</span>
</div>
</div>

<div className="flex flex-col gap-3 mb-10">
<button className="w-full bg-[#2D2B2A] text-white py-4 text-sm font-medium tracking-wide hover:bg-black transition-colors">
                            Add to Cart — $85
                        </button>

<div className="flex justify-center gap-6 mt-3 text-xs text-[#A89F91]">
<span className="flex items-center gap-1"><iconify-icon icon="solar:box-minimalistic-linear"></iconify-icon> Free shipping over $150</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:refresh-linear"></iconify-icon> 30-Day Returns</span>
</div>
</div>

<div className="border-t border-[#EBE5DE] divide-y divide-[#EBE5DE]">
<details className="group py-4" open="">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-sm">
                                Description
                                <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-gray-500 text-sm mt-4 leading-relaxed font-light">
                                Engineered for weightless support. The Silk Plunge combines delicate French lace with stretch-silk for a second-skin feel that moves with you. Features unpadded underwire cups for a natural lift.
                            </div>
</details>
<details className="group py-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-sm">
                                Fabric &amp; Care
                                <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-gray-500 text-sm mt-4 leading-relaxed font-light">
                                Body: 92% Silk, 8% Elastane.<br/>Lace: 85% Polyamide, 15% Elastane.<br/>Hand wash cold. Lay flat to dry.
                            </div>
</details>
<details className="group py-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-sm">
                                Shipping &amp; Returns
                                <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-gray-500 text-sm mt-4 leading-relaxed font-light">
                                Standard shipping takes 3-5 business days. We accept returns of unworn items in original condition within 30 days of delivery.
                            </div>
</details>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAF9F6]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16">
<h2 className="text-3xl font-serif tracking-tight mb-4 text-[#2D2B2A]">Architecture &amp; Strategy Report</h2>
<p className="text-gray-500 max-w-2xl">Executive summary of UI/UX improvements, design system specifications, and conversion optimization strategies for the HVENX D2C platform.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 border border-[#EBE5DE] hover:shadow-sm transition-shadow">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#EBE5DE]">
<iconify-icon className="text-[#A89F91]" icon="solar:sitemap-linear" width="24"></iconify-icon>
<h3 className="font-serif text-lg tracking-tight">1. Information Architecture</h3>
</div>
<ul className="space-y-4 text-sm text-gray-600">
<li><strong>Top Navigation:</strong> Shop, Collections, Fit Quiz (Highlight), Search, Account, Cart.</li>
<li><strong>Category Structure:</strong> Bras, Panties, Bodysuits, Sleepwear, Bundles.</li>
<li><strong>Utility Nav (Footer):</strong> Our Story, Size Guide, FAQ, Shipping &amp; Returns, Contact Us.</li>
<li><strong>Conversion Path:</strong> Home → Fit Quiz → Personalized Collection → PDP → Checkout.</li>
</ul>
</div>

<div className="bg-white p-8 border border-[#EBE5DE] hover:shadow-sm transition-shadow">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#EBE5DE]">
<iconify-icon className="text-[#A89F91]" icon="solar:pallete-2-linear" width="24"></iconify-icon>
<h3 className="font-serif text-lg tracking-tight">2. Visual Design System</h3>
</div>
<ul className="space-y-4 text-sm text-gray-600">
<li><strong>Typography:</strong> Playfair Display (Serif, Elegant) paired with Inter (Sans, Clean, E-commerce legible). Font weights are reduced for luxury feel.</li>
<li><strong>Color Palette:</strong>
<div className="flex gap-2 mt-2">
<div className="w-6 h-6 rounded-full bg-[#FAF9F6] border border-gray-200" title="Ivory"></div>
<div className="w-6 h-6 rounded-full bg-[#EBE5DE]" title="Rose Beige"></div>
<div className="w-6 h-6 rounded-full bg-[#A89F91]" title="Taupe"></div>
<div className="w-6 h-6 rounded-full bg-[#2D2B2A]" title="Charcoal"></div>
</div>
</li>
<li><strong>Components:</strong> Sharp corners or very minimal radius. Ghost buttons for secondary actions. Custom unstyled radio/checkbox inputs utilizing Tailwind `peer` classes.</li>
</ul>
</div>

<div className="bg-white p-8 border border-[#EBE5DE] hover:shadow-sm transition-shadow">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#EBE5DE]">
<iconify-icon className="text-[#A89F91]" icon="solar:graph-up-linear" width="24"></iconify-icon>
<h3 className="font-serif text-lg tracking-tight">3. CRO Recommendations</h3>
</div>
<ul className="space-y-3 text-sm text-gray-600">
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-[#2D2B2A]" icon="solar:check-circle-linear"></iconify-icon> Integrate Fit Quiz output directly into PDP size selectors.</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-[#2D2B2A]" icon="solar:check-circle-linear"></iconify-icon> Sticky Add-to-Cart on mobile PDP scrolling.</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-[#2D2B2A]" icon="solar:check-circle-linear"></iconify-icon> Micro-trust badges (Free Shipping, Returns) immediately below Primary CTA.</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-[#2D2B2A]" icon="solar:check-circle-linear"></iconify-icon> "Complete the Set" bundling logic on cart drawer open.</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-[#2D2B2A]" icon="solar:check-circle-linear"></iconify-icon> Move from generic "Take Quiz" to benefit-driven "Find Your Fit".</li>
</ul>
</div>
</div>
</div>
</section>

<footer className="bg-[#2D2B2A] text-[#FAF9F6] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

<div className="lg:col-span-2">
<div className="text-2xl tracking-tighter uppercase font-medium mb-6">hvenx</div>
<p className="text-sm text-gray-400 mb-8 max-w-sm font-light leading-relaxed">Join our private list for early access to collections, editorial content, and exclusive styling advice.</p>
<form className="flex max-w-md border-b border-gray-600 pb-2">
<input className="bg-transparent w-full text-sm outline-none placeholder:text-gray-500 text-white" placeholder="Email Address" required="" type="email"/>
<button className="text-xs uppercase tracking-widest hover:text-[#A89F91] transition-colors font-medium" type="submit">Subscribe</button>
</form>
</div>

<div>
<h4 className="text-xs uppercase tracking-widest font-medium mb-6 text-gray-400">Shop</h4>
<ul className="space-y-4 text-sm font-light">
<li><a className="hover:text-white text-gray-300 transition-colors" href="#">All Products</a></li>
<li><a className="hover:text-white text-gray-300 transition-colors" href="#">Best Sellers</a></li>
<li><a className="hover:text-white text-gray-300 transition-colors" href="#">The Fit Quiz</a></li>
<li><a className="hover:text-white text-gray-300 transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>

<div>
<h4 className="text-xs uppercase tracking-widest font-medium mb-6 text-gray-400">Support</h4>
<ul className="space-y-4 text-sm font-light">
<li><a className="hover:text-white text-gray-300 transition-colors" href="#">FAQ &amp; Contact</a></li>
<li><a className="hover:text-white text-gray-300 transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-white text-gray-300 transition-colors" href="#">Size Guide</a></li>
<li><a className="hover:text-white text-gray-300 transition-colors" href="#">Track Order</a></li>
</ul>
</div>
</div>

<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 font-light gap-4">
<p>© 2024 HVENX. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Accessibility</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
