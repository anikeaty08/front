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
      

<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-sky-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-200 group-hover:scale-105 transition-transform">
<span className="font-semibold text-lg">T</span>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-800 group-hover:text-orange-500 transition-colors">The_Taste_Fall</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-orange-500 transition-colors" href="#menu">Menu</a>
<a className="text-sm font-medium hover:text-orange-500 transition-colors" href="#about">Our Vibe</a>
<a className="text-sm font-medium hover:text-orange-500 transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium hover:text-orange-500 transition-colors" href="#location">Location</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-sky-600 transition-colors">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="">095177 73113</span>
</button>
<button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-lg shadow-orange-200 hover:shadow-orange-300 transition-all active:scale-95 flex items-center gap-2">
                    Order Online
                    <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-sky-50 via-white to-slate-50 -z-10"></div>
<div className="absolute top-20 right-0 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
<div className="absolute bottom-0 left-20 w-72 h-72 bg-orange-100/40 rounded-full blur-3xl -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center perspective-container">
<div className="space-y-8 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-700 text-xs font-semibold tracking-wide uppercase shadow-sm">
<span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                    Open till 11 PM
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
                    Healthy. <br/>
<span className="text-sky-500">Homemade.</span> <br/>
                    Full of <span className="relative whitespace-nowrap">
<span className="relative z-10">Taste.</span>
<span className="absolute bottom-2 left-0 w-full h-3 bg-orange-200/60 -rotate-2 -z-0"></span>
</span>
</h1>
<p className="text-lg text-slate-500 max-w-md leading-relaxed">
                    Experience the comfort of home-style healthy food in Sarabha Nagar. A peaceful café where wellness meets warmth.
                </p>
<div className="flex flex-wrap gap-4">
<button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-full text-sm font-medium shadow-xl hover:shadow-2xl transition-all active:scale-95">
                        View Menu
                    </button>
</div>
<div className="flex items-center gap-4 pt-4">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="w-10 h-10 rounded-full border-2 border-white bg-sky-100 flex items-center justify-center text-xs font-semibold text-sky-700">+280</div>
</div>
<div className="flex flex-col">
<div className="flex text-orange-400">
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-xs font-medium text-slate-500">5.0 Star Rating</span>
</div>
</div>
</div>

<div className="relative h-[500px] w-full hidden lg:block">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 z-20 float-slow">
<div className="relative w-full h-full">
<div className="absolute inset-0 bg-sky-500 rounded-full opacity-10 blur-2xl transform scale-90 translate-y-10"></div>
<img alt="Healthy Bowl" className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>

<div className="absolute -right-4 top-10 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-lg border border-sky-100 flex items-center gap-2">
<span className="text-xs font-semibold text-slate-700">Veggie Bowl</span>
<span className="text-xs font-bold text-orange-500">₹250</span>
</div>
</div>
</div>

<div className="absolute top-20 right-10 w-48 h-48 z-10 float-medium">
<img alt="Drink" className="w-full h-full object-cover rounded-[2rem] shadow-xl border-4 border-white rotate-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute bottom-20 left-0 w-56 h-40 z-30 float-fast">
<img alt="Wrap" className="w-full h-full object-cover rounded-[2rem] shadow-xl border-4 border-white -rotate-3" src="https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-6 rounded-2xl bg-sky-50/50 border border-sky-100 hover:border-sky-300 transition-all cursor-default">
<div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-sky-500 mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-utensils w-6 h-6" data-lucide="utensils" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-2">Dine-In Comfort</h3>
<p className="text-sm text-slate-500">Cozy, sanitized seating with a warm, home-like atmosphere.</p>
</div>

<div className="group p-6 rounded-2xl bg-orange-50/50 border border-orange-100 hover:border-orange-300 transition-all cursor-default">
<div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-orange-500 mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-car w-6 h-6" data-lucide="car" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-2">Kerbside Pickup</h3>
<p className="text-sm text-slate-500">Order ahead and pick up fresh food without leaving your car.</p>
</div>

<div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-300 transition-all cursor-default">
<div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-600 mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-bike w-6 h-6" data-lucide="bike" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18.5" cy="17.5" r="3.5"></circle><circle cx="5.5" cy="17.5" r="3.5"></circle><circle cx="15" cy="5" r="1"></circle><path d="M12 17.5V14l-3-3 4-3 2 3h2"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-2">Fast Delivery</h3>
<p className="text-sm text-slate-500">Healthy meals delivered hot to your doorstep in Ludhiana.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative" id="menu">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-orange-500 font-semibold text-xs tracking-wider uppercase mb-2 block">Our Menu</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-800 tracking-tight mb-4">Fresh. Wholesome. Delicious.</h2>
<p className="text-slate-500">Hand-picked ingredients, cooked with love, served with care.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-container">

<div className="card-3d group bg-white rounded-[2rem] p-4 shadow-lg border border-slate-100 flex flex-col h-full cursor-pointer">
<div className="relative h-48 rounded-[1.5rem] overflow-hidden mb-4">
<img alt="Wrap" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold text-slate-800 shadow-sm">₹220</div>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-1">Veggie Hawaiian Wrap</h3>
<p className="text-xs text-slate-500 mb-4 line-clamp-2">Fresh pineapple, cottage cheese, crisp lettuce, and tangy homemade sauce.</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
<span className="text-xs font-medium text-sky-500 bg-sky-50 px-2 py-1 rounded-md">Vegetarian</span>
<button className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>

<div className="card-3d group bg-white rounded-[2rem] p-4 shadow-lg border border-slate-100 flex flex-col h-full cursor-pointer">
<div className="relative h-48 rounded-[1.5rem] overflow-hidden mb-4">
<img alt="Burger" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold text-slate-800 shadow-sm">₹180</div>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-1">Healthy Lentil Burger</h3>
<p className="text-xs text-slate-500 mb-4 line-clamp-2">Whole wheat bun, grilled lentil patty, zero-mayo dressing.</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
<span className="text-xs font-medium text-sky-500 bg-sky-50 px-2 py-1 rounded-md">High Protein</span>
<button className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>

<div className="card-3d group bg-white rounded-[2rem] p-4 shadow-lg border border-slate-100 flex flex-col h-full cursor-pointer">
<div className="relative h-48 rounded-[1.5rem] overflow-hidden mb-4">
<img alt="Coffee" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold text-slate-800 shadow-sm">₹150</div>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-1">Artisan Coffee</h3>
<p className="text-xs text-slate-500 mb-4 line-clamp-2">Freshly brewed arabica beans, available with almond or oat milk.</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
<span className="text-xs font-medium text-sky-500 bg-sky-50 px-2 py-1 rounded-md">Hot/Cold</span>
<button className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>

<div className="card-3d group bg-white rounded-[2rem] p-4 shadow-lg border border-slate-100 flex flex-col h-full cursor-pointer">
<div className="relative h-48 rounded-[1.5rem] overflow-hidden mb-4">
<img alt="Snacks" className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold text-slate-800 shadow-sm">₹120</div>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-1">Street Lite Snacks</h3>
<p className="text-xs text-slate-500 mb-4 line-clamp-2">Air-fried versions of your favorite street foods. Zero guilt.</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
<span className="text-xs font-medium text-sky-500 bg-sky-50 px-2 py-1 rounded-md">Low Calorie</span>
<button className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>
<div className="mt-12 text-center">
<button className="inline-flex items-center gap-2 text-orange-500 font-medium hover:gap-3 transition-all">
                    View Full Menu <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="reviews">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-6">
<span className="text-sky-500 font-semibold text-xs tracking-wider uppercase">The Vibe</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Feels like home,<br/>tastes like heaven.</h2>
<p className="text-slate-500 leading-relaxed">
                    We built The_Taste_Fall to be your sanctuary in Ludhiana. Whether you're working on your laptop, catching up with friends, or enjoying a quiet meal, our clean, aesthetic space welcomes you.
                </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-slate-600">
<div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center text-sky-500">
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm">Impeccably clean kitchen</span>
</li>
<li className="flex items-center gap-3 text-slate-600">
<div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center text-sky-500">
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm">Warm, non-intrusive service</span>
</li>
<li className="flex items-center gap-3 text-slate-600">
<div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center text-sky-500">
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm">Calm ambient music</span>
</li>
</ul>
</div>

<div className="relative">
<div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-20 pointer-events-none"></div>
<div className="space-y-6">

<div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transform translate-x-4">
<div className="flex items-center gap-1 text-orange-400 mb-3">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-700 text-sm mb-4">"The food genuinely tastes like home. Not oily, just fresh ingredients. The staff is 10/10."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-sky-200 flex items-center justify-center text-sky-700 font-bold text-xs">RK</div>
<span className="text-xs font-semibold text-slate-900">Rahul K.</span>
</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transform -translate-x-4">
<div className="flex items-center gap-1 text-orange-400 mb-3">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-700 text-sm mb-4">"Best place in Sarabha Nagar for healthy options. The vibe is so cozy and peaceful."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center text-orange-700 font-bold text-xs">AS</div>
<span className="text-xs font-semibold text-slate-900">Amrit S.</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 py-16" id="location">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12">
<div className="space-y-6">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white">
<span className="font-semibold text-lg">T</span>
</div>
<span className="text-xl font-semibold tracking-tight text-white">The_Taste_Fall</span>
</div>
<div className="space-y-4">
<div className="flex items-start gap-4">
<svg className="lucide lucide-map-pin w-5 h-5 text-sky-500 mt-1" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<p className="text-sm leading-relaxed">
                                Sarabha Nagar Main Market,<br/>
                                Kipps Market, Ludhiana,<br/>
                                Punjab – 141001
                            </p>
</div>
<div className="flex items-center gap-4">
<svg className="lucide lucide-phone w-5 h-5 text-sky-500" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<p className="text-sm">095177 73113</p>
</div>
<div className="flex items-center gap-4">
<svg className="lucide lucide-clock w-5 h-5 text-sky-500" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<p className="text-sm">Open Daily: 11:00 AM – 11:00 PM</p>
</div>
</div>
<div className="pt-6 flex gap-3">
<button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
                            Call Now
                        </button>
<button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors border border-slate-700">
                            Get Directions
                        </button>
</div>
</div>

<div className="w-full h-64 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 relative group">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.633465133649!2d75.8245!3d30.9000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a830000000001%3A0x0!2sSarabha%20Nagar%20Main%20Market!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" style={{border: '0', filter: 'grayscale(100%) contrast(1.2) opacity(0.8)'}} width="100%">
</iframe>
<div className="absolute inset-0 pointer-events-none group-hover:bg-transparent transition-colors bg-slate-900/10"></div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
<p>© 2023 The_Taste_Fall. All rights reserved. Designed with care.</p>
</div>
</div>
</footer>


    </>
  );
}
