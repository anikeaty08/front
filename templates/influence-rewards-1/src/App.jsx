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
        
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-4');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    observer.unobserve(entry.target); 
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-reveal').forEach((el) => {
            observer.observe(el);
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
      

<header className="w-full relative z-50">

<div className="bg-[#111827] text-white text-[11px] font-medium border-b border-white/10">
<div className="max-w-[1600px] mx-auto px-4 h-9 flex items-center justify-between">

<nav className="hidden lg:flex items-center gap-5 text-slate-300">
<a className="hover:text-white transition-colors" href="#">All Products</a>
<a className="hover:text-white transition-colors" href="#">Business Cards</a>
<a className="hover:text-white transition-colors" href="#">Postcards</a>
<a className="hover:text-white transition-colors" href="#">Stickers</a>
<a className="hover:text-white transition-colors" href="#">Labels</a>
<a className="hover:text-white transition-colors" href="#">Free Samples</a>
<a className="hover:text-white transition-colors" href="#">Custom Project</a>
</nav>

<div className="flex items-center gap-4 ml-auto">
<a className="flex items-center gap-1.5 hover:text-white group" href="#">
<span className="border border-white/30 rounded-full px-1.5 py-[1px] text-[9px] group-hover:border-white transition-colors">New</span>
<span className="">Loyalty Program</span>
</a>
<a className="flex items-center gap-1.5 hover:text-white group" href="#">
<span className="border border-emerald-500 text-emerald-400 rounded-full px-1.5 py-[1px] text-[9px]">Free</span>
<span className="">Templates</span>
</a>
<a className="flex items-center gap-1.5 hover:text-white" href="#">
<span className="bg-white text-slate-900 rounded-full px-1.5 py-[1px] text-[9px] font-bold flex items-center gap-0.5">HOT <span className="text-red-500">🔥</span></span>
<span className="text-amber-400">Free Business Cards</span>
</a>
<div className="w-px h-3 bg-white/20 mx-1"></div>
<a className="flex items-center gap-1.5 hover:text-white" href="#">
<svg className="lucide lucide-printer w-3.5 h-3.5" data-lucide="printer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path><rect height="8" rx="1" width="12" x="6" y="14"></rect></svg>
<span className="">Resources</span>
</a>
<a className="hover:text-white" href="#">Your Business</a>
</div>
</div>
</div>

<div className="bg-white border-b border-slate-100 py-3.5">
<div className="max-w-[1600px] mx-auto px-4 flex items-center justify-between gap-6">

<div className="flex items-center gap-6 shrink-0">
<a className="block" href="#">
<span className="font-black text-3xl tracking-tighter text-[#134e4a]">4OVER4</span>
</a>

<div className="hidden lg:flex items-center bg-slate-100 rounded-full p-1 border border-slate-200 gap-2">
<div className="flex gap-1 px-1">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
<div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
</div>
<div className="h-4 w-px bg-slate-300"></div>
<button className="p-1 rounded-full bg-white shadow-sm text-slate-600 hover:text-slate-900">
<svg className="lucide lucide-sun w-3.5 h-3.5" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</button>
<button className="p-1 text-slate-400 hover:text-slate-600">
<svg className="lucide lucide-moon w-3.5 h-3.5" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
</button>
</div>
</div>

<div className="flex-1 max-w-3xl">
<div className="flex items-center w-full h-11 border-2 border-[#134e4a] rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#134e4a]/20 transition-all">
<button className="h-full px-4 flex items-center gap-2 text-sm font-medium text-slate-700 bg-slate-50 border-r border-slate-200 hover:bg-slate-100">
                            All
                            <svg className="lucide lucide-chevron-down w-4 h-4 text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<input className="flex-1 h-full px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none" placeholder="Search" type="text"/>
<button className="h-full px-6 bg-[#134e4a] text-white text-sm font-semibold hover:bg-[#0f3d3d] transition-colors">
                            Search
                        </button>
</div>
</div>

<div className="flex items-center gap-4 shrink-0">
<button className="hidden xl:flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg hover:border-slate-300 shadow-sm transition-all group">
<div className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center text-amber-900 font-bold text-[10px]">4</div>
<span className="text-sm font-bold text-slate-700 group-hover:text-slate-900">Earn Coins</span>
</button>
<button className="flex flex-col items-center gap-0.5 text-slate-500 hover:text-slate-900">
<svg className="lucide lucide-user w-6 h-6 stroke-[1.5]" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-[10px] font-medium">Account</span>
</button>
<button className="flex flex-col items-center gap-0.5 text-slate-500 hover:text-slate-900 relative">
<div className="relative">
<svg className="lucide lucide-shopping-cart w-6 h-6 stroke-[1.5]" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
<span className="absolute -top-1 -right-1 w-4 h-4 bg-[#134e4a] text-white text-[10px] font-bold rounded-full flex items-center justify-center border border-white">1</span>
</div>
<span className="text-[10px] font-medium">Cart</span>
</button>
</div>
</div>
</div>

<div className="bg-[#114b4b] text-white">
<div className="max-w-[1600px] mx-auto px-4">
<div className="flex items-center gap-1 h-12 text-sm font-medium">

<button className="flex items-center gap-2 bg-white text-slate-900 px-4 py-1.5 rounded-md text-sm font-bold mr-4 hover:bg-slate-50">
<svg className="lucide lucide-menu w-4 h-4" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
                        Products
                    </button>

<div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
<a className="flex items-center gap-2 whitespace-nowrap hover:text-emerald-200 transition-colors" href="#">
<svg className="lucide lucide-layout-grid w-4 h-4 opacity-70" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
                            Collections
                        </a>
<a className="flex items-center gap-2 whitespace-nowrap hover:text-emerald-200 transition-colors" href="#">
<span className="relative">
<svg className="lucide lucide-badge-check w-4 h-4 text-amber-400 fill-amber-400/20" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</span>
                            Price Match
                            <span className="bg-white text-[#114b4b] text-[9px] font-bold px-1.5 rounded-sm">NEW</span>
</a>
<a className="flex items-center gap-2 whitespace-nowrap hover:text-emerald-200 transition-colors" href="#">
<div className="w-4 h-4 rounded-full bg-amber-400 flex items-center justify-center text-[10px] text-amber-900 font-bold">4</div>
                            Get Coins
                            <span className="bg-white text-[#114b4b] text-[9px] font-bold px-1.5 rounded-sm">POPULAR</span>
</a>
<a className="flex items-center gap-2 whitespace-nowrap hover:text-emerald-200 transition-colors" href="#">
<svg className="lucide lucide-tag w-4 h-4 opacity-70" data-lucide="tag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
                            Daily Deal
                            <span className="bg-white text-orange-600 text-[9px] font-bold px-1.5 rounded-sm flex items-center gap-0.5">HOT <span className="text-[8px]">🔥</span></span>
</a>
<a className="flex items-center gap-2 whitespace-nowrap hover:text-emerald-200 transition-colors" href="#">
<svg className="lucide lucide-book-open w-4 h-4 opacity-70" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
                            Our Service Catalogs
                            <span className="bg-white text-[#114b4b] text-[9px] font-bold px-1.5 rounded-sm">NEW</span>
</a>
<div className="ml-auto flex items-center gap-6">
<a className="flex items-center gap-2 whitespace-nowrap hover:text-emerald-200 transition-colors" href="#">
<svg className="lucide lucide-lightbulb w-4 h-4 opacity-70" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
                                Content Hub
                            </a>
<a className="flex items-center gap-2 whitespace-nowrap hover:text-emerald-200 transition-colors" href="#">
<svg className="lucide lucide-help-circle w-4 h-4 opacity-70" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
                                Help
                            </a>
</div>
</div>
</div>
</div>
</div>
</header>

<main className="flex-1 bg-white relative">

<div className="overflow-hidden bg-white relative">

<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-emerald-100 rounded-full blur-[120px] opacity-40 mix-blend-multiply">
</div>
<div className="absolute top-[40%] left-[20%] w-[30%] h-[30%] bg-blue-100 rounded-full blur-[100px] opacity-30 mix-blend-multiply">
</div>
</div>
<div className="md:pt-14 md:pb-16 z-10 max-w-7xl mr-auto ml-auto pt-10 pr-6 pb-16 pl-6 relative">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4 opacity-50 pointer-events-none">
</div>
<div className="relative">

<div className="grid lg:grid-cols-12 gap-12 lg:gap-20 lg:mb-24 z-10 mb-16 relative items-center">

<div className="lg:col-span-6 flex flex-col gap-10 z-10 relative">

<div className="animate-reveal self-start opacity-100 translate-y-0" style={{animationDelay: '0ms', animationFillMode: 'forwards'}}>
<div className="inline-flex gap-2 text-[11px] uppercase font-semibold text-emerald-700 tracking-widest bg-emerald-50 border-emerald-200 border rounded-full pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center">
            * The Free by 4OVER4.COM tagline will be printed on the back

          </div>
</div>

<div className="animate-reveal opacity-100 relative z-20 translate-y-0 mb-4" style={{animationDelay: '100ms', animationFillMode: 'forwards'}}>
<h1 className="leading-[0.85] md:text-7xl lg:text-[5.5rem] lg:w-[140%] lg:-mr-32 text-5xl font-semibold text-slate-900 tracking-tighter">Free Business Cards <span className="block text-2xl font-medium text-slate-400 tracking-tight mt-2 md:text-3xl lg:text-5xl">Earn Coins. Skip Shipping Cost</span></h1>
</div>

<div className="flex flex-col gap-8 mt-4 animate-reveal opacity-100 translate-y-0" style={{animationDelay: '200ms', animationFillMode: 'forwards'}}>

<div className="flex gap-5 items-center">
<div className="shrink-0 flex text-orange-500 bg-white w-12 h-12 border-slate-100 border rounded-2xl shadow-sm items-center justify-center">
<svg className="lucide lucide-zap" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-slate-900 tracking-tight">Earn coins in minutes</h3>
<p className="text-base text-slate-500 leading-relaxed font-normal hidden lg:block">
                Pick any easy tasks you want and keep going until you hit 500 coins
              </p>
</div>
</div>

<div className="flex gap-5 items-center">
<div className="shrink-0 w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-orange-500">
<svg className="lucide lucide-gift" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="4" rx="1" width="18" x="3" y="8"></rect>
<path className="" d="M12 8v13"></path>
<path className="" d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
<path className="" d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5">
</path>
</svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-slate-900 tracking-tight">Redeem for 200 Free Cards
              </h3>
<p className="text-base text-slate-500 leading-relaxed font-normal hidden lg:block">
                Use your coins to get your business cards absolutely free.
              </p>
</div>
</div>

<div className="flex gap-5 items-center">
<div className="shrink-0 w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-orange-500">
<svg className="lucide lucide-truck" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
<path d="M15 18H9"></path>
<path className="" d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14">
</path>
<circle className="" cx="17" cy="18" r="2"></circle>
<circle cx="7" cy="18" r="2"></circle>
</svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-slate-900 tracking-tight">Don't want to collect
                coins?</h3>
<p className="text-base text-slate-500 leading-relaxed font-normal hidden lg:block">
                No problem. You can still get them for free, just cover shipping.
              </p>
</div>
</div>
</div>

<div className="flex flex-col gap-4 pt-10 animate-reveal opacity-100 translate-y-0" style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
<button className="relative inline-flex h-16 w-fit items-center gap-5 rounded-full bg-slate-900 pl-10 pr-2 transition-all hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-slate-900/10 group">
<span className="text-lg font-medium text-white">Start Earning Coins</span>
<div className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center text-white transition-transform group-hover:rotate-180 duration-500">
<svg className="lucide lucide-arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
</button>
</div>
</div>

<div className="lg:col-span-6 hidden lg:block min-h-[700px] h-full relative z-0">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-slate-100 via-blue-50/20 to-transparent rounded-full blur-[90px] -z-10 pointer-events-none">
</div>


<div className="-left-20 flex z-0 absolute top-0 right-[-10%] bottom-0 items-center justify-center">
<div className="relative w-full h-full group z-20">

<div className="absolute inset-0 z-10 pointer-events-none overflow-hidden rounded-3xl">

<div className="absolute top-0 bottom-0 -left-10 w-2/3 bg-gradient-to-r from-white/40 via-white/10 to-transparent blur-2xl mix-blend-overlay"></div>

<div className="absolute top-1/4 -right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] mix-blend-screen animate-pulse duration-[4000ms]"></div>
<div className="absolute bottom-0 left-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px] mix-blend-screen"></div>

<div className="absolute inset-0 bg-gradient-to-tr from-slate-200/10 via-transparent to-transparent opacity-50 mix-blend-overlay"></div>
</div>

<img alt="Business Cards Preview" className="z-30 w-full h-full object-contain relative drop-shadow-2xl translate-y-20 scale-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0396367-ab1b-49c1-a5eb-119266fdb6aa_1600w.png"/>

<div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
</div>
</div>

<div className="absolute top-[20%] right-[10%] text-orange-400 animate-bounce delay-700 z-10 animate-pulse mix-blend-multiply">
<svg className="" fill="currentColor" height="24" viewbox="0 0 24 24" width="24">
<path className="" d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z">
</path>
</svg>
</div>
<div className="absolute bottom-[25%] left-[5%] text-blue-400 z-10 animate-pulse hidden lg:block">
</div>
</div>
</div>


<div className="relative lg:ml-auto lg:mr-6 z-20 lg:w-[380px] lg:mt-0 w-full mt-6">

<div className="flex flex-col gap-3 lg:w-[340px] transition-transform duration-500 z-30 bg-white border-slate-200 border rounded-3xl mb-10 pt-5 pr-5 pb-5 pl-5 relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] gap-x-3 gap-y-3">

<div className="hidden xl:block transition-all hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.15)] z-40 group/gallery bg-white w-[860px] border-slate-200/60 border rounded-3xl mr-8 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-full shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
<div className="mb-6">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-2">See the <span className="text-[#114b4b]">Quality</span></h2>
<p className="text-sm text-slate-500 leading-relaxed max-w-md">Explore our premium finishes and paper stocks. From matte to gloss, we ensure every card leaves a lasting impression.</p>
</div>
<div className="flex gap-5 h-[340px]">

<div className="w-24 flex flex-col gap-3 overflow-y-auto no-scrollbar py-0.5">
<div className="w-full aspect-[4/3] rounded-lg border-2 border-[#114b4b] p-0.5 cursor-pointer bg-white shadow-sm transition-all hover:scale-[1.02]">
<div className="w-full h-full rounded bg-slate-100 overflow-hidden relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1626217436039-3806c9a9d70f?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="w-full aspect-[4/3] rounded-lg border border-slate-200 p-0.5 cursor-pointer bg-white hover:border-slate-300 hover:shadow-sm transition-all hover:scale-[1.02]">
<div className="w-full h-full rounded bg-slate-100 overflow-hidden relative">
<img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1572509018340-9286eb0a0684?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="w-full aspect-[4/3] rounded-lg border border-slate-200 p-0.5 cursor-pointer bg-white hover:border-slate-300 hover:shadow-sm transition-all hover:scale-[1.02]">
<div className="w-full h-full rounded bg-slate-100 overflow-hidden relative">
<img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="w-full aspect-[4/3] rounded-lg border border-slate-200 p-0.5 cursor-pointer bg-white hover:border-slate-300 hover:shadow-sm transition-all hover:scale-[1.02]">
<div className="w-full h-full rounded bg-slate-100 overflow-hidden relative">
<img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="flex-1 bg-slate-100 rounded-2xl relative overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200/50"></div>

<div className="absolute inset-0 flex items-center justify-center p-6">
<img className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0396367-ab1b-49c1-a5eb-119266fdb6aa_1600w.png"/>
</div>

<button className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-700 hover:text-[#114b4b] transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 duration-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-700 hover:text-[#114b4b] transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 duration-300 delay-75">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>

<div className="absolute bottom-4 right-5 text-[10px] font-bold text-slate-400/60 uppercase tracking-widest pointer-events-none select-none">Free by 4OVER4.COM</div>
</div>
</div>
</div>

<div className="grid grid-cols-3 bg-slate-50/80 border border-slate-100 rounded-xl py-2.5 px-1 mt-1">
<div className="flex flex-col items-center justify-center border-r border-slate-200 px-1 gap-0.5">
<span className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest">Size</span>
<span className="text-xs font-semibold text-slate-900">2" x 3.5"</span>
</div>
<div className="flex flex-col items-center justify-center border-r border-slate-200 px-1 gap-0.5">
<span className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest">Qty</span>
<span className="text-xs font-semibold text-slate-900">200</span>
</div>
<div className="flex flex-col items-center justify-center px-1 gap-0.5">
<span className="text-[9px] uppercase font-semibold text-slate-400 tracking-widest" style={{}}>TURNAROUND</span>
<span className="text-xs font-semibold text-slate-900">5 Days</span>
</div>
</div>

<div className="w-full bg-white hover:border-slate-300 border border-slate-200 rounded-lg px-3.5 py-2 cursor-pointer group transition-colors relative">
<div className="text-[10px] font-medium text-slate-500 mb-0.5 uppercase tracking-wide">Paper Type
          </div>
<div className="flex items-center justify-between">
<span className="text-sm text-slate-700 font-medium">14pt Gloss Cover</span>
<svg className="text-slate-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>

<div className="w-full bg-white hover:border-slate-300 border border-slate-200 rounded-lg px-3.5 py-2 cursor-pointer group transition-colors relative">
<div className="text-[10px] font-medium text-slate-500 mb-0.5 uppercase tracking-wide">Proof Options
          </div>
<div className="flex items-center justify-between">
<span className="text-sm text-slate-700 font-medium">Straight To Production</span>
<svg className="text-slate-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>

<div className="flex items-end justify-between px-1 py-1">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight leading-none">Total</h3>
<span className="text-2xl font-semibold text-slate-900 tracking-tight leading-none">Free</span>
</div>

<div className="flex flex-col gap-2.5">

<button className="w-full bg-[#114b4b] hover:bg-[#0f3d3d] text-white rounded-xl px-4 py-3 flex items-center justify-between shadow-md shadow-[#114b4b]/10 transition-all group hover:-translate-y-0.5">
<div className="text-left">
<div className="text-sm font-semibold tracking-tight">Upload Design</div>
<div className="text-[10px] text-emerald-100/90 font-medium mt-px">Bring Your Vision to Life</div>
</div>
<div className="w-6 h-6 flex items-center justify-center">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg>
</div>
</button>

<button className="w-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-3 flex items-center justify-between transition-all group hover:border-slate-300">
<div className="text-left">
<div className="text-sm font-semibold tracking-tight">Design Online</div>
<div className="text-[10px] text-slate-500 font-medium mt-px">Personalize Our Templates</div>
</div>
<div className="w-6 h-6 flex items-center justify-center">
<svg className="text-slate-400 group-hover:text-slate-900 transition-colors" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</div>
</button>
</div>

<div className="text-center pt-1">
<a className="text-[10px] font-semibold text-slate-500 underline underline-offset-2 decoration-slate-300 hover:text-emerald-700 hover:decoration-emerald-700 transition-all" href="#">When
            Will I Get It?</a>
</div>
</div>
</div>
</div>

<div className="mt-32 relative z-10">

<div className="text-center max-w-2xl mx-auto mb-16">
</div>


<div className="pt-12 border-t border-slate-200/60">
<p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">Trusted by
        innovative teams at</p>
<div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-2xl font-bold text-slate-800 flex items-center gap-2">
<svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2-10 2 10h-4zm0 2.5l-10-5 10-5 10 5-10 5z"></path>
</svg>
          Acme Corp
        </div>

<div className="text-2xl font-bold text-slate-800 flex items-center gap-2">
<svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M2 12h20" stroke="white" strokeWidth="2"></path>
</svg>
          Globex
        </div>

<div className="text-2xl font-bold text-slate-800 flex items-center gap-2">
<svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24">
<rect className="" height="16" rx="2" width="16" x="4" y="4"></rect>
</svg>
          Soylent
        </div>

<div className="text-2xl font-bold text-slate-800 flex items-center gap-2">
<svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2L2 22h20L12 2z"></path>
</svg>
          Umbrella
        </div>

<div className="text-2xl font-bold text-slate-800 flex items-center gap-2">
<svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2l3 9h9l-7 5 3 9-8-5-8 5 3-9-7-5h9z"></path>
</svg>
          Initech
        </div>
</div>
</div>
</div>
</div>
</div>

</main>


    </>
  );
}
