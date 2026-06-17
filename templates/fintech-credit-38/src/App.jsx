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



document.addEventListener('DOMContentLoaded', () => {
// 1. Trigger Hero Animations on Page Load
const heroElements = document.querySelectorAll('.hero-animate');
// Small timeout to ensure DOM is ready for transition
setTimeout(() => {
heroElements.forEach(el => el.classList.add('is-visible'));
}, 100);
// 2. Scroll Observer for rest of page
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('is-visible');
// Optional: Unobserve after reveal if you don't want it to re-run
// observer.unobserve(entry.target);
}
});
}, {
threshold: 0.1, // Trigger when 10% visible
rootMargin: "0px 0px -50px 0px" // Trigger slightly before element hits bottom
});
document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
// 3. Card Tilt Effect (Existing)
const cardContainer = document.querySelector('.perspective-container');
const card = document.querySelector('.card-3d');
if(cardContainer && card) {
cardContainer.addEventListener('mousemove', (e) => {
const rect = cardContainer.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;
const centerX = rect.width / 2;
const centerY = rect.height / 2;
const rotateX = ((y - centerY) / centerY) * -10;
const rotateY = ((x - centerX) / centerX) * 10;
card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
});
cardContainer.addEventListener('mouseleave', () => {
card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
});
}
});



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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-grid"></div>
<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-rose-900/10 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob"></div>
<div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob animation-delay-2000"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md transition-transform duration-700 delay-100 -translate-y-full animate-[slideDown_0.8s_forwards]">
<style>
            @keyframes slideDown { to { transform: translateY(0); } }
        </style>
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="relative w-8 h-8 flex items-center justify-center">
<div className="absolute inset-0 bg-white/10 rounded-full blur-sm group-hover:bg-white/20 transition-all"></div>
<iconify-icon className="text-white relative z-10" icon="lucide:aperture" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-white font-bold tracking-tighter text-xl">NOVA</span>
</div>
<div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Experience</a>
<a className="hover:text-white transition-colors" href="#">Rewards</a>
<a className="hover:text-white transition-colors" href="#">Membership</a>
</div>
<div className="flex items-center gap-6">
<a className="text-sm font-medium hover:text-white transition-colors hidden sm:block" href="#">Sign In</a>
<button className="bg-white text-black text-sm font-bold px-6 py-2.5 rounded-full hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] duration-300">
                    Apply Now
                </button>
</div>
</div>
</nav>

<main className="relative z-10 pt-40 pb-20 px-6">
<div className="max-w-7xl mx-auto text-center flex flex-col items-center">

<div className="reveal-item hero-animate delay-100 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold tracking-wide text-slate-300 mb-10 hover:border-white/20 hover:bg-white/10 transition-colors cursor-pointer group">
<span className="text-white">NOVA METAL</span>
<span className="w-px h-3 bg-white/20"></span>
<span className="text-slate-400 group-hover:text-white transition-colors">Exclusive Access Live</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" strokeWidth="2" width="12"></iconify-icon>
</div>

<h1 className="reveal-item hero-animate delay-200 text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8 text-white text-glow">
                UNLIMITED<br/>
<span className="shimmer-text">POWER</span>
</h1>
<p className="reveal-item hero-animate delay-300 text-lg md:text-xl text-slate-400 max-w-xl mb-12 leading-relaxed font-light mx-auto">
                A credit card designed for the visionaries. Crafted from aerospace-grade titanium, powered by intelligent rewards.
            </p>
<div className="reveal-item hero-animate delay-400 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-20 z-20 relative">
<button className="w-full sm:w-auto bg-white text-black h-14 px-10 rounded-full font-bold hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2 shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]">
                    Claim Your Card
                    <iconify-icon icon="lucide:arrow-up-right" strokeWidth="2" width="18"></iconify-icon>
</button>
</div>

<div className="perspective-container relative w-full flex justify-center py-10 reveal-item hero-animate delay-500">

<div className="card-3d relative w-[340px] h-[215px] md:w-[520px] md:h-[328px] rounded-[24px] metal-bg shadow-2xl border border-white/10 group cursor-pointer">

<div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[24px] z-20"></div>

<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-10">
<div className="flex justify-between items-start">
<div className="flex items-center gap-2">
<iconify-icon className="text-white/40" icon="lucide:nfc" strokeWidth="1" width="36"></iconify-icon>
<iconify-icon className="text-white/40 rotate-90" icon="lucide:wifi" strokeWidth="1" width="28"></iconify-icon>
</div>
<div className="text-white font-bold tracking-tighter text-2xl italic">NOVA</div>
</div>

<div className="w-14 h-10 rounded-md bg-gradient-to-br from-[#e2c694] via-[#fdf2d0] to-[#bfa063] flex items-center justify-center shadow-inner border border-[#a68648]">
<div className="w-full h-[1px] bg-black/30 my-[3px]"></div>
<div className="absolute w-[1px] h-full bg-black/30 mx-[3px]"></div>
</div>
<div className="flex justify-between items-end">
<div className="space-y-1">
<div className="flex items-center gap-4 mb-2">
<span className="font-mono text-white/90 text-xl tracking-widest drop-shadow-md">4920</span>
<span className="font-mono text-white/90 text-xl tracking-widest drop-shadow-md">••••</span>
<span className="font-mono text-white/90 text-xl tracking-widest drop-shadow-md">••••</span>
<span className="font-mono text-white/90 text-xl tracking-widest drop-shadow-md">8024</span>
</div>
<div className="text-white/80 font-medium tracking-widest text-sm uppercase">Alexander Doe</div>
</div>
<div className="flex flex-col items-end">
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-white/10"></div>
<div className="w-8 h-4 rounded-full bg-red-500/80 -translate-x-2 mix-blend-screen"></div>
<div className="w-8 h-4 rounded-full bg-yellow-500/80 translate-x-2 mix-blend-screen"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-white/5 blur-3xl rounded-full -z-10"></div>
</div>
</div>
</main>

<section className="max-w-7xl mx-auto px-6 py-32">
<div className="text-center mb-24 reveal-item reveal-on-scroll">
<h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">Designed for <span className="text-slate-600">Details.</span></h2>
<p className="text-slate-400 max-w-lg mx-auto">Experience a level of financial control previously reserved for institutions. Now in your pocket.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[minmax(320px,auto)]">

<div className="md:col-span-2 glass-card rounded-[32px] p-10 relative overflow-hidden group reveal-item reveal-on-scroll delay-100">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<div>
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:bg-white/10 transition-colors">
<iconify-icon icon="lucide:pie-chart" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-2">Hyper-Analytics</h3>
<p className="text-sm text-slate-400 max-w-sm">Deep dive into your spending patterns with AI-driven categorization and forecasting.</p>
</div>
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all">
<iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</button>
</div>

<div className="mt-10 h-40 flex items-end gap-3 mask-image-linear-to-t relative">
<div className="absolute inset-0 border-t border-b border-white/5 flex flex-col justify-between pointer-events-none">
<div className="w-full h-px bg-white/5 dashed"></div>
<div className="w-full h-px bg-white/5 dashed"></div>
</div>
<div className="flex-1 bg-gradient-to-t from-white/5 to-white/20 rounded-t-sm h-[40%] group-hover:h-[60%] transition-all duration-700 ease-out border-t border-white/20"></div>
<div className="flex-1 bg-gradient-to-t from-white/5 to-white/20 rounded-t-sm h-[70%] group-hover:h-[50%] transition-all duration-700 ease-out delay-75 border-t border-white/20"></div>
<div className="flex-1 bg-gradient-to-t from-white/5 to-white/20 rounded-t-sm h-[50%] group-hover:h-[80%] transition-all duration-700 ease-out delay-100 border-t border-white/20"></div>
<div className="flex-1 bg-white rounded-t-sm h-[30%] group-hover:h-[45%] transition-all duration-700 ease-out delay-150 shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
<div className="flex-1 bg-gradient-to-t from-white/5 to-white/20 rounded-t-sm h-[60%] group-hover:h-[90%] transition-all duration-700 ease-out delay-200 border-t border-white/20"></div>
<div className="flex-1 bg-gradient-to-t from-white/5 to-white/20 rounded-t-sm h-[45%] group-hover:h-[55%] transition-all duration-700 ease-out delay-300 border-t border-white/20"></div>
</div>
</div>
</div>

<div className="glass-card rounded-[32px] p-10 relative overflow-hidden group reveal-item reveal-on-scroll delay-200">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
<div className="w-28 h-28 rounded-full border border-white/10 flex items-center justify-center">
<iconify-icon className="text-white/20 group-hover:text-white/80 transition-colors duration-500" icon="lucide:lock" width="40"></iconify-icon>
</div>
</div>
<div className="relative z-10 flex flex-col justify-between h-full">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-2">Vault Mode</h3>
<p className="text-sm text-slate-400">Biometric freezing. Create disposable virtual cards for single-use transactions.</p>
</div>
</div>
</div>

<div className="glass-card rounded-[32px] p-0 relative overflow-hidden group reveal-item reveal-on-scroll delay-300">
<div className="p-10 pb-0 relative z-10">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="lucide:globe" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-2">Global Access</h3>
<p className="text-sm text-slate-400">Zero FX fees in 140+ countries.</p>
</div>
<div className="absolute bottom-0 left-0 right-0 h-40 bg-white/5 border-t border-white/10 backdrop-blur-md flex flex-col p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex justify-between items-center mb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<iconify-icon icon="lucide:plane" width="14"></iconify-icon>
</div>
<div>
<div className="text-xs text-white font-medium">Tokyo, JP</div>
<div className="text-[10px] text-slate-500">Just now</div>
</div>
</div>
<div className="text-white font-mono text-sm">¥4,500</div>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400">
<iconify-icon icon="lucide:coffee" width="14"></iconify-icon>
</div>
<div>
<div className="text-xs text-white font-medium">Paris, FR</div>
<div className="text-[10px] text-slate-500">2h ago</div>
</div>
</div>
<div className="text-white font-mono text-sm">€12.50</div>
</div>
</div>
</div>

<div className="md:col-span-2 glass-card rounded-[32px] p-10 relative overflow-hidden group reveal-item reveal-on-scroll delay-400 flex flex-col md:flex-row items-center gap-10">
<div className="flex-1 relative z-10">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="lucide:sparkles" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Curated Rewards</h3>
<p className="text-sm text-slate-400 mb-8 leading-relaxed">
                        Access exclusive events, luxury travel perks, and concierge services. 
                        Earn 3x points on lifestyle categories.
                    </p>
<div className="flex gap-8 border-t border-white/10 pt-6">
<div>
<span className="block text-3xl font-bold text-white mb-1">3x</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Travel</span>
</div>
<div>
<span className="block text-3xl font-bold text-white mb-1">2x</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Dining</span>
</div>
</div>
</div>
<div className="flex-1 w-full flex items-center justify-center relative">
<div className="relative w-40 h-40">
<div className="absolute inset-0 rounded-full border border-white/20 animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-2 rounded-full border border-white/10 border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute inset-0 bg-white/5 blur-2xl rounded-full"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center z-10">
<span className="text-4xl font-bold text-white tracking-tighter">4.2%</span>
<span className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">APY Yield</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-[#0A0A0A]">
<div className="max-w-7xl mx-auto px-6 py-16 reveal-item reveal-on-scroll">
<p className="text-center text-xs font-mono text-slate-600 mb-10 tracking-[0.2em] uppercase">Trusted by leaders at</p>
<div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-40 hover:opacity-100 transition-opacity duration-700">
<div className="text-2xl font-bold text-white tracking-tighter flex items-center gap-2"><div className="w-4 h-4 bg-white rounded-sm"></div>ACME</div>
<div className="text-2xl font-bold text-white tracking-tighter flex items-center gap-2"><div className="w-4 h-4 rounded-full border-2 border-white"></div>SPHERE</div>
<div className="text-2xl font-bold text-white tracking-tighter flex items-center gap-2"><div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[16px] border-b-white"></div>NEXUS</div>
<div className="text-2xl font-bold text-white tracking-tighter flex items-center gap-2"><div className="w-4 h-4 bg-white rotate-45"></div>QUANTUM</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-900/20 to-rose-900/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 reveal-item reveal-on-scroll">
<h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-8">Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-600">Circle.</span></h2>
<p className="text-xl text-slate-500 mb-12 max-w-xl mx-auto">Limited invite codes available for the current quarter. Apply for early access.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 h-12 text-white placeholder-slate-600 focus:outline-none focus:border-white/30 transition-colors" placeholder="Enter email address" type="email"/>
<button className="bg-white text-black h-12 px-8 rounded-full font-bold hover:bg-slate-200 transition-colors" type="button">
                    Request Access
                </button>
</form>
</div>
</section>

<footer className="border-t border-white/10 bg-[#050505] pt-20 pb-10 px-6 reveal-item reveal-on-scroll">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
<div>
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-white" icon="lucide:aperture" width="24"></iconify-icon>
<span className="text-white font-bold tracking-tighter text-xl">NOVA</span>
</div>
<p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                    Nova Financial Technologies<br/>
                    San Francisco, CA<br/>
                    License No. 9482-A
                </p>
</div>
<div className="flex gap-16 md:gap-24">
<div className="flex flex-col gap-4">
<h4 className="text-white font-semibold text-sm">Product</h4>
<a className="text-slate-500 text-sm hover:text-white transition-colors" href="#">Metal Card</a>
<a className="text-slate-500 text-sm hover:text-white transition-colors" href="#">Virtual</a>
<a className="text-slate-500 text-sm hover:text-white transition-colors" href="#">Rewards</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-semibold text-sm">Company</h4>
<a className="text-slate-500 text-sm hover:text-white transition-colors" href="#">Manifesto</a>
<a className="text-slate-500 text-sm hover:text-white transition-colors" href="#">Careers</a>
<a className="text-slate-500 text-sm hover:text-white transition-colors" href="#">Press</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-semibold text-sm">Support</h4>
<a className="text-slate-500 text-sm hover:text-white transition-colors" href="#">Concierge</a>
<a className="text-slate-500 text-sm hover:text-white transition-colors" href="#">Lost Card</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-700 text-xs font-medium">© 2024 Nova. Not a bank. Banking services provided by partner banks.</p>
<div className="flex gap-6">
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="18"></iconify-icon>
</a>
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
