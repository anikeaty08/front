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
      

<nav className="w-full flex justify-between items-center py-6 px-6 lg:px-12 max-w-7xl mx-auto border-b border-white/10 relative z-20">
<div className="flex items-center gap-2">

<div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center transform -rotate-12">
<span className="text-lg font-bold text-white">f</span>
</div>
<span className="text-xl font-semibold tracking-tight">SIGNAL AI</span>
</div>
<div className="hidden md:flex gap-8 text-lg text-neutral-400 font-medium">
<a className="hover:text-white transition-colors" href="#">Digital-Transformation</a>
<a className="hover:text-white transition-colors" href="#">Enterprise-Innovation</a>
<a className="hover:text-white transition-colors" href="#">Payment-Systems</a>
<a className="hover:text-white transition-colors" href="#">Smart-Ecosystems</a>
</div>
<a className="flex items-center gap-2 group text-lg font-medium" href="#">Contact Us</a>
</nav>


<header className="lg:px-12 max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-32 pl-6 relative">

<div className="absolute top-10 right-20 text-orange-500 opacity-80 animate-pulse">
<svg className="" fill="currentColor" height="60" viewbox="0 0 24 24" width="60" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"></path>
</svg>
</div>
<div className="absolute top-32 right-10 text-orange-500 opacity-60">
<svg className="" fill="currentColor" height="40" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"></path>
</svg>
</div>

<div className="relative z-10 mb-20">
<h1 className="uppercase leading-[0.9] md:text-7xl text-6xl font-semibold tracking-tight font-jakarta">Excellence
      through <br className=""/> AI-Driven Infrastructure</h1>
</div>
<div className="grid lg:grid-cols-12 gap-x-12 gap-y-12 items-start">

<div className="lg:col-span-5 flex flex-col gap-10">
<p className="leading-relaxed text-sm font-medium text-neutral-400 text-justify max-w-md">Signal AI delivers
        trailblazing technology solutions designed to redefine operational efficiency. From e-governance to custom
        enterprise software, we empower the public and private sectors to exponentially reduce costs and maximize
        revenue through measurable, high-impact innovation.</p>
<div className="flex items-center gap-4">
<button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg tracking-wide transition-colors">
                        GET STARTED
                    </button>
<button className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
<svg className="lucide lucide-arrow-up-right w-6 h-6" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
<div className="pt-8">
<div className="flex items-center gap-2 mb-3">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
<span className="text-lg font-medium text-neutral-300">Active Users</span>
</div>
<div className="flex items-center gap-4">
<span className="text-4xl font-semibold tracking-tight">95K+</span>
<div className="flex -space-x-4">
<img alt="User" className="w-12 h-12 rounded-full border-4 border-neutral-900" src="https://i.pravatar.cc/100?img=11"/>
<img alt="User" className="w-12 h-12 rounded-full border-4 border-neutral-900" src="https://i.pravatar.cc/100?img=32"/>
<img alt="User" className="w-12 h-12 rounded-full border-4 border-neutral-900" src="https://i.pravatar.cc/100?img=12"/>
<div className="w-12 h-12 rounded-full border-4 border-neutral-900 bg-neutral-800 flex items-center justify-center text-xs font-medium">
              +</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex h-[400px] relative perspective-1000 items-center justify-center">

<div className="absolute w-64 h-96 bg-neutral-800 rounded-3xl border border-white/10 shadow-2xl transform rotate-[15deg] translate-y-12 translate-x-12 flex flex-col p-6 justify-between opacity-60">
<span className="text-xs text-neutral-500 rotate-90 absolute right-2 top-8">IDEMIA</span>
</div>

<div className="transform flex flex-col text-neutral-900 bg-neutral-300 w-64 h-96 rounded-3xl pt-6 pr-6 pb-6 pl-6 absolute shadow-2xl translate-x-4 translate-y-6 rotate-[5deg] justify-between">
<div className="flex justify-between items-start">
<span className="font-bold text-lg opacity-50">VISA</span>
</div>
<div className="">
<div className="text-xl font-semibold tracking-tight">RalphEdwards</div>
<div className="mt-4 flex justify-between text-xs font-mono opacity-60">
<span>0322</span>
<span>07/25</span>
</div>
</div>
</div>

<div className="absolute w-64 h-96 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl shadow-2xl transform -rotate-[12deg] -translate-y-4 flex flex-col p-6 justify-between text-white border-t border-white/20">
<div className="flex justify-between items-start">
<span className="text-2xl font-bold italic tracking-tighter">SIGNAL AI</span>
<i className="w-8 h-8 opacity-80" data-lucide="contactless"></i>
</div>
<div className="w-12 h-8 bg-yellow-400/20 rounded mb-4 border border-yellow-200/30"></div>
<div className="">
<div className="text-lg font-mono tracking-widest mb-2">**** **** **** 4092</div>
<div className="flex justify-between items-end">
<div className="">
<p className="text-xs opacity-80 uppercase mb-1">Card Holder</p>
<p className="text-lg font-semibold">Jaylen Brown</p>
</div>
<span className="text-xl font-bold italic opacity-80">SIGNALPAY</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 flex flex-col justify-center space-y-2 mt-10 lg:mt-0">
<a className="group flex items-center justify-between hover:border-orange-500/50 transition-colors border-white/10 border-b" href="#">
</a>
</div>
</div>
</header><section className="bg-neutral-50 text-neutral-900 py-24 px-6 lg:px-12 rounded-t-[3rem]">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 mb-16">
<div className="">
<p className="text-sm font-semibold tracking-wider uppercase text-neutral-500 mb-4">About Us</p>
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight uppercase leading-none">
                        Getting to <br/>know finguard
                    </h2>
</div>
<div className="flex items-end">
<p className="text-xl text-neutral-600 font-medium leading-relaxed max-w-lg">
                        We are more than just a financial service provider; we are your trusted partner in navigating the complexities of finance.
                    </p>
</div>
</div>

<div className="grid md:grid-cols-3 gap-6">

<div className="bg-orange-500 rounded-3xl p-8 flex flex-col justify-between min-h-[360px] text-white relative overflow-hidden group">
<div className="absolute -right-10 -top-10 bg-orange-400 w-40 h-40 rounded-full blur-3xl opacity-50"></div>
<div className="flex justify-between items-start relative z-10">
<div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center">
<svg className="lucide lucide-user w-6 h-6 text-white" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</div>
<div className="relative z-10">
<div className="flex items-baseline gap-2 mb-2">
<span className="text-7xl font-semibold tracking-tight">500k</span>
<span className="text-3xl font-medium opacity-80">users</span>
</div>
<p className="text-lg opacity-90 font-medium leading-snug">
                            finguard rapidly attracting a substantial user base of over 600,000 customers within its first year.
                        </p>
</div>
</div>

<div className="bg-neutral-950 rounded-3xl p-8 flex flex-col justify-between min-h-[360px] text-white relative overflow-hidden">
<div className="flex justify-between items-start">
<div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-zap w-6 h-6 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
</div>
<div className="">
<div className="flex items-start gap-1 mb-2">
<span className="text-7xl font-semibold tracking-tight">98</span>
<span className="text-4xl font-semibold mt-2">%</span>
</div>
<p className="text-lg text-neutral-400 font-medium leading-snug">
                            Users enjoy faster transaction processing time.
                        </p>
</div>
</div>

<div className="bg-neutral-200/50 rounded-3xl p-8 flex flex-col justify-between min-h-[360px] text-neutral-900 relative">
<div className="flex justify-between items-start">
<div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-orange-500">
<svg className="lucide lucide-credit-card w-6 h-6" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
</div>
<div>
<div className="flex items-start gap-1 mb-2">
<span className="text-7xl font-semibold tracking-tight">24</span>
<span className="text-4xl font-semibold mt-2">K</span>
</div>
<p className="text-lg text-neutral-600 font-medium leading-snug">
                            A network of over 200,000 partner ATMs worldwide.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-50 text-neutral-900 pb-24 px-6 lg:px-12">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 mb-20">
<div>
<p className="text-sm font-semibold tracking-wider uppercase text-neutral-500 mb-4">Features</p>
<h2 className="text-5xl font-semibold tracking-tight uppercase leading-[0.95] max-w-md">
                        All-in-one platform for savings
                    </h2>
</div>
<div className="flex items-end">
<p className="text-lg text-neutral-600 font-medium max-w-sm">
                        Simplify your financial life by securely connecting your accounts automatically categorizing transactions.
                    </p>
</div>
</div>

<div className="grid lg:grid-cols-12 gap-0 border-t border-neutral-200">

<div className="lg:col-span-5">
<div className="group flex items-center justify-between py-8 border-b border-neutral-200 pr-8 cursor-pointer hover:bg-neutral-100 transition-colors px-4">
<div className="flex items-center gap-6">
<span className="text-lg font-mono font-medium text-neutral-400">01</span>
<h3 className="text-xl font-semibold">Secure and Easy Transactions</h3>
</div>
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center group-hover:bg-white transition-colors">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
<div className="group flex items-center justify-between py-8 border-b border-neutral-200 pr-8 cursor-pointer hover:bg-neutral-100 transition-colors px-4">
<div className="flex items-center gap-6">
<span className="text-lg font-mono font-medium text-neutral-400">02</span>
<h3 className="text-xl font-semibold">Real-Time Financial Monitoring</h3>
</div>
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center group-hover:bg-white transition-colors">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="flex items-center justify-between py-8 border-b border-neutral-900 pr-8 cursor-pointer bg-neutral-900 text-white -mx-4 px-8 relative shadow-xl rounded-r-lg z-10">
<div className="flex items-center gap-6">
<span className="text-lg font-mono font-medium text-neutral-500">03</span>
<h3 className="text-xl font-semibold uppercase">Fast &amp; Easy Transactions</h3>
</div>
<div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="group flex items-center justify-between py-8 border-b border-neutral-200 pr-8 cursor-pointer hover:bg-neutral-100 transition-colors px-4">
<div className="flex items-center gap-6">
<span className="text-lg font-mono font-medium text-neutral-400">04</span>
<h3 className="text-xl font-semibold">Comprehensive Financial Planning</h3>
</div>
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center group-hover:bg-white transition-colors">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="lg:col-span-7 bg-neutral-100 lg:rounded-r-3xl p-12 flex items-center justify-center">
<div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
<div className="flex justify-between items-center mb-6">
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-neutral-300"></div>
<div className="w-2 h-2 rounded-full bg-neutral-300"></div>
<div className="w-2 h-2 rounded-full bg-neutral-300"></div>
</div>
</div>
<h4 className="text-lg font-bold mb-4">Latest Invoice</h4>

<div className="grid grid-cols-3 gap-4 mb-8">
<div>
<div className="flex items-center gap-2 mb-1">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
<span className="text-xs font-semibold">67%</span>
</div>
<div className="w-full h-1.5 bg-neutral-100 rounded-full">
<div className="h-full w-[67%] bg-orange-500 rounded-full"></div>
</div>
<span className="text-[10px] text-neutral-400">Success</span>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<div className="w-2 h-2 rounded-full bg-neutral-900"></div>
<span className="text-xs font-semibold">14%</span>
</div>
<div className="w-full h-1.5 bg-neutral-100 rounded-full">
<div className="h-full w-[14%] bg-neutral-900 rounded-full"></div>
</div>
<span className="text-[10px] text-neutral-400">Pending</span>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<div className="w-2 h-2 rounded-full bg-neutral-300"></div>
<span className="text-xs font-semibold">19%</span>
</div>
<div className="w-full h-1.5 bg-neutral-100 rounded-full">
<div className="h-full w-[19%] bg-neutral-300 rounded-full"></div>
</div>
<span className="text-[10px] text-neutral-400">Cancel</span>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between p-2 hover:bg-neutral-50 rounded-lg">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full" src="https://i.pravatar.cc/100?img=5"/>
<div>
<p className="text-sm font-semibold">Kelly Williams</p>
<p className="text-xs text-neutral-400">4 July 2024</p>
</div>
</div>
<span className="text-[10px] bg-orange-100 text-orange-600 px-2 py-1 rounded font-bold uppercase">Success</span>
</div>
<div className="flex items-center justify-between p-2 hover:bg-neutral-50 rounded-lg">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full" src="https://i.pravatar.cc/100?img=13"/>
<div>
<p className="text-sm font-semibold">John Terry</p>
<p className="text-xs text-neutral-400">3 July 2024</p>
</div>
</div>
<span className="text-[10px] bg-orange-100 text-orange-600 px-2 py-1 rounded font-bold uppercase">Success</span>
</div>
<div className="flex items-center justify-between p-2 hover:bg-neutral-50 rounded-lg opacity-60">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full" src="https://i.pravatar.cc/100?img=9"/>
<div>
<p className="text-sm font-semibold">Caitlin Clark</p>
<p className="text-xs text-neutral-400">2 July 2024</p>
</div>
</div>
<span className="text-[10px] bg-neutral-200 text-neutral-600 px-2 py-1 rounded font-bold uppercase">Pending</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-50 text-neutral-900 pb-32 px-6 lg:px-12">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">

<div className="lg:w-1/2 relative h-[500px] w-full flex items-center justify-center">

<div className="absolute w-[280px] h-[440px] bg-gradient-to-bl from-orange-600 to-orange-500 rounded-3xl transform rotate-[-15deg] translate-x-12 translate-y-4"></div>

<div className="absolute w-[280px] h-[440px] bg-gradient-to-tr from-orange-500 to-orange-400 rounded-3xl shadow-2xl flex flex-col justify-between p-6 text-white transform rotate-[-5deg] z-10">
<div className="flex justify-between items-start">
<span className="font-bold text-2xl italic tracking-tight rotate-[-90deg] origin-top-left translate-y-36 -translate-x-2">finguard</span>
<div className="flex flex-col items-end">
<span className="font-bold text-lg italic">VISA</span>
<div className="mt-4 text-xs font-mono text-right opacity-80 leading-relaxed">
                                032392701002
                            </div>
</div>
</div>
<div>
<div className="text-2xl font-semibold mb-2">RalphEdwards</div>
<div className="text-xs opacity-70">finguard.com</div>
</div>
</div>
</div>

<div className="lg:w-1/2">
<p className="text-sm font-semibold tracking-wider uppercase text-neutral-500 mb-4">Benefits</p>
<h2 className="text-5xl font-semibold tracking-tight uppercase leading-[0.95] mb-8">
                    Shopping on International
                </h2>
<div className="space-y-6 mb-10">
<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0 mt-1">
<span className="font-bold text-sm">$</span>
</div>
<p className="text-lg font-medium text-neutral-700">Get 2% cashback on all purchases.</p>
</div>
<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-white border border-neutral-200 text-neutral-900 flex items-center justify-center shrink-0 mt-1">
<svg className="lucide lucide-plane w-4 h-4" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
</div>
<p className="text-lg font-medium text-neutral-700">Access exclusive travel deals and discounts on flights and hotels.</p>
</div>
<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-white border border-neutral-200 text-neutral-900 flex items-center justify-center shrink-0 mt-1">
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-lg font-medium text-neutral-700">Includes travel insurance and purchase protection.</p>
</div>
</div>
<div className="flex items-center gap-4">
<button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                        LEARN MORE
                    </button>
<button className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors">
<svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</div>
</div>
</section>

<section className="bg-black text-white py-24 px-6 lg:px-12 rounded-t-[3rem]">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-10">
<div>
<p className="text-sm font-semibold tracking-wider uppercase text-neutral-500 mb-4">Our Trusted Partners</p>
<h2 className="text-5xl font-semibold tracking-tight uppercase leading-[0.95] max-w-lg">
                        Real-Time Financial Monitoring
                    </h2>
</div>
<p className="text-lg text-neutral-400 max-w-md font-medium">
                    Just like us, finguard believes in building long-term relationships with clients. Their focus on customer service aligns perfectly with our own value.
                </p>
</div>
<div className="grid lg:grid-cols-3 gap-6">

<div className="flex flex-col justify-between h-full space-y-12">
<div className="bg-neutral-900/50 p-6 rounded-3xl border border-white/5">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center mb-6">
<svg className="lucide lucide-users w-5 h-5 text-orange-500" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="text-8xl font-semibold tracking-tighter mb-4">98<span className="text-4xl align-top">%</span></div>
<p className="text-neutral-400 font-medium">
                            Partners are happy with our collaboration, noting increased efficiency and mutual growth since joining us.
                        </p>
</div>

<div className="bg-orange-500 h-[280px] rounded-3xl flex items-center justify-center">

<div className="text-6xl font-bold italic text-white">
<svg className="w-20 h-20" fill="currentColor" viewbox="0 0 24 24"><path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"></path></svg>
</div>
</div>
</div>

<div className="lg:col-span-2 grid grid-cols-2 gap-6">

<div className="bg-orange-500 h-[280px] rounded-3xl flex items-center justify-center">
<div className="flex items-center gap-2 text-white">
<svg className="lucide lucide-apple w-12 h-12 fill-current" data-lucide="apple" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg>
<span className="text-4xl font-semibold tracking-tight">Pay</span>
</div>
</div>

<div className="bg-orange-500 h-[280px] rounded-3xl flex items-center justify-center">
<div className="text-white text-6xl font-bold italic tracking-tighter">P</div>
</div>

<div className="bg-orange-500 h-[280px] rounded-3xl flex items-center justify-center">
<div className="flex items-center gap-2 text-white">
<span className="text-4xl font-bold tracking-tight">G Pay</span>
</div>
</div>

<div className="bg-black border border-white/10 h-[280px] rounded-3xl flex flex-col items-center justify-center text-center p-8">
<h3 className="text-2xl font-bold uppercase leading-tight mb-6">Creating ImpactfulSolutions And LastingPartnerships</h3>
<button className="bg-white text-black px-6 py-3 rounded-full text-sm font-bold tracking-wide hover:bg-neutral-200 transition-colors">
                            LETS WORK TOGETHER
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-100 text-neutral-900 py-32 px-6 lg:px-12">
<div className="max-w-4xl mx-auto text-center relative">
<p className="text-sm font-semibold tracking-wider uppercase text-orange-500 mb-8">What they say about us</p>
<div className="absolute -top-10 right-0 text-orange-500 opacity-100">
<svg fill="currentColor" height="60" viewbox="0 0 24 24" width="60"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H17.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V3H10.0166C11.6735 3 13.0166 4.34315 13.0166 6V15C13.0166 16.6569 11.6735 18 10.0166 18H8.0166V21H5.0166Z"></path></svg>
</div>
<h3 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight mb-12">
                “finguard has completely transformed the way I manage my finances. The real-time updates and personalized advice have been invaluable.”
            </h3>
<div className="flex items-center justify-between border-t border-neutral-200 pt-8">
<div className="flex items-center gap-4">
<img alt="Author" className="w-12 h-12 rounded-full grayscale" src="https://i.pravatar.cc/100?img=5"/>
<div className="text-left">
<p className="font-bold text-neutral-900">Kelly Williams</p>
<p className="text-sm text-neutral-500">Head of Design, Layers</p>
</div>
</div>
<div className="flex gap-3">
<button className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-white transition-colors">
<svg className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-white transition-colors">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</section>

<footer className="bg-orange-500 text-white pt-24 pb-8 overflow-hidden relative">

<div className="absolute bottom-[20%] left-0 right-0 select-none pointer-events-none">
<h1 className="text-[14vw] font-black text-center leading-none text-orange-600 opacity-40 mix-blend-multiply tracking-tighter">finguard</h1>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

<div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-10">
<h2 className="text-5xl font-bold uppercase leading-none tracking-tight max-w-lg">
                    Ready to take control of your financial future
                </h2>
<div className="flex flex-col items-start gap-4">
<button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold tracking-wide hover:bg-neutral-100 transition-colors shadow-lg">
                        GET STARTED
                    </button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 text-sm">
<div>
<h4 className="font-bold mb-6">Features</h4>
<ul className="space-y-4 opacity-80 font-medium">
<li><a className="hover:opacity-100" href="#">Analytics</a></li>
<li><a className="hover:opacity-100" href="#">Collaboration</a></li>
<li><a className="hover:opacity-100" href="#">Data Management</a></li>
<li><a className="hover:opacity-100" href="#">Integrations</a></li>
<li><a className="hover:opacity-100" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-6">Company</h4>
<ul className="space-y-4 opacity-80 font-medium">
<li><a className="hover:opacity-100" href="#">About us</a></li>
<li><a className="hover:opacity-100" href="#">Blog</a></li>
<li><a className="hover:opacity-100" href="#">Careers</a></li>
<li><a className="hover:opacity-100" href="#">Cookie Policy</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-6">Resource</h4>
<ul className="space-y-4 opacity-80 font-medium">
<li><a className="hover:opacity-100" href="#">Customers</a></li>
<li><a className="hover:opacity-100" href="#">Strategic</a></li>
<li><a className="hover:opacity-100" href="#">E books &amp; Guides</a></li>
<li><a className="hover:opacity-100" href="#">Webinar</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-6">Support</h4>
<ul className="space-y-4 opacity-80 font-medium">
<li><a className="hover:opacity-100" href="#">Help Center</a></li>
<li><a className="hover:opacity-100" href="#">Contact</a></li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20 text-xs font-medium opacity-80">
<div className="flex gap-4 mb-4 md:mb-0">
<a href="#">© 2024 finguard</a>
</div>
<div className="flex gap-4 mb-4 md:mb-0">
<span>All Rights Reserved.</span>
</div>
<div className="flex gap-6">
<a className="hover:opacity-100" href="#">Terms of Service</a>
<a className="hover:opacity-100" href="#">Privacy Policy</a>
</div>
</div>
<div className="flex gap-4 mt-8 opacity-60">
<svg className="lucide lucide-facebook w-4 h-4 cursor-pointer hover:opacity-100" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
<svg className="lucide lucide-instagram w-4 h-4 cursor-pointer hover:opacity-100" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<svg className="lucide lucide-twitter w-4 h-4 cursor-pointer hover:opacity-100" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
<svg className="lucide lucide-linkedin w-4 h-4 cursor-pointer hover:opacity-100" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</div>
</div>
</footer>


    </>
  );
}
