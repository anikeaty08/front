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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="group flex items-center gap-2" href="#">
<div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-white overflow-hidden">
<span className="absolute group-hover:translate-y-full transition-transform duration-300 font-medium text-lg">P</span>
<span className="absolute -translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-lg">🐧</span>
</div>
<span className="text-slate-900 font-medium tracking-tighter text-lg">Pingoo Land</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#topics">Topics</a>
<a className="hover:text-slate-900 transition-colors" href="#lessons">Lessons</a>
<a className="hover:text-slate-900 transition-colors" href="#quiz">Quizzes</a>
<a className="hover:text-slate-900 transition-colors" href="#resources">Resources</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex text-slate-500 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium py-2 px-4 rounded-full transition-all flex items-center gap-2" href="#start">
                    Start Sliding
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-gradient-to-b from-blue-50 to-transparent opacity-50 blur-3xl -z-10 rounded-full"></div>
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

<div className="flex-1 text-center lg:text-left z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-6 animate-pulse mx-auto lg:mx-0">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
            New: Calculus for baby penguins
        </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-slate-900 tracking-tight mb-6">
            Math made <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">chill.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            Slide through complex problems with ease. From basic arithmetic to advanced geometry, Pingoo Land makes learning math cool, intuitive, and fun.
        </p>
<div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center lg:justify-start">
<button className="sm:w-auto hover:bg-blue-700 shadow-blue-500/40 transition-all transform active:scale-95 text-sm font-medium text-white bg-blue-600 w-full rounded-lg pt-3 pr-8 pb-3 pl-8 shadow-xl">
                Start Learning Free
            </button>
<button className="w-full sm:w-auto bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-sm font-medium py-3 px-8 rounded-lg transition-all flex items-center justify-center gap-2 group">
                View Syllabus
                <iconify-icon className="group-hover:translate-y-1 transition-transform" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 w-full max-w-lg lg:max-w-none relative group perspective-normal">
<div className="relative w-full aspect-[4/3] bg-gradient-to-b from-[#38bdf8] to-[#60a5fa] rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-white/20 transform rotate-y-5 transition-all duration-500 group-hover:rotate-y-0 group-hover:scale-[1.02]">

<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-white/20 blur-3xl rounded-full"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-500/20 blur-3xl rounded-full mix-blend-overlay"></div>

<div className="absolute top-16 left-12 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-white font-serif italic text-2xl animate-pulse shadow-lg">
                x²
            </div>
<div className="absolute top-24 right-20 bg-white/10 backdrop-blur-md w-12 h-12 flex items-center justify-center rounded-full border border-white/20 text-white font-mono text-xl animate-pulse delay-700 shadow-lg">
                +
            </div>

<div className="absolute bottom-0 inset-x-0 h-40">

<div className="absolute bottom-12 left-10 w-28 h-10 bg-white/20 backdrop-blur-lg rounded-full border border-white/40 flex items-center justify-center shadow-lg">
<span className="text-white font-bold text-lg tracking-tight">3.14</span>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-5xl filter drop-shadow-md animate-[bounce_1s_infinite]">🐧</div>
</div>

<div className="absolute bottom-24 right-12 w-24 h-10 bg-white/20 backdrop-blur-lg rounded-full border border-white/40 flex items-center justify-center shadow-lg">
<span className="text-white font-bold text-lg tracking-tight">42</span>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-5xl filter drop-shadow-md animate-[bounce_1.2s_infinite] delay-150">🐧</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-20 h-8 bg-white/20 backdrop-blur-lg rounded-full border border-white/40 flex items-center justify-center shadow-lg">
<span className="text-white font-bold text-lg tracking-tight">∞</span>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-4xl filter drop-shadow-md animate-[bounce_1.5s_infinite] delay-300">🐧</div>
</div>

<div className="absolute bottom-0 w-full h-8 bg-white/10 backdrop-blur-md"></div>
</div>
</div>

<div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl opacity-20 blur-3xl -z-10 group-hover:opacity-30 transition-opacity duration-500"></div>
</div>
</div>
</section>

<section className="py-12 border-y border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left">
<p className="text-3xl font-medium text-slate-900 tracking-tight">10k+</p>
<p className="text-sm text-slate-500 mt-1">Learners waddling</p>
</div>
<div className="text-center md:text-left">
<p className="text-3xl font-medium text-slate-900 tracking-tight">500+</p>
<p className="text-sm text-slate-500 mt-1">Lessons available</p>
</div>
<div className="text-center md:text-left">
<p className="text-3xl font-medium text-slate-900 tracking-tight">Zero</p>
<p className="text-sm text-slate-500 mt-1">Cold feet</p>
</div>
<div className="text-center md:text-left">
<p className="text-3xl font-medium text-slate-900 tracking-tight">100%</p>
<p className="text-sm text-slate-500 mt-1">Free for everyone</p>
</div>
</div>
</section>

<section className="py-24 px-6" id="topics">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-2">Explore Topics</h2>
<p className="text-slate-500 font-light">Structured learning paths from egg to emperor.</p>
</div>
<div className="flex gap-2">
<button className="p-2 rounded-md border border-slate-200 hover:bg-white text-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:sort-from-top-to-bottom-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="p-2 rounded-md border border-slate-200 hover:bg-white text-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:filter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110">
<iconify-icon icon="solar:calculator-minimalistic-linear" strokeWidth="1.5" width="120"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
<iconify-icon icon="solar:calculator-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Arithmetic &amp; Numbers</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Master the basics of counting fish, operations, and number sense.</p>
<div className="flex items-center gap-2 text-xs font-medium text-slate-400">
<span className="bg-slate-100 px-2 py-1 rounded">12 Lessons</span>
<span>Beginner</span>
</div>
</div>

<div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110">
<iconify-icon icon="solar:ruler-angular-linear" strokeWidth="1.5" width="120"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 mb-4">
<iconify-icon icon="solar:ruler-angular-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Geometry</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Understand shapes, angles, and spatial reasoning on the ice.</p>
<div className="flex items-center gap-2 text-xs font-medium text-slate-400">
<span className="bg-slate-100 px-2 py-1 rounded">18 Lessons</span>
<span>Intermediate</span>
</div>
</div>

<div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110">
<iconify-icon icon="solar:formula-linear" strokeWidth="1.5" width="120"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 mb-4">
<iconify-icon icon="solar:formula-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Algebra &amp; Functions</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Solve for X where X is the number of pebbles in a nest.</p>
<div className="flex items-center gap-2 text-xs font-medium text-slate-400">
<span className="bg-slate-100 px-2 py-1 rounded">24 Lessons</span>
<span>Advanced</span>
</div>
</div>

<div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer relative overflow-hidden">
<div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Probability</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Calculate the odds of sliding vs waddling.</p>
<div className="flex items-center gap-2 text-xs font-medium text-slate-400">
<span className="bg-slate-100 px-2 py-1 rounded">8 Lessons</span>
<span>Intermediate</span>
</div>
</div>

<div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer relative overflow-hidden">
<div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600 mb-4">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Calculus Basics</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Limits, derivatives, and rates of change in ocean currents.</p>
<div className="flex items-center gap-2 text-xs font-medium text-slate-400">
<span className="bg-slate-100 px-2 py-1 rounded">15 Lessons</span>
<span>Hard</span>
</div>
</div>

<div className="group bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:shadow-lg hover:shadow-slate-900/20 transition-all duration-300 cursor-pointer relative overflow-hidden">
<div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-orange-400 mb-4">
<iconify-icon icon="solar:gamepad-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Fun Challenges</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-4">Daily puzzles and logic games to keep your brain warm.</p>
<div className="flex items-center gap-2 text-xs font-medium text-slate-600">
<span className="bg-slate-800 px-2 py-1 rounded text-slate-300">Daily</span>
<span className="text-slate-300">All Levels</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-slate-200" id="lessons">
<div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
<div className="flex-1">
<div className="inline-flex items-center gap-2 text-orange-600 font-medium text-sm mb-4">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                    Interactive Learning
                </div>
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-6">Learn by doing, not just watching.</h2>
<p className="text-slate-500 font-light text-lg mb-8">Each lesson includes interactive diagrams that respond to your input. Visualise the math before you solve it.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<div className="mt-1 text-teal-500"><iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon></div>
<span className="text-slate-600">Step-by-step visual breakdowns</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 text-teal-500"><iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon></div>
<span className="text-slate-600">Instant feedback on practice problems</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 text-teal-500"><iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon></div>
<span className="text-slate-600">Earn fish (points) as you progress</span>
</li>
</ul>
</div>

<div className="flex-1 w-full max-w-md">
<div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
<div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
<span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Practice Mode</span>
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<div className="w-2 h-2 rounded-full bg-yellow-400"></div>
<div className="w-2 h-2 rounded-full bg-green-400"></div>
</div>
</div>
<div className="p-8">
<p className="text-sm text-slate-500 mb-2">Linear Equations</p>
<p className="text-xl font-medium text-slate-900 mb-6">If <span className="font-serif italic text-blue-600">2x + 4 = 12</span>, find <span className="font-serif italic text-blue-600">x</span>.</p>

<div className="bg-slate-50 rounded-lg p-6 mb-6 flex items-center justify-center gap-4 relative">

<div className="h-24 w-8 bg-blue-200 rounded-t-md relative group">
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">x</span>
</div>
<div className="h-24 w-8 bg-blue-200 rounded-t-md relative group">
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">x</span>
</div>
<div className="text-slate-400 font-light text-2xl">+</div>
<div className="h-12 w-8 bg-orange-200 rounded-t-md flex items-end justify-center pb-1 text-xs text-orange-700">4</div>
<div className="text-slate-400 font-light text-2xl">=</div>
<div className="h-32 w-8 bg-slate-200 rounded-t-md flex items-end justify-center pb-1 text-xs text-slate-600">12</div>
</div>

<div className="space-y-4">
<label className="block text-xs font-medium text-slate-700">Your Answer</label>
<div className="flex gap-2">
<input className="flex-1 bg-white border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-300 font-serif italic" placeholder="?" type="number"/>
<button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">Check</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden" id="quiz">
<div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
<iconify-icon icon="solar:question-circle-linear" strokeWidth="0.5" width="400"></iconify-icon>
</div>
<div className="max-w-3xl mx-auto text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight mb-4">Test Your Knowledge</h2>
<p className="text-slate-400 font-light">A quick challenge to keep your beak sharp.</p>
</div>
<div className="max-w-2xl mx-auto bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
<div className="flex justify-between items-center mb-6">
<span className="text-xs font-medium tracking-wider uppercase text-orange-400">Question 1 of 5</span>
<span className="text-xs text-slate-500">Geometry</span>
</div>
<h3 className="text-xl font-medium mb-8">What is the sum of angles in a triangle?</h3>
<div className="space-y-3">

<label className="group flex items-center p-4 rounded-xl border border-slate-700 hover:border-slate-500 hover:bg-slate-700/50 cursor-pointer transition-all">
<input className="peer sr-only" name="quiz" type="radio"/>
<div className="w-5 h-5 rounded-full border border-slate-500 group-hover:border-white peer-checked:border-orange-500 peer-checked:bg-orange-500 flex items-center justify-center transition-all mr-4">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-slate-300 group-hover:text-white transition-colors">90 degrees</span>
</label>

<label className="group flex items-center p-4 rounded-xl border border-slate-700 hover:border-slate-500 hover:bg-slate-700/50 cursor-pointer transition-all">
<input className="peer sr-only" name="quiz" type="radio"/>
<div className="w-5 h-5 rounded-full border border-slate-500 group-hover:border-white peer-checked:border-orange-500 peer-checked:bg-orange-500 flex items-center justify-center transition-all mr-4">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-slate-300 group-hover:text-white transition-colors">180 degrees</span>
</label>

<label className="group flex items-center p-4 rounded-xl border border-slate-700 hover:border-slate-500 hover:bg-slate-700/50 cursor-pointer transition-all">
<input className="peer sr-only" name="quiz" type="radio"/>
<div className="w-5 h-5 rounded-full border border-slate-500 group-hover:border-white peer-checked:border-orange-500 peer-checked:bg-orange-500 flex items-center justify-center transition-all mr-4">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-slate-300 group-hover:text-white transition-colors">360 degrees</span>
</label>
</div>
<div className="mt-8 flex justify-end">
<button className="bg-white text-slate-900 px-6 py-2 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                    Next Question
                </button>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="resources">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h3 className="text-2xl font-medium text-slate-900 tracking-tight mb-6">Teacher &amp; Student Resources</h3>
<div className="space-y-4">
<a className="block group p-4 rounded-xl border border-slate-100 bg-slate-50 hover:border-slate-300 transition-all" href="#">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="bg-white p-2 rounded-lg shadow-sm text-red-500 border border-slate-100">
<iconify-icon icon="solar:file-text-linear" width="20"></iconify-icon>
</div>
<div>
<p className="font-medium text-slate-900 text-sm">Algebra Workbook.pdf</p>
<p className="text-xs text-slate-500">2.4 MB • 50 Practice sheets</p>
</div>
</div>
<iconify-icon className="text-slate-400 group-hover:text-slate-900" icon="solar:download-linear" width="20"></iconify-icon>
</div>
</a>
<a className="block group p-4 rounded-xl border border-slate-100 bg-slate-50 hover:border-slate-300 transition-all" href="#">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="bg-white p-2 rounded-lg shadow-sm text-blue-500 border border-slate-100">
<iconify-icon icon="solar:ruler-pen-linear" width="20"></iconify-icon>
</div>
<div>
<p className="font-medium text-slate-900 text-sm">Geometry Cheat Sheet.pdf</p>
<p className="text-xs text-slate-500">1.1 MB • All formulas included</p>
</div>
</div>
<iconify-icon className="text-slate-400 group-hover:text-slate-900" icon="solar:download-linear" width="20"></iconify-icon>
</div>
</a>
</div>
</div>

<div>
<h3 className="text-2xl font-medium text-slate-900 tracking-tight mb-2">Join the Flock</h3>
<p className="text-slate-500 mb-6 font-light">Get weekly math tips and bad penguin puns delivered to your inbox.</p>
<form className="space-y-4 max-w-sm">
<div>
<input className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all" placeholder="penguin@antarctica.com" type="email"/>
</div>
<div className="flex items-start gap-2 mb-4">

<div className="relative flex items-center">
<input className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-slate-300 transition-all checked:border-slate-900 checked:bg-slate-900" id="terms" type="checkbox"/>
<div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
<iconify-icon icon="solar:check-read-linear" width="10"></iconify-icon>
</div>
</div>
<label className="text-xs text-slate-500 cursor-pointer select-none" htmlFor="terms">I agree to receive math problems, not spam.</label>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-lg text-sm transition-all shadow-lg shadow-slate-900/10">
                        Subscribe
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="flex items-center justify-center w-6 h-6 rounded bg-slate-900 text-white text-xs">P</div>
<span className="text-slate-900 font-medium tracking-tighter">Pingoo Land</span>
</div>
<p className="text-sm text-slate-500 font-light max-w-xs">Making math accessible, fun, and slightly colder for everyone.</p>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm mb-4">Learn</h4>
<ul className="space-y-2 text-sm text-slate-500 font-light">
<li><a className="hover:text-slate-900 transition-colors" href="#">Arithmetic</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Algebra</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Geometry</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500 font-light">
<li><a className="hover:text-slate-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Careers (Penguins only)</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Privacy</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm mb-4">Connect</h4>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-light">
<p>© 2023 Pingoo Land Inc. All rights reserved.</p>
<p className="hover:text-slate-900 transition-colors cursor-help" title="Waddle waddle">Made with 🧊 in Antarctica</p>
</div>
</div>
</footer>

    </>
  );
}
