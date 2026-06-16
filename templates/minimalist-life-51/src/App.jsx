import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 border-b border-gray-200/60 glass-panel">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gray-900 rounded-md flex items-center justify-center text-white">
<iconify-icon icon="solar:calendar-minimalistic-linear" width="16"></iconify-icon>
</div>
<span className="font-medium tracking-tight text-sm text-gray-900">LifePlanner</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#">Manifesto</a>
<a className="hover:text-gray-900 transition-colors" href="#">Methodology</a>
<a className="hover:text-gray-900 transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors hidden sm:block" href="#">Log in</a>
<button className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-800 transition-all shadow-[0_2px_10px_-2px_rgba(0,0,0,0.2)]">
                    Get Access
                </button>
</div>
</div>
</nav>

<section className="pt-32 pb-20 px-6 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-gray-100 to-transparent rounded-full blur-3xl -z-10 opacity-60"></div>
<div className="max-w-4xl mx-auto text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-4">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-gray-600 uppercase tracking-wide">Version 2.0 is live</span>
</div>
<h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-[1.1] tracking-tight">
                Design your life, <br/>
<span className="italic text-gray-400">one year at a time.</span>
</h1>
<p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                Stop getting lost in the daily grind. Zoom out, define your decade, and track the goals that actually matter to your legacy.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="w-full sm:w-auto bg-gray-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-gray-200">
                    Start Planning Free
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="w-full sm:w-auto bg-white text-gray-700 border border-gray-200 px-8 py-3.5 rounded-full font-medium hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                    Watch Demo
                </button>
</div>
</div>

<div className="mt-20 max-w-5xl mx-auto relative z-10">
<div className="bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] border border-gray-200 overflow-hidden">

<div className="bg-gray-50/50 border-b border-gray-100 px-4 py-3 flex items-center gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
</div>
</div>

<div className="flex h-[400px] md:h-[500px] overflow-hidden bg-[#FAFAFA]">

<div className="hidden md:flex w-1/4 border-r border-dashed border-gray-200 flex-col items-center pt-8 opacity-40">
<h3 className="font-serif italic text-4xl text-gray-400">2025</h3>
</div>

<div className="flex-1 w-full border-r border-dashed border-gray-200 flex flex-col items-center pt-8 bg-white relative">
<h3 className="font-serif italic text-5xl text-gray-900 mb-8">2026</h3>
<div className="w-full max-w-md px-6 space-y-3">

<div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
<div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
<iconify-icon className="text-white text-xs opacity-0" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-gray-800">Launch the startup</span>
</div>

<div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
<div className="w-5 h-5 rounded-full border border-gray-900 bg-gray-900 flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-gray-800 line-through text-gray-400">Run a marathon</span>
</div>

<div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm opacity-60">
<div className="w-5 h-5 rounded-full border border-gray-300"></div>
<span className="text-sm text-gray-400">Write 50,000 words</span>
</div>
</div>
</div>

<div className="hidden md:flex w-1/4 border-r border-dashed border-gray-200 flex-col items-center pt-8 opacity-40">
<h3 className="font-serif italic text-4xl text-gray-400">2027</h3>
</div>
</div>
</div>

<div className="absolute -right-4 top-20 bg-white p-2 rounded-lg shadow-lg border border-gray-100 rotate-6 hidden lg:block animate-bounce">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:user-linear"></iconify-icon>
</div>
<div className="text-xs">
<div className="font-semibold text-gray-900">Collaborate</div>
<div className="text-gray-500">Share with mentors</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-gray-200/60 bg-white py-12">
<div className="max-w-6xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-gray-500 mb-8 uppercase tracking-widest">Trusted by visionaries at</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">

<div className="h-6 flex items-center gap-2 font-bold text-lg"><div className="w-4 h-4 bg-gray-900 rounded-sm"></div> Acme</div>
<div className="h-6 flex items-center gap-2 font-bold text-lg"><div className="w-4 h-4 rounded-full border-2 border-gray-900"></div> Sphere</div>
<div className="h-6 flex items-center gap-2 font-bold text-lg"><div className="w-4 h-4 bg-gray-900 rotate-45"></div> Nexus</div>
<div className="h-6 flex items-center gap-2 font-bold text-lg"><div className="w-4 h-4 border-2 border-gray-900 rounded-sm"></div> Vertex</div>
<div className="h-6 flex items-center gap-2 font-bold text-lg"><div className="w-4 h-4 bg-gray-900 rounded-tr-lg"></div> Orbit</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto">
<div className="mb-16">
<h2 className="font-serif italic text-4xl text-gray-900 mb-4">Everything you need,<br/>nothing you don't.</h2>
<p className="text-gray-500 max-w-md">We stripped away the clutter of traditional productivity tools to focus purely on high-level direction.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 bg-white rounded-2xl border border-gray-200/60 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 text-gray-900 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:calendar-date-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-3">Multi-Year View</h3>
<p className="text-gray-500 text-sm leading-relaxed">Stop thinking in days. Visualize your life in 5-year increments to ensure you're moving the needle on big goals.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-gray-200/60 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 text-gray-900 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:target-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-3">Essential Focus</h3>
<p className="text-gray-500 text-sm leading-relaxed">Limit yourself to 5 key objectives per year. Constraint breeds creativity and ensures completion.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-gray-200/60 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 text-gray-900 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-3">Private &amp; Secure</h3>
<p className="text-gray-500 text-sm leading-relaxed">Your dreams are personal. Data is encrypted locally and never sold to advertisers.</p>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-gray-200 overflow-hidden relative">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16 md:gap-24">

<div className="flex-1 space-y-10">
<h2 className="font-serif italic text-4xl md:text-5xl text-gray-900 tracking-tight leading-tight">From chaos to clarity.</h2>
<div className="space-y-0 relative">

<div className="absolute left-3.5 top-2 bottom-6 w-[1px] bg-gray-200"></div>

<div className="flex gap-6 relative group pb-10">
<div className="flex-none pt-1 z-10">
<div className="w-7 h-7 rounded-full bg-white border border-gray-200 text-gray-400 flex items-center justify-center text-xs shadow-sm group-hover:border-gray-900 group-hover:text-gray-900 transition-colors">1</div>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-1">Audit your past</h4>
<p className="text-gray-500 text-sm leading-relaxed">Review previous years to understand your true velocity and identify patterns.</p>
</div>
</div>

<div className="flex gap-6 relative group pb-10">
<div className="flex-none pt-1 z-10">
<div className="w-7 h-7 rounded-full bg-gray-900 border border-gray-900 text-white flex items-center justify-center text-xs shadow-md">2</div>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-1">Define the milestone</h4>
<p className="text-gray-500 text-sm leading-relaxed">Set the singular "North Star" objective that makes everything else secondary.</p>
</div>
</div>

<div className="flex gap-6 relative group">
<div className="flex-none pt-1 z-10">
<div className="w-7 h-7 rounded-full bg-white border border-gray-200 text-gray-400 flex items-center justify-center text-xs shadow-sm group-hover:border-gray-900 group-hover:text-gray-900 transition-colors">3</div>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-1">Execute daily</h4>
<p className="text-gray-500 text-sm leading-relaxed">Break down the decade into quarters, then weeks, then daily actions.</p>
</div>
</div>
</div>
</div>

<div className="flex-1 w-full relative">

<div className="relative w-full max-w-sm mx-auto perspective-1000">

<div className="absolute top-0 left-8 w-full h-full bg-gray-50 rounded-2xl border border-gray-100 -rotate-3 scale-95 origin-bottom-right"></div>

<div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-xl shadow-gray-200/50">
<div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-900" icon="solar:flag-linear"></iconify-icon>
<span className="font-semibold text-sm text-gray-900">Life Map</span>
</div>
<span className="text-xs font-mono text-gray-400">v2.0</span>
</div>
<div className="space-y-4">

<div className="flex items-start gap-3">
<div className="mt-1 w-2 h-2 rounded-full bg-gray-200"></div>
<div className="flex-1">
<div className="h-2 w-24 bg-gray-100 rounded mb-2"></div>
<div className="h-1.5 w-16 bg-gray-50 rounded"></div>
</div>
</div>

<div className="ml-1 w-[1px] h-4 bg-gray-100"></div>

<div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
<div className="mt-1 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_0_2px_rgba(16,185,129,0.2)]"></div>
<div className="flex-1">
<span className="block text-xs font-medium text-gray-900 mb-0.5">Financial Independence</span>
<span className="block text-[10px] text-gray-500">Target: Dec 2028</span>
</div>
<iconify-icon className="text-emerald-500 text-lg" icon="solar:graph-up-linear"></iconify-icon>
</div>

<div className="ml-1 w-[1px] h-4 bg-gray-100"></div>

<div className="flex items-start gap-3 opacity-50">
<div className="mt-1 w-2 h-2 rounded-full border border-gray-300"></div>
<div className="flex-1">
<div className="h-2 w-20 bg-gray-100 rounded mb-2"></div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 -right-6 bg-white border border-gray-100 p-3 rounded-xl shadow-lg flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
<div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white">
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-bold text-gray-900">On Track</div>
<div className="text-[10px] text-gray-500">Ahead of schedule</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 text-center">
<div className="max-w-2xl mx-auto space-y-8">
<h2 className="font-serif italic text-5xl text-gray-900 tracking-tight">Ready to begin?</h2>
<p className="text-gray-500">Join 10,000+ planners who have taken control of their timeline.</p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<input className="w-full sm:w-80 px-4 py-3 rounded-full bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-all text-sm" placeholder="Enter your email" type="email"/>
<button className="w-full sm:w-auto bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                    Create Account
                </button>
</div>
<p className="text-xs text-gray-400 mt-4">Free 14-day trial. No credit card required.</p>
</div>
</section>

<footer className="border-t border-gray-200 bg-white pt-12 pb-8">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-gray-900 rounded-md flex items-center justify-center text-white">
<iconify-icon icon="solar:calendar-minimalistic-linear" width="12"></iconify-icon>
</div>
<span className="font-medium text-sm">LifePlanner © 2024</span>
</div>
<div className="flex gap-6 text-sm text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-gray-900 transition-colors" href="#">Terms</a>
<a className="hover:text-gray-900 transition-colors" href="#">Twitter</a>
<a className="hover:text-gray-900 transition-colors" href="#">Instagram</a>
</div>
</div>
</footer>

    </>
  );
}
