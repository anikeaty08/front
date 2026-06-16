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



        // Simple script to track mouse movement for the hover spotlight effect
        document.addEventListener('mousemove', e => {
            const cards = document.getElementsByClassName('mosaic-card');
            for(const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="ambient-glow"></div>

<nav className="fixed top-0 inset-x-0 z-50 px-6 py-6 pointer-events-none">
<div className="max-w-[1400px] mx-auto flex justify-between items-center">
<a className="pointer-events-auto flex items-center gap-2.5 group" href="#">
<div className="w-7 h-7 bg-white/5 border border-white/10 rounded flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:border-emerald-500/50 transition-all duration-500">
<div className="w-2.5 h-2.5 bg-white/80 rounded-[1px] group-hover:bg-emerald-400 transition-colors"></div>
</div>
<span className="text-sm font-medium tracking-tight text-white/90">MosaicV</span>
</a>
<div className="pointer-events-auto flex items-center gap-6">
<a className="text-xs font-medium text-zinc-500 hover:text-white transition-colors hidden sm:block" href="#system">System</a>
<a className="text-xs font-medium text-zinc-500 hover:text-white transition-colors hidden sm:block" href="#engine">Engine</a>
<a className="text-xs font-medium text-white/90 border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full transition-all" href="#waitlist">
                    Request Access
                </a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 px-6 max-w-[1400px] mx-auto min-h-screen flex flex-col justify-center">
<div className="grid lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-6 flex flex-col items-start space-y-8 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/10 border border-emerald-500/20 text-[11px] text-emerald-400 font-medium tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    PRIVATE BETA LIVE
                </div>
<h1 className="text-5xl sm:text-7xl font-semibold tracking-tighter leading-[1.05]">
<span className="text-gradient">Design your career.</span><br/>
<span className="text-zinc-500">Not just a document.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-lg font-light leading-relaxed">
                    The modular resume architecture for engineers and designers. 
                    Manage experience blocks, compile via LaTeX, and deploy perfectly tailored PDFs.
                </p>

<div className="w-full max-w-md mt-4">
<form className="relative group">
<div className="input-group flex items-center bg-zinc-900/50 border border-zinc-800 rounded-lg p-1.5 transition-all duration-300">
<div className="pl-3 text-zinc-500">
<iconify-icon icon="lucide:mail" width="18"></iconify-icon>
</div>
<input className="w-full bg-transparent border-none text-sm text-white px-3 py-2 focus:ring-0 placeholder-zinc-600 outline-none" placeholder="name@company.com" required="" type="email"/>
<button className="bg-white hover:bg-zinc-200 text-black text-xs font-semibold px-4 py-2.5 rounded shadow-lg shadow-white/5 transition-colors whitespace-nowrap" type="submit">
                                Join Waitlist
                            </button>
</div>
<div className="flex items-center gap-3 mt-4 text-[11px] text-zinc-500">
<div className="flex -space-x-2">
<div className="w-5 h-5 rounded-full border border-zinc-950 bg-zinc-800"></div>
<div className="w-5 h-5 rounded-full border border-zinc-950 bg-zinc-700"></div>
<div className="w-5 h-5 rounded-full border border-zinc-950 bg-zinc-600"></div>
</div>
<span>2,400+ builders in queue</span>
</div>
</form>
</div>
</div>

<div className="lg:col-span-6 relative mt-16 lg:mt-0">

<div className="relative w-full aspect-square md:aspect-[4/3] grid grid-cols-2 grid-rows-3 gap-4 perspective-1000">

<div className="mosaic-card rounded-xl p-6 col-span-2 row-span-1 flex items-center justify-between group" style={{-MouseX: '391.5999755859375px', -MouseY: '2027.9000244140625px'}}>
<div className="space-y-2">
<div className="flex items-center gap-2 text-xs text-emerald-400 font-mono mb-1">
<iconify-icon icon="lucide:terminal" width="12"></iconify-icon> ATS_Engine.tex
                            </div>
<div className="text-sm text-zinc-400 font-mono opacity-60">
                                \documentclass{resume}
                                \section{Experience}
                            </div>
</div>
<div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:check" width="20"></iconify-icon>
</div>

<div className="scanline"></div>
</div>

<div className="mosaic-card rounded-xl p-5 row-span-2 flex flex-col justify-between" style={{-MouseX: '391.5999755859375px', -MouseY: '1859.5750732421875px'}}>
<div className="flex justify-between items-start">
<div className="w-8 h-8 rounded bg-zinc-800/50 flex items-center justify-center text-zinc-400 border border-zinc-700/50">
<iconify-icon icon="lucide:component" width="16"></iconify-icon>
</div>
<iconify-icon className="text-zinc-600" icon="lucide:grip-vertical" width="16"></iconify-icon>
</div>
<div className="space-y-3">
<div className="h-24 bg-zinc-900/50 rounded border border-zinc-800/50 p-3 space-y-2">
<div className="w-16 h-1.5 bg-zinc-700 rounded-full"></div>
<div className="w-full h-1 bg-zinc-800 rounded-full"></div>
<div className="w-3/4 h-1 bg-zinc-800 rounded-full"></div>
</div>
<div>
<h3 className="text-sm font-medium text-white">Modular Blocks</h3>
<p className="text-[10px] text-zinc-500 mt-1">Drag &amp; drop history.</p>
</div>
</div>
</div>

<div className="mosaic-card rounded-xl p-6 row-span-2 bg-white/5 relative overflow-hidden" style={{-MouseX: '57.5999755859375px', -MouseY: '1859.5750732421875px'}}>
<div className="absolute inset-0 bg-white opacity-[0.02]"></div>
<div className="font-serif text-zinc-300 space-y-4 text-xs leading-relaxed relative z-10">
<div>
<h4 className="text-white text-base italic">Alexander V.</h4>
<p className="text-emerald-500/80 text-[10px] tracking-widest uppercase mt-1">Product Engineer</p>
</div>
<div className="w-full h-px bg-zinc-700"></div>
<p className="opacity-80">
                                Led the restructuring of the core design system, resulting in a <span className="text-white">40% reduction</span> in technical debt.
                            </p>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-white/5 bg-black/40 backdrop-blur-sm py-8 overflow-hidden">
<div className="max-w-[1400px] mx-auto px-6 mb-4">
<p className="text-[10px] uppercase tracking-widest text-zinc-600 text-center">Built for talent at</p>
</div>
<div className="marquee-container relative w-full overflow-hidden">
<div className="marquee-content flex gap-16 w-max items-center">

<div className="flex gap-16 items-center opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<iconify-icon icon="simple-icons:vercel" width="24"></iconify-icon>
<iconify-icon icon="simple-icons:stripe" width="50"></iconify-icon>
<iconify-icon icon="simple-icons:linear" width="24"></iconify-icon>
<iconify-icon icon="simple-icons:notion" width="30"></iconify-icon>
<iconify-icon icon="simple-icons:raycast" width="90"></iconify-icon>
<iconify-icon icon="simple-icons:airbnb" width="28"></iconify-icon>
<iconify-icon icon="simple-icons:figma" width="24"></iconify-icon>

<iconify-icon icon="simple-icons:vercel" width="24"></iconify-icon>
<iconify-icon icon="simple-icons:stripe" width="50"></iconify-icon>
<iconify-icon icon="simple-icons:linear" width="24"></iconify-icon>
<iconify-icon icon="simple-icons:notion" width="30"></iconify-icon>
<iconify-icon icon="simple-icons:raycast" width="90"></iconify-icon>
<iconify-icon icon="simple-icons:airbnb" width="28"></iconify-icon>
<iconify-icon icon="simple-icons:figma" width="24"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="max-w-[1400px] mr-auto ml-auto pt-32 pr-6 pb-32 pl-6" id="system">
<div className="mb-20 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">The System</h2>
<p className="text-zinc-400 leading-relaxed">
                Traditional text editors treat your resume as a single blob of text. 
                MosaicV treats it as a <span className="text-white">database of components</span>. 
                Assemble, fork, and publish versions without rewriting a single line.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[360px]">

<div className="mosaic-card rounded-2xl p-8 col-span-1 md:col-span-2 group relative" style={{-MouseX: '1091.599998474121px', -MouseY: '877.6000366210938px'}}>
<div className="absolute top-8 right-8 z-10">
<iconify-icon className="text-zinc-600 group-hover:text-emerald-400 transition-colors" icon="lucide:git-branch" width="24"></iconify-icon>
</div>
<div className="h-full flex flex-col justify-between relative z-10">
<div className="">
<h3 className="text-xl font-medium text-white mb-2">Version Branching</h3>
<p className="text-sm text-zinc-500 max-w-sm">Create tailored "branches" of your CV for different roles (e.g., 'Manager' vs 'IC'). Changes to core modules propagate everywhere.</p>
</div>

<div className="mt-8 flex items-center gap-4">
<div className="flex-1 h-32 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 flex flex-col justify-center gap-3">
<div className="flex items-center justify-between text-[10px] text-zinc-500 uppercase tracking-wider">
<span>Master</span>
<span className="w-2 h-2 rounded-full bg-zinc-700"></span>
</div>
<div className="w-full h-1 bg-zinc-800 rounded"></div>
<div className="w-2/3 h-1 bg-zinc-800 rounded"></div>
</div>
<iconify-icon className="text-zinc-700" icon="lucide:arrow-right"></iconify-icon>
<div className="flex-1 h-32 rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-4 flex flex-col justify-center gap-3 shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)]">
<div className="flex items-center justify-between text-[10px] text-emerald-500 uppercase tracking-wider">
<span>Frontend_Lead</span>
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
</div>
<div className="w-full h-1 bg-emerald-500/20 rounded"></div>
<div className="w-2/3 h-1 bg-emerald-500/20 rounded"></div>
</div>
</div>
</div>
</div>

<div className="mosaic-card rounded-2xl p-8 flex flex-col justify-between group" style={{-MouseX: '174.27496337890625px', -MouseY: '877.6000366210938px'}}>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-900/5"></div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Machine Readable</h3>
<p className="text-sm text-zinc-500">100% Parseable LaTeX output.</p>
</div>
<div className="flex items-center justify-center py-8">
<div className="relative w-32 h-32 flex items-center justify-center">
<svg className="transform -rotate-90 w-32 h-32">
<circle cx="64" cy="64" fill="transparent" r="60" stroke="#27272a" strokeWidth="4"></circle>
<circle className="transition-all duration-1000 ease-out" cx="64" cy="64" fill="transparent" r="60" stroke="#10b981" stroke-dasharray="377" stroke-dashoffset="20" strokeWidth="4"></circle>
</svg>
<div className="absolute text-3xl font-bold text-white tracking-tighter">98<span className="text-sm text-zinc-600 font-normal">%</span></div>
</div>
</div>
</div>

<div className="mosaic-card rounded-2xl p-8 col-span-1 md:col-span-3 flex flex-col md:flex-row items-center gap-12 overflow-hidden" style={{-MouseX: '1091.599998474121px', -MouseY: '493.6000061035156px'}}>
<div className="w-full md:w-1/3 z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="lucide:layout-grid" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">The Mosaic Editor</h3>
<p className="text-sm text-zinc-500 mb-6">A distraction-free environment where structure meets style. Focus on content, we handle the typography and spacing.</p>
<button className="text-xs text-white border-b border-white/30 hover:border-white pb-0.5 transition-colors">Explore the playground</button>
</div>

<div className="w-full md:w-2/3 h-full relative">
<div className="absolute inset-0 bg-gradient-to-r from-zinc-950/0 via-zinc-950/0 to-zinc-950 z-20 pointer-events-none"></div>
<div className="bg-zinc-900 border border-zinc-800 rounded-tl-xl h-full p-6 shadow-2xl ml-8 transform translate-y-4 hover:translate-y-2 transition-transform duration-500">

<div className="flex items-center gap-4 border-b border-zinc-800 pb-4 mb-4">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
</div>
<div className="h-6 px-3 bg-zinc-800 rounded text-[10px] flex items-center text-zinc-400">profile_main.json</div>
</div>

<div className="space-y-3">
<div className="flex gap-3">
<div className="w-1/3 h-24 rounded border border-zinc-700 bg-zinc-800/30 p-3 hover:border-emerald-500/50 cursor-grab active:cursor-grabbing transition-colors">
<div className="flex justify-between mb-2">
<div className="w-4 h-4 rounded bg-emerald-500/20"></div>
<iconify-icon className="text-zinc-600" icon="lucide:grip-horizontal"></iconify-icon>
</div>
<div className="w-12 h-1 bg-zinc-600 rounded mb-1"></div>
<div className="w-20 h-1 bg-zinc-700 rounded"></div>
</div>
<div className="w-1/3 h-24 rounded border border-zinc-800 bg-zinc-900 p-3 opacity-50">
<div className="w-4 h-4 rounded bg-zinc-700 mb-2"></div>
<div className="w-12 h-1 bg-zinc-800 rounded"></div>
</div>
<div className="w-1/3 h-24 rounded border border-dashed border-zinc-700 bg-transparent flex items-center justify-center text-zinc-700">
<iconify-icon icon="lucide:plus"></iconify-icon>
</div>
</div>
<div className="h-32 rounded border border-zinc-800 bg-zinc-900/50 p-4 mt-4">
<div className="text-[10px] text-zinc-600 font-mono mb-2">// Live Preview</div>
<div className="font-serif text-zinc-400 text-sm">Senior Product Designer</div>
<div className="text-zinc-600 text-[10px] mt-1">Stripe • 2020 - Present</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative bg-[#050505] border-t border-white/5 pt-32 pb-12 overflow-hidden group/footer">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-emerald-500/[0.03] blur-[120px] rounded-full pointer-events-none"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
<span className="font-serif text-[15vw] leading-none text-white/[0.02] tracking-tighter opacity-0 scale-95 transition-all duration-1000 ease-out group-hover/footer:opacity-100 group-hover/footer:scale-100 block translate-y-12">
            MOSAIC
        </span>
</div>

<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

<h2 className="md:text-6xl text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 tracking-tighter mb-6">
            Ready to build?
        </h2>
<p className="text-zinc-500 mb-12 max-w-xl mx-auto text-lg font-light leading-relaxed">
            Join the waitlist to get early access to the builder. We are onboarding users in batches every Tuesday.
        </p>

<form className="flex flex-col sm:flex-row gap-2 justify-center max-w-md mx-auto mb-24 relative group/form">

<div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/10 via-white/5 to-emerald-500/10 rounded-xl blur opacity-0 group-hover/form:opacity-100 transition duration-700"></div>
<div className="relative flex flex-col sm:flex-row gap-2 w-full">
<input className="bg-zinc-900/40 backdrop-blur-md border border-white/10 text-white px-5 py-3.5 rounded-lg w-full focus:outline-none focus:border-emerald-500/30 focus:bg-zinc-900/60 focus:ring-1 focus:ring-emerald-500/20 transition-all duration-300 placeholder-zinc-700 font-light tracking-wide" placeholder="Enter your email" type="email"/>
<button className="bg-white text-black font-medium px-8 py-3.5 rounded-lg hover:bg-zinc-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 whitespace-nowrap shadow-[0_0_20px_-5px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]" type="submit">
                    Join Waitlist
                </button>
</div>
</form>

<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-medium">
<div className="flex items-center gap-3 mb-4 md:mb-0 group/status cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 duration-1000"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 group-hover/status:bg-emerald-400 transition-colors"></span>
</span>
<span className="group-hover/status:text-emerald-500/80 transition-colors duration-300">Systems Normal</span>
</div>
<div className="flex gap-8">
<a className="hover:text-white transition-colors duration-300 relative group/link" href="#">
                    Twitter
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover/link:w-full opacity-50"></span>
</a>
<a className="hover:text-white transition-colors duration-300 relative group/link" href="#">
                    Github
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover/link:w-full opacity-50"></span>
</a>
<a className="hover:text-white transition-colors duration-300 relative group/link" href="#">
                    Legal
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover/link:w-full opacity-50"></span>
</a>
</div>
<div className="mt-4 md:mt-0 opacity-50 hover:opacity-100 transition-opacity">
                © 2024 MosaicV Labs
            </div>
</div>
</div>
</footer>

    </>
  );
}
