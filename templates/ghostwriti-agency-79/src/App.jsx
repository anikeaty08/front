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
      

<div className="fixed inset-0 bg-noise z-50 mix-blend-overlay pointer-events-none"></div>
<div className="fixed top-0 left-1/4 w-96 h-96 bg-violet-900/20 rounded-full blur-[128px] pointer-events-none"></div>
<div className="fixed bottom-0 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[128px] pointer-events-none"></div>

<header className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 backdrop-blur-xl bg-[#0B0E13]/80 supports-[backdrop-filter]:bg-[#0B0E13]/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center text-white">
<span className="font-semibold text-lg tracking-tighter">E</span>
</div>
<span className="text-white font-medium tracking-tight text-sm group-hover:opacity-80 transition-opacity">EbookWriterAgency</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#process">Process</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#work">Work</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#pricing">Pricing</a>
</nav>

<a className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-white transition-all hover:scale-105 group" href="#contact">
                Start Your Book
                <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
</span>
                    Accepting New Authors for Q4
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white leading-[1.1]">
                    Turn Your Ideas Into <br/>
<span className="text-gradient drop-shadow-2xl">Powerful Books.</span>
</h1>
<p className="text-lg text-slate-400 max-w-xl font-light leading-relaxed">
                    We are the ghostwriting and publishing agency for thought leaders. From concept to bestseller status, we handle the words so you can own the authority.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="px-8 py-4 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium text-sm hover:opacity-90 transition-opacity text-center shadow-lg shadow-violet-900/20" href="#start">
                        Get Started
                    </a>
<a className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 transition-colors text-center backdrop-blur-sm" href="#services">
                        View Services
                    </a>
</div>
<div className="flex items-center gap-4 pt-8 border-t border-white/5">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-[#0B0E13] overflow-hidden flex items-center justify-center text-xs text-white">IM</div>
<div className="w-10 h-10 rounded-full bg-slate-700 border-2 border-[#0B0E13] overflow-hidden flex items-center justify-center text-xs text-white">JD</div>
<div className="w-10 h-10 rounded-full bg-slate-600 border-2 border-[#0B0E13] overflow-hidden flex items-center justify-center text-xs text-white">AL</div>
</div>
<p className="text-xs text-slate-500">Trusted by 500+ Authors</p>
</div>
</div>

<div className="relative h-[500px] w-full hidden lg:block perspective-1000">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-gradient-to-br from-slate-800 to-black border border-white/10 rounded-r-2xl rounded-l-sm shadow-2xl animate-float z-20 transform rotate-y-12 rotate-z-6">
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-r-2xl"></div>
<div className="absolute top-8 left-8 right-8 bottom-8 border border-white/5 rounded-r-lg flex flex-col justify-between p-6">
<div className="h-2 w-12 bg-white/20 rounded-full"></div>
<div className="space-y-2">
<div className="h-2 w-full bg-white/10 rounded-full"></div>
<div className="h-2 w-2/3 bg-white/10 rounded-full"></div>
</div>
</div>
</div>

<div className="absolute top-20 right-20 w-40 h-24 glass-card rounded-lg flex items-center gap-3 p-4 animate-float-delayed z-30">
<div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400">Sales</div>
<div className="text-sm text-white font-medium">+124%</div>
</div>
</div>
<div className="absolute bottom-20 left-10 w-48 h-16 glass-card rounded-lg flex items-center gap-3 p-4 animate-float z-10">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:pen-new-square-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400">Status</div>
<div className="text-xs text-white font-medium">Published</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0E13] to-transparent z-10"></div>
</section>

<section className="py-20 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center space-y-2">
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight">250<span className="text-violet-500">+</span></div>
<div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Books Written</div>
</div>
<div className="text-center space-y-2">
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight">98<span className="text-blue-500">%</span></div>
<div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Success Rate</div>
</div>
<div className="text-center space-y-2">
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight">10<span className="text-cyan-500">+</span></div>
<div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Years Active</div>
</div>
<div className="text-center space-y-2">
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight">50<span className="text-emerald-500">M+</span></div>
<div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Words Published</div>
</div>
</div>
</section>

<section className="py-32 relative">
<div className="glow-point top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 opacity-30"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Why Top CEOs Choose Us</h2>
<p className="text-slate-400 font-light">We don't just write books; we engineer assets that build your legacy and authority.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl group">
<div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:medal-star-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Premium Quality</h3>
<p className="text-sm text-slate-400 leading-relaxed">Our writers are industry veterans, not AI or low-tier freelancers. We deliver publishing-house quality.</p>
</div>

<div className="glass-card p-8 rounded-2xl group">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">100% Ownership</h3>
<p className="text-sm text-slate-400 leading-relaxed">You keep full intellectual property rights and royalties. We are the ghost in the machine.</p>
</div>

<div className="glass-card p-8 rounded-2xl group">
<div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Speed to Market</h3>
<p className="text-sm text-slate-400 leading-relaxed">Our streamlined process gets your book from idea to Amazon shelves in as little as 3 months.</p>
</div>

<div className="glass-card p-8 rounded-2xl group">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:user-speak-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Your Voice, Amplified</h3>
<p className="text-sm text-slate-400 leading-relaxed">We capture your tone, style, and personality so perfectly that even your family won't know you didn't write it.</p>
</div>

<div className="glass-card p-8 rounded-2xl group">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:lock-password-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Total Confidentiality</h3>
<p className="text-sm text-slate-400 leading-relaxed">Strict NDAs tailored to your needs. Your secret is safe with us, forever.</p>
</div>

<div className="glass-card p-8 rounded-2xl group flex flex-col justify-center items-center text-center bg-gradient-to-br from-violet-900/10 to-blue-900/10">
<h3 className="text-lg font-medium text-white mb-2">Ready to start?</h3>
<p className="text-sm text-slate-400 mb-6">Join the ranks of published authorities.</p>
<a className="px-6 py-2 rounded-full bg-white text-black font-medium text-xs hover:bg-slate-200 transition-colors" href="#contact">Book Consultation</a>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#0F1117] relative overflow-hidden" id="services">
<div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Expert Services</h2>
<p className="text-slate-400 font-light max-w-md">Comprehensive publishing solutions designed for maximum impact.</p>
</div>
<a className="text-sm text-violet-400 hover:text-violet-300 flex items-center gap-1 transition-colors" href="#">
                    View all services <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="group relative bg-[#0B0E13] border border-white/5 rounded-3xl p-1 overflow-hidden hover:border-violet-500/30 transition-colors duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative h-full bg-[#0B0E13] rounded-[20px] p-8 flex flex-col">
<div className="w-14 h-14 rounded-2xl bg-[#13161C] border border-white/5 flex items-center justify-center text-violet-400 mb-8 group-hover:scale-105 group-hover:bg-violet-500/10 transition-all duration-300">
<iconify-icon icon="solar:keyboard-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-4">Ghostwriting</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-8 flex-grow">
                            From detailed outlines to the final manuscript. We interview you, capture your ideas, and craft a compelling narrative that engages readers.
                        </p>
<div className="flex items-center gap-2 text-xs font-medium text-white/40 group-hover:text-violet-400 transition-colors">
<span>Learn More</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group relative bg-[#0B0E13] border border-white/5 rounded-3xl p-1 overflow-hidden hover:border-blue-500/30 transition-colors duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative h-full bg-[#0B0E13] rounded-[20px] p-8 flex flex-col">
<div className="w-14 h-14 rounded-2xl bg-[#13161C] border border-white/5 flex items-center justify-center text-blue-400 mb-8 group-hover:scale-105 group-hover:bg-blue-500/10 transition-all duration-300">
<iconify-icon icon="solar:book-2-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-4">Publishing &amp; KDP</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-8 flex-grow">
                            Full-service publishing on Amazon KDP, IngramSpark, and more. Including ISBN registration, formatting, cover design, and distribution setup.
                        </p>
<div className="flex items-center gap-2 text-xs font-medium text-white/40 group-hover:text-blue-400 transition-colors">
<span>Learn More</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group relative bg-[#0B0E13] border border-white/5 rounded-3xl p-1 overflow-hidden hover:border-cyan-500/30 transition-colors duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative h-full bg-[#0B0E13] rounded-[20px] p-8 flex flex-col">
<div className="w-14 h-14 rounded-2xl bg-[#13161C] border border-white/5 flex items-center justify-center text-cyan-400 mb-8 group-hover:scale-105 group-hover:bg-cyan-500/10 transition-all duration-300">
<iconify-icon icon="solar:star-fall-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-4">Author Branding</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-8 flex-grow">
                            Launch strategies, author websites, and marketing collateral to ensure your book reaches its target audience and establishes your authority.
                        </p>
<div className="flex items-center gap-2 text-xs font-medium text-white/40 group-hover:text-cyan-400 transition-colors">
<span>Learn More</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                    We Craft <span className="text-gradient-gold">Bestsellers</span><br/> Not Just Manuscripts.
                </h2>
<p className="text-slate-400 font-light leading-relaxed">
                    EbookWriterAgency was founded by a collective of senior editors and publishing strategists. We understand that a book is more than words on a page—it's a business asset, a legacy piece, and a marketing engine.
                </p>
<div className="space-y-6 pt-4">

<div>
<div className="flex justify-between text-xs font-medium mb-2 text-white">
<span>Ghostwriting Expertise</span>
<span>98%</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full w-[98%] progress-fill" style={{'--w': '98%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs font-medium mb-2 text-white">
<span>Editing &amp; Proofreading</span>
<span>100%</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full w-[100%] progress-fill" style={{'--w': '100%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs font-medium mb-2 text-white">
<span>Publishing Success</span>
<span>95%</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full w-[95%] progress-fill" style={{'--w': '95%'}}></div>
</div>
</div>
</div>
</div>

<div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-64 h-64 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="w-96 h-96 border border-white/5 rounded-full absolute animate-[spin_15s_linear_infinite_reverse]"></div>
</div>

<div className="relative z-10 w-64 aspect-[3/4] bg-gradient-to-br from-[#1a1d26] to-[#0B0E13] border border-white/10 rounded-lg shadow-2xl flex flex-col items-center justify-center p-6 text-center rotate-3 hover:rotate-0 transition-transform duration-500">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 mb-6 blur-md absolute opacity-20"></div>
<iconify-icon className="text-amber-400 mb-4" icon="solar:crown-star-linear" width="40"></iconify-icon>
<h3 className="text-white font-serif text-2xl italic mb-2">The Legacy</h3>
<p className="text-xs text-slate-500">Your Name Here</p>
<div className="mt-8 w-full h-px bg-white/10"></div>
<p className="mt-4 text-[10px] text-slate-600 uppercase tracking-widest">Bestseller Edition</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#0F1117]" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Transparent Pricing</h2>
<p className="text-slate-400 font-light">Invest in your authority.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-start">

<div className="glass-card p-8 rounded-2xl relative">
<h3 className="text-lg font-medium text-white">Editing &amp; Formatting</h3>
<div className="mt-4 mb-6">
<span className="text-3xl font-semibold text-white">$2,500</span>
<span className="text-slate-500 text-sm">/ project</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-400">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Professional Editing
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-400">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Interior Formatting
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-400">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Cover Design
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-400">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> KDP Upload Support
                        </li>
</ul>
<a className="block w-full py-3 rounded-lg border border-white/10 text-white text-center text-sm font-medium hover:bg-white/5 transition-colors" href="#">Select Plan</a>
</div>

<div className="bg-[#0B0E13] p-8 rounded-2xl relative border border-violet-500/50 shadow-[0_0_40px_-10px_rgba(139,92,246,0.2)] transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-violet-600 rounded-full text-[10px] font-bold tracking-wider text-white uppercase">Most Popular</div>
<h3 className="text-lg font-medium text-white">Ghostwriting + Publish</h3>
<div className="mt-4 mb-6">
<span className="text-3xl font-semibold text-white">$12,000</span>
<span className="text-slate-500 text-sm">/ project</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-violet-500" icon="solar:check-circle-bold"></iconify-icon> 30,000 Word Ghostwriting
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-violet-500" icon="solar:check-circle-bold"></iconify-icon> Extensive Research
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-violet-500" icon="solar:check-circle-bold"></iconify-icon> Premium Cover Design
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-violet-500" icon="solar:check-circle-bold"></iconify-icon> Full Distribution Setup
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-violet-500" icon="solar:check-circle-bold"></iconify-icon> 100% Rights Transfer
                        </li>
</ul>
<a className="block w-full py-3 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 text-white text-center text-sm font-medium hover:opacity-90 transition-opacity" href="#">Get Started</a>
</div>

<div className="glass-card p-8 rounded-2xl relative">
<h3 className="text-lg font-medium text-white">Full Authority Brand</h3>
<div className="mt-4 mb-6">
<span className="text-3xl font-semibold text-white">$25,000</span>
<span className="text-slate-500 text-sm">/ project</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-400">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> 50,000+ Word Ghostwriting
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-400">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Bestseller Campaign
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-400">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Audiobook Production
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-400">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Author Website
                        </li>
</ul>
<a className="block w-full py-3 rounded-lg border border-white/10 text-white text-center text-sm font-medium hover:bg-white/5 transition-colors" href="#">Select Plan</a>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-16 text-center">Words from Authors</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-card p-6 rounded-xl">
<div className="flex gap-1 text-amber-400 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-300 mb-6 leading-relaxed">"The team didn't just write a book; they captured my soul. The process was effortless, and the final product has opened doors I didn't know existed."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-700"></div>
<div>
<div className="text-sm font-medium text-white">Sarah Jenkins</div>
<div className="text-xs text-slate-500">CEO, TechFlow</div>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-xl bg-white/[0.04] border-white/10">
<div className="flex gap-1 text-amber-400 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-300 mb-6 leading-relaxed">"I was skeptical about ghostwriting, but EbookWriterAgency is in a league of their own. Professional, discreet, and incredibly talented writers."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-700"></div>
<div>
<div className="text-sm font-medium text-white">David Ross</div>
<div className="text-xs text-slate-500">Real Estate Investor</div>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-xl">
<div className="flex gap-1 text-amber-400 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-300 mb-6 leading-relaxed">"From the first call to the Amazon launch, everything was handled perfectly. Worth every penny for the authority it brought my brand."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-700"></div>
<div>
<div className="text-sm font-medium text-white">Elena M.</div>
<div className="text-xs text-slate-500">Keynote Speaker</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-medium text-white mb-8 text-center">Common Questions</h2>
<div className="space-y-4">
<details className="group glass-card rounded-lg open:bg-white/5">
<summary className="flex justify-between items-center p-4 cursor-pointer list-none text-white font-medium text-sm">
<span>Who owns the book rights?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="p-4 pt-0 text-sm text-slate-400 leading-relaxed">
                    You do. 100%. Once the project is complete and paid for, we transfer all intellectual property rights to you. We do not claim any royalties.
                </div>
</details>
<details className="group glass-card rounded-lg open:bg-white/5">
<summary className="flex justify-between items-center p-4 cursor-pointer list-none text-white font-medium text-sm">
<span>How long does the process take?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="p-4 pt-0 text-sm text-slate-400 leading-relaxed">
                    Typically 3-6 months depending on the length of the book and the complexity of the topic. We can expedite for urgent launches.
                </div>
</details>
<details className="group glass-card rounded-lg open:bg-white/5">
<summary className="flex justify-between items-center p-4 cursor-pointer list-none text-white font-medium text-sm">
<span>Do I need to have a completed draft?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="p-4 pt-0 text-sm text-slate-400 leading-relaxed">
                    Not at all. We can work from a rough idea, a series of blog posts, or just a conversation. Our "Book Blueprint" phase helps clarify your concept.
                </div>
</details>
</div>
</section>

<section className="py-20 px-6" id="contact">
<div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden p-12 md:p-24 text-center">

<div className="absolute inset-0 bg-gradient-to-r from-violet-900 to-blue-900 opacity-50"></div>
<div className="absolute inset-0 bg-noise mix-blend-overlay"></div>
<div className="relative z-10 space-y-6">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight drop-shadow-lg">
                    Ready to Publish Your Book?
                </h2>
<p className="text-lg text-blue-100/80 max-w-xl mx-auto">
                    Spots are limited. Start your journey to becoming a published author today.
                </p>
<div className="pt-4">
<button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        Start Your Project Now
                    </button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#0B0E13] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center text-white text-xs">E</div>
<span className="text-white font-medium tracking-tight text-sm">EbookWriterAgency</span>
</a>
<p className="text-xs text-slate-500 mb-4">Premium ghostwriting for elite professionals.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition" href="#"><iconify-icon icon="solar:brand-twitter-linear"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition" href="#"><iconify-icon icon="solar:brand-linkedin-linear"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition" href="#"><iconify-icon icon="solar:brand-instagram-linear"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Services</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-white transition" href="#">Ghostwriting</a></li>
<li><a className="hover:text-white transition" href="#">Book Editing</a></li>
<li><a className="hover:text-white transition" href="#">Publishing</a></li>
<li><a className="hover:text-white transition" href="#">Audiobooks</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-white transition" href="#">About Us</a></li>
<li><a className="hover:text-white transition" href="#">Case Studies</a></li>
<li><a className="hover:text-white transition" href="#">Authors</a></li>
<li><a className="hover:text-white transition" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-white transition" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2023 EbookWriterAgency. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs text-slate-500">Systems Operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
