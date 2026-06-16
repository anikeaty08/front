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



    lucide.createIcons();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="bg-[#000000] w-full border-transparent border-b mb-0 sticky top-0 z-50">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div className="flex cursor-pointer gap-x-2 gap-y-2 items-center">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-900 text-white ring-1 ring-white/20">
<svg className="lucide lucide-layers w-5 h-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<span className="text-lg font-semibold text-stone-50 tracking-tight font-dm-sans">baseteam</span>
</div>
<div className="hidden md:flex gap-8 gap-x-8 gap-y-8 items-center">
<a className="transition-colors text-sm font-medium text-slate-400 tracking-tight hover:text-slate-50" href="#">Platform</a>
<a className="transition-colors text-sm font-medium text-slate-400 tracking-tight hover:text-slate-50" href="#">Product</a>
<a className="transition-colors text-sm font-medium text-slate-400 tracking-tight hover:text-slate-50" href="#">Customers</a>
<a className="transition-colors text-sm font-medium text-slate-400 tracking-tight hover:text-slate-50" href="#">Changelog</a>
</div>
<div className="flex gap-4 items-center">
<a className="hidden transition-colors sm:block text-xs font-medium bg-[#ffffff] border rounded-md px-3 py-2 font-dm-sans tracking-tight hover:text-slate-600 text-slate-900 border-stone-200" href="#">Login</a>
<a className="hover:bg-[#033476] transition-colors text-xs font-medium text-white tracking-tight font-dm-sans bg-[#004BB0] rounded-md py-2 px-4 shadow-sm border border-transparent" href="#">Get a demo</a>
</div>
</div>
</nav>

<main className="bg-black text-white relative overflow-hidden pb-24 pt-20">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white backdrop-blur-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
<span className="font-medium tracking-tight">New Release 2.0 is live</span>
</div>
<h1 className="md:text-7xl text-5xl font-light text-white tracking-tight font-instrument-serif mb-6">
            The complete system <br/> for product teams.
        </h1>
<p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto mb-10 font-light font-dm-sans leading-relaxed">
            Manage issues, cycles, and product roadmaps in one place. <br className="hidden md:block"/>Designed for high-performance teams who ship fast.
        </p>
<div className="flex justify-center gap-4">
<button className="bg-white text-black px-6 py-3 rounded-lg text-sm font-medium hover:bg-stone-200 transition-colors">Start Building</button>
<button className="bg-white/10 text-white border border-white/10 px-6 py-3 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors">View Documentation</button>
</div>
</div>
</main>

<section className="py-24 px-6 bg-[#F9F8F6]">
<div className="max-w-7xl mx-auto">
<div className="max-w-3xl mb-12">
<h2 className="text-4xl md:text-5xl tracking-tight mb-4 font-instrument-serif font-light text-slate-900">
                System capabilities.
            </h2>
<p className="text-lg text-slate-500 font-dm-sans font-light">
                A structured overview of the tools that power your workflow.
            </p>
</div>

<div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 overflow-hidden">

<div className="border-b border-slate-100 p-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50/50">
<div className="flex items-center gap-2">
<div className="bg-white border border-slate-200 rounded-md px-2 py-1.5 flex items-center gap-2 shadow-sm">
<svg className="text-slate-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<input className="text-sm outline-none placeholder:text-slate-400 text-slate-700 w-48 font-dm-sans" placeholder="Search features..." type="text"/>
</div>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors shadow-sm">All Features</button>
<button className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-700 transition-colors">Core</button>
<button className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-700 transition-colors">Integrations</button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-slate-100 bg-white">
<th className="py-4 pl-6 pr-4 text-xs font-semibold uppercase tracking-tight text-slate-500 font-dm-sans w-[35%]">Feature</th>
<th className="py-4 px-4 text-xs font-semibold uppercase tracking-tight text-slate-500 font-dm-sans w-[40%]">Description</th>
<th className="py-4 px-4 text-xs font-semibold uppercase tracking-tight text-slate-500 font-dm-sans w-[15%]">Module</th>
<th className="py-4 pl-4 pr-6 text-xs font-semibold uppercase tracking-tight text-slate-500 font-dm-sans w-[10%] text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">

<tr className="group hover:bg-slate-50 transition-colors cursor-default">
<td className="py-4 pl-6 pr-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
</div>
<div>
<div className="text-sm font-medium text-slate-900 font-dm-sans">Issue Tracking</div>
<div className="text-[11px] text-slate-400 font-mono mt-0.5">CMD+I</div>
</div>
</div>
</td>
<td className="py-4 px-4">
<p className="text-sm text-slate-600 leading-relaxed font-dm-sans">Create, assign, and track tasks with markdown support and real-time updates.</p>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">Core</span>
</td>
<td className="py-4 pl-4 pr-6 text-right">
<div className="inline-flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-slate-600">Live</span>
</div>
</td>
</tr>

<tr className="group hover:bg-slate-50 transition-colors cursor-default">
<td className="py-4 pl-6 pr-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg>
</div>
<div>
<div className="text-sm font-medium text-slate-900 font-dm-sans">Cycles &amp; Sprints</div>
<div className="text-[11px] text-slate-400 font-mono mt-0.5">AUTO-SYNC</div>
</div>
</div>
</td>
<td className="py-4 px-4">
<p className="text-sm text-slate-600 leading-relaxed font-dm-sans">Automated sprint management with velocity charts and burn-down analytics.</p>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">Planning</span>
</td>
<td className="py-4 pl-4 pr-6 text-right">
<div className="inline-flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-slate-600">Live</span>
</div>
</td>
</tr>

<tr className="group hover:bg-slate-50 transition-colors cursor-default">
<td className="py-4 pl-6 pr-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</div>
<div>
<div className="text-sm font-medium text-slate-900 font-dm-sans">GitHub Sync</div>
<div className="text-[11px] text-slate-400 font-mono mt-0.5">2-WAY</div>
</div>
</div>
</td>
<td className="py-4 px-4">
<p className="text-sm text-slate-600 leading-relaxed font-dm-sans">Links PRs to issues automatically. Status changes in Git reflect in baseteam instantly.</p>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">Integration</span>
</td>
<td className="py-4 pl-4 pr-6 text-right">
<div className="inline-flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-slate-600">Live</span>
</div>
</td>
</tr>

<tr className="group hover:bg-slate-50 transition-colors cursor-default">
<td className="py-4 pl-6 pr-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M11 9h4a2 2 0 0 1 2 2v3"></path><circle cx="9" cy="9" r="2"></circle><path d="M7 21v-4a2 2 0 0 1 2-2h4"></path><circle cx="15" cy="15" r="2"></circle></svg>
</div>
<div>
<div className="text-sm font-medium text-slate-900 font-dm-sans">Roadmap Timeline</div>
<div className="text-[11px] text-slate-400 font-mono mt-0.5">GANTT</div>
</div>
</div>
</td>
<td className="py-4 px-4">
<p className="text-sm text-slate-600 leading-relaxed font-dm-sans">Visualise cross-team projects on a timeline. Drag and drop to adjust dependencies.</p>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">Strategy</span>
</td>
<td className="py-4 pl-4 pr-6 text-right">
<div className="inline-flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
<span className="text-xs font-medium text-slate-600">Beta</span>
</div>
</td>
</tr>

<tr className="group hover:bg-slate-50 transition-colors cursor-default">
<td className="py-4 pl-6 pr-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-600">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<div className="text-sm font-medium text-slate-900 font-dm-sans">Audit Logs</div>
<div className="text-[11px] text-slate-400 font-mono mt-0.5">SECURE</div>
</div>
</div>
</td>
<td className="py-4 px-4">
<p className="text-sm text-slate-600 leading-relaxed font-dm-sans">Comprehensive immutable logs of every action taken within your workspace.</p>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">Security</span>
</td>
<td className="py-4 pl-4 pr-6 text-right">
<div className="inline-flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-slate-600">Live</span>
</div>
</td>
</tr>

<tr className="group hover:bg-slate-50 transition-colors cursor-default">
<td className="py-4 pl-6 pr-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<div>
<div className="text-sm font-medium text-slate-900 font-dm-sans">API Access</div>
<div className="text-[11px] text-slate-400 font-mono mt-0.5">GRAPHQL</div>
</div>
</div>
</td>
<td className="py-4 px-4">
<p className="text-sm text-slate-600 leading-relaxed font-dm-sans">Full programmatic access to your data via our high-performance GraphQL API.</p>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">Developer</span>
</td>
<td className="py-4 pl-4 pr-6 text-right">
<div className="inline-flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-slate-600">Live</span>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="bg-slate-50 border-t border-slate-100 p-4 flex items-center justify-between text-xs text-slate-500 font-dm-sans">
<span>Showing 6 of 24 features</span>
<a className="flex items-center gap-1 hover:text-slate-800 transition-colors" href="#">
                    View full feature comparison
                    <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-stone-950 w-full pt-20 pb-12 px-6 border-t border-stone-900">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded flex items-center justify-center bg-slate-800 text-white">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0.58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0.58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<span className="text-xl font-medium text-white tracking-tight font-dm-sans">baseteam</span>
</div>
<p className="text-stone-400 text-sm leading-relaxed max-w-xs font-dm-sans">
                    The operating system for modern software teams. Plan, build, and ship better products.
                </p>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4 font-dm-sans">Product</h4>
<ul className="space-y-3 text-sm text-stone-400 font-dm-sans">
<li><a className="hover:text-white transition-colors" href="#">Issues</a></li>
<li><a className="hover:text-white transition-colors" href="#">Roadmaps</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cycles</a></li>
<li><a className="hover:text-white transition-colors" href="#">Workflows</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4 font-dm-sans">Company</h4>
<ul className="space-y-3 text-sm text-stone-400 font-dm-sans">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4 font-dm-sans">Legal</h4>
<ul className="space-y-3 text-sm text-stone-400 font-dm-sans">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-500 font-dm-sans">© 2025 Baseteam Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-stone-500 hover:text-white transition-colors" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-stone-500 hover:text-white transition-colors" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
