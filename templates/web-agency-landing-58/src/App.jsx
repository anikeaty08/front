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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

<a className="flex items-center gap-3 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-900/20">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>
<span className="text-white font-medium text-lg tracking-tight group-hover:opacity-80 transition">Pbjams</span>
</a>

<div className="hidden md:flex items-center gap-10">
<a className="text-sm font-medium text-gray-400 hover:text-white transition" href="#">Jams</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition" href="#">Ingredients</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition" href="#">Taste Tests</a>
</div>

<div className="hidden sm:flex items-center">
<a className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition text-sm text-gray-200" href="#pricing">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
                    Accepting New Projects
                </a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-900/20 rounded-[100%] blur-[120px] -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="relative z-10">
<div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/5 px-3 py-1 mb-8">
<span className="text-xs font-medium text-purple-300 tracking-wide">AGENCY // JAM &amp; WEB EXPERTS</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] tracking-tight mb-8">
                    Custom <br/>
<span className="text-gradient">Web Solutions</span> <br/>
                    That Stick.
                </h1>
<p className="text-lg text-gray-400 leading-relaxed max-w-lg mb-10 font-normal">
                    We specialize in pixel-perfect Figma to Elementor conversions, WooCommerce scaling, and technical SEO that dominates search rankings like sticky jam.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
<a className="group flex items-center gap-2 bg-white text-black px-7 py-3.5 rounded-full font-medium text-base hover:bg-gray-200 transition" href="#pricing">
                        Start Project
                        <i className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right"></i>
</a>
<a className="text-base text-gray-400 hover:text-white font-medium transition py-3.5" href="#">
                        View Case Studies
                    </a>
</div>
</div>

<div className="relative h-[600px] w-full flex items-center justify-center lg:justify-end perspective-[2000px]">

<div className="absolute top-10 right-0 lg:right-10 w-64 glass-panel rounded-xl p-5 transform rotate-6 translate-x-10 translate-y-10 z-0 opacity-60 scale-90">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center text-purple-400">
<i className="w-4 h-4" data-lucide="bar-chart-2"></i>
</div>
</div>
<div className="text-3xl font-semibold text-white mb-1">+420%</div>
<div className="text-sm text-gray-400">Organic Traffic (SEO)</div>

<div className="flex items-end gap-2 mt-6 h-16">
<div className="w-1/4 bg-purple-500/20 h-1/2 rounded-t"></div>
<div className="w-1/4 bg-purple-500/40 h-3/4 rounded-t"></div>
<div className="w-1/4 bg-purple-500/60 h-2/3 rounded-t"></div>
<div className="w-1/4 bg-purple-500 h-full rounded-t shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
</div>
</div>

<div className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-xl p-6 shadow-2xl code-glow transform -rotate-2 z-10 transition hover:-rotate-1 duration-500">

<div className="flex items-center gap-2 mb-6">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
<div className="ml-4 text-xs text-gray-600 font-mono">wp-config.php</div>
</div>

<div className="font-mono text-sm leading-8">
<div className="flex">
<span className="text-gray-600 w-6 select-none">1</span>
<span className="pl-4 text-purple-400">define</span><span className="text-gray-300">(</span><span className="text-emerald-400">'WP_DEBUG'</span><span className="text-gray-300">, </span><span className="text-pink-400">false</span><span className="text-gray-300">);</span>
</div>
<div className="flex">
<span className="text-gray-600 w-6 select-none">2</span>
<span className="pl-4 text-purple-400">define</span><span className="text-gray-300">(</span><span className="text-emerald-400">'WP_CACHE'</span><span className="text-gray-300">, </span><span className="text-pink-400">true</span><span className="text-gray-300">);</span>
</div>
<div className="flex">
<span className="text-gray-600 w-6 select-none">3</span>
<span className="pl-4 text-gray-500 italic">// Optimized for Speed</span>
</div>
<div className="flex">
<span className="text-gray-600 w-6 select-none">4</span>
<span className="pl-4 text-purple-300">$seo_score</span> <span className="text-gray-300">=</span> <span className="text-emerald-400">100</span><span className="text-gray-300">;</span>
</div>
<div className="flex">
<span className="text-gray-600 w-6 select-none">5</span>
<span className="pl-4 text-purple-300">$jam_flavor</span> <span className="text-gray-300">=</span> <span className="text-emerald-400">'Strawberry'</span><span className="text-gray-300">;</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50">
<span className="text-[10px] tracking-widest uppercase text-gray-400">Scroll</span>
<div className="w-px h-12 bg-gradient-to-b from-gray-400 to-transparent"></div>
</div>

<div className="fixed bottom-6 right-6 z-50">
<div className="bg-[#111] border border-white/10 rounded-lg px-3 py-1.5 flex items-center gap-2 shadow-lg">
<i className="w-3 h-3 text-gray-400 fill-gray-400" data-lucide="triangle"></i>
<span className="text-xs text-gray-400 font-medium">Made in Aura</span>
</div>
</div>
</main>

<section className="relative py-24 border-t border-white/5 bg-[#080808]" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Transparent Pricing</h2>
<p className="text-lg text-gray-400">Choose the perfect mix for your business needs.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative bg-[#0c0c0c] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-xl font-medium text-white mb-2">Starter Jar</h3>
<p className="text-sm text-gray-500">Perfect for small businesses.</p>
</div>
</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-semibold text-white tracking-tight">$399</span>
<span className="text-gray-500">/one-time</span>
</div>
<button className="w-full py-3 rounded-lg border border-white/10 bg-white/5 text-white font-medium hover:bg-white hover:text-black transition duration-200 mb-8">Get Started</button>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-gray-400 text-sm">
<i className="w-5 h-5 text-gray-200 shrink-0" data-lucide="check"></i>
<span>Basic SEO Setup</span>
</li>
<li className="flex items-start gap-3 text-gray-400 text-sm">
<i className="w-5 h-5 text-gray-200 shrink-0" data-lucide="check"></i>
<span>3 Page WordPress Site</span>
</li>
<li className="flex items-start gap-3 text-gray-400 text-sm">
<i className="w-5 h-5 text-gray-200 shrink-0" data-lucide="check"></i>
<span>Mobile Responsive</span>
</li>
<li className="flex items-start gap-3 text-gray-400 text-sm">
<i className="w-5 h-5 text-gray-200 shrink-0" data-lucide="check"></i>
<span>1 Week Support</span>
</li>
</ul>
</div>

<div className="relative bg-[#0f0f0f] border border-purple-500/30 rounded-2xl p-8 shadow-[0_0_30px_-10px_rgba(168,85,247,0.15)]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full">
                        Most Popular
                    </div>
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-xl font-medium text-white mb-2">The Sweet Spot</h3>
<p className="text-sm text-gray-500">For growing brands &amp; stores.</p>
</div>
</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-semibold text-white tracking-tight">$599</span>
<span className="text-gray-500">/one-time</span>
</div>
<button className="w-full py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition duration-200 mb-8 shadow-lg shadow-white/5">Select Plan</button>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-gray-300 text-sm">
<i className="w-5 h-5 text-purple-400 shrink-0" data-lucide="check"></i>
<span>Advanced SEO &amp; Schema</span>
</li>
<li className="flex items-start gap-3 text-gray-300 text-sm">
<i className="w-5 h-5 text-purple-400 shrink-0" data-lucide="check"></i>
<span>Up to 10 Pages</span>
</li>
<li className="flex items-start gap-3 text-gray-300 text-sm">
<i className="w-5 h-5 text-purple-400 shrink-0" data-lucide="check"></i>
<span>WooCommerce Integration</span>
</li>
<li className="flex items-start gap-3 text-gray-300 text-sm">
<i className="w-5 h-5 text-purple-400 shrink-0" data-lucide="check"></i>
<span>Speed Optimization (90+)</span>
</li>
<li className="flex items-start gap-3 text-gray-300 text-sm">
<i className="w-5 h-5 text-purple-400 shrink-0" data-lucide="check"></i>
<span>1 Month Maintenance</span>
</li>
</ul>
</div>

<div className="group relative bg-[#0c0c0c] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-xl font-medium text-white mb-2">Full Jam Factory</h3>
<p className="text-sm text-gray-500">Enterprise grade solutions.</p>
</div>
</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-semibold text-white tracking-tight">$999</span>
<span className="text-gray-500">/one-time</span>
</div>
<button className="w-full py-3 rounded-lg border border-white/10 bg-white/5 text-white font-medium hover:bg-white hover:text-black transition duration-200 mb-8">Contact Sales</button>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-gray-400 text-sm">
<i className="w-5 h-5 text-gray-200 shrink-0" data-lucide="check"></i>
<span>Custom Figma Design</span>
</li>
<li className="flex items-start gap-3 text-gray-400 text-sm">
<i className="w-5 h-5 text-gray-200 shrink-0" data-lucide="check"></i>
<span>Unlimited Pages</span>
</li>
<li className="flex items-start gap-3 text-gray-400 text-sm">
<i className="w-5 h-5 text-gray-200 shrink-0" data-lucide="check"></i>
<span>Complex Functionality</span>
</li>
<li className="flex items-start gap-3 text-gray-400 text-sm">
<i className="w-5 h-5 text-gray-200 shrink-0" data-lucide="check"></i>
<span>Priority Support (24/7)</span>
</li>
<li className="flex items-start gap-3 text-gray-400 text-sm">
<i className="w-5 h-5 text-gray-200 shrink-0" data-lucide="check"></i>
<span>A/B Testing Setup</span>
</li>
</ul>
</div>
</div>
</div>
</section>
<footer className="border-t border-white/5 bg-[#050505] py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-purple-600 flex items-center justify-center text-white text-xs">
<i className="w-3 h-3" data-lucide="layers"></i>
</div>
<span className="text-gray-400 text-sm">© 2024 Pbjams Inc.</span>
</div>
<div className="flex gap-6">
<a className="text-gray-500 hover:text-white transition text-sm" href="#">Terms</a>
<a className="text-gray-500 hover:text-white transition text-sm" href="#">Privacy</a>
<a className="text-gray-500 hover:text-white transition text-sm" href="#">Twitter</a>
</div>
</div>
</footer>


    </>
  );
}
