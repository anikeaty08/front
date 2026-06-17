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
anran: {
50: '#f0f6ff',
100: '#e0edff',
200: '#cce0ff',
300: '#a8cdff',
400: '#7cb1ff',
500: '#5290ff',
600: '#2b6aff',
700: '#1a51f5',
800: '#1e42c5',
900: '#1e3c9c',
950: '#0b1d5c',
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
      

<div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1">

<a className="group flex items-center bg-white border border-gray-200 border-r-0 shadow-sm rounded-l-lg overflow-hidden hover:bg-gray-50 transition-all duration-300 transform translate-x-[calc(100%-3rem)] hover:translate-x-0 h-12" href="#">
<div className="w-12 h-12 flex items-center justify-center bg-anran-50 text-anran-600 shrink-0">
<iconify-icon height="24" icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<span className="px-4 text-sm font-medium text-gray-700 whitespace-nowrap">+86 123 4567 8900</span>
</a>

<a className="group flex items-center bg-white border border-gray-200 border-r-0 shadow-sm rounded-l-lg overflow-hidden hover:bg-gray-50 transition-all duration-300 transform translate-x-[calc(100%-3rem)] hover:translate-x-0 h-12" href="#contact">
<div className="w-12 h-12 flex items-center justify-center bg-anran-50 text-anran-600 shrink-0">
<iconify-icon height="24" icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<span className="px-4 text-sm font-medium text-gray-700 whitespace-nowrap">sales@anranglass.com</span>
</a>

<a className="group flex items-center bg-white border border-gray-200 border-r-0 shadow-sm rounded-l-lg overflow-hidden hover:bg-gray-50 transition-all duration-300 transform translate-x-[calc(100%-3rem)] hover:translate-x-0 h-12" href="#">
<div className="w-12 h-12 flex items-center justify-center bg-anran-50 text-anran-600 shrink-0">
<iconify-icon height="24" icon="solar:chat-round-line-linear" width="24"></iconify-icon>
</div>
<span className="px-4 text-sm font-medium text-gray-700 whitespace-nowrap">Live Chat</span>
</a>
</div>

<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-40">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-anran-950">
<iconify-icon className="text-anran-600" height="28" icon="solar:bottle-linear" width="28"></iconify-icon>
<span className="text-xl font-semibold tracking-tighter uppercase">Anran</span>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-gray-900 hover:text-anran-600 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-gray-500 hover:text-anran-600 transition-colors" href="#products">Products</a>
<a className="text-sm font-medium text-gray-500 hover:text-anran-600 transition-colors" href="#capabilities">Capabilities</a>
<a className="text-sm font-medium text-gray-500 hover:text-anran-600 transition-colors" href="#about">Company</a>
<a className="text-sm font-medium text-gray-500 hover:text-anran-600 transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center">
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-anran-600 rounded-md hover:bg-anran-700 transition-colors shadow-sm" href="#contact">
                    Request Quote
                </a>
<button className="md:hidden p-2 text-gray-500">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-50" id="home">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 z-0"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
<span className="flex w-2 h-2 rounded-full bg-anran-500"></span>
<span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Premium Packaging Manufacturer</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-gray-900 tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
                One-Stop Solution for <span className="text-anran-600">Premium Perfume</span> Packaging.
            </h1>
<p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                From 3D modeling design to mold development and automated production, we provide an exceptional packaging experience for global brands.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 transition-colors shadow-md flex items-center justify-center gap-2" href="#products">
                    Explore Collections
                    <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors shadow-sm flex items-center justify-center" href="#contact">
                    Talk to an Expert
                </a>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10">
<div className="w-full h-[500px] md:h-[850px] rounded-2xl overflow-hidden bg-white shadow-2xl ring-1 ring-gray-900/5 relative group">
<img alt="Premium Perfume Packaging Poster" className="w-full h-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&amp;fit=crop&amp;q=80&amp;w=2400"/>
<div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] rounded-2xl pointer-events-none"></div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100" id="capabilities">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-sm font-semibold text-anran-600 tracking-tight uppercase mb-2">Manufacturing Excellence</h2>
<h3 className="text-3xl font-semibold text-gray-900 tracking-tight mb-4">Precision at Every Step</h3>
<p className="text-gray-500 text-sm">Our vertically integrated facility ensures stringent quality control and rapid turnaround times, transforming your concepts into market-ready realities.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-anran-200 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center mb-4 text-gray-700 group-hover:text-anran-600 transition-colors shadow-sm">
<iconify-icon height="24" icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-gray-900 tracking-tight mb-2">1. 3D Modeling Design</h4>
<p className="text-sm text-gray-500 leading-relaxed">Our in-house design team brings your brand vision to life with precise technical drawings and photorealistic 3D renderings.</p>
</div>

<div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-anran-200 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center mb-4 text-gray-700 group-hover:text-anran-600 transition-colors shadow-sm">
<iconify-icon height="24" icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-gray-900 tracking-tight mb-2">2. Mold Development</h4>
<p className="text-sm text-gray-500 leading-relaxed">State-of-the-art CNC machining creates exact molds, ensuring flawless replication and intricate details for your glass bottles.</p>
</div>

<div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-anran-200 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center mb-4 text-gray-700 group-hover:text-anran-600 transition-colors shadow-sm">
<iconify-icon height="24" icon="solar:settings-minimalistic-linear" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-gray-900 tracking-tight mb-2">3. Automated Production</h4>
<p className="text-sm text-gray-500 leading-relaxed">High-capacity automated IS machines guarantee consistent wall thickness, clarity, and structural integrity at scale.</p>
</div>

<div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-anran-200 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center mb-4 text-gray-700 group-hover:text-anran-600 transition-colors shadow-sm">
<iconify-icon height="24" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-gray-900 tracking-tight mb-2">4. Surface Decoration</h4>
<p className="text-sm text-gray-500 leading-relaxed">Elevate your packaging with premium finishing including polishing, frosting, color spraying, hot stamping, and silk screening.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-100" id="products">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold text-gray-900 tracking-tight mb-2">Signature Collections</h2>
<p className="text-gray-500 text-sm max-w-xl">Discover our extensive range of high-end glass bottles, bespoke gift boxes, and matching closures designed for luxury fragrance brands.</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 text-xs font-medium bg-white border border-gray-200 rounded-md text-gray-900 shadow-sm">Glass Bottles</button>
<button className="px-4 py-2 text-xs font-medium bg-transparent text-gray-500 hover:text-gray-900 transition-colors">Gift Boxes</button>
<button className="px-4 py-2 text-xs font-medium bg-transparent text-gray-500 hover:text-gray-900 transition-colors">Caps &amp; Pumps</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group block bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1" href="#">
<div className="aspect-square bg-gray-50 p-6 flex items-center justify-center relative overflow-hidden">
<img alt="Rectangular Clear Glass Bottle" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm border border-gray-100 rounded text-[10px] font-medium text-gray-600 uppercase tracking-wider">50ml / 100ml</div>
</div>
<div className="p-5 border-t border-gray-50">
<h4 className="text-sm font-medium text-gray-900 mb-1 tracking-tight">Classic Rectangular Series</h4>
<p className="text-xs text-gray-500 mb-3">High flint glass, polished finish</p>
<div className="flex items-center text-xs font-medium text-anran-600 group-hover:text-anran-700">
                            Request Details <iconify-icon className="ml-1" height="14" icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
</div>
</div>
</a>

<a className="group block bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1" href="#">
<div className="aspect-square bg-gray-50 p-6 flex items-center justify-center relative overflow-hidden">
<img alt="Cylindrical Frosted Bottle" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm border border-gray-100 rounded text-[10px] font-medium text-gray-600 uppercase tracking-wider">30ml / 50ml</div>
</div>
<div className="p-5 border-t border-gray-50">
<h4 className="text-sm font-medium text-gray-900 mb-1 tracking-tight">Cylindrical Frosted Series</h4>
<p className="text-xs text-gray-500 mb-3">Frosted surface, wood cap option</p>
<div className="flex items-center text-xs font-medium text-anran-600 group-hover:text-anran-700">
                            Request Details <iconify-icon className="ml-1" height="14" icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
</div>
</div>
</a>

<a className="group block bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1" href="#">
<div className="aspect-square bg-gray-50 p-6 flex items-center justify-center relative overflow-hidden">
<img alt="Luxury Perfume Box" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute top-3 right-3 px-2 py-1 bg-gray-900 text-white rounded text-[10px] font-medium uppercase tracking-wider">Box Packaging</div>
</div>
<div className="p-5 border-t border-gray-50">
<h4 className="text-sm font-medium text-gray-900 mb-1 tracking-tight">Rigid Setup Boxes</h4>
<p className="text-xs text-gray-500 mb-3">Custom insert, foil stamping</p>
<div className="flex items-center text-xs font-medium text-anran-600 group-hover:text-anran-700">
                            Request Details <iconify-icon className="ml-1" height="14" icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
</div>
</div>
</a>

<a className="group block bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1" href="#">
<div className="aspect-square bg-gray-50 p-6 flex items-center justify-center relative overflow-hidden">
<img alt="Bespoke Design" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute top-3 right-3 px-2 py-1 bg-anran-100 text-anran-800 rounded text-[10px] font-medium uppercase tracking-wider">Custom Mold</div>
</div>
<div className="p-5 border-t border-gray-50">
<h4 className="text-sm font-medium text-gray-900 mb-1 tracking-tight">Bespoke Structural Design</h4>
<p className="text-xs text-gray-500 mb-3">Fully customized to brand identity</p>
<div className="flex items-center text-xs font-medium text-anran-600 group-hover:text-anran-700">
                            Start Project <iconify-icon className="ml-1" height="14" icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
</div>
</div>
</a>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors shadow-sm" href="#">
                    View Full Catalog
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100 overflow-hidden relative" id="about">
<div className="absolute -right-40 -top-40 w-96 h-96 bg-anran-50 rounded-full blur-3xl opacity-50"></div>
<div className="absolute -left-40 -bottom-40 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold text-gray-900 tracking-tight mb-6">Partner with a globally trusted manufacturer.</h2>
<p className="text-gray-500 text-base mb-6 leading-relaxed">
                        Anran Glass is dedicated to providing high-end fragrance brands with comprehensive packaging solutions. We bridge the gap between creative design and efficient manufacturing.
                    </p>
<p className="text-gray-500 text-base mb-8 leading-relaxed">
                        Our rigorous quality control systems and commitment to innovation ensure that every bottle and box we produce meets the exacting standards of the luxury market.
                    </p>
<div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
<div>
<div className="text-4xl font-semibold text-gray-900 tracking-tight mb-1">15<span className="text-anran-600">+</span></div>
<div className="text-sm text-gray-500 font-medium">Years Experience</div>
</div>
<div>
<div className="text-4xl font-semibold text-gray-900 tracking-tight mb-1">50<span className="text-anran-600">+</span></div>
<div className="text-sm text-gray-500 font-medium">Countries Exported</div>
</div>
<div>
<div className="text-4xl font-semibold text-gray-900 tracking-tight mb-1">8</div>
<div className="text-sm text-gray-500 font-medium">Automated Lines</div>
</div>
<div>
<div className="text-4xl font-semibold text-gray-900 tracking-tight mb-1">ISO</div>
<div className="text-sm text-gray-500 font-medium">9001 Certified</div>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-lg relative z-10">
<img alt="Factory Production Line" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gray-100 rounded-2xl z-0"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-100" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-gray-900 tracking-tight mb-4">Frequently Asked Questions</h2>
<p className="text-sm text-gray-500">Everything you need to know about our products and processes.</p>
</div>
<div className="space-y-4">

<div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
<h4 className="text-sm font-medium text-gray-900 mb-2">What is your Minimum Order Quantity (MOQ)?</h4>
<p className="text-sm text-gray-500 leading-relaxed">For standard models in stock, the MOQ is 10,000 units. For customized glass bottles requiring new molds, the MOQ typically starts at 30,000 units.</p>
</div>

<div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
<h4 className="text-sm font-medium text-gray-900 mb-2">How long does custom mold development take?</h4>
<p className="text-sm text-gray-500 leading-relaxed">3D design and technical drawing take 3-5 days. Creating the sample mold and producing initial glass samples takes approximately 15-20 days. Full production mold creation takes an additional 20 days after sample approval.</p>
</div>

<div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
<h4 className="text-sm font-medium text-gray-900 mb-2">Do you provide matching caps and pumps?</h4>
<p className="text-sm text-gray-500 leading-relaxed">Yes, we offer complete packaging solutions. We supply a wide variety of standard and custom closures including zamac caps, plastic surlyn caps, wooden caps, and high-quality crimp pumps.</p>
</div>

<div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
<h4 className="text-sm font-medium text-gray-900 mb-2">Can you handle surface decoration?</h4>
<p className="text-sm text-gray-500 leading-relaxed">Absolutely. Our facility offers frosting, color coating (transparent, opaque, gradient), silk-screen printing, hot stamping (gold/silver), decaling, and hand-polishing.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-semibold text-gray-900 tracking-tight mb-4">Start your packaging project.</h2>
<p className="text-sm text-gray-500 mb-10 max-w-md">Contact our sales engineering team for technical inquiries, sample requests, or custom mold quotations. We aim to respond within 12 hours.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 shrink-0 border border-gray-100">
<iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 mb-1">Email Us</h4>
<p className="text-sm text-gray-500">sales@anranglass.com</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 shrink-0 border border-gray-100">
<iconify-icon height="20" icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 mb-1">Call Us</h4>
<p className="text-sm text-gray-500">+86 123 4567 8900 (WhatsApp available)</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 shrink-0 border border-gray-100">
<iconify-icon height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 mb-1">Factory Location</h4>
<p className="text-sm text-gray-500">Industrial Park, Packaging District,<br/>Guangzhou, Guangdong, China</p>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
<form className="space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="firstName">First Name</label>
<input className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-anran-500 focus:border-anran-500 bg-gray-50 focus:bg-white transition-colors placeholder-gray-400" id="firstName" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="lastName">Last Name</label>
<input className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-anran-500 focus:border-anran-500 bg-gray-50 focus:bg-white transition-colors placeholder-gray-400" id="lastName" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="company">Company Name</label>
<input className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-anran-500 focus:border-anran-500 bg-gray-50 focus:bg-white transition-colors placeholder-gray-400" id="company" placeholder="Your Brand Ltd." type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="email">Work Email</label>
<input className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-anran-500 focus:border-anran-500 bg-gray-50 focus:bg-white transition-colors placeholder-gray-400" id="email" placeholder="john@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="interest">I'm interested in</label>
<div className="relative">
<select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-anran-500 focus:border-anran-500 bg-gray-50 focus:bg-white transition-colors appearance-none text-gray-600" id="interest">
<option>Standard Glass Bottles</option>
<option>Custom Mold Development</option>
<option>Perfume Gift Boxes</option>
<option>Complete Packaging Set</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="message">Project Details</label>
<textarea className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-anran-500 focus:border-anran-500 bg-gray-50 focus:bg-white transition-colors placeholder-gray-400 resize-none" id="message" placeholder="Please describe your requirements (volume, capacity, decoration, timeline)..." rows="4"></textarea>
</div>
<button className="w-full px-4 py-2.5 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" type="submit">
                            Send Inquiry
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-gray-950 pt-16 pb-8 border-t border-gray-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
<div className="md:col-span-1">
<div className="flex items-center gap-2 text-white mb-4">
<iconify-icon className="text-gray-400" height="24" icon="solar:bottle-linear" width="24"></iconify-icon>
<span className="text-lg font-semibold tracking-tighter uppercase">Anran</span>
</div>
<p className="text-xs text-gray-400 leading-relaxed mb-6 pr-4">
                        One-stop solution for high-end perfume glass bottles and gift box packaging. Delivering excellence to global fragrance brands.
                    </p>
<div className="flex gap-4 text-gray-400">
<a className="hover:text-white transition-colors" href="#"><iconify-icon height="20" icon="solar:link-circle-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Products</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Clear Glass Bottles</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Frosted Bottles</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Luxury Gift Boxes</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Caps &amp; Pumps</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#about">About Us</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#capabilities">Manufacturing</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">News &amp; Trends</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-500">
                    © 2023 Anran Glass Packaging Co., Ltd. All rights reserved.
                </p>
<div className="flex items-center gap-2 text-xs text-gray-500">
<iconify-icon height="16" icon="solar:global-linear" width="16"></iconify-icon>
                    English (Global)
                </div>
</div>
</div>
</footer>

    </>
  );
}
