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
      

<nav className="fixed top-0 w-full z-50 glass-panel">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="text-slate-900 font-semibold tracking-tighter text-lg flex items-center gap-1" href="#">
<span className="bg-slate-900 text-white w-8 h-8 flex items-center justify-center rounded-lg text-sm">TX</span>
<span>MPJE Prep</span>
</a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="hover:text-slate-900 transition-colors" href="#how-it-works">Methodology</a>
<a className="hover:text-slate-900 transition-colors" href="#reviews">Reviews</a>
</div>
<a className="hidden sm:flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-full text-xs font-medium transition-all transform hover:scale-105" href="https://apps.apple.com/us/app/texas-mpje-exam-prep/id6749337374" target="_blank">
<span>Download App</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</nav>

<section className="pt-32 pb-20 overflow-hidden mesh-gradient relative">
<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8 max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    Updated for 2024 Texas Laws
                </div>
<h1 className="text-5xl sm:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
                    Pass the Texas Pharmacy Law Exam.
                </h1>
<p className="text-lg text-slate-500 font-normal leading-relaxed">
                    Master state-specific regulations with our comprehensive question bank, detailed explanations, and progress tracking. Designed specifically for the Texas MPJE.
                </p>
<div className="flex flex-wrap gap-4 pt-2">
<a className="inline-flex items-center gap-3 bg-slate-900 text-white px-6 py-3.5 rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl ring-offset-2 focus:ring-2 ring-slate-900" href="https://apps.apple.com/us/app/texas-mpje-exam-prep/id6749337374" target="_blank">
<iconify-icon icon="ic:baseline-apple" width="24"></iconify-icon>
<div className="text-left leading-none">
<div className="text-[10px] uppercase font-medium opacity-80">Download on the</div>
<div className="text-sm font-semibold tracking-wide">App Store</div>
</div>
</a>
<div className="flex items-center gap-4 px-4">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white"></div>
</div>
<div className="text-xs text-slate-500">
<span className="text-slate-900 font-medium">Trusted</span> by future pharmacists.
                        </div>
</div>
</div>
</div>

<div className="relative flex justify-center lg:justify-end perspective-1000">

<div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden ring-1 ring-slate-900/50">

<div className="absolute inset-0 bg-slate-50 overflow-hidden flex flex-col">

<div className="h-10 w-full bg-white flex justify-between items-center px-6">
<div className="text-[10px] font-semibold">9:41</div>
<div className="flex gap-1">
<div className="w-4 h-2.5 bg-slate-800 rounded-[2px]"></div>
</div>
</div>

<div className="px-6 pt-4 pb-4 bg-white border-b border-slate-100">
<div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Question 24 of 100</div>
<div className="flex justify-between items-center">
<h3 className="text-sm font-semibold text-slate-900">Controlled Substances</h3>
<div className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:bookmark-linear" width="14"></iconify-icon>
</div>
</div>

<div className="mt-3 w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-blue-600 h-full w-[24%] rounded-full"></div>
</div>
</div>

<div className="p-6 flex-1 overflow-y-auto hide-scroll space-y-4">
<p className="text-sm text-slate-800 font-medium leading-relaxed">
                                According to the Texas Dangerous Drug Act, which of the following is REQUIRED on the label of a dispensed dangerous drug?
                            </p>
<div className="space-y-3 mt-4">
<div className="p-3 rounded-lg border border-slate-200 bg-white hover:border-blue-500 cursor-pointer transition-colors flex gap-3 items-center">
<div className="w-5 h-5 rounded-full border border-slate-300 flex-shrink-0"></div>
<span className="text-xs text-slate-600">Name of the patient's spouse</span>
</div>
<div className="p-3 rounded-lg border border-blue-600 bg-blue-50 flex gap-3 items-center relative">
<div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-white" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-xs text-blue-900 font-medium">Name and address of the pharmacy</span>
</div>
<div className="p-3 rounded-lg border border-slate-200 bg-white hover:border-blue-500 cursor-pointer transition-colors flex gap-3 items-center">
<div className="w-5 h-5 rounded-full border border-slate-300 flex-shrink-0"></div>
<span className="text-xs text-slate-600">Date of manufacture</span>
</div>
</div>
<div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-100">
<div className="flex items-center gap-2 text-green-700 mb-2">
<iconify-icon icon="solar:lightbulb-linear" width="16"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wide">Explanation</span>
</div>
<p className="text-xs text-green-800 leading-relaxed">
                                    Correct. Texas law requires the name/address of the pharmacy, date dispensed, name of practitioner, name of patient, and directions for use.
                                </p>
</div>
</div>

<div className="h-16 bg-white border-t border-slate-100 grid grid-cols-4 items-center px-2">
<div className="flex flex-col items-center gap-1 text-slate-400">
<iconify-icon icon="solar:home-2-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-1 text-blue-600">
<iconify-icon icon="solar:book-2-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-1 text-slate-400">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-1 text-slate-400">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 -right-6 md:-right-12 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-[180px] animate-[bounce_3s_infinite]">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<iconify-icon icon="solar:cup-star-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400">Streak</div>
<div className="text-sm font-semibold text-slate-900">7 Days</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Everything you need to pass.</h2>
<p className="text-slate-500 text-lg">Stop studying outdated generic material. Our content is curated specifically for the complex landscape of Texas pharmacy law.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all hover:shadow-sm bg-slate-50/50">
<div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:book-bookmark-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">C2 vs C3-5 Regulations</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Deep dive into the nuances of controlled substance prescriptions, validity, and dispensing limits specific to Texas.
                    </p>
</div>

<div className="group p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all hover:shadow-sm bg-slate-50/50">
<div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">TSBP Rules</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Stay current with the Texas State Board of Pharmacy rules, including pharmacy classes, remote work, and staffing ratios.
                    </p>
</div>

<div className="group p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all hover:shadow-sm bg-slate-50/50">
<div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Performance Analytics</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Visualize your weak spots. We track your performance across different law categories so you know where to focus.
                    </p>
</div>

<div className="group p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all hover:shadow-sm bg-slate-50/50">
<div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:refresh-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Spaced Repetition</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Smart algorithms resurface questions you've missed to ensure retention before test day.
                    </p>
</div>

<div className="group p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all hover:shadow-sm bg-slate-50/50">
<div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:siderbar-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Clean Interface</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Distraction-free studying. Dark mode support and a minimal design help you focus on the content.
                    </p>
</div>

<div className="group p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all hover:shadow-sm bg-slate-50/50">
<div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Exam Simulation</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Timed practice exams that mimic the actual MPJE environment to build your stamina and confidence.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-slate-100 bg-slate-50">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="space-y-2">
<div className="text-4xl font-semibold text-slate-900 tracking-tight">500+</div>
<div className="text-sm text-slate-500 font-medium">Practice Questions</div>
</div>
<div className="space-y-2">
<div className="text-4xl font-semibold text-slate-900 tracking-tight">100%</div>
<div className="text-sm text-slate-500 font-medium">Texas Focused</div>
</div>
<div className="space-y-2">
<div className="text-4xl font-semibold text-slate-900 tracking-tight">24/7</div>
<div className="text-sm text-slate-500 font-medium">Offline Access</div>
</div>
<div className="space-y-2">
<div className="text-4xl font-semibold text-slate-900 tracking-tight">4.8</div>
<div className="text-sm text-slate-500 font-medium">App Store Rating</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-slate-900 rounded-3xl p-12 text-center relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
<div className="absolute right-0 top-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute left-0 bottom-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
</div>
<div className="relative z-10 space-y-8">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Ready to become a Texas Pharmacist?</h2>
<p className="text-slate-300 text-lg max-w-xl mx-auto">
                        Download Texas MPJE Exam Prep today and study smarter, not harder. Join hundreds of students who passed their boards with confidence.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-xl hover:bg-slate-50 transition-colors" href="https://apps.apple.com/us/app/texas-mpje-exam-prep/id6749337374" target="_blank">
<iconify-icon icon="ic:baseline-apple" width="28"></iconify-icon>
<div className="text-left leading-none">
<div className="text-[10px] uppercase font-bold text-slate-500">Download on the</div>
<div className="text-base font-bold tracking-wide">App Store</div>
</div>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="bg-slate-900 text-white w-6 h-6 flex items-center justify-center rounded text-xs font-bold">TX</span>
<span className="text-slate-900 font-semibold tracking-tight text-sm">MPJE Prep</span>
</div>
<div className="text-sm text-slate-500">
                    © 2024 Texas MPJE Exam Prep. All rights reserved.
                </div>
<div className="flex items-center gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="brands:instagram" width="18"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="brands:twitter" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
