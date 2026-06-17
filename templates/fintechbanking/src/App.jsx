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
      

<div className="fixed inset-0 pointer-events-none z-0">

<div className="absolute -top-20 -left-20 w-[60vw] h-[80vh] god-ray transform rotate-12 blur-3xl opacity-60"></div>
<div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
</div>

<header className="relative z-50 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg shadow-orange-500/20">
<i className="w-3.5 h-3.5 text-black fill-black" data-lucide="sparkles"></i>
</div>
<span className="text-xl font-medium tracking-tight text-white">Qapital</span>
</div>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/50">
<a className="hover:text-white transition-colors duration-300" href="#"><span className="text-white/20 mr-1 font-normal">01 /</span> How it works</a>
<a className="hover:text-white transition-colors duration-300" href="#"><span className="text-white/20 mr-1 font-normal">02 /</span> Pricing</a>
<a className="hover:text-white transition-colors duration-300" href="#"><span className="text-white/20 mr-1 font-normal">03 /</span> Career</a>
<a className="hover:text-white transition-colors duration-300" href="#"><span className="text-white/20 mr-1 font-normal">04 /</span> Blog</a>
</nav>

<div className="flex items-center gap-4">
<button className="hidden sm:block px-6 py-2.5 rounded-full text-sm font-medium bg-white/5 border border-white/5 hover:bg-white/10 transition-all text-white">
                Login
            </button>
<button className="px-6 py-2.5 rounded-full text-sm font-medium bg-gradient-to-b from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white shadow-lg shadow-orange-500/20 transition-all border-t border-white/20">
                Open Account
            </button>
</div>
</header>

<main className="relative z-10 flex flex-col items-center justify-center pt-16 pb-20 px-4">

<a className="group flex items-center gap-3 p-1 pr-4 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-all mb-10 backdrop-blur-sm" href="#">
<span className="px-3 py-1 rounded-full bg-[#5D5FEF]/20 text-[#8B8DFF] text-xs font-medium border border-[#5D5FEF]/20">Finance Program</span>
<span className="text-sm text-white/70 group-hover:text-white transition-colors flex items-center gap-1">
                Learn how it works <i className="w-3 h-3 ml-1 opacity-70" data-lucide="arrow-right"></i>
</span>
</a>

<div className="max-w-4xl mx-auto text-center mb-10">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] text-white">
                A <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">beautifully designed</span>, intuitive banking experience that <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">puts you in control</span>
</h1>
</div>

<div className="flex items-center gap-2 text-white/50 mb-16">
<div className="w-5 h-5 rounded flex items-center justify-center border border-white/10 bg-white/5">
<i className="w-3 h-3" data-lucide="layout-grid"></i>
</div>
<span className="text-sm font-medium">Our distinctive expertise</span>
</div>

<div className="relative w-full max-w-lg h-80 flex items-center justify-center mb-12 perspective-1000">

<div className="absolute top-1/2 left-1/4 w-32 h-32 bg-orange-500 rounded-full mix-blend-screen filter blur-[80px] opacity-40 animate-pulse"></div>
<div className="absolute bottom-0 right-1/4 w-40 h-40 bg-orange-600 rounded-full mix-blend-screen filter blur-[90px] opacity-30"></div>

<div className="hidden md:block absolute -left-20 bottom-0 w-64 h-40 glass-card rounded-2xl transform -rotate-6 scale-90 opacity-40 blur-[1px]">
<div className="p-6 h-full flex flex-col justify-between">
<i className="w-6 h-6 text-white/20 ml-auto transform rotate-90" data-lucide="rss"></i>
<div className="flex gap-2">
<div className="w-6 h-6 rounded-full border border-white/10"></div>
<div className="w-6 h-6 rounded-full border border-white/10 -ml-3"></div>
</div>
</div>
</div>

<div className="hidden md:block absolute -right-20 top-10 w-48 h-64 glass-card rounded-2xl transform rotate-3 scale-90 opacity-30 z-0">
<div className="p-6 h-full flex flex-col">
<div className="w-12 h-8 bg-white/5 rounded mb-4"></div>
<div className="mt-auto text-white/20 text-xs font-mono">DEBIT CARD</div>
<div className="flex justify-between mt-2 text-white/10 text-[10px]">
<span>Elia Sims</span>
<span>06/28</span>
</div>
</div>
</div>

<div className="relative z-20 w-[380px] h-[230px] bg-[#111] rounded-2xl shadow-2xl border-t-[6px] border-orange-500 flex flex-col justify-between p-6 transform hover:-translate-y-2 transition-transform duration-500 group overflow-hidden">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

<div className="flex justify-between items-start z-10">
<div className="w-12 h-9 bg-gradient-to-br from-yellow-200 to-yellow-500 rounded flex items-center justify-center opacity-90 overflow-hidden relative border border-white/10">
<div className="absolute inset-0 border border-black/20 rounded"></div>
<div className="w-full h-[1px] bg-black/30 absolute top-1/3"></div>
<div className="w-full h-[1px] bg-black/30 absolute bottom-1/3"></div>
<div className="h-full w-[1px] bg-black/30 absolute left-1/3"></div>
<div className="h-full w-[1px] bg-black/30 absolute right-1/3"></div>
</div>
<i className="w-7 h-7 text-white/30 transform rotate-90" data-lucide="rss"></i>
</div>

<div className="absolute inset-0 opacity-10 pointer-events-none">
<svg height="100%" width="100%">
<path d="M0 100 Q 150 50 380 150" fill="none" stroke="white" strokeWidth="1"></path>
<path d="M0 150 Q 200 80 380 200" fill="none" stroke="white" strokeWidth="1"></path>
</svg>
</div>

<div className="z-10 mt-auto">
<div className="text-white/40 text-xs font-medium tracking-widest uppercase mb-4">Debit Card</div>
<div className="flex items-end justify-between">
<div>
<div className="text-white text-sm font-medium tracking-wide mb-1">Guy Hawkins</div>
<div className="text-white/50 text-xs font-mono">12/25</div>
</div>
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-white/90 shadow-lg z-10"></div>
<div className="w-8 h-8 rounded-full bg-orange-500/90 shadow-lg -ml-3 z-20"></div>
</div>
</div>
</div>
</div>

<div className="absolute left-0 bottom-10 w-16 h-20 bg-gradient-to-br from-orange-400/80 to-amber-600/80 blur-md transform -rotate-12 opacity-60 z-30" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
<div className="absolute right-10 top-20 w-12 h-16 bg-gradient-to-bl from-orange-300/60 to-orange-600/60 blur-sm transform rotate-45 opacity-50 z-0" style={{clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)'}}></div>
</div>

<div className="flex flex-col sm:flex-row items-center gap-4 mt-8 relative z-20">
<button className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-base font-medium bg-gradient-to-b from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white shadow-lg shadow-orange-500/25 transition-all border-t border-white/20">
                Open Account
            </button>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-base font-medium bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all backdrop-blur-md">
                Download App
            </button>
</div>
</main>


    </>
  );
}
