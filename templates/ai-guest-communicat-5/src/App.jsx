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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
<div className="absolute inset-0 bg-grid-slate z-0"></div>
</div>

<nav className="fixed w-full z-50 top-0 bg-white/60 backdrop-blur-xl border-b border-slate-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="relative w-8 h-8 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">GuestReply</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors relative group" href="#features">
                    Features
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors relative group" href="#pricing">
                    Pricing
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Log in</a>
<button className="group relative px-5 py-2 rounded-full bg-slate-900 text-white text-xs font-semibold overflow-hidden shadow-lg shadow-slate-900/20 hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine"></div>
<span className="relative flex items-center gap-2">
                        Get Started
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="flex-1 text-center lg:text-left relative z-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8 hover:border-indigo-300 hover:scale-105 transition-all duration-300 cursor-default">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs font-medium text-slate-600 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-600">Now with GPT-4o Auto-Pilot</span>
</div>
<h1 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
                        Support on <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 animate-gradient">Autopilot</span>.
                    </h1>
<p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                        Automate 80% of guest messaging across Airbnb &amp; Booking.com. Give yourself a break while AI handles the rest.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<button className="group px-8 py-3.5 rounded-2xl bg-slate-900 text-white font-medium shadow-xl shadow-slate-900/20 hover:shadow-indigo-500/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden">
<span className="relative z-10">Start Free Trial</span>
<iconify-icon className="relative z-10 transition-transform group-hover:rotate-45" icon="solar:rocket-2-linear" width="18"></iconify-icon>
<div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</button>
<button className="group px-8 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-600 font-medium hover:border-indigo-200 hover:text-indigo-600 hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2">
<iconify-icon className="transition-transform group-hover:scale-110" icon="solar:play-circle-linear" width="20"></iconify-icon>
                            Watch Demo
                        </button>
</div>
<div className="mt-12 flex items-center justify-center lg:justify-start gap-6">
<div className="flex -space-x-4">

<img alt="" className="w-10 h-10 rounded-full border-2 border-white ring-1 ring-slate-100 transition-transform hover:scale-110 hover:z-10" src="https://i.pravatar.cc/100?img=12"/>
<img alt="" className="w-10 h-10 rounded-full border-2 border-white ring-1 ring-slate-100 transition-transform hover:scale-110 hover:z-10" src="https://i.pravatar.cc/100?img=32"/>
<img alt="" className="w-10 h-10 rounded-full border-2 border-white ring-1 ring-slate-100 transition-transform hover:scale-110 hover:z-10" src="https://i.pravatar.cc/100?img=44"/>
<div className="w-10 h-10 rounded-full border-2 border-white bg-slate-50 flex items-center justify-center text-xs font-bold text-slate-500 ring-1 ring-slate-100 relative z-0 hover:z-10 hover:scale-110 transition-transform">5k+</div>
</div>
<div className="flex flex-col">
<div className="flex text-amber-400 gap-0.5">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-400">Trusted by hosts worldwide</span>
</div>
</div>
</div>

<div className="flex-1 w-full relative perspective-1000 group">

<div className="relative bg-white/80 backdrop-blur-xl rounded-[2rem] border border-white/60 shadow-2xl shadow-slate-200/50 p-6 max-w-md mx-auto transition-transform duration-700 ease-out transform group-hover:rotate-y-2 group-hover:rotate-x-2 animate-float-y">

<div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
<div className="flex items-center gap-3">
<div className="relative">
<img className="w-10 h-10 rounded-full border border-white shadow-sm" src="https://i.pravatar.cc/100?img=5"/>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></div>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Sarah Jenkins</h3>
<p className="text-[10px] text-slate-400 font-medium tracking-wide uppercase">Airbnb Guest • Arriving Today</p>
</div>
</div>
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors cursor-pointer">
<iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon>
</div>
</div>

<div className="space-y-5">

<div className="flex gap-3 group/msg">
<div className="bg-slate-50 border border-slate-100 rounded-2xl rounded-tl-sm p-4 text-sm text-slate-600 leading-relaxed shadow-sm transition-transform group-hover/msg:translate-x-1 duration-300">
<p>Hi! We just landed. Is early check-in possible? Also, where exactly is the keybox?</p>
</div>
</div>

<div className="flex items-center gap-2 pl-2 opacity-0 animate-[fadeIn_0.5s_ease-in_forwards] animation-delay-500" style={{animationFillMode: 'forwards'}}>
<div className="flex gap-1">
<span className="w-1 h-1 bg-indigo-500 rounded-full animate-bounce"></span>
<span className="w-1 h-1 bg-indigo-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></span>
<span className="w-1 h-1 bg-indigo-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
</div>
<span className="text-[10px] font-semibold text-indigo-500 uppercase tracking-wider">AI Drafting Response...</span>
</div>

<div className="flex gap-3 flex-row-reverse group/ai">
<div className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-2xl rounded-tr-sm p-4 text-sm leading-relaxed shadow-lg shadow-indigo-500/20 transition-all duration-300 group-hover/ai:-translate-x-1 group-hover/ai:shadow-indigo-500/30">
<p>Hello Sarah! Welcome to London 🇬🇧. <br/><br/>Yes, the apartment is ready! The keybox code is <strong>4892</strong>. It's located to the left of the main door.</p>
</div>
</div>
</div>

<div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
<div className="flex-1 bg-slate-50 rounded-full h-10 px-4 flex items-center justify-between border border-transparent hover:border-slate-200 transition-colors">
<span className="text-xs text-slate-400">Type a message...</span>
<iconify-icon className="text-slate-400 cursor-pointer hover:text-slate-600" icon="solar:paperclip-linear" width="16"></iconify-icon>
</div>
<button className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md">
<iconify-icon className="ml-0.5" icon="solar:plain-3-bold" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="absolute -right-4 top-20 bg-white p-3 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 animate-[float-y_5s_ease-in-out_infinite_reverse]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
<iconify-icon icon="solar:check-circle-bold" width="18"></iconify-icon>
</div>
<div>
<p className="text-[10px] text-slate-400 uppercase font-bold">Success Rate</p>
<p className="text-sm font-bold text-slate-900">99.8%</p>
</div>
</div>
</div>

<div className="absolute -left-8 bottom-32 bg-white p-3 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 animate-float-y">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:clock-circle-bold" width="18"></iconify-icon>
</div>
<div>
<p className="text-[10px] text-slate-400 uppercase font-bold">Avg. Response</p>
<p className="text-sm font-bold text-slate-900">45 sec</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">Everything you need to scale</h2>
<p className="text-slate-500">Powerful features wrapped in a beautiful interface.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover-card-glow relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-50 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110 group-hover:rotate-6 origin-center">
<div className="w-32 h-32 bg-gradient-to-br from-indigo-100 to-blue-50 rounded-full blur-2xl"></div>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Smart AI Responses</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-sm">Our AI doesn't just reply; it understands context, sentiment, and your property details to craft human-like responses.</p>
</div>
</div>

<div className="md:row-span-2 bg-slate-900 rounded-3xl p-8 text-white shadow-xl shadow-slate-900/10 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-md border border-white/10 group-hover:rotate-12 transition-transform duration-500">
<iconify-icon className="text-white" icon="solar:shield-warning-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-2">Priority Inbox</h3>
<p className="text-sm text-slate-400 leading-relaxed">AI automatically flags urgent issues like maintenance or noise complaints so you can step in immediately.</p>
</div>

<div className="mt-8 bg-white/5 rounded-xl p-4 border border-white/10 backdrop-blur-sm group-hover:bg-white/10 transition-colors">
<div className="flex items-center gap-3 mb-2">
<div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
<span className="text-xs font-medium text-red-300">Urgent Alert Detected</span>
</div>
<div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-red-500 w-[80%] rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover-card-glow relative overflow-hidden group">
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:global-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Auto-Translation</h3>
<p className="text-sm text-slate-500">Instant translation for 100+ languages. Reply in English, they see it in Japanese.</p>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover-card-glow relative overflow-hidden group">
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:calendar-mark-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Sync Calendar</h3>
<p className="text-sm text-slate-500">Avoid double bookings with real-time sync across Airbnb, Vrbo and Booking.com.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Transparent pricing</h2>
<p className="text-slate-500">Scale your portfolio without breaking the bank.</p>
</div>

<div className="flex items-center gap-3 bg-white p-1 rounded-full border border-slate-200 shadow-sm">
<button className="px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-md transition-all">Monthly</button>
<button className="px-4 py-1.5 rounded-full text-slate-500 text-xs font-medium hover:text-slate-900 transition-colors">Yearly (-20%)</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-slate-300 transition-all hover:shadow-xl hover:shadow-slate-200/50 group relative">
<h3 className="text-lg font-semibold text-slate-900">Starter</h3>
<div className="my-4 flex items-baseline gap-1">
<span className="text-4xl font-bold text-slate-900 tracking-tight">$29</span>
<span className="text-sm text-slate-500">/mo</span>
</div>
<p className="text-sm text-slate-500 mb-8">Perfect for hosts with 1-5 units.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-indigo-600" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            5 Properties
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-indigo-600" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Standard AI
                        </li>
</ul>
<button className="w-full py-3 rounded-xl border border-slate-200 text-sm font-semibold hover:bg-slate-50 transition-colors">Start Trial</button>
</div>

<div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-2xl shadow-indigo-900/20 relative overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold">Pro</h3>
<span className="bg-indigo-500/20 text-indigo-300 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider border border-indigo-500/30">Popular</span>
</div>
<div className="my-4 flex items-baseline gap-1">
<span className="text-4xl font-bold tracking-tight">$79</span>
<span className="text-sm text-slate-400">/mo</span>
</div>
<p className="text-sm text-slate-400 mb-8">For serious managers growing fast.</p>
<ul className="space-y-4 mb-8 relative z-10">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-bold" width="18"></iconify-icon>
                            25 Properties
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-bold" width="18"></iconify-icon>
                            GPT-4o Advanced AI
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-bold" width="18"></iconify-icon>
                            All Channels (Airbnb/Vrbo)
                        </li>
</ul>
<button className="w-full py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 transition-all relative overflow-hidden group-hover:shadow-indigo-600/50">
                        Get Started
                    </button>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-slate-300 transition-all hover:shadow-xl hover:shadow-slate-200/50 group">
<h3 className="text-lg font-semibold text-slate-900">Enterprise</h3>
<div className="my-4 flex items-baseline gap-1">
<span className="text-4xl font-bold text-slate-900 tracking-tight">$199</span>
<span className="text-sm text-slate-500">/mo</span>
</div>
<p className="text-sm text-slate-500 mb-8">Unlimited scale for property groups.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-indigo-600" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Unlimited Properties
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-indigo-600" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Dedicated API Access
                        </li>
</ul>
<button className="w-full py-3 rounded-xl border border-slate-200 text-sm font-semibold hover:bg-slate-50 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<footer className="bg-white py-12 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 flex items-center justify-center bg-slate-900 rounded-lg text-white">
<iconify-icon icon="solar:chat-round-dots-bold" width="18"></iconify-icon>
</div>
<span className="text-sm font-bold text-slate-900">GuestReply</span>
</div>
<div className="text-xs text-slate-400">
                © 2024 GuestReply Inc. crafted with <iconify-icon className="inline text-red-400 align-middle" icon="solar:heart-bold" width="12"></iconify-icon> for hosts.
            </div>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-indigo-600 transition-colors" href="#">
<iconify-icon icon="brandico:twitter-bird" width="14"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-indigo-600 transition-colors" href="#">
<iconify-icon icon="brandico:linkedin" width="14"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
