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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-600 rounded-md"></div>
<span className="text-white font-medium tracking-tight text-sm">MINDCHEATSHEET</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#models">Models</a>
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">Log in</a>
<a className="bg-white/10 hover:bg-white/15 text-white text-xs font-medium px-4 py-2 rounded-full border border-white/10 transition-all" href="#">Get Started</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10 opacity-60"></div>
<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6">
<span className="flex h-2 w-2 rounded-full bg-purple-500"></span>
<span className="text-xs font-medium text-purple-300 tracking-wide uppercase">New: Notion Integration</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                    Think clearer. <br/>
<span className="text-neutral-500">Work smarter.</span> <br/>
<span className="text-gradient">Decide faster.</span>
</h1>
<p className="text-lg text-neutral-400 mb-8 max-w-lg leading-relaxed">
                    MindCheatSheet is a curated library of mental models — simplified, visualized, and ready for real life application in product and business.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-[#7B61FF] hover:bg-[#5B4BFF] text-white px-8 py-3.5 rounded-lg text-sm font-medium transition-all shadow-[0_0_20px_rgba(123,97,255,0.4)] hover:shadow-[0_0_30px_rgba(123,97,255,0.6)] flex items-center justify-center gap-2">
                        Explore Mental Models
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="bg-transparent hover:bg-white/5 text-white px-8 py-3.5 rounded-lg text-sm font-medium border border-white/20 transition-all flex items-center justify-center gap-2 group">
                        Get Free Cheat Sheet
                        <i className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" data-lucide="download"></i>
</button>
</div>
</div>

<div className="relative h-[400px] hidden lg:block perspective-1000">

<div className="absolute top-10 right-10 w-64 p-5 glass-card rounded-xl transform rotate-6 animate-[float_6s_ease-in-out_infinite] z-10">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">
<i className="w-4 h-4" data-lucide="timer"></i>
</div>
<span className="text-white font-medium text-sm">Pomodoro</span>
</div>
<div className="h-2 w-full bg-neutral-800 rounded-full mb-2 overflow-hidden">
<div className="h-full w-2/3 bg-red-500 rounded-full"></div>
</div>
<p className="text-xs text-neutral-500">25m focus block active.</p>
</div>

<div className="absolute top-1/2 left-10 w-64 p-5 glass-card rounded-xl transform -rotate-3 -translate-y-1/2 animate-[float_5s_ease-in-out_infinite_1s] z-20 border-purple-500/30 shadow-2xl">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
<i className="w-4 h-4" data-lucide="grid"></i>
</div>
<span className="text-white font-medium text-sm">Eisenhower Matrix</span>
</div>
<div className="grid grid-cols-2 gap-1 h-16 w-full opacity-80">
<div className="bg-green-500/20 rounded border border-green-500/30 flex items-center justify-center text-[10px] text-green-300">Do</div>
<div className="bg-blue-500/20 rounded border border-blue-500/30 flex items-center justify-center text-[10px] text-blue-300">Decide</div>
<div className="bg-orange-500/20 rounded border border-orange-500/30 flex items-center justify-center text-[10px] text-orange-300">Delegate</div>
<div className="bg-red-500/20 rounded border border-red-500/30 flex items-center justify-center text-[10px] text-red-300">Delete</div>
</div>
</div>

<div className="absolute bottom-10 right-20 w-64 p-5 glass-card rounded-xl transform rotate-2 animate-[float_7s_ease-in-out_infinite_0.5s] z-10">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
<i className="w-4 h-4" data-lucide="help-circle"></i>
</div>
<span className="text-white font-medium text-sm">5 Whys</span>
</div>
<div className="space-y-1.5">
<div className="h-1.5 w-full bg-neutral-800 rounded-full"></div>
<div className="h-1.5 w-4/5 bg-neutral-800 rounded-full"></div>
<div className="h-1.5 w-3/5 bg-neutral-800 rounded-full"></div>
<div className="h-1.5 w-2/5 bg-amber-500/50 rounded-full"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-y border-white/5 relative">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-purple-400 text-xs font-medium tracking-widest uppercase mb-3 block">The Problem</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Thinking isn’t hard — <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">chaos is.</span></h2>
<p className="text-neutral-400 leading-relaxed">Most professionals suffer from decision fatigue. You have the skills, but the frameworks to apply them are scattered across hundreds of blog posts and textbooks.</p>
</div>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors group">
<i className="w-6 h-6 text-neutral-600 group-hover:text-red-400 transition-colors shrink-0 mt-0.5" data-lucide="x-circle"></i>
<div>
<h3 className="text-white text-sm font-medium mb-1">Framework Overload</h3>
<p className="text-sm text-neutral-500">Too many frameworks exist, making it impossible to know which one fits your current problem.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors group">
<i className="w-6 h-6 text-neutral-600 group-hover:text-red-400 transition-colors shrink-0 mt-0.5" data-lucide="x-circle"></i>
<div>
<h3 className="text-white text-sm font-medium mb-1">Scattered Knowledge</h3>
<p className="text-sm text-neutral-500">Productivity tricks are scattered everywhere, from YouTube to dusty management books.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors group">
<i className="w-6 h-6 text-neutral-600 group-hover:text-red-400 transition-colors shrink-0 mt-0.5" data-lucide="x-circle"></i>
<div>
<h3 className="text-white text-sm font-medium mb-1">Theory without Application</h3>
<p className="text-sm text-neutral-500">Long articles explain the theory perfectly but fail to show you how to apply it on Monday morning.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">The Solution: <span className="text-purple-400">MindCheatSheet</span></h2>
<p className="text-lg text-neutral-400">A simple, no-fluff library of mental models designed to help you understand complex concepts in minutes and apply them instantly.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<h3 className="text-white font-medium mb-2 text-sm">Understand Fast</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Grasp any model in under 2 minutes with visual summaries.</p>
</div>

<div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
<i className="w-5 h-5" data-lucide="compass"></i>
</div>
<h3 className="text-white font-medium mb-2 text-sm">Right Context</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Know exactly which model fits your current situation.</p>
</div>

<div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 mb-4">
<i className="w-5 h-5" data-lucide="file-check"></i>
</div>
<h3 className="text-white font-medium mb-2 text-sm">Ready Templates</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Downloadable templates you can start filling out immediately.</p>
</div>

<div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-4">
<i className="w-5 h-5" data-lucide="search"></i>
</div>
<h3 className="text-white font-medium mb-2 text-sm">Goal Search</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Find tools based on goals like "Debug," "Prioritize," or "Innovate."</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20 border-y border-white/5" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">

<div className="bg-neutral-950 p-8 group hover:bg-neutral-900 transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all"></div>
<i className="w-8 h-8 text-neutral-400 mb-6 group-hover:text-purple-400 transition-colors" data-lucide="library"></i>
<h3 className="text-white font-semibold text-lg mb-2">100+ Models Library</h3>
<p className="text-sm text-neutral-500">Short summaries, strictly categorized by purpose and difficulty level.</p>
</div>

<div className="bg-neutral-950 p-8 group hover:bg-neutral-900 transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
<i className="w-8 h-8 text-neutral-400 mb-6 group-hover:text-blue-400 transition-colors" data-lucide="clock"></i>
<h3 className="text-white font-semibold text-lg mb-2">3-5 Line Explanations</h3>
<p className="text-sm text-neutral-500">Instant clarity with zero jargon. We respect your time and attention.</p>
</div>

<div className="bg-neutral-950 p-8 group hover:bg-neutral-900 transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition-all"></div>
<i className="w-8 h-8 text-neutral-400 mb-6 group-hover:text-green-400 transition-colors" data-lucide="briefcase"></i>
<h3 className="text-white font-semibold text-lg mb-2">Real-World Use Cases</h3>
<p className="text-sm text-neutral-500">Don't just learn "what". Learn "when" to use which model in daily work.</p>
</div>

<div className="bg-neutral-950 p-8 group hover:bg-neutral-900 transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-all"></div>
<i className="w-8 h-8 text-neutral-400 mb-6 group-hover:text-orange-400 transition-colors" data-lucide="layout-template"></i>
<h3 className="text-white font-semibold text-lg mb-2">Templates &amp; Cheatsheets</h3>
<p className="text-sm text-neutral-500">Fill-in-the-blank frameworks for Notion, Obsidian, and PDF.</p>
</div>

<div className="bg-neutral-950 p-8 group hover:bg-neutral-900 transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl group-hover:bg-pink-500/20 transition-all"></div>
<i className="w-8 h-8 text-neutral-400 mb-6 group-hover:text-pink-400 transition-colors" data-lucide="tags"></i>
<h3 className="text-white font-semibold text-lg mb-2">Smart Tags &amp; Search</h3>
<p className="text-sm text-neutral-500">Find exactly what you need instantly by tagging pain points.</p>
</div>

<div className="bg-neutral-950 p-8 group hover:bg-neutral-900 transition-colors relative overflow-hidden flex flex-col justify-center items-center text-center">
<div className="bg-[#7B61FF] w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-purple-900/50">
<i className="w-6 h-6 text-white" data-lucide="arrow-right"></i>
</div>
<h3 className="text-white font-semibold text-lg">Start Thinking Better</h3>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">See it in Action</h2>
<p className="text-neutral-400">Mental models for every scenario.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="glass-card rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors group">
<div className="h-40 bg-gradient-to-br from-neutral-900 to-neutral-800 flex items-center justify-center relative">

<div className="w-24 h-24 rounded-full border-4 border-neutral-700 relative">
<div className="absolute inset-0 border-4 border-transparent border-t-red-500 rounded-full rotate-45"></div>
<div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-red-400">25:00</div>
</div>
</div>
<div className="p-6">
<h3 className="text-white font-semibold text-lg mb-1">Pomodoro</h3>
<p className="text-purple-400 text-xs font-medium uppercase tracking-wider mb-3">Focus</p>
<p className="text-sm text-neutral-500 leading-relaxed">Work in focused bursts. Best for clearing backlogs and avoiding burnout.</p>
</div>
</div>

<div className="glass-card rounded-2xl overflow-hidden hover:border-blue-500/50 transition-colors group">
<div className="h-40 bg-gradient-to-br from-neutral-900 to-neutral-800 flex items-center justify-center">
<div className="grid grid-cols-2 gap-2 w-24 h-24">
<div className="bg-blue-500 rounded-md opacity-80"></div>
<div className="bg-neutral-700 rounded-md"></div>
<div className="bg-neutral-700 rounded-md"></div>
<div className="bg-neutral-700 rounded-md"></div>
</div>
</div>
<div className="p-6">
<h3 className="text-white font-semibold text-lg mb-1">Eisenhower Matrix</h3>
<p className="text-blue-400 text-xs font-medium uppercase tracking-wider mb-3">Prioritization</p>
<p className="text-sm text-neutral-500 leading-relaxed">Separate the urgent from the important. Prioritize like a pro executive.</p>
</div>
</div>

<div className="glass-card rounded-2xl overflow-hidden hover:border-amber-500/50 transition-colors group">
<div className="h-40 bg-gradient-to-br from-neutral-900 to-neutral-800 flex items-center justify-center">
<div className="flex flex-col items-center gap-1">
<div className="w-20 h-5 bg-neutral-700 rounded-sm"></div>
<i className="w-3 h-3 text-neutral-600" data-lucide="arrow-down"></i>
<div className="w-20 h-5 bg-neutral-700 rounded-sm"></div>
<i className="w-3 h-3 text-neutral-600" data-lucide="arrow-down"></i>
<div className="w-20 h-5 bg-amber-500/80 rounded-sm"></div>
</div>
</div>
<div className="p-6">
<h3 className="text-white font-semibold text-lg mb-1">5 Whys</h3>
<p className="text-amber-400 text-xs font-medium uppercase tracking-wider mb-3">Problem Solving</p>
<p className="text-sm text-neutral-500 leading-relaxed">Drill down to the root cause of any defect or problem by asking "Why?" five times.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-white/5">
<div className="max-w-6xl mx-auto px-6 text-center">
<p className="text-sm text-neutral-500 mb-8">Inspired by mental models used by behavioral science experts at</p>
<div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-semibold tracking-tighter text-white">Apple</span>
<span className="text-xl font-bold tracking-tight text-white">Google</span>
<span className="text-xl font-bold tracking-tight text-white font-serif italic">Toyota</span>
<span className="text-xl font-semibold tracking-tight text-white">McKinsey</span>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-neutral-900/50"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] -z-10"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Ready to think better?</h2>
<p className="text-lg text-neutral-400 mb-10">Get access to 10 essential mental models every modern thinker should know.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-[#7B61FF] hover:bg-[#5B4BFF] text-white px-8 py-4 rounded-lg text-sm font-medium transition-all shadow-lg shadow-purple-900/40 flex items-center justify-center gap-2">
                    Get the Free Pack
                    <i className="w-4 h-4" data-lucide="sparkles"></i>
</button>
<button className="bg-transparent hover:bg-white/5 text-white px-8 py-4 rounded-lg text-sm font-medium border border-white/10 transition-all flex items-center justify-center gap-2">
                    Explore Full Library
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-neutral-950 pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-blue-600 rounded"></div>
<span className="text-white font-medium tracking-tight text-sm">MINDCHEATSHEET</span>
</div>
<p className="text-neutral-500 text-sm max-w-xs">Mental models for the modern world. Simplified, visualized, and actionable.</p>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-white font-medium text-sm mb-4">Product</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-purple-400 transition-colors" href="#">Models</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Templates</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-purple-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-neutral-600 text-xs">© 2024 MindCheatSheet. All rights reserved.</p>
<div className="flex gap-6">
<i className="w-4 h-4 text-neutral-600 hover:text-white cursor-pointer transition-colors" data-lucide="twitter"></i>
<i className="w-4 h-4 text-neutral-600 hover:text-white cursor-pointer transition-colors" data-lucide="github"></i>
<i className="w-4 h-4 text-neutral-600 hover:text-white cursor-pointer transition-colors" data-lucide="linkedin"></i>
</div>
</div>
</div>
</footer>
<style>
        @keyframes float {
            0%, 100% { transform: translateY(0) rotate(var(--tw-rotate)); }
            50% { transform: translateY(-10px) rotate(var(--tw-rotate)); }
        }
    </style>


    </>
  );
}
