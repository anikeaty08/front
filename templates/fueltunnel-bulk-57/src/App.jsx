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
      

<div className="fixed inset-0 z-[-1] pointer-events-none">
<img alt="Fuel Refinery Night" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen grayscale" src="https://images.unsplash.com/photo-1596473536124-74726a29b3ae?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950"></div>
<div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px]"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-900/50 hover:bg-blue-500 transition-colors" href="#">
<iconify-icon className="text-white text-lg" icon="lucide:droplet" strokeWidth="2"></iconify-icon>
</a>
<span className="font-semibold tracking-tight text-lg text-white">FuelTunnel</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#supply">Diesel Supply</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#about">About Us</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Client Portal</a>
<a className="text-sm font-medium bg-white text-slate-950 px-4 py-2 rounded-full hover:bg-blue-50 transition-colors" href="#contact">
                    Order Fuel
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="relative z-10 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-xs font-medium text-blue-400 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    Wholesale Diesel 50ppm &amp; 500ppm
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 text-white">
                    Powering South African <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Logistics &amp; Industry.</span>
</h1>
<p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg font-light">
                    Reliable bulk fuel supply combined with next-gen monitoring technology. We deliver premium diesel directly to your depot, mine, or fleet, anywhere in SA.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="h-12 px-6 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20" href="#contact">
                        Request Quote
                        <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="h-12 px-6 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2" href="#supply">
<iconify-icon icon="lucide:map-pin" strokeWidth="1.5" width="16"></iconify-icon>
                        View Coverage Area
                    </a>
</div>
<div className="mt-10 flex items-center gap-4 text-xs text-slate-500 font-medium">
<div className="flex -space-x-3">
<img alt="Client" className="w-8 h-8 rounded-full border border-slate-900" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Client" className="w-8 h-8 rounded-full border border-slate-900" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Client" className="w-8 h-8 rounded-full border border-slate-900" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<span>SUPPLYING 120M+ LITERS ANNUALLY</span>
</div>
</div>

<div className="relative z-10 lg:h-[600px] flex items-center justify-center perspective-[2000px]">
<div className="relative w-full aspect-[4/3] bg-slate-900 rounded-2xl p-0 shadow-2xl shadow-blue-900/10 transform rotate-y-[-10deg] rotate-x-[5deg] transition-transform hover:rotate-0 duration-700 ease-out border border-white/10 overflow-hidden">
<img alt="Fuel Truck" className="absolute inset-0 w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
<div className="relative z-10 p-6 h-full flex flex-col justify-between">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 px-2 py-1 bg-black/40 backdrop-blur rounded border border-white/10 text-xs text-white">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Delivery In Transit
                            </div>
<div className="text-xs text-slate-300 font-mono">ORD-2991-ZA</div>
</div>
<div className="space-y-4">
<div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-xl p-4">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
<iconify-icon icon="lucide:truck" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Fleet Order #882</div>
<div className="text-xs text-slate-400">Destination: Rustenburg Mine</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-white">40,000 L</div>
<div className="text-xs text-blue-400">Diesel 50ppm</div>
</div>
</div>
<div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-blue-500 h-full w-[85%] relative">
<div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 animate-pulse"></div>
</div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-slate-500 font-medium tracking-wide">
<span>DEPOT DISPATCH</span>
<span>ARRIVING 45 MINS</span>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-xl p-3">
<div className="text-xs text-slate-400 mb-1">Wholesale Price (50ppm)</div>
<div className="text-xl font-medium text-white">R 23.45 <span className="text-xs font-normal text-slate-500">/L</span></div>
</div>
<div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-xl p-3">
<div className="text-xs text-slate-400 mb-1">Rebate Estimate</div>
<div className="text-xl font-medium text-green-400">- R 3.12 <span className="text-xs font-normal text-slate-500">/L</span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-slate-900/30 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 py-10">
<p className="text-center text-xs text-slate-500 mb-8 font-medium tracking-widest uppercase">Trusted by SA's Mining &amp; Transport Leaders</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-bold tracking-tighter text-white">ANGLO AMERICAN</span>
<span className="text-xl font-bold tracking-tighter text-white">GLENCORE</span>
<span className="text-xl font-bold tracking-tighter text-white italic">Imperial</span>
<span className="text-xl font-bold tracking-tighter text-white">SUPER GROUP</span>
<span className="text-xl font-bold tracking-tighter text-white">UNITRANS</span>
</div>
</div>
</section>

<section className="py-24 relative" id="supply">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-white">More than just fuel supply.</h2>
<p className="text-lg text-slate-400 font-light">
                    We secure your entire value chain. From wholesale sourcing to on-site dispensing, we eliminate theft and ensure quality.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 glass-panel rounded-3xl relative overflow-hidden group min-h-[320px]">
<img alt="Industrial Pump" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
<div className="relative z-10 p-8 h-full flex flex-col justify-center max-w-lg">
<div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-900/50">
<iconify-icon icon="lucide:container" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium mb-3 text-white">On-Site Storage Tanks</h3>
<p className="text-slate-300">We install and manage smart tanks at your depot. IoT sensors monitor levels 24/7, triggering automatic deliveries before you run dry.</p>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 relative overflow-hidden group">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
<iconify-icon icon="lucide:file-bar-chart" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 text-white">SARS Rebate Logs</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                        Automated logbooks for off-road diesel usage. Simplify your tax returns and maximize your SARS refunds.
                    </p>
<div className="mt-auto w-full border-t border-dashed border-white/10 pt-4">
<div className="flex justify-between items-center text-sm">
<span className="text-slate-500">Rebate Status</span>
<span className="text-green-400 font-medium flex items-center gap-1"><iconify-icon icon="lucide:check" width="12"></iconify-icon> Compliant</span>
</div>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 group hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-white mb-4">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-white">Quality Guarantee</h3>
<p className="text-sm text-slate-400">Sourced directly from major refineries. SANS 342 compliant diesel.</p>
</div>

<div className="glass-panel rounded-3xl p-8 group hover:bg-white/5 transition-colors relative overflow-hidden">
<div className="absolute right-0 top-0 p-4 opacity-10">
<iconify-icon icon="lucide:wifi" strokeWidth="1" width="64"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-white mb-4 relative z-10">
<iconify-icon icon="lucide:radio" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-white relative z-10">Smart Tagging</h3>
<p className="text-sm text-slate-400 relative z-10">Vehicles are tagged with RFID. Fuel only dispenses for authorized trucks.</p>
</div>

<div className="glass-panel rounded-3xl p-8 group hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-white mb-4">
<iconify-icon icon="lucide:credit-card" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-white">Flexible Terms</h3>
<p className="text-sm text-slate-400">30-day accounts available for qualified logistics companies.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-slate-900/30 relative" id="pricing">
<img alt="Highway" className="absolute inset-0 w-full h-full object-cover opacity-5 mix-blend-overlay grayscale" src="https://images.unsplash.com/photo-1485575351930-c3d32dc6e17f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">Optimized pricing structure.</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center shrink-0 border border-blue-500/30">
<iconify-icon icon="lucide:trending-down" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Grid-Based Discounts</h4>
<p className="text-sm text-slate-400 mt-1">Our pricing floats with the DOE regulated grid price, but with significant volume discounts.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center shrink-0 border border-blue-500/30">
<iconify-icon icon="lucide:truck" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Free Delivery</h4>
<p className="text-sm text-slate-400 mt-1">Free delivery for orders over 20,000 Liters within Gauteng, KZN, and Western Cape.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center shrink-0 border border-blue-500/30">
<iconify-icon icon="lucide:lock" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Fixed Price Contracts</h4>
<p className="text-sm text-slate-400 mt-1">Lock in your fuel price for 3-6 months to stabilize your logistics costs.</p>
</div>
</li>
</ul>
</div>

<div className="glass-panel p-8 rounded-3xl border border-white/10 bg-slate-900/80">
<h3 className="text-xl font-medium mb-8 text-white">Cost Reduction Estimator</h3>
<div className="space-y-8">
<div>
<div className="flex justify-between mb-2">
<label className="text-sm text-slate-400">Monthly Volume (Liters)</label>
<span className="text-sm font-medium text-white">40,000 L</span>
</div>
<div className="h-2 bg-slate-700 rounded-full w-full relative group cursor-pointer overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-blue-600 rounded-full w-[45%]"></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<label className="text-sm text-slate-400">Current Theft/Loss Rate</label>
<span className="text-sm font-medium text-white">Approx 5%</span>
</div>
<div className="h-2 bg-slate-700 rounded-full w-full relative group cursor-pointer overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-blue-600 rounded-full w-[25%]"></div>
</div>
</div>
<div className="pt-6 border-t border-white/5">
<div className="text-sm text-slate-400 mb-1">Potential Monthly Savings</div>
<div className="text-4xl font-semibold text-white tracking-tight">R 45,200</div>
<p className="text-xs text-slate-500 mt-2">Includes bulk discount + theft prevention.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5 bg-slate-950" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-xs font-medium text-indigo-400 mb-6">
                        About FuelTunnel
                    </div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-white leading-tight">
                        Built on reliability.<br/>
                        Driven by data.
                    </h2>
<div className="space-y-6 text-slate-400 font-light text-lg">
<p>
                            Founded in 2018, FuelTunnel was born from a frustration with the inconsistencies in the South African bulk fuel market. We saw logistics companies losing millions to theft, wet fuel, and unreliable delivery schedules.
                        </p>
<p>
                            We aren't just a fuel broker. We are a technology-first logistics partner. By integrating IoT monitoring with a fleet of 45+ owned tankers, we provide a level of transparency previously unknown in the industry.
                        </p>
</div>
<div className="mt-10 grid grid-cols-2 gap-6">
<div className="p-4 rounded-2xl bg-white/5 border border-white/10">
<div className="text-3xl font-semibold text-white mb-1">Level 1</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">B-BBEE Contributor</div>
</div>
<div className="p-4 rounded-2xl bg-white/5 border border-white/10">
<div className="text-3xl font-semibold text-white mb-1">100%</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">SANS 342 Compliant</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 h-full">
<div className="glass-panel p-6 rounded-3xl flex flex-col justify-between col-span-2 md:col-span-1">
<div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white mb-4">
<iconify-icon icon="lucide:users" width="20"></iconify-icon>
</div>
<div>
<div className="text-2xl font-medium text-white">45+</div>
<div className="text-sm text-slate-400">Team Members</div>
</div>
</div>
<div className="relative rounded-3xl overflow-hidden col-span-2 md:col-span-1 min-h-[200px]">
<img className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1599388147551-897d26442653?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply"></div>
</div>
<div className="glass-panel p-6 rounded-3xl col-span-2">
<div className="flex items-center justify-between mb-4">
<h4 className="text-white font-medium">Headquarters</h4>
<iconify-icon className="text-slate-500" icon="lucide:building-2"></iconify-icon>
</div>
<p className="text-sm text-slate-400">Waterfall City, Midrand, Johannesburg.<br/>Depots in Durban &amp; Cape Town.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-slate-900/50 border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between gap-16">

<div className="w-full md:w-5/12">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-white">Get in touch.</h2>
<p className="text-lg text-slate-400 mb-10 font-light">
                        Ready to optimize your fuel supply? Our sales team is available 24/7 for emergency drops and contract negotiations.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-500 border border-blue-500/20 shrink-0">
<iconify-icon icon="lucide:phone" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">24/7 Ops Room</h4>
<p className="text-slate-400 mb-1">For active deliveries and emergencies.</p>
<a className="text-lg font-medium text-white hover:text-blue-400 transition-colors" href="tel:+27105550123">+27 10 555 0123</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-500 border border-blue-500/20 shrink-0">
<iconify-icon icon="lucide:mail" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Sales &amp; Accounts</h4>
<p className="text-slate-400 mb-1">Quotes, contracts, and billing queries.</p>
<a className="text-lg font-medium text-white hover:text-blue-400 transition-colors" href="mailto:sales@fueltunnel.co.za">sales@fueltunnel.co.za</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-500 border border-blue-500/20 shrink-0">
<iconify-icon icon="lucide:map-pin" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Main Depot</h4>
<p className="text-slate-400">14 Logistics Way, Jet Park,<br/>Boksburg, 1459</p>
</div>
</div>
</div>
</div>

<div className="w-full md:w-6/12">
<div className="glass-panel p-8 rounded-3xl border border-white/10">
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-xs text-slate-400 font-medium uppercase tracking-wider">First Name</label>
<input className="w-full glass-input rounded-lg px-4 py-3 text-sm" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-400 font-medium uppercase tracking-wider">Last Name</label>
<input className="w-full glass-input rounded-lg px-4 py-3 text-sm" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-400 font-medium uppercase tracking-wider">Company Email</label>
<input className="w-full glass-input rounded-lg px-4 py-3 text-sm" placeholder="john@logistics.co.za" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-400 font-medium uppercase tracking-wider">Estimated Monthly Volume (Liters)</label>
<select className="w-full glass-input rounded-lg px-4 py-3 text-sm appearance-none bg-transparent">
<option className="text-slate-900">Less than 5,000 L</option>
<option className="text-slate-900">5,000 - 20,000 L</option>
<option className="text-slate-900">20,000 - 100,000 L</option>
<option className="text-slate-900">100,000 L +</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-400 font-medium uppercase tracking-wider">Message</label>
<textarea className="w-full glass-input rounded-lg px-4 py-3 text-sm min-h-[120px]" placeholder="Tell us about your requirements..."></textarea>
</div>
<button className="w-full h-12 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 mt-4" type="button">
                                Send Message
                                <iconify-icon icon="lucide:send" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="lucide:droplet" strokeWidth="2"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-white">FuelTunnel</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed mb-6">
                        Johannesburg HQ.<br/>
                        Supplying Gauteng, KZN, Mpumalanga, Limpopo and Western Cape.
                    </p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="16"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="16"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Supply</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-400 transition-colors" href="#">50ppm Diesel</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">500ppm Diesel</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Illuminating Paraffin</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Lubricants</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-400 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Credit Application</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Wholesale License</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Terms of Trade</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">PAIA Manual</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2024 FuelTunnel (Pty) Ltd. All rights reserved. Wholesale License #9921.</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs text-slate-500">Dispatch Active</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
