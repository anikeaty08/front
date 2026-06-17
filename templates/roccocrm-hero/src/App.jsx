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
      

<div className="hidden md:flex justify-between items-center px-6 py-2 border-b border-slate-100 bg-slate-50/50 text-xs font-medium text-slate-500">
<div className="flex items-center gap-3">
<span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
</span>
                v2.4 Live
            </span>
<span>New feature: <span className="text-slate-900 font-semibold">Real-time voice sentiment analysis</span> is now available.</span>
</div>
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5">
<i className="w-3 h-3" data-lucide="users"></i>
                1,240+ online
            </span>
<a className="flex items-center gap-1 hover:text-blue-600 transition-colors" href="#">
                Join Community <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
<i className="w-5 h-5 fill-current" data-lucide="zap"></i>
</div>
<span className="text-xl font-semibold text-slate-900 tracking-tight">Superproxy</span>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 flex items-center gap-1" href="#">Products <i className="w-3 h-3 opacity-50" data-lucide="chevron-down"></i></a>
<a className="hover:text-slate-900 flex items-center gap-1" href="#">Solutions <i className="w-3 h-3 opacity-50" data-lucide="chevron-down"></i></a>
<a className="hover:text-slate-900" href="#">Enterprise</a>
<a className="hover:text-slate-900 flex items-center gap-1" href="#">Resources <i className="w-3 h-3 opacity-50" data-lucide="chevron-down"></i></a>
<a className="hover:text-slate-900" href="#">Pricing</a>
</div>

<div className="flex items-center gap-4">
<button className="p-2 text-slate-500 hover:text-slate-900 transition-colors">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
<a className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Contact Sales</a>
<a className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Log in</a>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5" href="#">
                    Get Started
                </a>
</div>
</div>
</nav>

<main className="relative pt-16 pb-32 overflow-hidden">

<div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-[800px] h-[800px] bg-blue-50/80 rounded-full blur-3xl opacity-50 -z-10 pointer-events-none"></div>
<div className="absolute top-40 left-0 -translate-x-1/4 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-3xl opacity-50 -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col items-start max-w-2xl relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 mb-8 hover:border-blue-200 hover:text-blue-600 transition-colors cursor-default">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    Smart AI CRM Workspace
                </div>

<h1 className="text-6xl md:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                    The only CRM <br/>
<span className="text-slate-400">you need</span><span className="text-blue-600">.</span>
</h1>

<p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-lg">
                    Built for founders, operators and sales teams. Pipelines, Branded Quotes, Record and Present, Send and track events automatically.
                </p>

<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
<a className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white text-base font-medium px-8 py-3.5 rounded-full hover:bg-slate-800 hover:scale-105 transition-all shadow-xl shadow-slate-900/10" href="#">
                        Start 14-day trial <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<button className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 text-base font-medium px-8 py-3.5 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
<i className="w-4 h-4" data-lucide="play-circle"></i> View Demo
                    </button>
</div>

<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white ring-1 ring-slate-100 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&amp;h=64&amp;fit=crop&amp;crop=faces"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white ring-1 ring-slate-100 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&amp;h=64&amp;fit=crop&amp;crop=faces"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white ring-1 ring-slate-100 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&amp;h=64&amp;fit=crop&amp;crop=faces"/>
</div>
<div className="text-sm text-slate-500 font-medium">
                        Trusted by 2,000+ teams worldwide
                    </div>
</div>
</div>

<div className="relative h-[600px] flex items-center justify-center lg:translate-x-10 w-full perspective-[2000px]">

<div className="absolute inset-0 flex items-center justify-center z-0">
<div className="w-[500px] h-[500px] border border-blue-100 rounded-full opacity-60"></div>
<div className="absolute w-[400px] h-[400px] border border-blue-200 rounded-full opacity-40"></div>
<div className="absolute w-[600px] h-[600px] border border-dashed border-slate-100 rounded-full opacity-50 animate-[spin_60s_linear_infinite]"></div>
</div>

<div className="relative w-80 h-80 rounded-full z-10 p-2 bg-white/30 backdrop-blur-sm border border-white/50 shadow-2xl">
<div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-inner">
<img alt="Sales Rep" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&amp;q=80"/>

<div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full flex items-center gap-2 text-xs font-medium tracking-wide">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            REC 04:12
                        </div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-end gap-1 h-6">
<div className="w-1 bg-white/90 rounded-full animate-[pulse_1s_ease-in-out_infinite]" style={{height: '40%'}}></div>
<div className="w-1 bg-white/90 rounded-full animate-[pulse_1.2s_ease-in-out_infinite]" style={{height: '70%'}}></div>
<div className="w-1 bg-white/90 rounded-full animate-[pulse_0.8s_ease-in-out_infinite]" style={{height: '100%'}}></div>
<div className="w-1 bg-white/90 rounded-full animate-[pulse_1.1s_ease-in-out_infinite]" style={{height: '60%'}}></div>
<div className="w-1 bg-white/90 rounded-full animate-[pulse_0.9s_ease-in-out_infinite]" style={{height: '30%'}}></div>
</div>
</div>
</div>

<div className="absolute top-10 left-0 lg:-left-12 bg-white rounded-2xl p-4 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 w-72 animate-float z-20 hover:scale-105 transition-transform duration-300">
<div className="flex gap-3">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
<i className="w-5 h-5" data-lucide="bell"></i>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Client viewed your 'WM Project' quote 3x</h3>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">AI recommends following up immediately.</p>
<div className="flex gap-2 mt-3">
<button className="bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-slate-800">View Quote</button>
<button className="text-slate-500 text-xs font-medium px-3 py-1.5 hover:bg-slate-50 rounded-lg">Dismiss</button>
</div>
</div>
</div>

<div className="absolute -right-16 top-1/2 w-16 h-[1px] bg-gradient-to-r from-blue-200 to-transparent hidden lg:block"></div>
</div>

<div className="absolute bottom-10 left-0 lg:-left-4 bg-white rounded-2xl p-5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 w-64 animate-float-delayed z-20 hover:scale-105 transition-transform duration-300">
<div className="flex justify-between items-center mb-3">
<span className="text-xs font-semibold text-slate-900 flex items-center gap-2">
                             AI Assistant
                        </span>
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
</div>
<div className="space-y-3">
<div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100">
<div className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><i className="w-2.5 h-2.5" data-lucide="check"></i></div>
                            Call Transcribed
                        </div>
<div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100">
<div className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><i className="w-2.5 h-2.5" data-lucide="check"></i></div>
                            CRM Updated
                        </div>
<div className="flex items-center gap-2 text-xs text-slate-400 p-2">
<i className="w-3 h-3 animate-spin text-blue-500" data-lucide="loader-2"></i>
                            Drafting Email...
                        </div>
</div>
</div>

<div className="absolute top-1/2 -translate-y-1/2 right-0 lg:-right-16 bg-white rounded-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-slate-100 w-72 overflow-hidden z-20 animate-float rotate-1 hover:rotate-0 transition-transform duration-500">
<div className="p-5 border-b border-slate-50">
<div className="flex justify-between items-end mb-4">
<div className="text-[10px] text-slate-400 font-mono tracking-wider">QUOTE #4402</div>
<div className="text-base font-serif tracking-widest text-slate-800">ROCCO</div>
</div>
<div className="mb-4">
<div className="text-[10px] font-semibold text-slate-900 uppercase tracking-wide mb-1">Ergonomic Office Chair</div>
<div className="grid grid-cols-2 gap-2">
<div>
<div className="text-[10px] font-medium text-slate-900">Churasco Inc</div>
<div className="text-[9px] text-slate-400 leading-tight">Pasig, NCR, 1605</div>
</div>
<div className="text-right">
<div className="text-[9px] text-slate-400">Ref: 1864a453...</div>
<div className="text-[9px] text-slate-400">Date: Dec 10, 2025</div>
</div>
</div>
</div>

<div className="bg-slate-50 rounded-lg p-3 space-y-2 mb-3">
<div className="flex justify-between text-[10px] font-medium text-slate-900 border-b border-slate-200 pb-1">
<span>Item</span>
<span>Total</span>
</div>
<div className="flex justify-between items-center">
<div className="flex gap-2 items-center">
<div className="w-6 h-6 bg-white border border-slate-200 rounded flex items-center justify-center">
<i className="w-3 h-3 text-slate-400" data-lucide="armchair"></i>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-medium text-slate-700">Enzogram II</span>
<span className="text-[8px] text-slate-400">High back, Mesh</span>
</div>
</div>
<span className="text-[10px] font-semibold text-slate-900">₱1.0M</span>
</div>
</div>

<div className="space-y-1 border-t border-slate-100 pt-2">
<div className="flex justify-between text-[9px] text-slate-500">
<span>Subtotal</span>
<span>₱1,000,000.00</span>
</div>
<div className="flex justify-between text-[9px] text-green-600 font-medium">
<span>10% Discount</span>
<span>-₱100,000.00</span>
</div>
<div className="flex justify-between text-[10px] font-bold text-slate-900 pt-1">
<span>Total</span>
<span>₱900,000.00</span>
</div>
</div>
</div>
<div className="bg-slate-50 px-5 py-2 text-[9px] text-slate-400 text-center border-t border-slate-100">
                        Powered by Superproxy AI
                    </div>
</div>
</div>
</div>
</main>


    </>
  );
}
