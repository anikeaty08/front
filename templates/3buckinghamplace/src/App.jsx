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
      

<nav className="fixed top-0 w-full z-50 px-6 py-4">
<div className="max-w-7xl mx-auto flex justify-between items-center glass-panel rounded-full px-6 py-3 shadow-sm">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white">
<span className="text-xs font-semibold tracking-tight" style={{}}>3</span>
</div>
<span className="text-sm font-semibold tracking-tight" style={{}}>Buckingham Place</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#overview">Overview</a>
<a className="hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="hover:text-slate-900 transition-colors" href="#trends">Market Trends</a>
<a className="hover:text-slate-900 transition-colors" href="#location">Location</a>
</div>
<div className="flex items-center gap-3">
</div>
</div>
</nav>

<div className="relative h-[110vh] w-full overflow-hidden -mt-20">
<div className="absolute inset-0 bg-slate-900">
<img alt="3 Buckingham Place Exterior" className="w-full h-full object-cover opacity-90 hero-animate origin-center" src="https://photos.zillowstatic.com/fp/ab06d1c1adc23f5da374f26054952bc4-cc_ft_1536.jpg"/>
</div>
<div className="bg-gradient-to-t from-black/80 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-32 left-0 w-full px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end md:items-end justify-between gap-8">
<div className="space-y-4">
<div className="flex items-center gap-2">
<span className="px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-xs font-medium tracking-wide uppercase">
                            For Sale
                        </span>
<span className="px-3 py-1 bg-emerald-500/80 backdrop-blur-sm border border-emerald-400/30 rounded-full text-white text-xs font-medium tracking-wide uppercase">
                            Active
                        </span>
</div>
<h1 className="text-white text-4xl md:text-6xl font-semibold tracking-tighter leading-tight">
                        3 Buckingham Place
                        <span className="block text-slate-300 text-2xl md:text-3xl font-normal mt-2 tracking-tight">Great Neck, NY 11021</span>
</h1>
<div className="flex items-center gap-6 text-white/90">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:bed-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">5 Beds</span>
</div>
<div className="h-4 w-px bg-white/30"></div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:bath-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">5 Baths</span>
</div>
<div className="h-4 w-px bg-white/30"></div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:ruler-angular-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">2,668 sqft</span>
</div>
</div>
</div>
<div className="text-right">
<p className="text-white/60 text-sm font-medium tracking-wide mb-1 uppercase">Price</p>
<p className="text-white text-4xl md:text-5xl font-semibold tracking-tighter">$2,190,000</p>
<p className="text-white/50 text-sm mt-2">$821 / sqft</p>
</div>
</div>
</div>
</div>

<div className="relative z-10 bg-slate-50 -mt-20 rounded-t-[2.5rem] border-t border-white/50 shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.3)] pb-24">

<div className="pt-12 pr-4 pb-8 pl-4">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:h-[650px] h-[400px] max-w-7xl mr-auto ml-auto gap-x-4 gap-y-4">

<div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group cursor-pointer perspective-container">
<img alt="Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://photos.zillowstatic.com/fp/fbf10b91c19c00695f65b4497691cd10-cc_ft_768.jpg"/>
<div className="group-hover:bg-transparent transition-colors bg-black/10 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="text-xs text-white bg-black/50 rounded-lg pt-1 pr-3 pb-1 pl-3 absolute bottom-4 left-4 backdrop-blur-md">Front</div>
</div>
<div className="col-span-1 rounded-2xl overflow-hidden relative group cursor-pointer perspective-container">
<img alt="" className="object-cover w-full h-full" src="https://photos.zillowstatic.com/fp/5bfb0a58a390bcf332cd8df84074351d-cc_ft_384.webp?w=800&amp;q=80"/>
<div className="text-xs text-white bg-black/50 rounded-lg pt-1 pr-3 pb-1 pl-3 absolute bottom-4 left-4 backdrop-blur-md">Kitchen</div>
</div>
<div className="col-span-1 rounded-2xl overflow-hidden relative group cursor-pointer perspective-container">
<img alt="" className="object-cover w-full h-full" src="https://photos.zillowstatic.com/fp/19180303df560fa28f994ec4703a8fc8-cc_ft_960.jpg"/>
<div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-lg text-white text-xs">Backyard</div>
</div>
<div className="col-span-2 md:col-span-1 rounded-2xl overflow-hidden relative group cursor-pointer perspective-container">
<img alt="Dining" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://photos.zillowstatic.com/fp/4d546e4e85ad62b8ecb8eb20544ab449-cc_ft_576.jpg"/>
<div className="flex group-hover:bg-black/30 transition-colors absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="text-xs text-white bg-black/50 rounded-lg pt-1 pr-3 pb-1 pl-3 absolute bottom-4 left-4 backdrop-blur-md" style={{}}>Entrance</div></div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">

<div className="lg:col-span-8 space-y-16">

<section className="" id="overview">
<h3 className="text-xl font-semibold tracking-tight mb-4 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:document-text-linear"></iconify-icon>
                        About this home
                    </h3>
<div className="prose prose-slate max-w-none">
<p className="text-slate-600 leading-relaxed font-light text-base">
                            Welcome to this beautifully maintained center hall Colonial, ideally situated on a quiet, tree-lined street in the desirable Belgrave section of Thomaston Village. Brimming with classic character and sunlit spaces, this home offers a graceful layout with endless potential.
                        </p>
<p className="text-slate-600 leading-relaxed font-light text-base mt-4">
                            The main floor features a spacious living room, formal dining room, and a large eat-in kitchen that flows into a cozy family room overlooking the private backyard. A bright sunroom provides the perfect spot to relax or entertain, while a convenient powder room completes the level. Upstairs, you'll find five generously sized bedrooms and three full baths, offering comfort and flexibility for family or guests.
                        </p>
<p className="text-slate-600 leading-relaxed font-light text-base mt-4 italic pl-4 border-l-2 border-slate-200">
                            Set on nearly one-third of an acre, the landscaped backyard is ideal for gatherings or peaceful mornings. Sold As Is – major renovation needed – bring your vision and restore this gem to its full potential.
                        </p>
</div>
</section>

<section className="" id="features">
<h3 className="text-xl font-semibold tracking-tight mb-8 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:widget-2-linear"></iconify-icon>
                        Facts &amp; Features
                    </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
<div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
<h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:home-linear"></iconify-icon>
                                Property
                            </h4>
<ul className="space-y-3">
<li className="flex justify-between text-sm">
<span className="text-slate-500">Type</span>
<span className="font-medium text-slate-800">Single Family Residence</span>
</li>
<li className="flex justify-between text-sm">
<span className="text-slate-500">Year Built</span>
<span className="font-medium text-slate-800">1926</span>
</li>
<li className="flex justify-between text-sm">
<span className="text-slate-500">Lot Size</span>
<span className="font-medium text-slate-800">0.29 Acres</span>
</li>
<li className="flex justify-between text-sm">
<span className="text-slate-500">Parking</span>
<span className="font-medium text-slate-800">1 Garage Space</span>
</li>
</ul>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
<h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:thermometer-linear"></iconify-icon>
                                Comfort
                            </h4>
<ul className="space-y-3">
<li className="flex justify-between text-sm">
<span className="text-slate-500">Heating</span>
<span className="font-medium text-slate-800">Oil</span>
</li>
<li className="flex justify-between text-sm">
<span className="text-slate-500">Cooling</span>
<span className="font-medium text-slate-800">Central Air</span>
</li>
<li className="flex justify-between text-sm">
<span className="text-slate-500">Basement</span>
<span className="font-medium text-slate-800">Full</span>
</li>
<li className="flex justify-between text-sm">
<span className="text-slate-500">Materials</span>
<span className="font-medium text-slate-800">Brick</span>
</li>
</ul>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm md:col-span-2">
<h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:star-fall-linear"></iconify-icon>
                                Interior Details
                            </h4>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">Formal Dining</span>
<span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">Granite Counters</span>
<span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">Pantry</span>
<span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">Dishwasher</span>
<span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">Electric Cooktop</span>
</div>
</div>
</div>
</section>

<section className="" id="trends">
<h3 className="text-xl font-semibold tracking-tight mb-6 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:graph-up-linear"></iconify-icon>
                        Housing Market Trends in Thomaston
                    </h3>
<div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
<div className="space-y-4">
<div className="flex justify-between items-center pb-2 border-b border-slate-100">
<span className="text-slate-500 text-sm">Median Property Value</span>
<span className="font-semibold text-slate-900">$1,466,013</span>
</div>
<div className="flex justify-between items-center pb-2 border-b border-slate-100">
<span className="text-slate-500 text-sm">Total Properties</span>
<span className="font-semibold text-slate-900">696</span>
</div>
<div className="flex justify-between items-center pb-2 border-b border-slate-100">
<span className="text-slate-500 text-sm">Median Living Space</span>
<span className="font-semibold text-slate-900">2,347 sq ft</span>
</div>
<div className="flex justify-between items-center">
<span className="text-slate-500 text-sm">Median Year Built</span>
<span className="font-semibold text-slate-900">1946</span>
</div>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center pb-2 border-b border-slate-100">
<span className="text-slate-500 text-sm">5-Year Appreciation Forecast</span>
<span className="font-semibold text-emerald-600">$1,753,939</span>
</div>
<div className="flex justify-between items-center pb-2 border-b border-slate-100">
<span className="text-slate-500 text-sm">Median Lot Size</span>
<span className="font-semibold text-slate-900">9,204 sq ft</span>
</div>
<div className="flex justify-between items-center pb-2 border-b border-slate-100">
<span className="text-slate-500 text-sm">Average Ownership</span>
<span className="font-semibold text-slate-900">1 year 4 months</span>
</div>
<div className="flex justify-between items-center">
<span className="text-slate-500 text-sm">Price Per Sqft</span>
<span className="font-semibold text-slate-900">$633</span>
</div>
</div>
</div>
</div>
</section>

<section className="">
<h3 className="text-xl font-semibold tracking-tight mb-6 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:book-linear"></iconify-icon>
                        Nearby Schools
                    </h3>
<div className="space-y-4">

<div className="flex items-center p-4 bg-white rounded-xl border border-slate-200 hover:border-indigo-300 transition-colors cursor-default">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold border-4 border-white shadow-sm z-10">
                                8
                            </div>
<div className="ml-4 flex-grow">
<h5 className="font-semibold text-slate-900">Lakeville Elementary School</h5>
<p className="text-xs text-slate-500">Grades 1-5 • Public • 0.8mi</p>
</div>
<div className="text-xs font-medium text-slate-400">GreatSchools Rating</div>
</div>

<div className="flex items-center p-4 bg-white rounded-xl border border-slate-200 hover:border-indigo-300 transition-colors cursor-default">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold border-4 border-white shadow-sm z-10">
                                8
                            </div>
<div className="ml-4 flex-grow">
<h5 className="font-semibold text-slate-900">Great Neck South Middle School</h5>
<p className="text-xs text-slate-500">Grades 6-8 • Public • 1.7mi</p>
</div>
</div>

<div className="flex items-center p-4 bg-white rounded-xl border border-slate-200 hover:border-indigo-300 transition-colors cursor-default">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold border-4 border-white shadow-sm z-10">
                                10
                            </div>
<div className="ml-4 flex-grow">
<h5 className="font-semibold text-slate-900">Great Neck South High School</h5>
<p className="text-xs text-slate-500">Grades 9-12 • Public • 1.7mi</p>
</div>
</div>
</div>
</section>

<section className="">
<h3 className="text-xl font-semibold tracking-tight mb-6 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:city-linear"></iconify-icon>
                        Nearby Properties
                    </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
<div className="p-4 border-b border-slate-100 flex justify-between items-center">
<div>
<p className="text-lg font-bold text-slate-900">$1.35M - $1.53M</p>
<p className="text-xs text-slate-500 uppercase tracking-wide">Est. Value</p>
</div>
</div>
<div className="p-4">
<h4 className="font-semibold text-slate-900 text-base mb-1 group-hover:text-indigo-600 transition-colors">166 Schenck Ave</h4>
<p className="text-sm text-slate-500 mb-4">Great Neck, NY 11021</p>
<div className="text-sm text-slate-700 space-y-1">
<div className="flex items-center gap-4 text-xs font-medium text-slate-500 uppercase tracking-wider">
<span>1.5 Baths</span>
<span>1,875 sqft</span>
</div>
<p className="text-xs text-slate-400">8,320 sqft lot • Built 1947</p>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
<div className="p-4 border-b border-slate-100 flex justify-between items-center">
<div>
<p className="text-lg font-bold text-slate-900">$1.6M - $1.79M</p>
<p className="text-xs text-slate-500 uppercase tracking-wide">Est. Value</p>
</div>
</div>
<div className="p-4">
<h4 className="font-semibold text-slate-900 text-base mb-1 group-hover:text-indigo-600 transition-colors">40 Brompton Rd</h4>
<p className="text-sm text-slate-500 mb-4">Great Neck, NY 11021</p>
<div className="text-sm text-slate-700 space-y-1">
<div className="flex items-center gap-4 text-xs font-medium text-slate-500 uppercase tracking-wider">
<span>2 Baths</span>
<span>2,544 sqft</span>
</div>
<p className="text-xs text-slate-400">13,438 sqft lot • Built 1955</p>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
<div className="p-4 border-b border-slate-100 flex justify-between items-center">
<div className="">
<p className="text-lg font-bold text-slate-900">$1.25M - $1.38M</p>
<p className="text-xs text-slate-500 uppercase tracking-wide">Est. Value</p>
</div>
</div>
<div className="p-4">
<h4 className="font-semibold text-slate-900 text-base mb-1 group-hover:text-indigo-600 transition-colors">99 Clent Rd</h4>
<p className="text-sm text-slate-500 mb-4">Great Neck, NY 11021</p>
<div className="text-sm text-slate-700 space-y-1">
<div className="flex items-center gap-4 text-xs font-medium text-slate-500 uppercase tracking-wider">
<span>2.5 Baths</span>
<span>1,938 sqft</span>
</div>
<p className="text-xs text-slate-400">95,439 sqft lot • Built 1988</p>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
<div className="p-4 border-b border-slate-100 flex justify-between items-center">
<div className="">
<p className="text-lg font-bold text-slate-900">$2.67M - $2.96M</p>
<p className="text-xs text-slate-500 uppercase tracking-wide">Est. Value</p>
</div>
</div>
<div className="p-4">
<h4 className="font-semibold text-slate-900 text-base mb-1 group-hover:text-indigo-600 transition-colors">39 Wensley Dr</h4>
<p className="text-sm text-slate-500 mb-4">Great Neck, NY 11021</p>
<div className="text-sm text-slate-700 space-y-1">
<div className="flex items-center gap-4 text-xs font-medium text-slate-500 uppercase tracking-wider">
<span>3 Baths</span>
<span className="">4,115 sqft</span>
</div>
<p className="text-xs text-slate-400">19,249 sqft lot • Built 1935</p>
</div>
</div>
</div>
</div>
</section>

<p className="text-xs text-slate-400 mt-12 leading-relaxed">
                    Source: OneKey® MLS. MLS#: 893878. Listed by: Lin Pan Realty Group LLC. 
                    Data is obtained from various sources and may not have been verified by broker or MLS GRID.
                </p>
</div>

<div className="lg:col-span-4" id="contact">
<div className="sticky top-28">

<div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl tilt-card">
<div className="flex items-center justify-between mb-6">
<div className="">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">List Price</p>
<p className="text-3xl font-bold tracking-tight text-slate-900">$2,190,000</p>
</div>
<div className="bg-indigo-50 text-indigo-600 rounded-full px-3 py-1 text-xs font-semibold">
                                Est. $14,614/mo
                            </div>
</div>
<div className="space-y-4">
</div>
<div className="mt-8 pt-6 border-t border-slate-100">
<p className="text-xs font-semibold text-slate-400 mb-3">LISTING AGENT</p>
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="Agent" className="w-full h-full object-cover" src="https://photos.zillowstatic.com/fp/ff83076040819b00e9374554f69a3259-h_n.jpg"/>
</div>
<div className="">
<p className="text-sm font-medium text-slate-900">Lin Pan</p>
<p className="text-xs text-slate-500">Lin Pan Realty Group LLC</p>
</div>
</div>
<div className="space-y-3">
<a className="flex items-center gap-3 text-sm text-slate-600 hover:text-indigo-600 transition-colors group" href="mailto:info@linpanrealty.com">
<div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-indigo-500 group-hover:border-indigo-200 transition-colors">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
</div>
<span className="truncate">info@linpanrealty.com</span>
</a>
<a className="flex items-center gap-3 text-sm text-slate-600 hover:text-indigo-600 transition-colors group" href="tel:9179028853">
<div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-indigo-500 group-hover:border-indigo-200 transition-colors">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="leading-none text-xs text-slate-400 mb-0.5">P &amp; O</span>
<span className="leading-none font-medium">(917) 902-8853</span>
</div>
</a>
</div>
</div>
</div>

</div></div></div></div>
    </>
  );
}
