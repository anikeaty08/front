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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  
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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 saturate-50 opacity-30 absolute" data-alpha-mask="66" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 66%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 66%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ty3N7ZPaIU7KlWixQFIc"></div>

</div></div>

<nav className="fixed w-full z-50 bg-slate-100/80 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<button className="md:hidden text-slate-600">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<a className="text-2xl font-serif tracking-tighter text-slate-900 font-medium" href="#">
                SPECTRA
            </a>

<div className="hidden md:flex items-center gap-8">
<a className="hover:text-blue-500 transition-colors text-sm font-medium text-slate-600" href="#">Optical</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-500 transition-colors" href="#">Sun</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-500 transition-colors" href="#">Collections</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-500 transition-colors" href="#">Our Story</a>
</div>

<div className="flex items-center gap-5">
<button className="text-slate-600 hover:text-blue-500 transition-colors">
<iconify-icon className="" icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="text-slate-600 hover:text-blue-500 transition-colors relative">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
</button>
</div>
</div>
</nav>

<header className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">
<div className="grid lg:grid-cols-2 max-w-7xl mr-auto ml-auto gap-x-16 gap-y-16 items-center">

<div className="max-w-2xl relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 mb-8 shadow-sm">
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
<span className="text-xs font-medium text-slate-600 tracking-wide uppercase">New Summer Collection</span>
</div>
<h1 className="lg:text-7xl leading-[1.1] text-5xl font-medium text-slate-900 tracking-tight mb-8">
                    Clarity meets <br/> <i className="w-[24px] h-[24px]" data-icon-replaced="true" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(59, 130, 246)'}}>craftsmanship.</i>
</h1>
<p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-md">
                    Hand-finished acetate frames designed for the modern visionary. Experience lightweight comfort with uncompromising style.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors duration-300 shadow-lg shadow-slate-200" href="#">
                        Shop Women
                    </a>
<a className="inline-flex items-center justify-center px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-lg text-sm font-medium hover:border-slate-400 transition-colors duration-300" href="#">
                        Shop Men
                    </a>
</div>

<div className="mt-12 flex items-center gap-4 text-slate-400">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-slate-100 object-cover" src="https://images.unsplash.com/photo-1721096830627-47001f24c1d0?w=320&amp;q=80"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-slate-100 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-slate-100 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<span className="text-xs font-medium">Trusted by 10k+ customers</span>
</div>
</div>

<div className="relative lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 group">
<img alt="Model wearing glasses" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-5 rounded-xl border border-white/50 shadow-lg flex items-center justify-between">
<div>
<h3 className="font-serif text-lg text-slate-900">The Archer</h3>
<p className="text-xs text-slate-500">Amber Tortoise / Blue Light</p>
</div>
<button className="bg-slate-900 text-white p-3 rounded-full hover:bg-blue-500 transition-colors">
<iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<section className="border-y border-slate-200 bg-white py-10 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">As seen in</p>
<div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<div className="text-2xl font-serif font-bold italic tracking-tighter">VOGUE</div>
<div className="text-xl font-sans font-black tracking-widest">GQ</div>
<div className="text-xl font-serif font-bold tracking-tight">Hypebeast</div>
<div className="text-xl font-sans font-bold tracking-tight">Esquire</div>
<div className="text-xl font-serif font-black tracking-tighter">ELLE</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-white hover:bg-slate-50 hover:shadow-lg transition-all border border-slate-100 group cursor-pointer">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:glasses" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-slate-900 mb-2">Virtual Try-On</h3>
<p className="text-sm text-slate-500 leading-relaxed">See how they look before you buy. Our AR technology maps your face instantly.</p>
</div>

<div className="p-8 rounded-2xl bg-white hover:bg-slate-50 hover:shadow-lg transition-all border border-slate-100 group cursor-pointer">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:truck" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-slate-900 mb-2">Free Shipping &amp; Returns</h3>
<p className="text-sm text-slate-500 leading-relaxed">We ship worldwide for free. If the fit isn't perfect, return it on us.</p>
</div>

<div className="p-8 rounded-2xl bg-white hover:bg-slate-50 hover:shadow-lg transition-all border border-slate-100 group cursor-pointer">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-slate-900 mb-2">Lifetime Warranty</h3>
<p className="text-sm text-slate-500 leading-relaxed">Quality is our promise. Every pair is covered against manufacturing defects.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<span className="text-blue-500 text-xs font-bold tracking-wider uppercase mb-2 block">Best Sellers</span>
<h2 className="text-3xl md:text-4xl font-serif text-slate-900 tracking-tight">Curated Favorites</h2>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-colors bg-white">
<iconify-icon icon="lucide:arrow-left" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-colors bg-white">
<iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-slate-50 rounded-xl p-4 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1">
<div className="relative aspect-[4/3] bg-white rounded-lg mb-4 overflow-hidden flex items-center justify-center">
<img alt="Glasses" className="object-cover w-full h-full mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="bg-white p-2 rounded-full shadow-sm text-slate-400 hover:text-red-500 transition-colors">
<iconify-icon icon="lucide:heart" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg text-slate-900 mb-1">Kennedy</h3>
<p className="text-xs text-slate-500">Crystal Clear</p>
</div>
<span className="text-sm font-medium text-slate-900">$145</span>
</div>
</div>

<div className="group bg-slate-50 rounded-xl p-4 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1">
<div className="relative aspect-[4/3] bg-white rounded-lg mb-4 overflow-hidden flex items-center justify-center">
<img alt="Glasses" className="group-hover:scale-105 transition-transform duration-500 opacity-90 mix-blend-multiply w-full h-full object-cover" src="https://images.unsplash.com/photo-1694892461947-ae4c8473831b?w=800&amp;q=80"/>
<span className="absolute top-3 left-3 bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">New</span>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="font-serif text-lg text-slate-900 mb-1">Monroe</h3>
<p className="text-xs text-slate-500">Matte Black</p>
</div>
<span className="text-sm font-medium text-slate-900">$135</span>
</div>
</div>

<div className="group bg-slate-50 rounded-xl p-4 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1">
<div className="relative aspect-[4/3] bg-white rounded-lg mb-4 overflow-hidden flex items-center justify-center">
<img alt="Glasses" className="object-cover w-full h-full mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" style={{}}/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg text-slate-900 mb-1">Lincoln</h3>
<p className="text-xs text-slate-500">Whiskey Tortoise</p>
</div>
<span className="text-sm font-medium text-slate-900">$155</span>
</div>
</div>

<div className="group bg-slate-50 rounded-xl p-4 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1">
<div className="relative aspect-[4/3] bg-white rounded-lg mb-4 overflow-hidden flex items-center justify-center">
<img alt="Glasses" className="object-cover w-full h-full mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg text-slate-900 mb-1">Roosevelt</h3>
<p className="text-xs text-slate-500">Champagne</p>
</div>
<span className="text-sm font-medium text-slate-900">$165</span>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors" href="#">
                    View all frames
                    <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">How it works</h2>
<p className="text-slate-500">From our lab to your doorstep in three simple steps.</p>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10"></div>

<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
<span className="text-3xl font-serif text-blue-500">1</span>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">Choose your frames</h3>
<p className="text-slate-500 text-sm leading-relaxed max-w-xs">Use our virtual try-on to find the perfect style for your face shape.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
<span className="text-3xl font-serif text-blue-500">2</span>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">Select your lenses</h3>
<p className="text-slate-500 text-sm leading-relaxed max-w-xs">Upload your prescription or choose non-prescription blue light blockers.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
<span className="text-3xl font-serif text-blue-500">3</span>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">Fast, free delivery</h3>
<p className="text-slate-500 text-sm leading-relaxed max-w-xs">We custom craft your eyewear and ship it to you within 3-5 days.</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-slate-900 rounded-[2rem] p-8 md:p-16 text-white relative overflow-hidden">

<div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-slate-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
<div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="">
<h2 className="text-3xl md:text-5xl font-serif mb-6 tracking-tight">Personalize your view.</h2>
<p className="text-slate-400 text-lg mb-10 max-w-md">Select your preferred lens type, coating, and frame width. Our custom labs ensure a perfect fit.</p>

<div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl max-w-sm">
<div className="flex justify-between items-center mb-6">
<span className="text-sm font-medium text-slate-200">Lens Type</span>
<iconify-icon className="text-slate-500" icon="lucide:info" width="16"></iconify-icon>
</div>
<div className="space-y-3">
<label className="flex items-center gap-4 cursor-pointer group">
<input checked="" className="peer sr-only custom-radio" name="lens" type="radio"/>
<div className="w-5 h-5 rounded-full border border-slate-500 flex items-center justify-center transition-all group-hover:border-blue-400">
<div className="radio-dot w-2.5 h-2.5 bg-blue-500 rounded-full opacity-0 transform scale-50 transition-all"></div>
</div>
<span className="text-sm text-slate-300 group-hover:text-white transition-colors">Single Vision</span>
</label>
<label className="flex items-center gap-4 cursor-pointer group">
<input className="peer sr-only custom-radio" name="lens" type="radio"/>
<div className="w-5 h-5 rounded-full border border-slate-500 flex items-center justify-center transition-all group-hover:border-blue-400">
<div className="radio-dot w-2.5 h-2.5 bg-blue-500 rounded-full opacity-0 transform scale-50 transition-all"></div>
</div>
<span className="text-sm text-slate-300 group-hover:text-white transition-colors">Progressive</span>
</label>
<label className="flex items-center gap-4 cursor-pointer group">
<input className="peer sr-only custom-radio" name="lens" type="radio"/>
<div className="w-5 h-5 rounded-full border border-slate-500 flex items-center justify-center transition-all group-hover:border-blue-400">
<div className="radio-dot w-2.5 h-2.5 bg-blue-500 rounded-full opacity-0 transform scale-50 transition-all"></div>
</div>
<span className="text-sm text-slate-300 group-hover:text-white transition-colors">Readers</span>
</label>
</div>
<div className="h-px bg-slate-700 my-6"></div>
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-slate-200">Blue Light Filter</span>

<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
</label>
</div>
</div>
</div>
<div className="relative">
<img alt="Lens details" className="transform lg:translate-x-12 lg:scale-110 object-cover bg-center border-slate-700/50 border rounded-xl shadow-2xl" src="https://images.unsplash.com/photo-1762733031330-21eb317aec0f?w=1600&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 grid grid-cols-2 gap-4">
<img alt="Lifestyle 1" className="rounded-2xl object-cover h-64 w-full shadow-lg translate-y-8" src="https://images.unsplash.com/photo-1517940310602-26535839fe84?auto=format&amp;fit=crop&amp;w=600&amp;q=80" style={{}}/>
<img alt="Lifestyle 2" className="w-full h-64 object-cover rounded-2xl shadow-lg" src="https://images.unsplash.com/photo-1741309385093-b4b303de32df?w=800&amp;q=80" style={{}}/>
</div>
<div className="order-1 md:order-2 md:pl-10">
<h2 className="text-3xl md:text-4xl font-serif text-slate-900 tracking-tight mb-6">Designed in New York,Worn Worldwide.</h2>
<p className="text-slate-600 text-lg leading-relaxed mb-8">
                        We started Spectra with a simple mission: to create eyewear that inspires confidence. By cutting out the middleman, we deliver premium Italian acetate frames at a fraction of the traditional cost.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-slate-700 font-medium">
<iconify-icon className="text-blue-500" icon="lucide:check-circle"></iconify-icon>
                            Hand-polished acetate
                        </li>
<li className="flex items-center gap-3 text-slate-700 font-medium">
<iconify-icon className="text-blue-500" icon="lucide:check-circle"></iconify-icon>
                            Anti-scratch coating included
                        </li>
<li className="flex items-center gap-3 text-slate-700 font-medium">
<iconify-icon className="text-blue-500" icon="lucide:check-circle"></iconify-icon>
                            Sustainable manufacturing
                        </li>
</ul>
<a className="text-slate-900 font-medium border-b border-slate-900 pb-1 hover:text-blue-500 hover:border-blue-500 transition-colors" href="#">Read our full story</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-serif text-slate-900 text-center mb-16">Heard on the street</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"Honestly the best glasses I've ever owned. The quality rivals my designer pairs that cost 3x as much. The home try-on was a game changer."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1758599543154-76ec1c4257df?w=320&amp;q=80"/>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm">Sarah Jenkins</h4>
<span className="text-xs text-blue-500 font-medium">Verified Buyer</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"I was skeptical about buying glasses online, but the prescription was spot on. The 'Lincoln' frames fit my wide face perfectly."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm">Marcus Chen</h4>
<span className="text-xs text-blue-500 font-medium">Verified Buyer</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"Shipping was incredibly fast. I ordered on Monday and had them by Thursday. The blue light filter actually helps my headaches."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm">Emma Wilson</h4>
<span className="text-xs text-blue-500 font-medium">Verified Buyer</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-serif text-slate-900 text-center mb-12">Common questions</h2>
<div className="space-y-4">
<details className="group bg-slate-50 rounded-xl p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer open:bg-white open:shadow-lg transition-all duration-300">
<summary className="flex items-center justify-between font-medium text-slate-900 marker:content-none">
                        How do I know my frame size?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-slate-500 text-sm leading-relaxed">
                        We recommend looking at the inside arm of your current glasses. You'll see three numbers (e.g., 52-18-140) referring to lens width, bridge width, and temple length. You can filter our collection by these measurements.
                    </p>
</details>
<details className="group bg-slate-50 rounded-xl p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer open:bg-white open:shadow-lg transition-all duration-300">
<summary className="flex items-center justify-between font-medium text-slate-900 marker:content-none">
                        Do you accept vision insurance?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-slate-500 text-sm leading-relaxed">
                        We are an out-of-network provider for most vision insurance plans. You can submit your receipt for reimbursement. We also accept FSA and HSA cards directly at checkout.
                    </p>
</details>
<details className="group bg-slate-50 rounded-xl p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer open:bg-white open:shadow-lg transition-all duration-300">
<summary className="flex items-center justify-between font-medium text-slate-900 marker:content-none">
                        What is your return policy?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-slate-500 text-sm leading-relaxed">
                        We offer a 30-day hassle-free return policy. If you're not 100% happy with your frames, simply return them for a full refund or exchange. We even cover the return shipping cost.
                    </p>
</details>
<details className="group bg-slate-50 rounded-xl p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer open:bg-white open:shadow-lg transition-all duration-300">
<summary className="flex items-center justify-between font-medium text-slate-900 marker:content-none">
                        How long does shipping take?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-slate-500 text-sm leading-relaxed">
                        Non-prescription orders typically ship within 1-2 business days. Prescription orders require custom lens cutting and assembly, taking 3-5 business days to process before shipping.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-20 bg-slate-100 border-t border-slate-200">
<div className="max-w-xl mx-auto px-6 text-center">
<iconify-icon className="text-slate-400 mb-4" icon="lucide:mail" strokeWidth="1.2" width="32"></iconify-icon>
<h2 className="text-2xl font-serif text-slate-900 mb-3">Join the Visionary Club</h2>
<p className="text-slate-500 mb-8 text-sm">Sign up for early access to new drops and 10% off your first order.</p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400" placeholder="Enter your email" type="email"/>
<button className="bg-slate-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors" type="button">Subscribe</button>
</form>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-2xl font-serif tracking-tighter text-slate-900 font-medium block mb-6" href="#">SPECTRA</a>
<p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                        Redefining eyewear with quality materials, timeless design, and fair pricing.
                    </p>
<div className="flex gap-4 mt-6">
<a className="text-slate-400 hover:text-blue-500 transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-blue-500 transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-blue-500 transition-colors" href="#">
<iconify-icon icon="lucide:facebook" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Shop</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-500 transition-colors" href="#">Eyeglasses</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Sunglasses</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Support</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-500 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Returns</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Fit Guide</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-500 transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Careers</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Spectra Eyewear Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-slate-400 hover:text-slate-600" href="#">Privacy</a>
<a className="text-xs text-slate-400 hover:text-slate-600" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
