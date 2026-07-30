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

        // 3D Tilt Effect
        const cards = document.querySelectorAll('.tilt-card');

        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                // Limit rotation
                const rotateX = ((y - centerY) / centerY) * -3; 
                const rotateY = ((x - centerX) / centerX) * 3;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            });
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
      

<div className="noise"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-black/50 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-lg font-medium tracking-tight text-white flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                SACHIN RAI
            </div>
<div className="flex gap-6 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#work">Projects</a>
<a className="hover:text-white transition-colors" href="#profile">Profile</a>
<a className="hover:text-white transition-colors" href="#resume">Resume</a>
</div>
</div>
</nav>
<main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">

<header className="mb-24 relative">

<div className="absolute -top-24 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
<div className="absolute top-10 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
<h1 className="text-6xl md:text-8xl font-medium text-white tracking-tighter mb-6 glow-text relative z-10">
                Crafting <br />
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 animate-gradient-x">Digital Experiences.</span>
</h1>
<p className="text-xl text-zinc-400 max-w-2xl leading-relaxed relative z-10">
                I am Sachin Rai. A developer bridging the gap between design and engineering. 
                Focusing on immersive web experiences and Google technologies.
            </p>
<div className="flex flex-wrap gap-4 mt-8 relative z-10">
<a className="group flex items-center gap-2 hover:bg-zinc-200 transition-all active:scale-95 font-medium text-black bg-white rounded-full pt-3 pr-6 pb-3 pl-6" href="https://developers.google.com/profile/u/117960275884421461612" target="_blank">
<svg className="lucide lucide-google w-4 h-4" data-lucide="google" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.96 9.96 0 0 1 7.07 2.93l-2.12 2.12A6.975 6.975 0 0 0 12 5C8.134 5 5 8.134 5 12c0 3.866 3.134 7 7 7 1.66 0 3.19-.59 4.39-1.57.91-.74 1.58-1.78 1.89-2.93H12v-3h10.45c.1.53.15 1.08.15 1.63 0 5.523-4.477 10-10 10Z"></path></svg>
                    Google Developer Profile
                </a>
<a className="flex items-center gap-2 hover:bg-zinc-800 transition-all active:scale-95 font-medium text-white bg-zinc-900 border-zinc-800 border rounded-full pt-3 pr-6 pb-3 pl-6" href="#resume">
                    Download Resume
                </a>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(12rem,auto)] perspective-1000">

<div className="tilt-card group relative md:col-span-2 rounded-[2rem] bg-zinc-900/40 border border-white/10 p-8 overflow-hidden hover:border-white/20 transition-all duration-300" id="resume" style={{transform: `perspective(1000px) rotateX(0deg) rotateY(0deg)`}}>

<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute -right-20 top-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-indigo-500/30 transition-colors"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<div>
<div className="flex items-center gap-2 mb-3">
<span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide uppercase">Available for hire</span>
</div>
<h3 className="text-3xl font-medium text-white tracking-tight">Curriculum Vitae</h3>
<p className="text-zinc-400 mt-2 text-sm max-w-md">Detailed overview of my experience, certifications, and project history.</p>
</div>
<a className="p-4 bg-white text-black rounded-full hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]" href="file:///D:/LINKDEIN%20DESIGN%20RESUME.html">
<svg className="lucide lucide-arrow-down w-5 h-5" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</a>
</div>

<div className="flex items-end justify-between mt-12">
<div className="space-y-3 w-full max-w-sm">
<div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group/item">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-bold text-xs shadow-lg">PDF</div>
<div>
<div className="text-white text-sm font-medium group-hover/item:text-indigo-300 transition-colors">Sachin_Rai_Resume_2024.pdf</div>
<div className="text-xs text-zinc-500">Updated recently • 2.4 MB</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="tilt-card group relative md:col-span-1 rounded-[2rem] bg-zinc-900/40 border border-white/10 p-8 overflow-hidden hover:border-white/20 transition-all duration-300" id="work">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-emerald-900/20 opacity-50"></div>
<h3 className="text-xl font-medium text-white tracking-tight mb-6 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Live Projects
                </h3>
<div className="space-y-3">

<a className="block group/link relative overflow-hidden rounded-2xl bg-zinc-800/40 border border-white/5 hover:border-emerald-500/30 transition-all" href="https://dk4759743.wixsite.com/vishwa-biocare" target="_blank">
<div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover/link:opacity-100 transition-opacity"></div>
<div className="p-4 flex items-center justify-between relative z-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white shadow-lg shrink-0">
<svg className="w-5 h-5" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.77 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<div>
<div className="text-sm font-medium text-white group-hover/link:text-emerald-300 transition-colors">Vishwa Biocare</div>
<div className="text-[10px] uppercase tracking-wider text-zinc-500">Medical Tech</div>
</div>
</div>
<svg className="w-4 h-4 text-zinc-600 group-hover/link:text-white transition-colors" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</div>
</a>

<a className="block group/link relative overflow-hidden rounded-2xl bg-zinc-800/40 border border-white/5 hover:border-blue-500/30 transition-all" href="https://dk4759743.wixsite.com/versatile-bonds-priv" target="_blank">
<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover/link:opacity-100 transition-opacity"></div>
<div className="p-4 flex items-center justify-between relative z-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white shadow-lg shrink-0">
<svg className="w-5 h-5" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
</div>
<div>
<div className="text-sm font-medium text-white group-hover/link:text-blue-300 transition-colors">Versatile Bonds</div>
<div className="text-[10px] uppercase tracking-wider text-zinc-500">Corporate</div>
</div>
</div>
<svg className="w-4 h-4 text-zinc-600 group-hover/link:text-white transition-colors" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</div>
</a>

<a className="block group/link relative overflow-hidden rounded-2xl bg-zinc-800/40 border border-white/5 hover:border-pink-500/30 transition-all" href="https://dk4759743.wixsite.com/hema-gems" target="_blank">
<div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-rose-500/10 opacity-0 group-hover/link:opacity-100 transition-opacity"></div>
<div className="p-4 flex items-center justify-between relative z-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-600 flex items-center justify-center text-white shadow-lg shrink-0">
<svg className="w-5 h-5" data-lucide="diamond" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg>
</div>
<div>
<div className="text-sm font-medium text-white group-hover/link:text-pink-300 transition-colors">Hema Gems</div>
<div className="text-[10px] uppercase tracking-wider text-zinc-500">Luxury Goods</div>
</div>
</div>
<svg className="w-4 h-4 text-zinc-600 group-hover/link:text-white transition-colors" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</div>
</a>

<a className="block group/link relative overflow-hidden rounded-2xl bg-zinc-800/40 border border-white/5 hover:border-orange-500/30 transition-all" href="https://dk4759743.wixsite.com/bs-coaching-center" target="_blank">
<div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/10 opacity-0 group-hover/link:opacity-100 transition-opacity"></div>
<div className="p-4 flex items-center justify-between relative z-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white shadow-lg shrink-0">
<svg className="w-5 h-5" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
</div>
<div>
<div className="text-sm font-medium text-white group-hover/link:text-orange-300 transition-colors">BS Coaching</div>
<div className="text-[10px] uppercase tracking-wider text-zinc-500">Education</div>
</div>
</div>
<svg className="w-4 h-4 text-zinc-600 group-hover/link:text-white transition-colors" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</div>
</a>

<a className="block group/link relative overflow-hidden rounded-2xl bg-zinc-800/40 border border-white/5 hover:border-yellow-500/30 transition-all opacity-80 hover:opacity-100" href="https://dk4759743.wixsite.com/mcwi" target="_blank">
<div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-amber-500/5 opacity-0 group-hover/link:opacity-100 transition-opacity"></div>
<div className="p-4 flex items-center justify-between relative z-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center text-white shadow-lg shrink-0">
<svg className="w-5 h-5" data-lucide="hard-hat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4Z"></path><path d="M6 12V7a6 6 0 0 1 12 0v5"></path><rect height="3" width="4" x="10" y="2"></rect></svg>
</div>
<div>
<div className="text-sm font-medium text-white group-hover/link:text-yellow-300 transition-colors">MCWI</div>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
<div className="text-[9px] uppercase tracking-wider font-semibold text-yellow-500">Coming Soon Under Work</div>
</div>
</div>
</div>
</div>
</a>
</div>
</div>

<div className="tilt-card md:col-span-3 rounded-[2rem] bg-[#1a1a1c] border border-white/10 p-1 overflow-hidden relative group" id="profile">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-500/20 blur-[100px] pointer-events-none rounded-full"></div>
<div className="bg-[#0e0e10] rounded-[1.8rem] p-8 h-full relative z-10 overflow-hidden">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
<div className="flex items-center gap-6">
<div className="relative">
<div className="w-20 h-20 rounded-full bg-[#4285F4] flex items-center justify-center text-3xl text-white font-medium shadow-[0_0_30px_rgba(66,133,244,0.4)]">
<svg className="w-10 h-10" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1.5 shadow-md">
<svg className="w-4 h-4 text-blue-500 fill-blue-50" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight">dk4759743</h2>
<div className="flex items-center gap-2 mt-1">
<a className="text-blue-400 text-sm hover:text-blue-300 hover:underline flex items-center gap-1" href="https://developers.google.com/profile/u/117960275884421461612" target="_blank">
                                        View Public Profile 
                                        <svg className="w-3 h-3" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
</a>
</div>
<div className="mt-3 flex items-center gap-4 text-xs font-medium text-zinc-500">
<span className="flex items-center gap-1.5"><svg className="w-3.5 h-3.5" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg> Public</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span className="flex items-center gap-1.5"><svg className="w-3.5 h-3.5" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg> 5 Badges earned</span>
</div>
</div>
</div>
<div className="flex gap-3">
<a className="flex items-center gap-2 px-4 py-2 bg-zinc-800/50 rounded-lg text-sm text-zinc-300 hover:bg-zinc-800 transition-colors border border-zinc-700/50" href="https://github.com/DarkgamerYOUTUBER" target="_blank">
<svg className="w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                GitHub
                            </a>
</div>
</div>
<div className="text-sm font-medium text-zinc-400 mb-6 uppercase tracking-wider">Favorite Badges</div>

<div className="flex overflow-x-auto pb-4 gap-4 snap-x hide-scrollbar">

<div className="snap-center min-w-[200px] bg-white rounded-2xl p-5 flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform shadow-xl relative overflow-hidden group/badge">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 opacity-50"></div>
<div className="relative w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center shadow-lg group-hover/badge:scale-110 transition-transform duration-300">
<div className="absolute inset-0 bg-[#3DDC84] opacity-20 rounded-full blur-lg"></div>
<svg className="w-8 h-8 text-[#3DDC84]" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<div>
<div className="text-sm font-bold text-gray-900 leading-tight">Android Studio User</div>
<div className="text-[11px] text-gray-500 mt-1">Dec 11, 2025</div>
</div>
</div>

<div className="snap-center min-w-[200px] bg-white rounded-2xl p-5 flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform shadow-xl relative overflow-hidden group/badge">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50"></div>
<div className="relative w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center shadow-inner group-hover/badge:scale-110 transition-transform duration-300">
<svg className="w-8 h-8 text-blue-600" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>
</div>
<div>
<div className="text-sm font-bold text-gray-900 leading-tight">Learning</div>
<div className="text-[11px] text-gray-500 mt-1">Jul 30, 2025</div>
</div>
</div>

<div className="snap-center min-w-[200px] bg-white rounded-2xl p-5 flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform shadow-xl relative overflow-hidden group/badge">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500"></div>
<div className="relative w-16 h-16 rounded-full bg-black flex items-center justify-center shadow-lg group-hover/badge:scale-110 transition-transform duration-300 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500 opacity-20"></div>
<span className="font-bold text-white text-lg tracking-tighter">I/O</span>
</div>
<div>
<div className="text-sm font-bold text-gray-900 leading-tight">I/O 2025 - Registered</div>
<div className="text-[11px] text-gray-500 mt-1">Apr 16, 2025</div>
</div>
</div>

<div className="snap-center min-w-[200px] bg-white rounded-2xl p-5 flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform shadow-xl relative overflow-hidden group/badge">
<div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-green-50 opacity-50"></div>
<div className="relative w-16 h-16 rounded-full bg-green-50 flex items-center justify-center shadow-inner group-hover/badge:scale-110 transition-transform duration-300">
<svg className="w-8 h-8 text-green-600" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78 2 2 0 0 0 0-2.83Z"></path></svg>
</div>
<div>
<div className="text-sm font-bold text-gray-900 leading-tight">Joined Google Dev</div>
<div className="text-[11px] text-gray-500 mt-1">Dec 18, 2023</div>
</div>
</div>

<div className="snap-center min-w-[200px] bg-white rounded-2xl p-5 flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform shadow-xl relative overflow-hidden group/badge">
<div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 opacity-50"></div>
<div className="relative w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center shadow-inner group-hover/badge:scale-110 transition-transform duration-300">
<div className="bg-blue-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded absolute -top-1">SDK</div>
<svg className="w-8 h-8 text-gray-600" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
<div>
<div className="text-sm font-bold text-gray-900 leading-tight">Android Platform Tools</div>
<div className="text-[11px] text-gray-500 mt-1">Dec 11, 2025</div>
</div>
</div>
</div>
</div>
</div>

<div className="tilt-card md:col-span-3 rounded-[2rem] bg-zinc-900/40 border border-white/10 p-10 overflow-hidden">
<h3 className="text-xl font-medium text-white tracking-tight mb-8 text-center">Technologies & Tools</h3>
<div className="flex flex-wrap justify-center gap-6">
<div className="group flex flex-col items-center gap-2">
<div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/20 transition-all">
<svg className="w-8 h-8 text-orange-500" data-lucide="file-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="m9 13-2 2 2 2"></path><path d="m15 13 2 2-2 2"></path></svg>
</div>
<span className="text-xs text-zinc-500 font-medium">HTML5</span>
</div>
<div className="group flex flex-col items-center gap-2">
<div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-all">
<svg className="w-8 h-8 text-blue-400" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path><path d="M9.6 4.6A2 2 0 1 1 11 8H2"></path><path d="M12.6 19.4A2 2 0 1 0 14 16H2"></path></svg>
</div>
<span className="text-xs text-zinc-500 font-medium">Tailwind</span>
</div>
<div className="group flex flex-col items-center gap-2">
<div className="w-16 h-16 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-500/20 transition-all">
<svg className="w-8 h-8 text-yellow-400" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
</div>
<span className="text-xs text-zinc-500 font-medium">JavaScript</span>
</div>
<div className="group flex flex-col items-center gap-2">
<div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all">
<svg className="w-8 h-8 text-cyan-400" data-lucide="atom" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"></path><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"></path></svg>
</div>
<span className="text-xs text-zinc-500 font-medium">React</span>
</div>
<div className="group flex flex-col items-center gap-2">
<div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:bg-green-500/20 transition-all">
<svg className="w-8 h-8 text-green-400" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<span className="text-xs text-zinc-500 font-medium">Android</span>
</div>
</div>
</div>
</div>
<footer className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-600">
<p>© 2024 Sachin Rai. Crafted with passion.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="https://twitter.com">Twitter</a>
<a className="hover:text-white transition-colors" href="https://github.com">Github</a>
<a className="hover:text-white transition-colors" href="mailto:contact@sachinrai.com">Email</a>
</div>
</footer>
</main>



    </>
  );
}
