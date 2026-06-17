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
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-200/60 bg-white/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-md bg-gradient-to-br from-violet-600 to-violet-800 flex items-center justify-center text-white shadow-sm">
<span className="font-bold text-xs tracking-tighter">S</span>
</div>
<span className="font-semibold text-zinc-900 tracking-tight text-sm">SmartSteps</span>
</div>
<a className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-900 text-white text-xs font-medium rounded-full hover:bg-zinc-800 transition-all" href="https://wa.me/971585755196?text=Hello%20I%20want%20to%20book%20a%20demo" rel="noopener noreferrer" target="_blank">
<span>Book Demo</span>
<iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>
</nav>

<main className="pt-24 pb-20 overflow-hidden relative">

<div className="blob bg-violet-200 w-96 h-96 rounded-full top-0 -left-20"></div>
<div className="blob bg-amber-100 w-80 h-80 rounded-full bottom-0 -right-20"></div>

<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center mb-4">

<div className="relative z-10 order-2 lg:order-1">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-50 border border-violet-100 text-violet-700 text-[10px] font-semibold tracking-wide uppercase mb-2">
<iconify-icon className="text-amber-500 fill-amber-500" icon="lucide:zap" width="12"></iconify-icon>
                     Grades 5 - 12
                </div>
<div className="flex flex-col sm:flex-row gap-3 mb-8">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-500/20 transition-all text-sm" href="https://wa.me/971585755196?text=Hello%20I%20want%20to%20book%20a%20demo" rel="noopener noreferrer" target="_blank">
<iconify-icon icon="lucide:message-circle" width="16"></iconify-icon>
<span>Chat on WhatsApp</span>
</a>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-zinc-700 border border-zinc-200 font-medium rounded-lg hover:bg-zinc-50 transition-all text-sm" href="tel:+971585755196">
<iconify-icon icon="lucide:phone" width="16"></iconify-icon>
<span>Contact Us</span>
</a>
</div>
<h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 tracking-tight leading-[1.1] mb-6">
                    Interactive tuition.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Real results.</span>
</h1>
<p className="text-lg text-zinc-500 leading-relaxed mb-8 max-w-md font-light">
                    Experience personalized one-on-one learning from the comfort of home. We turn complex subjects &amp;  concepts into clear, confident knowledge.
                </p>
<div className="mt-8 flex items-center gap-4 text-xs text-zinc-400 font-medium">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-emerald-500" icon="lucide:shield-check" width="14"></iconify-icon>
<span>Verified Tutor</span>
</div>
<div className="w-1 h-1 rounded-full bg-zinc-300"></div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-blue-500" icon="lucide:globe" width="14"></iconify-icon>
<span>India &amp; GCC</span>
</div>
</div>
</div>

<div className="relative order-1 lg:order-2 perspective-1000">
<div className="laptop-mockup relative mx-auto bg-zinc-900 rounded-xl p-2 w-full max-w-md aspect-[16/10] ring-1 ring-zinc-900/10">
<div className="bg-zinc-800 w-full h-full rounded-lg overflow-hidden relative flex flex-col">
<div className="h-6 bg-zinc-900/50 flex items-center px-3 gap-1.5">
<div className="w-2 h-2 rounded-full bg-red-500/80"></div>
<div className="w-2 h-2 rounded-full bg-amber-500/80"></div>
<div className="w-2 h-2 rounded-full bg-emerald-500/80"></div>
</div>
<div className="flex-1 p-3 grid grid-cols-4 gap-3">
<div className="col-span-3 bg-zinc-700 rounded-md relative overflow-hidden flex items-center justify-center group">
<div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 z-10"></div>
<div className="flex flex-col items-center gap-2 opacity-80">
<div className="w-16 h-16 rounded-full bg-zinc-200 border-2 border-violet-400 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-zinc-400 translate-y-1" icon="lucide:user" width="32"></iconify-icon>
</div>
<div className="h-2 w-20 bg-zinc-600 rounded-full"></div>
<div className="h-2 w-12 bg-zinc-600 rounded-full"></div>
</div>
<div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-white font-medium z-20">Tutor (Live)</div>
</div>
<div className="flex flex-col gap-3 h-full">
<div className="flex-1 bg-zinc-700 rounded-md relative flex items-center justify-center">
<iconify-icon className="text-zinc-500" icon="lucide:user" width="20"></iconify-icon>
<div className="absolute bottom-1 right-1 w-2 h-2 bg-emerald-500 rounded-full border border-zinc-700"></div>
</div>
<div className="flex-1 bg-zinc-700 rounded-md flex items-center justify-center flex-col gap-1">
<iconify-icon className="text-zinc-500" icon="lucide:message-square" width="16"></iconify-icon>
<span className="text-[8px] text-zinc-400">Chat</span>
</div>
</div>
</div>
</div>
</div>
<div className="w-[110%] h-3 bg-zinc-800 rounded-b-xl mx-auto -mt-1 relative z-10 shadow-xl"></div>
<div className="absolute -right-4 -bottom-8 bg-amber-50 p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-amber-100 floating-icon z-20 hidden sm:block">
<iconify-icon className="text-amber-600" icon="lucide:book-open" width="32"></iconify-icon>
</div>
<div className="absolute -left-8 top-10 bg-white p-3 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-zinc-100 floating-icon-delayed z-20 hidden sm:block">
<iconify-icon className="text-violet-600" icon="lucide:calculator" width="24"></iconify-icon>
</div>
<div className="absolute right-10 -top-6 bg-emerald-50 px-4 py-2 rounded-lg shadow-sm border border-emerald-100 transform rotate-6 z-0">
<span className="text-emerald-700 font-bold text-lg">A+</span>
</div>
</div>
</div>

<div className="max-w-4xl mx-auto px-6" id="curriculum">
<div className="glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
<iconify-icon icon="lucide:library" width="200"></iconify-icon>
</div>
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-2xl font-bold text-zinc-900 tracking-tight mb-4">Focused Curriculum</h2>
<p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                            We don't teach everything. We specialize in the subjects that matter most for your academic foundation.
                        </p>
<div className="space-y-4">
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:pen" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-zinc-900">English</h3>
<p className="text-xs text-zinc-500 mt-1">Grammer, Literature, Spoken English.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:flask-conical" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-zinc-900">Science</h3>
<p className="text-xs text-zinc-500 mt-1">EVS, Biology, Physics &amp; Chemistry.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:briefcase" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-zinc-900">Commerce</h3>
<p className="text-xs text-zinc-500 mt-1">Business Studies, Accounting &amp; Economics.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:languages" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-zinc-900">Bilingual Support</h3>
<p className="text-xs text-zinc-500 mt-1">Classes in <b>English</b> with <b>Malayalam</b> explanations available.</p>
</div>
</div>
</div>
</div>

<div className="relative h-full min-h-[200px] flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-violet-50/50 to-amber-50/50 rounded-xl"></div>
<div className="relative w-48 h-60 bg-white rounded-r-lg border-l-4 border-l-zinc-300 shadow-xl flex flex-col p-4 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
<div className="absolute left-1 top-4 w-2 h-2 bg-zinc-400 rounded-full"></div>
<div className="absolute left-1 top-10 w-2 h-2 bg-zinc-400 rounded-full"></div>
<div className="absolute left-1 top-16 w-2 h-2 bg-zinc-400 rounded-full"></div>
<div className="absolute left-1 bottom-4 w-2 h-2 bg-zinc-400 rounded-full"></div>
<div className="h-4 border-b border-zinc-100 w-full mt-4"></div>
<div className="h-4 border-b border-zinc-100 w-full"></div>
<div className="h-4 border-b border-zinc-100 w-full"></div>
<div className="h-4 border-b border-zinc-100 w-full"></div>
<div className="mt-4 flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="lucide:check-circle" width="16"></iconify-icon>
<div className="h-1.5 w-20 bg-emerald-100 rounded"></div>
</div>
<div className="mt-2 flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="lucide:check-circle" width="16"></iconify-icon>
<div className="h-1.5 w-16 bg-emerald-100 rounded"></div>
</div>
</div>
<div className="absolute -right-2 bottom-8 w-40 h-3 bg-zinc-800 rounded-full transform -rotate-45 shadow-lg flex items-center px-2">
<div className="w-8 h-full bg-violet-500 rounded-l-full"></div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-zinc-200">
<div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-2">
<div className="text-center md:text-left">
<h4 className="text-lg font-semibold text-zinc-900 tracking-tight">Ready to improve grades?</h4>
<p className="text-xs text-zinc-500 mt-1 max-w-xs">Limited slots. Contact today to discuss your child's requirements.</p>
</div>
<div className="flex items-center gap-4">
<a className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 transition-all shadow-sm" href="https://wa.me/971585755196?text=Hello%20I%20want%20to%20book%20a%20demo" rel="noopener noreferrer" target="_blank">
<iconify-icon icon="lucide:calendar" width="16"></iconify-icon>
<span>Book Free Demo</span>
</a>
</div>
<div className="flex items-center gap-4">
<a className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-1 border-purple-800 text-zinc-600 text-sm font-medium rounded-lg transition-all shadow-sm" href="https://instagram.com/smartsteps_online" rel="noopener noreferrer" target="_blank">
<iconify-icon icon="skill-icons:instagram" width="20"></iconify-icon>
<span>Message on Instagram</span>
</a>
</div>
</div>
<div className="border-t border-zinc-100 py-6 bg-zinc-50/50">
<div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-[10px] text-zinc-400 uppercase tracking-wider">
<p>© 2026 SmartSteps</p>
<div className="flex gap-4">
<span>All rights reserved</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
