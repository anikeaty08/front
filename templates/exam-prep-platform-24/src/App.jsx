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



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="bg-[#0b1f40] text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20">
<div className="flex items-center gap-2 cursor-pointer">
<div className="bg-white/10 p-2 rounded-lg">
<i className="w-6 h-6 text-white" data-lucide="book-open" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-medium tracking-tight">PrepMaster</span>
</div>
<div className="hidden md:block">
<div className="flex items-baseline space-x-8">
<a className="text-white text-base font-medium" href="#">Home</a>
<a className="text-blue-200 hover:text-white text-base font-normal transition-colors" href="#">MCQs</a>
<a className="text-blue-200 hover:text-white text-base font-normal transition-colors" href="#">Past Papers</a>
<a className="text-blue-200 hover:text-white text-base font-normal transition-colors" href="#">Smart Tests</a>
<a className="text-blue-200 hover:text-white text-base font-normal transition-colors" href="#">Exam Guide</a>
</div>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="text-blue-200 hover:text-white text-base font-normal transition-colors" href="#">Sign Up</a>
<a className="bg-white text-[#0b1f40] px-5 py-2 rounded-lg text-base font-medium hover:bg-gray-100 transition-colors shadow-sm" href="#">Login</a>
</div>
<div className="md:hidden flex items-center">
<button className="text-blue-200 hover:text-white">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</nav>

<section className="bg-gradient-to-b from-[#0b1f40] to-[#153b75] pt-16 pb-24 overflow-hidden relative">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="max-w-2xl">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight mb-6">
                        Prepare Smarter for <br/> Competitive Exams in Pakistan
                    </h1>
<div className="space-y-4 mb-8">
<p className="text-lg text-blue-100 font-normal">
                            Practice MCQs, Past Papers &amp; Mock Tests.<br/>
                            Track Your Progress &amp; Find Your Weak Areas – <span className="text-green-400 font-medium">100% Free.</span>
</p>
<p className="text-base text-blue-200/80 font-normal italic flex items-center gap-2">
<i className="w-5 h-5" data-lucide="shield-check" strokeWidth="1.5"></i>
                            Trusted by thousands preparing for PPSC, FPSC, NTS, ASF, FIA
                        </p>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 py-3.5 rounded-xl text-lg font-medium shadow-lg shadow-green-900/20 transition-all flex items-center justify-center gap-2">
                            Start Practicing MCQs
                            <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-xl text-lg font-medium shadow-lg shadow-blue-900/20 transition-all flex items-center justify-center gap-2">
                            Take a Free Smart Test
                            <i className="w-5 h-5" data-lucide="laptop" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="relative mx-auto w-full max-w-md perspective-1000">
<div className="bg-white rounded-2xl p-8 shadow-2xl border border-white/20 transform rotate-y-[-5deg] rotate-x-[5deg] transition-transform hover:rotate-0 duration-500">
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-6 flex justify-between items-center">
                            Mock Test Report
                            <i className="w-5 h-5 text-gray-400" data-lucide="file-bar-chart" strokeWidth="1.5"></i>
</h3>
<div className="flex items-center justify-between mb-8">
<div className="space-y-6">
<div>
<div className="flex items-center gap-2 mb-1">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-base text-gray-600 font-normal">Score:</span>
</div>
<span className="text-2xl font-medium tracking-tight text-orange-500 ml-4">72%</span>
</div>
<div>
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<span className="text-base text-gray-600 font-normal">Weak Areas:</span>
</div>
<ul className="text-base text-gray-900 font-normal space-y-2 ml-4">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-gray-400" data-lucide="minus" strokeWidth="1.5"></i> Pakistan Affairs
                                        </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-gray-400" data-lucide="minus" strokeWidth="1.5"></i> Math Reasoning
                                        </li>
</ul>
</div>
</div>

<div className="relative w-32 h-32 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">
<path className="text-gray-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
<path className="text-blue-600" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="72, 100" strokeLinecap="round" strokeWidth="3"></path>
<path className="text-green-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="20, 100" stroke-dashoffset="-72" strokeLinecap="round" strokeWidth="3"></path>
<path className="text-orange-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="8, 100" stroke-dashoffset="-92" strokeLinecap="round" strokeWidth="3"></path>
</svg>
<div className="absolute flex flex-col items-center">
<span className="text-3xl font-medium tracking-tight text-gray-900">72%</span>
</div>
</div>
</div>
<div className="pt-6 border-t border-gray-100 flex items-center justify-between">
<span className="text-base text-gray-600 font-normal flex items-center gap-2">
<i className="w-4 h-4 text-blue-600" data-lucide="trending-up" strokeWidth="1.5"></i> Your Rank:
                            </span>
<div className="bg-[#0b1f40] text-white px-6 py-2 rounded-full text-base font-medium shadow-sm">
                                Top 18%
                            </div>
</div>
</div>

<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white relative">
<div className="max-w-4xl mx-auto px-4 text-center">
<div className="flex items-center justify-center gap-4 mb-10">
<div className="h-px bg-gray-200 w-12"></div>
<h2 className="text-2xl font-medium tracking-tight text-gray-900">Explore Exams</h2>
<div className="h-px bg-gray-200 w-12"></div>
</div>
<div className="flex flex-wrap justify-center gap-4">
<button className="bg-white border border-gray-200 shadow-sm text-gray-700 hover:text-blue-600 hover:border-blue-200 hover:shadow-md px-8 py-3 rounded-full text-base font-medium transition-all">PPSC</button>
<button className="bg-white border border-gray-200 shadow-sm text-gray-700 hover:text-blue-600 hover:border-blue-200 hover:shadow-md px-8 py-3 rounded-full text-base font-medium transition-all">FPSC</button>
<button className="bg-white border border-gray-200 shadow-sm text-gray-700 hover:text-blue-600 hover:border-blue-200 hover:shadow-md px-8 py-3 rounded-full text-base font-medium transition-all">NTS</button>
<button className="bg-white border border-gray-200 shadow-sm text-gray-700 hover:text-blue-600 hover:border-blue-200 hover:shadow-md px-8 py-3 rounded-full text-base font-medium transition-all">One-Paper</button>
<button className="bg-white border border-gray-200 shadow-sm text-gray-700 hover:text-blue-600 hover:border-blue-200 hover:shadow-md px-8 py-3 rounded-full text-base font-medium transition-all">ASF / FIA</button>
<button className="bg-white border border-gray-200 shadow-sm text-gray-700 hover:text-blue-600 hover:border-blue-200 hover:shadow-md px-8 py-3 rounded-full text-base font-medium transition-all">Educators</button>
</div>
</div>
</section>

<section className="py-20 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-center gap-4 mb-16">
<div className="h-px bg-gray-300 w-16"></div>
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-gray-900">Why This Platform is Different</h2>
<div className="h-px bg-gray-300 w-16"></div>
</div>
<div className="grid md:grid-cols-3 gap-6 lg:gap-8">

<div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-6">
<i className="w-6 h-6 text-green-500" data-lucide="zap" strokeWidth="1.5"></i>
<h3 className="text-xl font-medium tracking-tight text-gray-900">Smart Preparation</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5"></div>
<span className="text-lg text-gray-600 font-normal">Topic-Wise MCQs with detailed explanations</span>
</li>
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5"></div>
<span className="text-lg text-gray-600 font-normal">Past Paper Analysis &amp; frequency tracking</span>
</li>
</ul>
</div>

<div className="bg-gradient-to-br from-[#1a4a8d] to-[#0b1f40] rounded-2xl p-8 shadow-lg transform md:-translate-y-4 border border-blue-400/20">
<div className="flex items-center gap-3 mb-6 border-b border-blue-400/20 pb-4">
<i className="w-6 h-6 text-blue-300" data-lucide="target" strokeWidth="1.5"></i>
<h3 className="text-xl font-medium tracking-tight text-white">Progress Tracking</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2.5"></div>
<span className="text-lg text-blue-50 font-normal">Deep Weak Area Analysis</span>
</li>
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2.5"></div>
<span className="text-lg text-blue-50 font-normal">Performance Insights &amp; trending graphs</span>
</li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-6">
<i className="w-6 h-6 text-blue-600" data-lucide="award" strokeWidth="1.5"></i>
<h3 className="text-xl font-medium tracking-tight text-gray-900">Exam Focused</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></div>
<span className="text-lg text-gray-600 font-normal">Real Exam Simulation interface</span>
</li>
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></div>
<span className="text-lg text-gray-600 font-normal">Rank Prediction based on mock scores</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-gray-900">Latest MCQs &amp; Past Papers</h2>

<div className="flex items-center p-1 bg-gray-100 rounded-lg w-max border border-gray-200/60">
<button className="px-5 py-2 text-base font-medium bg-[#1a4a8d] text-white rounded-md shadow-sm transition-all">MCQs</button>
<button className="px-5 py-2 text-base font-normal text-gray-600 hover:text-gray-900 transition-all">Past Papers</button>
<button className="px-5 py-2 text-base font-normal text-gray-600 hover:text-gray-900 transition-all">Current Affairs</button>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
<div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">

<div className="p-6 sm:p-8 space-y-6">
<div className="flex items-start gap-4 group cursor-pointer">
<div className="mt-1 bg-blue-50 text-blue-600 p-1.5 rounded-md group-hover:bg-blue-600 group-hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="info" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-lg text-gray-900 font-normal group-hover:text-blue-600 transition-colors">Who was the first President of Pakistan?</h4>
<p className="text-base text-gray-500 mt-1">General Knowledge • Added 2h ago</p>
</div>
</div>
<div className="flex items-start gap-4 group cursor-pointer">
<div className="mt-1 bg-green-50 text-green-600 p-1.5 rounded-md group-hover:bg-green-500 group-hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="help-circle" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-lg text-gray-900 font-normal group-hover:text-green-600 transition-colors">Solve: 12 × 15 - 6 = ?</h4>
<p className="text-base text-gray-500 mt-1">Basic Math • Frequently asked in NTS</p>
</div>
</div>
<div className="flex items-start gap-4 group cursor-pointer">
<div className="mt-1 bg-blue-50 text-blue-600 p-1.5 rounded-md group-hover:bg-blue-600 group-hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="info" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-lg text-gray-900 font-normal group-hover:text-blue-600 transition-colors">Identify the synonym for "Benevolent".</h4>
<p className="text-base text-gray-500 mt-1">English Vocab • FPSC Past Paper 2022</p>
</div>
</div>
</div>

<div className="p-6 sm:p-8 bg-gray-50/50 flex flex-col justify-center">
<div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm mb-6">
<div className="flex items-center gap-2 mb-4 text-gray-700">
<i className="w-5 h-5 text-blue-500" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
<span className="text-lg font-medium">Performance Insights</span>
</div>
<p className="text-base text-gray-600 mb-4">Track your accuracy across different subjects visually.</p>

<div className="flex flex-wrap gap-1.5">

<div className="w-5 h-5 rounded-sm bg-green-500"></div><div className="w-5 h-5 rounded-sm bg-green-400"></div><div className="w-5 h-5 rounded-sm bg-blue-500"></div><div className="w-5 h-5 rounded-sm bg-blue-400"></div><div className="w-5 h-5 rounded-sm bg-gray-200"></div><div className="w-5 h-5 rounded-sm bg-gray-200"></div>
<div className="w-5 h-5 rounded-sm bg-green-600"></div><div className="w-5 h-5 rounded-sm bg-orange-400"></div><div className="w-5 h-5 rounded-sm bg-orange-500"></div><div className="w-5 h-5 rounded-sm bg-blue-500"></div><div className="w-5 h-5 rounded-sm bg-blue-400"></div><div className="w-5 h-5 rounded-sm bg-gray-200"></div>
<div className="w-5 h-5 rounded-sm bg-green-500"></div><div className="w-5 h-5 rounded-sm bg-green-400"></div><div className="w-5 h-5 rounded-sm bg-orange-500"></div><div className="w-5 h-5 rounded-sm bg-red-500"></div><div className="w-5 h-5 rounded-sm bg-blue-600"></div><div className="w-5 h-5 rounded-sm bg-green-400"></div>
</div>
</div>
<div className="text-center">
<button className="text-blue-600 hover:text-blue-800 text-base font-medium flex items-center justify-center gap-2 mx-auto">
                                View Full Directory
                                <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
<div className="bg-gray-50 border-t border-gray-200 px-6 py-4 text-center">
<p className="text-base text-gray-500 flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="unlock" strokeWidth="1.5"></i>
                        No Signup Required to Read MCQs &amp; Answers
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-gray-50 to-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-gray-900 mb-16">Identify &amp; Improve Your Weak Areas</h2>
<div className="relative max-w-5xl mx-auto">

<div className="absolute inset-0 bg-[#0b1f40] rounded-3xl transform -skew-y-2 opacity-95 shadow-xl"></div>
<div className="relative grid md:grid-cols-2 gap-8 p-8 sm:p-12">

<div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex flex-col justify-between">
<div className="mb-6">

<div className="grid grid-cols-6 gap-2 bg-gray-50 p-4 rounded-lg border border-gray-100">
<div className="w-full aspect-square rounded bg-green-500"></div><div className="w-full aspect-square rounded bg-green-400"></div><div className="w-full aspect-square rounded bg-yellow-400"></div><div className="w-full aspect-square rounded bg-green-500"></div><div className="w-full aspect-square rounded bg-green-300"></div><div className="w-full aspect-square rounded bg-gray-200"></div>
<div className="w-full aspect-square rounded bg-green-600"></div><div className="w-full aspect-square rounded bg-orange-400"></div><div className="w-full aspect-square rounded bg-orange-500"></div><div className="w-full aspect-square rounded bg-green-400"></div><div className="w-full aspect-square rounded bg-yellow-400"></div><div className="w-full aspect-square rounded bg-gray-200"></div>
<div className="w-full aspect-square rounded bg-yellow-400"></div><div className="w-full aspect-square rounded bg-orange-500"></div><div className="w-full aspect-square rounded bg-red-500"></div><div className="w-full aspect-square rounded bg-red-400"></div><div className="w-full aspect-square rounded bg-orange-400"></div><div className="w-full aspect-square rounded bg-green-400"></div>
</div>
</div>
<div className="flex items-center gap-2 text-gray-900">
<div className="w-2 h-2 rounded-full bg-blue-600"></div>
<span className="text-lg font-medium">Weak Topic Heatmap</span>
</div>
</div>

<div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex flex-col justify-between transform md:translate-y-8">
<div className="mb-6 h-40 w-full relative">

<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 40">

<line stroke="#f3f4f6" strokeWidth="0.5" x1="0" x2="100" y1="10" y2="10"></line>
<line stroke="#f3f4f6" strokeWidth="0.5" x1="0" x2="100" y1="20" y2="20"></line>
<line stroke="#f3f4f6" strokeWidth="0.5" x1="0" x2="100" y1="30" y2="30"></line>

<polyline fill="none" points="0,30 20,22 40,28 60,15 80,18 100,8" stroke="#2563eb" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></polyline>
<circle cx="20" cy="22" fill="#2563eb" r="1.5"></circle>
<circle cx="60" cy="15" fill="#2563eb" r="1.5"></circle>
<circle cx="100" cy="8" fill="#2563eb" r="1.5"></circle>

<polyline fill="none" points="0,15 20,8 40,20 60,10 80,5 100,12" stroke="#f97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></polyline>
<circle cx="40" cy="20" fill="#f97316" r="1.5"></circle>
<circle cx="80" cy="5" fill="#f97316" r="1.5"></circle>
</svg>
</div>
<div className="flex items-center gap-2 text-gray-900">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-lg font-medium">Accuracy &amp; Time Analysis</span>
</div>
</div>
</div>
</div>
<div className="mt-20">
<button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-xl text-lg font-medium shadow-lg shadow-blue-900/10 transition-all inline-flex items-center gap-2">
                    Create Free Account &amp; See Your Analysis
                    <i className="w-5 h-5" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-center gap-4 mb-12">
<div className="h-px bg-gray-200 w-12"></div>
<h2 className="text-2xl font-medium tracking-tight text-gray-900">Free Tools for Exam Takers</h2>
<div className="h-px bg-gray-200 w-12"></div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<a className="group flex items-center gap-4 p-5 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-md bg-white transition-all" href="#">
<div className="bg-green-100 p-3 rounded-xl group-hover:bg-green-500 group-hover:text-white transition-colors text-green-600">
<i className="w-6 h-6" data-lucide="calendar-check" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Exam Readiness Calculator</span>
</a>

<a className="group flex items-center gap-4 p-5 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-md bg-white transition-all" href="#">
<div className="bg-blue-100 p-3 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors text-blue-600">
<i className="w-6 h-6" data-lucide="pie-chart" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Weak Area Analyzer</span>
</a>

<a className="group flex items-center gap-4 p-5 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-md bg-white transition-all" href="#">
<div className="bg-orange-100 p-3 rounded-xl group-hover:bg-orange-500 group-hover:text-white transition-colors text-orange-600">
<i className="w-6 h-6" data-lucide="list-checks" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Syllabus Coverage Checker</span>
</a>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-[#0b1f40]">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0b1f40] via-transparent to-[#0b1f40]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white text-center mb-16">Join Thousands of Successful Candidates Nationwide!</h2>
<div className="grid md:grid-cols-3 gap-6 lg:gap-8">

<div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/10 relative">
<i className="absolute top-6 right-6 w-8 h-8 text-gray-200" data-lucide="quote" strokeWidth="1"></i>
<p className="text-base text-gray-600 font-normal mb-6 relative z-10">"The weak area analyzer was a game-changer for my PPSC prep. I focused exactly where I needed to and cleared the written test on my first attempt."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium text-lg">
                            SA
                        </div>
<div>
<h4 className="text-base font-medium text-gray-900">Sana A.</h4>
<div className="flex text-yellow-400 mt-1">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>

<div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/10 relative transform md:-translate-y-4">
<i className="absolute top-6 right-6 w-8 h-8 text-gray-200" data-lucide="quote" strokeWidth="1"></i>
<p className="text-base text-gray-600 font-normal mb-6 relative z-10">"The mock tests interface is exactly like the real FPSC exam. It completely removed my exam day anxiety. Highly recommended platform."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-medium text-lg">
                            UK
                        </div>
<div>
<h4 className="text-base font-medium text-gray-900">Usman K.</h4>
<div className="flex text-yellow-400 mt-1">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>

<div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/10 relative">
<i className="absolute top-6 right-6 w-8 h-8 text-gray-200" data-lucide="quote" strokeWidth="1"></i>
<p className="text-base text-gray-600 font-normal mb-6 relative z-10">"I loved the detailed explanations for every MCQ. It's not just about practicing questions, it's about actually learning the concepts."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-medium text-lg">
                            FZ
                        </div>
<div>
<h4 className="text-base font-medium text-gray-900">Fatima Z.</h4>
<div className="flex text-yellow-400 mt-1">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-gray-300 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-200 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="bg-blue-600 p-2 rounded-lg">
<i className="w-5 h-5 text-white" data-lucide="book-open" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-medium tracking-tight text-gray-900">PrepMaster</span>
</div>
<p className="text-sm text-gray-500 font-normal">© 2024 PrepMaster Pakistan. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
