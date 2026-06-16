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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#9959eb]/15 to-transparent blur-[120px] rounded-full pointer-events-none z-0"></div>

<nav className="fixed w-full z-50 top-0 border-b border-zinc-200/80 bg-white/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-zinc-900 text-sm font-medium tracking-widest uppercase flex items-center gap-2" href="#">
<span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#9959eb] to-[#f18a5f]"></span>
                EXPRNC
            </a>
<div className="text-xs font-light text-zinc-500 tracking-wide">
                Bespoke Event Experiences
            </div>
</div>
</nav>

<header className="relative pt-48 pb-32 px-6 z-10">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 mb-8 text-xs font-medium text-zinc-600 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#f18a5f] animate-pulse"></span> Our Curated Services
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-zinc-900 tracking-tighter mb-6 leading-tight">
                Capture the <br/>
<span style={{background: 'linear-gradient(135deg, #9959eb 0%, #f18a5f 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Extraordinary.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 font-light max-w-2xl mx-auto leading-relaxed">
                Elevate your event with our signature collection of immersive photo moments, professional booths, and luxury backdrops.
            </p>
</div>
</header>

<main className="relative z-10 pb-32 space-y-32">

<section className="px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="order-2 lg:order-1">
<div className="flex items-center gap-3 mb-6 text-[#9959eb]">
<iconify-icon icon="solar:mirror-left-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium tracking-widest uppercase text-zinc-500">Signature Experience</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 tracking-tight mb-6">Mirror Cabin Experience</h2>
<p className="text-zinc-500 font-light text-base leading-relaxed mb-10">
                        Our signature walk-in mirrored experience designed to captivate guests and create a fully immersive photo moment. Step inside a world of infinite reflections.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">

<div>
<h3 className="text-sm font-medium text-zinc-900 mb-4 flex items-center gap-2 border-b border-zinc-200 pb-2">
<iconify-icon className="text-zinc-400" icon="solar:ruler-linear" width="18"></iconify-icon> Dimensions
                            </h3>
<ul className="text-sm text-zinc-600 font-light space-y-3">
<li className="flex items-start gap-2">
<span className="text-[#f18a5f] mt-0.5">•</span> 2m x 2m x 2m
                                </li>
<li className="flex items-start gap-2">
<span className="text-[#f18a5f] mt-0.5">•</span> 2.7m (L) x 2m (H) x 1m (D)
                                </li>
</ul>
</div>

<div>
<h3 className="text-sm font-medium text-zinc-900 mb-4 flex items-center gap-2 border-b border-zinc-200 pb-2">
<iconify-icon className="text-zinc-400" icon="solar:star-fall-linear" width="18"></iconify-icon> Features
                            </h3>
<ul className="text-sm text-zinc-600 font-light space-y-3">
<li className="flex items-start gap-2">
<span className="text-[#9959eb] mt-0.5">•</span> Full mirror interior &amp; exterior
                                </li>
<li className="flex items-start gap-2">
<span className="text-[#9959eb] mt-0.5">•</span> LED lighting &amp; custom branding
                                </li>
<li className="flex items-start gap-2">
<span className="text-[#9959eb] mt-0.5">•</span> Walk-in group experience
                                </li>
<li className="flex items-start gap-2">
<span className="text-[#9959eb] mt-0.5">•</span> High-end photo &amp; video
                                </li>
</ul>
</div>
</div>
<div className="p-5 rounded-xl bg-gradient-to-r from-zinc-50 to-transparent border-l-2 border-[#9959eb] inline-flex items-center gap-3">
<iconify-icon className="text-zinc-500" icon="solar:info-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-light text-zinc-600">Perfect for brand activations, weddings, and upscale events.</span>
</div>
</div>

<div className="order-1 lg:order-2 h-[500px] lg:h-[600px] rounded-3xl relative group perspective-1000">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-zinc-100 rounded-3xl border border-zinc-200 transform transition-transform duration-700 group-hover:scale-[1.02] shadow-sm"></div>

<div className="absolute inset-4 sm:inset-8 border border-zinc-200 rounded-2xl overflow-hidden bg-white flex items-center justify-center relative shadow-[inset_0_0_80px_rgba(153,89,235,0.05)]">
<div className="absolute w-[200%] h-[200%] bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] [transform:rotateX(60deg)_translateZ(0)] origin-bottom animate-[spin_60s_linear_infinite] opacity-60"></div>
<div className="relative z-10 w-48 h-64 border border-zinc-200/80 rounded-lg bg-white/80 backdrop-blur-md flex items-center justify-center shadow-xl transform transition-all duration-500 group-hover:rotate-y-12">
<div className="w-full h-full absolute inset-0 bg-gradient-to-t from-[#9959eb]/5 to-transparent opacity-80"></div>
<iconify-icon className="text-zinc-400 drop-shadow-sm" icon="solar:gallery-favourite-linear" width="48"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#f18a5f]/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="h-[500px] lg:h-[600px] rounded-3xl relative group">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-50 to-zinc-100 rounded-3xl border border-zinc-200 shadow-sm flex items-center justify-center overflow-hidden">

<div className="relative flex flex-col items-center">
<div className="w-64 h-80 bg-white border border-zinc-200 rounded-2xl flex flex-col items-center pt-8 pb-4 relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] transform transition-transform duration-500 group-hover:-translate-y-2">

<div className="w-32 h-32 rounded-full border-4 border-zinc-100 flex items-center justify-center relative mb-8">
<div className="absolute inset-0 rounded-full border-2 border-black/5 blur-[2px]"></div>
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-100 to-white border border-zinc-200 relative flex items-center justify-center shadow-inner">
<div className="w-3 h-3 rounded-full bg-[#f18a5f]/40 shadow-[0_0_10px_#f18a5f]"></div>
</div>
</div>

<div className="w-48 flex-1 bg-zinc-50 rounded-lg border border-zinc-200 flex flex-col justify-end p-4">
<div className="w-full h-1 bg-zinc-200 rounded-full mb-2"></div>
<div className="w-2/3 h-1 bg-[#9959eb]/40 rounded-full"></div>
</div>
</div>

<div className="w-2 h-32 bg-gradient-to-b from-zinc-300 to-zinc-100 relative z-0 -mt-4 shadow-sm"></div>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-3 mb-6 text-[#f18a5f]">
<iconify-icon icon="solar:camera-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium tracking-widest uppercase text-zinc-500">Professional Setup</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 tracking-tight mb-2">Luxe Booth</h2>
<p className="text-sm font-medium text-zinc-400 tracking-wide mb-6">Professional Photo Booth</p>
<p className="text-zinc-500 font-light text-base leading-relaxed mb-10">
                        A modern, high-quality photo booth powered by a Canon R100 camera for crisp, professional images. Designed to blend seamlessly into sophisticated environments.
                    </p>
<div className="space-y-4 mb-10">

<div className="group flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-zinc-200 hover:bg-zinc-50 transition-colors">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 border border-zinc-200 group-hover:border-[#9959eb]/40 transition-colors">
<iconify-icon className="text-zinc-700" icon="solar:focus-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-1">Studio-Quality</h4>
<p className="text-xs text-zinc-500 font-light">Crisp, professional photos powered by Canon.</p>
</div>
</div>

<div className="group flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-zinc-200 hover:bg-zinc-50 transition-colors">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 border border-zinc-200 group-hover:border-[#f18a5f]/40 transition-colors">
<iconify-icon className="text-zinc-700" icon="solar:tuning-square-2-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-1">Clean Setup</h4>
<p className="text-xs text-zinc-500 font-light">Minimalist design that enhances your venue.</p>
</div>
</div>

<div className="group flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-zinc-200 hover:bg-zinc-50 transition-colors">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 border border-zinc-200 group-hover:border-[#9959eb]/40 transition-colors">
<iconify-icon className="text-zinc-700" icon="solar:share-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-1">Instant Sharing</h4>
<p className="text-xs text-zinc-500 font-light">Quick digital access for guests to share instantly.</p>
</div>
</div>

<div className="group flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-zinc-200 hover:bg-zinc-50 transition-colors">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 border border-zinc-200 group-hover:border-[#f18a5f]/40 transition-colors">
<iconify-icon className="text-zinc-700" icon="solar:layers-minimalistic-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-1">Custom Branding</h4>
<p className="text-xs text-zinc-500 font-light">Personalized overlays, screens, and print designs.</p>
</div>
</div>
</div>
<div className="p-5 rounded-xl bg-gradient-to-r from-zinc-50 to-transparent border-l-2 border-[#f18a5f] inline-flex items-center gap-3">
<iconify-icon className="text-zinc-500" icon="solar:info-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-light text-zinc-600">Ideal for events that want a polished and elevated experience.</span>
</div>
</div>
</div>
</section>

<section className="px-6 relative">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#9959eb]/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="order-2 lg:order-1">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-zinc-900" icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium tracking-widest uppercase text-zinc-500">Luxury Backdrops</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 tracking-tight mb-6">5D Flower Wall Experience</h2>
<p className="text-zinc-500 font-light text-base leading-relaxed mb-10">
                        Luxury backdrop installations designed to enhance any event space and create a stunning photo moment. Hand-crafted with meticulous attention to detail.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
<div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm">
<iconify-icon className="text-2xl text-[#9959eb] mb-4 block" icon="solar:magic-stick-3-linear"></iconify-icon>
<h4 className="text-sm font-medium text-zinc-900 mb-2">Premium 5D</h4>
<p className="text-xs text-zinc-500 font-light leading-relaxed">Multi-dimensional, hyper-realistic floral designs that add depth to photos.</p>
</div>
<div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm">
<iconify-icon className="text-2xl text-[#f18a5f] mb-4 block" icon="solar:pallete-2-linear"></iconify-icon>
<h4 className="text-sm font-medium text-zinc-900 mb-2">Custom Colors</h4>
<p className="text-xs text-zinc-500 font-light leading-relaxed">Tailored palettes designed to perfectly match your event's specific theme.</p>
</div>
<div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm">
<iconify-icon className="text-2xl text-[#f18a5f] mb-4 block" icon="solar:camera-square-linear"></iconify-icon>
<h4 className="text-sm font-medium text-zinc-900 mb-2">Perfect Backdrop</h4>
<p className="text-xs text-zinc-500 font-light leading-relaxed">Engineered to absorb flash beautifully for flawless portraits.</p>
</div>
<div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm">
<iconify-icon className="text-2xl text-[#9959eb] mb-4 block" icon="solar:link-circle-linear"></iconify-icon>
<h4 className="text-sm font-medium text-zinc-900 mb-2">Perfect Pairing</h4>
<p className="text-xs text-zinc-500 font-light leading-relaxed">Pairs seamlessly with our Luxe Booth or Mirror Cabin experiences.</p>
</div>
</div>
</div>

<div className="order-1 lg:order-2 h-[500px] lg:h-[600px] rounded-3xl relative group p-4 sm:p-8">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-zinc-100 rounded-3xl border border-zinc-200 shadow-sm"></div>
<div className="w-full h-full rounded-2xl overflow-hidden relative border border-zinc-200 bg-white">

<div className="absolute inset-0 opacity-40 mix-blend-multiply" style="
                            background-image: 
                                radial-gradient(circle at 20% 30%, #9959eb 0%, transparent 40%),
                                radial-gradient(circle at 80% 40%, #f18a5f 0%, transparent 40%),
                                radial-gradient(circle at 50% 80%, #9959eb 0%, transparent 50%),
                                radial-gradient(circle at 10% 90%, #f18a5f 0%, transparent 30%);
                            filter: blur(40px);
                        "></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-40 h-40 border border-zinc-200 rounded-full flex items-center justify-center backdrop-blur-md bg-white/80 shadow-xl relative transform transition-transform duration-700 group-hover:scale-110">
<div className="absolute inset-0 rounded-full border border-black/5 animate-[spin_10s_linear_infinite]"></div>
<iconify-icon className="text-zinc-600" icon="solar:flower-linear" width="64"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-200 py-12 px-6 relative z-10 bg-white">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-zinc-900 text-sm font-medium tracking-widest uppercase">
                EXPRNC
            </div>
<p className="text-xs text-zinc-500 font-light">
                © 2024 Premium Event Services. All rights reserved.
            </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200 transition-colors" href="#">
<iconify-icon icon="solar:link-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
