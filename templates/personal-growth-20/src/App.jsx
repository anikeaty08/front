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
      

<nav className="glass-nav fixed w-full top-0 z-50 h-16 flex items-center justify-between px-6 lg:px-12 transition-all duration-300">

<div className="flex items-center gap-2">
<a className="text-sm font-semibold tracking-tighter text-slate-900 uppercase" href="#">
                Rich In Thought <span className="text-slate-400 mx-2">/</span> Six Dimensions
            </a>
</div>

<div className="flex items-center gap-6">
<a className="hidden sm:block text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Sign In</a>
<a className="group relative inline-flex items-center justify-center rounded-full bg-slate-900 py-2 px-4 text-xs font-medium text-white shadow-lg shadow-slate-900/20 transition-all hover:bg-slate-800 hover:shadow-slate-900/30 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2" href="#assessment">
<span>Take the Assessment</span>
<iconify-icon className="ml-1 opacity-70 group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 z-0 subtle-grid"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

<div className="max-w-xl">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6 text-balance">
                    Measure What Matters. <br/>
<span className="text-slate-400">Focus Where It Counts.</span>
</h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed text-balance">
                    The Six Dimensions of Success framework helps individuals, leaders, and organizations identify where they are thriving and where they have room to grow.
                </p>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-10">
<a className="inline-flex h-12 items-center justify-center rounded-lg bg-indigo-600 px-8 text-sm font-medium text-white shadow-xl shadow-indigo-200 transition-all hover:bg-indigo-700 hover:shadow-indigo-300" href="#assessment">
                        Take the Free Assessment
                    </a>
<div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-slate-50 px-3 py-2 rounded-md border border-slate-100">
<span className="flex items-center gap-1 text-emerald-600">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Free
                        </span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span>10 Minutes</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span>Instant Results</span>
</div>
</div>

<div className="pt-6 border-t border-slate-100">
<p className="text-xs text-slate-400 font-medium mb-3 uppercase tracking-wider">Trusted by leaders at</p>
<div className="flex gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-sm font-bold tracking-tighter text-slate-800">acme inc.</span>
<span className="text-sm font-bold tracking-tighter text-slate-800">krogan</span>
<span className="text-sm font-bold tracking-tighter text-slate-800">vertex</span>
<span className="text-sm font-bold tracking-tighter text-slate-800">echo</span>
</div>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center lg:justify-end">

<div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 to-blue-50 rounded-full blur-3xl opacity-60 transform translate-x-10 translate-y-10"></div>

<div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform lg:rotate-y-12 lg:rotate-x-2 transition-transform hover:rotate-0 duration-700">

<div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
</div>
<div className="mx-auto w-1/2 h-2 bg-slate-200 rounded-full opacity-50"></div>
</div>

<div className="p-6">
<div className="flex justify-between items-end mb-6">
<div>
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Your Results</div>
<div className="text-xl font-semibold text-slate-900">Assessment Scorecard</div>
</div>
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
<iconify-icon icon="solar:chart-2-linear" width="20"></iconify-icon>
</div>
</div>

<div className="space-y-4">

<div>
<div className="flex justify-between text-xs font-medium mb-1.5">
<span className="text-slate-700">Mind</span>
<span className="text-indigo-600">85%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2">
<div className="bg-indigo-500 h-2 rounded-full w-[85%]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs font-medium mb-1.5">
<span className="text-slate-700">Spirit</span>
<span className="text-indigo-600">72%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2">
<div className="bg-indigo-500 h-2 rounded-full w-[72%] opacity-80"></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs font-medium mb-1.5">
<span className="text-slate-700">Finances</span>
<span className="text-orange-500">40%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2">
<div className="bg-orange-400 h-2 rounded-full w-[40%]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs font-medium mb-1.5">
<span className="text-slate-700">Calling</span>
<span className="text-orange-500">65%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2">
<div className="bg-orange-400 h-2 rounded-full w-[65%] opacity-80"></div>
</div>
</div>
</div>
<div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-100">
<div className="text-xs text-slate-500 leading-relaxed">
<span className="font-semibold text-slate-900">Insight:</span> Your foundational dimensions are strong, but external expressions need alignment.
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-8">Six Dimensions. One Framework.</h2>
<p className="text-lg text-slate-600 leading-relaxed mb-10">
                Success does not come from doing a thousand things once. It comes from doing a handful of things a thousand times.
            </p>
<div className="relative py-10 my-10">
<div aria-hidden="true" className="absolute inset-0 flex items-center">
<div className="w-full border-t border-slate-100"></div>
</div>
<div className="relative flex justify-center">
<span className="bg-white px-6 text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">
                        The question is: which handful?
                    </span>
</div>
</div>
<p className="text-slate-500 text-base max-w-xl mx-auto">
                Most people never answer that question. They drift through life reactive instead of proactive. The Six Dimensions framework gives you the answer.
            </p>
<div className="mt-12 flex justify-center animate-bounce">
<iconify-icon className="text-slate-300" icon="solar:arrow-down-linear" width="24"></iconify-icon>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-100">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">The Six Dimensions of Individual Success</h2>
</div>

<div className="flex justify-center mb-16">
<div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px]">

<div className="absolute inset-0 rounded-full border-[1px] border-dashed border-orange-200"></div>
<svg className="absolute inset-0 w-full h-full rotate-[-90deg]" viewbox="0 0 100 100">

<circle className="opacity-20" cx="50" cy="50" fill="transparent" r="48" stroke="#fed7aa" stroke-dasharray="100 0" strokeWidth="12"></circle>

<circle className="opacity-60" cx="50" cy="50" fill="transparent" r="48" stroke="#f97316" stroke-dasharray="98 2" stroke-dashoffset="0" strokeWidth="2"></circle>
</svg>

<div className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-1 rounded shadow-sm border border-orange-100 text-[10px] md:text-xs font-semibold text-orange-600 uppercase tracking-wider">Finances</div>
<div className="absolute bottom-10 right-4 bg-white px-2 py-1 rounded shadow-sm border border-orange-100 text-[10px] md:text-xs font-semibold text-orange-600 uppercase tracking-wider">Relationships</div>
<div className="absolute bottom-10 left-4 bg-white px-2 py-1 rounded shadow-sm border border-orange-100 text-[10px] md:text-xs font-semibold text-orange-600 uppercase tracking-wider">Calling</div>

<div className="absolute inset-[15%] md:inset-[20%] rounded-full border-[1px] border-dashed border-indigo-200 bg-white shadow-xl flex items-center justify-center">
<div className="text-center">
<span className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-1">The Core</span>
<span className="block text-[10px] text-slate-400">Foundation</span>
</div>
</div>

<div className="absolute top-[28%] left-1/2 -translate-x-1/2 text-[10px] md:text-xs font-bold text-indigo-600 uppercase tracking-wider">Spirit</div>
<div className="absolute bottom-[30%] right-[22%] text-[10px] md:text-xs font-bold text-indigo-600 uppercase tracking-wider">Mind</div>
<div className="absolute bottom-[30%] left-[22%] text-[10px] md:text-xs font-bold text-indigo-600 uppercase tracking-wider">Body</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">

<div className="p-4 rounded-lg bg-white border border-indigo-50 shadow-sm">
<div className="flex items-center gap-2 mb-2 text-indigo-600">
<iconify-icon icon="solar:heart-angle-linear"></iconify-icon>
<h4 className="text-sm font-semibold uppercase tracking-wide">Spirit</h4>
</div>
<p className="text-xs text-slate-500">Your internal foundation and purpose.</p>
</div>
<div className="p-4 rounded-lg bg-white border border-indigo-50 shadow-sm">
<div className="flex items-center gap-2 mb-2 text-indigo-600">
<iconify-icon icon="solar:idea-linear"></iconify-icon>
<h4 className="text-sm font-semibold uppercase tracking-wide">Mind</h4>
</div>
<p className="text-xs text-slate-500">Your mental clarity and continuous learning.</p>
</div>
<div className="p-4 rounded-lg bg-white border border-indigo-50 shadow-sm">
<div className="flex items-center gap-2 mb-2 text-indigo-600">
<iconify-icon icon="solar:dumbbell-linear"></iconify-icon>
<h4 className="text-sm font-semibold uppercase tracking-wide">Body</h4>
</div>
<p className="text-xs text-slate-500">Your physical health and energy management.</p>
</div>

<div className="p-4 rounded-lg bg-white border border-orange-50 shadow-sm">
<div className="flex items-center gap-2 mb-2 text-orange-500">
<iconify-icon icon="solar:wallet-linear"></iconify-icon>
<h4 className="text-sm font-semibold uppercase tracking-wide">Finances</h4>
</div>
<p className="text-xs text-slate-500">Your resource stewardship and stability.</p>
</div>
<div className="p-4 rounded-lg bg-white border border-orange-50 shadow-sm">
<div className="flex items-center gap-2 mb-2 text-orange-500">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
<h4 className="text-sm font-semibold uppercase tracking-wide">Relationships</h4>
</div>
<p className="text-xs text-slate-500">Your connection and influence with others.</p>
</div>
<div className="p-4 rounded-lg bg-white border border-orange-50 shadow-sm">
<div className="flex items-center gap-2 mb-2 text-orange-500">
<iconify-icon icon="solar:briefcase-linear"></iconify-icon>
<h4 className="text-sm font-semibold uppercase tracking-wide">Calling</h4>
</div>
<p className="text-xs text-slate-500">Your vocational contribution and impact.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="assessment">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">One Framework. Three Applications.</h2>
<p className="text-slate-500">Select the assessment that fits your current focus.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="relative group rounded-2xl border border-indigo-100 bg-gradient-to-b from-indigo-50/50 to-white p-8 shadow-xl shadow-indigo-100/50 transition-all hover:shadow-2xl hover:shadow-indigo-100/60 hover:-translate-y-1">
<div className="absolute -top-3 left-8 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Most Popular</div>
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Individual Success</h3>
<p className="text-sm text-slate-500 mb-6 min-h-[40px]">For those seeking personal growth and holistic alignment.</p>
<ul className="space-y-3 mb-8 text-sm text-slate-600">
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Spirit, Mind, Body</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Finances, Relationships</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Personal Roadmap</li>
</ul>
<button className="w-full rounded-lg bg-indigo-600 py-3 text-sm font-medium text-white shadow-md shadow-indigo-200 transition-colors hover:bg-indigo-700">
                        Take Individual Assessment
                    </button>
</div>

<div className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-slate-300 hover:shadow-lg hover:-translate-y-1">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
<iconify-icon icon="solar:flag-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Leadership Success</h3>
<p className="text-sm text-slate-500 mb-6 min-h-[40px]">For those who influence others and drive team performance.</p>
<ul className="space-y-3 mb-8 text-sm text-slate-600">
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Vision &amp; Strategy</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> People Development</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Leadership Impact</li>
</ul>
<button className="w-full rounded-lg border border-slate-200 bg-white py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900">
                        Take Leadership Assessment
                    </button>
</div>

<div className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-slate-300 hover:shadow-lg hover:-translate-y-1">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
<iconify-icon icon="solar:buildings-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Organizational Success</h3>
<p className="text-sm text-slate-500 mb-6 min-h-[40px]">For teams and companies scaling culture and systems.</p>
<ul className="space-y-3 mb-8 text-sm text-slate-600">
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Systems &amp; Processes</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Marketplace Health</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Cultural Alignment</li>
</ul>
<button className="w-full rounded-lg border border-slate-200 bg-white py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900">
                        Take Org Assessment
                    </button>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-slate-100 bg-slate-50/50">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px border-t border-dashed border-slate-300 -z-10 transform -translate-y-8"></div>

<div className="flex flex-col items-center text-center bg-slate-50 md:bg-transparent px-4">
<div className="w-16 h-16 rounded-full bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shadow-sm mb-4">
<iconify-icon icon="solar:cursor-linear" width="28"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 mb-1">Choose Assessment</h4>
<p className="text-xs text-slate-500">Select your path.</p>
</div>

<div className="flex flex-col items-center text-center bg-slate-50 md:bg-transparent px-4">
<div className="w-16 h-16 rounded-full bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shadow-sm mb-4">
<iconify-icon icon="solar:checklist-minimalistic-linear" width="28"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 mb-1">Answer Honestly</h4>
<p className="text-xs text-slate-500">10 minutes of reflection.</p>
</div>

<div className="flex flex-col items-center text-center bg-slate-50 md:bg-transparent px-4">
<div className="w-16 h-16 rounded-full bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shadow-sm mb-4">
<iconify-icon icon="solar:document-text-linear" width="28"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 mb-1">Get Results</h4>
<p className="text-xs text-slate-500">Instant personalized report.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="bg-slate-900 rounded-2xl p-8 text-white shadow-2xl relative">
<div className="absolute top-0 right-0 p-32 bg-indigo-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
<div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
<h3 className="font-medium tracking-tight">Your Diagnostic Score</h3>
<span className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">Private Report</span>
</div>
<div className="space-y-6">

<div>
<div className="flex justify-between text-sm text-slate-400 mb-2">
<span>Mind (Learning)</span>
<span>88/100</span>
</div>
<div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-400 w-[88%]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-sm text-slate-400 mb-2">
<span>Finances (Stability)</span>
<span>42/100</span>
</div>
<div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-amber-400 w-[42%]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-sm text-slate-400 mb-2">
<span>Relationships (Connection)</span>
<span>65/100</span>
</div>
<div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-400 w-[65%]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-sm text-slate-400 mb-2">
<span>Spirit (Foundation)</span>
<span>92/100</span>
</div>
<div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-400 w-[92%]"></div>
</div>
</div>
</div>
</div>

<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Your Personalized Roadmap</h2>
<p className="text-slate-500 mb-8 leading-relaxed">
                    After completing your assessment, you don't just get a number. You get a diagnosis. This tool separates symptoms from root causes.
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-600 mt-1" icon="solar:verified-check-linear" width="20"></iconify-icon>
<span className="text-sm text-slate-700">Detailed scoring across all six dimensions.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-600 mt-1" icon="solar:verified-check-linear" width="20"></iconify-icon>
<span className="text-sm text-slate-700">Identification of hidden strengths and critical gaps.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-600 mt-1" icon="solar:verified-check-linear" width="20"></iconify-icon>
<span className="text-sm text-slate-700">Actionable steps to move from red to green.</span>
</li>
</ul>
<div className="border-l-4 border-indigo-600 pl-4 py-1">
<p className="text-slate-900 font-medium italic">"This is not a personality label. It is a diagnostic tool for growth."</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100">

<div className="flex-1 order-2 md:order-1">
<div className="inline-block px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">About the Creator</div>
<h2 className="text-2xl font-semibold text-slate-900 mb-4">Developed Through Decades of Study</h2>
<p className="text-slate-600 text-sm leading-relaxed mb-6">
                        The Six Dimensions framework was developed by <span className="text-slate-900 font-semibold">Rich Turner</span>, a former <span className="text-slate-900 font-semibold">Marine Corps helicopter pilot</span> and founder of Rich in Thought.
                    </p>
<p className="text-slate-600 text-sm leading-relaxed">
                        Combining military precision with deep psychological insight, Rich built this framework to help leaders navigate the fog of life and business with absolute clarity.
                    </p>
</div>

<div className="w-full md:w-1/3 order-1 md:order-2 flex justify-center">
<div className="w-48 h-48 rounded-full bg-slate-200 overflow-hidden border-4 border-white shadow-lg relative">

<div className="absolute inset-0 flex items-center justify-center bg-slate-300 text-slate-500">
<iconify-icon icon="solar:user-linear" width="64"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-b border-slate-100">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Diagnostic, Not Typological</h2>
</div>
<div className="grid md:grid-cols-2 gap-0 md:divide-x divide-slate-100">
<div className="p-8 text-center md:text-right">
<h3 className="text-slate-400 font-medium mb-2 text-sm uppercase tracking-wide">Most Assessments</h3>
<p className="text-slate-500 text-lg">Place you in a category.</p>
<p className="text-slate-400 text-sm mt-2">"You are an ENTJ." (A Destination)</p>
</div>
<div className="p-8 text-center md:text-left">
<h3 className="text-indigo-600 font-medium mb-2 text-sm uppercase tracking-wide">Six Dimensions</h3>
<p className="text-slate-900 font-medium text-lg">Diagnoses where you stand.</p>
<p className="text-slate-500 text-sm mt-2">"Your mind is strong, but body is weak." (A Starting Point)</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">

<div className="p-6 bg-slate-50 rounded-xl">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-4">"Finally, a framework that doesn't just tell me who I am, but tells me what to do next. The clarity was immediate."</p>
<div className="text-xs font-semibold text-slate-900">Sarah J. <span className="text-slate-400 font-normal">/ CEO</span></div>
</div>

<div className="p-6 bg-slate-50 rounded-xl">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-4">"We used the Organizational Assessment for our leadership retreat. It highlighted gaps we had ignored for years."</p>
<div className="text-xs font-semibold text-slate-900">Mark T. <span className="text-slate-400 font-normal">/ Founder</span></div>
</div>

<div className="p-6 bg-slate-50 rounded-xl">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-4">"Rich's background brings a discipline to this model that is lacking in other fluffier self-help tools."</p>
<div className="text-xs font-semibold text-slate-900">David R. <span className="text-slate-400 font-normal">/ VP Sales</span></div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 py-20 text-center">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Start With Clarity</h2>
<p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                You cannot improve what you do not measure. The assessment is free, private, and takes less than 10 minutes.
            </p>
<div className="flex flex-col items-center gap-6">
<a className="inline-flex h-14 items-center justify-center rounded-lg bg-white px-10 text-base font-semibold text-slate-900 shadow-xl transition-all hover:bg-slate-100 hover:scale-105" href="#assessment">
                    Take the Free Assessment
                </a>
<a className="text-sm text-slate-500 hover:text-white transition-colors underline decoration-slate-700 underline-offset-4" href="#">
                    Download the Six Dimensions eBook
                </a>
</div>
<div className="mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 gap-4">
<p>© 2023 Rich In Thought. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
