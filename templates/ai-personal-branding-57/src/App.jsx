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
      

<div className="bg-noise"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-[#030303]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-4 h-4 bg-white/10 rounded-sm overflow-hidden relative">
<div className="absolute inset-0 bg-white/40 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
</div>
<span className="text-sm font-medium tracking-tight text-white">edittifi</span>
</div>
<div className="flex items-center gap-6">
<a className="text-xs hover:text-white transition-colors" href="#work">Work</a>
<a className="text-xs hover:text-white transition-colors" href="#process">Process</a>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:scale-105 transition-transform" href="#contact">
                    Strategy Call
                </a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 grid-bg opacity-40"></div>

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none mix-blend-overlay"></div>
<div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
</span>
<span className="text-[10px] uppercase tracking-widest text-zinc-300">Accepting 2 New Founders</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-8 leading-[1]">
                    Content on <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">Autopilot.</span>
</h1>
<p className="text-lg text-zinc-400 mb-10 max-w-md font-light leading-relaxed">
                    We combine high-end editing with hyper-realistic AI avatars to build your personal brand while you sleep.
                </p>
<div className="flex flex-wrap gap-4">
<a className="btn-glow px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-200 transition-all flex items-center gap-2" href="#contact">
                        Start Growth Engine
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<button className="px-8 py-4 glass-panel text-white text-sm font-medium rounded-full hover:bg-white/10 transition-all flex items-center gap-2 group">
<i className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" data-lucide="play-circle"></i>
                        Watch Showreel
                    </button>
</div>
</div>

<div className="order-1 lg:order-2 perspective-container h-[500px] flex items-center justify-center relative">

<div className="card-3d w-full max-w-md aspect-[9/16] bg-[#050505] rounded-2xl border border-white/10 relative overflow-hidden group">

<img alt="Video Background" className="absolute inset-0 w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90"></div>

<div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-20">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/20 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col">
<span className="text-xs text-white font-medium">David Founder</span>
<span className="text-[10px] text-zinc-400">Sponsored</span>
</div>
</div>
<i className="text-white w-5 h-5" data-lucide="more-horizontal"></i>
</div>

<div className="absolute bottom-24 left-4 right-16 z-20">
<div className="bg-black/40 backdrop-blur-sm border border-white/10 p-3 rounded-lg mb-2 inline-block">
<p className="text-white text-sm font-medium leading-tight">"We scaled to $10M ARR in 12 months using just this one AI strategy..."</p>
</div>
</div>

<div className="absolute right-3 bottom-24 flex flex-col gap-5 z-20">
<div className="flex flex-col items-center gap-1 group/icon cursor-pointer">
<div className="p-2 rounded-full bg-white/10 group-hover/icon:bg-white/20 backdrop-blur transition-colors">
<i className="w-5 h-5 text-white fill-white/20" data-lucide="heart"></i>
</div>
<span className="text-[10px] text-white font-medium">12K</span>
</div>
<div className="flex flex-col items-center gap-1 group/icon cursor-pointer">
<div className="p-2 rounded-full bg-white/10 group-hover/icon:bg-white/20 backdrop-blur transition-colors">
<i className="w-5 h-5 text-white" data-lucide="message-circle"></i>
</div>
<span className="text-[10px] text-white font-medium">408</span>
</div>
<div className="flex flex-col items-center gap-1 group/icon cursor-pointer">
<div className="p-2 rounded-full bg-white/10 group-hover/icon:bg-white/20 backdrop-blur transition-colors">
<i className="w-5 h-5 text-white" data-lucide="share-2"></i>
</div>
<span className="text-[10px] text-white font-medium">2.1K</span>
</div>
</div>

<div className="absolute bottom-4 left-4 right-4 h-1 bg-white/20 rounded-full overflow-hidden z-20">
<div className="h-full w-[65%] bg-white rounded-full"></div>
</div>
</div>

<div className="absolute top-20 -right-8 w-40 h-24 glass-panel rounded-xl -z-10 animate-bounce flex items-center justify-center p-4" style={{animationDuration: '6s'}}>
<div className="flex gap-3 items-center">
<div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
<i className="w-4 h-4 text-green-400" data-lucide="trending-up"></i>
</div>
<div>
<div className="text-[10px] text-zinc-400">Retention</div>
<div className="text-sm font-bold text-white">+142%</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-black/50 overflow-hidden">
<div className="marquee-container relative w-full">
<div className="marquee-content flex gap-16 w-max items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-bold tracking-tighter text-white">LINEAR</span>
<span className="text-xl font-bold tracking-tighter text-white">VERCEL</span>
<span className="text-xl font-bold tracking-tighter text-white">STRIPE</span>
<span className="text-xl font-bold tracking-tighter text-white">RAYCAST</span>
<span className="text-xl font-bold tracking-tighter text-white">NOTION</span>
<span className="text-xl font-bold tracking-tighter text-white">OPENAI</span>
<span className="text-xl font-bold tracking-tighter text-white">ARGIL</span>
<span className="text-xl font-bold tracking-tighter text-white">LOOM</span>

<span className="text-xl font-bold tracking-tighter text-white">LINEAR</span>
<span className="text-xl font-bold tracking-tighter text-white">VERCEL</span>
<span className="text-xl font-bold tracking-tighter text-white">STRIPE</span>
<span className="text-xl font-bold tracking-tighter text-white">RAYCAST</span>
<span className="text-xl font-bold tracking-tighter text-white">NOTION</span>
<span className="text-xl font-bold tracking-tighter text-white">OPENAI</span>
<span className="text-xl font-bold tracking-tighter text-white">ARGIL</span>
<span className="text-xl font-bold tracking-tighter text-white">LOOM</span>
</div>
</div>
</section>

<section className="py-32 relative" id="work">
<div className="max-w-7xl mx-auto px-6 mb-16 flex justify-between items-end">
<div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-4">Aesthetic Intelligence.</h2>
<p className="text-zinc-500 max-w-xl">We don't just edit. We engineer retention using pace, sound design, and visual psychology.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-xs text-white border-b border-white/20 pb-1 hover:border-white transition-colors" href="#">
                View Full Archive <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</a>
</div>

<div className="overflow-x-auto pb-12 px-6 no-scrollbar" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>
<div className="flex gap-6 min-w-max px-6">

<div className="w-[300px] h-[533px] bg-zinc-900 rounded-xl relative overflow-hidden group cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 shadow-2xl">

<img alt="Podcast" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90"></div>

<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] text-white font-medium border border-white/10 flex items-center gap-1">
<i className="w-3 h-3 text-red-400" data-lucide="mic"></i> Podcast
                        </span>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
<div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
<i className="w-6 h-6 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</div>

<div className="absolute bottom-0 w-full p-6 flex flex-col gap-3">
<div>
<h4 className="text-lg font-medium text-white leading-tight mb-1">"The secret to scaling is saying no."</h4>
<p className="text-xs text-zinc-400">Ep. 42 • Alex Hormozi</p>
</div>
<div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
<div className="bg-red-500 h-full w-0 group-hover:w-full transition-all duration-[3s] ease-linear"></div>
</div>
<div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono">
<span>00:00</span>
<span>12:04</span>
</div>
</div>
</div>

<div className="w-[300px] h-[533px] bg-zinc-900 rounded-xl relative overflow-hidden group cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 shadow-2xl">
<img alt="AI Tech" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-50" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90"></div>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] text-white font-medium border border-white/10 flex items-center gap-1">
<i className="w-3 h-3 text-indigo-400" data-lucide="sparkles"></i> AI Avatar
                        </span>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
<div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
<i className="w-6 h-6 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-0 w-full p-6 flex flex-col gap-3">
<div>
<h4 className="text-lg font-medium text-white leading-tight mb-1">How AI is changing agency models forever.</h4>
<p className="text-xs text-zinc-400">Deep Dive Analysis</p>
</div>
<div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
<div className="bg-indigo-500 h-full w-0 group-hover:w-full transition-all duration-[3s] ease-linear"></div>
</div>
<div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono">
<span>00:00</span>
<span>08:15</span>
</div>
</div>
</div>

<div className="w-[300px] h-[533px] bg-zinc-900 rounded-xl relative overflow-hidden group cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 shadow-2xl">
<img alt="Business Lifestyle" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90"></div>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] text-white font-medium border border-white/10 flex items-center gap-1">
<i className="w-3 h-3 text-emerald-400" data-lucide="video"></i> Lifestyle
                        </span>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
<div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
<i className="w-6 h-6 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-0 w-full p-6 flex flex-col gap-3">
<div>
<h4 className="text-lg font-medium text-white leading-tight mb-1">Day in the life of a Series A Founder.</h4>
<p className="text-xs text-zinc-400">Behind the scenes</p>
</div>
<div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
<div className="bg-emerald-500 h-full w-0 group-hover:w-full transition-all duration-[3s] ease-linear"></div>
</div>
<div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono">
<span>00:00</span>
<span>00:59</span>
</div>
</div>
</div>

<div className="w-[300px] h-[533px] bg-zinc-900 rounded-xl relative overflow-hidden group cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 shadow-2xl">
<img alt="Studio" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-50" src="https://images.unsplash.com/photo-1589386417686-0d34b5903d23?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90"></div>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] text-white font-medium border border-white/10 flex items-center gap-1">
<i className="w-3 h-3 text-amber-400" data-lucide="alert-circle"></i> Warning
                        </span>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
<div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
<i className="w-6 h-6 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-0 w-full p-6 flex flex-col gap-3">
<div>
<h4 className="text-lg font-medium text-white leading-tight mb-1">Stop using this marketing tactic.</h4>
<p className="text-xs text-zinc-400">Controversial Take</p>
</div>
<div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
<div className="bg-amber-500 h-full w-0 group-hover:w-full transition-all duration-[3s] ease-linear"></div>
</div>
<div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono">
<span>00:00</span>
<span>02:45</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-[#050505] relative overflow-hidden" id="process">
<div className="absolute left-0 top-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-panel p-8 rounded-2xl relative group overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[40px] group-hover:bg-white/10 transition-colors duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="cpu"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">The AI Clone</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            We train a custom AI model on your voice and face. Send us a text script, and we generate a studio-quality video of you speaking it. No cameras needed.
                        </p>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl relative group overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[40px] group-hover:bg-white/10 transition-colors duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="wand-2"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Retention Editing</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Our editors use rapid-fire cutting, motion graphics, and sound engineering to keep viewer retention above 80% on TikTok and Reels.
                        </p>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl relative group overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[40px] group-hover:bg-white/10 transition-colors duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="trending-up"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Algorithmic Distribution</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            We don't just post. We optimize metadata, posting times, and engagement seeding to trigger algorithmic spikes for maximum reach.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 relative">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-6">Reality is Optional.</h2>
<p className="text-zinc-500 mb-12">Can you tell the difference? Hover to reveal.</p>
<div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">

<div className="absolute inset-0 bg-zinc-800 flex items-center justify-center">
<img alt="Real" className="absolute inset-0 w-full h-full object-cover grayscale opacity-50" src="https://images.unsplash.com/photo-1531297461136-82af022f5b79?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<span className="relative z-10 text-white font-bold text-4xl tracking-widest opacity-80 mix-blend-overlay">RAW FOOTAGE</span>
</div>

<div className="absolute inset-0 bg-zinc-900 flex items-center justify-center clip-path-slant transition-all duration-700 group-hover:translate-x-full z-20" style={{clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)'}}>
<img alt="AI Enhanced" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1531297461136-82af022f5b79?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-indigo-900/20 mix-blend-overlay"></div>
<span className="relative z-10 text-indigo-400 font-bold text-4xl tracking-widest opacity-80 mix-blend-plus-lighter">AI ENHANCED</span>
</div>

<div className="absolute inset-y-0 left-[85%] w-1 bg-white/50 z-30 group-hover:opacity-0 transition-opacity shadow-[0_0_20px_rgba(255,255,255,0.5)]"></div>
<div className="absolute bottom-6 left-0 w-full flex justify-center z-40 pointer-events-none">
<div className="bg-black/50 backdrop-blur px-4 py-2 rounded-full border border-white/10 text-xs text-white">
                        Hover to compare
                     </div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-gradient-to-b from-[#030303] to-[#080808]" id="contact">

<div className="absolute inset-0 grid-bg opacity-20"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-white mb-8">Ready to clone yourself?</h2>
<p className="text-xl text-zinc-400 mb-12 font-light">
                Stop trading time for content. Build a brand that works 24/7.
            </p>
<div className="glass-panel p-1 rounded-2xl inline-block w-full max-w-md">
<div className="bg-black/40 rounded-xl p-8 border border-white/5">
<div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
<span className="text-zinc-400">Monthly Slots</span>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
<span className="text-white font-medium">2 Spots Left</span>
</div>
</div>
<form className="space-y-4 text-left">
<div>
<label className="block text-xs text-zinc-500 mb-1 ml-1">Work Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 transition-colors" placeholder="founder@company.com" type="email"/>
</div>
<button className="w-full btn-glow bg-white text-black font-semibold rounded-lg py-3 text-sm hover:bg-zinc-200 transition-colors" type="button">
                            Book Strategy Call
                        </button>
</form>
<p className="text-[10px] text-zinc-600 mt-4 text-center">No commitment required. 15-minute intro call.</p>
</div>
</div>
</div>
</section>
<footer className="py-12 border-t border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<div className="w-4 h-4 bg-white/20 rounded-sm"></div>
<span className="text-white font-medium tracking-tight">edittifi</span>
</div>
<div className="text-[10px] text-zinc-600 uppercase tracking-widest">
                Designed for the 1% of Founders
            </div>
</div>
</footer>


    </>
  );
}
