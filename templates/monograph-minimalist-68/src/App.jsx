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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 bg-zinc-900 rounded-md flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-300">
<span className="text-xs font-semibold tracking-tighter">M</span>
</div>
<span className="font-semibold tracking-tight text-sm">Monograph</span>
</a>
<div className="flex items-center gap-6">
<a className="hidden sm:block text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-medium" href="#chapters">Chapters</a>
<a className="hidden sm:block text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-medium" href="#author">Author</a>
<a className="text-sm bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors font-medium flex items-center gap-2" href="#pricing">
                    Buy now
                    <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-zinc-50 to-transparent -z-10 rounded-b-[50%] blur-3xl opacity-60"></div>
<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 mb-6">
<span className="flex h-2 w-2 rounded-full bg-zinc-900"></span>
<span className="text-xs font-medium text-zinc-600 uppercase tracking-wide">Second Edition Released</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter text-zinc-900 leading-[1.1] mb-6">
                    Refactoring <br/>
<span className="text-zinc-400">UI Patterns.</span>
</h1>
<p className="text-lg text-zinc-500 leading-relaxed mb-8 max-w-md">
                    The comprehensive guide to building scalable, maintainable, and aesthetically pleasing user interfaces. Stop guessing, start designing with logic.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="h-12 px-8 rounded-lg bg-zinc-900 text-white font-medium flex items-center justify-center gap-2 hover:bg-zinc-800 hover:translate-y-[-1px] transition-all shadow-lg shadow-zinc-200" href="#pricing">
                        Get the Book
                        <span className="text-zinc-400">|</span>
<span className="font-normal text-zinc-300">$39</span>
</a>
<a className="h-12 px-8 rounded-lg border border-zinc-200 text-zinc-700 font-medium flex items-center justify-center gap-2 hover:bg-zinc-50 hover:border-zinc-300 transition-all bg-white" href="#preview">
<iconify-icon icon="lucide:eye" width="18"></iconify-icon>
                        Read Sample
                    </a>
</div>
<div className="mt-10 flex items-center gap-4 text-sm text-zinc-500">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-zinc-200 flex items-center justify-center text-xs font-medium text-zinc-600">JD</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-zinc-300 flex items-center justify-center text-xs font-medium text-zinc-600">AS</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-zinc-400 flex items-center justify-center text-xs font-medium text-zinc-600">MR</div>
</div>
<p>Read by 10,000+ engineers</p>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center perspective-1000">

<div className="relative w-[320px] aspect-[3/4] bg-zinc-900 rounded-r-2xl rounded-l-sm shadow-2xl transform rotate-y-[-12deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out cursor-pointer group">

<div className="absolute left-0 top-0 bottom-0 w-4 book-spine z-10 rounded-l-sm"></div>

<div className="flex flex-col opacity-90 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<svg className="text-zinc-500" data-icon-set="lucide" data-lucide="layers" height="32" style={{}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
<span className="text-zinc-600 text-xs font-mono tracking-widest">VOL. 02</span>
</div>
<div className="space-y-2">
<h3 className="leading-none group-hover:text-zinc-200 transition-colors text-4xl font-semibold text-white tracking-tighter">RefactoringUI Patterns</h3>
<p className="text-zinc-400 text-sm font-medium">Adam Wathan &amp; Steve Schoger style</p>
</div>
<div className="border-t border-zinc-700 pt-6">
<div className="flex gap-4">
<div className="h-1 flex-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-zinc-600"></div>
</div>
<div className="h-1 w-12 bg-zinc-800 rounded-full"></div>
</div>
</div>
</div>

<div className="absolute top-1 bottom-1 -right-4 w-4 bg-zinc-100 rounded-r-md transform skew-y-[12deg] origin-left border-l border-zinc-200 shadow-md flex flex-col justify-center gap-[1px] overflow-hidden">
<div className="w-full h-[1px] bg-zinc-300"></div>
<div className="w-full h-[1px] bg-zinc-300"></div>
<div className="w-full h-[1px] bg-zinc-300"></div>
<div className="w-full h-[1px] bg-zinc-300"></div>
<div className="w-full h-[1px] bg-zinc-300"></div>
</div>
</div>

<div className="absolute -z-10 w-[500px] h-[500px] border border-zinc-100 rounded-full"></div>
<div className="absolute -z-10 w-[300px] h-[300px] border border-dashed border-zinc-200 rounded-full"></div>
</div>
</div>
</header>

<section className="border-y border-zinc-100 bg-zinc-50/50">
<div className="max-w-6xl mx-auto px-6 py-12">
<p className="text-center text-sm font-medium text-zinc-400 mb-8">TRUSTED BY DESIGN TEAMS AT</p>
<div className="flex flex-wrap justify-center gap-12 lg:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 font-semibold text-zinc-800 text-xl tracking-tight"><iconify-icon className="rotate-180" icon="lucide:triangle"></iconify-icon> Vercel</div>
<div className="flex items-center gap-2 font-semibold text-zinc-800 text-xl tracking-tight"><iconify-icon icon="lucide:hexagon"></iconify-icon> Linear</div>
<div className="flex items-center gap-2 font-semibold text-zinc-800 text-xl tracking-tight"><iconify-icon icon="lucide:box"></iconify-icon> Raycast</div>
<div className="flex items-center gap-2 font-semibold text-zinc-800 text-xl tracking-tight"><iconify-icon icon="lucide:command"></iconify-icon> Stripe</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-6xl mx-auto">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Why this book is different.</h2>
<p className="text-zinc-500 text-lg">Most design books talk about theory. This one is about execution. A handbook for developers who want their projects to look professional.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-colors">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 mb-6 shadow-sm">
<iconify-icon icon="lucide:layout-grid" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">Component Systems</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Learn how to build atomic design systems that scale without becoming unmanageable spaghetti code.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-colors">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 mb-6 shadow-sm">
<iconify-icon icon="lucide:palette" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">Color Theory for Devs</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Stop using hex pickers randomly. Learn the math behind accessible, high-contrast color palettes.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-colors">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 mb-6 shadow-sm">
<iconify-icon icon="lucide:type" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">Typography Scales</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Master vertical rhythm, modular scales, and font pairings that make your text look professional.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-900 text-white" id="chapters">
<div className="max-w-4xl mx-auto">
<div className="flex items-end justify-between mb-12 border-b border-zinc-800 pb-6">
<h2 className="text-3xl font-semibold tracking-tight">Table of Contents</h2>
<span className="text-zinc-500 font-mono text-sm">240 PAGES</span>
</div>
<div className="space-y-2">

<div className="group flex items-center justify-between py-4 px-4 rounded-lg hover:bg-zinc-800/50 transition-colors cursor-default">
<div className="flex items-center gap-4">
<span className="font-mono text-zinc-500 text-sm">01</span>
<span className="font-medium text-lg tracking-tight group-hover:text-zinc-200 transition-colors">The Foundation of Layout</span>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-zinc-400 transition-colors" icon="lucide:lock-open" width="16"></iconify-icon>
</div>

<div className="group flex items-center justify-between py-4 px-4 rounded-lg hover:bg-zinc-800/50 transition-colors cursor-default">
<div className="flex items-center gap-4">
<span className="font-mono text-zinc-500 text-sm">02</span>
<span className="font-medium text-lg tracking-tight group-hover:text-zinc-200 transition-colors">Hierarchy &amp; Contrast</span>
</div>
<iconify-icon className="text-zinc-700" icon="lucide:lock" width="16"></iconify-icon>
</div>

<div className="group flex items-center justify-between py-4 px-4 rounded-lg hover:bg-zinc-800/50 transition-colors cursor-default">
<div className="flex items-center gap-4">
<span className="font-mono text-zinc-500 text-sm">03</span>
<span className="font-medium text-lg tracking-tight group-hover:text-zinc-200 transition-colors">Designing with Data</span>
</div>
<iconify-icon className="text-zinc-700" icon="lucide:lock" width="16"></iconify-icon>
</div>

<div className="group flex items-center justify-between py-4 px-4 rounded-lg hover:bg-zinc-800/50 transition-colors cursor-default">
<div className="flex items-center gap-4">
<span className="font-mono text-zinc-500 text-sm">04</span>
<span className="font-medium text-lg tracking-tight group-hover:text-zinc-200 transition-colors">Advanced Component States</span>
</div>
<iconify-icon className="text-zinc-700" icon="lucide:lock" width="16"></iconify-icon>
</div>

<div className="group flex items-center justify-between py-4 px-4 rounded-lg hover:bg-zinc-800/50 transition-colors cursor-default">
<div className="flex items-center gap-4">
<span className="font-mono text-zinc-500 text-sm">05</span>
<span className="font-medium text-lg tracking-tight group-hover:text-zinc-200 transition-colors">Accessibility Patterns</span>
</div>
<div className="px-2 py-0.5 rounded text-[10px] font-bold bg-zinc-800 text-zinc-400 border border-zinc-700 uppercase tracking-wider">New</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium border-b border-transparent hover:border-zinc-500 pb-0.5" href="#pricing">
                    View full curriculum <iconify-icon icon="lucide:arrow-down" width="14"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50" id="pricing">
<div className="max-w-6xl mx-auto">
<div className="text-center max-w-xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Simple, transparent pricing.</h2>
<p className="text-zinc-500">Pay once, own it forever. Includes all future updates and bonus materials.</p>
</div>
<div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm flex flex-col relative overflow-hidden">
<div className="mb-6">
<h3 className="text-lg font-semibold text-zinc-900">The eBook</h3>
<p className="text-sm text-zinc-500 mt-2">Perfect for getting started with UI design.</p>
</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-semibold tracking-tight text-zinc-900">$39</span>
<span className="text-zinc-400 text-sm">USD</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-900 mt-0.5 shrink-0" icon="lucide:check" width="16"></iconify-icon>
                            PDF, ePub and Kindle formats
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-900 mt-0.5 shrink-0" icon="lucide:check" width="16"></iconify-icon>
                            240 pages of content
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-900 mt-0.5 shrink-0" icon="lucide:check" width="16"></iconify-icon>
                            Access to community Discord
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-zinc-200 text-zinc-900 font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all flex items-center justify-center gap-2">
                        Buy eBook
                    </button>
</div>

<div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-xl flex flex-col relative overflow-hidden text-white transform md:-translate-y-4">
<div className="absolute top-0 right-0 px-4 py-1 bg-white text-zinc-900 text-xs font-bold rounded-bl-lg tracking-wide uppercase">Best Value</div>
<div className="mb-6">
<h3 className="text-lg font-semibold text-white">Complete Bundle</h3>
<p className="text-sm text-zinc-400 mt-2">The book plus all video tutorials and source files.</p>
</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-semibold tracking-tight text-white">$79</span>
<span className="text-zinc-400 text-sm">USD</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<div className="p-0.5 rounded-full bg-white text-zinc-900 flex items-center justify-center">
<iconify-icon icon="lucide:check" width="10"></iconify-icon>
</div>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<div className="p-0.5 rounded-full bg-white text-zinc-900 flex items-center justify-center">
<iconify-icon icon="lucide:check" width="10"></iconify-icon>
</div>
                            5 hours of video tutorials
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<div className="p-0.5 rounded-full bg-white text-zinc-900 flex items-center justify-center">
<iconify-icon icon="lucide:check" width="10"></iconify-icon>
</div>
                            Figma source files &amp; component library
                        </li>
</ul>
<button className="w-full py-3 rounded-lg bg-white text-zinc-900 font-medium hover:bg-zinc-100 transition-all flex items-center justify-center gap-2">
                        Get the Bundle
                        <iconify-icon icon="lucide:sparkles" width="16"></iconify-icon>
</button>
<p className="text-center text-xs text-zinc-500 mt-4">30-day money-back guarantee</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-zinc-100">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-10">Frequently Asked Questions</h2>
<div className="space-y-8">

<div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Is this for beginners?</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Yes and no. It assumes you know basic HTML/CSS. If you can build a layout but struggle to make it look "good", this is for you. If you've never written code, start elsewhere.</p>
</div>

<div>
<h3 className="text-base font-medium text-zinc-900 mb-2">What format are the files?</h3>
<p className="text-sm text-zinc-500 leading-relaxed">The book comes in PDF, EPUB, and MOBI. The design files are for Figma, and code examples are standard HTML/React components.</p>
</div>

<div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Can I share this with my team?</h3>
<p className="text-sm text-zinc-500 leading-relaxed">The license is per individual. If you need a team license for your company, please contact support for a bulk discount.</p>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-zinc-100 bg-zinc-50">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-zinc-900 rounded-sm flex items-center justify-center text-white">
<span className="text-[10px] font-bold">M</span>
</div>
<span className="text-sm font-semibold text-zinc-900 tracking-tight">Monograph</span>
</div>
<div className="flex gap-6 text-sm text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Twitter</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Instagram</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Support</a>
</div>
<div className="text-xs text-zinc-400">
                © 2024 Monograph Inc. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
