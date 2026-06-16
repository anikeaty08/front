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
      

<div className="noise-overlay"></div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4">
<div className="glass-card flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group hover:shadow-[0_0_20px_rgba(124,58,237,0.15)]">

<a className="flex items-center gap-1.5 mr-4 text-[#F8FAFC] font-display font-semibold tracking-tight hover:text-white transition-colors" href="#">
<span className="iconify text-[#7C3AED]" data-height="18" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="18"></span>
                LEAGUE
            </a>

<div className="hidden md:flex items-center gap-6 text-sm font-medium text-[#94A3B8]">
<a className="relative hover:text-white transition-colors group/link" href="#agents">
                    Agents
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#10B981] rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity"></span>
</a>
<a className="relative hover:text-white transition-colors group/link" href="#protocol">
                    Protocol
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#10B981] rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity"></span>
</a>
<a className="relative hover:text-white transition-colors group/link" href="#pricing">
                    Pricing
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#10B981] rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity"></span>
</a>
<a className="relative hover:text-white transition-colors group/link" href="#manifesto">
                    Manifesto
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#10B981] rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity"></span>
</a>
</div>

<a className="hidden md:flex ml-4 items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-semibold py-2 px-4 rounded-full transition-all shadow-[0_0_15px_-3px_rgba(124,58,237,0.5)]" href="#pricing">
                Deploy Agents
            </a>

<button className="md:hidden ml-auto text-white">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 md:pt-0 md:pb-0">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7C3AED] rounded-full opacity-10 blur-[120px] pointer-events-none"></div>
<div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">

<div className="lg:col-span-5 flex flex-col items-start z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
</span>
<span className="font-mono text-[10px] tracking-wider text-[#94A3B8]">SYSTEM STATUS: OPERATIONAL // V2.0</span>
</div>
<h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.1] tracking-display text-[#F8FAFC] mb-6">
                    Scale Your Revenue. <br/>
<span className="text-[#94A3B8]">Not Your Headcount.</span>
</h1>
<p className="text-[#94A3B8] text-lg leading-relaxed font-normal mb-8 max-w-lg">
                    Command a fleet of autonomous AI agents that work 24/7. League is the operating system for the million-dollar one-person company.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="flex items-center justify-center gap-2 bg-[#7C3AED] text-white px-8 py-4 rounded-lg font-semibold text-sm transition-all hover:scale-105 shadow-[0_0_30px_-5px_rgba(124,58,237,0.4)]">
                        Initialize Workforce <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>

<div className="lg:col-span-7 h-[500px] lg:h-[800px] flex items-center justify-center perspective-container relative mt-12 lg:mt-0">
<div className="hero-grid grid grid-cols-2 gap-6 w-full max-w-lg opacity-80 md:opacity-100">
<div className="glass-card rounded-xl p-5 transform translate-y-12 animate-float" style={{animationDelay: '0s'}}>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#4C1D95] flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:users" data-width="20"></span>
</div>
<span className="font-mono text-[10px] text-[#10B981]">ACTIVE</span>
</div>
<h3 className="font-display text-lg font-medium text-white mb-1">Sales Lead</h3>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-[#10B981] w-[75%]"></div></div>
</div>
<div className="glass-card rounded-xl p-5 transform -translate-y-8 animate-float" style={{animationDelay: '1.5s'}}>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:search" data-width="20"></span>
</div>
<span className="font-mono text-[10px] text-[#10B981]">ACTIVE</span>
</div>
<h3 className="font-display text-lg font-medium text-white mb-1">Researcher</h3>
<p className="text-xs text-[#94A3B8] leading-tight">Parsing 500+ PDFs for strategy extraction.</p>
</div>
<div className="glass-card rounded-xl p-5 col-span-2 transform translate-y-4 animate-float" style={{animationDelay: '2.5s'}}>
<div className="flex items-center gap-4 mb-3">
<div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-white"><span className="iconify" data-icon="lucide:bot" data-width="16"></span></div>
<div className="flex-1">
<h3 className="font-display text-base font-medium text-white">Content Engine</h3>
<div className="font-mono text-[10px] text-[#94A3B8]">GENERATING THREAD 4/10</div>
</div>
</div>
<div className="space-y-2"><div className="h-2 w-3/4 bg-white/5 rounded"></div><div className="h-2 w-1/2 bg-white/5 rounded"></div></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-t border-b border-white/5 bg-[#050507]">
<div className="container mx-auto px-6 mb-6">
<span className="font-mono text-xs text-[#94A3B8] tracking-widest uppercase">INTEGRATED NEURAL NETWORKS</span>
</div>
<div className="relative w-full overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050507] to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050507] to-transparent z-10"></div>
<div className="flex gap-16 animate-marquee whitespace-nowrap opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-16">
<span className="text-2xl font-bold font-display tracking-tight text-white">OpenAI</span>
<span className="text-2xl font-bold font-display tracking-tight text-white">Anthropic</span>
<span className="text-2xl font-bold font-display tracking-tight text-white">MidJourney</span>
<span className="text-2xl font-bold font-display tracking-tight text-white">Stripe</span>
<span className="text-2xl font-bold font-display tracking-tight text-white">Hubspot</span>
<span className="text-2xl font-bold font-display tracking-tight text-white">Notion</span>

<span className="text-2xl font-bold font-display tracking-tight text-white">OpenAI</span>
<span className="text-2xl font-bold font-display tracking-tight text-white">Anthropic</span>
<span className="text-2xl font-bold font-display tracking-tight text-white">MidJourney</span>
<span className="text-2xl font-bold font-display tracking-tight text-white">Stripe</span>
<span className="text-2xl font-bold font-display tracking-tight text-white">Hubspot</span>
<span className="text-2xl font-bold font-display tracking-tight text-white">Notion</span>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="agents">
<div className="container mx-auto px-6">
<div className="flex flex-col items-center mb-16">
<span className="text-[#7C3AED] font-mono text-xs tracking-widest uppercase mb-4">01 // Agents</span>
<h2 className="font-display text-4xl md:text-5xl font-semibold text-center tracking-display">The C-Suite in a Box.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">

<div className="glass-card md:col-span-2 md:row-span-2 rounded-2xl p-8 group hover:border-white/20 transition-all overflow-hidden flex flex-col">
<div className="mb-auto">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-[#7C3AED] transition-colors">
<span className="iconify text-white group-hover:text-[#7C3AED]" data-icon="lucide:crosshair" data-width="24"></span>
</div>
<h3 className="font-display text-2xl font-medium mb-3">Autonomous Sales</h3>
<p className="text-[#94A3B8]">Hunter-Killer algorithms that nurture leads and close deals while you sleep.</p>
</div>

<div className="mt-8 bg-[#050507] rounded-lg border border-white/10 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-[#7C3AED] flex items-center justify-center shrink-0 text-xs">AI</div>
<div className="bg-white/5 p-3 rounded-lg rounded-tl-none text-sm text-[#F8FAFC]">
                                I've analyzed your calendar. Tuesday at 2 PM works best. Shall I send the invite?
                            </div>
</div>
<div className="flex items-start gap-3 mt-3 justify-end">
<div className="bg-[#7C3AED]/20 p-3 rounded-lg rounded-tr-none text-sm text-[#7C3AED]">
                                Yes, lock it in.
                            </div>
</div>
</div>
</div>

<div className="glass-card md:col-span-1 md:row-span-2 rounded-2xl p-8 group hover:border-white/20 transition-all flex flex-col">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-[#7C3AED] transition-colors">
<span className="iconify text-white group-hover:text-[#7C3AED]" data-icon="lucide:brain-circuit" data-width="24"></span>
</div>
<h3 className="font-display text-2xl font-medium mb-3">Deep Research</h3>
<p className="text-[#94A3B8] text-sm mb-4">Ingests 1,000s of PDFs to build your strategy.</p>
<div className="flex-1 bg-[#050507] rounded border border-white/10 p-3 relative overflow-hidden group-hover:bg-[#0A0A0E] transition-colors">
<div className="space-y-2 opacity-50">
<div className="h-2 bg-white/20 rounded w-full"></div>
<div className="h-2 bg-white/20 rounded w-5/6"></div>
<div className="h-2 bg-white/20 rounded w-full"></div>
<div className="h-2 bg-[#7C3AED] rounded w-1/2"></div>
</div>
<div className="absolute bottom-4 right-4 text-[#7C3AED] font-mono text-xs">ANALYZING...</div>
</div>
</div>
</div>

<div className="glass-card w-full mt-6 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 group hover:border-white/20 transition-all">
<div className="flex-1">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-[#7C3AED] transition-colors">
<span className="iconify text-white group-hover:text-[#7C3AED]" data-icon="lucide:infinity" data-width="24"></span>
</div>
<h3 className="font-display text-2xl font-medium mb-3">Infinite Ops</h3>
<p className="text-[#94A3B8]">Agents talk to each other to execute complex workflows.</p>
</div>
<div className="flex-1 flex items-center justify-center gap-4 opacity-50 group-hover:opacity-100 transition-opacity">
<div className="w-12 h-12 bg-white/5 rounded border border-white/10 flex items-center justify-center"><span className="iconify" data-icon="lucide:mail"></span></div>
<div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent"></div>
<div className="w-12 h-12 bg-white/5 rounded border border-white/10 flex items-center justify-center"><span className="iconify" data-icon="lucide:database"></span></div>
<div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent"></div>
<div className="w-12 h-12 bg-white/5 rounded border border-white/10 flex items-center justify-center"><span className="iconify" data-icon="lucide:file-text"></span></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0F0F12]/30 border-y border-white/5" id="protocol">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<span className="text-[#7C3AED] font-mono text-xs tracking-widest uppercase mb-4 block">02 // Protocol</span>
<h2 className="font-display text-4xl font-semibold mb-3">Choose Your Staff.</h2>
<p className="text-[#94A3B8] max-w-md">Pre-trained agent templates ready to deploy into your business logic.</p>
</div>
<a className="text-[#7C3AED] font-medium hover:text-white transition-colors flex items-center gap-2 text-sm" href="#">
                    Browse All Protocols <span className="iconify" data-icon="lucide:arrow-right"></span>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="glass-card rounded-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-[#7C3AED]/50">
<div className="h-64 bg-gradient-to-b from-[#1E1E24] to-[#0F0F12] flex items-center justify-center relative">
<div className="w-32 h-32 rounded-full bg-gradient-to-t from-[#7C3AED] to-[#4C1D95] blur-2xl opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
<span className="iconify text-[#F8FAFC] relative z-10" data-icon="lucide:bot" data-width="64"></span>
</div>
<div className="p-6 border-t border-white/5">
<div className="flex justify-between items-center mb-2">
<h3 className="font-display text-xl font-medium">Hunter V2</h3>
<span className="font-mono text-xs text-[#94A3B8] border border-white/10 px-2 py-1 rounded">$0.04/HR</span>
</div>
<p className="text-[#94A3B8] text-sm mb-4 line-clamp-2">Scrapes LinkedIn, enriches data, and sends hyper-personalized invites.</p>
<div className="grid grid-cols-3 gap-2 py-4 border-t border-white/5">
<div className="text-center">
<div className="font-mono text-[10px] text-[#94A3B8] uppercase">Speed</div>
<div className="font-mono text-xs text-[#10B981]">98/100</div>
</div>
<div className="text-center border-l border-white/5">
<div className="font-mono text-[10px] text-[#94A3B8] uppercase">IQ</div>
<div className="font-mono text-xs text-[#7C3AED]">145</div>
</div>
<div className="text-center border-l border-white/5">
<div className="font-mono text-[10px] text-[#94A3B8] uppercase">Role</div>
<div className="font-mono text-xs text-white">Sales</div>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-[#7C3AED]/50">
<div className="h-64 bg-gradient-to-b from-[#1E1E24] to-[#0F0F12] flex items-center justify-center relative">
<div className="w-32 h-32 rounded-full bg-gradient-to-t from-blue-500 to-indigo-900 blur-2xl opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
<span className="iconify text-[#F8FAFC] relative z-10" data-icon="lucide:pen-tool" data-width="64"></span>
</div>
<div className="p-6 border-t border-white/5">
<div className="flex justify-between items-center mb-2">
<h3 className="font-display text-xl font-medium">Scribe Prime</h3>
<span className="font-mono text-xs text-[#94A3B8] border border-white/10 px-2 py-1 rounded">$0.02/HR</span>
</div>
<p className="text-[#94A3B8] text-sm mb-4 line-clamp-2">Converts YouTube transcripts into 5,000-word SEO blog posts.</p>
<div className="grid grid-cols-3 gap-2 py-4 border-t border-white/5">
<div className="text-center">
<div className="font-mono text-[10px] text-[#94A3B8] uppercase">Speed</div>
<div className="font-mono text-xs text-[#10B981]">100/100</div>
</div>
<div className="text-center border-l border-white/5">
<div className="font-mono text-[10px] text-[#94A3B8] uppercase">IQ</div>
<div className="font-mono text-xs text-[#7C3AED]">130</div>
</div>
<div className="text-center border-l border-white/5">
<div className="font-mono text-[10px] text-[#94A3B8] uppercase">Role</div>
<div className="font-mono text-xs text-white">Content</div>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-[#7C3AED]/50">
<div className="h-64 bg-gradient-to-b from-[#1E1E24] to-[#0F0F12] flex items-center justify-center relative">
<div className="w-32 h-32 rounded-full bg-gradient-to-t from-red-500 to-orange-900 blur-2xl opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
<span className="iconify text-[#F8FAFC] relative z-10" data-icon="lucide:eye" data-width="64"></span>
</div>
<div className="p-6 border-t border-white/5">
<div className="flex justify-between items-center mb-2">
<h3 className="font-display text-xl font-medium">Watcher</h3>
<span className="font-mono text-xs text-[#94A3B8] border border-white/10 px-2 py-1 rounded">$0.01/HR</span>
</div>
<p className="text-[#94A3B8] text-sm mb-4 line-clamp-2">Monitors 50 competitor pricing pages daily and alerts you to changes.</p>
<div className="grid grid-cols-3 gap-2 py-4 border-t border-white/5">
<div className="text-center">
<div className="font-mono text-[10px] text-[#94A3B8] uppercase">Speed</div>
<div className="font-mono text-xs text-[#10B981]">85/100</div>
</div>
<div className="text-center border-l border-white/5">
<div className="font-mono text-[10px] text-[#94A3B8] uppercase">IQ</div>
<div className="font-mono text-xs text-[#7C3AED]">110</div>
</div>
<div className="text-center border-l border-white/5">
<div className="font-mono text-[10px] text-[#94A3B8] uppercase">Role</div>
<div className="font-mono text-xs text-white">Intel</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="pricing">
<div className="container mx-auto px-6 relative z-10">
<div className="flex flex-col items-center mb-16">
<span className="text-[#7C3AED] font-mono text-xs tracking-widest uppercase mb-4">03 // Pricing</span>
<h2 className="font-display text-4xl font-semibold mb-8">Empire Scale. Freelance Cost.</h2>

<div className="bg-[#0F0F12] border border-white/10 p-1 rounded-full flex relative">
<button className="px-6 py-2 rounded-full text-sm font-medium text-[#94A3B8] hover:text-white transition-colors relative z-10">Human <span className="line-through decoration-red-500/50 decoration-2 ml-1 text-xs opacity-60">$5,000/mo</span></button>
<button className="px-6 py-2 rounded-full text-sm font-medium text-white bg-[#1E1E24] shadow-lg border border-white/5 relative z-10">AI <span className="text-[#10B981] ml-1 text-xs">$99/mo</span></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

<div className="glass-card p-8 rounded-2xl border border-white/5">
<h3 className="font-display text-xl font-semibold mb-2">Bootstrapper</h3>
<div className="text-3xl font-bold font-display mb-6">$49<span className="text-base font-normal text-[#94A3B8]">/mo</span></div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-[#94A3B8]"><span className="iconify text-white" data-icon="lucide:check"></span> 1 Active Agent</li>
<li className="flex items-center gap-3 text-sm text-[#94A3B8]"><span className="iconify text-white" data-icon="lucide:check"></span> Basic Memory (1GB)</li>
</ul>
<button className="w-full py-3 border border-white/10 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors">Select Plan</button>
</div>

<div className="glass-card p-8 rounded-2xl border border-[#7C3AED]/30 relative scale-105 shadow-[0_0_40px_-10px_rgba(124,58,237,0.15)] bg-[#0F0F12]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#7C3AED] text-white text-[10px] font-bold uppercase tracking-wide rounded-full">Recommended</div>
<h3 className="font-display text-xl font-semibold mb-2">Empire</h3>
<div className="text-3xl font-bold font-display mb-6">$129<span className="text-base font-normal text-[#94A3B8]">/mo</span></div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-white"><span className="iconify text-[#7C3AED]" data-icon="lucide:check"></span> 5 Active Agents (Team)</li>
<li className="flex items-center gap-3 text-sm text-white"><span className="iconify text-[#7C3AED]" data-icon="lucide:check"></span> Hive-Mind Memory</li>
<li className="flex items-center gap-3 text-sm text-white"><span className="iconify text-[#7C3AED]" data-icon="lucide:check"></span> GPT-4o Integration</li>
</ul>
<button className="w-full py-3 bg-[#7C3AED] text-white rounded-lg text-sm font-medium hover:bg-[#6D28D9] transition-colors shadow-[0_0_20px_-5px_rgba(124,58,237,0.5)]">Initialize</button>
</div>

<div className="glass-card p-8 rounded-2xl border border-white/5">
<h3 className="font-display text-xl font-semibold mb-2">Sovereign</h3>
<div className="text-3xl font-bold font-display mb-6">$499<span className="text-base font-normal text-[#94A3B8]">/mo</span></div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-[#94A3B8]"><span className="iconify text-white" data-icon="lucide:check"></span> Unlimited Agents</li>
<li className="flex items-center gap-3 text-sm text-[#94A3B8]"><span className="iconify text-white" data-icon="lucide:check"></span> Dedicated Server</li>
</ul>
<button className="w-full py-3 border border-white/10 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors">Select Plan</button>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-[#050507]" id="manifesto">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="container mx-auto px-6 max-w-4xl">
<div className="text-center mb-16">
<span className="text-[#7C3AED] font-mono text-xs tracking-widest uppercase mb-4 block">04 // Manifesto</span>
<h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-8">The Age of the <br/> Sovereign Individual.</h2>
</div>
<div className="prose prose-invert prose-lg mx-auto text-[#94A3B8] leading-relaxed">
<p className="mb-6 first-letter:text-5xl first-letter:font-display first-letter:text-white first-letter:float-left first-letter:mr-3">
                     We are witnessing the greatest decoupling of labor from value in human history. For centuries, scaling a business meant scaling headcount. More revenue required more bodies, more management, and more bureaucracy.
                 </p>
<p className="mb-6">
<span className="text-white font-medium">Those days are over.</span>
</p>
<p className="mb-8">
                     Today, a single individual with the right stack of autonomous agents can outproduce a traditional firm of 50 people. The bottleneck is no longer execution; it is imagination. We are building the operating system for this new reality.
                 </p>
<div className="p-6 border-l-2 border-[#7C3AED] bg-white/5 italic text-[#F8FAFC] mb-8 font-display">
                     "The goal is not to manage people. The goal is to manage logic."
                 </div>
<p>
                     We believe in the "Empire of One." We build tools for the relentless, the creative, and the autonomous. Welcome to the future of work.
                 </p>
<div className="mt-12 flex items-center justify-center gap-4 opacity-70">
<span className="h-px w-12 bg-white/20"></span>
<span className="font-display font-bold tracking-tight text-white">LEAGUE</span>
<span className="h-px w-12 bg-white/20"></span>
</div>
</div>
</div>
</section>

<section className="py-24 container mx-auto px-6 border-t border-white/5">
<h2 className="font-display text-4xl font-semibold mb-12 tracking-tight">Declassified Data</h2>
<div className="space-y-4 max-w-3xl mx-auto">
<div className="bg-[#0F0F12] border border-white/5 rounded-lg overflow-hidden">
<details className="group">
<summary className="flex justify-between items-center cursor-pointer p-6 list-none font-mono text-sm text-[#F8FAFC]">
<span>&gt; Do I need to know how to code?</span>
<span className="iconify group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-6 pb-6 text-[#94A3B8] text-sm font-mono leading-relaxed border-t border-white/5 pt-4">
<span className="text-[#7C3AED]">root@league:~#</span> Negative. LEAGUE is built on natural language processing. You manage your agents using plain English.
                    </div>
</details>
</div>
<div className="bg-[#0F0F12] border border-white/5 rounded-lg overflow-hidden">
<details className="group">
<summary className="flex justify-between items-center cursor-pointer p-6 list-none font-mono text-sm text-[#F8FAFC]">
<span>&gt; Is my data secure?</span>
<span className="iconify group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-6 pb-6 text-[#94A3B8] text-sm font-mono leading-relaxed border-t border-white/5 pt-4">
<span className="text-[#7C3AED]">root@league:~#</span> Your vault is encrypted with AES-256. We do not use your business data to train our foundational models.
                    </div>
</details>
</div>
</div>
</section>

<footer className="pt-20 pb-10 border-t border-white/10 bg-[#050507]">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
<h2 className="font-display text-3xl font-semibold">Stop trading time for money.</h2>
<button className="bg-[#F8FAFC] text-[#050507] hover:bg-[#94A3B8] px-6 py-3 rounded-lg font-semibold text-sm transition-colors">Start Free Trial</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-1.5 text-[#F8FAFC] font-display font-bold tracking-tight mb-4">
<span className="iconify text-[#7C3AED]" data-icon="lucide:zap" data-width="18"></span>
                        LEAGUE
                    </div>
<p className="text-[#94A3B8] max-w-xs">Building the post-labor economy.</p>
</div>
<div>
<h4 className="font-mono text-[10px] text-[#94A3B8] uppercase mb-4 tracking-wider">Company</h4>
<ul className="space-y-3 text-[#F8FAFC]">
<li><a className="hover:text-[#7C3AED] transition-colors" href="#manifesto">Manifesto</a></li>
<li><a className="hover:text-[#7C3AED] transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-[#7C3AED] transition-colors" href="#">Twitter</a></li>
</ul>
</div>
</div>
<div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[#94A3B8] text-xs font-mono">© 2026 LEAGUE Inc. All systems nominal.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
<span className="text-[#10B981] text-xs font-mono">OPERATIONAL</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
