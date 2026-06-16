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
      

<nav className="fixed w-full z-50 glass-panel border-b border-white/5 top-0">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center">
<iconify-icon className="text-white text-xl" icon="solar:sun-2-linear"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-white">SOLAR<span className="text-cyan-400">INDIA</span></span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
<a className="hover:text-cyan-400 transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-cyan-400 transition-colors" href="#process">How it Works</a>
<a className="hover:text-cyan-400 transition-colors" href="#calculator">Savings</a>
<a className="hover:text-cyan-400 transition-colors" href="#installers">Network</a>
</div>
<button className="hidden md:flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-lg text-sm hover:bg-cyan-500/10 transition-all">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
<span>Talk to Expert</span>
</button>

<button className="md:hidden text-white text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 z-0 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 w-full relative z-10 items-center">

<div className="space-y-8" data-aos="fade-right">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-cyan-400 text-xs font-medium tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                    SUBSIDY APPROVED SYSTEMS
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
                    Powering India's <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-glow">Homes with Solar</span>
</h1>
<p className="text-lg text-gray-400 max-w-lg font-light leading-relaxed">
                    Experience futuristic energy independence. Government subsidy-backed, smart-grid ready, and designed for Indian rooftops.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="cta-glow text-white px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 group">
                        Get Free Quote
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="px-8 py-4 rounded-xl border border-white/10 hover:border-cyan-400/50 hover:bg-white/5 text-white transition-all font-medium flex items-center justify-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:calculator-minimalistic-linear"></iconify-icon>
                        Calculate Savings
                    </button>
</div>

<div className="pt-8 border-t border-white/5 grid grid-cols-3 gap-6">
<div>
<div className="text-2xl font-semibold text-white">12k+</div>
<div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Homes Powered</div>
</div>
<div>
<div className="text-2xl font-semibold text-white">45MW</div>
<div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Installed Capacity</div>
</div>
<div>
<div className="text-2xl font-semibold text-white">25 Yr</div>
<div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Performance Warranty</div>
</div>
</div>
</div>

<div className="relative h-[500px] w-full hidden lg:block perspective-1000">

<div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-yellow-100 shadow-[0_0_60px_#ffcc00] animate-[sun-rise_2s_ease-out]"></div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] glass-panel rounded-2xl border-t border-cyan-400/30 p-4 transform rotate-x-12 shadow-2xl">
<div className="grid grid-cols-4 gap-2 h-48">
<div className="bg-[#001f3f] rounded border border-blue-800 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="bg-[#001f3f] rounded border border-blue-800"></div>
<div className="bg-[#001f3f] rounded border border-blue-800"></div>
<div className="bg-[#001f3f] rounded border border-blue-800"></div>
<div className="bg-[#001f3f] rounded border border-blue-800"></div>
<div className="bg-[#001f3f] rounded border border-blue-800 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[dash_3s_infinite_linear]"></div>
</div>
<div className="bg-[#001f3f] rounded border border-blue-800"></div>
<div className="bg-[#001f3f] rounded border border-blue-800"></div>
</div>
</div>

<div className="absolute top-1/3 left-0 glass-panel px-4 py-3 rounded-xl border border-green-500/30 flex items-center gap-3 animate-[float_4s_ease-in-out_infinite]">
<div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
<iconify-icon className="text-green-400" icon="solar:bolt-circle-linear"></iconify-icon>
</div>
<div>
<div className="text-xs text-gray-400">Current Output</div>
<div className="text-sm font-semibold text-white">4.2 kW</div>
</div>
</div>
<div className="absolute bottom-1/4 right-0 glass-panel px-4 py-3 rounded-xl border border-cyan-500/30 flex items-center gap-3 animate-[float_5s_ease-in-out_infinite_reverse]">
<div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
<iconify-icon className="text-cyan-400" icon="solar:battery-charge-linear"></iconify-icon>
</div>
<div>
<div className="text-xs text-gray-400">Battery Status</div>
<div className="text-sm font-semibold text-white">Charging 92%</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 relative grid-bg" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Intelligent Power Flow</h2>
<p className="text-gray-400 max-w-2xl mx-auto">Visualize how our smart systems manage solar generation, home consumption, and grid export in real-time.</p>
</div>
<div className="relative w-full max-w-5xl mx-auto h-40 md:h-64 hidden md:block">

<svg className="overflow-visible" fill="none" height="100%" viewbox="0 0 800 200" width="100%">

<path className="opacity-30" d="M 50,50 Q 150,50 200,100" fill="none" stroke="#007BFF" stroke-dasharray="10 5" strokeWidth="2"></path>
<circle cx="0" cy="0" fill="#00E0FF" r="4">
<animatemotion dur="3s" path="M 50,50 Q 150,50 200,100" repeatcount="indefinite"></animatemotion>
</circle>

<path className="opacity-30" d="M 200,100 L 400,100" fill="none" stroke="#007BFF" stroke-dasharray="10 5" strokeWidth="2"></path>
<circle cx="0" cy="0" fill="#00E0FF" r="4">
<animatemotion dur="2s" path="M 200,100 L 400,100" repeatcount="indefinite"></animatemotion>
</circle>

<path className="opacity-30" d="M 400,100 Q 500,150 600,150" fill="none" stroke="#2ECC71" stroke-dasharray="10 5" strokeWidth="2"></path>
<circle cx="0" cy="0" fill="#2ECC71" r="4">
<animatemotion dur="2.5s" path="M 400,100 Q 500,150 600,150" repeatcount="indefinite"></animatemotion>
</circle>

<path className="opacity-30" d="M 400,100 Q 500,50 750,50" fill="none" stroke="#FFCC00" stroke-dasharray="10 5" strokeWidth="2"></path>
</svg>

<div className="absolute top-0 left-[5%] transform -translate-x-1/2 flex flex-col items-center">
<div className="w-16 h-16 rounded-full glass-panel border border-yellow-500/50 flex items-center justify-center text-yellow-400 shadow-[0_0_20px_rgba(255,204,0,0.2)]">
<iconify-icon className="text-3xl" icon="solar:sun-fog-linear"></iconify-icon>
</div>
<span className="mt-3 text-sm font-medium text-gray-300">Sunlight</span>
</div>
<div className="absolute top-1/2 left-[25%] transform -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
<div className="w-16 h-16 rounded-full glass-panel border border-blue-500/50 flex items-center justify-center text-blue-400 shadow-[0_0_20px_rgba(0,123,255,0.2)]">
<iconify-icon className="text-3xl" icon="solar:solar-power-linear"></iconify-icon>
</div>
<span className="mt-3 text-sm font-medium text-gray-300">Panels</span>
</div>
<div className="absolute top-1/2 left-[50%] transform -translate-y-1/2 -translate-x-1/2 flex flex-col items-center z-10">
<div className="w-20 h-20 rounded-full bg-[#0A2540] border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_30px_rgba(0,224,255,0.4)] animate-[glow-pulse_3s_infinite]">
<iconify-icon className="text-4xl" icon="solar:server-linear"></iconify-icon>
</div>
<span className="mt-3 text-sm font-medium text-cyan-400">Smart Inverter</span>
</div>
<div className="absolute bottom-0 left-[75%] transform -translate-x-1/2 flex flex-col items-center">
<div className="w-16 h-16 rounded-full glass-panel border border-green-500/50 flex items-center justify-center text-green-400">
<iconify-icon className="text-3xl" icon="solar:home-smile-linear"></iconify-icon>
</div>
<span className="mt-3 text-sm font-medium text-gray-300">Home</span>
</div>
<div className="absolute top-0 right-0 transform flex flex-col items-center">
<div className="w-16 h-16 rounded-full glass-panel border border-gray-500/50 flex items-center justify-center text-gray-400">
<iconify-icon className="text-3xl" icon="solar:electric-refueling-linear"></iconify-icon>
</div>
<span className="mt-3 text-sm font-medium text-gray-300">Grid Export</span>
</div>
</div>

<div className="md:hidden space-y-4">
<div className="p-4 glass-panel rounded-xl flex items-center gap-4">
<iconify-icon className="text-yellow-400 text-2xl" icon="solar:sun-fog-linear"></iconify-icon>
<div className="h-1 flex-1 bg-gray-700 rounded overflow-hidden">
<div className="h-full w-1/2 bg-yellow-400"></div>
</div>
<span className="text-white text-sm">Generating</span>
</div>
<div className="p-4 glass-panel rounded-xl flex items-center gap-4">
<iconify-icon className="text-green-400 text-2xl" icon="solar:home-smile-linear"></iconify-icon>
<div className="h-1 flex-1 bg-gray-700 rounded overflow-hidden">
<div className="h-full w-3/4 bg-green-400"></div>
</div>
<span className="text-white text-sm">Consuming</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#051a2e]" id="calculator">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">Estimate Your Savings</h2>
<p className="text-gray-400 mb-8">Calculate potential EMI savings and ROI instantly.</p>
<div className="glass-panel p-8 rounded-2xl border border-white/5 space-y-8">

<div>
<div className="flex justify-between mb-3">
<label className="text-sm font-medium text-gray-300">Monthly Electricity Bill</label>
<span className="text-cyan-400 font-semibold">₹<span id="billVal">3,500</span></span>
</div>
<input className="w-full" max="20000" min="1000" oninput="document.getElementById('billVal').innerText = Number(this.value).toLocaleString()" step="500" type="range" value="3500"/>
<div className="flex justify-between text-xs text-gray-600 mt-2">
<span>₹1k</span>
<span>₹20k</span>
</div>
</div>

<div>
<div className="flex justify-between mb-3">
<label className="text-sm font-medium text-gray-300">Roof Area (sq. ft)</label>
<span className="text-cyan-400 font-semibold"><span id="roofVal">300</span> sq.ft</span>
</div>
<input className="w-full" max="2000" min="100" oninput="document.getElementById('roofVal').innerText = this.value" step="50" type="range" value="300"/>
</div>

<div className="grid grid-cols-2 gap-4 pt-4">
<div className="bg-[#001f3f] p-4 rounded-xl border border-blue-900/50 text-center">
<div className="text-xs text-gray-500 uppercase tracking-wide">Rec. System</div>
<div className="text-xl font-semibold text-white mt-1">3 kW</div>
</div>
<div className="bg-[#001f3f] p-4 rounded-xl border border-blue-900/50 text-center">
<div className="text-xs text-gray-500 uppercase tracking-wide">Monthly Savings</div>
<div className="text-xl font-semibold text-green-400 mt-1">₹3,200</div>
</div>
</div>
<div className="bg-blue-900/20 p-4 rounded-xl border border-blue-500/20 flex items-start gap-3">
<iconify-icon className="text-blue-400 text-lg mt-0.5" icon="solar:info-circle-linear"></iconify-icon>
<p className="text-xs text-blue-200 leading-relaxed">
                            Based on state subsidy rates. EMI starts @ ₹2,800/mo. 5-year ROI guaranteed.
                        </p>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-cyan-400"></div>
<h3 className="text-2xl font-semibold text-gray-900 mb-2">Get Your Solar Quote</h3>
<p className="text-sm text-gray-500 mb-6">Receive a detailed proposal within 24 hours.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-semibold text-gray-700 uppercase">Name</label>
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-gray-700 uppercase">Phone</label>
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm" placeholder="+91 98765..." type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-gray-700 uppercase">Email Address</label>
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-gray-700 uppercase">Pincode</label>
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm" placeholder="110001" type="text"/>
</div>
<div className="pt-2">
<label className="flex items-center gap-3 cursor-pointer">
<input className="custom-checkbox w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" type="checkbox"/>
<span className="text-xs text-gray-500">I agree to receive a call/WhatsApp for the quote.</span>
</label>
</div>
<button className="w-full py-4 rounded-xl bg-gray-900 text-white font-medium hover:bg-black transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg shadow-blue-900/20" type="button">
<span>Check Subsidy Eligibility</span>
<iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon>
</button>
<div className="text-center">
<span className="text-[10px] text-gray-400 flex items-center justify-center gap-1">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                            Your data is secure &amp; encrypted
                        </span>
</div>
</form>
</div>
</div>
</section>

<footer className="bg-[#021024] border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:sun-2-linear"></iconify-icon>
</div>
<span className="text-lg font-semibold text-white">SOLAR<span className="text-cyan-400">INDIA</span></span>
</div>
<p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                        Revolutionizing India's energy landscape with AI-optimized solar solutions. Join the green revolution today.
                    </p>
<div className="flex gap-4 mt-6">
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors text-white" href="#">
<iconify-icon icon="solar:camera-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors text-white" href="#">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Solutions</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li className="hover:text-cyan-400 cursor-pointer">Residential Solar</li>
<li className="hover:text-cyan-400 cursor-pointer">Commercial Plants</li>
<li className="hover:text-cyan-400 cursor-pointer">Off-Grid Systems</li>
<li className="hover:text-cyan-400 cursor-pointer">Maintenance</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li className="hover:text-cyan-400 cursor-pointer">About Us</li>
<li className="hover:text-cyan-400 cursor-pointer">Installer Network</li>
<li className="hover:text-cyan-400 cursor-pointer">Projects</li>
<li className="hover:text-cyan-400 cursor-pointer">Contact</li>
</ul>
</div>
</div>

<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xs text-gray-600">
                    © 2024 SolarIndia Tech Pvt Ltd. All rights reserved.
                </div>
<div className="flex items-center gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 border border-white/10 px-3 py-1.5 rounded bg-white/5">
<iconify-icon className="text-green-400" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-[10px] text-gray-300 font-medium">MNRE APPROVED</span>
</div>
<div className="flex items-center gap-2 border border-white/10 px-3 py-1.5 rounded bg-white/5">
<iconify-icon className="text-yellow-400" icon="solar:medal-ribbon-linear"></iconify-icon>
<span className="text-[10px] text-gray-300 font-medium">BIS CERTIFIED</span>
</div>
</div>
</div>
</div>
</footer>

    </>
  );
}
