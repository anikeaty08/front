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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-sm font-medium tracking-tighter uppercase text-slate-900" href="#">
                1Finance
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Books</a>
<a className="hover:text-slate-900 transition-colors" href="#">Authors</a>
<a className="hover:text-slate-900 transition-colors" href="#">Journal</a>
</div>
<a className="text-sm font-medium text-slate-900 hover:text-slate-500 transition-colors" href="#">
                Cart (0)
            </a>
</div>
</nav>

<section className="relative pt-40 pb-32 md:pt-56 md:pb-40 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
<div className="max-w-4xl mx-auto px-6 text-center z-10">
<h1 className="font-editorial text-5xl md:text-7xl lg:text-8xl tracking-tight font-medium text-slate-900 leading-[1.05] mb-8 animate-fade-up opacity-0">
                Understand Finance.<br/>
<span className="text-slate-400">Gateway to Freedom.</span>
</h1>
<p className="max-w-2xl mx-auto text-lg md:text-xl font-light text-slate-600 leading-relaxed mb-12 animate-fade-up delay-100 opacity-0">
                Explore timeless ideas, practical frameworks, and real-world insights that help individuals understand money, markets, and decision-making. Our books simplify finance and empower better financial choices.
            </p>
<div className="animate-fade-up delay-200 opacity-0">
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors" href="#books">
                    Explore the Books
                </a>
</div>
</div>

<div className="w-full mt-24 md:mt-32 flex justify-center items-center gap-4 md:gap-8 px-6 perspective-1000">
<div className="w-24 md:w-40 aspect-[2/3] transform -rotate-6 translate-y-4 shadow-xl rounded-sm overflow-hidden opacity-60">
<img alt="Book Cover Preview" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="w-32 md:w-56 aspect-[2/3] z-10 shadow-2xl rounded-sm overflow-hidden scale-105">
<img alt="Book Cover Preview" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="w-24 md:w-40 aspect-[2/3] transform rotate-6 translate-y-4 shadow-xl rounded-sm overflow-hidden opacity-60">
<img alt="Book Cover Preview" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
</div>
</section>

<section className="bg-[#0B1015] text-white py-32 md:py-48 px-6" id="books">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

<div className="lg:col-span-5 lg:sticky lg:top-32 relative group cursor-pointer">
<div className="w-full aspect-[2/3] rounded-sm overflow-hidden cover-shadow-light transition-transform duration-700 ease-out group-hover:-translate-y-2">
<img alt="Markets Decoded Cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>

<div className="lg:col-span-7 flex flex-col pt-8 lg:pt-0">

<h2 className="font-editorial text-5xl md:text-7xl tracking-tight font-medium mb-8 leading-[1.1]">Markets Decoded</h2>
<p className="text-xl md:text-2xl font-light text-slate-400 leading-relaxed mb-12">
                    A masterclass in understanding market cycles, behavioral economics, and the invisible forces that drive global finance. This book strips away the noise to reveal how capital truly flows.
                </p>

<div className="flex flex-wrap gap-4 mb-16">
<a className="px-8 py-4 bg-white text-slate-900 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors" href="#">
                        Buy from Publisher
                    </a>
<a className="px-8 py-4 border border-slate-700 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-colors" href="#">
                        Amazon
                    </a>
<a className="px-8 py-4 border border-slate-700 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-colors" href="#">
                        Flipkart
                    </a>
</div>

<div className="flex items-center gap-6 mb-24 pb-12 border-b border-slate-800">
<span className="text-xs font-medium uppercase tracking-widest text-slate-500">Share</span>
<button aria-label="Copy Link" className="text-slate-400 hover:text-white transition-colors">
<iconify-icon icon="solar:link-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button aria-label="Share on X" className="text-slate-400 hover:text-white transition-colors">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button aria-label="Share on LinkedIn" className="text-slate-400 hover:text-white transition-colors">
<iconify-icon icon="solar:users-group-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
</div>

<div className="mb-20">
<div className="flex flex-col md:flex-row gap-6 items-start mb-8">
<img alt="Author" className="w-20 h-20 rounded-full object-cover grayscale opacity-90" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div>
<h3 className="font-editorial text-3xl tracking-tight font-medium mb-3">David Chen</h3>
<p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                                Quantitative analyst and economic historian dedicated to making complex market mechanisms accessible to the everyday investor.
                            </p>
</div>
</div>
<div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
<h4 className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-4">Why David Wrote This Book</h4>
<p className="text-slate-300 font-light italic text-lg leading-relaxed">
                            "I spent a decade building models for hedge funds, only to realize the fundamental truths of investing are hidden in plain sight, obscured by jargon. I wrote this to level the playing field."
                        </p>
</div>
</div>

<div>
<h4 className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-8">What Readers Are Saying</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
<div className="flex flex-col gap-4">
<p className="text-slate-300 font-light text-lg leading-relaxed">"This book simplifies finance in a way few others do. An absolute revelation for my portfolio."</p>
<p className="text-sm font-medium text-slate-500">— Financial Times Review</p>
</div>
<div className="flex flex-col gap-4">
<p className="text-slate-300 font-light text-lg leading-relaxed">"Mandatory reading for anyone starting their financial journey. Clear, concise, and deeply profound."</p>
<p className="text-sm font-medium text-slate-500">— Sarah J., Analyst</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F2EFEA] text-slate-900 py-32 md:py-48 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

<div className="lg:col-span-5 lg:sticky lg:top-32 relative group cursor-pointer">
<div className="w-full aspect-[2/3] rounded-sm overflow-hidden cover-shadow transition-transform duration-700 ease-out group-hover:-translate-y-2 bg-white">
<img alt="Foundations of Value Cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>

<div className="lg:col-span-7 flex flex-col pt-8 lg:pt-0">
<h2 className="font-editorial text-5xl md:text-7xl tracking-tight font-medium mb-8 leading-[1.1]">Foundations of Value</h2>
<p className="text-xl md:text-2xl font-light text-slate-600 leading-relaxed mb-12">
                    A philosophical yet deeply practical exploration of what gives assets worth. This text bridges the gap between classic value investing and modern digital economies.
                </p>

<div className="flex flex-wrap gap-4 mb-16">
<a className="px-8 py-4 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-colors" href="#">
                        Buy from Publisher
                    </a>
<a className="px-8 py-4 border border-slate-300 text-slate-700 rounded-full text-sm font-medium hover:bg-white hover:border-white transition-colors" href="#">
                        Amazon
                    </a>
<a className="px-8 py-4 border border-slate-300 text-slate-700 rounded-full text-sm font-medium hover:bg-white hover:border-white transition-colors" href="#">
                        Flipkart
                    </a>
</div>

<div className="flex items-center gap-6 mb-24 pb-12 border-b border-slate-300/50">
<span className="text-xs font-medium uppercase tracking-widest text-slate-400">Share</span>
<button aria-label="Copy Link" className="text-slate-500 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:link-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button aria-label="Share on X" className="text-slate-500 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button aria-label="Share on LinkedIn" className="text-slate-500 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:users-group-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
</div>

<div className="mb-20">
<div className="flex flex-col md:flex-row gap-6 items-start mb-8">
<img alt="Author" className="w-20 h-20 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div>
<h3 className="font-editorial text-3xl tracking-tight font-medium mb-3">Elena Rostova</h3>
<p className="text-slate-600 text-lg leading-relaxed max-w-lg">
                                Professor of Behavioral Finance helping readers navigate the emotional pitfalls of wealth management.
                            </p>
</div>
</div>
<div className="bg-white/40 p-8 rounded-2xl border border-white/60">
<h4 className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-4">Why Elena Wrote This Book</h4>
<p className="text-slate-700 font-light italic text-lg leading-relaxed">
                            "Value is subjective, but the math behind protecting it is absolute. I wanted to create a manual that respects the reader's intelligence while guiding their intuition."
                        </p>
</div>
</div>

<div>
<h4 className="text-xs font-medium uppercase tracking-widest text-slate-400 mb-8">What Readers Are Saying</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
<div className="flex flex-col gap-4">
<p className="text-slate-700 font-light text-lg leading-relaxed">"The most beautifully articulated defense of long-term thinking I've read in a decade."</p>
<p className="text-sm font-medium text-slate-500">— WSJ Review</p>
</div>
<div className="flex flex-col gap-4">
<p className="text-slate-700 font-light text-lg leading-relaxed">"Elena frames wealth not as an end, but as a discipline. Profoundly shifting."</p>
<p className="text-sm font-medium text-slate-500">— Marcus V., Investor</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#1C2C23] text-white py-32 md:py-48 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

<div className="lg:col-span-5 lg:sticky lg:top-32 relative group cursor-pointer">
<div className="w-full aspect-[2/3] rounded-sm overflow-hidden cover-shadow-light transition-transform duration-700 ease-out group-hover:-translate-y-2">
<img alt="Psychology of Wealth Cover" className="w-full h-full object-cover saturate-50" src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>

<div className="lg:col-span-7 flex flex-col pt-8 lg:pt-0">
<h2 className="font-editorial text-5xl md:text-7xl tracking-tight font-medium mb-8 leading-[1.1]">The Psychology of Wealth</h2>
<p className="text-xl md:text-2xl font-light text-[#9CAEA4] leading-relaxed mb-12">
                    This book unpacks the mental models necessary for long-term wealth creation, stripping away the anxiety of daily fluctuations to focus on compound growth and personal discipline.
                </p>

<div className="flex flex-wrap gap-4 mb-16">
<a className="px-8 py-4 bg-[#D1E0D7] text-[#132019] rounded-full text-sm font-medium hover:bg-white transition-colors" href="#">
                        Buy from Publisher
                    </a>
<a className="px-8 py-4 border border-[#445A4D] text-[#D1E0D7] rounded-full text-sm font-medium hover:bg-[#253A2D] transition-colors" href="#">
                        Amazon
                    </a>
<a className="px-8 py-4 border border-[#445A4D] text-[#D1E0D7] rounded-full text-sm font-medium hover:bg-[#253A2D] transition-colors" href="#">
                        Flipkart
                    </a>
</div>

<div className="flex items-center gap-6 mb-24 pb-12 border-b border-[#31483A]">
<span className="text-xs font-medium uppercase tracking-widest text-[#728A7D]">Share</span>
<button aria-label="Copy Link" className="text-[#9CAEA4] hover:text-white transition-colors">
<iconify-icon icon="solar:link-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button aria-label="Share on X" className="text-[#9CAEA4] hover:text-white transition-colors">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button aria-label="Share on LinkedIn" className="text-[#9CAEA4] hover:text-white transition-colors">
<iconify-icon icon="solar:users-group-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
</div>

<div className="mb-20">
<div className="flex flex-col md:flex-row gap-6 items-start mb-8">
<img alt="Author" className="w-20 h-20 rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div>
<h3 className="font-editorial text-3xl tracking-tight font-medium mb-3">Alex Mercer</h3>
<p className="text-[#9CAEA4] text-lg leading-relaxed max-w-lg">
                                Financial advisor and educator helping individuals make smarter long-term decisions about wealth, time, and money.
                            </p>
</div>
</div>
<div className="bg-[#132019]/60 p-8 rounded-2xl border border-[#253A2D]">
<h4 className="text-xs font-medium uppercase tracking-widest text-[#728A7D] mb-4">Why Alex Wrote This Book</h4>
<p className="text-[#D1E0D7] font-light italic text-lg leading-relaxed">
                            "Most finance books teach you what to buy. I wrote this to teach you how to behave. The gap between knowledge and action is entirely psychological."
                        </p>
</div>
</div>

<div>
<h4 className="text-xs font-medium uppercase tracking-widest text-[#728A7D] mb-8">What Readers Are Saying</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
<div className="flex flex-col gap-4">
<p className="text-[#D1E0D7] font-light text-lg leading-relaxed">"A quiet masterpiece. It changed my relationship with money completely."</p>
<p className="text-sm font-medium text-[#9CAEA4]">— The Economic Review</p>
</div>
<div className="flex flex-col gap-4">
<p className="text-[#D1E0D7] font-light text-lg leading-relaxed">"Alex writes with the clarity of a practitioner and the empathy of a therapist."</p>
<p className="text-sm font-medium text-[#9CAEA4]">— Jason L., Founder</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-16 px-6 border-t border-slate-800 text-sm">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-white font-medium tracking-tighter uppercase">
                1Finance
            </div>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
</div>
<div>
                © 2023 1 Finance Publishing. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
