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
      

<div className="fixed inset-0 z-0 bg-grid pointer-events-none"></div>

<nav className="relative z-50 w-full max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-center text-indigo-500">
<iconify-icon icon="lucide:shapes" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tight text-slate-800">Lumina</span>
</div>
<div className="flex items-center gap-8">
<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Syllabus</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">For Parents</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Schools</a>
</div>
<button className="bg-slate-900 text-white hover:bg-slate-800 transition-all text-xs font-medium px-4 py-2 rounded-lg shadow-lg shadow-slate-200/50">
                Student Login
            </button>
</div>
</nav>

<main className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-12 pb-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

<div className="lg:col-span-5 flex flex-col items-start space-y-8">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
<iconify-icon className="text-indigo-500" icon="lucide:bot" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-xs font-semibold text-slate-600 tracking-wide">AI Tutor 2.0 Now Live</span>
</div>
<h1 className="text-5xl md:text-6xl font-medium tracking-tight text-slate-900 leading-[1.05]">
                    Homework that <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">feels like play.</span>
</h1>
<p className="text-lg text-slate-500 font-light leading-relaxed max-w-md">
                    Master Math and Science through interactive puzzles and adaptive videos. Your personal AI companion builds a custom path just for you.
                </p>
<div className="flex items-center gap-4 pt-2">
<button className="group bg-indigo-600 text-white hover:bg-indigo-500 transition-all px-6 py-3.5 rounded-xl font-medium text-sm shadow-xl shadow-indigo-100 flex items-center gap-2.5">
<span>Start Learning</span>
<iconify-icon className="group-hover:rotate-12 transition-transform" icon="lucide:gamepad-2" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="px-6 py-3.5 rounded-xl text-slate-600 font-medium text-sm hover:bg-white hover:shadow-md border border-transparent hover:border-slate-100 transition-all flex items-center gap-2">
<iconify-icon icon="lucide:play-circle" strokeWidth="1.5" width="16"></iconify-icon>
                        View Syllabus
                    </button>
</div>

<div className="flex items-center gap-8 pt-6 border-t border-slate-200/60 w-full">
<div>
<p className="text-2xl font-bold text-slate-800 tracking-tight">K-12</p>
<p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Curriculum</p>
</div>
<div className="w-px h-8 bg-slate-200"></div>
<div>
<p className="text-2xl font-bold text-slate-800 tracking-tight">100%</p>
<p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Safe &amp; Private</p>
</div>
</div>
</div>

<div className="lg:col-span-7 relative h-auto min-h-[550px] w-full perspective-1000">

<div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute top-1/3 left-10 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

<div className="relative grid grid-cols-2 gap-5 h-full">

<div className="glass-card rounded-3xl p-5 col-span-1 row-span-2 flex flex-col animate-float-1 border-t-4 border-t-indigo-400/50">
<div className="flex items-center gap-3 mb-6">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
<iconify-icon icon="lucide:bot" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
</div>
<div>
<h3 className="text-sm font-bold text-slate-700">Lumi Bot</h3>
<p className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">Age 9-11 Mode</p>
</div>
</div>

<div className="flex-1 space-y-4">

<div className="flex justify-end">
<div className="bg-indigo-500 text-white rounded-2xl rounded-tr-sm px-4 py-3 text-xs leading-relaxed max-w-[90%] shadow-sm">
                                    Why is the sky blue? 
                                </div>
</div>

<div className="flex justify-start">
<div className="bg-white border border-slate-100 rounded-2xl rounded-tl-sm px-4 py-3 text-xs text-slate-600 leading-relaxed max-w-[95%] shadow-sm space-y-2">
<p>Sunlight looks white, but it's actually a rainbow of colors! 🌈</p>
<div className="w-full h-24 bg-sky-50 rounded-lg border border-sky-100 overflow-hidden relative group cursor-pointer">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon className="text-sky-500 ml-0.5" icon="lucide:play" width="14"></iconify-icon>
</div>
</div>
<img alt="Sky" className="w-full h-full object-cover opacity-80 mix-blend-overlay" src="https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?auto=format&amp;fit=crop&amp;q=80&amp;w=300"/>
<div className="absolute bottom-2 left-2 text-[10px] font-bold text-sky-800 bg-white/90 px-1.5 py-0.5 rounded">Science 101</div>
</div>
<p>Ready for a quick quiz?</p>
</div>
</div>
</div>

<div className="mt-4 flex gap-2">
<div className="h-8 bg-slate-50 border border-slate-200 rounded-full flex-1"></div>
<div className="w-8 h-8 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-400">
<iconify-icon icon="lucide:mic" width="14"></iconify-icon>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-6 col-span-1 flex flex-col justify-between animate-float-2">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500">
<iconify-icon icon="lucide:calculator" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex gap-1">
<iconify-icon className="text-yellow-400 fill-yellow-400" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="text-yellow-400 fill-yellow-400" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="text-slate-200" icon="lucide:star" width="14"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-sm font-bold text-slate-700">Mathematics</h3>
<p className="text-xs text-slate-400 mt-0.5">Fractions &amp; Decimals</p>
<div className="mt-4 space-y-2">
<div className="flex justify-between text-[10px] font-semibold text-slate-500 uppercase tracking-wide">
<span>Progress</span>
<span>82%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
<div className="bg-gradient-to-r from-orange-300 to-red-400 h-full rounded-full w-[82%] relative">
<div className="absolute inset-0 bg-white/30 w-full animate-[shimmer_2s_infinite]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-6 col-span-1 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:bg-white transition-colors">
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-slate-400" icon="lucide:arrow-up-right" width="18"></iconify-icon>
</div>
<div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-500 mb-3 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:puzzle" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h4 className="text-sm font-bold text-slate-700">Daily Challenge</h4>
<div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-50 text-teal-700 text-[10px] font-bold uppercase tracking-wide">
<span>+50 XP</span>
</div>
</div>

<div className="absolute -bottom-4 right-10 glass-card bg-white/90 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xl animate-float-1 z-20" style={{animationDelay: '1s'}}>
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
<iconify-icon icon="lucide:check" strokeWidth="3" width="16"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold text-slate-700">Great job!</p>
<p className="text-[10px] text-slate-500">You mastered <span className="text-indigo-500 font-medium">Photosynthesis</span></p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-24 pt-12 border-t border-slate-200">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="flex flex-col gap-3 group">
<div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-500 mb-2 group-hover:scale-110 transition-transform origin-left">
<iconify-icon icon="lucide:sparkles" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-bold text-slate-800">Generative Content</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                        Never run out of practice. Our engine creates unique math problems and science quizzes instantly.
                    </p>
</div>

<div className="flex flex-col gap-3 group">
<div className="w-10 h-10 rounded-lg bg-pink-50 flex items-center justify-center text-pink-500 mb-2 group-hover:scale-110 transition-transform origin-left">
<iconify-icon icon="lucide:brain-circuit" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-bold text-slate-800">Adaptive Assessment</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                        The platform learns with you. It identifies weak spots and adjusts the difficulty in real-time.
                    </p>
</div>

<div className="flex flex-col gap-3 group">
<div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-500 mb-2 group-hover:scale-110 transition-transform origin-left">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-bold text-slate-800">Age-Safe Assistant</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                        A strictly guard-railed AI companion that explains concepts at an age-appropriate reading level.
                    </p>
</div>
</div>
</div>
</main>

    </>
  );
}
