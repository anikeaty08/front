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
      

<nav className="absolute top-0 left-0 w-full z-50 px-6 py-6 lg:px-8">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="text-2xl font-semibold tracking-tight text-white drop-shadow-md uppercase tracking-widest">
                BFTT
            </div>
<a className="hidden md:inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-slate-900 bg-white hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5" href="#book">
                Book Event
            </a>
</div>
</nav>

<section className="relative min-h-[90vh] flex items-center pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden px-6 lg:px-8 bg-slate-900">

<div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-teal-500 to-teal-300 opacity-90"></div>

<div className="absolute top-[-10%] left-[-10%] w-[50%] aspect-square rounded-full bg-pink-500/40 blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[60%] aspect-square rounded-full bg-orange-500/40 blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10 w-full">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

<div className="lg:col-span-7 text-left">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white mb-8 backdrop-blur-md shadow-sm">
<iconify-icon className="text-xl text-orange-400" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium uppercase tracking-widest">Atlanta's #1 Event Catering</span>
</div>
<h1 className="text-6xl sm:text-7xl lg:text-8xl tracking-tight font-semibold text-white mb-6 leading-none drop-shadow-lg">
                        Cold Drinks.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-pink-400">Hot Events.</span>
</h1>
<p className="text-xl lg:text-2xl text-white/90 font-normal mb-10 leading-relaxed max-w-2xl drop-shadow-md">
                        Premium snow cones, matcha, slushies and energy drinks served fresh at your event.
                    </p>
<ul className="space-y-5 mb-12 text-white/90 text-lg">
<li className="flex items-start gap-4">
<div className="bg-white/20 rounded-full p-1 shrink-0 mt-1 backdrop-blur-sm">
<iconify-icon className="text-xl text-white" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-medium drop-shadow-sm">Perfect for birthday parties, school events, and corporate events</span>
</li>
<li className="flex items-start gap-4">
<div className="bg-white/20 rounded-full p-1 shrink-0 mt-1 backdrop-blur-sm">
<iconify-icon className="text-xl text-white" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-medium drop-shadow-sm">Professional setup and friendly staff</span>
</li>
<li className="flex items-start gap-4">
<div className="bg-white/20 rounded-full p-1 shrink-0 mt-1 backdrop-blur-sm">
<iconify-icon className="text-xl text-white" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-medium drop-shadow-sm">Trusted by schools and businesses across Atlanta</span>
</li>
</ul>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-8 py-5 text-lg font-semibold rounded-full text-slate-900 bg-white hover:bg-slate-50 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.7)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.9)] hover:-translate-y-1" href="#book">
                            Book Your Event
                        </a>
<a className="inline-flex justify-center items-center px-8 py-5 text-lg font-semibold rounded-full text-white bg-slate-900/40 hover:bg-slate-900/60 border border-white/20 transition-all backdrop-blur-md hover:-translate-y-1" href="#pricing">
                            Get Pricing
                        </a>
</div>
</div>

<div className="lg:col-span-5 relative w-full max-w-lg mx-auto lg:max-w-none lg:ml-auto perspective-1000 mt-12 lg:mt-0">
<div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-900/50 border border-white/20 transform rotate-2 hover:rotate-0 transition-all duration-700 bg-slate-100 group">
<img alt="Colorful shaved ice dessert" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>

<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
</div>

<div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl flex items-center gap-5 z-20 border border-white transform -rotate-3 hover:-translate-y-2 transition-transform duration-500">
<div className="flex -space-x-4">
<img alt="Customer" className="w-14 h-14 rounded-full border-[3px] border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<img alt="Customer" className="w-14 h-14 rounded-full border-[3px] border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<img alt="Customer" className="w-14 h-14 rounded-full border-[3px] border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<div>
<div className="flex text-orange-400 mb-1">
<iconify-icon className="text-xl" icon="solar:star-linear" strokeWidth="2"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-linear" strokeWidth="2"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-linear" strokeWidth="2"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-linear" strokeWidth="2"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-linear" strokeWidth="2"></iconify-icon>
</div>
<p className="text-base font-semibold text-slate-900">500+ events served</p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 transform translate-y-1/2">
<svg className="relative block w-[calc(100%+1.3px)] h-16 lg:h-24" data-name="Layer 1" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path className="fill-slate-50" d="M1200 120L0 16.48V0h1200v120z"></path>
</svg>
</div>
</section>

<section className="pt-12 pb-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
<p className="text-sm font-semibold text-slate-400 tracking-widest uppercase mb-10">Trusted by top schools and organizations</p>
<div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-24 opacity-60 hover:opacity-100 grayscale transition-all duration-500">
<div className="flex items-center gap-3">
<iconify-icon className="text-4xl text-slate-800" icon="solar:buildings-2-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-2xl font-semibold tracking-tight text-slate-800">Georgia State University</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-4xl text-slate-800" icon="solar:diploma-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-2xl font-semibold tracking-tight text-slate-800">Fulton County Schools</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-4xl text-slate-800" icon="solar:city-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-2xl font-semibold tracking-tight text-slate-800">Sandy Springs</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6">Choose Your Experience</h2>
<p className="text-xl text-slate-500 font-normal">Two distinct experiences tailored for every type of event, guaranteeing smiles all around.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 lg:gap-12">

<div className="group bg-slate-50 rounded-[2.5rem] p-4 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col hover:-translate-y-2 transition-all duration-500">
<div className="relative aspect-video rounded-[2rem] overflow-hidden mb-8">
<img alt="Kids enjoying snowcones" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500 text-white mb-3 shadow-lg">
<iconify-icon className="text-lg" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-semibold tracking-widest uppercase">The Crowd Pleaser</span>
</div>
</div>
</div>
<div className="px-6 pb-6 flex flex-col flex-grow">
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Snowcone Party Experience</h3>
<p className="text-lg text-slate-500 mb-8 font-normal leading-relaxed">Target: Schools, birthdays, and community events. A colorful, fun treat that kids and adults love.</p>
<div className="space-y-4 mb-10 flex-grow">
<div className="flex items-start gap-4">
<div className="bg-teal-100 text-teal-600 rounded-full p-1.5 shrink-0 mt-0.5">
<iconify-icon className="text-xl" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-lg text-slate-700 font-medium">Unlimited flavor options</span>
</div>
<div className="flex items-start gap-4">
<div className="bg-teal-100 text-teal-600 rounded-full p-1.5 shrink-0 mt-0.5">
<iconify-icon className="text-xl" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-lg text-slate-700 font-medium">Fun toppings (Nerds, Tajin, gummy worms)</span>
</div>
<div className="flex items-start gap-4">
<div className="bg-teal-100 text-teal-600 rounded-full p-1.5 shrink-0 mt-0.5">
<iconify-icon className="text-xl" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-lg text-slate-700 font-medium">Kid-friendly setup</span>
</div>
<div className="flex items-start gap-4">
<div className="bg-teal-100 text-teal-600 rounded-full p-1.5 shrink-0 mt-0.5">
<iconify-icon className="text-xl" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-lg text-slate-700 font-medium">Custom cups available</span>
</div>
</div>
<a className="w-full inline-flex justify-center items-center px-6 py-5 text-lg font-semibold rounded-2xl text-white bg-teal-500 hover:bg-teal-600 transition-colors shadow-lg shadow-teal-500/30" href="#book">
                            View Snowcone Packages
                        </a>
</div>
</div>

<div className="group bg-slate-50 rounded-[2.5rem] p-4 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col hover:-translate-y-2 transition-all duration-500">
<div className="relative aspect-video rounded-[2rem] overflow-hidden mb-8">
<img alt="Premium Matcha drink" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500 text-white mb-3 shadow-lg">
<iconify-icon className="text-lg" icon="solar:case-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-semibold tracking-widest uppercase">The Professional Choice</span>
</div>
</div>
</div>
<div className="px-6 pb-6 flex flex-col flex-grow">
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Premium Matcha &amp; Energy Bar</h3>
<p className="text-lg text-slate-500 mb-8 font-normal leading-relaxed">Target: Corporate events, tech spaces, and networking. A modern, elevated beverage experience.</p>
<div className="space-y-4 mb-10 flex-grow">
<div className="flex items-start gap-4">
<div className="bg-pink-100 text-pink-600 rounded-full p-1.5 shrink-0 mt-0.5">
<iconify-icon className="text-xl" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-lg text-slate-700 font-medium">Matcha drinks</span>
</div>
<div className="flex items-start gap-4">
<div className="bg-pink-100 text-pink-600 rounded-full p-1.5 shrink-0 mt-0.5">
<iconify-icon className="text-xl" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-lg text-slate-700 font-medium">Boba tea</span>
</div>
<div className="flex items-start gap-4">
<div className="bg-pink-100 text-pink-600 rounded-full p-1.5 shrink-0 mt-0.5">
<iconify-icon className="text-xl" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-lg text-slate-700 font-medium">Energy drinks</span>
</div>
<div className="flex items-start gap-4">
<div className="bg-pink-100 text-pink-600 rounded-full p-1.5 shrink-0 mt-0.5">
<iconify-icon className="text-xl" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-lg text-slate-700 font-medium">Stylish drink setup</span>
</div>
</div>
<a className="w-full inline-flex justify-center items-center px-6 py-5 text-lg font-semibold rounded-2xl text-white bg-pink-500 hover:bg-pink-600 transition-colors shadow-lg shadow-pink-500/30" href="#book">
                            View Drink Packages
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-900 relative overflow-hidden" id="pricing">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15)_0,transparent_50%)]"></div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">Simple Transparent Pricing</h2>
<p className="text-xl text-slate-400 font-normal">No hidden fees. Everything you need for a great event is included.</p>
</div>
<div className="max-w-xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-500">

<div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-blue-500 via-teal-400 to-teal-300"></div>
<div className="text-center mb-10">
<span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold tracking-widest uppercase mb-6">Snowcone Catering Package</span>
<span className="text-lg text-slate-500 block mb-2 font-medium">Starting at</span>
<div className="flex items-start justify-center gap-1">
<span className="text-4xl font-semibold text-slate-900 mt-2">$</span>
<span className="text-7xl md:text-8xl font-semibold tracking-tight text-slate-900">225</span>
</div>
</div>
<div className="space-y-5 mb-12 text-lg px-4 md:px-8">
<div className="flex items-center gap-5">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-blue-600" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-slate-700 font-medium">Professional service</span>
</div>
<div className="flex items-center gap-5">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-blue-600" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-slate-700 font-medium">Setup and cleanup included</span>
</div>
<div className="flex items-center gap-5">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-blue-600" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-slate-700 font-medium">Multiple flavor options</span>
</div>
<div className="flex items-center gap-5">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-blue-600" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-slate-700 font-medium">Friendly trained staff</span>
</div>
</div>
<a className="w-full inline-flex justify-center items-center px-8 py-5 text-xl font-semibold rounded-2xl text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30" href="#book">
                    Get Full Pricing
                </a>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
<svg className="relative block w-[calc(100%+1.3px)] h-12 lg:h-20" data-name="Layer 1" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path className="fill-slate-50" d="M1200 120L0 120V0h1200v120z"></path>
</svg>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6">Why Choose Brain Freeze</h2>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
<div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center mb-8 text-blue-600 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-4xl" icon="solar:bus-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Professional mobile setup</h3>
<p className="text-base text-slate-500 font-medium">We bring everything needed. Just tell us where to park.</p>
</div>

<div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
<div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-100 to-teal-50 flex items-center justify-center mb-8 text-teal-600 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-4xl" icon="solar:cup-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">High-quality ingredients</h3>
<p className="text-base text-slate-500 font-medium">Premium syrups, real matcha, and fresh toppings.</p>
</div>

<div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
<div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center mb-8 text-purple-600 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-4xl" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Flexible packages</h3>
<p className="text-base text-slate-500 font-medium">Options to fit events of any size, from small parties to big festivals.</p>
</div>

<div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
<div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-100 to-pink-50 flex items-center justify-center mb-8 text-pink-600 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-4xl" icon="solar:heart-angle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Memorable guest experience</h3>
<p className="text-base text-slate-500 font-medium">We create a fun atmosphere that guests will talk about.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6">Events We Serve</h2>
<p className="text-xl text-slate-500 font-normal">Brain Freeze caters all types of occasions across Atlanta with high energy and smiles.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg shadow-slate-200">
<img alt="Birthday Party" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1530103862676-de8892b07a52?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<iconify-icon className="text-xl text-white" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-3xl font-semibold tracking-tight text-white leading-tight drop-shadow-md">Birthday Parties</h3>
</div>
</div>

<div className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg shadow-slate-200">
<img alt="School Event" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<iconify-icon className="text-xl text-white" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-3xl font-semibold tracking-tight text-white leading-tight drop-shadow-md">School Events</h3>
</div>
</div>

<div className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg shadow-slate-200">
<img alt="Corporate Event" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<iconify-icon className="text-xl text-white" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-3xl font-semibold tracking-tight text-white leading-tight drop-shadow-md">Corporate Events</h3>
</div>
</div>

<div className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg shadow-slate-200">
<img alt="Community Event" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<iconify-icon className="text-xl text-white" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-3xl font-semibold tracking-tight text-white leading-tight drop-shadow-md">Fundraisers &amp; Community Events</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden">
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-16">What's Included</h2>
<div className="flex flex-col items-center gap-4 mb-16">
<div className="flex items-center gap-6 bg-white border border-slate-100 px-8 py-5 rounded-2xl w-full max-w-2xl justify-start shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-teal-600" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xl text-slate-700 font-medium text-left">Professional mobile serving setup</span>
</div>
<div className="flex items-center gap-6 bg-white border border-slate-100 px-8 py-5 rounded-2xl w-full max-w-2xl justify-start shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-teal-600" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xl text-slate-700 font-medium text-left">All equipment and supplies</span>
</div>
<div className="flex items-center gap-6 bg-white border border-slate-100 px-8 py-5 rounded-2xl w-full max-w-2xl justify-start shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-teal-600" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xl text-slate-700 font-medium text-left">Staff to serve guests</span>
</div>
<div className="flex items-center gap-6 bg-white border border-slate-100 px-8 py-5 rounded-2xl w-full max-w-2xl justify-start shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-teal-600" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xl text-slate-700 font-medium text-left">Fast and friendly service</span>
</div>
<div className="flex items-center gap-6 bg-white border border-slate-100 px-8 py-5 rounded-2xl w-full max-w-2xl justify-start shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-teal-600" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xl text-slate-700 font-medium text-left">Stress-free event experience</span>
</div>
</div>
<a className="inline-flex justify-center items-center px-10 py-5 text-xl font-semibold rounded-2xl text-white bg-teal-500 hover:bg-teal-600 transition-all shadow-xl shadow-teal-500/30 hover:-translate-y-1" href="#book">
                Check Availability
            </a>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="inline-block px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-semibold tracking-widest uppercase mb-6">Real Reviews</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">What They Say About Us</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-slate-50 p-10 rounded-[2rem] shadow-md border border-slate-100 flex flex-col relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-8xl text-slate-900" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex text-yellow-400 mb-6 relative z-10">
<iconify-icon className="text-2xl" icon="solar:star-linear" strokeWidth="2"></iconify-icon>
<iconify-icon className="text-2xl" icon="solar:star-linear" strokeWidth="2"></iconify-icon>
<iconify-icon className="text-2xl" icon="solar:star-linear" strokeWidth="2"></iconify-icon>
<iconify-icon className="text-2xl" icon="solar:star-linear" strokeWidth="2"></iconify-icon>
<iconify-icon className="text-2xl" icon="solar:star-linear" strokeWidth="2"></iconify-icon>
</div>
<p className="text-xl text-slate-700 mb-10 font-medium leading-relaxed flex-grow relative z-10">"Amazing service and super refreshing drinks. Huge hit at our school event! The kids couldn't get enough of it."</p>
<div className="flex items-center gap-5 relative z-10">
<img alt="Sarah M." className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
<div>
<p className="text-lg font-semibold text-slate-900">Sarah M.</p>
<p className="text-sm text-slate-500 font-medium">PTA President</p>
</div>
</div>
</div>

<div className="bg-slate-50 p-10 rounded-[2rem] shadow-md border border-slate-100 flex flex-col relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-8xl text-slate-900" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex text-yellow-400 mb-6 relative z-10">
<iconify-icon className="text-2xl" icon="solar:star-linear" strokeWidth="2"></iconify-icon>
<iconify-icon className="text-2xl" icon="solar:star-linear" strokeWidth="2"></iconify-icon>
<iconify-icon className="text-2xl" icon="solar:star-linear" strokeWidth="2"></iconify-icon>
<iconify-icon className="text-2xl" icon="solar:star-linear" strokeWidth="2"></iconify-icon>
<iconify-icon className="text-2xl" icon="solar:star-linear" strokeWidth="2"></iconify-icon>
</div>
<p className="text-xl text-slate-700 mb-10 font-medium leading-relaxed flex-grow relative z-10">"Awesome! Very good and super refreshing on a hot summer day. Me and my daughter loved it. Highly recommended!"</p>
<div className="flex items-center gap-5 relative z-10">
<img alt="Larry H." className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
<div>
<p className="text-lg font-semibold text-slate-900">Larry H.</p>
<p className="text-sm text-slate-500 font-medium">Birthday Party</p>
</div>
</div>
</div>

<div className="bg-slate-50 p-10 rounded-[2rem] shadow-md border border-slate-100 flex flex-col relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-8xl text-slate-900" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex text-yellow-400 mb-6 relative z-10">
<iconify-icon className="text-2xl" icon="solar:star-linear" strokeWidth="2"></iconify-icon>
<iconify-icon className="text-2xl" icon="solar:star-linear" strokeWidth="2"></iconify-icon>
<iconify-icon className="text-2xl" icon="solar:star-linear" strokeWidth="2"></iconify-icon>
<iconify-icon className="text-2xl" icon="solar:star-linear" strokeWidth="2"></iconify-icon>
<iconify-icon className="text-2xl" icon="solar:star-linear" strokeWidth="2"></iconify-icon>
</div>
<p className="text-xl text-slate-700 mb-10 font-medium leading-relaxed flex-grow relative z-10">"Great experience for our corporate event. The matcha bar looked premium and the service was incredibly fast and friendly."</p>
<div className="flex items-center gap-5 relative z-10">
<img alt="Keegan A." className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
<div>
<p className="text-lg font-semibold text-slate-900">Keegan A.</p>
<p className="text-sm text-slate-500 font-medium">Event Coordinator</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-900 relative overflow-hidden" id="book">

<div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 opacity-90"></div>

<div className="absolute top-0 left-[-20%] w-[60%] aspect-square rounded-full bg-blue-600/20 blur-[150px] pointer-events-none"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[50%] aspect-square rounded-full bg-orange-600/20 blur-[150px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="text-left">
<h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-8 leading-tight drop-shadow-lg">
                        Book Your Snow Cone Event Today
                    </h2>
<p className="text-2xl text-slate-300 font-medium mb-12">Dates fill quickly — secure your event now.</p>
<div className="flex flex-col sm:flex-row gap-5">
<button className="inline-flex justify-center items-center px-8 py-5 text-lg font-semibold rounded-full text-slate-900 bg-white hover:bg-slate-50 transition-all shadow-[0_0_30px_-5px_rgba(255,255,255,0.5)] hover:-translate-y-1">
                            Book Now
                        </button>
<button className="inline-flex justify-center items-center px-8 py-5 text-lg font-semibold rounded-full text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all backdrop-blur-md">
                            Schedule a Call
                        </button>
</div>
</div>

<div className="w-full bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_50px_-10px_rgba(0,0,0,0.5)]">
<div className="text-center mb-10">
<h3 className="text-3xl font-semibold tracking-tight text-slate-900 mb-3">Get My Free Quote</h3>
<p className="text-lg text-slate-500 font-medium">We reply in less than 2 hours.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="sr-only" htmlFor="name">Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-base text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400" id="name" name="name" placeholder="Your Name" type="text"/>
</div>
<div>
<label className="sr-only" htmlFor="email">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-base text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400" id="email" name="email" placeholder="Your Email" type="email"/>
</div>
<div>
<label className="sr-only" htmlFor="phone">Phone Number</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-base text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400" id="phone" name="phone" placeholder="Phone Number" type="tel"/>
</div>
<div>
<label className="sr-only" htmlFor="date">Event Date</label>
<div className="relative">
<input className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-base text-slate-400 font-medium focus:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none" id="date" name="date" type="date"/>
</div>
</div>
<div className="md:col-span-2">
<label className="sr-only" htmlFor="type">Event Type</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-base text-slate-400 font-medium focus:text-slate-900 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" id="type" name="type">
<option disabled="" selected="" value="">Event Type</option>
<option className="text-slate-900" value="birthday">Birthday Party</option>
<option className="text-slate-900" value="school">School/Daycare</option>
<option className="text-slate-900" value="corporate">Corporate Event</option>
<option className="text-slate-900" value="community">Community/Fundraiser</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none">
<iconify-icon className="text-xl text-slate-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div className="md:col-span-2">
<label className="sr-only" htmlFor="guests">Estimated Guests</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-base text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400" id="guests" name="guests" placeholder="Estimated Guests" type="number"/>
</div>
</div>
<button className="w-full flex justify-center items-center px-8 py-5 text-xl font-semibold rounded-2xl text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 mt-6 hover:-translate-y-1" type="button">
                            Get My Free Quote
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-20 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<h4 className="text-white text-2xl font-semibold tracking-tight mb-6">BFTT</h4>
<p className="text-base font-medium leading-relaxed text-slate-500">
                        We don't just serve drinks — we serve up unforgettable moments filled with flavor, fun, and excitement.
                    </p>
</div>
<div>
<h5 className="text-white text-lg font-semibold tracking-tight mb-6">Quick Links</h5>
<ul className="space-y-4 text-base font-medium">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Menu</a></li>
<li><a className="hover:text-white transition-colors" href="#book">Book Now</a></li>
</ul>
</div>
<div>
<h5 className="text-white text-lg font-semibold tracking-tight mb-6">Services</h5>
<ul className="space-y-4 text-base font-medium">
<li><a className="hover:text-white transition-colors" href="#">Birthday Parties</a></li>
<li><a className="hover:text-white transition-colors" href="#">School Events</a></li>
<li><a className="hover:text-white transition-colors" href="#">Corporate Events</a></li>
<li><a className="hover:text-white transition-colors" href="#">Fundraising</a></li>
</ul>
</div>
<div>
<h5 className="text-white text-lg font-semibold tracking-tight mb-6">Get In Touch</h5>
<ul className="space-y-4 text-base font-medium">
<li className="flex items-start gap-4">
<iconify-icon className="text-xl mt-0.5 shrink-0" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span>Atlanta, GA</span>
</li>
<li className="flex items-center gap-4">
<iconify-icon className="text-xl shrink-0" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:info@brainfreezetastytreats.com">info@brainfreeze.com</a>
</li>
<li className="flex items-center gap-4">
<iconify-icon className="text-xl shrink-0" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:833-6-FREEZE">833-6-FREEZE</a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium text-slate-500">
<p>Copyright © 2024 Brain Freeze Tasty Treats. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-md border-t border-slate-200 z-50 md:hidden shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)]">
<a className="w-full flex justify-center items-center px-6 py-4 text-lg font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30" href="#book">
            Book Event Now
        </a>
</div>

    </>
  );
}
