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
      

<nav className="fixed z-50 bg-[#050505]/80 border-white/5 border-b top-0 right-0 left-0 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded-md flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="lucide:grid"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight text-lg">GRIDFUNNELS</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#templates">Templates</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">Login</a>
<a className="bg-white text-black text-sm font-medium px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#">Start Free</a>
</div>
</div>
</nav>

<section className="overflow-hidden pt-32 pr-6 pb-20 pl-6 relative perspective-container">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none blob-move"></div>
<div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-500/10 rounded-full blur-[100px] pointer-events-none blob-move" style={{animationDirection: 'alternate-reverse', animationDuration: '25s'}}></div>
<div className="max-w-5xl mx-auto text-center relative z-10">

<div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-3 py-1 mb-8 reveal hover:scale-105 transition-transform duration-300 cursor-default" style={{animationDelay: '0.1s'}}>
<div className="flex -space-x-2">
<img alt="User" className="w-5 h-5 rounded-full ring-2 ring-black" src="https://i.pravatar.cc/100?img=1"/>
<img alt="User" className="w-5 h-5 rounded-full ring-2 ring-black" src="https://i.pravatar.cc/100?img=2"/>
<img alt="User" className="w-5 h-5 rounded-full ring-2 ring-black" src="https://i.pravatar.cc/100?img=3"/>
</div>
<div className="flex items-center gap-1 border-l border-white/10 pl-2 ml-1">
<iconify-icon className="text-yellow-500 text-xs" icon="lucide:star"></iconify-icon>
<span className="text-xs text-neutral-400">Trusted by 2,000+ businesses</span>
</div>
</div>

<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6 reveal" style={{animationDelay: '0.2s'}}>
                Create a Website That Attracts Leads <br className="hidden md:block"/>
<span className="text-shimmer">&amp; Turns Them Into Customers</span>
</h1>

<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed reveal" style={{animationDelay: '0.3s'}}>
                All you need in one place: Website, Funnels, Email Marketing &amp; CRM, Courses, Blog and more. Start for only $49/mo.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal" style={{animationDelay: '0.4s'}}>
<button className="shiny-cta px-8 py-3 text-base font-medium group transition-all hover:scale-105 duration-300">
<span className="">Start Building Your Website</span>
<iconify-icon className="inline-block ml-2 group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
<a className="px-8 py-3 rounded-full border border-white/10 text-neutral-300 hover:bg-white/5 transition-colors text-base font-medium flex items-center gap-2 hover:border-white/20" href="#demos">
<iconify-icon className="text-lg" icon="lucide:play-circle"></iconify-icon>
                    See How It Works
                </a>
</div>

<p className="mt-6 text-sm text-neutral-500 flex items-center justify-center gap-2 reveal" style={{animationDelay: '0.5s'}}>
<iconify-icon className="text-indigo-400" icon="lucide:shield-check"></iconify-icon>
                30-Day Money-Back Guarantee
            </p>
</div>

<div className="max-w-6xl mx-auto mt-20 relative dashboard-tilt" style={{animationDelay: '0.6s'}}>
<div className="rounded-xl border border-white/10 bg-[#0a0a0a] p-2 shadow-2xl shadow-indigo-500/20 group relative">

<div className="rounded-lg overflow-hidden relative aspect-[16/9] md:aspect-[21/9]">
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 opacity-60"></div>
<img alt="GridFunnels Dashboard" className="w-full h-full object-cover opacity-90 transition-opacity duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f1d590a8-c6eb-418e-aa6d-6c2f648888a7_1600w.jpg"/>
</div>

<div className="absolute bottom-10 -left-4 md:left-10 bg-[#111]/90 backdrop-blur-xl border border-white/10 rounded-lg p-4 flex gap-4 items-center animate-float shadow-2xl z-20" style={{animationDelay: '1.5s'}}>
<div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
<iconify-icon className="text-xl" icon="lucide:trending-up"></iconify-icon>
</div>
<div>
<p className="text-xs text-neutral-400 uppercase tracking-wide">Revenue Today</p>
<p className="text-white font-medium text-lg">$1,240.50</p>
</div>
</div>

<div className="absolute top-10 -right-4 md:right-10 bg-[#111]/90 backdrop-blur-xl border border-white/10 rounded-lg p-3 flex gap-3 items-center animate-float shadow-2xl z-20" style={{animationDelay: '2.5s', animationDuration: '7s'}}>
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs text-white border border-[#111]">JD</div>
<div className="w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center text-xs text-white border border-[#111]">AS</div>
</div>
<div>
<p className="text-xs text-white font-medium">New Leads</p>
<p className="text-[10px] text-green-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Just now</p>
</div>
</div>
</div>

<div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-indigo-500/20 blur-[80px] -z-10"></div>
</div>
</section>

<section className="py-24 px-6 relative bg-neutral-900/30 border-t border-white/5" id="features">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">One Platform. Infinite Possibilities.</h2>
<p className="text-neutral-400 text-lg">Replace your stack of disconnected tools with one integrated powerhouse.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 rounded-[2rem] bg-neutral-900 border border-white/5 p-8 relative overflow-hidden group hover:border-indigo-500/30 transition-colors">
<div className="absolute top-0 right-0 p-12 bg-indigo-500/10 blur-[100px] rounded-full"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-indigo-400" icon="lucide:filter"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-3 tracking-tight">Sales Driven Funnels</h3>
<p className="text-neutral-400 mb-8 max-w-md">Create high-converting sales funnels with one-click upsells, downsells, and order bumps. Everything on your domain.</p>

<div className="flex gap-4 items-center mt-auto">
<div className="bg-[#111] border border-white/10 rounded-lg p-3 w-32 group-hover:-translate-y-1 transition-transform duration-300">
<div className="h-2 w-16 bg-white/10 rounded mb-2"></div>
<div className="h-12 bg-indigo-500/20 rounded border border-indigo-500/30 flex items-center justify-center text-xs text-indigo-300">Landing</div>
</div>
<iconify-icon className="text-neutral-600" icon="lucide:arrow-right"></iconify-icon>
<div className="bg-[#111] border border-white/10 rounded-lg p-3 w-32 group-hover:-translate-y-1 transition-transform duration-300 delay-75">
<div className="h-2 w-16 bg-white/10 rounded mb-2"></div>
<div className="h-12 bg-emerald-500/20 rounded border border-emerald-500/30 flex items-center justify-center text-xs text-emerald-300">Checkout</div>
</div>
<iconify-icon className="text-neutral-600" icon="lucide:arrow-right"></iconify-icon>
<div className="bg-[#111] border border-white/10 rounded-lg p-3 w-32 opacity-50 group-hover:opacity-100 transition-opacity duration-300 group-hover:-translate-y-1 transition-transform delay-100">
<div className="h-2 w-16 bg-white/10 rounded mb-2"></div>
<div className="h-12 bg-white/5 rounded border border-white/10 flex items-center justify-center text-xs">Upsell</div>
</div>
</div>
</div>
</div>

<div className="rounded-[2rem] bg-neutral-900 border border-white/5 p-8 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-blue-400" icon="lucide:shopping-bag"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Online Store</h3>
<p className="text-neutral-400 text-sm mb-6">Unlimited products, digital or physical. Integrated with Stripe &amp; PayPal automatically.</p>
<div className="bg-[#111] rounded-xl border border-white/5 p-4 mt-auto group-hover:scale-105 transition-transform duration-300">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-neutral-500">Total Sales</span>
<span className="text-xs text-green-400">+12%</span>
</div>
<div className="text-xl text-white font-medium">$14,230</div>
</div>
</div>

<div className="rounded-[2rem] bg-neutral-900 border border-white/5 p-8 relative overflow-hidden group hover:border-pink-500/30 transition-colors">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-pink-400" icon="lucide:mail"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Email &amp; CRM</h3>
<p className="text-neutral-400 text-sm mb-6">Visual automation builder. Tagging, segmentation, and broadcast messages included.</p>
<div className="space-y-2 mt-auto">
<div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<div className="text-xs text-neutral-300">Welcome Sequence</div>
<div className="ml-auto text-xs text-neutral-500">Active</div>
</div>
<div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors delay-75">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="text-xs text-neutral-300">Cart Abandonment</div>
<div className="ml-auto text-xs text-neutral-500">Paused</div>
</div>
</div>
</div>

<div className="md:col-span-2 rounded-[2rem] bg-neutral-900 border border-white/5 p-8 relative overflow-hidden group hover:border-orange-500/30 transition-colors">
<div className="absolute top-0 left-0 p-12 bg-orange-500/10 blur-[100px] rounded-full"></div>
<div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
<div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-orange-400" icon="lucide:graduation-cap"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-3 tracking-tight">Memberships &amp; Courses</h3>
<p className="text-neutral-400 mb-6">Build a recurring revenue stream. Host videos, quizzes, and award certificates directly on your site.</p>
<a className="text-sm font-medium text-white border-b border-white/30 hover:border-white pb-0.5 transition-colors" href="#">View course templates</a>
</div>
<div className="bg-[#111] border border-white/10 rounded-xl p-4 rotate-3 group-hover:rotate-0 transition-transform duration-500">
<div className="aspect-video bg-neutral-800 rounded-lg mb-3 relative flex items-center justify-center overflow-hidden">
<iconify-icon className="text-3xl text-white/50" icon="lucide:play"></iconify-icon>
<div className="absolute bottom-0 left-0 h-1 bg-orange-500 w-2/3"></div>
</div>
<div className="space-y-2">
<div className="h-2 bg-neutral-800 rounded w-3/4"></div>
<div className="h-2 bg-neutral-800 rounded w-1/2"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#050505]" id="templates">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
<div className="flex-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-6">
<iconify-icon icon="lucide:layout-template"></iconify-icon>
                    Premium Design
                </div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Start with a stunning template.</h2>
<p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                    Choose from hundreds of professional, high-converting templates. Customize everything with our intuitive drag &amp; drop builder. No coding required.
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-neutral-300">
<iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon>
                        Mobile responsive automatically
                    </li>
<li className="flex items-center gap-3 text-neutral-300">
<iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon>
                        SEO optimized structure
                    </li>
<li className="flex items-center gap-3 text-neutral-300">
<iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon>
                        Global styling controls
                    </li>
</ul>
<button className="bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-neutral-200 transition-colors">
                    Browse Templates
                </button>
</div>
<div className="flex-1 relative">

<div className="relative z-10 bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-transform duration-500">
<div className="bg-neutral-800 h-6 w-full flex items-center px-2 gap-1 border-b border-white/5">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<div className="p-4 space-y-4">
<div className="h-32 bg-neutral-800 rounded-lg animate-pulse"></div>
<div className="grid grid-cols-3 gap-2">
<div className="h-20 bg-neutral-800 rounded-lg"></div>
<div className="h-20 bg-neutral-800 rounded-lg"></div>
<div className="h-20 bg-neutral-800 rounded-lg"></div>
</div>
</div>
</div>
<div className="absolute top-4 -right-4 w-full h-full bg-neutral-800/50 border border-white/5 rounded-xl -z-10 transform rotate-3"></div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900/30 border-y border-white/5">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-16">Your website in 3 simple steps</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent -z-10"></div>

<div className="flex flex-col items-center group">
<div className="w-24 h-24 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-3xl font-bold text-white shadow-lg shadow-indigo-500/10 mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300 group-hover:border-indigo-500/50">
                        1
                    </div>
<h3 className="text-xl font-medium text-white mb-2">Choose Package</h3>
<p className="text-sm text-neutral-400">Start as low as $49/mo. Upgrade as you grow.</p>
</div>

<div className="flex flex-col items-center group">
<div className="w-24 h-24 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-3xl font-bold text-white shadow-lg shadow-indigo-500/10 mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300 group-hover:border-indigo-500/50 delay-75">
                        2
                    </div>
<h3 className="text-xl font-medium text-white mb-2">Select Template</h3>
<p className="text-sm text-neutral-400">Pick a design that fits your brand style.</p>
</div>

<div className="flex flex-col items-center group">
<div className="w-24 h-24 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-3xl font-bold text-white shadow-lg shadow-indigo-500/10 mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300 group-hover:border-indigo-500/50 delay-150">
                        3
                    </div>
<h3 className="text-xl font-medium text-white mb-2">Launch</h3>
<p className="text-sm text-neutral-400">Add your content and go live in minutes.</p>
</div>
</div>
<div className="mt-16">
<button className="shiny-cta px-10 py-4 text-lg font-medium">
<span>Let's Get Started</span>
</button>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-neutral-900/50 border border-white/5 rounded-3xl p-10 hover:bg-neutral-900 transition-colors duration-500">
<iconify-icon className="text-4xl text-indigo-400 mb-6" icon="lucide:life-buoy"></iconify-icon>
<h3 className="text-2xl font-semibold text-white mb-4">Professional Support</h3>
<p className="text-neutral-400 mb-6">
                    Our team is made of experienced website professionals. We're beside you via email, live chat, and detailed video trainings.
                </p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-white/5 rounded-full text-xs border border-white/5 text-neutral-300">Live Chat</span>
<span className="px-3 py-1 bg-white/5 rounded-full text-xs border border-white/5 text-neutral-300">Email</span>
<span className="px-3 py-1 bg-white/5 rounded-full text-xs border border-white/5 text-neutral-300">Video Guides</span>
</div>
</div>
<div className="bg-neutral-900/50 border border-white/5 rounded-3xl p-10 hover:bg-neutral-900 transition-colors duration-500">
<iconify-icon className="text-4xl text-emerald-400 mb-6" icon="lucide:lock"></iconify-icon>
<h3 className="text-2xl font-semibold text-white mb-4">Security &amp; Performance</h3>
<p className="text-neutral-400 mb-6">
                    Optimized for speed and secured against attacks. We handle the updates, hosting, and maintenance so you can focus on sales.
                </p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-white/5 rounded-full text-xs border border-white/5 text-neutral-300">GDPR Ready</span>
<span className="px-3 py-1 bg-white/5 rounded-full text-xs border border-white/5 text-neutral-300">SSL Included</span>
<span className="px-3 py-1 bg-white/5 rounded-full text-xs border border-white/5 text-neutral-300">DDoS Protection</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="pricing">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6">Less Money. More Value.</h2>
<p className="text-xl text-neutral-400 mb-10">Lead generating websites starting at only</p>
<div className="text-7xl md:text-9xl font-bold text-white tracking-tighter mb-10">
                $49<span className="text-3xl md:text-5xl text-neutral-500 font-medium tracking-normal">/mo</span>
</div>
<div className="flex flex-col gap-4 items-center">
<button className="shiny-cta px-12 py-4 text-xl">
<span>Start Now</span>
</button>
<p className="text-sm text-neutral-500">30-Day Money-Back Guarantee</p>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#080808]" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group bg-neutral-900/50 border border-white/5 rounded-xl overflow-hidden open:bg-neutral-900 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium select-none">
                        What is the GridFunnels solution?
                        <iconify-icon className="group-open:rotate-180 transition-transform duration-300 text-neutral-500" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
                        The GridFunnels solution is a one-stop-shop for creating a website, funnels, email marketing, blog, online store, and online courses. It replaces multiple disjointed tools.
                    </div>
</details>

<details className="group bg-neutral-900/50 border border-white/5 rounded-xl overflow-hidden open:bg-neutral-900 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium select-none">
                        Can I start using it at a low price?
                        <iconify-icon className="group-open:rotate-180 transition-transform duration-300 text-neutral-500" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
                        Yes! Plans start at just $49/mo. You can upgrade as your business grows and you need more resources.
                    </div>
</details>

<details className="group bg-neutral-900/50 border border-white/5 rounded-xl overflow-hidden open:bg-neutral-900 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium select-none">
                        Do I need to pay for updates, hosting and maintenance?
                        <iconify-icon className="group-open:rotate-180 transition-transform duration-300 text-neutral-500" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
                        No. Hosting, security updates, and platform maintenance are all included in your monthly subscription.
                    </div>
</details>

<details className="group bg-neutral-900/50 border border-white/5 rounded-xl overflow-hidden open:bg-neutral-900 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium select-none">
                        Who is the owner of the data/content?
                        <iconify-icon className="group-open:rotate-180 transition-transform duration-300 text-neutral-500" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
                        You own all your data, content, and subscriber lists. You can export them at any time.
                    </div>
</details>

<details className="group bg-neutral-900/50 border border-white/5 rounded-xl overflow-hidden open:bg-neutral-900 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium select-none">
                        Do I need to sign a contract?
                        <iconify-icon className="group-open:rotate-180 transition-transform duration-300 text-neutral-500" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
                        No contracts. GridFunnels is a month-to-month service that you can cancel at any time.
                    </div>
</details>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/10 bg-black">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-neutral-800 rounded flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="lucide:grid"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight">GRIDFUNNELS</span>
</div>
<div className="flex gap-8 text-sm text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Contact Support</a>
</div>
<div className="text-sm text-neutral-600">
                © 2023 GridFunnels. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
