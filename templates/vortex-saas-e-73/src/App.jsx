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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="hero-glow blur-3xl"></div>
<div className="fixed top-0 right-0 w-[500px] h-[500px] bg-[#B31FFF] opacity-[0.03] blur-[150px] rounded-full pointer-events-none"></div>
<div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-[#4B9BFE] opacity-[0.03] blur-[150px] rounded-full pointer-events-none"></div>

<header className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.05] bg-[#0B0B0F]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tighter text-white">VORTEX</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors tracking-tight" href="#services">Services</a>
<a className="hover:text-white transition-colors tracking-tight" href="#process">Process</a>
<a className="hover:text-white transition-colors tracking-tight" href="#results">Results</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-white tracking-tight hover:text-slate-300 transition-colors" href="#">Sign in</a>
<a className="group relative px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm font-medium text-white tracking-tight overflow-hidden" href="#">
<span className="relative z-10">Get Store Audit</span>
<div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-20 transition-opacity"></div>
</a>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-5xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300 mb-8 tracking-tight">
<span className="w-2 h-2 rounded-full bg-[#4B9BFE] animate-pulse"></span>
                Shopify Plus Partner Agency
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tighter leading-[1.1] mb-6">
                We Build Shopify Stores <br className="hidden md:block"/>
                That <span className="text-gradient">Actually Convert</span>
</h1>
<p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed tracking-tight">
                Scale your revenue with high-performance, custom-built Shopify experiences engineered for speed, scalability, and seamless user journeys.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-brand text-white text-sm font-medium tracking-tight hover:shadow-[0_0_20px_rgba(179,31,255,0.4)] transition-all flex items-center justify-center gap-2" href="#">
                    Get a Free Store Audit
                    <iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium tracking-tight hover:bg-white/10 transition-all flex items-center justify-center gap-2" href="#">
                    View Our Work
                </a>
</div>
</div>

<div className="mt-20 max-w-5xl mx-auto relative perspective-1000">

<div className="absolute inset-0 bg-gradient-brand blur-[100px] opacity-20 transform scale-90"></div>
<div className="relative w-full aspect-video glass-panel rounded-2xl overflow-hidden flex flex-col shadow-2xl border-white/10">

<div className="h-10 border-b border-white/5 bg-white/[0.03] flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
</div>
<div className="ml-4 flex-1 h-5 rounded-md bg-white/5 border border-white/5 max-w-md mx-auto"></div>
</div>

<div className="flex-1 p-6 flex flex-col gap-6 relative overflow-hidden">

<div className="flex justify-between items-center">
<div className="w-24 h-4 bg-white/10 rounded"></div>
<div className="flex gap-4">
<div className="w-12 h-4 bg-white/5 rounded"></div>
<div className="w-12 h-4 bg-white/5 rounded"></div>
<div className="w-12 h-4 bg-white/5 rounded"></div>
</div>
</div>

<div className="flex-1 flex gap-6">
<div className="w-1/2 flex flex-col justify-center gap-4">
<div className="w-3/4 h-8 bg-white/10 rounded"></div>
<div className="w-full h-4 bg-white/5 rounded"></div>
<div className="w-5/6 h-4 bg-white/5 rounded"></div>
<div className="w-32 h-10 bg-gradient-brand rounded-lg mt-2 opacity-80"></div>
</div>
<div className="w-1/2 rounded-xl bg-white/5 border border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-[#B31FFF]/10 to-[#4B9BFE]/10"></div>
</div>
</div>
</div>
</div>

<div className="absolute -right-4 md:-right-12 -bottom-12 w-48 md:w-64 aspect-[9/19] glass-panel rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-2 z-10">
<div className="w-full h-full bg-[#0B0B0F] rounded-2xl overflow-hidden flex flex-col border border-white/5 relative">

<div className="absolute top-0 inset-x-0 h-4 flex justify-center">
<div className="w-1/3 h-full bg-[#13131A] rounded-b-xl"></div>
</div>
<div className="flex-1 p-4 pt-8 flex flex-col gap-4">
<div className="w-full h-32 rounded-lg bg-gradient-to-br from-[#B31FFF]/20 to-[#4B9BFE]/20"></div>
<div className="w-2/3 h-4 bg-white/10 rounded"></div>
<div className="w-full h-3 bg-white/5 rounded"></div>
<div className="w-4/5 h-3 bg-white/5 rounded"></div>
<div className="mt-auto w-full h-10 bg-white/10 rounded-lg"></div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 py-12">
<p className="text-center text-xs font-medium text-slate-500 uppercase tracking-[0.15em] mb-8">Trusted by scaling ecommerce brands</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5 text-center">
<div className="flex flex-col gap-1">
<span className="text-3xl font-semibold text-white tracking-tighter">45%+</span>
<span className="text-xs text-slate-400 tracking-tight">Avg. Conversion Lift</span>
</div>
<div className="flex flex-col gap-1 pl-8">
<span className="text-3xl font-semibold text-white tracking-tighter">150+</span>
<span className="text-xs text-slate-400 tracking-tight">Shopify Stores Built</span>
</div>
<div className="flex flex-col gap-1 pl-8">
<span className="text-3xl font-semibold text-white tracking-tighter">&lt;1s</span>
<span className="text-xs text-slate-400 tracking-tight">Page Load Times</span>
</div>
<div className="flex flex-col gap-1 pl-8">
<span className="text-3xl font-semibold text-white tracking-tighter">$50M+</span>
<span className="text-xs text-slate-400 tracking-tight">Client Revenue Gen.</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:w-2/3">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tighter mb-4">Engineering commerce <br/>for the modern web.</h2>
<p className="text-base text-slate-400 tracking-tight">We don't just build themes; we engineer scalable sales engines focused entirely on business outcomes.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group relative p-8 rounded-2xl bg-[#13131A] border border-white/[0.05] hover:border-white/10 transition-colors overflow-hidden">
<div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-[0.03] transition-opacity"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-slate-300 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:shop-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Custom Theme Dev</h3>
<p className="text-sm text-slate-400 leading-relaxed tracking-tight">Pixel-perfect, headless or liquid-based architectures built from scratch to match your brand identity perfectly.</p>
</div>

<div className="group relative p-8 rounded-2xl bg-[#13131A] border border-white/[0.05] hover:border-white/10 transition-colors overflow-hidden">
<div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-[0.03] transition-opacity"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-slate-300 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:rocket-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Performance Optimization</h3>
<p className="text-sm text-slate-400 leading-relaxed tracking-tight">Drastically reduce load times and improve Core Web Vitals to increase your search ranking and conversion rate.</p>
</div>

<div className="group relative p-8 rounded-2xl bg-[#13131A] border border-white/[0.05] hover:border-white/10 transition-colors overflow-hidden">
<div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-[0.03] transition-opacity"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-slate-300 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:code-square-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Private App Development</h3>
<p className="text-sm text-slate-400 leading-relaxed tracking-tight">Bespoke Shopify applications to automate unique operational workflows or create complex frontend experiences.</p>
</div>

<div className="group relative p-8 rounded-2xl bg-[#13131A] border border-white/[0.05] hover:border-white/10 transition-colors overflow-hidden">
<div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-[0.03] transition-opacity"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-slate-300 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:transfer-horizontal-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Migration to Shopify</h3>
<p className="text-sm text-slate-400 leading-relaxed tracking-tight">Seamlessly move your data, products, and customers from Magento, WooCommerce, or custom builds with zero downtime.</p>
</div>

<div className="group relative p-8 rounded-2xl bg-[#13131A] border border-white/[0.05] hover:border-white/10 transition-colors overflow-hidden">
<div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-[0.03] transition-opacity"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-slate-300 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Conversion Rate Opt. (CRO)</h3>
<p className="text-sm text-slate-400 leading-relaxed tracking-tight">Data-driven A/B testing, UX audits, and strategic enhancements to turn more of your traffic into paying customers.</p>
</div>

<div className="group relative p-8 rounded-2xl bg-[#13131A] border border-white/[0.05] hover:border-white/10 transition-colors overflow-hidden">
<div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-[0.03] transition-opacity"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-slate-300 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Retainer &amp; Support</h3>
<p className="text-sm text-slate-400 leading-relaxed tracking-tight">Continuous development, proactive monitoring, and priority support to keep your store at peak performance month over month.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#0B0B0F]">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tighter mb-12 text-center">Built for scale, designed for speed.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">

<div className="md:col-span-2 rounded-3xl bg-[#13131A] border border-white/5 p-8 relative overflow-hidden flex flex-col justify-between">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-[#B31FFF] blur-[80px] opacity-20 rounded-full"></div>
<div className="relative z-10">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Lightning Fast Performance</h3>
<p className="text-sm text-slate-400 max-w-sm tracking-tight">Every millisecond counts. Our codebases are strictly optimized to deliver sub-second load times globally.</p>
</div>
<div className="relative z-10 flex items-end gap-2 mt-8">
<div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
<div className="w-[95%] h-full bg-[#4B9BFE] rounded-full"></div>
</div>
<span className="text-xs font-medium text-white">95/100</span>
<span className="text-xs text-slate-500">PageSpeed</span>
</div>
</div>

<div className="rounded-3xl bg-[#13131A] border border-white/5 p-8 relative overflow-hidden flex flex-col justify-between">
<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#4B9BFE] blur-[60px] opacity-20 rounded-full"></div>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-4 text-white">
<iconify-icon height="20" icon="solar:server-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">Scalable Arch</h3>
<p className="text-sm text-slate-400 tracking-tight">Infrastructure that easily handles BFCM traffic spikes without breaking a sweat.</p>
</div>
</div>

<div className="rounded-3xl bg-[#13131A] border border-white/5 p-8 relative overflow-hidden flex flex-col justify-between">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-4 text-white">
<iconify-icon height="20" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">Pixel-Perfect UI</h3>
<p className="text-sm text-slate-400 tracking-tight">Designs that establish trust and guide users frictionlessly to checkout.</p>
</div>
</div>

<div className="md:col-span-2 rounded-3xl bg-gradient-brand p-[1px] relative overflow-hidden">
<div className="absolute inset-0 opacity-50 mix-blend-overlay" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fillOpacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')'}}></div>
<div className="w-full h-full bg-[#13131A] rounded-[23px] p-8 flex flex-col justify-between relative z-10">
<div className="relative z-10">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Built for Conversions</h3>
<p className="text-sm text-slate-400 max-w-sm tracking-tight">We obsess over UX patterns, mobile optimization, and frictionless checkouts to maximize your ROAS.</p>
</div>
<div className="flex gap-4 mt-6">
<div className="flex flex-col gap-1">
<span className="text-2xl font-semibold text-white tracking-tighter">+24%</span>
<span className="text-xs text-slate-500 tracking-tight">AOV Increase</span>
</div>
<div className="w-px bg-white/10"></div>
<div className="flex flex-col gap-1">
<span className="text-2xl font-semibold text-white tracking-tighter">-18%</span>
<span className="text-xs text-slate-500 tracking-tight">Cart Abandonment</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="process">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tighter mb-16 text-center">How we build winners.</h2>
<div className="relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-white/10 z-0"></div>
<div className="flex flex-col md:flex-row justify-between gap-10 md:gap-4 relative z-10">

<div className="flex-1 flex flex-col items-start md:items-center text-left md:text-center group">
<div className="w-12 h-12 rounded-full bg-[#0B0B0F] border border-white/20 flex items-center justify-center text-white mb-6 group-hover:border-[#B31FFF] group-hover:text-[#B31FFF] transition-colors relative">
<span className="text-sm font-medium">01</span>
</div>
<h4 className="text-base font-semibold text-white tracking-tight mb-2">Discovery &amp; Strategy</h4>
<p className="text-xs text-slate-400 tracking-tight">Auditing your current setup, understanding goals, and defining technical requirements.</p>
</div>

<div className="flex-1 flex flex-col items-start md:items-center text-left md:text-center group">
<div className="w-12 h-12 rounded-full bg-[#0B0B0F] border border-white/20 flex items-center justify-center text-white mb-6 group-hover:border-[#B31FFF] group-hover:text-[#B31FFF] transition-colors">
<span className="text-sm font-medium">02</span>
</div>
<h4 className="text-base font-semibold text-white tracking-tight mb-2">UX/UI Design</h4>
<p className="text-xs text-slate-400 tracking-tight">Crafting high-converting wireframes and pixel-perfect mockups tailored to your brand.</p>
</div>

<div className="flex-1 flex flex-col items-start md:items-center text-left md:text-center group">
<div className="w-12 h-12 rounded-full bg-[#0B0B0F] border border-white/20 flex items-center justify-center text-white mb-6 group-hover:border-[#4B9BFE] group-hover:text-[#4B9BFE] transition-colors">
<span className="text-sm font-medium">03</span>
</div>
<h4 className="text-base font-semibold text-white tracking-tight mb-2">Development</h4>
<p className="text-xs text-slate-400 tracking-tight">Writing clean, modular code with modern stacks (Liquid, Next.js, Hydrogen).</p>
</div>

<div className="flex-1 flex flex-col items-start md:items-center text-left md:text-center group">
<div className="w-12 h-12 rounded-full bg-[#0B0B0F] border border-white/20 flex items-center justify-center text-white mb-6 group-hover:border-[#4B9BFE] group-hover:text-[#4B9BFE] transition-colors">
<span className="text-sm font-medium">04</span>
</div>
<h4 className="text-base font-semibold text-white tracking-tight mb-2">QA &amp; Testing</h4>
<p className="text-xs text-slate-400 tracking-tight">Rigorous device testing, performance audits, and conversion path validation.</p>
</div>

<div className="flex-1 flex flex-col items-start md:items-center text-left md:text-center group">
<div className="w-12 h-12 rounded-full bg-[#0B0B0F] border border-white/20 flex items-center justify-center text-white mb-6 group-hover:border-[#B31FFF] group-hover:text-[#B31FFF] transition-colors">
<span className="text-sm font-medium">05</span>
</div>
<h4 className="text-base font-semibold text-white tracking-tight mb-2">Launch &amp; Scale</h4>
<p className="text-xs text-slate-400 tracking-tight">Seamless deployment followed by continuous monitoring and iterative improvements.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-white/[0.01] overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm text-slate-400 mb-8 tracking-tight">Seamlessly integrated with your modern commerce stack.</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold tracking-tighter text-white">KLAVIYO</span>
<span className="text-xl font-semibold tracking-tighter text-white flex items-center gap-1"><span className="w-4 h-4 bg-[#635BFF] rounded-sm inline-block"></span> stripe</span>
<span className="text-xl font-bold tracking-tighter text-white">GORGGIAS</span>
<span className="text-xl font-bold tracking-tighter text-white">RECHARGE</span>
<span className="text-xl font-bold tracking-tighter text-white">YOTPO</span>
<span className="text-xl font-bold tracking-tighter text-white">META</span>
</div>
</div>
</section>

<section className="py-24 px-6" id="results">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row gap-12 items-center">
<div className="lg:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#4B9BFE] mb-6 tracking-tight">
                        Featured Case Study
                    </div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-6 leading-tight">
                        How we helped <span className="text-white">Aura Beauty</span> scale to $10M ARR.
                    </h2>
<p className="text-base text-slate-400 tracking-tight mb-8">
                        Aura needed a headless Shopify architecture to support their rich media content while maintaining sub-second load times. We migrated them from a monolithic setup, resulting in a dramatic increase in mobile conversions.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#B31FFF] transition-colors tracking-tight" href="#">
                        Read full case study
                        <iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
<div className="lg:w-1/2 w-full glass-panel rounded-3xl p-8 border-white/10 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#B31FFF] blur-[100px] opacity-10"></div>
<div className="flex flex-col gap-8 relative z-10">

<div>
<div className="flex justify-between text-sm font-medium mb-2 tracking-tight">
<span className="text-slate-300">Conversion Rate</span>
<span className="text-[#4B9BFE]">+112%</span>
</div>
<div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
<div className="w-[85%] h-full bg-[#4B9BFE] rounded-full"></div>
</div>
<div className="flex justify-between text-xs text-slate-500 mt-2">
<span>Before: 1.8%</span>
<span>After: 3.8%</span>
</div>
</div>

<div>
<div className="flex justify-between text-sm font-medium mb-2 tracking-tight">
<span className="text-slate-300">Mobile Page Speed</span>
<span className="text-[#B31FFF]">-65%</span>
</div>
<div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
<div className="w-[92%] h-full bg-[#B31FFF] rounded-full"></div>
</div>
<div className="flex justify-between text-xs text-slate-500 mt-2">
<span>Before: 4.2s</span>
<span>After: 1.4s</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-brand opacity-10"></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-brand blur-[120px] opacity-30 rounded-full"></div>
<div className="max-w-4xl mx-auto glass-panel rounded-3xl p-12 md:p-20 text-center relative z-10 border-white/10 shadow-2xl">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-6">Ready to scale your store?</h2>
<p className="text-base text-slate-300 max-w-xl mx-auto mb-10 tracking-tight">Stop losing sales to slow load times and poor UX. Let's engineer a storefront that works as hard as your marketing team.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
<input className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#4B9BFE] transition-colors" placeholder="Your store URL (optional)" type="url"/>
<button className="px-6 py-3 rounded-lg bg-white text-[#0B0B0F] text-sm font-semibold tracking-tight hover:bg-slate-200 transition-colors whitespace-nowrap" type="submit">
                    Book Consultation
                </button>
</form>
<p className="text-xs text-slate-500 tracking-tight">No commitment required. We'll review your site and provide actionable insights.</p>
</div>
</section>

<footer className="border-t border-white/5 bg-[#0B0B0F] pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
<div>
<span className="text-2xl font-semibold tracking-tighter text-white block mb-4">VORTEX</span>
<p className="text-xs text-slate-500 max-w-xs tracking-tight mb-6">Premium Shopify development and optimization for brands that demand performance.</p>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:basketball-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon></a>
</div>
</div>
<div className="flex gap-16">
<div className="flex flex-col gap-3">
<span className="text-sm font-medium text-white tracking-tight mb-1">Services</span>
<a className="text-xs text-slate-500 hover:text-white transition-colors tracking-tight" href="#">Theme Development</a>
<a className="text-xs text-slate-500 hover:text-white transition-colors tracking-tight" href="#">App Development</a>
<a className="text-xs text-slate-500 hover:text-white transition-colors tracking-tight" href="#">Migrations</a>
<a className="text-xs text-slate-500 hover:text-white transition-colors tracking-tight" href="#">Optimization</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-sm font-medium text-white tracking-tight mb-1">Company</span>
<a className="text-xs text-slate-500 hover:text-white transition-colors tracking-tight" href="#">Work</a>
<a className="text-xs text-slate-500 hover:text-white transition-colors tracking-tight" href="#">Process</a>
<a className="text-xs text-slate-500 hover:text-white transition-colors tracking-tight" href="#">About</a>
<a className="text-xs text-slate-500 hover:text-white transition-colors tracking-tight" href="#">Contact</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-slate-600 tracking-tight">
<p>© 2024 Vortex Commerce. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-slate-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
