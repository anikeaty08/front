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



        // Initialize Lucide Icons
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="absolute top-0 w-full z-50">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex items-center justify-between h-20">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<span className="font-semibold text-lg tracking-tight">Nexus</span>
</div>
<nav className="hidden md:flex gap-8">
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#">Products</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#">Solutions</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#">Developers</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#">Pricing</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#">Sign in</a>
<a className="text-sm font-medium bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-full px-4 py-2 transition-all" href="#">Get Started</a>
</div>
</div>
</div>
</header>

<main className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-600/20 blur-[120px] mix-blend-screen pointer-events-none"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[120px] mix-blend-screen pointer-events-none"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">

<div className="lg:col-span-6 flex flex-col items-start text-left">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
<span className="text-xs font-medium text-indigo-300">Nexus AI Engine 2.0 is live</span>
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>

<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
                        AI-Powered <br className="hidden sm:block"/>
                        Platforms for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Events,</span> <br className="hidden sm:block"/>
                        Bookings &amp; Smart Spaces
                    </h1>

<p className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed">
                        Build, scale, and manage digital experiences with advanced cloud and AI solutions. Unify your infrastructure in one intelligent workspace.
                    </p>

<div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex justify-center items-center gap-2 bg-white text-[#0B0B0F] hover:bg-gray-100 font-medium text-base rounded-full px-8 py-3.5 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]" href="#">
                            Book a Demo
                            <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="inline-flex justify-center items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-base rounded-full px-8 py-3.5 transition-all backdrop-blur-sm" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="terminal" strokeWidth="1.5"></i>
                            Explore Products
                        </a>
</div>

<div className="mt-12 flex items-center gap-6 opacity-60 grayscale">
<p className="text-xs font-medium text-gray-400 uppercase tracking-widest">Backed by</p>
<div className="flex gap-6">

<div className="flex items-center gap-1.5"><i className="w-5 h-5" data-lucide="hexagon" strokeWidth="1.5"></i><span className="text-sm font-semibold">Vortex</span></div>
<div className="flex items-center gap-1.5"><i className="w-5 h-5" data-lucide="triangle" strokeWidth="1.5"></i><span className="text-sm font-semibold">Prism</span></div>
<div className="flex items-center gap-1.5 hidden sm:flex"><i className="w-5 h-5" data-lucide="circle-dashed" strokeWidth="1.5"></i><span className="text-sm font-semibold">Aura</span></div>
</div>
</div>
</div>

<div className="lg:col-span-6 relative w-full mt-10 lg:mt-0 perspective-1000">

<div className="relative z-10 w-full rounded-2xl bg-[#12121A]/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] shadow-indigo-500/10 overflow-hidden flex flex-col transform lg:rotate-y-[-5deg] transition-transform duration-500 hover:rotate-y-0">

<div className="h-12 border-b border-white/5 bg-white/[0.02] flex items-center px-4 justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#FF5F56]/80"></div>
<div className="w-3 h-3 rounded-full bg-[#FFBD2E]/80"></div>
<div className="w-3 h-3 rounded-full bg-[#27C93F]/80"></div>
</div>
<div className="flex gap-4">
<div className="w-32 h-6 rounded-md bg-white/5 flex items-center px-2 border border-white/5">
<i className="w-3 h-3 text-gray-500 mr-2" data-lucide="search" strokeWidth="1.5"></i>
<div className="h-1.5 w-12 bg-white/20 rounded-full"></div>
</div>
</div>
</div>

<div className="flex flex-1 p-4 gap-4 h-[400px] sm:h-[480px]">

<div className="w-12 sm:w-48 hidden sm:flex flex-col gap-2 border-r border-white/5 pr-4">
<div className="h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center px-2 gap-2 border border-indigo-500/20">
<i className="w-4 h-4" data-lucide="layout-dashboard" strokeWidth="1.5"></i>
<div className="h-2 w-16 bg-indigo-400/50 rounded-full hidden sm:block"></div>
</div>
<div className="h-8 rounded-lg hover:bg-white/5 flex items-center px-2 gap-2 text-gray-500 transition-colors">
<i className="w-4 h-4" data-lucide="users" strokeWidth="1.5"></i>
<div className="h-2 w-12 bg-white/20 rounded-full hidden sm:block"></div>
</div>
<div className="h-8 rounded-lg hover:bg-white/5 flex items-center px-2 gap-2 text-gray-500 transition-colors">
<i className="w-4 h-4" data-lucide="calendar" strokeWidth="1.5"></i>
<div className="h-2 w-14 bg-white/20 rounded-full hidden sm:block"></div>
</div>
<div className="mt-auto h-8 rounded-lg hover:bg-white/5 flex items-center px-2 gap-2 text-gray-500 transition-colors">
<i className="w-4 h-4" data-lucide="settings" strokeWidth="1.5"></i>
<div className="h-2 w-10 bg-white/20 rounded-full hidden sm:block"></div>
</div>
</div>

<div className="flex-1 flex flex-col gap-4">

<div className="grid grid-cols-2 gap-4">
<div className="bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col justify-center">
<div className="flex items-center justify-between mb-3">
<div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
<i className="w-4 h-4 text-blue-400" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<span className="text-xs text-green-400 font-medium flex items-center gap-1"><i className="w-3 h-3" data-lucide="trending-up" strokeWidth="1.5"></i> 14%</span>
</div>
<div className="text-xs text-gray-400 mb-1">Active Sessions</div>
<div className="text-xl font-semibold text-white tracking-tight">24,592</div>
</div>
<div className="bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col justify-center relative overflow-hidden">

<div className="absolute right-0 top-0 w-24 h-24 bg-purple-500/10 blur-xl rounded-full"></div>
<div className="flex items-center justify-between mb-3 relative z-10">
<div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
<i className="w-4 h-4 text-purple-400" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<span className="text-xs text-gray-500 font-medium">Real-time</span>
</div>
<div className="text-xs text-gray-400 mb-1 relative z-10">AI Predictions</div>
<div className="text-xl font-semibold text-white tracking-tight relative z-10">99.8% <span className="text-xs text-gray-500 font-normal">Acc</span></div>
</div>
</div>

<div className="flex-1 bg-white/5 border border-white/5 rounded-xl p-4 relative overflow-hidden flex flex-col">
<div className="flex justify-between items-center mb-6">
<div className="h-3 w-24 bg-white/20 rounded-full"></div>
<div className="flex gap-2">
<div className="h-2 w-8 bg-indigo-500 rounded-full"></div>
<div className="h-2 w-8 bg-white/20 rounded-full"></div>
</div>
</div>

<div className="flex-1 w-full relative flex items-end justify-between gap-2 px-2 pb-2">

<div className="absolute inset-0 flex flex-col justify-between border-b border-white/5 pb-2">
<div className="w-full border-t border-white/5"></div>
<div className="w-full border-t border-white/5"></div>
<div className="w-full border-t border-white/5"></div>
</div>

<div className="w-full bg-white/10 rounded-t-sm h-[30%] relative z-10 hover:bg-white/20 transition-colors"></div>
<div className="w-full bg-indigo-500/50 rounded-t-sm h-[50%] relative z-10 hover:bg-indigo-500/70 transition-colors"></div>
<div className="w-full bg-white/10 rounded-t-sm h-[40%] relative z-10 hover:bg-white/20 transition-colors"></div>
<div className="w-full bg-indigo-500/80 rounded-t-sm h-[70%] relative z-10 hover:bg-indigo-500 transition-colors shadow-[0_0_15px_rgba(99,102,241,0.4)]"></div>
<div className="w-full bg-white/10 rounded-t-sm h-[45%] relative z-10 hover:bg-white/20 transition-colors"></div>
<div className="w-full bg-white/10 rounded-t-sm h-[60%] relative z-10 hover:bg-white/20 transition-colors hidden sm:block"></div>
<div className="w-full bg-indigo-500/60 rounded-t-sm h-[85%] relative z-10 hover:bg-indigo-500/80 transition-colors hidden sm:block"></div>
</div>
</div>
</div>
</div>
</div>


<div className="absolute -right-6 -top-6 sm:-right-12 sm:top-12 z-20 w-64 rounded-xl bg-[#161622]/80 backdrop-blur-xl border border-white/10 p-4 shadow-2xl shadow-black/50 transform translate-y-4 hover:translate-y-2 transition-transform duration-300 hidden sm:block animate-pulse" style={{animationDuration: '4s'}}>
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-[#161622]"></span>
</div>
<span className="text-xs font-medium text-white">Smart Space Sync</span>
</div>
<i className="w-4 h-4 text-gray-500" data-lucide="wifi" strokeWidth="1.5"></i>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs">
<span className="text-gray-400">Device load</span>
<span className="text-white font-medium">Normal</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="w-[35%] h-full bg-green-500 rounded-full"></div>
</div>
</div>
</div>

<div className="absolute -left-4 -bottom-6 sm:-left-16 sm:bottom-16 z-20 w-56 rounded-xl bg-[#161622]/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl shadow-black/50 transform translate-y-0 hover:-translate-y-2 transition-transform duration-300">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center p-[1px]">
<div className="w-full h-full bg-[#161622] rounded-full flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="bot" strokeWidth="1.5"></i>
</div>
</div>
<div>
<div className="text-sm font-medium text-white leading-none">AI Assistant</div>
<div className="text-xs text-indigo-400 mt-1">Optimizing workflow</div>
</div>
</div>
<div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 border border-white/5">
<div className="flex space-x-1">
<div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
<div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
<div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
</div>
<span className="text-xs text-gray-400">Analyzing data...</span>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
