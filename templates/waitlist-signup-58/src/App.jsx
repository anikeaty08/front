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
      

<nav className="fixed top-0 w-full z-50 pt-6 px-6 md:px-12 flex justify-between items-center pointer-events-none">
<div className="pointer-events-auto">
<span className="font-semibold text-lg tracking-tighter text-neutral-900 mix-blend-overlay">FLUID.</span>
</div>
<div className="pointer-events-auto hidden sm:block">
<a className="text-xs font-medium text-neutral-600 hover:text-neutral-900 transition-colors px-4 py-2 bg-white/30 backdrop-blur-sm rounded-full border border-white/20" href="#">Log in</a>
</div>
</nav>

<main className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col">

<section className="min-h-screen flex md:pt-0 -mx-6 md:-mx-12 md:px-12 overflow-hidden pt-24 pr-6 pb-12 pl-6 relative items-center">

<div className="spline-container absolute top-0 left-0 w-full h-full -z-10">
<iframe className="pointer-events-none opacity-90 mix-blend-multiply" frameborder="0" height="100%" src="https://my.spline.design/celestialflowabstractdigitalform-ObUlVgj70g2y4bbx5vBKSfxN/" width="100%"></iframe>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center w-full max-w-7xl mx-auto relative z-20">

<div className="lg:col-span-5 flex flex-col items-start gap-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/40 backdrop-blur-sm border border-white/50 shadow-sm">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-medium text-neutral-700 tracking-wide uppercase">Waitlist Open</span>
</div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-semibold text-neutral-900 tracking-tight font-space-grotesk drop-shadow-sm">Behåll Relationen<br/>Även efter besöket</h1>
<p className="md:text-xl leading-relaxed text-lg font-normal text-green-700 mix-blend-hard-light max-w-md">Keepy är nästa generations verktyg för kunduppföljning. För salonger och kliniker som vågar att anpassa sig.</p>

<div className="button-wrap relative z-10 rounded-full bg-transparent" style={{animation: 'fadeIn 1s ease-out 0.3s both'}}>
<button className="glass-button all-unset cursor-pointer pointer-events-auto z-30 outline-none focus:outline-none group rounded-full relative">
<span className="button-text relative block select-none font-medium text-neutral-800 tracking-tight px-8 py-4 flex items-center gap-2" style={{fontSize: '16px'}}>
                                Join the waitlist
                                <iconify-icon className="group-hover:translate-x-0.5 transition-transform duration-300" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</span>
<div className="button-shine"></div>
</button>
</div>
</div>

<div className="lg:col-span-7 w-full h-full flex justify-end items-center relative perspective-1000">

<div className="glass-card w-full aspect-[4/3] rounded-2xl p-4 md:p-6 flex gap-4 md:gap-6 transform rotate-y-3 rotate-x-2 transition-transform duration-700 hover:rotate-0 bg-white/20">

<div className="hidden md:flex flex-col w-16 h-full glass-card !bg-white/30 rounded-xl items-center py-6 gap-6 !border-white/20">
<div className="w-8 h-8 rounded-lg bg-white/40 shadow-inner"></div>
<div className="flex-1 w-full flex flex-col gap-4 items-center">
<div className="w-6 h-6 rounded bg-white/30"></div>
<div className="w-6 h-6 rounded bg-white/30"></div>
<div className="w-6 h-6 rounded bg-white/30"></div>
</div>
<div className="w-8 h-8 rounded-full bg-white/40"></div>
</div>

<div className="flex-1 h-full flex flex-col gap-6">

<div className="flex justify-between items-center">
<div className="flex gap-3">
<div className="h-8 w-24 bg-white/40 rounded-lg"></div>
<div className="h-8 w-16 bg-white/30 rounded-lg"></div>
</div>
<div className="h-8 w-8 rounded-full bg-white/40 border border-white/40"></div>
</div>

<div className="grid grid-cols-2 gap-4 h-full">
<div className="col-span-2 h-32 rounded-xl bg-gradient-to-br from-white/40 to-white/10 border border-white/30 p-4 relative overflow-hidden group">
<div className="absolute right-4 top-4 opacity-30 group-hover:opacity-50 transition-opacity">
<iconify-icon height="48" icon="solar:graph-up-linear" width="48"></iconify-icon>
</div>
<div className="h-full flex flex-col justify-end">
<div className="w-12 h-2 bg-neutral-900/10 rounded mb-2"></div>
<div className="w-32 h-6 bg-neutral-900/10 rounded"></div>
</div>
</div>
<div className="h-full rounded-xl bg-white/30 border border-white/20 p-4"></div>
<div className="h-full rounded-xl bg-white/30 border border-white/20 p-4"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-neutral-50 pointer-events-none z-10"></div>
</section>

<section className="md:py-32 border-neutral-200/50 border-t pt-24 pb-24 relative bg-neutral-50">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">

<div className="glass-card !bg-white/40 !backdrop-blur-md rounded-2xl p-8 flex flex-col gap-4 hover:bg-white/60 transition-colors duration-500 group">
<div className="w-12 h-12 rounded-xl bg-white/60 flex items-center justify-center border border-white/50 mb-2 shadow-sm group-hover:scale-105 transition-transform">
<iconify-icon className="text-neutral-800" height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 tracking-tight">Secure by Design</h3>
<p className="text-sm text-neutral-600 leading-relaxed">
                        Built on an infrastructure that prioritizes privacy. Your data remains liquid yet contained within encrypted boundaries.
                    </p>
</div>

<div className="glass-card !bg-white/40 !backdrop-blur-md rounded-2xl p-8 flex flex-col gap-4 hover:bg-white/60 transition-colors duration-500 group">
<div className="w-12 h-12 rounded-xl bg-white/60 flex items-center justify-center border border-white/50 mb-2 shadow-sm group-hover:scale-105 transition-transform">
<iconify-icon className="text-neutral-800" height="24" icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 tracking-tight">Instant Sync</h3>
<p className="text-sm text-neutral-600 leading-relaxed">
                        Real-time synchronization across all your devices. Changes propagate instantly like ripples in water.
                    </p>
</div>

<div className="glass-card !bg-white/40 !backdrop-blur-md rounded-2xl p-8 flex flex-col gap-4 hover:bg-white/60 transition-colors duration-500 group">
<div className="w-12 h-12 rounded-xl bg-white/60 flex items-center justify-center border border-white/50 mb-2 shadow-sm group-hover:scale-105 transition-transform">
<iconify-icon className="text-neutral-800" height="24" icon="solar:layers-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 tracking-tight">Modular Control</h3>
<p className="text-sm text-neutral-600 leading-relaxed">
                        Stack components to build your perfect workflow. A flexible system that adapts to your unique shape.
                    </p>
</div>
</div>
</section>

<section className="flex flex-col gap-8 overflow-hidden glass-card !bg-white/40 !border-white/40 text-center rounded-3xl mb-12 pt-24 pb-24 relative gap-x-8 gap-y-8 items-center justify-center shadow-lg shadow-neutral-100">

<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/0 to-white/60 pointer-events-none"></div>
<div className="z-10 flex flex-col gap-6 max-w-2xl pr-6 pl-6 relative gap-x-6 gap-y-6 items-center">
<h2 className="md:text-5xl text-4xl font-semibold text-neutral-900 tracking-tight">Redo för keepy?</h2>
<p className="text-lg text-neutral-500">Gå med i väntelistan för tidigt åtkomst när vi lanserar</p>
<div className="pt-4">

<div className="button-wrap relative z-10 rounded-full bg-transparent">
<button className="glass-button all-unset cursor-pointer pointer-events-auto outline-none focus:outline-none rounded-full relative z-30">
<span className="button-text relative block select-none font-medium text-neutral-800 tracking-tight px-10 py-4" style={{fontSize: '17px'}}>
                                Sign up for access
                            </span>
<div className="button-shine"></div>
</button>
</div>
</div>
</div>
</section>

<footer className="pb-12 flex justify-between items-center text-xs text-neutral-400 font-medium tracking-wide uppercase border-t border-neutral-200/50 pt-8 bg-neutral-50">
<p>© 2024 Fluid Inc.</p>
<div className="flex gap-6">
<a className="hover:text-neutral-600 transition-colors" href="#">Privacy</a>
<a className="hover:text-neutral-600 transition-colors" href="#">Terms</a>
<a className="hover:text-neutral-600 transition-colors" href="#">Twitter</a>
</div>
</footer>
</main>

    </>
  );
}
