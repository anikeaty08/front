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
      

<div className="fixed inset-0 pointer-events-none iso-grid z-0"></div>

<div className="relative z-10 max-w-6xl mx-auto p-8 space-y-32">

<section className="w-full min-h-[600px] flex flex-col md:flex-row items-center gap-12 md:gap-24">

<div className="w-full md:w-5/12">
<div className="backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden group">

<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="space-y-6">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight">Source Configuration</h2>
<p className="text-lg text-gray-500 mt-2 font-light leading-relaxed">Select a provider to begin indexing your commit history.</p>
</div>

<div className="grid grid-cols-2 gap-3">

<button className="flex flex-col items-center justify-center p-4 rounded-lg border border-white/5 bg-[#181818] hover:border-white hover:bg-[#202020] transition-all duration-200 group/card">
<i className="w-6 h-6 text-gray-400 group-hover/card:text-white mb-2" data-lucide="github"></i>
<span className="text-sm text-gray-400 group-hover/card:text-white">GitHub</span>
</button>

<button className="flex flex-col items-center justify-center p-4 rounded-lg border border-white/5 bg-[#181818] hover:border-white hover:bg-[#202020] transition-all duration-200 group/card">
<i className="w-6 h-6 text-gray-400 group-hover/card:text-white mb-2" data-lucide="gitlab"></i>
<span className="text-sm text-gray-400 group-hover/card:text-white">GitLab</span>
</button>

<button className="flex flex-col items-center justify-center p-4 rounded-lg border border-white/5 bg-[#181818] hover:border-white hover:bg-[#202020] transition-all duration-200 group/card">
<i className="w-6 h-6 text-gray-400 group-hover/card:text-white mb-2" data-lucide="bitbucket"></i>
<span className="text-sm text-gray-400 group-hover/card:text-white">Bitbucket</span>
</button>

<button className="flex flex-col items-center justify-center p-4 rounded-lg border border-white/5 bg-[#181818] hover:border-white hover:bg-[#202020] transition-all duration-200 group/card">
<i className="w-6 h-6 text-gray-400 group-hover/card:text-white mb-2" data-lucide="terminal"></i>
<span className="text-sm text-gray-400 group-hover/card:text-white">CLI</span>
</button>
</div>
<div className="relative flex items-center py-2">
<div className="flex-grow border-t border-white/10"></div>
<span className="flex-shrink-0 mx-4 text-sm text-gray-600 font-mono">OR MANUAL IMPORT</span>
<div className="flex-grow border-t border-white/10"></div>
</div>

<div className="group/input">
<label className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-1.5 block">Repository URL</label>
<div className="flex items-center bg-black border border-neutral-800 rounded-lg overflow-hidden glow-border transition-all">
<span className="pl-3 text-gray-600">
<i className="w-4 h-4" data-lucide="link"></i>
</span>
<input className="w-full bg-transparent border-none text-white font-mono text-sm p-3 focus:ring-0 placeholder-neutral-700" placeholder="https://github.com/username/project" type="text"/>
<button className="mr-1 p-1.5 bg-neutral-900 rounded border border-neutral-800 text-gray-400 hover:text-purple-400 transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="w-full md:w-7/12 h-full flex items-center justify-center relative perspective-[1000px]">

<div className="absolute top-0 left-10 z-20 flex gap-4 animate-fade-in">
<div className="bg-[#1A1A1A]/90 backdrop-blur-sm border border-white/10 p-4 rounded-lg shadow-xl">
<div className="flex items-center gap-2 text-gray-500 mb-1">
<i className="w-4 h-4" data-lucide="git-commit-horizontal"></i>
<span className="text-xs font-mono uppercase tracking-wide">Commits</span>
</div>
<span className="text-4xl font-thin text-white tracking-tight">247</span>
</div>
<div className="bg-[#1A1A1A]/90 backdrop-blur-sm border border-white/10 p-4 rounded-lg shadow-xl translate-y-8">
<div className="flex items-center gap-2 text-gray-500 mb-1">
<i className="w-4 h-4" data-lucide="git-pull-request"></i>
<span className="text-xs font-mono uppercase tracking-wide">PRs</span>
</div>
<span className="text-4xl font-thin text-white tracking-tight">34</span>
</div>
</div>

<div className="relative w-full h-64 transform rotate-x-[60deg] rotate-z-[-15deg] skew-x-12 opacity-80">

<div className="absolute inset-x-0 top-1/2 h-32 bg-neutral-900/50 border-y border-white/5 -translate-y-1/2"></div>

<div className="absolute top-1/2 right-0 w-16 h-16 bg-purple-600/20 border border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.4)] -translate-y-1/2 rounded animate-pulse"></div>
<div className="absolute top-1/2 right-32 w-12 h-12 bg-neutral-800 border border-white/20 -translate-y-1/2 rounded opacity-60"></div>
<div className="absolute top-1/2 right-56 w-12 h-12 bg-neutral-800 border border-white/20 -translate-y-1/2 rounded opacity-40"></div>
<div className="absolute top-1/2 right-80 w-12 h-12 bg-neutral-800 border border-white/20 -translate-y-1/2 rounded opacity-20"></div>

<div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-l from-purple-500/50 to-transparent -translate-y-1/2"></div>
</div>
</div>
</section>

<section className="w-full min-h-[600px] flex flex-col md:flex-row items-center gap-12 md:gap-24">

<div className="w-full md:w-5/12 space-y-8">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight">Help us sound like you</h2>
<p className="text-lg text-gray-500 mt-2 font-light leading-relaxed">Establish constraints for the AI generation model.</p>
</div>
<div className="grid grid-rows-2 gap-4 h-[420px]">

<div className="relative p-6 bg-[#151515] border border-white/10 rounded-xl hover:border-purple-500/50 hover:bg-[#1A1A1A] transition-all cursor-pointer group flex flex-col justify-between overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-4 h-4 rounded-full border border-purple-500 flex items-center justify-center">
<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
</div>
</div>
<div className="w-10 h-10 rounded bg-blue-900/20 flex items-center justify-center text-blue-400 mb-4 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-1">Ingest LinkedIn Profile</h3>
<p className="text-base text-gray-500 font-light leading-normal">We will parse your past posts to map your syntax and tone.</p>
</div>
</div>

<div className="relative p-6 bg-[#151515] border border-white/10 rounded-xl hover:border-purple-500/50 hover:bg-[#1A1A1A] transition-all cursor-pointer group flex flex-col justify-between ring-1 ring-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
<div className="absolute top-0 right-0 p-4">
<div className="w-4 h-4 rounded-full border border-purple-500 flex items-center justify-center">
<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
</div>
</div>
<div className="w-10 h-10 rounded bg-purple-900/20 flex items-center justify-center text-purple-400 mb-4 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
<i className="w-5 h-5" data-lucide="sparkles"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-1">Initialize Zero-Shot</h3>
<p className="text-base text-gray-500 font-light leading-normal">Build your persona constraints from scratch using custom rules.</p>
</div>
</div>
</div>
</div>

<div className="w-full md:w-7/12 relative">
<div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl">

<div className="flex items-center justify-between px-4 py-3 bg-[#121212] border-b border-white/5">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
</div>
<div className="text-xs font-mono text-gray-600">persona_analysis.json</div>
<div className="w-3"></div>
</div>

<div className="p-8 space-y-8">

<div className="flex items-end justify-between h-32 gap-1 px-4">
<div className="w-full bg-neutral-800 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-purple-600 rounded-t-sm h-[85%] shadow-[0_0_20px_rgba(168,85,247,0.4)]"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-purple-500/50 rounded-t-sm h-[70%]"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[45%]"></div>
</div>

<div className="flex justify-between text-xs font-mono text-gray-500 border-t border-white/5 pt-4">
<span>Casual</span>
<span className="text-purple-400">Technical</span>
<span>Educational</span>
<span>Sales</span>
</div>

<div className="font-mono text-sm space-y-2 bg-[#050505] p-4 rounded border border-white/5 text-gray-400">
<div className="flex"><span className="text-purple-400 w-6">1</span><span>{</span></div>
<div className="flex"><span className="text-purple-400 w-6">2</span><span className="pl-4">"voice": "authoritative",</span></div>
<div className="flex"><span className="text-purple-400 w-6">3</span><span className="pl-4">"syntax_complexity": <span className="text-yellow-400">0.85</span>,</span></div>
<div className="flex"><span className="text-purple-400 w-6">4</span><span className="pl-4">"emoji_usage": <span className="text-red-400">false</span></span></div>
<div className="flex"><span className="text-purple-400 w-6">5</span><span>}</span></div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full min-h-[600px] flex flex-col md:flex-row items-start gap-12 md:gap-24 pt-12">

<div className="w-full md:w-1/2 space-y-6">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight">Building your narrative</h2>
<p className="text-lg text-gray-500 mt-2 font-light leading-relaxed">Analyzing repo metadata to extract key engineering milestones.</p>
</div>

<div className="w-full bg-[#050505] border border-white/10 rounded-lg overflow-hidden font-mono text-sm shadow-2xl">

<div className="flex items-center justify-between px-4 py-2 bg-[#111] border-b border-white/5">
<span className="text-xs text-gray-500">bash — process_worker</span>
<div className="flex items-center gap-2">
<span className="text-xs text-yellow-500">Processing</span>
<div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse shadow-[0_0_8px_rgba(234,179,8,0.6)]"></div>
</div>
</div>

<div className="p-4 space-y-2 h-64 overflow-hidden flex flex-col justify-end">
<p className="text-neutral-500">&gt; Initializing git walker...</p>
<p className="text-neutral-500">&gt; Fetching origin/main...</p>
<p className="text-green-400/70">&gt; Found 247 commits in last 30 days.</p>
<p className="text-neutral-500">&gt; Analyzing diffs for complexity...</p>
<p className="text-white">&gt; <span className="text-purple-400">analyzing commit:</span> "fix: hydration error in main nav"</p>
<p className="text-white">&gt; <span className="text-purple-400">story detected:</span> "Debugging Strategy - High Priority"</p>
<p className="text-white">&gt; <span className="text-purple-400">analyzing commit:</span> "feat: add stripe webhooks"</p>
<div className="flex items-center gap-2 text-white">
<span className="text-green-500">➜</span>
<span className="animate-pulse">_</span>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/2 pl-8 md:pl-16">
<div className="relative border-l border-white/10 py-2 space-y-12">

<div className="relative pl-8 group">
<div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-neutral-800 border border-white/20 group-hover:bg-white group-hover:border-white transition-colors"></div>
<div className="flex items-start justify-between">
<div>
<div className="flex items-center gap-2 text-white mb-1">
<i className="w-5 h-5 text-gray-400" data-lucide="code-2"></i>
<h4 className="text-lg font-medium">Code Analysis</h4>
</div>
<p className="text-base text-gray-500 font-light">Tokenizing diffs and README files.</p>
</div>
<i className="w-5 h-5 text-green-500" data-lucide="check"></i>
</div>
</div>

<div className="relative pl-8">

<div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
<div className="bg-white/[0.03] border border-white/10 p-4 rounded-lg -mt-2">
<div className="flex items-center gap-2 text-white mb-1">
<i className="w-5 h-5 text-purple-400" data-lucide="lightbulb"></i>
<h4 className="text-lg font-medium text-purple-100 glow-text">Story Identification</h4>
</div>
<p className="text-base text-gray-400 font-light">Grouping logic into narrative arcs.</p>
</div>
</div>

<div className="relative pl-8 opacity-40">
<div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-neutral-800 border border-white/10"></div>
<div className="flex items-center gap-2 text-white mb-1">
<i className="w-5 h-5 text-gray-400" data-lucide="pen-tool"></i>
<h4 className="text-lg font-medium">Draft Generation</h4>
</div>
<p className="text-base text-gray-500 font-light">Writing drafts in your personal style.</p>
</div>

<div className="mt-12 p-4 rounded border border-dashed border-white/20 bg-white/[0.02]">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Efficiency Gain</span>
<i className="w-4 h-4 text-gray-600" data-lucide="cpu"></i>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-mono font-light text-green-400">+20h</span>
<span className="text-sm text-gray-600">writing time saved</span>
</div>
</div>
</div>
</div>
</section>
</div>


    </>
  );
}
