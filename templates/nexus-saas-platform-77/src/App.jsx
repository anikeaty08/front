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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-violet-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-neutral-100 flex items-center justify-center">
<span className="text-black font-semibold text-xs tracking-tighter">NX</span>
</div>
<span className="text-neutral-200 font-medium text-sm tracking-tight">Nexus</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-500">
<a className="hover:text-neutral-200 transition-colors" href="#features">Features</a>
<a className="hover:text-neutral-200 transition-colors" href="#integration">Integration</a>
<a className="hover:text-neutral-200 transition-colors" href="#pricing">Membership</a>
</div>
<a className="text-xs font-medium text-white bg-neutral-800 hover:bg-neutral-700 px-3 py-1.5 rounded transition-all border border-white/10" href="https://afflat3e3.com/trk/lnk/4AAEB0A8-BC47-4235-8B75-66313C7CFDA0/?o=24723&amp;c=918271&amp;a=285559&amp;k=17A515C7A6AB5C30115D76B60AE02122&amp;l=25811">
                Access Now
            </a>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 px-6">
<div className="max-w-4xl mx-auto text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neutral-300 hover:bg-white/10 transition-colors cursor-default">
<span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
<span>New spots available for early access</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white leading-[1.1]">
                Accelerate your <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-indigo-400 animate-gradient">digital potential.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed">
                The all-in-one ecosystem designed to scale your performance. Unlock premium insights and tools reserved for top-tier members.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<a className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white bg-white rounded-full overflow-hidden transition-all hover:scale-105" href="https://afflat3e3.com/trk/lnk/4AAEB0A8-BC47-4235-8B75-66313C7CFDA0/?o=24723&amp;c=918271&amp;a=285559&amp;k=17A515C7A6AB5C30115D76B60AE02122&amp;l=25811">
<span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-indigo-600 rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
<span className="relative text-black group-hover:text-black flex items-center gap-2">
                        Learn More 
                        <iconify-icon height="16" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</span>
</a>
<button className="text-sm font-medium text-neutral-400 hover:text-white transition-colors px-6 py-3 flex items-center gap-2">
<iconify-icon height="18" icon="lucide:play-circle" strokeWidth="1.5" width="18"></iconify-icon>
                    View Demo
                </button>
</div>
</div>

<div className="mt-20 relative max-w-5xl mx-auto">
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-20 h-full w-full"></div>
<div className="glass-panel rounded-xl border border-white/10 p-2 overflow-hidden shadow-2xl shadow-indigo-900/20 transform md:rotate-x-12 perspective-1000 transition-transform duration-700 hover:scale-[1.01]">
<div className="bg-[#0A0A0A] rounded-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-6 h-[400px]">

<div className="hidden md:flex flex-col gap-4 border-r border-white/5 pr-6">
<div className="h-8 w-24 bg-white/10 rounded animate-pulse"></div>
<div className="space-y-2 mt-4">
<div className="h-4 w-full bg-white/5 rounded"></div>
<div className="h-4 w-3/4 bg-white/5 rounded"></div>
<div className="h-4 w-5/6 bg-white/5 rounded"></div>
</div>
<div className="mt-auto space-y-2">
<div className="flex items-center gap-3 p-2 bg-white/5 rounded border border-white/5">
<div className="h-8 w-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<iconify-icon icon="lucide:zap" width="16"></iconify-icon>
</div>
<div className="flex-1">
<div className="h-2 w-16 bg-white/10 rounded mb-1"></div>
<div className="h-2 w-10 bg-white/5 rounded"></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 flex flex-col gap-6">
<div className="flex items-center justify-between border-b border-white/5 pb-4">
<div className="h-6 w-32 bg-white/10 rounded"></div>
<div className="flex gap-2">
<div className="h-6 w-6 rounded-full bg-white/5"></div>
<div className="h-6 w-6 rounded-full bg-white/5"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-gradient-to-br from-white/5 to-transparent p-4 rounded border border-white/5">
<div className="text-xs text-neutral-500 mb-2">Total Revenue</div>
<div className="text-2xl text-white font-medium tracking-tight">$124,592</div>
<div className="text-[10px] text-green-400 mt-1 flex items-center gap-1">
<iconify-icon icon="lucide:trending-up" width="10"></iconify-icon>
                                    +12.5%
                                </div>
</div>
<div className="bg-gradient-to-br from-white/5 to-transparent p-4 rounded border border-white/5">
<div className="text-xs text-neutral-500 mb-2">Active Users</div>
<div className="text-2xl text-white font-medium tracking-tight">8,420</div>
<div className="text-[10px] text-indigo-400 mt-1 flex items-center gap-1">
<iconify-icon icon="lucide:users" width="10"></iconify-icon>
                                    +34.2%
                                </div>
</div>
</div>
<div className="flex-1 bg-white/5 rounded border border-white/5 relative overflow-hidden">

<svg className="absolute bottom-0 left-0 w-full h-24 text-indigo-500/20 fill-current" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 V 50 Q 25 30 50 70 T 100 40 V 100 Z"></path>
</svg>
<svg className="absolute bottom-0 left-0 w-full h-24 text-indigo-500 stroke-current fill-none" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 50 Q 25 30 50 70 T 100 40" strokeWidth="0.5"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-white/5 bg-black/20 backdrop-blur-sm relative z-10">
<div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
<p className="text-xs text-neutral-500 font-medium whitespace-nowrap">TRUSTED BY INNOVATORS WORLDWIDE</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-white font-semibold tracking-tight text-lg">
<iconify-icon className="text-indigo-500" icon="lucide:hexagon"></iconify-icon> Acme
                </div>
<div className="flex items-center gap-2 text-white font-semibold tracking-tight text-lg">
<iconify-icon className="text-indigo-500" icon="lucide:triangle"></iconify-icon> Vertex
                </div>
<div className="flex items-center gap-2 text-white font-semibold tracking-tight text-lg">
<iconify-icon className="text-indigo-500" icon="lucide:circle"></iconify-icon> Sphere
                </div>
<div className="flex items-center gap-2 text-white font-semibold tracking-tight text-lg">
<iconify-icon className="text-indigo-500" icon="lucide:box"></iconify-icon> Cube
                </div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 max-w-6xl mx-auto" id="features">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-4">Precision engineered for scale.</h2>
<p className="text-neutral-500 text-lg max-w-xl">Everything you need to build faster, grow larger, and manage easier.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-200 mb-2 tracking-tight">Instant Analytics</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                    Real-time data processing allows you to make decisions in milliseconds, not days.
                </p>
</div>

<div className="group p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-200 mb-2 tracking-tight">Enterprise Security</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                    Bank-grade encryption standards ensuring your data remains yours, always.
                </p>
</div>

<div className="group p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:globe" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-200 mb-2 tracking-tight">Global Infrastructure</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                    Deployed on the edge. Low latency access for users anywhere in the world.
                </p>
</div>

<div className="group p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:smartphone" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-200 mb-2 tracking-tight">Mobile First</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                    Optimized for every device. Your dashboard looks perfect on phones and tablets.
                </p>
</div>

<div className="md:col-span-2 group p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative overflow-hidden">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:layers" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-200 mb-2 tracking-tight">Seamless Integration</h3>
<p className="text-sm text-neutral-500 leading-relaxed max-w-md">
                        Connect with your favorite tools in one click. Our API is built for developers by developers.
                    </p>
</div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 opacity-20">
<iconify-icon height="200" icon="lucide:command" strokeWidth="0.5" width="200"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative z-10 bg-[#080808]">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="mb-8">
<iconify-icon className="text-indigo-500 opacity-50" icon="lucide:quote" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-8 leading-relaxed">
                "This platform completely transformed how we handle our workflow. The ROI was immediate, and the interface is simply beautiful."
            </h3>
<div className="flex items-center justify-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-xs text-white font-bold">
                    JD
                </div>
<div className="text-left">
<div className="text-sm font-medium text-white">James Doe</div>
<div className="text-xs text-neutral-500">Product Lead @ TechFlow</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 px-6 overflow-hidden">
<div className="absolute inset-0 bg-indigo-900/10 z-0"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-0"></div>
<div className="max-w-3xl mx-auto text-center relative z-10 space-y-8">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white">
                Ready to get started?
            </h2>
<p className="text-neutral-400 text-lg">
                Join thousands of others who are already optimizing their growth.
            </p>
<div className="pt-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/25 transition-all hover:scale-105" href="https://afflat3e3.com/trk/lnk/4AAEB0A8-BC47-4235-8B75-66313C7CFDA0/?o=24723&amp;c=918271&amp;a=285559&amp;k=17A515C7A6AB5C30115D76B60AE02122&amp;l=25811">
                    Start Your Journey
                    <iconify-icon className="ml-2" height="16" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020202] pt-16 pb-8 px-6 text-sm relative z-10">
<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 rounded bg-neutral-100 flex items-center justify-center">
<span className="text-black font-bold text-[10px] tracking-tighter">NX</span>
</div>
<span className="text-neutral-200 font-medium text-xs tracking-tight">Nexus</span>
</div>
<p className="text-neutral-500 text-xs mt-4">
                    Building the future of digital efficiency.
                </p>
</div>
<div>
<h4 className="text-neutral-200 font-medium mb-4">Product</h4>
<ul className="space-y-2 text-neutral-500">
<li><a className="hover:text-neutral-300 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-neutral-200 font-medium mb-4">Company</h4>
<ul className="space-y-2 text-neutral-500">
<li><a className="hover:text-neutral-300 transition-colors" href="#">About</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-neutral-200 font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-neutral-500">
<li><a className="hover:text-neutral-300 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-8 gap-4 text-xs text-neutral-600">
<div>© 2024 Nexus Platform. All rights reserved.</div>
<div className="flex gap-4">
<a className="hover:text-neutral-400 transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="hover:text-neutral-400 transition-colors" href="#"><iconify-icon icon="lucide:github" width="16"></iconify-icon></a>
<a className="hover:text-neutral-400 transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="16"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
