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
gray: {
50: '#F9FAFB',
100: '#F3F4F6',
200: '#E5E7EB',
300: '#D1D5DB',
400: '#9CA3AF',
500: '#6B7280',
600: '#4B5563',
700: '#374151',
800: '#1F2937',
900: '#111827',
}
},
animation: {
'blob': 'blob 7s infinite',
}
}
}
}
// Intersection Observer for Scroll Animations
document.addEventListener('DOMContentLoaded', () => {
const observerOptions = {
threshold: 0.1,
rootMargin: "0px 0px -50px 0px"
};
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('is-visible');
observer.unobserve(entry.target); // Only animate once
}
});
}, observerOptions);
const elements = document.querySelectorAll('.reveal-on-scroll');
elements.forEach((el, index) => {
// Add staggered delay based on child index if needed,
// but simpler to just observe
observer.observe(el);
});
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
      

<div className="bg-gray-900 text-white text-xs font-medium text-center py-2.5 z-50 relative">
        Free worldwide shipping on orders over $75
    </div>

<nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center md:hidden">
<button className="text-gray-500 hover:text-gray-900 transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
<a className="text-lg font-semibold tracking-tighter uppercase transition-opacity duration-300 group-hover:opacity-70" href="#">Aura.</a>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-300" href="#">New Arrivals</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-300" href="#">Home</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-300" href="#">Tech</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-300" href="#">Accessories</a>
</div>

<div className="flex items-center gap-4">
<button className="text-gray-500 hover:text-gray-900 transition-transform duration-300 hover:scale-110">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="text-gray-500 hover:text-gray-900 transition-transform duration-300 hover:scale-110 relative group">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 h-2 w-2 bg-gray-900 rounded-full transition-transform duration-300 group-hover:scale-125"></span>
</button>
</div>
</div>
</div>
</nav>

<section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 backdrop-blur border border-gray-200 text-xs font-medium text-gray-600 mb-8 animate-fade-up hover:border-gray-300 transition-colors cursor-default" style={{animationDelay: '0.1s'}}>
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                Summer Collection Available
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-gray-900 mb-6 animate-fade-up" style={{animationDelay: '0.2s'}}>
                Elevate your everyday <br className="hidden md:block"/>
<span className="text-gray-400 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-200">with curated essentials.</span>
</h1>
<p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 font-light animate-fade-up" style={{animationDelay: '0.4s'}}>
                Discover a collection of thoughtfully designed objects for your home and workspace. Minimalist aesthetics meets functional excellence.
            </p>
<div className="mt-10 flex justify-center gap-4 animate-fade-up" style={{animationDelay: '0.6s'}}>
<a className="group relative inline-flex items-center justify-center px-8 py-3 border border-transparent text-sm font-medium rounded-full text-white bg-gray-900 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/20" href="#products">
<span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-700 rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
<span className="relative">Shop Collection</span>
</a>
<a className="group inline-flex items-center justify-center px-8 py-3 border border-gray-200 text-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none transition-all duration-300 hover:border-gray-300" href="#">
<span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">Learn More</span>
<iconify-icon className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full h-full max-w-7xl overflow-visible pointer-events-none">
<div className="absolute top-20 left-10 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute top-20 right-10 w-96 h-96 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-gray-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" style={{animationDelay: '4s'}}></div>
</div>
</section>

<section className="border-y border-gray-100 bg-gray-50/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
<div className="flex flex-col items-center gap-3 reveal-on-scroll">
<div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 transition-transform duration-500 hover:scale-110 hover:shadow-md hover:border-gray-200">
<iconify-icon className="text-gray-900" icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900">Fast Global Shipping</h3>
<p className="text-xs text-gray-500 mt-1">Tracked delivery within 5-7 days</p>
</div>
</div>
<div className="flex flex-col items-center gap-3 reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 transition-transform duration-500 hover:scale-110 hover:shadow-md hover:border-gray-200">
<iconify-icon className="text-gray-900" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900">Quality Guarantee</h3>
<p className="text-xs text-gray-500 mt-1">30-day money back guarantee</p>
</div>
</div>
<div className="flex flex-col items-center gap-3 reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 transition-transform duration-500 hover:scale-110 hover:shadow-md hover:border-gray-200">
<iconify-icon className="text-gray-900" icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900">Sustainable Sourcing</h3>
<p className="text-xs text-gray-500 mt-1">Ethically manufactured goods</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="products">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12 reveal-on-scroll">
<div>
<h2 className="text-2xl font-medium tracking-tight text-gray-900">Featured Arrivals</h2>
<p className="mt-2 text-sm text-gray-500">Hand-picked items for this season.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-sm font-medium text-gray-900 group transition-colors" href="#">
                    View all
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">

<div className="group relative reveal-on-scroll" style={{transitionDelay: '0ms'}}>
<div className="aspect-square w-full overflow-hidden rounded-2xl bg-gray-100 border border-gray-100 relative cursor-pointer">
<div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-300 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
<iconify-icon icon="solar:lamp-linear" strokeWidth="1" width="64"></iconify-icon>
</div>

<div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-medium uppercase tracking-wider text-gray-900 rounded-sm shadow-sm z-10">
                            Best Seller
                        </div>

<div className="absolute bottom-4 left-4 right-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
<button className="w-full bg-white/95 backdrop-blur text-gray-900 shadow-lg py-3 rounded-lg text-xs font-semibold hover:bg-gray-50 flex items-center justify-center gap-2 border border-gray-100">
<iconify-icon icon="solar:cart-plus-linear" width="16"></iconify-icon>
                                Add to Cart
                            </button>
</div>
</div>
<div className="mt-4 flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
<a href="#">
<span aria-hidden="true" className="absolute inset-0"></span>
                                    Lumina Desk Lamp
                                </a>
</h3>
<p className="mt-1 text-sm text-gray-500">Matte Black</p>
</div>
<p className="text-sm font-medium text-gray-900">$89</p>
</div>
</div>

<div className="group relative reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="aspect-square w-full overflow-hidden rounded-2xl bg-gray-100 border border-gray-100 relative cursor-pointer">
<div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-300 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
<iconify-icon icon="solar:keyboard-linear" strokeWidth="1" width="64"></iconify-icon>
</div>

<div className="absolute bottom-4 left-4 right-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
<button className="w-full bg-white/95 backdrop-blur text-gray-900 shadow-lg py-3 rounded-lg text-xs font-semibold hover:bg-gray-50 flex items-center justify-center gap-2 border border-gray-100">
<iconify-icon icon="solar:cart-plus-linear" width="16"></iconify-icon>
                                Add to Cart
                            </button>
</div>
</div>
<div className="mt-4 flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
<a href="#">
<span aria-hidden="true" className="absolute inset-0"></span>
                                    Mechanical Keyboard
                                </a>
</h3>
<p className="mt-1 text-sm text-gray-500">Wireless, 75%</p>
</div>
<p className="text-sm font-medium text-gray-900">$145</p>
</div>
</div>

<div className="group relative reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="aspect-square w-full overflow-hidden rounded-2xl bg-gray-100 border border-gray-100 relative cursor-pointer">
<div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-300 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
<iconify-icon icon="solar:cup-hot-linear" strokeWidth="1" width="64"></iconify-icon>
</div>
<div className="absolute top-3 left-3 px-2.5 py-1 bg-gray-900 text-[10px] font-medium uppercase tracking-wider text-white rounded-sm shadow-sm z-10">
                            New
                        </div>

<div className="absolute bottom-4 left-4 right-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
<button className="w-full bg-white/95 backdrop-blur text-gray-900 shadow-lg py-3 rounded-lg text-xs font-semibold hover:bg-gray-50 flex items-center justify-center gap-2 border border-gray-100">
<iconify-icon icon="solar:cart-plus-linear" width="16"></iconify-icon>
                                Add to Cart
                            </button>
</div>
</div>
<div className="mt-4 flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
<a href="#">
<span aria-hidden="true" className="absolute inset-0"></span>
                                    Ceramic Carafe
                                </a>
</h3>
<p className="mt-1 text-sm text-gray-500">Stone Grey</p>
</div>
<p className="text-sm font-medium text-gray-900">$42</p>
</div>
</div>

<div className="group relative reveal-on-scroll" style={{transitionDelay: '300ms'}}>
<div className="aspect-square w-full overflow-hidden rounded-2xl bg-gray-100 border border-gray-100 relative cursor-pointer">
<div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-300 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
<iconify-icon icon="solar:headphones-round-linear" strokeWidth="1" width="64"></iconify-icon>
</div>

<div className="absolute bottom-4 left-4 right-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
<button className="w-full bg-white/95 backdrop-blur text-gray-900 shadow-lg py-3 rounded-lg text-xs font-semibold hover:bg-gray-50 flex items-center justify-center gap-2 border border-gray-100">
<iconify-icon icon="solar:cart-plus-linear" width="16"></iconify-icon>
                                Add to Cart
                            </button>
</div>
</div>
<div className="mt-4 flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
<a href="#">
<span aria-hidden="true" className="absolute inset-0"></span>
                                    Studio Headphones
                                </a>
</h3>
<p className="mt-1 text-sm text-gray-500">Noise Cancelling</p>
</div>
<p className="text-sm font-medium text-gray-900">$299</p>
</div>
</div>
</div>
<div className="mt-12 text-center md:hidden">
<a className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors" href="#">
                    View all products
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
<div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white aspect-[4/3] flex items-center justify-center reveal-on-scroll group">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-25"></div>

<div className="relative z-10 text-center p-8 transition-transform duration-1000 ease-in-out group-hover:translate-y-[-5px]">
<div className="mx-auto w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center mb-6 shadow-inner ring-1 ring-gray-100">
<iconify-icon className="text-gray-400 group-hover:text-gray-600 transition-colors duration-500" icon="solar:smart-home-angle-linear" width="48"></iconify-icon>
</div>
<div className="space-y-3 opacity-60">
<div className="h-2 w-24 bg-gray-200 rounded mx-auto overflow-hidden">
<div className="h-full w-full bg-gray-300/50 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
</div>
<div className="h-2 w-32 bg-gray-100 rounded mx-auto"></div>
</div>
</div>
</div>
<div className="mt-12 lg:mt-0 reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-6">Designed for the <br/>modern workflow.</h2>
<div className="space-y-8">
<div className="flex gap-4 group">
<div className="flex-shrink-0 mt-1">
<div className="flex items-center justify-center h-8 w-8 rounded-full bg-white border border-gray-200 shadow-sm transition-colors duration-300 group-hover:border-gray-400 group-hover:bg-gray-50">
<iconify-icon className="transition-transform duration-300 group-hover:scale-110" icon="solar:palette-linear" width="16"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900">Minimalist Aesthetic</h3>
<p className="mt-2 text-sm text-gray-500 leading-relaxed">
                                    Our products are selected to blend seamlessly into your environment, reducing visual clutter and promoting focus.
                                </p>
</div>
</div>
<div className="flex gap-4 group">
<div className="flex-shrink-0 mt-1">
<div className="flex items-center justify-center h-8 w-8 rounded-full bg-white border border-gray-200 shadow-sm transition-colors duration-300 group-hover:border-gray-400 group-hover:bg-gray-50">
<iconify-icon className="transition-transform duration-300 group-hover:scale-110" icon="solar:medal-ribbon-star-linear" width="16"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900">Premium Materials</h3>
<p className="mt-2 text-sm text-gray-500 leading-relaxed">
                                    We partner with manufacturers who prioritize longevity, using durable materials like aluminum, ceramic, and recycled fabrics.
                                </p>
</div>
</div>
<div className="flex gap-4 group">
<div className="flex-shrink-0 mt-1">
<div className="flex items-center justify-center h-8 w-8 rounded-full bg-white border border-gray-200 shadow-sm transition-colors duration-300 group-hover:border-gray-400 group-hover:bg-gray-50">
<iconify-icon className="transition-transform duration-300 group-hover:scale-110" icon="solar:global-linear" width="16"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900">Carbon Neutral Shipping</h3>
<p className="mt-2 text-sm text-gray-500 leading-relaxed">
                                    We offset 100% of carbon emissions from our shipping partners to ensure your convenience doesn't cost the earth.
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-gray-100 overflow-hidden">
<div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal-on-scroll">
<div className="inline-block animate-bounce duration-[3000ms]">
<iconify-icon className="text-gray-400 mb-4" icon="solar:letter-linear" width="32"></iconify-icon>
</div>
<h2 className="text-2xl font-medium tracking-tight text-gray-900">Join the inner circle</h2>
<p className="mt-3 text-sm text-gray-500">Subscribe for early access to drops and exclusive offers. No spam, ever.</p>
<form className="mt-8 relative max-w-sm mx-auto">
<div className="relative group">
<input className="block w-full rounded-md border-0 py-3 pl-4 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6 transition-all duration-300 outline-none hover:ring-gray-300" placeholder="email@example.com" type="email"/>
<div className="absolute inset-y-0 right-0 flex items-center pr-2">
<button className="p-1.5 rounded-sm text-gray-400 hover:text-gray-900 transition-colors hover:bg-gray-50" type="submit">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="mt-4 flex items-center justify-center gap-2">
<input className="appearance-none h-4 w-4 rounded border border-gray-300 checked:bg-gray-900 checked:border-gray-900 focus:ring-offset-0 focus:ring-0 transition-all cursor-pointer relative after:content-['✓'] after:absolute after:text-white after:text-xs after:left-[2px] after:top-[0px] after:hidden checked:after:block hover:border-gray-400" id="terms" type="checkbox"/>
<label className="text-xs text-gray-500 select-none cursor-pointer" htmlFor="terms">I agree to the <a className="underline hover:text-gray-900 transition-colors" href="#">Terms of Service</a></label>
</div>
</form>
</div>
</section>

<footer className="bg-white border-t border-gray-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2 reveal-on-scroll">
<a className="text-lg font-semibold tracking-tighter uppercase mb-4 block hover:opacity-70 transition-opacity" href="#">Aura.</a>
<p className="text-sm text-gray-500 max-w-xs leading-relaxed">
                        Curating the finest essentials for the modern creator. Quality, function, and aesthetics in perfect harmony.
                    </p>
<div className="flex gap-4 mt-6">
<a className="text-gray-400 hover:text-gray-900 transition-colors transform hover:scale-110" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-gray-900 transition-colors transform hover:scale-110" href="#">
<iconify-icon icon="solar:mention-circle-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<h3 className="text-sm font-medium text-gray-900 mb-4">Shop</h3>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors hover:translate-x-1 inline-block duration-200" href="#">New Arrivals</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors hover:translate-x-1 inline-block duration-200" href="#">Workspace</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors hover:translate-x-1 inline-block duration-200" href="#">Home Decor</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors hover:translate-x-1 inline-block duration-200" href="#">Tech</a></li>
</ul>
</div>
<div className="reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<h3 className="text-sm font-medium text-gray-900 mb-4">Support</h3>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors hover:translate-x-1 inline-block duration-200" href="#">Order Status</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors hover:translate-x-1 inline-block duration-200" href="#">Shipping &amp; Returns</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors hover:translate-x-1 inline-block duration-200" href="#">FAQ</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors hover:translate-x-1 inline-block duration-200" href="#">Contact Us</a></li>
</ul>
</div>
<div className="reveal-on-scroll" style={{transitionDelay: '300ms'}}>
<h3 className="text-sm font-medium text-gray-900 mb-4">Company</h3>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors hover:translate-x-1 inline-block duration-200" href="#">About</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors hover:translate-x-1 inline-block duration-200" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors hover:translate-x-1 inline-block duration-200" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 reveal-on-scroll">
<p className="text-xs text-gray-400">© 2024 Aura Inc. All rights reserved.</p>
<div className="flex items-center gap-4">
<iconify-icon className="text-gray-300 hover:text-gray-500 transition-colors" icon="solar:card-linear" width="24"></iconify-icon>
<iconify-icon className="text-gray-300 hover:text-gray-500 transition-colors" icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
