import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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



        // Initialize Lucide icons
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-1/4 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
<div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-950/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="text-cyan-400 w-8 h-8" data-lucide="audio-lines" strokeWidth="1.5"></i>
<span className="text-2xl font-semibold tracking-tight text-white">AR<span className="font-normal text-slate-400">Buds Pro</span></span>
</div>
<button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-full text-base font-medium transition-colors border border-white/10 backdrop-blur-sm">
                Order Now
            </button>
</div>
</nav>

<section className="relative pt-32 pb-24 min-h-screen flex flex-col items-center justify-center text-center px-6">
<div className="space-y-6 max-w-4xl mx-auto z-10">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-base font-medium mb-4">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                New Release
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-500 pb-2">
                EXPERIENCE THE<br/>
<span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">FUTURE OF SOUND</span>
</h1>

<div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto my-16 group perspective-1000">
<div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
<div className="relative w-full h-full rounded-full border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center shadow-[0_0_80px_rgba(34,211,238,0.15)] transition-transform duration-700 hover:scale-105">

<div className="absolute inset-2 rounded-full border-[3px] border-transparent border-t-cyan-400 border-l-blue-500 opacity-50 rotate-45"></div>

<div className="w-48 h-48 rounded-full bg-slate-950 shadow-inner flex flex-col items-center justify-center border border-white/5 relative overflow-hidden">
<div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent"></div>
<span className="text-5xl font-semibold tracking-tight text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] font-mono">100</span>
<span className="text-base text-cyan-500/50 uppercase tracking-widest mt-2">Power</span>
</div>
</div>
</div>
<div className="space-y-4">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-300">
                    MUSIC. CALLS. LIFE.
                </h2>
<div className="flex items-center justify-center gap-4 text-slate-500 tracking-[0.3em] text-base">
<span>P</span><span>E</span><span>R</span><span>F</span><span>E</span><span>C</span><span>T</span><span>E</span><span>D</span><span>.</span>
</div>
</div>

<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-16 text-base text-slate-400 font-medium">
<div className="flex items-center gap-2"><i className="w-5 h-5 text-blue-400" data-lucide="bluetooth" strokeWidth="1.5"></i> BLUETOOTH 5.3</div>
<div className="flex items-center gap-2"><i className="w-5 h-5 text-cyan-400" data-lucide="gamepad-2" strokeWidth="1.5"></i> LOW LATENCY</div>
<div className="flex items-center gap-2"><i className="w-5 h-5 text-blue-400" data-lucide="mic" strokeWidth="1.5"></i> HD CALLING</div>
<div className="flex items-center gap-2"><i className="w-5 h-5 text-cyan-400" data-lucide="bot" strokeWidth="1.5"></i> VOICE ASSISTANT</div>
</div>
</div>
</section>

<div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent my-12"></div>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="space-y-8">
<div>
<h3 className="text-xl text-slate-400 tracking-tight font-medium mb-2">SMALL SIZE</h3>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                        BIG SOUND
                    </h2>
</div>
<p className="text-lg text-slate-300 leading-relaxed max-w-lg">
                    AR Buds Pro is designed to deliver powerful audio, all-day comfort and smart features that keep up with your lifestyle.
                </p>
<div className="pt-8 space-y-2">
<h4 className="text-xl font-medium tracking-tight text-white mb-6 uppercase">Top Features</h4>
<div className="grid gap-8">

<div className="flex gap-6 group">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-colors">
<i className="w-7 h-7 text-cyan-400" data-lucide="volume-2" strokeWidth="1.5"></i>
</div>
<div>
<h5 className="text-xl font-medium text-white mb-2 tracking-tight">Dolby Sound</h5>
<p className="text-lg text-slate-400 leading-relaxed">Crystal clear audio with immersive stereo experience.</p>
</div>
</div>

<div className="flex gap-6 group">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-colors">
<i className="w-7 h-7 text-cyan-400" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<div>
<h5 className="text-xl font-medium text-white mb-2 tracking-tight">Deep Bass</h5>
<p className="text-lg text-slate-400 leading-relaxed">Feel every beat with enhanced bass technology.</p>
</div>
</div>

<div className="flex gap-6 group">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-colors">
<i className="w-7 h-7 text-cyan-400" data-lucide="battery-charging" strokeWidth="1.5"></i>
</div>
<div>
<h5 className="text-xl font-medium text-white mb-2 tracking-tight">24H Battery</h5>
<p className="text-lg text-slate-400 leading-relaxed">Up to 6H playback on a single charge &amp; 24H with charging case.</p>
</div>
</div>
</div>
</div>
</div>
<div className="space-y-8 lg:pt-32">
<div className="grid gap-8">

<div className="flex gap-6 group">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-colors">
<i className="w-7 h-7 text-blue-400" data-lucide="pointer" strokeWidth="1.5"></i>
</div>
<div>
<h5 className="text-xl font-medium text-white mb-2 tracking-tight">Touch Control</h5>
<p className="text-lg text-slate-400 leading-relaxed">Play, pause, call &amp; access voice assistant with a simple touch.</p>
</div>
</div>

<div className="flex gap-6 group">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-colors">
<i className="w-7 h-7 text-blue-400" data-lucide="link" strokeWidth="1.5"></i>
</div>
<div>
<h5 className="text-xl font-medium text-white mb-2 tracking-tight">Auto Connect</h5>
<p className="text-lg text-slate-400 leading-relaxed">Seamless pairing with your devices as soon as you open the case.</p>
</div>
</div>

<div className="flex gap-6 group">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-colors">
<i className="w-7 h-7 text-blue-400" data-lucide="droplet" strokeWidth="1.5"></i>
</div>
<div>
<h5 className="text-xl font-medium text-white mb-2 tracking-tight">Sweat &amp; Splash Resistant (IPX4)</h5>
<p className="text-lg text-slate-400 leading-relaxed">Built for workouts and all-weather use.</p>
</div>
</div>
</div>
<div className="p-8 rounded-3xl bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20 mt-12 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom_right,white,transparent)]"></div>
<h3 className="text-2xl font-medium tracking-tight text-blue-400 relative z-10 uppercase">Be Free.<br/><span className="text-white">Stay in the moment.</span></h3>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950/50 border-y border-white/5 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h3 className="text-lg text-slate-400 uppercase tracking-widest mb-2 font-medium">Built For</h3>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">EVERY MOMENT</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">

<div className="group relative h-80 rounded-3xl overflow-hidden bg-slate-900 border border-white/10 hover:border-cyan-500/30 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/90 z-10"></div>
<div className="absolute inset-0 bg-cyan-900/20 group-hover:scale-110 transition-transform duration-700"></div>
<div className="absolute bottom-0 left-0 p-8 z-20">
<i className="w-8 h-8 text-cyan-400 mb-4" data-lucide="dumbbell" strokeWidth="1.5"></i>
<h4 className="text-2xl font-medium tracking-tight text-white mb-2 uppercase">Workout</h4>
<p className="text-base text-slate-400">Stay Fit. Stay Motivated.</p>
</div>
</div>

<div className="group relative h-80 rounded-3xl overflow-hidden bg-slate-900 border border-white/10 hover:border-blue-500/30 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/90 z-10"></div>
<div className="absolute inset-0 bg-blue-900/20 group-hover:scale-110 transition-transform duration-700"></div>
<div className="absolute bottom-0 left-0 p-8 z-20">
<i className="w-8 h-8 text-blue-400 mb-4" data-lucide="plane" strokeWidth="1.5"></i>
<h4 className="text-2xl font-medium tracking-tight text-white mb-2 uppercase">On The Go</h4>
<p className="text-base text-slate-400">Music &amp; Calls Anywhere.</p>
</div>
</div>

<div className="group relative h-80 rounded-3xl overflow-hidden bg-slate-900 border border-white/10 hover:border-cyan-500/30 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/90 z-10"></div>
<div className="absolute inset-0 bg-slate-800/50 group-hover:scale-110 transition-transform duration-700"></div>
<div className="absolute bottom-0 left-0 p-8 z-20">
<i className="w-8 h-8 text-cyan-400 mb-4" data-lucide="ear-off" strokeWidth="1.5"></i>
<h4 className="text-2xl font-medium tracking-tight text-white mb-2 uppercase">Zero Distractions</h4>
<p className="text-base text-slate-400">Pure Sound. Pure Focus.</p>
</div>
</div>
</div>

<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">CHOOSE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">VIBE</span></h2>
</div>
<div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">

<div className="w-full md:w-1/2 rounded-3xl border border-white/10 bg-white/5 p-10 flex flex-col items-center text-center hover:bg-white/[0.07] transition-colors">
<h3 className="text-2xl font-medium tracking-tight text-white mb-2">BASIC</h3>
<p className="text-base text-slate-400 mb-6">Great Sound. Great Value.</p>
<div className="flex items-start justify-center gap-1 mb-8">
<span className="text-2xl text-cyan-500 mt-2 font-medium">₹</span>
<span className="text-6xl font-semibold tracking-tight text-white">999</span>
</div>
<ul className="space-y-4 text-base text-slate-300 w-full mb-10">
<li className="flex items-center justify-center gap-3"><i className="w-5 h-5 text-cyan-500" data-lucide="check" strokeWidth="1.5"></i> Dolby Sound</li>
<li className="flex items-center justify-center gap-3"><i className="w-5 h-5 text-cyan-500" data-lucide="check" strokeWidth="1.5"></i> Deep Bass</li>
<li className="flex items-center justify-center gap-3"><i className="w-5 h-5 text-cyan-500" data-lucide="check" strokeWidth="1.5"></i> Up to 18H Battery</li>
<li className="flex items-center justify-center gap-3"><i className="w-5 h-5 text-cyan-500" data-lucide="check" strokeWidth="1.5"></i> Touch Control</li>
</ul>
<button className="w-full py-4 rounded-full border border-cyan-500/50 text-cyan-400 font-medium hover:bg-cyan-500/10 transition-colors text-base">
                        ORDER NOW
                    </button>
</div>

<div className="w-full md:w-1/2 rounded-3xl border border-cyan-500 bg-slate-900 p-10 flex flex-col items-center text-center relative shadow-[0_0_40px_rgba(6,182,212,0.15)] transform md:-translate-y-4">
<div className="absolute -top-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
                        Best Choice
                    </div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-2">PRO</h3>
<p className="text-base text-cyan-200 mb-6">Ultimate Experience.</p>
<div className="flex items-start justify-center gap-1 mb-8">
<span className="text-2xl text-cyan-500 mt-2 font-medium">₹</span>
<span className="text-6xl font-semibold tracking-tight text-white drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">1,499</span>
</div>
<ul className="space-y-4 text-base text-slate-200 w-full mb-10">
<li className="flex items-center justify-center gap-3"><i className="w-5 h-5 text-cyan-400" data-lucide="check" strokeWidth="2"></i> Dolby Sound</li>
<li className="flex items-center justify-center gap-3"><i className="w-5 h-5 text-cyan-400" data-lucide="check" strokeWidth="2"></i> Deep Bass</li>
<li className="flex items-center justify-center gap-3"><i className="w-5 h-5 text-cyan-400" data-lucide="check" strokeWidth="2"></i> Up to 24H Battery</li>
<li className="flex items-center justify-center gap-3"><i className="w-5 h-5 text-cyan-400" data-lucide="check" strokeWidth="2"></i> HD Calling</li>
<li className="flex items-center justify-center gap-3"><i className="w-5 h-5 text-cyan-400" data-lucide="check" strokeWidth="2"></i> Voice Assistant</li>
<li className="flex items-center justify-center gap-3"><i className="w-5 h-5 text-cyan-400" data-lucide="check" strokeWidth="2"></i> Game Mode (Low Latency)</li>
</ul>
<button className="w-full py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:from-blue-500 hover:to-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] text-base">
                        ORDER NOW
                    </button>
</div>
</div>

<div className="mt-16 flex items-center justify-center gap-4 text-base text-slate-400">
<span>AVAILABLE IN</span>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 cursor-pointer group">
<div className="w-6 h-6 rounded-full border-2 border-white bg-black group-hover:scale-110 transition-transform"></div>
<span className="text-sm">BLACK</span>
</div>
<div className="flex items-center gap-2 cursor-pointer group">
<div className="w-6 h-6 rounded-full bg-white group-hover:scale-110 transition-transform"></div>
<span className="text-sm text-slate-300 group-hover:text-white">WHITE</span>
</div>
<div className="flex items-center gap-2 cursor-pointer group">
<div className="w-6 h-6 rounded-full border border-blue-500/50 bg-blue-600 group-hover:scale-110 transition-transform"></div>
<span className="text-sm text-slate-300 group-hover:text-white">BLUE</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-5xl mx-auto">
<h2 className="text-2xl font-medium tracking-tight text-cyan-400 mb-10 uppercase text-center md:text-left">Specifications</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6 text-base md:text-lg">

<div className="space-y-6">
<div className="grid grid-cols-2 border-b border-white/5 pb-4">
<span className="text-slate-500">Model</span>
<span className="text-slate-200">AR Buds Pro</span>
</div>
<div className="grid grid-cols-2 border-b border-white/5 pb-4">
<span className="text-slate-500">Bluetooth Version</span>
<span className="text-slate-200">5.3</span>
</div>
<div className="grid grid-cols-2 border-b border-white/5 pb-4">
<span className="text-slate-500">Playback Time</span>
<span className="text-slate-200">6H (Earbuds) / 24H (With Case)</span>
</div>
<div className="grid grid-cols-2 border-b border-white/5 pb-4">
<span className="text-slate-500">Charging Time</span>
<span className="text-slate-200">1.5H</span>
</div>
<div className="grid grid-cols-2 pb-4">
<span className="text-slate-500">Battery Capacity</span>
<span className="text-slate-200">Earbuds: 35mAh<br/>Case: 300mAh</span>
</div>
</div>

<div className="space-y-6">
<div className="grid grid-cols-2 border-b border-white/5 pb-4">
<span className="text-slate-500">Driver Size</span>
<span className="text-slate-200">13mm Dynamic</span>
</div>
<div className="grid grid-cols-2 border-b border-white/5 pb-4">
<span className="text-slate-500">Calling</span>
<span className="text-slate-200">HD Microphone</span>
</div>
<div className="grid grid-cols-2 border-b border-white/5 pb-4">
<span className="text-slate-500">Water Resistance</span>
<span className="text-slate-200">IPX4</span>
</div>
<div className="grid grid-cols-2 border-b border-white/5 pb-4">
<span className="text-slate-500">Compatibility</span>
<span className="text-slate-200">Android, iOS, Windows</span>
</div>
<div className="grid grid-cols-2 pb-4">
<span className="text-slate-500">Charging Port</span>
<span className="text-slate-200">Type-C</span>
</div>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-base text-slate-500 uppercase tracking-[0.2em] mb-2">Sound That Inspires</p>
<p className="text-4xl font-light italic text-cyan-400 font-serif">Every Moment</p>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-20 pb-10 px-6">
<div className="max-w-5xl mx-auto text-center">

<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-20 text-sm text-slate-400">
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-slate-300" data-lucide="shield-check" strokeWidth="1.5"></i>
<span className="uppercase tracking-wider">1 Year<br/>Warranty</span>
</div>
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-slate-300" data-lucide="truck" strokeWidth="1.5"></i>
<span className="uppercase tracking-wider">Fast &amp; Safe<br/>Delivery</span>
</div>
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-slate-300" data-lucide="refresh-ccw" strokeWidth="1.5"></i>
<span className="uppercase tracking-wider">Easy<br/>Returns</span>
</div>
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-slate-300" data-lucide="lock" strokeWidth="1.5"></i>
<span className="uppercase tracking-wider">Secure<br/>Payment</span>
</div>
</div>

<div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5 rounded-3xl p-12 md:p-20 relative overflow-hidden group mb-12">
<div className="absolute inset-0 bg-blue-500/5 group-hover:bg-cyan-500/10 transition-colors duration-700"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="flex items-center gap-3 mb-6">
<i className="text-cyan-400 w-12 h-12 md:w-16 md:h-16" data-lucide="audio-lines" strokeWidth="1.5"></i>
<span className="text-4xl md:text-6xl font-semibold tracking-tight text-white">AR<span className="font-normal text-slate-400">Buds Pro</span></span>
</div>
<p className="text-lg md:text-xl text-slate-400 tracking-widest uppercase mb-12">Wireless Freedom. Unlimited Possibilities.</p>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-10">
                        UPGRADE YOUR SOUND TODAY!
                    </h2>
<button className="bg-white text-black px-10 py-4 rounded-full text-lg font-medium hover:bg-cyan-100 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                        Add to Cart - ₹1,499
                    </button>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5 text-base text-slate-500">
<div className="flex items-center gap-4">
<span>Follow Us</span>
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="youtube" strokeWidth="1.5"></i></a>
<span className="text-sm">/ARBudsPro</span>
</div>
<a className="hover:text-cyan-400 transition-colors" href="#">www.arbudspro.in</a>
</div>
</div>
</footer>


    </>
  );
}
