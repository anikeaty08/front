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
      

<nav className="w-full px-6 py-5 flex items-center justify-between z-50">

<div className="flex items-center gap-1">
<span className="text-xl tracking-tighter font-semibold text-white">WISECOIN</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Exchange</a>
<a className="hover:text-white transition-colors" href="#">Business</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>

<div className="flex items-center gap-4">
<a className="text-sm font-medium hover:text-[#9FE870] transition-colors hidden sm:block" href="#">Log in</a>
<button className="bg-[#9FE870] hover:bg-[#8CD660] text-[#0E2924] px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105">
                Register
            </button>
<button className="md:hidden text-white text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<main className="flex-grow flex flex-col md:flex-row items-center justify-center px-6 py-12 md:py-0 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#9FE870] opacity-[0.03] rounded-full blur-[120px] pointer-events-none"></div>
<div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 z-10 text-center md:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-[#9FE870] animate-pulse"></span>
<span className="text-xs font-medium text-[#9FE870] tracking-wide uppercase">New Features Live</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1]">
                    The international <br className="hidden lg:block"/> account for <span className="text-[#9FE870]">crypto.</span>
</h1>
<p className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto md:mx-0 font-light leading-relaxed">
                    Hold, exchange, and spend crypto in 50+ currencies with the real exchange rate. No hidden fees, just money without borders.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-2">
<button className="w-full sm:w-auto bg-[#9FE870] hover:bg-[#8CD660] text-[#0E2924] px-8 py-4 rounded-full text-base font-medium transition-all duration-300 flex items-center justify-center gap-2 group">
                        Open an account
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-medium text-white border border-white/20 hover:bg-white/5 transition-all flex items-center justify-center gap-2">
<iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon>
                        How it works
                    </button>
</div>

<div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-[#0E2924] bg-gray-600 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80" src="https://i.pravatar.cc/100?img=33"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-[#0E2924] bg-gray-600 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80" src="https://i.pravatar.cc/100?img=47"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-[#0E2924] bg-gray-600 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80" src="https://i.pravatar.cc/100?img=12"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-[#0E2924] bg-[#2E4D44] flex items-center justify-center text-xs font-semibold text-white">
                            +12M
                        </div>
</div>
<div className="text-sm text-gray-400">
                        Trusted by over <span className="text-white font-medium">16 million</span> people.
                    </div>
</div>
</div>

<div className="relative h-[500px] flex items-center justify-center perspective-container z-0 md:mt-0 mt-10">
<div className="coin-container">
<div className="coin">
<div className="coin-side"></div>
<div className="coin-face coin-front">

<div className="absolute inset-4 rounded-full border border-[#9FE870]/20 flex items-center justify-center bg-gradient-to-tr from-[#153830] to-[#1f4d41]">
<div className="absolute inset-0 rounded-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
<iconify-icon className="coin-logo" icon="solar:wallet-money-linear"></iconify-icon>
</div>
</div>
<div className="coin-face coin-back"></div>
</div>
</div>


<div className="absolute top-10 right-0 md:-right-4 animate-[float_8s_ease-in-out_1s_infinite]">
<div className="card-blur p-4 rounded-2xl shadow-xl flex items-center gap-3 w-48 border-l-4 border-l-[#9FE870]">
<div className="w-10 h-10 rounded-full bg-[#9FE870]/20 flex items-center justify-center text-[#9FE870]">
<iconify-icon icon="solar:round-transfer-diagonal-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-gray-400">Exchange Rate</div>
<div className="text-sm font-semibold text-white">1 BTC = $42k</div>
</div>
</div>
</div>

<div className="absolute bottom-10 left-0 md:-left-8 animate-[float_7s_ease-in-out_2s_infinite]">
<div className="card-blur p-4 rounded-2xl shadow-xl w-56">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-gray-400">Transfer sent</span>
<iconify-icon className="text-[#9FE870]" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300">
<span className="text-xs font-bold">JD</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-white">John Doe</span>
<span className="text-xs text-gray-400">0.025 ETH</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/5 py-6 mt-auto">
<div className="container mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-4 text-xs text-gray-500">
<p>© 2023 Wisecoin Ltd. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Use</a>
<div className="flex items-center gap-1 text-[#9FE870]">
<span className="w-1.5 h-1.5 rounded-full bg-[#9FE870]"></span>
                    System Operational
                </div>
</div>
</div>
</footer>

    </>
  );
}
