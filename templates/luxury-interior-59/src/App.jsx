import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-gray-900 text-gray-100 text-[10px] sm:text-xs text-center py-3.5 tracking-[0.2em] uppercase font-light px-4">
      Experience the epitome of luxury living — Enjoy complimentary White Glove
      Delivery and bespoke in-home styling on all orders over $5,000
    </div>

<header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col">
<div className="flex justify-between items-center h-20">
<div className="flex-1 hidden md:flex items-center">
<div className="relative w-full max-w-sm">
<input className="w-full border-b border-gray-300 py-2 pl-8 pr-4 text-sm focus:outline-none focus:border-gray-900 transition-colors bg-transparent" placeholder="Search..." type="text"/>
<iconify-icon className="absolute left-0 top-2.5 text-gray-400" icon="solar:magnifer-linear" width="18"></iconify-icon>
</div>
</div>
<div className="flex-shrink-0 flex items-center justify-center">
<a className="text-3xl md:text-4xl font-serif tracking-tighter text-gray-900 uppercase" href="#">
                Artistic Home
              </a>
</div>
<div className="flex-1 flex items-center justify-end space-x-6">
<button className="text-gray-500 hover:text-gray-900 transition-colors hidden sm:flex items-center gap-2">
<iconify-icon icon="solar:user-linear" width="22"></iconify-icon>
<span className="text-xs tracking-wider uppercase">Sign In</span>
</button>
<button className="text-gray-500 hover:text-gray-900 transition-colors relative group flex items-center gap-2">
<div className="relative">
<iconify-icon icon="solar:bag-2-linear" width="22"></iconify-icon>
<span className="absolute -top-1.5 -right-2 bg-gray-900 text-white text-[9px] font-medium w-4 h-4 rounded-full flex items-center justify-center group-hover:bg-gray-700">
                    2
                  </span>
</div>
<span className="text-xs tracking-wider uppercase hidden sm:block">
                  Cart
                </span>
</button>
</div>
</div>
<nav className="hidden md:flex justify-center space-x-10 py-4 border-t border-gray-100">
<a className="text-xs tracking-widest text-gray-600 hover:text-gray-900 uppercase transition-colors" href="#">
              Living Room
            </a>
<a className="text-xs tracking-widest text-gray-600 hover:text-gray-900 uppercase transition-colors" href="#">
              Bed &amp; Bath
            </a>
<a className="text-xs tracking-widest text-gray-600 hover:text-gray-900 uppercase transition-colors" href="#">
              Office
            </a>
<a className="text-xs tracking-widest text-gray-600 hover:text-gray-900 uppercase transition-colors" href="#">
              Outdoors
            </a>
<a className="text-xs tracking-widest text-gray-600 hover:text-gray-900 uppercase transition-colors" href="#">
              Storage
            </a>
<a className="text-xs tracking-widest text-gray-600 hover:text-gray-900 uppercase transition-colors" href="#">
              Decor
            </a>
<a className="text-xs tracking-widest text-gray-600 hover:text-gray-900 uppercase transition-colors" href="#">
              Lighting
            </a>
<a className="text-xs tracking-widest text-gray-900 font-semibold hover:text-gray-600 uppercase transition-colors" href="#">
              Sale
            </a>
</nav>
</div>
</div>
</header>
<main className="flex-grow">

<section className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="flex gap-10">
<aside className="hidden lg:block w-56 flex-shrink-0 py-4">
<ul className="space-y-5">
<li>
<a className="text-gray-600 hover:text-gray-900 text-sm font-serif italic tracking-wide" href="#">
                  Area Rugs
                </a>
</li>
<li>
<a className="text-gray-600 hover:text-gray-900 text-sm font-serif italic tracking-wide" href="#">
                  Wall Art
                </a>
</li>
<li>
<a className="text-gray-600 hover:text-gray-900 text-sm font-serif italic tracking-wide" href="#">
                  Coffee Tables
                </a>
</li>
<li>
<a className="text-gray-600 hover:text-gray-900 text-sm font-serif italic tracking-wide" href="#">
                  Sofas &amp; Chairs
                </a>
</li>
<li>
<a className="text-gray-600 hover:text-gray-900 text-sm font-serif italic tracking-wide" href="#">
                  Decorative Pillows
                </a>
</li>
<li>
<a className="text-gray-600 hover:text-gray-900 text-sm font-serif italic tracking-wide" href="#">
                  Patio Dining
                </a>
</li>
<li>
<a className="text-gray-600 hover:text-gray-900 text-sm font-serif italic tracking-wide" href="#">
                  End Tables
                </a>
</li>
<li>
<a className="text-gray-600 hover:text-gray-900 text-sm font-serif italic tracking-wide" href="#">
                  Bar Stools
                </a>
</li>
<li className="pt-4 border-t border-gray-100">
<a className="text-gray-900 hover:text-gray-600 text-xs uppercase tracking-widest font-medium" href="#">
                  New Arrivals
                </a>
</li>
<li>
<a className="text-red-700 hover:text-red-800 text-xs uppercase tracking-widest font-medium" href="#">
                  Clearance Items
                </a>
</li>
</ul>
</aside>
<div className="flex-1 relative h-[500px] lg:h-[600px] bg-gray-100 flex items-center">
<img alt="Living Space" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2874&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10"></div>
<div className="relative z-10 bg-white/95 backdrop-blur-sm p-10 max-w-md ml-8 md:ml-16 shadow-lg">
<h2 className="text-3xl md:text-4xl font-serif tracking-tight text-gray-900 mb-4">
                Curate an Atmosphere of Uncompromising Luxury
              </h2>
<p className="text-gray-600 text-sm font-light leading-relaxed mb-8">
                Elevate your living space with our exclusive collection of
                globally sourced, artisanal masterworks. Experience unparalleled
                craftsmanship and transformative design that redefines the art
                of sophisticated living.
              </p>
<a className="inline-block bg-gray-900 text-white px-8 py-3.5 text-xs tracking-widest uppercase hover:bg-gray-800 transition-colors duration-300" href="#">
                Shop Now
              </a>
</div>
</div>
</div>
</section>

<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-8 border-y border-gray-100">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 text-center text-xs tracking-wide uppercase text-gray-500">
<div className="py-2 px-4 hover:text-gray-900 transition-colors cursor-pointer">
            Apply for our 12-Month Interest-Free Card
          </div>
<div className="py-2 px-4 font-semibold text-gray-900 tracking-widest">
            Take up to 60% Off
          </div>
<div className="py-2 px-4 hover:text-gray-900 transition-colors cursor-pointer">
            No Tax + Free Shipping On Everything
          </div>
</div>
</div>
<section className="py-16 bg-white">
<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-10">
<h2 className="text-2xl font-serif tracking-widest uppercase text-gray-900 mb-3">
              Deal
            </h2>
<a className="text-xs text-gray-500 hover:text-gray-900 transition-colors tracking-widest uppercase border-b border-transparent hover:border-gray-900 pb-0.5" href="#">
              See all of today's deals &gt;
            </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<a className="group block" href="#">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden mb-4">
<img alt="Kitchen" className="w-full h-full object-cover transition duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5"></div>
</div>
<div className="text-center">
<span className="inline-block border border-gray-200 px-6 py-2 text-sm font-serif text-gray-900 group-hover:border-gray-900 transition-colors">
                  Up to 60% Off
                </span>
</div>
</a>
<a className="group block" href="#">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden mb-4">
<img alt="Living Room" className="w-full h-full object-cover transition duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2874&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5"></div>
</div>
<div className="text-center">
<span className="inline-block border border-gray-200 px-6 py-2 text-sm font-serif text-gray-900 group-hover:border-gray-900 transition-colors">
                  Living Room Furniture
                </span>
</div>
</a>
<a className="group block" href="#">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden mb-4">
<img alt="Lighting" className="w-full h-full object-cover transition duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5"></div>
</div>
<div className="text-center">
<span className="inline-block border border-gray-200 px-6 py-2 text-sm font-serif text-gray-900 group-hover:border-gray-900 transition-colors">
                  Lighting under $199
                </span>
</div>
</a>
</div>
</div>
</section>

<section className="py-16 bg-white border-t border-gray-100">
<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-10">
<h2 className="text-2xl font-serif tracking-widest uppercase text-gray-900 mb-2">
              Design
            </h2>
<div className="w-12 h-px bg-gray-300 mx-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<a className="relative aspect-[4/3] group overflow-hidden bg-gray-100" href="#">
<img className="w-full h-full object-cover transition duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/95 px-4 py-2 text-sm font-serif text-gray-900 shadow-sm">
                Sleek Kitchen Accessories
              </div>
</a>
<a className="relative aspect-[4/3] group overflow-hidden bg-gray-100" href="#">
<img className="w-full h-full object-cover transition duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2874&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/95 px-4 py-2 text-sm font-serif text-gray-900 shadow-sm">
                Living Room Accessories
              </div>
</a>
<a className="relative aspect-[4/3] group overflow-hidden bg-gray-100" href="#">
<img className="w-full h-full object-cover transition duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/95 px-4 py-2 text-sm font-serif text-gray-900 shadow-sm">
                Opulent Lighting
              </div>
</a>
<a className="relative aspect-[21/9] md:col-span-2 group overflow-hidden bg-gray-100" href="#">
<img className="w-full h-full object-cover transition duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&amp;w=2711&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/95 px-4 py-2 text-sm font-serif text-gray-900 shadow-sm">
                Beautiful Bedding
              </div>
</a>
<a className="relative aspect-[4/3] group overflow-hidden bg-gray-100" href="#">
<img className="w-full h-full object-cover transition duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/95 px-4 py-2 text-sm font-serif text-gray-900 shadow-sm">
                Cozy &amp; Comfy Living
              </div>
</a>
<a className="relative aspect-[4/3] group overflow-hidden bg-gray-100" href="#">
<img className="w-full h-full object-cover transition duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/95 px-4 py-2 text-sm font-serif text-gray-900 shadow-sm">
                Multi-Friendly Workspace
              </div>
</a>
<div className="relative aspect-[4/3] flex flex-col items-center justify-center bg-gray-50 border border-gray-100 p-8 text-center">
<h3 className="text-3xl font-serif tracking-widest uppercase mb-4 text-gray-900">
                The Rug Shop
              </h3>
<p className="text-sm text-gray-500 font-light mb-6">
                Handpicked styles at prices you'll love
              </p>
<a className="bg-gray-900 text-white px-8 py-3 text-xs tracking-widest uppercase hover:bg-gray-800 transition-colors" href="#">
                Shop Now
              </a>
</div>
<a className="relative aspect-[4/3] group overflow-hidden bg-gray-100" href="#">
<img className="w-full h-full object-cover transition duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1582561424760-0321d6cb2811?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/95 px-4 py-2 text-sm font-serif text-gray-900 shadow-sm">
                Art Collecting
              </div>
</a>
</div>
</div>
</section>
<section className="py-16 bg-gray-50">
<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-12">
<p className="text-lg font-serif italic text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
            </p>
<p className="text-xs text-gray-400 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
<div className="border border-gray-200 p-10 flex flex-col items-center hover:shadow-md transition-shadow bg-white">
<h4 className="text-sm font-bold tracking-widest uppercase mb-4 text-gray-900">
                Free Shipping
              </h4>
<p className="text-sm text-gray-500 font-light leading-relaxed mb-6 px-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
              </p>
<a className="text-xs text-gray-900 tracking-wider uppercase hover:text-gray-500 transition-colors border-b border-gray-900 hover:border-gray-500 pb-0.5" href="#">
                Read Full Policy
              </a>
</div>
<div className="border border-gray-200 p-10 flex flex-col items-center hover:shadow-md transition-shadow bg-white">
<h4 className="text-sm font-bold tracking-widest uppercase mb-4 text-gray-900">
                Quality Products
              </h4>
<p className="text-sm text-gray-500 font-light leading-relaxed mb-6 px-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
              </p>
<a className="text-xs text-gray-900 tracking-wider uppercase hover:text-gray-500 transition-colors border-b border-gray-900 hover:border-gray-500 pb-0.5" href="#">
                Learn More
              </a>
</div>
<div className="border border-gray-200 p-10 flex flex-col items-center hover:shadow-md transition-shadow bg-white">
<h4 className="text-sm font-bold tracking-widest uppercase mb-4 text-gray-900">
                Expert Service
              </h4>
<p className="text-sm text-gray-500 font-light leading-relaxed mb-6 px-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
              </p>
<a className="text-xs text-gray-900 tracking-wider uppercase hover:text-gray-500 transition-colors border-b border-gray-900 hover:border-gray-500 pb-0.5" href="#">
                Learn More
              </a>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-gray-100 bg-white">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
<div className="flex flex-col items-center pt-8 md:pt-0 px-4">
<div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-gray-800">
<iconify-icon height="24" icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
</div>
<h4 className="text-sm font-serif tracking-wide mb-3 text-gray-900">
                White Glove Delivery
              </h4>
<p className="text-xs text-gray-500 font-light leading-relaxed">
                Complimentary in-home delivery, placement, and packaging removal
                on eligible orders.
              </p>
</div>
<div className="flex flex-col items-center pt-8 md:pt-0 px-4">
<div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-gray-800">
<iconify-icon height="24" icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<h4 className="text-sm font-serif tracking-wide mb-3 text-gray-900">
                Design Services
              </h4>
<p className="text-xs text-gray-500 font-light leading-relaxed">
                Connect with our dedicated concierges for complimentary space
                planning and styling.
              </p>
</div>
<div className="flex flex-col items-center pt-8 md:pt-0 px-4">
<div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-gray-800">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h4 className="text-sm font-serif tracking-wide mb-3 text-gray-900">
                Curated Quality
              </h4>
<p className="text-xs text-gray-500 font-light leading-relaxed">
                Every piece is hand-selected from the world's finest artisans
                and premium brands.
              </p>
</div>
</div>
</div>
</section>
</main>

<section className="py-16 bg-white border-t border-gray-100">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="border-y border-gray-200 py-12 px-8 relative">
<span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-4 text-4xl text-gray-300 font-serif">
            "
          </span>
<h2 className="text-xl font-serif tracking-widest uppercase text-gray-900 mb-6">
            Testimonials
          </h2>
<p className="text-lg font-serif italic text-gray-600 leading-relaxed mb-6">
            "From the moment our curated pieces arrived, our home was
            transformed into a sanctuary of unparalleled elegance. The
            meticulous attention to detail, exquisite craftsmanship, and the
            seamless white-glove delivery exceeded every expectation. True
            luxury is not just seen, it is deeply felt in every interaction."
          </p>
<p className="text-xs tracking-widest uppercase text-gray-900 font-bold">
            - Deb Jones,
            <span className="font-light text-gray-500">A Real Customer, Texas</span>
</p>
</div>
</div>
</section>
<footer className="bg-gray-900 text-white pt-20 pb-10">
<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

<div className="lg:col-span-4">
<span className="text-4xl font-serif tracking-tighter mb-6 block uppercase">
              ARTISTIC HOME
            </span>
<p className="text-sm text-gray-400 font-light leading-relaxed max-w-sm mb-8">
              The premier destination for extraordinary design. We curate the
              finest luxury furniture, lighting, and decor from across the
              globe.
            </p>
<div className="flex space-x-5 text-gray-400">
<a className="hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:pin-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-2 lg:col-start-6">
<h4 className="text-[10px] tracking-widest uppercase mb-6 text-gray-500 font-medium">
              Customer Care
            </h4>
<ul className="space-y-4 text-sm font-light text-gray-300">
<li>
<a className="hover:text-white hover:underline underline-offset-4 transition-all" href="#">
                  Contact Us
                </a>
</li>
<li>
<a className="hover:text-white hover:underline underline-offset-4 transition-all" href="#">
                  Shipping &amp; Delivery
                </a>
</li>
<li>
<a className="hover:text-white hover:underline underline-offset-4 transition-all" href="#">
                  Returns &amp; Exchanges
                </a>
</li>
<li>
<a className="hover:text-white hover:underline underline-offset-4 transition-all" href="#">
                  FAQ
                </a>
</li>
</ul>
</div>

<div className="lg:col-span-2">
<h4 className="text-[10px] tracking-widest uppercase mb-6 text-gray-500 font-medium">
              The Company
            </h4>
<ul className="space-y-4 text-sm font-light text-gray-300">
<li>
<a className="hover:text-white hover:underline underline-offset-4 transition-all" href="#">
                  About Aura
                </a>
</li>
<li>
<a className="hover:text-white hover:underline underline-offset-4 transition-all" href="#">
                  Trade Program
                </a>
</li>
<li>
<a className="hover:text-white hover:underline underline-offset-4 transition-all" href="#">
                  Design Services
                </a>
</li>
<li>
<a className="hover:text-white hover:underline underline-offset-4 transition-all" href="#">
                  Journal
                </a>
</li>
</ul>
</div>

<div className="lg:col-span-3">
<h4 className="text-[10px] tracking-widest uppercase mb-6 text-gray-500 font-medium">
              Join the List
            </h4>
<p className="text-xs text-gray-400 font-light mb-4">
              Subscribe for early access to new arrivals, exclusive events, and
              design inspiration.
            </p>
<form className="relative group">
<input className="w-full bg-transparent border-b border-gray-700 pb-3 text-sm text-white placeholder-gray-600 outline-none focus:border-white transition-colors rounded-none" placeholder="Email Address" type="email"/>
<button className="absolute right-0 top-0 text-gray-500 group-hover:text-white transition-colors" type="submit">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] tracking-wider text-gray-500 uppercase">
            © 2024 Artistic Home. All rights reserved.
          </p>
<div className="flex space-x-6 text-[10px] tracking-wider text-gray-500 uppercase">
<a className="hover:text-gray-300 transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-gray-300 transition-colors" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>

    </>
  );
}
