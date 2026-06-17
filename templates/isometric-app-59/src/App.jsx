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
      

<div className="relative w-full h-full flex items-center justify-center perspective-[3000px] overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-[#F05522]/40 via-transparent to-black/30 pointer-events-none z-0"></div>


<div className="isometric-scene flex gap-16 scale-75 md:scale-90 opacity-90">

<div className="animate-scroll-up shrink-0">

<div className="flex flex-col gap-16 pb-16">

<div className="w-[320px] h-[694px] bg-slate-50 rounded-[50px] border-[12px] border-slate-900 shadow-2xl overflow-hidden relative flex flex-col">
<div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-28 bg-black rounded-b-2xl z-50"></div>
<div className="flex-1 p-8 pt-16 flex flex-col">
<div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight leading-snug">Efficiency<br/>First.</h2>
<p className="mt-4 text-sm text-slate-500 leading-relaxed font-normal">Automate your workflow with our new tools designed for speed.</p>
<div className="mt-auto space-y-4">
<div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500"><i className="w-4 h-4" data-lucide="bell"></i></div>
<div className="flex-1"><div className="h-1.5 w-16 bg-slate-200 rounded-full mb-2"></div><div className="h-1.5 w-24 bg-slate-100 rounded-full"></div></div>
</div>
<div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-500"><i className="w-4 h-4" data-lucide="check"></i></div>
<div className="flex-1"><div className="h-1.5 w-20 bg-slate-200 rounded-full mb-2"></div><div className="h-1.5 w-12 bg-slate-100 rounded-full"></div></div>
</div>
</div>
</div>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-slate-300 rounded-full z-20"></div>
</div>

<div className="w-[320px] h-[694px] bg-slate-900 rounded-[50px] border-[12px] border-slate-900 shadow-2xl overflow-hidden relative flex flex-col group">
<div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-28 bg-black rounded-b-2xl z-50"></div>
<img alt="Dark Mode" className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1614850523060-8da1d56ae167?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 p-8 pt-16 h-full flex flex-col justify-between">
<div>
<span className="text-xs font-medium text-white/60 tracking-widest uppercase">Analysis</span>
<h3 className="text-3xl text-white font-bold tracking-tighter mt-2">Data<br/>Center</h3>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
<span className="block text-white/50 text-[10px] uppercase font-bold">Revenue</span>
<span className="block text-white text-xl font-medium mt-1">+24%</span>
</div>
<div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
<span className="block text-white/50 text-[10px] uppercase font-bold">Users</span>
<span className="block text-white text-xl font-medium mt-1">1.2M</span>
</div>
</div>
</div>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/20 rounded-full z-20"></div>
</div>
</div>

<div className="flex flex-col gap-16 pb-16">

<div className="w-[320px] h-[694px] bg-slate-50 rounded-[50px] border-[12px] border-slate-900 shadow-2xl overflow-hidden relative flex flex-col">
<div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-28 bg-black rounded-b-2xl z-50"></div>
<div className="flex-1 p-8 pt-16 flex flex-col">
<div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight leading-snug">Efficiency<br/>First.</h2>
<p className="mt-4 text-sm text-slate-500 leading-relaxed font-normal">Automate your workflow with our new tools designed for speed.</p>
<div className="mt-auto space-y-4">
<div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500"><i className="w-4 h-4" data-lucide="bell"></i></div>
<div className="flex-1"><div className="h-1.5 w-16 bg-slate-200 rounded-full mb-2"></div><div className="h-1.5 w-24 bg-slate-100 rounded-full"></div></div>
</div>
<div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-500"><i className="w-4 h-4" data-lucide="check"></i></div>
<div className="flex-1"><div className="h-1.5 w-20 bg-slate-200 rounded-full mb-2"></div><div className="h-1.5 w-12 bg-slate-100 rounded-full"></div></div>
</div>
</div>
</div>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-slate-300 rounded-full z-20"></div>
</div>

<div className="w-[320px] h-[694px] bg-slate-900 rounded-[50px] border-[12px] border-slate-900 shadow-2xl overflow-hidden relative flex flex-col group">
<div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-28 bg-black rounded-b-2xl z-50"></div>
<img alt="Dark Mode" className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1614850523060-8da1d56ae167?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 p-8 pt-16 h-full flex flex-col justify-between">
<div>
<span className="text-xs font-medium text-white/60 tracking-widest uppercase">Analysis</span>
<h3 className="text-3xl text-white font-bold tracking-tighter mt-2">Data<br/>Center</h3>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
<span className="block text-white/50 text-[10px] uppercase font-bold">Revenue</span>
<span className="block text-white text-xl font-medium mt-1">+24%</span>
</div>
<div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
<span className="block text-white/50 text-[10px] uppercase font-bold">Users</span>
<span className="block text-white text-xl font-medium mt-1">1.2M</span>
</div>
</div>
</div>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/20 rounded-full z-20"></div>
</div>
</div>
</div>

<div className="animate-scroll-down shrink-0 z-10">

<div className="flex flex-col gap-16 pb-16">

<div className="w-[320px] h-[694px] bg-black rounded-[50px] border-[12px] border-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] overflow-hidden relative flex flex-col">
<div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-28 bg-black rounded-b-2xl z-50"></div>
<div className="absolute inset-0 bg-black">
<div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')] bg-cover opacity-80 mix-blend-screen animate-pulse"></div>
</div>
<div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center p-8">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-8">
<i className="w-8 h-8 text-white" data-lucide="infinity"></i>
</div>
<h1 className="text-4xl font-bold text-white tracking-tighter mb-2">Limitless.</h1>
<p className="text-white/60 text-sm max-w-[80%]">Experience the future of digital interaction.</p>
<button className="mt-12 bg-white text-black px-8 py-4 rounded-full font-semibold text-sm tracking-tight hover:scale-105 transition-transform">
                                Get Started
                            </button>
</div>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/20 rounded-full z-20"></div>
</div>

<div className="w-[320px] h-[694px] bg-white rounded-[50px] border-[12px] border-slate-900 shadow-2xl overflow-hidden relative flex flex-col">
<div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-28 bg-black rounded-b-2xl z-50"></div>
<div className="flex-1 bg-slate-50 p-4 pt-16 flex flex-col gap-4">
<div className="flex items-center justify-between px-2 mb-4">
<span className="text-lg font-bold text-slate-900 tracking-tight">Messages</span>
<i className="w-5 h-5 text-blue-500" data-lucide="edit"></i>
</div>
<div className="space-y-3">
<div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex gap-3">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold text-xs">JD</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1"><span className="text-xs font-semibold text-slate-900">John Doe</span><span className="text-[10px] text-slate-400">10:42</span></div>
<p className="text-xs text-slate-500 line-clamp-1">Hey, can we schedule a call for the new project?</p>
</div>
</div>
<div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex gap-3">
<div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-semibold text-xs">AS</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1"><span className="text-xs font-semibold text-slate-900">Anna Smith</span><span className="text-[10px] text-slate-400">09:15</span></div>
<p className="text-xs text-slate-500 line-clamp-1">The designs look fantastic! I'll send feedback.</p>
</div>
</div>
<div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex gap-3">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-xs">TM</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1"><span className="text-xs font-semibold text-slate-900">Team Marketing</span><span className="text-[10px] text-slate-400">Yesterday</span></div>
<p className="text-xs text-slate-500 line-clamp-1">New campaign assets are ready for review.</p>
</div>
</div>
</div>
</div>
<div className="h-20 bg-white border-t border-slate-100 flex items-start pt-4 px-8 justify-between text-slate-300">
<i className="w-6 h-6 text-blue-500" data-lucide="message-square"></i>
<i className="w-6 h-6" data-lucide="users"></i>
<i className="w-6 h-6" data-lucide="phone"></i>
<i className="w-6 h-6" data-lucide="settings"></i>
</div>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-slate-300 rounded-full z-20"></div>
</div>
</div>

<div className="flex flex-col gap-16 pb-16">

<div className="w-[320px] h-[694px] bg-black rounded-[50px] border-[12px] border-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] overflow-hidden relative flex flex-col">
<div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-28 bg-black rounded-b-2xl z-50"></div>
<div className="absolute inset-0 bg-black">
<div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')] bg-cover opacity-80 mix-blend-screen animate-pulse"></div>
</div>
<div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center p-8">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-8">
<i className="w-8 h-8 text-white" data-lucide="infinity"></i>
</div>
<h1 className="text-4xl font-bold text-white tracking-tighter mb-2">Limitless.</h1>
<p className="text-white/60 text-sm max-w-[80%]">Experience the future of digital interaction.</p>
<button className="mt-12 bg-white text-black px-8 py-4 rounded-full font-semibold text-sm tracking-tight hover:scale-105 transition-transform">
                                Get Started
                            </button>
</div>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/20 rounded-full z-20"></div>
</div>

<div className="w-[320px] h-[694px] bg-white rounded-[50px] border-[12px] border-slate-900 shadow-2xl overflow-hidden relative flex flex-col">
<div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-28 bg-black rounded-b-2xl z-50"></div>
<div className="flex-1 bg-slate-50 p-4 pt-16 flex flex-col gap-4">
<div className="flex items-center justify-between px-2 mb-4">
<span className="text-lg font-bold text-slate-900 tracking-tight">Messages</span>
<i className="w-5 h-5 text-blue-500" data-lucide="edit"></i>
</div>
<div className="space-y-3">
<div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex gap-3">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold text-xs">JD</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1"><span className="text-xs font-semibold text-slate-900">John Doe</span><span className="text-[10px] text-slate-400">10:42</span></div>
<p className="text-xs text-slate-500 line-clamp-1">Hey, can we schedule a call for the new project?</p>
</div>
</div>
<div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex gap-3">
<div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-semibold text-xs">AS</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1"><span className="text-xs font-semibold text-slate-900">Anna Smith</span><span className="text-[10px] text-slate-400">09:15</span></div>
<p className="text-xs text-slate-500 line-clamp-1">The designs look fantastic! I'll send feedback.</p>
</div>
</div>
<div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex gap-3">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-xs">TM</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1"><span className="text-xs font-semibold text-slate-900">Team Marketing</span><span className="text-[10px] text-slate-400">Yesterday</span></div>
<p className="text-xs text-slate-500 line-clamp-1">New campaign assets are ready for review.</p>
</div>
</div>
</div>
</div>
<div className="h-20 bg-white border-t border-slate-100 flex items-start pt-4 px-8 justify-between text-slate-300">
<i className="w-6 h-6 text-blue-500" data-lucide="message-square"></i>
<i className="w-6 h-6" data-lucide="users"></i>
<i className="w-6 h-6" data-lucide="phone"></i>
<i className="w-6 h-6" data-lucide="settings"></i>
</div>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-slate-300 rounded-full z-20"></div>
</div>
</div>
</div>

<div className="animate-scroll-up shrink-0">

<div className="flex flex-col gap-16 pb-16">

<div className="w-[320px] h-[694px] bg-white rounded-[50px] border-[12px] border-slate-900 shadow-2xl overflow-hidden relative flex flex-col">
<div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-28 bg-black rounded-b-2xl z-50"></div>
<div className="flex-1 p-8 pt-16 flex flex-col">
<div className="flex justify-between items-start mb-8">
<div className="w-20 h-20 rounded-full bg-slate-100 overflow-hidden border-2 border-white shadow-lg">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold uppercase rounded-full tracking-wide">Pro</div>
</div>
<h2 className="text-2xl font-bold text-slate-900 tracking-tight">Sarah<br/>Connor</h2>
<p className="text-sm text-slate-500 mt-2">Product Designer</p>
<div className="mt-8 space-y-2">
<div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors cursor-pointer">
<div className="flex items-center gap-3"><i className="w-4 h-4 text-slate-400" data-lucide="pie-chart"></i><span className="text-xs font-semibold text-slate-700">Analytics</span></div>
<i className="w-4 h-4 text-slate-300" data-lucide="chevron-right"></i>
</div>
<div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors cursor-pointer">
<div className="flex items-center gap-3"><i className="w-4 h-4 text-slate-400" data-lucide="credit-card"></i><span className="text-xs font-semibold text-slate-700">Billing</span></div>
<i className="w-4 h-4 text-slate-300" data-lucide="chevron-right"></i>
</div>
<div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors cursor-pointer">
<div className="flex items-center gap-3"><i className="w-4 h-4 text-slate-400" data-lucide="lock"></i><span className="text-xs font-semibold text-slate-700">Security</span></div>
<i className="w-4 h-4 text-slate-300" data-lucide="chevron-right"></i>
</div>
</div>
</div>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-slate-300 rounded-full z-20"></div>
</div>

<div className="w-[320px] h-[694px] bg-slate-50 rounded-[50px] border-[12px] border-slate-900 shadow-2xl overflow-hidden relative flex flex-col">
<div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-28 bg-black rounded-b-2xl z-50"></div>
<div className="flex-1 p-8 pt-16 flex flex-col items-center text-center">
<div className="mt-8 relative">
<div className="absolute top-0 left-0 w-32 h-32 bg-yellow-300 rounded-full blur-3xl opacity-50"></div>
<i className="w-24 h-24 text-yellow-500 relative z-10" data-lucide="sun"></i>
</div>
<h1 className="text-6xl font-bold text-slate-900 mt-8 tracking-tighter">72°</h1>
<p className="text-slate-400 font-medium tracking-wide uppercase text-xs mt-2">San Francisco, CA</p>
<div className="mt-12 grid grid-cols-3 gap-4 w-full">
<div className="flex flex-col items-center gap-2"><span className="text-[10px] font-bold text-slate-400">MON</span><i className="w-5 h-5 text-slate-600" data-lucide="cloud-sun"></i><span className="text-xs font-semibold text-slate-800">68°</span></div>
<div className="flex flex-col items-center gap-2"><span className="text-[10px] font-bold text-slate-400">TUE</span><i className="w-5 h-5 text-slate-600" data-lucide="sun"></i><span className="text-xs font-semibold text-slate-800">74°</span></div>
<div className="flex flex-col items-center gap-2"><span className="text-[10px] font-bold text-slate-400">WED</span><i className="w-5 h-5 text-slate-600" data-lucide="cloud"></i><span className="text-xs font-semibold text-slate-800">65°</span></div>
</div>
</div>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-slate-300 rounded-full z-20"></div>
</div>
</div>

<div className="flex flex-col gap-16 pb-16">

<div className="w-[320px] h-[694px] bg-white rounded-[50px] border-[12px] border-slate-900 shadow-2xl overflow-hidden relative flex flex-col">
<div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-28 bg-black rounded-b-2xl z-50"></div>
<div className="flex-1 p-8 pt-16 flex flex-col">
<div className="flex justify-between items-start mb-8">
<div className="w-20 h-20 rounded-full bg-slate-100 overflow-hidden border-2 border-white shadow-lg">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold uppercase rounded-full tracking-wide">Pro</div>
</div>
<h2 className="text-2xl font-bold text-slate-900 tracking-tight">Sarah<br/>Connor</h2>
<p className="text-sm text-slate-500 mt-2">Product Designer</p>
<div className="mt-8 space-y-2">
<div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors cursor-pointer">
<div className="flex items-center gap-3"><i className="w-4 h-4 text-slate-400" data-lucide="pie-chart"></i><span className="text-xs font-semibold text-slate-700">Analytics</span></div>
<i className="w-4 h-4 text-slate-300" data-lucide="chevron-right"></i>
</div>
<div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors cursor-pointer">
<div className="flex items-center gap-3"><i className="w-4 h-4 text-slate-400" data-lucide="credit-card"></i><span className="text-xs font-semibold text-slate-700">Billing</span></div>
<i className="w-4 h-4 text-slate-300" data-lucide="chevron-right"></i>
</div>
<div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors cursor-pointer">
<div className="flex items-center gap-3"><i className="w-4 h-4 text-slate-400" data-lucide="lock"></i><span className="text-xs font-semibold text-slate-700">Security</span></div>
<i className="w-4 h-4 text-slate-300" data-lucide="chevron-right"></i>
</div>
</div>
</div>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-slate-300 rounded-full z-20"></div>
</div>

<div className="w-[320px] h-[694px] bg-slate-50 rounded-[50px] border-[12px] border-slate-900 shadow-2xl overflow-hidden relative flex flex-col">
<div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-28 bg-black rounded-b-2xl z-50"></div>
<div className="flex-1 p-8 pt-16 flex flex-col items-center text-center">
<div className="mt-8 relative">
<div className="absolute top-0 left-0 w-32 h-32 bg-yellow-300 rounded-full blur-3xl opacity-50"></div>
<i className="w-24 h-24 text-yellow-500 relative z-10" data-lucide="sun"></i>
</div>
<h1 className="text-6xl font-bold text-slate-900 mt-8 tracking-tighter">72°</h1>
<p className="text-slate-400 font-medium tracking-wide uppercase text-xs mt-2">San Francisco, CA</p>
<div className="mt-12 grid grid-cols-3 gap-4 w-full">
<div className="flex flex-col items-center gap-2"><span className="text-[10px] font-bold text-slate-400">MON</span><i className="w-5 h-5 text-slate-600" data-lucide="cloud-sun"></i><span className="text-xs font-semibold text-slate-800">68°</span></div>
<div className="flex flex-col items-center gap-2"><span className="text-[10px] font-bold text-slate-400">TUE</span><i className="w-5 h-5 text-slate-600" data-lucide="sun"></i><span className="text-xs font-semibold text-slate-800">74°</span></div>
<div className="flex flex-col items-center gap-2"><span className="text-[10px] font-bold text-slate-400">WED</span><i className="w-5 h-5 text-slate-600" data-lucide="cloud"></i><span className="text-xs font-semibold text-slate-800">65°</span></div>
</div>
</div>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-slate-300 rounded-full z-20"></div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
