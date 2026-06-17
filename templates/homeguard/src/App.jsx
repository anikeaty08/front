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



(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



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
      

<div className="fixed inset-0 pointer-events-none z-0 mx-auto max-w-[90rem] justify-between px-8 opacity-[0.08] hidden lg:flex">
<div className="w-px h-full bg-slate-100"></div>
<div className="w-px h-full bg-slate-100"></div>
<div className="w-px h-full bg-slate-100"></div>
<div className="w-px h-full bg-slate-100"></div>
</div>

<div className="w-full lg:max-w-7xl z-10 mx-auto relative lg:p-8 lg:space-y-6">

<header className="overflow-hidden min-h-[90vh] flex flex-col text-neutral-900 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 rounded-none lg:rounded-[2.5rem] relative">

<div className="absolute inset-0 z-0">

<div className="absolute inset-0 opacity-[0.15]" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="absolute inset-0 bg-gradient-to-t from-indigo-950/80 to-transparent"></div>

<div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-400/30 blur-[120px] rounded-full mix-blend-overlay"></div>
</div>

<nav className="flex z-20 border-white/10 border-b lg:border py-4 lg:py-6 px-4 lg:px-8 relative items-center justify-between [animation:animationIn_0.8s_ease-out_0s_both] animate-on-scroll animate">
<div className="flex items-center gap-2">
<div className="w-8 h-8 lg:w-9 lg:h-9 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/20">
<iconify-icon className="text-white" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<span className="text-lg lg:text-xl font-semibold tracking-tight font-sans text-white">HomeGuard</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm lg:text-base font-medium text-white/80">
<a className="hover:text-white transition-colors font-sans hover:bg-white/10 px-3 py-1 rounded-full" href="#how-it-works">Our Process</a>
<a className="hover:text-white transition-colors font-sans hover:bg-white/10 px-3 py-1 rounded-full" href="#comparison">Why Us</a>
<a className="hover:text-white transition-colors font-sans hover:bg-white/10 px-3 py-1 rounded-full" href="#results">Stories</a>
</div>

<div className="flex items-center gap-3 lg:gap-4">
<a className="bg-white text-blue-700 px-4 lg:px-5 py-2 rounded-full text-xs lg:text-sm font-semibold font-sans hover:bg-blue-50 transition-colors shadow-lg shadow-black/10 flex items-center gap-2" href="tel:5551234567">
<iconify-icon className="hidden sm:inline-block" icon="solar:phone-bold"></iconify-icon>
<span className="hidden sm:inline">Call Now: </span>(555) 123-4567
                    </a>

<button className="md:hidden text-white bg-white/10 p-2 rounded-full border border-white/10 flex items-center justify-center">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="flex-1 grid grid-cols-1 lg:grid-cols-2 z-20 pt-10 lg:pt-12 pb-20 lg:pb-24 px-4 lg:px-8 relative gap-y-12 lg:gap-x-12 items-center">

<div className="space-y-6 lg:space-y-8 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-white text-xs lg:text-sm font-medium [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll backdrop-blur-sm shadow-[0_0_20px_rgba(59,130,246,0.3)] animate">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
</span>
                        Urgent Assistance Available 24/7
                    </div>

<h1 className="text-4xl sm:text-5xl lg:text-7xl leading-[1.1] lg:leading-[1.05] tracking-tight font-dm-sans font-light text-white [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll drop-shadow-sm animate">
                        Stop foreclosure. 
                        <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-blue-200">Keep your home.</span>
</h1>

<p className="text-lg lg:text-xl text-blue-100/90 max-w-md mx-auto lg:mx-0 leading-relaxed font-sans [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll font-light animate">
                        Professional foreclosure defense to halt auctions and prevent personal bankruptcy. One flat rate of .
                    </p>

<div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll animate">
<button className="hover:bg-blue-50 transition-all hover:scale-[1.02] text-base font-medium text-blue-700 bg-white rounded-full px-8 py-4 shadow-xl shadow-blue-900/20 w-full sm:w-auto text-center">
                            Stop My Foreclosure
                        </button>
<button className="border border-white/20 hover:border-white/50 bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-full text-base font-medium transition-all flex items-center justify-center gap-2 font-sans w-full sm:w-auto">
                            How It Works <iconify-icon icon="solar:arrow-right-down-linear"></iconify-icon>
</button>
</div>

<div className="flex items-center justify-center lg:justify-start gap-4 text-white/70 text-sm font-sans pt-2 [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll animate">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border border-white/50 object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="User" className="w-8 h-8 rounded-full border border-white/50 object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="w-8 h-8 rounded-full bg-blue-500/50 backdrop-blur border border-white/50 flex items-center justify-center text-[10px] font-bold">+2k</div>
</div>
<span>Families protected this month</span>
</div>
</div>

<div className="min-h-[300px] lg:min-h-[500px] flex w-full relative items-center justify-center lg:justify-end [animation:animationIn_1.2s_ease-out_0.5s_both] animate-on-scroll perspective-[1000px]">

<div className="absolute top-[10%] left-[5%] lg:left-[10%] z-0 floating-card hidden sm:block">
<div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl flex items-center gap-3 shadow-2xl">
<div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
<iconify-icon className="text-white text-xl" icon="solar:check-read-bold"></iconify-icon>
</div>
<div>
<p className="text-xs text-white/60 font-sans">Status</p>
<p className="text-sm text-white font-medium font-sans">Auction Halted</p>
</div>
</div>
</div>

<div className="absolute bottom-[15%] right-[-5%] lg:right-[0%] z-30 floating-card-delayed hidden sm:block">
<div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl flex items-center gap-3 shadow-2xl">
<div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
<iconify-icon className="text-white text-xl" icon="solar:file-check-bold"></iconify-icon>
</div>
<div>
<p className="text-xs text-white/60 font-sans">Case File</p>
<p className="text-sm text-white font-medium font-sans">Documents Approved</p>
</div>
</div>
</div>

<div className="relative w-full lg:w-[90%] aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/40 border-4 border-white/10 bg-neutral-900 group cursor-pointer z-10 transform transition-transform hover:scale-[1.01] duration-500">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80')] bg-cover bg-center opacity-60 transition-opacity group-hover:opacity-40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
<iconify-icon className="text-white ml-1 lg:w-[32px]" icon="solar:play-bold" width="28"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6">
<div className="bg-black/40 backdrop-blur-md p-3 lg:p-4 rounded-xl border border-white/10">
<h3 className="lg:text-xl flex items-center gap-2 text-base font-medium text-white tracking-tight font-dm-sans">Stop foreclosure <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded text-white font-sans uppercase tracking-wider">Guide</span></h3>
<p className="text-white/70 text-xs lg:text-sm font-sans mt-1">Watch how we stop the auction in under 48 hours.</p>
</div>
</div>
</div>
</div>
</div>

<div className="relative z-20 bg-[#0f0f11]/30 backdrop-blur-lg py-4 lg:py-6 mt-auto border-t border-white/10">
<div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12 px-6 opacity-60 [animation:animationIn_0.8s_ease-out_0.8s_both] animate-on-scroll scale-90 lg:scale-100">
<span className="text-white font-sans text-xs lg:text-sm font-semibold tracking-widest uppercase hidden sm:block">As seen on</span>
<iconify-icon className="text-white" icon="simple-icons:fox" lg:width="32" width="24"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:nbc" lg:width="32" width="24"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:cnn" lg:width="32" width="24"></iconify-icon>
<span className="text-white font-dm-sans font-bold text-lg lg:text-xl">LegalZoom</span>
</div>
</div>
</header>

<section className="py-16 lg:py-24 px-4 lg:px-4" id="how-it-works">
<div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 space-y-4 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs lg:text-sm font-medium text-slate-400 font-sans">Our Process</span>
<h2 className="text-3xl lg:text-5xl text-white tracking-tight leading-tight font-dm-sans font-light">
                    From "Notice of Default" to <span className="text-blue-500">Notice of Rescission.</span>
</h2>
<p className="text-slate-400 font-sans text-sm lg:text-base px-4">We don't just send paperwork. We take you through a complete legal transformation.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 -translate-y-1/2 z-0"></div>

<div className="bg-[#1a1a1c] p-6 lg:p-8 rounded-2xl lg:rounded-[2rem] border border-white/5 text-slate-200 flex flex-col justify-between min-h-[300px] lg:min-h-[360px] relative z-10 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll hover:border-blue-500/30 transition-colors">
<div className="">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-900/20 text-blue-500 rounded-xl lg:rounded-2xl flex items-center justify-center font-dm-sans font-bold text-lg lg:text-xl border border-blue-500/20">1</div>
<iconify-icon className="text-slate-500" icon="solar:document-add-linear" lg:width="32" width="28"></iconify-icon>
</div>
<h3 className="text-xl lg:text-2xl mb-3 tracking-tight font-dm-sans text-white">Case Analysis</h3>
<p className="text-slate-400 leading-relaxed text-sm lg:text-base font-sans">You submit your documents. Within 24 hours, our team identifies the legal errors in your lender's filing.</p>
</div>
<div className="mt-8 pt-6 border-t border-white/5">
<span className="text-xs font-semibold uppercase tracking-wider text-blue-400">Your Action</span>
<p className="text-sm text-slate-500 mt-1">Upload Notice of Default</p>
</div>
</div>

<div className="bg-[#1a1a1c] p-6 lg:p-8 rounded-2xl lg:rounded-[2rem] border border-white/5 text-slate-200 flex flex-col justify-between min-h-[300px] lg:min-h-[360px] relative z-10 [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll hover:border-blue-500/30 transition-colors">
<div className="">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-900/20 text-blue-500 rounded-xl lg:rounded-2xl flex items-center justify-center font-dm-sans font-bold text-lg lg:text-xl border border-blue-500/20">2</div>
<iconify-icon className="text-slate-500" icon="solar:gavel-linear" lg:width="32" width="28"></iconify-icon>
</div>
<h3 className="text-xl lg:text-2xl mb-3 tracking-tight font-dm-sans text-white">Defense Filing</h3>
<p className="text-slate-400 leading-relaxed text-sm lg:text-base font-sans">We draft and file specific motions to halt the auction process, forcing the lender to prove standing.</p>
</div>
<div className="mt-8 pt-6 border-t border-white/5">
<span className="text-xs font-semibold uppercase tracking-wider text-blue-400">Our Action</span>
<p className="text-sm text-slate-500 mt-1">Legal Stay &amp; Audit</p>
</div>
</div>

<div className="bg-blue-600 p-6 lg:p-8 rounded-2xl lg:rounded-[2rem] text-white flex flex-col justify-between min-h-[300px] lg:min-h-[360px] relative z-10 [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll shadow-[0_0_50px_rgba(37,99,235,0.3)]">
<div className="">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 lg:w-12 lg:h-12 bg-white text-blue-600 rounded-xl lg:rounded-2xl flex items-center justify-center font-dm-sans font-bold text-lg lg:text-xl">3</div>
<iconify-icon className="text-blue-200" icon="solar:home-smile-linear" lg:width="32" width="28"></iconify-icon>
</div>
<h3 className="text-xl lg:text-2xl mb-3 tracking-tight font-dm-sans">Home Saved</h3>
<p className="text-blue-100 leading-relaxed text-sm lg:text-base font-sans">The foreclosure is paused or rescinded. You avoid bankruptcy and keep your equity intact.</p>
</div>
<div className="mt-8 pt-6 border-t border-white/20">
<span className="text-xs font-semibold uppercase tracking-wider text-white">Outcome</span>
<p className="text-sm text-blue-100 mt-1">Bankruptcy Avoided</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden min-h-[800px] flex rounded-none lg:rounded-[2.5rem] relative items-center bg-[#1a1a1c] border-y lg:border border-white/5">
<div className="z-10 px-4 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 w-full relative gap-x-16 pt-16 pb-16">

<div className="space-y-8 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div>
<span className="inline-block px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs lg:text-sm font-sans mb-4">Outcomes</span>
<h2 className="text-3xl lg:text-5xl text-white tracking-tight leading-[1.1] font-dm-sans font-light">
                            We don't sell paperwork.
                            We sell <span className="text-blue-500">stability.</span>
</h2>
<p className="text-slate-400 text-base lg:text-lg mt-4 font-sans leading-relaxed">
                            Most lawyers charge you for "hours." We charge for a specific result: keeping you in your home without destroying your credit.
                        </p>
</div>
<ul className="space-y-6 mt-8">
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0 mt-1">
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-base lg:text-lg font-dm-sans">Avoid Personal Bankruptcy</h4>
<p className="text-sm text-slate-500 font-sans mt-1">No Chapter 7 or 13 filings required. Protect your credit score from a 10-year stain.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0 mt-1">
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-base lg:text-lg font-dm-sans">Preserve Your Equity</h4>
<p className="text-sm text-slate-500 font-sans mt-1">Don't lose years of mortgage payments. We help you negotiate favorable modification terms.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0 mt-1">
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-base lg:text-lg font-dm-sans">Stop The Harassment</h4>
<p className="text-sm text-slate-500 font-sans mt-1">Once we file representation, lenders must talk to us, not you. Silence the phone calls.</p>
</div>
</li>
</ul>
</div>

<div className="bg-[#0f0f11] p-6 lg:p-10 rounded-2xl lg:rounded-[2rem] border border-white/5 [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<span className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-slate-400 text-xs lg:text-sm font-sans mb-6">Our Methodology</span>
<h3 className="text-2xl lg:text-3xl tracking-tight font-dm-sans text-white mb-6">Included in your $89 Defense</h3>
<div className="grid grid-cols-1 gap-3 lg:gap-4">
<div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-4 hover:bg-white/10 transition-colors">
<iconify-icon className="text-blue-500 shrink-0" icon="solar:magnifer-linear" width="24"></iconify-icon>
<span className="text-slate-300 font-sans text-sm lg:text-base">Full Mortgage Audit &amp; Error Detection</span>
</div>
<div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-4 hover:bg-white/10 transition-colors">
<iconify-icon className="text-blue-500 shrink-0" icon="solar:pen-new-square-linear" width="24"></iconify-icon>
<span className="text-slate-300 font-sans text-sm lg:text-base">QWR &amp; Debt Validation Filing</span>
</div>
<div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-4 hover:bg-white/10 transition-colors">
<iconify-icon className="text-blue-500 shrink-0" icon="solar:shield-warning-linear" width="24"></iconify-icon>
<span className="text-slate-300 font-sans text-sm lg:text-base">Emergency "Stop Sale" Motions</span>
</div>
<div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-4 hover:bg-white/10 transition-colors">
<iconify-icon className="text-blue-500 shrink-0" icon="solar:chat-round-call-linear" width="24"></iconify-icon>
<span className="text-slate-300 font-sans text-sm lg:text-base">Dedicated Case Manager Support</span>
</div>
</div>
<div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-center">
<div>
<p className="text-2xl lg:text-3xl font-dm-sans text-white tracking-tight">$89</p>
<p className="text-xs text-slate-500 font-sans">One-time flat fee.</p>
</div>
<button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 lg:px-6 lg:py-3 rounded-full text-sm font-medium transition-colors">
                            Start Defense
                        </button>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 px-4 lg:px-4" id="comparison">
<div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<h2 className="text-3xl lg:text-5xl text-white tracking-tight leading-tight mb-4 font-dm-sans font-light">
                    Why choose HomeGuard?
                </h2>
<p className="text-slate-400 font-sans text-sm lg:text-base">Compare our specialized service against traditional options.</p>
</div>
<div className="overflow-x-auto [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll -mx-4 lg:mx-0 px-4 lg:px-0">
<table className="w-full min-w-[800px] border-collapse">
<thead>
<tr className="text-left">
<th className="p-6 text-slate-500 font-medium font-sans w-1/4">Comparison</th>
<th className="p-6 bg-blue-600/10 border-t border-x border-blue-500/30 rounded-t-2xl text-blue-400 font-bold font-dm-sans text-xl w-1/4">HomeGuard</th>
<th className="p-6 text-white font-medium font-dm-sans w-1/4">Bankruptcy Lawyer</th>
<th className="p-6 text-white font-medium font-dm-sans w-1/4">Doing Nothing</th>
</tr>
</thead>
<tbody className="font-sans text-sm">

<tr className="border-b border-white/5">
<td className="p-6 text-slate-400">Cost</td>
<td className="p-6 bg-blue-600/10 border-x border-blue-500/30 text-white font-semibold">$89 Flat Fee</td>
<td className="p-6 text-slate-400">$3,000 - $5,000 Retainer</td>
<td className="p-6 text-slate-400">$0 (Upfront)</td>
</tr>

<tr className="border-b border-white/5">
<td className="p-6 text-slate-400">Credit Impact</td>
<td className="p-6 bg-blue-600/10 border-x border-blue-500/30 text-white font-semibold">Protected / Neutral</td>
<td className="p-6 text-slate-400">Ruined (Bankruptcy)</td>
<td className="p-6 text-slate-400">Foreclosure on Record</td>
</tr>

<tr className="border-b border-white/5">
<td className="p-6 text-slate-400">Home Equity</td>
<td className="p-6 bg-blue-600/10 border-x border-blue-500/30 text-white font-semibold">Preserved</td>
<td className="p-6 text-slate-400">Liquidation Risk</td>
<td className="p-6 text-slate-400">100% Loss</td>
</tr>

<tr className="border-b border-white/5">
<td className="p-6 text-slate-400">Time to Action</td>
<td className="p-6 bg-blue-600/10 border-x border-blue-500/30 text-white font-semibold">Immediate (24hrs)</td>
<td className="p-6 text-slate-400">Weeks (Consultations)</td>
<td className="p-6 text-slate-400">N/A</td>
</tr>

<tr>
<td className="p-6 text-slate-400">Outcome</td>
<td className="p-6 bg-blue-600/10 border-b border-x border-blue-500/30 rounded-b-2xl text-blue-400 font-semibold">Home Saved</td>
<td className="p-6 text-slate-400">Debt Discharged</td>
<td className="p-6 text-slate-400">Eviction</td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="p-6 lg:p-16 overflow-hidden bg-[#0f0f11] border-white/10 lg:border border-y border-x-0 lg:border-x rounded-none lg:rounded-[2.5rem] relative" id="results">
<div className="grid grid-cols-1 lg:grid-cols-2 z-10 relative gap-x-12 gap-y-12 items-center">
<div className="space-y-6 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<h2 className="text-3xl lg:text-6xl text-white tracking-tight leading-tight font-dm-sans font-light">
                        Real families, 
                        <span className="text-blue-500">real relief.</span>
</h2>
<p className="text-slate-400 text-base lg:text-lg leading-relaxed max-w-lg font-sans">
                        We've helped over 2,000 homeowners delay or completely stop the auction process. You are not alone in this fight.
                    </p>
<div className="bg-[#1a1a1c] p-6 rounded-2xl border border-white/5 mt-8">
<div className="flex gap-1 text-yellow-500 mb-3">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-white italic mb-4 font-sans text-sm lg:text-base">"I was 48 hours away from the auction. I thought I had to file bankruptcy. HomeGuard filed an emergency motion and the bank backed down immediately. Best $89 I ever spent."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold font-sans">SM</div>
<div>
<p className="text-white text-sm font-semibold font-sans">Sarah M.</p>
<p className="text-slate-500 text-xs font-sans">Saved home in Phoenix, AZ</p>
</div>
</div>
</div>
</div>

<div className="flex gap-2 lg:gap-4 lg:justify-end overflow-hidden h-[400px] lg:h-[500px] gap-x-2 lg:gap-x-4 gap-y-4 justify-center" style={{maskImage: 'linear-gradient(180deg, transparent, black 10%, black 100%, transparent)'}}>
<div className="flex flex-col -mt-12 gap-x-4 gap-y-4 [animation:animationIn_1.2s_ease-out_0.4s_both] animate-on-scroll">
<img alt="House" className="opacity-80 w-24 lg:w-32 h-48 lg:h-64 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"/>
<img alt="House" className="opacity-60 w-24 lg:w-32 h-48 lg:h-64 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"/>
</div>
<div className="flex flex-col gap-4 mt-8 gap-x-4 gap-y-4 [animation:animationIn_1.2s_ease-out_0.6s_both] animate-on-scroll">
<img alt="House Saved" className="w-24 lg:w-32 h-48 lg:h-64 object-cover rounded-2xl border-2 border-blue-500" src="https://images.unsplash.com/photo-1600596542815-e32870024f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"/>
<img alt="House" className="w-24 lg:w-32 h-48 lg:h-64 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"/>
</div>
<div className="flex flex-col -mt-4 gap-x-4 gap-y-4 [animation:animationIn_1.2s_ease-out_0.8s_both] animate-on-scroll">
<img alt="House" className="opacity-90 w-24 lg:w-32 h-48 lg:h-64 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"/>
<img alt="House" className="w-24 lg:w-32 h-48 lg:h-64 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"/>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 px-4 lg:px-4 max-w-4xl mx-auto" id="faq">
<div className="text-center mb-12 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<h2 className="text-3xl lg:text-4xl text-white tracking-tight font-dm-sans font-light">
                    Questions? We've got answers.
                </h2>
</div>
<div className="space-y-4 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">

<div className="bg-[#1a1a1c] border border-white/5 rounded-2xl p-6">
<h3 className="text-white font-medium font-dm-sans text-lg mb-2">My auction is tomorrow. Can you still help?</h3>
<p className="text-slate-400 font-sans text-sm leading-relaxed">Yes. We specialize in emergency filings. If you are more than 24 hours away from the auction time, we can typically file an emergency motion to stay the proceedings.</p>
</div>

<div className="bg-[#1a1a1c] border border-white/5 rounded-2xl p-6">
<h3 className="text-white font-medium font-dm-sans text-lg mb-2">Why is this only $89?</h3>
<p className="text-slate-400 font-sans text-sm leading-relaxed">We use a productized service model. We've automated the legal analysis and document generation based on federal lending laws. You pay for the specific defense package, not hourly retainer fees.</p>
</div>

<div className="bg-[#1a1a1c] border border-white/5 rounded-2xl p-6">
<h3 className="text-white font-medium font-dm-sans text-lg mb-2">Do I have to file for bankruptcy?</h3>
<p className="text-slate-400 font-sans text-sm leading-relaxed">No. Our entire goal is to prevent bankruptcy. We focus on attacking the foreclosure process itself (proving the lender lacks standing or paperwork errors), allowing you to keep your credit intact.</p>
</div>

<div className="bg-[#1a1a1c] border border-white/5 rounded-2xl p-6">
<h3 className="text-white font-medium font-dm-sans text-lg mb-2">Is this guaranteed?</h3>
<p className="text-slate-400 font-sans text-sm leading-relaxed">Legal outcomes can never be 100% guaranteed. However, we offer a satisfaction guarantee: if we cannot find valid legal grounds to contest your foreclosure after reviewing your case, we will refund your $89 fully.</p>
</div>
</div>
</section>

<section className="overflow-hidden min-h-[400px] lg:min-h-[500px] z-10 rounded-none lg:rounded-[2.5rem] mt-0 lg:mt-6 relative">
<div className="absolute inset-0">
<img alt="House Keys" className="w-full h-full object-cover grayscale opacity-20" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-black/80 to-black/50"></div>
</div>
<div className="z-10 p-6 lg:p-24 flex flex-col h-full pt-12 pb-12 relative justify-center text-center items-center">
<div className="max-w-2xl [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<h2 className="text-4xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 font-dm-sans font-light">
                        Don't let them take your home.
                    </h2>
<p className="text-white/90 text-lg lg:text-xl max-w-lg mx-auto mb-8 font-sans">
                        You have rights. Exercise them now for just $89 before it's too late.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="hover:bg-blue-500 transition-transform hover:scale-105 text-base lg:text-lg font-medium text-white bg-blue-600 rounded-full px-8 lg:px-10 py-4 lg:py-5 shadow-2xl shadow-blue-900/50">
                            Stop My Foreclosure Now
                        </button>
</div>
<p className="text-white/40 text-xs lg:text-sm mt-6 font-sans">Secure 256-bit encrypted checkout. 100% Confidential.</p>
</div>
</div>
</section>

<footer className="relative mt-24 lg:mt-24">
<div className="bg-gradient-to-b from-[#1a1a1c] to-[#0f0f11] rounded-none lg:rounded-t-[3rem] pt-16 lg:pt-24 pb-12 px-6 lg:px-16 border-t border-white/5">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
<div className="lg:col-span-2 space-y-6 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-blue-500" icon="solar:shield-check-linear" width="24"></iconify-icon>
<span className="text-lg font-semibold tracking-tight font-sans">HomeGuard</span>
</div>
<p className="text-slate-400 text-sm leading-relaxed max-w-sm font-sans">
                            HomeGuard provides affordable legal document assistance for homeowners facing foreclosure. We are a specialized legal service, not a law firm.
                        </p>
</div>
<div className="[animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<h4 className="text-white font-medium mb-4 lg:mb-6 text-sm font-sans">Service</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-blue-500 transition-colors font-sans" href="#">How It Works</a></li>
<li><a className="hover:text-blue-500 transition-colors font-sans" href="#">Pricing</a></li>
<li><a className="hover:text-blue-500 transition-colors font-sans" href="#">Success Stories</a></li>
</ul>
</div>
<div className="[animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<h4 className="text-white font-medium mb-4 lg:mb-6 text-sm font-sans">Support</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-blue-500 transition-colors font-sans" href="#">Contact Us</a></li>
<li><a className="hover:text-blue-500 transition-colors font-sans" href="#">Terms of Service</a></li>
<li><a className="hover:text-blue-500 transition-colors font-sans" href="#">Privacy Policy</a></li>
</ul>
</div>
<div className="[animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<h4 className="text-blue-500 font-medium mb-4 lg:mb-6 text-sm font-sans">Contact</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li className="flex items-center gap-2"><iconify-icon icon="solar:phone-linear"></iconify-icon> (555) 123-4567</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:letter-linear"></iconify-icon> help@homeguard.com</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:map-point-linear"></iconify-icon> San Francisco, CA</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll gap-4 text-center md:text-left">
<p className="font-sans">© 2024 HomeGuard Legal Services. All rights reserved.</p>
</div>
</div>
</footer>
</div>

    </>
  );
}
