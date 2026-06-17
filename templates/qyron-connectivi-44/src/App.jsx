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
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<div className="flex-shrink-0 flex items-center gap-3">
<img alt="Qyron Logo" className="h-10 w-auto object-contain" src="https://i.imgur.com/2s442eT.png"/>
</div>

<div className="hidden md:block">
<div className="ml-10 flex items-baseline space-x-8">
<a className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-lg font-medium transition-colors" href="#products">Products</a>
<a className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-lg font-medium transition-colors" href="#technology">Technology</a>
<a className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-lg font-medium transition-colors" href="#business">For Enterprise</a>
</div>
</div>

<div className="hidden md:block">
<a className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full text-lg font-medium transition-all shadow-lg shadow-slate-200" href="#contact">
                        Contact Sales
                    </a>
</div>

<div className="-mr-2 flex md:hidden">
<button className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none" type="button">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10 opacity-30">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-200 rounded-full blur-[120px] mix-blend-multiply filter opacity-20 animate-blob"></div>
<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-lime-200 rounded-full blur-[120px] mix-blend-multiply filter opacity-20 animate-blob animation-delay-2000"></div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-lime-500"></span>
<span className="text-base font-medium text-slate-600">New Gen-4 Cables Available in Singapore</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-slate-900 mb-8 max-w-4xl mx-auto leading-[1.1]">
                Powering the Future of <br/>
<span className="gradient-text">Connected Enterprise.</span>
</h1>
<p className="text-xl lg:text-2xl text-slate-500 max-w-2xl mx-auto mb-12 font-normal leading-relaxed">
                Premium connectivity solutions engineered for speed, durability, and safety. Designed for modern workstations and industrial applications.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-lg font-medium transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-2" href="#products">
                    Browse Catalog
                    <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-lg text-lg font-medium transition-all flex items-center justify-center gap-2" href="#demo">
<i className="w-5 h-5 text-slate-400" data-lucide="download"></i>
                    Download Specs
                </a>
</div>
</div>

<div className="mt-20 max-w-6xl mx-auto px-4 relative">
<div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-2">
<img alt="High Tech Cables" className="rounded-xl w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&amp;w=2601&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-10 left-10 right-10 flex justify-center">
<div className="bg-white/90 backdrop-blur-md px-8 py-4 rounded-xl border border-slate-200 shadow-lg flex gap-8">
<div className="text-center">
<p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Speed</p>
<p className="text-slate-900 text-xl font-semibold">40 Gbps</p>
</div>
<div className="w-px bg-slate-200"></div>
<div className="text-center">
<p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Power</p>
<p className="text-slate-900 text-xl font-semibold">240W PD</p>
</div>
<div className="w-px bg-slate-200"></div>
<div className="text-center">
<p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Rating</p>
<p className="text-slate-900 text-xl font-semibold">CAT 8</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<p className="text-center text-slate-500 text-base font-medium mb-8">TRUSTED BY INNOVATIVE COMPANIES ACROSS SINGAPORE</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">

<div className="flex items-center gap-2 font-semibold text-2xl"><i className="fill-current" data-lucide="hexagon"></i> NEXUS</div>
<div className="flex items-center gap-2 font-semibold text-2xl"><i className="fill-current" data-lucide="triangle"></i> STRATUM</div>
<div className="flex items-center gap-2 font-semibold text-2xl"><i className="fill-current" data-lucide="circle"></i> ORBIT</div>
<div className="flex items-center gap-2 font-semibold text-2xl"><i className="fill-current" data-lucide="square"></i> BLOC</div>
<div className="flex items-center gap-2 font-semibold text-2xl"><i className="fill-current" data-lucide="diamond"></i> APEX</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="technology">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                        Engineered for the <br/>demands of tomorrow.
                    </h2>
<p className="text-xl text-slate-600 mb-8 leading-relaxed">
                        At Qyron, we don't just sell cables; we provide the nervous system for your digital infrastructure. From data centers in Tai Seng to creative studios in Bugis, our cables deliver uncompromised signal integrity.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="p-1 rounded-full bg-yellow-100 text-yellow-600 mt-1">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<span className="text-lg text-slate-700">Certified ISO 9001 Manufacturing</span>
</li>
<li className="flex items-start gap-3">
<div className="p-1 rounded-full bg-yellow-100 text-yellow-600 mt-1">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<span className="text-lg text-slate-700">Triple-layer Shielding Technology</span>
</li>
<li className="flex items-start gap-3">
<div className="p-1 rounded-full bg-lime-100 text-lime-600 mt-1">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<span className="text-lg text-slate-700">Zero-Latency Design for High-Freq Trading</span>
</li>
</ul>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-lime-400/20 rounded-2xl transform rotate-3"></div>
<img alt="Cable Engineering" className="relative rounded-2xl shadow-xl w-full h-[500px] object-cover grayscale transition-all hover:grayscale-0 duration-700" src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white" id="products">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-end mb-16">
<div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">Product Series</h2>
<p className="text-xl text-slate-500 mt-4">High-fidelity connections for every application.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-lime-600 font-medium hover:text-lime-700 transition-colors text-lg" href="#">
                    View Full Catalog <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative rounded-2xl bg-slate-50 border border-slate-100 p-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="aspect-[4/3] bg-white rounded-xl overflow-hidden mb-4 flex items-center justify-center relative">
<span className="absolute top-3 left-3 bg-slate-900 text-white text-xs font-semibold px-2 py-1 rounded">BEST SELLER</span>
<img alt="Cable" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="px-4 pb-4">
<h3 className="text-xl font-semibold text-slate-900">Q-Bolt Thunderbolt 4</h3>
<p className="text-slate-500 mt-2 line-clamp-2">40Gbps data transfer with 100W PD charging capability. The ultimate all-in-one.</p>
<div className="mt-6 flex items-center justify-between">
<span className="text-lg font-medium text-slate-900">SGD 49.90</span>
<button className="p-2 rounded-full bg-slate-200 group-hover:bg-lime-400 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group relative rounded-2xl bg-slate-50 border border-slate-100 p-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="aspect-[4/3] bg-white rounded-xl overflow-hidden mb-4 flex items-center justify-center">
<img alt="HDMI Cable" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="px-4 pb-4">
<h3 className="text-xl font-semibold text-slate-900">Vision 8K HDMI 2.1</h3>
<p className="text-slate-500 mt-2 line-clamp-2">Ultra High Speed 48Gbps. Perfect for professional video editing and gaming.</p>
<div className="mt-6 flex items-center justify-between">
<span className="text-lg font-medium text-slate-900">SGD 35.00</span>
<button className="p-2 rounded-full bg-slate-200 group-hover:bg-lime-400 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group relative rounded-2xl bg-slate-50 border border-slate-100 p-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="aspect-[4/3] bg-white rounded-xl overflow-hidden mb-4 flex items-center justify-center">
<img alt="Ethernet Cable" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="px-4 pb-4">
<h3 className="text-xl font-semibold text-slate-900">NetStream CAT8</h3>
<p className="text-slate-500 mt-2 line-clamp-2">Industrial grade ethernet. 2000MHz bandwidth for server rooms.</p>
<div className="mt-6 flex items-center justify-between">
<span className="text-lg font-medium text-slate-900">SGD 22.50</span>
<button className="p-2 rounded-full bg-slate-200 group-hover:bg-lime-400 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group relative rounded-2xl bg-slate-50 border border-slate-100 p-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="aspect-[4/3] bg-white rounded-xl overflow-hidden mb-4 flex items-center justify-center">
<img alt="USB Cable" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-4 pb-4">
<h3 className="text-xl font-semibold text-slate-900">FlexLink USB-C</h3>
<p className="text-slate-500 mt-2 line-clamp-2">Braided nylon exterior. Tested for 50,000+ bends. 3M Length.</p>
<div className="mt-6 flex items-center justify-between">
<span className="text-lg font-medium text-slate-900">SGD 18.90</span>
<button className="p-2 rounded-full bg-slate-200 group-hover:bg-lime-400 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group relative rounded-2xl bg-slate-50 border border-slate-100 p-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="aspect-[4/3] bg-white rounded-xl overflow-hidden mb-4 flex items-center justify-center relative">
<span className="absolute top-3 left-3 bg-lime-500 text-white text-xs font-semibold px-2 py-1 rounded">NEW</span>
<img alt="Audio Cable" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="px-4 pb-4">
<h3 className="text-xl font-semibold text-slate-900">SonicPure Aux Pro</h3>
<p className="text-slate-500 mt-2 line-clamp-2">Gold-plated connectors for lossless audio transmission.</p>
<div className="mt-6 flex items-center justify-between">
<span className="text-lg font-medium text-slate-900">SGD 29.00</span>
<button className="p-2 rounded-full bg-slate-200 group-hover:bg-lime-400 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group relative rounded-2xl bg-slate-50 border border-slate-100 p-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="aspect-[4/3] bg-white rounded-xl overflow-hidden mb-4 flex items-center justify-center">
<img alt="DisplayPort" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-4 pb-4">
<h3 className="text-xl font-semibold text-slate-900">ProView DisplayPort 1.4</h3>
<p className="text-slate-500 mt-2 line-clamp-2">Supports 144Hz at 4K. Essential for high-refresh workflows.</p>
<div className="mt-6 flex items-center justify-between">
<span className="text-lg font-medium text-slate-900">SGD 32.00</span>
<button className="p-2 rounded-full bg-slate-200 group-hover:bg-lime-400 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center md:hidden">
<a className="inline-flex items-center gap-2 text-lime-600 font-medium text-lg" href="#">
                    View Full Catalog <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">Precision Engineering</h2>
<p className="text-slate-400 text-xl max-w-2xl mx-auto">Every Qyron cable is subjected to rigorous testing standards.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 grid-rows-2 gap-6 h-auto md:h-[600px]">

<div className="md:col-span-4 md:row-span-2 bg-slate-800 rounded-3xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full mix-blend-overlay filter blur-[100px] opacity-20"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center mb-6">
<i className="text-yellow-400 w-6 h-6" data-lucide="shield-check"></i>
</div>
<h3 className="text-2xl font-semibold mb-2">Singapore Safety Certified</h3>
<p className="text-slate-400 text-lg">Compliant with Enterprise Singapore Consumer Protection (Safety Requirements) Registration Scheme. Fire-resistant PVC coating ensures safety in high-density setups.</p>
</div>
<img className="rounded-xl mt-6 opacity-80 group-hover:scale-[1.02] transition-transform duration-500 w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
</div>

<div className="md:col-span-2 bg-slate-800 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-lime-500"></div>
<i className="text-lime-400 w-8 h-8 mb-4" data-lucide="zap"></i>
<h3 className="text-xl font-semibold">240W Power Delivery</h3>
<p className="text-slate-400 mt-2">Charge laptops in record time.</p>
</div>

<div className="md:col-span-2 bg-slate-800 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-lime-500 to-yellow-400"></div>
<i className="text-yellow-400 w-8 h-8 mb-4" data-lucide="activity"></i>
<h3 className="text-xl font-semibold">50,000+ Bend Test</h3>
<p className="text-slate-400 mt-2">Reinforced strain relief points.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-3 gap-12">
<div className="flex flex-col items-start">
<div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-lime-600">
<i className="w-7 h-7" data-lucide="truck"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Next-Day SG Delivery</h3>
<p className="text-lg text-slate-500">Local warehouse at Changi South means you get your equipment fast. Free shipping on orders over $50.</p>
</div>
<div className="flex flex-col items-start">
<div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-lime-600">
<i className="w-7 h-7" data-lucide="award"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">3-Year Warranty</h3>
<p className="text-lg text-slate-500">We stand by our build quality. 1-to-1 exchange policy for any manufacturing defects.</p>
</div>
<div className="flex flex-col items-start">
<div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-lime-600">
<i className="w-7 h-7" data-lucide="users"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Bulk Enterprise Solutions</h3>
<p className="text-lg text-slate-500">Equipping a new office? Contact our B2B team for volume pricing and custom cable lengths.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-16">Feedback from Industry</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex gap-1 text-yellow-400 mb-4">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 text-lg mb-6">"Switched our entire design agency to Qyron Thunderbolt cables. The transfer speeds for 4K raw footage are noticeably faster."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">AL</div>
<div>
<p className="font-semibold text-slate-900">Alvin Lim</p>
<p className="text-sm text-slate-500">Creative Director, PixelSG</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex gap-1 text-yellow-400 mb-4">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 text-lg mb-6">"Very impressed with the build quality. The nylon braiding feels premium and the connectors are solid. Delivery to Jurong was next day."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">SJ</div>
<div>
<p className="font-semibold text-slate-900">Sarah Jenkins</p>
<p className="text-sm text-slate-500">IT Manager, FinTech Asia</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex gap-1 text-yellow-400 mb-4">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 text-lg mb-6">"Finally, a cable brand in Singapore that offers proper specs clearly. The HDMI 2.1 cable actually delivers the 120Hz refresh rate as promised."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">DK</div>
<div>
<p className="font-semibold text-slate-900">David Koh</p>
<p className="text-sm text-slate-500">Systems Engineer</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-slate-900 mb-12 text-center tracking-tight">Frequently Asked Questions</h2>
<div className="space-y-6">
<div className="border-b border-slate-100 pb-6">
<h3 className="text-xl font-medium text-slate-900 mb-2">Are Qyron cables certified?</h3>
<p className="text-lg text-slate-500">Yes, our cables undergo rigorous testing and meet international standards (CE, FCC, RoHS) as well as complying with local Singapore safety regulations.</p>
</div>
<div className="border-b border-slate-100 pb-6">
<h3 className="text-xl font-medium text-slate-900 mb-2">Do you offer bulk discounts for companies?</h3>
<p className="text-lg text-slate-500">Absolutely. We partner with many Singaporean enterprises. Please reach out via the contact form for a corporate quotation.</p>
</div>
<div className="border-b border-slate-100 pb-6">
<h3 className="text-xl font-medium text-slate-900 mb-2">What is the return policy?</h3>
<p className="text-lg text-slate-500">We offer a 30-day money-back guarantee if the product is unopened, and a 3-year warranty on manufacturing defects.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-slate-900 z-0"></div>
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500 rounded-full blur-[150px] opacity-10"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6">Ready to upgrade your workspace?</h2>
<p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">Join thousands of professionals in Singapore who trust Qyron for their connectivity needs.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-lime-500 text-slate-900 rounded-full text-lg font-bold hover:shadow-[0_0_20px_rgba(132,204,22,0.5)] transition-all">
                    Shop Now
                </button>
<button className="px-8 py-4 bg-transparent border border-slate-600 text-white rounded-full text-lg font-medium hover:bg-slate-800 transition-all">
                    Contact Sales
                </button>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-2 md:col-span-1">
<img alt="Qyron" className="h-8 w-auto mb-6 brightness-200 grayscale contrast-200" src="https://i.imgur.com/2s442eT.png"/>
<p className="text-sm leading-relaxed mb-6">Premium connectivity solutions designed in Singapore for the modern professional.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-6">Products</h4>
<ul className="space-y-4">
<li><a className="hover:text-lime-400 transition-colors" href="#">Thunderbolt</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">HDMI &amp; Display</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">USB-C Series</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Ethernet</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Support</h4>
<ul className="space-y-4">
<li><a className="hover:text-lime-400 transition-colors" href="#">Track Order</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Warranty Claim</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Shipping Policy</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Contact</h4>
<ul className="space-y-4">
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="map-pin"></i> 10 Ubi Crescent, Singapore</li>
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="mail"></i> sales@qyron.sg</li>
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="phone"></i> +65 6700 0000</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
<div>© 2023 Qyron Technologies Pte Ltd. All rights reserved.</div>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
