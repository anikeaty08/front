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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};

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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
<div className="bg-red-600 text-white p-1.5 rounded-lg group-hover:rotate-3 transition-transform duration-300">
<iconify-icon icon="lucide:flame" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-gray-900">
                        Da Sizzling Bite
                    </span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-gray-500 hover:text-red-600 transition-colors" href="#menu">Menu</a>
<a className="text-sm font-medium text-gray-500 hover:text-red-600 transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-gray-500 hover:text-red-600 transition-colors" href="#location">Location</a>
<a className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-800 transition-all hover:shadow-lg hover:-translate-y-0.5" href="tel:+919988554961">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="16"></iconify-icon>
                        Call Now
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-gray-500 hover:text-gray-900 focus:outline-none p-2">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden cheese-gradient">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="text-center lg:text-left space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-medium tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
                        Open till 11 PM
                    </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter text-gray-900 leading-[1.1] text-balance">
                        Fresh Base.<br/>
<span className="text-gray-400">Crazy Cheese Pull.</span><br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">Pure Pizza Love.</span>
</h1>
<p className="text-lg text-gray-500 max-w-lg mx-auto lg:mx-0 font-normal leading-relaxed">
                        Experience Ludhiana's finest Italian cloud kitchen. From our kitchen to your hands, sizzling hot and packed with flavor.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
<a className="inline-flex justify-center items-center gap-2 bg-red-600 text-white text-base font-medium px-8 py-3.5 rounded-full hover:bg-red-700 transition-all shadow-md hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto" href="#menu">
                            Order Now
                            <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 bg-white text-gray-700 border border-gray-200 text-base font-medium px-8 py-3.5 rounded-full hover:bg-gray-50 transition-all hover:border-gray-300 w-full sm:w-auto" href="#menu">
                            View Menu
                        </a>
</div>

<div className="pt-6 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-yellow-400 fill-yellow-400" icon="lucide:star" width="16"></iconify-icon>
<span>5.0 Rating (5 Reviews)</span>
</div>
<div className="h-4 w-px bg-gray-200"></div>
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:indian-rupee" strokeWidth="1.5" width="14"></iconify-icon>
<span>₹1–200 / person</span>
</div>
</div>
</div>

<div className="relative group perspective-1000">
<div className="absolute -inset-4 bg-gradient-to-r from-red-100 to-yellow-100 rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
<img alt="Delicious Pizza with Cheese Pull" className="relative w-full aspect-square object-cover rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700 ease-out border-4 border-white transform-gpu hover:scale-105" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-bounce" style={{animationDuration: '3s'}}>
<div className="flex items-center gap-3">
<div className="bg-green-100 text-green-700 p-2 rounded-lg">
<iconify-icon icon="lucide:check-circle" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-500 font-medium">100% Fresh</p>
<p className="text-sm font-semibold text-gray-900">Handmade Base</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-y border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
<div className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-gray-50 transition-colors cursor-default">
<div className="bg-red-50 text-red-600 p-3 rounded-xl mb-3">
<iconify-icon icon="lucide:clock" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-gray-900">Fast Service</h3>
<p className="text-xs text-gray-500 mt-1">Hot &amp; Ready</p>
</div>
<div className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-gray-50 transition-colors cursor-default">
<div className="bg-yellow-50 text-yellow-600 p-3 rounded-xl mb-3">
<iconify-icon icon="lucide:utensils" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-gray-900">Dine-In</h3>
<p className="text-xs text-gray-500 mt-1">Cozy Ambience</p>
</div>
<div className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-gray-50 transition-colors cursor-default">
<div className="bg-green-50 text-green-600 p-3 rounded-xl mb-3">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-gray-900">Takeaway</h3>
<p className="text-xs text-gray-500 mt-1">Secure Packing</p>
</div>
<div className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-gray-50 transition-colors cursor-default">
<div className="bg-blue-50 text-blue-600 p-3 rounded-xl mb-3">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-gray-900">Hygiene First</h3>
<p className="text-xs text-gray-500 mt-1">Clean Kitchen</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="menu">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Top Picks from the Oven</h2>
<p className="text-gray-500">Hand-tossed dough, premium mozzarella, and our signature sauce. Taste the difference in every slice.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-100 relative overflow-hidden">
<div className="absolute top-6 left-6 z-10 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        Must Try
                    </div>
<div className="aspect-[4/3] overflow-hidden rounded-2xl mb-5 bg-gray-100 relative">
<img alt="Paneer 65 Pizza" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold text-gray-900">Paneer 65 Pizza</h3>
<span className="text-sm font-medium text-red-600 bg-red-50 px-2 py-1 rounded-md">Bestseller</span>
</div>
<p className="text-sm text-gray-500 mb-4 line-clamp-2">Spicy Paneer 65 chunks, onions, capsicum, and loads of liquid cheese.</p>
<div className="flex items-center justify-between mt-4">
<span className="text-lg font-semibold text-gray-900">₹189</span>
<button className="bg-gray-900 text-white p-2.5 rounded-full hover:bg-red-600 transition-colors">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-100">
<div className="aspect-[4/3] overflow-hidden rounded-2xl mb-5 bg-gray-100">
<img alt="Classic Veg Pizza" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold text-gray-900">Classic Veg</h3>
</div>
<p className="text-sm text-gray-500 mb-4 line-clamp-2">Crunchy onions, capsicum, tomatoes with mozzarella cheese.</p>
<div className="flex items-center justify-between mt-4">
<span className="text-lg font-semibold text-gray-900">₹149</span>
<button className="bg-gray-900 text-white p-2.5 rounded-full hover:bg-red-600 transition-colors">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-100">
<div className="aspect-[4/3] overflow-hidden rounded-2xl mb-5 bg-gray-100">
<img alt="Cheese Lovers Pizza" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold text-gray-900">Double Cheese</h3>
</div>
<p className="text-sm text-gray-500 mb-4 line-clamp-2">A simple classic loaded with extra mozzarella and cheddar blend.</p>
<div className="flex items-center justify-between mt-4">
<span className="text-lg font-semibold text-gray-900">₹169</span>
<button className="bg-gray-900 text-white p-2.5 rounded-full hover:bg-red-600 transition-colors">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-red-600 transition-colors group" href="#">
                    View Full Menu 
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
<div className="max-w-lg">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-2">Loved by Pizza Lovers</h2>
<p className="text-gray-500">Our customers in Civil Lines speak for us. 5.0 Star Rating.</p>
</div>
<div className="flex items-center gap-1 bg-green-50 px-4 py-2 rounded-lg">
<span className="text-lg font-bold text-green-700">5.0</span>
<div className="flex text-yellow-400">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
<div className="flex text-yellow-400 mb-4">
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-gray-800 font-medium mb-4 leading-relaxed">"Fresh base and amazing cheese pull. Definitely the best cloud kitchen pizza in Ludhiana right now."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-xs">R</div>
<span className="text-sm text-gray-500">Rohit S.</span>
</div>
</div>

<div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
<div className="flex text-yellow-400 mb-4">
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-gray-800 font-medium mb-4 leading-relaxed">"Awesome taste and food quantity. The Paneer 65 pizza is a must-try. Delivery was super quick!"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">A</div>
<span className="text-sm text-gray-500">Amit K.</span>
</div>
</div>

<div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
<div className="flex text-yellow-400 mb-4">
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-gray-800 font-medium mb-4 leading-relaxed">"Great packing and takeaway service. Food stayed hot till I reached home. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs">P</div>
<span className="text-sm text-gray-500">Priya M.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-900 text-white relative overflow-hidden" id="location">
<div className="absolute top-0 right-0 w-64 h-64 bg-red-600 opacity-10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

<div className="space-y-8">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-4">Visit Da Sizzling Bite</h2>
<p className="text-gray-400">Serving hot, fresh pizza in Civil Lines.</p>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="bg-gray-800 p-3 rounded-lg text-red-400">
<iconify-icon icon="lucide:map-pin" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-white">Our Location</h4>
<p className="text-gray-400 text-sm mt-1 leading-relaxed">
                                    New Deep Nagar, Civil Lines,<br/>
                                    Ludhiana, Punjab – 141001
                                </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-gray-800 p-3 rounded-lg text-green-400">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-white">Order Now</h4>
<p className="text-gray-400 text-sm mt-1">099885 54961</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-gray-800 p-3 rounded-lg text-yellow-400">
<iconify-icon icon="lucide:clock" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-white">Opening Hours</h4>
<p className="text-gray-400 text-sm mt-1">Mon - Sun: Open till 11 PM</p>
</div>
</div>
</div>
<div className="pt-4">
<a className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-red-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-red-500 transition-colors" href="tel:+919988554961">
<iconify-icon icon="lucide:phone-call" width="18"></iconify-icon>
                            Call to Order
                        </a>
</div>
</div>

<div className="h-80 lg:h-full bg-gray-800 rounded-2xl overflow-hidden relative group border border-gray-700">
<iframe allowfullscreen="" className="group-hover:filter-none transition-all duration-500" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.639695678!2d75.8!3d30.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDU0JzAwLjAiTiA3NcKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" style={{border: '0', filter: 'grayscale(1) contrast(1.2) opacity(0.8)'}} width="100%">
</iframe>
<div className="absolute bottom-4 left-4 bg-white text-gray-900 px-4 py-2 rounded-lg text-xs font-semibold shadow-lg pointer-events-none">
                        📍 Civil Lines, Ludhiana
                    </div>
</div>
</div>
<div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-gray-500 text-sm">© 2024 Da Sizzling Bite. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="20"></iconify-icon>
</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:facebook" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 md:hidden z-50 flex gap-3">
<a className="flex-1 bg-red-600 text-white font-medium py-3 rounded-lg text-center flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform" href="tel:+919988554961">
<iconify-icon icon="lucide:phone" width="18"></iconify-icon>
            Call Now
        </a>
<a className="flex-none bg-gray-100 text-gray-900 p-3 rounded-lg flex items-center justify-center active:bg-gray-200" href="https://maps.google.com" target="_blank">
<iconify-icon icon="lucide:map-pin" width="20"></iconify-icon>
</a>
</div>

    </>
  );
}
