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
      

<div className="fixed inset-0 -z-10 h-full w-full bg-[#030712]">
<div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>
</div>

<nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-gray-950/80 backdrop-blur-xl">
<div className="flex h-16 max-w-7xl mx-auto px-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
<div className="w-2 h-2 bg-gray-950 rounded-full"></div>
</div>
<span className="cursor-pointer font-semibold text-white tracking-tight" onclick="window.location.href='/home'" role="button">RHO Strategies</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="/home">Home</a>
<a className="hover:text-white transition-colors" href="/about">About</a>
<a className="hover:text-white transition-colors" href="/solutions">Solutions</a>
<a className="hover:text-white transition-colors" href="/get-started">Get Started</a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="flex flex-col items-start text-left z-10">
<div className="inline-flex gap-2 text-xs font-medium text-blue-300 bg-blue-500/10 border-blue-500/20 border rounded-full mb-8 py-1 px-3 items-center">
                        Small Business Growth Engine
                        <span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
</div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-5xl font-semibold text-white tracking-tight mb-6 text-left w-full" style={{textWrap: 'balance'}}>Turn local traffic into <span className="text-gradient-blue">revenue on autopilot.</span></h1>
<p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl">
                        The all-in-one growth infrastructure for service businesses. We combine high-performance web design, automated reviews, and search dominance into a single monthly service.
                    </p>
<div className="flex flex-col sm:flex-row items-start gap-4 w-full">
<button className="sm:w-auto hover:bg-blue-500 transition-all flex font-medium text-white bg-blue-600 w-full rounded-lg py-3.5 px-8 shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)] gap-2 items-center justify-center">
                            Start Scaling
                            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="sm:w-auto hover:bg-white/5 hover:text-white transition-all flex font-medium text-gray-400 bg-transparent border border-white/10 w-full rounded-lg py-3.5 px-8 gap-2 items-center justify-center">
                            View Demo
                        </button>
</div>
<div className="mt-10 flex items-center gap-4 text-sm text-gray-500 font-medium">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-950 flex items-center justify-center text-xs">JD</div>
<div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-950 flex items-center justify-center text-xs">AS</div>
<div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-gray-950 flex items-center justify-center text-xs">MR</div>
</div>
<p>Trusted by 500+ local businesses</p>
</div>
</div>

<div className="relative w-full perspective-1000 group">

<div className="absolute -inset-4 bg-blue-500/20 blur-2xl rounded-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-700"></div>

<div className="relative bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-700 hover:scale-[1.01] hover:-rotate-1">

<div className="h-10 bg-gray-900 border-b border-gray-800 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="flex text-[10px] text-gray-500 font-mono bg-gray-800 w-1/3 h-5 rounded-md mx-auto items-center justify-center">app.rhostrategies.com</div>
</div>

<div className="p-6 bg-gray-950/90 grid grid-cols-2 gap-4">

<div className="col-span-1 bg-gray-900/50 border border-gray-800 p-4 rounded-lg">
<div className="uppercase text-[10px] text-gray-500 tracking-wider mb-1">New Visitors</div>
<div className="text-xl text-white font-semibold">1,284</div>
<div className="mt-1 text-[10px] text-emerald-400 flex items-center gap-1">
<svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> +12.5%
                                </div>
</div>

<div className="col-span-1 bg-gray-900/50 border border-gray-800 p-4 rounded-lg">
<div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Google Rating</div>
<div className="text-xl text-white font-semibold flex items-center gap-1">
                                    4.9 <span className="text-yellow-500">★</span>
</div>
<div className="mt-1 text-[10px] text-gray-500">842 reviews</div>
</div>

<div className="col-span-2 bg-gray-900/50 border border-gray-800 p-5 rounded-lg h-48 relative flex flex-col">
<div className="flex justify-between items-center mb-4">
<h3 className="text-xs font-medium text-gray-300">Revenue Attribution</h3>
<div className="flex gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
<span className="text-[10px] text-gray-500">Organic</span>
</div>
</div>
<div className="flex-1 w-full flex items-end gap-2 px-1">

<div className="w-full bg-blue-500/20 rounded-t-sm h-[30%] relative group"><div className="absolute bottom-0 w-full bg-blue-500/40 h-[60%] rounded-t-sm"></div></div>
<div className="w-full bg-blue-500/20 rounded-t-sm h-[45%] relative group"><div className="absolute bottom-0 w-full bg-blue-500/40 h-[50%] rounded-t-sm"></div></div>
<div className="w-full bg-blue-500/20 rounded-t-sm h-[40%] relative group"><div className="absolute bottom-0 w-full bg-blue-500/40 h-[70%] rounded-t-sm"></div></div>
<div className="w-full bg-blue-500/20 rounded-t-sm h-[60%] relative group"><div className="absolute bottom-0 w-full bg-blue-500/40 h-[65%] rounded-t-sm"></div></div>
<div className="w-full bg-blue-500/20 rounded-t-sm h-[55%] relative group"><div className="absolute bottom-0 w-full bg-blue-500/40 h-[80%] rounded-t-sm"></div></div>
<div className="w-full bg-blue-500/20 rounded-t-sm h-[80%] relative group"><div className="absolute bottom-0 w-full bg-blue-500/40 h-[50%] rounded-t-sm"></div></div>
<div className="w-full bg-blue-500/20 rounded-t-sm h-[75%] relative group"><div className="absolute bottom-0 w-full bg-blue-500/40 h-[90%] rounded-t-sm"></div></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="bg-gray-950 border-gray-900 border-t pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl text-white font-semibold tracking-tight mb-4">The Complete Growth Stack</h2>
<p className="text-gray-400 text-lg max-w-xl">We replaced the fragmented agency model with a unified software-enabled service.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 gap-6">

<div className="md:col-span-4 glass-panel rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<svg className="lucide lucide-layout-template w-48 h-48" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>
</div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
<svg className="lucide lucide-layout-template w-5 h-5" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>
</div>
<h3 className="text-xl text-white font-medium mb-2">High-Velocity Websites</h3>
<p className="text-gray-400 leading-relaxed max-w-md">Our sites aren't just brochures. They are conversion engines built on Next.js, optimized for speed, and designed to capture leads instantly.</p>
</div>
<div className="mt-8 bg-gray-900 border border-gray-800 rounded-lg p-4 flex gap-4 items-center">
<div className="flex-1 space-y-2">
<div className="h-2 bg-gray-800 rounded w-3/4"></div>
<div className="h-2 bg-gray-800 rounded w-1/2"></div>
</div>
<div className="px-4 py-2 bg-blue-600 rounded text-xs text-white font-medium">Get Quote</div>
</div>
</div>
</div>

<div className="md:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-900/10 to-transparent"></div>
<div className="w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-6 text-yellow-500">
<svg className="lucide lucide-star w-5 h-5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<h3 className="text-xl text-white font-medium mb-2">Review Automation</h3>
<p className="text-gray-400 text-sm mb-8">Automatically request reviews via SMS &amp; Email after service completion.</p>
<div className="space-y-3 relative">
<div className="bg-gray-800/80 backdrop-blur border border-gray-700 p-3 rounded-lg flex items-start gap-3 shadow-lg transform translate-y-2 scale-95 opacity-50">
<div className="w-6 h-6 rounded-full bg-gray-600"></div>
<div className="flex-1">
<div className="h-2 bg-gray-600 rounded w-20 mb-1"></div>
<div className="h-2 bg-gray-700 rounded w-full"></div>
</div>
</div>
<div className="bg-gray-900/90 backdrop-blur border border-gray-700 p-3 rounded-lg flex items-start gap-3 shadow-xl z-10 relative">
<div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-[10px] font-bold">JD</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<span className="text-[10px] text-white font-medium">John Doe</span>
<span className="text-[8px] text-yellow-500">★★★★★</span>
</div>
<p className="text-[10px] text-gray-400">Excellent service, highly recommend!</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-900 border-t border-gray-800">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl text-white font-semibold tracking-tight mb-16">How It Works</h2>
<div className="relative">
<div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-800 -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
<div className="bg-gray-950 border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition-colors">
<div className="w-12 h-12 bg-gray-900 rounded-full border border-gray-800 flex items-center justify-center mb-6 text-xl font-bold text-gray-500 shadow-lg">1</div>
<h3 className="text-white font-medium text-lg mb-2">Onboarding</h3>
<p className="text-gray-400 text-sm leading-relaxed">We sync with your CRM and verify your Google Business Profile details.</p>
</div>
<div className="bg-gray-950 border border-blue-500/30 p-6 rounded-xl shadow-[0_0_30px_-10px_rgba(37,99,235,0.2)]">
<div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-xl font-bold text-white shadow-lg shadow-blue-900/50">2</div>
<h3 className="text-white font-medium text-lg mb-2">Deployment</h3>
<p className="text-gray-300 text-sm leading-relaxed">Our team builds your high-speed site and configures the review automation.</p>
</div>
<div className="bg-gray-950 border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition-colors">
<div className="w-12 h-12 bg-gray-900 rounded-full border border-gray-800 flex items-center justify-center mb-6 text-xl font-bold text-gray-500 shadow-lg">3</div>
<h3 className="text-white font-medium text-lg mb-2">Growth</h3>
<p className="text-gray-400 text-sm leading-relaxed">Launch day. You start receiving leads and reviews automatically.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-gray-950 border-t border-gray-900 py-12">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
<div className="w-2 h-2 bg-gray-950 rounded-full"></div>
</div>
<span className="font-semibold text-white">RHO Strategies</span>
</div>
<p className="text-gray-500 text-sm max-w-xs">Building the digital infrastructure for the next generation of service businesses.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Product</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-blue-400" href="#">Websites</a></li>
<li><a className="hover:text-blue-400" href="#">Reputation</a></li>
<li><a className="hover:text-blue-400" href="#">SEO</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-blue-400" href="#">About</a></li>
<li><a className="hover:text-blue-400" href="#">Contact</a></li>
<li><a className="hover:text-blue-400" href="#">Privacy</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-900 text-center md:text-left text-xs text-gray-600">
            © 2024 RHO Strategies Inc. All rights reserved.
        </div>
</footer>


    </>
  );
}
