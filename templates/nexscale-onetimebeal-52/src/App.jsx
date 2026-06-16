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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:cube-linear" width="20"></iconify-icon>
</div>
<span className="text-slate-100 font-medium tracking-tight text-lg group-hover:text-white transition-colors">NEXSCALE</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#">Creators</a>
<a className="hover:text-white transition-colors" href="#">Brands</a>
<a className="hover:text-white transition-colors" href="#">Analytics</a>
<a className="hover:text-white transition-colors" href="#">Case Studies</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex text-sm font-medium hover:text-white transition-colors">Log in</button>
<button className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition-colors tracking-tight">
                    Start Campaign
                </button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">

<div className="space-y-8 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs font-medium text-indigo-300 tracking-wide uppercase">AI-Powered Matching</span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium text-white tracking-tighter leading-[1.1]">
                    Scale your brand with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 animate-pulse">intelligent</span> influence.
                </h1>
<p className="text-lg text-slate-400 max-w-lg leading-relaxed font-light">
                    We combine 3D data visualization with high-tier creator networks to deliver campaigns that don't just reach, but resonate.
                </p>
<div className="flex flex-wrap items-center gap-4 pt-2">
<button className="group relative px-6 py-3 bg-white text-black text-sm font-medium rounded-lg overflow-hidden transition-all hover:scale-105">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
<span className="relative flex items-center gap-2">
                            Launch Campaign 
                            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2" width="16"></iconify-icon>
</span>
</button>
<button className="px-6 py-3 text-sm font-medium text-white border border-white/10 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                        View Showreel
                    </button>
</div>
<div className="pt-8 flex items-center gap-6 border-t border-white/5">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-black bg-slate-800 flex items-center justify-center text-xs text-white">JD</div>
<div className="w-10 h-10 rounded-full border-2 border-black bg-slate-700 flex items-center justify-center text-xs text-white">AS</div>
<div className="w-10 h-10 rounded-full border-2 border-black bg-slate-600 flex items-center justify-center text-xs text-white">MR</div>
</div>
<div className="text-sm">
<p className="text-white font-medium">12k+ Creators</p>
<p className="text-xs text-slate-500">Verified &amp; Active</p>
</div>
</div>
</div>

<div className="relative h-[600px] flex items-center justify-center perspective-1000">

<div className="relative w-64 h-64 preserve-3d animate-float">

<div className="absolute inset-0 m-auto w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full blur-2xl opacity-40 animate-[pulse-glow_4s_infinite]"></div>
<div className="absolute inset-0 m-auto w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl rotate-45 border border-white/20 shadow-[0_0_40px_rgba(99,102,241,0.3)] backdrop-blur-sm z-10 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:graph-up-linear" width="48"></iconify-icon>
</div>

<div className="absolute inset-0 border border-indigo-500/20 rounded-full w-[140%] h-[140%] -top-[20%] -left-[20%] rotate-x-[60deg] animate-[spin_10s_linear_infinite]"></div>


<div className="absolute top-0 -right-20 p-4 glass-panel rounded-xl w-48 transform translate-z-10 rotate-y-12 rotate-z-6 animate-[float_5s_ease-in-out_infinite_0.5s]">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center">
<iconify-icon className="text-pink-400" icon="solar:user-heart-linear"></iconify-icon>
</div>
<div>
<div className="h-2 w-16 bg-white/20 rounded mb-1"></div>
<div className="h-1.5 w-8 bg-white/10 rounded"></div>
</div>
</div>
<div className="flex justify-between items-end">
<span className="text-2xl font-medium text-white tracking-tight">+124%</span>
<iconify-icon className="text-emerald-400" icon="solar:chart-2-linear" width="20"></iconify-icon>
</div>
</div>

<div className="absolute -bottom-10 -left-16 p-4 glass-panel rounded-xl w-40 transform translate-z-20 -rotate-y-12 -rotate-z-3 animate-[float_7s_ease-in-out_infinite_1s]">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-medium text-slate-300">Engagement</span>
<span className="text-xs text-indigo-400">High</span>
</div>
<div className="w-full bg-white/10 rounded-full h-1.5 mb-2 overflow-hidden">
<div className="bg-indigo-500 h-1.5 rounded-full w-[85%]"></div>
</div>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-slate-700 border border-black"></div>
<div className="w-6 h-6 rounded-full bg-slate-600 border border-black"></div>
<div className="w-6 h-6 rounded-full bg-slate-500 border border-black"></div>
</div>
</div>

<div className="absolute top-1/2 -right-32 p-3 glass-panel rounded-lg w-32 transform -translate-z-20 blur-[1px] opacity-60 animate-[float_8s_ease-in-out_infinite_2s]">
<div className="h-2 w-full bg-white/10 rounded mb-2"></div>
<div className="h-2 w-2/3 bg-white/10 rounded"></div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 py-10 bg-black/50">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm text-slate-500 mb-8 font-medium">TRUSTED BY INNOVATIVE TEAMS</p>
<div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-xl font-semibold tracking-tighter text-white"><iconify-icon icon="solar:ufo-3-linear"></iconify-icon> ACME</div>
<div className="flex items-center gap-2 text-xl font-semibold tracking-tighter text-white"><iconify-icon icon="solar:atom-linear"></iconify-icon> KINETIC</div>
<div className="flex items-center gap-2 text-xl font-semibold tracking-tighter text-white"><iconify-icon icon="solar:black-hole-linear"></iconify-icon> VORTEX</div>
<div className="flex items-center gap-2 text-xl font-semibold tracking-tighter text-white"><iconify-icon icon="solar:infinity-linear"></iconify-icon> LOOP</div>
<div className="flex items-center gap-2 text-xl font-semibold tracking-tighter text-white"><iconify-icon icon="solar:planet-linear"></iconify-icon> ORBIT</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Precision-engineered marketing.</h2>
<p className="text-slate-400 max-w-2xl">Our platform leverages 3D visualization and real-time data to sculpt campaigns that cut through the noise.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-all hover:bg-neutral-900/50 overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-bl-full blur-2xl transition-all group-hover:bg-indigo-500/20"></div>
<div className="mb-6 w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center border border-white/5 text-indigo-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:database-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Data-Driven Matching</h3>
<p className="text-sm text-slate-400 leading-relaxed">Our algorithm pairs your brand with creators based on audience demographics, not just follower count.</p>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-all hover:bg-neutral-900/50 overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full blur-2xl transition-all group-hover:bg-purple-500/20"></div>
<div className="mb-6 w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center border border-white/5 text-purple-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:pie-chart-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Real-time Analytics</h3>
<p className="text-sm text-slate-400 leading-relaxed">Track ROI, engagement, and sentiment analysis in a 3D interactive dashboard.</p>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-all hover:bg-neutral-900/50 overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-bl-full blur-2xl transition-all group-hover:bg-pink-500/20"></div>
<div className="mb-6 w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center border border-white/5 text-pink-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Brand Safety</h3>
<p className="text-sm text-slate-400 leading-relaxed">Automated content vetting ensures your brand is only associated with brand-safe environments.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Total visibility.</h2>
<p className="text-slate-400 mb-12">Manage campaigns from a single, powerful command center.</p>
<div className="relative max-w-5xl mx-auto perspective-1000 group">

<div className="relative bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl transform rotate-x-6 transition-transform duration-700 group-hover:rotate-x-2">

<div className="h-10 border-b border-white/5 bg-neutral-800/50 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>

<div className="grid grid-cols-12 gap-0 min-h-[500px] bg-[#050505]">

<div className="col-span-2 border-r border-white/5 p-4 flex flex-col gap-4">
<div className="h-8 w-8 rounded bg-indigo-500/20 mb-4"></div>
<div className="h-2 w-12 bg-white/10 rounded"></div>
<div className="h-2 w-16 bg-white/10 rounded"></div>
<div className="h-2 w-10 bg-white/10 rounded"></div>
</div>

<div className="col-span-10 p-8">
<div className="flex justify-between items-end mb-8">
<div>
<div className="h-4 w-32 bg-white/10 rounded mb-2"></div>
<div className="text-3xl font-medium text-white tracking-tight">$124,500.00</div>
</div>
<div className="flex gap-2">
<div className="px-3 py-1 rounded border border-white/10 text-xs text-slate-400">7 Days</div>
<div className="px-3 py-1 rounded bg-white text-black text-xs font-medium">Export</div>
</div>
</div>

<div className="h-64 w-full flex items-end gap-2 border-b border-white/5 pb-4 px-2">
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[40%] hover:h-[45%] transition-all duration-300"></div>
<div className="w-full bg-indigo-500/30 rounded-t-sm h-[60%] hover:h-[65%] transition-all duration-300"></div>
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[30%] hover:h-[35%] transition-all duration-300"></div>
<div className="w-full bg-indigo-500/40 rounded-t-sm h-[70%] hover:h-[75%] transition-all duration-300"></div>
<div className="w-full bg-indigo-500/60 rounded-t-sm h-[50%] hover:h-[55%] transition-all duration-300 relative group/bar">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-black text-[10px] rounded opacity-0 group-hover/bar:opacity-100 transition-opacity">Peak</div>
</div>
<div className="w-full bg-indigo-500/30 rounded-t-sm h-[80%] hover:h-[85%] transition-all duration-300"></div>
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[45%] hover:h-[50%] transition-all duration-300"></div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">

<div className="relative space-y-4">
<div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900 border border-white/5 transform translate-x-4 opacity-50">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-white/5">1</div>
<div className="text-sm text-slate-400">Campaign Briefing</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900 border border-indigo-500/30 shadow-[0_0_30px_rgba(99,102,241,0.1)] transform scale-105 z-10">
<div className="w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm text-white font-medium">AI Creator Selection</div>
<div className="text-xs text-slate-500">Processing 45 matches...</div>
</div>
<div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900 border border-white/5 transform translate-x-4 opacity-50">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-white/5">3</div>
<div className="text-sm text-slate-400">Content Approval</div>
</div>

<div className="absolute left-9 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -z-10"></div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Seamless workflow. <br/><span className="text-slate-500">From brief to broadcast.</span></h2>
<p className="text-slate-400 mb-8 leading-relaxed">
                        Forget endless email threads. Our platform centralizes communication, contracts, and content approvals in one linear timeline.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-400 mt-1" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-300">Automated contracting &amp; payments</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-400 mt-1" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-300">Direct chat with influencers</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-400 mt-1" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-300">One-click content rights management</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 text-center p-12 md:p-20">

<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.15),transparent_70%)]"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6">Ready to amplify?</h2>
<p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">Join 500+ forward-thinking brands utilizing NexScale to dominate the social landscape.</p>
<form className="max-w-sm mx-auto flex flex-col gap-4">
<div className="relative">
<input className="w-full bg-black/50 border border-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-600 text-sm" placeholder="Enter your work email" type="email"/>
<div className="absolute inset-0 rounded-lg pointer-events-none border border-white/5"></div>
</div>
<button className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-slate-200 transition-colors text-sm">
                        Get Started
                    </button>
<p className="text-xs text-slate-600">No credit card required. 14-day free trial.</p>
</form>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:cube-linear" width="14"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight">NexScale</span>
</div>
<p className="text-xs text-slate-500">© 2024 NexScale Inc.</p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Platform</h4>
<ul className="space-y-2 text-xs text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Enterprise</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Company</h4>
<ul className="space-y-2 text-xs text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Social</h4>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:twitter-bird" width="16"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:instagram" width="16"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:linkedin" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
