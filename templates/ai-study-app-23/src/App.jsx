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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-slate-50/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-slate-900">
<iconify-icon className="text-xl text-indigo-600" icon="solar:book-bookmark-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="tracking-tighter font-semibold text-lg">SYNAPSE</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">How it works</a>
<a className="hover:text-slate-900 transition-colors" href="#">Features</a>
<a className="hover:text-slate-900 transition-colors" href="#">Pricing</a>
</nav>
<div className="flex items-center gap-4 text-sm font-medium">
<a className="text-slate-600 hover:text-slate-900 transition-colors hidden sm:block" href="#">Log in</a>
<a className="bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-colors shadow-sm" href="#">Start Learning</a>
</div>
</div>
</header>
<main className="">

<section className="text-center max-w-4xl mr-auto ml-auto pt-24 pr-6 pb-16 pl-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-medium mb-8">
<iconify-icon icon="solar:stars-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                New: AI-Generated Spaced Repetition
            </div>
<h1 className="text-4xl md:text-6xl tracking-tight font-semibold text-slate-900 mb-6 leading-tight">
                Upload confusion.<br/>Download <span className="text-indigo-600">mastery.</span>
</h1>
<p className="text-base md:text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                Drop your textbooks, lecture slides, or messy notes. We instantly convert them into step-by-step guides, interactive flashcards, and simplified explanations. Stop reading, start learning.
            </p>

<div className="max-w-xl mx-auto bg-white rounded-2xl border-2 border-dashed border-slate-200 p-8 hover:border-indigo-400 hover:bg-indigo-50/30 transition-all cursor-pointer group shadow-sm">
<div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-indigo-600" icon="solar:cloud-upload-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight mb-1">Drag &amp; drop your study material</h3>
<p className="text-sm text-slate-500 mb-4">Supports PDF, DOCX, PPTX, or image files up to 50MB.</p>
<button className="hover:bg-indigo-700 transition-colors inline-flex gap-2 text-sm font-medium text-white bg-indigo-600 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-sm gap-x-2 gap-y-2 items-center">
<iconify-icon icon="solar:document-add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Browse Files
                </button>
</div>
</section>

<section className="px-6 pb-24">
<div className="max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col md:flex-row h-auto md:h-[32rem]">

<div className="w-full md:w-64 bg-slate-50 border-r border-slate-200 p-4 flex flex-col">
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-2">Your Path</div>
<div className="space-y-1">
<div className="flex items-center gap-3 px-2 py-2 bg-indigo-50 text-indigo-700 rounded-lg cursor-pointer">
<iconify-icon className="text-lg" icon="solar:folder-open-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium">Biology 101 Notes</span>
</div>
<div className="flex items-center gap-3 px-2 py-2 text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer transition-colors">
<iconify-icon className="text-lg" icon="solar:document-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium">History Chapter 4</span>
</div>
</div>
<div className="mt-8 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-2">Generated Tools</div>
<div className="space-y-1">
<div className="flex items-center justify-between px-2 py-2 text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium">Simple Summary</span>
</div>
<span className="text-xs text-slate-400">10m</span>
</div>
<div className="flex items-center justify-between px-2 py-2 bg-slate-100 text-slate-900 rounded-lg cursor-pointer">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:cards-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium">Flashcards</span>
</div>
<div className="w-2 h-2 rounded-full bg-indigo-500"></div>
</div>
<div className="flex items-center justify-between px-2 py-2 text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium">Practice Quiz</span>
</div>
<span className="text-xs text-slate-400">24q</span>
</div>
</div>
<div className="mt-auto px-2">
<div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100">
<div className="text-xs font-medium text-indigo-900 mb-2">Daily Streak</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-orange-500" icon="solar:fire-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-semibold text-indigo-900">12 Days</span>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-white p-6 md:p-10 flex flex-col relative">

<div className="flex justify-end mb-8 items-center gap-3">
<span className="text-xs font-medium text-slate-500">Explain like I'm 5</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-slate-200 appearance-none cursor-pointer transition-transform duration-200 ease-in-out z-10" id="toggle1" name="toggle" style={{top: '2px', left: '2px'}} type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-200 cursor-pointer transition-colors duration-200 ease-in-out" htmlFor="toggle1"></label>
</div>
</div>

<div className="flex-1 flex flex-col items-center justify-center">
<div className="w-full max-w-md perspective-1000">
<div className="relative w-full bg-white border border-slate-200 rounded-2xl shadow-md p-8 min-h-[16rem] flex flex-col justify-center items-center text-center cursor-pointer hover:shadow-lg transition-shadow group">
<div className="absolute top-4 right-4 flex gap-1">
<div className="w-8 h-1 rounded-full bg-indigo-500"></div>
<div className="w-8 h-1 rounded-full bg-indigo-200"></div>
<div className="w-8 h-1 rounded-full bg-slate-100"></div>
<div className="w-8 h-1 rounded-full bg-slate-100"></div>
</div>
<span className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-4">Mitochondria</span>
<h2 className="text-xl md:text-2xl tracking-tight font-medium text-slate-800 mb-6 group-hover:text-slate-900 transition-colors">
                                    What is the primary function of the mitochondria in a eukaryotic cell?
                                </h2>
<p className="text-sm text-slate-400 group-hover:text-indigo-500 transition-colors flex items-center gap-1 mt-auto">
<iconify-icon icon="solar:refresh-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Click to reveal answer
                                </p>
</div>
</div>

<div className="flex items-center gap-4 mt-8 opacity-50 pointer-events-none">
<button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-colors">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<span className="text-xs text-slate-400 font-medium">Hard</span>
<div className="w-px h-4 bg-slate-200 mx-2"></div>
<span className="text-xs text-slate-400 font-medium">Easy</span>
<button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-emerald-50 hover:text-emerald-500 hover:border-emerald-200 transition-colors">
<iconify-icon className="text-2xl" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 border-t border-slate-200">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900 mb-4">Your step-by-step path to an A+</h2>
<p className="text-base text-slate-500">We don't just organize your notes; we actively guide you through learning them using scientifically proven methods.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:shadow-sm transition-all">
<div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mb-5">
<iconify-icon className="text-xl" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg tracking-tight font-medium text-slate-900 mb-2">1. Auto-Extraction</h3>
<p className="text-sm text-slate-500 leading-relaxed">Upload any dense material. Our system instantly parses concepts, formulas, and key dates, stripping away the fluff.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:shadow-sm transition-all">
<div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mb-5">
<iconify-icon className="text-xl" icon="solar:layers-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg tracking-tight font-medium text-slate-900 mb-2">2. Simplify &amp; Explain</h3>
<p className="text-sm text-slate-500 leading-relaxed">Stuck on a concept? Toggle our "Explain Simply" mode to translate academic jargon into easy-to-understand analogies.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:shadow-sm transition-all">
<div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mb-5">
<iconify-icon className="text-xl" icon="solar:gamepad-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg tracking-tight font-medium text-slate-900 mb-2">3. Addictive Practice</h3>
<p className="text-sm text-slate-500 leading-relaxed">Engage with auto-generated flashcards and gamified quizzes. Built-in spaced repetition ensures you never forget.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 text-center">
<div className="max-w-3xl mx-auto bg-slate-900 rounded-3xl p-12 shadow-xl">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-white mb-4">Stop wasting time preparing to study.</h2>
<p className="text-base text-slate-300 mb-8 max-w-xl mx-auto">Join thousands of students who have turned their messy notes into automated, high-yield study sessions.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-indigo-500 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-indigo-400 transition-colors shadow-sm">
                        Upload Your First File
                    </button>
<button className="w-full sm:w-auto bg-transparent border border-slate-700 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-slate-800 transition-colors">
                        View Sample Subject
                    </button>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-200 bg-white py-12 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
<div className="flex items-center gap-2 text-slate-900">
<iconify-icon className="text-lg text-indigo-600" icon="solar:book-bookmark-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="tracking-tighter font-semibold">SYNAPSE</span>
</div>
<div className="flex gap-6 text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-900 transition-colors" href="#">Contact</a>
</div>
<p className="text-slate-400">© 2023 Synapse Learning.</p>
</div>
</footer>

    </>
  );
}
