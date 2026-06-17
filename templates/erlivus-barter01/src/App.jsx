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



        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            document.documentElement.style.setProperty('--mouse-x', x + 'px');
            document.documentElement.style.setProperty('--mouse-y', y + 'px');
        });
    
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
      



<div className="fixed z-0 pointer-events-none top-0 right-0 bottom-0 left-0">
<div className="absolute inset-0 bg-[#020204]"></div>
<div className="spotlight-bg"></div>
<div className="absolute inset-0 tech-grid opacity-20"></div>

<div className="falling-lines">
<div className="falling-line" style={{left: '10%', animationDuration: '4s', animationDelay: '0s'}}></div>
<div className="falling-line" style={{left: '25%', animationDuration: '6s', animationDelay: '2s'}}></div>
<div className="falling-line" style={{left: '45%', animationDuration: '5s', animationDelay: '1.5s'}}></div>
<div className="falling-line" style={{left: '70%', animationDuration: '7s', animationDelay: '0.5s'}}></div>
<div className="falling-line" style={{left: '85%', animationDuration: '5.5s', animationDelay: '3s'}}></div>
</div>
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent to-transparent via-white/10"></div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 border-b bg-[#020204]/70 backdrop-blur-xl border-white/5">
<div className="flex items-center gap-2 cursor-pointer group">
<div className="relative flex items-center justify-center w-8 h-8 transition-transform group-active:scale-95 bg-black border border-pink-500/20 rounded-md overflow-hidden">
<div className="absolute inset-0 bg-pink-600 blur opacity-20 group-hover:opacity-40 transition-opacity"></div>

<svg className="relative z-10 w-5 h-5 text-pink-500 fill-current" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
<path d="M6 6h16a4 4 0 0 1 0 8h-8v2h8l5 10h-6l-4-9h-3v9h-6v-26z m6 5v3h10a1 1 0 0 0 0-3h-10z"></path>
</svg>
</div>
<span className="text-base tracking-tight font-bold text-white group-hover:text-pink-100 transition-colors">Erlivus</span>
</div>
<div className="hidden md:flex items-center gap-1 p-1 rounded-full border backdrop-blur-md bg-white/5 border-white/5">
<a className="px-4 py-1.5 text-xs rounded-full transition-all text-slate-300 hover:text-white hover:bg-white/5 active:scale-95" href="#">Mission</a>
<a className="px-4 py-1.5 text-xs rounded-full transition-all text-slate-300 hover:text-white hover:bg-white/5 active:scale-95" href="#">How it Works</a>
<a className="px-4 py-1.5 text-xs rounded-full transition-all text-slate-300 hover:text-white hover:bg-white/5 active:scale-95" href="#">Community</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden lg:flex items-center gap-2 text-[11px] transition-all text-slate-400 hover:text-white active:scale-95">
<iconify-icon icon="lucide:search" width="14"></iconify-icon>
<span className="font-mono">SEARCH ITEMS</span>
</button>
<div className="h-4 w-px hidden lg:block bg-white/10"></div>
<button className="group relative text-xs font-medium bg-[#0a0a0c] border px-4 py-2 rounded-md transition-all overflow-hidden hover:border-pink-500/50 shadow-[0_0_0_1px_rgba(0,0,0,0)] hover:shadow-[0_0_0_1px_rgba(255,26,117,0.2)] text-white border-white/10 active:scale-95 active:bg-[#121215]">
<span className="btn-content-slide">
<span className="btn-text-original">Join Waitlist</span>
<span className="btn-text-hover text-pink-300">Get Early Access →</span>
</span>
</button>
</div>
</nav>

<main className="min-h-screen flex flex-col overflow-hidden w-full z-10 pt-32 pb-10 relative items-center">

<div className="text-center max-w-5xl z-20 mr-auto mb-12 ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink-500/20 bg-pink-500/10 text-[11px] font-medium mb-8 animate-fade-in shadow-[0_0_20px_rgba(255,26,117,0.15)] text-pink-200">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-pink-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
</span>
<span>The Future of Sustainable Commerce in Nigeria</span>
</div>
<h1 className="md:text-8xl leading-[0.95] text-5xl font-medium text-white tracking-tight font-newsreader mb-8">
                Exchange what you have, <br/>
<span className="bg-clip-text text-transparent font-newsreader bg-gradient-to-b from-pink-300 to-pink-700">for what you want.</span>
</h1>
<p className="leading-relaxed text-base max-w-2xl mx-auto mb-10 font-light md:text-base text-slate-400">
                Erlivus is a movement towards a more sustainable and equitable future. 
                Reduce waste and stimulate the local economy by trading items instead of buying new ones.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-5">

<div className="btn-glow-border group cursor-pointer w-full md:w-auto">
<button className="relative z-10 w-full md:w-auto block px-8 py-3.5 bg-[#0a0a0c] text-sm font-semibold rounded-[5px] transition-all hover:bg-[#121215] active:bg-[#16161a] text-white">
<span className="btn-content-slide">
<span className="btn-text-original">Start Bartering</span>
<span className="btn-text-hover text-pink-300">Start Bartering</span>
</span>
</button>
</div>

<button className="group flex transition-all md:w-auto text-sm font-medium bg-[#0a0a0b] w-full border-0 rounded-md pt-3 pr-6 pb-3 pl-6 gap-x-2 gap-y-2 items-center justify-center hover:text-white text-slate-400 active:scale-95 active:text-slate-200">
<iconify-icon className="text-slate-500 group-hover:text-pink-400 transition-colors" icon="lucide:play-circle" width="16"></iconify-icon>
<span className="border-b border-transparent group-hover:border-slate-500 transition-all">Watch Demo</span>
</button>
</div>
</div>

<div className="relative w-full max-w-6xl mx-auto z-20 mt-8 mb-20 px-4">

<div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 perspective-[2500px] h-[650px] md:h-[680px]">

<div className="relative w-[300px] h-[600px] bg-[#020204] rounded-[40px] phone-mockup border-[8px] border-[#1f1f22] overflow-hidden transform transition-all duration-700 md:rotate-y-[12deg] md:rotate-z-[-2deg] md:translate-x-6 hover:rotate-0 hover:translate-x-0 hover:z-30 hover:scale-105 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] z-20 group">

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-black rounded-b-xl z-50"></div>

<div className="h-12 w-full flex justify-between items-center px-6 pt-2 text-white/80">
<span className="text-xs font-medium">9:41</span>
<div className="flex gap-1.5">
<iconify-icon icon="lucide:signal" width="12"></iconify-icon>
<iconify-icon icon="lucide:wifi" width="12"></iconify-icon>
<iconify-icon icon="lucide:battery-medium" width="12"></iconify-icon>
</div>
</div>

<div className="h-full bg-[#0a0a0c] text-white overflow-y-auto hide-scrollbar pb-20 relative">

<div className="px-5 py-2 flex items-center justify-between">
<div className="w-10 h-10 rounded-full border border-pink-500/20 p-0.5">
<img alt="User" className="w-full h-full rounded-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&amp;h=100&amp;fit=crop"/>
</div>

<button className="text-white/60 hover:text-white"><iconify-icon icon="lucide:menu" width="20"></iconify-icon></button>
</div>
<div className="px-5 space-y-5 mt-2">

<div className="flex items-center justify-between p-4 bg-[#141416] border border-white/5 rounded-2xl hover:bg-[#1a1a1c] transition-colors cursor-pointer group/card">
<div className="flex items-center gap-3">
<iconify-icon className="text-pink-500" icon="lucide:heart" width="18"></iconify-icon>
<span className="font-medium text-sm text-slate-200">My Wishlist</span>
</div>
<div className="flex items-center gap-2">
<span className="bg-pink-500/10 text-pink-400 text-xs px-2 py-0.5 rounded-full font-bold">4</span>
<iconify-icon className="text-slate-500 group-hover/card:translate-x-1 transition-transform" icon="lucide:chevron-right" width="16"></iconify-icon>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-3">
<h3 className="text-sm font-medium text-slate-200">Proposals Sent</h3>
<iconify-icon className="text-slate-600" icon="lucide:chevron-right" width="14"></iconify-icon>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="bg-[#141416] border border-white/5 p-3 rounded-xl flex flex-col items-center gap-2 hover:border-emerald-500/30 transition-colors">
<div className="text-emerald-500 p-1.5 bg-emerald-500/10 rounded-full"><iconify-icon icon="lucide:thumbs-up" width="14"></iconify-icon></div>
<span className="text-[10px] text-emerald-400 font-medium">Accepted</span>
</div>
<div className="bg-[#141416] border border-white/5 p-3 rounded-xl flex flex-col items-center gap-2 hover:border-red-500/30 transition-colors">
<div className="text-red-500 p-1.5 bg-red-500/10 rounded-full relative">
<iconify-icon icon="lucide:thumbs-down" width="14"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-600 text-[8px] text-white">1</span>
</div>
<span className="text-[10px] text-red-400 font-medium">Rejected</span>
</div>
<div className="bg-[#141416] border border-white/5 p-3 rounded-xl flex flex-col items-center gap-2 hover:border-pink-500/30 transition-colors">
<div className="text-pink-500 p-1.5 bg-pink-500/10 rounded-full"><iconify-icon icon="lucide:droplet" width="14"></iconify-icon></div>
<span className="text-[10px] text-pink-400 font-medium">Improved</span>
</div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-3">
<h3 className="text-sm font-medium text-slate-200">Proposals Received</h3>
<iconify-icon className="text-slate-600" icon="lucide:chevron-right" width="14"></iconify-icon>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="bg-[#141416] border border-white/5 p-3 rounded-xl flex flex-col items-center gap-2 hover:border-emerald-500/30 transition-colors">
<div className="text-emerald-500 p-1.5 bg-emerald-500/10 rounded-full relative">
<iconify-icon icon="lucide:thumbs-up" width="14"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-emerald-600 text-[8px] text-white">2</span>
</div>
<span className="text-[10px] text-emerald-400 font-medium">Accepted</span>
</div>
<div className="bg-[#141416] border border-white/5 p-3 rounded-xl flex flex-col items-center gap-2 hover:border-red-500/30 transition-colors">
<div className="text-slate-600 p-1.5 bg-white/5 rounded-full"><iconify-icon icon="lucide:thumbs-down" width="14"></iconify-icon></div>
<span className="text-[10px] text-slate-500 font-medium">Rejected</span>
</div>
<div className="bg-[#141416] border border-white/5 p-3 rounded-xl flex flex-col items-center gap-2 hover:border-pink-500/30 transition-colors">
<div className="text-slate-600 p-1.5 bg-white/5 rounded-full"><iconify-icon icon="lucide:droplet" width="14"></iconify-icon></div>
<span className="text-[10px] text-slate-500 font-medium">Improved</span>
</div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-3">
<h3 className="text-sm font-medium text-slate-200">Published Deals</h3>
<span className="text-xs text-pink-500 cursor-pointer">See all</span>
</div>
<div className="flex gap-3 overflow-hidden">
<div className="relative w-1/2 aspect-[4/5] rounded-xl overflow-hidden group/deal">
<img alt="Deal" className="w-full h-full object-cover transition-transform duration-500 group-hover/deal:scale-110 opacity-70 group-hover/deal:opacity-100" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&amp;fit=crop"/>
<div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-2 left-3 text-xs font-medium text-white">Data Analysis</div>
</div>
<div className="relative w-1/2 aspect-[4/5] rounded-xl overflow-hidden group/deal">
<img alt="Deal" className="w-full h-full object-cover transition-transform duration-500 group-hover/deal:scale-110 opacity-70 group-hover/deal:opacity-100" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&amp;fit=crop"/>
<div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-2 left-3 text-xs font-medium text-white">Photography</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-24 right-5">
<button className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-700 rounded-full flex items-center justify-center text-white shadow-lg shadow-pink-500/30 hover:scale-110 transition-transform active:scale-95">
<iconify-icon icon="lucide:arrow-right-left" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-20 bg-[#0a0a0c]/95 backdrop-blur-md border-t border-white/5 flex justify-between items-center px-6 pb-4">
<div className="flex flex-col items-center gap-1 text-pink-500">
<iconify-icon icon="lucide:home" width="20"></iconify-icon>
<span className="text-[9px] font-medium">Home</span>
</div>
<div className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors">
<iconify-icon icon="lucide:gavel" width="20"></iconify-icon>
<span className="text-[9px] font-medium">Auction</span>
</div>
<div className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors relative">
<iconify-icon icon="lucide:message-square" width="20"></iconify-icon>
<span className="text-[9px] font-medium">Inbox</span>
<span className="absolute top-0 right-0 w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
</div>
<div className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors">
<iconify-icon icon="lucide:users" width="20"></iconify-icon>
<span className="text-[9px] font-medium">Spaces</span>
</div>
<div className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors">
<iconify-icon icon="lucide:wallet" width="20"></iconify-icon>
<span className="text-[9px] font-medium">Wallet</span>
</div>
</div>
</div>

<div className="hidden md:block relative w-[300px] h-[600px] bg-[#020204] rounded-[40px] phone-mockup border-[8px] border-[#1f1f22] overflow-hidden transform transition-all duration-700 md:rotate-y-[-12deg] md:rotate-z-[2deg] md:-translate-x-6 hover:rotate-0 hover:translate-x-0 hover:scale-105 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] z-10 hover:z-30 group">

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-black rounded-b-xl z-50"></div>

<div className="h-12 w-full flex justify-between items-center px-6 pt-2 text-white/80">
<span className="text-xs font-medium">9:41</span>
<div className="flex gap-1.5">
<iconify-icon icon="lucide:signal" width="12"></iconify-icon>
<iconify-icon icon="lucide:wifi" width="12"></iconify-icon>
<iconify-icon icon="lucide:battery-medium" width="12"></iconify-icon>
</div>
</div>

<div className="h-full bg-[#0a0a0c] text-white overflow-y-auto hide-scrollbar pb-10">

<div className="px-5 py-2 flex items-center justify-between sticky top-0 bg-[#0a0a0c]/90 backdrop-blur z-40">
<button className="text-white hover:text-pink-400 transition-colors"><iconify-icon icon="lucide:arrow-left" width="20"></iconify-icon></button>
<span className="font-medium text-sm">My Wishlist</span>
<button className="text-white hover:text-pink-400 transition-colors"><iconify-icon icon="lucide:sliders-horizontal" width="18"></iconify-icon></button>
</div>

<div className="p-4 grid grid-cols-2 gap-3">

<div className="bg-[#141416] border border-white/5 rounded-xl overflow-hidden group/card hover:border-white/20 transition-all">
<div className="relative aspect-[4/5] bg-slate-800">
<img alt="Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=300&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center text-pink-500 shadow-md transform transition-transform hover:scale-110">
<iconify-icon icon="lucide:heart" width="14"></iconify-icon>
</button>
</div>
<div className="p-2.5">
<h4 className="text-xs font-semibold text-slate-200 mb-1 truncate">Interior designer</h4>
<div className="flex items-center gap-2 text-[9px] text-slate-500 mb-1.5">
<span className="flex items-center gap-0.5"><iconify-icon icon="lucide:eye" width="8"></iconify-icon> 1.4k</span>
<span className="flex items-center gap-0.5"><iconify-icon icon="lucide:refresh-cw" width="8"></iconify-icon> 87 bids</span>
</div>
<span className="text-[9px] text-red-400 font-medium">expires: Fri, Nov 1</span>
</div>
</div>

<div className="bg-[#141416] border border-white/5 rounded-xl overflow-hidden group/card hover:border-white/20 transition-all">
<div className="relative aspect-[4/5] bg-slate-800">
<img alt="iPhone" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517336714731-489689fd1ca4?w=300&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center text-pink-500 shadow-md transform transition-transform hover:scale-110">
<iconify-icon icon="lucide:heart" width="14"></iconify-icon>
</button>
</div>
<div className="p-2.5">
<h4 className="text-xs font-semibold text-slate-200 mb-1 truncate">Apple Iphone</h4>
<div className="flex items-center gap-2 text-[9px] text-slate-500 mb-1.5">
<span className="flex items-center gap-0.5"><iconify-icon icon="lucide:eye" width="8"></iconify-icon> 1.4k</span>
<span className="flex items-center gap-0.5"><iconify-icon icon="lucide:refresh-cw" width="8"></iconify-icon> 87 bids</span>
</div>
<span className="text-[9px] text-red-400 font-medium">expires: Fri, Nov 1</span>
</div>
</div>

<div className="bg-[#141416] border border-white/5 rounded-xl overflow-hidden group/card hover:border-white/20 transition-all">
<div className="relative aspect-[4/5] bg-slate-800">
<img alt="Fashion" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center text-pink-500 shadow-md transform transition-transform hover:scale-110">
<iconify-icon icon="lucide:heart" width="14"></iconify-icon>
</button>
</div>
<div className="p-2.5">
<h4 className="text-xs font-semibold text-slate-200 mb-1 truncate">Outfit Expert</h4>
<div className="flex items-center gap-2 text-[9px] text-slate-500 mb-1.5">
<span className="flex items-center gap-0.5"><iconify-icon icon="lucide:eye" width="8"></iconify-icon> 1.4k</span>
<span className="flex items-center gap-0.5"><iconify-icon icon="lucide:refresh-cw" width="8"></iconify-icon> 87 bids</span>
</div>
<span className="text-[9px] text-red-400 font-medium">expires: Fri, Nov 1</span>
</div>
</div>

<div className="bg-[#141416] border border-white/5 rounded-xl overflow-hidden group/card hover:border-white/20 transition-all">
<div className="relative aspect-[4/5] bg-slate-800">
<img alt="Farm" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?w=300&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center text-pink-500 shadow-md transform transition-transform hover:scale-110">
<iconify-icon icon="lucide:heart" width="14"></iconify-icon>
</button>
</div>
<div className="p-2.5">
<h4 className="text-xs font-semibold text-slate-200 mb-1 truncate">Farm Manager</h4>
<div className="flex items-center gap-2 text-[9px] text-slate-500 mb-1.5">
<span className="flex items-center gap-0.5"><iconify-icon icon="lucide:eye" width="8"></iconify-icon> 1.4k</span>
<span className="flex items-center gap-0.5"><iconify-icon icon="lucide:refresh-cw" width="8"></iconify-icon> 87 bids</span>
</div>
<span className="text-[9px] text-red-400 font-medium">expires: Fri, Nov 1</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="horizon-ring"></div>
</main>

<section className="relative z-10 w-full bg-[#020204] py-32 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-center">

<div className="flex-1 space-y-8">
<div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-pink-400">
<iconify-icon icon="lucide:refresh-cw" width="14"></iconify-icon>
<span>Circular Economy</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight font-serif text-white">
                        Don't buy new. <br/>
                        Just <span className="text-slate-500 font-serif">trade it.</span>
</h2>
<p className="text-lg font-light leading-relaxed text-slate-400">
                        Our smart matching algorithm connects you with people who want what you have, and have what you want. It's the modern way to upgrade your lifestyle without spending money.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-4 group">
<div className="mt-1 p-1 bg-pink-500/10 rounded border border-pink-500/20 text-pink-400 transition-all group-hover:scale-110">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white">Smart Matching</h4>
<p className="text-slate-500 text-sm mt-1">We find the perfect trade partners for your items automatically.</p>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="mt-1 p-1 bg-pink-500/10 rounded border border-pink-500/20 text-pink-400 transition-all group-hover:scale-110">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white">Community Trust</h4>
<p className="text-slate-500 text-sm mt-1">Verified user profiles and secure meeting points for safety.</p>
</div>
</div>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-2 text-sm border-b transition-all pb-0.5 text-white border-white hover:text-pink-300 hover:border-pink-300 hover:gap-3" href="#">
                            Read our Mission Statement <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
</div>

<div className="flex-1 w-full">
<div className="relative rounded-xl bg-[#08080a] border shadow-2xl overflow-hidden group border-white/10 max-w-md mx-auto transform hover:rotate-1 transition-transform duration-500">
<div className="absolute inset-0 bg-gradient-to-tr from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

<div className="flex items-center justify-between px-4 py-3 border-b bg-white/[0.02] border-white/5">
<div className="flex gap-2 items-center">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Trade Proposal</div>
</div>
<div className="text-xs text-slate-500">#TRD-8921</div>
</div>

<div className="p-6">
<div className="flex justify-between items-center mb-6">
<div className="text-center w-1/3">
<div className="w-16 h-16 mx-auto mb-2 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
<iconify-icon className="text-slate-300" icon="lucide:smartphone" width="32"></iconify-icon>
</div>
<div className="text-xs font-medium text-white">iPhone 12</div>
<div className="text-[10px] text-slate-500">You offer</div>
</div>
<div className="flex flex-col items-center justify-center w-1/3 text-pink-500">
<iconify-icon icon="lucide:arrow-right-left" width="24"></iconify-icon>
<div className="text-[10px] mt-1 font-mono bg-pink-500/10 px-2 py-0.5 rounded text-pink-400">MATCH</div>
</div>
<div className="text-center w-1/3">
<div className="w-16 h-16 mx-auto mb-2 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
<iconify-icon className="text-slate-300" icon="lucide:laptop" width="32"></iconify-icon>
</div>
<div className="text-xs font-medium text-white">MacBook Air</div>
<div className="text-[10px] text-slate-500">You receive</div>
</div>
</div>
<div className="bg-white/[0.02] rounded border border-white/5 p-3 mb-4">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs font-bold">JD</div>
<div>
<div className="text-xs font-medium text-white">John Doe</div>
<div className="text-[10px] text-slate-500">Verified Trader • Lagos</div>
<div className="text-[11px] text-slate-300 mt-1">"Hey! I've been looking for that phone. This trade works perfectly for me."</div>
</div>
</div>
</div>
<button className="w-full py-2 bg-pink-600 hover:bg-pink-500 text-white text-xs font-semibold rounded transition-colors shadow-[0_0_15px_rgba(255,26,117,0.3)]">
                                Accept Trade Offer
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-[#020204] overflow-hidden">

<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent to-transparent via-white/5"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="mb-20 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 font-serif text-white">
                    Designed for 
                    <span className="font-serif text-pink-500">Community &amp; Sustainability.</span>
</h2>
<p className="text-lg leading-relaxed font-light text-slate-400">
                    Erlivus is more than an app. It's a platform built to foster economic self-reliance and reduce environmental waste in Nigeria.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-6 gap-6">

<div className="md:col-span-4 group relative overflow-hidden rounded-2xl border bg-[#050505] p-8 hover:border-pink-500/30 transition-colors duration-500 shadow-lg border-white/10">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,26,117,0.08),transparent_50%)]"></div>
<div className="relative z-10 h-full flex flex-col justify-between min-h-[280px]">
<div className="mb-8">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg border bg-white/5 text-pink-400 border-white/10">
<iconify-icon icon="lucide:sprout" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Environmental Impact</h3>
</div>
<p className="text-sm leading-relaxed max-w-md text-slate-400">
                                Every trade extends the lifecycle of a product. We track the carbon footprint reduction of every transaction you make.
                            </p>
</div>

<div className="w-full h-48 rounded-lg border relative overflow-hidden flex items-center justify-center border-white/5 bg-black/40">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,26,117,0.05),transparent_70%)]"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-80">
<div className="relative">
<iconify-icon className="text-pink-500/40 animate-pulse" icon="lucide:leaf" width="64"></iconify-icon>
<div className="absolute top-0 right-0 w-3 h-3 bg-white rounded-full animate-bounce"></div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 group relative overflow-hidden rounded-2xl border bg-[#050505] p-8 hover:border-emerald-500/30 transition-colors duration-500 shadow-lg border-white/10">
<div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none">
<iconify-icon className="rotate-12 text-white" icon="lucide:shield-check" width="160"></iconify-icon>
</div>
<div className="relative z-10 flex flex-col h-full justify-between min-h-[280px]">
<div>
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg border bg-white/5 text-emerald-400 border-white/10">
<iconify-icon icon="lucide:user-check" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Verified Users</h3>
</div>
<p className="text-sm leading-relaxed mb-8 text-slate-400">
                                Trade with confidence. Identity verification ensures a safe community.
                            </p>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between text-[10px] font-mono p-2.5 rounded border group-hover:bg-white/10 transition-colors bg-white/5 border-white/5 text-slate-300">
<span>Phone_Verified</span>
<span className="flex items-center gap-1 text-emerald-400">
<iconify-icon icon="lucide:check" width="10"></iconify-icon> YES
                                </span>
</div>
<div className="flex items-center justify-between text-[10px] font-mono p-2.5 rounded border group-hover:bg-white/10 transition-colors bg-white/5 border-white/5 text-slate-300">
<span>Rating_Score</span>
<span className="text-yellow-400">★★★★★</span>
</div>
<div className="flex items-center justify-between text-[10px] font-mono p-2.5 rounded border group-hover:bg-white/10 transition-colors bg-white/5 border-white/5 text-slate-300">
<span>Status</span>
<span className="text-emerald-400">TRUSTED</span>
</div>
</div>
</div>
</div>

<div className="md:col-span-3 group relative overflow-hidden rounded-2xl border bg-[#050505] p-8 hover:border-blue-500/30 transition-colors duration-500 shadow-lg border-white/10">
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg border bg-white/5 text-blue-400 border-white/10">
<iconify-icon icon="lucide:search" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Hyper-local Discovery</h3>
</div>
<p className="text-sm leading-relaxed mb-8 text-slate-400">
                            Find items within your immediate community. Save on transport, trade in person.
                        </p>

<div className="flex items-center justify-center gap-4 h-24 w-full opacity-60 group-hover:opacity-100 transition-opacity">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center animate-bounce border border-blue-500/50">
<div className="w-3 h-3 bg-blue-400 rounded-full"></div>
</div>
<div className="w-2 h-2 rounded-full bg-slate-700"></div>
<div className="w-2 h-2 rounded-full bg-slate-700"></div>
<div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center border border-pink-500/50">
<div className="w-3 h-3 bg-pink-400 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-3 group relative overflow-hidden rounded-2xl border bg-[#050505] p-8 hover:border-orange-500/30 transition-colors duration-500 shadow-lg border-white/10">
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg border bg-white/5 text-orange-400 border-white/10">
<iconify-icon icon="lucide:piggy-bank" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Economic Relief</h3>
</div>
<p className="text-sm leading-relaxed mb-8 text-slate-400">
                            Save cash for essentials. Use the value locked in your unused items to get what you need.
                        </p>
<div className="flex items-center justify-between gap-3 text-xs font-mono text-slate-500 border rounded-lg p-3 group-hover:border-white/20 transition-colors bg-black/40 border-white/10">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-slate-300">Savings</span>
</div>
<div className="flex items-center gap-2 text-white font-bold">
<span>₦ 150,000+</span>
</div>
<span className="text-[10px] text-emerald-400">This Month</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-[#020204] overflow-hidden border-t border-white/5">
<style>
            @keyframes flow-beam {
                0% { transform: translateX(-100%); opacity: 0; }
                50% { opacity: 1; }
                100% { transform: translateX(200%); opacity: 0; }
            }
            @keyframes float-gentle {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-5px); }
            }
        </style>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] blur-[120px] rounded-full pointer-events-none bg-pink-900/10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="mb-24 text-center max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-medium mb-6 backdrop-blur-sm border-white/10 bg-white/5 text-pink-300">
<span className="w-1.5 h-1.5 rounded-full animate-pulse bg-pink-400"></span>
                    HOW IT WORKS
                </div>
<h2 className="md:text-5xl text-3xl font-medium text-white tracking-tight font-serif mb-6">
                    Three steps to <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-500 font-serif from-pink-300">your next upgrade.</span>
</h2>
<p className="text-lg font-light leading-relaxed text-slate-400">
                    Simplicity is key. We've removed the barriers to entry so you can start trading immediately.
                </p>
</div>

<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px overflow-hidden bg-white/10">
<div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-pink-500 to-transparent" style={{animation: 'flow-beam 3s cubic-bezier(0.4, 0, 0.2, 1) infinite'}}></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">

<div className="group relative">

<div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0a0a0c] border items-center justify-center z-20 group-hover:border-pink-500/50 group-hover:shadow-[0_0_15px_rgba(255,26,117,0.3)] transition-all duration-500 border-white/10">
<div className="w-2 h-2 rounded-full group-hover:bg-pink-400 transition-colors bg-slate-600"></div>
</div>
<div className="pt-8 md:pt-16 h-full">
<div className="h-full rounded-2xl border bg-[#050505] p-1 overflow-hidden hover:border-pink-500/20 transition-all duration-500 group-hover:-translate-y-1 border-white/10">
<div className="relative h-full rounded-xl bg-gradient-to-b from-white/[0.03] to-transparent p-6 flex flex-col justify-between">
<div className="mb-8">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg border group-hover:text-white group-hover:bg-white/10 transition-colors bg-white/5 text-slate-300 border-white/10">
<iconify-icon icon="lucide:camera" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">1. List Item</h3>
</div>
<p className="text-sm leading-relaxed text-slate-400">
                                            Take a photo of what you want to exchange. Add a short description and value.
                                        </p>
</div>
<div className="relative w-full h-32 rounded-lg border overflow-hidden flex items-center justify-center border-white/10 bg-black/40">
<iconify-icon className="text-slate-600 group-hover:text-pink-500 transition-colors" icon="lucide:image-plus" width="32"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="group relative">
<div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0a0a0c] border items-center justify-center z-20 group-hover:border-pink-500/50 group-hover:shadow-[0_0_15px_rgba(255,26,117,0.3)] transition-all duration-500 delay-100 border-white/10">
<div className="w-2 h-2 rounded-full group-hover:bg-pink-400 transition-colors bg-slate-600"></div>
</div>
<div className="pt-8 md:pt-16 h-full">
<div className="h-full rounded-2xl border bg-[#050505] p-1 overflow-hidden hover:border-pink-500/20 transition-all duration-500 group-hover:-translate-y-1 delay-75 border-white/10">
<div className="relative h-full rounded-xl bg-gradient-to-b from-white/[0.03] to-transparent p-6 flex flex-col justify-between">
<div className="mb-8">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg border group-hover:text-white group-hover:bg-white/10 transition-colors bg-white/5 text-slate-300 border-white/10">
<iconify-icon icon="lucide:search-check" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">2. Find Match</h3>
</div>
<p className="text-sm leading-relaxed text-slate-400">
                                            Search for what you need. Our algorithm highlights the best trade opportunities.
                                        </p>
</div>
<div className="relative w-full h-32 rounded-lg bg-[#0a0a0c] border overflow-hidden flex items-center justify-center border-white/10">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
<div className="relative z-10 w-12 h-12 border border-pink-500/30 bg-pink-500/5 rounded flex items-center justify-center" style={{animation: 'float-gentle 4s ease-in-out infinite'}}>
<iconify-icon className="text-pink-400" icon="lucide:check"></iconify-icon>
<div className="absolute inset-0 border border-transparent border-t-pink-500/40 rounded-full animate-spin [animation-duration:3s]"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative">
<div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0a0a0c] border items-center justify-center z-20 group-hover:border-pink-500/50 group-hover:shadow-[0_0_15px_rgba(255,26,117,0.3)] transition-all duration-500 delay-200 border-white/10">
<div className="w-2 h-2 rounded-full group-hover:bg-pink-400 transition-colors bg-slate-600"></div>
</div>
<div className="pt-8 md:pt-16 h-full">
<div className="h-full rounded-2xl border bg-[#050505] p-1 overflow-hidden hover:border-pink-500/20 transition-all duration-500 group-hover:-translate-y-1 delay-150 border-white/10">
<div className="relative h-full rounded-xl bg-gradient-to-b from-white/[0.03] to-transparent p-6 flex flex-col justify-between">
<div className="mb-8">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg border group-hover:text-white group-hover:bg-white/10 transition-colors bg-white/5 text-slate-300 border-white/10">
<iconify-icon icon="lucide:shake" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">3. Exchange</h3>
</div>
<p className="text-sm leading-relaxed text-slate-400">
                                            Meet securely and complete the swap. Rate your experience to build community trust.
                                        </p>
</div>
<div className="relative w-full h-32 rounded-lg bg-[#0a0a0c] border overflow-hidden flex items-center justify-center border-white/10">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center border border-white/10">A</div>
<iconify-icon className="text-pink-500 animate-pulse" icon="lucide:arrow-right-left"></iconify-icon>
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center border border-white/10">B</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#020204] w-full border-white/5 border-t pt-24 pb-24 relative">

<div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2"></div>
<div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] translate-y-1/2 translate-x-1/2"></div>
</div>

<div className="relative z-10 max-w-6xl mx-auto px-6">
<div className="relative rounded-2xl border border-white/10 bg-[#0a0a0c]/80 backdrop-blur-2xl p-8 md:p-12 overflow-hidden shadow-2xl">

<div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row md:justify-between gap-12 lg:gap-20">

<div className="flex flex-col items-start md:max-w-xs">
<a className="flex items-center gap-3 mb-6 group" href="#">
<div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-pink-500/20 to-pink-900/20 border border-pink-500/30 group-hover:border-pink-400/50 transition-colors shadow-[0_0_15px_rgba(255,26,117,0.15)]">

<svg className="w-5 h-5 text-pink-400 fill-current" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
<path d="M6 6h16a4 4 0 0 1 0 8h-8v2h8l5 10h-6l-4-9h-3v9h-6v-26z m6 5v3h10a1 1 0 0 0 0-3h-10z"></path>
</svg>
</div>
<span className="text-xl font-semibold tracking-tight text-white group-hover:text-pink-200 transition-colors">Erlivus</span>
</a>
<p className="text-sm text-slate-400 leading-relaxed mb-8">
                        Erlivus Technologies <br/> Nigeria.<br/><br/>
                        Develop a user-friendly app that makes it simple to list, search, and help reduce your spending by exchanging items.
                    </p>
<div className="flex gap-3">
<a className="w-9 h-9 flex items-center justify-center rounded-full border border-white/5 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all" href="#">
<iconify-icon icon="lucide:twitter" width="16"></iconify-icon>
</a>
<a className="w-9 h-9 flex items-center justify-center rounded-full border border-white/5 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all" href="#">
<iconify-icon icon="lucide:instagram" width="16"></iconify-icon>
</a>
<a className="w-9 h-9 flex items-center justify-center rounded-full border border-white/5 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all" href="#">
<iconify-icon icon="lucide:linkedin" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
<div>
<h4 className="text-xs font-semibold uppercase tracking-widest text-pink-400 mb-6">Explore</h4>
<ul className="space-y-3 text-sm">
<li><a className="text-slate-400 hover:text-white transition-colors block py-0.5" href="#">Mission</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors block py-0.5" href="#">How it Works</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors block py-0.5" href="#">Sustainability</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors block py-0.5" href="#">Community</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-widest text-pink-400 mb-6">Company</h4>
<ul className="space-y-3 text-sm">
<li><a className="text-slate-400 hover:text-white transition-colors block py-0.5" href="#">About Us</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors block py-0.5" href="#">Careers</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors block py-0.5" href="#">Blog</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors block py-0.5" href="#">Contact</a></li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-semibold uppercase tracking-widest text-pink-400 mb-6">Legal</h4>
<ul className="space-y-3 text-sm">
<li className=""><a className="text-slate-400 hover:text-white transition-colors block py-0.5" href="#">Terms of Service</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors block py-0.5" href="#">Privacy Policy</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors block py-0.5" href="#">Safety Guidelines</a></li>
</ul>
</div>
</div>
</div>

<div className="relative z-10 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
<p className="text-xs text-slate-500 font-medium">© 2025 Erlivus Technologies. All rights reserved.</p>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-mono font-medium text-slate-400 tracking-wide">WAITLIST OPEN</span>
</div>
</div>
</div>
</div>
</section>

    </>
  );
}
